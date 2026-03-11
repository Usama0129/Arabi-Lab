"use client";
import React, { useState, useEffect, useRef } from "react";
// ↓ パスは ./ (同じ階層) になっています
import { supabase } from "./lib/supabaseClient";
import { articles, Article, QuizQuestion } from "./data";
import Link from 'next/link';

// --- Types ---
type Screen = "main_menu" | "levels_sub" | "topics" | "list" | "mode_select" | "reader" | "quiz" | "result" | "vocab" | "dictation" | "mypage" | "eras" | "era_desc" | "poets" | "poetry_read" | "phrases_list" | "phrase_detail";
type LearningMode = "reading" | "listening" | "dictation" | "grammar";
type CourseType = "grammar" | "conversation" | "reading" | "listening" | "poetry" | "phrase" | "reorder";
type StudyBreakdown = { reading: number; listening: number; dictation: number; vocab: number; grammar: number; poetry: number };

// サブスクリプション情報の型定義
type SubscriptionInfo = {
  plan: "Free" | "Premium";
  status: "active" | "canceled" | "past_due";
  startDate: string;
  nextPayment: string;
  amount: number;
};

// --- Constants ---
const ARABIC_KEYS = [
  "ا", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي",
  "ة", "ء", "أ", "إ", "آ", "ى", "ئ", "ؤ", "؟"
];

const MUTANABBI_POEM = "الخَيْلُ وَاللّيْلُ وَالبَيْداءُ تَعرِفُني ... وَالسّيفُ وَالرّمحُ والقرْطاسُ وَقَلَمُ ... ";

// 詩の時代データ
const POETRY_ERAS = [
  {
    id: "jahiliyya",
    name: "ジャーヒリーヤ時代",
    period: "イスラーム以前 (〜610年)",
    icon: "⛺️",
    desc: "イスラーム以前の「無明時代」。アラブ文学の原点にして頂点です。特に「ムアッラカート（懸想詩）」は、そのあまりの美しさゆえに金文字で記され、最高の栄誉として聖なるカアバ神殿の壁に「懸けられた」という伝説を持つ長詩群です。",
    features: ["ムアッラカート（カアバに懸けられた詩）", "アトラール（旧跡への立ち寄り）", "部族の誇り (Fakhr)", "砂漠と動物の描写"]
  },
  {
    id: "islamic",
    name: "イスラーム初期",
    period: "予言者と正統カリフ時代 (610〜661年)",
    icon: "🕌",
    desc: "イスラームの到来とクルアーンの啓示により、言葉の価値観が劇的に変化した時代です。詩は単なる部族の自慢から、神への唯一信仰、預言者ムハンマドの擁護、そしてイスラーム共同体（ウンマ）の団結を鼓舞する「聖なる武器」へと昇華されました。",
    features: ["預言者賛美 (Madih)", "イスラームの擁護", "倫理と道徳", "ハッサーン・ブン・サービト"]
  },
  {
    id: "umayyad",
    name: "ウマイヤ朝",
    period: "ダマスカス時代 (661〜750年)",
    icon: "⚔️",
    desc: "政治的な派閥争いを背景に、詩人たちが互いに部族を自慢し相手を攻撃する「ナカーイド（諷刺合戦）」が流行しました。一方で恋愛詩が洗練され、都会的で享楽的な「ウマル派」と、砂漠で純潔な愛を貫き死に至る「ウズラ派（マジュヌーン・ライラ等）」という二つの潮流が生まれました。",
    features: ["ナカーイド（諷刺合戦）", "ウズラ派（純愛）", "ウマル派（官能）", "政治詩"]
  },
  {
    id: "abbasid",
    name: "アッバース朝",
    period: "バグダード黄金期 (750〜1258年)",
    icon: "🏺",
    desc: "バグダードを都とするイスラーム黄金期。ペルシャ文化等の影響で「モデルニズム（革新）」が起き、砂漠の伝統形式にとらわれない自由な表現が開花しました。酒と享楽を詠う詩、人生の無常を説く哲学詩、そして修辞技法を凝らした技巧的な詩が好まれました。",
    features: ["ハムリヤート（酒の詩）", "ズフド（禁欲・哲学詩）", "ヒクマ（叡智）", "ムタナッビー"]
  },
  {
    id: "andalus",
    name: "アンダルス",
    period: "イベリア半島 (711〜1492年)",
    icon: "🍊",
    desc: "スペイン・ポルトガルで独自の発展を遂げたアラブ文化。豊かな自然への愛と、多様な民族の共生を背景に、音楽的な詩が栄えました。特に従来の単一の韻律（カスィーダ）を破り、歌うために作られた「ムワッシャハ（連節詩）」は、中世ヨーロッパの詩歌にも影響を与えました。",
    features: ["ムワッシャハ（連節詩）", "自然描写", "愛と郷愁", "ザジャル（方言詩）"]
  },
  {
    id: "modern",
    name: "近現代",
    period: "ナフダ以降 (19世紀〜現在)",
    icon: "🎙️",
    desc: "19世紀の「ナフダ（文芸復興）」以降、西洋文学との接触を経て詩は大きく変容しました。伝統的な韻律を守る新古典派に対し、自由詩運動が台頭。植民地支配への抵抗、パレスチナ問題、個人の自我の探求など、激動する社会の中で詩は民衆の声を代弁し続けています。",
    features: ["自由詩運動", "抵抗の詩 (Adab al-Muqawama)", "ロマン主義"]
  }
];

const getYouTubeId = (url: string) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

// --- Common Components ---
const HeaderBackButton = ({ onClick, text = "戻る", colorClass = "text-gray-400 hover:text-emerald-700" }: { onClick: () => void, text?: string, colorClass?: string }) => (
  <button onClick={onClick} className={`mb-4 text-sm transition flex items-center gap-1 font-bold ${colorClass}`}>
    <span>←</span> {text}
  </button>
);

// --- Landing Page Component ---
const LandingPage = ({ onLogin, onGuestStart }: { onLogin: () => void, onGuestStart: () => void }) => {
  return (
    <div className="min-h-screen bg-[#FDFCF8] font-sans text-gray-800 flex flex-col overflow-x-hidden">
      {/* Background Poem Animation CSS */}
      <style jsx>{`
        @keyframes scroll-rtl {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-scroll-text {
          animation: scroll-rtl 60s linear infinite;
        }
      `}</style>

      {/* Hero Section */}
      <div className="bg-emerald-950 text-white relative overflow-hidden h-[600px] flex flex-col justify-center items-center">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none flex flex-col justify-around z-0 overflow-hidden" dir="rtl">
           {[...Array(5)].map((_, i) => (
             <div key={i} className="whitespace-nowrap text-[8rem] md:text-[10rem] font-arabic leading-none animate-scroll-text" style={{ animationDuration: `${40 + i * 10}s`, opacity: 0.5 + (i * 0.1) }}>
               {MUTANABBI_POEM.repeat(10)}
             </div>
           ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-950/60 to-emerald-900/90 z-1"></div>
        <div className="max-w-4xl mx-auto px-6 py-10 relative z-10 text-center">
          <div className="inline-block bg-white/10 px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-6 border border-white/20 backdrop-blur-sm">
            ARABIC LEARNING PLATFORM
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 leading-tight drop-shadow-lg">
            アラビア語を、<br />
            <span className="text-amber-400">もっと身近に。</span>
          </h1>
          <h2 className="text-lg md:text-2xl font-serif font-bold text-emerald-100 mb-8 drop-shadow-md tracking-wide">
            『暗号』が『言葉』に変わる感動を Arabi Labで
          </h2>
          <p className="text-base md:text-lg text-emerald-100 mb-10 max-w-2xl mx-auto leading-relaxed opacity-90 font-medium">
            初心者の文法理解から、会話表現、読解・聴解、<br className="hidden md:block"/>
            そして千年の歴史を持つアラブ詩まで。1000問以上の演習と共に。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={onLogin} className="w-full sm:w-auto px-10 py-4 bg-white text-emerald-950 font-bold rounded-full shadow-2xl hover:bg-gray-100 hover:scale-105 transition transform flex items-center justify-center gap-2 border-2 border-white">
              <span className="text-blue-500 font-bold text-lg">G</span> Googleで今すぐ始める
            </button>
            <button onClick={onGuestStart} className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-amber-400/50 text-amber-100 font-bold rounded-full hover:bg-amber-900/30 transition backdrop-blur-sm">
              登録せずに試す
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white py-16 border-b border-stone-100">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-stone-100">
               <div className="p-4">
                  <div className="text-4xl mb-2">📚</div>
                  <h3 className="font-bold text-emerald-900 text-lg mb-2">圧倒的な網羅性</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">初心者向けの基礎文法から、ニュース読解、日常会話表現、そして古典詩まで。あらゆるレベルに対応。</p>
               </div>
               <div className="p-4">
                  <div className="text-4xl mb-2">✍️</div>
                  <h3 className="font-bold text-emerald-900 text-lg mb-2">1000問以上の演習</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">ただ読むだけではありません。豊富なクイズと書き取り問題で、知識を確実に定着させます。</p>
               </div>
               <div className="p-4">
                  <div className="text-4xl mb-2">💰</div>
                  <h3 className="font-bold text-emerald-900 text-lg mb-2">驚きのコストパフォーマンス</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">一般的なアラビア語教材は1冊3,000円〜。Arabi Labなら、月額500円ですべてのコンテンツが学び放題。</p>
               </div>
            </div>
         </div>
      </div>

      <div className="bg-stone-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-serif font-bold text-center text-emerald-950 mb-12">シンプルで、続けやすいプラン</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm flex flex-col hover:border-emerald-200 transition">
              <div className="mb-4">
                <span className="bg-stone-100 text-stone-600 px-3 py-1 rounded-full text-xs font-bold">FREE</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">フリープラン</h3>
              <p className="text-4xl font-bold mb-6 font-serif text-gray-400">¥0 <span className="text-sm font-normal">/月</span></p>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex gap-2 text-sm text-gray-600"><span>✅</span> 初級コンテンツへのアクセス</li>
                <li className="flex gap-2 text-sm text-gray-600"><span>✅</span> 文法・単語の基礎練習</li>
                <li className="flex gap-2 text-sm text-gray-600"><span>✅</span> 制限付き音声再生</li>
              </ul>
              <button onClick={onGuestStart} className="w-full py-3 border-2 border-gray-300 text-gray-600 font-bold rounded-xl hover:bg-gray-50 hover:border-gray-400 transition">
                無料で試す
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-900 to-emerald-800 p-8 rounded-3xl shadow-2xl flex flex-col relative overflow-hidden text-white transform md:-translate-y-4 border border-emerald-700">
              <div className="absolute top-0 right-0 bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1 rounded-bl-xl shadow-md">おすすめ</div>
              <div className="mb-4">
                <span className="bg-emerald-700/50 border border-emerald-500 text-emerald-100 px-3 py-1 rounded-full text-xs font-bold">PREMIUM</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">プレミアムプラン</h3>
              <p className="text-4xl font-bold mb-6 font-serif text-amber-400">¥500 <span className="text-sm text-emerald-200 font-normal">/月</span></p>
              <p className="text-xs text-emerald-300 mb-6">教材一冊分(約3000円)で、半年間学び放題。</p>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex gap-2 text-sm text-emerald-50 font-bold"><span>✦</span> 全レベルの記事・詩の閲覧</li>
                <li className="flex gap-2 text-sm text-emerald-50 font-bold"><span>✦</span> ネイティブ音声 無制限リスニング</li>
                <li className="flex gap-2 text-sm text-emerald-50 font-bold"><span>✦</span> 1000問以上の全問題に挑戦</li>
                <li className="flex gap-2 text-sm text-emerald-50 font-bold"><span>✦</span> 広告非表示・優先サポート</li>
              </ul>
              <button onClick={onLogin} className="w-full py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-amber-950 font-bold rounded-xl shadow-lg hover:to-amber-400 transition transform hover:scale-105">
                プレミアムで登録する
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-emerald-950 text-emerald-200 py-10 text-center text-xs mt-auto">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 mb-6">
          <Link href="/faq" className="hover:text-white transition">よくある質問</Link>
          <Link href="/terms" className="hover:text-white transition">利用規約</Link>
          <Link href="/privacy" className="hover:text-white transition">プライバシーポリシー</Link>
          <Link href="/law" className="hover:text-white transition">特定商取引法に基づく表記</Link>
        </div>
        <p className="opacity-50">&copy; 2024 Arabi Lab. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default function Home() {
  // --- State ---
  const [currentScreen, setCurrentScreen] = useState<Screen>("main_menu");
  const [courseType, setCourseType] = useState<CourseType | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedEraId, setSelectedEraId] = useState<string | null>(null);

  const [activeArticle, setActiveArticle] = useState<Article & { videoUrl?: string; imageUrls?: string[] } | null>(null);
  const [learningMode, setLearningMode] = useState<LearningMode>("reading");
  const [activeProblemNumber, setActiveProblemNumber] = useState<number>(0);
    
  const [allArticles, setAllArticles] = useState<(Article & { videoUrl?: string; imageUrls?: string[] })[]>(articles); 

  const [completedArticleIds, setCompletedArticleIds] = useState<number[]>([]); 
  const [savedVocab, setSavedVocab] = useState<{word: string, meaning: string}[]>([]); 

  const [user, setUser] = useState<any>(null);
  const [isPremium, setIsPremium] = useState(false); 
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  const [showLandingPage, setShowLandingPage] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const [subscription, setSubscription] = useState<SubscriptionInfo | null>(null);

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
// ▼▼▼ ここに追加 ▼▼▼
  // ★ 追加: 高機能音声プレイヤー用のStateとRef
  const [audioState, setAudioState] = useState<"idle" | "playing" | "paused">("idle");
  const [currentAudioIndex, setCurrentAudioIndex] = useState<number>(0);
  const audioIndexRef = useRef<number>(0);
  // ▲▲▲ ここまで ▲▲▲
  // ★ 音声再生設定用のState (スピードのみ)
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);

  const [streak, setStreak] = useState(0);
  const [stats, setStats] = useState({ today: 0, month: 0, total: 0 });
  const [breakdown, setBreakdown] = useState<StudyBreakdown>({ reading: 0, listening: 0, dictation: 0, vocab: 0, grammar: 0, poetry: 0 });
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // --- Helpers ---
  const normalizeArabic = (text: string) => text.replace(/[\u064B-\u065F\u0670]/g, "").replace(/[.,،؟:;!۔"«»]/g, "").replace(/\s+/g, " ").trim();
  const removeTashkeel = (text: string) => text.replace(/[\u064B-\u065F\u0670]/g, "");

  // 範囲制限用のヘルパー関数
  const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);

  // ★ 追加: 記事をIDで検索するヘルパー関数
  const getArticleById = (id: number) => allArticles.find(a => a.id === id);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    if (h > 0) return `${h}h ${m}m`;
    return `${m}m`;
  };

  const FREE_ARTICLE_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 20, 21, 30, 40, 101, 201, 301, 401, 200, 202, 203, 501, 502, 503, 504, 505, 506]; 
  const isLockedContent = (article: Article) => {
    if (article.id > 1000) return false; 
    if (isPremium) return false; 
    return !FREE_ARTICLE_IDS.includes(article.id);
  };

  useEffect(() => {
    const fetchSupabaseArticles = async () => {
      const { data, error } = await supabase
        .from('articles')
        .select(`*, article_sentences(*), article_vocab(*), article_questions(*)`);
      if (error) { console.error("Error:", error); return; }
      if (data && data.length > 0) {
        const formattedArticles: (Article & { videoUrl?: string; imageUrls?: string[] })[] = data.map((d: any) => ({
          id: d.id + 10000, 
          title: d.title,
          level: d.level,
          category: d.category,
          videoUrl: d.video_url || "",
          imageUrls: d.image_urls || [],
          contentPlain: d.content_plain || "", 
          contentVoweled: d.content_voweled || "",
          sentences: d.article_sentences 
            ? d.article_sentences.map((s: any) => ({ arabic: s.arabic, japanese: s.japanese || "", speaker: s.speaker || "Narrator", note: s.note || "", relatedGrammarId: s.related_grammar_id || null })).sort((a: any, b: any) => (a.order_index || 0) - (b.order_index || 0))
            : [],
          vocabList: d.article_vocab ? d.article_vocab.map((v: any) => ({ word: v.word, meaning: v.meaning })) : [],
          questions: d.article_questions ? d.article_questions.map((q: any) => ({ type: q.type, text: q.text, options: q.options || [], correctIndex: q.correct_index, explanation: q.explanation || "", relatedGrammarId: q.related_grammar_id || null })) : []
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
      if (session?.user) { 
          fetchProfile(session.user.id); 
          fetchVocab(session.user.id);
          setShowLandingPage(false); 
      } else { 
          setIsPremium(false); 
          setSavedVocab(JSON.parse(localStorage.getItem("arabicApp_vocab") || "[]"));
          setShowLandingPage(true); 
      }
      setIsLoading(false); 
    };
    initUser();
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) { 
          fetchProfile(session.user.id); 
          fetchVocab(session.user.id);
          setShowLandingPage(false);
      } else { 
          setIsPremium(false); 
          setSavedVocab(JSON.parse(localStorage.getItem("arabicApp_vocab") || "[]")); 
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (user && isPremium) {
      setSubscription({
        plan: "Premium",
        status: "active",
        startDate: "2023-12-01",
        nextPayment: "2024-02-01",
        amount: 500
      });
    } else {
      setSubscription(null);
    }
  }, [user, isPremium]);

  const handleCancelSubscription = async () => {
    if (!confirm("本当に解約しますか？\n解約すると次回の更新日にプレミアム機能が利用できなくなります。")) return;
    alert("解約手続きを受け付けました。（デモ機能）\n実際の実装ではバックエンドAPIを呼び出します。");
  };

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
    setBreakdown(JSON.parse(localStorage.getItem("arabicApp_breakdown") || JSON.stringify({ reading: 0, listening: 0, dictation: 0, vocab: 0, grammar: 0, poetry: 0 })));
  }, []);
    
  useEffect(() => {
    timerRef.current = setInterval(() => {
      let activeCategory: keyof StudyBreakdown | null = null;
      if (currentScreen === "reader" || currentScreen === "poetry_read") {
        if (courseType === "poetry") activeCategory = "poetry";
        else if (learningMode === "grammar") activeCategory = "grammar";
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
  }, [currentScreen, learningMode, stats.total, courseType]);
  useEffect(() => {
    localStorage.setItem("arabicApp_completed", JSON.stringify(completedArticleIds));
  }, [completedArticleIds]);

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
  const handleLogout = async () => { 
      await supabase.auth.signOut(); 
      setUser(null); 
      setIsPremium(false); 
      setSavedVocab(JSON.parse(localStorage.getItem("arabicApp_vocab") || "[]")); 
      setShowLandingPage(true); 
      changeScreen("main_menu"); 
  };
  const changeScreen = (screen: Screen) => { stopSpeaking(); setCurrentScreen(screen); };
    
  const handleMainMenuClick = (type: CourseType) => {
    setCourseType(type);
    if (type === "grammar") {
        setSelectedLevel("文法");
        changeScreen("topics"); 
    } else if (type === "conversation") {
        setSelectedLevel("会話");
        changeScreen("topics");
    } else if (type === "poetry") {
        changeScreen("eras");
    } else if (type === "phrase") {
        // ★ 変更: "levels_sub"（種類選択画面）へ移動させる
        changeScreen("levels_sub");
    } else {
        changeScreen("levels_sub");
    }
  };

  const handleSubLevelClick = (level: string) => {
    setSelectedLevel(level);
    // ★ 追加: 並び替えの場合はトピック選択をスキップして直接リストへ
    if (courseType === "reorder") {
        setSelectedCategory("並び替え");
        changeScreen("list");
    } else {
        changeScreen("topics");
    }
  };

  const handleSelectCategory = (category: string) => { 
      setSelectedCategory(category); 
      changeScreen("list");
  };

  const handleEraSelect = (eraId: string) => {
    setSelectedEraId(eraId);
    changeScreen("era_desc");
  };
  // ▼▼▼ ここに追加 ▼▼▼
  // ★ 追加: フスハー/方言のボタンを押した時の処理
  const handlePhraseCategoryClick = (category: string) => {
    setSelectedCategory(category);
    changeScreen("phrases_list"); // 一覧画面へ進む
  };
  // ▲▲▲ ここまで ▲▲▲

  const getFilteredArticles = () => {
    return allArticles.filter(a => {
        if (courseType === "grammar") return a.level === "文法";
        if (courseType === "conversation") return a.level === "会話";
        if (courseType === "phrase") return a.level === "1フレーズ";
        
        // ★ 追加: 並び替えコースの場合は「並び替え」カテゴリかつ選択したレベルに絞る
        if (courseType === "reorder") return a.category === "並び替え" && a.level === selectedLevel;
        
        if (courseType === "poetry") {
            const era = POETRY_ERAS.find(e => e.id === selectedEraId);
            return a.level === "Poetry" && (era ? a.category === era.name : true);
        }
        if (courseType === "listening") {
            return (a.videoUrl && a.videoUrl.length > 0) && a.level === selectedLevel;
        }
        if (courseType === "reading") {
            // ★ "並び替え" も読解から除外する
            if (a.level === "文法" || a.level === "Poetry" || a.level === "1フレーズ" || a.category === "並び替え") return false; 
            if (a.level !== selectedLevel) return false;
            return !a.videoUrl || a.videoUrl === "";
        }
        return false;
    });
  };
    
  const handleArticleClick = (article: Article & { videoUrl?: string; imageUrls?: string[] }, index: number) => { 
    if (isLockedContent(article)) { setShowUpgradeModal(true); return; }
    
    setActiveArticle(article); 
    setActiveProblemNumber(index + 1); 
    setRevealedVocabIndex(null); 
    
    if (courseType === "poetry") {
      setLearningMode("reading");
      changeScreen("poetry_read");
  } else if (courseType === "grammar") {
      startLearning("grammar");
  } else if (courseType === "listening") {
      setLearningMode("listening");
      changeScreen("reader"); 
  } else if (courseType === "reorder") {
      // ★ 追加: 並び替えの場合はモード選択を飛ばして直接クイズを開始する
      const qs = article.questions;
      setGrammarQuestions(qs);
      stopSpeaking(); 
      setQuizScore(0); 
      setCurrentQuestionIndex(0); 
      setQuizSelectedOption(null); 
      setIsQuizResultVisible(false); 
      setUserAnswers([]); 
      changeScreen("quiz");
  } else {
      setLearningMode("reading");
      changeScreen("mode_select"); 
  }
};
  // ▼ 新しく追加する関数（1フレーズ専用）
  const handlePhraseClick = (article: Article & { videoUrl?: string; imageUrls?: string[] }) => {
    setActiveArticle(article);
    changeScreen("phrase_detail");
  };

  // ★ 追加: 文法記事へのジャンプ機能
  const handleJumpToGrammar = (grammarId: number) => {
    const targetArticle = getArticleById(grammarId);
    if (targetArticle) {
        // 文法レッスンを開く処理
        setActiveArticle(targetArticle);
        setLearningMode("grammar"); // 文法モードに変更
        changeScreen("reader"); // リーダー画面へ直接遷移
        window.scrollTo({ top: 0, behavior: 'smooth' }); // スクロールトップ
    } else {
        alert("該当する文法レッスンが見つかりません");
    }
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
      const qs = activeArticle.questions; 
      setGrammarQuestions(qs); setCurrentQuestionIndex(0); setGrammarFeedback(null); changeScreen("reader");
    } else { changeScreen("reader"); }
  };

  const startQuiz = (articleOverride?: Article) => { 
    const target = articleOverride || activeArticle;
    if (!target || target.questions.length === 0) { alert("クイズがありません"); return; }
    const qs = target.questions;
    setGrammarQuestions(qs);
    stopSpeaking(); 
    setQuizScore(0); 
    setCurrentQuestionIndex(0); 
    setQuizSelectedOption(null); 
    setIsQuizResultVisible(false); 
    setUserAnswers([]); 
    changeScreen("quiz"); 
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
    else { 
        if (!completedArticleIds.includes(activeArticle.id)) { setCompletedArticleIds([...completedArticleIds, activeArticle.id]); } 
        changeScreen("result"); 
    }
  };
  const checkDictation = () => { if (normalizeArabic(dictationInput) === targetWordClean) setDictationFeedback("correct"); else setDictationFeedback("incorrect"); };
  const nextDictation = () => { if (!activeArticle) return; if (dictationIndex < activeArticle.sentences.length - 1) { const nextIdx = dictationIndex + 1; setDictationIndex(nextIdx); generateDictationProblem(activeArticle, nextIdx); } else changeScreen("result"); };
    
// --- ★ 変更: 音声再生関数 (単発読み上げ用) ---
const speakText = (text: string, speaker?: string) => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    setAudioState("idle"); // プレイヤーの状態をリセット
    const cleanText = text.replace(/[^\u0600-\u06FF\s]/g, "").trim(); 
    const u = new SpeechSynthesisUtterance(cleanText);
    
    const voices = window.speechSynthesis.getVoices();
    const arabicVoice = voices.find(v => v.lang.includes('ar'));
    if (arabicVoice) { u.voice = arabicVoice; u.lang = arabicVoice.lang; } else { u.lang = 'ar-SA'; }
    
    u.rate = clamp(playbackRate, 0.1, 2.0); 
    window.speechSynthesis.speak(u);
  }
};

// --- ★ 新規: 高機能オーディオプレイヤーの制御関数 ---
const handleTogglePlay = () => {
  if (!('speechSynthesis' in window)) return;
  
  if (audioState === "playing") {
    window.speechSynthesis.pause();
    setAudioState("paused");
  } else if (audioState === "paused") {
    window.speechSynthesis.resume();
    setAudioState("playing");
  } else {
    startSequencePlayback(0);
  }
};

const handleStopPlayback = () => {
  window.speechSynthesis.cancel();
  setAudioState("idle");
  setCurrentAudioIndex(0);
  audioIndexRef.current = 0;
};

const handlePrevSentence = () => {
  if (audioState === "idle" || !activeArticle?.sentences) return;
  window.speechSynthesis.cancel();
  const newIdx = Math.max(0, audioIndexRef.current - 1);
  startSequencePlayback(newIdx);
};

const handleNextSentence = () => {
  if (audioState === "idle" || !activeArticle?.sentences) return;
  window.speechSynthesis.cancel();
  const newIdx = Math.min(activeArticle.sentences.length - 1, audioIndexRef.current + 1);
  startSequencePlayback(newIdx);
};

const startSequencePlayback = (startIndex: number) => {
  if (!activeArticle || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  
  let voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) { 
      window.speechSynthesis.onvoiceschanged = () => { 
          voices = window.speechSynthesis.getVoices(); 
          executePlayback(startIndex, voices); 
      }; 
  } else { 
      executePlayback(startIndex, voices); 
  }
};

const executePlayback = (startIndex: number, voices: SpeechSynthesisVoice[]) => {
  const hasSentences = activeArticle?.sentences && activeArticle.sentences.length > 0;
  
  if (hasSentences) {
      audioIndexRef.current = startIndex;
      setCurrentAudioIndex(startIndex);
      setAudioState("playing");
      
      const speakNext = () => {
         // 再生中に別の画面に行ったり、停止ボタンを押した場合のストッパー
         if (audioIndexRef.current >= activeArticle!.sentences.length) { 
             setAudioState("idle"); 
             setCurrentAudioIndex(0);
             return; 
         }
         
         const sent = activeArticle!.sentences[audioIndexRef.current];
         setCurrentAudioIndex(audioIndexRef.current); // UIハイライト用
         
         const u = new SpeechSynthesisUtterance(sent.arabic);
         u.rate = clamp(playbackRate, 0.1, 2.0);
         const arabicVoice = voices.find(v => v.lang.includes('ar'));
         if (arabicVoice) { u.voice = arabicVoice; u.lang = arabicVoice.lang; } else { u.lang = 'ar-SA'; }
         
         u.onend = () => { 
             audioIndexRef.current++; 
             speakNext(); 
         };
         u.onerror = (e) => {
             if (e.error !== 'canceled' && e.error !== 'interrupted') {
                 setAudioState("idle");
             }
         };
         window.speechSynthesis.speak(u);
      };
      speakNext();
  } else {
      // 文章データ(sentences)がなく、プレーンテキストだけの場合
      setAudioState("playing");
      const textToRead = activeArticle!.contentVoweled || activeArticle!.contentPlain || "";
      const cleanText = textToRead.replace(/[^\u0600-\u06FF\s]/g, "").trim();
      const u = new SpeechSynthesisUtterance(cleanText);
      u.rate = clamp(playbackRate, 0.1, 2.0);
      u.lang = 'ar-SA';
      const arabicVoice = voices.find(v => v.lang.includes('ar'));
      if (arabicVoice) { u.voice = arabicVoice; }
      
      u.onend = () => setAudioState("idle");
      u.onerror = () => setAudioState("idle");
      window.speechSynthesis.speak(u);
  }
};

const stopSpeaking = () => { 
  if ('speechSynthesis' in window) { 
    window.speechSynthesis.cancel(); 
    setAudioState("idle"); 
  } 
};
  const nextCard = () => { setFcFlipped(false); setFcIndex((prev) => (prev + 1) % savedVocab.length); };
  const prevCard = () => { setFcFlipped(false); setFcIndex((prev) => (prev - 1 + savedVocab.length) % savedVocab.length); };
  const getQuestionTypeLabel = (type: string) => { switch (type) { case "grammar": return "🧩 文法"; case "vocabulary": return "💡 単語"; case "tashkeel": return "🔡 母音"; case "reading": default: return "📖 読解"; } };

  const getEraData = () => POETRY_ERAS.find(e => e.id === selectedEraId);

  // ★ローディング中の表示
  if (isLoading) {
    return <div className="min-h-screen bg-[#FDFCF8] flex items-center justify-center text-emerald-800 font-serif text-xl animate-pulse">Loading Arabi Lab...</div>;
  }

  // ★LPの表示（未ログイン かつ showLandingPageがtrueの場合）
  if (!user && showLandingPage) {
    return <LandingPage onLogin={handleLogin} onGuestStart={() => setShowLandingPage(false)} />;
  }

  // --- メインアプリ画面 (ログイン済み or ゲスト利用) ---
  return (
    <div className="min-h-screen bg-[#FDFCF8] font-sans text-gray-800">
<nav className="bg-emerald-950 shadow-md p-4 sticky top-0 z-20 border-b border-amber-500/30" dir="ltr">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3" onClick={() => { changeScreen("main_menu"); setIsFlashcardMode(false); }}>
              <div className="bg-white p-1 rounded-lg shadow-sm hover:scale-105 transition-transform duration-300 border border-amber-400/30 cursor-pointer">
                 <img src="/logo.jpg" alt="Logo" className="h-10 w-auto object-contain" onError={(e) => {e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-lg flex items-center justify-center text-white text-xl font-bold">🇸🇦</div>';}} />
              </div>
              <h1 className="font-serif font-bold text-amber-50 cursor-pointer text-xl tracking-wider hidden sm:block">Arabi Lab</h1>
              <div className="flex items-center gap-1 bg-emerald-900/50 px-3 py-1 rounded-full border border-emerald-700 text-xs font-bold text-emerald-100 ml-2"><span className="text-amber-400 animate-pulse">🔥</span> {streak}</div>
          </div>
          
          {/* ★ ナビゲーションバー内 音声コントロールパネル (PC用・スピードのみ) */}
          <div className="flex items-center gap-3 bg-emerald-900/50 px-3 py-1.5 rounded-full border border-emerald-700 mx-2 hidden md:flex" dir="ltr">
            {/* 速度設定 */}
            <div className="flex items-center gap-1">
              <span className="text-[9px] font-bold text-emerald-300 uppercase">Speed</span>
              <select 
                value={playbackRate} 
                onChange={(e) => setPlaybackRate(parseFloat(e.target.value))}
                className="bg-transparent text-amber-400 text-xs font-bold outline-none cursor-pointer border-none p-0 focus:ring-0"
              >
                <option value="0.25" className="bg-emerald-900 text-white">0.25x</option>
                <option value="0.5" className="bg-emerald-900 text-white">0.5x</option>
                <option value="0.75" className="bg-emerald-900 text-white">0.75x</option>
                <option value="1.0" className="bg-emerald-900 text-white">1.0x (Std)</option>
                <option value="1.25" className="bg-emerald-900 text-white">1.25x</option>
                <option value="1.5" className="bg-emerald-900 text-white">1.5x (Fast)</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button 
                onClick={() => setIsPremium(!isPremium)}
                className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-bold border border-purple-400 shadow-lg hover:bg-purple-500 transition mr-2 hidden sm:block"
            >
                {isPremium ? "🔧 無料に戻す" : "🔧 プレミアム化"}
            </button>
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

      {/* モバイル用音声コントロール（スピードのみ） */}
      <div className="md:hidden bg-emerald-900 p-2 flex justify-center items-center gap-4 text-xs border-b border-emerald-800 shadow-inner" dir="ltr">
         <div className="flex items-center gap-2">
            <span className="font-bold text-emerald-300">SPEED</span>
            <select 
                value={playbackRate} 
                onChange={(e) => setPlaybackRate(parseFloat(e.target.value))}
                className="bg-emerald-800 text-white rounded px-1 py-0.5 text-xs outline-none"
              >
                <option value="0.25">0.25x</option>
                <option value="0.5">0.5x</option>
                <option value="0.75">0.75x</option>
                <option value="1.0">1.0x</option>
                <option value="1.25">1.25x</option>
                <option value="1.5">1.5x</option>
              </select>
         </div>
      </div>

      <main className="max-w-3xl mx-auto p-4 pb-20">
          
        {/* マイページ (刷新版) */}
        {currentScreen === "mypage" && (
           <div className="animate-fade-in-up pb-20">
             <HeaderBackButton onClick={() => changeScreen("main_menu")} />
             
             <div className="mb-6 flex justify-between items-end">
                <h2 className="text-2xl font-serif font-bold text-emerald-950">マイページ</h2>
             </div>

             {/* 1. ユーザープロファイル */}
             {user && (
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 mb-6 flex items-center gap-4 relative overflow-hidden" dir="ltr">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -mr-4 -mt-4 z-0"></div>
                  
                  <div className="relative z-10">
                    {user.user_metadata?.avatar_url ? (
                      <img src={user.user_metadata.avatar_url} className="w-16 h-16 rounded-full border-2 border-white shadow-md" alt="User" />
                    ) : (
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-3xl text-emerald-700 border-2 border-white shadow-md">👤</div>
                    )}
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-bold text-lg text-emerald-900">{user.user_metadata?.full_name || "ゲストユーザー"}</p>
                      {isPremium ? 
                        <span className="text-[10px] bg-amber-400 text-amber-900 px-2 py-0.5 rounded-full font-bold shadow-sm">PREMIUM</span> : 
                        <span className="text-[10px] bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full font-bold">FREE</span>
                      }
                    </div>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
               </div>
             )}

             {/* 2. 学習ステータス */}
             <div className="grid grid-cols-3 gap-3 mb-6 text-center" dir="ltr">
                <StatCard label="今日" value={formatTime(stats.today)} color="text-emerald-700" />
                <StatCard label="今月" value={formatTime(stats.month)} color="text-blue-700" />
                <StatCard label="総計" value={formatTime(stats.total)} color="text-amber-600" />
             </div>

             {/* 3. サブスクリプション管理 */}
             <div className="mb-8">
               <h3 className="font-bold text-gray-600 mb-3 ml-1 text-sm">サブスクリプション情報</h3>
               <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
                 {isPremium && subscription ? (
                   <div className="p-0">
                     <div className="bg-gradient-to-r from-amber-400 to-orange-400 p-4 text-white flex justify-between items-center">
                        <span className="font-bold text-lg flex items-center gap-2">👑 プレミアムプラン</span>
                        <span className="font-bold text-xl">¥{subscription.amount}<span className="text-xs font-normal opacity-80">/月</span></span>
                     </div>
                     <div className="p-5 space-y-4 text-sm" dir="ltr">
                        <div className="flex justify-between border-b border-gray-100 pb-2">
                          <span className="text-gray-500">ステータス</span>
                          <span className="font-bold text-emerald-600 flex items-center gap-1">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span> 有効 (Active)
                          </span>
                        </div>
                        <div className="flex justify-between border-b border-gray-100 pb-2">
                          <span className="text-gray-500">登録日</span>
                          <span className="font-medium">{subscription.startDate}</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-100 pb-2">
                          <span className="text-gray-500">次回支払日</span>
                          <span className="font-medium">{subscription.nextPayment}</span>
                        </div>
                        <div className="pt-2 text-center">
                          <button 
                            onClick={handleCancelSubscription}
                            className="text-red-500 text-xs font-bold hover:text-red-700 hover:underline transition"
                          >
                            サブスクリプションを解約する
                          </button>
                        </div>
                     </div>
                   </div>
                 ) : (
                   <div className="p-6 text-center">
                     <p className="text-gray-500 text-sm mb-4">現在、無料プランをご利用中です。</p>
                     <button 
                       onClick={() => setShowUpgradeModal(true)}
                       className="w-full py-3 bg-emerald-600 text-white font-bold rounded-xl shadow-md hover:bg-emerald-700 transition"
                     >
                       🚀 プレミアムにアップグレード
                     </button>
                   </div>
                 )}
               </div>
             </div>

             {/* 4. アプリ設定・サポート */}
             <div className="mb-8">
               <h3 className="font-bold text-gray-600 mb-3 ml-1 text-sm">設定・サポート</h3>
               <div className="bg-white rounded-2xl shadow-sm border border-stone-200 divide-y divide-gray-100">
                  <SettingItem icon="📧" label="メールアドレス変更" onClick={() => alert("メールアドレス変更機能は準備中です")} />
                  <SettingItem icon="🔒" label="パスワード変更" onClick={() => alert("パスワード再設定メールを送信しました（デモ）")} />
                  <SettingItem icon="💬" label="お問い合わせ・サポート" onClick={() => window.open("mailto:support@arabilab.com", "_blank")} />
               </div>
             </div>

             {/* 5. 法的情報 */}
             <div className="mb-8">
               <h3 className="font-bold text-gray-600 mb-3 ml-1 text-sm">運営・規約</h3>
               <div className="bg-white rounded-2xl shadow-sm border border-stone-200 divide-y divide-gray-100">
                  <SettingItem icon="📜" label="利用規約" onClick={() => window.open("/terms", "_blank")} />
                  <SettingItem icon="🛡️" label="プライバシーポリシー" onClick={() => window.open("/privacy", "_blank")} />
                  <SettingItem icon="⚖️" label="特定商取引法に基づく表記" onClick={() => window.open("/law", "_blank")} />
               </div>
             </div>

             {/* 6. ログアウトエリア */}
             <div className="text-center mt-8">
                <button onClick={handleLogout} className="text-red-500 font-bold text-sm hover:bg-red-50 px-6 py-3 rounded-full transition">
                  ログアウト
                </button>
                <p className="text-xs text-gray-300 mt-4">Arabi Lab v1.0.0</p>
             </div>
           </div>
        )}

        {/* コース選択 (メインメニュー) */}
{/* コース選択 (メインメニュー) */}
{currentScreen === "main_menu" && (
          <div className="text-center py-10 animate-fade-in-up">
            <h2 className="text-3xl font-serif font-bold mb-3 text-emerald-950">コース選択</h2>
            <div className="w-16 h-1 bg-amber-400 mx-auto mb-8 rounded-full"></div>
            
            {/* Flexboxを使って綺麗に並べる（余ったボタンは自動的に中央配置） */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-2xl mx-auto" dir="ltr">
              <div className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)]">
                <LevelButton title="文法" subtitle="Grammar" color="bg-emerald-50 border-emerald-200" icon="🧩" onClick={() => handleMainMenuClick("grammar")} />
              </div>
              <div className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)]">
                <LevelButton title="会話" subtitle="Conversation" color="bg-amber-50 border-amber-200" icon="💬" onClick={() => handleMainMenuClick("conversation")} />
              </div>
              <div className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)]">
                <LevelButton title="読解" subtitle="Reading" color="bg-blue-50 border-blue-200" icon="📖" onClick={() => handleMainMenuClick("reading")} />
              </div>
              <div className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)]">
                <LevelButton title="聴解" subtitle="Listening" color="bg-orange-50 border-orange-200" icon="🎧" onClick={() => handleMainMenuClick("listening")} />
              </div>
              <div className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)]">
                <LevelButton title="並び替え" subtitle="Reorder" color="bg-pink-50 border-pink-200" icon="🔄" onClick={() => handleMainMenuClick("reorder")} />
              </div>
              <div className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)]">
                <LevelButton title="1フレーズ" subtitle="Phrases" color="bg-purple-50 border-purple-200" icon="💡" onClick={() => handleMainMenuClick("phrase")} />
              </div>
              <div className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)]">
                <LevelButton title="詩" subtitle="Poetry" color="bg-stone-50 border-stone-300" icon="📜" onClick={() => handleMainMenuClick("poetry")} />
              </div>
            </div>
          </div>
        )}

        {/* 時代選択画面 */}
        {currentScreen === "eras" && (
            <div className="animate-fade-in-up">
                <HeaderBackButton onClick={() => changeScreen("main_menu")} />
                <h2 className="text-2xl font-serif font-bold mb-6 text-emerald-950 text-center">時代を選択 (Eras)</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" dir="ltr">
                    {POETRY_ERAS.map((era) => (
                        <button key={era.id} onClick={() => handleEraSelect(era.id)} className="bg-white p-5 rounded-xl border border-stone-200 hover:border-emerald-500 shadow-sm hover:shadow-md transition text-left flex items-start gap-4">
                            <span className="text-4xl">{era.icon}</span>
                            <div>
                                <h3 className="font-bold text-lg text-emerald-900">{era.name}</h3>
                                <p className="text-xs text-gray-500">{era.period}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        )}

        {/* 時代詳細画面 */}
        {currentScreen === "era_desc" && selectedEraId && (
            <div className="animate-fade-in-up bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden">
                <div className="bg-emerald-900 p-6 text-white text-center">
                      <span className="text-6xl mb-4 block">{getEraData()?.icon}</span>
                      <h2 className="text-2xl font-bold font-serif">{getEraData()?.name}</h2>
                      <p className="opacity-80 text-sm mt-1">{getEraData()?.period}</p>
                </div>
                <div className="p-8">
                    <p className="text-gray-700 leading-relaxed mb-8 text-lg">{getEraData()?.desc}</p>
                    <div className="mb-8">
                        <h3 className="font-bold text-emerald-800 mb-3 border-b pb-2">この時代の特徴</h3>
                        <ul className="grid grid-cols-2 gap-2">
                            {getEraData()?.features.map((f, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                    <span className="text-amber-500">◆</span> {f}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex gap-3 justify-center">
                        <button onClick={() => changeScreen("eras")} className="px-6 py-3 rounded-full border border-gray-300 text-gray-500 font-bold hover:bg-gray-50 transition">戻る</button>
                        <button onClick={() => changeScreen("poets")} className="px-10 py-3 rounded-full bg-emerald-800 text-white font-bold hover:bg-emerald-900 shadow-lg transition transform hover:scale-105">詩人を選択する →</button>
                    </div>
                </div>
            </div>
        )}

        {/* 詩人/詩リスト選択画面 */}
        {currentScreen === "poets" && (
            <div className="animate-fade-in-up">
                 <HeaderBackButton onClick={() => changeScreen("era_desc")} text="時代解説に戻る" />
                 <h2 className="text-2xl font-serif font-bold mb-6 text-emerald-950 border-b-2 border-amber-400 pb-2 inline-block">
                     {getEraData()?.name}の詩
                 </h2>
                 
                 <div className="space-y-4">
                     {getFilteredArticles().length > 0 ? (
                         getFilteredArticles().map((article, index) => (
                            <div key={article.id} onClick={() => handleArticleClick(article, index)} className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 hover:border-emerald-400 hover:shadow-md cursor-pointer transition group">
                                <div className="flex justify-between items-center">
                                    <div>
                                        {/* 詩の場合はTitleを詩人名・作品名として扱う */}
                                        <h3 className="font-bold text-xl text-emerald-900 group-hover:text-emerald-700 mb-1">{article.title}</h3>
                                        <div className="flex gap-2">
                                            <span className="text-xs bg-stone-100 text-stone-500 px-2 py-1 rounded">詩 (Poetry)</span>
                                            {completedArticleIds.includes(article.id) && <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">鑑賞済み</span>}
                                        </div>
                                    </div>
                                    <span className="text-3xl text-stone-200 group-hover:text-amber-400 transition">✒️</span>
                                </div>
                            </div>
                         ))
                     ) : (
                         <div className="text-center py-12 bg-stone-50 rounded-xl border-dashed border-2 border-stone-200 text-gray-400">
                             <p className="text-2xl mb-2">📜</p>
                             <p>この時代の詩はまだ追加されていません</p>
                         </div>
                     )}
                 </div>
            </div>
        )}

        {/* 詩の鑑賞モード (クイズ前) */}
        {currentScreen === "poetry_read" && activeArticle && (
             <div className="animate-fade-in-up pb-20">
                 <HeaderBackButton onClick={() => changeScreen("poets")} text="詩のリストに戻る" />
                 
                 <div className="bg-[#fffdf5] rounded-2xl shadow-xl border border-[#e8e4d0] overflow-hidden relative">
                   {/* 装飾的な背景パターン */}
                   <div className="absolute top-0 right-0 w-32 h-32 bg-[url('/pattern.png')] opacity-10 pointer-events-none"></div>
                   
                   <div className="p-8 md:p-12 text-center">
                       <span className="text-amber-600 text-xs tracking-widest font-bold uppercase mb-2 block">Poetry Appreciation</span>
                       <h2 className="text-3xl font-serif font-bold mb-8 text-emerald-950">{activeArticle.title}</h2>
                       
                       {/* 詩の本文（アラビア語のみ表示） */}
                       <div className="space-y-8 mb-10">
                           {activeArticle.sentences?.map((sent, idx) => (
                               <div key={idx} className="relative group cursor-pointer" onClick={() => speakText(sent.arabic)}>
                                   <p className="text-2xl md:text-3xl font-arabic leading-loose text-emerald-900 drop-shadow-sm">{sent.arabic}</p>
                                   <p className="text-xs text-stone-400 mt-2 opacity-0 group-hover:opacity-100 transition">🔊 タップで再生</p>
                               </div>
                           ))}
                       </div>

                       <div className="flex justify-center mb-8">
                       <button onClick={handleTogglePlay} className="flex items-center gap-2 bg-amber-100 text-amber-800 px-6 py-2 rounded-full font-bold hover:bg-amber-200 transition">
                                <span>🔊</span> 詩を朗読する
                            </button>
                       </div>

                       <div className="bg-white/80 p-6 rounded-xl border border-stone-200 backdrop-blur-sm">
                           <p className="font-bold text-gray-700 mb-4">まずは意味を推測してみましょう</p>
                           <p className="text-sm text-gray-500 mb-6">詩の響きを味わったら、理解度チェックに進んでください。全問終了後に、詳しい解説と現代語訳が表示されます。</p>
                           <button onClick={() => startQuiz()} className="w-full md:w-auto px-12 py-4 bg-emerald-800 text-white font-bold rounded-full shadow-lg hover:bg-emerald-900 transition transform hover:scale-105">
                               📝 理解度チェックへ進む
                           </button>
                       </div>
                   </div>
                 </div>
             </div>
        )}

{currentScreen === "levels_sub" && (
          <div className="text-center py-10 animate-fade-in-up">
            <div className="flex justify-center mb-4">
               <HeaderBackButton onClick={() => changeScreen("main_menu")} />
            </div>
             
            <h2 className="text-2xl font-serif font-bold mb-3 text-emerald-950">
                {courseType === "reading" ? "リーディング" : 
                 courseType === "listening" ? "リスニング" : 
                 courseType === "phrase" ? "種類を選択" : 
                 courseType === "reorder" ? "並び替えレベル" : "学習モード選択"}
            </h2>
            <div className="grid grid-cols-1 gap-4 max-w-sm mx-auto" dir="ltr">
              
              {/* ▼ 既存の 初級・中級・上級 ボタン */}
              {courseType !== "grammar" && courseType !== "conversation" && courseType !== "poetry" && courseType !== "phrase" && (
                <>
                  <button onClick={() => handleSubLevelClick("初級")} className="p-6 bg-white border-2 border-emerald-100 rounded-xl shadow-sm hover:shadow-md hover:border-emerald-300 transition flex items-center justify-between group"><span className="text-2xl">🌱</span><span className="font-bold text-lg text-emerald-900">初級 (Beginner)</span><span className="text-gray-300 group-hover:text-emerald-500">→</span></button>
                  <button onClick={() => handleSubLevelClick("中級")} className="p-6 bg-white border-2 border-blue-100 rounded-xl shadow-sm hover:shadow-md hover:border-blue-300 transition flex items-center justify-between group"><span className="text-2xl">📖</span><span className="font-bold text-lg text-blue-900">中級 (Intermediate)</span><span className="text-gray-300 group-hover:text-blue-500">→</span></button>
                  <button onClick={() => handleSubLevelClick("上級")} className="p-6 bg-white border-2 border-purple-100 rounded-xl shadow-sm hover:shadow-md hover:border-purple-300 transition flex items-center justify-between group"><span className="text-2xl">📰</span><span className="font-bold text-lg text-purple-900">上級 (Advanced)</span><span className="text-gray-300 group-hover:text-purple-500">→</span></button>
                </>
              )}

              {/* ▼ ★新規追加: 1フレーズ用の フスハー・方言 ボタン */}
              {courseType === "phrase" && (
                <>
                  <button onClick={() => handlePhraseCategoryClick("フスハー")} className="p-6 bg-white border-2 border-emerald-100 rounded-xl shadow-sm hover:shadow-md hover:border-emerald-400 transition flex items-center justify-between group">
                    <span className="text-3xl">🕌</span>
                    <div className="text-left flex-1 ml-4">
                      <span className="font-bold text-lg text-emerald-900 block group-hover:text-emerald-700 transition">フスハー</span>
                      <span className="text-xs text-gray-500 font-bold">標準アラビア語 (Fusha)</span>
                    </div>
                    <span className="text-gray-300 group-hover:text-emerald-500 text-xl">→</span>
                  </button>
                  
                  <button onClick={() => handlePhraseCategoryClick("サウジ方言")} className="p-6 bg-white border-2 border-amber-100 rounded-xl shadow-sm hover:shadow-md hover:border-amber-500 transition flex items-center justify-between group">
                    <span className="text-3xl">☕</span>
                    <div className="text-left flex-1 ml-4">
                      <span className="font-bold text-lg text-amber-900 block group-hover:text-amber-700 transition">方言</span>
                      <span className="text-xs text-gray-500 font-bold">サウジ等の日常会話 (Ammiya)</span>
                    </div>
                    <span className="text-gray-300 group-hover:text-amber-500 text-xl">→</span>
                  </button>
                </>
              )}
            </div>
          </div>
        )}
        {currentScreen === "topics" && (
          <div className="animate-fade-in-up">
            <HeaderBackButton onClick={() => {
                if (courseType === "conversation" || courseType === "grammar") {
                    changeScreen("main_menu");
                } else {
                    changeScreen("levels_sub");
                }
            }} />
             
            <h2 className="text-2xl font-serif font-bold mb-6 text-emerald-950 border-b-2 border-amber-400 pb-2 inline-block">
                {courseType === "grammar" ? "文法トピック" : 
                 courseType === "conversation" ? "会話シーン" :
                 `${selectedLevel}のテーマ`}
            </h2>
            <div className="grid grid-cols-2 gap-4" dir="ltr">
              {Array.from(new Set(getFilteredArticles().map(a => a.category))).map(cat => (
                  <button key={cat} onClick={() => handleSelectCategory(cat)} className="bg-white p-6 rounded-xl shadow hover:shadow-lg border border-stone-200 hover:border-emerald-500 transition-all text-left group relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-2 h-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform w-fit">🏷️</span>
                      <span className="font-bold text-gray-700 group-hover:text-emerald-800 transition">{cat}</span>
                  </button>
              ))}
              
              {getFilteredArticles().length === 0 && (
                <div className="col-span-2 text-center py-10 text-gray-400 bg-stone-50 rounded-xl border-dashed border-2 border-stone-200">
                    <p className="text-lg">📭</p>
                    {courseType === "reading" && selectedLevel === "初級" 
                        ? "現在、初級のリーディング記事はありません" 
                        : "コンテンツが見つかりません"}
                </div>
              )}
            </div>
          </div>
        )}

        {currentScreen === "list" && (
          <div className="animate-fade-in-up">
            <HeaderBackButton onClick={() => changeScreen("topics")} />

            <div className="flex justify-between items-end mb-6 border-b border-stone-200 pb-2"><h2 className="text-xl font-serif font-bold text-emerald-950">{selectedCategory}</h2></div>
            <div className="space-y-3">
              {getFilteredArticles().filter(a => a.category === selectedCategory).map((article, index) => {
                  const locked = isLockedContent(article);
                  return (
                    <div key={article.id} onClick={() => handleArticleClick(article, index)} className={`p-5 rounded-xl shadow-sm border flex justify-between items-center transition-all group cursor-pointer ${locked ? "bg-stone-100 border-stone-200" : "bg-white hover:shadow-md border-stone-100 hover:border-amber-300"}`}>
                        <div className="flex-1 flex items-center gap-3">{locked && (<div className="bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center text-lg shadow-inner" title="有料会員限定">🔒</div>)}<h3 className={`font-bold text-lg ${locked ? "text-gray-400" : "text-gray-800 group-hover:text-emerald-800 transition"}`}>{article.title} {courseType === "listening" && "📺"}</h3></div>
                        {completedArticleIds.includes(article.id) ? <span className="text-emerald-600 text-xl bg-emerald-100 p-1 rounded-full">✓</span> : (locked ? <span className="text-gray-300 text-sm">Premium</span> : <span className="text-stone-300 text-xl group-hover:text-amber-500 transition">❮</span>)}
                    </div>
                  );
              })}
            </div>
          </div>
        )}

        {currentScreen === "reader" && activeArticle && (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden pb-10 border border-stone-200 animate-fade-in-up">
            <div className="bg-emerald-900 text-amber-50 p-4 flex justify-between items-center sticky top-0 z-10">
                <button onClick={() => {
                    if (courseType === "listening" || courseType === "grammar") {
                        changeScreen("list");
                    } else if (courseType === "poetry") {
                        changeScreen("poets"); 
                    } else {
                        changeScreen("mode_select");
                    }
                }} className="hover:text-white text-sm font-bold opacity-80 transition flex items-center gap-1">
                    <span>←</span> 戻る
                </button>
                <span className="font-bold text-xs tracking-wider opacity-80">{activeArticle.category}</span>
            </div>

            <div className="p-6 md:p-10 flex flex-col items-center">
              
              {learningMode === "grammar" && activeArticle.imageUrls && activeArticle.imageUrls.length > 0 ? (
                <div className="w-full max-w-2xl flex flex-col items-center">
                  <h2 className="text-2xl font-serif font-bold mb-6 text-emerald-950 text-center w-full border-b-2 border-amber-400 pb-4">
                    {activeArticle.title}
                  </h2>
                  {activeArticle.contentPlain && (
                    <div className="w-full text-left" dir="ltr">
                    <p className="text-sm text-gray-600 mb-8 leading-relaxed whitespace-pre-wrap">
                      {activeArticle.contentPlain}
                    </p>
                  </div>
                  )}
                  <div className="w-full space-y-6 mb-10">
                    {activeArticle.imageUrls.map((url, idx) => (
                      <img 
                        key={idx}
                        src={url} 
                        alt={`Slide ${idx + 1}`}
                        className="w-full rounded-xl shadow-md border border-stone-100"
                        loading="lazy"
                      />
                    ))}
                  </div>

                  {activeArticle.questions && activeArticle.questions.length > 0 ? (
                    <div className="bg-emerald-50 p-6 rounded-2xl text-center w-full border border-emerald-100">
                      <p className="text-emerald-900 font-bold mb-4">解説を読み終わりましたか？</p>
                      <button 
                        onClick={() => {
                           const qs = activeArticle.questions;
                           setGrammarQuestions(qs);
                           startQuiz();
                        }} 
                        className="w-full md:w-auto px-10 py-4 bg-emerald-600 text-white font-bold rounded-full shadow-lg hover:bg-emerald-700 transition transform hover:scale-105 flex items-center justify-center gap-2 mx-auto"
                      >
                        <span>📝</span> 理解度チェック (Check Understanding)
                      </button>
                    </div>
                  ) : (
                    <div className="text-center text-gray-500 text-sm">
                      <p>このレッスンの解説は以上です。</p>
                      <button onClick={() => changeScreen("list")} className="mt-4 text-emerald-600 underline">一覧に戻る</button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-full max-w-xl">
                    
                    {activeArticle.videoUrl && getYouTubeId(activeArticle.videoUrl) && (
                      <div className="w-full max-w-xl mb-8 aspect-video rounded-xl overflow-hidden shadow-lg border border-stone-200">
                        <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${getYouTubeId(activeArticle.videoUrl)}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                      </div>
                    )}

                    {learningMode === "grammar" && (
                        <div className="text-center py-10">
                            <h2 className="text-xl font-bold mb-4">{activeArticle.title}</h2>
                            <p className="mb-6 text-gray-500">理解度チェックテストを開始します。</p>
                            <button onClick={() => {
                               const qs = activeArticle.questions;
                               setGrammarQuestions(qs);
                               startQuiz();
                            }} className="bg-emerald-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-emerald-700 transition">テストを開始する</button>
                        </div>
                    )}

                    {learningMode !== "grammar" && (
                      <>
                        <h2 className="text-2xl font-serif font-bold mb-8 text-center text-emerald-950 w-full max-w-md">{activeArticle.level === "初級" ? `問題 ${activeProblemNumber} (${activeArticle.title})` : activeArticle.title}</h2>
                        {activeArticle.level === "会話" || (courseType === "poetry" && activeArticle.sentences && activeArticle.sentences.length > 0) ? (
                          <div className="w-full space-y-6 mb-10">
  {activeArticle.sentences?.map((sent, idx) => {
                    const isRight = courseType === "poetry" ? true : idx % 2 === 0;
                    // ★ 追加: 現在再生中の文かどうかを判定
                    const isCurrentPlaying = audioState !== "idle" && currentAudioIndex === idx;

                    return (
                      <div key={idx} className={`flex ${isRight ? "justify-start" : "justify-end"}`}>
                        <div className={`max-w-[100%] p-5 rounded-2xl relative shadow-sm border transition-all duration-300 
                          ${isCurrentPlaying ? "ring-2 ring-amber-400 scale-[1.02] shadow-md" : ""} 
                          ${courseType === "poetry" ? "bg-[#fffdf5] border-[#e8e4d0] w-full" : isRight ? "bg-emerald-50 text-emerald-900 rounded-tr-none border-emerald-100" : "bg-white text-gray-800 rounded-tl-none border-gray-100"}`}>
                          
                          {/* Header */}
                          <div className="flex justify-between items-center mb-2">
                            <p className="text-xs font-bold opacity-60 uppercase">{sent.speaker}</p>
                            {learningMode !== "listening" && (
                              <button onClick={() => speakText(sent.arabic, sent.speaker)} className="text-gray-300 hover:text-emerald-600 text-sm transition">🔊</button>
                            )}
                          </div>

                          {/* Content */}
                          {learningMode === "listening" ? (
                            <div className="flex flex-col items-center py-2">
                              <button 
                                onClick={() => speakText(sent.arabic, sent.speaker)} 
                                className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-sm border-2 transition transform active:scale-95 hover:scale-105 mb-3 ${isRight ? "bg-white border-emerald-200 text-emerald-600" : "bg-stone-50 border-stone-200 text-stone-500"}`}
                              >
                                🔊
                              </button>
                              <p className="text-sm font-bold text-gray-600 text-center leading-relaxed">
                                {sent.japanese}
                              </p>
                            </div>
                          ) : (
                            <div className="flex flex-col">
                              <p className={`text-xl md:text-2xl font-arabic leading-loose mb-2 ${courseType === "poetry" ? "text-center py-2" : ""}`}>
                                {sent.arabic}
                              </p>
                              <p className="text-sm text-gray-600 font-bold leading-relaxed border-t border-dashed border-gray-200 pt-2 mt-1">
                                {sent.japanese}
                              </p>
                              {/* 詩の解説ノート */}
                              {sent.note && (
                                <div className="mt-2 text-xs bg-amber-100 text-amber-900 p-2 rounded flex flex-col gap-2 text-left" dir="ltr">
                                  <div className="flex gap-2 items-start">
                                    <span className="text-lg">💡</span>
                                    <span>{sent.note}</span>
                                  </div>

                                  {/* ★ 追加: 関連文法へのボタン */}
                                  {sent.relatedGrammarId && (
                                    <button 
                                      onClick={() => handleJumpToGrammar(sent.relatedGrammarId!)}
                                      className="self-start mt-1 bg-white border border-amber-300 text-amber-800 text-[10px] px-3 py-1 rounded-full font-bold hover:bg-amber-200 transition flex items-center gap-1 shadow-sm"
                                    >
                                      <span>📖</span> 文法解説: {getArticleById(sent.relatedGrammarId)?.title}
                                    </button>
                                  )}
                                </div>
                              )}
                            </div>
                          )}

                        </div>
                      </div>
                    );
                  })}
                          </div>
                        ) : (
                          learningMode === "listening" ? (
                             <div className="py-8 text-center text-gray-500 text-sm bg-stone-50 rounded-xl border border-stone-200 mb-8">
                                <p>🎥 動画・音声を視聴して内容を理解しましょう</p>
                                <p className="text-xs mt-2 opacity-70">（テキストはクイズ後に表示されます）</p>
                             </div>
                          ) : (
                             <p className="text-xl md:text-2xl leading-loose font-arabic text-justify mb-10 w-full text-gray-800" dir="rtl">
                                {(() => {
                                  if (activeArticle.level === "上級") {
                                    if (activeArticle.contentPlain) return activeArticle.contentPlain;
                                    if (activeArticle.sentences && activeArticle.sentences.length > 0) return removeTashkeel(activeArticle.sentences.map(s => s.arabic).join(" "));
                                    return activeArticle.contentVoweled ? removeTashkeel(activeArticle.contentVoweled) : "";
                                  } 
                                  else if (activeArticle.level === "中級") {
                                    if (activeArticle.contentVoweled) return activeArticle.contentVoweled;
                                    if (activeArticle.sentences && activeArticle.sentences.length > 0) return activeArticle.sentences.map(s => s.arabic).join(" ");
                                    return activeArticle.contentPlain || "";
                                  } 
                                  else {
                                    return (activeArticle.contentVoweled || activeArticle.contentPlain || "");
                                  }
                                })()}
                             </p>
                          )
                        )}
                        
                        {activeArticle.keyExpressions && activeArticle.keyExpressions.length > 0 && (
                           <div className="mb-8 w-full bg-amber-50 rounded-xl p-5 border border-amber-100">
                             <h3 className="font-bold mb-4 text-xs text-amber-600 tracking-widest uppercase flex items-center gap-2">
                               <span>🔑</span> Key Expressions
                             </h3>
                             <div className="space-y-4">
                             {activeArticle.keyExpressions.map((item, idx) => (
                                 <div key={idx} className="bg-white p-3 rounded-lg border border-amber-100 shadow-sm">
                                   <p className="font-bold text-emerald-900 font-arabic text-lg mb-1" dir="rtl">
                                     {item.phrase}
                                   </p>
                                   {item.reading && (
                                     <p className="text-xs text-gray-400 mb-1">
                                       {item.reading}
                                     </p>
                                   )}
                                   <p className="text-sm text-gray-700 font-bold mb-1">{item.explanation.split("「")[0]}</p>
                                   <p className="text-xs text-gray-500 leading-relaxed text-left" dir="ltr">{item.explanation}</p>
                                 </div>
                               ))}
                             </div>
                           </div>
                        )}

                        <div className="mb-10 w-full"><h3 className="font-bold mb-4 text-xs text-stone-400 tracking-widest uppercase">Vocabulary</h3><div className="flex flex-wrap gap-2">{activeArticle.vocabList.map((v, i) => (<VocabButton key={i} v={v} i={i} isRevealed={revealedVocabIndex === i} isSaved={savedVocab.some(sv => sv.word === v.word)} onReveal={() => setRevealedVocabIndex(i)} onSave={() => saveWord(v.word, v.meaning)} />))}</div></div>
                        
                        {/* 詩の場合はクイズボタンは表示しない（クイズは最初に終わっているため） */}
                        {courseType !== "poetry" && (
                             <button onClick={() => startQuiz()} className="w-full bg-emerald-800 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-emerald-900 transition transform flex items-center justify-center gap-2"><span>📝</span> {courseType === "listening" ? "問題を解く" : `理解度チェック (${activeArticle.questions.length}問)`}</button>
                        )}
                      </>
                    )}
                </div>
              )}

            </div>
          </div>
        )}
        
        {currentScreen === "mode_select" && activeArticle && (
          <div className="flex flex-col items-center justify-center py-10 animate-fade-in-up max-w-xl mx-auto relative">
            <div className="w-full text-left">
                <HeaderBackButton onClick={() => changeScreen("list")} />
            </div>

            <div className="w-24 h-24 bg-gradient-to-br from-emerald-700 to-emerald-900 text-amber-400 rounded-full flex items-center justify-center text-4xl mb-8 shadow-xl border-4 border-amber-100">🎓</div>
            <h2 className="text-2xl font-serif font-bold mb-4 text-center text-emerald-950">{activeArticle.title}</h2>
            <p className="text-gray-500 mb-10 text-sm tracking-wide">学習モードを選択</p>
            <div className={`grid gap-4 w-full ${activeArticle.level === "初級" || activeArticle.level === "文法" ? "grid-cols-2" : "grid-cols-1 md:grid-cols-3"}`} dir="ltr">
              {(courseType === "reading" || (activeArticle.level !== "文法" && courseType !== "listening")) && (
                <ModeButton icon="📖" title="Reading" subtitle="読んで理解" color="border-emerald-200 hover:bg-emerald-50 text-emerald-900" onClick={() => startLearning("reading")} />
              )}
              {courseType !== "reading" && activeArticle.level !== "文法" && activeArticle.level !== "初級" && (
                <ModeButton icon="🎧" title="Listening" subtitle="音声のみ" color="border-blue-200 hover:bg-blue-50 text-blue-900" onClick={() => startLearning("listening")} />
              )}
              {activeArticle.level === "文法" && courseType === "grammar" && (
                <ModeButton icon="🧩" title="Grammar" subtitle="文法理解" color="border-purple-200 hover:bg-purple-50 text-purple-900" onClick={() => startLearning("grammar")} />
              )}
              {courseType !== "reading" && (
                <ModeButton icon="✍️" title="Dictation" subtitle="書き取り" color="border-orange-200 hover:bg-orange-50 text-orange-900" onClick={() => startLearning("dictation")} />
              )}
            </div>
          </div>
        )}

        {currentScreen === "dictation" && activeArticle && activeArticle.sentences && (
          <div className="max-w-xl mx-auto animate-fade-in-up pb-32">
             <div className="mb-6 flex justify-between items-center">
                 <HeaderBackButton onClick={() => changeScreen("mode_select")} text="中断して戻る" colorClass="text-gray-400 hover:text-red-500" />
                 <span className="text-xs font-bold text-gray-400 tracking-widest" dir="ltr">SENTENCE {dictationIndex + 1} / {activeArticle.sentences.length}</span>
             </div>
             
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
             <div className="flex justify-between items-center mb-4">
                 {/* 詩の場合は鑑賞モードに戻る */}
                 <HeaderBackButton 
   onClick={() => courseType === "poetry" ? changeScreen("poetry_read") : courseType === "reorder" ? changeScreen("list") : changeScreen("reader")} 
   text={courseType === "poetry" ? "詩に戻る" : courseType === "reorder" ? "一覧に戻る" : "記事に戻る"} 
/>
                 <div className="text-center text-xs font-bold text-gray-400 tracking-widest" dir="ltr">QUESTION {currentQuestionIndex + 1} / {activeArticle.questions.length}</div>
             </div>
             
             {(() => {
  // 1. オプショナルチェイニング (?.) を使って安全に取得
  const currentQ = activeArticle.questions?.[currentQuestionIndex];
  
  // 2. もし currentQ が undefined なら、何も表示せずに処理を抜ける（TypeScriptを安心させる）
  if (!currentQ) return null;

  const isLast = currentQuestionIndex === activeArticle.questions.length - 1;

  if (currentQ.type === "reorder") {
    // ★ ここを追加: 中級・上級なら穴埋め形式にする
    const isAdvancedReorder = activeArticle.level === "中級" || activeArticle.level === "上級";
    
    if (isAdvancedReorder) {
        return (
          <FillInBlankDrill
            question={currentQ}
            onNext={nextQuizQuestion}
            isLast={isLast}
            onSpeak={speakText}
            onScoreIncrease={() => {
              setQuizScore(prev => prev + 1);
              speakText("Mumtāz");
            }}
          />
        );
    } else {
        return (
          <ReorderDrill
            question={currentQ}
            onNext={nextQuizQuestion}
            isLast={isLast}
            onSpeak={speakText}
            onScoreIncrease={() => {
              setQuizScore(prev => prev + 1);
              speakText("Mumtāz");
            }}
          />
        );
    }
 } else if (currentQ.type === "orthography" || !currentQ.options || currentQ.options.length === 0) {
                 return (
                   <OrthographyDrill 
                     question={currentQ} 
                     onNext={nextQuizQuestion}
                     isLast={isLast}
                     onSpeak={speakText}
                   />
                 );
               } else {
                 return (
                   <div className="bg-white p-8 rounded-2xl shadow-xl border border-stone-100 text-left" dir="ltr">
                     <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Multiple Choice</span>
                     <div className="text-xl font-bold mb-8 text-gray-800 leading-relaxed text-left" dir="ltr">
                       {currentQ.text.split('\n').map((line, i) => (
                         <p 
                           key={i} 
                           className={line.includes('؟') || line.includes('هَذَا') ? "text-2xl font-arabic mt-4 text-right" : "text-base text-gray-600"}
                           dir={line.includes('؟') || line.includes('هَذَا') ? "rtl" : "ltr"}
                         >
                           {line}
                         </p>
                       ))}
                     </div>
                     <div className="space-y-3 mb-6">
                         {currentQ.options.map((option, idx) => {
                         let btnClass = "bg-stone-50 border-stone-100 text-gray-700 hover:border-emerald-300";
                         if (isQuizResultVisible) {
                             if (idx === currentQ.correctIndex) { btnClass = "bg-emerald-100 border-emerald-500 text-emerald-900 font-bold"; } else if (idx === quizSelectedOption) { btnClass = "bg-red-100 border-red-500 text-red-900"; } else { btnClass = "bg-gray-50 border-gray-100 text-gray-400 opacity-50"; }
                         }
                         return (
                           <button 
                             key={idx} 
                             onClick={() => handleQuizOptionClick(idx)} 
                             disabled={isQuizResultVisible} 
                             dir="ltr"
                             className={`w-full p-4 text-left border-2 rounded-xl transition font-medium ${btnClass}`}
                           >
                             {option}
                           </button>
                         );                
                         })}
                     </div>
                     {isQuizResultVisible && (
                       <div className="animate-fade-in-up">
                         <div className={`p-4 rounded-xl text-center mb-6 border ${quizSelectedOption === currentQ.correctIndex ? "bg-emerald-50 border-emerald-200 text-emerald-800" : "bg-red-50 border-red-200 text-red-800"}`}>
                           <p className="font-bold text-lg mb-1">{quizSelectedOption === currentQ.correctIndex ? "🎉 正解！" : "😢 残念..."}</p>
                           
                           <p className="text-sm opacity-90 text-left mt-2 whitespace-pre-wrap" dir="ltr">
                             {currentQ.explanation}
                           </p>
             
                           {currentQ.relatedGrammarId && (
                             <div className="mt-3 text-left">
                               <button 
                                 onClick={() => handleJumpToGrammar(currentQ.relatedGrammarId!)}
                                 className="bg-blue-50 border border-blue-200 text-blue-700 text-xs px-4 py-2 rounded-full font-bold hover:bg-blue-100 transition flex items-center gap-2 shadow-sm"
                               >
                                 <span>🔗</span> 
                                 この文法を詳しく学ぶ ({getArticleById(currentQ.relatedGrammarId!)?.category})
                               </button>
                             </div>
                           )}
             
                           {currentQ.audio && (
                             <button 
                               onClick={() => speakText(currentQ.audio!)} 
                               className="mx-auto flex items-center gap-2 bg-white border border-emerald-200 text-emerald-700 px-4 py-2 rounded-full text-xs font-bold shadow-sm hover:bg-emerald-50 transition mt-4"
                             >
                               <span>🔊</span> 発音を聞く
                             </button>
                           )}
                         </div>
                         <button onClick={nextQuizQuestion} className="w-full bg-emerald-800 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-emerald-900 transition transform">{isLast ? "結果を見る" : "次の問題へ"}</button>
                       </div>
                     )}
                   </div>
                 );
               }
             })()}
          </div>
        )}
        {currentScreen === "result" && activeArticle && (
          <div className="pb-20 animate-fade-in-up">
              {/* 結果画面から戻るボタンを追加: リストへ戻る */}

              <div className="max-w-xl mx-auto">
                  <HeaderBackButton onClick={() => changeScreen(courseType === "poetry" ? "poets" : "list")} text="一覧に戻る" />
              </div>

            <div className="text-center py-12 bg-white rounded-2xl shadow-xl mb-8 border border-stone-100">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-2xl font-serif font-bold mb-2 text-emerald-950">学習完了</h2>
              <p className="text-gray-400 text-sm mb-8">Great Job!</p>
              {learningMode !== "dictation" && learningMode !== "grammar" && !activeArticle.questions.some(q => q.type === "orthography") && (
                  <div className="text-4xl font-bold text-emerald-600 mb-8">{quizScore} <span className="text-lg text-gray-300 font-normal">/ {activeArticle.questions.length}</span></div>
              )}
              
              {/* 詩の場合は「詳しい解説を見る」ボタンを表示 */}
              {courseType === "poetry" ? (
                  <div className="flex flex-col gap-3 max-w-xs mx-auto">
                      <button onClick={() => changeScreen("reader")} className="px-8 py-3 bg-amber-500 text-white font-bold rounded-full hover:bg-amber-600 shadow-lg transition">
                          📖 詳しい解説を読む
                      </button>
                      <button onClick={() => changeScreen("poets")} className="px-8 py-3 bg-gray-100 text-gray-600 font-bold rounded-full hover:bg-gray-200 transition">
                          リストに戻る
                      </button>
                  </div>
              ) : (
                  <div className="space-y-6">
                    {/* 通常の読解モードでも、ここに「復習（解説）」を表示する */}
                    <div className="flex justify-center gap-4 mb-8">
                        <button onClick={() => changeScreen("list")} className="px-10 py-3 bg-emerald-900 text-white font-bold rounded-full hover:bg-emerald-800 shadow-lg transition">一覧に戻る</button>
                    </div>

                    {/* sentencesデータがある場合、復習用に表示する */}
                    {activeArticle.sentences && activeArticle.sentences.length > 0 && (
                      <div className="mt-12 text-left max-w-2xl mx-auto px-4">
                        <h3 className="text-center font-bold text-emerald-900 mb-6 border-b pb-2">文章の解説・日本語訳</h3>
                        <div className="space-y-6">
                          {activeArticle.sentences.map((sent, idx) => (
                            <div key={idx} className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                              {/* アラビア語 */}
                              <p className="text-xl font-arabic text-emerald-900 mb-2 leading-loose" dir="rtl">{sent.arabic}</p>
                              
                              {/* 日本語訳 */}
                              <p className="text-sm font-bold text-gray-700 mb-2 text-left" dir="ltr">
                                {sent.japanese}
                              </p>
                              
                              {/* 解説ノート（あれば表示） */}
                              {sent.note && (
                                <div className="text-xs bg-amber-100 text-amber-900 p-2 rounded flex flex-col gap-2 text-left" dir="ltr">
                                  <div className="flex gap-2 items-start">
                                    <span className="text-lg">💡</span>
                                    <span>{sent.note}</span>
                                  </div>

                                  {/* ★ 追加: 関連文法へのボタン（復習画面） */}
                                  {sent.relatedGrammarId && (
                                    <button 
                                      onClick={() => handleJumpToGrammar(sent.relatedGrammarId!)}
                                      className="self-start mt-1 bg-white border border-amber-300 text-amber-800 text-[10px] px-3 py-1 rounded-full font-bold hover:bg-amber-200 transition flex items-center gap-1 shadow-sm"
                                    >
                                      <span>📖</span> 文法解説: {getArticleById(sent.relatedGrammarId)?.title}
                                    </button>
                                  )}
                                </div>
                              )}
                              
                              {/* 音声再生ボタン */}
                              <div className="mt-2 text-right">
                                <button onClick={() => speakText(sent.arabic)} className="text-xs text-emerald-600 font-bold hover:underline">
                                  🔊 音声を聞く
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
              )}
            </div>
          </div>
        )}
{/* ★ 新規画面: 1フレーズ一覧 (日本語一覧) */}
{currentScreen === "phrases_list" && (
          <div className="animate-fade-in-up max-w-xl mx-auto">
            <HeaderBackButton onClick={() => changeScreen("levels_sub")} text="種類選択に戻る" />
            <h2 className="text-2xl font-serif font-bold mb-6 text-emerald-950 border-b-2 border-amber-400 pb-2 inline-block">
                {selectedCategory}のフレーズ
            </h2>
            <div className="space-y-3">
              {/* ★ .filter(a => a.category === selectedCategory) を追加して絞り込み */}
              {getFilteredArticles().filter(a => a.category === selectedCategory).length > 0 ? (
                getFilteredArticles().filter(a => a.category === selectedCategory).map((article) => (
                  <button 
                    key={article.id} 
                    onClick={() => handlePhraseClick(article)} 
                    className="w-full text-left p-5 bg-white rounded-xl shadow-sm border border-stone-100 hover:border-emerald-400 hover:shadow-md transition-all group flex justify-between items-center"
                  >
                    <div className="flex items-center gap-4">
                       <span className="text-2xl opacity-80">🇯🇵</span>
                       <span className="font-bold text-lg text-gray-800 group-hover:text-emerald-800 transition">{article.title}</span>
                    </div>
                    <span className="text-stone-300 group-hover:text-amber-500 transition">翻訳を見る ❯</span>
                  </button>
                ))
              ) : (
                 <div className="text-center py-12 text-gray-400 bg-stone-50 rounded-xl border-dashed border-2 border-stone-200">
                   <p className="text-2xl mb-2">📭</p>
                   <p>現在、{selectedCategory}のデータはありません。</p>
                 </div>
              )}
            </div>
          </div>
        )}
        {/* ★ 新規画面: 1フレーズ詳細 (アラビア語と解説) */}
        {currentScreen === "phrase_detail" && activeArticle && (
          <div className="animate-fade-in-up pb-20 max-w-xl mx-auto">
             <HeaderBackButton onClick={() => changeScreen("phrases_list")} text="一覧に戻る" />
             
             <div className="bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden text-center">
                {/* 上部: 日本語 */}
                <div className="bg-stone-50 p-6 border-b border-stone-100">
                   <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Meaning</span>
                   <h2 className="text-2xl font-bold text-gray-800">{activeArticle.title}</h2>
                </div>
                
                {/* 下部: アラビア語と解説 */}
                <div className="p-8 md:p-12">
                   <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest block mb-6">Arabic Phrase</span>
                   <p className="text-4xl md:text-5xl font-arabic text-emerald-900 leading-loose mb-10 drop-shadow-sm" dir="rtl">
                      {/* sentences[0].arabic にアラビア語を入れる想定 */}
                      {activeArticle.sentences?.[0]?.arabic || activeArticle.contentPlain}
                   </p>
                   
                   <button 
                     onClick={() => speakText(activeArticle.sentences?.[0]?.arabic || activeArticle.contentPlain || "")} 
                     className="bg-amber-100 text-amber-700 w-20 h-20 rounded-full text-3xl mx-auto flex items-center justify-center hover:bg-amber-200 hover:scale-110 active:scale-95 transition shadow-sm border-2 border-amber-200 mb-10"
                   >
                     🔊
                   </button>

                   {/* 解説セクション */}
                   <div className="text-left bg-emerald-50 p-6 rounded-xl border border-emerald-100 relative">
                     <div className="absolute -top-3 left-6 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                       Explanation
                     </div>
                     <p className="text-sm text-emerald-900 leading-relaxed whitespace-pre-wrap mt-2 font-medium">
                       {/* sentences[0].note に解説を入れる想定 */}
                       {activeArticle.sentences?.[0]?.note || "解説がありません。"}
                     </p>
                   </div>
                </div>
             </div>
          </div>
        )}
      </main>
{/* ★ 新規追加: フローティング・オーディオプレイヤー */}
{(currentScreen === "reader" || currentScreen === "poetry_read") && learningMode !== "grammar" && (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-stone-200 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)] p-4 z-40 animate-fade-in-up">
          <div className="max-w-xl mx-auto flex items-center justify-between">
            
            {/* 停止ボタン */}
            <button 
              onClick={handleStopPlayback}
              disabled={audioState === "idle"}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition ${audioState === "idle" ? "text-gray-300 bg-gray-100" : "text-stone-600 bg-stone-100 hover:bg-stone-200 active:scale-95"}`}
            >
              ⏹
            </button>

            {/* コントロール群 */}
            <div className="flex items-center gap-4">
              {/* 戻るボタン (文章データがある場合のみ有効) */}
              <button 
                onClick={handlePrevSentence}
                disabled={audioState === "idle" || !activeArticle?.sentences}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition ${audioState === "idle" || !activeArticle?.sentences ? "text-gray-300" : "text-emerald-800 bg-emerald-50 hover:bg-emerald-100 active:scale-95"}`}
              >
                ⏮
              </button>

              {/* 再生/一時停止ボタン */}
              <button 
                onClick={handleTogglePlay}
                className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-800 text-white flex items-center justify-center text-3xl shadow-lg hover:scale-105 active:scale-95 transition"
              >
                {audioState === "playing" ? "⏸" : "▶️"}
              </button>

              {/* 進むボタン (文章データがある場合のみ有効) */}
              <button 
                onClick={handleNextSentence}
                disabled={audioState === "idle" || !activeArticle?.sentences}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition ${audioState === "idle" || !activeArticle?.sentences ? "text-gray-300" : "text-emerald-800 bg-emerald-50 hover:bg-emerald-100 active:scale-95"}`}
              >
                ⏭
              </button>
            </div>

            {/* ステータス表示 */}
            <div className="w-10 text-center">
              {audioState === "playing" && <span className="text-amber-500 animate-pulse text-xl">🔊</span>}
              {audioState === "paused" && <span className="text-gray-400 text-xs font-bold">PAUSE</span>}
            </div>

          </div>
        </div>
      )}
      {/* フッターリンクエリア */}
      <footer className="bg-emerald-950 text-emerald-200 py-8 pb-32 text-center text-xs">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 mb-4">
          <Link href="/faq" className="hover:text-white transition">よくある質問</Link>
          <Link href="/terms" className="hover:text-white transition">利用規約</Link>
          <Link href="/privacy" className="hover:text-white transition">プライバシーポリシー</Link>
          <Link href="/law" className="hover:text-white transition">特定商取引法に基づく表記</Link>
        </div>
        <p className="opacity-50">&copy; 2024 Arabi Lab. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

// UI Components
function VocabButton({ v, i, isRevealed, isSaved, onReveal, onSave }: any) { return <button onClick={onReveal} className={`relative px-3 py-1.5 rounded-lg text-sm transition-all duration-300 border ${isRevealed ? "bg-emerald-50 border-emerald-300 text-emerald-900 shadow-sm scale-105" : "bg-white border-dashed border-stone-300 text-stone-500 hover:border-amber-400 hover:text-amber-700"}`}><span className={`font-bold ${isRevealed ? "" : "font-arabic text-lg"}`}>{isRevealed ? v.meaning : v.word}</span>{isRevealed && !isSaved && <span onClick={(e) => { e.stopPropagation(); onSave(); }} className="absolute -top-2 -left-2 bg-emerald-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs shadow-md cursor-pointer hover:bg-emerald-700 hover:scale-110 transition">+</span>}{isSaved && <span className="absolute -top-2 -left-2 text-emerald-600 bg-white rounded-full border border-emerald-200 text-[10px] w-5 h-5 flex items-center justify-center shadow-sm">✓</span>}</button>; }
function LevelButton({ title, subtitle, color, icon, onClick }: any) { 
  return (
    <button onClick={onClick} className={`w-full h-28 sm:h-32 p-4 rounded-3xl shadow-sm border-2 ${color} flex flex-col items-center justify-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 group bg-white`}>
      <span className="text-3xl sm:text-4xl mb-2 group-hover:scale-110 transition-transform drop-shadow-sm grayscale group-hover:grayscale-0">{icon}</span>
      <span className="text-base sm:text-lg font-bold tracking-wide text-gray-800">{title}</span>
      <span className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase mt-1 tracking-widest">{subtitle}</span>
    </button>
  ); 
}
function ModeButton({ icon, title, subtitle, color, onClick }: any) { return <button onClick={onClick} className={`border-2 ${color} p-4 rounded-2xl transition-all shadow-sm hover:shadow-md flex flex-col items-center gap-2 group h-full justify-center bg-white`}><span className="text-3xl group-hover:scale-110 transition-transform">{icon}</span><div className="text-center"><span className="font-bold text-sm block text-gray-700">{title}</span><span className="text-[10px] text-gray-400 font-bold">{subtitle}</span></div></button>; }
function StatCard({ label, value, color }: any) { return <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100"><p className="text-stone-400 text-[10px] font-bold uppercase tracking-widest mb-1">{label}</p><p className={`text-2xl font-bold font-serif ${color}`}>{value}</p></div>; }

function SettingItem({ icon, label, onClick }: { icon: string, label: string, onClick: () => void }) {
  return (
    <button onClick={onClick} className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition text-left group">
      <div className="flex items-center gap-3">
        <span className="text-xl bg-stone-100 w-8 h-8 rounded-full flex items-center justify-center">{icon}</span>
        <span className="text-gray-700 font-medium text-sm">{label}</span>
      </div>
      <span className="text-gray-300 group-hover:text-emerald-500 transition">→</span>
    </button>
  );
}

function OrthographyDrill({ question, onNext, isLast, onSpeak }: any) {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    setIsRevealed(false);
  }, [question]);

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-stone-100 text-center animate-fade-in-up">
      <span className="inline-block bg-purple-50 text-purple-700 text-[10px] font-bold px-2 py-1 rounded mb-4 tracking-wider uppercase border border-purple-100">
        ✍️ 文字練習
      </span>
        
      <h3 className="text-lg font-bold mb-2 text-gray-500">問題</h3>
      <div className="text-4xl font-bold font-arabic text-emerald-950 mb-10 py-6 bg-stone-50 rounded-xl border border-stone-200 dir-rtl whitespace-pre-wrap">
        {question.text}
      </div>

      {!isRevealed ? (
        <button 
          onClick={() => setIsRevealed(true)} 
          className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-emerald-700 transition transform hover:scale-105 flex items-center justify-center gap-2"
        >
          <span>👁️</span> 答えを見る
        </button>
      ) : (
        <div className="animate-fade-in-up">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-6">
            <div className="text-sm text-emerald-600 font-bold mb-2">正解 (Answer)</div>
            <div className="text-5xl text-emerald-800 font-arabic font-bold mb-4">
              {question.explanation}
            </div>
            
            {/* 音声再生ボタン（解説時のみ表示） */}
            {question.audio && (
              <button 
                onClick={() => onSpeak(question.audio)} 
                className="mx-auto flex items-center gap-2 bg-white border border-emerald-200 text-emerald-700 px-4 py-2 rounded-full text-xs font-bold shadow-sm hover:bg-emerald-50 transition mb-2"
              >
                <span>🔊</span> 発音を聞く
              </button>
            )}
          </div>
            
          <div className="flex gap-2">
            <button 
              onClick={onNext} 
              className="flex-1 bg-emerald-800 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-emerald-900 transition"
            >
              {isLast ? "結果を見る" : "次の問題へ →"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
function ReorderDrill({ question, onNext, isLast, onSpeak, onScoreIncrease }: any) {
  const [availableWords, setAvailableWords] = useState<string[]>([]);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const correct = question.correctOrder || [];
    const distractors = question.distractors || [];
    const allWords = [...correct, ...distractors];
    setAvailableWords(allWords.sort(() => Math.random() - 0.5));
    setSelectedWords([]);
    setIsChecked(false);
    setShowAnswer(false);
  }, [question]);

  const handleSelect = (word: string, idx: number) => {
    if (isChecked) return;
    const newAvailable = [...availableWords];
    newAvailable.splice(idx, 1);
    setAvailableWords(newAvailable);
    setSelectedWords([...selectedWords, word]);
  };

  const handleDeselect = (word: string, idx: number) => {
    if (isChecked) return;
    const newSelected = [...selectedWords];
    newSelected.splice(idx, 1);
    setSelectedWords(newSelected);
    setAvailableWords([...availableWords, word]);
  };

  const checkAnswer = () => {
    if (selectedWords.length === 0) return;
    
    const selectedStr = selectedWords.join(" ");
    const correctStr = (question.correctOrder || []).join(" ");
    
    // 1. まず基本の正解（correctOrder）と一致するかチェック
    let isMatch = (selectedStr === correctStr);

    // 2. 一致しなかった場合、許容パターン（acceptableOrders）の中に一致するものがあるかチェック
    if (!isMatch && question.acceptableOrders) {
        isMatch = question.acceptableOrders.some((order: string[]) => order.join(" ") === selectedStr);
    }

    if (isMatch) {
        // どれかに一致していれば「完全正解」
        setIsCorrect(true);
        setIsChecked(true);
        onScoreIncrease();
        onSpeak(question.audio || correctStr);
    } else {
        // どれにも一致しなければ不正解
        setIsCorrect(false);
        setIsChecked(true);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-stone-100 text-center animate-fade-in-up">
      <span className="inline-block bg-blue-50 text-blue-700 text-[10px] font-bold px-2 py-1 rounded mb-4 tracking-wider uppercase border border-blue-100">
        🔄 並び替え問題
      </span>
      <h3 className="text-lg font-bold mb-6 text-gray-700 whitespace-pre-wrap">{question.text}</h3>

      {/* 選択した単語のエリア */}
      <div className="min-h-[80px] p-4 bg-stone-50 rounded-xl border-2 border-dashed border-stone-300 flex flex-wrap gap-2 justify-center items-center mb-6" dir="rtl">
        {selectedWords.length === 0 && !isChecked && (
          <span className="text-stone-400 text-sm">下の単語をタップして文を作成してください</span>
        )}
        {selectedWords.map((word, idx) => (
          <button 
            key={`sel-${idx}`} 
            onClick={() => handleDeselect(word, idx)}
            className={`px-4 py-2 rounded-lg font-arabic text-xl shadow-sm transition transform hover:scale-105 ${isChecked ? (isCorrect ? "bg-emerald-600 text-white border-emerald-700" : "bg-red-500 text-white border-red-600") : "bg-emerald-600 text-white hover:bg-emerald-500 border-b-4 border-emerald-800 active:border-b-0 active:translate-y-1"}`}
            disabled={isChecked}
          >
            {word}
          </button>
        ))}
      </div>

      {/* 選択肢（ダミー含む）のエリア */}
      <div className="flex flex-wrap gap-3 justify-center mb-8" dir="rtl">
        {availableWords.map((word, idx) => (
          <button 
            key={`avail-${idx}`} 
            onClick={() => handleSelect(word, idx)}
            className="px-4 py-2 bg-white text-gray-800 rounded-lg font-arabic text-xl shadow border border-stone-200 hover:border-emerald-400 hover:bg-emerald-50 transition transform hover:-translate-y-1"
            disabled={isChecked}
          >
            {word}
          </button>
        ))}
      </div>

      {/* 判定結果 */}
      {isChecked ? (
        <div className="animate-fade-in-up">
          <div className={`p-4 rounded-xl mb-6 border ${isCorrect ? "bg-emerald-50 border-emerald-200 text-emerald-800" : "bg-red-50 border-red-200 text-red-800"}`}>
            <p className="font-bold text-lg mb-2">{isCorrect ? "🎉 正解！" : "😢 惜しい..."}</p>
            {(!isCorrect && showAnswer) || isCorrect ? (
                <div className="text-2xl font-arabic text-center mt-4 mb-2 text-emerald-900" dir="rtl">
                    {(question.correctOrder || []).join(" ")}
                </div>
            ) : null}
            <p className="text-sm opacity-90 text-left mt-2 whitespace-pre-wrap" dir="ltr">
              {question.explanation}
            </p>
            {!isCorrect && !showAnswer && (
                <div className="flex gap-2 mt-4">
                    <button onClick={() => {setIsChecked(false); setSelectedWords([]); setAvailableWords([...(question.correctOrder||[]), ...(question.distractors||[])].sort(()=>Math.random()-0.5));}} className="flex-1 bg-white border border-red-200 text-red-700 py-2 rounded-lg text-sm font-bold hover:bg-red-50 transition">やり直す</button>
                    <button onClick={() => setShowAnswer(true)} className="flex-1 bg-red-100 text-red-800 py-2 rounded-lg text-sm font-bold hover:bg-red-200 transition">正解を見る</button>
                </div>
            )}
          </div>
          <button onClick={onNext} className="w-full bg-emerald-800 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-emerald-900 transition transform">
            {isLast ? "結果を見る" : "次の問題へ"}
          </button>
        </div>
      ) : (
         <button onClick={checkAnswer} disabled={selectedWords.length === 0} className={`w-full font-bold py-4 rounded-xl shadow-lg transition transform ${selectedWords.length === 0 ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-amber-500 text-white hover:bg-amber-600 hover:scale-105"}`}>
           答え合わせ
         </button>
      )}
    </div>
  );
}
// ▼▼▼ ここからコピーして、ファイルの【一番下】に追加してください ▼▼▼

function FillInBlankDrill({ question, onNext, isLast, onSpeak, onScoreIncrease }: any) {
  const [availableWords, setAvailableWords] = useState<string[]>([]);
  const [slots, setSlots] = useState<(string | null)[]>([]);
  const [fixedIndices, setFixedIndices] = useState<number[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const correct = question.correctOrder || [];
    const distractors = question.distractors || [];
    
    // 長さに応じて、最初から固定する「ヒント枠」の数を決める
    let numFixed = 2; // デフォルトは2箇所
    if (correct.length >= 10) numFixed = 3; // 10語以上なら3箇所
    if (correct.length <= 5) numFixed = 1;  // 5語以下なら1箇所
    
    // 固定枠のインデックスをランダムに決定
    const indices = Array.from({length: correct.length}, (_, i) => i);
    const shuffledIndices = indices.sort(() => 0.5 - Math.random()).slice(0, numFixed);
    setFixedIndices(shuffledIndices);

    // スロットの初期化（固定枠には単語を入れ、他はnull）
    const initialSlots = correct.map((word: string, idx: number) => shuffledIndices.includes(idx) ? word : null);
    setSlots(initialSlots);

    // 下の選択肢の初期化（固定されていない正解単語 ＋ ダミー）
    const unfixedCorrectWords = correct.filter((_: any, idx: number) => !shuffledIndices.includes(idx));
    const allAvailable = [...unfixedCorrectWords, ...distractors].sort(() => 0.5 - Math.random());
    setAvailableWords(allAvailable);

    setIsChecked(false);
    setShowAnswer(false);
    setIsCorrect(false);
  }, [question]);

  const handleSelect = (word: string, idx: number) => {
    if (isChecked) return;
    // 最初の空き（null）を探す
    const firstEmptyIdx = slots.findIndex(s => s === null);
    if (firstEmptyIdx === -1) return;

    const newSlots = [...slots];
    newSlots[firstEmptyIdx] = word;
    setSlots(newSlots);

    const newAvailable = [...availableWords];
    newAvailable.splice(idx, 1);
    setAvailableWords(newAvailable);
  };

  const handleDeselect = (slotIdx: number) => {
    if (isChecked) return;
    if (fixedIndices.includes(slotIdx)) return; // 固定枠は外せない
    if (slots[slotIdx] === null) return;

    const word = slots[slotIdx] as string;
    const newSlots = [...slots];
    newSlots[slotIdx] = null;
    setSlots(newSlots);

    setAvailableWords([...availableWords, word]);
  };

  const checkAnswer = () => {
    if (slots.includes(null)) return; // 全て埋まっていないと押せない
    
    const selectedStr = slots.join(" ");
    const correctStr = (question.correctOrder || []).join(" ");
    
    let isMatch = (selectedStr === correctStr);
    if (!isMatch && question.acceptableOrders) {
      isMatch = question.acceptableOrders.some((order: string[]) => order.join(" ") === selectedStr);
    }

    if (isMatch) {
      setIsCorrect(true);
      setIsChecked(true);
      onScoreIncrease();
      onSpeak(question.audio || correctStr);
    } else {
      setIsCorrect(false);
      setIsChecked(true);
    }
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-stone-100 text-center animate-fade-in-up">
      <span className="inline-block bg-indigo-50 text-indigo-700 text-[10px] font-bold px-2 py-1 rounded mb-4 tracking-wider uppercase border border-indigo-100">
        🧩 穴埋め問題
      </span>
      <h3 className="text-lg font-bold mb-6 text-gray-700 whitespace-pre-wrap">{question.text}</h3>

      {/* 文を組み立てるスロットエリア */}
      <div className="p-4 bg-stone-50 rounded-xl border-2 border-dashed border-stone-300 flex flex-wrap gap-2 justify-center items-center mb-6 leading-loose" dir="rtl">
        {slots.map((word, idx) => {
          const isFixed = fixedIndices.includes(idx);
          if (word === null) {
            return (
              <div key={`slot-${idx}`} className="h-12 min-w-[3rem] px-4 rounded-lg border-2 border-dashed border-stone-300 bg-white flex items-center justify-center">
                <span className="text-stone-300 text-xs">...</span>
              </div>
            );
          } else {
            return (
              <button 
                key={`slot-${idx}`} 
                onClick={() => handleDeselect(idx)}
                className={`h-12 px-4 rounded-lg font-arabic text-xl shadow-sm transition transform ${
                  isFixed 
                    ? "bg-gray-200 text-emerald-900 border border-gray-300 cursor-default opacity-80" 
                    : (isChecked 
                        ? (isCorrect ? "bg-emerald-600 text-white border-emerald-700" : "bg-red-500 text-white border-red-600")
                        : "bg-emerald-600 text-white hover:bg-emerald-500 border-b-4 border-emerald-800 active:border-b-0 active:translate-y-1 hover:scale-105"
                      )
                }`}
                disabled={isChecked || isFixed}
              >
                {word}
              </button>
            );
          }
        })}
      </div>

      {/* 選択肢（ダミー含む）のエリア */}
      <div className="flex flex-wrap gap-3 justify-center mb-8" dir="rtl">
        {availableWords.map((word, idx) => (
          <button 
            key={`avail-${idx}`} 
            onClick={() => handleSelect(word, idx)}
            className="px-4 py-2 bg-white text-gray-800 rounded-lg font-arabic text-xl shadow border border-stone-200 hover:border-emerald-400 hover:bg-emerald-50 transition transform hover:-translate-y-1"
            disabled={isChecked}
          >
            {word}
          </button>
        ))}
      </div>

      {/* 判定結果 */}
      {isChecked ? (
        <div className="animate-fade-in-up">
          <div className={`p-4 rounded-xl mb-6 border ${isCorrect ? "bg-emerald-50 border-emerald-200 text-emerald-800" : "bg-red-50 border-red-200 text-red-800"}`}>
            <p className="font-bold text-lg mb-2">{isCorrect ? "🎉 正解！" : "😢 惜しい..."}</p>
            {(!isCorrect && showAnswer) || isCorrect ? (
                <div className="text-2xl font-arabic text-center mt-4 mb-2 text-emerald-900 leading-loose" dir="rtl">
                    {(question.correctOrder || []).join(" ")}
                </div>
            ) : null}
            <p className="text-sm opacity-90 text-left mt-2 whitespace-pre-wrap" dir="ltr">
              {question.explanation}
            </p>
            {!isCorrect && !showAnswer && (
                <div className="flex gap-2 mt-4">
                    <button onClick={() => {
                        setIsChecked(false); 
                        const initialSlots = (question.correctOrder || []).map((w: string, i: number) => fixedIndices.includes(i) ? w : null);
                        setSlots(initialSlots);
                        const unfixedCorrectWords = (question.correctOrder || []).filter((_: any, i: number) => !fixedIndices.includes(i));
                        setAvailableWords([...unfixedCorrectWords, ...(question.distractors || [])].sort(()=>Math.random()-0.5));
                    }} className="flex-1 bg-white border border-red-200 text-red-700 py-2 rounded-lg text-sm font-bold hover:bg-red-50 transition">
                      やり直す
                    </button>
                    <button onClick={() => setShowAnswer(true)} className="flex-1 bg-red-100 text-red-800 py-2 rounded-lg text-sm font-bold hover:bg-red-200 transition">
                      正解を見る
                    </button>
                </div>
            )}
          </div>
          <button onClick={onNext} className="w-full bg-emerald-800 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-emerald-900 transition transform">
            {isLast ? "結果を見る" : "次の問題へ"}
          </button>
        </div>
      ) : (
         <button onClick={checkAnswer} disabled={slots.includes(null)} className={`w-full font-bold py-4 rounded-xl shadow-lg transition transform ${slots.includes(null) ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-amber-500 text-white hover:bg-amber-600 hover:scale-105"}`}>
           答え合わせ
         </button>
      )}
    </div>
  );
}
// ▲▲▲ ここまで ▲▲▲