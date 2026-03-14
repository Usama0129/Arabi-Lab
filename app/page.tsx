"use client";
import React, { useState, useEffect, useRef } from "react";
// ↓ パスは ./ (同じ階層) になっています
import { supabase } from "./lib/supabaseClient";
import { articles, Article, QuizQuestion } from "./data";
import Link from 'next/link';

// ★ モダンなアイコンライブラリを読み込み
import { 
  Puzzle, MessageCircle, BookOpen, Headphones, ArrowRightLeft, Lightbulb, ScrollText, 
  User, Bookmark, ArrowLeft, Settings, CreditCard, Mail, Lock, 
  Square, SkipBack, Play, Pause, SkipForward, Volume2, 
  CheckCircle, XCircle, PenTool, Eye, LogOut, Check,
  Tent, Moon, Swords, Crown, Sun, Mic, Sparkles, Landmark, Coffee, Library, Pencil,
  Loader2, PartyPopper, Frown, MessageSquare, Plus, ChevronRight, Video
} from 'lucide-react';

// --- Types ---
type Screen = "main_menu" | "levels_sub" | "topics" | "list" | "mode_select" | "reader" | "quiz" | "result" | "vocab" | "dictation" | "mypage" | "eras" | "era_desc" | "poets" | "poetry_read" | "phrases_list" | "phrase_detail";
type LearningMode = "reading" | "listening" | "dictation" | "grammar";
type CourseType = "grammar" | "conversation" | "reading" | "listening" | "poetry" | "phrase" | "reorder";
type StudyBreakdown = { reading: number; listening: number; dictation: number; vocab: number; grammar: number; poetry: number };

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

// 詩の時代データ (アイコンをLucideコンポーネントに変更)
const POETRY_ERAS = [
  {
    id: "jahiliyya",
    name: "ジャーヒリーヤ時代",
    period: "イスラーム以前 (〜610年)",
    icon: Tent,
    desc: "イスラーム以前の「無明時代」。アラブ文学の原点にして頂点です。特に「ムアッラカート（懸想詩）」は、そのあまりの美しさゆえに金文字で記され、最高の栄誉として聖なるカアバ神殿の壁に「懸けられた」という伝説を持つ長詩群です。",
    features: ["ムアッラカート（カアバに懸けられた詩）", "アトラール（旧跡への立ち寄り）", "部族の誇り (Fakhr)", "砂漠と動物の描写"]
  },
  {
    id: "islamic",
    name: "イスラーム初期",
    period: "予言者と正統カリフ時代 (610〜661年)",
    icon: Moon,
    desc: "イスラームの到来とクルアーンの啓示により、言葉の価値観が劇的に変化した時代です。詩は単なる部族の自慢から、神への唯一信仰、預言者ムハンマドの擁護、そしてイスラーム共同体（ウンマ）の団結を鼓舞する「聖なる武器」へと昇華されました。",
    features: ["預言者賛美 (Madih)", "イスラームの擁護", "倫理と道徳", "ハッサーン・ブン・サービト"]
  },
  {
    id: "umayyad",
    name: "ウマイヤ朝",
    period: "ダマスカス時代 (661〜750年)",
    icon: Swords,
    desc: "政治的な派閥争いを背景に、詩人たちが互いに部族を自慢し相手を攻撃する「ナカーイド（諷刺合戦）」が流行しました。一方で恋愛詩が洗練され、都会的で享楽的な「ウマル派」と、砂漠で純潔な愛を貫き死に至る「ウズラ派（マジュヌーン・ライラ等）」という二つの潮流が生まれました。",
    features: ["ナカーイド（諷刺合戦）", "ウズラ派（純愛）", "ウマル派（官能）", "政治詩"]
  },
  {
    id: "abbasid",
    name: "アッバース朝",
    period: "バグダード黄金期 (750〜1258年)",
    icon: Crown,
    desc: "バグダードを都とするイスラーム黄金期。ペルシャ文化等の影響で「モデルニズム（革新）」が起き、砂漠の伝統形式にとらわれない自由な表現が開花しました。酒と享楽を詠う詩、人生の無常を説く哲学詩、そして修辞技法を凝らした技巧的な詩が好まれました。",
    features: ["ハムリヤート（酒の詩）", "ズフド（禁欲・哲学詩）", "ヒクマ（叡智）", "ムタナッビー"]
  },
  {
    id: "andalus",
    name: "アンダルス",
    period: "イベリア半島 (711〜1492年)",
    icon: Sun,
    desc: "スペイン・ポルトガルで独自の発展を遂げたアラブ文化。豊かな自然への愛と、多様な民族の共生を背景に、音楽的な詩が栄えました。特に従来の単一の韻律（カスィーダ）を破り、歌うために作られた「ムワッシャハ（連節詩）」は、中世ヨーロッパの詩歌にも影響を与えました。",
    features: ["ムワッシャハ（連節詩）", "自然描写", "愛と郷愁", "ザジャル（方言詩）"]
  },
  {
    id: "modern",
    name: "近現代",
    period: "ナフダ以降 (19世紀〜現在)",
    icon: Mic,
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
const HeaderBackButton = ({ onClick, text = "戻る", colorClass = "text-[#8A5A33] hover:text-[#5E3C1E]" }: { onClick: () => void, text?: string, colorClass?: string }) => (
  <button onClick={onClick} className={`mb-6 text-sm transition-all duration-300 flex items-center gap-1.5 font-bold hover:-translate-x-1 ${colorClass}`}>
    <ArrowLeft size={16} strokeWidth={2.5} /> {text}
  </button>
);

// --- Landing Page Component ---
const LandingPage = ({ onLogin, onGuestStart }: { onLogin: () => void, onGuestStart: () => void }) => {
  return (
    <div className="min-h-screen bg-[#FDFCF8] font-sans text-gray-800 flex flex-col overflow-x-hidden">
      <style jsx>{`
        @keyframes scroll-rtl {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-scroll-text { animation: scroll-rtl 60s linear infinite; }
      `}</style>

{/* Hero Section */}
<div className="bg-emerald-950 text-white relative overflow-hidden h-[600px] flex flex-col justify-center items-center">
        {/* 背景のアラビア語の詩（透明度を上げてしっかり見えるように調整） */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none flex flex-col justify-around z-0 overflow-hidden" dir="rtl">
           {[...Array(5)].map((_, i) => (
             <div key={i} className="whitespace-nowrap text-[8rem] md:text-[10rem] font-arabic leading-none animate-scroll-text text-emerald-100" style={{ animationDuration: `${40 + i * 10}s`, opacity: 0.3 + (i * 0.1) }}>
               {MUTANABBI_POEM.repeat(10)}
             </div>
           ))}
        </div>
        
        {/* 深く落ち着いたダークグリーンのグラデーション（透過率を調整して文字を馴染ませる） */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/70 via-emerald-950/80 to-[#0a1712] z-1"></div>
        
        <div className="max-w-4xl mx-auto px-6 py-10 relative z-10 text-center">
          <div className="inline-block bg-emerald-800/30 px-5 py-1.5 rounded-full text-[10px] font-bold tracking-widest mb-6 border border-emerald-600/30 backdrop-blur-sm text-emerald-100 shadow-sm">
            ARABIC LEARNING PLATFORM
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 leading-tight drop-shadow-xl text-white">
            アラビア語を、<br />
            <span className="text-amber-500">もっと身近に。</span>
          </h1>
          <h2 className="text-lg md:text-2xl font-serif font-bold text-emerald-100/90 mb-8 drop-shadow-md tracking-wide">
            『暗号』が『言葉』に変わる感動を Arabi Labで
          </h2>
          <p className="text-base md:text-lg text-emerald-100/70 mb-12 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow">
            初心者の文法理解から、会話表現、読解・聴解、<br className="hidden md:block"/>
            そして千年の歴史を持つアラブ詩まで。1000問以上の演習と共に。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={onLogin} className="w-full sm:w-auto px-10 py-4 bg-white text-emerald-950 font-bold rounded-full shadow-xl hover:bg-gray-100 hover:scale-105 transition transform flex items-center justify-center gap-2 border-2 border-white">
              <span className="text-blue-600 font-bold text-lg">G</span> Googleで今すぐ始める
            </button>
            <button onClick={onGuestStart} className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-emerald-700/80 text-emerald-50 font-bold rounded-full hover:bg-emerald-900/80 hover:border-emerald-600 transition backdrop-blur-sm">
              登録せずに試す
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white py-16 border-b border-stone-100">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-stone-100">
               <div className="p-4 flex flex-col items-center">
                  <Library className="text-[#8A5A33] mb-4" size={40} strokeWidth={1.5} />
                  <h3 className="font-bold text-[#4A3018] text-lg mb-2">圧倒的な網羅性</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">初心者向けの基礎文法から、ニュース読解、日常会話表現、そして古典詩まで。あらゆるレベルに対応。</p>
               </div>
               <div className="p-4 flex flex-col items-center">
                  <Pencil className="text-[#8A5A33] mb-4" size={40} strokeWidth={1.5} />
                  <h3 className="font-bold text-[#4A3018] text-lg mb-2">1000問以上の演習</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">ただ読むだけではありません。豊富なクイズと書き取り問題で、知識を確実に定着させます。</p>
               </div>
               <div className="p-4 flex flex-col items-center">
                  <CreditCard className="text-[#8A5A33] mb-4" size={40} strokeWidth={1.5} />
                  <h3 className="font-bold text-[#4A3018] text-lg mb-2">驚きのコストパフォーマンス</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">一般的なアラビア語教材は1冊3,000円〜。Arabi Labなら、月額500円ですべてのコンテンツが学び放題。</p>
               </div>
            </div>
         </div>
      </div>

      <div className="bg-[#F5F0E6] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-serif font-bold text-center text-[#4A3018] mb-12">シンプルで、続けやすいプラン</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-3xl border border-[#E5C9A8] shadow-sm flex flex-col hover:shadow-md transition">
              <div className="mb-4">
                <span className="bg-stone-100 text-stone-600 px-3 py-1 rounded-full text-xs font-bold">FREE</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[#4A3018]">フリープラン</h3>
              <p className="text-4xl font-bold mb-6 font-serif text-gray-400">¥0 <span className="text-sm font-normal">/月</span></p>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="text-[#A67144]" size={16}/> 初級コンテンツへのアクセス</li>
                <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="text-[#A67144]" size={16}/> 文法・単語の基礎練習</li>
                <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="text-[#A67144]" size={16}/> 制限付き音声再生</li>
              </ul>
              <button onClick={onGuestStart} className="w-full py-4 border-2 border-[#D4A373] text-[#764C28] font-bold rounded-xl hover:bg-[#F8F1E7] transition">
                無料で試す
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-[#5E3C1E] to-[#3E2713] p-8 rounded-3xl shadow-2xl flex flex-col relative overflow-hidden text-white transform md:-translate-y-4 border border-[#764C28]">
              <div className="absolute top-0 right-0 bg-amber-500 text-amber-950 text-xs font-bold px-4 py-1.5 rounded-bl-xl shadow-md">おすすめ</div>
              <div className="mb-4">
                <span className="bg-[#8A5A33]/50 border border-[#A67144] text-amber-50 px-3 py-1 rounded-full text-xs font-bold">PREMIUM</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">プレミアムプラン</h3>
              <p className="text-4xl font-bold mb-6 font-serif text-amber-400">¥500 <span className="text-sm text-[#E5C9A8] font-normal">/月</span></p>
              <p className="text-xs text-[#E5C9A8] mb-6">教材一冊分(約3000円)で、半年間学び放題。</p>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-2 text-sm text-amber-50 font-medium"><Sparkles className="text-amber-400" size={16}/> 全レベルの記事・詩の閲覧</li>
                <li className="flex items-center gap-2 text-sm text-amber-50 font-medium"><Sparkles className="text-amber-400" size={16}/> ネイティブ音声 無制限リスニング</li>
                <li className="flex items-center gap-2 text-sm text-amber-50 font-medium"><Sparkles className="text-amber-400" size={16}/> 1000問以上の全問題に挑戦</li>
                <li className="flex items-center gap-2 text-sm text-amber-50 font-medium"><Sparkles className="text-amber-400" size={16}/> 広告非表示・優先サポート</li>
              </ul>
              <button onClick={onLogin} className="w-full py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-[#3E2713] font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition transform">
                プレミアムで登録する
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[#2C1A0D] text-[#D4A373] py-10 text-center text-xs mt-auto">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 mb-6">
          <Link href="/faq" className="hover:text-amber-400 transition-colors font-medium">よくある質問</Link>
          <Link href="/terms" className="hover:text-amber-400 transition-colors font-medium">利用規約</Link>
          <Link href="/privacy" className="hover:text-amber-400 transition-colors font-medium">プライバシーポリシー</Link>
          <Link href="/law" className="hover:text-amber-400 transition-colors font-medium">特定商取引法に基づく表記</Link>
        </div>
        <p className="opacity-40 font-serif tracking-widest">&copy; 2024 Arabi Lab. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default function Home() {
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
  const [isQuizTextVisible, setIsQuizTextVisible] = useState(false); // ★これを追加

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

  // ★ 音声プレイヤー用のStateとRef
  const [audioState, setAudioState] = useState<"idle" | "playing" | "paused">("idle");
  const [currentAudioIndex, setCurrentAudioIndex] = useState<number>(0);
  const audioIndexRef = useRef<number>(0);

  const [playbackRate, setPlaybackRate] = useState<number>(1.0);

  const [streak, setStreak] = useState(0);
  const [stats, setStats] = useState({ today: 0, month: 0, total: 0 });
  const [breakdown, setBreakdown] = useState<StudyBreakdown>({ reading: 0, listening: 0, dictation: 0, vocab: 0, grammar: 0, poetry: 0 });
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const normalizeArabic = (text: string) => text.replace(/[\u064B-\u065F\u0670]/g, "").replace(/[.,،؟:;!۔"«»]/g, "").replace(/\s+/g, " ").trim();
  const removeTashkeel = (text: string) => text.replace(/[\u064B-\u065F\u0670]/g, "");
  const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
  const getArticleById = (id: number) => allArticles.find(a => a.id === id);
  const getEraData = () => POETRY_ERAS.find(e => e.id === selectedEraId);

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

  // ★ 画面遷移時にスクロールをリセット
  const changeScreen = (screen: Screen) => { 
      stopSpeaking(); 
      window.scrollTo(0, 0); 
      setCurrentScreen(screen); 
  };

  const handleGuestStart = () => {
    setShowLandingPage(false);
    window.scrollTo(0, 0);
  };

  const handleLogin = async () => { 
    await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: window.location.origin } }); 
  };

  const handleLogout = async () => { 
    await supabase.auth.signOut(); 
    setUser(null); 
    setIsPremium(false); 
    setSavedVocab(JSON.parse(localStorage.getItem("arabicApp_vocab") || "[]")); 
    setShowLandingPage(true); 
    setCurrentScreen("main_menu");
    window.scrollTo(0, 0);
  };
    
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
        changeScreen("levels_sub");
    } else {
        changeScreen("levels_sub");
    }
  };

  const handleSubLevelClick = (level: string) => {
    setSelectedLevel(level);
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

  const handlePhraseCategoryClick = (category: string) => {
    setSelectedCategory(category);
    changeScreen("phrases_list");
  };

  const getFilteredArticles = () => {
    return allArticles.filter(a => {
        if (courseType === "grammar") return a.level === "文法";
        if (courseType === "conversation") return a.level === "会話";
        if (courseType === "phrase") return a.level === "1フレーズ";
        if (courseType === "reorder") return a.category === "並び替え" && a.level === selectedLevel;
        if (courseType === "poetry") {
            const era = POETRY_ERAS.find(e => e.id === selectedEraId);
            return a.level === "Poetry" && (era ? a.category === era.name : true);
        }
        if (courseType === "listening") {
            return (a.videoUrl && a.videoUrl.length > 0) && a.level === selectedLevel;
        }
        if (courseType === "reading") {
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

  const handlePhraseClick = (article: Article & { videoUrl?: string; imageUrls?: string[] }) => {
    setActiveArticle(article);
    changeScreen("phrase_detail");
  };

  const handleJumpToGrammar = (grammarId: number) => {
    const targetArticle = getArticleById(grammarId);
    if (targetArticle) {
        setActiveArticle(targetArticle);
        setLearningMode("grammar");
        changeScreen("reader"); 
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
    setIsQuizTextVisible(false); // ★これを追加（クイズ開始時に本文を閉じる）
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
    if (currentQuestionIndex < activeArticle.questions.length - 1) { 
        setCurrentQuestionIndex(prev => prev + 1); 
        setQuizSelectedOption(null); 
        setIsQuizResultVisible(false); 
        window.scrollTo(0, 0); 
    }
    else { 
        if (!completedArticleIds.includes(activeArticle.id)) { setCompletedArticleIds([...completedArticleIds, activeArticle.id]); } 
        changeScreen("result"); 
    }
  };
  const checkDictation = () => { if (normalizeArabic(dictationInput) === targetWordClean) setDictationFeedback("correct"); else setDictationFeedback("incorrect"); };
  const nextDictation = () => { if (!activeArticle) return; if (dictationIndex < activeArticle.sentences.length - 1) { const nextIdx = dictationIndex + 1; setDictationIndex(nextIdx); generateDictationProblem(activeArticle, nextIdx); window.scrollTo(0,0); } else changeScreen("result"); };
    
  const speakText = (text: string, speaker?: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setAudioState("idle");
      const cleanText = text.replace(/[^\u0600-\u06FF\s]/g, "").trim(); 
      const u = new SpeechSynthesisUtterance(cleanText);
      
      const voices = window.speechSynthesis.getVoices();
      const arabicVoice = voices.find(v => v.lang.includes('ar'));
      if (arabicVoice) { u.voice = arabicVoice; u.lang = arabicVoice.lang; } else { u.lang = 'ar-SA'; }
      
      u.rate = clamp(playbackRate, 0.1, 2.0); 
      window.speechSynthesis.speak(u);
    }
  };

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
           if (audioIndexRef.current >= activeArticle!.sentences.length) { 
               setAudioState("idle"); 
               setCurrentAudioIndex(0);
               return; 
           }
           
           const sent = activeArticle!.sentences[audioIndexRef.current];
           setCurrentAudioIndex(audioIndexRef.current); 
           
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

  // ★ ローディング画面 (ラクダのアニメーション付き)
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F5F0E6] flex flex-col items-center justify-center z-50">
        <Loader2 className="w-16 h-16 mb-6 text-[#A67144] animate-spin" />
        <span className="text-[#8A5A33] font-serif text-xl tracking-widest drop-shadow-md animate-pulse font-bold">Loading Arabi Lab...</span>
      </div>
    );
  }

  // ★ ランディングページ
  if (!user && showLandingPage) {
    return <LandingPage onLogin={handleLogin} onGuestStart={handleGuestStart} />;
  }

  // --- メインアプリ画面 (ログイン済み or ゲスト利用) : 茶色＆ベージュ基調 ---
  return (
    <div className="min-h-screen bg-[#F5F0E6] font-sans text-gray-800 selection:bg-amber-200">
      {/* ナビゲーションバー (アラビアンなダークブラウン) */}
      <nav className="bg-[#3E2713] shadow-xl p-4 sticky top-0 z-20 border-b border-[#A67144]/40" dir="ltr">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => { changeScreen("main_menu"); setIsFlashcardMode(false); }}>
              <div className="bg-[#F5F0E6] p-1 rounded-xl shadow-md group-hover:scale-110 transition-all duration-300 border border-amber-500/50">
                <img src="/logo.jpg" alt="Logo" className="h-10 w-auto object-contain rounded-lg" onError={(e) => {e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-10 h-10 bg-gradient-to-br from-[#8A5A33] to-[#4A3018] rounded-lg flex items-center justify-center text-white"><Tent size={24}/></div>';}} />
              </div>
              <h1 className="font-serif font-bold text-amber-50 text-xl tracking-wider hidden sm:block group-hover:text-amber-200 transition-colors">Arabi Lab</h1>
              <div className="flex items-center gap-1 bg-[#201308]/60 px-3 py-1 rounded-full border border-[#5E3C1E] text-xs font-bold text-amber-100 ml-2 shadow-inner"><Sparkles size={14} className="text-amber-400 animate-pulse"/> {streak}</div>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
                onClick={() => setIsPremium(!isPremium)}
                className="bg-indigo-900/80 text-indigo-100 px-3 py-1 rounded-full text-[10px] font-bold border border-indigo-700 shadow-md hover:bg-indigo-800 transition-all hover:scale-105 mr-1 hidden sm:block"
            >
                {isPremium ? "🔧 無料に戻す" : "🔧 プレミアム化"}
            </button>
            {user ? (
                <div className="flex items-center gap-2 mr-1">
                    <span className="text-amber-100/70 text-[10px] hidden sm:inline font-medium">Ahlan!</span>
                    {isPremium && <span className="bg-gradient-to-r from-amber-400 to-yellow-500 text-[#4A3018] text-[10px] font-bold px-2.5 py-0.5 rounded-full animate-pulse shadow-md border border-amber-200">👑 Premium</span>}
                    <button onClick={handleLogout} className="flex items-center gap-2 bg-[#5E3C1E] text-amber-50 px-3 py-1.5 rounded-full text-xs font-bold hover:bg-[#764C28] transition-all hover:-translate-y-0.5 shadow-sm border border-[#764C28]">{user.user_metadata?.avatar_url ? (<img src={user.user_metadata.avatar_url} className="w-5 h-5 rounded-full border border-white/30" alt="icon" />) : (<LogOut size={14}/>)}<span className="hidden sm:inline">ログアウト</span></button>
                </div>
            ) : (
                <button onClick={handleLogin} className="bg-[#F5F0E6] text-[#4A3018] px-4 py-1.5 rounded-full font-bold text-xs shadow hover:bg-white hover:-translate-y-0.5 transition-all mr-1 flex items-center gap-1"><span className="text-blue-600 font-bold text-sm">G</span> ログイン</button>
            )}
            <button onClick={() => changeScreen("mypage")} className="flex items-center justify-center w-10 h-10 bg-[#5E3C1E] hover:bg-[#764C28] text-amber-100 rounded-full transition-all hover:-translate-y-0.5 shadow-md border border-[#764C28]"><User size={18} /></button>
            <button onClick={() => { changeScreen("vocab"); setIsFlashcardMode(false); }} className="flex items-center gap-2 text-xs bg-gradient-to-br from-amber-400 to-amber-500 text-[#3E2713] px-4 py-2 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"><Bookmark size={16} /> <span className="hidden sm:inline">単語 ({savedVocab.length})</span></button>
          </div>
        </div>
      </nav>



      <main className="max-w-3xl mx-auto p-4 pb-20">
        
        {/* マイページ */}
        {currentScreen === "mypage" && (
          <div className="animate-fade-in-up pb-20">
            <HeaderBackButton onClick={() => changeScreen("main_menu")} />
            
            <div className="mb-6 flex justify-between items-end">
                <h2 className="text-2xl font-serif font-bold text-[#4A3018]">マイページ</h2>
            </div>

            {/* 1. ユーザープロファイル */}
            {user && (
              <div className="bg-white p-6 rounded-[2rem] shadow-lg border border-[#E5C9A8] mb-6 flex items-center gap-4 relative overflow-hidden group hover:shadow-xl transition-all" dir="ltr">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#F8F1E7] rounded-bl-full -mr-8 -mt-8 z-0 transition-transform group-hover:scale-110"></div>
                  
                  <div className="relative z-10">
                    {user.user_metadata?.avatar_url ? (
                      <img src={user.user_metadata.avatar_url} className="w-16 h-16 rounded-full border-4 border-white shadow-md" alt="User" />
                    ) : (
                      <div className="w-16 h-16 bg-[#F8F1E7] rounded-full flex items-center justify-center text-[#8A5A33] border-4 border-white shadow-md"><User size={32} /></div>
                    )}
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-bold text-lg text-[#4A3018]">{user.user_metadata?.full_name || "ゲストユーザー"}</p>
                      {isPremium ? 
                        <span className="text-[10px] bg-amber-400 text-amber-950 px-2 py-0.5 rounded-full font-bold shadow-sm">PREMIUM</span> : 
                        <span className="text-[10px] bg-stone-200 text-stone-600 px-2 py-0.5 rounded-full font-bold">FREE</span>
                      }
                    </div>
                    <p className="text-sm text-[#8A5A33] font-medium">{user.email}</p>
                  </div>
              </div>
            )}

            {/* 2. 学習ステータス */}
            <div className="grid grid-cols-3 gap-3 mb-8 text-center" dir="ltr">
                <StatCard label="今日" value={formatTime(stats.today)} color="text-[#8A5A33]" />
                <StatCard label="今月" value={formatTime(stats.month)} color="text-indigo-800" />
                <StatCard label="総計" value={formatTime(stats.total)} color="text-amber-600" />
            </div>

            {/* 3. サブスクリプション管理 */}
            <div className="mb-8">
              <h3 className="font-bold text-[#764C28] mb-3 ml-2 text-sm flex items-center gap-2"><CreditCard size={18} /> サブスクリプション情報</h3>
              <div className="bg-white rounded-3xl shadow-md border border-[#E5C9A8] overflow-hidden">
                {isPremium && subscription ? (
                  <div className="p-0">
                    <div className="bg-gradient-to-r from-amber-400 to-[#D4A373] p-5 text-[#4A3018] flex justify-between items-center border-b border-amber-200">
                        <span className="font-bold text-lg flex items-center gap-2">👑 Premium Plan</span>
                        <span className="font-bold text-2xl">¥{subscription.amount}<span className="text-xs font-normal opacity-80">/月</span></span>
                    </div>
                    <div className="p-6 space-y-4 text-sm bg-white" dir="ltr">
                        <div className="flex justify-between border-b border-[#F5F0E6] pb-3">
                          <span className="text-stone-500 font-medium">ステータス</span>
                          <span className="font-bold text-emerald-600 flex items-center gap-1">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span> 有効 (Active)
                          </span>
                        </div>
                        <div className="flex justify-between border-b border-[#F5F0E6] pb-3">
                          <span className="text-stone-500 font-medium">登録日</span>
                          <span className="font-bold text-[#4A3018]">{subscription.startDate}</span>
                        </div>
                        <div className="flex justify-between pb-2">
                          <span className="text-stone-500 font-medium">次回支払日</span>
                          <span className="font-bold text-[#4A3018]">{subscription.nextPayment}</span>
                        </div>
                        <div className="pt-4 text-center">
                          <button 
                            onClick={handleCancelSubscription}
                            className="text-red-400 text-xs font-bold hover:text-red-600 hover:underline transition"
                          >
                            サブスクリプションを解約する
                          </button>
                        </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-8 text-center bg-stone-50">
                    <p className="text-stone-500 text-sm mb-6 font-medium">現在、無料プランをご利用中です。</p>
                    <button 
                      onClick={() => setShowUpgradeModal(true)}
                      className="w-full py-4 bg-gradient-to-r from-[#8A5A33] to-[#5E3C1E] text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Sparkles size={20} /> プレミアムにアップグレード
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* 4. アプリ設定・サポート */}
            <div className="mb-8">
              <h3 className="font-bold text-[#764C28] mb-3 ml-2 text-sm flex items-center gap-2"><Settings size={18} /> 設定・サポート</h3>
              <div className="bg-white rounded-3xl shadow-sm border border-[#E5C9A8] divide-y divide-[#F5F0E6]">
                  <SettingItem icon={Mail} label="メールアドレス変更" onClick={() => alert("準備中です")} />
                  <SettingItem icon={Lock} label="パスワード変更" onClick={() => alert("準備中です")} />
                  <SettingItem icon={MessageSquare} label="お問い合わせ・サポート" onClick={() => window.open("mailto:support@arabilab.com", "_blank")} />
              </div>
            </div>

            {/* 5. 法的情報 */}
            <div className="mb-8">
              <h3 className="font-bold text-[#764C28] mb-3 ml-2 text-sm flex items-center gap-2"><ScrollText size={18} /> 運営・規約</h3>
              <div className="bg-white rounded-3xl shadow-sm border border-[#E5C9A8] divide-y divide-[#F5F0E6]">
              <SettingItem icon={ScrollText} label="利用規約" onClick={() => window.open("/terms", "_blank")} />
            　<SettingItem icon={CheckCircle} label="プライバシーポリシー" onClick={() => window.open("/privacy", "_blank")} />
                  <SettingItem icon={Landmark} label="特定商取引法に基づく表記" onClick={() => window.open("/law", "_blank")} />
              </div>
            </div>
          </div>
        )}

        {/* コース選択 (メインメニュー) */}
        {currentScreen === "main_menu" && (
          <div className="text-center py-8 animate-fade-in-up">
            <h2 className="text-3xl font-serif font-bold mb-4 text-[#4A3018] tracking-wide">コース選択</h2>
            <div className="w-20 h-1 bg-amber-400 mx-auto mb-10 rounded-full shadow-sm"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto px-2" dir="ltr">
              <LevelButton title="文法" subtitle="Grammar" color="bg-white border-[#E5C9A8] text-[#5E3C1E]" icon={Puzzle} onClick={() => handleMainMenuClick("grammar")} />
              <LevelButton title="会話" subtitle="Conversation" color="bg-white border-[#E5C9A8] text-[#5E3C1E]" icon={MessageCircle} onClick={() => handleMainMenuClick("conversation")} />
              <LevelButton title="読解" subtitle="Reading" color="bg-white border-[#E5C9A8] text-[#5E3C1E]" icon={BookOpen} onClick={() => handleMainMenuClick("reading")} />
              <LevelButton title="聴解" subtitle="Listening" color="bg-white border-[#E5C9A8] text-[#5E3C1E]" icon={Headphones} onClick={() => handleMainMenuClick("listening")} />
              <LevelButton title="並び替え" subtitle="Reorder" color="bg-white border-[#E5C9A8] text-[#5E3C1E]" icon={ArrowRightLeft} onClick={() => handleMainMenuClick("reorder")} />
              <LevelButton title="1フレーズ" subtitle="Phrases" color="bg-white border-[#E5C9A8] text-[#5E3C1E]" icon={Lightbulb} onClick={() => handleMainMenuClick("phrase")} />
              <div className="col-span-2 md:col-span-3 flex justify-center mt-2">
                <div className="w-full sm:w-1/2 md:w-1/3">
                    <LevelButton title="詩" subtitle="Poetry" color="bg-[#4A3018] border-[#3E2713] text-amber-100" icon={ScrollText} onClick={() => handleMainMenuClick("poetry")} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 時代選択画面 (詩) */}
        {currentScreen === "eras" && (
            <div className="animate-fade-in-up">
                <HeaderBackButton onClick={() => changeScreen("main_menu")} />
                <h2 className="text-2xl font-serif font-bold mb-8 text-[#4A3018] text-center">時代を選択 <span className="block text-sm text-amber-600 font-sans mt-1 tracking-widest uppercase">Eras of Poetry</span></h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5" dir="ltr">
                    {POETRY_ERAS.map((era) => {
                      const Icon = era.icon;
                      return (
                        <button key={era.id} onClick={() => handleEraSelect(era.id)} className="bg-white p-6 rounded-[2rem] border-2 border-[#F5F0E6] hover:border-[#B8865D] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left flex items-center gap-5 group relative overflow-hidden">
                            <div className="absolute -right-4 -top-4 w-20 h-20 bg-[#F8F1E7] rounded-full z-0 transition-transform group-hover:scale-150"></div>
                            <span className="text-[#A67144] group-hover:text-amber-500 drop-shadow-sm relative z-10 transition-transform group-hover:scale-110"><Icon size={48} strokeWidth={1.5} /></span>
                            <div className="relative z-10">
                                <h3 className="font-bold text-lg text-[#5E3C1E] group-hover:text-[#8A5A33] transition-colors">{era.name}</h3>
                                <p className="text-xs text-[#A67144] font-medium mt-1">{era.period}</p>
                            </div>
                        </button>
                      );
                    })}
                </div>
            </div>
        )}

        {/* 時代詳細画面 */}
        {currentScreen === "era_desc" && selectedEraId && (
            <div className="animate-fade-in-up bg-white rounded-[2rem] shadow-xl border border-[#E5C9A8] overflow-hidden">
                <div className="bg-[#4A3018] p-10 text-amber-50 text-center relative flex flex-col items-center">
                      <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')]"></div>
                      <span className="mb-6 block relative z-10 text-amber-300 drop-shadow-lg">
  {(() => {
    const Icon = getEraData()?.icon || Tent;
    return <Icon size={72} strokeWidth={1.5} />;
  })()}
</span>
                      <h2 className="text-3xl font-bold font-serif relative z-10">{getEraData()?.name}</h2>
                      <p className="text-amber-200/80 text-sm mt-3 font-medium tracking-wide relative z-10">{getEraData()?.period}</p>
                </div>
                <div className="p-8 md:p-12">
                    <p className="text-[#5E3C1E] leading-loose mb-10 text-lg font-medium">{getEraData()?.desc}</p>
                    <div className="mb-12 bg-[#F8F1E7] p-6 rounded-2xl border border-[#E5C9A8]">
                        <h3 className="font-bold text-[#764C28] mb-4 border-b border-[#D4A373]/50 pb-2 flex items-center gap-2"><Sparkles size={20} className="text-amber-500" /> この時代の特徴</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {getEraData()?.features.map((f, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-[#5E3C1E] font-medium">
                                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div> {f}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex gap-4 justify-center">
                        <button onClick={() => changeScreen("eras")} className="px-8 py-4 rounded-full border-2 border-[#E5C9A8] text-[#8A5A33] font-bold hover:bg-[#F8F1E7] active:scale-95 transition-all">戻る</button>
                        <button onClick={() => changeScreen("poets")} className="px-10 py-4 rounded-full bg-gradient-to-r from-[#8A5A33] to-[#5E3C1E] text-white font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all">詩人を選択する →</button>
                    </div>
                </div>
            </div>
        )}

        {/* 詩人/詩リスト選択画面 */}
        {currentScreen === "poets" && (
            <div className="animate-fade-in-up">
                <HeaderBackButton onClick={() => changeScreen("era_desc")} text="時代解説に戻る" />
                <h2 className="text-2xl font-serif font-bold mb-8 text-[#4A3018] border-b-2 border-amber-400 pb-3 inline-block">
                    {getEraData()?.name}の詩
                </h2>
                
                <div className="space-y-4">
                    {getFilteredArticles().length > 0 ? (
                        getFilteredArticles().map((article, index) => (
                            <div key={article.id} onClick={() => handleArticleClick(article, index)} className="bg-white p-6 rounded-2xl shadow-sm border border-[#E5C9A8] hover:border-[#A67144] hover:shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-1.5 h-full bg-gradient-to-b from-amber-300 to-[#8A5A33] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="font-bold text-xl text-[#5E3C1E] group-hover:text-[#8A5A33] mb-2 transition-colors">{article.title}</h3>
                                        <div className="flex gap-2">
                                            <span className="text-xs bg-[#F8F1E7] text-[#8A5A33] px-3 py-1 rounded-full font-bold border border-[#E5C9A8]">詩 (Poetry)</span>
                                            {completedArticleIds.includes(article.id) && <span className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full font-bold border border-emerald-200 flex items-center gap-1"><Check size={12}/> 鑑賞済み</span>}
                                        </div>
                                    </div>
                                    <Pencil size={32} className="text-[#E5C9A8] group-hover:text-amber-500 transition-colors drop-shadow-sm" />
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-16 bg-white rounded-3xl border-dashed border-2 border-[#E5C9A8] text-[#A67144] flex flex-col items-center">
                            <ScrollText size={48} className="mb-4 opacity-50" />
                            <p className="font-bold">この時代の詩はまだ追加されていません</p>
                        </div>
                    )}
                </div>
            </div>
        )}

        {/* 詩の鑑賞モード (クイズ前) */}
        {currentScreen === "poetry_read" && activeArticle && (
            <div className="animate-fade-in-up pb-20">
                <HeaderBackButton onClick={() => changeScreen("poets")} text="詩のリストに戻る" />
                
                <div className="bg-[#FCFAF5] rounded-3xl shadow-2xl border border-[#E5C9A8] overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[url('/pattern.png')] opacity-[0.03] pointer-events-none"></div>
                  
                  <div className="p-8 md:p-14 text-center">
                      <span className="text-amber-600 text-xs tracking-widest font-bold uppercase mb-3 block">Poetry Appreciation</span>
                      <h2 className="text-3xl font-serif font-bold mb-10 text-[#4A3018]">{activeArticle.title}</h2>
                      
                      {/* 詩の本文 */}
                      <div className="space-y-10 mb-14">
                          {activeArticle.sentences?.map((sent, idx) => (
                              <div key={idx} className="relative group cursor-pointer hover:scale-105 transition-transform duration-500" onClick={() => speakText(sent.arabic)}>
                                  <p className="text-3xl md:text-4xl font-arabic leading-loose text-[#3E2713] drop-shadow-sm">{sent.arabic}</p>
                                  <p className="text-xs text-amber-700/50 mt-3 font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1"><Volume2 size={12} /> タップで再生</p>
                              </div>
                          ))}
                      </div>

                      <div className="flex justify-center mb-12">
                            <button onClick={handleTogglePlay} className="flex items-center gap-3 bg-amber-100 text-amber-900 px-8 py-3 rounded-full font-bold shadow-md border border-amber-200 hover:bg-amber-200 active:scale-95 transition-all">
                                <Volume2 size={24} /> 詩を朗読する
                            </button>
                      </div>

                      <div className="bg-white/90 p-8 rounded-2xl border border-[#E5C9A8] shadow-inner relative overflow-hidden">
                          <div className="absolute left-0 top-0 w-1 h-full bg-amber-400"></div>
                          <p className="font-bold text-[#5E3C1E] mb-3 text-lg">まずは意味を推測してみましょう</p>
                          <p className="text-sm text-[#8A5A33] mb-8 font-medium leading-relaxed">詩の響きを味わったら、理解度チェックに進んでください。<br/>全問終了後に、詳しい解説と現代語訳が表示されます。</p>
                          <button onClick={() => startQuiz()} className="w-full md:w-auto px-12 py-4 bg-[#764C28] text-amber-50 font-bold rounded-full shadow-lg hover:bg-[#5E3C1E] hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-2 mx-auto">
                              <Pencil size={20} /> 理解度チェックへ進む
                          </button>
                      </div>
                  </div>
                </div>
            </div>
        )}

        {/* レベル/種類選択 */}
        {currentScreen === "levels_sub" && (
          <div className="text-center py-10 animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <HeaderBackButton onClick={() => changeScreen("main_menu")} />
            </div>
            
            <h2 className="text-3xl font-serif font-bold mb-8 text-[#4A3018]">
                {courseType === "reading" ? "リーディング" : 
                courseType === "listening" ? "リスニング" : 
                courseType === "phrase" ? "種類を選択" : 
                courseType === "reorder" ? "並び替えレベル" : "学習モード選択"}
            </h2>
            <div className="grid grid-cols-1 gap-5 max-w-sm mx-auto" dir="ltr">
              
              {/* 初級・中級・上級 */}
              {courseType !== "grammar" && courseType !== "conversation" && courseType !== "poetry" && courseType !== "phrase" && (
                <>
                  <LevelButton title="初級 (Beginner)" color="bg-[#F8F1E7] border-[#E5C9A8] text-[#5E3C1E]" icon={CheckCircle} onClick={() => handleSubLevelClick("初級")} />
                  <LevelButton title="中級 (Intermediate)" color="bg-[#EBE6DF] border-[#D1C4B7] text-[#4A3018]" icon={BookOpen} onClick={() => handleSubLevelClick("中級")} />
                  <LevelButton title="上級 (Advanced)" color="bg-[#DFD8CE] border-[#BBAFA0] text-[#3E2713]" icon={ScrollText} onClick={() => handleSubLevelClick("上級")} />
                </>
              )}

              {/* 1フレーズ用 (フスハー/方言) */}
              {courseType === "phrase" && (
                <>
                  <button onClick={() => handlePhraseCategoryClick("フスハー")} className="p-6 bg-white border-2 border-[#E5C9A8] rounded-[2rem] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-between group relative overflow-hidden">
                    <div className="absolute left-0 top-0 h-full w-2 bg-[#8A5A33]"></div>
                    <Landmark size={40} className="text-[#8A5A33] ml-2 drop-shadow-sm group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                    <div className="text-left flex-1 ml-5">
                      <span className="font-bold text-xl text-[#4A3018] block group-hover:text-[#8A5A33] transition-colors">フスハー</span>
                      <span className="text-xs text-[#A67144] font-bold tracking-widest mt-1 block">標準アラビア語 (Fusha)</span>
                    </div>
                    <ChevronRight size={24} className="text-[#E5C9A8] group-hover:text-amber-500 transition-colors" />
                  </button>
                  
                  <button onClick={() => handlePhraseCategoryClick("サウジ方言")} className="p-6 bg-white border-2 border-[#E5C9A8] rounded-[2rem] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-between group relative overflow-hidden">
                    <div className="absolute left-0 top-0 h-full w-2 bg-amber-500"></div>
                    <Coffee size={40} className="text-amber-600 ml-2 drop-shadow-sm group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                    <div className="text-left flex-1 ml-5">
                      <span className="font-bold text-xl text-[#4A3018] block group-hover:text-[#8A5A33] transition-colors">方言</span>
                      <span className="text-xs text-[#A67144] font-bold tracking-widest mt-1 block">サウジ等の日常会話 (Ammiya)</span>
                    </div>
                    <ChevronRight size={24} className="text-[#E5C9A8] group-hover:text-amber-500 transition-colors" />
                  </button>
                </>
              )}
            </div>
          </div>
        )}

        {/* トピック選択 */}
        {currentScreen === "topics" && (
          <div className="animate-fade-in-up">
            <HeaderBackButton onClick={() => {
                if (courseType === "conversation" || courseType === "grammar") changeScreen("main_menu");
                else changeScreen("levels_sub");
            }} />
            
            <h2 className="text-2xl font-serif font-bold mb-8 text-[#4A3018] border-b-2 border-amber-400 pb-3 inline-block">
                {courseType === "grammar" ? "文法トピック" : 
                 courseType === "conversation" ? "会話シーン" :
                 `${selectedLevel}のテーマ`}
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:gap-6" dir="ltr">
              {Array.from(new Set(getFilteredArticles().map(a => a.category))).map(cat => (
                  <button key={cat} onClick={() => handleSelectCategory(cat)} className="bg-white p-6 md:p-8 rounded-[2rem] shadow-md hover:shadow-xl hover:-translate-y-1 border-2 border-[#F5F0E6] hover:border-[#B8865D] transition-all duration-300 text-left group relative overflow-hidden flex flex-col justify-center min-h-[120px]">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#F8F1E7] rounded-bl-full -mr-8 -mt-8 z-0 transition-transform duration-500 group-hover:scale-150"></div>
                      <Bookmark size={32} className="text-[#A67144] mb-3 block group-hover:scale-110 group-hover:text-amber-500 transition-all origin-bottom-left relative z-10 drop-shadow-sm" strokeWidth={1.5} />
                      <span className="font-bold text-lg text-[#5E3C1E] group-hover:text-[#8A5A33] transition-colors relative z-10">{cat}</span>
                  </button>
              ))}
              
              {getFilteredArticles().length === 0 && (
                <div className="col-span-2 text-center py-16 text-[#A67144] bg-white rounded-[2rem] border-dashed border-2 border-[#E5C9A8] shadow-sm flex flex-col items-center">
                    <Library size={48} className="mb-4 opacity-50" strokeWidth={1.5} />
                    <p className="font-bold text-lg">
                      {courseType === "reading" && selectedLevel === "初級" 
                        ? "現在、初級のリーディング記事はありません" 
                        : "コンテンツが見つかりません"}
                    </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 記事リスト */}
        {currentScreen === "list" && (
          <div className="animate-fade-in-up max-w-2xl mx-auto">
            <HeaderBackButton onClick={() => changeScreen("topics")} />

            <div className="flex justify-between items-end mb-8 border-b-2 border-[#E5C9A8] pb-3">
              <h2 className="text-2xl font-serif font-bold text-[#4A3018] flex items-center gap-2">
                <Sparkles size={24} className="text-amber-500" /> {selectedCategory}
              </h2>
            </div>
            <div className="space-y-4">
              {getFilteredArticles().filter(a => a.category === selectedCategory).map((article, index) => {
                  const locked = isLockedContent(article);
                  return (
                    <button 
                      key={article.id} 
                      onClick={() => handleArticleClick(article, index)} 
                      className={`w-full text-left p-6 rounded-2xl shadow-sm border-2 flex justify-between items-center transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg ${locked ? "bg-[#F5F0E6] border-[#E5C9A8] cursor-not-allowed" : "bg-white border-[#F5F0E6] hover:border-[#B8865D]"}`}
                      disabled={locked}
                    >
                        <div className="flex-1 flex items-center gap-4">
                          {locked && (<div className="bg-[#E5C9A8] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-inner flex-shrink-0" title="有料会員限定"><Lock size={16}/></div>)}
                          <h3 className={`font-bold text-lg leading-relaxed flex items-center gap-2 ${locked ? "text-[#A67144]" : "text-[#4A3018] group-hover:text-[#8A5A33] transition-colors"}`}>{article.title} {courseType === "listening" && <Video size={18} className="text-amber-500"/>}</h3>
                        </div>
                        <div className="flex-shrink-0 ml-4">
                          {completedArticleIds.includes(article.id) ? <span className="text-emerald-700 font-bold text-sm bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1"><CheckCircle size={14}/> 完了</span> : (locked ? <span className="text-[#A67144] text-xs font-bold bg-[#F8F1E7] px-3 py-1 rounded-full">Premium</span> : <ChevronRight size={24} className="text-[#E5C9A8] group-hover:text-amber-500 transition-colors drop-shadow-sm" />)}
                        </div>
                    </button>
                  );
              })}
            </div>
          </div>
        )}

        {/* フレーズリスト */}
        {currentScreen === "phrases_list" && (
          <div className="animate-fade-in-up max-w-2xl mx-auto">
            <HeaderBackButton onClick={() => changeScreen("levels_sub")} text="種類選択に戻る" />
            <h2 className="text-2xl font-serif font-bold mb-8 text-[#4A3018] border-b-2 border-amber-400 pb-3 inline-block">
                {selectedCategory}のフレーズ
            </h2>
            <div className="space-y-4">
              {getFilteredArticles().filter(a => a.category === selectedCategory).length > 0 ? (
                getFilteredArticles().filter(a => a.category === selectedCategory).map((article) => (
                  <button 
                    key={article.id} 
                    onClick={() => handlePhraseClick(article)} 
                    className="w-full text-left p-6 bg-white rounded-2xl shadow-sm border-2 border-[#F5F0E6] hover:border-[#B8865D] hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 flex justify-between items-center"
                  >
                    <div className="flex items-center gap-4">
                      <MessageSquare size={28} className="text-[#8A5A33] opacity-90 drop-shadow-sm" strokeWidth={1.5} />
                      <span className="font-bold text-lg text-[#4A3018] group-hover:text-[#8A5A33] transition-colors">{article.title}</span>
                    </div>
                    <span className="text-[#E5C9A8] font-bold text-sm group-hover:text-amber-500 transition-colors flex items-center gap-1">翻訳を見る <ChevronRight size={20} /></span>
                  </button>
                ))
              ) : (
                <div className="text-center py-16 text-[#A67144] bg-white rounded-[2rem] border-dashed border-2 border-[#E5C9A8] shadow-sm flex flex-col items-center">
                  <Library size={48} className="mb-4 opacity-50" strokeWidth={1.5}/>
                  <p className="font-bold text-lg">現在、{selectedCategory}のデータはありません。</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 1フレーズ詳細 (アラビア語と解説) */}
        {currentScreen === "phrase_detail" && activeArticle && (
          <div className="animate-fade-in-up pb-20 max-w-xl mx-auto">
            <HeaderBackButton onClick={() => changeScreen("phrases_list")} text="一覧に戻る" />
            
            <div className="bg-white rounded-3xl shadow-xl border border-[#E5C9A8] overflow-hidden text-center relative">
                {/* 装飾 */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[url('/pattern.png')] opacity-5 pointer-events-none"></div>

                {/* 上部: 日本語 */}
                <div className="bg-[#F8F1E7] p-8 border-b border-[#E5C9A8] relative z-10">
                  <span className="text-[10px] font-bold text-[#A67144] uppercase tracking-widest block mb-3 border border-[#D4A373] w-max mx-auto px-3 py-1 rounded-full bg-white/50">Meaning</span>
                  <h2 className="text-2xl font-bold text-[#4A3018] leading-relaxed">{activeArticle.title}</h2>
                </div>
                
                {/* 下部: アラビア語と解説 */}
                <div className="p-8 md:p-12 relative z-10">
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-8 flex justify-center items-center gap-2"><span className="w-8 h-px bg-amber-300"></span>Arabic Phrase<span className="w-8 h-px bg-amber-300"></span></span>
                  <p className="text-4xl md:text-5xl font-arabic text-[#3E2713] leading-loose mb-12 drop-shadow-md" dir="rtl">
                      {activeArticle.sentences?.[0]?.arabic || activeArticle.contentPlain}
                  </p>
                  
                  <button 
                    onClick={() => speakText(activeArticle.sentences?.[0]?.arabic || activeArticle.contentPlain || "")} 
                    className="bg-gradient-to-br from-amber-100 to-amber-200 text-amber-800 w-24 h-24 rounded-full mx-auto flex items-center justify-center hover:shadow-lg active:scale-90 transition-all border-4 border-white shadow-md mb-12"
                  >
                    <Volume2 size={40} />
                  </button>

                  {/* 解説セクション */}
                  <div className="text-left bg-[#F8F1E7] p-8 rounded-2xl border border-[#E5C9A8] relative shadow-inner">
                    <div className="absolute -top-4 left-8 bg-[#8A5A33] text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                      Explanation
                    </div>
                    <p className="text-[#5E3C1E] leading-relaxed whitespace-pre-wrap mt-2 font-medium">
                      {activeArticle.sentences?.[0]?.note || "解説がありません。"}
                    </p>
                  </div>
                </div>
            </div>
          </div>
        )}

        {/* 学習モード選択 */}
        {currentScreen === "mode_select" && activeArticle && (
          <div className="flex flex-col items-center justify-center py-10 animate-fade-in-up max-w-xl mx-auto relative">
            <div className="w-full text-left">
                <HeaderBackButton onClick={() => changeScreen("list")} />
            </div>

            <div className="w-28 h-28 bg-gradient-to-br from-[#8A5A33] to-[#4A3018] text-amber-400 rounded-full flex items-center justify-center mb-8 shadow-2xl border-4 border-[#F5F0E6]">
               <BookOpen size={56} strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl font-serif font-bold mb-4 text-center text-[#4A3018] leading-tight">{activeArticle.title}</h2>
            <p className="text-[#A67144] mb-12 text-sm font-bold tracking-widest uppercase border-b border-[#D4A373] pb-2">Select Mode</p>
            
            <div className={`grid gap-4 w-full ${activeArticle.level === "初級" || activeArticle.level === "文法" ? "grid-cols-2" : "grid-cols-1 md:grid-cols-3"}`} dir="ltr">
              {(courseType === "reading" || (activeArticle.level !== "文法" && courseType !== "listening")) && (
                <ModeButton icon={BookOpen} title="Reading" subtitle="読んで理解" color="border-[#E5C9A8] bg-white hover:bg-[#F8F1E7] text-[#5E3C1E]" onClick={() => startLearning("reading")} />
              )}
              {courseType !== "reading" && activeArticle.level !== "文法" && activeArticle.level !== "初級" && (
                <ModeButton icon={Headphones} title="Listening" subtitle="音声のみ" color="border-[#E5C9A8] bg-white hover:bg-[#F8F1E7] text-[#5E3C1E]" onClick={() => startLearning("listening")} />
              )}
              {activeArticle.level === "文法" && courseType === "grammar" && (
                <ModeButton icon={Puzzle} title="Grammar" subtitle="文法理解" color="border-[#E5C9A8] bg-white hover:bg-[#F8F1E7] text-[#5E3C1E]" onClick={() => startLearning("grammar")} />
              )}
              {courseType !== "reading" && (
                <ModeButton icon={PenTool} title="Dictation" subtitle="書き取り" color="border-[#E5C9A8] bg-white hover:bg-[#F8F1E7] text-[#5E3C1E]" onClick={() => startLearning("dictation")} />
              )}
            </div>
          </div>
        )}

        {/* リーダー画面 */}
        {currentScreen === "reader" && activeArticle && (
          <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden pb-12 border border-[#E5C9A8] animate-fade-in-up">
            <div className="bg-[#4A3018] text-amber-50 p-4 flex justify-between items-center sticky top-0 z-10 border-b border-[#764C28] shadow-md">
                <button onClick={() => {
                    if (courseType === "listening" || courseType === "grammar") changeScreen("list");
                    else if (courseType === "poetry") changeScreen("poets"); 
                    else changeScreen("mode_select");
                }} className="hover:text-amber-300 text-sm font-bold opacity-90 transition-colors flex items-center gap-1.5 hover:-translate-x-1 duration-300">
                    <ArrowLeft size={16} strokeWidth={2.5}/> 戻る
                </button>
                <span className="font-bold text-[10px] tracking-widest uppercase bg-black/20 px-3 py-1 rounded-full border border-white/10">{activeArticle.category}</span>
            </div>

            <div className="p-6 md:p-10 flex flex-col items-center relative">
              
              {/* 文法・スライド表示 */}
              {learningMode === "grammar" && activeArticle.imageUrls && activeArticle.imageUrls.length > 0 ? (
                <div className="w-full max-w-2xl flex flex-col items-center">
                  <h2 className="text-3xl font-serif font-bold mb-8 text-[#4A3018] text-center w-full border-b-2 border-amber-400 pb-4">
                    {activeArticle.title}
                  </h2>
                  {activeArticle.contentPlain && (
                    <div className="w-full text-left bg-[#F8F1E7] p-6 rounded-2xl mb-8 border border-[#E5C9A8]" dir="ltr">
                    <p className="text-base text-[#5E3C1E] leading-relaxed whitespace-pre-wrap font-medium">
                      {activeArticle.contentPlain}
                    </p>
                  </div>
                  )}
                  <div className="w-full space-y-8 mb-12">
                    {activeArticle.imageUrls.map((url, idx) => (
                      <img 
                        key={idx}
                        src={url} 
                        alt={`Slide ${idx + 1}`}
                        className="w-full rounded-2xl shadow-lg border border-[#E5C9A8]"
                        loading="lazy"
                      />
                    ))}
                  </div>

                  {activeArticle.questions && activeArticle.questions.length > 0 ? (
                    <div className="bg-gradient-to-b from-[#F8F1E7] to-white p-8 rounded-3xl text-center w-full border border-[#E5C9A8] shadow-sm">
                      <p className="text-[#764C28] font-bold mb-6 text-lg">解説を読み終わりましたか？</p>
                      <button 
                        onClick={() => {
                            const qs = activeArticle.questions;
                            setGrammarQuestions(qs);
                            startQuiz();
                        }} 
                        className="w-full md:w-auto px-12 py-5 bg-[#8A5A33] text-white font-bold rounded-full shadow-xl hover:bg-[#5E3C1E] hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-3 mx-auto text-lg"
                      >
                        <Pencil size={24} /> 理解度チェック (Check Understanding)
                      </button>
                    </div>
                  ) : (
                    <div className="text-center text-[#A67144] font-medium mt-8 p-6 bg-stone-50 rounded-2xl w-full border border-dashed border-[#E5C9A8]">
                      <p className="mb-4">このレッスンの解説は以上です。</p>
                      <button onClick={() => changeScreen("list")} className="px-6 py-2 bg-white rounded-full border border-[#D4A373] text-[#764C28] hover:bg-[#F8F1E7] transition-colors font-bold shadow-sm">一覧に戻る</button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-full max-w-xl">
                    
                    {/* YouTube */}
                    {activeArticle.videoUrl && getYouTubeId(activeArticle.videoUrl) && (
                      <div className="w-full max-w-xl mb-10 aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-[#F5F0E6]">
                        <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${getYouTubeId(activeArticle.videoUrl)}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                      </div>
                    )}

                    {/* 文法テスト開始画面 (画像がない場合) */}
                    {learningMode === "grammar" && (
                        <div className="text-center py-16 bg-[#F8F1E7] rounded-[2rem] border border-[#E5C9A8] shadow-sm">
                            <h2 className="text-2xl font-bold mb-4 text-[#4A3018]">{activeArticle.title}</h2>
                            <p className="mb-10 text-[#8A5A33] font-medium">理解度チェックテストを開始します。</p>
                            <button onClick={() => {
                                const qs = activeArticle.questions;
                                setGrammarQuestions(qs);
                                startQuiz();
                            }} className="bg-[#764C28] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-[#5E3C1E] hover:-translate-y-1 active:scale-95 transition-all text-lg flex items-center justify-center gap-2 mx-auto"><Pencil size={20}/> テストを開始する</button>
                        </div>
                    )}

                    {/* 読解・会話・リスニング */}
                    {learningMode !== "grammar" && (
                      <>
                        <h2 className="text-3xl font-serif font-bold mb-10 text-center text-[#4A3018] w-full">{activeArticle.level === "初級" ? `問題 ${activeProblemNumber} (${activeArticle.title})` : activeArticle.title}</h2>
                        
                        {activeArticle.level === "会話" || (courseType === "poetry" && activeArticle.sentences && activeArticle.sentences.length > 0) ? (
                          <div className="w-full space-y-8 mb-12">
                              {activeArticle.sentences?.map((sent, idx) => {
                                const isRight = courseType === "poetry" ? true : idx % 2 === 0;
                                const isCurrentPlaying = audioState !== "idle" && currentAudioIndex === idx;

                                return (
                                  <div key={idx} className={`flex ${isRight ? "justify-start" : "justify-end"}`}>
                                    <div className={`max-w-[90%] md:max-w-[85%] p-6 md:p-8 rounded-[2rem] relative shadow-md border transition-all duration-500 
                                      ${isCurrentPlaying ? "ring-4 ring-amber-400/50 scale-[1.02] shadow-xl bg-amber-50" : ""} 
                                      ${courseType === "poetry" ? "bg-[#FCFAF5] border-[#E5C9A8] w-full rounded-2xl text-center" : isRight ? "bg-[#F8F1E7] text-[#4A3018] rounded-tr-none border-[#E5C9A8]" : "bg-white text-[#5E3C1E] rounded-tl-none border-gray-200"}`}>
                                      
                                      {/* Header */}
                                      <div className="flex justify-between items-center mb-3">
                                        <p className="text-[10px] font-bold opacity-50 uppercase tracking-widest">{sent.speaker}</p>
                                        {learningMode !== "listening" && (
                                          <button onClick={() => speakText(sent.arabic, sent.speaker)} className="text-[#D4A373] hover:text-amber-600 transition-colors hover:scale-110"><Volume2 size={20}/></button>
                                        )}
                                      </div>

                                      {/* Content */}
                                      {learningMode === "listening" ? (
                                        <div className="flex flex-col items-center py-4">
                                          <button 
                                            onClick={() => speakText(sent.arabic, sent.speaker)} 
                                            className={`w-20 h-20 rounded-full flex items-center justify-center shadow-md border-4 transition-all transform active:scale-90 hover:scale-110 mb-4 ${isRight ? "bg-white border-[#E5C9A8] text-[#8A5A33]" : "bg-[#F5F0E6] border-white text-[#764C28]"}`}
                                          >
                                            <Volume2 size={36}/>
                                          </button>
                                          <p className="text-base font-bold text-[#5E3C1E] text-center leading-relaxed px-4">
                                            {sent.japanese}
                                          </p>
                                        </div>
                                      ) : (
                                        <div className="flex flex-col">
                                          <p className={`text-2xl md:text-3xl font-arabic leading-loose mb-4 drop-shadow-sm ${courseType === "poetry" ? "text-center py-2" : ""}`}>
                                            {sent.arabic}
                                          </p>
                                          <p className="text-sm text-[#764C28] font-bold leading-relaxed border-t border-dashed border-[#D4A373]/50 pt-4 mt-2">
                                            {sent.japanese}
                                          </p>
                                          {/* 解説ノート */}
                                          {sent.note && (
                                            <div className="mt-4 text-xs bg-amber-50/80 border border-amber-200/50 text-[#8A5A33] p-4 rounded-xl flex flex-col gap-3 text-left shadow-inner" dir="ltr">
                                              <div className="flex gap-2 items-start">
                                                <Lightbulb size={20} className="drop-shadow-sm text-amber-500 flex-shrink-0" />
                                                <span className="font-medium leading-relaxed">{sent.note}</span>
                                              </div>

                                              {/* 関連文法 */}
                                              {sent.relatedGrammarId && (
                                                <button 
                                                  onClick={() => handleJumpToGrammar(sent.relatedGrammarId!)}
                                                  className="self-start mt-1 bg-white border border-[#D4A373] text-[#764C28] text-[10px] px-4 py-2 rounded-full font-bold hover:bg-[#F8F1E7] transition-colors flex items-center gap-1.5 shadow-sm"
                                                >
                                                  <BookOpen size={14} /> 文法解説: {getArticleById(sent.relatedGrammarId)?.title}
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
                              <div className="py-12 flex flex-col items-center text-[#A67144] text-sm bg-[#F8F1E7] rounded-3xl border-2 border-dashed border-[#E5C9A8] mb-10 shadow-sm">
                                <Headphones size={48} className="mb-4 opacity-70 drop-shadow-sm" strokeWidth={1.5}/>
                                <p className="font-bold text-lg mb-2 text-[#5E3C1E]">動画・音声を視聴して内容を理解しましょう</p>
                                <p className="text-xs opacity-80">（テキストはクイズ後に表示されます）</p>
                              </div>
                          ) : (
                              <p className="text-2xl md:text-3xl leading-[2.5] font-arabic text-justify mb-14 w-full text-[#3E2713] drop-shadow-sm px-4" dir="rtl">
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
                        
                        {/* Key Expressions */}
                        {activeArticle.keyExpressions && activeArticle.keyExpressions.length > 0 && (
                            <div className="mb-12 w-full bg-[#F8F1E7] rounded-3xl p-8 border border-[#E5C9A8] shadow-inner relative overflow-hidden">
                              <div className="absolute top-0 right-0 w-32 h-32 bg-[url('/pattern.png')] opacity-[0.03] pointer-events-none"></div>
                              <h3 className="font-bold mb-6 text-sm text-[#A67144] tracking-widest uppercase flex items-center gap-2 border-b border-[#D4A373]/30 pb-3">
                                <BookOpen size={20} className="text-amber-600"/> Key Expressions
                              </h3>
                              <div className="space-y-4 relative z-10">
                              {activeArticle.keyExpressions.map((item, idx) => (
                                  <div key={idx} className="bg-white p-5 rounded-2xl border border-[#E5C9A8] shadow-sm hover:shadow-md transition-shadow">
                                    <p className="font-bold text-[#4A3018] font-arabic text-2xl mb-2 drop-shadow-sm" dir="rtl">
                                      {item.phrase}
                                    </p>
                                    {item.reading && (
                                      <p className="text-xs text-stone-400 mb-3 font-medium tracking-wide">
                                        {item.reading}
                                      </p>
                                    )}
                                    <p className="text-sm text-[#764C28] font-bold mb-2">{item.explanation.split("「")[0]}</p>
                                    <p className="text-xs text-[#8A5A33] leading-relaxed text-left font-medium" dir="ltr">{item.explanation}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                        )}

                        {/* Vocabulary */}
                        <div className="mb-14 w-full">
                            <h3 className="font-bold mb-6 text-sm text-[#A67144] tracking-widest uppercase flex items-center gap-2 border-b border-[#D4A373]/30 pb-3"><Bookmark size={20} /> Vocabulary</h3>
                            <div className="flex flex-wrap gap-3">
                                {activeArticle.vocabList.map((v, i) => (<VocabButton key={i} v={v} i={i} isRevealed={revealedVocabIndex === i} isSaved={savedVocab.some(sv => sv.word === v.word)} onReveal={() => setRevealedVocabIndex(i)} onSave={() => saveWord(v.word, v.meaning)} />))}
                            </div>
                        </div>
                     {/* クイズ・解説へ進むボタン */}
                     {courseType !== "poetry" && (
                            <div className="flex flex-col sm:flex-row gap-4 w-full">
                              <button onClick={() => startQuiz()} className="flex-1 bg-gradient-to-r from-[#8A5A33] to-[#5E3C1E] text-amber-50 font-bold py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-3 text-lg">
                                  <Pencil size={24} className="drop-shadow-sm"/> {courseType === "listening" ? "問題を解く" : `理解度チェック (${activeArticle.questions.length}問)`}
                              </button>
                              
                              {/* ★追加: すぐに解説画面へ飛ぶボタン */}
                              <button onClick={() => changeScreen("result")} className="flex-1 bg-white border-2 border-[#E5C9A8] text-[#764C28] font-bold py-4 rounded-2xl shadow-md hover:shadow-lg hover:border-[#D4A373] hover:bg-[#F8F1E7] hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-2 text-lg">
                                  <BookOpen size={22} /> すぐに解説を見る
                              </button>
                            </div>
                        )}
                      </>
                    )}
                </div>
              )}

            </div>
          </div>
        )}

        {/* ディクテーション (書き取り) 画面 */}
        {currentScreen === "dictation" && activeArticle && activeArticle.sentences && (
          <div className="max-w-xl mx-auto animate-fade-in-up pb-32">
              <div className="mb-8 flex justify-between items-center">
                  <HeaderBackButton onClick={() => changeScreen("mode_select")} text="中断して戻る" />
                  <span className="text-[10px] font-bold text-[#A67144] tracking-widest uppercase border border-[#E5C9A8] px-3 py-1 rounded-full bg-white shadow-sm" dir="ltr">SENTENCE {dictationIndex + 1} / {activeArticle.sentences.length}</span>
              </div>
              
              <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl mb-6 text-center border border-[#E5C9A8] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[url('/pattern.png')] opacity-[0.03] pointer-events-none"></div>
                <h3 className="font-bold text-[#5E3C1E] mb-10 font-serif text-xl relative z-10 flex justify-center items-center gap-2"><PenTool size={28} className="text-amber-500"/> 書き取り練習</h3>
                
                <button onClick={() => speakText(activeArticle.sentences[dictationIndex].arabic, activeArticle.sentences[dictationIndex].speaker)} className="bg-gradient-to-br from-amber-100 to-[#F8F1E7] text-[#8A5A33] w-24 h-24 rounded-full mb-12 hover:shadow-lg transition-all shadow-md mx-auto flex items-center justify-center hover:scale-110 active:scale-90 border-4 border-white relative z-10">
                    <Volume2 size={40} />
                </button>
                
                <div className="mb-12 text-3xl leading-[2.5] font-arabic text-[#3E2713] flex flex-wrap justify-center gap-3 relative z-10 drop-shadow-sm" dir="rtl">
                    {maskedSentence.map((word, i) => (i === hiddenWordIndex ? (<span key={i} className="border-b-4 border-amber-400 min-w-[120px] text-[#A67144] px-2 font-bold bg-[#F8F1E7] rounded-t-lg">{dictationFeedback === "correct" || dictationFeedback === "incorrect" ? word : "______"}</span>) : (<span key={i} className="opacity-60">{word}</span>)))}
                </div>
                
                <input type="text" dir="rtl" value={dictationInput} onChange={(e) => setDictationInput(e.target.value)} placeholder="キーボードで入力..." className="w-full p-5 text-3xl border-2 border-[#E5C9A8] rounded-2xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 outline-none font-arabic text-center mb-8 transition-all relative z-10 text-[#4A3018] bg-[#FCFAF5] shadow-inner placeholder:text-stone-300" />
                
                <div className="relative z-10">
                    {dictationFeedback === "correct" && <div className="mb-8 bg-emerald-50 text-emerald-800 p-5 rounded-2xl font-bold border border-emerald-200 text-lg shadow-sm flex items-center justify-center gap-2"><CheckCircle size={24}/> 正解！ Excellent!</div>}
                    {dictationFeedback === "incorrect" && <div className="mb-8 bg-red-50 text-red-800 p-5 rounded-2xl font-bold border border-red-200 text-lg shadow-sm flex items-center justify-center gap-2"><Frown size={24}/> 正解は「{targetWordClean}」</div>}
                    {dictationFeedback === "none" ? (
                        <button onClick={checkDictation} className="w-full bg-[#764C28] text-white font-bold py-5 rounded-2xl hover:bg-[#5E3C1E] transition-all shadow-lg text-lg hover:-translate-y-1 active:scale-95">答え合わせ</button>
                    ) : (
                        <button onClick={nextDictation} className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-[#4A3018] font-bold py-5 rounded-2xl hover:shadow-xl transition-all shadow-lg text-lg hover:-translate-y-1 active:scale-95 flex justify-center items-center gap-2">{dictationIndex < activeArticle.sentences.length - 1 ? "次の文へ" : "結果を見る"} <ChevronRight size={20}/></button>
                    )}
                </div>
              </div>
              
              {/* キーボード */}
              <div className="fixed bottom-0 left-0 w-full bg-[#EBE6DF] border-t border-[#D1C4B7] p-3 z-30 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.2)]">
                  <div className="max-w-3xl mx-auto">
                      <div className="flex flex-wrap gap-1.5 justify-center mb-3" dir="rtl">
                          {ARABIC_KEYS.map((char) => (
                              <button key={char} onClick={() => handleKeyClick(char)} className="w-10 h-12 sm:w-11 sm:h-14 bg-white rounded-xl shadow-sm border-b-4 border-[#D1C4B7] active:border-b-0 active:translate-y-1 font-arabic text-2xl hover:bg-[#F8F1E7] text-[#4A3018] transition-all">
                                  {char}
                              </button>
                          ))}
                      </div>
                      <div className="flex gap-2 justify-center px-2">
                          <button onClick={handleSpace} className="flex-1 max-w-[200px] h-12 sm:h-14 bg-white rounded-xl shadow-sm border-b-4 border-[#D1C4B7] active:border-b-0 active:translate-y-1 text-[#8A5A33] font-bold text-sm tracking-widest transition-all">SPACE</button>
                          <button onClick={handleBackspace} className="w-20 h-12 sm:h-14 bg-[#F8F1E7] text-[#A67144] rounded-xl shadow-sm border-b-4 border-[#D4A373] active:border-b-0 active:translate-y-1 font-bold text-xl transition-all">⌫</button>
                      </div>
                  </div>
              </div>
          </div>
        )}

{/* クイズ画面 */}
{currentScreen === "quiz" && activeArticle && (
          <div className="max-w-xl mx-auto animate-fade-in-up pb-10">
              <div className="flex justify-between items-center mb-6">
                  <HeaderBackButton 
                    onClick={() => changeScreen(courseType === "poetry" ? "poetry_read" : courseType === "reorder" ? "list" : "reader")} 
                    text={courseType === "poetry" ? "詩に戻る" : courseType === "reorder" ? "一覧に戻る" : "記事に戻る"} 
                  />
                  <div className="text-center text-[10px] font-bold text-[#A67144] tracking-widest uppercase border border-[#E5C9A8] bg-white px-3 py-1 rounded-full shadow-sm" dir="ltr">QUESTION {currentQuestionIndex + 1} / {activeArticle.questions.length}</div>
              </div>

{/* ★ここから追加: 本文確認トグルボタン */}
{(learningMode === "reading" || courseType === "poetry") && (
                <div className="mb-6 animate-fade-in-up">
                  <button 
                    onClick={() => setIsQuizTextVisible(!isQuizTextVisible)}
                    className="w-full py-3 bg-white border-2 border-[#E5C9A8] text-[#8A5A33] font-bold rounded-2xl shadow-sm hover:bg-[#F8F1E7] transition-all flex items-center justify-center gap-2 active:scale-95"
                  >
                    <BookOpen size={18} /> {isQuizTextVisible ? "本文を隠す" : "本文を確認する"}
                  </button>
                  {isQuizTextVisible && (
                    <div className="mt-4 p-6 bg-[#FCFAF5] rounded-2xl border-2 border-dashed border-[#D4A373] shadow-inner max-h-[40vh] overflow-y-auto">
                      <p className="text-2xl md:text-3xl leading-loose font-arabic text-[#3E2713] text-justify" dir="rtl">
                        {(() => {
                          if (activeArticle.level === "上級") {
                            // 上級の場合は「母音なし(contentPlain)」を優先表示
                            if (activeArticle.contentPlain) return activeArticle.contentPlain;
                            // もしPlainがなければ、母音を強制的に削除して表示する
                            if (activeArticle.sentences && activeArticle.sentences.length > 0) return removeTashkeel(activeArticle.sentences.map(s => s.arabic).join(" "));
                            return activeArticle.contentVoweled ? removeTashkeel(activeArticle.contentVoweled) : "";
                          } else {
                            // 初級・中級・詩などは「母音あり(contentVoweled)」を優先表示
                            return activeArticle.contentVoweled || activeArticle.contentPlain || activeArticle.sentences?.map(s => s.arabic).join(" ") || "";
                          }
                        })()}
                      </p>
                    </div>
                  )}
                </div>
              )}
              {/* ★ここまで追加 */}              
              {(() => {
                const currentQ = activeArticle.questions?.[currentQuestionIndex];
                if (!currentQ) return null;

                const isLast = currentQuestionIndex === activeArticle.questions.length - 1;

                if (currentQ.type === "reorder") {
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
                    <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-[#E5C9A8] text-left relative overflow-hidden" dir="ltr">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#F8F1E7] rounded-bl-full z-0 opacity-50"></div>
                      <span className="text-[10px] font-bold text-[#D4A373] uppercase tracking-widest mb-4 block relative z-10 flex items-center gap-1.5"><CheckCircle size={14}/> Multiple Choice</span>
                      <div className="text-2xl font-bold mb-10 text-[#4A3018] leading-relaxed text-left relative z-10" dir="ltr">
                        {currentQ.text.split('\n').map((line, i) => (
                          <p 
                            key={i} 
                            className={line.includes('؟') || line.includes('هَذَا') ? "text-3xl font-arabic mt-6 text-right drop-shadow-sm text-[#3E2713]" : "text-lg text-[#5E3C1E] font-medium"}
                            dir={line.includes('؟') || line.includes('هَذَا') ? "rtl" : "ltr"}
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                      <div className="space-y-4 mb-8 relative z-10">
                          {currentQ.options.map((option, idx) => {
                          let btnClass = "bg-[#F8F1E7] border-[#E5C9A8] text-[#5E3C1E] hover:border-[#A67144] hover:shadow-md hover:-translate-y-0.5 active:scale-95";
                          if (isQuizResultVisible) {
                              if (idx === currentQ.correctIndex) { btnClass = "bg-emerald-50 border-emerald-500 text-emerald-900 font-bold shadow-md scale-[1.02]"; } else if (idx === quizSelectedOption) { btnClass = "bg-red-50 border-red-400 text-red-900"; } else { btnClass = "bg-stone-50 border-stone-200 text-stone-400 opacity-40"; }
                          }
                          return (
                            <button 
                              key={idx} 
                              onClick={() => handleQuizOptionClick(idx)} 
                              disabled={isQuizResultVisible} 
                              dir="ltr"
                              className={`w-full p-5 text-left border-2 rounded-2xl transition-all duration-300 font-bold text-lg flex items-center justify-between ${btnClass}`}
                            >
                              <span>{option}</span>
                              {isQuizResultVisible && idx === currentQ.correctIndex && <CheckCircle className="text-emerald-500" size={24} />}
                              {isQuizResultVisible && idx === quizSelectedOption && idx !== currentQ.correctIndex && <XCircle className="text-red-500" size={24} />}
                            </button>
                          );                
                          })}
                      </div>
                      {isQuizResultVisible && (
                        <div className="animate-fade-in-up relative z-10 mt-10 border-t border-dashed border-[#E5C9A8] pt-8">
                          <div className={`p-6 rounded-2xl text-center mb-8 border-2 shadow-inner ${quizSelectedOption === currentQ.correctIndex ? "bg-[#F2FCF5] border-emerald-300 text-emerald-900" : "bg-[#FFF5F5] border-red-200 text-red-900"}`}>
                            <p className="font-bold text-2xl mb-3 flex items-center justify-center gap-2">
                              {quizSelectedOption === currentQ.correctIndex ? <><PartyPopper size={28}/> Excellent!</> : <><Frown size={28}/> Try Again...</>}
                            </p>
                            
                            <p className="text-sm font-medium leading-relaxed text-left mt-4 whitespace-pre-wrap opacity-90" dir="ltr">
                              {currentQ.explanation}
                            </p>
              
                            {currentQ.relatedGrammarId && (
                              <div className="mt-5 text-left flex justify-center">
                                <button 
                                  onClick={() => handleJumpToGrammar(currentQ.relatedGrammarId!)}
                                  className="bg-white border-2 border-[#D4A373] text-[#764C28] text-xs px-5 py-2.5 rounded-full font-bold hover:bg-[#F8F1E7] transition-colors flex items-center gap-2 shadow-sm"
                                >
                                  <BookOpen size={16} /> 
                                  この文法を復習する ({getArticleById(currentQ.relatedGrammarId!)?.category})
                                </button>
                              </div>
                            )}
              
                            {currentQ.audio && (
                              <button 
                                onClick={() => speakText(currentQ.audio!)} 
                                className="mx-auto flex items-center gap-2 bg-amber-100 border border-amber-300 text-amber-900 px-6 py-2.5 rounded-full text-xs font-bold shadow-sm hover:bg-amber-200 transition-colors mt-6 active:scale-95"
                              >
                                <Volume2 size={18} /> 発音を聞く
                              </button>
                            )}
                          </div>
                          <button onClick={nextQuizQuestion} className="w-full bg-gradient-to-r from-[#8A5A33] to-[#5E3C1E] text-white font-bold py-5 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all text-lg flex items-center justify-center gap-2">
                            {isLast ? "結果を見る" : "次の問題へ"} <ChevronRight size={20} />
                          </button>
                        </div>
                      )}
                    </div>
                  );
                }
              })()}
          </div>
        )}

        {/* 結果画面 */}
        {currentScreen === "result" && activeArticle && (
          <div className="pb-20 animate-fade-in-up">
              <div className="max-w-xl mx-auto">
                  <HeaderBackButton onClick={() => changeScreen(courseType === "poetry" ? "poets" : "list")} text="一覧に戻る" />
              </div>

            <div className="text-center py-16 bg-white rounded-[2rem] shadow-2xl mb-10 border border-[#E5C9A8] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[url('/pattern.png')] opacity-5 pointer-events-none"></div>
              <div className="flex justify-center mb-6 relative z-10"><PartyPopper size={72} className="text-amber-500 drop-shadow-md" /></div>
              <h2 className="text-3xl font-serif font-bold mb-3 text-[#4A3018] relative z-10">学習完了</h2>
              <p className="text-[#A67144] text-sm font-bold tracking-widest uppercase mb-10 relative z-10">Great Job!</p>
              
              {learningMode !== "dictation" && learningMode !== "grammar" && !activeArticle.questions.some(q => q.type === "orthography") && (
                  <div className="mb-10 relative z-10">
                      <span className="text-xs text-stone-400 font-bold uppercase tracking-widest block mb-2">Score</span>
                      <div className="text-6xl font-bold text-[#8A5A33]">{quizScore} <span className="text-2xl text-[#D4A373] font-normal">/ {activeArticle.questions.length}</span></div>
                  </div>
              )}
              
              {courseType === "poetry" ? (
                  <div className="flex flex-col gap-4 max-w-xs mx-auto relative z-10">
                      <button onClick={() => changeScreen("reader")} className="w-full py-4 bg-gradient-to-r from-[#8A5A33] to-[#5E3C1E] text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-lg flex justify-center items-center gap-2">
                          <BookOpen size={20} /> 詳しい解説を読む
                      </button>
                      <button onClick={() => changeScreen("poets")} className="w-full py-4 bg-[#F8F1E7] border border-[#E5C9A8] text-[#764C28] font-bold rounded-2xl hover:bg-[#EBE6DF] transition-colors">
                          リストに戻る
                      </button>
                  </div>
              ) : (
                  <div className="space-y-8 relative z-10 px-4 md:px-8">
                    <div className="flex justify-center mb-10">
                        <button onClick={() => changeScreen("list")} className="px-12 py-4 bg-gradient-to-r from-[#8A5A33] to-[#5E3C1E] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95 text-lg">一覧に戻る</button>
                    </div>

                    {activeArticle.sentences && activeArticle.sentences.length > 0 && (
                      <div className="mt-16 text-left w-full">
                        <h3 className="text-center font-bold text-[#4A3018] text-xl mb-8 flex items-center justify-center gap-2 border-b-2 border-[#E5C9A8] pb-4"><Sparkles size={24} className="text-amber-500" /> 文章の解説・日本語訳</h3>
                        <div className="space-y-6">
                          {activeArticle.sentences.map((sent, idx) => (
                            <div key={idx} className="bg-[#FCFAF5] p-6 md:p-8 rounded-2xl border border-[#E5C9A8] shadow-sm hover:shadow-md transition-shadow">
                              <p className="text-2xl font-arabic text-[#3E2713] mb-4 leading-loose drop-shadow-sm" dir="rtl">{sent.arabic}</p>
                              <p className="text-base font-bold text-[#5E3C1E] mb-4 text-left border-t border-dashed border-[#D4A373]/50 pt-4" dir="ltr">
                                {sent.japanese}
                              </p>
                              
                              {sent.note && (
                                <div className="text-xs bg-[#F8F1E7] text-[#764C28] p-4 rounded-xl flex flex-col gap-3 text-left border border-[#E5C9A8] mt-4" dir="ltr">
                                  <div className="flex gap-2 items-start">
                                    <Lightbulb size={20} className="text-amber-500 flex-shrink-0" />
                                    <span className="font-medium leading-relaxed">{sent.note}</span>
                                  </div>

                                  {sent.relatedGrammarId && (
                                    <button 
                                      onClick={() => handleJumpToGrammar(sent.relatedGrammarId!)}
                                      className="self-start mt-2 bg-white border border-[#D4A373] text-[#A67144] text-[10px] px-4 py-1.5 rounded-full font-bold hover:bg-[#F8F1E7] transition-colors flex items-center gap-1.5 shadow-sm"
                                    >
                                      <BookOpen size={14} /> 文法解説: {getArticleById(sent.relatedGrammarId)?.title}
                                    </button>
                                  )}
                                </div>
                              )}
                              
                              <div className="mt-4 text-right">
                                <button onClick={() => speakText(sent.arabic)} className="text-xs bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-bold hover:bg-amber-200 transition-colors shadow-sm inline-flex items-center gap-1.5">
                                  <Volume2 size={16} /> 音声を聞く
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
      </main>

 {/* フローティング・オーディオプレイヤー */}
 {(currentScreen === "reader" || currentScreen === "poetry_read") && learningMode !== "grammar" && learningMode !== "listening" && (
        <div className="fixed bottom-0 left-0 w-full bg-[#FBF8F1]/95 backdrop-blur-md border-t-2 border-[#D4A373] shadow-[0_-10px_30px_-10px_rgba(138,90,51,0.2)] p-4 z-40 animate-fade-in-up">
          <div className="max-w-xl mx-auto flex items-center justify-between px-2 sm:px-0">
            
            {/* 1. スピードコントロール (左側) */}
            <div className="flex items-center bg-white px-2 py-1.5 rounded-lg border border-[#E5C9A8] shadow-sm">
              <select 
                value={playbackRate} 
                onChange={(e) => setPlaybackRate(parseFloat(e.target.value))}
                className="bg-transparent text-[#764C28] text-xs font-bold outline-none cursor-pointer border-none p-0 focus:ring-0 text-center"
                dir="ltr"
              >
                <option value="0.25">0.25x</option>
                <option value="0.5">0.5x</option>
                <option value="0.75">0.75x</option>
                <option value="1.0">1.0x</option>
                <option value="1.25">1.25x</option>
                <option value="1.5">1.5x</option>
              </select>
            </div>

            {/* 2. 再生コントロール群 (中央) */}
            <div className="flex items-center gap-2 sm:gap-5">
              <button 
                onClick={handleStopPlayback}
                disabled={audioState === "idle"}
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all shadow-sm ${audioState === "idle" ? "text-[#D4A373]/50 bg-[#EBE6DF]" : "text-[#5E3C1E] bg-white border border-[#E5C9A8] hover:bg-[#F8F1E7] active:scale-90"}`}
              >
                <Square size={16} className={audioState !== "idle" ? "fill-current" : ""} />
              </button>

              <button 
                onClick={handlePrevSentence}
                disabled={audioState === "idle" || !activeArticle?.sentences}
                className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all shadow-md ${audioState === "idle" || !activeArticle?.sentences ? "text-[#D4A373]/50 bg-[#EBE6DF]" : "text-[#764C28] bg-white border border-[#E5C9A8] hover:bg-[#F8F1E7] active:scale-90"}`}
              >
                <SkipBack size={20} className={audioState !== "idle" && activeArticle?.sentences ? "fill-current" : ""} />
              </button>

              <button 
                onClick={handleTogglePlay}
                className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#A67144] to-[#5E3C1E] text-amber-50 flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all border-4 border-white"
              >
                {audioState === "playing" ? <Pause size={24} className="fill-current sm:w-8 sm:h-8" /> : <Play size={28} className="fill-current ml-1 sm:ml-2 sm:w-9 sm:h-9" />}
              </button>

              <button 
                onClick={handleNextSentence}
                disabled={audioState === "idle" || !activeArticle?.sentences}
                className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all shadow-md ${audioState === "idle" || !activeArticle?.sentences ? "text-[#D4A373]/50 bg-[#EBE6DF]" : "text-[#764C28] bg-white border border-[#E5C9A8] hover:bg-[#F8F1E7] active:scale-90"}`}
              >
                <SkipForward size={20} className={audioState !== "idle" && activeArticle?.sentences ? "fill-current" : ""} />
              </button>
            </div>

            {/* 3. 音声ステータス (右側) */}
            <div className="w-10 flex justify-end">
              {audioState === "playing" && <Volume2 size={20} className="text-amber-500 animate-pulse drop-shadow-sm" />}
            </div>

          </div>
        </div>
      )}
      {/* フッター */}
      <footer className="bg-[#2C1A0D] text-[#D4A373] py-10 pb-36 text-center text-xs border-t-4 border-[#1A0F08]">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 mb-6">
          <Link href="/faq" className="hover:text-amber-400 transition-colors font-medium">よくある質問</Link>
          <Link href="/terms" className="hover:text-amber-400 transition-colors font-medium">利用規約</Link>
          <Link href="/privacy" className="hover:text-amber-400 transition-colors font-medium">プライバシーポリシー</Link>
          <Link href="/law" className="hover:text-amber-400 transition-colors font-medium">特定商取引法に基づく表記</Link>
        </div>
        <p className="opacity-40 font-serif tracking-widest">&copy; 2024 Arabi Lab. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

// --- UI Components ---
function VocabButton({ v, i, isRevealed, isSaved, onReveal, onSave }: any) { 
    return (
        <button onClick={onReveal} className={`relative px-4 py-2 rounded-xl text-sm transition-all duration-300 border-2 flex items-center justify-center min-w-[80px] ${isRevealed ? "bg-[#F8F1E7] border-[#D4A373] text-[#5E3C1E] shadow-md scale-105" : "bg-white border-dashed border-[#E5C9A8] text-[#A67144] hover:border-amber-400 hover:text-amber-600 hover:-translate-y-0.5 hover:shadow-sm"}`}>
            <span className={`font-bold ${isRevealed ? "" : "font-arabic text-xl"}`}>{isRevealed ? v.meaning : v.word}</span>
            {isRevealed && !isSaved && <span onClick={(e) => { e.stopPropagation(); onSave(); }} className="absolute -top-2.5 -left-2.5 bg-[#8A5A33] text-white w-6 h-6 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-[#5E3C1E] hover:scale-110 transition-all border-2 border-white"><Plus size={16} strokeWidth={3} /></span>}
            {isSaved && <span className="absolute -top-2.5 -left-2.5 text-emerald-600 bg-white rounded-full border-2 border-emerald-200 w-6 h-6 flex items-center justify-center shadow-sm"><Check size={14} strokeWidth={3} /></span>}
        </button>
    ); 
}

function LevelButton({ title, subtitle, color, icon: Icon, onClick }: any) { 
  return (
    <button onClick={onClick} className={`w-full h-32 sm:h-36 p-4 rounded-[2rem] rounded-tr-xl shadow-sm border-2 ${color} flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1.5 active:scale-95 transition-all duration-300 group`}>
      <div className="mb-3 text-[#A67144] group-hover:text-[#8A5A33] transition-colors relative z-10 group-hover:scale-110 duration-300">
        <Icon size={44} strokeWidth={1.5} />
      </div>
      <span className="text-base sm:text-lg font-bold tracking-wide relative z-10">{title}</span>
      <span className="text-[9px] sm:text-[10px] font-bold opacity-60 uppercase mt-1 tracking-widest relative z-10">{subtitle}</span>
    </button>
  ); 
}

function ModeButton({ icon: Icon, title, subtitle, color, onClick }: any) { 
    return (
        <button onClick={onClick} className={`border-2 ${color} p-5 md:p-6 rounded-[2rem] rounded-bl-xl transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 active:scale-95 flex flex-col items-center gap-3 group h-full justify-center relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-16 h-16 bg-black/[0.02] rounded-bl-full z-0 transition-transform group-hover:scale-150"></div>
            <div className="text-[#A67144] group-hover:text-[#8A5A33] transition-colors relative z-10 group-hover:scale-110 duration-300">
               <Icon size={36} strokeWidth={1.5} />
            </div>
            <div className="text-center relative z-10">
                <span className="font-bold text-base block">{title}</span>
                <span className="text-[10px] opacity-60 font-bold tracking-widest uppercase mt-1 block">{subtitle}</span>
            </div>
        </button>
    ); 
}

function StatCard({ label, value, color }: any) { 
    return (
        <div className="bg-white p-5 rounded-[2rem] shadow-sm border border-[#E5C9A8] relative overflow-hidden hover:shadow-md transition-shadow">
            <div className="absolute -left-4 -bottom-4 w-16 h-16 bg-[#F8F1E7] rounded-tr-full z-0"></div>
            <p className="text-[#A67144] text-[10px] font-bold uppercase tracking-widest mb-2 relative z-10">{label}</p>
            <p className={`text-3xl font-bold font-serif relative z-10 ${color}`}>{value}</p>
        </div>
    ); 
}

function SettingItem({ icon: Icon, label, onClick }: { icon: any, label: string, onClick: () => void }) {
  return (
    <button onClick={onClick} className="w-full flex items-center justify-between p-5 hover:bg-[#F8F1E7] transition-colors text-left group">
      <div className="flex items-center gap-4">
        <span className="bg-white border border-[#E5C9A8] w-10 h-10 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
          <Icon size={18} className="text-[#8A5A33]" strokeWidth={2} />
        </span>
        <span className="text-[#5E3C1E] font-bold text-sm">{label}</span>
      </div>
      <ChevronRight size={20} className="text-[#D4A373] group-hover:text-amber-600 transition-colors" />
    </button>
  );
}

function OrthographyDrill({ question, onNext, isLast, onSpeak }: any) {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    setIsRevealed(false);
  }, [question]);

  return (
    <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-[#E5C9A8] text-center animate-fade-in-up relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[url('/pattern.png')] opacity-5 pointer-events-none"></div>
      
      <span className="inline-flex items-center gap-1.5 bg-[#F8F1E7] text-[#8A5A33] border border-[#D4A373] text-[10px] font-bold px-3 py-1 rounded-full mb-6 tracking-widest uppercase shadow-sm relative z-10">
        <PenTool size={14} /> 文字練習
      </span>
        
      <h3 className="text-sm font-bold mb-4 text-[#A67144] uppercase tracking-widest relative z-10 border-b border-[#E5C9A8] w-max mx-auto pb-1">Question</h3>
      <div className="text-4xl font-bold font-arabic text-[#3E2713] mb-10 py-8 bg-[#FCFAF5] rounded-2xl border-2 border-dashed border-[#D4A373] dir-rtl whitespace-pre-wrap shadow-inner relative z-10 leading-loose">
        {question.text}
      </div>

      {!isRevealed ? (
        <button 
          onClick={() => setIsRevealed(true)} 
          className="w-full bg-gradient-to-r from-[#8A5A33] to-[#5E3C1E] text-white font-bold py-5 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-3 text-lg relative z-10"
        >
          <Eye size={24} /> 答えを見る
        </button>
      ) : (
        <div className="animate-fade-in-up relative z-10">
          <div className="bg-[#F8F1E7] border-2 border-[#D4A373] rounded-2xl p-8 mb-8 shadow-sm relative overflow-hidden">
            <div className="absolute left-0 top-0 w-2 h-full bg-[#8A5A33]"></div>
            <div className="text-xs text-[#A67144] font-bold mb-4 tracking-widest uppercase">Answer</div>
            <div className="text-5xl text-[#4A3018] font-arabic font-bold mb-6 leading-relaxed drop-shadow-sm">
              {question.explanation}
            </div>
            
            {question.audio && (
              <button 
                onClick={() => onSpeak(question.audio)} 
                className="mx-auto flex items-center gap-2 bg-white border border-[#E5C9A8] text-[#764C28] px-6 py-3 rounded-full text-sm font-bold shadow-sm hover:bg-[#F5F0E6] active:scale-95 transition-all mb-2"
              >
                <Volume2 size={18} /> 発音を聞く
              </button>
            )}
          </div>
            
          <div className="flex gap-3">
            <button 
              onClick={onNext} 
              className="flex-1 bg-gradient-to-r from-[#8A5A33] to-[#5E3C1E] text-white font-bold py-5 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all text-lg flex justify-center items-center gap-2"
            >
              {isLast ? "結果を見る" : "次の問題へ"} <ChevronRight size={20}/>
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
    <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-[#E5C9A8] text-center animate-fade-in-up relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 bg-[url('/pattern.png')] opacity-[0.03] pointer-events-none"></div>
      
      <span className="inline-flex items-center gap-1.5 bg-[#F8F1E7] text-[#8A5A33] border border-[#D4A373] text-[10px] font-bold px-3 py-1 rounded-full mb-6 tracking-widest uppercase shadow-sm relative z-10">
        <ArrowRightLeft size={14} /> 並び替え問題
      </span>
      <h3 className="text-xl font-bold mb-8 text-[#5E3C1E] whitespace-pre-wrap leading-relaxed relative z-10 border-b border-[#E5C9A8] pb-4">{question.text}</h3>

      {/* 選択した単語のエリア */}
      <div className="min-h-[100px] p-5 bg-[#FCFAF5] rounded-2xl border-2 border-dashed border-[#D4A373] flex flex-wrap gap-2.5 justify-center items-center mb-8 relative z-10 shadow-inner" dir="rtl">
        {selectedWords.length === 0 && !isChecked && (
          <span className="text-[#A67144] font-medium text-sm">下の単語をタップして文を作成してください</span>
        )}
        {selectedWords.map((word, idx) => (
          <button 
            key={`sel-${idx}`} 
            onClick={() => handleDeselect(word, idx)}
            className={`px-5 py-3 rounded-xl font-arabic text-2xl shadow-sm transition-all transform ${isChecked ? (isCorrect ? "bg-emerald-600 text-white border-emerald-700 cursor-default" : "bg-red-500 text-white border-red-600 cursor-default") : "bg-white text-[#4A3018] hover:bg-[#F8F1E7] hover:-translate-y-1 hover:shadow-md border border-[#E5C9A8] active:scale-95"}`}
            disabled={isChecked}
          >
            {word}
          </button>
        ))}
      </div>

      {/* 選択肢（ダミー含む）のエリア */}
      <div className="flex flex-wrap gap-3 justify-center mb-10 relative z-10" dir="rtl">
        {availableWords.map((word, idx) => (
          <button 
            key={`avail-${idx}`} 
            onClick={() => handleSelect(word, idx)}
            className="px-5 py-3 bg-[#F8F1E7] text-[#5E3C1E] rounded-xl font-arabic text-2xl shadow-sm border border-[#D4A373] hover:border-[#8A5A33] hover:bg-white transition-all transform hover:-translate-y-1 active:scale-95"
            disabled={isChecked}
          >
            {word}
          </button>
        ))}
      </div>

      {/* 判定結果 */}
      <div className="relative z-10">
        {isChecked ? (
          <div className="animate-fade-in-up">
            <div className={`p-6 rounded-2xl mb-8 border-2 shadow-inner flex flex-col items-center ${isCorrect ? "bg-[#F2FCF5] border-emerald-300 text-emerald-900" : "bg-[#FFF5F5] border-red-200 text-red-900"}`}>
              <p className="font-bold text-2xl mb-3 flex items-center gap-2">
                {isCorrect ? <><PartyPopper size={28}/> Excellent!</> : <><Frown size={28}/> Try Again...</>}
              </p>
              {(!isCorrect && showAnswer) || isCorrect ? (
                  <div className="text-3xl font-arabic text-center mt-6 mb-4 leading-loose drop-shadow-sm" dir="rtl">
                      {(question.correctOrder || []).join(" ")}
                  </div>
              ) : null}
              <p className="text-sm opacity-90 text-left mt-4 whitespace-pre-wrap font-medium w-full" dir="ltr">
                {question.explanation}
              </p>
              {!isCorrect && !showAnswer && (
                  <div className="flex gap-3 mt-6 w-full">
                      <button onClick={() => {setIsChecked(false); setSelectedWords([]); setAvailableWords([...(question.correctOrder||[]), ...(question.distractors||[])].sort(()=>Math.random()-0.5));}} className="flex-1 bg-white border-2 border-red-200 text-red-700 py-3 rounded-xl text-sm font-bold hover:bg-red-50 active:scale-95 transition-all shadow-sm">やり直す</button>
                      <button onClick={() => setShowAnswer(true)} className="flex-1 bg-red-100 text-red-800 py-3 rounded-xl text-sm font-bold hover:bg-red-200 active:scale-95 transition-all shadow-sm">正解を見る</button>
                  </div>
              )}
            </div>
            <button onClick={onNext} className="w-full bg-gradient-to-r from-[#8A5A33] to-[#5E3C1E] text-white font-bold py-5 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all text-lg flex items-center justify-center gap-2">
              {isLast ? "結果を見る" : "次の問題へ"} <ChevronRight size={20}/>
            </button>
          </div>
        ) : (
           <button onClick={checkAnswer} disabled={selectedWords.length === 0} className={`w-full font-bold py-5 rounded-2xl shadow-lg transition-all transform text-lg ${selectedWords.length === 0 ? "bg-[#EBE6DF] text-[#BBAFA0] cursor-not-allowed border border-[#D1C4B7]" : "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:shadow-xl hover:-translate-y-1 active:scale-95 border-none"}`}>
             答え合わせ
           </button>
        )}
      </div>
    </div>
  );
}

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
    
    let numFixed = 2; 
    if (correct.length >= 10) numFixed = 3; 
    if (correct.length <= 5) numFixed = 1;  
    
    const indices = Array.from({length: correct.length}, (_, i) => i);
    const shuffledIndices = indices.sort(() => 0.5 - Math.random()).slice(0, numFixed);
    setFixedIndices(shuffledIndices);

    const initialSlots = correct.map((word: string, idx: number) => shuffledIndices.includes(idx) ? word : null);
    setSlots(initialSlots);

    const unfixedCorrectWords = correct.filter((_: any, idx: number) => !shuffledIndices.includes(idx));
    const allAvailable = [...unfixedCorrectWords, ...distractors].sort(() => 0.5 - Math.random());
    setAvailableWords(allAvailable);

    setIsChecked(false);
    setShowAnswer(false);
    setIsCorrect(false);
  }, [question]);

  const handleSelect = (word: string, idx: number) => {
    if (isChecked) return;
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
    if (fixedIndices.includes(slotIdx)) return; 
    if (slots[slotIdx] === null) return;

    const word = slots[slotIdx] as string;
    const newSlots = [...slots];
    newSlots[slotIdx] = null;
    setSlots(newSlots);

    setAvailableWords([...availableWords, word]);
  };

  const checkAnswer = () => {
    if (slots.includes(null)) return; 
    
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
    <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-[#E5C9A8] text-center animate-fade-in-up relative overflow-hidden">
      <div className="absolute top-0 left-0 w-32 h-32 bg-[url('/pattern.png')] opacity-5 pointer-events-none transform scale-x-[-1]"></div>
      
      <span className="inline-flex items-center gap-1.5 bg-[#F8F1E7] text-[#8A5A33] border border-[#D4A373] text-[10px] font-bold px-3 py-1 rounded-full mb-6 tracking-widest uppercase shadow-sm relative z-10">
        <Puzzle size={14}/> 穴埋め問題
      </span>
      <h3 className="text-xl font-bold mb-8 text-[#5E3C1E] whitespace-pre-wrap leading-relaxed relative z-10 border-b border-[#E5C9A8] pb-4">{question.text}</h3>

      {/* スロットエリア */}
      <div className="p-6 bg-[#FCFAF5] rounded-2xl border-2 border-dashed border-[#D4A373] flex flex-wrap gap-2.5 justify-center items-center mb-8 leading-[3.5] relative z-10 shadow-inner" dir="rtl">
        {slots.map((word, idx) => {
          const isFixed = fixedIndices.includes(idx);
          if (word === null) {
            return (
              <div key={`slot-${idx}`} className="h-14 min-w-[4rem] px-4 rounded-xl border-b-4 border-dashed border-[#D4A373] bg-white flex items-center justify-center shadow-sm">
                <span className="text-[#E5C9A8] text-xl font-bold">...</span>
              </div>
            );
          } else {
            return (
              <button 
                key={`slot-${idx}`} 
                onClick={() => handleDeselect(idx)}
                className={`h-14 px-5 rounded-xl font-arabic text-2xl shadow-sm transition-all transform flex items-center justify-center ${
                  isFixed 
                    ? "bg-[#EBE6DF] text-[#764C28] border border-[#D1C4B7] cursor-default opacity-80 shadow-none" 
                    : (isChecked 
                        ? (isCorrect ? "bg-emerald-600 text-white border-emerald-700 cursor-default" : "bg-red-500 text-white border-red-600 cursor-default")
                        : "bg-white text-[#4A3018] hover:bg-[#F8F1E7] hover:-translate-y-1 hover:shadow-md border border-[#E5C9A8] active:scale-95"
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

      {/* 選択肢エリア */}
      <div className="flex flex-wrap gap-3 justify-center mb-10 relative z-10" dir="rtl">
        {availableWords.map((word, idx) => (
          <button 
            key={`avail-${idx}`} 
            onClick={() => handleSelect(word, idx)}
            className="px-5 py-3 bg-[#F8F1E7] text-[#5E3C1E] rounded-xl font-arabic text-2xl shadow-sm border border-[#D4A373] hover:border-[#8A5A33] hover:bg-white transition-all transform hover:-translate-y-1 active:scale-95"
            disabled={isChecked}
          >
            {word}
          </button>
        ))}
      </div>

      {/* 判定結果 */}
      <div className="relative z-10">
        {isChecked ? (
          <div className="animate-fade-in-up">
            <div className={`p-6 rounded-2xl mb-8 border-2 shadow-inner flex flex-col items-center ${isCorrect ? "bg-[#F2FCF5] border-emerald-300 text-emerald-900" : "bg-[#FFF5F5] border-red-200 text-red-900"}`}>
              <p className="font-bold text-2xl mb-3 flex items-center gap-2">
                 {isCorrect ? <><PartyPopper size={28}/> Excellent!</> : <><Frown size={28}/> Try Again...</>}
              </p>
              {(!isCorrect && showAnswer) || isCorrect ? (
                  <div className="text-3xl font-arabic text-center mt-6 mb-4 leading-loose drop-shadow-sm" dir="rtl">
                      {(question.correctOrder || []).join(" ")}
                  </div>
              ) : null}
              <p className="text-sm opacity-90 text-left mt-4 whitespace-pre-wrap font-medium w-full" dir="ltr">
                {question.explanation}
              </p>
              {!isCorrect && !showAnswer && (
                  <div className="flex gap-3 mt-6 w-full">
                      <button onClick={() => {
                          setIsChecked(false); 
                          const initialSlots = (question.correctOrder || []).map((w: string, i: number) => fixedIndices.includes(i) ? w : null);
                          setSlots(initialSlots);
                          const unfixedCorrectWords = (question.correctOrder || []).filter((_: any, i: number) => !fixedIndices.includes(i));
                          setAvailableWords([...unfixedCorrectWords, ...(question.distractors || [])].sort(()=>Math.random()-0.5));
                      }} className="flex-1 bg-white border-2 border-red-200 text-red-700 py-3 rounded-xl text-sm font-bold hover:bg-red-50 active:scale-95 transition-all shadow-sm">
                        やり直す
                      </button>
                      <button onClick={() => setShowAnswer(true)} className="flex-1 bg-red-100 text-red-800 py-3 rounded-xl text-sm font-bold hover:bg-red-200 active:scale-95 transition-all shadow-sm">
                        正解を見る
                      </button>
                  </div>
              )}
            </div>
            <button onClick={onNext} className="w-full bg-gradient-to-r from-[#8A5A33] to-[#5E3C1E] text-white font-bold py-5 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all text-lg flex items-center justify-center gap-2">
              {isLast ? "結果を見る" : "次の問題へ"} <ChevronRight size={20}/>
            </button>
          </div>
        ) : (
           <button onClick={checkAnswer} disabled={slots.includes(null)} className={`w-full font-bold py-5 rounded-2xl shadow-lg transition-all transform text-lg ${slots.includes(null) ? "bg-[#EBE6DF] text-[#BBAFA0] cursor-not-allowed border border-[#D1C4B7]" : "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:shadow-xl hover:-translate-y-1 active:scale-95 border-none"}`}>
             答え合わせ
           </button>
        )}
      </div>
    </div>
  );
}