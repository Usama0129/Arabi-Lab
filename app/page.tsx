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
  Loader2, PartyPopper, Frown, MessageSquare, Plus, ChevronRight, Video,
  HelpCircle,
  Bell,
  Instagram
} from 'lucide-react';

// --- Types ---
type Screen = "notifications" | "main_menu" | "levels_sub" | "topics" | "list" | "mode_select" | "reader" | "quiz" | "result" | "vocab" | "flashcard" | "dictation" | "mypage" | "eras" | "era_desc" | "poets" | "poetry_read" | "phrases_list" | "phrase_detail" | "vocab_quiz_select" | "vocab_quiz" | "vocab_quiz_result" | "vocab_my_quiz_select";
type LearningMode = "reading" | "listening" | "dictation" | "grammar";
type CourseType = "grammar" | "conversation" | "reading" | "listening" | "poetry" | "phrase" | "reorder" | "story";
type StudyBreakdown = { reading: number; listening: number; dictation: number; vocab: number; grammar: number; poetry: number };

type SubscriptionInfo = {
  plan: "Free" | "Premium";
  status: "active" | "canceled" | "past_due";
  startDate: string;
  nextPayment: string;
  amount: number;
};
type AppNotification = {
  id: string;
  created_at: string;
  title: string;
  content: string;
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
// ★ 文法セクションの3段階レベル定義
type GrammarLevelTab = "core" | "standard" | "master";

const GRAMMAR_LEVEL_TABS: {
  id: GrammarLevelTab;
  label: string;
  badge: string;
  title: string;
  desc: string;
}[] = [
  {
    id: "core",
    label: "🌱 ちょこっと勉強",
    badge: "まずはここから！",
    title: "難しい動詞を除いた、ちょっとした文が読めるレベル",
    desc: "文字の読み書きから、代名詞・疑問詞・名詞文の基本ルールまで。複雑な動詞の活用を後回しにして、最短でアラビア語の文の仕組みを掴みます。このレベルが終わる頃には、『この素敵なテーブルの下に猫がいます』や『あの大きな木の上には、美しい鳥たちがいます』などの文章を作ることができます。"
  },
  {
    id: "standard",
    label: "🌿 じっくり勉強",
    badge: "表現を広げる！",
    title: "動詞を含んだ実用的な文が読めるレベル",
    desc: "過去形・現在形などの動詞の基本活用や頻出構文をプラス。日常のやり取りや短いストーリーのあらすじが読めるようになります。"
  },
  {
    id: "master",
    label: "🌳 マスター",
    badge: "完全網羅！",
    title: "細かい文法ルールや高度な表現まで極めるレベル",
    desc: "双数形・数詞・派生形・厳密な格変化など、アラビア語（フスハー）のすべての文法項目を網羅的にマスターします。"
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
      <div className="bg-[#3E2713] text-white relative overflow-hidden h-[600px] flex flex-col justify-center items-center">
        <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none flex flex-col justify-around z-0 overflow-hidden" dir="rtl">
           {[...Array(5)].map((_, i) => (
             <div key={i} className="whitespace-nowrap text-[8rem] md:text-[10rem] font-arabic leading-none animate-scroll-text text-[#E5C9A8]" style={{ animationDuration: `${40 + i * 10}s`, opacity: 0.2 + (i * 0.1) }}>
               {`\u200F${MUTANABBI_POEM}\u200F`.repeat(10)}
             </div>
           ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#4A3018]/60 via-[#3E2713]/80 to-[#2C1A0D] z-1"></div>
        
        <div className="max-w-4xl mx-auto px-6 py-10 relative z-10 text-center">
          <div className="inline-block bg-[#8A5A33]/40 px-5 py-1.5 rounded-full text-[10px] font-bold tracking-widest mb-6 border border-[#A67144]/40 backdrop-blur-sm text-amber-100 shadow-sm">
            ARABIC LEARNING PLATFORM
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 leading-tight drop-shadow-xl text-white">
            アラビア語を、<br />
            <span className="text-amber-500">もっと身近に。</span>
          </h1>
          <h2 className="text-lg md:text-2xl font-serif font-bold text-[#F8F1E7]/90 mb-8 drop-shadow-md tracking-wide">
            『暗号』が『言葉』に変わる感動を Arabi Labで
          </h2>
          <p className="text-base md:text-lg text-[#E5C9A8] mb-12 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow">
            基礎文法から日常会話、ニュース読解、<br className="hidden md:block"/>
            そして物語や千年の歴史を持つアラビア語詩まで。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={onLogin} className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-[#2C1A0D] font-bold rounded-full shadow-xl hover:brightness-110 hover:scale-105 transition transform flex items-center justify-center gap-2.5 border border-amber-300">
              <span className="w-6 h-6 rounded-full bg-white/60 text-[#2C1A0D] font-black text-xs flex items-center justify-center shadow-inner">G</span> Googleで今すぐ始める
            </button>
            <button onClick={onGuestStart} className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-[#8A5A33] text-[#FDFCF8] font-bold rounded-full hover:bg-[#4A3018]/80 hover:border-[#A67144] transition backdrop-blur-sm">
              登録せずに試す
            </button>
          </div>
        </div>
      </div>

      {/* 3つの特徴セクション */}
      <div className="bg-white py-16 border-b border-stone-100">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-stone-100">
               <div className="p-4 flex flex-col items-center">
                  <Library className="text-[#8A5A33] mb-4" size={40} strokeWidth={1.5} />
                  <h3 className="font-bold text-[#4A3018] text-lg mb-2">圧倒的な網羅性</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">基礎文法からニュース読解、日常会話、そして古典詩まで。あなたの「学びたい」がここにあります。</p>
               </div>
               <div className="p-4 flex flex-col items-center">
                  <Pencil className="text-[#8A5A33] mb-4" size={40} strokeWidth={1.5} />
                  <h3 className="font-bold text-[#4A3018] text-lg mb-2">1000問以上の演習</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">豊富なクイズと書き取り演習で、知識を「知っている」から「使える」レベルへと引き上げます。</p>
               </div>
               <div className="p-4 flex flex-col items-center">
                  <CreditCard className="text-[#8A5A33] mb-4" size={40} strokeWidth={1.5} />
                  <h3 className="font-bold text-[#4A3018] text-lg mb-2">高いコストパフォーマンス</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">教材1冊分の価格で、これらすべてのデジタル教材が学び放題。効率的で経済的な学習を支えます。</p>
               </div>
            </div>
         </div>
      </div>

      {/* 学習コンテンツセクション */}
      <div className="bg-[#FDFCF8] py-24 border-b border-stone-100">
         <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-serif font-bold text-[#4A3018] mb-4">多彩な学習アプローチ</h2>
               <p className="text-[#8A5A33] text-sm font-medium">読む、聞く、解く。多角的なアプローチでアラビア語の真髄に触れる。</p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
               {[
                  { icon: Puzzle, title: "文法体系の網羅", desc: "文字の基本から、一般的な教材では触れられない高度な構文までを体系的に解説。盤石な基礎を築きます。" },
                  { icon: MessageCircle, title: "実戦会話", desc: "レストラン、買い物、ビジネス。現地で遭遇するリアルな場面を想定した、即戦力の表現を習得。" },
                  { icon: BookOpen, title: "多読・精読", desc: "短文から、母音記号のない高度な長文読解まで。レベルに応じたステップアップで、読解力を着実に養成。" },
                  { icon: Headphones, title: "聴解トレーニング", desc: "ネイティブの自然な発音に耳を慣らす。レベル別リスニング課題で、聞き取りの壁を突破します。" },
                  { icon: ArrowRightLeft, title: "語順・構文演習", desc: "アラビア語独特の語順を体得する並び替え問題。パズルのように解くことで、文法感覚を鋭くします。" },
                  { icon: Lightbulb, title: "現代の口語と標準語", desc: "格調高いフスハー（標準語）と、サウジアラビアなどで実際に話されるアンミーヤ（方言）の両輪をカバー。" },
                  { icon: Library, title: "物語の世界", desc: "馴染み深い童話や世界の伝説をアラビア語で。物語の力で、語彙と表現を楽しく、深く定着させます。" },
                  { icon: Sparkles, title: "習熟度別テスト", desc: "自分のレベルを客観的に把握する。各段階に合わせた単語テストで、学習の成果を可視化します。" },
                  { icon: ScrollText, title: "不朽の古典詩", desc: "1000年以上の時を超えて愛される詩篇。原文の美しさと響きをそのままに、アラブ文学の頂点を味わう。" }
               ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center group">
                     <div className="bg-[#F8F1E7] p-5 rounded-[2rem] mb-6 text-[#8A5A33] group-hover:bg-[#8A5A33] group-hover:text-white transition-all duration-500 shadow-sm">
                        <item.icon size={32} strokeWidth={1.5} />
                     </div>
                     <h3 className="font-bold text-[#4A3018] text-lg mb-3">{item.title}</h3>
                     <p className="text-sm text-gray-500 leading-relaxed px-2">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>

      {/* プラン比較セクション */}
      <div className="bg-[#F5F0E6] py-24">
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
                <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="text-[#A67144]" size={16}/> 各セクションの一部コンテンツへのアクセス</li>
                <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="text-[#A67144]" size={16}/> 文法・単語の基礎トレーニング</li>
                <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="text-[#A67144]" size={16}/> <b>自分専用の単語帳・フラッシュカード機能</b></li>
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
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-2 text-sm text-amber-50 font-medium"><Sparkles className="text-amber-400" size={16}/> <b>物語・詩を含むすべてのコンテンツへフルアクセス</b></li>
                <li className="flex items-center gap-2 text-sm text-amber-50 font-medium"><Sparkles className="text-amber-400" size={16}/> 全レベル・1000問以上の演習を制限なく利用可能</li>
              </ul>
              <button onClick={onLogin} className="w-full py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-[#3E2713] font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition transform">
                プレミアムで登録する
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="bg-[#2C1A0D] text-[#D4A373] py-10 text-center text-xs mt-auto">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-8 mb-6">
          <Link href="/faq" className="hover:text-amber-400 transition-colors font-medium">よくある質問</Link>
          <Link href="/terms" className="hover:text-amber-400 transition-colors font-medium">利用規約</Link>
          <Link href="/privacy" className="hover:text-amber-400 transition-colors font-medium">プライバシーポリシー</Link>
          <Link href="/law" className="hover:text-amber-400 transition-colors font-medium">特定商取引法に基づく表記</Link>
          
          <a 
            href="https://www.instagram.com/arabi_lab/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-amber-400 transition-colors flex items-center gap-1 font-medium"
            title="Instagram"
          >
            <Instagram size={16} /> Instagram
          </a>
        </div>
        <p className="opacity-40 font-serif tracking-widest">&copy; 2024 Arabi Lab. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default function Home() {
  // --- State群 ---
  const [allArticles, setAllArticles] = useState<(Article & { videoUrl?: string; imageUrls?: string[] })[]>(articles); 
  const [savedVocab, setSavedVocab] = useState<{word: string, meaning: string}[]>([]); 
  const [user, setUser] = useState<any>(null);
  const [isPremium, setIsPremium] = useState(false); 
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [showLandingPage, setShowLandingPage] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [completedArticleIds, setCompletedArticleIds] = useState<number[]>([]);
  const [subscription, setSubscription] = useState<SubscriptionInfo | null>(null);
  const [notifications, setNotifications] = useState<AppNotification[]>([]);

  // --- 単語クイズ・自作テスト用のState ---
  const [vocabQuizMode, setVocabQuizMode] = useState<{
    level: string;
    direction: "ar_to_ja" | "ja_to_ar";
  }>({ level: "初級", direction: "ar_to_ja" });
  const [vocabQuizQuestions, setVocabQuizQuestions] = useState<any[]>([]);
  const [currentVocabIdx, setCurrentVocabIdx] = useState(0);
  const [vocabQuizScore, setVocabQuizScore] = useState(0);
  const [isVocabQuizChecked, setIsVocabQuizChecked] = useState(false);
  const [selectedVocabOption, setSelectedVocabOption] = useState<number | null>(null);
  const [newArabic, setNewArabic] = useState(""); 
  const [newJapanese, setNewJapanese] = useState(""); 
  const [vocabQuizOrder, setVocabQuizOrder] = useState<"latest" | "random">("latest");
  const [isAddingWord, setIsAddingWord] = useState(false);

  // --- 画面・学習モード管理 ---
  const [currentScreen, setCurrentScreen] = useState<Screen>("main_menu");
  const [courseType, setCourseType] = useState<CourseType | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [grammarTab, setGrammarTab] = useState<GrammarLevelTab>("core");
  const [selectedEraId, setSelectedEraId] = useState<string | null>(null);
  const [activeArticle, setActiveArticle] = useState<Article & { videoUrl?: string; imageUrls?: string[] } | null>(null);
  const [learningMode, setLearningMode] = useState<LearningMode>("reading");
  const [activeProblemNumber, setActiveProblemNumber] = useState<number>(0);

  // --- クイズ・演習・音声State ---
  const [quizScore, setQuizScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [grammarQuestions, setGrammarQuestions] = useState<QuizQuestion[]>([]); 
  const [quizSelectedOption, setQuizSelectedOption] = useState<number | null>(null);
  const [isQuizResultVisible, setIsQuizResultVisible] = useState(false);
  const [userAnswers, setUserAnswers] = useState<boolean[]>([]);
  const [isQuizTextVisible, setIsQuizTextVisible] = useState(false);
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
  const [audioState, setAudioState] = useState<"idle" | "playing" | "paused">("idle");
  const [currentAudioIndex, setCurrentAudioIndex] = useState<number>(0);
  const audioIndexRef = useRef<number>(0);
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);
  const [streak, setStreak] = useState(0);
  const [stats, setStats] = useState({ today: 0, month: 0, total: 0 });
  const [breakdown, setBreakdown] = useState<StudyBreakdown>({ reading: 0, listening: 0, dictation: 0, vocab: 0, grammar: 0, poetry: 0 });
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);
  const ttsCacheRef = useRef<Map<string, string>>(new Map());
  const [jumpHistory, setJumpHistory] = useState<{screen: Screen, article: any, mode: LearningMode} | null>(null);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);
  const SPEED_OPTIONS = [0.5, 0.75, 1.0, 1.25, 1.5];
  const [showJapaneseModal, setShowJapaneseModal] = useState(false);
  const [isAudioBarVisible, setIsAudioBarVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // ページ最上部付近では常に表示
      if (currentScrollY < 40) {
        setIsAudioBarVisible(true);
      } else if (currentScrollY > lastScrollYRef.current + 6) {
        // 下にスクロールしたら隠す（速度メニューも閉じる）
        setIsAudioBarVisible(false);
        setShowSpeedMenu(false);
      } else if (currentScrollY < lastScrollYRef.current - 6) {
        // 上にスクロールしたら表示する
        setIsAudioBarVisible(true);
      }
      lastScrollYRef.current = currentScrollY;
    };
  
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const handleSpeedChange = (speed: number) => {
    setPlaybackRate(speed);
    if (currentAudioRef.current) {
      currentAudioRef.current.playbackRate = speed;
    }
  };

  const cyclePlaybackRate = () => {
    const currentIndex = SPEED_OPTIONS.indexOf(playbackRate);
    const nextIndex = (currentIndex + 1) % SPEED_OPTIONS.length;
    handleSpeedChange(SPEED_OPTIONS[nextIndex]);
  };

  // --- 補助関数群 ---
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

  // 公式単語クイズ生成
  const generateVocabQuiz = (level: string, direction: "ar_to_ja" | "ja_to_ar") => {
    const vocabDataArticles = allArticles.filter(a => a.category === "単語データ");
    let pool = vocabDataArticles.filter(a => level === "shuffle" ? true : a.level === level).flatMap(a => a.vocabList || []);
    if (pool.length < 4) { alert("単語データが足りません。"); return; }
    const shuffledPool = [...pool].sort(() => 0.5 - Math.random());
    const selected = shuffledPool.slice(0, Math.min(shuffledPool.length, 30));
    const questions = selected.map(target => {
      const distractors = pool.filter(v => v.word !== target.word && v.meaning !== target.meaning).sort(() => 0.5 - Math.random()).slice(0, 3);
      const options = [target, ...distractors].sort(() => 0.5 - Math.random());
      return { target, options, correctIdx: options.findIndex(o => o.word === target.word) };
    });
    setVocabQuizQuestions(questions);
    setCurrentVocabIdx(0);
    setVocabQuizScore(0);
    setIsVocabQuizChecked(false);
    setSelectedVocabOption(null);
    changeScreen("vocab_quiz");
  };

  // 自作単語テスト生成
  const generateMyVocabQuiz = () => {
    if (savedVocab.length < 4) {
      alert("\u200Fعفواً\u200F（すみません）テストには最低4語の登録が必要です。");
      return;
    }

    let pool = [...savedVocab];
    let selected = vocabQuizOrder === "random" 
      ? [...pool].sort(() => 0.5 - Math.random()).slice(0, 30) 
      : [...pool].slice(0, 30);

    const questions = selected.map(target => {
      const distractors = pool
        .filter(v => v.word !== target.word && v.meaning !== target.meaning)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      const options = [target, ...distractors].sort(() => 0.5 - Math.random());
      return { 
        target, 
        options, 
        correctIdx: options.findIndex(o => o.word === target.word) 
      };
    });

    setVocabQuizQuestions(questions);
    setCurrentVocabIdx(0);
    setVocabQuizScore(0);
    setIsVocabQuizChecked(false);
    setSelectedVocabOption(null);
    changeScreen("vocab_quiz");
  };

  // フラッシュカードテスト開始処理
  const startFlashcardTest = (isReverse: boolean) => {
    if (savedVocab.length === 0) {
      alert("テストする単語が登録されていません。");
      return;
    }
    setFcReverse(isReverse);
    setFcIndex(0);
    setFcFlipped(false);
    changeScreen("flashcard");
  };

  // --- 全セクション無料枠コントロール ---
  const FREE_ARTICLE_IDS = [
    501, 502, 503, 504, 505, 506,
    4000,
    20000
  ];

  const isLockedContent = (article: Article) => {
    if (isPremium) return false;
    if (FREE_ARTICLE_IDS.includes(article.id)) return false;
    if (article.id >= 20000 && article.id <= 20500) return true;
    if (article.id >= 4000 && article.id <= 5000) return true;
    if (article.id >= 10001 && article.id <= 11000) {
      if (article.level === "初級") {
        const freeTitles = ["初級1", "初級2", "初級3"];
        return !freeTitles.includes(article.title);
      }
      return true;
    }
    if (article.level === "1フレーズ") {
      return article.category !== "フスハー";
    }
    if (article.level === "文法") {
      return article.id > 108;
    }
    if (article.level === "会話") {
      return article.category !== "ホテル"; 
    }
    if (article.id >= 2000 && article.id <= 2999) {
      return article.id !== 2000;
    }
    if (article.id >= 3000 && article.id <= 3999) {
      const freeBeginnerCats = ["自己紹介", "日常"];
      return !freeBeginnerCats.includes(article.category);
    }
    if (article.level === "中級" && (article.id >= 200 && article.id <= 999)) {
      return true;
    }
    if (article.level === "上級" && (article.id >= 1000 && article.id <= 1999)) {
      return true;
    }
    return true;
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
    const fetchNotifications = async () => {
      const { data, error } = await supabase
        .from('notifications')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) {
        setNotifications(data);
      }
    };
    fetchNotifications();
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
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      if (currentUser) { 
          fetchProfile(currentUser.id); 
          fetchVocab(currentUser.id);
          setShowLandingPage(false); 
      } else { 
          setIsPremium(false); 
          setSavedVocab(JSON.parse(localStorage.getItem("arabicApp_vocab") || "[]")); 
          setShowLandingPage(true); 
      }
      setIsLoading(false); 
    };
    initUser();
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      if (currentUser) { 
          fetchProfile(currentUser.id); 
          fetchVocab(currentUser.id);
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

  const handleOpenCustomerPortal = async () => {
    if (!user) return;
    try {
      const res = await fetch('/api/portal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('ポータルを開けませんでした: ' + (data.error || '不明なエラー'));
      }
    } catch (err) {
      console.error(err);
      alert('エラーが発生しました');
    }
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
    const updatedVocab = [newWord, ...savedVocab];
    setSavedVocab(updatedVocab);
    setRevealedVocabIndex(null);

    if (user) {
      await supabase.from('vocab').insert({ user_id: user.id, word, meaning });
    } else {
      localStorage.setItem("arabicApp_vocab", JSON.stringify(updatedVocab));
    }
  };

  const deleteWord = async (wordToDelete: string) => {
    const updatedVocab = savedVocab.filter(v => v.word !== wordToDelete);
    setSavedVocab(updatedVocab);

    if (user) {
      await supabase.from('vocab').delete().match({ user_id: user.id, word: wordToDelete });
    } else {
      localStorage.setItem("arabicApp_vocab", JSON.stringify(updatedVocab));
    }
  };

  // ★【ここに追加】チェックのON/OFFを切り替えてlocalStorageと同期する関数
  const toggleComplete = (articleId: number, e: React.MouseEvent) => {
    e.stopPropagation(); // レッスン詳細への画面遷移を防止
    let nextIds: number[];
    if (completedArticleIds.includes(articleId)) {
      nextIds = completedArticleIds.filter(id => id !== articleId);
    } else {
      nextIds = [...completedArticleIds, articleId];
    }
    setCompletedArticleIds(nextIds);
    localStorage.setItem("arabicApp_completed", JSON.stringify(nextIds));
  };

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
        const firstCat = allArticles.find(a => a.level === "会話")?.category || "";
        setSelectedCategory(firstCat);
        changeScreen("topics");
      } else if (type === "reading") {
        setSelectedLevel("初級");
        // ★ videoUrl が存在しない（空文字または未定義）ものだけに限定
        const firstLvArts = allArticles.filter(a =>
          a.level === "初級" &&
          !a.videoUrl?.trim() &&
          a.category !== "並び替え" &&
          a.category !== "単語データ"
        );
        const firstCats = Array.from(new Set(firstLvArts.map(a => a.category)));
        setSelectedCategory(firstCats[0] || "");
        changeScreen("topics");
    // ==========================================
    // ★ リスニング（listening）の場合も直接 topics へ直行させる
    // ==========================================
    } else if (type === "listening") {
        setSelectedLevel("初級");
        changeScreen("topics");
    } else if (type === "poetry") {
        changeScreen("eras");
    } else if (type === "phrase") {
        changeScreen("levels_sub");
    } else if (type === "story") {
        setSelectedCategory("物語");
        changeScreen("list");
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
        if (courseType === "grammar") {
          if (a.level !== "文法") return false;
          const imp = a.importance || "core"; // 未設定の項目は仮で "core" 扱い
          if (grammarTab === "core") return imp === "core";
          if (grammarTab === "standard") return imp === "core" || imp === "standard";
          return true; // "master" は全項目を表示
        }
        if (courseType === "conversation") return a.level === "会話";
        if (courseType === "phrase") return a.level === "1フレーズ";
        if (courseType === "reorder") return a.category === "並び替え" && a.level === selectedLevel;
        if (courseType === "story") return a.level === "物語"; 
        if (courseType === "poetry") {
            const era = POETRY_ERAS.find(e => e.id === selectedEraId);
            return a.level === "Poetry" && (era ? a.category === era.name : true);
        }
        if (courseType === "listening") {
          return Boolean(a.videoUrl && a.videoUrl.trim().length > 0) && a.level === selectedLevel;
      }
      if (courseType === "reading") {
          if (a.level === "文法" || a.level === "Poetry" || a.level === "1フレーズ" || a.category === "並び替え" || a.category === "単語データ" || a.level === "物語" || a.level === "会話") return false; 
          if (a.level !== selectedLevel) return false;
          // ★ videoUrl がないものだけを読解とする
          return !a.videoUrl || a.videoUrl.trim() === "";
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
    } else if (courseType === "conversation") {
      setLearningMode("reading");
      changeScreen("reader");
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
        setJumpHistory({ screen: currentScreen, article: activeArticle, mode: learningMode });
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
      setGrammarQuestions(qs); setCurrentQuestionIndex(0); changeScreen("reader");
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
    setIsQuizTextVisible(false);
    changeScreen("quiz"); 
  };

  const handleQuizOptionClick = (index: number) => {
    if (isQuizResultVisible || !activeArticle) return;
    setQuizSelectedOption(index); 
    setIsQuizResultVisible(true);
    const isCorrect = index === activeArticle.questions[currentQuestionIndex].correctIndex;
    if (isCorrect) { 
      setQuizScore(prev => prev + 1); 
      speakText("\u200Fمُمْتَاز\u200F");
    }
    setUserAnswers(prev => {
      const next = [...prev];
      next[currentQuestionIndex] = isCorrect;
      return next;
    });
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

  const prevQuizQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setQuizSelectedOption(null);
      setIsQuizResultVisible(false);
      window.scrollTo(0, 0);
    }
  };

  const skipQuizQuestion = () => {
    if (!activeArticle) return;
    setUserAnswers(prev => {
      const next = [...prev];
      next[currentQuestionIndex] = false;
      return next;
    });
    setQuizSelectedOption(null);
    setIsQuizResultVisible(false);
    
    if (currentQuestionIndex < activeArticle.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      window.scrollTo(0, 0);
    } else {
      changeScreen("result");
    }
  };
  const checkDictation = () => { if (normalizeArabic(dictationInput) === targetWordClean) setDictationFeedback("correct"); else setDictationFeedback("incorrect"); };
  const nextDictation = () => { if (!activeArticle) return; if (dictationIndex < activeArticle.sentences.length - 1) { const nextIdx = dictationIndex + 1; setDictationIndex(nextIdx); generateDictationProblem(activeArticle, nextIdx); window.scrollTo(0,0); } else changeScreen("result"); };
    
  const getAudioUrl = async (rawText: string): Promise<string | null> => {
    const cleanText = (rawText || "").replace(/[\u200F\u200E]/g, '').trim();
    if (!cleanText) return null;

    if (ttsCacheRef.current.has(cleanText)) {
      return ttsCacheRef.current.get(cleanText)!;
    }

    try {
      const res = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: cleanText, speed: playbackRate }),
      });
      if (!res.ok) throw new Error("TTS API request failed");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      ttsCacheRef.current.set(cleanText, url);
      return url;
    } catch (err) {
      console.error("OpenAI TTS Error:", err);
      return null;
    }
  };

  const stopSpeaking = () => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
      currentAudioRef.current.onended = null;
      currentAudioRef.current.onerror = null;
      currentAudioRef.current = null;
    }
    setAudioState("idle");
  };

  const speakText = async (text: string, _speaker?: string) => {
    stopSpeaking();
    const url = await getAudioUrl(text);
    if (!url) return;

    const audio = new Audio(url);
    audio.playbackRate = playbackRate;
    currentAudioRef.current = audio;

    audio.onended = () => {
      setAudioState("idle");
      currentAudioRef.current = null;
    };
    audio.onerror = () => {
      setAudioState("idle");
      currentAudioRef.current = null;
    };

    setAudioState("playing");
    await audio.play().catch(() => setAudioState("idle"));
  };

  const playFromSentenceIndex = (index: number) => {
    if (audioState === "playing" && currentAudioIndex === index) {
      if (currentAudioRef.current) {
        currentAudioRef.current.pause();
      }
      setAudioState("paused");
      return;
    }

    if (audioState === "paused" && currentAudioIndex === index && currentAudioRef.current) {
      currentAudioRef.current.playbackRate = playbackRate;
      currentAudioRef.current.play();
      setAudioState("playing");
      return;
    }

    startSequencePlayback(index);
  };

  const handleTogglePlay = () => {
    if (audioState === "playing") {
      if (currentAudioRef.current) {
        currentAudioRef.current.pause();
      }
      setAudioState("paused");
    } else if (audioState === "paused") {
      if (currentAudioRef.current) {
        currentAudioRef.current.playbackRate = playbackRate;
        currentAudioRef.current.play();
        setAudioState("playing");
      } else {
        startSequencePlayback(audioIndexRef.current);
      }
    } else {
      startSequencePlayback(currentAudioIndex || 0);
    }
  };

  const handleStopPlayback = () => {
    stopSpeaking();
    setCurrentAudioIndex(0);
    audioIndexRef.current = 0;
  };

  const handlePrevSentence = () => {
    const maxLen = activeArticle?.sentences?.length || 0;
    if (maxLen === 0) return;
    const newIdx = Math.max(0, currentAudioIndex - 1);
    startSequencePlayback(newIdx);
  };

  const handleNextSentence = () => {
    const maxLen = activeArticle?.sentences?.length || 0;
    if (maxLen === 0) return;
    const newIdx = Math.min(maxLen - 1, currentAudioIndex + 1);
    startSequencePlayback(newIdx);
  };

  const startSequencePlayback = async (startIndex: number) => {
    stopSpeaking();
    if (!activeArticle) return;

    if (activeArticle.sentences && activeArticle.sentences.length > 0) {
      const sentences = activeArticle.sentences;
      audioIndexRef.current = startIndex;
      setCurrentAudioIndex(startIndex);
      setAudioState("playing");

      const playNext = async () => {
        if (audioIndexRef.current >= sentences.length) {
          setAudioState("idle");
          setCurrentAudioIndex(0);
          audioIndexRef.current = 0;
          return;
        }

        const currentSent = sentences[audioIndexRef.current];
        setCurrentAudioIndex(audioIndexRef.current);

        const url = await getAudioUrl(currentSent.arabic);
        if (!url) {
          setAudioState("idle");
          return;
        }

        const audio = new Audio(url);
        audio.playbackRate = playbackRate;
        currentAudioRef.current = audio;

        audio.onended = () => {
          audioIndexRef.current++;
          playNext();
        };
        audio.onerror = () => {
          setAudioState("idle");
        };

        await audio.play().catch(() => setAudioState("idle"));
      };

      playNext();
    } else {
      const rawText = activeArticle.level === "上級"
        ? (activeArticle.contentPlain || removeTashkeel(activeArticle.contentVoweled || ""))
        : (activeArticle.contentVoweled || activeArticle.contentPlain || "");

      const sentenceList = (rawText.match(/[^.؟!。\n]+[.؟!。\n]*/g) || [rawText]).map(s => s.trim()).filter(Boolean);
      if (sentenceList.length === 0) return;

      audioIndexRef.current = startIndex;
      setCurrentAudioIndex(startIndex);
      setAudioState("playing");

      const playNext = async () => {
        if (audioIndexRef.current >= sentenceList.length) {
          setAudioState("idle");
          setCurrentAudioIndex(0);
          audioIndexRef.current = 0;
          return;
        }

        const currentSent = sentenceList[audioIndexRef.current];
        setCurrentAudioIndex(audioIndexRef.current);

        const url = await getAudioUrl(currentSent);
        if (!url) {
          setAudioState("idle");
          return;
        }

        const audio = new Audio(url);
        audio.playbackRate = playbackRate;
        currentAudioRef.current = audio;

        audio.onended = () => {
          audioIndexRef.current++;
          playNext();
        };
        audio.onerror = () => {
          setAudioState("idle");
        };

        await audio.play().catch(() => setAudioState("idle"));
      };

      playNext();
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F5F0E6] flex flex-col items-center justify-center z-50">
        <Loader2 className="w-16 h-16 mb-6 text-[#A67144] animate-spin" />
        <span className="text-[#8A5A33] font-serif text-xl tracking-widest drop-shadow-md animate-pulse font-bold">Loading Arabi Lab...</span>
      </div>
    );
  }

  if (!user && showLandingPage) {
    return <LandingPage onLogin={handleLogin} onGuestStart={handleGuestStart} />;
  }

  // --- メインアプリ画面 ---
  return (
    <div className="min-h-screen bg-[#F5F0E6] font-sans text-gray-800 selection:bg-amber-200">
      {/* ナビゲーションバー */}
      <nav className="bg-[#3E2713] shadow-xl px-3 py-2.5 sticky top-0 z-20 border-b border-[#A67144]/40" dir="ltr">
        <div className="max-w-4xl mx-auto flex flex-col gap-2">
          
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => { changeScreen("main_menu"); setIsFlashcardMode(false); }}>
              <div className="bg-[#F5F0E6] p-1 rounded-xl shadow-md group-hover:scale-110 transition-all duration-300 border border-amber-500/50 flex-shrink-0">
                <img src="/logo.jpg" alt="Logo" className="h-9 w-auto object-contain rounded-lg" onError={(e) => {e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-9 h-9 bg-gradient-to-br from-[#8A5A33] to-[#4A3018] rounded-lg flex items-center justify-center text-white"><Tent size={18}/></div>';}} />
              </div>
              <h1 className="font-serif font-bold text-amber-50 text-lg tracking-wider hidden sm:block group-hover:text-amber-200 transition-colors">Arabi Lab</h1>
              
              <button 
                onClick={(e) => { 
                  e.stopPropagation();
                  changeScreen("notifications");
                }}
                className="relative p-1.5 text-amber-100 hover:text-amber-400 transition-all active:scale-90"
                title="お知らせ"
              >
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-[#3E2713]"></span>
              </button>
            </div>
      
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button 
                onClick={() => changeScreen("mypage")} 
                className="flex items-center justify-center w-9 h-9 bg-[#5E3C1E] hover:bg-[#764C28] text-amber-100 rounded-full transition-all shadow-sm border border-[#764C28]"
                title="マイページ"
              >
                <User size={16} />
              </button>

              <button 
                onClick={() => { changeScreen("vocab"); setIsFlashcardMode(false); }} 
                className="flex items-center gap-1.5 text-xs bg-gradient-to-br from-amber-400 to-amber-500 text-[#3E2713] px-3 py-2 rounded-full font-bold shadow-md hover:shadow-lg transition-all"
              >
                <Bookmark size={15} /> 
                <span className="text-xs font-bold">({savedVocab.length})</span>
              </button>

              {user ? (
                <button 
                  onClick={handleLogout} 
                  className="flex items-center gap-1 bg-[#5E3C1E] text-amber-50 px-2.5 py-1.5 rounded-full text-xs font-bold hover:bg-[#764C28] transition-all shadow-sm border border-[#764C28]"
                  title="ログアウト"
                >
                 {user.user_metadata?.avatar_url ? (
                    <img src={user.user_metadata.avatar_url} className="w-4 h-4 rounded-full border border-white/30" alt="icon" />
                  ) : (
                    <LogOut size={13}/>
                  )}
                  <span>ログアウト</span>
                </button>
              ) : (
                <button 
                  onClick={handleLogin} 
                  className="bg-amber-400/20 text-amber-100 border border-amber-400/40 px-3 py-1.5 rounded-full font-bold text-xs shadow-sm hover:bg-amber-400/30 transition-all flex items-center gap-1"
                >
                  <span>G</span> ログイン
                </button>
              )}
            </div>
          </div>

          {isPremium && (
            <div className="flex justify-center items-center w-full pt-1.5 border-t border-[#A67144]/30">
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 text-[#4A3018] text-xs font-bold px-4 py-0.5 rounded-full animate-pulse shadow-md border border-amber-200 flex items-center gap-1.5">
                👑 Premium Member
              </span>
            </div>
          )}

        </div>
      </nav>

      {/* メインエリア：最大幅を max-w-4xl に広げ、外枠なしで広々と表示 */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6 pb-24">
        
        {/* お知らせ画面 */}
        {currentScreen === "notifications" && (
          <div className="animate-fade-in-up pb-20">
            <HeaderBackButton onClick={() => changeScreen("main_menu")} />
            
            <div className="flex justify-between items-center mb-8 border-b-2 border-[#E5C9A8] pb-3">
              <h2 className="text-2xl font-serif font-bold text-[#4A3018]">お知らせ</h2>
              <Bell size={24} className="text-amber-500" />
            </div>

            <div className="divide-y divide-[#E5C9A8]">
              {notifications.length > 0 ? (
                notifications.map((n) => (
                  <div key={n.id} className="py-6 relative">
                    <p className="text-xs font-bold text-[#A67144] mb-1 uppercase tracking-widest">
                      {new Date(n.created_at).toLocaleDateString('ja-JP')}
                    </p>
                    <h3 className="font-bold text-[#4A3018] mb-2 text-lg">{n.title}</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {n.content}
                    </p>
                  </div>
                ))
              ) : (
                <div className="text-center py-16">
                  <p className="text-gray-400">現在、新しいお知らせはありません。</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* マイページ */}
        {currentScreen === "mypage" && (
          <div className="animate-fade-in-up pb-20">
            <HeaderBackButton onClick={() => changeScreen("main_menu")} />
            
            <div className="mb-6 flex justify-between items-end border-b-2 border-[#E5C9A8] pb-3">
              <h2 className="text-2xl font-serif font-bold text-[#4A3018]">マイページ</h2>
            </div>

            {user && (
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E5C9A8] mb-6 flex items-center gap-4" dir="ltr">
                <div>
                  {user.user_metadata?.avatar_url ? (
                    <img src={user.user_metadata.avatar_url} className="w-16 h-16 rounded-full border-2 border-[#E5C9A8]" alt="User" />
                  ) : (
                    <div className="w-16 h-16 bg-[#F8F1E7] rounded-full flex items-center justify-center text-[#8A5A33]"><User size={32} /></div>
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-bold text-lg text-[#4A3018]">{user.user_metadata?.full_name || "ゲストユーザー"}</p>
                    {isPremium ? 
                      <span className="text-[10px] bg-amber-400 text-amber-950 px-2 py-0.5 rounded-full font-bold">PREMIUM</span> : 
                      <span className="text-[10px] bg-stone-200 text-stone-600 px-2 py-0.5 rounded-full font-bold">FREE</span>
                    }
                  </div>
                  <p className="text-sm text-[#8A5A33] font-medium">{user.email}</p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-3 gap-3 mb-8 text-center" dir="ltr">
              <StatCard label="今日" value={formatTime(stats.today)} color="text-[#8A5A33]" />
              <StatCard label="今月" value={formatTime(stats.month)} color="text-indigo-800" />
              <StatCard label="総計" value={formatTime(stats.total)} color="text-amber-600" />
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-[#764C28] mb-3 text-sm flex items-center gap-2"><CreditCard size={18} /> サブスクリプション情報</h3>
              <div className="bg-white rounded-2xl shadow-sm border border-[#E5C9A8] overflow-hidden">
                {isPremium ? (
                  <div>
                    <div className="bg-gradient-to-r from-amber-400 to-[#D4A373] p-5 text-[#4A3018] flex justify-between items-center border-b border-amber-200">
                      <span className="font-bold text-lg flex items-center gap-2">👑 Premium Plan</span>
                    </div>
                    <div className="p-6 space-y-4 text-sm bg-white" dir="ltr">
                      <div className="flex justify-between items-center border-b border-[#F5F0E6] pb-4">
                        <span className="text-stone-500 font-medium">ステータス</span>
                        <span className="font-bold text-emerald-600 flex items-center gap-1">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span> 有効 (Active)
                        </span>
                      </div>
                      <div className="pt-2 text-center">
                        <button 
                          onClick={handleOpenCustomerPortal}
                          className="w-full py-3 bg-[#F8F1E7] border border-[#D4A373] text-[#764C28] text-xs font-bold rounded-xl hover:bg-[#EBE6DF] transition flex items-center justify-center gap-2 shadow-sm"
                        >
                          <CreditCard size={14} /> プラン管理・お支払い方法の変更・解約
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-6 text-center bg-stone-50">
                    <p className="text-stone-500 text-sm mb-6 font-medium">現在、無料プランをご利用中です。</p>
                    <button 
                      onClick={() => setShowUpgradeModal(true)}
                      className="w-full py-4 bg-gradient-to-r from-[#8A5A33] to-[#5E3C1E] text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Sparkles size={20} /> プレミアムにアップグレード
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-[#764C28] mb-3 text-sm flex items-center gap-2"><Settings size={18} /> 設定・サポート</h3>
              <div className="bg-white rounded-2xl shadow-sm border border-[#E5C9A8] divide-y divide-[#F5F0E6]">              
                <SettingItem icon={MessageSquare} label="お問い合わせ・サポート" onClick={() => window.open("mailto:arabilab1220@gmail.com", "_blank")} />
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-[#764C28] mb-3 text-sm flex items-center gap-2"><ScrollText size={18} /> 運営・規約</h3>
              <div className="bg-white rounded-2xl shadow-sm border border-[#E5C9A8] divide-y divide-[#F5F0E6]">
                <SettingItem icon={ScrollText} label="利用規約" onClick={() => window.open("/terms", "_blank")} />
                <SettingItem icon={CheckCircle} label="プライバシーポリシー" onClick={() => window.open("/privacy", "_blank")} />
                <SettingItem icon={Landmark} label="特定商取引法に基づく表記" onClick={() => window.open("/law", "_blank")} />
              </div>
            </div>
          </div>
        )}

        {/* 2. 単語クイズ設定画面 (外枠なし) */}
        {currentScreen === "vocab_quiz_select" && (
          <div className="animate-fade-in-up py-4">
            <HeaderBackButton onClick={() => changeScreen("main_menu")} />
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-8 text-[#4A3018] border-b-2 border-amber-400 pb-3 inline-block">単語クイズ設定</h2>
            <div className="space-y-8 text-left">
              <div>
                <p className="text-xs font-bold text-[#A67144] mb-3 tracking-widest uppercase">出題方向</p>
                <div className="flex gap-3">
                  {[{ id: "ar_to_ja", label: "アラビア語 → 日本語" }, { id: "ja_to_ar", label: "日本語 → アラビア語" }].map(d => (
                    <button key={d.id} onClick={() => setVocabQuizMode(prev => ({ ...prev, direction: d.id as any }))} className={`flex-1 py-4 px-3 rounded-xl font-bold text-sm border-2 transition-all flex items-center justify-center text-center ${vocabQuizMode.direction === d.id ? "bg-[#8A5A33] border-[#8A5A33] text-white shadow-md" : "bg-white border-[#E5C9A8] text-[#A67144]"}`}>{d.label}</button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-[#A67144] mb-3 tracking-widest uppercase">レベル</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {["初級", "中級", "上級", "shuffle"].map(lvl => (
                    <button key={lvl} onClick={() => setVocabQuizMode(prev => ({ ...prev, level: lvl }))} className={`py-4 rounded-xl font-bold text-sm border-2 transition-all ${vocabQuizMode.level === lvl ? "bg-[#D4A373] border-[#D4A373] text-white shadow-md" : "bg-white border-[#E5C9A8] text-[#A67144]"}`}>{lvl === "shuffle" ? "混合テスト" : lvl}</button>
                  ))}
                </div>
              </div>
              <button onClick={() => generateVocabQuiz(vocabQuizMode.level, vocabQuizMode.direction)} className="w-full py-4 sm:py-5 bg-gradient-to-r from-[#8A5A33] to-[#5E3C1E] text-white font-bold rounded-2xl shadow-lg hover:brightness-110 active:scale-95 transition-all text-base sm:text-lg flex items-center justify-center gap-2">
                <Play size={20} fill="currentColor" /> テスト開始
              </button>
            </div>
          </div>
        )}

        {/* 3. 単語クイズ本番画面 (外枠なし) */}
        {currentScreen === "vocab_quiz" && vocabQuizQuestions.length > 0 && (
          <div className="animate-fade-in-up py-4">
            <div className="flex justify-between items-center mb-6">
              <HeaderBackButton onClick={() => changeScreen("vocab_quiz_select")} text="設定に戻る" />
              <span className="text-xs font-bold text-[#8A5A33] tracking-widest bg-white px-4 py-1.5 rounded-full border border-[#E5C9A8]">QUESTION {currentVocabIdx + 1} / {vocabQuizQuestions.length}</span>
            </div>
            
            <div className="text-center">
              {/* 問題の単語表示エリア */}
              <div className="py-10 px-4 mb-8 bg-white/80 rounded-2xl border border-[#E5C9A8] relative">
                <p className={`text-4xl sm:text-5xl font-bold text-[#3E2713] ${vocabQuizMode.direction === "ar_to_ja" ? "font-arabic leading-loose" : ""}`}>
                  {vocabQuizMode.direction === "ar_to_ja" ? `\u200F${vocabQuizQuestions[currentVocabIdx].target.word}\u200F` : vocabQuizQuestions[currentVocabIdx].target.meaning}
                </p>

                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    const target = vocabQuizQuestions[currentVocabIdx].target;
                    saveWord(target.word, target.meaning);
                  }}
                  className={`absolute top-4 right-4 p-2.5 rounded-full transition-all duration-300 shadow-sm border ${
                    savedVocab.some(v => v.word === vocabQuizQuestions[currentVocabIdx].target.word)
                    ? "bg-amber-500 text-white border-amber-600 scale-110"
                    : "bg-white text-amber-500 border-amber-200 hover:scale-110"
                  }`}
                  title="単語帳に追加"
                >
                  {savedVocab.some(v => v.word === vocabQuizQuestions[currentVocabIdx].target.word) 
                    ? <Check size={18} strokeWidth={3} /> 
                    : <Plus size={18} strokeWidth={3} />
                  }
                </button>
              </div>

              {/* 選択肢エリア */}
              <div className="grid grid-cols-1 gap-3">
                {vocabQuizQuestions[currentVocabIdx].options.map((opt: any, idx: number) => {
                  let btnClass = "bg-white border-[#E5C9A8] text-[#4A3018] hover:border-[#8A5A33]";
                  if (isVocabQuizChecked) {
                    if (idx === vocabQuizQuestions[currentVocabIdx].correctIdx) btnClass = "bg-emerald-50 border-emerald-500 text-emerald-900 shadow-md";
                    else if (idx === selectedVocabOption) btnClass = "bg-red-50 border-red-400 text-red-900 opacity-70";
                    else btnClass = "bg-stone-50 border-stone-200 text-stone-400 opacity-40";
                  }
                  return (
                    <button 
                      key={idx} 
                      disabled={isVocabQuizChecked} 
                      onClick={() => {
                        setSelectedVocabOption(idx);
                        setIsVocabQuizChecked(true);
                        if (idx === vocabQuizQuestions[currentVocabIdx].correctIdx) {
                          setVocabQuizScore(s => s + 1);
                          speakText("\u200Fمُمْتَاز\u200F");
                        }
                      }} 
                      className={`p-5 border-2 rounded-2xl font-bold text-lg transition-all flex items-center justify-between ${btnClass} ${vocabQuizMode.direction === "ja_to_ar" ? "font-arabic text-2xl" : ""}`}
                    >
                      <span>{vocabQuizMode.direction === "ar_to_ja" ? opt.meaning : `\u200F${opt.word}\u200F`}</span>
                      {isVocabQuizChecked && idx === vocabQuizQuestions[currentVocabIdx].correctIdx && <CheckCircle className="text-emerald-500" size={24} />}
                    </button>
                  );
                })}
              </div>

              {isVocabQuizChecked && (
                <div className="mt-8 space-y-4 animate-fade-in-up">
                  <div className="flex justify-center">
                    <button
                      onClick={() => speakText(vocabQuizQuestions[currentVocabIdx].target.word)}
                      className="flex items-center gap-2 bg-amber-100 border border-amber-300 text-amber-900 px-6 py-2.5 rounded-full text-sm font-bold shadow-sm hover:bg-amber-200 active:scale-95 transition-all"
                    >
                      <Volume2 size={18} /> 単語の発音を聞く
                    </button>
                  </div>
                  <button onClick={() => {
                    if (currentVocabIdx < vocabQuizQuestions.length - 1) {
                      setCurrentVocabIdx(c => c + 1);
                      setIsVocabQuizChecked(false);
                      setSelectedVocabOption(null);
                    } else {
                      changeScreen("vocab_quiz_result");
                    }
                  }} className="w-full py-5 bg-[#8A5A33] text-white font-bold rounded-2xl shadow-lg flex items-center justify-center gap-2 hover:bg-[#5E3C1E] active:scale-95 transition-all">
                    {currentVocabIdx < vocabQuizQuestions.length - 1 ? "次の問題へ" : "結果を見る"} <ChevronRight size={20} />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 4. 単語クイズ結果画面 (外枠なし) */}
        {currentScreen === "vocab_quiz_result" && (
          <div className="animate-fade-in-up text-center py-10">
            <div className="flex justify-center mb-6"><PartyPopper size={72} className="text-amber-500" /></div>
            <h2 className="text-3xl font-serif font-bold mb-2 text-[#4A3018]">テスト完了！</h2>
            <div className="text-7xl font-bold text-[#8A5A33] my-8">{vocabQuizScore} <span className="text-2xl text-[#D4A373] font-normal">/ {vocabQuizQuestions.length}</span></div>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <button onClick={() => generateVocabQuiz(vocabQuizMode.level, vocabQuizMode.direction)} className="flex-1 py-4 bg-[#8A5A33] text-white font-bold rounded-2xl shadow-lg hover:bg-[#5E3C1E] transition-all">もう一度挑戦</button>
              <button onClick={() => changeScreen("main_menu")} className="flex-1 py-4 bg-white border border-[#E5C9A8] text-[#764C28] font-bold rounded-2xl hover:bg-[#EBE6DF] transition-all">メニューに戻る</button>
            </div>
          </div>
        )}

        {/* 5. 単語帳画面 */}
        {currentScreen === "vocab" && (
          <div className="animate-fade-in-up pb-20">
            <HeaderBackButton onClick={() => changeScreen("main_menu")} />
            
            <div className="flex justify-between items-center mb-6 border-b-2 border-[#E5C9A8] pb-3">
              <h2 className="text-2xl font-serif font-bold text-[#4A3018]">マイ単語帳</h2>
              <span className="bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-xs font-bold border border-amber-200">
                {savedVocab.length} 語
              </span>
            </div>

            <div className="bg-white/70 p-5 sm:p-6 rounded-2xl border border-[#D4A373] mb-8">
              <h3 className="font-bold text-[#764C28] mb-4 flex items-center gap-2"><Plus size={18}/> 新しい単語を登録</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={newArabic}
                  onChange={(e) => setNewArabic(e.target.value)}
                  placeholder="アラビア語 (例: شُكْراً)"
                  className="flex-1 p-3.5 bg-white border border-[#E5C9A8] rounded-xl font-arabic text-xl focus:border-amber-500 outline-none"
                  dir="rtl"
                />
                <input
                  type="text"
                  value={newJapanese}
                  onChange={(e) => setNewJapanese(e.target.value)}
                  placeholder="日本語 (例: ありがとう)"
                  className="flex-1 p-3.5 bg-white border border-[#E5C9A8] rounded-xl font-medium focus:border-amber-500 outline-none"
                />
                <button
                  onClick={() => {
                    if(newArabic.trim() && newJapanese.trim()) {
                      saveWord(newArabic.trim(), newJapanese.trim());
                      setNewArabic("");
                      setNewJapanese("");
                    } else {
                      alert("アラビア語と日本語の両方を入力してください。");
                    }
                  }}
                  className="bg-[#8A5A33] text-white px-6 py-3.5 rounded-xl font-bold shadow-md hover:bg-[#5E3C1E] transition-colors whitespace-nowrap"
                >
                  追加する
                </button>
              </div>
            </div>

            {savedVocab.length > 0 && (
              <div className="mb-8">
                <p className="text-xs font-bold text-[#A67144] mb-3 tracking-widest uppercase flex items-center gap-2"><Sparkles size={16}/> 単語テスト (フラッシュカード)</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button onClick={() => startFlashcardTest(false)} className="flex-1 bg-white border-2 border-[#D4A373] text-[#764C28] py-3.5 rounded-xl font-bold shadow-sm hover:bg-[#F8F1E7] active:scale-95 transition-all flex items-center justify-center gap-2">
                    <BookOpen size={18}/> アラビア語 → 日本語
                  </button>
                  <button onClick={() => startFlashcardTest(true)} className="flex-1 bg-white border-2 border-[#D4A373] text-[#764C28] py-3.5 rounded-xl font-bold shadow-sm hover:bg-[#F8F1E7] active:scale-95 transition-all flex items-center justify-center gap-2">
                    <ArrowRightLeft size={18}/> 日本語 → アラビア語
                  </button>
                </div>
              </div>
            )}

            {savedVocab.length > 0 ? (
              <div className="divide-y divide-[#E5C9A8] border-t border-b border-[#E5C9A8]">
                {savedVocab.map((v, i) => (
                  <div key={i} className="py-5 px-2 flex justify-between items-center group transition-all" dir="ltr">
                    <div className="flex-1 text-right" dir="rtl">
                      <p className="text-3xl font-arabic text-[#3E2713] mb-1 leading-relaxed">
                        {v.word.includes('\u200F') ? v.word : `\u200F${v.word}\u200F`}
                      </p>
                      <p className="text-sm sm:text-base text-[#764C28] font-bold" dir="ltr">{v.meaning}</p>
                    </div>
                    <div className="flex gap-2 ml-4" dir="ltr">
                      <button 
                        onClick={() => speakText(v.word)}
                        className="w-10 h-10 bg-white border border-[#E5C9A8] text-[#8A5A33] rounded-full flex items-center justify-center hover:bg-amber-100 transition-colors"
                      >
                        <Volume2 size={18} />
                      </button>
                      <button 
                        onClick={() => deleteWord(v.word)}
                        className="w-10 h-10 bg-white text-red-400 rounded-full flex items-center justify-center hover:text-red-600 transition-colors border border-red-100"
                      >
                        <XCircle size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Bookmark size={48} className="mx-auto mb-4 text-stone-300" />
                <p className="text-[#A67144] font-medium">保存された単語はまだありません。<br/>上のフォームから追加してみましょう！</p>
              </div>
            )}
          </div>
        )}

        {/* フラッシュカード画面 */}
        {currentScreen === "flashcard" && savedVocab.length > 0 && (
          <div className="animate-fade-in-up pb-20">
            <div className="flex justify-between items-center mb-8">
              <HeaderBackButton onClick={() => changeScreen("vocab")} text="単語帳に戻る" />
              <span className="bg-white border border-[#E5C9A8] text-[#A67144] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest">
                {fcIndex + 1} / {savedVocab.length}
              </span>
            </div>

            <div
              className={`bg-white p-8 sm:p-14 rounded-3xl shadow-md border-2 cursor-pointer transition-all duration-300 relative min-h-[320px] flex flex-col items-center justify-center text-center ${fcFlipped ? "border-amber-400 bg-[#FCFAF5]" : "border-[#E5C9A8] hover:border-[#D4A373]"}`}
              onClick={() => setFcFlipped(true)}
            >
              {!fcFlipped ? (
                <div className="flex flex-col items-center gap-6 w-full">
                  <span className="text-xs font-bold text-[#A67144] uppercase tracking-widest absolute top-6 left-6 flex items-center gap-1.5"><HelpCircle size={14}/> Question</span>
                  
                  {fcReverse ? (
                    <p className="text-3xl md:text-4xl font-bold text-[#4A3018] leading-normal">{savedVocab[fcIndex].meaning}</p>
                  ) : (
                    <div className="flex flex-col items-center gap-8 w-full">
                      <p className="text-5xl md:text-6xl font-arabic leading-relaxed text-[#3E2713]" dir="rtl">{`\u200F${savedVocab[fcIndex].word}\u200F`}</p>
                      <button onClick={(e) => { e.stopPropagation(); speakText(savedVocab[fcIndex].word); }} className="w-14 h-14 bg-[#F8F1E7] text-[#8A5A33] rounded-full flex items-center justify-center shadow-sm hover:bg-amber-200 transition-all border border-[#E5C9A8]">
                        <Volume2 size={28} />
                      </button>
                    </div>
                  )}
                  
                  <p className="text-[#A67144] text-sm mt-8 flex items-center gap-2"><Eye size={16}/> タップして答えを見る</p>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-6 w-full animate-fade-in-up">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest absolute top-6 left-6 flex items-center gap-1.5"><CheckCircle size={14}/> Answer</span>
                  
                  {fcReverse ? (
                    <div className="flex flex-col items-center gap-8 w-full">
                      <p className="text-5xl md:text-6xl font-arabic leading-relaxed text-[#3E2713]" dir="rtl">{`\u200F${savedVocab[fcIndex].word}\u200F`}</p>
                      <button onClick={(e) => { e.stopPropagation(); speakText(savedVocab[fcIndex].word); }} className="w-14 h-14 bg-amber-100 text-[#8A5A33] rounded-full flex items-center justify-center shadow-sm hover:bg-amber-200 transition-all border border-amber-300">
                        <Volume2 size={28} />
                      </button>
                    </div>
                  ) : (
                    <p className="text-3xl md:text-4xl font-bold text-[#4A3018] leading-normal">{savedVocab[fcIndex].meaning}</p>
                  )}
                </div>
              )}
            </div>

            <div className="mt-8">
              <button
                onClick={() => {
                  if (fcIndex < savedVocab.length - 1) {
                    setFcIndex(prev => prev + 1);
                    setFcFlipped(false);
                  } else {
                    changeScreen("vocab");
                  }
                }}
                disabled={!fcFlipped}
                className={`w-full py-5 rounded-2xl font-bold shadow-md transition-all text-lg flex items-center justify-center gap-2 ${fcFlipped ? "bg-gradient-to-r from-[#8A5A33] to-[#5E3C1E] text-white hover:brightness-110 active:scale-95" : "bg-[#EBE6DF] text-[#A67144] cursor-not-allowed border border-[#D1C4B7]"}`}
              >
                {fcIndex < savedVocab.length - 1 ? "次の単語へ" : "テスト終了"} <ChevronRight size={24} />
              </button>
            </div>
          </div>
        )}

        {/* コース選択 (メインメニュー) */}
        {currentScreen === "main_menu" && (
          <div className="text-center py-6 animate-fade-in-up">
            <h2 className="text-3xl font-serif font-bold mb-4 text-[#4A3018] tracking-wide">コース選択</h2>
            <div className="w-20 h-1 bg-amber-400 mx-auto mb-10 rounded-full shadow-sm"></div>
            
            <div className="grid grid-cols-3 gap-2.5 sm:gap-5 max-w-2xl mx-auto" dir="ltr">
              <LevelButton title="文法" subtitle="Grammar" color="bg-white border-[#E5C9A8] text-[#5E3C1E]" icon={Puzzle} onClick={() => handleMainMenuClick("grammar")} />
              <LevelButton title="会話" subtitle="Conversation" color="bg-white border-[#E5C9A8] text-[#5E3C1E]" icon={MessageCircle} onClick={() => handleMainMenuClick("conversation")} />
              <LevelButton title="読解" subtitle="Reading" color="bg-white border-[#E5C9A8] text-[#5E3C1E]" icon={BookOpen} onClick={() => handleMainMenuClick("reading")} />
              <LevelButton title="聴解" subtitle="Listening" color="bg-white border-[#E5C9A8] text-[#5E3C1E]" icon={Headphones} onClick={() => handleMainMenuClick("listening")} />
              <LevelButton title="並び替え" subtitle="Reorder" color="bg-white border-[#E5C9A8] text-[#5E3C1E]" icon={ArrowRightLeft} onClick={() => handleMainMenuClick("reorder")} />
              <LevelButton title="1フレーズ" subtitle="Phrases" color="bg-white border-[#E5C9A8] text-[#5E3C1E]" icon={Lightbulb} onClick={() => handleMainMenuClick("phrase")} />
              <LevelButton title="物語" subtitle="Story" color="bg-white border-[#E5C9A8] text-[#5E3C1E]" icon={Library} onClick={() => handleMainMenuClick("story")} />
              <LevelButton title="単語テスト" subtitle="Vocab Test" color="bg-white border-[#E5C9A8] text-[#5E3C1E]" icon={Sparkles} onClick={() => changeScreen("vocab_quiz_select")} />
              <LevelButton title="詩" subtitle="Poetry" color="bg-[#4A3018] border-[#3E2713] text-amber-100" icon={ScrollText} onClick={() => handleMainMenuClick("poetry")} />
            </div>
          </div>
        )}

        {/* 時代選択画面 (詩) */}
        {currentScreen === "eras" && (
          <div className="animate-fade-in-up">
            <HeaderBackButton onClick={() => changeScreen("main_menu")} />
            <h2 className="text-2xl font-serif font-bold mb-8 text-[#4A3018] text-center">時代を選択 <span className="block text-sm text-amber-600 font-sans mt-1 tracking-widest uppercase">Eras of Poetry</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" dir="ltr">
              {POETRY_ERAS.map((era) => {
                const Icon = era.icon;
                return (
                  <button key={era.id} onClick={() => handleEraSelect(era.id)} className="bg-white p-6 rounded-2xl border border-[#E5C9A8] hover:border-[#8A5A33] shadow-sm hover:shadow-md transition-all text-left flex items-center gap-5 group">
                    <span className="text-[#A67144] group-hover:text-amber-500 transition-transform group-hover:scale-110"><Icon size={44} strokeWidth={1.5} /></span>
                    <div>
                      <h3 className="font-bold text-lg text-[#5E3C1E] group-hover:text-[#8A5A33] transition-colors">{era.name}</h3>
                      <p className="text-xs text-[#A67144] font-medium mt-1">{era.period}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 時代詳細画面 (外枠なし) */}
        {currentScreen === "era_desc" && selectedEraId && (
          <div className="animate-fade-in-up pb-12">
            <HeaderBackButton onClick={() => changeScreen("eras")} />
            
            <div className="bg-[#4A3018] p-8 sm:p-10 rounded-3xl text-amber-50 text-center flex flex-col items-center mb-8 shadow-md">
              <span className="mb-4 block text-amber-300">
                {(() => {
                  const Icon = getEraData()?.icon || Tent;
                  return <Icon size={64} strokeWidth={1.5} />;
                })()}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif">{getEraData()?.name}</h2>
              <p className="text-amber-200/80 text-sm mt-2 font-medium tracking-wide">{getEraData()?.period}</p>
            </div>

            <div className="space-y-8">
              <p className="text-[#4A3018] leading-loose text-base sm:text-lg font-medium">{getEraData()?.desc}</p>
              
              <div className="bg-white/70 p-6 rounded-2xl border border-[#E5C9A8]">
                <h3 className="font-bold text-[#764C28] mb-4 border-b border-[#D4A373]/50 pb-2 flex items-center gap-2"><Sparkles size={20} className="text-amber-500" /> この時代の特徴</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {getEraData()?.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm sm:text-base text-[#5E3C1E] font-medium">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div> {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3 justify-center pt-4">
                <button onClick={() => changeScreen("eras")} className="px-6 py-3.5 rounded-full border-2 border-[#E5C9A8] bg-white text-[#8A5A33] font-bold text-sm hover:bg-[#F8F1E7] active:scale-95 transition-all">戻る</button>
                <button onClick={() => changeScreen("poets")} className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#8A5A33] to-[#5E3C1E] text-white font-bold text-sm shadow-lg hover:brightness-110 active:scale-95 transition-all">詩人を選択する →</button>
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
            
            <div className="space-y-3">
              {getFilteredArticles().length > 0 ? (
                getFilteredArticles().map((article, index) => {
                  const locked = isLockedContent(article);
                  return (
                    <div 
                      key={article.id} 
                      onClick={() => handleArticleClick(article, index)} 
                      className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 group cursor-pointer ${
                        locked 
                          ? "bg-stone-100 border-stone-200 opacity-90"
                          : "bg-white border-[#E5C9A8] hover:border-[#8A5A33] shadow-sm hover:shadow-md"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-bold text-lg sm:text-xl text-[#5E3C1E] group-hover:text-[#8A5A33] mb-2 transition-colors">{article.title}</h3>
                          <div className="flex gap-2">
                            <span className="text-xs bg-[#F8F1E7] text-[#8A5A33] px-3 py-1 rounded-full font-bold border border-[#E5C9A8]">詩 (Poetry)</span>
                            {completedArticleIds.includes(article.id) && (
                              <span className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full font-bold border border-emerald-200 flex items-center gap-1">
                                <Check size={12}/> 鑑賞済み
                              </span>
                            )}
                          </div>
                        </div>
                        {locked ? (
                          <Lock size={28} className="text-stone-400" />
                        ) : (
                          <ChevronRight size={24} className="text-[#A67144] group-hover:text-amber-500 transition-colors" />
                        )}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-16 text-[#A67144] flex flex-col items-center">
                  <ScrollText size={48} className="mb-4 opacity-50" />
                  <p className="font-bold">この時代の詩はまだ追加されていません</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 詩の鑑賞モード (外枠をなくし、画面幅いっぱいに表示) */}
        {currentScreen === "poetry_read" && activeArticle && (
          <div className="animate-fade-in-up pb-24">
            <HeaderBackButton onClick={() => changeScreen("poets")} text="詩のリストに戻る" />
            
            <div className="text-center py-2">
              <span className="text-amber-600 text-xs tracking-widest font-bold uppercase mb-2 block">Poetry Appreciation</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-8 text-[#4A3018] border-b border-[#E5C9A8] pb-4">{activeArticle.title}</h2>
              
              {/* 詩の本文 */}
              <div className="space-y-8 mb-10 py-4">
  {activeArticle.sentences?.map((sent, idx) => (
    <div key={idx} className="cursor-pointer hover:text-amber-800 transition-colors" onClick={() => speakText(sent.arabic)}>
      <p className="text-xl sm:text-2xl md:text-3xl font-arabic leading-[2.3] text-[#3E2713]" dir="rtl">
                      {sent.arabic.includes('\u200F') ? sent.arabic : `\u200F${sent.arabic}\u200F`}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mb-10">
                <button onClick={handleTogglePlay} className="flex items-center gap-2 bg-amber-100 text-amber-900 px-7 py-3 rounded-full text-sm font-bold shadow-sm border border-amber-300 hover:bg-amber-200 active:scale-95 transition-all">
                  <Volume2 size={18} /> 詩を朗読する
                </button>
              </div>

              {/* ガイドと2つのボタン */}
              <div className="border-t-2 border-[#E5C9A8] pt-8 text-left">
                <p className="font-bold text-[#5E3C1E] mb-2 text-base sm:text-lg">まずは意味を推測してみましょう</p>
                <p className="text-xs sm:text-sm text-[#8A5A33] mb-6 font-medium leading-relaxed">
                  詩の響きを味わったら、理解度チェックに進んでください。すぐに内容を確認したい場合は「解説を見る」から読み進めることもできます。
                </p>

                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <button 
                    onClick={() => startQuiz()} 
                    className="flex-1 py-4 px-4 bg-[#764C28] text-amber-50 font-bold rounded-2xl shadow-md hover:bg-[#5E3C1E] active:scale-95 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Pencil size={18} /> 理解度チェックへ
                  </button>
                  
                  <button 
                    onClick={() => changeScreen("reader")} 
                    className="flex-1 bg-white border-2 border-[#E5C9A8] text-[#764C28] font-bold py-4 px-4 rounded-2xl hover:border-[#D4A373] hover:bg-[#F8F1E7] active:scale-95 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <BookOpen size={18} /> 解説を見る
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* レベル/種類選択 */}
        {currentScreen === "levels_sub" && (
          <div className="text-center py-6 animate-fade-in-up">
            <div className="flex justify-start mb-4">
              <HeaderBackButton onClick={() => changeScreen("main_menu")} />
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-8 text-[#4A3018]">
              {courseType === "reading" ? "リーディング" : 
               courseType === "listening" ? "リスニング" : 
               courseType === "phrase" ? "種類を選択" : 
               courseType === "reorder" ? "並び替えレベル" : "学習モード選択"}
            </h2>
            <div className="grid grid-cols-1 gap-4 max-w-md mx-auto" dir="ltr">
              
              {courseType !== "grammar" && courseType !== "conversation" && courseType !== "poetry" && courseType !== "phrase" && (
                <>
                  <LevelButton title="初級 (Beginner)" color="bg-white border-[#E5C9A8] text-[#5E3C1E]" icon={CheckCircle} onClick={() => handleSubLevelClick("初級")} />
                  <LevelButton title="中級 (Intermediate)" color="bg-white border-[#D1C4B7] text-[#4A3018]" icon={BookOpen} onClick={() => handleSubLevelClick("中級")} />
                  <LevelButton title="上級 (Advanced)" color="bg-white border-[#BBAFA0] text-[#3E2713]" icon={ScrollText} onClick={() => handleSubLevelClick("上級")} />
                </>
              )}

              {courseType === "phrase" && (
                <>
                  <button onClick={() => handlePhraseCategoryClick("フスハー")} className="p-6 bg-white border-2 border-[#E5C9A8] rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-between group">
                    <Landmark size={36} className="text-[#8A5A33]" strokeWidth={1.5} />
                    <div className="text-left flex-1 ml-4">
                      <span className="font-bold text-xl text-[#4A3018] block">フスハー</span>
                      <span className="text-xs text-[#A67144] font-bold tracking-widest mt-1 block">標準アラビア語 (Fusha)</span>
                    </div>
                    <ChevronRight size={24} className="text-[#A67144]" />
                  </button>
                  
                  <button onClick={() => handlePhraseCategoryClick("サウジ方言")} className="p-6 bg-white border-2 border-[#E5C9A8] rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-between group">
                    <Coffee size={36} className="text-amber-600" strokeWidth={1.5} />
                    <div className="text-left flex-1 ml-4">
                      <span className="font-bold text-xl text-[#4A3018] block">方言</span>
                      <span className="text-xs text-[#A67144] font-bold tracking-widest mt-1 block">サウジ等の日常会話 (Ammiya)</span>
                    </div>
                    <ChevronRight size={24} className="text-[#A67144]" />
                  </button>
                </>
              )}
            </div>
          </div>
        )}

{/* トピック選択（文法・会話・読解・リスニングコースの場合） */}
{currentScreen === "topics" && (
          <div className="animate-fade-in-up pb-20">
            <HeaderBackButton onClick={() => {
              if (["conversation", "grammar", "reading", "listening"].includes(courseType || "")) changeScreen("main_menu");
              else changeScreen("levels_sub");
            }} />

            <h2 className="text-2xl font-serif font-bold mb-6 text-[#4A3018] border-b-2 border-amber-400 pb-3 inline-block">
              {courseType === "grammar" ? "文法コース" : 
               courseType === "conversation" ? "実戦会話シーン" :
               courseType === "reading" ? "リーディング（読解）" :
               courseType === "listening" ? "リスニング（聴解）" :
               `${selectedLevel}のテーマ`}
            </h2>

            {/* A. 文法コース専用：3レベル切り替えタブ ＆ 説明バナー */}
            {courseType === "grammar" && (() => {
              const currentTabInfo = GRAMMAR_LEVEL_TABS.find(t => t.id === grammarTab)!;
              const filteredGrammar = getFilteredArticles();
              const completedCount = filteredGrammar.filter(a => completedArticleIds.includes(a.id)).length;
              const progressPercent = filteredGrammar.length > 0 ? Math.round((completedCount / filteredGrammar.length) * 100) : 0;

              return (
                <div className="mb-8" dir="ltr">
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2 bg-[#EBE6DF] p-1.5 rounded-2xl border border-[#D4A373]/60 mb-4">
                    {GRAMMAR_LEVEL_TABS.map((tab) => {
                      const isActive = grammarTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setGrammarTab(tab.id)}
                          className={`py-3 px-1 sm:px-2 rounded-xl font-bold text-[11px] sm:text-sm whitespace-nowrap transition-all duration-200 flex items-center justify-center text-center ${
                            isActive
                              ? "bg-[#8A5A33] text-white shadow-md scale-[1.01]"
                              : "bg-transparent text-[#764C28] hover:bg-white/60"
                          }`}
                        >
                          {tab.label}
                        </button>
                      );
                    })}
                  </div>

                  <div className="bg-white p-5 sm:p-6 rounded-2xl border-2 border-[#E5C9A8] shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full border border-amber-300">
                        {currentTabInfo.badge}
                      </span>
                      <span className="text-xs font-bold text-[#8A5A33]">
                        達成度: {completedCount} / {filteredGrammar.length} レッスン ({progressPercent}%)
                      </span>
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-[#4A3018] mb-1.5">{currentTabInfo.title}</h3>
                    <p className="text-xs sm:text-sm text-[#764C28] leading-relaxed mb-4">{currentTabInfo.desc}</p>
                    <div className="w-full h-2.5 bg-[#F5F0E6] rounded-full overflow-hidden border border-[#E5C9A8]">
                      <div className="h-full bg-gradient-to-r from-amber-400 to-[#8A5A33] transition-all duration-500 rounded-full" style={{ width: `${progressPercent}%` }} />
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* B. 会話コース専用：シーンの横並びタブ */}
            {courseType === "conversation" && (() => {
              const convCategories = Array.from(new Set(allArticles.filter(a => a.level === "会話").map(a => a.category)));
              const activeCat = selectedCategory || convCategories[0] || "";

              return (
                <div className="mb-6" dir="ltr">
                  <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                    {convCategories.map((cat) => {
                      const isActive = activeCat === cat;
                      const catArticles = allArticles.filter(a => a.level === "会話" && a.category === cat);
                      const catCompleted = catArticles.filter(a => completedArticleIds.includes(a.id)).length;

                      return (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`py-2.5 px-4 rounded-full font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 flex items-center gap-2 shadow-sm flex-shrink-0 border ${
                            isActive ? "bg-[#8A5A33] text-white border-[#5E3C1E] shadow-md scale-105" : "bg-white text-[#764C28] border-[#E5C9A8] hover:bg-[#F8F1E7]"
                          }`}
                        >
                          <span>{cat}</span>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? "bg-white/20 text-white" : "bg-[#F5F0E6] text-[#8A5A33]"}`}>
                            {catCompleted}/{catArticles.length}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })()}

            {/* C. 読解（Reading）コース専用：初級・中級・上級タブ ＋ テーマ（カテゴリ）タブ */}
            {courseType === "reading" && (() => {
              const levels = ["初級", "中級", "上級"];
              const currentLevel = selectedLevel || "初級";
              const levelArticles = allArticles.filter(a => a.level === currentLevel && (!a.videoUrl || a.videoUrl === "") && a.level !== "会話" && a.category !== "並び替え" && a.category !== "単語データ" && a.level !== "文法" && a.level !== "Poetry" && a.level !== "1フレーズ" && a.level !== "物語");
              const categories = Array.from(new Set(levelArticles.map(a => a.category)));
              const activeCategory = selectedCategory || categories[0] || "";

              return (
                <div className="mb-6 space-y-4" dir="ltr">
                  <div className="grid grid-cols-3 gap-2 bg-[#EBE6DF] p-1.5 rounded-2xl border border-[#D4A373]/60">
                    {levels.map((lvl) => {
                      const isActive = currentLevel === lvl;
                      return (
                        <button
                          key={lvl}
                          onClick={() => {
                            setSelectedLevel(lvl);
                            const newLvArts = allArticles.filter(a => a.level === lvl && a.category !== "並び替え" && a.category !== "単語データ");
                            const newCats = Array.from(new Set(newLvArts.map(a => a.category)));
                            setSelectedCategory(newCats[0] || "");
                          }}
                          className={`py-3 rounded-xl font-bold text-xs sm:text-sm transition-all text-center ${
                            isActive ? "bg-[#8A5A33] text-white shadow-md" : "bg-transparent text-[#764C28] hover:bg-white/60"
                          }`}
                        >
                          {lvl}
                        </button>
                      );
                    })}
                  </div>

                  {categories.length > 0 && (
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2">
                      {categories.map((cat) => {
                        const isActive = activeCategory === cat;
                        const catArts = levelArticles.filter(a => a.category === cat);
                        const catCompleted = catArts.filter(a => completedArticleIds.includes(a.id)).length;

                        return (
                          <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`py-2 px-3.5 rounded-full font-bold text-xs whitespace-nowrap transition-all flex items-center gap-1.5 border flex-shrink-0 ${
                              isActive ? "bg-[#5E3C1E] text-white border-[#3E2713] shadow-sm" : "bg-white text-[#764C28] border-[#E5C9A8] hover:bg-[#F8F1E7]"
                            }`}
                          >
                            <span>{cat}</span>
                            <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${isActive ? "bg-white/20 text-white" : "bg-[#F5F0E6] text-[#8A5A33]"}`}>
                              {catCompleted}/{catArts.length}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })()}

            {/* D. リスニング（Listening）コース専用：初級・中級・上級タブ */}
            {courseType === "listening" && (() => {
              const levels = ["初級", "中級", "上級"];
              const currentLevel = selectedLevel || "初級";

              return (
                <div className="mb-6" dir="ltr">
                  <div className="grid grid-cols-3 gap-2 bg-[#EBE6DF] p-1.5 rounded-2xl border border-[#D4A373]/60">
                    {levels.map((lvl) => {
                      const isActive = currentLevel === lvl;
                      return (
                        <button
                          key={lvl}
                          onClick={() => setSelectedLevel(lvl)}
                          className={`py-3 rounded-xl font-bold text-xs sm:text-sm transition-all text-center ${
                            isActive ? "bg-[#8A5A33] text-white shadow-md" : "bg-transparent text-[#764C28] hover:bg-white/60"
                          }`}
                        >
                          {lvl}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })()}

            {/* レッスン一覧の表示（文法・会話・読解・リスニング共通） */}
            {["grammar", "conversation", "reading", "listening"].includes(courseType || "") ? (
              <div className="space-y-3">
                {(() => {
let targetList: Article[] = [];
if (courseType === "grammar") {
  targetList = getFilteredArticles();
} else if (courseType === "conversation") {
  const convCategories = Array.from(new Set(allArticles.filter(a => a.level === "会話").map(a => a.category)));
  const activeCat = selectedCategory || convCategories[0] || "";
  targetList = allArticles.filter(a => a.level === "会話" && a.category === activeCat);
} else if (courseType === "listening") {
  const currentLevel = selectedLevel || "初級";
  // ★ videoUrl があり、かつ会話・文法・詩・並び替え以外の純粋なリスニング教材
  targetList = allArticles.filter(a => Boolean(a.videoUrl && a.videoUrl.trim().length > 0) && a.level === currentLevel);
} else if (courseType === "reading") {
  const currentLevel = selectedLevel || "初級";
  const levelArticles = allArticles.filter(a => 
    a.level === currentLevel && 
    (!a.videoUrl || a.videoUrl.trim() === "") && 
    a.level !== "会話" && 
    a.category !== "並び替え" && 
    a.category !== "単語データ" && 
    a.level !== "文法" && 
    a.level !== "Poetry" && 
    a.level !== "1フレーズ" && 
    a.level !== "物語"
  );
  const categories = Array.from(new Set(levelArticles.map(a => a.category)));
  const activeCat = selectedCategory || categories[0] || "";
  // ★ 選択中のカテゴリに絞り込み、動画がないものだけを抽出
  targetList = levelArticles.filter(a => a.category === activeCat);
}

if (targetList.length === 0) {
  return (
    <div className="text-center py-16 text-[#A67144]">
      <p className="font-bold text-lg">
        {courseType === "listening" 
          ? "このレベルのリスニングレッスンはまだありません" 
          : "このカテゴリの読解レッスンはまだありません"}
      </p>
    </div>
  );
}

                  return targetList.map((article, index) => {
                    const locked = isLockedContent(article);
                    const isCompleted = completedArticleIds.includes(article.id);
                    const displayTitle = courseType === "grammar" ? `Lesson ${index + 1}: ${article.title.replace(/^Lesson\s*\d+[:：]?\s*/i, "")}` : article.title;

                    return (
                      <button 
                        key={article.id} 
                        onClick={() => handleArticleClick(article, index)} 
                        className={`w-full text-left p-4 sm:p-5 rounded-2xl shadow-sm border flex items-center justify-between gap-3 transition-all group cursor-pointer ${
                          locked ? "bg-[#F5F0E6] border-[#E5C9A8]" : "bg-white border-[#E5C9A8] hover:border-[#8A5A33] hover:shadow-md"
                        }`}
                      >
                        <div className="flex items-center gap-3.5 flex-1 min-w-0">
                          {locked ? (
                            <div className="bg-[#E5C9A8] text-white w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" title="有料会員限定">
                              <Lock size={15}/>
                            </div>
                          ) : (
                            <div className="bg-amber-100 text-[#8A5A33] w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" title="学習可能">
                              {courseType === "listening" ? <Video size={16}/> : <BookOpen size={16}/>}
                            </div>
                          )}
                          <div className="min-w-0 flex-1">
                            <h3 className={`font-bold text-sm sm:text-base leading-snug truncate ${
                              locked ? "text-[#A67144]" : "text-[#4A3018] group-hover:text-[#8A5A33] transition-colors"
                            }`}>
                              {displayTitle} {courseType === "listening" && <Video size={16} className="inline ml-1 text-amber-500" />}
                            </h3>
                          </div>
                        </div>

                        <div className="flex-shrink-0 flex items-center gap-2">
                          {locked ? (
                            <span className="text-[#A67144] text-xs font-bold bg-[#F8F1E7] px-3 py-1 rounded-full whitespace-nowrap">
                              Premium
                            </span>
                          ) : (
                            <div
                              onClick={(e) => toggleComplete(article.id, e)}
                              className={`flex items-center gap-1 px-2.5 py-1 rounded-full border text-xs font-bold transition-all whitespace-nowrap ${
                                isCompleted ? "bg-emerald-50 text-emerald-700 border-emerald-300 shadow-sm" : "bg-stone-50 text-stone-400 border-stone-300 hover:border-amber-500 hover:text-amber-600"
                              }`}
                              title="クリックして完了/未完了を切り替え"
                            >
                              <CheckCircle size={14} className={isCompleted ? "text-emerald-600 fill-emerald-100" : "text-stone-300"} />
                              <span>{isCompleted ? "完了" : "未完了"}</span>
                            </div>
                          )}
                          <ChevronRight size={18} className="text-[#A67144] group-hover:translate-x-1 transition-transform flex-shrink-0" />
                        </div>
                      </button>
                    );
                  });
                })()}

                {/* 文法コース選択時のみ：読破チャレンジカードを表示 */}
                {courseType === "grammar" && (() => {
                  const challengeArticle = allArticles.find(
                    a => a.level === "文法読解" && a.importance === grammarTab
                  );
                  if (!challengeArticle) return null;
                  const isChallengeCompleted = completedArticleIds.includes(challengeArticle.id);

                  return (
                    <div className="mt-10 pt-8 border-t-2 border-dashed border-[#D4A373]/50">
                      <div className="bg-gradient-to-br from-[#FFFDF9] via-amber-50/40 to-[#F8F1E7] p-6 sm:p-7 rounded-3xl border-2 border-amber-300 shadow-md">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold px-3.5 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                            <Sparkles size={14} /> レベル達成マイルストーン
                          </span>
                          {isChallengeCompleted && (
                            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-300 flex items-center gap-1">
                              <CheckCircle size={14} /> 読破達成済み
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#4A3018] mb-2">
                          📖 {challengeArticle.title.split("：")[1] || challengeArticle.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#764C28] leading-relaxed mb-6 font-medium">
                          {challengeArticle.contentPlain}
                        </p>
                        <button
                          onClick={() => {
                            setActiveArticle(challengeArticle);
                            setLearningMode("reading");
                            changeScreen("reader");
                          }}
                          className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#8A5A33] to-[#5E3C1E] text-white font-bold rounded-2xl shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                        >
                          <BookOpen size={18} /> ストーリーを読む（音声・クイズ付き） →
                        </button>
                      </div>
                    </div>
                  );
                })()}
              </div>
            ) : (
              /* その他のコース用（物語など） */
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4" dir="ltr">
                {Array.from(new Set(getFilteredArticles().map(a => a.category))).map(cat => (
                  <button
                    key={cat}
                    onClick={() => handleSelectCategory(cat)}
                    className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md border border-[#E5C9A8] hover:border-[#8A5A33] transition-all text-left group flex flex-col justify-between min-h-[115px]"
                  >
                    <Bookmark size={26} className="text-[#A67144] group-hover:text-amber-500 transition-colors mb-2" strokeWidth={1.5} />
                    <span className="font-bold text-base sm:text-lg text-[#5E3C1E] group-hover:text-[#8A5A33] transition-colors">
                      {cat}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 記事リスト */}
        {currentScreen === "list" && (
          <div className="animate-fade-in-up">
            <HeaderBackButton onClick={() => {
              if (courseType === "story") changeScreen("main_menu");
              else if (courseType === "reorder") changeScreen("levels_sub");
              else changeScreen("topics");
            }} />

            <div className="flex flex-wrap justify-between items-end gap-2 mb-6 border-b-2 border-[#E5C9A8] pb-3">
              <h2 className="text-2xl font-serif font-bold text-[#4A3018] flex items-center gap-2">
                <Sparkles size={24} className="text-amber-500" /> {selectedCategory}
              </h2>
              {courseType === "grammar" && (
                <span className="text-xs font-bold bg-[#F8F1E7] text-[#8A5A33] px-3 py-1 rounded-full border border-[#D4A373]">
                  現在：{GRAMMAR_LEVEL_TABS.find(t => t.id === grammarTab)?.label}
                </span>
              )}
            </div>

            <div className="space-y-3">
              {getFilteredArticles().filter(a => a.category === selectedCategory).map((article, index) => {
                const locked = isLockedContent(article);
                const diff = article.difficulty || 1;
                const diffStars = diff === 1 ? "★☆☆ 易" : diff === 2 ? "★★☆ 中" : "★★★ 難";

                return (
                  <button 
                    key={article.id} 
                    onClick={() => handleArticleClick(article, index)} 
                    className={`w-full text-left p-5 rounded-2xl shadow-sm border flex justify-between items-center transition-all group cursor-pointer ${
                      locked 
                        ? "bg-[#F5F0E6] border-[#E5C9A8]" 
                        : "bg-white border-[#E5C9A8] hover:border-[#8A5A33] hover:shadow-md"
                    }`}
                  >
                    <div className="flex-1 flex items-center gap-3.5">
                      {locked && (
                        <div className="bg-[#E5C9A8] text-white w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" title="有料会員限定">
                          <Lock size={15}/>
                        </div>
                      )}
                      <div>
                        {/* ★ 文法コースのとき、参考難易度バッジを表示 */}
                        {courseType === "grammar" && (
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[11px] font-bold bg-[#F8F1E7] text-[#8A5A33] px-2.5 py-0.5 rounded-md border border-[#E5C9A8]">
                              難易度: {diffStars}
                            </span>
                          </div>
                        )}
                        <h3 className={`font-bold text-base sm:text-lg leading-relaxed flex items-center gap-2 ${
                          locked ? "text-[#A67144]" : "text-[#4A3018] group-hover:text-[#8A5A33] transition-colors"
                        }`}>
                          {article.title} {courseType === "listening" && <Video size={18} className="text-amber-500"/>}
                        </h3>
                      </div>
                    </div>
                    <div className="flex-shrink-0 ml-3">
                      {completedArticleIds.includes(article.id) ? (
                        <span className="text-emerald-700 font-bold text-xs sm:text-sm bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                          <CheckCircle size={14}/> 完了
                        </span>
                      ) : (
                        locked ? (
                          <span className="text-[#A67144] text-xs font-bold bg-[#F8F1E7] px-3 py-1 rounded-full">
                            Premium
                          </span>
                        ) : (
                          <ChevronRight size={22} className="text-[#A67144] group-hover:text-amber-500 transition-colors" />
                        )
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* フレーズリスト */}
        {currentScreen === "phrases_list" && (
          <div className="animate-fade-in-up">
            <HeaderBackButton onClick={() => changeScreen("levels_sub")} text="種類選択に戻る" />
            <h2 className="text-2xl font-serif font-bold mb-6 text-[#4A3018] border-b-2 border-amber-400 pb-3 inline-block">
              {selectedCategory}のフレーズ
            </h2>
            <div className="space-y-3">
              {getFilteredArticles().filter(a => a.category === selectedCategory).length > 0 ? (
                getFilteredArticles().filter(a => a.category === selectedCategory).map((article) => (
                  <button 
                    key={article.id} 
                    onClick={() => handlePhraseClick(article)} 
                    className="w-full text-left p-5 bg-white rounded-2xl shadow-sm border border-[#E5C9A8] hover:border-[#8A5A33] hover:shadow-md transition-all group flex justify-between items-center gap-4"
                  >
                    <div className="flex items-center gap-3.5 flex-1 min-w-0 pr-2">
                      <MessageSquare size={22} className="text-[#8A5A33] flex-shrink-0" strokeWidth={1.5} />
                      <span className="font-bold text-base sm:text-lg text-[#4A3018] group-hover:text-[#8A5A33] transition-colors leading-snug break-words">{article.title}</span>
                    </div>
                    <span className="text-[#A67144] font-bold text-xs sm:text-sm group-hover:text-amber-600 transition-colors flex items-center gap-1 flex-shrink-0">翻訳を見る <ChevronRight size={18} /></span>
                  </button>
                ))
              ) : (
                <div className="text-center py-16 text-[#A67144] flex flex-col items-center">
                  <Library size={48} className="mb-4 opacity-50" strokeWidth={1.5}/>
                  <p className="font-bold text-lg">現在、{selectedCategory}のデータはありません。</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 1フレーズ詳細 (外枠をなくし、広々と表示) */}
        {currentScreen === "phrase_detail" && activeArticle && (
          <div className="animate-fade-in-up pb-20">
            <HeaderBackButton onClick={() => changeScreen("phrases_list")} text="一覧に戻る" />
            
            {/* 上部: 日本語の意味 */}
            <div className="border-b-2 border-[#E5C9A8] pb-6 mb-8 text-center">
              <span className="text-[10px] font-bold text-[#A67144] uppercase tracking-widest block mb-2">Meaning</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#4A3018] leading-relaxed">{activeArticle.title}</h2>
            </div>
            
            {/* 中央: アラビア語フレーズと音声 */}
            <div className="text-center py-6 mb-8">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-6">Arabic Phrase</span>
              <p className="text-4xl sm:text-5xl font-arabic text-[#3E2713] leading-[2.2] mb-8" dir="rtl">
                {activeArticle.sentences?.[0]?.arabic || activeArticle.contentPlain}
              </p>
              
              <button 
                onClick={() => speakText(activeArticle.sentences?.[0]?.arabic || activeArticle.contentPlain || "")} 
                className="bg-amber-100 text-[#8A5A33] w-20 h-20 rounded-full mx-auto flex items-center justify-center hover:bg-amber-200 active:scale-90 transition-all border-2 border-amber-300 shadow-sm"
              >
                <Volume2 size={36} />
              </button>
            </div>

            {/* 下部: 解説セクション */}
            <div className="border-t border-[#E5C9A8] pt-6 text-left">
              <span className="inline-block bg-[#8A5A33] text-white text-[10px] font-bold px-3.5 py-1 rounded-full uppercase tracking-widest mb-4">
                Explanation
              </span>
              <p className="text-[#4A3018] text-base sm:text-lg leading-relaxed whitespace-pre-wrap font-medium">
                {activeArticle.sentences?.[0]?.note || "解説がありません。"}
              </p>
            </div>
          </div>
        )}

        {/* 学習モード選択 */}
        {currentScreen === "mode_select" && activeArticle && (
          <div className="flex flex-col items-center justify-center py-6 animate-fade-in-up relative">
            <div className="w-full text-left">
              <HeaderBackButton onClick={() => changeScreen("list")} />
            </div>

            <div className="w-24 h-24 bg-gradient-to-br from-[#8A5A33] to-[#4A3018] text-amber-400 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <BookOpen size={48} strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-center text-[#4A3018] leading-tight">{activeArticle.title}</h2>
            <p className="text-[#A67144] mb-10 text-xs font-bold tracking-widest uppercase border-b border-[#D4A373] pb-1.5">Select Mode</p>
            
            <div className={`grid gap-4 w-full ${courseType === "story" || courseType === "reading" || courseType === "conversation" ? "grid-cols-1 max-w-xs mx-auto" : activeArticle.level === "初級" || activeArticle.level === "文法" ? "grid-cols-2 max-w-md mx-auto" : "grid-cols-1 sm:grid-cols-3 max-w-xl mx-auto"}`} dir="ltr">
              
              {(courseType === "reading" || courseType === "story" || courseType === "conversation" || (activeArticle.level !== "文法" && courseType !== "listening")) && (
                <ModeButton icon={BookOpen} title="Reading" subtitle="読んで理解" color="border-[#E5C9A8] bg-white hover:bg-[#F8F1E7] text-[#5E3C1E]" onClick={() => startLearning("reading")} />
              )}
              
              {courseType !== "reading" && courseType !== "story" && courseType !== "conversation" && activeArticle.level !== "文法" && activeArticle.level !== "初級" && (
                <ModeButton icon={Headphones} title="Listening" subtitle="音声のみ" color="border-[#E5C9A8] bg-white hover:bg-[#F8F1E7] text-[#5E3C1E]" onClick={() => startLearning("listening")} />
              )}
              
              {activeArticle.level === "文法" && courseType === "grammar" && (
                <ModeButton icon={Puzzle} title="Grammar" subtitle="文法理解" color="border-[#E5C9A8] bg-white hover:bg-[#F8F1E7] text-[#5E3C1E]" onClick={() => startLearning("grammar")} />
              )}
              
              {courseType !== "reading" && courseType !== "story" && courseType !== "conversation" && activeArticle.level !== "文法" && (
                <ModeButton icon={PenTool} title="Dictation" subtitle="書き取り" color="border-[#E5C9A8] bg-white hover:bg-[#F8F1E7] text-[#5E3C1E]" onClick={() => startLearning("dictation")} />
              )}
            </div>
          </div>
        )}

        {/* リーダー画面 (外枠と横幅制限を撤廃し、画面いっぱいに広く表示) */}
        {currentScreen === "reader" && activeArticle && (
          <div className="pb-16 animate-fade-in-up">
            {/* 上部ナビゲーション行 */}
            <div className="flex justify-between items-center mb-6 border-b border-[#E5C9A8] pb-3">
            <button onClick={() => {
                if (jumpHistory) {
                  setActiveArticle(jumpHistory.article);
                  setLearningMode(jumpHistory.mode);
                  changeScreen(jumpHistory.screen);
                  setJumpHistory(null);
                } else if (["grammar", "conversation", "reading", "listening"].includes(courseType || "")) {
                  changeScreen("topics");
                } else if (courseType === "poetry") {
                  changeScreen("poets"); 
                } else {
                  changeScreen("mode_select");
                }
              }} className="text-[#8A5A33] hover:text-[#5E3C1E] text-sm font-bold transition-all flex items-center gap-1.5 hover:-translate-x-1">
                <ArrowLeft size={16} strokeWidth={2.5}/> 戻る
              </button>
              <span className="font-bold text-xs tracking-widest uppercase bg-[#E5C9A8]/40 text-[#5E3C1E] px-3 py-1 rounded-full">
                {activeArticle.category}
              </span>
            </div>

            {/* コンテンツ本体 (外枠なし・100%幅) */}
            <div className="w-full">
              
              {/* 文法・解説表示 */}
              {learningMode === "grammar" ? (
                <div className="w-full">
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-6 text-[#4A3018] border-b-2 border-amber-400 pb-3">
                    {activeArticle.title}
                  </h2>
                  
                  {activeArticle.contentPlain && !activeArticle.contentNode && (
                    <div className="w-full text-left py-2 mb-8" dir="ltr">
                      <p className="text-base sm:text-lg text-[#4A3018] leading-relaxed whitespace-pre-wrap font-medium">
                        {activeArticle.contentPlain}
                      </p>
                    </div>
                  )}

                  {activeArticle.contentNode && (
                    <div className="w-full text-left mb-10 animate-fade-in-up">
                      {activeArticle.contentNode}
                    </div>
                  )}

                  {activeArticle.imageUrls && activeArticle.imageUrls.length > 0 && (
                    <div className="w-full space-y-6 mb-10">
                      {activeArticle.imageUrls.map((url, idx) => (
                        <img 
                          key={idx}
                          src={url} 
                          alt={`Slide ${idx + 1}`}
                          className="w-full rounded-xl shadow-sm border border-[#E5C9A8]"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  )}

                  {activeArticle.questions && activeArticle.questions.length > 0 ? (
                    <div className="border-t-2 border-[#E5C9A8] pt-8 mt-8 text-center w-full">
                      <p className="text-[#764C28] font-bold mb-5 text-base sm:text-lg">解説を読み終わりましたか？</p>
                      <div className="flex flex-col sm:flex-row gap-3 w-full">
                        <button 
                          onClick={() => {
                            const qs = activeArticle.questions;
                            setGrammarQuestions(qs);
                            startQuiz();
                          }} 
                          className="flex-1 py-4 px-4 bg-gradient-to-r from-[#8A5A33] to-[#5E3C1E] text-white font-bold rounded-2xl shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                        >
                          <Pencil size={18} /> 理解度チェック ({activeArticle.questions.length}問)
                        </button>
                        
                        <button 
                          onClick={() => changeScreen("result")} 
                          className="flex-1 bg-white border-2 border-[#E5C9A8] text-[#764C28] font-bold py-4 px-4 rounded-2xl hover:border-[#D4A373] hover:bg-[#F8F1E7] active:scale-95 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                        >
                          <BookOpen size={18} /> すぐに問題と解答を見る
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-[#A67144] font-medium mt-8 pt-6 border-t border-dashed border-[#E5C9A8] w-full">
                      <p className="mb-4">このレッスンの解説は以上です。</p>
                      <button onClick={() => changeScreen("list")} className="px-6 py-2.5 bg-white rounded-full border border-[#D4A373] text-[#764C28] hover:bg-[#F8F1E7] transition-colors font-bold">一覧に戻る</button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-full">
                  
                  {/* YouTube */}
                  {activeArticle.videoUrl && getYouTubeId(activeArticle.videoUrl) && (
                    <div className="w-full mb-8 aspect-video rounded-2xl overflow-hidden shadow-lg border border-[#E5C9A8]">
                      <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${getYouTubeId(activeArticle.videoUrl)}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                  )}

                  {/* タイトル */}
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-8 text-[#4A3018] border-b-2 border-amber-400 pb-3">
                    {activeArticle.level === "初級" ? `問題 ${activeProblemNumber} (${activeArticle.title})` : activeArticle.title}
                  </h2>

                  {learningMode === "listening" ? (
                    <div className="py-12 flex flex-col items-center text-[#A67144] text-sm bg-white/60 rounded-2xl border border-dashed border-[#E5C9A8] mb-10">
                      <Headphones size={48} className="mb-4 opacity-70" strokeWidth={1.5}/>
                      <p className="font-bold text-base sm:text-lg mb-2 text-[#5E3C1E]">動画・音声を視聴して内容を理解しましょう</p>
                      <p className="text-xs opacity-80">（テキストはクイズ後に表示されます）</p>
                    </div>
                  ) : activeArticle.level === "会話" ? (
                    /* 会話セクション */
                    <div className="w-full space-y-5 mb-12">
                      {activeArticle.sentences?.map((sent, idx) => {
                        const isRight = idx % 2 === 0;
                        const isCurrentPlaying = audioState !== "idle" && currentAudioIndex === idx;

                        return (
                          <div key={idx} className={`flex ${isRight ? "justify-start" : "justify-end"}`}>
                            <div 
                              onClick={() => playFromSentenceIndex(idx)}
                              className={`w-full sm:max-w-[88%] p-4 sm:p-6 rounded-2xl relative shadow-sm border cursor-pointer transition-all duration-200 ${
                                isCurrentPlaying ? "ring-2 ring-amber-400 bg-amber-50" : ""
                              } ${isRight ? "bg-[#F8F1E7] text-[#4A3018] rounded-tr-none border-[#E5C9A8]" : "bg-white text-[#5E3C1E] rounded-tl-none border-stone-200"}`}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-bold text-[#8A5A33]">{sent.speaker}</span>
                                <span className="text-[11px] text-[#A67144] opacity-70 flex items-center gap-1"><Volume2 size={12}/> タップで再生</span>
                              </div>
                              <p className="text-2xl sm:text-3xl font-arabic leading-[2.2] text-right" dir="rtl">
                                {sent.arabic.includes('\u200F') ? sent.arabic : `\u200F${sent.arabic}\u200F`}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : courseType === "poetry" ? (
                    /* 詩セクション：外枠カードをなくし、区切り線で広々と表示 */
                    <div className="w-full divide-y divide-[#E5C9A8] mb-12 text-left" dir="ltr">
                      {activeArticle.sentences?.map((sent, idx) => {
                        const isCurrentPlaying = audioState !== "idle" && currentAudioIndex === idx;
                        return (
                          <div
                            key={idx}
                            className={`py-6 transition-all duration-300 ${
                              isCurrentPlaying ? "bg-amber-50/60 px-3 rounded-xl" : ""
                            }`}
                          >
                            <div className="flex justify-between items-center mb-3">
                              <span className="text-xs font-bold text-[#A67144] tracking-widest uppercase">
                                VERSE {idx + 1}
                              </span>
                              <button
                                onClick={() => playFromSentenceIndex(idx)}
                                className="flex items-center gap-1.5 bg-white border border-[#E5C9A8] text-[#8A5A33] px-3.5 py-1.5 rounded-full text-xs font-bold hover:bg-amber-100 active:scale-95 transition-all"
                              >
                                <Volume2 size={14} /> 朗読を聞く
                              </button>
                            </div>

                            <div
  onClick={() => playFromSentenceIndex(idx)}
  className="cursor-pointer text-center py-3 group"
>
  <p className="text-xl sm:text-2xl md:text-3xl font-arabic leading-[2.3] text-[#3E2713] group-hover:text-amber-800 transition-colors" dir="rtl">
                                {sent.arabic.includes('\u200F') ? sent.arabic : `\u200F${sent.arabic}\u200F`}
                              </p>
                            </div>

                            {sent.japanese && (
                              <div className="my-3">
                                <span className="text-[11px] font-bold text-[#A67144] uppercase tracking-wider block mb-1">日本語訳</span>
                                <p className="text-base sm:text-lg text-[#4A3018] font-bold leading-relaxed">
                                  {sent.japanese}
                                </p>
                              </div>
                            )}

                            {sent.note && (
                              <div className="mt-4 pt-3 border-t border-dashed border-[#D4A373]/60 text-sm sm:text-base text-[#5E3C1E] leading-relaxed">
                                <span className="text-[11px] font-bold text-[#8A5A33] uppercase tracking-widest block mb-1.5">
                                  解説・語彙・文法
                                </span>
                                <div className="whitespace-pre-wrap font-medium">
                                  {sent.note.trim()}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    /* 物語・読解セクション：ボックス枠をなくし、画面幅いっぱいにアラビア語本文を表示 */
                    <div className="w-full mb-12 py-2">
  <p className="text-xl sm:text-2xl leading-[2.4] font-arabic text-justify text-[#3E2713]" dir="rtl">
                        {(() => {
                          if (activeArticle.sentences && activeArticle.sentences.length > 0) {
                            return activeArticle.sentences.map((sent, sIdx) => {
                              const isCurrentPlaying = audioState !== "idle" && currentAudioIndex === sIdx;
                              const displayText = activeArticle.level === "上級" 
                                ? removeTashkeel(sent.arabic) 
                                : sent.arabic;

                              return (
                                <span
                                  key={sIdx}
                                  onClick={() => playFromSentenceIndex(sIdx)}
                                  className={`cursor-pointer px-1 py-0.5 rounded transition-all duration-200 inline ${
                                    isCurrentPlaying
                                      ? "bg-amber-200 text-amber-950 font-bold"
                                      : "hover:bg-amber-100/70 hover:text-[#5E3C1E]"
                                  }`}
                                  title="タップしてここから再生"
                                >
                                  {displayText.includes('\u200F') ? displayText : `\u200F${displayText}\u200F`}{" "}
                                </span>
                              );
                            });
                          }

                          const rawText = activeArticle.level === "上級"
                            ? (activeArticle.contentPlain || removeTashkeel(activeArticle.contentVoweled || ""))
                            : (activeArticle.contentVoweled || activeArticle.contentPlain || "");

                          const sentenceList = (rawText.match(/[^.؟!。\n]+[.؟!。\n]*/g) || [rawText]).map(s => s.trim()).filter(Boolean);

                          return sentenceList.map((sentText, sIdx) => {
                            const isCurrentPlaying = audioState !== "idle" && currentAudioIndex === sIdx;

                            return (
                              <span
                                key={sIdx}
                                onClick={() => playFromSentenceIndex(sIdx)}
                                className={`cursor-pointer px-1 py-0.5 rounded transition-all duration-200 inline ${
                                  isCurrentPlaying
                                    ? "bg-amber-200 text-amber-950 font-bold"
                                    : "hover:bg-amber-100/70 hover:text-[#5E3C1E]"
                                }`}
                                title="タップしてここから再生"
                              >
                                {sentText.includes('\u200F') ? sentText : `\u200F${sentText}\u200F`}{" "}
                              </span>
                            );
                          });
                        })()}
                      </p>
                    </div>
                  )}

                  {/* Key Expressions */}
                  {activeArticle.keyExpressions && activeArticle.keyExpressions.length > 0 && (
                    <div className="mb-10 w-full border-t border-[#E5C9A8] pt-6">
                      <h3 className="font-bold mb-4 text-sm text-[#A67144] tracking-widest uppercase flex items-center gap-2">
                        <BookOpen size={18} className="text-amber-600"/> Key Expressions
                      </h3>
                      <div className="divide-y divide-[#E5C9A8]">
                        {activeArticle.keyExpressions.map((item, idx) => (
                          <div key={idx} className="py-4">
                            <p className="font-bold text-[#4A3018] font-arabic text-2xl mb-1" dir="rtl">
                              {item.phrase}
                            </p>
                            {item.reading && (
                              <p className="text-xs text-stone-400 mb-2 font-medium">
                                {item.reading}
                              </p>
                            )}
                            <p className="text-sm sm:text-base text-[#764C28] font-bold mb-1">{item.explanation.split("「")[0]}</p>
                            <p className="text-xs sm:text-sm text-[#5E3C1E] leading-relaxed text-left font-medium" dir="ltr">{item.explanation}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Vocabulary */}
                  {activeArticle.vocabList && activeArticle.vocabList.length > 0 && (
                    <div className="mb-12 w-full border-t border-[#E5C9A8] pt-6">
                      <h3 className="font-bold mb-4 text-sm text-[#A67144] tracking-widest uppercase flex items-center gap-2"><Bookmark size={18} /> Vocabulary</h3>
                      <div className="flex flex-wrap gap-2.5">
                        {activeArticle.vocabList.map((v, i) => (<VocabButton key={i} v={v} i={i} isRevealed={revealedVocabIndex === i} isSaved={savedVocab.some(sv => sv.word === v.word)} onReveal={() => setRevealedVocabIndex(i)} onSave={() => saveWord(v.word, v.meaning)} />))}
                      </div>
                    </div>
                  )}

                  {/* クイズ・解説へ進むボタン */}
                  {courseType !== "poetry" && (
                    <div className="flex flex-col sm:flex-row gap-3 w-full pt-6 border-t-2 border-[#E5C9A8]">
                      <button onClick={() => startQuiz()} className="flex-1 bg-gradient-to-r from-[#8A5A33] to-[#5E3C1E] text-amber-50 font-bold py-4 px-4 rounded-2xl shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
                        <Pencil size={18}/> {courseType === "listening" ? "問題を解く" : `理解度チェック (${activeArticle.questions.length}問)`}
                      </button>
                      
                      <button onClick={() => changeScreen("result")} className="flex-1 bg-white border-2 border-[#E5C9A8] text-[#764C28] font-bold py-4 px-4 rounded-2xl hover:border-[#D4A373] hover:bg-[#F8F1E7] active:scale-95 transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
                        <BookOpen size={18} /> すぐに解説を見る
                      </button>
                    </div>
                  )}
                </div>
              )}

            </div>
          </div>
        )}

        {/* ディクテーション (書き取り) 画面 (外枠なし) */}
        {currentScreen === "dictation" && activeArticle && activeArticle.sentences && (
          <div className="animate-fade-in-up pb-36">
            <div className="mb-6 flex justify-between items-center border-b border-[#E5C9A8] pb-3">
              <HeaderBackButton onClick={() => changeScreen("mode_select")} text="中断して戻る" />
              <span className="text-xs font-bold text-[#A67144] tracking-widest uppercase bg-white px-3.5 py-1 rounded-full border border-[#E5C9A8]" dir="ltr">
                SENTENCE {dictationIndex + 1} / {activeArticle.sentences.length}
              </span>
            </div>
            
            <div className="text-center py-4">
              <h3 className="font-bold text-[#5E3C1E] mb-6 font-serif text-xl flex justify-center items-center gap-2">
                <PenTool size={24} className="text-amber-500"/> 書き取り練習
              </h3>
              
              <button onClick={() => speakText(activeArticle.sentences[dictationIndex].arabic, activeArticle.sentences[dictationIndex].speaker)} className="bg-amber-100 text-[#8A5A33] w-20 h-20 rounded-full mb-8 hover:bg-amber-200 transition-all shadow-sm mx-auto flex items-center justify-center active:scale-90 border-2 border-amber-300">
                <Volume2 size={36} />
              </button>
              
              <div className="mb-8 text-3xl leading-[2.4] font-arabic text-[#3E2713] flex flex-wrap justify-center gap-3" dir="rtl">
                {maskedSentence.map((word, i) => (i === hiddenWordIndex ? (<span key={i} className="border-b-4 border-amber-500 min-w-[100px] text-[#8A5A33] px-2 font-bold bg-white/80 rounded-t-lg">{dictationFeedback === "correct" || dictationFeedback === "incorrect" ? word : "______"}</span>) : (<span key={i}>{word}</span>)))}
              </div>
              
              <input type="text" dir="rtl" value={dictationInput} onChange={(e) => setDictationInput(e.target.value)} placeholder="キーボードで入力..." className="w-full p-4 text-3xl border-2 border-[#E5C9A8] rounded-2xl focus:border-amber-500 outline-none font-arabic text-center mb-6 text-[#4A3018] bg-white placeholder:text-stone-300" />
              
              <div>
                {dictationFeedback === "correct" && <div className="mb-6 bg-emerald-50 text-emerald-800 p-4 rounded-2xl font-bold border border-emerald-200 text-lg flex items-center justify-center gap-2"><CheckCircle size={22}/> 正解！ Excellent!</div>}
                {dictationFeedback === "incorrect" && <div className="mb-6 bg-red-50 text-red-800 p-4 rounded-2xl font-bold border border-red-200 text-lg flex items-center justify-center gap-2"><Frown size={22}/> 正解は「{targetWordClean}」</div>}
                {dictationFeedback === "none" ? (
                  <button onClick={checkDictation} className="w-full bg-[#764C28] text-white font-bold py-4 rounded-2xl hover:bg-[#5E3C1E] transition-all shadow-md text-lg active:scale-95">答え合わせ</button>
                ) : (
                  <button onClick={nextDictation} className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-[#4A3018] font-bold py-4 rounded-2xl transition-all shadow-md text-lg active:scale-95 flex justify-center items-center gap-2">{dictationIndex < activeArticle.sentences.length - 1 ? "次の文へ" : "結果を見る"} <ChevronRight size={20}/></button>
                )}
              </div>
            </div>
            
            {/* キーボード */}
            <div className="fixed bottom-0 left-0 w-full bg-[#EBE6DF] border-t border-[#D1C4B7] p-3 z-30 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.2)]">
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-wrap gap-1.5 justify-center mb-2.5" dir="rtl">
                  {ARABIC_KEYS.map((char) => (
                    <button key={char} onClick={() => handleKeyClick(char)} className="w-9 h-11 sm:w-11 sm:h-13 bg-white rounded-xl shadow-sm border-b-2 border-[#D1C4B7] active:translate-y-0.5 font-arabic text-2xl hover:bg-[#F8F1E7] text-[#4A3018] transition-all">
                      {char}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2 justify-center px-2">
                  <button onClick={handleSpace} className="flex-1 max-w-[200px] h-11 sm:h-12 bg-white rounded-xl shadow-sm border-b-2 border-[#D1C4B7] active:translate-y-0.5 text-[#8A5A33] font-bold text-xs tracking-widest transition-all">SPACE</button>
                  <button onClick={handleBackspace} className="w-20 h-11 sm:h-12 bg-[#F8F1E7] text-[#A67144] rounded-xl shadow-sm border-b-2 border-[#D4A373] active:translate-y-0.5 font-bold text-xl transition-all">⌫</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* クイズ画面 (外枠と幅制限をなくし、広く表示) */}
        {currentScreen === "quiz" && activeArticle && (
          <div className="animate-fade-in-up pb-12">
            
            <div className="flex justify-between items-center mb-2">
              <HeaderBackButton 
                onClick={() => changeScreen(courseType === "poetry" ? "poetry_read" : courseType === "reorder" ? "list" : "reader")} 
                text={courseType === "poetry" ? "詩に戻る" : courseType === "reorder" ? "一覧に戻る" : "記事に戻る"} 
              />
            </div>

            {/* クイズ操作バー */}
            <div className="flex items-center justify-between border-b-2 border-[#E5C9A8] pb-3 mb-6" dir="ltr">
              <button
                onClick={prevQuizQuestion}
                disabled={currentQuestionIndex === 0}
                className={`flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-xl transition-all ${
                  currentQuestionIndex === 0
                    ? "text-stone-300 cursor-not-allowed"
                    : "text-[#764C28] bg-white border border-[#E5C9A8] hover:bg-[#F8F1E7] active:scale-95"
                }`}
              >
                <ArrowLeft size={15} /> 前の問題
              </button>

              <span className="text-xs font-bold text-[#8A5A33] tracking-widest bg-white px-3.5 py-1 rounded-full border border-[#E5C9A8]">
                {currentQuestionIndex + 1} / {activeArticle.questions.length}
              </span>

              <button
                onClick={skipQuizQuestion}
                className="flex items-center gap-1 text-xs font-bold text-amber-800 bg-amber-100/80 hover:bg-amber-200 border border-amber-300 px-3.5 py-1.5 rounded-xl active:scale-95 transition-all"
              >
                スキップ <SkipForward size={14} />
              </button>
            </div>

            {/* 本文確認トグルボタン */}
            {(courseType === "reading" || courseType === "poetry") && (
              <div className="mb-6">
                <button 
                  onClick={() => setIsQuizTextVisible(!isQuizTextVisible)}
                  className="w-full py-2.5 bg-white border border-[#E5C9A8] text-[#8A5A33] font-bold text-sm rounded-xl hover:bg-[#F8F1E7] transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <BookOpen size={16} /> {isQuizTextVisible ? "本文を隠す" : "本文を確認する"}
                </button>
                {isQuizTextVisible && (
  <div className="mt-3 p-4 sm:p-6 bg-white/80 rounded-2xl border border-[#D4A373] max-h-[45vh] overflow-y-auto">
    <p className="text-xl sm:text-2xl leading-[2.3] font-arabic text-[#3E2713] text-justify" dir="rtl">
                      {(() => {
                        if (activeArticle.level === "上級") {
                          if (activeArticle.contentPlain) return activeArticle.contentPlain;
                          if (activeArticle.sentences && activeArticle.sentences.length > 0) return removeTashkeel(activeArticle.sentences.map(s => s.arabic).join(" "));
                          return activeArticle.contentVoweled ? removeTashkeel(activeArticle.contentVoweled) : "";
                        } else {
                          return activeArticle.contentVoweled || activeArticle.contentPlain || activeArticle.sentences?.map(s => s.arabic).join(" ") || "";
                        }
                      })()}
                    </p>
                  </div>
                )}
              </div>
            )}

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
                        speakText("\u200Fمُمْتَاز\u200F");
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
                        speakText("\u200Fمُمْتَاز\u200F");
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
                  <div className="text-left py-2" dir="ltr">
                    <span className="text-xs font-bold text-[#A67144] uppercase tracking-widest mb-3 block flex items-center gap-1.5">
                      <CheckCircle size={14}/> Multiple Choice
                    </span>
                    <div className="text-xl sm:text-2xl font-bold mb-8 text-[#4A3018] leading-relaxed text-left" dir="ltr">
                      {currentQ.text.split('\n').map((line, i) => (
                        <p 
                          key={i} 
                          className={line.includes('؟') || line.includes('هَذَا') ? "text-3xl font-arabic mt-4 text-right text-[#3E2713]" : "text-lg sm:text-xl text-[#4A3018] font-bold"}
                          dir={line.includes('؟') || line.includes('هَذَا') ? "rtl" : "ltr"}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                    <div className="space-y-3 mb-8">
                      {currentQ.options.map((option, idx) => {
                        let btnClass = "bg-white border-[#E5C9A8] text-[#5E3C1E] hover:border-[#8A5A33] active:scale-[0.99]";
                        if (isQuizResultVisible) {
                          if (idx === currentQ.correctIndex) { btnClass = "bg-emerald-50 border-emerald-500 text-emerald-900 font-bold shadow-sm"; } else if (idx === quizSelectedOption) { btnClass = "bg-red-50 border-red-400 text-red-900"; } else { btnClass = "bg-stone-50 border-stone-200 text-stone-400 opacity-50"; }
                        }
                        return (
                          <button 
                            key={idx} 
                            onClick={() => handleQuizOptionClick(idx)} 
                            disabled={isQuizResultVisible} 
                            dir="ltr"
                            className={`w-full p-4 sm:p-5 text-left border-2 rounded-2xl transition-all duration-200 font-bold text-base sm:text-lg flex items-center justify-between ${btnClass}`}
                          >
                            <span>{option}</span>
                            {isQuizResultVisible && idx === currentQ.correctIndex && <CheckCircle className="text-emerald-500 flex-shrink-0 ml-2" size={22} />}
                            {isQuizResultVisible && idx === quizSelectedOption && idx !== currentQ.correctIndex && <XCircle className="text-red-500 flex-shrink-0 ml-2" size={22} />}
                          </button>
                        );                
                      })}
                    </div>
                    {isQuizResultVisible && (
                      <div className="animate-fade-in-up mt-8 border-t-2 border-[#E5C9A8] pt-6">
                        <div className={`p-5 sm:p-6 rounded-2xl mb-6 border-2 ${quizSelectedOption === currentQ.correctIndex ? "bg-[#F2FCF5] border-emerald-300 text-emerald-900" : "bg-[#FFF5F5] border-red-200 text-red-900"}`}>
                          <p className="font-bold text-xl sm:text-2xl mb-3 flex items-center gap-2">
                            {quizSelectedOption === currentQ.correctIndex ? <><PartyPopper size={26}/> Excellent!</> : <><Frown size={26}/> Try Again...</>}
                          </p>
                          
                          <p className="text-sm sm:text-base font-medium leading-relaxed text-left mt-3 whitespace-pre-wrap" dir="ltr">
                            {currentQ.explanation}
                          </p>
            
                          {currentQ.relatedGrammarId && (
                            <div className="mt-4">
                              <button 
                                onClick={() => handleJumpToGrammar(currentQ.relatedGrammarId!)}
                                className="bg-white border border-[#D4A373] text-[#764C28] text-xs px-4 py-2 rounded-full font-bold hover:bg-[#F8F1E7] transition-colors inline-flex items-center gap-2"
                              >
                                <BookOpen size={15} /> 
                                この文法を復習する ({getArticleById(currentQ.relatedGrammarId!)?.category})
                              </button>
                            </div>
                          )}
            
                          {currentQ.audio && (
                            <button 
                              onClick={() => speakText(currentQ.audio!)} 
                              className="flex items-center gap-2 bg-amber-100 border border-amber-300 text-amber-900 px-5 py-2 rounded-full text-xs font-bold hover:bg-amber-200 transition-colors mt-4 active:scale-95"
                            >
                              <Volume2 size={16} /> 発音を聞く
                            </button>
                          )}
                        </div>
                        <button onClick={nextQuizQuestion} className="w-full bg-gradient-to-r from-[#8A5A33] to-[#5E3C1E] text-white font-bold py-4 sm:py-5 rounded-2xl shadow-md hover:brightness-110 active:scale-95 transition-all text-base sm:text-lg flex items-center justify-center gap-2">
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

        {/* 結果・解説画面 (外枠をなくし、全文対訳と解説を画面幅いっぱいに表示) */}
        {currentScreen === "result" && activeArticle && (
          <div className="pb-20 animate-fade-in-up">
            <div className="mb-4">
              <HeaderBackButton onClick={() => changeScreen(courseType === "poetry" ? "poets" : "list")} text="一覧に戻る" />
            </div>

            {/* 1. スコアサマリー (外枠なし) */}
            <div className="text-center py-6 mb-8 border-b-2 border-[#E5C9A8]">
              <div className="flex justify-center mb-3">
                <PartyPopper size={56} className="text-amber-500" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-1 text-[#4A3018]">{activeArticle.title}</h2>
              <p className="text-[#A67144] text-xs font-bold tracking-widest uppercase mb-6">Results & Review</p>
              
              {activeArticle.questions && activeArticle.questions.length > 0 && (
                <div className="mb-6">
                  <div className="text-4xl sm:text-5xl font-bold text-[#8A5A33]">
                    {quizScore} <span className="text-lg sm:text-xl text-[#A67144] font-normal">/ {activeArticle.questions.length} 問正解</span>
                  </div>
                  <div className="mt-2 inline-block bg-amber-100 text-amber-900 text-xs font-bold px-4 py-1 rounded-full border border-amber-200">
                    正答率: {Math.round((quizScore / activeArticle.questions.length) * 100)}%
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                <button 
                  onClick={() => startQuiz()} 
                  className="flex-1 py-3.5 px-4 bg-gradient-to-r from-[#8A5A33] to-[#5E3C1E] text-white font-bold text-sm sm:text-base rounded-2xl shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Pencil size={16} /> もう一度解く
                </button>
                <button 
                  onClick={() => changeScreen(courseType === "poetry" ? "poets" : "list")} 
                  className="flex-1 py-3.5 px-4 bg-white border border-[#E5C9A8] text-[#764C28] font-bold text-sm sm:text-base rounded-2xl hover:bg-[#EBE6DF] active:scale-95 transition-all"
                >
                  一覧に戻る
                </button>
              </div>
            </div>

            {/* 2. 全問題と正解・解説の一覧 (外枠をなくし、区切り線で広く表示) */}
            {activeArticle.questions && activeArticle.questions.length > 0 && (
              <div className="mb-12">
                <div className="flex items-center gap-2 border-b-2 border-amber-400 pb-3 mb-4">
                  <BookOpen size={22} className="text-amber-600" />
                  <h3 className="font-serif font-bold text-xl text-[#4A3018]">問題の振り返り・解答解説</h3>
                </div>

                <div className="divide-y divide-[#E5C9A8]">
                  {activeArticle.questions.map((q, idx) => {
                    const isCorrect = userAnswers[idx] === true;

                    return (
                      <div key={idx} className="py-6">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-xs font-bold text-[#8A5A33] tracking-widest uppercase">
                            第 {idx + 1} 問
                          </span>
                          {isCorrect ? (
                            <span className="bg-emerald-50 text-emerald-700 border border-emerald-300 text-xs font-bold px-3 py-0.5 rounded-full flex items-center gap-1">
                              <CheckCircle size={13} /> 正解
                            </span>
                          ) : (
                            <span className="bg-rose-50 text-rose-700 border border-rose-300 text-xs font-bold px-3 py-0.5 rounded-full flex items-center gap-1">
                              <XCircle size={13} /> 不正解 / スキップ
                            </span>
                          )}
                        </div>

                        <p className="text-base sm:text-lg font-bold text-[#4A3018] mb-3 whitespace-pre-wrap leading-relaxed">
                          {q.text}
                        </p>

                        <div className="bg-white/80 p-3.5 sm:p-4 rounded-xl border border-[#E5C9A8] mb-3">
                          <span className="text-[10px] font-bold text-[#A67144] uppercase tracking-wider block mb-1">
                            正解 (Correct Answer)
                          </span>
                          <p className="text-xl sm:text-2xl font-bold text-[#3E2713] font-arabic leading-relaxed" dir="rtl">
                            {q.type === "reorder" 
                              ? (q.correctOrder || []).join(" ") 
                              : q.options && q.correctIndex !== undefined
                                ? q.options[q.correctIndex]
                                : q.explanation.split("\n")[0]}
                          </p>
                        </div>

                        <div className="text-sm sm:text-base text-[#5E3C1E] leading-relaxed font-medium py-1">
                          <span className="text-[11px] font-bold text-[#8A5A33] uppercase tracking-wider block mb-1">解説</span>
                          <p className="whitespace-pre-wrap">{q.explanation}</p>
                        </div>

                        <div className="mt-3 flex flex-wrap gap-2 justify-end">
                          {q.audio && (
                            <button 
                              onClick={() => speakText(q.audio!)}
                              className="bg-white border border-[#D4A373] text-[#764C28] text-xs px-4 py-1.5 rounded-full font-bold hover:bg-[#F8F1E7] transition-all flex items-center gap-1.5"
                            >
                              <Volume2 size={14} /> 音声を聞く
                            </button>
                          )}
                          {q.relatedGrammarId && (
                            <button 
                              onClick={() => handleJumpToGrammar(q.relatedGrammarId!)}
                              className="bg-[#8A5A33] text-white text-xs px-4 py-1.5 rounded-full font-bold hover:bg-[#5E3C1E] transition-all flex items-center gap-1.5"
                            >
                              <BookOpen size={14} /> 関連文法を確認
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 3. 全文対訳・スクリプト解説 (外枠をなくし、画面幅いっぱいに表示) */}
            {(courseType === "poetry" || courseType === "story" || courseType === "reading" || courseType === "listening" || courseType === "conversation") && activeArticle.sentences && activeArticle.sentences.length > 0 && (
              <div className="mt-8 pt-6 border-t-2 border-[#E5C9A8]">
                <div className="flex items-center gap-2 border-b-2 border-amber-400 pb-3 mb-4">
                  {courseType === "conversation" ? (
                    <MessageCircle size={22} className="text-amber-600" />
                  ) : courseType === "listening" ? (
                    <Headphones size={22} className="text-amber-600" />
                  ) : courseType === "poetry" ? (
                    <ScrollText size={22} className="text-amber-600" />
                  ) : courseType === "story" ? (
                    <Library size={22} className="text-amber-600" />
                  ) : (
                    <BookOpen size={22} className="text-amber-600" />
                  )}
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#4A3018]">
                    {courseType === "conversation"
                      ? "会話スクリプト・全文対訳・解説"
                      : courseType === "listening"
                      ? "会話スクリプト・全文対訳"
                      : courseType === "poetry"
                      ? "詩の全文対訳・詳細解説"
                      : courseType === "story"
                      ? "物語の全文対訳・文法詳細解説"
                      : "本文の全文対訳・文法詳細解説"}
                  </h3>
                </div>

                <div className="divide-y divide-[#E5C9A8]">
                  {activeArticle.sentences.map((sent, idx) => (
                    <div key={idx} className="py-6 text-left" dir="ltr">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold text-[#8A5A33] tracking-widest">
                          {courseType === "conversation"
                            ? (sent.speaker ? sent.speaker : `第 ${idx + 1} 文`)
                            : courseType === "listening"
                            ? (sent.speaker ? `Speaker ${sent.speaker}` : `第 ${idx + 1} 文`)
                            : courseType === "story"
                            ? `段落 ${idx + 1}`
                            : courseType === "poetry"
                            ? `第 ${idx + 1} 句`
                            : `第 ${idx + 1} 文`}
                        </span>
                        <button
                          onClick={() => speakText(sent.arabic)}
                          className="flex items-center gap-1.5 bg-white border border-[#E5C9A8] text-[#8A5A33] px-3.5 py-1 rounded-full text-xs font-bold hover:bg-amber-100 active:scale-95 transition-all"
                        >
                          <Volume2 size={14} /> 発音を聞く
                        </button>
                      </div>

                      <p className={`font-arabic text-[#3E2713] my-3 leading-[2.3] text-xl sm:text-2xl ${courseType === "poetry" ? "text-center" : "text-right"}`} dir="rtl">
                        {sent.arabic.includes('\u200F') ? sent.arabic : `\u200F${sent.arabic}\u200F`}
                      </p>

                      {sent.japanese && (
                        <div className="my-3">
                          <span className="text-[10px] font-bold text-[#A67144] uppercase tracking-wider block mb-0.5">日本語訳</span>
                          <p className="text-sm sm:text-base text-[#4A3018] font-bold leading-relaxed">{sent.japanese}</p>
                        </div>
                      )}

                      {sent.note && (
                        <div className="mt-3 pt-3 border-t border-dashed border-[#D4A373]/60 text-sm sm:text-base text-[#5E3C1E] leading-relaxed font-medium whitespace-pre-wrap">
                          <span className="text-[10px] font-bold text-[#8A5A33] uppercase tracking-widest block mb-1">解説・語彙・文法</span>
                          {sent.note.trim()}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </main>

{/* ▼ ここに日本語訳モーダルを追加 */}
{showJapaneseModal && activeArticle && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in-up" onClick={() => setShowJapaneseModal(false)}>
          <div className="bg-white rounded-[2rem] max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-2xl border border-[#E5C9A8] p-6 text-left relative" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4 border-b border-[#E5C9A8] pb-3">
              <h3 className="font-serif font-bold text-xl text-[#4A3018]">{activeArticle.title} - 日本語訳</h3>
              <button onClick={() => setShowJapaneseModal(false)} className="text-stone-400 hover:text-stone-600 transition-colors"><XCircle size={22}/></button>
            </div>
            <div className="space-y-3">
              {activeArticle.sentences && activeArticle.sentences.length > 0 ? (
                activeArticle.sentences.map((s: any, i: number) => (
                  <div key={i} className="bg-[#FCFAF5] p-3.5 rounded-xl border border-[#E5C9A8]/60 shadow-sm">
                    <span className="text-[10px] font-bold text-[#A67144] block mb-1">
                      {s.speaker ? s.speaker : `第 ${i + 1} 文`}
                    </span>
                    <p className="text-sm sm:text-base text-[#4A3018] font-bold leading-relaxed">{s.japanese || "（訳なし）"}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-stone-600 py-6 text-center">日本語訳データがありません。</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 決済モーダル */}
      {showUpgradeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-[2.5rem] max-w-md w-full overflow-hidden shadow-2xl border border-[#E5C9A8]">
            <div className="bg-[#4A3018] p-8 text-center relative">
              <button onClick={() => setShowUpgradeModal(false)} className="absolute top-4 right-4 text-amber-200/50 hover:text-white transition-colors"><XCircle size={24}/></button>
              <div className="w-20 h-20 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Crown size={40} className="text-[#3E2713]" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">Premium Plan</h3>
              <p className="text-amber-200 text-sm mt-1 font-medium">Arabi Lab の全ての機能を使おう</p>
            </div>
            <div className="p-8 space-y-6">
              <ul className="space-y-4">
                {[ "1000問以上の演習が解き放題", "物語・古典詩へのフルアクセス", "全てのリスニング・書き取り練習" ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#5E3C1E] font-medium text-sm">
                    <CheckCircle size={18} className="text-emerald-500" /> {item}
                  </li>
                ))}
              </ul>
              <div className="bg-[#F8F1E7] p-4 rounded-2xl text-center border border-[#E5C9A8]">
                <p className="text-3xl font-bold text-[#3E2713]">¥500 <span className="text-sm font-normal opacity-60">/ 月</span></p>
              </div>
              <button 
                onClick={async () => {
                  if (!user) {
                    alert("プレミアムプランに登録するには、まずログインしてください。");
                    setShowUpgradeModal(false);
                    handleLogin();
                    return;
                  }

                  const response = await fetch('/api/checkout', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ userId: user?.id, email: user?.email })
                  });
                  const data = await response.json();
                  if (data.url) {
                    window.location.href = data.url;
                  } else {
                    alert("エラーが発生しました: " + (data.error || "不明なエラー"));
                  }
                }}
                className="w-full py-4 bg-gradient-to-r from-[#8A5A33] to-[#5E3C1E] text-white font-bold rounded-2xl shadow-xl hover:-translate-y-1 active:scale-95 transition-all text-lg"
              >
                今すぐ登録して学習を開始する
              </button>
            </div>
          </div>
        </div>
      )}

{/* フローティング・オーディオプレイヤー（端から端までのスリムバー＆スクロール開閉仕様） */}
{(currentScreen === "reader" || currentScreen === "poetry_read") && learningMode !== "grammar" && learningMode !== "listening" && (
        <div
          className={`fixed bottom-0 left-0 w-full z-40 bg-[#3E2713]/95 backdrop-blur-md border-t border-[#A67144]/40 shadow-[0_-4px_20px_rgba(0,0,0,0.25)] px-4 py-1.5 text-white transition-transform duration-300 ease-in-out ${
            isAudioBarVisible ? "translate-y-0" : "translate-y-full"
          }`}
          dir="ltr"
        >
          <div className="max-w-4xl mx-auto flex items-center justify-between relative">
            
            {/* 1. 速度ポップアップメニュー（展開時） */}
            {showSpeedMenu && (
              <div className="absolute -top-12 left-0 bg-white/95 backdrop-blur-md border border-[#D4A373] p-1 rounded-full shadow-xl flex gap-1 z-50 animate-fade-in-up">
                {SPEED_OPTIONS.map((rate) => (
                  <button
                    key={rate}
                    onClick={() => {
                      handleSpeedChange(rate);
                      setShowSpeedMenu(false);
                    }}
                    className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all ${
                      playbackRate === rate
                        ? "bg-[#8A5A33] text-white shadow-sm"
                        : "text-[#764C28] hover:bg-[#F8F1E7]"
                    }`}
                  >
                    {rate}x
                  </button>
                ))}
              </div>
            )}

{/* 2. 左側：JPボタン ＆ スピード切替ボタン */}
<div className="flex items-center gap-1.5">
              {/* JPボタン */}
              <button
                onClick={() => setShowJapaneseModal(true)}
                className="bg-[#8A5A33] hover:bg-[#5E3C1E] text-amber-200 px-2.5 py-1 rounded-md text-xs font-bold border border-[#A67144]/60 active:scale-95 transition-all shadow-sm"
                title="日本語訳を表示"
              >
                JP
              </button>

              <button
                onClick={cyclePlaybackRate}
                onContextMenu={(e) => {
                  e.preventDefault();
                  setShowSpeedMenu(!showSpeedMenu);
                }}
                className="bg-[#5E3C1E] hover:bg-[#764C28] text-amber-300 px-2.5 py-1 rounded-md text-xs font-bold border border-[#A67144]/40 active:scale-95 transition-all"
                title="タップで速度切替"
              >
                {playbackRate}x
              </button>
              <button
                onClick={() => setShowSpeedMenu(!showSpeedMenu)}
                className="text-stone-400 hover:text-amber-300 text-[10px] p-1 transition-colors"
                title="速度一覧を開く"
              >
                ▲
              </button>
            </div>

            {/* 3. 中央：再生コントロール群（スリム化） */}
            <div className="flex items-center gap-3 sm:gap-5">
              {/* 停止 */}
              <button
                onClick={handleStopPlayback}
                disabled={audioState === "idle"}
                className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                  audioState === "idle"
                    ? "text-stone-500 opacity-40 cursor-not-allowed"
                    : "text-amber-200 hover:bg-white/10 active:scale-90"
                }`}
                title="停止"
              >
                <Square size={14} className={audioState !== "idle" ? "fill-current" : ""} />
              </button>

              {/* 前の文 */}
              <button
                onClick={handlePrevSentence}
                disabled={audioState === "idle" || !activeArticle?.sentences}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  audioState === "idle" || !activeArticle?.sentences
                    ? "text-stone-500 opacity-40 cursor-not-allowed"
                    : "text-amber-100 hover:bg-white/10 active:scale-90"
                }`}
                title="前の文"
              >
                <SkipBack size={17} className={audioState !== "idle" ? "fill-current" : ""} />
              </button>

              {/* メイン再生 / 一時停止ボタン */}
              <button
                onClick={handleTogglePlay}
                className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 text-[#3E2713] flex items-center justify-center shadow-md hover:brightness-110 active:scale-95 transition-all border border-amber-200"
                title={audioState === "playing" ? "一時停止" : "再生"}
              >
                {audioState === "playing" ? (
                  <Pause size={18} className="fill-current" />
                ) : (
                  <Play size={18} className="fill-current ml-0.5" />
                )}
              </button>

              {/* 次の文 */}
              <button
                onClick={handleNextSentence}
                disabled={audioState === "idle" || !activeArticle?.sentences}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  audioState === "idle" || !activeArticle?.sentences
                    ? "text-stone-500 opacity-40 cursor-not-allowed"
                    : "text-amber-100 hover:bg-white/10 active:scale-90"
                }`}
                title="次の文"
              >
                <SkipForward size={17} className={audioState !== "idle" ? "fill-current" : ""} />
              </button>
            </div>

            {/* 4. 右側：アニメーション波形ステータス */}
            <div className="w-10 flex justify-end items-center">
              {audioState === "playing" ? (
                <div className="flex items-end gap-0.5 h-3.5">
                  <span className="w-1 bg-amber-400 rounded-full animate-pulse h-2.5"></span>
                  <span className="w-1 bg-amber-300 rounded-full animate-pulse h-3.5 delay-75"></span>
                  <span className="w-1 bg-amber-500 rounded-full animate-pulse h-2 delay-150"></span>
                </div>
              ) : (
                <Volume2 size={16} className="text-stone-400 opacity-50" />
              )}
            </div>

          </div>
        </div>
      )}

      {/* フッター */}
      <footer className="bg-[#2C1A0D] text-[#D4A373] py-10 pb-36 text-center text-xs border-t-4 border-[#1A0F08]">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-8 mb-6">
          <Link href="/faq" className="hover:text-amber-400 transition-colors font-medium">よくある質問</Link>
          <Link href="/terms" className="hover:text-amber-400 transition-colors font-medium">利用規約</Link>
          <Link href="/privacy" className="hover:text-amber-400 transition-colors font-medium">プライバシーポリシー</Link>
          <Link href="/law" className="hover:text-amber-400 transition-colors font-medium">特定商取引法に基づく表記</Link>
          
          <a 
            href="https://www.instagram.com/arabi_lab/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-amber-400 transition-colors flex items-center gap-1 font-medium"
            title="Instagram"
          >
            <Instagram size={16} /> Instagram
          </a>
        </div>
        <p className="opacity-40 font-serif tracking-widest">&copy; 2024 Arabi Lab. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

// --- UI Components ---
function VocabButton({ v, i, isRevealed, isSaved, onReveal, onSave }: any) { 
  return (
    <button onClick={onReveal} className={`relative px-4 py-2 rounded-xl text-sm transition-all duration-300 border-2 flex items-center justify-center min-w-[80px] ${isRevealed ? "bg-[#F8F1E7] border-[#D4A373] text-[#5E3C1E] shadow-sm scale-105" : "bg-white border-dashed border-[#E5C9A8] text-[#A67144] hover:border-amber-400 hover:text-amber-600"}`}>
      <span className={`font-bold ${isRevealed ? "" : "font-arabic text-xl"}`}>{isRevealed ? v.meaning : v.word}</span>
      {isRevealed && !isSaved && <span onClick={(e) => { e.stopPropagation(); onSave(); }} className="absolute -top-2.5 -left-2.5 bg-[#8A5A33] text-white w-6 h-6 rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-[#5E3C1E] hover:scale-110 transition-all border-2 border-white"><Plus size={16} strokeWidth={3} /></span>}
      {isSaved && <span className="absolute -top-2.5 -left-2.5 text-emerald-600 bg-white rounded-full border-2 border-emerald-200 w-6 h-6 flex items-center justify-center shadow-sm"><Check size={14} strokeWidth={3} /></span>}
    </button>
  ); 
}

function LevelButton({ title, subtitle, color, icon: Icon, onClick }: any) { 
  return (
    <button onClick={onClick} className={`w-full h-28 sm:h-36 p-2 sm:p-4 rounded-3xl sm:rounded-[2rem] sm:rounded-tr-xl shadow-sm border-2 ${color} flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all duration-300 group`}>
      <div className="mb-2 sm:mb-3 text-[#A67144] group-hover:text-[#8A5A33] transition-colors relative z-10 group-hover:scale-110 duration-300">
        <Icon className="w-8 h-8 sm:w-11 sm:h-11" strokeWidth={1.5} />
      </div>
      <span className="text-[11px] sm:text-lg font-bold tracking-tight sm:tracking-wide relative z-10 whitespace-nowrap">{title}</span>
      <span className="text-[8px] sm:text-[10px] font-bold opacity-60 uppercase mt-0.5 sm:mt-1 tracking-widest relative z-10">{subtitle}</span>
    </button>
  ); 
}

function ModeButton({ icon: Icon, title, subtitle, color, onClick }: any) { 
  return (
    <button onClick={onClick} className={`border-2 ${color} p-5 md:p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 active:scale-95 flex flex-col items-center gap-3 group h-full justify-center`}>
      <div className="text-[#A67144] group-hover:text-[#8A5A33] transition-colors group-hover:scale-110 duration-300">
        <Icon size={36} strokeWidth={1.5} />
      </div>
      <div className="text-center">
        <span className="font-bold text-base block">{title}</span>
        <span className="text-[10px] opacity-60 font-bold tracking-widest uppercase mt-1 block">{subtitle}</span>
      </div>
    </button>
  ); 
}

function StatCard({ label, value, color }: any) { 
  return (
    <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-[#E5C9A8]">
      <p className="text-[#A67144] text-[10px] font-bold uppercase tracking-widest mb-1.5">{label}</p>
      <p className={`text-2xl sm:text-3xl font-bold font-serif ${color}`}>{value}</p>
    </div>
  ); 
}

function SettingItem({ icon: Icon, label, onClick }: { icon: any, label: string, onClick: () => void }) {
  return (
    <button onClick={onClick} className="w-full flex items-center justify-between p-4 sm:p-5 hover:bg-[#F8F1E7] transition-colors text-left group">
      <div className="flex items-center gap-4">
        <span className="bg-white border border-[#E5C9A8] w-10 h-10 rounded-full flex items-center justify-center shadow-sm">
          <Icon size={18} className="text-[#8A5A33]" strokeWidth={2} />
        </span>
        <span className="text-[#5E3C1E] font-bold text-sm">{label}</span>
      </div>
      <ChevronRight size={20} className="text-[#D4A373] group-hover:text-amber-600 transition-colors" />
    </button>
  );
}

/* 文字練習 (外枠なし) */
function OrthographyDrill({ question, onNext, isLast }: any) {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    setIsRevealed(false);
  }, [question]);

  return (
    <div className="text-center animate-fade-in-up py-2">
      <span className="inline-flex items-center gap-1.5 bg-[#F8F1E7] text-[#8A5A33] border border-[#D4A373] text-[10px] font-bold px-3 py-1 rounded-full mb-4 tracking-widest uppercase">
        <PenTool size={14} /> 文字練習
      </span>
        
      <h3 className="text-xs font-bold mb-3 text-[#A67144] uppercase tracking-widest">Question</h3>
      
      <div className="text-xl sm:text-2xl font-bold font-arabic text-[#3E2713] mb-6 py-6 px-4 bg-white/80 rounded-2xl border border-[#D4A373] dir-rtl whitespace-pre-wrap leading-relaxed">
        {question.text}
      </div>

      {!isRevealed ? (
        <button 
          onClick={() => setIsRevealed(true)} 
          className="w-full bg-gradient-to-r from-[#8A5A33] to-[#5E3C1E] text-white font-bold py-4 rounded-2xl shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 text-base"
        >
          <Eye size={20} /> 答えを見る
        </button>
      ) : (
        <div className="animate-fade-in-up">
          <div className="bg-white border-2 border-[#D4A373] rounded-2xl p-6 mb-6">
            <div className="text-xs text-[#A67144] font-bold mb-2 tracking-widest uppercase">Answer</div>
            <div className="text-2xl sm:text-3xl text-[#4A3018] font-arabic font-bold leading-relaxed whitespace-pre-wrap">
              {question.explanation}
            </div>
          </div>
            
          <button 
            onClick={onNext} 
            className="w-full bg-gradient-to-r from-[#8A5A33] to-[#5E3C1E] text-white font-bold py-4 rounded-2xl shadow-md hover:brightness-110 active:scale-95 transition-all text-base flex justify-center items-center gap-2"
          >
            {isLast ? "結果を見る" : "次の問題へ"} <ChevronRight size={18}/>
          </button>
        </div>
      )}
    </div>
  );
}

/* 並び替え問題 (外枠なし) */
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
    <div className="text-center animate-fade-in-up py-2">
      <span className="inline-flex items-center gap-1.5 bg-[#F8F1E7] text-[#8A5A33] border border-[#D4A373] text-[10px] font-bold px-3 py-1 rounded-full mb-4 tracking-widest uppercase">
        <ArrowRightLeft size={14} /> 並び替え問題
      </span>
      <h3 className="text-lg sm:text-xl font-bold mb-6 text-[#4A3018] whitespace-pre-wrap leading-relaxed">{question.text}</h3>

      {/* 選択した単語のエリア */}
      <div className="min-h-[96px] p-4 sm:p-5 bg-white/80 rounded-2xl border-2 border-dashed border-[#D4A373] flex flex-wrap gap-2.5 justify-center items-center mb-6" dir="rtl">
        {selectedWords.length === 0 && !isChecked && (
          <span className="text-[#A67144] font-medium text-sm">下の単語をタップして文を作成してください</span>
        )}
        {selectedWords.map((word, idx) => (
          <button 
            key={`sel-${idx}`} 
            onClick={() => handleDeselect(word, idx)}
            className={`px-4 py-2.5 rounded-xl font-arabic text-2xl shadow-sm transition-all ${isChecked ? (isCorrect ? "bg-emerald-600 text-white border-emerald-700 cursor-default" : "bg-red-500 text-white border-red-600 cursor-default") : "bg-white text-[#4A3018] hover:bg-[#F8F1E7] border border-[#E5C9A8] active:scale-95"}`}
            disabled={isChecked}
          >
            {word}
          </button>
        ))}
      </div>

      {/* 選択肢のエリア */}
      <div className="flex flex-wrap gap-2.5 justify-center mb-8" dir="rtl">
        {availableWords.map((word, idx) => (
          <button 
            key={`avail-${idx}`} 
            onClick={() => handleSelect(word, idx)}
            className="px-4 py-2.5 bg-white text-[#5E3C1E] rounded-xl font-arabic text-2xl shadow-sm border border-[#D4A373] hover:border-[#8A5A33] hover:bg-[#F8F1E7] transition-all active:scale-95"
            disabled={isChecked}
          >
            {word}
          </button>
        ))}
      </div>

      {/* 判定結果 */}
      <div>
        {isChecked ? (
          <div className="animate-fade-in-up">
            <div className={`p-5 sm:p-6 rounded-2xl mb-6 border-2 flex flex-col items-center ${isCorrect ? "bg-[#F2FCF5] border-emerald-300 text-emerald-900" : "bg-[#FFF5F5] border-red-200 text-red-900"}`}>
              <p className="font-bold text-xl sm:text-2xl mb-2 flex items-center gap-2">
                {isCorrect ? <><PartyPopper size={26}/> Excellent!</> : <><Frown size={26}/> Try Again...</>}
              </p>
              {((!isCorrect && showAnswer) || isCorrect) && (
                <div className="flex flex-col items-center mt-4 mb-3">
                  <div className="text-2xl sm:text-3xl font-arabic text-center leading-loose mb-3" dir="rtl">
                    {(question.correctOrder || []).join(" ")}
                  </div>
                  <button
                    onClick={() => onSpeak(question.audio || (question.correctOrder || []).join(" "))}
                    className="flex items-center gap-2 bg-white border border-[#D4A373] text-[#764C28] px-5 py-2 rounded-full text-xs font-bold shadow-sm hover:bg-[#F8F1E7] active:scale-95 transition-all"
                  >
                    <Volume2 size={16} /> 文の音声を聞く
                  </button>
                </div>
              )}
              <p className="text-sm sm:text-base text-left mt-3 whitespace-pre-wrap font-medium w-full" dir="ltr">
                {question.explanation}
              </p>
              {!isCorrect && !showAnswer && (
                <div className="flex gap-3 mt-5 w-full">
                  <button onClick={() => {setIsChecked(false); setSelectedWords([]); setAvailableWords([...(question.correctOrder||[]), ...(question.distractors||[])].sort(()=>Math.random()-0.5));}} className="flex-1 bg-white border-2 border-red-200 text-red-700 py-3 rounded-xl text-sm font-bold hover:bg-red-50 active:scale-95 transition-all">やり直す</button>
                  <button onClick={() => setShowAnswer(true)} className="flex-1 bg-red-100 text-red-800 py-3 rounded-xl text-sm font-bold hover:bg-red-200 active:scale-95 transition-all">正解を見る</button>
                </div>
              )}
            </div>
            <button onClick={onNext} className="w-full bg-gradient-to-r from-[#8A5A33] to-[#5E3C1E] text-white font-bold py-4 sm:py-5 rounded-2xl shadow-md hover:brightness-110 active:scale-95 transition-all text-base sm:text-lg flex items-center justify-center gap-2">
              {isLast ? "結果を見る" : "次の問題へ"} <ChevronRight size={20}/>
            </button>
          </div>
        ) : (
          <button onClick={checkAnswer} disabled={selectedWords.length === 0} className={`w-full font-bold py-4 sm:py-5 rounded-2xl shadow-md transition-all text-base sm:text-lg ${selectedWords.length === 0 ? "bg-[#EBE6DF] text-[#BBAFA0] cursor-not-allowed border border-[#D1C4B7]" : "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:brightness-110 active:scale-95"}`}>
            答え合わせ
          </button>
        )}
      </div>
    </div>
  );
}

/* 穴埋め問題 (外枠なし) */
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
    <div className="text-center animate-fade-in-up py-2">
      <span className="inline-flex items-center gap-1.5 bg-[#F8F1E7] text-[#8A5A33] border border-[#D4A373] text-[10px] font-bold px-3 py-1 rounded-full mb-4 tracking-widest uppercase">
        <Puzzle size={14}/> 穴埋め問題
      </span>
      <h3 className="text-lg sm:text-xl font-bold mb-6 text-[#4A3018] whitespace-pre-wrap leading-relaxed">{question.text}</h3>

      {/* スロットエリア */}
      <div className="p-4 sm:p-6 bg-white/80 rounded-2xl border-2 border-dashed border-[#D4A373] flex flex-wrap gap-2.5 justify-center items-center mb-6 leading-[3.2]" dir="rtl">
        {slots.map((word, idx) => {
          const isFixed = fixedIndices.includes(idx);
          if (word === null) {
            return (
              <div key={`slot-${idx}`} className="h-12 sm:h-14 min-w-[3.5rem] px-3 rounded-xl border-b-4 border-dashed border-[#D4A373] bg-white flex items-center justify-center">
                <span className="text-[#E5C9A8] text-xl font-bold">...</span>
              </div>
            );
          } else {
            return (
              <button 
                key={`slot-${idx}`} 
                onClick={() => handleDeselect(idx)}
                className={`h-12 sm:h-14 px-4 rounded-xl font-arabic text-2xl transition-all flex items-center justify-center ${
                  isFixed 
                    ? "bg-[#EBE6DF] text-[#764C28] border border-[#D1C4B7] cursor-default opacity-80" 
                    : (isChecked 
                        ? (isCorrect ? "bg-emerald-600 text-white border-emerald-700 cursor-default" : "bg-red-500 text-white border-red-600 cursor-default")
                        : "bg-white text-[#4A3018] hover:bg-[#F8F1E7] border border-[#E5C9A8] shadow-sm active:scale-95"
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
      <div className="flex flex-wrap gap-2.5 justify-center mb-8" dir="rtl">
        {availableWords.map((word, idx) => (
          <button 
            key={`avail-${idx}`} 
            onClick={() => handleSelect(word, idx)}
            className="px-4 py-2.5 bg-white text-[#5E3C1E] rounded-xl font-arabic text-2xl shadow-sm border border-[#D4A373] hover:border-[#8A5A33] hover:bg-[#F8F1E7] transition-all active:scale-95"
            disabled={isChecked}
          >
            {word}
          </button>
        ))}
      </div>

      {/* 判定結果 */}
      <div>
        {isChecked ? (
          <div className="animate-fade-in-up">
            <div className={`p-5 sm:p-6 rounded-2xl mb-6 border-2 flex flex-col items-center ${isCorrect ? "bg-[#F2FCF5] border-emerald-300 text-emerald-900" : "bg-[#FFF5F5] border-red-200 text-red-900"}`}>
              <p className="font-bold text-xl sm:text-2xl mb-2 flex items-center gap-2">
                {isCorrect ? <><PartyPopper size={26}/> Excellent!</> : <><Frown size={26}/> Try Again...</>}
              </p>
              {((!isCorrect && showAnswer) || isCorrect) && (
                <div className="flex flex-col items-center mt-4 mb-3">
                  <div className="text-2xl sm:text-3xl font-arabic text-center leading-loose mb-3" dir="rtl">
                    {(question.correctOrder || []).join(" ")}
                  </div>
                  <button
                    onClick={() => onSpeak(question.audio || (question.correctOrder || []).join(" "))}
                    className="flex items-center gap-2 bg-white border border-[#D4A373] text-[#764C28] px-5 py-2 rounded-full text-xs font-bold shadow-sm hover:bg-[#F8F1E7] active:scale-95 transition-all"
                  >
                    <Volume2 size={16} /> 文の音声を聞く
                  </button>
                </div>
              )}
              <p className="text-sm sm:text-base text-left mt-3 whitespace-pre-wrap font-medium w-full" dir="ltr">
                {question.explanation}
              </p>
              {!isCorrect && !showAnswer && (
                <div className="flex gap-3 mt-5 w-full">
                  <button onClick={() => {
                    setIsChecked(false); 
                    const initialSlots = (question.correctOrder || []).map((w: string, i: number) => fixedIndices.includes(i) ? w : null);
                    setSlots(initialSlots);
                    const unfixedCorrectWords = (question.correctOrder || []).filter((_: any, i: number) => !fixedIndices.includes(i));
                    setAvailableWords([...unfixedCorrectWords, ...(question.distractors || [])].sort(()=>Math.random()-0.5));
                  }} className="flex-1 bg-white border-2 border-red-200 text-red-700 py-3 rounded-xl text-sm font-bold hover:bg-red-50 active:scale-95 transition-all">
                    やり直す
                  </button>
                  <button onClick={() => setShowAnswer(true)} className="flex-1 bg-red-100 text-red-800 py-3 rounded-xl text-sm font-bold hover:bg-red-200 active:scale-95 transition-all">
                    正解を見る
                  </button>
                </div>
              )}
            </div>
            <button onClick={onNext} className="w-full bg-gradient-to-r from-[#8A5A33] to-[#5E3C1E] text-white font-bold py-4 sm:py-5 rounded-2xl shadow-md hover:brightness-110 active:scale-95 transition-all text-base sm:text-lg flex items-center justify-center gap-2">
              {isLast ? "結果を見る" : "次の問題へ"} <ChevronRight size={20}/>
            </button>
          </div>
        ) : (
          <button onClick={checkAnswer} disabled={slots.includes(null)} className={`w-full font-bold py-4 sm:py-5 rounded-2xl shadow-md transition-all text-base sm:text-lg ${slots.includes(null) ? "bg-[#EBE6DF] text-[#BBAFA0] cursor-not-allowed border border-[#D1C4B7]" : "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:brightness-110 active:scale-95"}`}>
            答え合わせ
          </button>
        )}
      </div>
    </div>
  );
}