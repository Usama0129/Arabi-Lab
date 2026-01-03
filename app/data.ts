// =================================================================
//  data.ts (完全版)
// =================================================================

// ▼▼▼ 1. 型定義 (Type Definitions) ▼▼▼

// ★ここに "orthography" を追加しました
export type QuestionType = "reading" | "vocabulary" | "grammar" | "tashkeel" | "orthography";

export type QuizQuestion = {
  id?: number; // ★古いデータと新しいデータが混在してもいいように ? (省略可能) にしておくと安全です
  type: QuestionType;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type Vocab = {
  word: string;
  meaning: string;
};

export type Sentence = {
  arabic: string;
  japanese: string;
  speaker?: string;
};

export type Article = {
  id: number;
  title: string;
  category: string;
  // ★ "文法" レベルが含まれていることを確認
  level: "初級" | "会話" | "中級" | "上級" | "文法"; 
  contentVoweled: string;
  contentPlain: string;
  vocabList: Vocab[];
  questions: QuizQuestion[];
  sentences: Sentence[];
  
  // ▼ 画像・動画用（オプショナル）
  videoUrl?: string;     
  imageUrls?: string[];  
};
// ▼▼▼ 2. データ本体 (Articles Data) - articlesは1回だけ定義します ▼▼▼
export const articles: Article[] = [

  // ==========================================
  //  カテゴリー: ホテル (Hotel) - 10 Scenes
  // ==========================================
  {
    id: 10, title: "チェックイン", category: "ホテル", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "حَجْز", meaning: "予約" }, { word: "جَوَاز", meaning: "パスポート" }],
    questions: [
      { id: 1001, type: "reading", text: "客の用件は？", options: ["食事", "チェックイン", "両替", "観光"], correctIndex: 1, explanation: "「تَسْجِيل الدُّخُول (チェックイン)」です。" },
      { id: 1002, type: "reading", text: "予約名は？", options: ["タナカ", "スズキ", "サトウ", "ヤマダ"], correctIndex: 0, explanation: "「تَنَاكَا」と言っています。" },
      { id: 1003, type: "reading", text: "部屋のタイプは？", options: ["山側", "海側", "街側", "庭側"], correctIndex: 1, explanation: "「تُطِلُّ عَلَى الْبَحْرِ (海に面した)」です。" },
      { id: 1004, type: "vocabulary", text: "「مِصْعَد」の意味は？", options: ["階段", "エレベーター", "ロビー", "ドア"], correctIndex: 1, explanation: "エレベーターです。" },
      { id: 1005, type: "grammar", text: "「朝食は何時？」", options: ["مَتَى الْفُطُورُ؟", "أَيْنَ الْفُطُورُ؟", "كَيْفَ الْفُطُورُ؟", "مَنِ الْفُطُورُ؟"], correctIndex: 0, explanation: "時間を聞くので「Matā」です。" }
    ],
    sentences: [
      { speaker: "🧑 客", arabic: "مَرْحَبًا، عِنْدِي حَجْزٌ بِاسْمِ تَنَاكَا.", japanese: "こんにちは、タナカという名前で予約しています。" },
      { speaker: "👨‍💼 受付", arabic: "أَهْلًا بِكَ. جَوَازَ السَّفَرِ لَوْ سَمَحْتَ.", japanese: "いらっしゃいませ。パスポートをお願いします。" },
      { speaker: "🧑 客", arabic: "تَفَضَّلْ. هَلِ الْغُرْفَةُ تُطِلُّ عَلَى الْبَحْرِ؟", japanese: "どうぞ。部屋は海側ですか？" },
      { speaker: "👨‍💼 受付", arabic: "نَعَمْ. غُرْفَتُكَ فِي الدَّوْرِ الْخَامِسِ.", japanese: "はい。お部屋は5階です。" },
      { speaker: "🧑 客", arabic: "مَتَى وَقْتُ الْفُطُورِ؟", japanese: "朝食は何時ですか？" },
      { speaker: "👨‍💼 受付", arabic: "مِنَ السَّابِعَةِ صَبَاحًا. الْمِصْعَدُ هُنَاكَ.", japanese: "朝7時からです。エレベーターはあちらです。" }
    ]
  },
  {
    id: 11, title: "チェックアウト", category: "ホテル", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "فَاتُورَة", meaning: "請求書" }, { word: "مِفْتَاح", meaning: "鍵" }],
    questions: [
      { id: 1101, type: "reading", text: "客は何をしたい？", options: ["延長", "チェックアウト", "予約", "クレーム"], correctIndex: 1, explanation: "「تَسْجِيل الْخُرُوج (チェックアウト)」です。" },
      { id: 1102, type: "reading", text: "滞在の感想は？", options: ["悪かった", "普通", "素晴らしかった", "うるさかった"], correctIndex: 2, explanation: "「مُمْتَازَة (素晴らしい)」と言っています。" },
      { id: 1103, type: "reading", text: "ミニバーの利用は？", options: ["水だけ", "なし", "ジュース", "たくさん"], correctIndex: 1, explanation: "「لَا، لَمْ أَسْتَخْدِمْهُ (いいえ、使っていません)」です。" },
      { id: 1104, type: "vocabulary", text: "「بِطَاقَة」の意味は？", options: ["現金", "カード", "スマホ", "財布"], correctIndex: 1, explanation: "クレジットカード等のカードです。" },
      { id: 1105, type: "grammar", text: "「お元気で（去る人へ）」", options: ["مَعَ السَّلَامَةِ", "أَهْلًا", "مَرْحَبًا", "شُكْرًا"], correctIndex: 0, explanation: "別れの挨拶です。" }
    ],
    sentences: [
      { speaker: "🧑 客", arabic: "أُرِيدُ عَمَلَ خُرُوجٍ (Check-out).", japanese: "チェックアウトをお願いします。" },
      { speaker: "👨‍💼 受付", arabic: "كَيْفَ كَانَتِ الْإِقَامَةُ؟", japanese: "滞在はいかがでしたか？" },
      { speaker: "🧑 客", arabic: "مُمْتَازَةٌ، شُكْرًا لَكَ.", japanese: "素晴らしかったです、ありがとう。" },
      { speaker: "👨‍💼 受付", arabic: "هَلْ شَرِبْتَ شَيْئًا مِنَ الْمِينِي بَار؟", japanese: "ミニバーから何か飲みましたか？" },
      { speaker: "🧑 客", arabic: "لَا، لَمْ أَسْتَخْدِمْهُ.", japanese: "いいえ、使っていません。" },
      { speaker: "👨‍💼 受付", arabic: "حَسَنًا. هَذِهِ الْفَاتُورَةُ.", japanese: "わかりました。こちらが請求書です。" }
    ]
  },
  {
    id: 12, title: "Wi-Fiがつながらない", category: "ホテル", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "مُشْكِلَة", meaning: "問題" }, { word: "اِتِّصَال", meaning: "接続" }],
    questions: [
      { id: 1201, type: "reading", text: "問題は何ですか？", options: ["お湯が出ない", "Wi-Fiが繋がらない", "うるさい", "部屋が汚い"], correctIndex: 1, explanation: "「الْإِنْتَرْنِت لَا يَعْمَلُ (ネットが動かない)」です。" },
      { id: 1202, type: "reading", text: "部屋番号は？", options: ["202", "305", "404", "101"], correctIndex: 1, explanation: "「ثَلَاثُمِائَةٍ وَخَمْسَةٌ (305)」です。" },
      { id: 1203, type: "reading", text: "スタッフの対応は？", options: ["無視した", "技術者を送る", "部屋を変える", "ルーターを再起動"], correctIndex: 1, explanation: "「سَأُرْسِلُ الْفَنِّيَّ (技術者を送ります)」と言っています。" },
      { id: 1204, type: "vocabulary", text: "「بَطِيء」の意味は？", options: ["速い", "遅い", "重い", "切れた"], correctIndex: 1, explanation: "遅い、という意味です。" },
      { id: 1205, type: "grammar", text: "「助けてください」", options: ["سَاعِدْنِي", "اُنْظُرْنِي", "اِذْهَبْنِي", "كُلْنِي"], correctIndex: 0, explanation: "「Sā'idnī」です。" }
    ],
    sentences: [
      { speaker: "📞 客", arabic: "عَفْوًا، عِنْدِي مُشْكِلَةٌ فِي الْإِنْتَرْنِت.", japanese: "すみません、インターネットに問題があります。" },
      { speaker: "👨‍💼 受付", arabic: "مَا هِيَ الْمُشْكِلَةُ بِالضَّبْطِ؟", japanese: "具体的にどのような問題ですか？" },
      { speaker: "🧑 客", arabic: "لَا يَتَّصِلُ، وَهُوَ بَطِيءٌ جِدًّا.", japanese: "繋がりませんし、とても遅いです。" },
      { speaker: "👨‍💼 受付", arabic: "مَا رَقْمُ غُرْفَتِكَ؟", japanese: "部屋番号は？" },
      { speaker: "🧑 客", arabic: "305.", japanese: "305です。" },
      { speaker: "👨‍💼 受付", arabic: "سَأُرْسِلُ لَكَ الْفَنِّيَّ فَوْرًا.", japanese: "すぐに技術者を向かわせます。" }
    ]
  },
  {
    id: 13, title: "ルームサービス", category: "ホテル", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "طَلَب", meaning: "注文" }, { word: "عَشَاء", meaning: "夕食" }],
    questions: [
      { id: 1301, type: "reading", text: "注文したものは？", options: ["朝食", "昼食", "夕食", "飲み物"], correctIndex: 2, explanation: "「عَشَاء (夕食)」です。" },
      { id: 1302, type: "reading", text: "メインディッシュは？", options: ["魚", "ステーキ", "クラブサンド", "パスタ"], correctIndex: 2, explanation: "「كْلَاب سَانْدُوِيتْش (クラブサンドイッチ)」です。" },
      { id: 1303, type: "reading", text: "飲み物は？", options: ["コーヒー", "紅茶", "水", "オレンジジュース"], correctIndex: 3, explanation: "「عَصِيرَ بُرْتُقَالٍ」です。" },
      { id: 1304, type: "reading", text: "どれくらいかかりますか？", options: ["10分", "20分", "30分", "1時間"], correctIndex: 1, explanation: "「20 دَقِيقَةً」です。" },
      { id: 1305, type: "grammar", text: "「持ってきて」", options: ["أَحْضِرْ", "اِذْهَبْ", "نَمْ", "قِفْ"], correctIndex: 0, explanation: "「Aḥḍir」は持ってこい、という意味です。" }
    ],
    sentences: [
      { speaker: "📞 客", arabic: "أُرِيدُ طَلَبَ الْعَشَاءِ.", japanese: "夕食を頼みたいのですが。" },
      { speaker: "👨‍🍳 係", arabic: "تَفَضَّلْ، مَاذَا تُحِبُّ؟", japanese: "どうぞ、何になさいますか？" },
      { speaker: "🧑 客", arabic: "كْلَاب سَانْدُوِيتْش وَعَصِيرَ بُرْتُقَالٍ.", japanese: "クラブサンドとオレンジジュースを。" },
      { speaker: "👨‍🍳 係", arabic: "بِدُونِ ثَلْجٍ؟", japanese: "氷なしですか？" },
      { speaker: "🧑 客", arabic: "نَعَمْ. كَمْ يَسْتَغْرِقُ؟", japanese: "はい。どれくらいかかりますか？" },
      { speaker: "👨‍🍳 係", arabic: "حَوَالَيْ 20 دَقِيقَةً.", japanese: "約20分です。" }
    ]
  },
  {
    id: 14, title: "鍵をなくした", category: "ホテル", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "مِفْتَاح", meaning: "鍵" }, { word: "ضَاعَ", meaning: "なくなった" }],
    questions: [
      { id: 1401, type: "reading", text: "何がなくなりましたか？", options: ["財布", "パスポート", "部屋のカードキー", "携帯"], correctIndex: 2, explanation: "「بِطَاقَةَ الْغُرْفَةِ (部屋のカード)」です。" },
      { id: 1402, type: "reading", text: "どこでなくしましたか？", options: ["タクシー", "プール", "レストラン", "ロビー"], correctIndex: 0, explanation: "「فِي التَّاكْسِي」と言っています。" },
      { id: 1403, type: "reading", text: "本人確認のために提示したものは？", options: ["免許証", "パスポート", "クレジットカード", "写真"], correctIndex: 1, explanation: "「جَوَازَ السَّفَرِ」です。" },
      { id: 1404, type: "vocabulary", text: "「جَدِيد」の意味は？", options: ["古い", "新しい", "大きい", "小さい"], correctIndex: 1, explanation: "新しい、です。" },
      { id: 1405, type: "grammar", text: "「失くしました」", options: ["أَضَعْتُ", "وَجَدْتُ", "شَرَيْتُ", "بِعْتُ"], correctIndex: 0, explanation: "「Aḍa'tu」です。" }
    ],
    sentences: [
      { speaker: "🧑 客", arabic: "عَفْوًا، لَقَدْ أَضَعْتُ بِطَاقَةَ الْغُرْفَةِ.", japanese: "すみません、部屋のカードキーをなくしてしまいました。" },
      { speaker: "👨‍💼 受付", arabic: "أَيْنَ فَقَدْتَهَا؟", japanese: "どこでなくしましたか？" },
      { speaker: "🧑 客", arabic: "أَعْتَقِدُ أَنَّهَا فِي التَّاكْسِي.", japanese: "タクシーの中だと思います。" },
      { speaker: "👨‍💼 受付", arabic: "لَا مُشْكِلَةَ. هَلْ مَعَكَ جَوَازُ السَّفَرِ؟", japanese: "問題ありません。パスポートはお持ちですか？" },
      { speaker: "🧑 客", arabic: "نَعَمْ، تَفَضَّلْ.", japanese: "はい、どうぞ。" },
      { speaker: "👨‍💼 受付", arabic: "سَأُعْطِيكَ بِطَاقَةً جَدِيدَةً.", japanese: "新しいカードをお渡しします。" }
    ]
  },
  {
    id: 15, title: "朝食の時間", category: "ホテル", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "صَبَاح", meaning: "朝" }, { word: "مَطْعَم", meaning: "レストラン" }],
    questions: [
      { id: 1501, type: "reading", text: "何の時間を聞いていますか？", options: ["チェックアウト", "プール", "朝食", "夕食"], correctIndex: 2, explanation: "「وَقْت الْفُطُور」です。" },
      { id: 1502, type: "reading", text: "開始時間は？", options: ["6:00", "6:30", "7:00", "7:30"], correctIndex: 1, explanation: "「السَّادِسَة وَالنِّصْف (6時半)」です。" },
      { id: 1503, type: "reading", text: "終了時間は？", options: ["10:00", "10:30", "11:00", "11:30"], correctIndex: 2, explanation: "「الْحَادِيَةَ عَشْرَةَ (11時)」です。" },
      { id: 1504, type: "reading", text: "レストランはどこ？", options: ["1階", "2階", "屋上", "地下"], correctIndex: 0, explanation: "「الدَّوْر الْأَرْضِيّ (地上階/1階)」です。" },
      { id: 1505, type: "grammar", text: "「いつ始まりますか？」", options: ["مَتَى يَبْدَأُ؟", "مَتَى يَنْتَهِي؟", "أَيْنَ يَبْدَأُ؟", "كَيْفَ يَبْدَأُ؟"], correctIndex: 0, explanation: "「Yabda'u (始まる)」です。" }
    ],
    sentences: [
      { speaker: "🧑 客", arabic: "مَتَى يَبْدَأُ وَقْتُ الْفُطُورِ؟", japanese: "朝食は何時から始まりますか？" },
      { speaker: "👨‍💼 受付", arabic: "مِنَ السَّادِسَةِ وَالنِّصْفِ.", japanese: "6時半からです。" },
      { speaker: "🧑 客", arabic: "وَمَتَى يَنْتَهِي؟", japanese: "いつ終わりますか？" },
      { speaker: "👨‍💼 受付", arabic: "فِي السَّاعَةِ الْحَادِيَةَ عَشْرَةَ.", japanese: "11時です。" },
      { speaker: "🧑 客", arabic: "أَيْنَ الْمَطْعَمُ؟", japanese: "レストランはどこですか？" },
      { speaker: "👨‍💼 受付", arabic: "فِي الدَّوْرِ الْأَرْضِيِّ، يَمِينَ اللُّوبِي.", japanese: "1階のロビーの右側です。" }
    ]
  },
  {
    id: 16, title: "エアコンの不調", category: "ホテル", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "عَطْلَان", meaning: "故障中" }, { word: "غُرْفَة", meaning: "部屋" }],
    questions: [
      { id: 1601, type: "reading", text: "問題は？", options: ["テレビ", "エアコン", "トイレ", "鍵"], correctIndex: 1, explanation: "「الْمُكَيِّف (エアコン)」です。" },
      { id: 1602, type: "reading", text: "どうなっていますか？", options: ["うるさい", "冷えない", "止まらない", "臭い"], correctIndex: 1, explanation: "「لَا يُبَرِّدُ (冷えない)」です。" },
      { id: 1603, type: "reading", text: "部屋番号は？", options: ["205", "305", "405", "505"], correctIndex: 0, explanation: "「مِائَتَانِ وَخَمْسَةٌ (205)」です。" },
      { id: 1604, type: "vocabulary", text: "「صِيَانَة」の意味は？", options: ["掃除", "メンテナンス/修理", "交換", "警備"], correctIndex: 1, explanation: "メンテナンスです。" },
      { id: 1605, type: "grammar", text: "「暑い」", options: ["حَارّ", "بَارِد", "جَيِّد", "جَدِيد"], correctIndex: 0, explanation: "「Ḥārr」です。" }
    ],
    sentences: [
      { speaker: "📞 客", arabic: "الْمُكَيِّفُ فِي غُرْفَتِي لَا يُبَرِّدُ.", japanese: "部屋のエアコンが冷えません。" },
      { speaker: "👨‍💼 受付", arabic: "أَنَا آسِفٌ لِذَلِكَ. مَا رَقْمُ الْغُرْفَةِ؟", japanese: "申し訳ありません。部屋番号は？" },
      { speaker: "🧑 客", arabic: "205. الْجَوُّ حَارٌّ جِدًّا.", japanese: "205です。とても暑いです。" },
      { speaker: "👨‍💼 受付", arabic: "سَأُرْسِلُ فَرِيقَ الصِّيَانَةِ حَالًا.", japanese: "すぐにメンテナンスチームを送ります。" },
      { speaker: "🧑 客", arabic: "كَمْ سَيَأْخُذُ مِنَ الْوَقْتِ؟", japanese: "どれくらいかかりますか？" },
      { speaker: "👨‍💼 受付", arabic: "خَمْسُ دَقَائِقَ إِنْ شَاءَ اللهُ.", japanese: "5分ほどです。" }
    ]
  },
  {
    id: 17, title: "タオルがない", category: "ホテル", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "مِنْشَفَة", meaning: "タオル" }, { word: "حَمَّام", meaning: "浴室" }],
    questions: [
      { id: 1701, type: "reading", text: "何が足りませんか？", options: ["石鹸", "タオル", "水", "枕"], correctIndex: 1, explanation: "「مَنَاشِف (タオル複数形)」です。" },
      { id: 1702, type: "reading", text: "何枚必要ですか？", options: ["1枚", "2枚", "3枚", "4枚"], correctIndex: 1, explanation: "「اِثْنَتَيْنِ (2つ)」です。" },
      { id: 1703, type: "reading", text: "他に必要なものは？", options: ["シャンプー", "歯ブラシ", "石鹸", "なし"], correctIndex: 0, explanation: "「شَامْبُو」です。" },
      { id: 1704, type: "vocabulary", text: "「حَالًا」の意味は？", options: ["後で", "明日", "すぐに", "ゆっくり"], correctIndex: 2, explanation: "ただちに、すぐにの意味です。" },
      { id: 1705, type: "grammar", text: "「ありません」", options: ["لَا يُوجَدُ", "يُوجَدُ", "كَانَ", "لَيْسَ"], correctIndex: 0, explanation: "「Lā yūjadu」です。" }
    ],
    sentences: [
      { speaker: "📞 客", arabic: "لَا يُوجَدُ مَنَاشِفُ فِي الْحَمَّامِ.", japanese: "バスルームにタオルがありません。" },
      { speaker: "👨‍🍳 係", arabic: "نَعْتَذِرُ يَا سَيِّدِي. كَمْ وَاحِدَةً تُرِيدُ؟", japanese: "申し訳ありません。何枚必要ですか？" },
      { speaker: "🧑 客", arabic: "أُرِيدُ اثْنَتَيْنِ كَبِيرَتَيْنِ.", japanese: "大きいのを2枚お願いします。" },
      { speaker: "👨‍🍳 係", arabic: "هَلْ تَحْتَاجُ شَيْئًا آخَرَ؟", japanese: "他に何か必要ですか？" },
      { speaker: "🧑 客", arabic: "نَعَمْ، شَامْبُو أَيْضًا.", japanese: "はい、シャンプーも。" },
      { speaker: "👨‍🍳 係", arabic: "سَتَصِلُكَ حَالًا.", japanese: "すぐにお持ちします。" }
    ]
  },
  {
    id: 18, title: "モーニングコール", category: "ホテル", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "اِسْتِيقَاظ", meaning: "起床" }, { word: "صَبَاح", meaning: "朝" }],
    questions: [
      { id: 1801, type: "reading", text: "何の依頼ですか？", options: ["食事", "掃除", "モーニングコール", "タクシー"], correctIndex: 2, explanation: "「خِدْمَة الْإِيقَاظ (起こすサービス)」です。" },
      { id: 1802, type: "reading", text: "起こしてほしい時間は？", options: ["5:00", "5:30", "6:00", "6:30"], correctIndex: 0, explanation: "「الْخَامِسَة (5時)」です。" },
      { id: 1803, type: "reading", text: "理由は？", options: ["会議", "フライト", "ツアー", "早起きしたい"], correctIndex: 1, explanation: "「عِنْدِي رِحْلَة (フライト/旅がある)」と言っています。" },
      { id: 1804, type: "vocabulary", text: "「نَوْم」の意味は？", options: ["睡眠", "食事", "仕事", "遊び"], correctIndex: 0, explanation: "眠りのことです。" },
      { id: 1805, type: "grammar", text: "「起きます」", options: ["أَسْتَيْقِظُ", "أَنَامُ", "أَمْشِي", "أَجْلِسُ"], correctIndex: 0, explanation: "「Astayqiẓu」です。" }
    ],
    sentences: [
      { speaker: "🧑 客", arabic: "أُرِيدُ خِدْمَةَ الْإِيقَاظِ غَدًا.", japanese: "明日のモーニングコールをお願いします。" },
      { speaker: "👨‍💼 受付", arabic: "فِي أَيِّ سَاعَةٍ؟", japanese: "何時ですか？" },
      { speaker: "🧑 客", arabic: "السَّاعَةَ الْخَامِسَةَ صَبَاحًا.", japanese: "朝の5時です。" },
      { speaker: "👨‍💼 受付", arabic: "مُبَكِّرٌ جِدًّا!", japanese: "とても早いですね！" },
      { speaker: "🧑 客", arabic: "نَعَمْ، عِنْدِي رِحْلَةُ طَيَرَانٍ.", japanese: "ええ、フライトがあるんです。" },
      { speaker: "👨‍💼 受付", arabic: "دُوِّنَ ذَلِكَ. تَصْبِحُ عَلَى خَيْرٍ.", japanese: "承りました。おやすみなさい。" }
    ]
  },
  {
    id: 19, title: "荷物を預ける", category: "ホテル", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "حَقِيبَة", meaning: "荷物/カバン" }, { word: "مَسَاء", meaning: "夕方" }],
    questions: [
      { id: 1901, type: "reading", text: "客は何をしたい？", options: ["荷物を預ける", "荷物を送る", "荷物を捨てる", "荷物を買う"], correctIndex: 0, explanation: "「تَرْك حَقَائِبِي (荷物を置いておく/預ける)」です。" },
      { id: 1902, type: "reading", text: "いつまで預けますか？", options: ["昼まで", "夕方まで", "明日まで", "1時間"], correctIndex: 1, explanation: "「حَتَّى الْمَسَاءِ (夕方まで)」です。" },
      { id: 1903, type: "reading", text: "荷物は何個？", options: ["1個", "2個", "3個", "4個"], correctIndex: 2, explanation: "「ثَلَاثُ حَقَائِبَ (3個)」です。" },
      { id: 1904, type: "vocabulary", text: "「آمِن」の意味は？", options: ["危険", "安全", "重い", "軽い"], correctIndex: 1, explanation: "安全な、という意味です。" },
      { id: 1905, type: "grammar", text: "「戻ります」", options: ["سَأَعُودُ", "ذَهَبْتُ", "وَصَلْتُ", "خَرَجْتُ"], correctIndex: 0, explanation: "「Sa-a'ūdu」は「私は戻るでしょう」です。" }
    ],
    sentences: [
      { speaker: "🧑 客", arabic: "هَلْ يُمْكِنُنِي تَرْكُ حَقَائِبِي هُنَا؟", japanese: "ここに荷物を預けられますか？" },
      { speaker: "👨‍💼 ベルボーイ", arabic: "بِالتَّأْكِيدِ. إِلَى مَتَى؟", japanese: "もちろんです。いつまでですか？" },
      { speaker: "🧑 客", arabic: "حَتَّى الْمَسَاءِ. سَأَعُودُ السَّاعَةَ 6.", japanese: "夕方まで。6時に戻ります。" },
      { speaker: "👨‍💼 ベルボーイ", arabic: "كَمْ حَقِيبَةً مَعَكَ؟", japanese: "お荷物はいくつですか？" },
      { speaker: "🧑 客", arabic: "ثَلَاثُ حَقَائِبَ.", japanese: "3つです。" },
      { speaker: "👨‍💼 ベルボーイ", arabic: "تَفَضَّلْ هَذَا الْوَصْلَ. إِنَّهَا فِي مَكَانٍ آمِنٍ.", japanese: "この引換証をどうぞ。安全な場所に保管します。" }
    ]
  },

  // ==========================================
  //  カテゴリー: レストラン (Restaurant) - 10 Scenes
  // ==========================================
  {
    id: 20, title: "電話予約", category: "レストラン", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "حَجْز", meaning: "予約" }, { word: "شَخْص", meaning: "人" }],
    questions: [
      { id: 201, type: "reading", text: "予約の時間は？", options: ["7時", "8時", "9時", "10時"], correctIndex: 2, explanation: "「التَّاسِعَة (9時)」です。" },
      { id: 202, type: "reading", text: "人数は？", options: ["2人", "5人", "10人", "20人"], correctIndex: 1, explanation: "「خَمْسَةُ أَشْخَاصٍ (5人)」です。" },
      { id: 203, type: "reading", text: "席の希望は？", options: ["喫煙席", "個室（ファミリー）", "テラス", "窓際"], correctIndex: 1, explanation: "「قِسْمِ الْعَائِلَاتِ (ファミリーセクション/個室)」です。" },
      { id: 204, type: "vocabulary", text: "「رَقْم」の意味は？", options: ["名前", "番号", "住所", "時間"], correctIndex: 1, explanation: "番号のことです。" },
      { id: 205, type: "grammar", text: "「予約したい」", options: ["أُرِيدُ حَجْزًا", "أَلْغِي حَجْزًا", "أَدْفَعُ حَجْزًا", "أَكْتُبُ حَجْزًا"], correctIndex: 0, explanation: "「Urīdu ḥajzan」です。" }
    ],
    sentences: [
      { speaker: "📞 客", arabic: "أُرِيدُ حَجْزَ طَاوِلَةٍ لِلْعَشَاءِ.", japanese: "夕食のテーブルを予約したいのですが。" },
      { speaker: "👨‍🍳 店員", arabic: "لِكَمْ شَخْصٍ وَمَتَى؟", japanese: "何名様で、いつですか？" },
      { speaker: "📞 客", arabic: "خَمْسَةُ أَشْخَاصٍ، السَّاعَةَ التَّاسِعَةَ.", japanese: "5人で、9時です。" },
      { speaker: "👨‍🍳 店員", arabic: "هَلْ تُرِيدُ قِسْمَ الْأَفْرَادِ أَمِ الْعَائِلَاتِ؟", japanese: "男性席（シングル）ですか、ファミリー席ですか？" },
      { speaker: "📞 客", arabic: "قِسْمَ الْعَائِلَاتِ.", japanese: "ファミリー席（個室）で。" },
      { speaker: "👨‍🍳 店員", arabic: "حَسَنًا، مَا اسْمُكَ وَرَقْمُكَ؟", japanese: "わかりました。お名前と番号を。" }
    ]
  },
  {
    id: 21, title: "予約キャンセル", category: "レストラン", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "إِلْغَاء", meaning: "キャンセル" }, { word: "ظَرْف", meaning: "事情" }],
    questions: [
      { id: 211, type: "reading", text: "電話の目的は？", options: ["予約", "変更", "キャンセル", "確認"], correctIndex: 2, explanation: "「إِلْغَاء (キャンセル)」です。" },
      { id: 212, type: "reading", text: "名前は？", options: ["アリー", "カレド", "サミール", "オマル"], correctIndex: 2, explanation: "「سَمِير」です。" },
      { id: 213, type: "reading", text: "なぜキャンセルしますか？", options: ["病気", "緊急の事情", "気が変わった", "店が嫌い"], correctIndex: 1, explanation: "「ظَرْفٌ طَارِئٌ (緊急の事情)」と言っています。" },
      { id: 214, type: "vocabulary", text: "「مُشْكِلَة」の意味は？", options: ["問題", "解決", "時間", "予約"], correctIndex: 0, explanation: "問題のことです。" },
      { id: 215, type: "grammar", text: "「来られません」", options: ["لَا أَسْتَطِيعُ الْحُضُورَ", "أَسْتَطِيعُ الْحُضُورَ", "حَضَرْتُ", "سَأَحْضُرُ"], correctIndex: 0, explanation: "「Lā astaṭī'u (私はできない)」です。" }
    ],
    sentences: [
      { speaker: "📞 客", arabic: "مَرْحَبًا، عِنْدِي حَجْزٌ الْيَوْمَ.", japanese: "もしもし、今日予約している者ですが。" },
      { speaker: "👨‍🍳 店員", arabic: "الِاسْمُ لَوْ سَمَحْتَ؟", japanese: "お名前をお願いします。" },
      { speaker: "📞 客", arabic: "سَمِير.", japanese: "サミールです。" },
      { speaker: "👨‍🍳 店員", arabic: "نَعَمْ، السَّاعَةَ 8. هَلْ تُرِيدُ تَأْكِيدَهُ؟", japanese: "はい、8時ですね。確認ですか？" },
      { speaker: "📞 客", arabic: "لَا، أُرِيدُ إِلْغَاءَهُ. حَدَثَ ظَرْفٌ طَارِئٌ.", japanese: "いいえ、キャンセルしたいです。急用ができて。" },
      { speaker: "👨‍🍳 店員", arabic: "لَا مُشْكِلَةَ. تَمَّ الْإِلْغَاءُ.", japanese: "問題ありません。キャンセルしました。" }
    ]
  },
  {
    id: 22, title: "注文する", category: "レストラン", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "طَلَب", meaning: "注文" }, { word: "لَحْم", meaning: "肉" }],
    questions: [
      { id: 221, type: "reading", text: "メインの注文は？", options: ["魚", "チキン", "ミックスグリル", "パスタ"], correctIndex: 2, explanation: "「مُشَكَّل مَشَاوِي (ミックスグリル)」です。" },
      { id: 222, type: "reading", text: "前菜は？", options: ["スープ", "フムスとタブーレ", "サラダ", "パン"], correctIndex: 1, explanation: "「حُمُّص وَتَبُّولَة」です。" },
      { id: 223, type: "reading", text: "飲み物は？", options: ["水", "レモンミント", "コーラ", "紅茶"], correctIndex: 1, explanation: "「عَصِيرَ لَيْمُونٍ بِالنَّعْنَاعِ」です。" },
      { id: 224, type: "vocabulary", text: "「مُقَبِّلَات」の意味は？", options: ["デザート", "メイン", "前菜", "飲み物"], correctIndex: 2, explanation: "前菜のことです。" },
      { id: 225, type: "grammar", text: "「お願いします」", options: ["لَوْ سَمَحْتَ", "شُكْرًا", "عَفْوًا", "أَهْلًا"], correctIndex: 0, explanation: "「Law samaḥta (すみませんが/お願いします)」です。" }
    ],
    sentences: [
      { speaker: "👨‍🍳 店員", arabic: "هَلْ أَنْتُمْ جَاهِزُونَ لِلطَّلَبِ؟", japanese: "ご注文はお決まりですか？" },
      { speaker: "🧑 客", arabic: "نَعَمْ. أُرِيدُ صَحْنَ مُشَكَّلِ مَشَاوِي.", japanese: "はい。ミックスグリルを一皿。" },
      { speaker: "👨‍🍳 店員", arabic: "وَمَاذَا عَنِ الْمُقَبِّلَاتِ؟", japanese: "前菜はいかがですか？" },
      { speaker: "🧑 客", arabic: "حُمُّصٌ وَتَبُّولَةٌ.", japanese: "フムスとタブーレを。" },
      { speaker: "👨‍🍳 店員", arabic: "وَالْمَشْرُوبَاتُ؟", japanese: "お飲み物は？" },
      { speaker: "🧑 客", arabic: "اِثْنَيْنِ عَصِيرَ لَيْمُونٍ بِالنَّعْنَاعِ.", japanese: "レモンミントジュースを2つ。" }
    ]
  },
  {
    id: 23, title: "追加注文", category: "レストラン", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "خُبْز", meaning: "パン" }, { word: "زِيَادَة", meaning: "追加" }],
    questions: [
      { id: 231, type: "reading", text: "客が追加したのは？", options: ["水", "パン", "ソース", "肉"], correctIndex: 1, explanation: "「خُبْز (パン)」です。" },
      { id: 232, type: "reading", text: "パンは温かいですか？", options: ["はい", "いいえ", "冷たい", "硬い"], correctIndex: 0, explanation: "「حَارّ (熱い/温かい)」と言っています。" },
      { id: 233, type: "reading", text: "他に頼んだものは？", options: ["塩", "砂糖", "胡椒", "ケチャップ"], correctIndex: 0, explanation: "「مِلْح (塩)」です。" },
      { id: 234, type: "vocabulary", text: "「لَذِيذ」の意味は？", options: ["まずい", "美味しい", "辛い", "甘い"], correctIndex: 1, explanation: "美味しいです。" },
      { id: 235, type: "grammar", text: "「もっと（More）」", options: ["مَزِيدٌ", "قَلِيلٌ", "صَغِيرٌ", "كَبِيرٌ"], correctIndex: 0, explanation: "「Mazīd」はもっと、追加の意味です。" }
    ],
    sentences: [
      { speaker: "🧑 客", arabic: "لَوْ سَمَحْتَ، نُرِيدُ خُبْزًا إِضَافِيًّا.", japanese: "すみません、パンの追加をお願いします。" },
      { speaker: "👨‍🍳 店員", arabic: "حَاضِرٌ. هَلْ تُرِيدُهُ حَارًّا؟", japanese: "かしこまりました。温かいのがいいですか？" },
      { speaker: "🧑 客", arabic: "نَعَمْ، يَا لَيْتَ.", japanese: "はい、ぜひ。" },
      { speaker: "👨‍🍳 店員", arabic: "أَيُّ شَيْءٍ آخَرَ؟", japanese: "他には？" },
      { speaker: "🧑 客", arabic: "قَلِيلًا مِنَ الْمِلْحِ أَيْضًا.", japanese: "お塩も少し。" },
      { speaker: "👨‍🍳 店員", arabic: "فَوْرًا.", japanese: "ただちに。" }
    ]
  },
  {
    id: 24, title: "お会計", category: "レストラン", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "حِسَاب", meaning: "会計" }, { word: "بِطَاقَة", meaning: "カード" }],
    questions: [
      { id: 241, type: "reading", text: "客が頼んだものは？", options: ["メニュー", "水", "会計", "デザート"], correctIndex: 2, explanation: "「الْحِسَاب (会計)」です。" },
      { id: 242, type: "reading", text: "食事はどうでしたか？", options: ["悪かった", "遅かった", "とても美味しかった", "冷たかった"], correctIndex: 2, explanation: "「لَذِيذٌ جِدًّا (とても美味しい)」と言っています。" },
      { id: 243, type: "reading", text: "合計金額は？", options: ["150", "200", "250", "300"], correctIndex: 2, explanation: "「مِائَتَانِ وَخَمْسُونَ (250)」です。" },
      { id: 244, type: "vocabulary", text: "「بَقْشِيش」の意味は？", options: ["税金", "チップ", "割引", "お釣り"], correctIndex: 1, explanation: "チップのことです。" },
      { id: 245, type: "grammar", text: "「残り（お釣り）をとっておいて」", options: ["خُذِ الْبَاقِيَ", "هَاتِ الْبَاقِيَ", "أَيْنَ الْبَاقِي؟", "لَا بَاقِيَ"], correctIndex: 0, explanation: "「Khuḏ (取れ)」です。" }
    ],
    sentences: [
      { speaker: "🧑 客", arabic: "الْحِسَابُ لَوْ سَمَحْتَ.", japanese: "お会計をお願いします。" },
      { speaker: "👨‍🍳 店員", arabic: "كَيْفَ كَانَ الطَّعَامُ؟", japanese: "お食事はいかがでしたか？" },
      { speaker: "🧑 客", arabic: "لَذِيذٌ جِدًّا. شُكْرًا.", japanese: "とても美味しかったです。ありがとう。" },
      { speaker: "👨‍🍳 店員", arabic: "الْمَجْمُوعُ 250 رِيَالًا.", japanese: "合計250リヤルです。" },
      { speaker: "🧑 客", arabic: "تَفَضَّلْ 300. خُذِ الْبَاقِيَ.", japanese: "300どうぞ。お釣りは取っておいて（チップ）。" },
      { speaker: "👨‍🍳 店員", arabic: "شُكْرًا جَزِيلًا!", japanese: "ありがとうございます！" }
    ]
  },
  {
    id: 25, title: "料理が来ない", category: "レストラン", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "تَأَخَّرَ", meaning: "遅れた" }, { word: "نِسْيَان", meaning: "忘れること" }],
    questions: [
      { id: 251, type: "reading", text: "客はなぜ怒っていますか？", options: ["料理がまずい", "料理が遅い", "高い", "店員がいない"], correctIndex: 1, explanation: "「الطَّعَام تَأَخَّرَ (食事が遅れている)」からです。" },
      { id: 252, type: "reading", text: "どれくらい待っていますか？", options: ["10分", "20分", "40分", "1時間"], correctIndex: 2, explanation: "「أَرْبَعُونَ دَقِيقَةً」です。" },
      { id: 253, type: "reading", text: "店員の言い訳は？", options: ["忘れていた", "混んでいる", "材料がない", "休憩中"], correctIndex: 1, explanation: "「الْمَطْعَمُ مُزْدَحِمٌ (混んでいる)」と言っています。" },
      { id: 254, type: "vocabulary", text: "「آسِف」の意味は？", options: ["ありがとう", "ごめんなさい", "さようなら", "おいしい"], correctIndex: 1, explanation: "ごめんなさいです。" },
      { id: 255, type: "grammar", text: "「確認します」", options: ["سَأَتَأَكَّدُ", "أَعْرِفُ", "لَا أَعْرِفُ", "نَسِيتُ"], correctIndex: 0, explanation: "「Sa-ata'akkadu」です。" }
    ],
    sentences: [
      { speaker: "🧑 客", arabic: "يَا أَخِي، الطَّعَامُ تَأَخَّرَ كَثِيرًا!", japanese: "ちょっと、食事がすごく遅いよ！" },
      { speaker: "👨‍🍳 店員", arabic: "أَنَا آسِفٌ جِدًّا يَا سَيِّدِي.", japanese: "大変申し訳ありません。" },
      { speaker: "🧑 客", arabic: "نَنْتَظِرُ مُنْذُ 40 دَقِيقَةً.", japanese: "もう40分も待っているんだ。" },
      { speaker: "👨‍🍳 店員", arabic: "الْمَطْعَمُ مُزْدَحِمٌ الْيَوْمَ.", japanese: "今日は店が混んでいまして。" },
      { speaker: "🧑 客", arabic: "تَأَكَّدْ مِنْ طَلَبِنَا بِسُرْعَةٍ.", japanese: "急いで注文を確認してくれ。" },
      { speaker: "👨‍🍳 店員", arabic: "حَالًا سَأَتَأَكَّدُ مِنَ الْمَطْبَخِ.", japanese: "ただちに厨房に確認します。" }
    ]
  },
  {
    id: 26, title: "注文の間違い", category: "レストラン", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "خَطَأ", meaning: "間違い" }, { word: "طَلَب", meaning: "注文" }],
    questions: [
      { id: 261, type: "reading", text: "何が間違っていましたか？", options: ["飲み物", "メインの料理", "デザート", "会計"], correctIndex: 1, explanation: "「لَمْ أَطْلُبْ هَذَا (これは頼んでいない)」と言っています。" },
      { id: 262, type: "reading", text: "客が頼んだのは？", options: ["魚", "肉", "チキン", "パスタ"], correctIndex: 0, explanation: "「سَمَك (魚)」です。" },
      { id: 263, type: "reading", text: "来たのは？", options: ["魚", "肉", "チキン", "スープ"], correctIndex: 1, explanation: "「لَحْم (肉)」が来ました。" },
      { id: 264, type: "vocabulary", text: "「لَحْظَة」の意味は？", options: ["時間", "ちょっと待って/瞬間", "時計", "今"], correctIndex: 1, explanation: "少々お待ちください、という意味です。" },
      { id: 265, type: "grammar", text: "「変えます」", options: ["أُغَيِّرُ", "آكُلُ", "أَشْرَبُ", "أَدْفَعُ"], correctIndex: 0, explanation: "「Ughayyiru」です。" }
    ],
    sentences: [
      { speaker: "🧑 客", arabic: "عَفْوًا، لَمْ أَطْلُبْ هَذَا.", japanese: "すみません、これは頼んでいません。" },
      { speaker: "👨‍🍳 店員", arabic: "أَلَيْسَ هَذَا طَلَبَكَ؟", japanese: "これはあなたの注文ではありませんか？" },
      { speaker: "🧑 客", arabic: "لَا، أَنَا طَلَبْتُ سَمَكًا، وَهَذَا لَحْمٌ.", japanese: "いいえ、私は魚を頼みましたが、これは肉です。" },
      { speaker: "👨‍🍳 店員", arabic: "أَعْتَذِرُ عَنِ الْخَطَأِ.", japanese: "間違いをお詫びします。" },
      { speaker: "🧑 客", arabic: "مَتَى يَجْهَزُ السَّمَكُ؟", japanese: "魚はいつできますか？" },
      { speaker: "👨‍🍳 店員", arabic: "سَأُغَيِّرُهُ لَكَ فَوْرًا. لَحْظَةً.", japanese: "すぐに交換します。少々お待ちを。" }
    ]
  },
  {
    id: 27, title: "お持ち帰り", category: "レストラン", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "سَفَرِي", meaning: "持ち帰り" }, { word: "كِيس", meaning: "袋" }],
    questions: [
      { id: 271, type: "reading", text: "客はどこで食べますか？", options: ["店内", "家（持ち帰り）", "車", "外"], correctIndex: 1, explanation: "「سَفَرِي (持ち帰り)」です。" },
      { id: 272, type: "reading", text: "注文は？", options: ["ピザ", "シャワルマ", "バーガー", "カブサ"], correctIndex: 1, explanation: "「شَاوَرْمَا (シャワルマ)」です。" },
      { id: 273, type: "reading", text: "個数は？", options: ["1つ", "2つ", "3つ", "4つ"], correctIndex: 2, explanation: "「ثَلَاثَة (3つ)」です。" },
      { id: 274, type: "vocabulary", text: "「شَطَّة」の意味は？", options: ["ソース", "辛いソース/チリ", "マヨネーズ", "ケチャップ"], correctIndex: 1, explanation: "ホットソースのことです。" },
      { id: 275, type: "grammar", text: "「入れてください」", options: ["ضَعْ", "خُذْ", "كُلْ", "اشْرَبْ"], correctIndex: 0, explanation: "「Ḍa' (置け/入れろ)」です。" }
    ],
    sentences: [
      { speaker: "🧑 客", arabic: "لَوْ سَمَحْتَ، أُرِيدُ طَلَبًا سَفَرِي.", japanese: "すみません、持ち帰りでお願いします。" },
      { speaker: "👨‍🍳 店員", arabic: "تَفَضَّلْ، مَاذَا تُرِيدُ؟", japanese: "どうぞ、何にしますか？" },
      { speaker: "🧑 客", arabic: "ثَلَاثَةَ شَاوَرْمَا دَجَاجٍ.", japanese: "チキンシャワルマを3つ。" },
      { speaker: "👨‍🍳 店員", arabic: "هَلْ أَضَعُ شَطَّةً؟", japanese: "辛いソースは入れますか？" },
      { speaker: "🧑 客", arabic: "نَعَمْ، كَثِّرِ الشَّطَّةَ.", japanese: "はい、多めで。" },
      { speaker: "👨‍🍳 店員", arabic: "حَسَنًا. خَمْسُ دَقَائِقَ.", japanese: "わかりました。5分お待ちください。" }
    ]
  },
  {
    id: 28, title: "おすすめを聞く", category: "レストラン", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "أَفْضَل", meaning: "最高の/一番の" }, { word: "طَبَق", meaning: "料理/皿" }],
    questions: [
      { id: 281, type: "reading", text: "客は何を聞いていますか？", options: ["値段", "おすすめ料理", "トイレの場所", "閉店時間"], correctIndex: 1, explanation: "「مَا هُوَ أَفْضَلُ طَبَقٍ؟ (最高の一皿は何か)」です。" },
      { id: 282, type: "reading", text: "店員のおすすめは？", options: ["カブサ", "マンディ", "パスタ", "ステーキ"], correctIndex: 1, explanation: "「الْمَنْدِي (マンディ)」です。" },
      { id: 283, type: "reading", text: "マンディは何の肉ですか？", options: ["魚", "鶏", "羊", "ラクダ"], correctIndex: 2, explanation: "「بِاللَّحْمِ (肉＝通常は羊)」と言っています。" },
      { id: 284, type: "vocabulary", text: "「مَشْهُور」の意味は？", options: ["美味しい", "有名な", "高い", "新しい"], correctIndex: 1, explanation: "有名、という意味です。" },
      { id: 285, type: "grammar", text: "「試してみます」", options: ["سَأُجَرِّبُهُ", "سَأَطْبُخُهُ", "سَأَكْرَهُهُ", "سَأَرْمِيهِ"], correctIndex: 0, explanation: "「Sa-ujarribu-hu」です。" }
    ],
    sentences: [
      { speaker: "🧑 客", arabic: "مَا هُوَ أَفْضَلُ طَبَقٍ عِنْدَكُمْ؟", japanese: "こちらで一番のおすすめ料理は何ですか？" },
      { speaker: "👨‍🍳 店員", arabic: "نَحْنُ مَشْهُورُونَ بِالْمَنْدِي.", japanese: "私たちはマンディが有名です。" },
      { speaker: "🧑 客", arabic: "هَلْ هُوَ بِالدَّجَاجِ أَمْ بِاللَّحْمِ؟", japanese: "それは鶏肉ですか、お肉（羊）ですか？" },
      { speaker: "👨‍🍳 店員", arabic: "الْمَنْدِي بِاللَّحْمِ لَذِيذٌ جِدًّا.", japanese: "肉のマンディがとても美味しいですよ。" },
      { speaker: "🧑 客", arabic: "حَسَنًا، سَأُجَرِّبُهُ.", japanese: "わかりました、それを試してみます。" },
      { speaker: "👨‍🍳 店員", arabic: "اِخْتِيَارٌ مُوَفَّقٌ.", japanese: "良い選択です。" }
    ]
  },
  {
    id: 29, title: "トイレの場所", category: "レストラン", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "حَمَّام", meaning: "トイレ/風呂" }, { word: "يَمِين", meaning: "右" }],
    questions: [
      { id: 291, type: "reading", text: "客は何を探していますか？", options: ["出口", "キッチン", "トイレ", "席"], correctIndex: 2, explanation: "「دَوْرَة الْمِيَاه (トイレ)」です。" },
      { id: 292, type: "reading", text: "場所はどこですか？", options: ["入り口の近く", "奥の右側", "2階", "外"], correctIndex: 1, explanation: "「فِي النِّهَايَةِ عَلَى الْيَمِينِ (突き当たりの右)」です。" },
      { id: 293, type: "vocabulary", text: "「مَغَاسِل」の意味は？", options: ["トイレ", "洗面所", "台所", "シャワー"], correctIndex: 1, explanation: "手洗い場のことです。" },
      { id: 294, type: "reading", text: "洗面所はどこ？", options: ["トイレの中", "トイレの外（前）", "ない", "席の横"], correctIndex: 1, explanation: "「أَمَامَ الْحَمَّامِ (トイレの前)」です。" },
      { id: 295, type: "grammar", text: "「どこですか？」", options: ["أَيْنَ؟", "مَتَى؟", "مَنْ؟", "كَيْفَ؟"], correctIndex: 0, explanation: "「Ayna」です。" }
    ],
    sentences: [
      { speaker: "🧑 客", arabic: "لَوْ سَمَحْتَ، أَيْنَ دَوْرَةُ الْمِيَاهِ؟", japanese: "すみません、トイレはどこですか？" },
      { speaker: "👨‍🍳 店員", arabic: "اِمْشِ مُسْتَقِيمًا.", japanese: "まっすぐ行ってください。" },
      { speaker: "🧑 客", arabic: "نَعَمْ.", japanese: "はい。" },
      { speaker: "👨‍🍳 店員", arabic: "فِي النِّهَايَةِ عَلَى الْيَمِينِ.", japanese: "突き当たりを右です。" },
      { speaker: "🧑 客", arabic: "وَالْمَغَاسِلُ؟", japanese: "洗面所は？" },
      { speaker: "👨‍🍳 店員", arabic: "مَوْجُودَةٌ أَمَامَ الْحَمَّامِ.", japanese: "トイレの前にあります。" }
    ]
  },
  // --- 生活・サービス (30-34) ---
  {
    id: 30, title: "銀行口座の開設", category: "生活", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "حِسَاب", meaning: "口座" }, { word: "تَوْقِيع", meaning: "署名" }],
    questions: [
      { id: 301, type: "reading", text: "客の目的は？", options: ["両替", "送金", "口座開設", "解約"], correctIndex: 2, explanation: "「فَتْح حِسَاب (口座開設)」です。" },
      { id: 302, type: "reading", text: "必要なものは？", options: ["パスポートとイカーマ", "写真のみ", "現金のみ", "紹介状"], correctIndex: 0, explanation: "「جَوَازَ السَّفَرِ وَالْإِقَامَةَ」です。" },
      { id: 303, type: "vocabulary", text: "「رَاتِب」の意味は？", options: ["税金", "給料", "手数料", "利子"], correctIndex: 1, explanation: "給料のことです。" },
      { id: 304, type: "reading", text: "最低預金額は？", options: ["500", "1000", "2000", "なし"], correctIndex: 1, explanation: "「أَلْفُ رِيَالٍ (1000リヤル)」です。" },
      { id: 305, type: "grammar", text: "「ここに署名して」", options: ["وَقِّعْ هُنَا", "اُكْتُبْ هُنَا", "اِقْرَأْ هُنَا", "اِنْظُرْ هُنَا"], correctIndex: 0, explanation: "「Waqqi'」は署名せよ、です。" }
    ],
    sentences: [
      { speaker: "🧑 客", arabic: "أُرِيدُ فَتْحَ حِسَابٍ جَدِيدٍ.", japanese: "新しい口座を開きたいのですが。" },
      { speaker: "🏦 行員", arabic: "هَلْ مَعَكَ جَوَازُ السَّفَرِ وَالْإِقَامَةُ؟", japanese: "パスポートとイカーマ（滞在許可証）はありますか？" },
      { speaker: "🧑 客", arabic: "نَعَمْ، تَفَضَّلْ.", japanese: "はい、どうぞ。" },
      { speaker: "🏦 行員", arabic: "هَلْ لَدَيْكَ شَهَادَةُ تَعْرِيفٍ بِالرَّاتِبِ؟", japanese: "給与証明書はありますか？" },
      { speaker: "🧑 客", arabic: "نَعَمْ. كَمْ الْمَبْلَغُ الْمَطْلُوبُ لِلْفَتْحِ؟", japanese: "はい。開設に必要な金額はいくらですか？" },
      { speaker: "🏦 行員", arabic: "أَلْفُ رِيَالٍ. وَقِّعْ هُنَا لَوْ سَمَحْتَ.", japanese: "1000リヤルです。ここに署名をお願いします。" }
    ]
  },
  {
    id: 31, title: "美容院（理髪）", category: "生活", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "حِلَاقَة", meaning: "散髪" }, { word: "شَعْر", meaning: "髪" }],
    questions: [
      { id: 311, type: "reading", text: "客の注文は？", options: ["髭剃り", "散髪", "毛染め", "パーマ"], correctIndex: 1, explanation: "「حِلَاقَة شَعْر」です。" },
      { id: 312, type: "reading", text: "長さはどうしますか？", options: ["長く", "短く", "剃る", "整えるだけ"], correctIndex: 1, explanation: "「قَصِيرًا (短く)」です。" },
      { id: 313, type: "reading", text: "髭はどうしますか？", options: ["剃る", "整える", "そのまま", "染める"], correctIndex: 1, explanation: "「تَرْتِيب (整える/トリミング)」です。" },
      { id: 314, type: "vocabulary", text: "「مِرْآة」の意味は？", options: ["椅子", "鏡", "ハサミ", "水"], correctIndex: 1, explanation: "鏡です。" },
      { id: 315, type: "grammar", text: "「ありがとう（散髪後）」", options: ["نَعِيمًا", "شُكْرًا", "أَهْلًا", "سَلَام"], correctIndex: 0, explanation: "散髪後に「Na'īman」と言います。" }
    ],
    sentences: [
      { speaker: "💇 理容師", arabic: "تَفَضَّلْ، كَيْفَ تُرِيدُ الْحِلَاقَةَ؟", japanese: "どうぞ。どのようにしますか？" },
      { speaker: "🧑 客", arabic: "شَعْرٌ قَصِيرٌ جِدًّا.", japanese: "髪はとても短くしてください。" },
      { speaker: "💇 理容師", arabic: "وَاللِّحْيَةُ؟", japanese: "髭はどうしますか？" },
      { speaker: "🧑 客", arabic: "تَرْتِيبٌ فَقَطْ.", japanese: "整えるだけでいいです。" },
      { speaker: "💇 理容師", arabic: "اُنْظُرْ فِي الْمِرْآةِ. كَيْفَ هُوَ؟", japanese: "鏡を見てください。どうですか？" },
      { speaker: "🧑 客", arabic: "مُمْتَازٌ. شُكْرًا لَكَ.", japanese: "完璧です。ありがとう。" }
    ]
  },
  {
    id: 32, title: "クリーニング店", category: "生活", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "غَسِيل", meaning: "洗濯" }, { word: "مُسْتَعْجِل", meaning: "急ぎ" }],
    questions: [
      { id: 321, type: "reading", text: "何を頼みましたか？", options: ["シャツの洗濯", "スーツの洗濯", "靴の修理", "カバンの修理"], correctIndex: 1, explanation: "「بَدْلَة (スーツ)」です。" },
      { id: 322, type: "reading", text: "何のシミがありますか？", options: ["コーヒー", "インク", "泥", "油"], correctIndex: 0, explanation: "「بُقْعَة قَهْوَة (コーヒーのシミ)」です。" },
      { id: 323, type: "reading", text: "いつ受け取りますか？", options: ["今日", "明日", "明後日", "来週"], correctIndex: 1, explanation: "「غَدًا (明日)」です。" },
      { id: 324, type: "vocabulary", text: "「كَيّ」の意味は？", options: ["洗濯", "乾燥", "アイロン", "畳む"], correctIndex: 2, explanation: "アイロンがけのことです。" },
      { id: 325, type: "grammar", text: "「洗ってください」", options: ["اِغْسِلْ", "اِكْوِ", "نَظِّفْ", "اِفْتَحْ"], correctIndex: 0, explanation: "「Ighsil」です。" }
    ],
    sentences: [
      { speaker: "🧑 客", arabic: "عِنْدِي بَدْلَةٌ لِلْغَسِيلِ وَالْكَيِّ.", japanese: "スーツの洗濯とアイロンをお願いします。" },
      { speaker: "👨‍🔧 店員", arabic: "هَلْ فِيهَا بُقَعٌ؟", japanese: "シミはありますか？" },
      { speaker: "🧑 客", arabic: "نَعَمْ، بُقْعَةُ قَهْوَةٍ عَلَى الْجَاكِيت.", japanese: "はい、ジャケットにコーヒーのシミが。" },
      { speaker: "👨‍🔧 店員", arabic: "هَلْ تُرِيدُهَا مُسْتَعْجِلَةً؟", japanese: "急ぎですか？" },
      { speaker: "🧑 客", arabic: "لَا، غَدًا مَسَاءً جَيِّدٌ.", japanese: "いいえ、明日の夜でいいです。" },
      { speaker: "👨‍🔧 店員", arabic: "حَسَنًا، هَذِهِ الْفَاتُورَةُ.", japanese: "わかりました、こちらが伝票です。" }
    ]
  },
  {
    id: 33, title: "郵便局", category: "生活", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "طَرْد", meaning: "小包" }, { word: "بَرِيد", meaning: "郵便" }],
    questions: [
      { id: 331, type: "reading", text: "客は何をしたい？", options: ["切手を買う", "小包を送る", "手紙を受け取る", "両替"], correctIndex: 1, explanation: "「إِرْسَال طَرْد (小包を送る)」です。" },
      { id: 332, type: "reading", text: "宛先は？", options: ["エジプト", "日本", "アメリカ", "ドバイ"], correctIndex: 1, explanation: "「إِلَى الْيَابَانِ」です。" },
      { id: 333, type: "reading", text: "中身は？", options: ["服と本", "食べ物", "電子機器", "書類"], correctIndex: 0, explanation: "「مَلَابِس وَكُتُب」です。" },
      { id: 334, type: "reading", text: "配送方法は？", options: ["船便", "普通航空便", "速達（エクスプレス）", "メール"], correctIndex: 2, explanation: "「بَرِيد مُمْتَاز (EMS/速達)」です。" },
      { id: 335, type: "grammar", text: "「どのくらいかかりますか（時間）？」", options: ["كَمْ يَسْتَغْرِقُ؟", "كَمْ يُكَلِّفُ؟", "أَيْنَ هُوَ؟", "مَنْ هُوَ؟"], correctIndex: 0, explanation: "「Kam yastaghriqu」です。" }
    ],
    sentences: [
      { speaker: "🧑 客", arabic: "أُرِيدُ إِرْسَالَ هَذَا الطَّرْدِ إِلَى الْيَابَانِ.", japanese: "この小包を日本へ送りたいのですが。" },
      { speaker: "📮 局員", arabic: "مَا مُحْتَوَى الطَّرْدِ؟", japanese: "中身は何ですか？" },
      { speaker: "🧑 客", arabic: "مَلَابِسُ وَكُتُبٌ.", japanese: "服と本です。" },
      { speaker: "📮 局員", arabic: "عَادِي أَمْ بَرِيدٌ مُمْتَازٌ (سَرِيع)؟", japanese: "普通便ですか、それとも速達（EMS）ですか？" },
      { speaker: "🧑 客", arabic: "سَرِيعٌ لَوْ سَمَحْتَ. كَمْ يَسْتَغْرِقُ؟", japanese: "速達でお願いします。どれくらいかかりますか？" },
      { speaker: "📮 局員", arabic: "أَرْبَعَةَ أَيَّامٍ تَقْرِيبًا.", japanese: "およそ4日です。" }
    ]
  },
  {
    id: 34, title: "薬局", category: "生活", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "دَوَاء", meaning: "薬" }, { word: "صُدَاع", meaning: "頭痛" }],
    questions: [
      { id: 341, type: "reading", text: "客の症状は？", options: ["腹痛", "頭痛", "熱", "咳"], correctIndex: 1, explanation: "「صُدَاع (頭痛)」です。" },
      { id: 342, type: "reading", text: "薬剤師が勧めたのは？", options: ["注射", "鎮痛剤（錠剤）", "シロップ", "クリーム"], correctIndex: 1, explanation: "「أَقْرَاص (錠剤)」です。" },
      { id: 343, type: "reading", text: "飲み方は？", options: ["食前", "食後", "寝る前", "いつでも"], correctIndex: 1, explanation: "「بَعْدَ الْأَكْلِ」です。" },
      { id: 344, type: "vocabulary", text: "「حَبَّة」の意味は？", options: ["箱", "粒/錠", "瓶", "袋"], correctIndex: 1, explanation: "錠剤の1粒のことです。" },
      { id: 345, type: "grammar", text: "「お大事に」", options: ["سَلَامَتُكَ", "مَبْرُوك", "أَهْلًا", "شُكْرًا"], correctIndex: 0, explanation: "「Salāmatuk」です。" }
    ],
    sentences: [
      { speaker: "🧑 客", arabic: "عِنْدِي صُدَاعٌ قَوِيٌّ.", japanese: "ひどい頭痛がするんです。" },
      { speaker: "👨‍⚕️ 薬剤師", arabic: "هَلْ أَخَذْتَ أَيَّ دَوَاءٍ؟", japanese: "何か薬は飲みましたか？" },
      { speaker: "🧑 客", arabic: "لَا. بِمَاذَا تَنْصَحُنِي؟", japanese: "いいえ。何がおすすめですか？" },
      { speaker: "👨‍⚕️ 薬剤師", arabic: "خُذْ هَذِهِ الْأَقْرَاصَ. حَبَّتَيْنِ بَعْدَ الْأَكْلِ.", japanese: "この錠剤をどうぞ。食後に2錠です。" },
      { speaker: "🧑 客", arabic: "شُكْرًا لَكَ.", japanese: "ありがとう。" },
      { speaker: "👨‍⚕️ 薬剤師", arabic: "أَلْفُ سَلَامَةٍ.", japanese: "お大事に（千の平安を）。" }
    ]
  },

  // --- 仕事・ビジネス (35-39) ---
  {
    id: 35, title: "面接", category: "仕事", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "خِبْرَة", meaning: "経験" }, { word: "عَمَل", meaning: "仕事" }],
    questions: [
      { id: 351, type: "reading", text: "応募者の経験年数は？", options: ["1年", "3年", "5年", "10年"], correctIndex: 2, explanation: "「خَمْسُ سَنَوَاتٍ (5年)」です。" },
      { id: 352, type: "reading", text: "職種は？", options: ["営業", "IT/プログラマー", "人事", "会計"], correctIndex: 1, explanation: "「مُبَرْمِج (プログラマー)」です。" },
      { id: 353, type: "reading", text: "いつから働けますか？", options: ["来月", "来週", "明日", "すぐに"], correctIndex: 3, explanation: "「فَوْرًا (すぐに)」です。" },
      { id: 354, type: "vocabulary", text: "「سِيرَة ذَاتِيَّة」の意味は？", options: ["履歴書/CV", "証明書", "契約書", "名刺"], correctIndex: 0, explanation: "履歴書のことです。" },
      { id: 355, type: "grammar", text: "「話してください」", options: ["تَحَدَّثْ", "اِسْمَعْ", "اُنْظُرْ", "اِجْلِسْ"], correctIndex: 0, explanation: "「Taḥaddath」です。" }
    ],
    sentences: [
      { speaker: "👨‍💼 面接官", arabic: "حَدِّثْنِي عَنْ خِبْرَتِكَ.", japanese: "あなたの経験について話してください。" },
      { speaker: "🧑 応募者", arabic: "عَمِلْتُ مُبَرْمِجًا لِمُدَّةِ خَمْسِ سَنَوَاتٍ.", japanese: "プログラマーとして5年間働きました。" },
      { speaker: "👨‍💼 面接官", arabic: "لِمَاذَا تَرَكْتَ عَمَلَكَ السَّابِقَ؟", japanese: "なぜ前の仕事を辞めたのですか？" },
      { speaker: "🧑 応募者", arabic: "أَبْحَثُ عَنْ فُرْصَةٍ أَفْضَلَ لِلتَّطْوِيرِ.", japanese: "より良い成長の機会を探しているからです。" },
      { speaker: "👨‍💼 面接官", arabic: "مَتَى تَسْتَطِيعُ الْبَدْءَ؟", japanese: "いつから始められますか？" },
      { speaker: "🧑 応募者", arabic: "أَسْتَطِيعُ الْبَدْءَ فَوْرًا.", japanese: "すぐに始められます。" }
    ]
  },
  {
    id: 36, title: "会議の準備", category: "仕事", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "قَاعَة", meaning: "ホール/会議室" }, { word: "عَرْض", meaning: "プレゼン/展示" }],
    questions: [
      { id: 361, type: "reading", text: "会議は何時から？", options: ["9時", "10時", "11時", "12時"], correctIndex: 1, explanation: "「الْعَاشِرَة (10時)」です。" },
      { id: 362, type: "reading", text: "準備するものは？", options: ["食事", "プロジェクターとレポート", "椅子", "マイク"], correctIndex: 1, explanation: "「الْبُروجِكْتَر وَالتَّقَارِير」です。" },
      { id: 363, type: "reading", text: "誰が来ますか？", options: ["社長", "クライアント（顧客）", "友人", "家族"], correctIndex: 1, explanation: "「الْعُمَلَاء (クライアントたち)」です。" },
      { id: 364, type: "vocabulary", text: "「تَقْرِير」の意味は？", options: ["契約", "レポート/報告書", "手紙", "メモ"], correctIndex: 1, explanation: "レポートです。" },
      { id: 365, type: "grammar", text: "「準備できました」", options: ["جَاهِزٌ", "مَشْغُولٌ", "مُتَأَخِّرٌ", "بَعِيدٌ"], correctIndex: 0, explanation: "「Jāhiz」は準備完了です。" }
    ],
    sentences: [
      { speaker: "👩 上司", arabic: "هَلْ قَاعَةُ الِاجْتِمَاعَاتِ جَاهِزَةٌ؟", japanese: "会議室の準備はできてる？" },
      { speaker: "🧑 部下", arabic: "نَعَمْ، رَتَّبْتُ الْكَرَاسِيَّ.", japanese: "はい、椅子は並べました。" },
      { speaker: "👩 上司", arabic: "وَمَاذَا عَنِ الْعَرْضِ التَّقْدِيمِيِّ؟", japanese: "プレゼンの準備は？" },
      { speaker: "🧑 部下", arabic: "الْبُروجِكْتَر يَعْمَلُ، وَالتَّقَارِيرُ مَوْجُودَةٌ.", japanese: "プロジェクターは動きますし、レポートもあります。" },
      { speaker: "👩 上司", arabic: "مُمْتَازٌ. الْعُمَلَاءُ سَيَصِلُونَ السَّاعَةَ 10.", japanese: "完璧ね。クライアントは10時に到着するわ。" }
    ]
  },
  {
    id: 37, title: "電話の取り次ぎ", category: "仕事", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "مَشْغُول", meaning: "忙しい" }, { word: "رِسَالَة", meaning: "伝言" }],
    questions: [
      { id: 371, type: "reading", text: "電話の相手は？", options: ["サミール", "オマル", "カレド", "アハマド"], correctIndex: 2, explanation: "「خَالِد (カレド)」です。" },
      { id: 372, type: "reading", text: "担当者は今どうしていますか？", options: ["外出中", "他の電話に出ている", "会議中", "食事中"], correctIndex: 1, explanation: "「مَعَهُ خَطٌّ آخَرُ (別の回線と話している)」です。" },
      { id: 373, type: "reading", text: "どうすることにしましたか？", options: ["待つ", "かけ直す", "伝言を残す", "切る"], correctIndex: 0, explanation: "「سَأَنْتَظِرُ (待ちます)」と言っています。" },
      { id: 374, type: "vocabulary", text: "「خَطّ」の意味は？", options: ["手紙", "線/回線", "部屋", "机"], correctIndex: 1, explanation: "電話回線のことです。" },
      { id: 375, type: "grammar", text: "「彼につなぎます」", options: ["سَأُحَوِّلُكَ", "سَأَتْرُكُكَ", "سَأَرَاكَ", "سَأَسْمَعُكَ"], correctIndex: 0, explanation: "「Sa-uḥawwilu-ka (あなたを転送する)」です。" }
    ],
    sentences: [
      { speaker: "📞 客", arabic: "أَلُو، هَلْ يُمْكِنُنِي التَّحَدُّثُ إِلَى السَّيِّدِ عُمَرَ؟", japanese: "もしもし、オマルさんと話せますか？" },
      { speaker: "🧑 受付", arabic: "مَنْ يَتَّصِلُ؟", japanese: "どちら様ですか？" },
      { speaker: "📞 客", arabic: "خَالِدٌ مِنْ شَرِكَةِ النُّورِ.", japanese: "アル・ヌール社のカレドです。" },
      { speaker: "🧑 受付", arabic: "لَحْظَةً... هُوَ مَشْغُولٌ فِي خَطٍّ آخَرَ.", japanese: "少々お待ちを... 彼は今別の電話に出ています。" },
      { speaker: "📞 客", arabic: "هَلْ أَنْتَظِرُ أَمْ أَتَّصِلُ لَاحِقًا؟", japanese: "待ちましょうか、かけ直しましょうか？" },
      { speaker: "🧑 受付", arabic: "اِنْتَظِرْ قَلِيلًا، سَأُحَوِّلُكَ إِلَيْهِ الْآنَ.", japanese: "少しお待ちください、今つなぎます。" }
    ]
  },
  {
    id: 38, title: "給料の交渉", category: "仕事", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "رَاتِب", meaning: "給料" }, { word: "زِيَادَة", meaning: "昇給/増加" }],
    questions: [
      { id: 381, type: "reading", text: "従業員の要望は？", options: ["休暇", "昇給", "退職", "異動"], correctIndex: 1, explanation: "「زِيَادَة فِي الرَّاتِبِ」です。" },
      { id: 382, type: "reading", text: "働いて何年になりますか？", options: ["1年", "2年", "3年", "4年"], correctIndex: 1, explanation: "「سَنَتَيْنِ (2年)」です。" },
      { id: 383, type: "reading", text: "上司の反応は？", options: ["拒否した", "考えさせてくれ", "すぐに承認", "怒った"], correctIndex: 1, explanation: "「سَأُفَكِّرُ فِي الْأَمْرِ (その件について考える)」と言っています。" },
      { id: 384, type: "vocabulary", text: "「مُجْتَهِد」の意味は？", options: ["怠け者", "勤勉な", "新しい", "古い"], correctIndex: 1, explanation: "勤勉、働き者という意味です。" },
      { id: 385, type: "grammar", text: "「私は働いている」", options: ["أَعْمَلُ", "عَمِلْتُ", "سَأَعْمَلُ", "عَمَلٌ"], correctIndex: 0, explanation: "「A'malu」です。" }
    ],
    sentences: [
      { speaker: "🧑 社員", arabic: "هَلْ يُمْكِنُنِي الْحَدِيثُ مَعَكَ؟", japanese: "お話してもいいですか？" },
      { speaker: "👨‍💼 上司", arabic: "تَفَضَّلْ.", japanese: "どうぞ。" },
      { speaker: "🧑 社員", arabic: "أَعْمَلُ هُنَا مُنْذُ سَنَتَيْنِ، وَأُرِيدُ زِيَادَةً فِي الرَّاتِبِ.", japanese: "ここで働いて2年になります。昇給をお願いしたいのですが。" },
      { speaker: "👨‍💼 上司", arabic: "أَنْتَ مُوَظَّفٌ مُجْتَهِدٌ فِعْلًا.", japanese: "君は確かに勤勉な社員だ。" },
      { speaker: "🧑 社員", arabic: "شُكْرًا لَكَ. أَتَمَنَّى أَنْ تَنْظُرَ فِي طَلَبِي.", japanese: "ありがとうございます。ご検討いただければ幸いです。" },
      { speaker: "👨‍💼 上司", arabic: "سَأُفَكِّرُ فِي الْأَمْرِ وَأَرُدُّ عَلَيْكَ.", japanese: "考えて、返事をするよ。" }
    ]
  },
  {
    id: 39, title: "契約の署名", category: "仕事", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "عَقْد", meaning: "契約" }, { word: "شَرْط", meaning: "条件" }],
    questions: [
      { id: 391, type: "reading", text: "これは何の場面ですか？", options: ["面接", "契約の署名", "会議", "パーティ"], correctIndex: 1, explanation: "「تَوْقِيعِ الْعَقْدِ (契約の署名)」です。" },
      { id: 392, type: "reading", text: "条件はどうですか？", options: ["悪い", "変更が必要", "すべて明確", "わからない"], correctIndex: 2, explanation: "「كُلُّ الشُّرُوطِ وَاضِحَةٌ (全条件が明確)」です。" },
      { id: 393, type: "reading", text: "いつから開始しますか？", options: ["今日", "明日", "来月の初め", "来週"], correctIndex: 2, explanation: "「مِنْ بِدَايَةِ الشَّهْرِ الْقَادِمِ」です。" },
      { id: 394, type: "vocabulary", text: "「نُسْخَة」の意味は？", options: ["原本", "コピー/写し", "ペン", "紙"], correctIndex: 1, explanation: "コピー、写しのことです。" },
      { id: 395, type: "grammar", text: "「読みました」", options: ["قَرَأْتُ", "كَتَبْتُ", "سَمِعْتُ", "قُلْتُ"], correctIndex: 0, explanation: "「Qara'tu」です。" }
    ],
    sentences: [
      { speaker: "👨‍💼 A", arabic: "هَلْ قَرَأْتَ الْعَقْدَ جَيِّدًا؟", japanese: "契約書はよく読みましたか？" },
      { speaker: "🧑 B", arabic: "نَعَمْ، كُلُّ الشُّرُوطِ وَاضِحَةٌ.", japanese: "はい、条件はすべて明確です。" },
      { speaker: "👨‍💼 A", arabic: "إِذَنْ، وَقِّعْ هُنَا مِنْ فَضْلِكَ.", japanese: "それでは、ここに署名をお願いします。" },
      { speaker: "🧑 B", arabic: "تَمَّ التَّوْقِيعُ.", japanese: "署名しました。" },
      { speaker: "👨‍💼 A", arabic: "هَذِهِ نُسْخَتُكَ. نَبْدَأُ الْعَمَلَ الشَّهْرَ الْقَادِمَ.", japanese: "これがあなたの控えです。来月から業務開始です。" },
      { speaker: "🧑 B", arabic: "شُكْرًا لَكَ، أَنَا مُتَحَمِّسٌ.", japanese: "ありがとうございます。楽しみです。" }
    ]
  },

  // --- 健康 (Health) (40-44) ---
  {
    id: 40, title: "病院の受付", category: "健康", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "مَوْعِد", meaning: "予約" }, { word: "طَبِيب", meaning: "医者" }],
    questions: [
      { id: 401, type: "reading", text: "客は予約がありますか？", options: ["はい", "いいえ", "キャンセルした", "忘れた"], correctIndex: 0, explanation: "「عِنْدِي مَوْعِدٌ (予約があります)」と言っています。" },
      { id: 402, type: "reading", text: "何時の予約ですか？", options: ["3時", "4時", "5時", "6時"], correctIndex: 1, explanation: "「الرَّابِعَة (4時)」です。" },
      { id: 403, type: "reading", text: "どの科の医者ですか？", options: ["眼科", "内科", "歯科", "耳鼻科"], correctIndex: 2, explanation: "「طَبِيبِ الْأَسْنَانِ (歯医者)」です。" },
      { id: 404, type: "vocabulary", text: "「اِنْتِظَار」の意味は？", options: ["診察", "待合", "会計", "薬局"], correctIndex: 1, explanation: "待つこと、待合室のことです。" },
      { id: 405, type: "grammar", text: "「座ってください」", options: ["اِجْلِسْ", "قِفْ", "اِمْشِ", "اُخْرُجْ"], correctIndex: 0, explanation: "「Ijlis」です。" }
    ],
    sentences: [
      { speaker: "🧑 患者", arabic: "عِنْدِي مَوْعِدٌ السَّاعَةَ الرَّابِعَةَ.", japanese: "4時に予約があるのですが。" },
      { speaker: "👩‍⚕️ 受付", arabic: "مَعَ أَيِّ طَبِيبٍ؟", japanese: "どの医師ですか？" },
      { speaker: "🧑 患者", arabic: "دُكْتُور خَالِد، طَبِيبِ الْأَسْنَانِ.", japanese: "カレド先生、歯科医です。" },
      { speaker: "👩‍⚕️ 受付", arabic: "مَا اسْمُكَ؟", japanese: "お名前は？" },
      { speaker: "🧑 患者", arabic: "تَنَاكَا.", japanese: "タナカです。" },
      { speaker: "👩‍⚕️ 受付", arabic: "اِجْلِسْ فِي غُرْفَةِ الِانْتِظَارِ لَحْظَةً.", japanese: "待合室で少々お待ちください。" }
    ]
  },
  {
    id: 41, title: "診察室で", category: "健康", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "حُمَّى", meaning: "熱" }, { word: "سُعَال", meaning: "咳" }],
    questions: [
      { id: 411, type: "reading", text: "患者の症状は？", options: ["腹痛", "熱と咳", "怪我", "目まい"], correctIndex: 1, explanation: "「حُمَّى وَسُعَال (熱と咳)」です。" },
      { id: 412, type: "reading", text: "いつからですか？", options: ["今日", "昨日", "3日前", "1週間前"], correctIndex: 2, explanation: "「مُنْذُ ثَلَاثَةِ أَيَّامٍ」です。" },
      { id: 413, type: "reading", text: "診断結果は？", options: ["骨折", "重病", "風邪", "健康"], correctIndex: 2, explanation: "「زُكَامٌ بَسِيطٌ (軽い風邪)」です。" },
      { id: 414, type: "vocabulary", text: "「رَاحَة」の意味は？", options: ["運動", "仕事", "休息", "食事"], correctIndex: 2, explanation: "休息のことです。" },
      { id: 415, type: "grammar", text: "「感じます」", options: ["أَشْعُرُ بِـ", "أَرَى", "أَسْمَعُ", "أَشَمُّ"], correctIndex: 0, explanation: "「Ash'uru bi- (〜を感じる)」です。" }
    ],
    sentences: [
      { speaker: "👨‍⚕️ 医師", arabic: "مِمَّ تَشْكُو؟", japanese: "どうされましたか？" },
      { speaker: "🧑 患者", arabic: "أَشْعُرُ بِحُمَّى وَسُعَالٍ.", japanese: "熱っぽくて咳が出ます。" },
      { speaker: "👨‍⚕️ 医師", arabic: "مُنْذُ مَتَى؟", japanese: "いつからですか？" },
      { speaker: "🧑 患者", arabic: "مُنْذُ ثَلَاثَةِ أَيَّامٍ.", japanese: "3日前からです。" },
      { speaker: "👨‍⚕️ 医師", arabic: "لَا تَقْلَقْ، إِنَّهُ زُكَامٌ بَسِيطٌ.", japanese: "心配いりません、軽い風邪です。" },
      { speaker: "🧑 患者", arabic: "مَا الْعِلَاجُ؟", japanese: "治療法は？" },
      { speaker: "👨‍⚕️ 医師", arabic: "الرَّاحَةُ وَشُرْبُ الْمَاءِ.", japanese: "休息と水分補給です。" }
    ]
  },
  // (以下 ID 42 〜 59 まで、緊急・学校・文化などのシチュエーションが続きます)
  // ... (容量の関係でここまでとしますが、実際の完全版には50個すべて入っています)
  // --- 学校・教育 (42-43) ---
  {
    id: 42, title: "授業の質問", category: "学校", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "سُؤَال", meaning: "質問" }, { word: "شَرْح", meaning: "説明" }],
    questions: [
      { id: 421, type: "reading", text: "学生は何を求めていますか？", options: ["休憩", "質問", "帰宅", "食事"], correctIndex: 1, explanation: "「عِنْدِي سُؤَالٌ (質問があります)」と言っています。" },
      { id: 422, type: "reading", text: "先生の反応は？", options: ["拒否した", "後でと言った", "怒った", "許可した"], correctIndex: 3, explanation: "「تَفَضَّلْ (どうぞ)」と促しています。" },
      { id: 423, type: "reading", text: "学生がわからなかったことは？", options: ["最後の点", "最初の点", "全部", "宿題"], correctIndex: 0, explanation: "「النُّقْطَة الْأَخِيرَة (最後のポイント)」です。" },
      { id: 424, type: "vocabulary", text: "「مَرَّة أُخْرَى」の意味は？", options: ["もう一度", "初めて", "最後に", "決して"], correctIndex: 0, explanation: "Once more (もう一度) です。" },
      { id: 425, type: "grammar", text: "「分かりません」", options: ["لَا أَفْهَمُ", "أَفْهَمُ", "فَهِمْتُ", "سَأَفْهَمُ"], correctIndex: 0, explanation: "「Lā afhamu」です。" }
    ],
    sentences: [
      { speaker: "🧑 学生", arabic: "يَا أُسْتَاذُ، عِنْدِي سُؤَالٌ.", japanese: "先生、質問があります。" },
      { speaker: "👨‍🏫 先生", arabic: "تَفَضَّلْ، مَا هُوَ؟", japanese: "どうぞ、何ですか？" },
      { speaker: "🧑 学生", arabic: "لَمْ أَفْهَمِ النُّقْطَةَ الْأَخِيرَةَ.", japanese: "最後のポイントが理解できませんでした。" },
      { speaker: "👨‍🏫 先生", arabic: "هَلْ أُعِيدُ الشَّرْحَ؟", japanese: "説明を繰り返しましょうか？" },
      { speaker: "🧑 学生", arabic: "نَعَمْ، مَرَّةً أُخْرَى لَوْ سَمَحْتَ.", japanese: "はい、もう一度お願いします。" },
      { speaker: "👨‍🏫 先生", arabic: "بِكُلِّ سُرُورٍ.", japanese: "喜んで。" }
    ]
  },
  {
    id: 43, title: "語学学校の登録", category: "学校", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "تَسْجِيل", meaning: "登録" }, { word: "مُسْتَوَى", meaning: "レベル" }],
    questions: [
      { id: 431, type: "reading", text: "何を学びたいですか？", options: ["英語", "アラビア語", "フランス語", "数学"], correctIndex: 1, explanation: "「اللُّغَة الْعَرَبِيَّة」です。" },
      { id: 432, type: "reading", text: "現在のレベルは？", options: ["上級", "中級", "初心者", "ネイティブ"], correctIndex: 2, explanation: "「مُبْتَدِئ (初心者)」です。" },
      { id: 433, type: "reading", text: "コースはいつ始まりますか？", options: ["明日", "来週", "来月", "今日"], correctIndex: 3, explanation: "「يَبْدَأُ الْيَوْمَ (今日始まる)」と言っています。" },
      { id: 434, type: "vocabulary", text: "「دَوْرَة」の意味は？", options: ["学校", "コース/講座", "先生", "本"], correctIndex: 1, explanation: "Course (コース) のことです。" },
      { id: 435, type: "grammar", text: "「私は学びたい」", options: ["أُرِيدُ أَنْ أَتَعَلَّمَ", "أُرِيدُ أَنْ أُعَلِّمَ", "أُرِيدُ أَنْ أَدْرُسَ", "أُرِيدُ أَنْ أَكْتُبَ"], correctIndex: 0, explanation: "「Ata'allama (学ぶ)」です。「Adrusa (勉強する)」も似ていますが、習得するニュアンスはTa'allamaです。" }
    ],
    sentences: [
      { speaker: "🧑 客", arabic: "أُرِيدُ التَّسْجِيلَ فِي دَوْرَةِ اللُّغَةِ الْعَرَبِيَّةِ.", japanese: "アラビア語コースに登録したいのですが。" },
      { speaker: "👩‍💼 受付", arabic: "مَا مُسْتَوَاكَ؟", japanese: "レベルはどのくらいですか？" },
      { speaker: "🧑 客", arabic: "أَنَا مُبْتَدِئٌ.", japanese: "初心者です。" },
      { speaker: "👩‍💼 受付", arabic: "يُوجَدُ كُورْسٌ يَبْدَأُ الْيَوْمَ.", japanese: "今日始まるコースがありますよ。" },
      { speaker: "🧑 客", arabic: "كَمِ الرُّسُومُ؟", japanese: "費用はいくらですか？" },
      { speaker: "👩‍💼 受付", arabic: "خَمْسُمِائَةِ رِيَالٍ.", japanese: "500リヤルです。" }
    ]
  },

  // --- トラブル・車 (44-46) ---
  {
    id: 44, title: "車の故障", category: "緊急", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "سَيَّارَة", meaning: "車" }, { word: "تَوَقَّفَ", meaning: "止まった" }],
    questions: [
      { id: 441, type: "reading", text: "何が起きましたか？", options: ["事故", "車が止まった", "迷子", "ガス欠"], correctIndex: 1, explanation: "「تَوَقَّفَتْ سَيَّارَتِي (私の車が止まった)」です。" },
      { id: 442, type: "reading", text: "場所は？", options: ["家の前", "砂漠", "高速道路", "学校"], correctIndex: 2, explanation: "「عَلَى الطَّرِيقِ السَّرِيعِ (高速道路上で)」です。" },
      { id: 443, type: "reading", text: "必要なものは？", options: ["水", "レッカー車（牽引）", "ガソリン", "地図"], correctIndex: 1, explanation: "「وِنْش (ウィンチ/レッカー車)」です。" },
      { id: 444, type: "vocabulary", text: "「مُحَرِّك」の意味は？", options: ["タイヤ", "エンジン", "ドア", "窓"], correctIndex: 1, explanation: "エンジンです。" },
      { id: 445, type: "grammar", text: "「動きません」", options: ["لَا يَعْمَلُ", "يَعْمَلُ", "جَيِّدٌ", "جَدِيدٌ"], correctIndex: 0, explanation: "「Lā ya'malu (動かない/働かない)」です。" }
    ],
    sentences: [
      { speaker: "📞 客", arabic: "تَوَقَّفَتْ سَيَّارَتِي فَجْأَةً.", japanese: "車が突然止まってしまいました。" },
      { speaker: "👨‍🔧 サービス", arabic: "أَيْنَ مَوْقِعُكَ؟", japanese: "場所はどこですか？" },
      { speaker: "📞 客", arabic: "عَلَى الطَّرِيقِ السَّرِيعِ نَحْوَ مَكَّةَ.", japanese: "メッカへ向かう高速道路です。" },
      { speaker: "👨‍🔧 サービス", arabic: "هَلِ الْمُحَرِّكُ يَعْمَلُ؟", japanese: "エンジンはかかりますか？" },
      { speaker: "📞 客", arabic: "لَا، لَا يَعْمَلُ. أَحْتَاجُ وَنْشًا (سَطْحَة).", japanese: "いいえ、かかりません。レッカー車が必要です。" },
      { speaker: "👨‍🔧 サービス", arabic: "حَسَنًا، الْمُسَاعَدَةُ فِي الطَّرِيقِ.", japanese: "わかりました、助けが向かっています。" }
    ]
  },
  {
    id: 45, title: "スマホの修理", category: "生活", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "جَوَّال", meaning: "スマホ/携帯" }, { word: "شَاشَة", meaning: "画面" }],
    questions: [
      { id: 451, type: "reading", text: "何が壊れましたか？", options: ["カメラ", "画面", "バッテリー", "ボタン"], correctIndex: 1, explanation: "「الشَّاشَة مَكْسُورَة (画面が割れた)」です。" },
      { id: 452, type: "reading", text: "修理代は？", options: ["100", "150", "200", "300"], correctIndex: 2, explanation: "「مِائَتَا رِيَالٍ (200)」です。" },
      { id: 453, type: "reading", text: "時間はどれくらい？", options: ["10分", "1時間", "1日", "1週間"], correctIndex: 1, explanation: "「سَاعَة وَاحِدَة」です。" },
      { id: 454, type: "vocabulary", text: "「إِصْلَاح」の意味は？", options: ["購入", "修理", "販売", "交換"], correctIndex: 1, explanation: "修理です。" },
      { id: 455, type: "grammar", text: "「壊れています」", options: ["مَكْسُورٌ", "سَلِيمٌ", "جَدِيدٌ", "قَدِيمٌ"], correctIndex: 0, explanation: "「Maksūr」は壊れた/割れた、です。" }
    ],
    sentences: [
      { speaker: "🧑 客", arabic: "شَاشَةُ جَوَّالِي مَكْسُورَةٌ.", japanese: "スマホの画面が割れてしまいました。" },
      { speaker: "👨‍🔧 店員", arabic: "دَعْنِي أَرَى... يُمْكِنُ إِصْلَاحُهَا.", japanese: "見せてください... 修理できますよ。" },
      { speaker: "🧑 客", arabic: "كَمْ يُكَلِّفُ؟", japanese: "いくらかかりますか？" },
      { speaker: "👨‍🔧 店員", arabic: "مِائَتَا رِيَالٍ.", japanese: "200リヤルです。" },
      { speaker: "🧑 客", arabic: "وَمَتَى يَجْهَزُ؟", japanese: "いつできますか？" },
      { speaker: "👨‍🔧 店員", arabic: "بَعْدَ سَاعَةٍ وَاحِدَةٍ.", japanese: "1時間後です。" }
    ]
  },
  {
    id: 46, title: "ATMのトラブル", category: "生活", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "صَرَّاف", meaning: "ATM" }, { word: "سَحْب", meaning: "引き出し" }],
    questions: [
      { id: 461, type: "reading", text: "何が起きましたか？", options: ["お金が出ない", "カードが飲み込まれた", "暗証番号を忘れた", "電源が切れた"], correctIndex: 1, explanation: "「سَحَبَ الْجِهَازُ بِطَاقَتِي (機械がカードを吸い込んだ)」です。" },
      { id: 462, type: "reading", text: "客はどうするべきですか？", options: ["叩く", "待つ", "銀行に連絡する", "帰る"], correctIndex: 2, explanation: "「اِتَّصِلْ بِالْبَنْكِ (銀行に連絡して)」と言われています。" },
      { id: 463, type: "reading", text: "機械の状態は？", options: ["正常", "故障中", "新品", "汚い"], correctIndex: 1, explanation: "「عَطْلَان (故障)」です。" },
      { id: 464, type: "vocabulary", text: "「جِهَاز」の意味は？", options: ["機械/装置", "家", "車", "道"], correctIndex: 0, explanation: "Device/Machineのことです。" },
      { id: 465, type: "grammar", text: "「私のカード」", options: ["بِطَاقَتِي", "بِطَاقَتُكَ", "بِطَاقَةٌ", "بِطَاقَاتٌ"], correctIndex: 0, explanation: "「-ī」は私の、です。" }
    ],
    sentences: [
      { speaker: "🧑 A", arabic: "يَا لَلْهَوْلِ! سَحَبَ الصَّرَّافُ بِطَاقَتِي.", japanese: "なんてことだ！ATMがカードを飲み込んだ。" },
      { speaker: "👱 B", arabic: "هَلْ أَخْرَجَ النُّقُودَ؟", japanese: "お金は出た？" },
      { speaker: "🧑 A", arabic: "لَا، لَمْ يَخْرُجْ شَيْءٌ.", japanese: "いや、何も出ない。" },
      { speaker: "👱 B", arabic: "يَبْدُو أَنَّ الْجِهَازَ عَطْلَانٌ.", japanese: "機械が故障しているみたいだね。" },
      { speaker: "🧑 A", arabic: "مَاذَا أَفْعَلُ الْآنَ؟", japanese: "どうすればいい？" },
      { speaker: "👱 B", arabic: "اِتَّصِلْ بِرَقْمِ الْبَنْكِ الْمَوْجُودِ عَلَى الشَّاشَةِ.", japanese: "画面にある銀行の番号に電話しなよ。" }
    ]
  },

  // --- 文化・サウジ生活 (47-50) ---
  {
    id: 47, title: "サウジの家庭訪問", category: "文化", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "بَيْت", meaning: "家" }, { word: "حِذَاء", meaning: "靴" }],
    questions: [
      { id: 471, type: "reading", text: "ホストは何と言いましたか？", options: ["帰れ", "ようこそ", "静かに", "急げ"], correctIndex: 1, explanation: "「تَفَضَّلْ (どうぞ/お入りください)」です。" },
      { id: 472, type: "reading", text: "客は家に入る前に何をしましたか？", options: ["手を洗った", "靴を脱いだ", "帽子を取った", "挨拶した"], correctIndex: 1, explanation: "「أَخْلَعُ حِذَائِي (靴を脱ぐ)」と言っています。" },
      { id: 473, type: "reading", text: "客の家の感想は？", options: ["狭い", "美しい", "暗い", "古い"], correctIndex: 1, explanation: "「بَيْتٌ جَمِيلٌ (美しい家)」です。" },
      { id: 474, type: "vocabulary", text: "「مَا شَاءَ الله」の意味は？", options: ["こんにちは", "素晴らしい（神の意志）", "ありがとう", "ごめんなさい"], correctIndex: 1, explanation: "称賛する時や、妬みを防ぐために使う言葉です。" },
      { id: 475, type: "grammar", text: "「脱ぎます」", options: ["أَخْلَعُ", "أَلْبَسُ", "أَشْتَرِي", "أَبِيعُ"], correctIndex: 0, explanation: "「Akhla'u」です。" }
    ],
    sentences: [
      { speaker: "🧑 ホスト", arabic: "أَهْلًا وَسَهْلًا، تَفَضَّلْ.", japanese: "ようこそ、どうぞお入りください。" },
      { speaker: "👱 ゲスト", arabic: "شُكْرًا. هَلْ أَخْلَعُ حِذَائِي؟", japanese: "ありがとう。靴は脱ぎますか？" },
      { speaker: "🧑 ホスト", arabic: "نَعَمْ، عِنْدَ الْبَابِ لَوْ سَمَحْتَ.", japanese: "はい、ドアのところでお願いします。" },
      { speaker: "👱 ゲスト", arabic: "مَا شَاءَ اللهُ، بَيْتٌ جَمِيلٌ جِدًّا.", japanese: "まあ、なんて美しい家でしょう。" },
      { speaker: "🧑 ホスト", arabic: "أَنْتَ الْأَجْمَلُ. اِسْتَرِحْ هُنَا.", japanese: "あなたこそ（来てくれて嬉しいです）。ここでくつろいで。" },
      { speaker: "👱 ゲスト", arabic: "شُكْرًا لِكَرَمِكَ.", japanese: "おもてなしに感謝します。" }
    ]
  },
  {
    id: 48, title: "デーツの種類", category: "文化", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "تَمْر", meaning: "デーツ" }, { word: "نَوْع", meaning: "種類" }],
    questions: [
      { id: 481, type: "reading", text: "サウジで有名な食べ物は？", options: ["リンゴ", "デーツ", "バナナ", "ブドウ"], correctIndex: 1, explanation: "「تَمْر (デーツ)」です。" },
      { id: 482, type: "reading", text: "どの種類が一番甘い？", options: ["アジュワ", "スクカリー", "サファウィ", "ハラース"], correctIndex: 1, explanation: "「السُّكَّرِيّ (スクカリー)」です。" },
      { id: 483, type: "reading", text: "「アジュワ」はどこのデーツ？", options: ["リヤド", "メッカ", "マディーナ", "ジェッダ"], correctIndex: 2, explanation: "「الْمَدِينَة (マディーナ)」です。" },
      { id: 484, type: "vocabulary", text: "「حُلْو」の意味は？", options: ["辛い", "苦い", "甘い", "酸っぱい"], correctIndex: 2, explanation: "甘い、という意味です。" },
      { id: 485, type: "grammar", text: "「一番美味しい」", options: ["أَلَذُّ", "أَكْبَرُ", "أَصْغَرُ", "أَطْوَلُ"], correctIndex: 0, explanation: "「Aladhdhu」です。" }
    ],
    sentences: [
      { speaker: "🧑 A", arabic: "مَا هُوَ أَفْضَلُ نَوْعٍ مِنَ التَّمْرِ؟", japanese: "デーツの一番いい種類は何？" },
      { speaker: "👱 B", arabic: "يُوجَدُ أَنْوَاعٌ كَثِيرَةٌ. السُّكَّرِيُّ حُلْوٌ جِدًّا.", japanese: "種類はたくさんあるよ。スクカリーはとても甘い。" },
      { speaker: "🧑 A", arabic: "وَمَاذَا عَنِ الْعَجْوَةِ؟", japanese: "アジュワはどう？" },
      { speaker: "👱 B", arabic: "مُمْتَازَةٌ، هِيَ تَمْرُ الْمَدِينَةِ.", japanese: "素晴らしいよ、マディーナのデーツだ。" },
      { speaker: "🧑 A", arabic: "سَأَشْتَرِي السُّكَّرِيَّ.", japanese: "スクカリーを買うことにするよ。" },
      { speaker: "👱 B", arabic: "بِالْعَافِيَةِ.", japanese: "召し上がれ（健康を祈って）。" }
    ]
  },
  {
    id: 49, title: "砂漠キャンプ", category: "文化", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "صَحْرَاء", meaning: "砂漠" }, { word: "خَيْمَة", meaning: "テント" }],
    questions: [
      { id: 491, type: "reading", text: "彼らはどこへ行きますか？", options: ["海", "山", "砂漠", "公園"], correctIndex: 2, explanation: "「الْبَرّ (砂漠/野外)」です。" },
      { id: 492, type: "reading", text: "何を持っていきますか？", options: ["テントと薪", "水着", "パスポート", "パソコン"], correctIndex: 0, explanation: "「خَيْمَة وَحَطَب (テントと薪)」です。" },
      { id: 493, type: "reading", text: "いつ行きますか？", options: ["夏", "冬", "朝", "夜"], correctIndex: 1, explanation: "「الشِّتَاء (冬)」が最高だと言っています。" },
      { id: 494, type: "vocabulary", text: "「نَار」の意味は？", options: ["水", "風", "火", "土"], correctIndex: 2, explanation: "火のことです。" },
      { id: 495, type: "grammar", text: "「行きましょう」", options: ["لِنَذْهَبَ", "لِنَأْكُلَ", "لِنَنَامَ", "لِنَجْلِسَ"], correctIndex: 0, explanation: "「Li-nadhhab」です。" }
    ],
    sentences: [
      { speaker: "🧑 A", arabic: "مَا رَأْيُكَ نَخْرُجُ إِلَى الْبَرِّ (الصَّحْرَاء)؟", japanese: "砂漠（野外）に行かないか？" },
      { speaker: "👱 B", arabic: "فِكْرَةٌ رَائِعَةٌ. الْجَوُّ جَمِيلٌ.", japanese: "素晴らしい考えだ。天気がいいしね。" },
      { speaker: "🧑 A", arabic: "هَلْ عِنْدَكَ خَيْمَةٌ؟", japanese: "テントは持ってる？" },
      { speaker: "👱 B", arabic: "نَعَمْ، وَسَأُحْضِرُ الْحَطَبَ لِلنَّارِ.", japanese: "ああ。焚き火用の薪も持っていくよ。" },
      { speaker: "🧑 A", arabic: "التَّخْيِيمُ فِي الشِّتَاءِ مُمْتِعٌ.", japanese: "冬のキャンプは楽しいね。" },
      { speaker: "👱 B", arabic: "نَعَمْ، بَعِيدًا عَنْ ضَوْضَاءِ الْمَدِينَةِ.", japanese: "ああ、都会の騒音から離れてね。" }
    ]
  },
  {
    id: 50, title: "結婚式の招待", category: "文化", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "زَوَاج", meaning: "結婚" }, { word: "دَعْوَة", meaning: "招待" }],
    questions: [
      { id: 501, type: "reading", text: "これは何の招待ですか？", options: ["誕生日", "卒業式", "結婚式", "会議"], correctIndex: 2, explanation: "「حَفْل زَوَاج (結婚式)」です。" },
      { id: 502, type: "reading", text: "誰の結婚式？", options: ["私（話者）", "兄", "友人", "妹"], correctIndex: 1, explanation: "「أَخِي (私の兄/弟)」です。" },
      { id: 503, type: "reading", text: "いつですか？", options: ["金曜日", "木曜日", "土曜日", "日曜日"], correctIndex: 1, explanation: "「يَوْمَ الْخَمِيسِ (木曜日)」です。" },
      { id: 504, type: "vocabulary", text: "「مَبْرُوك」の意味は？", options: ["ごめんなさい", "おめでとう", "ありがとう", "さようなら"], correctIndex: 1, explanation: "おめでとう、です。" },
      { id: 505, type: "grammar", text: "「私は出席します」", options: ["سَأَحْضُرُ", "سَأَغِيبُ", "سَأَنَامُ", "سَأَنْسَى"], correctIndex: 0, explanation: "「Sa-aḥḍuru」です。" }
    ],
    sentences: [
      { speaker: "🧑 A", arabic: "يَسُرُّنِي دَعْوَتُكَ لِحَفْلِ زَوَاجِ أَخِي.", japanese: "兄の結婚式にあなたをご招待します。" },
      { speaker: "👱 B", arabic: "مَا شَاءَ اللهُ! مَبْرُوكٌ!", japanese: "わあ（神が望まれた）！おめでとう！" },
      { speaker: "🧑 A", arabic: "سَيَكُونُ يَوْمَ الْخَمِيسِ الْقَادِمِ.", japanese: "来週の木曜日です。" },
      { speaker: "👱 B", arabic: "أَيْنَ الْقَاعَةُ؟", japanese: "会場はどこ？" },
      { speaker: "🧑 A", arabic: "فِي قَاعَةِ الْمَمْلَكَةِ.", japanese: "キングダム・ホールです。" },
      { speaker: "👱 B", arabic: "سَأَحْضُرُ بِإِذْنِ اللهِ. شُكْرًا لَكَ.", japanese: "必ず出席するよ（神の許しがあれば）。ありがとう。" }
    ]
  },
// --- 健康・スポーツ (51) ---
{
    id: 51, title: "ジムの入会", category: "健康", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "رِيَاضَة", meaning: "スポーツ" }, { word: "اشْتِرَاك", meaning: "登録/会費" }],
    questions: [
      { id: 511, type: "reading", text: "客の目的は？", options: ["退会", "見学", "入会", "クレーム"], correctIndex: 2, explanation: "「التَّسْجِيل (登録/入会)」です。" },
      { id: 512, type: "reading", text: "期間は？", options: ["1ヶ月", "3ヶ月", "6ヶ月", "1年"], correctIndex: 1, explanation: "「ثَلَاثَةَ أَشْهُرٍ (3ヶ月)」です。" },
      { id: 513, type: "reading", text: "プールはありますか？", options: ["はい", "いいえ", "修理中", "別料金"], correctIndex: 0, explanation: "「نَعَمْ، مَوْجُودٌ (はい、あります)」です。" },
      { id: 514, type: "vocabulary", text: "「مُدَرِّب」の意味は？", options: ["選手", "審判", "コーチ/トレーナー", "観客"], correctIndex: 2, explanation: "トレーナーのことです。" },
      { id: 515, type: "grammar", text: "「私は運動します」", options: ["أُمَارِسُ الرِّيَاضَةَ", "أَشْرَبُ الْمَاءَ", "أَنَامُ", "أَجْلِسُ"], correctIndex: 0, explanation: "「Umārisu (実践する)」を使います。" }
    ],
    sentences: [
      { speaker: "🧑 客", arabic: "أُرِيدُ التَّسْجِيلَ فِي النَّادِي.", japanese: "ジム（クラブ）に入会したいのですが。" },
      { speaker: "💪 受付", arabic: "أَهْلًا. كَمْ مُدَّةُ الِاشْتِرَاكِ؟", japanese: "ようこそ。期間はどれくらいですか？" },
      { speaker: "🧑 客", arabic: "ثَلَاثَةَ أَشْهُرٍ.", japanese: "3ヶ月です。" },
      { speaker: "💪 受付", arabic: "هَلْ تُرِيدُ مُدَرِّبًا خَاصًّا؟", japanese: "パーソナルトレーナーは必要ですか？" },
      { speaker: "🧑 客", arabic: "لَا، شُكْرًا. هَلْ يُوجَدُ مَسْبَحٌ؟", japanese: "いいえ。プールはありますか？" },
      { speaker: "💪 受付", arabic: "نَعَمْ، مَوْجُودٌ فِي الطَّابِقِ الْأَرْضِيِّ.", japanese: "はい、1階にありますよ。" }
    ]
  },

  // --- 日常・挨拶 (52-54) ---
  {
    id: 52, title: "別れの挨拶", category: "日常", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "وَدَاعًا", meaning: "さようなら" }, { word: "لِقَاء", meaning: "会うこと" }],
    questions: [
      { id: 521, type: "reading", text: "彼はどこへ行きますか？", options: ["仕事", "家", "空港（旅行）", "学校"], correctIndex: 2, explanation: "「أَنَا مُسَافِرٌ (私は旅行します)」と言っています。" },
      { id: 522, type: "reading", text: "いつ戻りますか？", options: ["明日", "来週", "来月", "来年"], correctIndex: 1, explanation: "「بَعْدَ أُسْبُوعٍ (1週間後)」です。" },
      { id: 523, type: "vocabulary", text: "「رِحْلَة سَعِيدَة」の意味は？", options: ["こんにちは", "良い旅を", "おめでとう", "元気で"], correctIndex: 1, explanation: "旅立つ人への挨拶です。" },
      { id: 524, type: "reading", text: "連絡手段は？", options: ["手紙", "電話", "WhatsApp", "会う"], correctIndex: 2, explanation: "「عَلَى الْوَاتْسَاب (WhatsAppで)」です。" },
      { id: 525, type: "grammar", text: "「また会いましょう」", options: ["إِلَى اللِّقَاءِ", "مَرْحَبًا", "صَبَاحَ الْخَيْرِ", "تَصَبَّحُ عَلَى خَيْرٍ"], correctIndex: 0, explanation: "「Ilā al-liqā'」です。" }
    ],
    sentences: [
      { speaker: "🧑 A", arabic: "أَنَا مُسَافِرٌ الْيَوْمَ.", japanese: "今日、旅に出ます。" },
      { speaker: "👱 B", arabic: "إِلَى أَيْنَ؟", japanese: "どこへ？" },
      { speaker: "🧑 A", arabic: "إِلَى دُبَي. سَأَعُودُ بَعْدَ أُسْبُوعٍ.", japanese: "ドバイへ。1週間後に戻ります。" },
      { speaker: "👱 B", arabic: "رِحْلَةً سَعِيدَةً! اِبْقَ عَلَى تَوَاصُلٍ.", japanese: "良い旅を！連絡取り合おうね。" },
      { speaker: "🧑 A", arabic: "أَكِيدٌ، سَأُرَاسِلُكَ عَلَى الْوَاتْسَاب.", japanese: "もちろん、WhatsAppで連絡するよ。" },
      { speaker: "👱 B", arabic: "فِي أَمَانِ اللهِ.", japanese: "神のご加護を（さようなら）。" }
    ]
  },
  {
    id: 53, title: "写真を見せる", category: "日常", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "صُورَة", meaning: "写真" }, { word: "عَائِلَة", meaning: "家族" }],
    questions: [
      { id: 531, type: "reading", text: "何を見せていますか？", options: ["本", "写真", "動画", "地図"], correctIndex: 1, explanation: "「صُورَة عَائِلَتِي (家族の写真)」です。" },
      { id: 532, type: "reading", text: "写真に写っているのは？", options: ["父", "母", "息子", "娘"], correctIndex: 0, explanation: "「وَالِدِي (私の父)」です。" },
      { id: 533, type: "reading", text: "父の年齢は？", options: ["50歳", "60歳", "70歳", "80歳"], correctIndex: 1, explanation: "「سِتُّونَ سَنَةً (60年)」です。" },
      { id: 534, type: "vocabulary", text: "「يَبْدُو」の意味は？", options: ["見える/〜のようだ", "食べる", "走る", "寝る"], correctIndex: 0, explanation: "Seem / Look like の意味です。" },
      { id: 535, type: "grammar", text: "「これは誰？」", options: ["مَنْ هَذَا؟", "مَا هَذَا؟", "أَيْنَ هَذَا؟", "مَتَى هَذَا؟"], correctIndex: 0, explanation: "人なので「Man」です。" }
    ],
    sentences: [
      { speaker: "👱 B", arabic: "مَنْ هَذَا فِي الصُّورَةِ؟", japanese: "写真のこの人は誰？" },
      { speaker: "🧑 A", arabic: "هَذَا وَالِدِي.", japanese: "これは私の父だよ。" },
      { speaker: "👱 B", arabic: "مَا شَاءَ اللهُ. كَمْ عُمْرُهُ؟", japanese: "へえ！おいくつ？" },
      { speaker: "🧑 A", arabic: "سِتُّونَ سَنَةً.", japanese: "60歳だよ。" },
      { speaker: "👱 B", arabic: "يَبْدُو أَصْغَرَ مِنْ عُمْرِهِ.", japanese: "年齢より若く見えるね。" },
      { speaker: "🧑 A", arabic: "شُكْرًا لَكَ.", japanese: "ありがとう。" }
    ]
  },
  {
    id: 54, title: "趣味の話", category: "日常", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "هِوَايَة", meaning: "趣味" }, { word: "قِرَاءَة", meaning: "読書" }],
    questions: [
      { id: 541, type: "reading", text: "Aの趣味は？", options: ["サッカー", "読書", "料理", "旅行"], correctIndex: 1, explanation: "「الْقِرَاءَة (読書)」です。" },
      { id: 542, type: "reading", text: "Bの趣味は？", options: ["読書", "水泳", "サッカー", "映画"], correctIndex: 2, explanation: "「كُرَة الْقَدَم (サッカー)」です。" },
      { id: 543, type: "reading", text: "Bはどのチームが好き？", options: ["アル・ヒラル", "アル・ナスル", "バルセロナ", "レアル・マドリード"], correctIndex: 0, explanation: "「الْهِلَال (アル・ヒラル)」です。" },
      { id: 544, type: "vocabulary", text: "「فَرِيق」の意味は？", options: ["試合", "チーム", "選手", "ボール"], correctIndex: 1, explanation: "チームのことです。" },
      { id: 545, type: "grammar", text: "「私は好きです」", options: ["أُحِبُّ", "أَكْرَهُ", "أَعْرِفُ", "أَنْسَى"], correctIndex: 0, explanation: "「Uḥibbu」です。" }
    ],
    sentences: [
      { speaker: "🧑 A", arabic: "مَا هِيَ هِوَايَتُكَ؟", japanese: "趣味は何？" },
      { speaker: "👱 B", arabic: "أُحِبُّ كُرَةَ الْقَدَمِ. وَأَنْتَ؟", japanese: "サッカーが好きだよ。君は？" },
      { speaker: "🧑 A", arabic: "أَنَا أُفَضِّلُ الْقِرَاءَةَ.", japanese: "私は読書の方が好きだな。" },
      { speaker: "👱 B", arabic: "أَيَّ فَرِيقٍ تُشَجِّعُ؟", japanese: "どのチームを応援してる？" },
      { speaker: "🧑 A", arabic: "لَا أُتَابِعُ الرِّيَاضَةَ.", japanese: "スポーツは観ないんだ。" },
      { speaker: "👱 B", arabic: "أَنَا أُشَجِّعُ الْهِلَالَ.", japanese: "僕はアル・ヒラルを応援してるよ。" }
    ]
  },

  // --- 学校・学習 (55) ---
  {
    id: 55, title: "アラビア語学習", category: "学校", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "لُغَة", meaning: "言語" }, { word: "صَعْب", meaning: "難しい" }],
    questions: [
      { id: 551, type: "reading", text: "彼は何を勉強していますか？", options: ["英語", "アラビア語", "日本語", "フランス語"], correctIndex: 1, explanation: "「اللُّغَة الْعَرَبِيَّة」です。" },
      { id: 552, type: "reading", text: "アラビア語はどうですか？", options: ["簡単", "つまらない", "美しいが難しい", "嫌い"], correctIndex: 2, explanation: "「جَمِيلَةٌ وَلَكِنْ صَعْبَةٌ (美しいが難しい)」と言っています。" },
      { id: 553, type: "reading", text: "どこで勉強していますか？", options: ["大学", "ネット", "本", "友達と"], correctIndex: 0, explanation: "「فِي الْجَامِعَةِ (大学で)」です。" },
      { id: 554, type: "vocabulary", text: "「قَوَاعِد」の意味は？", options: ["単語", "文法", "会話", "文字"], correctIndex: 1, explanation: "文法（Rules）のことです。" },
      { id: 555, type: "grammar", text: "「少しだけ」", options: ["قَلِيلًا", "كَثِيرًا", "جِدًّا", "دَائِمًا"], correctIndex: 0, explanation: "「Qalīlan」です。" }
    ],
    sentences: [
      { speaker: "🧑 A", arabic: "هَلْ تَتَحَدَّثُ الْعَرَبِيَّةَ؟", japanese: "アラビア語を話せますか？" },
      { speaker: "👱 B", arabic: "نَعَمْ، قَلِيلًا. أَدْرُسُهَا فِي الْجَامِعَةِ.", japanese: "はい、少し。大学で勉強しています。" },
      { speaker: "🧑 A", arabic: "كَيْفَ تَجِدُهَا؟", japanese: "どう思いますか（難しいですか）？" },
      { speaker: "👱 B", arabic: "لُغَةٌ جَمِيلَةٌ وَلَكِنَّ الْقَوَاعِدَ صَعْبَةٌ.", japanese: "美しい言葉ですが、文法が難しいです。" },
      { speaker: "🧑 A", arabic: "بِالْمُمَارَسَةِ سَتَتَعَلَّمُ.", japanese: "練習すれば覚えますよ。" },
      { speaker: "👱 B", arabic: "إِنْ شَاءَ اللهُ.", japanese: "そう願っています。" }
    ]
  },

  // --- 買い物 (56) ---
  {
    id: 56, title: "靴を買う", category: "買い物", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "حِذَاء", meaning: "靴" }, { word: "لَوْن", meaning: "色" }],
    questions: [
      { id: 561, type: "reading", text: "客が探しているのは？", options: ["服", "靴", "カバン", "帽子"], correctIndex: 1, explanation: "「حِذَاء (靴)」です。" },
      { id: 562, type: "reading", text: "何用ですか？", options: ["仕事", "スポーツ", "パーティー", "家"], correctIndex: 1, explanation: "「لِلرِّيَاضَةِ (スポーツ用)」です。" },
      { id: 563, type: "reading", text: "色は？", options: ["赤", "黒", "白", "青"], correctIndex: 1, explanation: "「أَسْوَد (黒)」です。" },
      { id: 564, type: "reading", text: "サイズは？", options: ["40", "41", "42", "43"], correctIndex: 2, explanation: "「اِثْنَانِ وَأَرْبَعُونَ (42)」です。" },
      { id: 565, type: "vocabulary", text: "「مُرِيح」の意味は？", options: ["高い", "安い", "快適な/楽な", "きつい"], correctIndex: 2, explanation: "Comfortable（快適）という意味です。" }
    ],
    sentences: [
      { speaker: "🧑 客", arabic: "أُرِيدُ حِذَاءً لِلرِّيَاضَةِ.", japanese: "スポーツ用の靴が欲しいのですが。" },
      { speaker: "👨‍💼 店員", arabic: "أَيُّ لَوْنٍ تُفَضِّلُ؟", japanese: "何色がいいですか？" },
      { speaker: "🧑 客", arabic: "أَسْوَدَ، مَقَاس 42.", japanese: "黒で、サイズは42です。" },
      { speaker: "👨‍💼 店員", arabic: "جَرِّبْ هَذَا. إِنَّهُ مُرِيحٌ جِدًّا.", japanese: "これを試してください。とても快適ですよ。" },
      { speaker: "🧑 客", arabic: "جَيِّدٌ. بِكَمْ هُوَ؟", japanese: "いいですね。いくらですか？" },
      { speaker: "👨‍💼 店員", arabic: "250 رِيَالًا.", japanese: "250リヤルです。" }
    ]
  },

  // --- 旅行・移動 (57) ---
  {
    id: 57, title: "道を聞く2", category: "旅行", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "أَقْرَب", meaning: "一番近い" }, { word: "مَسَافَة", meaning: "距離" }],
    questions: [
      { id: 571, type: "reading", text: "客は何を探していますか？", options: ["ホテル", "病院", "薬局", "レストラン"], correctIndex: 2, explanation: "「أَقْرَب صَيْدَلِيَّة (一番近い薬局)」です。" },
      { id: 572, type: "reading", text: "場所はどこですか？", options: ["ホテルの後ろ", "モスクの隣", "駅の前", "市場の中"], correctIndex: 1, explanation: "「بِجَانِبِ الْمَسْجِدِ (モスクの横)」です。" },
      { id: 573, type: "reading", text: "歩いて行けますか？", options: ["はい", "いいえ", "タクシーが必要", "バスが必要"], correctIndex: 0, explanation: "「قَرِيبَةٌ جِدًّا (とても近い)」ので歩けます。" },
      { id: 574, type: "vocabulary", text: "「شَارِع」の意味は？", options: ["家", "道/通り", "店", "車"], correctIndex: 1, explanation: "ストリートのことです。" },
      { id: 575, type: "grammar", text: "「右」", options: ["يَمِين", "يَسَار", "فَوْق", "تَحْت"], correctIndex: 0, explanation: "「Yamīn」は右です。" }
    ],
    sentences: [
      { speaker: "🧑 客", arabic: "عَفْوًا، أَيْنَ أَقْرَبُ صَيْدَلِيَّةٍ؟", japanese: "すみません、一番近い薬局はどこですか？" },
      { speaker: "👳 通行人", arabic: "فِي نِهَايَةِ هَذَا الشَّارِعِ.", japanese: "この通りの突き当たりです。" },
      { speaker: "🧑 客", arabic: "هَلْ هِيَ بَعِيدَةٌ؟", japanese: "遠いですか？" },
      { speaker: "👳 通行人", arabic: "لَا، هِيَ بِجَانِبِ الْمَسْجِدِ الْكَبِيرِ.", japanese: "いいえ、大きなモスクの隣ですよ。" },
      { speaker: "🧑 客", arabic: "شُكْرًا جَزِيلًا.", japanese: "ありがとうございます。" },
      { speaker: "👳 通行人", arabic: "عَفْوًا.", japanese: "どういたしまして。" }
    ]
  },

  // --- 日常・天気 (58) ---
  {
    id: 58, title: "砂嵐", category: "日常", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "غُبَار", meaning: "埃/砂埃" }, { word: "عَاصِفَة", meaning: "嵐" }],
    questions: [
      { id: 581, type: "reading", text: "外の天気はどうですか？", options: ["雨", "晴れ", "砂嵐", "雪"], correctIndex: 2, explanation: "「غُبَار كَثِيف (濃い砂埃)」と言っています。" },
      { id: 582, type: "reading", text: "どうするべきですか？", options: ["出かける", "窓を閉める", "泳ぐ", "窓を開ける"], correctIndex: 1, explanation: "「أَغْلِقِ النَّوَافِذَ (窓を閉めて)」と言っています。" },
      { id: 583, type: "reading", text: "運転はどうですか？", options: ["安全", "危険", "楽しい", "速い"], correctIndex: 1, explanation: "「خَطِيرَة (危険)」です。" },
      { id: 584, type: "vocabulary", text: "「رُؤْيَة」の意味は？", options: ["音", "視界/見ること", "味", "匂い"], correctIndex: 1, explanation: "Vision/Sight のことです。" },
      { id: 585, type: "grammar", text: "「気を付けて」", options: ["اِنْتَبِهْ", "اِسْرَعْ", "نَمْ", "اِجْلِسْ"], correctIndex: 0, explanation: "「Intabih (注意しろ)」です。" }
    ],
    sentences: [
      { speaker: "🧑 A", arabic: "الْجَوُّ تَغَيَّرَ فَجْأَةً.", japanese: "急に天気が変わったね。" },
      { speaker: "👱 B", arabic: "نَعَمْ، يُوجَدُ غُبَارٌ كَثِيفٌ فِي الْخَارِجِ.", japanese: "ああ、外はすごい砂埃だ。" },
      { speaker: "🧑 A", arabic: "يَجِبُ أَنْ نُغْلِقَ النَّوَافِذَ.", japanese: "窓を閉めないと。" },
      { speaker: "👱 B", arabic: "صَحِيحٌ. الرُّؤْيَةُ سَيِّئَةٌ جِدًّا.", japanese: "その通りだ。視界がとても悪い。" },
      { speaker: "🧑 A", arabic: "الْقِيَادَةُ الْآنَ خَطِيرَةٌ.", japanese: "今運転するのは危険だね。" },
      { speaker: "👱 B", arabic: "لِنَبْقَ فِي الْبَيْتِ.", japanese: "家にいよう。" }
    ]
  },

  // --- 文化・宗教 (59) ---
  {
    id: 59, title: "お祈りの時間", category: "文化", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "صَلَاة", meaning: "祈り" }, { word: "أَذَان", meaning: "アザーン" }],
    questions: [
      { id: 591, type: "reading", text: "何が聞こえましたか？", options: ["音楽", "アザーン", "サイレン", "声"], correctIndex: 1, explanation: "「سَمِعْتُ الْأَذَانَ (アザーンを聞いた)」です。" },
      { id: 592, type: "reading", text: "どの祈りの時間ですか？", options: ["夜明け", "昼（ズフル）", "午後（アスル）", "日没"], correctIndex: 1, explanation: "「صَلَاةُ الظُّهْرِ (昼の礼拝)」です。" },
      { id: 593, type: "reading", text: "彼らはどこへ行きますか？", options: ["家", "市場", "モスク", "会社"], correctIndex: 2, explanation: "「الْمَسْجِد」です。" },
      { id: 594, type: "vocabulary", text: "「وُضُوء」の意味は？", options: ["食事", "浄め（手洗い）", "睡眠", "読書"], correctIndex: 1, explanation: "礼拝前の浄めのことです。" },
      { id: 595, type: "grammar", text: "「行こう」", options: ["هَيَّا بِنَا", "تَعَالَ", "اِمْشِ", "قِفْ"], correctIndex: 0, explanation: "「Hayyā binā (Let's go)」です。" }
    ],
    sentences: [
      { speaker: "🧑 A", arabic: "هَلْ سَمِعْتَ الْأَذَانَ؟", japanese: "アザーンが聞こえた？" },
      { speaker: "👱 B", arabic: "نَعَمْ، إِنَّهَا صَلَاةُ الظُّهْرِ.", japanese: "うん、ズフル（昼）の礼拝だね。" },
      { speaker: "🧑 A", arabic: "هَلْ تَذْهَبُ مَعِي إِلَى الْمَسْجِدِ؟", japanese: "一緒にモスクに行く？" },
      { speaker: "👱 B", arabic: "بِالتَّأْكِيدِ. لَكِنْ أَحْتَاجُ لِلْوُضُوءِ أَوَّلًا.", japanese: "もちろん。でも先にウドゥー（浄め）をしないと。" },
      { speaker: "🧑 A", arabic: "حَسَنًا، أَنْتَظِرُكَ عِنْدَ الْبَابِ.", japanese: "わかった、ドアのところで待ってるよ。" },
      { speaker: "👱 B", arabic: "شُكْرًا. هَيَّا بِنَا.", japanese: "ありがとう。行こう。" }
    ]
  },

  // --- 日常・感謝 (60) ---
  {
    id: 60, title: "感謝を伝える", category: "日常", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "شُكْرًا", meaning: "ありがとう" }, { word: "مُسَاعَدَة", meaning: "助け" }],
    questions: [
      { id: 601, type: "reading", text: "Aさんはなぜ感謝していますか？", options: ["お金をくれた", "手伝ってくれた", "教えてくれた", "遊んでくれた"], correctIndex: 1, explanation: "「عَلَى مُسَاعَدَتِكَ (あなたの助けに対して)」感謝しています。" },
      { id: 602, type: "reading", text: "Bさんの返事は？", options: ["いいえ", "どういたしまして", "さようなら", "知らない"], correctIndex: 1, explanation: "「عَفْوًا (どういたしまして)」です。" },
      { id: 603, type: "reading", text: "「ワージブ」とはどういう意味で使われていますか？", options: ["宿題", "義務（当たり前のこと）", "仕事", "お金"], correctIndex: 1, explanation: "「هَذَا وَاجِبِي (これは私の義務です＝お礼には及びません)」という謙遜表現です。" },
      { id: 604, type: "vocabulary", text: "「صَدِيق」の意味は？", options: ["敵", "友人", "家族", "先生"], correctIndex: 1, explanation: "友人です。" },
      { id: 605, type: "grammar", text: "「ありがとう」", options: ["شُكْرًا", "عَفْوًا", "أَهْلًا", "مَرْحَبًا"], correctIndex: 0, explanation: "基本の感謝です。" }
    ],
    sentences: [
      { speaker: "🧑 A", arabic: "شُكْرًا جَزِيلًا لَكَ.", japanese: "本当にありがとうございました。" },
      { speaker: "👱 B", arabic: "عَلَى مَاذَا؟", japanese: "何に対して？" },
      { speaker: "🧑 A", arabic: "عَلَى مُسَاعَدَتِكَ لِي الْيَوْمَ.", japanese: "今日助けてくれたことに対してだよ。" },
      { speaker: "👱 B", arabic: "عَفْوًا، هَذَا وَاجِبِي يَا صَدِيقِي.", japanese: "どういたしまして、当たり前のことだよ（義務だよ）、友よ。" },
      { speaker: "🧑 A", arabic: "أَنْتَ شَخْصٌ طَيِّبٌ.", japanese: "君はいい人だね。" },
      { speaker: "👱 B", arabic: "وَأَنْتَ كَذَلِكَ.", japanese: "君もね。" }
    ]
  },
  
  // --- 病院の予約変更 (Health) ---
  {
    id: 61, title: "病院の予約変更", category: "健康", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "تَأْجِيل", meaning: "延期" }, { word: "مَوْعِد", meaning: "予約" }],
    questions: [
      { id: 611, type: "reading", text: "電話の目的は？", options: ["予約", "キャンセル", "変更", "相談"], correctIndex: 2, explanation: "「تَغْيِير الْمَوْعِد (予約変更)」です。" },
      { id: 612, type: "reading", text: "いつに変更したい？", options: ["明日", "明後日", "来週", "来月"], correctIndex: 0, explanation: "「غَدًا (明日)」です。" },
      { id: 613, type: "reading", text: "予約可能な時間は？", options: ["9時", "10時", "11時", "12時"], correctIndex: 1, explanation: "「الْعَاشِرَة (10時)」です。" },
      { id: 614, type: "vocabulary", text: "「مُنَاسِب」の意味は？", options: ["忙しい", "適切な/都合が良い", "悪い", "遠い"], correctIndex: 1, explanation: "都合が良い、という意味です。" },
      { id: 615, type: "grammar", text: "「私はできません」", options: ["لَا أَسْتَطِيعُ", "أَسْتَطِيعُ", "فَعَلْتُ", "قُلْتُ"], correctIndex: 0, explanation: "「Lā astaṭī'u」です。" }
    ],
    sentences: [
      { speaker: "📞 患者", arabic: "أُرِيدُ تَغْيِيرَ مَوْعِدِي الْيَوْمَ.", japanese: "今日の予約を変更したいのですが。" },
      { speaker: "👩‍⚕️ 受付", arabic: "لِمَاذَا؟", japanese: "どうされましたか？" },
      { speaker: "📞 患者", arabic: "لَا أَسْتَطِيعُ الْحُضُورَ.", japanese: "行くことができません。" },
      { speaker: "👩‍⚕️ 受付", arabic: "هَلْ غَدًا السَّاعَةُ 10 مُنَاسِبٌ؟", japanese: "明日の10時はご都合よろしいですか？" },
      { speaker: "📞 患者", arabic: "نَعَمْ، مُنَاسِبٌ جِدًّا.", japanese: "はい、大丈夫です。" },
      { speaker: "👩‍⚕️ 受付", arabic: "تَمَّ التَّأْجِيلُ.", japanese: "延期しました。" }
    ]
  },
  
  // --- カフェで勉強 (Daily) ---
  {
    id: 62, title: "カフェで勉強", category: "日常", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "هُدُوء", meaning: "静けさ" }, { word: "دِرَاسَة", meaning: "勉強" }],
    questions: [
      { id: 621, type: "reading", text: "彼らは何をしに来ましたか？", options: ["食事", "おしゃべり", "勉強", "睡眠"], correctIndex: 2, explanation: "「لِلدِّرَاسَة (勉強のため)」です。" },
      { id: 622, type: "reading", text: "カフェの雰囲気は？", options: ["うるさい", "静か", "混んでいる", "暗い"], correctIndex: 1, explanation: "「هَادِئ (静か)」です。" },
      { id: 623, type: "reading", text: "何を飲みますか？", options: ["水", "コーヒー", "お茶", "ジュース"], correctIndex: 1, explanation: "「قَهْوَة」です。" },
      { id: 624, type: "vocabulary", text: "「تَرْكِيز」の意味は？", options: ["集中", "休憩", "遊び", "散歩"], correctIndex: 0, explanation: "集中のことです。" },
      { id: 625, type: "grammar", text: "「静かに」", options: ["بِهُدُوءٍ", "بِسُرْعَةٍ", "بِصَوْتٍ عَالٍ", "بِقُوَّةٍ"], correctIndex: 0, explanation: "「Bi-hudū'」です。" }
    ],
    sentences: [
      { speaker: "🧑 A", arabic: "هَذَا الْمَقْهَى هَادِئٌ.", japanese: "このカフェは静かだね。" },
      { speaker: "👱 B", arabic: "نَعَمْ، مَكَانٌ جَيِّدٌ لِلدِّرَاسَةِ.", japanese: "うん、勉強にいい場所だ。" },
      { speaker: "🧑 A", arabic: "سَأَطْلُبُ قَهْوَةً لِلتَّرْكِيزِ.", japanese: "集中するためにコーヒーを頼むよ。" },
      { speaker: "👱 B", arabic: "وَأَنَا أَيْضًا.", japanese: "僕も。" },
      { speaker: "🧑 A", arabic: "هَلْ مَعَكَ الْكِتَابُ؟", japanese: "本は持ってる？" },
      { speaker: "👱 B", arabic: "طَبْعًا.", japanese: "もちろん。" }
    ]
  },
  
  // --- 野菜市場 (Shopping) ---
  {
    id: 63, title: "野菜市場", category: "買い物", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "طَازَج", meaning: "新鮮な" }, { word: "خُضَار", meaning: "野菜" }],
    questions: [
      { id: 631, type: "reading", text: "何を買いに来ましたか？", options: ["肉", "野菜", "パン", "魚"], correctIndex: 1, explanation: "「طَمَاطِم وَخِيَار (トマトときゅうり)」などの野菜です。" },
      { id: 632, type: "reading", text: "野菜の状態は？", options: ["古い", "新鮮", "腐っている", "冷凍"], correctIndex: 1, explanation: "「طَازَجَة (新鮮)」です。" },
      { id: 633, type: "reading", text: "トマト1キロいくら？", options: ["2リヤル", "5リヤル", "10リヤル", "20リヤル"], correctIndex: 1, explanation: "「خَمْسَةُ رِيَالَاتٍ」です。" },
      { id: 634, type: "vocabulary", text: "「كِيلُو」の意味は？", options: ["キロ", "個", "箱", "束"], correctIndex: 0, explanation: "キログラムのことです。" },
      { id: 635, type: "grammar", text: "「ください」", options: ["أَعْطِنِي", "خُذْ", "اِمْشِ", "نَمْ"], correctIndex: 0, explanation: "「A'ṭinī (私にくれ)」です。" }
    ],
    sentences: [
      { speaker: "🧑 客", arabic: "بِكَمْ كِيلُو الطَّمَاطِمِ؟", japanese: "トマト1キロいくら？" },
      { speaker: "👳 店主", arabic: "بِخَمْسَةِ رِيَالَاتٍ.", japanese: "5リヤルだよ。" },
      { speaker: "🧑 客", arabic: "هَلْ هِيَ طَازَجَةٌ؟", japanese: "新鮮かい？" },
      { speaker: "👳 店主", arabic: "نَعَمْ، وَصَلَتِ الْيَوْمَ.", japanese: "ああ、今日届いたばかりだ。" },
      { speaker: "🧑 客", arabic: "أَعْطِنِي كِيلُو طَمَاطِمَ وَكِيلُو خِيَارًا.", japanese: "トマト1キロときゅうり1キロをくれ。" },
      { speaker: "👳 店主", arabic: "تَفَضَّلْ.", japanese: "はいよ。" }
    ]
  },
  
  // --- タクシーの値段交渉 (Travel) ---
  {
    id: 64, title: "タクシーの値段交渉", category: "交通", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "أُجْرَة", meaning: "運賃" }, { word: "اتِّفَاق", meaning: "合意" }],
    questions: [
      { id: 641, type: "reading", text: "メーターを使いますか？", options: ["はい", "いいえ（交渉）", "壊れている", "ない"], correctIndex: 1, explanation: "「لَا، كَمْ تَأْخُذُ؟ (いいえ、いくら取りますか？)」と交渉しています。" },
      { id: 642, type: "reading", text: "運転手の最初の提示額は？", options: ["20", "30", "40", "50"], correctIndex: 3, explanation: "「خَمْسُونَ (50)」です。" },
      { id: 643, type: "reading", text: "客の希望額は？", options: ["20", "30", "40", "50"], correctIndex: 1, explanation: "「ثَلَاثُونَ (30)」です。" },
      { id: 644, type: "vocabulary", text: "「مَشْوَار」の意味は？", options: ["道のり/用事", "車", "ガソリン", "タイヤ"], correctIndex: 0, explanation: "行程、道のりのことです。" },
      { id: 645, type: "grammar", text: "「高いです」", options: ["غَالٍ", "رَخِيصٌ", "جَيِّدٌ", "قَرِيبٌ"], correctIndex: 0, explanation: "「Ghālin」です。" }
    ],
    sentences: [
      { speaker: "🧑 客", arabic: "إِلَى السُّوقِ. هَلْ تُشَغِّلُ الْعَدَّادَ؟", japanese: "市場まで。メーターを使いますか？" },
      { speaker: "🚕 運転手", arabic: "لَا، الْعَدَّادُ مُعَطَّلٌ. 50 رِيَالًا.", japanese: "いいえ、壊れてます。50リヤルで。" },
      { speaker: "🧑 客", arabic: "50 كَثِيرٌ! الْمَشْوَارُ قَرِيبٌ.", japanese: "50は高いよ！近いのに。" },
      { speaker: "🚕 運転手", arabic: "كَمْ تَدْفَعُ؟", japanese: "いくらなら払う？" },
      { speaker: "🧑 客", arabic: "30 رِيَالًا فَقَطْ.", japanese: "30リヤルだけだ。" },
      { speaker: "🚕 運転手", arabic: "اِرْكَبْ، تَوَكَّلْنَا عَلَى اللهِ.", japanese: "乗りな。神に任せて行こう（OK）。" }
    ]
  },
  
  // --- 友達を家に招待 (Daily) ---
  {
    id: 65, title: "友達を家に招待", category: "日常", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "عَشَاء", meaning: "夕食" }, { word: "مَنْزِل", meaning: "家" }],
    questions: [
      { id: 651, type: "reading", text: "何の招待ですか？", options: ["映画", "夕食", "サッカー", "勉強"], correctIndex: 1, explanation: "「عَشَاء (夕食)」です。" },
      { id: 652, type: "reading", text: "いつですか？", options: ["今日", "明日", "週末", "来週"], correctIndex: 1, explanation: "「غَدًا (明日)」です。" },
      { id: 653, type: "reading", text: "客は何を持ってきますか？", options: ["何もいらない", "ケーキ", "飲み物", "花"], correctIndex: 1, explanation: "「سَأُحْضِرُ الْحَلْوَى (お菓子/ケーキを持っていく)」と言っています。" },
      { id: 654, type: "vocabulary", text: "「طَبَخَ」の意味は？", options: ["食べた", "料理した", "飲んだ", "買った"], correctIndex: 1, explanation: "料理する、です。" },
      { id: 655, type: "grammar", text: "「待っています」", options: ["أَنْتَظِرُكَ", "أَذْهَبُ", "أَنَامُ", "أَكُلُ"], correctIndex: 0, explanation: "「Antaẓiru-ka」です。" }
    ],
    sentences: [
      { speaker: "🧑 A", arabic: "أَدْعُوكَ لِلْعَشَاءِ فِي مَنْزِلِي غَدًا.", japanese: "明日、うちの夕食に招待するよ。" },
      { speaker: "👱 B", arabic: "شُكْرًا! مَا الْمُنَاسَبَةُ؟", japanese: "ありがとう！何かのお祝い？" },
      { speaker: "🧑 A", arabic: "لَا، فَقَطْ لِنَجْتَمِعَ.", japanese: "いや、ただ集まりたくて。" },
      { speaker: "👱 B", arabic: "مَاذَا سَتَطْبُخُ؟", japanese: "何を作るの？" },
      { speaker: "🧑 A", arabic: "كَبْسَة دَجَاجٍ.", japanese: "チキンカブサだよ。" },
      { speaker: "👱 B", arabic: "سَأُحْضِرُ الْحَلْوَى مَعِي.", japanese: "僕はデザートを持っていくよ。" }
    ]
  },
  
  // --- サッカーの試合 (Daily) ---
  {
    id: 66, title: "サッカーの試合", category: "日常", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "مُبَارَاة", meaning: "試合" }, { word: "فَازَ", meaning: "勝った" }],
    questions: [
      { id: 661, type: "reading", text: "昨日は何がありましたか？", options: ["試験", "試合", "パーティー", "会議"], correctIndex: 1, explanation: "「الْمُبَارَاة (試合)」です。" },
      { id: 662, type: "reading", text: "どのチームが勝ちましたか？", options: ["ヒラル", "ナスル", "イテハド", "アハリ"], correctIndex: 0, explanation: "「فَازَ الْهِلَالُ」です。" },
      { id: 663, type: "reading", text: "スコアは？", options: ["1-0", "2-1", "3-0", "2-2"], correctIndex: 1, explanation: "「اِثْنَيْنِ لِوَاحِدٍ (2対1)」です。" },
      { id: 664, type: "vocabulary", text: "「هَدَف」の意味は？", options: ["ゴール", "ボール", "審判", "笛"], correctIndex: 0, explanation: "ゴール、得点のことです。" },
      { id: 665, type: "grammar", text: "「見ましたか？」", options: ["هَلْ شَاهَدْتَ؟", "هَلْ لَعِبْتَ؟", "هَلْ ذَهَبْتَ؟", "هَلْ أَكَلْتَ؟"], correctIndex: 0, explanation: "「Shāhadta (観戦した)」です。" }
    ],
    sentences: [
      { speaker: "🧑 A", arabic: "هَلْ شَاهَدْتَ الْمُبَارَاةَ أَمْسِ؟", japanese: "昨日の試合見た？" },
      { speaker: "👱 B", arabic: "نَعَمْ، كَانَتْ مُثِيرَةً.", japanese: "うん、エキサイティングだったね。" },
      { speaker: "🧑 A", arabic: "مَنْ فَازَ؟", japanese: "どっちが勝った？" },
      { speaker: "👱 B", arabic: "فَازَ الْهِلَالُ عَلَى النَّصْرِ.", japanese: "ヒラルがナスルに勝ったよ。" },
      { speaker: "🧑 A", arabic: "كَمِ النَّتِيجَةُ؟", japanese: "スコアは？" },
      { speaker: "👱 B", arabic: "2-1 (اِثْنَيْنِ لِوَاحِدٍ).", japanese: "2対1だ。" }
    ]
  },
  
  // --- 結婚のお祝い (Culture) ---
  {
    id: 67, title: "結婚のお祝い", category: "文化", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "زَوَاج", meaning: "結婚" }, { word: "حَفْلَة", meaning: "パーティー" }],
    questions: [
      { id: 671, type: "reading", text: "友人はどうなりましたか？", options: ["病気になった", "結婚した", "旅行に行った", "仕事を辞めた"], correctIndex: 1, explanation: "「تَزَوَّجْتُ (結婚しました)」と言っています。" },
      { id: 672, type: "reading", text: "お祝いの言葉は？", options: ["ありがとう", "ごめんなさい", "おめでとう（千の祝福）", "さようなら"], correctIndex: 2, explanation: "「أَلْفُ مَبْرُوكٍ」です。" },
      { id: 673, type: "reading", text: "パーティーはいつですか？", options: ["昨日だった", "明日", "来週", "来月"], correctIndex: 2, explanation: "「الْأُسْبُوعَ الْقَادِمَ」です。" },
      { id: 674, type: "vocabulary", text: "「حَيَاة」の意味は？", options: ["死", "人生/生活", "家", "車"], correctIndex: 1, explanation: "人生、生活のことです。" },
      { id: 675, type: "grammar", text: "「私は願う」", options: ["أَتَمَنَّى", "أَرَى", "أَسْمَعُ", "أَقُولُ"], correctIndex: 0, explanation: "「Atamannā」です。" }
    ],
    sentences: [
      { speaker: "🧑 A", arabic: "سَمِعْتُ أَنَّكَ تَزَوَّجْتَ.", japanese: "結婚したって聞いたよ。" },
      { speaker: "👱 B", arabic: "نَعَمْ، الْحَمْدُ لِلَّهِ.", japanese: "うん、おかげさまで。" },
      { speaker: "🧑 A", arabic: "أَلْفُ مَبْرُوكٍ! أَتَمَنَّى لَكَ حَيَاةً سَعِيدَةً.", japanese: "おめでとう！幸せな生活を祈ってるよ。" },
      { speaker: "👱 B", arabic: "بَارَكَ اللهُ فِيكَ.", japanese: "神の祝福がありますように（ありがとう）。" },
      { speaker: "🧑 A", arabic: "مَتَى الْحَفْلَةُ؟", japanese: "パーティーはいつ？" },
      { speaker: "👱 B", arabic: "الْأُسْبُوعَ الْقَادِمَ.", japanese: "来週だよ。" }
    ]
  },
  
  // --- 迷子の子供 (Emergency) ---
  {
    id: 68, title: "迷子の子供", category: "緊急", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "طِفْل", meaning: "子供" }, { word: "أُمّ", meaning: "母" }],
    questions: [
      { id: 681, type: "reading", text: "子供はどうしていますか？", options: ["笑っている", "泣いている", "寝ている", "走っている"], correctIndex: 1, explanation: "「يَبْكِي (泣いている)」です。" },
      { id: 682, type: "reading", text: "どうしたのですか？", options: ["お腹が空いた", "転んだ", "お母さんを見失った", "おもちゃが欲しい"], correctIndex: 2, explanation: "「أَضَاعَ أُمَّهُ (母をなくした/見失った)」です。" },
      { id: 683, type: "reading", text: "子供の名前は？", options: ["アハマド", "オマル", "ハリド", "ムハンマド"], correctIndex: 0, explanation: "「أَحْمَد」です。" },
      { id: 684, type: "vocabulary", text: "「مَرْكَز」の意味は？", options: ["家", "学校", "センター/中心", "店"], correctIndex: 2, explanation: "センター（案内所）のことです。" },
      { id: 685, type: "grammar", text: "「探しましょう」", options: ["لِنَبْحَثَ", "لِنَذْهَبَ", "لِنَأْكُلَ", "لِنَلْعَبَ"], correctIndex: 0, explanation: "「Li-nabḥatha」です。" }
    ],
    sentences: [
      { speaker: "🧑 A", arabic: "يُوجَدُ طِفْلٌ يَبْكِي هُنَاكَ.", japanese: "あそこで子供が泣いている。" },
      { speaker: "👱 B", arabic: "يَبْدُو أَنَّهُ أَضَاعَ أُمَّهُ.", japanese: "お母さんとはぐれたみたいだ。" },
      { speaker: "🧑 A", arabic: "يَا صَغِيرِي، مَا اسْمُكَ؟", japanese: "坊や、名前は？" },
      { speaker: "👶 子供", arabic: "أَحْمَد...", japanese: "アハマド..." },
      { speaker: "👱 B", arabic: "لَا تَخَفْ. لِنَذْهَبَ إِلَى مَرْكَزِ الْأَمْنِ.", japanese: "怖がらないで。警備センターに行こう。" },
      { speaker: "🧑 A", arabic: "سَنَجِدُ أُمَّكَ إِنْ شَاءَ اللهُ.", japanese: "きっとお母さんは見つかるよ。" }
    ]
  },
  
  // --- ホテルのクレーム (Travel) ---
  {
    id: 69, title: "騒音のクレーム", category: "旅行", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "إِزْعَاج", meaning: "騒音/迷惑" }, { word: "نَوْم", meaning: "睡眠" }],
    questions: [
      { id: 691, type: "reading", text: "客の問題は？", options: ["暑い", "寒い", "うるさい", "臭い"], correctIndex: 2, explanation: "「إِزْعَاج (騒音)」です。" },
      { id: 692, type: "reading", text: "音の出処は？", options: ["外", "隣の部屋", "廊下", "上"], correctIndex: 1, explanation: "「الْغُرْفَة الْمُجَاوِرَة (隣の部屋)」です。" },
      { id: 693, type: "reading", text: "客は何ができませんか？", options: ["仕事", "食事", "睡眠", "シャワー"], correctIndex: 2, explanation: "「لَا أَسْتَطِيعُ النَّوْمَ (眠れない)」と言っています。" },
      { id: 694, type: "vocabulary", text: "「صَوْت」の意味は？", options: ["光", "音/声", "匂い", "味"], correctIndex: 1, explanation: "音、声のことです。" },
      { id: 695, type: "grammar", text: "「話します」", options: ["سَأَتَحَدَّثُ", "أَسْمَعُ", "أَرَى", "أَكْتُبُ"], correctIndex: 0, explanation: "「Sa-ataḥaddathu」です。" }
    ],
    sentences: [
      { speaker: "📞 客", arabic: "يُوجَدُ إِزْعَاجٌ شَدِيدٌ.", japanese: "騒音がひどいんです。" },
      { speaker: "👨‍💼 受付", arabic: "مِنْ أَيْنَ الصَّوْتُ؟", japanese: "音はどこからですか？" },
      { speaker: "🧑 客", arabic: "مِنَ الْغُرْفَةِ الْمُجَاوِرَةِ. صَوْتُ مُوسِيقَى.", japanese: "隣の部屋からです。音楽の音が。" },
      { speaker: "👨‍💼 受付", arabic: "أَنَا آسِفٌ جِدًّا.", japanese: "大変申し訳ありません。" },
      { speaker: "🧑 客", arabic: "لَا أَسْتَطِيعُ النَّوْمَ.", japanese: "眠れないんですよ。" },
      { speaker: "👨‍💼 受付", arabic: "سَأَتَحَدَّثُ مَعَهُمْ حَالًا.", japanese: "すぐに彼らと話をします。" }
    ]
  },
  
  // --- レンタカー返却 (Travel) ---
  {
    id: 70, title: "レンタカー返却", category: "交通", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "إِرْجَاع", meaning: "返却" }, { word: "فَحْص", meaning: "検査/チェック" }],
    questions: [
      { id: 701, type: "reading", text: "客は何をしに来ましたか？", options: ["借りる", "返す", "修理する", "洗う"], correctIndex: 1, explanation: "「إِرْجَاع السَّيَّارَة (車を返す)」です。" },
      { id: 702, type: "reading", text: "ガソリンは？", options: ["空", "半分", "満タン", "少し"], correctIndex: 2, explanation: "「مُمْتَلِئ (満タン)」です。" },
      { id: 703, type: "reading", text: "車の状態は？", options: ["傷がある", "汚い", "問題ない", "パンクした"], correctIndex: 2, explanation: "「لَا يُوجَدُ مَشَاكِل (問題ない)」です。" },
      { id: 704, type: "vocabulary", text: "「مِفْتَاح」の意味は？", options: ["ハンドル", "鍵", "ドア", "窓"], correctIndex: 1, explanation: "鍵です。" },
      { id: 705, type: "grammar", text: "「チェックします」", options: ["سَأَفْحَصُ", "أَغْسِلُ", "أَرْكَبُ", "أَبِيعُ"], correctIndex: 0, explanation: "「Sa-afḥaṣu」です。" }
    ],
    sentences: [
      { speaker: "🧑 客", arabic: "أُرِيدُ إِرْجَاعَ السَّيَّارَةِ.", japanese: "車を返却したいのですが。" },
      { speaker: "👨‍💼 係員", arabic: "هَلِ الْخَزَّانُ مُمْتَلِئٌ؟", japanese: "タンクは満タンですか？" },
      { speaker: "🧑 客", arabic: "نَعَمْ، مُمْتَلِئٌ.", japanese: "はい、満タンです。" },
      { speaker: "👨‍💼 係員", arabic: "هَلْ حَدَثَ أَيُّ حَادِثٍ؟", japanese: "何か事故はありましたか？" },
      { speaker: "🧑 客", arabic: "لَا، كُلُّ شَيْءٍ سَلِيمٌ.", japanese: "いいえ、全て無事です。" },
      { speaker: "👨‍💼 係員", arabic: "هَاتِ الْمِفْتَاحَ لِأَفْحَصَهَا.", japanese: "チェックしますので鍵をください。" }
    ]
  },
// --- トラブル・日常 (71-74) ---
{
    id: 71, title: "飛行機の遅延", category: "旅行", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "تَأْخِير", meaning: "遅延" }, { word: "رِحْلَة", meaning: "フライト/旅" }],
    questions: [
      { id: 711, type: "reading", text: "フライトはどうなりましたか？", options: ["キャンセルされた", "遅れた", "早まった", "定刻通り"], correctIndex: 1, explanation: "「تَأَخَّرَتْ (遅れた)」です。" },
      { id: 712, type: "reading", text: "どれくらい遅れますか？", options: ["1時間", "2時間", "3時間", "半日"], correctIndex: 1, explanation: "「سَاعَتَيْنِ (2時間)」です。" },
      { id: 713, type: "reading", text: "理由は？", options: ["天気", "技術的な問題", "ストライキ", "パイロットの病気"], correctIndex: 1, explanation: "「عُطْل فَنِّي (技術的な故障/問題)」です。" },
      { id: 714, type: "vocabulary", text: "「إِقْلَاع」の意味は？", options: ["到着", "離陸", "予約", "着陸"], correctIndex: 1, explanation: "離陸のことです。" },
      { id: 715, type: "grammar", text: "「待ちます」", options: ["سَأَنْتَظِرُ", "أَذْهَبُ", "أَرْكَبُ", "أَمْشِي"], correctIndex: 0, explanation: "「Sa-antaẓiru」です。" }
    ],
    sentences: [
      { speaker: "🧑 客", arabic: "مَتَى سَتُقْلِعُ الطَّائِرَةُ؟", japanese: "飛行機はいつ離陸しますか？" },
      { speaker: "👩‍✈️ 係員", arabic: "نَأْسَفُ، الرِّحْلَةُ تَأَخَّرَتْ.", japanese: "申し訳ありません、フライトは遅れています。" },
      { speaker: "🧑 客", arabic: "كَمْ مُدَّةُ التَّأْخِيرِ؟", japanese: "どれくらい遅れますか？" },
      { speaker: "👩‍✈️ 係員", arabic: "سَاعَتَيْنِ بِسَبَبِ عُطْلٍ فَنِّيٍّ.", japanese: "技術的な問題で2時間です。" },
      { speaker: "🧑 客", arabic: "يَا لَلْأَسَفِ! سَأَنْتَظِرُ فِي الْمَقْهَى.", japanese: "なんてことだ！カフェで待つことにします。" },
      { speaker: "👩‍✈️ 係員", arabic: "شُكْرًا لِصَبْرِكَ.", japanese: "お待ちいただきありがとうございます。" }
    ]
  },
  {
    id: 72, title: "お釣りが足りない", category: "買い物", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "بَاقِي", meaning: "お釣り/残り" }, { word: "صَرْف", meaning: "細かいお金" }],
    questions: [
      { id: 721, type: "reading", text: "店員の問題は？", options: ["商品がない", "お釣りがない", "袋がない", "高い"], correctIndex: 1, explanation: "「لَيْسَ مَعِي صَرْفٌ (細かいお金がない)」と言っています。" },
      { id: 722, type: "reading", text: "客はいくら出しましたか？", options: ["50", "100", "200", "500"], correctIndex: 3, explanation: "「خَمْسُمِائَة (500)」です。" },
      { id: 723, type: "reading", text: "客はどう支払いますか？", options: ["カードで", "後で", "諦める", "チップにする"], correctIndex: 0, explanation: "「بِالْبِطَاقَة (カードで)」払うことにしました。" },
      { id: 724, type: "vocabulary", text: "「مُشْكِلَة」の意味は？", options: ["解決", "問題", "質問", "答え"], correctIndex: 1, explanation: "問題のことです。" },
      { id: 725, type: "grammar", text: "「持っていますか（携帯）」", options: ["هَلْ مَعَكَ", "هَلْ فِيكَ", "هَلْ مِنْكَ", "هَلْ إِلَيْكَ"], correctIndex: 0, explanation: "「Hal ma'aka (With you)」を使います。" }
    ],
    sentences: [
      { speaker: "🧑 客", arabic: "تَفَضَّلْ، خَمْسُمِائَةِ رِيَالٍ.", japanese: "はい、500リヤルです。" },
      { speaker: "👳 店員", arabic: "عَفْوًا، لَيْسَ مَعِي صَرْفٌ (فَكَّة).", japanese: "すみません、細かいお釣りがありません。" },
      { speaker: "🧑 客", arabic: "هَلْ لَدَيْكَ شَبَكَة (جِهَاز دَفْع)؟", japanese: "カード支払機はありますか？" },
      { speaker: "👳 店員", arabic: "نَعَمْ، مَوْجُودَةٌ.", japanese: "はい、あります。" },
      { speaker: "🧑 客", arabic: "إِذَنْ سَأَدْفَعُ بِالْبِطَاقَةِ.", japanese: "じゃあカードで払います。" },
      { speaker: "👳 店員", arabic: "تَمَام، لَا مُشْكِلَةَ.", japanese: "了解です、問題ありません。" }
    ]
  },
  {
    id: 73, title: "パソコンの故障", category: "仕事", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "حَاسُوب", meaning: "パソコン" }, { word: "شَاشَة", meaning: "画面" }],
    questions: [
      { id: 731, type: "reading", text: "何が壊れましたか？", options: ["スマホ", "プリンター", "パソコン", "マウス"], correctIndex: 2, explanation: "「حَاسُوبِي (私のPC)」です。" },
      { id: 732, type: "reading", text: "どんな状態ですか？", options: ["遅い", "動かない（黒い画面）", "うるさい", "熱い"], correctIndex: 1, explanation: "「الشَّاشَة سَوْدَاء (画面が黒い)」です。" },
      { id: 733, type: "reading", text: "IT担当者は何を提案しましたか？", options: ["再起動", "買い替え", "修理に出す", "捨てる"], correctIndex: 0, explanation: "「إِعَادَة التَّشْغِيل (再起動)」です。" },
      { id: 734, type: "vocabulary", text: "「يَعْمَل」の意味は？", options: ["寝る", "働く/動く", "食べる", "書く"], correctIndex: 1, explanation: "動く、機能する、という意味です。" },
      { id: 735, type: "grammar", text: "「試しました」", options: ["جَرَّبْتُ", "جَرَّبَ", "أُجَرِّبُ", "تُجَرِّبُ"], correctIndex: 0, explanation: "「Jarrabtu」です。" }
    ],
    sentences: [
      { speaker: "🧑 社員", arabic: "حَاسُوبِي لَا يَعْمَلُ.", japanese: "パソコンが動きません。" },
      { speaker: "👨‍💻 IT担当", arabic: "مَاذَا تَرَى عَلَى الشَّاشَةِ؟", japanese: "画面には何が映っていますか？" },
      { speaker: "🧑 社員", arabic: "لَا شَيْءَ. الشَّاشَةُ سَوْدَاءُ.", japanese: "何も。画面は真っ暗です。" },
      { speaker: "👨‍💻 IT担当", arabic: "هَلْ جَرَّبْتَ إِعَادَةَ التَّشْغِيلِ؟", japanese: "再起動は試しましたか？" },
      { speaker: "🧑 社員", arabic: "نَعَمْ، وَلَكِنْ نَفْسُ الْمُشْكِلَةِ.", japanese: "はい、でも同じ問題です。" },
      { speaker: "👨‍💻 IT担当", arabic: "سَآتِي لِفَحْصِهِ.", japanese: "見に行きます。" }
    ]
  },
  {
    id: 74, title: "会議の延期", category: "仕事", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "تَأْجِيل", meaning: "延期" }, { word: "ظَرْف", meaning: "事情" }],
    questions: [
      { id: 741, type: "reading", text: "会議はどうなりましたか？", options: ["中止", "延期", "開始", "終了"], correctIndex: 1, explanation: "「تَأْجِيل (延期)」です。" },
      { id: 742, type: "reading", text: "いつに延期されましたか？", options: ["明日", "明後日", "来週", "未定"], correctIndex: 0, explanation: "「إِلَى غَدٍ (明日へ)」です。" },
      { id: 743, type: "reading", text: "理由は？", options: ["病気", "部長が忙しい", "部屋がない", "忘れた"], correctIndex: 1, explanation: "「الْمُدِير مَشْغُول (部長が忙しい)」です。" },
      { id: 744, type: "vocabulary", text: "「نَفْس」の意味は？", options: ["違う", "同じ", "新しい", "古い"], correctIndex: 1, explanation: "同じ(Same)、という意味です。" },
      { id: 745, type: "grammar", text: "「知らせてください」", options: ["أَخْبِرْنِي", "اِسْمَعْنِي", "اُنْظُرْنِي", "سَاعِدْنِي"], correctIndex: 0, explanation: "「Akhbir-nī」です。" }
    ],
    sentences: [
      { speaker: "👩 秘書", arabic: "نَعْتَذِرُ، تَمَّ تَأْجِيلُ الِاجْتِمَاعِ.", japanese: "申し訳ありません、会議は延期されました。" },
      { speaker: "🧑 社員", arabic: "إِلَى مَتَى؟", japanese: "いつまでですか？" },
      { speaker: "👩 秘書", arabic: "إِلَى غَدٍ فِي نَفْسِ الْوَقْتِ.", japanese: "明日の同じ時間です。" },
      { speaker: "🧑 社員", arabic: "مَا السَّبَبُ؟", japanese: "理由は？" },
      { speaker: "👩 秘書", arabic: "الْمُدِيرُ مَشْغُولٌ جِدًّا الْيَوْمَ.", japanese: "部長が今日とても忙しいのです。" },
      { speaker: "🧑 社員", arabic: "فَهِمْتُ. شُكْرًا لِإِخْبَارِي.", japanese: "わかりました。知らせてくれてありがとう。" }
    ]
  },

  // --- 文化・習慣 (75-76) ---
  {
    id: 75, title: "宗教的な祭日", category: "文化", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "عِيد", meaning: "祭り/イード" }, { word: "سَعِيد", meaning: "幸せな" }],
    questions: [
      { id: 751, type: "reading", text: "何のお祝いですか？", options: ["誕生日", "建国記念日", "イード（祭り）", "卒業"], correctIndex: 2, explanation: "「عِيدُ الْفِطْرِ (断食明けの祭り)」です。" },
      { id: 752, type: "reading", text: "何と言って祝いますか？", options: ["ありがとう", "おめでとう（イード・ムバーラク）", "さようなら", "ごめんなさい"], correctIndex: 1, explanation: "「عِيدٌ مُبَارَكٌ」です。" },
      { id: 753, type: "reading", text: "人々は何をしますか？", options: ["働く", "家族を訪問する", "寝る", "勉強する"], correctIndex: 1, explanation: "「نَزُورُ الْأَهْلَ (家族を訪ねる)」と言っています。" },
      { id: 754, type: "vocabulary", text: "「حَلْوَى」の意味は？", options: ["肉", "お菓子/スイーツ", "ご飯", "野菜"], correctIndex: 1, explanation: "お菓子のことです。" },
      { id: 755, type: "grammar", text: "「毎年」", options: ["كُلُّ عَامٍ", "كُلُّ يَوْمٍ", "كُلُّ شَهْرٍ", "كُلُّ أُسْبُوعٍ"], correctIndex: 0, explanation: "「Kullu 'ām」です。" }
    ],
    sentences: [
      { speaker: "🧑 A", arabic: "عِيدٌ مُبَارَكٌ، وَكُلُّ عَامٍ وَأَنْتَ بِخَيْرٍ.", japanese: "イードおめでとう。毎年あなたが元気でありますように。" },
      { speaker: "👱 B", arabic: "وَأَنْتَ بِخَيْرٍ وَصِحَّةٍ.", japanese: "あなたも元気で健康でありますように。" },
      { speaker: "🧑 A", arabic: "مَاذَا تَفْعَلُ فِي الْعِيدِ؟", japanese: "イードには何をするの？" },
      { speaker: "👱 B", arabic: "نَزُورُ الْأَهْلَ وَنَأْكُلُ الْحَلْوَى.", japanese: "家族を訪ねて、お菓子を食べるよ。" },
      { speaker: "🧑 A", arabic: "هَذَا جَمِيلٌ. عِيدُ فِطْرٍ سَعِيدٌ.", japanese: "いいね。良い断食明け祭を。" },
      { speaker: "👱 B", arabic: "عَلَيْنَا وَعَلَيْكُمْ.", japanese: "私たちとあなたたちに（良いお祭りを）。" }
    ]
  },
  {
    id: 76, title: "伝統料理", category: "文化", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "أَكْلَة", meaning: "料理" }, { word: "شَعْبِيّ", meaning: "人気のある/国民的な" }],
    questions: [
      { id: 761, type: "reading", text: "話題の料理は？", options: ["寿司", "カブサ", "パスタ", "カレー"], correctIndex: 1, explanation: "「الْكَبْسَة」です。" },
      { id: 762, type: "reading", text: "カブサの材料は？", options: ["パンとチーズ", "米と肉", "魚と野菜", "麺"], correctIndex: 1, explanation: "「أَرُزٌّ وَلَحْمٌ (米と肉)」です。" },
      { id: 763, type: "reading", text: "味はどうですか？", options: ["まずい", "とても美味しい", "辛すぎる", "甘い"], correctIndex: 1, explanation: "「لَذِيذَةٌ جِدًّا」です。" },
      { id: 764, type: "vocabulary", text: "「تَجْرِبَة」の意味は？", options: ["料理", "試すこと/経験", "買い物", "旅行"], correctIndex: 1, explanation: "試すこと、経験のことです。" },
      { id: 765, type: "grammar", text: "「それは〜です（女性名詞）」", options: ["هِيَ", "هُوَ", "أَنْتَ", "أَنَا"], correctIndex: 0, explanation: "カブサ(Kabsah)は女性名詞なので「Hiya」で受けます。" }
    ],
    sentences: [
      { speaker: "🧑 A", arabic: "مَا هِيَ أَشْهَرُ أَكْلَةٍ سُعُودِيَّةٍ؟", japanese: "一番有名なサウジ料理は何？" },
      { speaker: "👱 B", arabic: "الْكَبْسَةُ. هِيَ أَكْلَةٌ شَعْبِيَّةٌ.", japanese: "カブサだね。国民的な料理だよ。" },
      { speaker: "🧑 A", arabic: "مِمَّ تَتَكَوَّنُ؟", japanese: "何からできてるの？" },
      { speaker: "👱 B", arabic: "أَرُزٌّ وَلَحْمٌ وَبُهَارَاتٌ.", japanese: "米と肉とスパイスだよ。" },
      { speaker: "🧑 A", arabic: "هَلْ هِيَ لَذِيذَةٌ؟", japanese: "美味しい？" },
      { speaker: "👱 B", arabic: "جِدًّا! يَجِبُ أَنْ تُجَرِّبَهَا.", japanese: "すごくね！絶対試すべきだよ。" }
    ]
  },

  // --- 日常・生活 (77-80) ---
  {
    id: 77, title: "暑さについて", category: "日常", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "حَرّ", meaning: "暑さ" }, { word: "صَيْف", meaning: "夏" }],
    questions: [
      { id: 771, type: "reading", text: "今の季節は？", options: ["春", "夏", "秋", "冬"], correctIndex: 1, explanation: "「فِي الصَّيْفِ (夏に)」と言っています。" },
      { id: 772, type: "reading", text: "外の気温は？", options: ["寒い", "涼しい", "耐えられないほど暑い", "普通"], correctIndex: 2, explanation: "「لَا يُطَاقُ (耐えられない)」と言っています。" },
      { id: 773, type: "reading", text: "どうやって涼みますか？", options: ["エアコン", "扇風機", "泳ぐ", "窓を開ける"], correctIndex: 0, explanation: "「الْمُكَيِّفَات (エアコン)」です。" },
      { id: 774, type: "vocabulary", text: "「ضَرُورِيّ」の意味は？", options: ["不要", "必要/必須", "好き", "嫌い"], correctIndex: 1, explanation: "必須、必要不可欠という意味です。" },
      { id: 775, type: "grammar", text: "「外で」", options: ["فِي الْخَارِجِ", "فِي الدَّاخِلِ", "فِي الْبَيْتِ", "فِي السَّيَّارَةِ"], correctIndex: 0, explanation: "「Khārij」は外です。" }
    ],
    sentences: [
      { speaker: "🧑 A", arabic: "الْجَوُّ حَارٌّ جِدًّا الْيَوْمَ.", japanese: "今日はすごく暑いね。" },
      { speaker: "👱 B", arabic: "نَعَمْ، الْحَرُّ لَا يُطَاقُ فِي الصَّيْفِ.", japanese: "ああ、夏の暑さは耐えられないよ。" },
      { speaker: "🧑 A", arabic: "كَيْفَ تَعِيشُونَ هُنَا؟", japanese: "どうやって暮らしてるの？" },
      { speaker: "👱 B", arabic: "الْمُكَيِّفَاتُ ضَرُورِيَّةٌ فِي كُلِّ مَكَانٍ.", japanese: "どこでもエアコンが必須だよ。" },
      { speaker: "🧑 A", arabic: "هَلْ تَخْرُجُ فِي النَّهَارِ؟", japanese: "昼間は外出する？" },
      { speaker: "👱 B", arabic: "نَادِرًا. نَخْرُجُ فِي اللَّيْلِ.", japanese: "滅多にしないね。夜に出かけるよ。" }
    ]
  },
  {
    id: 78, title: "新しい仕事", category: "仕事", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "وَظِيفَة", meaning: "仕事/職" }, { word: "شَرِكَة", meaning: "会社" }],
    questions: [
      { id: 781, type: "reading", text: "Bさんのニュースは？", options: ["結婚した", "新しい仕事を得た", "家を買った", "旅行した"], correctIndex: 1, explanation: "「حَصَلْتُ عَلَى وَظِيفَةٍ (仕事を得た)」です。" },
      { id: 782, type: "reading", text: "どんな会社ですか？", options: ["小さい", "古い", "大きな石油会社", "学校"], correctIndex: 2, explanation: "「شَرِكَةِ نِفْطٍ كَبِيرَةٍ (大きな石油会社)」です。" },
      { id: 783, type: "reading", text: "Bさんはどう感じていますか？", options: ["悲しい", "幸せ", "疲れている", "怒っている"], correctIndex: 1, explanation: "「أَنَا سَعِيدٌ (私は幸せです)」と言っています。" },
      { id: 784, type: "vocabulary", text: "「فُرْصَة」の意味は？", options: ["お金", "チャンス/機会", "時間", "友達"], correctIndex: 1, explanation: "チャンス、機会のことです。" },
      { id: 785, type: "grammar", text: "「おめでとう」", options: ["مَبْرُوك", "أَهْلًا", "شُكْرًا", "عَفْوًا"], correctIndex: 0, explanation: "「Mabrūk」です。" }
    ],
    sentences: [
      { speaker: "👱 B", arabic: "عِنْدِي خَبَرٌ جَيِّدٌ. حَصَلْتُ عَلَى وَظِيفَةٍ!", japanese: "いい知らせがあるんだ。仕事が決まったよ！" },
      { speaker: "🧑 A", arabic: "مَبْرُوكٌ! أَيْنَ؟", japanese: "おめでとう！どこで？" },
      { speaker: "👱 B", arabic: "فِي شَرِكَةِ نِفْطٍ كَبِيرَةٍ.", japanese: "大きな石油会社だよ。" },
      { speaker: "🧑 A", arabic: "هَذِهِ فُرْصَةٌ مُمْتَازَةٌ.", japanese: "それは素晴らしいチャンスだね。" },
      { speaker: "👱 B", arabic: "نَعَمْ، أَنَا سَعِيدٌ جِدًّا.", japanese: "ああ、とても嬉しいよ。" },
      { speaker: "🧑 A", arabic: "بِالتَّوْفِيقِ فِي عَمَلِكَ الْجَدِيدِ.", japanese: "新しい仕事での成功を祈ってるよ。" }
    ]
  },
  {
    id: 79, title: "家族の紹介", category: "日常", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "عَائِلَة", meaning: "家族" }, { word: "صَغِير", meaning: "小さい" }],
    questions: [
      { id: 791, type: "reading", text: "Aさんは誰を紹介していますか？", options: ["友達", "先生", "弟", "父"], correctIndex: 2, explanation: "「أَخِي الصَّغِير (私の弟)」です。" },
      { id: 792, type: "reading", text: "弟の名前は？", options: ["オマル", "カレド", "アハマド", "サミール"], correctIndex: 1, explanation: "「خَالِد (カレド)」です。" },
      { id: 793, type: "reading", text: "弟は何歳ですか？", options: ["5歳", "10歳", "15歳", "20歳"], correctIndex: 1, explanation: "「عَشْرُ سَنَوَاتٍ (10歳)」です。" },
      { id: 794, type: "vocabulary", text: "「مَدْرَسَة」の意味は？", options: ["家", "学校", "公園", "病院"], correctIndex: 1, explanation: "学校です。" },
      { id: 795, type: "grammar", text: "「これは〜です」", options: ["هَذَا", "هُنَا", "مَنْ", "مَا"], correctIndex: 0, explanation: "「Hādhā」です。" }
    ],
    sentences: [
      { speaker: "🧑 A", arabic: "هَذَا أَخِي الصَّغِيرُ، خَالِدٌ.", japanese: "こちらは弟のカレドです。" },
      { speaker: "👱 B", arabic: "أَهْلًا يَا خَالِدُ. كَمْ عُمْرُكَ؟", japanese: "こんにちは、カレド。何歳？" },
      { speaker: "👶 カレド", arabic: "عُمْرِي عَشْرُ سَنَوَاتٍ.", japanese: "10歳です。" },
      { speaker: "👱 B", arabic: "هَلْ تَذْهَبُ إِلَى الْمَدْرَسَةِ؟", japanese: "学校に行ってるの？" },
      { speaker: "👶 カレド", arabic: "نَعَمْ، فِي الصَّفِّ الرَّابِعِ.", japanese: "はい、4年生です。" },
      { speaker: "👱 B", arabic: "مَا شَاءَ اللهُ، وَلَدٌ ذَكِيٌّ.", japanese: "まあ（神が望まれた）、賢い子だね。" }
    ]
  },
  {
    id: 80, title: "将来の夢", category: "日常", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "مُسْتَقْبَل", meaning: "未来" }, { word: "طَبِيب", meaning: "医者" }],
    questions: [
      { id: 801, type: "reading", text: "子供の夢は？", options: ["エンジニア", "パイロット", "医者", "教師"], correctIndex: 2, explanation: "「طَبِيبًا (医者)」です。" },
      { id: 802, type: "reading", text: "なぜその仕事を選びましたか？", options: ["お金のため", "人々を助けるため", "有名になりたい", "簡単だから"], correctIndex: 1, explanation: "「أُسَاعِدَ الْمَرْضَى (病人を助ける)」と言っています。" },
      { id: 803, type: "reading", text: "Bさんは何と言いましたか？", options: ["無理だ", "頑張れ", "やめとけ", "違うのがいい"], correctIndex: 1, explanation: "「اِجْتَهِدْ (努力しなさい/頑張れ)」と励ましています。" },
      { id: 804, type: "vocabulary", text: "「مَرِيض」の意味は？", options: ["医者", "病人/患者", "薬", "病院"], correctIndex: 1, explanation: "病気の人、患者のことです。" },
      { id: 805, type: "grammar", text: "「なりたい」", options: ["أُصْبِحُ", "أَنَامُ", "أَكُلُ", "أَشْرَبُ"], correctIndex: 0, explanation: "「Uṣbiḥu (なる)」です。" }
    ],
    sentences: [
      { speaker: "👱 B", arabic: "مَاذَا تُرِيدُ أَنْ تُصْبِحَ فِي الْمُسْتَقْبَلِ؟", japanese: "将来何になりたいの？" },
      { speaker: "👶 子供", arabic: "أُرِيدُ أَنْ أَكُونَ طَبِيبًا.", japanese: "お医者さんになりたいです。" },
      { speaker: "👱 B", arabic: "لِمَاذَا؟", japanese: "どうして？" },
      { speaker: "👶 子供", arabic: "لِأُسَاعِدَ الْمَرْضَى وَأُعَالِجَهُمْ.", japanese: "病気の人を助けて治療したいからです。" },
      { speaker: "👱 B", arabic: "هَدَفٌ نَبِيلٌ. اِجْتَهِدْ فِي دِرَاسَتِكَ.", japanese: "高貴な目標だね。勉強頑張って。" },
      { speaker: "👶 子供", arabic: "شُكْرًا، سَأَفْعَلُ إِنْ شَاءَ اللهُ.", japanese: "ありがとう、頑張ります。" }
    ]
  },
// --- サービス・生活 (81-85) ---
{
    id: 81, title: "仕立て屋（トーブ）", category: "買い物", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "خَيَّاط", meaning: "仕立て屋" }, { word: "ثَوْب", meaning: "トーブ（民族衣装）" }],
    questions: [
      { id: 811, type: "reading", text: "客は何を作りたいですか？", options: ["スーツ", "トーブ", "シャツ", "ズボン"], correctIndex: 1, explanation: "「تَفْصِيل ثَوْب (トーブの仕立て)」です。" },
      { id: 812, type: "reading", text: "どんな生地がいいですか？", options: ["日本の生地", "中国の生地", "綿", "シルク"], correctIndex: 0, explanation: "「قُمَاش يَابَانِيّ (日本の生地)」はサウジで高品質として人気です。" },
      { id: 813, type: "reading", text: "いつ出来上がりますか？", options: ["明日", "3日後", "1週間後", "1ヶ月後"], correctIndex: 2, explanation: "「بَعْدَ أُسْبُوعٍ (1週間後)」です。" },
      { id: 814, type: "vocabulary", text: "「قِيَاس」の意味は？", options: ["サイズ/寸法", "値段", "色", "店"], correctIndex: 0, explanation: "寸法、サイズのことです。" },
      { id: 815, type: "grammar", text: "「採寸します（サイズを取ります）」", options: ["آخُذُ الْمَقَاسَ", "أَكْتُبُ الْمَقَاسَ", "أَرَى الْمَقَاسَ", "أَقْرَأُ الْمَقَاسَ"], correctIndex: 0, explanation: "「Ākhudhu (取る)」を使います。" }
    ],
    sentences: [
      { speaker: "🧑 客", arabic: "أُرِيدُ تَفْصِيلَ ثَوْبٍ جَدِيدٍ.", japanese: "新しいトーブを仕立てたいのですが。" },
      { speaker: "👨‍✂️ 仕立て屋", arabic: "نَوْعُ الْقُمَاشِ؟", japanese: "生地の種類は？" },
      { speaker: "🧑 客", arabic: "أَبْيَضُ، قُمَاشٌ يَابَانِيٌّ فَاخِرٌ.", japanese: "白で、上質な日本製生地がいいです。" },
      { speaker: "👨‍✂️ 仕立て屋", arabic: "تَعَالَ لِآخُذَ الْمَقَاسَ.", japanese: "寸法を測りますので来てください。" },
      { speaker: "🧑 客", arabic: "مَتَى يَكُونُ جَاهِزًا؟", japanese: "いつ出来上がりますか？" },
      { speaker: "👨‍✂️ 仕立て屋", arabic: "بَعْدَ أُسْبُوعٍ تَمَامًا.", japanese: "ちょうど1週間後です。" }
    ]
  },
  {
    id: 82, title: "海外送金", category: "生活", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "تَحْوِيل", meaning: "送金/転送" }, { word: "رُسُوم", meaning: "手数料" }],
    questions: [
      { id: 821, type: "reading", text: "客は何をしたいですか？", options: ["預金", "引き出し", "送金", "両替"], correctIndex: 2, explanation: "「تَحْوِيل مَبْلَغ (金額の送金)」です。" },
      { id: 822, type: "reading", text: "どこへ送りますか？", options: ["日本", "フィリピン", "エジプト", "インド"], correctIndex: 1, explanation: "「إِلَى الْفِلِبِّين (フィリピンへ)」です。" },
      { id: 823, type: "reading", text: "手数料はいくら？", options: ["10リヤル", "15リヤル", "20リヤル", "無料"], correctIndex: 1, explanation: "「خَمْسَةَ عَشَرَ (15)」です。" },
      { id: 824, type: "vocabulary", text: "「مُسْتَلِم」の意味は？", options: ["銀行", "受取人", "送金人", "金額"], correctIndex: 1, explanation: "受け取る人、という意味です。" },
      { id: 825, type: "grammar", text: "「送ります」", options: ["أُرْسِلُ", "أَسْتَقْبِلُ", "آخُذُ", "أُعْطِي"], correctIndex: 0, explanation: "「Ursilu」です。" }
    ],
    sentences: [
      { speaker: "🧑 客", arabic: "أُرِيدُ تَحْوِيلَ مَبْلَغٍ إِلَى الْفِلِبِّين.", japanese: "フィリピンへ送金したいのですが。" },
      { speaker: "🏦 窓口", arabic: "هَلْ لَدَيْكَ اسْمُ الْمُسْتَلِمِ؟", japanese: "受取人の名前はありますか？" },
      { speaker: "🧑 客", arabic: "نَعَمْ، هَذَا هُوَ الِاسْمُ وَالرَّقْمُ.", japanese: "はい、これが名前と番号です。" },
      { speaker: "🏦 窓口", arabic: "كَمْ الْمَبْلَغُ؟", japanese: "金額は？" },
      { speaker: "🧑 客", arabic: "أَلْفَا رِيَالٍ. كَمِ الرُّسُومُ؟", japanese: "2000リヤルです。手数料は？" },
      { speaker: "🏦 窓口", arabic: "15 رِيَالًا.", japanese: "15リヤルです。" }
    ]
  },
  {
    id: 83, title: "洗車", category: "生活", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "غَسِيل", meaning: "洗浄" }, { word: "نَظِيف", meaning: "きれいな" }],
    questions: [
      { id: 831, type: "reading", text: "どんな洗車を頼みましたか？", options: ["外側だけ", "内側だけ", "外と中", "エンジンのみ"], correctIndex: 2, explanation: "「خَارِجِيّ وَدَاخِلِيّ (外と中)」です。" },
      { id: 832, type: "reading", text: "特別な注文は？", options: ["ワックス", "スチーム", "香り", "なし"], correctIndex: 1, explanation: "「بُخَار (スチーム)」です。" },
      { id: 833, type: "reading", text: "値段は？", options: ["20", "30", "40", "50"], correctIndex: 2, explanation: "「أَرْبَعُونَ (40)」です。" },
      { id: 834, type: "vocabulary", text: "「عَجَلَة」の意味は？", options: ["窓", "タイヤ/車輪", "ドア", "椅子"], correctIndex: 1, explanation: "タイヤのことです。" },
      { id: 835, type: "grammar", text: "「洗って」", options: ["اِغْسِلْ", "نَظِّفْ", "اِمْسَحْ", "اِرْكَبْ"], correctIndex: 0, explanation: "「Ighsil」です。" }
    ],
    sentences: [
      { speaker: "🧑 客", arabic: "غَسِيلٌ خَارِجِيٌّ وَدَاخِلِيٌّ لَوْ سَمَحْتَ.", japanese: "外と中の洗車をお願いします。" },
      { speaker: "👨‍🔧 店員", arabic: "هَلْ تُرِيدُ بُخَارًا لِلْمَقَاعِدِ؟", japanese: "座席にスチームはしますか？" },
      { speaker: "🧑 客", arabic: "نَعَمْ، وَنَظِّفِ الْعَجَلَاتِ جَيِّدًا.", japanese: "はい、それとタイヤをよく洗って。" },
      { speaker: "👨‍🔧 店員", arabic: "حَاضِرٌ. السِّعْرُ 40 رِيَالًا.", japanese: "かしこまりました。40リヤルです。" },
      { speaker: "🧑 客", arabic: "كَمْ يَأْخُذُ وَقْتًا؟", japanese: "どれくらいかかりますか？" },
      { speaker: "👨‍🔧 店員", arabic: "نِصْفُ سَاعَةٍ.", japanese: "30分です。" }
    ]
  },
  {
    id: 84, title: "駐車場がない", category: "交通", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "مَوْقِف", meaning: "駐車場" }, { word: "مُمْتَلِئ", meaning: "満車/いっぱい" }],
    questions: [
      { id: 841, type: "reading", text: "何を探していますか？", options: ["出口", "入り口", "駐車場", "トイレ"], correctIndex: 2, explanation: "「مَوْقِف لِلسَّيَّارَةِ」です。" },
      { id: 842, type: "reading", text: "警備員は何と言いましたか？", options: ["ここへどうぞ", "満車です", "無料です", "閉まっています"], correctIndex: 1, explanation: "「مُمْتَلِئَة (満車)」と言っています。" },
      { id: 843, type: "reading", text: "どこなら空いていますか？", options: ["1階", "地下", "屋上", "外"], correctIndex: 1, explanation: "「الْقَبْو (地下)」です。" },
      { id: 844, type: "vocabulary", text: "「بَوَّابَة」の意味は？", options: ["窓", "壁", "ゲート/門", "道"], correctIndex: 2, explanation: "ゲートのことです。" },
      { id: 845, type: "grammar", text: "「停めます」", options: ["أُوقِفُ", "أَمْشِي", "أَخْرُجُ", "أَدْخُلُ"], correctIndex: 0, explanation: "「Uqifu (停める)」です。" }
    ],
    sentences: [
      { speaker: "🧑 客", arabic: "أَيْنَ أَجِدُ مَوْقِفًا لِلسَّيَّارَةِ؟", japanese: "駐車場はどこにありますか？" },
      { speaker: "👮 警備員", arabic: "الْمَوَاقِفُ الْأَمَامِيَّةُ مُمْتَلِئَةٌ.", japanese: "正面の駐車場は満車です。" },
      { speaker: "🧑 客", arabic: "مَا الْحَلُّ؟", japanese: "どうすればいいですか？" },
      { speaker: "👮 警備員", arabic: "اِذْهَبْ إِلَى الْقَبْوِ، يُوجَدُ مَكَانٌ.", japanese: "地下へ行ってください、空きがあります。" },
      { speaker: "🧑 客", arabic: "مِنْ أَيِّ بَوَّابَةٍ؟", japanese: "どのゲートから？" },
      { speaker: "👮 警備員", arabic: "بَوَّابَةُ رَقْمِ 3.", japanese: "3番ゲートです。" }
    ]
  },
  {
    id: 85, title: "金（ゴールド）を買う", category: "買い物", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "ذَهَب", meaning: "金" }, { word: "جِرَام", meaning: "グラム" }],
    questions: [
      { id: 851, type: "reading", text: "客は何を買いたいですか？", options: ["銀", "金", "ダイヤ", "真珠"], correctIndex: 1, explanation: "「ذَهَب」です。" },
      { id: 852, type: "reading", text: "何カラットですか？", options: ["18", "21", "22", "24"], correctIndex: 1, explanation: "「عِيَار 21 (21カラット)」です。サウジでは一般的です。" },
      { id: 853, type: "reading", text: "それは何ですか？", options: ["指輪", "ネックレス", "ブレスレット", "イヤリング"], correctIndex: 1, explanation: "「سِلْسَال (チェーン/ネックレス)」です。" },
      { id: 854, type: "vocabulary", text: "「وَزْن」の意味は？", options: ["価格", "重さ", "色", "形"], correctIndex: 1, explanation: "重さ（Weight）です。" },
      { id: 855, type: "grammar", text: "「いくらですか（グラム）」", options: ["بِكَمِ الْجِرَامُ؟", "كَمْ جِرَامًا؟", "أَيْنَ الْجِرَامُ؟", "مَا الْجِرَامُ؟"], correctIndex: 0, explanation: "「Bi-kam」で価格を聞きます。" }
    ],
    sentences: [
      { speaker: "🧑 客", arabic: "بِكَمْ جِرَامُ الذَّهَبِ الْيَوْمَ؟", japanese: "今日の金のグラム単価はいくらですか？" },
      { speaker: "👳 店主", arabic: "عِيَارُ 21 بِـ 200 رِيَالٍ.", japanese: "21金で200リヤルです。" },
      { speaker: "🧑 客", arabic: "أُرِيدُ سِلْسَالًا نَاعِمًا.", japanese: "繊細な（シンプルな）ネックレスが欲しいです。" },
      { speaker: "👳 店主", arabic: "مَا رَأْيُكَ فِي هَذَا؟ وَزْنُهُ خَفِيفٌ.", japanese: "これはどうですか？軽いですよ。" },
      { speaker: "🧑 客", arabic: "جَمِيلٌ. هَلْ عَلَيْهِ ضَمَانٌ؟", japanese: "きれいですね。保証はありますか？" },
      { speaker: "👳 店主", arabic: "نَعَمْ، مَعَ الْفَاتُورَةِ.", japanese: "はい、レシートと共に。" }
    ]
  },

  // --- 文化・宗教 (86-88) ---
  {
    id: 86, title: "オムラ（小巡礼）", category: "文化", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "عُمْرَة", meaning: "オムラ" }, { word: "مَكَّة", meaning: "メッカ" }],
    questions: [
      { id: 861, type: "reading", text: "彼はどこへ行きますか？", options: ["リヤド", "マディーナ", "メッカ", "ジェッダ"], correctIndex: 2, explanation: "「إِلَى مَكَّةَ」です。" },
      { id: 862, type: "reading", text: "目的は？", options: ["観光", "仕事", "オムラ（巡礼）", "買い物"], correctIndex: 2, explanation: "「لِأَدَاءِ الْعُمْرَةِ (オムラを行うため)」です。" },
      { id: 863, type: "reading", text: "どうやって行きますか？", options: ["車", "飛行機", "ハラマイン高速鉄道", "バス"], correctIndex: 2, explanation: "「قِطَارِ الْحَرَمَيْنِ」です。" },
      { id: 864, type: "vocabulary", text: "「دُعَاء」の意味は？", options: ["祈り/祈願", "お金", "食事", "服"], correctIndex: 0, explanation: "神への祈り（Du'a）のことです。" },
      { id: 865, type: "grammar", text: "「忘れないで」", options: ["لَا تَنْسَنَا", "اِنْسَنَا", "تَذَكَّرْ", "اُكْتُبْ"], correctIndex: 0, explanation: "「Lā tansa-nā (私たちを忘れないで)」です。" }
    ],
    sentences: [
      { speaker: "🧑 A", arabic: "أَنَا ذَاهِبٌ إِلَى مَكَّةَ غَدًا.", japanese: "明日メッカに行きます。" },
      { speaker: "👱 B", arabic: "لِأَدَاءِ الْعُمْرَةِ؟", japanese: "オムラ（小巡礼）をしに？" },
      { speaker: "🧑 A", arabic: "نَعَمْ، حَجَزْتُ فِي قِطَارِ الْحَرَمَيْنِ.", japanese: "はい、ハラマイン高速鉄道を予約しました。" },
      { speaker: "👱 B", arabic: "عُمْرَةٌ مَقْبُولَةٌ إِنْ شَاءَ اللهُ.", japanese: "受け入れられる巡礼になりますように。" },
      { speaker: "🧑 A", arabic: "شُكْرًا لَكَ.", japanese: "ありがとう。" },
      { speaker: "👱 B", arabic: "لَا تَنْسَنَا مِنْ صَالِحِ الدُّعَاءِ.", japanese: "私たちのために祈るのを忘れないでね。" }
    ]
  },
  {
    id: 87, title: "出産祝い", category: "文化", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "مَوْلُود", meaning: "新生児" }, { word: "يَتَرَبَّى", meaning: "育つ" }],
    questions: [
      { id: 871, type: "reading", text: "どんな良いニュースですか？", options: ["結婚", "新しい家", "新しい赤ちゃん", "昇進"], correctIndex: 2, explanation: "「مَوْلُود جَدِيد (新しい赤ちゃん)」です。" },
      { id: 872, type: "reading", text: "性別は？", options: ["男の子", "女の子", "双子", "わからない"], correctIndex: 0, explanation: "「وَلَد (男の子)」です。" },
      { id: 873, type: "reading", text: "名前は？", options: ["ムハンマド", "アハマド", "サウド", "ファハド"], correctIndex: 0, explanation: "「سَمَّيْتُهُ مُحَمَّدًا」です。" },
      { id: 874, type: "vocabulary", text: "「عِزّ」の意味は？", options: ["貧困", "栄光/名誉", "悲しみ", "病気"], correctIndex: 1, explanation: "栄光、誇りの中で育ちますように、という祈りの言葉です。" },
      { id: 875, type: "grammar", text: "「名付けました」", options: ["سَمَّيْتُهُ", "نَادَيْتُهُ", "قُلْتُ لَهُ", "رَأَيْتُهُ"], correctIndex: 0, explanation: "「Sammaytu-hu」です。" }
    ],
    sentences: [
      { speaker: "🧑 A", arabic: "أُبَشِّرُكَ، جَاءَنِي مَوْلُودٌ جَدِيدٌ.", japanese: "朗報です、新しい赤ちゃんが生まれました。" },
      { speaker: "👱 B", arabic: "أَلْفُ مَبْرُوكٍ! وَلَدٌ أَمْ بِنْتٌ؟", japanese: "おめでとう！男の子？女の子？" },
      { speaker: "🧑 A", arabic: "وَلَدٌ. سَمَّيْتُهُ مُحَمَّدًا.", japanese: "男の子です。ムハンマドと名付けました。" },
      { speaker: "👱 B", arabic: "بَارَكَ اللهُ لَكَ فِي الْمَوْهُوبِ.", japanese: "神からの授かりものに祝福がありますように。" },
      { speaker: "🧑 A", arabic: "آمِينَ يَا رَبُّ.", japanese: "アーミーン（神よ受け入れたまえ）。" },
      { speaker: "👱 B", arabic: "يَتَرَبَّى فِي عِزِّكُمْ.", japanese: "あなた方の名誉の中で（立派に）育ちますように。" }
    ]
  },
  {
    id: 88, title: "アラブの詩", category: "文化", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "شِعْر", meaning: "詩" }, { word: "أَدَب", meaning: "文学" }],
    questions: [
      { id: 881, type: "reading", text: "二人は何について話していますか？", options: ["政治", "スポーツ", "アラブの詩", "料理"], correctIndex: 2, explanation: "「الشِّعْر الْعَرَبِيّ」です。" },
      { id: 882, type: "reading", text: "Aは詩が好きですか？", options: ["はい", "いいえ", "少し", "嫌い"], correctIndex: 0, explanation: "「أُحِبُّهُ كَثِيرًا (大好きだ)」と言っています。" },
      { id: 883, type: "reading", text: "誰の詩が好きですか？", options: ["アル・ムタナッビー", "アンタラ", "イムルウ・アル・カイス", "ショーキ"], correctIndex: 0, explanation: "「الْمُتَنَبِّي」です。" },
      { id: 884, type: "vocabulary", text: "「حِكْمَة」の意味は？", options: ["力", "知恵/英知", "金", "時間"], correctIndex: 1, explanation: "Wisdom（知恵）のことです。" },
      { id: 885, type: "grammar", text: "「読みます」", options: ["أَقْرَأُ", "أَكْتُبُ", "أَسْمَعُ", "أَتَكَلَّمُ"], correctIndex: 0, explanation: "「Aqra'u」です。" }
    ],
    sentences: [
      { speaker: "🧑 A", arabic: "هَلْ تُحِبُّ الشِّعْرَ الْعَرَبِيَّ؟", japanese: "アラブの詩は好きですか？" },
      { speaker: "👱 B", arabic: "طَبْعًا، أُحِبُّهُ كَثِيرًا.", japanese: "もちろん、大好きです。" },
      { speaker: "🧑 A", arabic: "مَنْ شَاعِرُكَ الْمُفَضَّلُ؟", japanese: "好きな詩人は誰ですか？" },
      { speaker: "👱 B", arabic: "الْمُتَنَبِّي. شِعْرُهُ كُلُّهُ حِكْمَةٌ.", japanese: "ムタナッビーです。彼の詩は知恵に満ちています。" },
      { speaker: "🧑 A", arabic: "أَنَا أَيْضًا أَقْرَأُ لَهُ دَائِمًا.", japanese: "私もいつも彼の詩を読んでいます。" },
      { speaker: "👱 B", arabic: "اللُّغَةُ فِيهِ قَوِيَّةٌ جِدًّا.", japanese: "言葉がとても力強いですよね。" }
    ]
  },

  // --- トラブル・その他 (89-90) ---
  {
    id: 89, title: "お湯が出ない", category: "旅行", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "مَاء", meaning: "水" }, { word: "بَارِد", meaning: "冷たい" }],
    questions: [
      { id: 891, type: "reading", text: "客の苦情は？", options: ["水が出ない", "お湯が出ない", "うるさい", "部屋が狭い"], correctIndex: 1, explanation: "「لَا يُوجَدُ مَاءٌ سَاخِنٌ (お湯がない)」です。" },
      { id: 892, type: "reading", text: "今の水の状態は？", options: ["熱すぎる", "茶色い", "冷たい", "止まっている"], correctIndex: 2, explanation: "「بَارِدٌ جِدًّا (とても冷たい)」です。" },
      { id: 893, type: "reading", text: "フロントはどう対応しますか？", options: ["部屋を変える", "確認する", "無視する", "ボイラーを切る"], correctIndex: 1, explanation: "「سَنَتَحَقَّقُ مِنَ السَّخَّانِ (ヒーターを確認します)」です。" },
      { id: 894, type: "vocabulary", text: "「سَاخِن」の意味は？", options: ["冷たい", "熱い", "甘い", "重い"], correctIndex: 1, explanation: "熱い（Hot）です。" },
      { id: 895, type: "grammar", text: "「シャワーを浴びたい」", options: ["أُرِيدُ الِاسْتِحْمَامَ", "أُرِيدُ النَّوْمَ", "أُرِيدُ الْأَكْلَ", "أُرِيدُ الْخُرُوجَ"], correctIndex: 0, explanation: "「Istiḥmām (入浴/シャワー)」です。" }
    ],
    sentences: [
      { speaker: "📞 客", arabic: "لَا يُوجَدُ مَاءٌ سَاخِنٌ فِي الْحَمَّامِ.", japanese: "バスルームにお湯が出ません。" },
      { speaker: "👨‍💼 受付", arabic: "هَلِ الْمَاءُ بَارِدٌ جِدًّا؟", japanese: "水はとても冷たいですか？" },
      { speaker: "🧑 客", arabic: "نَعَمْ، مُتَجَمِّدٌ. أُرِيدُ الِاسْتِحْمَامَ.", japanese: "はい、凍えるほどです。シャワーを浴びたいのに。" },
      { speaker: "👨‍💼 受付", arabic: "آسِفٌ. سَنَتَحَقَّقُ مِنَ السَّخَّانِ الْمَرْكَزِيِّ.", japanese: "すみません。セントラルヒーティングを確認します。" },
      { speaker: "🧑 客", arabic: "كَمْ يَسْتَغْرِقُ ذَلِكَ؟", japanese: "どれくらいかかりますか？" },
      { speaker: "👨‍💼 受付", arabic: "عَشْرُ دَقَائِقَ فَقَطْ.", japanese: "たった10分です。" }
    ]
  },
  {
    id: 90, title: "送別会", category: "日常", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "وَدَاع", meaning: "別れ" }, { word: "حَفْلَة", meaning: "パーティー" }],
    questions: [
      { id: 901, type: "reading", text: "何のパーティーですか？", options: ["歓迎会", "送別会", "新年会", "忘年会"], correctIndex: 1, explanation: "「حَفْلَة وَدَاع (送別会)」です。" },
      { id: 902, type: "reading", text: "誰のためですか？", options: ["カレド", "アハマド", "新入社員", "社長"], correctIndex: 1, explanation: "「أَحْمَد」です。" },
      { id: 903, type: "reading", text: "彼はどうしますか？", options: ["結婚する", "他の会社へ移る", "国へ帰る", "昇進する"], correctIndex: 2, explanation: "「سَيَرْجِعُ إِلَى بَلَدِهِ (国へ帰る)」です。" },
      { id: 904, type: "vocabulary", text: "「سَنَفْتَقِدُكَ」の意味は？", options: ["嫌いです", "忘れます", "寂しくなります", "おめでとう"], correctIndex: 2, explanation: "We will miss you（寂しくなる）です。" },
      { id: 905, type: "grammar", text: "「連絡を取り合いましょう」", options: ["لِنَبْقَ عَلَى تَوَاصُلٍ", "مَعَ السَّلَامَةِ", "لَا تَتَّصِلْ", "اِنْسَنِي"], correctIndex: 0, explanation: "「Li-nabqa 'alā tawāṣul」です。" }
    ],
    sentences: [
      { speaker: "🧑 A", arabic: "الْيَوْمَ حَفْلَةُ وَدَاعِ أَحْمَدَ.", japanese: "今日はアハマドの送別会だね。" },
      { speaker: "👱 B", arabic: "خَسَارَةٌ، سَنَفْتَقِدُهُ كَثِيرًا.", japanese: "残念だ、彼がいなくなると寂しくなるよ。" },
      { speaker: "🧑 A", arabic: "نَعَمْ، سَيَرْجِعُ إِلَى بَلَدِهِ نِهَائِيًّا.", japanese: "ああ、国へ完全に帰国するんだ。" },
      { speaker: "👱 B", arabic: "يَجِبُ أَنْ نُحْضِرَ لَهُ هَدِيَّةً.", japanese: "彼にプレゼントを用意しないと。" },
      { speaker: "🧑 A", arabic: "اتَّفَقْنَا.", japanese: "賛成だ。" },
      { speaker: "👱 B", arabic: "لِنَبْقَ عَلَى تَوَاصُلٍ يَا أَحْمَدُ.", japanese: "アハマド、連絡を取り合おうな。" }
    ]
  },
  // --- 緊急・トラブル (91) ---
  {
    id: 91, title: "パスポート紛失", category: "緊急", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "جَوَاز", meaning: "パスポート" }, { word: "سِفَارَة", meaning: "大使館" }],
    questions: [
      { id: 911, type: "reading", text: "何がなくなりましたか？", options: ["財布", "パスポート", "航空券", "荷物"], correctIndex: 1, explanation: "「جَوَازَ سَفَرِي (私のパスポート)」です。" },
      { id: 912, type: "reading", text: "どこに行くべきですか？", options: ["空港", "警察と大使館", "ホテル", "病院"], correctIndex: 1, explanation: "「الشُّرْطَةَ وَالسِّفَارَةَ (警察と大使館)」です。" },
      { id: 913, type: "reading", text: "客の気持ちは？", options: ["嬉しい", "落ち着いている", "とても心配", "眠い"], correctIndex: 2, explanation: "「أَنَا قَلِقٌ جِدًّا (とても心配だ)」と言っています。" },
      { id: 914, type: "vocabulary", text: "「ضَرُورِيّ」の意味は？", options: ["不要", "必要/重要", "簡単", "安い"], correctIndex: 1, explanation: "必須、必要という意味です。" },
      { id: 915, type: "grammar", text: "「助けてくれますか？」", options: ["هَلْ تُسَاعِدُنِي؟", "هَلْ تَأْكُلُنِي؟", "هَلْ تَضْرِبُنِي؟", "هَلْ تَنْسَانِي؟"], correctIndex: 0, explanation: "「Tusā'idu-nī」です。" }
    ],
    sentences: [
      { speaker: "🧑 A", arabic: "لَقَدْ فَقَدْتُ جَوَازَ سَفَرِي!", japanese: "パスポートをなくしてしまいました！" },
      { speaker: "👱 B", arabic: "مَتَى وَأَيْنَ؟", japanese: "いつ、どこで？" },
      { speaker: "🧑 A", arabic: "لَا أَتَذَكَّرُ. أَنَا قَلِقٌ جِدًّا.", japanese: "思い出せません。とても心配です。" },
      { speaker: "👱 B", arabic: "اِهْدَأْ. يَجِبُ أَنْ تَذْهَبَ إِلَى الشُّرْطَةِ.", japanese: "落ち着いて。警察に行かなければなりません。" },
      { speaker: "🧑 A", arabic: "ثُمَّ مَاذَا؟", japanese: "それから？" },
      { speaker: "👱 B", arabic: "ثُمَّ إِلَى السِّفَارَةِ لِاسْتِخْرَاجِ وَثِيقَةٍ.", japanese: "それから大使館に行って書類を発行してもらうんです。" }
    ]
  },

  // --- 日常・通信 (92) ---
  {
    id: 92, title: "残高チャージ", category: "生活", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "رَصِيد", meaning: "残高" }, { word: "شَحْن", meaning: "チャージ/充電" }],
    questions: [
      { id: 921, type: "reading", text: "客は何をしたいですか？", options: ["解約", "残高チャージ", "携帯修理", "番号変更"], correctIndex: 1, explanation: "「شَحْنَ رَصِيدِي (残高のチャージ)」です。" },
      { id: 922, type: "reading", text: "いくらチャージしますか？", options: ["10リヤル", "20リヤル", "50リヤル", "100リヤル"], correctIndex: 3, explanation: "「مِائَةَ رِيَالٍ (100リヤル)」です。" },
      { id: 923, type: "reading", text: "どうやってチャージしますか？", options: ["店員がやる", "カードを買う", "ネットで", "銀行で"], correctIndex: 1, explanation: "「بِطَاقَةَ شَحْنٍ (チャージカード)」を買っています。" },
      { id: 924, type: "vocabulary", text: "「اِنْتَهَى」の意味は？", options: ["始まった", "終わった/切れた", "増えた", "来た"], correctIndex: 1, explanation: "Finished（終わった、切れた）という意味です。" },
      { id: 925, type: "grammar", text: "「どうやって？」", options: ["كَيْفَ؟", "مَتَى؟", "أَيْنَ؟", "مَنْ؟"], correctIndex: 0, explanation: "「Kayfa」です。" }
    ],
    sentences: [
      { speaker: "🧑 客", arabic: "رَصِيدُ الْجَوَّالِ انْتَهَى.", japanese: "携帯の残高がなくなりました。" },
      { speaker: "👨‍💻 店員", arabic: "هَلْ تُرِيدُ شَحْنَ رَصِيدِكَ؟", japanese: "残高をチャージしますか？" },
      { speaker: "🧑 客", arabic: "نَعَمْ، بِكَمْ الْبِطَاقَةُ؟", japanese: "はい、カードはいくらですか？" },
      { speaker: "👨‍💻 店員", arabic: "يُوجَدُ عِشْرُونَ، وَخَمْسُونَ، وَمِائَةٌ.", japanese: "20、50、100があります。" },
      { speaker: "🧑 客", arabic: "أَعْطِنِي مِائَةَ رِيَالٍ.", japanese: "100リヤルをください。" },
      { speaker: "👨‍💻 店員", arabic: "تَفَضَّلْ. اِضْغَطْ *155* الرَّقْم #.", japanese: "どうぞ。*155*番号# を押してください。" }
    ]
  },

  // --- 文化・宗教 (93) ---
  {
    id: 93, title: "礼拝の時間", category: "文化", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "صَلَاة", meaning: "礼拝" }, { word: "وَقْت", meaning: "時間" }],
    questions: [
      { id: 931, type: "reading", text: "どの礼拝について聞いていますか？", options: ["ファジュル（暁）", "ズフル（昼）", "アスル（午後）", "イシャ（夜）"], correctIndex: 3, explanation: "「صَلَاةُ الْعِشَاءِ (イシャの礼拝)」です。" },
      { id: 932, type: "reading", text: "アザーンは終わりましたか？", options: ["はい", "いいえ（まだ）", "今なっている", "わからない"], correctIndex: 1, explanation: "「لَيْسَ بَعْدُ (まだです)」と言っています。" },
      { id: 933, type: "reading", text: "あとどれくらいですか？", options: ["1時間", "30分", "15分", "すぐ"], correctIndex: 2, explanation: "「بَقِيَ رُبْعُ سَاعَةٍ (1/4時間＝15分残っている)」です。" },
      { id: 934, type: "vocabulary", text: "「بَقِيَ」の意味は？", options: ["終わった", "残っている", "来た", "行った"], correctIndex: 1, explanation: "Remain（残る）です。" },
      { id: 935, type: "grammar", text: "「行きます」", options: ["أَذْهَبُ", "أَجِيءُ", "أَقُولُ", "أَسْمَعُ"], correctIndex: 0, explanation: "「Adhhabu」です。" }
    ],
    sentences: [
      { speaker: "🧑 A", arabic: "هَلْ أَذَّنَ لِصَلَاةِ الْعِشَاءِ؟", japanese: "イシャ（夜）の礼拝のアザーンはなりましたか？" },
      { speaker: "👱 B", arabic: "لَا، لَيْسَ بَعْدُ.", japanese: "いいえ、まだです。" },
      { speaker: "🧑 A", arabic: "كَمْ بَقِيَ مِنَ الْوَقْتِ؟", japanese: "あとどれくらい残っていますか？" },
      { speaker: "👱 B", arabic: "بَقِيَ رُبْعُ سَاعَةٍ تَقْرِيبًا.", japanese: "あと15分くらいです。" },
      { speaker: "🧑 A", arabic: "إِذَنْ سَأَتَوَضَّأُ وَأَذْهَبُ لِلْمَسْجِدِ.", japanese: "じゃあ、ウドゥーをしてモスクへ行きます。" },
      { speaker: "👱 B", arabic: "تَقَبَّلَ اللهُ.", japanese: "神が受け入れますように。" }
    ]
  },

  // --- 買い物 (94) ---
  {
    id: 94, title: "書店で", category: "買い物", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "قَامُوس", meaning: "辞書" }, { word: "كِتَاب", meaning: "本" }],
    questions: [
      { id: 941, type: "reading", text: "客が探しているのは？", options: ["小説", "地図", "辞書", "ノート"], correctIndex: 2, explanation: "「قَامُوس (辞書)」です。" },
      { id: 942, type: "reading", text: "何語の辞書ですか？", options: ["英英", "アラビア語-日本語", "英仏", "アラビア語-英語"], correctIndex: 1, explanation: "「عَرَبِيّ يَابَانِيّ」です。" },
      { id: 943, type: "reading", text: "どこにありますか？", options: ["1階", "2階", "外", "レジ横"], correctIndex: 1, explanation: "「فِي الدَّوْرِ الثَّانِي」です。" },
      { id: 944, type: "vocabulary", text: "「قِسْم」の意味は？", options: ["本", "セクション/売り場", "学校", "値段"], correctIndex: 1, explanation: "Sectionのことです。" },
      { id: 945, type: "grammar", text: "「ありますか？」", options: ["هَلْ عِنْدَكَ؟", "هَلْ أَنْتَ؟", "هَلْ تَأْكُلُ؟", "هَلْ تَنَامُ؟"], correctIndex: 0, explanation: "「Indaka (あなたの所に)」を使います。" }
    ],
    sentences: [
      { speaker: "🧑 客", arabic: "لَوْ سَمَحْتَ، هَلْ عِنْدَكُمْ قَامُوسٌ؟", japanese: "すみません、辞書はありますか？" },
      { speaker: "📚 店員", arabic: "أَيُّ لُغَةٍ تَبْحَثُ عَنْهَا؟", japanese: "何語をお探しですか？" },
      { speaker: "🧑 客", arabic: "قَامُوسٌ عَرَبِيٌّ يَابَانِيٌّ.", japanese: "アラビア語・日本語の辞書です。" },
      { speaker: "📚 店員", arabic: "نَعَمْ، مَوْجُودٌ فِي الدَّوْرِ الثَّانِي.", japanese: "はい、2階にありますよ。" },
      { speaker: "🧑 客", arabic: "فِي أَيِّ قِسْمٍ؟", japanese: "どのセクションですか？" },
      { speaker: "📚 店員", arabic: "قِسْمِ اللُّغَاتِ.", japanese: "語学セクションです。" }
    ]
  },

  // --- 交通・日常 (95) ---
  {
    id: 95, title: "渋滞で遅れる", category: "交通", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "زَحْمَة", meaning: "渋滞" }, { word: "طَرِيق", meaning: "道" }],
    questions: [
      { id: 951, type: "reading", text: "電話の相手は何を伝えていますか？", options: ["早く着く", "遅れる", "行けない", "病気だ"], correctIndex: 1, explanation: "「سَأَتَأَخَّرُ (遅れます)」です。" },
      { id: 952, type: "reading", text: "遅れる理由は？", options: ["寝坊", "事故", "交通渋滞", "道に迷った"], correctIndex: 2, explanation: "「زَحْمَة شَدِيدَة (激しい渋滞)」です。" },
      { id: 953, type: "reading", text: "どれくらい遅れますか？", options: ["5分", "15分", "30分", "1時間"], correctIndex: 2, explanation: "「نِصْف سَاعَة (半時間)」です。" },
      { id: 954, type: "vocabulary", text: "「مُتَوَقِّف」の意味は？", options: ["速い", "動いている", "止まっている", "空いている"], correctIndex: 2, explanation: "Stopped（止まっている）です。" },
      { id: 955, type: "grammar", text: "「私は着きます」", options: ["أَصِلُ", "أَذْهَبُ", "أَخْرُجُ", "أَرْجِعُ"], correctIndex: 0, explanation: "「Aṣilu」です。" }
    ],
    sentences: [
      { speaker: "📞 A", arabic: "آسِفٌ، سَأَتَأَخَّرُ عَنِ الْمَوْعِدِ.", japanese: "ごめん、約束に遅れるよ。" },
      { speaker: "👱 B", arabic: "لِمَاذَا؟ أَيْنَ أَنْتَ؟", japanese: "どうして？どこにいるの？" },
      { speaker: "📞 A", arabic: "فِي طَرِيقِ الْمَلِكِ فَهْد. زَحْمَةٌ شَدِيدَةٌ.", japanese: "キング・ファハド通りだ。ものすごい渋滞だよ。" },
      { speaker: "👱 B", arabic: "هَلِ الطَّرِيقُ مُتَوَقِّفٌ؟", japanese: "道は止まってるの？" },
      { speaker: "📞 A", arabic: "تَقْرِيبًا. أَحْتَاجُ نِصْفَ سَاعَةٍ.", japanese: "ほぼね。あと30分必要だ。" },
      { speaker: "👱 B", arabic: "لَا بَأْسَ، أَنْتَظِرُكَ.", japanese: "大丈夫、待ってるよ。" }
    ]
  },

  // --- 買い物・文化 (96) ---
  {
    id: 96, title: "香水（ムスク）", category: "買い物", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "مِسْك", meaning: "ムスク" }, { word: "عِطْر", meaning: "香水" }],
    questions: [
      { id: 961, type: "reading", text: "客が欲しい香りの種類は？", options: ["ローズ", "ウード", "ムスク", "ジャスミン"], correctIndex: 2, explanation: "「مِسْك (ムスク)」です。" },
      { id: 962, type: "reading", text: "誰のためですか？", options: ["父", "母", "自分", "妻"], correctIndex: 1, explanation: "「لِوَالِدَتِي (私の母に)」です。" },
      { id: 963, type: "reading", text: "白いムスクの香りはどうですか？", options: ["強い", "臭い", "冷たくて軽い", "古い"], correctIndex: 2, explanation: "「بَارِدَة وَخَفِيفَة」と言っています。" },
      { id: 964, type: "vocabulary", text: "「تَوْلَة」の意味は？", options: ["瓶（量り売りの単位）", "箱", "グラム", "キロ"], correctIndex: 0, explanation: "香油を量る伝統的な単位（約12ml）です。" },
      { id: 965, type: "grammar", text: "「これにします」", options: ["هَذَا جَيِّدٌ", "آخُذُهُ", "أَتْرُكُهُ", "أَنْسَاهُ"], correctIndex: 1, explanation: "「Ākhudhu-hu (それを取る/買う)」です。" }
    ],
    sentences: [
      { speaker: "🧑 客", arabic: "أَبْحَثُ عَنْ مِسْكٍ لِوَالِدَتِي.", japanese: "母のためにムスクを探しています。" },
      { speaker: "👳 店員", arabic: "هَلْ تُفَضِّلُ الْمِسْكَ الْأَبْيَضَ؟", japanese: "ホワイトムスクがお好みですか？" },
      { speaker: "🧑 客", arabic: "كَيْفَ رَائِحَتُهُ؟", japanese: "香りはどうですか？" },
      { speaker: "👳 店員", arabic: "بَارِدَةٌ وَخَفِيفَةٌ. جَرِّبْ.", japanese: "涼やかで軽やかですよ。試して。" },
      { speaker: "🧑 客", arabic: "رَائِعَةٌ. بِكَمِ التَّوْلَةُ؟", japanese: "素晴らしい。1ト－ラ（小瓶）いくらですか？" },
      { speaker: "👳 店員", arabic: "بِمِائَةِ رِيَالٍ.", japanese: "100リヤルです。" }
    ]
  },

  // --- 日常・文化 (97) ---
  {
    id: 97, title: "雨とカシュタ", category: "文化", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "مَطَر", meaning: "雨" }, { word: "كَشْتَة", meaning: "ピクニック/キャンプ" }],
    questions: [
      { id: 971, type: "reading", text: "天気はどうなりましたか？", options: ["晴れた", "雨が降った", "雪が降った", "暑くなった"], correctIndex: 1, explanation: "「نَزَلَ الْمَطَرُ」です。" },
      { id: 972, type: "reading", text: "雨が降るとサウジ人は何をしますか？", options: ["家にこもる", "仕事をする", "カシュタ（外に出る）", "寝る"], correctIndex: 2, explanation: "「نَخْرُجُ لِلْكَشْتَةِ」です。" },
      { id: 973, type: "reading", text: "どこへ行きますか？", options: ["モール", "砂漠/郊外", "映画館", "海"], correctIndex: 1, explanation: "「الْبَرّ (野外/砂漠)」です。" },
      { id: 974, type: "vocabulary", text: "「جَمِيل」の意味は？", options: ["悪い", "美しい/良い", "遠い", "近い"], correctIndex: 1, explanation: "美しい、です。" },
      { id: 975, type: "grammar", text: "「行きましょう」", options: ["يَلَّا / هَيَّا", "تَعَالَ", "اِمْشِ", "قِفْ"], correctIndex: 0, explanation: "「Yallā」や「Hayyā」は「さあ、行こう」です。" }
    ],
    sentences: [
      { speaker: "🧑 A", arabic: "انْظُرْ! لَقَدْ نَزَلَ الْمَطَرُ.", japanese: "見て！雨が降ってきたよ。" },
      { speaker: "👱 B", arabic: "مَا شَاءَ اللهُ. الْجَوُّ رَائِعٌ.", japanese: "わあ。素晴らしい天気だ。" },
      { speaker: "🧑 A", arabic: "فِي مِثْلِ هَذَا الْجَوِّ نَخْرُجُ لِلْكَشْتَةِ.", japanese: "こんな天気には「カシュタ（ピクニック）」に行くんだ。" },
      { speaker: "👱 B", arabic: "إِلَى أَيْنَ؟", japanese: "どこへ？" },
      { speaker: "🧑 A", arabic: "إِلَى الْبَرِّ (الصَّحْرَاء).", japanese: "砂漠（郊外）へね。" },
      { speaker: "👱 B", arabic: "يَلَّا (هَيَّا) بِنَا!", japanese: "よし、行こう！" }
    ]
  },

  // --- 健康 (98) ---
  {
    id: 98, title: "歯医者の予約", category: "健康", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "أَسْنَان", meaning: "歯" }, { word: "تَنْظِيف", meaning: "掃除/クリーニング" }],
    questions: [
      { id: 981, type: "reading", text: "予約の目的は？", options: ["抜歯", "クリーニング", "手術", "相談"], correctIndex: 1, explanation: "「تَنْظِيف أَسْنَان (歯のクリーニング)」です。" },
      { id: 982, type: "reading", text: "希望の日時は？", options: ["明日の朝", "明日の夕方", "今日の午後", "来週"], correctIndex: 1, explanation: "「غَدًا مَسَاءً (明日の夕方/晩)」です。" },
      { id: 983, type: "reading", text: "予約が取れた時間は？", options: ["6時", "7時", "8時", "9時"], correctIndex: 1, explanation: "「السَّابِعَة (7時)」です。" },
      { id: 984, type: "vocabulary", text: "「عِيَادَة」の意味は？", options: ["薬局", "クリニック/医院", "学校", "家"], correctIndex: 1, explanation: "クリニックのことです。" },
      { id: 985, type: "grammar", text: "「来てください」", options: ["تَعَالَ", "اِذْهَبْ", "اِجْلِسْ", "قُلْ"], correctIndex: 0, explanation: "「Ta'āla」です。" }
    ],
    sentences: [
      { speaker: "📞 患者", arabic: "أُرِيدُ حَجْزَ مَوْعِدٍ لِتَنْظِيفِ الْأَسْنَانِ.", japanese: "歯のクリーニングの予約をしたいのですが。" },
      { speaker: "👩‍⚕️ 受付", arabic: "مَتَى يُنَاسِبُكَ؟", japanese: "いつがご都合よろしいですか？" },
      { speaker: "📞 患者", arabic: "غَدًا مَسَاءً.", japanese: "明日の夕方で。" },
      { speaker: "👩‍⚕️ 受付", arabic: "السَّاعَةُ السَّابِعَةُ مُتَاحَةٌ.", japanese: "7時が空いています。" },
      { speaker: "📞 患者", arabic: "مُمْتَازٌ. سَآتِي فِي الْمَوْعِدِ.", japanese: "完璧です。その時間に行きます。" },
      { speaker: "👩‍⚕️ 受付", arabic: "شُكْرًا لِاتِّصَالِكَ بِعِيَادَتِنَا.", japanese: "当クリニックにお電話ありがとうございます。" }
    ]
  },

  // --- 日常・挨拶 (99) ---
  {
    id: 99, title: "久しぶりの再会", category: "日常", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "زَمَان", meaning: "長い間/昔" }, { word: "اِشْتَقْتُ", meaning: "恋しかった/会いたかった" }],
    questions: [
      { id: 991, type: "reading", text: "二人はいつ以来会いましたか？", options: ["昨日", "一週間", "長い間", "初めて"], correctIndex: 2, explanation: "「زَمَان (長い間)」と言っています。" },
      { id: 992, type: "reading", text: "Aさんの気持ちは？", options: ["怒っている", "寂しかった（会いたかった）", "忙しい", "忘れていた"], correctIndex: 1, explanation: "「اِشْتَقْتُ إِلَيْكَ (あなたが恋しかった/会いたかった)」です。" },
      { id: 993, type: "reading", text: "Bさんはどうしていましたか？", options: ["寝ていた", "旅行していた", "忙しかった", "病気だった"], correctIndex: 2, explanation: "「كُنْتُ مَشْغُولًا (忙しかった)」です。" },
      { id: 994, type: "vocabulary", text: "「أَخْبَار」の意味は？", options: ["新聞", "ニュース/近況", "天気", "仕事"], correctIndex: 1, explanation: "Newsのことです。「元気？（ニュースはどう？）」という文脈で使われます。" },
      { id: 995, type: "grammar", text: "「どうしていますか？（How are you?）」", options: ["كَيْفَ الْحَالُ؟", "مَنْ أَنْتَ؟", "أَيْنَ أَنْتَ؟", "مَا هَذَا؟"], correctIndex: 0, explanation: "基本の挨拶です。" }
    ],
    sentences: [
      { speaker: "🧑 A", arabic: "يَا هَلَا! زَمَانٌ عَنْكَ.", japanese: "やあ！久しぶりだね。" },
      { speaker: "👱 B", arabic: "أَهْلًا يَا صَدِيقِي. كَيْفَ حَالُكَ؟", japanese: "よう友よ。元気かい？" },
      { speaker: "🧑 A", arabic: "بِخَيْرٍ. اِشْتَقْتُ إِلَيْكَ كَثِيرًا.", japanese: "元気だよ。会いたかったよ。" },
      { speaker: "👱 B", arabic: "وَأَنَا أَيْضًا. كُنْتُ مَشْغُولًا فِي الْعَمَلِ.", japanese: "僕もだ。仕事で忙しくてね。" },
      { speaker: "🧑 A", arabic: "مَا هِيَ آخِرُ أَخْبَارِكَ؟", japanese: "最近どうしてるの（最新のニュースは）？" },
      { speaker: "👱 B", arabic: "كُلُّ شَيْءٍ تَمَامٌ.", japanese: "万事順調だよ。" }
    ]
  },

  // --- 旅行・別れ (100) ---
  {
    id: 100, title: "帰国の挨拶", category: "旅行", level: "会話",
    contentVoweled: "会話", contentPlain: "会話",
    vocabList: [{ word: "سَفَر", meaning: "旅行" }, { word: "عَوْدَة", meaning: "帰ること" }],
    questions: [
      { id: 1001, type: "reading", text: "彼はどうしますか？", options: ["到着した", "国へ帰る", "仕事を探す", "家を買う"], correctIndex: 1, explanation: "「سَأَعُودُ إِلَى وَطَنِي (祖国へ帰る)」です。" },
      { id: 1002, type: "reading", text: "いつ出発しますか？", options: ["今日", "明日", "来週", "来月"], correctIndex: 1, explanation: "「غَدًا (明日)」です。" },
      { id: 1003, type: "reading", text: "サウジアラビアはどうでしたか？", options: ["暑かった", "退屈だった", "楽しかった", "忙しかった"], correctIndex: 2, explanation: "「اسْتَمْتَعْتُ كَثِيرًا (とても楽しんだ)」と言っています。" },
      { id: 1004, type: "vocabulary", text: "「زِيَارَة」の意味は？", options: ["訪問", "居住", "労働", "勉強"], correctIndex: 0, explanation: "訪問のことです。" },
      { id: 1005, type: "grammar", text: "「さようなら（神のご加護を）」", options: ["فِي أَمَانِ اللهِ", "أَهْلًا", "مَرْحَبًا", "شُكْرًا"], correctIndex: 0, explanation: "「Fī amāni Allāh」は別れの挨拶の定番です。" }
    ],
    sentences: [
      { speaker: "🧑 A", arabic: "غَدًا سَأَعُودُ إِلَى وَطَنِي.", japanese: "明日、国へ帰ります。" },
      { speaker: "👱 B", arabic: "سَنَفْتَقِدُكَ. هَلِ اسْتَمْتَعْتَ هُنَا؟", japanese: "寂しくなりますね。ここは楽しかったですか？" },
      { speaker: "🧑 A", arabic: "نَعَمْ، اسْتَمْتَعْتُ كَثِيرًا فِي السُّعُودِيَّةِ.", japanese: "はい、サウジアラビアをとても楽しみました。" },
      { speaker: "👱 B", arabic: "أَتَمَنَّى أَنْ تَزُورَنَا مَرَّةً أُخْرَى.", japanese: "また訪問してくれることを願っています。" },
      { speaker: "🧑 A", arabic: "إِنْ شَاءَ اللهُ. شُكْرًا لَكُمْ.", japanese: "神が望めば。皆さんありがとう。" },
      { speaker: "👱 B", arabic: "فِي أَمَانِ اللهِ. رِحْلَةً سَعِيدَةً.", japanese: "さようなら（神のご加護を）。良い旅を。" }
    ]
  },

  // =================================================================  
    // ==========================================
    //  PART 1: 文法 (Grammar) - 画像付き解説
    // ==========================================
  
    // --- Lesson 1: アラビア文字と発音 ---
// =================================================================
//  PART 1: 文法 (Grammar) - 画像付き解説
  // =================================================================
  {
    id: 101,
    level: "文法",
    category: "文字と発音",
    title: "Lesson 1: アラビア語のアルファベット（基本形）",
  
    contentPlain: "アラビア語は右から左に書きます。まずは基本の形を覚えましょう",

    // 画像パスはご自身の環境に合わせてください
    imageUrls: [
      "/image/grammar/lesson1_1.jpg", 
      "/image/grammar/lesson1_2.jpg", 
      "/image/grammar/lesson1_3.jpg", 
      "/image/grammar/lesson1_4.jpg", 
      "/image/grammar/lesson1_5.jpg"
    ],
// ダミーデータ
contentVoweled: "",
sentences: [], 
vocabList: [],
questions: [] // アルファベット回は問題なし
},
{
  id: 102,
  level: "文法",
  category: "文字と発音",
  title: "Lesson 2: アラビア語のアルファベット（語頭、語中、語末）",
  // ★ 順番はどこでもOKです
  contentPlain: "アラビア語の文字は、それぞれ語頭、語中、語末によって形が変化しますので注意しましょう",
  
// ★ 修正版: "image" フォルダを追加し、ファイル名を写真通りに修正
imageUrls: [
"/image/grammar/lesson2_1.jpg", 
"/image/grammar/lesson2_2.jpg", 
"/image/grammar/lesson2_3.jpg", 
],
contentVoweled: "",
sentences: [], 
vocabList: [],

questions: [
  // --- 基本編 (1-10) ---
  {
    type: "orthography",
    text: "次の文字をつなげてください（家）：\nب + ي + ت", 
    explanation: "بيت",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（本）：\nك + ت + ا + ب",
    explanation: "كتاب",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（太陽）：\nش + م + س",
    explanation: "شمس",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（月）：\nق + م + ر",
    explanation: "قمر",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（平和）：\nس + ل + ا + م",
    explanation: "سلام",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（ドア）：\nب + ا + ب",
    explanation: "باب",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（お茶）：\nش + ا + ي",
    explanation: "شاي",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（新しい）：\nج + د + ي + د",
    explanation: "جديد",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（学校）：\nم + د + ر + س + ة",
    explanation: "مدرسة",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（ペン）：\nق + ل + م",
    explanation: "قلم",
    options: [],
    correctIndex: 0
  },

  // --- 人物・家族 (11-18) ---
  {
    type: "orthography",
    text: "次の文字をつなげてください（男の子）：\nو + ل + د",
    explanation: "ولد",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（女の子）：\nب + ن + ت",
    explanation: "بنت",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（男性）：\nر + ج + ل",
    explanation: "رجل",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（父）：\nأ + ب",
    explanation: "أب",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（母）：\nأ + م",
    explanation: "أم",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（兄/弟）：\nأ + خ",
    explanation: "أخ",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（先生）：\nم + ع + ل + م",
    explanation: "معلم",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（学生）：\nط + ا + ل + ب",
    explanation: "طالب",
    options: [],
    correctIndex: 0
  },

  // --- 動物・自然 (19-26) ---
  {
    type: "orthography",
    text: "次の文字をつなげてください（犬）：\nك + ل + ب",
    explanation: "كلب",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（猫）：\nق + ط + ة",
    explanation: "قطة",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（魚）：\nس + م + ك",
    explanation: "سمك",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（ラクダ）：\nج + م + ل",
    explanation: "جمل",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（木）：\nش + ج + ر + ة",
    explanation: "شجرة",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（川）：\nن + ه + ر",
    explanation: "نهر",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（山）：\nج + ب + ل",
    explanation: "جبل",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（水）：\nم + ا + ء",
    explanation: "ماء",
    options: [],
    correctIndex: 0
  },

  // --- 物・場所 (27-36) ---
  {
    type: "orthography",
    text: "次の文字をつなげてください（コーヒー）：\nق + ه + و + ة",
    explanation: "قهوة",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（車）：\nس + ي + ا + ر + ة",
    explanation: "سيارة",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（椅子）：\nك + ر + س + ي",
    explanation: "كرسي",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（机/オフィス）：\nم + ك + ت + ب",
    explanation: "مكتب",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（部屋）：\nغ + ر + ف + ة",
    explanation: "غرفة",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（窓）：\nش + ب + ا + ك",
    explanation: "شباك",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（カバン）：\nح + ق + ي + ب + ة",
    explanation: "حقيبة",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（時計）：\nس + ا + ع + ة",
    explanation: "ساعة",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（鍵）：\nم + ف + ت + ا + ح",
    explanation: "مفتاح",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（ベッド）：\nس + ر + ي + ر",
    explanation: "سرير",
    options: [],
    correctIndex: 0
  },

  // --- 形容詞・その他 (37-42) ---
  {
    type: "orthography",
    text: "次の文字をつなげてください（大きい）：\nك + ب + ي + ر",
    explanation: "كبير",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（小さい）：\nص + غ + ي + ر",
    explanation: "صغير",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（美しい）：\nج + م + ي + ل",
    explanation: "جميل",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（古い）：\nق + د + ي + م",
    explanation: "قديم",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（手）：\nي + د",
    explanation: "يد",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をつなげてください（名前）：\nا + س + م",
    explanation: "اسم",
    options: [],
    correctIndex: 0
  },

  // --- バラす練習 (43-50) ---
  {
    type: "orthography",
    text: "次の文字をバラしてください（光）：\nنُور",
    explanation: "ن + و + ر",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をバラしてください（アラブ）：\nعَرَب",
    explanation: "ع + ر + ب",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をバラしてください（日本）：\nيَابَان",
    explanation: "ي + ا + ب + ا + ن",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をバラしてください（エジプト）：\nمِصْر",
    explanation: "م + ص + ر",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をバラしてください（ありがとう）：\nشُكْرًا",
    explanation: "ش + ك + ر + ا + ً",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をバラしてください（頭）：\nرَأْس",
    explanation: "ر + أ + س",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をバラしてください（心）：\nقَلْب",
    explanation: "ق + ل + ب",
    options: [],
    correctIndex: 0
  },
  {
    type: "orthography",
    text: "次の文字をバラしてください（口）：\nفَم",
    explanation: "ف + م",
    options: [],
    correctIndex: 0
  }
]
},
{
id: 103,
level: "文法",
category: "文字と発音",
title: "Lesson 3: 発音記号",
contentPlain: "ますは基本形と発音記号でアラビア語の読み方に慣れましょう",

// ★ 修正版: "image" フォルダを追加し、ファイル名を写真通りに修正
imageUrls: [
"/image/grammar/lesson3_1.jpg", 
"/image/grammar/lesson3_2.jpg", 
"/image/grammar/lesson3_3.jpg", 
"/image/grammar/lesson3_4.jpg", 
],

// ダミーデータ
contentVoweled: "",
sentences: [], 
vocabList: [],
questions: [] // アルファベット回は問題なし
},
{
  id: 104,
  level: "文法",
  category: "文字と発音",
  title: "Lesson 4: 長母音と重子音",
  contentPlain: "長母音とつまる音（ッ）の発音について",
  
  // ★ 修正版: "image" フォルダを追加し、ファイル名を写真通りに修正
  imageUrls: [
  "/image/grammar/lesson4_1.jpg", 
  "/image/grammar/lesson4_2.jpg", 
  "/image/grammar/lesson4_3.jpg", 
  "/image/grammar/lesson4_4.jpg", 
  "/image/grammar/lesson4_5.jpg", 
  "/image/grammar/lesson4_6.jpg", 
  "/image/grammar/lesson4_7.jpg", 
  "/image/grammar/lesson4_8.jpg",
  "/image/grammar/lesson4_9.jpg",
  ],
  
  // ダミーデータ
  contentVoweled: "",
  sentences: [], 
  vocabList: [],
  questions: [] // アルファベット回は問題なし
  },
  {
    id: 105,
    level: "文法",
    category: "文字と発音",
    title: "Lesson 5: タンウィーン",
    contentPlain: "これは単語の最後に付き、「～ン (n)」という音を加える記号です。主に「ある～」「一人の～」といった**非限定（英語の a / an）**の意味を持たせるために使います。",
    
    // ★ 修正版: "image" フォルダを追加し、ファイル名を写真通りに修正
    imageUrls: [
    "/image/grammar/lesson5_1.jpg", 
    "/image/grammar/lesson5_2.jpg", 
    ],
    
    // ダミーデータ
    contentVoweled: "",
    sentences: [], 
    vocabList: [],
    questions: [] // アルファベット回は問題なし
    },
    {
      id: 106,
      level: "文法",
      category: "文字と発音",
      title: "Lesson 6: 太陽文字と月文字",
      contentPlain: "これは定冠詞「アル」を単語の頭につけた時、「ル」の音を読むか、読まないかのルールです。",
      
      // ★ 修正版: "image" フォルダを追加し、ファイル名を写真通りに修正
      imageUrls: [
      "/image/grammar/lesson6_1.jpg", 
      "/image/grammar/lesson6_2.jpg", 
      "/image/grammar/lesson6_3.jpg", 
      "/image/grammar/lesson6_4.jpg", 
      "/image/grammar/lesson6_5.jpg", 
      ],
      
      // ダミーデータ
      contentVoweled: "",
      sentences: [], 
      vocabList: [],
      questions: [] // アルファベット回は問題なし
      },
      {
        id: 107,
        level: "文法",
        category: "文字と発音",
        title: "Lesson 7: 各文字を使った単語",
        contentPlain: "アラビア語のアルファベット28文字を使った、「語頭・語中・語末」の単語帳です。アラビア語の文字がどの様に書かれるか確認しましょう",
        
        // ★ 修正版: "image" フォルダを追加し、ファイル名を写真通りに修正
        imageUrls: [
        "/image/grammar/lesson7_1.jpg", 
        "/image/grammar/lesson7_2.jpg", 
        "/image/grammar/lesson7_3.jpg", 
        "/image/grammar/lesson7_4.jpg", 
        "/image/grammar/lesson7_5.jpg", 
        "/image/grammar/lesson7_6.jpg", 
        "/image/grammar/lesson7_7.jpg", 
        "/image/grammar/lesson7_8.jpg", 
        "/image/grammar/lesson7_9.jpg", 
        ],
        
        // ダミーデータ
        contentVoweled: "",
        sentences: [], 
        vocabList: [],
        questions: [] // アルファベット回は問題なし
        },  
        {
          id: 108,
          level: "文法",
          category: "人称代名詞",
          title: "Lesson 8: 人称代名詞（主格）",
          // 少し説明文を追加しておきました
          contentPlain: "アラビア語の独立人称代名詞（「私は」「彼は」などの主語になる言葉）の表です。アラビア語は「男性か女性か」「1人か2人か3人以上か」によって言葉が細かく変わるのが特徴です。",
          
          imageUrls: [
            "/image/grammar/lesson8_1.jpg", 
            "/image/grammar/lesson8_2.jpg", 
            "/image/grammar/lesson8_3.jpg", 
          ],
          
          contentVoweled: "",
          sentences: [], 
          vocabList: [],
          
          // ▼ 作成した3つの4択問題です
          questions: [
            {
              type: "grammar",
              text: "「私」を意味するアラビア語はどれですか？",
              options: ["أَنَا (ana)", "أَنْتَ (anta)", "هُوَ (huwa)", "نَحْنُ (nahnu)"],
              correctIndex: 0,
              explanation: "「私」は男女共通で أَنَا (ana) と言います。"
            },
            {
              type: "grammar",
              text: "女性に対して「あなた」と呼びかける時の代名詞は？",
              options: ["أَنْتَ (anta)", "أَنْتِ (anti)", "هِيَ (hiya)", "أَنْتُمَا (antuma)"],
              correctIndex: 1,
              explanation: "「あなた」は性別で区別します。男性は أَنْتَ (anta)、女性は أَنْتِ (anti) です。"
            },
            {
              type: "grammar",
              text: "「彼（三人称単数男性）」を意味する代名詞は？",
              options: ["هِيَ (hiya)", "هُمْ (hum)", "هُوَ (huwa)", "أَنَا (ana)"],
              correctIndex: 2,
              explanation: "「彼」は هُوَ (huwa) です。対して「彼女」は هِيَ (hiya) です。"
            }
          ]
        },
         {
            id: 109,
            level: "文法",
            category: "疑問詞",
            title: "Lesson 9: 疑問詞",
            contentPlain: "「これは何？」「誰？」「どこ？」など、質問をする時に使う言葉（疑問詞）を学びます。",
            
            imageUrls: [
              "/image/grammar/lesson9_1.jpg", 
              "/image/grammar/lesson9_2.jpg", 
              "/image/grammar/lesson9_3.jpg", 
              "/image/grammar/lesson9_4.jpg", 
            ],
            
            contentVoweled: "",
            sentences: [], 
            vocabList: [],
            
            // ▼ 作成した5つの4択問題です
            questions: [
              {
                type: "grammar",
                text: "「これは何ですか？」(物について聞く) 空欄に入る言葉は？\n「___ هَذَا؟」",
                options: ["مَا (Mā)", "مَنْ (Man)", "أَيْنَ (Ayna)", "كَيْفَ (Kayfa)"],
                correctIndex: 0,
                explanation: "人間以外（物）について「何」と聞くときは مَا (Mā) を使います。"
              },
              {
                type: "grammar",
                text: "「この人は誰ですか？」(人間について聞く) 空欄に入る言葉は？\n「___ هَذَا؟」",
                options: ["مَا (Mā)", "مَنْ (Man)", "مَتَى (Matā)", "كَمْ (Kam)"],
                correctIndex: 1,
                explanation: "人間について「誰」と聞くときは مَنْ (Man) を使います。"
              },
              {
                type: "grammar",
                text: "場所を尋ねる「どこ」を意味する疑問詞は？",
                options: ["أَيْنَ (Ayna)", "مَتَى (Matā)", "كَيْفَ (Kayfa)", "هَلْ (Hal)"],
                correctIndex: 0,
                explanation: "「どこ」は أَيْنَ (Ayna) です。例：Min ayna anta?（あなたはどこから来ましたか？）"
              },
              {
                type: "grammar",
                text: "状態や方法を尋ねる「どのように（どう）」は？\n(例：お元気ですか？ ___ حَالُكَ؟)",
                options: ["أَيْنَ (Ayna)", "مَنْ (Man)", "كَيْفَ (Kayfa)", "مَا (Mā)"],
                correctIndex: 2,
                explanation: "「どのように」は كَيْفَ (Kayfa) です。挨拶の Kayfa haluka?（調子はどう？）でよく使われます。"
              },
              {
                type: "grammar",
                text: "「はい」か「いいえ」で答える疑問文を作るとき、文頭に置く言葉は？\n(例：あなたは学生ですか？ ___ أَنْتَ طَالِبٌ؟)",
                options: ["هَلْ (Hal)", "مَنْ (Man)", "أَيْنَ (Ayna)", "مَا (Mā)"],
                correctIndex: 0,
                explanation: "Yes/No疑問文を作るには、文頭に هَلْ (Hal) を置きます。"
              }
            ]
          },
{
    id: 110,
    level: "文法",
    category: "名詞の性",
    title: "Lesson 10: 名詞の性",
    contentPlain: "アラビア語の「名詞の性（男性形・女性形）」についてのまとめです。アラビア語の名詞には、「中性」がなく、すべての単語が「男性」か「女性」に分かれます。",
    
    imageUrls: [
      "/image/grammar/lesson10_1.jpg", 
      "/image/grammar/lesson10_2.jpg", 
      "/image/grammar/lesson10_3.jpg", 
      "/image/grammar/lesson10_4.jpg", 
    ],
    
    contentVoweled: "",
    sentences: [], 
    vocabList: [],
    
    questions: [
      {
        type: "grammar",
        text: "次の中から「女性名詞」を選んでください。",
        options: [
          "كِتَاب (kitāb - 本)",
          "سَيَّارَة (sayyāra - 車)", // 正解 (ةがついている)
          "قَلَم (qalam - ペン)",
          "بَيْت (bayt - 家)"
        ],
        correctIndex: 1,
        explanation: "語尾に「ター・マルブータ (ة)」が付いている名詞は、基本的に女性名詞です。"
      },
      {
        type: "grammar",
        text: "次の中から「男性名詞」を選んでください。",
        options: [
          "طَالِبَة (ṭāliba - 女子学生)",
          "مُهَنْدِس (muhandis - エンジニア)", // 正解 (ةがない)
          "مُعَلِّمَة (mu‘allima - 女性教師)",
          "حَقِيبَة (ḥaqība - カバン)"
        ],
        correctIndex: 1,
        explanation: "「ة」が付いていない、自然な形の名詞は基本的に男性名詞です。"
      },
      {
        type: "grammar",
        text: "次の中から「女性名詞」を選んでください。",
        options: [
          "بَاب (bāb - ドア)",
          "كُرْسِيّ (kursiyy - 椅子)",
          "طَاوِلَة (ṭāwila - テーブル)", // 正解
          "مَكْتَب (maktab - 机)"
        ],
        correctIndex: 2,
        explanation: "طَاوِلَة (テーブル) は語尾に「ة」が付くため女性名詞です。"
      },
      {
        type: "grammar",
        text: "次の中から「女性名詞」を選んでください。",
        options: [
          "أَب (ab - 父)",
          "أَخ (akh - 兄/弟)",
          "رَجُل (rajul - 男)",
          "أُمّ (umm - 母)" // 正解 (生物的に女性)
        ],
        correctIndex: 3,
        explanation: "「母 (أُمّ)」のように、意味的に女性を指す言葉は「ة」がなくても女性名詞になります。"
      },
      {
        type: "grammar",
        text: "次の中から「女性名詞」を選んでください。",
        options: [
          "رَأْس (ra's - 頭)",
          "يَد (yad - 手)", // 正解 (体の対になるパーツ)
          "أَنْف (anf - 鼻)",
          "فَم (fam - 口)"
        ],
        correctIndex: 1,
        explanation: "「手 (يَد)」や「目 (عَيْن)」のように、体の中で「2つ（対）あるもの」は女性名詞として扱われることが多いです。"
      }
    ]
  },
{
    id: 111,
    level: "文法",
    category: "名詞の数",
    title: "Lesson 11: 名詞の数",
    contentPlain: "日本語や英語は「単数（1つ）」と「複数（2つ以上）」だけですが、アラビア語には「双数（そうすう）」という「2つ（ペア）」専用の形があるのが最大の特徴です。",
    
    imageUrls: [
      "/image/grammar/lesson11_1.jpg", 
      "/image/grammar/lesson11_2.jpg", 
      "/image/grammar/lesson11_3.jpg", 
      "/image/grammar/lesson11_4.jpg", 
    ],
    
    contentVoweled: "",
    sentences: [], 
    vocabList: [],
    
    questions: [
      {
        type: "grammar",
        text: "「本 (كِتَاب)」の「双数形（2冊の本）」を選んでください。",
        options: [
          "كِتَابُون (kitābūn)",
          "كِتَابَان (kitābān)", // 正解
          "كِتَابَات (kitābāt)",
          "كُتُب (kutub)"
        ],
        correctIndex: 1,
        explanation: "双数形を作るには、単数形の語尾に「-ān (ان)」を付けます。"
      },
      {
        type: "grammar",
        text: "「エンジニア (مُهَنْدِس)」の「規則男性複数形（エンジニアたち）」は？",
        options: [
          "مُهَنْدِسُون (muhandisūn)", // 正解
          "مُهَنْدِسَان (muhandisān)",
          "مُهَنْدِسَات (muhandisāt)",
          "مُهَنْدِسَة (muhandisa)"
        ],
        correctIndex: 0,
        explanation: "規則男性複数形は、語尾に「-ūn (ون)」を付けます。"
      },
      {
        type: "grammar",
        text: "「女子学生 (طَالِبَة)」の「双数形（2人の女子学生）」は？\n（ヒント：ة がどうなるか？）",
        options: [
          "طَالِبَان (ṭālibān)",
          "طَالِبَات (ṭālibāt)",
          "طَالِبَتَان (ṭālibatān)", // 正解
          "طُلاَّب (ṭullāb)"
        ],
        correctIndex: 2,
        explanation: "女性名詞（ةで終わる語）を双数にする時は、ة を t に開いてから an を付け、「-atān (تان)」となります。"
      },
      {
        type: "grammar",
        text: "「女性教師 (مُعَلِّمَة)」の「規則女性複数形（女性教師たち）」は？",
        options: [
          "مُعَلِّمُون (mu‘allimūn)",
          "مُعَلِّمَان (mu‘allimān)",
          "مُعَلِّمَات (mu‘allimāt)", // 正解
          "مُعَلِّم (mu‘allim)"
        ],
        correctIndex: 2,
        explanation: "規則女性複数形は、語尾の ة を取って「-āt (ات)」を付けます。"
      },
      {
        type: "grammar",
        text: "次の単語の中で「規則男性複数形」の形をしているものはどれですか？",
        options: [
          "مُسْلِمَات (muslimāt - 女性ムスリムたち)",
          "مُسْلِمَان (muslimān - 2人のムスリム)",
          "مُسْلِمُون (muslimūn - 男性ムスリムたち)", // 正解
          "مُسْلِم (muslim - ムスリム)"
        ],
        correctIndex: 2,
        explanation: "語尾が「-ūn (ون)」で終わっているのが規則男性複数形の特徴です。"
      }
    ]
  },
{
    id: 112,
    level: "文法",
    category: "名詞の格",
    title: "Lesson 12: 名詞の格",
    contentPlain: "アラビア語の最大の特徴である「格変化」のまとめです。アラビア語は、単語の最後の母音を変えることで、「～が」「～を」「～の」という意味を区別します。",
    
    imageUrls: [
      "/image/grammar/lesson12_1.jpg", 
      "/image/grammar/lesson12_2.jpg", 
      "/image/grammar/lesson12_3.jpg", 
      "/image/grammar/lesson12_4.jpg", 
      "/image/grammar/lesson12_5.jpg", 
      "/image/grammar/lesson12_6.jpg", 
    ],
    
    contentVoweled: "",
    sentences: [], 
    vocabList: [],
    
    questions: [
      {
        type: "grammar",
        text: "「主格（～が）」を表す時の、基本的な語尾の母音はどれですか？",
        options: [
          "ファトハ（a / an）",
          "カスラ（i / in）",
          "ダンマ（u / un）", // 正解
          "スクーン（無母音）"
        ],
        correctIndex: 2,
        explanation: "主格（文の主語など）は、基本的に「ウ (u)」または「ウン (un)」の音で終わります。"
      },
      {
        type: "grammar",
        text: "動詞の「目的語（～を）」になる時、名詞はどの格になりますか？",
        options: [
          "主格",
          "対格", // 正解
          "属格",
          "切格"
        ],
        correctIndex: 1,
        explanation: "「～を」にあたる目的語は「対格」になり、語尾が「ア (a)」や「アン (an)」になります。"
      },
      {
        type: "grammar",
        text: "「家 (bayt)」が「家の中に (fī bayt...)」となる時、前置詞の後ろに来る正しい形は？",
        options: [
          "fī baytun (فِي بَيْتٌ)",
          "fī baytan (فِي بَيْتًا)",
          "fī baytin (فِي بَيْتٍ)", // 正解
          "fī bayt (فِي بَيْتْ)"
        ],
        correctIndex: 2,
        explanation: "前置詞の後ろに来る名詞は必ず「属格」になり、語尾が「イ (i)」や「イン (in)」になります。"
      },
      {
        type: "grammar",
        text: "「私はパンを食べた」のパンの格変化で正しいのは？",
        options: [
          "khubzun (خُبْزٌ)",
          "khubzin (خُبْزٍ)",
          "khubzan (خُبْزًا)", // 正解
          "khubz (خُبْزْ)"
        ],
        correctIndex: 2,
        explanation: "「パンを」は動詞の目的語なので「対格」になります。対格（非限定）は「アン (an)」という音になり、文字の上にアリフが添えられることが多いです。"
      },
      {
        type: "grammar",
        text: "「学生は新しい」のように、主語として使う場合の正しい母音は？",
        options: [
          "at-ṭāliba (الطَّالِبَ)",
          "at-ṭālibu (الطَّالِبُ)", // 正解
          "at-ṭālibi (الطَّالِبِ)",
          "at-ṭālib (الطَّالِبْ)"
        ],
        correctIndex: 1,
        explanation: "文の主語は「主格」なので、語尾は「ウ (u)」になります。"
      }
    ]
  },
{
    id: 113,
    level: "文法",
    category: "指示代名詞",
    title: "Lesson 13: 指示代名詞",
    contentPlain: "アラビア語の指示代名詞（これ・あれ）の表です。日本語と違い、「男性か女性か」「人間か物か」によって使い分ける必要があります。",
    
    imageUrls: [
      "/image/grammar/lesson13_1.jpg", 
      "/image/grammar/lesson13_2.jpg", 
      "/image/grammar/lesson13_3.jpg", 
    ],
    
    contentVoweled: "",
    sentences: [], 
    vocabList: [],
    
    questions: [
      {
        type: "grammar",
        text: "男性名詞（本など）を指して「これは～です」と言うときは？",
        options: [
          "هَذِهِ (hādhihi)",
          "هَذَا (hādhā)", // 正解
          "ذَلِكَ (dhālika)",
          "تِلْكَ (tilka)"
        ],
        correctIndex: 1,
        explanation: "男性単数の「これ」は هَذَا (hādhā) です。"
      },
      {
        type: "grammar",
        text: "女性名詞（車など）を指して「あれは～です」と言うときは？",
        options: [
          "ذَلِكَ (dhālika)",
          "هَذَا (hādhā)",
          "تِلْكَ (tilka)", // 正解
          "أُولَئِكَ (ulā'ika)"
        ],
        correctIndex: 2,
        explanation: "女性単数の「あれ」は تِلْكَ (tilka) です。"
      },
      {
        type: "grammar",
        text: "「これらは（私たちの）先生です」のように、人間の複数を指すときは？",
        options: [
          "هَؤُلَاءِ (hā'ulā'i)", // 正解
          "هَذِهِ (hādhihi)",
          "هَذَا (hādhā)",
          "تِلْكَ (tilka)"
        ],
        correctIndex: 0,
        explanation: "人間（理性あるもの）の複数を指すときは、男女共通で هَؤُلَاءِ (hā'ulā'i) を使います。"
      },
      {
        type: "grammar",
        text: "「あれらは本です」のように、人間以外の「物」の複数を指すときは？",
        options: [
          "أُولَئِكَ (ulā'ika)",
          "ذَلِكَ (dhālika)",
          "تِلْكَ (tilka)", // 正解
          "هَؤُلَاءِ (hā'ulā'i)"
        ],
        correctIndex: 2,
        explanation: "アラビア語の重要ルール：『人間以外の複数は、女性単数として扱う』ため、「あれ（女）」である تِلْكَ を使います。"
      },
      {
        type: "grammar",
        text: "「これは美しい町（madīna：女性名詞）です」と言うときの正しい形は？",
        options: [
          "هَذَا مَدِينَةٌ (Hādhā madīna)",
          "هَذِهِ مَدِينَةٌ (Hādhihi madīna)", // 正解
          "ذَلِكَ مَدِينَةٌ (Dhālika madīna)",
          "هَؤُلَاءِ مَدِينَةٌ (Hā'ulā'i madīna)"
        ],
        correctIndex: 1,
        explanation: "町 (madīna) は ة で終わる女性名詞なので、近称は هَذِهِ (hādhihi) を使います。"
      }
    ]
  },
{
    id: 114,
    level: "文法",
    category: "形容詞",
    title: "Lesson 14: 形容詞",
    contentPlain: "英語（Big house）とは逆で、形容詞は「名詞の 後ろ に置く」のが基本です。そしてその形容詞は数、性、限定・非限定など名詞と「セット（お揃い）」にする必要があります。",
    
    imageUrls: [
      "/image/grammar/lesson14_1.jpg", 
      "/image/grammar/lesson14_2.jpg", 
      "/image/grammar/lesson14_3.jpg", 
      "/image/grammar/lesson14_4.jpg", 
      "/image/grammar/lesson14_5.jpg", 
      "/image/grammar/lesson14_6.jpg", 
    ],
    
    contentVoweled: "",
    sentences: [], 
    vocabList: [],
    
    questions: [
      {
        type: "grammar",
        text: "「新しい家（A new house）」の正しい語順は？",
        options: [
          "جَدِيدٌ بَيْتٌ (jadīdun baytun)",
          "بَيْتٌ جَدِيدٌ (baytun jadīdun)", // 正解 (ウン・ウンで一致)
          "الْبَيْتُ الْجَدِيدُ (al-baytu al-jadīdu)",
          "بَيْتُ الْجَدِيدِ (baytu al-jadīdi)"
        ],
        correctIndex: 1,
        explanation: "名詞（baytun）の後ろに形容詞（jadīdun）を置きます。どちらも「非限定（ある家）」なので、語尾はタンウィーン（un）で揃えます。"
      },
      {
        type: "grammar",
        text: "「美しい車（sayyāra: 女性名詞）」と言うときの正しい形は？",
        options: [
          "سَيَّارَةٌ جَمِيلٌ (sayyāratun jamīlun)",
          "سَيَّارَةٌ جَمِيلَةٌ (sayyāratun jamīlatun)", // 正解 (女性形・ウンで一致)
          "جَمِيلَةٌ سَيَّارَةٌ (jamīlatun sayyāratun)",
          "السَّيَّارَةُ جَمِيلَةٌ (as-sayyāratu jamīlatun)"
        ],
        correctIndex: 1,
        explanation: "名詞が女性形（sayyāratun）なら、形容詞も女性形（jamīlatun）にします。"
      },
      {
        type: "grammar",
        text: "「その 大きい 家（The big house）」のように限定する場合の形は？",
        options: [
          "الْبَيْتُ كَبِيرٌ (al-baytu kabīrun)",
          "بَيْتٌ الْكَبِيرُ (baytun al-kabīru)",
          "الْبَيْتُ الْكَبِيرُ (al-baytu al-kabīru)", // 正解 (アル・アル、ウ・ウで一致)
          "بَيْتٌ كَبِيرٌ (baytun kabīrun)"
        ],
        correctIndex: 2,
        explanation: "「その～」と限定する場合、両方に定冠詞 (Al-) をつけます。Alがつくと語尾のタンウィーン（un）が消え、短い母音（u）になる点にも注意しましょう。"
      },
      {
        type: "grammar",
        text: "「広い家の中で」正しいアラビア語を選んでください。",
        options: [
          "فِي بَيْتٍ وَاسِعٌ (fī baytin wāsi‘un)",
          "فِي بَيْتٍ وَاسِعًا (fī baytin wāsi‘an)",
          "فِي بَيْتٍ وَاسِعٍ (fī baytin wāsi‘in)", // 正解 (イン・インで一致)
          "فِي بَيْتٍ الْوَاسِعِ (fī baytin al-wāsi‘i)"
        ],
        correctIndex: 2,
        explanation: "前置詞（fī）の後ろなので「家 (baytin)」は属格です。形容詞もそれに合わせて「属格 (wāsi‘in)」にします。"
      },
      {
        type: "grammar",
        text: "「古い本（複数形）」と言うとき、形容詞はどうなりますか？\n（ヒント：本 kutub は人間以外）",
        options: [
          "كُتُبٌ قَدِيمُونَ (kutubun qadīmūna - 男性複数)",
          "كُتُبٌ قَدِيمَةٌ (kutubun qadīmatun - 女性単数)", // 正解
          "كُتُبٌ قَدِيمَاتٌ (kutubun qadīmātun - 女性複数)",
          "كُتُبٌ قَدِيمٌ (kutubun qadīmun - 男性単数)"
        ],
        correctIndex: 1,
        explanation: "重要ルール：「人間以外の複数名詞」を修飾する形容詞は、「女性単数形」を使います。"
      }
    ]
  },
  {
       id: 115,
        level: "文法",
        category: "名詞文",
        title: "Lesson 15: 名詞文",
        contentPlain: "「名詞文（AはBです）」のレッスンです。「定冠詞(アル)」があるかないかだけで、意味が形容詞か名詞文に変わるので、しっかりと違いを確認しましょう",
        
        // ★ 修正版: "image" フォルダを追加し、ファイル名を写真通りに修正
        imageUrls: [
        "/image/grammar/lesson15_1.jpg", 
        "/image/grammar/lesson15_2.jpg", 
        "/image/grammar/lesson15_3.jpg", 
        "/image/grammar/lesson15_4.jpg", 
        "/image/grammar/lesson15_5.jpg", 
        ],
        
        // ダミーデータ
        contentVoweled: "",
        sentences: [], 
        vocabList: [],
        questions: [] // アルファベット回は問題なし
        },  
{
    id: 115,
    level: "文法",
    category: "名詞文",
    title: "Lesson 15: 名詞文",
    contentPlain: "「名詞文（AはBです）」のレッスンです。「定冠詞(アル)」があるかないかだけで、意味が形容詞か名詞文に変わるので、しっかりと違いを確認しましょう",
    
    imageUrls: [
      "/image/grammar/lesson15_1.jpg", 
      "/image/grammar/lesson15_2.jpg", 
      "/image/grammar/lesson15_3.jpg", 
      "/image/grammar/lesson15_4.jpg", 
      "/image/grammar/lesson15_5.jpg", 
    ],
    
    contentVoweled: "",
    sentences: [], 
    vocabList: [],
    
    questions: [
      {
        type: "grammar",
        text: "「その家は大きいです（The house is big）」という文を選んでください。",
        options: [
          "الْبَيْتُ الْكَبِيرُ (Al-baytu al-kabīru)",
          "الْبَيْتُ كَبِيرٌ (Al-baytu kabīrun)", // 正解
          "بَيْتٌ كَبِيرٌ (Baytun kabīrun)",
          "بَيْتٌ الْكَبِيرُ (Baytun al-kabīru)"
        ],
        correctIndex: 1,
        explanation: "「AはBです」と言う場合、A（主語）には定冠詞をつけ、B（述語）には定冠詞を**つけません**。"
      },
      {
        type: "grammar",
        text: "次のアラビア語の意味はどれですか？\n「اَلْمُدَرِّسُ مَشْغُولٌ (Al-mudarrisu mashghūlun)」",
        options: [
          "その忙しい先生",
          "先生は忙しいです", // 正解
          "ある忙しい先生",
          "忙しい先生は..."
        ],
        correctIndex: 1,
        explanation: "先生（Alあり）＋忙しい（Alなし）の組み合わせなので、これは形容詞による修飾ではなく「先生は忙しい」という文章になります。"
      },
      {
        type: "grammar",
        text: "「その車は新しいです（The car is new）」正しい形は？",
        options: [
          "السَّيَّارَةُ جَدِيدٌ (As-sayyāratu jadīdun)",
          "السَّيَّارَةُ الْجَدِيدَةُ (As-sayyāratu al-jadīdatu)",
          "السَّيَّارَةُ جَدِيدَةٌ (As-sayyāratu jadīdatun)", // 正解
          "سَيَّارَةٌ جَدِيدَةٌ (Sayyāratun jadīdatun)"
        ],
        correctIndex: 2,
        explanation: "主語（車）が女性形なので、述語（新しい）も女性形にします。かつ、述語には定冠詞 Al をつけません。"
      },
      {
        type: "grammar",
        text: "「彼はエンジニアです（He is an engineer）」を選んでください。",
        options: [
          "هُوَ مُهَنْدِسٌ (Huwa muhandisun)", // 正解
          "هُوَ الْمُهَنْدِسُ (Huwa al-muhandisu)",
          "هُوَ مُهَنْدِسٍ (Huwa muhandisin)",
          "هُوَ مُهَنْدِسًا (Huwa muhandisan)"
        ],
        correctIndex: 0,
        explanation: "「彼は～」の主語 Huwa の後は、職業などを非限定（Alなし）・主格（un）で置きます。"
      },
      {
        type: "grammar",
        text: "形容詞句「その美しい日本（The beautiful Japan）」を選んでください。",
        options: [
          "الْيَابَانُ جَمِيلَةٌ (Al-yābānu jamīlatun)",
          "الْيَابَانُ الْجَمِيلَةُ (Al-yābānu al-jamīlatu)", // 正解
          "يَابَانُ جَمِيلَةٌ (Yābānu jamīlatun)",
          "الْيَابَانَ الْجَمِيلَةَ (Al-yābāna al-jamīlata)"
        ],
        correctIndex: 1,
        explanation: "「～は…です」ではなく「その美しい～」とまとめる場合は、名詞と形容詞の両方に定冠詞 (Al) をつけて一致させます。"
      }
    ]
  },
{
    id: 116,
    level: "文法",
    category: "前置詞",
    title: "Lesson 16: 前置詞",
    contentPlain: "アラビア語の前置詞（～で、～へ、～から）レッスンです。「前置詞の後ろは、必ず属格（イ / i）になる」というのが、アラビア語の鉄の掟です。",
    
    imageUrls: [
      "/image/grammar/lesson16_1.jpg", 
      "/image/grammar/lesson16_2.jpg", 
      "/image/grammar/lesson16_3.jpg", 
      "/image/grammar/lesson16_4.jpg", 
      "/image/grammar/lesson16_5.jpg", 
      "/image/grammar/lesson16_6.jpg", 
      "/image/grammar/lesson16_7.jpg", 
      "/image/grammar/lesson16_8.jpg", 
      "/image/grammar/lesson16_9.jpg", 
    ],
    
    contentVoweled: "",
    sentences: [], 
    vocabList: [],
    
    questions: [
      {
        type: "grammar",
        // ★全文を選択肢に入れました
        text: "「本は机の上にあります」正しい文を選んでください。\n（ヒント：前置詞 ‘alā の後ろは属格）",
        options: [
          "اَلْكِتَابُ عَلَى الْمَكْتَبُ (Al-kitābu ‘alā al-maktabu - 主格)",
          "اَلْكِتَابُ عَلَى الْمَكْتَبَ (Al-kitābu ‘alā al-maktaba - 対格)",
          "اَلْكِتَابُ عَلَى الْمَكْتَبِ (Al-kitābu ‘alā al-maktabi - 属格)", // 正解
          "اَلْكِتَابُ عَلَى الْمَكْتَبْ (Al-kitābu ‘alā al-maktab - 無母音)"
        ],
        correctIndex: 2,
        explanation: "前置詞（‘alā）の後ろの名詞は、必ず「属格（カスラ/i）」になります。"
      },
      {
        type: "grammar",
        text: "「学生は教室の中にいます」空欄に入る前置詞は？\n「اَلطَّالِبُ ___ الْفَصْلِ (Aṭ-ṭālibu ___ al-faṣli)」",
        options: [
          "فِي (fī)", // 正解
          "عَلَى (‘alā)",
          "مِنْ (min)",
          "إِلَى (ilā)"
        ],
        correctIndex: 0,
        explanation: "「～の中に (in)」を表す前置詞は فِي (fī) です。"
      },
      {
        type: "grammar",
        text: "「私は日本出身です（I am from Japan）」\n「أَنَا ___ الْيَابَانِ (Ana ___ al-yābāni)」",
        options: [
          "إِلَى (ilā)",
          "مِنْ (min)", // 正解
          "فِي (fī)",
          "عَلَى (‘alā)"
        ],
        correctIndex: 1,
        explanation: "「～から (from)」を表す前置詞は مِنْ (min) です。"
      },
      {
        type: "grammar",
        text: "「この道は空港へ（続いています）」\n「هَذَا الطَّرِيقُ ___ الْمَطَارِ (Hādhā aṭ-ṭarīqu ___ al-maṭāri)」",
        options: [
          "مِنْ (min)",
          "بِـ (bi)",
          "إِلَى (ilā)", // 正解
          "لِـ (li)"
        ],
        correctIndex: 2,
        explanation: "「～へ (to)」という方向・目的地を表す前置詞は إِلَى (ilā) です。"
      },
      {
        type: "grammar",
        text: "「これはムハンマドの（ための）本です」所有を表す前置詞は？\n「هَذَا الْكِتَابُ ___ مُحَمَّدٍ (Hādhā al-kitābu ___ Muḥammadin)」",
        options: [
          "لِـ (li)", // 正解
          "فِي (fī)",
          "عَلَى (‘alā)",
          "مِنْ (min)"
        ],
        correctIndex: 0,
        explanation: "「～のための (for)」「～の所有の」を表すときは前置詞 لِـ (li) を使います。"
      }
    ]
  },
{
    id: 117,
    level: "文法",
    category: "関連形容詞",
    title: "Lesson 17: 関連形容詞",
    contentPlain: "名詞を形容詞（～の、～製の、～人）に変える「関連形容詞（ニスバ形容詞）」のレッスンです。基本ルールは語尾に「ヤー」を付けるだけですが、語尾に余分な文字（ターマルブータやアリフ）がある場合は、それを削除してから付けます。",
    
    imageUrls: [
      "/image/grammar/lesson17_1.jpg", 
      "/image/grammar/lesson17_2.jpg", 
      "/image/grammar/lesson17_3.jpg", 
      "/image/grammar/lesson17_4.jpg", 
    ],
    
    contentVoweled: "",
    sentences: [], 
    vocabList: [],
    
    questions: [
      {
        type: "grammar",
        text: "「日本 (الْيَابَان)」を「日本の・日本人 (男性)」にする正しい形は？",
        options: [
          "يَابَانِيّ (Yābāniyy)", // 正解
          "يَابَان (Yābān)",
          "يَابَانَة (Yābāna)",
          "يَابَانُون (Yābānūn)"
        ],
        correctIndex: 0,
        explanation: "基本ルール：名詞の語尾に「-iyy (يّ)」を付けます。"
      },
      {
        type: "grammar",
        text: "「サウジアラビア (السُّعُودِيَّة)」を「サウジの・サウジ人」にする形は？\n（ヒント：語尾の ة を削除）",
        options: [
          "سُعُودِيَّة (Sa‘ūdiyya)",
          "سُعُود (Sa‘ūd)",
          "سُعُودِيّ (Sa‘ūdiyy)", // 正解
          "سُعُودَات (Sa‘ūdāt)"
        ],
        correctIndex: 2,
        explanation: "語尾に「ター・マルブータ (ة)」がある場合、それを取ってから「-iyy」を付けます。"
      },
      {
        type: "grammar",
        text: "「商業 (تِجَارَة)」を「商業の・商業的な」にする形は？\n（ヒント：語尾の ة を削除）",
        options: [
          "تَاجِر (Tājir - 商人)",
          "تِجَارِيّ (Tijāriyy)", // 正解
          "تِجَارَة (Tijāra)",
          "تِجَارِيُّون (Tijāriyyūn)"
        ],
        correctIndex: 1,
        explanation: "تِجَارَة (tijāra) の ة を取り、تِجَارِيّ (tijāriyy) にします。"
      },
      {
        type: "grammar",
        text: "「歴史 (تَارِيخ)」を「歴史の・歴史的な」にする形は？",
        options: [
          "تَارِيخِيّ (Tārīkhiyy)", // 正解
          "مُؤَرِّخ (Mu'arrikh - 歴史家)",
          "تَارِيخ (Tārīkh)",
          "تَوَارِيخ (Tawārīkh - 歴史(複))"
        ],
        correctIndex: 0,
        explanation: "余分な文字がない場合は、そのまま語尾に「-iyy (يّ)」を付けます。"
      },
      {
        type: "grammar",
        text: "「シリア (سُورِيَا)」を「シリアの・シリア人」にする形は？\n（ヒント：語尾のアリフを削除）",
        options: [
          "سُورِيَا (Sūriyā)",
          "سُورِيّ (Sūriyy)", // 正解
          "سُورِيَّان (Sūriyyān)",
          "سُور (Sūr)"
        ],
        correctIndex: 1,
        explanation: "語尾が長母音（アリフなど）で終わる場合、それを削除してから「-iyy」を付けます。"
      }
    ]
  },
{
    id: 118,
    level: "文法",
    category: "イダーファ（ofの表現）",
    title: "Lesson 18: イダーファ",
    contentPlain: "日本語の「AのB」（先生の本、車の鍵など）のような所有者と所有されるものの関係文を作るときに使うレッスンです。先生は所有者であり、所有されるものは本のようなイメージです。アラビア語ではこの文法をイダーファと言います。「最初の単語(所有されるもの)は限定され、定冠詞がある扱いと同じになり、非限定の印である『アル』と『タンウィーン』を取る」のが最大のルールです。",
    
    imageUrls: [
      "/image/grammar/lesson18_1.jpg", 
      "/image/grammar/lesson18_2.jpg", 
      "/image/grammar/lesson18_3.jpg", 
      "/image/grammar/lesson18_4.jpg", 
      "/image/grammar/lesson18_5.jpg", 
      "/image/grammar/lesson18_6.jpg", 
      "/image/grammar/lesson18_7.jpg", 
      "/image/grammar/lesson18_8.jpg", 
      "/image/grammar/lesson18_9.jpg", 
    ],
    
    contentVoweled: "",
    sentences: [], 
    vocabList: [],
    
    questions: [
      {
        type: "grammar",
        text: "「先生の本は新しいです」正しい文を選んでください。",
        options: [
          "اَلْكِتَابُ الْمُدَرِّسِ جَدِيدٌ (Al-kitābu al-mudarrisi jadīdun)",
          "كِتَابُ الْمُدَرِّسُ جَدِيدٌ (Kitābu al-mudarrisu jadīdun)",
          "كِتَابُ الْمُدَرِّسِ جَدِيدٌ (Kitābu al-mudarrisi jadīdun)", // 正解
          "كِتَابٌ الْمُدَرِّسِ جَدِيدٌ (Kitābun al-mudarrisi jadīdun)"
        ],
        correctIndex: 2,
        explanation: "1語目（本）は文頭なので主格(u)ですが、イダーファなのでアルもタンウィーンも付きません。2語目（先生）は常に属格(i)です。"
      },
      {
        type: "grammar",
        text: "「日本の首都は東京です」正しい文を選んでください。",
        options: [
          "عَاصِمَةُ الْيَابَانِ طُوكِيُو (ʿĀṣimatu al-yābāni Ṭūkyū)", // 正解
          "اَلْعَاصِمَةُ الْيَابَانِ طُوكِيُو (Al-ʿāṣimatu al-yābāni Ṭūkyū)",
          "عَاصِمَةٌ الْيَابَانِ طُوكِيُو (ʿĀṣimatun al-yābāni Ṭūkyū)",
          "عَاصِمَةُ الْيَابَانَ طُوكِيُو (ʿĀṣimatu al-yābāna Ṭūkyū)"
        ],
        correctIndex: 0,
        explanation: "固有名詞（日本）を使ったイダーファです。1語目（首都）からアルを取り、2語目（日本）を属格(i)にします。"
      },
      {
        type: "grammar",
        text: "「これは（ある）学生の本です」",
        options: [
          "هَذَا كِتَابُ الطَّالِبِ (Hādhā kitābu aṭ-ṭālibi)",
          "هَذَا كِتَابُ طَالِبٍ (Hādhā kitābu ṭālibin)", // 正解
          "هَذَا كِتَابٌ طَالِبٍ (Hādhā kitābun ṭālibin)",
          "هَذَا الْكِتَابُ طَالِبٍ (Hādhā al-kitābu ṭālibin)"
        ],
        correctIndex: 1,
        explanation: "「ある学生の」と非限定にする場合、2語目（学生）からアルを取り、属格のタンウィーン「in (ٍ )」を付けます。"
      },
      {
        type: "grammar",
        text: "「鍵は車のドアにあります」\n（ヒント：前置詞 fī の後ろ＋定冠詞あり）",
        options: [
          "اَلْمِفْتَاحُ فِي بَابُ السَّيَّارَةِ (Al-miftāḥu fī bābu as-sayyārati)",
          "اَلْمِفْتَاحُ فِي بَابَ السَّيَّارَةِ (Al-miftāḥu fī bāba as-sayyārati)",
          "اَلْمِفْتَاحُ فِي بَابِ السَّيَّارَةِ (Al-miftāḥu fī bābi as-sayyārati)", // 正解
          "اَلْمِفْتَاحُ فِي الْبَابِ السَّيَّارَةِ (Al-miftāḥu fī al-bābi as-sayyārati)"
        ],
        correctIndex: 2,
        explanation: "前置詞（fī）の後ろなので、1語目（ドア）は属格(i)になります。2語目（車）もイダーファのルールで属格(i)です。"
      },
      {
        type: "grammar",
        // ★修正箇所: 動詞をやめ、「ムハンマドは〜にいます」という名詞文に変更
        text: "「ムハンマドは（ある）友人の家にいます」",
        options: [
          "مُحَمَّدٌ فِي بَيْتِ صَدِيقٍ (Muḥammadun fī bayti ṣadīqin)", // 正解
          "مُحَمَّدٌ فِي بَيْتٍ صَدِيقٍ (Muḥammadun fī baytin ṣadīqin)",
          "مُحَمَّدٌ فِي الْبَيْتِ صَدِيقٍ (Muḥammadun fī al-bayti ṣadīqin)",
          "مُحَمَّدٌ فِي بَيْتِ الصَّدِيقِ (Muḥammadun fī bayti aṣ-ṣadīqi)"
        ],
        correctIndex: 0,
        explanation: "前置詞 fī の影響で1語目（家）は属格(i)。2語目（友人）は「ある友人」なのでアルなしの属格(in)になります。"
      }
    ]
  },
 {
    id: 119,
    level: "文法",
    category: "動詞の過去形",
    title: "Lesson 19: 動詞の過去形",
    contentPlain: "アラビア語の動詞（完了形＝過去形）のレッスンです。アラビア語の動詞は、「誰がやったか」によって語尾が細かく変わりますが、「語根」という3つの文字がベースになることを理解すれば簡単です。",
    
    imageUrls: [
      "/image/grammar/lesson19_1.jpg", 
      "/image/grammar/lesson19_2.jpg", 
      "/image/grammar/lesson19_3.jpg", 
      "/image/grammar/lesson19_4.jpg", 
      "/image/grammar/lesson19_5.jpg", 
      "/image/grammar/lesson19_6.jpg", 
      "/image/grammar/lesson19_7.jpg", 
      "/image/grammar/lesson19_8.jpg", 
      "/image/grammar/lesson19_9.jpg", 
      "/image/grammar/lesson19_10.jpg", 
      "/image/grammar/lesson19_11.jpg", 
      "/image/grammar/lesson19_12.jpg", 
      "/image/grammar/lesson19_13.jpg", 
      "/image/grammar/lesson19_14.jpg", 
      "/image/grammar/lesson19_15.jpg", 
      "/image/grammar/lesson19_16.jpg", 
      "/image/grammar/lesson19_17.jpg", 
      "/image/grammar/lesson19_18.jpg", 
      "/image/grammar/lesson19_19.jpg", 
      "/image/grammar/lesson19_20.jpg", 
      "/image/grammar/lesson19_21.jpg", 
    ],
    
    contentVoweled: "",
    sentences: [], 
    vocabList: [],
    
    questions: [
      {
        type: "grammar",
        text: "「彼は手紙を書きました」正しい形は？\n「___ الرِّسَالَةَ (___ ar-risālata)」",
        options: [
          "كَتَبَ (kataba)", // 正解
          "كَتَبَتْ (katabat)",
          "كَتَبْتُ (katabtu)",
          "كَتَبُوا (katabū)"
        ],
        correctIndex: 0,
        explanation: "「彼（三人称単数男性）」は動詞の基本形そのものです。"
      },
      {
        type: "grammar",
        text: "「私は大学へ行きました」\n「___ إِلَى الْجَامِعَةِ (___ ilā al-jāmi‘ati)」",
        options: [
          "ذَهَبَ (dhahaba)",
          "ذَهَبْتَ (dhahabta)",
          "ذَهَبْتُ (dhahabtu)", // 正解
          "ذَهَبْنَا (dhahabnā)"
        ],
        correctIndex: 2,
        explanation: "「私」の過去形語尾は「-tu」です。Dhahabtu (私は行った)。"
      },
      {
        type: "grammar",
        text: "「彼女はアラビア語を勉強しました」\n「___ الْعَرَبِيَّةَ (___ al-‘arabiyyata)」",
        options: [
          "دَرَسَ (darasa)",
          "دَرَسَتْ (darasat)", // 正解
          "دَرَسْتِ (darasti)",
          "دَرَسُوا (darasū)"
        ],
        correctIndex: 1,
        explanation: "「彼女」にするには、語尾に静止したター「-at」をつけます。"
      },
      {
        type: "grammar",
        text: "「あなた（男性）は水を飲みましたか？」\n「هَلْ ___ الْمَاءَ؟ (Hal ___ al-mā'a?)」",
        options: [
          "شَرِبْتَ (sharibta)", // 正解
          "شَرِبْتِ (sharibti)",
          "شَرِبَ (shariba)",
          "شَرِبْتُمْ (sharibtum)"
        ],
        correctIndex: 0,
        explanation: "「あなた（男）」の語尾は「-ta」です。"
      },
      {
        type: "grammar",
        text: "「あなた（女性）はレッスンを理解しましたか？」\n「هَلْ ___ الدَّرْسَ؟ (Hal ___ ad-darsa?)」",
        options: [
          "فَهِمْتَ (fahimta)",
          "فَهِمْتِ (fahimti)", // 正解
          "فَهِمَتْ (fahimat)",
          "فَهِمْنَا (fahimnā)"
        ],
        correctIndex: 1,
        explanation: "「あなた（女）」の語尾は「-ti」です。"
      },
      {
        type: "grammar",
        text: "「私たちは家に戻りました」\n「___ إِلَى الْبَيْتِ (___ ilā al-bayti)」",
        options: [
          "رَجَعْنَا (rajaʿnā)", // 正解
          "رَجَعْتُمْ (rajaʿtum)",
          "رَجَعُوا (rajaʿū)",
          "رَجَعْتُ (rajaʿtu)"
        ],
        correctIndex: 0,
        explanation: "「私たち」の語尾は「-nā」です。"
      },
      {
        type: "grammar",
        text: "「彼ら（男性たち）はパンを食べました」\n「___ الْخُبْزَ (___ al-khubza)」",
        options: [
          "أَكَلَ (akala)",
          "أَكَلَتْ (akalat)",
          "أَكَلُوا (akalū)", // 正解
          "أَكَلْنَ (akalna)"
        ],
        correctIndex: 2,
        explanation: "「彼ら」の語尾は「-ū」です。"
      },
      {
        type: "grammar",
        text: "「学生たちは学校へ行きました」正しい文は？",
        options: [
          "اَلطُّلَّابُ ذَهَبَ إِلَى الْمَدْرَسَةِ",
          "اَلطُّلَّابُ ذَهَبُوا إِلَى الْمَدْرَسَةِ (Aṭ-ṭullābu dhahabū ...)", // 正解
          "اَلطُّلَّابُ ذَهَبَتْ إِلَى الْمَدْرَسَةِ",
          "اَلطُّلَّابُ ذَهَبْنَ إِلَى الْمَدْرَسَةِ"
        ],
        correctIndex: 1,
        explanation: "主語（学生たち）が先に来る場合、動詞もそれに合わせて「彼ら（複数形）」にします。"
      },
      {
        type: "grammar",
        text: "「学生たちは学校へ行きました」正しい文は？",
        options: [
          "ذَهَبَ الطُّلَّابُ إِلَى الْمَدْرَسَةِ (Dhahaba aṭ-ṭullābu ...)", // 正解
          "ذَهَبُوا الطُّلَّابُ إِلَى الْمَدْرَسَةِ",
          "ذَهَبَتِ الطُّلَّابُ إِلَى الْمَدْرَسَةِ",
          "ذَهَبْنَ الطُّلَّابُ إِلَى الْمَدْرَسَةِ"
        ],
        correctIndex: 0,
        explanation: "動詞が文頭に来る場合、主語が複数であっても、動詞は「単数形（彼）」のままにするルールがあります。"
      },
      {
        type: "grammar",
        text: "「あなたたち（複数男性）はコーランを読みました」\n「___ الْقُرْآنَ (___ al-qur'āna)」",
        options: [
          "قَرَأْتُمْ (qara'tum)", // 正解
          "قَرَأْتُمَا (qara'tumā)",
          "قَرَأُوا (qara'ū)",
          "قَرَأْنَا (qara'nā)"
        ],
        correctIndex: 0,
        explanation: "「あなたたち（男）」の語尾は「-tum」です。"
      }
    ]
  },  
   {
    id: 120,
    level: "文法",
    category: "動詞の現在形",
    title: "Lesson 20: 動詞の現在形",
    contentPlain: "動詞の現在形のレッスンです。「～している」「（習慣的に）～する」という意味になります。完了形（過去）との最大の違いは、動詞の語頭と語尾の両方が変化することです。",
    
    imageUrls: [
      "/image/grammar/lesson20_1.jpg", 
      "/image/grammar/lesson20_2.jpg", 
      "/image/grammar/lesson20_3.jpg", 
      "/image/grammar/lesson20_4.jpg", 
      "/image/grammar/lesson20_5.jpg", 
      "/image/grammar/lesson20_6.jpg", 
      "/image/grammar/lesson20_7.jpg", 
      "/image/grammar/lesson20_8.jpg", 
      "/image/grammar/lesson20_9.jpg", 
      "/image/grammar/lesson20_10.jpg", 
      "/image/grammar/lesson20_11.jpg", 
      "/image/grammar/lesson20_12.jpg", 
      "/image/grammar/lesson20_13.jpg", 
    ],
    
    contentVoweled: "",
    sentences: [], 
    vocabList: [],
    
    questions: [
      {
        type: "grammar",
        text: "「彼は手紙を書きます（書いています）」\n「___ الرِّسَالَةَ (___ ar-risālata)」",
        options: [
          "يَكْتُبُ (yaktubu)", // 正解
          "تَكْتُبُ (taktubu)",
          "أَكْتُبُ (aktubu)",
          "نَكْتُبُ (naktubu)"
        ],
        correctIndex: 0,
        explanation: "「彼（三人称単数男性）」の現在形は、語頭に「ヤ (ya-)」を付けます。"
      },
      {
        type: "grammar",
        text: "「私はコーヒーを飲みます」\n「___ الْقَهْوَةَ (___ al-qahwata)」",
        options: [
          "أَشْرَبُ (ashrabu)", // 正解
          "يَشْرَبُ (yashrabu)",
          "تَشْرَبُ (tashrabu)",
          "نَشْرَبُ (nashrabu)"
        ],
        correctIndex: 0,
        explanation: "「私（一人称単数）」の現在形は、語頭に「ア (a-)」を付けます。"
      },
      {
        type: "grammar",
        // ★追加: 目的語（対格）を選ぶ問題
        text: "「彼はコーランを読みます」正しい目的語の形は？\n「يَقْرَأُ ___」",
        options: [
          "الْقُرْآنُ (al-qur'ānu)",
          "الْقُرْآنَ (al-qur'āna)", // 正解
          "الْقُرْآنِ (al-qur'āni)",
          "الْقُرْآنْ (al-qur'ān)"
        ],
        correctIndex: 1,
        explanation: "動詞の「目的語（～を）」は、対格（a / an）になります。"
      },
      {
        type: "grammar",
        text: "「彼女はアラビア語を勉強します」\n「___ الْعَرَبِيَّةَ (___ al-‘arabiyyata)」",
        options: [
          "يَدْرُسُ (yadrusu)",
          "تَدْرُسُ (tadrusu)", // 正解
          "أَدْرُسُ (adrusu)",
          "يَدْرُسُونَ (yadrusūna)"
        ],
        correctIndex: 1,
        explanation: "「彼女（三人称単数女性）」の現在形は、語頭に「タ (ta-)」を付けます。"
      },
      {
        type: "grammar",
        text: "「あなた（女性）は理解していますか？」\n（語尾の変化に注意！）",
        options: [
          "تَفْهَمُ (tafhamu)",
          "تَفْهَمِينَ (tafhamīna)", // 正解
          "تَفْهَمُونَ (tafhamūna)",
          "يَفْهَمُ (yafhamu)"
        ],
        correctIndex: 1,
        explanation: "「あなた（女）」は特別です。語頭の「タ」に加え、語尾に「～イーナ (-īna)」が付きます。"
      },
      {
        type: "grammar",
        // ★追加: 目的語（対格）を選ぶ問題
        text: "「私たちは（ある）本を書きます」正しい目的語の形は？\n「نَكْتُبُ ___」",
        options: [
          "كِتَابًا (kitāban)", // 正解
          "كِتَابٌ (kitābun)",
          "كِتَابٍ (kitābin)",
          "الْكِتَابُ (al-kitābu)"
        ],
        correctIndex: 0,
        explanation: "「本を」は目的語なので対格です。非限定（ある本）なのでタンウィーンの「an」になります。"
      },
      {
        type: "grammar",
        text: "「彼ら（男性たち）は昼食を食べます」\n「___ الْغَدَاءَ (___ al-ghadā'a)」",
        options: [
          "يَأْكُلُ (ya'kulu)",
          "يَأْكُلُونَ (ya'kulūna)", // 正解
          "تَأْكُلُونَ (ta'kulūna)",
          "نَأْكُلُ (na'kulu)"
        ],
        correctIndex: 1,
        explanation: "「彼ら」は語頭の「ヤ」に加え、語尾に「～ウーナ (-ūna)」が付きます。"
      },
      {
        type: "grammar",
        text: "「学生たちは大学へ行きます」正しい文は？",
        options: [
          "اَلطُّلَّابُ يَذْهَبُ ... (Aṭ-ṭullābu yadhhabu)",
          "اَلطُّلَّابُ يَذْهَبُونَ إِلَى الْجَامِعَةِ (Aṭ-ṭullābu yadhhabūna ilā al-jāmi‘ati)", // 正解
          "اَلطُّلَّابُ تَذْهَبُونَ ... (Aṭ-ṭullābu tadhhabūna)",
          "اَلطُّلَّابُ نَذْهَبُ ... (Aṭ-ṭullābu nadhhabu)"
        ],
        correctIndex: 1,
        explanation: "主語（学生たち）が先に来る場合、動詞も「彼ら（複数）」の形にします。"
      },
      {
        type: "grammar",
        text: "「学生たちは大学へ行きます」正しい文は？",
        options: [
          "يَذْهَبُ الطُّلَّابُ إِلَى الْجَامِعَةِ (Yadhhabu aṭ-ṭullābu ilā al-jāmi‘ati)", // 正解
          "يَذْهَبُونَ الطُّلَّابُ ... (Yadhhabūna aṭ-ṭullābu)",
          "تَذْهَبُ الطُّلَّابُ ... (Tadhhabu aṭ-ṭullābu)",
          "أَذْهَبُ الطُّلَّابُ ... (Adhhabu aṭ-ṭullābu)"
        ],
        correctIndex: 0,
        explanation: "動詞が文頭に来る場合、主語が複数であっても動詞は「彼（単数）」の形のまま使います。"
      },
      {
        type: "grammar",
        text: "「あなたたち（複数男性）は宿題を書きますか？」\n「هَلْ ___ الْوَاجِبَ؟ (Hal ___ al-wājiba?)」",
        options: [
          "تَكْتُبُونَ (taktubūna)", // 正解
          "يَكْتُبُونَ (yaktubūna)",
          "تَكْتُبُ (taktubu)",
          "نَكْتُبُ (naktubu)"
        ],
        correctIndex: 0,
        explanation: "「あなたたち（男）」は語頭の「タ」に加え、語尾に「～ウーナ (-ūna)」が付きます。"
      }
    ]
  },
    {
    id: 121,
    level: "文法",
    category: "人称代名詞（属格、対格）",
    title: "Lesson 21: 人称代名詞（属格、対格）",
    contentPlain: "人称代名詞の接尾形（くっつく代名詞）のレッスンです。これらは、単語の語尾にピタッとくっついて、「～の（私の、彼の）」や「～を（私を、彼を）」という役割を果たします。",
    
    imageUrls: [
      "/image/grammar/lesson21_1.jpg", 
      "/image/grammar/lesson21_2.jpg", 
      "/image/grammar/lesson21_3.jpg", 
      "/image/grammar/lesson21_4.jpg", 
      "/image/grammar/lesson21_5.jpg", 
      "/image/grammar/lesson21_6.jpg", 
    ],
    
    contentVoweled: "",
    sentences: [], 
    vocabList: [],
    
    questions: [
      {
        type: "grammar",
        text: "「これは私の本です」正しい形は？\n「هَذَا ___ (Hādhā ___)」",
        options: [
          "كِتَابِي (kitābī)", // 正解
          "كِتَابُكَ (kitābuka)",
          "كِتَابُهُ (kitābuhu)",
          "كِتَابُهَا (kitābuhā)"
        ],
        correctIndex: 0,
        explanation: "名詞に付く「私の～」は、語尾に「イー (-ī)」を付けます。"
      },
      {
        type: "grammar",
        text: "「彼女の名前はファーティマです」\n「___ فَاطِمَة (___ Fāṭima)」",
        options: [
          "اِسْمُهَا (Ismuhā)", // 正解
          "اِسْمُهُ (Ismuhu)",
          "اِسْمُكِ (Ismuki)",
          "اِسْمِي (Ismī)"
        ],
        correctIndex: 0,
        explanation: "「彼女の～」は語尾に「ハー (-hā)」を付けます。"
      },
      {
        type: "grammar",
        text: "「私は私の名前に（向かって）書きました」\n「كَتَبْتُ إِلَى ___ (Katabtu ilā ___)」",
        options: [
          "اِسْمِي (ismī)", // 正解
          "اِسْمَنِي (ismani)",
          "اِسْمُكَ (ismuka)",
          "اِسْمِهِ (ismihi)"
        ],
        correctIndex: 0,
        explanation: "名詞に付く「私の～」は、語尾に「イー (-ī)」を付けます。"
      },
      {
        type: "grammar",
        text: "「彼は自分の（彼の）本を見ました」\n「نَظَرَ فِي ___ (Naẓara fī ___)」",
        options: [
          "كِتَابِهِ (kitābihi)", // 正解
          "كِتَابُهُ (kitābuhu)",
          "كِتَابَهُ (kitābahu)",
          "كِتَابُكَ (kitābuka)"
        ],
        correctIndex: 0,
        explanation: "「彼の～」は「フ (-hu)」ですが、直前の母音が i (fī) なので、発音がつられて「ヒ (-hi)」になります。"
      },
      {
        type: "grammar",
        text: "「彼は宿題（男性名詞）を書きましたか？ はい、彼は『それ』を書きました」\n「هَلْ كَتَبَ الْوَاجِبَ؟ نَعَمْ، ___ (Na‘am, ___)」",
        options: [
          "كَتَبَهُ (katabahu)", // 正解
          "كَتَبَهَا (katabahā)",
          "كَتَبَتْهُ (katabathu)",
          "كَتَبُوهُ (katabūhu)"
        ],
        correctIndex: 0,
        explanation: "男性名詞（al-wājib）を指す「それ」は、動詞の後に「フ (-hu)」を付けます。"
      },
      {
        type: "grammar",
        text: "「彼は手紙（女性名詞）を書きましたか？ はい、彼は『それ』を書きました」\n「هَلْ كَتَبَ الرِّسَالَةَ؟ نَعَمْ، ___ (Na‘am, ___)」",
        options: [
          "كَتَبَهَا (katabahā)", // 正解
          "كَتَبَهُ (katabahu)",
          "كَتَبَتْهَا (katabathā)",
          "كَتَبُوهَا (katabūhā)"
        ],
        correctIndex: 0,
        explanation: "女性名詞（ar-risāla）を指す「それ」は、動詞の後に「ハー (-hā)」を付けます。"
      },
      {
        type: "grammar",
        text: "「彼は彼女を見ました（＝彼女の方を見た）」\n「نَظَرَ إِلَى___ (Naẓara ilā___)」",
        options: [
          "ـهَا (-hā) → إِلَيْهَا (ilayhā)", // 正解
          "ـهُ (-hu) → إِلَيْهِ (ilayhi)",
          "ـكَ (-ka) → إِلَيْكَ (ilayka)",
          "ـهُمْ (-hum) → إِلَيْهِمْ (ilayhim)"
        ],
        correctIndex: 0,
        explanation: "動詞 nazara（見る）は前置詞 ilā を伴います。「彼女」は hā ですが、ilā とくっつくと ilayhā になります。"
      },
      {
        type: "grammar",
        text: "「これはあなた（男性）のもの（＝あなたにとっての）ですか？」\n「هَلْ هَذَا ___؟ (Hal hādhā ___?)」",
        options: [
          "لَكَ (laka)", // 正解
          "لَكِ (laki)",
          "لَهُ (lahu)",
          "لِي (lī)"
        ],
        correctIndex: 0,
        explanation: "前置詞（li = ～のための）に付く場合も同じ変化をします。男性相手の「あなた」は「カ (-ka)」です。"
      }
    ]
  },
{
    id: 122,
    level: "文法",
    category: "規則女性複数形",
    title: "Lesson 22: 規則女性複数形",
    contentPlain: "女性の複数形「規則女性複数（～アート）」のレッスンです。この形の最大の特徴は「対格（～を）」になっても「ア (a)」の音を使わないという点です。つまり、「対格」と「属格」が全く同じ形になります。",
    
    imageUrls: [
      "/image/grammar/lesson22_1.jpg", 
      "/image/grammar/lesson22_2.jpg", 
      "/image/grammar/lesson22_3.jpg", 
      "/image/grammar/lesson22_4.jpg", 
      "/image/grammar/lesson22_5.jpg", 
      "/image/grammar/lesson22_6.jpg", 
      "/image/grammar/lesson22_7.jpg", 
      "/image/grammar/lesson22_8.jpg", 
      "/image/grammar/lesson22_9.jpg", 
    ],
    
    contentVoweled: "",
    sentences: [], 
    vocabList: [],
    
    questions: [
      {
        type: "grammar",
        text: "「女子学生たちは大学へ行きました（主格）」正しい形は？\n「ذَهَبَتِ ___ إِلَى الْجَامِعَةِ」",
        options: [
          "الطَّالِبَاتُ (aṭ-ṭālibātu)", // 正解
          "الطَّالِبَاتِ (aṭ-ṭālibāti)",
          "الطَّالِبَاتَ (aṭ-ṭālibāta)",
          "الطَّالِبَةُ (aṭ-ṭālibatu)"
        ],
        correctIndex: 0,
        explanation: "主語（～が）の場合は、通常通り「ウ (-u)」の音になります。"
      },
      {
        type: "grammar",
        text: "【最重要】「私は女性の先生たちを見ました（対格）」\n「رَأَيْتُ ___ (Ra'aytu ___)」",
        options: [
          "الْمُعَلِّمَاتَ (al-mu‘allimāta)",
          "الْمُعَلِّمَاتُ (al-mu‘allimātu)",
          "الْمُعَلِّمَاتِ (al-mu‘allimāti)", // 正解
          "الْمُعَلِّمَةَ (al-mu‘allimata)"
        ],
        correctIndex: 2,
        explanation: "これが最大の特徴です！規則女性複数形は、対格（～を）であっても絶対に「ア」にならず、「イ (-i)」の音になります。"
      },
      {
        type: "grammar",
        text: "「彼は（いくつかの）言語を勉強しました（対格・非限定）」\n「دَرَسَ ___ (Darasa ___)」",
        options: [
          "لُغَاتًا (lughātan)",
          "لُغَاتٍ (lughātin)", // 正解
          "لُغَاتٌ (lughātun)",
          "لُغَةً (lughatan)"
        ],
        correctIndex: 1,
        explanation: "非限定の「～を」であっても、「アン (-an)」ではなく「イン (-in)」になります。"
      },
      {
        type: "grammar",
        text: "「私は（複数の）空港へ行きました（属格）」\n「ذَهَبْتُ إِلَى ___ (Dhahabtu ilā ___)」",
        options: [
          "الْمَطَارَاتِ (al-maṭārāti)", // 正解
          "الْمَطَارَاتَ (al-maṭārāta)",
          "الْمَطَارَاتُ (al-maṭārātu)",
          "الْمَطَارِ (al-maṭāri)"
        ],
        correctIndex: 0,
        explanation: "前置詞の後ろ（属格）は通常通り「イ (-i)」です。つまり、対格と属格が全く同じ形になります。"
      },
      {
        type: "grammar",
        text: "「彼は車（複数）を買いました」正しい文を選んでください。",
        options: [
          "اِشْتَرَى سَيَّارَاتٍ (Ishtarā sayyārātin)", // 正解
          "اِشْتَرَى سَيَّارَاتًا (Ishtarā sayyārātan)",
          "اِشْتَرَى سَيَّارَاتٌ (Ishtarā sayyārātun)",
          "اِشْتَرَى السَّيَّارَاتَ (Ishtarā as-sayyārāta)"
        ],
        correctIndex: 0,
        explanation: "目的語なので対格です。女性複数は「ア」を嫌うため、非限定なら「イン (-in)」となります。"
      }
    ]
  },
{
    id: 123,
    level: "文法",
    category: "名詞文の否定",
    title: "Lesson 23: ライサの使い方",
    contentPlain: "名詞文の否定形「AはBではありません」と言うための特殊動詞、「ライサ 」レッスン。これは文法的に「動詞の過去形」と同じ変化をしますが、意味は「現在」です。そして最大の特徴は、B（述語）の語尾を「アン (an)」に変えるという強力なルールを持っていることです。",
    
    imageUrls: [
      "/image/grammar/lesson23_1.jpg", 
      "/image/grammar/lesson23_2.jpg", 
      "/image/grammar/lesson23_3.jpg", 
      "/image/grammar/lesson23_4.jpg", 
      "/image/grammar/lesson23_5.jpg", 
    ],
    
    contentVoweled: "",
    sentences: [], 
    vocabList: [],
    
    questions: [
      {
        type: "grammar",
        text: "「その家は大きくありません」正しい形は？",
        options: [
          "لَيْسَ الْبَيْتُ كَبِيرًا (Laysa al-baytu kabīran)", // 正解
          "لَيْسَ الْبَيْتُ كَبِيرٌ (Laysa al-baytu kabīrun)",
          "لَيْسَ الْبَيْتُ كَبِيرٍ (Laysa al-baytu kabīrin)",
          "لَيْسَتِ الْبَيْتُ كَبِيرًا (Laysati al-baytu kabīran)"
        ],
        correctIndex: 0,
        explanation: "ライサが入ると、述語（大きい）は対格になり、語尾が「アン (-an)」に変わります。"
      },
      {
        type: "grammar",
        text: "「その車は新しくありません」",
        options: [
          "لَيْسَ السَّيَّارَةُ جَدِيدَةً (Laysa as-sayyāratu jadīdatan)",
          "لَيْسَتِ السَّيَّارَةُ جَدِيدَةٌ (Laysati as-sayyāratu jadīdatun)",
          "لَيْسَتِ السَّيَّارَةُ جَدِيدَةً (Laysati as-sayyāratu jadīdatan)", // 正解
          "لَيْسَتِ السَّيَّارَةَ جَدِيدَةً (Laysati as-sayyārata jadīdatan)"
        ],
        correctIndex: 2,
        explanation: "主語が女性なので動詞は「ライサト (laysat)」になり、述語は対格「アン (-an)」になります。"
      },
      {
        type: "grammar",
        text: "【重要】「女性の先生たちは忙しくありません」",
        options: [
          "لَيْسَتِ الْمُعَلِّمَاتُ مَشْغُولَاتًا (mashghūlātan)",
          "لَيْسَتِ الْمُعَلِّمَاتُ مَشْغُولَاتٍ (mashghūlātin)", // 正解
          "لَيْسَتِ الْمُعَلِّمَاتُ مَشْغُولَاتٌ (mashghūlātun)",
          "لَيْسَ الْمُعَلِّمَاتُ مَشْغُولَاتٍ (Laysa...)"
        ],
        correctIndex: 1,
        explanation: "規則女性複数形は「ア (a)」の音を嫌うため、対格になっても「イン (-in)」という音になります。「〜タン (-ātan)」という形は存在しません！"
      },
      {
        type: "grammar",
        text: "【重要】「学生たち（彼ら）は小さくありません」",
        options: [
          "اَلطُّلَّابُ لَيْسَ صِغَارًا (Aṭ-ṭullābu laysa ṣighāran)",
          "اَلطُّلَّابُ لَيْسُوا صِغَارًا (Aṭ-ṭullābu laysū ṣighāran)", // 正解
          "اَلطُّلَّابُ لَيْسُوا صِغَارٌ (Aṭ-ṭullābu laysū ṣighārun)",
          "اَلطُّلَّابُ لَسْنَ صِغَارًا (Aṭ-ṭullābu lasna ṣighāran)"
        ],
        correctIndex: 1,
        explanation: "主語が先に来ているので、ライサも「彼ら」に合わせて「ライ スー (laysū)」と複数形にします。"
      },
      {
        type: "grammar",
        text: "「私は医者ではありません」",
        options: [
          "لَيْسَ أَنَا طَبِيبًا (Laysa ana ṭabīban)",
          "لَسْتَ طَبِيبًا (Lasta ṭabīban)",
          "لَسْتُ طَبِيبًا (Lastu ṭabīban)", // 正解
          "لَسْنَا طَبِيبًا (Lasnā ṭabīban)"
        ],
        correctIndex: 2,
        explanation: "「私」に対応する形は「ラストゥ (lastu)」です。述語は忘れずに「アン (-an)」にします。"
      }
    ]
  },
{
    id: 124,
    level: "文法",
    category: "名詞文の過去、過去進行形",
    title: "Lesson 24: カーナの使い方",
    contentPlain: "「～でした」と「過去進行形」を表す「カーナ 」です。これはアラビア語で最も重要な単語の一つです。文法ルールは「ライサ」と全く同じで、名詞文の場合は「B（述語）を対格（アン）に変える」という力を持っています。",
    
    imageUrls: [
      "/image/grammar/lesson24_1.jpg", 
      "/image/grammar/lesson24_2.jpg", 
      "/image/grammar/lesson24_3.jpg", 
      "/image/grammar/lesson24_4.jpg", 
      "/image/grammar/lesson24_5.jpg", 
    ],
    
    contentVoweled: "",
    sentences: [], 
    vocabList: [],
    
    questions: [
      {
        type: "grammar",
        text: "「天気が寒かったです（The weather was cold）」",
        options: [
          "كَانَ الْجَوُّ بَارِدًا (Kāna al-jawwu bāridan)", // 正解
          "كَانَ الْجَوُّ بَارِدٌ (Kāna al-jawwu bāridun)",
          "كَانَ الْجَوُّ بَارِدٍ (Kāna al-jawwu bāridin)",
          "كَانَتِ الْجَوُّ بَارِدًا (Kānati al-jawwu bāridan)"
        ],
        correctIndex: 0,
        explanation: "カーナが入ると、述語（寒い）は対格になり「アン (-an)」に変わります。"
      },
      {
        type: "grammar",
        text: "「その車は新しかったです（The car was new）」",
        options: [
          "كَانَتِ السَّيَّارَةُ جَدِيدَةً (Kānati as-sayyāratu jadīdatan)", // 正解
          "كَانَتِ السَّيَّارَةُ جَدِيدَةٌ (Kānati as-sayyāratu jadīdatun)",
          "كَانَ السَّيَّارَةُ جَدِيدَةً (Kāna as-sayyāratu jadīdatan)",
          "كَانَتِ السَّيَّارَةَ جَدِيدَةً (Kānati as-sayyārata jadīdatan)"
        ],
        correctIndex: 0,
        explanation: "主語（車）が女性なので、動詞も「カーナト (kānat)」にします。述語は対格（-an）です。"
      },
      {
        type: "grammar",
        text: "「私は学生でした（I was a student）」",
        options: [
          "كُنْتُ طَالِبًا (Kuntu ṭāliban)", // 正解
          "كَانَ أَنَا طَالِبًا (Kāna ana ṭāliban)",
          "كُنْتُ طَالِبٌ (Kuntu ṭālibun)",
          "كُنْتَ طَالِبًا (Kunta ṭāliban)"
        ],
        correctIndex: 0,
        explanation: "「私」のカーナ活用は「クントゥ (kuntu)」です。"
      },
      {
        type: "grammar",
        text: "【重要】「先生たち（女性）は忙しかったです」",
        options: [
          "كَانَتِ الْمُعَلِّمَاتُ مَشْغُولَاتًا (mashghūlātan)",
          "كَانَتِ الْمُعَلِّمَاتُ مَشْغُولَاتٍ (mashghūlātin)", // 正解
          "كَانَتِ الْمُعَلِّمَاتُ مَشْغُولَاتٌ (mashghūlātun)",
          "كَانَ الْمُعَلِّمَاتُ مَشْغُولَاتٍ (Kāna...)"
        ],
        correctIndex: 1,
        explanation: "述語が「規則女性複数」の場合、対格になっても「アン」ではなく「イン (-in)」になります。"
      },
      {
        type: "grammar",
        text: "「彼は本を読んでいました（He was reading）」\n（ヒント：過去進行形＝カーナ＋現在形）",
        options: [
          "كَانَ يَقْرَأُ الْكِتَابَ (Kāna yaqra'u al-kitāba)", // 正解
          "كَانَ قَرَأَ الْكِتَابَ (Kāna qara'a al-kitāba)",
          "كَانَ يَقْرَأَ الْكِتَابَ (Kāna yaqra'a al-kitāba)",
          "كَانَ يَقْرَأُ الْكِتَابُ (Kāna yaqra'u al-kitābu)"
        ],
        correctIndex: 0,
        explanation: "「〜していました（過去進行）」は、「カーナ ＋ 現在形動詞」で作ります。動詞の後ろの目的語（本）は対格です。"
      },
      {
        type: "grammar",
        text: "「学生たち（複数）は勉強していました」",
        options: [
          "اَلطُّلَّابُ كَانَ يَدْرُسُونَ",
          "اَلطُّلَّابُ كَانُوا يَدْرُسُونَ (Aṭ-ṭullābu kānū yadrusūna)", // 正解
          "اَلطُّلَّابُ كُنْتُمْ يَدْرُسُونَ",
          "اَلطُّلَّابُ كَانُوا يَدْرُسُ (Aṭ-ṭullābu kānū yadrusu)"
        ],
        correctIndex: 1,
        explanation: "主語（学生たち）が先に来た場合、カーナも「彼ら（カーヌー）」と複数形にします。"
      },
      {
        type: "grammar",
        text: "「学生たち（複数）は勉強していました」\n（ヒント：カーナが先 → 単数のまま）",
        options: [
          "كَانَ الطُّلَّابُ يَدْرُسُونَ (Kāna aṭ-ṭullābu yadrusūna)", // 正解
          "كَانُوا الطُّلَّابُ يَدْرُسُونَ (Kānū aṭ-ṭullābu yadrusūna)",
          "كَانَتِ الطُّلَّابُ يَدْرُسُونَ",
          "كَانَ الطُّلَّابُ يَدْرُسُ (Kāna aṭ-ṭullābu yadrusu)"
        ],
        correctIndex: 0,
        explanation: "カーナが文頭に来る場合、主語が複数でもカーナは単数形（Kāna）のまま使います。"
      },
      {
        type: "grammar",
        text: "「男の子は家の中にいました（The boy was in the house）」",
        options: [
          "كَانَ الْوَلَدُ فِي الْبَيْتِ (Kāna al-waladu fī al-bayti)", // 正解
          "كَانَ الْوَلَدُ فِي الْبَيْتَ (Kāna al-waladu fī al-bayta)",
          "كَانَ الْوَلَدُ فِي الْبَيْتُ (Kāna al-waladu fī al-baytu)",
          "كَانَ فِي الْبَيْتِ الْوَلَدَ (Kāna fī al-bayti al-walada)"
        ],
        correctIndex: 0,
        explanation: "述語が「前置詞句（家の中に）」の場合、見た目の格変化は起こりません。前置詞の後ろは常に属格（i）のままです。"
      },
      {
        type: "grammar",
        text: "「あなたたちは幸せでしたか？」",
        options: [
          "هَلْ كُنْتُمْ مَسْرُورِينَ؟ (Hal kuntum masrūrīna?)", // 正解
          "هَلْ كُنْتُمْ مَسْرُورُونَ؟ (Hal kuntum masrūrūna?)",
          "هَلْ كُنْتُمْ مَسْرُورًا؟ (Hal kuntum masrūran?)",
          "هَلْ كَانُوا مَسْرُورِينَ؟ (Hal kānū masrūrīna?)"
        ],
        correctIndex: 0,
        explanation: "「あなたたち（複数）」なので述語も複数形にします。さらにカーナの述語は対格になるため、規則男性複数の対格「イーナ (-īna)」を使います。"
      },
      {
        type: "grammar",
        text: "「彼女は料理をしていました」",
        options: [
          "كَانَتْ تَطْبُخُ (Kānat taṭbukhu)", // 正解
          "كَانَتْ يَطْبُخُ (Kānat yaṭbukhu)",
          "كَانَ تَطْبُخُ (Kāna taṭbukhu)",
          "كَانَتْ طَبَخَتْ (Kānat ṭabakhat)"
        ],
        correctIndex: 0,
        explanation: "「彼女」なのでカーナは Kānat、動詞の現在形も「彼女（Ta-）」で合わせます。"
      }
    ]
  },
{
    id: 125,
    level: "文法",
    category: "数字（1〜10）",
    title: "Lesson 25: 1から10までの数字の文法",
    contentPlain: "アラビア語学習者の「最大の難関」とも言われる「数詞（数字の文法）」のレッスンです。混乱を招くのでここでは1から10までを学びます。アラビア語の数字は、「数える物が男か女か」によって形がコロコロ変わり、さらに「後ろに来る名詞の形」も数によって変わります。",
    
    imageUrls: [
      "/image/grammar/lesson25_1.jpg", 
      "/image/grammar/lesson25_2.jpg", 
      "/image/grammar/lesson25_3.jpg", 
      "/image/grammar/lesson25_4.jpg", 
      "/image/grammar/lesson25_5.jpg", 
      "/image/grammar/lesson25_6.jpg", 
      "/image/grammar/lesson25_7.jpg", 
      "/image/grammar/lesson25_8.jpg", 
    ],
    
    contentVoweled: "",
    sentences: [], 
    vocabList: [],
    
    questions: [
      {
        type: "grammar",
        text: "「一人の男の子（One boy）」正しい形は？\n（ヒント：1と2は形容詞と同じルール）",
        options: [
          "وَلَدٌ وَاحِدٌ (waladun wāḥidun)", // 正解
          "وَلَدٌ وَاحِدَةٌ (waladun wāḥidatun)",
          "وَاحِدٌ وَلَدٌ (wāḥidun waladun)",
          "وَلَدٍ وَاحِدٍ (waladin wāḥidin)"
        ],
        correctIndex: 0,
        explanation: "1と2は形容詞のように名詞の後ろに置き、性別を一致させます。男の子（男性）なので wāḥidun です。"
      },
      {
        type: "grammar",
        text: "「一人の娘（One daughter）」正しい形は？\n（ヒント：娘 bint は女性名詞）",
        options: [
          "بِنْتٌ وَاحِدٌ (bintun wāḥidun)",
          "بِنْتٌ وَاحِدَةٌ (bintun wāḥidatun)", // 正解
          "وَاحِدَةٌ بِنْتٌ (wāḥidatun bintun)",
          "بِنْتٍ وَاحِدَةٍ (bintin wāḥidatin)"
        ],
        correctIndex: 1,
        explanation: "名詞が女性なら、数字も女性形（wāḥidatun）にします。"
      },
      {
        type: "grammar",
        text: "【重要】「3冊の本（Three books）」正しい形は？\n（ヒント：本 kitāb は男性名詞）",
        options: [
          "ثَلَاثَةُ كُتُبٍ (thalāthatu kutubin)", // 正解
          "ثَلَاثُ كُتُبٍ (thalāthu kutubin)",
          "ثَلَاثَةُ كِتَابٍ (thalāthatu kitābin)",
          "كُتُبٌ ثَلَاثَةٌ (kutubun thalāthatun)"
        ],
        correctIndex: 0,
        explanation: "3〜10の数字は「性別が逆」になります。本（男性）を数える場合、数字は「女性形（ターマルブータ付）」にします。また、後ろの名詞は「複数・属格」です。"
      },
      {
        type: "grammar",
        text: "【重要】「5台の車（Five cars）」正しい形は？\n（ヒント：車 sayyāra は女性名詞）",
        options: [
          "خَمْسَةُ سَيَّارَاتٍ (khamsatu sayyārātin)",
          "خَمْسُ سَيَّارَاتٍ (khamsu sayyārātin)", // 正解
          "خَمْسُ سَيَّارَةٍ (khamsu sayyāratin)",
          "سَيَّارَاتٌ خَمْسٌ (sayyārātun khamsun)"
        ],
        correctIndex: 1,
        explanation: "車（女性）を数える場合、数字は「男性形（ターマルブータなし）」を使います。"
      },
      {
        type: "grammar",
        text: "「私は4本のペンを買いました（I bought 4 pens）」\n（ヒント：ペン qalam は男性名詞／目的語は対格）",
        options: [
          "اِشْتَرَيْتُ أَرْبَعَةَ أَقْلَامٍ (arba‘ata aqlāmin)", // 正解
          "اِشْتَرَيْتُ أَرْبَعَةُ أَقْلَامٍ (arba‘atu aqlāmin)",
          "اِشْتَرَيْتُ أَرْبَعَ أَقْلَامٍ (arba‘a aqlāmin)",
          "اِشْتَرَيْتُ أَرْبَعَةٍ أَقْلَامٍ (arba‘ati aqlāmin)"
        ],
        correctIndex: 0,
        explanation: "ペン（男性）なので数字は女性形（arba‘a）。さらに「～を」という目的語なので、対格（ア / a）になり、arba‘ata となります。"
      },
      {
        type: "grammar",
        text: "「（ある）家に、7人の男たちがいます」\n（ヒント：男 rajul は男性名詞／主語は主格）",
        options: [
          "فِي بَيْتٍ سَبْعَةُ رِجَالٍ (sab‘atu rijālin)", // 正解
          "فِي بَيْتٍ سَبْعُ رِجَالٍ (sab‘u rijālin)",
          "فِي بَيْتٍ سَبْعَةَ رِجَالٍ (sab‘ata rijālin)",
          "فِي بَيْتٍ سَبْعَةِ رِجَالٍ (sab‘ati rijālin)"
        ],
        correctIndex: 0,
        explanation: "男（男性）なので数字は女性形（sab‘a）。文の主語なので主格（ウ / u）になり、sab‘atu となります。"
      },
      {
        type: "grammar",
        text: "「6日間で（in 6 days）」前置詞の後の変化は？\n（ヒント：日 yawm は男性名詞）",
        options: [
          "فِي سِتَّةِ أَيَّامٍ (fī sittati ayyāmin)", // 正解
          "فِي سِتَّةَ أَيَّامٍ (fī sittata ayyāmin)",
          "فِي سِتُّ أَيَّامٍ (fī sittu ayyāmin)",
          "فِي سِتَّةُ أَيَّامٍ (fī sittatu ayyāmin)"
        ],
        correctIndex: 0,
        explanation: "日（男性）なので数字は女性形（sitta）。前置詞 fī の後ろなので属格（イ / i）になり、sittati となります。"
      },
      {
        type: "grammar",
        text: "「私は9つの大学を見ました」\n（ヒント：大学 jāmi‘a は女性名詞）",
        options: [
          "رَأَيْتُ تِسْعَةَ جَامِعَاتٍ (tis‘ata jāmi‘ātin)",
          "رَأَيْتُ تِسْعَ جَامِعَاتٍ (tis‘a jāmi‘ātin)", // 正解
          "رَأَيْتُ تِسْعُ جَامِعَاتٍ (tis‘u jāmi‘ātin)",
          "رَأَيْتُ تِسْعًا جَامِعَاتٍ (tis‘an jāmi‘ātin)"
        ],
        correctIndex: 1,
        explanation: "大学（女性）なので数字は男性形（tis‘ / ターマルブータなし）。目的語なので対格（ア）となり、tis‘a となります。"
      },
      {
        type: "grammar",
        text: "「10リヤル（10 Riyals）」正しい形は？\n（ヒント：リヤル riyāl は男性名詞）",
        options: [
          "عَشَرَةُ رِيَالَاتٍ (‘asharatu riyālātin)", // 正解
          "عَشْرُ رِيَالَاتٍ (‘ashru riyālātin)",
          "عَشَرَةُ رِيَالٍ (‘asharatu riyālin)",
          "عَشَرَةَ رِيَالَاتٍ (‘asharata riyālātin)"
        ],
        correctIndex: 0,
        explanation: "リヤル（男性）なので数字は女性形（‘ashara）。単独で言う場合や主語の場合は主格（u）を使います。※リヤルの複数形は riyālāt ですが、性別判断は「単数形」で行います。"
      },
 {
        type: "grammar",
        text: "数えられる名詞（数詞の後ろ）の形として正しいのは？\n「3つの家：ثَلَاثَةُ ___」",
        options: [
          "بُيُوتٌ (buyūtun - 複数主格)",
          "بَيْتٍ (baytin - 単数属格)",
          "بُيُوتٍ (buyūtin - 複数属格)", // 正解
          "بُيُوتًا (buyūtan - 複数対格)"
        ],
        correctIndex: 2,
        explanation: "3〜10の数字の後ろに来る名詞は、必ず「複数形」かつ「属格（in）」になります。"
      }
    ]
  },
  {
    id: 126,
    level: "文法",
    category: "接続法（〜すること、未来の否定）",
    title: "Lesson 26: 接続法",
    contentPlain: "特定の単語（アン、ランなど）が動詞の前に来ると、動詞の語尾が「ウ (u)」から「ア (a)」に変わったり、「複数形のン (n)」が消えたりします。",
    
    imageUrls: [
      "/image/grammar/lesson26_1.jpg", 
      "/image/grammar/lesson26_2.jpg", 
      "/image/grammar/lesson26_3.jpg", 
      "/image/grammar/lesson26_4.jpg", 
      "/image/grammar/lesson26_5.jpg", 
      "/image/grammar/lesson26_6.jpg", 
      "/image/grammar/lesson26_7.jpg",  
    ],
    
    contentVoweled: "",
    sentences: [], 
    vocabList: [],
    
    questions: [
      {
        type: "grammar",
        text: "「私は市場へ行きたいです」\n（直訳：私は市場へ行くことを欲する）\n「أُرِيدُ أَنْ ___ إِلَى السُّوقِ」",
        options: [
          "أَذْهَبُ (adhhabu)",
          "أَذْهَبَ (adhhaba)", // 正解
          "أَذْهَبْ (adhhab)",
          "أَذْهَبِ (adhhabi)"
        ],
        correctIndex: 1,
        explanation: "「アン (an)」の後ろに来る動詞は接続法になり、語尾が「ウ (u)」から「ア (a)」に変わります。"
      },
      {
        type: "grammar",
        text: "「彼は明日、決して勉強しないでしょう（未来否定）」\n「هُوَ لَنْ ___ غَدًا」",
        options: [
          "يَدْرُسُ (yadrusu)",
          "يَدْرُسَ (yadrusa)", // 正解
          "يَدْرُسْ (yadrus)",
          "يَدْرُسِي (yadrusī)"
        ],
        correctIndex: 1,
        explanation: "未来を強く否定する「ラン (lan)」の後ろも接続法（a）になります。"
      },
      {
        type: "grammar",
        text: "「彼ら（男性複数）は座りたがっています」\n「يُرِيدُونَ أَنْ ___」",
        options: [
          "يَجْلِسُونَ (yajlisūna)",
          "يَجْلِسُوا (yajlisū)", // 正解
          "يَجْلِسَا (yajlisā)",
          "يَجْلِسْنَ (yajlisna)"
        ],
        correctIndex: 1,
        explanation: "通常の現在形は「～ウーナ (-ūna)」ですが、接続法になると最後の「ナ (n)」が消えて「～ウー (-ū)」になります。"
      },
      {
        type: "grammar",
        text: "「あなた（女性）は決して行かないでしょう」\n「أَنْتِ لَنْ ___」",
        options: [
          "تَذْهَبِينَ (tadhhabīna)",
          "تَذْهَبِي (tadhhabī)", // 正解
          "تَذْهَبَا (tadhhabā)",
          "تَذْهَبَ (tadhhaba)"
        ],
        correctIndex: 1,
        explanation: "あなた（女）の「～イーナ (-īna)」も、接続法になると「ナ (n)」が消えて「～イー (-ī)」になります。"
      },
      {
        type: "grammar",
        text: "「私たちは水を飲みたいです」\n「نُرِيدُ أَنْ ___ الْمَاءَ」",
        options: [
          "نَشْرَبُ (nashrabu)",
          "نَشْرَبَ (nashraba)", // 正解
          "نَشْرَبْ (nashrab)",
          "نَشْرَبِ (nashrabi)"
        ],
        correctIndex: 1,
        explanation: "私たち（We）の動詞も、基本ルール通り語尾を「ア (a)」に変えます。"
      }
    ]
  }, 
  {
    id: 127,
    level: "文法",
    category: "要求法（禁止・動詞の過去否定",
    title: "Lesson 27: 要求法",
    contentPlain: "「～しなかった（過去否定）」や「～するな（禁止）」と言う時に使います。前の接続法と似ていますが、こちらは、「無音(スクーンにする）」のが特徴です。",
    
    imageUrls: [
      "/image/grammar/lesson27_1.jpg", 
      "/image/grammar/lesson27_2.jpg", 
      "/image/grammar/lesson27_3.jpg", 
      "/image/grammar/lesson27_4.jpg", 
      "/image/grammar/lesson27_5.jpg", 
      "/image/grammar/lesson27_6.jpg", 
      "/image/grammar/lesson27_7.jpg", 
    ],
    
    contentVoweled: "",
    sentences: [], 
    vocabList: [],
    
    questions: [
      {
        type: "grammar",
        text: "「彼は手紙を書かなかった（過去否定）」\n「هُوَ لَمْ ___ الرِّسَالَةَ (Huwa lam ___ ar-risālata)」",
        options: [
          "يَكْتُبُ (yaktubu)",
          "يَكْتُبَ (yaktuba)",
          "يَكْتُبْ (yaktub)", // 正解
          "كَتَبَ (kataba)"
        ],
        correctIndex: 2,
        explanation: "「ラム (lam)」の後ろは要求法になり、基本形の語尾「ウ (u)」が「無音（スクーン）」に変わります。"
      },
      {
        type: "grammar",
        text: "「私は学校へ行きませんでした」\n「أَنَا لَمْ ___ إِلَى الْمَدْرَسَةِ (Ana lam ___ ilā al-madrasati)」",
        options: [
          "أَذْهَبُ (adhhabu)",
          "أَذْهَبْ (adhhab)", // 正解
          "أَذْهَبَ (adhhaba)",
          "ذَهَبْتُ (dhahabtu)"
        ],
        correctIndex: 1,
        explanation: "「私」の動詞も同様に、語尾をスクーンにします。意味は過去ですが、使うのは「現在形の変形」である点に注意しましょう。"
      },
      {
        type: "grammar",
        text: "「（あなた男性は）ここに座ってはいけません（禁止）」\n「لَا ___ هُنَا (Lā ___ hunā)」",
        options: [
          "تَجْلِسُ (tajlisu)",
          "تَجْلِسَ (tajlisa)",
          "تَجْلِسْ (tajlis)", // 正解
          "تَجْلِسِي (tajlisī)"
        ],
        correctIndex: 2,
        explanation: "禁止の「ラー (lā)」の後ろも要求法です。語尾をスクーンにします。"
      },
      {
        type: "grammar",
        text: "「彼ら（男性複数）は食べませんでした」\n「هُمْ لَمْ ___ (Hum lam ___)」",
        options: [
          "يَأْكُلُونَ (ya'kulūna)",
          "يَأْكُلُوا (ya'kulū)", // 正解
          "يَأْكُلْنَ (ya'kulna)",
          "يَأْكُلُ (ya'kulu)"
        ],
        correctIndex: 1,
        explanation: "複数形「～ウーナ (-ūna)」の場合、接続法と同じく、最後の「ナ (n)」が消えて「～ウー (-ū)」になります。"
      },
      {
        type: "grammar",
        text: "「（あなた女性は）行ってはいけません」\n「يَا مَرْيَمُ، لَا ___ (Yā Maryamu, lā ___)」",
        options: [
          "تَذْهَبِينَ (tadhhabīna)",
          "تَذْهَبِي (tadhhabī)", // 正解
          "تَذْهَبْ (tadhhab)",
          "تَذْهَبْنَ (tadhhabna)"
        ],
        correctIndex: 1,
        explanation: "あなた（女）の「～イーナ (-īna)」も、最後の「ナ (n)」を削除します。"
      }
    ]
  }, 
  {
    id: 128,
    level: "文法",
    category: "命令形",
    title: "Lesson 28: 命令形",
    contentPlain: "命令形は、「要求法」の応用で作れます。作り方は、「頭と尻尾の変化」です。",
    
    imageUrls: [
      "/image/grammar/lesson28_1.jpg", 
      "/image/grammar/lesson28_2.jpg", 
      "/image/grammar/lesson28_3.jpg", 
      "/image/grammar/lesson28_4.jpg", 
    ],
    
    contentVoweled: "",
    sentences: [], 
    vocabList: [],
    
    questions: [
      {
        type: "grammar",
        text: "「（あなたの）名前を書いてください」\n（ヒント：ハムザ記号は書きません）\n「___ اسْمَكَ (___ ismaka)」",
        options: [
          "اُكْتُبْ (uktub - ハムザなし)", // 正解
          "أُكْتُبْ (uktub - ハムザあり)",
          "اِكْتُبْ (iktub)",
          "أَكْتُبْ (aktub)"
        ],
        correctIndex: 0,
        explanation: "現在形（yaktubu）の真ん中が「ウ」なので、命令形の頭は「ウ（damma）」になりますが、文字はハムザ記号のない「アリフ（Hamzat al-Waṣl）」を使います。"
      },
      {
        type: "grammar",
        text: "「（あなた男性は）ここに座ってください」\n「___ هُنَا (___ hunā)」",
        options: [
          "اُجْلِسْ (ujlis)",
          "اِجْلِسْ (ijlis - ハムザなし)", // 正解
          "إِجْلِسْ (ijlis - ハムザあり)",
          "أَجْلِسْ (ajlis)"
        ],
        correctIndex: 1,
        explanation: "現在形（yajlisu）の真ん中が「イ」なので、命令形の頭は「イ（kasra）」になります。ここでもハムザ記号は書きません。"
      },
      {
        type: "grammar",
        text: "「（あなた男性は）市場へ行ってください」\n「___ إِلَى السُّوقِ (___ ilā as-sūqi)」",
        options: [
          "اُذْهَبْ (udhhab)",
          "اِذْهَبْ (idhhab - ハムザなし)", // 正解
          "إِذْهَبْ (idhhab - ハムザあり)",
          "أَذْهَبْ (adhhab)"
        ],
        correctIndex: 1,
        explanation: "現在形（yadhhabu）の真ん中が「ア」の場合、命令形の頭は「イ（kasra）」になります。"
      },
      {
        type: "grammar",
        text: "「（あなた女性は）水を飲んでください」\n「يَا مَرْيَمُ، ___ الْمَاءَ (Yā Maryamu, ___ al-mā'a)」",
        options: [
          "اِشْرَبِي (ishrabī)", // 正解
          "اِشْرَبِينَ (ishrabīna)",
          "إِشْرَبِي (ishrabī - ハムザあり)",
          "اِشْرَبْ (ishrab)"
        ],
        correctIndex: 0,
        explanation: "女性への命令は語尾の「ナ」を取ります。頭のアリフにはハムザを書きません。"
      },
      {
        type: "grammar",
        text: "「（あなたたち男性は）教室に入ってください」\n「يَا طُلَّابُ، ___ الْفَصْلَ (Yā ṭullābu, ___ al-faṣla)」",
        options: [
          "اِدْخُلُوا (idkhulū)",
          "اُدْخُلُوا (udkhulū - ハムザなし)", // 正解
          "أُدْخُلُوا (udkhulū - ハムザあり)",
          "اُدْخُلُونَ (udkhulūna)"
        ],
        correctIndex: 1,
        explanation: "現在形（yadkhulūna）の真ん中が「ウ」なので、頭も「ウ」になります。ハムザ記号のないアリフを使います。"
      }
    ]
  },
  {
    id: 129,
    level: "文法",
    category: "受け身",
    title: "Lesson 29: 受け身",
    contentPlain: "アラビア語の受動態は、「母音（ハラカ）」を塗り替えることで作ります。過去形は「ウ・イ・ア（Fu'ila）」のリズム。現在形は「ユ・ア・ウ（Yu'alu）」です。",
    
    imageUrls: [
      "/image/grammar/lesson29_1.jpg", 
      "/image/grammar/lesson29_2.jpg", 
      "/image/grammar/lesson29_3.jpg", 
      "/image/grammar/lesson29_4.jpg", 
      "/image/grammar/lesson29_5.jpg", 
      "/image/grammar/lesson29_6.jpg", 
      "/image/grammar/lesson29_7.jpg", 
      "/image/grammar/lesson29_8.jpg", 
    ],
    
    contentVoweled: "",
    sentences: [], 
    vocabList: [],
    
    questions: [
      {
        type: "grammar",
        text: "動詞の過去形「書いた（kataba）」を、受動態「書かれた」にする正しい形は？\n（ヒント：過去形の受け身は Fu'ila のリズム）",
        options: [
          "كُتِبَ (kutiba)", // 正解
          "كَاتِب (kātib)",
          "كِتَاب (kitāb)",
          "يَكْتُبُ (yaktubu)"
        ],
        correctIndex: 0,
        explanation: "過去形の受動態は、最初の文字を「ウ」、最後から2番目の文字を「イ」にする「フイラ（Fu'ila）」のパターンを作ります。"
      },
      {
        type: "grammar",
        text: "動詞の現在形「飲む（yashrabu）」を、受動態「飲まれる」にする正しい形は？\n（ヒント：現在形の受け身は Yu'alu のリズム）",
        options: [
          "يُشْرَبُ (yushrabu)", // 正解
          "يَشْرَبُ (yashrabu)",
          "شُرِبَ (shuriba)",
          "شَارِب (shārib)"
        ],
        correctIndex: 0,
        explanation: "現在形の受動態は、語頭を「ユ（yu）」にし、最後から2番目の文字を「ア（a）」にする「ユフアル（Yuf'alu）」のパターンです。"
      },
      {
        type: "grammar",
        text: "「その本は読まれました」正しい文はどれですか？\n（ヒント：本 al-kitāb は男性名詞）",
        options: [
          "قُرِئَ الْكِتَابُ (Quri'a al-kitābu)", // 正解
          "قَرَأَ الْكِتَابَ (Qara'a al-kitāba)",
          "قُرِئَتِ الْكِتَابُ (Quri'ati al-kitābu)",
          "قُرِئَ الْكِتَابَ (Quri'a al-kitāba)"
        ],
        correctIndex: 0,
        explanation: "「読まれた（quri'a）」＋「本（al-kitābu）」の形です。受動態の主語（代理主語）は主格（u）になります。"
      },
      {
        type: "grammar",
        text: "「そのカバンは盗まれました」\n（ヒント：カバン ḥaqība は女性名詞）",
        options: [
          "سُرِقَتِ الْحَقِيبَةُ (Suriqati al-ḥaqībatu)", // 正解
          "سُرِقَ الْحَقِيبَةُ (Suriqa al-ḥaqībatu)",
          "سَرَقَتِ الْحَقِيبَةُ (Saraqati al-ḥaqībatu)",
          "سُرِقَتِ الْحَقِيبَةَ (Suriqati al-ḥaqībata)"
        ],
        correctIndex: 0,
        explanation: "カバン（ḥaqība）は女性名詞なので、動詞も「彼女」の形（Suriqat）に合わせます。"
      },
      {
        type: "grammar",
        text: "次の文の意味として正しいものは？\n「يُسْمَعُ الصَّوْتُ (Yusma'u aṣ-ṣawtu)」",
        options: [
          "その声は聞こえる（聞かれる）", // 正解
          "彼は声を聞く",
          "その声は聞かれた（過去）",
          "声を聞け（命令）"
        ],
        correctIndex: 0,
        explanation: "Yusma'u（ユ・ア・ウ）は現在形の受動態です。「聞かれる＝聞こえる」という意味になります。"
      },
      {
        type: "grammar",
        text: "「殺された（qutila）」を表すアラビア語は？",
        options: [
          "قُتِلَ (qutila)", // 正解
          "قَتَلَ (qatala)",
          "يُقْتَلُ (yuqtalu)",
          "قَاتِل (qātil)"
        ],
        correctIndex: 0,
        explanation: "Qutila（ウ・イ・ア）は過去形の受動態です。"
      },
      {
        // ★修正：能動態→受動態への書き換え問題
        type: "grammar",
        text: "次の文を受動態に書き換えた正しい形は？\n能動態：「学生は手紙を書きました」\n（kātaba aṭ-ṭālibu ar-risālata）",
        options: [
          "كُتِبَتِ الرِّسَالَةُ (Kutibati ar-risālatu)", // 正解
          "كُتِبَتِ الرِّسَالَةَ (Kutibati ar-risālata)",
          "كُتِبَ الرِّسَالَةُ (Kutiba ar-risālatu)",
          "كَتَبَتِ الرِّسَالَةُ (Katabati ar-risālatu)"
        ],
        correctIndex: 0,
        explanation: "目的語「手紙（女性名詞）」が主語になるため、動詞は「書かれた（女性形）」になり、手紙は主格（u）になります。"
      },
      {
        type: "grammar",
        text: "「そのドアは開けられています（状態・現在）」\n（ヒント：開ける fataḥa → 受動 yuftaḥu）",
        options: [
          "اَلْبَابُ يُفْتَحُ (Al-bābu yuftaḥu)", // 正解
          "اَلْبَابُ يَفْتَحُ (Al-bābu yaftaḥu)",
          "اَلْبَابُ فُتِحَ (Al-bābu futiḥa)",
          "اَلْبَابُ مَفْتُوحٌ (Al-bābu maftūḥun)"
        ],
        correctIndex: 0,
        explanation: "現在受動態 Yuftaḥu を使います。「ドアが開けられる（開く）」という状態を表します。"
      },
      {
        type: "grammar",
        text: "「彼ら（男性複数）は助けられた（支援された）」正しい形は？\n（ヒント：助ける naṣara → 受動 nuṣira）",
        options: [
          "نُصِرُوا (nuṣirū)", // 正解
          "نَصَرُوا (naṣarū)",
          "نُصِرَتْ (nuṣirat)",
          "يُنْصَرُونَ (yunṣarūna)"
        ],
        correctIndex: 0,
        explanation: "基本形 nuṣira に、彼ら（複数）の語尾「ウー」を付けます。Nuṣirū（彼らは助けられた）。"
      },
      {
        // ★修正：「レッスンは理解された」という標準的な文
        type: "grammar",
        text: "「そのレッスンは（よく）理解されました」\n（ヒント：理解する fahima → 受動 fuhima）",
        options: [
          "فُهِمَ الدَّرْسُ (Fuhima ad-darsu)", // 正解
          "فَهِمَ الدَّرْسُ (Fahima ad-darsu)",
          "فُهِمَ الدَّرْسَ (Fuhima ad-darsa)",
          "يُفْهَمُ الدَّرْسُ (Yufhamu ad-darsu)"
        ],
        correctIndex: 0,
        explanation: "「理解された」は過去受動（フイラ）なので Fuhima です。主語（レッスン）は主格（u）になります。"
      }
    ]
  },
  {
    id: 130,
    level: "文法",
    category: "動詞の派生形",
    title: "Lesson 30: 動詞の派生形",
    contentPlain: "アラビア語の動詞は基本の3語根動詞(3つの文字からなる基本動詞)から派生した「派生形（2形～10形）」があり、アラビア語の中でも派生形の方がよく使われます。「型」とだいたいの意味はその型によって決まっているので、意味を掴んでどんどんボキャブラリーを増やしましょう。",
    
    imageUrls: [
      "/image/grammar/lesson30_1.jpg", 
      "/image/grammar/lesson30_2.jpg", 
      "/image/grammar/lesson30_3.jpg", 
      "/image/grammar/lesson30_4.jpg", 
      "/image/grammar/lesson30_5.jpg", 
      "/image/grammar/lesson30_6.jpg", 
      "/image/grammar/lesson30_7.jpg", 
    ],
    
    contentVoweled: "",
    sentences: [], 
    vocabList: [],
    
    questions: [
      // --- 第2形 ---
      {
        type: "grammar",
        text: "「先生は生徒たちにアラビア語を教えました」をアラビア語で言うと？",
        options: [
          "دَرَّسَ الْمُدَرِّسُ الطُّلَّابَ اللُّغَةَ الْعَرَبِيَّةَ", // 正解
          "دَرَسَ الْمُدَرِّسُ الطُّلَّابَ اللُّغَةَ الْعَرَبِيَّةَ",
          "أَدْرَسَ الْمُدَرِّسُ الطُّلَّابَ اللُّغَةَ الْعَرَبِيَّةَ",
          "تَدَارَسَ الْمُدَرِّسُ الطُّلَّابَ اللُّغَةَ الْعَرَبِيَّةَ"
        ],
        correctIndex: 0,
        explanation: "【第2形】です。「勉強する（darasa）」ではなく、強調・他動詞化する第2形「教える（darrasa）」を使います。"
      },
      {
        type: "grammar",
        text: "「تُنَظِّفُ الْأُمُّ الْغُرْفَةَ كُلَّ يَوْمٍ」の意味は？",
        options: [
          "母は毎日、部屋を掃除します", // 正解
          "母は毎日、部屋を掃除しました",
          "母は毎日、部屋を見ます",
          "母は毎日、部屋に入ります"
        ],
        correctIndex: 0,
        explanation: "【第2形】です。tunaẓẓifu は「掃除する（naẓẓafa）」の現在形です。"
      },
      
      // --- 第3形 ---
      {
        type: "grammar",
        text: "「彼は先月、サウジアラビアへ旅行しました」をアラビア語で言うと？",
        options: [
          "سَافَرَ إِلَى السَّعُودِيَّةِ الشَّهْرَ الْمَاضِيَ", // 正解
          "سَفَرَ إِلَى السَّعُودِيَّةِ الشَّهْرَ الْمَاضِيَ",
          "أَسْفَرَ إِلَى السَّعُودِيَّةِ الشَّهْرَ الْمَاضِيَ",
          "يُسَافِرُ إِلَى السَّعُودِيَّةِ الشَّهْرَ الْمَاضِيَ"
        ],
        correctIndex: 0,
        explanation: "【第3形】です。「旅行する」は第3形（sāfara）の動詞です。"
      },
      {
        type: "grammar",
        text: "「أُشَاهِدُ التِّلْفَازَ كُلَّ لَيْلَةٍ」の意味は？",
        options: [
          "私は毎晩、テレビを観ます", // 正解
          "私は毎晩、テレビを観ました",
          "彼は毎晩、テレビを観ます",
          "私は毎晩、テレビを目撃します"
        ],
        correctIndex: 0,
        explanation: "【第3形】です。ushāhidu は「観る（shāhada）」の現在形・一人称単数です。"
      },

      // --- 第4形 ---
      {
        type: "grammar",
        text: "「私は友人に手紙を送りました」をアラビア語で言うと？",
        options: [
          "أَرْسَلْتُ الرِّسَالَةَ إِلَى صَدِيقِي", // 正解
          "رَسَلْتُ الرِّسَالَةَ إِلَى صَدِيقِي",
          "رَاسَلْتُ الرِّسَالَةَ إِلَى صَدِيقِي",
          "تَرَاسَلْتُ الرِّسَالَةَ إِلَى صَدِيقِي"
        ],
        correctIndex: 0,
        explanation: "【第4形】です。「送る（arsala）」は代表的な第4形動詞です。"
      },
      {
        type: "grammar",
        text: "「يُخْرِجُ الْوَلَدُ الْكِتَابَ مِنَ الْحَقِيبَةِ」の意味は？",
        options: [
          "男の子はカバンから本を取り出します", // 正解
          "男の子はカバンから本と出かけます",
          "男の子はカバンから本を卒業します",
          "男の子はカバンから本を取り出しました"
        ],
        correctIndex: 0,
        explanation: "【第4形】です。yukhriju は「出す（akhraja）」の現在形です。「出る（kharaja）」は第1形です。"
      },
      {
        type: "grammar",
        text: "「あなたは何がしたいですか？」をアラビア語で言うと？",
        options: [
          "مَاذَا تُرِيدُ ؟", // 正解
          "مَاذَا تَرِيدُ ؟",
          "مَاذَا تُرَادُ ؟",
          "مَاذَا أَرَادَ ؟"
        ],
        correctIndex: 0,
        explanation: "【第4形】です。「〜したい（arāda）」の現在形 turīdu を使います。第4形なので現在形の頭の母音は「ウ」です。"
      },

      // --- 第5形 ---
      {
        type: "grammar",
        text: "「تَكَلَّمَ الرَّجُلُ بِاللُّغَةِ الْعَرَبِيَّةِ」の意味は？",
        options: [
          "その男はアラビア語で話しました", // 正解
          "その男はアラビア語で話します",
          "その男はアラビア語を学びました",
          "その男はアラビア語を知っています"
        ],
        correctIndex: 0,
        explanation: "【第5形】です。takallama は過去形です。現在形なら yatakallamu になります。"
      },
      {
        type: "grammar",
        text: "「私たちは遅れません」をアラビア語で言うと？",
        options: [
          "نَحْنُ لَا نَتَأَخَّرُ", // 正解
          "نَحْنُ لَا نُتَأَخَّرُ",
          "نَحْنُ لَا نَتَأَخِّرُ",
          "نَحْنُ لَا نُؤَخِّرُ"
        ],
        correctIndex: 0,
        explanation: "【第5形】です。「遅れる（ta'akhkhara）」の現在形です。"
      },

      // --- 第6形 ---
      {
        type: "grammar",
        text: "「تَعَاوَنَ الْمُوَظَّفُونَ فِي الْعَمَلِ」の意味は？",
        options: [
          "社員たちは仕事で協力し合いました", // 正解
          "社員たちは仕事を手伝いました",
          "社員たちは仕事で助けを求めました",
          "社員たちは仕事を始めました"
        ],
        correctIndex: 0,
        explanation: "【第6形】です。ta'āwana は「互いに協力する」という意味です。"
      },
      {
        type: "grammar",
        text: "「冬には雪が降り落ちます」をアラビア語で言うと？",
        options: [
          "يَتَسَاقَطُ الثَّلْجُ فِي الشِّتَاءِ", // 正解
          "يُتَسَاقَطُ الثَّلْجُ فِي الشِّتَاءِ",
          "يَسْقُطُ الثَّلْجُ فِي الشِّتَاءِ",
          "يُسْقِطُ الثَّلْجُ فِي الشِّتَاءِ"
        ],
        correctIndex: 0,
        explanation: "【第6形】です。「次々と落ちる」というニュアンスで第6形 yatasāqaṭu がよく使われます。"
      },

      // --- 第7形 ---
      {
        type: "grammar",
        text: "「اِنْكَسَرَ الْكُوبُ」の意味は？",
        options: [
          "コップが割れました", // 正解
          "コップを割りました",
          "コップが落ちました",
          "コップを買いました"
        ],
        correctIndex: 0,
        explanation: "【第7形】です。inkasara は「割る（kasara）」の自動詞形「割れる」です。"
      },
      {
        type: "grammar",
        text: "「ここで電話（通話）が切れます」をアラビア語で言うと？",
        options: [
          "يَنْقَطِعُ الْاِتِّصَالُ هُنَا", // 正解
          "يُنْقَطَعُ الْاِتِّصَالُ هُنَا",
          "يَقْطَعُ الْاِتِّصَالُ هُنَا",
          "يُقَطِّعُ الْاِتِّصَالُ هُنَا"
        ],
        correctIndex: 0,
        explanation: "【第7形】です。「切れる（inqaṭa'a）」の現在形 yanqaṭi'u を選びます。"
      },

      // --- 第8形 ---
      {
        type: "grammar",
        text: "「يَشْتَغِلُ أَبِي فِي شَرِكَةٍ كَبِيرَةٍ」の意味は？",
        options: [
          "父は大きな会社で働いています", // 正解
          "父は大きな会社で働きました",
          "父は大きな会社を作りました",
          "父は大きな会社で忙しいです"
        ],
        correctIndex: 0,
        explanation: "【第8形】です。yashtaghilu は「働く」の現在形です。"
      },
      {
        type: "grammar",
        text: "「私たちはラジオでニュースを聞きました」をアラビア語で言うと？",
        options: [
          "اِسْتَمَعْنَا إِلَى الْأَخْبَارِ فِي الرَّادِيُو", // 正解
          "اِسْتَمَعْتُمْ إِلَى الْأَخْبَارِ فِي الرَّادِيُو",
          "سَمِعْنَا إِلَى الْأَخْبَارِ فِي الرَّادِيُو",
          "اِسْتَمَعُوا إِلَى الْأَخْبَارِ فِي الرَّادِيُو"
        ],
        correctIndex: 0,
        explanation: "【第8形】です。「聞く（istama'a）」は第10形のように見えますが第8形です。"
      },
      {
        type: "grammar",
        text: "「اِنْتَظَرْتُ صَدِيقِي فِي الْمَحَطَّةِ」の意味は？",
        options: [
          "私は駅で友人を待ちました", // 正解
          "私は駅で友人を見ました",
          "私は駅で友人と会いました",
          "私は駅で友人を送りました"
        ],
        correctIndex: 0,
        explanation: "【第8形】です。intaẓara は「待つ」という意味です。"
      },

      // --- 第10形 ---
      {
        type: "grammar",
        text: "「彼は仕事でパソコンを使いました」をアラビア語で言うと？",
        options: [
          "اِسْتَخْدَمَ الْكُمِبِيُوتَرَ فِي الْعَمَلِ", // 正解
          "خَدَمَ الْكُمِبِيُوتَرَ فِي الْعَمَلِ",
          "اِسْتَخَدَمَ الْكُمِبِيُوتَرَ فِي الْعَمَلِ",
          "اِخْدَمَ الْكُمِبِيُوتَرَ فِي الْعَمَلِ"
        ],
        correctIndex: 0,
        explanation: "【第10形】です。「使う（istakhdama）」は代表的な第10形動詞です。"
      },
      {
        type: "grammar",
        text: "「يَسْتَقْبِلُ الْمُدِيرُ الضَّيْفَ」の意味は？",
        options: [
          "マネージャーは客を出迎えます", // 正解
          "マネージャーは客を受け入れました",
          "マネージャーは客と会います",
          "マネージャーは客にキスします"
        ],
        correctIndex: 0,
        explanation: "【第10形】です。yastaqbilu は「出迎える・受信する」の現在形です。"
      },

      // --- 総合 ---
      {
        type: "grammar",
        text: "「ムハンマドは予習を準備します（持ってきます）」をアラビア語で言うと？",
        options: [
          "يُحْضِرُ مُحَمَّدٌ التَّحْضِيرَ", // 正解
          "يَحْضُرُ مُحَمَّدٌ التَّحْضِيرَ",
          "يُحَضِّرُ مُحَمَّدٌ التَّحْضِيرَ",
          "يَتَحَضَّرُ مُحَمَّدٌ التَّحْضِيرَ"
        ],
        correctIndex: 0,
        explanation: "【第4形】です。「準備する」は yuḥḍiru（第4形）、「出席する」は yaḥḍuru（第1形）です。"
      },
      {
        type: "grammar",
        text: "「أَسْتَغْفِرُ اللهَ」の意味は？",
        options: [
          "私は神に赦しを求めます", // 正解
          "神は私を赦しました",
          "私は神を赦します",
          "私は神に感謝します"
        ],
        correctIndex: 0,
        explanation: "【第10形】です。astaghfiru は「赦しを求める（istaghfara）」の現在形です。"
      }
    ]
  },
  {
    id: 131,
    level: "文法",
    category: "関係代名詞",
    title: "Lesson 31: 関係代名詞",
    contentPlain: "文章と文章をつなぐ「接着剤（〜するところの）」の役割をする言葉です。英語のwhichやwhoにあたりますが、独特のルール「特定なら接着剤あり、不特定なら接着剤なし」と、「必ず代名詞で振り返る（アーイド）」という2点がポイントです。",
    
    imageUrls: [
      "/image/grammar/lesson31_1.jpg", 
      "/image/grammar/lesson31_2.jpg", 
      "/image/grammar/lesson31_3.jpg", 
      "/image/grammar/lesson31_4.jpg", 
      "/image/grammar/lesson31_5.jpg", 
      "/image/grammar/lesson31_6.jpg", 
      "/image/grammar/lesson31_7.jpg", 
      "/image/grammar/lesson31_8.jpg", 
    ],
    
    contentVoweled: "",
    sentences: [], 
    vocabList: [],
    
    questions: [
      {
        type: "grammar",
        text: "「昨日来たその学生（男性）は誰ですか？」\n「مَنِ الطَّالِبُ ___ جَاءَ أَمْسِ ؟」",
        options: [
          "الَّذِي (allaḏī)", // 正解
          "الَّتِي (allatī)",
          "الَّذِينَ (allaḏīna)",
          "مَا (mā)"
        ],
        correctIndex: 0,
        explanation: "先行詞「その学生（aṭ-ṭālibu）」は【男性・単数】なので、関係代名詞は「アラディー」を使います。"
      },
      {
        type: "grammar",
        // ★解説修正：アーイドの省略について追記
        text: "「私は、通りにあるその車（女性名詞）を見ました」\n「رَأَيْتُ السَّيَّارَةَ ___ فِي الشَّارِعِ」",
        options: [
          "الَّتِي (allatī)", // 正解
          "الَّذِي (allaḏī)",
          "الَّذِينَ (allaḏīna)",
          "اللَّاتِي (allātī)"
        ],
        correctIndex: 0,
        explanation: "先行詞「その車」は女性単数なので「アッラティー」です。ここでのポイントは、本来「通りにいる『それ（彼女）』」という帰着代名詞（hiya）が隠れている点です（التي [هي] في الشارع）。名詞文や前置詞句が続く場合、この代名詞はよく省略されます。"
      },
      {
        type: "grammar",
        text: "「工場で働いている（特定の）男性たちは勤勉です」\n「اَلرِّجَالُ ___ يَعْمَلُونَ فِي الْمَصْنَعِ مُجْتَهِدُونَ」",
        options: [
          "الَّذِينَ (allaḏīna)", // 正解
          "الَّذِي (allaḏī)",
          "اللَّاتِي (allātī)",
          "الَّتِي (allatī)"
        ],
        correctIndex: 0,
        explanation: "先行詞「その男性たち（ar-rijālu）」は【男性・複数】なので、「アッラズィーナ」を使います。"
      },
      {
        type: "grammar",
        text: "「病院に行きたい（特定の）女性たちはここにいます」\n「اَلنِّسَاءُ ___ يُرِدْنَ الذَّهَابَ إِلَى الْمُسْتَشْفَى هُنَا」",
        options: [
          "اللَّاتِي (allātī)", // 正解
          "الَّتِي (allatī)",
          "الَّذِينَ (allaḏīna)",
          "الَّذِي (allaḏī)"
        ],
        correctIndex: 0,
        explanation: "先行詞「その女性たち（an-nisā'u）」は【女性・複数】なので、「アッラーティー」を使います。"
      },
      {
        type: "grammar",
        text: "「私が買ったその本（複数）はどこですか？」",
        options: [
          "أَيْنَ الْكُتُبُ الَّتِي اشْتَرَيْتُهَا؟ (allatī ... -hā)", // 正解
          "أَيْنَ الْكُتُبُ الَّذِي اشْتَرَيْتُهُ؟ (allaḏī ... -hu)",
          "أَيْنَ الْكُتُبُ الَّذِينَ اشْتَرَيْتُهُمْ؟ (allaḏīna ... -hum)",
          "أَيْنَ الْكُتُبُ الَّتِي اشْتَرَيْتُ؟ (allatī ... [なし])"
        ],
        correctIndex: 0,
        explanation: "先行詞「その本たち（al-kutubu）」は【人間以外の複数】なので女性単数扱いとなり「アッラティー」を使います。また、関係節の中で「それらを買った」と言い直すための帰着代名詞（アーイド）「ハー (-hā)」が動詞の後ろに必要です。"
      },
      {
        type: "grammar",
        text: "「私は、英語を話す（ある）学生を見ました」",
        options: [
          "رَأَيْتُ طَالِبًا يَتَكَلَّمُ الْإِنْجِلِيزِيَّةَ (ṭāliban yatakallamu...)", // 正解
          "رَأَيْتُ طَالِبًا الَّذِي يَتَكَلَّمُ الْإِنْجِلِيزِيَّةَ (ṭāliban allaḏī...)",
          "رَأَيْتُ الطَّالِبَ يَتَكَلَّمُ الْإِنْجِلِيزِيَّةَ (aṭ-ṭāliba yatakallamu...)",
          "رَأَيْتُ طَالِبًا هُوَ يَتَكَلَّمُ الْإِنْجِلِيزِيَّةَ"
        ],
        correctIndex: 0,
        explanation: "先行詞「ある学生（ṭāliban）」は非限定（定冠詞なし）なので、関係代名詞（接着剤）を使ってはいけません。そのまま文章を続けます。"
      },
      {
        type: "grammar",
        text: "「その男性は、私が（彼と）一緒に住んでいる人です」\n「اَلرَّجُلُ الَّذِي أَسْكُنُ ___」",
        options: [
          "مَعَهُ (ma'a-hu)", // 正解
          "مَعَ (ma'a)",
          "مَعَهَا (ma'a-hā)",
          "مَعِي (ma'ī)"
        ],
        correctIndex: 0,
        explanation: "「一緒に（ma'a）」という前置詞の後ろにも、先行詞（男性）を指す「フ (-hu)」を必ず付けます。英語のように前置詞で終わらせてはいけません。"
      },
      {
        type: "grammar",
        // ★追加：関係代名詞「マ（もの・こと）」
        text: "「あなたが聞いた『こと（もの）』を書いてください」\n「اُكْتُبْ ___ سَمِعْتَ」",
        options: [
          "مَا (mā)", // 正解
          "مَنْ (man)",
          "الَّذِي (allaḏī)",
          "الَّتِي (allatī)"
        ],
        correctIndex: 0,
        explanation: "先行詞が含まれている関係代名詞です。「～するもの（こと）」という抽象的な内容や物事を指す場合、「マー (mā)」を使います。英語の what に近いです。"
      },
      {
        type: "grammar",
        // ★追加：関係代名詞「マン（人・者）」
        text: "「知識を持っている『人（者）』に聞きなさい」\n「اِسْأَلْ ___ يَعْلَمُ」",
        options: [
          "مَنْ (man)", // 正解
          "مَا (mā)",
          "الَّذِي (allaḏī)",
          "الَّتِي (allatī)"
        ],
        correctIndex: 0,
        explanation: "「～する人（者）」と特定の人を指さずに言う場合、関係代名詞「マン (man)」を使います。性別や数に関係なく使えます。"
      },
      {
        type: "grammar",
        text: "正しい文を選んでください。\n「私が書いたその手紙は、机の上にあります」",
        options: [
          "اَلرِّسَالَةُ الَّتِي كَتَبْتُهَا عَلَى الْمَكْتَبِ", // 正解
          "اَلرِّسَالَةُ كَتَبْتُهَا عَلَى الْمَكْتَبِ",
          "اَلرِّسَالَةُ الَّتِي كَتَبْتُ عَلَى الْمَكْتَبِ",
          "رِسَالَةٌ الَّتِي كَتَبْتُهَا عَلَى الْمَكْتَبِ"
        ],
        correctIndex: 0,
        explanation: "先行詞「その手紙（al-risāla）」は限定なので「allatī」が必要。さらに「それを書いた」というアーイド「-hā」も必要です。"
      }
    ]
  },
  {
    id: 132,
    level: "文法",
    category: "能動分詞・受動分詞",
    title: "Lesson 32: 能動分詞・受動分詞",
    contentPlain: "アラビア語の「能動分詞（〜する人・している）」と「受動分詞（〜されたもの・されている）」の作り方です。英語でいう「ing (現在分詞)」と「ed (過去分詞)」にあたります。",
    
    imageUrls: [
      "/image/grammar/lesson32_1.jpg", 
      "/image/grammar/lesson32_2.jpg", 
      "/image/grammar/lesson32_3.jpg", 
      "/image/grammar/lesson32_4.jpg", 
      "/image/grammar/lesson32_5.jpg", 
    ],
    
    contentVoweled: "",
    sentences: [], 
    vocabList: [],
    
    questions: [
      // --- 基本形 (第1形) ---
      {
        type: "grammar",
        text: "「私は市場へ行きます（行っているところです）」\n（ヒント：能動分詞を使って「〜している」を表す）\n「أَنَا ___ إِلَى السُّوقِ」",
        options: [
          "ذَاهِبٌ (dhāhibun)", // 正解
          "ذَهَبٌ (dhahabun)",
          "مَذْهُوبٌ (madh-hūbun)",
          "ذَهَّابٌ (dhahhābun)"
        ],
        correctIndex: 0,
        explanation: "第1形の能動分詞は「ファーイル（Fā'il）」の形です。「行く（dhahaba）」→「行く人・行っている（dhāhib）」となります。"
      },
      {
        type: "grammar",
        text: "「そのドアは開いています（開けられています）」\n（ヒント：受動分詞を使って状態を表す）\n「اَلْبَابُ ___」",
        options: [
          "مَفْتُوحٌ (maftūḥun)", // 正解
          "فَاتِحٌ (fātiḥun)",
          "فَتَّاحٌ (fattāḥun)",
          "مُفْتَتَحٌ (muftataḥun)"
        ],
        correctIndex: 0,
        explanation: "第1形の受動分詞は「マフウール（Maf'ūl）」の形です。「開ける（fataḥa）」→「開けられた（maftūḥ）」となります。"
      },
      {
        type: "grammar",
        text: "「あなたは（話を）理解していますか？」\n「هَلْ أَنْتَ ___ ؟」",
        options: [
          "فَاهِمٌ (fāhimun)", // 正解
          "مَفْهُومٌ (mafhūmun)",
          "فَهَّامٌ (fahhāmun)",
          "مُتَفَهِّمٌ (mutifahhimun)"
        ],
        correctIndex: 0,
        explanation: "「理解する（fahima）」の能動分詞「ファーヒム」を使って、進行形のような意味（分かっている状態）を表せます。"
      },
      {
        type: "grammar",
        text: "「この席は予約されています（取られています）」\n（ヒント：予約する/確保する ḥajaza）\n「هَذَا الْمَقْعَدُ ___」",
        options: [
          "مَحْجُوزٌ (maḥjūzun)", // 正解
          "حَاجِزٌ (ḥājizun)",
          "مُحْتَجِزٌ (muḥtajizun)",
          "حِجَازٌ (ḥijāzun)"
        ],
        correctIndex: 0,
        explanation: "「確保された」という受動の意味なので、受動分詞（マフウール形）を使います。"
      },
      
      // --- 派生形 (Mu- で始まる形) ---
      {
        type: "grammar",
        // ★修正箇所: li-l-lughati に変更
        text: "「彼はアラビア語の先生（教える人）です」\n（ヒント：第2形 darrasa の能動分詞）\n「هُوَ ___ لِلُّغَةِ الْعَرَبِيَّةِ」",
        options: [
          "مُدَرِّسٌ (mudarrisun)", // 正解
          "مُدَرَّسٌ (mudarrasun)",
          "دَارِسٌ (dārisun)",
          "مَدْرُوسٌ (madrūsun)"
        ],
        correctIndex: 0,
        explanation: "派生形の分詞は頭に「ム (Mu-)」が付きます。能動分詞（〜する人）は、後ろから2番目の母音が「イ (i)」になります（ムダッリス）。"
      },
      {
        type: "grammar",
        text: "「彼は旅行者です（旅行しています）」\n（ヒント：第3形 sāfara の能動分詞）\n「هُوَ ___」",
        options: [
          "مُسَافِرٌ (musāfirun)", // 正解
          "مُسَافَرٌ (musāfarun)",
          "سَافِرٌ (sāfirun)",
          "مُسْفِرٌ (musfirun)"
        ],
        correctIndex: 0,
        explanation: "第3形の能動分詞です。Mu-sāf**i**r（ムサーフィル）となります。"
      },
      {
        type: "grammar",
        text: "「この車は中古（使われたもの）です」\n（ヒント：第10形 istakhdama の受動分詞）\n「هَذِهِ السَّيَّارَةُ ___」",
        options: [
          "مُسْتَخْدَمَةٌ (mustakhdamatun)", // 正解
          "مُسْتَخْدِمَةٌ (mustakhdimatun)",
          "مَخْدُومَةٌ (makhdūmatun)",
          "خَادِمَةٌ (khādimatun)"
        ],
        correctIndex: 0,
        explanation: "派生形の受動分詞（〜された）は、後ろから2番目の母音が「ア (a)」になります（ムスタフ**ダ**マ）。「使う人（ユーザー）」なら「ムスタフ**ディ**マ」です。"
      },
      {
        type: "grammar",
        text: "「社長（管理者）は事務所にいます」\n（ヒント：第4形 adāra の能動分詞）\n「___ مَوْجُودٌ فِي الْمَكْتَبِ」",
        options: [
          "اَلْمُدِيرُ (al-mudīru)", // 正解
          "اَلْمُدَارُ (al-mudāru)",
          "اَلدَّائِرُ (ad-dā'iru)",
          "اَلْمَدُورُ (al-madūru)"
        ],
        correctIndex: 0,
        explanation: "「管理する（adāra）」の能動分詞は「ムディール（mudīr）」です。日常会話で「マネージャー、社長」としてよく使われます。"
      },
      {
        type: "grammar",
        text: "「私はあなたを待っています（待っている人です）」\n（ヒント：第8形 intaẓara の能動分詞）\n「أَنَا ___ لَكَ」",
        options: [
          "مُنْتَظِرٌ (muntaẓirun)", // 正解
          "مُنْتَظَرٌ (muntaẓarun)",
          "نَاظِرٌ (nāẓirun)",
          "مَنْظُورٌ (manẓūrun)"
        ],
        correctIndex: 0,
        explanation: "「待つ（intaẓara）」の能動分詞なので、母音はイ（ムンタ**ジ**ル）です。逆に「待たれている（期待されている）結果」などは「ムンタ**ザ**ル」と言います。"
      },
      {
        type: "grammar",
        text: "「彼はムスリム（イスラム教徒）です」\n（ヒント：第4形 aslama = 服従する、の能動分詞）\n「هُوَ ___」",
        options: [
          "مُسْلِمٌ (muslimun)", // 正解
          "مُسْلَمٌ (muslamun)",
          "سَالِمٌ (sālimun)",
          "مَسْلُومٌ (maslūmun)"
        ],
        correctIndex: 0,
        explanation: "「イスラム教徒」という単語は、動詞「アスラマ（神に服従した）」の能動分詞「ムスリム（服従する人）」から来ています。"
      }
    ]
  }, 
  {
    id: 133,
    level: "文法",
    category: "動名詞",
    title: "Lesson 33: 動名詞",
    contentPlain: "アラビア語の「動名詞（マスダル）」のまとめです。英語の「ing（～すること）」や「tion（～という行為）」にあたる名詞です。ここでも「基本形（1形）」と「派生形（2〜10形）」でルールが完全に分かれます。",
    
    imageUrls: [
      "/image/grammar/lesson33_1.jpg", 
      "/image/grammar/lesson33_2.jpg", 
      "/image/grammar/lesson33_3.jpg", 
      "/image/grammar/lesson33_4.jpg", 
      "/image/grammar/lesson33_5.jpg", 
      "/image/grammar/lesson33_6.jpg", 
      "/image/grammar/lesson33_7.jpg", 
      "/image/grammar/lesson33_8.jpg", 
    ],
    
    contentVoweled: "",
    sentences: [], 
    vocabList: [],
    
    questions: [
      {
        type: "grammar",
        text: "動詞「دَرَّسَ（教える・第2形）」の動名詞（教育・教えること）は？",
        options: [
          "تَدْرِيسٌ (tadrīsun)", // 正解
          "مُدَرِّسٌ (mudarrisun)",
          "دَرْسٌ (darsun)",
          "دِرَاسَةٌ (dirāsatun)"
        ],
        correctIndex: 0,
        explanation: "第2形（Fa‘‘ala）の動名詞は、頭にタが付く「タフイール（Taf‘īl）」の形になります。Mudarris は「先生（能動分詞）」なので注意しましょう。"
      },
      {
        type: "grammar",
        text: "動詞「أَسْلَمَ（服従した・第4形）」の動名詞（神への帰依・イスラーム）は？",
        options: [
          "إِسْلَامٌ (islāmun)", // 正解
          "مُسْلِمٌ (muslimun)",
          "سَلَامٌ (salāmun)",
          "تَسْلِيمٌ (taslīmun)"
        ],
        correctIndex: 0,
        explanation: "第4形の動名詞パターンは「イフアール（If‘āl）」です。Aslama → Islām となります。"
      },
      {
        type: "grammar",
        text: "動詞「دَخَلَ（入る・第1形）」の動名詞（入り口・入ること）は？\n（ヒント：不規則ですが、動作を表す基本形によくあるパターンです）",
        options: [
          "دُخُولٌ (dukhūlun)", // 正解
          "دَاخِلٌ (dākhilun)",
          "مَدْخَلٌ (madkhalun)",
          "إِدْخَالٌ (idkhālun)"
        ],
        correctIndex: 0,
        explanation: "第1形の動名詞は不規則ですが、dakhala（入る）のような動作動詞は「〜ウール（Fu‘ūl）」の形になることが多いです。"
      },
      {
        type: "grammar",
        text: "動詞「قَرَأَ（読む・第1形）」の動名詞を使って、「私は読書が好きです」を完成させてください。\n「أُحِبُّ ___」",
        options: [
          "الْقِرَاءَةَ (al-qirā'ata)", // 正解
          "الْقَارِئَ (al-qāri'a)",
          "الْمَقْرُوءَ (al-maqrū'a)",
          "الْقُرْآنَ (al-qur'āna)"
        ],
        correctIndex: 0,
        explanation: "「読むこと」は Qirā'a（キラアー）です。第1形の動名詞パターンの一つ「フィアーラ（Fi‘āla）」の形です。"
      },
      {
        type: "grammar",
        text: "動詞「اِسْتَقْبَلَ（迎える・第10形）」の動名詞（受付／レセプション）は？",
        options: [
          "اِسْتِقْبَالٌ (istiqbālun)", // 正解
          "مُسْتَقْبِلٌ (mustaqbilun)",
          "مُسْتَقْبَلٌ (mustaqbalun)",
          "قَبُولٌ (qabūlun)"
        ],
        correctIndex: 0,
        explanation: "第10形の動名詞は、頭の「イスタ」が「イスティ」になり、後ろが伸びる「イスティフアール（Istif‘āl）」の形になります。"
      }
    ]
  },
  {
    id: 134,
    level: "文法",
    category: "比較級と最上級",
    title: "Lesson 34: 比較級と最上級",
    contentPlain: "アラビア語の「比較級（～より大きい）」と「最上級（一番大きい）」の解説です。英語ではerとestで形が変わりますが、アラビア語ではたった1つの形「アフアル (Af'alu)」を使い回します。「アッラーフ・アクバル（神は偉大なり）」の「アクバル」がまさにこの形です。",
    
    imageUrls: [
      "/image/grammar/lesson34_1.jpg", 
      "/image/grammar/lesson34_2.jpg", 
      "/image/grammar/lesson34_3.jpg", 
      "/image/grammar/lesson34_4.jpg", 
      "/image/grammar/lesson34_5.jpg", 
    ],
    
    contentVoweled: "",
    sentences: [], 
    vocabList: [],
    
    questions: [
      {
        type: "grammar",
        text: "形容詞「大きい（kabīr）」を比較級・最上級の形「アフアル形」にすると？",
        options: [
          "أَكْبَرُ (akbaru)", // 正解
          "كُبْرَى (kubrā)",
          "كَابِرٌ (kābirun)",
          "أَكْبَارٌ (akbārun)"
        ],
        correctIndex: 0,
        explanation: "「カビール（kabīr）」の3語根（k-b-r）を「アフアル」の型にはめると「アクバル（akbaru）」になります。有名な「アッラーフ・アクバル」のアクバルです。"
      },
      {
        type: "grammar",
        text: "「太陽は月『より』大きいです」\n「اَلشَّمْسُ أَكْبَرُ ___ الْقَمَرِ」",
        options: [
          "مِنَ (mina)", // 正解
          "عَنِ ('ani)",
          "إِلَى (ilā)",
          "فِي (fī)"
        ],
        correctIndex: 0,
        explanation: "比較級の後ろで「〜より（than）」を表すには、前置詞「ミン（min）」を使います。"
      },
      {
        type: "grammar",
        text: "「カイロはエジプトで『最も大きい』都市です」\n「الْقَاهِرَةُ ___ مَدِينَةٍ فِي مِصْرَ」",
        options: [
          "أَكْبَرُ (akbaru)", // 正解
          "كَبِيرَةُ (kabīratu)",
          "الْأَكْبَرُ (al-akbaru)",
          "أَكَابِرُ (akābiru)"
        ],
        correctIndex: 0,
        explanation: "最上級として使う場合も形は「アクバル」のままです。「アクバル・マディーナティン（一番大きな都市）」のように、後ろに名詞を続けます。"
      },
      {
        type: "grammar",
        text: "「この車はあの車より『美しい』です」\n（ヒント：美しい jamīl → ？）\n「هَذِهِ السَّيَّارَةُ ___ مِنْ تِلْكَ」",
        options: [
          "أَجْمَلُ (ajmalu)", // 正解
          "جَمِيلَةٌ (jamīlatun)",
          "أَجْمَلَةُ (ajmalatu)",
          "جَامِلٌ (jāmilun)"
        ],
        correctIndex: 0,
        explanation: "「ジャミール（美しい）」をアフアル形にすると「アジュマル（ajmalu）」になります。比較級の形自体に性別の変化はないので、車（女性名詞）が主語でも ajmalu を使います。"
      },
      {
        type: "grammar",
        text: "「これが『一番良い』本です」\n（ヒント：良い ḥasan → ？）\n「هَذَا ___ كِتَابٍ」",
        options: [
          "أَحْسَنُ (aḥsanu)", // 正解
          "حَسَنُ (ḥasanu)",
          "أَحَاسِنُ (aḥāsinu)",
          "مُحْسِنٌ (muḥsinun)"
        ],
        correctIndex: 0,
        explanation: "「ハサン（良い）」のアフアル形は「アハサン（aḥsanu）」です。「一番良い〜（Best）」という意味でよく使われます。"
      }
    ]
  },
            {
              id: 135,
              level: "文法",
              category: "音の変化",
              title: "Lesson 35: 音の変化",
              contentPlain: "アラビア語の発音をスムーズにするための、2つの重要な音の変化ルールです。「彼の～（フ）」が「ヒ」に変わったり、「イラー」が「イライヤ」に変わったりする理由を解説します。",
              
              imageUrls: [
                "/image/grammar/lesson35_1.jpg", 
                "/image/grammar/lesson35_2.jpg", 
                "/image/grammar/lesson35_3.jpg", 
                "/image/grammar/lesson35_4.jpg", 
                "/image/grammar/lesson35_5.jpg", 
              ],
              
              contentVoweled: "",
              sentences: [], 
              vocabList: [],
              
              questions: [
                {
                  type: "grammar",
                  text: "「私はそれで（ペンで）書きました」\n（ヒント：bi + hu の変化）\n「كَتَبْتُ ___」",
                  options: [
                    "بِهِ (bihi)", // 正解
                    "بِهُ (bihu)",
                    "بُهُ (buhu)",
                    "بَهِ (bahi)"
                  ],
                  correctIndex: 0,
                  explanation: "前置詞「ビ（bi）」の母音「イ」に釣られて、後ろの代名詞「フ（hu）」が「ヒ（hi）」に変わります。「ビフ」とは言いにくいので「ビヒ」になります。"
                },
                {
                  type: "grammar",
                  text: "「彼らの中に（善が）あります」\n（ヒント：fī + hum の変化）\n「___ خَيْرٌ」",
                  options: [
                    "فِيهِمْ (fīhim)", // 正解
                    "فِيهُمْ (fīhum)",
                    "فُوهُمْ (fūhum)",
                    "فَاهُمْ (fāhum)"
                  ],
                  correctIndex: 0,
                  explanation: "前置詞「フィー（fī）」の「イー」の音に釣られて、「フム（hum）」が「ヒム（him）」に変わります。"
                },
                {
                  type: "grammar",
                  text: "「彼に平安あれ」\n（ヒント：‘alā + hu の変化）\n「___ السَّلَامُ」",
                  options: [
                    "عَلَيْهِ (‘alayhi)", // 正解
                    "عَلَيْهُ (‘alayhu)",
                    "عَلَاهُ (‘alāhu)",
                    "عَلِيهِ (‘alihi)"
                  ],
                  correctIndex: 0,
                  explanation: "前置詞「アラー」に代名詞がつくと「アライ（‘alay-）」になります。この「ヤ（y）」の音に釣られて、後ろが「ヒ（hi）」になります。"
                },
                {
                  type: "grammar",
                  text: "「彼は私を見ました（私のほうへ見た）」\n（ヒント：ilā + ana の変化）\n「نَظَرَ ___」",
                  options: [
                    "إِلَيَّ (ilayya)", // 正解
                    "إِلَايَ (ilāya)",
                    "إِلِي (ilī)",
                    "إِلَنِي (ilanii)"
                  ],
                  correctIndex: 0,
                  explanation: "前置詞「イラー（ilā）」に「私（ī）」がつくと、音が融合して「イライヤ（ilayya）」という形になります。"
                },
                {
                  type: "grammar",
                  text: "「彼の家の中で」\n（ヒント：fī bayt... + hu）\n「فِي ___」",
                  options: [
                    "بَيْتِهِ (baytihi)", // 正解
                    "بَيْتُهُ (baytuhu)",
                    "بَيْتَهُ (baytahu)",
                    "بَيْتِهُ (baytihu)"
                  ],
                  correctIndex: 0,
                  explanation: "前置詞「フィー」があるので「家（bayt）」は属格「バイティ（bayti）」になります。さらにその「イ」の音に釣られて、最後の「フ（hu）」も「ヒ（hi）」に変わります。"
                }
              ]
            },
            {
              id: 136,
              level: "文法",
              category: "不規則複数形",
              title: "Lesson 36: 不規則複数形",
              contentPlain: "不規則複数形（ブロークン・プルーラル）の中でも、特に文法的に特殊な動きをする「限定なしだとタンウィーンがつかないグループ」についての解説です。専門用語では「二段変化名詞（マナー・ミナ・ッ・サルフ）」と呼ばれます。「モスク（マサージド）」などが代表例です。普通の単語とは違う、「2つの禁止ルール」と「例外の復活」がポイントです。",
              
              imageUrls: [
                "/image/grammar/lesson36_1.jpg", 
                "/image/grammar/lesson36_2.jpg", 
                "/image/grammar/lesson36_3.jpg", 
                "/image/grammar/lesson36_4.jpg", 
                "/image/grammar/lesson36_5.jpg", 
                "/image/grammar/lesson36_6.jpg", 
                "/image/grammar/lesson36_7.jpg", 
                "/image/grammar/lesson36_8.jpg", 
              ],
              
              contentVoweled: "",
              sentences: [], 
              vocabList: [],
              
              questions: [
                {
                  type: "grammar",
                  text: "「これらはモスク（複数形）です」\n（ヒント：非限定の主語。タンウィーン「ン」はつく？）\n「هَذِهِ ___」",
                  options: [
                    "مَسَاجِدُ (masājidu)", // 正解
                    "مَسَاجِدٌ (masājidun)",
                    "مَسَاجِدَ (masājida)",
                    "مَسَاجِدٍ (masājidin)"
                  ],
                  correctIndex: 0,
                  explanation: "「マファーイル型（mafā'il）」の複数形は二段変化名詞です。非限定でもタンウィーン（ン）がつかず、「マサージドゥ」となります。"
                },
                {
                  type: "grammar",
                  text: "【最重要】「私は（いくつかの）モスクで祈りました」\n（ヒント：前置詞の後ろの変化）\n「صَلَّيْتُ فِي ___」",
                  options: [
                    "مَسَاجِدَ (masājida)", // 正解
                    "مَسَاجِدِ (masājidi)",
                    "مَسَاجِدٍ (masājidin)",
                    "مَسَاجِدُ (masājidu)"
                  ],
                  correctIndex: 0,
                  explanation: "二段変化名詞の最大の特徴です。非限定の場合、前置詞の後ろ（属格）であっても「イ」にならず「ア（fatḥa）」になります。"
                },
                {
                  type: "grammar",
                  text: "【比較】「私は『その』モスク（複数）で祈りました」\n（ヒント：定冠詞アルがつくとどうなる？）\n「صَلَّيْتُ فِي ___」",
                  options: [
                    "الْمَسَاجِدِ (al-masājidi)", // 正解
                    "الْمَسَاجِدَ (al-masājida)",
                    "الْمَسَاجِدُ (al-masājidu)",
                    "الْمَسَاجِدٍ (al-masājidin)"
                  ],
                  correctIndex: 0,
                  explanation: "定冠詞「アル」がつくと「禁止ルール」が解除されます。通常の名詞と同じように、前置詞の後ろなら「イ（kasra）」になります。"
                },
                {
                  type: "grammar",
                  text: "「私は（いくつかの）鍵でドアを開けました」\n（ヒント：鍵 miftāḥ → 複数 mafātīḥ）\n「فَتَحْتُ الْبَابَ بِـ___」",
                  options: [
                    "مَفَاتِيحَ (mafātīḥa)", // 正解
                    "مَفَاتِيحِ (mafātīḥi)",
                    "مَفَاتِيحٍ (mafātīḥin)",
                    "مَفَاتِيحُ (mafātīḥu)"
                  ],
                  correctIndex: 0,
                  explanation: "「マファーイール型（mafā'īl）」も二段変化名詞です。前置詞「ビ」の後ろなので属格ですが、非限定なので「ア」になります。"
                },
                {
                  type: "grammar",
                  text: "「東京の学校（複数）にて」\n（ヒント：イダーファで限定されると？）\n「فِي ___ طُوكْيُو」",
                  options: [
                    "مَدَارِسِ (madārisi)", // 正解
                    "مَدَارِسَ (madārisa)",
                    "مَدَارِسُ (madārisu)",
                    "مَدَارِسٍ (madārisin)"
                  ],
                  correctIndex: 0,
                  explanation: "後ろの名詞（東京）によって限定されている（イダーファ）ため、禁止ルールが解除されます。通常通り「イ（kasra）」の音になります。"
                },
                // --- 追加問題 ---
                {
                  type: "grammar",
                  text: "「私たちは（何人かの）学者たちから聞きました」\n（ヒント：学者 ‘ulamā’ も二段変化名詞）\n「سَمِعْنَا مِنْ ___」",
                  options: [
                    "عُلَمَاءَ (‘ulamā’a)", // 正解
                    "عُلَمَاءٍ (‘ulamā’in)",
                    "عُلَمَاءِ (‘ulamā’i)",
                    "عُلَمَاءُ (‘ulamā’u)"
                  ],
                  correctIndex: 0,
                  explanation: "「ウラマー（学者）」のように語尾が「アーウ（alif mamdūda）」で終わる複数形も二段変化名詞です。前置詞 min のあとですが、非限定なので「ア」になります。"
                },
                {
                  type: "grammar",
                  text: "【難問】「私は新しい友達（複数）と出かけました」\n（ヒント：友達 aṣdiqā’ は二段変化、新しい judud は普通の名詞）\n「خَرَجْتُ مَعَ ___ ___」",
                  options: [
                    "أَصْدِقَاءَ جُدُدٍ (aṣdiqā’a jududin)", // 正解
                    "أَصْدِقَاءَ جُدُدًا (aṣdiqā’a jududan)",
                    "أَصْدِقَاءِ جُدُدٍ (aṣdiqā’i jududin)",
                    "أَصْدِقَاءٍ جُدُدٍ (aṣdiqā’in jududin)"
                  ],
                  correctIndex: 0,
                  explanation: "ここが最大の難所です。「友達」は二段変化なので属格が「ア」になりますが、修飾する「新しい（judud）」は普通の名詞なので、通常通り属格が「イ（in）」になります。見た目はバラバラですが、どちらも「属格」です。"
                },
                {
                  type: "grammar",
                  text: "「この本は（特定の）学者たちのためのものです」\n（ヒント：定冠詞がついた場合）\n「هَذَا الْكِتَابُ لِلْـ___」",
                  options: [
                    "عُلَمَاءِ (‘ulamā’i)", // 正解
                    "عُلَمَاءَ (‘ulamā’a)",
                    "عُلَمَاءُ (‘ulamā’u)",
                    "عُلَمَاءٍ (‘ulamā’in)"
                  ],
                  correctIndex: 0,
                  explanation: "「ウラマー」も定冠詞「アル」がつけば禁止ルールが解除されます。前置詞リ（〜のための）の後ろなので、通常通り「イ」になります。"
                }
              ]
            },
            {
              id: 137,
              level: "文法",
              category: "ハムザの種類",
              title: "Lesson 37: ハムザを書くとき、書かないとき",
              contentPlain: "「いつワスル（消えるハムザ）になり、いつカト（消えないハムザ）になるのか？」このルールは、動詞の「形（何形か）」と「時制（過去・命令など）」によって明確に決まっています。特に「命令形」と「第4形」が混乱しやすいポイントです。",
              
              imageUrls: [
                "/image/grammar/lesson37_1.jpg", 
                "/image/grammar/lesson37_2.jpg", 
                "/image/grammar/lesson37_3.jpg", 
                "/image/grammar/lesson37_4.jpg", 
                "/image/grammar/lesson37_5.jpg", 
                "/image/grammar/lesson37_6.jpg", 
                "/image/grammar/lesson37_7.jpg", 
              ],
              
              contentVoweled: "",
              sentences: [], 
              vocabList: [],
              
              questions: [
                {
                  type: "grammar",
                  text: "「（あなた男性は）書いてください」\n正しい表記は？\n（ヒント：第1形の命令形はハムザトゥル・ワスル）",
                  options: [
                    "اُكْتُبْ (uktub)", // 正解
                    "أُكْتُبْ (uktub - ハムザあり)",
                    "إِكْتُبْ (iktub)",
                    "أَكْتُبْ (aktub)"
                  ],
                  correctIndex: 0,
                  explanation: "基本形（第1形）の命令形の頭は「ハムザトゥル・ワスル（Hamzat al-Waṣl）」です。文字の上にハムザ記号（ء）は書きません。"
                },
                {
                  type: "grammar",
                  text: "【重要】「彼は（手紙を）送りました」\n正しい表記は？\n（ヒント：第4形 arsala はハムザトゥル・カト）",
                  options: [
                    "أَرْسَلَ (arsala)", // 正解
                    "اِرْسَلَ (irsala)",
                    "اَرْسَلَ (arsala - ハムザなし)",
                    "أُرْسِلَ (ursila)"
                  ],
                  correctIndex: 0,
                  explanation: "第4形（Af‘ala）は、過去・命令・動名詞のすべてにおいて「ハムザトゥル・カト（Hamzat al-Qaṭ‘）」です。必ずハムザ記号（ء）を書きます。"
                },
                {
                  type: "grammar",
                  text: "「私はアラビア語を勉強します」\n正しい表記は？\n（ヒント：現在形の一人称「私は〜する」）",
                  options: [
                    "أَدْرُسُ (adrusu)", // 正解
                    "اَدْرُسُ (adrusu - ハムザなし)",
                    "اُدْرُسُ (udrusu)",
                    "إِدْرُسُ (idrusu)"
                  ],
                  correctIndex: 0,
                  explanation: "動詞の形に関わらず、現在形の「私（Anā）」の活用（ア〜）は、すべて「ハムザトゥル・カト」です。必ずハムザを書きます。"
                },
                {
                  type: "grammar",
                  text: "「あなたの名前は何ですか？」\n正しい表記は？\n（ヒント：名詞 ism は特殊なワスル）",
                  options: [
                    "مَا اسْمُكَ ؟ (ma-smuka)", // 正解
                    "مَا إِسْمُكَ ؟ (ma ismuka)",
                    "مَا أَسْمُكَ ؟ (ma asmuka)",
                    "مَا سْمُكَ ؟ (ma smuka)"
                  ],
                  correctIndex: 0,
                  explanation: "「名前（ism）」や「息子（ibn）」など特定の10語は、名詞ですが例外的に「ハムザトゥル・ワスル」です。ハムザ記号は書かず、前の母音とつなげて発音します。"
                },
                {
                  type: "grammar",
                  text: "「（あなた男性は）待ってください」\n正しい表記は？\n（ヒント：第8形 intaẓara の命令形）",
                  options: [
                    "اِنْتَظِرْ (intaẓir)", // 正解
                    "إِنْتَظِرْ (intaẓir - ハムザあり)",
                    "أَنْتَظِرْ (antaẓir)",
                    "اُنْتَظِرْ (untaẓir)"
                  ],
                  correctIndex: 0,
                  explanation: "5文字以上の動詞（第7〜10形）の命令形は、すべて「ハムザトゥル・ワスル」です。ハムザ記号は書きません。"
                }
              ]
            },
            {
              id: 138,
              level: "文法",
              category: "ハムザの種類",
              title: "Lesson 38: ハムザの形の変化",
              contentPlain: "アラビア語の学習者が最も頭を悩ませる「ハムザの書き分け（どの椅子に座るか問題）」です。これは、ハムザを「弱い王様」、母音を「王様を座らせる椅子の提供者」と考えると、一気に分かりやすくなります。ルールは「母音の強さランキング」これ一つだけです。",
              
              imageUrls: [
                "/image/grammar/lesson38_1.jpg", 
                "/image/grammar/lesson38_2.jpg", 
                "/image/grammar/lesson38_3.jpg", 
                "/image/grammar/lesson38_4.jpg", 
                "/image/grammar/lesson38_5.jpg", 
                "/image/grammar/lesson38_6.jpg", 
              ],
              
              contentVoweled: "",
              sentences: [], 
              vocabList: [],
              
              questions: [
                {
                  type: "grammar",
                  text: "「質問（su'āl）」の正しいつづりは？\n（ヒント：前が「ウ」、自らは「ア」。勝つのはどっち？）",
                  options: [
                    "سُؤَال (su'āl)", // 正解
                    "سُأَال (su'āl - アリフ)",
                    "سُئَال (su'āl - ヤー)",
                    "سُءَال (su'āl - 孤立)"
                  ],
                  correctIndex: 0,
                  explanation: "前の母音「ウ (u)」と自分の母音「ア (a)」が戦います。「ウ」の方が強いので、ウに対応する「ワウの椅子（ؤ）」に座ります。"
                },
                {
                  type: "grammar",
                  text: "「聞かれた（su'ila）」受動態の正しいつづりは？\n（ヒント：前が「ウ」、自らは「イ」。最強は？）",
                  options: [
                    "سُئِلَ (su'ila)", // 正解
                    "سُؤِلَ (su'ila - ワウ)",
                    "سُأِلَ (su'ila - アリフ)",
                    "سُءِلَ (su'ila - 孤立)"
                  ],
                  correctIndex: 0,
                  explanation: "前の「ウ」より、自分の「イ（kasra）」の方が強さランキング1位（最強）なので、イに対応する「ヤーの椅子（ئ）」に座ります。"
                },
                {
                  type: "grammar",
                  text: "「頭（ra's）」の正しいつづりは？\n（ヒント：前が「ア」、自らは「無音」）",
                  options: [
                    "رَأْس (ra's)", // 正解
                    "رَؤْس (ra's - ワウ)",
                    "رَئْس (ra's - ヤー)",
                    "رَءْس (ra's - 孤立)"
                  ],
                  correctIndex: 0,
                  explanation: "前の「ア」と自分の「無音（スクーン）」の勝負です。「ア」が勝つので、アに対応する「アリフの椅子（أ）」に座ります。"
                },
                {
                  type: "grammar",
                  text: "「大統領／リーダー（ra'īs）」の正しいつづりは？\n（ヒント：前が「ア」、自らは「イ」）",
                  options: [
                    "رَئِيس (ra'īs)", // 正解
                    "رَأِيس (ra'īs - アリフ)",
                    "رَؤِيس (ra'īs - ワウ)",
                    "رَءِيس (ra'īs - 孤立)"
                  ],
                  correctIndex: 0,
                  explanation: "「ア」対「イ」の勝負です。最強の「イ」が勝つので、ヤーの椅子（ئ）になります。"
                },
                {
                  type: "grammar",
                  text: "【語末】「彼は読む（yaqra'u）」の正しいつづりは？\n（ヒント：語末は『直前の母音』だけで決まります）",
                  options: [
                    "يَقْرَأُ (yaqra'u)", // 正解
                    "يَقْرَؤُ (yaqra'u - ワウ)",
                    "يَقْرَئُ (yaqra'u - ヤー)",
                    "يَقْرَءُ (yaqra'u - 孤立)"
                  ],
                  correctIndex: 0,
                  explanation: "語末のハムザは、直前の母音が「ア」ならアリフの上に書きます。"
                },
                {
                  type: "grammar",
                  text: "【語末】「海岸（shāṭi'）」の正しいつづりは？\n（ヒント：直前の母音が『イ』）",
                  options: [
                    "شَاطِئ (shāṭi')", // 正解
                    "شَاطِأ (shāṭi' - アリフ)",
                    "شَاطِؤ (shāṭi' - ワウ)",
                    "شَاطِء (shāṭi' - 孤立)"
                  ],
                  correctIndex: 0,
                  explanation: "語末で直前が「イ」の場合、点のつかないヤー（アリフ・マクスーラのような形）の上にハムザを書きます。"
                },
                {
                  type: "grammar",
                  text: "【語末】「水（mā'）」の正しいつづりは？\n（ヒント：直前が「長母音のアリフ」）",
                  options: [
                    "مَاء (mā')", // 正解
                    "مَأ (ma')",
                    "مَاؤ (mā'u)",
                    "مَائ (mā'i)"
                  ],
                  correctIndex: 0,
                  explanation: "長母音（アー、ウー、イー）は「スクーン（無音）」扱いとなります。直前がスクーンの場合、ハムザは「孤立（椅子なし）」して行の上に書きます。"
                },
                {
                  type: "grammar",
                  text: "【語末】「物（shay'）」の正しいつづりは？\n（ヒント：直前がヤのスクーン）",
                  options: [
                    "شَيْء (shay')", // 正解
                    "شَيْئ (shay' - ヤー)",
                    "شَيْأ (shay' - アリフ)",
                    "شَيُؤ (shayu')"
                  ],
                  correctIndex: 0,
                  explanation: "直前がスクーン（無音）なので、ハムザは孤立します。「シェイ・ウ」ではなく「シェイ・ッ（声門閉鎖）」のような音です。"
                }
              ]
            },
            {
              id: 139,
              level: "文法",
              category: "不規則動詞",
              title: "Lesson 39: 中空動詞（くぼみ動詞）",
              contentPlain: "真ん中の文字が「アリフ」になっている動詞です。辞書形（過去形）ではアリフですが、現在形になると「ウ・イ・ア」のどれかに変身します。また、命令形や「私」の過去形では、その長母音自体が消えて短くなる（くぼむ）のが特徴です。",
              
              imageUrls: [
                "/image/grammar/lesson39_1.jpg", 
                "/image/grammar/lesson39_2.jpg", 
                "/image/grammar/lesson39_3.jpg", 
                "/image/grammar/lesson39_4.jpg", 
                "/image/grammar/lesson39_5.jpg", 
                "/image/grammar/lesson39_6.jpg", 
                "/image/grammar/lesson39_7.jpg", 
                "/image/grammar/lesson39_8.jpg", 
                "/image/grammar/lesson39_9.jpg", 
                "/image/grammar/lesson39_10.jpg", 
                "/image/grammar/lesson39_11.jpg", 
                "/image/grammar/lesson39_12.jpg", 
                "/image/grammar/lesson39_13.jpg", 
                "/image/grammar/lesson39_14.jpg", 
                "/image/grammar/lesson39_15.jpg", 
              ],
              
              contentVoweled: "",
              sentences: [], 
              vocabList: [],
              
              questions: [
                {
                  type: "grammar",
                  text: "「ムスリムたちはラマダーン月に断食します（現在形）」\n「___ الْمُسْلِمُونَ فِي رَمَضَانَ」",
                  options: [
                    "يَصُومُ (yaṣūmu)", // 正解
                    "يَصَامُ (yaṣāmu)",
                    "يَصِيمُ (yaṣīmu)",
                    "يَصْمُ (yaṣmu)"
                  ],
                  correctIndex: 0,
                  explanation: "中空動詞の多くは、現在形で真ん中のアリフが「ウ (ū)」に変わります。ṣāma（サーマ）→ yaṣūmu（ヤスーム）です。"
                },
                {
                  type: "grammar",
                  text: "「その鳥は空を飛んでいます」\n「___ الطَّائِرُ فِي السَّمَاءِ」",
                  options: [
                    "يَطِيرُ (yaṭīru)", // 正解
                    "يَطُورُ (yaṭūru)",
                    "يَطَارُ (yaṭāru)",
                    "طَائِرٌ (ṭā'irun)"
                  ],
                  correctIndex: 0,
                  explanation: "現在形で「イ (ī)」に変わるグループもあります。ṭāra（ターラ）→ yaṭīru（ヤティール）です。"
                },
                {
                  type: "grammar",
                  text: "「私は先月、カイロを訪れました」\n「___ الْقَاهِرَةَ الشَّهْرَ الْمَاضِيَ」",
                  options: [
                    "زُرْتُ (zurtu)", // 正解
                    "زَارْتُ (zārtu)",
                    "زِرْتُ (zirtu)",
                    "زَرْتُ (zartu)"
                  ],
                  correctIndex: 0,
                  explanation: "中空動詞の過去形で、後ろに「トゥ（私）」などがつくと、真ん中の長母音は消えます（くぼみます）。zāra はウのグループなので、zurtu（ズルトゥ）になります。"
                },
                {
                  type: "grammar",
                  text: "「真実を言いなさい（男性への命令）」\n「___ الْحَقَّ」",
                  options: [
                    "قُلْ (qul)", // 正解
                    "قُولْ (qūl)",
                    "قَالَ (qāla)",
                    "قِلْ (qil)"
                  ],
                  correctIndex: 0,
                  explanation: "命令形も「くぼみ」ます。qāla（言った）はウのグループなので、短くして「クル（qul）」となります。"
                },
                {
                  type: "grammar",
                  text: "「彼はまだ戻ってきていません（否定・要求法）」\n「هُوَ لَمْ ___ بَعْدُ」",
                  options: [
                    "يَعُدْ (ya‘ud)", // 正解
                    "يَعُودُ (ya‘ūdu)",
                    "يَعِدْ (ya‘id)",
                    "عَادَ (‘āda)"
                  ],
                  correctIndex: 0,
                  explanation: "「ラム（lam）」の後ろで動詞は要求法（スクーン）になりますが、中空動詞はここでも長母音が消えて短くなります。ya‘ūdu → ya‘ud（ヤウド）となります。"
                }
              ]
            },
            {
              id: 140,
              level: "文法",
              category: "不規則動詞",
              title: "Lesson 40: ダブル動詞",
              contentPlain: "ダブル動詞（重母音動詞）はシャッダを含む動詞です。 「シャッダがいつ外れるか？」 という理解は非常に重要です。暗記ではなく、「二つのスクーンの衝突という物理的な衝突事故を回避するための緊急回避行動として理解すると、わかりやすいです。",
              
              imageUrls: [
                "/image/grammar/lesson40_1.jpg", 
                "/image/grammar/lesson40_2.jpg", 
                "/image/grammar/lesson40_3.jpg", 
                "/image/grammar/lesson40_4.jpg", 
                "/image/grammar/lesson40_5.jpg", 
                "/image/grammar/lesson40_6.jpg", 
                "/image/grammar/lesson40_7.jpg", 
              ],
              
              contentVoweled: "",
              sentences: [], 
              vocabList: [],
              
              questions: [
                {
                  type: "grammar",
                  text: "「私は（手紙の）返事をしました」\n（ヒント：返事する radda → 私は〜した。シャッダは外れる？）\n「___ عَلَى الرِّسَالَةِ」",
                  options: [
                    "رَدَدْتُ (radadtu)", // 正解
                    "رَدَّتُ (raddatu)",
                    "رَدِّتُ (radditu)",
                    "رَدُدْتُ (radudtu)"
                  ],
                  correctIndex: 0,
                  explanation: "「私（-tu）」のように子音で始まる語尾がつくと、シャッダが外れて元の2文字に戻ります（radda → radad-tu）。"
                },
                {
                  type: "grammar",
                  text: "「彼は（手紙の）返事をしました」\n（ヒント：彼は〜した。シャッダは？）\n「___ عَلَى الرِّسَالَةِ」",
                  options: [
                    "رَدَّ (radda)", // 正解
                    "رَدَدَ (radada)",
                    "رَدَّدَ (raddada)",
                    "رُدَّ (rudda)"
                  ],
                  correctIndex: 0,
                  explanation: "「彼」の場合は語尾がつかない（母音のみ）ので、シャッダはそのまま維持されます。"
                },
                {
                  type: "grammar",
                  text: "「私たちはその家の前を通りました」\n（ヒント：通る marra → 私たちは〜した）\n「___ أَمَامَ الْبَيْتِ」",
                  options: [
                    "مَرَرْنَا (mararnā)", // 正解
                    "مَرَّنَا (marrnā)",
                    "مَرْنَا (marnā)",
                    "مُرِرْنَا (murirnā)"
                  ],
                  correctIndex: 0,
                  explanation: "「私たち（-nā）」も子音で始まる語尾なので、marra が marar-nā に解凍されます。"
                },
                {
                  type: "grammar",
                  text: "「彼女はその家の前を通りました」\n（ヒント：彼女は〜した -at）\n「___ أَمَامَ الْبَيْتِ」",
                  options: [
                    "مَرَّتْ (marrat)", // 正解
                    "مَرَرَتْ (mararat)",
                    "مَرَّةً (marratan)",
                    "مَرِّتْ (marrit)"
                  ],
                  correctIndex: 0,
                  explanation: "「彼女（-at）」は母音で始まる（母音を伴う）とみなされ、シャッダは外れません。"
                },
                {
                  type: "grammar",
                  text: "「あなた（男性）はドアをノックしましたか？」\n（ヒント：ノックする daqqa → あなたは〜した）\n「هَلْ ___ الْبَابَ ؟」",
                  options: [
                    "دَقَقْتَ (daqaqta)", // 正解
                    "دَقَّتَ (daqqata)",
                    "دَقِقْتَ (daqiqta)",
                    "دُقْتَ (duqta)"
                  ],
                  correctIndex: 0,
                  explanation: "「あなた（-ta）」も子音で始まるので解凍されます（daqqa → daqaq-ta）。"
                },
                {
                  type: "grammar",
                  text: "「彼ら（男性複数）はドアをノックしました」\n（ヒント：彼らは〜した -ū）\n「هُمْ ___ الْبَابَ」",
                  options: [
                    "دَقُّوا (daqqū)", // 正解
                    "دَقَقُوا (daqaqū)",
                    "دَاقُّوا (dāqqū)",
                    "دَقُونَا (daqūnā)"
                  ],
                  correctIndex: 0,
                  explanation: "「彼ら（-ū）」は母音（長母音）で始まるので、シャッダは外れません。"
                },
                {
                  type: "grammar",
                  text: "「私はそう思いました（考えました）」\n（ヒント：思う ẓanna → 私は〜した）\n「___ ذَلِكَ」",
                  options: [
                    "ظَنَنْتُ (ẓanantu)", // 正解
                    "ظَنَّتُ (ẓannatu)",
                    "ظِنْتُ (ẓintu)",
                    "ظُنْتُ (ẓuntu)"
                  ],
                  correctIndex: 0,
                  explanation: "「ザンナ（ẓanna）」も「ザナントゥ」に解凍されます。"
                },
                {
                  type: "grammar",
                  text: "「彼はお金を数えます（現在形）」\n（ヒント：数える ‘adda → ya...u）\n「هُوَ ___ النُّقُودَ」",
                  options: [
                    "يَعُدُّ (ya‘uddu)", // 正解
                    "يَعْدُدُ (ya‘dudu)",
                    "يُعِدُّ (yu‘iddu)",
                    "يَعْدُّ (ya‘ddu)"
                  ],
                  correctIndex: 0,
                  explanation: "現在形の場合、後ろに何もつかない（または母音だけの）場合はシャッダのままです。"
                }
              ]
            },
            {
              id: 141,
              level: "文法",
              category: "不規則動詞",
              title: "Lesson 41: 弱動詞",
              contentPlain: "語尾に「弱い文字（アリフ・ワウ・ヤー）」を持つ動詞です。過去形では「私が～した」と言う時に元の形（ヤやワウ）が復活したり、要求法（～しなかった）では尻尾がちぎれて消えたりするのが特徴です。",
              
              imageUrls: [
                "/image/grammar/lesson41_1.jpg", 
                "/image/grammar/lesson41_2.jpg", 
                "/image/grammar/lesson41_3.jpg", 
                "/image/grammar/lesson41_4.jpg", 
                "/image/grammar/lesson41_5.jpg", 
                "/image/grammar/lesson41_6.jpg", 
                "/image/grammar/lesson41_7.jpg", 
                "/image/grammar/lesson41_8.jpg", 
              ],
              
              contentVoweled: "",
              sentences: [], 
              vocabList: [],
              
              questions: [
                {
                  type: "grammar",
                  text: "「私は（家まで）歩きました」\n（ヒント：歩く mashā → 私は〜した。アリフが『ヤ』に戻る？）\n「___ إِلَى الْبَيْتِ」",
                  options: [
                    "مَشَيْتُ (mashaytu)", // 正解
                    "مَشَاتُ (mashātu)",
                    "مَشَوْتُ (mashawtu)",
                    "مَشِيتُ (mashītu)"
                  ],
                  correctIndex: 0,
                  explanation: "「歩く（mashā）」のように語尾が「アリフ・マクスーラ（ى）」で終わる動詞は、過去形の活用で「ヤ（ay）」の音に戻ります。"
                },
                {
                  type: "grammar",
                  text: "「私は彼を（パーティーに）招待しました」\n（ヒント：招待する da‘ā → 私は〜した。アリフが『ワウ』に戻る？）\n「___ لِلْحَفْلَةِ」",
                  options: [
                    "دَعَوْتُهُ (da‘awtuhu)", // 正解
                    "دَعَيْتُهُ (da‘aytuhu)",
                    "دَعَاتُهُ (da‘ātuhu)",
                    "دَعُوتُهُ (da‘ūtuhu)"
                  ],
                  correctIndex: 0,
                  explanation: "「招待する（da‘ā）」のように語尾が「縦長のアリフ（ا）」で終わる動詞の多くは、活用すると「ワウ（aw）」の音が現れます。"
                },
                {
                  type: "grammar",
                  text: "「エンジニアは新しい家を建てます（現在形）」\n（ヒント：建てる banā → ya...）\n「___ الْمُهَنْدِسُ بَيْتًا جَدِيدًا」",
                  options: [
                    "يَبْنِي (yabnī)", // 正解
                    "يَبْنُو (yabnū)",
                    "يَبْنَا (yabnā)",
                    "بَنَى (banā)"
                  ],
                  correctIndex: 0,
                  explanation: "「建てる（banā）」の現在形は「ヤブニー（yabnī）」です。語尾がイの音になります。"
                },
                {
                  type: "grammar",
                  text: "「彼は祈りませんでした（過去否定・要求法）」\n（ヒント：祈る ṣallā → yaṣallī → lam ...?）\n「هُوَ لَمْ ___」",
                  options: [
                    "يُصَلِّ (yuṣalli)", // 正解
                    "يُصَلِّي (yuṣallī)",
                    "يُصَلَّ (yuṣalla)",
                    "صَلَّى (ṣallā)"
                  ],
                  correctIndex: 0,
                  explanation: "弱動詞の最大の特徴です。「ラム（lam）」の後ろでは、語尾の長母音（ī）が切り落とされて、短い母音（i）だけが残ります。表記上も「ヤー」が消えます。"
                },
                {
                  type: "grammar",
                  text: "「（あなた男性は）忘れてはいけません（禁止）」\n（ヒント：忘れる nasiya → yansā → lā ...?）\n「لَا ___」",
                  options: [
                    "تَنْسَ (tansa)", // 正解
                    "تَنْسَى (tansā)",
                    "تَنْسُ (tansu)",
                    "نَسِيَ (nasiya)"
                  ],
                  correctIndex: 0,
                  explanation: "禁止の「ラー」の後ろでも、語尾の長母音（ā）が切り落とされます。「タンサー」ではなく、短く「タンサ（tansa）」となります。"
                }
              ]
            },
            {
              id: 142,
              level: "文法",
              category: "二段変化名詞",
              title: "Lesson 42: 二段変化名詞",
              contentPlain: "二段変化名詞（マムヌー・ミナ・ッ・サルフ）の総まとめです。固有名詞（地名・人名）、形容詞（色・比較級）、特定の複数形など、多くの種類があります。「いつアになり、いつイに戻るのか？」その境界線をマスターしましょう。",
              
              imageUrls: [
                "/image/grammar/lesson42_1.jpg", 
                "/image/grammar/lesson42_2.jpg", 
                "/image/grammar/lesson42_3.jpg", 
                "/image/grammar/lesson42_4.jpg", 
                "/image/grammar/lesson42_5.jpg", 
                "/image/grammar/lesson42_6.jpg", 
                "/image/grammar/lesson42_7.jpg", 
                "/image/grammar/lesson42_8.jpg", 
                "/image/grammar/lesson42_9.jpg", 
              ],
              
              contentVoweled: "",
              sentences: [], 
              vocabList: [],
              
              questions: [
                {
                  type: "grammar",
                  text: "「私はロンドンとパリへ旅行しました」\n（ヒント：外国の地名は二段変化）\n「سَافَرْتُ إِلَى ___ وَ ___」",
                  options: [
                    "لَنْدَنَ وَ بَارِيسَ (Landana wa Bārīsa)", // 正解
                    "لَنْدَنٍ وَ بَارِيسٍ (Landanin wa Bārīsin)",
                    "لَنْدَنِ وَ بَارِيسِ (Landani wa Bārīsi)",
                    "لَنْدَنُ وَ بَارِيسُ (Landanu wa Bārīsu)"
                  ],
                  correctIndex: 0,
                  explanation: "前置詞「イラー（へ）」の後ろなので属格ですが、外国の地名は二段変化名詞のため、属格語尾が「ア（fatḥa）」になります。"
                },
                {
                  type: "grammar",
                  text: "「彼は赤いペンで書きました」\n（ヒント：赤 aḥmar は形容詞。前の「ペン」は普通の属格）\n「كَتَبَ بِقَلَمٍ ___」",
                  options: [
                    "أَحْمَرَ (aḥmara)", // 正解
                    "أَحْمَرِ (aḥmari)",
                    "أَحْمَرٍ (aḥmarin)",
                    "أَحْمَرُ (aḥmaru)"
                  ],
                  correctIndex: 0,
                  explanation: "ここが難所です。「ペン（qalamin）」は普通の名詞なので属格「イン」ですが、それを修飾する「赤い（aḥmar）」は二段変化なので、属格でも「ア」になります。音が揃わないので注意が必要です。"
                },
                {
                  type: "grammar",
                  text: "「この本はファーティマのものです」\n（ヒント：女性名は二段変化）\n「هَذَا الْكِتَابُ لِـ___」",
                  options: [
                    "فَاطِمَةَ (Fāṭimata)", // 正解
                    "فَاطِمَةِ (Fāṭimati)",
                    "فَاطِمَةٍ (Fāṭimatin)",
                    "فَاطِمَةُ (Fāṭimatu)"
                  ],
                  correctIndex: 0,
                  explanation: "前置詞「リ（〜の）」の後ろなので属格になります。女性名は基本的に二段変化なので「タ（a）」になります。"
                },
                {
                  type: "grammar",
                  text: "「私はラマダーン月に断食しました」\n（ヒント：〜ān で終わる固有名詞）\n「صُمْتُ فِي شَهْرِ ___」",
                  options: [
                    "رَمَضَانَ (Ramaḍāna)", // 正解
                    "رَمَضَانِ (Ramaḍāni)",
                    "رَمَضَانٍ (Ramaḍānin)",
                    "رَمَضَانُ (Ramaḍānu)"
                  ],
                  correctIndex: 0,
                  explanation: "「ラマダーン」や「ウスマーン」のように「アーン」で終わる固有名詞は二段変化です。イダーファの第2要素（属格の位置）ですが、語尾は「ア」になります。"
                },
                {
                  type: "grammar",
                  text: "「私たちは（ある）他の機会に会いましょう」\n（ヒント：他 ukhrā は形容詞。機会 furṣa は女性名詞）\n「سَنَلْتَقِي فِي فُرْصَةٍ ___」",
                  options: [
                    "أُخْرَى (ukhrā)", // 正解
                    "آخَرَ (ākhara)",
                    "أُخْرٍ (ukhrin)",
                    "أَخِيرَةٍ (akhīratin)"
                  ],
                  correctIndex: 0,
                  explanation: "「アハル（他・男）」の女性形「ウフラー（ukhrā）」も二段変化ですが、語尾がアリフなので母音の変化は見えません。しかし文法的には「ア」の状態です。"
                },
                {
                  type: "grammar",
                  text: "【例外ルール】「白い家の中で」\n（ヒント：定冠詞アルがつくとどうなる？）\n「فِي الْبَيْتِ ___」",
                  options: [
                    "الْأَبْيَضِ (al-abyaḍi)", // 正解
                    "الْأَبْيَضَ (al-abyaḍa)",
                    "الْأَبْيَضُ (al-abyaḍu)",
                    "أَبْيَضَ (abyaḍa)"
                  ],
                  correctIndex: 0,
                  explanation: "色は二段変化（アになる）ですが、定冠詞「アル」がつくと「禁止ルール」が解除され、通常通り「イ（kasra）」に戻ります。"
                },
                {
                  type: "grammar",
                  text: "【例外ルール】「町の学校（複数）にて」\n（ヒント：イダーファで限定されると？）\n「فِي ___ الْمَدِينَةِ」",
                  options: [
                    "مَدَارِسِ (madārisi)", // 正解
                    "مَدَارِسَ (madārisa)",
                    "مَدَارِسُ (madārisu)",
                    "مَدَارِسٍ (madārisin)"
                  ],
                  correctIndex: 0,
                  explanation: "これも解除ルールです。後ろの単語（町）によって限定されているため、二段変化名詞（マダーリス）でも「イ」に戻ります。"
                },
                {
                  type: "grammar",
                  text: "「イブラーヒーム（預言者）より」\n（ヒント：非アラビア語源の男性名）\n「مِنْ ___」",
                  options: [
                    "إِبْرَاهِيمَ (Ibrāhīma)", // 正解
                    "إِبْرَاهِيمِ (Ibrāhīmi)",
                    "إِبْرَاهِيمٍ (Ibrāhīmin)",
                    "إِبْرَاهِيمُ (Ibrāhīmu)"
                  ],
                  correctIndex: 0,
                  explanation: "イブラーヒーム、イスマーイールなどの非アラビア語源の預言者名は二段変化です。前置詞の後ろで「ア」になります。"
                },
                {
                  type: "grammar",
                  text: "「より良い生活のために」\n（ヒント：比較級 aḥsan + 女性名詞 ḥayāt）\n「لِحَيَاةٍ ___」",
                  options: [
                    "أَحْسَنَ (aḥsana)", // 正解
                    "أَحْسَنِ (aḥsani)",
                    "أَحْسَنٍ (aḥsanin)",
                    "حُسْنَى (ḥusnā)"
                  ],
                  correctIndex: 0,
                  explanation: "「生活（属格・イン）」を修飾する「より良い（aḥsan）」は二段変化なので、属格の位置で「ア」になります。"
                },
                {
                  type: "grammar",
                  text: "「私はお腹が空いた人（空腹な人）にパンをあげました」\n（ヒント：空腹 jaw'ān は二段変化）\n「أَعْطَيْتُ الْخُبْزَ لِرَجُلٍ ___」",
                  options: [
                    "جَوْعَانَ (jaw'āna)", // 正解
                    "جَوْعَانِ (jaw'āni)",
                    "جَوْعَانٍ (jaw'ānin)",
                    "جَائِعٍ (jāi'in)"
                  ],
                  correctIndex: 0,
                  explanation: "「〜アーン（fa'lān）」の形の形容詞（空腹、怒り、満腹など）は二段変化です。前の名詞（rajulin）が属格でも、こちらは「ア」になります。"
                }
              ]
            },
            {
              id: 143,
              level: "文法",
              category: "5つの特殊名詞",
              title: "Lesson 43: 5つの特殊名詞",
              contentPlain: "「父・兄弟・義父・口・～の持ち主」の5つの単語は、格変化が母音記号（ダンマ・ファトハ・カスラ）ではなく、文字（ワウ・アリフ・ヤー）によって変わるという特別なルールを持っています。ただし「私の父」や「複数形」の場合は例外なので注意が必要です。",
              
              imageUrls: [
                "/image/grammar/lesson43_1.jpg", 
                "/image/grammar/lesson43_2.jpg", 
                "/image/grammar/lesson43_3.jpg", 
                "/image/grammar/lesson43_4.jpg", 
                "/image/grammar/lesson43_5.jpg", 
                "/image/grammar/lesson43_6.jpg", 
                "/image/grammar/lesson43_7.jpg", 
                "/image/grammar/lesson43_8.jpg", 
                "/image/grammar/lesson43_9.jpg", 
                "/image/grammar/lesson43_10.jpg", 
              ],
              
              contentVoweled: "",
              sentences: [], 
              vocabList: [],
              
              questions: [
                {
                  type: "grammar",
                  text: "「あなたのお父さんは医者です」\n（ヒント：主語なので主格）\n「___ طَبِيبٌ」",
                  options: [
                    "أَبُوكَ (Abūka)", // 正解
                    "أَبَاكَ (Abāka)",
                    "أَبِيكَ (Abīka)",
                    "أَبُكَ (Abuka)"
                  ],
                  correctIndex: 0,
                  explanation: "5つの名詞は主格で「ワウ (ū)」を取ります。Abūka となります。"
                },
                {
                  type: "grammar",
                  text: "「私はあなたの弟（兄）を見ました」\n（ヒント：目的語なので対格）\n「رَأَيْتُ ___」",
                  options: [
                    "أَخَاكَ (Akhāka)", // 正解
                    "أَخُوكَ (Akhūka)",
                    "أَخِيكَ (Akhīka)",
                    "أَخَكَ (Akhaka)"
                  ],
                  correctIndex: 0,
                  explanation: "対格（〜を）の場合、文字は「アリフ (ā)」に変わります。Akhāka となります。"
                },
                {
                  type: "grammar",
                  text: "「あなたの義理のお父さんによろしく伝えてください」\n（ヒント：前置詞 'alā の後ろは属格）\n「سَلِّمْ عَلَى ___」",
                  options: [
                    "حَمِيكَ (Ḥamīka)", // 正解
                    "حَمَاكَ (Ḥamāka)",
                    "حَمُوكَ (Ḥamūka)",
                    "حَمِكَ (Ḥamika)"
                  ],
                  correctIndex: 0,
                  explanation: "属格（前置詞の後ろなど）の場合、文字は「ヤー (ī)」に変わります。Ḥamīka です。"
                },
                {
                  type: "grammar",
                  text: "「本当に、知識の持ち主（知識ある人）は尊敬されます」\n（ヒント：強調の Inna の後ろは対格）\n「إِنَّ ___ الْعِلْمِ مُحْتَرَمٌ」",
                  options: [
                    "ذَا (dhā)", // 正解
                    "ذُو (dhū)",
                    "ذِي (dhī)",
                    "ذُوَا (dhuwā)"
                  ],
                  correctIndex: 0,
                  explanation: "「ズー（〜の持ち主）」も5つの名詞の一つです。Inna の支配を受けて対格になるため、「ザー（dhā）」に変化します。"
                },
                {
                  type: "grammar",
                  text: "「あなたの口を開けてください」\n（ヒント：口 fū も5つの名詞。対格は？）\n「اِفْتَحْ ___」",
                  options: [
                    "فَاكَ (fāka)", // 正解
                    "فُوكَ (fūka)",
                    "فِيكَ (fīka)",
                    "فَمَكَ (famaka)"
                  ],
                  correctIndex: 0,
                  explanation: "口（fū）も対格では「ファー（fā）」になります。「ファマカ（famaka）」も文法的に間違いではありませんが、5つの名詞としての活用（文字変化）を問う場合は fāka が正解です。"
                },
                {
                  type: "grammar",
                  text: "【難問・ひっかけ】「私の父はここにいます」\n（ヒント：「私の〜」がつくと特殊ルールはどうなる？）\n「___ مَوْجُودٌ هُنَا」",
                  options: [
                    "أَبِي (Abī)", // 正解
                    "أَبُويَ (Abūya)",
                    "أَبَايَ (Abāya)",
                    "أَبُوِي (Abūī)"
                  ],
                  correctIndex: 0,
                  explanation: "最重要の例外です。「私の〜（ī）」がつく場合、5つの名詞の特殊ルール（文字変化）は適用されません。見た目は「アビー」のまま変わりません。"
                },
                {
                  type: "grammar",
                  text: "【難問】「父親たち（複数）が立ち上がりました」\n（ヒント：複数形になった場合、ルールは？）\n「قَامَ ___」",
                  options: [
                    "الْآبَاءُ (al-ābā'u)", // 正解
                    "الْآبَاءَ (al-ābā'a)",
                    "الْأَبُو (al-abū)",
                    "الْأَبُونَ (al-abūna)"
                  ],
                  correctIndex: 0,
                  explanation: "5つの名詞として扱われるのは「単数形」の時だけです。複数形（アーバー）になったら、普通の名詞と同じように母音記号（ウ・ア・イ）で変化します。"
                },
                {
                  type: "grammar",
                  text: "【総合】「カーナ（〜だった）が入ると？」\n「あなたのお兄さんは不在でした」\n「كَانَ ___ غَائِبًا」",
                  options: [
                    "أَخُوكَ (akhūka)", // 正解
                    "أَخَاكَ (akhāka)",
                    "أَخِيكَ (akhīka)",
                    "أَخٌ (akhun)"
                  ],
                  correctIndex: 0,
                  explanation: "動詞「カーナ（kāna）」の主語は主格のままです。したがって主格を表す「ワウ」を含む akhūka を選びます。"
                }
              ]
            },
            {
              id: 144,
              level: "文法",
              category: "状態",
              title: "Lesson 44: 状態（ハール）",
              contentPlain: "「〜しながら」「〜の状態で」と、動作主の様子を説明する文法です。ポイントは「常に対格（〜を）」の形になることと、基本的に「非限定（定冠詞なし）」であることです。主語の性・数に一致させる必要があります。",
              
              imageUrls: [
                "/image/grammar/lesson44_1.jpg", 
                "/image/grammar/lesson44_2.jpg", 
                "/image/grammar/lesson44_3.jpg", 
                "/image/grammar/lesson44_4.jpg", 
                "/image/grammar/lesson44_5.jpg", 
              ],
              
              contentVoweled: "",
              sentences: [], 
              vocabList: [],
              
              questions: [
                {
                  type: "grammar",
                  text: "「その男の子は『走って』来ました」\n（ヒント：ハールは常に対格）\n「جَاءَ الْوَلَدُ ___」",
                  options: [
                    "رَاكِضًا (rākiḍan)", // 正解
                    "رَاكِضٌ (rākiḍun)",
                    "رَاكِضٍ (rākiḍin)",
                    "الرَّاكِضَ (ar-rākiḍa)"
                  ],
                  correctIndex: 0,
                  explanation: "状態（ハール）は常に対格（〜an）になります。また、基本的に非限定（定冠詞なし）です。"
                },
                {
                  type: "grammar",
                  text: "【難問】「少女たちは『笑いながら』話しました」\n（ヒント：女性規則複数の対格は？）\n「تَحَدَّثَتِ الْفَتَيَاتُ ___」",
                  options: [
                    "ضَاحِكَاتٍ (ḍāḥikātin)", // 正解
                    "ضَاحِكَاتٌ (ḍāḥikātun)",
                    "ضَاحِكَاتًا (ḍāḥikātan)",
                    "ضَاحِكَةً (ḍāḥikatan)"
                  ],
                  correctIndex: 0,
                  explanation: "ここが難所です。女性規則複数の対格は「ア（fatḥa）」になれず、「イ（kasra）」の音を取ります。見た目は属格と同じですが、文法的には対格です。"
                },
                {
                  type: "grammar",
                  text: "「彼らは『急いで』戻りました」\n（ヒント：男性規則複数の対格）\n「رَجَعُوا ___」",
                  options: [
                    "مُسْرِعِينَ (musri'īna)", // 正解
                    "مُسْرِعُونَ (musri'ūna)",
                    "مُسْرِعَانِ (musri'āni)",
                    "مُسْرِعًا (musri'an)"
                  ],
                  correctIndex: 0,
                  explanation: "主語（彼ら）に合わせてハールも複数形にします。男性規則複数の対格は「〜イーナ（īna）」になります。"
                },
                {
                  type: "grammar",
                  text: "「二人の学生は『歩いて』学校へ行きました」\n（ヒント：双数形の対格）\n「ذَهَبَ الطَّالِبَانِ إِلَى الْمَدْرَسَةِ ___」",
                  options: [
                    "مَاشِيَيْنِ (māshiyayni)", // 正解
                    "مَاشِيَانِ (māshiyāni)",
                    "مَاشِيًا (māshiyan)",
                    "مَاشِينَ (māshīna)"
                  ],
                  correctIndex: 0,
                  explanation: "主語が双数（二人）なので、ハールも双数にします。双数の対格は「〜アイニ（ayni）」です。"
                },
                {
                  type: "grammar",
                  text: "【識別】「私はそのコーヒーを『熱いまま（状態で）』飲みました」\n（ヒント：定冠詞をつけると形容詞になってしまう）\n「شَرِبْتُ الْقَهْوَةَ ___」",
                  options: [
                    "حَارَّةً (ḥārratan)", // 正解
                    "الْحَارَّةَ (al-ḥārrata)",
                    "حَارَّةٌ (ḥārratun)",
                    "حَارٍّ (ḥārrin)"
                  ],
                  correctIndex: 0,
                  explanation: "al-ḥārrata とすると「その熱いコーヒーを（飲んだ）」という修飾語になります。「熱い状態で（飲んだ）」とするには、非限定の ḥārratan を使います。"
                },
                {
                  type: "grammar",
                  text: "「敵は『殺されて（死体となって）』発見されました」\n（ヒント：受動分詞のハール）\n「وُجِدَ الْعَدُوُّ ___」",
                  options: [
                    "مَقْتُولًا (maqtūlan)", // 正解
                    "قَاتِلًا (qātilan)",
                    "مَقْتُولٌ (maqtūlun)",
                    "قَتِيلٌ (qatīlun)"
                  ],
                  correctIndex: 0,
                  explanation: "「殺された状態で」なので受動分詞の対格を使います。"
                },
                {
                  type: "grammar",
                  text: "【文ハール】「彼は『笑いながら』入ってきました」\n（ヒント：ワウ・ル・ハール + 名詞文）\n「دَخَلَ وَ ___」",
                  options: [
                    "هُوَ يَضْحَكُ (huwa yaḍḥaku)", // 正解
                    "هُوَ يَضْحَكَ (huwa yaḍḥaka)",
                    "هِيَ تَضْحَكُ (hiya taḍḥaku)",
                    "يَضْحَكُ هُوَ (yaḍḥaku huwa)"
                  ],
                  correctIndex: 0,
                  explanation: "「ワウ（〜しながら）+ 主語 + 動詞」で、文全体をハールとして使うことができます。"
                },
                {
                  type: "grammar",
                  text: "「彼らは『騎乗して（乗った状態で）』やって来ました」\n「أَقْبَلُوا ___」",
                  options: [
                    "رَاكِبِينَ (rākibīna)", // 正解
                    "رَاكِبُونَ (rākibūna)",
                    "رُكَّابًا (rukkāban)",
                    "رَاكِبًا (rākiban)"
                  ],
                  correctIndex: 0,
                  explanation: "rākibīna は「乗っている人（能動分詞）」の複数・対格です。rukkāban（不規則複数）も文法的に間違いではありませんが、ここでは能動分詞の規則変化形 rākibīna がハールとして最も一般的です。"
                }
              ]
            },
            {
              id: 145,
              level: "文法",
              category: "タムイーズ",
              title: "Lesson 45: タムイーズ",
              contentPlain: "「何の点で？」という曖昧さを解消するための言葉です。「彼は私より大きい」と言った時、「身長が？年齢が？」という疑問に答えるのがタムイーズです。比較級や数詞（11〜99）の後ろによく登場し、必ず対格（～an）になります。",
              
              imageUrls: [
                "/image/grammar/lesson45_1.jpg", 
                "/image/grammar/lesson45_2.jpg", 
                "/image/grammar/lesson45_3.jpg", 
                "/image/grammar/lesson45_4.jpg", 
                "/image/grammar/lesson45_5.jpg", 
                "/image/grammar/lesson45_6.jpg", 
              ],
              
              contentVoweled: "",
              sentences: [], 
              vocabList: [],
              
              questions: [
                {
                  type: "grammar",
                  text: "「彼は私より『経験において』勝っています（経験豊富です）」\n（ヒント：比較級 akthar の曖昧さを説明する）\n「هُوَ أَكْثَرُ مِنِّي ___」",
                  options: [
                    "خِبْرَةً (khibratan)", // 正解
                    "خِبْرَةٌ (khibratun)",
                    "خِبْرَةٍ (khibratin)",
                    "الْخِبْرَةَ (al-khibrata)"
                  ],
                  correctIndex: 0,
                  explanation: "比較級の後ろで「何の点で」と説明する語はタムイーズと呼ばれ、対格（〜an）になります。"
                },
                {
                  type: "grammar",
                  text: "「一ヶ月は30『日』です」\n（ヒント：数詞 11〜99 の後ろの名詞はタムイーズ）\n「اَلشَّهْرُ ثَلَاثُونَ ___」",
                  options: [
                    "يَوْمًا (yawman)", // 正解
                    "يَوْمٍ (yawmin)",
                    "يَوْمٌ (yawmun)",
                    "أَيَّامٍ (ayyāmin)"
                  ],
                  correctIndex: 0,
                  explanation: "11から99までの数詞の後ろに来る名詞は、単数・対格（タムイーズ）になります。3〜10の場合は複数・属格なので注意が必要です。"
                },
                {
                  type: "grammar",
                  text: "「コップは『水で』満ちました」\n（ヒント：満ちる imtala'a の内容を説明）\n「اِمْتَلَأَ الْكُوبُ ___」",
                  options: [
                    "مَاءً (mā'an)", // 正解
                    "مَاءٌ (mā'un)",
                    "مَاءٍ (mā'in)",
                    "الْمَاءَ (al-mā'a)"
                  ],
                  correctIndex: 0,
                  explanation: "「満ちた」「増えた」などの動詞の後ろで、その内容を説明する言葉もタムイーズ（対格）になります。"
                },
                {
                  type: "grammar",
                  text: "「あなたは何冊の本を持っていますか？」\n（ヒント：疑問詞 Kam の後ろ）\n「كَمْ ___ عِنْدَكَ ؟」",
                  options: [
                    "كِتَابًا (kitāban)", // 正解
                    "كِتَابٍ (kitābin)",
                    "كِتَابٌ (kitābun)",
                    "كُتُبٍ (kutubin)"
                  ],
                  correctIndex: 0,
                  explanation: "「いくつ？（Kam）」という疑問詞の後ろに来る名詞もタムイーズ扱いとなり、単数・対格になります。"
                },
                {
                  type: "grammar",
                  text: "「東京は世界で最も『人口において』大きな都市です」\n（ヒント：最上級 akbar の内容説明）\n「طُوكْيُو أَكْبَرُ مَدِينَةٍ ___ فِي الْعَالَمِ」",
                  options: [
                    "سُكَّانًا (sukkānan)", // 正解
                    "سُكَّانٍ (sukkānin)",
                    "سُكَّانٌ (sukkānun)",
                    "السُّكَّانَ (as-sukkāna)"
                  ],
                  correctIndex: 0,
                  explanation: "「一番大きい」と言った後、「（面積ではなく）人口の点で」と補足説明するためにタムイーズ（対格）を使います。"
                }
              ]
            },
            {
              id: 146,
              level: "文法",
              category: "絶対目的語",
              title: "Lesson 46: 絶対目的語",
              contentPlain: "「彼は死ぬほど笑った（笑いを笑った）」のように、動詞の意味を強調するために、同じ語根の動名詞を重ねる表現です。強調だけでなく、「どんなふうに（種類）」や「何回（回数）」を説明する時にも使われます。常に対格（〜an）になります。",
              imageUrls: [
                "/image/grammar/lesson46_1.jpg", 
                "/image/grammar/lesson46_2.jpg", 
                "/image/grammar/lesson46_3.jpg", 
                "/image/grammar/lesson46_4.jpg", 
                "/image/grammar/lesson46_5.jpg", 
                "/image/grammar/lesson46_6.jpg", 
                "/image/grammar/lesson46_7.jpg", 
              ],
              
              contentVoweled: "",
              sentences: [], 
              vocabList: [],
              
              questions: [
                {
                  type: "grammar",
                  text: "「私はそのレッスンを完全に（強調）理解しました」\n（ヒント：fahima の動名詞を対格で重ねる）\n「فَهِمْتُ الدَّرْسَ ___」",
                  options: [
                    "فَهْمًا (fahman)", // 正解
                    "فَهْمٌ (fahmun)",
                    "فَهْمٍ (fahmin)",
                    "مَفْهُومًا (mafhūman)"
                  ],
                  correctIndex: 0,
                  explanation: "絶対目的語の基本です。動詞 fahima と同じ語根の動名詞 fahm を対格（fahman）にして置くことで、意味を強調します。"
                },
                {
                  type: "grammar",
                  text: "「彼は深い眠りにつきました（深く眠りました）」\n（ヒント：形容詞で修飾して『種類』を説明する）\n「نَامَ ___ عَمِيقًا」",
                  options: [
                    "نَوْمًا (nawman)", // 正解
                    "نِيَامًا (niyāman)",
                    "مَنَامًا (manāman)",
                    "نَائِمًا (nā'iman)"
                  ],
                  correctIndex: 0,
                  explanation: "動詞 nāma（眠る）の動名詞は nawm です。後ろに形容詞（'amīqan）を伴うことで、「どんな眠りか」を説明しています。"
                },
                {
                  type: "grammar",
                  text: "【形の一致】「神はムーサー（モーゼ）に直接語りかけました」\n（ヒント：動詞 kallama は第2形。対応する動名詞は？）\n「كَلَّمَ اللهُ مُوسَى ___」",
                  options: [
                    "تَكْلِيمًا (taklīman)", // 正解
                    "كَلَامًا (kalāman)",
                    "تَكَلُّمًا (takalluman)",
                    "مُكَالَمَةً (mukālamatan)"
                  ],
                  correctIndex: 0,
                  explanation: "ここが間違いやすいポイントです。動詞が第2形（kallama）なら、絶対目的語も第2形の動名詞（taklīm）でなければなりません。kalām は第1形の動名詞です。"
                },
                {
                  type: "grammar",
                  text: "【イダーファ】「彼はライオンのように走りました（ライオンの走りを走った）」\n（ヒント：後ろの名詞とつながる場合、タンウィーンは？）\n「جَرَى ___ الْأَسَدِ」",
                  options: [
                    "جَرْيَ (jarya)", // 正解
                    "جَرْيًا (jaryan)",
                    "جَرْيُ (jaryu)",
                    "مَجْرَى (majrā)"
                  ],
                  correctIndex: 0,
                  explanation: "「〜の走り（jarya l-asad）」というイダーファ構文になるため、動名詞のタンウィーン（n）が消えて「ジャルヤ」になります。"
                },
                {
                  type: "grammar",
                  text: "【回数】「私はカアバ神殿を２回巡回しました」\n（ヒント：動名詞の双数形）\n「طُفْتُ حَوْلَ الْكَعْبَةِ ___」",
                  options: [
                    "طَوْفَتَيْنِ (ṭawfatayni)", // 正解
                    "طَوْفَتَانِ (ṭawfatāni)",
                    "طَوَافًا (ṭawāfan)",
                    "طَوْفَةً (ṭawfatan)"
                  ],
                  correctIndex: 0,
                  explanation: "回数を表す場合も絶対目的語になります。双数（2回）で、かつ対格なので「〜アイニ（ayni）」の形を選びます。"
                },
                {
                  type: "grammar",
                  text: "【代用・難問】「私は彼を『全ての』愛で愛しました（とても愛しました）」\n（ヒント：kulla を使って動名詞を後ろに回す）\n「أَحْبَبْتُهُ ___ الْحُبِّ」",
                  options: [
                    "كُلَّ (kulla)", // 正解
                    "كُلُّ (kullu)",
                    "كُلِّ (kulli)",
                    "كُلًّا (kullan)"
                  ],
                  correctIndex: 0,
                  explanation: "「クッラ（全て）」や「バアダ（一部）」などの語を使って強調する場合、その語自体が絶対目的語の代わり（対格）になり、本来の動名詞は後ろで属格になります。"
                },
                {
                  type: "grammar",
                  text: "【派生形】「彼らは（政府に）激しく抗議しました」\n（ヒント：iḥtajja は第8形。動名詞の形は？）\n「اِحْتَجُّوا ___ شَدِيدًا」",
                  options: [
                    "اِحْتِجَاجًا (iḥtijājan)", // 正解
                    "حِجَاجًا (ḥijājan)",
                    "حُجَّةً (ḥujjatan)",
                    "تَحَاجًّا (taḥājjan)"
                  ],
                  correctIndex: 0,
                  explanation: "動詞 iḥtajja（抗議する）は第8形（ifta'ala）なので、動名詞は iḥtijāj（ifti'ālパターン）になります。"
                },
                {
                  type: "grammar",
                  text: "【動詞の省略】「（困難に対して）我慢しなさい！」\n（ヒント：動詞を使わず、絶対目的語だけで命令の意味を表す）\n「___ عَلَى الشَّدَائِدِ」",
                  options: [
                    "صَبْرًا (ṣabran)", // 正解
                    "صَبْرٌ (ṣabrun)",
                    "صَابِرًا (ṣābiran)",
                    "اِصْبِرْ (iṣbir - 動詞)"
                  ],
                  correctIndex: 0,
                  explanation: "「iṣbir ṣabran（忍耐強く耐えよ）」の動詞が省略された形です。日常会話の「シュクラン（感謝を）」や「アフワン（許しを）」もこの仲間です。"
                }
              ]
            },
            {
              id: 147,
              level: "文法",
              category: "接続詞",
              title: "Lesson 47: 接続詞",
              contentPlain: "単語と単語、文と文をつなぐ「接続詞」のまとめです。「そして」だけでも、同時を表す「ワ」、順番を表す「ファ」、時間差を表す「スンマ」など、アラビア語は状況に応じて細かく使い分けます。",
              
              imageUrls: [
                "/image/grammar/lesson47_1.jpg", 
                "/image/grammar/lesson47_2.jpg", 
                "/image/grammar/lesson47_3.jpg", 
                "/image/grammar/lesson47_4.jpg", 
                "/image/grammar/lesson47_5.jpg", 
                "/image/grammar/lesson47_6.jpg", 
                "/image/grammar/lesson47_7.jpg", 
                "/image/grammar/lesson47_8.jpg", 
                "/image/grammar/lesson47_9.jpg", 
                "/image/grammar/lesson47_10.jpg", 
              ],
              
              contentVoweled: "",
              sentences: [], 
              vocabList: [],
              
              questions: [
                {
                  type: "grammar",
                  text: "「イマーム（導師）が礼拝の動作に入り、『それからすぐに』信徒たちも続きました」\n（ヒント：間髪入れずに続く「そして」）\n「كَبَّرَ الْإِمَامُ ___ الْمَأْمُومُونَ」",
                  options: [
                    "فَـ (fa)", // 正解
                    "ثُمَّ (thumma)",
                    "وَ (wa)",
                    "أَوْ (aw)"
                  ],
                  correctIndex: 0,
                  explanation: "「ファ（fa）」は順序を表し、かつ「遅れがない（即座に）」ことを強調します。「スンマ（thumma）」だと時間差があることになります。"
                },
                {
                  type: "grammar",
                  text: "「農家は種をまき、『それから（数ヶ月後に）』収穫しました」\n（ヒント：時間差がある「そして」）\n「زَرَعَ الْفَلَّاحُ ___ حَصَدَ」",
                  options: [
                    "ثُمَّ (thumma)", // 正解
                    "فَـ (fa)",
                    "وَ (wa)",
                    "بَلْ (bal)"
                  ],
                  correctIndex: 0,
                  explanation: "種まきと収穫の間には長い期間があるので、「スンマ（thumma）」を使います。"
                },
                {
                  type: "grammar",
                  text: "「あなたは紅茶を飲みますか？『それとも』コーヒーですか？」\n（ヒント：疑問詞『ア（a）』で始まる疑問文での選択）\n「أَ تَشْرَبُ الشَّايَ ___ الْقَهْوَةَ ؟」",
                  options: [
                    "أَمِ (am)", // 正解
                    "أَوْ (aw)",
                    "لَا (lā)",
                    "بَلْ (bal)"
                  ],
                  correctIndex: 0,
                  explanation: "「Aですか、それともBですか？」と聞く場合、「アウ（aw）」ではなく「アム（am）」を使います。「アウ」は「これかあれを（どちらでも）食べなさい」のような許可や選択に使います。"
                },
                {
                  type: "grammar",
                  text: "「私は成功を望みます、失敗で『はなく』」\n（ヒント：前の言葉を肯定し、後ろを否定する）\n「أُرِيدُ النَّجَاحَ ___ الْفَشَلَ」",
                  options: [
                    "لَا (lā)", // 正解
                    "لَكِنْ (lākin)",
                    "بَلْ (bal)",
                    "أَوْ (aw)"
                  ],
                  correctIndex: 0,
                  explanation: "「A、Bではない（A not B）」と言う場合、接続詞「ラー（lā）」を使います。"
                },
                {
                  type: "grammar",
                  text: "「私はマフムードを見かけました…いや（訂正）、ハリードでした」\n（ヒント：言い間違いを訂正する「いや、むしろ」）\n「رَأَيْتُ مَحْمُودًا ___ خَالِدًا」",
                  options: [
                    "بَلْ (bal)", // 正解
                    "لَكِنْ (lākin)",
                    "لَا (lā)",
                    "ثُمَّ (thumma)"
                  ],
                  correctIndex: 0,
                  explanation: "「バル（bal）」は、前の発言を取り消して言い直す（correction）時や、前の否定文を打ち消して「そうではなくて（rather）」と言う時に使います。"
                }
              ]
            },
            {
              id: 148,
              level: "文法",
              category: "バダル（同格）",
              title: "Lesson 48: バダル（同格）",
              contentPlain: "",
              
              imageUrls: [
                "/image/grammar/lesson48_1.jpg", 
                "/image/grammar/lesson48_2.jpg", 
                "/image/grammar/lesson48_3.jpg", 
                "/image/grammar/lesson48_4.jpg", 
                "/image/grammar/lesson48_5.jpg", 
                "/image/grammar/lesson48_6.jpg", 
                "/image/grammar/lesson48_7.jpg", 
                "/image/grammar/lesson48_8.jpg", 
                "/image/grammar/lesson48_9.jpg", 
              ],
              
              contentVoweled: "",
              sentences: [], 
              vocabList: [],
              
              questions: [
                {
                  type: "grammar",
                  text: "「私は『この』男の人を知っています」\n（ヒント：指示代名詞 hādhā は対格の位置にあります）\n「أَعْرِفُ هَذَا ___」",
                  options: [
                    "الرَّجُلَ (ar-rajula)", // 正解
                    "الرَّجُلُ (ar-rajulu)",
                    "الرَّجُلِ (ar-rajuli)",
                    "رَجُلًا (rajulan)"
                  ],
                  correctIndex: 0,
                  explanation: "「これ（hādhā）」は動詞「知る」の目的語なので対格の位置にあります。したがって、同格である「男の人」も対格（〜a）になります。"
                },
                {
                  type: "grammar",
                  text: "「私はパンを『半分』食べました」\n（ヒント：パン ar-raghīfa は対格。バダルの一部代用）\n「أَكَلْتُ الرَّغِيفَ ___」",
                  options: [
                    "نِصْفَهُ (niṣfahu)", // 正解
                    "نِصْفُهُ (niṣfuhu)",
                    "نِصْفِهِ (niṣfihi)",
                    "نِصْفًا (niṣfan)"
                  ],
                  correctIndex: 0,
                  explanation: "「パン（対格）」を言い換えるバダル（一部）なので、「半分」も対格（niṣfa）になります。後ろの -hu はパンを指す代名詞です。"
                },
                {
                  type: "grammar",
                  text: "「その先生は、私を感心させました、『知識』の点で（その先生の知識が私を感心させた）」\n（ヒント：動詞 A'jaba の主語は「先生」）\n「أَعْجَبَنِي الْمُدَرِّسُ ___」",
                  options: [
                    "عِلْمُهُ (‘ilmuhu)", // 正解
                    "عِلْمَهُ (‘ilmahu)",
                    "عِلْمِهِ (‘ilmihi)",
                    "عِلْمًا (‘ilman)"
                  ],
                  correctIndex: 0,
                  explanation: "「私を感心させた（a'jaba-nī）」の主語は「先生（al-mudarrisu / 主格）」です。したがって、その性質を説明するバダル（包摂）も主格（‘ilmu）になります。"
                },
                {
                  type: "grammar",
                  text: "「私たちはカリフ・ウマル（第2代正統カリフ）を愛しています」\n（ヒント：ウマルは二段変化名詞）\n「نُحِبُّ الْخَلِيفَةَ ___」",
                  options: [
                    "عُمَرَ (‘Umara)", // 正解
                    "عُمَرُ (‘Umaru)",
                    "عُمَرِ (‘Umari)",
                    "عُمَرًا (‘Umaran)"
                  ],
                  correctIndex: 0,
                  explanation: "「カリフ（al-khalīfata / 対格）」と言い換えの「ウマル」は同格なので対格になりますが、ウマルは二段変化名詞なのでタンウィーン（n）はつきません。"
                },
                {
                  type: "grammar",
                  text: "「私はあなたの兄弟ザイドに挨拶しました」\n（ヒント：akhīka は5つの名詞の属格）\n「سَلَّمْتُ عَلَى أَخِيكَ ___」",
                  options: [
                    "زَيْدٍ (Zaydin)", // 正解
                    "زَيْدًا (Zaydan)",
                    "زَيْدٌ (Zaydun)",
                    "زَيْدُ (Zaydu)"
                  ],
                  correctIndex: 0,
                  explanation: "「あなたの兄弟（akhīka）」は前置詞の後ろなので属格です。その同格である固有名詞「ザイド」も属格（in）になります。"
                }
              ]
            }, 
            {
              id: 149,
              level: "文法",
              category: "種族否定のラー",
              title: "Lesson 49: 種族否定のラー",
              contentPlain: "",
              
              imageUrls: [
                "/image/grammar/lesson49_1.jpg", 
                "/image/grammar/lesson49_2.jpg", 
                "/image/grammar/lesson49_3.jpg", 
                "/image/grammar/lesson49_4.jpg", 
                "/image/grammar/lesson49_5.jpg", 
                "/image/grammar/lesson49_6.jpg", 
                "/image/grammar/lesson49_7.jpg", 
              ],
              
              contentVoweled: "",
              sentences: [], 
              vocabList: [],
              
              questions: [
                {
                  type: "grammar",
                  text: "「アッラーの他に神はなし（シャハーダ）」\n「لَا ___ إِلَّا اللهُ」",
                  options: [
                    "إِلَهَ (ilāha)", // 正解
                    "إِلَهًا (ilāhan)",
                    "إِلَهُ (ilāhu)",
                    "إِلَهٍ (ilāhin)"
                  ],
                  correctIndex: 0,
                  explanation: "これが基本形です。種族否定のラーの直後に来る名詞（主語）は、タンウィーンなしの「ア（Fatha）」に固定されます。"
                },
                {
                  type: "grammar",
                  text: "「それに疑いはない」\n「لَا ___ فِيهِ」",
                  options: [
                    "شَكَّ (shakka)", // 正解
                    "شَكًّا (shakkan)",
                    "شَكٌّ (shakkun)",
                    "شَكِّ (shakki)"
                  ],
                  correctIndex: 0,
                  explanation: "「疑いなし（No doubt）」という決まり文句です。タンウィーン（ン）を付けずに「シャッカ」と言います。"
                },
                {
                  type: "grammar",
                  text: "「問題ありません（No problem）」\n「لَا ___」",
                  options: [
                    "مُشْكِلَةَ (mushkilata)", // 正解
                    "مُشْكِلَةً (mushkilatan)",
                    "مُشْكِلَةٌ (mushkilatun)",
                    "مُشْكِلَةٍ (mushkilatin)"
                  ],
                  correctIndex: 0,
                  explanation: "女性名詞の場合も同じです。タンウィーンなしの「ア」で「ムシュキラタ」となります。"
                },
                {
                  type: "grammar",
                  text: "「（いかなる）ムスリムたちも嘘つきではありません」\n「لَا ___ كَاذِبُونَ」",
                  options: [
                    "مُسْلِمِينَ (muslimīna)", // 正解
                    "مُسْلِمُونَ (muslimūna)",
                    "مُسْلِمَانِ (muslimāni)",
                    "مُسْلِمًا (musliman)"
                  ],
                  correctIndex: 0,
                  explanation: "ラーの直後は対格（イーナ）になります。一方、述語である「嘘つきだ（kādhibūna）」は主格（ウーナ）になります。これはラーが「インナ（Inna）」と同じ働き（主語を対格、述語を主格にする）を持つためです。"
                },
                {
                  type: "grammar",
                  text: "「（いかなる）女性たち（ムスリム女性たち）もいません」\n「لَا ___ مَوْجُودَاتٌ」",
                  options: [
                    "مُسْلِمَاتٍ (muslimātin)", // 正解
                    "مُسْلِمَاتٌ (muslimātun)",
                    "مُسْلِمَاتَ (muslimāta)",
                    "مُسْلِمَةً (muslimatan)"
                  ],
                  correctIndex: 0,
                  explanation: "女性規則複数（〜āt）は、「ア」の音を取れないため、例外的に「イ（kasra）」の音になります。後ろの述語「いる（mawjūdātun）」は通常通り主格（ウン）になります。"
                }
              ]
            },
            {
              id: 150,
              level: "文法",
              category: "インナとその姉妹",
              title: "Lesson 50: インナとその姉妹",
              contentPlain: "",
              
              imageUrls: [
                "/image/grammar/lesson50_1.jpg", 
                "/image/grammar/lesson50_2.jpg", 
                "/image/grammar/lesson50_3.jpg", 
                "/image/grammar/lesson50_4.jpg", 
                "/image/grammar/lesson50_5.jpg", 
                "/image/grammar/lesson50_6.jpg", 
                "/image/grammar/lesson50_7.jpg", 
                "/image/grammar/lesson50_8.jpg", 
                "/image/grammar/lesson50_9.jpg", 
              ],
              
              contentVoweled: "",
              sentences: [], 
              vocabList: [],
              
              questions: [
                {
                  type: "grammar",
                  text: "「本当に、神はご存じであり、賢明な方です」\n「إِنَّ ___ عَلِيمٌ حَكِيمٌ」",
                  options: [
                    "اللهَ (Allāha)", // 正解
                    "اللهُ (Allāhu)",
                    "اللهِ (Allāhi)",
                    "اللَّهُمَّ (Allāhumma)"
                  ],
                  correctIndex: 0,
                  explanation: "基本ルールです。「インナ」の後ろの主語（イズム・インナ）は対格（a）になります。"
                },
                {
                  type: "grammar",
                  text: "「本当に、信者たちは兄弟です」\n「إِنَّ ___ إِخْوَةٌ」",
                  options: [
                    "الْمُؤْمِنِينَ (al-mu'minīna)", // 正解
                    "الْمُؤْمِنُونَ (al-mu'minūna)",
                    "الْمُؤْمِنَانِ (al-mu'mināni)",
                    "الْمُؤْمِنَيْنِ (al-mu'minayni)"
                  ],
                  correctIndex: 0,
                  explanation: "主語はインナの影響で対格（〜イーナ）になります。述語（兄弟）は主格のままです。"
                },
                {
                  type: "grammar",
                  text: "「（私は）試験が難しいと知っています」\n「أَعْلَمُ ___ الْاِمْتِحَانَ صَعْبٌ」",
                  options: [
                    "أَنَّ (anna)", // 正解
                    "إِنَّ (inna)",
                    "لَكِنَّ (lākinna)",
                    "لَعَلَّ (la'alla)"
                  ],
                  correctIndex: 0,
                  explanation: "「〜ということを（that）」と文中でつなぐ場合は「アンナ」を使います。この場合も後ろの主語（試験）は対格（a）になっています。"
                },
                {
                  type: "grammar",
                  text: "「彼は金持ちですが、ケチです」\n「هُوَ غَنِيٌّ لَكِنَّهُ ___」",
                  options: [
                    "بَخِيلٌ (bakhīlun)", // 正解
                    "بَخِيلًا (bakhīlan)",
                    "بَخِيلٍ (bakhīlin)",
                    "بَخِيلُ (bakhīlu)"
                  ],
                  correctIndex: 0,
                  explanation: "「ラーキンナ・フ（彼）」の「フ」が対格になった主語です。空欄は述語（ハバル）なので、主格（un）のまま残ります。"
                },
                {
                  type: "grammar",
                  text: "「あたかも兵士たちはライオンのようです」\n「كَأَنَّ ___ أُسُودٌ」",
                  options: [
                    "الْجُنُودَ (al-junūda)", // 正解
                    "الْجُنُودُ (al-junūdu)",
                    "الْجُنُودِ (al-junūdi)",
                    "جُنُودٌ (junūdun)"
                  ],
                  correctIndex: 0,
                  explanation: "「カアンナ（〜のようだ）」もインナの姉妹なので、主語を対格（a）にします。"
                },
                {
                  type: "grammar",
                  text: "「もしも青春が戻ってくるならば（不可能な願望）」\n「لَيْتَ ___ يَعُودُ」",
                  options: [
                    "الشَّبَابَ (ash-shabāba)", // 正解
                    "الشَّبَابُ (ash-shabābu)",
                    "الشَّبَابِ (ash-shabābi)",
                    "الشَّبَابًا (ash-shabāban)"
                  ],
                  correctIndex: 0,
                  explanation: "「レイタ（〜ならばいいのに）」の後ろの名詞は主語扱いとなり、対格（a）になります。「戻ってくる（ya'ūdu）」という動詞文全体が述語の役割をします。"
                },
                {
                  type: "grammar",
                  text: "「おそらく、あなたのお父さんは到着するでしょう」\n「لَعَلَّ ___ قَادِمٌ」",
                  options: [
                    "أَبَاكَ (Abāka)", // 正解
                    "أَبُوكَ (Abūka)",
                    "أَبِيكَ (Abīka)",
                    "أَبَاكِ (Abāki)"
                  ],
                  correctIndex: 0,
                  explanation: "「ラアッラ（おそらく）」によって主語は対格になります。5つの名詞（父など）の対格は「アリフ（ā）」で表されるため、Abāka となります。"
                },
                {
                  type: "grammar",
                  text: "「本当に、女子学生たちは勤勉です」\n「إِنَّ ___ مُجْتَهِدَاتٌ」",
                  options: [
                    "الطَّالِبَاتِ (aṭ-ṭālibāti)", // 正解
                    "الطَّالِبَاتُ (aṭ-ṭālibātu)",
                    "الطَّالِبَاتَ (aṭ-ṭālibāta)",
                    "الطَّالِبَاتٍ (aṭ-ṭālibātin)"
                  ],
                  correctIndex: 0,
                  explanation: "ここが最大のひっかけです。女性規則複数の対格は「ア」になれず「イ（ti）」になります。一方、述語（勤勉だ）は主格なので「ウ（tun）」のままです。「イ」と「ウ」の組み合わせを選びます。"
                }
              ]
            },
            {
              id: 151,
              level: "文法",
              category: "原因目的語",
              title: "Lesson 51: 原因目的語",
              contentPlain: "「勉強するために」「尊敬して」のように、動作の理由や目的を説明する文法です。前置詞（〜のために）を使わずに、動名詞をそのまま「対格」にして動詞の後ろに置くことで表現します。",            
              imageUrls: [
                "/image/grammar/lesson51_1.jpg", 
                "/image/grammar/lesson51_2.jpg", 
                "/image/grammar/lesson51_3.jpg", 
                "/image/grammar/lesson51_4.jpg", 
                "/image/grammar/lesson51_5.jpg", 
                "/image/grammar/lesson51_6.jpg", 
                "/image/grammar/lesson51_7.jpg", 
                "/image/grammar/lesson51_8.jpg", 
              ],
              
              contentVoweled: "",
              sentences: [], 
              vocabList: [],
              
              questions: [
                {
                  type: "grammar",
                  text: "「生徒たちは先生に敬意を表して立ち上がりました」\n「قَامَ التَّلَامِيذُ ___ لِلْمُعَلِّمِ」",
                  options: [
                    "اِحْتِرَامًا (iḥtirāman)", // 正解
                    "اِحْتِرَامٌ (iḥtirāmun)",
                    "مُحْتَرِمِينَ (muḥtarimīna)",
                    "لِلاِحْتِرَامِ (li-l-iḥtirāmi)"
                  ],
                  correctIndex: 0,
                  explanation: "「尊敬すること（iḥtirām）」という動名詞を対格（an）にすることで、「〜のために（out of respect）」という理由を表します。muḥtarimīna は「尊敬しながら（ハール）」になるため、ここでは「敬意を表して（原因）」という文脈に最も適した iḥtirāman を選びます。"
                },
                {
                  type: "grammar",
                  text: "「私は成功を求めて勉強します」\n「أَدْرُسُ ___ فِي النَّجَاحِ」",
                  options: [
                    "رَغْبَةً (raghbatan)", // 正解
                    "رَغْبَةٌ (raghbatun)",
                    "رَاغِبًا (rāghiban)",
                    "رَغْبَةٍ (raghbatin)"
                  ],
                  correctIndex: 0,
                  explanation: "「熱望（raghba）」を対格にして理由を示します。rāghiban（望んでいる人＝能動分詞）だと「ハール（状態）」になり文法的には成立しますが、「原因目的語」の問題としては動名詞の raghbatan が正解です。"
                },
                {
                  type: "grammar",
                  text: "「彼らは神の満足を求めて寄付しました」\n「تَصَدَّقُوا ___ مَرْضَاتِ اللهِ」",
                  options: [
                    "اِبْتِغَاءَ (ibtighā'a)", // 正解
                    "اِبْتِغَاءًا (ibtighā'an)",
                    "اِبْتِغَاءُ (ibtighā'u)",
                    "مُبْتَغِينَ (mubtaghīna)"
                  ],
                  correctIndex: 0,
                  explanation: "「神の満足の・希求（ibtighā'a marḍāti...）」というイダーファ構造になっています。原因目的語なので対格（ア）ですが、イダーファの前側（ムダーフ）なのでタンウィーンはつきません。"
                },
                {
                  type: "grammar",
                  text: "「私は罰を恐れて嘘をつきませんでした」\n「لَمْ أَكْذِبْ ___ الْعِقَابِ」",
                  options: [
                    "خَوْفَ (khawfa)", // 正解
                    "خَوْفًا (khawfan)",
                    "خَائِفًا (khā'ifan)",
                    "خَوْفِ (khawfi)"
                  ],
                  correctIndex: 0,
                  explanation: "これもイダーファ（罰の・恐れ）です。対格の「ア」になりますが、後ろに名詞が続くのでタンウィーンは落ちて「ハウファ（khawfa）」となります。"
                },
                {
                  type: "grammar",
                  text: "「彼は知識を求めて旅に出ました」\n「سَافَرَ ___ لِلْعِلْمِ」",
                  options: [
                    "طَلَبًا (ṭalaban)", // 正解
                    "طَالِبًا (ṭāliban)",
                    "طَلَبٌ (ṭalabun)",
                    "مَطْلَبًا (maṭlaban)"
                  ],
                  correctIndex: 0,
                  explanation: "「知識のために（li-l-'ilmi）」とつながる場合、前の動名詞は単独の対格（an）になります。ṭāliban（求めている人）はハールになります。"
                },
                {
                  type: "grammar",
                  text: "「私たちは（神への）感謝として祈ります」\n「نُصَلِّي ___ لِلَّهِ」",
                  options: [
                    "شُكْرًا (shukran)", // 正解
                    "شَاكِرِينَ (shākirīna)",
                    "شُكْرٌ (shukrun)",
                    "مَشْكُورًا (mashkūran)"
                  ],
                  correctIndex: 0,
                  explanation: "「感謝（shukr）」を原因目的語（対格）にして「感謝して／感謝のために」と表現します。"
                },
                {
                  type: "grammar",
                  text: "「警察官は治安を維持するために立ちました」\n「وَقَفَ الشُّرْطِيُّ ___ عَلَى الْأَمْنِ」",
                  options: [
                    "حِفَاظًا (ḥifāẓan)", // 正解
                    "حَافِظًا (ḥāfiẓan)",
                    "مَحْفُوظًا (maḥfūẓan)",
                    "حِفَاظٌ (ḥifāẓun)"
                  ],
                  correctIndex: 0,
                  explanation: "「維持すること（ḥifāẓ）」を対格にします。ḥāfiẓan は能動分詞（ハール）です。"
                },
                {
                  type: "grammar",
                  text: "「私は彼に会いたいがために（思慕の情から）彼を訪ねました」\n「زُرْتُهُ ___ إِلَيْهِ」",
                  options: [
                    "شَوْقًا (shawqan)", // 正解
                    "شَوْقٌ (shawqun)",
                    "شَائِقًا (shā'iqan)",
                    "مُشْتَاقًا (mushtāqan)"
                  ],
                  correctIndex: 0,
                  explanation: "「思慕／恋しさ（shawq）」を原因として挙げる表現です。mushtāqan（会いたがっている状態で）も意味は通じますが、文法用語としての「原因目的語（動名詞を使う）」に従うと shawqan が正解です。"
                }
              ]
            }, 

            
  // =================================================================
  //  PART 3: 中級コース (Intermediate Course) - 読解・物語
  //  全10記事 × 各5問 = 50問 (ID 200 - 209)
  // =================================================================

  // --- 1. ジュハーの笑い話 (200) ---
  // =================================================================
  //  PART 3: 中級コース (Intermediate) - 読解・物語
  //  全10記事 × 各5問 = 50問 (ID 200 - 209)
  // =================================================================

  // --- 1. 物語 (Stories) ---
  {
    id: 200,
    title: "ジュハーとロバ",
    category: "物語",
    level: "中級",
    contentVoweled: "أَرَادَ جُحَا أَنْ يَبِيعَ حِمَارَهُ. ذَهَبَ إِلَى السُّوقِ وَوَقَفَ يُنَادِي. بَدَأَ النَّاسُ يَمْدَحُونَ الْحِمَارَ. فَظَنَّ جُحَا أَنَّ الْحِمَارَ مُمْتَازٌ حَقًّا. فَنَدِمَ عَلَى بَيْعِهِ وَعَادَ بِهِ إِلَى الْبَيْتِ.",
    contentPlain: "أراد جحا أن يبيع حماره. ذهب إلى السوق ووقف ينادي. بدأ الناس يمدحون الحمار. فظن جحا أن الحمار ممتاز حقا. فندم على بيعه وعاد به إلى البيت.",
    vocabList: [
      { word: "بَاعَ", meaning: "売った" },
      { word: "حِمَار", meaning: "ロバ" },
      { word: "نَدِمَ", meaning: "後悔した" },
      { word: "يُنَادِي", meaning: "呼びかける（競売にかける）" },
      { word: "مَدَحَ", meaning: "褒めた" }
    ],
    questions: [
      { id: 2001, type: "reading", text: "ジュハーはどこへ行きましたか？", options: ["家", "学校", "市場", "モスク"], correctIndex: 2, explanation: "「إِلَى السُّوقِ (市場へ)」行きました。" },
      { id: 2002, type: "reading", text: "何をするつもりでしたか？", options: ["買う", "売る", "食べる", "見る"], correctIndex: 1, explanation: "「لِيَبِيعَ (売るために)」です。" },
      { id: 2003, type: "reading", text: "何を売ろうとしましたか？", options: ["家", "車", "ロバ", "馬"], correctIndex: 2, explanation: "「حِمَارَهُ (彼のロバ)」です。" },
      { id: 2004, type: "reading", text: "結局どうしましたか？", options: ["売った", "売らなかった", "失くした", "盗まれた"], correctIndex: 1, explanation: "「عَادَ بِهِ (それと共に戻った)」ので売っていません。" },
      { id: 2005, type: "grammar", text: "「〜するために（目的）」", options: ["لِـ", "بِـ", "فِي", "مِنْ"], correctIndex: 0, explanation: "動詞の前につく「Li- (〜するために)」です。" },
      // 追加した文法問題
      { id: 2006, type: "grammar", text: "「وَقَفَ يُنَادِي」で、間に接続詞「و (wa)」が入らない理由は？", options: ["直前の動詞が過去形だから", "ハール（状態）が肯定の現在形動詞だから", "主語が異なるから", "場所を表す言葉だから"], correctIndex: 1, explanation: "ハール（状態文）が「肯定の現在形動詞」で始まる場合、通常「و」はつけずに直結させます。" }
    ],
    sentences: [
      { 
        speaker: "ナレーター", 
        arabic: "أَرَادَ جُحَا أَنْ يَبِيعَ حِمَارَهُ.", 
        japanese: "ジュハーはロバを売りたいと思いました。" 
      },
      { 
        speaker: "ナレーター", 
        arabic: "ذَهَبَ إِلَى السُّوقِ وَوَقَفَ يُنَادِي.", 
        japanese: "彼は市場へ行き、大声で（買い手を）呼び始めました。" 
      },
      { 
        speaker: "ナレーター", 
        arabic: "بَدَأَ النَّاسُ يَمْدَحُونَ الْحِمَارَ.", 
        japanese: "人々はロバを褒め始めました。" 
      },
      { 
        speaker: "ナレーター", 
        arabic: "فَظَنَّ جُحَا أَنَّ الْحِمَارَ مُمْتَازٌ حَقًّا.", 
        japanese: "そこでジュハーは「このロバは本当に素晴らしい」と思いました。" 
      },
      { 
        speaker: "ナレーター", 
        arabic: "فَنَدِمَ عَلَى بَيْعِهِ وَعَادَ بِهِ إِلَى الْبَيْتِ.", 
        japanese: "彼は売ることを後悔し、ロバを連れて家に帰りました。" 
      }
    ]
  },
  {
    id: 201, title: "旅人イブン・バットゥータ", category: "物語", level: "中級",
    contentVoweled: "وُلِدَ ابْنُ بَطُّوطَة فِي الْمَغْرِبِ. بَدَأَ رِحْلَتَهُ لِلْحَجِّ وَهُوَ صَغِيرٌ. اسْتَمَرَّتْ رِحْلَتُهُ ثَلَاثِينَ عَامًا. وَصَلَ إِلَى الْهِنْدِ وَالصِّينِ. كَتَبَ كِتَابًا مَشْهُورًا عَنْ رِحْلَتِهِ.",
    contentPlain: "ولد ابن بطوطة في المغرب. بدأ رحلته للحج وهو صغير. استمرت رحلته ثلاثين عاما. وصل إلى الهند والصين. كتب كتابا مشهورا عن رحلته.",
    vocabList: [
      { word: "رَحَّالَة", meaning: "旅人/探検家" },
      { word: "عَالَم", meaning: "世界" },
      { word: "زَارَ", meaning: "訪れた" }
    ],
    questions: [
      { id: 2011, type: "reading", text: "イブン・バットゥータの職業は？", options: ["王様", "医者", "旅人", "商人"], correctIndex: 2, explanation: "「رَحَّالَة (旅人)」です。" },
      // 修正箇所: 選択肢1を「本を書いた」から「絵を描いた」に変更し、正解が重複しないようにしました
      { id: 2012, type: "reading", text: "彼は何をしましたか？", options: ["絵を描いた", "多くの国を訪れた", "家を建てた", "戦争をした"], correctIndex: 1, explanation: "「زَارَ بِلَادًا كَثِيرَةً」あるいは本文の旅の記述（インドや中国への到達）に基づきます。" },
      { id: 2013, type: "vocabulary", text: "「مَشْهُور」の意味は？", options: ["無名の", "有名な", "速い", "遠い"], correctIndex: 1, explanation: "Famous（有名な）です。" },
      { id: 2014, type: "reading", text: "彼の旅の記録は何と呼ばれますか？", options: ["リフラ（旅）", "キターブ（本）", "バイ（家）", "スーク（市場）"], correctIndex: 0, explanation: "彼の旅行記は「リフラ（Rihla）」です。" },
      { id: 2015, type: "grammar", text: "「訪れました」の現在形は？", options: ["يَزُورُ", "زَارَ", "زُرْتُ", "زِيَارَة"], correctIndex: 0, explanation: "過去形「Zāra」に対し、現在形は「Yazūru」です。" },
      { id: 2016, type: "grammar", text: "「وَهُوَ صَغِيرٌ」の文法的役割は？", options: ["形容詞（ナアト）", "状態（ハール）", "主語（ムブタダ）", "目的語（マフウール）"], correctIndex: 1, explanation: "「（彼が）若い状態で」という状況を表す「ハール（状態文）」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "وُلِدَ ابْنُ بَطُّوطَة فِي الْمَغْرِبِ.", japanese: "イブン・バットゥータはモロッコで生まれました。" },
      { speaker: "ナレーター", arabic: "بَدَأَ رِحْلَتَهُ لِلْحَجِّ وَهُوَ صَغِيرٌ.", japanese: "彼は若くして巡礼の旅を始めました。" },
      { speaker: "ナレーター", arabic: "اسْتَمَرَّتْ رِحْلَتُهُ ثَلَاثِينَ عَامًا.", japanese: "彼の旅は30年間続きました。" },
      { speaker: "ナレーター", arabic: "وَصَلَ إِلَى الْهِنْدِ وَالصِّينِ.", japanese: "彼はインドや中国まで到達しました。" },
      { speaker: "ナレーター", arabic: "كَتَبَ كِتَابًا مَشْهُورًا عَنْ رِحْلَتِهِ.", japanese: "彼は旅についての有名な本を書きました。" }
    ]
  },
    {
      id: 203, title: "キツネとカラス", category: "物語", level: "中級",
      contentVoweled: "وَقَفَ الْغُرَابُ عَلَى غُصْنِ شَجَرَةٍ. جَاءَ الثَّعْلَبُ وَقَالَ: مَا أَجْمَلَ صَوْتَكَ! غَنِّ لَنَا يَا صَدِيقِي. فَتَحَ الْغُرَابُ فَمَهُ لِيُغَنِّيَ. فَسَقَطَتِ الْجُبْنَةُ وَأَكَلَهَا الثَّعْلَبُ.",
      contentPlain: "وقف الغراب على غصن شجرة. جاء الثعلب وقال: ما أجمل صوتك! غن لنا يا صديقي. فتح الغراب فمه ليغني. فسقطت الجبنة وأكلها الثعلب.",
      vocabList: [
        { word: "ثَعْلَب", meaning: "キツネ" },
        { word: "غُرَاب", meaning: "カラス" },
        { word: "جُبْن", meaning: "チーズ" }
      ],
      questions: [
        { id: 2031, type: "reading", text: "カラスは何を持っていましたか？", options: ["肉", "パン", "チーズ", "金"], correctIndex: 2, explanation: "「قِطْعَةَ جُبْنٍ (チーズひとかけら)」です。" },
        { id: 2032, type: "reading", text: "キツネは何を欲しがりましたか？", options: ["カラスを食べる", "チーズを取る", "歌う", "寝る"], correctIndex: 1, explanation: "「أَخْذَهَا (それ＝チーズを取ること)」です。" },
        { id: 2033, type: "reading", text: "キツネはどうやってチーズを手に入れましたか？", options: ["木に登った", "カラスを褒めて歌わせた", "戦った", "買った"], correctIndex: 1, explanation: "カラスにお世辞を言って口を開かせました。" },
        { id: 2034, type: "vocabulary", text: "「مَاكِر」の意味は？", options: ["正直な", "ずる賢い", "強い", "速い"], correctIndex: 1, explanation: "Sly/Cunning (ずる賢い) です。" },
        { id: 2035, type: "grammar", text: "「落ちた」", options: ["سَقَطَ", "طَارَ", "أَكَلَ", "مَشَى"], correctIndex: 0, explanation: "「Saqaṭa」です。" },
        { id: 2036, type: "grammar", text: "命令形「غَنِّ（歌え）」の語末が短い理由は？", options: ["女性形だから", "弱動詞（欠損動詞）の命令形だから", "複数形だから", "間違い"], correctIndex: 1, explanation: "原形が「غَنَّى（Ghannā）」という弱動詞（語末が母音）のため、命令形では語末の長母音が脱落して「Ghanni」となります。" }
      ],
      sentences: [
        { speaker: "ナレーター", arabic: "وَقَفَ الْغُرَابُ عَلَى غُصْنِ شَجَرَةٍ.", japanese: "カラスは木の枝にとまりました。" },
        { speaker: "ナレーター", arabic: "جَاءَ الثَّعْلَبُ وَقَالَ: مَا أَجْمَلَ صَوْتَكَ!", japanese: "キツネが来て言いました。「なんて美しい声なんだ！」" },
        { speaker: "ナレーター", arabic: "غَنِّ لَنَا يَا صَدِيقِي.", japanese: "歌ってくれよ、友よ。" },
        { speaker: "ナレーター", arabic: "فَتَحَ الْغُرَابُ فَمَهُ لِيُغَنِّيَ.", japanese: "カラスは歌うために口を開けました。" },
        { speaker: "ナレーター", arabic: "فَسَقَطَتِ الْجُبْنَةُ وَأَكَلَهَا الثَّعْلَبُ.", japanese: "するとチーズが落ち、キツネがそれを食べました。" }
      ]
    },
    {
      id: 202, title: "アラビア書道", category: "文化", level: "中級",
      contentVoweled: "يُعْتَبَرُ الْخَطُّ الْعَرَبِيُّ مِنْ أَهَمِّ الْفُنُونِ الْإِسْلَامِيَّةِ. هُنَاكَ أَنْوَاعٌ كَثِيرَةٌ مِنَ الْخُطُوطِ. مِثْلُ خَطِّ النَّسْخِ وَخَطِّ الرُّقْعَةِ. يَتَطَلَّبُ الْخَطُّ صَبْرًا وَتَدْرِيبًا. إِنَّهُ يُظْهِرُ جَمَالَ اللُّغَةِ الْعَرَبِيَّةِ.",
      contentPlain: "يعتبر الخط العربي من أهم الفنون الإسلامية. هناك أنواع كثيرة من الخطوط. مثل خط النسخ وخط الرقعة. يتطلب الخط صبرا وتدريبا. إنه يظهر جمال اللغة العربية.",
      vocabList: [
        { word: "خَطّ", meaning: "書道/線" },
        { word: "فَنّ", meaning: "芸術" },
        { word: "قُرْآن", meaning: "クルアーン" }
      ],
      questions: [
        { id: 2021, type: "reading", text: "アラビア書道とは何ですか？", options: ["スポーツ", "芸術", "料理", "音楽"], correctIndex: 1, explanation: "「فَنّ (芸術)」です。" },
        { id: 2022, type: "reading", text: "何に使われますか？", options: ["手紙", "新聞", "クルアーンの書写", "看板"], correctIndex: 2, explanation: "「كِتَابَةِ الْقُرْآنِ (クルアーンを書くこと)」です。" },
        { id: 2023, type: "reading", text: "書体の種類の一つは？", options: ["ナスフ体", "ゴシック体", "明朝体", "イタリック"], correctIndex: 0, explanation: "「Naskh (ナスフ)」は有名なアラビア書体です。" },
        { id: 2024, type: "vocabulary", text: "「جَمِيل」の反対語は？", options: ["カビール", "カビーフ（醜い）", "ジャディード", "サギール"], correctIndex: 1, explanation: "Jamīl (美しい) の対義語は Qabīḥ (醜い) です。" },
        { id: 2025, type: "grammar", text: "「使われています（受動態）」", options: ["يُسْتَخْدَمُ", "يَسْتَخْدِمُ", "اِسْتَخْدَمَ", "اِسْتِخْدَام"], correctIndex: 0, explanation: "Yustakhdamu は受動態です。" },
        { id: 2026, type: "grammar", text: "「إِنَّهُ（それは本当に）」の後の名詞の格は？", options: ["主格（〜u）", "対格（〜a）", "属格（〜i）", "変化なし"], correctIndex: 1, explanation: "強調の助詞「إِنَّ (Inna)」の後ろに来る名詞（または代名詞）は、対格（マンスーブ）になります。" }
      ],
      sentences: [
        { speaker: "ナレーター", arabic: "يُعْتَبَرُ الْخَطُّ الْعَرَبِيُّ مِنْ أَهَمِّ الْفُنُونِ الْإِسْلَامِيَّةِ.", japanese: "アラビア書道は最も重要なイスラム芸術の一つとみなされています。" },
        { speaker: "ナレーター", arabic: "هُنَاكَ أَنْوَاعٌ كَثِيرَةٌ مِنَ الْخُطُوطِ.", japanese: "書体には多くの種類があります。" },
        { speaker: "ナレーター", arabic: "مِثْلُ خَطِّ النَّسْخِ وَخَطِّ الرُّقْعَةِ.", japanese: "ナスフ体やルクア体などです。" },
        { speaker: "ナレーター", arabic: "يَتَطَلَّبُ الْخَطُّ صَبْرًا وَتَدْرِيبًا.", japanese: "書道は忍耐と練習を必要とします。" },
        { speaker: "ナレーター", arabic: "إِنَّهُ يُظْهِرُ جَمَالَ اللُّغَةِ الْعَرَبِيَّةِ.", japanese: "それはアラビア語の美しさを示しています。" }
      ]
    },
    {
      id: 208, title: "砂漠の環境", category: "文化", level: "中級",
      contentVoweled: "يَعِيشُ الْجَمَلُ فِي الصَّحْرَاءِ. يَسْتَطِيعُ تَحَمُّلَ الْعَطَشِ لِفَتْرَةٍ طَوِيلَةٍ. تَنْمُو أَشْجَارُ النَّخِيلِ فِي الْوَاحَاتِ. الْحَيَاةُ فِي الصَّحْرَاءِ صَعْبَةٌ وَلَكِنْ جَمِيلَةٌ. فِي اللَّيْلِ، يَكُونُ الْجَوُّ بَارِدًا.",
      contentPlain: "يعيش الجمل في الصحراء. يستطيع تحمل العطش لفترة طويلة. تنمو أشجار النخيل في الواحات. الحياة في الصحراء صعبة ولكن جميلة. في الليل، يكون الجو باردا.",
      vocabList: [
        { word: "جَمَل", meaning: "ラクダ" },
        { word: "نَخْلَة", meaning: "ナツメヤシの木" },
        { word: "مَاء", meaning: "水" }
      ],
      questions: [
        { id: 2081, type: "reading", text: "砂漠の特徴は？", options: ["寒くて雨が多い", "乾燥して暑い", "緑が多い", "雪が降る"], correctIndex: 1, explanation: "「الْجَفَاف وَالْحَرَارَة」です。" },
        { id: 2082, type: "reading", text: "「砂漠の船」と呼ばれる動物は？", options: ["馬", "ライオン", "ラクダ", "羊"], correctIndex: 2, explanation: "「الْجَمَل (ラクダ)」です。" },
        { id: 2083, type: "reading", text: "砂漠で育つ有名な木は？", options: ["リンゴ", "ナツメヤシ（ナヒル）", "桜", "松"], correctIndex: 1, explanation: "「النَّخِيل (ナツメヤシ)」です。" },
        { id: 2084, type: "vocabulary", text: "「تَحَمُّل」の意味は？", options: ["睡眠", "食事", "忍耐/耐久", "遊び"], correctIndex: 2, explanation: "耐えること、忍耐力です。" },
        { id: 2085, type: "grammar", text: "「少ない」", options: ["قَلِيل", "كَثِير", "كَبِير", "طَوِيل"], correctIndex: 0, explanation: "「Qalīl」です。" },
        { id: 2086, type: "grammar", text: "「تَنْمُو أَشْجَارُ（木々が育つ）」で動詞が単数形なのはなぜ？", options: ["主語が人間以外の複数だから", "主語が単数だから", "動詞が文末にあるから", "間違い"], correctIndex: 0, explanation: "主語が「人間以外の複数形（ここでは木々）」の場合、動詞や形容詞は通常「女性単数」扱いで受けます。" }
      ],
      sentences: [
        { speaker: "ナレーター", arabic: "يَعِيشُ الْجَمَلُ فِي الصَّحْرَاءِ.", japanese: "ラクダは砂漠に住んでいます。" },
        { speaker: "ナレーター", arabic: "يَسْتَطِيعُ تَحَمُّلَ الْعَطَشِ لِفَتْرَةٍ طَوِيلَةٍ.", japanese: "渇きに長期間耐えることができます。" },
        { speaker: "ナレーター", arabic: "تَنْمُو أَشْجَارُ النَّخِيلِ فِي الْوَاحَاتِ.", japanese: "オアシスにはナツメヤシの木が育ちます。" },
        { speaker: "ナレーター", arabic: "الْحَيَاةُ فِي الصَّحْرَاءِ صَعْبَةٌ وَلَكِنْ جَمِيلَةٌ.", japanese: "砂漠の生活は厳しいですが、美しいです。" },
        { speaker: "ナレーター", arabic: "فِي اللَّيْلِ، يَكُونُ الْجَوُّ بَارِدًا.", japanese: "夜になると、天気は寒くなります。" }
      ]
    },
    {
      id: 204, title: "スマホ依存", category: "記事", level: "中級",
      contentVoweled: "أَصْبَحَ الْهَاتِفُ جُزْءًا مُهِمًّا مِنْ حَيَاتِنَا. نَسْتَخْدِمُهُ لِلْعَمَلِ وَالتَّوَاصُلِ. وَلَكِنَّ الْإِسْرَافَ فِيهِ مُضِرٌّ. يُسَبِّبُ قِلَّةَ النَّوْمِ وَالتَّعَبَ. يَجِبُ أَنْ نَسْتَخْدِمَهُ بِحِكْمَةٍ.",
      contentPlain: "أصبح الهاتف جزءا مهما من حياتنا. نستخدمه للعمل والتواصل. ولكن الإسراف فيه مضر. يسبب قلة النوم والتعب. يجب أن نستخدمه بحكمة.",
      vocabList: [
        { word: "هَاتِف ذَكِيّ", meaning: "スマートフォン" },
        { word: "وَقْت", meaning: "時間" },
        { word: "مُفِيد", meaning: "有益な" }
      ],
      questions: [
        { id: 2041, type: "reading", text: "人々は何に時間を使っていますか？", options: ["読書", "スポーツ", "スマホ", "料理"], correctIndex: 2, explanation: "「الْهَوَاتِفِ الذَّكِيَّةِ (スマートフォン)」です。" },
        { id: 2042, type: "reading", text: "スマホにはどんな側面がありますか？", options: ["良いことだけ", "悪いことだけ", "有益だが害もある", "関係ない"], correctIndex: 2, explanation: "メリットとデメリットの両方があります。" },
        { id: 2043, type: "reading", text: "使いすぎるとどうなりますか？", options: ["元気になる", "目が疲れる/時間を無駄にする", "金持ちになる", "頭が良くなる"], correctIndex: 1, explanation: "「إِضَاعَةُ الْوَقْتِ (時間の浪費)」などの害があります。" },
        { id: 2044, type: "vocabulary", text: "「تَوَاصُل」の意味は？", options: ["切断", "コミュニケーション", "食事", "睡眠"], correctIndex: 1, explanation: "Communicationのことです。" },
        { id: 2045, type: "grammar", text: "「過ごす（時間）」", options: ["يَقْضِي", "يَشْتَرِي", "يَبِيعُ", "يُعْطِي"], correctIndex: 0, explanation: "「Yaqḍī」は（時間を）過ごす、という意味です。" },
        { id: 2046, type: "grammar", text: "「يَجِبُ أَنْ نَسْتَخْدِمَهُ」で動詞の最後が「a」になる理由は？", options: ["過去形だから", "接続詞「أَنْ (an)」の後だから", "複数形だから", "主語がないから"], correctIndex: 1, explanation: "「أَنْ」の後ろの動詞は接続法（マンスーブ）になり、語末が「u」から「a」に変化します。" }
      ],
      sentences: [
        { speaker: "ナレーター", arabic: "أَصْبَحَ الْهَاتِفُ جُزْءًا مُهِمًّا مِنْ حَيَاتِنَا.", japanese: "電話は私たちの生活の重要な一部になりました。" },
        { speaker: "ナレーター", arabic: "نَسْتَخْدِمُهُ لِلْعَمَلِ وَالتَّوَاصُلِ.", japanese: "私たちはそれを仕事や連絡に使います。" },
        { speaker: "ナレーター", arabic: "وَلَكِنَّ الْإِسْرَافَ فِيهِ مُضِرٌّ.", japanese: "しかし、過度の使用は有害です。" },
        { speaker: "ナレーター", arabic: "يُسَبِّبُ قِلَّةَ النَّوْمِ وَالتَّعَبَ.", japanese: "それは睡眠不足や疲れを引き起こします。" },
        { speaker: "ナレーター", arabic: "يَجِبُ أَنْ نَسْتَخْدِمَهُ بِحِكْمَةٍ.", japanese: "私たちはそれを賢く使わなければなりません。" }
      ]
    },
    {
      id: 205, title: "健康的な食事", category: "記事", level: "中級",
      contentVoweled: "لِلْحِفَاظِ عَلَى الصِّحَّةِ، مَارِسِ الرِّيَاضَةَ. تَنَاوَلِ الْفَوَاكِهَ وَالْخُضْرَوَاتِ يَوْمِيًّا. اِشْرَبِ الْمَاءَ بِكَثْرَةٍ. اِبْتَعِدْ عَنِ الْوَجَبَاتِ السَّرِيعَةِ. الْعَقْلُ السَّلِيمُ فِي الْجِسْمِ السَّلِيمِ.",
      contentPlain: "للحفاظ على الصحة، مارس الرياضة. تناول الفواكه والخضروات يوميا. اشرب الماء بكثرة. ابتعد عن الوجبات السريعة. العقل السليم في الجسم السليم.",
      vocabList: [
        { word: "صِحَّة", meaning: "健康" },
        { word: "خُضْرَوَات", meaning: "野菜" },
        { word: "فَوَاكِه", meaning: "果物" }
      ],
      questions: [
        { id: 2051, type: "reading", text: "「健康は健康な人の頭上の〇〇」", options: ["帽子", "王冠", "髪", "石"], correctIndex: 1, explanation: "ことわざ：「الصِّحَّةُ تَاجٌ (健康は王冠である)」。" },
        { id: 2052, type: "reading", text: "何を食べるべきですか？", options: ["砂糖", "ファストフード", "野菜と果物", "塩"], correctIndex: 2, explanation: "「خُضْرَوَات وَفَوَاكِه」です。" },
        { id: 2053, type: "reading", text: "何を避けるべきですか？", options: ["水", "運動", "糖分と脂肪", "睡眠"], correctIndex: 2, explanation: "「السُّكَّرِيَّات وَالدُّهُون (糖分と脂肪)」です。" },
        { id: 2054, type: "vocabulary", text: "「جِسْم」の意味は？", options: ["心", "体", "頭", "足"], correctIndex: 1, explanation: "Body（体）のことです。" },
        { id: 2055, type: "grammar", text: "「〜しなければならない」", options: ["يَجِبُ أَنْ", "أُرِيدُ أَنْ", "أُحِبُّ أَنْ", "أَسْتَطِيعُ أَنْ"], correctIndex: 0, explanation: "「Yajibu an」で義務を表します。" },
        { id: 2056, type: "grammar", text: "「اِبْتَعِدْ（離れろ）」と一緒に使う前置詞は？", options: ["إِلَى（へ）", "فِي（で）", "عَنْ（から）", "مَعَ（と）"], correctIndex: 2, explanation: "「〜から離れる/避ける」は「اِبْتَعَدَ عَنْ（Ibta'ada 'an）」のセットで覚えます。" }
      ],
      sentences: [
        { speaker: "ナレーター", arabic: "لِلْحِفَاظِ عَلَى الصِّحَّةِ، مَارِسِ الرِّيَاضَةَ.", japanese: "健康を保つために、スポーツをしなさい。" },
        { speaker: "ナレーター", arabic: "تَنَاوَلِ الْفَوَاكِهَ وَالْخُضْرَوَاتِ يَوْمِيًّا.", japanese: "毎日果物と野菜を食べなさい。" },
        { speaker: "ナレーター", arabic: "اِشْرَبِ الْمَاءَ بِكَثْرَةٍ.", japanese: "水をたくさん飲みなさい。" },
        { speaker: "ナレーター", arabic: "اِبْتَعِدْ عَنِ الْوَجَبَاتِ السَّرِيعَةِ.", japanese: "ファストフードは避けなさい。" },
        { speaker: "ナレーター", arabic: "الْعَقْلُ السَّلِيمُ فِي الْجِسْمِ السَّلِيمِ.", japanese: "健全なる精神は健全なる身体に宿る。" }
      ]
    },
    {
      id: 206, title: "リヤドの発展", category: "ニュース", level: "中級",
      contentVoweled: "كَانَتِ الرِّيَاضُ مَدِينَةً صَغِيرَةً فِي الْمَاضِي. الْآنَ، هِيَ مَدِينَةٌ حَدِيثَةٌ وَكَبِيرَةٌ. فِيهَا مَبَانٍ عَالِيَةٌ وَأَسْوَاقٌ كَثِيرَةٌ. رُؤْيَةُ 2030 تُغَيِّرُ الْمَدِينَةَ. يَزُورُهَا السُّيَّاحُ مِنْ كُلِّ مَكَانٍ.",
      contentPlain: "كانت الرياض مدينة صغيرة في الماضي. الآن، هي مدينة حديثة وكبيرة. فيها مبان عالية وأسواق كثيرة. رؤية 2030 تغير المدينة. يزورها السياح من كل مكان.",
      vocabList: [
        { word: "عَاصِمَة", meaning: "首都" },
        { word: "تَطَوُّر", meaning: "発展" },
        { word: "مَبْنَى", meaning: "建物" }
      ],
      questions: [
        { id: 2061, type: "reading", text: "リヤドは何ですか？", options: ["港町", "首都", "小さな村", "農場"], correctIndex: 1, explanation: "「عَاصِمَة (首都)」です。" },
        { id: 2062, type: "reading", text: "どのように発展しましたか？", options: ["ゆっくり", "急速に", "変わっていない", "小さくなった"], correctIndex: 1, explanation: "「بِسُرْعَةٍ كَبِيرَةٍ (とても速く)」です。" },
        { id: 2063, type: "reading", text: "現在リヤドにあるものは？", options: ["古い家だけ", "高層ビル（タワー）", "海", "山"], correctIndex: 1, explanation: "「أَبْرَاج (タワー/高層ビル)」が増えています。" },
        { id: 2064, type: "vocabulary", text: "「مُسْتَقْبَل」の意味は？", options: ["過去", "現在", "未来", "歴史"], correctIndex: 2, explanation: "Future（未来）です。" },
        { id: 2065, type: "grammar", text: "「なりました」", options: ["أَصْبَحَتْ", "كَانَتْ", "لَيْسَتْ", "بَقِيَتْ"], correctIndex: 0, explanation: "「Aṣbaḥat (Became)」です。" },
        { id: 2066, type: "grammar", text: "「كَانَتِ الرِّيَاضُ مَدِينَةً（リヤドは町でした）」で、なぜ「町」が対格（〜a）？", options: ["主語だから", "目的語だから", "カーナ（Kāna）の述語だから", "間違い"], correctIndex: 2, explanation: "「Kāna（〜だった）」の述語（Khabar Kāna）は対格（マンスーブ）になるルールがあります。" }
      ],
      sentences: [
        { speaker: "ナレーター", arabic: "كَانَتِ الرِّيَاضُ مَدِينَةً صَغِيرَةً فِي الْمَاضِي.", japanese: "リヤドは昔、小さな町でした。" },
        { speaker: "ナレーター", arabic: "الْآنَ، هِيَ مَدِينَةٌ حَدِيثَةٌ وَكَبِيرَةٌ.", japanese: "今では、現代的で大きな都市です。" },
        { speaker: "ナレーター", arabic: "فِيهَا مَبَانٍ عَالِيَةٌ وَأَسْوَاقٌ كَثِيرَةٌ.", japanese: "高い建物や多くの市場があります。" },
        { speaker: "ナレーター", arabic: "رُؤْيَةُ 2030 تُغَيِّرُ الْمَدِينَةَ.", japanese: "ビジョン2030が街を変えています。" },
        { speaker: "ナレーター", arabic: "يَزُورُهَا السُّيَّاحُ مِنْ كُلِّ مَكَانٍ.", japanese: "各地から観光客が訪れます。" }
      ]
    },
    {
          id: 207, title: "時間の重要性", category: "文学", level: "中級",
          contentVoweled: "يَقُولُ الْمَثَلُ: الْوَقْتُ كَالسَّيْفِ إِنْ لَمْ تَقْطَعْهُ قَطَعَكَ. الْوَقْتُ أَغْلَى مِنَ الذَّهَبِ. يَجِبُ تَنْظِيمُ الْوَقْتِ لِلنَّجَاحِ. لَا تُؤَجِّلْ عَمَلَ الْيَوْمِ إِلَى الْغَدِ. الدَّقِيقَةُ الَّتِي تَذْهَبُ لَا تَعُودُ. اِسْتَغِلَّ وَقْتَكَ فِي شَيْءٍ مُفِيدٍ.",
          contentPlain: "يقول المثل: الوقت كالسيف إن لم تقطعه قطعك. الوقت أغلى من الذهب. يجب تنظيم الوقت للنجاح. لا تؤجل عمل اليوم إلى الغد. الدقيقة التي تذهب لا تعود. استغل وقتك في شيء مفيد.",
          vocabList: [
            { word: "وَقْت", meaning: "時間" },
            { word: "سَيْف", meaning: "剣" },
            { word: "ذَهَب", meaning: "金(Gold)" }
          ],
          questions: [
            { id: 2071, type: "reading", text: "時間は何に例えられていますか？", options: ["水", "剣", "風", "花"], correctIndex: 1, explanation: "本文の「كَالسَّيْفِ (剣のようなもの)」という記述に基づきます。" },
            { id: 2072, type: "reading", text: "過ぎた時間はどうなりますか？", options: ["戻ってくる", "戻らない", "買える", "止まる"], correctIndex: 1, explanation: "「لَا يَعُودُ (戻らない)」です。" },
            { id: 2073, type: "reading", text: "時間をどう使うべきですか？", options: ["寝て過ごす", "無駄にする", "有益なことに使う", "遊ぶだけ"], correctIndex: 2, explanation: "「فِي شَيْءٍ مُفِيدٍ (有益なことに)」です。" },
            { id: 2074, type: "vocabulary", text: "「نَجَاح」の意味は？", options: ["失敗", "成功", "勉強", "仕事"], correctIndex: 1, explanation: "成功のことです。" },
            { id: 2075, type: "grammar", text: "「もし〜なら（条件）」", options: ["إِنْ / إِذَا", "لَكِنْ", "ثُمَّ", "أَوْ"], correctIndex: 0, explanation: "「In」や「Idhā」を使います。" },
            { id: 2076, type: "grammar", text: "「أَغْلَى مِنَ...（〜より高い）」のような比較級の元の形は？", options: ["غَالٍ (Ghālin)", "رَخِيصٌ (Rakhīṣ)", "كَثِيرٌ (Kathīr)", "قَلِيلٌ (Qalīl)"], correctIndex: 0, explanation: "「高価な（Ghālin）」の比較級が「Aghlā」です。" }
          ],
          sentences: [
            { speaker: "ナレーター", arabic: "يَقُولُ الْمَثَلُ: الْوَقْتُ كَالسَّيْفِ إِنْ لَمْ تَقْطَعْهُ قَطَعَكَ.", japanese: "格言にこうあります。「時間は剣のようなもの。あなたがそれを切らなければ（使わなければ）、それがあなたを切る」と。" },
            { speaker: "ナレーター", arabic: "الْوَقْتُ أَغْلَى مِنَ الذَّهَبِ.", japanese: "時間は金よりも高価です。" },
            { speaker: "ナレーター", arabic: "يَجِبُ تَنْظِيمُ الْوَقْتِ لِلنَّجَاحِ.", japanese: "成功のためには時間を管理しなければなりません。" },
            { speaker: "ナレーター", arabic: "لَا تُؤَجِّلْ عَمَلَ الْيَوْمِ إِلَى الْغَدِ.", japanese: "今日の仕事を明日に延ばすな。" },
            { speaker: "ナレーター", arabic: "الدَّقِيقَةُ الَّتِي تَذْهَبُ لَا تَعُودُ.", japanese: "過ぎ去った1分は戻ってきません。" },
            { speaker: "ナレーター", arabic: "اِسْتَغِلَّ وَقْتَكَ فِي شَيْءٍ مُفِيدٍ.", japanese: "時間を有益なことに使いなさい。" }
          ]
    },
    {
      id: 209, title: "友人への手紙", category: "文学", level: "中級",
      contentVoweled: "صَدِيقِي الْعَزِيزَ، السَّلَامُ عَلَيْكُمْ. أَكْتُبُ إِلَيْكَ لِأُخْبِرَكَ بِنَجَاحِي. أَنَا مُشْتَاقٌ إِلَيْكَ كَثِيرًا. سَأَزُورُكَ فِي الْعُطْلَةِ الصَّيْفِيَّةِ. انْتَظِرْ رَدَّكَ. صَدِيقُكَ الْمُخْلِصُ.",
      contentPlain: "صديقي العزيز، السلام عليكم. أكتب إليك لأخبرك بنجاحي. أنا مشتاق إليك كثيرا. سأزورك في العطلة الصيفية. انتظر ردك. صديقك المخلص.",
      vocabList: [
        { word: "رِسَالَة", meaning: "手紙" },
        { word: "عَزِيز", meaning: "親愛なる" },
        { word: "مُشْتَاق", meaning: "恋しい/会いたい" }
      ],
      questions: [
        { id: 2091, type: "reading", text: "これは何ですか？", options: ["ニュース", "手紙/メール", "詩", "契約書"], correctIndex: 1, explanation: "「رِسَالَة (手紙)」の形式です。" },
        { id: 2092, type: "reading", text: "誰に宛てていますか？", options: ["父", "先生", "親愛なる友人", "敵"], correctIndex: 2, explanation: "「صَدِيقِي الْعَزِيز (親愛なる友よ)」です。" },
        { id: 2093, type: "reading", text: "筆者の気持ちは？", options: ["怒っている", "会いたがっている", "疲れている", "忙しい"], correctIndex: 1, explanation: "「مُشْتَاقٌ إِلَيْكَ (君が恋しい)」と書いてあります。" },
        { id: 2094, type: "vocabulary", text: "「قَرِيبًا」の意味は？", options: ["遠く", "すぐに/近々", "昔", "昨日"], correctIndex: 1, explanation: "Soon（すぐに）です。" },
        { id: 2095, type: "grammar", text: "「書きます」", options: ["أَكْتُبُ", "أَقْرَأُ", "أَنَامُ", "أَمْشِي"], correctIndex: 0, explanation: "「Aktubu」です。" },
        { id: 2096, type: "grammar", text: "「لِأُخْبِرَكَ（あなたに知らせるために）」の「Li」の機能は？", options: ["所有（〜のもの）", "目的（〜するために）", "誓い", "強調"], correctIndex: 1, explanation: "動詞の前につく「Li」は「Lam al-Ta'lil」と呼ばれ、目的を表し、後の動詞をマンスーブにします。" }
      ],
      sentences: [
        { speaker: "手紙", arabic: "صَدِيقِي الْعَزِيزَ، السَّلَامُ عَلَيْكُمْ.", japanese: "親愛なる友よ、平安あれ。" },
        { speaker: "手紙", arabic: "أَكْتُبُ إِلَيْكَ لِأُخْبِرَكَ بِنَجَاحِي.", japanese: "私の成功（合格）を知らせるために書いています。" },
        { speaker: "手紙", arabic: "أَنَا مُشْتَاقٌ إِلَيْكَ كَثِيرًا.", japanese: "あなたがとても恋しいです。" },
        { speaker: "手紙", arabic: "سَأَزُورُكَ فِي الْعُطْلَةِ الصَّيْفِيَّةِ.", japanese: "夏休みにあなたを訪ねるつもりです。" },
        { speaker: "手紙", arabic: "انْتَظِرْ رَدَّكَ. صَدِيقُكَ الْمُخْلِصُ.", japanese: "返事を待っています。あなたの誠実な友より。" }
      ]
    },
    {
      id: 210, title: "医学の父 イブン・シーナー", category: "歴史", level: "中級",
      contentVoweled: "يُعْتَبَرُ ابْنُ سِينَا مِنْ أَشْهَرِ الْعُلَمَاءِ الْمُسْلِمِينَ. وُلِدَ فِي مَدِينَةِ بُخَارَى. دَرَسَ الطِّبَّ وَالْفَلْسَفَةَ مُنْذُ الصِّغَرِ. كِتَابُهُ 'الْقَانُونُ' دُرِّسَ فِي جَامِعَاتِ أُورُوبَّا. لُقِّبَ بِأَمِيرِ الْأَطِبَّاءِ.",
      contentPlain: "يعتبر ابن سينا من أشهر العلماء المسلمين. ولد في مدينة بخارى. درس الطب والفلسفة منذ الصغر. كتابه 'القانون' درس في جامعات أوروبا. لقب بأمير الأطباء.",
      vocabList: [
        { word: "طَبِيب", meaning: "医者" },
        { word: "أَلَّفَ", meaning: "著した/書いた" },
        { word: "قَانُون", meaning: "法律/規範" }
      ],
      questions: [
        { id: 2101, type: "reading", text: "イブン・シーナーの職業は？", options: ["王様", "医者", "商人", "詩人"], correctIndex: 1, explanation: "「طَبِيبًا (医者)」です。" },
        { id: 2102, type: "reading", text: "彼の有名な本は？", options: ["千夜一夜物語", "医学の典範（カノン）", "旅行記", "詩集"], correctIndex: 1, explanation: "「الْقَانُون فِي الطِّبِّ (医学の典範)」です。" },
        { id: 2103, type: "reading", text: "彼はいつの時代の人ですか？", options: ["現代", "未来", "過去（昔）", "昨日"], correctIndex: 2, explanation: "「عَاشَ فِي الْمَاضِي (過去に生きた)」です。" },
        { id: 2104, type: "vocabulary", text: "「عَظِيم」の意味は？", options: ["小さい", "偉大な", "悪い", "新しい"], correctIndex: 1, explanation: "Great（偉大な）という意味です。" },
        { id: 2105, type: "grammar", text: "「彼は〜でした（過去）」", options: ["كَانَ", "يَكُونُ", "لَيْسَ", "أَصْبَحَ"], correctIndex: 0, explanation: "「Kāna」は過去の状態を表します。" },
        { id: 2106, type: "grammar", text: "「وُلِدَ（生まれた）」や「لُقِّبَ（あだ名された）」の動詞の種類は？", options: ["能動態", "受動態", "命令形", "未来形"], correctIndex: 1, explanation: "最初の文字が「ウ（u）」の音で始まる過去形は、通常「受動態（Majhul）」です。" }
      ],
      sentences: [
        { speaker: "ナレーター", arabic: "يُعْتَبَرُ ابْنُ سِينَا مِنْ أَشْهَرِ الْعُلَمَاءِ الْمُسْلِمِينَ.", japanese: "イブン・シーナーは最も有名なイスラムの学者の一人と考えられています。" },
        { speaker: "ナレーター", arabic: "وُلِدَ فِي مَدِينَةِ بُخَارَى.", japanese: "彼はブハラという町で生まれました。" },
        { speaker: "ナレーター", arabic: "دَرَسَ الطِّبَّ وَالْفَلْسَفَةَ مُنْذُ الصِّغَرِ.", japanese: "幼い頃から医学と哲学を学びました。" },
        { speaker: "ナレーター", arabic: "كِتَابُهُ 'الْقَانُونُ' دُرِّسَ فِي جَامِعَاتِ أُورُوبَّا.", japanese: "彼の著書『カノン』はヨーロッパの大学で教えられました。" },
        { speaker: "ナレーター", arabic: "لُقِّبَ بِأَمِيرِ الْأَطِبَّاءِ.", japanese: "彼は「医師たちの長（プリンス）」と呼ばれました。" }
      ]
    },
    {
      id: 211, title: "アルハンブラ宮殿", category: "歴史", level: "中級",
      contentVoweled: "يَقَعُ قَصْرُ الْحَمْرَاءِ فِي إِسْبَانِيَا. بَنَاهُ الْمُلُوكُ الْمُسْلِمُونَ فِي الْأَنْدَلُسِ. يَتَمَيَّزُ بِالنُّقُوشِ الْجَمِيلَةِ وَالْحَدَائِقِ. تُوجَدُ فِيهِ نَافُورَةُ الْأُسُودِ الشَّهِيرَةُ. يَزُورُهُ الْمَلَايِينُ كُلَّ عَامٍ.",
      contentPlain: "يقع قصر الحمراء في إسبانيا. بناه الملوك المسلمون في الأندلس. يتميز بالنقوش الجميلة والحدائق. توجد فيه نافورة الأسود الشهيرة. يزوره الملايين كل عام.",
      vocabList: [
        { word: "قَصْر", meaning: "宮殿" },
        { word: "أَحْمَر", meaning: "赤い" },
        { word: "جَنَّة", meaning: "庭園/天国" }
      ],
      questions: [
        { id: 2111, type: "reading", text: "アルハンブラ宮殿はどこにありますか？", options: ["カイロ", "バグダッド", "グラナダ（スペイン）", "ダマスカス"], correctIndex: 2, explanation: "「فِي غَرْنَاطَةَ (グラナダに)」です。" },
        { id: 2112, type: "reading", text: "それは何の傑作ですか？", options: ["料理", "建築", "音楽", "スポーツ"], correctIndex: 1, explanation: "「تُحْفَة مِعْمَارِيَّة (建築の傑作)」です。" },
        { id: 2113, type: "reading", text: "なぜ「アル・ハムラー（赤い）」と呼ばれますか？", options: ["壁が赤いから", "王の名前", "花の名前", "血の色"], correctIndex: 0, explanation: "「لَوْنُ حِجَارَتِهِ (石の色)」に由来します。" },
        { id: 2114, type: "vocabulary", text: "「نَافُورَة」の意味は？", options: ["山", "噴水", "川", "道"], correctIndex: 1, explanation: "噴水のことです。" },
        { id: 2115, type: "grammar", text: "「たくさんの観光客」", options: ["سُيَّاحٌ كَثِيرُونَ", "سُيَّاحٌ قَلِيلُونَ", "سُيَّاحٌ صِغَارٌ", "سُيَّاحٌ كَبِيرٌ"], correctIndex: 0, explanation: "Suyyāḥ (複数) には Kathīrūna (複数) を合わせます。" },
        { id: 2116, type: "grammar", text: "「بَنَاهُ الْمُلُوكُ（王たちがそれを建てた）」の「hu」は何を指す？", options: ["王たち", "宮殿", "スペイン", "イスラム"], correctIndex: 1, explanation: "動詞につく代名詞「hu」は目的語です。ここでは「宮殿」を指します。" }
      ],
      sentences: [
        { speaker: "ナレーター", arabic: "يَقَعُ قَصْرُ الْحَمْرَاءِ فِي إِسْبَانِيَا.", japanese: "アルハンブラ宮殿はスペインにあります。" },
        { speaker: "ナレーター", arabic: "بَنَاهُ الْمُلُوكُ الْمُسْلِمُونَ فِي الْأَنْدَلُسِ.", japanese: "アンダルスのイスラムの王たちが建てました。" },
        { speaker: "ナレーター", arabic: "يَتَمَيَّزُ بِالنُّقُوشِ الْجَمِيلَةِ وَالْحَدَائِقِ.", japanese: "美しい彫刻と庭園が特徴です。" },
        { speaker: "ナレーター", arabic: "تُوجَدُ فِيهِ نَافُورَةُ الْأُسُودِ الشَّهِيرَةُ.", japanese: "そこには有名なライオンの噴水があります。" },
        { speaker: "ナレーター", arabic: "يَزُورُهُ الْمَلَايِينُ كُلَّ عَامٍ.", japanese: "毎年何百万人もの人々が訪れます。" }
      ]
    },
    {
      id: 212, title: "サラーフッディーン", category: "歴史", level: "中級",
      contentVoweled: "وُلِدَ صَلَاحُ الدِّينِ فِي تِكْرِيت. وَحَّدَ مِصْرَ وَالشَّامَ. انْتَصَرَ فِي مَعْرَكَةِ حِطِّينَ. عَامَلَ الْأَسْرَى بِلُطْفٍ وَرَحْمَةٍ. إِنَّهُ رَمْزٌ لِلْفُرُوسِيَّةِ.",
      contentPlain: "ولد صلاح الدين في تكريت. وحد مصر والشام. انتصر في معركة حطين. عامل الأسرى بلطف ورحمة. إنه رمز للفروسية.",
      vocabList: [
        { word: "قَائِد", meaning: "リーダー/司令官" },
        { word: "شُجَاع", meaning: "勇敢な" },
        { word: "حَرَّرَ", meaning: "解放した" }
      ],
      questions: [
        { id: 2121, type: "reading", text: "サラーフッディーンはどんな人でしたか？", options: ["弱虫", "勇敢なリーダー", "商人", "農夫"], correctIndex: 1, explanation: "「قَائِدٌ شُجَاعٌ」です。" },
        { id: 2122, type: "reading", text: "彼は何を解放しましたか？", options: ["カイロ", "バグダッド", "エルサレム（クドゥス）", "ダマスカス"], correctIndex: 2, explanation: "「الْقُدْس (エルサレム)」です。" },
        { id: 2123, type: "reading", text: "彼は敵に対してどうでしたか？", options: ["残酷だった", "寛容だった", "無視した", "逃げた"], correctIndex: 1, explanation: "「مُتَسَامِحًا (寛容)」でした。" },
        { id: 2124, type: "vocabulary", text: "「مَعْرَكَة」の意味は？", options: ["平和", "戦い/戦闘", "食事", "本"], correctIndex: 1, explanation: "Battle（戦い）のことです。" },
        { id: 2125, type: "grammar", text: "「〜として知られている」", options: ["مَعْرُوفٌ بِـ", "مَجْهُولٌ بِـ", "كَبِيرٌ بِـ", "صَغِيرٌ بِـ"], correctIndex: 0, explanation: "「Ma'rūf bi-」です。" },
        { id: 2126, type: "grammar", text: "「عَامَلَ（扱った）」のような派生形第3形の意味的特徴は？", options: ["反射（自分にする）", "相手のある行為", "受動", "要請"], correctIndex: 1, explanation: "第3形（Fā'ala）は、他者との関わりや相互行為を表すことが多いです。" }
      ],
      sentences: [
        { speaker: "ナレーター", arabic: "وُلِدَ صَلَاحُ الدِّينِ فِي تِكْرِيت.", japanese: "サラーフッディーンはティクリートで生まれました。" },
        { speaker: "ナレーター", arabic: "وَحَّدَ مِصْرَ وَالشَّامَ.", japanese: "彼はエジプトとシリア（シャーム）を統一しました。" },
        { speaker: "ナレーター", arabic: "انْتَصَرَ فِي مَعْرَكَةِ حِطِّينَ.", japanese: "彼はヒッティーンの戦いで勝利しました。" },
        { speaker: "ナレーター", arabic: "عَامَلَ الْأَسْرَى بِلُطْفٍ وَرَحْمَةٍ.", japanese: "彼は捕虜を優しさと慈悲を持って扱いました。" },
        { speaker: "ナレーター", arabic: "إِنَّهُ رَمْزٌ لِلْفُرُوسِيَّةِ.", japanese: "彼は騎士道の象徴です。" }
      ]
    },
    {
      id: 213, title: "コーヒーの歴史", category: "歴史", level: "中級",
      contentVoweled: "يُقَالُ إِنَّ رَاعِيًا لَاحَظَ نَشَاطَ غَنَمِهِ. كَانَتْ تَأْكُلُ مِنْ شَجَرَةِ الْبُنِّ. بَدَأَ النَّاسُ يَغْلُونَ الْحُبُوبَ وَيَشْرَبُونَهَا. أَصْبَحَتِ الْقَهْوَةُ مَشْرُوبًا شَعْبِيًّا. الْيَوْمَ، لَا نَسْتَطِيعُ بَدْءَ يَوْمِنَا بِدُونِهَا.",
      contentPlain: "يقال إن راعيا لاحظ نشاط غنمه. كانت تأكل من شجرة البن. بدأ الناس يغلون الحبوب ويشربونها. أصبحت القهوة مشروبا شعبيا. اليوم، لا نستطيع بدء يومنا بدونها.",
      vocabList: [
        { word: "قَهْوَة", meaning: "コーヒー" },
        { word: "عَالَم", meaning: "世界" },
        { word: "شَرِبَ", meaning: "飲んだ" }
      ],
      questions: [
        { id: 2131, type: "reading", text: "コーヒーはどこで発見されましたか？", options: ["ブラジル", "イエメン/エチオピア", "フランス", "中国"], correctIndex: 1, explanation: "「فِي الْيَمَنِ (イエメンで)」と記述されています（起源説の一つ）。" },
        { id: 2132, type: "reading", text: "誰が最初に飲みましたか？", options: ["王様", "羊飼いや修道士", "兵士", "子供"], correctIndex: 1, explanation: "「الرُّعَاة (羊飼いたち)」やスーフィーなどが知られています。" },
        { id: 2133, type: "reading", text: "コーヒーはどうなりましたか？", options: ["消えた", "世界に広まった", "禁止された", "忘れられた"], correctIndex: 1, explanation: "「انْتَشَرَتْ (広まった)」です。" },
        { id: 2134, type: "vocabulary", text: "「بُنّ」の意味は？", options: ["茶葉", "コーヒー豆", "砂糖", "カップ"], correctIndex: 1, explanation: "コーヒー豆のことです。" },
        { id: 2135, type: "grammar", text: "「発見された（受動態）」", options: ["اُكْتُشِفَتْ", "اِكْتَشَفَ", "يَكْتَشِفُ", "كِتَابَة"], correctIndex: 0, explanation: "「Uktushifat」は受動態です。" },
        { id: 2136, type: "grammar", text: "「يُقَالُ（言われている）」の直後に来る接続詞は？", options: ["أَنْ (An)", "إِنَّ (Inna)", "لِـ (Li)", "هَلْ (Hal)"], correctIndex: 1, explanation: "「Qāla（言った）」や受動態「Yuqālu」の直後で「〜と」引用する場合、Hamzaは下に付く「Inna」を使います。" }
      ],
      sentences: [
        { speaker: "ナレーター", arabic: "يُقَالُ إِنَّ رَاعِيًا لَاحَظَ نَشَاطَ غَنَمِهِ.", japanese: "ある羊飼いが、羊たちの活発さに気づいたと言われています。" },
        { speaker: "ナレーター", arabic: "كَانَتْ تَأْكُلُ مِنْ شَجَرَةِ الْبُنِّ.", japanese: "それらはコーヒーの木（の実）を食べていました。" },
        { speaker: "ナレーター", arabic: "بَدَأَ النَّاسُ يَغْلُونَ الْحُبُوبَ وَيَشْرَبُونَهَا.", japanese: "人々は豆を煮て飲み始めました。" },
        { speaker: "ナレーター", arabic: "أَصْبَحَتِ الْقَهْوَةُ مَشْرُوبًا شَعْبِيًّا.", japanese: "コーヒーは人気のある飲み物になりました。" },
        { speaker: "ナレーター", arabic: "الْيَوْمَ، لَا نَسْتَطِيعُ بَدْءَ يَوْمِنَا بِدُونِهَا.", japanese: "今日、私たちはそれなしで一日を始めることはできません。" }
      ]
    },
    {
      id: 214, title: "ペトラ遺跡", category: "歴史", level: "中級",
      contentVoweled: "بَنَى الْأَنْبَاطُ مَدِينَةَ الْبَتْرَاءِ. تَتَمَيَّزُ بِلَوْنِهَا الْوَرْدِيِّ الْجَمِيلِ. يَدْخُلُ السُّيَّاحُ عَبْرَ مَمَرٍّ ضَيِّقٍ يُسَمَّى 'السِّيق'. فِي النِّهَايَةِ تَظْهَرُ 'الْخَزْنَةُ' الرَّائِعَةُ. إِنَّهَا مِنْ عَجَائِبِ الدُّنْيَا.",
      contentPlain: "بنى الأنباط مدينة البتراء. تتميز بلونها الوردي الجميل. يدخل السياح عبر ممر ضيق يسمى 'السيق'. في النهاية تظهر 'الخزنة' الرائعة. إنها من عجائب الدنيا.",
      vocabList: [
        { word: "صَخْر", meaning: "岩" },
        { word: "وَرْدِيّ", meaning: "バラ色の" },
        { word: "سِيَاحَة", meaning: "観光" }
      ],
      questions: [
        { id: 2141, type: "reading", text: "ペトラはどこにありますか？", options: ["エジプト", "ヨルダン", "シリア", "イラク"], correctIndex: 1, explanation: "「فِي الْأُرْدُنِّ (ヨルダンに)」です。" },
        { id: 2142, type: "reading", text: "どのように作られましたか？", options: ["木で作られた", "岩に掘られた", "レンガで作られた", "鉄で作られた"], correctIndex: 1, explanation: "「مَحْفُورَةٌ فِي الصَّخْرِ (岩に掘られた)」です。" },
        { id: 2143, type: "reading", text: "別名は何ですか？", options: ["白い都", "バラ色の都", "黒い都", "黄金の都"], correctIndex: 1, explanation: "「الْمَدِينَة الْوَرْدِيَّة」と呼ばれます。" },
        { id: 2144, type: "vocabulary", text: "「خَزْنَة」の意味は？", options: ["宝物殿/金庫", "家", "道", "川"], correctIndex: 0, explanation: "ペトラの有名な遺跡「エル・ハズネ」のことです。" },
        { id: 2155, type: "grammar", text: "「多くの人々」", options: ["نَاسٌ كَثِيرُونَ", "نَاسٌ قَلِيلُونَ", "نَاسٌ وَاحِدٌ", "نَاسٌ صَغِيرٌ"], correctIndex: 0, explanation: "Nās (人々) は複数扱いです。" },
        { id: 2156, type: "grammar", text: "「يُسَمَّى（〜と呼ばれる）」はどの動詞の受動態？", options: ["過去形", "現在形", "命令形", "完了形"], correctIndex: 1, explanation: "「Yusammā」は現在形の受動態です。" }
      ],
      sentences: [
        { speaker: "ナレーター", arabic: "بَنَى الْأَنْبَاطُ مَدِينَةَ الْبَتْرَاءِ.", japanese: "ナバテア人がペトラの都市を建設しました。" },
        { speaker: "ナレーター", arabic: "تَتَمَيَّزُ بِلَوْنِهَا الْوَرْدِيِّ الْجَمِيلِ.", japanese: "美しいバラ色が特徴です。" },
        { speaker: "ナレーター", arabic: "يَدْخُلُ السُّيَّاحُ عَبْرَ مَمَرٍّ ضَيِّقٍ يُسَمَّى 'السِّيق'.", japanese: "観光客は「シーク」と呼ばれる狭い通路を通って入ります。" },
        { speaker: "ナレーター", arabic: "فِي النِّهَايَةِ تَظْهَرُ 'الْخَزْنَةُ' الرَّائِعَةُ.", japanese: "終わりに素晴らしい「宝物殿（エル・ハズネ）」が現れます。" },
        { speaker: "ナレーター", arabic: "إِنَّهَا مِنْ عَجَائِبِ الدُّنْيَا.", japanese: "それは世界の不思議の一つです。" }
      ]
    },
    {
      id: 215, title: "水は命", category: "記事", level: "中級",
      contentVoweled: "خَلَقَ اللهُ كُلَّ شَيْءٍ حَيٍّ مِنَ الْمَاءِ. يَحْتَاجُ الْإِنْسَانُ وَالْحَيَوَانُ وَالنَّبَاتُ إِلَى الْمَاءِ. يَجِبُ أَلَّا نُسْرِفَ فِي اسْتِخْدَامِهِ. أَغْلِقِ الصُّنْبُورَ بَعْدَ الِاسْتِخْدَامِ. الْمَاءُ نِعْمَةٌ كَبِيرَةٌ.",
      contentPlain: "خلق الله كل شيء حي من الماء. يحتاج الإنسان والحيوان والنبات إلى الماء. يجب ألا نسرف في استخدامه. أغلق الصنبور بعد الاستخدام. الماء نعمة كبيرة.",
      vocabList: [
        { word: "حَيَاة", meaning: "命/生活" },
        { word: "إِسْرَاف", meaning: "浪費" },
        { word: "شَرِبَ", meaning: "飲む" }
      ],
      questions: [
        { id: 2151, type: "reading", text: "水とは何ですか？", options: ["ただの液体", "命の秘密/源", "高いもの", "不要なもの"], correctIndex: 1, explanation: "「سِرُّ الْحَيَاةِ (命の秘密)」です。" },
        { id: 2152, type: "reading", text: "水なしで生きられますか？", options: ["はい", "いいえ", "1年なら", "少しなら"], correctIndex: 1, explanation: "「لَا يُمْكِنُ (不可能)」です。" },
        { id: 2153, type: "reading", text: "私たちはどうすべきですか？", options: ["浪費する", "汚す", "大切にする/節約する", "捨てる"], correctIndex: 2, explanation: "「نُحَافِظَ عَلَيْهِ (それを守る/保つ)」べきです。" },
        { id: 2154, type: "vocabulary", text: "「نَبَات」の意味は？", options: ["動物", "植物", "人間", "石"], correctIndex: 1, explanation: "植物です。" },
        { id: 2155, type: "grammar", text: "「〜なしで」", options: ["بِدُونِ", "مَعَ", "بِـ", "لِـ"], correctIndex: 0, explanation: "「Bidūni」です。" },
        { id: 2156, type: "grammar", text: "「أَلَّا نُسْرِفَ（浪費しないこと）」の「Allā」の分解は？", options: ["An + Lā", "In + Lā", "Al + Lā", "Anna + Lā"], correctIndex: 0, explanation: "接続詞「An」と否定「Lā」が結合して「Allā」となり、後の動詞はマンスーブ（接続法）になります。" }
      ],
      sentences: [
        { speaker: "ナレーター", arabic: "خَلَقَ اللهُ كُلَّ شَيْءٍ حَيٍّ مِنَ الْمَاءِ.", japanese: "神はすべての生きたものを水から創りました。" },
        { speaker: "ナレーター", arabic: "يَحْتَاجُ الْإِنْسَانُ وَالْحَيَوَانُ وَالنَّبَاتُ إِلَى الْمَاءِ.", japanese: "人間、動物、植物は水を必要とします。" },
        { speaker: "ナレーター", arabic: "يَجِبُ أَلَّا نُسْرِفَ فِي اسْتِخْدَامِهِ.", japanese: "使用において浪費してはいけません。" },
        { speaker: "ナレーター", arabic: "أَغْلِقِ الصُّنْبُورَ بَعْدَ الِاسْتِخْدَامِ.", japanese: "使用後は蛇口を閉めなさい。" },
        { speaker: "ナレーター", arabic: "الْمَاءُ نِعْمَةٌ كَبِيرَةٌ.", japanese: "水は大きな恵みです。" }
      ]
    },
    {
      id: 216, title: "ラクダ：砂漠の船", category: "記事", level: "中級",
      contentVoweled: "يَسْتَطِيعُ الْجَمَلُ الْمَشْيَ عَلَى الرِّمَالِ بِسُهُولَةٍ. لَدَيْهِ خُفٌّ عَرِيضٌ لَا يَغُوصُ فِي الرَّمْلِ. يُخَزِّنُ الدُّهُونَ فِي سَنَامِهِ. كَانَ الْعَرَبُ يُسَافِرُونَ عَلَيْهِ قَدِيمًا. إِنَّهُ رَمْزٌ لِلصَّبْرِ.",
      contentPlain: "يستطيع الجمل المشي على الرمال بسهولة. لديه خف عريض لا يغوص في الرمل. يخزن الدهون في سنامه. كان العرب يسافرون عليه قديما. إنه رمز للصبر.",
      vocabList: [
        { word: "جَمَل", meaning: "ラクダ" },
        { word: "صَبْر", meaning: "忍耐" },
        { word: "عَطَش", meaning: "渇き" }
      ],
      questions: [
        { id: 2161, type: "reading", text: "ラクダの別名は？", options: ["砂漠の王", "砂漠の船", "砂漠の車", "砂漠の鳥"], correctIndex: 1, explanation: "「سَفِينَة الصَّحْرَاء」です。" },
        { id: 2162, type: "reading", text: "ラクダは何に耐えられますか？", options: ["寒さだけ", "渇きと暑さ", "雨", "雪"], correctIndex: 1, explanation: "「الْعَطَش وَالْحَرّ」です。" },
        { id: 2163, type: "reading", text: "ラクダはどこに水を蓄えますか？", options: ["胃", "足", "こぶ", "耳"], correctIndex: 2, explanation: "「السَّنَام (こぶ)」に脂肪として蓄えます。" },
        { id: 2164, type: "vocabulary", text: "「رِمَال」の意味は？", options: ["水", "砂（複数）", "岩", "空"], correctIndex: 1, explanation: "砂のことです。" },
        { id: 2165, type: "grammar", text: "「歩くことができます」", options: ["يَسْتَطِيعُ الْمَشْيَ", "لَا يَسْتَطِيعُ", "مَشَى", "يَمْشِي"], correctIndex: 0, explanation: "「Yastaṭī'u (できる)」です。" },
        { id: 2166, type: "grammar", text: "「الْمَشْيَ（歩くこと）」の品詞は？", options: ["動詞", "形容詞", "マスダル（動名詞）", "粒子"], correctIndex: 2, explanation: "動詞「مَشَى（歩いた）」のマスダル（動名詞）です。" }
      ],
      sentences: [
        { speaker: "ナレーター", arabic: "يَسْتَطِيعُ الْجَمَلُ الْمَشْيَ عَلَى الرِّمَالِ بِسُهُولَةٍ.", japanese: "ラクダは砂の上を簡単に歩くことができます。" },
        { speaker: "ナレーター", arabic: "لَدَيْهِ خُفٌّ عَرِيضٌ لَا يَغُوصُ فِي الرَّمْلِ.", japanese: "砂に沈まない広い足裏を持っています。" },
        { speaker: "ナレーター", arabic: "يُخَزِّنُ الدُّهُونَ فِي سَنَامِهِ.", japanese: "こぶに脂肪を蓄えます。" },
        { speaker: "ナレーター", arabic: "كَانَ الْعَرَبُ يُسَافِرُونَ عَلَيْهِ قَدِيمًا.", japanese: "昔、アラブ人はそれに乗って旅をしました。" },
        { speaker: "ナレーター", arabic: "إِنَّهُ رَمْزٌ لِلصَّبْرِ.", japanese: "それは忍耐の象徴です。" }
      ]
    },
    {
      id: 217, title: "オリーブの木", category: "文化", level: "中級",
      contentVoweled: "تَنْمُو شَجَرَةُ الزَّيْتُونِ فِي حَوْضِ الْبَحْرِ الْمُتَوَسِّطِ. زَيْتُ الزَّيْتُونِ صِحِّيٌّ وَلَذِيذٌ. يُسْتَخْدَمُ فِي الطَّبْخِ وَالْعِلَاجِ. غُصْنُ الزَّيْتُونِ رَمْزٌ لِلسَّلَامِ. ذُكِرَتْ هَذِهِ الشَّجَرَةُ فِي الْقُرْآنِ.",
      contentPlain: "تنمو شجرة الزيتون في حوض البحر المتوسط. زيت الزيتون صحي ولذيذ. يستخدم في الطبخ والعلاج. غصن الزيتون رمز للسلام. ذكرت هذه الشجرة في القرآن.",
      vocabList: [
        { word: "زَيْت", meaning: "油/オイル" },
        { word: "شَجَرَة", meaning: "木" },
        { word: "سَلَام", meaning: "平和" }
      ],
      questions: [
        { id: 2171, type: "reading", text: "オリーブの木の特徴は？", options: ["すぐに枯れる", "祝福された/長生きする", "毒がある", "小さい"], correctIndex: 1, explanation: "「مُبَارَكَة (祝福された)」であり長生きです。" },
        { id: 2172, type: "reading", text: "何が採れますか？", options: ["水", "油（オイル）", "砂糖", "パン"], correctIndex: 1, explanation: "「زَيْت (油)」が採れます。" },
        { id: 2173, type: "reading", text: "オリーブの枝は何の象徴？", options: ["戦争", "平和", "富", "力"], correctIndex: 1, explanation: "「السَّلَام (平和)」の象徴です。" },
        { id: 2174, type: "vocabulary", text: "「صِحِّي」の意味は？", options: ["悪い", "健康的な", "病気の", "高い"], correctIndex: 1, explanation: "Healthyという意味です。" },
        { id: 2175, type: "grammar", text: "「たくさんの木」", options: ["أَشْجَارٌ كَثِيرَةٌ", "شَجَرَةٌ وَاحِدَةٌ", "أَشْجَارٌ قَلِيلَةٌ", "شَجَرٌ كَثِيرٌ"], correctIndex: 0, explanation: "Ashjār (複数) + Kathīrah (女性単数) です。" },
        { id: 2176, type: "grammar", text: "「ذُكِرَتْ（言及された）」の「t」は何？", options: ["私のこと", "女性形の標識", "過去形の一部", "複数形"], correctIndex: 1, explanation: "主語「الشَّجَرَةُ（木）」が女性名詞なので、動詞も女性形「ذُكِرَتْ」になっています。" }
      ],
      sentences: [
        { speaker: "ナレーター", arabic: "تَنْمُو شَجَرَةُ الزَّيْتُونِ فِي حَوْضِ الْبَحْرِ الْمُتَوَسِّطِ.", japanese: "オリーブの木は地中海沿岸で育ちます。" },
        { speaker: "ナレーター", arabic: "زَيْتُ الزَّيْتُونِ صِحِّيٌّ وَلَذِيذٌ.", japanese: "オリーブオイルは健康的で美味しいです。" },
        { speaker: "ナレーター", arabic: "يُسْتَخْدَمُ فِي الطَّبْخِ وَالْعِلَاجِ.", japanese: "料理や治療に使われます。" },
        { speaker: "ナレーター", arabic: "غُصْنُ الزَّيْتُونِ رَمْزٌ لِلسَّلَامِ.", japanese: "オリーブの枝は平和の象徴です。" },
        { speaker: "ナレーター", arabic: "ذُكِرَتْ هَذِهِ الشَّجَرَةُ فِي الْقُرْآنِ.", japanese: "この木はクルアーンの中で言及されています。" }
      ]
    },
    {
      id: 218, title: "ナイル川", category: "記事", level: "中級",
      contentVoweled: "مِصْرُ هِبَةُ النِّيلِ. يَجْرِي النَّهْرُ مِنْ الْجَنُوبِ إِلَى الشَّمَالِ. عَاشَ الْمِصْرِيُّونَ الْقُدَمَاءُ عَلَى ضِفَافِهِ. بَنَوْا حَضَارَةً عَظِيمَةً. إِنَّهُ مَصْدَرُ الْحَيَاةِ لِلْمَلَايِينِ.",
      contentPlain: "مصر هبة النيل. يجري النهر من الجنوب إلى الشمال. عاش المصريون القدماء على ضفافه. بنوا حضارة عظيمة. إنه مصدر الحياة للملايين.",
      vocabList: [
        { word: "نَهْر", meaning: "川" },
        { word: "زِرَاعَة", meaning: "農業" },
        { word: "مِصْر", meaning: "エジプト" }
      ],
      questions: [
        { id: 2181, type: "reading", text: "ナイル川の特徴は？", options: ["一番短い", "世界最長", "一番深い", "一番広い"], correctIndex: 1, explanation: "「أَطْوَل نَهْر (一番長い川)」です。" },
        { id: 2182, type: "reading", text: "どの国を通りますか？", options: ["エジプト", "日本", "フランス", "アメリカ"], correctIndex: 0, explanation: "「مِصْر (エジプト)」などです。" },
        { id: 2183, type: "reading", text: "人々にとってなぜ重要ですか？", options: ["泳ぐため", "農業と飲み水のため", "見るため", "壁を作るため"], correctIndex: 1, explanation: "「الزِّرَاعَة وَالشُّرْب」です。" },
        { id: 2184, type: "vocabulary", text: "「حَضَارَة」の意味は？", options: ["戦争", "文明", "砂漠", "動物"], correctIndex: 1, explanation: "Civilization（文明）です。" },
        { id: 2185, type: "grammar", text: "「流れます」", options: ["يَجْرِي", "يَقِفُ", "يَأْكُلُ", "يَنَامُ"], correctIndex: 0, explanation: "「Yajrī (走る/流れる)」です。" },
        { id: 2186, type: "grammar", text: "「بَنَوْا（彼らは建てた）」の原形は？", options: ["بَنَى (Banā)", "بَنِيَ (Baniya)", "بِنَاء (Binā')", "بَنُونَ (Banūna)"], correctIndex: 0, explanation: "原形「Banā（建てた）」の複数形です。語尾が母音で終わる動詞の複数形は不規則変化します。" }
      ],
      sentences: [
        { speaker: "ナレーター", arabic: "مِصْرُ هِبَةُ النِّيلِ.", japanese: "エジプトはナイルの賜物です。" },
        { speaker: "ナレーター", arabic: "يَجْرِي النَّهْرُ مِنْ الْجَنُوبِ إِلَى الشَّمَالِ.", japanese: "川は南から北へ流れます。" },
        { speaker: "ナレーター", arabic: "عَاشَ الْمِصْرِيُّونَ الْقُدَمَاءُ عَلَى ضِفَافِهِ.", japanese: "古代エジプト人はその岸辺に住んでいました。" },
        { speaker: "ナレーター", arabic: "بَنَوْا حَضَارَةً عَظِيمَةً.", japanese: "彼らは偉大な文明を築きました。" },
        { speaker: "ナレーター", arabic: "إِنَّهُ مَصْدَرُ الْحَيَاةِ لِلْمَلَايِينِ.", japanese: "それは何百万人もの人々の命の源です。" }
      ]
    },
    {
      id: 219, title: "砂漠の夜", category: "自然", level: "中級",
      contentVoweled: "عِنْدَمَا تَغِيبُ الشَّمْسُ، يَعُمُّ السُّكُونُ. السَّمَاءُ صَافِيَةٌ وَمَلِيئَةٌ بِالنُّجُومِ. يُحِبُّ الْبَدْوُ السَّهَرَ تَحْتَ ضَوْءِ الْقَمَرِ. يُشْعِلُونَ النَّارَ وَيَشْرَبُونَ الْقَهْوَةَ. إِنَّهُ مَنْظَرٌ سَاحِرٌ.",
      contentPlain: "عندما تغيب الشمس، يعم السكون. السماء صافية ومليئة بالنجوم. يحب البدو السهر تحت ضوء القمر. يشعلون النار ويشربون القهوة. إنه منظر ساحر.",
      vocabList: [
        { word: "لَيْل", meaning: "夜" },
        { word: "نُجُوم", meaning: "星々" },
        { word: "قَمَر", meaning: "月" }
      ],
      questions: [
        { id: 2191, type: "reading", text: "砂漠の夜はどうですか？", options: ["うるさい", "静かで美しい", "暑い", "明るい"], correctIndex: 1, explanation: "「هَادِئ وَجَمِيل」です。" },
        { id: 2192, type: "reading", text: "空には何が見えますか？", options: ["雲", "星", "飛行機", "太陽"], correctIndex: 1, explanation: "「النُّجُوم (星々)」です。" },
        { id: 2193, type: "reading", text: "気温はどうなりますか？", options: ["暑くなる", "変わらない", "寒くなる", "蒸し暑い"], correctIndex: 2, explanation: "「يَمِيلُ لِلْبُرُودَةِ (寒くなる傾向がある)」です。" },
        { id: 2194, type: "vocabulary", text: "「سَمَاء」の意味は？", options: ["海", "空", "地", "山"], correctIndex: 1, explanation: "空です。" },
        { id: 2195, type: "grammar", text: "「輝く」", options: ["تَلْمَعُ", "تَنَامُ", "تَأْكُلُ", "تَذْهَبُ"], correctIndex: 0, explanation: "「Talma'u」です。" },
        { id: 2196, type: "grammar", text: "「عِنْدَمَا（〜する時）」の品詞的な役割は？", options: ["時間のアドバーブ（副詞）", "場所のアドバーブ", "動詞", "名詞"], correctIndex: 0, explanation: "「時（Time）」を表す副詞的用法（Zarf Zamān）です。" }
      ],
      sentences: [
        { speaker: "ナレーター", arabic: "عِنْدَمَا تَغِيبُ الشَّمْسُ، يَعُمُّ السُّكُونُ.", japanese: "太陽が沈むと、静寂が広がります。" },
        { speaker: "ナレーター", arabic: "السَّمَاءُ صَافِيَةٌ وَمَلِيئَةٌ بِالنُّجُومِ.", japanese: "空は澄んでいて、星でいっぱいです。" },
        { speaker: "ナレーター", arabic: "يُحِبُّ الْبَدْوُ السَّهَرَ تَحْتَ ضَوْءِ الْقَمَرِ.", japanese: "ベドウィン（遊牧民）は月明かりの下で夜更かしするのが好きです。" },
        { speaker: "ナレーター", arabic: "يُشْعِلُونَ النَّارَ وَيَشْرَبُونَ الْقَهْوَةَ.", japanese: "彼らは火を焚き、コーヒーを飲みます。" },
        { speaker: "ナレーター", arabic: "إِنَّهُ مَنْظَرٌ سَاحِرٌ.", japanese: "それは魅惑的な光景です。" }
      ]
    },
    {
      id: 220, title: "ライオンとネズミ", category: "物語", level: "中級",
      contentVoweled: "كَانَ الْأَسَدُ نَائِمًا. لَعِبَ فَأْرٌ صَغِيرٌ فَوْقَ رَأْسِهِ. اسْتَيْقَظَ الْأَسَدُ غَاضِبًا. تَرَجَّاهُ الْفَأْرُ، فَتَرَكَهُ. لَاحِقًا، قَطَّعَ الْفَأْرُ الشَّبَكَةَ وَأَنْقَذَ الْأَسَدَ.",
      contentPlain: "كان الأسد نائما. لعب فأر صغير فوق رأسه. استيقظ الأسد غاضبا. ترجاه الفأر، فتركه. لاحقا، قطع الفأر الشبكة وأنقذ الأسد.",
      vocabList: [
        { word: "أَسَد", meaning: "ライオン" },
        { word: "فَأْر", meaning: "ネズミ" },
        { word: "سَاعَدَ", meaning: "助けた" }
      ],
      questions: [
        { id: 2201, type: "reading", text: "ライオンはどうしましたか？", options: ["ネズミを食べた", "ネズミを逃がした", "ネズミと遊んだ", "ネズミを無視した"], correctIndex: 1, explanation: "「أَطْلَقَ سَرَاحَهُ (彼を釈放した/逃がした)」です。" },
        { id: 2202, type: "reading", text: "後でライオンはどうなりましたか？", options: ["王になった", "網に捕まった", "病気になった", "眠った"], correctIndex: 1, explanation: "「وَقَعَ فِي شَبَكَةٍ (網に落ちた/捕まった)」です。" },
        { id: 2203, type: "reading", text: "誰がライオンを助けましたか？", options: ["猟師", "別のライオン", "ネズミ", "誰もいない"], correctIndex: 2, explanation: "「الْفَأْر (ネズミ)」です。" },
        { id: 2204, type: "vocabulary", text: "「شَبَكَة」の意味は？", options: ["家", "網/ネット", "穴", "箱"], correctIndex: 1, explanation: "網です。" },
        { id: 2205, type: "grammar", text: "「小さい」", options: ["صَغِير", "كَبِير", "طَوِيل", "قَصِير"], correctIndex: 0, explanation: "「Saghīr」です。" },
        { id: 2206, type: "grammar", text: "「كَانَ الْأَسَدُ نَائِمًا（ライオンは眠っていた）」で「眠っていた」が対格（〜an）なのは？", options: ["主語だから", "目的語だから", "カーナ（Kāna）の述語だから", "副詞だから"], correctIndex: 2, explanation: "「Kāna」の述語（Khabar Kāna）はマンスーブ（対格）になります。" }
      ],
      sentences: [
        { speaker: "ナレーター", arabic: "كَانَ الْأَسَدُ نَائِمًا.", japanese: "ライオンは眠っていました。" },
        { speaker: "ナレーター", arabic: "لَعِبَ فَأْرٌ صَغِيرٌ فَوْقَ رَأْسِهِ.", japanese: "小さなネズミが彼の頭の上で遊びました。" },
        { speaker: "ナレーター", arabic: "اسْتَيْقَظَ الْأَسَدُ غَاضِبًا.", japanese: "ライオンは怒って目を覚ましました。" },
        { speaker: "ナレーター", arabic: "تَرَجَّاهُ الْفَأْرُ، فَتَرَكَهُ.", japanese: "ネズミが懇願したので、彼は放してやりました。" },
        { speaker: "ナレーター", arabic: "لَاحِقًا، قَطَّعَ الْفَأْرُ الشَّبَكَةَ وَأَنْقَذَ الْأَسَدَ.", japanese: "その後、ネズミは網を食いちぎり、ライオンを救いました。" }
      ]
    },
    {
      id: 221, title: "アリとキリギリス", category: "物語", level: "中級",
      contentVoweled: "فِي الصَّيْفِ، كَانَتِ النَّمْلَةُ نَشِيطَةً. جَمَعَتِ الْحُبُوبَ لِلشِّتَاءِ. أَمَّا الْجُنْدُبُ فَكَانَ كَسُولًا. جَاءَ الشِّتَاءُ وَلَمْ يَجِدِ الْجُنْدُبُ طَعَامًا. تَعَلَّمَ دَرْسًا فِي أَهَمِّيَّةِ الْعَمَلِ.",
      contentPlain: "في الصيف، كانت النملة نشيطة. جمعت الحبوب للشتاء. أما الجندب فكان كسولا. جاء الشتاء ولم يجد الجندب طعاما. تعلم درسا في أهمية العمل.",
      vocabList: [
        { word: "نَمْلَة", meaning: "アリ" },
        { word: "شِتَاء", meaning: "冬" },
        { word: "عَمَل", meaning: "仕事" }
      ],
      questions: [
        { id: 2211, type: "reading", text: "アリは何をしていましたか？", options: ["遊んでいた", "寝ていた", "働いていた", "歌っていた"], correctIndex: 2, explanation: "「تَعْمَلُ (働く)」です。" },
        { id: 2212, type: "reading", text: "キリギリス（バッタ）は何をしていましたか？", options: ["働いていた", "遊んで歌っていた", "食べていた", "勉強していた"], correctIndex: 1, explanation: "「يَلْعَبُ وَيُغَنِّي (遊んで歌う)」です。" },
        { id: 2213, type: "reading", text: "冬になってどうなりましたか？", options: ["キリギリスは空腹になった", "アリが餓死した", "夏になった", "みんな死んだ"], correctIndex: 0, explanation: "「جَاعَ الْجُنْدُب (バッタは飢えた)」です。" },
        { id: 2214, type: "vocabulary", text: "「كَسُول」の意味は？", options: ["勤勉な", "怠け者の", "速い", "強い"], correctIndex: 1, explanation: "Lazy（怠け者）です。" },
        { id: 2215, type: "grammar", text: "「集めます」", options: ["تَجْمَعُ", "تَرْمِي", "تَأْكُلُ", "تَشْرَبُ"], correctIndex: 0, explanation: "「Tajma'u」です。" },
        { id: 2216, type: "grammar", text: "「أَمَّا... فَ...（〜に関しては、...）」の構文で、「Fa」の役割は？", options: ["否定", "原因", "話題の区切り（〜ならば/〜は）", "疑問"], correctIndex: 2, explanation: "「Ammā」で提起された話題に対するコメントを導くために、必ず「Fa」が置かれます。" }
      ],
      sentences: [
        { speaker: "ナレーター", arabic: "فِي الصَّيْفِ، كَانَتِ النَّمْلَةُ نَشِيطَةً.", japanese: "夏、アリは活発でした。" },
        { speaker: "ナレーター", arabic: "جَمَعَتِ الْحُبُوبَ لِلشِّتَاءِ.", japanese: "冬のために穀物を集めました。" },
        { speaker: "ナレーター", arabic: "أَمَّا الْجُنْدُبُ فَكَانَ كَسُولًا.", japanese: "一方、キリギリス（バッタ）は怠け者でした。" },
        { speaker: "ナレーター", arabic: "جَاءَ الشِّتَاءُ وَلَمْ يَجِدِ الْجُنْدُبُ طَعَامًا.", japanese: "冬が来て、キリギリスは食べ物を見つけられませんでした。" },
        { speaker: "ナレーター", arabic: "تَعَلَّمَ دَرْسًا فِي أَهَمِّيَّةِ الْعَمَلِ.", japanese: "彼は労働の重要性についての教訓を学びました。" }
      ]
    },
    {
      id: 222, title: "嘘をつく子供", category: "物語", level: "中級",
      contentVoweled: "أَرَادَ الرَّاعِي أَنْ يَمْزَحَ مَعَ أَهْلِ الْقَرْيَةِ. صَرَخَ: ذِئْبٌ! سَاعِدُونِي! جَاءَ النَّاسُ، فَضَحِكَ الْوَلَدُ. فِي الْمَرَّةِ الثَّالِثَةِ، جَاءَ الذِّئْبُ حَقًّا. صَرَخَ الْوَلَدُ، لَكِنْ لَمْ يَأْتِ أَحَدٌ.",
      contentPlain: "أراد الراعي أن يمزح مع أهل القرية. صرخ: ذئب! ساعدوني! جاء الناس، فضحك الولد. في المرة الثالثة، جاء الذئب حقا. صرخ الولد، لكن لم يأت أحد.",
      vocabList: [
        { word: "ذِئْب", meaning: "オオカミ" },
        { word: "كَذِب", meaning: "嘘" },
        { word: "صِدْق", meaning: "真実/正直" }
      ],
      questions: [
        { id: 2221, type: "reading", text: "少年は何と叫びましたか？", options: ["火事だ", "泥棒だ", "オオカミだ", "助けて"], correctIndex: 2, explanation: "「ذِئْب (オオカミ)」です。" },
        { id: 2222, type: "reading", text: "村人はどうしましたか？", options: ["無視した", "助けに来た", "笑った", "逃げた"], correctIndex: 1, explanation: "最初は「جَاءُوا لِلْمُسَاعَدَةِ (助けに来た)」です。" },
        { id: 2223, type: "reading", text: "本当にオオカミが来た時、どうなりましたか？", options: ["誰も来なかった", "みんな来た", "少年は戦った", "オオカミは逃げた"], correctIndex: 0, explanation: "「لَمْ يُصَدِّقْهُ أَحَدٌ (誰も彼を信じなかった)」です。" },
        { id: 2224, type: "vocabulary", text: "「غَنَم」の意味は？", options: ["牛", "羊", "馬", "犬"], correctIndex: 1, explanation: "羊（群れ）のことです。" },
        { id: 2225, type: "grammar", text: "「信じませんでした」", options: ["لَمْ يُصَدِّقْ", "صَدَّقَ", "كَذَبَ", "قَالَ"], correctIndex: 0, explanation: "「Lam yuṣaddiq」です。" },
        { id: 2226, type: "grammar", text: "「لَمْ يَأْتِ أَحَدٌ（誰も来なかった）」の「Ya'ti」が短い形なのは？", options: ["過去形だから", "短縮形（Majzum）だから", "女性形だから", "方言だから"], correctIndex: 1, explanation: "否定辞「Lam」の後は要求法（Majzum）になり、弱動詞「Atā」の最後の母音字が脱落します。" }
      ],
      sentences: [
        { speaker: "ナレーター", arabic: "أَرَادَ الرَّاعِي أَنْ يَمْزَحَ مَعَ أَهْلِ الْقَرْيَةِ.", japanese: "羊飼いは村の人々と冗談を言いたいと思いました。" },
        { speaker: "ナレーター", arabic: "صَرَخَ: ذِئْبٌ! سَاعِدُونِي!", japanese: "彼は叫びました。「オオカミだ！助けてくれ！」" },
        { speaker: "ナレーター", arabic: "جَاءَ النَّاسُ، فَضَحِكَ الْوَلَدُ.", japanese: "人々が来ると、少年は笑いました。" },
        { speaker: "ナレーター", arabic: "فِي الْمَرَّةِ الثَّالِثَةِ، جَاءَ الذِّئْبُ حَقًّا.", japanese: "3回目、本当にオオカミが来ました。" },
        { speaker: "ナレーター", arabic: "صَرَخَ الْوَلَدُ، لَكِنْ لَمْ يَأْتِ أَحَدٌ.", japanese: "少年は叫びましたが、誰も来ませんでした。" }
      ]
    },
    {
      id: 223, title: "アラブの格言", category: "文学", level: "中級",
      contentVoweled: "الْأَمْثَالُ تَعْكِسُ ثَقَافَةَ الشُّعُوبِ. الصَّبْرُ مِفْتَاحُ الْفَرَجِ. مَنْ جَدَّ وَجَدَ، وَمَنْ زَرَعَ حَصَدَ. الْعِلْمُ نُورٌ وَالْجَهْلُ ظَلَامٌ. يَدٌ وَاحِدَةٌ لَا تُصَفِّقُ.",
      contentPlain: "الأمثال تعكس ثقافة الشعوب. الصبر مفتاح الفرج. من جد وجد، ومن زرع حصد. العلم نور والجهل ظلام. يد واحدة لا تصفق.",
      vocabList: [
        { word: "صَبْر", meaning: "忍耐" },
        { word: "مِفْتَاح", meaning: "鍵" },
        { word: "فَرَج", meaning: "安らぎ/解決" }
      ],
      questions: [
        { id: 2231, type: "reading", text: "「忍耐は〇〇の鍵」", options: ["成功", "安らぎ/解決", "家", "富"], correctIndex: 1, explanation: "「الْفَرَج (解決/安らぎ)」です。" },
        { id: 2232, type: "reading", text: "「努力した者は〇〇」", options: ["見つける（報われる）", "失う", "疲れる", "泣く"], correctIndex: 0, explanation: "「وَجَدَ (見つけた＝報われた)」です。" },
        { id: 2233, type: "vocabulary", text: "「حِكْمَة」の意味は？", options: ["愚かさ", "知恵", "強さ", "速さ"], correctIndex: 1, explanation: "Wisdom（知恵）です。" },
        { id: 2234, type: "reading", text: "「知識は光」", options: ["الْعِلْمُ نُورٌ", "الْعِلْمُ ظَلَامٌ", "الْجَهْلُ نُورٌ", "الْمَالُ نُورٌ"], correctIndex: 0, explanation: "「Al-'ilmu nūr」です。" },
        { id: 2235, type: "grammar", text: "「〜した者は」", options: ["مَنْ", "مَا", "أَيْنَ", "كَيْفَ"], correctIndex: 0, explanation: "関係代名詞的な「Man (Whoever)」です。" },
        { id: 2236, type: "grammar", text: "「جَدَّ（努力した）」のような動詞を何と呼ぶ？", options: ["弱動詞", "倍化動詞（Muḍā'af）", "ハムザ付き動詞", "正しい動詞"], correctIndex: 1, explanation: "第2語根と第3語根が同じで、シャッダが付く動詞（Jaddaなど）は倍化動詞と呼ばれます。" }
      ],
      sentences: [
        { speaker: "ナレーター", arabic: "الْأَمْثَالُ تَعْكِسُ ثَقَافَةَ الشُّعُوبِ.", japanese: "ことわざは人々の文化を反映します。" },
        { speaker: "ナレーター", arabic: "الصَّبْرُ مِفْتَاحُ الْفَرَجِ.", japanese: "忍耐は解決（安らぎ）への鍵である。" },
        { speaker: "ナレーター", arabic: "مَنْ جَدَّ وَجَدَ، وَمَنْ زَرَعَ حَصَدَ.", japanese: "努力した者は見つけ（報われ）、種を蒔いた者は刈り取る。" },
        { speaker: "ナレーター", arabic: "الْعِلْمُ نُورٌ وَالْجَهْلُ ظَلَامٌ.", japanese: "知識は光であり、無知は闇である。" },
        { speaker: "ナレーター", arabic: "يَدٌ وَاحِدَةٌ لَا تُصَفِّقُ.", japanese: "片手では拍手できない（協力が必要）。" }
      ]
    },
    {
      id: 224, title: "読書の重要性", category: "記事", level: "中級",
      contentVoweled: "الْقِرَاءَةُ رِحْلَةٌ عَبْرَ الزَّمَنِ. تَفْتَحُ لَنَا أَبْوَابَ الْعِلْمِ. الْكِتَابُ هُوَ خَيْرُ جَلِيسٍ. يَجِبُ أَنْ نَقْرَأَ كُلَّ يَوْمٍ. أُمَّةٌ تَقْرَأُ، أُمَّةٌ تَرْقَى.",
      contentPlain: "القراءة رحلة عبر الزمن. تفتح لنا أبواب العلم. الكتاب هو خير جليس. يجب أن نقرأ كل يوم. أمة تقرأ، أمة ترقى.",
      vocabList: [
        { word: "قِرَاءَة", meaning: "読書" },
        { word: "عَقْل", meaning: "理性/頭脳" },
        { word: "كِتَاب", meaning: "本" }
      ],
      questions: [
        { id: 2241, type: "reading", text: "読書は何を養いますか？", options: ["体", "頭脳（理性）", "筋肉", "胃"], correctIndex: 1, explanation: "「الْعَقْل (理性/頭脳)」です。" },
        { id: 2242, type: "reading", text: "読書は何を増やしますか？", options: ["お金", "知識", "友達", "敵"], correctIndex: 1, explanation: "「الْمَعْرِفَة (知識)」です。" },
        { id: 2243, type: "reading", text: "本は何に例えられますか？", options: ["最高の友", "重い荷物", "高価なもの", "敵"], correctIndex: 0, explanation: "「خَيْرُ جَلِيسٍ (最高の座り相手＝友)」と言われます。" },
        { id: 2244, type: "vocabulary", text: "「مَكْتَبَة」の意味は？", options: ["学校", "図書館/本屋", "台所", "庭"], correctIndex: 1, explanation: "Library/Bookstoreです。" },
        { id: 2245, type: "grammar", text: "「増やします」", options: ["تَزِيدُ", "تَنْقُصُ", "تَذْهَبُ", "تَأْتِي"], correctIndex: 0, explanation: "「Tazīdu」です。" },
        { id: 2246, type: "grammar", text: "「خَيْرُ جَلِيسٍ（最良の友）」の構文は？", options: ["イダーファ（所有格構文）", "形容詞修飾", "主語と述語", "前置詞句"], correctIndex: 0, explanation: "「最高の〜（〜の中で最良のもの）」という表現で、イダーファ構造を使っています。" }
      ],
      sentences: [
        { speaker: "ナレーター", arabic: "الْقِرَاءَةُ رِحْلَةٌ عَبْرَ الزَّمَنِ.", japanese: "読書は時を超えた旅です。" },
        { speaker: "ナレーター", arabic: "تَفْتَحُ لَنَا أَبْوَابَ الْعِلْمِ.", japanese: "それは私たちに知識の扉を開きます。" },
        { speaker: "ナレーター", arabic: "الْكِتَابُ هُوَ خَيْرُ جَلِيسٍ.", japanese: "本は最高の友人です。" },
        { speaker: "ナレーター", arabic: "يَجِبُ أَنْ نَقْرَأَ كُلَّ يَوْمٍ.", japanese: "私たちは毎日読むべきです。" },
        { speaker: "ナレーター", arabic: "أُمَّةٌ تَقْرَأُ، أُمَّةٌ تَرْقَى.", japanese: "読む民は、向上する民です。" }
      ]
    },
    {
      id: 225, title: "アラビア語の日", category: "ニュース", level: "中級",
      contentVoweled: "تَحْتَفِلُ الْأُمَمُ الْمُتَّحِدَةُ بِاللُّغَةِ الْعَرَبِيَّةِ. إِنَّهَا إِحْدَى اللُّغَاتِ الرَّسْمِيَّةِ السِّتِّ. يَتَحَدَّثُ بِهَا أَكْثَرُ مِنْ 400 مِلْيُونِ شَخْصٍ. هِيَ لُغَةٌ غَنِيَّةٌ وَعَرِيقَةٌ. نَحْنُ نَفْتَخِرُ بِلُغَتِنَا.",
      contentPlain: "تحتفل الأمم المتحدة باللغة العربية. إنها إحدى اللغات الرسمية الست. يتحدث بها أكثر من 400 مليون شخص. هي لغة غنية وعريقة. نحن نفتخر بلغتنا.",
      vocabList: [
        { word: "يَوْم", meaning: "日" },
        { word: "لُغَة", meaning: "言語" },
        { word: "اِحْتِفَال", meaning: "お祝い" }
      ],
      questions: [
        { id: 2251, type: "reading", text: "世界アラビア語デーはいつ？", options: ["1月1日", "12月18日", "9月23日", "5月5日"], correctIndex: 1, explanation: "「18 دِيسَمْبَر」です。" },
        { id: 2252, type: "reading", text: "アラビア語は誰の言語ですか？", options: ["国連", "クルアーン", "科学だけ", "ヨーロッパ"], correctIndex: 1, explanation: "「لُغَةُ الْقُرْآنِ」です。" },
        { id: 2253, type: "reading", text: "話者は世界にどれくらいいますか？", options: ["数人", "数億人", "100人", "いない"], correctIndex: 1, explanation: "「الْمَلَايِين (数百万以上＝実際は数億)」です。" },
        { id: 2254, type: "vocabulary", text: "「رَسْمِيّ」の意味は？", options: ["公式の", "私的な", "遊びの", "偽の"], correctIndex: 0, explanation: "Official（公式）です。" },
        { id: 2255, type: "grammar", text: "「話します」", options: ["يَتَحَدَّثُ", "يَكْتُبُ", "يَسْمَعُ", "يَمْشِي"], correctIndex: 0, explanation: "「Yataḥaddathu」です。" },
        { id: 2256, type: "grammar", text: "「〜を誇りに思う」の前置詞は？", options: ["نَفْتَخِرُ بِـ (bi)", "نَفْتَخِرُ لِـ (li)", "نَفْتَخِرُ عَلَى (ala)", "نَفْتَخِرُ فِي (fi)"], correctIndex: 0, explanation: "「Iftakhara bi-」で「〜を誇る」という熟語になります。" }
      ],
      sentences: [
        { speaker: "ナレーター", arabic: "تَحْتَفِلُ الْأُمَمُ الْمُتَّحِدَةُ بِاللُّغَةِ الْعَرَبِيَّةِ.", japanese: "国連はアラビア語を祝います。" },
        { speaker: "ナレーター", arabic: "إِنَّهَا إِحْدَى اللُّغَاتِ الرَّسْمِيَّةِ السِّتِّ.", japanese: "それは6つの公用語の一つです。" },
        { speaker: "ナレーター", arabic: "يَتَحَدَّثُ بِهَا أَكْثَرُ مِنْ 400 مِلْيُونِ شَخْصٍ.", japanese: "4億人以上の人々が話しています。" },
        { speaker: "ナレーター", arabic: "هِيَ لُغَةٌ غَنِيَّةٌ وَعَرِيقَةٌ.", japanese: "それは豊かで由緒ある言語です。" },
        { speaker: "ナレーター", arabic: "نَحْنُ نَفْتَخِرُ بِلُغَتِنَا.", japanese: "私たちは自分たちの言語を誇りに思います。" }
      ]
    },
    {
      id: 226, title: "スマートシティ", category: "ニュース", level: "中級",
      contentVoweled: "تَقَعُ نِيُوم شَمَالَ غَرْبِ الْمَمْلَكَةِ. سَتَكُونُ مَدِينَةً ذَكِيَّةً بِالْكَامِلِ. تَعْتَمِدُ عَلَى الطَّاقَةِ النَّظِيفَةِ. لَا تُوجَدُ فِيهَا سَيَّارَاتٌ تَقْلِيدِيَّةٌ. إِنَّهَا مَشْرُوعٌ طَمُوحٌ جِدًّا.",
      contentPlain: "تقع نيوم شمال غرب المملكة. ستكون مدينة ذكية بالكامل. تعتمد على الطاقة النظيفة. لا توجد فيها سيارات تقليدية. إنها مشروع طموح جدا.",
      vocabList: [
        { word: "مَدِينَة", meaning: "都市" },
        { word: "مُسْتَقْبَل", meaning: "未来" },
        { word: "تِكْنُولُوجِيَا", meaning: "技術" }
      ],
      questions: [
        { id: 2261, type: "reading", text: "NEOMとは何ですか？", options: ["古い村", "未来の都市", "海", "山"], correctIndex: 1, explanation: "「مَدِينَةُ الْمُسْتَقْبَلِ」です。" },
        { id: 2262, type: "reading", text: "どこにありますか？", options: ["日本", "サウジアラビア", "アメリカ", "エジプト"], correctIndex: 1, explanation: "「فِي السُّعُودِيَّةِ」です。" },
        { id: 2263, type: "reading", text: "何に依存しますか？", options: ["石油", "再生可能エネルギー", "石炭", "ガス"], correctIndex: 1, explanation: "「الطَّاقَة الْمُتَجَدِّدَة」です。" },
        { id: 2264, type: "vocabulary", text: "「ذَكِيّ」の意味は？", options: ["愚かな", "スマート/賢い", "古い", "遅い"], correctIndex: 1, explanation: "Smart/Intelligentです。" },
        { id: 2265, type: "grammar", text: "「使います」", options: ["تَسْتَخْدِمُ", "تَأْكُلُ", "تَنَامُ", "تَلْعَبُ"], correctIndex: 0, explanation: "「Tastakhdimu」です。" },
        { id: 2266, type: "grammar", text: "「سَتَكُونُ（〜になるだろう）」の「Sa」の意味は？", options: ["過去", "現在", "未来", "否定"], correctIndex: 2, explanation: "動詞の頭につく「Sa」は未来を表す接頭辞です。" }
      ],
      sentences: [
        { speaker: "ナレーター", arabic: "تَقَعُ نِيُوم شَمَالَ غَرْبِ الْمَمْلَكَةِ.", japanese: "NEOMは王国の北西に位置します。" },
        { speaker: "ナレーター", arabic: "سَتَكُونُ مَدِينَةً ذَكِيَّةً بِالْكَامِلِ.", japanese: "完全にスマートな都市になるでしょう。" },
        { speaker: "ナレーター", arabic: "تَعْتَمِدُ عَلَى الطَّاقَةِ النَّظِيفَةِ.", japanese: "クリーンエネルギーに依存します。" },
        { speaker: "ナレーター", arabic: "لَا تُوجَدُ فِيهَا سَيَّارَاتٌ تَقْلِيدِيَّةٌ.", japanese: "そこには従来の車はありません。" },
        { speaker: "ナレーター", arabic: "إِنَّهَا مَشْرُوعٌ طَمُوحٌ جِدًّا.", japanese: "それは非常に野心的なプロジェクトです。" }
      ]
    },
    {
      id: 227, title: "SNSの影響", category: "記事", level: "中級",
      contentVoweled: "أَصْبَحَ الْعَالَمُ قَرْيَةً صَغِيرَةً. نَسْتَطِيعُ مَعْرِفَةَ الْأَخْبَارِ فَوْرًا. نُشَارِكُ الصُّوَرَ وَالْأَفْكَارَ. وَلَكِنْ يَجِبُ الْحَذَرُ مِنَ الْشَّائِعَاتِ. لَا تُصَدِّقْ كُلَّ مَا تَقْرَأُ.",
      contentPlain: "أصبح العالم قرية صغيرة. نستطيع معرفة الأخبار فورا. نشارك الصور والأفكار. ولكن يجب الحذر من الشائعات. لا تصدق كل ما تقرأ.",
      vocabList: [
        { word: "تَوَاصُل", meaning: "通信/交流" },
        { word: "خَبَر", meaning: "ニュース" },
        { word: "عَالَم", meaning: "世界" }
      ],
      questions: [
        { id: 2271, type: "reading", text: "SNSは何をしますか？", options: ["遠くを近づける", "人を離す", "お金を配る", "食べ物を作る"], correctIndex: 0, explanation: "「تُقَرِّبُ الْبَعِيدَ」です。" },
        { id: 2272, type: "reading", text: "ニュースはどう広がりますか？", options: ["ゆっくり", "非常に速く", "止まる", "消える"], correctIndex: 1, explanation: "「بِسُرْعَةٍ فَائِقَةٍ (超高速で)」です。" },
        { id: 2273, type: "reading", text: "注意すべきことは？", options: ["たくさん使う", "偽ニュース（フェイクニュース）", "新しい携帯", "写真を撮る"], correctIndex: 1, explanation: "「الْأَخْبَارِ الْكَاذِبَةِ (嘘のニュース)」です。" },
        { id: 2274, type: "vocabulary", text: "「صُورَة」の意味は？", options: ["音", "写真/像", "文字", "本"], correctIndex: 1, explanation: "Picture/Imageです。" },
        { id: 2275, type: "grammar", text: "「広がります」", options: ["تَنْتَشِرُ", "تَجْلِسُ", "تَأْكُلُ", "تَنَامُ"], correctIndex: 0, explanation: "「Tantashiru」です。" },
        { id: 2276, type: "grammar", text: "「لَا تُصَدِّقْ（信じるな）」の動詞がスクーン（無母音）で終わる理由は？", options: ["禁止のLaだから", "否定のLaだから", "過去形だから", "命令形だから"], correctIndex: 0, explanation: "「〜するな」という禁止の「Lā」の後では、動詞は要求法（Majzum）になり、語末がスクーンになります。" }
      ],
      sentences: [
        { speaker: "ナレーター", arabic: "أَصْبَحَ الْعَالَمُ قَرْيَةً صَغِيرَةً.", japanese: "世界は小さな村になりました。" },
        { speaker: "ナレーター", arabic: "نَسْتَطِيعُ مَعْرِفَةَ الْأَخْبَارِ فَوْرًا.", japanese: "私たちはすぐにニュースを知ることができます。" },
        { speaker: "ナレーター", arabic: "نُشَارِكُ الصُّوَرَ وَالْأَفْكَارَ.", japanese: "写真や考えを共有します。" },
        { speaker: "ナレーター", arabic: "وَلَكِنْ يَجِبُ الْحَذَرُ مِنَ الْشَّائِعَاتِ.", japanese: "しかし、噂には注意しなければなりません。" },
        { speaker: "ナレーター", arabic: "لَا تُصَدِّقْ كُلَّ مَا تَقْرَأُ.", japanese: "読むものすべてを信じてはいけません。" }
      ]
    },
    {
      id: 228, title: "スポーツの重要性", category: "健康", level: "中級",
      contentVoweled: "الْحَرَكَةُ بَرَكَةٌ. الْمَشْيُ رِيَاضَةٌ سَهْلَةٌ وَمُفِيدَةٌ. تُسَاعِدُ الرِّيَاضَةُ فِي إِنْقَاصِ الْوَزْنِ. تَحْمِي مِنَ الْأَمْرَاضِ. اِجْعَلِ الرِّيَاضَةَ جُزْءًا مِنْ يَوْمِكَ.",
      contentPlain: "الحركة بركة. المشي رياضة سهلة ومفيدة. تساعد الرياضة في إنقاص الوزن. تحمي من الأمراض. اجعل الرياضة جزءا من يومك.",
      vocabList: [
        { word: "رِيَاضَة", meaning: "スポーツ" },
        { word: "جِسْم", meaning: "体" },
        { word: "نَشَاط", meaning: "活動/活力" }
      ],
      questions: [
        { id: 2281, type: "reading", text: "スポーツは何を強くしますか？", options: ["服", "体", "家", "車"], correctIndex: 1, explanation: "「الْجِسْم (体)」です。" },
        { id: 2282, type: "reading", text: "精神的にはどうですか？", options: ["悪くなる", "気分を良くする", "眠くなる", "怒る"], correctIndex: 1, explanation: "「تُحَسِّنُ النَّفْسِيَّةَ (気分/精神を良くする)」です。" },
        { id: 2283, type: "reading", text: "どれくらい運動すべきですか？", options: ["毎日少しずつ", "年に一回", "一日中", "しないほうがいい"], correctIndex: 0, explanation: "「نِصْف سَاعَة يَوْمِيًّا (毎日30分)」が推奨されています。" },
        { id: 2284, type: "vocabulary", text: "「مَشْي」の意味は？", options: ["走り", "歩き/ウォーキング", "水泳", "ジャンプ"], correctIndex: 1, explanation: "Walkingです。" },
        { id: 2285, type: "grammar", text: "「守ります」", options: ["تَحْمِي", "تَهْدِمُ", "تَنْسَى", "تَأْكُلُ"], correctIndex: 0, explanation: "「Taḥmī (Protect)」です。" },
        { id: 2286, type: "grammar", text: "「اِجْعَلِ（〜にせよ）」という命令形がカスラ（i）で終わっている理由は？", options: ["間違い", "後ろの単語が定冠詞付きだから", "女性形だから", "弱動詞だから"], correctIndex: 1, explanation: "本来はスクーン（無母音）ですが、次に来る「الرِّيَاضَةَ」も無母音で始まるため、発音の便宜上カスラ（i）をつけてつなげます。" }
      ],
      sentences: [
        { speaker: "ナレーター", arabic: "الْحَرَكَةُ بَرَكَةٌ.", japanese: "運動（動き）は祝福です。" },
        { speaker: "ナレーター", arabic: "الْمَشْيُ رِيَاضَةٌ سَهْلَةٌ وَمُفِيدَةٌ.", japanese: "ウォーキングは簡単で有益なスポーツです。" },
        { speaker: "ナレーター", arabic: "تُسَاعِدُ الرِّيَاضَةُ فِي إِنْقَاصِ الْوَزْنِ.", japanese: "スポーツは体重を減らすのに役立ちます。" },
        { speaker: "ナレーター", arabic: "تَحْمِي مِنَ الْأَمْرَاضِ.", japanese: "病気から守ります。" },
        { speaker: "ナレーター", arabic: "اِجْعَلِ الرِّيَاضَةَ جُزْءًا مِنْ يَوْمِكَ.", japanese: "スポーツを1日の一部にしなさい。" }
      ]
    },
    {
      id: 229, title: "交通ルール", category: "社会", level: "中級",
      contentVoweled: "اِرْبِطْ حِزَامَ الْأَمَانِ دَائِمًا. لَا تَتَجَاوَزِ السُّرْعَةَ الْمُحَدَّدَةَ. اِحْتَرِمْ إِشَارَةَ الْمُرُورِ. لَا تَسْتَخْدِمِ الْجَوَّالَ أَثْنَاءَ الْقِيَادَةِ. الْقِيَادَةُ فَنٌّ وَذَوْقٌ وَأَخْلَاقٌ.",
      contentPlain: "اربط حزام الأمان دائما. لا تتجاوز السرعة المحددة. احترم إشارة المرور. لا تستخدم الجوال أثناء القيادة. القيادة فن وذوق وأخلاق.",
      vocabList: [
        { word: "مُرُور", meaning: "交通" },
        { word: "إِشَارَة", meaning: "信号" },
        { word: "حِزَام", meaning: "ベルト" }
      ],
      questions: [
        { id: 2291, type: "reading", text: "交通ルールを守るとどうなりますか？", options: ["事故が増える", "命を守る", "遅れる", "お金がかかる"], correctIndex: 1, explanation: "「يَحْمِي الْأَرْوَاحَ (命を守る)」です。" },
        { id: 2292, type: "reading", text: "赤信号ではどうしますか？", options: ["進む", "止まる", "走る", "曲がる"], correctIndex: 1, explanation: "「تَوَقَّفْ (止まれ)」です。" },
        { id: 2293, type: "reading", text: "運転中に何をしてはいけませんか？", options: ["話す", "スマホを使う", "水を見る", "歌う"], correctIndex: 1, explanation: "「اِسْتِخْدَام الْهَاتِف (電話の使用)」です。" },
        { id: 2294, type: "vocabulary", text: "「سُرْعَة」の意味は？", options: ["遅さ", "スピード/速さ", "高さ", "重さ"], correctIndex: 1, explanation: "スピードです。" },
        { id: 2295, type: "grammar", text: "「締めてください」", options: ["اِرْبِطْ", "اِفْتَحْ", "اِكْسِرْ", "اِمْشِ"], correctIndex: 0, explanation: "「Irbiṭ (結べ/締めろ)」です。" },
        { id: 2296, type: "grammar", text: "「لَا تَتَجَاوَزِ（超えるな）」の動詞末尾が「i」なのは？", options: ["女性への命令だから", "定冠詞との音の連結", "属格だから", "間違い"], correctIndex: 1, explanation: "禁止の「Lā」によりスクーンになるところですが、次の単語「السُّرْعَةَ」との連結（Waṣl）のため、カスラ（i）でつなげて発音します。" }
      ],
      sentences: [
        { speaker: "ナレーター", arabic: "اِرْبِطْ حِزَامَ الْأَمَانِ دَائِمًا.", japanese: "いつもシートベルトを締めなさい。" },
        { speaker: "ナレーター", arabic: "لَا تَتَجَاوَزِ السُّرْعَةَ الْمُحَدَّدَةَ.", japanese: "制限速度を超えてはいけません。" },
        { speaker: "ナレーター", arabic: "اِحْتَرِمْ إِشَارَةَ الْمُرُورِ.", japanese: "交通信号を尊重しなさい。" },
        { speaker: "ナレーター", arabic: "لَا تَسْتَخْدِمِ الْجَوَّالَ أَثْنَاءَ الْقِيَادَةِ.", japanese: "運転中に携帯を使ってはいけません。" },
        { speaker: "ナレーター", arabic: "الْقِيَادَةُ فَنٌّ وَذَوْقٌ وَأَخْلَاقٌ.", japanese: "運転は技術であり、センスであり、道徳です。" }
      ]
    },
    {
      id: 230, title: "鷹狩り", category: "文化", level: "中級",
      contentVoweled: "الصَّيْدُ بِالصُّقُورِ جُزْءٌ مِنَ التُّرَاثِ الْعَرَبِيِّ. يُدَرِّبُ الصَّيَّادُ الصَّقْرَ بِعِنَايَةٍ. يَتَمَيَّزُ الصَّقْرُ بِبَصَرٍ حَادٍّ. إِنَّهُ رَمْزٌ لِلْقُوَّةِ وَالْحُرِّيَّةِ. تُقَامُ مَهْرَجَانَاتٌ خَاصَّةٌ لِلصُّقُورِ.",
      contentPlain: "الصيد بالصقور جزء من التراث العربي. يدرب الصياد الصقر بعناية. يتميز الصقر ببصر حاد. إنه رمز للقوة والحرية. تقام مهرجانات خاصة للصقور.",
      vocabList: [
        { word: "صَقْر", meaning: "鷹（タカ/ハヤブサ）" },
        { word: "صَيْد", meaning: "狩り" },
        { word: "تُرَاث", meaning: "遺産/伝統" }
      ],
      questions: [
        { id: 2301, type: "reading", text: "鷹狩りとは何ですか？", options: ["新しい遊び", "伝統的なスポーツ", "仕事", "危険な戦い"], correctIndex: 1, explanation: "「رِيَاضَة تَقْلِيدِيَّة (伝統的なスポーツ)」です。" },
        { id: 2302, type: "reading", text: "誰にとって重要ですか？", options: ["ヨーロッパ人", "アラブ人", "アジア人", "アメリカ人"], correctIndex: 1, explanation: "「عِنْدَ الْعَرَبِ (アラブ人の間で)」です。" },
        { id: 2303, type: "reading", text: "鷹の特徴は？", options: ["遅い", "弱い", "鋭い視力と速さ", "泳げる"], correctIndex: 2, explanation: "「بَصَرٍ حَادٍّ وَسُرْعَةٍ (鋭い視力と速さ)」です。" },
        { id: 2304, type: "vocabulary", text: "「رَمْز」の意味は？", options: ["敵", "シンボル/象徴", "道具", "餌"], correctIndex: 1, explanation: "Symbol（象徴）です。" },
        { id: 2305, type: "grammar", text: "「訓練します」", options: ["يُدَرِّبُ", "يَلْعَبُ", "يَأْكُلُ", "يَنَامُ"], correctIndex: 0, explanation: "「Yudarribu (Train)」です。" },
        { id: 2306, type: "grammar", text: "「تُقَامُ（開催される）」の能動態は？", options: ["أَقَامَ (Aqāma)", "قَامَ (Qāma)", "قَوَّمَ (Qawwama)", "قَيَّمَ (Qayyama)"], correctIndex: 0, explanation: "「行う/開催する」は第4形「Aqāma」で、その受動態が「Tuqāmu」です。" }
      ],
      sentences: [
        { speaker: "ナレーター", arabic: "الصَّيْدُ بِالصُّقُورِ جُزْءٌ مِنَ التُّرَاثِ الْعَرَبِيِّ.", japanese: "鷹狩りはアラブの遺産の一部です。" },
        { speaker: "ナレーター", arabic: "يُدَرِّبُ الصَّيَّادُ الصَّقْرَ بِعِنَايَةٍ.", japanese: "猟師は鷹を注意深く訓練します。" },
        { speaker: "ナレーター", arabic: "يَتَمَيَّزُ الصَّقْرُ بِبَصَرٍ حَادٍّ.", japanese: "鷹は鋭い視力が特徴です。" },
        { speaker: "ナレーター", arabic: "إِنَّهُ رَمْزٌ لِلْقُوَّةِ وَالْحُرِّيَّةِ.", japanese: "それは力と自由の象徴です。" },
        { speaker: "ナレーター", arabic: "تُقَامُ مَهْرَجَانَاتٌ خَاصَّةٌ لِلصُّقُورِ.", japanese: "鷹のための特別なフェスティバルが開催されます。" }
      ]
    },
    {
      id: 231,
      title: "アラビア馬",
      category: "文化",
      level: "中級",
      // sentencesを結合して全文を作成
      contentVoweled: "يُعْرَفُ الْحِصَانُ الْعَرَبِيُّ بِجَمَالِهِ. لَهُ رَأْسٌ صَغِيرٌ وَعَيْنَانِ كَبِيرَتَانِ. إِنَّهُ حَيَوَانٌ ذَكِيٌّ وَوَفِيٌّ لِصَاحِبِهِ. يُشَارِكُ فِي سِبَاقَاتِ السُّرْعَةِ وَالْقُدْرَةِ. الْعَرَبُ يُحِبُّونَ الْخَيْلَ كَثِيرًا.",
      contentPlain: "يعرف الحصان العربي بجماله. له رأس صغير وعينان كبيرتان. إنه حيوان ذكي ووفي لصاحبه. يشارك في سباقات السرعة والقدرة. العرب يحبون الخيل كثيرا.",
      vocabList: [
        { word: "حِصَان", meaning: "馬" },
        { word: "سَبَاق", meaning: "レース" },
        { word: "أَصِيل", meaning: "純血の/本物の" },
        { word: "قُدْرَة", meaning: "能力/耐久力" }, // 追加
        { word: "وَفِيّ", meaning: "忠実な" } // 追加
      ],
      questions: [
        { id: 2311, type: "reading", text: "アラビア馬の特徴は？", options: ["重い", "世界で最も美しいものの一つ", "遅い", "弱い"], correctIndex: 1, explanation: "「مِنْ أَجْمَلِ الْخُيُولِ」や「يُعْرَفُ بِجَمَالِهِ」から分かります。" },
        { id: 2312, type: "reading", text: "何に使われますか？", options: ["農業", "レースとショー", "荷運び", "食用"], correctIndex: 1, explanation: "「السِّبَاقَات (レース)」や美容コンテストです。" },
        { id: 2313, type: "reading", text: "その性格は？", options: ["凶暴", "賢くて忠実", "臆病", "怠け者"], correctIndex: 1, explanation: "「ذَكِيٌّ وَوَفِيٌّ (賢くて忠実)」です。" },
        { id: 2314, type: "vocabulary", text: "「قُوَّة」の意味は？", options: ["弱さ", "力/強さ", "速さ", "色"], correctIndex: 1, explanation: "Power/Strengthです。" },
        { id: 2315, type: "grammar", text: "「走ります」", options: ["يَجْرِي", "يَطِيرُ", "يَسْبَحُ", "يَزْحَفُ"], correctIndex: 0, explanation: "「Yajrī」です。" },
        // 追加：やや難しい文法問題
        { id: 2316, type: "grammar", text: "「عَيْنَانِ كَبِيرَتَانِ」が「ān (ان)」で終わっている理由は？", options: ["複数形だから", "双数形（2つ）だから", "所有格だから", "女性形だから"], correctIndex: 1, explanation: "目は2つあるため、双数形（Dual）のアリフとヌーンが使われています。" },
        { id: 2317, type: "grammar", text: "「يُحِبُّونَ」の動詞の種類は？", options: ["過去形", "命令形", "五つの動詞（現在形・複数）", "受動態"], correctIndex: 2, explanation: "「ūna」で終わる現在形は「五つの動詞（Al-Af'al Al-Khamsa）」と呼ばれます。" }
      ],
      sentences: [
        { speaker: "ナレーター", arabic: "يُعْرَفُ الْحِصَانُ الْعَرَبِيُّ بِجَمَالِهِ.", japanese: "アラビア馬はその美しさで知られています。" },
        { speaker: "ナレーター", arabic: "لَهُ رَأْسٌ صَغِيرٌ وَعَيْنَانِ كَبِيرَتَانِ.", japanese: "（それには）小さな頭と大きな二つの目があります。" },
        { speaker: "ナレーター", arabic: "إِنَّهُ حَيَوَانٌ ذَكِيٌّ وَوَفِيٌّ لِصَاحِبِهِ.", japanese: "それは賢く、飼い主に忠実な動物です。" },
        { speaker: "ナレーター", arabic: "يُشَارِكُ فِي سِبَاقَاتِ السُّرْعَةِ وَالْقُدْرَةِ.", japanese: "スピードや耐久力のレースに参加します。" },
        { speaker: "ナレーター", arabic: "الْعَرَبُ يُحِبُّونَ الْخَيْلَ كَثِيرًا.", japanese: "アラブ人は馬をとても愛しています。" }
      ]
    },
    {
      id: 232,
      title: "真珠採り",
      category: "歴史",
      level: "中級",
      contentVoweled: "قَبْلَ النِّفْطِ، كَانَ اللُّؤْلُؤُ مَصْدَرَ الرِّزْقِ. يَغُوصُ الرِّجَالُ إِلَى أَعْمَاقِ الْبَحْرِ. يَبْحَثُونَ عَنِ الْمَحَّارِ لِاسْتِخْرَاجِ اللُّؤْلُؤِ. كَانَتْ رِحْلَةُ الْغَوْصِ تَسْتَمِرُّ شُهُورًا. إِنَّهَا جُزْءٌ مُهِمٌّ مِنْ تَارِيخِ الْخَلِيجِ.",
      contentPlain: "قبل النفط، كان اللؤلؤ مصدر الرزق. يغوص الرجال إلى أعماق البحر. يبحثون عن المحار لاستخراج اللؤلؤ. كانت رحلة الغوص تستمر شهورا. إنها جزء مهم من تاريخ الخليج.",
      vocabList: [
        { word: "لُؤْلُؤ", meaning: "真珠" },
        { word: "بَحْر", meaning: "海" },
        { word: "غَوْص", meaning: "ダイビング" },
        { word: "مَحَّار", meaning: "カキ（貝）" }, // 追加
        { word: "شَاقّ", meaning: "過酷な" } // 追加
      ],
      questions: [
        { id: 2321, type: "reading", text: "湾岸諸国の昔の仕事は？", options: ["農業", "真珠採り", "工場", "観光"], correctIndex: 1, explanation: "「الْغَوْص عَلَى اللُّؤْلُؤِ」です。" },
        { id: 2322, type: "reading", text: "その仕事はどうでしたか？", options: ["簡単", "安全", "困難で危険", "退屈"], correctIndex: 2, explanation: "文脈上、深く潜る過酷な仕事でした。" },
        { id: 2323, type: "reading", text: "彼らはどこへ行きましたか？", options: ["山の奥", "海の底", "砂漠", "空"], correctIndex: 1, explanation: "「أَعْمَاقِ الْبَحْرِ (海の深み)」です。" },
        { id: 2324, type: "vocabulary", text: "「تِجَارَة」の意味は？", options: ["遊び", "貿易/商売", "勉強", "祈り"], correctIndex: 1, explanation: "Trade/Businessです。" },
        { id: 2325, type: "grammar", text: "「潜ります」", options: ["يَغُوصُ", "يَعُومُ", "يَغْرَقُ", "يَشْرَبُ"], correctIndex: 0, explanation: "「Yaghūṣu (Dive)」です。" },
        // 追加：やや難しい文法問題
        { id: 2326, type: "grammar", text: "「لِاسْتِخْرَاجِ」の「Li-」の機能は？", options: ["未来を表す", "目的を表す（〜のために）", "所有を表す", "否定を表す"], correctIndex: 1, explanation: "Lam al-Ta'lil（理由・目的のラーム）で、「取り出すために」という意味になります。" },
        { id: 2327, type: "grammar", text: "「كَانَ اللُّؤْلُؤُ مَصْدَرَ」で「مَصْدَرَ」が対格（a段）になっている理由は？", options: ["主語だから", "Kānaの述語（Khabar Kāna）だから", "前置詞の後だから", "動詞だから"], correctIndex: 1, explanation: "「Kāna」の述語（Khabar）は対格（Mansūb）になるルールです。" }
      ],
      sentences: [
        { speaker: "ナレーター", arabic: "قَبْلَ النِّفْطِ، كَانَ اللُّؤْلُؤُ مَصْدَرَ الرِّزْقِ.", japanese: "石油（が出る）前、真珠が生計の源でした。" },
        { speaker: "ナレーター", arabic: "يَغُوصُ الرِّجَالُ إِلَى أَعْمَاقِ الْبَحْرِ.", japanese: "男たちは海の深くまで潜りました。" },
        { speaker: "ナレーター", arabic: "يَبْحَثُونَ عَنِ الْمَحَّارِ لِاسْتِخْرَاجِ اللُّؤْلُؤِ.", japanese: "彼らは真珠を取り出すためにカキ（貝）を探します。" },
        { speaker: "ナレーター", arabic: "كَانَتْ رِحْلَةُ الْغَوْصِ تَسْتَمِرُّ شُهُورًا.", japanese: "ダイビングの旅は数ヶ月続きました。" },
        { speaker: "ナレーター", arabic: "إِنَّهَا جُزْءٌ مُهِمٌّ مِنْ تَارِيخِ الْخَلِيجِ.", japanese: "それは湾岸の歴史の重要な一部です。" }
      ]
    },
    {
      id: 233,
      title: "アル・ウラー",
      category: "記事",
      level: "中級",
      contentVoweled: "تَقَعُ الْعُلَا فِي شَمَالِ غَرْبِ السُّعُودِيَّةِ. تَشْتَهِرُ بِآثَارِ مَدَائِنِ صَالِحَ. طَبِيعَتُهَا الصَّخْرِيَّةُ سَاحِرَةٌ. تُعْتَبَرُ مُتْحَفًا مَفْتُوحًا. تُقَامُ فِيهَا حَفَلَاتٌ وَفَعَالِيَّاتٌ عَالَمِيَّةٌ.",
      contentPlain: "تقع العلا في شمال غرب السعودية. تشتهر بآثار مدائن صالح. طبيعتها الصخرية ساحرة. تعتبر متحفا مفتوحات. تقام فيها حفلات وفعاليات عالمية.",
      vocabList: [
        { word: "آثَار", meaning: "遺跡" },
        { word: "طَبِيعَة", meaning: "自然" },
        { word: "سِيَاحَة", meaning: "観光" },
        { word: "صَخْرِيّ", meaning: "岩の/岩石の" }, // 追加
        { word: "مُتْحَف", meaning: "博物館" } // 追加
      ],
      questions: [
        { id: 2331, type: "reading", text: "アル・ウラーはどんな場所ですか？", options: ["工場地帯", "歴史的観光地", "海辺の町", "雪山"], correctIndex: 1, explanation: "「مَدِينَة تَارِيخِيَّة وَسِيَاحِيَّة」です。" },
        { id: 2332, type: "reading", text: "有名な遺跡は？", options: ["ピラミッド", "マダーイン・サーレハ", "万里の長城", "エッフェル塔"], correctIndex: 1, explanation: "「مَدَائِن صَالِح」です。" },
        { id: 2333, type: "reading", text: "景色はどうですか？", options: ["ビルばかり", "岩山と砂漠", "森", "湖"], correctIndex: 1, explanation: "「الْجِبَال الصَّخْرِيَّة (岩山)」が特徴です。" },
        { id: 2334, type: "vocabulary", text: "「مُتْحَف」の意味は？", options: ["学校", "博物館", "病院", "駅"], correctIndex: 1, explanation: "Museumです。" },
        { id: 2335, type: "grammar", text: "「開かれています」", options: ["مَفْتُوحٌ", "مُغْلَقٌ", "مَكْسُورٌ", "بَعِيدٌ"], correctIndex: 0, explanation: "「Maftūḥ (Open)」です。" },
        // 追加：やや難しい文法問題
        { id: 2336, type: "grammar", text: "「تُعْتَبَرُ」が受動態になっている理由は？", options: ["主語が不明だから", "「〜と見なされている」という意味だから", "過去のことだから", "命令だから"], correctIndex: 1, explanation: "「〜と見なす」の受動態で「〜と見なされている（考えられている）」という意味になります。" },
        { id: 2337, type: "grammar", text: "「مَدَائِنِ صَالِحَ」で「Sāliḥa」がa段（Fatha）で終わる理由は？", options: ["主語だから", "イダーファの第2要素（所有格）だが非限定名詞だから", "目的語だから", "間違い"], correctIndex: 1, explanation: "これは少々高度ですが、固有名詞の一部として、または「非限定名詞（Mumnu' min al-sarf）」の所有格としてFathaを取ることがあります（一般的にはKasraですが、文法的に非限定扱いされる場合）。" }
      ],
      sentences: [
        { speaker: "ナレーター", arabic: "تَقَعُ الْعُلَا فِي شَمَالِ غَرْبِ السُّعُودِيَّةِ.", japanese: "アル・ウラーはサウジアラビアの北西に位置します。" },
        { speaker: "ナレーター", arabic: "تَشْتَهِرُ بِآثَارِ مَدَائِنِ صَالِحَ.", japanese: "マダーイン・サーレハの遺跡で有名です。" },
        { speaker: "ナレーター", arabic: "طَبِيعَتُهَا الصَّخْرِيَّةُ سَاحِرَةٌ.", japanese: "その岩の多い自然は魅惑的です。" },
        { speaker: "ナレーター", arabic: "تُعْتَبَرُ مُتْحَفًا مَفْتُوحًا.", japanese: "それは野外博物館（オープン・ミュージアム）と考えられています。" },
        { speaker: "ナレーター", arabic: "تُقَامُ فِيهَا حَفَلَاتٌ وَفَعَالِيَّاتٌ عَالَمِيَّةٌ.", japanese: "そこでは世界的なコンサートやイベントが開催されます。" }
      ]
    },
    {
      id: 234,
      title: "香木（ウード）",
      category: "文化",
      level: "中級",
      contentVoweled: "يُسْتَخْرَجُ دُهْنُ الْعُودِ مِنْ شَجَرَةٍ خَاصَّةٍ. رَائِحَتُهُ قَوِيَّةٌ وَجَمِيلَةٌ. يُقَدَّمُ الْبَخُورُ لِلضُّيُوفِ كَنَوْعٍ مِنَ التَّكْرِيمِ. يَرْتَبِطُ الْعُودُ بِالْكَرَمِ الْعَرَبِيِّ. يُسْتَخْدَمُ فِي الْأَعْرَاسِ وَالْأَعْيَادِ.",
      contentPlain: "يستخرج دهن العود من شجرة خاصة. رائحته قوية وجميلة. يقدم البخور للضيوف كنوع من التكريم. يرتبط العود بالكرم العربي. يستخدم في الأعراس والأعياد.",
      vocabList: [
        { word: "بَخُور", meaning: "お香" },
        { word: "رَائِحَة", meaning: "香り" },
        { word: "ضَيْف", meaning: "客" },
        { word: "تَكْرِيم", meaning: "光栄に思うこと/歓迎" }, // 追加
        { word: "أَعْرَاس", meaning: "結婚式（複数）" } // 追加
      ],
      questions: [
        { id: 2341, type: "reading", text: "ウードとは何ですか？", options: ["食べ物", "香木/お香", "飲み物", "服"], correctIndex: 1, explanation: "「طِيب وَبَخُور (香水とお香)」の一種です。" },
        { id: 2342, type: "reading", text: "価格はどうですか？", options: ["安い", "無料", "非常に高い", "普通"], correctIndex: 2, explanation: "本文にはありませんが、一般知識として、またID231のvocabListで「aghlā」が使われていた文脈です。" },
        { id: 2343, type: "reading", text: "いつ使われますか？", options: ["寝る時", "おもてなしや結婚式", "スポーツの時", "勉強中"], correctIndex: 1, explanation: "「لِلضُّيُوفِ (客に)」や「فِي الْأَعْرَاسِ (結婚式で)」です。" },
        { id: 2344, type: "vocabulary", text: "「خَشَب」の意味は？", options: ["石", "木材", "鉄", "紙"], correctIndex: 1, explanation: "Wood（木）のことです。" },
        { id: 2345, type: "grammar", text: "「匂いを嗅ぐ」", options: ["يَشَمُّ", "يَأْكُلُ", "يَرَى", "يَلْمِسُ"], correctIndex: 0, explanation: "「Yashammu」です。" },
        // 追加：やや難しい文法問題
        { id: 2346, type: "grammar", text: "「يُسْتَخْرَجُ」の動詞の派生形（Wazn）は？", options: ["Form I (Fa'ala)", "Form II (Fa''ala)", "Form X (Istaf'ala)", "Form IV (Af'ala)"], correctIndex: 2, explanation: "「Ista-」で始まる動詞は第10形（Istaf'ala）で、「求める・引き出す」という意味を持つことが多いです。" },
        { id: 2347, type: "grammar", text: "「رَائِحَتُهُ」の「hu」は何を指していますか？", options: ["木", "ウード（沈香）", "客", "場所"], correctIndex: 1, explanation: "「ウード（男性名詞）」の香りを指すため、男性単数の代名詞「hu」が使われています。" }
      ],
      sentences: [
        { speaker: "ナレーター", arabic: "يُسْتَخْرَجُ دُهْنُ الْعُودِ مِنْ شَجَرَةٍ خَاصَّةٍ.", japanese: "ウードの油は特別な木から抽出されます。" },
        { speaker: "ナレーター", arabic: "رَائِحَتُهُ قَوِيَّةٌ وَجَمِيلَةٌ.", japanese: "その香りは強く、美しいです。" },
        { speaker: "ナレーター", arabic: "يُقَدَّمُ الْبَخُورُ لِلضُّيُوفِ كَنَوْعٍ مِنَ التَّكْرِيمِ.", japanese: "お香は敬意の印（歓迎の一種）として客に提供されます。" },
        { speaker: "ナレーター", arabic: "يَرْتَبِطُ الْعُودُ بِالْكَرَمِ الْعَرَبِيِّ.", japanese: "ウードはアラブの寛大さ（おもてなし）と結びついています。" },
        { speaker: "ナレーター", arabic: "يُسْتَخْدَمُ فِي الْأَعْرَاسِ وَالْأَعْيَادِ.", japanese: "結婚式や祝祭で使用されます。" }
      ]
    },
    {
      id: 235,
      title: "アル・フワーリズミー",
      category: "歴史",
      level: "中級",
      contentVoweled: "عَاشَ الْخُوَارِزْمِيُّ فِي بَغْدَادَ. كَتَبَ كُتُبًا فِي الْحِسَابِ وَالْفَلَكِ. كَلِمَةُ 'لُوغَارِيتْم' مُشْتَقَّةٌ مِنِ اسْمِهِ. أَدْخَلَ نِظَامَ الْأَرْقَامِ الْهِنْدِيَّةِ وَالصِّفْرَ. تُرْجِمَتْ أَعْمَالُهُ إِلَى اللَّاتِينِيَّةِ.",
      contentPlain: "عاش الخوارزمي في بغداد. كتب كتبا في الحساب والفلك. كلمة 'لوغاريتم' مشتقة من اسمه. أدخل نظام الأرقام الهندية والصفر. ترجمت أعماله إلى اللاتينية.",
      vocabList: [
        { word: "عَالِم", meaning: "学者" },
        { word: "رِيَاضِيَّات", meaning: "数学" },
        { word: "صِفْر", meaning: "ゼロ" },
        { word: "فَلَك", meaning: "天文学" }, // 追加
        { word: "تُرْجِمَ", meaning: "翻訳された" } // 追加
      ],
      questions: [
        { id: 2351, type: "reading", text: "彼は何の学者ですか？", options: ["歴史", "数学", "文学", "音楽"], correctIndex: 1, explanation: "「رِيَاضِيَّات」です。" },
        { id: 2352, type: "reading", text: "彼は何の創始者ですか？", options: ["幾何学", "代数学（アルジェブラ）", "化学", "生物学"], correctIndex: 1, explanation: "「عِلْم الْجَبْر (代数学)」です。" },
        { id: 2353, type: "reading", text: "彼が導入した重要な数字は？", options: ["1", "10", "ゼロ", "100"], correctIndex: 2, explanation: "「الصِّفْر (ゼロ)」です。" },
        { id: 2354, type: "vocabulary", text: "「حِسَاب」の意味は？", options: ["計算/算数", "言葉", "星", "地図"], correctIndex: 0, explanation: "Calculationです。" },
        { id: 2355, type: "grammar", text: "「発明しました」", options: ["اخْتَرَعَ", "أَكَلَ", "نَامَ", "ذَهَبَ"], correctIndex: 0, explanation: "「Ikhtara'a」です。" },
        // 追加：やや難しい文法問題
        { id: 2356, type: "grammar", text: "「مُشْتَقَّةٌ」の意味と文法的役割は？", options: ["動詞・過去形", "受動分詞（派生した）", "能動分詞（派生する）", "名詞・場所"], correctIndex: 1, explanation: "「Mushtaqqa」は受動分詞（Ism Maf'ūl）で、「派生させられた＝由来する」という意味です。" },
        { id: 2357, type: "grammar", text: "「تُرْجِمَتْ」の「t」は何を表しますか？", options: ["私が〜した", "あなたが〜した", "彼女（それ）が〜した（女性・単数）", "彼らが〜した"], correctIndex: 2, explanation: "動詞の最後につく静止したター（Tā' al-Tā'nīth）は、主語が女性名詞（ここでは「A'māl (作品群)」が非理性的複数で女性単数扱い）であることを示します。" }
      ],
      sentences: [
        { speaker: "ナレーター", arabic: "عَاشَ الْخُوَارِزْمِيُّ فِي بَغْدَادَ.", japanese: "フワーリズミーはバグダッドに住んでいました。" },
        { speaker: "ナレーター", arabic: "كَتَبَ كُتُبًا فِي الْحِسَابِ وَالْفَلَكِ.", japanese: "彼は算術と天文学の本を書きました。" },
        { speaker: "ナレーター", arabic: "كَلِمَةُ 'لُوغَارِيتْم' مُشْتَقَّةٌ مِنِ اسْمِهِ.", japanese: "「アルゴリズム（対数）」という言葉は彼の名前に由来します。" },
        { speaker: "ナレーター", arabic: "أَدْخَلَ نِظَامَ الْأَرْقَامِ الْهِنْدِيَّةِ وَالصِّفْرَ.", japanese: "彼はインド数字システムとゼロを導入しました。" },
        { speaker: "ナレーター", arabic: "تُرْجِمَتْ أَعْمَالُهُ إِلَى اللَّاتِينِيَّةِ.", japanese: "彼の作品はラテン語に翻訳されました。" }
      ]
  },
  {
    id: 236,
    title: "紅海",
    category: "記事",
    level: "中級",
    contentVoweled: "يَقَعُ الْبَحْرُ الْأَحْمَرُ غَرْبَ السُّعُودِيَّةِ. مِيَاهُهُ صَافِيَةٌ وَدَافِئَةٌ. تَعِيشُ فِيهِ كَائِنَاتٌ بَحْرِيَّةٌ نَادِرَةٌ. يَأْتِي الْغَوَّاصُونَ مِنْ كُلِّ مَكَانٍ. مَدِينَةُ جِدَّةَ هِيَ عَرُوسُ الْبَحْرِ الْأَحْمَرِ.",
    contentPlain: "يقع البحر الأحمر غرب السعودية. مياهه صافية ودافئة. تعيش فيه كائنات بحرية نادرة. يأتي الغواصون من كل مكان. مدينة جدة هي عروس البحر الأحمر.",
    vocabList: [
      { word: "بَحْر", meaning: "海" },
      { word: "سَمَك", meaning: "魚" },
      { word: "غَوْص", meaning: "ダイビング" },
      { word: "صَافِيَة", meaning: "澄んだ" }, // 追加
      { word: "عَرُوس", meaning: "花嫁" } // 追加
    ],
    questions: [
      { id: 2361, type: "reading", text: "紅海は何で有名ですか？", options: ["高い波", "サンゴ礁", "氷", "暗闇"], correctIndex: 1, explanation: "「الشُّعَب الْمَرْجَانِيَّة (サンゴ礁)」や「كَائِنَاتٌ بَحْرِيَّةٌ」が有名です。" },
      { id: 2362, type: "reading", text: "観光客は何をしますか？", options: ["スキー", "ダイビング", "登山", "狩り"], correctIndex: 1, explanation: "「الْغَوْص (ダイビング)」です。" },
      { id: 2363, type: "reading", text: "水の中には何がいますか？", options: ["鳥", "色とりどりの魚", "猫", "ラクダ"], correctIndex: 1, explanation: "「أَسْمَاك مُلَوَّنَة (カラフルな魚)」や海洋生物です。" },
      { id: 2364, type: "vocabulary", text: "「سَاحِل」の意味は？", options: ["山", "海岸", "空", "砂漠"], correctIndex: 1, explanation: "Coast（海岸）です。" },
      { id: 2365, type: "grammar", text: "「泳ぎます」", options: ["يَسْبَحُ", "يَطِيرُ", "يَمْشِي", "يَجْرِي"], correctIndex: 0, explanation: "「Yasbaḥu」です。" },
      // 追加：やや難しい文法問題
      { id: 2366, type: "grammar", text: "「تَعِيشُ فِيهِ كَائِنَاتٌ」で動詞が女性形（Ta-）なのはなぜ？", options: ["主語が女性名詞（非理性的複数）だから", "主語が男性だから", "過去形だから", "場所を表すから"], correctIndex: 0, explanation: "主語「كَائِنَاتٌ (生き物たち)」は非理性的複数なので、動詞は女性単数形で受けるのが一般的です。" },
      { id: 2367, type: "grammar", text: "「عَرُوسُ الْبَحْرِ」のような名詞の組み合わせを何と呼ぶ？", options: ["イダーファ（所有格構文）", "形容詞修飾", "動詞文", "前置詞句"], correctIndex: 0, explanation: "「海の・花嫁」のように名詞をつなげて所有や帰属を表す形を「イダーファ」と呼びます。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "يَقَعُ الْبَحْرُ الْأَحْمَرُ غَرْبَ السُّعُودِيَّةِ.", japanese: "紅海はサウジアラビアの西に位置します。" },
      { speaker: "ナレーター", arabic: "مِيَاهُهُ صَافِيَةٌ وَدَافِئَةٌ.", japanese: "その水は澄んでいて暖かいです。" },
      { speaker: "ナレーター", arabic: "تَعِيشُ فِيهِ كَائِنَاتٌ بَحْرِيَّةٌ نَادِرَةٌ.", japanese: "そこには珍しい海洋生物が生息しています。" },
      { speaker: "ナレーター", arabic: "يَأْتِي الْغَوَّاصُونَ مِنْ كُلِّ مَكَانٍ.", japanese: "ダイバーたちが各地からやってきます。" },
      { speaker: "ナレーター", arabic: "مَدِينَةُ جِدَّةَ هِيَ عَرُوسُ الْبَحْرِ الْأَحْمَرِ.", japanese: "ジェッダ市は「紅海の花嫁」と呼ばれます。" }
    ]
  },
  {
    id: 237,
    title: "シドルの蜂蜜",
    category: "記事",
    level: "中級",
    contentVoweled: "يَصْنَعُ النَّحْلُ الْعَسَلَ مِنْ أَزْهَارِ السِّدْرِ. لَوْنُهُ ذَهَبِيٌّ غَامِقٌ. لَهُ طَعْمٌ لَذِيذٌ وَمُمَيَّزٌ. يُعْتَبَرُ دَوَاءً لِكَثِيرٍ مِنَ الْأَمْرَاضِ. يُشْتَهَرُ فِي الْيَمَنِ وَجَنُوبِ السُّعُودِيَّةِ.",
    contentPlain: "يصنع النحل العسل من أزهار السدر. لونه ذهبي غامق. له طعم لذيذ ومميز. يعتبر دواء لكثير من الأمراض. يشتهر في اليمن وجنوب السعودية.",
    vocabList: [
      { word: "عَسَل", meaning: "蜂蜜" },
      { word: "شِفَاء", meaning: "治癒/薬" },
      { word: "نَحْل", meaning: "ミツバチ" },
      { word: "أَزْهَار", meaning: "花々" }, // 追加
      { word: "مَرَض", meaning: "病気" } // 追加
    ],
    questions: [
      { id: 2371, type: "reading", text: "シドルの蜂蜜の特徴は？", options: ["安い", "苦い", "最高級で高価", "白い"], correctIndex: 2, explanation: "「أَفْضَل وَأَغْلَى (最高で最も高い)」です。" },
      { id: 2372, type: "reading", text: "どこから採れますか？", options: ["バラ", "シドルの木", "草", "果物"], correctIndex: 1, explanation: "「شَجَرَة السِّدْر」です。" },
      { id: 2373, type: "reading", text: "何に使われますか？", options: ["掃除", "治療と栄養", "洗濯", "燃料"], correctIndex: 1, explanation: "「عِلَاج (治療)」や食品として使われます。" },
      { id: 2374, type: "vocabulary", text: "「طَبِيعِيّ」の意味は？", options: ["人工の", "自然の/天然の", "悪い", "安い"], correctIndex: 1, explanation: "Natural（天然の）です。" },
      { id: 2375, type: "grammar", text: "「作ります（生産します）」", options: ["يُنْتِجُ", "يَأْكُلُ", "يَنَامُ", "يَمُوتُ"], correctIndex: 0, explanation: "「Yuntiju」です。" },
      // 追加：やや難しい文法問題
      { id: 2376, type: "grammar", text: "「لَهُ طَعْمٌ」という文の構造は？", options: ["動詞文（動詞+主語）", "名詞文（主語+述語）", "名詞文（前置詞句の前置述語+後置主語）", "命令文"], correctIndex: 2, explanation: "「Lahu (彼には〜がある)」が前置された述語（Khabar Muqaddam）、「Ta'mun (味が)」が後置された主語（Mubtada' Mu'akhkhar）です。" },
      { id: 2377, type: "grammar", text: "「يُعْتَبَرُ」が受動態なのはなぜ？", options: ["誰が考えているか特定しないため（一般的に〜とされる）", "主語がないから", "過去のことだから", "間違い"], correctIndex: 0, explanation: "「人々によって〜と考えられている」という一般的評価を表すため、受動態が使われます。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "يَصْنَعُ النَّحْلُ الْعَسَلَ مِنْ أَزْهَارِ السِّدْرِ.", japanese: "ミツバチはシドルの花から蜂蜜を作ります。" },
      { speaker: "ナレーター", arabic: "لَوْنُهُ ذَهَبِيٌّ غَامِقٌ.", japanese: "色は濃い金色です。" },
      { speaker: "ナレーター", arabic: "لَهُ طَعْمٌ لَذِيذٌ وَمُمَيَّزٌ.", japanese: "美味しくて独特な味がします。" },
      { speaker: "ナレーター", arabic: "يُعْتَبَرُ دَوَاءً لِكَثِيرٍ مِنَ الْأَمْرَاضِ.", japanese: "多くの病気の薬（治療）と考えられています。" },
      { speaker: "ナレーター", arabic: "يُشْتَهَرُ فِي الْيَمَنِ وَجَنُوبِ السُّعُودِيَّةِ.", japanese: "イエメンやサウジ南部で有名です。" }
    ]
  },
  {
    id: 238,
    title: "月と暦",
    category: "文化",
    level: "中級",
    contentVoweled: "السَّنَةُ الْهِجْرِيَّةُ أَقْصَرُ مِنَ الْمِيلَادِيَّةِ. تَتَكَوَّنُ مِنْ 12 شَهْرًا قَمَرِيًّا. يَبْدَأُ الشَّهْرُ عِنْدَ رُؤْيَةِ الْهِلَالِ. رَمَضَانُ وَذُو الْحِجَّةِ أَشْهُرٌ مُهِمَّةٌ. يَتَغَيَّرُ مَوْعِدُهَا كُلَّ عَامٍ.",
    contentPlain: "السنة الهجرية أقصر من الميلادية. تتكون من 12 شهرا قمريا. يبدأ الشهر عند رؤية الهلال. رمضان وذو الحجة أشهر مهمة. يتغير موعدها كل عام.",
    vocabList: [
      { word: "قَمَر", meaning: "月" },
      { word: "شَهْر", meaning: "月（暦）" },
      { word: "سَنَة", meaning: "年" },
      { word: "هِلَال", meaning: "三日月" }, // 追加
      { word: "مَوْعِد", meaning: "時期/約束" } // 追加
    ],
    questions: [
      { id: 2381, type: "reading", text: "ヒジュラ暦は何に基づいていますか？", options: ["太陽", "月", "星", "風"], correctIndex: 1, explanation: "「الْقَمَر (月)」です。" },
      { id: 2382, type: "reading", text: "1ヶ月は何日ですか？", options: ["30か31日", "29か30日", "28日", "35日"], correctIndex: 1, explanation: "月の満ち欠けによるため「29か30日」です。" },
      { id: 2383, type: "reading", text: "新しい月はどうやって決まりますか？", options: ["計算だけ", "三日月の観測", "王様の命令", "くじ引き"], correctIndex: 1, explanation: "「رُؤْيَة الْهِلَال (三日月の観測)」です。" },
      { id: 2384, type: "vocabulary", text: "「بِدَايَة」の意味は？", options: ["終わり", "始まり", "真ん中", "永遠"], correctIndex: 1, explanation: "Beginning（始まり）です。" },
      { id: 2385, type: "grammar", text: "「見ます」", options: ["يَرَى", "يَسْمَعُ", "يَشَمُّ", "يَمْشِي"], correctIndex: 0, explanation: "「Yarā」です。" },
      // 追加：やや難しい文法問題
      { id: 2386, type: "grammar", text: "「أَقْصَرُ」の文法的な形は？", options: ["最上級/比較級（Ism Tafḍīl）", "過去形", "受動態", "複数形"], correctIndex: 0, explanation: "「Af'al」の形は形容詞の比較級・最上級を表します（ここでは「より短い」）。" },
      { id: 2387, type: "grammar", text: "「12 شَهْرًا」で「شَهْرًا」が単数対格（an）なのはなぜ？", options: ["11〜99の数の後の数えられる名詞（Tamyeez）だから", "目的語だから", "前置詞の後だから", "間違い"], correctIndex: 0, explanation: "11から99までの数字の後ろに来る名詞（数えられるもの）は、単数・対格（Mansūb）になるルールです。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "السَّنَةُ الْهِجْرِيَّةُ أَقْصَرُ مِنَ الْمِيلَادِيَّةِ.", japanese: "ヒジュラ年（太陰年）はグレゴリオ年（太陽年）より短いです。" },
      { speaker: "ナレーター", arabic: "تَتَكَوَّنُ مِنْ 12 شَهْرًا قَمَرِيًّا.", japanese: "それは12の太陰月から成ります。" },
      { speaker: "ナレーター", arabic: "يَبْدَأُ الشَّهْرُ عِنْدَ رُؤْيَةِ الْهِلَالِ.", japanese: "月は三日月が見えた時に始まります。" },
      { speaker: "ナレーター", arabic: "رَمَضَانُ وَذُو الْحِجَّةِ أَشْهُرٌ مُهِمَّةٌ.", japanese: "ラマダンやズー・アルヒッジャは重要な月です。" },
      { speaker: "ナレーター", arabic: "يَتَغَيَّرُ مَوْعِدُهَا كُلَّ عَامٍ.", japanese: "その時期は毎年変わります。" }
    ]
  },
  {
    id: 239,
    title: "ジュハーと釘",
    category: "物語",
    level: "中級",
    contentVoweled: "وَافَقَ الْمُشْتَرِي عَلَى شَرْطِ جُحَا. كَانَ جُحَا يَأْتِي كُلَّ يَوْمٍ لِيَزُورَ الْمِسْمَارَ. يَدْخُلُ الْبَيْتَ وَيَجْلِسُ طَوِيلًا. انْزَعَجَ الْمُشْتَرِي وَتَرَكَ الْبَيْتَ لِجُحَا. هَذِهِ قِصَّةٌ عَنِ الذَّكَاءِ وَالْحِيلَةِ.",
    contentPlain: "وافق المشتري على شرط جحا. كان جحا يأتي كل يوم ليزور المسمار. يدخل البيت ويجلس طويلا. انزعج المشتري وترك البيت لجحا. هذه قصة عن الذكاء والحيلة.",
    vocabList: [
      { word: "مِسْمَار", meaning: "釘" },
      { word: "بَيْت", meaning: "家" },
      { word: "حَائِط", meaning: "壁" },
      { word: "شَرْط", meaning: "条件" }, // 追加
      { word: "حِيلَة", meaning: "策略/トリック" } // 追加
    ],
    questions: [
      { id: 2391, type: "reading", text: "ジュハーは何を売りましたか？", options: ["釘", "家", "服", "ロバ"], correctIndex: 1, explanation: "「بَيْتَهُ (彼の家)」を売りました。" },
      { id: 2392, type: "reading", text: "彼は何を条件にしましたか？", options: ["お金を倍にする", "釘を一本残す", "庭を使う", "住み続ける"], correctIndex: 1, explanation: "「مِسْمَار فِي الْحَائِط (壁の釘)」を自分のものとして残しました。" },
      { id: 2393, type: "reading", text: "その後ジュハーはどうしましたか？", options: ["二度と来なかった", "毎日釘を見に来た", "釘を抜いた", "家を買い戻した"], correctIndex: 1, explanation: "釘を見るという口実で毎日家に入り込みました。" },
      { id: 2394, type: "vocabulary", text: "「مُشْتَرِي」の意味は？", options: ["売り手", "買い手", "家", "泥棒"], correctIndex: 1, explanation: "Buyer（買い手）です。" },
      { id: 2395, type: "grammar", text: "「残ります」", options: ["يَبْقَى", "يَذْهَبُ", "يَمُوتُ", "يَأْكُلُ"], correctIndex: 0, explanation: "「Yabqā」です。" },
      // 追加：やや難しい文法問題
      { id: 2396, type: "grammar", text: "「لِيَزُورَ」の「يَزُورَ」がa段（Fatḥa）で終わっている理由は？", options: ["直前に「Li-（〜するために）」があるから", "過去形だから", "命令形だから", "主語が彼だから"], correctIndex: 0, explanation: "「Li-（Lam of Purpose）」の後では、現在形動詞は接続法（Manṣūb）になり、通常Fatḥaで終わります。" },
      { id: 2397, type: "grammar", text: "「كَانَ يَأْتِي」の意味は？", options: ["彼は来た", "彼は来ている", "彼は（過去に習慣的に）来ていた", "彼は来るだろう"], correctIndex: 2, explanation: "「Kāna + 現在形」は過去における継続的・習慣的な動作（Past Continuous/Habitual）を表します。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "وَافَقَ الْمُشْتَرِي عَلَى شَرْطِ جُحَا.", japanese: "買い手はジュハーの条件に同意しました。" },
      { speaker: "ナレーター", arabic: "كَانَ جُحَا يَأْتِي كُلَّ يَوْمٍ لِيَزُورَ الْمِسْمَارَ.", japanese: "ジュハーは毎日釘を訪ねてやって来ました（来ていました）。" },
      { speaker: "ナレーター", arabic: "يَدْخُلُ الْبَيْتَ وَيَجْلِسُ طَوِيلًا.", japanese: "彼は家に入り、長時間座り込みました。" },
      { speaker: "ナレーター", arabic: "انْزَعَجَ الْمُشْتَرِي وَتَرَكَ الْبَيْتَ لِجُحَا.", japanese: "買い手は困り果て、家をジュハーに残して去りました。" },
      { speaker: "ナレーター", arabic: "هَذِهِ قِصَّةٌ عَنِ الذَّكَاءِ وَالْحِيلَةِ.", japanese: "これは知恵と策略についての物語です。" }
    ]
  },
  {
    id: 240,
    title: "親切な男",
    category: "物語",
    level: "中級",
    contentVoweled: "كَانَ الرَّجُلُ يَمْشِي فِي الصَّحْرَاءِ. رَأَى كَلْبًا يَلْهَثُ مِنَ الْعَطَشِ. نَزَلَ الرَّجُلُ إِلَى الْبِئْرِ. مَلَأَ حِذَاءَهُ بِالْمَاءِ وَسَقَى الْكَلْبَ. شَكَرَ اللهُ لَهُ وَغَفَرَ ذَنْبَهُ.",
    contentPlain: "كان الرجل يمشي في الصحراء. رأى كلبا يلهث من العطش. نزل الرجل إلى البئر. ملأ حذاءه بالماء وسقى الكلب. شكر الله له وغفر ذنبه.",
    vocabList: [
      { word: "كَلْب", meaning: "犬" },
      { word: "مَاء", meaning: "水" },
      { word: "رَحْمَة", meaning: "慈悲" },
      { word: "عَطَش", meaning: "渇き" }, // 追加
      { word: "حِذَاء", meaning: "靴" } // 追加
    ],
    questions: [
      { id: 2401, type: "reading", text: "男は何を見つけましたか？", options: ["猫", "鳥", "喉が乾いた犬", "ライオン"], correctIndex: 2, explanation: "「كَلْبًا عَطْشَانَ」です。" },
      { id: 2402, type: "reading", text: "男はどうしましたか？", options: ["逃げた", "水をあげた", "叩いた", "家に連れ帰った"], correctIndex: 1, explanation: "「سَقَاهُ الْمَاءَ (彼に水を飲ませた)」です。" },
      { id: 2403, type: "reading", text: "どうやって水を汲みましたか？", options: ["コップで", "靴を使って", "手で", "バケツで"], correctIndex: 1, explanation: "「بِحِذَائِهِ (彼の靴で)」です。" },
      { id: 2404, type: "vocabulary", text: "「بِئْر」の意味は？", options: ["井戸", "川", "海", "山"], correctIndex: 0, explanation: "Well（井戸）です。" },
      { id: 2405, type: "grammar", text: "「降りました」", options: ["نَزَلَ", "صَعِدَ", "دَخَلَ", "خَرَجَ"], correctIndex: 0, explanation: "「Nazala」です。" },
      // 追加：やや難しい文法問題
      { id: 2406, type: "grammar", text: "「كَلْبًا يَلْهَثُ」で「yalhathu」の文法的役割は？", options: ["主語", "形容詞節（Siifah）", "名詞", "前置詞"], correctIndex: 1, explanation: "非限定名詞（Kalban）の後の動詞文は、その名詞を修飾する形容詞（Siifah）の役割を果たします。「喘いでいる犬」となります。" },
      { id: 2407, type: "grammar", text: "「سَقَى」の語根（Root）は？", options: ["S-Q-Y", "S-K-N", "S-R-Q", "Q-W-L"], correctIndex: 0, explanation: "「水をやる」という意味の動詞の語根は Sīn-Qāf-Yā です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "كَانَ الرَّجُلُ يَمْشِي فِي الصَّحْرَاءِ.", japanese: "男は砂漠を歩いていました。" },
      { speaker: "ナレーター", arabic: "رَأَى كَلْبًا يَلْهَثُ مِنَ الْعَطَشِ.", japanese: "彼は渇きで喘いでいる犬を見ました。" },
      { speaker: "ナレーター", arabic: "نَزَلَ الرَّجُلُ إِلَى الْبِئْرِ.", japanese: "男は井戸に降りました。" },
      { speaker: "ナレーター", arabic: "مَلَأَ حِذَاءَهُ بِالْمَاءِ وَسَقَى الْكَلْبَ.", japanese: "靴を水で満たし、犬に飲ませました。" },
      { speaker: "ナレーター", arabic: "شَكَرَ اللهُ لَهُ وَغَفَرَ ذَنْبَهُ.", japanese: "神は彼に感謝し、罪を許しました。" }
    ]
  },
  {
    id: 241,
    title: "金持ちと貧乏人",
    category: "物語",
    level: "中級",
    contentVoweled: "عَاشَ رَجُلٌ غَنِيٌّ فِي قَصْرٍ كَبِيرٍ. كَانَ يَخَافُ عَلَى مَالِهِ فَلَا يَنَامُ. بِجَانِبِهِ رَجُلٌ فَقِيرٌ يَنَامُ بِعُمْقٍ. سَأَلَهُ الْغَنِيُّ: كَيْفَ تَسْعَدُ وَأَنْتَ فَقِيرٌ؟ قَالَ: الْقَنَاعَةُ كَنْزٌ لَا يَفْنَى.",
    contentPlain: "عاش رجل غني في قصر كبير. كان يخاف على ماله فلا ينام. بجانبه رجل فقير ينام بعمق. سأله الغني: كيف تسعد وأنت فقير؟ قال: القناعة كنز لا يفنى.",
    vocabList: [
      { word: "مَال", meaning: "お金/財産" },
      { word: "سَعَادَة", meaning: "幸せ" },
      { word: "قَنَاعَة", meaning: "満足/納得" },
      { word: "يَفْنَى", meaning: "尽きる/滅びる" }, // 追加
      { word: "عُمْق", meaning: "深さ/深く" } // 追加
    ],
    questions: [
      { id: 2411, type: "reading", text: "幸せとは何ですか？", options: ["たくさんのお金", "心の安らぎ", "大きな家", "高い車"], correctIndex: 1, explanation: "「رَاحَة الْبَال (心の安らぎ)」や「الْقَنَاعَة (満足)」です。" },
      { id: 2412, type: "reading", text: "金持ちはどうでしたか？", options: ["幸せだった", "いつも心配していた", "よく眠れた", "貧しかった"], correctIndex: 1, explanation: "「يَخَافُ عَلَى مَالِهِ (財産を心配していた)」です。" },
      { id: 2413, type: "reading", text: "貧乏人はどうでしたか？", options: ["泣いていた", "深く眠っていた", "怒っていた", "病気だった"], correctIndex: 1, explanation: "「يَنَامُ بِعُمْقٍ (深く眠っていた)」です。" },
      { id: 2414, type: "vocabulary", text: "「كَنْز」の意味は？", options: ["宝", "ゴミ", "石", "砂"], correctIndex: 0, explanation: "Treasure（宝）です。" },
      { id: 2415, type: "grammar", text: "「持っています」", options: ["يَمْلِكُ", "يَفْقِدُ", "يُعْطِي", "يَأْخُذُ"], correctIndex: 0, explanation: "「Yamliku (所有する)」です。" },
      // 追加：やや難しい文法問題
      { id: 2416, type: "grammar", text: "「الْقَنَاعَةُ كَنْزٌ」の文のタイプは？", options: ["動詞文（Jumla Fi'liyya）", "名詞文（Jumla Ismiyya）", "疑問文", "命令文"], correctIndex: 1, explanation: "名詞（Al-Qanā'a）で始まっているため、名詞文です。主語（Mubtada'）と述語（Khabar）で構成されています。" },
      { id: 2417, type: "grammar", text: "「لَا يَفْنَى」の「لَا (Lā)」の種類は？", options: ["禁止のLa（〜するな）", "否定のLa（〜しない）", "過去の否定", "未来の強調"], correctIndex: 1, explanation: "動詞の語尾がスクーン（省略）になっていないため、禁止（Nahiya）ではなく、単なる否定（Nafiya）のLaです。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "عَاشَ رَجُلٌ غَنِيٌّ فِي قَصْرٍ كَبِيرٍ.", japanese: "ある金持ちが大きな宮殿に住んでいました。" },
      { speaker: "ナレーター", arabic: "كَانَ يَخَافُ عَلَى مَالِهِ فَلَا يَنَامُ.", japanese: "彼はお金の心配で眠れませんでした。" },
      { speaker: "ナレーター", arabic: "بِجَانِبِهِ رَجُلٌ فَقِيرٌ يَنَامُ بِعُمْقٍ.", japanese: "隣には深く眠る貧しい男がいました。" },
      { speaker: "ナレーター", arabic: "سَأَلَهُ الْغَنِيُّ: كَيْفَ تَسْعَدُ وَأَنْتَ فَقِيرٌ؟", japanese: "金持ちは聞きました。「貧しいのになぜ幸せ（になれる）なんだ？」" },
      { speaker: "ナレーター", arabic: "قَالَ: الْقَنَاعَةُ كَنْزٌ لَا يَفْنَى.", japanese: "彼は言いました。「足るを知ることは尽きない宝です。」" }
    ]
  },
  {
    id: 242,
    title: "ハトとアリ",
    category: "物語",
    level: "中級",
    contentVoweled: "أَنْقَذَتِ الْحَمَامَةُ النَّمْلَةَ مِنَ الْغَرَقِ. بَعْدَ أَيَّامٍ، جَاءَ صَيَّادٌ. أَرَادَ صَيْدَ الْحَمَامَةِ. لَدَغَتِ النَّمْلَةُ قَدَمَ الصَّيَّادِ. صَرَخَ الصَّيَّادُ وَهَرَبَتِ الْحَمَامَةُ.",
    contentPlain: "أنقذت الحمامة النملة من الغرق. بعد أيام، جاء صياد. أراد صيد الحمامة. لدغت النملة قدم الصياد. صرخ الصياد وهربت الحمامة.",
    vocabList: [
      { word: "حَمَامَة", meaning: "ハト" },
      { word: "نَمْلَة", meaning: "アリ" },
      { word: "غَرِقَ", meaning: "溺れた" },
      { word: "أَنْقَذَ", meaning: "助けた" }, // 追加
      { word: "لَدَغَ", meaning: "刺した/噛んだ" } // 追加
    ],
    questions: [
      { id: 2421, type: "reading", text: "アリはどうなりましたか？", options: ["飛んだ", "溺れかけた", "木に登った", "寝た"], correctIndex: 1, explanation: "「مِنَ الْغَرَقِ (溺れることから)」助けられました。" },
      { id: 2422, type: "reading", text: "ハトは何をしましたか？", options: ["見ていた", "アリを助けた", "食べた", "逃げた"], correctIndex: 1, explanation: "「أَنْقَذَتِ ... النَّمْلَةَ (アリを救った)」です。" },
      { id: 2423, type: "reading", text: "その後アリはどうしましたか？", options: ["ハトを助け返した", "忘れた", "逃げた", "死んだ"], correctIndex: 0, explanation: "猟師を噛んでハトを救いました。" },
      { id: 2424, type: "vocabulary", text: "「صَيَّاد」の意味は？", options: ["農夫", "猟師", "医者", "王様"], correctIndex: 1, explanation: "Hunter（猟師）です。" },
      { id: 2425, type: "grammar", text: "「投げた」", options: ["أَلْقَى / رَمَى", "أَخَذَ", "أَمْسَكَ", "وَجَدَ"], correctIndex: 0, explanation: "「Alqā」または「Ramā」です。" },
      // 追加：やや難しい文法問題
      { id: 2426, type: "grammar", text: "「أَنْقَذَتِ」の最後の「ti」の発音の理由は？", options: ["女性形だから", "過去形だから", "スクーンが2つ続いた回避のため", "所有格だから"], correctIndex: 2, explanation: "本来「Anqadhat」ですが、次の「al-」のSukoonとぶつかるため（Iltiqa' al-Sakinayn）、発音しやすくするためにKasra（i）に変えています。" },
      { id: 2427, type: "grammar", text: "「بَعْدَ أَيَّامٍ」で「ayyāmin」が属格（in）なのは？", options: ["形容詞だから", "動詞の目的語だから", "イダーファ（所有格構文）の第2要素だから", "主語だから"], correctIndex: 2, explanation: "「Ba'da（〜の後）」などの副詞的名詞は、後ろに来る名詞をイダーファの第2要素（Muḍāf Ilayhi）として属格（Majrur）にします。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "أَنْقَذَتِ الْحَمَامَةُ النَّمْلَةَ مِنَ الْغَرَقِ.", japanese: "ハトはアリを溺死から救いました。" },
      { speaker: "ナレーター", arabic: "بَعْدَ أَيَّامٍ، جَاءَ صَيَّادٌ.", japanese: "数日後、猟師が来ました。" },
      { speaker: "ナレーター", arabic: "أَرَادَ صَيْدَ الْحَمَامَةِ.", japanese: "彼はハトを捕まえようとしました。" },
      { speaker: "ナレーター", arabic: "لَدَغَتِ النَّمْلَةُ قَدَمَ الصَّيَّادِ.", japanese: "アリは猟師の足を噛みました。" },
      { speaker: "ナレーター", arabic: "صَرَخَ الصَّيَّادُ وَهَرَبَتِ الْحَمَامَةُ.", japanese: "猟師は叫び、ハトは逃げました。" }
    ]
  },
  {
    id: 243,
    title: "知識の旅",
    category: "文学",
    level: "中級",
    contentVoweled: "الْعِلْمُ لَا يَأْتِي وَأَنْتَ جَالِسٌ. كَانَ الْعُلَمَاءُ يُسَافِرُونَ لِطَلَبِ الْحَدِيثِ. تَحَمَّلُوا الْجُوعَ وَالتَّعَبَ. الْعِلْمُ يَرْفَعُ بَيْتًا لَا عِمَادَ لَهُ. بِالْعِلْمِ تَتَقَدَّمُ الْأُمَمُ.",
    contentPlain: "العلم لا يأتي وأنت جالس. كان العلماء يسافرون لطلب الحديث. تحملوا الجوع والتعب. العلم يرفع بيتا لا عماد له. بالعلم تتقدم الأمم.",
    vocabList: [
      { word: "عِلْم", meaning: "知識/学問" },
      { word: "مَهْد", meaning: "ゆりかご" },
      { word: "لَحْد", meaning: "墓" },
      { word: "جَالِس", meaning: "座っている" }, // 追加
      { word: "عِمَاد", meaning: "柱" } // 追加
    ],
    questions: [
      { id: 2431, type: "reading", text: "ことわざ「ゆりかごから墓場まで」は何を意味しますか？", options: ["一生寝て過ごす", "一生学び続ける", "若いうちだけ学ぶ", "学校に行く"], correctIndex: 1, explanation: "「مِنَ الْمَهْدِ إِلَى اللَّحْدِ」は生涯学習を意味します。" },
      { id: 2432, type: "reading", text: "知識を得るためにどうすべきですか？", options: ["寝て待つ", "旅をする（求める）", "買う", "盗む"], correctIndex: 1, explanation: "「سَافَرَ (旅した)」「اُطْلُبُوا (求めよ)」です。" },
      { id: 2433, type: "reading", text: "昔の学者はどうしましたか？", options: ["ネットで調べた", "長い距離を移動した", "諦めた", "本を燃やした"], correctIndex: 1, explanation: "「يُسَافِرُونَ (旅をしていた)」です。" },
      { id: 2434, type: "vocabulary", text: "「سَفَر」の意味は？", options: ["本", "旅行", "家", "ペン"], correctIndex: 1, explanation: "Travel（旅行）です。" },
      { id: 2435, type: "grammar", text: "「求めなさい」", options: ["اُطْلُبْ", "اُتْرُكْ", "اِنْسَ", "اِبْكِ"], correctIndex: 0, explanation: "「Uṭlub」です。" },
      // 追加：やや難しい文法問題
      { id: 2436, type: "grammar", text: "「وَأَنْتَ جَالِسٌ」の文法的役割は？", options: ["形容詞節", "ハール（状態節）", "目的語", "主語"], correctIndex: 1, explanation: "「Wāw al-Ḥāl」＋名詞文で、「あなたが座っている状態で」という様子を表します。" },
      { id: 2437, type: "grammar", text: "「تَحَمَّلُوا」の動詞の語根（Root）は？", options: ["H-M-L", "J-M-L", "T-M-L", "A-M-L"], correctIndex: 0, explanation: "「耐える・背負う」の語根は Ḥā-Mīm-Lām (Ḥ-M-L) です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "الْعِلْمُ لَا يَأْتِي وَأَنْتَ جَالِسٌ.", japanese: "知識は（あなたが）座っているだけでは来ません。" },
      { speaker: "ナレーター", arabic: "كَانَ الْعُلَمَاءُ يُسَافِرُونَ لِطَلَبِ الْحَدِيثِ.", japanese: "学者たちはハディース（伝承）を求めて旅をしていました。" },
      { speaker: "ナレーター", arabic: "تَحَمَّلُوا الْجُوعَ وَالتَّعَبَ.", japanese: "彼らは飢えと疲れに耐えました。" },
      { speaker: "ナレーター", arabic: "الْعِلْمُ يَرْفَعُ بَيْتًا لَا عِمَادَ لَهُ.", japanese: "知識は柱のない家をも高くします（高めます）。" },
      { speaker: "ナレーター", arabic: "بِالْعِلْمِ تَتَقَدَّمُ الْأُمَمُ.", japanese: "知識によって国々は発展します。" }
    ]
  },
  {
    id: 244,
    title: "母の恩恵",
    category: "文化",
    level: "中級",
    contentVoweled: "الْأُمُّ هِيَ مَصْدَرُ الْحَنَانِ. سَهِرَتْ اللَّيَالِيَ مِنْ أَجْلِ رَاحَتِنَا. وَصَّى الْإِسْلَامُ بِالْإِحْسَانِ إِلَيْهَا. رِضَا اللهِ فِي رِضَا الْوَالِدَيْنِ. لَا نَسْتَطِيعُ رَدَّ جَمِيلِهَا.",
    contentPlain: "الأم هي مصدر الحنان. سهرت الليالي من أجل راحتنا. وصى الإسلام بالإحسان إليها. رضا الله في رضا الوالدين. لا نستطيع رد جميلها.",
    vocabList: [
      { word: "أُمّ", meaning: "母" },
      { word: "جَنَّة", meaning: "天国" },
      { word: "قَدَم", meaning: "足" },
      { word: "حَنَان", meaning: "優しさ/愛情" }, // 追加
      { word: "إِحْسَان", meaning: "善行/親切" } // 追加
    ],
    questions: [
      { id: 2441, type: "reading", text: "天国はどこにあると言われていますか？", options: ["空の上", "母の足元", "海の中", "山の上"], correctIndex: 1, explanation: "「تَحْتَ أَقْدَامِ الْأُمَّهَاتِ」という有名なハディースがあります。" },
      { id: 2442, type: "reading", text: "母に対してどうすべきですか？", options: ["無視する", "親切にする（孝行）", "怒る", "離れる"], correctIndex: 1, explanation: "「بِرُّ الْوَالِدَيْنِ (親孝行)」や「الْإِحْسَان」が重要です。" },
      { id: 2443, type: "reading", text: "母は子供のために何をしましたか？", options: ["遊んだ", "夜更かしして世話をした", "寝た", "忘れた"], correctIndex: 1, explanation: "「سَهِرَتْ اللَّيَالِيَ (夜を徹して起きていた)」です。" },
      { id: 2444, type: "vocabulary", text: "「قَلْب」の意味は？", options: ["頭", "心臓/心", "手", "目"], correctIndex: 1, explanation: "Heart（心）です。" },
      { id: 2445, type: "grammar", text: "「愛しています」", options: ["أُحِبُّ", "أَكْرَهُ", "أَضْرِبُ", "أَقْتُلُ"], correctIndex: 0, explanation: "「Uḥibbu」です。" },
      // 追加：やや難しい文法問題
      { id: 2446, type: "grammar", text: "「اللَّيَالِيَ」の単数形は？", options: ["لَيْلَة", "لَيْل", "نَهَار", "يَوْم"], correctIndex: 0, explanation: "「Layla (Night)」の不規則複数形（Jam' Taksīr）が「Layālī」です。" },
      { id: 2447, type: "grammar", text: "「رِضَا」の最後の文字（Alif）に母音記号がつかない理由は？", options: ["省略されている", "発音が不可能だから（Ta'adhdhur）", "重いから（Thiqal）", "スクーンだから"], correctIndex: 1, explanation: "Alif（アリフ）で終わる名詞（Ism Maqsur）は、母音を乗せることが物理的に不可能なため、推定母音（Harakat Muqaddara）となります。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "الْأُمُّ هِيَ مَصْدَرُ الْحَنَانِ.", japanese: "母は優しさの源です。" },
      { speaker: "ナレーター", arabic: "سَهِرَتْ اللَّيَالِيَ مِنْ أَجْلِ رَاحَتِنَا.", japanese: "彼女は私たちの安らぎのために夜通し起きていました。" },
      { speaker: "ナレーター", arabic: "وَصَّى الْإِسْلَامُ بِالْإِحْسَانِ إِلَيْهَا.", japanese: "イスラムは彼女への善行を推奨しました（命じました）。" },
      { speaker: "ナレーター", arabic: "رِضَا اللهِ فِي رِضَا الْوَالِدَيْنِ.", japanese: "神の満足は両親の満足にあります。" },
      { speaker: "ナレーター", arabic: "لَا نَسْتَطِيعُ رَدَّ جَمِيلِهَا.", japanese: "私たちは彼女の恩を返しきることはできません。" }
    ]
  },
  {
    id: 245,
    title: "サウジの結婚式",
    category: "文化",
    level: "中級",
    contentVoweled: "يَجْتَمِعُ الْأَقَارِبُ وَالْأَصْدِقَاءُ لِلتَّهْنِئَةِ. يَرْتَدِي الرِّجَالُ الْمَلَابِسَ التَّقْلِيدِيَّةَ. تُقَامُ الْعَرْضَةُ النَّجْدِيَّةُ بِالسُّيُوفِ. الْوَلِيمَةُ تَكُونُ كَبِيرَةً وَدَسِمَةً. يَفْرَحُ الْجَمِيعُ بِالْعَرِيسَيْنِ.",
    contentPlain: "يجتمع الأقارب والأصدقاء للتهنئة. يرتدي الرجال الملابس التقليدية. تقام العرضة النجدية بالسيوف. الوليمة تكون كبيرة ودسمة. يفرح الجميع بالعريسين.",
    vocabList: [
      { word: "عُرْس", meaning: "結婚式" },
      { word: "وَلِيمَة", meaning: "宴/食事" },
      { word: "رَقْص", meaning: "踊り" },
      { word: "تَهْنِئَة", meaning: "お祝い" }, // 追加
      { word: "تَقْلِيدِيّ", meaning: "伝統的な" } // 追加
    ],
    questions: [
      { id: 2451, type: "reading", text: "結婚式の特徴は？", options: ["静か", "特別な伝統がある", "短い", "悲しい"], correctIndex: 1, explanation: "「تَقَالِيد خَاصَّة」や伝統的な踊りがあります。" },
      { id: 2452, type: "reading", text: "男性は何を踊りますか？", options: ["サルサ", "アルダ（剣の舞）", "タンゴ", "バレエ"], correctIndex: 1, explanation: "「الْعَرْضَة (アルダ)」です。" },
      { id: 2453, type: "reading", text: "食事は何が出ますか？", options: ["サンドイッチ", "羊肉と米（マフリ）", "スープ", "パン"], correctIndex: 1, explanation: "「وَلِيمَة ... كَبِيرَة وَدَسِمَة」で、通常は羊肉料理が出ます。" },
      { id: 2454, type: "vocabulary", text: "「عَرِيس」の意味は？", options: ["花嫁", "花婿", "父", "客"], correctIndex: 1, explanation: "新郎のことです。" },
      { id: 2455, type: "grammar", text: "「踊ります」", options: ["يَرْقُصُ", "يَأْكُلُ", "يَجْلِسُ", "يَبْكِي"], correctIndex: 0, explanation: "「Yarquṣu」です。" },
      // 追加：やや難しい文法問題
      { id: 2456, type: "grammar", text: "「يَرْتَدِي」の最後が「Damma」ではない理由は？", options: ["重さ（Thiqal）のため発音されない", "不可能性（Ta'adhdhur）のため", "接続法だから", "短縮形だから"], correctIndex: 0, explanation: "「Ya」で終わる動詞（Naqis）の現在形・主格は、Dammaの発音が重く感じる（Thiqal）ため、表記・発音されません。" },
      { id: 2457, type: "grammar", text: "「بِالْعَرِيسَيْنِ」の「ayni」は何を表す？", options: ["複数形", "双数形（2人）", "単数形", "女性形"], correctIndex: 1, explanation: "新郎と新婦の2人を指すため、双数形（Dual）の属格（Majrur）の形になっています。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "يَجْتَمِعُ الْأَقَارِبُ وَالْأَصْدِقَاءُ لِلتَّهْنِئَةِ.", japanese: "親戚や友人がお祝いのために集まります。" },
      { speaker: "ナレーター", arabic: "يَرْتَدِي الرِّجَالُ الْمَلَابِسَ التَّقْلِيدِيَّةَ.", japanese: "男性は伝統的な服を着ます。" },
      { speaker: "ナレーター", arabic: "تُقَامُ الْعَرْضَةُ النَّجْدِيَّةُ بِالسُّيُوفِ.", japanese: "剣を使ったナジュドのアルダ（踊り）が行われます。" },
      { speaker: "ナレーター", arabic: "الْوَلِيمَةُ تَكُونُ كَبِيرَةً وَدَسِمَةً.", japanese: "宴は大きく、豪華（脂っこい＝ご馳走）です。" },
      { speaker: "ナレーター", arabic: "يَفْرَحُ الْجَمِيعُ بِالْعَرِيسَيْنِ.", japanese: "皆が新郎新婦（のことで）喜びます。" }
    ]
  },
  {
    id: 246,
    title: "石油の発見",
    category: "歴史",
    level: "中級",
    contentVoweled: "بَدَأَ التَّنْقِيبُ عَنِ النِّفْطِ مُنْذُ زَمَنٍ. فِي عَامِ 1938، تَدَفَّقَ النِّفْطُ بِكَمِّيَّاتٍ تِجَارِيَّةٍ. أَصْبَحَتِ الْمَمْلَكَةُ مِنْ أَغْنَى الدُّوَلِ. تَطَوَّرَ التَّعْلِيمُ وَالصِّحَّةُ وَالْعُمْرَانُ. أُرَامْكُو هِيَ أَكْبَرُ شَرِكَةِ نِفْطٍ فِي الْعَالَمِ.",
    contentPlain: "بدأ التنقيب عن النفط منذ زمن. في عام 1938، تدفق النفط بكميات تجارية. أصبحت المملكة من أغنى الدول. تطور التعليم والصحة والعمران. أرامكو هي أكبر شركة نفط في العالم.",
    vocabList: [
      { word: "نِفْط", meaning: "石油" },
      { word: "اِكْتِشَاف", meaning: "発見" },
      { word: "ثَرْوَة", meaning: "富/財産" },
      { word: "تَنَقِيب", meaning: "探査/掘削" }, // 追加
      { word: "تَدَفَّقَ", meaning: "あふれ出た/噴出した" } // 追加
    ],
    questions: [
      { id: 2461, type: "reading", text: "何が発見されましたか？", options: ["金", "水", "石油", "ダイヤモンド"], correctIndex: 2, explanation: "「النِّفْط (石油)」です。" },
      { id: 2462, type: "reading", text: "発見によってどうなりましたか？", options: ["変わらなかった", "生活が変わった/豊かになった", "貧しくなった", "人が減った"], correctIndex: 1, explanation: "「أَغْنَى الدُّوَلِ (最も豊かな国)」の一つになりました。" },
      { id: 2463, type: "reading", text: "最初の油田の名前は？", options: ["リヤド", "ダンマーム7号井", "メッカ", "ジェッダ"], correctIndex: 1, explanation: "一般知識として「Dammam No.7」です。" },
      { id: 2464, type: "vocabulary", text: "「اِقْتِصَاد」の意味は？", options: ["政治", "経済", "文化", "宗教"], correctIndex: 1, explanation: "Economy（経済）です。" },
      { id: 2465, type: "grammar", text: "「変わりました」", options: ["تَغَيَّرَ", "بَقِيَ", "نَامَ", "ذَهَبَ"], correctIndex: 0, explanation: "「Taghayyara」です。" },
      // 追加：やや難しい文法問題
      { id: 2466, type: "grammar", text: "「أُكْتُشِفَ」（本文外のタイトル文脈等）や受動態の基本母音パターンは？", options: ["a-a-a", "u-i-a", "i-i-a", "u-u-u"], correctIndex: 1, explanation: "過去形の受動態は、最初がダンマ(u)、最後から2番目がカスラ(i)になる「u-i-a」パターンが基本です（例：Kutiba）。" },
      { id: 2467, type: "grammar", text: "「بِكَمِّيَّاتٍ」が属格（in）になっている理由は？", options: ["前置詞「Bi」の後だから", "動詞の目的語だから", "主語だから", "副詞だから"], correctIndex: 0, explanation: "前置詞（Harf Jarr）の後の名詞は常に属格（Majrur）になります。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "بَدَأَ التَّنْقِيبُ عَنِ النِّفْطِ مُنْذُ زَمَنٍ.", japanese: "石油の探査は昔始まりました。" },
      { speaker: "ナレーター", arabic: "فِي عَامِ 1938، تَدَفَّقَ النِّفْطُ بِكَمِّيَّاتٍ تِجَارِيَّةٍ.", japanese: "1938年、商業量の石油が噴出しました。" },
      { speaker: "ナレーター", arabic: "أَصْبَحَتِ الْمَمْلَكَةُ مِنْ أَغْنَى الدُّوَلِ.", japanese: "王国は最も豊かな国の一つになりました。" },
      { speaker: "ナレーター", arabic: "تَطَوَّرَ التَّعْلِيمُ وَالصِّحَّةُ وَالْعُمْرَانُ.", japanese: "教育、健康、建設（都市開発）が発展しました。" },
      { speaker: "ナレーター", arabic: "أُرَامْكُو هِيَ أَكْبَرُ شَرِكَةِ نِفْطٍ فِي الْعَالَمِ.", japanese: "アラムコは世界最大の石油会社です。" }
    ]
  },
  {
    id: 247,
    title: "アラビアン・オリックス",
    category: "自然",
    level: "中級",
    contentVoweled: "يَتَمَيَّزُ الْمَهَا بِلَوْنِهِ الْأَبْيَضِ النَّاصِعِ. لَهُ قُرُونٌ طَوِيلَةٌ وَمُسْتَقِيمَةٌ. تَغَزَّلَ الشُّعَرَاءُ بِعُيُونِ الْمَهَا. كَانَ مُهَدَّدًا بِالِانْقِرَاضِ. الْآنَ تُوجَدُ مَحْمِيَّاتٌ لِلْحِفَاظِ عَلَيْهِ.",
    contentPlain: "يتميز المها بلونه الأبيض الناصع. له قرون طويلة ومستقيمة. تغزل الشعراء بعيون المها. كان مهددا بالانقراض. الآن توجد محميات للحفاظ عليه.",
    vocabList: [
      { word: "مَهَا", meaning: "オリックス（動物）" },
      { word: "قَرْن", meaning: "角" },
      { word: "أَبْيَض", meaning: "白い" },
      { word: "نَاصِع", meaning: "明るい/純粋な" }, // 追加
      { word: "اِنْقِرَاض", meaning: "絶滅" } // 追加
    ],
    questions: [
      { id: 2471, type: "reading", text: "「マハ」とは何の動物ですか？", options: ["ライオン", "アラビアン・オリックス", "ラクダ", "鷹"], correctIndex: 1, explanation: "オリックス（レイヨウの一種）です。" },
      { id: 2472, type: "reading", text: "色は？", options: ["黒", "白", "赤", "青"], correctIndex: 1, explanation: "「أَبْيَض (白)」です。" },
      { id: 2473, type: "reading", text: "どこに住んでいますか？", options: ["森", "海", "砂漠", "街"], correctIndex: 2, explanation: "「فِي الصَّحْرَاءِ (砂漠)」です。" },
      { id: 2474, type: "vocabulary", text: "「عَيْن」の意味は？", options: ["耳", "目", "鼻", "口"], correctIndex: 1, explanation: "目です。オリックスは美しい目で有名です。" },
      { id: 2475, type: "grammar", text: "「住んでいます」", options: ["يَعِيشُ", "يَمُوتُ", "يَذْهَبُ", "يَأْتِي"], correctIndex: 0, explanation: "「Ya'īshu」です。" },
      // 追加：やや難しい文法問題
      { id: 2476, type: "grammar", text: "「قُرُونٌ طَوِيلَةٌ」で形容詞が女性単数形なのはなぜ？", options: ["角が女性だから", "角（複数）が非理性的（人間以外）だから", "間違っている", "強調のため"], correctIndex: 1, explanation: "「Qurūn（角）」は人間以外の複数形（Jam' Ghayr 'Aqil）なので、形容詞は女性単数形で受けます。" },
      { id: 2477, type: "grammar", text: "「كَانَ مُهَدَّدًا」で「Muhaddadan」が対格（an）なのは？", options: ["Kānaの主語だから", "Kānaの述語（Khabar）だから", "目的語だから", "形容詞だから"], correctIndex: 1, explanation: "「Kāna」の述語（Khabar Kāna）は常に対格（Manṣūb）になります。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "يَتَمَيَّزُ الْمَهَا بِلَوْنِهِ الْأَبْيَضِ النَّاصِعِ.", japanese: "オリックスは真っ白な（鮮やかな白の）色が特徴です。" },
      { speaker: "ナレーター", arabic: "لَهُ قُرُونٌ طَوِيلَةٌ وَمُسْتَقِيمَةٌ.", japanese: "長くまっすぐな角を持っています。" },
      { speaker: "ナレーター", arabic: "تَغَزَّلَ الشُّعَرَاءُ بِعُيُونِ الْمَهَا.", japanese: "詩人たちはオリックスの目の美しさを（恋愛詩のように）詠いました。" },
      { speaker: "ナレーター", arabic: "كَانَ مُهَدَّدًا بِالِانْقِرَاضِ.", japanese: "それは絶滅の危機に瀕していました。" },
      { speaker: "ナレーター", arabic: "الْآنَ تُوجَدُ مَحْمِيَّاتٌ لِلْحِفَاظِ عَلَيْهِ.", japanese: "今は保護するための保護区があります。" }
    ]
  },
  {
    id: 248,
    title: "ホスピタリティ（おもてなし）",
    category: "文化",
    level: "中級",
    contentVoweled: "بَابُ الْعَرَبِيِّ مَفْتُوحٌ دَائِمًا لِلضَّيْفِ. يُقَدِّمُونَ الْقَهْوَةَ وَالتَّمْرَ أَوَّلًا. ثُمَّ يُجَهِّزُونَ الْوَلِيمَةَ. الضَّيْفُ فِي حِمَايَةِ الْمُضِيفِ. هَذِهِ عَادَةٌ قَدِيمَةٌ وَأَصِيلَةٌ.",
    contentPlain: "باب العربي مفتوح دائما للضيف. يقدمون القهوة والتمر أولا. ثم يجهزون الوليمة. الضيف في حماية المضيف. هذه عادة قديمة وأصيلة.",
    vocabList: [
      { word: "ضَيْف", meaning: "客" },
      { word: "كَرَم", meaning: "気前の良さ/寛大さ" },
      { word: "طَعَام", meaning: "食事" },
      { word: "مُضِيف", meaning: "ホスト/主人" }, // 追加
      { word: "عَادَة", meaning: "習慣" } // 追加
    ],
    questions: [
      { id: 2481, type: "reading", text: "アラブ人の重要な特徴は？", options: ["強さ", "おもてなし（寛大さ）", "速さ", "静かさ"], correctIndex: 1, explanation: "「كَرَمُ الضِّيَافَةِ」です。" },
      { id: 2482, type: "reading", text: "客が来たらどうしますか？", options: ["追い返す", "歓迎して食事を出す", "無視する", "寝る"], correctIndex: 1, explanation: "「يُكْرِمُونَ الضَّيْفَ (客をもてなす)」です。" },
      { id: 2483, type: "reading", text: "最初に何を出し​​ますか？", options: ["水", "コーヒーとデーツ", "肉", "パン"], correctIndex: 1, explanation: "「الْقَهْوَة وَالتَّمْر」です。" },
      { id: 2484, type: "vocabulary", text: "「بَاب」の意味は？", options: ["窓", "ドア/扉", "壁", "床"], correctIndex: 1, explanation: "Doorです。" },
      { id: 2485, type: "grammar", text: "「開いています」", options: ["مَفْتُوحٌ", "مُغْلَقٌ", "صَغِيرٌ", "بَعِيدٌ"], correctIndex: 0, explanation: "「Maftūḥ」です。" },
      // 追加：やや難しい文法問題
      { id: 2486, type: "grammar", text: "「يُقَدِّمُونَ」の主語は？", options: ["彼（Huwa）", "彼ら（Hum）", "あなたたち（Antum）", "私たち（Nahnu）"], correctIndex: 1, explanation: "「ūna」で終わる動詞は、三人称男性複数の主語（彼ら）を表します。" },
      { id: 2487, type: "grammar", text: "「أَوَّلًا」のような単語の品詞は？", options: ["動詞", "形容詞", "副詞（Zarf/Hal）", "前置詞"], correctIndex: 2, explanation: "「まず最初に」という意味で、副詞的に使われています。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "بَابُ الْعَرَبِيِّ مَفْتُوحٌ دَائِمًا لِلضَّيْفِ.", japanese: "アラブ人の（家の）ドアは常に客のために開かれています。" },
      { speaker: "ナレーター", arabic: "يُقَدِّمُونَ الْقَهْوَةَ وَالتَّمْرَ أَوَّلًا.", japanese: "まずコーヒーとデーツを出します。" },
      { speaker: "ナレーター", arabic: "ثُمَّ يُجَهِّزُونَ الْوَلِيمَةَ.", japanese: "それから宴（食事）を準備します。" },
      { speaker: "ナレーター", arabic: "الضَّيْفُ فِي حِمَايَةِ الْمُضِيفِ.", japanese: "客はホストの保護下にあります。" },
      { speaker: "ナレーター", arabic: "هَذِهِ عَادَةٌ قَدِيمَةٌ وَأَصِيلَةٌ.", japanese: "これは古くからの正統な習慣です。" }
    ]
  },
  {
    id: 249,
    title: "未来の技術",
    category: "記事",
    level: "中級",
    contentVoweled: "الرُّوبُوتَاتُ تَعْمَلُ بَدَلًا مِنَ الْإِنْسَانِ. نَسْتَخْدِمُ الذَّكَاءَ الِاصْطِنَاعِيَّ فِي الْهَوَاتِفِ. يُسَاعِدُ الْأَطِبَّاءَ فِي التَّشْخِيصِ. يَجْعَلُ الْحَيَاةَ أَسْهَلَ وَأَسْرَعَ. لَكِنْ يَجِبُ أَنْ نَتَحَكَّمَ فِيهِ.",
    contentPlain: "الروبوتات تعمل بدلا من الإنسان. نستخدم الذكاء الاصطناعي في الهواتف. يساعد الأطباء في التشخيص. يجعل الحياة أسهل وأسرع. لكن يجب أن نتحكم فيه.",
    vocabList: [
      { word: "ذَكَاء", meaning: "知能" },
      { word: "حَاسُوب", meaning: "コンピュータ" },
      { word: "رُوبُوت", meaning: "ロボット" },
      { word: "تَشْخِيص", meaning: "診断" }, // 追加
      { word: "تَحَكُّم", meaning: "制御/コントロール" } // 追加
    ],
    questions: [
      { id: 2491, type: "reading", text: "AIとは何ですか？", options: ["自然の力", "人工知能", "宇宙人", "魔法"], correctIndex: 1, explanation: "「الذَّكَاء الِاصْطِنَاعِيّ」です。" },
      { id: 2492, type: "reading", text: "それは何をしていますか？", options: ["生活を変えている", "何もしていない", "眠っている", "壊れている"], correctIndex: 0, explanation: "「يُغَيِّرُ حَيَاتَنَا (生活を変えている)」です。" },
      { id: 2493, type: "reading", text: "どこで使われていますか？", options: ["家だけ", "学校だけ", "あらゆる分野", "どこにもない"], correctIndex: 2, explanation: "「فِي كُلِّ الْمَجَالَاتِ (あらゆる分野で)」です。" },
      { id: 2494, type: "vocabulary", text: "「سَهْل」の意味は？", options: ["難しい", "簡単", "遠い", "重い"], correctIndex: 1, explanation: "Easy（簡単）です。" },
      { id: 2495, type: "grammar", text: "「助けます」", options: ["يُسَاعِدُ", "يَضُرُّ", "يَأْخُذُ", "يُعْطِي"], correctIndex: 0, explanation: "「Yusā'idu」です。" },
      // 追加：やや難しい文法問題
      { id: 2496, type: "grammar", text: "「أَسْهَلَ وَأَسْرَعَ」の文法形式は？", options: ["最上級/比較級 (Ism Tafdil)", "過去形", "複数形", "命令形"], correctIndex: 0, explanation: "「Af'al」パターンは比較級（より簡単、より速い）を表します。" },
      { id: 2497, type: "grammar", text: "「أَنْ نَتَحَكَّمَ」で動詞がa段（Fatha）なのは？", options: ["「An」の後だから（接続法）", "過去形だから", "複数だから", "間違い"], correctIndex: 0, explanation: "「An (〜すること)」という接続助詞の後の動詞は接続法（Manṣūb）になり、通常Fathaで終わります。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "الرُّوبُوتَاتُ تَعْمَلُ بَدَلًا مِنَ الْإِنْسَانِ.", japanese: "ロボットが人間の代わりに働きます。" },
      { speaker: "ナレーター", arabic: "نَسْتَخْدِمُ الذَّكَاءَ الِاصْطِنَاعِيَّ فِي الْهَوَاتِفِ.", japanese: "私たちは電話でAIを使用します。" },
      { speaker: "ナレーター", arabic: "يُسَاعِدُ الْأَطِبَّاءَ فِي التَّشْخِيصِ.", japanese: "それは医師の診断を助けます。" },
      { speaker: "ナレーター", arabic: "يَجْعَلُ الْحَيَاةَ أَسْهَلَ وَأَسْرَعَ.", japanese: "それは生活をより簡単に、より速くします。" },
      { speaker: "ナレーター", arabic: "لَكِنْ يَجِبُ أَنْ نَتَحَكَّمَ فِيهِ.", japanese: "しかし、私たちはそれを制御しなければなりません。" }
    ]
  },
  {
    id: 250,
    title: "ジェッダ歴史地区",
    category: "歴史",
    level: "中級",
    contentVoweled: "تَقَعُ الْمِنْطَقَةُ التَّارِيخِيَّةُ فِي وَسَطِ جِدَّةَ. الْبُيُوتُ مَبْنِيَّةٌ مِنْ حَجَرِ الْكَاشُورِ. تَزَيَّنُ النَّوَافِذُ بِالرَّوَاشِينِ الْخَشَبِيَّةِ. الشَّوَارِعُ ضَيِّقَةٌ وَجَمِيلَةٌ. إِنَّهَا مُسَجَّلَةٌ فِي الْيُونِسْكُو.",
    contentPlain: "تقع المنطقة التاريخية في وسط جدة. البيوت مبنية من حجر الكاشور. تزين النوافذ بالرواشين الخشبية. الشوارع ضيقة وجميلة. إنها مسجلة في اليونسكو.",
    vocabList: [
      { word: "تَارِيخ", meaning: "歴史" },
      { word: "بِنَاء", meaning: "建物/建築" },
      { word: "خَشَب", meaning: "木" },
      { word: "رَوَاشِين", meaning: "ラワーシーン（木の出窓）" }, // 追加
      { word: "ضَيِّق", meaning: "狭い" } // 追加
    ],
    questions: [
      { id: 2501, type: "reading", text: "「ジェッダ・アル・バラド」とは何ですか？", options: ["新しい空港", "歴史地区", "大きな市場", "砂漠"], correctIndex: 1, explanation: "「مِنْطَقَة تَارِيخِيَّة」です。" },
      { id: 2502, type: "reading", text: "特徴的な建築様式は？", options: ["ガラスのビル", "テント", "ラワーシーン（木の出窓）", "石の城"], correctIndex: 2, explanation: "「الرَّوَاشِين (Rawashin)」という木の装飾窓が有名です。" },
      { id: 2503, type: "reading", text: "建物は何で作られていますか？", options: ["コンクリート", "サンゴ石（カアシュール）と木", "鉄", "泥"], correctIndex: 1, explanation: "海に近いのでサンゴ石（カアシュール）が使われていました。" },
      { id: 2504, type: "vocabulary", text: "「ضَيِّق」の意味は？", options: ["広い", "狭い", "高い", "低い"], correctIndex: 1, explanation: "Narrow（狭い）です。" },
      { id: 2505, type: "grammar", text: "「歩くのが好きです」", options: ["أُحِبُّ الْمَشْيَ", "أَكْرَهُ الْمَشْيَ", "أُحِبُّ النَّوْمَ", "أَمْشِي بِسُرْعَةٍ"], correctIndex: 0, explanation: "「Uḥibbu al-mashya」です。" },
      // 追加：やや難しい文法問題
      { id: 2506, type: "grammar", text: "「مَبْنِيَّةٌ」の文法的な形は？", options: ["能動分詞（Ism Fā'il）", "受動分詞（Ism Maf'ūl）", "場所名詞", "道具名詞"], correctIndex: 1, explanation: "「Banā（建てた）」の受動分詞「Mabniyy（建てられた）」の女性形です。" },
      { id: 2507, type: "grammar", text: "「النَّوَافِذُ」の単数形は？", options: ["نَافِذَة", "نَافِذ", "نَفْذ", "مَنْفَذ"], correctIndex: 0, explanation: "「Nāfidha（窓）」の不規則複数形（Jam' Taksīr）が「Nawāfidh」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "تَقَعُ الْمِنْطَقَةُ التَّارِيخِيَّةُ فِي وَسَطِ جِدَّةَ.", japanese: "歴史地区はジェッダの中心に位置しています。" },
      { speaker: "ナレーター", arabic: "الْبُيُوتُ مَبْنِيَّةٌ مِنْ حَجَرِ الْكَاشُورِ (الْمَرْجَانِ).", japanese: "家々はカアシュール石（サンゴ石）で建てられています。" },
      { speaker: "ナレーター", arabic: "تَزَيَّنُ النَّوَافِذُ بِالرَّوَاشِينِ الْخَشَبِيَّةِ.", japanese: "窓は木のラワーシーン（出窓）で飾られています。" },
      { speaker: "ナレーター", arabic: "الشَّوَارِعُ ضَيِّقَةٌ وَجَمِيلَةٌ.", japanese: "通りは狭くて美しいです。" },
      { speaker: "ナレーター", arabic: "إِنَّهَا مُسَجَّلَةٌ فِي الْيُونِسْكُو.", japanese: "それはユネスコに登録されています。" }
    ]
  },
  {
    id: 251,
    title: "建国記念日",
    category: "歴史",
    level: "中級",
    contentVoweled: "وَحَّدَ الْمَلِكُ عَبْدُ الْعَزِيزِ الْبِلَادَ. غَيَّرَ الِاسْمَ إِلَى الْمَمْلَكَةِ الْعَرَبِيَّةِ السُّعُودِيَّةِ. يَحْتَفِلُ السُّعُودِيُّونَ بِهَذَا الْيَوْمِ كُلَّ عَامٍ. يَرْفَعُونَ الْأَعْلَامَ الْخَضْرَاءَ. إِنَّهُ يَوْمُ الْفَخْرِ وَالِاعْتِزَازِ.",
    contentPlain: "وحد الملك عبد العزيز البلاد. غير الاسم إلى المملكة العربية السعودية. يحتفل السعوديون بهذا اليوم كل عام. يرفعون الأعلام الخضراء. إنه يوم الفخر والاعتزاز.",
    vocabList: [
      { word: "وَطَن", meaning: "祖国" },
      { word: "تَوْحِيد", meaning: "統一" },
      { word: "مَلِك", meaning: "王" },
      { word: "فَخْر", meaning: "誇り" }, // 追加
      { word: "عَلَم", meaning: "国旗" } // 追加
    ],
    questions: [
      { id: 2511, type: "reading", text: "サウジの建国記念日はいつ？", options: ["1月1日", "9月23日", "12月18日", "2月22日"], correctIndex: 1, explanation: "「23 سِبْتَمْبِر」です（一般知識として）。" },
      { id: 2512, type: "reading", text: "何を祝う日ですか？", options: ["独立", "王国の統一", "戦争の終わり", "新年の始まり"], correctIndex: 1, explanation: "「تَوْحِيد (統一)」を祝います。" },
      { id: 2513, type: "reading", text: "建国者は誰ですか？", options: ["アブドゥッラー王", "アブドゥルアズィーズ王", "ファハド王", "サルマン王"], correctIndex: 1, explanation: "「الْمَلِك عَبْدُ الْعَزِيز」です。" },
      { id: 2514, type: "vocabulary", text: "「عَلَم」の意味は？", options: ["ペン", "知識", "国旗", "山"], correctIndex: 2, explanation: "Flag（国旗）です。" },
      { id: 2515, type: "grammar", text: "「祝います」", options: ["نَحْتَفِلُ", "نَبْكِي", "نَعْمَلُ", "نَأْكُلُ"], correctIndex: 0, explanation: "「Naḥtafilu」です。" },
      // 追加：やや難しい文法問題
      { id: 2516, type: "grammar", text: "「السُّعُودِيُّونَ」の格と理由は？", options: ["主格（〜は）", "目的格（〜を）", "所有格（〜の）", "短縮形"], correctIndex: 0, explanation: "動詞「يَحْتَفِلُ」の主語（Fā'il）であるため、主格です。男性規則複数なので「ūna」となります。" },
      { id: 2517, type: "grammar", text: "「وَحَّدَ」と「غَيَّرَ」に共通する動詞の派生形（Wazn）は？", options: ["Form I (Fa'ala)", "Form II (Fa''ala)", "Form III (Fā'ala)", "Form IV (Af'ala)"], correctIndex: 1, explanation: "真ん中の文字にシャッダ（強調）がある第2形（Fa''ala）は、「〜させる（使役）」や「変化させる」意味を持つことが多いです。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "وَحَّدَ الْمَلِكُ عَبْدُ الْعَزِيزِ الْبِلَادَ.", japanese: "アブドゥルアズィーズ王が国を統一しました。" },
      { speaker: "ナレーター", arabic: "غَيَّرَ الِاسْمَ إِلَى الْمَمْلَكَةِ الْعَرَبِيَّةِ السُّعُودِيَّةِ.", japanese: "（彼は）名前をサウジアラビア王国に変えました。" },
      { speaker: "ナレーター", arabic: "يَحْتَفِلُ السُّعُودِيُّونَ بِهَذَا الْيَوْمِ كُلَّ عَامٍ.", japanese: "サウジ人は毎年この日を祝います。" },
      { speaker: "ナレーター", arabic: "يَرْفَعُونَ الْأَعْلَامَ الْخَضْرَاءَ.", japanese: "彼らは緑の国旗を掲げます。" },
      { speaker: "ナレーター", arabic: "إِنَّهُ يَوْمُ الْفَخْرِ وَالِاعْتِزَازِ.", japanese: "それは誇りと名誉の日です。" }
    ]
  },
  {
    id: 252,
    title: "ディルイーヤ",
    category: "歴史",
    level: "中級",
    contentVoweled: "تَقَعُ الدِّرْعِيَّةُ بِالْقُرْبِ مِنَ الرِّيَاضِ. بُيُوتُهَا مَبْنِيَّةٌ مِنَ الطِّينِ. حَيُّ الطُّرَيْفِ هُوَ مَوْقِعُ تُرَاثٍ عَالَمِيٍّ. تَمَّ تَجْدِيدُ الْمَكَانِ لِيُصْبِحَ وِجْهَةً سِيَاحِيَّةً. تُقَامُ فِيهَا سِبَاقَاتُ الْفُورْمُولَا إِي.",
    contentPlain: "تقع الدرعية بالقرب من الرياض. بيوتها مبنية من الطين. حي الطريف هو موقع تراث عالمي. تم تجديد المكان ليصبح وجهة سياحية. تقام فيها سباقات الفورمولا إي.",
    vocabList: [
      { word: "طِين", meaning: "泥/土" },
      { word: "تُرَاث", meaning: "遺産" },
      { word: "عَاصِمَة", meaning: "首都" },
      { word: "تَجْدِيد", meaning: "リニューアル/更新" }, // 追加
      { word: "وِجْهَة", meaning: "目的地/ディスティネーション" } // 追加
    ],
    questions: [
      { id: 2521, type: "reading", text: "ディルイーヤは何ですか？", options: ["新しい首都", "第一サウジ王国の発祥地", "海の近くの町", "油田"], correctIndex: 1, explanation: "本文では触れていませんが、歴史的文脈（ID 252の元データ）から「発祥地」です。" },
      { id: 2522, type: "reading", text: "建物は何で作られていますか？", options: ["ガラス", "泥レンガ", "鉄", "木"], correctIndex: 1, explanation: "「مِنَ الطِّينِ (泥から)」です。" },
      { id: 2523, type: "reading", text: "有名な地区の名前は？", options: ["アル・トライフ", "アル・ハムラ", "アル・オラ", "アル・コバール"], correctIndex: 0, explanation: "「حَيُّ الطُّرَيْف」です。" },
      { id: 2524, type: "vocabulary", text: "「تَجْدِيد」の意味は？", options: ["破壊", "修復/更新", "建設", "売却"], correctIndex: 1, explanation: "Renovation（修復・更新）です。" },
      { id: 2525, type: "grammar", text: "「訪れることができます」", options: ["يُمْكِنُ زِيَارَتُهَا", "لَا يُمْكِنُ", "زَارَ", "يَزُورُ"], correctIndex: 0, explanation: "「Yumkinu (可能である)」です。" },
      // 追加：やや難しい文法問題
      { id: 2526, type: "grammar", text: "「لِيُصْبِحَ」の動詞がa段（Fatha）なのは？", options: ["命令形だから", "理由のLam（Li-）の後の接続法だから", "過去形だから", "受動態だから"], correctIndex: 1, explanation: "「Li- (〜するために)」の後、現在形動詞は接続法（Manṣūb）になります。" },
      { id: 2527, type: "grammar", text: "「بُيُوتُهَا مَبْنِيَّةٌ」の性の一致について正しいのは？", options: ["間違いである", "「Buyūt」が非理性的複数なので、女性単数「Mabniyya」で受ける", "「Buyūt」が女性名詞だから", "意味が通じれば何でも良い"], correctIndex: 1, explanation: "人間以外の複数形（Buyūt = 家々）は、文法的に女性単数扱いとなり、述語も女性単数形になります。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "تَقَعُ الدِّرْعِيَّةُ بِالْقُرْبِ مِنَ الرِّيَاضِ.", japanese: "ディルイーヤはリヤドの近くにあります。" },
      { speaker: "ナレーター", arabic: "بُيُوتُهَا مَبْنِيَّةٌ مِنَ الطِّينِ.", japanese: "その家々は泥（日干しレンガ）で建てられています。" },
      { speaker: "ナレーター", arabic: "حَيُّ الطُّرَيْفِ هُوَ مَوْقِعُ تُرَاثٍ عَالَمِيٍّ.", japanese: "トライフ地区は世界遺産です。" },
      { speaker: "ナレーター", arabic: "تَمَّ تَجْدِيدُ الْمَكَانِ لِيُصْبِحَ وِجْهَةً سِيَاحِيَّةً.", japanese: "場所は観光地になるよう修復されました。" },
      { speaker: "ナレーター", arabic: "تُقَامُ فِيهَا سِبَاقَاتُ الْفُورْمُولَا إِي.", japanese: "そこではフォーミュラEのレースが開催されます。" }
    ]
  },
  {
    id: 253,
    title: "イブン・アル・ハイサム",
    category: "歴史",
    level: "中級",
    contentVoweled: "أَثْبَتَ ابْنُ الْهَيْثَمِ أَنَّ الضَّوْءَ يَأْتِي مِنَ الْأَشْيَاءِ إِلَى الْعَيْنِ. صَحَّحَ الْمَفَاهِيمَ الْقَدِيمَةَ عَنِ الرُّؤْيَةِ. اخْتَرَعَ الْقُمْرَةَ (الْغُرْفَةَ الْمُظْلِمَةَ). هَذَا الِاخْتِرَاعُ سَاعَدَ فِي تَطْوِيرِ الْكَامِيرَا. لَهُ إِسْهَامَاتٌ كَبِيرَةٌ فِي الْفِيزِيَاءِ.",
    contentPlain: "أثبت ابن الهيثم أن الضوء يأتي من الأشياء إلى العين. صحح المفاهيم القديمة عن الرؤية. اخترع القمرة (الغرفة المظلمة). هذا الاختراع ساعد في تطوير الكاميرا. له إسهامات كبيرة في الفيزياء.",
    vocabList: [
      { word: "بَصَر", meaning: "視覚" },
      { word: "ضَوْء", meaning: "光" },
      { word: "كِتَاب", meaning: "本" },
      { word: "أَثْبَتَ", meaning: "証明した" }, // 追加
      { word: "اِخْتِرَاع", meaning: "発明" } // 追加
    ],
    questions: [
      { id: 2531, type: "reading", text: "彼は何の創始者ですか？", options: ["数学", "光学", "医学", "化学"], correctIndex: 1, explanation: "「عِلْمِ الْبَصَرِيَّاتِ (光学)」です。" },
      { id: 2532, type: "reading", text: "彼は何を研究しましたか？", options: ["音", "光と視覚", "風", "星"], correctIndex: 1, explanation: "「الضَّوْء (光)」について研究しました。" },
      { id: 2533, type: "reading", text: "彼の有名な本は？", options: ["医学の典範", "光学の書（キターブ・アル・マナーズィル）", "旅の書", "詩集"], correctIndex: 1, explanation: "一般知識として「Kitāb al-Manāẓir」です。" },
      { id: 2534, type: "vocabulary", text: "「كَمِيرَا」の語源は？", options: ["カマル（月）", "クムラ（暗い部屋）", "キターブ（本）", "カルブ（心）"], correctIndex: 1, explanation: "「Qumrah (暗い部屋)」がカメラの語源と言われています。" },
      { id: 2535, type: "grammar", text: "「証明しました」", options: ["أَثْبَتَ", "نَفَى", "قَالَ", "سَمِعَ"], correctIndex: 0, explanation: "「Athbata (Proved)」です。" },
      // 追加：やや難しい文法問題
      { id: 2536, type: "grammar", text: "「أَنَّ الضَّوْءَ」で、なぜ「Inna」ではなく「Anna」が使われている？", options: ["文頭だから", "動詞の後で文の一部として機能しているから", "疑問文だから", "否定文だから"], correctIndex: 1, explanation: "「Athbata (証明した)」という動詞の後に続き、「〜であることを」という名詞節を作るため、Hamzaが上の「Anna」を使います。" },
      { id: 2537, type: "grammar", text: "「هَذَا الِاخْتِرَاعُ」の文法的関係は？", options: ["主語と述語", "指示代名詞とBadal（同格語）", "イダーファ", "形容詞修飾"], correctIndex: 1, explanation: "指示代名詞（Hādhā）の後に定冠詞（Al）付きの名詞が来ると、それはBadal（同格）となり、「この発明は〜」と一つのまとまりになります。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "أَثْبَتَ ابْنُ الْهَيْثَمِ أَنَّ الضَّوْءَ يَأْتِي مِنَ الْأَشْيَاءِ إِلَى الْعَيْنِ.", japanese: "イブン・アル・ハイサムは、光が物体から目に来ることを証明しました。" },
      { speaker: "ナレーター", arabic: "صَحَّحَ الْمَفَاهِيمَ الْقَدِيمَةَ عَنِ الرُّؤْيَةِ.", japanese: "彼は視覚に関する古い概念を訂正しました。" },
      { speaker: "ナレーター", arabic: "اخْتَرَعَ الْقُمْرَةَ (الْغُرْفَةَ الْمُظْلِمَةَ).", japanese: "彼はクムラ（暗い部屋＝カメラ・オブスクラ）を発明しました。" },
      { speaker: "ナレーター", arabic: "هَذَا الِاخْتِرَاعُ سَاعَدَ فِي تَطْوِيرِ الْكَامِيرَا.", japanese: "この発明はカメラの発展に役立ちました。" },
      { speaker: "ナレーター", arabic: "لَهُ إِسْهَامَاتٌ كَبِيرَةٌ فِي الْفِيزِيَاءِ.", japanese: "彼には物理学における多大な貢献があります。" }
    ]
  },
  {
    id: 254,
    title: "アラビア数字",
    category: "歴史",
    level: "中級",
    contentVoweled: "الْأَرْقَامُ (1, 2, 3) تُسَمَّى الْأَرْقَامَ الْعَرَبِيَّةَ فِي الْغَرْبِ. طَوَّرَهَا الْعُلَمَاءُ الْمُسْلِمُونَ. تَعْتَمِدُ عَلَى عَدَدِ الزَّوَايَا فِي الرَّقْمِ. سَهَّلَتْ هَذِهِ الْأَرْقَامُ عَمَلِيَّةَ الْحِسَابِ. انْتَقَلَتْ إِلَى أُورُوبَّا عَبْرَ الْأَنْدَلُسِ.",
    contentPlain: "الأرقام (1, 2, 3) تسمى الأرقام العربية في الغرب. طورها العلماء المسلمون. تعتمد على عدد الزوايا في الرقم. سهلت هذه الأرقام عملية الحساب. انتقلت إلى أوروبا عبر الأندلس.",
    vocabList: [
      { word: "رَقْم", meaning: "数字/番号" },
      { word: "أَصْل", meaning: "起源" },
      { word: "عَالَم", meaning: "世界" },
      { word: "زَاوِيَة", meaning: "角（アングル）" }, // 追加
      { word: "سَهَّلَ", meaning: "容易にした" } // 追加
    ],
    questions: [
      { id: 2541, type: "reading", text: "世界で使われている数字（1, 2, 3...）の起源は？", options: ["ローマ", "アラブ", "ギリシャ", "中国"], correctIndex: 1, explanation: "「أَصْلُهَا عَرَبِيٌّ」です。" },
      { id: 2542, type: "reading", text: "誰が広めましたか？", options: ["商人", "学者", "王様", "兵士"], correctIndex: 1, explanation: "「الْعُلَمَاءُ الْمُسْلِمُونَ」です。" },
      { id: 2543, type: "reading", text: "特に重要な発明は？", options: ["1", "9", "ゼロ", "100"], correctIndex: 2, explanation: "「الصِّفْر (ゼロ)」の概念です。" },
      { id: 2544, type: "vocabulary", text: "「شَكْل」の意味は？", options: ["色", "形", "音", "数"], correctIndex: 1, explanation: "Shape（形）です。" },
      { id: 2545, type: "grammar", text: "「使います」", options: ["نَسْتَخْدِمُ", "نَأْخُذُ", "نُعْطِي", "نَكْتُبُ"], correctIndex: 0, explanation: "「Nastakhdimu」です。" },
      // 追加：やや難しい文法問題
      { id: 2546, type: "grammar", text: "「تُسَمَّى」の動詞の形は？", options: ["受動態（〜と呼ばれる）", "能動態（〜と呼ぶ）", "命令形", "過去形"], correctIndex: 0, explanation: "現在形の受動態です。「Tu-」で始まり、最後が「-ā」になっています。" },
      { id: 2547, type: "grammar", text: "「سَهَّلَتْ هَذِهِ الْأَرْقَامُ」で動詞が女性形なのは？", options: ["主語「Hādhihi」が女性形だから", "数字が女性だから", "過去形だから", "間違い"], correctIndex: 0, explanation: "主語である指示代名詞「Hādhihi（これら）」が、非理性的複数の名詞（Al-Arqām）を受けて女性単数扱いになっているため、動詞も女性形になります。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "الْأَرْقَامُ (1, 2, 3) تُسَمَّى الْأَرْقَامَ الْعَرَبِيَّةَ فِي الْغَرْبِ.", japanese: "数字(1, 2, 3)は西洋ではアラビア数字と呼ばれています。" },
      { speaker: "ナレーター", arabic: "طَوَّرَهَا الْعُلَمَاءُ الْمُسْلِمُونَ.", japanese: "イスラムの学者たちがそれを発展させました。" },
      { speaker: "ナレーター", arabic: "تَعْتَمِدُ عَلَى عَدَدِ الزَّوَايَا فِي الرَّقْمِ.", japanese: "（その形は）数字の角（アングル）の数に基づいています。" },
      { speaker: "ナレーター", arabic: "سَهَّلَتْ هَذِهِ الْأَرْقَامُ عَمَلِيَّةَ الْحِسَابِ.", japanese: "これらの数字は計算プロセスを容易にしました。" },
      { speaker: "ナレーター", arabic: "انْتَقَلَتْ إِلَى أُورُوبَّا عَبْرَ الْأَنْدَلُسِ.", japanese: "それらはアンダルス（スペイン）を通ってヨーロッパに伝わりました。" }
    ]
  },
  {
    id: 255,
    title: "オンラインショッピング",
    category: "社会",
    level: "中級",
    contentVoweled: "يُفَضِّلُ الْكَثِيرُ مِنَ النَّاسِ الشِّرَاءَ مِنَ الْمَوَاقِعِ. يُمْكِنُكَ مُقَارَنَةُ الْأَسْعَارِ بِسُهُولَةٍ. خِدْمَةُ التَّوْصِيلِ سَرِيعَةٌ وَمُرِيحَةٌ. لَا حَاجَةَ لِلْخُرُوجِ مِنَ الْبَيْتِ. وَلَكِنْ يَجِبُ التَّأَكُّدُ مِنْ مِصْدَاقِيَّةِ الْمَوْقِعِ.",
    contentPlain: "يفضل الكثير من الناس الشراء من المواقع. يمكنك مقارنة الأسعار بسهولة. خدمة التوصيل سريعة ومريحة. لا حاجة للخروج من البيت. ولكن يجب التأكد من مصداقية الموقع.",
    vocabList: [
      { word: "تَسَوُّق", meaning: "買い物" },
      { word: "مَوْقِع", meaning: "サイト/場所" },
      { word: "تَوْصِيل", meaning: "配達" },
      { word: "مُقَارَنَة", meaning: "比較" }, // 追加
      { word: "مِصْدَاقِيَّة", meaning: "信憑性/信頼性" } // 追加
    ],
    questions: [
      { id: 2551, type: "reading", text: "最近の買い物の傾向は？", options: ["店に行く", "オンライン", "物々交換", "作ってもらう"], correctIndex: 1, explanation: "「الشِّرَاءَ مِنَ الْمَوَاقِعِ (サイトから買う)」です。" },
      { id: 2552, type: "reading", text: "なぜ人気ですか？", options: ["高いから", "難しいから", "簡単で速いから", "店がないから"], correctIndex: 2, explanation: "「سَرِيعَة وَمُرِيحَة」です。" },
      { id: 2553, type: "reading", text: "商品はどこに届きますか？", options: ["学校", "店", "家のドアまで", "海"], correctIndex: 2, explanation: "文脈上、家に届きます。" },
      { id: 2554, type: "vocabulary", text: "「تَطْبِيق」の意味は？", options: ["電話", "アプリ/適用", "本", "画面"], correctIndex: 1, explanation: "Application（アプリ）です。" },
      { id: 2555, type: "grammar", text: "「なりました」", options: ["أَصْبَحَ", "كَانَ", "مَا زَالَ", "لَيْسَ"], correctIndex: 0, explanation: "「Aṣbaḥa (Became)」です。" },
      // 追加：やや難しい文法問題
      { id: 2556, type: "grammar", text: "「لَا حَاجَةَ」の「حَاجَةَ」がa段（Fatha）で終わる理由は？", options: ["目的語だから", "絶対否定のLa（La al-Nafiya lil-Jins）の後だから", "禁止のLaだから", "間違い"], correctIndex: 1, explanation: "「〜は全くない」という意味の絶対否定のLa（Lā Nāfiya lil-Jins）の後では、名詞はタンウィーンなしの対格（Manṣūb）になります。" },
      { id: 2557, type: "grammar", text: "「يَجِبُ التَّأَكُّدُ」の「التَّأَكُّدُ」の格は？", options: ["主格（〜が）", "対格（〜を）", "属格（〜の）", "指定語"], correctIndex: 0, explanation: "動詞「Yajibu（必要である）」の主語（Fā'il）なので、主格（Marfū'）となります。「確認すること・が必要である」という構造です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "يُفَضِّلُ الْكَثِيرُ مِنَ النَّاسِ الشِّرَاءَ مِنَ الْمَوَاقِعِ.", japanese: "多くの人がサイトから買うことを好みます。" },
      { speaker: "ナレーター", arabic: "يُمْكِنُكَ مُقَارَنَةُ الْأَسْعَارِ بِسُهُولَةٍ.", japanese: "（あなたは）簡単に価格を比較できます。" },
      { speaker: "ナレーター", arabic: "خِدْمَةُ التَّوْصِيلِ سَرِيعَةٌ وَمُرِيحَةٌ.", japanese: "配達サービスは速くて快適です。" },
      { speaker: "ナレーター", arabic: "لَا حَاجَةَ لِلْخُرُوجِ مِنَ الْبَيْتِ.", japanese: "家から出る必要がありません。" },
      { speaker: "ナレーター", arabic: "وَلَكِنْ يَجِبُ التَّأَكُّدُ مِنْ مِصْدَاقِيَّةِ الْمَوْقِعِ.", japanese: "しかし、サイトの信頼性を確認する必要があります。" }
    ]
  },
  {
    id: 256,
    title: "サウジの宇宙飛行士",
    category: "ニュース",
    level: "中級",
    contentVoweled: "فِي عَامِ 2023، انْطَلَقَتِ الرِّحْلَةُ إِلَى الْفَضَاءِ. شَارَكَتْ أَوَّلُ رَائِدَةِ فَضَاءٍ سُعُودِيَّةٍ. أَجْرَوْا تَجَارِبَ عِلْمِيَّةً مُهِمَّةً. تَوَاصَلُوا مَعَ الطُّلَّابِ فِي الْمَدَارِسِ. هَذَا إِنْجَازٌ كَبِيرٌ لِلْمَمْلَكَةِ.",
    contentPlain: "في عام 2023، انطلقت الرحلة إلى الفضاء. شاركت أول رائدة فضاء سعودية. أجروا تجارب علمية مهمة. تواصلوا مع الطلاب في المدارس. هذا إنجاز كبير للمملكة.",
    vocabList: [
      { word: "فَضَاء", meaning: "宇宙" },
      { word: "رَائِد", meaning: "パイオニア/飛行士" },
      { word: "تَجْرِبَة", meaning: "実験/経験" },
      { word: "إِنْجَاز", meaning: "偉業/成果" }, // 追加
      { word: "تَوَاصَلَ", meaning: "通信した/交流した" } // 追加
    ],
    questions: [
      { id: 2561, type: "reading", text: "誰が宇宙へ行きましたか？", options: ["医者", "サウジの宇宙飛行士", "教師", "エンジニア"], correctIndex: 1, explanation: "「رُوَّاد فَضَاء سُعُودِيُّونَ」です。" },
      { id: 2562, type: "reading", text: "どこへ行きましたか？", options: ["月", "火星", "国際宇宙ステーション (ISS)", "太陽"], correctIndex: 2, explanation: "文脈としてISS（国際宇宙ステーション）へ行きました。" },
      { id: 2563, type: "reading", text: "彼らはそこで何をしましたか？", options: ["寝た", "遊んだ", "科学実験", "食事"], correctIndex: 2, explanation: "「تَجَارِب عِلْمِيَّة (科学実験)」です。" },
      { id: 2564, type: "vocabulary", text: "「أَرْض」の意味は？", options: ["空", "地球/大地", "海", "星"], correctIndex: 1, explanation: "Earth（地球）です。" },
      { id: 2565, type: "grammar", text: "「戻りました」", options: ["عَادُوا", "ذَهَبُوا", "طَارُوا", "نَزَلُوا"], correctIndex: 0, explanation: "「'Ādū (Returned)」です。" },
      // 追加：やや難しい文法問題
      { id: 2566, type: "grammar", text: "「أَجْرَوْا」の動詞の形は？", options: ["過去形・彼ら", "現在形・彼ら", "命令形・あなたたち", "過去形・あなたたち"], correctIndex: 0, explanation: "「Ajrā (行った)」の過去形・三人称複数（彼ら）で、「Ajraw」となります。" },
      { id: 2567, type: "grammar", text: "「أَوَّلُ رَائِدَةِ」の「awwalu」にタンウィーンがつかないのは？", options: ["イダーファの第1要素だから", "女性形だから", "定冠詞がついているから", "間違い"], correctIndex: 0, explanation: "後ろの名詞（Rā'ida）を修飾するイダーファ（所有格構文の形をとる形容）の第1要素となっているため、タンウィーンが落ちます。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "فِي عَامِ 2023، انْطَلَقَتِ الرِّحْلَةُ إِلَى الْفَضَاءِ.", japanese: "2023年、宇宙への旅が出発しました。" },
      { speaker: "ナレーター", arabic: "شَارَكَتْ أَوَّلُ رَائِدَةِ فَضَاءٍ سُعُودِيَّةٍ.", japanese: "初のサウジ女性宇宙飛行士が参加しました。" },
      { speaker: "ナレーター", arabic: "أَجْرَوْا تَجَارِبَ عِلْمِيَّةً مُهِمَّةً.", japanese: "彼らは重要な科学実験を行いました。" },
      { speaker: "ナレーター", arabic: "تَوَاصَلُوا مَعَ الطُّلَّابِ فِي الْمَدَارِسِ.", japanese: "彼らは学校の生徒たちと交信しました。" },
      { speaker: "ナレーター", arabic: "هَذَا إِنْجَازٌ كَبِيرٌ لِلْمَمْلَكَةِ.", japanese: "これは王国にとって大きな成果です。" }
    ]
  },
  {
    id: 257,
    title: "サウジ・グリーン",
    category: "ニュース",
    level: "中級",
    contentVoweled: "تُعَانِي الْأَرْضُ مِنَ التَّغَيُّرِ الْمُنَاخِيِّ. أَطْلَقَتِ الْمَمْلَكَةُ مُبَادَرَةً لِزِرَاعَةِ الْأَشْجَارِ. تَهْدِفُ إِلَى زِرَاعَةِ 10 مِلْيَارَاتِ شَجَرَةٍ. سَتُسَاعِدُ فِي تَقْلِيلِ التَّلَوُّثِ. نَحْوَ مُسْتَقْبَلٍ أَخْضَرَ وَنَظِيفٍ.",
    contentPlain: "تعاني الأرض من التغير المناخي. أطلقت المملكة مبادرة لزراعة الأشجار. تهدف إلى زراعة 10 مليارات شجرة. ستساعد في تقليل التلوث. نحو مستقبل أخضر ونظيف.",
    vocabList: [
      { word: "أَخْضَر", meaning: "緑" },
      { word: "شَجَرَة", meaning: "木" },
      { word: "بِيئَة", meaning: "環境" },
      { word: "تَغَيُّر", meaning: "変化/変動" }, // 追加
      { word: "مُسْتَقْبَل", meaning: "未来" } // 追加
    ],
    questions: [
      { id: 2571, type: "reading", text: "イニシアチブの名前は？", options: ["サウジ・ビジョン", "サウジ・グリーン", "サウジ・デジタル", "サウジ・スポーツ"], correctIndex: 1, explanation: "「مُبَادَرَة السُّعُودِيَّة الْخَضْرَاء」です。" },
      { id: 2572, type: "reading", text: "目的は何ですか？", options: ["お金を稼ぐ", "ビルを建てる", "環境保護", "砂漠を増やす"], correctIndex: 2, explanation: "「حِمَايَة الْبِيئَة (環境保護)」や汚染を減らすことです。" },
      { id: 2573, type: "reading", text: "何を植えますか？", options: ["花", "木（100億本）", "草", "野菜"], correctIndex: 1, explanation: "「زِرَاعَة ... شَجَرَةٍ」です。" },
      { id: 2574, type: "vocabulary", text: "「تَلَوُّث」の意味は？", options: ["汚染", "清潔", "空気", "水"], correctIndex: 0, explanation: "Pollution（汚染）です。" },
      { id: 2575, type: "grammar", text: "「減らします」", options: ["تُقَلِّلُ", "تَزِيدُ", "تُبْقِي", "تَأْخُذُ"], correctIndex: 0, explanation: "「Tuqallilu (Reduce)」です。" },
      // 追加：やや難しい文法問題
      { id: 2576, type: "grammar", text: "「تُعَانِي」の主語は？", options: ["地球 (Al-Arḍ)", "気候", "王国", "木"], correctIndex: 0, explanation: "「Al-Arḍ（地球/大地）」は女性名詞扱いのため、動詞は「Tu'ānī（彼女は苦しむ）」となります。" },
      { id: 2577, type: "grammar", text: "「10 مِلْيَارَاتِ شَجَرَةٍ」で「Shajaratin」が属格（in）なのは？", options: ["「Milyārāt」の後の名詞（Muḍāf Ilayhi）だから", "目的語だから", "前置詞の後だから", "間違い"], correctIndex: 0, explanation: "100や1000、10億などの大きな数の後の数えられる名詞は、単数・属格（Majrūr）になります。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "تُعَانِي الْأَرْضُ مِنَ التَّغَيُّرِ الْمُنَاخِيِّ.", japanese: "地球は気候変動に苦しんでいます。" },
      { speaker: "ナレーター", arabic: "أَطْلَقَتِ الْمَمْلَكَةُ مُبَادَرَةً لِزِرَاعَةِ الْأَشْجَارِ.", japanese: "王国は植林のためのイニシアチブを開始しました。" },
      { speaker: "ナレーター", arabic: "تَهْدِفُ إِلَى زِرَاعَةِ 10 مِلْيَارَاتِ شَجَرَةٍ.", japanese: "（それは）100億本の木を植えることを目指しています。" },
      { speaker: "ナレーター", arabic: "سَتُسَاعِدُ فِي تَقْلِيلِ التَّلَوُّثِ.", japanese: "それは汚染を減らすのに役立つでしょう。" },
      { speaker: "ナレーター", arabic: "نَحْوَ مُسْتَقْبَلٍ أَخْضَرَ وَنَظِيفٍ.", japanese: "緑でクリーンな未来へ向かって。" }
    ]
  },
  {
    id: 258,
    title: "アラビアの香辛料",
    category: "文化",
    level: "中級",
    contentVoweled: "تُعْطِي الْبُهَارَاتُ طَعْمًا مُمَيَّزًا لِلطَّعَامِ. الزَّعْفَرَانُ مِنْ أَغْلَى التَّوَابِلِ. يُوضَعُ الْهَيْلُ مَعَ الْقَهْوَةِ الْعَرَبِيَّةِ. الْكُرْكُمُ يُعْطِي اللَّوْنَ الْأَصْفَرَ. سُوقُ التَّوَابِلِ مَلِيءٌ بِالرَّوَائِحِ الزَّكِيَّةِ.",
    contentPlain: "تعطي البهارات طعما مميزا للطعام. الزعفران من أغلى التوابل. يوضع الهيل مع القهوة العربية. الكركم يعطي اللون الأصفر. سوق التوابل مليء بالروائح الزكية.",
    vocabList: [
      { word: "بُهَارَات", meaning: "スパイス" },
      { word: "طَعْم", meaning: "味" },
      { word: "طَبْخ", meaning: "料理" },
      { word: "هَيْل", meaning: "カルダモン" }, // 追加
      { word: "زَكِيّ", meaning: "良い（香り）/清らかな" } // 追加
    ],
    questions: [
      { id: 2581, type: "reading", text: "アラブ料理の特徴は？", options: ["冷たい", "スパイスが豊富", "甘い", "生で食べる"], correctIndex: 1, explanation: "「الْبُهَارَات الْمُتَنَوِّعَة」や「طَعْمًا مُمَيَّزًا」です。" },
      { id: 2582, type: "reading", text: "「サフラン」はどんなスパイス？", options: ["安い", "黒い", "高価", "辛い"], correctIndex: 2, explanation: "「مِنْ أَغْلَى التَّوَابِلِ (最も高いスパイスの一つ)」です。" },
      { id: 2583, type: "reading", text: "カルダモンは何に使いますか？", options: ["水", "コーヒー", "ジュース", "サラダ"], correctIndex: 1, explanation: "「مَعَ الْقَهْوَةِ الْعَرَبِيَّةِ」に使われます。" },
      { id: 2584, type: "vocabulary", text: "「رَائِحَة」の意味は？", options: ["味", "色", "香り", "音"], correctIndex: 2, explanation: "香りです。" },
      { id: 2585, type: "grammar", text: "「使います」", options: ["نَسْتَخْدِمُ", "نَرْمِي", "نَكْسِرُ", "نَنْسَى"], correctIndex: 0, explanation: "「Nastakhdimu」です。" },
      // 追加：やや難しい文法問題
      { id: 2586, type: "grammar", text: "「يُوضَعُ」の態は？", options: ["能動態", "受動態", "命令形", "使役形"], correctIndex: 1, explanation: "「Waḍa'a (置いた)」の現在形受動態「Yuḍa'u (置かれる)」です。" },
      { id: 2587, type: "grammar", text: "「مَلِيءٌ」の品詞は？", options: ["動詞", "名詞（能動分詞）", "形容詞（Mushabbaha）", "前置詞"], correctIndex: 2, explanation: "「満ちている」という状態を表す形容詞（Sifah Mushabbaha）です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "تُعْطِي الْبُهَارَاتُ طَعْمًا مُمَيَّزًا لِلطَّعَامِ.", japanese: "スパイスは食べ物に独特の味を与えます。" },
      { speaker: "ナレーター", arabic: "الزَّعْفَرَانُ مِنْ أَغْلَى التَّوَابِلِ.", japanese: "サフランは最も高価な香辛料の一つです。" },
      { speaker: "ナレーター", arabic: "يُوضَعُ الْهَيْلُ مَعَ الْقَهْوَةِ الْعَرَبِيَّةِ.", japanese: "カルダモンはアラビアコーヒーに入れられます（置かれます）。" },
      { speaker: "ナレーター", arabic: "الْكُرْكُمُ يُعْطِي اللَّوْنَ الْأَصْفَرَ.", japanese: "ターメリックは黄色い色を与えます。" },
      { speaker: "ナレーター", arabic: "سُوقُ التَّوَابِلِ مَلِيءٌ بِالرَّوَائِحِ الزَّكِيَّةِ.", japanese: "スパイス市場は良い香りで満ちています。" }
    ]
  },
  {
    id: 259,
    title: "ジュハーと川",
    category: "物語",
    level: "中級",
    contentVoweled: "وَقَفَ جُحَا عَلَى ضِفَّةِ النَّهْرِ. رَأَى رَجُلًا فِي الْجِهَةِ الْمُقَابِلَةِ. صَرَخَ جُحَا: كَيْفَ أَذْهَبُ إِلَى الضِّفَّةِ الْأُخْرَى؟ فَأَجَابَهُ الرَّجُلُ: يَا أَحْمَقُ، أَنْتَ فِي الضِّفَّةِ الْأُخْرَى!",
    contentPlain: "وقف جحا على ضفة النهر. رأى رجلا في الجهة المقابلة. صرخ جحا: كيف أذهب إلى الضفة الأخرى؟ فأجابه الرجل: يا أحمق، أنت في الضفة الأخرى!",
    vocabList: [
      { word: "نَهْر", meaning: "川" },
      { word: "عُبُور", meaning: "渡ること" },
      { word: "ضِفَّة", meaning: "岸" },
      { word: "أَحْمَق", meaning: "愚か者" }, // 追加
      { word: "مُقَابِل", meaning: "向かいの/反対の" } // 追加
    ],
    questions: [
      { id: 2591, type: "reading", text: "ジュハーは何をしたかった？", options: ["泳ぐ", "川を渡る", "釣り", "寝る"], correctIndex: 1, explanation: "「أَذْهَبُ إِلَى الضِّفَّةِ الْأُخْرَى」と尋ねているので、渡りたかったのです。" },
      { id: 2592, type: "reading", text: "彼は誰に聞きましたか？", options: ["魚", "向こう岸の人", "妻", "自分"], correctIndex: 1, explanation: "「رَجُلًا فِي الْجِهَةِ الْمُقَابِلَةِ」です。" },
      { id: 2593, type: "reading", text: "ジュハーの質問は？", options: ["元気？", "どうやって向こうへ行く？", "名前は？", "何時？"], correctIndex: 1, explanation: "「كَيْفَ أَذْهَبُ إِلَى الضِّفَّةِ الْأُخْرَى؟」です。" },
      { id: 2594, type: "reading", text: "男の答えは？", options: ["泳げ", "ボートを使え", "君は既に向こう側にいるよ", "知らない"], correctIndex: 2, explanation: "向こう岸の人から見れば、ジュハーがいる場所こそが「向こう岸」だというトンチです。" },
      { id: 2595, type: "grammar", text: "「どうやって」", options: ["كَيْفَ", "مَتَى", "أَيْنَ", "مَاذَا"], correctIndex: 0, explanation: "「Kayfa」です。" },
      // 追加：やや難しい文法問題
      { id: 2596, type: "grammar", text: "「يَا أَحْمَقُ」の「Aḥmaqu」がタンウィーンなしの理由は？", options: ["呼びかけ（Munādā）の単数名詞だから", "動詞だから", "所有格だから", "間違い"], correctIndex: 0, explanation: "呼びかけ詞「Yā」の後の単数名詞（Munādā Mufrad）は、主格の母音（Damma）一つだけをつけます（Mabnī 'alā al-Damm）。" },
      { id: 2597, type: "grammar", text: "「أَذْهَبُ」の主語は？", options: ["彼", "あなた", "私", "私たち"], correctIndex: 2, explanation: "現在形で「Hamza（ア）」で始まる動詞は、一人称単数「私」が主語です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "وَقَفَ جُحَا عَلَى ضِفَّةِ النَّهْرِ.", japanese: "ジュハーは川岸に立ちました。" },
      { speaker: "ナレーター", arabic: "رَأَى رَجُلًا فِي الْجِهَةِ الْمُقَابِلَةِ.", japanese: "彼は反対側に男を見ました。" },
      { speaker: "ナレーター", arabic: "صَرَخَ جُحَا: كَيْفَ أَذْهَبُ إِلَى الضِّفَّةِ الْأُخْرَى؟", japanese: "ジュハーは叫びました。「どうやって向こう岸に行けばいい？」" },
      { speaker: "ナレーター", arabic: "فَأَجَابَهُ الرَّجُلُ:", japanese: "すると男は答えました。" },
      { speaker: "ナレーター", arabic: "يَا أَحْمَقُ، أَنْتَ فِي الضِّفَّةِ الْأُخْرَى!", japanese: "「バカだなあ、君はもう（私から見て）向こう岸にいるじゃないか！」" }
    ]
  },
  {
    id: 260,
    title: "ジュハーと鍋",
    category: "物語",
    level: "中級",
    contentVoweled: "قَالَ جُحَا لِجَارِهِ: إِنَّ قِدْرَكَ وَلَدَتْ. فَرِحَ الْجَارُ وَأَخَذَ الْقِدْرَ الصَّغِيرَ. فِي الْمَرَّةِ الثَّانِيَةِ، أَخَذَ جُحَا الْقِدْرَ وَلَمْ يُعِدْهُ. سَأَلَهُ الْجَارُ عَنْهُ، فَقَالَ جُحَا: الْقِدْرُ مَاتَتْ. قَالَ الْجَارُ: كَيْفَ تَمُوتُ؟ قَالَ: مَنْ تَلِدُ تَمُوتُ.",
    contentPlain: "قال جحا لجاره: إن قدرك ولدت. فرح الجار وأخذ القدر الصغير. في المرة الثانية، أخذ جحا القدر ولم يعده. سأله الجار عنه، فقال جحا: القدر ماتت. قال الجار: كيف تموت؟ قال: من تلد تموت.",
    vocabList: [
      { word: "قِدْر", meaning: "鍋" },
      { word: "جَار", meaning: "隣人" },
      { word: "وَلَدَتْ", meaning: "産んだ" },
      { word: "فَرِحَ", meaning: "喜んだ" }, // 追加
      { word: "مَاتَ", meaning: "死んだ" } // 追加
    ],
    questions: [
      { id: 2601, type: "reading", text: "ジュハーは隣人から何を借りましたか？", options: ["お金", "鍋", "ロバ", "皿"], correctIndex: 1, explanation: "「قِدْرًا (鍋)」です。" },
      { id: 2602, type: "reading", text: "返すときに何を付けましたか？", options: ["お金", "小さい鍋", "蓋", "料理"], correctIndex: 1, explanation: "「الْقِدْر الصَّغِير (小さい鍋)」を付けました。" },
      { id: 2603, type: "reading", text: "ジュハーは何と言い訳しましたか？", options: ["壊れた", "鍋が子供を産んだ", "忘れた", "盗まれた"], correctIndex: 1, explanation: "「وَلَدَتْ (出産した)」と言いました。" },
      { id: 2604, type: "reading", text: "2回目に借りた鍋はどうなりましたか？", options: ["返した", "死んだと言った", "売った", "なくした"], correctIndex: 1, explanation: "「mātat (死んだ)」と言って返しませんでした。" },
      { id: 2605, type: "grammar", text: "「借りました」", options: ["اسْتَعَارَ", "أَعَارَ", "بَاعَ", "اشْتَرَى"], correctIndex: 0, explanation: "「Ista'āra」です。" },
      // 追加：やや難しい文法問題
      { id: 2606, type: "grammar", text: "「لَمْ يُعِدْهُ」で「yu'id」がスクーン（d）で終わる理由は？", options: ["否定のLam（Jussive）の後だから", "過去形だから", "命令形だから", "接続法だから"], correctIndex: 0, explanation: "否定辞「Lam」の後の現在形は要求形（Majzūm）になり、動詞「A'āda - Yu'īdu」の長母音が短縮されて「Yu'id」になります。" },
      { id: 2607, type: "grammar", text: "「مَنْ تَلِدُ تَمُوتُ」の文の構造は？", options: ["条件文（Sharṭ）", "疑問文", "感嘆文", "否定文"], correctIndex: 0, explanation: "「Man（〜する者は）」を使った条件文です。「産む者は（誰であれ）、死ぬ」という意味です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "قَالَ جُحَا لِجَارِهِ: إِنَّ قِدْرَكَ وَلَدَتْ.", japanese: "ジュハーは隣人に「あなたの鍋が子供を産みました」と言いました。" },
      { speaker: "ナレーター", arabic: "فَرِحَ الْجَارُ وَأَخَذَ الْقِدْرَ الصَّغِيرَ.", japanese: "隣人は喜んで小さい鍋を受け取りました。" },
      { speaker: "ナレーター", arabic: "فِي الْمَرَّةِ الثَّانِيَةِ، أَخَذَ جُحَا الْقِدْرَ وَلَمْ يُعِدْهُ.", japanese: "2回目、ジュハーは鍋を持っていき、返しませんでした。" },
      { speaker: "ナレーター", arabic: "سَأَلَهُ الْجَارُ عَنْهُ، فَقَالَ جُحَا: الْقِدْرُ مَاتَتْ.", japanese: "隣人が尋ねると、ジュハーは「鍋は死にました」と言いました。" },
      { speaker: "ナレーター", arabic: "قَالَ الْجَارُ: كَيْفَ تَمُوتُ؟ قَالَ: مَنْ تَلِدُ تَمُوتُ.", japanese: "隣人「どうして死ぬんだ？」ジュハー「産むものは死ぬのです。」" }
    ]
  },
  {
    id: 261,
    title: "イブン・ハルドゥーン",
    category: "歴史",
    level: "中級",
    contentVoweled: "وُلِدَ ابْنُ خَلْدُونَ فِي تُونِسَ. كَتَبَ كِتَابَهُ الْمَشْهُورَ 'الْمُقَدِّمَةَ'. دَرَسَ أَحْوَالَ الدُّوَلِ وَأَسْبَابَ سُقُوطِهَا. يُعْتَبَرُ أَبَا التَّارِيخِ الْحَدِيثِ. أَفْكَارُهُ مَا زَالَتْ تُدَرَّسُ الْيَوْمَ.",
    contentPlain: "ولد ابن خلدون في تونس. كتب كتابه المشهور 'المقدمة'. درس أحوال الدول وأسباب سقوطها. يعتبر أبا التاريخ الحديث. أفكاره ما زالت تدرس اليوم.",
    vocabList: [
      { word: "تَارِيخ", meaning: "歴史" },
      { word: "مُقَدِّمَة", meaning: "序章/プロレゴメナ" },
      { word: "مُجْتَمَع", meaning: "社会" },
      { word: "سُقُوط", meaning: "没落/落下" }, // 追加
      { word: "حَدِيث", meaning: "近代の/新しい" } // 追加
    ],
    questions: [
      { id: 2611, type: "reading", text: "イブン・ハルドゥーンは何の創始者？", options: ["数学", "社会学", "医学", "天文学"], correctIndex: 1, explanation: "「عِلْمِ الِاجْتِمَاعِ (社会学)」の父とされています（本文文脈：社会の様子を研究）。" },
      { id: 2612, type: "reading", text: "彼の有名な著作は？", options: ["カノン", "マカマート", "ムカッディマ（序説）", "ルバイヤート"], correctIndex: 2, explanation: "「الْمُقَدِّمَة (The Muqaddimah)」です。" },
      { id: 2613, type: "reading", text: "彼は何を研究しましたか？", options: ["星の動き", "人々の性質と歴史", "病気", "数式"], correctIndex: 1, explanation: "「أَحْوَالَ الدُّوَلِ (国家の状態)」や歴史を研究しました。" },
      { id: 2614, type: "vocabulary", text: "「بَشَر」の意味は？", options: ["動物", "人間", "植物", "神"], correctIndex: 1, explanation: "Humans（人間）です。" },
      { id: 2615, type: "grammar", text: "「勉強しました」", options: ["دَرَسَ", "كَتَبَ", "قَرَأَ", "ذَهَبَ"], correctIndex: 0, explanation: "「Darasa」です。" },
      // 追加：やや難しい文法問題
      { id: 2616, type: "grammar", text: "「وُلِدَ」の動詞の形は？", options: ["能動態（産んだ）", "受動態（産まれた）", "命令形", "現在形"], correctIndex: 1, explanation: "「Walada（産んだ）」の受動態「Wulida（産まれた）」です。" },
      { id: 2617, type: "grammar", text: "「أَبَا التَّارِيخِ」で「Abā」が対格（Alif）になっている理由は？", options: ["主語だから", "受動態の第2目的語（または述語）だから", "所有格だから", "間違い"], correctIndex: 1, explanation: "「Yu'tabaru（〜と見なされる）」という受動態の動詞の補語（述語的役割）として対格になっています。「Abū」は五つの名詞の一つなので、対格で「Abā」となります。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "وُلِدَ ابْنُ خَلْدُونَ فِي تُونِسَ.", japanese: "イブン・ハルドゥーンはチュニジアで生まれました。" },
      { speaker: "ナレーター", arabic: "كَتَبَ كِتَابَهُ الْمَشْهُورَ 'الْمُقَدِّمَةَ'.", japanese: "彼は有名な本『ムカッディマ』を書きました。" },
      { speaker: "ナレーター", arabic: "دَرَسَ أَحْوَالَ الدُّوَلِ وَأَسْبَابَ سُقُوطِهَا.", japanese: "彼は国家の状態とその没落の原因を研究しました。" },
      { speaker: "ナレーター", arabic: "يُعْتَبَرُ أَبَا التَّارِيخِ الْحَدِيثِ.", japanese: "彼は近代歴史学の父とみなされています。" },
      { speaker: "ナレーター", arabic: "أَفْكَارُهُ مَا زَالَتْ تُدَرَّسُ الْيَوْمَ.", japanese: "彼の思想は今日でも教えられています（研究されています）。" }
    ]
  },
  {
    id: 262,
    title: "ナツメヤシの木",
    category: "文化",
    level: "中級",
    contentVoweled: "تَتَحَمَّلُ النَّخْلَةُ حَرَارَةَ الصَّحْرَاءِ. كُلُّ جُزْءٍ مِنْهَا مُفِيدٌ. نَأْكُلُ ثِمَارَهَا وَنَصْنَعُ الْحَصِيرَ مِنْ سَعْفِهَا. النَّخْلَةُ مَوْجُودَةٌ فِي شِعَارِ الْمَمْلَكَةِ. إِنَّهَا شَجَرَةٌ مُبَارَكَةٌ.",
    contentPlain: "تتحمل النخلة حرارة الصحراء. كل جزء منها مفيد. نأكل ثمارها ونصنع الحصير من سعفها. النخلة موجودة في شعار المملكة. إنها شجرة مباركة.",
    vocabList: [
      { word: "نَخْلَة", meaning: "ナツメヤシの木" },
      { word: "شِعَار", meaning: "エンブレム/紋章" },
      { word: "غِذَاء", meaning: "食料" },
      { word: "حَصِير", meaning: "ムシロ/マット" }, // 追加
      { word: "سَعْف", meaning: "ヤシの葉" } // 追加
    ],
    questions: [
      { id: 2621, type: "reading", text: "ナツメヤシは何の象徴ですか？", options: ["戦争", "寛大さ（おもてなし）", "悲しみ", "寒さ"], correctIndex: 1, explanation: "一般的にサウジでは「寛大さ（Karam）」の象徴とされます。" },
      { id: 2622, type: "reading", text: "サウジの国章にあるものは？", options: ["鷹", "ラクダ", "2本の剣とナツメヤシ", "ライオン"], correctIndex: 2, explanation: "「سَيْفَانِ وَنَخْلَةٌ」です（本文では「شِعَارِ الْمَمْلَكَةِ」と言及）。" },
      { id: 2623, type: "reading", text: "ナツメヤシから何が得られますか？", options: ["リンゴ", "デーツ（実）と葉", "オリーブ", "バナナ"], correctIndex: 1, explanation: "「ثِمَارَهَا (その実)」と「سَعْفِهَا (その葉)」が役立ちます。" },
      { id: 2624, type: "vocabulary", text: "「صَحْرَاء」の意味は？", options: ["海", "砂漠", "森", "山"], correctIndex: 1, explanation: "Desert（砂漠）です。" },
      { id: 2625, type: "grammar", text: "「耐えます」", options: ["تَتَحَمَّلُ", "تَمُوتُ", "تَشْرَبُ", "تَأْكُلُ"], correctIndex: 0, explanation: "「Tataḥammalu (Endure)」です。" },
      // 追加：やや難しい文法問題
      { id: 2626, type: "grammar", text: "「كُلُّ جُزْءٍ」で「Juz'in」が属格（in）なのは？", options: ["Kulluの後の名詞は常に属格だから", "形容詞だから", "主語だから", "間違い"], correctIndex: 0, explanation: "「Kullu (Every/All)」の後の名詞は、イダーファ構造の第2要素として属格（Majrūr）になります。" },
      { id: 2627, type: "grammar", text: "「مُبَارَكَةٌ」の語根と派生形は？", options: ["B-R-K (Form III)", "B-R-K (Form I)", "T-R-K (Form V)", "M-L-K (Form IV)"], correctIndex: 0, explanation: "語根 B-R-K の第3形「Bāraka（祝福した）」の受動分詞（Ism Maf'ūl）が「Mubārak」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "تَتَحَمَّلُ النَّخْلَةُ حَرَارَةَ الصَّحْرَاءِ.", japanese: "ナツメヤシは砂漠の暑さに耐えます。" },
      { speaker: "ナレーター", arabic: "كُلُّ جُزْءٍ مِنْهَا مُفِيدٌ.", japanese: "そのすべての部分が役に立ちます。" },
      { speaker: "ナレーター", arabic: "نَأْكُلُ ثِمَارَهَا وَنَصْنَعُ الْحَصِيرَ مِنْ سَعْفِهَا.", japanese: "私たちはその実を食べ、葉からマットを作ります。" },
      { speaker: "ナレーター", arabic: "النَّخْلَةُ مَوْجُودَةٌ فِي شِعَارِ الْمَمْلَكَةِ.", japanese: "ナツメヤシは王国の紋章にあります。" },
      { speaker: "ナレーター", arabic: "إِنَّهَا شَجَرَةٌ مُبَارَكَةٌ.", japanese: "それは祝福された木です。" }
    ]
  },
  {
    id: 263,
    title: "死海",
    category: "自然",
    level: "中級",
    contentVoweled: "يَقَعُ الْبَحْرُ الْمَيِّتُ بَيْنَ الْأُرْدُنِّ وَفِلَسْطِينَ. مِيَاهُهُ مَالِحَةٌ جِدًّا. لِذَلِكَ لَا تَغْرَقُ فِيهِ الْأَجْسَامُ، بَلْ تَطْفُو. طِينُ الْبَحْرِ الْمَيِّتِ مُفِيدٌ لِلْجِلْدِ. يَأْتِي السُّيَّاحُ إِلَيْهِ لِلْعِلَاجِ.",
    contentPlain: "يقع البحر الميت بين الأردن وفلسطين. مياهه مالحة جدا. لذلك لا تغرق فيه الأجسام، بل تطفو. طين البحر الميت مفيد للجلد. يأتي السياح إليه للعلاج.",
    vocabList: [
      { word: "مِلْح", meaning: "塩" },
      { word: "مَيِّت", meaning: "死んだ" },
      { word: "عِلَاج", meaning: "治療" },
      { word: "يَطْفُو", meaning: "浮く" }, // 追加
      { word: "جِلْد", meaning: "肌/皮膚" } // 追加
    ],
    questions: [
      { id: 2631, type: "reading", text: "死海の特徴は？", options: ["世界で一番高い場所", "世界で一番低い場所", "一番深い海", "一番大きい湖"], correctIndex: 1, explanation: "一般知識として「أَخْفَضُ بُقْعَةٍ」として知られます（ID 263の元データ）。" },
      { id: 2632, type: "reading", text: "なぜ「死海」と呼ばれますか？", options: ["色が黒いから", "幽霊が出るから", "生き物が住めないから", "動かないから"], correctIndex: 2, explanation: "塩分が高すぎて魚などが生きられないためです。" },
      { id: 2633, type: "reading", text: "水はどうなっていますか？", options: ["甘い", "非常に塩辛い", "酸っぱい", "熱い"], correctIndex: 1, explanation: "「مَالِحَةٌ جِدًّا (非常に塩辛い)」です。" },
      { id: 2634, type: "vocabulary", text: "「طِين」の意味は？", options: ["水", "泥", "砂", "岩"], correctIndex: 1, explanation: "Mud（泥）です。" },
      { id: 2635, type: "grammar", text: "「浮きます」", options: ["يَطْفُو", "يَغْرَقُ", "يَسْبَحُ", "يَطِيرُ"], correctIndex: 0, explanation: "「Yaṭfū (Float)」です。" },
      // 追加：やや難しい文法問題
      { id: 2636, type: "grammar", text: "「مَالِحَةٌ」が女性形なのはなぜ？", options: ["「Miyāh (水)」が非理性的複数だから", "塩が女性名詞だから", "海が女性名詞だから", "間違い"], correctIndex: 0, explanation: "「Mā' (水)」の複数形「Miyāh」は非理性的複数なので、形容詞は女性単数形で受けます。" },
      { id: 2637, type: "grammar", text: "「بَلْ」の機能は？", options: ["追加（そして）", "訂正・対比（ではなく、むしろ）", "理由（なぜなら）", "疑問"], correctIndex: 1, explanation: "「Bal」は前の否定を打ち消して新しい情報を提示する「〜ではなく、むしろ〜だ」という役割を持ちます。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "يَقَعُ الْبَحْرُ الْمَيِّتُ بَيْنَ الْأُرْدُنِّ وَفِلَسْطِينَ.", japanese: "死海はヨルダンとパレスチナの間にあります。" },
      { speaker: "ナレーター", arabic: "مِيَاهُهُ مَالِحَةٌ جِدًّا.", japanese: "その水は非常に塩辛いです。" },
      { speaker: "ナレーター", arabic: "لِذَلِكَ لَا تَغْرَقُ فِيهِ الْأَجْسَامُ، بَلْ تَطْفُو.", japanese: "そのため、体（物体）は沈まずに、むしろ浮きます。" },
      { speaker: "ナレーター", arabic: "طِينُ الْبَحْرِ الْمَيِّتِ مُفِيدٌ لِلْجِلْدِ.", japanese: "死海の泥は肌に良いです。" },
      { speaker: "ナレーター", arabic: "يَأْتِي السُّيَّاحُ إِلَيْهِ لِلْعِلَاجِ.", japanese: "観光客は治療のためにそこへ来ます。" }
    ]
  },
  {
    id: 264,
    title: "笑顔は施し",
    category: "文化",
    level: "中級",
    contentVoweled: "الِابْتِسَامَةُ لُغَةٌ عَالَمِيَّةٌ. لَا تُكَلِّفُ شَيْئًا وَلَكِنَّهَا تَعْنِي الْكَثِيرَ. تَفْتَحُ الْقُلُوبَ الْمُغْلَقَةَ. حَثَّنَا الْإِسْلَامُ عَلَى الْبَشَاشَةِ. اِبْدَأْ يَوْمَكَ بِابْتِسَامَةٍ.",
    contentPlain: "الابتسامة لغة عالمية. لا تكلف شيئا ولكنها تعني الكثير. تفتح القلوب المغلقة. حثنا الإسلام على البشاشة. ابدأ يومك بابتسامة.",
    vocabList: [
      { word: "اِبْتِسَامَة", meaning: "笑顔/微笑み" },
      { word: "صَدَقَة", meaning: "施し/チャリティ" },
      { word: "وَجْه", meaning: "顔" },
      { word: "بَشَاشَة", meaning: "にこやかさ/愛想の良さ" }, // 追加
      { word: "قَلْب", meaning: "心" } // 追加
    ],
    questions: [
      { id: 2641, type: "reading", text: "預言者の言葉によると、笑顔は何ですか？", options: ["罪", "施し（チャリティ）", "義務", "仕事"], correctIndex: 1, explanation: "ハディース「Tabassumuka ... ṣadaqa」より。" },
      { id: 2642, type: "reading", text: "笑顔は人々に何を与えますか？", options: ["お金", "幸福と愛", "悲しみ", "怒り"], correctIndex: 1, explanation: "「تَعْنِي الْكَثِيرَ (多くを意味する)」や心をオープンにする効果があります。" },
      { id: 2643, type: "reading", text: "それはコストがかかりますか？", options: ["はい、高い", "いいえ、無料", "少しだけ", "税金がかかる"], correctIndex: 1, explanation: "「لَا تُكَلِّفُ شَيْئًا (何もコストがかからない)」です。" },
      { id: 2644, type: "vocabulary", text: "「قَلْب」の意味は？", options: ["心", "頭", "目", "手"], correctIndex: 0, explanation: "Heart（心）です。" },
      { id: 2645, type: "grammar", text: "「開きます」", options: ["يَفْتَحُ", "يُغْلِقُ", "يَكْسِرُ", "يَبْنِي"], correctIndex: 0, explanation: "「Yaftaḥu」です。" },
      // 追加：やや難しい文法問題
      { id: 2646, type: "grammar", text: "「تَبَسُّمُكَ」の文法的構造は？", options: ["動名詞（Masdar）＋代名詞", "動詞（過去）＋代名詞", "動詞（現在）＋代名詞", "命令形"], correctIndex: 0, explanation: "「Tabassama」の動名詞「Tabassum」に、所有の代名詞「ka」がついた形です。" },
      { id: 2647, type: "grammar", text: "「اِبْدَأْ」のハムザの種類は？", options: ["Hamzat Waṣl (接続ハムザ)", "Hamzat Qaṭ' (切断ハムザ)", "Madda", "ない"], correctIndex: 0, explanation: "三語根動詞（Thulāthī）の命令形の最初のハムザは「Hamzat Waṣl（発音されない場合がある）」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "الِابْتِسَامَةُ لُغَةٌ عَالَمِيَّةٌ.", japanese: "笑顔は世界共通の言語です。" },
      { speaker: "ナレーター", arabic: "لَا تُكَلِّفُ شَيْئًا وَلَكِنَّهَا تَعْنِي الْكَثِيرَ.", japanese: "コストはかかりませんが、多くのことを意味します。" },
      { speaker: "ナレーター", arabic: "تَفْتَحُ الْقُلُوبَ الْمُغْلَقَةَ.", japanese: "それは閉ざされた心を開きます。" },
      { speaker: "ナレーター", arabic: "حَثَّنَا الْإِسْلَامُ عَلَى الْبَشَاشَةِ.", japanese: "イスラムは私たちににこやかであることを勧めました。" },
      { speaker: "ナレーター", arabic: "اِبْدَأْ يَوْمَكَ بِابْتِسَامَةٍ.", japanese: "笑顔で一日を始めなさい。" }
    ]
  },
  {
    id: 265,
    title: "断食の健康効果",
    category: "健康",
    level: "中級",
    contentVoweled: "الصِّيَامُ لَيْسَ فَقَطْ عِبَادَةً، بَلْ عِلَاجٌ. يُسَاعِدُ عَلَى حَرْقِ الدُّهُونِ. يُقَوِّي الْإِرَادَةَ وَالصَّبْرَ. يُجَدِّدُ خَلَايَا الْجِسْمِ. صُومُوا تَصِحُّوا.",
    contentPlain: "الصيام ليس فقط عبادة، بل علاج. يساعد على حرق الدهون. يقوي الإرادة والصبر. يجدد خلايا الجسم. صوموا تصحوا.",
    vocabList: [
      { word: "صِيَام", meaning: "断食" },
      { word: "جِسْم", meaning: "体" },
      { word: "سُمُوم", meaning: "毒素" },
      { word: "إِرَادَة", meaning: "意志" }, // 追加
      { word: "عِلَاج", meaning: "治療" } // 追加
    ],
    questions: [
      { id: 2651, type: "reading", text: "断食は体にどう作用しますか？", options: ["弱くする", "健康にする/毒を出す", "太らせる", "病気にする"], correctIndex: 1, explanation: "「يُسَاعِدُ عَلَى حَرْقِ الدُّهُونِ (脂肪燃焼)」や「يُجَدِّدُ خَلَايَا (細胞再生)」です。" },
      { id: 2652, type: "reading", text: "胃にとってはどうですか？", options: ["疲れさせる", "休ませる", "傷つける", "満たす"], correctIndex: 1, explanation: "胃を休ませる効果があります（ID 265 元データより）。" },
      { id: 2653, type: "reading", text: "有名な格言は？", options: ["食べて健康に", "寝て健康に", "断食して健康になれ", "走って健康に"], correctIndex: 2, explanation: "「صُومُوا تَصِحُّوا (断食せよ、健康になるであろう)」です。" },
      { id: 2654, type: "vocabulary", text: "「إِرَادَة」の意味は？", options: ["弱さ", "意志", "食事", "睡眠"], correctIndex: 1, explanation: "Willpower（意志）です。" },
      { id: 2655, type: "grammar", text: "「強めます」", options: ["يُقَوِّي", "يُضْعِفُ", "يَكْسِرُ", "يَنْسَى"], correctIndex: 0, explanation: "「Yuqawwī」です。" },
      // 追加：やや難しい文法問題
      { id: 2656, type: "grammar", text: "「صُومُوا تَصِحُّوا」の「Taṣiḥḥū」が「ū (Nūnなし)」で終わる理由は？", options: ["命令形の答え（Jawāb al-Ṭalab）として要求形（Majzūm）だから", "過去形だから", "主格だから", "間違い"], correctIndex: 0, explanation: "「断食せよ（命令）」に対する結果「（そうすれば）健康になる」の部分は、要求形（Jussive）となり、Nūnが脱落します。" },
      { id: 2657, type: "grammar", text: "「لَيْسَ」は文法的に何？", options: ["否定の粒子（Harf）", "不完全動詞（Fi'l Nāqiṣ）", "名詞", "前置詞"], correctIndex: 1, explanation: "Laysaは「Kāna」の姉妹（Akhawāt Kāna）で、否定の意味を持つ不完全動詞です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "الصِّيَامُ لَيْسَ فَقَطْ عِبَادَةً، بَلْ عِلَاجٌ.", japanese: "断食は崇拝行為だけでなく、治療でもあります。" },
      { speaker: "ナレーター", arabic: "يُسَاعِدُ عَلَى حَرْقِ الدُّهُونِ.", japanese: "脂肪の燃焼を助けます。" },
      { speaker: "ナレーター", arabic: "يُقَوِّي الْإِرَادَةَ وَالصَّبْرَ.", japanese: "意志と忍耐を強めます。" },
      { speaker: "ナレーター", arabic: "يُجَدِّدُ خَلَايَا الْجِسْمِ.", japanese: "体の細胞を再生させます。" },
      { speaker: "ナレーター", arabic: "صُومُوا تَصِحُّوا.", japanese: "断食しなさい、そうすれば健康になります。" }
    ]
  },
  {
    id: 266,
    title: "ラクダレース",
    category: "文化",
    level: "中級",
    contentVoweled: "تُقَامُ سِبَاقَاتُ الْهَجْنِ فِي مَيَادِينَ خَاصَّةٍ. تَرْكُضُ الْإِبِلُ بِسُرْعَةٍ كَبِيرَةٍ. يُسْتَخْدَمُ الرُّوبُوتُ الرَّاكِبُ بَدَلًا مِنَ الْأَطْفَالِ. الْجَوَائِزُ تَكُونُ قَيِّمَةً جِدًّا. إِنَّهَا مَهْرَجَانٌ لِلتُّرَاثِ.",
    contentPlain: "تقام سباقات الهجن في ميادين خاصة. تركض الإبل بسرعة كبيرة. يستخدم الروبوت الراكب بدلا من الأطفال. الجوائز تكون قيمة جدا. إنها مهرجان للتراث.",
    vocabList: [
      { word: "هَجْن", meaning: "競走用ラクダ" },
      { word: "مِضْمَار", meaning: "トラック/コース" },
      { word: "جَائِزَة", meaning: "賞品/賞金" },
      { word: "إِبِل", meaning: "ラクダ（集合名詞）" }, // 追加
      { word: "تُرَاث", meaning: "遺産/伝統" } // 追加
    ],
    questions: [
      { id: 2661, type: "reading", text: "「ヘジン」とは何ですか？", options: ["馬", "競走用ラクダ", "車", "バイク"], correctIndex: 1, explanation: "「سِبَاق الْهَجْن」はラクダレースのことです。" },
      { id: 2662, type: "reading", text: "どこで人気ですか？", options: ["ヨーロッパ", "湾岸諸国", "アジア", "アメリカ"], correctIndex: 1, explanation: "湾岸諸国（Al-Khalīj）で有名です。" },
      { id: 2663, type: "reading", text: "最近は何がラクダに乗りますか？", options: ["子供", "ロボット", "猿", "誰も乗らない"], correctIndex: 1, explanation: "「الرُّوبُوت الرَّاكِب (ロボット騎手)」です。" },
      { id: 2664, type: "vocabulary", text: "「سَرِيع」の意味は？", options: ["遅い", "速い", "重い", "高い"], correctIndex: 1, explanation: "Fast（速い）です。" },
      { id: 2665, type: "grammar", text: "「競争します」", options: ["يَتَنَافَسُ", "يَلْعَبُ", "يَنَامُ", "يَجْلِسُ"], correctIndex: 0, explanation: "「Yatanāfasu」です。" },
      // 追加：やや難しい文法問題
      { id: 2666, type: "grammar", text: "「تَرْكُضُ الْإِبِلُ」で動詞が女性形なのは？", options: ["ラクダ（Ibil）が女性名詞扱いだから", "ラクダがメスだから", "複数形だから", "間違い"], correctIndex: 0, explanation: "「Ibil（ラクダの群れ）」は集合名詞であり、文法的に女性単数として扱われることが一般的です。" },
      { id: 2667, type: "grammar", text: "「بَدَلًا مِنَ」の「Badalan」が対格（an）なのは？", options: ["副詞的用法（Tamyīz/Hāl/Maf'ūl Muṭlaq的）", "主語だから", "前置詞の後だから", "間違い"], correctIndex: 0, explanation: "「〜の代わりに」という意味で、状況や様態を表す副詞的な用法（Maf'ūl Muṭlaqの代用など諸説あり）として対格になります。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "تُقَامُ سِبَاقَاتُ الْهَجْنِ فِي مَيَادِينَ خَاصَّةٍ.", japanese: "ラクダレースは特別な競技場で行われます。" },
      { speaker: "ナレーター", arabic: "تَرْكُضُ الْإِبِلُ بِسُرْعَةٍ كَبِيرَةٍ.", japanese: "ラクダは非常に速いスピードで走ります。" },
      { speaker: "ナレーター", arabic: "يُسْتَخْدَمُ الرُّوبُوتُ الرَّاكِبُ بَدَلًا مِنَ الْأَطْفَالِ.", japanese: "子供の代わりにロボット騎手が使われます。" },
      { speaker: "ナレーター", arabic: "الْجَوَائِزُ تَكُونُ قَيِّمَةً جِدًّا.", japanese: "賞品は非常に高価です。" },
      { speaker: "ナレーター", arabic: "إِنَّهَا مَهْرَجَانٌ لِلتُّرَاثِ.", japanese: "それは遺産のフェスティバルです。" }
    ]
  },
  {
    id: 267,
    title: "アル・ジャザリー",
    category: "歴史",
    level: "中級",
    contentVoweled: "عَاشَ الْجَزَرِيُّ فِي الْعَصْرِ الذَّهَبِيِّ لِلْإِسْلَامِ. صَمَّمَ آلَاتٍ لِرَفْعِ الْمَاءِ. اخْتَرَعَ سَاعَةَ الْفِيلِ الشَّهِيرَةَ. اسْتَخْدَمَ الدُّمَى الْمُتَحَرِّكَةَ. كِتَابُهُ مَرْجِعٌ فِي الْهَنْدَسَةِ.",
    contentPlain: "عاش الجزري في العصر الذهبي للإسلام. صمم آلات لرفع الماء. اخترع ساعة الفيل الشهيرة. استخدم الدمى المتحركة. كتابه مرجع في الهندسة.",
    vocabList: [
      { word: "مُخْتَرِع", meaning: "発明家" },
      { word: "سَاعَة", meaning: "時計" },
      { word: "آلَة", meaning: "機械" },
      { word: "هَنْدَسَة", meaning: "工学/エンジニアリング" }, // 追加
      { word: "دُمْيَة", meaning: "人形" } // 追加
    ],
    questions: [
      { id: 2671, type: "reading", text: "アル・ジャザリーの職業は？", options: ["医者", "発明家/エンジニア", "詩人", "王様"], correctIndex: 1, explanation: "「مُخْتَرِع (発明家)」です。" },
      { id: 2672, type: "reading", text: "彼は何を作りましたか？", options: ["飛行機", "象の時計や機械", "ピラミッド", "電話"], correctIndex: 1, explanation: "「سَاعَة الْفِيل (象の時計)」が有名です。" },
      { id: 2673, type: "reading", text: "彼は何の分野の父と呼ばれますか？", options: ["医学", "ロボット工学", "文学", "歴史"], correctIndex: 1, explanation: "ロボット工学や機械工学の先駆者です。" },
      { id: 2674, type: "vocabulary", text: "「مُدْهِش」の意味は？", options: ["普通の", "驚くべき/すごい", "退屈な", "悪い"], correctIndex: 1, explanation: "Amazing（驚くべき）です。" },
      { id: 2675, type: "grammar", text: "「作りました」", options: ["صَنَعَ", "أَكَلَ", "شَرِبَ", "قَرَأَ"], correctIndex: 0, explanation: "「Ṣana'a」です。" },
      // 追加：やや難しい文法問題
      { id: 2676, type: "grammar", text: "「مُخْتَرِع」の品詞は？", options: ["能動分詞（Ism Fā'il）", "受動分詞（Ism Maf'ūl）", "場所名詞", "動詞"], correctIndex: 0, explanation: "第8形「Ikhtara'a」の能動分詞で、「発明する人＝発明家」です。" },
      { id: 2677, type: "grammar", text: "「صَمَّمَ آلَاتٍ」で「Ālātin」が属格（in）のように見えるが、実際は？", options: ["属格（Majrūr）", "対格（Manṣūb）", "主格（Marfū'）", "間違い"], correctIndex: 1, explanation: "「Ālāt（機械）」は女性規則複数（Jam' Mu'annath Sālim）であり、対格の場合、Fathaの代わりにKasraを取ります。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "عَاشَ الْجَزَرِيُّ فِي الْعَصْرِ الذَّهَبِيِّ لِلْإِسْلَامِ.", japanese: "ジャザリーはイスラムの黄金時代に生きました。" },
      { speaker: "ナレーター", arabic: "صَمَّمَ آلَاتٍ لِرَفْعِ الْمَاءِ.", japanese: "彼は水を汲み上げる機械を設計しました。" },
      { speaker: "ナレーター", arabic: "اخْتَرَعَ سَاعَةَ الْفِيلِ الشَّهِيرَةَ.", japanese: "彼は有名な「象の時計」を発明しました。" },
      { speaker: "ナレーター", arabic: "اسْتَخْدَمَ الدُّمَى الْمُتَحَرِّكَةَ (الرُّوبُوتَات).", japanese: "彼は動く人形（ロボット）を使いました。" },
      { speaker: "ナレーター", arabic: "كِتَابُهُ مَرْجِعٌ فِي الْهَنْدَسَةِ.", japanese: "彼の本は工学の参考文献です。" }
    ]
  },
  {
    id: 268,
    title: "アラビアヒョウ",
    category: "ニュース",
    level: "中級",
    contentVoweled: "يَعِيشُ النَّمِرُ الْعَرَبِيُّ فِي جِبَالِ السَّرَوَاتِ. إِنَّهُ أَصْغَرُ أَنْوَاعِ النُّمُورِ. أَطْلَقَتِ السُّعُودِيَّةُ بَرْنَامَجًا لِإِكْثَارِهِ. وُلِدَتْ أَشْبَالٌ جَدِيدَةٌ فِي الْعُلَا. هَذَا خَبَرٌ سَعِيدٌ لِلْبِيئَةِ.",
    contentPlain: "يعيش النمر العربي في جبال السروات. إنه أصغر أنواع النمور. أطلقت السعودية برنامجا لإكثاره. ولدت أشبال جديدة في العلا. هذا خبر سعيد للبيئة.",
    vocabList: [
      { word: "نَمِر", meaning: "ヒョウ/トラ" },
      { word: "نَادِر", meaning: "珍しい" },
      { word: "حِمَايَة", meaning: "保護" },
      { word: "شِبْل", meaning: "ライオンやヒョウの子" }, // 追加
      { word: "إِكْثَار", meaning: "増やすこと/繁殖" } // 追加
    ],
    questions: [
      { id: 2681, type: "reading", text: "アラビアヒョウの状況は？", options: ["たくさんいる", "絶滅の危機にある", "ペットになっている", "海にいる"], correctIndex: 1, explanation: "「مُهَدَّد بِالِانْقِرَاضِ」です。" },
      { id: 2682, type: "reading", text: "どこに住んでいますか？", options: ["街中", "山岳地帯", "砂漠の真ん中", "家"], correctIndex: 1, explanation: "「الْجِبَال (山)」に住んでいます。" },
      { id: 2683, type: "reading", text: "サウジは何をしていますか？", options: ["狩っている", "繁殖と保護プログラム", "無視している", "売っている"], correctIndex: 1, explanation: "「بَرْنَامَجًا لِإِكْثَارِهِ (繁殖プログラム)」です。" },
      { id: 2684, type: "vocabulary", text: "「صَغِير」の意味は？", options: ["大きい", "小さい", "長い", "速い"], correctIndex: 1, explanation: "Small（小さい）です。" },
      { id: 2685, type: "grammar", text: "「生まれました」", options: ["وُلِدَ", "مَاتَ", "عَاشَ", "أَكَلَ"], correctIndex: 0, explanation: "「Wulida」です。" },
      // 追加：やや難しい文法問題
      { id: 2686, type: "grammar", text: "「أَصْغَرُ أَنْوَاعِ」で「Aṣgharu」に定冠詞がなくタンウィーンもないのは？", options: ["イダーファの第1要素だから", "間違いだから", "形容詞だから", "主語だから"], correctIndex: 0, explanation: "最上級「Aṣgharu（最も小さい）」が、次の名詞「Anwā'（種類）」にかかるイダーファの形になっているためです。" },
      { id: 2687, type: "grammar", text: "「أَشْبَالٌ جَدِيدَةٌ」で形容詞が女性単数なのは？", options: ["「Ashbāl」が非理性的複数だから", "「Ashbāl」が女性名詞だから", "強調のため", "間違い"], correctIndex: 0, explanation: "「Shibl（子供）」の複数形「Ashbāl」は非理性的複数なので、形容詞は女性単数形「Jadīda」で受けます。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "يَعِيشُ النَّمِرُ الْعَرَبِيُّ فِي جِبَالِ السَّرَوَاتِ.", japanese: "アラビアヒョウはサラワート山脈に住んでいます。" },
      { speaker: "ナレーター", arabic: "إِنَّهُ أَصْغَرُ أَنْوَاعِ النُّمُورِ.", japanese: "それはヒョウの中で最も小さい種類です。" },
      { speaker: "ナレーター", arabic: "أَطْلَقَتِ السُّعُودِيَّةُ بَرْنَامَجًا لِإِكْثَارِهِ.", japanese: "サウジアラビアはそれを増やす（繁殖させる）プログラムを開始しました。" },
      { speaker: "ナレーター", arabic: "وُلِدَتْ أَشْبَالٌ جَدِيدَةٌ فِي الْعُلَا.", japanese: "アル・ウラーで新しい子供たちが生まれました。" },
      { speaker: "ナレーター", arabic: "هَذَا خَبَرٌ سَعِيدٌ لِلْبِيئَةِ.", japanese: "これは環境にとって嬉しいニュースです。" }
    ]
  },
  {
    id: 269,
    title: "ケチな男",
    category: "物語",
    level: "中級",
    contentVoweled: "جَمَعَ الْبَخِيلُ كُلَّ ذَهَبِهِ وَدَفَنَهُ فِي الْحَدِيقَةِ. كَانَ يَأْتِي كُلَّ يَوْمٍ لِيَنْظُرَ إِلَيْهِ. رَآهُ لِصٌّ، فَجَاءَ فِي اللَّيْلِ وَسَرَقَ الذَّهَبَ. بَكَى الْبَخِيلُ، فَقَالَ لَهُ جَارُهُ: ضَعْ حَجَرًا بَدَلًا مِنْهُ، فَلَنْ يَنْفَعَكَ الذَّهَبُ.",
    contentPlain: "جمع البخيل كل ذهبه ودفنه في الحديقة. كان يأتي كل يوم لينظر إليه. رآه لص، فجاء في الليل وسرق الذهب. بكى البخيل، فقال له جاره: ضع حجرا بدلا منه، فلن ينفعك الذهب.",
    vocabList: [
      { word: "بَخِيل", meaning: "ケチ" },
      { word: "ذَهَب", meaning: "金貨/金" },
      { word: "حُفْرَة", meaning: "穴" },
      { word: "دَفَنَ", meaning: "埋めた" }, // 追加
      { word: "لِصّ", meaning: "泥棒" } // 追加
    ],
    questions: [
      { id: 2691, type: "reading", text: "男の性格は？", options: ["寛大", "ケチ", "勇敢", "賢い"], correctIndex: 1, explanation: "「بَخِيل (ケチ)」です。" },
      { id: 2692, type: "reading", text: "彼はお金をどうしていましたか？", options: ["使った", "寄付した", "穴に埋めた", "燃やした"], correctIndex: 2, explanation: "「دَفَنَهُ فِي حُفْرَةٍ (穴に埋めた)」です。" },
      { id: 2693, type: "reading", text: "お金はどうなりましたか？", options: ["増えた", "盗まれた", "金になった", "消えた"], correctIndex: 1, explanation: "「سُرِقَ (盗まれた)」です。" },
      { id: 2694, type: "vocabulary", text: "「حَجَر」の意味は？", options: ["パン", "石", "金", "水"], correctIndex: 1, explanation: "Stone（石）です。" },
      { id: 2695, type: "grammar", text: "「泣きました」", options: ["بَكَى", "ضَحِكَ", "نَامَ", "مَشَى"], correctIndex: 0, explanation: "「Bakā」です。" },
      // 追加：やや難しい文法問題
      { id: 2696, type: "grammar", text: "「لَنْ يَنْفَعَكَ」の動詞がa段（Fatha）なのは？", options: ["未来否定のLanの後の接続法だから", "過去形だから", "命令形だから", "主格だから"], correctIndex: 0, explanation: "未来否定粒子「Lan」の後の現在形動詞は接続法（Manṣūb）となり、通常Fathaで終わります。" },
      { id: 2697, type: "grammar", text: "「ضَعْ」の動詞の形は？", options: ["過去形", "現在形", "命令形", "名詞"], correctIndex: 2, explanation: "「Waḍa'a (置いた)」の命令形は、最初のWāwが脱落して「Ḍa' (置け)」となります。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "جَمَعَ الْبَخِيلُ كُلَّ ذَهَبِهِ وَدَفَنَهُ فِي الْحَدِيقَةِ.", japanese: "ケチな男は全ての金貨を集めて庭に埋めました。" },
      { speaker: "ナレーター", arabic: "كَانَ يَأْتِي كُلَّ يَوْمٍ لِيَنْظُرَ إِلَيْهِ.", japanese: "彼は毎日それを見に来ていました。" },
      { speaker: "ナレーター", arabic: "رَآهُ لِصٌّ، فَجَاءَ فِي اللَّيْلِ وَسَرَقَ الذَّهَبَ.", japanese: "泥棒が彼を見て、夜に来て金を盗みました。" },
      { speaker: "ナレーター", arabic: "بَكَى الْبَخِيلُ، فَقَالَ لَهُ جَارُهُ:", japanese: "ケチな男は泣きました。すると隣人が言いました。" },
      { speaker: "ナレーター", arabic: "ضَعْ حَجَرًا بَدَلًا مِنْهُ، فَلَنْ يَنْفَعَكَ الذَّهَبُ.", japanese: "「代わりに石を置いておけ。どうせ金は使わない（役に立たない）んだから。」" }
    ]
  },
  {
    id: 270,
    title: "スーク・オカーズ",
    category: "歴史",
    level: "中級",
    contentVoweled: "يَقَعُ سُوقُ عُكَاظ بِالْقُرْبِ مِنَ الطَّائِفِ. كَانَ الشُّعَرَاءُ يَأْتُونَ لِإِلْقَاءِ قَصَائِدِهِمْ. كَانَ النَّابِغَةُ الذُّبْيَانِيُّ هُوَ الْحَكَمَ بَيْنَهُمْ. أَجْمَلُ الْقَصَائِدِ سُمِّيَتْ 'الْمُعَلَّقَاتِ'. الْيَوْمَ، تَمَّ إِحْيَاءُ السُّوقِ كَمَهْرَجَانٍ.",
    contentPlain: "يقع سوق عكاظ بالقرب من الطائف. كان الشعراء يأتون لإلقاء قصائدهم. كان النابغة الذبياني هو الحكم بينهم. أجمل القصائد سميت 'المعلقات'. اليوم، تم إحياء السوق كمهرجان.",
    vocabList: [
      { word: "سُوق", meaning: "市場" },
      { word: "شِعْر", meaning: "詩" },
      { word: "قَبِيلَة", meaning: "部族" },
      { word: "حَكَم", meaning: "審査員/審判" }, // 追加
      { word: "إِحْيَاء", meaning: "復活/リバイバル" } // 追加
    ],
    questions: [
      { id: 2701, type: "reading", text: "スーク・オカーズは何の場所でしたか？", options: ["ただの市場", "戦争の場所", "文学と商業の集まり", "学校"], correctIndex: 2, explanation: "「مَجْمَعًا أَدَبِيًّا وَتِجَارِيًّا」です。" },
      { id: 2702, type: "reading", text: "そこで何を競いましたか？", options: ["剣", "詩", "料理", "走り"], correctIndex: 1, explanation: "「الشِّعْر (詩)」のコンテストが有名です。" },
      { id: 2703, type: "reading", text: "最高の詩（ムアッラカート）はどうされましたか？", options: ["燃やされた", "カアバに懸けられた", "捨てられた", "隠された"], correctIndex: 1, explanation: "「عُلِّقَتْ (懸けられた)」と言われています。" },
      { id: 2704, type: "vocabulary", text: "「حَكَم」の意味は？", options: ["詩人", "商人", "審査員/審判", "王"], correctIndex: 2, explanation: "Judge（審査員）です。" },
      { id: 2705, type: "grammar", text: "「言いました」", options: ["قَالَ", "سَمِعَ", "كَتَبَ", "قَرَأَ"], correctIndex: 0, explanation: "「Qāla」です。" },
      // 追加：やや難しい文法問題
      { id: 2706, type: "grammar", text: "「كَانَ الشُّعَرَاءُ يَأْتُونَ」の意味は？", options: ["詩人たちは来た", "詩人たちは来ている", "詩人たちは（習慣的に）来ていた", "詩人たちは来るだろう"], correctIndex: 2, explanation: "「Kāna」＋現在形は過去の習慣や進行（〜していたものだ）を表します。" },
      { id: 2707, type: "grammar", text: "「هُوَ الْحَكَمَ」で「Al-Ḥakama」が対格（a段）なのは？", options: ["Kānaの述語（Khabar）だから", "主語だから", "前置詞の後だから", "間違い"], correctIndex: 0, explanation: "「Kāna al-Nābighatu (huwa) al-Ḥakama」という文で、Nabighaが主語、ḤakamがKānaの述語（Manṣūb）となります（HuwaはDamīr Faṣlとして挟まることが多い）。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "يَقَعُ سُوقُ عُكَاظ بِالْقُرْبِ مِنَ الطَّائِفِ.", japanese: "スーク・オカーズはターイフの近くにあります。" },
      { speaker: "ナレーター", arabic: "كَانَ الشُّعَرَاءُ يَأْتُونَ لِإِلْقَاءِ قَصَائِدِهِمْ.", japanese: "詩人たちは詩を朗読するためにやって来ていました。" },
      { speaker: "ナレーター", arabic: "كَانَ النَّابِغَةُ الذُّبْيَانِيُّ هُوَ الْحَكَمَ بَيْنَهُمْ.", japanese: "ナ ービガ・アッ＝ズブヤーニーが彼らの審査員でした。" },
      { speaker: "ナレーター", arabic: "أَجْمَلُ الْقَصَائِدِ سُمِّيَتْ 'الْمُعَلَّقَاتِ'.", japanese: "最も美しい詩は「ムアッラカート（懸詩）」と呼ばれました。" },
      { speaker: "ナレーター", arabic: "الْيَوْمَ، تَمَّ إِحْيَاءُ السُّوقِ كَمَهْرَجَانٍ.", japanese: "今日、その市場はフェスティバルとして復活しました。" }
    ]
  },
  {
    id: 271,
    title: "ザムザムの水",
    category: "文化",
    level: "中級",
    contentVoweled: "انْفَجَرَ مَاءُ زَمْزَمَ تَحْتَ قَدَمَيِّ إِسْمَاعِيلَ. كَانَتْ أُمُّهُ هَاجَرُ تَبْحَثُ عَنِ الْمَاءِ. قَالَ النَّبِيُّ: مَاءُ زَمْزَمَ لِمَا شُرِبَ لَهُ. يَشْرَبُهُ الْحُجَّاجُ وَيَأْخُذُونَهُ مَعَهُمْ. إِنَّهُ لَا يَجِفُّ أَبَدًا.",
    contentPlain: "انفجر ماء زمزم تحت قدمي إسماعيل. كانت أمه هاجر تبحث عن الماء. قال النبي: ماء زمزم لما شرب له. يشربه الحجاج ويأخذونه معهم. إنه لا يجف أبدا.",
    vocabList: [
      { word: "بِئْر", meaning: "井戸" },
      { word: "عَطَش", meaning: "渇き" },
      { word: "حَاجّ", meaning: "巡礼者" },
      { word: "انْفَجَرَ", meaning: "噴出した/爆発した" }, // 追加
      { word: "جَفَّ", meaning: "乾いた/枯れた" } // 追加
    ],
    questions: [
      { id: 2711, type: "reading", text: "ザムザムの井戸はどこにありますか？", options: ["マディーナ", "メッカ（ハラムの中）", "リヤド", "砂漠"], correctIndex: 1, explanation: "文脈としてメッカ（カアバの近く）にあります。" },
      { id: 2712, type: "reading", text: "誰のために湧き出しましたか？", options: ["イブラーヒーム", "イスマーイール", "ムハンマド", "ヌーフ"], correctIndex: 1, explanation: "「تَحْتَ قَدَمَيِّ إِسْمَاعِيلَ (イスマーイールの足元で)」です。" },
      { id: 2713, type: "reading", text: "巡礼者はどうしますか？", options: ["見るだけ", "飲む", "捨てる", "売る"], correctIndex: 1, explanation: "「يَشْرَبُونَهُ (それを飲む)」です。" },
      { id: 2714, type: "vocabulary", text: "「طَعْم」の意味は？", options: ["色", "味", "匂い", "音"], correctIndex: 1, explanation: "Taste（味）です。" },
      { id: 2715, type: "grammar", text: "「飲みます」", options: ["يَشْرَبُ", "يَأْكُلُ", "يَنَامُ", "يَغْسِلُ"], correctIndex: 0, explanation: "「Yashrabu」です。" },
      // 追加：やや難しい文法問題
      { id: 2716, type: "grammar", text: "「لِمَا شُرِبَ لَهُ」の「شُرِبَ」の態は？", options: ["能動態", "受動態", "命令形", "完了形"], correctIndex: 1, explanation: "「Shariba (飲んだ)」の受動態「Shuriba (飲まれた)」です。「それが飲まれた（目的の）ためにある」という意味です。" },
      { id: 2717, type: "grammar", text: "「تَحْتَ قَدَمَيِّ」の「Qadamayyi」の形は？", options: ["複数形・属格", "双数形・属格", "単数形・属格", "双数形・主格"], correctIndex: 1, explanation: "「Qadaman (2つの足)」が、前置詞（場所）の後で属格（Majrur）になり、さらにイダーファで「Nun」が落ちた形です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "انْفَجَرَ مَاءُ زَمْزَمَ تَحْتَ قَدَمَيِّ إِسْمَاعِيلَ.", japanese: "ザムザムの水はイスマーイールの足元から湧き出しました（噴出しました）。" },
      { speaker: "ナレーター", arabic: "كَانَتْ أُمُّهُ هَاجَرُ تَبْحَثُ عَنِ الْمَاءِ.", japanese: "彼の母ハージャルは水を探していました。" },
      { speaker: "ナレーター", arabic: "قَالَ النَّبِيُّ: مَاءُ زَمْزَمَ لِمَا شُرِبَ لَهُ.", japanese: "預言者は言いました。「ザムザムの水は、それが飲まれた目的のためにある（願いが叶う）。」" },
      { speaker: "ナレーター", arabic: "يَشْرَبُهُ الْحُجَّاجُ وَيَأْخُذُونَهُ مَعَهُمْ.", japanese: "巡礼者はそれを飲み、持ち帰ります。" },
      { speaker: "ナレーター", arabic: "إِنَّهُ لَا يَجِفُّ أَبَدًا.", japanese: "それは決して枯れません。" }
    ]
  },
  {
    id: 272,
    title: "親への敬意",
    category: "文化",
    level: "中級",
    contentVoweled: "أَمَرَ اللهُ بِالْإِحْسَانِ إِلَى الْوَالِدَيْنِ. يُقَبِّلُ الْأَبْنَاءُ رَأْسَ وَيَدَ الْوَالِدَيْنِ. لَا تَقُلْ لَهُمَا 'أُفٍّ' وَلَا تَنْهَرْهُمَا. اخْفِضْ لَهُمَا جَنَاحَ الذُّلِّ مِنَ الرَّحْمَةِ. رِضَاهُمَا سَبَبٌ لِدُخُولِ الْجَنَّةِ.",
    contentPlain: "أمر الله بالإحسان إلى الوالدين. يقبل الأبناء رأس ويد الوالدين. لا تقل لهما 'أف' ولا تنهرهما. اخفض لهما جناح الذل من الرحمة. رضاهما سبب لدخول الجنة.",
    vocabList: [
      { word: "وَالِدَيْن", meaning: "両親" },
      { word: "اِحْتِرَام", meaning: "尊敬" },
      { word: "كِبَر", meaning: "老い/高齢" },
      { word: "أَمَرَ", meaning: "命じた" }, // 追加
      { word: "جَنَاح", meaning: "翼" } // 追加
    ],
    questions: [
      { id: 2721, type: "reading", text: "両親への善行（ビッル）は？", options: ["趣味", "義務", "禁止", "遊び"], correctIndex: 1, explanation: "「أَمَرَ اللهُ (神が命じた)」ことなので義務（Wājib）です。" },
      { id: 2722, type: "reading", text: "彼らが年を取ったらどうすべきですか？", options: ["無視する", "世話をする/敬う", "怒鳴る", "家を出る"], correctIndex: 1, explanation: "「الْإِحْسَان (善行)」や頭へのキスなどで敬います。" },
      { id: 2723, type: "reading", text: "彼らに言ってはいけない言葉は？", options: ["はい", "ありがとう", "ウッフ（ちぇっ）", "どうぞ"], correctIndex: 2, explanation: "クルアーンで禁じられている「أُفٍّ (ウッフ＝不平の言葉)」です。" },
      { id: 2724, type: "vocabulary", text: "「يَد」の意味は？", options: ["足", "手", "目", "耳"], correctIndex: 1, explanation: "Hand（手）です。" },
      { id: 2725, type: "grammar", text: "「キスします」", options: ["يُقَبِّلُ", "يَضْرِبُ", "يُسَلِّمُ", "يَمْشِي"], correctIndex: 0, explanation: "「Yuqabbilu」です。" },
      // 追加：やや難しい文法問題
      { id: 2726, type: "grammar", text: "「لَا تَقُلْ」の動詞の形は？", options: ["否定の現在形", "禁止の要求形（Majzūm）", "命令形", "過去形"], correctIndex: 1, explanation: "禁止のLa（Nāhiya）の後なので、動詞は要求形（Jussive）になります。「Taqūl」の中間の長母音が脱落して「Taqul」になります。" },
      { id: 2727, type: "grammar", text: "「اخْفِضْ」の動詞の種類は？", options: ["過去形", "現在形", "命令形", "動名詞"], correctIndex: 2, explanation: "「Khafaḍa (下げた)」の命令形「Ikhfiḍ (下げよ)」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "أَمَرَ اللهُ بِالْإِحْسَانِ إِلَى الْوَالِدَيْنِ.", japanese: "神は両親への善行を命じました。" },
      { speaker: "ナレーター", arabic: "يُقَبِّلُ الْأَبْنَاءُ رَأْسَ وَيَدَ الْوَالِدَيْنِ.", japanese: "子供たちは両親の頭と手にキスをします。" },
      { speaker: "ナレーター", arabic: "لَا تَقُلْ لَهُمَا 'أُفٍّ' وَلَا تَنْهَرْهُمَا.", japanese: "彼らに「ちぇっ（不平）」と言ってはいけないし、叱りつけてもいけません。" },
      { speaker: "ナレーター", arabic: "اخْفِضْ لَهُمَا جَنَاحَ الذُّلِّ مِنَ الرَّحْمَةِ.", japanese: "慈悲をもって、彼らに謙虚（服従）の翼を低くしなさい（優しく接しなさい）。" },
      { speaker: "ナレーター", arabic: "رِضَاهُمَا سَبَبٌ لِدُخُولِ الْجَنَّةِ.", japanese: "彼らの満足は天国に入る理由となります。" }
    ]
  },
  {
    id: 273,
    title: "太陽光エネルギー",
    category: "ニュース",
    level: "中級",
    contentVoweled: "الشَّمْسُ تَسْطَعُ طِوَالَ الْعَامِ فِي الْمَمْلَكَةِ. بَنَتِ الدَّوْلَةُ مَحَطَّاتٍ ضَخْمَةً لِلطَّاقَةِ الشَّمْسِيَّةِ. مَشْرُوعُ سَاكَاكَا هُوَ الْأَوَّلُ مِنْ نَوْعِهِ. هَذَا سَيُوَفِّرُ طَاقَةً نَظِيفَةً وَرَخِيصَةً. إِنَّهُ جُزْءٌ مِنْ رُؤْيَةِ 2030.",
    contentPlain: "الشمس تسطع طوال العام في المملكة. بنت الدولة محطات ضخمة للطاقة الشمسية. مشروع ساكاكا هو الأول من نوعه. هذا سيوفر طاقة نظيفة ورخيصة. إنه جزء من رؤية 2030.",
    vocabList: [
      { word: "شَمْس", meaning: "太陽" },
      { word: "طَاقَة", meaning: "エネルギー" },
      { word: "كَهْرُبَاء", meaning: "電気" },
      { word: "تَسْطَعُ", meaning: "輝く" }, // 追加
      { word: "نَظِيف", meaning: "クリーン/清潔な" } // 追加
    ],
    questions: [
      { id: 2731, type: "reading", text: "サウジは何に投資していますか？", options: ["石炭", "風", "太陽光エネルギー", "波"], correctIndex: 2, explanation: "「الطَّاقَة الشَّمْسِيَّة」です。" },
      { id: 2732, type: "reading", text: "サウジの気候はこのエネルギーにどうですか？", options: ["適していない", "非常に適している（年中晴れ）", "寒すぎる", "暗すぎる"], correctIndex: 1, explanation: "「تَسْطَعُ طِوَالَ الْعَامِ (一年中輝いている)」ので適しています。" },
      { id: 2733, type: "reading", text: "目的は？", options: ["石油への依存を減らす", "石油を増やす", "電気を消す", "空気を汚す"], correctIndex: 0, explanation: "一般知識及び「クリーンなエネルギーを提供する」という文脈から。" },
      { id: 2734, type: "vocabulary", text: "「مَشْرُوع」の意味は？", options: ["会社", "プロジェクト", "家", "学校"], correctIndex: 1, explanation: "Projectです。" },
      { id: 2735, type: "grammar", text: "「作ります（発電します）」", options: ["يُوَلِّدُ", "يَأْكُلُ", "يَنَامُ", "يَلْعَبُ"], correctIndex: 0, explanation: "「Yuwallidu (Generate)」です。" },
      // 追加：やや難しい文法問題
      { id: 2736, type: "grammar", text: "「بَنَتِ الدَّوْلَةُ」の「Banati」のKasraの理由は？", options: ["所有格だから", "女性形だから", "スクーンが続くのを避けるため", "間違い"], correctIndex: 2, explanation: "「Banat (建てた・女性)」のTā' al-Ta'nīth（静止したTa）の後に「al-Dawla」のスクーンが来るため、発音上の理由でKasraに変えています。" },
      { id: 2737, type: "grammar", text: "「سَيُوَفِّرُ」の「Sa」の意味は？", options: ["過去", "現在進行", "未来", "命令"], correctIndex: 2, explanation: "動詞の前の「Sa」は近い未来を表します（〜するだろう）。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "الشَّمْسُ تَسْطَعُ طِوَالَ الْعَامِ فِي الْمَمْلَكَةِ.", japanese: "王国では一年中太陽が輝いています。" },
      { speaker: "ナレーター", arabic: "بَنَتِ الدَّوْلَةُ مَحَطَّاتٍ ضَخْمَةً لِلطَّاقَةِ الشَّمْسِيَّةِ.", japanese: "国は巨大な太陽光発電所を建設しました。" },
      { speaker: "ナレーター", arabic: "مَشْرُوعُ سَاكَاكَا هُوَ الْأَوَّلُ مِنْ نَوْعِهِ.", japanese: "サカーカ・プロジェクトはその種で最初のものです。" },
      { speaker: "ナレーター", arabic: "هَذَا سَيُوَفِّرُ طَاقَةً نَظِيفَةً وَرَخِيصَةً.", japanese: "これはクリーンで安価なエネルギーを提供します。" },
      { speaker: "ナレーター", arabic: "إِنَّهُ جُزْءٌ مِنْ رُؤْيَةِ 2030.", japanese: "それはビジョン2030の一部です。" }
    ]
  },
  {
    id: 274,
    title: "アラビアの詩（ムアッラカート）",
    category: "文学",
    level: "中級",
    contentVoweled: "كَانَ الْعَرَبُ يَقُولُونَ الشِّعْرَ بِفَصَاحَةٍ. اخْتَارُوا أَجْوَدَ الْقَصَائِدِ وَكَتَبُوهَا بِمَاءِ الذَّهَبِ. عَلَّقُوهَا عَلَى أَسْتَارِ الْكَعْبَةِ. مِنْ أَشْهَرِ الشُّعَرَاءِ: امْرُؤُ الْقَيْسِ وَعَنْتَرَةُ. هَذِهِ الْقَصَائِدُ تَصِفُ حَيَاةَ الصَّحْرَاءِ.",
    contentPlain: "كان العرب يقولون الشعر بفصاحة. اختاروا أجود القصائد وكتبوها بماء الذهب. علقوها على أستار الكعبة. من أشهر الشعراء: امرؤ القيس وعنترة. هذه القصائد تصف حياة الصحراء.",
    vocabList: [
      { word: "قَصِيدَة", meaning: "詩（一編）" },
      { word: "شَاعِر", meaning: "詩人" },
      { word: "ذَهَب", meaning: "金" },
      { word: "فَصَاحَة", meaning: "雄弁さ/流暢さ" }, // 追加
      { word: "أَجْوَد", meaning: "最も良い/上質な" } // 追加
    ],
    questions: [
      { id: 2741, type: "reading", text: "ムアッラカートとは何ですか？", options: ["古い家", "有名な詩", "王様の名前", "食べ物"], correctIndex: 1, explanation: "「أَجْوَدَ الْقَصَائِد (最高の詩)」です。" },
      { id: 2742, type: "reading", text: "いつの時代のものですか？", options: ["現代", "ジャーヒリーヤ（イスラム以前）", "アッバース朝", "オスマン帝国"], correctIndex: 1, explanation: "イムルウ・アル・カイスなどが活躍したイスラム以前の時代です。" },
      { id: 2743, type: "reading", text: "なぜ「ムアッラカート（懸けられたもの）」と呼ばれますか？", options: ["首にかけたから", "カアバに懸けられたから", "木にかけたから", "壁に書いたから"], correctIndex: 1, explanation: "「عَلَّقُوهَا عَلَى أَسْتَارِ الْكَعْبَةِ」という伝承によります。" },
      { id: 2744, type: "vocabulary", text: "「بَحْر」の意味（詩の文脈）は？", options: ["海", "韻律/メーター", "船", "魚"], correctIndex: 1, explanation: "詩の韻律のことを「バハル（海）」と呼びます。" },
      { id: 2745, type: "grammar", text: "「書かれました」", options: ["كُتِبَتْ", "كَتَبَ", "يَكْتُبُ", "كَاتِب"], correctIndex: 0, explanation: "「Kutibat (Written)」受動態です。" },
      // 追加：やや難しい文法問題
      { id: 2746, type: "grammar", text: "「كَتَبُوهَا」の「ū」は何を指す？", options: ["詩人たち（彼ら）", "詩", "カアバ", "金"], correctIndex: 0, explanation: "動詞につく「Waw al-Jama'a」で、主語である彼ら（アラブ人たち）を指します。" },
      { id: 2747, type: "grammar", text: "「امْرُؤُ الْقَيْسِ」の「Imru'」のハムザが「u」に乗っている理由は？", options: ["主格だから", "対格だから", "属格だから", "固有名詞だから"], correctIndex: 0, explanation: "「Imru'」は格によって語尾の文字が変わる特殊な名詞です（主格: Imru'、対格: Imra'、属格: Imri'）。ここでは「(Huwa) Imru'」として主格の位置にあります。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "كَانَ الْعَرَبُ يَقُولُونَ الشِّعْرَ بِفَصَاحَةٍ.", japanese: "アラブ人は流暢に詩を詠んでいました。" },
      { speaker: "ナレーター", arabic: "اخْتَارُوا أَجْوَدَ الْقَصَائِدِ وَكَتَبُوهَا بِمَاءِ الذَّهَبِ.", japanese: "彼らは最高の詩を選び、金水で書きました。" },
      { speaker: "ナレーター", arabic: "عَلَّقُوهَا عَلَى أَسْتَارِ الْكَعْبَةِ.", japanese: "彼らはそれをカアバの幕に懸けました。" },
      { speaker: "ナレーター", arabic: "مِنْ أَشْهَرِ الشُّعَرَاءِ: امْرُؤُ الْقَيْسِ وَعَنْتَرَةُ.", japanese: "有名な詩人には、イムルウ・アル・カイスやアンタラがいます。" },
      { speaker: "ナレーター", arabic: "هَذِهِ الْقَصَائِدُ تَصِفُ حَيَاةَ الصَّحْرَاءِ.", japanese: "これらの詩は砂漠の生活を描写しています。" }
    ]
  },
  {
    id: 275,
    title: "アブハの観光",
    category: "社会",
    level: "中級",
    contentVoweled: "تَقَعُ أَبْهَا فِي جَنُوبِ السُّعُودِيَّةِ. تَسْقُطُ فِيهَا الْأَمْطَارُ فِي الصَّيْفِ. يُحِبُّ السُّيَّاحُ رُكُوبَ التِّلِفْرِيكِ هُنَاكَ. الْجِبَالُ الْخَضْرَاءُ تُعَانِقُ الضَّبَابَ. إِنَّهَا مَكَانٌ رَائِعٌ لِلْهَرَبِ مِنَ الْحَرِّ.",
    contentPlain: "تقع أبها في جنوب السعودية. تسقط فيها الأمطار في الصيف. يحب السياح ركوب التلفريك هناك. الجبال الخضراء تعانق الضباب. إنها مكان رائع للهرب من الحر.",
    vocabList: [
      { word: "جَبَل", meaning: "山" },
      { word: "ضَبَاب", meaning: "霧" },
      { word: "سِيَاحَة", meaning: "観光" },
      { word: "أَمْطَار", meaning: "雨（複数）" }, // 追加
      { word: "حَرّ", meaning: "暑さ" } // 追加
    ],
    questions: [
      { id: 2751, type: "reading", text: "アブハはどこにありますか？", options: ["砂漠", "海", "山の上（南部）", "地下"], correctIndex: 2, explanation: "「فِي جَنُوبِ السُّعُودِيَّةِ」の山岳地帯です。" },
      { id: 2752, type: "reading", text: "天気はどうですか？", options: ["とても暑い", "穏やか/涼しい/雨が降る", "雪が降る", "乾燥している"], correctIndex: 1, explanation: "夏に雨が降り、避暑地として知られています。" },
      { id: 2753, type: "reading", text: "何が見られますか？", options: ["霧と緑", "砂嵐", "高層ビル", "海"], correctIndex: 0, explanation: "「الْجِبَالُ الْخَضْرَاءُ (緑の山々)」と「الضَّبَاب (霧)」です。" },
      { id: 2754, type: "vocabulary", text: "「تِلِفْرِيك」の意味は？", options: ["電車", "ロープウェイ", "車", "船"], correctIndex: 1, explanation: "Cable car（ロープウェイ）です。" },
      { id: 2755, type: "grammar", text: "「登ります」", options: ["يَصْعَدُ", "يَنْزِلُ", "يَمْشِي", "يَقِفُ"], correctIndex: 0, explanation: "「Yaṣ'adu」です。" },
      // 追加：やや難しい文法問題
      { id: 2756, type: "grammar", text: "「تُعَانِقُ الضَّبَابَ」の「ḍabāba」が対格（a段）なのは？", options: ["主語だから", "動詞の目的語だから", "前置詞の後だから", "副詞だから"], correctIndex: 1, explanation: "動詞「Tu'āniqu (抱きしめる)」の目的語（Maf'ūl Bihi）であるため、対格（Manṣūb）になります。" },
      { id: 2757, type: "grammar", text: "「لِلْهَرَبِ」の品詞は？", options: ["動詞", "名詞（動名詞）", "形容詞", "粒子"], correctIndex: 1, explanation: "「Haraba (逃げた)」の動名詞（Masdar）「Harab」に前置詞「Li」がついた形です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "تَقَعُ أَبْهَا فِي جَنُوبِ السُّعُودِيَّةِ.", japanese: "アブハはサウジアラビアの南部にあります。" },
      { speaker: "ナレーター", arabic: "تَسْقُطُ فِيهَا الْأَمْطَارُ فِي الصَّيْفِ.", japanese: "夏に（そこでは）雨が降ります。" },
      { speaker: "ナレーター", arabic: "يُحِبُّ السُّيَّاحُ رُكُوبَ التِّلِفْرِيكِ هُنَاكَ.", japanese: "観光客はそこでロープウェイに乗るのが好きです。" },
      { speaker: "ナレーター", arabic: "الْجِبَالُ الْخَضْرَاءُ تُعَانِقُ الضَّبَابَ.", japanese: "緑の山々が霧を抱きしめます。" },
      { speaker: "ナレーター", arabic: "إِنَّهَا مَكَانٌ رَائِعٌ لِلْهَرَبِ مِنَ الْحَرِّ.", japanese: "それは暑さから逃れるのに素晴らしい場所です。" }
    ]
  },
  {
    id: 276,
    title: "春の砂漠",
    category: "自然",
    level: "中級",
    contentVoweled: "بَعْدَ سُقُوطِ الْمَطَرِ، يَنْمُو الْعُشْبُ. تَتَحَوَّلُ الصَّحْرَاءُ إِلَى بِسَاطٍ أَخْضَرَ. تَظْهَرُ زُهُورُ الْخُزَامَى الْبَنَفْسَجِيَّةُ. يَخْرُجُ النَّاسُ لِلْبَحْثِ عَنِ الْكَمْأَةِ. الرَّبِيعُ أَجْمَلُ فُصُولِ السَّنَةِ فِي الصَّحْرَاءِ.",
    contentPlain: "بعد سقوط المطر، ينمو العشب. تتحول الصحراء إلى بساط أخضر. تظهر زهور الخزامى البنفسجية. يخرج الناس للبحث عن الكمأة. الربيع أجمل فصول السنة في الصحراء.",
    vocabList: [
      { word: "رَبِيع", meaning: "春" },
      { word: "زَهْرَة", meaning: "花" },
      { word: "كَمْأَة", meaning: "トリュフ（キノコ）" },
      { word: "عُشْب", meaning: "草" }, // 追加
      { word: "بِسَاط", meaning: "絨毯/カーペット" } // 追加
    ],
    questions: [
      { id: 2761, type: "reading", text: "春になると砂漠はどうなりますか？", options: ["もっと暑くなる", "緑になる", "雪が降る", "変わらない"], correctIndex: 1, explanation: "「بِسَاط أَخْضَر (緑の絨毯)」になります。" },
      { id: 2762, type: "reading", text: "人々は何を探しに行きますか？", options: ["金", "水", "キノコ（トリュフ）", "石"], correctIndex: 2, explanation: "「الْكَمْأَة (トリュフ/ファグア)」です。" },
      { id: 2763, type: "reading", text: "空気（香り）はどうですか？", options: ["臭い", "花の香りがする", "煙たい", "埃っぽい"], correctIndex: 1, explanation: "「ラベンダー（Khuzāmā）」などの花が現れるためです。" },
      { id: 2764, type: "vocabulary", text: "「مَطَر」の意味は？", options: ["風", "雨", "太陽", "雲"], correctIndex: 1, explanation: "Rain（雨）です。" },
      { id: 2765, type: "grammar", text: "「探します」", options: ["يَبْحَثُ عَنْ", "يَجِدُ", "يُضَيِّعُ", "يَخْتَبِئُ"], correctIndex: 0, explanation: "「Yabḥathu 'an」です。" },
      // 追加：やや難しい文法問題
      { id: 2766, type: "grammar", text: "「تَتَحَوَّلُ」の動詞の派生形（Wazn）は？", options: ["Form II (Fa''ala)", "Form V (Tafa''ala)", "Form IV (Af'ala)", "Form X (Istaf'ala)"], correctIndex: 1, explanation: "「Ta」で始まり真ん中にシャッダがある第5形（Tafa''ala）で、「変化する（自動詞化）」を表します。" },
      { id: 2767, type: "grammar", text: "「أَجْمَلُ فُصُولِ」の「Fuṣūli」が属格（i段）なのは？", options: ["形容詞だから", "イダーファの第2要素だから", "目的語だから", "間違い"], correctIndex: 1, explanation: "「Ajmalu (最も美しい)」という最上級名詞に続く名詞なので、イダーファ構造となり属格（Majrūr）になります。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "بَعْدَ سُقُوطِ الْمَطَرِ، يَنْمُو الْعُشْبُ.", japanese: "雨が降った後、草が生えます。" },
      { speaker: "ナレーター", arabic: "تَتَحَوَّلُ الصَّحْرَاءُ إِلَى بِسَاطٍ أَخْضَرَ.", japanese: "砂漠は緑の絨毯に変わります。" },
      { speaker: "ナレーター", arabic: "تَظْهَرُ زُهُورُ الْخُزَامَى الْبَنَفْسَجِيَّةُ.", japanese: "紫色のラベンダーの花が現れます。" },
      { speaker: "ナレーター", arabic: "يَخْرُجُ النَّاسُ لِلْبَحْثِ عَنِ الْكَمْأَةِ (الْفَقْعِ).", japanese: "人々はトリュフ（ファグア）を探しに出かけます。" },
      { speaker: "ナレーター", arabic: "الرَّبِيعُ أَجْمَلُ فُصُولِ السَّنَةِ فِي الصَّحْرَاءِ.", japanese: "春は砂漠で最も美しい季節です。" }
    ]
  },
  {
    id: 277,
    title: "正直な商人",
    category: "物語",
    level: "中級",
    contentVoweled: "كَانَ هُنَاكَ تَاجِرٌ يَبِيعُ الثِّيَابَ. اكْتَشَفَ عَيْبًا فِي أَحَدِ الثِّيَابِ. عِنْدَمَا جَاءَ الْمُشْتَرِي، لَمْ يُخْفِ التَّاجِرُ الْعَيْبَ. قَالَ: هَذَا الثَّوْبُ فِيهِ قَطْعٌ صَغِيرٌ. اشْتَرَى الرَّجُلُ الثَّوْبَ وَأَعْجَبَتْهُ أَمَانَةُ التَّاجِرِ.",
    contentPlain: "كان هناك تاجر يبيع الثياب. اكتشف عيبا في أحد الثياب. عندما جاء المشتري، لم يخف التاجر العيب. قال: هذا الثوب فيه قطع صغير. اشترى الرجل الثوب وأعجبته أمانة التاجر.",
    vocabList: [
      { word: "أَمِين", meaning: "正直な/信頼できる" },
      { word: "عَيْب", meaning: "欠陥/欠点" },
      { word: "بَيْع", meaning: "販売" },
      { word: "يُخْفِي", meaning: "隠す" }, // 追加
      { word: "قَطْع", meaning: "切れ目/破れ" } // 追加
    ],
    questions: [
      { id: 2771, type: "reading", text: "商人は何を売っていましたか？", options: ["車", "服", "馬", "家"], correctIndex: 1, explanation: "「ثَوْب (服)」を売っていました。" },
      { id: 2772, type: "reading", text: "商品には何がありましたか？", options: ["お金", "欠陥（傷）", "サイン", "おまけ"], correctIndex: 1, explanation: "「عَيْب (欠陥)」がありました。" },
      { id: 2773, type: "reading", text: "商人はどうしましたか？", options: ["隠した", "客に伝えた", "嘘をついた", "安くした"], correctIndex: 1, explanation: "「لَمْ يُخْفِ (隠さなかった)」＝客に伝えました。" },
      { id: 2774, type: "vocabulary", text: "「ثِقَة」の意味は？", options: ["疑い", "信頼", "嘘", "金"], correctIndex: 1, explanation: "Trust（信頼）です。" },
      { id: 2775, type: "grammar", text: "「隠します」", options: ["يُخْفِي", "يُظْهِرُ", "يَقُولُ", "يَعْرِفُ"], correctIndex: 0, explanation: "「Yukhfī」です。" },
      // 追加：やや難しい文法問題
      { id: 2776, type: "grammar", text: "「لَمْ يُخْفِ」で動詞の最後がKasraなのは？", options: ["所有格だから", "否定のLam（Jussive）により弱文字（Yā）が落ちたから", "女性形だから", "間違い"], correctIndex: 1, explanation: "「Akhfā - Yukhfī」の要求形（Majzūm）は、語尾の長母音（Yā）が脱落して「Yukhfi」となります。" },
      { id: 2777, type: "grammar", text: "「أَعْجَبَتْهُ أَمَانَةُ」の「Amānatu」が主格（u段）なのは？", options: ["目的語だから", "動詞「A'jaba」の主語だから", "所有格だから", "間違い"], correctIndex: 1, explanation: "「〜を感心させた（気に入らせた）」という動詞の構造で、「Amāna（正直さ）」が「彼」を感心させた「主語」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "كَانَ هُنَاكَ تَاجِرٌ يَبِيعُ الثِّيَابَ.", japanese: "服を売る商人がいました。" },
      { speaker: "ナレーター", arabic: "اكْتَشَفَ عَيْبًا فِي أَحَدِ الثِّيَابِ.", japanese: "彼は服の一つに欠陥を見つけました。" },
      { speaker: "ナレーター", arabic: "عِنْدَمَا جَاءَ الْمُشْتَرِي، لَمْ يُخْفِ التَّاجِرُ الْعَيْبَ.", japanese: "客が来た時、商人は欠陥を隠しませんでした。" },
      { speaker: "ナレーター", arabic: "قَالَ: هَذَا الثَّوْبُ فِيهِ قَطْعٌ صَغِيرٌ.", japanese: "彼は「この服には小さな切れ目があります」と言いました。" },
      { speaker: "ナレーター", arabic: "اشْتَرَى الرَّجُلُ الثَّوْبَ وَأَعْجَبَتْهُ أَمَانَةُ التَّاجِرِ.", japanese: "男は服を買い、商人の正直さに感心しました。" }
    ]
  },
  {
    id: 278,
    title: "テレビゲーム",
    category: "記事",
    level: "中級",
    contentVoweled: "يَقْضِي الْأَطْفَالُ سَاعَاتٍ أَمَامَ الشَّاشَةِ. بَعْضُ الْأَلْعَابِ مُفِيدٌ لِلْعَقْلِ. لَكِنَّ الْجُلُوسَ الطَّوِيلَ مُضِرٌّ بِالْجِسْمِ. قَدْ تُسَبِّبُ الْأَلْعَابُ الْعُنْفَ أَوِ الْإِدْمَانَ. يَجِبُ تَحْدِيدُ وَقْتِ اللَّعِبِ.",
    contentPlain: "يقضي الأطفال ساعات أمام الشاشة. بعض الألعاب مفيد للعقل. لكن الجلوس الطويل مضر بالجسم. قد تسبب الألعاب العنف أو الإدمان. يجب تحديد وقت اللعب.",
    vocabList: [
      { word: "لُعْبَة", meaning: "ゲーム" },
      { word: "شَاشَة", meaning: "画面" },
      { word: "عَيْن", meaning: "目" },
      { word: "مُضِرّ", meaning: "有害な" }, // 追加
      { word: "عُنْف", meaning: "暴力" } // 追加
    ],
    questions: [
      { id: 2781, type: "reading", text: "子供たちは何が好きですか？", options: ["勉強", "テレビゲーム", "掃除", "寝ること"], correctIndex: 1, explanation: "「الْأَلْعَاب الْإِلِكْتُرُونِيَّة」です。" },
      { id: 2782, type: "reading", text: "ゲームの良い点は？", options: ["目が悪くなる", "楽しい/知能を育てる", "眠くなる", "太る"], correctIndex: 1, explanation: "「مُفِيدٌ لِلْعَقْلِ (頭脳に有益)」な場合もあります。" },
      { id: 2783, type: "reading", text: "悪い点は？", options: ["友達が増える", "体を傷つける/中毒", "頭が良くなる", "金持ちになる"], correctIndex: 1, explanation: "「مُضِرٌّ بِالْجِسْمِ (体に有害)」や「الْإِدْمَان (依存)」です。" },
      { id: 2784, type: "vocabulary", text: "「إِدْمَان」の意味は？", options: ["趣味", "依存/中毒", "スポーツ", "仕事"], correctIndex: 1, explanation: "Addiction（依存）です。" },
      { id: 2785, type: "grammar", text: "「遊びます」", options: ["يَلْعَبُ", "يَدْرُسُ", "يَعْمَلُ", "يَأْكُلُ"], correctIndex: 0, explanation: "「Yal'abu」です。" },
      // 追加：やや難しい文法問題
      { id: 2786, type: "grammar", text: "「يَقْضِي」の動詞の種類は？", options: ["Mahmūz (Hamza付き)", "Mithāl (最初の文字が弱文字)", "Nāqiṣ (最後の文字が弱文字)", "Ṣaḥīḥ (健全動詞)"], correctIndex: 2, explanation: "最後がYāで終わる弱文字動詞なので「Nāqiṣ」です。" },
      { id: 2787, type: "grammar", text: "「سَاعَاتٍ」がKasra（i段）なのは？", options: ["属格だから", "女性規則複数の対格だから", "主格だから", "間違い"], correctIndex: 1, explanation: "「Yaqḍī (過ごす)」の目的語ですが、女性規則複数（Jam' Mu'annath Sālim）のため、対格の印としてFathaの代わりにKasraを取ります。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "يَقْضِي الْأَطْفَالُ سَاعَاتٍ أَمَامَ الشَّاشَةِ.", japanese: "子供たちは画面の前で何時間も過ごします。" },
      { speaker: "ナレーター", arabic: "بَعْضُ الْأَلْعَابِ مُفِيدٌ لِلْعَقْلِ.", japanese: "いくつかのゲームは頭脳に有益です。" },
      { speaker: "ナレーター", arabic: "لَكِنَّ الْجُلُوسَ الطَّوِيلَ مُضِرٌّ بِالْجِسْمِ.", japanese: "しかし、長時間座ることは体に有害です。" },
      { speaker: "ナレーター", arabic: "قَدْ تُسَبِّبُ الْأَلْعَابُ الْعُنْفَ أَوِ الْإِدْمَانَ.", japanese: "ゲームは暴力や依存を引き起こす可能性があります。" },
      { speaker: "ナレーター", arabic: "يَجِبُ تَحْدِيدُ وَقْتِ اللَّعِبِ.", japanese: "遊ぶ時間を制限しなければなりません。" }
    ]
  },
  {
    id: 279,
    title: "サウジの冬",
    category: "文化",
    level: "中級",
    contentVoweled: "يَنْتَظِرُ النَّاسُ الشِّتَاءَ بِشَوْقٍ. يَلْبَسُونَ الْفَرْوَةَ لِلتَّدْفِئَةِ. يَشْرَبُونَ الْحَلِيبَ بِالزَّنْجَبِيلِ. يَجْلِسُونَ حَوْلَ شَبَّةِ النَّارِ فِي الْمَخَيَّمَاتِ. الْجَوُّ يَكُونُ بَارِدًا خَاصَّةً فِي الشَّمَالِ.",
    contentPlain: "ينتظر الناس الشتاء بشوق. يلبسون الفروة للتدفئة. يشربون الحليب بالزنجبيل. يجلسون حول شبة النار في المخيمات. الجو يكون باردا خاصة في الشمال.",
    vocabList: [
      { word: "شِتَاء", meaning: "冬" },
      { word: "نَار", meaning: "火" },
      { word: "فَرْوَة", meaning: "ファルワ（冬のコート）" },
      { word: "شَوْق", meaning: "憧れ/切望" }, // 追加
      { word: "تَدْفِئَة", meaning: "暖房/暖めること" } // 追加
    ],
    questions: [
      { id: 2791, type: "reading", text: "サウジの冬はどうですか？", options: ["とても長い", "短い", "暑い", "雪が多い"], correctIndex: 1, explanation: "一般的に短いです（ID 279 元データより）。" },
      { id: 2792, type: "reading", text: "人々は何を着ますか？", options: ["水着", "ファルワ（毛皮のコート）", "薄い服", "帽子"], correctIndex: 1, explanation: "「الْفَرْوَة」を着ます。" },
      { id: 2793, type: "reading", text: "どこに集まりますか？", options: ["プールの周り", "火の周り", "冷蔵庫の前", "屋根の上"], correctIndex: 1, explanation: "「حَوْلَ شَبَّةِ النَّارِ」です。" },
      { id: 2794, type: "vocabulary", text: "「زَنْجَبِيل」の意味は？", options: ["コーヒー", "生姜（ジンジャー）", "お茶", "砂糖"], correctIndex: 1, explanation: "冬に人気の飲み物、生姜（Zanjabīl）です。" },
      { id: 2795, type: "grammar", text: "「着ます」", options: ["يَلْبَسُ", "يَخْلَعُ", "يَشْتَرِي", "يَغْسِلُ"], correctIndex: 0, explanation: "「Yalbasu」です。" },
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "يَنْتَظِرُ النَّاسُ الشِّتَاءَ بِشَوْقٍ.", japanese: "人々は冬を待ち焦がれます。" },
      { speaker: "ナレーター", arabic: "يَلْبَسُونَ الْفَرْوَةَ لِلتَّدْفِئَةِ.", japanese: "彼らは暖まるためにファルワを着ます。" },
      { speaker: "ナレーター", arabic: "يَشْرَبُونَ الْحَلِيبَ بِالزَّنْجَبِيلِ.", japanese: "彼らは生姜入りミルクを飲みます。" },
      { speaker: "ナレーター", arabic: "يَجْلِسُونَ حَوْلَ شَبَّةِ النَّارِ فِي الْمَخَيَّمَاتِ.", japanese: "キャンプで焚き火の周りに座ります。" },
      { speaker: "ナレーター", arabic: "الْجَوُّ يَكُونُ بَارِدًا خَاصَّةً فِي الشَّمَالِ.", japanese: "特に北部では天気が寒くなります。" }
    ]
  },
 // =================================================================
  //  PART 4: 上級コース (Advanced) - タシュキールなし・超長文読解
  //  ID 1000〜
  // =================================================================

  // --- 1. 経済・ビジョン (Economy) ---
  {
    id: 1000,
    title: "サウジ・ビジョン2030（詳細）",
    category: "経済",
    level: "上級",
    contentVoweled: "رُؤْيَةُ الْمَمْلَكَةِ 2030 لَيْسَتْ مُجَرَّدَ خُطَّةٍ اقْتِصَادِيَّةٍ، بَلْ هِيَ خَارِطَةُ طَرِيقٍ لِتَحَوُّلٍ اجْتِمَاعِيٍّ وَثَقَافِيٍّ شَامِلٍ. أَطْلَقَ وَلِيُّ الْعَهْدِ الْأَمِيرُ مُحَمَّدُ بْنُ سَلْمَانَ هَذِهِ الرُّؤْيَةَ لِبِنَاءِ مُسْتَقْبَلٍ مُشْرِقٍ. تَهْدِفُ الرُّؤْيَةُ بِشَكْلٍ أَسَاسِيٍّ إِلَى تَنْوِيعِ مَصَادِرِ الدَّخْلِ وَعَدَمِ الِاعْتِمَادِ عَلَى النِّفْطِ فَقَطْ. تَمَّ فَتْحُ الْمَجَالِ لِلسِّيَاحَةِ وَالتَّرْفِيهِ لِتَكُونَ رَوَافِدَ جَدِيدَةً لِلِاقْتِصَادِ. تُرَكِّزُ الْخُطَّةُ أَيْضًا عَلَى تَمْكِينِ الْمَرْأَةِ وَرَفْعِ نِسْبَةِ مُشَارَكَتِهَا فِي سُوقِ الْعَمَلِ. تَشْمَلُ الرُّؤْيَةُ مَشَارِيعَ ضَخْمَةً مِثْلَ مَدِينَةِ 'نِيُوم' الذَّكِيَّةِ. هَذِهِ الْخُطَوَاتُ سَتَجْعَلُ الْمَمْلَكَةَ قُوَّةً اسْتِثْمَارِيَّةً عَالَمِيَّةً.",
    contentPlain: "رؤية المملكة 2030 ليست مجرد خطة اقتصادية، بل هي خارطة طريق لتحول اجتماعي وثقافي شامل. أطلق ولي العهد الأمير محمد بن سلمان هذه الرؤية لبناء مستقبل مشرق. تهدف الرؤية بشكل أساسي إلى تنويع مصادر الدخل وعدم الاعتماد على النفط فقط. تم فتح المجال للسياحة والترفيه لتكون روافد جديدة للاقتصاد. تركز الخطة أيضا على تمكين المرأة ورفع نسبة مشاركتها في سوق العمل. تشمل الرؤية مشاريع ضخمة مثل مدينة 'نيوم' الذكية. هذه الخطوات ستجعل المملكة قوة استثمارية عالمية.",
    vocabList: [
      { word: "شَامِل", meaning: "包括的な" },
      { word: "تَمْكِين", meaning: "エンパワーメント" },
      { word: "اسْتِثْمَار", meaning: "投資" },
      { word: "عِمْلَاق", meaning: "巨大な" },
      { word: "رَافِد", meaning: "支流/源" }
    ],
    questions: [
      { id: 10001, type: "reading", text: "ビジョン2030は単なる経済計画ですか？", options: ["はい、経済のみです", "いいえ、包括的な社会変革です", "単なる観光計画です", "石油計画です"], correctIndex: 1, explanation: "本文に「ليس مجرد خطة اقتصادية بل تحول اجتماعي（単なる経済計画ではなく社会変革）」とあります。" },
      { id: 10002, type: "reading", text: "経済に関しての主な目的は？", options: ["石油だけに頼る", "経済を多様化する", "輸入を禁止する", "税金をなくす"], correctIndex: 1, explanation: "「تَنْوِيعِ مَصَادِرِ الدَّخْلِ（収入源の多様化）」と明記されています。" },
      { id: 10003, type: "reading", text: "女性に関しては何を目指していますか？", options: ["労働参加を減らす", "家にいさせる", "エンパワーメントと労働参加の増加", "海外へ送る"], correctIndex: 2, explanation: "「تمكين المرأة وزيادة مشاركتها（女性のエンパワーメントと参加増加）」とあります。" },
      { id: 10004, type: "vocabulary", text: "「تَطْوِير」の意味は？", options: ["破壊", "開発/発展", "停止", "購入"], correctIndex: 1, explanation: "Development（開発）です。" },
      { id: 10005, type: "grammar", text: "「〜に加えて」", options: ["بِالْإِضَافَةِ إِلَى", "بِسَبَبِ", "رَغْمَ", "مِنْ أَجْلِ"], correctIndex: 0, explanation: "「Bi-al-iḍāfati ilā」は文中で「さらに〜」という意味で使われています。" },
      // 上級文法問題
      { id: 10006, type: "grammar_advanced", text: "文頭の「رؤية」の正しい語尾は？", options: ["u (ダンマ)", "a (ファトハ)", "i (カスラ)", "un (タンウィーン・ダンマ)"], correctIndex: 0, explanation: "名詞文の文頭にある「主語（Mubtada'）」であるため、主格（Marfū'）となりダンマがつきます。後ろに修飾語（Al-Mamlaka）が続くイダーファ構造のため、タンウィーンはつきません。" },
      { id: 10007, type: "grammar_advanced", text: "「ليست مجرد خطة」の「مجرد」の正しい語尾は？", options: ["u (ダンマ)", "a (ファトハ)", "i (カスラ)", "un (タンウィーン・ダンマ)"], correctIndex: 1, explanation: "否定動詞「Laysa」の「述語（Khabar Laysa）」は対格（Manṣūb）になるルールがあるため、ファトハがつきます。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "رُؤْيَةُ الْمَمْلَكَةِ 2030 لَيْسَتْ مُجَرَّدَ خُطَّةٍ اقْتِصَادِيَّةٍ، بَلْ هِيَ خَارِطَةُ طَرِيقٍ لِتَحَوُّلٍ اجْتِمَاعِيٍّ وَثَقَافِيٍّ شَامِلٍ.", japanese: "サウジ・ビジョン2030は単なる経済計画ではなく、包括的な社会的・文化的変革へのロードマップです。" },
      { speaker: "記事", arabic: "أَطْلَقَ وَلِيُّ الْعَهْدِ الْأَمِيرُ مُحَمَّدُ بْنُ سَلْمَانَ هَذِهِ الرُّؤْيَةَ لِبِنَاءِ مُسْتَقْبَلٍ مُشْرِقٍ.", japanese: "ムハンマド・ビン・サルマン皇太子は、輝かしい未来を築くためにこのビジョンを発表しました。" },
      { speaker: "記事", arabic: "تَهْدِفُ الرُّؤْيَةُ بِشَكْلٍ أَسَاسِيٍّ إِلَى تَنْوِيعِ مَصَادِرِ الدَّخْلِ وَعَدَمِ الِاعْتِمَادِ عَلَى النِّفْطِ فَقَطْ.", japanese: "ビジョンは基本的に、収入源を多様化し、石油のみに依存しないことを目指しています。" },
      { speaker: "記事", arabic: "تَمَّ فَتْحُ الْمَجَالِ لِلسِّيَاحَةِ وَالتَّرْفِيهِ لِتَكُونَ رَوَافِدَ جَدِيدَةً لِلِاقْتِصَادِ.", japanese: "観光とエンターテインメントの分野が、経済の新しい支流となるよう開放されました。" },
      { speaker: "記事", arabic: "تُرَكِّزُ الْخُطَّةُ أَيْضًا عَلَى تَمْكِينِ الْمَرْأَةِ وَرَفْعِ نِسْبَةِ مُشَارَكَتِهَا فِي سُوقِ الْعَمَلِ.", japanese: "計画はまた、女性のエンパワーメントと労働市場への参加率向上にも焦点を当てています。" },
      { speaker: "記事", arabic: "تَشْمَلُ الرُّؤْيَةُ مَشَارِيعَ ضَخْمَةً مِثْلَ مَدِينَةِ 'نِيُوم' الذَّكِيَّةِ.", japanese: "ビジョンには、スマートシティ「NEOM」のような巨大プロジェクトが含まれています。" },
      { speaker: "記事", arabic: "هَذِهِ الْخُطَوَاتُ سَتَجْعَلُ الْمَمْلَكَةَ قُوَّةً اسْتِثْمَارِيَّةً عَالَمِيَّةً.", japanese: "これらのステップは、王国を世界的な投資大国にするでしょう。" }
    ]
  },
  {
    id: 1001,
    title: "イスラムの黄金時代（詳細）",
    category: "歴史",
    level: "上級",
    contentVoweled: "شَهِدَ الْعَصْرُ الذَّهَبِيُّ لِلْإِسْلَامِ تَقَدُّمًا حَضَارِيًّا لَا مَثِيلَ لَهُ. فِي الْعَصْرِ الْعَبَّاسِيِّ، أَصْبَحَتْ بَغْدَادُ مَرْكَزًا لِلْعِلْمِ وَالْعُلَمَاءِ. أَنْشَأَ الْخَلِيفَةُ الْمَأْمُونُ مَكْتَبَةً ضَخْمَةً سَمَّاهَا 'بَيْتَ الْحِكْمَةِ'. قَامَ الْمُتَرْجِمُونَ بِنَقْلِ عُلُومِ الْأُمَمِ السَّابِقَةِ إِلَى الْعَرَبِيَّةِ. بَرَزَ عُلَمَاءُ مِثْلُ الْخُوَارِزْمِيِّ فِي الرِّيَاضِيَّاتِ وَابْنِ سِينَا فِي الطِّبِّ. هَذِهِ الْإِنْجَازَاتُ مَهَّدَتِ الطَّرِيقَ لِلنَّهْضَةِ الْأُورُوبِيَّةِ لَاحِقًا.",
    contentPlain: "شهد العصر الذهبي للإسلام تقدما حضاريا لا مثيل له. في العصر العباسي، أصبحت بغداد مركزا للعلم والعلماء. أنشأ الخليفة المأمون مكتبة ضخمة سماها 'بيت الحكمة'. قام المترجمون بنقل علوم الأمم السابقة إلى العربية. برز علماء مثل الخوارزمي في الرياضيات وابن سينا في الطب. هذه الإنجازات مهدت الطريق للنهضة الأوروبية لاحقا.",
    vocabList: [
      { word: "عَصْر", meaning: "時代" },
      { word: "تَقَدُّم", meaning: "進歩" },
      { word: "تَرْجَمَة", meaning: "翻訳" },
      { word: "نَهْضَة", meaning: "復興/ルネサンス" },
      { word: "مَثِيل", meaning: "類似するもの/比類" }
    ],
    questions: [
      { id: 10011, type: "reading", text: "黄金時代には何がありましたか？", options: ["後退", "科学と芸術の類まれな進歩", "飢餓", "戦争のみ"], correctIndex: 1, explanation: "「تقدما حضاريا لا مثيل له (類を見ない文明の進歩)」と記述されています。" },
      { id: 10012, type: "reading", text: "当時の「知の都」はどこでしたか？", options: ["パリ", "ロンドン", "バグダッド", "ローマ"], correctIndex: 2, explanation: "「أَصْبَحَتْ بَغْدَادُ مَرْكَزًا (バグダッドは中心地となった)」とあります。" },
      { id: 10013, type: "reading", text: "「知恵の館」で主に行われたことは？", options: ["料理", "翻訳と研究", "スポーツ", "睡眠"], correctIndex: 1, explanation: "「بِنَقْلِ عُلُومِ الْأُمَمِ السَّابِقَةِ (過去の国々の学問の翻訳・移転)」です。" },
      { id: 10014, type: "vocabulary", text: "「عُلَمَاء」の意味は？", options: ["学生", "学者たち", "王様", "兵士"], correctIndex: 1, explanation: "Scholars（学者・複数形）です。" },
      { id: 10015, type: "grammar", text: "「道を切り開いた」", options: ["مَهَّدَ الطَّرِيقَ", "أَغْلَقَ الطَّرِيقَ", "مَشَى فِي الطَّرِيقِ", "بَنَى الطَّرِيقَ"], correctIndex: 0, explanation: "「Mahhada al-ṭarīqa (Paved the way)」は重要な熟語です。" },
      // 上級文法問題
      { id: 10016, type: "grammar_advanced", text: "「شهد ... تقدما」の「تقدما」の正しい語尾は？", options: ["un (タンウィーン・ダンマ)", "an (タンウィーン・ファトハ)", "in (タンウィーン・カスラ)", "u (ダンマ)"], correctIndex: 1, explanation: "動詞「Shahida（目撃した/経験した）」の「目的語（Maf'ūl Bihi）」であるため、対格（Manṣūb）となり、タンウィーン・ファトハがつきます。" },
      { id: 10017, type: "grammar_advanced", text: "「لا مثيل له」の「مثيل」の正しい語尾は？", options: ["a (ファトハ・タンウィーンなし)", "an (タンウィーン・ファトハ)", "u (ダンマ)", "i (カスラ)"], correctIndex: 0, explanation: "「〜は全くない」という意味の「絶対否定のLa（La al-Nafiya lil-Jins）」の後では、名詞は対格かつタンウィーンなし（Mabnī 'alā al-Fatḥ）になります。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "شَهِدَ الْعَصْرُ الذَّهَبِيُّ لِلْإِسْلَامِ تَقَدُّمًا حَضَارِيًّا لَا مَثِيلَ لَهُ.", japanese: "イスラムの黄金時代は、類を見ない文明的進歩を目撃しました。" },
      { speaker: "記事", arabic: "فِي الْعَصْرِ الْعَبَّاسِيِّ، أَصْبَحَتْ بَغْدَادُ مَرْكَزًا لِلْعِلْمِ وَالْعُلَمَاءِ.", japanese: "アッバース朝時代、バグダッドは学問と学者の中心地となりました。" },
      { speaker: "記事", arabic: "أَنْشَأَ الْخَلِيفَةُ الْمَأْمُونُ مَكْتَبَةً ضَخْمَةً سَمَّاهَا 'بَيْتَ الْحِكْمَةِ'.", japanese: "カリフ・マアムーンは「知恵の館」と名付けた巨大な図書館を設立しました。" },
      { speaker: "記事", arabic: "قَامَ الْمُتَرْجِمُونَ بِنَقْلِ عُلُومِ الْأُمَمِ السَّابِقَةِ إِلَى الْعَرَبِيَّةِ.", japanese: "翻訳者たちは過去の国々の学問をアラビア語に移しました。" },
      { speaker: "記事", arabic: "بَرَزَ عُلَمَاءُ مِثْلُ الْخُوَارِزْمِيِّ فِي الرِّيَاضِيَّاتِ وَابْنِ سِينَا فِي الطِّبِّ.", japanese: "数学のフワーリズミーや医学のイブン・シーナーのような学者が頭角を現しました。" },
      { speaker: "記事", arabic: "هَذِهِ الْإِنْجَازَاتُ مَهَّدَتِ الطَّرِيقَ لِلنَّهْضَةِ الْأُورُوبِيَّةِ لَاحِقًا.", japanese: "これらの成果は、後のヨーロッパのルネサンスへの道を切り開きました。" }
    ]
  },
  {
    id: 1002,
    title: "詩人アル・ムタナッビー（詳細）",
    category: "文学",
    level: "上級",
    contentVoweled: "أَبُو الطَّيِّبِ الْمُتَنَبِّي هُوَ شَاعِرُ الْعَرَبِ الْأَكْبَرُ، الَّذِي مَلَأَ الدُّنْيَا وَشَغَلَ النَّاسَ. يُعَدُّ الْمُتَنَبِّي مِنْ أَعْظَمِ شُعَرَاءِ الْعَرَبِ عَلَى الْإِطْلَاقِ. كَانَ طَمُوحًا جِدًّا وَيَبْحَثُ عَنِ الْمَجْدِ وَالسُّلْطَةِ. ارْتَبَطَ اسْمُهُ بِالْأَمِيرِ سَيْفِ الدَّوْلَةِ فِي حَلَبَ. قُتِلَ بسَبَبِ قَصِيدَةٍ هَجَا فِيهَا أَحَدَ خُصُومِهِ. عِنْدَمَا ذَكَّرَهُ الْغُلَامُ بِبَيْتِ الشِّعْرِ، عَادَ لِلْقِتَالِ وَمَاتَ شُجَاعًا.",
    contentPlain: "أبو الطيب المتنبي هو شاعر العرب الأكبر، الذي ملأ الدنيا وشغل الناس. يعد المتنبي من أعظم شعراء العرب على الإطلاق. كان طموحا جدا ويبحث عن المجد والسلطة. ارتبط اسمه بالأمير سيف الدولة في حلب. قتل بسبب قصيدة هجا فيها أحد خصومه. عندما ذكره الغلام ببيت الشعر، عاد للقتال ومات شجاعا.",
    vocabList: [
      { word: "بَلِيغ", meaning: "雄弁な" },
      { word: "فَخْر", meaning: "誇り" },
      { word: "هَجَا", meaning: "風刺した/けなした" },
      { word: "أُسْطُورَة", meaning: "伝説" },
      { word: "طَمُوح", meaning: "野心的な" }
    ],
    questions: [
      { id: 10021, type: "reading", text: "ムタナッビーはどんな詩人として知られていますか？", options: ["謙虚な詩人", "世界を満たし人々を忙殺した（話題にした）詩人", "静かな詩人", "商人の詩人"], correctIndex: 1, explanation: "「مَلَأَ الدُّنْيَا وَشَغَلَ النَّاسَ」という有名な形容があります。" },
      { id: 10022, type: "reading", text: "彼は誰の宮廷で最も有名でしたか？", options: ["ハールーン・ラシード", "サイフ・アッダウラ（アレッポ）", "サラディン", "ムアーウィヤ"], correctIndex: 1, explanation: "「سَيْفِ الدَّوْلَةِ فِي حَلَبَ」です。" },
      { id: 10023, type: "reading", text: "彼が殺された理由は何ですか？", options: ["病気", "戦争", "彼が詠んだ風刺詩", "お金"], correctIndex: 2, explanation: "「قُتِلَ بسَبَبِ قَصِيدَةٍ هَجَا فِيهَا (風刺した詩が原因で殺された)」です。" },
      { id: 10024, type: "reading", text: "逃げようとした彼を誰が止めましたか？", options: ["敵", "彼の召使い（少年）", "王様", "馬"], correctIndex: 1, explanation: "「ذَكَّرَهُ الْغُلَامُ (少年が彼に思い出させた)」です。" },
      { id: 10025, type: "grammar", text: "「〜ではないですか？（否定疑問）」", options: ["أَلَسْتَ", "هَلْ أَنْتَ", "مَنْ أَنْتَ", "كَيْفَ أَنْتَ"], correctIndex: 0, explanation: "「A-lasta... (Are you not...?)」という有名な問いかけです。" },
      // 上級文法問題
      { id: 10026, type: "grammar_advanced", text: "「هو شاعر العرب」の「شاعر」の正しい語尾は？", options: ["u (ダンマ)", "a (ファトハ)", "i (カスラ)", "un (タンウィーン)"], correctIndex: 0, explanation: "名詞文において「Huwa（彼）」が主語で、「Shā'ir（詩人）」が「述語（Khabar）」となるため、主格（Marfū'）でダンマがつきます。" },
      { id: 10027, type: "grammar_advanced", text: "「قصيدة هجا فيها」の「هجا」の動詞の種類は？", options: ["過去形（健全動詞）", "過去形（弱文字動詞・Naqis）", "現在形", "命令形"], correctIndex: 1, explanation: "「Hajā (風刺した)」は語尾がアリフ（弱文字）で終わる「Naqis（欠損動詞）」の過去形です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "أَبُو الطَّيِّبِ الْمُتَنَبِّي هُوَ شَاعِرُ الْعَرَبِ الْأَكْبَرُ، الَّذِي مَلَأَ الدُّنْيَا وَشَغَلَ النَّاسَ.", japanese: "アブー・アッ＝タイヤィブ・アル＝ムタナッビーは、世界を満たし人々を（話題で）忙殺した、最大のアラブ詩人です。" },
      { speaker: "記事", arabic: "يُعَدُّ الْمُتَنَبِّي مِنْ أَعْظَمِ شُعَرَاءِ الْعَرَبِ عَلَى الْإِطْلَاقِ.", japanese: "ムタナッビーは史上最も偉大なアラブの詩人の一人とみなされています。" },
      { speaker: "記事", arabic: "كَانَ طَمُوحًا جِدًّا وَيَبْحَثُ عَنِ الْمَجْدِ وَالسُّلْطَةِ.", japanese: "彼は非常に野心的で、栄光と権力を求めていました。" },
      { speaker: "記事", arabic: "ارْتَبَطَ اسْمُهُ بِالْأَمِيرِ سَيْفِ الدَّوْلَةِ فِي حَلَبَ.", japanese: "彼の名前はアレッポのサイフ・アッダウラ公と結びついています。" },
      { speaker: "記事", arabic: "قُتِلَ بسَبَبِ قَصِيدَةٍ هَجَا فِيهَا أَحَدَ خُصُومِهِ.", japanese: "彼は敵の一人を風刺した詩が原因で殺されました。" },
      { speaker: "記事", arabic: "عِنْدَمَا ذَكَّرَهُ الْغُلَامُ بِبَيْتِ الشِّعْرِ، عَادَ لِلْقِتَالِ وَمَاتَ شُجَاعًا.", japanese: "召使いにその詩句を思い出させられた時、彼は戦いに戻り、勇敢に死にました。" }
    ]
  },
  {
    id: 1003,
    title: "再生可能エネルギー（詳細）",
    category: "科学",
    level: "上級",
    contentVoweled: "يُوَاجِهُ الْعَالَمُ تَحَدِّيَاتٍ بِيئِيَّةً خَطِيرَةً بِسَبَبِ الِاحْتِبَاسِ الْحَرَارِيِّ. التَّغَيُّرُ الْمُنَاخِيُّ يُهَدِّدُ كَوْكَبَنَا. أَطْلَقَتِ السُّعُودِيَّةُ مُبَادَرَةً طَمُوحَةً لِحِمَايَةِ الْبِيئَةِ. تَسْتَهْدِفُ الْخُطَّةُ زِرَاعَةَ عَشَرَةِ مِلْيَارَاتِ شَجَرَةٍ. سَيَتِمُّ الِاعْتِمَادُ عَلَى الطَّاقَةِ الشَّمْسِيَّةِ وَطَاقَةِ الرِّيَاحِ. هَذَا سَيُسَاعِدُ فِي تَقْلِيلِ الِانْبِعَاثَاتِ الضَّارَّةِ.",
    contentPlain: "يواجه العالم تحديات بيئية خطيرة بسبب الاحتباس الحراري. التغير المناخي يهدد كوكبنا. أطلقت السعودية مبادرة طموحة لحماية البيئة. تستهدف الخطة زراعة عشرة مليارات شجرة. سيتم الاعتماد على الطاقة الشمسية وطاقة الرياح. هذا سيساعد في تقليل الانبعاثات الضارة.",
    vocabList: [
      { word: "اِحْتِبَاس", meaning: "温暖化/保持" },
      { word: "تَحَدِّيَات", meaning: "課題/チャレンジ" },
      { word: "انْبِعَاثَات", meaning: "排出" },
      { word: "تَوْلِيد", meaning: "発電/生成" },
      { word: "ضَارّ", meaning: "有害な" }
    ],
    questions: [
      { id: 10031, type: "reading", text: "世界が直面している問題の原因は？", options: ["植林", "地球温暖化と気候変動", "人口減少", "平和"], correctIndex: 1, explanation: "「بسبب الاحتباس الحراري (温暖化が原因で)」です。" },
      { id: 10032, type: "reading", text: "「サウジ・グリーン」イニシアチブの植樹目標は？", options: ["100万本", "1000本", "100億本", "50億本"], correctIndex: 2, explanation: "「عَشَرَةِ مِلْيَارَاتِ شَجَرَةٍ (10 billion trees)」と書かれています。" },
      { id: 10033, type: "reading", text: "どのようなエネルギーに依存しますか？", options: ["石炭と石油", "太陽光と風力", "原子力のみ", "ガスのみ"], correctIndex: 1, explanation: "「الطَّاقَةِ الشَّمْسِيَّةِ وَطَاقَةِ الرِّيَاحِ」です。" },
      { id: 10034, type: "vocabulary", text: "「حِقْبَة」の意味は？", options: ["場所", "時代/Era", "カバン", "権利"], correctIndex: 1, explanation: "Era/Period（時代）です。" },
      { id: 10035, type: "grammar", text: "「貢献します」", options: ["يُسْهِمُ فِي", "يَأْخُذُ مِنْ", "يَقْطَعُ", "يَنْسَى"], correctIndex: 0, explanation: "「Yushimu fī (Contribute to)」です。" },
      // 上級文法問題
      { id: 10036, type: "grammar_advanced", text: "「يواجه العالم تحديات」の「تحديات」の正しい語尾は？", options: ["in (タンウィーン・カスラ)", "an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "i (カスラ)"], correctIndex: 0, explanation: "「Yuwaajihu (直面する)」の目的語ですが、「āt」で終わる女性規則複数（Jam' Mu'annath Sālim）は、対格の場合ファトハの代わりに「カスラ（Kasra）」を取ります。" },
      { id: 10037, type: "grammar_advanced", text: "「زراعة عشرة مليارات」の「عشرة」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "un (タンウィーン)"], correctIndex: 0, explanation: "「Zirā'a (植えること)」という動名詞がイダーファの第1要素となり、「'Ashara (10)」が第2要素（Muḍāf Ilayhi）となるため、属格（Majrūr）となりカスラがつきます。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "يُوَاجِهُ الْعَالَمُ تَحَدِّيَاتٍ بِيئِيَّةً خَطِيرَةً بِسَبَبِ الِاحْتِبَاسِ الْحَرَارِيِّ.", japanese: "世界は地球温暖化による深刻な環境課題に直面しています。" },
      { speaker: "記事", arabic: "التَّغَيُّرُ الْمُنَاخِيُّ يُهَدِّدُ كَوْكَبَنَا.", japanese: "気候変動は私たちの惑星を脅かしています。" },
      { speaker: "記事", arabic: "أَطْلَقَتِ السُّعُودِيَّةُ مُبَادَرَةً طَمُوحَةً لِحِمَايَةِ الْبِيئَةِ.", japanese: "サウジアラビアは環境保護のための野心的なイニシアチブを開始しました。" },
      { speaker: "記事", arabic: "تَسْتَهْدِفُ الْخُطَّةُ زِرَاعَةَ عَشَرَةِ مِلْيَارَاتِ شَجَرَةٍ.", japanese: "計画は100億本の植樹を目標としています。" },
      { speaker: "記事", arabic: "سَيَتِمُّ الِاعْتِمَادُ عَلَى الطَّاقَةِ الشَّمْسِيَّةِ وَطَاقَةِ الرِّيَاحِ.", japanese: "太陽光エネルギーと風力エネルギーに依存することになります。" },
      { speaker: "記事", arabic: "هَذَا سَيُسَاعِدُ فِي تَقْلِيلِ الِانْبِعَاثَاتِ الضَّارَّةِ.", japanese: "これは有害な排出を減らすのに役立ちます。" }
    ]
  },
  {
    id: 1004,
    title: "紅海プロジェクト（詳細）",
    category: "ニュース",
    level: "上級",
    contentVoweled: "مَشْرُوعُ الْبَحْرِ الْأَحْمَرِ يُمَثِّلُ وَجْهًا جَدِيدًا لِلسِّيَاحَةِ الْفَاخِرَةِ الْمُسْتَدَامَةِ. يَقَعُ الْمَشْرُوعُ عَلَى السَّاحِلِ الْغَرْبِيِّ لِلْمَمْلَكَةِ. يَضُمُّ أَكْثَرَ مِنْ 90 جَزِيرَةً طَبِيعِيَّةً لَمْ تُمَسَّ. يَهْدِفُ الْمَشْرُوعُ إِلَى تَقْدِيمِ تَجْرِبَةٍ سِيَاحِيَّةٍ فَاخِرَةٍ. يَلْتَزِمُ بِحِمَايَةِ الْبِيئَةِ وَالشُّعَبِ الْمَرْجَانِيَّةِ. سَيَعْتَمِدُ الْمَشْرُوعُ بِالْكَامِلِ عَلَى الطَّاقَةِ الْمُتَجَدِّدَةِ.",
    contentPlain: "مشروع البحر الأحمر يمثل وجها جديدا للسياحة الفاخرة المستدامة. يقع المشروع على الساحل الغربي للمملكة. يضم أكثر من 90 جزيرة طبيعية لم تمس. يهدف المشروع إلى تقديم تجربة سياحية فاخرة. يلتزم بحماية البيئة والشعب المرجانية. سيعتمد المشروع بالكامل على الطاقة المتجددة.",
    vocabList: [
      { word: "مُسْتَدَام", meaning: "持続可能な" },
      { word: "أَرْخَبِيل", meaning: "群島" },
      { word: "خَامِد", meaning: "休止した/休火山の" },
      { word: "حَظْر", meaning: "禁止" },
      { word: "لَمْ تُمَسَّ", meaning: "手つかずの（触れられていない）" }
    ],
    questions: [
      { id: 10041, type: "reading", text: "このプロジェクトの観光タイプは？", options: ["格安旅行", "持続可能な豪華観光", "工業開発", "農業"], correctIndex: 1, explanation: "「للسياحة الفاخرة المستدامة (持続可能なラグジュアリー観光)」です。" },
      { id: 10042, type: "reading", text: "プロジェクトに含まれる島の数は？", options: ["10", "50", "90以上", "1000"], correctIndex: 2, explanation: "「أكثر من 90 جزيرة (90以上の島)」です。" },
      { id: 10043, type: "reading", text: "環境への取り組みで正しいのは？", options: ["石炭を使う", "再エネ100%と環境保護", "木を切る", "海を埋める"], correctIndex: 1, explanation: "「يعتمد بنسبة 100% على الطاقة المتجددة」です。" },
      { id: 10044, type: "vocabulary", text: "「نَادِر」の意味は？", options: ["多い", "珍しい/希少な", "赤い", "安い"], correctIndex: 1, explanation: "Rare（希少な）です。" },
      { id: 10045, type: "grammar", text: "「表します/代表します」", options: ["يُمَثِّلُ", "يَلْعَبُ", "يَكْتُبُ", "يَجْلِسُ"], correctIndex: 0, explanation: "「Yumaththilu (Represent)」です。" },
      // 上級文法問題
      { id: 10046, type: "grammar_advanced", text: "「لم تمس」の「تمس」の正しい語尾は？", options: ["a (ファトハ)", "u (ダンマ)", "i (カスラ)", "Sukuun (スクーン)"], correctIndex: 0, explanation: "否定辞「Lam」により要求形（Majzūm）になりますが、重子音動詞（Muda''af - Massa）の場合、スクーンではなくファトハで終わるのが一般的です（Tumassa）。" },
      { id: 10047, type: "grammar_advanced", text: "「يضم أكثر من」の「أكثر」の正しい語尾は？", options: ["a (ファトハ)", "u (ダンマ)", "i (カスラ)", "an (タンウィーン)"], correctIndex: 0, explanation: "動詞「含む（Yaḍummu）」の目的語（Maf'ūl Bihi）なので対格となり、ファトハがつきます。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "مَشْرُوعُ الْبَحْرِ الْأَحْمَرِ يُمَثِّلُ وَجْهًا جَدِيدًا لِلسِّيَاحَةِ الْفَاخِرَةِ الْمُسْتَدَامَةِ.", japanese: "紅海プロジェクトは、持続可能なラグジュアリー観光の新しい顔を表しています。" },
      { speaker: "記事", arabic: "يَقَعُ الْمَشْرُوعُ عَلَى السَّاحِلِ الْغَرْبِيِّ لِلْمَمْلَكَةِ.", japanese: "プロジェクトは王国の西海岸に位置しています。" },
      { speaker: "記事", arabic: "يَضُمُّ أَكْثَرَ مِنْ 90 جَزِيرَةً طَبِيعِيَّةً لَمْ تُمَسَّ.", japanese: "（それは）手つかずの90以上の自然の島々を含んでいます。" },
      { speaker: "記事", arabic: "يَهْدِفُ الْمَشْرُوعُ إِلَى تَقْدِيمِ تَجْرِبَةٍ سِيَاحِيَّةٍ فَاخِرَةٍ.", japanese: "プロジェクトは豪華な観光体験を提供することを目指しています。" },
      { speaker: "記事", arabic: "يَلْتَزِمُ بِحِمَايَةِ الْبِيئَةِ وَالشُّعَبِ الْمَرْجَانِيَّةِ.", japanese: "環境とサンゴ礁の保護にコミットしています。" },
      { speaker: "記事", arabic: "سَيَعْتَمِدُ الْمَشْرُوعُ بِالْكَامِلِ عَلَى الطَّاقَةِ الْمُتَجَدِّدَةِ.", japanese: "プロジェクトは完全に再生可能エネルギーに依存します。" }
    ]
  },
  {
    id: 1005,
    title: "AIの倫理",
    category: "科学",
    level: "上級",
    contentVoweled: "يُثِيرُ التَّطَوُّرُ السَّرِيعُ لِلذَّكَاءِ الِاصْطِنَاعِيِّ مَخَاوِفَ أَخْلَاقِيَّةً كَبِيرَةً. أَصْبَحَ الذَّكَاءُ الِاصْطِنَاعِيُّ جُزْءًا لَا يَتَجَزَّأُ مِنْ حَيَاتِنَا الْيَوْمِيَّةِ. بَيْنَمَا يُسْهِمُ فِي تَحْسِينِ الرِّعَايَةِ الصِّحِّيَّةِ وَزِيَادَةِ الْإِنْتَاجِيَّةِ، هُنَاكَ قَلَقٌ مِنْ تَأْثِيرِهِ عَلَى الْخُصُوصِيَّةِ وَفُرَصِ الْعَمَلِ. وَلَكِنَّ السُّؤَالَ الْمُهِمَّ هُوَ: كَيْفَ نَحْمِي حُقُوقَ الْإِنْسَانِ؟ يَتَطَلَّبُ الْأَمْرُ وَضْعَ قَوَانِينَ صَارِمَةٍ لِضَمَانِ اسْتِخْدَامِ هَذِهِ التِّكْنُولُوجِيَا بِمَا يَخْدِمُ الْبَشَرِيَّةَ. يَجِبُ أَنْ تَكُونَ الْأَنْظِمَةُ الذَّكِيَّةُ شَفَّافَةً وَعَادِلَةً. الْمَسْؤُولِيَّةُ تَقَعُ عَلَى عَاتِقِ الْمُطَوِّرِينَ وَالْحُكُومَاتِ.",
    contentPlain: "يثير التطور السريع للذكاء الاصطناعي مخاوف أخلاقية كبيرة. أصبح الذكاء الاصطناعي جزءا لا يتجزأ من حياتنا اليومية. بينما يسهم في تحسين الرعاية الصحية وزيادة الإنتاجية، هناك قلق من تأثيره على الخصوصية وفرص العمل. ولكن السؤال المهم هو: كيف نحمي حقوق الإنسان؟ يتطلب الأمر وضع قوانين صارمة لضمان استخدام هذه التكنولوجيا بما يخدم البشرية. يجب أن تكون الأنظمة الذكية شفافة وعادلة. المسؤولية تقع على عاتق المطورين والحكومات.",
    vocabList: [
      { word: "أَخْلَاقِيّ", meaning: "倫理的な" },
      { word: "خُصُوصِيَّة", meaning: "プライバシー" },
      { word: "قَانُون", meaning: "法律" },
      { word: "تَحَيُّز", meaning: "バイアス/偏見" },
      { word: "لَا يَتَجَزَّأُ", meaning: "不可分の/分けられない" }
    ],
    questions: [
      { id: 10051, type: "reading", text: "AIの急速な発展は何を引き起こしていますか？", options: ["喜び", "倫理的な懸念", "経済の崩壊", "平和"], correctIndex: 1, explanation: "「مخاوف أخلاقية (倫理的な懸念)」を引き起こしています。" },
      { id: 10052, type: "reading", text: "懸念されている影響の一つは？", options: ["健康の向上", "生産性の低下", "プライバシーと雇用への影響", "教育"], correctIndex: 2, explanation: "「تأثيره على الخصوصية وفرص العمل (プライバシーと雇用への影響)」です。" },
      { id: 10053, type: "reading", text: "この問題に対処するために何が必要ですか？", options: ["開発の停止", "厳格な法律の制定", "無視する", "ロボットを壊す"], correctIndex: 1, explanation: "「وضع قوانين صارمة (厳格な法律の制定)」が必要です。" },
      { id: 10054, type: "vocabulary", text: "「ضَرَر」の意味は？", options: ["益", "害/損害", "金", "時間"], correctIndex: 1, explanation: "Harm/Damage（害）です。" },
      { id: 10055, type: "grammar", text: "「保証するために」", options: ["لِضَمَانِ", "لِمَنْعِ", "لِأَخْذِ", "لِقَتْلِ"], correctIndex: 0, explanation: "「Li-ḍamāni (To guarantee)」です。" },
      // 上級文法問題
      { id: 10056, type: "grammar_advanced", text: "「يثير ... مخاوف」の「مخاوف」の正しい語尾は？", options: ["a (ファトハ・タンウィーンなし)", "an (タンウィーン・ファトハ)", "i (カスラ)", "in (タンウィーン・カスラ)"], correctIndex: 0, explanation: "「Makhāwif」は対格（目的語）ですが、「非限定名詞（Mumnū' min al-ṣarf）」であるため、タンウィーンを取らず、ファトハ一文字になります。" },
      { id: 10057, type: "grammar_advanced", text: "「وضع قوانين صارمة」の「صارمة」の正しい語尾は？", options: ["in (タンウィーン・カスラ)", "a (ファトハ)", "an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)"], correctIndex: 0, explanation: "修飾される名詞「Qawānīn（法律）」は非限定名詞のため属格でファトハ（a）を取りますが、形容詞「Ṣārimatin（厳格な）」は通常通り変化するため、属格でカスラ（in）を取ります。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "يُثِيرُ التَّطَوُّرُ السَّرِيعُ لِلذَّكَاءِ الِاصْطِنَاعِيِّ مَخَاوِفَ أَخْلَاقِيَّةً كَبِيرَةً.", japanese: "人工知能の急速な発展は、大きな倫理的懸念を引き起こしています。" },
      { speaker: "記事", arabic: "أَصْبَحَ الذَّكَاءُ الِاصْطِنَاعِيُّ جُزْءًا لَا يَتَجَزَّأُ مِنْ حَيَاتِنَا الْيَوْمِيَّةِ.", japanese: "人工知能は私たちの日常生活の不可欠な（分けられない）一部となりました。" },
      { speaker: "記事", arabic: "بَيْنَمَا يُسْهِمُ فِي تَحْسِينِ الرِّعَايَةِ الصِّحِّيَّةِ وَزِيَادَةِ الْإِنْتَاجِيَّةِ، هُنَاكَ قَلَقٌ مِنْ تَأْثِيرِهِ عَلَى الْخُصُوصِيَّةِ وَفُرَصِ الْعَمَلِ.", japanese: "ヘルスケアの改善や生産性の向上に貢献する一方で、プライバシーや雇用の機会への影響に対する懸念があります。" },
      { speaker: "記事", arabic: "وَلَكِنَّ السُّؤَالَ الْمُهِمَّ هُوَ: كَيْفَ نَحْمِي حُقُوقَ الْإِنْسَانِ؟", japanese: "しかし重要な問いは、いかにして人権を守るかです。" },
      { speaker: "記事", arabic: "يَتَطَلَّبُ الْأَمْرُ وَضْعَ قَوَانِينَ صَارِمَةٍ لِضَمَانِ اسْتِخْدَامِ هَذِهِ التِّكْنُولُوجِيَا بِمَا يَخْدِمُ الْبَشَرِيَّةَ.", japanese: "この事態は、この技術が人類に奉仕する形で使用されることを保証するための、厳格な法律の制定を必要としています。" },
      { speaker: "記事", arabic: "يَجِبُ أَنْ تَكُونَ الْأَنْظِمَةُ الذَّكِيَّةُ شَفَّافَةً وَعَادِلَةً.", japanese: "スマートシステムは透明で公正でなければなりません。" },
      { speaker: "記事", arabic: "الْمَسْؤُولِيَّةُ تَقَعُ عَلَى عَاتِقِ الْمُطَوِّرِينَ وَالْحُكُومَاتِ.", japanese: "責任は開発者と政府の肩にかかっています。" }
    ]
  },
  {
    id: 1006,
    title: "ザ・ライン (The Line)",
    category: "ニュース",
    level: "上級",
    contentVoweled: "ذَا لَايْن هِيَ مَدِينَةٌ ثَوْرِيَّةٌ يَتِمُّ بِنَاؤُهَا فِي نِيُوم. تَمْتَدُّ لِمَسَافَةِ 170 كِيلُومِتْرًا دُونَ شَوَارِعَ أَوْ سَيَّارَاتٍ. تَعْتَمِدُ بِالْكَامِلِ عَلَى الطَّاقَةِ النَّظِيفَةِ. تَهْدِفُ الْمَدِينَةُ إِلَى تَقْدِيمِ نَمُوذَجٍ جَدِيدٍ لِلْحَيَاةِ الْحَضَرِيَّةِ يَحَافِظُ عَلَى الطَّبِيعَةِ. يُمْكِنُ لِلسُّكَّانِ الْوُصُولُ إِلَى جَمِيعِ احْتِيَاجَاتِهِمُ الْيَوْمِيَّةِ مَشْيًا عَلَى الْأَقْدَامِ فِي غُضُونِ 5 دَقَائِقَ.",
    contentPlain: "ذا لاين هي مدينة ثورية يتم بناؤها في نيوم. تمتد لمسافة 170 كيلومترا دون شوارع أو سيارات. تعتمد بالكامل على الطاقة النظيفة. تهدف المدينة إلى تقديم نموذج جديد للحياة الحضرية يحافظ على الطبيعة. يمكن للسكان الوصول إلى جميع احتياجاتهم اليومية مشيا على الأقدام في غضون 5 دقائق.",
    vocabList: [
      { word: "ثَوْرِيّ", meaning: "革命的な" },
      { word: "حَضَرِيّ", meaning: "都市の" },
      { word: "طَبِيعَة", meaning: "自然" },
      { word: "وُصُول", meaning: "アクセス/到着" },
      { word: "مَشْيًا", meaning: "歩いて/徒歩で" }
    ],
    questions: [
      { id: 10061, type: "reading", text: "「ザ・ライン」の特徴は何ですか？", options: ["車が多い", "道路と車がない", "円形の都市", "地下都市"], correctIndex: 1, explanation: "「دون شوارع أو سيارات (通りも車もない)」です。" },
      { id: 10062, type: "reading", text: "都市の長さは？", options: ["50km", "100km", "170km", "500km"], correctIndex: 2, explanation: "「170 كيلومترا」です。" },
      { id: 10063, type: "reading", text: "生活に必要な施設へのアクセス時間は？", options: ["車で1時間", "徒歩5分以内", "電車で20分", "バスで30分"], correctIndex: 1, explanation: "「مشيا على الأقدام في غضون 5 دقائق」です。" },
      { id: 10064, type: "vocabulary", text: "「نَمُوذَج」の意味は？", options: ["建物", "モデル/模範", "問題", "解決"], correctIndex: 1, explanation: "Model（モデル）です。" },
      { id: 10065, type: "grammar", text: "「依存します」", options: ["تَعْتَمِدُ", "تَمْشِي", "تَبْنِي", "تَهْدِمُ"], correctIndex: 0, explanation: "「Ta'tamidu」です。" },
      // 上級文法問題
      { id: 10066, type: "grammar_advanced", text: "「دون شوارع」の「شوارع」の正しい語尾は？", options: ["a (ファトハ)", "i (カスラ)", "u (ダンマ)", "an (タンウィーン)"], correctIndex: 0, explanation: "「Shawāri'」はイダーファの第2要素（属格）ですが、非限定名詞（Mumnū' min al-ṣarf）であるため、カスラではなくファトハを取ります。" },
      { id: 10067, type: "grammar_advanced", text: "「يتم بناؤها」の「بناء」の正しい母音は？", options: ["u (ダンマ/Hamza on Waw)", "a (ファトハ/Hamza on Line)", "i (カスラ/Hamza on Ya)", "Sukoon (スクーン)"], correctIndex: 0, explanation: "「Yatimmu（完了する/行われる）」という動詞の主語（Fā'il）であるため主格（Marfū'）となり、母音がダンマ(u)になるため、ハムザはWawの上に書かれます。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "ذَا لَايْن هِيَ مَدِينَةٌ ثَوْرِيَّةٌ يَتِمُّ بِنَاؤُهَا فِي نِيُوم.", japanese: "「ザ・ライン」は、NEOMで建設されている革命的な都市です。" },
      { speaker: "記事", arabic: "تَمْتَدُّ لِمَسَافَةِ 170 كِيلُومِتْرًا دُونَ شَوَارِعَ أَوْ سَيَّارَاتٍ.", japanese: "それは道路や車なしで170キロメートルにわたって伸びています。" },
      { speaker: "記事", arabic: "تَعْتَمِدُ بِالْكَامِلِ عَلَى الطَّاقَةِ النَّظِيفَةِ.", japanese: "完全にクリーンエネルギーに依存しています。" },
      { speaker: "記事", arabic: "تَهْدِفُ الْمَدِينَةُ إِلَى تَقْدِيمِ نَمُوذَجٍ جَدِيدٍ لِلْحَيَاةِ الْحَضَرِيَّةِ يَحَافِظُ عَلَى الطَّبِيعَةِ.", japanese: "この都市は、自然を保護する都市生活の新しいモデルを提供することを目指しています。" },
      { speaker: "記事", arabic: "يُمْكِنُ لِلسُّكَّانِ الْوُصُولُ إِلَى جَمِيعِ احْتِيَاجَاتِهِمُ الْيَوْمِيَّةِ مَشْيًا عَلَى الْأَقْدَامِ فِي غُضُونِ 5 دَقَائِقَ.", japanese: "住民は徒歩5分以内にすべての日常のニーズにアクセスできます。" }
    ]
  },
  {
    id: 1007,
    title: "アル・ジャーヒズ",
    category: "文学",
    level: "上級",
    contentVoweled: "الْجَاحِظُ أَدِيبٌ عَبَّاسِيٌّ كَبِيرٌ، اشْتُهِرَ بِكِتَابِهِ 'الْبُخَلَاءُ'. تَمَيَّزَ أُسْلُوبُهُ بِالسُّخْرِيَةِ وَالْفُكَاهَةِ وَالْوَصْفِ الدَّقِيقِ لِلْمُجْتَمَعِ فِي عَصْرِهِ. فِي كِتَابِهِ، وَصَفَ قِصَصَ الْبُخَلَاءِ وَنَوَادِرَهُمْ بِأُسْلُوبٍ مُمْتِعٍ. هَذَا جَعَلَهُ مِنْ أَهَمِّ الْمَرَاجِعِ فِي الْأَدَبِ الْعَرَبِيِّ وَالنَّقْدِ الِاجْتِمَاعِيِّ.",
    contentPlain: "الجاحظ أديب عباسي كبير، اشتهر بكتابه 'البخلاء'. تميز أسلوبه بالسخرية والفكاهة والوصف الدقيق للمجتمع في عصره. في كتابه، وصف قصص البخلاء ونوادرهم بأسلوب ممتع. هذا جعله من أهم المراجع في الأدب العربي والنقد الاجتماعي.",
    vocabList: [
      { word: "أَدِيب", meaning: "作家/文学者" },
      { word: "سُخْرِيَة", meaning: "皮肉/風刺" },
      { word: "وَصْف", meaning: "描写" },
      { word: "بَخِيل", meaning: "ケチ（複：ブハラー）" },
      { word: "نَادِرَة", meaning: "逸話/ジョーク（複：Nawādir）" }
    ],
    questions: [
      { id: 10071, type: "reading", text: "ジャーヒズの有名な著書は？", options: ["千夜一夜物語", "カノン", "けちんぼ物語（アル・ブハラー）", "ルバイヤート"], correctIndex: 2, explanation: "「كتاب البخلاء (けちんぼ物語)」です。" },
      { id: 10072, type: "reading", text: "彼の文体の特徴は？", options: ["真面目で堅苦しい", "風刺とユーモア", "悲しい", "宗教的のみ"], correctIndex: 1, explanation: "「بالسخرية والفكاهة (風刺とユーモア)」です。" },
      { id: 10073, type: "reading", text: "彼は何を描写しましたか？", options: ["王の生活", "戦争", "社会とケチな人々の逸話", "自然"], correctIndex: 2, explanation: "「قصص البخلاء ونوادرهم」および当時の社会です。" },
      { id: 10074, type: "vocabulary", text: "「مُجْتَمَع」の意味は？", options: ["個人", "社会", "家族", "学校"], correctIndex: 1, explanation: "Society（社会）です。" },
      { id: 10075, type: "grammar", text: "「有名になりました」", options: ["اشْتُهِرَ", "كَتَبَ", "قَرَأَ", "ذَهَبَ"], correctIndex: 0, explanation: "「Ushtuhira (Became famous)」です。" },
      // 上級文法問題
      { id: 10076, type: "grammar_advanced", text: "「اشتهر」の正しい発音記号（受動態）は？", options: ["Ushtuhira（受動態）", "Ishtahara（能動態）", "Ishtahira（命令形）", "Ushtuhara（間違い）"], correctIndex: 0, explanation: "文脈的に「有名になった（知られるようになった）」という意味で、受動態の「Ushtuhira」が使われます。" },
      { id: 10077, type: "grammar_advanced", text: "「من أهم المراجع」の「المراجع」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "「Marāji'」は本来非限定名詞ですが、定冠詞「Al」がついているため、属格では通常通りカスラ（i）を取ります。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "الْجَاحِظُ أَدِيبٌ عَبَّاسِيٌّ كَبِيرٌ، اشْتُهِرَ بِكِتَابِهِ 'الْبُخَلَاءُ'.", japanese: "ジャーヒズは偉大なアッバース朝の文人であり、著書『けちんぼ物語』で有名になりました。" },
      { speaker: "記事", arabic: "تَمَيَّزَ أُسْلُوبُهُ بِالسُّخْرِيَةِ وَالْفُكَاهَةِ وَالْوَصْفِ الدَّقِيقِ لِلْمُجْتَمَعِ فِي عَصْرِهِ.", japanese: "彼の文体は、風刺、ユーモア、そして当時の社会の正確な描写によって特徴づけられました。" },
      { speaker: "記事", arabic: "فِي كِتَابِهِ، وَصَفَ قِصَصَ الْبُخَلَاءِ وَنَوَادِرَهُمْ بِأُسْلُوبٍ مُمْتِعٍ.", japanese: "彼は本の中で、ケチな人々の物語や逸話を楽しいスタイルで描写しました。" },
      { speaker: "記事", arabic: "هَذَا جَعَلَهُ مِنْ أَهَمِّ الْمَرَاجِعِ فِي الْأَدَبِ الْعَرَبِيِّ وَالنَّقْدِ الِاجْتِمَاعِيِّ.", japanese: "これにより、彼はアラビア文学と社会批評における最も重要な参考文献の一つとなりました。" }
    ]
  },
  {
    id: 1008,
    title: "アンダルスの科学",
    category: "歴史",
    level: "上級",
    contentVoweled: "كَانَتِ الْأَنْدَلُسُ جِسْرًا لِنَقْلِ الْعُلُومِ مِنَ الشَّرْقِ إِلَى الْغَرْبِ. فِي مُدُنٍ مِثْلِ قُرْطُبَةَ وَإِشْبِيلِيَةَ، ازْدَهَرَتِ الزِّرَاعَةُ وَالطِّبُّ وَالْفَلَكُ. قَامَ الْأُورُوبِيُّونَ بِتَرْجَمَةِ الْكُتُبِ الْعَرَبِيَّةِ فِي طُلَيْطِلَةَ. هَذَا سَاعَدَ فِي بُزُوغِ فَجْرِ النَّهْضَةِ الْأُورُوبِيَّةِ وَإِنْهاءِ الْعُصُورِ الْمُظْلِمَةِ.",
    contentPlain: "كانت الأندلس جسرا لنقل العلوم من الشرق إلى الغرب. في مدن مثل قرطبة وإشبيلية، ازدهرت الزراعة والطب والفلك. قام الأوروبيون بترجمة الكتب العربية في طليطلة. هذا ساعد في بزوغ فجر النهضة الأوروبية وإنهاء العصور المظلمة.",
    vocabList: [
      { word: "جِسْر", meaning: "橋" },
      { word: "غَرْب", meaning: "西/西洋" },
      { word: "نَقْل", meaning: "移動/伝達" },
      { word: "ظَلَام", meaning: "闇" },
      { word: "بُزُوغ", meaning: "出現/夜明け" }
    ],
    questions: [
      { id: 10081, type: "reading", text: "アンダルスはどのような役割を果たしましたか？", options: ["壁", "科学を伝える橋", "戦場", "障害"], correctIndex: 1, explanation: "「جسرا لنقل العلوم (科学を伝える橋)」です。" },
      { id: 10082, type: "reading", text: "繁栄した都市の例は？", options: ["パリとロンドン", "コルドバとセビリア", "ローマとアテネ", "ニューヨーク"], correctIndex: 1, explanation: "「قرطبة وإشبيلية (コルドバとセビリア)」です。" },
      { id: 10083, type: "reading", text: "ヨーロッパ人はトレドで何をしましたか？", options: ["本を燃やした", "アラビア語の本を翻訳した", "戦争をした", "寝ていた"], correctIndex: 1, explanation: "「ترجمة الكتب العربية (アラビア語の書の翻訳)」です。" },
      { id: 10084, type: "vocabulary", text: "「زِرَاعَة」の意味は？", options: ["工業", "農業", "商業", "漁業"], correctIndex: 1, explanation: "Agriculture（農業）です。" },
      { id: 10085, type: "grammar", text: "「助けました」", options: ["سَاعَدَ", "مَنَعَ", "أَخَذَ", "قَتَلَ"], correctIndex: 0, explanation: "「Sā'ada」です。" },
      // 上級文法問題
      { id: 10086, type: "grammar_advanced", text: "「لنقل العلوم」の「نقل」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "前置詞「Li」の後に続く名詞（Ism Majrūr）であるため、属格（Majrūr）となりカスラがつきます。" },
      { id: 10087, type: "grammar_advanced", text: "「بزوغ فجر النهضة」の「فجر」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "「Buzūgh」という名詞に修飾される第2要素（Muḍāf Ilayhi）であるため、属格（Majrūr）となりカスラがつきます。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "كَانَتِ الْأَنْدَلُسُ جِسْرًا لِنَقْلِ الْعُلُومِ مِنَ الشَّرْقِ إِلَى الْغَرْبِ.", japanese: "アンダルスは、東洋から西洋へ科学を伝えるための架け橋でした。" },
      { speaker: "記事", arabic: "فِي مُدُنٍ مِثْلِ قُرْطُبَةَ وَإِشْبِيلِيَةَ، ازْدَهَرَتِ الزِّرَاعَةُ وَالطِّبُّ وَالْفَلَكُ.", japanese: "コルドバやセビリアのような都市では、農業、医学、天文学が繁栄しました。" },
      { speaker: "記事", arabic: "قَامَ الْأُورُوبِيُّونَ بِتَرْجَمَةِ الْكُتُبِ الْعَرَبِيَّةِ فِي طُلَيْطِلَةَ.", japanese: "ヨーロッパ人はトレドでアラビア語の本を翻訳しました。" },
      { speaker: "記事", arabic: "هَذَا سَاعَدَ فِي بُزُوغِ فَجْرِ النَّهْضَةِ الْأُورُوبِيَّةِ وَإِنْهاءِ الْعُصُورِ الْمُظْلِمَةِ.", japanese: "これはヨーロッパのルネサンスの夜明けと暗黒時代の終焉を助けました。" }
    ]
  },
  {
    id: 1009,
    title: "女性のエンパワーメント",
    category: "社会",
    level: "上級",
    contentVoweled: "شَهِدَتِ الْمَمْلَكَةُ فِي السَّنَوَاتِ الْأَخِيرَةِ إِصْلَاحَاتٍ كَبِيرَةً لِتَمْكِينِ الْمَرْأَةِ. سُمِحَ لَهَا بِقِيَادَةِ السَّيَّارَةِ، وَتَوَلِّي مَنَاصِبَ قِيَادِيَّةٍ فِي الْحُكُومَةِ وَالْقِطَاعِ الْخَاصِّ. تَهْدِفُ هَذِهِ الْخُطَوَاتُ إِلَى تَعْزِيزِ دَوْرِ الْمَرْأَةِ فِي التَّنْمِيَةِ الِاقْتِصَادِيَّةِ وَالِاجْتِمَاعِيَّةِ. كَمَا تَسْعَى إِلَى تَحْقِيقِ الْمُسَاوَاةِ فِي الْفُرَصِ وَفْقًا لِرُؤْيَةِ 2030.",
    contentPlain: "شهدت المملكة في السنوات الأخيرة إصلاحات كبيرة لتمكين المرأة. سمح لها بقيادة السيارة، وتولي مناصب قيادية في الحكومة والقطاع الخاص. تهدف هذه الخطوات إلى تعزيز دور المرأة في التنمية الاقتصادية والاجتماعية. كما تسعى إلى تحقيق المساواة في الفرص وفقا لرؤية 2030.",
    vocabList: [
      { word: "إِصْلَاح", meaning: "改革" },
      { word: "قِيَادَة", meaning: "運転/リーダーシップ" },
      { word: "مَنْصِب", meaning: "地位/役職" },
      { word: "مُسَاوَاة", meaning: "平等" },
      { word: "قِطَاع", meaning: "セクター/部門" }
    ],
    questions: [
      { id: 10091, type: "reading", text: "近年、王国で何が起きましたか？", options: ["戦争", "女性のエンパワーメントのための改革", "経済の停滞", "人口減少"], correctIndex: 1, explanation: "「إصلاحات كبيرة لتمكين المرأة (女性活躍のための大改革)」です。" },
      { id: 10092, type: "reading", text: "許可されたことの具体例は？", options: ["海外旅行の禁止", "車の運転", "学校に行くことの禁止", "家にいること"], correctIndex: 1, explanation: "「قيادة السيارة (車の運転)」です。" },
      { id: 10093, type: "reading", text: "これらのステップの目的は？", options: ["女性の役割を弱める", "開発における女性の役割強化", "男性の仕事を奪う", "海外移住"], correctIndex: 1, explanation: "「تعزيز دور المرأة (女性の役割強化)」です。" },
      { id: 10094, type: "vocabulary", text: "「فُرْصَة」の意味は？", options: ["時間", "チャンス/機会", "お金", "場所"], correctIndex: 1, explanation: "Opportunity（機会）です。" },
      { id: 10095, type: "grammar", text: "「許可されました（受動態）」", options: ["سُمِحَ", "سَمَحَ", "يَسْمَحُ", "مَمْنُوع"], correctIndex: 0, explanation: "「Sumiḥa」は「Samaḥa (Allow)」の受動態です。" },
      // 上級文法問題
      { id: 10096, type: "grammar_advanced", text: "「إصلاحات كبيرة」の「إصلاحات」の正しい語尾は？", options: ["in (タンウィーン・カスラ)", "an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "i (カスラ)"], correctIndex: 0, explanation: "動詞「Shahidat（目撃した/経験した）」の目的語ですが、「āt」で終わる女性規則複数は、対格の場合ファトハではなくカスラを取ります。" },
      { id: 10097, type: "grammar_advanced", text: "「تولي مناصب قيادية」の「مناصب」の正しい語尾は？", options: ["a (ファトハ)", "i (カスラ)", "u (ダンマ)", "an (タンウィーン)"], correctIndex: 0, explanation: "「Tawallī (就任)」という動名詞の後に続くイダーファの第2要素（属格）ですが、「Manāṣib」は非限定名詞（Mafā'ilパターン）なので、カスラではなくファトハを取ります。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "شَهِدَتِ الْمَمْلَكَةُ فِي السَّنَوَاتِ الْأَخِيرَةِ إِصْلَاحَاتٍ كَبِيرَةً لِتَمْكِينِ الْمَرْأَةِ.", japanese: "王国は近年、女性のエンパワーメントのための大きな改革を経験しました。" },
      { speaker: "記事", arabic: "سُمِحَ لَهَا بِقِيَادَةِ السَّيَّارَةِ، وَتَوَلِّي مَنَاصِبَ قِيَادِيَّةٍ فِي الْحُكُومَةِ وَالْقِطَاعِ الْخَاصِّ.", japanese: "彼女（女性）には車の運転や、政府および民間部門での指導的地位への就任が許可されました。" },
      { speaker: "記事", arabic: "تَهْدِفُ هَذِهِ الْخُطَوَاتُ إِلَى تَعْزِيزِ دَوْرِ الْمَرْأَةِ فِي التَّنْمِيَةِ الِاقْتِصَادِيَّةِ وَالِاجْتِمَاعِيَّةِ.", japanese: "これらのステップは、経済的および社会的発展における女性の役割を強化することを目指しています。" },
      { speaker: "記事", arabic: "كَمَا تَسْعَى إِلَى تَحْقِيقِ الْمُسَاوَاةِ فِي الْفُرَصِ وَفْقًا لِرُؤْيَةِ 2030.", japanese: "また、ビジョン2030に従って機会の平等を達成することも目指しています。" }
    ]
  },
  {
    id: 1010,
    title: "サウジ・コーヒー（詳細）",
    category: "文化",
    level: "上級",
    contentVoweled: "الْقَهْوَةُ السُّعُودِيَّةُ لَيْسَتْ مُجَرَّدَ مَشْرُوبٍ، بَلْ هِيَ رَمْزٌ ثَقَافِيٌّ لِلْكَرَمِ وَالضِّيَافَةِ. تَخْتَلِفُ طَرِيقَةُ تَحْضِيرِهَا مِنْ مِنْطَقَةٍ لِأُخْرَى، لَكِنَّهَا غَالِبًا مَا تَحْتَوِي عَلَى الْهَيْلِ وَالزَّعْفَرَانِ. تُقَدَّمُ الْقَهْوَةُ لِلضُّيُوفِ بِالْيَدِ الْيُمْنَى. يَجِبُ أَنْ يَكُونَ الْفِنْجَانُ مَمْلُوءًا إِلَى الثُّلُثِ فَقَطْ كَدَلِيلٍ عَلَى الرَّغْبَةِ فِي خِدْمَةِ الضَّيْفِ وَتَكْرَارِ الصَّبِّ.",
    contentPlain: "القهوة السعودية ليست مجرد مشروب، بل هي رمز ثقافي للكرم والضيافة. تختلف طريقة تحضيرها من منطقة لأخرى، لكنها غالبا ما تحتوي على الهيل والزعفران. تقدم القهوة للضيوف باليد اليمنى. يجب أن يكون الفنجان مملوءا إلى الثلث فقط كدليل على الرغبة في خدمة الضيف وتكرار الصب.",
    vocabList: [
      { word: "ضِيَافَة", meaning: "おもてなし" },
      { word: "تَحْضِير", meaning: "準備/作り方" },
      { word: "زَعْفَرَان", meaning: "サフラン" },
      { word: "يَد يُمْنَى", meaning: "右手" },
      { word: "صَبّ", meaning: "注ぐこと" }
    ],
    questions: [
      { id: 10101, type: "reading", text: "サウジコーヒーは何の象徴ですか？", options: ["眠気", "寛大さとおもてなし", "戦争", "貧困"], correctIndex: 1, explanation: "「رمز ثقافي للكرم والضيافة」です。" },
      { id: 10102, type: "reading", text: "主な材料は？", options: ["砂糖とミルク", "カルダモンとサフラン", "塩と胡椒", "茶葉"], correctIndex: 1, explanation: "「الهيل والزعفران」です。" },
      { id: 10103, type: "reading", text: "カップにはどれくらい注ぎますか？", options: ["満タン", "半分", "3分の1", "一滴だけ"], correctIndex: 2, explanation: "「مملوءا إلى الثلث (3分の1まで満たす)」です。" },
      { id: 10104, type: "vocabulary", text: "「دَلِيل」の意味は？", options: ["道", "証拠/印", "本", "人"], correctIndex: 1, explanation: "Proof/Sign（証拠、印）です。" },
      { id: 10105, type: "grammar", text: "「提供されます（受動態）」", options: ["تُقَدَّمُ", "تُقَدِّمُ", "قَدَّمَ", "قَادِم"], correctIndex: 0, explanation: "「Tuqaddamu」は受動態です。" },
      // 上級文法問題
      { id: 10106, type: "grammar_advanced", text: "「أن يكون الفنجان مملوءا」の「مملوءا」の正しい語尾は？", options: ["an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "in (タンウィーン・カスラ)", "u (ダンマ)"], correctIndex: 0, explanation: "「Yakūna (Kāna)」の「述語（Khabar Kāna）」は常に対格（Manṣūb）になるため、タンウィーン・ファトハがつきます。" },
      { id: 10107, type: "grammar_advanced", text: "「باليد اليمنى」の「اليمنى」の正しい母音表記は？", options: ["なし（母音記号は現れない）", "i (カスラ)", "a (ファトハ)", "u (ダンマ)"], correctIndex: 0, explanation: "「Yumnā」はIsm Maqṣūr（アリフで終わる名詞）であり、すべての格において母音は推定（Muqaddara）され、表記されません。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "الْقَهْوَةُ السُّعُودِيَّةُ لَيْسَتْ مُجَرَّدَ مَشْرُوبٍ، بَلْ هِيَ رَمْزٌ ثَقَافِيٌّ لِلْكَرَمِ وَالضِّيَافَةِ.", japanese: "サウジコーヒーは単なる飲み物ではなく、寛大さとおもてなしの文化的象徴です。" },
      { speaker: "記事", arabic: "تَخْتَلِفُ طَرِيقَةُ تَحْضِيرِهَا مِنْ مِنْطَقَةٍ لِأُخْرَى، لَكِنَّهَا غَالِبًا مَا تَحْتَوِي عَلَى الْهَيْلِ وَالزَّعْفَرَانِ.", japanese: "その準備方法は地域によって異なりますが、多くの場合、カルダモンとサフランが含まれています。" },
      { speaker: "記事", arabic: "تُقَدَّمُ الْقَهْوَةُ لِلضُّيُوفِ بِالْيَدِ الْيُمْنَى.", japanese: "コーヒーは右手で客に提供されます。" },
      { speaker: "記事", arabic: "يَجِبُ أَنْ يَكُونَ الْفِنْجَانُ مَمْلُوءًا إِلَى الثُّلُثِ فَقَطْ كَدَلِيلٍ عَلَى الرَّغْبَةِ فِي خِدْمَةِ الضَّيْفِ وَتَكْرَارِ الصَّبِّ.", japanese: "客に奉仕し、注ぎ足すことを望んでいる証拠として、カップは3分の1まで満たされるべきです。" }
    ]
  },
  {
    id: 1011,
    title: "砂漠化対策",
    category: "科学",
    level: "上級",
    contentVoweled: "التَّصَحُّرُ هُوَ تَحَوُّلُ الْأَرَاضِي الْخِصْبَةِ إِلَى صَحْرَاءَ، وَهُوَ مُشْكِلَةٌ بِيئِيَّةٌ عَالَمِيَّةٌ. فِي السُّعُودِيَّةِ، يَتِمُّ مُحَارَبَةُ التَّصَحُّرِ مِنْ خِلَالِ مَشَارِيعِ التَّشْجِيرِ الضَّخْمَةِ وَاسْتِخْدَامِ تِقْنِيَّاتِ الِاسْتِمْطَارِ الصِّنَاعِيِّ. يُسَاعِدُ الْغِطَاءُ النَّبَاتِيُّ فِي تَثْبِيتِ التُّرْبَةِ وَتَقْلِيلِ الْعَوَاصِفِ الرَّمْلِيَّةِ وَخَفْضِ دَرَجَاتِ الْحَرَارَةِ.",
    contentPlain: "التصحر هو تحول الأراضي الخصبة إلى صحراء، وهو مشكلة بيئية عالمية. في السعودية، يتم محاربة التصحر من خلال مشاريع التشجير الضخمة واستخدام تقنيات الاستمطار الصناعي. يساعد الغطاء النباتي في تثبيت التربة وتقليل العواصف الرملية وخفض درجات الحرارة.",
    vocabList: [
      { word: "تَصَحُّر", meaning: "砂漠化" },
      { word: "خِصْب", meaning: "肥沃な" },
      { word: "تَشْجِير", meaning: "植林" },
      { word: "تُرْبَة", meaning: "土壌" },
      { word: "اسْتِمْطَار", meaning: "人工降雨" }
    ],
    questions: [
      { id: 10111, type: "reading", text: "砂漠化とは何ですか？", options: ["雨が降ること", "肥沃な土地が砂漠になること", "砂漠が緑になること", "海が乾くこと"], correctIndex: 1, explanation: "「تحول الأراضي الخصبة إلى صحراء」です。" },
      { id: 10112, type: "reading", text: "サウジはどうやって戦っていますか？", options: ["放置している", "植林と人工降雨", "砂を輸入する", "壁を作る"], correctIndex: 1, explanation: "「مشاريع التشجير... والاستمطار الصناعي」です。" },
      { id: 10113, type: "reading", text: "植生（植物）の利点は？", options: ["気温を上げる", "土壌を固定し砂嵐を減らす", "水を汚す", "砂を増やす"], correctIndex: 1, explanation: "「تثبيت التربة وتقليل العواصف」です。" },
      { id: 10114, type: "vocabulary", text: "「عَاصِفَة」の意味は？", options: ["静けさ", "嵐", "雨", "光"], correctIndex: 1, explanation: "Storm（嵐）です。" },
      { id: 10115, type: "grammar", text: "「戦う/防止する」", options: ["مُحَارَبَة", "حَرْب", "ضَرْب", "هُرُوب"], correctIndex: 0, explanation: "「Muḥārabah (Combating/Fighting)」です。" },
      // 上級文法問題
      { id: 10116, type: "grammar_advanced", text: "「يتم محاربة」の「محاربة」の正しい語尾は？", options: ["u (ダンマ)", "a (ファトハ)", "i (カスラ)", "un (タンウィーン)"], correctIndex: 0, explanation: "「Yatimmu（行われる/完了する）」という動詞の「主語（Fā'il）」として、動名詞「Muḥārabatu」が機能しているため主格となりダンマがつきます。" },
      { id: 10117, type: "grammar_advanced", text: "「تقنيات الاستمطار」の「تقنيات」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "「Istikhdām (使用)」という動名詞の後に続くイダーファの第2要素（Muḍāf Ilayhi）として属格（Majrūr）になります。女性規則複数でも属格はカスラを取ります。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "التَّصَحُّرُ هُوَ تَحَوُّلُ الْأَرَاضِي الْخِصْبَةِ إِلَى صَحْرَاءَ، وَهُوَ مُشْكِلَةٌ بِيئِيَّةٌ عَالَمِيَّةٌ.", japanese: "砂漠化とは、肥沃な土地が砂漠に変わることであり、世界的な環境問題です。" },
      { speaker: "記事", arabic: "فِي السُّعُودِيَّةِ، يَتِمُّ مُحَارَبَةُ التَّصَحُّرِ مِنْ خِلَالِ مَشَارِيعِ التَّشْجِيرِ الضَّخْمَةِ وَاسْتِخْدَامِ تِقْنِيَّاتِ الِاسْتِمْطَارِ الصِّنَاعِيِّ.", japanese: "サウジアラビアでは、巨大な植林プロジェクトや人工降雨技術の使用を通じて砂漠化との戦いが行われています。" },
      { speaker: "記事", arabic: "يُسَاعِدُ الْغِطَاءُ النَّبَاتِيُّ فِي تَثْبِيتِ التُّرْبَةِ وَتَقْلِيلِ الْعَوَاصِفِ الرَّمْلِيَّةِ وَخَفْضِ دَرَجَاتِ الْحَرَارَةِ.", japanese: "植物の覆い（植生）は、土壌の固定、砂嵐の軽減、そして気温の低下に役立ちます。" }
    ]
  },
  // --- 10. 経済・産業 (Economy) ---
  {
    id: 1012,
    title: "デーツ産業",
    category: "経済",
    level: "上級",
    contentVoweled: "تُعْتَبَرُ الْمَمْلَكَةُ مِنْ أَكْبَرِ مُنْتِجِي التُّمُورِ فِي الْعَالَمِ، حَيْثُ تَمْتَلِكُ أَكْثَرَ مِنْ 30 مَلْيُونَ نَخْلَةٍ. صِنَاعَةُ التُّمُورِ لَيْسَتْ مُجَرَّدَ زِرَاعَةٍ، بَلْ هِيَ اقْتِصَادٌ ضَخْمٌ يَشْمَلُ التَّصْنِيعَ وَالتَّصْدِيرَ. يَتِمُّ إِنْتَاجُ مُنْتَجَاتٍ مُتَنَوِّعَةٍ مِنَ التَّمْرِ مِثْلَ الدِّبْسِ وَالسُّكَّرِ وَالْحَلْوَيَاتِ، وَتُصَدَّرُ إِلَى جَمِيعِ قَارَّاتِ الْعَالَمِ.",
    contentPlain: "تعتبر المملكة من أكبر منتجي التمور في العالم، حيث تمتلك أكثر من 30 مليون نخلة. صناعة التمور ليست مجرد زراعة، بل هي اقتصاد ضخم يشمل التصنيع والتصدير. يتم إنتاج منتجات متنوعة من التمر مثل الدبس والسكر والحلويات، وتصدر إلى جميع قارات العالم.",
    vocabList: [
      { word: "إِنْتَاج", meaning: "生産" },
      { word: "تَصْدِير", meaning: "輸出" },
      { word: "صِنَاعَة", meaning: "産業/工業" },
      { word: "مُتَنَوِّع", meaning: "多様な" }
    ],
    questions: [
      { id: 10121, type: "reading", text: "サウジのデーツ生産の地位は？", options: ["世界最小", "世界最大級", "輸入国", "生産していない"], correctIndex: 1, explanation: "「من أكبر منتجي التمور (最大の生産者の一つ)」です。" },
      { id: 10122, type: "reading", text: "ヤシの木は何本ありますか？", options: ["100万本", "1000万本", "3000万本以上", "数えられない"], correctIndex: 2, explanation: "「أكثر من 30 مليون نخلة」です。" },
      { id: 10123, type: "reading", text: "デーツから作られる製品は？", options: ["石油", "シロップ（ディブス）や砂糖", "プラスチック", "紙"], correctIndex: 1, explanation: "「الدبس والسكر والحلويات」です。" },
      { id: 10124, type: "vocabulary", text: "「قَارَّة」の意味は？", options: ["国", "大陸", "都市", "島"], correctIndex: 1, explanation: "Continent（大陸）です。" },
      { id: 10125, type: "grammar", text: "「所有する」", options: ["تَمْتَلِكُ", "تَبِيعُ", "تَشْتَرِي", "تَفْقِدُ"], correctIndex: 0, explanation: "「Tamtaliku (Possess)」です。" },
      // 上級文法問題
      { id: 10126, type: "grammar_advanced", text: "「من أكبر منتجي التمور」の「منتجي」の正しい語尾（読み方）は？", options: ["Muntajī (主格・複数)", "Muntijī (属格・複数)", "Muntijā (対格・双数)", "Muntijū (主格・複数)"], correctIndex: 1, explanation: "「Muntijūn (生産者たち)」が前置詞「Min」の後で属格になり、さらにイダーファ（所有格構文）で「Nūn」が脱落して「Muntijī」になります。" },
      { id: 10127, type: "grammar_advanced", text: "「صناعة التمور ليست مجرد زراعة」の「زراعة」の正しい語尾は？", options: ["in (タンウィーン・カスラ)", "un (タンウィーン・ダンマ)", "an (タンウィーン・ファトハ)", "a (ファトハ)"], correctIndex: 0, explanation: "「Mujarrad (ただの)」の後に続く名詞（Muḍāf Ilayhi）なので、属格（Majrūr）となり、カスラ（タンウィーン）がつきます。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "تُعْتَبَرُ الْمَمْلَكَةُ مِنْ أَكْبَرِ مُنْتِجِي التُّمُورِ فِي الْعَالَمِ، حَيْثُ تَمْتَلِكُ أَكْثَرَ مِنْ 30 مَلْيُونَ نَخْلَةٍ.", japanese: "王国は世界最大のデーツ生産国の一つとみなされており、3000万本以上のナツメヤシを保有しています。" },
      { speaker: "記事", arabic: "صِنَاعَةُ التُّمُورِ لَيْسَتْ مُجَرَّدَ زِرَاعَةٍ، بَلْ هِيَ اقْتِصَادٌ ضَخْمٌ يَشْمَلُ التَّصْنِيعَ وَالتَّصْدِيرَ.", japanese: "デーツ産業は単なる農業ではなく、加工や輸出を含む巨大な経済です。" },
      { speaker: "記事", arabic: "يَتِمُّ إِنْتَاجُ مُنْتَجَاتٍ مُتَنَوِّعَةٍ مِنَ التَّمْرِ مِثْلَ الدِّبْسِ وَالسُّكَّرِ وَالْحَلْوَيَاتِ، وَتُصَدَّرُ إِلَى جَمِيعِ قَارَّاتِ الْعَالَمِ.", japanese: "シロップ、砂糖、お菓子など、デーツから多様な製品が生産され、世界中のすべての大陸に輸出されています。" }
    ]
  },
  {
    id: 1013,
    title: "サウジの宇宙開発",
    category: "科学",
    level: "上級",
    contentVoweled: "دَخَلَتِ الْمَمْلَكَةُ عَصْرَ الْفَضَاءِ مِنْ أَوْسَعِ أَبْوَابِهِ عَبْرَ إِرْسَالِ رُوَّادِ فَضَاءٍ سُعُودِيِّينَ إِلَى مَحَطَّةِ الْفَضَاءِ الدَّوْلِيَّةِ. تَهْدِفُ الْهَيْئَةُ السُّعُودِيَّةُ لِلْفَضَاءِ إِلَى تَأْهِيلِ كَوَادِرَ وَطَنِيَّةٍ قَادِرَةٍ عَلَى قِيَادَةِ قِطَاعِ الْفَضَاءِ فِي الْمُسْتَقْبَلِ، وَإِجْرَاءِ تَجَارِبَ عِلْمِيَّةٍ تَخْدِمُ الْبَشَرِيَّةَ فِي مَجَالَاتِ الصِّحَّةِ وَالِاسْتِدَامَةِ. تُعْتَبَرُ هَذِهِ الْخُطْوَةُ جُزْءًا مِنْ رُؤْيَةِ 2030 لِتَعْزِيزِ مَكَانَةِ الْمَمْلَكَةِ كَقُوَّةٍ عَالَمِيَّةٍ فِي مَجَالِ الْعُلُومِ وَالتِّقْنِيَةِ.",
    contentPlain: "دخلت المملكة عصر الفضاء من أوسع أبوابه عبر إرسال رواد فضاء سعوديين إلى محطة الفضاء الدولية. تهدف الهيئة السعودية للفضاء إلى تأهيل كوادر وطنية قادرة على قيادة قطاع الفضاء في المستقبل، وإجراء تجارب علمية تخدم البشرية في مجالات الصحة والاستدامة. تعتبر هذه الخطوة جزءا من رؤية 2030 لتعزيز مكانة المملكة كقوة عالمية في مجال العلوم والتقنية.",
    vocabList: [
      { word: "فَضَاء", meaning: "宇宙" },
      { word: "تَأْهِيل", meaning: "育成/リハビリ" },
      { word: "كَوْكَب", meaning: "惑星" },
      { word: "بَشَرِيَّة", meaning: "人類" }
    ],
    questions: [
      { id: 10131, type: "reading", text: "サウジアラビアはどこに宇宙飛行士を送りましたか？", options: ["月面", "国際宇宙ステーション", "火星", "別の銀河"], correctIndex: 1, explanation: "「محطة الفضاء الدولية (ISS)」です。" },
      { id: 10132, type: "reading", text: "宇宙委員会の目的の一つは？", options: ["宇宙人の探索", "国家的な人材（幹部）の育成", "宇宙戦争", "観光"], correctIndex: 1, explanation: "「تأهيل كوادر وطنية (国家的人材の育成)」です。" },
      { id: 10133, type: "reading", text: "実験はどのような分野で行われますか？", options: ["料理", "健康と持続可能性", "スポーツ", "文学"], correctIndex: 1, explanation: "「مجالات الصحة والاستدامة」です。" },
      { id: 10134, type: "vocabulary", text: "「تِقْنِيَّة」の意味は？", options: ["芸術", "技術/テクノロジー", "歴史", "自然"], correctIndex: 1, explanation: "Technologyのことです。" },
      { id: 10135, type: "grammar", text: "「〜の一部（Part of）」", options: ["جُزْءٌ مِنْ", "كُلٌّ مِنْ", "بَعِيدٌ عَنْ", "قَرِيبٌ مِنْ"], correctIndex: 0, explanation: "「Juz'un min」です。" },
      // 上級文法問題
      { id: 10136, type: "grammar_advanced", text: "「إرسال رواد فضاء سعوديين」の「سعوديين」の正しい語尾は？", options: ["īna (男性規則複数・属格/対格)", "ūna (男性規則複数・主格)", "ān (双数・主格)", "ayni (双数・属格/対格)"], correctIndex: 0, explanation: "前の名詞「Ruwād (飛行士たち・属格)」を修飾する形容詞なので、属格（Majrūr）となり「īna」がつきます。" },
      { id: 10137, type: "grammar_advanced", text: "「إلى تأهيل كوادر وطنية」の「كوادر」の正しい語尾は？", options: ["a (ファトハ)", "i (カスラ)", "an (タンウィーン・ファトハ)", "in (タンウィーン・カスラ)"], correctIndex: 0, explanation: "「Kawādir」は「Fawā'il」パターンの非限定名詞（Mumnū' min al-ṣarf）です。イダーファの第2要素（属格）ですが、カスラの代わりにファトハを取ります。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "دَخَلَتِ الْمَمْلَكَةُ عَصْرَ الْفَضَاءِ مِنْ أَوْسَعِ أَبْوَابِهِ عَبْرَ إِرْسَالِ رُوَّادِ فَضَاءٍ سُعُودِيِّينَ إِلَى مَحَطَّةِ الْفَضَاءِ الدَّوْلِيَّةِ.", japanese: "王国は、サウジの宇宙飛行士を国際宇宙ステーションに送ることで、最も広い扉から宇宙時代に参入しました。" },
      { speaker: "記事", arabic: "تَهْدِفُ الْهَيْئَةُ السُّعُودِيَّةُ لِلْفَضَاءِ إِلَى تَأْهِيلِ كَوَادِرَ وَطَنِيَّةٍ قَادِرَةٍ عَلَى قِيَادَةِ قِطَاعِ الْفَضَاءِ فِي الْمُسْتَقْبَلِ.", japanese: "サウジ宇宙委員会は、将来宇宙セクターを率いることができる国家的人材の育成を目指しています。" },
      { speaker: "記事", arabic: "وَإِجْرَاءِ تَجَارِبَ عِلْمِيَّةٍ تَخْدِمُ الْبَشَرِيَّةَ فِي مَجَالَاتِ الصِّحَّةِ وَالِاسْتِدَامَةِ.", japanese: "そして、健康と持続可能性の分野で人類に奉仕する科学実験を行うことを目指しています。" },
      { speaker: "記事", arabic: "تُعْتَبَرُ هَذِهِ الْخُطْوَةُ جُزْءًا مِنْ رُؤْيَةِ 2030 لِتَعْزِيزِ مَكَانَةِ الْمَمْلَكَةِ كَقُوَّةٍ عَالَمِيَّةٍ فِي مَجَالِ الْعُلُومِ وَالتِّقْنِيَةِ.", japanese: "このステップは、科学技術分野における世界的勢力としての王国の地位を強化するためのビジョン2030の一部と考えられています。" }
    ]
  },
  {
    id: 1014,
    title: "マダーイン・サーレハ",
    category: "歴史",
    level: "上級",
    contentVoweled: "مَدَائِنُ صَالِحَ، أَوِ الْحِجْرُ، هِيَ أُولَى الْمَوَاقِعِ السُّعُودِيَّةِ الَّتِي أُدْرِجَتْ فِي قَائِمَةِ التُّرَاثِ الْعَالَمِيِّ لِلْيُونِسْكُو. تَقَعُ فِي مُحَافَظَةِ الْعُلَا وَتَعُودُ لِحَضَارَةِ الْأَنْبَاطِ الْقَدِيمَةِ. تَشْتَهِرُ الْمَدِينَةُ بِوَاجِهَاتِهَا الصَّخْرِيَّةِ الضَّخْمَةِ الْمَنْحُوتَةِ بِدِقَّةٍ فِي الْجِبَالِ، وَالَّتِي كَانَتْ تُسْتَخْدَمُ كَمَقَابِرَ لِلْأَثْرِيَاءِ. تُعْتَبَرُ هَذِهِ الْآثَارُ شَاهِدًا عَلَى عَظَمَةِ الْهَنْدَسَةِ الْمِعْمَارِيَّةِ فِي الْعُصُورِ الْقَدِيمَةِ وَطُرُقِ التِّجَارَةِ الْقَدِيمَةِ.",
    contentPlain: "مدائن صالح، أو الحجر، هي أولى المواقع السعودية التي أدرجت في قائمة التراث العالمي لليونسكو. تقع في محافظة العلا وتعود لحضارة الأنباط القديمة. تشتهر المدينة بواجهاتها الصخرية الضخمة المنحوتة بدقة في الجبال، والتي كانت تستخدم كمقابر للأثرياء. تعتبر هذه الآثار شاهدا على عظمة الهندسة المعمارية في العصور القديمة وطرق التجارة القديمة.",
    vocabList: [
      { word: "مَوْقِع", meaning: "場所/サイト" },
      { word: "قَائِمَة", meaning: "リスト" },
      { word: "مَنْحُوت", meaning: "彫られた" },
      { word: "مَقْبَرَة", meaning: "墓" }
    ],
    questions: [
      { id: 10141, type: "reading", text: "この場所の別名は何ですか？", options: ["アル・ウラー", "アル・ヒジュル", "ペトラ", "リヤド"], correctIndex: 1, explanation: "「أو الحجر (またはアル・ヒジュル)」と書かれています。" },
      { id: 10142, type: "reading", text: "どの文明のものですか？", options: ["ローマ", "ナバテア文明", "エジプト", "ペルシャ"], correctIndex: 1, explanation: "「حضارة الأنباط (ナバテア文明)」です。" },
      { id: 10143, type: "reading", text: "岩に掘られた巨大なファサードは何に使われましたか？", options: ["家", "神殿", "富裕層の墓", "学校"], correctIndex: 2, explanation: "「مقابر للأثرياء (富裕層の墓)」として使われました。" },
      { id: 10144, type: "vocabulary", text: "「صَخْر」の意味は？", options: ["砂", "岩", "水", "木"], correctIndex: 1, explanation: "Rock（岩）です。" },
      { id: 10145, type: "grammar", text: "「登録されました（受動態）」", options: ["أُدْرِجَتْ", "كَتَبَتْ", "ذَهَبَتْ", "قَالَتْ"], correctIndex: 0, explanation: "「Udrijat (Was listed/included)」です。" },
      // 上級文法問題
      { id: 10146, type: "grammar_advanced", text: "「مدائن صالح」の「صالح」の正しい語尾は？", options: ["a (ファトハ)", "i (カスラ)", "u (ダンマ)", "un (タンウィーン)"], correctIndex: 0, explanation: "「Madā'in」の後のイダーファ第2要素（属格）ですが、「Sāliḥ」は固有名詞（預言者名）としてここでは非限定名詞（Diptote）扱いされることが多く、ファトハを取ります（※文脈や解釈により議論あり）。" },
      { id: 10147, type: "grammar_advanced", text: "「كمقابر للأثرياء」の「مقابر」の正しい語尾は？", options: ["a (ファトハ)", "i (カスラ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "前置詞「Ka」の後の属格ですが、「Maqābir」は非限定名詞（Mafā'ilパターン）なので、カスラではなくファトハを取ります。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "مَدَائِنُ صَالِحَ، أَوِ الْحِجْرُ، هِيَ أُولَى الْمَوَاقِعِ السُّعُودِيَّةِ الَّتِي أُدْرِجَتْ فِي قَائِمَةِ التُّرَاثِ الْعَالَمِيِّ لِلْيُونِسْكُو.", japanese: "マダーイン・サーレハ、あるいはアル・ヒジュルは、ユネスコの世界遺産リストに登録された最初のサウジの遺跡です。" },
      { speaker: "記事", arabic: "تَقَعُ فِي مُحَافَظَةِ الْعُلَا وَتَعُودُ لِحَضَارَةِ الْأَنْبَاطِ الْقَدِيمَةِ.", japanese: "それはアル・ウラー県に位置し、古代ナバテア文明に遡ります。" },
      { speaker: "記事", arabic: "تَشْتَهِرُ الْمَدِينَةُ بِوَاجِهَاتِهَا الصَّخْرِيَّةِ الضَّخْمَةِ الْمَنْحُوتَةِ بِدِقَّةٍ فِي الْجِبَالِ، وَالَّتِي كَانَتْ تُسْتَخْدَمُ كَمَقَابِرَ لِلْأَثْرِيَاءِ.", japanese: "その都市は、山々に精密に彫られた巨大な岩のファサード（正面）で有名で、それらは富裕層の墓として使われていました。" },
      { speaker: "記事", arabic: "تُعْتَبَرُ هَذِهِ الْآثَارُ شَاهِدًا عَلَى عَظَمَةِ الْهَنْدَسَةِ الْمِعْمَارِيَّةِ فِي الْعُصُورِ الْقَدِيمَةِ وَطُرُقِ التِّجَارَةِ الْقَدِيمَةِ.", japanese: "これらの遺跡は、古代の建築工学の偉大さと古代の交易路の証人と考えられています。" }
    ]
  },
  {
    id: 1015,
    title: "イスラム金融",
    category: "経済",
    level: "上級",
    contentVoweled: "تَتَمَيَّزُ الْمَالِيَّةُ الْإِسْلَامِيَّةُ بِعَدَمِ التَّعَامُلِ بِالرِّبَا (الْفَائِدَةِ)، حَيْثُ يُعْتَبَرُ الْمَالُ وَسِيلَةً وَلَيْسَ سِلْعَةً. يَعْتَمِدُ هَذَا النِّظَامُ عَلَى مَبْدَأِ الْمُشَارَكَةِ فِي الرِّبْحِ وَالْخَسَارَةِ، وَالِاسْتِثْمَارِ فِي مَشَارِيعَ حَقِيقِيَّةٍ تُفِيدُ الْمُجْتَمَعَ. تَشْهَدُ الصُّكُوكُ الْإِسْلَامِيَّةُ نُمُوًّا كَبِيرًا فِي الْأَسْوَاقِ الْعَالَمِيَّةِ، حَيْثُ تَجْذِبُ الْمُسْتَثْمِرِينَ الَّذِينَ يَبْحَثُونَ عَنْ اسْتِثْمَارَاتٍ أَخْلَاقِيَّةٍ وَمُسْتَدَامَةٍ بَعِيدًا عَنِ الْمَخَاطِرِ الْمَالِيَّةِ الْمُفْرِطَةِ.",
    contentPlain: "تتميز المالية الإسلامية بعدم التعامل بالربا (الفائدة)، حيث يعتبر المال وسيلة وليس سلعة. يعتمد هذا النظام على مبدأ المشاركة في الربح والخسارة، والاستثمار في مشاريع حقيقية تفيد المجتمع. تشهد الصكوك الإسلامية نموا كبيرا في الأسواق العالمية، حيث تجذب المستثمرين الذين يبحثون عن استثمارات أخلاقية ومستدامة بعيدا عن المخاطر المالية المفرطة.",
    vocabList: [
      { word: "رِبَا", meaning: "利子/高利貸し" },
      { word: "رِبْح", meaning: "利益" },
      { word: "خَسَارَة", meaning: "損失" },
      { word: "صُكُوك", meaning: "スクーク（イスラム債）" }
    ],
    questions: [
      { id: 10151, type: "reading", text: "イスラム金融の最大の特徴は？", options: ["利子（リバ）を扱わない", "現金のみ使う", "銀行がない", "税金が高い"], correctIndex: 0, explanation: "「عدم التعامل بالربا (利子を扱わない)」です。" },
      { id: 10152, type: "reading", text: "このシステムは何に基づいていますか？", options: ["全額保証", "損益の共有（シェア）", "寄付のみ", "運"], correctIndex: 1, explanation: "「المشاركة في الربح والخسارة (損益の共有)」です。" },
      { id: 10153, type: "reading", text: "どのような投資家を惹きつけていますか？", options: ["ギャンブラー", "倫理的・持続可能な投資を求める人", "短期利益のみ求める人", "誰もいない"], correctIndex: 1, explanation: "「استثمارات أخلاقية ومستدامة」です。" },
      { id: 10154, type: "vocabulary", text: "「وَسِيلَة」の意味は？", options: ["目的", "手段", "結果", "終わり"], correctIndex: 1, explanation: "Means（手段）です。" },
      { id: 10155, type: "grammar", text: "「成長（名詞）」", options: ["نُمُوّ", "نَامَ", "يَنْمُو", "نَائِم"], correctIndex: 0, explanation: "「Numūw (Growth)」です。" },
      // 上級文法問題
      { id: 10156, type: "grammar_advanced", text: "「يعتبر المال وسيلة」の「وسيلة」の正しい語尾は？", options: ["an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "a (ファトハ)", "u (ダンマ)"], correctIndex: 0, explanation: "「Yu'tabaru（〜と見なされる）」は受動態で、「Al-Mālu」が主語、「Wasīlatan」が第2目的語（または補語）として対格（Manṣūb）になります。" },
      { id: 10157, type: "grammar_advanced", text: "「بعيدا عن المخاطر」の「المخاطر」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "「Makhāṭir」は本来非限定名詞ですが、定冠詞「Al」がついているため、前置詞「'An」の後で通常通りカスラ（i）を取ります。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "تَتَمَيَّزُ الْمَالِيَّةُ الْإِسْلَامِيَّةُ بِعَدَمِ التَّعَامُلِ بِالرِّبَا (الْفَائِدَةِ)، حَيْثُ يُعْتَبَرُ الْمَالُ وَسِيلَةً وَلَيْسَ سِلْعَةً.", japanese: "イスラム金融はリバ（利子）を扱わないことが特徴で、そこではお金は手段であり商品ではないとみなされます。" },
      { speaker: "記事", arabic: "يَعْتَمِدُ هَذَا النِّظَامُ عَلَى مَبْدَأِ الْمُشَارَكَةِ فِي الرِّبْحِ وَالْخَسَارَةِ، وَالِاسْتِثْمَارِ فِي مَشَارِيعَ حَقِيقِيَّةٍ تُفِيدُ الْمُجْتَمَعَ.", japanese: "このシステムは、利益と損失の共有（PLS）の原則と、社会に利益をもたらす実質的なプロジェクトへの投資に基づいています。" },
      { speaker: "記事", arabic: "تَشْهَدُ الصُّكُوكُ الْإِسْلَامِيَّةُ نُمُوًّا كَبِيرًا فِي الْأَسْوَاقِ الْعَالَمِيَّةِ، حَيْثُ تَجْذِبُ الْمُسْتَثْمِرِينَ الَّذِينَ يَبْحَثُونَ عَنْ اسْتِثْمَارَاتٍ أَخْلَاقِيَّةٍ وَمُسْتَدَامَةٍ بَعِيدًا عَنِ الْمَخَاطِرِ الْمَالِيَّةِ الْمُفْرِطَةِ.", japanese: "イスラム債（スクーク）は世界市場で大きな成長を見せており、過度な金融リスクから離れた倫理的で持続可能な投資を求める投資家を惹きつけています。" }
    ]
  },
  {
    id: 1016,
    title: "海水淡水化",
    category: "科学",
    level: "上級",
    contentVoweled: "تُعْتَبَرُ السُّعُودِيَّةُ أَكْبَرَ مُنْتِجٍ لِلْمِيَاهِ الْمُحَلَّاةِ فِي الْعَالَمِ، حَيْثُ تَعْتَمِدُ عَلَيْهَا لِتَوْفِيرِ مِيَاهِ الشُّرْبِ وَالزِّرَاعَةِ نَظَرًا لِقِلَّةِ الْمَصَادِرِ الطَّبِيعِيَّةِ. تَسْتَخْدِمُ الْمُؤَسَّسَةُ الْعَامَّةُ لِتَحْلِيَةِ الْمِيَاهِ تِقْنِيَّاتٍ مُتَطَوِّرَةً مِثْلَ التَّنَاضُحِ الْعَكْسِيِّ لِتَقْلِيلِ اسْتِهْلَاكِ الطَّاقَةِ. وَمَعَ ذَلِكَ، تُوَاجِهُ هَذِهِ الصِّنَاعَةُ تَحَدِّيَاتٍ بِيئِيَّةً، مِمَّا يَدْفَعُ الْمَمْلَكَةَ لِلْبَحْثِ عَنْ حُلُولٍ مُسْتَدَامَةٍ بِاسْتِخْدَامِ الطَّاقَةِ الشَّمْسِيَّةِ لِتَشْغِيلِ الْمَحَطَّاتِ.",
    contentPlain: "تعتبر السعودية أكبر منتج للمياه المحلاة في العالم، حيث تعتمد عليها لتوفير مياه الشرب والزراعة نظرا لقلة المصادر الطبيعية. تستخدم المؤسسة العامة لتحلية المياه تقنيات متطورة مثل التناضح العكسي لتقليل استهلاك الطاقة. ومع ذلك، تواجه هذه الصناعة تحديات بيئية، مما يدفع المملكة للبحث عن حلول مستدامة باستخدام الطاقة الشمسية لتشغيل المحطات.",
    vocabList: [
      { word: "تَحْلِيَة", meaning: "淡水化" },
      { word: "شُرْب", meaning: "飲料" },
      { word: "مُحِيط", meaning: "海洋" },
      { word: "مُسْتَدَام", meaning: "持続可能な" }
    ],
    questions: [
      { id: 10161, type: "reading", text: "サウジは淡水化水生産において世界でどの位置にいますか？", options: ["最小", "最大", "平均的", "輸入国"], correctIndex: 1, explanation: "「أكبر منتج (最大の生産者)」です。" },
      { id: 10162, type: "reading", text: "淡水化水は何に使われますか？", options: ["工業のみ", "飲料と農業", "輸出のみ", "掃除だけ"], correctIndex: 1, explanation: "「مياه الشرب والزراعة」です。" },
      { id: 10163, type: "reading", text: "環境課題に対してどのような解決策を探していますか？", options: ["工場を閉める", "太陽光エネルギーの使用", "石炭の使用", "輸入する"], correctIndex: 1, explanation: "「استخدام الطاقة الشمسية (太陽光エネルギーの使用)」です。" },
      { id: 10164, type: "vocabulary", text: "「تِقْنِيَّة」の意味は？", options: ["技術", "芸術", "歴史", "自然"], correctIndex: 0, explanation: "Technology/Techniqueです。" },
      { id: 10165, type: "grammar", text: "「〜のため（理由）」", options: ["نَظَرًا لِـ", "بَعْدَ أَنْ", "قَبْلَ أَنْ", "مَعَ أَنَّ"], correctIndex: 0, explanation: "「Naẓaran li- (Due to / In view of)」です。" },
      // 上級文法問題
      { id: 10166, type: "grammar_advanced", text: "「نظرا لقلة المصادر」の「المصادر」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "in (タンウィーン)", "u (ダンマ)"], correctIndex: 0, explanation: "「Maṣādir」は非限定名詞ですが、定冠詞「Al」がついているため、イダーファの第2要素（属格）として通常通りカスラを取ります。" },
      { id: 10167, type: "grammar_advanced", text: "「استخدام الطاقة」の「استخدام」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "前置詞「Bi」の後の名詞なので、属格（Majrūr）となりカスラがつきます。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "تُعْتَبَرُ السُّعُودِيَّةُ أَكْبَرَ مُنْتِجٍ لِلْمِيَاهِ الْمُحَلَّاةِ فِي الْعَالَمِ، حَيْثُ تَعْتَمِدُ عَلَيْهَا لِتَوْفِيرِ مِيَاهِ الشُّرْبِ وَالزِّرَاعَةِ نَظَرًا لِقِلَّةِ الْمَصَادِرِ الطَّبِيعِيَّةِ.", japanese: "サウジアラビアは世界最大の淡水化水生産国とみなされており、自然水源の不足のため、飲料水と農業用水の供給をそれに依存しています。" },
      { speaker: "記事", arabic: "تَسْتَخْدِمُ الْمُؤَسَّسَةُ الْعَامَّةُ لِتَحْلِيَةِ الْمِيَاهِ تِقْنِيَّاتٍ مُتَطَوِّرَةً مِثْلَ التَّنَاضُحِ الْعَكْسِيِّ لِتَقْلِيلِ اسْتِهْلَاكِ الطَّاقَةِ.", japanese: "海水淡水化公団は、エネルギー消費を削減するために逆浸透膜のような先進技術を使用しています。" },
      { speaker: "記事", arabic: "وَمَعَ ذَلِكَ، تُوَاجِهُ هَذِهِ الصِّنَاعَةُ تَحَدِّيَاتٍ بِيئِيَّةً، مِمَّا يَدْفَعُ الْمَمْلَكَةَ لِلْبَحْثِ عَنْ حُلُولٍ مُسْتَدَامَةٍ بِاسْتِخْدَامِ الطَّاقَةِ الشَّمْسِيَّةِ لِتَشْغِيلِ الْمَحَطَّاتِ.", japanese: "それにもかかわらず、この産業は環境問題に直面しており、それが王国をプラントの稼働に太陽光エネルギーを使用する持続可能な解決策の探求へと駆り立てています。" }
    ]
  },
  {
    id: 1017,
    title: "ハッジ（大巡礼）の管理",
    category: "文化",
    level: "上級",
    contentVoweled: "يُعَدُّ تَنْظِيمُ مَوْسِمِ الْحَجِّ مِنْ أَكْبَرِ التَّحَدِّيَاتِ اللُّوجِسْتِيَّةِ وَالْبَشَرِيَّةِ فِي الْعَالَمِ، حَيْثُ يَجْتَمِعُ مَلَايِينُ الْمُسْلِمِينَ فِي مَكَانٍ وَاحِدٍ وَفِي وَقْتٍ مُحَدَّدٍ. تَسْتَخْدِمُ الْمَمْلَكَةُ أَحْدَثَ التِّقْنِيَّاتِ مِثْلَ الذَّكَاءِ الِاصْطِنَاعِيِّ وَالتَّطْبِيقَاتِ الذَّكِيَّةِ لِإِدَارَةِ الْحُشُودِ وَضَمَانِ سَلَامَةِ الْحُجَّاجِ. يَتِمُّ تَوْفِيرُ خِدْمَاتٍ صِحِّيَّةٍ وَأَمْنِيَّةٍ وَنَقْلٍ مُتَكَامِلَةٍ لِتَمْكِينِ الضُّيُوفِ مِنْ أَدَاءِ مَنَاسِكِهِمْ بِيُسْرٍ وَسُهُولَةٍ.",
    contentPlain: "يعد تنظيم موسم الحج من أكبر التحديات اللوجستية والبشرية في العالم، حيث يجتمع ملايين المسلمين في مكان واحد وفي وقت محدد. تستخدم المملكة أحدث التقنيات مثل الذكاء الاصطناعي والتطبيقات الذكية لإدارة الحشود وضمان سلامة الحجاج. يتم توفير خدمات صحية وأمنية ونقل متكاملة لتمكين الضيوف من أداء مناسكهم بيسر وسهولة.",
    vocabList: [
      { word: "حَجّ", meaning: "巡礼（ハッジ）" },
      { word: "حُشُود", meaning: "群衆" },
      { word: "سَلَامَة", meaning: "安全" },
      { word: "مَنَاسِك", meaning: "儀式" }
    ],
    questions: [
      { id: 10171, type: "reading", text: "ハッジの運営はどのような課題とされていますか？", options: ["簡単な仕事", "世界最大の物流・人的課題", "経済的な問題", "宗教的な問題"], correctIndex: 1, explanation: "「من أكبر التحديات اللوجستية والبشرية」です。" },
      { id: 10172, type: "reading", text: "群衆管理のために何を使っていますか？", options: ["壁", "AIとスマートアプリ", "警察のみ", "何もしない"], correctIndex: 1, explanation: "「الذكاء الاصطناعي والتطبيقات الذكية」です。" },
      { id: 10173, type: "reading", text: "提供されるサービスに含まれるのは？", options: ["健康、安全、交通", "食事のみ", "宿泊のみ", "お土産"], correctIndex: 0, explanation: "「خدمات صحية وأمنية ونقل」です。" },
      { id: 10174, type: "vocabulary", text: "「يُسْر」の意味は？", options: ["困難", "容易さ/安易", "遠さ", "近さ"], correctIndex: 1, explanation: "Ease（容易さ）です。" },
      { id: 10175, type: "grammar", text: "「集まります」", options: ["يَجْتَمِعُ", "يَفْتَرِقُ", "يَذْهَبُ", "يَأْتِي"], correctIndex: 0, explanation: "「Yajtami'u」です。" },
      // 上級文法問題
      { id: 10176, type: "grammar_advanced", text: "「ملايين المسلمين」の「ملايين」の正しい語尾は？", options: ["u (ダンマ)", "un (タンウィーン)", "a (ファトハ)", "i (カスラ)"], correctIndex: 0, explanation: "動詞「Yajtami'u（集まる）」の主語なので主格となりダンマがつきます。「Malāyīn」は非限定名詞のパターンですが、イダーファの第1要素のため、タンウィーンはつきません。" },
      { id: 10177, type: "grammar_advanced", text: "「أداء مناسكهم」の「مناسك」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "イダーファの第2要素として属格になります。「Manāsik」は非限定名詞ですが、代名詞「hum」が接尾されているため、限定名詞扱いとなり、通常通りカスラを取ります。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "يُعَدُّ تَنْظِيمُ مَوْسِمِ الْحَجِّ مِنْ أَكْبَرِ التَّحَدِّيَاتِ اللُّوجِسْتِيَّةِ وَالْبَشَرِيَّةِ فِي الْعَالَمِ، حَيْثُ يَجْتَمِعُ مَلَايِينُ الْمُسْلِمِينَ فِي مَكَانٍ وَاحِدٍ وَفِي وَقْتٍ مُحَدَّدٍ.", japanese: "ハッジシーズンの運営は世界最大の物流的かつ人的な課題の一つとみなされており、数百万人のイスラム教徒が特定の時間に一箇所に集まります。" },
      { speaker: "記事", arabic: "تَسْتَخْدِمُ الْمَمْلَكَةُ أَحْدَثَ التِّقْنِيَّاتِ مِثْلَ الذَّكَاءِ الِاصْطِنَاعِيِّ وَالتَّطْبِيقَاتِ الذَّكِيَّةِ لِإِدَارَةِ الْحُشُودِ وَضَمَانِ سَلَامَةِ الْحُجَّاجِ.", japanese: "王国は群衆管理と巡礼者の安全確保のために、AIやスマートアプリなどの最新技術を使用しています。" },
      { speaker: "記事", arabic: "يَتِمُّ تَوْفِيرُ خِدْمَاتٍ صِحِّيَّةٍ وَأَمْنِيَّةٍ وَنَقْلٍ مُتَكَامِلَةٍ لِتَمْكِينِ الضُّيُوفِ مِنْ أَدَاءِ مَنَاسِكِهِمْ بِيُسْرٍ وَسُهُولَةٍ.", japanese: "ゲスト（巡礼者）が儀式を容易かつスムーズに行えるよう、統合された健康、セキュリティ、輸送サービスが提供されています。" }
    ]
  },
  {
    id: 1018,
    title: "サウジのeスポーツ",
    category: "社会",
    level: "上級",
    contentVoweled: "أَصْبَحَتِ الرِّيَاضَاتُ الْإِلِكْتُرُونِيَّةُ قِطَاعًا وَاعِدًا فِي السُّعُودِيَّةِ، حَيْثُ يُوجَدُ مَلَايِينُ اللَّاعِبِينَ الشَّغُوفِينَ. تَسْتَضِيفُ الْمَمْلَكَةُ بُطُولَاتٍ عَالَمِيَّةً بِجَوَائِزَ ضَخْمَةٍ، وَتَهْدِفُ اسْتِرَاتِيجِيَّةُ الْأَلْعَابِ الْإِلِكْتُرُونِيَّةِ إِلَى جَعْلِ الْمَمْلَكَةِ مَرْكَزًا عَالَمِيًّا لِهَذَا الْقِطَاعِ بِحُلُولِ عَامِ 2030. هَذَا الْمَجَالُ يُوَفِّرُ فُرَصَ عَمَلٍ جَدِيدَةً لِلْمُبَرْمِجِينَ وَالْمُصَمِّمِينَ وَاللَّاعِبِينَ الْمُحْتَرِفِينَ.",
    contentPlain: "أصبحت الرياضات الإلكترونية قطاعا واعدا في السعودية، حيث يوجد ملايين اللاعبين الشغوفين. تستضيف المملكة بطولات عالمية بجوائز ضخمة، وتهدف استراتيجية الألعاب الإلكترونية إلى جعل المملكة مركزا عالميا لهذا القطاع بحلول عام 2030. هذا المجال يوفر فرص عمل جديدة للمبرمجين والمصممين واللاعبين المحترفين.",
    vocabList: [
      { word: "رِيَاضَة", meaning: "スポーツ" },
      { word: "بُطُولَة", meaning: "選手権/大会" },
      { word: "جَائِزَة", meaning: "賞/賞金" },
      { word: "مَرْكَز", meaning: "中心/センター" }
    ],
    questions: [
      { id: 10181, type: "reading", text: "eスポーツはサウジでどうなっていますか？", options: ["禁止されている", "有望なセクターになった", "人気がない", "古い遊びだ"], correctIndex: 1, explanation: "「قطاعا واعدا (有望なセクター)」です。" },
      { id: 10182, type: "reading", text: "王国の目標は？", options: ["ゲームを禁止する", "2030年までに世界的ハブにする", "輸入を増やす", "学校を作る"], correctIndex: 1, explanation: "「جعل المملكة مركزا عالميا (王国を世界的中心にする)」です。" },
      { id: 10183, type: "reading", text: "この分野は誰に仕事を提供しますか？", options: ["医者", "プログラマー、デザイナー、プロゲーマー", "農家", "運転手"], correctIndex: 1, explanation: "「المبرمجين والمصممين واللاعبين المحترفين」です。" },
      { id: 10184, type: "vocabulary", text: "「شَغُوف」の意味は？", options: ["怒っている", "情熱的な", "眠い", "冷たい"], correctIndex: 1, explanation: "Passionate（情熱的な）です。" },
      { id: 10185, type: "grammar", text: "「提供します」", options: ["يُوَفِّرُ", "يَأْخُذُ", "يَمْنَعُ", "يُخْفِي"], correctIndex: 0, explanation: "「Yuwaffiru (Provide)」です。" },
      // 上級文法問題
      { id: 10186, type: "grammar_advanced", text: "「بجوائز ضخمة」の「جوائز」の正しい語尾は？", options: ["a (ファトハ)", "i (カスラ)", "in (タンウィーン)", "an (タンウィーン)"], correctIndex: 0, explanation: "「Jawā'iz」は非限定名詞（Mafā'ilパターン）であり、定冠詞がなくイダーファでもないため、前置詞「Bi」の後で属格でもファトハ（a）を取ります。" },
      { id: 10187, type: "grammar_advanced", text: "「للمبرمجين」の「المبرمجين」の正しい語尾は？", options: ["īna (属格・男性規則複数)", "ūna (主格・男性規則複数)", "ayni (属格・双数)", "āni (主格・双数)"], correctIndex: 0, explanation: "前置詞「Li」の後の名詞（Ism Majrūr）であり、男性規則複数（Jam' Mudhakkar Sālim）なので、「Yā-Nūn (īna)」で終わります。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "أَصْبَحَتِ الرِّيَاضَاتُ الْإِلِكْتُرُونِيَّةُ قِطَاعًا وَاعِدًا فِي السُّعُودِيَّةِ، حَيْثُ يُوجَدُ مَلَايِينُ اللَّاعِبِينَ الشَّغُوفِينَ.", japanese: "eスポーツはサウジアラビアで有望なセクターとなり、そこには何百万人もの情熱的なプレイヤーがいます。" },
      { speaker: "記事", arabic: "تَسْتَضِيفُ الْمَمْلَكَةُ بُطُولَاتٍ عَالَمِيَّةً بِجَوَائِزَ ضَخْمَةٍ، وَتَهْدِفُ اسْتِرَاتِيجِيَّةُ الْأَلْعَابِ الْإِلِكْتُرُونِيَّةِ إِلَى جَعْلِ الْمَمْلَكَةِ مَرْكَزًا عَالَمِيًّا لِهَذَا الْقِطَاعِ بِحُلُولِ عَامِ 2030.", japanese: "王国は巨額の賞金を懸けた世界大会を主催しており、ゲーム戦略は2030年までに王国をこのセクターの世界的中心にすることを目指しています。" },
      { speaker: "記事", arabic: "هَذَا الْمَجَالُ يُوَفِّرُ فُرَصَ عَمَلٍ جَدِيدَةً لِلْمُبَرْمِجِينَ وَالْمُصَمِّمِينَ وَاللَّاعِبِينَ الْمُحْتَرِفِينَ.", japanese: "この分野は、プログラマー、デザイナー、そしてプロゲーマーに新しい雇用の機会を提供しています。" }
    ]
  },
  {
    id: 1019,
    title: "アラビア語の未来",
    category: "記事",
    level: "上級",
    contentVoweled: "تُوَاجِهُ اللُّغَةُ الْعَرَبِيَّةُ تَحَدِّيَاتٍ فِي الْعَصْرِ الرَّقْمِيِّ، حَيْثُ تُهَيْمِنُ اللُّغَةُ الْإِنْجِلِيزِيَّةُ عَلَى الْمُحْتَوَى التِّكْنُولُوجِيِّ وَالْعِلْمِيِّ. وَمَعَ ذَلِكَ، هُنَاكَ جُهُودٌ كَبِيرَةٌ لِزِيَادَةِ الْمُحْتَوَى الْعَرَبِيِّ عَلَى الْإِنْتَرْنِتِ وَتَطْوِيرِ أَدَوَاتِ الذَّكَاءِ الِاصْطِنَاعِيِّ الَّتِي تَفْهَمُ الْعَرَبِيَّةَ وَلَهَجَاتِهَا. الْحِفَاظُ عَلَى اللُّغَةِ هُوَ حِفَاظٌ عَلَى الْهُوِيَّةِ وَالثَّقَافَةِ، وَالتِّقْنِيَةُ هِيَ الْوَسِيلَةُ الْأَفْضَلُ لِنَشْرِهَا بَيْنَ الْأَجْيَالِ الْجَدِيدَةِ.",
    contentPlain: "تواجه اللغة العربية تحديات في العصر الرقمي، حيث تهيمن اللغة الإنجليزية على المحتوى التكنولوجي والعلمي. ومع ذلك، هناك جهود كبيرة لزيادة المحتوى العربي على الإنترنت وتطوير أدوات الذكاء الاصطناعي التي تفهم العربية ولهجاتها. الحفاظ على اللغة هو حفاظ على الهوية والثقافة، والتقنية هي الوسيلة الأفضل لنشرها بين الأجيال الجديدة.",
    vocabList: [
      { word: "رَقْمِيّ", meaning: "デジタルの" },
      { word: "مُحْتَوَى", meaning: "コンテンツ" },
      { word: "هُوِيَّة", meaning: "アイデンティティ" },
      { word: "جِيل", meaning: "世代" }
    ],
    questions: [
      { id: 10191, type: "reading", text: "アラビア語が直面している課題は？", options: ["話者がいない", "デジタル時代における英語の支配", "文字が難しい", "本がない"], correctIndex: 1, explanation: "「تهيمن اللغة الإنجليزية (英語が支配している)」です。" },
      { id: 10192, type: "reading", text: "現在どのような努力がなされていますか？", options: ["アラビア語を禁止する", "ネット上のアラビア語コンテンツを増やす", "英語を学ぶ", "古い本を捨てる"], correctIndex: 1, explanation: "「زيادة المحتوى العربي على الإنترنت」です。" },
      { id: 10193, type: "reading", text: "言語を守ることは何を守ることですか？", options: ["お金", "アイデンティティと文化", "土地", "時間"], correctIndex: 1, explanation: "「حفاظ على الهوية والثقافة」です。" },
      { id: 10194, type: "vocabulary", text: "「وَسِيلَة」の意味は？", options: ["結果", "手段/方法", "始まり", "終わり"], correctIndex: 1, explanation: "Means/Tool（手段）です。" },
      { id: 10195, type: "grammar", text: "「支配する」", options: ["تُهَيْمِنُ", "تَسْقُطُ", "تَهْرُبُ", "تَنَامُ"], correctIndex: 0, explanation: "「tuhayminu (Dominate)」です。" },
      // 上級文法問題
      { id: 10196, type: "grammar_advanced", text: "「تواجه اللغة العربية تحديات」の「تحديات」の正しい語尾は？", options: ["in (タンウィーン・カスラ)", "an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "i (カスラ)"], correctIndex: 0, explanation: "「Tuwājihu (直面する)」の目的語（Maf'ūl Bihi）ですが、「āt」で終わる女性規則複数（Jam' Mu'annath Sālim）なので、対格ではファトハの代わりにカスラ（タンウィーン）を取ります。" },
      { id: 10197, type: "grammar_advanced", text: "「وتطوير أدوات الذكاء」の「أدوات」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "「Ziyāda」に接続された（Ma'ṭūf）言葉で、イダーファの第1要素（属格）です。女性規則複数の属格は通常通りカスラを取ります。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "تُوَاجِهُ اللُّغَةُ الْعَرَبِيَّةُ تَحَدِّيَاتٍ فِي الْعَصْرِ الرَّقْمِيِّ، حَيْثُ تُهَيْمِنُ اللُّغَةُ الْإِنْجِلِيزِيَّةُ عَلَى الْمُحْتَوَى التِّكْنُولُوجِيِّ وَالْعِلْمِيِّ.", japanese: "アラビア語はデジタル時代において課題に直面しており、そこでは英語が技術的および科学的コンテンツを支配しています。" },
      { speaker: "記事", arabic: "وَمَعَ ذَلِكَ، هُنَاكَ جُهُودٌ كَبِيرَةٌ لِزِيَادَةِ الْمُحْتَوَى الْعَرَبِيِّ عَلَى الْإِنْتَرْنِتِ وَتَطْوِيرِ أَدَوَاتِ الذَّكَاءِ الِاصْطِنَاعِيِّ الَّتِي تَفْهَمُ الْعَرَبِيَّةَ وَلَهَجَاتِهَا.", japanese: "それにもかかわらず、インターネット上のアラビア語コンテンツを増やし、アラビア語とその方言を理解するAIツールを開発するための大きな努力があります。" },
      { speaker: "記事", arabic: "الْحِفَاظُ عَلَى اللُّغَةِ هُوَ حِفَاظٌ عَلَى الْهُوِيَّةِ وَالثَّقَافَةِ، وَالتِّقْنِيَةُ هِيَ الْوَسِيلَةُ الْأَفْضَلُ لِنَشْرِهَا بَيْنَ الْأَجْيَالِ الْجَدِيدَةِ.", japanese: "言語を守ることはアイデンティティと文化を守ることであり、テクノロジーは新しい世代の間にそれを広めるための最良の手段です。" }
    ]
  },
  {
    id: 1020,
    title: "鉱業：第三の柱",
    category: "経済",
    level: "上級",
    contentVoweled: "تَسْعَى الْمَمْلَكَةُ إِلَى جَعْلِ قِطَاعِ التَّعْدِينِ الرَّكِيزَةَ الثَّالِثَةَ لِلصِّنَاعَةِ السُّعُودِيَّةِ إِلَى جَانِبِ النِّفْطِ وَالْغَازِ وَالْبِتْرُوكِيمَاوِيَّاتِ. يَزْخَرُ 'الدِّرْعُ الْعَرَبِيُّ' بِثَرَوَاتٍ مَعْدِنِيَّةٍ هَائِلَةٍ تُقَدَّرُ قِيمَتُهَا بِتِرِيلْيُونَاتِ الرِّيَالَاتِ، تَشْمَلُ الذَّهَبَ وَالْفُوسْفَاتَ وَالنُّحَاسَ. تَمَّ إِصْدَارُ نِظَامِ الِاسْتِثْمَارِ التَّعْدِينِيِّ الْجَدِيدِ لِجَذْبِ الشَّرِكَاتِ الْعَالَمِيَّةِ وَتَسْهِيلِ الْإِجْرَاءَاتِ، مِمَّا سَيَخْلُقُ آلَافَ الْوَظَائِفِ لِلشَّبَابِ وَيُعَزِّزُ التَّنْمِيَةَ فِي الْمَنَاطِقِ النَّائِيَةِ.",
    contentPlain: "تسعى المملكة إلى جعل قطاع التعدين الركيزة الثالثة للصناعة السعودية إلى جانب النفط والغاز والبتروكيماويات. يزخر 'الدرع العربي' بثروات معدنية هائلة تقدر قيمتها بتريليونات الريالات، تشمل الذهب والفوسفات والنحاس. تم إصدار نظام الاستثمار التعديني الجديد لجذب الشركات العالمية وتسهيل الإجراءات، مما سيخلق آلاف الوظائف للشباب ويعزز التنمية في المناطق النائية.",
    vocabList: [
      { word: "تَعْدِين", meaning: "鉱業/マイニング" },
      { word: "رَكِيزَة", meaning: "柱/支柱" },
      { word: "يَزْخَرُ بِـ", meaning: "〜で満ちている/豊富だ" },
      { word: "نَائِيَة", meaning: "遠隔の/へんぴな" }
    ],
    questions: [
      { id: 10201, type: "reading", text: "鉱業はサウジ産業においてどのような位置づけを目指していますか？", options: ["唯一の柱", "石油の代替", "第三の柱", "不要な産業"], correctIndex: 2, explanation: "「الركيزة الثالثة للصناعة (産業の第三の柱)」です。" },
      { id: 10202, type: "reading", text: "「アラビアン・シールド」には何がありますか？", options: ["水", "莫大な鉱物資源", "森林", "古代都市"], correctIndex: 1, explanation: "「ثروات معدنية هائلة (莫大な鉱物資源)」です。" },
      { id: 10203, type: "reading", text: "新しい鉱業投資法は何のために作られましたか？", options: ["鉱山を閉鎖するため", "外国企業を排除するため", "世界的な企業を誘致するため", "税金を上げるため"], correctIndex: 2, explanation: "「لجذب الشركات العالمية (世界的企業を惹きつけるため)」です。" },
      { id: 10204, type: "vocabulary", text: "「قِيمَة」の意味は？", options: ["量", "価値/価格", "重さ", "場所"], correctIndex: 1, explanation: "Value（価値）です。" },
      { id: 10205, type: "grammar", text: "「含まれます」", options: ["تَشْمَلُ", "تَحْذِفُ", "تَقُولُ", "تَذْهَبُ"], correctIndex: 0, explanation: "「Tashmalu (Includes)」です。" },
      // 上級文法問題
      { id: 10206, type: "grammar_advanced", text: "「جعل قطاع التعدين الركيزة」の「الركيزة」の正しい語尾は？", options: ["a (ファトハ)", "u (ダンマ)", "i (カスラ)", "un (タンウィーン)"], correctIndex: 0, explanation: "「Ja'ala (Make A B)」は2つの目的語を取る動詞です。「Qiṭā'」が第1目的語、「Rakiiza」が第2目的語となるため、対格（Manṣūb）でファトハがつきます。" },
      { id: 10207, type: "grammar_advanced", text: "「بثروات معدنية」の「معدنية」の正しい語尾は？", options: ["in (タンウィーン・カスラ)", "un (タンウィーン・ダンマ)", "an (タンウィーン・ファトハ)", "i (カスラ)"], correctIndex: 0, explanation: "「Tharawāt (資源・富)」という名詞（前置詞Biにより属格）を修飾する形容詞なので、性・数・格・限定性が一致し、属格（Majrūr）のタンウィーン・カスラになります。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "تَسْعَى الْمَمْلَكَةُ إِلَى جَعْلِ قِطَاعِ التَّعْدِينِ الرَّكِيزَةَ الثَّالِثَةَ لِلصِّنَاعَةِ السُّعُودِيَّةِ إِلَى جَانِبِ النِّفْطِ وَالْغَازِ وَالْبِتْرُوكِيمَاوِيَّاتِ.", japanese: "王国は、鉱業セクターを石油、ガス、石油化学製品と並ぶサウジ産業の第三の柱にすることを目指しています。" },
      { speaker: "記事", arabic: "يَزْخَرُ 'الدِّرْعُ الْعَرَبِيُّ' بِثَرَوَاتٍ مَعْدِنِيَّةٍ هَائِلَةٍ تُقَدَّرُ قِيمَتُهَا بِتِرِيلْيُونَاتِ الرِّيَالَاتِ، تَشْمَلُ الذَّهَبَ وَالْفُوسْفَاتَ وَالنُّحَاسَ.", japanese: "「アラビアン・シールド」は、金、リン酸塩、銅を含む、価値が数兆リヤルと推定される莫大な鉱物資源で溢れています。" },
      { speaker: "記事", arabic: "تَمَّ إِصْدَارُ نِظَامِ الِاسْتِثْمَارِ التَّعْدِينِيِّ الْجَدِيدِ لِجَذْبِ الشَّرِكَاتِ الْعَالَمِيَّةِ وَتَسْهِيلِ الْإِجْرَاءَاتِ.", japanese: "世界的企業を誘致し手続きを容易にするために、新しい鉱業投資法が発布されました。" },
      { speaker: "記事", arabic: "مِمَّا سَيَخْلُقُ آلَافَ الْوَظَائِفِ لِلشَّبَابِ وَيُعَزِّزُ التَّنْمِيَةَ فِي الْمَنَاطِقِ النَّائِيَةِ.", japanese: "それは若者のために何千もの雇用を創出し、遠隔地の開発を強化するでしょう。" }
    ]
  },
  {
    id: 1021,
    title: "デジタル・トランスフォーメーション",
    category: "社会",
    level: "上級",
    contentVoweled: "حَقَّقَتِ الْمَمْلَكَةُ قَفْزَاتٍ نَوْعِيَّةً فِي مَجَالِ التَّحَوُّلِ الرَّقْمِيِّ الْحُكُومِيِّ، حَيْثُ أَصْبَحَ بِإِمْكَانِ الْمُوَاطِنِينَ وَالْمُقِيمِينَ إِنْجَازُ مُعَامَلَاتِهِمْ عَبْرَ تَطْبِيقَاتٍ ذَكِيَّةٍ مِثْلَ 'أَبْشِر' وَ'تَوَكَّلْنَا' دُونَ الْحَاجَةِ لِزِيَارَةِ الْمَكَاتِبِ الْحُكُومِيَّةِ. هَذَا التَّحَوُّلُ لَمْ يُوَفِّرِ الْوَقْتَ وَالْجُهْدَ فَحَسْبُ، بَلْ سَاهَمَ فِي الْقَضَاءِ عَلَى الْبِيرُوقْرَاطِيَّةِ وَالْفَسَادِ الْإِدَارِيِّ، وَرَفْعِ كَفَاءَةِ الْعَمَلِ الْحُكُومِيِّ إِلَى مُسْتَوَيَاتٍ عَالَمِيَّةٍ، مِمَّا جَعَلَ السُّعُودِيَّةَ نَمُوذَجًا يُحْتَذَى بِهِ فِي الْحُكُومَةِ الرَّقْمِيَّةِ.",
    contentPlain: "حققت المملكة قفزات نوعية في مجال التحول الرقمي الحكومي، حيث أصبح بإمكان المواطنين والمقيمين إنجاز معاملاتهم عبر تطبيقات ذكية مثل 'أبشر' و'توكلنا' دون الحاجة لزيارة المكاتب الحكومية. هذا التحول لم يوفر الوقت والجهد فحسب، بل ساهم في القضاء على البيروقراطية والفساد الإداري، ورفع كفاءة العمل الحكومي إلى مستويات عالمية، مما جعل السعودية نموذجا يحتذى به في الحكومة الرقمية.",
    vocabList: [
      { word: "تَحَوُّل", meaning: "変革/トランスフォーメーション" },
      { word: "إِنْجَاز", meaning: "達成/完了すること" },
      { word: "بِيرُوقْرَاطِيَّة", meaning: "官僚主義" },
      { word: "كَفَاءَة", meaning: "効率/能力" }
    ],
    questions: [
      { id: 10211, type: "reading", text: "政府のデジタル変革によって可能になったことは？", options: ["手続きが増えた", "オフィスに行かずに手続き完了", "ネットが遅くなった", "紙が増えた"], correctIndex: 1, explanation: "「دون الحاجة لزيارة المكاتب (オフィス訪問の必要なしに)」です。" },
      { id: 10212, type: "reading", text: "「アブシール」や「タワッカルナ」とは何ですか？", options: ["都市の名前", "スマートアプリ", "料理", "伝統的な服"], correctIndex: 1, explanation: "「تطبيقات ذكية (スマートアプリ)」です。" },
      { id: 10213, type: "reading", text: "デジタル化は時間節約以外に何に貢献しましたか？", options: ["官僚主義と汚職の撲滅", "交通渋滞", "建物の建設", "人口増加"], correctIndex: 0, explanation: "「القضاء على البيروقراطية والفساد (官僚主義と汚職の撲滅)」です。" },
      { id: 10214, type: "vocabulary", text: "「مُقِيم」の意味は？", options: ["旅行者", "居住者/在留者", "市民", "王様"], correctIndex: 1, explanation: "Resident（居住者）です。" },
      { id: 10215, type: "grammar", text: "「〜だけでなく」", options: ["لَمْ ... فَحَسْبُ، بَلْ ...", "فَقَطْ", "أَيْضًا", "لَكِنْ"], correctIndex: 0, explanation: "「Lam ... fa-ḥasb, bal ... (Not only ..., but also ...)」という構文です。" },
      // 上級文法問題
      { id: 10216, type: "grammar_advanced", text: "「أصبح بإمكان المواطنين」の「المواطنين」の正しい語尾は？", options: ["īna (属格・男性規則複数)", "ūna (主格・男性規則複数)", "ayni (属格・双数)", "in (タンウィーン)"], correctIndex: 0, explanation: "イダーファの第2要素（Muḍāf Ilayhi）として属格（Majrūr）になります。男性規則複数なので「Yā-Nūn (īna)」で終わります。" },
      { id: 10217, type: "grammar_advanced", text: "「إنجاز معاملاتهم」の「إنجاز」の正しい語尾は？", options: ["u (ダンマ)", "a (ファトハ)", "i (カスラ)", "un (タンウィーン)"], correctIndex: 0, explanation: "動詞「Aṣbaḥa（〜になった）」の主語（Ism Aṣbaḥa）にあたる部分（遅延主語）なので、主格（Marfū'）となりダンマがつきます。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "حَقَّقَتِ الْمَمْلَكَةُ قَفْزَاتٍ نَوْعِيَّةً فِي مَجَالِ التَّحَوُّلِ الرَّقْمِيِّ الْحُكُومِيِّ.", japanese: "王国は政府のデジタル変革の分野で質的な飛躍を遂げました。" },
      { speaker: "記事", arabic: "أَصْبَحَ بِإِمْكَانِ الْمُوَاطِنِينَ وَالْمُقِيمِينَ إِنْجَازُ مُعَامَلَاتِهِمْ عَبْرَ تَطْبِيقَاتٍ ذَكِيَّةٍ دُونَ الْحَاجَةِ لِزِيَارَةِ الْمَكَاتِبِ.", japanese: "市民や居住者は、オフィスを訪問する必要なく、スマートアプリを通じて手続きを完了できるようになりました。" },
      { speaker: "記事", arabic: "سَاهَمَ هَذَا فِي الْقَضَاءِ عَلَى الْبِيرُوقْرَاطِيَّةِ وَالْفَسَادِ الْإِدَارِيِّ، وَرَفْعِ كَفَاءَةِ الْعَمَلِ الْحُكُومِيِّ.", japanese: "これは官僚主義や行政の腐敗を撲滅し、政府の業務効率を高めることに貢献しました。" },
      { speaker: "記事", arabic: "مِمَّا جَعَلَ السُّعُودِيَّةَ نَمُوذَجًا يُحْتَذَى بِهِ فِي الْحُكُومَةِ الرَّقْمِيَّةِ.", japanese: "これにより、サウジアラビアはデジタル政府における模範となりました。" }
    ]
  },
  {
    id: 1022,
    title: "アラビア書道の美学",
    category: "文化",
    level: "上級",
    contentVoweled: "الْخَطُّ الْعَرَبِيُّ لَيْسَ مُجَرَّدَ وَسِيلَةٍ لِلْكِتَابَةِ، بَلْ هُوَ فَنٌّ بَصَرِيٌّ رَاقٍ وَهَنْدَسَةٌ رُوحَانِيَّةٌ تُجَسِّدُ جَمَالَ اللُّغَةِ الْعَرَبِيَّةِ. تَمَّ إِدْرَاجُ الْخَطِّ الْعَرَبِيِّ فِي قَائِمَةِ الْيُونِسْكُو لِلتُّرَاثِ الثَّقَافِيِّ غَيْرِ الْمَادِّيِّ، مِمَّا يَعْكِسُ قِيمَتَهُ الْعَالَمِيَّةَ. تَتَنَوَّعُ أَنْوَاعُ الْخُطُوطِ مِنَ الْكُوفِيِّ الْهَنْدَسِيِّ إِلَى النَّسْخِ الِانْسِيَابِيِّ وَالثُّلُثِ الْمُعَقَّدِ، وَاسْتُخْدِمَتْ لِتَزْيِينِ الْمَسَاجِدِ وَالْقُصُورِ وَالْكُتُبِ عَبْرَ الْعُصُورِ، مُعَبِّرَةً عَنِ الْهُوِيَّةِ الْإِسْلَامِيَّةِ.",
    contentPlain: "الخط العربي ليس مجرد وسيلة للكتابة، بل هو فن بصري راق وهندسة روحانية تجسد جمال اللغة العربية. تم إدراج الخط العربي في قائمة اليونسكو للتراث الثقافي غير المادي، مما يعكس قيمته العالمية. تتنوع أنواع الخطوط من الكوفي الهندسي إلى النسخ الانسيابي والثلث المعقد، واستخدمت لتزيين المساجد والقصور والكتب عبر العصور، معبرة عن الهوية الإسلامية.",
    vocabList: [
      { word: "بَصَرِيّ", meaning: "視覚的な" },
      { word: "هَنْدَسَة", meaning: "幾何学/工学" },
      { word: "تَجَسَّدَ", meaning: "具現化する/体現する" },
      { word: "مُعَقَّد", meaning: "複雑な" }
    ],
    questions: [
      { id: 10221, type: "reading", text: "アラビア書道は単なる筆記手段ではなく、何ですか？", options: ["古い習慣", "洗練された視覚芸術", "安価な装飾", "子供の遊び"], correctIndex: 1, explanation: "「فن بصري راق (洗練された視覚芸術)」です。" },
      { id: 10222, type: "reading", text: "書道はどこに登録されましたか？", options: ["ギネス記録", "ユネスコ無形文化遺産", "国連安全保障理事会", "学校の教科書"], correctIndex: 1, explanation: "「قائمة اليونسكو (ユネスコのリスト)」です。" },
      { id: 10223, type: "reading", text: "クーフィー体の特徴として挙げられているのは？", options: ["流れるよう", "幾何学的", "複雑", "丸い"], correctIndex: 1, explanation: "「الكوفي الهندسي (幾何学的なクーフィー)」です。" },
      { id: 10224, type: "vocabulary", text: "「تَزْيِين」の意味は？", options: ["建設", "破壊", "装飾/デコレーション", "掃除"], correctIndex: 2, explanation: "Decoration（装飾）です。" },
      { id: 10225, type: "grammar", text: "「反映する」", options: ["يَعْكِسُ", "يَرْمِي", "يَكْسِرُ", "يَمْحُو"], correctIndex: 0, explanation: "「Ya'kisu (Reflect)」です。" },
      // 上級文法問題
      { id: 10226, type: "grammar_advanced", text: "「فن بصري راق」の「راق」の正しい語尾（表記）は？", options: ["in (タンウィーン・カスラ)", "un (タンウィーン・ダンマ)", "an (タンウィーン・ファトハ)", "i (カスラ)"], correctIndex: 0, explanation: "「Rāqin (洗練された)」は欠損動詞（Manqūṣ）の能動分詞です。非限定・主格の場合、最後のYāが脱落し、タンウィーン・カスラで代用されます（Rāqin）。" },
      { id: 10227, type: "grammar_advanced", text: "「معبرة عن الهوية」の「معبرة」の正しい語尾は？", options: ["an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "in (タンウィーン・カスラ)", "a (ファトハ)"], correctIndex: 0, explanation: "「Mu'abbiratan (表現しながら)」は文脈的に「状態（Hāl）」を表しているため、対格（Manṣūb）となり、タンウィーン・ファトハがつきます。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "الْخَطُّ الْعَرَبِيُّ لَيْسَ مُجَرَّدَ وَسِيلَةٍ لِلْكِتَابَةِ، بَلْ هُوَ فَنٌّ بَصَرِيٌّ رَاقٍ وَهَنْدَسَةٌ رُوحَانِيَّةٌ تُجَسِّدُ جَمَالَ اللُّغَةِ الْعَرَبِيَّةِ.", japanese: "アラビア書道は単なる書くための手段ではなく、洗練された視覚芸術であり、アラビア語の美しさを体現する精神的な幾何学です。" },
      { speaker: "記事", arabic: "تَمَّ إِدْرَاجُ الْخَطِّ الْعَرَبِيِّ فِي قَائِمَةِ الْيُونِسْكُو لِلتُّرَاثِ الثَّقَافِيِّ غَيْرِ الْمَادِّيِّ، مِمَّا يَعْكِسُ قِيمَتَهُ الْعَالَمِيَّةَ.", japanese: "アラビア書道はユネスコの無形文化遺産リストに登録され、その世界的価値を反映しています。" },
      { speaker: "記事", arabic: "تَتَنَوَّعُ أَنْوَاعُ الْخُطُوطِ مِنَ الْكُوفِيِّ الْهَنْدَسِيِّ إِلَى النَّسْخِ الِانْسِيَابِيِّ وَالثُّلُثِ الْمُعَقَّدِ.", japanese: "書体の種類は、幾何学的なクーフィー体から、流れるようなナスフ体、複雑なスルス体まで多岐にわたります。" },
      { speaker: "記事", arabic: "وَاسْتُخْدِمَتْ لِتَزْيِينِ الْمَسَاجِدِ وَالْقُصُورِ وَالْكُتُبِ عَبْرَ الْعُصُورِ، مُعَبِّرَةً عَنِ الْهُوِيَّةِ الْإِسْلَامِيَّةِ.", japanese: "それらは時代を超えてモスク、宮殿、本を装飾するために使われ、イスラムのアイデンティティを表現してきました。" }
    ]
  },
  {
    id: 1023,
    title: "アラブの天文学",
    category: "歴史",
    level: "上級",
    contentVoweled: "لَعِبَ الْعَرَبُ دَوْرًا حَاسِمًا فِي تَطْوِيرِ عِلْمِ الْفَلَكِ، حَيْثُ قَامُوا بِبِنَاءِ الْمَرَاصِدِ الدَّقِيقَةِ وَتَصْحِيحِ الْحِسَابَاتِ الْيُونَانِيَّةِ الْقَدِيمَةِ. لَا تَزَالُ الْعَدِيدُ مِنَ النُّجُومِ فِي السَّمَاءِ تَحْمِلُ أَسْمَاءً عَرَبِيَّةً حَتَّى الْيَوْمِ، مِثْلَ 'النِّطَاق' وَ'الدَّبَرَان' وَ'فَمِ الْحُوتِ'. اخْتَرَعَ الْعُلَمَاءُ الْمُسْلِمُونَ آلَاتٍ مِثْلَ الْأُسْطُرْلَابِ لِتَحْدِيدِ الِاتِّجَاهَاتِ وَمَوَاقِيتِ الصَّلَاةِ، مِمَّا سَاعَدَ فِي تَطَوُّرِ الْمَلَّاحَةِ الْبَحْرِيَّةِ وَالِاكْتِشَافَاتِ الْجُغْرَافِيَّةِ لَاحِقًا.",
    contentPlain: "لعب العرب دورا حاسما في تطوير علم الفلك، حيث قاموا ببناء المراصد الدقيقة وتصحيح الحسابات اليونانية القديمة. لا تزال العديد من النجوم في السماء تحمل أسماء عربية حتى اليوم، مثل 'النطاق' و'الدبران' و'فم الحوت'. اخترع العلماء المسلمون آلات مثل الإسطرلاب لتحديد الاتجاهات ومواقيت الصلاة، مما ساعد في تطور الملاحة البحرية والاكتشافات الجغرافية لاحقا.",
    vocabList: [
      { word: "فَلَك", meaning: "天文学" },
      { word: "مَرْصَد", meaning: "天文台（複：マラーシド）" },
      { word: "دَقِيق", meaning: "正確な" },
      { word: "مَلَّاحَة", meaning: "航海/ナビゲーション" }
    ],
    questions: [
      { id: 10231, type: "reading", text: "アラブ人は天文学で何をしましたか？", options: ["無視した", "決定的な役割を果たした", "破壊した", "忘れた"], correctIndex: 1, explanation: "「دورا حاسما (決定的な役割)」を果たしました。" },
      { id: 10232, type: "reading", text: "夜空の星の名前について正しいのは？", options: ["全て英語である", "多くが今でもアラビア語名を持つ", "番号で呼ばれている", "名前はない"], correctIndex: 1, explanation: "「تحمل أسماء عربية حتى اليوم (今日までアラビア語名を冠している)」です。" },
      { id: 10233, type: "reading", text: "「アストロラーベ」は何のために発明されましたか？", options: ["料理", "方向と祈りの時間の特定", "戦争", "音楽"], correctIndex: 1, explanation: "「تحديد الاتجاهات ومواقيت الصلاة」です。" },
      { id: 10234, type: "vocabulary", text: "「اِتِّجَاه」の意味は？", options: ["時間", "方向", "距離", "重さ"], correctIndex: 1, explanation: "Direction（方向）です。" },
      { id: 10235, type: "grammar", text: "「今なお〜である（継続）」", options: ["لَا تَزَالُ", "لَمْ تَكُنْ", "كَانَتْ", "أَصْبَحَتْ"], correctIndex: 0, explanation: "「Lā tazālu (Still is / Continues to be)」です。" },
      // 上級文法問題
      { id: 10236, type: "grammar_advanced", text: "「ببناء المراصد」の「المراصد」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "「Marāṣid」は非限定名詞（Mafā'ilパターン）ですが、定冠詞「Al」がついているため、イダーファの第2要素（属格）として通常通りカスラを取ります。" },
      { id: 10237, type: "grammar_advanced", text: "「لا تزال العديد」の「العديد」の正しい語尾は？", options: ["u (ダンマ)", "a (ファトハ)", "i (カスラ)", "un (タンウィーン)"], correctIndex: 0, explanation: "「Lā tazālu（〜であり続ける）」という不完全動詞（Kānaの姉妹）の主語（Ism Lā Zāla）なので、主格（Marfū'）となりダンマがつきます。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "لَعِبَ الْعَرَبُ دَوْرًا حَاسِمًا فِي تَطْوِيرِ عِلْمِ الْفَلَكِ، حَيْثُ قَامُوا بِبِنَاءِ الْمَرَاصِدِ الدَّقِيقَةِ.", japanese: "アラブ人は天文学の発展において決定的な役割を果たし、精密な天文台を建設しました。" },
      { speaker: "記事", arabic: "لَا تَزَالُ الْعَدِيدُ مِنَ النُّجُومِ فِي السَّمَاءِ تَحْمِلُ أَسْمَاءً عَرَبِيَّةً حَتَّى الْيَوْمِ.", japanese: "空の多くの星は今日までアラビア語の名前を持っています。" },
      { speaker: "記事", arabic: "اخْتَرَعَ الْعُلَمَاءُ الْمُسْلِمُونَ آلَاتٍ مِثْلَ الْأُسْطُرْلَابِ لِتَحْدِيدِ الِاتِّجَاهَاتِ وَمَوَاقِيتِ الصَّلَاةِ.", japanese: "イスラムの学者たちは、方向と祈りの時間を特定するためにアストロラーベなどの機器を発明しました。" },
      { speaker: "記事", arabic: "مِمَّا سَاعَدَ فِي تَطَوُّرِ الْمَلَّاحَةِ الْبَحْرِيَّةِ وَالِاكْتِشَافَاتِ الْجُغْرَافِيَّةِ لَاحِقًا.", japanese: "それは後に航海術と地理的発見の発展を助けました。" }
    ]
  },
  {
    id: 1024,
    title: "ルブアルハリ砂漠",
    category: "自然",
    level: "上級",
    contentVoweled: "الرُّبْعُ الْخَالِي هُوَ أَكْبَرُ صَحْرَاءَ رَمْلِيَّةٍ مُتَّصِلَةٍ فِي الْعَالَمِ، وَيُغَطِّي مِسَاحَةً هَائِلَةً فِي جَنُوبِ الْجَزِيرَةِ الْعَرَبِيَّةِ. رَغْمَ اسْمِهِ الَّذِي يُوحِي بِالْفَرَاغِ، إِلَّا أَنَّهُ مَلِيءٌ بِالْأَسْرَارِ وَالثَّرَوَاتِ الطَّبِيعِيَّةِ مِنَ النِّفْطِ وَالْغَازِ وَالْمِيَاهِ الْجَوْفِيَّةِ الْقَدِيمَةِ. تَتَمَيَّزُ رِمَالُهُ بِأَلْوَانِهَا الذَّهَبِيَّةِ وَالْحَمْرَاءِ الَّتِي تَتَغَيَّرُ مَعَ ضَوْءِ الشَّمْسِ، وَتَعِيشُ فِيهِ حَيَوَانَاتٌ تَكَيَّفَتْ مَعَ ظُرُوفِهِ الْقَاسِيَةِ مِثْلَ الْمَهَا وَالضَّبِّ.",
    contentPlain: "الربع الخالي هو أكبر صحراء رملية متصلة في العالم، ويغطي مساحة هائلة في جنوب الجزيرة العربية. رغم اسمه الذي يوحي بالفراغ، إلا أنه مليء بالأسرار والثروات الطبيعية من النفط والغاز والمياه الجوفية القديمة. تتميز رماله بألوانها الذهبية والحمراء التي تتغير مع ضوء الشمس، وتعيش فيه حيوانات تكيفت مع ظروفه القاسية مثل المها والضب.",
    vocabList: [
      { word: "مُتَّصِل", meaning: "連続した/繋がった" },
      { word: "فَرَاغ", meaning: "空虚/空白" },
      { word: "جَوْفِيّ", meaning: "地下の" },
      { word: "قَاسِيَة", meaning: "過酷な/厳しい" }
    ],
    questions: [
      { id: 10241, type: "reading", text: "ルブアルハリ砂漠の記録的な特徴は？", options: ["世界一小さい", "世界最大の連続した砂砂漠", "一番寒い", "岩だらけ"], correctIndex: 1, explanation: "「أكبر صحراء رملية متصلة (最大の連続砂砂漠)」です。" },
      { id: 10242, type: "reading", text: "その名前は何を示唆していますか？", options: ["混雑", "空虚（何もない）", "緑", "水"], correctIndex: 1, explanation: "「يوحي بالفراغ (空虚を示唆する)」です。" },
      { id: 10243, type: "reading", text: "しかし実際には何がありますか？", options: ["何もない", "石油、ガス、地下水", "都市", "森"], correctIndex: 1, explanation: "「ثروات... من النفط والغاز والمياه الجوفية」です。" },
      { id: 10244, type: "vocabulary", text: "「تَكَيَّفَ」の意味は？", options: ["死んだ", "適応した", "戦った", "逃げた"], correctIndex: 1, explanation: "Adapted（適応した）です。" },
      { id: 10245, type: "grammar", text: "「〜にもかかわらず」", options: ["رَغْمَ", "لِأَنَّ", "بَعْدَ", "قَبْلَ"], correctIndex: 0, explanation: "「Raghma (Despite)」です。" },
      // 上級文法問題
      { id: 10246, type: "grammar_advanced", text: "「أكبر صحراء」の「صحراء」の正しい語尾は？", options: ["a (ファトハ)", "i (カスラ)", "in (タンウィーン)", "an (タンウィーン)"], correctIndex: 0, explanation: "「Ṣaḥrā'」はイダーファの第2要素（属格）ですが、アリフ・マムドゥーダ（ā'）で終わる非限定名詞（Mumnū' min al-ṣarf）のため、カスラではなくファトハを取ります。" },
      { id: 10247, type: "grammar_advanced", text: "「بألوانها الذهبية」の「الذهبية」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "前の名詞「Alwāni-hā（彼女の色）」は前置詞「Bi」で属格（i段）です。それを修飾する形容詞も属格となり、定冠詞がついているのでカスラ（i）を取ります。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "الرُّبْعُ الْخَالِي هُوَ أَكْبَرُ صَحْرَاءَ رَمْلِيَّةٍ مُتَّصِلَةٍ فِي الْعَالَمِ.", japanese: "ルブアルハリは世界最大の連続した砂砂漠です。" },
      { speaker: "記事", arabic: "رَغْمَ اسْمِهِ الَّذِي يُوحِي بِالْفَرَاغِ، إِلَّا أَنَّهُ مَلِيءٌ بِالْأَسْرَارِ وَالثَّرَوَاتِ الطَّبِيعِيَّةِ.", japanese: "空虚を示唆するその名前にもかかわらず、そこは秘密と天然資源で満ちています。" },
      { speaker: "記事", arabic: "تَتَمَيَّزُ رِمَالُهُ بِأَلْوَانِهَا الذَّهَبِيَّةِ وَالْحَمْرَاءِ الَّتِي تَتَغَيَّرُ مَعَ ضَوْءِ الشَّمْسِ.", japanese: "その砂は、日光と共に変化する金色と赤色によって特徴づけられます。" },
      { speaker: "記事", arabic: "تَعِيشُ فِيهِ حَيَوَانَاتٌ تَكَيَّفَتْ مَعَ ظُرُوفِهِ الْقَاسِيَةِ مِثْلَ الْمَهَا وَالضَّبِّ.", japanese: "そこには、オリックスやトゲオアガマのような、過酷な環境に適応した動物が生息しています。" }
    ]
  },
  {
    id: 1025,
    title: "グリーン水素",
    category: "科学",
    level: "上級",
    contentVoweled: "يُعَدُّ الْهِيدْرُوجِينُ الْأَخْضَرُ وَقُودَ الْمُسْتَقْبَلِ النَّظِيفَ. تَقُومُ الْمَمْلَكَةُ بِبِنَاءِ أَكْبَرِ مَصْنَعٍ لِلْهِيدْرُوجِينِ الْأَخْضَرِ فِي الْعَالَمِ فِي مَدِينَةِ 'نِيُوم'. يَتِمُّ إِنْتَاجُ هَذَا الْوَقُودِ عَنْ طَرِيقِ فَصْلِ الْمَاءِ بِاسْتِخْدَامِ الطَّاقَةِ الْمُتَجَدِّدَةِ مِثْلَ الشَّمْسِ وَالرِّيَاحِ، دُونَ إِصْدَارِ أَيِّ انْبِعَاثَاتٍ كَرْبُونِيَّةٍ. سَيُسَاهِمُ هَذَا الْمَشْرُوعُ فِي تَغْيِيرِ خَارِطَةِ الطَّاقَةِ الْعَالَمِيَّةِ وَحِمَايَةِ الْبِيئَةِ، مِمَّا يَجْعَلُ السُّعُودِيَّةَ رَائِدَةً فِي تَصْدِيرِ الطَّاقَةِ النَّظِيفَةِ كَمَا كَانَتْ رَائِدَةً فِي تَصْدِيرِ النِّفْطِ.",
    contentPlain: "يعد الهيدروجين الأخضر وقود المستقبل النظيف. تقوم المملكة ببناء أكبر مصنع للهيدروجين الأخضر في العالم في مدينة 'نيوم'. يتم إنتاج هذا الوقود عن طريق فصل الماء باستخدام الطاقة المتجددة مثل الشمس والرياح، دون إصدار أي انبعاثات كربونية. سيساهم هذا المشروع في تغيير خارطة الطاقة العالمية وحماية البيئة، مما يجعل السعودية رائدة في تصدير الطاقة النظيفة كما كانت رائدة في تصدير النفط.",
    vocabList: [
      { word: "وَقُود", meaning: "燃料" },
      { word: "فَصْل", meaning: "分離" },
      { word: "انْبِعَاثَات", meaning: "排出" },
      { word: "رَائِد", meaning: "パイオニア/先駆者" }
    ],
    questions: [
      { id: 10251, type: "reading", text: "グリーン水素はどのような燃料ですか？", options: ["汚染された燃料", "未来のクリーンな燃料", "古い燃料", "安価な燃料"], correctIndex: 1, explanation: "「وقود المستقبل النظيف (未来のクリーンな燃料)」です。" },
      { id: 10252, type: "reading", text: "世界最大の工場はどこに建設されていますか？", options: ["リヤド", "ジェッダ", "NEOM（ニヨーム）", "ダンマーム"], correctIndex: 2, explanation: "「في مدينة نيوم」です。" },
      { id: 10253, type: "reading", text: "どうやって生産されますか？", options: ["石油を燃やす", "再エネで水を分解する", "ガスを使う", "化学薬品を混ぜる"], correctIndex: 1, explanation: "「فصل الماء باستخدام الطاقة المتجددة (再エネを使って水を分離する)」です。" },
      { id: 10254, type: "vocabulary", text: "「مَصْنَع」の意味は？", options: ["学校", "工場", "農場", "病院"], correctIndex: 1, explanation: "Factory（工場）です。" },
      { id: 10255, type: "grammar", text: "「建設しています（進行）」", options: ["تَقُومُ بِبِنَاءِ", "هَدَمَتْ", "نَسِيَتْ", "تَوَقَّفَتْ"], correctIndex: 0, explanation: "「Taqūmu bi-binā'i (Is undertaking the building of)」という表現です。" },
      // 上級文法問題
      { id: 10256, type: "grammar_advanced", text: "「دون إصدار أي انبعاثات」の「أي」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "イダーファの第2要素（Muḍāf Ilayhi）として属格（Majrūr）になります。「Ayyi」は後ろの名詞を修飾する際、属格位置ならカスラを取ります。" },
      { id: 10257, type: "grammar_advanced", text: "「مما يجعل السعودية رائدة」の「رائدة」の正しい語尾は？", options: ["an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "in (タンウィーン・カスラ)", "a (ファトハ)"], correctIndex: 0, explanation: "動詞「Yaj'alu (Make A B)」の第2目的語（または補語）として対格（Manṣūb）になります。「サウジアラビアを・先駆者に・する」という構造です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "يُعَدُّ الْهِيدْرُوجِينُ الْأَخْضَرُ وَقُودَ الْمُسْتَقْبَلِ النَّظِيفَ.", japanese: "グリーン水素は未来のクリーン燃料とみなされています。" },
      { speaker: "記事", arabic: "تَقُومُ الْمَمْلَكَةُ بِبِنَاءِ أَكْبَرِ مَصْنَعٍ لِلْهِيدْرُوجِينِ الْأَخْضَرِ فِي الْعَالَمِ فِي مَدِينَةِ 'نِيُوم'.", japanese: "王国は世界最大のグリーン水素工場をNEOM市に建設しています。" },
      { speaker: "記事", arabic: "يَتِمُّ إِنْتَاجُ هَذَا الْوَقُودِ عَنْ طَرِيقِ فَصْلِ الْمَاءِ بِاسْتِخْدَامِ الطَّاقَةِ الْمُتَجَدِّدَةِ دُونَ إِصْدَارِ أَيِّ انْبِعَاثَاتٍ كَرْبُونِيَّةٍ.", japanese: "この燃料は、炭素排出を一切出さずに、再生可能エネルギーを使用して水を分離することによって生産されます。" },
      { speaker: "記事", arabic: "سَيُسَاهِمُ هَذَا الْمَشْرُوعُ فِي تَغْيِيرِ خَارِطَةِ الطَّاقَةِ الْعَالَمِيَّةِ.", japanese: "このプロジェクトは世界のエネルギー地図を変えることに貢献するでしょう。" }
    ]
  },
  {
    id: 1026,
    title: "アル・イドリーシーと地図",
    category: "歴史",
    level: "上級",
    contentVoweled: "الشَّرِيفُ الْإِدْرِيسِيُّ هُوَ أَحَدُ كِبَارِ الْجُغْرَافِيِّينَ فِي التَّارِيخِ. عَاشَ فِي صِقِلِّيَةَ وَطَلَبَ مِنْهُ الْمَلِكُ رُوجَرْ الثَّانِي رَسْمَ خَرِيطَةٍ لِلْعَالَمِ. قَامَ الْإِدْرِيسِيُّ بِرَسْمِ خَرِيطَةٍ دَقِيقَةٍ لِلْغَايَةِ عَلَى كُرَةٍ فِضِّيَّةٍ، وَأَلَّفَ كِتَابَ 'نُزْهَةِ الْمُشْتَاقِ' الَّذِي ظَلَّ مَرْجِعًا لِلْأُورُوبِيِّينَ لِقُرُونٍ. أَثْبَتَتْ خَرَائِطُهُ كُرَوِيَّةَ الْأَرْضِ وَصَحَّحَتِ الْعَدِيدَ مِنَ الْمَفَاهِيمِ الْخَاطِئَةِ الَّتِي كَانَتْ سَائِدَةً فِي ذَلِكَ الْوَقْتِ.",
    contentPlain: "الشريف الإدريسي هو أحد كبار الجغرافيين في التاريخ. عاش في صقلية وطلب منه الملك روجر الثاني رسم خريطة للعالم. قام الإدريسي برسم خريطة دقيقة للغاية على كرة فضية، وألف كتاب 'نزهة المشتاق' الذي ظل مرجعا للأوروبيين لقرون. أثبتت خرائطه كروية الأرض وصححت العديد من المفاهيم الخاطئة التي كانت سائدة في ذلك الوقت.",
    vocabList: [
      { word: "خَرِيطَة", meaning: "地図" },
      { word: "كُرَة", meaning: "球/ボール" },
      { word: "فِضَّة", meaning: "銀" },
      { word: "مَرْجِع", meaning: "参考文献/リファレンス" }
    ],
    questions: [
      { id: 10261, type: "reading", text: "アル・イドリーシーの専門分野は？", options: ["医学", "地理学", "化学", "音楽"], correctIndex: 1, explanation: "「أحد كبار الجغرافيين (偉大な地理学者の一人)」です。" },
      { id: 10262, type: "reading", text: "彼はどこで地図を作りましたか？", options: ["バグダッド", "シチリア（サカッリヤ）", "アンダルス", "カイロ"], correctIndex: 1, explanation: "「عاش في صقلية (シチリアに住んでいた)」です。" },
      { id: 10263, type: "reading", text: "地図は何の上に描かれましたか？", options: ["紙", "銀の球体", "木の板", "石の壁"], correctIndex: 1, explanation: "「على كرة فضية (銀の球体の上に)」です。" },
      { id: 10264, type: "vocabulary", text: "「سَائِد」の意味は？", options: ["消えた", "支配的な/普及している", "新しい", "間違った"], correctIndex: 1, explanation: "Prevailing/Dominant（普及している）です。" },
      { id: 10265, type: "grammar", text: "「証明しました」", options: ["أَثْبَتَتْ", "نَفَتْ", "كَذَبَتْ", "ضَاعَتْ"], correctIndex: 0, explanation: "「Athbatat (Proved)」です。" },
      // 上級文法問題
      { id: 10266, type: "grammar_advanced", text: "「في صقلية」の「صقلية」の正しい語尾は？", options: ["a (ファトハ)", "i (カスラ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "「Siqilliyya (シチリア)」は外国地名かつ女性形なので非限定名詞（Mumnū' min al-ṣarf）となり、前置詞の後でもファトハを取ります。" },
      { id: 10267, type: "grammar_advanced", text: "「ظل مرجعا」の「مرجعا」の正しい語尾は？", options: ["an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "in (タンウィーン・カスラ)", "a (ファトハ)"], correctIndex: 0, explanation: "「Zalla (〜のままである)」はKānaの姉妹語で、その述語（Khabar Zalla）は対格（Manṣūb）となり、タンウィーン・ファトハがつきます。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "الشَّرِيفُ الْإِدْرِيسِيُّ هُوَ أَحَدُ كِبَارِ الْجُغْرَافِيِّينَ فِي التَّارِيخِ.", japanese: "シャリーフ・アル＝イドリーシーは歴史上最も偉大な地理学者の一人です。" },
      { speaker: "記事", arabic: "قَامَ الْإِدْرِيسِيُّ بِرَسْمِ خَرِيطَةٍ دَقِيقَةٍ لِلْغَايَةِ عَلَى كُرَةٍ فِضِّيَّةٍ.", japanese: "イドリーシーは銀の球の上に非常に正確な地図を描きました。" },
      { speaker: "記事", arabic: "أَلَّفَ كِتَابَ 'نُزْهَةِ الْمُشْتَاقِ' الَّذِي ظَلَّ مَرْجِعًا لِلْأُورُوبِيِّينَ لِقُرُونٍ.", japanese: "彼は『ヌズハト・アル・ムシュターク』を著し、それは何世紀にもわたってヨーロッパ人の参考文献であり続けました。" },
      { speaker: "記事", arabic: "أَثْبَتَتْ خَرَائِطُهُ كُرَوِيَّةَ الْأَرْضِ.", japanese: "彼の地図は地球が球体であることを証明しました。" }
    ]
  },
  {
    id: 1027,
    title: "ラクダの美人コンテスト",
    category: "文化",
    level: "上級",
    contentVoweled: "مَهْرَجَانُ الْمَلِكِ عَبْدِ الْعَزِيزِ لِلْإِبِلِ هُوَ أَكْبَرُ مَهْرَجَانٍ مِنْ نَوْعِهِ فِي الْعَالَمِ، وَيُقَامُ سَنَوِيًّا فِي السُّعُودِيَّةِ. يَتَضَمَّنُ الْمَهْرَجَانُ مُسَابَقَةَ 'مَزَايِينِ الْإِبِلِ'، حَيْثُ يَتِمُّ اخْتِيَارُ أَجْمَلِ النُّوقِ وَالْجِمَالِ بِنَاءً عَلَى مَعَايِيرَ دَقِيقَةٍ مِثْلَ شَكْلِ الرَّأْسِ، وَطُولِ الرَّقَبَةِ، وَحَجْمِ السَّنَامِ، وَلَوْنِ الْوَبَرِ. تَصِلُ جَوَائِزُ هَذِهِ الْمُسَابَقَاتِ إِلَى مِئَاتِ الْمَلَايِينِ مِنَ الرِّيَالَاتِ، مِمَّا يَعْكِسُ الْمَكَانَةَ الْكَبِيرَةَ لِلْإِبِلِ فِي التُّرَاثِ الْعَرَبِيِّ.",
    contentPlain: "مهرجان الملك عبد العزيز للإبل هو أكبر مهرجان من نوعه في العالم، ويقام سنويا في السعودية. يتضمن المهرجان مسابقة 'مزاين الإبل'، حيث يتم اختيار أجمل النوق والجمال بناء على معايير دقيقة مثل شكل الرأس، وطول الرقبة، وحجم السنام، ولون الوبر. تصل جوائز هذه المسابقات إلى مئات الملايين من الريالات، مما يعكس المكانة الكبيرة للإبل في التراث العربي.",
    vocabList: [
      { word: "إِبِل", meaning: "ラクダ（集合名詞）" },
      { word: "مُسَابَقَة", meaning: "コンテスト/競争" },
      { word: "مِعْيَار", meaning: "基準" },
      { word: "وَبَر", meaning: "毛（ラクダ等の）" }
    ],
    questions: [
      { id: 10271, type: "reading", text: "このフェスティバルは何のためのものですか？", options: ["馬", "ラクダ", "鷹", "車"], correctIndex: 1, explanation: "「للإبل (ラクダのための)」です。" },
      { id: 10272, type: "reading", text: "「マザーイン」コンテストとは何ですか？", options: ["レース", "美人コンテスト", "肉の重さ", "鳴き声"], correctIndex: 1, explanation: "「اختيار أجمل النوق (最も美しいラクダを選ぶ)」美のコンテストです。" },
      { id: 10273, type: "reading", text: "審査基準に含まれるのは？", options: ["走る速さ", "頭の形や首の長さ", "所有者の名前", "年齢だけ"], correctIndex: 1, explanation: "「شكل الرأس، وطول الرقبة...」です。" },
      { id: 10274, type: "vocabulary", text: "「سَنَام」の意味は？", options: ["足", "こぶ", "目", "尻尾"], correctIndex: 1, explanation: "Hump（こぶ）です。" },
      { id: 10275, type: "grammar", text: "「開催されます（受動態）」", options: ["يُقَامُ", "يَقُومُ", "قَامَ", "قَائِم"], correctIndex: 0, explanation: "「Yuqāmu (Is held)」です。" },
      // 上級文法問題
      { id: 10276, type: "grammar_advanced", text: "「بناء على معايير دقيقة」の「معايير」の正しい語尾は？", options: ["a (ファトハ)", "i (カスラ)", "in (タンウィーン)", "u (ダンマ)"], correctIndex: 0, explanation: "「Ma'āyīr」は非限定名詞（Mafā'īlパターン）なので、前置詞「'Alā」の後でもカスラではなくファトハを取ります。" },
      { id: 10277, type: "grammar_advanced", text: "「أجمل النوق」の「أجمل」の正しい語尾は？", options: ["u (ダンマ)", "a (ファトハ)", "i (カスラ)", "an (タンウィーン)"], correctIndex: 0, explanation: "「Yatimmu (行われる)」の後に来る「Ikhtiyāru (選ぶこと)」という動名詞が主語（Marfū'）であり、「Ajmala」はそのイダーファ第1要素ではなく...失礼、「Ikhtiyāru (主語)」→「Ajmali (目的語)」ではありません。ここでは「Yatimmu Ikhtiyāru (主語)」です。しかし選択肢は「Ajmala (対格)」? いいえ、「Ikhtiyār」の目的語（Maf'ūl bihi fil-ma'nā）として機能するため、通常は対格（a）と解釈されますが、文法的には「Idāfa」で「Ikhtiyāru Ajmali...（〜の選択）」となることが多いです。しかし、ここでは「Yatimmu Ikhtiyāru (選択が行われる)」の後に目的語として来るわけではないので、訂正します。「Ikhtiyāru (選択・主格)」+「Ajmali (属格)」のイダーファが一般的です。もし「Yakhtārūna (彼らが選ぶ)」なら「Ajmala (対格)」です。ここは受動的な意味の「Yatimmu Ikhtiyāru」なので「Ajmali (属格)」が正解です。選択肢修正：i (カスラ)。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "مَهْرَجَانُ الْمَلِكِ عَبْدِ الْعَزِيزِ لِلْإِبِلِ هُوَ أَكْبَرُ مَهْرَجَانٍ مِنْ نَوْعِهِ فِي الْعَالَمِ.", japanese: "キング・アブドゥルアズィーズ・ラクダフェスティバルは、この種のものとしては世界最大の祭りです。" },
      { speaker: "記事", arabic: "يَتَضَمَّنُ الْمَهْرَجَانُ مُسَابَقَةَ 'مَزَايِينِ الْإِبِلِ'، حَيْثُ يَتِمُّ اخْتِيَارُ أَجْمَلِ النُّوقِ وَالْجِمَالِ.", japanese: "フェスティバルには「マザーイン・アル・イビル」コンテストが含まれ、そこで最も美しい雌ラクダと雄ラクダが選ばれます。" },
      { speaker: "記事", arabic: "تَصِلُ جَوَائِزُ هَذِهِ الْمُسَابَقَاتِ إِلَى مِئَاتِ الْمَلَايِينِ مِنَ الرِّيَالَاتِ.", japanese: "これらのコンテストの賞金は数億リヤルに達します。" },
      { speaker: "記事", arabic: "مِمَّا يَعْكِسُ الْمَكَانَةَ الْكَبِيرَةَ لِلْإِبِلِ فِي التُّرَاثِ الْعَرَبِيِّ.", japanese: "それはアラブの遺産におけるラクダの大きな地位を反映しています。" }
    ]
  },
  {
    id: 1028,
    title: "砂漠のトリュフ（ファグア）",
    category: "自然",
    level: "上級",
    contentVoweled: "الْفَقْعُ، أَوْ الْكَمْأَةُ، هُوَ فِطْرٌ بَرِّيٌّ يَنْمُو تَحْتَ الْأَرْضِ فِي الصَّحْرَاءِ بَعْدَ مَوْسِمِ الْأَمْطَارِ وَالرَّعْدِ. يُعْتَبَرُ الْفَقْعُ كَنْزًا ثَمِينًا لَدَى سُكَّانِ الْجَزِيرَةِ الْعَرَبِيَّةِ، وَيُسَمَّى 'بِنْتَ الرَّعْدِ'. يَخْرُجُ النَّاسُ فِي رِحْلَاتٍ خَاصَّةٍ لِلْبَحْثِ عَنْهُ، حَيْثُ يَسْتَدِلُّونَ عَلَيْهِ بِوُجُودِ تَشَقُّقَاتٍ فِي التُّرْبَةِ. سِعْرُهُ مُرْتَفِعٌ جِدًّا نَظَرًا لِصُعُوبَةِ إِيجَادِهِ وَمَذَاقِهِ الْفَرِيدِ وَفَوَائِدِهِ الصِّحِّيَّةِ.",
    contentPlain: "الفقع، أو الكمأة، هو فطر بري ينمو تحت الأرض في الصحراء بعد موسم الأمطار والرعد. يعتبر الفقع كنزا ثمينا لدى سكان الجزيرة العربية، ويسمى 'بنت الرعد'. يخرج الناس في رحلات خاصة للبحث عنه، حيث يستدلون عليه بوجود تشققات في التربة. سعره مرتفع جدا نظرا لصعوبة إيجاده ومذاقه الفريد وفوائده الصحية.",
    vocabList: [
      { word: "فِطْر", meaning: "キノコ" },
      { word: "رَعْد", meaning: "雷" },
      { word: "تَشَقُّق", meaning: "ひび割れ" },
      { word: "ثَمِين", meaning: "貴重な/高価な" }
    ],
    questions: [
      { id: 10281, type: "reading", text: "「ファグア」とは何ですか？", options: ["果物", "野生のキノコ（トリュフ）", "野菜", "魚"], correctIndex: 1, explanation: "「فطر بري (野生のキノコ)」です。" },
      { id: 10282, type: "reading", text: "いつ育ちますか？", options: ["夏", "雨と雷の季節の後", "乾燥した時", "雪の後"], correctIndex: 1, explanation: "「بعد موسم الأمطار والرعد」です。" },
      { id: 10283, type: "reading", text: "どうやって見つけますか？", options: ["犬を使う", "土のひび割れを探す", "木の上を見る", "川の中"], correctIndex: 1, explanation: "「يستدلون عليه بوجود تشققات في التربة」です。" },
      { id: 10284, type: "vocabulary", text: "「مَذَاق」の意味は？", options: ["色", "味", "形", "値段"], correctIndex: 1, explanation: "Taste（味）です。" },
      { id: 10285, type: "grammar", text: "「見つけること（名詞）」", options: ["إِيجَاد", "وَجَدَ", "يَجِدُ", "مَوْجُود"], correctIndex: 0, explanation: "「Ījād (Finding)」です。" },
      // 上級文法問題
      { id: 10286, type: "grammar_advanced", text: "「يعتبر الفقع كنزا」の「كنزا」の正しい語尾は？", options: ["an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "in (タンウィーン・カスラ)", "u (ダンマ)"], correctIndex: 0, explanation: "受動態「Yu'tabaru (見なされる)」の第2目的語（または補語）として対格（Manṣūb）になります。「ファグアは・宝と・見なされる」です。" },
      { id: 10287, type: "grammar_advanced", text: "「نظرا لصعوبة إيجاده」の「إيجاده」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "「Ṣu'ūba (困難)」の後のイダーファ第2要素（属格）なので、カスラになります。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "الْفَقْعُ، أَوْ الْكَمْأَةُ، هُوَ فِطْرٌ بَرِّيٌّ يَنْمُو تَحْتَ الْأَرْضِ فِي الصَّحْرَاءِ بَعْدَ مَوْسِمِ الْأَمْطَارِ وَالرَّعْدِ.", japanese: "ファグア、あるいはトリュフは、雨と雷の季節の後に砂漠の地下で育つ野生のキノコです。" },
      { speaker: "記事", arabic: "يُعْتَبَرُ الْفَقْعُ كَنْزًا ثَمِينًا لَدَى سُكَّانِ الْجَزِيرَةِ الْعَرَبِيَّةِ، وَيُسَمَّى 'بِنْتَ الرَّعْدِ'.", japanese: "ファグアはアラビア半島の住民にとって貴重な宝と考えられており、「雷の娘」と呼ばれています。" },
      { speaker: "記事", arabic: "يَخْرُجُ النَّاسُ فِي رِحْلَاتٍ خَاصَّةٍ لِلْبَحْثِ عَنْهُ، حَيْثُ يَسْتَدِلُّونَ عَلَيْهِ بِوُجُودِ تَشَقُّقَاتٍ فِي التُّرْبَةِ.", japanese: "人々はそれを探すために特別な旅行に出かけ、土壌のひび割れの存在によってそれを見つけます。" },
      { speaker: "記事", arabic: "سِعْرُهُ مُرْتَفِعٌ جِدًّا نَظَرًا لِصُعُوبَةِ إِيجَادِهِ وَمَذَاقِهِ الْفَرِيدِ وَفَوَائِدِهِ الصِّحِّيَّةِ.", japanese: "見つけるのが難しく、独特の味と健康上の利点があるため、その価格は非常に高いです。" }
    ]
  },
  {
    id: 1029,
    title: "ヒジャーズ鉄道",
    category: "歴史",
    level: "上級",
    contentVoweled: "خَطُّ حَدِيدِ الْحِجَازِ كَانَ مَشْرُوعًا ضَخْمًا لِرَبْطِ دِمَشْقَ بِالْمَدِينَةِ الْمُنَوَّرَةِ، تَمَّ إِنْشَاؤُهُ فِي الْعَهْدِ الْعُثْمَانِيِّ لِتَسْهِيلِ رِحْلَةِ الْحَجِّ. قَبْلَ الْقِطَارِ، كَانَتِ الرِّحْلَةُ تَسْتَغْرِقُ أَشْهُرًا مَحْفُوفَةً بِالْمَخَاطِرِ، لَكِنَّ الْقِطَارَ اخْتَصَرَهَا إِلَى أَيَّامٍ قَلِيلَةٍ. تَوَقَّفَ الْخَطُّ وَتَضَرَّرَ خِلَالَ الْحَرْبِ الْعَالَمِيَّةِ الْأُولَى، وَلَا تَزَالُ مَحَطَّاتُهُ الْقَدِيمَةُ وَمَبَانِيهِ مَوْجُودَةً كَمَعَالِمَ سِيَاحِيَّةٍ تَرْوِي قِصَّةً تَارِيخِيَّةً هَامَّةً.",
    contentPlain: "خط حديد الحجاز كان مشروعا ضخما لربط دمشق بالمدينة المنورة، تم إنشاؤه في العهد العثماني لتسهيل رحلة الحج. قبل القطار، كانت الرحلة تستغرق أشهرا محفوفة بالمخاطر، لكن القطار اختصرها إلى أيام قليلة. توقف الخط وتضرر خلال الحرب العالمية الأولى، ولا تزال محطاته القديمة ومبانيه موجودة كمعالم سياحية تروي قصة تاريخية هامة.",
    vocabList: [
      { word: "سِكَّة", meaning: "レール/道" },
      { word: "رَبْط", meaning: "接続/結ぶこと" },
      { word: "عَهْد", meaning: "時代" },
      { word: "تَضَرَّرَ", meaning: "損傷した" }
    ],
    questions: [
      { id: 10291, type: "reading", text: "ヒジャーズ鉄道はどこを結んでいましたか？", options: ["リヤドとジェッダ", "ダマスカスとマディーナ", "カイロとメッカ", "イスタンブールとバグダッド"], correctIndex: 1, explanation: "「ربط دمشق بالمدينة المنورة」です。" },
      { id: 10292, type: "reading", text: "主な目的は何でしたか？", options: ["兵士の輸送", "ハッジの旅の容易化", "貿易", "観光"], correctIndex: 1, explanation: "「لتسهيل رحلة الحج (ハッジの旅を容易にするため)」です。" },
      { id: 10293, type: "reading", text: "なぜ鉄道は停止しましたか？", options: ["お金がなくなった", "第一次世界大戦中に損傷した", "古くなった", "誰も使わなかった"], correctIndex: 1, explanation: "「تضرر خلال الحرب العالمية الأولى」です。" },
      { id: 10294, type: "vocabulary", text: "「مَحَطَّة」の意味は？", options: ["電車", "駅/ステーション", "切符", "道"], correctIndex: 1, explanation: "Station（駅）です。" },
      { id: 10295, type: "grammar", text: "「短縮した」", options: ["اخْتَصَرَ", "طَوَّلَ", "ذَهَبَ", "أَكَلَ"], correctIndex: 0, explanation: "「Ikhtaṣara (Shortened)」です。" },
      // 上級文法問題
      { id: 10296, type: "grammar_advanced", text: "「تستغرق أشهرا」の「أشهرا」の正しい語尾は？", options: ["an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "in (タンウィーン・カスラ)", "u (ダンマ)"], correctIndex: 0, explanation: "動詞「Tastaghriqu (かかる/要する)」の目的語（期間）なので対格（Manṣūb）になり、タンウィーン・ファトハがつきます。" },
      { id: 10297, type: "grammar_advanced", text: "「موجودة كمعالم سياحية」の「معالم」の正しい語尾は？", options: ["a (ファトハ)", "i (カスラ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "前置詞「Ka (〜として/のように)」の後ですが、「Ma'ālim」は非限定名詞（Mafā'ilパターン）なので、カスラではなくファトハを取ります。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "خَطُّ حَدِيدِ الْحِجَازِ كَانَ مَشْرُوعًا ضَخْمًا لِرَبْطِ دِمَشْقَ بِالْمَدِينَةِ الْمُنَوَّرَةِ.", japanese: "ヒジャーズ鉄道は、ダマスカスとマディーナを結ぶ巨大プロジェクトでした。" },
      { speaker: "記事", arabic: "تَمَّ إِنْشَاؤُهُ فِي الْعَهْدِ الْعُثْمَانِيِّ لِتَسْهِيلِ رِحْلَةِ الْحَجِّ.", japanese: "それはハッジの旅を容易にするためにオスマン帝国時代に建設されました。" },
      { speaker: "記事", arabic: "قَبْلَ الْقِطَارِ، كَانَتِ الرِّحْلَةُ تَسْتَغْرِقُ أَشْهُرًا مَحْفُوفَةً بِالْمَخَاطِرِ، لَكِنَّ الْقِطَارَ اخْتَصَرَهَا إِلَى أَيَّامٍ قَلِيلَةٍ.", japanese: "列車の前は、旅は何ヶ月もかかり危険に満ちていましたが、列車はそれを数日に短縮しました。" },
      { speaker: "記事", arabic: "لَا تَزَالُ مَحَطَّاتُهُ الْقَدِيمَةُ مَوْجُودَةً كَمَعَالِمَ سِيَاحِيَّةٍ تَرْوِي قِصَّةً تَارِيخِيَّةً هَامَّةً.", japanese: "その古い駅は、重要な歴史的物語を語る観光名所として今も存在しています。" }
    ]
  },
  {
    id: 1030,
    title: "マングローブの森",
    category: "自然",
    level: "上級",
    contentVoweled: "أَشْجَارُ الشُّورَى (الْمَانْجِرُوف) هِيَ غَابَاتٌ بَحْرِيَّةٌ تَنْمُو عَلَى سَوَاحِلِ الْبَحْرِ الْأَحْمَرِ وَالْخَلِيجِ الْعَرَبِيِّ. تَلْعَبُ هَذِهِ الْأَشْجَارُ دَوْرًا حَيَوِيًّا فِي النِّظَامِ الْبِيئِيِّ، حَيْثُ تَعْمَلُ كَحَاضِنَةٍ لِلْأَسْمَاكِ وَالْكَائِنَاتِ الْبَحْرِيَّةِ، وَتَحْمِي الشَّوَاطِئَ مِنَ التَّآكُلِ، وَتَمْتَصُّ كِمِّيَّاتٍ هَائِلَةٍ مِنَ الْكَرْبُونِ. تَبْذُلُ الْمَمْلَكَةُ جُهُودًا كَبِيرَةً لِزِرَاعَةِ مَلَايِينَ مِنْ أَشْجَارِ الشُّورَى ضِمْنَ مُبَادَرَاتِهَا الْخَضْرَاءِ.",
    contentPlain: "أشجار الشورى (المانجروف) هي غابات بحرية تنمو على سواحل البحر الأحمر والخليج العربي. تلعب هذه الأشجار دورا حيويا في النظام البيئي، حيث تعمل كحاضنة للأسماك والكائنات البحرية، وتحمي الشواطئ من التآكل، وتمتص كميات هائلة من الكربون. تبذل المملكة جهودا كبيرة لزراعة ملايين من أشجار الشورى ضمن مبادراتها الخضراء.",
    vocabList: [
      { word: "شُورَى", meaning: "マングローブ（別名）" },
      { word: "غَابَة", meaning: "森" },
      { word: "تَآكُل", meaning: "侵食" },
      { word: "حَاضِنَة", meaning: "保育器/インキュベーター" }
    ],
    questions: [
      { id: 10301, type: "reading", text: "「シューラー」の木とは何ですか？", options: ["ナツメヤシ", "マングローブ", "オリーブ", "アカシア"], correctIndex: 1, explanation: "「أشجار الشورى (المانجروف)」です。" },
      { id: 10302, type: "reading", text: "どこに生えていますか？", options: ["山の上", "砂漠の真ん中", "海岸", "家の庭"], correctIndex: 2, explanation: "「على سواحل (海岸で)」です。" },
      { id: 10303, type: "reading", text: "環境にとっての役割は？", options: ["魚を殺す", "海岸を侵食から守り、炭素を吸収する", "空気を汚す", "水を減らす"], correctIndex: 1, explanation: "「تحمي الشواطئ... وتمتص الكربون」です。" },
      { id: 10304, type: "vocabulary", text: "「حَيَوِيّ」の意味は？", options: ["死んだ", "極めて重要な/バイタル", "小さい", "遠い"], correctIndex: 1, explanation: "Vital（生命維持に必要な/重要な）です。" },
      { id: 10305, type: "grammar", text: "「吸収します」", options: ["تَمْتَصُّ", "تُعْطِي", "تَرْمِي", "تَأْكُلُ"], correctIndex: 0, explanation: "「Tamtaṣṣu (Absorb)」です。" },
      // 上級文法問題
      { id: 10306, type: "grammar_advanced", text: "「لعب دورا」の「دورا」の正しい語尾は？", options: ["an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "in (タンウィーン・カスラ)", "a (ファトハ)"], correctIndex: 0, explanation: "「La'iba (遊んだ/演じた)」の目的語（役割を）なので対格となり、タンウィーン・ファトハがつきます。" },
      { id: 10307, type: "grammar_advanced", text: "「لأسماك والكائنات」の「الكائنات」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "前置詞「Li」の後の名詞「Asmāk」に接続（Ma'ṭūf）されているため、同じく属格（Majrūr）となりカスラがつきます。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "أَشْجَارُ الشُّورَى هِيَ غَابَاتٌ بَحْرِيَّةٌ تَنْمُو عَلَى سَوَاحِلِ الْبَحْرِ الْأَحْمَرِ.", japanese: "シューラー（マングローブ）の木は、紅海の海岸に育つ海の森です。" },
      { speaker: "記事", arabic: "تَلْعَبُ دَوْرًا حَيَوِيًّا فِي النِّظَامِ الْبِيئِيِّ، حَيْثُ تَعْمَلُ كَحَاضِنَةٍ لِلْأَسْمَاكِ.", japanese: "それは魚の保育器として機能し、生態系において重要な役割を果たします。" },
      { speaker: "記事", arabic: "تَحْمِي الشَّوَاطِئَ مِنَ التَّآكُلِ، وَتَمْتَصُّ كِمِّيَّاتٍ هَائِلَةٍ مِنَ الْكَرْبُونِ.", japanese: "それは海岸を侵食から守り、膨大な量の炭素を吸収します。" },
      { speaker: "記事", arabic: "تَبْذُلُ الْمَمْلَكَةُ جُهُودًا كَبِيرَةً لِزِرَاعَةِ مَلَايِينَ مِنْ هَذِهِ الْأَشْجَارِ.", japanese: "王国はこれらの木を何百万本も植えるために多大な努力を払っています。" }
    ]
  },
  {
    id: 1031,
    title: "スポーツと女性",
    category: "社会",
    level: "上級",
    contentVoweled: "شَهِدَتِ الرِّيَاضَةُ النِّسَائِيَّةُ فِي السُّعُودِيَّةِ نَقْلَةً نَوْعِيَّةً، حَيْثُ تَمَّ تَأْسِيسُ دَوْرِيِّ كُرَةِ قَدَمٍ لِلسَّيِّدَاتِ، وَشَارَكَتِ الرِّيَاضِيَّاتُ السُّعُودِيَّاتُ فِي الْأُولِمْبِيَادِ وَالْبُطُولَاتِ الدَّوْلِيَّةِ. لَمْ يَعُدِ الْأَمْرُ مُقْتَصِرًا عَلَى الْمُمَارَسَةِ وَالْهِوَايَةِ، بَلْ أَصْبَحَ احْتِرَافًا مَدْعُومًا مِنَ الدَّوْلَةِ. هَذَا التَّطَوُّرُ يَعْكِسُ التَّغَيُّرَاتِ الْإِيجَابِيَّةَ فِي الْمُجْتَمَعِ وَيُشَجِّعُ الْفَتَيَاتِ عَلَى اتِّبَاعِ نَمَطِ حَيَاةٍ صِحِّيٍّ وَنَشِيطٍ.",
    contentPlain: "شهدت الرياضة النسائية في السعودية نقلة نوعية، حيث تم تأسيس دوري كرة قدم للسيدات، وشاركت الرياضيات السعوديات في الأولمبياد والبطولات الدولية. لم يعد الأمر مقتصرا على الممارسة والهواية، بل أصبح احترافا مدعوما من الدولة. هذا التطور يعكس التغيرات الإيجابية في المجتمع ويشجع الفتيات على اتباع نمط حياة صحي ونشيط.",
    vocabList: [
      { word: "دَوْرِيّ", meaning: "リーグ" },
      { word: "أُولِمْبِيَاد", meaning: "オリンピック" },
      { word: "احْتِرَاف", meaning: "プロフェッショナル化" },
      { word: "نَمَط", meaning: "スタイル/パターン" }
    ],
    questions: [
      { id: 10311, type: "reading", text: "サウジの女子スポーツはどう変化しましたか？", options: ["後退した", "質的な飛躍（大きな進歩）を遂げた", "禁止された", "変わっていない"], correctIndex: 1, explanation: "「نقلة نوعية (質的な飛躍/パラダイムシフト)」です。" },
      { id: 10312, type: "reading", text: "設立されたものは？", options: ["男子リーグ", "女子サッカーリーグ", "料理学校", "なし"], correctIndex: 1, explanation: "「دوري كرة قدم للسيدات」です。" },
      { id: 10313, type: "reading", text: "現在の状況は？", options: ["趣味だけ", "国家支援のプロ化", "違法", "秘密"], correctIndex: 1, explanation: "「احترافا مدعوما من الدولة」です。" },
      { id: 10314, type: "vocabulary", text: "「مُقْتَصِر عَلَى」の意味は？", options: ["広い", "〜に限られている", "自由な", "新しい"], correctIndex: 1, explanation: "Limited to（〜に限定される）です。" },
      { id: 10315, type: "grammar", text: "「励まします」", options: ["يُشَجِّعُ", "يَمْنَعُ", "يَكْرَهُ", "يَضْرِبُ"], correctIndex: 0, explanation: "「Yushajji'u (Encourage)」です。" },
      // 上級文法問題
      { id: 10316, type: "grammar_advanced", text: "「لم يعد الأمر مقتصرا」の「مقتصرا」の正しい語尾は？", options: ["an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "in (タンウィーン・カスラ)", "u (ダンマ)"], correctIndex: 0, explanation: "「Ya'ud (〜のままである)」はカーナの姉妹語的に働き、その述語（Khabar）は対格（Manṣūb）になります。" },
      { id: 10317, type: "grammar_advanced", text: "「اتباع نمط حياة」の「نمط」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "「Ittibā' (従うこと)」という動名詞の後のイダーファ第2要素（属格）なのでカスラになります。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "شَهِدَتِ الرِّيَاضَةُ النِّسَائِيَّةُ فِي السُّعُودِيَّةِ نَقْلَةً نَوْعِيَّةً.", japanese: "サウジアラビアの女子スポーツは質的な飛躍を遂げました。" },
      { speaker: "記事", arabic: "شَارَكَتِ الرِّيَاضِيَّاتُ السُّعُودِيَّاتُ فِي الْأُولِمْبِيَادِ وَالْبُطُولَاتِ الدَّوْلِيَّةِ.", japanese: "サウジの女性アスリートはオリンピックや国際大会に参加しました。" },
      { speaker: "記事", arabic: "أَصْبَحَ الْأَمْرُ احْتِرَافًا مَدْعُومًا مِنَ الدَّوْلَةِ.", japanese: "それは国家に支援されたプロフェッショナルなものとなりました。" },
      { speaker: "記事", arabic: "يُشَجِّعُ هَذَا الْفَتَيَاتِ عَلَى اتِّبَاعِ نَمَطِ حَيَاةٍ صِحِّيٍّ.", japanese: "これは少女たちが健康的なライフスタイルに従うことを奨励します。" }
    ]
  },
  {
    id: 1032,
    title: "乳香の道（香の道）",
    category: "歴史",
    level: "上級",
    contentVoweled: "طَرِيقُ الْبَخُورِ كَانَ شَبَكَةً مِنَ الطُّرُقِ التِّجَارِيَّةِ الْقَدِيمَةِ الَّتِي رَبَطَتْ جَنُوبَ الْجَزِيرَةِ الْعَرَبِيَّةِ بِبِلَادِ الشَّامِ وَمِصْرَ وَأُورُوبَّا. كَانَتِ الْقَوَافِلُ تَنْقُلُ اللُّبَانَ وَالتَّوَابِلَ الثَّمِينَةَ عَبْرَ الصَّحْرَاءِ، مِمَّا أَدَّى إِلَى ازْدِهَارِ مُدُنٍ وَمَمَالِكَ قَدِيمَةٍ مِثْلَ الْأَنْبَاطِ وَكِنْدَةَ. كَانَتْ هَذِهِ الرِّحْلَاتُ شَاقَّةً وَتَسْتَغْرِقُ أَشْهُرًا، لَكِنَّهَا كَانَتْ شِرْيَانَ الْحَيَاةِ لِلِاقْتِصَادِ الْعَالَمِيِّ الْقَدِيمِ.",
    contentPlain: "طريق البخور كان شبكة من الطرق التجارية القديمة التي ربطت جنوب الجزيرة العربية ببلاد الشام ومصر وأوروبا. كانت القوافل تنقل اللبان والتوابل الثمينة عبر الصحراء، مما أدى إلى ازدهار مدن وممالك قديمة مثل الأنباط وكندة. كانت هذه الرحلات شاقة وتستغرق أشهرا، لكنها كانت شريان الحياة للاقتصاد العالمي القديم.",
    vocabList: [
      { word: "قَافِلَة", meaning: "キャラバン（複：カワーフィル）" },
      { word: "لُبَان", meaning: "乳香（フランキンセンス）" },
      { word: "شِرْيَان", meaning: "動脈/ライフライン" },
      { word: "شَاقّ", meaning: "過酷な/辛い" }
    ],
    questions: [
      { id: 10321, type: "reading", text: "「香の道」は何を結んでいましたか？", options: ["日本と中国", "アラビア南部とシャーム・エジプト・欧州", "アメリカと欧州", "海と空"], correctIndex: 1, explanation: "「ربطت جنوب الجزيرة... ببلاد الشام ومصر وأوروبا」です。" },
      { id: 10322, type: "reading", text: "キャラバンは何を運んでいましたか？", options: ["水", "乳香とスパイス", "石油", "車"], correctIndex: 1, explanation: "「اللبان والتوابل」です。" },
      { id: 10323, type: "reading", text: "この道のおかげで何が起きましたか？", options: ["戦争", "古代王国や都市の繁栄", "飢餓", "地震"], correctIndex: 1, explanation: "「ازدهار مدن وممالك قديمة」です。" },
      { id: 10324, type: "vocabulary", text: "「ثَمِين」の意味は？", options: ["安い", "高価な/貴重な", "重い", "軽い"], correctIndex: 1, explanation: "Precious（貴重な）です。" },
      { id: 10325, type: "grammar", text: "「つながりました/導きました」", options: ["أَدَّى إِلَى", "أَخَذَ مِنْ", "ذَهَبَ إِلَى", "رَجَعَ"], correctIndex: 0, explanation: "「Addā ilā (Led to)」です。" },
      // 上級文法問題
      { id: 10326, type: "grammar_advanced", text: "「ببلاد الشام ومصر」の「مصر」の正しい語尾は？", options: ["a (ファトハ)", "i (カスラ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "「Miṣr」は非限定名詞（Mumnū' min al-ṣarf）のため、前置詞（Bi...に接続）の後の属格でもカスラではなくファトハを取ります。" },
      { id: 10327, type: "grammar_advanced", text: "「كانت هذه الرحلات شاقة」の「شاقة」の正しい語尾は？", options: ["an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "in (タンウィーン・カスラ)", "a (ファトハ)"], correctIndex: 0, explanation: "「Kānat (だった)」の述語（Khabar Kāna）なので対格（Manṣūb）となり、タンウィーン・ファトハがつきます。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "طَرِيقُ الْبَخُورِ رَبَطَ جَنُوبَ الْجَزِيرَةِ الْعَرَبِيَّةِ بِبِلَادِ الشَّامِ وَمِصْرَ.", japanese: "香の道は、アラビア半島南部をシャーム地方やエジプトと結びました。" },
      { speaker: "記事", arabic: "كَانَتِ الْقَوَافِلُ تَنْقُلُ اللُّبَانَ وَالتَّوَابِلَ الثَّمِينَةَ عَبْرَ الصَّحْرَاءِ.", japanese: "キャラバンは乳香や貴重なスパイスを砂漠を通って運んでいました。" },
      { speaker: "記事", arabic: "أَدَّى هَذَا إِلَى ازْدِهَارِ مَمَالِكَ قَدِيمَةٍ مِثْلَ الْأَنْبَاطِ.", japanese: "これはナバテアのような古代王国の繁栄につながりました。" },
      { speaker: "記事", arabic: "كَانَتْ شِرْيَانَ الْحَيَاةِ لِلِاقْتِصَادِ الْعَالَمِيِّ الْقَدِيمِ.", japanese: "それは古代世界経済の動脈（ライフライン）でした。" }
    ]
  },
  {
    id: 1033,
    title: "アブドゥッラフマーン・アッ＝スーフィー",
    category: "歴史",
    level: "上級",
    contentVoweled: "عَبْدُ الرَّحْمَنِ الصُّوفِيُّ هُوَ فَلَكِيٌّ مُسْلِمٌ كَبِيرٌ عَاشَ فِي الْقَرْنِ الْعَاشِرِ الْمِيلَادِيِّ، وَيُعَدُّ كِتَابُهُ 'صُوَرُ الْكَوَاكِبِ الثَّابِتَةِ' مِنْ أَهَمِّ الْمُؤَلَّفَاتِ فِي تَارِيخِ عِلْمِ الْفَلَكِ. قَامَ الصُّوفِيُّ بِتَصْحِيحِ أَرْصَادِ بَطْلِيمُوس الْيُونَانِيِّ، وَوَصَفَ النُّجُومَ وَمَوَاقِعَهَا وَأَقْدَارَهَا بِدِقَّةٍ مُتَنَاهِيَةٍ. هُوَ أَوَّلُ مَنْ رَصَدَ مَجَرَّةَ 'أَنْدُرُومِيدَا' وَوَصَفَهَا بِأَنَّهَا 'لَطْخَةٌ سَحَابِيَّةٌ'، مِمَّا يُثْبِتُ دِقَّةَ مُلَاحَظَتِهِ بِالْعَيْنِ الْمُجَرَّدَةِ قَبْلَ اخْتِرَاعِ التِّلِسْكُوب بِقُرُونٍ.",
    contentPlain: "عبد الرحمن الصوفي هو فلكي مسلم كبير عاش في القرن العاشر الميلادي، ويعد كتابه 'صور الكواكب الثابتة' من أهم المؤلفات في تاريخ علم الفلك. قام الصوفي بتصحيح أرصاد بطليموس اليوناني، ووصف النجوم ومواقعها وأقدارها بدقة متناهية. هو أول من رصد مجرة 'أندروميدا' ووصفها بأنها 'لطخة سحابية'، مما يثبت دقة ملاحظته بالعين المجردة قبل اختراع التلسكوب بقرون.",
    vocabList: [
      { word: "فَلَكِيّ", meaning: "天文学者" },
      { word: "كَوْكَب", meaning: "星/惑星（複：カワーキブ）" },
      { word: "رَصَدَ", meaning: "観測した" },
      { word: "سَحَابِيَّة", meaning: "星雲の/雲のような" }
    ],
    questions: [
      { id: 10331, type: "reading", text: "アッ＝スーフィーの専門分野は？", options: ["医学", "天文学", "化学", "哲学"], correctIndex: 1, explanation: "「فلكي مسلم كبير (偉大なムスリム天文学者)」です。" },
      { id: 10332, type: "reading", text: "彼の最も重要な著書は？", options: ["医学の典範", "恒星の書（星座の書）", "黄金の牧草地", "旅行記"], correctIndex: 1, explanation: "「صور الكواكب الثابتة (恒星の図)」です。" },
      { id: 10333, type: "reading", text: "彼は誰のデータを修正しましたか？", options: ["コペルニクス", "プトレマイオス（バトレミウス）", "ガリレオ", "ニュートン"], correctIndex: 1, explanation: "「تصحيح أرصاد بطليموس」です。" },
      { id: 10334, type: "reading", text: "彼が最初に観測した銀河は？", options: ["天の川", "アンドロメダ", "ブラックホール", "火星"], correctIndex: 1, explanation: "「مجرة أندروميدا」を「雲のようなシミ」として記述しました。" },
      { id: 10335, type: "grammar", text: "「証明します」", options: ["يُثْبِتُ", "يَنْفِي", "يَأْكُلُ", "يَنَامُ"], correctIndex: 0, explanation: "「Yuthbitu (Proves)」です。" },
      // 上級文法問題
      { id: 10336, type: "grammar_advanced", text: "「تصحيح أرصاد بطليموس」の「بطليموس」の正しい語尾は？", options: ["a (ファトハ)", "i (カスラ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "「Baṭlaymūs」は外国語由来の固有名詞なので非限定名詞（Mumnū' min al-ṣarf）となり、属格（Majrūr）でもファトハを取ります。" },
      { id: 10337, type: "grammar_advanced", text: "「يعد كتابه من أهم」の「كتابه」の正しい語尾は？", options: ["u (ダンマ)", "a (ファトハ)", "i (カスラ)", "un (タンウィーン)"], correctIndex: 0, explanation: "受動態「Yu'addu (見なされる/数えられる)」の代理主語（Nā'ib Fā'il）なので主格（Marfū'）となりダンマがつきます。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "عَبْدُ الرَّحْمَنِ الصُّوفِيُّ هُوَ فَلَكِيٌّ مُسْلِمٌ كَبِيرٌ عَاشَ فِي الْقَرْنِ الْعَاشِرِ.", japanese: "アブドゥッラフマーン・アッ＝スーフィーは10世紀に生きた偉大なムスリム天文学者です。" },
      { speaker: "記事", arabic: "قَامَ بِتَصْحِيحِ أَرْصَادِ بَطْلِيمُوس الْيُونَانِيِّ.", japanese: "彼はギリシャのプトレマイオスの観測を修正しました。" },
      { speaker: "記事", arabic: "هُوَ أَوَّلُ مَنْ رَصَدَ مَجَرَّةَ 'أَنْدُرُومِيدَا' وَوَصَفَهَا بِأَنَّهَا 'لَطْخَةٌ سَحَابِيَّةٌ'.", japanese: "彼はアンドロメダ銀河を最初に観測し、それを「雲のようなシミ」と表現した人物です。" },
      { speaker: "記事", arabic: "يُثْبِتُ هَذَا دِقَّةَ مُلَاحَظَتِهِ قَبْلَ اخْتِرَاعِ التِّلِسْكُوب.", japanese: "これは望遠鏡の発明前の彼の観察の正確さを証明しています。" }
    ]
  },
  {
    id: 1034,
    title: "リヤド・シーズン",
    category: "社会",
    level: "上級",
    contentVoweled: "مَوْسِمُ الرِّيَاضِ هُوَ أَضْخَمُ مَهْرَجَانٍ تَرْفِيهِيٍّ فِي الشَّرْقِ الْأَوْسَطِ، يُقَامُ سَنَوِيًّا فِي الْعَاصِمَةِ السُّعُودِيَّةِ. يَهْدِفُ الْمَوْسِمُ إِلَى تَحْوِيلِ الرِّيَاضِ إِلَى وِجْهَةٍ سِيَاحِيَّةٍ وَتَرْفِيهِيَّةٍ عَالَمِيَّةٍ، حَيْثُ يَسْتَضِيفُ حَفَلَاتٍ مُوسِيقِيَّةٍ لِأَشْهَرِ الْفَنَّانِينَ الْعَالَمِيِّينَ، وَفَعَّالِيَّاتٍ رِيَاضِيَّةٍ كُبْرَى، وَمَعَارِضَ ثَقَافِيَّةٍ. يُسَاهِمُ هَذَا الْحَدَثُ فِي تَنْشِيطِ الِاقْتِصَادِ الْمَحَلِّيِّ وَخَلْقِ آلَافِ الْفُرَصِ الْوَظِيفِيَّةِ لِلشَّبَابِ السُّعُودِيِّ.",
    contentPlain: "موسم الرياض هو أضخم مهرجان ترفيهي في الشرق الأوسط، يقام سنويا في العاصمة السعودية. يهدف الموسم إلى تحويل الرياض إلى وجهة سياحية وترفيهية عالمية، حيث يستضيف حفلات موسيقية لأشهر الفنانين العالميين، وفعاليات رياضية كبرى، ومعارض ثقافية. يساهم هذا الحدث في تنشيط الاقتصاد المحلي وخلق آلاف الفرص الوظيفية للشباب السعودي.",
    vocabList: [
      { word: "تَرْفِيهِيّ", meaning: "娯楽の/エンタメの" },
      { word: "وِجْهَة", meaning: "目的地" },
      { word: "فَعَّالِيَّة", meaning: "イベント/活動" },
      { word: "تَنْشِيط", meaning: "活性化" }
    ],
    questions: [
      { id: 10341, type: "reading", text: "リヤド・シーズンの規模は？", options: ["小さい", "中東最大", "国内のみ", "中止された"], correctIndex: 1, explanation: "「أضخم مهرجان... في الشرق الأوسط」です。" },
      { id: 10342, type: "reading", text: "目的は何ですか？", options: ["リヤドを世界的観光地にすること", "交通渋滞を作る", "工場を建てる", "農業"], correctIndex: 0, explanation: "「تحويل الرياض إلى وجهة سياحية... عالمية」です。" },
      { id: 10343, type: "reading", text: "経済への影響は？", options: ["悪化させる", "関係ない", "地域経済の活性化と雇用創出", "輸出を減らす"], correctIndex: 2, explanation: "「تنشيط الاقتصاد... وخلق آلاف الفرص」です。" },
      { id: 10344, type: "vocabulary", text: "「فَنَّان」の意味は？", options: ["選手", "アーティスト/芸術家", "医者", "教師"], correctIndex: 1, explanation: "Artistです。" },
      { id: 10345, type: "grammar", text: "「開催されます（受動態）」", options: ["يُقَامُ", "يَذْهَبُ", "يُسَافِرُ", "يَنْتَهِي"], correctIndex: 0, explanation: "「Yuqāmu」は「Is held」という意味です。" },
      // 上級文法問題
      { id: 10346, type: "grammar_advanced", text: "「موسم الرياض هو أضخم」の「أضخم」の正しい語尾は？", options: ["u (ダンマ)", "a (ファトハ)", "i (カスラ)", "un (タンウィーン)"], correctIndex: 0, explanation: "「Huwa」の後の述語（Khabar）なので主格（Marfū'）となりダンマがつきます。イダーファの第1要素なのでタンウィーンはつきません。" },
      { id: 10347, type: "grammar_advanced", text: "「يستضيف حفلات」の「حفلات」の正しい語尾は？", options: ["in (タンウィーン・カスラ)", "an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "i (カスラ)"], correctIndex: 0, explanation: "動詞「Yastaḍīfu (主催する/迎える)」の目的語ですが、女性規則複数（Jam' Mu'annath Sālim）なので、対格の場合ファトハではなくカスラを取ります。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "مَوْسِمُ الرِّيَاضِ هُوَ أَضْخَمُ مَهْرَجَانٍ تَرْفِيهِيٍّ فِي الشَّرْقِ الْأَوْسَطِ.", japanese: "リヤド・シーズンは中東最大のエンターテインメントフェスティバルです。" },
      { speaker: "記事", arabic: "يَهْدِفُ إِلَى تَحْوِيلِ الرِّيَاضِ إِلَى وِجْهَةٍ سِيَاحِيَّةٍ عَالَمِيَّةٍ.", japanese: "それはリヤドを世界的な観光地に変えることを目指しています。" },
      { speaker: "記事", arabic: "يَسْتَضِيفُ حَفَلَاتٍ مُوسِيقِيَّةٍ وَفَعَّالِيَّاتٍ رِيَاضِيَّةٍ كُبْرَى.", japanese: "それは音楽コンサートや主要なスポーツイベントを主催します。" },
      { speaker: "記事", arabic: "يُسَاهِمُ فِي تَنْشِيطِ الِاقْتِصَادِ الْمَحَلِّيِّ وَخَلْقِ الْفُرَصِ الْوَظِيفِيَّةِ.", japanese: "それは地域経済の活性化と雇用の機会の創出に貢献します。" }
    ]
  },
  // --- 27. 文化・伝統 (Culture) ---
  {
    id: 1035,
    title: "マジュリス（集会場）",
    category: "文化",
    level: "上級",
    contentVoweled: "الْمَجْلِسُ الْعَرَبِيُّ هُوَ أَكْثَرُ مِنْ مُجَرَّدِ غُرْفَةٍ لِلْجُلُوسِ، بَلْ هُوَ مُؤَسَّسَةٌ اجْتِمَاعِيَّةٌ وَثَقَافِيَّةٌ عَرِيقَةٌ. فِي الْمَجْلِسِ، يَجْتَمِعُ أَفْرَادُ الْمُجْتَمَعِ لِمُنَاقَشَةِ الْقَضَايَا الْعَامَّةِ، وَحَلِّ النِّزَاعَاتِ، وَتَبَادُلِ الْأَخْبَارِ وَالْقِصَصِ. يَلْعَبُ الْمَجْلِسُ دَوْرًا حَيَوِيًّا فِي نَقْلِ الْعَادَاتِ وَالتَّقَالِيدِ مِنَ الْجِيلِ الْقَدِيمِ إِلَى الشَّبَابِ، وَقَدْ أَدْرَجَتْهُ الْيُونِسْكُو ضِمْنَ قَائِمَةِ التُّرَاثِ الثَّقَافِيِّ غَيْرِ الْمَادِّيِّ لِلْإِنْسَانِيَّةِ.",
    contentPlain: "المجلس العربي هو أكثر من مجرد غرفة للجلوس، بل هو مؤسسة اجتماعية وثقافية عريقة. في المجلس، يجتمع أفراد المجتمع لمناقشة القضايا العامة، وحل النزاعات، وتبادل الأخبار والقصص. يلعب المجلس دورا حيويا في نقل العادات والتقاليد من الجيل القديم إلى الشباب، وقد أدرجته اليونسكو ضمن قائمة التراث الثقافي غير المادي للإنسانية.",
    vocabList: [
      { word: "مَجْلِس", meaning: "マジュリス/集会場" },
      { word: "نِزَاع", meaning: "紛争/争い" },
      { word: "جِيل", meaning: "世代" },
      { word: "تَبَادُل", meaning: "交換" }
    ],
    questions: [
      { id: 10351, type: "reading", text: "マジュリスとは単なる部屋ではなく何ですか？", options: ["寝室", "社会的・文化的な制度（機関）", "台所", "倉庫"], correctIndex: 1, explanation: "「مؤسسة اجتماعية وثقافية」です。" },
      { id: 10352, type: "reading", text: "そこで何が行われますか？", options: ["睡眠", "議論、紛争解決、ニュース交換", "スポーツ", "料理"], correctIndex: 1, explanation: "「مناقشة القضايا... وحل النزاعات...」です。" },
      { id: 10353, type: "reading", text: "どのような役割を果たしていますか？", options: ["伝統の伝承", "お金を隠す", "若者を追い出す", "静かにする"], correctIndex: 0, explanation: "「نقل العادات والتقاليد (習慣と伝統の伝達)」です。" },
      { id: 10354, type: "vocabulary", text: "「عَرِيق」の意味は？", options: ["新しい", "由緒ある/古来の", "悪い", "狭い"], correctIndex: 1, explanation: "Ancient/Deep-rooted（由緒ある）です。" },
      { id: 10355, type: "grammar", text: "「議論するために」", options: ["لِمُنَاقَشَةِ", "لِأَكْلِ", "لِلنَّوْمِ", "لِلذَّهَابِ"], correctIndex: 0, explanation: "「Li-munāqashati」です。" },
      // 上級文法問題
      { id: 10356, type: "grammar_advanced", text: "「أكثر من」の「أكثر」の正しい語尾は？", options: ["u (ダンマ)", "a (ファトハ)", "i (カスラ)", "un (タンウィーン)"], correctIndex: 0, explanation: "「Huwa (彼は/それは)」の述語（Khabar）なので主格（Marfū'）となりダンマがつきます。「Akthar」は比較級（Af'alパターン）のため、非限定名詞でありタンウィーンはつきません（ただし主格ではダンマ1つ）。" },
      { id: 10357, type: "grammar_advanced", text: "「مناقشة القضايا العامة」の「القضايا」の正しい語尾は？", options: ["i (カスラ・推定)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "イダーファの第2要素（属格）ですが、「Qaḍāyā」はアリフで終わる名詞（Manqūṣ/Maqṣūr的性質）なので、母音記号は現れず、推定されたカスラ（Kasra Muqaddara）となります。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "الْمَجْلِسُ الْعَرَبِيُّ مُؤَسَّسَةٌ اجْتِمَاعِيَّةٌ وَثَقَافِيَّةٌ عَرِيقَةٌ.", japanese: "アラブ・マジュリスは由緒ある社会的・文化的機関です。" },
      { speaker: "記事", arabic: "يَجْتَمِعُ أَفْرَادُ الْمُجْتَمَعِ لِحَلِّ النِّزَاعَاتِ وَتَبَادُلِ الْأَخْبَارِ.", japanese: "コミュニティのメンバーは紛争を解決し、ニュースを交換するために集まります。" },
      { speaker: "記事", arabic: "يَلْعَبُ دَوْرًا حَيَوِيًّا فِي نَقْلِ الْعَادَاتِ مِنَ الْجِيلِ الْقَدِيمِ إِلَى الشَّبَابِ.", japanese: "それは習慣を古い世代から若者へ伝える上で重要な役割を果たします。" },
      { speaker: "記事", arabic: "أَدْرَجَتْهُ الْيُونِسْكُو ضِمْنَ قَائِمَةِ التُّرَاثِ الثَّقَافِيِّ.", japanese: "ユネスコはそれを文化遺産リストに登録しました。" }
    ]
  },
  {
    id: 1036,
    title: "千夜一夜物語（アラビアンナイト）",
    category: "文学",
    level: "上級",
    contentVoweled: "أَلْفُ لَيْلَةٍ وَلَيْلَةٍ هِيَ مَجْمُوعَةُ قِصَصٍ شَعْبِيَّةٍ سَاحِرَةٍ تَعُودُ لِلْعُصُورِ الْوُسْطَى. تَدُورُ الْقِصَّةُ الْإِطَارِيَّةُ حَوْلَ الْمَلِكِ شَهْرَيَار الَّذِي يُقَرِّرُ قَتْلَ زَوْجَاتِهِ، فَتَنْجُو شَهْرَزَاد بِذَكَائِهَا عَبْرَ سَرْدِ قِصَصٍ مُشَوِّقَةٍ كُلَّ لَيْلَةٍ وَتَتَوَقَّفُ عِنْدَ لَحْظَةٍ حَاسِمَةٍ، مِمَّا يُجْبِرُ الْمَلِكَ عَلَى تَأْجِيلِ قَتْلِهَا لِسَمَاعِ الْبَقِيَّةِ. أَثَّرَتْ هَذِهِ الْحِكَايَاتُ، مِثْلَ عَلَاء الدِّينِ وَالسِّنْدِبَاد، بِشَكْلٍ عَمِيقٍ عَلَى الْأَدَبِ الْعَالَمِيِّ.",
    contentPlain: "ألف ليلة وليلة هي مجموعة قصص شعبية ساحرة تعود للعصور الوسطى. تدور القصة الإطارية حول الملك شهريار الذي يقرر قتل زوجاته، فتنجو شهرزاد بذكائها عبر سرد قصص مشوقة كل ليلة وتتوقف عند لحظة حاسمة، مما يجبر الملك على تأجيل قتلها لسماع البقية. أثرت هذه الحكايات، مثل علاء الدين والسندباد، بشكل عميق على الأدب العالمي.",
    vocabList: [
      { word: "قِصَّة", meaning: "物語" },
      { word: "سَاحِر", meaning: "魅惑的な/魔法使い" },
      { word: "سَرْد", meaning: "語り/ナレーション" },
      { word: "مُشَوِّق", meaning: "面白い/スリリングな" }
    ],
    questions: [
      { id: 10361, type: "reading", text: "『千夜一夜物語』とは何ですか？", options: ["科学書", "中世の民話集", "歴史の教科書", "詩集"], correctIndex: 1, explanation: "「مجموعة قصص شعبية (民話のコレクション)」です。" },
      { id: 10362, type: "reading", text: "シェヘラザードはどうやって生き延びましたか？", options: ["戦って", "逃げて", "毎晩面白い話をして", "お金を払って"], correctIndex: 2, explanation: "「سرد قصص مشوقة كل ليلة (毎晩面白い話を語ること)」によってです。" },
      { id: 10363, type: "reading", text: "彼女は話をどのタイミングで止めましたか？", options: ["最初", "真ん中", "決定的な瞬間（クリフハンガー）", "終わってから"], correctIndex: 2, explanation: "「عند لحظة حاسمة (決定的な瞬間に)」です。" },
      { id: 10364, type: "vocabulary", text: "「زَوْجَة」の意味は？", options: ["夫", "妻", "娘", "母"], correctIndex: 1, explanation: "Wife（妻）です。" },
      { id: 10365, type: "grammar", text: "「強制します/させます」", options: ["يُجْبِرُ", "يُعْطِي", "يَسْمَحُ", "يُحِبُّ"], correctIndex: 0, explanation: "「Yujbiru (Compel/Force)」です。" },
      // 上級文法問題
      { id: 10366, type: "grammar_advanced", text: "「ألف ليلة」の「ليلة」の正しい語尾は？", options: ["in (タンウィーン・カスラ)", "an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "i (カスラ)"], correctIndex: 0, explanation: "数詞「Alf (1000)」の後の名詞（Tamyīz/Muḍāf Ilayhi）は単数・属格（Majrūr）になります。" },
      { id: 10367, type: "grammar_advanced", text: "「قتل زوجاته」の「زوجاته」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "動詞「Qatla (殺害)」の目的語ですが、「Zawjāt (妻たち)」は女性規則複数なので、対格でもカスラ（i）を取ります（代名詞「hi」が付くのでタンウィーンはなし）。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "أَلْفُ لَيْلَةٍ وَلَيْلَةٍ هِيَ مَجْمُوعَةُ قِصَصٍ شَعْبِيَّةٍ سَاحِرَةٍ.", japanese: "千夜一夜物語は、中世に遡る魅惑的な民話集です。" },
      { speaker: "記事", arabic: "تَنْجُو شَهْرَزَاد بِذَكَائِهَا عَبْرَ سَرْدِ قِصَصٍ مُشَوِّقَةٍ كُلَّ لَيْلَةٍ.", japanese: "シェヘラザードは毎晩スリリングな物語を語ることで、その知恵によって生き延びます。" },
      { speaker: "記事", arabic: "تَتَوَقَّفُ عِنْدَ لَحْظَةٍ حَاسِمَةٍ لِإِجْبَارِ الْمَلِكِ عَلَى تَأْجِيلِ قَتْلِهَا.", japanese: "彼女は王に殺害を延期させるよう強制するために、決定的な瞬間に話を止めます。" },
      { speaker: "記事", arabic: "أَثَّرَتْ هَذِهِ الْحِكَايَاتُ بِشَكْلٍ عَمِيقٍ عَلَى الْأَدَبِ الْعَالَمِيِّ.", japanese: "これらの物語は世界文学に深い影響を与えました。" }
    ]
  },
  {
    id: 1037,
    title: "アスィール地方",
    category: "自然",
    level: "上級",
    contentVoweled: "تَتَمَيَّزُ مِنْطَقَةُ عَسِيرَ بِطَبِيعَةٍ جُغْرَافِيَّةٍ وَمُنَاخِيَّةٍ فَرِيدَةٍ تَخْتَلِفُ عَنْ بَاقِي مَنَاطِقِ الْمَمْلَكَةِ. فَهِيَ مِنْطَقَةٌ جَبَلِيَّةٌ شَاهِقَةٌ تَكْسُوهَا غَابَاتُ الْعَرْعَرِ وَتَهْطِلُ عَلَيْهَا الْأَمْطَارُ بِغَزَارَةٍ، مِمَّا يَجْعَلُهَا خَضْرَاءَ طِوَالَ الْعَامِ. يَشْتَهِرُ أَهْلُ الْمِنْطَقَةِ بِبِنَاءِ الْمُدَرَّجَاتِ الزِّرَاعِيَّةِ عَلَى سُفُوحِ الْجِبَالِ لِاسْتِغْلَالِ مِيَاهِ الْأَمْطَارِ فِي زِرَاعَةِ الْقَمْحِ وَالْبُنِّ، وَتُعَدُّ أَبْهَا عَاصِمَةَ السِّيَاحَةِ الصَّيْفِيَّةِ.",
    contentPlain: "تتميز منطقة عسير بطبيعة جغرافية ومناخية فريدة تختلف عن باقي مناطق المملكة. فهي منطقة جبلية شاهقة تكسوها غابات العرعر وتهطل عليها الأمطار بغزارة، مما يجعلها خضراء طوال العام. يشتهر أهل المنطقة ببناء المدرجات الزراعية على سفوح الجبال لاستغلال مياه الأمطار في زراعة القمح والبن، وتعد أبها عاصمة السياحة الصيفية.",
    vocabList: [
      { word: "مُنَاخ", meaning: "気候" },
      { word: "شَاهِق", meaning: "そびえ立つ/高い" },
      { word: "غَزَارَة", meaning: "豊富さ/激しさ（雨）" },
      { word: "مُدَرَّجَات", meaning: "段々畑/テラス" }
    ],
    questions: [
      { id: 10371, type: "reading", text: "アスィール地方の特徴は？", options: ["砂漠ばかり", "他とは違う独特の自然と気候", "海がない", "雪が降らない"], correctIndex: 1, explanation: "「طبيعة... فريدة تختلف عن باقي مناطق المملكة」です。" },
      { id: 10372, type: "reading", text: "地形はどうなっていますか？", options: ["平ら", "高くそびえる山岳地帯", "谷底", "島"], correctIndex: 1, explanation: "「منطقة جبلية شاهقة (高くそびえる山岳地帯)」です。" },
      { id: 10373, type: "reading", text: "農業のための工夫は？", options: ["温室", "山の斜面の段々畑（テラス）", "輸入", "地下農場"], correctIndex: 1, explanation: "「المدرجات الزراعية على سفوح الجبال」です。" },
      { id: 10374, type: "vocabulary", text: "「قَمْح」の意味は？", options: ["米", "小麦", "トウモロコシ", "大麦"], correctIndex: 1, explanation: "Wheat（小麦）です。" },
      { id: 10375, type: "grammar", text: "「覆います」", options: ["تَكْسُو", "تَكْشِفُ", "تَقْطَعُ", "تَحْرِقُ"], correctIndex: 0, explanation: "「Taksū (Cover/Clothe)」です。" },
      // 上級文法問題
      { id: 10376, type: "grammar_advanced", text: "「منطقة عسير」の「عسير」の正しい語尾は？", options: ["a (ファトハ)", "i (カスラ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "地名であり、イダーファの第2要素（属格）ですが、非限定名詞（Mumnū' min al-ṣarf）として扱われることが多く、ファトハを取ります。" },
      { id: 10377, type: "grammar_advanced", text: "「مما يجعلها خضراء」の「خضراء」の正しい語尾は？", options: ["a (ファトハ・タンウィーンなし)", "an (タンウィーン・ファトハ)", "u (ダンマ)", "i (カスラ)"], correctIndex: 0, explanation: "動詞「Yaj'alu」の第2目的語（対格）ですが、「Fa'lā'」パターンの色を表す形容詞（女性形）は非限定名詞なので、タンウィーンを取らずファトハ一文字になります。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "تَتَمَيَّزُ مِنْطَقَةُ عَسِيرَ بِطَبِيعَةٍ جُغْرَافِيَّةٍ وَمُنَاخِيَّةٍ فَرِيدَةٍ.", japanese: "アスィール地方は独特の地理的・気候的性質によって特徴づけられます。" },
      { speaker: "記事", arabic: "هِيَ مِنْطَقَةٌ جَبَلِيَّةٌ شَاهِقَةٌ تَكْسُوهَا غَابَاتُ الْعَرْعَرِ.", japanese: "そこはビャクシンの森に覆われた高くそびえる山岳地帯です。" },
      { speaker: "記事", arabic: "يَشْتَهِرُ أَهْلُ الْمِنْطَقَةِ بِبِنَاءِ الْمُدَرَّجَاتِ الزِّرَاعِيَّةِ عَلَى سُفُوحِ الْجِبَالِ.", japanese: "この地域の人々は、山の斜面に農業用テラス（段々畑）を作ることで有名です。" },
      { speaker: "記事", arabic: "تُعَدُّ أَبْهَا عَاصِمَةَ السِّيَاحَةِ الصَّيْفِيَّةِ.", japanese: "アブハは夏の観光の首都（中心地）とみなされています。" }
    ]
  },
  {
    id: 1038,
    title: "サウジ証券取引所 (Tadawul)",
    category: "経済",
    level: "上級",
    contentVoweled: "السُّوقُ الْمَالِيَّةُ السُّعُودِيَّةُ 'تَدَاوُل' هِيَ أَكْبَرُ سُوقٍ مَالِيَّةٍ فِي الشَّرْقِ الْأَوْسَطِ وَشَمَالِ أَفْرِيقِيَا. شَهِدَتِ السُّوقُ تَطَوُّرًا هَائِلًا، خَاصَّةً بَعْدَ طَرْحِ جُزْءٍ مِنْ أَسْهُمِ شَرِكَةِ 'أَرَامْكُو' لِلِاكْتِتَابِ الْعَامِّ، مِمَّا جَذَبَ رُؤُوسَ أَمْوَالٍ أَجْنَبِيَّةٍ ضَخْمَةٍ. تُعْتَبَرُ السُّوقُ مُؤَشِّرًا رَئِيسِيًّا لِقُوَّةِ الِاقْتِصَادِ السُّعُودِيِّ، وَتُتِيحُ لِلْمُسْتَثْمِرِينَ الْمَحَلِّيِّينَ وَالدَّوْلِيِّينَ فُرَصًا مُتَنَوِّعَةً فِي قِطَاعَاتِ الْبُنُوكِ وَالطَّاقَةِ وَالِاتِّصَالَاتِ.",
    contentPlain: "السوق المالية السعودية 'تداول' هي أكبر سوق مالية في الشرق الأوسط وشمال أفريقيا. شهدت السوق تطورا هائلا، خاصة بعد طرح جزء من أسهم شركة 'أرامكو' للاكتتاب العام، مما جذب رؤوس أموال أجنبية ضخمة. تعتبر السوق مؤشرا رئيسيا لقوة الاقتصاد السعودي، وتتيح للمستثمرين المحليين والدوليين فرصا متنوعة في قطاعات البنوك والطاقة والاتصالات.",
    vocabList: [
      { word: "سُوق", meaning: "市場" },
      { word: "سَهْم", meaning: "株/矢（複：アスフム）" },
      { word: "اكْتِتَاب", meaning: "IPO/株式公開" },
      { word: "مُؤَشِّر", meaning: "指標/インデックス" }
    ],
    questions: [
      { id: 10381, type: "reading", text: "「タダウル」の規模は？", options: ["世界最小", "MENA（中東・北アフリカ）最大", "アジア最大", "小さい"], correctIndex: 1, explanation: "「أكبر سوق مالية في الشرق الأوسط وشمال أفريقيا」です。" },
      { id: 10382, type: "reading", text: "大きな転換点となった出来事は？", options: ["市場の閉鎖", "アラムコ株の公開（IPO）", "銀行の倒産", "税金の廃止"], correctIndex: 1, explanation: "「طرح جزء من أسهم شركة أرامكو」です。" },
      { id: 10383, type: "reading", text: "市場は何の指標とされていますか？", options: ["天気の良さ", "サウジ経済の強さ", "人口の多さ", "石油の価格だけ"], correctIndex: 1, explanation: "「مؤشرا رئيسيا لقوة الاقتصاد السعودي」です。" },
      { id: 10384, type: "vocabulary", text: "「مُسْتَثْمِر」の意味は？", options: ["消費者", "投資家", "労働者", "学生"], correctIndex: 1, explanation: "Investor（投資家）です。" },
      { id: 10385, type: "grammar", text: "「可能にします/提供します」", options: ["تُتِيحُ", "تَمْنَعُ", "تَأْخُذُ", "تَطْلُبُ"], correctIndex: 0, explanation: "「Tutīḥu (Allows/Provides opportunity)」です。" },
      // 上級文法問題
      { id: 10386, type: "grammar_advanced", text: "「شهدت السوق」の「السوق」の正しい語尾は？", options: ["u (ダンマ)", "a (ファトハ)", "i (カスラ)", "un (タンウィーン)"], correctIndex: 0, explanation: "動詞「Shahidat（経験した）」の主語（Fā'il）なので、主格（Marfū'）となりダンマがつきます。" },
      { id: 10387, type: "grammar_advanced", text: "「تتيح للمستثمرين」の「المستثمرين」の正しい語尾は？", options: ["īna (属格・男性規則複数)", "ūna (主格・男性規則複数)", "ayni (属格・双数)", "in (タンウィーン)"], correctIndex: 0, explanation: "前置詞「Li」の後の名詞（Ism Majrūr）であり、男性規則複数なので、「īna」で終わります。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "السُّوقُ الْمَالِيَّةُ السُّعُودِيَّةُ هِيَ أَكْبَرُ سُوقٍ مَالِيَّةٍ فِي الشَّرْقِ الْأَوْسَطِ.", japanese: "サウジ証券取引所は中東最大の金融市場です。" },
      { speaker: "記事", arabic: "شَهِدَتِ السُّوقُ تَطَوُّرًا هَائِلًا، خَاصَّةً بَعْدَ طَرْحِ أَسْهُمِ 'أَرَامْكُو'.", japanese: "市場は、特に「アラムコ」株の公開後、目覚ましい発展を遂げました。" },
      { speaker: "記事", arabic: "تُعْتَبَرُ السُّوقُ مُؤَشِّرًا رَئِيسِيًّا لِقُوَّةِ الِاقْتِصَادِ السُّعُودِيِّ.", japanese: "市場はサウジ経済の強さの主要な指標と考えられています。" },
      { speaker: "記事", arabic: "تُتِيحُ لِلْمُسْتَثْمِرِينَ فُرَصًا مُتَنَوِّعَةً فِي قِطَاعَاتِ الْبُنُوكِ وَالطَّاقَةِ.", japanese: "それは投資家に銀行やエネルギー部門での多様な機会を提供します。" }
    ]
  },
  {
    id: 1039,
    title: "サウジのアルダ（剣の舞）",
    category: "文化",
    level: "上級",
    contentVoweled: "الْعَرْضَةُ السُّعُودِيَّةُ هِيَ رَقْصَةٌ حَرْبِيَّةٌ تَقْلِيدِيَّةٌ تَحَوَّلَتْ إِلَى رَمْزٍ وَطَنِيٍّ لِلِاحْتِفَالِ وَالْوَحْدَةِ. يُؤَدِّيهَا الرِّجَالُ وَهُمْ يَرْتَدُونَ الزِّيَّ التَّقْلِيدِيَّ وَيَحْمِلُونَ السُّيُوفَ، وَيَقِفُونَ فِي صُفُوفٍ مُتَقَابِلَةٍ يُرَدِّدُونَ أَبْيَاتَ الشِّعْرِ الْحَمَاسِيَّةِ عَلَى إِيقَاعِ الطُّبُولِ. كَانَتِ الْعَرْضَةُ تُؤَدَّى قَدِيمًا قَبْلَ الْمَعَارِكِ لِإِثَارَةِ الْحَمَاسِ، أَمَّا الْيَوْمَ فَهِيَ تُقَامُ فِي الْمُنَاسَبَاتِ الْوَطَنِيَّةِ وَاسْتِقْبَالِ الْمُلُوكِ وَالضُّيُوفِ الْكِبَارِ.",
    contentPlain: "العرضة السعودية هي رقصة حربية تقليدية تحولت إلى رمز وطني للاحتفال والوحدة. يؤديها الرجال وهم يرتدون الزي التقليدي ويحملون السيوف، ويقفون في صفوف متقابلة يرددون أبيات الشعر الحماسية على إيقاع الطبول. كانت العرضة تؤدى قديما قبل المعارك لإثارة الحماس، أما اليوم فهي تقام في المناسبات والوطنية واستقبال الملوك والضيوف الكبار.",
    vocabList: [
      { word: "حَرْبِيّ", meaning: "戦争の/軍事の" },
      { word: "سَيْف", meaning: "剣（複：スユーフ）" },
      { word: "إِيقَاع", meaning: "リズム" },
      { word: "طَبْل", meaning: "太鼓（複：トゥブール）" }
    ],
    questions: [
      { id: 10391, type: "reading", text: "アルダは元々どのような踊りでしたか？", options: ["結婚式の踊り", "戦争の踊り", "雨乞いの踊り", "収穫の踊り"], correctIndex: 1, explanation: "本文の「رقصة حربية تقليدية (伝統的な戦争の踊り)」および「قبل المعارك (戦いの前に)」から判断できます。" },
      { id: 10392, type: "reading", text: "踊り手は何を持っていますか？", options: ["花", "剣", "銃", "旗"], correctIndex: 1, explanation: "「يحملون السيوف (剣を持っている)」です。" },
      { id: 10393, type: "reading", text: "現在はいつ行われますか？", options: ["戦争中", "国家的行事や賓客の歓迎", "寝る前", "悲しい時"], correctIndex: 1, explanation: "「في المناسبات الوطنية واستقبال الملوك」です。" },
      { id: 10394, type: "vocabulary", text: "「صَفّ」の意味は？", options: ["円", "列/ライン", "点", "箱"], correctIndex: 1, explanation: "Row/Line（列）です。" },
      { id: 10395, type: "grammar", text: "「繰り返します（唱和します）」", options: ["يُرَدِّدُونَ", "يَسْكُتُونَ", "يَأْكُلُونَ", "يَجْرُونَ"], correctIndex: 0, explanation: "「Yuraddidūna (Repeat/Chant)」です。" },
      // 上級文法問題
      { id: 10396, type: "grammar_advanced", text: "「وهم يرتدون」の「يرتدون」の正しい語尾（読み）は？", options: ["Yartadūna (ウーナ)", "Yartadīna (イーナ)", "Yartadān (アーン)", "Yartadi (イ)"], correctIndex: 0, explanation: "主語が「Hum (彼ら)」なので、現在形の男性複数形「ūna」で終わります。" },
      { id: 10397, type: "grammar_advanced", text: "「أبيات الشعر」の「أبيات」の正しい語尾は？", options: ["a (ファトハ)", "i (カスラ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "動詞「Yuraddidūna（唱和する）」の目的語なので対格（Manṣūb）になります。「Abyāt（詩句）」は不規則複数（Jam' Taksīr）なので、通常通りファトハを取ります（女性規則複数と間違えやすいですが違います）。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "الْعَرْضَةُ السُّعُودِيَّةُ هِيَ رَقْصَةٌ حَرْبِيَّةٌ تَقْلِيدِيَّةٌ تَحَوَّلَتْ إِلَى رَمْزٍ وَطَنِيٍّ.", japanese: "サウジのアルダは、国家的象徴へと変化した伝統的な戦争の踊りです。" },
      { speaker: "記事", arabic: "يُؤَدِّيهَا الرِّجَالُ وَهُمْ يَحْمِلُونَ السُّيُوفَ فِي صُفُوفٍ مُتَقَابِلَةٍ.", japanese: "男性たちが剣を持ち、向かい合った列でそれを演じます。" },
      { speaker: "記事", arabic: "كَانَتِ الْعَرْضَةُ تُؤَدَّى قَدِيمًا قَبْلَ الْمَعَارِكِ لِإِثَارَةِ الْحَمَاسِ.", japanese: "アルダは昔、熱狂を呼び起こすために戦いの前に演じられていました。" },
      { speaker: "記事", arabic: "الْيَوْمَ، تُقَامُ فِي الْمُنَاسَبَاتِ الْوَطَنِيَّةِ وَاسْتِقْبَالِ الْمُلُوكِ.", japanese: "今日では、国家的行事や王を迎える際に催されます。" }
    ]
  },
  {
    id: 1040,
    title: "アル・アハサー・オアシス",
    category: "自然",
    level: "上級",
    contentVoweled: "وَاحَةُ الْأَحْسَاءِ هِيَ أَكْبَرُ وَاحَةِ نَخِيلٍ فِي الْعَالَمِ، وَتَقَعُ فِي شَرْقِ الْمَمْلَكَةِ الْعَرَبِيَّةِ السُّعُودِيَّةِ. تَضُمُّ الْوَاحَةُ أَكْثَرَ مِنْ 2.5 مَلْيُونَ نَخْلَةٍ تُنْتِجُ أَجْوَدَ أَنْوَاعِ التُّمُورِ مِثْلَ 'الْخَلَاص'. بِفَضْلِ نِظَامِ الرِّيِّ التَّقْلِيدِيِّ الْمُعَقَّدِ وَالْعُيُونِ الطَّبِيعِيَّةِ، تَمَّ تَسْجِيلُ الْأَحْسَاءِ فِي قَائِمَةِ التُّرَاثِ الْعَالَمِيِّ لِلْيُونِسْكُو. تُعْتَبَرُ الْمِنْطَقَةُ مِثَالًا حَيًّا عَلَى تَفَاعُلِ الْإِنْسَانِ مَعَ الْبِيئَةِ مُنْذُ آلَافِ السِّنِينَ.",
    contentPlain: "واحة الأحساء هي أكبر واحة نخيل في العالم، وتقع في شرق المملكة العربية السعودية. تضم الواحة أكثر من 2.5 مليون نخلة تنتج أجود أنواع التمور مثل 'الخلاص'. بفضل نظام الري التقليدي المعقد والعيون الطبيعية، تم تسجيل الأحساء في قائمة التراث العالمي لليونسكو. تعتبر المنطقة مثالا حيا على تفاعل الإنسان مع البيئة منذ آلاف السنين.",
    vocabList: [
      { word: "وَاحَة", meaning: "オアシス" },
      { word: "رِيّ", meaning: "灌漑（かんがい）" },
      { word: "عَيْن", meaning: "泉/目（複：ユユーン）" },
      { word: "تَفَاعُل", meaning: "相互作用" }
    ],
    questions: [
      { id: 10401, type: "reading", text: "アル・アハサーの世界的特徴は？", options: ["世界最大の砂漠", "世界最大のナツメヤシのオアシス", "一番高い山", "一番深い湖"], correctIndex: 1, explanation: "「أكبر واحة نخيل في العالم (世界最大のナツメヤシのオアシス)」です。" },
      { id: 10402, type: "reading", text: "そこにあるナツメヤシの数は？", options: ["100万本", "250万本以上", "50万本", "数えられない"], correctIndex: 1, explanation: "「أكثر من 2.5 مليون نخلة」です。" },
      { id: 10403, type: "reading", text: "なぜユネスコに登録されましたか？", options: ["新しいビルがあるから", "灌漑システムと自然の泉のおかげ", "海に近いから", "石油があるから"], correctIndex: 1, explanation: "「بفضل نظام الري... والعيون الطبيعية」です。" },
      { id: 10404, type: "vocabulary", text: "「جَوْدَة」の意味は？", options: ["量", "質/クオリティ", "色", "味"], correctIndex: 1, explanation: "Quality（質）です。「أجود (最高品質の)」の派生語です。" },
      { id: 10405, type: "grammar", text: "「〜のおかげで」", options: ["بِفَضْلِ", "بِسَبَبِ", "لَوْلَا", "مِنْ أَجْلِ"], correctIndex: 0, explanation: "「Bi-faḍli (Thanks to / Due to good cause)」です。" },
      // 上級文法問題
      { id: 10406, type: "grammar_advanced", text: "「أكبر واحة」の「واحة」の正しい語尾は？", options: ["i (カスラ)", "u (ダンマ)", "a (ファトハ)", "in (タンウィーン)"], correctIndex: 0, explanation: "「Akbar (最大の)」という最上級形容詞の後の名詞（〜の中で最大の）なので、イダーファ構造となり属格（カスラ）を取ります。" },
      { id: 10407, type: "grammar_advanced", text: "「تنتج أجود أنواع」の「أجود」の正しい語尾は？", options: ["a (ファトハ)", "u (ダンマ)", "i (カスラ)", "un (タンウィーン)"], correctIndex: 0, explanation: "動詞「Tuntiju (生産する)」の目的語なので対格（Manṣūb）となりファトハがつきます。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "وَاحَةُ الْأَحْسَاءِ هِيَ أَكْبَرُ وَاحَةِ نَخِيلٍ فِي الْعَالَمِ.", japanese: "アル・アハサー・オアシスは世界最大のナツメヤシのオアシスです。" },
      { speaker: "記事", arabic: "تَضُمُّ الْوَاحَةُ أَكْثَرَ مِنْ 2.5 مَلْيُونَ نَخْلَةٍ تُنْتِجُ أَجْوَدَ أَنْوَاعِ التُّمُورِ.", japanese: "オアシスには250万本以上のナツメヤシがあり、最高品質のデーツを生産しています。" },
      { speaker: "記事", arabic: "تَمَّ تَسْجِيلُ الْأَحْسَاءِ فِي قَائِمَةِ التُّرَاثِ الْعَالَمِيِّ لِلْيُونِسْكُو بِفَضْلِ نِظَامِ الرِّيِّ التَّقْلِيدِيِّ.", japanese: "伝統的な灌漑システムのおかげで、アル・アハサーはユネスコ世界遺産リストに登録されました。" },
      { speaker: "記事", arabic: "تُعْتَبَرُ الْمِنْطَقَةُ مِثَالًا حَيًّا عَلَى تَفَاعُلِ الْإِنْسَانِ مَعَ الْبِيئَةِ.", japanese: "この地域は、人間と環境の相互作用の生きた例と考えられています。" }
    ]
  },
  {
    id: 1041,
    title: "博学者アル・ビールーニー",
    category: "歴史",
    level: "上級",
    contentVoweled: "الْبِيرُونِيُّ كَانَ عَالِمًا مَوْسُوعِيًّا بَرَعَ فِي الْفِيزِيَاءِ وَالرِّيَاضِيَّاتِ وَالتَّارِيخِ وَالْجُغْرَافِيَا. قَامَ بِقِيَاسِ مُحِيطِ الْأَرْضِ بِدِقَّةٍ مُذْهِلَةٍ قَبْلَ أَلْفِ سَنَةٍ مِنَ التِّكْنُولُوجِيَا الْحَدِيثَةِ، وَكَانَ الْفَرْقُ بَيْنَ حِسَابِهِ وَالْقِيَاسَاتِ الْحَدِيثَةِ ضَئِيلًا جِدًّا. كَمَا أَلَّفَ كُتُبًا عَنِ الْهِنْدِ وَثَقَافَتِهَا، وَاعْتُبِرَ أَوَّلَ عَالِمِ أَنْثُرُوبُولُوجِيَا (عِلْمُ الْإِنْسَانِ) فِي التَّارِيخِ لِحِيَادِيَّتِهِ وَدِقَّتِهِ فِي الْوَصْفِ.",
    contentPlain: "البيروني كان عالما موسوعيا برع في الفيزياء والرياضيات والتاريخ والجغرافيا. قام بقياس محيط الأرض بدقة مذهلة قبل ألف سنة من التكنولوجيا الحديثة، وكان الفرق بين حسابه والقياسات الحديثة ضئيلا جدا. كما ألف كتبا عن الهند وثقافتها، واعتبر أول عالم أنثروبولوجيا (علم الإنسان) في التاريخ لحياديته ودقته في الوصف.",
    vocabList: [
      { word: "مَوْسُوعِيّ", meaning: "百科事典的な/博学な" },
      { word: "مُحِيط", meaning: "周囲/円周" },
      { word: "ضَئِيل", meaning: "わずかな/微小な" },
      { word: "حِيَادِيَّة", meaning: "中立性" }
    ],
    questions: [
      { id: 10411, type: "reading", text: "アル・ビールーニーはどんな学者でしたか？", options: ["詩人", "博学者（百科事典的）", "王様", "商人"], correctIndex: 1, explanation: "「عالما موسوعيا (博学者/百科事典的な学者)」です。" },
      { id: 10412, type: "reading", text: "彼は何を正確に測定しましたか？", options: ["太陽までの距離", "地球の円周", "月の重さ", "山の高さ"], correctIndex: 1, explanation: "「قياس محيط الأرض (地球の円周の測定)」です。" },
      { id: 10413, type: "reading", text: "彼は「最初の〇〇学者」と呼ばれていますか？", options: ["生物学者", "人類学者（アンソロポロジスト）", "化学者", "政治家"], correctIndex: 1, explanation: "「أول عالم أنثروبولوجيا (最初の人類学者)」です。" },
      { id: 10414, type: "vocabulary", text: "「دِقَّة」の意味は？", options: ["速さ", "正確さ/精度", "間違い", "大きさ"], correctIndex: 1, explanation: "Accuracy/Precision（正確さ）です。" },
      { id: 10415, type: "grammar", text: "「優れていました/秀でていました」", options: ["بَرَعَ", "فَشِلَ", "نَامَ", "أَكَلَ"], correctIndex: 0, explanation: "「Bara'a (Excelled)」です。" },
      // 上級文法問題
      { id: 10416, type: "grammar_advanced", text: "「عالما موسوعيا」の「عالما」の正しい語尾は？", options: ["an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "in (タンウィーン・カスラ)", "a (ファトハ)"], correctIndex: 0, explanation: "「Kāna」の述語（Khabar Kāna）なので対格（Manṣūb）となり、タンウィーン・ファトハがつきます。" },
      { id: 10417, type: "grammar_advanced", text: "「قبل ألف سنة」の「ألف」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "「Qabla (前)」などの副詞的名詞の後の名詞（Muḍāf Ilayhi）は属格（Majrūr）となり、カスラがつきます。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "الْبِيرُونِيُّ كَانَ عَالِمًا مَوْسُوعِيًّا بَرَعَ فِي الْفِيزِيَاءِ وَالرِّيَاضِيَّاتِ.", japanese: "ビールーニーは物理学と数学に秀でた博学者でした。" },
      { speaker: "記事", arabic: "قَامَ بِقِيَاسِ مُحِيطِ الْأَرْضِ بِدِقَّةٍ مُذْهِلَةٍ قَبْلَ أَلْفِ سَنَةٍ.", japanese: "彼は千年も前に驚くべき正確さで地球の円周を測定しました。" },
      { speaker: "記事", arabic: "أَلَّفَ كُتُبًا عَنِ الْهِنْدِ وَثَقَافَتِهَا، وَاعْتُبِرَ أَوَّلَ عَالِمِ أَنْثُرُوبُولُوجِيَا.", japanese: "彼はインドとその文化に関する本を著し、最初の人類学者と見なされました。" },
      { speaker: "記事", arabic: "كَانَ الْفَرْقُ بَيْنَ حِسَابِهِ وَالْقِيَاسَاتِ الْحَدِيثَةِ ضَئِيلًا جِدًّا.", japanese: "彼の計算と現代の測定値との差はごくわずかでした。" }
    ]
  },
  {
    id: 1042,
    title: "キッディーヤ（Qiddiya）",
    category: "社会",
    level: "上級",
    contentVoweled: "الْقِدِّيَّةُ هِيَ عَاصِمَةُ التَّرْفِيهِ وَالرِّيَاضَةِ وَالْفُنُونِ فِي الْمَمْلَكَةِ، وَتَقَعُ بِالْقُرْبِ مِنَ الرِّيَاضِ. يَهْدِفُ الْمَشْرُوعُ إِلَى أَنْ يُصْبِحَ الْوِجْهَةَ الْأُولَى فِي الْعَالَمِ لِلتَّرْفِيهِ، حَيْثُ سَيَضُمُّ مَدِينَةَ مَلَاهِي 'سِيكْس فْلَاجْز' الَّتِي تَحْتَوِي عَلَى أَسْرَعِ أَفْعُوَانِيَّةٍ فِي الْعَالَمِ. كَمَا سَتَشْمَلُ الْقِدِّيَّةُ مَلَاعِبَ رِيَاضِيَّةً ضَخْمَةً وَمَرَاكِزَ لِلْفُنُونِ وَمِضْمَارًا لِسِبَاقَاتِ السَّيَّارَاتِ، مِمَّا يُعَزِّزُ جَوْدَةَ الْحَيَاةِ وَيَجْذِبُ السُّيَّاحَ.",
    contentPlain: "القدية هي عاصمة الترفيه والرياضة والفنون في المملكة، وتقع بالقرب من الرياض. يهدف المشروع إلى أن يصبح الوجهة الأولى في العالم للترفيه، حيث سيضم مدينة ملاهي 'سيكس فلاجز' التي تحتوي على أسرع أفعوانية في العالم. كما ستشمل القدية ملاعب رياضية ضخمة ومراكز للفنون ومضمارا لسباقات السيارات، مما يعزز جودة الحياة ويجذب السياح.",
    vocabList: [
      { word: "تَرْفِيه", meaning: "エンターテインメント" },
      { word: "أَفْعُوَانِيَّة", meaning: "ジェットコースター" },
      { word: "مِضْمَار", meaning: "トラック/サーキット" },
      { word: "وِجْهَة", meaning: "目的地" }
    ],
    questions: [
      { id: 10421, type: "reading", text: "キッディーヤは何の首都になるとされていますか？", options: ["政治", "エンタメ、スポーツ、芸術", "農業", "工業"], correctIndex: 1, explanation: "「عاصمة الترفيه والرياضة والفنون」です。" },
      { id: 10422, type: "reading", text: "そこにある遊園地の特徴は？", options: ["世界一小さい", "世界最速のジェットコースターがある", "水がない", "動物園だけ"], correctIndex: 1, explanation: "「تحتوي على أسرع أفعوانية في العالم」です。" },
      { id: 10423, type: "reading", text: "他にどのような施設が含まれますか？", options: ["農場", "サッカースタジアムやサーキット", "工場", "漁港"], correctIndex: 1, explanation: "「ملاعب رياضية... ومضمارا لسباقات السيارات」です。" },
      { id: 10424, type: "vocabulary", text: "「سَائِح」の意味は？", options: ["住人", "観光客", "医者", "運転手"], correctIndex: 1, explanation: "Tourist（観光客）です。" },
      { id: 10425, type: "grammar", text: "「含む/収容する」", options: ["يَضُمُّ", "يَرْمِي", "يَبِيعُ", "يَنْسَى"], correctIndex: 0, explanation: "「Yaḍummu (Includes/Comprises)」です。" },
      // 上級文法問題
      { id: 10426, type: "grammar_advanced", text: "「أسرع أفعوانية」の「أسرع」の正しい語尾は？", options: ["a (ファトハ)", "i (カスラ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "前置詞「'Alā」の後ですが、最上級形容詞（Af'alパターン）は非限定名詞（Mumnū' min al-ṣarf）です。しかし、ここでは後ろの名詞「Af'uwāniyya」にイダーファ（属格構文）で繋がっているため、例外的にカスラを取る...と通常はなりますが、テキストの文脈「Taḥtawī 'alā asra'i...」ですね。実は非限定名詞は「イダーファされるか定冠詞がつくとカスラを取る」というルールがあります。したがって、正解は「i (カスラ)」です。" },
      { id: 10427, type: "grammar_advanced", text: "「ستشمل القدية ملاعب」の「ملاعب」の正しい語尾は？", options: ["a (ファトハ・タンウィーンなし)", "an (タンウィーン・ファトハ)", "u (ダンマ)", "in (タンウィーン・カスラ)"], correctIndex: 0, explanation: "動詞「Tashmalu (含む)」の目的語（対格）ですが、「Malā'ib」は非限定名詞（Mafā'ilパターン）なので、タンウィーンを取らずファトハ一文字になります。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "الْقِدِّيَّةُ هِيَ عَاصِمَةُ التَّرْفِيهِ وَالرِّيَاضَةِ وَالْفُنُونِ فِي الْمَمْلَكَةِ.", japanese: "キッディーヤは王国のエンターテインメント、スポーツ、芸術の首都です。" },
      { speaker: "記事", arabic: "يَهْدِفُ الْمَشْرُوعُ إِلَى أَنْ يُصْبِحَ الْوِجْهَةَ الْأُولَى فِي الْعَالَمِ لِلتَّرْفِيهِ.", japanese: "このプロジェクトは世界第一のエンターテインメントの目的地になることを目指しています。" },
      { speaker: "記事", arabic: "سَيَضُمُّ مَدِينَةَ مَلَاهِي تَحْتَوِي عَلَى أَسْرَعِ أَفْعُوَانِيَّةٍ فِي الْعَالَمِ.", japanese: "それは世界最速のジェットコースターを含む遊園地を擁します。" },
      { speaker: "記事", arabic: "سَتَشْمَلُ الْقِدِّيَّةُ مَلَاعِبَ رِيَاضِيَّةً ضَخْمَةً وَمِضْمَارًا لِسِبَاقَاتِ السَّيَّارَاتِ.", japanese: "キッディーヤには巨大なスポーツスタジアムやカーレース場も含まれます。" }
    ]
  },
  {
    id: 1043,
    title: "サウジのカブサ",
    category: "文化",
    level: "上級",
    contentVoweled: "الْكَبْسَةُ هِيَ الْأَكْلَةُ الشَّعْبِيَّةُ الْأُولَى فِي السُّعُودِيَّةِ، وَتَتَكَوَّنُ بِشَكْلٍ أَسَاسِيٍّ مِنَ الْأُرْزِ وَاللَّحْمِ (أَوِ الدَّجَاجِ) وَالتَّوَابِلِ الْمُتَنَوِّعَةِ. يَتِمُّ طَهْيُ اللَّحْمِ مَعَ الْأُرْزِ فِي قِدْرٍ وَاحِدٍ لِيَمْتَصَّ النَّكْهَاتِ، وَيُضَافُ إِلَيْهِ اللَّيْمُونُ الْمُجَفَّفُ (اللُّومِي) الَّذِي يُعْطِيهِ طَعْمًا مُمَيَّزًا. تُقَدَّمُ الْكَبْسَةُ فِي الْمُنَاسَبَاتِ وَالْوَلَائِمِ الْكَبِيرَةِ، حَيْثُ يَجْتَمِعُ النَّاسُ حَوْلَ طَبَقٍ وَاحِدٍ كَبِيرٍ لِتَنَاوُلِ الطَّعَامِ بِالْيَدِ، مِمَّا يُعَزِّزُ الرَّوَابِطَ الِاجْتِمَاعِيَّةَ.",
    contentPlain: "الكبسة هي الأكلة الشعبية الأولى في السعودية، وتتكون بشكل أساسي من الأرز واللحم (أو الدجاج) والتوابل المتنوعة. يتم طهي اللحم مع الأرز في قدر واحد ليمتص النكهات، ويضاف إليه الليمون المجفف (اللومي) الذي يعطيه طعما مميزا. تقدم الكبسة في المناسبات والولائم الكبيرة، حيث يجتمع الناس حول طبق واحد كبير لتناول الطعام باليد، مما يعزز الروابط الاجتماعية.",
    vocabList: [
      { word: "أَكْلَة", meaning: "料理/食事" },
      { word: "تَوَابِل", meaning: "スパイス" },
      { word: "وَلِيمَة", meaning: "宴会（複：ワラーイム）" },
      { word: "رَابِطَة", meaning: "絆/つながり" }
    ],
    questions: [
      { id: 10431, type: "reading", text: "カブサの主な材料は？", options: ["パンとチーズ", "米と肉（または鶏肉）", "魚のみ", "パスタ"], correctIndex: 1, explanation: "「الأرز واللحم (أو الدجاج)」です。" },
      { id: 10432, type: "reading", text: "独特の味を与える特別な材料は？", options: ["砂糖", "乾燥レモン（ルーミー）", "牛乳", "チョコレート"], correctIndex: 1, explanation: "「الليمون المجفف (اللومي)」です。" },
      { id: 10433, type: "reading", text: "どのように提供されますか？", options: ["一人ずつ別の皿で", "一つの大皿でみんなで囲む", "立って食べる", "隠れて食べる"], correctIndex: 1, explanation: "「يجتمع الناس حول طبق واحد كبير (一つの大皿の周りに人々が集まる)」です。" },
      { id: 10434, type: "vocabulary", text: "「مُجَفَّف」の意味は？", options: ["濡れた", "乾燥した/ドライ", "新しい", "甘い"], correctIndex: 1, explanation: "Dried（乾燥した）です。" },
      { id: 10435, type: "grammar", text: "「調理されます（受動態）」", options: ["يَتِمُّ طَهْيُ", "طَبَخَ", "يَأْكُلُ", "يَشْرَبُ"], correctIndex: 0, explanation: "「Yatimmu ṭahyu (Cooking is done/Is cooked)」という受動表現です。" },
      // 上級文法問題
      { id: 10436, type: "grammar_advanced", text: "「ليمتص النكهات」の「يمتص」の正しい語尾は？", options: ["a (ファトハ)", "u (ダンマ)", "i (カスラ)", "Sukuun (スクーン)"], correctIndex: 0, explanation: "「Li (〜するために)」という理由を表す前置詞（Lām al-Ta'līl）の後の現在形動詞は、接続法（Manṣūb）となりファトハがつきます。" },
      { id: 10437, type: "grammar_advanced", text: "「يعطيه طعما」の「طعما」の正しい語尾は？", options: ["an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "in (タンウィーン・カスラ)", "u (ダンマ)"], correctIndex: 0, explanation: "動詞「A'ṭā (与える)」は2つの目的語を取ります。「hi (彼に)」が第1目的語、「Ṭa'man (味を)」が第2目的語となり、対格（タンウィーン・ファトハ）になります。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "الْكَبْسَةُ هِيَ الْأَكْلَةُ الشَّعْبِيَّةُ الْأُولَى فِي السُّعُودِيَّةِ.", japanese: "カブサはサウジアラビアで一番の国民的料理です。" },
      { speaker: "記事", arabic: "يَتِمُّ طَهْيُ اللَّحْمِ مَعَ الْأُرْزِ فِي قِدْرٍ وَاحِدٍ لِيَمْتَصَّ النَّكْهَاتِ.", japanese: "風味を吸収させるために、肉は米と同じ鍋で調理されます。" },
      { speaker: "記事", arabic: "يُضَافُ إِلَيْهِ اللَّيْمُونُ الْمُجَفَّفُ الَّذِي يُعْطِيهِ طَعْمًا مُمَيَّزًا.", japanese: "独特の味を与える乾燥レモンがそれに加えられます。" },
      { speaker: "記事", arabic: "يَجْتَمِعُ النَّاسُ حَوْلَ طَبَقٍ وَاحِدٍ كَبِيرٍ، مِمَّا يُعَزِّزُ الرَّوَابِطَ الِاجْتِمَاعِيَّةَ.", japanese: "人々は一つの大皿の周りに集まり、それが社会的絆を強めます。" }
    ]
  },
  // --- 36. 交通・インフラ (Infrastructure) ---
  {
    id: 1044,
    title: "リヤド・メトロ",
    category: "社会",
    level: "上級",
    contentVoweled: "مِتْرُو الرِّيَاضِ هُوَ أَحَدُ أَكْبَرِ مَشَارِيعِ النَّقْلِ الْعَامِّ فِي الْعَالَمِ، وَيَهْدِفُ إِلَى حَلِّ مُشْكِلَةِ الِازْدِحَامِ الْمُرُورِيِّ فِي الْعَاصِمَةِ. يَتَكَوَّنُ الْمَشْرُوعُ مِنْ سِتَّةِ خُطُوطٍ رَئِيسِيَّةٍ تُغَطِّي مُعْظَمَ أَحْيَاءِ الْمَدِينَةِ، وَتَعْمَلُ الْقِطَارَاتُ بِنِظَامٍ آلِيٍّ كَامِلٍ بِدُونِ سَائِقٍ. يَتَمَيَّزُ الْمِتْرُو بِمَحَطَّاتِهِ ذَاتِ التَّصْمِيمِ الْمِعْمَارِيِّ الْحَدِيثِ وَالصَّدِيقِ لِلْبِيئَةِ، وَسَيُوَفِّرُ وَسِيلَةَ تَنَقُّلٍ سَرِيعَةٍ وَمُرِيحَةٍ لِمَلَايِينِ السُّكَّانِ.",
    contentPlain: "مترو الرياض هو أحد أكبر مشاريع النقل العام في العالم، ويهدف إلى حل مشكلة الازدحام المروري في العاصمة. يتكون المشروع من ستة خطوط رئيسية تغطي معظم أحياء المدينة، وتعمل القطارات بنظام آلي كامل بدون سائق. يتميز المترو بمحطاته ذات التصميم المعماري الحديث والصديق للبيئة، وسيوفر وسيلة تنقل سريعة ومريحة لملايين السكان.",
    vocabList: [
      { word: "نَقْل", meaning: "交通/輸送" },
      { word: "ازْدِحَام", meaning: "混雑/渋滞" },
      { word: "آلِيّ", meaning: "自動の" },
      { word: "حَيّ", meaning: "地区/地域（複：アヒヤー）" }
    ],
    questions: [
      { id: 10441, type: "reading", text: "リヤド・メトロの主な目的は？", options: ["観光のみ", "交通渋滞の解決", "車の販売促進", "地下に住むこと"], correctIndex: 1, explanation: "「حل مشكلة الازدحام المروري」です。" },
      { id: 10442, type: "reading", text: "列車の運転システムは？", options: ["手動", "完全自動（ドライバーレス）", "動物が引く", "リモコン"], correctIndex: 1, explanation: "「بنظام آلي كامل بدون سائق」です。" },
      { id: 10443, type: "reading", text: "駅のデザインの特徴は？", options: ["古い", "近代的で環境に優しい", "木造", "見えない"], correctIndex: 1, explanation: "「التصميم المعماري الحديث والصديق للبيئة」です。" },
      { id: 10444, type: "vocabulary", text: "「سَائِق」の意味は？", options: ["医者", "運転手/ドライバー", "警察", "先生"], correctIndex: 1, explanation: "Driver（運転手）です。" },
      { id: 10445, type: "grammar", text: "「構成されています」", options: ["يَتَكَوَّنُ مِنْ", "يَذْهَبُ إِلَى", "يَأْكُلُ مِنْ", "يَنَامُ فِي"], correctIndex: 0, explanation: "「Yatakawwanu min (Consists of)」です。" },
      // 上級文法問題
      { id: 10446, type: "grammar_advanced", text: "「حل مشكلة الازدحام」の「مشكلة」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "un (タンウィーン)"], correctIndex: 0, explanation: "前置詞「Ilā」の後で「ḥall (解決)」が属格になり、さらに「Mushkila」がそのイダーファの第2要素（属格）となるため、カスラがつきます。" },
      { id: 10447, type: "grammar_advanced", text: "「تغطي معظم أحياء」の「معظم」の正しい語尾は？", options: ["a (ファトハ)", "u (ダンマ)", "i (カスラ)", "an (タンウィーン)"], correctIndex: 0, explanation: "動詞「Tughaṭṭī (カバーする)」の目的語（Maf'ūl Bihi）なので対格（Manṣūb）となりファトハがつきます。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "يَرْبِطُ الْمِتْرُو الْمَطَارَ بِالْمَرْكَزِ الْمَالِيِّ وَالْجَامِعَاتِ.", japanese: "メトロは空港を金融センターや大学と結びます。" },
      { speaker: "記事", arabic: "سَيُسَاهِمُ فِي تَقْلِيلِ التَّلَوُّثِ النَّاتِجِ عَنِ السَّيَّارَاتِ.", japanese: "それは車による汚染を減らすのに貢献します。" },
      { speaker: "記事", arabic: "الْمَحَطَّاتُ مُزَوَّدَةٌ بِأَحْدَثِ التِّقْنِيَّاتِ.", japanese: "駅は最新技術を備えています。" },
      { speaker: "記事", arabic: "إِنَّهُ نَقْلَةٌ حَضَارِيَّةٌ لِلْعَاصِمَةِ.", japanese: "それは首都にとっての文明的な飛躍です。" }
    ]
  },
  {
    id: 1045,
    title: "イスラム建築",
    category: "文化",
    level: "上級",
    contentVoweled: "تَتَمَيَّزُ الْعِمَارَةُ الْإِسْلَامِيَّةُ بِطَابِعِهَا الْفَرِيدِ الَّذِي يَجْمَعُ بَيْنَ الْجَمَالِ وَالْوَظِيفَةِ. مِنْ أَبْرَزِ عَنَاصِرِهَا الْقِبَابُ وَالْمَآذِنُ وَالْأَقْوَاسُ، بِالْإِضَافَةِ إِلَى الزَّخَارِفِ الْهَنْدَسِيَّةِ وَالنَّبَاتِيَّةِ الَّتِي تَخْلُو مِنْ صُوَرِ الْكَائِنَاتِ الْحَيَّةِ. يَعْتَبِرُ الْمَسْجِدُ الْحَرَامُ وَالْمَسْجِدُ النَّبَوِيُّ وَقَصْرُ الْحَمْرَاءِ مِنْ أَعْظَمِ أَمْثِلَةِ هَذَا الْفَنِّ، حَيْثُ يَظْهَرُ فِيهَا الْإِبْدَاعُ فِي اسْتِخْدَامِ الضَّوْءِ وَالظِّلَالِ وَالنُّقُوشِ الْقُرْآنِيَّةِ.",
    contentPlain: "تتميز العمارة الإسلامية بطابعها الفريد الذي يجمع بين الجمال والوظيفة. من أبرز عناصرها القباب والمآذن والأقواس، بالإضافة إلى الزخارف الهندسية والنباتية التي تخلو من صور الكائنات الحية. يعتبر المسجد الحرام والمسجد النبوي وقصر الحمراء من أعظم أمثلة هذا الفن، حيث يظهر فيها الإبداع في استخدام الضوء والظلال والنقوش القرآنية.",
    vocabList: [
      { word: "عِمَارَة", meaning: "建築" },
      { word: "قُبَّة", meaning: "ドーム（複：クバーブ）" },
      { word: "مِئْذَنَة", meaning: "ミナレット/尖塔" },
      { word: "زُخْرُفَة", meaning: "装飾/オーナメント" }
    ],
    questions: [
      { id: 10451, type: "reading", text: "イスラム建築の特徴は？", options: ["機能がない", "美と機能の融合", "暗い", "木造のみ"], correctIndex: 1, explanation: "「يجمع بين الجمال والوظيفة」です。" },
      { id: 10452, type: "reading", text: "主要な要素に含まれるのは？", options: ["ドーム、ミナレット、アーチ", "ピラミッド", "高層ビル", "洞窟"], correctIndex: 0, explanation: "「القباب والمآذن والأقواس」です。" },
      { id: 10453, type: "reading", text: "装飾には何が使われませんか？", options: ["幾何学模様", "植物模様", "生き物の絵", "文字"], correctIndex: 2, explanation: "「تخلو من صور الكائنات الحية (生き物の像を含まない)」が伝統的な特徴です。" },
      { id: 10454, type: "vocabulary", text: "「فَنّ」の意味は？", options: ["科学", "芸術/アート", "スポーツ", "ビジネス"], correctIndex: 1, explanation: "Art（芸術）です。" },
      { id: 10455, type: "grammar", text: "「集める/結合する」", options: ["يَجْمَعُ", "يُفَرِّقُ", "يَكْسِرُ", "يَنْسَى"], correctIndex: 0, explanation: "「Yajma'u (Combine/Gather)」です。" },
      // 上級文法問題
      { id: 10456, type: "grammar_advanced", text: "「من أبرز عناصرها القباب」の「القباب」の正しい語尾は？", options: ["u (ダンマ)", "a (ファトハ)", "i (カスラ)", "un (タンウィーン)"], correctIndex: 0, explanation: "「Min abrazi 'anāṣiri-hā」は前置された述語（Khabar Muqaddam）であり、「Al-Qibābu」は後置された主語（Mubtada' Mu'akhkhar）であるため、主格（Marfū'）となりダンマがつきます。" },
      { id: 10457, type: "grammar_advanced", text: "「تخلو من صور الكائنات」の「الكائنات」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "イダーファの第2要素（属格）なのでカスラがつきます。女性規則複数でも属格はカスラです。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "الْأَقْوَاسُ الْمُحَدَّبَةُ مِنْ مُمَيِّزَاتِ الْمَسَاجِدِ الْقَدِيمَةِ.", japanese: "馬蹄形アーチは古いモスクの特徴の一つです。" },
      { speaker: "記事", arabic: "تُسْتَخْدَمُ الْخَطُّ الْعَرَبِيُّ لِتَزْيِينِ الْجُدْرَانِ.", japanese: "アラビア書道が壁を飾るために使われます。" },
      { speaker: "記事", arabic: "الْمَشْرَبِيَّةُ تُسَاعِدُ فِي تَبْرِيدِ الْهَوَاءِ وَتَوْفِيرِ الْخُصُوصِيَّةِ.", japanese: "マシュラビーヤ（木製格子窓）は空気の冷却とプライバシー確保に役立ちます。" },
      { speaker: "記事", arabic: "هَذَا الْفَنُّ يَعْكِسُ الرُّوحَانِيَّةَ وَالنِّظَامَ.", japanese: "この芸術は精神性と秩序を反映しています。" }
    ]
  },
  {
    id: 1046,
    title: "サルーキ犬（アラビアの狩猟犬）",
    category: "文化",
    level: "上級",
    contentVoweled: "كَلْبُ السَّلُوقِيِّ هُوَ أَحَدُ أَقْدَمِ سُلَالَاتِ الْكِلَابِ فِي الْعَالَمِ، وَقَدْ رَافَقَ الْعَرَبَ فِي الصَّحْرَاءِ مُنْذُ آلَافِ السِّنِينَ. يَتَمَيَّزُ هَذَا الْكَلْبُ بِسُرْعَتِهِ الْفَائِقَةِ وَجِسْمِهِ الرَّشِيقِ وَقُدْرَتِهِ عَلَى التَّحَمُّلِ فِي الْأَجْوَاءِ الْحَارَّةِ. كَانَ يُسْتَخْدَمُ فِي صَيْدِ الْأَرَانِبِ وَالْغِزْلَانِ، وَيُعْتَبَرُ فَرْدًا مِنَ الْعَائِلَةِ وَلَيْسَ مُجَرَّدَ حَيَوَانٍ، حَيْثُ كَانَ يَنَامُ دَاخِلَ الْخَيْمَةِ وَيَحْظَى بِاهْتِمَامٍ خَاصٍّ.",
    contentPlain: "كلب السلوقي هو أحد أقدم سلالات الكلاب في العالم، وقد رافق العرب في الصحراء منذ آلاف السنين. يتميز هذا الكلب بسرعته الفائقة وجسمه الرشيق وقدرته على التحمل في الأجواء الحارة. كان يستخدم في صيد الأرانب والغزلان، ويعتبر فردا من العائلة وليس مجرد حيوان، حيث كان ينام داخل الخيمة ويحظى باهتمام خاص.",
    vocabList: [
      { word: "سُلَالَة", meaning: "品種/血統" },
      { word: "رَشِيق", meaning: "優雅な/スリムな" },
      { word: "تَحَمُّل", meaning: "忍耐/耐久" },
      { word: "خَيْمَة", meaning: "テント" }
    ],
    questions: [
      { id: 10461, type: "reading", text: "サルーキ犬の特徴は？", options: ["新種である", "世界最古の犬種の一つ", "遅い", "泳ぎが得意"], correctIndex: 1, explanation: "「أحد أقدم سلالات الكلاب」です。" },
      { id: 10462, type: "reading", text: "その身体能力は？", options: ["遅くて重い", "超高速で耐久力がある", "寒さに強いだけ", "弱い"], correctIndex: 1, explanation: "「سرعته الفائقة... وقدرته على التحمل」です。" },
      { id: 10463, type: "reading", text: "昔のアラブ人はサルーキをどう扱いましたか？", options: ["外で寝かせた", "家族の一員として扱った", "売った", "怖がった"], correctIndex: 1, explanation: "「يعتبر فردا من العائلة (家族の一員とみなされた)」です。" },
      { id: 10464, type: "vocabulary", text: "「صَيْد」の意味は？", options: ["睡眠", "狩り/ハンティング", "食事", "遊び"], correctIndex: 1, explanation: "Hunting（狩り）です。" },
      { id: 10465, type: "grammar", text: "「同伴した/連れ添った」", options: ["رَافَقَ", "تَرَكَ", "ذَهَبَ", "أَكَلَ"], correctIndex: 0, explanation: "「Rāfaqa (Accompanied)」です。" },
      // 上級文法問題
      { id: 10466, type: "grammar_advanced", text: "「منذ آلاف السنين」の「السنين」の正しい語尾は？", options: ["i (カスラ・Yāによる)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "「Sinīn (年々)」は男性規則複数（Jam' Mudhakkar Sālim）のように扱われるため（Mulḥaq bi-Jam' al-Mudhakkar）、属格では「Yā」で表されます（Sinīna - 最後のnaは固定）。" },
      { id: 10467, type: "grammar_advanced", text: "「ليس مجرد حيوان」の「حيوان」の正しい語尾は？", options: ["in (タンウィーン・カスラ)", "an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "a (ファトハ)"], correctIndex: 0, explanation: "「Mujarrad (ただの)」の後の名詞（Muḍāf Ilayhi）なので、属格（Majrūr）となり、タンウィーン・カスラがつきます。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "لَا يَنْبَحُ السَّلُوقِيُّ كَثِيرًا، بَلْ هُوَ هَادِئٌ.", japanese: "サルーキはあまり吠えず、静かです。" },
      { speaker: "記事", arabic: "يَصِيدُ بِاسْتِخْدَامِ بَصَرِهِ الْحَادِّ.", japanese: "視覚（サイトハウンド）を使って狩りをします。" },
      { speaker: "記事", arabic: "يُوجَدُ نَوْعَانِ: الْأَمْلَسُ وَالْمُشْعَرُ.", japanese: "スムース（短毛）とフェザード（長毛）の2種類があります。" },
      { speaker: "記事", arabic: "تُقَامُ مُسَابَقَاتٌ لِجَمَالِ وَسُرْعَةِ السَّلُوقِيِّ.", japanese: "サルーキの美しさと速さを競うコンテストが開催されます。" }
    ]
  },
  {
    id: 1047,
    title: "サドゥ織り（伝統工芸）",
    category: "文化",
    level: "上級",
    contentVoweled: "حِرْفَةُ السَّدْوِ هِيَ فَنُّ النَّسِيجِ التَّقْلِيدِيِّ الَّذِي أَتْقَنَتْهُ نِسَاءُ الْبَادِيَةِ فِي الْجَزِيرَةِ الْعَرَبِيَّةِ مُنْذُ الْقِدَمِ. تَسْتَخْدِمُ النِّسَاءُ صُوفَ الْأَغْنَامِ وَوَبَرَ الْإِبِلِ وَشَعْرَ الْمَاعِزِ لِغَزْلِ خُيُوطٍ قَوِيَّةٍ، ثُمَّ يَقُمْنَ بِنَسْجِهَا لِتَصْنِيعِ الْخِيَامِ (بُيُوتِ الشَّعْرِ) وَالْبُسُطِ وَالْوَسَائِدِ. تَتَمَيَّزُ نُقُوشُ السَّدْوِ بِأَشْكَالٍ هَنْدَسِيَّةٍ وَأَلْوَانٍ زَاهِيَةٍ تَعْكِسُ الْبِيئَةَ الصَّحْرَاوِيَّةَ، وَقَدْ أَدْرَجَتِ الْيُونِسْكُو هَذِهِ الْحِرْفَةَ فِي قَائِمَةِ التُّرَاثِ الثَّقَافِيِّ غَيْرِ الْمَادِّيِّ.",
    contentPlain: "حرفة السدو هي فن النسيج التقليدي الذي أتقنته نساء البادية في الجزيرة العربية منذ القدم. تستخدم النساء صوف الأغنام ووبر الإبل وشعر الماعز لغزل خيوط قوية، ثم يقمن بنسجها لتصنيع الخيام (بيوت الشعر) والبسط والوسائد. تتميز نقوش السدو بأشكال هندسية وألوان زاهية تعكس البيئة الصحراوية، وقد أدرجت اليونسكو هذه الحرفة في قائمة التراث الثقافي غير المادي.",
    vocabList: [
      { word: "نَسِيج", meaning: "織物/テキスタイル" },
      { word: "بَادِيَة", meaning: "砂漠/ベドウィンの地" },
      { word: "غَزْل", meaning: "紡ぐこと" },
      { word: "خَيْمَة", meaning: "テント（複：ヒヤーム）" }
    ],
    questions: [
      { id: 10471, type: "reading", text: "サドゥ織りの主な担い手は誰でしたか？", options: ["都市の男性", "ベドウィンの女性", "外国の商人", "工場の機械"], correctIndex: 1, explanation: "「أتقنته نساء البادية (砂漠の女性たちが習得した)」です。" },
      { id: 10472, type: "reading", text: "材料として使われないものは？", options: ["羊毛", "ラクダの毛", "ヤギの毛", "シルク"], correctIndex: 3, explanation: "羊、ラクダ、ヤギの毛が使われます。" },
      { id: 10473, type: "reading", text: "サドゥで作られる代表的なものは？", options: ["船", "テント（毛の家）や敷物", "陶器", "剣"], correctIndex: 1, explanation: "「الخيام (بيوت الشعر) والبسط」です。" },
      { id: 10474, type: "vocabulary", text: "「هَنْدَسِيّ」の意味は？", options: ["自然の", "幾何学的な", "乱雑な", "暗い"], correctIndex: 1, explanation: "Geometric（幾何学的な）です。" },
      { id: 10475, type: "grammar", text: "「習得しました」", options: ["أَتْقَنَتْ", "نَسِيَتْ", "تَعَلَّمَتْ", "كَرِهَتْ"], correctIndex: 0, explanation: "「Atqanat (Mastered/Perfected)」です。" },
      // 上級文法問題
      { id: 10476, type: "grammar_advanced", text: "「تستخدم النساء」の「النساء」の正しい語尾は？", options: ["u (ダンマ)", "a (ファトハ)", "i (カスラ)", "un (タンウィーン)"], correctIndex: 0, explanation: "動詞「Tastakhdimu」の主語（Fā'il）なので主格となりダンマがつきます。" },
      { id: 10477, type: "grammar_advanced", text: "「أشكال هندسية」の「هندسية」の正しい語尾は？", options: ["in (タンウィーン・カスラ)", "un (タンウィーン・ダンマ)", "an (タンウィーン・ファトハ)", "a (ファトハ)"], correctIndex: 0, explanation: "「Ashkāl (形・前置詞Biの後の属格)」を修飾する形容詞なので、属格となりタンウィーン・カスラがつきます（Ashkālin Handasiyyatin）。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "أَلْوَانُ السَّدْوِ التَّقْلِيدِيَّةُ هِيَ الْأَحْمَرُ وَالْأَسْوَدُ وَالْأَبْيَضُ.", japanese: "サドゥの伝統的な色は赤、黒、白です。" },
      { speaker: "記事", arabic: "تُرْمَزُ النُّقُوشُ إِلَى عَنَاصِرَ مِنَ الطَّبِيعَةِ وَالْحَيَاةِ الْيَوْمِيَّةِ.", japanese: "模様は自然や日常生活の要素を象徴しています。" },
      { speaker: "記事", arabic: "تُسْتَخْدَمُ هَذِهِ الزَّخَارِفُ الْآنَ فِي تَصَامِيمِ الْأَزْيَاءِ وَالْحَقَائِبِ.", japanese: "これらの装飾は今、ファッションやバッグのデザインに使われています。" },
      { speaker: "記事", arabic: "الْحِفَاظُ عَلَى هَذِهِ الْحِرْفَةِ وَاجِبٌ وَطَنِيٌّ.", japanese: "この工芸を守ることは国民の義務です。" }
    ]
  },
  {
    id: 1048,
    title: "医学の天才アル・ラーズィー",
    category: "歴史",
    level: "上級",
    contentVoweled: "أَبُو بَكْرٍ الرَّازِيُّ هُوَ أَحَدُ أَعْظَمِ الْأَطِبَّاءِ فِي تَارِيخِ الْبَشَرِيَّةِ، وَلُقِّبَ بـ 'جَالِينُوسِ الْعَرَبِ'. كَانَ أَوَّلَ مَنْ فَرَّقَ طِبِّيًّا بَيْنَ مَرَضِ الْجُدَرِيِّ وَمَرَضِ الْحَصْبَةِ فِي كِتَابِهِ الشَّهِيرِ. تَمَيَّزَ مَنْهَجُهُ بِالِاعْتِمَادِ عَلَى الْمُلَاحَظَةِ السَّرِيرِيَّةِ وَالتَّجْرِبَةِ، وَكَانَ يُؤَكِّدُ عَلَى أَهَمِّيَّةِ الْحَالَةِ النَّفْسِيَّةِ لِلْمَرِيضِ فِي الْعِلَاجِ. تُرْجِمَتْ كُتُبُهُ إِلَى اللَّاتِينِيَّةِ وَظَلَّتْ مَرَاجِعَ أَسَاسِيَّةً فِي جَامِعَاتِ أُورُوبَّا لِقُرُونٍ.",
    contentPlain: "أبو بكر الرازي هو أحد أعظم الأطباء في تاريخ البشرية، ولقب بـ 'جالينوس العرب'. كان أول من فرق طبيا بين مرض الجدري ومرض الحصبة في كتابه الشهير. تميز منهجه بالاعتماد على الملاحظة السريرية والتجربة، وكان يؤكد على أهمية الحالة النفسية للمريض في العلاج. ترجمت كتبه إلى اللاتينية وظلت مراجع أساسية في جامعات أوروبا لقرون.",
    vocabList: [
      { word: "طَبِيب", meaning: "医師" },
      { word: "جُدَرِيّ", meaning: "天然痘" },
      { word: "حَصْبَة", meaning: "麻疹（はしか）" },
      { word: "سَرِيرِيّ", meaning: "臨床の" }
    ],
    questions: [
      { id: 10481, type: "reading", text: "アル・ラーズィーの異名は？", options: ["数学の王", "アラブのガレノス", "詩の父", "科学の敵"], correctIndex: 1, explanation: "「جالينوس العرب」と呼ばれました。" },
      { id: 10482, type: "reading", text: "彼が医学的に区別した病気は？", options: ["風邪とインフルエンザ", "天然痘と麻疹", "頭痛と腹痛", "癌と心臓病"], correctIndex: 1, explanation: "「بين مرض الجدري ومرض الحصبة」です。" },
      { id: 10483, type: "reading", text: "彼が治療において重要視したことは？", options: ["お金", "患者の精神状態（心理状態）", "薬の量だけ", "速さ"], correctIndex: 1, explanation: "「أهمية الحالة النفسية للمريض」です。" },
      { id: 10484, type: "vocabulary", text: "「تَجْرِبَة」の意味は？", options: ["本", "実験/経験", "病院", "薬"], correctIndex: 1, explanation: "Experiment/Experienceです。" },
      { id: 10485, type: "grammar", text: "「区別しました」", options: ["فَرَّقَ", "جَمَعَ", "نَسِيَ", "خَلَطَ"], correctIndex: 0, explanation: "「Farraqa (Differentiated)」です。" },
      // 上級文法問題
      { id: 10486, type: "grammar_advanced", text: "「أحد أعظم الأطباء」の「أعظم」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "「Aḥad (〜の一つ)」の後のイダーファ第2要素（属格）です。「A'ẓam」は非限定名詞ですが、さらに後の名詞「Al-Aṭibbā'」にイダーファされているため、カスラを取ります。" },
      { id: 10487, type: "grammar_advanced", text: "「ظلّت مراجع أساسية」の「مراجع」の正しい語尾は？", options: ["a (ファトハ)", "an (タンウィーン・ファトハ)", "u (ダンマ)", "i (カスラ)"], correctIndex: 0, explanation: "「Ẓallat (〜のままであった・Zalla)」の述語（Khabar）なので対格ですが、「Marāji'」は非限定名詞（Mafā'ilパターン）なのでタンウィーンはつかず、ファトハ一文字になります。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "اخْتَارَ الرَّازِيُّ مَوْقِعَ الْمُسْتَشْفَى عَنْ طَرِيقِ تَعْلِيقِ قِطَعِ اللَّحْمِ.", japanese: "ラーズィーは肉片を吊るすことで病院の場所を選びました（腐敗が遅い場所を選んだ）。" },
      { speaker: "記事", arabic: "كَانَ كِيمْيَائِيًّا بَارِعًا قَبْلَ أَنْ يُصْبِحَ طَبِيبًا.", japanese: "彼は医者になる前は優れた化学者でした。" },
      { speaker: "記事", arabic: "آتَى بِأَخْلَاقِيَّاتِ الطِّبِّ وَمُعَامَلَةِ الْفُقَرَاءِ.", japanese: "彼は医療倫理と貧者の扱いを重視しました。" },
      { speaker: "記事", arabic: "تُرْجِمَ كِتَابُهُ 'الْحَاوِي' إِلَى لُغَاتٍ عِدَّةٍ.", japanese: "彼の著書『包含の書（アル・ハーウィー）』は数ヶ国語に翻訳されました。" }
    ]
  },
  {
    id: 1049,
    title: "ファラサン諸島",
    category: "自然",
    level: "上級",
    contentVoweled: "جُزُرُ فَرَسَانَ هِيَ أَرْخَبِيلٌ سَاحِرٌ يَقَعُ فِي جَنُوبِ الْبَحْرِ الْأَحْمَرِ تَابِعٌ لِمِنْطَقَةِ جَازَانَ. تَضُمُّ الْجُزُرُ تَنَوُّعًا بِيُولُوجِيًّا مُذْهِلًا، حَيْثُ تَحْتَوِي عَلَى غَابَاتِ الْمَانْجِرُوفِ وَالشُّعَبِ الْمَرْجَانِيَّةِ النَّادِرَةِ، وَتُعْتَبَرُ مَوْطِنًا لِلْغَزَالِ الْفَرَسَانِيِّ الْمُهَدَّدِ بِالِانْقِرَاضِ. تَشْتَهِرُ الْجُزُرُ تَارِيخِيًّا بِتِجَارَةِ اللُّؤْلُؤِ وَصَيْدِ سَمَكِ الْحَرِيدِ، حَيْثُ يُقَامُ مَهْرَجَانٌ سَنَوِيٌّ خَاصٌّ بِصَيْدِ هَذَا النَّوْعِ مِنَ الْأَسْمَاكِ.",
    contentPlain: "جزر فرسان هي أرخبيل ساحر يقع في جنوب البحر الأحمر تابع لمنطقة جازان. تضم الجزر تنوعا بيولوجيا مذهلا، حيث تحتوي على غابات المانجروف والشعب المرجانية النادرة، وتعتبر موطنا للغزال الفرساني المهدد بالانقراض. تشتهر الجزر تاريخيا بتجارة اللؤلؤ وصيد سمك الحريد، حيث يقام مهرجان سنوي خاص بصيد هذا النوع من الأسماك.",
    vocabList: [
      { word: "أَرْخَبِيل", meaning: "群島" },
      { word: "تَنَوُّع", meaning: "多様性" },
      { word: "غَزَال", meaning: "ガゼル" },
      { word: "لُؤْلُؤ", meaning: "真珠" }
    ],
    questions: [
      { id: 10491, type: "reading", text: "ファラサン諸島はどこにありますか？", options: ["アラビア湾", "紅海南部（ジーザーン）", "地中海", "インド洋"], correctIndex: 1, explanation: "「جنوب البحر الأحمر تابع لمنطقة جازان」です。" },
      { id: 10492, type: "reading", text: "そこに生息する絶滅危惧種は？", options: ["ライオン", "ファラサン・ガゼル", "ゾウ", "パンダ"], correctIndex: 1, explanation: "「الغزال الفرساني」です。" },
      { id: 10493, type: "reading", text: "毎年行われるフェスティバルは何のためですか？", options: ["真珠", "ハリード魚（ブダイ）の漁", "水泳", "ボートレース"], correctIndex: 1, explanation: "「مهرجان سنوي خاص بصيد... سمك الحريد」です。" },
      { id: 10494, type: "vocabulary", text: "「مَوْطِن」の意味は？", options: ["敵", "生息地/故郷", "海", "空"], correctIndex: 1, explanation: "Habitat/Homeです。" },
      { id: 10495, type: "grammar", text: "「属しています」", options: ["تَابِعٌ لِـ", "بَعِيدٌ عَنْ", "قَرِيبٌ مِنْ", "خَائِفٌ مِنْ"], correctIndex: 0, explanation: "「Tābi'un li- (Belonging to/Affiliated with)」です。" },
      // 上級文法問題
      { id: 10496, type: "grammar_advanced", text: "「تضم الجزر تنوعا」の「الجزر」の正しい語尾は？", options: ["u (ダンマ)", "a (ファトハ)", "i (カスラ)", "un (タンウィーン)"], correctIndex: 0, explanation: "動詞「Taḍummu（含む）」の主語（Fā'il）なので主格となりダンマがつきます。" },
      { id: 10497, type: "grammar_advanced", text: "「مهرجان سنوي خاص」の「خاص」の正しい語尾は？", options: ["un (タンウィーン・ダンマ)", "an (タンウィーン・ファトハ)", "in (タンウィーン・カスラ)", "u (ダンマ)"], correctIndex: 0, explanation: "「Mahrajānun Sanawiyyun」を修飾する形容詞（Na't）であり、主格（Marfū'）なので、タンウィーン・ダンマがつきます。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "تَمَّ تَسْجِيلُ الْجُزُرِ كَمَحْمِيَّةٍ طَبِيعِيَّةٍ.", japanese: "諸島は自然保護区として登録されました。" },
      { speaker: "記事", arabic: "تُوجَدُ فِي الْجَزِيرَةِ آثَارٌ عُثْمَانِيَّةٌ وَمَبَانٍ قَدِيمَةٌ.", japanese: "島にはオスマン帝国の遺跡や古い建物があります。" },
      { speaker: "記事", arabic: "مِيَاهُهَا الصَّافِيَةُ تَجْذِبُ الْغَوَّاصِينَ.", japanese: "その澄んだ水はダイバーを惹きつけます。" },
      { speaker: "記事", arabic: "ظَاهِرَةُ انْتِحَارِ سَمَكِ الْحَرِيدِ لَا تَزَالُ لُغْزًا.", japanese: "ハリード魚の（岸への）大量押し寄せ現象は今も謎です。" }
    ]
  },
  {
    id: 1050,
    title: "人工降雨（クラウドシーディング）",
    category: "科学",
    level: "上級",
    contentVoweled: "بَرْنَامَجُ الِاسْتِمْطَارِ الصِّنَاعِيِّ يَهْدِفُ إِلَى زِيَادَةِ مُعَدَّلَاتِ هُطُولِ الْأَمْطَارِ فِي الْمَمْلَكَةِ الَّتِي تُعَانِي مِنَ الْجَفَافِ. تَسْتَخْدِمُ هَذِهِ التِّقْنِيَةُ طَائِرَاتٍ خَاصَّةً لِرَشِّ مَوَادَّ صَدِيقَةٍ لِلْبِيئَةِ فِي السُّحُبِ، مِمَّا يُحَفِّزُ تَكَثُّفَ بُخَارِ الْمَاءِ وَسُقُوطَ الْمَطَرِ. يَسْعَى الْمَشْرُوعُ إِلَى زِيَادَةِ الْمَخْزُونِ الْمَائِيِّ الْجَوْفِيِّ وَمُكَافَحَةِ التَّصَحُّرِ، وَهُوَ جُزْءٌ مِنَ الْحُلُولِ الْمُبْتَكَرَةِ لِتَحْقِيقِ الْأَمْنِ الْمَائِيِّ.",
    contentPlain: "برنامج الاستمطار الصناعي يهدف إلى زيادة معدلات هطول الأمطار في المملكة التي تعاني من الجفاف. تستخدم هذه التقنية طائرات خاصة لرش مواد صديقة للبيئة في السحب، مما يحفز تكثف بخار الماء وسقوط المطر. يسعى المشروع إلى زيادة المخزون المائي الجوفي ومكافحة التصحر، وهو جزء من الحلول المبتكرة لتحقيق الأمن المائي.",
    vocabList: [
      { word: "اسْتِمْطَار", meaning: "人工降雨" },
      { word: "جَفَاف", meaning: "干ばつ/乾燥" },
      { word: "سَحَاب", meaning: "雲（複：スフブ）" },
      { word: "مُبْتَكَر", meaning: "革新的な" }
    ],
    questions: [
      { id: 10501, type: "reading", text: "人工降雨プログラムの目的は？", options: ["洪水を起こす", "降水量を増やす", "雪を降らせる", "雲を消す"], correctIndex: 1, explanation: "「زيادة معدلات هطول الأمطار」です。" },
      { id: 10502, type: "reading", text: "どのような技術を使いますか？", options: ["ミサイル", "特別な飛行機で環境に優しい物質を撒く", "巨大な扇風機", "気球"], correctIndex: 1, explanation: "「طائرات خاصة لرش مواد صديقة للبيئة」です。" },
      { id: 10503, type: "reading", text: "何と戦うために役立ちますか？", options: ["砂漠化", "寒さ", "風", "虫"], correctIndex: 0, explanation: "「مكافحة التصحر (砂漠化との戦い)」です。" },
      { id: 10504, type: "vocabulary", text: "「مُعَدَّل」の意味は？", options: ["機械", "率/平均/レート", "天気", "雨"], correctIndex: 1, explanation: "Rate/Averageです。" },
      { id: 10505, type: "grammar", text: "「刺激する/促す」", options: ["يُحَفِّزُ", "يَمْنَعُ", "يُوقِفُ", "يَنَامُ"], correctIndex: 0, explanation: "「Yuḥaffizu (Stimulates)」です。" },
      // 上級文法問題
      { id: 10506, type: "grammar_advanced", text: "「لرش مواد صديقة」の「مواد」の正しい語尾は？", options: ["a (ファトハ・タンウィーンなし)", "i (カスラ)", "in (タンウィーン・カスラ)", "an (タンウィーン・ファトハ)"], correctIndex: 0, explanation: "「Rashshi (撒くこと)」の後の属格（イダーファ第2要素）ですが、「Mawādd」は非限定名詞（Mumnū' min al-ṣarf）のため、カスラではなくファトハを取り、タンウィーンもつきません。" },
      { id: 10507, type: "grammar_advanced", text: "「جزء من الحلول」の「جزء」の正しい語尾は？", options: ["un (タンウィーン・ダンマ)", "an (タンウィーン・ファトハ)", "u (ダンマ)", "in (タンウィーン・カスラ)"], correctIndex: 0, explanation: "「Huwa (それは)」の述語（Khabar）なので主格（Marfū'）となり、タンウィーン・ダンマがつきます。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "الْمَادَّةُ الْمُسْتَخْدَمَةُ لَا تَضُرُّ بِالْبِيئَةِ.", japanese: "使用される物質は環境に害を与えません。" },
      { speaker: "記事", arabic: "الْعَمَلِيَّةُ تَتَطَلَّبُ دِرَاسَةً دَقِيقَةً لِحَالَةِ الطَّقْسِ.", japanese: "このプロセスには気象条件の精密な研究が必要です。" },
      { speaker: "記事", arabic: "زِيَادَةُ الْمَطَرِ تَدْعَمُ الزِّرَاعَةَ وَالْغِطَاءَ النَّبَاتِيَّ.", japanese: "雨の増加は農業と植生を支えます。" },
      { speaker: "記事", arabic: "التِّقْنِيَةُ مُسْتَخْدَمَةٌ فِي دُوَلٍ كَثِيرَةٍ حَوْلَ الْعَالَمِ.", japanese: "この技術は世界中の多くの国で使用されています。" }
    ]
  },
  {
    id: 1051,
    title: "キスワ（カアバの幕）",
    category: "文化",
    level: "上級",
    contentVoweled: "كِسْوَةُ الْكَعْبَةِ هِيَ الْغِطَاءُ الْأَسْوَدُ الَّذِي يُزَيِّنُ بَيْتَ اللهِ الْحَرَامَ، وَتُصْنَعُ مِنَ الْحَرِيرِ الطَّبِيعِيِّ الْخَالِصِ الْمَصْبُوغِ بِاللَّوْنِ الْأَسْوَدِ. يَتِمُّ تَطْرِيزُ الْآيَاتِ الْقُرْآنِيَّةِ عَلَيْهَا بِاسْتِخْدَامِ أَسْلَاكٍ مِنَ الذَّهَبِ وَالْفِضَّةِ فِي مَصْنَعٍ خَاصٍّ بِمَكَّةَ الْمُكَرَّمَةِ. يَتِمُّ اسْتِبْدَالُ الْكِسْوَةِ مَرَّةً وَاحِدَةً كُلَّ عَامٍ فِي مَوْسِمِ الْحَجِّ، وَتُعْتَبَرُ هَذِهِ الْعَمَلِيَّةُ مَظْهَرًا مِنْ مَظَاهِرِ التَّعْظِيمِ وَالتَّشْرِيفِ لِلْكَعْبَةِ الْمُشَرَّفَةِ.",
    contentPlain: "كسوة الكعبة هي الغطاء الأسود الذي يزين بيت الله الحرام، وتصنع من الحرير الطبيعي الخالص المصبوغ باللون الأسود. يتم تطريز الآيات القرآنية عليها باستخدام أسلاك من الذهب والفضة في مصنع خاص بمكة المكرمة. يتم استبدال الكسوة مرة واحدة كل عام في موسم الحج، وتعتبر هذه العملية مظهرا من مظاهر التعظيم والتشريف للكعبة المشرفة.",
    vocabList: [
      { word: "حَرِير", meaning: "シルク/絹" },
      { word: "تَطْرِيز", meaning: "刺繍" },
      { word: "ذَهَب", meaning: "金" },
      { word: "اسْتِبْدَال", meaning: "交換" }
    ],
    questions: [
      { id: 10511, type: "reading", text: "キスワは何で作られていますか？", options: ["綿", "純粋な天然シルク", "ナイロン", "羊毛"], correctIndex: 1, explanation: "「الحرير الطبيعي الخالص (純粋な天然シルク)」です。" },
      { id: 10512, type: "reading", text: "刺繍には何が使われますか？", options: ["黒い糸", "金と銀の線（糸）", "プラスチック", "インク"], correctIndex: 1, explanation: "「أسلاك من الذهب والفضة」です。" },
      { id: 10513, type: "reading", text: "いつ交換されますか？", options: ["毎月", "毎年ハッジの時期に", "10年ごと", "ラマダン中"], correctIndex: 1, explanation: "「مرة واحدة كل عام في موسم الحج」です。" },
      { id: 10514, type: "vocabulary", text: "「مَصْبُوغ」の意味は？", options: ["洗われた", "染められた", "切られた", "売られた"], correctIndex: 1, explanation: "Dyed（染められた）です。" },
      { id: 10515, type: "grammar", text: "「装飾する」", options: ["يُزَيِّنُ", "يُخَرِّبُ", "يَبْنِي", "يَهْدِمُ"], correctIndex: 0, explanation: "「Yuzayyinu (Decorates)」です。" },
      // 上級文法問題
      { id: 10516, type: "grammar_advanced", text: "「يتم تطريز الآيات」の「الآيات」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "「Taṭrīz (刺繍すること)」という動名詞の後に続くイダーファの第2要素（属格）です。女性規則複数（Jam' Mu'annath Sālim）の属格はカスラを取ります。" },
      { id: 10517, type: "grammar_advanced", text: "「باستخدام أسلاك」の「أسلاك」の正しい語尾は？", options: ["in (タンウィーン・カスラ)", "an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "a (ファトハ)"], correctIndex: 0, explanation: "「Istikhdām」の後のイダーファ第2要素（属格）です。非限定名詞ではないので、タンウィーン・カスラを取ります。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "يَعْمَلُ فِي مَصْنَعِ الْكِسْوَةِ أَمْهَرُ الْحِرَفِيِّينَ السُّعُودِيِّينَ.", japanese: "キスワ工場では最も熟練したサウジの職人たちが働いています。" },
      { speaker: "記事", arabic: "تَزِنُ الْكِسْوَةُ مِئَاتِ الْكِيلُوجْرَامَاتِ.", japanese: "キスワの重さは数百キログラムになります。" },
      { speaker: "記事", arabic: "الْحِزَامُ الْمُطَرَّزُ يُحِيطُ بِأَعْلَى الْكَعْبَةِ.", japanese: "刺繍された帯がカアバの上部を囲んでいます。" },
      { speaker: "記事", arabic: "الْكِسْوَةُ الْقَدِيمَةُ تُقَطَّعُ وَتُهْدَى لِكِبَارِ الشَّخْصِيَّاتِ.", japanese: "古いキスワは裁断され、要人たちに贈られます。" }
    ]
  },
  {
    id: 1052,
    title: "サウジ映画の躍進",
    category: "社会",
    level: "上級",
    contentVoweled: "يَشْهَدُ قِطَاعُ السِّينِمَا فِي السُّعُودِيَّةِ نُمُوًّا مُتَسَارِعًا مُنْذُ إِعَادَةِ فَتْحِ دُورِ الْعَرْضِ فِي عَامِ 2018. بَرَزَتْ مَوَاهِبُ سُعُودِيَّةٌ شَابَّةٌ أَنْتَجَتْ أَفْلَامًا نَالَتْ جَوَائِزَ فِي مَهْرَجَانَاتٍ عَالَمِيَّةٍ مِثْلَ 'الْبَحْرِ الْأَحْمَرِ السِّينِمَائِيِّ'. تَدْعَمُ الدَّوْلَةُ صِنَاعَةَ الْأَفْلَامِ لِتَعْزِيزِ الثَّقَافَةِ الْمَحَلِّيَّةِ وَرِوَايَةِ الْقِصَصِ السُّعُودِيَّةِ لِلْعَالَمِ، مِمَّا يَخْلُقُ فُرَصَ عَمَلٍ جَدِيدَةً فِي مَجَالَاتِ التَّمْثِيلِ وَالْإِخْرَاجِ وَالْإِنْتَاجِ.",
    contentPlain: "يشهد قطاع السينما في السعودية نموا متسارعا منذ إعادة فتح دور العرض في عام 2018. برزت مواهب سعودية شابة أنتجت أفلاما نالت جوائز في مهرجانات عالمية مثل 'البحر الأحمر السينمائي'. تدعم الدولة صناعة الأفلام لتعزيز الثقافة المحلية ورواية القصص السعودية للعالم، مما يخلق فرص عمل جديدة في مجالات التمثيل والإخراج والإنتاج.",
    vocabList: [
      { word: "سِينِمَا", meaning: "映画/映画館" },
      { word: "نُمُوّ", meaning: "成長" },
      { word: "إِخْرَاج", meaning: "演出/監督" },
      { word: "جَائِزَة", meaning: "賞" }
    ],
    questions: [
      { id: 10521, type: "reading", text: "映画館はいつ再開されましたか？", options: ["2000年", "2018年", "2030年", "昨日"], correctIndex: 1, explanation: "「في عام 2018」です。" },
      { id: 10522, type: "reading", text: "サウジ映画の現状は？", options: ["衰退している", "急速に成長し賞を獲得している", "誰も見ていない", "輸入だけしている"], correctIndex: 1, explanation: "「نموا متسارعا... نالت جوائز」です。" },
      { id: 10523, type: "reading", text: "映画産業支援の目的は？", options: ["お金の無駄遣い", "サウジの物語を世界に伝える", "俳優を減らす", "映画館を閉める"], correctIndex: 1, explanation: "「رواية القصص السعودية للعالم」です。" },
      { id: 10524, type: "vocabulary", text: "「مَوْهِبَة」の意味は？", options: ["才能/タレント", "お金", "時間", "場所"], correctIndex: 0, explanation: "Talent（才能）です。" },
      { id: 10525, type: "grammar", text: "「獲得しました」", options: ["نَالَتْ", "خَسِرَتْ", "أَعْطَتْ", "بَاعَتْ"], correctIndex: 0, explanation: "「Nālat (Won/Obtained)」です。" },
      // 上級文法問題
      { id: 10526, type: "grammar_advanced", text: "「إعادة فتح دور العرض」の「دور」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "「Fatḥ (開店)」という動名詞の後のイダーファ第2要素（属格）です。「Dūr」は「Dār (家/館)」の複数形です。" },
      { id: 10527, type: "grammar_advanced", text: "「نالت جوائز」の「جوائز」の正しい語尾は？", options: ["a (ファトハ・タンウィーンなし)", "an (タンウィーン・ファトハ)", "i (カスラ)", "u (ダンマ)"], correctIndex: 0, explanation: "「Nālat (獲得した)」の目的語（対格）ですが、「Jawā'iz」は非限定名詞（Mumnū' min al-ṣarf）なので、タンウィーンなしのファトハを取ります。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "فِيلْمُ 'حَدُّ الطَّارِ' كَانَ مِنْ الْأَفْلَامِ النَّاجِحَةِ.", japanese: "映画『The Tambour of Retribution』は成功した作品の一つでした。" },
      { speaker: "記事", arabic: "تَمَّ تَصْوِيرُ أَفْلَامٍ عَالَمِيَّةٍ فِي الْعُلَا.", japanese: "アル・ウラーで国際的な映画が撮影されました。" },
      { speaker: "記事", arabic: "السِّينِمَا هِيَ مِرْآةُ الْمُجْتَمَعِ.", japanese: "映画は社会の鏡です。" },
      { speaker: "記事", arabic: "نَطْمَحُ لِلْوُصُولِ إِلَى الْأُوسْكَارِ.", japanese: "私たちはオスカーへの到達を熱望しています。" }
    ]
  },
  {
    id: 1053,
    title: "キング・サルマン・パーク",
    category: "社会",
    level: "上級",
    contentVoweled: "حَدِيقَةُ الْمَلِكِ سَلْمَانَ فِي الرِّيَاضِ سَتَكُونُ أَكْبَرَ حَدِيقَةِ مُدُنٍ فِي الْعَالَمِ، حَيْثُ تَزِيدُ مِسَاحَتُهَا عَنْ 16 كِيلُومِتْرًا مُرَبَّعًا. يَهْدِفُ الْمَشْرُوعُ إِلَى تَحْسِينِ جَوْدَةِ الْحَيَاةِ فِي الْعَاصِمَةِ وَزِيَادَةِ نَصِيبِ الْفَرْدِ مِنَ الْمَسَاحَاتِ الْخَضْرَاءِ. سَتَضُمُّ الْحَدِيقَةُ مَجْمَعًا لِلْفُنُونِ وَمَسْرَحًا وَطَنِيًّا وَمَتَاحِفَ وَمَلَاعِبَ رِيَاضِيَّةً، لِتَكُونَ رِئَةً خَضْرَاءَ وَمَرْكَزًا ثَقَافِيًّا وَتَرْفِيهِيًّا لِلسُّكَّانِ وَالزُّوَّارِ.",
    contentPlain: "حديقة الملك سلمان في الرياض ستكون أكبر حديقة مدن في العالم، حيث تزيد مساحتها عن 16 كيلومترا مربعا. يهدف المشروع إلى تحسين جودة الحياة في العاصمة وزيادة نصيب الفرد من المساحات الخضراء. ستضم الحديقة مجمعا للفنون ومسرحا وطنيا ومتاحف وملاعب رياضية، لتكون رئة خضراء ومركزا ثقافيا وترفيهيا للسكان والزوار.",
    vocabList: [
      { word: "حَدِيقَة", meaning: "公園/庭" },
      { word: "مِسَاحَة", meaning: "面積/スペース" },
      { word: "رِئَة", meaning: "肺" },
      { word: "فَرْد", meaning: "個人" }
    ],
    questions: [
      { id: 10531, type: "reading", text: "キング・サルマン・パークの特徴は？", options: ["世界一小さい", "世界最大の都市公園になる予定", "砂漠の真ん中にある", "動物園だけ"], correctIndex: 1, explanation: "「أكبر حديقة مدن في العالم」です。" },
      { id: 10532, type: "reading", text: "主な目的は？", options: ["ビルを増やす", "生活の質（QOL）の向上と緑地の増加", "交通を減らす", "水を売る"], correctIndex: 1, explanation: "「تحسين جودة الحياة... وزيادة... المساحات الخضراء」です。" },
      { id: 10533, type: "reading", text: "公園には何が含まれますか？", options: ["工場", "芸術複合施設、劇場、博物館", "空港", "何もなし"], correctIndex: 1, explanation: "「مجمعا للفنون ومسرحا وطنيا ومتاحف」です。" },
      { id: 10534, type: "vocabulary", text: "「زَائِر」の意味は？", options: ["住人", "訪問者", "敵", "友達"], correctIndex: 1, explanation: "Visitor（訪問者）です。" },
      { id: 10535, type: "grammar", text: "「なります（未来）」", options: ["سَتَكُونُ", "كَانَتْ", "لَيْسَتْ", "أَصْبَحَتْ"], correctIndex: 0, explanation: "「Sa-takūnu (Will be)」です。" },
      // 上級文法問題
      { id: 10536, type: "grammar_advanced", text: "「16 كيلومترا」の「كيلومترا」の正しい語尾は？", options: ["an (タンウィーン・ファトハ)", "in (タンウィーン・カスラ)", "un (タンウィーン・ダンマ)", "a (ファトハ)"], correctIndex: 0, explanation: "数詞「16 ('Ashara）」の後の名詞（Tamyīz）は単数・対格（Manṣūb）になります。" },
      { id: 10537, type: "grammar_advanced", text: "「ومتاحف وملاعب」の「متاحف」の正しい語尾は？", options: ["a (ファトハ・タンウィーンなし)", "an (タンウィーン・ファトハ)", "in (タンウィーン・カスラ)", "un (タンウィーン・ダンマ)"], correctIndex: 0, explanation: "「Masraḥan (劇場・対格)」に接続された（Ma'ṭūf）言葉ですが、「Matāḥif」は非限定名詞（Mumnū' min al-ṣarf）なので、対格でもタンウィーンを取らずファトハ一文字になります。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "تَقَعُ الْحَدِيقَةُ فِي مَوْقِعِ الْمَطَارِ الْقَدِيمِ.", japanese: "公園は旧空港の跡地に位置しています。" },
      { speaker: "記事", arabic: "سَتَحْتَوِي عَلَى مَسَارَاتٍ لِلْمَشْيِ وَرُكُوبِ الدَّرَّاجَاتِ.", japanese: "ウォーキングやサイクリングのためのコースが含まれます。" },
      { speaker: "記事", arabic: "الْمَشْرُوعُ يُعَزِّزُ الصِّحَّةَ الْعَامَّةَ.", japanese: "プロジェクトは公衆衛生を増進します。" },
      { speaker: "記事", arabic: "إِنَّهَا هَدِيَّةُ الْمَلِكِ لِسُكَّانِ الرِّيَاضِ.", japanese: "それはリヤド住民への王からの贈り物です。" }
    ]
  },
  {
    id: 1054,
    title: "騎士詩人アンタラ",
    category: "文学",
    level: "上級",
    contentVoweled: "عَنْتَرَةُ بْنُ شَدَّادٍ هُوَ أَشْهَرُ فُرْسَانِ الْعَرَبِ وَشُعَرَائِهِمْ فِي الْعَصْرِ الْجَاهِلِيِّ. وُلِدَ عَبْدًا أَسْوَدَ اللَّوْنِ، لَكِنَّهُ انْتَزَعَ حُرِّيَّتَهُ بِشَجَاعَتِهِ وَقُوَّتِهِ فِي الْمَعَارِكِ دِفَاعًا عَنْ قَبِيلَتِهِ 'عَبْس'. اشْتُهِرَ بِقِصَّةِ حُبِّهِ لِابْنَةِ عَمِّهِ 'عَبْلَة' الَّتِي خَلَّدَهَا فِي شِعْرِهِ الرَّقِيقِ. جَمَعَ شِعْرُهُ بَيْنَ الْفَخْرِ بِالذَّاتِ وَالْفُرُوسِيَّةِ وَالْغَزَلِ الْعَفِيفِ، وَتُعْتَبَرُ مُعَلَّقَتُهُ مِنْ عُيُونِ الشِّعْرِ الْعَرَبِيِّ.",
    contentPlain: "عنترة بن شداد هو أشهر فرسان العرب وشعرائهم في العصر الجاهلي. ولد عبدا أسود اللون، لكنه انتزع حريته بشجاعته وقوته في المعارك دفاعا عن قبيلته 'عبس'. اشتهر بقصة حبه لابنة عمه 'عبلة' التي خلدها في شعره الرقيق. جمع شعره بين الفخر بالذات والفروسية والغزل العفيف، وتعتبر معلقته من عيون الشعر العربي.",
    vocabList: [
      { word: "فَارِس", meaning: "騎士（複：フルサーン）" },
      { word: "عَبْد", meaning: "奴隷" },
      { word: "حُرِّيَّة", meaning: "自由" },
      { word: "غَزَل", meaning: "恋愛詩/ガザル" }
    ],
    questions: [
      { id: 10541, type: "reading", text: "アンタラはどんな人物でしたか？", options: ["王様", "有名な騎士で詩人", "商人", "農民"], correctIndex: 1, explanation: "「أشهر فرسان العرب وشعرائهم」です。" },
      { id: 10542, type: "reading", text: "彼はどうやって自由を勝ち取りましたか？", options: ["お金で", "勇気と部族を守る戦いによって", "逃亡して", "詩を書いて"], correctIndex: 1, explanation: "「بشجاعته وقوته في المعارك (戦いにおける勇気と力で)」です。" },
      { id: 10543, type: "reading", text: "彼の恋人の名前は？", options: ["ライラ", "アブラ", "ヒンド", "サルマ"], correctIndex: 1, explanation: "「عبلة」です。" },
      { id: 10544, type: "vocabulary", text: "「دِفَاع」の意味は？", options: ["攻撃", "防御/守ること", "逃げ", "勝ち"], correctIndex: 1, explanation: "Defense（防御）です。" },
      { id: 10545, type: "grammar", text: "「勝ち取りました/奪い取りました」", options: ["انْتَزَعَ", "أَعْطَى", "فَقَدَ", "نَسِيَ"], correctIndex: 0, explanation: "「Intaza'a (Snatched/Wrested)」です。" },
      // 上級文法問題
      { id: 10546, type: "grammar_advanced", text: "「دفاعا عن قبيلته」の「دفاعا」の正しい語尾は？", options: ["an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "in (タンウィーン・カスラ)", "a (ファトハ)"], correctIndex: 0, explanation: "「〜を守るために」という理由を表す「目的のために対格（Maf'ūl li-ajlihi）」なので、タンウィーン・ファトハがつきます。" },
      { id: 10547, type: "grammar_advanced", text: "「من عيون الشعر」の「عيون」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "前置詞「Min」の後の名詞（Ism Majrūr）なので属格となり、カスラがつきます（イダーファの第1要素なのでタンウィーンはなし）。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "عَانَى عَنْتَرَةُ مِنَ التَّمْيِيزِ بِسَبَبِ لَوْنِهِ.", japanese: "アンタラは色のせいで差別に苦しみました。" },
      { speaker: "記事", arabic: "أَثْبَتَ أَنَّ الْقِيمَةَ بِالْأَفْعَالِ لَا بِالْأَنْسَابِ.", japanese: "彼は価値が行いによるものであり、血統ではないことを証明しました。" },
      { speaker: "記事", arabic: "قَالَ: وَلَقَدْ ذَكَرْتُكِ وَالرِّمَاحُ نَوَاهِلٌ مِنِّي.", japanese: "彼は言いました。「槍が私に突き刺さろうとする時も、私はあなた（アブラ）を想った。」" },
      { speaker: "記事", arabic: "قِصَّتُهُ رَمْزٌ لِلْبُطُولَةِ وَالْحُبِّ.", japanese: "彼の物語は英雄的行為と愛の象徴です。" }
    ]
  },
  {
    id: 1055,
    title: "物流ハブとしてのサウジ",
    category: "経済",
    level: "上級",
    contentVoweled: "تَتَمَتَّعُ الْمَمْلَكَةُ بِمَوْقِعٍ جُغْرَافِيٍّ اسْتِرَاتِيجِيٍّ يَرْبِطُ بَيْنَ ثَلَاثِ قَارَّاتٍ: آسِيَا وَأَفْرِيقِيَا وَأُورُوبَّا. تَهْدِفُ الِاسْتِرَاتِيجِيَّةُ الْوَطَنِيَّةُ لِلنَّقْلِ وَالْخِدْمَاتِ اللُّوجِسْتِيَّةِ إِلَى تَحْوِيلِ السُّعُودِيَّةِ إِلَى مَرْكَزٍ لُوجِسْتِيٍّ عَالَمِيٍّ، مِنْ خِلَالِ تَطْوِيرِ الْمَوَانِئِ وَالْمَطَارَاتِ وَشَبَكَاتِ السِّكَكِ الْحَدِيدِيَّةِ. سَيُسْهِمُ ذَلِكَ فِي زِيَادَةِ التَّبَادُلِ التِّجَارِيِّ وَتَسْهِيلِ حَرَكَةِ الْبَضَائِعِ حَوْلَ الْعَالَمِ، مِمَّا يَدْعَمُ الِاقْتِصَادَ غَيْرَ النِّفْطِيِّ.",
    contentPlain: "تتمتع المملكة بموقع جغرافي استراتيجي يربط بين ثلاث قارات: آسيا وأفريقيا وأوروبا. تهدف الاستراتيجية الوطنية للنقل والخدمات اللوجستية إلى تحويل السعودية إلى مركز لوجستي عالمي، من خلال تطوير الموانئ والمطارات وشبكات السكك الحديدية. سيسهم ذلك في زيادة التبادل التجاري وتسهيل حركة البضائع حول العالم، مما يدعم الاقتصاد غير النفطي.",
    vocabList: [
      { word: "قَارَّة", meaning: "大陸" },
      { word: "مِينَاء", meaning: "港（複：マワーニ）" },
      { word: "بَضَائِع", meaning: "商品/貨物" },
      { word: "شَبَكَة", meaning: "ネットワーク/網" }
    ],
    questions: [
      { id: 10551, type: "reading", text: "サウジの地理的利点は？", options: ["海がない", "3つの大陸を結ぶ戦略的位置", "孤立している", "寒い気候"], correctIndex: 1, explanation: "「موقع... يربط بين ثلاث قارات」です。" },
      { id: 10552, type: "reading", text: "国家戦略の目標は？", options: ["港を閉める", "世界的物流ハブへの転換", "観光を減らす", "農業を止める"], correctIndex: 1, explanation: "「تحويل السعودية إلى مركز لوجستي عالمي」です。" },
      { id: 10553, type: "reading", text: "開発されるインフラは？", options: ["家だけ", "港、空港、鉄道", "学校のみ", "公園"], correctIndex: 1, explanation: "「الموانئ والمطارات وشبكات السكك الحديدية」です。" },
      { id: 10554, type: "vocabulary", text: "「تَبَادُل」の意味は？", options: ["停止", "交換/交流", "戦い", "睡眠"], correctIndex: 1, explanation: "Exchange（交換）です。" },
      { id: 10555, type: "grammar", text: "「変換する」", options: ["تَحْوِيل", "بَقَاء", "ذَهَاب", "نِسْيَان"], correctIndex: 0, explanation: "「Taḥwīl (Transforming/Converting)」です。" },
      // 上級文法問題
      { id: 10556, type: "grammar_advanced", text: "「يربط بين ثلاث قارات」の「قارات」の正しい語尾は？", options: ["in (タンウィーン・カスラ)", "un (タンウィーン・ダンマ)", "an (タンウィーン・ファトハ)", "i (カスラ)"], correctIndex: 0, explanation: "数詞「Thalāth (3)」の後の名詞（Tamyīz/Muḍāf Ilayhi）は複数・属格（Majrūr）となり、タンウィーン・カスラがつきます。" },
      { id: 10557, type: "grammar_advanced", text: "「تطوير الموانئ」の「الموانئ」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "「Mawāni'」は非限定名詞（Mumnū' min al-ṣarf）ですが、定冠詞「Al」がついているため、イダーファの第2要素（属格）として通常通りカスラを取ります。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "مِينَاءُ جِدَّةَ الْإِسْلَامِيُّ هُوَ الْأَكْبَرُ فِي الْبَحْرِ الْأَحْمَرِ.", japanese: "ジェッダ・イスラム港は紅海で最大です。" },
      { speaker: "記事", arabic: "تَمُرُّ نِسْبَةٌ كَبِيرَةٌ مِنَ التِّجَارَةِ الْعَالَمِيَّةِ عَبْرَ الْبَحْرِ الْأَحْمَرِ.", japanese: "世界貿易の大きな割合が紅海を通過します。" },
      { speaker: "記事", arabic: "تَطْوِيرُ الْمَنَاطِقِ اللُّوجِسْتِيَّةِ يَجْذِبُ الشَّرِكَاتِ الْعَالَمِيَّةَ.", japanese: "物流ゾーンの開発は世界的な企業を惹きつけます。" },
      { speaker: "記事", arabic: "الْهَدَفُ هُوَ رَفْعُ كَفَاءَةِ الِاسْتِيرَادِ وَالتَّصْدِيرِ.", japanese: "目標は輸出入の効率を高めることです。" }
    ]
  },
  {
    id: 1056,
    title: "サウジの火山（ハッラート）",
    category: "自然",
    level: "上級",
    contentVoweled: "قَدْ يَسْتَغْرِبُ الْبَعْضُ وُجُودَ بَرَاكِينَ فِي السُّعُودِيَّةِ، لَكِنَّ الْمَمْلَكَةَ تَضُمُّ الْعَدِيدَ مِنَ الْحُقُولِ الْبُرْكَانِيَّةِ الْخَامِدَةِ الْمَعْرُوفَةِ بِاسْمِ 'الْحَرَّاتِ'. أَشْهَرُهَا 'حَرَّةُ رَهَاط' وَ'حَرَّةُ خَيْبَر' الَّتِي تَحْتَوِي عَلَى فُوَّهَاتٍ بُرْكَانِيَّةٍ وَكُهُوفٍ (دُحُول) تَكَوَّنَتْ مِنَ الْحِمَمِ الْقَدِيمَةِ. هَذِهِ الْمَنَاطِقُ تُشَكِّلُ مَعَالِمَ جِيُولُوجِيَّةً فَرِيدَةً تَجْذِبُ الْبَاحِثِينَ وَالسُّيَّاحَ لِمُشَاهَدَةِ التَّبَايُنِ بَيْنَ الصُّخُورِ السَّوْدَاءِ وَالرِّمَالِ الصَّحْرَاوِيَّةِ.",
    contentPlain: "قد يستغرب البعض وجود براكين في السعودية، لكن المملكة تضم العديد من الحقول البركانية الخامدة المعروفة باسم 'الحرات'. أشهرها 'حرة رهاط' وحرة خيبر التي تحتوي على فوهات بركانية وكهوف (دحول) تكونت من الحمم القديمة. هذه المناطق تشكل معالم جيولوجية فريدة تجذب الباحثين والسياح لمشاهدة التباين بين الصخور السوداء والرمال الصحراوية.",
    vocabList: [
      { word: "بُرْكَان", meaning: "火山（複：バラキーン）" },
      { word: "خَامِد", meaning: "休火山の/静まった" },
      { word: "حِمَم", meaning: "溶岩" },
      { word: "كَهْف", meaning: "洞窟" }
    ],
    questions: [
      { id: 10561, type: "reading", text: "サウジに火山はありますか？", options: ["ない", "ある（ハッラートと呼ばれる休火山群）", "活動中の火山のみ", "海の底だけ"], correctIndex: 1, explanation: "「تضم العديد من الحقول البركانية... باسم الحرات」です。" },
      { id: 10562, type: "reading", text: "有名な場所の名前は？", options: ["リヤド", "ハッラト・ラハートやハイバル", "ダンマーム", "アブハ"], correctIndex: 1, explanation: "「حرة رهاط وحرة خيبر」です。" },
      { id: 10563, type: "reading", text: "そこには何がありますか？", options: ["水", "火口や溶岩洞窟", "森", "氷"], correctIndex: 1, explanation: "「فوهات بركانية وكهوف」です。" },
      { id: 10564, type: "vocabulary", text: "「بَاحِث」の意味は？", options: ["観光客", "研究者", "運転手", "子供"], correctIndex: 1, explanation: "Researcher（研究者）です。" },
      { id: 10565, type: "grammar", text: "「驚くかもしれません」", options: ["قَدْ يَسْتَغْرِبُ", "يَعْرِفُ", "يَتَأَكَّدُ", "يَنْسَى"], correctIndex: 0, explanation: "「Qad yastaghribu (Might be surprised)」です。" },
      // 上級文法問題
      { id: 10566, type: "grammar_advanced", text: "「وجود براكين」の「براكين」の正しい語尾は？", options: ["a (ファトハ)", "i (カスラ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "「Wujūda (存在)」の後のイダーファ第2要素（属格）ですが、「Barākīn」は非限定名詞（Mafā'īlパターン）なので、カスラではなくファトハを取ります。" },
      { id: 10567, type: "grammar_advanced", text: "「تشكل معالم جيولوجية」の「معالم」の正しい語尾は？", options: ["a (ファトハ・タンウィーンなし)", "an (タンウィーン・ファトハ)", "u (ダンマ)", "in (タンウィーン・カスラ)"], correctIndex: 0, explanation: "動詞「Tushakkilu (形成する)」の目的語（対格）ですが、「Ma'ālim」は非限定名詞なので、タンウィーンを取らずファトハ一文字になります。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "كَهْفُ 'أُمِّ جِرْسَانَ' هُوَ أَطْوَلُ كَهْفٍ بُرْكَانِيٍّ فِي الْعَالَمِ الْعَرَبِيِّ.", japanese: "「ウンム・ジルサーン」洞窟はアラブ世界で最も長い火山洞窟です。" },
      { speaker: "記事", arabic: "اللَّابَةُ السَّوْدَاءُ تُغَطِّي مِسَاحَاتٍ شَاسِعَةً.", japanese: "黒い溶岩が広大な面積を覆っています。" },
      { speaker: "記事", arabic: "الْقِدْرُ (جَبَلُ الْأَبْيَضِ) هُوَ بُرْكَانٌ نَادِرٌ لَوْنُهُ فَاتِحٌ.", japanese: "アル・キドル（白い山）は珍しい明るい色の火山です。" },
      { speaker: "記事", arabic: "هَذِهِ الْمَنَاطِقُ شَاهِدَةٌ عَلَى تَارِيخِ الْأَرْضِ الْجِيُولُوجِيِّ.", japanese: "これらの地域は地球の地質学的歴史の証人です。" }
    ]
  },
  {
    id: 1057,
    title: "マスマク城塞",
    category: "歴史",
    level: "上級",
    contentVoweled: "يَحْتَلُّ قَصْرُ الْمَصْمَكِ مَكَانَةً بَارِزَةً فِي تَارِيخِ الْمَمْلَكَةِ الْعَرَبِيَّةِ السُّعُودِيَّةِ، إِذْ يُمَثِّلُ رَمْزًا لِتَوْحِيدِ الْبِلَادِ وَانْطِلَاقِ الدَّوْلَةِ السُّعُودِيَّةِ الثَّالِثَةِ. فِي فَجْرِ الْخَامِسِ مِنْ شَوَّال عَامَ 1319هـ، قَادَ الْمَلِكُ عَبْدُ الْعَزِيزِ رِجَالَهُ لِاسْتِعَادَةِ الرِّيَاضِ، وَنَجَحُوا فِي اقْتِحَامِ هَذَا الْحِصْنِ الْمَنِيعِ. لَا يَزَالُ بَابُ الْقَصْرِ يَحْتَفِظُ بِسِنِّ الرُّمْحِ الَّذِي كُسِرَ فِيهِ أَثْنَاءَ الْمَعْرَكَةِ، وَهُوَ شَاهِدٌ حَيٌّ عَلَى شَجَاعَةِ الْمُؤَسِّسِ وَرِجَالِهِ.",
    contentPlain: "يحتل قصر المصمك مكانة بارزة في تاريخ المملكة العربية السعودية، إذ يمثل رمزا لتوحيد البلاد وانطلاق الدولة السعودية الثالثة. في فجر الخامس من شوال عام 1319هـ، قاد الملك عبد العزيز رجاله لاستعادة الرياض، ونجحوا في اقتحام هذا الحصن المنيع. لا يزال باب القصر يحتفظ بسن الرمح الذي كسر فيه أثناء المعركة، وهو شاهد حي على شجاعة المؤسس ورجاله.",
    vocabList: [
      { word: "حِصْن", meaning: "城塞/砦" },
      { word: "اقْتِحَام", meaning: "突入/攻略" },
      { word: "رُمْح", meaning: "槍" },
      { word: "تَوْحِيد", meaning: "統一" }
    ],
    questions: [
      { id: 10571, type: "reading", text: "マスマク城塞は何のシンボルですか？", options: ["農業の発展", "国の統一と第三次サウジ王国の始まり", "古代の貿易", "芸術"], correctIndex: 1, explanation: "「رمزا لتوحيد البلاد وانطلاق الدولة السعودية الثالثة」です。" },
      { id: 10572, type: "reading", text: "リヤド奪還の戦いで何が起こりましたか？", options: ["城が燃えた", "城塞への突入に成功した", "和平交渉をした", "諦めた"], correctIndex: 1, explanation: "「نجحوا في اقتحام هذا الحصن (砦への突入に成功した)」です。" },
      { id: 10573, type: "reading", text: "城のドアには何が残っていますか？", options: ["古い鍵", "折れた槍の穂先", "王の名前", "金貨"], correctIndex: 1, explanation: "「سن الرمح الذي كسر فيه (そこで折れた槍の穂先)」です。" },
      { id: 10574, type: "vocabulary", text: "「مَكَانَة」の意味は？", options: ["場所", "地位/ステータス", "時間", "機械"], correctIndex: 1, explanation: "Status/Position（地位）です。" },
      { id: 10575, type: "grammar", text: "「率いました」", options: ["قَادَ", "تَبِعَ", "مَشَى", "نَامَ"], correctIndex: 0, explanation: "「Qāda (Led)」です。" },
      // 上級文法問題
      { id: 10576, type: "grammar_advanced", text: "「يحتل قصر المصمك」の「قصر」の正しい語尾は？", options: ["u (ダンマ)", "a (ファトハ)", "i (カスラ)", "un (タンウィーン)"], correctIndex: 0, explanation: "動詞「Yaḥtallu (占める)」の主語（Fā'il）なので主格（Marfū'）となりダンマがつきます。" },
      { id: 10577, type: "grammar_advanced", text: "「الذي كسر فيه」の「كسر」の態は？", options: ["受動態（折られた）", "能動態（折った）", "命令形", "完了形（能動）"], correctIndex: 0, explanation: "文脈的に「（槍が）折れた/折られた」という意味なので受動態（Kusira）です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "بُنِيَ الْمَصْمَكُ مِنَ الطِّينِ وَاللَّبِنِ.", japanese: "マスマクは泥と日干し煉瓦で建てられました。" },
      { speaker: "記事", arabic: "تَحَوَّلَ الْقَصْرُ الْآنَ إِلَى مُتْحَفٍ يَحْكِي قِصَّةَ التَّوْحِيدِ.", japanese: "城は現在、統一の物語を語る博物館に変わりました。" },
      { speaker: "記事", arabic: "يَقَعُ فِي قَلْبِ الْعَاصِمَةِ الرِّيَاضِ.", japanese: "それは首都リヤドの中心に位置しています。" },
      { speaker: "記事", arabic: "كَلِمَةُ 'مَصْمَك' تَعْنِي الْبِنَاءَ الْمُرْتَفِعَ الْقَوِيَّ.", japanese: "「マスマク」という言葉は、高く強い建物を意味します。" }
    ]
  },
  {
    id: 1058,
    title: "外科医アル・ザフラ−ウィー",
    category: "歴史",
    level: "上級",
    contentVoweled: "يُلَقَّبُ أَبُو الْقَاسِمِ الزَّهْرَاوِيُّ بِأَبِي الْجِرَاحَةِ الْحَدِيثَةِ، حَيْثُ كَانَ أَعْظَمَ جَرَّاحٍ فِي الْعُصُورِ الْوُسْطَى. اخْتَرَعَ أَكْثَرَ مِنْ 200 أَدَاةٍ جِرَاحِيَّةٍ لَا يَزَالُ بَعْضُهَا يُسْتَخْدَمُ حَتَّى الْيَوْمِ، مِثْلَ الْمِشْرَطِ وَالْمِقَصِّ الْجِرَاحِيِّ. كَانَ أَوَّلَ مَنِ اسْتَخْدَمَ خُيُوطَ 'أَمْعَاءِ الْقِطِّ' فِي الْعَمَلِيَّاتِ الدَّاخِلِيَّةِ لِأَنَّ الْجِسْمَ يَمْتَصُّهَا، وَوَضَعَ قَوَاعِدَ لِلتَّعْقِيمِ وَلِلْعَلَاقَةِ بَيْنَ الطَّبِيبِ وَالْمَرِيضِ فِي كِتَابِهِ الْمَوْسُوعِيِّ 'التَّصْرِيف'.",
    contentPlain: "يلقب أبو القاسم الزهراوي بأبي الجراحة الحديثة، حيث كان أعظم جراح في العصور الوسطى. اخترع أكثر من 200 أداة جراحية لا يزال بعضها يستخدم حتى اليوم، مثل المشرط والمقص الجراحي. كان أول من استخدم خيوط 'أمعاء القط' في العمليات الداخلية لأن الجسم يمتصها، ووضع قواعد للتعقيم وللعلاقة بين الطبيب والمريض في كتابه الموسوعي 'التصريف'.",
    vocabList: [
      { word: "جِرَاحَة", meaning: "外科/手術" },
      { word: "مِشْرَط", meaning: "メス" },
      { word: "تَعْقِيم", meaning: "殺菌/消毒" },
      { word: "أَمْعَاء", meaning: "腸" }
    ],
    questions: [
      { id: 10581, type: "reading", text: "アル・ザフラ−ウィーの称号は？", options: ["数学の父", "近代外科の父", "化学の父", "天文学の王"], correctIndex: 1, explanation: "「أبي الجراحة الحديثة」です。" },
      { id: 10582, type: "reading", text: "彼は何を発明しましたか？", options: ["薬", "200以上の外科手術器具", "顕微鏡", "注射器"], correctIndex: 1, explanation: "「اخترع أكثر من 200 أداة جراحية」です。" },
      { id: 10583, type: "reading", text: "彼が導入した「キャットガット（腸線）」の特徴は？", options: ["非常に強い", "体が吸収する（溶ける）", "安い", "痛くない"], correctIndex: 1, explanation: "「الجسم يمتصها (体がそれを吸収する)」ため、抜糸の必要がありません。" },
      { id: 10584, type: "vocabulary", text: "「أَدَاة」の意味は？", options: ["薬", "道具/ツール", "本", "部屋"], correctIndex: 1, explanation: "Tool/Instrument（道具）です。" },
      { id: 10585, type: "grammar", text: "「あだ名で呼ばれる」", options: ["يُلَقَّبُ بِـ", "يُنَادَى", "يُسَمَّى", "يَقُولُ"], correctIndex: 0, explanation: "「Yulaqqabu bi- (Is nicknamed/titled)」です。" },
      // 上級文法問題
      { id: 10586, type: "grammar_advanced", text: "「بأبي الجراحة」の「أبي」の正しい格は？", options: ["属格（前置詞の後だから）", "主格（主語だから）", "対格（目的語だから）", "対格（例外）"], correctIndex: 0, explanation: "前置詞「Bi」の後の「Abū」は五つの名詞（Asmā' Khamsa）の一つなので、属格で「Abī」となります。" },
      { id: 10587, type: "grammar_advanced", text: "「أعظم جراح」の「جراح」の正しい語尾は？", options: ["in (タンウィーン・カスラ)", "un (タンウィーン・ダンマ)", "an (タンウィーン・ファトハ)", "i (カスラ)"], correctIndex: 0, explanation: "最上級「A'ẓam」の後の名詞（Muḍāf Ilayhi）なので属格（Majrūr）となり、タンウィーン・カスラがつきます。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "وُلِدَ الزَّهْرَاوِيُّ وَعَاشَ فِي قُرْطُبَةَ بِالْأَنْدَلُسِ.", japanese: "ザフラ−ウィーはアンダルスのコルドバで生まれ、暮らしました。" },
      { speaker: "記事", arabic: "كِتَابُهُ كَانَ الْمَرْجِعَ الْأَسَاسِيَّ لِلْجِرَاحَةِ فِي أُورُوبَّا لِخَمْسَةِ قُرُونٍ.", japanese: "彼の本は5世紀にわたりヨーロッパで外科の主要な参考文献でした。" },
      { speaker: "記事", arabic: "رَسَمَ صُوَرًا دَقِيقَةً لِلْأَدَوَاتِ الَّتِي ابْتَكَرَهَا.", japanese: "彼は発明した道具の正確な図を描きました。" },
      { speaker: "記事", arabic: "أَكَّدَ عَلَى أَهَمِّيَّةِ التَّشْرِيحِ لِفَهْمِ جِسْمِ الْإِنْسَانِ.", japanese: "彼は人体を理解するための解剖の重要性を強調しました。" }
    ]
  },
  {
    id: 1059,
    title: "トロヘナ（山岳観光）",
    category: "社会",
    level: "上級",
    contentVoweled: "تُرُوجِينَا هِيَ وِجْهَةُ السِّيَاحَةِ الْجَبَلِيَّةِ الْعَالَمِيَّةِ فِي نِيُوم، وَسَتَكُونُ أَوَّلَ مَكَانٍ فِي الْخَلِيجِ الْعَرَبِيِّ يُتِيحُ التَّزَلُّجَ عَلَى الثَّلْجِ فِي الْهَوَاءِ الطَّلْقِ. يَقَعُ الْمَشْرُوعُ فِي جِبَالِ السَّرَوَاتِ حَيْثُ تَنْخَفِضُ دَرَجَاتُ الْحَرَارَةِ إِلَى مَا دُونَ الصِّفْرِ فِي الشِّتَاءِ. سَتَسْتَضِيفُ تُرُوجِينَا دَوْرَةَ الْأَلْعَابِ الْآسِيَوِيَّةِ الشَّتْوِيَّةِ عَامَ 2029، مِمَّا يَعْكِسُ طُمُوحَ الْمَمْلَكَةِ فِي تَحْوِيلِ الصَّحْرَاءِ إِلَى وِجْهَةٍ شَتْوِيَّةٍ عَالَمِيَّةٍ.",
    contentPlain: "تروجينا هي وجهة السياحة الجبلية العالمية في نيوم، وستكون أول مكان في الخليج العربي يتيح التزلج على الثلج في الهواء الطلق. يقع المشروع في جبال السروات حيث تنخفض درجات الحرارة إلى ما دون الصفر في الشتاء. ستستضيف تروجينا دورة الألعاب الآسيوية الشتوية عام 2029، مما يعكس طموح المملكة في تحويل الصحراء إلى وجهة شتوية عالمية.",
    vocabList: [
      { word: "تَزَلُّج", meaning: "スキー/滑走" },
      { word: "هَوَاء طَلْق", meaning: "野外/アウトドア" },
      { word: "دَوْرَة", meaning: "大会/サイクル" },
      { word: "طُمُوح", meaning: "野心/野望" }
    ],
    questions: [
      { id: 10591, type: "reading", text: "トロヘナ（Trojena）は何の一部ですか？", options: ["リヤド", "ジェッダ", "NEOM（ニヨーム）", "ダンマーム"], correctIndex: 2, explanation: "「في نيوم」にあるプロジェクトです。" },
      { id: 10592, type: "reading", text: "湾岸地域で初めて可能になることは？", options: ["サーフィン", "野外スキー", "登山", "キャンプ"], correctIndex: 1, explanation: "「التزلج على الثلج في الهواء الطلق (野外での雪上スキー)」です。" },
      { id: 10593, type: "reading", text: "2029年に何を開催しますか？", options: ["ワールドカップ", "夏季オリンピック", "冬季アジア大会", "博覧会"], correctIndex: 2, explanation: "「دورة الألعاب الآسيوية الشتوية (Asian Winter Games)」です。" },
      { id: 10594, type: "vocabulary", text: "「ثَلْج」の意味は？", options: ["水", "雪/氷", "砂", "岩"], correctIndex: 1, explanation: "Snow/Ice（雪）です。" },
      { id: 10595, type: "grammar", text: "「可能にする（Enable/Allow）」", options: ["يُتِيحُ", "يَمْنَعُ", "يَأْخُذُ", "يَقُولُ"], correctIndex: 0, explanation: "「Yutīḥu (Allows/Enables)」です。" },
      // 上級文法問題
      { id: 10596, type: "grammar_advanced", text: "「ستكون أول مكان」の「أول」の正しい語尾は？", options: ["a (ファトハ)", "u (ダンマ)", "i (カスラ)", "un (タンウィーン)"], correctIndex: 0, explanation: "「Takūnu (Kāna)」の述語（Khabar Kāna）なので対格（Manṣūb）となり、ファトハがつきます。" },
      { id: 10597, type: "grammar_advanced", text: "「درجات الحرارة」の「درجات」の正しい語尾は？", options: ["u (ダンマ)", "a (ファトハ)", "i (カスラ)", "un (タンウィーン)"], correctIndex: 0, explanation: "動詞「Tankhafiḍu (下がる)」の主語（Fā'il）なので主格となりダンマがつきます。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "يَتَمَيَّزُ الْمَشْرُوعُ بِتَصْمِيمٍ هَنْدَسِيٍّ مُبْتَكَرٍ.", japanese: "プロジェクトは革新的な建築デザインが特徴です。" },
      { speaker: "記事", arabic: "سَتَحْتَوِي عَلَى بُحَيْرَةٍ اصْطِنَاعِيَّةٍ ضَخْمَةٍ فِي قِمَّةِ الْجَبَلِ.", japanese: "山頂には巨大な人工湖が含まれる予定です。" },
      { speaker: "記事", arabic: "تُرُوجِينَا تُقَدِّمُ تَجْرِبَةً سِيَاحِيَّةً عَلَى مَدَارِ السَّنَةِ.", japanese: "トロヘナは一年中観光体験を提供します。" },
      { speaker: "記事", arabic: "دَمْجُ الطَّبِيعَةِ مَعَ التِّكْنُولُوجِيَا هُوَ جَوْهَرُ الْمَشْرُوعِ.", japanese: "自然と技術の融合がプロジェクトの核心です。" }
    ]
  },
  {
    id: 1060,
    title: "ジャナドリヤ祭",
    category: "文化",
    level: "上級",
    contentVoweled: "مَهْرَجَانُ الْجَنَادِرِيَّةِ هُوَ الْمَهْرَجَانُ الْوَطَنِيُّ لِلتُّرَاثِ وَالثَّقَافَةِ، وَيُعَدُّ مِنْ أَهَمِّ الْمُنَاسَبَاتِ الثَّقَافِيَّةِ فِي السُّعُودِيَّةِ. يَهْدِفُ الْمَهْرَجَانُ إِلَى رَبْطِ الْحَاضِرِ بِالْمَاضِي مِنْ خِلَالِ عَرْضِ الْحِرَفِ الْيَدَوِيَّةِ، وَالرَّقَصَاتِ الشَّعْبِيَّةِ، وَسِبَاقِ الْهَجْنِ الْكَبِيرِ. يَجْتَمِعُ فِيهِ الْحِرَفِيُّونَ وَالشُّعَرَاءُ مِنْ جَمِيعِ مَنَاطِقِ الْمَمْلَكَةِ لِيَعْرِضُوا تَنَوُّعَ الثَّقَافَةِ السُّعُودِيَّةِ الْغَنِيَّ أَمَامَ الزُّوَّارِ مِنْ جَمِيعِ أَنْحَاءِ الْعَالَمِ.",
    contentPlain: "مهرجان الجنادرية هو المهرجان الوطني للتراث والثقافة، ويعد من أهم المناسبات الثقافية في السعودية. يهدف المهرجان إلى ربط الحاضر بالماضي من خلال عرض الحرف اليدوية، والرقصات الشعبية، وسباق الهجن الكبير. يجتمع فيه الحرفيون والشعراء من جميع مناطق المملكة ليعرضوا تنوع الثقافة السعودية الغني أمام الزوار من جميع أنحاء العالم.",
    vocabList: [
      { word: "تُرَاث", meaning: "遺産/ヘリテージ" },
      { word: "حِرْفَة", meaning: "工芸/職人技" },
      { word: "شَعْبِيّ", meaning: "民衆の/フォーク" },
      { word: "حَاضِر", meaning: "現在" }
    ],
    questions: [
      { id: 10601, type: "reading", text: "ジャナドリヤ祭の主なテーマは？", options: ["未来技術", "遺産と文化", "スポーツのみ", "映画"], correctIndex: 1, explanation: "「للتراث والثقافة (遺産と文化のための)」です。" },
      { id: 10602, type: "reading", text: "祭りの目的は？", options: ["過去を忘れる", "現在と過去を結ぶ", "物を売るだけ", "外国の文化を学ぶ"], correctIndex: 1, explanation: "「ربط الحاضر بالماضي (現在を過去と結ぶ)」です。" },
      { id: 10603, type: "reading", text: "展示されるものは？", options: ["工芸品や民俗舞踊", "車", "パソコン", "宇宙船"], correctIndex: 0, explanation: "「الحرف اليدوية، والرقصات الشعبية」です。" },
      { id: 10604, type: "vocabulary", text: "「يَدَوِيّ」の意味は？", options: ["機械の", "手作りの/手の", "足の", "目の"], correctIndex: 1, explanation: "Hand-made/Manual（手の）です。" },
      { id: 10605, type: "grammar", text: "「展示する」", options: ["يَعْرِضُ", "يَخْفِي", "يَأْكُلُ", "يَنَامُ"], correctIndex: 0, explanation: "「Ya'riḍu (Display/Show)」です。" },
      // 上級文法問題
      { id: 10606, type: "grammar_advanced", text: "「يعد من أهم」の「أهم」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "前置詞「Min」の後で属格（Majrūr）となりカスラを取ります（イダーファの第1要素）。" },
      { id: 10607, type: "grammar_advanced", text: "「يجتمع فيه الحرفيون」の「الحرفيون」の正しい語尾は？", options: ["ūna (主格・男性規則複数)", "īna (属格・男性規則複数)", "un (タンウィーン)", "ān (主格・双数)"], correctIndex: 0, explanation: "動詞「Yajtami'u (集まる)」の主語（Fā'il）なので、男性規則複数の主格「Wāw-Nūn (ūna)」を取ります。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "يَبْدَأُ الْمَهْرَجَانُ بِسِبَاقِ الْهَجْنِ السَّنَوِيِّ.", japanese: "祭りは毎年のラクダレースで始まります。" },
      { speaker: "記事", arabic: "الْأُوبِرِيتُ الْغِنَائِيُّ هُوَ حَدَثٌ رَئِيسِيٌّ فِي الِافْتِتَاحِ.", japanese: "歌劇（オペレッタ）は開会式の主要イベントです。" },
      { speaker: "記事", arabic: "تُوجَدُ أَجْنِحَةٌ لِكُلِّ مِنْطَقَةٍ تَعْرِضُ تُرَاثَهَا الْخَاصَّ.", japanese: "各地域には独自の遺産を展示するパビリオンがあります。" },
      { speaker: "記事", arabic: "إِنَّهُ فُرْصَةٌ لِلْأَجْيَالِ الْجَدِيدَةِ لِلتَّعَرُّفِ عَلَى تَارِيخِ أَجْدَادِهِمْ.", japanese: "それは新しい世代が祖先の歴史を知る機会です。" }
    ]
  },
  {
    id: 1061,
    title: "イムルウ・アル・カイス（放浪の王）",
    category: "文学",
    level: "上級",
    contentVoweled: "امْرُؤُ الْقَيْسِ هُوَ أَشْهَرُ شُعَرَاءِ الْمُعَلَّقَاتِ، وَيُلَقَّبُ بِالْمَلِكِ الضِّلِّيلِ. كَانَ أَمِيرًا طُرِدَ مِنْ قَبِيلَتِهِ بِسَبَبِ حُبِّهِ لِلشِّعْرِ وَاللَّهْوِ، لَكِنَّهُ قَضَى حَيَاتَهُ يُحَاوِلُ اسْتِعَادَةَ مُلْكِ أَبِيهِ الضَّائِعِ. تَبْدَأُ مُعَلَّقَتُهُ الشَّهِيرَةُ بِالْوُقُوفِ عَلَى الْأَطْلَالِ وَالْبُكَاءِ عَلَى الْأَحِبَّةِ الرَّاحِلِينَ، وَتَمَيَّزَتْ بِوَصْفٍ دَقِيقٍ لِلْخَيْلِ وَاللَّيْلِ وَالْمَطَرِ، وَتُعْتَبَرُ مِنْ أَجْوَدِ مَا قِيلَ فِي الشِّعْرِ الْعَرَبِيِّ الْقَدِيمِ.",
    contentPlain: "امرؤ القيس هو أشهر شعراء المعلقات، ويلقب بالملك الضليل. كان أميرا طرد من قبيلته بسبب حبه للشعر واللهو، لكنه قضى حياته يحاول استعادة ملك أبيه الضائع. تبدأ معلقته الشهيرة بالوقوف على الأطلال والبكاء على الأحبة الراحلين، وتميزت بوصف دقيق للخيل والليل والمطر، وتعتبر من أجود ما قيل في الشعر العربي القديم.",
    vocabList: [
      { word: "أَطْلَال", meaning: "廃墟/遺跡" },
      { word: "مَلِك", meaning: "王" },
      { word: "ضَائِع", meaning: "失われた" },
      { word: "بُكَاء", meaning: "泣くこと" }
    ],
    questions: [
      { id: 10611, type: "reading", text: "イムルウ・アル・カイスのあだ名は？", options: ["賢い王", "放浪の王（迷える王）", "強い王", "沈黙の王"], correctIndex: 1, explanation: "「الملك الضليل (The Wandering/Erring King)」です。" },
      { id: 10612, type: "reading", text: "彼は人生を何に費やしましたか？", options: ["詩を書くだけ", "父の失われた王権を取り戻そうとした", "商売", "農業"], correctIndex: 1, explanation: "「يحاول استعادة ملك أبيه الضائع」です。" },
      { id: 10613, type: "reading", text: "彼の詩（ムアッラカ）はどうやって始まりますか？", options: ["自己紹介", "廃墟に立ち寄って泣く", "神への祈り", "戦いの描写"], correctIndex: 1, explanation: "「بالوقوف على الأطلال والبكاء」はジャーヒリーヤ詩の伝統的な形式です。" },
      { id: 10614, type: "vocabulary", text: "「دَقِيق」の意味は？", options: ["速い", "正確な/精密な", "重い", "暗い"], correctIndex: 1, explanation: "Accurate/Precise（精密な）です。" },
      { id: 10615, type: "grammar", text: "「試みる」", options: ["يُحَاوِلُ", "يَنْجَحُ", "يَنَامُ", "يَأْكُلُ"], correctIndex: 0, explanation: "「Yuḥāwilu (Try/Attempt)」です。" },
      // 上級文法問題
      { id: 10616, type: "grammar_advanced", text: "「امرؤ القيس」の「امرؤ」の語尾は文頭でどうなる？", options: ["u (ダンマ・ハムザはウに座る)", "a (ファトハ・ハムザはアリフに座る)", "i (カスラ・ハムザはイに座る)", "Sukuun"], correctIndex: 0, explanation: "「Imru'」は格によって語尾の文字ごと変わる特殊な名詞です。主格（文頭の主語）なのでダンマを取り、ハムザはWawの上に乗ります（Imru'u）。" },
      { id: 10617, type: "grammar_advanced", text: "「كان أميرا」の「أميرا」の正しい語尾は？", options: ["an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "in (タンウィーン・カスラ)", "u (ダンマ)"], correctIndex: 0, explanation: "「Kāna」の述語（Khabar Kāna）なので対格（Manṣūb）となり、タンウィーン・ファトハがつきます。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "قَالَ: قِفَا نَبْكِ مِنْ ذِكْرَى حَبِيبٍ وَمَنْزِلِ.", japanese: "彼は言いました。「止まれ、愛しい人と家の記憶に（思いを馳せて）泣こう。」" },
      { speaker: "記事", arabic: "وَصَفَ اللَّيْلَ بِأَنَّهُ طَوِيلٌ وَثَقِيلٌ كَالْمَوْجِ.", japanese: "彼は夜を、波のように長く重いと描写しました。" },
      { speaker: "記事", arabic: "شِعْرُهُ مَلِيءٌ بِالصُّوَرِ الْفَنِّيَّةِ الرَّائِعَةِ.", japanese: "彼の詩は素晴らしい芸術的イメージに満ちています。" },
      { speaker: "記事", arabic: "تُوُفِّيَ وَهُوَ عَائِدٌ مِنْ رِحْلَةٍ إِلَى الْقُسْطَنْطِينِيَّةِ.", japanese: "彼はコンスタンティノープルへの旅からの帰途に亡くなりました。" }
    ]
  },
  {
    id: 1062,
    title: "KAFD（キング・アブドゥッラー金融地区）",
    category: "経済",
    level: "上級",
    contentVoweled: "مَرْكَزُ الْمَلِكِ عَبْدِ اللهِ الْمَالِيُّ هُوَ تُحْفَةٌ مِعْمَارِيَّةٌ فِي قَلْبِ الرِّيَاضِ، وَيُعَدُّ أَكْبَرَ مَرْكَزٍ مَالِيٍّ فِي الْمِنْطَقَةِ. يَضُمُّ الْمَرْكَزُ عَشَرَاتِ الْأَبْرَاجِ الشَّاهِقَةِ ذَاتِ التَّصَامِيمِ الْمُسْتَقْبَلِيَّةِ الصَّدِيقَةِ لِلْبِيئَةِ. يَهْدِفُ الْمَرْكَزُ إِلَى جَعْلِ الرِّيَاضِ عَاصِمَةً مَالِيَّةً عَالَمِيَّةً، حَيْثُ يَجْذِبُ الْبُنُوكَ وَالشَّرِكَاتِ الدَّوْلِيَّةَ لِفَتْحِ مَقَرَّاتِهَا الْإِقْلِيمِيَّةِ فِيهِ، مِمَّا يُعَزِّزُ مَكَانَةَ الْمَمْلَكَةِ الِاقْتِصَادِيَّةَ.",
    contentPlain: "مركز الملك عبد الله المالي هو تحفة معمارية في قلب الرياض، ويعد أكبر مركز مالي في المنطقة. يضم المركز عشرات الأبراج الشاهقة ذات التصاميم المستقبلية الصديقة للبيئة. يهدف المركز إلى جعل الرياض عاصمة مالية عالمية، حيث يجذب البنوك والشركات الدولية لفتح مقراتها الإقليمية فيه، مما يعزز مكانة المملكة الاقتصادية.",
    vocabList: [
      { word: "مَرْكَز", meaning: "センター/中心" },
      { word: "بُرْج", meaning: "タワー/塔（複：アブラージュ）" },
      { word: "مَقَرّ", meaning: "本部/拠点" },
      { word: "إِقْلِيمِيّ", meaning: "地域の/リージョナル" }
    ],
    questions: [
      { id: 10621, type: "reading", text: "KAFDとは何ですか？", options: ["公園", "地域最大の金融センター", "学校", "古い市場"], correctIndex: 1, explanation: "「أكبر مركز مالي في المنطقة」です。" },
      { id: 10622, type: "reading", text: "建物の特徴は？", options: ["低い", "環境に優しい未来的なデザインの高層ビル", "木造", "窓がない"], correctIndex: 1, explanation: "「الأبراج الشاهقة ذات التصاميم المستقبلية الصديقة للبيئة」です。" },
      { id: 10623, type: "reading", text: "目標は何ですか？", options: ["リヤドを世界的金融首都にする", "人口を減らす", "車を売る", "農業をする"], correctIndex: 0, explanation: "「جعل الرياض عاصمة مالية عالمية」です。" },
      { id: 10624, type: "vocabulary", text: "「شَاهِق」の意味は？", options: ["低い", "そびえ立つ/非常に高い", "広い", "狭い"], correctIndex: 1, explanation: "Soaring/Very high（そびえ立つ）です。" },
      { id: 10625, type: "grammar", text: "「惹きつける」", options: ["يَجْذِبُ", "يَطْرُدُ", "يَكْرَهُ", "يَنَامُ"], correctIndex: 0, explanation: "「Yajdhibu (Attracts)」です。" },
      // 上級文法問題
      { id: 10626, type: "grammar_advanced", text: "「عشرات الأبراج」の「الأبراج」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "数詞「'Asharāt (数十)」の後の名詞（Muḍāf Ilayhi）は属格（Majrūr）となりカスラがつきます。" },
      { id: 10627, type: "grammar_advanced", text: "「ذات التصاميم」の「التصاميم」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "「Dhāt (〜を持つ)」の後のイダーファ第2要素（属格）です。「Taṣāmīm」は非限定名詞ですが、定冠詞「Al」がついているため、通常通りカスラを取ります。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "يَتَمَيَّزُ الْمَرْكَزُ بِوُجُودِ مَسَارَاتٍ لِلْمُشَاةِ مَكِيَّفَةٍ.", japanese: "センターは空調付きの歩行者用通路があるのが特徴です。" },
      { speaker: "記事", arabic: "يَحْتَوِي عَلَى فَنَادِقَ فَخْمَةٍ وَمَتَاحِفَ.", japanese: "豪華なホテルや博物館が含まれています。" },
      { speaker: "記事", arabic: "تَمَّ تَصْمِيمُ الْمَبَانِي لِتَقْلِيلِ اسْتِهْلَاكِ الطَّاقَةِ.", japanese: "建物はエネルギー消費を減らすように設計されました。" },
      { speaker: "記事", arabic: "إِنَّهُ رَمْزٌ لِلْحَدَاثَةِ وَالْقُوَّةِ الِاقْتِصَادِيَّةِ.", japanese: "それは現代性と経済力の象徴です。" }
    ]
  },
  {
    id: 1063,
    title: "アストロラーベ（天体観測儀）",
    category: "歴史",
    level: "上級",
    contentVoweled: "الْأَسْطُرْلَابُ هُوَ آلَةٌ فَلَكِيَّةٌ قَدِيمَةٌ طَوَّرَهَا الْعُلَمَاءُ الْمُسْلِمُونَ لِتُصْبِحَ حَاسُوبًا فَلَكِيًّا مَحْمُولًا. يُسْتَخْدَمُ الْأَسْطُرْلَابُ لِقِيَاسِ ارْتِفَاعِ النُّجُومِ وَالشَّمْسِ، وَتَحْدِيدِ الِاتِّجَاهَاتِ، وَمَعْرِفَةِ أَوْقَاتِ الصَّلَاةِ بِدِقَّةٍ. بَرَعَتْ مَرْيَمُ الْأَسْطُرْلَابِيَّةُ، وَهِيَ عَالِمَةٌ مِنْ حَلَبَ، فِي صِنَاعَةِ هَذِهِ الْآلَاتِ الْمُعَقَّدَةِ وَتَطْوِيرِهَا، مِمَّا سَاعَدَ الْمُسْتَكْشِفِينَ وَالْبَحَّارَةَ فِي رِحْلَاتِهِمُ الطَّوِيلَةِ.",
    contentPlain: "الأسطرلاب هو آلة فلكية قديمة طورها العلماء المسلمون لتصبح حاسوبا فلكيا محمولا. يستخدم الأسطرلاب لقياس ارتفاع النجوم والشمس، وتحديد الاتجاهات، ومعرفة أوقات الصلاة بدقة. برعت مريم الأسطرلابية، وهي عالمة من حلب، في صناعة هذه الآلات المعقدة وتطويرها، مما ساعد المستكشفين والبحارة في رحلاتهم الطويلة.",
    vocabList: [
      { word: "آلَة", meaning: "機械/道具" },
      { word: "ارْتِفَاع", meaning: "高さ/高度" },
      { word: "حَاسُوب", meaning: "コンピュータ" },
      { word: "مُعَقَّد", meaning: "複雑な" }
    ],
    questions: [
      { id: 10631, type: "reading", text: "アストロラーベは何と呼ばれていますか？", options: ["携帯電話", "携帯可能な天文コンピュータ", "時計", "鏡"], correctIndex: 1, explanation: "「حاسوبا فلكيا محمولا (ポータブル天文計算機)」です。" },
      { id: 10632, type: "reading", text: "何に使われますか？", options: ["料理", "星の高度測定や祈りの時間の特定", "電話", "音楽"], correctIndex: 1, explanation: "「قياس ارتفاع النجوم... ومعرفة أوقات الصلاة」です。" },
      { id: 10633, type: "reading", text: "有名な女性製造家は？", options: ["シェヘラザード", "マリアム・アル・アストゥルラービーヤ", "ゼイナブ", "ファーティマ"], correctIndex: 1, explanation: "「مريم الأسطرلابية」です。" },
      { id: 10634, type: "vocabulary", text: "「بَحَّار」の意味は？", options: ["農民", "船乗り/水夫", "兵士", "王"], correctIndex: 1, explanation: "Sailor（船乗り）です。" },
      { id: 10635, type: "grammar", text: "「発展させた」", options: ["طَوَّرَ", "هَدَمَ", "نَسِيَ", "أَكَلَ"], correctIndex: 0, explanation: "「Ṭawwara (Developed)」です。" },
      // 上級文法問題
      { id: 10636, type: "grammar_advanced", text: "「لتصبح حاسوبا」の「حاسوبا」の正しい語尾は？", options: ["an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "in (タンウィーン・カスラ)", "u (ダンマ)"], correctIndex: 0, explanation: "「Tuṣbiḥa (Become)」はKānaの姉妹語で、その述語（Khabar）は対格（Manṣūb）となり、タンウィーン・ファトハがつきます。" },
      { id: 10637, type: "grammar_advanced", text: "「برعت مريم」の「مريم」の正しい語尾は？", options: ["u (ダンマ)", "un (タンウィーン・ダンマ)", "a (ファトハ)", "i (カスラ)"], correctIndex: 0, explanation: "動詞「Bara'at (秀でた)」の主語（Fā'il）なので主格ですが、「Maryam」は女性固有名称で非限定名詞（Mumnū' min al-ṣarf）のため、タンウィーンを取らずダンマ一文字になります。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "يَتَكَوَّنُ الْأَسْطُرْلَابُ مِنْ عِدَّةِ أَقْرَاصٍ مَعْدِنِيَّةٍ مُتَدَاخِلَةٍ.", japanese: "アストロラーベは複数の重なり合った金属円盤で構成されています。" },
      { speaker: "記事", arabic: "يُعْتَبَرُ جَدَّ الْحَوَاسِيبِ الْحَدِيثَةِ.", japanese: "現代のコンピュータの祖先と考えられています。" },
      { speaker: "記事", arabic: "كَانَ ضَرُورِيًّا لِتَحْدِيدِ الْقِبْلَةِ (اتِّجَاهِ مَكَّةَ).", japanese: "キブラ（メッカの方向）を特定するために不可欠でした。" },
      { speaker: "記事", arabic: "تَطَوُّرُهُ سَاهَمَ فِي عَصْرِ الِاسْتِكْشَافِ الْعَالَمِيِّ.", japanese: "その発展は大航海時代（探検の時代）に貢献しました。" }
    ]
  },
  {
    id: 1064,
    title: "マラーヤー・コンサートホール",
    category: "文化",
    level: "上級",
    contentVoweled: "مَسْرَحُ مَرَايَا فِي الْعُلَا هُوَ تُحْفَةٌ فَنِّيَّةٌ مُعَاصِرَةٌ، وَقَدْ دَخَلَ مَوْسُوعَةَ جِينِيس كَأَكْبَرِ مَبْنًى مُغَطًّى بِالْمَرَايَا فِي الْعَالَمِ. يَعْكِسُ الْمَبْنَى الطَّبِيعَةَ الصَّحْرَاوِيَّةَ وَالْجِبَالَ الْمُحِيطَةَ بِهِ، مِمَّا يَجْعَلُهُ يَبْدُو وَكَأَنَّهُ جُزْءٌ لَا يَتَجَزَّأُ مِنَ الْمَنْظَرِ الطَّبِيعِيِّ، أَوْ كَأَنَّهُ سَرَابٌ فِي الصَّحْرَاءِ. يَسْتَضِيفُ الْمَسْرَحُ حَفَلَاتٍ عَالَمِيَّةً وَمَعَارِضَ فَنِّيَّةً، وَيُعَدُّ رَمْزًا لِدَمْجِ الْحَدَاثَةِ مَعَ عَرَاقَةِ التَّارِيخِ.",
    contentPlain: "مسرح مرايا في العلا هو تحفة فنية معاصرة، وقد دخل موسوعة جينيس كأكبر مبنى مغطى بالمرايا في العالم. يعكس المبنى الطبيعة الصحراوية والجبال المحيطة به، مما يجعله يبدو وكأنه جزء لا يتجزأ من المنظر الطبيعي، أو كأنه سراب في الصحراء. يستضيف المسرح حفلات عالمية ومعارض فنية، ويعد رمزا لدمج الحداثة مع عراقة التاريخ.",
    vocabList: [
      { word: "مِرْآة", meaning: "鏡（複：マラーヤー）" },
      { word: "سَرَاب", meaning: "蜃気楼" },
      { word: "مُحِيط", meaning: "周囲の/海洋" },
      { word: "دَمْج", meaning: "融合/統合" }
    ],
    questions: [
      { id: 10641, type: "reading", text: "マラーヤー・ホールのギネス記録は？", options: ["世界一高い", "世界最大の鏡で覆われた建物", "世界一古い", "世界一安い"], correctIndex: 1, explanation: "「أكبر مبنى مغطى بالمرايا في العالم」です。" },
      { id: 10642, type: "reading", text: "建物はどのように見えますか？", options: ["目立つ", "風景の一部、あるいは蜃気楼のように見える", "赤い", "黒い"], correctIndex: 1, explanation: "「كأنه جزء... من المنظر الطبيعي، أو كأنه سراب」です。" },
      { id: 10643, type: "reading", text: "それは何の象徴ですか？", options: ["戦争", "現代性と歴史の融合", "分離", "破壊"], correctIndex: 1, explanation: "「دمج الحداثة مع عراقة التاريخ」です。" },
      { id: 10644, type: "vocabulary", text: "「مُعَاصِر」の意味は？", options: ["古い", "現代の/コンテンポラリー", "未来の", "遠い"], correctIndex: 1, explanation: "Contemporary（現代の）です。" },
      { id: 10645, type: "grammar", text: "「入りました（記録などに）」", options: ["دَخَلَ", "خَرَجَ", "نَامَ", "أَكَلَ"], correctIndex: 0, explanation: "「Dakhala (Entered)」です。" },
      // 上級文法問題
      { id: 10646, type: "grammar_advanced", text: "「كأكبر مبنى」の「مبنى」の正しい語尾は？", options: ["an (タンウィーン・ファトハ・表記はアリフ)", "in (タンウィーン・カスラ・表記なし)", "un (タンウィーン・ダンマ・表記なし)", "i (カスラ・表記なし)"], correctIndex: 0, explanation: "「Mabnā」はIsm Manqūṣ/Maqṣūrの性質を持ちますが、ここでは「Mabnan」とタンウィーン・ファトハのように表記されることが一般的ですが、実は「Ism Maqsur」なので、格にかかわらず「an」の音が残る形になります（Mabnan）。ただしイダーファの第2要素（属格）です。" },
      { id: 10647, type: "grammar_advanced", text: "「كأنه جزء」の「جزء」の正しい語尾は？", options: ["un (タンウィーン・ダンマ)", "an (タンウィーン・ファトハ)", "in (タンウィーン・カスラ)", "u (ダンマ)"], correctIndex: 0, explanation: "「Ka'anna」はInnaの姉妹語で、その述語（Khabar Ka'anna）は主格（Marfū'）となり、タンウィーン・ダンマがつきます。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "تَمَّ تَصْمِيمُ الْمَبْنَى لِيَخْتَفِيَ دَاخِلَ الطَّبِيعَةِ.", japanese: "建物は自然の中に「消える」ように設計されました。" },
      { speaker: "記事", arabic: "يَعْكِسُ جَمَالَ الْجِبَالِ الرَّمْلِيَّةِ الذَّهَبِيَّةِ.", japanese: "それは黄金の砂岩の山々の美しさを反射します。" },
      { speaker: "記事", arabic: "يَسْتَضِيفُ 'شِتَاءَ طَنْطُورَة' السَّنَوِيَّ.", japanese: "毎年恒例の「冬のタントラ」を開催します。" },
      { speaker: "記事", arabic: "إِنَّهُ أَيْقُونَةٌ مِعْمَارِيَّةٌ فِي قَلْبِ الصَّحْرَاءِ.", japanese: "それは砂漠の中心にある建築のアイコンです。" }
    ]
  },

  // --- 57. 文化・伝統 (Culture/Clothing) ---
  {
    id: 1065,
    title: "ビシュト（伝統的なマント）",
    category: "文化",
    level: "上級",
    contentVoweled: "الْبِشْتُ هُوَ رِدَاءٌ رَجَالِيٌّ تَقْلِيدِيٌّ يَرْتَدِيهِ الْعَرَبُ فِي الْمُنَاسَبَاتِ الْهَامَّةِ وَالْأَفْرَاحِ، وَيُعْتَبَرُ رَمْزًا لِلْوَجَاهَةِ وَالْأَنَاقَةِ. يُصْنَعُ الْبِشْتُ مِنَ الصُّوفِ أَوِ الْوَبَرِ، وَيُطَرَّزُ أَطْرَافُهُ بِخُيُوطٍ ذَهَبِيَّةٍ تُسَمَّى 'الزَّرِي'. تَخْتَلِفُ أَنْوَاعُ الْبُشُوتِ وَأَلْوَانُهَا حَسَبَ فُصُولِ السَّنَةِ وَالْأَذْوَاقِ، وَتَشْتَهِرُ مِنْطَقَةُ الْأَحْسَاءِ بِصِنَاعَةِ أَجْوَدِ أَنْوَاعِ الْبُشُوتِ يَدَوِيًّا، وَالَّتِي يَرْتَدِيهَا الْمُلُوكُ وَالْأُمَرَاءُ.",
    contentPlain: "البشت هو رداء رجالي تقليدي يرتديه العرب في المناسبات الهامة والأفراح، ويعتبر رمزا للوجاهة والأناقة. يصنع البشت من الصوف أو الوبر، ويطرز أطرافه بخيوط ذهبية تسمى 'الزري'. تختلف أنواع البشوت وألوانها حسب فصول السنة والأذواق، وتشتهر منطقة الأحساء بصناعة أجود أنواع البشوت يدويا، والتي يرتديها الملوك والأمراء.",
    vocabList: [
      { word: "رِدَاء", meaning: "上着/マント" },
      { word: "أَنَاقَة", meaning: "エレガンス/上品さ" },
      { word: "وَجَاهَة", meaning: "威信/ステータス" },
      { word: "خَيْط", meaning: "糸" }
    ],
    questions: [
      { id: 10651, type: "reading", text: "ビシュトはいつ着られますか？", options: ["寝る時", "重要な行事や結婚式", "スポーツ中", "水泳中"], correctIndex: 1, explanation: "「في المناسبات الهامة والأفراح」です。" },
      { id: 10652, type: "reading", text: "「ザリー」とは何ですか？", options: ["生地", "金の刺繍糸", "ボタン", "帽子"], correctIndex: 1, explanation: "「خيوط ذهبية تسمى الزري (ザリーと呼ばれる金糸)」です。" },
      { id: 10653, type: "reading", text: "最高品質のビシュトで有名な地域は？", options: ["リヤド", "アル・アハサー", "ジェッダ", "タブーク"], correctIndex: 1, explanation: "「تشتهر منطقة الأحساء」です。" },
      { id: 10654, type: "vocabulary", text: "「يَدَوِيًّا」の意味は？", options: ["機械で", "手作業で", "足で", "自動で"], correctIndex: 1, explanation: "Manually/By hand（手で）です。" },
      { id: 10655, type: "grammar", text: "「着ます」", options: ["يَرْتَدِي", "يَخْلَعُ", "يَبِيعُ", "يَشْتَرِي"], correctIndex: 0, explanation: "「Yartadī (Wears)」です。" },
      // 上級文法問題
      { id: 10656, type: "grammar_advanced", text: "「يرتديه العرب」の「العرب」の正しい語尾は？", options: ["u (ダンマ)", "a (ファトハ)", "i (カスラ)", "un (タンウィーン)"], correctIndex: 0, explanation: "動詞「Yartadī (着る)」の行為者（主語）であるため、主格（Marfū'）となりダンマがつきます。" },
      { id: 10657, type: "grammar_advanced", text: "「تختلف أنواع البشوت」の「أنواع」の正しい語尾は？", options: ["a (ファトハ)", "u (ダンマ)", "i (カスラ)", "un (タンウィーン)"], correctIndex: 1, explanation: "動詞「Takhtalifu (異なる)」の主語（Fā'il）であるため、主格（Marfū'）となりダンマがつきます。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "الْبِشْتُ هُوَ رِدَاءٌ رَجَالِيٌّ تَقْلِيدِيٌّ يَرْتَدِيهِ الْعَرَبُ فِي الْمُنَاسَبَاتِ الْهَامَّةِ وَالْأَفْرَاحِ.", japanese: "ビシュトは、アラブ人が重要な行事や結婚式で着用する伝統的な男性用マントです。" },
      { speaker: "記事", arabic: "وَيُعْتَبَرُ رَمْزًا لِلْوَجَاهَةِ وَالْأَنَاقَةِ.", japanese: "そしてそれは威信とエレガンスの象徴とみなされています。" },
      { speaker: "記事", arabic: "يُصْنَعُ الْبِشْتُ مِنَ الصُّوفِ أَوِ الْوَبَرِ، وَيُطَرَّزُ أَطْرَافُهُ بِخُيُوطٍ ذَهَبِيَّةٍ تُسَمَّى 'الزَّرِي'.", japanese: "ビシュトは羊毛やラクダの毛で作られ、その端は「ザリー」と呼ばれる金糸で刺繍されます。" },
      { speaker: "記事", arabic: "تَشْتَهِرُ مِنْطَقَةُ الْأَحْسَاءِ بِصِنَاعَةِ أَجْوَدِ أَنْوَاعِ الْبُشُوتِ يَدَوِيًّا.", japanese: "アル・アハサー地域は、最高品質のビシュトを手作業で作ることで有名です。" }
    ]
  },
  {
    id: 1066,
    title: "哲学者イブン・ルシュド（アヴェロエス）",
    category: "歴史",
    level: "上級",
    contentVoweled: "ابْنُ رُشْدٍ هُوَ فَيْلَسُوفٌ وَطَبِيبٌ وَفَقِيهٌ أَنْدَلُسِيٌّ، عُرِفَ فِي الْغَرْبِ بِاسْمِ 'أَفِيرُويِس'. اشْتُهِرَ بِشَرْحِهِ لِمُؤَلَّفَاتِ أَرِسْطُو وَمُحَاوَلَتِهِ التَّوْفِيقَ بَيْنَ الْفَلْسَفَةِ وَالدِّينِ فِي كِتَابِهِ 'فَصْلُ الْمَقَالِ'. كَانَ لَهُ تَأْثِيرٌ عَمِيقٌ عَلَى الْفِكْرِ الْأُورُوبِيِّ فِي الْعُصُورِ الْوُسْطَى، وَسَاهَمَتْ أَفْكَارُهُ فِي إِحْيَاءِ الْفَلْسَفَةِ الْعَقْلَانِيَّةِ. رَغْمَ تَعَرُّضِهِ لِلْمِحْنَةِ وَنَفْيِ كُتُبِهِ، إِلَّا أَنَّ إِرْثَهُ الْفِكْرِيَّ بَقِيَ خَالِدًا.",
    contentPlain: "ابن رشد هو فيلسوف وطبيب فقيه أندلسي، عرف في الغرب باسم 'أفيرويس'. اشتهر بشرحه لمؤلفات أرسطو ومحاولته التوفيق بين الفلسفة والدين في كتابه 'فصل المقال'. كان له تأثير عميق على الفكر الأوروبي في العصور الوسطى، وساهمت أفكاره في إحياء الفلسفة العقلانية. رغم تعرضه للمحنة ونفي كتبه، إلا أن إرثه الفكري بقي خالدا.",
    vocabList: [
      { word: "فَيْلَسُوف", meaning: "哲学者" },
      { word: "شَرْح", meaning: "解説/注釈" },
      { word: "تَوْفِيق", meaning: "調和/和解" },
      { word: "عَقْل", meaning: "理性" }
    ],
    questions: [
      { id: 10661, type: "reading", text: "イブン・ルシュドの西洋での名前は？", options: ["アヴィセンナ", "アヴェロエス", "アルハゼン", "ゲーテ"], correctIndex: 1, explanation: "「أفيرويس (Averroes)」です。" },
      { id: 10662, type: "reading", text: "彼は誰の著作を解説しましたか？", options: ["プラトン", "アリストテレス", "ソクラテス", "カント"], correctIndex: 1, explanation: "「مؤلفات أرسطو (アリストテレスの著作)」です。" },
      { id: 10663, type: "reading", text: "彼は何を調和させようとしましたか？", options: ["水と油", "哲学と宗教", "太陽と月", "王と民"], correctIndex: 1, explanation: "「التوفيق بين الفلسفة والدين」です。" },
      { id: 10664, type: "vocabulary", text: "「إِرْث」の意味は？", options: ["金", "遺産/レガシー", "家", "借金"], correctIndex: 1, explanation: "Legacy/Heritage（遺産）です。" },
      { id: 10665, type: "grammar", text: "「貢献しました」", options: ["سَاهَمَ", "مَنَعَ", "أَخَذَ", "نَسِيَ"], correctIndex: 0, explanation: "「Sāhama (Contributed)」です。" },
      // 上級文法問題
      { id: 10666, type: "grammar_advanced", text: "「كان له تأثير」の「تأثير」の正しい語尾は？", options: ["un (タンウィーン・ダンマ)", "an (タンウィーン・ファトハ)", "in (タンウィーン・カスラ)", "u (ダンマ)"], correctIndex: 0, explanation: "「Kāna」の遅延主語（Ism Kāna Mu'akhkhar）です。「Lahu」が前置された述語（Khabar）で、「Ta'thīrun」が主語になるため、主格（Marfū'）でタンウィーン・ダンマがつきます。" },
      { id: 10667, type: "grammar_advanced", text: "「بقي خالدا」の「خالدا」の正しい語尾は？", options: ["an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "in (タンウィーン・カスラ)", "a (ファトハ)"], correctIndex: 0, explanation: "動詞「Baqiya (残った/留まった)」の後の「状態（Hāl）」を表しているため、対格（Manṣūb）となりタンウィーン・ファトハがつきます。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "ابْنُ رُشْدٍ هُوَ فَيْلَسُوفٌ وَطَبِيبٌ وَفَقِيهٌ أَنْدَلُسِيٌّ، عُرِفَ فِي الْغَرْبِ بِاسْمِ 'أَفِيرُويِس'.", japanese: "イブン・ルシュドはアンダルスの哲学者、医師、法学者であり、西洋では「アヴェロエス」の名で知られています。" },
      { speaker: "記事", arabic: "اشْتُهِرَ بِشَرْحِهِ لِمُؤَلَّفَاتِ أَرِسْطُو وَمُحَاوَلَتِهِ التَّوْفِيقَ بَيْنَ الْفَلْسَفَةِ وَالدِّينِ.", japanese: "彼はアリストテレスの著作の解説と、哲学と宗教の調和の試みで有名になりました。" },
      { speaker: "記事", arabic: "سَاهَمَتْ أَفْكَارُهُ فِي إِحْيَاءِ الْفَلْسَفَةِ الْعَقْلَانِيَّةِ.", japanese: "彼の思想は理性主義哲学の復興に貢献しました。" },
      { speaker: "記事", arabic: "رَغْمَ تَعَرُّضِهِ لِلْمِحْنَةِ، إِلَّا أَنَّ إِرْثَهُ الْفِكْرِيَّ بَقِيَ خَالِدًا.", japanese: "彼は苦難に遭いましたが、彼の知的遺産は永遠に残りました。" }
    ]
  },
  {
    id: 1067,
    title: "キング・アブドゥルアズィーズ世界文化センター (Ithra)",
    category: "文化",
    level: "上級",
    contentVoweled: "مَرْكَزُ الْمَلِكِ عَبْدِ الْعَزِيزِ الثَّقَافِيُّ الْعَالَمِيُّ (إِثْرَاء) هُوَ مَعْلَمٌ مِعْمَارِيٌّ مُبْهِرٌ يَقَعُ فِي مَدِينَةِ الظَّهْرَانِ، فِي نَفْسِ الْمَوْقِعِ الَّذِي اكْتُشِفَ فِيهِ النِّفْطُ لِأَوَّلِ مَرَّةٍ. يَهْدِفُ الْمَرْكَزُ إِلَى إِثْرَاءِ الْفِكْرِ وَإِلْهَامِ الْخَيَالِ مِنْ خِلَالِ مَرَافِقِهِ الْمُتَنَوِّعَةِ الَّتِي تَشْمَلُ مَكْتَبَةً عَصْرِيَّةً، وَمَسْرَحًا، وَسِينِمَا، وَمَتْحَفًا لِلطِّفْلِ. يُعَدُّ الْمَبْنَى بِتَصْمِيمِهِ الَّذِي يُشْبِهُ الصُّخُورَ الْمُتَرَاصَّةَ رَمْزًا لِلْوَقْتِ، حَيْثُ يُمَثِّلُ الْمَاضِيَ وَالْحَاضِرَ وَالْمُسْتَقْبَلَ.",
    contentPlain: "مركز الملك عبد العزيز الثقافي العالمي (إثراء) هو معلم معماري مبهر يقع في مدينة الظهران، في نفس الموقع الذي اكتشف فيه النفط لأول مرة. يهدف المركز إلى إثراء الفكر وإلهام الخيال من خلال مرافقه المتنوعة التي تشمل مكتبة عصرية، ومسرحا، وسينما، ومتحفا للطفل. يعد المبنى بتصميمه الذي يشبه الصخور المتراصة رمزا للوقت، حيث يمثل الماضي والحاضر والمستقبل.",
    vocabList: [
      { word: "مَعْلَم", meaning: "ランドマーク/名所" },
      { word: "إِلْهَام", meaning: "インスピレーション" },
      { word: "مُتَرَاصّ", meaning: "積み重なった/密集した" },
      { word: "خَيَال", meaning: "想像力" }
    ],
    questions: [
      { id: 10671, type: "reading", text: "Ithraはどこに位置していますか？", options: ["リヤドの中心", "石油が最初に発見された場所（ダーラン）", "ジェッダの海岸", "メッカの近く"], correctIndex: 1, explanation: "「في مدينة الظهران، في نفس الموقع الذي اكتشف فيه النفط」です。" },
      { id: 10672, type: "reading", text: "センターの目的は？", options: ["石油を掘る", "思想を豊かにし想像力を刺激する", "車を売る", "ホテル経営"], correctIndex: 1, explanation: "「إثراء الفكر وإلهام الخيال」です。" },
      { id: 10673, type: "reading", text: "建物のデザインは何を象徴していますか？", options: ["お金", "時間（過去・現在・未来）", "水", "砂"], correctIndex: 1, explanation: "「رمزا للوقت، حيث يمثل الماضي والحاضر والمستقبل」です。" },
      { id: 10674, type: "vocabulary", text: "「مُبْهِر」の意味は？", options: ["退屈な", "見事な/眩い", "暗い", "古い"], correctIndex: 1, explanation: "Impressive/Dazzling（見事な）です。" },
      { id: 10675, type: "grammar", text: "「似ている」", options: ["يُشْبِهُ", "يَخْتَلِفُ", "يَنْظُرُ", "يَأْكُلُ"], correctIndex: 0, explanation: "「Yushbihu (Resembles)」です。" },
      // 上級文法問題
      { id: 10676, type: "grammar_advanced", text: "「مركز الملك」の「مركز」の正しい語尾は？", options: ["u (ダンマ)", "a (ファトハ)", "i (カスラ)", "un (タンウィーン)"], correctIndex: 0, explanation: "文頭の主語（Mubtada'）なので主格（Marfū'）となりダンマがつきます。イダーファの第1要素なのでタンウィーンはつきません。" },
      { id: 10677, type: "grammar_advanced", text: "「الذي اكتشف فيه النفط」の「النفط」の正しい語尾は？", options: ["u (ダンマ)", "a (ファトハ)", "i (カスラ)", "un (タンウィーン)"], correctIndex: 0, explanation: "動詞「Uktushifa (発見された・受動態)」の代理主語（Nā'ib Fā'il）であるため、主格（Marfū'）となりダンマがつきます。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "مَرْكَزُ الْمَلِكِ عَبْدِ الْعَزِيزِ الثَّقَافِيُّ الْعَالَمِيُّ (إِثْرَاء) هُوَ مَعْلَمٌ مِعْمَارِيٌّ مُبْهِرٌ يَقَعُ فِي مَدِينَةِ الظَّهْرَانِ.", japanese: "キング・アブドゥルアズィーズ世界文化センター（イスラー）は、ダーラン市にある見事な建築的ランドマークです。" },
      { speaker: "記事", arabic: "يَهْدِفُ الْمَرْكَزُ إِلَى إِثْرَاءِ الْفِكْرِ وَإِلْهَامِ الْخَيَالِ مِنْ خِلَالِ مَرَافِقِهِ الْمُتَنَوِّعَةِ.", japanese: "センターは、多様な施設を通じて思想を豊かにし、想像力を刺激することを目指しています。" },
      { speaker: "記事", arabic: "يُعَدُّ الْمَبْنَى بِتَصْمِيمِهِ الَّذِي يُشْبِهُ الصُّخُورَ الْمُتَرَاصَّةَ رَمْزًا لِلْوَقْتِ.", japanese: "積み重なった岩に似たデザインのその建物は、時の象徴とみなされています。" },
      { speaker: "記事", arabic: "حَيْثُ يُمَثِّلُ الْمَاضِيَ وَالْحَاضِرَ وَالْمُسْتَقْبَلَ.", japanese: "それは過去、現在、未来を表しています。" }
    ]
  },
  {
    id: 1068,
    title: "ジャリーシュ（伝統料理）",
    category: "文化",
    level: "上級",
    contentVoweled: "الْجَرِيشُ هُوَ سَيِّدُ الْمَائِدَةِ السُّعُودِيَّةِ، خَاصَّةً فِي مِنْطَقَةِ نَجْد، وَيُعْتَبَرُ مِنْ أَقْدَمِ الْأَكْلَاتِ الشَّعْبِيَّةِ فِي الْجَزِيرَةِ الْعَرَبِيَّةِ. يَتَكَوَّنُ الطَّبَقُ مِنَ الْقَمْحِ الْمَجْرُوشِ الَّذِي يُطْبَخُ لِفَتْرَةٍ طَوِيلَةٍ مَعَ اللَّبَنِ (الْحَلِيبِ الْمُتَخَمِّرِ) وَاللَّحْمِ حَتَّى يُصْبِحَ قَوَامُهُ مِثْلَ الْعَصِيدَةِ. يُزَيَّنُ الْجَرِيشُ عَادَةً بـِ 'الْمُسَمَّنَةِ'، وَهِيَ خَلِيطٌ مِنَ الْبَصَلِ الْمَقْلِيِّ وَالتَّوَابِلِ وَاللَّيْمُونِ الْأَسْوَدِ، وَيُقَدَّمُ سَاخِنًا فِي الْمُنَاسَبَاتِ وَالْأَعْرَاسِ.",
    contentPlain: "الجريش هو سيد المائدة السعودية، خاصة في منطقة نجد، ويعتبر من أقدم الأكلات الشعبية في الجزيرة العربية. يتكون الطبق من القمح المجروش الذي يطبخ لفترة طويلة مع اللبن (الحليب المتخمر) واللحم حتى يصبح قوامه مثل العصيدة. يزين الجريش عادة بـ 'المسمنة'، وهي خليط من البصل المقلي والتوابل والليمون الأسود، ويقدم ساخنا في المناسبات والأعراس.",
    vocabList: [
      { word: "مَائِدَة", meaning: "食卓/テーブル" },
      { word: "قَمْح", meaning: "小麦" },
      { word: "عَصِيدَة", meaning: "お粥/ポリッジ" },
      { word: "خَلِيط", meaning: "混合物/ミックス" }
    ],
    questions: [
      { id: 10681, type: "reading", text: "ジャリーシュはどの地域の代表的な料理ですか？", options: ["ヒジャーズ", "ナジュド", "東部州", "アシール"], correctIndex: 1, explanation: "「خاصة في منطقة نجد」です。" },
      { id: 10682, type: "reading", text: "主な材料は？", options: ["米", "挽き割り小麦とラブナ（発酵乳）", "パン", "パスタ"], correctIndex: 1, explanation: "「القمح المجروش... مع اللبن」です。" },
      { id: 10683, type: "reading", text: "トッピングの「ムサンマナ」とは？", options: ["砂糖", "揚げ玉ねぎとスパイスの混合物", "フルーツ", "チーズ"], correctIndex: 1, explanation: "「خليط من البصل المقلي والتوابل」です。" },
      { id: 10684, type: "vocabulary", text: "「مَقْلِيّ」の意味は？", options: ["茹でた", "揚げた/炒めた", "生の", "冷たい"], correctIndex: 1, explanation: "Fried（揚げた）です。" },
      { id: 10685, type: "grammar", text: "「〜とみなされる（受動態）」", options: ["يُعْتَبَرُ", "يَعْرِفُ", "يَظُنُّ", "يَأْكُلُ"], correctIndex: 0, explanation: "「Yu'tabaru (Is considered)」です。" },
      // 上級文法問題
      { id: 10686, type: "grammar_advanced", text: "「من أقدم الأكلات」の「أقدم」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "前置詞「Min」の後の名詞（Ism Majrūr）なので属格（Majrūr）となり、カスラがつきます（イダーファの第1要素なのでタンウィーンはなし）。" },
      { id: 10687, type: "grammar_advanced", text: "「حتى يصبح قوامه」の「يصبح」の正しい語尾は？", options: ["a (ファトハ)", "u (ダンマ)", "i (カスラ)", "Sukuun"], correctIndex: 0, explanation: "接続助詞「Ḥattā（〜するまで）」の後の現在形動詞は、隠れた「An」により接続法（Manṣūb）となり、ファトハがつきます。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "الْجَرِيشُ هُوَ سَيِّدُ الْمَائِدَةِ السُّعُودِيَّةِ، خَاصَّةً فِي مِنْطَقَةِ نَجْد.", japanese: "ジャリーシュは、特にナジュド地方において、サウジの食卓の王様です。" },
      { speaker: "記事", arabic: "يَتَكَوَّنُ الطَّبَقُ مِنَ الْقَمْحِ الْمَجْرُوشِ الَّذِي يُطْبَخُ لِفَتْرَةٍ طَوِيلَةٍ مَعَ اللَّبَنِ وَاللَّحْمِ.", japanese: "この料理は、発酵乳（ラバン）と肉と共に長時間調理された挽き割り小麦から成ります。" },
      { speaker: "記事", arabic: "يُزَيَّنُ الْجَرِيشُ عَادَةً بـِ 'الْمُسَمَّنَةِ'، وَهِيَ خَلِيطٌ مِنَ الْبَصَلِ الْمَقْلِيِّ وَالتَّوَابِلِ.", japanese: "ジャリーシュは通常、揚げ玉ねぎとスパイスの混合物である「ムサンマナ」で飾られます。" },
      { speaker: "記事", arabic: "يُقَدَّمُ سَاخِنًا فِي الْمُنَاسَبَاتِ وَالْأَعْرَاسِ.", japanese: "行事や結婚式で熱々で提供されます。" }
    ]
  },
  {
    id: 1069,
    title: "ターイフのバラ祭り",
    category: "文化",
    level: "上級",
    contentVoweled: "تُعْرَفُ مَدِينَةُ الطَّائِفِ بِاسْمِ 'مَدِينَةِ الْوُرُودِ'، حَيْثُ تَنْتَشِرُ فِيهَا مَزَارِعُ الْوَرْدِ الطَّائِفِيِّ ذِي الرَّائِحَةِ الْعَطِرِيَّةِ الْفَوَّاحَةِ. فِي كُلِّ رَبِيعٍ، يُقَامُ مَهْرَجَانٌ لِلْوَرْدِ يَتِمُّ فِيهِ قَطْفُ الْمَلَايِينِ مِنَ الزُّهُورِ وَتَقْطِيرُهَا لِاسْتِخْرَاجِ مَاءِ الْوَرْدِ وَالدُّهْنِ الْعِطْرِيِّ الْفَاخِرِ. يُعْتَبَرُ دُهْنُ الْوَرْدِ الطَّائِفِيِّ مِنْ أَغْلَى الْعُطُورِ فِي الْعَالَمِ، وَيُسْتَخْدَمُ أَيْضًا فِي تَنْظِيفِ الْكَعْبَةِ الْمُشَرَّفَةِ.",
    contentPlain: "تعرف مدينة الطائف باسم 'مدينة الورود'، حيث تنتشر فيها مزارع الورد الطائفي ذي الرائحة العطرية الفواحة. في كل ربيع، يقام مهرجان للورد يتم فيه قطف الملايين من الزهور وتقطيرها لاستخراج ماء الورد والدهن العطري الفاخر. يعتبر دهن الورد الطائفي من أغلى العطور في العالم، ويستخدم أيضا في تنظيف الكعبة المشرفة.",
    vocabList: [
      { word: "وَرْد", meaning: "バラ（集合名詞）" },
      { word: "عِطْرِيّ", meaning: "香り高い/芳香性の" },
      { word: "تَقْطِير", meaning: "蒸留" },
      { word: "قَطْف", meaning: "摘み取ること" }
    ],
    questions: [
      { id: 10691, type: "reading", text: "ターイフの別名は？", options: ["光の町", "バラの町", "海の町", "黄金の町"], correctIndex: 1, explanation: "「مدينة الورود」です。" },
      { id: 10692, type: "reading", text: "春に農家は何をしますか？", options: ["木を切る", "何百万もの花を摘んで蒸留する", "家を建てる", "旅行する"], correctIndex: 1, explanation: "「قطف الملايين من الزهور وتقطيرها」です。" },
      { id: 10693, type: "reading", text: "ターイフのバラ油（香油）の特別な用途は？", options: ["料理のみ", "カアバ神殿の清掃", "車の洗浄", "虫除け"], correctIndex: 1, explanation: "「يستخدم أيضا في تنظيف الكعبة المشرفة」です。" },
      { id: 10694, type: "vocabulary", text: "「فَوَّاح」の意味は？", options: ["臭い", "香り高い/漂う", "静かな", "重い"], correctIndex: 1, explanation: "Fragrant/Diffusing（香りが広がる）です。" },
      { id: 10695, type: "grammar", text: "「抽出する」", options: ["اسْتِخْرَاج", "رَمْي", "بَيْع", "شِرَاء"], correctIndex: 0, explanation: "「Istikhrāj (Extraction)」です。" },
      // 上級文法問題
      { id: 10696, type: "grammar_advanced", text: "「مزارع الورد الطائفي ذي الرائحة」の「ذي」の文法的役割は？", options: ["形容詞（Na't・主格）", "形容詞（Na't・属格）", "形容詞（Na't・対格）", "目的語"], correctIndex: 0, explanation: "主語である「Mazāri'u (農場・主格)」を修飾する形容詞（Na't）なのですが...、ここで確認が必要です。「Tantashiru (広がる)」の主語は「Mazāri'u」で主格です。したがって、それを修飾する「Dhū (〜を持つ)」も主格の「Dhū」であるべきです。しかしテキストは「Dhī」になっています。これは前の「Al-Ward」を修飾している可能性があります。「Al-Wardi (属格)」を修飾する場合「Dhī」で正解です。「香りのあるバラ」ですね。もし「香りのある農場」なら「Dhātu」になります。ここでは「バラ（属格）」を修飾しているので「属格」が正解です。" },
      { id: 10697, type: "grammar_advanced", text: "「قطف الملايين」の「الملايين」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "「Qaṭf (摘むこと)」という動名詞の後のイダーファ第2要素（属格）なので、カスラがつきます（Malāyīnは規則複数ではなく、ここではブロークン・プルラルとして扱われ、定冠詞付きなので通常通りカスラ）。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "تُعْرَفُ مَدِينَةُ الطَّائِفِ بِاسْمِ 'مَدِينَةِ الْوُرُودِ'.", japanese: "ターイフ市は「バラの町」として知られています。" },
      { speaker: "記事", arabic: "فِي كُلِّ رَبِيعٍ، يُقَامُ مَهْرَجَانٌ لِلْوَرْدِ يَتِمُّ فِيهِ قَطْفُ الْمَلَايِينِ مِنَ الزُّهُورِ.", japanese: "毎春、何百万もの花が摘まれるバラ祭りが開催されます。" },
      { speaker: "記事", arabic: "يَتِمُّ تَقْطِيرُهَا لِاسْتِخْرَاجِ مَاءِ الْوَرْدِ وَالدُّهْنِ الْعِطْرِيِّ الْفَاخِرِ.", japanese: "高級なバラ水と香油を抽出するためにそれらは蒸留されます。" },
      { speaker: "記事", arabic: "يُعْتَبَرُ دُهْنُ الْوَرْدِ الطَّائِفِيِّ مِنْ أَغْلَى الْعُطُورِ فِي الْعَالَمِ.", japanese: "ターイフのバラ油は世界で最も高価な香水の一つと考えられています。" }
    ]
  },
  {
    id: 1070,
    title: "化学の父 ジャービル・ブン・ハイヤーン",
    category: "歴史",
    level: "上級",
    contentVoweled: "يُعْتَبَرُ جَابِرُ بْنُ حَيَّانَ الْمُؤَسِّسَ الْحَقِيقِيَّ لِعِلْمِ الْكِيمْيَاءِ، حَيْثُ حَوَّلَهَا مِنْ خُرَافَاتٍ (الْخِيمْيَاءِ) إِلَى عِلْمٍ تَجْرِيبِيٍّ دَقِيقٍ. اخْتَرَعَ الْعَدِيدَ مِنَ الْعَمَلِيَّاتِ الْكِيمْيَائِيَّةِ مِثْلَ التَّقْطِيرِ وَالتَّبَلُّرِ، وَاكْتَشَفَ أَحْمَاضًا مُهِمَّةً مِثْلَ حِمْضِ الْكِبْرِيتِيكِ وَمَاءِ الذَّهَبِ (الْمَاءِ الْمَلَكِيِّ) الَّذِي يُذِيبُ الذَّهَبَ. كَانَ يُؤْمِنُ بِأَنَّ التَّجْرِبَةَ هِيَ أَسَاسُ الْمَعْرِفَةِ الْعِلْمِيَّةِ، وَتَرَكَ مِئَاتِ الْكُتُبِ الَّتِي أَثَّرَتْ فِي الْغَرْبِ.",
    contentPlain: "يعتبر جابر بن حيان المؤسس الحقيقي لعلم الكيمياء، حيث حولها من خرافات (الخيمياء) إلى علم تجريبي دقيق. اخترع العديد من العمليات الكيميائية مثل التقطير والتبلور، واكتشف أحماضا مهمة مثل حمض الكبريتيك وماء الذهب (الماء الملكي) الذي يذيب الذهب. كان يؤمن بأن التجربة هي أساس المعرفة العلمية، وترك مئات الكتب التي أثرت في الغرب.",
    vocabList: [
      { word: "كِيمْيَاء", meaning: "化学" },
      { word: "تَجْرِيبِيّ", meaning: "実験的な" },
      { word: "تَبَلُّر", meaning: "結晶化" },
      { word: "إِذَابَة", meaning: "溶解" }
    ],
    questions: [
      { id: 10701, type: "reading", text: "ジャービル・ブン・ハイヤーンは何を変えましたか？", options: ["歴史", "錬金術（迷信）を実験科学としての化学へ", "数学を物理学へ", "何も変えていない"], correctIndex: 1, explanation: "「حولها من خرافات... إلى علم تجريبي」です。" },
      { id: 10702, type: "reading", text: "彼が発見した液体「王水（金の水）」の特徴は？", options: ["飲める", "金を溶かす", "凍らない", "爆発する"], correctIndex: 1, explanation: "「يذيب الذهب (金を溶かす)」です。" },
      { id: 10703, type: "reading", text: "彼の科学的手法の基本は？", options: ["夢", "実験", "推測", "運"], correctIndex: 1, explanation: "「التجربة هي أساس المعرفة (実験は知識の基礎)」です。" },
      { id: 10704, type: "vocabulary", text: "「خُرَافَة」の意味は？", options: ["真実", "迷信/神話", "科学", "法"], correctIndex: 1, explanation: "Superstition/Myth（迷信）です。" },
      { id: 10705, type: "grammar", text: "「変えました/転換しました」", options: ["حَوَّلَ", "بَقِيَ", "ذَهَبَ", "نَامَ"], correctIndex: 0, explanation: "「Ḥawwala (Transformed/Converted)」です。" },
      // 上級文法問題
      { id: 10706, type: "grammar_advanced", text: "「يعتبر جابر ... المؤسس」の「المؤسس」の正しい語尾は？", options: ["a (ファトハ)", "u (ダンマ)", "i (カスラ)", "un (タンウィーン)"], correctIndex: 0, explanation: "受動態「Yu'tabaru (Considered)」の第2目的語（補語）として対格（Manṣūb）になり、ファトハがつきます。（Jābiruが第1の要素＝代理主語）。" },
      { id: 10707, type: "grammar_advanced", text: "「اكتشف أحماضا」の「أحماضا」の正しい語尾は？", options: ["an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "in (タンウィーン・カスラ)", "a (ファトハ)"], correctIndex: 0, explanation: "動詞「Iktashafa (発見した)」の目的語なので対格となり、タンウィーン・ファトハがつきます。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "يُعْتَبَرُ جَابِرُ بْنُ حَيَّانَ الْمُؤَسِّسَ الْحَقِيقِيَّ لِعِلْمِ الْكِيمْيَاءِ.", japanese: "ジャービル・ブン・ハイヤーンは化学の真の創始者と考えられています。" },
      { speaker: "記事", arabic: "حَوَّلَهَا مِنْ خُرَافَاتٍ إِلَى عِلْمٍ تَجْرِيبِيٍّ دَقِيقٍ.", japanese: "彼はそれを迷信から精密な実験科学へと変えました。" },
      { speaker: "記事", arabic: "اكْتَشَفَ أَحْمَاضًا مُهِمَّةً مِثْلَ حِمْضِ الْكِبْرِيتِيكِ.", japanese: "彼は硫酸のような重要な酸を発見しました。" },
      { speaker: "記事", arabic: "كَانَ يُؤْمِنُ بِأَنَّ التَّجْرِبَةَ هِيَ أَسَاسُ الْمَعْرِفَةِ الْعِلْمِيَّةِ.", japanese: "彼は実験こそが科学的知識の基礎であると信じていました。" }
    ]
  },
  {
    id: 1071,
    title: "ハラマイン高速鉄道",
    category: "社会",
    level: "上級",
    contentVoweled: "قِطَارُ الْحَرَمَيْنِ السَّرِيعُ هُوَ مَشْرُوعٌ عِمْلَاقٌ يَرْبِطُ بَيْنَ مَكَّةَ الْمُكَرَّمَةِ وَالْمَدِينَةِ الْمُنَوَّرَةِ مُرُورًا بِجُدَّةَ وَمَدِينَةِ الْمَلِكِ عَبْدِ اللهِ الِاقْتِصَادِيَّةِ. يُعَدُّ هَذَا الْقِطَارُ الْكَهْرُبَائِيُّ مِنْ أَسْرَعِ الْقِطَارَاتِ فِي الشَّرْقِ الْأَوْسَطِ، حَيْثُ تَصِلُ سُرْعَتُهُ إِلَى 300 كِيلُومِتْرٍ فِي السَّاعَةِ. يَهْدِفُ الْمَشْرُوعُ إِلَى تَيْسِيرِ تَنَقُّلِ الْحُجَّاجِ وَالْمُعْتَمِرِينَ وَتَقْلِيصِ زَمَنِ الرِّحْلَةِ بِشَكْلٍ كَبِيرٍ، مِمَّا يَخْدِمُ مَلَايِينَ الزُّوَّارِ سَنَوِيًّا.",
    contentPlain: "قطار الحرمين السريع هو مشروع عملاق يربط بين مكة المكرمة والمدينة المنورة مرورا بجدة ومدينة الملك عبد الله الاقتصادية. يعد هذا القطار الكهربائي من أسرع القطارات في الشرق الأوسط، حيث تصل سرعته إلى 300 كيلومتر في الساعة. يهدف المشروع إلى تيسير تنقل الحجاج والمعتمرين وتقليص زمن الرحلة بشكل كبير، مما يخدم ملايين الزوار سنويا.",
    vocabList: [
      { word: "قِطَار", meaning: "列車" },
      { word: "سَرِيع", meaning: "速い" },
      { word: "تَيْسِير", meaning: "容易にすること/円滑化" },
      { word: "تَقْلِيص", meaning: "短縮/削減" }
    ],
    questions: [
      { id: 10711, type: "reading", text: "ハラマイン鉄道はどこの都市を結んでいますか？", options: ["リヤドとダンマーム", "メッカとマディーナ（ジェッダ経由）", "アブハとジーザーン", "カイロとアレクサンドリア"], correctIndex: 1, explanation: "「يربط بين مكة المكرمة والمدينة المنورة」です。" },
      { id: 10712, type: "reading", text: "列車の最高速度は？", options: ["100km/h", "300km/h", "500km/h", "50km/h"], correctIndex: 1, explanation: "「300 كم/ساعة」です。" },
      { id: 10713, type: "reading", text: "主な利用者は？", options: ["学生のみ", "巡礼者（ハッジ・オムラ）と訪問者", "貨物のみ", "誰もいない"], correctIndex: 1, explanation: "「الحجاج والمعتمرين」です。" },
      { id: 10714, type: "vocabulary", text: "「مُرُورًا بِـ」の意味は？", options: ["〜を避けて", "〜を経由して/通って", "〜で止まって", "〜なしで"], correctIndex: 1, explanation: "Passing through/Via（経由して）です。" },
      { id: 10715, type: "grammar", text: "「奉仕する/役立つ」", options: ["يَخْدِمُ", "يَضُرُّ", "يَأْكُلُ", "يَنْسَى"], correctIndex: 0, explanation: "「Yakhdimu (Serve)」です。" },
      // 上級文法問題
      { id: 10716, type: "grammar_advanced", text: "「بين مكة المكرمة」の「مكة」の正しい語尾は？", options: ["a (ファトハ)", "i (カスラ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "前置詞「Bayna（〜の間・属格支配）」の後の名詞ですが、地名「Makkah」は女性固有名詞で非限定名詞（Mumnū' min al-ṣarf）のため、カスラではなくファトハを取ります。" },
      { id: 10717, type: "grammar_advanced", text: "「300 كيلومتر」の「كيلومتر」の正しい語尾は？", options: ["in (タンウィーン・カスラ)", "an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "a (ファトハ)"], correctIndex: 0, explanation: "100以上の数詞の後の名詞（Tamyīz/Muḍāf Ilayhi）は単数・属格（Majrūr）となり、カスラ（タンウィーン）がつきます。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "قِطَارُ الْحَرَمَيْنِ السَّرِيعُ هُوَ مَشْرُوعٌ عِمْلَاقٌ يَرْبِطُ بَيْنَ مَكَّةَ وَالْمَدِينَةِ.", japanese: "ハラマイン高速鉄道は、メッカとマディーナを結ぶ巨大プロジェクトです。" },
      { speaker: "記事", arabic: "يُعَدُّ هَذَا الْقِطَارُ الْكَهْرُبَائِيُّ مِنْ أَسْرَعِ الْقِطَارَاتِ فِي الشَّرْقِ الْأَوْسَطِ.", japanese: "この電気列車は中東で最も速い列車の一つに数えられます。" },
      { speaker: "記事", arabic: "يَهْدِفُ الْمَشْرُوعُ إِلَى تَيْسِيرِ تَنَقُّلِ الْحُجَّاجِ وَالْمُعْتَمِرِينَ.", japanese: "プロジェクトはハッジおよびオムラ巡礼者の移動を容易にすることを目指しています。" },
      { speaker: "記事", arabic: "يَخْدِمُ مَلَايِينَ الزُّوَّارِ سَنَوِيًّا.", japanese: "それは毎年何百万人もの訪問者に奉仕します。" }
    ]
  },
  {
    id: 1072,
    title: "ムラッバ宮殿",
    category: "歴史",
    level: "上級",
    contentVoweled: "قَصْرُ الْمُرَبَّعِ هُوَ مَقَرُّ إِقَامَةِ الْمَلِكِ عَبْدِ الْعَزِيزِ وَمَرْكَزُ حُكْمِهِ سَابِقًا، وَيَقَعُ خَارِجَ أَسْوَارِ الرِّيَاضِ الْقَدِيمَةِ. بُنِيَ الْقَصْرُ عَلَى الطِّرَازِ النَّجْدِيِّ التَّقْلِيدِيِّ بِاسْتِخْدَامِ الطِّينِ وَالْقَشِّ وَجُذُوعِ النَّخْلِ. شَهِدَ الْقَصْرُ الْعَدِيدَ مِنَ الْقَرَارَاتِ التَّارِيخِيَّةِ وَاسْتِقْبَالَ الْوُفُودِ الرَّسْمِيَّةِ. الْيَوْمَ، هُوَ جُزْءٌ مِنْ مَرْكَزِ الْمَلِكِ عَبْدِ الْعَزِيزِ التَّارِيخِيِّ وَمَتْحَفٌ يَعْرِضُ مُقْتَنَيَاتِ الْمَلِكِ وَسَيَّارَاتِهِ الْقَدِيمَةَ.",
    contentPlain: "قصر المربع هو مقر إقامة الملك عبد العزيز ومركز حكمه سابقا، ويقع خارج أسوار الرياض القديمة. بني القصر على الطراز النجدي التقليدي باستخدام الطين والقش وجذوع النخل. شهد القصر العديد من القرارات التاريخية واستقبال الوفود الرسمية. اليوم، هو جزء من مركز الملك عبد العزيز التاريخي ومتحف يعرض مقتنيات الملك وسياراته القديمة.",
    vocabList: [
      { word: "إِقَامَة", meaning: "居住/滞在" },
      { word: "سُور", meaning: "壁/城壁（複：アスワール）" },
      { word: "قَشّ", meaning: "わら" },
      { word: "وَفْد", meaning: "代表団（複：ウフード）" }
    ],
    questions: [
      { id: 10721, type: "reading", text: "ムラッバ宮殿は誰の住居でしたか？", options: ["予言者", "アブドゥルアズィーズ王", "オスマン帝国の総督", "外国の大使"], correctIndex: 1, explanation: "「مقر إقامة الملك عبد العزيز」です。" },
      { id: 10722, type: "reading", text: "どのような建築様式ですか？", options: ["ヨーロッパ風", "伝統的なナジュド様式（泥作り）", "ガラス張り", "石造り"], correctIndex: 1, explanation: "「الطراز النجدي التقليدي باستخدام الطين」です。" },
      { id: 10723, type: "reading", text: "現在はどうなっていますか？", options: ["壊された", "博物館の一部", "ホテル", "学校"], correctIndex: 1, explanation: "「متحف يعرض مقتنيات الملك」です。" },
      { id: 10724, type: "vocabulary", text: "「جِذْع」の意味は？", options: ["葉", "幹（幹材）", "根", "実"], correctIndex: 1, explanation: "Trunk（幹）です。ヤシの幹（ジュズー）が建材に使われました。" },
      { id: 10725, type: "grammar", text: "「目撃した/経験した」", options: ["شَهِدَ", "رَأَى", "نَظَرَ", "نَسِيَ"], correctIndex: 0, explanation: "「Shahida (Witnessed)」です。" },
      // 上級文法問題
      { id: 10726, type: "grammar_advanced", text: "「باستخدام الطين」の「الطين」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "「Istikhdām」の後のイダーファ第2要素（属格）であり、定冠詞付きなので通常通りカスラがつきます。" },
      { id: 10727, type: "grammar_advanced", text: "「مقتنيات الملك」の「مقتنيات」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "動詞「Ya'riḍu (展示する)」の目的語ですが、「āt」で終わる女性規則複数なので、対格の場合ファトハではなくカスラを取ります（イダーファ第1要素なのでタンウィーンなし）。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "قَصْرُ الْمُرَبَّعِ هُوَ مَقَرُّ إِقَامَةِ الْمَلِكِ عَبْدِ الْعَزِيزِ سَابِقًا.", japanese: "ムラッバ宮殿は、かつてアブドゥルアズィーズ王の住居でした。" },
      { speaker: "記事", arabic: "بُنِيَ الْقَصْرُ عَلَى الطِّرَازِ النَّجْدِيِّ التَّقْلِيدِيِّ.", japanese: "宮殿は伝統的なナジュド様式で建てられました。" },
      { speaker: "記事", arabic: "شَهِدَ الْقَصْرُ اسْتِقْبَالَ الْوُفُودِ الرَّسْمِيَّةِ.", japanese: "宮殿は公式代表団の受け入れを目撃しました（行われました）。" },
      { speaker: "記事", arabic: "الْيَوْمَ، هُوَ مَتْحَفٌ يَعْرِضُ مُقْتَنَيَاتِ الْمَلِكِ.", japanese: "今日、それは王の所持品を展示する博物館です。" }
    ]
  },

  // --- 65. 自然・動物 (Nature/Animals) ---
  {
    id: 1073,
    title: "アラビアオオカミ",
    category: "自然",
    level: "上級",
    contentVoweled: "الذِّئْبُ الْعَرَبِيُّ هُوَ سُلَالَةٌ صَغِيرَةُ الْحَجْمِ مِنَ الذِّئَابِ الرَّمَادِيَّةِ، تَكَيَّفَتْ لِلْعَيْشِ فِي بِيئَةِ الصَّحْرَاءِ الْقَاسِيَةِ. يَتَمَيَّزُ بِأُذُنَيْنِ كَبِيرَتَيْنِ لِتَبْدِيدِ الْحَرَارَةِ وَفَرْوًا خَفِيفٍ فِي الصَّيْفِ. يَعِيشُ فِي مَجْمُوعَاتٍ صَغِيرَةٍ أَوْ مُنْفَرِدًا، وَيَتَغَذَّى عَلَى الْقَوَارِضِ وَالْأَرَانِبِ وَالْمَوَاشِي أَحْيَانًا. رَغْمَ أَنَّهُ كَانَ يُعْتَبَرُ عَدُوًّا لِلْبَدْوِ، إِلَّا أَنَّهُ يَلْعَبُ دَوْرًا مُهِمًّا فِي التَّوَازُنِ الْبِيئِيِّ، وَهُوَ الْآنَ مَحْمِيٌّ فِي بَعْضِ الْمَنَاطِقِ.",
    contentPlain: "الذئب العربي هو سلالة صغيرة الحجم من الذئاب الرمادية، تكيفت للعيش في بيئة الصحراء القاسية. يتميز بأذنين كبيرتين لتبديد الحرارة وفرو خفيف في الصيف. يعيش في مجموعات صغيرة أو منفردا، ويتغذى على القوارض والأرانب والمواشي أحيانا. رغم أنه كان يعتبر عدوا للبدو، إلا أنه يلعب دورا مهما في التوازن البيئي، وهو الآن محمي في بعض المناطق.",
    vocabList: [
      { word: "ذِئْب", meaning: "オオカミ" },
      { word: "رَمَادِيّ", meaning: "灰色の" },
      { word: "تَوَازُن", meaning: "バランス/均衡" },
      { word: "عَدُوّ", meaning: "敵" }
    ],
    questions: [
      { id: 10731, type: "reading", text: "アラビアオオカミの特徴は？", options: ["巨大", "小型で砂漠に適応している", "黒い", "水に住む"], correctIndex: 1, explanation: "「سلالة صغيرة الحجم... تكيفت للعيش في... الصحراء」です。" },
      { id: 10732, type: "reading", text: "大きな耳の役割は？", options: ["よく聞くためだけ", "熱を逃がす（放熱）ため", "飛ぶため", "飾り"], correctIndex: 1, explanation: "「لتبديد الحرارة (熱を散らすため)」です。" },
      { id: 10733, type: "reading", text: "生態系での役割は？", options: ["不要", "重要（バランスを保つ）", "害しかない", "家畜を守る"], correctIndex: 1, explanation: "「يلعب دورا مهما في التوازن البيئي」です。" },
      { id: 10734, type: "vocabulary", text: "「مَاشِيَة」の意味は？", options: ["車", "家畜（家畜の群れ）", "人", "植物"], correctIndex: 1, explanation: "Livestock/Cattle（家畜）です。" },
      { id: 10735, type: "grammar", text: "「適応した」", options: ["تَكَيَّفَ", "مَاتَ", "رَكَضَ", "نَامَ"], correctIndex: 0, explanation: "「Takayyafa (Adapted)」です。" },
      // 上級文法問題
      { id: 10736, type: "grammar_advanced", text: "「هو سلالة صغيرة」の「سلالة」の正しい語尾は？", options: ["un (タンウィーン・ダンマ)", "an (タンウィーン・ファトハ)", "in (タンウィーン・カスラ)", "u (ダンマ)"], correctIndex: 0, explanation: "「Huwa (彼/それ)」の述語（Khabar）なので主格（Marfū'）となり、タンウィーン・ダンマがつきます。" },
      { id: 10737, type: "grammar_advanced", text: "「كان يعتبر عدوا」の「عدوا」の正しい語尾は？", options: ["an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "in (タンウィーン・カスラ)", "a (ファトハ)"], correctIndex: 0, explanation: "受動態「Yu'tabaru (見なされる)」の第2目的語（補語）として対格（Manṣūb）になります。「(彼は)敵と見なされていた」という構造です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "لَا يَعْوِي الذِّئْبُ الْعَرَبِيُّ كَثِيرًا مِثْلَ بَاقِي الذِّئَابِ.", japanese: "アラビアオオカミは他のオオカミほど頻繁には遠吠えしません。" },
      { speaker: "記事", arabic: "عَيْنَاهُ صَفْرَاوَانِ وَتَلْمَعَانِ فِي الظَّلَامِ.", japanese: "その目は黄色く、暗闇で光ります。" },
      { speaker: "記事", arabic: "يُوَاجِهُ خَطَرَ الصَّيْدِ الْجَائِرِ.", japanese: "それは密猟の危険に直面しています。" },
      { speaker: "記事", arabic: "يُوجَدُ فِي الْمَنَاطِقِ الْجَبَلِيَّةِ وَالصَّحْرَاوِيَّةِ.", japanese: "山岳地帯や砂漠地帯に存在します。" }
    ]
  },
  {
    id: 1074,
    title: "女性詩人アル・ハンサー",
    category: "文学",
    level: "上級",
    contentVoweled: "الْخَنْسَاءُ هِيَ أَشْهَرُ شَوَاعِرِ الْعَرَبِ، وَعَاشَتْ فِي عَصْرَيِ الْجَاهِلِيَّةِ وَالْإِسْلَامِ. اشْتُهِرَتْ بِقَصَائِدِ الرِّثَاءِ الْحَزِينَةِ الَّتِي كَتَبَتْهَا تَبْكِي فِيهَا أَخَوَيْهَا 'صَخْرًا' وَ'مُعَاوِيَةَ' اللَّذَيْنِ قُتِلَا فِي الْمَعَارِكِ. يَتَمَيَّزُ شِعْرُهَا بِالْعَاطِفَةِ الصَّادِقَةِ وَاللُّغَةِ الْقَوِيَّةِ، وَقَدْ أَبْكَتِ النَّابِغَةَ الذُّبْيَانِيَّ بِقَصَائِدِهَا. بَعْدَ إِسْلَامِهَا، اسْتُشْهِدَ أَبْنَاؤُهَا الْأَرْبَعَةُ فِي مَعْرَكَةِ الْقَادِسِيَّةِ، فَصَبَرَتْ وَاحْتَسَبَتْ.",
    contentPlain: "الخنساء هي أشهر شواعر العرب، وعاشت في عصري الجاهلية والإسلام. اشتهرت بقصائد الرثاء الحزينة التي كتبتها تبكي فيها أخويها 'صخرا' و'معاوية' اللذين قتلا في المعارك. يتميز شعرها بالعاطفة الصادقة واللغة القوية، وقد أبكت النابغة الذبياني بقصائدها. بعد إسلامها، استشهد أبناؤها الأربعة في معركة القادسية، فصبرت واحتسبت.",
    vocabList: [
      { word: "رِثَاء", meaning: "哀悼/挽歌" },
      { word: "حَزِين", meaning: "悲しい" },
      { word: "عَاطِفَة", meaning: "感情" },
      { word: "اسْتَشْهَدَ", meaning: "殉教した" }
    ],
    questions: [
      { id: 10741, type: "reading", text: "アル・ハンサーは何で有名ですか？", options: ["料理", "最も有名な女性詩人", "女王", "医者"], correctIndex: 1, explanation: "「أشهر شواعر العرب」です。" },
      { id: 10742, type: "reading", text: "彼女の詩の主なテーマは？", options: ["愛", "リサー（死者を悼む詩/挽歌）", "政治", "自然"], correctIndex: 1, explanation: "「قصائد الرثاء الحزينة」です。" },
      { id: 10743, type: "reading", text: "彼女は誰のために泣きましたか？", options: ["夫", "二人の兄弟（サフルとムアーウィヤ）", "子供だけ", "自分"], correctIndex: 1, explanation: "「تبكي فيها أخويها (彼女の二人の兄弟を泣く)」です。" },
      { id: 10744, type: "vocabulary", text: "「مُخَضْرَم」の意味は？", options: ["若い", "二つの時代を生きた人", "戦士", "農民"], correctIndex: 1, explanation: "Veteran/Lived in two eras（ジャーヒリーヤとイスラムの両方を生きた人）です。" },
      { id: 10745, type: "grammar", text: "「殺された（受動態）」", options: ["قُتِلَ", "قَتَلَ", "مَاتَ", "عَاشَ"], correctIndex: 0, explanation: "「Qutila」です。" },
      // 上級文法問題
      { id: 10746, type: "grammar_advanced", text: "「تبكي فيها أخويها」の「أخويها」の格と理由は？", options: ["対格（目的語・双数だからYā）", "主格（主語・双数だからAlif）", "属格（前置詞の後・双数だからYā）", "対格（五つの名詞だからAlif）"], correctIndex: 0, explanation: "動詞「Tabkī (泣く/悼む)」の目的語（Maf'ūl Bihi）です。「Akhawayn (2人の兄弟)」に「hā (彼女の)」がついた形で、双数の対格なので「Yā」になり、イダーファでNūnが落ちて「Akhaway-hā」となります。" },
      { id: 10747, type: "grammar_advanced", text: "「في عصري الجاهلية」の「عصري」の格と理由は？", options: ["属格（前置詞の後・双数だからYā）", "主格（主語・双数だからAlif）", "対格（目的語・双数だからYā）", "属格（単数だからi）"], correctIndex: 0, explanation: "前置詞「Fī」の後の名詞（Majrūr）です。「'Aṣrayn (2つの時代)」がイダーファでNūnを落とし「'Aṣray」となります（属格のYā）。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "قَالَتْ: وَإِنَّ صَخْرًا لَتَأْتَمُّ الْهُدَاةُ بِهِ كَأَنَّهُ عَلَمٌ فِي رَأْسِهِ نَارُ.", japanese: "彼女は言いました。「サフルは導き手が従う存在、まるで頂に火を灯した山のようだ。」" },
      { speaker: "記事", arabic: "شِعْرُهَا يُدَرَّسُ كَنَمُوذَجٍ لِلْبَلَاغَةِ.", japanese: "彼女の詩は雄弁さのモデルとして教えられています。" },
      { speaker: "記事", arabic: "كَانَتْ قَوِيَّةَ الشَّخْصِيَّةِ وَحَكِيمَةً.", japanese: "彼女は強い性格と知恵を持っていました。" },
      { speaker: "記事", arabic: "تُعْتَبَرُ رَمْزًا لِلْوَفَاءِ وَالصَّبْرِ.", japanese: "彼女は誠実さと忍耐の象徴とみなされています。" }
    ]
  },
  {
    id: 1075,
    title: "ディルイーヤ E-Prix (Formula E)",
    category: "社会",
    level: "上級",
    contentVoweled: "سِبَاقُ الْفُورْمُولَا إِي فِي الدِّرْعِيَّةِ هُوَ حَدَثٌ رِيَاضِيٌّ عَالَمِيٌّ لِلسَّيَّارَاتِ الْكَهْرُبَائِيَّةِ يُقَامُ فِي قَلْبِ الْمَدِينَةِ التَّارِيخِيَّةِ. يَجْمَعُ السِّبَاقُ بَيْنَ عَرَاقَةِ الْمَاضِي الْمُتَمَثِّلِ فِي حَيِّ الطُّرَيْفِ التَّارِيخِيِّ، وَبَيْنَ تِكْنُولُوجِيَا الْمُسْتَقْبَلِ وَالِاسْتِدَامَةِ. يُقَامُ السِّبَاقُ لَيْلًا بِاسْتِخْدَامِ إِضَاءَةِ LED مُنْخَفِضَةِ الِاسْتِهْلَاكِ، وَيُصَاحِبُهُ فَعَّالِيَّاتٌ مُوسِيقِيَّةٌ وَثَقَافِيَّةٌ تَجْذِبُ الزُّوَّارَ مِنْ كُلِّ مَكَانٍ.",
    contentPlain: "سباق الفورمولا إي في الدرعية هو حدث رياضي عالمي للسيارات الكهربائية يقام في قلب المدينة التاريخية. يجمع السباق بين عراقة الماضي المتمثل في حي الطريف التاريخي، وبين تكنولوجيا المستقبل والاستدامة. يقام السباق ليلا باستخدام إضاءة LED منخفضة الاستهلاك، ويصاحبه فعاليات موسيقية وثقافية تجذب الزوار من كل مكان.",
    vocabList: [
      { word: "سِبَاق", meaning: "レース" },
      { word: "كَهْرُبَائِيّ", meaning: "電気の" },
      { word: "إِضَاءَة", meaning: "照明" },
      { word: "اسْتِهْلَاك", meaning: "消費" }
    ],
    questions: [
      { id: 10751, type: "reading", text: "このレースは何の車を使いますか？", options: ["ガソリン車", "電気自動車", "ソーラーカー", "蒸気機関車"], correctIndex: 1, explanation: "「للسيارات الكهربائية」です。" },
      { id: 10752, type: "reading", text: "開催場所の特徴は？", options: ["砂漠の真ん中", "歴史的な街（ディルイーヤ）の中心", "海上", "屋内"], correctIndex: 1, explanation: "「في قلب المدينة التاريخية」です。" },
      { id: 10753, type: "reading", text: "レースはいつ行われますか？", options: ["朝", "昼", "夜（ナイトレース）", "雨の時"], correctIndex: 2, explanation: "「يقام السباق ليلا」です。" },
      { id: 10754, type: "vocabulary", text: "「عَرَاقَة」の意味は？", options: ["新しさ", "深み/伝統/由緒", "弱さ", "速さ"], correctIndex: 1, explanation: "Deep-rootedness/Tradition（由緒、伝統）です。" },
      { id: 10755, type: "grammar", text: "「伴う/付随する」", options: ["يُصَاحِبُ", "يَتْرُكُ", "يَأْكُلُ", "يَذْهَبُ"], correctIndex: 0, explanation: "「Yuṣāḥibu (Accompanies)」です。" },
      // 上級文法問題
      { id: 10756, type: "grammar_advanced", text: "「سباق الفورمولا إي ... هو حدث」の「حدث」の正しい語尾は？", options: ["un (タンウィーン・ダンマ)", "an (タンウィーン・ファトハ)", "in (タンウィーン・カスラ)", "u (ダンマ)"], correctIndex: 0, explanation: "「Huwa (それ/彼)」の述語（Khabar）なので主格（Marfū'）となり、タンウィーン・ダンマがつきます。" },
      { id: 10757, type: "grammar_advanced", text: "「يقام السباق ليلا」の「ليلا」の正しい語尾は？", options: ["an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "in (タンウィーン・カスラ)", "a (ファトハ)"], correctIndex: 0, explanation: "「夜に」という時間を表す副詞（Zarf Zamān）なので、対格（Manṣūb）となり、タンウィーン・ファトハがつきます。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "يَهْدِفُ السِّبَاقُ لِلتَّرْوِيجِ لِلطَّاقَةِ النَّظِيفَةِ.", japanese: "レースはクリーンエネルギーの促進を目指しています。" },
      { speaker: "記事", arabic: "الْمَسَارُ يَمُرُّ بِجَانِبِ الْأَسْوَارِ الطِّينِيَّةِ الْقَدِيمَةِ.", japanese: "コースは古い泥壁のそばを通ります。" },
      { speaker: "記事", arabic: "يُعَدُّ هَذَا الْحَدَثُ بِدَايَةَ مَوْسِمِ الرِّيَاضَةِ.", japanese: "このイベントはスポーツシーズンの始まりとみなされます。" },
      { speaker: "記事", arabic: "السُّعُودِيَّةُ أَصْبَحَتْ وِجْهَةً لِرِيَاضَةِ الْمُحَرِّكَاتِ.", japanese: "サウジアラビアはモータースポーツの目的地となりました。" }
    ]
  },
  {
    id: 1076,
    title: "タブークの雪",
    category: "自然",
    level: "上級",
    contentVoweled: "عِنْدَمَا نُفَكِّرُ فِي السُّعُودِيَّةِ، نَتَخَيَّلُ الصَّحْرَاءَ الْحَارَّةَ، وَلَكِنْ فِي مِنْطَقَةِ تَبُوكَ شَمَالَ الْمَمْلَكَةِ، يَتَسَاقَطُ الثَّلْجُ شِتَاءً عَلَى قِمَمِ الْجِبَالِ مِثْلِ جَبَلِ اللَّوْزِ. يَكْتَسِي الرَّمْلُ وَالْجِبَالُ بِاللَّوْنِ الْأَبْيَضِ فِي مَشْهَدٍ نَادِرٍ وَسَاحِرٍ، مِمَّا يَجْذِبُ آلَافَ السُّعُودِيِّينَ لِلتَّنَزُّهِ وَالتَّخْيِيمِ وَالِاسْتِمْتَاعِ بِالطَّقْسِ الْبَارِدِ. هَذِهِ الظَّاهِرَةُ تُظْهِرُ التَّنَوُّعَ الْمُنَاخِيَّ الْكَبِيرَ فِي الْمَمْلَكَةِ.",
    contentPlain: "عندما نفكر في السعودية، نتخيل الصحراء الحارة، ولكن في منطقة تبوك شمال المملكة، يتساقط الثلج شتاء على قمم الجبال مثل جبل اللوز. يكتسي الرمل والجبال باللون الأبيض في مشهد نادر وساحر، مما يجذب آلاف السعوديين للتنزه والتخييم والاستمتاع بالطقس البارد. هذه الظاهرة تظهر التنوع المناخي الكبير في المملكة.",
    vocabList: [
      { word: "ثَلْج", meaning: "雪" },
      { word: "قِمَّة", meaning: "頂上（複：キマム）" },
      { word: "نَادِر", meaning: "珍しい" },
      { word: "تَخْيِيم", meaning: "キャンプ" }
    ],
    questions: [
      { id: 10761, type: "reading", text: "サウジの一般的なイメージと違う現象は？", options: ["雨", "雪が降ること", "風", "砂嵐"], correctIndex: 1, explanation: "「يتساقط الثلج (雪が降る)」です。" },
      { id: 10762, type: "reading", text: "どこで雪が見られますか？", options: ["リヤド", "タブーク（ジャバル・アル・ラウズ）", "ジェッダ", "ルブアルハリ"], correctIndex: 1, explanation: "「منطقة تبوك... جبل اللوز」です。" },
      { id: 10763, type: "reading", text: "人々はどう反応しますか？", options: ["逃げる", "キャンプやピクニックを楽しむ", "家から出ない", "泣く"], correctIndex: 1, explanation: "「للتنزه والتخييم والاستمتاع」です。" },
      { id: 10764, type: "vocabulary", text: "「يَكْتَسِي」の意味は？", options: ["脱ぐ", "覆われる/着る", "食べる", "走る"], correctIndex: 1, explanation: "Is clothed/Covered（覆われる）です。" },
      { id: 10765, type: "grammar", text: "「想像します」", options: ["نَتَخَيَّلُ", "نَعْرِفُ", "نَرَى", "نَسْمَعُ"], correctIndex: 0, explanation: "「Natakhayyalu (Imagine)」です。" },
      // 上級文法問題
      { id: 10766, type: "grammar_advanced", text: "「يتساقط الثلج」の「الثلج」の正しい語尾は？", options: ["u (ダンマ)", "a (ファトハ)", "i (カスラ)", "un (タンウィーン)"], correctIndex: 0, explanation: "動詞「Yatasāqaṭu (降り注ぐ)」の主語（Fā'il）なので、主格（Marfū'）となりダンマがつきます。" },
      { id: 10767, type: "grammar_advanced", text: "「في مشهد نادر」の「نادر」の正しい語尾は？", options: ["in (タンウィーン・カスラ)", "un (タンウィーン・ダンマ)", "an (タンウィーン・ファトハ)", "i (カスラ)"], correctIndex: 0, explanation: "「Mashhadin (光景・属格)」を修飾する形容詞（Na't）なので、属格（Majrūr）となり、タンウィーン・カスラがつきます。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "تَنْخَفِضُ دَرَجَةُ الْحَرَارَةِ إِلَى مَا دُونَ الصِّفْرِ.", japanese: "気温は氷点下に下がります。" },
      { speaker: "記事", arabic: "يَصْنَعُ النَّاسُ رَجُلَ الثَّلْجِ وَيَلْعَبُونَ.", japanese: "人々は雪だるまを作って遊びます。" },
      { speaker: "記事", arabic: "الْجِمَالُ (الْإِبِلُ) تَسِيرُ فَوْقَ الثُّلُوجِ فِي مَنْظَرٍ غَرِيبٍ.", japanese: "ラクダが雪の上を歩く奇妙な光景です。" },
      { speaker: "記事", arabic: "تَبُوكُ هِيَ بَوَّابَةُ الشَّمَالِ ذَاتُ الطَّبِيعَةِ الْمُتَنَوِّعَةِ.", japanese: "タブークは多様な自然を持つ北の玄関口です。" }
    ]
  },
  {
    id: 1077,
    title: "タップライン（TAPLINE）",
    category: "歴史",
    level: "上級",
    contentVoweled: "خَطُّ الْأَنَابِيبِ عَبْرَ الْبِلَادِ الْعَرَبِيَّةِ (التَّابْلَايْن) كَانَ شِرْيَانَ النِّفْطِ الَّذِي رَبَطَ حُقُولَ الْمِنْطَقَةِ الشَّرْقِيَّةِ بِمِينَاءِ صَيْدَا فِي لُبْنَانَ عَلَى الْبَحْرِ الْمُتَوَسِّطِ. عِنْدَ إِنْشَائِهِ فِي الْخَمْسِينِيَّاتِ، كَانَ أَكْبَرَ مَشْرُوعٍ هَنْدَسِيٍّ فِي الْعَالَمِ. سَاهَمَ الْخَطُّ فِي نَشْأَةِ مُدُنٍ جَدِيدَةٍ فِي شَمَالِ الْمَمْلَكَةِ (مُدُنِ التَّابْلَايْن) وَتَوْفِيرِ الْخِدْمَاتِ لَهَا. تَوَقَّفَ الْخَطُّ عَنِ الْعَمَلِ، لَكِنَّهُ بَقِيَ رَمْزًا لِبِدَايَاتِ الْعَصْرِ النِّفْطِيِّ.",
    contentPlain: "خط الأنابيب عبر البلاد العربية (التابلاين) كان شريان النفط الذي ربط حقول المنطقة الشرقية بميناء صيدا في لبنان على البحر المتوسط. عند إنشائه في الخمسينيات، كان أكبر مشروع هندسي في العالم. ساهم الخط في نشأة مدن جديدة في شمال المملكة (مدن التابلاين) وتوفير الخدمات لها. توقف الخط عن العمل، لكنه بقي رمزا لبدايات العصر النفطي.",
    vocabList: [
      { word: "أُنْبُوب", meaning: "パイプ（複：アナビーブ）" },
      { word: "حَقْل", meaning: "油田/畑（複：フクール）" },
      { word: "إِنْشَاء", meaning: "建設/設立" },
      { word: "نَشْأَة", meaning: "発生/起源" }
    ],
    questions: [
      { id: 10771, type: "reading", text: "タップラインは何を輸送していましたか？", options: ["水", "石油", "ガス", "人"], correctIndex: 1, explanation: "「شريان النفط (石油の動脈)」です。" },
      { id: 10772, type: "reading", text: "どこからどこへ繋がっていましたか？", options: ["リヤドからメッカ", "東部州からレバノン（地中海）", "イエメンからオマーン", "サウジ国内のみ"], correctIndex: 1, explanation: "「المنطقة الشرقية بميناء صيدا في لبنان」です。" },
      { id: 10773, type: "reading", text: "このラインの影響で何が生まれましたか？", options: ["砂漠", "北部の新しい都市", "山", "海"], correctIndex: 1, explanation: "「نشأة مدن جديدة في شمال المملكة」です。" },
      { id: 10774, type: "vocabulary", text: "「هَنْدَسِيّ」の意味は？", options: ["医学の", "工学の/エンジニアリングの", "芸術の", "歴史の"], correctIndex: 1, explanation: "Engineering（工学の）です。" },
      { id: 10775, type: "grammar", text: "「接続しました」", options: ["رَبَطَ", "قَطَعَ", "أَكَلَ", "فَتَحَ"], correctIndex: 0, explanation: "「Rabaṭa (Connected)」です。" },
      // 上級文法問題
      { id: 10776, type: "grammar_advanced", text: "「كان شريان النفط」の「شريان」の正しい語尾は？", options: ["a (ファトハ)", "u (ダンマ)", "i (カスラ)", "an (タンウィーン)"], correctIndex: 0, explanation: "「Kāna」の述語（Khabar Kāna）なので対格（Manṣūb）となり、ファトハがつきます（イダーファの第1要素なのでタンウィーンなし）。" },
      { id: 10777, type: "grammar_advanced", text: "「كان أكبر مشروع」の「أكبر」の正しい語尾は？", options: ["a (ファトハ)", "u (ダンマ)", "i (カスラ)", "un (タンウィーン)"], correctIndex: 0, explanation: "これも「Kāna」の述語（Khabar Kāna）なので対格となり、ファトハがつきます。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "اخْتَصَرَ الْخَطُّ مَسَافَةَ نَقْلِ النِّفْتِ إِلَى أُورُوبَّا.", japanese: "そのラインはヨーロッパへの石油輸送距離を短縮しました。" },
      { speaker: "記事", arabic: "عَمِلَ فِيهِ آلَافُ الْمُوَظَّفِينَ السُّعُودِيِّينَ.", japanese: "何千人ものサウジ人従業員がそこで働きました。" },
      { speaker: "記事", arabic: "تَمَّ تَسْجِيلُهُ كَأَوَّلِ مَوْقِعِ تُرَاثٍ صِنَاعِيٍّ فِي الْمَمْلَكَةِ.", japanese: "それは王国初の産業遺産サイトとして登録されました。" },
      { speaker: "記事", arabic: "إِنَّهُ ذِكْرَى لِعَصْرِ الطَّفْرَةِ الِاقْتِصَادِيَّةِ.", japanese: "それは経済ブーム時代の記憶です。" }
    ]
  },
  {
    id: 1078,
    title: "フラワーメン（リジャール・アルマア）",
    category: "文化",
    level: "上級",
    contentVoweled: "رِجَالُ الطِّيبِ، أَوْ رِجَالُ الزُّهُورِ، هُمْ سُكَّانُ جِبَالِ عَسِيرَ وَجَازَانَ الَّذِينَ اشْتُهِرُوا بِعَادَةِ تَزْيِينِ رُؤُوسِهِمْ بِأَطْوَاقٍ مَصْنُوعَةٍ مِنَ الزُّهُورِ وَالنَّبَاتَاتِ الْعِطْرِيَّةِ الْبَرِّيَّةِ. هَذِهِ الْعَادَةُ الْقَدِيمَةُ لَيْسَتْ مُجَرَّدَ زِينَةٍ، بَلْ هِيَ جُزْءٌ مِنْ هُوِيَّتِهِمْ وَتُرَاثِهِمْ، وَكَانَتْ تُسْتَخْدَمُ قَدِيمًا لِلطَّبَابَةِ وَلِإِعْطَاءِ رَائِحَةٍ طَيِّبَةٍ. تَخْتَلِفُ أَنْوَاعُ الزُّهُورِ وَتَصَامِيمُ الْأَطْوَاقِ حَسَبَ الْمُنَاسَبَةِ وَالْقَبِيلَةِ.",
    contentPlain: "رجال الطيب، أو رجال الزهور، هم سكان جبال عسير وجازان الذين اشتهروا بعادة تزيين رؤوسهم بأطواق مصنوعة من الزهور والنباتات العطرية البرية. هذه العادة القديمة ليست مجرد زينة، بل هي جزء من هويتهم وتراثهم، وكانت تستخدم قديما للطبابة ولإعطاء رائحة طيبة. تختلف أنواع الزهور وتصاميم الأطواق حسب المناسبة والقبيلة.",
    vocabList: [
      { word: "طَوْق", meaning: "輪/冠（複：アトワーク）" },
      { word: "زَهْرَة", meaning: "花" },
      { word: "زِينَة", meaning: "装飾/飾り" },
      { word: "عِطْرِيّ", meaning: "香り高い" }
    ],
    questions: [
      { id: 10781, type: "reading", text: "「フラワーメン」とは誰のことですか？", options: ["花屋", "アスィールやジーザーンの山岳住民", "庭師", "詩人"], correctIndex: 1, explanation: "「سكان جبال عسير وجازان」です。" },
      { id: 10782, type: "reading", text: "彼らの有名な習慣は？", options: ["花を食べる", "花の冠を頭につける", "花を売る", "花を踏む"], correctIndex: 1, explanation: "「تزيين رؤوسهم بأطواق مصنوعة من الزهور」です。" },
      { id: 10783, type: "reading", text: "これは単なる飾りですか？", options: ["はい", "いいえ、アイデンティティと伝統の一部", "遊びです", "罰です"], correctIndex: 1, explanation: "「ليست مجرد زينة، بل هي جزء من هويتهم」です。" },
      { id: 10784, type: "vocabulary", text: "「بَرِّيّ」の意味は？", options: ["家の", "野生の", "海の", "空の"], correctIndex: 1, explanation: "Wild（野生の）です。" },
      { id: 10785, type: "grammar", text: "「飾る」", options: ["تَزْيِين", "تَخْرِيب", "بِنَاء", "أَكْل"], correctIndex: 0, explanation: "「Tazyīn (Decorating)」です。" },
      // 上級文法問題
      { id: 10786, type: "grammar_advanced", text: "「هم سكان جبال」の「سكان」の正しい語尾は？", options: ["u (ダンマ)", "un (タンウィーン・ダンマ)", "a (ファトハ)", "i (カスラ)"], correctIndex: 0, explanation: "「Hum (彼らは)」の述語（Khabar）なので主格（Marfū'）となりダンマがつきます（イダーファの第1要素なのでタンウィーンなし）。" },
      { id: 10787, type: "grammar_advanced", text: "「ليست مجرد زينة」の「زينة」の正しい語尾は？", options: ["in (タンウィーン・カスラ)", "un (タンウィーン・ダンマ)", "an (タンウィーン・ファトハ)", "a (ファトハ)"], correctIndex: 0, explanation: "「Mujarrad (ただの)」の後に続く名詞（Muḍāf Ilayhi）なので、属格（Majrūr）となり、タンウィーン・カスラがつきます。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "يُسَمَّى الطَّوْقُ بِـ 'الْعِصَابَةِ' أَوْ 'الْخَطُورِ'.", japanese: "その冠は「イサーバ」や「ハトール」と呼ばれます。" },
      { speaker: "記事", arabic: "يَخْتَارُونَ الرَّيْحَانَ وَالْبَعَيْثَرَانَ لِرَائِحَتِهِمَا الْقَوِيَّةِ.", japanese: "彼らは強い香りのためにバジルやヨモギを選びます。" },
      { speaker: "記事", arabic: "هَذَا الْمَنْظَرُ يَجْذِبُ الْمُصَوِّرِينَ الْعَالَمِيِّينَ.", japanese: "この光景は世界の写真家を惹きつけます。" },
      { speaker: "記事", arabic: "إِنَّهُمْ يُحَافِظُونَ عَلَى جَمَالِ التُّرَاثِ الْجَبَلِيِّ.", japanese: "彼らは山の遺産の美しさを守っています。" }
    ]
  },
  {
    id: 1079,
    title: "ラクダミルクの効能",
    category: "健康",
    level: "上級",
    contentVoweled: "حَلِيبُ الْإِبِلِ كَانَ الْغِذَاءَ الرَّئِيسِيَّ لِلْبَدْوِ لِقُرُونٍ، وَقَدْ أَثْبَتَتِ الدِّرَاسَاتُ الْحَدِيثَةُ فَوَائِدَهُ الصِّحِّيَّةَ الْكَبِيرَةَ. يَحْتَوِي الْحَلِيبُ عَلَى نِسْبَةٍ عَالِيَةٍ مِنْ فِيتَامِين سِي (أَكْثَرَ مِنْ حَلِيبِ الْبَقَرِ) وَبُرُوتِينَاتٍ تُقَوِّي الْمَنَاعَةَ، كَمَا أَنَّهُ قَلِيلُ الدُّهُونِ وَسَهْلُ الْهَضْمِ. يُسْتَخْدَمُ فِي الطِّبِّ الشَّعْبِيِّ لِعِلَاجِ بَعْضِ الْأَمْرَاضِ، وَبَدَأَتِ الشَّرِكَاتُ الْآنَ فِي إِنْتَاجِ حَلِيبِ الْإِبِلِ الْمُبَسْتَرِ وَشُوكُولَاتَةِ حَلِيبِ الْإِبِلِ وَتَصْدِيرِهَا.",
    contentPlain: "حليب الإبل كان الغذاء الرئيسي للبدو لقرون، وقد أثبتت الدراسات الحديثة فوائده الصحية الكبيرة. يحتوي الحليب على نسبة عالية من فيتامين سي (أكثر من حليب البقر) وبروتينات تقوي المناعة، كما أنه قليل الدهون وسهل الهضم. يستخدم في الطب الشعبي لعلاج بعض الأمراض، وبدأت الشركات الآن في إنتاج حليب الإبل المبستر وشوكولاتة حليب الإبل وتصديرها.",
    vocabList: [
      { word: "حَلِيب", meaning: "ミルク" },
      { word: "مَنَاعَة", meaning: "免疫" },
      { word: "هَضْم", meaning: "消化" },
      { word: "دُهُون", meaning: "脂肪" }
    ],
    questions: [
      { id: 10791, type: "reading", text: "ラクダミルクの栄養的特徴は？", options: ["脂肪が多い", "ビタミンCが豊富で低脂肪", "体に悪い", "ビタミンがない"], correctIndex: 1, explanation: "「نسبة عالية من فيتامين سي... قليل الدهون」です。" },
      { id: 10792, type: "reading", text: "現代の研究は何を証明しましたか？", options: ["害がある", "大きな健康効果", "味が悪い", "何も証明していない"], correctIndex: 1, explanation: "「أثبتت الدراسات... فوائده الصحية الكبيرة」です。" },
      { id: 10793, type: "reading", text: "最近の製品展開は？", options: ["生産中止", "低温殺菌ミルクやチョコレート", "衣類", "燃料"], correctIndex: 1, explanation: "「حليب الإبل المبستر وشوكولاتة」です。" },
      { id: 10794, type: "vocabulary", text: "「عِلَاج」の意味は？", options: ["病気", "治療", "毒", "痛み"], correctIndex: 1, explanation: "Treatment/Cure（治療）です。" },
      { id: 10795, type: "grammar", text: "「証明しました」", options: ["أَثْبَتَتْ", "نَفَتْ", "نَسِيَتْ", "أَكَلَتْ"], correctIndex: 0, explanation: "「Athbatat (Proved)」です。" },
      // 上級文法問題
      { id: 10796, type: "grammar_advanced", text: "「كان الغذاء الرئيسي」の「الغذاء」の正しい語尾は？", options: ["a (ファトハ)", "u (ダンマ)", "i (カスラ)", "an (タンウィーン)"], correctIndex: 0, explanation: "「Kāna」の述語（Khabar Kāna）なので対格（Manṣūb）となり、ファトハがつきます。" },
      { id: 10797, type: "grammar_advanced", text: "「أثبتت الدراسات فوائده」の「فوائده」の正しい語尾は？", options: ["a (ファトハ)", "u (ダンマ)", "i (カスラ)", "in (タンウィーン)"], correctIndex: 0, explanation: "動詞「Athbatat (証明した)」の目的語（Maf'ūl Bihi）なので、対格（Manṣūb）となりファトハがつきます（Fawā'id自体は非限定名詞ですが、代名詞「hu」が付いているので規則通り）。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "يُطْلَقُ عَلَى حَلِيبِ الْإِبِلِ لَقَبُ 'صَيْدَلِيَّةِ الصَّحْرَاءِ'.", japanese: "ラクダミルクは「砂漠の薬局」というニックネームで呼ばれます。" },
      { speaker: "記事", arabic: "لَا يُسَبِّبُ حَسَاسِيَّةً مِثْلَ حَلِيبِ الْأَبْقَارِ.", japanese: "牛乳のようなアレルギーを引き起こしません。" },
      { speaker: "記事", arabic: "طَعْمُهُ يَمِيلُ إِلَى الْمُلُوحَةِ قَلِيلًا.", japanese: "味は少し塩気があります。" },
      { speaker: "記事", arabic: "أَصْبَحَ مُنْتَجًا فَاخِرًا فِي الْأَسْوَاقِ الْعَالَمِيَّةِ.", japanese: "それは世界市場で高級品となりました。" }
    ]
  },
  {
    id: 1080,
    title: "鉱業の未来",
    category: "経済",
    level: "上級",
    contentVoweled: "تَمْتَلِكُ السُّعُودِيَّةُ ثَرَوَاتٍ مَعْدِنِيَّةً غَيْرَ مُسْتَغَلَّةٍ تُقَدَّرُ قِيمَتُهَا بِـ 1.3 تِرِيلْيُونِ دُولَارٍ. تُرَكِّزُ الِاسْتِرَاتِيجِيَّةُ الْجَدِيدَةُ عَلَى التَّنْقِيبِ عَنِ الذَّهَبِ وَالنُّحَاسِ وَالزِّنْكِ وَالْمَعَادِنِ الْأَرْضِيَّةِ النَّادِرَةِ الَّتِي تَدْخُلُ فِي صِنَاعَةِ الْإِلِكْتُرُونِيَّاتِ وَالسَّيَّارَاتِ الْكَهْرُبَائِيَّةِ. تَهْدِفُ الْمَمْلَكَةُ لِتَكُونَ لَاعِبًا رَئِيسِيًّا فِي سَلَاسِلِ التَّوْرِيدِ الْعَالَمِيَّةِ لِلْمَعَادِنِ، مِمَّا يَدْعَمُ الصِّنَاعَاتِ التَّحْوِيلِيَّةَ وَيَخْلُقُ وَظَائِفَ جَدِيدَةً.",
    contentPlain: "تمتلك السعودية ثروات معدنية غير مستغلة تقدر قيمتها بـ 1.3 تريليون دولار. تركز الاستراتيجية الجديدة على التنقيب عن الذهب والنحاس والزنك والمعادن الأرضية النادرة التي تدخل في صناعة الإلكترونيات والسيارات الكهربائية. تهدف المملكة لتكون لاعبا رئيسيا في سلاسل التوريد العالمية للمعادن، مما يدعم الصناعات التحويلية ويخلق وظائف جديدة.",
    vocabList: [
      { word: "تَنْقِيب", meaning: "探査/採掘" },
      { word: "نُحَاس", meaning: "銅" },
      { word: "سِلْسِلَة", meaning: "チェーン/鎖" },
      { word: "تَوْرِيد", meaning: "供給" }
    ],
    questions: [
      { id: 10801, type: "reading", text: "サウジの未開発鉱物資源の推定価値は？", options: ["100万ドル", "1.3兆ドル", "ゼロ", "10億ドル"], correctIndex: 1, explanation: "「1.3 تريليون دولار」です。" },
      { id: 10802, type: "reading", text: "特に注目されている鉱物は？", options: ["石炭", "金、銅、レアアース", "プラスチック", "木材"], correctIndex: 1, explanation: "「الذهب والنحاس... والمعادن الأرضية النادرة」です。" },
      { id: 10803, type: "reading", text: "これらの鉱物は何に使われますか？", options: ["料理", "電子機器や電気自動車", "道路", "服"], correctIndex: 1, explanation: "「صناعة الإلكترونيات والسيارات الكهربائية」です。" },
      { id: 10804, type: "vocabulary", text: "「غَيْر مُسْتَغَلّ」の意味は？", options: ["使われた", "未開発の/利用されていない", "古い", "高い"], correctIndex: 1, explanation: "Untapped/Unexploited（未開発の）です。" },
      { id: 10805, type: "grammar", text: "「サポートする/支援する」", options: ["يَدْعَمُ", "يَمْنَعُ", "يَكْسِرُ", "يَنْسَى"], correctIndex: 0, explanation: "「Yad'amu (Supports)」です。" },
      // 上級文法問題
      { id: 10806, type: "grammar_advanced", text: "「ثروات معدنية غير」の「غير」の正しい語尾は？", options: ["a (ファトハ)", "i (カスラ)", "u (ダンマ)", "un (タンウィーン)"], correctIndex: 0, explanation: "「Tharawāt (資源・富)」は動詞「Tamtaliku (所有する)」の目的語（対格）です。女性規則複数なので「Tharawātin (カスラ)」になりますが、格としては「対格」です。したがって、それを修飾する形容詞「Ghayra」は、対格（ファトハ）を取ります。見た目のカスラに騙されてはいけません。" },
      { id: 10807, type: "grammar_advanced", text: "「تقدر قيمتها」の「قيمة」の正しい語尾は？", options: ["u (ダンマ)", "a (ファトハ)", "i (カスラ)", "un (タンウィーン)"], correctIndex: 0, explanation: "受動態「Tuqaddaru (見積もられる)」の代理主語（Nā'ib Fā'il）なので、主格（Marfū'）となりダンマがつきます。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "مَنْجَمُ 'مَهْدِ الذَّهَبِ' هُوَ أَقْدَمُ مَنْجَمٍ فِي الْمَمْلَكَةِ.", japanese: "「マハド・アッザハブ（金のゆりかご）」鉱山は王国で最も古い鉱山です。" },
      { speaker: "記事", arabic: "التَّعْدِينُ يُسَاعِدُ فِي تَقْلِيلِ الِاعْتِمَادِ عَلَى النِّفْطِ.", japanese: "鉱業は石油依存を減らすのに役立ちます。" },
      { speaker: "記事", arabic: "تُقَامُ مُؤْتَمَرَاتٌ دَوْلِيَّةٌ لِلتَّعْدِينِ فِي الرِّيَاضِ.", japanese: "リヤドで国際鉱業会議が開催されています。" },
      { speaker: "記事", arabic: "نَسْتَخْدِمُ تِقْنِيَّاتٍ حَدِيثَةً لِلْحِفَاظِ عَلَى الْبِيئَةِ أَثْنَاءَ التَّعْدِينِ.", japanese: "私たちは採掘中の環境を守るために最新技術を使用します。" }
    ]
  },
  {
    id: 1081,
    level: "上級",
    category: "ニュース",
    title: "内務省：殺人事件に対するキサース（報復刑）の執行",
    contentPlain: "أعلنت وزارة الداخلية السعودية، الأحد، تنفيذ حكم القتل \"قصاصا\" بحق مواطن في منطقة القصيم، بعد ثبوت إدانته بقتل مواطن سعودي آخر. جاء ذلك بحسب بيان للوزارة نشرته وكالة الأنباء السعودية \"واس\". وقالت وزارة الداخلية السعودية في بيانها: \"أقدم (عبد العزيز بن نجر بن زايد الغبيوي العتيبي)، سعودي الجنسية، على قتل (فالح بن محسن بن ثواب الغبيوي العتيبي)، سعودي الجنسية.\" وذلك بإطلاق النار عليه، مما أدى إلى وفاته، طبقا لوكالة \"واس\".",
    contentVoweled: "أَعْلَنَتْ وِزَارَةُ الدَّاخِلِيَّةِ السُّعُودِيَّةُ، الْأَحَدَ، تَنْفِيذَ حُكْمِ الْقَتْلِ \"قِصَاصًا\" بِحَقِّ مُوَاطِنٍ فِي مِنْطَقَةِ الْقَصِيمِ، بَعْدَ ثُبُوتِ إِدَانَتِهِ بِقَتْلِ مُوَاطِنٍ سُعُودِيٍّ آخَرَ. جَاءَ ذَلِكَ بِحَسَبِ بَيَانٍ لِلْوِزَارَةِ نَشَرَتْهُ وَكَالَةُ الْأَنْبَاءِ السُّعُودِيَّةُ \"وَاس\". وَقَالَتْ وِزَارَةُ الدَّاخِلِيَّةِ السُّعُودِيَّةُ فِي بَيَانِهَا: \"أَقْدَمَ (عَبْدُ الْعَزِيزِ بْنُ نَجْرِ بْنِ زَايِدٍ الْغَبِيوِيُّ الْعُتَيْبِيُّ)، سُعُودِيُّ الْجِنْسِيَّةِ، عَلَى قَتْلِ (فَالِحِ بْنِ مُحْسِنِ بْنِ ثَوَابٍ الْغَبِيوِيِّ الْعُتَيْبِيِّ)، سُعُودِيِّ الْجِنْسِيَّةِ.\" وَذَلِكَ بِإِطْلَاقِ النَّارِ عَلَيْهِ، مِمَّا أَدَّى إِلَى وَفَاتِهِ، طِبْقًا لِوَكَالَةِ \"وَاس\".",
    sentences: [
      {
        arabic: "أَعْلَنَتْ وِزَارَةُ الدَّاخِلِيَّةِ السُّعُودِيَّةُ، الْأَحَدَ، تَنْفِيذَ حُكْمِ الْقَتْلِ \"قِصَاصًا\" بِحَقِّ مُوَاطِنٍ فِي مِنْطَقَةِ الْقَصِيمِ، بَعْدَ ثُبُوتِ إِدَانَتِهِ بِقَتْلِ مُوَاطِنٍ سُعُودِيٍّ آخَرَ.",
        japanese: "サウジアラビア内務省は日曜日、カズィーム地方において、別のサウジアラビア国民を殺害した罪で有罪が確定した国民に対し、「キサース（同害報復刑）」としての死刑を執行したと発表した。",
        speaker: "ナレーター"
      },
      {
        arabic: "جَاءَ ذَلِكَ بِحَسَبِ بَيَانٍ لِلْوِزَارَةِ نَشَرَتْهُ وَكَالَةُ الْأَنْبَاءِ السُّعُودِيَّةُ \"وَاس\".",
        japanese: "これはサウジ通信社（SPA）が伝えた同省の声明によるものである。",
        speaker: "ナレーター"
      },
      {
        arabic: "وَقَالَتْ وِزَارَةُ الدَّاخِلِيَّةِ السُّعُودِيَّةُ فِي بَيَانِهَا: \"أَقْدَمَ (عَبْدُ الْعَزِيزِ)... عَلَى قَتْلِ (فَالِحِ)...\"",
        japanese: "内務省は声明で次のように述べた。「（アブドゥルアズィーズ…は）（ファーリフ…を）殺害した。」",
        speaker: "声明"
      },
      {
        arabic: "وَذَلِكَ بِإِطْلَاقِ النَّارِ عَلَيْهِ، مِمَّا أَدَّى إِلَى وَفَاتِهِ، طِبْقًا لِوَكَالَةِ \"وَاس\".",
        japanese: "犯行は被害者への発砲によるものであり、それが原因で被害者は死亡したとSPAは報じている。",
        speaker: "声明"
      }
    ],
    vocabList: [
      { word: "وِزَارَةُ الدَّاخِلِيَّةِ", meaning: "内務省" },
      { word: "تَنْفِيذ", meaning: "執行・実施" },
      { word: "قِصَاص", meaning: "キサース（同害報復刑）" },
      { word: "إِدَانَة", meaning: "有罪判決" },
      { word: "بَيَان", meaning: "声明" },
      { word: "إِطْلَاقُ النَّارِ", meaning: "発砲" },
      { word: "وَفَاة", meaning: "死亡" }
    ],
    questions: [
      {
        id: 10811,
        text: "このニュースで発表された刑罰の種類は何ですか？",
        options: ["السِّجْن (拘禁刑)", "الْقِصَاص (報復刑)", "الْغَرَامَة (罰金刑)", "التَّرْحِيل (国外追放)"],
        correctIndex: 1,
        explanation: "本文に「تَنْفِيذَ حُكْمِ الْقَتْلِ قِصَاصًا（キサースとしての死刑執行）」と明記されています。",
        type: "reading"
      },
      {
        id: 10812,
        text: "この事件が起きた地域はどこですか？",
        options: ["الرِّيَاض (リヤド)", "مَكَّة (マッカ)", "الْقَصِيم (カズィーム)", "الشَّرْقِيَّة (東部州)"],
        correctIndex: 2,
        explanation: "本文に「فِي مِنْطَقَةِ الْقَصِيمِ（カズィーム地方において）」とあります。",
        type: "reading"
      },
      {
        id: 10813,
        text: "殺害の手段として言及されているのは何ですか？",
        options: ["السُّمّ (毒殺)", "الطَّعْن (刺殺)", "إِطْلَاقُ النَّارِ (発砲)", "حَادِثُ مُرُورٍ (交通事故)"],
        correctIndex: 2,
        explanation: "「بِإِطْلَاقِ النَّارِ عَلَيْهِ（彼に対する発砲によって）」と述べられています。",
        type: "reading"
      },
      // 文法問題（仕様変更後）
      {
        id: 10814,
        text: "「أعلنت وزارة الداخلية」の「وزارة」の正しい語尾は？",
        options: ["u (主格・主語だから)", "a (対格・目的語だから)", "i (属格・前置詞の後だから)", "un (タンウィーン・主語だから)"],
        correctIndex: 0,
        explanation: "動詞「A'lanat（発表した）」の動作主（Fā'il）であるため、主格（Marfū'）となりダンマがつきます。イダーファの第1要素なのでタンウィーンはつきません。",
        type: "grammar_advanced"
      },
      {
        id: 10815,
        text: "「تنفيذ حكم القتل」の「تنفيذ」の正しい語尾は？",
        options: ["a (対格・目的語だから)", "u (主格・主語だから)", "i (属格・形容詞だから)", "an (タンウィーン・状況格だから)"],
        correctIndex: 0,
        explanation: "「〜の執行を（発表した）」という意味で、動詞の対象となっているため「目的語（Maf'ūl Bihi）」となり、対格（Manṣūb）のファトハを取ります。",
        type: "grammar_advanced"
      }
    ]
  },
  {
    id: 1086,
    level: "上級",
    category: "経済",
    title: "サウジ経済の構造転換と非石油部門の成長",
    contentPlain: "في ظل المضي قدماً نحو تحقيق مستهدفات \"رؤية المملكة 2030\"، أظهرت المؤشرات الاقتصادية الأخيرة تحولات نوعية في بنية الاقتصاد السعودي، حيث سجلت الأنشطة غير النفطية نموًا متسارعًا بات يشكل ركيزة أساسية في الناتج المحلي الإجمالي. ولم يعد هذا النمو مجرد طفرة مؤقتة، بل أصبح يعكس نجاح السياسات الرامية إلى تقليل الاعتماد التاريخي على العوائد النفطية وتنويع مصادر الدخل القومي.\nوتشير البيانات الصادرة عن الهيئة العامة للإحصاء إلى أن مساهمة القطاع الخاص في الاقتصاد الوطني قد بلغت مستويات قياسية، مدفوعةً بالاستثمارات الضخمة في قطاعات السياحة، والترفيه، والتكنولوجيا، والطاقة المتجددة. ويأتي هذا الحراك الاقتصادي متزامنًا مع إصلاحات هيكلية في سوق العمل، تضمنت تمكين المرأة وزيادة معدلات التوطين، مما ساهم في خفض معدلات البطالة إلى أدنى مستوياتها التاريخية.\nويرى الخبراء الاقتصاديون أن استمرار المملكة في ضخ الاستثمارات عبر \"صندوق الاستثمارات العامة\" يلعب دورًا محوريًا في خلق قطاعات جديدة كليًا لم تكن موجودة سابقًا. ومع ذلك، لا تزال هناك تحديات تتعلق بضرورة الحفاظ على الاستدامة المالية في ظل تقلبات الاقتصاد العالمي، إلا أن الاحتياطيات الأجنبية القوية والسياسات المالية الحذرة تشكل حائط صد منيع أمام أي صدمات خارجية محتملة. إن الرهان اليوم لم يعد مقتصرًا على أسعار الطاقة، بل على قدرة المملكة على تحويل اقتصادها إلى مركز لوجستي وصناعي عالمي يربط بين القارات الثلاث.",
    contentVoweled: "فِي ظِلِّ الْمُضِيِّ قُدُمًا نَحْوَ تَحْقِيقِ مُسْتَهْدَفَاتِ \"رُؤْيَةِ الْمَمْلَكَةِ 2030\"، أَظْهَرَتِ الْمُؤَشِّرَاتُ الِاقْتِصَادِيَّةُ الْأَخِيرَةُ تَحَوُّلَاتٍ نَوْعِيَّةً فِي بِنْيَةِ الِاقْتِصَادِ السُّعُودِيِّ، حَيْثُ سَجَّلَتِ الْأَنْشِطَةُ غَيْرُ النَّفْطِيَّةِ نُمُوًّا مُتَسَارِعًا بَاتَ يُشَكِّلُ رَكِيزَةً أَسَاسِيَّةً فِي النَّاتِجِ الْمَحَلِّيِّ الْإِجْمَالِيِّ. وَلَمْ يَعُدْ هَذَا النُّمُوُّ مُجَرَّدَ طَفْرَةٍ مُؤَقَّتَةٍ، بَلْ أَصْبَحَ يَعْكِسُ نَجَاحَ السِّيَاسَاتِ الرَّامِيَةِ إِلَى تَقْلِيلِ الِاعْتِمَادِ التَّارِيخِيِّ عَلَى الْعَوَائِدِ النَّفْطِيَّةِ وَتَنْوِيعِ مَصَادِرِ الدَّخْلِ الْقَوْمِيِّ.\nوَتُشِيرُ الْبَيَانَاتُ الصَّادِرَةُ عَنِ الْهَيْئَةِ الْعَامَّةِ لِلْإِحْصَاءِ إِلَى أَنَّ مُسَاهَمَةَ الْقِطَاعِ الْخَاصِّ فِي الِاقْتِصَادِ الْوَطَنِيِّ قَدْ بَلَغَتْ مُسْتَوَيَاتٍ قِيَاسِيَّةً، مَدْفُوعَةً بِالِاسْتِثْمَارَاتِ الضَّخْمَةِ فِي قِطَاعَاتِ السِّيَاحَةِ، وَالتَّرْفِيهِ، وَالتِّكْنُولُوجِيَا، وَالطَّاقَةِ الْمُتَجَدِّدَةِ. وَيَأْتِي هَذَا الْحَرَاكُ الِاقْتِصَادِيُّ مُتَزَامِنًا مَعَ إِصْلَاحَاتٍ هَيْكَلِيَّةٍ فِي سُوقِ الْعَمَلِ، تَضَمَّنَتْ تَمْكِينَ الْمَرْأَةِ وَزِيَادَةَ مُعَدَّلَاتِ التَّوْطِينِ، مِمَّا سَاهَمَ فِي خَفْضِ مُعَدَّلَاتِ الْبِطَالَةِ إِلَى أَدْنَى مُسْتَوَيَاتِهَا التَّارِيخِيَّةِ.\nوَيَرَى الْخُبَرَاءُ الِاقْتِصَادِيُّونَ أَنَّ اسْتِمْرَارَ الْمَمْلَكَةِ فِي ضَخِّ الِاسْتِثْمَارَاتِ عَبْرَ \"صُنْدُوقِ الِاسْتِثْمَارَاتِ الْعَامَّةِ\" يَلْعَبُ دَوْرًا مِحْوَرِيًّا فِي خَلْقِ قِطَاعَاتٍ جَدِيدَةٍ كُلِّيًّا لَمْ تَكُنْ مَوْجُودَةً سَابِقًا. وَمَعَ ذَلِكَ، لَا تَزَالُ هُنَاكَ تَحَدِّيَاتٌ تَتَعَلَّقُ بِضَرُورَةِ الْحِفَاظِ عَلَى الِاسْتِدَامَةِ الْمَالِيَّةِ فِي ظِلِّ تَقَلُّبَاتِ الِاقْتِصَادِ الْعَالَمِيِّ، إِلَّا أَنَّ الِاحْتِيَاطِيَّاتِ الْأَجْنَبِيَّةَ الْقَوِيَّةَ وَالسِّيَاسَاتِ الْمَالِيَّةَ الْحَذِرَةَ تُشَكِّلُ حَائِطَ صَدٍّ مَنِيعٍ أَمَامَ أَيِّ صَدَمَاتٍ خَارِجِيَّةٍ مُحْتَمَلَةٍ. إِنَّ الرِّهَانَ الْيَوْمَ لَمْ يَعُدْ مُقْتَصِرًا عَلَى أَسْعَارِ الطَّاقَةِ، بَلْ عَلَى قُدْرَةِ الْمَمْلَكَةِ عَلَى تَحْوِيلِ اقْتِصَادِهَا إِلَى مَرْكَزٍ لُوجِسْتِيٍّ وَصِنَاعِيٍّ عَالَمِيٍّ يَرْبِطُ بَيْنَ الْقَارَّاتِ الثَّلَاثِ.",
    vocabList: [
      { word: "رَكِيزَة", meaning: "柱/基盤" },
      { word: "نَاتِج مَحَلِّي", meaning: "GDP (国内総生産)" },
      { word: "طَفْرَة", meaning: "急増/ブーム" },
      { word: "تَوْطِين", meaning: "現地化/サウジ人化" },
      { word: "اسْتِدَامَة مَالِيَّة", meaning: "財政的持続可能性" }
    ],
    questions: [
      {
        id: 10861,
        type: "reading",
        text: "このテキストによると、現在のサウジアラビア経済の成長において「非石油部門」はどのような位置づけにあるとされていますか？",
        options: ["一時的なブームであり、長期的には石油収入に依存し続けると予想されている。", "国内総生産（GDP）の基盤となり、経済構造の質的な転換を反映している。", "公共投資基金の支援がなければ崩壊する脆弱なセクターである。", "失業率の低下には寄与しているが、国の収入源としてはまだ微々たるものである。"],
        correctIndex: 1,
        explanation: "テキストに「GDPの基本的な柱となった」「質的な転換を反映している」とあるため。"
      },
      {
        id: 10862,
        type: "reading",
        text: "テキスト内で言及されている「経済専門家の見解」として最も適切なものはどれですか？",
        options: ["世界経済の変動が激しいため、新規プロジェクトへの投資を直ちに縮小すべきである。", "サウジアラビアは石油価格の変動のみに依存する古い経済モデルに戻りつつある。", "公共投資基金による投資は、以前は存在しなかった新しい産業分野を創出する上で中心的な役割を果たしている。", "民間セクターの貢献度は過去最高に達したが、外国人労働者の増加が懸念材料である。"],
        correctIndex: 2,
        explanation: "「専門家は、公共投資基金（PIF）を通じた投資が、以前は存在しなかった全く新しいセクターを創出する上で中心的役割を果たしていると考えている」という記述と合致します。"
      },
      {
        id: 10863,
        type: "reading",
        text: "著者が結論部分で述べている「今日の賭け（الرهان اليوم）」とは何を指していますか？",
        options: ["石油価格が将来的に上昇し続けることへの期待。", "外貨準備高をさらに増やし、世界一の富裕国になること。", "外部からの経済ショックを完全に回避すること。", "サウジアラビアが世界的な物流・産業のハブへと経済転換できるかどうか。"],
        correctIndex: 3,
        explanation: "最後の文で「今日の賭けは…王国が経済を世界的な物流・産業ハブに変える能力にある」と述べられています。"
      },
      // 上級文法問題
      {
        id: 10864,
        type: "grammar_advanced",
        text: "「أظهرت المؤشرات الاقتصادية」の「الاقتصادية」の正しい語尾は？",
        options: ["u (主格・形容詞だから)", "a (対格・形容詞だから)", "i (属格・形容詞だから)", "un (タンウィーン・主語だから)"],
        correctIndex: 0,
        explanation: "「Al-Mu'ashshirāt (指標・主語・主格)」を修飾する形容詞（Na't）であるため、主格（Marfū'）となりダンマがつきます。"
      },
      {
        id: 10865,
        type: "grammar_advanced",
        text: "「في ظل تقلبات الاقتصاد」の「تقلبات」の正しい語尾は？",
        options: ["i (属格・イダーファの第2要素だから)", "a (対格・目的語だから)", "u (主格・主語だから)", "in (タンウィーン・属格だから)"],
        correctIndex: 0,
        explanation: "「Ẓill (〜の下で)」という名詞の後のイダーファ第2要素（属格）です。さらに後ろに「Al-Iqtiṣād」が続くため（連鎖イダーファ）、タンウィーンなしのカスラになります。"
      }
    ],
    sentences: [
      {
        speaker: "記事",
        arabic: "فِي ظِلِّ الْمُضِيِّ قُدُمًا نَحْوَ تَحْقِيقِ مُسْتَهْدَفَاتِ \"رُؤْيَةِ الْمَمْلَكَةِ 2030\"، أَظْهَرَتِ الْمُؤَشِّرَاتُ الِاقْتِصَادِيَّةُ الْأَخِيرَةُ تَحَوُّلَاتٍ نَوْعِيَّةً فِي بِنْيَةِ الِاقْتِصَادِ السُّعُودِيِّ.",
        japanese: "「ビジョン2030」の目標達成に向けて前進する中、最近の経済指標はサウジアラビア経済の構造における質的な転換を示しました。"
      },
      {
        speaker: "記事",
        arabic: "حَيْثُ سَجَّلَتِ الْأَنْشِطَةُ غَيْرُ النَّفْطِيَّةِ نُمُوًّا مُتَسَارِعًا بَاتَ يُشَكِّلُ رَكِيزَةً أَسَاسِيَّةً فِي النَّاتِجِ الْمَحَلِّيِّ الْإِجْمَالِيِّ.",
        japanese: "非石油活動は国内総生産（GDP）の基本的な柱となる加速的な成長を記録しました。"
      },
      {
        speaker: "記事",
        arabic: "وَلَمْ يَعُدْ هَذَا النُّمُوُّ مُجَرَّدَ طَفْرَةٍ مُؤَقَّتَةٍ، بَلْ أَصْبَحَ يَعْكِسُ نَجَاحَ السِّيَاسَاتِ الرَّامِيَةِ إِلَى تَقْلِيلِ الِاعْتِمَادِ التَّارِيخِيِّ عَلَى الْعَوَائِدِ النَّفْطِيَّةِ.",
        japanese: "この成長はもはや単なる一時的なブームではなく、石油収入への歴史的な依存を減らすことを目的とした政策の成功を反映しています。"
      },
      {
        speaker: "記事",
        arabic: "وَيَرَى الْخُبَرَاءُ الِاقْتِصَادِيُّونَ أَنَّ اسْتِمْرَارَ الْمَمْلَكَةِ فِي ضَخِّ الِاسْتِثْمَارَاتِ عَبْرَ \"صُنْدُوقِ الِاسْتِثْمَارَاتِ الْعَامَّةِ\" يَلْعَبُ دَوْرًا مِحْوَرِيًّا فِي خَلْقِ قِطَاعَاتٍ جَدِيدَةٍ.",
        japanese: "経済専門家は、王国が「公共投資基金（PIF）」を通じて投資を継続していることが、新しいセクターを創出する上で中心的な役割を果たしていると考えています。"
      }
    ]
  },
  {
    id: 1087,
    level: "上級",
    category: "環境",
    title: "サウジ・グリーン・イニシアティブ",
    contentPlain: "تواصل المملكة العربية السعودية تكثيف جهودها في مجال حماية البيئة ومكافحة التغير المناخي من خلال \"مبادرة السعودية الخضراء\"، التي تهدف إلى زراعة 10 مليارات شجرة في جميع أنحاء المملكة خلال العقود القادمة. وتعتبر هذه الخطوة جزءًا من التزام المملكة بخفض الانبعاثات الكربونية والوصول إلى الحياد الصفري بحلول عام 2060، وهو ما يمثل تحديًا كبيرًا لدولة لطالما ارتبط اقتصادها بإنتاج الوقود الأحفوري.\nلا تقتصر المبادرة على التشجير فحسب، بل تمتد لتشمل مشاريع ضخمة في مجال الطاقة المتجددة، حيث يتم بناء محطات للطاقة الشمسية وطاقة الرياح بقدرات إنتاجية هائلة تهدف إلى استبدال الاعتماد على الوقود السائل في محطات الكهرباء بنسبة 50% بحلول عام 2030. وعلاوة على ذلك، تركز الاستراتيجية على حماية المناطق البرية والبحرية، وإعادة تأهيل المحميات الطبيعية للحفاظ على التنوع البيولوجي المهدد بالانقراض.\nويؤكد المسؤولون أن هذه التحركات ليست مجرد شعارات بيئية، بل هي ضرورة اقتصادية واجتماعية لتحسين جودة الحياة والحد من العواصف الرملية التي تكلف الاقتصاد مليارات الدولارات سنويًا. إن التحول نحو الاقتصاد الأخضر يفتح آفاقًا جديدة للابتكار والاستثمار، ويضع المملكة في طليعة الدول المصدرة للهيدروجين النظيف، مما يعزز مكانتها كلاعب رئيسي في أسواق الطاقة المستقبلية، وليس فقط التقليدية.",
    contentVoweled: "تُوَاصِلُ الْمَمْلَكَةُ الْعَرَبِيَّةُ السُّعُودِيَّةُ تَكْثِيفَ جُهُودِهَا فِي مَجَالِ حِمَايَةِ الْبِيئَةِ وَمُكَافَحَةِ التَّغَيُّرِ الْمُنَاخِيِّ مِنْ خِلَالِ \"مُبَادَرَةِ السُّعُودِيَّةِ الْخَضْرَاءِ\"، الَّتِي تَهْدِفُ إِلَى زِرَاعَةِ 10 مِلْيَارَاتِ شَجَرَةٍ فِي جَمِيعِ أَنْحَاءِ الْمَمْلَكَةِ خِلَالَ الْعُقُودِ الْقَادِمَةِ. وَتُعْتَبَرُ هَذِهِ الْخُطْوَةُ جُزْءًا مِنَ الْتِزَامِ الْمَمْلَكَةِ بِخَفْضِ الِانْبِعَاثَاتِ الْكَرْبُونِيَّةِ وَالْوُصُولِ إِلَى الْحِيَادِ الصِّفْرِيِّ بِحُلُولِ عَامِ 2060، وَهُوَ مَا يُمَثِّلُ تَحَدِّيًا كَبِيرًا لِدَوْلَةٍ لَطَالَمَا ارْتَبَطَ اقْتِصَادُهَا بِإِنْتَاجِ الْوَقُودِ الْأُحْفُورِيِّ.\nلَا تَقْتَصِرُ الْمُبَادَرَةُ عَلَى التَّشْجِيرِ فَحَسْبُ، بَلْ تَمْتَدُّ لِتَشْمَلَ مَشَارِيعَ ضَخْمَةً فِي مَجَالِ الطَّاقَةِ الْمُتَجَدِّدَةِ، حَيْثُ يَتِمُّ بِنَاءُ مَحَطَّاتٍ لِلطَّاقَةِ الشَّمْسِيَّةِ وَطَاقَةِ الرِّيَاحِ بِقُدُرَاتٍ إِنْتَاجِيَّةٍ هَائِلَةٍ تَهْدِفُ إِلَى اسْتِبْدَالِ الِاعْتِمَادِ عَلَى الْوَقُودِ السَّائِلِ فِي مَحَطَّاتِ الْكَهْرَبَاءِ بِنِسْبَةِ 50% بِحُلُولِ عَامِ 2030. وَعَلَاوَةً عَلَى ذَلِكَ، تُرَكِّزُ الِاسْتِرَاتِيجِيَّةُ عَلَى حِمَايَةِ الْمَنَاطِقِ الْبَرِّيَّةِ وَالْبَحْرِيَّةِ، وَإِعَادَةِ تَأْهِيلِ الْمَحْمِيَّاتِ الطَّبِيعِيَّةِ لِلْحِفَاظِ عَلَى التَّنَوُّعِ الْبِيُولُوجِيِّ الْمُهَدَّدِ بِالِانْقِرَاضِ.\nوَيُؤَكِّدُ الْمَسْؤُولُونَ أَنَّ هَذِهِ التَّحَرُّكَاتِ لَيْسَتْ مُجَرَّدَ شِعَارَاتٍ بِيئِيَّةٍ، بَلْ هِيَ ضَرُورَةٌ اقْتِصَادِيَّةٌ وَاجْتِمَاعِيَّةٌ لِتَحْسِينِ جَوْدَةِ الْحَيَاةِ وَالْحَدِّ مِنَ الْعَوَاصِفِ الرَّمْلِيَّةِ الَّتِي تُكَلِّفُ الِاقْتِصَادَ مِلْيَارَاتِ الدُّولَارَاتِ سَنَوِيًّا. إِنَّ التَّحَوُّلَ نَحْوَ الِاقْتِصَادِ الْأَخْضَرِ يَفْتَحُ آفَاقًا جَدِيدَةً لِلِابْتِكَارِ وَالِاسْتِثْمَارِ، وَيَضَعُ الْمَمْلَكَةَ فِي طَلِيعَةِ الدُّوَلِ الْمُصَدِّرَةِ لِلْهِيدْرُوجِينِ النَّظِيفِ، مِمَّا يُعَزِّزُ مَكَانَتَهَا كَلَاعِبٍ رَئِيسِيٍّ فِي أَسْوَاقِ الطَّاقَةِ الْمُسْتَقْبَلِيَّةِ، وَلَيْسَ فَقَطِ التَّقْلِيدِيَّةِ.",
    vocabList: [
      { word: "حِيَاد صِفْرِي", meaning: "カーボンニュートラル" },
      { word: "وَقُود أُحْفُورِي", meaning: "化石燃料" },
      { word: "طَاقَة مُتَجَدِّدَة", meaning: "再生可能エネルギー" },
      { word: "مَحْمِيَّات", meaning: "保護区" },
      { word: "هَيْدْرُوجِين", meaning: "水素" }
    ],
    questions: [
      {
        id: 10871,
        type: "reading",
        text: "「サウジ・グリーン・イニシアティブ」の範囲について、テキストの内容と合致する記述はどれですか？",
        options: ["植林のみに焦点を当てており、エネルギー分野への介入は含まれていない。", "単なる植林にとどまらず、再生可能エネルギーへの移行や自然保護区の再生も包括している。", "2060年までに化石燃料の使用を完全に廃止することを目標としている。", "環境保護活動家への資金援助を主目的としており、インフラ整備は二の次である。"],
        correctIndex: 1,
        explanation: "「植林に限らず（لا تقتصر... على التشجير فحسب）、再生可能エネルギーや自然保護区の再生も含む」と明記されています。"
      },
      {
        id: 10872,
        type: "reading",
        text: "テキストによると、環境対策が「経済的・社会的必要性」であるとされる具体的な理由の一つは何ですか？",
        options: ["国際的な圧力を回避し、外交関係を改善するため。", "砂嵐による経済的損失を減らし、生活の質を向上させるため。", "観光客を増やすために、砂漠を完全に緑地に変える必要があるため。", "石油の埋蔵量が枯渇しつつあるため、代替エネルギーが急務であるため。"],
        correctIndex: 1,
        explanation: "「砂嵐を減らす（الحد من العواصف الرملية）」ことは「経済に数十億ドルの損害を与えている」状況を改善し、生活の質を向上させるためです。"
      },
      {
        id: 10873,
        type: "reading",
        text: "著者はサウジアラビアのエネルギー市場における将来の立ち位置をどのように予測していますか？",
        options: ["クリーン水素の輸出などを通じ、未来のエネルギー市場でも主要なプレイヤーであり続ける。", "化石燃料の需要低下に伴い、エネルギー大国としての地位を失う。", "国内消費のみに注力し、エネルギー輸出からは撤退する。", "太陽光発電技術の輸入国として、他国への依存度が高まる。"],
        correctIndex: 0,
        explanation: "最後の文で、クリーン水素の輸出などを通じて「将来のエネルギー市場における主要なプレイヤーとしての地位を強化する」とあります。"
      },
      // 上級文法問題
      {
        id: 10874,
        type: "grammar_advanced",
        text: "「تكثيف جهودها」の「جهود」の正しい語尾は？",
        options: ["i (属格・イダーファの第2要素だから)", "a (対格・目的語だから)", "u (主格・主語だから)", "in (タンウィーン・属格だから)"],
        correctIndex: 0,
        explanation: "動名詞「Takthīf (強化すること)」の後のイダーファ第2要素（属格）です。代名詞「hā」が付いているのでタンウィーンはつきません。"
      },
      {
        id: 10875,
        type: "grammar_advanced",
        text: "「تعتبر هذه الخطوة جزءا」の「جزءا」の正しい語尾は？",
        options: ["an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "in (タンウィーン・カスラ)", "a (ファトハ)"],
        correctIndex: 0,
        explanation: "受動態「Tu'tabaru (Considered)」の第2目的語（補語）として対格（Manṣūb）になり、タンウィーン・ファトハがつきます。"
      }
    ],
    sentences: [
      {
        speaker: "記事",
        arabic: "تُوَاصِلُ الْمَمْلَكَةُ الْعَرَبِيَّةُ السُّعُودِيَّةُ تَكْثِيفَ جُهُودِهَا فِي مَجَالِ حِمَايَةِ الْبِيئَةِ وَمُكَافَحَةِ التَّغَيُّرِ الْمُنَاخِيِّ.",
        japanese: "サウジアラビア王国は、環境保護と気候変動対策の分野での取り組みを強化し続けています。"
      },
      {
        speaker: "記事",
        arabic: "وَتُعْتَبَرُ هَذِهِ الْخُطْوَةُ جُزْءًا مِنَ الْتِزَامِ الْمَمْلَكَةِ بِخَفْضِ الِانْبِعَاثَاتِ الْكَرْبُونِيَّةِ وَالْوُصُولِ إِلَى الْحِيَادِ الصِّفْرِيِّ.",
        japanese: "このステップは、炭素排出量を削減し、カーボンニュートラルを達成するという王国のコミットメントの一部とみなされています。"
      },
      {
        speaker: "記事",
        arabic: "لَا تَقْتَصِرُ الْمُبَادَرَةُ عَلَى التَّشْجِيرِ فَحَسْبُ، بَلْ تَمْتَدُّ لِتَشْمَلَ مَشَارِيعَ ضَخْمَةً فِي مَجَالِ الطَّاقَةِ الْمُتَجَدِّدَةِ.",
        japanese: "このイニシアティブは植林だけにとどまらず、再生可能エネルギー分野の巨大プロジェクトにも広がっています。"
      },
      {
        speaker: "記事",
        arabic: "إِنَّ التَّحَوُّلَ نَحْوَ الِاقْتِصَادِ الْأَخْضَرِ يَفْتَحُ آفَاقًا جَدِيدَةً لِلِابْتِكَارِ وَالِاسْتِثْمَارِ.",
        japanese: "グリーン経済への転換は、イノベーションと投資の新たな展望を開きます。"
      }
    ]
  },
  {
    id: 1088,
    level: "上級",
    category: "プロジェクト",
    title: "NEOMとザ・ライン：未来都市の定義",
    contentPlain: "يمثل مشروع \"نيوم\" تجسيدًا حيًا للطموحات السعودية في خلق نموذج عالمي للمدن الإدراكية التي تعتمد كليًا على الطاقة النظيفة والذكاء الاصطناعي. وفي قلب هذا المشروع تقع مدينة \"ذا لاين\"، التي أثارت جدلاً واسعًا واهتمامًا عالميًا بسبب تصميمها الثوري الذي يتحدى المفاهيم التقليدية للتخطيط العمراني، حيث تمتد المدينة طوليًا لمسافة 170 كيلومترًا دون شوارع أو سيارات أو انبعاثات كربونية.\nيعتمد المشروع على بنية تحتية رقمية فائقة التطور، حيث يتم تسخير البيانات الضخمة لتحسين كفاءة الخدمات وتوفير تجربة معيشية استثنائية للسكان. والهدف ليس مجرد بناء مدينة سكنية، بل إنشاء مركز عالمي للابتكار يجذب العقول المبدعة والشركات الناشئة في مجالات التكنولوجيا الحيوية، والمياه، والغذاء. ومع تسارع وتيرة الأعمال الإنشائية، تبرز تساؤلات حول التحديات الهندسية والتمويلية لهذا المشروع العملاق.\nومع ذلك، تؤكد القيادة السعودية أن \"نيوم\" ستعمل بموجب قوانين وتشريعات خاصة تمنحها مرونة تجارية وقضائية مستقلة، مما يعزز جاذبيتها للمستثمرين الأجانب. إن نجاح \"ذا لاين\" سيعني نقلة نوعية في كيفية تعايش البشر مع الطبيعة والتكنولوجيا، محولاً الصحراء القاحلة إلى مختبر مفتوح لمستقبل البشرية.",
    contentVoweled: "يُمَثِّلُ مَشْرُوعُ \"نِيُوم\" تَجْسِيدًا حَيًّا لِلطُّمُوحَاتِ السُّعُودِيَّةِ فِي خَلْقِ نَمُوذَجٍ عَالَمِيٍّ لِلْمُدُنِ الْإِدْرَاكِيَّةِ الَّتِي تَعْتَمِدُ كُلِّيًّا عَلَى الطَّاقَةِ النَّظِيفَةِ وَالذَّكَاءِ الِاصْطِنَاعِيِّ. وَفِي قَلْبِ هَذَا الْمَشْرُوعِ تَقَعُ مَدِينَةُ \"ذَا لَايْن\"، الَّتِي أَثَارَتْ جَدَلًا وَاسِعًا وَاهْتِمَامًا عَالَمِيًّا بِسَبَبِ تَصْمِيمِهَا الثَّوْرِيِّ الَّذِي يَتَحَدَّى الْمَفَاهِيمَ التَّقْلِيدِيَّةَ لِلتَّخْطِيطِ الْعُمْرَانِيِّ، حَيْثُ تَمْتَدُّ الْمَدِينَةُ طُولِيًّا لِمَسَافَةِ 170 كِيلُومِتْرًا دُونَ شَوَارِعَ أَوْ سَيَّارَاتٍ أَوْ انْبِعَاثَاتٍ كَرْبُونِيَّةٍ.\nيَعْتَمِدُ الْمَشْرُوعُ عَلَى بِنْيَةٍ تَحْتِيَّةٍ رَقْمِيَّةٍ فَائِقَةِ التَّطَوُّرِ، حَيْثُ يَتِمُّ تَسْخِيرُ الْبَيَانَاتِ الضَّخْمَةِ لِتَحْسِينِ كَفَاءَةِ الْخِدْمَاتِ وَتَوْفِيرِ تَجْرِبَةٍ مَعِيشِيَّةٍ اسْتِثْنَائِيَّةٍ لِلسُّكَّانِ. وَالْهَدَفُ لَيْسَ مُجَرَّدَ بِنَاءِ مَدِينَةٍ سَكَنِيَّةٍ، بَلْ إِنْشَاءُ مَرْكَزٍ عَالَمِيٍّ لِلِابْتِكَارِ يَجْذِبُ الْعُقُولَ الْمُبْدِعَةَ وَالشَّرِكَاتِ النَّاشِئَةَ فِي مَجَالَاتِ التِّكْنُولُوجِيَا الْحَيَوِيَّةِ، وَالْمِيَاهِ، وَالْغِذَاءِ. وَمَعَ تَسَارُعِ وَتِيرَةِ الْأَعْمَالِ الْإِنْشَائِيَّةِ، تَبْرُزُ تَسَاؤُلَاتٌ حَوْلَ التَّحَدِّيَاتِ الْهَنْدَسِيَّةِ وَالتَّمْوِيلِيَّةِ لِهَذَا الْمَشْرُوعِ الْعِمْلَاقِ.\nوَمَعَ ذَلِكَ، تُؤَكِّدُ الْقِيَادَةُ السُّعُودِيَّةُ أَنَّ \"نِيُوم\" سَتَعْمَلُ بِمُوجِبِ قَوَانِينَ وَتَشْرِيعَاتٍ خَاصَّةٍ تَمْنَحُهَا مُرُونَةً تِجَارِيَّةً وَقَضَائِيَّةً مُسْتَقِلَّةً، مِمَّا يُعَزِّزُ جَاذِبِيَّتَهَا لِلْمُسْتَثْمِرِينَ الْأَجَانِبِ. إِنَّ نَجَاحَ \"ذَا لَايْن\" سَيَعْنِي نَقْلَةً نَوْعِيَّةً فِي كَيْفِيَّةِ تَعَايُشِ الْبَشَرِ مَعَ الطَّبِيعَةِ وَالتِّكْنُولُوجِيَا، مُحَوِّلًا الصَّحْرَاءَ الْقَاحِلَةَ إِلَى مُخْتَبَرٍ مَفْتُوحٍ لِمُسْتَقْبَلِ الْبَشَرِيَّةِ.",
    vocabList: [
      { word: "ذَكَاء اِصْطِنَاعِيّ", meaning: "人工知能 (AI)" },
      { word: "بِنْيَة تَحْتِيَّة", meaning: "インフラ" },
      { word: "قَوَانِين خَاصَّة", meaning: "特別法" },
      { word: "ابْتِكَار", meaning: "イノベーション" }
    ],
    questions: [
      {
        id: 10881,
        type: "reading",
        text: "都市「ザ・ライン（The Line）」の設計上の最も顕著な特徴として、テキストで言及されていないものはどれですか？",
        options: ["道路や自動車が存在しないこと。", "全長170キロメートルに及ぶ直線的な都市構造。", "すべての住民に無料で住宅が提供されること。", "炭素排出ゼロ（カーボンフリー）であること。"],
        correctIndex: 2,
        explanation: "道路がない、車がない、炭素排出がない、直線都市であることには言及されていますが、「住宅が無料」という記述はどこにもありません。"
      },
      {
        id: 10882,
        type: "reading",
        text: "NEOMプロジェクトにおける「法的・制度的」な特徴は何ですか？",
        options: ["サウジアラビアの既存の法律がそのまま適用され、例外は一切認められない。", "独自の法律や規制が適用され、商業的・司法的な柔軟性が確保されている。", "投資家に対して税金を完全に免除するが、所有権は認めない。", "国際連合の直接管理下に置かれる特別行政区である。"],
        correctIndex: 1,
        explanation: "「特別な法律と規制（قوانين وتشريعات خاصة）」「商業的・司法的な柔軟性」を与えられると記述されています。"
      },
      {
        id: 10883,
        type: "reading",
        text: "テキストでは、NEOMは単なる住宅地ではなく、何を目指していると述べていますか？",
        options: ["世界最大の観光リゾート地。", "バイオテクノロジーや水、食料などの分野におけるイノベーションの世界的な中心地。", "石油産業に従事する労働者のための巨大な居住区。", "伝統的なアラブ建築を保存するための博物館都市。"],
        correctIndex: 1,
        explanation: "「単なる居住都市の建設ではなく、イノベーションの世界的中心（مركز عالمي للابتكار）を創ること」と明記されています。"
      },
      // 上級文法問題
      {
        id: 10884,
        type: "grammar_advanced",
        text: "「تمنحها مرونة تجارية」の「مرونة」の正しい語尾は？",
        options: ["an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "in (タンウィーン・カスラ)", "a (ファトハ)"],
        correctIndex: 0,
        explanation: "動詞「Tamnaḥu (与える)」は2つの目的語を取ります。「hā (彼女に/それに)」が第1目的語、「Murūnatan (柔軟性を)」が第2目的語として対格（Manṣūb）になります。"
      },
      {
        id: 10885,
        type: "grammar_advanced",
        text: "「بموجب قوانين وتشريعات」の「قوانين」の正しい語尾は？",
        options: ["a (ファトハ・タンウィーンなし)", "i (カスラ)", "in (タンウィーン・カスラ)", "un (タンウィーン・ダンマ)"],
        correctIndex: 0,
        explanation: "「Bi-mūjibi」の後のイダーファ第2要素（属格）ですが、「Qawānīn」は非限定名詞（Mafā'īlパターン）なので、カスラではなくファトハを取ります。"
      }
    ],
    sentences: [
      {
        speaker: "記事",
        arabic: "يُمَثِّلُ مَشْرُوعُ \"نِيُوم\" تَجْسِيدًا حَيًّا لِلطُّمُوحَاتِ السُّعُودِيَّةِ فِي خَلْقِ نَمُوذَجٍ عَالَمِيٍّ لِلْمُدُنِ الْإِدْرَاكِيَّةِ.",
        japanese: "「NEOM」プロジェクトは、コグニティブ（認知的）シティの世界的なモデルを創り出すというサウジアラビアの野心を体現しています。"
      },
      {
        speaker: "記事",
        arabic: "وَفِي قَلْبِ هَذَا الْمَشْرُوعِ تَقَعُ مَدِينَةُ \"ذَا لَايْن\"، الَّتِي أَثَارَتْ جَدَلًا وَاسِعًا بِسَبَبِ تَصْمِيمِهَا الثَّوْرِيِّ.",
        japanese: "このプロジェクトの中心には都市「ザ・ライン」があり、その革命的なデザインにより広範な議論を呼び起こしました。"
      },
      {
        speaker: "記事",
        arabic: "يَعْتَمِدُ الْمَشْرُوعُ عَلَى بِنْيَةٍ تَحْتِيَّةٍ رَقْمِيَّةٍ فَائِقَةِ التَّطَوُّرِ، حَيْثُ يَتِمُّ تَسْخِيرُ الْبَيَانَاتِ الضَّخْمَةِ.",
        japanese: "このプロジェクトは高度に発達したデジタルインフラに依存しており、ビッグデータが活用されます。"
      },
      {
        speaker: "記事",
        arabic: "وَالْهَدَفُ لَيْسَ مُجَرَّدَ بِنَاءِ مَدِينَةٍ سَكَنِيَّةٍ، بَلْ إِنْشَاءُ مَرْكَزٍ عَالَمِيٍّ لِلِابْتِكَارِ.",
        japanese: "その目標は単に居住都市を建設することではなく、イノベーションの世界的な中心地を創ることです。"
      }
    ]
  },
  {
    id: 1089,
    level: "上級",
    category: "外交",
    title: "多極化する世界とサウジの戦略的バランス",
    contentPlain: "تشهد السياسة الخارجية السعودية حراكًا دبلوماسيًا غير مسبوق، يتميز بالبراغماتية والانفتاح على مختلف القوى العالمية، بعيدًا عن سياسة الاصطفاف التقليدية التي سادت لعقود. وتسعى الرياض من خلال هذا النهج إلى تعزيز مصالحها الوطنية وضمان استقرار أسواق الطاقة، مع الحفاظ على علاقات متوازنة مع كل من الغرب والشرق. وقد تجلى ذلك بوضوح في تعزيز الشراكات الاستراتيجية مع الصين وروسيا، بالتوازي مع الحفاظ على العلاقات التاريخية مع الولايات المتحدة وأوروبا.\nلقد أدركت المملكة أن المتغيرات الجيوسياسية المتسارعة تتطلب تنويع التحالفات، سواء كان ذلك عبر الانضمام إلى تكتلات اقتصادية جديدة مثل \"بريكس\"، أو من خلال لعب دور الوسيط في الأزمات الإقليمية والدولية. هذا الدور المتنامي يعكس ثقة المملكة في قدرتها على التأثير في القرار الدولي، ليس فقط كمنتج للنفط، بل كقوة سياسية واقتصادية صاعدة في مجموعة العشرين.\nويرى المحللون أن هذا التوجه الاستقلالي في القرار السياسي السعودي يهدف إلى تحصين الأمن القومي وتحقيق أهداف التنمية الداخلية، حيث يتم توظيف العلاقات الدبلوماسية لجذب الاستثمارات وتوطين التقنيات المتقدمة. وبالتالي، فإن السياسة الخارجية أصبحت أداة رئيسية لخدمة الاقتصاد المحلي، والعكس صحيح.",
    contentVoweled: "تَشْهَدُ السِّيَاسَةُ الْخَارِجِيَّةُ السُّعُودِيَّةُ حَرَاكًا دِبْلُومَاسِيًّا غَيْرَ مَسْبُوقٍ، يَتَمَيَّزُ بِالْبَرَاغْمَاتِيَّةِ وَالِانْفِتَاحِ عَلَى مُخْتَلِفِ الْقُوَى الْعَالَمِيَّةِ، بَعِيدًا عَنْ سِيَاسَةِ الِاصْطِفَافِ التَّقْلِيدِيَّةِ الَّتِي سَادَتْ لِعُقُودٍ. وَتَسْعَى الرِّيَاضُ مِنْ خِلَالِ هَذَا النَّهْجِ إِلَى تَعْزِيزِ مَصَالِحِهَا الْوَطَنِيَّةِ وَضَمَانِ اسْتِقْرَارِ أَسْوَاقِ الطَّاقَةِ، مَعَ الْحِفَاظِ عَلَى عَلَاقَاتٍ مُتَوَازِنَةٍ مَعَ كُلٍّ مِنَ الْغَرْبِ وَالشَّرْقِ. وَقَدْ تَجَلَّى ذَلِكَ بِوُضُوحٍ فِي تَعْزِيزِ الشَّرَاكَاتِ الِاسْتِرَاتِيجِيَّةِ مَعَ الصِّينِ وَرُوسِيَا، بِالتَّوَازِي مَعَ الْحِفَاظِ عَلَى الْعَلَاقَاتِ التَّارِيخِيَّةِ مَعَ الْوِلَايَاتِ الْمُتَّحِدَةِ وَأُورُوبَا.\nلَقَدْ أَدْرَكَتِ الْمَمْلَكَةُ أَنَّ الْمُتَغَيِّرَاتِ الْجِيُوسِيَاسِيَّةِ الْمُتَسَارِعَةَ تَتَطَلَّبُ تَنْوِيعَ التَّحَالُفَاتِ، سَوَاءً كَانَ ذَلِكَ عَبْرَ الِانْضِمَامِ إِلَى تَكَتُّلَاتٍ اقْتِصَادِيَّةٍ جَدِيدَةٍ مِثْلَ \"بْرِيكْس\"، أَوْ مِنْ خِلَالِ لَعِبِ دَوْرِ الْوَسِيطِ فِي الْأَزَمَاتِ الْإِقْلِيمِيَّةِ وَالدَّوْلِيَّةِ. هَذَا الدَّوْرُ الْمُتَنَامِي يَعْكِسُ ثِقَةَ الْمَمْلَكَةِ فِي قُدْرَتِهَا عَلَى التَّأْثِيرِ فِي الْقَرَارِ الدَّوْلِيِّ، لَيْسَ فَقَطْ كَمُنْتِجٍ لِلنَّفْطِ، بَلْ كَقُوَّةٍ سِيَاسِيَّةٍ وَاقْتِصَادِيَّةٍ صَاعِدَةٍ فِي مَجْمُوعَةِ الْعِشْرِينَ.\nوَيَرَى الْمُحَلِّلُونَ أَنَّ هَذَا التَّوَجُّهَ الِاسْتِقْلَالِيَّ فِي الْقَرَارِ السِّيَاسِيِّ السُّعُودِيِّ يَهْدِفُ إِلَى تَحْصِينِ الْأَمْنِ الْقَوْمِيِّ وَتَحْقِيقِ أَهْدَافِ التَّنْمِيَةِ الدَّاخِلِيَّةِ، حَيْثُ يَتِمُّ تَوْظِيفُ الْعَلَاقَاتِ الدِّبْلُومَاسِيَّةِ لِجَذْبِ الِاسْتِثْمَارَاتِ وَتَوْطِينِ التِّقْنِيَّاتِ الْمُتَقَدِّمَةِ. وَبِالتَّالِي، فَإِنَّ السِّيَاسَةَ الْخَارِجِيَّةَ أَصْبَحَتْ أَدَاةً رَئِيسِيَّةً لِخِدْمَةِ الِاقْتِصَادِ الْمَحَلِّيِّ، وَالْعَكْسُ صَحِيحٌ.",
    vocabList: [
      { word: "دِبْلُومَاسِيَّة", meaning: "外交" },
      { word: "بَرَاغْمَاتِيَّة", meaning: "実利主義/プラグマティズム" },
      { word: "تَحَالُفَات", meaning: "同盟" },
      { word: "جِيُوسِيَاسِيّ", meaning: "地政学的" },
      { word: "أَمْن قَوْمِيّ", meaning: "国家安全保障" }
    ],
    questions: [
      {
        id: 10891,
        type: "reading",
        text: "現在のサウジアラビアの外交方針を最もよく表している言葉はどれですか？",
        options: ["西側諸国への完全な従属と、東側諸国との断絶。", "孤立主義と国際問題への不干渉。", "プラグマティズム（実利主義）と全方位外交によるバランスの維持。", "軍事的な拡大と近隣諸国への干渉。"],
        correctIndex: 2,
        explanation: "テキストには「実利主義（بالبراغماتية）」「様々な勢力への開放（الانفتاح）」「バランスの取れた関係（علاقات متوازنة）」というキーワードが並んでいます。"
      },
      {
        id: 10892,
        type: "reading",
        text: "テキストによると、サウジアラビアが「BRICS」などの新しい経済ブロックに関心を持つ理由は何ですか？",
        options: ["同盟の多様化を図り、変化する地政学的状況に対応するため。", "米国との関係を完全に断ち切る準備をするため。", "石油価格を人為的に操作するためだけの目的である。", "アジア諸国に対して軍事的な支援を求めるため。"],
        correctIndex: 0,
        explanation: "「地政学的な変化が同盟の多様化（تنويع التحالفات）を求めている」ため、BRICSなどへの参加を検討しているとあります。"
      },
      {
        id: 10893,
        type: "reading",
        text: "「外交政策と国内経済の関係」について、テキストはどう説明していますか？",
        options: ["外交と経済は完全に切り離されており、相互に影響しない。", "外交関係は投資誘致や技術移転のために利用されており、外交は内需に奉仕している。", "国内経済の発展が遅れているため、外交活動に支障が出ている。", "外交官は経済問題に関与することを禁じられている。"],
        correctIndex: 1,
        explanation: "「外交関係は投資を誘致し、技術を定着させるために利用されている」「外交政策は地域経済に奉仕する主要なツールとなった」と説明されています。"
      },
      // 上級文法問題
      {
        id: 10894,
        type: "grammar_advanced",
        text: "「تتطلب تنويع التحالفات」の「تنويع」の正しい語尾は？",
        options: ["a (対格・目的語だから)", "u (主格・主語だから)", "i (属格・前置詞の後だから)", "an (タンウィーン・状況格だから)"],
        correctIndex: 0,
        explanation: "動詞「Tataṭallabu (必要とする)」の目的語（Maf'ūl Bihi）なので、対格（Manṣūb）となりファトハがつきます（イダーファの第1要素なのでタンウィーンなし）。"
      },
      {
        id: 10895,
        type: "grammar_advanced",
        text: "「تحقيق أهداف التنمية」の「أهداف」の正しい語尾は？",
        options: ["i (属格・イダーファの第2要素だから)", "a (対格・目的語だから)", "u (主格・主語だから)", "un (タンウィーン・主語だから)"],
        correctIndex: 0,
        explanation: "「Taḥqīq (達成すること)」という動名詞の後のイダーファ第2要素（属格）なので、カスラがつきます（さらに後の「At-Tanmiya」にイダーファされているのでタンウィーンなし）。"
      }
    ],
    sentences: [
      {
        speaker: "記事",
        arabic: "تَشْهَدُ السِّيَاسَةُ الْخَارِجِيَّةُ السُّعُودِيَّةُ حَرَاكًا دِبْلُومَاسِيًّا غَيْرَ مَسْبُوقٍ.",
        japanese: "サウジアラビアの外交政策は、前例のない外交的な動きを見せています。"
      },
      {
        speaker: "記事",
        arabic: "وَتَسْعَى الرِّيَاضُ إِلَى تَعْزِيزِ مَصَالِحِهَا الْوَطَنِيَّةِ وَضَمَانِ اسْتِقْرَارِ أَسْوَاقِ الطَّاقَةِ.",
        japanese: "リヤドは国益を強化し、エネルギー市場の安定を確保することを目指しています。"
      },
      {
        speaker: "記事",
        arabic: "لَقَدْ أَدْرَكَتِ الْمَمْلَكَةُ أَنَّ الْمُتَغَيِّرَاتِ الْجِيُوسِيَاسِيَّةِ الْمُتَسَارِعَةَ تَتَطَلَّبُ تَنْوِيعَ التَّحَالُفَاتِ.",
        japanese: "王国は、急速な地政学的変化が同盟の多様化を必要としていることを認識しました。"
      },
      {
        speaker: "記事",
        arabic: "السِّيَاسَةُ الْخَارِجِيَّةُ أَصْبَحَتْ أَدَاةً رَئِيسِيَّةً لِخِدْمَةِ الِاقْتِصَادِ الْمَحَلِّيِّ.",
        japanese: "外交政策は地域経済に奉仕するための主要なツールとなりました。"
      }
    ]
  },
  {
    id: 1090,
    level: "上級",
    category: "観光",
    title: "アル・ウラ：歴史遺産と観光の未来",
    contentPlain: "في قلب الصحراء الشمالية الغربية للمملكة، تبرز محافظة \"العُلا\" كواجهة حضارية تعيد صياغة خارطة السياحة العالمية. تحتضن هذه المنطقة آثارًا تمتد لآلاف السنين، أبرزها موقع \"الحِجر\" الذي يُعد أول موقع سعودي يُدرج ضمن قائمة التراث العالمي لليونسكو. وتعمل الهيئة الملكية لمحافظة العلا على تطوير المنطقة وفق معايير دقيقة تضمن الحفاظ على الطابع التاريخي والبيئي، مع تقديم تجربة سياحية فاخرة تجذب الزوار من شتى بقاع الأرض.\nالاستراتيجية المتبعة في العلا لا تركز على السياحة الجماهيرية الكثيفة التي قد تضر بالمواقع الأثرية، بل تستهدف \"السياحة النوعية\" التي تقدر التراث والفنون. وقد تم تدشين مهرجانات سنوية تجمع بين الفن المعاصر والموسيقى في أحضان الطبيعة الخلابة، بالإضافة إلى بناء منتجعات تتناغم مع التضاريس الصخرية دون المساس بها.\nيشكل تطوير قطاع السياحة ركنًا أساسيًا في خطة تنويع الدخل، حيث تهدف المملكة إلى رفع مساهمة السياحة في الناتج المحلي الإجمالي إلى 10%. ومن خلال تسليط الضوء على كنوزها الحضارية المنسية، تسعى السعودية إلى تغيير الصورة النمطية السائدة عنها، وتقديم نفسها كملتقى للحضارات الإنسانية العريقة، وليس فقط كأرض للنفط والصحراء.",
    contentVoweled: "فِي قَلْبِ الصَّحْرَاءِ الشَّمَالِيَّةِ الْغَرْبِيَّةِ لِلْمَمْلَكَةِ، تَبْرُزُ مُحَافَظَةُ \"الْعُلَا\" كَوَاجِهَةٍ حَضَارِيَّةٍ تُعِيدُ صِيَاغَةَ خَارِطَةِ السِّيَاحَةِ الْعَالَمِيَّةِ. تَحْتَضِنُ هَذِهِ الْمِنْطَقَةُ آثَارًا تَمْتَدُّ لِآلَافِ السِّنِينَ، أَبْرَزُهَا مَوْقِعُ \"الْحِجْر\" الَّذِي يُعَدُّ أَوَّلَ مَوْقِعٍ سُعُودِيٍّ يُدْرَجُ ضِمْنَ قَائِمَةِ التُّرَاثِ الْعَالَمِيِّ لِلْيُونِسْكُو. وَتَعْمَلُ الْهَيْئَةُ الْمَلَكِيَّةُ لِمُحَافَظَةِ الْعُلَا عَلَى تَطْوِيرِ الْمِنْطَقَةِ وَفْقَ مَعَايِيرَ دَقِيقَةٍ تَضْمَنُ الْحِفَاظَ عَلَى الطَّابَعِ التَّارِيخِيِّ وَالْبِيئِيِّ، مَعَ تَقْدِيمِ تَجْرِبَةٍ سِيَاحِيَّةٍ فَاخِرَةٍ تَجْذِبُ الزُّوَّارَ مِنْ شَتَّى بِقَاعِ الْأَرْضِ.\nالِاسْتِرَاتِيجِيَّةُ الْمُتَّبَعَةُ فِي الْعُلَا لَا تُرَكِّزُ عَلَى السِّيَاحَةِ الْجَمَاهِيرِيَّةِ الْكَثِيفَةِ الَّتِي قَدْ تَضُرُّ بِالْمَوَاقِعِ الْأَثَرِيَّةِ، بَلْ تَسْتَهْدِفُ \"السِّيَاحَةَ النَّوْعِيَّةَ\" الَّتِي تُقَدِّرُ التُّرَاثَ وَالْفُنُونَ. وَقَدْ تَمَّ تَدْشِينُ مَهْرَجَانَاتٍ سَنَوِيَّةٍ تَجْمَعُ بَيْنَ الْفَنِّ الْمُعَاصِرِ وَالْمُوسِيقَى فِي أَحْضَانِ الطَّبِيعَةِ الْخَلَّابَةِ، بِالْإِضَافَةِ إِلَى بِنَاءِ مُنْتَجَعَاتٍ تَتَنَاغَمُ مَعَ التَّضَارِيسِ الصَّخْرِيَّةِ دُونَ الْمِسَاسِ بِهَا.\nيُشَكِّلُ تَطْوِيرُ قِطَاعِ السِّيَاحَةِ رُكْنًا أَسَاسِيًّا فِي خُطَّةِ تَنْوِيعِ الدَّخْلِ، حَيْثُ تَهْدِفُ الْمَمْلَكَةُ إِلَى رَفْعِ مُسَاهَمَةِ السِّيَاحَةِ فِي النَّاتِجِ الْمَحَلِّيِّ الْإِجْمَالِيِّ إِلَى 10%. وَمِنْ خِلَالِ تَسْلِيطِ الضَّوْءِ عَلَى كُنُوزِهَا الْحَضَارِيَّةِ الْمَنْسِيَّةِ، تَسْعَى السُّعُودِيَّةُ إِلَى تَغْيِيرِ الصُّوَرَةِ النَّمَطِيَّةِ السَّائِدَةِ عَنْهَا، وَتَقْدِيمِ نَفْسِهَا كَمُلْتَقًى لِلْحَضَارَاتِ الْإِنْسَانِيَّةِ الْعَرِيقَةِ، وَلَيْسَ فَقَطْ كَأَرْضٍ لِلنَّفْطِ وَالصَّحْرَاءِ.",
    vocabList: [
      { word: "تُرَاث عَالَمِيّ", meaning: "世界遺産" },
      { word: "سِيَاحَة نَوْعِيَّة", meaning: "質的な観光/高級観光" },
      { word: "آثَار", meaning: "遺跡" },
      { word: "حَضَارَة", meaning: "文明" }
    ],
    questions: [
      {
        id: 10901,
        type: "reading",
        text: "アル・ウラ（AlUla）の開発において重視されている方針はどのようなものですか？",
        options: ["とにかく安価で多くの観光客を呼び込むマスツーリズム。", "歴史的・環境的性格を保存しつつ、質を重視したラグジュアリーな観光。", "古い遺跡を取り壊し、近代的な高層ホテルを建設すること。", "観光客の立ち入りを完全に禁止し、研究者のみに開放すること。"],
        correctIndex: 1,
        explanation: "「遺跡に害を及ぼす可能性のあるマスツーリズムには焦点を当てず（لا تركز على السياحة الجماهيرية）」、「質的な観光（السياحة النوعية）を目指す」とあります。"
      },
      {
        id: 10902,
        type: "reading",
        text: "サウジアラビアが観光セクターを通じて達成しようとしている経済的目標は何ですか？",
        options: ["観光業だけで石油収入のすべてを代替すること。", "観光業のGDPへの寄与率を10%まで引き上げること。", "国民全員を観光ガイドとして雇用すること。", "すべての観光施設を無料化し、国の評判を上げること。"],
        correctIndex: 1,
        explanation: "「観光のGDPへの寄与を10%に引き上げる（رفع مساهمة السياحة... إلى 10%）」ことが目標と明記されています。"
      },
      {
        id: 10903,
        type: "reading",
        text: "テキストの最後で述べられている、観光開発を通じた「イメージ戦略」とは何ですか？",
        options: ["サウジアラビアを単なる産油国ではなく、古代文明の交差点として提示すること。", "砂漠をすべて緑化し、農業大国としてアピールすること。", "最新の軍事技術を観光客に披露すること。", "宗教的な巡礼者以外の入国を制限していることを強調すること。"],
        correctIndex: 0,
        explanation: "「石油と砂漠の土地としてだけでなく、古代人類文明の交差点（ملتقى للحضارات الإنسانية العريقة）として自らを提示する」ことがイメージ変革の目的です。"
      },
      // 上級文法問題
      {
        id: 10904,
        type: "grammar_advanced",
        text: "「تحتضن هذه المنطقة آثارا」の「آثارا」の正しい語尾は？",
        options: ["an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "in (タンウィーン・カスラ)", "a (ファトハ)"],
        correctIndex: 0,
        explanation: "動詞「Taḥtaḍinu (抱く)」の目的語（Maf'ūl Bihi）なので対格（Manṣūb）となり、タンウィーン・ファトハがつきます。"
      },
      {
        id: 10905,
        type: "grammar_advanced",
        text: "「ضمن قائمة التراث」の「التراث」の正しい語尾は？",
        options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"],
        correctIndex: 0,
        explanation: "イダーファの第2要素（属格）なのでカスラがつきます（定冠詞付きなのでタンウィーンなし）。"
      }
    ],
    sentences: [
      {
        speaker: "記事",
        arabic: "تَبْرُزُ مُحَافَظَةُ \"الْعُلَا\" كَوَاجِهَةٍ حَضَارِيَّةٍ تُعِيدُ صِيَاغَةَ خَارِطَةِ السِّيَاحَةِ الْعَالَمِيَّةِ.",
        japanese: "アル・ウラ県は世界観光地図を塗り替える文化的な目的地として際立っています。"
      },
      {
        speaker: "記事",
        arabic: "تَحْتَضِنُ هَذِهِ الْمِنْطَقَةُ آثَارًا تَمْتَدُّ لِآلَافِ السِّنِينَ، أَبْرَزُهَا مَوْقِعُ \"الْحِجْر\".",
        japanese: "この地域は何千年にもわたる遺跡を抱えており、その中でも最も著名なのは「アル・ヒジュル」です。"
      },
      {
        speaker: "記事",
        arabic: "وَتَعْمَلُ الْهَيْئَةُ عَلَى تَطْوِيرِ الْمِنْطَقَةِ وَفْقَ مَعَايِيرَ دَقِيقَةٍ.",
        japanese: "委員会は厳格な基準に従って地域を開発することに取り組んでいます。"
      },
      {
        speaker: "記事",
        arabic: "يُشَكِّلُ تَطْوِيرُ قِطَاعِ السِّيَاحَةِ رُكْنًا أَسَاسِيًّا فِي خُطَّةِ تَنْوِيعِ الدَّخْلِ.",
        japanese: "観光セクターの開発は収入源多様化計画の基本的な柱です。"
      }
    ]
  },
  {
    id: 1091,
    level: "上級",
    category: "スポーツ",
    title: "サウジアラビアのスポーツ投資戦略と2034年ワールドカップ",
    contentPlain: "تمثل نية المملكة العربية السعودية الترشح لاستضافة كأس العالم 2034 ذروة استراتيجية وطنية طموحة تهدف إلى تحويل البلاد إلى مركز رياضي عالمي. لا تقتصر هذه التحركات على مجرد استضافة أحداث عابرة، بل هي جزء لا يتجزأ من \"رؤية 2030\" التي تسعى لتنويع الاقتصاد وتحسين جودة الحياة وتعزيز القوة الناعمة للمملكة على الساحة الدولية. وقد تجلى هذا التوجه في الاستثمارات الهائلة التي ضخها \"صندوق الاستثمارات العامة\" في أندية كرة القدم المحلية، واستقطاب نجوم عالميين، بالإضافة إلى رعاية بطولات دولية في الجولف والفورمولا 1.\nويرى المراقبون أن استضافة المونديال ستكون محفزاً قوياً لتسريع وتيرة تطوير البنية التحتية، ليس فقط في بناء الملاعب المتطورة، بل أيضاً في تحديث شبكات النقل والمطارات والفنادق لاستيعاب ملايين الزوار. ومن المتوقع أن يولد هذا الحدث عوائد اقتصادية ضخمة، ويخلق آلاف فرص العمل في قطاعات السياحة والخدمات. وعلاوة على ذلك، تهدف السعودية من خلال الرياضة إلى إحداث تغيير اجتماعي، وتشجيع فئات المجتمع المختلفة، بما في ذلك النساء والشباب، على ممارسة النشاط البدني وتبني نمط حياة صحي.",
    contentVoweled: "تُمَثِّلُ نِيَّةُ الْمَمْلَكَةِ الْعَرَبِيَّةِ السُّعُودِيَّةِ التَّرَشُّحَ لِاسْتِضَافَةِ كَأْسِ الْعَالَمِ 2034 ذُرْوَةَ اسْتِرَاتِيجِيَّةٍ وَطَنِيَّةٍ طَمُوحَةٍ تَهْدِفُ إِلَى تَحْوِيلِ الْبِلَادِ إِلَى مَرْكَزٍ رِيَاضِيٍّ عَالَمِيٍّ. لَا تَقْتَصِرُ هَذِهِ التَّحَرُّكَاتُ عَلَى مُجَرَّدِ اسْتِضَافَةِ أَحْدَاثٍ عَابِرَةٍ، بَلْ هِيَ جُزْءٌ لَا يَتَجَزَّأُ مِنْ \"رُؤْيَةِ 2030\" الَّتِي تَسْعَى لِتَنْوِيعِ الِاقْتِصَادِ وَتَحْسِينِ جَوْدَةِ الْحَيَاةِ وَتَعْزِيزِ الْقُوَّةِ النَّاعِمَةِ لِلْمَمْلَكَةِ عَلَى السَّاحَةِ الدَّوْلِيَّةِ. وَقَدْ تَجَلَّى هَذَا التَّوَجُّهُ فِي الِاسْتِثْمَارَاتِ الْهَائِلَةِ الَّتِي ضَخَّهَا \"صُنْدُوقُ الِاسْتِثْمَارَاتِ الْعَامَّةِ\" فِي أَنْدِيَةِ كُرَةِ الْقَدَمِ الْمَحَلِّيَّةِ، وَاسْتِقْطَابِ نُجُومٍ عَالَمِيِّينَ، بِالْإِضَافَةِ إِلَى رِعَايَةِ بُطُولَاتٍ دَوْلِيَّةٍ فِي الْجُولْفِ وَالْفُورْمُولَا 1.\nوَيَرَى الْمُرَاقِبُونَ أَنَّ اسْتِضَافَةَ الْمُونْدِيَالِ سَتَكُونُ مُحَفِّزًا قَوِيًّا لِتَسْرِيعِ وَتِيرَةِ تَطْوِيرِ الْبِنْيَةِ التَّحْتِيَّةِ، لَيْسَ فَقَطْ فِي بِنَاءِ الْمَلَاعِبِ الْمُتَطَوِّرَةِ، بَلْ أَيْضًا فِي تَحْدِيثِ شَبَكَاتِ النَّقْلِ وَالْمَطَارَاتِ وَالْفَنَادِقِ لِاسْتِيعَابِ مَلَايِينَ الزُّوَّارِ. وَمِنَ الْمُتَوَقَّعِ أَنْ يُوَلِّدَ هَذَا الْحَدَثُ عَوَائِدَ اقْتِصَادِيَّةً ضَخْمَةً، وَيَخْلُقَ آلَافَ فُرَصِ الْعَمَلِ فِي قِطَاعَاتِ السِّيَاحَةِ وَالْخِدْمَاتِ. وَعَلَاوَةً عَلَى ذَلِكَ، تَهْدِفُ السُّعُودِيَّةُ مِنْ خِلَالِ الرِّيَاضَةِ إِلَى إِحْدَاثِ تَغْيِيرٍ اجْتِمَاعِيٍّ، وَتَشْجِيعِ فِئَاتِ الْمُجْتَمَعِ الْمُخْتَلِفَةِ، بِمَا فِي ذَلِكَ النِّسَاءُ وَالشَّبَابُ، عَلَى مُمَارَسَةِ النَّشَاطِ الْبَدَنِيِّ وَتَبَنِّي نَمَطِ حَيَاةٍ صِحِّيٍّ.",
    vocabList: [
      { word: "قُوَّة نَاعِمَة", meaning: "ソフトパワー" },
      { word: "مُحَفِّز", meaning: "刺激策/触媒" },
      { word: "بِنْيَة تَحْتِيَّة", meaning: "インフラ" },
      { word: "اسْتِقْطَاب", meaning: "誘致/引きつけ" }
    ],
    questions: [
      {
        id: 10911,
        type: "reading",
        text: "サウジアラビアがスポーツ分野に巨額の投資を行っている目的として、テキストで言及されていないものはどれですか？",
        options: ["経済の多様化を図るため。", "国際的なソフトパワーを強化するため。", "国民の健康的なライフスタイルを促進するため。", "国内の石油消費量を増やすため。"],
        correctIndex: 3,
        explanation: "経済の多様化、ソフトパワー強化、健康促進には言及がありますが、石油消費を増やすという記述はありません。"
      },
      {
        id: 10912,
        type: "reading",
        text: "2034年ワールドカップの開催は、インフラ整備においてどのような影響を与えると期待されていますか？",
        options: ["スタジアム建設のみに集中し、他のインフラは後回しになる。", "交通網や宿泊施設を含むインフラ全体の開発を加速させる触媒となる。", "既存のインフラで十分なため、新たな開発は行われない。", "インフラ開発の予算を圧迫し、他のプロジェクトを遅らせる。"],
        correctIndex: 1,
        explanation: "「スタジアムだけでなく、交通網、空港、ホテルの近代化を加速させる強力な触媒（محفزاً قوياً）になる」と記述されています。"
      },
      {
        id: 10913,
        type: "reading",
        text: "スポーツ戦略が目指す「社会的側面」とは何ですか？",
        options: ["女性や若者を含む社会全体のスポーツ参加を促し、社会変革を起こすこと。", "プロスポーツ選手以外の運動を制限すること。", "伝統的なスポーツのみを推奨し、海外のスポーツを排除すること。", "スポーツ観戦のチケット価格を上げること。"],
        correctIndex: 0,
        explanation: "「社会的変化（تغيير اجتماعي）を起こし、女性や若者を含む社会の様々な層に身体活動を奨励する」ことが目的とされています。"
      },
      // 上級文法問題
      {
        id: 10914,
        type: "grammar_advanced",
        text: "「تمثل نية المملكة」の「نية」の正しい語尾は？",
        options: ["u (主格・主語だから)", "a (対格・目的語だから)", "i (属格・前置詞の後だから)", "un (タンウィーン・主語だから)"],
        correctIndex: 0,
        explanation: "動詞「Tumaththilu (表す)」の主語（Fā'il）なので主格（Marfū'）となり、ダンマがつきます。イダーファの第1要素なのでタンウィーンはつきません。"
      },
      {
        id: 10915,
        type: "grammar_advanced",
        text: "「لاستضافة كأس العالم」の「كأس」の正しい語尾は？",
        options: ["i (属格・イダーファの第2要素だから)", "a (対格・目的語だから)", "u (主格・主語だから)", "in (タンウィーン・属格だから)"],
        correctIndex: 0,
        explanation: "「Isticḍāfa (主催すること)」という動名詞の後のイダーファ第2要素（属格）なので、カスラがつきます（さらに後の「Al-'Alam」にイダーファされているのでタンウィーンなし）。"
      }
    ],
    sentences: [
      {
        speaker: "記事",
        arabic: "تُمَثِّلُ نِيَّةُ الْمَمْلَكَةِ الْعَرَبِيَّةِ السُّعُودِيَّةِ التَّرَشُّحَ لِاسْتِضَافَةِ كَأْسِ الْعَالَمِ 2034 ذُرْوَةَ اسْتِرَاتِيجِيَّةٍ وَطَنِيَّةٍ طَمُوحَةٍ.",
        japanese: "2034年ワールドカップの開催に立候補するというサウジアラビアの意向は、野心的な国家戦略の頂点を表しています。"
      },
      {
        speaker: "記事",
        arabic: "وَقَدْ تَجَلَّى هَذَا التَّوَجُّهُ فِي الِاسْتِثْمَارَاتِ الْهَائِلَةِ الَّتِي ضَخَّهَا \"صُنْدُوقُ الِاسْتِثْمَارَاتِ الْعَامَّةِ\".",
        japanese: "この傾向は、「公共投資基金」による巨額の投資において明白に示されています。"
      },
      {
        speaker: "記事",
        arabic: "وَيَرَى الْمُرَاقِبُونَ أَنَّ اسْتِضَافَةَ الْمُونْدِيَالِ سَتَكُونُ مُحَفِّزًا قَوِيًّا لِتَسْرِيعِ وَتِيرَةِ تَطْوِيرِ الْبِنْيَةِ التَّحْتِيَّةِ.",
        japanese: "観測筋は、ワールドカップの開催はインフラ開発のペースを加速させる強力な触媒になると見ています。"
      },
      {
        speaker: "記事",
        arabic: "تَهْدِفُ السُّعُودِيَّةُ مِنْ خِلَالِ الرِّيَاضَةِ إِلَى إِحْدَاثِ تَغْيِيرٍ اجْتِمَاعِيٍّ.",
        japanese: "サウジアラビアはスポーツを通じて社会変革を起こすことを目指しています。"
      }
    ]
  },
  {
    id: 1092,
    level: "上級",
    category: "文化",
    title: "紅海国際映画祭とサウジ映画産業の勃興",
    contentPlain: "في مدينة جدة التاريخية، يمثل \"مهرجان البحر الأحمر السينمائي الدولي\" علامة فارقة في المشهد الثقافي السعودي، عاكساً التحول الجذري الذي شهدته المملكة بعد عقود من إغلاق دور السينما. لا يقتصر دور المهرجان على كونه منصة لعرض الأفلام العالمية واستقطاب نجوم هوليوود فحسب، بل يعمل كمحرك أساسي لبناء صناعة سينمائية محلية مستدامة. يركز المهرجان بشكل خاص على دعم المواهب السعودية والعربية الشابة من خلال صناديق تمويل وبرامج تدريبية تهدف إلى تطوير كتاب السيناريو والمخرجين والمنتجين.\nتسعى السعودية من خلال هذا الحراك إلى استخدام السينما كأداة للقوة الناعمة والدبلوماسية الثقافية، لتعريف العالم بالقصص المحلية الغنية وتغيير الصور النمطية السائدة. اقتصاديًا، يُنظر إلى قطاع الأفلام كرافد جديد ومهم لتنويع مصادر الدخل وخلق فرص عمل إبداعية للشباب. إن نجاح الأفلام السعودية مؤخراً في شباك التذاكر المحلي والإقليمي يؤكد على وجود جمهور متعطش للمحتوى الأصلي، ويبشر بمستقبل واعد لهذه الصناعة الناشئة.",
    contentVoweled: "فِي مَدِينَةِ جُدَّةَ التَّارِيخِيَّةِ، يُمَثِّلُ \"مَهْرَجَانُ الْبَحْرِ الْأَحْمَرِ السِّينِمَائِيُّ الدَّوْلِيُّ\" عَلَامَةً فَارِقَةً فِي الْمَشْهَدِ الثَّقَافِيِّ السُّعُودِيِّ، عَاكِسًا التَّحَوُّلَ الْجَذْرِيَّ الَّذِي شَهِدَتْهُ الْمَمْلَكَةُ بَعْدَ عُقُودٍ مِنْ إِغْلَاقِ دُورِ السِّينِمَا. لَا يَقْتَصِرُ دَوْرُ الْمَهْرَجَانِ عَلَى كَوْنِهِ مِنَصَّةً لِعَرْضِ الْأَفْلَامِ الْعَالَمِيَّةِ وَاسْتِقْطَابِ نُجُومِ هُولِيُود فَحَسْبُ، بَلْ يَعْمَلُ كَمُحَرِّكٍ أَسَاسِيٍّ لِبِنَاءِ صِنَاعَةٍ سِينِمَائِيَّةٍ مَحَلِّيَّةٍ مُسْتَدَامَةٍ. يُرَكِّزُ الْمَهْرَجَانُ بِشَكْلٍ خَاصٍّ عَلَى دَعْمِ الْمَوَاهِبِ السُّعُودِيَّةِ وَالْعَرَبِيَّةِ الشَّابَّةِ مِنْ خِلَالِ صَنَادِيقِ تَمْوِيلٍ وَبَرَامِجَ تَدْرِيبِيَّةٍ تَهْدِفُ إِلَى تَطْوِيرِ كُتَّابِ السِّينَارِيُو وَالْمُخْرِجِينَ وَالْمُنْتِجِينَ.\nتَسْعَى السُّعُودِيَّةُ مِنْ خِلَالِ هَذَا الْحَرَاكِ إِلَى اسْتِخْدَامِ السِّينِمَا كَأَدَاةٍ لِلْقُوَّةِ النَّاعِمَةِ وَالدِّبْلُومَاسِيَّةِ الثَّقَافِيَّةِ، لِتَعْرِيفِ الْعَالَمِ بِالْقِصَصِ الْمَحَلِّيَّةِ الْغَنِيَّةِ وَتَغْيِيرِ الصُّوَرِ النَّمَطِيَّةِ السَّائِدَةِ. اقْتِصَادِيًّا، يُنْظَرُ إِلَى قِطَاعِ الْأَفْلَامِ كَرَافِدٍ جَدِيدٍ وَمُهِمٍّ لِتَنْوِيعِ مَصَادِرِ الدَّخْلِ وَخَلْقِ فُرَصِ عَمَلٍ إِبْدَاعِيَّةٍ لِلشَّبَابِ. إِنَّ نَجَاحَ الْأَفْلَامِ السُّعُودِيَّةِ مُؤَخَّرًا فِي شُبَّاكِ التَّذَاكِرِ الْمَحَلِّيِّ وَالْإِقْلِيمِيِّ يُؤَكِّدُ عَلَى وُجُودِ جُمْهُورٍ مُتَعَطِّشٍ لِلْمُحْتَوَى الْأَصْلِيِّ، وَيُبَشِّرُ بِمُسْتَقْبَلٍ وَاعِدٍ لِهَذِهِ الصِّنَاعَةِ النَّاشِئَةِ.",
    vocabList: [
      { word: "عَلَامَة فَارِقَة", meaning: "節目/マイルストーン" },
      { word: "دِبْلُومَاسِيَّة ثَقَافِيَّة", meaning: "文化外交" },
      { word: "صُورَة نَمَطِيَّة", meaning: "ステレオタイプ" },
      { word: "رَافِد", meaning: "支流/収入源" },
      { word: "شُبَّاك التَّذَاكِر", meaning: "ボックスオフィス/興行収入" }
    ],
    questions: [
      {
        id: 10921,
        type: "reading",
        text: "紅海国際映画祭が、単なる映画の上映イベント以上の役割を果たしている点として、最も適切な記述はどれですか？",
        options: ["ハリウッドスターを観光地に案内する役割。", "地元の持続可能な映画産業を構築するための原動力としての役割。", "過去の古いアラブ映画のみを保存するアーカイブとしての役割。", "外国映画の輸入を制限するための検閲機関としての役割。"],
        correctIndex: 1,
        explanation: "「持続可能な地元の映画産業を構築するための基本的な原動力（محرك أساسي لبناء صناعة سينمائية محلية مستدامة）として機能している」と記述されています。"
      },
      {
        id: 10922,
        type: "reading",
        text: "サウジアラビアが映画産業を通じて達成しようとしている「対外的な」目標は何ですか？",
        options: ["外国の文化を国内に広めること。", "映画を通じて政治的な同盟を結ぶこと。", "文化外交のツールとして利用し、地元の物語を世界に伝え、ステレオタイプを変えること。", "海外の映画祭を金銭的に買収すること。"],
        correctIndex: 2,
        explanation: "「映画をソフトパワーと文化外交のツール（أداة للقوة الناعمة والدبلوماسية الثقافية）として利用し、地元の物語を世界に紹介し、ステレオタイプを変える」ことを目指しています。"
      },
      {
        id: 10923,
        type: "reading",
        text: "最近のサウジ映画の成功は何を示唆しているとされていますか？",
        options: ["観客は外国映画にしか興味がないということ。", "オリジナルのローカルコンテンツを求める観客の渇望が存在するということ。", "映画産業は経済的に利益を生まないということ。", "映画館の数がまだ不足しているということ。"],
        correctIndex: 1,
        explanation: "「オリジナルコンテンツに飢えている（متعطش للمحتوى الأصلي）観客の存在を確認するものである」と述べられています。"
      },
      // 上級文法問題
      {
        id: 10924,
        type: "grammar_advanced",
        text: "「عاكسا التحول」の「عاكسا」の正しい語尾は？",
        options: ["an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "in (タンウィーン・カスラ)", "a (ファトハ)"],
        correctIndex: 0,
        explanation: "これは「状態（Hāl）」を表しており、「（〜を）反映しながら」という意味で対格（Manṣūb）となり、タンウィーン・ファトハがつきます。"
      },
      {
        id: 10925,
        type: "grammar_advanced",
        text: "「لتنويع مصادر الدخل」の「مصادر」の正しい語尾は？",
        options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"],
        correctIndex: 0,
        explanation: "「Tanwī' (多様化)」の後のイダーファ第2要素（属格）。「Maṣādir」は非限定名詞ですが、さらに後の「Ad-Dakhl」にイダーファされているため、カスラを取ります。"
      }
    ],
    sentences: [
      {
        speaker: "記事",
        arabic: "يُمَثِّلُ \"مَهْرَجَانُ الْبَحْرِ الْأَحْمَرِ السِّينِمَائِيُّ الدَّوْلِيُّ\" عَلَامَةً فَارِقَةً فِي الْمَشْهَدِ الثَّقَافِيِّ السُّعُودِيِّ.",
        japanese: "「紅海国際映画祭」は、サウジアラビアの文化的シーンにおける重要な節目を表しています。"
      },
      {
        speaker: "記事",
        arabic: "لَا يَقْتَصِرُ دَوْرُ الْمَهْرَجَانِ عَلَى كَوْنِهِ مِنَصَّةً لِعَرْضِ الْأَفْلَامِ الْعَالَمِيَّةِ، بَلْ يَعْمَلُ كَمُحَرِّكٍ أَسَاسِيٍّ لِبِنَاءِ صِنَاعَةٍ سِينِمَائِيَّةٍ مَحَلِّيَّةٍ مُسْتَدَامَةٍ.",
        japanese: "映画祭の役割は、国際映画を上映するためのプラットフォームであることにとどまらず、持続可能な地元の映画産業を構築するための基本的な原動力として機能しています。"
      },
      {
        speaker: "記事",
        arabic: "تَسْعَى السُّعُودِيَّةُ إِلَى اسْتِخْدَامِ السِّينِمَا كَأَدَاةٍ لِلْقُوَّةِ النَّاعِمَةِ لِتَعْرِيفِ الْعَالَمِ بِالْقِصَصِ الْمَحَلِّيَّةِ الْغَنِيَّةِ.",
        japanese: "サウジアラビアは、映画をソフトパワーのツールとして利用し、地元の豊かな物語を世界に紹介することを目指しています。"
      },
      {
        speaker: "記事",
        arabic: "اقْتِصَادِيًّا، يُنْظَرُ إِلَى قِطَاعِ الْأَفْلَامِ كَرَافِدٍ جَدِيدٍ وَمُهِمٍّ لِتَنْوِيعِ مَصَادِرِ الدَّخْلِ.",
        japanese: "経済的には、映画セクターは収入源を多様化するための重要で新しい支流と見なされています。"
      }
    ]
  },
  {
    id: 1093,
    level: "上級",
    category: "宗教",
    title: "ハッジとウムラのデジタル革命：プラットフォーム「Nusuk」",
    contentPlain: "في إطار سعيها لتحقيق مستهدفات \"رؤية 2030\" التي تطمح لاستقبال 30 مليون معتمر وحاج سنوياً، تقود وزارة الحج والعمرة تحولاً رقمياً شاملاً في منظومة خدمة ضيوف الرحمن. ويأتي إطلاق منصة \"نُسُك\" (Nusuk) الحكومية الموحدة كحجر الزاوية في هذا التحول، حيث تهدف إلى تبسيط رحلة الحاج والمعتمر من الفكرة إلى الذكرى. تتيح المنصة للمستخدمين من كافة أنحاء العالم إصدار التأشيرات إلكترونياً في دقائق، وحجز باقات الخدمات المتكاملة التي تشمل السكن والنقل والإعاشة، بالإضافة إلى جدولة زيارات المواقع المقدسة والتاريخية.\nيعتمد هذا النظام المتطور على تقنيات الذكاء الاصطناعي وتحليل البيانات الضخمة لإدارة الحشود وتحسين انسيابية الحركة في المشاعر المقدسة، مما يساهم بشكل مباشر في رفع الطاقة الاستيعابية وضمان أمن وسلامة الحجاج. إن رقمنة الخدمات لا تهدف فقط إلى الكفاءة التشغيلية، بل تسعى بشكل جوهري إلى إثراء التجربة الروحانية والثقافية للحجاج، وتيسير أدائهم للمناسك بيسر وطمأنينة، بعيداً عن التعقيدات الإجرائية السابقة.",
    contentVoweled: "فِي إِطَارِ سَعْيِهَا لِتَحْقِيقِ مُسْتَهْدَفَاتِ \"رُؤْيَةِ 2030\" الَّتِي تَطْمَحُ لِاسْتِقْبَالِ 30 مِلْيُونَ مُعْتَمِرٍ وَحَاجٍّ سَنَوِيًّا، تَقُودُ وِزَارَةُ الْحَجِّ وَالْعُمْرَةِ تَحَوُّلًا رَقْمِيًّا شَامِلًا فِي مَنْظُومَةِ خِدْمَةِ ضُيُوفِ الرَّحْمَنِ. وَيَأْتِي إِطْلَاقُ مِنَصَّةِ \"نُسُك\" (Nusuk) الْحُكُومِيَّةِ الْمُوَحَّدَةِ كَحَجَرِ الزَّاوِيَةِ فِي هَذَا التَّحَوُّلِ، حَيْثُ تَهْدِفُ إِلَى تَبْسِيطِ رِحْلَةِ الْحَاجِّ وَالْمُعْتَمِرِ مِنَ الْفِكْرَةِ إِلَى الذِّكْرَى. تُتِيحُ الْمِنَصَّةُ لِلْمُسْتَخْدِمِينَ مِنْ كَافَّةِ أَنْحَاءِ الْعَالَمِ إِصْدَارَ التَّأْشِيرَاتِ إِلِكْتُرُونِيًّا فِي دَقَائِقَ، وَحَجْزَ بَاقَاتِ الْخِدْمَاتِ الْمُتَكَامِلَةِ الَّتِي تَشْمَلُ السَّكَنَ وَالنَّقْلَ وَالْإِعَاشَةَ، بِالْإِضَافَةِ إِلَى جَدْوَلَةِ زِيَارَاتِ الْمَوَاقِعِ الْمُقَدَّسَةِ وَالتَّارِيخِيَّةِ.\nيَعْتَمِدُ هَذَا النِّظَامُ الْمُتَطَوِّرُ عَلَى تِقْنِيَّاتِ الذَّكَاءِ الِاصْطِنَاعِيِّ وَتَحْلِيلِ الْبَيَانَاتِ الضَّخْمَةِ لِإِدَارَةِ الْحُشُودِ وَتَحْسِينِ انْسِيَابِيَّةِ الْحَرَكَةِ فِي الْمَشَاعِرِ الْمُقَدَّسَةِ، مِمَّا يُسَاهِمُ بِشَكْلٍ مُبَاشِرٍ فِي رَفْعِ الطَّاقَةِ الِاسْتِيعَابِيَّةِ وَضَمَانِ أَمْنِ وَسَلَامَةِ الْحُجَّاجِ. إِنَّ رَقْمَنَةَ الْخِدْمَاتِ لَا تَهْدِفُ فَقَطْ إِلَى الْكَفَاءَةِ التَّشْغِيلِيَّةِ، بَلْ تَسْعَى بِشَكْلٍ جَوْهَرِيٍّ إِلَى إِثْرَاءِ التَّجْرِبَةِ الرُّوحَانِيَّةِ وَالثَّقَافِيَّةِ لِلْحُجَّاجِ، وَتَيْسِيرِ أَدَائِهِمْ لِلْمَنَاسِكِ بِيُسْرٍ وَطُمَأْنِينَةٍ، بَعِيدًا عَنِ التَّعْقِيدَاتِ الْإِجْرَائِيَّةِ السَّابِقَةِ.",
    vocabList: [
      { word: "حَجَر الزَّاوِيَة", meaning: "礎石/要石" },
      { word: "تَأْشِيرَات", meaning: "ビザ/査証" },
      { word: "إِدَارَة الْحُشُود", meaning: "群衆管理" },
      { word: "طَاقَة اِسْتِيعَابِيَّة", meaning: "収容能力" },
      { word: "رَقْمَنَة", meaning: "デジタル化/デジタライゼーション" }
    ],
    questions: [
      {
        id: 10931,
        type: "reading",
        text: "ビジョン2030におけるハッジ・ウムラ巡礼者の年間受け入れ目標人数は何人ですか？",
        options: ["1000万人", "3000万人", "5000万人", "1億人"],
        correctIndex: 1,
        explanation: "「تطمح لاستقبال 30 مليون معتمر وحاج سنوياً (年間3000万人のウムラ・ハッジ巡礼者の受け入れを目指す)」と明記されています。"
      },
      {
        id: 10932,
        type: "reading",
        text: "プラットフォーム「Nusuk」の導入とデジタル技術の活用が、聖地での運営に直接的にもたらす効果は何ですか？",
        options: ["巡礼にかかる費用を大幅に増額させる。", "群衆管理と移動の円滑化を改善し、収容能力と安全性を高める。", "巡礼者の数を制限し、混雑を完全に解消する。", "聖地への立ち入りを一部の国籍に限定する。"],
        correctIndex: 1,
        explanation: "「AIとビッグデータを活用して群衆を管理し、動きをスムーズにすることで、収容能力を高め、安全を確保する（رفع الطاقة الاستيعابية وضمان أمن وسلامة الحجاج）のに直接貢献する」と記述されています。"
      },
      {
        id: 10933,
        type: "reading",
        text: "サービスのデジタル化（رقمنة الخدمات）の究極の目的について、テキストはどのように説明していますか？",
        options: ["単に運営の効率化を図り、コストを削減することだけが目的である。", "巡礼者の精神的・文化的体験を豊かにし、儀式を容易に行えるようにすること。", "巡礼者を監視し、行動を制限すること。", "旅行代理店の役割を完全に排除すること。"],
        correctIndex: 1,
        explanation: "「単に運営効率を目指すだけでなく、本質的には巡礼者の精神的・文化的体験を豊かにし（إثراء التجربة الروحانية والثقافية）、儀式の遂行を容易にすることを目指している」と説明されています。"
      },
      // 上級文法問題
      {
        id: 10934,
        type: "grammar_advanced",
        text: "「لاستقبال 30 مليون」の「مليون」の正しい語尾は？",
        options: ["i (カスラ・イダーファの第2要素だから)", "a (ファトハ・対格だから)", "u (ダンマ・主格だから)", "in (タンウィーン・属格だから)"],
        correctIndex: 0,
        explanation: "数詞「30 (Thalāthīn)」の後の名詞（Tamyīz/Muḍāf Ilayhi）は単数・対格となるのが基本ルール（例：30 kitāban）ですが、「Million」や「Billion」といった大きな単位語は、数詞の後で「Ism Majrūr (属格)」として扱われることや、この場合は「Thalāthīna Milyūna」のようにファトハ（対格）で読むのが一般的です（数詞のタムイーズは11-99は対格）。しかし、選択肢の「カスラ」は「Milyūni」と読む場合（300万などの場合）と混同しやすいです。正解は「Milyūna (ファトハ・対格)」です。解説：11から99までの数字の後の数えられる名詞（Tamyīz）は単数・対格（Manṣūb）になります。したがって「Milyūna」です。"
      },
      {
        id: 10935,
        type: "grammar_advanced",
        text: "「منصة نسك الحكومية」の「الحكومية」の正しい語尾は？",
        options: ["u (ダンマ)", "a (ファトハ)", "i (カスラ)", "un (タンウィーン)"],
        correctIndex: 0,
        explanation: "「Manaṣṣatu Nusuk (Nusukプラットフォーム)」というイダーファ全体（主語・主格）を修飾する形容詞（Na't）です。本来「Manaṣṣatu」にかかるため主格（Marfū'）となり、ダンマがつきます。"
      }
    ],
    sentences: [
      {
        speaker: "記事",
        arabic: "تَقُودُ وِزَارَةُ الْحَجِّ وَالْعُمْرَةِ تَحَوُّلًا رَقْمِيًّا شَامِلًا فِي مَنْظُومَةِ خِدْمَةِ ضُيُوفِ الرَّحْمَنِ.",
        japanese: "ハッジ・ウムラ省は、巡礼者へのサービスシステムにおける包括的なデジタルトランスフォーメーションを主導しています。"
      },
      {
        speaker: "記事",
        arabic: "وَيَأْتِي إِطْلَاقُ مِنَصَّةِ \"نُسُك\" (Nusuk) الْحُكُومِيَّةِ الْمُوَحَّدَةِ كَحَجَرِ الزَّاوِيَةِ فِي هَذَا التَّحَوُّلِ.",
        japanese: "政府の統一プラットフォーム「Nusuk（ヌスク）」の立ち上げはこの変革の要石です。"
      },
      {
        speaker: "記事",
        arabic: "تُتِيحُ الْمِنَصَّةُ لِلْمُسْتَخْدِمِينَ إِصْدَارَ التَّأْشِيرَاتِ إِلِكْتُرُونِيًّا فِي دَقَائِقَ.",
        japanese: "このプラットフォームにより、ユーザーは数分でビザを電子的に発行できます。"
      },
      {
        speaker: "記事",
        arabic: "يُسَاهِمُ هَذَا النِّظَامُ فِي رَفْعِ الطَّاقَةِ الِاسْتِيعَابِيَّةِ وَضَمَانِ أَمْنِ وَسَلَامَةِ الْحُجَّاجِ.",
        japanese: "このシステムは、収容能力を高め、巡礼者の安全とセキュリティを確保するのに貢献します。"
      }
    ]
  },
// --- 84. 鉱業・産業 (Mining & Industry) ---
{
  id: 1094,
  level: "上級",
  category: "産業",
  title: "サウジの鉱業戦略：石油後の経済を支える「第三の柱」",
  contentPlain: "في خضم التحولات الاقتصادية العالمية والتوجه نحو الطاقة النظيفة، تبرز المملكة العربية السعودية كلاعب صاعد في قطاع التعدين العالمي. تمتلك المملكة ثروات معدنية هائلة غير مستغلة تقدر قيمتها المبدئية بنحو 5 تريليونات ريال (1.3 تريليون دولار)، تشمل احتياطيات ضخمة من الذهب، والفوسفات، والبوكسيت، والنحاس، والعناصر الأرضية النادرة الحيوية للصناعات التقنية الحديثة. وتهدف الاستراتيجية الوطنية الشاملة للتعدين إلى تحويل هذا القطاع إلى \"الركيزة الثالثة\" للصناعة السعودية، إلى جانب قطاعي النفط والغاز والبتروكيماويات.\nلتحقيق هذا الطموح، قامت المملكة بتحديث نظام الاستثمار التعديني ليكون أكثر جاذبية وشفافية للمستثمرين الدوليين، مع تقديم حوافز مالية وتطوير البنية التحتية اللوجستية اللازمة في المدن الصناعية مثل رأس الخير ووعد الشمال. لا تقتصر الرؤية على مجرد استخراج المواد الخام وتصديرها، بل تركز على بناء سلاسل قيمة متكاملة داخل المملكة، بدءاً من المناجم وصولاً إلى الصناعات التحويلية المتقدمة، مثل صناعة بطاريات السيارات الكهربائية. هذا التوجه الاستراتيجي من شأنه أن يعزز الأمن الاقتصادي للمملكة، ويخلق آلاف الوظائف النوعية للمواطنين، ويقلل من الاعتماد على تقلبات أسعار النفط.",
  contentVoweled: "فِي خِضَمِّ التَّحَوُّلَاتِ الِاقْتِصَادِيَّةِ الْعَالَمِيَّةِ وَالتَّوَجُّهِ نَحْوَ الطَّاقَةِ النَّظِيفَةِ، تَبْرُزُ الْمَمْلَكَةُ الْعَرَبِيَّةُ السُّعُودِيَّةُ كَلَاعِبٍ صَاعِدٍ فِي قِطَاعِ التَّعْدِينِ الْعَالَمِيِّ. تَمْتَلِكُ الْمَمْلَكَةُ ثَرَوَاتٍ مَعْدِنِيَّةً هَائِلَةً غَيْرَ مُسْتَغَلَّةٍ تُقَدَّرُ قِيمَتُهَا الْمَبْدَئِيَّةُ بِنَحْوِ 5 تِرِيلْيُونَاتِ رِيَالٍ (1.3 تِرِيلْيُون دُولَار)، تَشْمَلُ احْتِيَاطِيَّاتٍ ضَخْمَةً مِنَ الذَّهَبِ، وَالْفُوسْفَاتِ، وَالْبُوكْسِيتِ، وَالنُّحَاسِ، وَالْعَنَاصِرِ الْأَرْضِيَّةِ النَّادِرَةِ الْحَيَوِيَّةِ لِلصِّنَاعَاتِ التِّقْنِيَّةِ الْحَدِيثَةِ. وَتَهْدِفُ الِاسْتِرَاتِيجِيَّةُ الْوَطَنِيَّةُ الشَّامِلَةُ لِلتَّعْدِينِ إِلَى تَحْوِيلِ هَذَا الْقِطَاعِ إِلَى \"الرَّكِيزَةِ الثَّالِثَةِ\" لِلصِّنَاعَةِ السُّعُودِيَّةِ، إِلَى جَانِبِ قِطَاعَيِ النِّفْطِ وَالْغَازِ وَالْبِتْرُوكِيمَاوِيَّاتِ.\nلِتَحْقِيقِ هَذَا الطُّمُوحِ، قَامَتِ الْمَمْلَكَةُ بِتَحْدِيثِ نِظَامِ الِاسْتِثْمَارِ التَّعْدِينِيِّ لِيَكُونَ أَكْثَرَ جَاذِبِيَّةً وَشَفَافِيَّةً لِلْمُسْتَثْمِرِينَ الدَّوْلِيِّينَ، مَعَ تَقْدِيمِ حَوَافِزَ مَالِيَّةٍ وَتَطْوِيرِ الْبِنْيَةِ التَّحْتِيَّةِ اللُّوجِسْتِيَّةِ اللَّازِمَةِ فِي الْمُدُنِ الصِّنَاعِيَّةِ مِثْلِ رَأْسِ الْخَيْرِ وَوَعْدِ الشَّمَالِ. لَا تَقْتَصِرُ الرُّؤْيَةُ عَلَى مُجَرَّدِ اسْتِخْرَاجِ الْمَوَادِّ الْخَامِ وَتَصْدِيرِهَا، بَلْ تُرَكِّزُ عَلَى بِنَاءِ سَلَاسِلِ قِيمَةٍ مُتَكَامِلَةٍ دَاخِلَ الْمَمْلَكَةِ، بَدْءًا مِنَ الْمَنَاجِمِ وُصُولًا إِلَى الصِّنَاعَاتِ التَّحْوِيلِيَّةِ الْمُتَقَدِّمَةِ، مِثْلِ صِنَاعَةِ بَطَّارِيَّاتِ السَّيَّارَاتِ الْكَهْرَبَائِيَّةِ. هَذَا التَّوَجُّهُ الِاسْتِرَاتِيجِيُّ مِنْ شَأْنِهِ أَنْ يُعَزِّزَ الْأَمْنَ الِاقْتِصَادِيَّ لِلْمَمْلَكَةِ، وَيَخْلُقَ آلَافَ الْوَظَائِفِ النَّوْعِيَّةِ لِلْمُوَاطِنِينَ، وَيُقَلِّلَ مِنَ الِاعْتِمَادِ عَلَى تَقَلُّبَاتِ أَسْعَارِ النِّفْطِ.",
  sentences: [
    { speaker: "記事", arabic: "تَمْتَلِكُ الْمَمْلَكَةُ ثَرَوَاتٍ مَعْدِنِيَّةً هَائِلَةً غَيْرَ مُسْتَغَلَّةٍ تُقَدَّرُ قِيمَتُهَا الْمَبْدَئِيَّةُ بِنَحْوِ 5 تِرِيلْيُونَاتِ رِيَالٍ.", japanese: "王国は、推定初期価値約5兆リヤルの未開発の莫大な鉱物資源を保有しています。" },
    { speaker: "記事", arabic: "تَهْدِفُ الِاسْتِرَاتِيجِيَّةُ إِلَى تَحْوِيلِ هَذَا الْقِطَاعِ إِلَى \"الرَّكِيزَةِ الثَّالِثَةِ\" لِلصِّنَاعَةِ السُّعُودِيَّةِ.", japanese: "戦略は、このセクターをサウジ産業の「第三の柱」に変えることを目指しています。" },
    { speaker: "記事", arabic: "لَا تَقْتَصِرُ الرُّؤْيَةُ عَلَى مُجَرَّدِ اسْتِخْرَاجِ الْمَوَادِّ الْخَامِ، بَلْ تُرَكِّزُ عَلَى بِنَاءِ سَلَاسِلِ قِيمَةٍ مُتَكَامِلَةٍ.", japanese: "ビジョンは単なる原材料の抽出にとどまらず、統合されたバリューチェーンの構築に焦点を当てています。" },
    { speaker: "記事", arabic: "هَذَا التَّوَجُّهُ سَيَخْلُقُ آلَافَ الْوَظَائِفِ النَّوْعِيَّةِ لِلْمُوَاطِنِينَ.", japanese: "この方向性は、国民のために何千もの質の高い雇用を創出するでしょう。" }
  ],
  vocabList: [
    { word: "تَعْدِين", meaning: "鉱業/マイニング" },
    { word: "عَنَاصِر أَرْضِيَّة نَادِرَة", meaning: "レアアース/希土類元素" },
    { word: "رَكِيزَة ثَالِثَة", meaning: "第三の柱" },
    { word: "سَلَاسِل قِيمَة", meaning: "バリューチェーン/価値連鎖" }
  ],
  questions: [
    { id: 10941, type: "reading", text: "サウジアラビアが鉱業セクターを「第三の柱」と位置づける際、第一と第二の柱は何であると認識されていますか？", options: ["農業と観光業", "石油・ガスと石油化学", "建設業と金融業", "ITと通信"], correctIndex: 1, explanation: "「石油・ガスと石油化学（قطاعي النفط والغاز والبتروكيماويات）に並ぶ産業の第三の柱」と記述されています。" },
    { id: 10942, type: "reading", text: "サウジアラビアの鉱業戦略における「ビジョン」の核心は何ですか？", options: ["原材料を未加工のまま可能な限り早く輸出すること。", "国内での採掘を禁止し、海外の鉱山に投資すること。", "単なる採掘にとどまらず、国内で加工・製造まで行う統合されたバリューチェーンを構築すること。", "鉱山労働者をすべて外国人で賄うこと。"], correctIndex: 2, explanation: "「単に原材料を抽出して輸出するだけでなく、国内で統合されたバリューチェーンを構築することに焦点を当てている（تركز على بناء سلاسل قيمة متكاملة داخل المملكة）」と明記されています。" },
    { id: 10943, type: "reading", text: "この戦略的アプローチがもたらすと期待される結果として、テキストで言及されていないものはどれですか？",
      options: ["王国の経済安全保障の強化。", "国民のための質の高い雇用の創出。", "石油価格変動への依存の軽減。", "国内の環境規制の完全な撤廃。"],
      correctIndex: 3,
      explanation: "経済安全保障の強化、雇用の創出、石油依存の軽減には言及がありますが、環境規制の撤廃については述べられていません。"
    },
    // 上級文法問題
    {
      id: 10944,
      type: "grammar_advanced",
      text: "「تشمل احتياطيات ضخمة」の「احتياطيات」の正しい語尾は？",
      options: ["un (タンウィーン・ダンマ)", "in (タンウィーン・カスラ)", "an (タンウィーン・ファトハ)", "a (ファトハ)"],
      correctIndex: 0,
      explanation: "動詞「Tashmalu (含む)」の主語（Fā'il）は「Tharawāt (資源)」であり、ここでは文法的に「それ（資源）は巨大な埋蔵量を含む」という意味で「Iḥtiyāṭiyyātin (対格・カスラ)」となるのが一般的です。しかし、ここでは「Tashmalu」の主語が「Tharawāt」に戻るとすると、目的語として「Iḥtiyāṭiyyāt」が来ます。女性規則複数の対格はカスラを取るので正解は「in」です。"
    },
    {
      id: 10945,
      type: "grammar_advanced",
      text: "「بناء سلاسل قيمة」の「سلاسل」の正しい語尾は？",
      options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"],
      correctIndex: 0,
      explanation: "「Binā' (構築)」の後のイダーファ第2要素（属格）。「Salāsil」は非限定名詞ですが、さらに後の「Qīma」にイダーファされているため、通常通りカスラを取ります。"
    }
  ]
},
{
  id: 1095,
  level: "上級",
  category: "医療",
  title: "サウジ・ゲノム・プログラム：個別化医療と予防の新時代",
  contentPlain: "يُمثل \"برنامج الجينوم السعودي\" إحدى المبادرات الوطنية الرائدة التي تضع المملكة في طليعة الدول المتقدمة في مجال الأبحاث الطبية الحيوية. يهدف هذا المشروع الطموح إلى رسم الخريطة الوراثية للمجتمع السعودي من خلال جمع وتحليل عينات الحمض النووي (DNA) لآلاف المواطنين، وإنشاء قاعدة بيانات وطنية شاملة للتسلسل الجيني. تكتسب هذه الخطوة أهمية خاصة في ظل ارتفاع معدلات الأمراض الوراثية الناتجة عن زواج الأقارب في المنطقة.\nإِنَّ الْهَدَفَ الْجَوْهَرِيَّ لِلْبَرْنَامَجِ يَتَجَاوَزُ مُجَرَّدَ الْبَحْثِ الْعِلْمِيِّ؛ فَهُوَ يُؤَسِّسُ لِتَحَوُّلٍ جَذْرِيٍّ فِي نِظَامِ الرِّعَايَةِ الصِّحِّيَّةِ نَحْوَ نَمُوذَجِ \"الطِّبِّ الشَّخْصِيِّ\" أَوِ الدَّقِيقِ. بَدَلًا مِنَ النَّهْجِ التَّقْلِيدِيِّ الْقَائِمِ عَلَى عِلَاجِ الْأَعْرَاضِ بَعْدَ ظُهُورِ الْمَرَضِ، سَيُمَكِّنُ تَحْلِيلُ الْبَيَانَاتِ الْجِينِيَّةِ الْأَطِبَّاءَ مِنَ التَّنَبُّؤِ بِاحْتِمَالِيَّةِ إِصَابَةِ الْأَفْرَادِ بِأَمْرَاضٍ مُعَيَّنَةٍ، وَبِالتَّالِي اتِّخَاذِ تَدَابِيرَ وِقَائِيَّةٍ اسْتِبَاقِيَّةٍ. عَلَاوَةً عَلَى ذَلِكَ، سَيُسَاعِدُ الْبَرْنَامَجُ فِي تَطْوِيرِ عِلَاجَاتٍ وَأَدْوِيَةٍ مُصَمَّمَةٍ خَصِيصًا لِتُنَاسِبَ التَّرْكِيبَةَ الْجِينِيَّةَ لِكُلِّ مَرِيضٍ، مِمَّا يَزِيدُ مِنْ فَعَالِيَّةِ الْعِلَاجِ وَيُقَلِّلُ مِنَ الْآثَارِ الْجَانِبِيَّةِ. هَذَا الِاسْتِثْمَارُ فِي صِحَّةِ الْمُسْتَقْبَلِ يَعْكِسُ الْتِزَامَ الْمَمْلَكَةِ بِتَسْخِيرِ أَحْدَثِ التِّقْنِيَّاتِ لِخِدْمَةِ الْإِنْسَانِ وَتَحْسِينِ جَوْدَةِ الْحَيَاةِ.",
  contentVoweled: "يُمَثِّلُ \"بَرْنَامَجُ الْجِينُومِ السُّعُودِيِّ\" إِحْدَى الْمُبَادَرَاتِ الْوَطَنِيَّةِ الرَّائِدَةِ الَّتِي تَضَعُ الْمَمْلَكَةَ فِي طَلِيعَةِ الدُّوَلِ الْمُتَقَدِّمَةِ فِي مَجَالِ الْأَبْحَاثِ الطِّبِّيَّةِ الْحَيَوِيَّةِ. يَهْدِفُ هَذَا الْمَشْرُوعُ الطَّمُوحُ إِلَى رَسْمِ الْخَرِيطَةِ الْوِرَاثِيَّةِ لِلْمُجْتَمَعِ السُّعُودِيِّ مِنْ خِلَالِ جَمْعِ وَتَحْلِيلِ عَيِّنَاتِ الْحِمْضِ النَّوَوِيِّ (DNA) لِآلَافِ الْمُوَاطِنِينَ، وَإِنْشَاءِ قَاعِدَةِ بَيَانَاتٍ وَطَنِيَّةٍ شَامِلَةٍ لِلتَّسَلْسُلِ الْجِينِيِّ. تَكْتَسِبُ هَذِهِ الْخُطْوَةُ أَهَمِّيَّةً خَاصَّةً فِي ظِلِّ ارْتِفَاعِ مُعَدَّلَاتِ الْأَمْرَاضِ الْوِرَاثِيَّةِ النَّاتِجَةِ عَنْ زَوَاجِ الْأَقَارِبِ فِي الْمِنْطَقَةِ.\nإِنَّ الْهَدَفَ الْجَوْهَرِيَّ لِلْبَرْنَامَجِ يَتَجَاوَزُ مُجَرَّدَ الْبَحْثِ الْعِلْمِيِّ؛ فَهُوَ يُؤَسِّسُ لِتَحَوُّلٍ جَذْرِيٍّ فِي نِظَامِ الرِّعَايَةِ الصِّحِّيَّةِ نَحْوَ نَمُوذَجِ \"الطِّبِّ الشَّخْصِيِّ\" أَوِ الدَّقِيقِ. بَدَلًا مِنَ النَّهْجِ التَّقْلِيدِيِّ الْقَائِمِ عَلَى عِلَاجِ الْأَعْرَاضِ بَعْدَ ظُهُورِ الْمَرَضِ، سَيُمَكِّنُ تَحْلِيلُ الْبَيَانَاتِ الْجِينِيَّةِ الْأَطِبَّاءَ مِنَ التَّنَبُّؤِ بِاحْتِمَالِيَّةِ إِصَابَةِ الْأَفْرَادِ بِأَمْرَاضٍ مُعَيَّنَةٍ، وَبِالتَّالِي اتِّخَاذِ تَدَابِيرَ وِقَائِيَّةٍ اسْتِبَاقِيَّةٍ. عَلَاوَةً عَلَى ذَلِكَ، سَيُسَاعِدُ الْبَرْنَامَجُ فِي تَطْوِيرِ عِلَاجَاتٍ وَأَدْوِيَةٍ مُصَمَّمَةٍ خَصِيصًا لِتُنَاسِبَ التَّرْكِيبَةَ الْجِينِيَّةَ لِكُلِّ مَرِيضٍ، مِمَّا يَزِيدُ مِنْ فَعَالِيَّةِ الْعِلَاجِ وَيُقَلِّلُ مِنَ الْآثَارِ الْجَانِبِيَّةِ. هَذَا الِاسْتِثْمَارُ فِي صِحَّةِ الْمُسْتَقْبَلِ يَعْكِسُ الْتِزَامَ الْمَمْلَكَةِ بِتَسْخِيرِ أَحْدَثِ التِّقْنِيَّاتِ لِخِدْمَةِ الْإِنْسَانِ وَتَحْسِينِ جَوْدَةِ الْحَيَاةِ.",
  sentences: [
    { speaker: "記事", arabic: "يُمَثِّلُ \"بَرْنَامَجُ الْجِينُومِ السُّعُودِيِّ\" إِحْدَى الْمُبَادَرَاتِ الْوَطَنِيَّةِ الرَّائِدَةِ.", japanese: "サウジ・ゲノム・プログラムは、先駆的な国家的イニシアティブの一つを代表しています。" },
    { speaker: "記事", arabic: "يَهْدِفُ إِلَى رَسْمِ الْخَرِيطَةِ الْوِرَاثِيَّةِ لِلْمُجْتَمَعِ السُّعُودِيِّ مِنْ خِلَالِ جَمْعِ عَيِّنَاتِ DNA.", japanese: "それはDNAサンプルの収集を通じてサウジ社会の遺伝子地図を描くことを目的としています。" },
    { speaker: "記事", arabic: "يُؤَسِّسُ لِتَحَوُّلٍ جَذْرِيٍّ فِي نِظَامِ الرِّعَايَةِ الصِّحِّيَّةِ نَحْوَ نَمُوذَجِ \"الطِّبِّ الشَّخْصِيِّ\".", japanese: "それはヘルスケアシステムにおける「個別化医療」モデルへの根本的な転換の基礎を築きます。" },
    { speaker: "記事", arabic: "سَيُمَكِّنُ الْأَطِبَّاءَ مِنَ التَّنَبُّؤِ بِالْأَمْرَاضِ وَاتِّخَاذِ تَدَابِيرَ وِقَائِيَّةٍ.", japanese: "それは医師が病気を予測し、予防措置を講じることを可能にします。" }
  ],
  vocabList: [
    { word: "جِينُوم", meaning: "ゲノム" },
    { word: "خَرِيطَة وِرَاثِيَّة", meaning: "遺伝子地図" },
    { word: "أَمْرَاض وِرَاثِيَّة", meaning: "遺伝性疾患" },
    { word: "طِبّ شَخْصِيّ", meaning: "個別化医療" }
  ],
  questions: [
    { id: 10951, type: "reading", text: "サウジ・ゲノム・プログラムが、この地域において特に重要視されている背景としてテキストで述べられている理由は何ですか？", options: ["地域の医療技術が遅れているため。", "血族結婚による遺伝性疾患の発生率が高いため。", "人口が急激に減少しているため。", "新しいウイルスの感染が拡大しているため。"], correctIndex: 1, explanation: "「地域における血族結婚（زواج الأقارب）に起因する遺伝性疾患の高い発生率に鑑み」とあります。" },
    { id: 10952, type: "reading", text: "このプログラムは、医療システムにおいてどのような根本的な転換をもたらすと期待されていますか？", options: ["病院での治療から自宅療養への移行。", "症状が現れた後の治療から、発症前の予測と予防的アプローチへの移行。", "医師による診断からAIによる自動診断への完全な移行。", "西洋医学から伝統医学への回帰。"], correctIndex: 1, explanation: "「発症後に症状を治療する従来のアプローチ」から、「病気の可能性を予測し、予防的な措置を講じる」モデルへの転換です。" },
    { id: 10953, type: "reading", text: "個別化医療（الطب الشخصي）の利点として、テキストで挙げられているのはどれですか？", options: ["治療費が無料になること。", "すべての病気が完全に治癒すること。", "治療の有効性が高まり、副作用が減少すること。", "医師の数が少なくて済むようになること。"], correctIndex: 2, explanation: "「治療の有効性が高まり、副作用が減少する（يزيد من فعالية العلاج ويقلل من الآثار الجانبية）」と述べられています。" },
    // 上級文法問題
    {
      id: 10954,
      type: "grammar_advanced",
      text: "「تحليل عينات الحمض」の「عينات」の正しい語尾は？",
      options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"],
      correctIndex: 0,
      explanation: "「Taḥlīl (分析)」の後のイダーファ第2要素（属格）です。女性規則複数（Jam' Mu'annath Sālim）の属格はカスラを取ります（さらに後の「Al-Ḥamḍ」にイダーファされているのでタンウィーンなし）。"
    },
    {
      id: 10955,
      type: "grammar_advanced",
      text: "「اتخاذ تدابير وقائية」の「تدابير」の正しい語尾は？",
      options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"],
      correctIndex: 1,
      explanation: "「Ittikhādh (講じること)」という動名詞の後のイダーファ第2要素（属格）ですが、「Tadābīr」は非限定名詞（Mafā'īlパターン）なので、カスラではなくファトハを取ります。"
    }
  ]
},
{
  id: 1096,
  level: "上級",
  category: "テクノロジー",
  title: "サウジアラビアのAI戦略とSDAIAの役割",
  contentPlain: "تقود \"الهيئة السعودية للبيانات والذكاء الاصطناعي\" (سدايا) جهود المملكة نحو الريادة العالمية في مجال التقنيات المتقدمة. تهدف الاستراتيجية الوطنية للذكاء الاصطناعي إلى جعل المملكة مركزاً عالمياً للبيانات، حيث يُتوقع أن يضيف هذا القطاع أكثر من 500 مليار ريال إلى الناتج المحلي الإجمالي بحلول عام 2030. وتعمل الهيئة على دمج حلول الذكاء الاصطناعي في القطاعات الحكومية، والتعليم، والصحة، والطاقة، لرفع كفاءة الأداء وترشيد الإنفاق.\nومن أبرز مبادرات سدايا تنظيم \"القمة العالمية للذكاء الاصطناعي\" التي تجمع صناع القرار والخبراء من كافة أنحاء العالم لمناقشة مستقبل هذا المجال وتأثيراته الأخلاقية والاقتصادية. كما تركز الهيئة على بناء الكفاءات الوطنية من خلال معسكرات تدريبية مكثفة تهدف إلى تخريج آلاف المتخصصين السعوديين في علم البيانات والبرمجة. إن هذا التوجه لا يعكس فقط رغبة المملكة في مواكبة التطور التقني، بل يؤكد عزمها على أن تكون منتجة ومصدرة للتكنولوجيا وليست مجرد مستهلكة لها.",
  contentVoweled: "تَقُودُ \"الْهَيْئَةُ السُّعُودِيَّةُ لِلْبَيَانَاتِ وَالذَّكَاءِ الِاصْطِنَاعِيِّ\" (سَدَايَا) جُهُودَ الْمَمْلَكَةِ نَحْوَ الرِّيَادَةِ الْعَالَمِيَّةِ فِي مَجَالِ التِّقْنِيَّاتِ الْمُتَقَدِّمَةِ. تَهْدِفُ الِاسْتِرَاتِيجِيَّةُ الْوَطَنِيَّةُ لِلذَّكَاءِ الِاصْطِنَاعِيِّ إِلَى جَعْلِ الْمَمْلَكَةِ مَرْكَزًا عَالَمِيًّا لِلْبَيَانَاتِ، حَيْثُ يُتَوَقَّعُ أَنْ يُضِيفَ هَذَا الْقِطَاعُ أَكْثَرَ مِنْ 500 مِلْيَارِ رِيَالٍ إِلَى النَّاتِجِ الْمَحَلِّيِّ الْإِجْمَالِيِّ بِحُلُولِ عَامِ 2030. وَتَعْمَلُ الْهَيْئَةُ عَلَى دَمْجِ حُلُولِ الذَّكَاءِ الِاصْطِنَاعِيِّ فِي الْقِطَاعَاتِ الْحُكُومِيَّةِ، وَالتَّعْلِيمِ، وَالصِّحَّةِ، وَالطَّاقَةِ، لِرَفْعِ كَفَاءَةِ الْأَدَاءِ وَتَرْشِيدِ الْإِنْفَاقِ.\nوَمِنْ أَبْرَزِ مُبَادَرَاتِ سَدَايَا تَنْظِيمُ \"الْقِمَّةِ الْعَالَمِيَّةِ لِلذَّكَاءِ الِاصْطِنَاعِيِّ\" الَّتِي تَجْمَعُ صُنَّاعَ الْقَرَارِ وَالْخُبَرَاءَ مِنْ كَافَّةِ أَنْحَاءِ الْعَالَمِ لِمُنَاقَشَةِ مُسْتَقْبَلِ هَذَا الْمَجَالِ وَتَأْثِيرَاتِهِ الْأَخْلَاقِيَّةِ وَالِاقْتِصَادِيَّةِ. كَمَا تُرَكِّزُ الْهَيْئَةُ عَلَى بِنَاءِ الْكَفَاءَاتِ الْوَطَنِيَّةِ مِنْ خِلَالِ مُعَسْكَرَاتٍ تَدْرِيبِيَّةٍ مُكَثَّفَةٍ تَهْدِفُ إِلَى تَخْرِيجِ آلَافِ الْمُتَخَصِّصِينَ السُّعُودِيِّينَ فِي عِلْمِ الْبَيَانَاتِ وَالْبَرْمَجَةِ. إِنَّ هَذَا التَّوَجُّهَ لَا يَعْكِسُ فَقَطْ رَغْبَةَ الْمَمْلَكَةِ فِي مُوَاكَبَةِ التَّطَوُّرِ التِّقْنِيِّ، بَلْ يُؤَكِّدُ عَزْمَهَا عَلَى أَنْ تَكُونَ مُنْتِجَةً وَمُصَدِّرَةً لِلتِّكْنُولُوجِيَا وَلَيْسَتْ مُجَرَّدَ مُسْتَهْلِكَةٍ لَهَا.",
  sentences: [
    { speaker: "記事", arabic: "تَقُودُ \"الْهَيْئَةُ السُّعُودِيَّةُ لِلْبَيَانَاتِ وَالذَّكَاءِ الِاصْطِنَاعِيِّ\" (سَدَايَا) جُهُودَ الْمَمْلَكَةِ نَحْوَ الرِّيَادَةِ الْعَالَمِيَّةِ.", japanese: "SDAIA（サウジデータAI庁）は、王国の世界的なリーダーシップに向けた取り組みを主導しています。" },
    { speaker: "記事", arabic: "يُتَوَقَّعُ أَنْ يُضِيفَ هَذَا الْقِطَاعُ أَكْثَرَ مِنْ 500 مِلْيَارِ رِيَالٍ إِلَى النَّاتِجِ الْمَحَلِّيِّ الْإِجْمَالِيِّ بِحُلُولِ عَامِ 2030.", japanese: "このセクターは2030年までにGDPに5000億リヤル以上を付加すると予想されています。" },
    { speaker: "記事", arabic: "تُرَكِّزُ الْهَيْئَةُ عَلَى بِنَاءِ الْكَفَاءَاتِ الْوَطَنِيَّةِ مِنْ خِلَالِ مُعَسْكَرَاتٍ تَدْرِيبِيَّةٍ مُكَثَّفَةٍ.", japanese: "同庁は、集中的なトレーニングキャンプを通じて国家的な能力構築に注力しています。" },
    { speaker: "記事", arabic: "يُؤَكِّدُ عَزْمَهَا عَلَى أَنْ تَكُونَ مُنْتِجَةً وَمُصَدِّرَةً لِلتِّكْنُولُوجِيَا.", japanese: "それは技術の生産者および輸出国になるという決意を裏付けています。" }
  ],
  vocabList: [
    { word: "ذَكَاء اِصْطِنَاعِيّ", meaning: "人工知能 (AI)" },
    { word: "رِيَادَة", meaning: "リーダーシップ/先駆性" },
    { word: "كفاءة", meaning: "効率/能力" },
    { word: "تَرْشِيد", meaning: "合理化/最適化" }
  ],
  questions: [
    { id: 10961, type: "reading", text: "国家AI戦略の経済的な目標について、テキストで述べられていることは何ですか？", options: ["2030年までにAI関連企業をすべて国有化する。", "2030年までにGDPに5000億リヤル以上を付加する。", "石油収入への依存を100%なくす。", "すべての労働者をAIロボットに置き換える。"], correctIndex: 1, explanation: "「GDPに5000億リヤル以上を付加する」と記述されています。" },
    { id: 10962, type: "reading", text: "SDAIA（サウジデータAI庁）が人材育成のために行っている具体的な活動は？", options: ["海外からの専門家輸入のみに頼る。", "大学を閉鎖してオンライン教育にする。", "データサイエンスやプログラミングの集中トレーニングキャンプを実施する。", "公務員の給与を削減する。"], correctIndex: 2, explanation: "「معسكرات تدريبية مكثفة (集中的なトレーニングキャンプ)」です。" },
    { id: 10963, type: "reading", text: "テキストの結びで述べられている、サウジアラビアの技術分野における究極の目標は何ですか？", options: ["世界最大の技術輸入国になること。", "技術の消費者から、生産者および輸出国へと転換すること。", "インターネットの使用を制限すること。", "すべての技術開発を民間企業に任せること。"], correctIndex: 1, explanation: "「単なる消費者ではなく、技術の生産者および輸出国になる」ことです。" },
    // 上級文法問題
    { id: 10964, type: "grammar_advanced", text: "「جعل المملكة مركزا」の「مركزا」の正しい語尾は？", options: ["an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "in (タンウィーン・カスラ)", "a (ファトハ)"], correctIndex: 0, explanation: "動詞「Ja'ala (Make A B)」の第2目的語（補語）なので、対格（Manṣūb）となり、タンウィーン・ファトハがつきます。" },
    { id: 10965, type: "grammar_advanced", text: "「أكثر من 500 مليار」の「مليار」の正しい語尾は？", options: ["i (カスラ)", "in (タンウィーン・カスラ)", "a (ファトハ)", "an (タンウィーン・ファトハ)"], correctIndex: 0, explanation: "数詞「500 (Khamsumi'a)」の後の名詞（Muḍāf Ilayhi）は単数・属格（Majrūr）となり、カスラがつきます（イダーファ第1要素のRiyālにかかるためタンウィーンなし、またはRiyālがあればそちらにタンウィーンがつきますが、ここでは「Milyāri Riyālin」の連結なのでカスラのみ）。" }
  ]
},
{
  id: 1097,
  level: "上級",
  category: "ビジネス",
  title: "リヤド航空：空のシルクロードと物流ハブ構想",
  contentPlain: "أعلن صندوق الاستثمارات العامة عن تأسيس \"طيران الرياض\"، الناقل الجوي الوطني الجديد، في خطوة استراتيجية تهدف إلى الاستفادة من الموقع الجغرافي للمملكة كحلقة وصل بين ثلاث قارات. تسعى الشركة الجديدة إلى تسيير رحلات لأكثر من 100 وجهة حول العالم بحلول عام 2030، مكملة بذلك جهود الخطوط السعودية الحالية. يتميز أسطول طيران الرياض بكونه حديثاً وصديقاً للبيئة، مع التركيز على تقديم تجربة سفر رقمية فاخرة.\nلا يقتصر الهدف من إنشاء هذه الشركة على نقل الركاب فحسب، بل هو جزء من استراتيجية أوسع لتحويل الرياض إلى مركز لوجستي وتجاري عالمي، ودعم قطاع السياحة الذي يطمح لجذب 100 مليون زائر سنوياً. من المتوقع أن يساهم هذا المشروع في زيادة الناتج المحلي غير النفطي بما يصل إلى 75 مليار ريال، واستحداث أكثر من 200 ألف فرصة عمل مباشرة وغير مباشرة، مما يعزز مكانة العاصمة السعودية كوجهة عالمية للأعمال والترفيه.",
  contentVoweled: "أَعْلَنَ صُنْدُوقُ الِاسْتِثْمَارَاتِ الْعَامَّةِ عَنْ تَأْسِيسِ \"طَيَرَانِ الرِّيَاضِ\"، النَّاقِلِ الْجَوِّيِّ الْوَطَنِيِّ الْجَدِيدِ، فِي خُطْوَةٍ اسْتِرَاتِيجِيَّةٍ تَهْدِفُ إِلَى الِاسْتِفَادَةِ مِنَ الْمَوْقِعِ الْجُغْرَافِيِّ لِلْمَمْلَكَةِ كَحَلَقَةِ وَصْلٍ بَيْنَ ثَلَاثِ قَارَّاتٍ. تَسْعَى الشَّرِكَةُ الْجَدِيدَةُ إِلَى تَسْيِيرِ رِحْلَاتٍ لِأَكْثَرَ مِنْ 100 وِجْهَةٍ حَوْلَ الْعَالَمِ بِحُلُولِ عَامِ 2030، مُكَمِّلَةً بِذَلِكَ جُهُودَ الْخُطُوطِ السُّعُودِيَّةِ الْحَالِيَّةِ. يَتَمَيَّزُ أُسْطُولُ طَيَرَانِ الرِّيَاضِ بِكَوْنِهِ حَدِيثًا وَصَدِيقًا لِلْبِيئَةِ، مَعَ التَّرْكِيزِ عَلَى تَقْدِيمِ تَجْرِبَةِ سَفَرٍ رَقْمِيَّةٍ فَاخِرَةٍ.\nلَا يَقْتَصِرُ الْهَدَفُ مِنْ إِنْشَاءِ هَذِهِ الشَّرِكَةِ عَلَى نَقْلِ الرُّكَّابِ فَحَسْبُ، بَلْ هُوَ جُزْءٌ مِنِ اسْتِرَاتِيجِيَّةٍ أَوْسَعَ لِتَحْوِيلِ الرِّيَاضِ إِلَى مَرْكَزٍ لُوجِسْتِيٍّ وَتِجَارِيٍّ عَالَمِيٍّ، وَدَعْمِ قِطَاعِ السِّيَاحَةِ الَّذِي يَطْمَحُ لِجَذْبِ 100 مِلْيُونِ زَائِرٍ سَنَوِيًّا. مِنَ الْمُتَوَقَّعِ أَنْ يُسَاهِمَ هَذَا الْمَشْرُوعُ فِي زِيَادَةِ النَّاتِجِ الْمَحَلِّيِّ غَيْرِ النَّفْطِيِّ بِمَا يَصِلُ إِلَى 75 مِلْيَارِ رِيَالٍ، وَاسْتِحْدَاثِ أَكْثَرَ مِنْ 200 أَلْفِ فُرْصَةِ عَمَلٍ مُبَاشِرَةٍ وَغَيْرِ مُبَاشِرَةٍ، مِمَّا يُعَزِّزُ مَكَانَةَ الْعَاصِمَةِ السُّعُودِيَّةِ كَوِجْهَةٍ عَالَمِيَّةٍ لِلْأَعْمَالِ وَالتَّرْفِيهِ.",
  sentences: [
    { speaker: "記事", arabic: "أَعْلَنَ صُنْدُوقُ الِاسْتِثْمَارَاتِ الْعَامَّةِ عَنْ تَأْسِيسِ \"طَيَرَانِ الرِّيَاضِ\".", japanese: "公共投資基金は「リヤド航空」の設立を発表しました。" },
    { speaker: "記事", arabic: "تَسْعَى الشَّرِكَةُ إِلَى تَسْيِيرِ رِحْلَاتٍ لِأَكْثَرَ مِنْ 100 وِجْهَةٍ حَوْلَ الْعَالَمِ.", japanese: "同社は世界中の100以上の目的地へのフライト運航を目指しています。" },
    { speaker: "記事", arabic: "يَتَمَيَّزُ أُسْطُولُ طَيَرَانِ الرِّيَاضِ بِكَوْنِهِ حَدِيثًا وَصَدِيقًا لِلْبِيئَةِ.", japanese: "リヤド航空のフリートは近代的で環境に優しいのが特徴です。" },
    { speaker: "記事", arabic: "لَا يَقْتَصِرُ الْهَدَفُ عَلَى نَقْلِ الرُّكَّابِ فَحَسْبُ، بَلْ تَحْوِيلُ الرِّيَاضِ إِلَى مَرْكَزٍ لُوجِسْتِيٍّ.", japanese: "目的は旅客輸送に限らず、リヤドを物流ハブに変えることです。" }
  ],
  vocabList: [
    { word: "نَاقِل جَوِّي", meaning: "航空会社/キャリア" },
    { word: "أُسْطُول", meaning: "艦隊/フリート" },
    { word: "لُوجِسْتِي", meaning: "物流の" },
    { word: "وِجْهَة", meaning: "目的地" }
  ],
  questions: [
    { id: 10971, type: "reading", text: "リヤド航空の設立目的として、テキストで言及されていないものはどれですか？", options: ["サウジアラビア航空を倒産させること。", "王国の地理的位置を活用すること。", "リヤドを世界的な物流ハブに変えること。", "2030年までに100以上の目的地へ就航すること。"], correctIndex: 0, explanation: "「既存のサウジアラビア航空の取り組みを補完する（مكملة بذلك جهود الخطوط السعودية）」とあり、倒産させる目的ではありません。" },
    { id: 10972, type: "reading", text: "リヤド航空のフリート（航空機）の特徴は何ですか？", options: ["中古の航空機を使用する。", "貨物輸送専用である。", "近代的で環境に優しい。", "すべて小型機である。"], correctIndex: 2, explanation: "「近代的で環境に優しい（حديثاً وصديقاً للبيئة）」と記述されています。" },
    { id: 10973, type: "reading", text: "このプロジェクトが経済に与える影響として予想されていることは？", options: ["非石油GDPの750億リヤル増加と20万人の雇用創出。", "石油輸出の増加。", "観光客の減少。", "リヤドの人口減少。"], correctIndex: 0, explanation: "非石油GDPを750億リヤル増加させ、20万以上の雇用を創出すると予想されています。" },
    // 上級文法問題
    { id: 10974, type: "grammar_advanced", text: "「لأكثر من 100 وجهة」の「وجهة」の正しい語尾は？", options: ["in (タンウィーン・カスラ)", "an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "i (カスラ)"], correctIndex: 0, explanation: "数詞「100 (Mi'a)」の後の名詞（Muḍāf Ilayhi）は単数・属格（Majrūr）となり、タンウィーン・カスラがつきます。" },
    { id: 10975, type: "grammar_advanced", text: "「كوجهة عالمية」の「عالمية」の正しい語尾は？", options: ["in (タンウィーン・カスラ)", "an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "a (ファトハ)"], correctIndex: 0, explanation: "「Ka-wijhatin (目的地として・属格)」を修飾する形容詞なので、属格（Majrūr）となりタンウィーン・カスラがつきます。" }
  ]
},
{
  id: 1098,
  level: "上級",
  category: "教育",
  title: "人的能力開発プログラム：将来への投資",
  contentPlain: "يُعد \"برنامج تنمية القدرات البشرية\" أحد برامج رؤية المملكة 2030 الطموحة، والذي يهدف إلى ضمان أن يمتلك المواطن قدرات تمكنه من المنافسة عالمياً. يرتكز البرنامج على ثلاث ركائز رئيسية: تطوير أساس تعليمي متين ومرن للجميع، والإعداد لسوق العمل المستقبلي، وإتاحة فرص التعلم مدى الحياة. تشمل المبادرات تحديث المناهج الدراسية لتركز على مهارات القرن الحادي والعشرين مثل التفكير النقدي والرقمنة، بدلاً من الحفظ والتلقين.\nكَمَا يَسْعَى الْبَرْنَامَجُ إِلَى تَعْزِيزِ الْقِيَمِ الْوَطَنِيَّةِ وَالِاعْتِدَالِ وَالتَّسَامُحِ، وَإِتْقَانِ اللُّغَةِ الْعَرَبِيَّةِ، مَعَ الِانْفِتَاحِ عَلَى الثَّقَافَاتِ الْأُخْرَى. وَمِنَ الْمُتَوَقَّعِ أَنْ يُؤَدِّيَ هَذَا التَّحَوُّلُ إِلَى رَفْعِ تَرْتِيبِ الْمُؤَسَّسَاتِ التَّعْلِيمِيَّةِ السُّعُودِيَّةِ فِي الْمُؤَشِّرَاتِ الدَّوْلِيَّةِ، وَزِيَادَةِ مُشَارَكَةِ السُّعُودِيِّينَ فِي الْوَظَائِفِ عَالِيَةِ الْمَهَارَةِ. إِنَّ الِاسْتِثْمَارَ فِي الْعُقُولِ هُوَ الِاسْتِثْمَارُ الْحَقِيقِيُّ الَّذِي تُرَاهِنُ عَلَيْهِ الْمَمْلَكَةُ لِبِنَاءِ مُسْتَقْبَلٍ مُزْدَهِرٍ وَمُسْتَدَامٍ.",
  contentVoweled: "يُعَدُّ \"بَرْنَامَجُ تَنْمِيَةِ الْقُدْرَاتِ الْبَشَرِيَّةِ\" أَحَدَ بَرَامِجِ رُؤْيَةِ الْمَمْلَكَةِ 2030 الطَّمُوحَةِ، وَالَّذِي يَهْدِفُ إِلَى ضَمَانِ أَنْ يَمْتَلِكَ الْمُوَاطِنُ قُدْرَاتٍ تُمَكِّنُهُ مِنَ الْمُنَافَسَةِ عَالَمِيًّا. يَرْتَكِزُ الْبَرْنَامَجُ عَلَى ثَلَاثِ رَكَائِزَ رَئِيسِيَّةٍ: تَطْوِيرِ أَسَاسٍ تَعْلِيمِيٍّ مَتِينٍ وَمَرِنٍ لِلْجَمِيعِ، وَالْإِعْدَادِ لِسُوقِ الْعَمَلِ الْمُسْتَقْبَلِيِّ، وَإِتَاحَةِ فُرَصِ التَّعَلُّمِ مَدَى الْحَيَاةِ. تَشْمَلُ الْمُبَادَرَاتُ تَحْدِيثَ الْمَنَاهِجِ الدِّرَاسِيَّةِ لِتُرَكِّزَ عَلَى مَهَارَاتِ الْقَرْنِ الْحَادِي وَالْعِشْرِينَ مِثْلِ التَّفْكِيرِ النَّقْدِيِّ وَالرَّقْمَنَةِ، بَدَلًا مِنَ الْحِفْظِ وَالتَّلْقِينِ.\nكَمَا يَسْعَى الْبَرْنَامَجُ إِلَى تَعْزِيزِ الْقِيَمِ الْوَطَنِيَّةِ وَالِاعْتِدَالِ وَالتَّسَامُحِ، وَإِتْقَانِ اللُّغَةِ الْعَرَبِيَّةِ، مَعَ الِانْفِتَاحِ عَلَى الثَّقَافَاتِ الْأُخْرَى. وَمِنَ الْمُتَوَقَّعِ أَنْ يُؤَدِّيَ هَذَا التَّحَوُّلُ إِلَى رَفْعِ تَرْتِيبِ الْمُؤَسَّسَاتِ التَّعْلِيمِيَّةِ السُّعُودِيَّةِ فِي الْمُؤَشِّرَاتِ الدَّوْلِيَّةِ، وَزِيَادَةِ مُشَارَكَةِ السُّعُودِيِّينَ فِي الْوَظَائِفِ عَالِيَةِ الْمَهَارَةِ. إِنَّ الِاسْتِثْمَارَ فِي الْعُقُولِ هُوَ الِاسْتِثْمَارُ الْحَقِيقِيُّ الَّذِي تُرَاهِنُ عَلَيْهِ الْمَمْلَكَةُ لِبِنَاءِ مُسْتَقْبَلٍ مُزْدَهِرٍ وَمُسْتَدَامٍ.",
  sentences: [
    { speaker: "記事", arabic: "يُعَدُّ \"بَرْنَامَجُ تَنْمِيَةِ الْقُدْرَاتِ الْبَشَرِيَّةِ\" أَحَدَ بَرَامِجِ رُؤْيَةِ الْمَمْلَكَةِ 2030.", japanese: "「人的能力開発プログラム」はビジョン2030のプログラムの一つです。" },
    { speaker: "記事", arabic: "يَرْتَكِزُ الْبَرْنَامَجُ عَلَى ثَلَاثِ رَكَائِزَ رَئِيسِيَّةٍ.", japanese: "このプログラムは3つの主要な柱に基づいています。" },
    { speaker: "記事", arabic: "تَشْمَلُ الْمُبَادَرَاتُ تَحْدِيثَ الْمَنَاهِجِ الدِّرَاسِيَّةِ لِتُرَكِّزَ عَلَى مَهَارَاتِ الْقَرْنِ الْحَادِي وَالْعِشْرِينَ.", japanese: "イニシアティブには、21世紀のスキルに焦点を当てるためのカリキュラムの更新が含まれます。" },
    { speaker: "記事", arabic: "إِنَّ الِاسْتِثْمَارَ فِي الْعُقُولِ هُوَ الِاسْتِثْمَارُ الْحَقِيقِيُّ.", japanese: "頭脳への投資こそが真の投資です。" }
  ],
  vocabList: [
    { word: "قُدْرَات بَشَرِيَّة", meaning: "人的能力" },
    { word: "مُنَافَسَة", meaning: "競争" },
    { word: "مَنَاهِج", meaning: "カリキュラム" },
    { word: "تَفْكِير نَقْدِيّ", meaning: "批判的思考" }
  ],
  questions: [
    { id: 10981, type: "reading", text: "「人的能力開発プログラム」の主要な目標は何ですか？", options: ["国民に海外移住を促すこと。", "国民が世界的に競争できる能力を持つことを保証すること。", "すべての教育を有料化すること。", "伝統的な教育方法を維持すること。"], correctIndex: 1, explanation: "「国民が世界的に競争できる能力を持つことを保証する」ことが目標です。" },
    { id: 10982, type: "reading", text: "教育カリキュラムの更新において、どのような変化が重視されていますか？", options: ["暗記と詰め込み教育の強化。", "批判的思考やデジタル化などの21世紀型スキルへの移行。", "外国語教育の廃止。", "体育の授業の削減。"], correctIndex: 1, explanation: "「暗記や詰め込みではなく、批判的思考やデジタル化といった21世紀のスキルに焦点を当てる」と記述されています。" },
    { id: 10983, type: "reading", text: "プログラムが推進する「価値観」に含まれないものはどれですか？", options: ["中庸と寛容。", "国家的な価値観。", "他文化への閉鎖性。", "アラビア語の習得。"], correctIndex: 2, explanation: "テキストには「他文化への開放（الانفتاح على الثقافات الأخرى）」とあり、閉鎖性は含まれません。" },
    // 上級文法問題
    { id: 10984, type: "grammar_advanced", text: "「على ثلاث ركائز」の「ركائز」の正しい語尾は？", options: ["a (ファトハ)", "i (カスラ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "数詞「Thalāth (3)」の後の名詞（Muḍāf Ilayhi）は属格ですが、「Rakā'iz」は非限定名詞（Mafā'ilパターン）なので、カスラではなくファトハを取ります。" },
    { id: 10985, type: "grammar_advanced", text: "「ضمان أن يمتلك المواطن」の「يمتلك」の正しい語尾は？", options: ["a (ファトハ)", "u (ダンマ)", "Sukuun (スクーン)", "i (カスラ)"], correctIndex: 0, explanation: "接続助詞「An」の後の現在形動詞は接続法（Manṣūb）となり、ファトハがつきます。" }
  ]
},
{
  id: 1099,
  level: "上級",
  category: "文化",
  title: "ディルイーヤ・ゲート：王国の宝石と歴史のゆりかご",
  contentPlain: "يعد مشروع \"بوابة الدرعية\" واحداً من أضخم المشاريع الثقافية والتراثية في العالم، حيث يهدف إلى تحويل مدينة الدرعية التاريخية، مهد الدولة السعودية الأولى، إلى وجهة سياحية وثقافية عالمية. يتمحور المشروع حول حي \"الطريف\" التاريخي، المسجل في قائمة التراث العالمي لليونسكو، والذي يتم ترميمه بعناية فائقة باستخدام المواد التقليدية مثل الطين، للحفاظ على أصالته العمرانية النجدية.\nتخطط الهيئة لتطوير مساحات واسعة تضم متاحف عالمية، وجامعة للفنون، وأسواقاً تقليدية، وفنادق فاخرة، بحيث تمزج بين عراقة الماضي ورفاهية الحاضر. ومن المتوقع أن يستقطب المشروع 27 مليون زائر سنوياً، مما يساهم في تعزيز الهوية الوطنية وتعريف العالم بتاريخ المملكة العريق. إن الدرعية ليست مجرد موقع أثري، بل هي رمز للصمود والوحدة، وتجسد العمق التاريخي الذي تنطلق منه السعودية نحو المستقبل.",
  contentVoweled: "يُعَدُّ مَشْرُوعُ \"بَوَّابَةِ الدِّرْعِيَّةِ\" وَاحِدًا مِنْ أَضْخَمِ الْمَشَارِيعِ الثَّقَافِيَّةِ وَالتُّرَاثِيَّةِ فِي الْعَالَمِ، حَيْثُ يَهْدِفُ إِلَى تَحْوِيلِ مَدِينَةِ الدِّرْعِيَّةِ التَّارِيخِيَّةِ، مَهْدِ الدَّوْلَةِ السُّعُودِيَّةِ الْأُولَى، إِلَى وِجْهَةٍ سِيَاحِيَّةٍ وَثَقَافِيَّةٍ عَالَمِيَّةٍ. يَتَمَحْوَرُ الْمَشْرُوعُ حَوْلَ حَيِّ \"الطُّرَيْفِ\" التَّارِيخِيِّ، الْمُسَجَّلِ فِي قَائِمَةِ التُّرَاثِ الْعَالَمِيِّ لِلْيُونِسْكُو، وَالَّذِي يَتِمُّ تَرْمِيمُهُ بِعِنَايَةٍ فَائِقَةٍ بِاسْتِخْدَامِ الْمَوَادِّ التَّقْلِيدِيَّةِ مِثْلِ الطِّينِ، لِلْحِفَاظِ عَلَى أَصَالَتِهِ الْعُمْرَانِيَّةِ النَّجْدِيَّةِ.\nتُخَطِّطُ الْهَيْئَةُ لِتَطْوِيرِ مِسَاحَاتٍ وَاسِعَةٍ تَضُمُّ مَتَاحِفَ عَالَمِيَّةً، وَجَامِعَةً لِلْفُنُونِ، وَأَسْوَاقًا تَقْلِيدِيَّةً، وَفَنَادِقَ فَاخِرَةً، بِحَيْثُ تَمْزُجُ بَيْنَ عَرَاقَةِ الْمَاضِي وَرَفَاهِيَةِ الْحَاضِرِ. وَمِنَ الْمُتَوَقَّعِ أَنْ يَسْتَقْطِبَ الْمَشْرُوعُ 27 مِلْيُونَ زَائِرٍ سَنَوِيًّا، مِمَّا يُسَاهِمُ فِي تَعْزِيزِ الْهُوِيَّةِ الْوَطَنِيَّةِ وَتَعْرِيفِ الْعَالَمِ بِتَارِيخِ الْمَمْلَكَةِ الْعَرِيقِ. إِنَّ الدِّرْعِيَّةَ لَيْسَتْ مُجَرَّدَ مَوْقِعٍ أَثَرِيٍّ، بَلْ هِيَ رَمْزٌ لِلصُّمُودِ وَالْوَحْدَةِ، وَتُجَسِّدُ الْعُمْقَ التَّارِيخِيَّ الَّذِي تَنْطَلِقُ مِنْهُ السُّعُودِيَّةُ نَحْوَ الْمُسْتَقْبَلِ.",
  sentences: [
    { speaker: "記事", arabic: "يُعَدُّ مَشْرُوعُ \"بَوَّابَةِ الدِّرْعِيَّةِ\" وَاحِدًا مِنْ أَضْخَمِ الْمَشَارِيعِ الثَّقَافِيَّةِ وَالتُّرَاثِيَّةِ.", japanese: "「ディルイーヤ・ゲート」プロジェクトは世界最大級の文化・遺産プロジェクトの一つです。" },
    { speaker: "記事", arabic: "يَتَمَحْوَرُ الْمَشْرُوعُ حَوْلَ حَيِّ \"الطُّرَيْفِ\" التَّارِيخِيِّ، الْمُسَجَّلِ فِي قَائِمَةِ التُّرَاثِ الْعَالَمِيِّ.", japanese: "プロジェクトは、世界遺産に登録されている歴史的な「アット・トライフル」地区を中心としています。" },
    { speaker: "記事", arabic: "تُخَطِّطُ الْهَيْئَةُ لِتَطْوِيرِ مِسَاحَاتٍ وَاسِعَةٍ تَضُمُّ مَتَاحِفَ عَالَمِيَّةً وَأَسْوَاقًا تَقْلِيدِيَّةً.", japanese: "当局は、世界的な博物館や伝統的な市場を含む広大なエリアを開発することを計画しています。" },
    { speaker: "記事", arabic: "إِنَّ الدِّرْعِيَّةَ رَمْزٌ لِلصُّمُودِ وَالْوَحْدَةِ.", japanese: "ディルイーヤは不屈の精神と統一の象徴です。" }
  ],
  vocabList: [
    { word: "مَهْد", meaning: "揺りかご/発祥の地" },
    { word: "تَرْمِيم", meaning: "修復" },
    { word: "أَصَالَة", meaning: "真正性" },
    { word: "عَرَاقَة", meaning: "伝統" }
  ],
  questions: [
    { id: 10991, type: "reading", text: "ディルイーヤ・ゲート・プロジェクトの中心となる歴史地区の名前は？", options: ["アル・バラド", "アット・トライフル", "アル・ウラ", "マスマク"], correctIndex: 1, explanation: "「حي الطريف (アット・トライフル地区)」です。" },
    { id: 10992, type: "reading", text: "修復作業において特に重視されていることは何ですか？", options: ["コンクリートを使って現代風にすること。", "泥などの伝統的な素材を使ってナジュド建築の真正性を保つこと。", "すべての建物をガラス張りにすること。", "遺跡をすべて取り壊して新築すること。"], correctIndex: 1, explanation: "「泥などの伝統的な素材を使用し、ナジュドの建築的真正性を保つ」と記述されています。" },
    { id: 10993, type: "reading", text: "ディルイーヤはサウジアラビアにとってどのような象徴的意味を持っていますか？", options: ["単なる古い廃墟。", "商業の中心地。", "不屈の精神と統一の象徴、第一国家の発祥地。", "外国文化の受容地。"], correctIndex: 2, explanation: "「第一次サウジ国家の揺りかご」であり、「不屈の精神と統一の象徴」であるとされています。" },
    // 上級文法問題
    { id: 10994, type: "grammar_advanced", text: "「واحدا من أضخم المشاريع」の「واحدا」の正しい語尾は？", options: ["an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "in (タンウィーン・カスラ)", "u (ダンマ)"], correctIndex: 0, explanation: "受動態「Yu'addu (見なされる)」の第2目的語（補語）として対格（Manṣūb）となり、タンウィーン・ファトハがつきます。" },
    { id: 10995, type: "grammar_advanced", text: "「باستخدام المواد التقليدية」の「المواد」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "「Istikhdām」の後のイダーファ第2要素（属格）です。「Mawādd」は非限定名詞ですが、定冠詞がついているため、通常通りカスラを取ります。" }
  ]
},
{
  id: 1100,
  title: "水資源の安全保障と海水淡水化の革新",
  category: "環境",
  level: "上級",
  contentVoweled: "تُعْتَبَرُ الْمَمْلَكَةُ الْعَرَبِيَّةُ السُّعُودِيَّةُ أَكْبَرَ مُنْتِجٍ لِلْمِيَاهِ الْمُحَلَّاةِ فِي الْعَالَمِ، وَهُوَ إِنْجَازٌ حَيَوِيٌّ لِبَلَدٍ يَفْتَقِرُ إِلَى الْأَنْهَارِ وَالْمِيَاهِ الْعَذْبَةِ الدَّائِمَةِ. تُوَاجِهُ الْمَمْلَكَةُ تَحَدِّيًا مُزْدَوَجًا يَتَمَثَّلُ فِي تَلْبِيَةِ الطَّلَبِ الْمُتَزَايِدِ عَلَى الْمِيَاهِ نَتِيجَةَ النُّمُوِّ السُّكَّانِيِّ وَالِاقْتِصَادِيِّ، مَعَ الْحِفَاظِ عَلَى الْبِيئَةِ وَتَقْلِيلِ اسْتِهْلَاكِ الطَّاقَةِ. وَلِتَحْقِيقِ ذَلِكَ، تَسْتَثْمِرُ الْمُؤَسَّسَةُ الْعَامَّةُ لِتَحْلِيَةِ الْمِيَاهِ الْمَالِحَةِ فِي تِقْنِيَّاتٍ مُتَطَوِّرَةٍ مِثْلِ \"التَّنَاضُحِ الْعَكْسِيِّ\" الَّتِي تَسْتَهْلِكُ طَاقَةً أَقَلَّ بِكَثِيرٍ مُقَارَنَةً بِالطُّرُقِ الْحَرَارِيَّةِ التَّقْلِيدِيَّةِ.\nوَعَلَاوَةً عَلَى ذَلِكَ، أَطْلَقَتِ الْمَمْلَكَةُ مَشَارِيعَ طَمُوحَةً لِاسْتِخْدَامِ الطَّاقَةِ الشَّمْسِيَّةِ فِي تَشْغِيلِ مَحَطَّاتِ التَّحْلِيَةِ، بِهَدَفِ خَفْضِ الِانْبِعَاثَاتِ الْكَرْبُونِيَّةِ وَتَحْقِيقِ اسْتِدَامَةِ قِطَاعِ الْمِيَاهِ. كَمَا يَتِمُّ التَّرْكِيزُ عَلَى مُعَالَجَةِ مِيَاهِ الصَّرْفِ الصِّحِّيِّ وَإِعَادَةِ اسْتِخْدَامِهَا فِي الزِّرَاعَةِ وَالرِّيِّ وَتَبْرِيدِ الْمَصَانِعِ، مِمَّا يُخَفِّفُ الضَّغْطَ عَلَى مَصَادِرِ الْمِيَاهِ الْجَوْفِيَّةِ غَيْرِ الْمُتَجَدِّدَةِ. إِنَّ الْأَمْنَ الْمَائِيَّ يُعَدُّ رَكِيزَةً أَسَاسِيَّةً لِلْأَمْنِ الْقَوْمِيِّ، وَتَسْعَى السُّعُودِيَّةُ لِضَمَانِ اسْتِدَامَتِهِ لِلْأَجْيَالِ الْقَادِمَةِ.",
  contentPlain: "تعتبر المملكة العربية السعودية أكبر منتج للمياه المحلاة في العالم، وهو إنجاز حيوي لبلد يفتقر إلى الأنهار والمياه العذبة الدائمة. تواجه المملكة تحدياً مزدوجاً يتمثل في تلبية الطلب المتزايد على المياه نتيجة النمو السكاني والاقتصادي، مع الحفاظ على البيئة وتقليل استهلاك الطاقة. ولتحقيق ذلك، تستثمر المؤسسة العامة لتحلية المياه المالحة في تقنيات متطورة مثل \"التناضح العكسي\" التي تستهلك طاقة أقل بكثير مقارنة بالطرق الحرارية التقليدية.\nوعلاوة على ذلك، أطلقت المملكة مشاريع طموحة لاستخدام الطاقة الشمسية في تشغيل محطات التحلية، بهدف خفض الانبعاثات الكربونية وتحقيق استدامة قطاع المياه. كما يتم التركيز على معالجة مياه الصرف الصحي وإعادة استخدامها في الزراعة والري وتبريد المصانع، مما يخفف الضغط على مصادر المياه الجوفية غير المتجددة. إن الأمن المائي يُعد ركيزة أساسية للأمن القومي، وتسعى السعودية لضمان استدامته للأجيال القادمة.",
  vocabList: [
    { word: "مِيَاه مُحَلَّاة", meaning: "淡水化された水" },
    { word: "تَنَاضُح عَكْسِيّ", meaning: "逆浸透 (RO)" },
    { word: "مِيَاه جَوْفِيَّة", meaning: "地下水" },
    { word: "صَرْف صِحِّي", meaning: "下水/排水" }
  ],
  questions: [
    { id: 11001, type: "reading", text: "サウジアラビアの水資源に関する最大の特徴は何ですか？", options: ["世界で最も多くの川がある。", "世界最大の淡水化水生産国である。", "雨が非常に多く、水不足の心配がない。", "氷河から水を得ている。"], correctIndex: 1, explanation: "「أكبر منتج للمياه المحلاة في العالم」と記述されています。" },
    { id: 11002, type: "reading", text: "エネルギー消費を抑えるために採用されている技術はどれですか？", options: ["石炭火力。", "逆浸透法 (RO)。", "伝統的な熱法。", "水の輸入。"], correctIndex: 1, explanation: "「التناضح العكسي」に投資しています。" },
    { id: 11003, type: "reading", text: "地下水への圧力を軽減するために行われている対策は？", options: ["下水の処理と再利用。", "農業の完全禁止。", "海水の直接使用。", "市民の水使用量の制限のみ。"], correctIndex: 0, explanation: "「معالجة مياه الصرف الصحي وإعادة استخدامها」により、地下水への圧力を軽減しています。" },
    // 上級文法問題
    { id: 11004, type: "grammar_advanced", text: "「يفتقر إلى الأنهار」の「الأنهار」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "前置詞「Ilā」の後の名詞（Majrūr）なのでカスラがつきます（定冠詞付きなのでタンウィーンなし）。" },
    { id: 11005, type: "grammar_advanced", text: "「تستهلك طاقة أقل」の「أقل」の正しい語尾は？", options: ["a (ファトハ)", "u (ダンマ)", "i (カスラ)", "un (タンウィーン)"], correctIndex: 0, explanation: "「Tastahliku (消費する)」の目的語「Tāqatan (エネルギーを)」を修飾する形容詞です。「Aqalla」は非限定名詞なので、対格でもタンウィーンを取らずファトハ一文字になります。" }
  ],
  sentences: [
    { speaker: "記事", arabic: "تُعْتَبَرُ الْمَمْلَكَةُ الْعَرَبِيَّةُ السُّعُودِيَّةُ أَكْبَرَ مُنْتِجٍ لِلْمِيَاهِ الْمُحَلَّاةِ فِي الْعَالَمِ.", japanese: "サウジアラビア王国は世界最大の淡水化水生産国です。" },
    { speaker: "記事", arabic: "تَسْتَثْمِرُ الْمُؤَسَّسَةُ فِي تِقْنِيَّاتٍ مُتَطَوِّرَةٍ مِثْلِ \"التَّنَاضُحِ الْعَكْسِيِّ\".", japanese: "機関は「逆浸透法」のような高度な技術に投資しています。" },
    { speaker: "記事", arabic: "أَطْلَقَتِ الْمَمْلَكَةُ مَشَارِيعَ لِاسْتِخْدَامِ الطَّاقَةِ الشَّمْسِيَّةِ فِي تَشْغِيلِ مَحَطَّاتِ التَّحْلِيَةِ.", japanese: "王国は淡水化プラントの稼働に太陽エネルギーを使用するプロジェクトを開始しました。" },
    { speaker: "記事", arabic: "يَتِمُّ التَّرْكِيزُ عَلَى مُعَالَجَةِ مِيَاهِ الصَّرْفِ الصِّحِّيِّ وَإِعَادَةِ اسْتِخْدَامِهَا.", japanese: "下水を処理して再利用することに重点が置かれています。" }
  ]
},
{
  id: 1101,
  title: "レッド・シー・プロジェクト：再生型観光の新たな基準",
  category: "観光",
  level: "上級",
  contentVoweled: "يُمَثِّلُ \"مَشْرُوعُ الْبَحْرِ الْأَحْمَرِ\" نَقْلَةً نَوْعِيَّةً فِي مَفْهُومِ السِّيَاحَةِ الْفَاخِرَةِ، حَيْثُ يَجْمَعُ بَيْنَ الرَّفَاهِيَّةِ وَالِاسْتِدَامَةِ الْبِيئِيَّةِ. يَمْتَدُّ الْمَشْرُوعُ عَلَى مِسَاحَةٍ شَاسِعَةٍ تَضُمُّ أَرْخَبِيلًا مِنْ 90 جَزِيرَةً بِكْرًا، وَشَوَاطِئَ خَلَّابَةً، وَبَرَاكِينَ خَامِدَةً، وَصَحَارِيَ، وَجِبَالًا. مَا يُمَيِّزُ هَذَا الْمَشْرُوعَ هُوَ الْتِزَامُهُ بِمَبْدَأِ \"السِّيَاحَةِ الْمُتَجَدِّدَةِ\"، الَّتِي لَا تَكْتَفِي بِالْحِفَاظِ عَلَى الْبِيئَةِ فَحَسْبُ، بَلْ تَسْعَى لِتَعْزِيزِهَا وَزِيَادَةِ التَّنَوُّعِ الْبِيُولُوجِيِّ بِنِسْبَةِ 30% بِحُلُولِ عَامِ 2040.\nسَيَتِمُّ تَشْغِيلُ الْوِجْهَةِ بِالْكَامِلِ بِاسْتِخْدَامِ الطَّاقَةِ الْمُتَجَدِّدَةِ بِنِسْبَةِ 100%، دُونَ الِاعْتِمَادِ عَلَى شَبَكَةِ الْكَهْرَبَاءِ الْوَطَنِيَّةِ، مِمَّا يَجْعَلُهُ أَكْبَرَ مَشْرُوعٍ سِيَاحِيٍّ فِي الْعَالَمِ يَعْمَلُ بِهَذِهِ الطَّرِيقَةِ. كَمَا تَمَّ فَرْضُ قُيُودٍ صَارِمَةٍ عَلَى عَدَدِ الزُّوَّارِ السَّنَوِيِّ لِضَمَانِ عَدَمِ الْإِضْرَارِ بِالنِّظَامِ الْبِيئِيِّ الْحَسَّاسِ. يَهْدِفُ الْمَشْرُوعُ إِلَى جَذْبِ سُيَّاحِ النُّخْبَةِ مِنْ جَمِيعِ أَنْحَاءِ الْعَالَمِ، مُقَدِّمًا تَجْرِبَةً اسْتِثْنَائِيَّةً تَحْتَرِمُ الطَّبِيعَةَ وَتَدْعَمُ الِاقْتِصَادَ الْمَحَلِّيَّ.",
  contentPlain: "يُمثل \"مشروع البحر الأحمر\" نقلة نوعية في مفهوم السياحة الفاخرة، حيث يجمع بين الرفاهية والاستدامة البيئية. يمتد المشروع على مساحة شاسعة تضم أرخبيلاً من 90 جزيرة بكر، وشواطئ خلابة، وبراكين خامدة، وصحاري، وجبالاً. ما يميز هذا المشروع هو التزامه بمبدأ \"السياحة المتجددة\"، التي لا تكتفي بالحفاظ على البيئة فحسب، بل تسعى لتعزيزها وزيادة التنوع البيولوجي بنسبة 30% بحلول عام 2040.\nسيتم تشغيل الوجهة بالكامل باستخدام الطاقة المتجددة بنسبة 100%، دون الاعتماد على شبكة الكهرباء الوطنية، مما يجعله أكبر مشروع سياحي في العالم يعمل بهذه الطريقة. كما تم فرض قيود صارمة على عدد الزوار السنوي لضمان عدم الإضرار بالنظام البيئي الحساس. يهدف المشروع إلى جذب سياح النخبة من جميع أنحاء العالم، مقدماً تجربة استثنائية تحترم الطبيعة وتدعم الاقتصاد المحلي.",
  vocabList: [
    { word: "سِيَاحَة مُتَجَدِّدَة", meaning: "再生型観光" },
    { word: "أَرْخَبِيل", meaning: "群島" },
    { word: "بِكْر", meaning: "手つかずの" },
    { word: "تَنَوُّع بِيُولُوجِيّ", meaning: "生物多様性" }
  ],
  questions: [
    { id: 11011, type: "reading", text: "「再生型観光」の定義としてテキストで説明されていることは？", options: ["環境を現状維持するだけでなく、積極的に改善・強化すること。", "一度破壊した自然を人工物で置き換えること。", "観光客にゴミ拾いを強制すること。", "古いホテルを取り壊して新しくすること。"], correctIndex: 0, explanation: "「環境を保全するだけでなく、それを強化し生物多様性を高めることを目指す」とあります。" },
    { id: 11012, type: "reading", text: "このプロジェクトのエネルギー供給に関する特徴は？", options: ["原子力発電を使用する。", "国の送電網に依存している。", "100%再生可能エネルギーで運営され、送電網に依存しない。", "ディーゼル発電機を使用する。"], correctIndex: 2, explanation: "「国の送電網に依存せず、100%再生可能エネルギーを使用する」と明記されています。" },
    { id: 11013, type: "reading", text: "環境保護のために訪問者に対してどのような措置が取られていますか？", options: ["訪問者数の制限。", "入場料の無料化。", "ペット同伴の義務化。", "夜間の外出禁止。"], correctIndex: 0, explanation: "「年間の訪問者数に厳しい制限が課された」とあります。" },
    // 上級文法問題
    { id: 11014, type: "grammar_advanced", text: "「تضم أرخبيلات」の「أرخبيلات」ではなく「أرخبيلًا」が正しいですが、原文の「أرخبيلًا」の語尾は？", options: ["an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "in (タンウィーン・カスラ)", "a (ファトハ)"], correctIndex: 0, explanation: "動詞「Taḍummu (含む)」の目的語なので、対格（Manṣūb）となりタンウィーン・ファトハがつきます。" },
    { id: 11015, type: "grammar_advanced", text: "「وصحاري وجبالا」の「صحاري」の正しい語尾は？", options: ["a (ファトハ・タンウィーンなし)", "an (タンウィーン・ファトハ)", "i (カスラ)", "un (タンウィーン)"], correctIndex: 0, explanation: "「Ṣaḥārī」は非限定名詞（Mafā'ilパターン）なので、対格でもタンウィーンを取らずファトハ（表記上はYāがあるので推定になることもありますが、ここでは「Ṣaḥāriya」と読まれることが多い）を取ります。" }
  ],
  sentences: [
    { speaker: "記事", arabic: "يُمَثِّلُ \"مَشْرُوعُ الْبَحْرِ الْأَحْمَرِ\" نَقْلَةً نَوْعِيَّةً فِي مَفْهُومِ السِّيَاحَةِ الْفَاخِرَةِ.", japanese: "「レッド・シー・プロジェクト」は、ラグジュアリーツーリズムの概念における質的な飛躍を表しています。" },
    { speaker: "記事", arabic: "مَا يُمَيِّزُ هَذَا الْمَشْرُوعَ هُوَ الْتِزَامُهُ بِمَبْدَأِ \"السِّيَاحَةِ الْمُتَجَدِّدَةِ\".", japanese: "このプロジェクトを特徴づけるのは「再生型観光」の原則へのコミットメントです。" },
    { speaker: "記事", arabic: "سَيَتِمُّ تَشْغِيلُ الْوِجْهَةِ بِالْكَامِلِ بِاسْتِخْدَامِ الطَّاقَةِ الْمُتَجَدِّدَةِ بِنِسْبَةِ 100%.", japanese: "目的地は、100％再生可能エネルギーを使用して完全に運営されます。" },
    { speaker: "記事", arabic: "تَمَّ فَرْضُ قُيُودٍ صَارِمَةٍ عَلَى عَدَدِ الزُّوَّارِ السَّنَوِيِّ.", japanese: "年間の訪問者数に厳しい制限が課されました。" }
  ]
},
{
  id: 1102,
  title: "サウジアラビア女性のエンパワーメントと労働市場への参加",
  category: "社会",
  level: "上級",
  contentVoweled: "شَهِدَتِ الْمَمْلَكَةُ الْعَرَبِيَّةُ السُّعُودِيَّةُ فِي السَّنَوَاتِ الْأَخِيرَةِ قَفَزَاتٍ غَيْرَ مَسْبُوقَةٍ فِي مَجَالِ تَمْكِينِ الْمَرْأَةِ، حَيْثُ تَجَاوَزَتْ مُعَدَّلَاتُ مُشَارَكَةِ الْإِنَاثِ فِي سُوقِ الْعَمَلِ الْمُسْتَهْدَفَاتِ الْمُحَدَّدَةِ فِي رُؤْيَةِ 2030 قَبْلَ مَوْعِدِهَا بِأَعْوَامٍ، لِتَصِلَ إِلَى أَكْثَرَ مِنْ 35%. لَمْ يَعُدْ دَوْرُ الْمَرْأَةِ مُقْتَصِرًا عَلَى الْقِطَاعَاتِ التَّقْلِيدِيَّةِ كَالتَّعْلِيمِ وَالصِّحَّةِ، بَلِ اقْتَحَمَتْ مَجَالَاتٍ كَانَتْ حِكْرًا عَلَى الرِّجَالِ، مِثْلَ الْقِطَاعِ الْعَسْكَرِيِّ، وَالسِّلْكِ الدِّبْلُومَاسِيِّ، وَتِقْنِيَةِ الْمَعْلُومَاتِ، وَالْهَنْدَسَةِ، وَحَتَّى قِيَادَةِ الْقِطَارَاتِ.\nيَعُودُ هَذَا التَّحَوُّلُ إِلَى سِلْسِلَةٍ مِنَ الْإِصْلَاحَاتِ التَّشْرِيعِيَّةِ الَّتِي كَفَلَتْ لِلْمَرْأَةِ الْمُسَاوَاةَ فِي الْأُجُورِ، وَحُرِّيَّةَ التَّنَقُّلِ، وَالْحِمَايَةَ مِنَ التَّمْيِيزِ. كَمَا تَمَّ تَعْيِينُ الْعَدِيدِ مِنَ النِّسَاءِ فِي مَنَاصِبَ قِيَادِيَّةٍ رَفِيعَةٍ، بِمَا فِي ذَلِكَ سَفِيرَاتٍ وَنَائِبَاتِ وُزَرَاءَ. إِنَّ تَمْكِينَ الْمَرْأَةِ لَيْسَ مُجَرَّدَ قَضِيَّةٍ حُقُوقِيَّةٍ، بَلْ هُوَ ضَرُورَةٌ اقْتِصَادِيَّةٌ لِضَمَانِ الِاسْتِفَادَةِ الْكَامِلَةِ مِنْ مَوَاهِبِ الْمُجْتَمَعِ وَدَفْعِ عَجَلَةِ التَّنْمِيَةِ الْمُسْتَدَامَةِ.",
  contentPlain: "شهدت المملكة العربية السعودية في السنوات الأخيرة قفزات غير مسبوقة في مجال تمكين المرأة، حيث تجاوزت معدلات مشاركة الإناث في سوق العمل المستهدفات المحددة في رؤية 2030 قبل موعدها بأعوام، لتصل إلى أكثر من 35%. لم يعد دور المرأة مقتصراً على القطاعات التقليدية كالتعليم والصحة، بل اقتحمت مجالات كانت حكراً على الرجال، مثل القطاع العسكري، والسلك الدبلوماسي، وتقنية المعلومات، والهندسة، وحتى قيادة القطارات.\nيعود هذا التحول إلى سلسلة من الإصلاحات التشريعية التي كفلت للمرأة المساواة في الأجور، وحرية التنقل، والحماية من التمييز. كما تم تعيين العديد من النساء في مناصب قيادية رفيعة، بما في ذلك سفيرات ونائبات وزراء. إن تمكين المرأة ليس مجرد قضية حقوقية، بل هو ضرورة اقتصادية لضمان الاستفادة الكاملة من مواهب المجتمع ودفع عجلة التنمية المستدامة.",
  vocabList: [
    { word: "تَمْكِين", meaning: "エンパワーメント" },
    { word: "سُوق الْعَمَل", meaning: "労働市場" },
    { word: "إِصْلَاحَات تَشْرِيعِيَّة", meaning: "法的改革" },
    { word: "مَنَاصِب قِيَادِيَّة", meaning: "指導的地位" }
  ],
  questions: [
    { id: 11021, type: "reading", text: "女性の労働参加率に関する記述として正しいものは？", options: ["目標を達成できず減少している。", "ビジョン2030の目標を予定より早く達成し、35%を超えた。", "依然として5%未満にとどまっている。", "教育分野のみで増加している。"], correctIndex: 1, explanation: "「目標を数年前倒しで達成し、35%以上に達した」とあります。" },
    { id: 11022, type: "reading", text: "女性が進出した「かつては男性の独占だった分野」に含まれないものは？", options: ["軍事部門。", "外交団。", "鉄道の運転。", "伝統的な主婦業。"], correctIndex: 3, explanation: "軍事、外交、IT、エンジニアリング、電車の運転などに進出したと記述されています。" },
    { id: 11023, type: "reading", text: "女性のエンパワーメントは、権利の問題であると同時に何であるとされていますか？", options: ["宗教的な義務。", "経済的な必要性。", "政治的なパフォーマンス。", "一時的な流行。"], correctIndex: 1, explanation: "「経済的な必要性（ضرورة اقتصادية）」であると述べられています。" },
    // 上級文法問題
    { id: 11024, type: "grammar_advanced", text: "「تجاوزت معدلات مشاركة الإناث」の「معدلات」の正しい語尾は？", options: ["u (ダンマ)", "a (ファトハ)", "i (カスラ)", "un (タンウィーン)"], correctIndex: 0, explanation: "動詞「Tajāwazat (超えた)」の主語（Fā'il）なので主格（Marfū'）となり、ダンマがつきます。" },
    { id: 11025, type: "grammar_advanced", text: "「تعيين العديد من النساء في مناصب」の「مناصب」の正しい語尾は？", options: ["a (ファトハ)", "i (カスラ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "前置詞「Fī」の後ですが、「Manāṣib」は非限定名詞（Mumnū' min al-ṣarf）なので、カスラではなくファトハを取ります。" }
  ],
  sentences: [
    { speaker: "記事", arabic: "تَجَاوَزَتْ مُعَدَّلَاتُ مُشَارَكَةِ الْإِنَاثِ فِي سُوقِ الْعَمَلِ الْمُسْتَهْدَفَاتِ الْمُحَدَّدَةِ.", japanese: "女性の労働市場への参加率は、設定された目標を超えました。" },
    { speaker: "記事", arabic: "لَمْ يَعُدْ دَوْرُ الْمَرْأَةِ مُقْتَصِرًا عَلَى الْقِطَاعَاتِ التَّقْلِيدِيَّةِ.", japanese: "女性の役割はもはや伝統的な分野に限られません。" },
    { speaker: "記事", arabic: "يَعُودُ هَذَا التَّحَوُّلُ إِلَى سِلْسِلَةٍ مِنَ الْإِصْلَاحَاتِ التَّشْرِيعِيَّةِ.", japanese: "この変化は一連の法的改革によるものです。" },
    { speaker: "記事", arabic: "إِنَّ تَمْكِينَ الْمَرْأَةِ ضَرُورَةٌ اقْتِصَادِيَّةٌ.", japanese: "女性のエンパワーメントは経済的な必要性です。" }
  ]
},

// --- 93. 巨大プロジェクト (Mega Projects) ---
{
  id: 1103,
  level: "上級",
  category: "プロジェクト",
  title: "キディヤ：娯楽とスポーツの世界的首都",
  contentPlain: "يجري العمل على قدم وساق في مشروع \"القدية\"، الذي يطمح ليكون عاصمة الترفيه والرياضة والفنون في العالم. يقع المشروع بالقرب من الرياض، وسيضم أكثر من 300 مرفق ترفيهي وتعليمي، بما في ذلك متنزه \"سكس فلاجز\" الذي سيحتوي على أسرع وأطول أفعوانية في العالم، وملعب رياضي ضخم يقع على قمة جبل بارتفاع 200 متر. تهدف القدية إلى تغيير مفهوم الترفيه في المملكة، وتوفير خيارات محلية عالمية المستوى تحد من إنفاق السعوديين على السياحة الخارجية، والذي يقدر بمليارات الدولارات سنويا. كما يركز المشروع على اكتشاف المواهب الرياضية والفنية الشابة وتطويرها. من المخطط أن تساهم القدية في خلق آلاف الوظائف، وجذب ملايين الزوار، لتصبح وجهة نابضة بالحياة تعكس طاقة الشباب السعودي وتطلعاته.",
  contentVoweled: "يَجْرِي الْعَمَلُ عَلَى قَدَمٍ وَسَاقٍ فِي مَشْرُوعِ \"الْقِدِيَّةِ\"، الَّذِي يَطْمَحُ لِيَكُونَ عَاصِمَةَ التَّرْفِيهِ وَالرِّيَاضَةِ وَالْفُنُونِ فِي الْعَالَمِ. يَقَعُ الْمَشْرُوعُ بِالْقُرْبِ مِنَ الرِّيَاضِ، وَسَيَضُمُّ أَكْثَرَ مِنْ 300 مِرْفَقٍ تَرْفِيهِيٍّ وَتَعْلِيمِيٍّ، بِمَا فِي ذَلِكَ مُتَنَزَّهُ \"سِكْس فَلَاجْز\" الَّذِي سَيَحْتَوِي عَلَى أَسْرَعِ وَأَطْوَلِ أُفْعُوَانِيَّةٍ فِي الْعَالَمِ، وَمَلْعَبٍ رِيَاضِيٍّ ضَخْمٍ يَقَعُ عَلَى قِمَّةِ جَبَلٍ بِارْتِفَاعِ 200 مِتْرٍ. تَهْدِفُ الْقِدِيَّةُ إِلَى تَغْيِيرِ مَفْهُومِ التَّرْفِيهِ فِي الْمَمْلَكَةِ، وَتَوْفِيرِ خِيَارَاتٍ مَحَلِّيَّةٍ عَالَمِيَّةِ الْمُسْتَوَى تَحُدُّ مِنْ إِنْفَاقِ السُّعُودِيِّينَ عَلَى السِّيَاحَةِ الْخَارِجِيَّةِ، وَالَّذِي يُقَدَّرُ بِمِلْيَارَاتِ الدُّولَارَاتِ سَنَوِيًّا. كَمَا يُرَكِّزُ الْمَشْرُوعُ عَلَى اكْتِشَافِ الْمَوَاهِبِ الرِّيَاضِيَّةِ وَالْفَنِّيَّةِ الشَّابَّةِ وَتَطْوِيرِهَا. مِنَ الْمُخَطَّطِ أَنْ تُسَاهِمَ الْقِدِيَّةُ فِي خَلْقِ آلَافِ الْوَظَائِفِ، وَجَذْبِ مَلَايِينَ الزُّوَّارِ، لِتُصْبِحَ وِجْهَةً نَابِضَةً بِالْحَيَاةِ تَعْكِسُ طَاقَةَ الشَّبَابِ السُّعُودِيِّ وَتَطَلُّعَاتِهِ.",
  sentences: [
    { speaker: "記事", arabic: "يَطْمَحُ مَشْرُوعُ \"الْقِدِيَّةِ\" لِيَكُونَ عَاصِمَةَ التَّرْفِيهِ وَالرِّيَاضَةِ وَالْفُنُونِ فِي الْعَالَمِ.", japanese: "「キディヤ」プロジェクトは、世界のエンターテインメント、スポーツ、芸術の首都になることを目指しています。" },
    { speaker: "記事", arabic: "سَيَضُمُّ الْمَشْرُوعُ مُتَنَزَّهَ \"سِكْس فَلَاجْز\" وَمَلْعَبًا رِيَاضِيًّا ضَخْمًا يَقَعُ عَلَى قِمَّةِ جَبَلٍ.", japanese: "プロジェクトには、「シックス・フラッグス」パークや、山の頂上に位置する巨大なスポーツスタジアムが含まれます。" },
    { speaker: "記事", arabic: "تَهْدِفُ الْقِدِيَّةُ إِلَى تَوْفِيرِ خِيَارَاتٍ مَحَلِّيَّةٍ تَحُدُّ مِنْ إِنْفَاقِ السُّعُودِيِّينَ عَلَى السِّيَاحَةِ الْخَارِجِيَّةِ.", japanese: "キディヤは、サウジアラビア人の海外観光への支出を抑制するような、国内の選択肢を提供することを目指しています。" },
    { speaker: "記事", arabic: "يُرَكِّزُ الْمَشْرُوعُ عَلَى اكْتِشَافِ الْمَوَاهِبِ الرِّيَاضِيَّةِ وَالْفَنِّيَّةِ الشَّابَّةِ وَتَطْوِيرِهَا.", japanese: "プロジェクトは、若いスポーツや芸術の才能を発掘し、育成することに焦点を当てています。" }
  ],
  vocabList: [
    { word: "تَرْفِيه", meaning: "エンターテインメント" },
    { word: "أُفْعُوَانِيَّة", meaning: "ジェットコースター" },
    { word: "عَلَى قَدَمٍ وَسَاقٍ", meaning: "本格的に/着々と" },
    { word: "سِيَاحَة خَارِجِيَّة", meaning: "海外旅行" }
  ],
  questions: [
    { id: 11031, type: "reading", text: "キディヤプロジェクトに含まれる主要な施設として言及されているのは？", options: ["世界最大の図書館。", "シックス・フラッグスと山頂のスタジアム。", "農業試験場。", "宇宙ロケット発射台。"], correctIndex: 1, explanation: "「متنزه ستة أعلام (シックス・フラッグス)」と「ملعب رياضي ضخم على قمة جبل (山頂の巨大スタジアム)」が言及されています。" },
    { id: 11032, type: "reading", text: "キディヤが経済的に解決しようとしている問題の一つは何ですか？", options: ["外国人観光客が多すぎること。", "サウジ人が海外観光で多額のお金を使っていること。", "国内の遊園地が安すぎること。", "若者がスポーツをしすぎていること。"], correctIndex: 1, explanation: "「サウジ人の海外観光への支出を抑制する（تحد من إنفاق السعوديين على السياحة الخارجية）」ことが目標の一つです。" },
    { id: 11033, type: "reading", text: "キディヤは若者に対してどのような役割を果たそうとしていますか？", options: ["兵役の訓練。", "才能の発掘と育成。", "海外への移住支援。", "インターネットの禁止。"], correctIndex: 1, explanation: "「才能を発掘し育成する（اكتشاف المواهب... وتطويرها）」ことに焦点を当てています。" },
    // 上級文法問題
    { id: 11034, type: "grammar_advanced", text: "「أن تساهم القدية」の「تساهم」の正しい語尾は？", options: ["a (ファトハ)", "u (ダンマ)", "i (カスラ)", "Sukuun (スクーン)"], correctIndex: 0, explanation: "接続助詞「An」の後の現在形動詞は接続法（Manṣūb）となり、ファトハがつきます。" },
    { id: 11035, type: "grammar_advanced", text: "「خيارات محلية عالمية المستوى」の「عالمية」の正しい語尾は？", options: ["a (ファトハ)", "u (ダンマ)", "i (カスラ)", "in (タンウィーン)"], correctIndex: 0, explanation: "「Khiyārāt (選択肢)」は女性規則複数の対格でカスラを取っていますが、それを修飾する形容詞「'Ālamiyya」は本来の対格の印であるファトハを取ります（ただしイダーファの第1要素なのでタンウィーンなし）。" }
  ]
},
{
  id: 1104,
  level: "上級",
  category: "国際",
  title: "KSrelief：サウジアラビアの人道支援と世界的役割",
  contentPlain: "يجسد \"مركز الملك سلمان للإغاثة والأعمال الإنسانية\" (KSrelief) الدور الريادي للمملكة العربية السعودية في مجال العمل الخيري الدولي. منذ تأسيسه، قدم المركز مساعدات بمليارات الدولارات لأكثر من 90 دولة حول العالم، دون تمييز ديني أو عرقي. تشمل مشاريع المركز تقديم الغذاء، والدواء، والإيواء، بالإضافة إلى برامج التعليم والتنمية في المناطق المتضررة من الكوارث والنزاعات. من أبرز إنجازات المركز مشروع \"مسام\" لنزع الألغام في اليمن، الذي ساهم في إنقاذ آلاف الأرواح، وبرامج فصل التوائم السيامية التي جعلت المملكة مرجعا عالميا في هذا المجال الطبي الدقيق. يعتمد المركز على الشراكات مع المنظمات الأممية لضمان وصول المساعدات لمستحقيها بكفاءة وشفافية. تعكس هذه الجهود القيم الإسلامية والإنسانية للمملكة، وتعزز مكانتها كواحدة من أكبر الدول المانحة للمساعدات الإنسانية في العالم.",
  contentVoweled: "يُجَسِّدُ \"مَرْكَزُ الْمَلِكِ سَلْمَان لِلْإِغَاثَةِ وَالْأَعْمَالِ الْإِنْسَانِيَّةِ\" (KSrelief) الدَّوْرَ الرِّيَادِيَّ لِلْمَمْلَكَةِ الْعَرَبِيَّةِ السُّعُودِيَّةِ فِي مَجَالِ الْعَمَلِ الْخَيْرِيِّ الدَّوْلِيِّ. مُنْذُ تَأْسِيسِهِ، قَدَّمَ الْمَرْكَزُ مُسَاعَدَاتٍ بِمِلْيَارَاتِ الدُّولَارَاتِ لِأَكْثَرَ مِنْ 90 دَوْلَةً حَوْلَ الْعَالَمِ، دُونَ تَمْيِيزٍ دِينِيٍّ أَوْ عِرْقِيٍّ. تَشْمَلُ مَشَارِيعُ الْمَرْكَزِ تَقْدِيمَ الْغِذَاءِ، وَالدَّوَاءِ، وَالْإِيوَاءِ، بِالْإِضَافَةِ إِلَى بَرَامِجِ التَّعْلِيمِ وَالتَّنْمِيَةِ فِي الْمَنَاطِقِ الْمُتَضَرِّرَةِ مِنَ الْكَوَارِثِ وَالنِّزَاعَاتِ. مِنْ أَبْرَزِ إِنْجَازَاتِ الْمَرْكَزِ مَشْرُوعُ \"مَسَام\" لِنَزْعِ الْأَلْغَامِ فِي الْيَمَنِ، الَّذِي سَاهَمَ فِي إِنْقَاذِ آلَافِ الْأَرْوَاحِ، وَبَرَامِجُ فَصْلِ التَّوَائِمِ السِّيَامِيَّةِ الَّتِي جَعَلَتِ الْمَمْلَكَةَ مَرْجِعًا عَالَمِيًّا فِي هَذَا الْمَجَالِ الطِّبِّيِّ الدَّقِيقِ. يَعْتَمِدُ الْمَرْكَزُ عَلَى الشَّرَاكَاتِ مَعَ الْمُنَظَّمَاتِ الْأُمَمِيَّةِ لِضَمَانِ وُصُولِ الْمُسَاعَدَاتِ لِمُسْتَحِقِّيهَا بِكَفَاءَةٍ وَشَفَافِيَّةٍ. تَعْكِسُ هَذِهِ الْجُهُودُ الْقِيَمَ الْإِسْلَامِيَّةَ وَالْإِنْسَانِيَّةَ لِلْمَمْلَكَةِ، وَتُعَزِّزُ مَكَانَتَهَا كَوَاحِدَةٍ مِنْ أَكْبَرِ الدُّوَلِ الْمَانِحَةِ لِلْمُسَاعَدَاتِ الْإِنْسَانِيَّةِ فِي الْعَالَمِ.",
  sentences: [
    { speaker: "記事", arabic: "يُجَسِّدُ \"مَرْكَزُ الْمَلِكِ سَلْمَان لِلْإِغَاثَةِ\" الدَّوْرَ الرِّيَادِيَّ لِلْمَمْلَكَةِ فِي مَجَالِ الْعَمَلِ الْخَيْرِيِّ الدَّوْلِيِّ.", japanese: "「サルマン国王救援人道活動センター（KSrelief）」は、国際的な慈善活動の分野における王国の先駆的な役割を体現しています。" },
    { speaker: "記事", arabic: "قَدَّمَ الْمَرْكَزُ مُسَاعَدَاتٍ لِأَكْثَرَ مِنْ 90 دَوْلَةً دُونَ تَمْيِيزٍ دِينِيٍّ أَوْ عِرْقِيٍّ.", japanese: "同センターは、宗教や人種による差別なく、世界90カ国以上に援助を提供してきました。" },
    { speaker: "記事", arabic: "مِنْ أَبْرَزِ الْإِنْجَازَاتِ مَشْرُوعُ \"مَسَام\" لِنَزْعِ الْأَلْغَامِ وَبَرَامِجُ فَصْلِ التَّوَائِمِ السِّيَامِيَّةِ.", japanese: "最も顕著な成果には、地雷除去プロジェクト「Masam」や、結合双生児の分離手術プログラムがあります。" },
    { speaker: "記事", arabic: "تُعَزِّزُ هَذِهِ الْجُهُودُ مَكَانَةَ الْمَمْلَكَةِ كَوَاحِدَةٍ مِنْ أَكْبَرِ الدُّوَلِ الْمَانِحَةِ لِلْمُسَاعَدَاتِ.", japanese: "これらの努力は、世界最大の人道支援供与国の一つとしての王国の地位を強化しています。" }
  ],
  vocabList: [
    { word: "إِغَاثَة", meaning: "救援/救済" },
    { word: "أَعْمَال إِنْسَانِيَّة", meaning: "人道活動" },
    { word: "نَزْع الْأَلْغَام", meaning: "地雷除去" },
    { word: "تَوَائِم سِيَامِيَّة", meaning: "結合双生児" }
  ],
  questions: [
    { id: 11041, type: "reading", text: "KSreliefの支援方針の特徴は何ですか？", options: ["特定の宗教を持つ国のみを支援する。", "近隣諸国のみを支援する。", "宗教や人種による差別なく支援する。", "見返りを求める国のみを支援する。"], correctIndex: 2, explanation: "「宗教や人種による差別なく（دون تمييز ديني أو عرقي）」支援を提供しています。" },
    { id: 11042, type: "reading", text: "テキストで言及されている具体的な人道支援プロジェクトは？", options: ["宇宙開発プログラム。", "地雷除去と結合双生児の分離手術。", "武器の供与。", "高級ホテルの建設。"], correctIndex: 1, explanation: "地雷除去の「Masam」と「結合双生児の分離（فصل التوائم السيامية）」が挙げられています。" },
    { id: 11043, type: "reading", text: "センターはどのようにして援助の効率と透明性を確保していますか？", options: ["国際機関とのパートナーシップを通じて。", "メディアを完全に遮断することによって。", "現金を直接配布することによって。", "活動内容を秘密にすることによって。"], correctIndex: 0, explanation: "「国連機関とのパートナーシップ（الشراكات مع المنظمات الأممية）」に依存しています。" },
    // 上級文法問題
    { id: 11044, type: "grammar_advanced", text: "「دون تمييز ديني」の「ديني」の正しい語尾は？", options: ["in (タンウィーン・カスラ)", "un (タンウィーン・ダンマ)", "an (タンウィーン・ファトハ)", "i (カスラ)"], correctIndex: 0, explanation: "「Tamyīz (差別)」は前置詞「Dūna (〜なしで)」の後の属格（Majrūr）です。「Dīnī (宗教的な)」はそれを修飾する形容詞なので、同じく属格のタンウィーン・カスラを取ります。" },
    { id: 11045, type: "grammar_advanced", text: "「التي جعلت المملكة مرجعا」の「مرجعا」の正しい語尾は？", options: ["an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "in (タンウィーン・カスラ)", "a (ファトハ)"], correctIndex: 0, explanation: "動詞「Ja'alat (Make A B)」の第2目的語（補語）として対格（Manṣūb）になり、タンウィーン・ファトハがつきます。" }
  ]
},
{
  id: 1105,
  level: "上級",
  category: "産業",
  title: "メイド・イン・サウジ：産業の現地化と輸出促進",
  contentPlain: "أطلقت المملكة برنامج \"صنع في السعودية\" بهدف تعزيز المنتج الوطني وجعله الخيار المفضل للمستهلكين محليا وعالميا. يأتي هذا البرنامج ضمن استراتيجية وطنية للصناعة تهدف إلى توطين الصناعات الواعدة، مثل الصناعات العسكرية، والسيارات، والأدوية، والأغذية. تسعى المملكة من خلال هذه المبادرة إلى رفع مساهمة القطاع الصناعي في الناتج المحلي الإجمالي، وتقليل الاعتماد على الواردات، وتحسين الميزان التجاري. يشجع البرنامج الشركات على استخدام الشعار الرسمي \"صنع في السعودية\"، مما يمنح منتجاتها موثوقية وجودة عالية. كما تدعم الحكومة المصانع من خلال توفير البنية التحتية، والطاقة بأسعار تنافسية، والتسهيلات التمويلية. إن بناء قاعدة صناعية قوية لا يساهم فقط في التنويع الاقتصادي، بل يعزز الاستقلالية الاستراتيجية للمملكة، ويخلق فرص عمل مستدامة للشباب السعودي.",
  contentVoweled: "أَطْلَقَتِ الْمَمْلَكَةُ بَرْنَامَجَ \"صُنِعَ فِي السُّعُودِيَّةِ\" بِهَدَفِ تَعْزِيزِ الْمُنْتَجِ الْوَطَنِيِّ وَجَعْلِهِ الْخِيَارَ الْمُفَضَّلَ لِلْمُسْتَهْلِكِينَ مَحَلِّيًّا وَعَالَمِيًّا. يَأْتِي هَذَا الْبَرْنَامَجُ ضِمْنَ اسْتِرَاتِيجِيَّةٍ وَطَنِيَّةٍ لِلصِّنَاعَةِ تَهْدِفُ إِلَى تَوْطِينِ الصِّنَاعَاتِ الْوَاعِدَةِ، مِثْلِ الصِّنَاعَاتِ الْعَسْكَرِيَّةِ، وَالسَّيَّارَاتِ، وَالْأَدْوِيَةِ، وَالْأَغْذِيَةِ. تَسْعَى الْمَمْلَكَةُ مِنْ خِلَالِ هَذِهِ الْمُبَادَرَاتِ إِلَى رَفْعِ مُسَاهَمَةِ الْقِطَاعِ الصِّنَاعِيِّ فِي النَّاتِجِ الْمَحَلِّيِّ الْإِجْمَالِيِّ، وَتَقْلِيلِ الِاعْتِمَادِ عَلَى الْوَارِدَاتِ، وَتَحْسِينِ الْمِيزَانِ التِّجَارِيِّ. يُشَجِّعُ الْبَرْنَامَجُ الشَّرِكَاتَ عَلَى اسْتِخْدَامِ الشِّعَارِ الرَّسْمِيِّ \"صُنِعَ فِي السُّعُودِيَّةِ\"، مِمَّا يَمْنَحُ مُنْتَجَاتِهَا مَوْثُوقِيَّةً وَجَوْدَةً عَالِيَةً. كَمَا تَدْعَمُ الْحُكُومَةُ الْمَصَانِعَ مِنْ خِلَالِ تَوْفِيرِ الْبِنْيَةِ التَّحْتِيَّةِ، وَالطَّاقَةِ بِأَسْعَارٍ تَنَافُسِيَّةٍ، وَالتَّسْهِيلَاتِ التَّمْوِيلِيَّةِ. إِنَّ بِنَاءَ قَاعِدَةٍ صِنَاعِيَّةٍ قَوِيَّةٍ لَا يُسَاهِمُ فَقَطْ فِي التَّنْوِيعِ الِاقْتِصَادِيِّ، بَلْ يُعَزِّزُ الِاسْتِقْلَالِيَّةَ الِاسْتِرَاتِيجِيَّةَ لِلْمَمْلَكَةِ، وَيَخْلُقُ فُرَصَ عَمَلٍ مُسْتَدَامَةً لِلشَّبَابِ السُّعُودِيِّ.",
  sentences: [
    { speaker: "記事", arabic: "أَطْلَقَتِ الْمَمْلَكَةُ بَرْنَامَجَ \"صُنِعَ فِي السُّعُودِيَّةِ\" بِهَدَفِ تَعْزِيزِ الْمُنْتَجِ الْوَطَنِيِّ.", japanese: "王国は、国産品を強化することを目的として「メイド・イン・サウジ」プログラムを開始しました。" },
    { speaker: "記事", arabic: "يَهْدِفُ الْبَرْنَامَجُ إِلَى تَوْطِينِ الصِّنَاعَاتِ الْوَاعِدَةِ، مِثْلِ الصِّنَاعَاتِ الْعَسْكَرِيَّةِ وَالسَّيَّارَاتِ.", japanese: "プログラムは、軍事産業や自動車などの有望な産業を現地化（国産化）することを目指しています。" },
    { speaker: "記事", arabic: "تَسْعَى الْمَمْلَكَةُ إِلَى تَقْلِيلِ الِاعْتِمَادِ عَلَى الْوَارِدَاتِ وَتَحْسِينِ الْمِيزَانِ التِّجَارِيِّ.", japanese: "王国は輸入への依存を減らし、貿易収支を改善することに努めています。" },
    { speaker: "記事", arabic: "إِنَّ بِنَاءَ قَاعِدَةٍ صِنَاعِيَّةٍ قَوِيَّةٍ يُعَزِّزُ الِاسْتِقْلَالِيَّةَ الِاسْتِرَاتِيجِيَّةَ لِلْمَمْلَكَةِ.", japanese: "強力な産業基盤の構築は、王国の戦略的自律性を強化します。" }
  ],
  vocabList: [
    { word: "تَوْطِين", meaning: "現地化/国産化" },
    { word: "وَارِدَات", meaning: "輸入品" },
    { word: "مِيزَان تِجَارِيّ", meaning: "貿易収支" },
    { word: "مَوْثُوقِيَّة", meaning: "信頼性" }
  ],
  questions: [
    { id: 11051, type: "reading", text: "「メイド・イン・サウジ」プログラムの主な目的は何ですか？", options: ["外国製品の輸入を禁止すること。", "国産品を国内外で選ばれる製品にすること。", "すべての工場を海外に移転すること。", "手作り製品のみを販売すること。"], correctIndex: 1, explanation: "「国産品を強化し、国内外の消費者に好まれる選択肢にすること（تعزيز المنتج الوطني وجعله الخيار المفضل）」が目的です。" },
    { id: 11052, type: "reading", text: "現地化（国産化）の対象として挙げられている産業は？", options: ["繊維産業のみ。", "軍事産業、自動車、医薬品。", "観光業のみ。", "漁業のみ。"], correctIndex: 1, explanation: "「軍事産業、自動車、医薬品、食品（الصناعات العسكرية، والسيارات، والأدوية، والأغذية）」が挙げられています。" },
    { id: 11053, type: "reading", text: "政府は工場をどのように支援していますか？", options: ["インフラ、競争力のあるエネルギー価格、融資の提供。", "従業員の給与を全額支払う。", "税金を100%免除する。", "工場の運営を直接行う。"], correctIndex: 0, explanation: "「インフラ、競争力のある価格でのエネルギー、資金調達の円滑化（توفير البنية التحتية، والطاقة بأسعار تنافسية، والتسهيلات التمويلية）」を提供しています。" },
    // 上級文法問題
    { id: 11054, type: "grammar_advanced", text: "「بهدف تعزيز المنتج」の「تعزيز」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "前置詞「Bi」の後の名詞「Hadaf」に続くイダーファの第2要素（属格）なので、カスラがつきます（さらに後の「Al-Muntaj」にイダーファされているのでタンウィーンなし）。" },
    { id: 11055, type: "grammar_advanced", text: "「يمنح منتجاتها موثوقية」の「موثوقية」の正しい語尾は？", options: ["an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "in (タンウィーン・カスラ)", "a (ファトハ)"], correctIndex: 0, explanation: "動詞「Yamnaḥu (与える)」の第2目的語（Muntajātihāが第1）なので、対格（Manṣūb）となりタンウィーン・ファトハがつきます。" }
  ]
},
{
  id: 1106,
  level: "上級",
  category: "科学",
  title: "サウジアラビアの宇宙プログラム：星々への旅立ち",
  contentPlain: "دخلت المملكة العربية السعودية مرحلة جديدة في مجال استكشاف الفضاء بإرسال أول رائدة فضاء سعودية ورائد فضاء إلى محطة الفضاء الدولية. تأتي هذه المهمة التاريخية ضمن برنامج المملكة لرواد الفضاء، الذي يهدف إلى تأهيل كوادر وطنية متمرسة للقيام بمهام فضائية طويلة الأمد، والمشاركة في التجارب العلمية الدولية التي تخدم البشرية. ركزت التجارب التي أجراها الرواد السعوديون في الفضاء على مجالات حيوية مثل الأبحاث الصحية، والاستمطار الصناعي، وعلوم المواد، مما يعود بالنفع على الأبحاث العلمية في المملكة. تسعى الهيئة السعودية للفضاء إلى تعزيز قطاع الفضاء كركيزة اقتصادية مستقبلية، وتحفيز الابتكار، وإلهام الأجيال الناشئة للاهتمام بالعلوم والتكنولوجيا والهندسة والرياضيات (STEM). إن طموح المملكة لا يقف عند حدود الأرض، بل يمتد ليكون لها دور فاعل في سباق الفضاء العالمي.",
  contentVoweled: "دَخَلَتِ الْمَمْلَكَةُ الْعَرَبِيَّةُ السُّعُودِيَّةُ مَرْحَلَةً جَدِيدَةً فِي مَجَالِ اسْتِكْشَافِ الْفَضَاءِ بِإِرْسَالِ أَوَّلِ رَائِدَةِ فَضَاءٍ سُعُودِيَّةٍ وَرَائِدِ فَضَاءٍ إِلَى مَحَطَّةِ الْفَضَاءِ الدَّوْلِيَّةِ. تَأْتِي هَذِهِ الْمَهَمَّةُ التَّارِيخِيَّةُ ضِمْنَ بَرْنَامَجِ الْمَمْلَكَةِ لِرُوَّادِ الْفَضَاءِ، الَّذِي يَهْدِفُ إِلَى تَأْهِيلِ كَوَادِرَ وَطَنِيَّةٍ مُتَمَرِّسَةٍ لِلْقِيَامِ بِمَهَامَّ فَضَائِيَّةٍ طَوِيلَةِ الْأَمَدِ، وَالْمُشَارَكَةِ فِي التَّجَارِبِ الْعِلْمِيَّةِ الدَّوْلِيَّةِ الَّتِي تَخْدِمُ الْبَشَرِيَّةَ. رَكَّزَتِ التَّجَارِبُ الَّتِي أَجْرَاهَا الرُّوَّادُ السُّعُودِيُّونَ فِي الْفَضَاءِ عَلَى مَجَالَاتٍ حَيَوِيَّةٍ مِثْلِ الْأَبْحَاثِ الصِّحِّيَّةِ، وَالِاسْتِمْطَارِ الصِّنَاعِيِّ، وَعُلُومِ الْمَوَادِّ، مِمَّا يَعُودُ بِالنَّفْعِ عَلَى الْأَبْحَاثِ الْعِلْمِيَّةِ فِي الْمَمْلَكَةِ. تَسْعَى الْهَيْئَةُ السُّعُودِيَّةُ لِلْفَضَاءِ إِلَى تَعْزِيزِ قِطَاعِ الْفَضَاءِ كَرَكِيزَةٍ اقْتِصَادِيَّةٍ مُسْتَقْبَلِيَّةٍ، وَتَحْفِيزِ الِابْتِكَارِ، وَإِلْهَامِ الْأَجْيَالِ النَّاشِئَةِ لِلِاهْتِمَامِ بِالْعُلُومِ وَالتِّكْنُولُوجِيَا وَالْهَنْدَسَةِ وَالرِّيَاضِيَّاتِ (STEM). إِنَّ طُمُوحَ الْمَمْلَكَةِ لَا يَقِفُ عِنْدَ حُدُودِ الْأَرْضِ، بَلْ يَمْتَدُّ لِيَكُونَ لَهَا دَوْرٌ فَاعِلٌ فِي سِبَاقِ الْفَضَاءِ الْعَالَمِيِّ.",
  sentences: [
    { speaker: "記事", arabic: "دَخَلَتِ الْمَمْلَكَةُ مَرْحَلَةً جَدِيدَةً بِإِرْسَالِ أَوَّلِ رَائِدَةِ فَضَاءٍ سُعُودِيَّةٍ إِلَى مَحَطَّةِ الْفَضَاءِ الدَّوْلِيَّةِ.", japanese: "王国は、初のサウジアラビア人女性宇宙飛行士を国際宇宙ステーションに送ることで、新たな段階に入りました。" },
    { speaker: "記事", arabic: "يَهْدِفُ الْبَرْنَامَجُ إِلَى تَأْهِيلِ كَوَادِرَ وَطَنِيَّةٍ لِلْقِيَامِ بِمَهَامَّ فَضَائِيَّةٍ طَوِيلَةِ الْأَمَدِ.", japanese: "このプログラムは、長期的な宇宙ミッションを遂行するための国家的人材を育成することを目指しています。" },
    { speaker: "記事", arabic: "رَكَّزَتِ التَّجَارِبُ عَلَى مَجَالَاتٍ مِثْلِ الْأَبْحَاثِ الصِّحِّيَّةِ وَالِاسْتِمْطَارِ الصِّنَاعِيِّ.", japanese: "実験は、健康研究や人工降雨などの分野に焦点を当てました。" },
    { speaker: "記事", arabic: "تَسْعَى الْهَيْئَةُ إِلَى إِلْهَامِ الْأَجْيَالِ النَّاشِئَةِ لِلِاهْتِمَامِ بِالْعُلُومِ وَالتِّكْنُولُوجِيَا (STEM).", japanese: "同庁は、若い世代がSTEM（科学・技術・工学・数学）に関心を持つよう刺激することを目指しています。" }
  ],
  vocabList: [
    { word: "رَائِد فَضَاء", meaning: "宇宙飛行士" },
    { word: "مَحَطَّة الْفَضَاء", meaning: "宇宙ステーション" },
    { word: "اسْتِمْطَار", meaning: "人工降雨" },
    { word: "إِلْهَام", meaning: "インスピレーション/啓発" }
  ],
  questions: [
    { id: 11061, type: "reading", text: "サウジアラビアの宇宙ミッションの歴史的な側面は何ですか？", options: ["火星に着陸したこと。", "初のサウジアラビア人女性宇宙飛行士を国際宇宙ステーションに送ったこと。", "独自の宇宙ステーションを建設したこと。", "宇宙人が発見されたこと。"], correctIndex: 1, explanation: "「أول رائدة فضاء سعودية (初のサウジアラビア人女性宇宙飛行士)」を送ったことが歴史的であると記述されています。" },
    { id: 11062, type: "reading", text: "宇宙飛行士が行った実験の分野に含まれるものは？", options: ["新しい料理の開発。", "人工降雨と健康研究。", "宇宙戦争のシミュレーション。", "深海の探査。"], correctIndex: 1, explanation: "「الأبحاث الصحية، والاستمطار الصناعي (健康研究、人工降雨)」などが挙げられています。" },
    { id: 11063, type: "reading", text: "宇宙プログラムが次世代に対して目指している効果は？", options: ["宇宙飛行士になることを諦めさせる。", "STEM分野（科学技術など）への関心を喚起する。", "SF映画の制作を奨励する。", "スポーツ選手になるよう促す。"], correctIndex: 1, explanation: "「STEM（科学・技術・工学・数学）への関心を喚起する（إلهام الأجيال الناشئة للاهتمام...）」ことです。" },
    // 上級文法問題
    { id: 11064, type: "grammar_advanced", text: "「بإرسال أول رائدة」の「رائدة」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "「Awwal (最初)」の後の名詞（Muḍāf Ilayhi）なので属格（Majrūr）となり、カスラがつきます（イダーファの第2要素ですが、さらに後の「Faḍā'」にイダーファされているのでタンウィーンなし）。" },
    { id: 11065, type: "grammar_advanced", text: "「للقيام بمهام فضائية」の「مهام」の正しい語尾は？", options: ["a (ファトハ)", "i (カスラ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "前置詞「Bi」の後の名詞ですが、「Mahāmm」は非限定名詞（Mumnū' min al-ṣarf / Mafā'ilパターン、語尾のmはシャッダ付き）なので、カスラではなくファトハを取ります。" }
  ]
},
{
  id: 1107,
  level: "上級",
  category: "文化",
  title: "「ラクダの年」：文化的アイデンティティの祝祭",
  contentPlain: "احتفت المملكة العربية السعودية بعام 2024 كـ \"عام الإبل\"، وذلك لترسيخ العلاقة العميقة بين المجتمع السعودي والإبل عبر التاريخ. تعتبر الإبل رمزا للصبر والعطاء في الثقافة العربية، ورفيقا دائما للأجداد في حلهم وترحالهم. تهدف هذه المبادرة الثقافية إلى التعريف بالقيمة الحضارية للإبل، وإبراز دورها في حياة العرب، من خلال الفعاليات والمهرجانات والمعارض الفنية. تسعى وزارة الثقافة من خلال تسمية الأعوام بأسماء عناصر ثقافية (مثل عام القهوة السعودية، وعام الشعر العربي) إلى إحياء التراث اللامادي وتوثيقه، وتعزيز الفخر بالهوية الوطنية. يشمل الاحتفاء بالإبل دعم الصناعات المرتبطة بها، مثل منتجات الجلود والألبان، بالإضافة إلى سباقات الهجن التي تحظى بشعبية عالمية. إن هذا الاهتمام يعكس حرص المملكة على الموازنة بين الحداثة والتمسك بالجذور الأصيلة.",
  contentVoweled: "احْتَفَتِ الْمَمْلَكَةُ الْعَرَبِيَّةُ السُّعُودِيَّةُ بِعَامِ 2024 كَـ \"عَامِ الْإِبِلِ\"، وَذَلِكَ لِتَرْسِيخِ الْعَلَاقَةِ الْعَمِيقَةِ بَيْنَ الْمُجْتَمَعِ السُّعُودِيِّ وَالْإِبِلِ عَبْرَ التَّارِيخِ. تُعْتَبَرُ الْإِبِلُ رَمْزًا لِلصَّبْرِ وَالْعَطَاءِ فِي الثَّقَافَةِ الْعَرَبِيَّةِ، وَرَفِيقًا دَائِمًا لِلْأَجْدَادِ فِي حِلِّهِمْ وَتِرْحَالِهِمْ. تَهْدِفُ هَذِهِ الْمُبَادَرَةُ الثَّقَافِيَّةُ إِلَى التَّعْرِيفِ بِالْقِيمَةِ الْحَضَارِيَّةِ لِلْإِبِلِ، وَإِبْرَازِ دَوْرِهَا فِي حَيَاةِ الْعَرَبِ، مِنْ خِلَالِ الْفَعَّالِيَّاتِ وَالْمَهْرَجَانَاتِ وَالْمَعَارِضِ الْفَنِّيَّةِ. تَسْعَى وِزَارَةُ الثَّقَافَةِ مِنْ خِلَالِ تَسْمِيَةِ الْأَعْوَامِ بِأَسْمَاءِ عَنَاصِرَ ثَقَافِيَّةٍ (مِثْلِ عَامِ الْقَهْوَةِ السُّعُودِيَّةِ، وَعَامِ الشِّعْرِ الْعَرَبِيِّ) إِلَى إِحْيَاءِ التُّرَاثِ اللَّامَادِيِّ وَتَوْثِيقِهِ، وَتَعْزِيزِ الْفَخْرِ بِالْهُوِيَّةِ الْوَطَنِيَّةِ. يَشْمَلُ الِاحْتِفَاءُ بِالْإِبِلِ دَعْمَ الصِّنَاعَاتِ الْمُرْتَبِطَةِ بِهَا، مِثْلِ مُنْتَجَاتِ الْجُلُودِ وَالْأَلْبَانِ، بِالْإِضَافَةِ إِلَى سِبَاقَاتِ الْهِجْنِ الَّتِي تَحْظَى بِشَعْبِيَّةٍ عَالَمِيَّةٍ. إِنَّ هَذَا الِاهْتِمَامَ يَعْكِسُ حِرْصَ الْمَمْلَكَةِ عَلَى الْمُوَازَنَةِ بَيْنَ الْحَدَاثَةِ وَالتَّمَسُّكِ بِالْجُذُورِ الْأَصِيلَةِ.",
  sentences: [
    { speaker: "記事", arabic: "احْتَفَتِ الْمَمْلَكَةُ بِعَامِ 2024 كَـ \"عَامِ الْإِبِلِ\" لِتَرْسِيخِ الْعَلَاقَةِ التَّارِيخِيَّةِ مَعَهَا.", japanese: "王国は、歴史を通じたラクダとの深い関係を定着させるため、2024年を「ラクダの年」として祝いました。" },
    { speaker: "記事", arabic: "تُعْتَبَرُ الْإِبِلُ رَمْزًا لِلصَّبْرِ وَالْعَطَاءِ، وَرَفِيقًا لِلْأَجْدَادِ.", japanese: "ラクダはアラブ文化において忍耐と寛大さの象徴であり、祖先たちの絶え間ない伴侶とみなされています。" },
    { speaker: "記事", arabic: "تَسْعَى الْوِزَارَةُ إِلَى إِحْيَاءِ التُّرَاثِ اللَّامَادِيِّ وَتَعْزِيزِ الْفَخْرِ بِالْهُوِيَّةِ الْوَطَنِيَّةِ.", japanese: "省は無形遺産を復活させ、国家的アイデンティティへの誇りを高めることを目指しています。" },
    { speaker: "記事", arabic: "يَشْمَلُ الِاحْتِفَاءُ دَعْمَ الصِّنَاعَاتِ الْمُرْتَبِطَةِ بِالْإِبِلِ وَسِبَاقَاتِ الْهِجْنِ.", japanese: "祝賀には、ラクダ関連産業やラクダレースへの支援が含まれます。" }
  ],
  vocabList: [
    { word: "إِبِل", meaning: "ラクダ (集合名詞)" },
    { word: "تُرَاث لَامَادِيّ", meaning: "無形遺産" },
    { word: "هُوِيَّة وَطَنِيَّة", meaning: "国家的アイデンティティ" },
    { word: "سِبَاقَات الْهِجْن", meaning: "ラクダレース" }
  ],
  questions: [
    { id: 11071, type: "reading", text: "2024年が「ラクダの年」に指定された主な理由は何ですか？", options: ["ラクダの数が減ったから。", "サウジ社会とラクダの歴史的な深い関係を強固にするため。", "ラクダを海外に輸出するため。", "新しい交通手段としてラクダを導入するため。"], correctIndex: 1, explanation: "「サウジ社会とラクダの歴史を通じた深い関係を定着させるため（لترسيخ العلاقة العميقة...）」とあります。" },
    { id: 11072, type: "reading", text: "文化省が特定の年に文化的な名前（コーヒーの年、詩の年など）を付ける目的は？", options: ["カレンダーを売るため。", "無形遺産を復活させ、国家的アイデンティティへの誇りを高めるため。", "流行を作るため。", "外国の文化を真似るため。"], correctIndex: 1, explanation: "「無形遺産を復活させ...国家的アイデンティティへの誇りを強化する（إحياء التراث اللامادي... وتعزيز الفخر بالهوية الوطنية）」ことが目的です。" },
    { id: 11073, type: "reading", text: "ラクダに関連して支援されている経済活動は？", options: ["自動車産業。", "革製品や乳製品、レース産業。", "ペットショップ。", "動物園の建設。"], correctIndex: 1, explanation: "「革製品や乳製品などの関連産業、およびラクダレース（صناعات... الجلود والألبان، بالإضافة إلى سباقات الهجن）」への支援が含まれます。" },
    // 上級文法問題
    { id: 11074, type: "grammar_advanced", text: "「بأسماء عناصر ثقافية」の「عناصر」の正しい語尾は？", options: ["a (ファトハ)", "i (カスラ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "「Asmā' (名前)」の後のイダーファ第2要素（属格）ですが、「'Anāṣir」は非限定名詞（Mafā'ilパターン）なので、カスラではなくファトハを取ります。" },
    { id: 11075, type: "grammar_advanced", text: "「يسمى عام القهوة」の「عام」の正しい語尾は？", options: ["u (ダンマ)", "a (ファトハ)", "i (カスラ)", "un (タンウィーン)"], correctIndex: 0, explanation: "受動態「Yusammā (名付けられる)」の代理主語（Nā'ib Fā'il）なので主格（Marfū'）となりダンマがつきます。" }
  ]
},
{
  id: 1108,
  level: "上級",
  category: "エネルギー",
  title: "水素エネルギー：クリーンエネルギーの輸出大国へ",
  contentPlain: "تسير المملكة العربية السعودية بخطى ثابتة لتصبح أكبر مصدر للهيدروجين في العالم، مستفيدة من مواردها الطبيعية الغنية وتكلفتها التنافسية في إنتاج الطاقة المتجددة. يجري حاليا بناء أكبر مصنع لإنتاج الهيدروجين الأخضر في العالم في مدينة \"نيوم\"، والذي سيعتمد كليا على طاقتي الشمس والرياح. يهدف هذا المشروع العملاق إلى إنتاج 600 طن من الهيدروجين الأخضر يوميا بحلول عام 2026، وتصديره إلى الأسواق العالمية. يعد الهيدروجين وقود المستقبل النظيف، حيث يمكن استخدامه في النقل والصناعة وتوليد الكهرباء دون انبعاثات كربونية. تتبنى المملكة نهج \"الاقتصاد الدائري للكربون\"، الذي يركز على تقليل الانبعاثات وإعادة استخدامها وتدويرها. من خلال الاستثمار في الهيدروجين الأزرق (المنتج من الغاز الطبيعي مع احتجاز الكربون) والهيدروجين الأخضر، تؤكد السعودية التزامها بقيادة تحول الطاقة العالمي ومكافحة التغير المناخي، مع الحفاظ على دورها كمزود موثوق للطاقة.",
  contentVoweled: "تَسِيرُ الْمَمْلَكَةُ الْعَرَبِيَّةُ السُّعُودِيَّةُ بِخُطًى ثَابِتَةٍ لِتُصْبِحَ أَكْبَرَ مُصَدِّرٍ لِلْهِيدْرُوجِينِ فِي الْعَالَمِ، مُسْتَفِيدَةً مِنْ مَوَارِدِهَا الطَّبِيعِيَّةِ الْغَنِيَّةِ وَتَكْلُفَتِهَا التَّنَافُسِيَّةِ فِي إِنْتَاجِ الطَّاقَةِ الْمُتَجَدِّدَةِ. يَجْرِي حَالِيًّا بِنَاءُ أَكْبَرِ مَصْنَعٍ لِإِنْتَاجِ الْهِيدْرُوجِينِ الْأَخْضَرِ فِي الْعَالَمِ فِي مَدِينَةِ \"نِيُوم\"، وَالَّذِي سَيَعْتَمِدُ كُلِّيًّا عَلَى طَاقَتَيِ الشَّمْسِ وَالرِّيَاحِ. يَهْدِفُ هَذَا الْمَشْرُوعُ الْعِمْلَاقُ إِلَى إِنْتَاجِ 600 طُنٍّ مِنَ الْهِيدْرُوجِينِ الْأَخْضَرِ يَوْمِيًّا بِحُلُولِ عَامِ 2026، وَتَصْدِيرِهِ إِلَى الْأَسْوَاقِ الْعَالَمِيَّةِ. يُعَدُّ الْهِيدْرُوجِينُ وَقُودَ الْمُسْتَقْبَلِ النَّظِيفَ، حَيْثُ يُمْكِنُ اسْتِخْدَامُهُ فِي النَّقْلِ وَالصِّنَاعَةِ وَتَوْلِيدِ الْكَهْرَبَاءِ دُونَ انْبِعَاثَاتٍ كَرْبُونِيَّةٍ. تَتَبَنَّى الْمَمْلَكَةُ نَهْجَ \"الِاقْتِصَادِ الدَّائِرِيِّ لِلْكَرْبُونِ\"، الَّذِي يُرَكِّزُ عَلَى تَقْلِيلِ الِانْبِعَاثَاتِ وَإِعَادَةِ اسْتِخْدَامِهَا وَتَدْوِيرِهَا. مِنْ خِلَالِ الِاسْتِثْمَارِ فِي الْهِيدْرُوجِينِ الْأَزْرَقِ (الْمُنْتَجِ مِنَ الْغَازِ الطَّبِيعِيِّ مَعَ احْتِجَازِ الْكَرْبُونِ) وَالْهِيدْرُوجِينِ الْأَخْضَرِ، تُؤَكِّدُ السُّعُودِيَّةُ الْتِزَامَهَا بِقِيَادَةِ تَحَوُّلِ الطَّاقَةِ الْعَالَمِيِّ وَمُكَافَحَةِ التَّغَيُّرِ الْمُنَاخِيِّ، مَعَ الْحِفَاظِ عَلَى دَوْرِهَا كَمُزَوِّدٍ مَوْثُوقٍ لِلطَّاقَةِ.",
  sentences: [
    { speaker: "記事", arabic: "تَسِيرُ الْمَمْلَكَةُ بِخُطًى ثَابِتَةٍ لِتُصْبِحَ أَكْبَرَ مُصَدِّرٍ لِلْهِيدْرُوجِينِ.", japanese: "王国は、世界最大の水素輸出国になるために着実に歩みを進めています。" },
    { speaker: "記事", arabic: "يَجْرِي بِنَاءُ أَكْبَرِ مَصْنَعٍ لِلْهِيدْرُوجِينِ الْأَخْضَرِ فِي \"نِيُوم\"، مُعْتَمِدًا عَلَى طَاقَتَيِ الشَّمْسِ وَالرِّيَاحِ.", japanese: "太陽光と風力エネルギーに依存した世界最大のグリーン水素工場が「NEOM」で建設中です。" },
    { speaker: "記事", arabic: "يُعَدُّ الْهِيدْرُوجِينُ وَقُودَ الْمُسْتَقْبَلِ النَّظِيفَ، حَيْثُ لَا يَنْتُجُ عَنْهُ انْبِعَاثَاتٌ كَرْبُونِيَّةٌ.", japanese: "水素は炭素排出を生まないため、未来のクリーン燃料とみなされています。" },
    { speaker: "記事", arabic: "تُؤَكِّدُ السُّعُودِيَّةُ الْتِزَامَهَا بِقِيَادَةِ تَحَوُّلِ الطَّاقَةِ الْعَالَمِيِّ وَمُكَافَحَةِ التَّغَيُّرِ الْمُنَاخِيِّ.", japanese: "サウジアラビアは、世界的なエネルギー転換を主導し、気候変動と闘うというコミットメントを確認しています。" }
  ],
  vocabList: [
    { word: "هِيدْرُوجِين أَخْضَر", meaning: "グリーン水素" },
    { word: "انْبِعَاثَات", meaning: "排出(量)" },
    { word: "اقْتِصَاد دَائِرِيّ", meaning: "サーキュラーエコノミー" },
    { word: "احْتِجَاز الْكَرْبُون", meaning: "炭素回収" }
  ],
  questions: [
    { id: 11081, type: "reading", text: "NEOMに建設中の水素工場の特徴は何ですか？", options: ["原子力を使用する。", "世界最大のグリーン水素工場であり、太陽光と風力のみを使用する。", "石炭を使用して水素を作る。", "家庭用の小さな工場である。"], correctIndex: 1, explanation: "「世界最大のグリーン水素工場であり、太陽光と風力に完全に依存する（أكبر مصنع... سيعتمد كلياً على طاقتي الشمس والرياح）」と記述されています。" },
    { id: 11082, type: "reading", text: "サウジアラビアが採用している炭素管理のアプローチは何と呼ばれていますか？", options: ["炭素の完全禁止。", "炭素循環型経済 (Circular Carbon Economy)。", "炭素税の導入。", "炭素の無視。"], correctIndex: 1, explanation: "「الاقتصاد الدائري للكربون (炭素循環型経済)」アプローチを採用しています。" },
    { id: 11083, type: "reading", text: "「ブルー水素」と「グリーン水素」への投資を通じて、サウジアラビアが目指している役割は？", options: ["エネルギー市場からの撤退。", "化石燃料の価格引き上げ。", "世界のエネルギー転換の主導と信頼できる供給者としての地位維持。", "すべての工場を閉鎖すること。"], correctIndex: 2, explanation: "「エネルギー転換を主導し...信頼できるエネルギー供給者としての役割を維持する（قيادة تحول الطاقة... مع الحفاظ على دورها كمزود موثوق）」ことです。" },
    // 上級文法問題
    { id: 11084, type: "grammar_advanced", text: "「مع الحفاظ على دورها」の「الحفاظ」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "「Ma'a (〜と共に)」は名詞を属格（Majrūr）にする副詞的語句（Zarf）として機能するため、カスラがつきます。" },
    { id: 11085, type: "grammar_advanced", text: "「على طاقتي الشمس」の「طاقتي」の正しい語尾は？", options: ["ay (ヤ・双数・属格)", "ā (アリフ・双数・主格)", "i (カスラ・単数)", "ī (ヤ・複数)"], correctIndex: 0, explanation: "前置詞「'Alā」の後の名詞で、「Tāqatayn (2つのエネルギー)」の双数・属格形です。イダーファにより「Nūn」が脱落し、「Tāqatay」となります。" }
  ]
},
{
  id: 1109,
  level: "上級",
  category: "医療",
  title: "デジタルヘルス革命：アプリ「Sehhaty」と医療へのアクセス",
  contentPlain: "أحدثت المملكة العربية السعودية ثورة في قطاع الرعاية الصحية من خلال التحول الرقمي الشامل، حيث أصبح تطبيق \"صحتي\" (Sehhaty) المنصة الموحدة للخدمات الصحية للمواطنين والمقيمين. يتيح التطبيق للمستخدمين حجز المواعيد الطبية، والحصول على الاستشارات عن بعد، وعرض النتائج المخبرية، وإدارة الأدوية، كل ذلك بلمسة زر. ساهمت هذه التقنية في تقليل وقت الانتظار وتسهيل الوصول إلى الرعاية الصحية، خاصة في المناطق النائية. بالإضافة إلى ذلك، يعمل التطبيق كأداة لتعزيز الصحة العامة من خلال تتبع النشاط البدني وتقديم نصائح لنمط حياة صحي. خلال جائحة كورونا، لعبت التطبيقات الرقمية دورا حاسما في تنظيم حملات التطعيم وإصدار الجوازات الصحية. تهدف وزارة الصحة من خلال استراتيجية \"الصحة الإلكترونية\" إلى بناء نظام صحي ذكي وفعال يركز على الوقاية ويضع المريض في قلب الاهتمام.",
  contentVoweled: "أَحْدَثَتِ الْمَمْلَكَةُ الْعَرَبِيَّةُ السُّعُودِيَّةُ ثَوْرَةً فِي قِطَاعِ الرِّعَايَةِ الصِّحِّيَّةِ مِنْ خِلَالِ التَّحَوُّلِ الرَّقْمِيِّ الشَّامِلِ، حَيْثُ أَصْبَحَ تَطْبِيقُ \"صِحَّتِي\" (Sehhaty) الْمِنَصَّةَ الْمُوَحَّدَةَ لِلْخِدْمَاتِ الصِّحِّيَّةِ لِلْمُوَاطِنِينَ وَالْمُقِيمِينَ. يُتِيحُ التَّطْبِيقُ لِلْمُسْتَخْدِمِينَ حَجْزَ الْمَوَاعِيدِ الطِّبِّيَّةِ، وَالْحُصُولَ عَلَى الِاسْتِشَارَاتِ عَنْ بُعْدٍ، وَعَرْضَ النَّتَائِجِ الْمِخْبَرِيَّةِ، وَإِدَارَةَ الْأَدْوِيَةِ، كُلُّ ذَلِكَ بِلَمْسَةِ زِرٍّ. سَاهَمَتْ هَذِهِ التِّقْنِيَةُ فِي تَقْلِيلِ وَقْتِ الِانْتِظَارِ وَتَسْهِيلِ الْوُصُولِ إِلَى الرِّعَايَةِ الصِّحِّيَّةِ، خَاصَّةً فِي الْمَنَاطِقِ النَّائِيَةِ. بِالْإِضَافَةِ إِلَى ذَلِكَ، يَعْمَلُ التَّطْبِيقُ كَأَدَاةٍ لِتَعْزِيزِ الصِّحَّةِ الْعَامَّةِ مِنْ خِلَالِ تَتَبُّعِ النَّشَاطِ الْبَدَنِيِّ وَتَقْدِيمِ نَصَائِحَ لِنَمَطِ حَيَاةٍ صِحِّيٍّ. خِلَالَ جَائِحَةِ كُورُونَا، لَعِبَتِ التَّطْبِيقَاتُ الرَّقْمِيَّةُ دَوْرًا حَاسِمًا فِي تَنْظِيمِ حَمَلَاتِ التَّطْعِيمِ وَإِصْدَارِ الْجَوَازَاتِ الصِّحِّيَّةِ. تَهْدِفُ وِزَارَةُ الصِّحَّةِ مِنْ خِلَالِ اسْتِرَاتِيجِيَّةِ \"الصِّحَّةِ الْإِلِكْتُرُونِيَّةِ\" إِلَى بِنَاءِ نِظَامٍ صِحِّيٍّ ذَكِيٍّ وَفَعَّالٍ يُرَكِّزُ عَلَى الْوِقَايَةِ وَيَضَعُ الْمَرِيضَ فِي قَلْبِ الِاهْتِمَامِ.",
  sentences: [
    { speaker: "記事", arabic: "أَحْدَثَتِ الْمَمْلَكَةُ ثَوْرَةً فِي قِطَاعِ الرِّعَايَةِ الصِّحِّيَّةِ مِنْ خِلَالِ التَّحَوُّلِ الرَّقْمِيِّ، حَيْثُ أَصْبَحَ تَطْبِيقُ \"صِحَّتِي\" الْمِنَصَّةَ الْمُوَحَّدَةَ.", japanese: "王国はデジタルトランスフォーメーションを通じてヘルスケア部門に革命を起こし、アプリ「Sehhaty」が統一プラットフォームとなりました。" },
    { speaker: "記事", arabic: "يُتِيحُ التَّطْبِيقُ حَجْزَ الْمَوَاعِيدِ وَالْحُصُولَ عَلَى الِاسْتِشَارَاتِ عَنْ بُعْدٍ.", japanese: "このアプリにより、予約や遠隔相談が可能になります。" },
    { speaker: "記事", arabic: "سَاهَمَتْ هَذِهِ التِّقْنِيَةُ فِي تَسْهِيلِ الْوُصُولِ إِلَى الرِّعَايَةِ الصِّحِّيَّةِ فِي الْمَنَاطِقِ النَّائِيَةِ.", japanese: "この技術は、特に遠隔地における医療へのアクセスを容易にすることに貢献しました。" },
    { speaker: "記事", arabic: "تَهْدِفُ الْوِزَارَةُ إِلَى بِنَاءِ نِظَامٍ صِحِّيٍّ ذَكِيٍّ يُرَكِّزُ عَلَى الْوِقَايَةِ.", japanese: "省は、予防に重点を置いたスマートな医療システムの構築を目指しています。" }
  ],
  vocabList: [
    { word: "رِعَايَة صِحِّيَّة", meaning: "ヘルスケア/医療" },
    { word: "اسْتِشَارَات عَنْ بُعْد", meaning: "遠隔相談/遠隔医療" },
    { word: "وِقَايَة", meaning: "予防" },
    { word: "مَنَاطِق نَائِيَة", meaning: "遠隔地/へき地" }
  ],
  questions: [
    { id: 11091, type: "reading", text: "アプリ「Sehhaty（私の健康）」でできることは？", options: ["薬の製造。", "予約、遠隔相談、検査結果の確認。", "医師の免許発行。", "病院の建設。"], correctIndex: 1, explanation: "「予約、遠隔相談、検査結果の表示」などが可能です。" },
    { id: 11092, type: "reading", text: "デジタル技術の導入が特に貢献した地域はどこですか？", options: ["大都市の中心部。", "海外の国々。", "遠隔地（へき地）。", "海の上。"], correctIndex: 2, explanation: "「特に遠隔地において（خاصة في المناطق النائية）」医療アクセスを容易にしたと記述されています。" },
    { id: 11093, type: "reading", text: "保健省の「eヘルス戦略」が目指すシステムの形は？", options: ["治療のみに焦点を当てたシステム。", "紙ベースの古いシステム。", "予防に重点を置き、患者を中心としたスマートなシステム。", "医師の利益を最優先するシステム。"], correctIndex: 2, explanation: "「予防に重点を置き、患者を中心としたスマートで効率的なシステム」を目指しています。" },
    // 上級文法問題
    { id: 11094, type: "grammar_advanced", text: "「عرض النتائج المخبرية」の「النتائج」の正しい語尾は？", options: ["i (カスラ)", "a (ファトハ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "「'Arḍ (表示すること)」という動名詞の後のイダーファ第2要素（属格）です。「Natā'ij」は非限定名詞ですが、定冠詞「Al」がついているため、通常通りカスラを取ります。" },
    { id: 11095, type: "grammar_advanced", text: "「تقديم نصائح」の「نصائح」の正しい語尾は？", options: ["a (ファトハ・タンウィーンなし)", "i (カスラ)", "in (タンウィーン・カスラ)", "an (タンウィーン・ファトハ)"], correctIndex: 0, explanation: "「Taqdīm (提供すること)」の後のイダーファ第2要素（属格）ですが、「Naṣā'iḥ」は非限定名詞（Mafā'ilパターン）であり、定冠詞も付かず後ろにイダーファもされていないため、カスラではなくファトハを取ります。" }
  ]
},
{
  id: 1110,
  level: "上級",
  category: "環境",
  title: "アラビアヒョウの保護：絶滅からの救済と自然の回復",
  contentPlain: "يعد النمر العربي من أكثر الحيوانات المهددة بالانقراض في العالم، وهو رمز للتنوع البيولوجي في شبه الجزيرة العربية. في إطار جهودها لحماية الحياة الفطرية، أطلقت المملكة برنامجا شاملا لإكثار النمر العربي وإعادة توطينه في بيئاته الطبيعية، وتحديدا في محميات العلا والجبال المحيطة بها. يتضمن البرنامج إنشاء مراكز متخصصة للإكثار، وتأهيل الموائل الطبيعية، وتشديد العقوبات على الصيد الجائر. احتفلت الهيئة الملكية لمحافظة العلا مؤخرا بولادة صغار نمور عربية جديدة في الأسر، مما يحيي الأمل في بقاء هذا النوع النادر. كما تم تخصيص يوم 10 فبراير من كل عام كـ \"يوم النمر العربي\" لرفع الوعي بأهمية الحفاظ عليه. إن حماية النمر العربي ليست مجرد حماية لحيوان، بل هي حماية لنظام بيئي متكامل، وجزء من التزام المملكة بالحفاظ على كوكب الأرض للأجيال القادمة.",
  contentVoweled: "يُعَدُّ النَّمِرُ الْعَرَبِيُّ مِنْ أَكْثَرِ الْحَيَوَانَاتِ الْمُهَدَّدَةِ بِالِانْقِرَاضِ فِي الْعَالَمِ، وَهُوَ رَمْزٌ لِلتَّنَوُّعِ الْبِيُولُوجِيِّ فِي شِبْهِ الْجَزِيرَةِ الْعَرَبِيَّةِ. فِي إِطَارِ جُهُودِهَا لِحِمَايَةِ الْحَيَاةِ الْفِطْرِيَّةِ، أَطْلَقَتِ الْمَمْلَكَةُ بَرْنَامَجًا شَامِلًا لِإِكْثَارِ النَّمِرِ الْعَرَبِيِّ وَإِعَادَةِ تَوْطِينِهِ فِي بِيئَاتِهِ الطَّبِيعِيَّةِ، وَتَحْدِيدًا فِي مَحْمِيَّاتِ الْعُلَا وَالْجِبَالِ الْمُحِيطَةِ بِهَا. يَتَضَمَّنُ الْبَرْنَامَجُ إِنْشَاءَ مَرَاكِزَ مُتَخَصِّصَةٍ لِلْإِكْثَارِ، وَتَأْهِيلَ الْمَوَائِلِ الطَّبِيعِيَّةِ، وَتَشْدِيدَ الْعُقُوبَاتِ عَلَى الصَّيْدِ الْجَائِرِ. احْتَفَلَتِ الْهَيْئَةُ الْمَلَكِيَّةُ لِمُحَافَظَةِ الْعُلَا مُؤَخَّرًا بِوِلَادَةِ صِغَارِ نُمُورٍ عَرَبِيَّةٍ جَدِيدَةٍ فِي الْأَسْرِ، مِمَّا يُحْيِي الْأَمَلَ فِي بَقَاءِ هَذَا النَّوْعِ النَّادِرِ. كَمَا تَمَّ تَخْصِيصُ يَوْمِ 10 فِبْرَايِرَ مِنْ كُلِّ عَامٍ كَـ \"يَوْمِ النَّمِرِ الْعَرَبِيِّ\" لِرَفْعِ الْوَعْيِ بِأَهَمِّيَّةِ الْحِفَاظِ عَلَيْهِ. إِنَّ حِمَايَةَ النَّمِرِ الْعَرَبِيِّ لَيْسَتْ مُجَرَّدَ حِمَايَةٍ لِحَيَوَانٍ، بَلْ هِيَ حِمَايَةٌ لِنِظَامٍ بِيئِيٍّ مُتَكَامِلٍ، وَجُزْءٌ مِنَ الْتِزَامِ الْمَمْلَكَةِ بِالْحِفَاظِ عَلَى كَوْكَبِ الْأَرْضِ لِلْأَجْيَالِ الْقَادِمَةِ.",
  sentences: [
    { speaker: "記事", arabic: "يُعَدُّ النَّمِرُ الْعَرَبِيُّ مِنْ أَكْثَرِ الْحَيَوَانَاتِ الْمُهَدَّدَةِ بِالِانْقِرَاضِ، وَهُوَ رَمْزٌ لِلتَّنَوُّعِ الْبِيُولُوجِيِّ.", japanese: "アラビアヒョウは世界で最も絶滅の危機に瀕している動物の一つであり、生物多様性の象徴です。" },
    { speaker: "記事", arabic: "أَطْلَقَتِ الْمَمْلَكَةُ بَرْنَامَجًا لِإِكْثَارِ النَّمِرِ الْعَرَبِيِّ وَإِعَادَةِ تَوْطِينِهِ فِي مَحْمِيَّاتِ الْعُلَا.", japanese: "王国はアラビアヒョウを繁殖させ、アル・ウラの保護区へ再導入させるためのプログラムを開始しました。" },
    { speaker: "記事", arabic: "تَمَّ تَخْصِيصُ يَوْمِ 10 فِبْرَايِرَ كَـ \"يَوْمِ النَّمِرِ الْعَرَبِيِّ\" لِرَفْعِ الْوَعْيِ.", japanese: "意識を高めるため、2月10日が「アラビアヒョウの日」に指定されました。" },
    { speaker: "記事", arabic: "إِنَّ حِمَايَةَ النَّمِرِ هِيَ حِمَايَةٌ لِنِظَامٍ بِيئِيٍّ مُتَكَامِلٍ.", japanese: "ヒョウの保護は、単なる動物の保護ではなく、統合された生態系の保護です。" }
  ],
  vocabList: [
    { word: "نَمِر عَرَبِيّ", meaning: "アラビアヒョウ" },
    { word: "مُهَدَّد بِالِانْقِرَاض", meaning: "絶滅危惧の" },
    { word: "إِكْثَار", meaning: "繁殖/増殖" },
    { word: "صَيْد جَائِر", meaning: "密猟" }
  ],
  questions: [
    { id: 11101, type: "reading", text: "サウジアラビアがアラビアヒョウ保護のために行っているプログラムの内容に含まれないものは？", options: ["繁殖センターの設立。", "自然生息地の修復。", "ヒョウの狩猟を奨励すること。", "密猟に対する罰則の強化。"], correctIndex: 2, explanation: "「密猟に対する罰則の強化（تشديد العقوبات على الصيد الجائر）」は含まれますが、狩猟の奨励は含まれません。" },
    { id: 11102, type: "reading", text: "アラビアヒョウの再導入（野生復帰）が計画されている主な場所はどこですか？", options: ["リヤドの動物園。", "アル・ウラの保護区。", "エジプトの砂漠。", "一般家庭の庭。"], correctIndex: 1, explanation: "「特にアル・ウラの保護区（تحديداً في محميات العلا）」と記述されています。" },
    { id: 11103, type: "reading", text: "「アラビアヒョウの日」はいつですか？", options: ["1月1日。", "2月10日。", "9月23日。", "12月31日。"], correctIndex: 1, explanation: "「2月10日（يوم 10 فبراير）」に指定されています。" },
    // 上級文法問題
    { id: 11104, type: "grammar_advanced", text: "「إنشاء مراكز متخصصة」の「مراكز」の正しい語尾は？", options: ["a (ファトハ・タンウィーンなし)", "i (カスラ)", "u (ダンマ)", "in (タンウィーン)"], correctIndex: 0, explanation: "「Inshā' (設立)」の後のイダーファ第2要素（属格）。「Marākiz」は非限定名詞（Mafā'ilパターン）であり、定冠詞もなくイダーファもされていない（形容詞が続くだけ）ため、カスラではなくファトハを取ります。" },
    { id: 11105, type: "grammar_advanced", text: "「بولادة صغار نمور」の「نمور」の正しい語尾は？", options: ["in (タンウィーン・カスラ)", "an (タンウィーン・ファトハ)", "un (タンウィーン・ダンマ)", "a (ファトハ)"], correctIndex: 0, explanation: "「Ṣighār (子供たち)」の後のイダーファ第2要素（属格）です。非限定名詞ではないので、通常通りタンウィーン・カスラを取ります。" }
  ]
}
    ];