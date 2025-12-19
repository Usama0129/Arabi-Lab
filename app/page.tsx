"use client";
import React, { useState, useEffect, useRef } from "react";
// ↓ パスが違う場合は修正してください (../lib/supabaseClient か ./lib/supabaseClient)
import { supabase } from "./lib/supabaseClient";
import { articles, Article, QuizQuestion } from "./data";

// --- Types ---
type Screen = "levels" | "topics" | "list" | "mode_select" | "reader" | "quiz" | "result" | "vocab" | "dictation" | "mypage";
type LearningMode = "reading" | "listening" | "dictation" | "grammar";
type StudyBreakdown = { reading: number; listening: number; dictation: number; vocab: number; grammar: number; };

// --- Arabic Keyboard ---
const ARABIC_KEYS = [
  "ا", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي",
  "ة", "ء", "أ", "إ", "آ", "ى", "ئ", "ؤ", "؟"
];

export default function Home() {
  // --- State ---
  const [currentScreen, setCurrentScreen] = useState<Screen>("levels");
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [learningMode, setLearningMode] = useState<LearningMode>("reading");
  const [activeProblemNumber, setActiveProblemNumber] = useState<number>(0);
  
  const [allArticles, setAllArticles] = useState<Article[]>(articles); 

  const [completedArticleIds, setCompletedArticleIds] = useState<number[]>([]); 
  const [savedVocab, setSavedVocab] = useState<{word: string, meaning: string}[]>([]); 

  const [user, setUser] = useState<any>(null);
  const [isPremium, setIsPremium] = useState(false); 
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  const [isAddingWord, setIsAddingWord] = useState(false);
  const [newArabic, setNewArabic] = useState("");
  const [newJapanese, setNewJapanese] = useState("");

  const [quizScore, setQuizScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [grammarQuestions, setGrammarQuestions] = useState<QuizQuestion[]>([]); 
  const [grammarFeedback, setGrammarFeedback] = useState<string | null>(null); 
  const [quizSelectedOption, setQuizSelectedOption] = useState<number | null>(null);
  const [isQuizResultVisible, setIsQuizResultVisible] = useState(false);
  const [userAnswers, setUserAnswers] = useState<boolean[]>([]);

  const [dictationIndex, setDictationIndex] = useState(0);
  const [dictationInput, setDictationInput] = useState("");
  const [dictationFeedback, setDictationFeedback] = useState<"none" | "correct" | "incorrect">("none");
  const [maskedSentence, setMaskedSentence] = useState<string[]>([]);
  const [hiddenWordIndex, setHiddenWordIndex] = useState<number>(-1);
  const [targetWordClean, setTargetWordClean] = useState("");

  const [revealedVocabIndex, setRevealedVocabIndex] = useState<number | null>(null);
  const [isFlashcardMode, setIsFlashcardMode] = useState(false);
  const [fcIndex, setFcIndex] = useState(0);
  const [fcFlipped, setFcFlipped] = useState(false);
  const [fcReverse, setFcReverse] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const [streak, setStreak] = useState(0);
  const [stats, setStats] = useState({ today: 0, month: 0, total: 0 });
  const [breakdown, setBreakdown] = useState<StudyBreakdown>({ reading: 0, listening: 0, dictation: 0, vocab: 0, grammar: 0 });
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // --- Helpers ---
  const normalizeArabic = (text: string) => text.replace(/[\u064B-\u065F\u0670]/g, "").replace(/[.,،؟:;!۔"«»]/g, "").replace(/\s+/g, " ").trim();
  // 母音記号（タシュキール）を削除する関数
  const removeTashkeel = (text: string) => text.replace(/[\u064B-\u065F\u0670]/g, "");

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    if (h > 0) return `${h}h ${m}m`;
    return `${m}m`;
  };

  const FREE_ARTICLE_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 20, 21, 30, 40];

  const isLockedContent = (article: Article) => {
    if (article.id > 1000) return false; 
    if (isPremium) return false; 
    return !FREE_ARTICLE_IDS.includes(article.id);
  };

  // --- Effects ---
  useEffect(() => {
    const fetchSupabaseArticles = async () => {
      const { data, error } = await supabase
        .from('articles')
        .select(`*, article_sentences(*), article_vocab(*), article_questions(*)`);

      if (error) { console.error("Error:", error); return; }

      if (data && data.length > 0) {
        const formattedArticles: Article[] = data.map((d: any) => ({
          id: d.id + 10000,
          title: d.title,
          level: d.level,
          category: d.category,
          contentPlain: d.content_plain || "", 
          contentVoweled: d.content_voweled || "",
          sentences: d.article_sentences 
            ? d.article_sentences.map((s: any) => ({ arabic: s.arabic, japanese: s.japanese || "", speaker: s.speaker || "Narrator" })).sort((a: any, b: any) => (a.order_index || 0) - (b.order_index || 0))
            : [],
          vocabList: d.article_vocab ? d.article_vocab.map((v: any) => ({ word: v.word, meaning: v.meaning })) : [],
          questions: d.article_questions ? d.article_questions.map((q: any) => ({ type: q.type, text: q.text, options: q.options || [], correctIndex: q.correct_index, explanation: q.explanation || "" })) : []
        }));
        setAllArticles([...articles, ...formattedArticles]);
      } else {
        setAllArticles(articles);
      }
    };
    fetchSupabaseArticles();
  }, []);

  useEffect(() => {
    const fetchProfile = async (userId: string) => {
      const { data } = await supabase.from('profiles').select('is_premium').eq('id', userId).single();
      if (data) setIsPremium(data.is_premium || false);
    };
    const fetchVocab = async (userId: string) => {
      const { data } = await supabase.from('vocab').select('word, meaning').order('created_at', { ascending: false });
      if (data) setSavedVocab(data);
    };
    const initUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      if (session?.user) { fetchProfile(session.user.id); fetchVocab(session.user.id); } 
      else { setIsPremium(false); setSavedVocab(JSON.parse(localStorage.getItem("arabicApp_vocab") || "[]")); }
    };
    initUser();
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) { fetchProfile(session.user.id); fetchVocab(session.user.id); } 
      else { setIsPremium(false); setSavedVocab(JSON.parse(localStorage.getItem("arabicApp_vocab") || "[]")); }
    });
    return () => subscription.unsubscribe();
  }, []);

  // Stats Logic (省略)
  useEffect(() => {
    setCompletedArticleIds(JSON.parse(localStorage.getItem("arabicApp_completed") || "[]"));
    const lastDate = localStorage.getItem("arabicApp_lastDate");
    const today = new Date().toDateString();
    let newStreak = parseInt(localStorage.getItem("arabicApp_streak") || "0");
    if (lastDate !== today) {
      const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
      if (lastDate === yesterday.toDateString()) newStreak += 1; else newStreak = 1;
      localStorage.setItem("arabicApp_streak", newStreak.toString());
      localStorage.setItem("arabicApp_lastDate", today);
      setStats(prev => ({ ...prev, today: 0 }));
    } else {
      setStats(prev => ({ ...prev, today: parseInt(localStorage.getItem("arabicApp_todayTime") || "0") }));
    }
    setStreak(newStreak);
    setStats(prev => ({ ...prev, total: parseInt(localStorage.getItem("arabicApp_totalTime") || "0"), month: parseInt(localStorage.getItem("arabicApp_monthTime") || "0") }));
    setBreakdown(JSON.parse(localStorage.getItem("arabicApp_breakdown") || JSON.stringify({ reading: 0, listening: 0, dictation: 0, vocab: 0, grammar: 0 })));
  }, []);
  useEffect(() => {
    timerRef.current = setInterval(() => {
      let activeCategory: keyof StudyBreakdown | null = null;
      if (currentScreen === "reader") {
        if (learningMode === "grammar") activeCategory = "grammar";
        else activeCategory = learningMode === "listening" ? "listening" : "reading";
      }
      else if (currentScreen === "dictation") activeCategory = "dictation";
      else if (currentScreen === "vocab") activeCategory = "vocab";
      else if (currentScreen === "quiz") activeCategory = "reading";
      if (activeCategory) {
        setStats(prev => {
          const next = { today: prev.today + 1, month: prev.month + 1, total: prev.total + 1 };
          if (next.total % 5 === 0) { localStorage.setItem("arabicApp_todayTime", next.today.toString()); localStorage.setItem("arabicApp_monthTime", next.month.toString()); localStorage.setItem("arabicApp_totalTime", next.total.toString()); }
          return next;
        });
        setBreakdown(prev => {
          const next = { ...prev, [activeCategory!]: (prev[activeCategory!] || 0) + 1 };
          if ((stats.total + 1) % 5 === 0) localStorage.setItem("arabicApp_breakdown", JSON.stringify(next));
          return next;
        });
      }
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [currentScreen, learningMode, stats.total]);
  useEffect(() => {
    localStorage.setItem("arabicApp_completed", JSON.stringify(completedArticleIds));
  }, [completedArticleIds]);


  // --- Functions ---
  const saveWord = async (word: string, meaning: string) => {
    if (savedVocab.some(v => v.word === word)) return;
    const newWord = { word, meaning };
    setSavedVocab(prev => [newWord, ...prev]);
    setRevealedVocabIndex(null);
    if (user) { await supabase.from('vocab').insert({ user_id: user.id, word, meaning }); } 
    else { const updated = [newWord, ...savedVocab]; localStorage.setItem("arabicApp_vocab", JSON.stringify(updated)); }
  };
  const deleteWord = async (wordToDelete: string) => {
    setSavedVocab(prev => prev.filter(v => v.word !== wordToDelete));
    if (user) { await supabase.from('vocab').delete().match({ user_id: user.id, word: wordToDelete }); } 
    else { const updated = savedVocab.filter(v => v.word !== wordToDelete); localStorage.setItem("arabicApp_vocab", JSON.stringify(updated)); }
  };
  const handleAddCustomWord = () => {
    if (!newArabic.trim() || !newJapanese.trim()) return;
    saveWord(newArabic.trim(), newJapanese.trim());
    setNewArabic(""); setNewJapanese(""); setIsAddingWord(false);
  };
  const handleLogin = async () => { await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: window.location.origin } }); };
  const handleLogout = async () => { await supabase.auth.signOut(); setUser(null); setIsPremium(false); setSavedVocab(JSON.parse(localStorage.getItem("arabicApp_vocab") || "[]")); changeScreen("levels"); };
  const changeScreen = (screen: Screen) => { stopSpeaking(); setCurrentScreen(screen); };
  const handleSelectLevel = (level: string) => { 
    setSelectedLevel(level); 
    if (["初級", "会話", "中級", "上級"].includes(level)) { changeScreen("topics"); } else { setSelectedCategory(""); changeScreen("list"); } 
  };
  const handleSelectCategory = (category: string) => { setSelectedCategory(category); changeScreen("list"); };
  const handleArticleClick = (article: Article, index: number) => { 
    if (isLockedContent(article)) { setShowUpgradeModal(true); return; }
    setActiveArticle(article); setActiveProblemNumber(index + 1); setRevealedVocabIndex(null); changeScreen("mode_select"); 
  };
  const generateDictationProblem = (article: Article, index: number) => {
    if (!article.sentences || article.sentences.length === 0) return;
    const fullSentence = article.sentences[index].arabic;
    const words = fullSentence.split(" ");
    let candidates: number[] = [];
    words.forEach((word, i) => { if (normalizeArabic(word).length >= 3) candidates.push(i); });
    if (candidates.length === 0) candidates = words.map((_, i) => i);
    const targetIndex = candidates[Math.floor(Math.random() * candidates.length)];
    setMaskedSentence(words); setHiddenWordIndex(targetIndex); setTargetWordClean(normalizeArabic(words[targetIndex]));
    setDictationInput(""); setDictationFeedback("none");
  };
  const handleKeyClick = (char: string) => { setDictationInput(prev => prev + char); };
  const handleBackspace = () => { setDictationInput(prev => prev.slice(0, -1)); };
  const handleSpace = () => { setDictationInput(prev => prev + " "); };
  const startLearning = (mode: LearningMode) => {
    setLearningMode(mode);
    if (mode === "dictation" && activeArticle) { 
        if (!activeArticle.sentences || activeArticle.sentences.length === 0) { alert("このコンテンツには書き取り問題がありません"); return; }
        setDictationIndex(0); generateDictationProblem(activeArticle, 0); changeScreen("dictation"); 
    }
    else if (mode === "grammar" && activeArticle) {
      const grammarQs = activeArticle.questions.filter(q => q.type === "grammar");
      if (grammarQs.length === 0) { alert("このコンテンツには文法問題がありません"); return; }
      setGrammarQuestions(grammarQs); setCurrentQuestionIndex(0); setGrammarFeedback(null); changeScreen("reader");
    } else { changeScreen("reader"); }
  };
  const startQuiz = () => { 
    if (!activeArticle || activeArticle.questions.length === 0) { alert("クイズがありません"); return; }
    stopSpeaking(); setQuizScore(0); setCurrentQuestionIndex(0); setQuizSelectedOption(null); setIsQuizResultVisible(false); setUserAnswers([]); changeScreen("quiz"); 
  };
  const handleQuizOptionClick = (index: number) => {
    if (isQuizResultVisible || !activeArticle) return;
    setQuizSelectedOption(index); setIsQuizResultVisible(true);
    const isCorrect = index === activeArticle.questions[currentQuestionIndex].correctIndex;
    if (isCorrect) { setQuizScore(prev => prev + 1); speakText("Mumtāz"); }
    setUserAnswers(prev => [...prev, isCorrect]);
  };
  const nextQuizQuestion = () => {
    if (!activeArticle) return;
    if (currentQuestionIndex < activeArticle.questions.length - 1) { setCurrentQuestionIndex(prev => prev + 1); setQuizSelectedOption(null); setIsQuizResultVisible(false); }
    else { if (!completedArticleIds.includes(activeArticle.id)) { setCompletedArticleIds([...completedArticleIds, activeArticle.id]); } changeScreen("result"); }
  };
  const handleGrammarAnswer = (optionIndex: number) => {
    const currentQ = grammarQuestions[currentQuestionIndex];
    if (optionIndex === currentQ.correctIndex) { setGrammarFeedback("correct"); speakText(currentQ.options[optionIndex]); } else { setGrammarFeedback("incorrect"); }
  };
  const nextGrammarQuestion = () => { if (currentQuestionIndex < grammarQuestions.length - 1) { setCurrentQuestionIndex(prev => prev + 1); setGrammarFeedback(null); } else { changeScreen("result"); } };
  const checkDictation = () => { if (normalizeArabic(dictationInput) === targetWordClean) setDictationFeedback("correct"); else setDictationFeedback("incorrect"); };
  const nextDictation = () => { if (!activeArticle) return; if (dictationIndex < activeArticle.sentences.length - 1) { const nextIdx = dictationIndex + 1; setDictationIndex(nextIdx); generateDictationProblem(activeArticle, nextIdx); } else changeScreen("result"); };
  
  // 音声再生
  const speakText = (text: string, speaker?: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const cleanText = text.replace(/[\(\)a-zA-Z0-9\-\.]/g, "").trim(); 
      const u = new SpeechSynthesisUtterance(cleanText);
      const voices = window.speechSynthesis.getVoices();
      const arabicVoice = voices.find(v => v.lang.includes('ar'));
      if (arabicVoice) { u.voice = arabicVoice; u.lang = arabicVoice.lang; } else { u.lang = 'ar-SA'; }
      if (speaker) { if (speaker.includes("客") || speaker.includes("私") || speaker.includes("自分") || speaker.includes("サラ")) { u.pitch = 1.1; } else { u.pitch = 0.9; } }
      u.onstart = () => setIsSpeaking(true);
      u.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(u);
    }
  };

  // 記事の読み上げ機能
  const playArticleAudio = () => {
    if (!activeArticle || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    setIsSpeaking(true);
    let voices = window.speechSynthesis.getVoices();
    if (voices.length === 0) { window.speechSynthesis.onvoiceschanged = () => { voices = window.speechSynthesis.getVoices(); startPlayback(); }; } else { startPlayback(); }

    function startPlayback() {
        if (activeArticle?.category === "会話" || (activeArticle?.level === "会話" && activeArticle.sentences)) {
          // 会話モード
          if (activeArticle!.sentences.length > 0) {
             let currentIndex = 0;
             const speakNextSentence = () => {
                if (currentIndex >= activeArticle!.sentences.length) { setIsSpeaking(false); return; }
                const sent = activeArticle!.sentences[currentIndex];
                const u = new SpeechSynthesisUtterance(sent.arabic);
                const arabicVoice = voices.find(v => v.lang.includes('ar'));
                if (arabicVoice) { u.voice = arabicVoice; u.lang = arabicVoice.lang; } else { u.lang = 'ar-SA'; }
                if (currentIndex % 2 === 0) { u.pitch = 1.1; } else { u.pitch = 0.9; }
                u.onend = () => { currentIndex++; speakNextSentence(); };
                window.speechSynthesis.speak(u);
             };
             speakNextSentence();
          } else { setIsSpeaking(false); }
        } else {
          // 読解モード（音声再生ロジック）
          // 上級: 母音なし優先、中級: 母音あり優先
          let textToRead = "";
          
          if (activeArticle!.level === "上級") {
             // 上級: Plain(母音なし) 優先
             textToRead = (activeArticle!.sentences && activeArticle!.sentences.length > 0) 
                 ? activeArticle!.sentences.map(s => s.arabic).join(" ") 
                 : (activeArticle!.contentPlain || activeArticle!.contentVoweled || "");
             // 音声としては母音がないと変かもしれないが、ロジックとしてはPlain優先
          } else if (activeArticle!.level === "中級" || activeArticle?.category === "物語") {
             // 中級: Voweled(母音あり) 優先
             textToRead = (activeArticle!.sentences && activeArticle!.sentences.length > 0) 
                 ? activeArticle!.sentences.map(s => s.arabic).join(" ") 
                 : (activeArticle!.contentVoweled || activeArticle!.contentPlain || "");
          } else {
             // 初級: Voweled(母音あり) 優先
             textToRead = activeArticle!.contentVoweled || activeArticle!.contentPlain || "";
          }

          if (textToRead) {
            const u = new SpeechSynthesisUtterance(textToRead);
            u.lang = 'ar-SA';
            u.onend = () => setIsSpeaking(false);
            window.speechSynthesis.speak(u);
          }
        }
    }
  };

  const stopSpeaking = () => { if ('speechSynthesis' in window) { window.speechSynthesis.cancel(); setIsSpeaking(false); } };
  const nextCard = () => { setFcFlipped(false); setFcIndex((prev) => (prev + 1) % savedVocab.length); };
  const prevCard = () => { setFcFlipped(false); setFcIndex((prev) => (prev - 1 + savedVocab.length) % savedVocab.length); };
  const getQuestionTypeLabel = (type: string) => { switch (type) { case "grammar": return "🧩 文法"; case "vocabulary": return "💡 単語"; case "tashkeel": return "🔡 母音"; case "reading": default: return "📖 読解"; } };

  // --- Render ---
  return (
    <div className="min-h-screen bg-[#FDFCF8] font-sans text-gray-800" dir="rtl">
      <nav className="bg-emerald-950 shadow-md p-4 sticky top-0 z-20 border-b border-amber-500/30">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3" onClick={() => { changeScreen("levels"); setIsFlashcardMode(false); }}>
             <div className="bg-white p-1 rounded-lg shadow-sm hover:scale-105 transition-transform duration-300 border border-amber-400/30 cursor-pointer">
                <img src="/logo.jpg" alt="Logo" className="h-10 w-auto object-contain" onError={(e) => {e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-lg flex items-center justify-center text-white text-xl font-bold">🇸🇦</div>';}} />
             </div>
             <h1 className="font-serif font-bold text-amber-50 cursor-pointer text-xl tracking-wider hidden sm:block">Arabi Lab</h1>
             <div className="flex items-center gap-1 bg-emerald-900/50 px-3 py-1 rounded-full border border-emerald-700 text-xs font-bold text-emerald-100 ml-2"><span className="text-amber-400 animate-pulse">🔥</span> {streak}</div>
          </div>
          <div className="flex items-center gap-2">
            {user ? (
                <div className="flex items-center gap-2 mr-2">
                    <span className="text-emerald-100 text-[10px] hidden sm:inline">Hello!</span>
                    {isPremium && <span className="bg-amber-400 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse shadow-sm border border-amber-200">👑 Premium</span>}
                    <button onClick={handleLogout} className="flex items-center gap-2 bg-emerald-900 text-emerald-100 px-3 py-1 rounded-full text-xs font-bold hover:bg-red-900 transition border border-emerald-700">{user.user_metadata?.avatar_url ? (<img src={user.user_metadata.avatar_url} className="w-5 h-5 rounded-full border border-white/30" alt="icon" />) : (<span>👤</span>)}<span className="hidden sm:inline">ログアウト</span></button>
                </div>
            ) : (
                <button onClick={handleLogin} className="bg-white text-emerald-900 px-4 py-2 rounded-full font-bold text-xs shadow hover:bg-gray-100 transition mr-2 flex items-center gap-1"><span className="text-blue-500 font-bold text-sm">G</span> ログイン</button>
            )}
            <button onClick={() => changeScreen("mypage")} className="flex items-center justify-center w-10 h-10 bg-emerald-900/50 hover:bg-emerald-800 text-emerald-100 rounded-full transition shadow-sm border border-emerald-700">👤</button>
            <button onClick={() => { changeScreen("vocab"); setIsFlashcardMode(false); }} className="flex items-center gap-2 text-xs bg-amber-500 text-emerald-950 px-4 py-2 rounded-full font-bold shadow hover:bg-amber-400 transition">📒 <span className="hidden sm:inline">単語帳 ({savedVocab.length})</span></button>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto p-4 pb-20">
        {currentScreen === "mypage" && (
           <div className="animate-fade-in-up">
             <div className="mb-6 flex justify-between items-end"><h2 className="text-2xl font-serif font-bold text-emerald-950">📊 学習レポート</h2><button onClick={() => changeScreen("levels")} className="text-sm text-gray-400 hover:text-emerald-700 transition">閉じる ✕</button></div>
             {user && (<div className="bg-white p-4 rounded-xl shadow-sm border border-emerald-100 mb-6 flex items-center gap-4" dir="ltr">{user.user_metadata?.avatar_url ? (<img src={user.user_metadata.avatar_url} className="w-12 h-12 rounded-full" alt="User" />) : <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-2xl">👤</div>}<div><div className="flex items-center gap-2"><p className="font-bold text-emerald-900">{user.user_metadata?.full_name || "ユーザー"}</p>{isPremium ? <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full border border-amber-200">👑 有料会員</span> : <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">無料会員</span>}</div><p className="text-xs text-gray-500">{user.email}</p></div></div>)}
             <div className="grid grid-cols-3 gap-4 mb-8 text-center" dir="ltr"><StatCard label="今日" value={formatTime(stats.today)} color="text-emerald-700" /><StatCard label="今月" value={formatTime(stats.month)} color="text-blue-700" /><StatCard label="総計" value={formatTime(stats.total)} color="text-amber-600" /></div>
             <div className="bg-white p-6 rounded-2xl shadow-lg border border-amber-100"><h3 className="font-bold mb-6 text-gray-600 font-serif">📈 スキルバランス</h3><div className="space-y-4" dir="ltr">{Object.entries(breakdown).map(([key, val]) => (<div key={key} className="space-y-2"><div className="flex justify-between text-xs font-bold uppercase text-gray-400"><span>{key}</span><span>{formatTime(val)}</span></div><div className="w-full bg-stone-100 rounded-full h-2.5 overflow-hidden"><div className={`h-full rounded-full ${key==='reading'?'bg-emerald-600':key==='listening'?'bg-blue-600':key==='dictation'?'bg-orange-500': key==='grammar' ? 'bg-purple-600' : 'bg-amber-500'}`} style={{width: `${stats.total ? (val/stats.total)*100 : 0}%`}}></div></div></div>))}</div></div></div>
        )}

        {/* コース選択画面 */}
        {currentScreen === "levels" && (
          <div className="text-center py-10 animate-fade-in-up">
            <h2 className="text-3xl font-serif font-bold mb-3 text-emerald-950">コース選択</h2>
            <div className="w-16 h-1 bg-amber-400 mx-auto mb-8 rounded-full"></div>
            <div className="grid grid-cols-2 gap-4" dir="ltr">
              {/* ★ ここを修正しました */}
              <LevelButton title="初級" subtitle="文法" color="bg-emerald-50 border-emerald-200" icon="🌱" onClick={() => handleSelectLevel("初級")} />
              <LevelButton title="会話" subtitle="日常会話" color="bg-amber-50 border-amber-200" icon="💬" onClick={() => handleSelectLevel("会話")} />
              <LevelButton title="中級" subtitle="発音記号あり・短文" color="bg-blue-50 border-blue-200" icon="📖" onClick={() => handleSelectLevel("中級")} />
              <LevelButton title="上級" subtitle="発音記号なし、長文" color="bg-purple-50 border-purple-200" icon="📰" onClick={() => handleSelectLevel("上級")} />
            </div>
          </div>
        )}

        {currentScreen === "topics" && (
          <div className="animate-fade-in-up">
            <button onClick={() => changeScreen("levels")} className="text-gray-400 mb-6 text-sm hover:text-emerald-700 transition flex items-center gap-1 font-bold">← 戻る</button>
            <h2 className="text-2xl font-serif font-bold mb-6 text-emerald-950 border-b-2 border-amber-400 pb-2 inline-block">{selectedLevel === "初級" ? "文法カテゴリー" : selectedLevel === "会話" ? "会話シーン" : selectedLevel === "中級" ? "中級テーマ" : "上級テーマ"}</h2>
            <div className="grid grid-cols-2 gap-4" dir="ltr">
              {Array.from(new Set(allArticles.filter(a => a.level === selectedLevel).map(a => a.category))).map(cat => (<button key={cat} onClick={() => handleSelectCategory(cat)} className="bg-white p-6 rounded-xl shadow hover:shadow-lg border border-stone-200 hover:border-emerald-500 transition-all text-left group relative overflow-hidden"><div className="absolute top-0 right-0 w-2 h-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div><span className="text-2xl mb-2 block group-hover:scale-110 transition-transform w-fit">🏷️</span><span className="font-bold text-gray-700 group-hover:text-emerald-800 transition">{cat}</span></button>))}
            </div>
          </div>
        )}

        {currentScreen === "list" && (
          <div className="animate-fade-in-up">
            <button onClick={() => ["初級", "会話", "中級", "上級"].includes(selectedLevel) ? changeScreen("topics") : changeScreen("levels")} className="text-gray-400 mb-6 text-sm hover:text-emerald-700 transition flex items-center gap-1 font-bold">← 戻る</button>
            <div className="flex justify-between items-end mb-6 border-b border-stone-200 pb-2"><h2 className="text-xl font-serif font-bold text-emerald-950">{selectedCategory} ({selectedLevel})</h2></div>
            <div className="space-y-3">
              {allArticles.filter(a => a.level === selectedLevel && (a.category === selectedCategory || (selectedLevel !== "初級" && selectedLevel !== "会話" && selectedLevel !== "中級" && selectedLevel !== "上級"))).map((article, index) => {
                  const locked = isLockedContent(article);
                  return (
                    <div key={article.id} onClick={() => handleArticleClick(article, index)} className={`p-5 rounded-xl shadow-sm border flex justify-between items-center transition-all group cursor-pointer ${locked ? "bg-stone-100 border-stone-200" : "bg-white hover:shadow-md border-stone-100 hover:border-amber-300"}`}>
                        <div className="flex-1 flex items-center gap-3">{locked && (<div className="bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center text-lg shadow-inner" title="有料会員限定">🔒</div>)}<h3 className={`font-bold text-lg ${locked ? "text-gray-400" : "text-gray-800 group-hover:text-emerald-800 transition"}`}>{selectedLevel === "初級" ? `問題 ${index + 1} (${article.title})` : article.title}</h3></div>
                        {completedArticleIds.includes(article.id) ? <span className="text-emerald-600 text-xl bg-emerald-100 p-1 rounded-full">✓</span> : (locked ? <span className="text-gray-300 text-sm">Premium</span> : <span className="text-stone-300 text-xl group-hover:text-amber-500 transition">❮</span>)}
                    </div>
                  );
              })}
            </div>
          </div>
        )}

        {/* 読解・学習画面 */}
        {currentScreen === "reader" && activeArticle && (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden pb-10 border border-stone-200 animate-fade-in-up">
            <div className="bg-emerald-900 text-amber-50 p-4 flex justify-between items-center sticky top-0 z-10"><button onClick={() => changeScreen("list")} className="hover:text-white text-sm font-bold opacity-80 transition">✕ 閉じる</button><span className="font-bold text-xs tracking-wider opacity-80">{activeArticle.category}</span></div>
            <div className="p-6 md:p-10 flex flex-col items-center">
              
              {learningMode === "grammar" ? (
                <div className="w-full max-w-xl">
                  {grammarQuestions.length > 0 ? (
                    <>
                      <div className="text-center mb-10"><span className="inline-block bg-purple-50 text-purple-700 border border-purple-200 px-4 py-1 rounded-full text-xs font-bold mb-6 tracking-wider">QUIZ {currentQuestionIndex + 1} / {grammarQuestions.length}</span><h2 className="text-xl font-bold mb-4 leading-relaxed text-gray-800">{grammarQuestions[currentQuestionIndex].text}</h2></div>
                      <div className="space-y-4 mb-8">{grammarQuestions[currentQuestionIndex].options.map((option, idx) => (<button key={idx} onClick={() => handleGrammarAnswer(idx)} disabled={grammarFeedback !== null} className={`w-full p-5 text-right rounded-xl border transition-all shadow-sm ${grammarFeedback ? (idx === grammarQuestions[currentQuestionIndex].correctIndex ? "bg-emerald-50 border-emerald-500 text-emerald-900" : "bg-gray-50 border-gray-200 opacity-50") : "bg-white border-stone-200 hover:border-purple-400 hover:bg-purple-50"}`}><span className="font-arabic text-lg">{option}</span></button>))}</div>
                      {grammarFeedback === "correct" && (<div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-center mb-6 animate-bounce"><p className="text-2xl mb-1">🎉</p><p className="font-bold text-emerald-800">正解！</p><p className="text-xs text-emerald-600 mt-1">{grammarQuestions[currentQuestionIndex].explanation}</p></div>)}
                      {grammarFeedback === "incorrect" && (<div className="bg-red-50 border border-red-200 p-4 rounded-xl text-center mb-6"><p className="text-2xl mb-1">😢</p><p className="font-bold text-red-800">残念...</p><p className="text-xs text-red-600 mt-1">{grammarQuestions[currentQuestionIndex].explanation}</p></div>)}
                      {grammarFeedback && (<button onClick={nextGrammarQuestion} className="w-full bg-emerald-800 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-emerald-900 transition transform">{currentQuestionIndex < grammarQuestions.length - 1 ? "次の問題へ" : "結果を見る"}</button>)}
                    </>
                  ) : (<div className="text-center py-20 text-gray-400">文法問題がありません</div>)}
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-serif font-bold mb-8 text-center text-emerald-950 w-full max-w-md">{activeArticle.level === "初級" ? `問題 ${activeProblemNumber} (${activeArticle.title})` : activeArticle.title}</h2>
                  {learningMode === "listening" ? (
                    <div className="w-full py-20 flex flex-col items-center justify-center bg-stone-50 rounded-2xl mb-8 border border-stone-200 shadow-inner">
                      <div className="text-6xl mb-6 animate-pulse opacity-80">🎧</div>
                      <p className="text-gray-400 mb-8 text-sm font-bold tracking-widest">LISTENING MODE</p>
                      {!isSpeaking ? <button onClick={playArticleAudio} className="bg-emerald-700 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-emerald-800 transition transform hover:-translate-y-1">▶ 再生する</button> : <button onClick={stopSpeaking} className="bg-stone-400 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-stone-500 transition">⏹ 停止</button>}
                    </div>
                  ) : (
                    <>
                      <div className="w-full flex justify-end mb-4"><button onClick={playArticleAudio} className="text-xs font-bold bg-amber-100 px-3 py-2 rounded-full hover:bg-amber-200 text-amber-900 transition flex items-center gap-1">🔊 音声再生</button></div>
                      {activeArticle.level === "会話" ? (
                        <div className="w-full space-y-6 mb-10">
                           {activeArticle.sentences?.map((sent, idx) => {
                             const isRight = idx % 2 === 0;
                             return (
                               <div key={idx} className={`flex ${isRight ? "justify-start" : "justify-end"}`}>
                                 <div className={`max-w-[85%] p-5 rounded-2xl relative shadow-sm border ${isRight ? "bg-emerald-50 text-emerald-900 rounded-tr-none border-emerald-100" : "bg-white text-gray-800 rounded-tl-none border-gray-100"}`}>
                                   <div className="flex justify-between items-center mb-2"><p className="text-xs font-bold opacity-60 uppercase">{sent.speaker}</p><button onClick={() => speakText(sent.arabic, sent.speaker)} className="text-gray-300 hover:text-emerald-600 text-sm transition">🔊</button></div>
                                   <p className="text-xl font-arabic leading-loose">{sent.arabic}</p>
                                 </div>
                               </div>
                             );
                           })}
                        </div>
                      ) : (
                        // ★ 本文表示ロジック（修正完了）
                        <p className="text-3xl leading-[2.5] font-arabic text-justify mb-10 w-full text-gray-800" dir="rtl">
                           {(() => {
                             if (activeArticle.level === "上級") {
                               // 上級: Plain(母音なし) 優先。もしPlainが無ければ、Sentences(母音あり)の母音を消して表示
                               if (activeArticle.contentPlain) return activeArticle.contentPlain;
                               if (activeArticle.sentences && activeArticle.sentences.length > 0) {
                                   return removeTashkeel(activeArticle.sentences.map(s => s.arabic).join(" "));
                               }
                               return activeArticle.contentVoweled ? removeTashkeel(activeArticle.contentVoweled) : "";
                             } else if (activeArticle.level === "中級" || activeArticle.category === "物語") {
                               // 中級: Voweled(母音あり) 優先
                               return (activeArticle.sentences && activeArticle.sentences.length > 0)
                                   ? activeArticle.sentences.map(s => s.arabic).join(" ")
                                   : (activeArticle.contentVoweled || activeArticle.contentPlain || "");
                             } else {
                               // 初級: Voweled(母音あり) 優先
                               return (activeArticle.contentVoweled || activeArticle.contentPlain);
                             }
                           })()}
                        </p>
                      )}
                      <div className="mb-10 w-full"><h3 className="font-bold mb-4 text-xs text-stone-400 tracking-widest uppercase">Vocabulary</h3><div className="flex flex-wrap gap-2">{activeArticle.vocabList.map((v, i) => (<VocabButton key={i} v={v} i={i} isRevealed={revealedVocabIndex === i} isSaved={savedVocab.some(sv => sv.word === v.word)} onReveal={() => setRevealedVocabIndex(i)} onSave={() => saveWord(v.word, v.meaning)} />))}</div></div>
                    </>
                  )}
                  <button onClick={startQuiz} className="w-full bg-emerald-800 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-emerald-900 transition transform flex items-center justify-center gap-2"><span>📝</span> 理解度チェック ({activeArticle.questions.length}問)</button>
                </>
              )}
            </div>
          </div>
        )}
        {/* 残りの共通画面コンポーネント (省略なし) */}
        {currentScreen === "mode_select" && activeArticle && (
          <div className="flex flex-col items-center justify-center py-10 animate-fade-in-up max-w-xl mx-auto">
            <div className="w-24 h-24 bg-gradient-to-br from-emerald-700 to-emerald-900 text-amber-400 rounded-full flex items-center justify-center text-4xl mb-8 shadow-xl border-4 border-amber-100">🎓</div>
            <h2 className="text-2xl font-serif font-bold mb-4 text-center text-emerald-950">
              {activeArticle.level === "初級" ? `問題 ${activeProblemNumber} (${activeArticle.title})` : activeArticle.title}
            </h2>
            <p className="text-gray-500 mb-10 text-sm tracking-wide">学習モードを選択</p>
            <div className={`grid gap-4 w-full ${activeArticle.level === "初級" ? "grid-cols-2" : "grid-cols-1 md:grid-cols-3"}`} dir="ltr">
              {activeArticle.level !== "初級" && (
                <>
                  <ModeButton icon="📖" title="Reading" subtitle="読んで理解" color="border-emerald-200 hover:bg-emerald-50 text-emerald-900" onClick={() => startLearning("reading")} />
                  <ModeButton icon="🎧" title="Listening" subtitle="音声のみ" color="border-blue-200 hover:bg-blue-50 text-blue-900" onClick={() => startLearning("listening")} />
                </>
              )}
              {activeArticle.level === "初級" && (
                <ModeButton icon="🧩" title="Grammar" subtitle="文法理解" color="border-purple-200 hover:bg-purple-50 text-purple-900" onClick={() => startLearning("grammar")} />
              )}
              <ModeButton icon="✍️" title="Dictation" subtitle="書き取り" color="border-orange-200 hover:bg-orange-50 text-orange-900" onClick={() => startLearning("dictation")} />
            </div>
            <button onClick={() => changeScreen("list")} className="mt-12 text-gray-400 underline hover:text-emerald-700 transition">キャンセル</button>
          </div>
        )}
        {currentScreen === "dictation" && activeArticle && activeArticle.sentences && (
          <div className="max-w-xl mx-auto animate-fade-in-up pb-32">
             <div className="mb-6 flex justify-between items-center"><span className="text-xs font-bold text-gray-400 tracking-widest" dir="ltr">SENTENCE {dictationIndex + 1} / {activeArticle.sentences.length}</span><button onClick={() => changeScreen("list")} className="text-sm text-gray-400 hover:text-red-500">中断</button></div>
             <div className="bg-white p-8 rounded-2xl shadow-xl mb-4 text-center border border-stone-100">
               <h3 className="font-bold text-emerald-900 mb-8 font-serif">書き取り練習</h3>
               <button onClick={() => speakText(activeArticle.sentences[dictationIndex].arabic, activeArticle.sentences[dictationIndex].speaker)} className="bg-amber-100 text-amber-700 w-20 h-20 rounded-full text-4xl mb-10 hover:bg-amber-200 transition shadow-inner mx-auto flex items-center justify-center hover:scale-110 active:scale-95 border-2 border-amber-200">🔊</button>
               <div className="mb-10 text-2xl leading-loose font-arabic text-gray-800 flex flex-wrap justify-center gap-3" dir="rtl">{maskedSentence.map((word, i) => (i === hiddenWordIndex ? (<span key={i} className="border-b-4 border-amber-400 min-w-[100px] text-amber-700 px-2 font-bold bg-amber-50 rounded">{dictationFeedback === "correct" || dictationFeedback === "incorrect" ? word : "______"}</span>) : (<span key={i} className="opacity-50">{word}</span>)))}</div>
               <input type="text" dir="rtl" value={dictationInput} onChange={(e) => setDictationInput(e.target.value)} placeholder="キーボードで入力..." className="w-full p-4 text-2xl border-2 border-stone-200 rounded-xl focus:border-amber-400 focus:ring-4 focus:ring-amber-100 outline-none font-arabic text-center mb-6 transition-all" />
               {dictationFeedback === "correct" && <div className="mb-6 bg-emerald-50 text-emerald-800 p-4 rounded-xl font-bold border border-emerald-200">✅ 正解！Excellent!</div>}
               {dictationFeedback === "incorrect" && <div className="mb-6 bg-red-50 text-red-800 p-4 rounded-xl font-bold border border-red-200">😢 正解は「{targetWordClean}」</div>}
               {dictationFeedback === "none" ? (<button onClick={checkDictation} className="w-full bg-emerald-800 text-white font-bold py-4 rounded-xl hover:bg-emerald-900 transition shadow-lg">答え合わせ</button>) : (<button onClick={nextDictation} className="w-full bg-amber-500 text-white font-bold py-4 rounded-xl hover:bg-amber-600 transition shadow-lg">{dictationIndex < activeArticle.sentences.length - 1 ? "次の文へ →" : "結果を見る"}</button>)}
             </div>
             <div className="fixed bottom-0 left-0 w-full bg-gray-100 border-t border-gray-300 p-2 z-30 shadow-2xl"><div className="max-w-3xl mx-auto"><div className="flex flex-wrap gap-1 justify-center mb-2" dir="rtl">{ARABIC_KEYS.map((char) => (<button key={char} onClick={() => handleKeyClick(char)} className="w-10 h-12 bg-white rounded shadow border-b-4 border-gray-200 active:border-b-0 active:translate-y-1 font-arabic text-xl hover:bg-gray-50 text-gray-800">{char}</button>))}</div><div className="flex gap-2 justify-center"><button onClick={handleSpace} className="flex-1 max-w-xs h-12 bg-white rounded shadow border-b-4 border-gray-200 active:border-b-0 active:translate-y-1 text-gray-600 font-bold">SPACE</button><button onClick={handleBackspace} className="w-20 h-12 bg-red-100 text-red-600 rounded shadow border-b-4 border-red-200 active:border-b-0 active:translate-y-1 font-bold">⌫</button></div></div></div>
          </div>
        )}
        {currentScreen === "quiz" && activeArticle && (
          <div className="max-w-xl mx-auto animate-fade-in-up">
             <div className="mb-4 text-center text-xs font-bold text-gray-400 tracking-widest" dir="ltr">QUESTION {currentQuestionIndex + 1} / {activeArticle.questions.length}</div>
             <div className="bg-white p-8 rounded-2xl shadow-xl border border-stone-100">
               <span className="inline-block bg-blue-50 text-blue-700 text-[10px] font-bold px-2 py-1 rounded mb-4 tracking-wider uppercase border border-blue-100">{getQuestionTypeLabel(activeArticle.questions[currentQuestionIndex].type)}</span>
               <h3 className="text-xl font-bold mb-8 text-gray-800 leading-relaxed">{activeArticle.questions[currentQuestionIndex].text}</h3>
               <div className="space-y-3 mb-6">
                 {activeArticle.questions[currentQuestionIndex].options.map((option, idx) => {
                   let btnClass = "bg-stone-50 border-stone-100 text-gray-700 hover:border-emerald-300";
                   if (isQuizResultVisible) {
                     if (idx === activeArticle.questions[currentQuestionIndex].correctIndex) { btnClass = "bg-emerald-100 border-emerald-500 text-emerald-900 font-bold"; } else if (idx === quizSelectedOption) { btnClass = "bg-red-100 border-red-500 text-red-900"; } else { btnClass = "bg-gray-50 border-gray-100 text-gray-400 opacity-50"; }
                   }
                   return (<button key={idx} onClick={() => handleQuizOptionClick(idx)} disabled={isQuizResultVisible} className={`w-full p-4 text-right border-2 rounded-xl transition font-medium ${btnClass}`}>{option}</button>);
                 })}
               </div>
               {isQuizResultVisible && (<div className="animate-fade-in-up"><div className={`p-4 rounded-xl text-center mb-6 border ${quizSelectedOption === activeArticle.questions[currentQuestionIndex].correctIndex ? "bg-emerald-50 border-emerald-200 text-emerald-800" : "bg-red-50 border-red-200 text-red-800"}`}><p className="font-bold text-lg mb-1">{quizSelectedOption === activeArticle.questions[currentQuestionIndex].correctIndex ? "🎉 正解！" : "😢 残念..."}</p><p className="text-sm opacity-90">{activeArticle.questions[currentQuestionIndex].explanation}</p></div><button onClick={nextQuizQuestion} className="w-full bg-emerald-800 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-emerald-900 transition transform">{currentQuestionIndex < activeArticle.questions.length - 1 ? "次の問題へ" : "結果を見る"}</button></div>)}
             </div>
          </div>
        )}
        {currentScreen === "result" && activeArticle && (
          <div className="pb-20 animate-fade-in-up">
            <div className="text-center py-12 bg-white rounded-2xl shadow-xl mb-8 border border-stone-100">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-2xl font-serif font-bold mb-2 text-emerald-950">学習完了</h2>
              <p className="text-gray-400 text-sm mb-8">Great Job!</p>
              {learningMode !== "dictation" && learningMode !== "grammar" && <div className="text-4xl font-bold text-emerald-600 mb-8">{quizScore} <span className="text-lg text-gray-300 font-normal">/ {activeArticle.questions.length}</span></div>}
              <div className="flex justify-center gap-4"><button onClick={() => changeScreen("list")} className="px-10 py-3 bg-emerald-900 text-white font-bold rounded-full hover:bg-emerald-800 shadow-lg transition">一覧に戻る</button></div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 mb-4 border border-stone-100"><h3 className="font-bold mb-4 text-xs text-stone-400 tracking-widest uppercase border-b pb-2">📝 全文復習 (Review)</h3><div className="space-y-4">{activeArticle.sentences?.map((sent, i) => (<div key={i} className="p-3 bg-stone-50 rounded-lg group hover:bg-emerald-50 transition cursor-pointer" onClick={() => speakText(sent.arabic)}><p className="font-bold text-emerald-900 text-right font-arabic text-lg mb-1">{sent.arabic} <span className="text-xs text-gray-300 ml-2">🔊</span></p><p className="text-sm text-gray-600 text-right">{sent.japanese}</p></div>))}</div></div>
            <div className="bg-white rounded-xl shadow-sm p-6 mb-4 border border-stone-100"><h3 className="font-bold mb-4 text-xs text-stone-400 tracking-widest uppercase">単語を保存</h3><div className="flex flex-wrap gap-2 justify-center">{activeArticle.vocabList.map((v, i) => (<VocabButton key={i} v={v} i={i} isRevealed={revealedVocabIndex === i} isSaved={savedVocab.some(sv => sv.word === v.word)} onReveal={() => setRevealedVocabIndex(i)} onSave={() => saveWord(v.word, v.meaning)} />))}</div></div>
          </div>
        )}
        {currentScreen === "vocab" && (
          <div className="animate-fade-in-up pb-20">
            <button onClick={() => changeScreen("levels")} className="text-gray-400 mb-6 text-sm hover:text-emerald-700 transition flex items-center gap-1 font-bold">← ホームに戻る</button>
            {!isFlashcardMode ? (
              <>
                <div className="flex justify-between items-center mb-6"><h2 className="text-2xl font-serif font-bold text-emerald-950">📒 My 単語帳</h2><div className="flex gap-2"><button onClick={() => setIsAddingWord(!isAddingWord)} className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-bold shadow-sm hover:bg-emerald-200 transition text-xs flex items-center gap-1">{isAddingWord ? "✕ 閉じる" : "＋ 単語を追加"}</button>{savedVocab.length > 0 && <button onClick={() => { setFcIndex(0); setFcFlipped(false); setIsFlashcardMode(true); }} className="bg-amber-500 text-emerald-950 px-4 py-2 rounded-full font-bold shadow-lg hover:bg-amber-400 transition text-xs flex items-center gap-1"><span>▶</span> 暗記モード</button>}</div></div>
                {isAddingWord && (<div className="bg-white p-5 rounded-2xl shadow-lg border-2 border-emerald-100 mb-8 animate-fade-in-up"><h3 className="font-bold text-emerald-900 mb-4 text-sm">新しい単語を登録</h3><div className="flex flex-col gap-3"><input type="text" dir="rtl" placeholder="アラビア語 (例: كِتَاب)" value={newArabic} onChange={(e) => setNewArabic(e.target.value)} className="w-full p-3 border border-stone-200 rounded-xl focus:border-emerald-500 outline-none font-arabic text-right bg-stone-50" /><input type="text" placeholder="日本語の意味 (例: 本)" value={newJapanese} onChange={(e) => setNewJapanese(e.target.value)} className="w-full p-3 border border-stone-200 rounded-xl focus:border-emerald-500 outline-none bg-stone-50" /><button onClick={handleAddCustomWord} disabled={!newArabic || !newJapanese} className={`w-full py-3 rounded-xl font-bold transition shadow-md ${(!newArabic || !newJapanese) ? "bg-gray-200 text-gray-400" : "bg-emerald-600 text-white hover:bg-emerald-700"}`}>保存する</button></div></div>)}
                {savedVocab.length === 0 ? (<div className="text-center py-24 text-gray-400 bg-white rounded-3xl border border-dashed border-stone-300">単語が登録されていません<br/><span className="text-xs mt-2 block">レッスン中に単語をタップするか、<br/>右上のボタンから追加してください</span></div>) : (<div className="grid grid-cols-1 md:grid-cols-2 gap-3">{savedVocab.map((v, i) => (<div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-stone-100 flex justify-between items-center group hover:border-emerald-300 transition"><div><span className="font-bold text-xl block text-emerald-900 font-arabic">{v.word}</span><span className="text-gray-500 text-sm">{v.meaning}</span></div><div className="flex gap-2"><button onClick={() => speakText(v.word)} className="text-stone-300 hover:text-emerald-500 p-2 transition">🔊</button><button onClick={() => deleteWord(v.word)} className="text-stone-300 hover:text-red-400 p-2 transition">✕</button></div></div>))}</div>)}
              </>
            ) : (
              <div className="max-w-md mx-auto"><div className="flex justify-between items-center mb-6"><button onClick={() => setIsFlashcardMode(false)} className="text-gray-400 font-bold hover:text-red-500">✕ 終了</button><button onClick={() => setFcReverse(!fcReverse)} className="text-xs bg-stone-200 text-stone-700 px-3 py-1 rounded-full font-bold">モード: {fcReverse ? "日→アラ" : "アラ→日"}</button></div><div onClick={() => setFcFlipped(!fcFlipped)} className="bg-white h-80 rounded-3xl shadow-2xl flex flex-col items-center justify-center p-8 cursor-pointer border-b-8 border-stone-100 active:border-b-0 active:translate-y-2 transition-all relative"><button onClick={(e) => { e.stopPropagation(); speakText(savedVocab[fcIndex].word); }} className="absolute top-6 right-6 text-stone-300 hover:text-emerald-600 text-2xl transition">🔊</button><p className="text-gray-300 text-xs font-bold tracking-widest mb-8 uppercase">TAP TO FLIP</p><h2 className={`font-bold text-center text-emerald-950 ${fcFlipped ? (fcReverse ? "text-5xl font-arabic" : "text-3xl") : (fcReverse ? "text-3xl" : "text-5xl font-arabic")}`}>{!fcFlipped ? (fcReverse ? savedVocab[fcIndex].meaning : savedVocab[fcIndex].word) : (fcReverse ? savedVocab[fcIndex].word : savedVocab[fcIndex].meaning)}</h2></div><div className="flex justify-between items-center mt-10 px-8" dir="ltr"><button onClick={prevCard} className="bg-white w-14 h-14 rounded-full font-bold text-xl text-stone-400 shadow-md hover:scale-110 transition border border-stone-100">←</button><span className="font-bold text-stone-400 text-sm tracking-widest">{fcIndex + 1} / {savedVocab.length}</span><button onClick={nextCard} className="bg-emerald-600 text-white w-14 h-14 rounded-full font-bold text-xl shadow-lg shadow-emerald-200 hover:bg-emerald-700 hover:scale-110 transition">→</button></div></div>
            )}
          </div>
        )}
        {showUpgradeModal && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center relative shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-amber-400 to-amber-600 z-0"></div>
              <div className="relative z-10"><div className="bg-white w-20 h-20 rounded-full mx-auto flex items-center justify-center text-4xl shadow-lg mb-4 mt-8">👑</div><h3 className="text-2xl font-serif font-bold text-emerald-950 mb-2">プレミアムプラン</h3><p className="text-gray-500 text-sm mb-6">このコンテンツは有料会員限定です。<br/>学習制限を解除してすべての機能を使おう！</p><ul className="text-left text-sm text-gray-600 space-y-2 mb-8 bg-stone-50 p-4 rounded-xl"><li className="flex gap-2"><span>✅</span> 中級・上級コンテンツへのアクセス</li><li className="flex gap-2"><span>✅</span> 無制限の音声再生</li><li className="flex gap-2"><span>✅</span> 広告非表示</li></ul><button onClick={() => { setShowUpgradeModal(false); alert("実際のアプリではここでStripe決済画面に移動します💰"); }} className="w-full bg-emerald-600 text-white font-bold py-3 rounded-xl shadow-lg hover:bg-emerald-700 transition transform hover:scale-105 mb-3">月額 ¥980 で登録</button><button onClick={() => setShowUpgradeModal(false)} className="text-gray-400 text-sm hover:text-gray-600">閉じる</button></div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

function VocabButton({ v, i, isRevealed, isSaved, onReveal, onSave }: any) { return <button onClick={onReveal} className={`relative px-3 py-1.5 rounded-lg text-sm transition-all duration-300 border ${isRevealed ? "bg-emerald-50 border-emerald-300 text-emerald-900 shadow-sm scale-105" : "bg-white border-dashed border-stone-300 text-stone-500 hover:border-amber-400 hover:text-amber-700"}`}><span className={`font-bold ${isRevealed ? "" : "font-arabic text-lg"}`}>{isRevealed ? v.meaning : v.word}</span>{isRevealed && !isSaved && <span onClick={(e) => { e.stopPropagation(); onSave(); }} className="absolute -top-2 -left-2 bg-emerald-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs shadow-md cursor-pointer hover:bg-emerald-700 hover:scale-110 transition">+</span>}{isSaved && <span className="absolute -top-2 -left-2 text-emerald-600 bg-white rounded-full border border-emerald-200 text-[10px] w-5 h-5 flex items-center justify-center shadow-sm">✓</span>}</button>; }
function LevelButton({ title, subtitle, color, icon, onClick }: any) { return <button onClick={onClick} className={`h-40 rounded-3xl shadow-lg border-2 ${color} flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group bg-white`}><span className="text-5xl mb-3 group-hover:scale-110 transition-transform drop-shadow-sm grayscale group-hover:grayscale-0">{icon}</span><span className="text-xl font-bold tracking-wide text-gray-800">{title}</span><span className="text-[10px] font-bold text-gray-400 uppercase mt-1 tracking-widest">{subtitle}</span></button>; }
function ModeButton({ icon, title, subtitle, color, onClick }: any) { return <button onClick={onClick} className={`border-2 ${color} p-4 rounded-2xl transition-all shadow-sm hover:shadow-md flex flex-col items-center gap-2 group h-full justify-center bg-white`}><span className="text-3xl group-hover:scale-110 transition-transform">{icon}</span><div className="text-center"><span className="font-bold text-sm block text-gray-700">{title}</span><span className="text-[10px] text-gray-400 font-bold">{subtitle}</span></div></button>; }
function StatCard({ label, value, color }: any) { return <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100"><p className="text-stone-400 text-[10px] font-bold uppercase tracking-widest mb-1">{label}</p><p className={`text-2xl font-bold font-serif ${color}`}>{value}</p></div>; }