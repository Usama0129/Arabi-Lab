export type QuestionType = "reading" | "vocabulary" | "grammar" | "tashkeel";

export type QuizQuestion = {
  id: number;
  type: QuestionType;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type Article = {
  id: number;
  title: string;
  category: string;
  level: "初級" | "会話" | "中級" | "上級";
  contentVoweled: string;
  contentPlain: string;
  vocabList: { word: string; meaning: string }[];
  questions: QuizQuestion[];
  sentences: { arabic: string; japanese: string; speaker?: string }[];
};

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
      { speaker: "📞 客", arabic: "قِسْمَ الْعَائِلَاتِ (مُغْلَق).", japanese: "ファミリー席（個室）で。" },
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
  //  PART 2: 初級文法 (Beginner Grammar) - 全18カテゴリー (ID 101-803)
  // =================================================================

  // --- 1. 指示代名詞 (Demonstratives) ---
  {
    id: 101, title: "単数", category: "指示代名詞", level: "初級",
    contentVoweled: "هَذَا مُدَرِّسٌ.", contentPlain: "هذا مدرس.",
    vocabList: [{ word: "هَذَا", meaning: "これ(男)" }],
    questions: [
      { id: 1011, type: "grammar", text: "「これは（男性の）先生です」", options: ["هَذَا مُدَرِّسٌ", "هَذِهِ مُدَرِّسٌ", "تِلْكَ مُدَرِّسَةٌ", "هَؤُلَاءِ مُدَرِّسٌ"], correctIndex: 0, explanation: "男性単数（近称）は「هَذَا」です。" },
      { id: 1012, type: "grammar", text: "「あれは学校（Madrasah/女）です」", options: ["تِلْكَ مَدْرَسَةٌ", "ذَلِكَ مَدْرَسَةٌ", "هَذِهِ مَدْرَسَةٌ", "هَذَا مَدْرَسَةٌ"], correctIndex: 0, explanation: "女性単数（遠称）は「تِلْكَ」です。" },
      { id: 1013, type: "grammar", text: "【意味】「هَذِهِ سَيَّارَةٌ」", options: ["これは車です", "あれは車です", "これは家です", "これらは車です"], correctIndex: 0, explanation: "「هَذِهِ」は女性単数の「これ」です。" },
      { id: 1014, type: "grammar", text: "「これは私の母です」", options: ["هَذِهِ أُمِّي", "هَذَا أُمِّي", "تِلْكَ أُمِّي", "ذَلِكَ أُمِّي"], correctIndex: 0, explanation: "母（女性）なので「Hādhihi」を使います。" },
      { id: 1015, type: "grammar", text: "【和訳】「مَا هَذَا؟」", options: ["これは何ですか？", "これは誰ですか？", "これはどこですか？", "これはいつですか？"], correctIndex: 0, explanation: "基本中の基本フレーズです。" },
      { id: 1016, type: "grammar", text: "「あれは月（Qamar/男）です」", options: ["ذَلِكَ قَمَرٌ", "تِلْكَ قَمَرٌ", "هَذَا قَمَرٌ", "هَذِهِ قَمَرٌ"], correctIndex: 0, explanation: "男性単数（遠称）は「ذَلِكَ (Dhālika)」です。" },
      { id: 1017, type: "grammar", text: "「これは私の父です」", options: ["هَذَا أَبِي", "هَذِهِ أَبِي", "تِلْكَ أَبِي", "هَؤُلَاءِ أَبِي"], correctIndex: 0, explanation: "父（男性）なので「Hādhā」を使います。" },
      { id: 1018, type: "grammar", text: "【和訳】「مَنْ هَذِهِ؟」", options: ["この女性は誰ですか？", "この男性は誰ですか？", "これは何ですか？", "あれは誰ですか？"], correctIndex: 0, explanation: "「Hādhihi」を使っているので女性を指しています。" },
      { id: 1019, type: "grammar", text: "「それは間違い（Khaṭa'/男）です」", options: ["هَذَا خَطَأٌ", "هَذِهِ خَطَأٌ", "هَذَا صَحِيحٌ", "هَذِهِ صَحِيحٌ"], correctIndex: 0, explanation: "間違い(男)なので「Hādhā」です。" },
      { id: 10110, type: "grammar", text: "「あれは太陽（Shams/女）です」", options: ["تِلْكَ شَمْسٌ", "ذَلِكَ شَمْسٌ", "هَذِهِ شَمْسٌ", "هَذَا شَمْسٌ"], correctIndex: 0, explanation: "太陽はアラビア語で女性名詞です。" }
    ],
    sentences: [{ arabic: "هَذَا مُدَرِّسٌ.", japanese: "これは先生です。" }]
  },
  {
    id: 102, title: "双数", category: "指示代名詞", level: "初級",
    contentVoweled: "هَذَانِ كِتَابَانِ.", contentPlain: "هذان كتابان.",
    vocabList: [{ word: "هَذَانِ", meaning: "これら2つ" }],
    questions: [
      { id: 1021, type: "grammar", text: "「これら2冊の本（Kitāb/男）は新しい」 (主格)", options: ["هَذَانِ الْكِتَابَانِ", "هَذَيْنِ الْكِتَابَيْنِ", "هَاتَانِ الْكِتَابَانِ", "هَاتَيْنِ الْكِتَابَيْنِ"], correctIndex: 0, explanation: "主格・男性は「هَذَانِ」です。" },
      { id: 1022, type: "grammar", text: "「私はこれら2つの町（Madīnah/女）を訪れました」 (対格)", options: ["هَاتَيْنِ الْمَدِينَتَيْنِ", "هَاتَانِ الْمَدِينَتَانِ", "هَذَيْنِ الْمَدِينَتَيْنِ", "هَذِهِ الْمَدِينَةَ"], correctIndex: 0, explanation: "対格・女性は「هَاتَيْنِ」です。" },
      { id: 1023, type: "grammar", text: "【意味】「فِي هَذَيْنِ الْبَيْتَيْنِ」", options: ["これら2つの家の中で", "これら2つの家は", "この家の中で", "家と家の間で"], correctIndex: 0, explanation: "前置詞の後なので属格「هَذَيْنِ」が使われています。" },
      { id: 1024, type: "grammar", text: "「これら2人の先生（女）は」 (主格)", options: ["هَاتَانِ الْمُدَرِّسَتَانِ", "هَاتَيْنِ الْمُدَرِّسَتَيْنِ", "هَذَانِ الْمُدَرِّسَانِ", "هَذَيْنِ الْمُدَرِّسَيْنِ"], correctIndex: 0, explanation: "女性・双数・主格は「هَاتَانِ」です。" },
      { id: 1025, type: "grammar", text: "「これら2本のペン（男）」 (主格)", options: ["هَذَانِ الْقَلَمَانِ", "هَذَيْنِ الْقَلَمَيْنِ", "هَاتَانِ الْقَلَمَانِ", "هَاتَيْنِ الْقَلَمَيْنِ"], correctIndex: 0, explanation: "男性・双数・主格は「هَذَانِ」です。" },
      { id: 1026, type: "grammar", text: "「私はこれら2人の男に挨拶しました」 (属格)", options: ["عَلَى هَذَيْنِ الرَّجُلَيْنِ", "عَلَى هَذَانِ الرَّجُلَانِ", "عَلَى هَاتَيْنِ الرَّجُلَيْنِ", "عَلَى هَذَا الرَّجُلِ"], correctIndex: 0, explanation: "属格・男性・双数は「هَذَيْنِ」です。" },
      { id: 1027, type: "grammar", text: "【和訳】「هَاتَانِ بِنْتَانِ」", options: ["これらは2人の少女です", "これらは2人の少年です", "これらは2つの家です", "これは少女です"], correctIndex: 0, explanation: "「Hātāni」は女性双数です。" },
      { id: 1028, type: "grammar", text: "「これら2つの部屋（女）」 (主格)", options: ["هَاتَانِ الْغُرْفَتَانِ", "هَاتَيْنِ الْغُرْفَتَيْنِ", "هَذَانِ الْغُرْفَتَانِ", "هَذِهِ الْغُرْفَةُ"], correctIndex: 0, explanation: "女性名詞の双数主格は「Hātāni」です。" },
      { id: 1029, type: "grammar", text: "「これら2つの本を読みました」 (対格)", options: ["هَذَيْنِ الْكِتَابَيْنِ", "هَذَانِ الْكِتَابَانِ", "هَاتَيْنِ الْكِتَابَيْنِ", "هَذَا الْكِتَابَ"], correctIndex: 0, explanation: "目的語（対格）なので「Hādhayni」です。" },
      { id: 10210, type: "grammar", text: "「これら2人のエンジニア（男）」 (主格)", options: ["هَذَانِ الْمُهَنْدِسَانِ", "هَذَيْنِ الْمُهَنْدِسَيْنِ", "هَاتَانِ الْمُهَنْدِسَتَانِ", "هَؤُلَاءِ الْمُهَنْدِسُونَ"], correctIndex: 0, explanation: "男性双数主格は「Hādhāni」です。" }
    ],
    sentences: [{ arabic: "هَذَانِ كِتَابَانِ.", japanese: "これらは2冊の本です。" }]
  },
  {
    id: 103, title: "複数", category: "指示代名詞", level: "初級",
    contentVoweled: "هَؤُلَاءِ طُلَّابٌ.", contentPlain: "هؤلاء طلاب.",
    vocabList: [{ word: "هَؤُلَاءِ", meaning: "これら(人)" }],
    questions: [
      { id: 1031, type: "grammar", text: "「これらは私の友達（人間）です」", options: ["هَؤُلَاءِ أَصْدِقَائِي", "هَذِهِ أَصْدِقَائِي", "هَذَا أَصْدِقَائِي", "تِلْكَ أَصْدِقَائِي"], correctIndex: 0, explanation: "人間の複数は「هَؤُلَاءِ」です。" },
      { id: 1032, type: "grammar", text: "「あれらは美しい山（Jibāl/物）です」", options: ["تِلْكَ جِبَالٌ جَمِيلَةٌ", "أُولَئِكَ جِبَالٌ", "هَؤُلَاءِ جِبَالٌ", "ذَلِكَ جِبَالٌ"], correctIndex: 0, explanation: "物の複数は「女性単数扱い」なので「تِلْكَ」を使います。" },
      { id: 1033, type: "grammar", text: "【意味】「هَؤُلَاءِ مُهَنْدِسُونَ」", options: ["これらはエンジニア達です", "あれらはエンジニア達です", "これはエンジニアです", "これらは工場です"], correctIndex: 0, explanation: "「هَؤُلَاءِ」は人の複数です。" },
      { id: 1034, type: "grammar", text: "「これらは犬（動物）です」", options: ["هَذِهِ كِلَابٌ", "هَؤُلَاءِ كِلَابٌ", "هَذَا كِلَابٌ", "هَذَانِ كِلَابٌ"], correctIndex: 0, explanation: "動物も物扱いなので「هَذِهِ」です。" },
      { id: 1035, type: "grammar", text: "「あれらは私の姉妹（人）です」", options: ["أُولَئِكَ أَخَوَاتِي", "تِلْكَ أَخَوَاتِي", "هَؤُلَاءِ أَخَوَاتِي", "ذَلِكَ أَخَوَاتِي"], correctIndex: 0, explanation: "人の複数（遠称）は「أُولَئِكَ」です。" },
      { id: 1036, type: "grammar", text: "「これらは本（物）です」", options: ["هَذِهِ كُتُبٌ", "هَؤُلَاءِ كُتُبٌ", "هَذَا كُتُبٌ", "تِلْكَ كُتُبٌ"], correctIndex: 0, explanation: "物の複数は「Hādhihi」です。" },
      { id: 1037, type: "grammar", text: "【和訳】「أُولَئِكَ هُمُ الْمُفْلِحُونَ」", options: ["あれらこそが成功者たちです", "これらは成功者です", "彼らは成功者です", "あなたは成功者です"], correctIndex: 0, explanation: "「Ulā'ika」は「あれらの人々」です。" },
      { id: 1038, type: "grammar", text: "「これらは新しい車（物）です」", options: ["هَذِهِ سَيَّارَاتٌ", "هَؤُلَاءِ سَيَّارَاتٌ", "هَذِهِ سَيَّارَةٌ", "تِلْكَ سَيَّارَاتٌ"], correctIndex: 0, explanation: "物の複数は「Hādhihi」です。" },
      { id: 1039, type: "grammar", text: "「これらは男性（人）です」", options: ["هَؤُلَاءِ رِجَالٌ", "هَذِهِ رِجَالٌ", "هَذَا رِجَالٌ", "أُولَئِكَ رِجَالٌ"], correctIndex: 0, explanation: "人の複数は「Hā'ulā'i」です。" },
      { id: 10310, type: "grammar", text: "「あれらは星（物）です」", options: ["تِلْكَ نُجُومٌ", "أُولَئِكَ نُجُومٌ", "ذَلِكَ نُجُومٌ", "هَذِهِ نُجُومٌ"], correctIndex: 0, explanation: "物の複数（遠称）は「Tilka」です。" }
    ],
    sentences: [{ arabic: "هَؤُلَاءِ طُلَّابٌ.", japanese: "これらは学生たちです。" }]
  },

  // --- 2. 疑問詞 ---
  {
    id: 601, title: "基本の疑問詞", category: "疑問詞", level: "初級",
    contentVoweled: "مَنْ هَذَا؟", contentPlain: "من هذا؟",
    vocabList: [{ word: "مَنْ", meaning: "誰" }, { word: "أَيْنَ", meaning: "どこ" }],
    questions: [
      { id: 1, type: "grammar", text: "「これは誰ですか？」", options: ["مَنْ هَذَا؟", "مَا هَذَا؟", "أَيْنَ هَذَا؟", "هَلْ هَذَا؟"], correctIndex: 0, explanation: "人には「Man」を使います。" },
      { id: 2, type: "grammar", text: "「これは何ですか？」", options: ["مَا هَذَا؟", "مَنْ هَذَا؟", "كَيْفَ هَذَا؟", "مَتَى هَذَا؟"], correctIndex: 0, explanation: "物には「Mā」を使います。" },
      { id: 3, type: "grammar", text: "【和訳】「أَيْنَ الْمِفْتَاحُ؟」", options: ["鍵はどこですか？", "鍵はありますか？", "鍵はどれですか？", "鍵は誰のものですか？"], correctIndex: 0, explanation: "「Ayna」は場所を尋ねます。" },
      { id: 4, type: "grammar", text: "「試験はいつですか？」", options: ["مَتَى الْامْتِحَانُ؟", "أَيْنَ الْامْتِحَانُ؟", "كَيْفَ الْامْتِحَانُ؟", "كَمِ الْامْتِحَانُ؟"], correctIndex: 0, explanation: "「Matā」は時間を尋ねます。" },
      { id: 5, type: "grammar", text: "「元気ですか？（状態）」", options: ["كَيْفَ الْحَالُ؟", "مَا الْحَالُ؟", "مَنْ الْحَالُ؟", "أَيْنَ الْحَالُ؟"], correctIndex: 0, explanation: "「Kayfa」は状態や方法を尋ねます。" },
      { id: 6, type: "grammar", text: "「なぜ（Why）あなたは行くのですか？」", options: ["لِمَاذَا تَذْهَبُ؟", "مَاذَا تَذْهَبُ؟", "مَنْ تَذْهَبُ؟", "أَيْنَ تَذْهَبُ؟"], correctIndex: 0, explanation: "「Limādhā」は理由を尋ねます。" },
      { id: 7, type: "grammar", text: "【和訳】「مَاذَا تَفْعَلُ؟」", options: ["あなたは何をしていますか？", "あなたはどこに行きますか？", "あなたは誰ですか？", "なぜそうするのですか？"], correctIndex: 0, explanation: "「Mādhā」は動詞と一緒に使い「何を〜する？」と聞きます。" },
      { id: 8, type: "grammar", text: "「どれ（Which）が好きですか？」", options: ["أَيُّ وَاحِدٍ تُحِبُّ؟", "مَنْ وَاحِدٍ تُحِبُّ؟", "أَيْنَ وَاحِدٍ تُحِبُّ؟", "هَلْ وَاحِدٍ تُحِبُّ؟"], correctIndex: 0, explanation: "「Ayyu」は選択肢の中から「どれ・どの」を尋ねます。" },
      { id: 9, type: "grammar", text: "「どこから（From where）来ましたか？」", options: ["مِنْ أَيْنَ جِئْتَ؟", "إِلَى أَيْنَ جِئْتَ؟", "فِي أَيْنَ جِئْتَ؟", "مَعَ أَيْنَ جِئْتَ؟"], correctIndex: 0, explanation: "「Min ayna」で「どこから」となります。" },
      { id: 10, type: "grammar", text: "【和訳】「مَعَ مَنْ ذَهَبْتَ؟」", options: ["誰と行きましたか？", "誰が行きましたか？", "誰のところへ行きましたか？", "なぜ行きましたか？"], correctIndex: 0, explanation: "「Ma'a man」で「誰と一緒に」となります。" }
    ],
    sentences: [{ arabic: "مَنْ أَنْتَ؟", japanese: "あなたは誰ですか？" }]
  },
  {
    id: 602, title: "Yes/Noと数", category: "疑問詞", level: "初級",
    contentVoweled: "هَلْ أَنْتَ طَالِبٌ؟", contentPlain: "هل أنت طالب؟",
    vocabList: [{ word: "هَلْ", meaning: "〜ですか？" }, { word: "كَمْ", meaning: "いくつ" }],
    questions: [
      { id: 1, type: "grammar", text: "「あなたは学生ですか？」", options: ["هَلْ أَنْتَ طَالِبٌ؟", "مَنْ أَنْتَ طَالِبٌ؟", "مَا أَنْتَ طَالِبٌ؟", "أَيْنَ أَنْتَ طَالِبٌ؟"], correctIndex: 0, explanation: "Yes/No疑問文は「Hal」を使います。" },
      { id: 2, type: "grammar", text: "「これは本ですか？（アを使用）」", options: ["أَهَذَا كِتَابٌ؟", "هَلْ هَذَا كِتَابٌ؟", "مَا هَذَا كِتَابٌ؟", "مَنْ هَذَا كِتَابٌ؟"], correctIndex: 0, explanation: "「Hal」の代わりに「A (Hamza)」を文頭においても疑問文になります。" },
      { id: 3, type: "grammar", text: "「本は何冊ありますか？（いくつ）」", options: ["كَمْ كِتَابًا؟", "كَمْ كِتَابٌ؟", "كَمْ كِتَابٍ؟", "كَمْ الْكِتَابُ؟"], correctIndex: 0, explanation: "「Kam (いくつ)」の後の名詞は、単数・対格（an）になります。" },
      { id: 4, type: "grammar", text: "【和訳】「بِكَمْ هَذَا؟」", options: ["これはいくらですか？", "これはいくつですか？", "これはどうですか？", "これは何ですか？"], correctIndex: 0, explanation: "「Bi-kam」で値段（いくらで）を聞きます。" },
      { id: 5, type: "grammar", text: "「あなたは先生ではないのですか？（否定疑問）」", options: ["أَلَسْتَ مُدَرِّسًا؟", "هَلْ لَسْتَ مُدَرِّسًا؟", "مَا أَنْتَ مُدَرِّسٌ؟", "أَيْنَ الْمُدَرِّسُ؟"], correctIndex: 0, explanation: "否定疑問文には通常「A (Hamza)」を使い、「A-laysa...」や「A-lam...」の形になります。" },
      { id: 6, type: "grammar", text: "「（否定疑問に対して）はい、そうです（先生ではありません）」", options: ["نَعَمْ، لَسْتُ مُدَرِّسًا", "بَلَى، أَنَا مُدَرِّسٌ", "لَا، لَسْتُ مُدَرِّسًا", "كَلَّا"], correctIndex: 0, explanation: "否定疑問に対し、その通り（否定の内容を肯定）なら「Na'am」、いいえ（肯定の内容）なら「Balā」を使います。" },
      { id: 7, type: "grammar", text: "「駅まで何キロですか？」", options: ["كَمْ كِيلُومِتْرًا إِلَى الْمَحَطَّةِ؟", "كَمْ كِيلُومِتْرٌ إِلَى الْمَحَطَّةِ؟", "كَمْ كِيلُومِتْرٍ إِلَى الْمَحَطَّةِ؟", "أَيْنَ الْمَحَطَّةُ؟"], correctIndex: 0, explanation: "Kamの後は単数対格（an）です。" },
      { id: 8, type: "grammar", text: "【和訳】「كَمْ عُمْرُكَ؟」", options: ["あなたは何歳ですか？", "あなたの名前は何ですか？", "あなたはどこですか？", "あなたはどうですか？"], correctIndex: 0, explanation: "直訳は「あなたの寿命（年齢）はいくつですか」です。" },
      { id: 9, type: "grammar", text: "「兄弟は何人いますか？」", options: ["كَمْ أَخًا لَكَ؟", "كَمْ أَخٌ لَكَ؟", "كَمْ إِخْوَةٌ لَكَ؟", "مَنْ أَخُوكَ؟"], correctIndex: 0, explanation: "Kamの後は必ず「単数」対格を使います。複数は使いません。" },
      { id: 10, type: "grammar", text: "「このペンはいくらですか？」", options: ["بِكَمْ هَذَا الْقَلَمُ؟", "كَمْ هَذَا الْقَلَمُ؟", "أَيْنَ هَذَا الْقَلَمُ؟", "مَا هَذَا الْقَلَمُ؟"], correctIndex: 0, explanation: "価格を聞くときは「Bi-kam」を使います。" }
    ],
    sentences: [{ arabic: "كَمْ عُمْرُكَ؟", japanese: "あなたの年齢はいくつですか？" }]
  },

  // --- 3. 所有・存在 ---
  {
    id: 701, title: "Inda (物理的所有)", category: "所有・存在", level: "初級",
    contentVoweled: "عِنْدِي.", contentPlain: "عندي.",
    vocabList: [{ word: "عِنْدَ", meaning: "〜の所に" }],
    questions: [
      { id: 1, type: "grammar", text: "「私は車を持っています」", options: ["عِنْدِي سَيَّارَةٌ", "أَنَا سَيَّارَةٌ", "لِي سَيَّارَةٌ", "مَعِي سَيَّارَةٌ"], correctIndex: 0, explanation: "「Indī」は「私のところに〜がある＝持っている」です。" },
      { id: 2, type: "grammar", text: "「あなたはペンを持っていますか？（男性へ）」", options: ["هَلْ عِنْدَكَ قَلَمٌ؟", "هَلْ عِنْدَكِ قَلَمٌ؟", "هَلْ عِنْدَهُ قَلَمٌ؟", "هَلْ عِنْدِي قَلَمٌ؟"], correctIndex: 0, explanation: "「あなた（男）のところ」は「Indaka」です。" },
      { id: 3, type: "grammar", text: "【和訳】「عِنْدَهَا كِتَابٌ」", options: ["彼女は本を持っています", "彼は本を持っています", "あなたは本を持っています", "私は本を持っています"], correctIndex: 0, explanation: "「hā」は彼女（Her）を指します。" },
      { id: 4, type: "grammar", text: "「私たちはお金を持っていません（否定）」", options: ["مَا عِنْدَنَا مَالٌ", "لَيْسَ عِنْدَنَا مَالٌ", "لَا عِنْدَنَا مَالٌ", "لَمْ عِنْدَنَا مَالٌ"], correctIndex: 0, explanation: "所有の否定には「Mā」がよく使われます（Laysaも可）。" },
      { id: 5, type: "grammar", text: "「先生のところに質問があります」", options: ["عِنْدَ الْمُدَرِّسِ سُؤَالٌ", "لِلْمُدَرِّسِ سُؤَالٌ", "مَعَ الْمُدَرِّسِ سُؤَالٌ", "فِي الْمُدَرِّسِ سُؤَالٌ"], correctIndex: 0, explanation: "場所・存在としての「〜のところに」は「Inda」です。" },
      { id: 6, type: "grammar", text: "「彼らは家を持っていますか？」", options: ["هَلْ عِنْدَهُمْ بَيْتٌ؟", "هَلْ عِنْدَهُ بَيْتٌ؟", "هَلْ عِنْدَكُمْ بَيْتٌ؟", "هَلْ عِنْدَنَا بَيْتٌ؟"], correctIndex: 0, explanation: "彼ら（複数）は「Hum」です。" },
      { id: 7, type: "grammar", text: "【和訳】「عِنْدَكِ فُلُوسٌ？」", options: ["あなた（女）はお金を持っていますか？", "あなた（男）はお金を持っていますか？", "彼女はお金を持っていますか？", "彼はお金を持っていますか？"], correctIndex: 0, explanation: "「Indaki」は女性への問いかけです。" },
      { id: 8, type: "grammar", text: "「時間がありますか？（私と一緒に）」", options: ["عِنْدَكَ وَقْتٌ؟", "لَكَ وَقْتٌ؟", "فِيكَ وَقْتٌ؟", "مِنْكَ وَقْتٌ؟"], correctIndex: 0, explanation: "「Indaka waqt?」で「時間ある？」という表現になります。" },
      { id: 9, type: "grammar", text: "「辞書は図書館にあります」", options: ["الْقَامُوسُ عِنْدَ الْمَكْتَبَةِ", "الْقَامُوسُ فِي الْمَكْتَبَةِ", "الْقَامُوسُ لِلْمَكْتَبَةِ", "الْقَامُوسُ عَلَى الْمَكْتَبَةِ"], correctIndex: 1, explanation: "建物の中にある場合は「Fī」を使います。「Inda」は「〜の所有にある」「〜のそばに」というニュアンスです。" },
      { id: 10, type: "grammar", text: "「私は何も持っていません」", options: ["مَا عِنْدِي شَيْءٌ", "لَا عِنْدِي شَيْءٌ", "لَيْسَ عِنْدِي شَيْءٌ", "لَمْ عِنْدِي شَيْءٌ"], correctIndex: 0, explanation: "「Mā indī shay'un」＝何もありません。" }
    ],
    sentences: [{ arabic: "عِنْدِي سُؤَالٌ.", japanese: "私には質問があります。" }]
  },
  {
    id: 702, title: "Li (帰属・人間関係)", category: "所有・存在", level: "初級",
    contentVoweled: "لِي أَخٌ.", contentPlain: "لي أخ.",
    vocabList: [{ word: "لِـ", meaning: "〜に(For)" }],
    questions: [
      { id: 1, type: "grammar", text: "「私には兄弟がいます（人間関係）」", options: ["لِي أَخٌ", "عِنْدِي أَخٌ", "مَعِي أَخٌ", "بِي أَخٌ"], correctIndex: 0, explanation: "人間関係の所有には「Li」を使います。" },
      { id: 2, type: "grammar", text: "「彼には3人の姉妹がいます」", options: ["لَهُ ثَلَاثُ أَخَوَاتٍ", "لَهَا ثَلَاثُ أَخَوَاتٍ", "لَكَ ثَلَاثُ أَخَوَاتٍ", "لِي ثَلَاثُ أَخَوَاتٍ"], correctIndex: 0, explanation: "「彼に」は「Lahu」です。" },
      { id: 3, type: "grammar", text: "【和訳】「لِمَنْ هَذَا الْقَلَمُ؟」", options: ["このペンは誰のですか？", "このペンは誰ですか？", "このペンはどこですか？", "このペンは何ですか？"], correctIndex: 0, explanation: "「Li-man」は「誰のもの」という意味です。" },
      { id: 4, type: "grammar", text: "「この本はムハンマドのものです」", options: ["هَذَا الْكِتَابُ لِمُحَمَّدٍ", "هَذَا الْكِتَابُ عِنْدَ مُحَمَّدٍ", "هَذَا الْكِتَابُ مُحَمَّدٌ", "هَذَا الْكِتَابُ مَعَ مُحَمَّدٍ"], correctIndex: 0, explanation: "名前に「Li」をつけると「Li-Muḥammadin」となります。" },
      { id: 5, type: "grammar", text: "「あなた（女性）には子供がいますか？」", options: ["أَلَكِ أَطْفَالٌ؟", "أَلَكَ أَطْفَالٌ؟", "أَلَهُ أَطْفَالٌ؟", "أَلَهَا أَطْفَالٌ؟"], correctIndex: 0, explanation: "「Laki」は女性に対して「あなたには」です。" },
      { id: 6, type: "grammar", text: "「称賛はアッラーにあり」", options: ["الْحَمْدُ لِلَّهِ", "الْحَمْدُ بِاللَّهِ", "الْحَمْدُ عَلَى اللَّهِ", "الْحَمْدُ فِي اللَّهِ"], correctIndex: 0, explanation: "定型句「Al-ḥamdu lillāh」です。" },
      { id: 7, type: "grammar", text: "【和訳】「لَيْسَ لِي وَقْتٌ」", options: ["私には時間がありません", "私は時間ではありません", "時間は私のものではありません", "時間が欲しいです"], correctIndex: 0, explanation: "「Laysa lī」で「私にはない」となります。" },
      { id: 8, type: "grammar", text: "「この家は誰のものですか？」", options: ["لِمَنْ هَذَا الْبَيْتُ؟", "مَنْ هَذَا الْبَيْتُ؟", "عِنْدَ مَنْ هَذَا الْبَيْتُ؟", "أَيْنَ هَذَا الْبَيْتُ؟"], correctIndex: 0, explanation: "所有者を尋ねるなら「Li-man」です。" },
      { id: 9, type: "grammar", text: "「私たちには歴史がある」", options: ["لَنَا تَارِيخٌ", "بِنَا تَارِيخٌ", "فِينَا تَارِيخٌ", "مِنَّا تَارِيخٌ"], correctIndex: 0, explanation: "「Lanā」は「私たちには」です。" },
      { id: 10, type: "grammar", text: "「それは私のものです」", options: ["إِنَّهُ لِي", "إِنَّهُ عِنْدِي", "إِنَّهُ مَعِي", "إِنَّهُ بِي"], correctIndex: 0, explanation: "帰属を表す「Lī」を使います。" }
    ],
    sentences: [{ arabic: "الْحَمْدُ لِلَّهِ.", japanese: "おかげさまで（称賛はアッラーにあり）。" }]
  },

  // --- 4. 名詞・代名詞 (Nouns & Pronouns) ---
  {
    id: 201, title: "冠詞 (al-)", category: "名詞・代名詞", level: "初級",
    contentVoweled: "الْكِتَابُ.", contentPlain: "الكتاب.",
    vocabList: [{ word: "الـ", meaning: "その(The)" }],
    questions: [
      { id: 1, type: "grammar", text: "太陽文字（al-の発音が変わる）はどれ？", options: ["الشَّمْس (al-shams)", "الْقَمَر (al-qamar)", "الْبَاب (al-bāb)", "الْكِتَاب (al-kitāb)"], correctIndex: 0, explanation: "Shams（太陽）のShは太陽文字なので、al-がash-と同化します。" },
      { id: 2, type: "grammar", text: "「その新しい本」正しい限定修飾は？", options: ["الْكِتَابُ الْجَدِيدُ", "كِتَابٌ جَدِيدٌ", "الْكِتَابُ جَدِيدٌ", "كِتَابُ الْجَدِيدِ"], correctIndex: 0, explanation: "名詞に定冠詞がつくと、形容詞にも定冠詞がつきます。" },
      { id: 3, type: "grammar", text: "【意味】「الْبَيْتُ كَبِيرٌ」", options: ["その家は大きいです", "大きな家", "家と大きい", "ある家は大きい"], correctIndex: 0, explanation: "名詞(定)＋形容詞(非定)で「〜は〜です」という文になります。" },
      { id: 4, type: "grammar", text: "月文字（al-の発音）はどれ？", options: ["الْقَمَر (al-qamar)", "الشَّمْس (al-shams)", "النُّور (al-nūr)", "الرَّجُل (al-rajul)"], correctIndex: 0, explanation: "Qamar（月）のQは月文字なので、al-はそのまま発音します。" },
      { id: 5, type: "grammar", text: "「美しい女性（特定）」", options: ["الْمَرْأَةُ الْجَمِيلَةُ", "مَرْأَةٌ جَمِيلَةٌ", "الْمَرْأَةُ جَمِيلَةٌ", "مَرْأَةُ الْجَمِيلَةُ"], correctIndex: 0, explanation: "限定修飾なので両方にal-をつけます。" },
      { id: 6, type: "grammar", text: "「学生は勤勉だ」", options: ["الطَّالِبُ مُجْتَهِدٌ", "الطَّالِبُ الْمُجْتَهِدُ", "طَالِبٌ مُجْتَهِدٌ", "طَالِبٌ الْمُجْتَهِدُ"], correctIndex: 0, explanation: "主語は定冠詞付き、述語は非限定です。" },
      { id: 7, type: "grammar", text: "【和訳】「الْبَابُ مَفْتُوحٌ」", options: ["ドアは開いています", "開いたドア", "そのドアと開くこと", "ドアを開けなさい"], correctIndex: 0, explanation: "名詞文です。" },
      { id: 8, type: "grammar", text: "太陽文字でないのは？", options: ["الْبَيْت", "السَّيَّارَة", "الزَّهْرَة", "الدَّار"], correctIndex: 0, explanation: "Baは月文字です。" },
      { id: 9, type: "grammar", text: "「その長いペン」", options: ["الْقَلَمُ الطَّوِيلُ", "قَلَمٌ طَوِيلٌ", "الْقَلَمُ طَوِيلٌ", "قَلَمُ الطَّوِيلِ"], correctIndex: 0, explanation: "限定修飾句です。" },
      { id: 10, type: "grammar", text: "「アッラーは慈悲深い」", options: ["اللهُ رَحِيمٌ", "اللهُ الرَّحِيمُ", "اللهَ رَحِيمًا", "اللهِ رَحِيمٍ"], correctIndex: 0, explanation: "名詞文の述語は非限定主格です。" }
    ],
    sentences: [{ arabic: "الْكِتَابُ جَدِيدٌ.", japanese: "その本は新しいです。" }]
  },
  {
    id: 202, title: "人称代名詞", category: "名詞・代名詞", level: "初級",
    contentVoweled: "أَنَا.", contentPlain: "أنا.",
    vocabList: [{ word: "أَنَا", meaning: "私" }],
    questions: [
      { id: 1, type: "grammar", text: "「あなたは学生です（男性）」", options: ["أَنْتَ طَالِبٌ", "أَنْتِ طَالِبٌ", "هُوَ طَالِبٌ", "نَحْنُ طَالِبٌ"], correctIndex: 0, explanation: "あなた（男性）は「أَنْتَ (Anta)」です。" },
      { id: 2, type: "grammar", text: "「彼らは先生たちです」", options: ["هُمْ مُدَرِّسُونَ", "هُنَّ مُدَرِّسُونَ", "أَنْتُمْ مُدَرِّسُونَ", "هُمَا مُدَرِّسُونَ"], correctIndex: 0, explanation: "彼ら（男性複数）は「هُمْ (Hum)」です。" },
      { id: 3, type: "grammar", text: "【意味】「نَحْنُ مِنَ الْيَابَانِ」", options: ["私たちは日本出身です", "私は日本出身です", "彼らは日本出身です", "あなたは日本出身です"], correctIndex: 0, explanation: "「نَحْنُ (Naḥnu)」は「私たち」です。" },
      { id: 4, type: "grammar", text: "「彼女は看護師です」", options: ["هِيَ مُمَرِّضَةٌ", "هُوَ مُمَرِّضَةٌ", "أَنْتِ مُمَرِّضَةٌ", "أَنَا مُمَرِّضَةٌ"], correctIndex: 0, explanation: "彼女は「Hiya」です。" },
      { id: 5, type: "grammar", text: "「あなたたち（男性）はエンジニアです」", options: ["أَنْتُمْ مُهَنْدِسُونَ", "أَنْتُنَّ مُهَنْدِسُونَ", "هُمْ مُهَنْدِسُونَ", "نَحْنُ مُهَنْدِسُونَ"], correctIndex: 0, explanation: "あなたたち（男）は「Antum」です。" },
      { id: 6, type: "grammar", text: "「彼ら2人は友達です」", options: ["هُمَا صَدِيقَانِ", "هُمْ صَدِيقَانِ", "أَنْتُمَا صَدِيقَانِ", "نَحْنُ صَدِيقَانِ"], correctIndex: 0, explanation: "彼ら2人（双数）は「Humā」です。" },
      { id: 7, type: "grammar", text: "【和訳】「أَنْتِ ذَكِيَّةٌ」", options: ["あなた（女）は賢いです", "あなた（男）は賢いです", "彼女は賢いです", "私は賢いです"], correctIndex: 0, explanation: "「Anti」は女性への「あなた」です。" },
      { id: 8, type: "grammar", text: "「彼女たち（女性）は先生です」", options: ["هُنَّ مُدَرِّسَاتٌ", "هُمْ مُدَرِّسَاتٌ", "أَنْتُنَّ مُدَرِّسَاتٌ", "نَحْنُ مُدَرِّسَاتٌ"], correctIndex: 0, explanation: "彼女ら（女性複数）は「Hunna」です。" },
      { id: 9, type: "grammar", text: "「あなたたち2人は兄弟ですか？」", options: ["هَلْ أَنْتُمَا أَخَوَانِ؟", "هَلْ هُمَا أَخَوَانِ؟", "هَلْ أَنْتُمْ أَخَوَانِ؟", "هَلْ نَحْنُ أَخَوَانِ؟"], correctIndex: 0, explanation: "あなたたち2人は「Antumā」です。" },
      { id: 10, type: "grammar", text: "「私と彼」", options: ["أَنَا وَهُوَ", "أَنَا وَهِيَ", "أَنْتَ وَهُوَ", "نَحْنُ وَهُوَ"], correctIndex: 0, explanation: "「Huwa」は彼です。" }
    ],
    sentences: [{ arabic: "أَنَا طَالِبٌ.", japanese: "私は学生です。" }]
  },
  {
    id: 501, title: "形容詞", category: "名詞・形容詞", level: "初級",
    contentVoweled: "طَالِبٌ مُجْتَهِدٌ.", contentPlain: "طالب مجتهد.",
    vocabList: [{ word: "مُجْتَهِد", meaning: "勤勉な" }],
    questions: [
      { id: 1, type: "grammar", text: "「新しい本（単数・男）」", options: ["كِتَابٌ جَدِيدٌ", "كِتَابٌ جَدِيدَةٌ", "كِتَابٌ جُدُدٌ", "كِتَابَانِ جَدِيدَانِ"], correctIndex: 0, explanation: "性・数を一致させます。" },
      { id: 2, type: "grammar", text: "「美しい町（単数・女）」", options: ["مَدِينَةٌ جَمِيلَةٌ", "مَدِينَةٌ جَمِيلٌ", "مَدِينَةٌ جَمِيلَاتٌ", "مَدِينَةٌ جَمِيلُونَ"], correctIndex: 0, explanation: "女性名詞には女性形形容詞（ة付き）を使います。" },
      { id: 3, type: "grammar", text: "「2人の背の高い男（双数・男）」", options: ["رَجُلَانِ طَوِيلَانِ", "رَجُلَانِ طَوِيلَيْنِ", "رَجُلَانِ طَوِيلٌ", "رَجُلَانِ طَوِيلَةٌ"], correctIndex: 0, explanation: "双数主格には「āni」を両方につけます。" },
      { id: 4, type: "grammar", text: "「小さな車たち（複数・物）」 ※注意", options: ["سَيَّارَاتٌ صَغِيرَةٌ", "سَيَّارَاتٌ صَغِيرَاتٌ", "سَيَّارَاتٌ صَغِيرُونَ", "سَيَّارَاتٌ صَغِيرٌ"], correctIndex: 0, explanation: "物の複数は「女性単数」で受けるため、形容詞は「Ṣaghīrah（女単）」になります。" },
      { id: 5, type: "grammar", text: "【和訳】「مُهَنْدِسُونَ مَاهِرُونَ」", options: ["熟練したエンジニアたち（男複数）", "熟練したエンジニア（単数）", "熟練したエンジニアたち（女複数）", "エンジニアは熟練している"], correctIndex: 0, explanation: "人間（男性）の複数なので、形容詞も男性複数形「ūna」になっています。" },
      { id: 6, type: "grammar", text: "「有名な女性の医者たち（複数・人）」", options: ["طَبِيبَاتٌ مَشْهُورَاتٌ", "طَبِيبَاتٌ مَشْهُورَةٌ", "طَبِيبَاتٌ مَشْهُورُونَ", "طَبِيبَاتٌ مَشْهُورٌ"], correctIndex: 0, explanation: "女性（人）の複数は、形容詞も女性複数形（āt）にします。" },
      { id: 7, type: "grammar", text: "「2つの大きな部屋（双数・女）」", options: ["غُرْفَتَانِ كَبِيرَتَانِ", "غُرْفَتَانِ كَبِيرَانِ", "غُرْفَتَيْنِ كَبِيرَتَيْنِ", "غُرْفَةٌ كَبِيرَةٌ"], correctIndex: 0, explanation: "女性双数主格は「tāni」で一致させます。" },
      { id: 8, type: "grammar", text: "【和訳】「رَجُلٌ كَرِيمٌ」", options: ["気前の良い男", "気前の良い女", "気前の良い人々", "男は気前が良い"], correctIndex: 0, explanation: "「Karīm」は気前の良い、高貴なという意味の男性単数形容詞です。" },
      { id: 9, type: "grammar", text: "「壊れたペンたち（複数・物）」", options: ["أَقْلَامٌ مَكْسُورَةٌ", "أَقْلَامٌ مَكْسُورُونَ", "أَقْلَامٌ مَكْسُورَاتٌ", "أَقْلَامٌ مَكْسُورٌ"], correctIndex: 0, explanation: "物の複数は「女性単数」扱いなので「Maksūrah」を使います。" },
      { id: 10, type: "grammar", text: "「冷たい水」", options: ["مَاءٌ بَارِدٌ", "مَاءٌ بَارِدَةٌ", "بَارِدٌ مَاءٌ", "الْمَاءُ بَارِدٌ"], correctIndex: 0, explanation: "水(Mā')は男性名詞です。" }
    ],
    sentences: [{ arabic: "هَذِهِ بُيُوتٌ قَدِيمَةٌ.", japanese: "これらは古い家々です。" }]
  },
  {
    id: 502, title: "イダーファ（所有）", category: "名詞・形容詞", level: "初級",
    contentVoweled: "بَابُ الْبَيْتِ.", contentPlain: "باب البيت.",
    vocabList: [{ word: "بَاب", meaning: "ドア" }],
    questions: [
      { id: 1, type: "grammar", text: "「学校の先生（The teacher of the school）」", options: ["مُدَرِّسُ الْمَدْرَسَةِ", "الْمُدَرِّسُ الْمَدْرَسَةِ", "مُدَرِّسٌ الْمَدْرَسَةِ", "مُدَرِّسُ مَدْرَسَةٌ"], correctIndex: 0, explanation: "所有される語（Mudarris）は冠詞なし、所有者（Madrasah）は属格（i）です。" },
      { id: 2, type: "grammar", text: "「アッラーの書（コーラン）」", options: ["كِتَابُ اللهِ", "الْكِتَابُ اللهِ", "كِتَابُ اللهَ", "كِتَابٌ اللهِ"], correctIndex: 0, explanation: "Kitābu Allāhi（属格）となります。" },
      { id: 3, type: "grammar", text: "【和訳】「سَيَّارَةُ الْمُدِيرِ」", options: ["部長の車", "車の部長", "その車と部長", "部長は車です"], correctIndex: 0, explanation: "Sayyārah (車) + Al-Mudīr (部長)。" },
      { id: 4, type: "grammar", text: "「社長の家のドアの鍵（二重イダーファ）」", options: ["مِفْتَاحُ بَابِ بَيْتِ الْمُدِيرِ", "مِفْتَاحُ الْبَابِ بَيْتِ الْمُدِيرِ", "الْمِفْتَاحُ بَابِ بَيْتِ الْمُدِيرِ", "مِفْتَاحُ بَابُ بَيْتُ الْمُدِيرِ"], correctIndex: 0, explanation: "最後の名詞だけに定冠詞がつき、中間はすべて属格になります。" },
      { id: 5, type: "grammar", text: "「私の本」 接尾代名詞", options: ["كِتَابِي", "كِتَابُكَ", "كِتَابُهُ", "كِتَابَنَا"], correctIndex: 0, explanation: "「-ī」は「私の」を表します。" },
      { id: 6, type: "grammar", text: "「あなたの名前（男性へ）」", options: ["اِسْمُكَ", "اِسْمُكِ", "اِسْمُهُ", "اِسْمُهَا"], correctIndex: 0, explanation: "「-ka」は「あなたの（男）」です。" },
      { id: 7, type: "grammar", text: "【和訳】「بَيْتُهَا」", options: ["彼女の家", "彼の家", "彼らの家", "私の家"], correctIndex: 0, explanation: "「-hā」は「彼女の」です。" },
      { id: 8, type: "grammar", text: "「神の使徒（預言者）」", options: ["رَسُولُ اللهِ", "الرَّسُولُ اللهِ", "رَسُولُ اللهَ", "رَسُولٌ اللهِ"], correctIndex: 0, explanation: "Rasūlullāh（ラスールッラー）です。" },
      { id: 9, type: "grammar", text: "「大学の学生たち（複数）」", options: ["طُلَّابُ الْجَامِعَةِ", "الطُّلَّابُ الْجَامِعَةِ", "طُلَّابٌ الْجَامِعَةِ", "طُلَّابُ جَامِعَةٌ"], correctIndex: 0, explanation: "所有される語が複数になってもルールは同じです。" },
      { id: 10, type: "grammar", text: "「私たちの先生」", options: ["مُدَرِّسُنَا", "مُدَرِّسُكُمْ", "مُدَرِّسُهُمْ", "مُدَرِّسِي"], correctIndex: 0, explanation: "「-nā」は「私たちの」です。" }
    ],
    sentences: [{ arabic: "قَلَمُ الطَّالِبِ مَكْسُورٌ.", japanese: "その学生のペンは壊れています。" }]
  },
  {
    id: 803, title: "数詞 (1-1000)", category: "名詞・形容詞", level: "初級",
    contentVoweled: "أَلْفُ لَيْلَةٍ.", contentPlain: "ألف ليلة.",
    vocabList: [{ word: "خَمْسَة", meaning: "5" }, { word: "أَلْف", meaning: "1000" }],
    questions: [
      { id: 1, type: "grammar", text: "「3人の男（Rajul/男）」性別ルール", options: ["ثَلَاثَةُ رِجَالٍ (Thalāthah)", "ثَلَاثُ رِجَالٍ (Thalāth)", "ثَلَاثَةُ رَجُلٍ", "ثَلَاثُ رَجُلٍ"], correctIndex: 0, explanation: "3-10の数字は、数える名詞と性別を逆にします。男なので数字は女性形(Thalāthah)です。名詞は複数属格です。" },
      { id: 2, type: "grammar", text: "「9台の車（Sayyārah/女）」", options: ["تِسْعُ سَيَّارَاتٍ (Tis')", "تِسْعَةُ سَيَّارَاتٍ (Tis'ah)", "تِسْعُ سَيَّارَةٍ", "تِسْعَةُ سَيَّارَةٍ"], correctIndex: 0, explanation: "車（女）なので、数字は男性形(Tis')を使います。" },
      { id: 3, type: "grammar", text: "「11個の星（Kawkab/男）」11-99のルール", options: ["أَحَدَ عَشَرَ كَوْكَبًا", "أَحَدَ عَشَرَ كَوْكَبٍ", "أَحَدَ عَشَرَ كَوْكَبٌ", "وَاحِدَ عَشَرَ كَوْكَبًا"], correctIndex: 0, explanation: "11-99の数詞の後の名詞は「単数・対格（an）」になります。" },
      { id: 4, type: "grammar", text: "「20リヤル」", options: ["عِشْرُونَ رِيَالًا", "عِشْرُونَ رِيَالٌ", "عِشْرُونَ رِيَالٍ", "عِشْرِينَ رِيَالٌ"], correctIndex: 0, explanation: "20, 30...90の後の名詞も「単数・対格（an）」です。" },
      { id: 5, type: "grammar", text: "「100人の男」100/1000のルール", options: ["مِائَةُ رَجُلٍ", "مِائَةُ رَجُلًا", "مِائَةُ رِجَالٍ", "مِائَةُ رَجُلٌ"], correctIndex: 0, explanation: "100と1000の後の名詞は「単数・属格（in）」になります。" },
      { id: 6, type: "grammar", text: "「1000夜（千夜一夜物語）」", options: ["أَلْفُ لَيْلَةٍ", "أَلْفُ لَيْلَةً", "أَلْفُ لَيَالٍ", "أَلْفُ لَيْلَةٌ"], correctIndex: 0, explanation: "1000の後の名詞は「単数・属格（in）」です。" },
      { id: 7, type: "grammar", text: "【和訳】「خَمْسَةَ عَشَرَ قَلَمًا」", options: ["15本のペン", "5本のペン", "50本のペン", "10本のペン"], correctIndex: 0, explanation: "Khamsata 'ashara は15です。" },
      { id: 8, type: "grammar", text: "「1冊の本」", options: ["كِتَابٌ وَاحِدٌ", "وَاحِدُ كِتَابٍ", "كِتَابٌ أَحَدٌ", "كِتَابٌ الْوَاحِدُ"], correctIndex: 0, explanation: "1と2は形容詞として名詞の後ろに置きます。" },
      { id: 9, type: "grammar", text: "「12ヶ月」", options: ["اِثْنَا عَشَرَ شَهْرًا", "اِثْنَانِ عَشَرَ شَهْرًا", "اِثْنَا عَشَرَ شَهْرٍ", "اِثْنَيْ عَشَرَ شَهْرًا"], correctIndex: 0, explanation: "12の「2」の部分は双数扱い（Nunが落ちる）で、名詞は単数対格です。" },
      { id: 10, type: "grammar", text: "「300（3つの100）」", options: ["ثَلَاثُمِائَةٍ", "ثَلَاثَةُ مِائَةٍ", "ثَلَاثُ مِائَةٍ", "ثَلَاثُونَ مِائَةٍ"], correctIndex: 0, explanation: "Thalāthu-mi'atin（300）のように繋げて書くのが一般的です。" }
    ],
    sentences: [{ arabic: "عِنْدِي سِتَّةُ كُتُبٍ.", japanese: "私は6冊の本を持っています。" }]
  },

  // ==========================================
  //  カテゴリー: 動詞・時制 (Verbs & Tenses)
  // ==========================================
  {
    id: 301, title: "過去形", category: "動詞・時制", level: "初級",
    contentVoweled: "كَتَبْتُ رِسَالَةً.", contentPlain: "كتبت رسالة.",
    vocabList: [{ word: "كَتَبَ", meaning: "書いた" }],
    questions: [
      { id: 1, type: "grammar", text: "「私は行きました」", options: ["ذَهَبْتُ (Dhahabtu)", "ذَهَبَ (Dhahaba)", "ذَهَبْتَ (Dhahabta)", "ذَهَبَتْ (Dhahabat)"], correctIndex: 0, explanation: "「私」の過去形語尾は「-tu」です。" },
      { id: 2, type: "grammar", text: "「彼女は勉強しました」", options: ["دَرَسَتْ (Darasat)", "دَرَسَ (Darasa)", "دَرَسْتِ (Darasti)", "دَرَسُوا (Darasū)"], correctIndex: 0, explanation: "「彼女」の過去形語尾は「-at」です。" },
      { id: 3, type: "grammar", text: "「彼らは食べました」", options: ["أَكَلُوا (Akalū)", "أَكَلْنَ (Akalna)", "أَكَلَا (Akalā)", "أَكَلْتُمْ (Akaltum)"], correctIndex: 0, explanation: "「彼ら（男）」の過去形語尾は「-ū」です。" },
      { id: 4, type: "grammar", text: "【和訳】「سَمِعْنَا الْخَبَرَ」", options: ["私たちはそのニュースを聞きました", "私はそのニュースを聞きました", "彼らはそのニュースを聞きました", "あなたはそのニュースを聞きましたか"], correctIndex: 0, explanation: "「Sami'nā」の「-nā」は「私たち」を表します。" },
      { id: 5, type: "grammar", text: "「あなた（男）は飲みました」", options: ["شَرِبْتَ", "شَرِبْتِ", "شَرِبْتُ", "شَرِبَ"], correctIndex: 0, explanation: "「-ta」は「あなた（男）」です。" },
      { id: 6, type: "grammar", text: "「彼ら2人は書きました」", options: ["كَتَبَا", "كَتَبُوا", "كَتَبَتَا", "كَتَبْنَ"], correctIndex: 0, explanation: "双数（彼ら2人）はアリフ「ā」をつけます。" },
      { id: 7, type: "grammar", text: "「あなたたち（女性複数）は座りました」", options: ["جَلَسْتُنَّ", "جَلَسْتُمْ", "جَلَسْنَ", "جَلَسْتِ"], correctIndex: 0, explanation: "女性複数の「あなたたち」は「-tunna」です。" },
      { id: 8, type: "grammar", text: "【和訳】「خَرَجَتْ مِنَ الْبَيْتِ」", options: ["彼女は家から出ました", "彼は家から出ました", "私は家から出ました", "あなたは家から出ましたか"], correctIndex: 0, explanation: "「Kharajat」は彼女の過去形です。" },
      { id: 9, type: "grammar", text: "「彼ら（女性複数）は理解しました」", options: ["فَهِمْنَ", "فَهِمُوا", "فَهِمْتُنَّ", "فَهِمَتَا"], correctIndex: 0, explanation: "「Hunna (彼女ら)」の過去形は「-na」です。" },
      { id: 10, type: "grammar", text: "「あなたたち（男性複数）は帰りました」", options: ["رَجَعْتُمْ", "رَجَعُوا", "رَجَعْنَا", "رَجَعْتُنَّ"], correctIndex: 0, explanation: "「-tum」は「あなたたち（男）」です。" }
    ],
    sentences: [{ arabic: "خَرَجَ مِنَ الْبَيْتِ.", japanese: "彼は家から出ました。" }]
  },
  {
    id: 302, title: "現在形", category: "動詞・時制", level: "初級",
    contentVoweled: "أَدْرُسُ الْعَرَبِيَّةَ.", contentPlain: "أدرس العربية.",
    vocabList: [{ word: "يَدْرُسُ", meaning: "勉強する" }],
    questions: [
      { id: 1, type: "grammar", text: "「彼は読みます」", options: ["يَقْرَأُ (Yaqra'u)", "تَقْرَأُ (Taqra'u)", "أَقْرَأُ (Aqra'u)", "نَقْرَأُ (Naqra'u)"], correctIndex: 0, explanation: "「彼」の現在形は「Ya-」で始まります。" },
      { id: 2, type: "grammar", text: "「あなたはどこに住んでいますか？（男性）」", options: ["أَيْنَ تَسْكُنُ؟", "أَيْنَ يَسْكُنُ؟", "أَيْنَ تَسْكُنِينَ؟", "أَيْنَ أَسْكُنُ؟"], correctIndex: 0, explanation: "「あなた（男）」は「Ta-」で始まります。" },
      { id: 3, type: "grammar", text: "「彼女は働いています」", options: ["تَعْمَلُ (Ta'malu)", "يَعْمَلُ (Ya'malu)", "أَعْمَلُ (A'malu)", "نَعْمَلُ (Na'malu)"], correctIndex: 0, explanation: "「彼女」の現在形は「Ta-」で始まります（あなた・男性と同じ形）。" },
      { id: 4, type: "grammar", text: "【和訳】「مَاذَا تَأْكُلِينَ؟」", options: ["あなた（女性）は何を食べていますか？", "あなた（男性）は何を食べていますか？", "彼女は何を食べていますか？", "彼らは何を食べていますか？"], correctIndex: 0, explanation: "「Ta'kulīna」は「あなた（女性）」への形です。" },
      { id: 5, type: "grammar", text: "「私たちは行きます」", options: ["نَذْهَبُ", "يَذْهَبُ", "تَذْهَبُ", "أَذْهَبُ"], correctIndex: 0, explanation: "「私たち」は「Na-」で始まります。" },
      { id: 6, type: "grammar", text: "「彼らは書いています」", options: ["يَكْتُبُونَ", "تَكْتُبُونَ", "يَكْتُبْنَ", "يَكْتُبَانِ"], correctIndex: 0, explanation: "「彼ら（男）」は「Ya- ... -ūna」の形です。" },
      { id: 7, type: "grammar", text: "「私は愛しています」", options: ["أُحِبُّ", "نُحِبُّ", "يُحِبُّ", "تُحِبُّ"], correctIndex: 0, explanation: "「私」は「A/U-」で始まります。" },
      { id: 8, type: "grammar", text: "【和訳】「يَدْرُسُونَ」", options: ["彼らは勉強している", "あなたたちは勉強している", "彼ら2人は勉強している", "彼女らは勉強している"], correctIndex: 0, explanation: "「Yadrusūna」は彼ら（男）です。" },
      { id: 9, type: "grammar", text: "「あなたたち（男性）は知っていますか？」", options: ["هَلْ تَعْرِفُونَ؟", "هَلْ يَعْرِفُونَ؟", "هَلْ تَعْرِفْنَ؟", "هَلْ نَعْرِفُ؟"], correctIndex: 0, explanation: "「あなたたち（男）」は「Ta- ... -ūna」です。" },
      { id: 10, type: "grammar", text: "「彼女たち（彼ら女性）は飲んでいます」", options: ["يَشْرَبْنَ", "تَشْرَبْنَ", "يَشْرَبُونَ", "تَشْرَبُ"], correctIndex: 0, explanation: "「彼ら（女）」は「Ya- ... -na」です。" }
    ],
    sentences: [{ arabic: "أَكْتُبُ بِالْقَلَمِ.", japanese: "私はペンで書きます。" }]
  },
  {
    id: 303, title: "未来形", category: "動詞・時制", level: "初級",
    contentVoweled: "سَأُسَافِرُ غَدًا.", contentPlain: "سأسافر غدا.",
    vocabList: [{ word: "سَـ", meaning: "〜するつもり" }],
    questions: [
      { id: 1, type: "grammar", text: "「私は明日行きます」", options: ["سَأَذْهَبُ غَدًا", "أَذْهَبُ غَدًا", "ذَهَبْتُ غَدًا", "لَنْ أَذْهَبَ غَدًا"], correctIndex: 0, explanation: "現在形に「Sa-」をつけると未来形になります。" },
      { id: 2, type: "grammar", text: "「彼は後で帰るでしょう（Sawfa使用）」", options: ["سَوْفَ يَرْجِعُ", "سَوْفَ يَرْجِعَ", "سَوْفَ رَجَعَ", "سَوْفَ ارْجِعْ"], correctIndex: 0, explanation: "「Sawfa」の後は現在形（主格/u）が来ます。" },
      { id: 3, type: "grammar", text: "【和訳】「سَنَكْتُبُ الرِّسَالَةَ」", options: ["私たちは手紙を書くつもりです", "私は手紙を書くつもりです", "彼らは手紙を書くつもりです", "あなたは手紙を書きますか"], correctIndex: 0, explanation: "「Sa-naktubu」は「私たち」の未来形です。" },
      { id: 4, type: "grammar", text: "「彼女は成功するでしょう」", options: ["سَتَنْجَحُ", "سَيَنْجَحُ", "سَتَنْجَحِينَ", "سَأَنْجَحُ"], correctIndex: 0, explanation: "彼女の現在形「Tanjaḥu」に「Sa」をつけます。" },
      { id: 5, type: "grammar", text: "「彼らはまもなく到着します」", options: ["سَيَصِلُونَ", "سَتَصِلُونَ", "سَيَصِلْنَ", "سَوَصَلُوا"], correctIndex: 0, explanation: "彼らの現在形「Yaṣilūna」に「Sa」をつけます。" },
      { id: 6, type: "grammar", text: "【和訳】「سَأَرَاكَ قَرِيبًا」", options: ["すぐにあなたに会うでしょう", "すぐに私を見てください", "すぐに彼に会いました", "すぐに彼女は見るでしょう"], correctIndex: 0, explanation: "「Arā」は「私は見る・会う」、「ka」は「あなたに」です。" },
      { id: 7, type: "grammar", text: "「あなた（男）は理解するでしょう」", options: ["سَتَفْهَمُ", "سَيَفْهَمُ", "سَتَفْهَمِينَ", "سَأَفْهَمُ"], correctIndex: 0, explanation: "あなたの現在形「Tafhamu」に「Sa」をつけます。" },
      { id: 8, type: "grammar", text: "「あなたはいつ旅行する予定ですか？」", options: ["مَتَى سَتُسَافِرُ؟", "مَتَى تُسَافِرُ؟", "مَتَى سَافَرْتَ؟", "أَيْنَ سَتُسَافِرُ؟"], correctIndex: 0, explanation: "未来の予定を聞くので「Sa」をつけます。" },
      { id: 9, type: "grammar", text: "「私たちは忘れないでしょう」", options: ["لَنْ نَنْسَى", "لَا نَنْسَى", "مَا نَسِينَا", "لَيْسَ نَنْسَى"], correctIndex: 0, explanation: "強い未来否定には「Lan」を使います。" },
      { id: 10, type: "grammar", text: "「神が望めば（未来の不確定なこと）」", options: ["إِنْ شَاءَ اللهُ", "مَا شَاءَ اللهُ", "بِسْمِ اللهِ", "سُبْحَانَ اللهِ"], correctIndex: 0, explanation: "「In shā'a Allāh」は未来のことについて話すときによく使われます。" }
    ],
    sentences: [{ arabic: "سَأَدْرُسُ فِي الْمَسَاءِ.", japanese: "私は夕方に勉強するつもりです。" }]
  },
  {
    id: 304, title: "否定文", category: "動詞・時制", level: "初級",
    contentVoweled: "لَا أُحِبُّ هَذَا.", contentPlain: "لا أحب هذا.",
    vocabList: [{ word: "لَا", meaning: "〜ない" }, { word: "مَا", meaning: "〜なかった" }],
    questions: [
      { id: 1, type: "grammar", text: "「私は知りません（現在）」", options: ["لَا أَعْرِفُ", "مَا عَرَفْتُ", "لَنْ أَعْرِفَ", "لَيْسَ أَعْرِفُ"], correctIndex: 0, explanation: "現在形の否定には「لَا (Lā)」を使います。" },
      { id: 2, type: "grammar", text: "「私は見ませんでした（過去）」", options: ["مَا رَأَيْتُ", "لَا أَرَى", "لَنْ أَرَى", "لَيْسَ أَرَى"], correctIndex: 0, explanation: "過去形の否定には一般的に「مَا (Mā)」を使います。" },
      { id: 3, type: "grammar", text: "「私は決して行きません（未来否定）」", options: ["لَنْ أَذْهَبَ", "لَا أَذْهَبُ", "مَا ذَهَبْتُ", "لَمْ أَذْهَبْ"], correctIndex: 0, explanation: "「لَنْ (Lan)」は未来の否定で、動詞の語尾が「a (Manṣūb)」になります。" },
      { id: 4, type: "grammar", text: "【和訳】「لَمْ يَأْكُلْ شَيْئًا」", options: ["彼は何も食べなかった（過去否定）", "彼は何も食べない（現在否定）", "彼は食べないだろう（未来否定）", "彼は食べるな（禁止）"], correctIndex: 0, explanation: "「Lam」+現在形短形は、過去の意味の否定になります。" },
      { id: 5, type: "grammar", text: "「私は学生ではありません」", options: ["لَسْتُ طَالِبًا", "لَا طَالِبٌ", "مَا طَالِبٌ", "لَمْ طَالِبٌ"], correctIndex: 0, explanation: "名詞文の否定には「Laysa」を使います。" },
      { id: 6, type: "grammar", text: "「彼らは理解していません」", options: ["لَا يَفْهَمُونَ", "مَا فَهِمُوا", "لَنْ يَفْهَمُوا", "لَمْ يَفْهَمُوا"], correctIndex: 0, explanation: "現在の状態（理解していない）の否定は「Lā」+ 現在形です。" },
      { id: 7, type: "grammar", text: "「彼女は来ませんでした」", options: ["مَا جَاءَتْ", "لَا تَجِيءُ", "لَنْ تَجِيءَ", "لَيْسَتْ جَاءَتْ"], correctIndex: 0, explanation: "過去の否定は「Mā」+ 過去形です。" },
      { id: 8, type: "grammar", text: "【和訳】「لَا أُحِبُّ الْقَهْوَةَ」", options: ["私はコーヒーが好きではありません", "私はコーヒーを飲みませんでした", "私はコーヒーを飲まないでしょう", "コーヒーはありません"], correctIndex: 0, explanation: "現在形「Uḥibbu（好む）」の否定です。" },
      { id: 9, type: "grammar", text: "「問題はありません」", options: ["لَا مُشْكِلَةَ", "مَا مُشْكِلَةٌ", "لَنْ مُشْكِلَةً", "لَمْ مُشْكِلَةً"], correctIndex: 0, explanation: "「Lā mushkilah」は「No problem」の定型表現です。" },
      { id: 10, type: "grammar", text: "「彼はまだ帰っていません」", options: ["لَمْ يَرْجِعْ بَعْدُ", "مَا رَجَعَ بَعْدُ", "لَا يَرْجِعُ بَعْدُ", "لَنْ يَرْجِعَ بَعْدُ"], correctIndex: 0, explanation: "「Lam」は「まだ〜していない」という意味でも使われます。" }
    ],
    sentences: [{ arabic: "مَا فَهِمْتُ الدَّرْسَ.", japanese: "私はその授業を理解しませんでした。" }]
  },
  {
    id: 305, title: "助動的動詞", category: "動詞・時制", level: "初級",
    contentVoweled: "كَانَ الْجَوُّ بَارِدًا.", contentPlain: "كان الجو باردا.",
    vocabList: [{ word: "كَانَ", meaning: "〜だった" }, { word: "لَيْسَ", meaning: "〜ではない" }],
    questions: [
      { id: 1, type: "grammar", text: "「私は学生ではありません」 (Laysa)", options: ["لَسْتُ طَالِبًا", "لَيْسَ طَالِبًا", "لَسْتَ طَالِبًا", "لَسْنَا طَالِبًا"], correctIndex: 0, explanation: "「私」の Laysa の活用形は「Lastu」です。" },
      { id: 2, type: "grammar", text: "「天気は良かった（過去）」 (Kana)", options: ["كَانَ الْجَوُّ جَمِيلًا", "كَانَ الْجَوُّ جَمِيلٌ", "إِنَّ الْجَوَّ جَمِيلٌ", "لَيْسَ الْجَوُّ جَمِيلًا"], correctIndex: 0, explanation: "Kanaの述語は対格（Fatḥah）になります。「Jamīlan」が正解。" },
      { id: 3, type: "grammar", text: "【意味】「لَيْسَتْ سَيَّارَةً」", options: ["（それは）車ではありません", "（彼は）車ではありません", "（私は）車ではありません", "車はありません"], correctIndex: 0, explanation: "「Laysat」は「彼女/それ(女)」の否定です。" },
      { id: 4, type: "grammar", text: "「私たちは忙しくありません」", options: ["لَسْنَا مَشْغُولِينَ", "لَسْتُمْ مَشْغُولِينَ", "لَيْسُوا مَشْغُولِينَ", "لَسْتُ مَشْغُولًا"], correctIndex: 0, explanation: "「Lasnā」は「私たち」の否定です。" },
      { id: 5, type: "grammar", text: "「彼は金持ちだった」", options: ["كَانَ غَنِيًّا", "كَانَ غَنِيٌّ", "كَانَ غَنِيٍّ", "كُنْتُ غَنِيًّا"], correctIndex: 0, explanation: "「Kāna」の述語は対格（an）です。" },
      { id: 6, type: "grammar", text: "「私は先生になりたい（〜になりたい）」", options: ["أُرِيدُ أَنْ أَكُونَ مُدَرِّسًا", "أُرِيدُ أَنْ كَانَ مُدَرِّسًا", "أُرِيدُ أَنْ يَكُونَ مُدَرِّسًا", "أُرِيدُ أَنْ كُنْتُ مُدَرِّسًا"], correctIndex: 0, explanation: "「An」の後は接続法（Akūna）になります。" },
      { id: 7, type: "grammar", text: "【和訳】「كُنْتُ مَرِيضًا」", options: ["私は病気でした", "あなたは病気でした", "彼は病気でした", "私は病気です"], correctIndex: 0, explanation: "「Kuntu」は「私は〜だった」です。" },
      { id: 8, type: "grammar", text: "「彼らは幸せではありません」", options: ["لَيْسُوا سُعَدَاءَ", "لَيْسَ سُعَدَاءُ", "لَسْنَا سُعَدَاءَ", "لَسْتُمْ سُعَدَاءَ"], correctIndex: 0, explanation: "「彼ら」のLaysaは「Laysū」です。" },
      { id: 9, type: "grammar", text: "「ドアは開いていた」", options: ["كَانَ الْبَابُ مَفْتُوحًا", "كَانَ الْبَابُ مَفْتُوحٌ", "كَانَتِ الْبَابُ مَفْتُوحًا", "كَانَ الْبَابَ مَفْتُوحًا"], correctIndex: 0, explanation: "ドア（Bāb）は男性名詞なので「Kāna」です。" },
      { id: 10, type: "grammar", text: "「彼女はここにいなかった」", options: ["لَمْ تَكُنْ هُنَا", "مَا كَانَتْ هُنَا", "لَيْسَتْ هُنَا", "لَنْ تَكُونَ هُنَا"], correctIndex: 1, explanation: "過去の否定は「Mā kānat」または「Lam takun」です。選択肢では「Mā kānat」が自然な過去形否定です。" }
    ],
    sentences: [{ arabic: "لَسْتُ مَشْغُولًا.", japanese: "私は忙しくありません。" }]
  },

  // ==========================================
  //  カテゴリー: 構文・その他 (Syntax & Others)
  // ==========================================
  {
    id: 801, title: "命令・禁止", category: "構文・その他", level: "初級",
    contentVoweled: "اُدْخُلْ وَلَا تَخْرُجْ.", contentPlain: "ادخل ولا تخرج.",
    vocabList: [{ word: "اُدْخُلْ", meaning: "入れ" }, { word: "لَا", meaning: "〜するな" }],
    questions: [
      { id: 1, type: "grammar", text: "「座りなさい（男性へ）」", options: ["اِجْلِسْ (Ijlis)", "اِجْلِسِي (Ijlisī)", "تَجْلِسُ (Tajlisu)", "اُجْلُسْ (Ujlus)"], correctIndex: 0, explanation: "Jalasa (i) 型の命令は「Ijlis」です。" },
      { id: 2, type: "grammar", text: "「行くな（男性へ・禁止）」", options: ["لَا تَذْهَبْ (Lā tadhhab)", "لَا تَذْهَبُ (Lā tadhhabu)", "لَا تَذْهَبِي (Lā tadhhabī)", "مَا تَذْهَبْ (Mā tadhhab)"], correctIndex: 0, explanation: "禁止の「Lā」の後は語尾がスクーン（短形）になります。" },
      { id: 3, type: "grammar", text: "「読みなさい（女性へ）」", options: ["اِقْرَئِي (Iqra'ī)", "اِقْرَأْ (Iqra')", "تَقْرَئِينَ (Taqra'īna)", "اُقْرُئِي (Uqru'ī)"], correctIndex: 0, explanation: "女性への命令は語尾に「ī」をつけます。" },
      { id: 4, type: "grammar", text: "【和訳】「اُدْخُلُوا」", options: ["入りなさい（複数男性）", "入りなさい（単数男性）", "入りなさい（単数女性）", "入るな（複数男性）"], correctIndex: 0, explanation: "「-ū」は複数男性への命令語尾です。" },
      { id: 5, type: "grammar", text: "「これを飲みなさい（男性へ）」", options: ["اِشْرَبْ هَذَا", "اُشْرُبْ هَذَا", "شَرِبَ هَذَا", "تَشْرَبُ هَذَا"], correctIndex: 0, explanation: "Shariba (a) 型の命令は「Ishrab」です。" },
      { id: 6, type: "grammar", text: "「悲しむな（La Tahzan）」", options: ["لَا تَحْزَنْ", "لَا تَحْزَنُ", "مَا تَحْزَنْ", "لَنْ تَحْزَنَ"], correctIndex: 0, explanation: "禁止形は語尾がスクーンになります。" },
      { id: 7, type: "grammar", text: "「書きなさい（男性へ）」", options: ["اُكْتُبْ", "اِكْتُبْ", "كَتَبَ", "يَكْتُبُ"], correctIndex: 0, explanation: "Kataba (u) 型の命令は「Uktub」です。" },
      { id: 8, type: "grammar", text: "【和訳】「لَا تَنْسَ」", options: ["忘れるな", "忘れない", "忘れませんでした", "忘れないでしょう"], correctIndex: 0, explanation: "語尾の母音が脱落する（Tansā -> Tansa）のが弱文字動詞の禁止形の特徴です。" },
      { id: 9, type: "grammar", text: "「ここで待ちなさい（女性へ）」", options: ["اِنْتَظِرِي هُنَا", "اِنْتَظِرْ هُنَا", "اِنْتَظِرُوا هُنَا", "تَنْتَظِرِينَ هُنَا"], correctIndex: 0, explanation: "女性への命令は「-ī」をつけます。" },
      { id: 10, type: "grammar", text: "「アッラーを崇めなさい（複数）」", options: ["اُعْبُدُوا اللهَ", "اُعْبُدْ اللهَ", "يَعْبُدُونَ اللهَ", "عَبَدُوا اللهَ"], correctIndex: 0, explanation: "Abada (u) 型の複数命令は「U'budū」です。" }
    ],
    sentences: [{ arabic: "اِفْتَحِ الْبَابَ.", japanese: "ドアを開けなさい。" }]
  },
  {
    id: 802, title: "前置詞", category: "構文・その他", level: "初級",
    contentVoweled: "فِي الْغُرْفَةِ.", contentPlain: "في الغرفة.",
    vocabList: [{ word: "فِي", meaning: "中に" }, { word: "عَلَى", meaning: "上に" }],
    questions: [
      { id: 1, type: "grammar", text: "「机の上に」", options: ["عَلَى الْمَكْتَبِ (Maktabi)", "عَلَى الْمَكْتَبَ (Maktaba)", "عَلَى الْمَكْتَبُ (Maktabu)", "فِي الْمَكْتَبِ (Fī)"], correctIndex: 0, explanation: "前置詞（Ala）の後の名詞は属格（i）になります。" },
      { id: 2, type: "grammar", text: "「日本から」", options: ["مِنَ الْيَابَانِ", "إِلَى الْيَابَانِ", "فِي الْيَابَانِ", "عَنِ الْيَابَانِ"], correctIndex: 0, explanation: "「から」は「Min」です。" },
      { id: 3, type: "grammar", text: "【和訳】「ذَهَبْتُ إِلَى الْمَكْتَبَةِ」", options: ["私は図書館へ行きました", "私は図書館から来ました", "私は図書館にいます", "私は図書館が好きです"], correctIndex: 0, explanation: "「Ilā」は「〜へ」という方向を表します。" },
      { id: 4, type: "grammar", text: "「家の中に」", options: ["فِي الْبَيْتِ", "فِي الْبَيْتَ", "فِي الْبَيْتُ", "إِلَى الْبَيْتِ"], correctIndex: 0, explanation: "「Fī」は「〜の中に」です。" },
      { id: 5, type: "grammar", text: "「先生について（About）」", options: ["عَنِ الْمُدَرِّسِ", "مِنَ الْمُدَرِّسِ", "عَلَى الْمُدَرِّسِ", "فِي الْمُدَرِّسِ"], correctIndex: 0, explanation: "「An」は「〜について」という意味があります。" },
      { id: 6, type: "grammar", text: "「ペンで（道具）」", options: ["بِالْقَلَمِ", "فِي الْقَلَمِ", "مِنَ الْقَلَمِ", "عَلَى الْقَلَمِ"], correctIndex: 0, explanation: "「Bi」は手段・道具を表します。" },
      { id: 7, type: "grammar", text: "【和訳】「الْكِتَابُ لِمُحَمَّدٍ」", options: ["その本はムハンマドのものです", "その本はムハンマドです", "その本はムハンマドと一緒です", "ムハンマドは本を持っています"], correctIndex: 0, explanation: "「Li」は所有を表します。" },
      { id: 8, type: "grammar", text: "「月のように（比喩）」", options: ["كَالْقَمَرِ", "فِي الْقَمَرِ", "بِالْقَمَرِ", "مِنَ الْقَمَرِ"], correctIndex: 0, explanation: "「Ka」は「〜のように」という意味の前置詞です。" },
      { id: 9, type: "grammar", text: "「夜明けまで」", options: ["حَتَّى الْفَجْرِ", "مِنَ الْفَجْرِ", "عَنِ الْفَجْرِ", "فِي الْفَجْرِ"], correctIndex: 0, explanation: "「Hattā」は「〜まで」を表します。" },
      { id: 10, type: "grammar", text: "「アッラーに誓って」", options: ["وَاللهِ", "فِي اللهِ", "إِلَى اللهِ", "عَنِ اللهِ"], correctIndex: 0, explanation: "「Wa」は誓いの前置詞としても使われ、後の名詞を属格（Wallāhi）にします。" }
    ],
    sentences: [{ arabic: "الْكِتَابُ فِي الْحَقِيبَةِ.", japanese: "本はカバンの中にあります。" }]
  },
  {
    id: 503, title: "副詞的表現", category: "構文・その他", level: "初級",
    contentVoweled: "شُكْرًا جَزِيلًا.", contentPlain: "شكرا جزيلا.",
    vocabList: [{ word: "جِدًّا", meaning: "とても" }, { word: "أَيْضًا", meaning: "〜も" }],
    questions: [
      { id: 1, type: "grammar", text: "「とても大きい」", options: ["كَبِيرٌ جِدًّا", "كَبِيرٌ كَثِيرًا", "جِدًّا كَبِيرٌ", "كَبِيرٌ فَقَطْ"], correctIndex: 0, explanation: "「Jiddan (とても)」は形容詞の後に置きます。" },
      { id: 2, type: "grammar", text: "「私も (Me too)」", options: ["أَنَا أَيْضًا", "أَنَا فَقَطْ", "أَنَا جِدًّا", "أَنَا هُنَا"], correctIndex: 0, explanation: "「Ayḍan」は「〜もまた」という意味です。" },
      { id: 3, type: "grammar", text: "【和訳】「أَهْلًا وَسَهْلًا」", options: ["ようこそ", "ありがとう", "ごめんなさい", "さようなら"], correctIndex: 0, explanation: "定型的な歓迎の挨拶です。" },
      { id: 4, type: "grammar", text: "「少しだけ」", options: ["قَلِيلًا", "كَثِيرًا", "جِدًّا", "دَائِمًا"], correctIndex: 0, explanation: "「Qalīlan」は「少し」です。" },
      { id: 5, type: "grammar", text: "「いつも (Always)」", options: ["دَائِمًا", "أَبَدًا", "أَحْيَانًا", "غَالِبًا"], correctIndex: 0, explanation: "「Dā'iman」は「いつも」です。" },
      { id: 6, type: "grammar", text: "「たぶん (Maybe)」", options: ["رُبَّمَا", "أَكِيدٌ", "بِالتَّأْكِيدِ", "طَبْعًا"], correctIndex: 0, explanation: "「Rubbamā」は「たぶん」です。" },
      { id: 7, type: "grammar", text: "「本当に (Really)」", options: ["حَقًّا", "صِدْقًا", "جِدًّا", "فِعْلًا"], correctIndex: 0, explanation: "「Ḥaqqan」は「本当に」です。" },
      { id: 8, type: "grammar", text: "「今日」", options: ["الْيَوْمَ", "أَمْسِ", "غَدًا", "الْآنَ"], correctIndex: 0, explanation: "「Al-yawma」は「今日」です。" },
      { id: 9, type: "grammar", text: "「ゆっくりと」", options: ["بِبُطْءٍ", "بِسُرْعَةٍ", "بِصَوْتٍ عَالٍ", "بِهُدُوءٍ"], correctIndex: 0, explanation: "「Bi-buṭ'in」は「ゆっくり」です。" },
      { id: 10, type: "grammar", text: "「速く」", options: ["بِسُرْعَةٍ", "بِبُطْءٍ", "قَلِيلًا", "كَثِيرًا"], correctIndex: 0, explanation: "「Bi-sur'atin」は「速く」です。" }
    ],
    sentences: [{ arabic: "هَذَا جَمِيلٌ جِدًّا.", japanese: "これはとても美しいです。" }]
  },
  {
    id: 504, title: "例外 (Illa)", category: "構文・その他", level: "初級",
    contentVoweled: "لَا إِلَهَ إِلَّا اللهُ.", contentPlain: "لا إله إلا الله.",
    vocabList: [{ word: "إِلَّا", meaning: "〜を除いて" }],
    questions: [
      { id: 1, type: "grammar", text: "「アッラーの他に神はなし（シャハーダ）」", options: ["لَا إِلَهَ إِلَّا اللهُ", "لَا إِلَهَ وَاللهُ", "لَا إِلَهَ مَعَ اللهِ", "لَا إِلَهَ غَيْرُ اللهِ"], correctIndex: 0, explanation: "「Illa (〜を除いて)」を使った最も有名なフレーズです。" },
      { id: 2, type: "grammar", text: "「学生たちは来たが、ザイドだけ来なかった」", options: ["جَاءَ الطُّلَّابُ إِلَّا زَيْدًا", "جَاءَ الطُّلَّابُ إِلَّا زَيْدٍ", "جَاءَ الطُّلَّابُ إِلَّا زَيْدٌ", "جَاءَ الطُّلَّابُ مَعَ زَيْدٍ"], correctIndex: 0, explanation: "Illaの後の名詞は原則として対格（Zaydan）になります。" },
      { id: 3, type: "grammar", text: "【意味】「مَا أَكَلْتُ شَيْئًا إِلَّا تُفَّاحَةً」", options: ["私はリンゴ以外何も食べなかった", "私はリンゴだけ食べた", "私はリンゴも食べた", "私はリンゴを食べなかった"], correctIndex: 0, explanation: "直訳は「リンゴを除いて何も食べなかった」＝「リンゴだけ食べた」です。" },
      { id: 4, type: "grammar", text: "「金曜日以外は毎日働く」", options: ["أَعْمَلُ كُلَّ يَوْمٍ إِلَّا الْجُمُعَةَ", "أَعْمَلُ كُلَّ يَوْمٍ وَالْجُمُعَةَ", "أَعْمَلُ كُلَّ يَوْمٍ مَعَ الْجُمُعَةِ", "أَعْمَلُ الْجُمُعَةَ فَقَطْ"], correctIndex: 0, explanation: "「Illa al-jumu'ata」で「金曜日を除いて」となります。" },
      { id: 5, type: "grammar", text: "「彼以外誰も知らない」", options: ["لَا يَعْرِفُ أَحَدٌ إِلَّا هُوَ", "لَا يَعْرِفُ أَحَدٌ إِلَّا إِيَّاهُ", "لَا يَعْرِفُ أَحَدٌ وَهُوَ", "لَا يَعْرِفُ أَحَدٌ مَعَهُ"], correctIndex: 1, explanation: "代名詞の場合は「Illa iyyāhu」の形が一般的です（または主格のIlla huwa）。" },
      { id: 6, type: "grammar", text: "【和訳】「لَيْسَ فِي الْبَيْتِ إِلَّا عَلِيٌّ」", options: ["家にはアリしかいない", "家にはアリ以外がいる", "家にはアリもいない", "アリは家にいない"], correctIndex: 0, explanation: "「Laysa... Illa...」で「〜しかいない」という限定表現になります。" },
      { id: 7, type: "grammar", text: "「一つを除いて全てのドアが開いている」", options: ["كُلُّ الْأَبْوَابِ مَفْتُوحَةٌ إِلَّا بَابًا وَاحِدًا", "إِلَّا بَابٌ وَاحِدٌ", "إِلَّا بَابٍ وَاحِدٍ", "مَعَ بَابٍ وَاحِدٍ"], correctIndex: 0, explanation: "Illaの後は対格「Bāban wāḥidan」です。" },
      { id: 8, type: "grammar", text: "「彼らは皆帰ったが、私だけ残った」", options: ["رَجَعُوا جَمِيعًا إِلَّا أَنَا", "إِلَّا لِي", "إِلَّا بِي", "إِلَّا مَعِي"], correctIndex: 0, explanation: "「Illa ana」または「Illa iyyāya」を使います。" },
      { id: 9, type: "grammar", text: "「水以外は何も飲みません」", options: ["لَا أَشْرَبُ شَيْئًا إِلَّا الْمَاءَ", "لَا أَشْرَبُ الْمَاءَ", "أَشْرَبُ كُلَّ شَيْءٍ", "أَشْرَبُ الْمَاءَ وَالشَّايَ"], correctIndex: 0, explanation: "否定文 + Illa で「〜しか〜ない」を表します。" },
      { id: 10, type: "grammar", text: "「アハマド以外は合格した」", options: ["نَجَحَ الْجَمِيعُ إِلَّا أَحْمَدَ", "إِلَّا أَحْمَدُ", "إِلَّا أَحْمَدِ", "مَعَ أَحْمَدَ"], correctIndex: 0, explanation: "Aḥmadaは非限定変化名詞なので対格でもFatḥahです。" }
    ],
    sentences: [{ arabic: "لَا إِلَهَ إِلَّا اللهُ.", japanese: "アッラーの他に神はなし。" }]
  },
  {
    id: 505, title: "仮定・条件", category: "構文・その他", level: "初級",
    contentVoweled: "إِنْ تَذْهَبْ أَذْهَبْ.", contentPlain: "إن تذهب أذهب.",
    vocabList: [{ word: "إِنْ", meaning: "もし〜なら" }, { word: "لَوْ", meaning: "もし〜だったら" }],
    questions: [
      { id: 1, type: "grammar", text: "「もしあなたが勉強すれば、成功するでしょう」", options: ["إِنْ تَدْرُسْ تَنْجَحْ", "إِنْ تَدْرُسُ تَنْجَحُ", "إِذَا تَدْرُسُ تَنْجَحُ", "لَوْ تَدْرُسْ تَنْجَحْ"], correctIndex: 0, explanation: "In (もし)を使うと、動詞は短形（スクーン）になります。" },
      { id: 2, type: "grammar", text: "「もし私が金持ちだったら（実際は違う）」", options: ["لَوْ كُنْتُ غَنِيًّا", "إِنْ كُنْتُ غَنِيًّا", "إِذَا كُنْتُ غَنِيًّا", "مَتَى كُنْتُ غَنِيًّا"], correctIndex: 0, explanation: "ありえない仮定（反実仮想）には「Law」を使います。" },
      { id: 3, type: "grammar", text: "【意味】「إِذَا جَاءَ نَصْرُ اللهِ」", options: ["アッラーの助けが来る時（もし来たら）", "アッラーの助けが来た", "アッラーの助けは来る", "アッラーの助けを待つ"], correctIndex: 0, explanation: "Idha は「〜する時、もし〜なら」という未来の条件を表します。" },
      { id: 4, type: "grammar", text: "「もし彼が行くなら、私も行きます」", options: ["إِنْ يَذْهَبْ أَذْهَبْ", "إِنْ يَذْهَبُ أَذْهَبُ", "لَوْ يَذْهَبُ أَذْهَبْ", "إِذَا يَذْهَبْ أَذْهَبُ"], correctIndex: 0, explanation: "In + 短形 + 短形 の形です。" },
      { id: 5, type: "grammar", text: "「もしあなたが知っていたら（過去の仮定）」", options: ["لَوْ كُنْتَ تَعْلَمُ", "إِنْ كُنْتَ تَعْلَمُ", "إِذَا كُنْتَ تَعْلَمُ", "مَتَى كُنْتَ تَعْلَمُ"], correctIndex: 0, explanation: "「Law」は「もし〜だったら（実際はそうでない）」に使われます。" },
      { id: 6, type: "grammar", text: "「あなたが誰であれ」", options: ["مَهْمَا كُنْتَ", "أَيْنَ كُنْتَ", "مَتَى كُنْتَ", "مَنْ كُنْتَ"], correctIndex: 0, explanation: "「Mahmā」は「たとえ〜でも、何であれ」を表します。" },
      { id: 7, type: "grammar", text: "【和訳】「مَنْ يَزْرَعْ يَحْصُدْ」", options: ["種を蒔く者は刈り取る（自業自得）", "種を蒔く人は疲れる", "収穫する人は種を蒔く", "農業は大切だ"], correctIndex: 0, explanation: "条件文を使ったことわざです。「Man（〜する人）」も条件の意味を持ちます。" },
      { id: 8, type: "grammar", text: "「もし雨が降ったら」", options: ["إِذَا نَزَلَ الْمَطَرُ", "لَوْ نَزَلَ الْمَطَرُ", "إِنْ نَزَلَ الْمَطَرُ", "مَتَى نَزَلَ الْمَطَرُ"], correctIndex: 0, explanation: "「Idha」+ 過去形は「〜したら（未来）」を表します。" },
      { id: 9, type: "grammar", text: "「もし時間があれば」", options: ["إِنْ كَانَ عِنْدَكَ وَقْتٌ", "لَوْ كَانَ عِنْدَكَ وَقْتٌ", "إِذَا كَانَ عِنْدَكَ وَقْتٌ", "لَيْسَ عِنْدَكَ وَقْتٌ"], correctIndex: 0, explanation: "In + Kāna で「もし〜なら」を表せます。" },
      { id: 10, type: "grammar", text: "「あなたがどこへ行こうとも」", options: ["أَيْنَمَا تَذْهَبْ", "كَيْفَمَا تَذْهَبْ", "حَيْثُمَا تَذْهَبْ", "مَهْمَا تَذْهَبْ"], correctIndex: 0, explanation: "「Aynamā」は「どこへ〜しようとも」です。" }
    ],
    sentences: [{ arabic: "إِنْ تَأْكُلْ كَثِيرًا تَمْرَضْ.", japanese: "もし沢山食べたら、病気になります。" }]
  },
  {
    id: 403, title: "派生動詞", category: "動詞・応用", level: "初級",
    contentVoweled: "عَلَّمَ الْمُدَرِّسُ الطَّالِبَ.", contentPlain: "علم المدرس الطالب.",
    vocabList: [{ word: "عَلَّمَ", meaning: "教える(II形)" }, { word: "دَرَسَ", meaning: "学ぶ(I形)" }],
    questions: [
      { id: 1, type: "grammar", text: "「教える（Allama）」は何形？（シャッダがある）", options: ["第2形", "第1形", "第3形", "第4形"], correctIndex: 0, explanation: "真ん中の文字にシャッダ（ッ）があるのは第2形の特徴です。" },
      { id: 2, type: "grammar", text: "「会う・面会する（Qābala）」は何形？（アリフがある）", options: ["第3形", "第2形", "第5形", "第6形"], correctIndex: 0, explanation: "最初の文字の後にアリフがあるのは第3形の特徴です。" },
      { id: 3, type: "grammar", text: "【意味】「تَكَلَّمَ بِالْعَرَبِيَّةِ」", options: ["彼はアラビア語を話した", "彼はアラビア語を教えた", "彼はアラビア語を書いた", "彼はアラビア語を学んだ"], correctIndex: 0, explanation: "「Takallama」は第5形で「話す」という意味です。" },
      { id: 4, type: "grammar", text: "「準備する（Ist'adda）」は何形？（Ist-で始まる）", options: ["第10形", "第8形", "第9形", "第7形"], correctIndex: 0, explanation: "「Ist-」で始まるのは第10形の特徴です。" },
      { id: 5, type: "grammar", text: "「協力する（Ta'āwanū）」は何形？", options: ["第6形", "第5形", "第3形", "第4形"], correctIndex: 0, explanation: "「Ta- ... ā ...」のパターンは第6形（相互作用）です。" },
      { id: 6, type: "grammar", text: "「壊れる（Inkasara）」は何形？", options: ["第7形", "第5形", "第8形", "第2形"], correctIndex: 0, explanation: "「In-」で始まる（受身・反射）のは第7形です。" },
      { id: 7, type: "grammar", text: "「待つ（Intaẓara）」は何形？", options: ["第8形", "第7形", "第9形", "第10形"], correctIndex: 0, explanation: "「I-t-」が挟まる（If-ta-'a-la）のは第8形です。" },
      { id: 8, type: "grammar", text: "「送る（Arsala）」は何形？", options: ["第4形", "第2形", "第3形", "第1形"], correctIndex: 0, explanation: "「A-」で始まるのは第4形です。" },
      { id: 9, type: "grammar", text: "【和訳】「اِسْتَقْبَلَ الضَّيْفَ」", options: ["彼は客を迎えた", "彼は客になった", "彼は客を送った", "彼は客を待った"], correctIndex: 0, explanation: "Istaqbala（第10形）は「迎える、受信する」です。" },
      { id: 10, type: "grammar", text: "「赤くなる（Iḥmarra）」は何形？", options: ["第9形", "第2形", "第7形", "第8形"], correctIndex: 0, explanation: "色や身体的欠陥を表す第9形です。" }
    ],
    sentences: [{ arabic: "سَافَرَ إِلَى مِصْرَ.", japanese: "彼はエジプトへ旅行しました（第3形）。" }]
  },
  {
    id: 5021, title: "接続詞", category: "構文・その他", level: "初級",
    contentVoweled: "أَنَا وَأَنْتَ.", contentPlain: "أنا وأنت.",
    vocabList: [{ word: "وَ", meaning: "〜と" }, { word: "لَكِنْ", meaning: "しかし" }],
    questions: [
      { id: 1, type: "grammar", text: "「お茶とコーヒー」", options: ["شَايٌ وَقَهْوَةٌ", "شَايٌ أَوْ قَهْوَةٌ", "شَايٌ ثُمَّ قَهْوَةٌ", "شَايٌ فَقَهْوَةٌ"], correctIndex: 0, explanation: "「と (and)」は「Wa」です。" },
      { id: 2, type: "grammar", text: "「貧しいが、幸せだ」", options: ["فَقِيرٌ وَلَكِنْ سَعِيدٌ", "فَقِيرٌ أَوْ سَعِيدٌ", "فَقِيرٌ فَسَعِيدٌ", "فَقِيرٌ ثُمَّ سَعِيدٌ"], correctIndex: 0, explanation: "「しかし (but)」は「Lākin」を使います。" },
      { id: 3, type: "grammar", text: "【意味】「دَخَلَ الْمُدَرِّسُ ثُمَّ الطَّالِبُ」", options: ["先生が入って、それから学生が入った", "先生と学生が同時に入った", "先生か学生が入った", "先生が入ったが学生は入らなかった"], correctIndex: 0, explanation: "「Thumma」は順序（〜して、それから）を表します。" },
      { id: 4, type: "grammar", text: "「お茶かコーヒー」", options: ["شَايٌ أَوْ قَهْوَةٌ", "شَايٌ وَقَهْوَةٌ", "شَايٌ بَلْ قَهْوَةٌ", "شَايٌ إِذَنْ قَهْوَةٌ"], correctIndex: 0, explanation: "「または (or)」は「Aw」です。" },
      { id: 5, type: "grammar", text: "「彼が入った、するとすぐ私が出た」", options: ["دَخَلَ فَخَرَجْتُ", "دَخَلَ ثُمَّ خَرَجْتُ", "دَخَلَ وَخَرَجْتُ", "دَخَلَ أَوْ خَرَجْتُ"], correctIndex: 0, explanation: "「Fa」は「〜してすぐに（即時性）」を表します。" },
      { id: 6, type: "grammar", text: "「〜だから（理由）」", options: ["لِأَنَّ", "أَنَّ", "إِنَّ", "لَعَلَّ"], correctIndex: 0, explanation: "「Li-anna」は「Because」です。" },
      { id: 7, type: "grammar", text: "「〜まで（Even/Until）」", options: ["حَتَّى", "إِلَى", "مِنْ", "عَنْ"], correctIndex: 0, explanation: "「Hattā」は「〜まで、〜さえも」を表します。" },
      { id: 8, type: "grammar", text: "「〜ではなくて〜だ（Not A but B）」", options: ["لَيْسَ هَذَا بَلْ ذَاكَ", "لَيْسَ هَذَا وَذَاكَ", "لَيْسَ هَذَا أَوْ ذَاكَ", "لَيْسَ هَذَا ثُمَّ ذَاكَ"], correctIndex: 0, explanation: "「Bal」は訂正（いや〜だ）を表します。" },
      { id: 9, type: "grammar", text: "「それゆえに（Therefore）」", options: ["لِذَلِكَ", "لِأَنَّ", "لَكِنْ", "بَلْ"], correctIndex: 0, explanation: "「Li-dhālika」は「そのため、だから」です。" },
      { id: 10, type: "grammar", text: "「〜の前に」", options: ["قَبْلَ أَنْ", "بَعْدَ أَنْ", "مُنْذُ أَنْ", "حِينَ"], correctIndex: 0, explanation: "「Qabla an」+ 動詞 で「〜する前に」となります。" }
    ],
    sentences: [{ arabic: "أُحِبُّ الشَّايَ وَالْقَهْوَةَ.", japanese: "私はお茶とコーヒーが好きです。" }]
  },
  {
    id: 803, title: "数詞 (1-1000)", category: "構文・その他", level: "初級",
    contentVoweled: "أَلْفُ لَيْلَةٍ.", contentPlain: "ألف ليلة.",
    vocabList: [{ word: "خَمْسَة", meaning: "5" }, { word: "أَلْف", meaning: "1000" }],
    questions: [
      { id: 1, type: "grammar", text: "「3人の男（Rajul/男）」性別ルール", options: ["ثَلَاثَةُ رِجَالٍ (Thalāthah)", "ثَلَاثُ رِجَالٍ (Thalāth)", "ثَلَاثَةُ رَجُلٍ", "ثَلَاثُ رَجُلٍ"], correctIndex: 0, explanation: "3-10の数字は、数える名詞と性別を逆にします。男なので数字は女性形(Thalāthah)です。名詞は複数属格です。" },
      { id: 2, type: "grammar", text: "「9台の車（Sayyārah/女）」", options: ["تِسْعُ سَيَّارَاتٍ (Tis')", "تِسْعَةُ سَيَّارَاتٍ (Tis'ah)", "تِسْعُ سَيَّارَةٍ", "تِسْعَةُ سَيَّارَةٍ"], correctIndex: 0, explanation: "車（女）なので、数字は男性形(Tis')を使います。" },
      { id: 3, type: "grammar", text: "「11個の星（Kawkab/男）」11-99のルール", options: ["أَحَدَ عَشَرَ كَوْكَبًا", "أَحَدَ عَشَرَ كَوْكَبٍ", "أَحَدَ عَشَرَ كَوْكَبٌ", "وَاحِدَ عَشَرَ كَوْكَبًا"], correctIndex: 0, explanation: "11-99の数詞の後の名詞は「単数・対格（an）」になります。" },
      { id: 4, type: "grammar", text: "「20リヤル」", options: ["عِشْرُونَ رِيَالًا", "عِشْرُونَ رِيَالٌ", "عِشْرُونَ رِيَالٍ", "عِشْرِينَ رِيَالٌ"], correctIndex: 0, explanation: "20, 30...90の後の名詞も「単数・対格（an）」です。" },
      { id: 5, type: "grammar", text: "「100人の男」100/1000のルール", options: ["مِائَةُ رَجُلٍ", "مِائَةُ رَجُلًا", "مِائَةُ رِجَالٍ", "مِائَةُ رَجُلٌ"], correctIndex: 0, explanation: "100と1000の後の名詞は「単数・属格（in）」になります。" },
      { id: 6, type: "grammar", text: "「1000夜（千夜一夜物語）」", options: ["أَلْفُ لَيْلَةٍ", "أَلْفُ لَيْلَةً", "أَلْفُ لَيَالٍ", "أَلْفُ لَيْلَةٌ"], correctIndex: 0, explanation: "1000の後の名詞は「単数・属格（in）」です。" },
      { id: 7, type: "grammar", text: "【和訳】「خَمْسَةَ عَشَرَ قَلَمًا」", options: ["15本のペン", "5本のペン", "50本のペン", "10本のペン"], correctIndex: 0, explanation: "Khamsata 'ashara は15です。" },
      { id: 8, type: "grammar", text: "「1冊の本」", options: ["كِتَابٌ وَاحِدٌ", "وَاحِدُ كِتَابٍ", "كِتَابٌ أَحَدٌ", "كِتَابٌ الْوَاحِدُ"], correctIndex: 0, explanation: "1と2は形容詞として名詞の後ろに置きます。" },
      { id: 9, type: "grammar", text: "「12ヶ月」", options: ["اِثْنَا عَشَرَ شَهْرًا", "اِثْنَانِ عَشَرَ شَهْرًا", "اِثْنَا عَشَرَ شَهْرٍ", "اِثْنَيْ عَشَرَ شَهْرًا"], correctIndex: 0, explanation: "12の「2」の部分は双数扱い（Nunが落ちる）で、名詞は単数対格です。" },
      { id: 10, type: "grammar", text: "「300（3つの100）」", options: ["ثَلَاثُمِائَةٍ", "ثَلَاثَةُ مِائَةٍ", "ثَلَاثُ مِائَةٍ", "ثَلَاثُونَ مِائَةٍ"], correctIndex: 0, explanation: "Thalāthu-mi'atin（300）のように繋げて書くのが一般的です。" }
    ],
    sentences: [{ arabic: "عِنْدِي سِتَّةُ كُتُبٍ.", japanese: "私は6冊の本を持っています。" }]
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
    id: 200, title: "ジュハーとロバ", category: "物語", level: "中級",
    contentVoweled: "ذَهَبَ جُحَا إِلَى السُّوقِ لِيَبِيعَ حِمَارَهُ. وَلَكِنَّهُ نَدِمَ وَعَادَ بِهِ.",
    contentPlain: "ذهب جحا إلى السوق ليبيع حماره. ولكنه ندم وعاد به.",
    vocabList: [
      { word: "بَاعَ", meaning: "売った" },
      { word: "حِمَار", meaning: "ロバ" },
      { word: "نَدِمَ", meaning: "後悔した" }
    ],
    questions: [
      { id: 2001, type: "reading", text: "ジュハーはどこへ行きましたか？", options: ["家", "学校", "市場", "モスク"], correctIndex: 2, explanation: "「إِلَى السُّوقِ (市場へ)」行きました。" },
      { id: 2002, type: "reading", text: "何をするつもりでしたか？", options: ["買う", "売る", "食べる", "見る"], correctIndex: 1, explanation: "「لِيَبِيعَ (売るために)」です。" },
      { id: 2003, type: "reading", text: "何を売ろうとしましたか？", options: ["家", "車", "ロバ", "馬"], correctIndex: 2, explanation: "「حِمَارَهُ (彼のロバ)」です。" },
      { id: 2004, type: "reading", text: "結局どうしましたか？", options: ["売った", "売らなかった", "失くした", "盗まれた"], correctIndex: 1, explanation: "「عَادَ بِهِ (それと共に戻った)」ので売っていません。" },
      { id: 2005, type: "grammar", text: "「〜するために（目的）」", options: ["لِـ", "بِـ", "فِي", "مِنْ"], correctIndex: 0, explanation: "動詞の前につく「Li- (〜するために)」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "أَرَادَ جُحَا أَنْ يَبِيعَ حِمَارَهُ.", japanese: "ジュハーはロバを売りたいと思いました。" },
      { speaker: "ナレーター", arabic: "ذَهَبَ إِلَى السُّوقِ وَوَقَفَ يُنَادِي.", japanese: "彼は市場へ行き、叫んで立ちました。" },
      { speaker: "ナレーター", arabic: "بَدَأَ النَّاسُ يَمْدَحُونَ الْحِمَارَ.", japanese: "人々はロバを褒め始めました。" },
      { speaker: "ナレーター", arabic: "فَظَنَّ جُحَا أَنَّ الْحِمَارَ مُمْتَازٌ حَقًّا.", japanese: "そこでジュハーは「このロバは本当に素晴らしい」と思いました。" },
      { speaker: "ナレーター", arabic: "فَنَدِمَ عَلَى بَيْعِهِ وَعَادَ بِهِ إِلَى الْبَيْتِ.", japanese: "彼は売ることを後悔し、ロバを連れて家に帰りました。" }
    ]
  },
  {
    id: 201, title: "旅人イブン・バットゥータ", category: "物語", level: "中級",
    contentVoweled: "إِبْنُ بَطُّوطَة رَحَّالَةٌ مَشْهُورٌ. زَارَ بِلَادًا كَثِيرَةً فِي الْعَالَمِ.",
    contentPlain: "ابن بطوطة رحالة مشهور. زار بلادا كثيرة في العالم.",
    vocabList: [
      { word: "رَحَّالَة", meaning: "旅人/探検家" },
      { word: "عَالَم", meaning: "世界" },
      { word: "زَارَ", meaning: "訪れた" }
    ],
    questions: [
      { id: 2011, type: "reading", text: "イブン・バットゥータの職業は？", options: ["王様", "医者", "旅人", "商人"], correctIndex: 2, explanation: "「رَحَّالَة (旅人)」です。" },
      { id: 2012, type: "reading", text: "彼は何をしましたか？", options: ["本を書いた", "多くの国を訪れた", "家を建てた", "戦争をした"], correctIndex: 1, explanation: "「زَارَ بِلَادًا كَثِيرَةً」です。" },
      { id: 2013, type: "vocabulary", text: "「مَشْهُور」の意味は？", options: ["無名の", "有名な", "速い", "遠い"], correctIndex: 1, explanation: "Famous（有名な）です。" },
      { id: 2014, type: "reading", text: "彼の旅の記録は何と呼ばれますか？", options: ["リフラ（旅）", "キターブ（本）", "バイ（家）", "スーク（市場）"], correctIndex: 0, explanation: "彼の旅行記は「リフラ（Rihla）」です。" },
      { id: 2015, type: "grammar", text: "「訪れました」の現在形は？", options: ["يَزُورُ", "زَارَ", "زُرْتُ", "زِيَارَة"], correctIndex: 0, explanation: "過去形「Zāra」に対し、現在形は「Yazūru」です。" }
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
    contentVoweled: "رَأَى ثَعْلَبٌ غُرَابًا يَحْمِلُ قِطْعَةَ جُبْنٍ. أَرَادَ الثَّعْلَبُ أَخْذَهَا.",
    contentPlain: "رأى ثعلب غرابا يحمل قطعة جبن. أراد الثعلب أخذها.",
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
      { id: 2035, type: "grammar", text: "「落ちた」", options: ["سَقَطَ", "طَارَ", "أَكَلَ", "مَشَى"], correctIndex: 0, explanation: "「Saqaṭa」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "وَقَفَ الْغُرَابُ عَلَى غُصْنِ شَجَرَةٍ.", japanese: "カラスは木の枝にとまりました。" },
      { speaker: "ナレーター", arabic: "جَاءَ الثَّعْلَبُ وَقَالَ: مَا أَجْمَلَ صَوْتَكَ!", japanese: "キツネが来て言いました。「なんて美しい声なんだ！」" },
      { speaker: "ナレーター", arabic: "غَنِّ لَنَا يَا صَدِيقِي.", japanese: "歌ってくれよ、友よ。" },
      { speaker: "ナレーター", arabic: "فَتَحَ الْغُرَابُ فَمَهُ لِيُغَنِّيَ.", japanese: "カラスは歌うために口を開けました。" },
      { speaker: "ナレーター", arabic: "فَسَقَطَتِ الْجُبْنَةُ وَأَكَلَهَا الثَّعْلَبُ.", japanese: "するとチーズが落ち、キツネがそれを食べました。" }
    ]
  },

  // --- 2. 文化 (Culture) ---
  {
    id: 202, title: "アラビア書道", category: "文化", level: "中級",
    contentVoweled: "الْخَطُّ الْعَرَبِيُّ فَنٌّ جَمِيلٌ. يُسْتَخْدَمُ فِي كِتَابَةِ الْقُرْآنِ.",
    contentPlain: "الخط العربي فن جميل. يستخدم في كتابة القرآن.",
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
      { id: 2025, type: "grammar", text: "「使われています（受動態）」", options: ["يُسْتَخْدَمُ", "يَسْتَخْدِمُ", "اِسْتَخْدَمَ", "اِسْتِخْدَام"], correctIndex: 0, explanation: "Yustakhdamu は受動態です。" }
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
    contentVoweled: "تَتَمَيَّزُ الصَّحْرَاءُ بِالْجَفَافِ وَالْحَرَارَةِ.",
    contentPlain: "تتميز الصحراء بالجفاف والحرارة.",
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
      { id: 2085, type: "grammar", text: "「少ない」", options: ["قَلِيل", "كَثِير", "كَبِير", "طَوِيل"], correctIndex: 0, explanation: "「Qalīl」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "يَعِيشُ الْجَمَلُ فِي الصَّحْرَاءِ.", japanese: "ラクダは砂漠に住んでいます。" },
      { speaker: "ナレーター", arabic: "يَسْتَطِيعُ تَحَمُّلَ الْعَطَشِ لِفَتْرَةٍ طَوِيلَةٍ.", japanese: "渇きに長期間耐えることができます。" },
      { speaker: "ナレーター", arabic: "تَنْمُو أَشْجَارُ النَّخِيلِ فِي الْوَاحَاتِ.", japanese: "オアシスにはナツメヤシの木が育ちます。" },
      { speaker: "ナレーター", arabic: "الْحَيَاةُ فِي الصَّحْرَاءِ صَعْبَةٌ وَلَكِنْ جَمِيلَةٌ.", japanese: "砂漠の生活は厳しいですが、美しいです。" },
      { speaker: "ナレーター", arabic: "فِي اللَّيْلِ، يَكُونُ الْجَوُّ بَارِدًا.", japanese: "夜になると、天気は寒くなります。" }
    ]
  },

  // --- 3. 記事 (Articles/Essays) ---
  {
    id: 204, title: "スマホ依存", category: "記事", level: "中級",
    contentVoweled: "يَقْضِي النَّاسُ وَقْتًا طَوِيلًا عَلَى الْهَوَاتِفِ الذَّكِيَّةِ.",
    contentPlain: "يقضي الناس وقتا طويلا على الهواتف الذكية.",
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
      { id: 2045, type: "grammar", text: "「過ごす（時間）」", options: ["يَقْضِي", "يَشْتَرِي", "يَبِيعُ", "يُعْطِي"], correctIndex: 0, explanation: "「Yaqḍī」は（時間を）過ごす、という意味です。" }
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
    contentVoweled: "الصِّحَّةُ تَاجٌ عَلَى رُؤُوسِ الْأَصِحَّاءِ. يَجِبُ أَنْ نَأْكُلَ طَعَامًا صِحِّيًّا.",
    contentPlain: "الصحة تاج على رؤوس الأصحاء. يجب أن نأكل طعاما صحيا.",
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
      { id: 2055, type: "grammar", text: "「〜しなければならない」", options: ["يَجِبُ أَنْ", "أُرِيدُ أَنْ", "أُحِبُّ أَنْ", "أَسْتَطِيعُ أَنْ"], correctIndex: 0, explanation: "「Yajibu an」で義務を表します。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "لِلْحِفَاظِ عَلَى الصِّحَّةِ، مَارِسِ الرِّيَاضَةَ.", japanese: "健康を保つために、スポーツをしなさい。" },
      { speaker: "ナレーター", arabic: "تَنَاوَلِ الْفَوَاكِهَ وَالْخُضْرَوَاتِ يَوْمِيًّا.", japanese: "毎日果物と野菜を食べなさい。" },
      { speaker: "ナレーター", arabic: "اِشْرَبِ الْمَاءَ بِكَثْرَةٍ.", japanese: "水をたくさん飲みなさい。" },
      { speaker: "ナレーター", arabic: "اِبْتَعِدْ عَنِ الْوَجَبَاتِ السَّرِيعَةِ.", japanese: "ファストフードは避けなさい。" },
      { speaker: "ナレーター", arabic: "الْعَقْلُ السَّلِيمُ فِي الْجِسْمِ السَّلِيمِ.", japanese: "健全なる精神は健全なる身体に宿る。" }
    ]
  },

  // --- 4. ニュース (News) ---
  {
    id: 206, title: "リヤドの発展", category: "ニュース", level: "中級",
    contentVoweled: "الرِّيَاضُ عَاصِمَةُ الْمَمْلَكَةِ الْعَرَبِيَّةِ السُّعُودِيَّةِ. تَطَوَّرَتْ بِسُرْعَةٍ كَبِيرَةٍ.",
    contentPlain: "الرياض عاصمة المملكة العربية السعودية. تطورت بسرعة كبيرة.",
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
      { id: 2065, type: "grammar", text: "「なりました」", options: ["أَصْبَحَتْ", "كَانَتْ", "لَيْسَتْ", "بَقِيَتْ"], correctIndex: 0, explanation: "「Aṣbaḥat (Became)」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "كَانَتِ الرِّيَاضُ مَدِينَةً صَغِيرَةً فِي الْمَاضِي.", japanese: "リヤドは昔、小さな町でした。" },
      { speaker: "ナレーター", arabic: "الْآنَ، هِيَ مَدِينَةٌ حَدِيثَةٌ وَكَبِيرَةٌ.", japanese: "今では、現代的で大きな都市です。" },
      { speaker: "ナレーター", arabic: "فِيهَا مَبَانٍ عَالِيَةٌ وَأَسْوَاقٌ كَثِيرَةٌ.", japanese: "高い建物や多くの市場があります。" },
      { speaker: "ナレーター", arabic: "رُؤْيَةُ 2030 تُغَيِّرُ الْمَدِينَةَ.", japanese: "ビジョン2030が街を変えています。" },
      { speaker: "ナレーター", arabic: "يَزُورُهَا السُّيَّاحُ مِنْ كُلِّ مَكَانٍ.", japanese: "各地から観光客が訪れます。" }
    ]
  },

  // --- 5. 文学 (Literature) ---
  {
        id: 207, title: "時間の重要性", category: "文学", level: "中級",
        contentVoweled: "الْوَقْتُ كَالسَّيْفِ إِنْ لَمْ تَقْطَعْهُ قَطَعَكَ.",
        contentPlain: "الوقت كالسيف إن لم تقطعه قطعك.",
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
          { id: 2075, type: "grammar", text: "「もし〜なら（条件）」", options: ["إِنْ / إِذَا", "لَكِنْ", "ثُمَّ", "أَوْ"], correctIndex: 0, explanation: "「In」や「Idhā」を使います。" }
        ],
        sentences: [
          // ▼▼▼ 修正: ここに「剣」の文を追加しました ▼▼▼
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
    contentVoweled: "صَدِيقِي الْعَزِيز، كَيْفَ حَالُكَ؟ أَتَمَنَّى أَنْ تَكُونَ بِخَيْرٍ.",
    contentPlain: "صديقي العزيز، كيف حالك؟ أتمنى أن تكون بخير.",
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
      { id: 2095, type: "grammar", text: "「書きます」", options: ["أَكْتُبُ", "أَقْرَأُ", "أَنَامُ", "أَمْشِي"], correctIndex: 0, explanation: "「Aktubu」です。" }
    ],
    sentences: [
      { speaker: "手紙", arabic: "صَدِيقِي الْعَزِيزَ، السَّلَامُ عَلَيْكُمْ.", japanese: "親愛なる友よ、平安あれ。" },
      { speaker: "手紙", arabic: "أَكْتُبُ إِلَيْكَ لِأُخْبِرَكَ بِنَجَاحِي.", japanese: "私の成功（合格）を知らせるために書いています。" },
      { speaker: "手紙", arabic: "أَنَا مُشْتَاقٌ إِلَيْكَ كَثِيرًا.", japanese: "あなたがとても恋しいです。" },
      { speaker: "手紙", arabic: "سَأَزُورُكَ فِي الْعُطْلَةِ الصَّيْفِيَّةِ.", japanese: "夏休みにあなたを訪ねるつもりです。" },
      { speaker: "手紙", arabic: "انْتَظِرْ رَدَّكَ. صَدِيقُكَ الْمُخْلِصُ.", japanese: "返事を待っています。あなたの誠実な友より。" }
    ]
  },
  // --- 11. 歴史・偉人 (210-214) ---
  {
    id: 210, title: "医学の父 イブン・シーナー", category: "歴史", level: "中級",
    contentVoweled: "كَانَ ابْنُ سِينَا طَبِيبًا عَظِيمًا. أَلَّفَ كِتَابَ الْقَانُونِ فِي الطِّبِّ.",
    contentPlain: "كان ابن سينا طبيبا عظيما. ألف كتاب القانون في الطب.",
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
      { id: 2105, type: "grammar", text: "「彼は〜でした（過去）」", options: ["كَانَ", "يَكُونُ", "لَيْسَ", "أَصْبَحَ"], correctIndex: 0, explanation: "「Kāna」は過去の状態を表します。" }
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
    contentVoweled: "قَصْرُ الْحَمْرَاءِ فِي غَرْنَاطَةَ هُوَ تُحْفَةٌ مِعْمَارِيَّةٌ إِسْلَامِيَّةٌ.",
    contentPlain: "قصر الحمراء في غرناطة هو تحفة معمارية إسلامية.",
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
      { id: 2115, type: "grammar", text: "「たくさんの観光客」", options: ["سُيَّاحٌ كَثِيرُونَ", "سُيَّاحٌ قَلِيلُونَ", "سُيَّاحٌ صِغَارٌ", "سُيَّاحٌ كَبِيرٌ"], correctIndex: 0, explanation: "Suyyāḥ (複数) には Kathīrūna (複数) を合わせます。" }
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
    contentVoweled: "صَلَاحُ الدِّينِ الْأَيُّوبِيُّ قَائِدٌ شُجَاعٌ. حَرَّرَ الْقُدْسَ.",
    contentPlain: "صلاح الدين الأيوبي قائد شجاع. حرر القدس.",
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
      { id: 2125, type: "grammar", text: "「〜として知られている」", options: ["مَعْرُوفٌ بِـ", "مَجْهُولٌ بِـ", "كَبِيرٌ بِـ", "صَغِيرٌ بِـ"], correctIndex: 0, explanation: "「Ma'rūf bi-」です。" }
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
    contentVoweled: "اكْتُشِفَتِ الْقَهْوَةُ فِي الْيَمَنِ. ثُمَّ انْتَشَرَتْ فِي الْعَالَمِ.",
    contentPlain: "اكتشفت القهوة في اليمن. ثم انتشرت في العالم.",
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
      { id: 2135, type: "grammar", text: "「発見された（受動態）」", options: ["اُكْتُشِفَتْ", "اِكْتَشَفَ", "يَكْتَشِفُ", "كِتَابَة"], correctIndex: 0, explanation: "「Uktushifat」は受動態です。" }
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
    contentVoweled: "الْبَتْرَاءُ مَدِينَةٌ أَثَرِيَّةٌ فِي الْأُرْدُنِّ. مَحْفُورَةٌ فِي الصَّخْرِ.",
    contentPlain: "البتراء مدينة أثرية في الأردن. محفورة في الصخر.",
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
      { id: 2155, type: "grammar", text: "「多くの人々」", options: ["نَاسٌ كَثِيرُونَ", "نَاسٌ قَلِيلُونَ", "نَاسٌ وَاحِدٌ", "نَاسٌ صَغِيرٌ"], correctIndex: 0, explanation: "Nās (人々) は複数扱いです。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "بَنَى الْأَنْبَاطُ مَدِينَةَ الْبَتْرَاءِ.", japanese: "ナバテア人がペトラの都市を建設しました。" },
      { speaker: "ナレーター", arabic: "تَتَمَيَّزُ بِلَوْنِهَا الْوَرْدِيِّ الْجَمِيلِ.", japanese: "美しいバラ色が特徴です。" },
      { speaker: "ナレーター", arabic: "يَدْخُلُ السُّيَّاحُ عَبْرَ مَمَرٍّ ضَيِّقٍ يُسَمَّى 'السِّيق'.", japanese: "観光客は「シーク」と呼ばれる狭い通路を通って入ります。" },
      { speaker: "ナレーター", arabic: "فِي النِّهَايَةِ تَظْهَرُ 'الْخَزْنَةُ' الرَّائِعَةُ.", japanese: "終わりに素晴らしい「宝物殿（エル・ハズネ）」が現れます。" },
      { speaker: "ナレーター", arabic: "إِنَّهَا مِنْ عَجَائِبِ الدُّنْيَا.", japanese: "それは世界の不思議の一つです。" }
    ]
  },

  // --- 12. 自然・環境 (215-219) ---
  {
    id: 215, title: "水は命", category: "記事", level: "中級",
    contentVoweled: "الْمَاءُ سِرُّ الْحَيَاةِ. لَا يُمْكِنُ الْعَيْشُ بِدُونِهِ.",
    contentPlain: "الماء سر الحياة. لا يمكن العيش بدونه.",
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
      { id: 2155, type: "grammar", text: "「〜なしで」", options: ["بِدُونِ", "مَعَ", "بِـ", "لِـ"], correctIndex: 0, explanation: "「Bidūni」です。" }
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
    contentVoweled: "الْجَمَلُ حَيَوَانٌ قَوِيٌّ. يُسَمَّى سَفِينَةَ الصَّحْرَاءِ.",
    contentPlain: "الجمل حيوان قوي. يسمى سفينة الصحراء.",
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
      { id: 2165, type: "grammar", text: "「歩くことができます」", options: ["يَسْتَطِيعُ الْمَشْيَ", "لَا يَسْتَطِيعُ", "مَشَى", "يَمْشِي"], correctIndex: 0, explanation: "「Yastaṭī'u (できる)」です。" }
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
    contentVoweled: "شَجَرَةُ الزَّيْتُونِ شَجَرَةٌ مُبَارَكَةٌ. تَعِيشُ لِسَنَوَاتٍ طَوِيلَةٍ.",
    contentPlain: "شجرة الزيتون شجرة مباركة. تعيش لسنوات طويلة.",
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
      { id: 2175, type: "grammar", text: "「たくさんの木」", options: ["أَشْجَارٌ كَثِيرَةٌ", "شَجَرَةٌ وَاحِدَةٌ", "أَشْجَارٌ قَلِيلَةٌ", "شَجَرٌ كَثِيرٌ"], correctIndex: 0, explanation: "Ashjār (複数) + Kathīrah (女性単数) です。" }
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
    contentVoweled: "نَهْرُ النِّيلِ هُوَ أَطْوَلُ نَهْرٍ فِي الْعَالَمِ. يَمُرُّ بِمِصْرَ.",
    contentPlain: "نهر النيل هو أطول نهر في العالم. يمر بمصر.",
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
      { id: 2185, type: "grammar", text: "「流れます」", options: ["يَجْرِي", "يَقِفُ", "يَأْكُلُ", "يَنَامُ"], correctIndex: 0, explanation: "「Yajrī (走る/流れる)」です。" }
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
    contentVoweled: "اللَّيْلُ فِي الصَّحْرَاءِ هَادِئٌ وَجَمِيلٌ. النُّجُومُ تَلْمَعُ.",
    contentPlain: "الليل في الصحراء هادئ وجميل. النجوم تلمع.",
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
      { id: 2195, type: "grammar", text: "「輝く」", options: ["تَلْمَعُ", "تَنَامُ", "تَأْكُلُ", "تَذْهَبُ"], correctIndex: 0, explanation: "「Talma'u」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "عِنْدَمَا تَغِيبُ الشَّمْسُ، يَعُمُّ السُّكُونُ.", japanese: "太陽が沈むと、静寂が広がります。" },
      { speaker: "ナレーター", arabic: "السَّمَاءُ صَافِيَةٌ وَمَلِيئَةٌ بِالنُّجُومِ.", japanese: "空は澄んでいて、星でいっぱいです。" },
      { speaker: "ナレーター", arabic: "يُحِبُّ الْبَدْوُ السَّهَرَ تَحْتَ ضَوْءِ الْقَمَرِ.", japanese: "ベドウィン（遊牧民）は月明かりの下で夜更かしするのが好きです。" },
      { speaker: "ナレーター", arabic: "يُشْعِلُونَ النَّارَ وَيَشْرَبُونَ الْقَهْوَةَ.", japanese: "彼らは火を焚き、コーヒーを飲みます。" },
      { speaker: "ナレーター", arabic: "إِنَّهُ مَنْظَرٌ سَاحِرٌ.", japanese: "それは魅惑的な光景です。" }
    ]
  },

  // --- 13. 物語・文学 (220-224) ---
  {
    id: 220, title: "ライオンとネズミ", category: "物語", level: "中級",
    contentVoweled: "أَمْسَكَ الْأَسَدُ بِالْفَأْرِ، لَكِنَّهُ أَطْلَقَ سَرَاحَهُ.",
    contentPlain: "أمسك الأسد بالفأر، لكنه أطلق سراحه.",
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
      { id: 2205, type: "grammar", text: "「小さい」", options: ["صَغِير", "كَبِير", "طَوِيل", "قَصِير"], correctIndex: 0, explanation: "「Saghīr」です。" }
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
    contentVoweled: "كَانَتِ النَّمْلَةُ تَعْمَلُ بِجِدٍّ فِي الصَّيْفِ لِتَجْمَعَ الطَّعَامَ.",
    contentPlain: "كانت النملة تعمل بجد في الصيف لتجمع الطعام.",
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
      { id: 2215, type: "grammar", text: "「集めます」", options: ["تَجْمَعُ", "تَرْمِي", "تَأْكُلُ", "تَشْرَبُ"], correctIndex: 0, explanation: "「Tajma'u」です。" }
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
    contentVoweled: "كَانَ وَلَدٌ يَصْرُخُ: ذِئْب! ذِئْب! لِيَخْدَعَ النَّاسَ.",
    contentPlain: "كان ولد يصرخ: ذئب! ذئب! ليخدع الناس.",
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
      { id: 2225, type: "grammar", text: "「信じませんでした」", options: ["لَمْ يُصَدِّقْ", "صَدَّقَ", "كَذَبَ", "قَالَ"], correctIndex: 0, explanation: "「Lam yuṣaddiq」です。" }
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
    contentVoweled: "الصَّبْرُ مِفْتَاحُ الْفَرَجِ. مَنْ جَدَّ وَجَدَ.",
    contentPlain: "الصبر مفتاح الفرج. من جد وجد.",
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
      { id: 2235, type: "grammar", text: "「〜した者は」", options: ["مَنْ", "مَا", "أَيْنَ", "كَيْفَ"], correctIndex: 0, explanation: "関係代名詞的な「Man (Whoever)」です。" }
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
    contentVoweled: "الْقِرَاءَةُ تُغَذِّي الْعَقْلَ وَتَزِيدُ الْمَعْرِفَةَ.",
    contentPlain: "القراءة تغذي العقل وتزيد المعرفة.",
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
      { id: 2245, type: "grammar", text: "「増やします」", options: ["تَزِيدُ", "تَنْقُصُ", "تَذْهَبُ", "تَأْتِي"], correctIndex: 0, explanation: "「Tazīdu」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "الْقِرَاءَةُ رِحْلَةٌ عَبْرَ الزَّمَنِ.", japanese: "読書は時を超えた旅です。" },
      { speaker: "ナレーター", arabic: "تَفْتَحُ لَنَا أَبْوَابَ الْعِلْمِ.", japanese: "それは私たちに知識の扉を開きます。" },
      { speaker: "ナレーター", arabic: "الْكِتَابُ هُوَ خَيْرُ جَلِيسٍ.", japanese: "本は最高の友人です。" },
      { speaker: "ナレーター", arabic: "يَجِبُ أَنْ نَقْرَأَ كُلَّ يَوْمٍ.", japanese: "私たちは毎日読むべきです。" },
      { speaker: "ナレーター", arabic: "أُمَّةٌ تَقْرَأُ، أُمَّةٌ تَرْقَى.", japanese: "読む民は、向上する民です。" }
    ]
  },

  // --- 14. ニュース・社会 (225-229) ---
  {
    id: 225, title: "アラビア語の日", category: "ニュース", level: "中級",
    contentVoweled: "الْيَوْمُ الْعَالَمِيُّ لِلُّغَةِ الْعَرَبِيَّةِ هُوَ 18 دِيسَمْبَر.",
    contentPlain: "اليوم العالمي للغة العربية هو 18 ديسمبر.",
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
      { id: 2255, type: "grammar", text: "「話します」", options: ["يَتَحَدَّثُ", "يَكْتُبُ", "يَسْمَعُ", "يَمْشِي"], correctIndex: 0, explanation: "「Yataḥaddathu」です。" }
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
    contentVoweled: "نِيُوم مَدِينَةُ الْمُسْتَقْبَلِ فِي السُّعُودِيَّةِ.",
    contentPlain: "نيوم مدينة المستقبل في السعودية.",
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
      { id: 2265, type: "grammar", text: "「使います」", options: ["تَسْتَخْدِمُ", "تَأْكُلُ", "تَنَامُ", "تَلْعَبُ"], correctIndex: 0, explanation: "「Tastakhdimu」です。" }
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
    contentVoweled: "وَسَائِلُ التَّوَاصُلِ الِاجْتِمَاعِيِّ تُقَرِّبُ الْبَعِيدَ.",
    contentPlain: "وسائل التواصل الاجتماعي تقرب البعيد.",
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
      { id: 2275, type: "grammar", text: "「広がります」", options: ["تَنْتَشِرُ", "تَجْلِسُ", "تَأْكُلُ", "تَنَامُ"], correctIndex: 0, explanation: "「Tantashiru」です。" }
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
    contentVoweled: "الرِّيَاضَةُ تُقَوِّي الْجِسْمَ وَتُحَسِّنُ النَّفْسِيَّةَ.",
    contentPlain: "الرياضة تقوي الجسم وتحسن النفسية.",
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
      { id: 2285, type: "grammar", text: "「守ります」", options: ["تَحْمِي", "تَهْدِمُ", "تَنْسَى", "تَأْكُلُ"], correctIndex: 0, explanation: "「Taḥmī (Protect)」です。" }
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
    contentVoweled: "الِالْتِزَامُ بِقَوَاعِدِ الْمُرُورِ يَحْمِي الْأَرْوَاحَ.",
    contentPlain: "الالتزام بقواعد المرور يحمي الأرواح.",
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
      { id: 2295, type: "grammar", text: "「締めてください」", options: ["اِرْبِطْ", "اِفْتَحْ", "اِكْسِرْ", "اِمْشِ"], correctIndex: 0, explanation: "「Irbiṭ (結べ/締めろ)」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "اِرْبِطْ حِزَامَ الْأَمَانِ دَائِمًا.", japanese: "いつもシートベルトを締めなさい。" },
      { speaker: "ナレーター", arabic: "لَا تَتَجَاوَزِ السُّرْعَةَ الْمُحَدَّدَةَ.", japanese: "制限速度を超えてはいけません。" },
      { speaker: "ナレーター", arabic: "اِحْتَرِمْ إِشَارَةَ الْمُرُورِ.", japanese: "交通信号を尊重しなさい。" },
      { speaker: "ナレーター", arabic: "لَا تَسْتَخْدِمِ الْجَوَّالَ أَثْنَاءَ الْقِيَادَةِ.", japanese: "運転中に携帯を使ってはいけません。" },
      { speaker: "ナレーター", arabic: "الْقِيَادَةُ فَنٌّ وَذَوْقٌ وَأَخْلَاقٌ.", japanese: "運転は技術であり、センスであり、道徳です。" }
    ]
  },
  // --- 15. 文化・伝統 (230-234) ---
  {
    id: 230, title: "鷹狩り", category: "文化", level: "中級",
    contentVoweled: "الصَّيْدُ بِالصُّقُورِ رِيَاضَةٌ تَقْلِيدِيَّةٌ عِنْدَ الْعَرَبِ.",
    contentPlain: "الصيد بالصقور رياضة تقليدية عند العرب.",
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
      { id: 2305, type: "grammar", text: "「訓練します」", options: ["يُدَرِّبُ", "يَلْعَبُ", "يَأْكُلُ", "يَنَامُ"], correctIndex: 0, explanation: "「Yudarribu (Train)」です。" }
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
    id: 231, title: "アラビア馬", category: "文化", level: "中級",
    contentVoweled: "الْحِصَانُ الْعَرَبِيُّ مِنْ أَجْمَلِ الْخُيُولِ فِي الْعَالَمِ.",
    contentPlain: "الحصان العربي من أجمل الخيول في العالم.",
    vocabList: [
      { word: "حِصَان", meaning: "馬" },
      { word: "سَبَاق", meaning: "レース" },
      { word: "أَصِيل", meaning: "純血の/本物の" }
    ],
    questions: [
      { id: 2311, type: "reading", text: "アラビア馬の特徴は？", options: ["重い", "世界で最も美しいものの一つ", "遅い", "弱い"], correctIndex: 1, explanation: "「مِنْ أَجْمَلِ الْخُيُولِ」です。" },
      { id: 2312, type: "reading", text: "何に使われますか？", options: ["農業", "レースとショー", "荷運び", "食用"], correctIndex: 1, explanation: "「السِّبَاقَات (レース)」や美容コンテストです。" },
      { id: 2313, type: "reading", text: "その性格は？", options: ["凶暴", "賢くて忠実", "臆病", "怠け者"], correctIndex: 1, explanation: "「ذَكِيٌّ وَوَفِيٌّ (賢くて忠実)」です。" },
      { id: 2314, type: "vocabulary", text: "「قُوَّة」の意味は？", options: ["弱さ", "力/強さ", "速さ", "色"], correctIndex: 1, explanation: "Power/Strengthです。" },
      { id: 2315, type: "grammar", text: "「走ります」", options: ["يَجْرِي", "يَطِيرُ", "يَسْبَحُ", "يَزْحَفُ"], correctIndex: 0, explanation: "「Yajrī」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "يُعْرَفُ الْحِصَانُ الْعَرَبِيُّ بِجَمَالِهِ.", japanese: "アラビア馬はその美しさで知られています。" },
      { speaker: "ナレーター", arabic: "لَهُ رَأْسٌ صَغِيرٌ وَعَيْنَانِ كَبِيرَتَانِ.", japanese: "小さな頭と大きな目を持っています。" },
      { speaker: "ナレーター", arabic: "إِنَّهُ حَيَوَانٌ ذَكِيٌّ وَوَفِيٌّ لِصَاحِبِهِ.", japanese: "賢く、飼い主に忠実な動物です。" },
      { speaker: "ナレーター", arabic: "يُشَارِكُ فِي سِبَاقَاتِ السُّرْعَةِ وَالْقُدْرَةِ.", japanese: "スピードや耐久力のレースに参加します。" },
      { speaker: "ナレーター", arabic: "الْعَرَبُ يُحِبُّونَ الْخَيْلَ كَثِيرًا.", japanese: "アラブ人は馬をとても愛しています。" }
    ]
  },
  {
    id: 232, title: "真珠採り", category: "歴史", level: "中級",
    contentVoweled: "كَانَ الْغَوْصُ عَلَى اللُّؤْلُؤِ مِهْنَةَ الْأَجْدَادِ فِي الْخَلِيجِ.",
    contentPlain: "كان الغوص على اللؤلؤ مهنة الأجداد في الخليج.",
    vocabList: [
      { word: "لُؤْلُؤ", meaning: "真珠" },
      { word: "بَحْر", meaning: "海" },
      { word: "غَوْص", meaning: "ダイビング" }
    ],
    questions: [
      { id: 2321, type: "reading", text: "湾岸諸国の昔の仕事は？", options: ["農業", "真珠採り", "工場", "観光"], correctIndex: 1, explanation: "「الْغَوْص عَلَى اللُّؤْلُؤِ」です。" },
      { id: 2322, type: "reading", text: "その仕事はどうでしたか？", options: ["簡単", "安全", "困難で危険", "退屈"], correctIndex: 2, explanation: "「شَاقَّة وَخَطِيرَة (過酷で危険)」でした。" },
      { id: 2323, type: "reading", text: "彼らはどこへ行きましたか？", options: ["山の奥", "海の底", "砂漠", "空"], correctIndex: 1, explanation: "「أَعْمَاقِ الْبَحْرِ (海の深み)」です。" },
      { id: 2324, type: "vocabulary", text: "「تِجَارَة」の意味は？", options: ["遊び", "貿易/商売", "勉強", "祈り"], correctIndex: 1, explanation: "Trade/Businessです。" },
      { id: 2325, type: "grammar", text: "「潜ります」", options: ["يَغُوصُ", "يَعُومُ", "يَغْرَقُ", "يَشْرَبُ"], correctIndex: 0, explanation: "「Yaghūṣu (Dive)」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "قَبْلَ النِّفْطِ، كَانَ اللُّؤْلُؤُ مَصْدَرَ الرِّزْقِ.", japanese: "石油が出る前、真珠が生計の源でした。" },
      { speaker: "ナレーター", arabic: "يَغُوصُ الرِّجَالُ إِلَى أَعْمَاقِ الْبَحْرِ.", japanese: "男たちは海の深くまで潜りました。" },
      { speaker: "ナレーター", arabic: "يَبْحَثُونَ عَنِ الْمَحَّارِ لِاسْتِخْرَاجِ اللُّؤْلُؤِ.", japanese: "真珠を取り出すために貝を探します。" },
      { speaker: "ナレーター", arabic: "كَانَتْ رِحْلَةَ الْغَوْصِ تَسْتَمِرُّ شُهُورًا.", japanese: "ダイビングの旅は数ヶ月続きました。" },
      { speaker: "ナレーター", arabic: "إِنَّهَا جُزْءٌ مُهِمٌّ مِنْ تَارِيخِ الْخَلِيجِ.", japanese: "それは湾岸の歴史の重要な一部です。" }
    ]
  },
  {
    id: 233, title: "アル・ウラー", category: "記事", level: "中級",
    contentVoweled: "الْعُلَا مَدِينَةٌ تَارِيخِيَّةٌ وَسِيَاحِيَّةٌ فِي الْمَمْلَكَةِ.",
    contentPlain: "العلا مدينة تاريخية وسياحية في المملكة.",
    vocabList: [
      { word: "آثَار", meaning: "遺跡" },
      { word: "طَبِيعَة", meaning: "自然" },
      { word: "سِيَاحَة", meaning: "観光" }
    ],
    questions: [
      { id: 2331, type: "reading", text: "アル・ウラーはどんな場所ですか？", options: ["工場地帯", "歴史的観光地", "海辺の町", "雪山"], correctIndex: 1, explanation: "「مَدِينَة تَارِيخِيَّة وَسِيَاحِيَّة」です。" },
      { id: 2332, type: "reading", text: "有名な遺跡は？", options: ["ピラミッド", "マダーイン・サーレハ", "万里の長城", "エッフェル塔"], correctIndex: 1, explanation: "「مَدَائِن صَالِح」です。" },
      { id: 2333, type: "reading", text: "景色はどうですか？", options: ["ビルばかり", "岩山と砂漠", "森", "湖"], correctIndex: 1, explanation: "「الْجِبَال الصَّخْرِيَّة (岩山)」が特徴です。" },
      { id: 2334, type: "vocabulary", text: "「مُتْحَف」の意味は？", options: ["学校", "博物館", "病院", "駅"], correctIndex: 1, explanation: "Museumです。" },
      { id: 2335, type: "grammar", text: "「開かれています」", options: ["مَفْتُوحٌ", "مُغْلَقٌ", "مَكْسُورٌ", "بَعِيدٌ"], correctIndex: 0, explanation: "「Maftūḥ (Open)」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "تَقَعُ الْعُلَا فِي شَمَالِ غَرْبِ السُّعُودِيَّةِ.", japanese: "アル・ウラーはサウジアラビアの北西にあります。" },
      { speaker: "ナレーター", arabic: "تَشْتَهِرُ بِآثَارِ مَدَائِنِ صَالِحَ.", japanese: "マダーイン・サーレハの遺跡で有名です。" },
      { speaker: "ナレーター", arabic: "طَبِيعَتُهَا الصَّخْرِيَّةُ سَاحِرَةٌ.", japanese: "その岩の自然は魅惑的です。" },
      { speaker: "ナレーター", arabic: "تُعْتَبَرُ مُتْحَفًا مَفْتُوحًا.", japanese: "それは野外博物館（オープン・ミュージアム）と考えられています。" },
      { speaker: "ナレーター", arabic: "تُقَامُ فِيهَا حَفَلَاتٌ وَفَعَالِيَّاتٌ عَالَمِيَّةٌ.", japanese: "そこでは世界的なコンサートやイベントが開かれます。" }
    ]
  },
  {
    id: 234, title: "香木（ウード）", category: "文化", level: "中級",
    contentVoweled: "الْعُودُ هُوَ أَغْلَى أَنْوَاعِ الطِّيبِ وَالْبَخُورِ.",
    contentPlain: "العود هو أغلى أنواع الطيب والبخور.",
    vocabList: [
      { word: "بَخُور", meaning: "お香" },
      { word: "رَائِحَة", meaning: "香り" },
      { word: "ضَيْف", meaning: "客" }
    ],
    questions: [
      { id: 2341, type: "reading", text: "ウードとは何ですか？", options: ["食べ物", "香木/お香", "飲み物", "服"], correctIndex: 1, explanation: "「طِيب وَبَخُور (香水とお香)」の一種です。" },
      { id: 2342, type: "reading", text: "価格はどうですか？", options: ["安い", "無料", "非常に高い", "普通"], correctIndex: 2, explanation: "「أَغْلَى (最も高い)」と言っています。" },
      { id: 2343, type: "reading", text: "いつ使われますか？", options: ["寝る時", "おもてなしや結婚式", "スポーツの時", "勉強中"], correctIndex: 1, explanation: "「فِي الْمُنَاسَبَاتِ وَلِلضُّيُوفِ」です。" },
      { id: 2344, type: "vocabulary", text: "「خَشَب」の意味は？", options: ["石", "木材", "鉄", "紙"], correctIndex: 1, explanation: "Wood（木）のことです。" },
      { id: 2345, type: "grammar", text: "「匂いを嗅ぐ」", options: ["يَشَمُّ", "يَأْكُلُ", "يَرَى", "يَلْمِسُ"], correctIndex: 0, explanation: "「Yashammu」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "يُسْتَخْرَجُ دُهْنُ الْعُودِ مِنْ شَجَرَةٍ خَاصَّةٍ.", japanese: "ウードの油は特別な木から抽出されます。" },
      { speaker: "ナレーター", arabic: "رَائِحَتُهُ قَوِيَّةٌ وَجَمِيلَةٌ.", japanese: "その香りは強く、美しいです。" },
      { speaker: "ナレーター", arabic: "يُقَدَّمُ الْبَخُورُ لِلضُّيُوفِ كَنَوْعٍ مِنَ التَّكْرِيمِ.", japanese: "お香は敬意の印として客に提供されます。" },
      { speaker: "ナレーター", arabic: "يَرْتَبِطُ الْعُودُ بِالْكَرَمِ الْعَرَبِيِّ.", japanese: "ウードはアラブの寛大さと結びついています。" },
      { speaker: "ナレーター", arabic: "يُسْتَخْدَمُ فِي الْأَعْرَاسِ وَالْأَعْيَادِ.", japanese: "結婚式や祝祭で使用されます。" }
    ]
  },

  // --- 16. 科学・自然 (235-239) ---
  {
    id: 235, title: "アル・フワーリズミー", category: "歴史", level: "中級",
    contentVoweled: "الْخُوَارِزْمِيُّ عَالِمُ رِيَاضِيَّاتٍ كَبِيرٌ. مُؤَسِّسُ عِلْمِ الْجَبْرِ.",
    contentPlain: "الخوارزمي عالم رياضيات كبير. مؤسس علم الجبر.",
    vocabList: [
      { word: "عَالِم", meaning: "学者" },
      { word: "رِيَاضِيَّات", meaning: "数学" },
      { word: "صِفْر", meaning: "ゼロ" }
    ],
    questions: [
      { id: 2351, type: "reading", text: "彼は何の学者ですか？", options: ["歴史", "数学", "文学", "音楽"], correctIndex: 1, explanation: "「رِيَاضِيَّات」です。" },
      { id: 2352, type: "reading", text: "彼は何の創始者ですか？", options: ["幾何学", "代数学（アルジェブラ）", "化学", "生物学"], correctIndex: 1, explanation: "「عِلْم الْجَبْر (代数学)」です。" },
      { id: 2353, type: "reading", text: "彼が導入した重要な数字は？", options: ["1", "10", "ゼロ", "100"], correctIndex: 2, explanation: "「الصِّفْر (ゼロ)」です。" },
      { id: 2354, type: "vocabulary", text: "「حِسَاب」の意味は？", options: ["計算/算数", "言葉", "星", "地図"], correctIndex: 0, explanation: "Calculationです。" },
      { id: 2355, type: "grammar", text: "「発明しました」", options: ["اخْتَرَعَ", "أَكَلَ", "نَامَ", "ذَهَبَ"], correctIndex: 0, explanation: "「Ikhtara'a」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "عَاشَ الْخُوَارِزْمِيُّ فِي بَغْدَادَ.", japanese: "フワーリズミーはバグダッドに住んでいました。" },
      { speaker: "ナレーター", arabic: "كَتَبَ كُتُبًا فِي الْحِسَابِ وَالْفَلَكِ.", japanese: "彼は算術と天文学の本を書きました。" },
      { speaker: "ナレーター", arabic: "كَلِمَةُ 'لُوغَارِيتْم' مُشْتَقَّةٌ مِنِ اسْمِهِ.", japanese: "「アルゴリズム」という言葉は彼の名前に由来します。" },
      { speaker: "ナレーター", arabic: "أَدْخَلَ نِظَامَ الْأَرْقَامِ الْهِنْدِيَّةِ وَالصِّفْرَ.", japanese: "彼はインド数字システムとゼロを導入しました。" },
      { speaker: "ナレーター", arabic: "تُرْجِمَتْ أَعْمَالُهُ إِلَى اللَّاتِينِيَّةِ.", japanese: "彼の作品はラテン語に翻訳されました。" }
    ]
  },
  {
    id: 236, title: "紅海", category: "記事", level: "中級",
    contentVoweled: "الْبَحْرُ الْأَحْمَرُ مَشْهُورٌ بِالشُّعَبِ الْمَرْجَانِيَّةِ الْجَمِيلَةِ.",
    contentPlain: "البحر الأحمر مشهور بالشعب المرجانية الجميلة.",
    vocabList: [
      { word: "بَحْر", meaning: "海" },
      { word: "سَمَك", meaning: "魚" },
      { word: "غَوْص", meaning: "ダイビング" }
    ],
    questions: [
      { id: 2361, type: "reading", text: "紅海は何で有名ですか？", options: ["高い波", "サンゴ礁", "氷", "暗闇"], correctIndex: 1, explanation: "「الشُّعَب الْمَرْجَانِيَّة (サンゴ礁)」です。" },
      { id: 2362, type: "reading", text: "観光客は何をしますか？", options: ["スキー", "ダイビング", "登山", "狩り"], correctIndex: 1, explanation: "「الْغَوْص (ダイビング)」です。" },
      { id: 2363, type: "reading", text: "水の中には何がいますか？", options: ["鳥", "色とりどりの魚", "猫", "ラクダ"], correctIndex: 1, explanation: "「أَسْمَاك مُلَوَّنَة (カラフルな魚)」です。" },
      { id: 2364, type: "vocabulary", text: "「سَاحِل」の意味は？", options: ["山", "海岸", "空", "砂漠"], correctIndex: 1, explanation: "Coast（海岸）です。" },
      { id: 2365, type: "grammar", text: "「泳ぎます」", options: ["يَسْبَحُ", "يَطِيرُ", "يَمْشِي", "يَجْرِي"], correctIndex: 0, explanation: "「Yasbaḥu」です。" }
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
    id: 237, title: "シドルの蜂蜜", category: "記事", level: "中級",
    contentVoweled: "عَسَلُ السِّدْرِ مِنْ أَفْضَلِ وَأَغْلَى أَنْوَاعِ الْعَسَلِ.",
    contentPlain: "عسل السدر من أفضل وأغلى أنواع العسل.",
    vocabList: [
      { word: "عَسَل", meaning: "蜂蜜" },
      { word: "شِفَاء", meaning: "治癒/薬" },
      { word: "نَحْل", meaning: "ミツバチ" }
    ],
    questions: [
      { id: 2371, type: "reading", text: "シドルの蜂蜜の特徴は？", options: ["安い", "苦い", "最高級で高価", "白い"], correctIndex: 2, explanation: "「أَفْضَل وَأَغْلَى (最高で最も高い)」です。" },
      { id: 2372, type: "reading", text: "どこから採れますか？", options: ["バラ", "シドルの木", "草", "果物"], correctIndex: 1, explanation: "「شَجَرَة السِّدْر」です。" },
      { id: 2373, type: "reading", text: "何に使われますか？", options: ["掃除", "治療と栄養", "洗濯", "燃料"], correctIndex: 1, explanation: "「عِلَاج (治療)」や食品として使われます。" },
      { id: 2374, type: "vocabulary", text: "「طَبِيعِيّ」の意味は？", options: ["人工の", "自然の/天然の", "悪い", "安い"], correctIndex: 1, explanation: "Natural（天然の）です。" },
      { id: 2375, type: "grammar", text: "「作ります（生産します）」", options: ["يُنْتِجُ", "يَأْكُلُ", "يَنَامُ", "يَمُوتُ"], correctIndex: 0, explanation: "「Yuntiju」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "يَصْنَعُ النَّحْلُ الْعَسَلَ مِنْ أَزْهَارِ السِّدْرِ.", japanese: "ミツバチはシドルの花から蜂蜜を作ります。" },
      { speaker: "ナレーター", arabic: "لَوْنُهُ ذَهَبِيٌّ غَامِقٌ.", japanese: "色は濃い金色です。" },
      { speaker: "ナレーター", arabic: "لَهُ طَعْمٌ لَذِيذٌ وَمُمَيَّزٌ.", japanese: "美味しくて独特な味がします。" },
      { speaker: "ナレーター", arabic: "يُعْتَبَرُ دَوَاءً لِكَثِيرٍ مِنَ الْأَمْرَاضِ.", japanese: "多くの病気の薬と考えられています。" },
      { speaker: "ナレーター", arabic: "يُشْتَهَرُ فِي الْيَمَنِ وَجَنُوبِ السُّعُودِيَّةِ.", japanese: "イエメンやサウジ南部で有名です。" }
    ]
  },
  {
    id: 238, title: "月と暦", category: "文化", level: "中級",
    contentVoweled: "يَعْتَمِدُ التَّقْوِيمُ الْهِجْرِيُّ عَلَى دَوْرَةِ الْقَمَرِ.",
    contentPlain: "يعتمد التقويم الهجري على دورة القمر.",
    vocabList: [
      { word: "قَمَر", meaning: "月" },
      { word: "شَهْر", meaning: "月（暦）" },
      { word: "سَنَة", meaning: "年" }
    ],
    questions: [
      { id: 2381, type: "reading", text: "ヒジュラ暦は何に基づいていますか？", options: ["太陽", "月", "星", "風"], correctIndex: 1, explanation: "「الْقَمَر (月)」です。" },
      { id: 2382, type: "reading", text: "1ヶ月は何日ですか？", options: ["30か31日", "29か30日", "28日", "35日"], correctIndex: 1, explanation: "月の満ち欠けによるため「29か30日」です。" },
      { id: 2383, type: "reading", text: "新しい月はどうやって決まりますか？", options: ["計算だけ", "三日月の観測", "王様の命令", "くじ引き"], correctIndex: 1, explanation: "「رُؤْيَة الْهِلَال (三日月の観測)」です。" },
      { id: 2384, type: "vocabulary", text: "「بِدَايَة」の意味は？", options: ["終わり", "始まり", "真ん中", "永遠"], correctIndex: 1, explanation: "Beginning（始まり）です。" },
      { id: 2385, type: "grammar", text: "「見ます」", options: ["يَرَى", "يَسْمَعُ", "يَشَمُّ", "يَمْشِي"], correctIndex: 0, explanation: "「Yarā」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "السَّنَةُ الْهِجْرِيَّةُ أَقْصَرُ مِنَ الْمِيلَادِيَّةِ.", japanese: "ヒジュラ年（太陰年）はグレゴリオ年より短いです。" },
      { speaker: "ナレーター", arabic: "تَتَكَوَّنُ مِنْ 12 شَهْرًا قَمَرِيًّا.", japanese: "それは12の太陰月から成ります。" },
      { speaker: "ナレーター", arabic: "يَبْدَأُ الشَّهْرُ عِنْدَ رُؤْيَةِ الْهِلَالِ.", japanese: "月は三日月が見えた時に始まります。" },
      { speaker: "ナレーター", arabic: "رَمَضَانُ وَذُو الْحِجَّةِ أَشْهُرٌ مُهِمَّةٌ.", japanese: "ラマダンやズー・アルヒッジャは重要な月です。" },
      { speaker: "ナレーター", arabic: "يَتَغَيَّرُ مَوْعِدُهَا كُلَّ عَامٍ.", japanese: "その時期は毎年変わります。" }
    ]
  },
  {
    id: 239, title: "ジュハーと釘", category: "物語", level: "中級",
    contentVoweled: "بَاعَ جُحَا بَيْتَهُ، لَكِنَّهُ اشْتَرَطَ أَنْ يَبْقَى لَهُ مِسْمَارٌ فِي الْحَائِطِ.",
    contentPlain: "باع جحا بيته، لكنه اشترط أن يبقى له مسمار في الحائط.",
    vocabList: [
      { word: "مِسْمَار", meaning: "釘" },
      { word: "بَيْت", meaning: "家" },
      { word: "حَائِط", meaning: "壁" }
    ],
    questions: [
      { id: 2391, type: "reading", text: "ジュハーは何を売りましたか？", options: ["釘", "家", "服", "ロバ"], correctIndex: 1, explanation: "「بَيْتَهُ (彼の家)」を売りました。" },
      { id: 2392, type: "reading", text: "彼は何を条件にしましたか？", options: ["お金を倍にする", "釘を一本残す", "庭を使う", "住み続ける"], correctIndex: 1, explanation: "「مِسْمَار فِي الْحَائِط (壁の釘)」を自分のものとして残しました。" },
      { id: 2393, type: "reading", text: "その後ジュハーはどうしましたか？", options: ["二度と来なかった", "毎日釘を見に来た", "釘を抜いた", "家を買い戻した"], correctIndex: 1, explanation: "釘を見るという口実で毎日家に入り込みました。" },
      { id: 2394, type: "vocabulary", text: "「مُشْتَرِي」の意味は？", options: ["売り手", "買い手", "家", "泥棒"], correctIndex: 1, explanation: "Buyer（買い手）です。" },
      { id: 2395, type: "grammar", text: "「残ります」", options: ["يَبْقَى", "يَذْهَبُ", "يَمُوتُ", "يَأْكُلُ"], correctIndex: 0, explanation: "「Yabqā」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "وَافَقَ الْمُشْتَرِي عَلَى شَرْطِ جُحَا.", japanese: "買い手はジュハーの条件に同意しました。" },
      { speaker: "ナレーター", arabic: "كَانَ جُحَا يَأْتِي كُلَّ يَوْمٍ لِيَزُورَ الْمِسْمَارَ.", japanese: "ジュハーは毎日釘を訪ねてやって来ました。" },
      { speaker: "ナレーター", arabic: "يَدْخُلُ الْبَيْتَ وَيَجْلِسُ طَوِيلًا.", japanese: "彼は家に入り、長時間座り込みました。" },
      { speaker: "ナレーター", arabic: "انْزَعَجَ الْمُشْتَرِي وَتَرَكَ الْبَيْتَ لِجُحَا.", japanese: "買い手は困り果て、家をジュハーに残して去りました。" },
      { speaker: "ナレーター", arabic: "هَذِهِ قِصَّةٌ عَنِ الذَّكَاءِ وَالْحِيلَةِ.", japanese: "これは知恵と策略についての物語です。" }
    ]
  },

  // --- 17. 寓話・教訓 (240-244) ---
  {
    id: 240, title: "親切な男", category: "物語", level: "中級",
    contentVoweled: "وَجَدَ رَجُلٌ كَلْبًا عَطْشَانَ، فَسَقَاهُ الْمَاءَ.",
    contentPlain: "وجد رجل كلبا عطشان، فسقاه الماء.",
    vocabList: [
      { word: "كَلْب", meaning: "犬" },
      { word: "مَاء", meaning: "水" },
      { word: "رَحْمَة", meaning: "慈悲" }
    ],
    questions: [
      { id: 2401, type: "reading", text: "男は何を見つけましたか？", options: ["猫", "鳥", "喉が乾いた犬", "ライオン"], correctIndex: 2, explanation: "「كَلْبًا عَطْشَانَ」です。" },
      { id: 2402, type: "reading", text: "男はどうしましたか？", options: ["逃げた", "水をあげた", "叩いた", "家に連れ帰った"], correctIndex: 1, explanation: "「سَقَاهُ الْمَاءَ (彼に水を飲ませた)」です。" },
      { id: 2403, type: "reading", text: "どうやって水を汲みましたか？", options: ["コップで", "靴を使って", "手で", "バケツで"], correctIndex: 1, explanation: "「بِحِذَائِهِ (彼の靴で)」です。" },
      { id: 2404, type: "vocabulary", text: "「بِئْر」の意味は？", options: ["井戸", "川", "海", "山"], correctIndex: 0, explanation: "Well（井戸）です。" },
      { id: 2405, type: "grammar", text: "「降りました」", options: ["نَزَلَ", "صَعِدَ", "دَخَلَ", "خَرَجَ"], correctIndex: 0, explanation: "「Nazala」です。" }
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
    id: 241, title: "金持ちと貧乏人", category: "物語", level: "中級",
    contentVoweled: "السَّعَادَةُ لَيْسَتْ فِي كَثْرَةِ الْمَالِ، بَلْ فِي رَاحَةِ الْبَالِ.",
    contentPlain: "السعادة ليست في كثرة المال، بل في راحة البال.",
    vocabList: [
      { word: "مَال", meaning: "お金/財産" },
      { word: "سَعَادَة", meaning: "幸せ" },
      { word: "قَنَاعَة", meaning: "満足/納得" }
    ],
    questions: [
      { id: 2411, type: "reading", text: "幸せとは何ですか？", options: ["たくさんのお金", "心の安らぎ", "大きな家", "高い車"], correctIndex: 1, explanation: "「رَاحَة الْبَال (心の安らぎ)」です。" },
      { id: 2412, type: "reading", text: "金持ちはどうでしたか？", options: ["幸せだった", "いつも心配していた", "よく眠れた", "貧しかった"], correctIndex: 1, explanation: "「قَلِقًا دَائِمًا (常に心配していた)」です。" },
      { id: 2413, type: "reading", text: "貧乏人はどうでしたか？", options: ["泣いていた", "満足して笑っていた", "怒っていた", "病気だった"], correctIndex: 1, explanation: "「رَاضِيًا وَيَضْحَكُ (満足して笑っていた)」です。" },
      { id: 2414, type: "vocabulary", text: "「كَنْز」の意味は？", options: ["宝", "ゴミ", "石", "砂"], correctIndex: 0, explanation: "Treasure（宝）です。" },
      { id: 2415, type: "grammar", text: "「持っています」", options: ["يَمْلِكُ", "يَفْقِدُ", "يُعْطِي", "يَأْخُذُ"], correctIndex: 0, explanation: "「Yamliku (所有する)」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "عَاشَ رَجُلٌ غَنِيٌّ فِي قَصْرٍ كَبِيرٍ.", japanese: "ある金持ちが大きな宮殿に住んでいました。" },
      { speaker: "ナレーター", arabic: "كَانَ يَخَافُ عَلَى مَالِهِ فَلَا يَنَامُ.", japanese: "彼はお金の心配で眠れませんでした。" },
      { speaker: "ナレーター", arabic: "بِجَانِبِهِ رَجُلٌ فَقِيرٌ يَنَامُ بِعُمْقٍ.", japanese: "隣には深く眠る貧しい男がいました。" },
      { speaker: "ナレーター", arabic: "سَأَلَهُ الْغَنِيُّ: كَيْفَ تَسْعَدُ وَأَنْتَ فَقِيرٌ؟", japanese: "金持ちは聞きました。「貧しいのになぜ幸せなんだ？」" },
      { speaker: "ナレーター", arabic: "قَالَ: الْقَنَاعَةُ كَنْزٌ لَا يَفْنَى.", japanese: "彼は言いました。「足るを知ることは尽きない宝です。」" }
    ]
  },
  {
    id: 242, title: "ハトとアリ", category: "物語", level: "中級",
    contentVoweled: "سَقَطَتْ نَمْلَةٌ فِي النَّهْرِ، فَأَلْقَتْ لَهَا الْحَمَامَةُ غُصْنًا.",
    contentPlain: "سقطت نملة في النهر، فألقت لها الحمامة غصنا.",
    vocabList: [
      { word: "حَمَامَة", meaning: "ハト" },
      { word: "نَمْلَة", meaning: "アリ" },
      { word: "غَرِقَ", meaning: "溺れた" }
    ],
    questions: [
      { id: 2421, type: "reading", text: "アリはどうなりましたか？", options: ["飛んだ", "川に落ちた", "木に登った", "寝た"], correctIndex: 1, explanation: "「سَقَطَتْ فِي النَّهْرِ」です。" },
      { id: 2422, type: "reading", text: "ハトは何をしましたか？", options: ["見ていた", "枝を投げた", "食べた", "逃げた"], correctIndex: 1, explanation: "「أَلْقَتْ غُصْنًا (枝を投げた)」です。" },
      { id: 2423, type: "reading", text: "その後アリはどうしましたか？", options: ["ハトを噛んで助けた", "忘れた", "逃げた", "死んだ"], correctIndex: 0, explanation: "猟師を噛んでハトを救いました。" },
      { id: 2424, type: "vocabulary", text: "「صَيَّاد」の意味は？", options: ["農夫", "猟師", "医者", "王様"], correctIndex: 1, explanation: "Hunter（猟師）です。" },
      { id: 2425, type: "grammar", text: "「投げた」", options: ["أَلْقَى / رَمَى", "أَخَذَ", "أَمْسَكَ", "وَجَدَ"], correctIndex: 0, explanation: "「Alqā」または「Ramā」です。" }
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
    id: 243, title: "知識の旅", category: "文学", level: "中級",
    contentVoweled: "اُطْلُبُوا الْعِلْمَ مِنَ الْمَهْدِ إِلَى اللَّحْدِ.",
    contentPlain: "اطلبوا العلم من المهد إلى اللحد.",
    vocabList: [
      { word: "عِلْم", meaning: "知識/学問" },
      { word: "مَهْد", meaning: "ゆりかご" },
      { word: "لَحْد", meaning: "墓" }
    ],
    questions: [
      { id: 2431, type: "reading", text: "いつからいつまで学ぶべきですか？", options: ["朝から晩", "ゆりかごから墓場まで", "若いうちだけ", "学校で"], correctIndex: 1, explanation: "「مِنَ الْمَهْدِ إِلَى اللَّحْدِ (一生)」です。" },
      { id: 2432, type: "reading", text: "知識を得るためにどうすべきですか？", options: ["寝て待つ", "旅をする（求める）", "買う", "盗む"], correctIndex: 1, explanation: "「سَافَرَ (旅した)」「اُطْلُبُوا (求めよ)」です。" },
      { id: 2433, type: "reading", text: "昔の学者はどうしましたか？", options: ["ネットで調べた", "長い距離を歩いた", "諦めた", "本を燃やした"], correctIndex: 1, explanation: "「مَشَى مَسَافَاتٍ طَوِيلَةً」です。" },
      { id: 2434, type: "vocabulary", text: "「سَفَر」の意味は？", options: ["本", "旅行", "家", "ペン"], correctIndex: 1, explanation: "Travel（旅行）です。" },
      { id: 2435, type: "grammar", text: "「求めなさい」", options: ["اُطْلُبْ", "اُتْرُكْ", "اِنْسَ", "اِبْكِ"], correctIndex: 0, explanation: "「Uṭlub」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "الْعِلْمُ لَا يَأْتِي وَأَنْتَ جَالِسٌ.", japanese: "知識は座っているだけでは来ません。" },
      { speaker: "ナレーター", arabic: "كَانَ الْعُلَمَاءُ يُسَافِرُونَ لِطَلَبِ الْحَدِيثِ.", japanese: "学者たちはハディース（伝承）を求めて旅をしました。" },
      { speaker: "ナレーター", arabic: "تَحَمَّلُوا الْجُوعَ وَالتَّعَبَ.", japanese: "彼らは飢えと疲れに耐えました。" },
      { speaker: "ナレーター", arabic: "الْعِلْمُ يَرْفَعُ بَيْتًا لَا عِمَادَ لَهُ.", japanese: "知識は柱のない家をも高くする（高める）。" },
      { speaker: "ナレーター", arabic: "بِالْعِلْمِ تَتَقَدَّمُ الْأُمَمُ.", japanese: "知識によって国々は発展します。" }
    ]
  },
  {
    id: 244, title: "母の恩恵", category: "文化", level: "中級",
    contentVoweled: "الْجَنَّةُ تَحْتَ أَقْدَامِ الْأُمَّهَاتِ.",
    contentPlain: "الجنة تحت أقدام الأمهات.",
    vocabList: [
      { word: "أُمّ", meaning: "母" },
      { word: "جَنَّة", meaning: "天国" },
      { word: "قَدَم", meaning: "足" }
    ],
    questions: [
      { id: 2441, type: "reading", text: "天国はどこにあると言われていますか？", options: ["空の上", "母の足元", "海の中", "山の上"], correctIndex: 1, explanation: "「تَحْتَ أَقْدَامِ الْأُمَّهَاتِ」です。" },
      { id: 2442, type: "reading", text: "母に対してどうすべきですか？", options: ["無視する", "親切にする（孝行）", "怒る", "離れる"], correctIndex: 1, explanation: "「بِرُّ الْوَالِدَيْنِ (親孝行)」が重要です。" },
      { id: 2443, type: "reading", text: "母は子供のために何をしましたか？", options: ["遊んだ", "苦労した/育てた", "寝た", "忘れた"], correctIndex: 1, explanation: "「تَعِبَتْ وَرَبَّتْ (疲れ、育てた)」です。" },
      { id: 2444, type: "vocabulary", text: "「قَلْب」の意味は？", options: ["頭", "心臓/心", "手", "目"], correctIndex: 1, explanation: "Heart（心）です。" },
      { id: 2445, type: "grammar", text: "「愛しています」", options: ["أُحِبُّ", "أَكْرَهُ", "أَضْرِبُ", "أَقْتُلُ"], correctIndex: 0, explanation: "「Uḥibbu」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "الْأُمُّ هِيَ مَصْدَرُ الْحَنَانِ.", japanese: "母は優しさの源です。" },
      { speaker: "ナレーター", arabic: "سَهِرَتْ اللَّيَالِيَ مِنْ أَجْلِ رَاحَتِنَا.", japanese: "彼女は私たちの安らぎのために夜通し起きていました。" },
      { speaker: "ナレーター", arabic: "وَصَّى الْإِسْلَامُ بِالْإِحْسَانِ إِلَيْهَا.", japanese: "イスラムは彼女への善行を推奨しました。" },
      { speaker: "ナレーター", arabic: "رِضَا اللهِ فِي رِضَا الْوَالِدَيْنِ.", japanese: "神の満足は両親の満足にあります。" },
      { speaker: "ナレーター", arabic: "لَا نَسْتَطِيعُ رَدَّ جَمِيلِهَا.", japanese: "私たちは彼女の恩を返しきることはできません。" }
    ]
  },

  // --- 18. 社会・生活 (245-249) ---
  {
    id: 245, title: "サウジの結婚式", category: "文化", level: "中級",
    contentVoweled: "حَفْلُ الزَّفَافِ فِي السُّعُودِيَّةِ لَهُ تَقَالِيدُ خَاصَّةٌ.",
    contentPlain: "حفل الزفاف في السعودية له تقاليد خاصة.",
    vocabList: [
      { word: "عُرْس", meaning: "結婚式" },
      { word: "وَلِيمَة", meaning: "宴/食事" },
      { word: "رَقْص", meaning: "踊り" }
    ],
    questions: [
      { id: 2451, type: "reading", text: "結婚式の特徴は？", options: ["静か", "特別な伝統がある", "短い", "悲しい"], correctIndex: 1, explanation: "「تَقَالِيد خَاصَّة」があります。" },
      { id: 2452, type: "reading", text: "男性は何を踊りますか？", options: ["サルサ", "アルダ（剣の舞）", "タンゴ", "バレエ"], correctIndex: 1, explanation: "「الْعَرْضَة (アルダ)」です。" },
      { id: 2453, type: "reading", text: "食事は何が出ますか？", options: ["サンドイッチ", "羊肉と米（マフリ）", "スープ", "パン"], correctIndex: 1, explanation: "「خَرُوف (羊)」などのご馳走です。" },
      { id: 2454, type: "vocabulary", text: "「عَرِيس」の意味は？", options: ["花嫁", "花婿", "父", "客"], correctIndex: 1, explanation: "新郎のことです。" },
      { id: 2455, type: "grammar", text: "「踊ります」", options: ["يَرْقُصُ", "يَأْكُلُ", "يَجْلِسُ", "يَبْكِي"], correctIndex: 0, explanation: "「Yarquṣu」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "يَجْتَمِعُ الْأَقَارِبُ وَالْأَصْدِقَاءُ لِلتَّهْنِئَةِ.", japanese: "親戚や友人がお祝いのために集まります。" },
      { speaker: "ナレーター", arabic: "يَرْتَدِي الرِّجَالُ الْمَلَابِسَ التَّقْلِيدِيَّةَ.", japanese: "男性は伝統的な服を着ます。" },
      { speaker: "ナレーター", arabic: "تُقَامُ الْعَرْضَةُ النَّجْدِيَّةُ بِالسُّيُوفِ.", japanese: "剣を使ったナジュドのアルダ（踊り）が行われます。" },
      { speaker: "ナレーター", arabic: "الْوَلِيمَةُ تَكُونُ كَبِيرَةً وَدَسِمَةً.", japanese: "宴は大きく、豪華です。" },
      { speaker: "ナレーター", arabic: "يَفْرَحُ الْجَمِيعُ بِالْعَرِيسَيْنِ.", japanese: "皆が新郎新婦を喜びます。" }
    ]
  },
  {
    id: 246, title: "石油の発見", category: "歴史", level: "中級",
    contentVoweled: "اكْتُشِفَ النِّفْطُ فِي السُّعُودِيَّةِ وَغَيَّرَ وَجْهَ الْحَيَاةِ.",
    contentPlain: "اكتشف النفط في السعودية وغير وجه الحياة.",
    vocabList: [
      { word: "نِفْط", meaning: "石油" },
      { word: "اِكْتِشَاف", meaning: "発見" },
      { word: "ثَرْوَة", meaning: "富/財産" }
    ],
    questions: [
      { id: 2461, type: "reading", text: "何が発見されましたか？", options: ["金", "水", "石油", "ダイヤモンド"], correctIndex: 2, explanation: "「النِّفْط (石油)」です。" },
      { id: 2462, type: "reading", text: "発見によってどうなりましたか？", options: ["変わらなかった", "生活が変わった", "貧しくなった", "人が減った"], correctIndex: 1, explanation: "「غَيَّرَ وَجْهَ الْحَيَاةِ (生活の顔＝様相を変えた)」です。" },
      { id: 2463, type: "reading", text: "最初の油田の名前は？", options: ["リヤド", "ダンマーム7号井", "メッカ", "ジェッダ"], correctIndex: 1, explanation: "「بِئْرُ الدَّمَّامِ رَقْم 7 (ダンマームNo.7)」です。" },
      { id: 2464, type: "vocabulary", text: "「اِقْتِصَاد」の意味は？", options: ["政治", "経済", "文化", "宗教"], correctIndex: 1, explanation: "Economy（経済）です。" },
      { id: 2465, type: "grammar", text: "「変わりました」", options: ["تَغَيَّرَ", "بَقِيَ", "نَامَ", "ذَهَبَ"], correctIndex: 0, explanation: "「Taghayyara」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "بَدَأَ التَّنْقِيبُ عَنِ النِّفْطِ مُنْذُ زَمَنٍ.", japanese: "石油の探査は昔始まりました。" },
      { speaker: "ナレーター", arabic: "فِي عام 1938، تَدَفَّقَ النِّفْطُ بِكَمِّيَّاتٍ تِجَارِيَّةٍ.", japanese: "1938年、商業量の石油が噴出しました。" },
      { speaker: "ナレーター", arabic: "أَصْبَحَتِ الْمَمْلَكَةُ مِنْ أَغْنَى الدُّوَلِ.", japanese: "王国は最も豊かな国の一つになりました。" },
      { speaker: "ナレーター", arabic: "تَطَوَّرَ التَّعْلِيمُ وَالصِّحَّةُ وَالْعُمْرَانُ.", japanese: "教育、健康、建設が発展しました。" },
      { speaker: "ナレーター", arabic: "أُرَامْكُو هِيَ أَكْبَرُ شَرِكَةِ نِفْطٍ فِي الْعَالَمِ.", japanese: "アラムコは世界最大の石油会社です。" }
    ]
  },
  {
    id: 247, title: "アラビアン・オリックス", category: "自然", level: "中級",
    contentVoweled: "الْمَهَا الْعَرَبِيُّ حَيَوَانٌ جَمِيلٌ يَعِيشُ فِي الصَّحْرَاءِ.",
    contentPlain: "المها العربي حيوان جميل يعيش في الصحراء.",
    vocabList: [
      { word: "مَهَا", meaning: "オリックス（動物）" },
      { word: "قَرْن", meaning: "角" },
      { word: "أَبْيَض", meaning: "白い" }
    ],
    questions: [
      { id: 2471, type: "reading", text: "「マハ」とは何の動物ですか？", options: ["ライオン", "アラビアン・オリックス", "ラクダ", "鷹"], correctIndex: 1, explanation: "オリックス（レイヨウの一種）です。" },
      { id: 2472, type: "reading", text: "色は？", options: ["黒", "白", "赤", "青"], correctIndex: 1, explanation: "「أَبْيَض (白)」です。" },
      { id: 2473, type: "reading", text: "どこに住んでいますか？", options: ["森", "海", "砂漠", "街"], correctIndex: 2, explanation: "「فِي الصَّحْرَاءِ」です。" },
      { id: 2474, type: "vocabulary", text: "「عَيْن」の意味は？", options: ["耳", "目", "鼻", "口"], correctIndex: 1, explanation: "目です。オリックスは美しい目で有名です。" },
      { id: 2475, type: "grammar", text: "「住んでいます」", options: ["يَعِيشُ", "يَمُوتُ", "يَذْهَبُ", "يَأْتِي"], correctIndex: 0, explanation: "「Ya'īshu」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "يَتَمَيَّزُ الْمَهَا بِلَوْنِهِ الْأَبْيَضِ النَّاصِعِ.", japanese: "オリックスは真っ白な色が特徴です。" },
      { speaker: "ナレーター", arabic: "لَهُ قُرُونٌ طَوِيلَةٌ وَمُسْتَقِيمَةٌ.", japanese: "長くまっすぐな角を持っています。" },
      { speaker: "ナレーター", arabic: "تَغَزَّلَ الشُّعَرَاءُ بِعُيُونِ الْمَهَا.", japanese: "詩人たちはオリックスの目の美しさを詠いました。" },
      { speaker: "ナレーター", arabic: "كَانَ مُهَدَّدًا بِالِانْقِرَاضِ.", japanese: "それは絶滅の危機に瀕していました。" },
      { speaker: "ナレーター", arabic: "الْآنَ تُوجَدُ مَحْمِيَّاتٌ لِلْحِفَاظِ عَلَيْهِ.", japanese: "今は保護するための保護区があります。" }
    ]
  },
  {
    id: 248, title: "ホスピタリティ（おもてなし）", category: "文化", level: "中級",
    contentVoweled: "كَرَمُ الضِّيَافَةِ مِنْ أَهَمِّ صِفَاتِ الْعَرَبِ.",
    contentPlain: "كرم الضيافة من أهم صفات العرب.",
    vocabList: [
      { word: "ضَيْف", meaning: "客" },
      { word: "كَرَم", meaning: "気前の良さ/寛大さ" },
      { word: "طَعَام", meaning: "食事" }
    ],
    questions: [
      { id: 2481, type: "reading", text: "アラブ人の重要な特徴は？", options: ["強さ", "おもてなし（寛大さ）", "速さ", "静かさ"], correctIndex: 1, explanation: "「كَرَمُ الضِّيَافَةِ」です。" },
      { id: 2482, type: "reading", text: "客が来たらどうしますか？", options: ["追い返す", "歓迎して食事を出す", "無視する", "寝る"], correctIndex: 1, explanation: "「يُكْرِمُونَ الضَّيْفَ (客をもてなす)」です。" },
      { id: 2483, type: "reading", text: "最初に何を出し​​ますか？", options: ["水", "コーヒーとデーツ", "肉", "パン"], correctIndex: 1, explanation: "「الْقَهْوَة وَالتَّمْر」です。" },
      { id: 2484, type: "vocabulary", text: "「بَاب」の意味は？", options: ["窓", "ドア/扉", "壁", "床"], correctIndex: 1, explanation: "Doorです。" },
      { id: 2485, type: "grammar", text: "「開いています」", options: ["مَفْتُوحٌ", "مُغْلَقٌ", "صَغِيرٌ", "بَعِيدٌ"], correctIndex: 0, explanation: "「Maftūḥ」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "بَابُ الْعَرَبِيِّ مَفْتُوحٌ دَائِمًا لِلضَّيْفِ.", japanese: "アラブ人のドアは常に客のために開かれています。" },
      { speaker: "ナレーター", arabic: "يُقَدِّمُونَ الْقَهْوَةَ وَالتَّمْرَ أَوَّلًا.", japanese: "まずコーヒーとデーツを出します。" },
      { speaker: "ナレーター", arabic: "ثُمَّ يُجَهِّزُونَ الْوَلِيمَةَ (الذَّبِيحَةَ).", japanese: "それから宴（屠殺した肉料理）を準備します。" },
      { speaker: "ナレーター", arabic: "الضَّيْفُ فِي حِمَايَةِ الْمُضِيفِ.", japanese: "客はホストの保護下にあります。" },
      { speaker: "ナレーター", arabic: "هَذِهِ عَادَةٌ قَدِيمَةٌ وَأَصِيلَةٌ.", japanese: "これは古くからの正統な習慣です。" }
    ]
  },
  {
    id: 249, title: "未来の技術", category: "記事", level: "中級",
    contentVoweled: "الذَّكَاءُ الِاصْطِنَاعِيُّ يُغَيِّرُ حَيَاتَنَا بِسُرْعَةٍ.",
    contentPlain: "الذكاء الاصطناعي يغير حياتنا بسرعة.",
    vocabList: [
      { word: "ذَكَاء", meaning: "知能" },
      { word: "حَاسُوب", meaning: "コンピュータ" },
      { word: "رُوبُوت", meaning: "ロボット" }
    ],
    questions: [
      { id: 2491, type: "reading", text: "AIとは何ですか？", options: ["自然の力", "人工知能", "宇宙人", "魔法"], correctIndex: 1, explanation: "「الذَّكَاء الِاصْطِنَاعِيّ」です。" },
      { id: 2492, type: "reading", text: "それは何をしていますか？", options: ["生活を変えている", "何もしていない", "眠っている", "壊れている"], correctIndex: 0, explanation: "「يُغَيِّرُ حَيَاتَنَا (生活を変えている)」です。" },
      { id: 2493, type: "reading", text: "どこで使われていますか？", options: ["家だけ", "学校だけ", "あらゆる分野", "どこにもない"], correctIndex: 2, explanation: "「فِي كُلِّ الْمَجَالَاتِ (あらゆる分野で)」です。" },
      { id: 2494, type: "vocabulary", text: "「سَهْل」の意味は？", options: ["難しい", "簡単", "遠い", "重い"], correctIndex: 1, explanation: "Easy（簡単）です。" },
      { id: 2495, type: "grammar", text: "「助けます」", options: ["يُسَاعِدُ", "يَضُرُّ", "يَأْخُذُ", "يُعْطِي"], correctIndex: 0, explanation: "「Yusā'idu」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "الرُّوبُوتَاتُ تَعْمَلُ بَدَلًا مِنَ الْإِنْسَانِ.", japanese: "ロボットが人間の代わりに働きます。" },
      { speaker: "ナレーター", arabic: "نَسْتَخْدِمُ الذَّكَاءَ الِاصْطِنَاعِيَّ فِي الْهَوَاتِفِ.", japanese: "私たちは電話でAIを使用します。" },
      { speaker: "ナレーター", arabic: "يُسَاعِدُ الْأَطِبَّاءَ فِي التَّشْخِيصِ.", japanese: "それは医師の診断を助けます。" },
      { speaker: "ナレーター", arabic: "يَجْعَلُ الْحَيَاةَ أَسْهَلَ وَأَسْرَعَ.", japanese: "それは生活をより簡単に、より速くします。" },
      { speaker: "ナレーター", arabic: "لَكِنْ يَجِبُ أَنْ نَتَحَكَّمَ فِيهِ.", japanese: "しかし、私たちはそれを制御しなければなりません。" }
    ]
  },
  // --- 20. 歴史・遺産 (250-254) ---
  {
    id: 250, title: "ジェッダ歴史地区", category: "歴史", level: "中級",
    contentVoweled: "جِدَّةُ الْبَلَدِ مِنْطَقَةٌ تَارِيخِيَّةٌ. تَتَمَيَّزُ بِالْمَبَانِي الْقَدِيمَةِ وَالرَّوَاشِينِ.",
    contentPlain: "جدة البلد منطقة تاريخية. تتميز بالمباني القديمة والرواشين.",
    vocabList: [
      { word: "تَارِيخ", meaning: "歴史" },
      { word: "بِنَاء", meaning: "建物/建築" },
      { word: "خَشَب", meaning: "木" }
    ],
    questions: [
      { id: 2501, type: "reading", text: "「ジェッダ・アル・バラド」とは何ですか？", options: ["新しい空港", "歴史地区", "大きな市場", "砂漠"], correctIndex: 1, explanation: "「مِنْطَقَة تَارِيخِيَّة」です。" },
      { id: 2502, type: "reading", text: "特徴的な建築様式は？", options: ["ガラスのビル", "テント", "ラワーシーン（木の出窓）", "石の城"], correctIndex: 2, explanation: "「الرَّوَاشِين (Rawashin)」という木の装飾窓が有名です。" },
      { id: 2503, type: "reading", text: "建物は何で作られていますか？", options: ["コンクリート", "サンゴ石と木", "鉄", "泥"], correctIndex: 1, explanation: "海に近いのでサンゴ石が使われていました。" },
      { id: 2504, type: "vocabulary", text: "「ضَيِّق」の意味は？", options: ["広い", "狭い", "高い", "低い"], correctIndex: 1, explanation: "Narrow（狭い）です。" },
      { id: 2505, type: "grammar", text: "「歩くのが好きです」", options: ["أُحِبُّ الْمَشْيَ", "أَكْرَهُ الْمَشْيَ", "أُحِبُّ النَّوْمَ", "أَمْشِي بِسُرْعَةٍ"], correctIndex: 0, explanation: "「Uḥibbu al-mashya」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "تَقَعُ الْمِنْطَقَةُ التَّارِيخِيَّةُ فِي وَسَطِ جِدَّةَ.", japanese: "歴史地区はジェッダの中心に位置しています。" },
      { speaker: "ナレーター", arabic: "الْبُيُوتُ مَبْنِيَّةٌ مِنْ حَجَرِ الْكَاشُورِ (الْمَرْجَانِ).", japanese: "家々はサンゴ石で建てられています。" },
      { speaker: "ナレーター", arabic: "تَزَيَّنُ النَّوَافِذُ بِالرَّوَاشِينِ الْخَشَبِيَّةِ.", japanese: "窓は木のラワーシーン（出窓）で飾られています。" },
      { speaker: "ナレーター", arabic: "الشَّوَارِعُ ضَيِّقَةٌ وَجَمِيلَةٌ.", japanese: "通りは狭くて美しいです。" },
      { speaker: "ナレーター", arabic: "إِنَّهَا مُسَجَّلَةٌ فِي الْيُونِسْكُو.", japanese: "それはユネスコに登録されています。" }
    ]
  },
  {
    id: 251, title: "建国記念日", category: "歴史", level: "中級",
    contentVoweled: "الْيَوْمُ الْوَطَنِيُّ السُّعُودِيُّ هُوَ فِي الثَّالِثِ وَالْعِشْرِينَ مِنْ سِبْتَمْبِر.",
    contentPlain: "اليوم الوطني السعودي هو في الثالث والعشرين من سبتمبر.",
    vocabList: [
      { word: "وَطَن", meaning: "祖国" },
      { word: "تَوْحِيد", meaning: "統一" },
      { word: "مَلِك", meaning: "王" }
    ],
    questions: [
      { id: 2511, type: "reading", text: "サウジの建国記念日はいつ？", options: ["1月1日", "9月23日", "12月18日", "2月22日"], correctIndex: 1, explanation: "「23 سِبْتَمْبِر」です。" },
      { id: 2512, type: "reading", text: "何を祝う日ですか？", options: ["独立", "王国の統一", "戦争の終わり", "新年の始まり"], correctIndex: 1, explanation: "「تَوْحِيد الْمَمْلَكَة (王国の統一)」を祝います。" },
      { id: 2513, type: "reading", text: "建国者は誰ですか？", options: ["アブドゥッラー王", "アブドゥルアズィーズ王", "ファハド王", "サルマン王"], correctIndex: 1, explanation: "「الْمَلِك عَبْدُ الْعَزِيز」です。" },
      { id: 2514, type: "vocabulary", text: "「عَلَم」の意味は？", options: ["ペン", "知識", "国旗", "山"], correctIndex: 2, explanation: "Flag（国旗）です。" },
      { id: 2515, type: "grammar", text: "「祝います」", options: ["نَحْتَفِلُ", "نَبْكِي", "نَعْمَلُ", "نَأْكُلُ"], correctIndex: 0, explanation: "「Naḥtafilu」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "وَحَّدَ الْمَلِكُ عَبْدُ الْعَزِيزِ الْبِلَادَ.", japanese: "アブドゥルアズィーズ王が国を統一しました。" },
      { speaker: "ナレーター", arabic: "غَيَّرَ الِاسْمَ إِلَى الْمَمْلَكَةِ الْعَرَبِيَّةِ السُّعُودِيَّةِ.", japanese: "名前をサウジアラビア王国に変えました。" },
      { speaker: "ナレーター", arabic: "يَحْتَفِلُ السُّعُودِيُّونَ بِهَذَا الْيَوْمِ كُلَّ عَامٍ.", japanese: "サウジ人は毎年この日を祝います。" },
      { speaker: "ナレーター", arabic: "يَرْفَعُونَ الْأَعْلَامَ الْخَضْرَاءَ.", japanese: "彼らは緑の国旗を掲げます。" },
      { speaker: "ナレーター", arabic: "إِنَّهُ يَوْمُ الْفَخْرِ وَالِاعْتِزَازِ.", japanese: "それは誇りと名誉の日です。" }
    ]
  },
  {
    id: 252, title: "ディルイーヤ", category: "歴史", level: "中級",
    contentVoweled: "الدِّرْعِيَّةُ هِيَ مَهْدُ الدَّوْلَةِ السُّعُودِيَّةِ الْأُولَى.",
    contentPlain: "الدرعية هي مهد الدولة السعودية الأولى.",
    vocabList: [
      { word: "طِين", meaning: "泥/土" },
      { word: "تُرَاث", meaning: "遺産" },
      { word: "عَاصِمَة", meaning: "首都" }
    ],
    questions: [
      { id: 2521, type: "reading", text: "ディルイーヤは何ですか？", options: ["新しい首都", "第一サウジ王国の発祥地", "海の近くの町", "油田"], correctIndex: 1, explanation: "「مَهْدُ الدَّوْلَةِ السُّعُودِيَّةِ الْأُولَى (第一サウジ王国のゆりかご)」です。" },
      { id: 2522, type: "reading", text: "建物は何で作られていますか？", options: ["ガラス", "泥レンガ", "鉄", "木"], correctIndex: 1, explanation: "「طِين (泥/土)」です。" },
      { id: 2523, type: "reading", text: "有名な地区の名前は？", options: ["アル・トライフ", "アル・ハムラ", "アル・オラ", "アル・コバール"], correctIndex: 0, explanation: "「حَيُّ الطُّرَيْف」です。" },
      { id: 2524, type: "vocabulary", text: "「تَجْدِيد」の意味は？", options: ["破壊", "修復/更新", "建設", "売却"], correctIndex: 1, explanation: "Renovation（修復・更新）です。" },
      { id: 2525, type: "grammar", text: "「訪れることができます」", options: ["يُمْكِنُ زِيَارَتُهَا", "لَا يُمْكِنُ", "زَارَ", "يَزُورُ"], correctIndex: 0, explanation: "「Yumkinu (可能である)」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "تَقَعُ الدِّرْعِيَّةُ بِالْقُرْبِ مِنَ الرِّيَاضِ.", japanese: "ディルイーヤはリヤドの近くにあります。" },
      { speaker: "ナレーター", arabic: "بُيُوتُهَا مَبْنِيَّةٌ مِنَ الطِّينِ.", japanese: "その家々は泥レンガで建てられています。" },
      { speaker: "ナレーター", arabic: "حَيُّ الطُّرَيْفِ هُوَ مَوْقِعُ تُرَاثٍ عَالَمِيٍّ.", japanese: "トライフ地区は世界遺産です。" },
      { speaker: "ナレーター", arabic: "تَمَّ تَجْدِيدُ الْمَكَانِ لِيُصْبِحَ وِجْهَةً سِيَاحِيَّةً.", japanese: "場所は観光地になるよう修復されました。" },
      { speaker: "ナレーター", arabic: "تُقَامُ فِيهَا سِبَاقَاتُ الْفُورْمُولَا إِي.", japanese: "そこではフォーミュラEのレースが開催されます。" }
    ]
  },
  {
    id: 253, title: "イブン・アル・ハイサム", category: "歴史", level: "中級",
    contentVoweled: "ابْنُ الْهَيْثَمِ عَالِمٌ عَرَبِيٌّ، مُؤَسِّسُ عِلْمِ الْبَصَرِيَّاتِ.",
    contentPlain: "ابن الهيثم عالم عربي، مؤسس علم البصريات.",
    vocabList: [
      { word: "بَصَر", meaning: "視覚" },
      { word: "ضَوْء", meaning: "光" },
      { word: "كِتَاب", meaning: "本" }
    ],
    questions: [
      { id: 2531, type: "reading", text: "彼は何の創始者ですか？", options: ["数学", "光学", "医学", "化学"], correctIndex: 1, explanation: "「عِلْمِ الْبَصَرِيَّاتِ (光学)」です。" },
      { id: 2532, type: "reading", text: "彼は何を研究しましたか？", options: ["音", "光と視覚", "風", "星"], correctIndex: 1, explanation: "「الضَّوْء (光)」について研究しました。" },
      { id: 2533, type: "reading", text: "彼の有名な本は？", options: ["医学の典範", "光学の書（キターブ・アル・マナーズィル）", "旅の書", "詩集"], correctIndex: 1, explanation: "「كِتَابُ الْمَنَاظِرِ」です。" },
      { id: 2534, type: "vocabulary", text: "「كَمِيرَا」の語源は？", options: ["カマル（月）", "クムラ（暗い部屋）", "キターブ（本）", "カルブ（心）"], correctIndex: 1, explanation: "「Qumrah (暗い部屋)」がカメラの語源と言われています。" },
      { id: 2535, type: "grammar", text: "「証明しました」", options: ["أَثْبَتَ", "نَفَى", "قَالَ", "سَمِعَ"], correctIndex: 0, explanation: "「Athbata (Proved)」です。" }
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
    id: 254, title: "アラビア数字", category: "歴史", level: "中級",
    contentVoweled: "الْأَرْقَامُ الَّتِي نَسْتَخْدِمُهَا الْيَوْمَ أَصْلُهَا عَرَبِيٌّ.",
    contentPlain: "الأرقام التي نستخدمها اليوم أصلها عربي.",
    vocabList: [
      { word: "رَقْم", meaning: "数字/番号" },
      { word: "أَصْل", meaning: "起源" },
      { word: "عَالَم", meaning: "世界" }
    ],
    questions: [
      { id: 2541, type: "reading", text: "世界で使われている数字（1, 2, 3...）の起源は？", options: ["ローマ", "アラブ", "ギリシャ", "中国"], correctIndex: 1, explanation: "「أَصْلُهَا عَرَبِيٌّ」です。（インド数字を改良し広めた）" },
      { id: 2542, type: "reading", text: "誰が広めましたか？", options: ["商人", "学者", "王様", "兵士"], correctIndex: 1, explanation: "アル・フワーリズミーなどの学者です。" },
      { id: 2543, type: "reading", text: "特に重要な発明は？", options: ["1", "9", "ゼロ", "100"], correctIndex: 2, explanation: "「الصِّفْر (ゼロ)」の概念です。" },
      { id: 2544, type: "vocabulary", text: "「شَكْل」の意味は？", options: ["色", "形", "音", "数"], correctIndex: 1, explanation: "Shape（形）です。" },
      { id: 2545, type: "grammar", text: "「使います」", options: ["نَسْتَخْدِمُ", "نَأْخُذُ", "نُعْطِي", "نَكْتُبُ"], correctIndex: 0, explanation: "「Nastakhdimu」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "الْأَرْقَامُ (1, 2, 3) تُسَمَّى الْأَرْقَامَ الْعَرَبِيَّةَ فِي الْغَرْبِ.", japanese: "数字(1, 2, 3)は西洋ではアラビア数字と呼ばれています。" },
      { speaker: "ナレーター", arabic: "طَوَّرَهَا الْعُلَمَاءُ الْمُسْلِمُونَ.", japanese: "イスラムの学者たちがそれを発展させました。" },
      { speaker: "ナレーター", arabic: "تَعْتَمِدُ عَلَى عَدَدِ الزَّوَايَا فِي الرَّقْمِ.", japanese: "（一説には）数字の角の数に基づいています。" },
      { speaker: "ナレーター", arabic: "سَهَّلَتْ هَذِهِ الْأَرْقَامُ عَمَلِيَّةَ الْحِسَابِ.", japanese: "これらの数字は計算を容易にしました。" },
      { speaker: "ナレーター", arabic: "انْتَقَلَتْ إِلَى أُورُوبَّا عَبْرَ الْأَنْدَلُسِ.", japanese: "それらはアンダルス（スペイン）を通ってヨーロッパに伝わりました。" }
    ]
  },

  // --- 21. 社会・現代 (255-259) ---
  {
    id: 255, title: "オンラインショッピング", category: "社会", level: "中級",
    contentVoweled: "التَّسَوُّقُ عَبْرَ الْإِنْتَرْنِتِ أَصْبَحَ شَائِعًا جِدًّا.",
    contentPlain: "التسوق عبر الإنترنت أصبح شائعا جدا.",
    vocabList: [
      { word: "تَسَوُّق", meaning: "買い物" },
      { word: "مَوْقِع", meaning: "サイト/場所" },
      { word: "تَوْصِيل", meaning: "配達" }
    ],
    questions: [
      { id: 2551, type: "reading", text: "最近の買い物の傾向は？", options: ["店に行く", "オンライン", "物々交換", "作ってもらう"], correctIndex: 1, explanation: "「عَبْرَ الْإِنْتَرْنِتِ (ネットを通じて)」が一般的になりました。" },
      { id: 2552, type: "reading", text: "なぜ人気ですか？", options: ["高いから", "難しいから", "簡単で速いから", "店がないから"], correctIndex: 2, explanation: "「سَهْل وَسَرِيع」です。" },
      { id: 2553, type: "reading", text: "商品はどこに届きますか？", options: ["学校", "店", "家のドアまで", "海"], correctIndex: 2, explanation: "「إِلَى بَابِ الْمَنْزِلِ」です。" },
      { id: 2554, type: "vocabulary", text: "「تَطْبِيق」の意味は？", options: ["電話", "アプリ/適用", "本", "画面"], correctIndex: 1, explanation: "Application（アプリ）です。" },
      { id: 2555, type: "grammar", text: "「なりました」", options: ["أَصْبَحَ", "كَانَ", "مَا زَالَ", "لَيْسَ"], correctIndex: 0, explanation: "「Aṣbaḥa (Became)」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "يُفَضِّلُ الْكَثِيرُ مِنَ النَّاسِ الشِّرَاءَ مِنَ الْمَوَاقِعِ.", japanese: "多くの人がサイトから買うことを好みます。" },
      { speaker: "ナレーター", arabic: "يُمْكِنُكَ مُقَارَنَةُ الْأَسْعَارِ بِسُهُولَةٍ.", japanese: "簡単に価格を比較できます。" },
      { speaker: "ナレーター", arabic: "خِدْمَةُ التَّوْصِيلِ سَرِيعَةٌ وَمُرِيحَةٌ.", japanese: "配達サービスは速くて快適です。" },
      { speaker: "ナレーター", arabic: "لَا حَاجَةَ لِلْخُرُوجِ مِنَ الْبَيْتِ.", japanese: "家から出る必要がありません。" },
      { speaker: "ナレーター", arabic: "وَلَكِنْ يَجِبُ التَّأَكُّدُ مِنْ مِصْدَاقِيَّةِ الْمَوْقِعِ.", japanese: "しかし、サイトの信頼性を確認する必要があります。" }
    ]
  },
  {
    id: 256, title: "サウジの宇宙飛行士", category: "ニュース", level: "中級",
    contentVoweled: "صَعَدَ رُوَّادُ فَضَاءٍ سُعُودِيُّونَ إِلَى مَحَطَّةِ الْفَضَاءِ الدَّوْلِيَّةِ.",
    contentPlain: "صعد رواد فضاء سعوديون إلى محطة الفضاء الدولية.",
    vocabList: [
      { word: "فَضَاء", meaning: "宇宙" },
      { word: "رَائِد", meaning: "パイオニア/飛行士" },
      { word: "تَجْرِبَة", meaning: "実験/経験" }
    ],
    questions: [
      { id: 2561, type: "reading", text: "誰が宇宙へ行きましたか？", options: ["医者", "サウジの宇宙飛行士", "教師", "エンジニア"], correctIndex: 1, explanation: "「رُوَّاد فَضَاء سُعُودِيُّونَ」です。" },
      { id: 2562, type: "reading", text: "どこへ行きましたか？", options: ["月", "火星", "国際宇宙ステーション (ISS)", "太陽"], correctIndex: 2, explanation: "「مَحَطَّة الْفَضَاء الدَّوْلِيَّة」です。" },
      { id: 2563, type: "reading", text: "彼らはそこで何をしましたか？", options: ["寝た", "遊んだ", "科学実験", "食事"], correctIndex: 2, explanation: "「تَجَارِب عِلْمِيَّة (科学実験)」です。" },
      { id: 2564, type: "vocabulary", text: "「أَرْض」の意味は？", options: ["空", "地球/大地", "海", "星"], correctIndex: 1, explanation: "Earth（地球）です。" },
      { id: 2565, type: "grammar", text: "「戻りました」", options: ["عَادُوا", "ذَهَبُوا", "طَارُوا", "نَزَلُوا"], correctIndex: 0, explanation: "「'Ādū (Returned)」です。" }
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
    id: 257, title: "サウジ・グリーン", category: "ニュース", level: "中級",
    contentVoweled: "مُبَادَرَةُ السُّعُودِيَّةِ الْخَضْرَاءِ تَهْدِفُ لِحِمَايَةِ الْبِيئَةِ.",
    contentPlain: "مبادرة السعودية الخضراء تهدف لحماية البيئة.",
    vocabList: [
      { word: "أَخْضَر", meaning: "緑" },
      { word: "شَجَرَة", meaning: "木" },
      { word: "بِيئَة", meaning: "環境" }
    ],
    questions: [
      { id: 2571, type: "reading", text: "イニシアチブの名前は？", options: ["サウジ・ビジョン", "サウジ・グリーン", "サウジ・デジタル", "サウジ・スポーツ"], correctIndex: 1, explanation: "「مُبَادَرَة السُّعُودِيَّة الْخَضْرَاء」です。" },
      { id: 2572, type: "reading", text: "目的は何ですか？", options: ["お金を稼ぐ", "ビルを建てる", "環境保護", "砂漠を増やす"], correctIndex: 2, explanation: "「حِمَايَة الْبِيئَة (環境保護)」です。" },
      { id: 2573, type: "reading", text: "何を植えますか？", options: ["花", "木（100億本）", "草", "野菜"], correctIndex: 1, explanation: "「زِرَاعَة مِلْيَارَاتِ الْأَشْجَارِ」です。" },
      { id: 2574, type: "vocabulary", text: "「تَلَوُّث」の意味は？", options: ["汚染", "清潔", "空気", "水"], correctIndex: 0, explanation: "Pollution（汚染）です。" },
      { id: 2575, type: "grammar", text: "「減らします」", options: ["تُقَلِّلُ", "تَزِيدُ", "تُبْقِي", "تَأْخُذُ"], correctIndex: 0, explanation: "「Tuqallilu (Reduce)」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "تُعَانِي الْأَرْضُ مِنَ التَّغَيُّرِ الْمُنَاخِيِّ.", japanese: "地球は気候変動に苦しんでいます。" },
      { speaker: "ナレーター", arabic: "أَطْلَقَتِ الْمَمْلَكَةُ مُبَادَرَةً لِزِرَاعَةِ الْأَشْجَارِ.", japanese: "王国は植林のためのイニシアチブを開始しました。" },
      { speaker: "ナレーター", arabic: "تَهْدِفُ إِلَى زِرَاعَةِ 10 مِلْيَارَاتِ شَجَرَةٍ.", japanese: "100億本の木を植えることを目指しています。" },
      { speaker: "ナレーター", arabic: "سَتُسَاعِدُ فِي تَقْلِيلِ التَّلَوُّثِ.", japanese: "それは汚染を減らすのに役立つでしょう。" },
      { speaker: "ナレーター", arabic: "نَحْوَ مُسْتَقْبَلٍ أَخْضَرَ وَنَظِيفٍ.", japanese: "緑でクリーンな未来へ向かって。" }
    ]
  },
  {
    id: 258, title: "アラビアの香辛料", category: "文化", level: "中級",
    contentVoweled: "تَشْتَهِرُ الْأَكْلَاتُ الْعَرَبِيَّةُ بِالْبُهَارَاتِ الْمُتَنَوِّعَةِ.",
    contentPlain: "تشتهر الأكلات العربية بالبهارات المتنوعة.",
    vocabList: [
      { word: "بُهَارَات", meaning: "スパイス" },
      { word: "طَعْم", meaning: "味" },
      { word: "طَبْخ", meaning: "料理" }
    ],
    questions: [
      { id: 2581, type: "reading", text: "アラブ料理の特徴は？", options: ["冷たい", "スパイスが豊富", "甘い", "生で食べる"], correctIndex: 1, explanation: "「الْبُهَارَات الْمُتَنَوِّعَة (多様なスパイス)」です。" },
      { id: 2582, type: "reading", text: "「サフラン」はどんなスパイス？", options: ["安い", "黒い", "高価", "辛い"], correctIndex: 2, explanation: "「بَاهِظُ الثَّمَنِ (高価な)」です。" },
      { id: 2583, type: "reading", text: "カルダモンは何に使いますか？", options: ["水", "コーヒー", "ジュース", "サラダ"], correctIndex: 1, explanation: "「الْقَهْوَة」に使われます。" },
      { id: 2584, type: "vocabulary", text: "「رَائِحَة」の意味は？", options: ["味", "色", "香り", "音"], correctIndex: 2, explanation: "香りです。" },
      { id: 2585, type: "grammar", text: "「使います」", options: ["نَسْتَخْدِمُ", "نَرْمِي", "نَكْسِرُ", "نَنْسَى"], correctIndex: 0, explanation: "「Nastakhdimu」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "تُعْطِي الْبُهَارَاتُ طَعْمًا مُمَيَّزًا لِلطَّعَامِ.", japanese: "スパイスは食べ物に独特の味を与えます。" },
      { speaker: "ナレーター", arabic: "الزَّعْفَرَانُ مِنْ أَغْلَى التَّوَابِلِ.", japanese: "サフランは最も高価な香辛料の一つです。" },
      { speaker: "ナレーター", arabic: "يُوضَعُ الْهَيْلُ مَعَ الْقَهْوَةِ الْعَرَبِيَّةِ.", japanese: "カルダモンはアラビアコーヒーに入れられます。" },
      { speaker: "ナレーター", arabic: "الْكُرْكُمُ يُعْطِي اللَّوْنَ الْأَصْفَرَ.", japanese: "ターメリックは黄色い色を与えます。" },
      { speaker: "ナレーター", arabic: "سُوقُ التَّوَابِلِ مَلِيءٌ بِالرَّوَائِحِ الزَّكِيَّةِ.", japanese: "スパイス市場は良い香りで満ちています。" }
    ]
  },
  {
    id: 259, title: "ジュハーと川", category: "物語", level: "中級",
    contentVoweled: "أَرَادَ جُحَا عُبُورَ النَّهْرِ، فَسَأَلَ رَجُلًا فِي الضِّفَّةِ الْأُخْرَى.",
    contentPlain: "أراد جحا عبور النهر، فسأل رجلا في الضفة الأخرى.",
    vocabList: [
      { word: "نَهْر", meaning: "川" },
      { word: "عُبُور", meaning: "渡ること" },
      { word: "ضِفَّة", meaning: "岸" }
    ],
    questions: [
      { id: 2591, type: "reading", text: "ジュハーは何をしたかった？", options: ["泳ぐ", "川を渡る", "釣り", "寝る"], correctIndex: 1, explanation: "「عُبُور النَّهْر (川を渡る)」です。" },
      { id: 2592, type: "reading", text: "彼は誰に聞きましたか？", options: ["魚", "向こう岸の人", "妻", "自分"], correctIndex: 1, explanation: "「رَجُلًا فِي الضِّفَّةِ الْأُخْرَى」です。" },
      { id: 2593, type: "reading", text: "ジュハーの質問は？", options: ["元気？", "どうやって向こうへ行く？", "名前は？", "何時？"], correctIndex: 1, explanation: "「كَيْفَ أَذْهَبُ إِلَى الضِّفَّةِ الْأُخْرَى؟」です。" },
      { id: 2594, type: "reading", text: "男の答えは？", options: ["泳げ", "ボートを使え", "君は既に向こう側にいるよ", "知らない"], correctIndex: 2, explanation: "「あなたは既に向こう側（私から見て）にいるじゃないか」というトンチ話です。" },
      { id: 2595, type: "grammar", text: "「どうやって」", options: ["كَيْفَ", "مَتَى", "أَيْنَ", "مَاذَا"], correctIndex: 0, explanation: "「Kayfa」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "وَقَفَ جُحَا عَلَى ضِفَّةِ النَّهْرِ.", japanese: "ジュハーは川岸に立ちました。" },
      { speaker: "ナレーター", arabic: "رَأَى رَجُلًا فِي الْجِهَةِ الْمُقَابِلَةِ.", japanese: "彼は反対側に男を見ました。" },
      { speaker: "ナレーター", arabic: "صَرَخَ جُحَا: كَيْفَ أَذْهَبُ إِلَى الضِّفَّةِ الْأُخْرَى؟", japanese: "ジュハーは叫びました。「どうやって向こう岸に行けばいい？」" },
      { speaker: "ナレーター", arabic: "فَأَجَابَهُ الرَّجُلُ:", japanese: "すると男は答えました。" },
      { speaker: "ナレーター", arabic: "يَا أَحْمَقُ، أَنْتَ فِي الضِّفَّةِ الْأُخْرَى!", japanese: "「バカだなあ、君はもう（私から見て）向こう岸にいるじゃないか！」" }
    ]
  },
  // --- 22. 物語・笑い話 (260-264) ---
  {
    id: 260, title: "ジュハーと鍋", category: "物語", level: "中級",
    contentVoweled: "اسْتَعَارَ جُحَا قِدْرًا مِنْ جَارِهِ، وَأَعَادَهُ مَعَ قِدْرٍ صَغِيرٍ.",
    contentPlain: "استعار جحا قدرا من جاره، وأعاده مع قدر صغير.",
    vocabList: [
      { word: "قِدْر", meaning: "鍋" },
      { word: "جَار", meaning: "隣人" },
      { word: "وَلَدَتْ", meaning: "産んだ" }
    ],
    questions: [
      { id: 2601, type: "reading", text: "ジュハーは隣人から何を借りましたか？", options: ["お金", "鍋", "ロバ", "皿"], correctIndex: 1, explanation: "「قِدْرًا (鍋)」です。" },
      { id: 2602, type: "reading", text: "返すときに何を付けましたか？", options: ["お金", "小さい鍋", "蓋", "料理"], correctIndex: 1, explanation: "「قِدْرٍ صَغِيرٍ」を付けました。" },
      { id: 2603, type: "reading", text: "ジュハーは何と言い訳しましたか？", options: ["壊れた", "鍋が子供を産んだ", "忘れた", "盗まれた"], correctIndex: 1, explanation: "「وَلَدَتْ (出産した)」と言いました。" },
      { id: 2604, type: "reading", text: "2回目に借りた鍋はどうなりましたか？", options: ["返した", "死んだと言った", "売った", "なくした"], correctIndex: 1, explanation: "「mātat (死んだ)」と言って返しませんでした。" },
      { id: 2605, type: "grammar", text: "「借りました」", options: ["اسْتَعَارَ", "أَعَارَ", "بَاعَ", "اشْتَرَى"], correctIndex: 0, explanation: "「Ista'āra」です。" }
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
    id: 261, title: "イブン・ハルドゥーン", category: "歴史", level: "中級",
    contentVoweled: "ابْنُ خَلْدُونَ هُوَ مُؤَسِّسُ عِلْمِ الِاجْتِمَاعِ.",
    contentPlain: "ابن خلدون هو مؤسس علم الاجتماع.",
    vocabList: [
      { word: "تَارِيخ", meaning: "歴史" },
      { word: "مُقَدِّمَة", meaning: "序章/プロレゴメナ" },
      { word: "مُجْتَمَع", meaning: "社会" }
    ],
    questions: [
      { id: 2611, type: "reading", text: "イブン・ハルドゥーンは何の創始者？", options: ["数学", "社会学", "医学", "天文学"], correctIndex: 1, explanation: "「عِلْمِ الِاجْتِمَاعِ (社会学)」です。" },
      { id: 2612, type: "reading", text: "彼の有名な著作は？", options: ["カノン", "マカマート", "ムカッディマ（序説）", "ルバイヤート"], correctIndex: 2, explanation: "「الْمُقَدِّمَة (The Muqaddimah)」です。" },
      { id: 2613, type: "reading", text: "彼は何を研究しましたか？", options: ["星の動き", "人々の性質と歴史", "病気", "数式"], correctIndex: 1, explanation: "「طَبَائِعَ الْبَشَرِ (人間の性質)」や社会の興亡です。" },
      { id: 2614, type: "vocabulary", text: "「بَشَر」の意味は？", options: ["動物", "人間", "植物", "神"], correctIndex: 1, explanation: "Humans（人間）です。" },
      { id: 2615, type: "grammar", text: "「勉強しました」", options: ["دَرَسَ", "كَتَبَ", "قَرَأَ", "ذَهَبَ"], correctIndex: 0, explanation: "「Darasa」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "وُلِدَ ابْنُ خَلْدُونَ فِي تُونِسَ.", japanese: "イブン・ハルドゥーンはチュニジアで生まれました。" },
      { speaker: "ナレーター", arabic: "كَتَبَ كِتَابَهُ الْمَشْهُورَ 'الْمُقَدِّمَةَ'.", japanese: "彼は有名な本『ムカッディマ』を書きました。" },
      { speaker: "ナレーター", arabic: "دَرَسَ أَحْوَالَ الدُّوَلِ وَأَسْبَابَ سُقُوطِهَا.", japanese: "彼は国家の状態とその没落の原因を研究しました。" },
      { speaker: "ナレーター", arabic: "يُعْتَبَرُ أَبَا التَّارِيخِ الْحَدِيثِ.", japanese: "彼は近代歴史学の父とみなされています。" },
      { speaker: "ナレーター", arabic: "أَفْكَارُهُ مَا زَالَتْ تُدَرَّسُ الْيَوْمَ.", japanese: "彼の思想は今日でも教えられています。" }
    ]
  },
  {
    id: 262, title: "ナツメヤシの木", category: "文化", level: "中級",
    contentVoweled: "النَّخْلَةُ رَمْزٌ لِلْكَرَمِ فِي السُّعُودِيَّةِ. تُعْطِي التَّمْرَ اللَّذِيذَ.",
    contentPlain: "النخلة رمز للكرم في السعودية. تعطي التمر اللذيذ.",
    vocabList: [
      { word: "نَخْلَة", meaning: "ナツメヤシの木" },
      { word: "شِعَار", meaning: "エンブレム/紋章" },
      { word: "غِذَاء", meaning: "食料" }
    ],
    questions: [
      { id: 2621, type: "reading", text: "ナツメヤシは何の象徴ですか？", options: ["戦争", "寛大さ（おもてなし）", "悲しみ", "寒さ"], correctIndex: 1, explanation: "「رَمْز لِلْكَرَمِ」です。" },
      { id: 2622, type: "reading", text: "サウジの国章にあるものは？", options: ["鷹", "ラクダ", "2本の剣とナツメヤシ", "ライオン"], correctIndex: 2, explanation: "「سَيْفَانِ وَنَخْلَةٌ」です。" },
      { id: 2623, type: "reading", text: "ナツメヤシから何が得られますか？", options: ["リンゴ", "デーツ", "オリーブ", "バナナ"], correctIndex: 1, explanation: "「التَّمْر」です。" },
      { id: 2624, type: "vocabulary", text: "「صَحْرَاء」の意味は？", options: ["海", "砂漠", "森", "山"], correctIndex: 1, explanation: "Desert（砂漠）です。" },
      { id: 2625, type: "grammar", text: "「耐えます」", options: ["تَتَحَمَّلُ", "تَمُوتُ", "تَشْرَبُ", "تَأْكُلُ"], correctIndex: 0, explanation: "「Tataḥammalu (Endure)」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "تَتَحَمَّلُ النَّخْلَةُ حَرَارَةَ الصَّحْرَاءِ.", japanese: "ナツメヤシは砂漠の暑さに耐えます。" },
      { speaker: "ナレーター", arabic: "كُلُّ جُزْءٍ مِنْهَا مُفِيدٌ.", japanese: "そのすべての部分が役に立ちます。" },
      { speaker: "ナレーター", arabic: "نَأْكُلُ ثِمَارَهَا وَنَصْنَعُ الْحَصِيرَ مِنْ سَعْفِهَا.", japanese: "実を食べ、葉からマットを作ります。" },
      { speaker: "ナレーター", arabic: "النَّخْلَةُ مَوْجُودَةٌ فِي شِعَارِ الْمَمْلَكَةِ.", japanese: "ナツメヤシは王国の紋章にあります。" },
      { speaker: "ナレーター", arabic: "إِنَّهَا شَجَرَةٌ مُبَارَكَةٌ.", japanese: "それは祝福された木です。" }
    ]
  },
  {
    id: 263, title: "死海", category: "自然", level: "中級",
    contentVoweled: "الْبَحْرُ الْمَيِّتُ هُوَ أَخْفَضُ بُقْعَةٍ عَلَى سَطْحِ الْأَرْضِ.",
    contentPlain: "البحر الميت هو أخفض بقعة على سطح الأرض.",
    vocabList: [
      { word: "مِلْح", meaning: "塩" },
      { word: "مَيِّت", meaning: "死んだ" },
      { word: "عِلَاج", meaning: "治療" }
    ],
    questions: [
      { id: 2631, type: "reading", text: "死海の特徴は？", options: ["世界で一番高い場所", "世界で一番低い場所", "一番深い海", "一番大きい湖"], correctIndex: 1, explanation: "「أَخْفَضُ بُقْعَةٍ (最も低い地点)」です。" },
      { id: 2632, type: "reading", text: "なぜ「死海」と呼ばれますか？", options: ["色が黒いから", "幽霊が出るから", "魚が生きられないから", "動かないから"], correctIndex: 2, explanation: "「لَا تَعِيشُ فِيهِ الْأَسْمَاكُ」です。" },
      { id: 2633, type: "reading", text: "水はどうなっていますか？", options: ["甘い", "非常に塩辛い", "酸っぱい", "熱い"], correctIndex: 1, explanation: "「شَدِيدُ الْمُلُوحَةِ (塩分が非常に強い)」です。" },
      { id: 2634, type: "vocabulary", text: "「طِين」の意味は？", options: ["水", "泥", "砂", "岩"], correctIndex: 1, explanation: "Mud（泥）です。" },
      { id: 2635, type: "grammar", text: "「浮きます」", options: ["يَطْفُو", "يَغْرَقُ", "يَسْبَحُ", "يَطِيرُ"], correctIndex: 0, explanation: "「Yaṭfū (Float)」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "يَقَعُ الْبَحْرُ الْمَيِّتُ بَيْنَ الْأُرْدُنِّ وَفِلَسْطِينَ.", japanese: "死海はヨルダンとパレスチナの間にあります。" },
      { speaker: "ナレーター", arabic: "مِيَاهُهُ مَالِحَةٌ جِدًّا.", japanese: "その水は非常に塩辛いです。" },
      { speaker: "ナレーター", arabic: "لِذَلِكَ لَا تَغْرَقُ فِيهِ الْأَجْسَامُ، بَلْ تَطْفُو.", japanese: "そのため、体は沈まずに浮きます。" },
      { speaker: "ナレーター", arabic: "طِينُ الْبَحْرِ الْمَيِّتِ مُفِيدٌ لِلْجِلْدِ.", japanese: "死海の泥は肌に良いです。" },
      { speaker: "ナレーター", arabic: "يَأْتِي السُّيَّاحُ إِلَيْهِ لِلْعِلَاجِ.", japanese: "観光客は治療のためにそこへ来ます。" }
    ]
  },
  {
    id: 264, title: "笑顔は施し", category: "文化", level: "中級",
    contentVoweled: "تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ صَدَقَةٌ.",
    contentPlain: "تبسمك في وجه أخيك صدقة.",
    vocabList: [
      { word: "اِبْتِسَامَة", meaning: "笑顔/微笑み" },
      { word: "صَدَقَة", meaning: "施し/チャリティ" },
      { word: "وَجْه", meaning: "顔" }
    ],
    questions: [
      { id: 2641, type: "reading", text: "預言者の言葉によると、笑顔は何ですか？", options: ["罪", "施し（チャリティ）", "義務", "仕事"], correctIndex: 1, explanation: "「صَدَقَة (施し)」です。" },
      { id: 2642, type: "reading", text: "笑顔は人々に何を与えますか？", options: ["お金", "幸福と愛", "悲しみ", "怒り"], correctIndex: 1, explanation: "「السَّعَادَة وَالْمَحَبَّة」です。" },
      { id: 2643, type: "reading", text: "それはコストがかかりますか？", options: ["はい、高い", "いいえ、無料", "少しだけ", "税金がかかる"], correctIndex: 1, explanation: "お金はかかりません。" },
      { id: 2644, type: "vocabulary", text: "「قَلْب」の意味は？", options: ["心", "頭", "目", "手"], correctIndex: 0, explanation: "Heart（心）です。" },
      { id: 2645, type: "grammar", text: "「開きます」", options: ["يَفْتَحُ", "يُغْلِقُ", "يَكْسِرُ", "يَبْنِي"], correctIndex: 0, explanation: "「Yaftaḥu」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "الِابْتِسَامَةُ لُغَةٌ عَالَمِيَّةٌ.", japanese: "笑顔は世界共通の言語です。" },
      { speaker: "ナレーター", arabic: "لَا تُكَلِّفُ شَيْئًا وَلَكِنَّهَا تَعْنِي الْكَثِيرَ.", japanese: "コストはかかりませんが、多くのことを意味します。" },
      { speaker: "ナレーター", arabic: "تَفْتَحُ الْقُلُوبَ الْمُغْلَقَةَ.", japanese: "それは閉ざされた心を開きます。" },
      { speaker: "ナレーター", arabic: "حَثَّنَا الْإِسْلَامُ عَلَى الْبَشَاشَةِ.", japanese: "イスラムは私たちににこやかであることを勧めました。" },
      { speaker: "ナレーター", arabic: "اِبْدَأْ يَوْمَكَ بِابْتِسَامَةٍ.", japanese: "笑顔で一日を始めなさい。" }
    ]
  },

  // --- 23. 健康・スポーツ (265-269) ---
  {
    id: 265, title: "断食の健康効果", category: "健康", level: "中級",
    contentVoweled: "الصِّيَامُ يُفِيدُ الصِّحَّةَ وَيُرِيحُ الْمَعِدَةَ.",
    contentPlain: "الصيام يفيد الصحة ويريح المعدة.",
    vocabList: [
      { word: "صِيَام", meaning: "断食" },
      { word: "جِسْم", meaning: "体" },
      { word: "سُمُوم", meaning: "毒素" }
    ],
    questions: [
      { id: 2651, type: "reading", text: "断食は体にどう作用しますか？", options: ["弱くする", "健康にする/毒を出す", "太らせる", "病気にする"], correctIndex: 1, explanation: "「يُخَلِّصُ الْجِسْمَ مِنَ السُّمُومِ (体から毒素を取り除く)」です。" },
      { id: 2652, type: "reading", text: "胃にとってはどうですか？", options: ["疲れさせる", "休ませる", "傷つける", "満たす"], correctIndex: 1, explanation: "「يُرِيحُ الْمَعِدَةَ (胃を休ませる)」です。" },
      { id: 2653, type: "reading", text: "有名な格言は？", options: ["食べて健康に", "寝て健康に", "断食して健康になれ", "走って健康に"], correctIndex: 2, explanation: "「صُومُوا تَصِحُّوا (断食せよ、健康になるであろう)」です。" },
      { id: 2654, type: "vocabulary", text: "「إِرَادَة」の意味は？", options: ["弱さ", "意志", "食事", "睡眠"], correctIndex: 1, explanation: "Willpower（意志）です。" },
      { id: 2655, type: "grammar", text: "「強めます」", options: ["يُقَوِّي", "يُضْعِفُ", "يَكْسِرُ", "يَنْسَى"], correctIndex: 0, explanation: "「Yuqawwī」です。" }
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
    id: 266, title: "ラクダレース", category: "文化", level: "中級",
    contentVoweled: "سِبَاقُ الْهَجْنِ رِيَاضَةٌ عَرِيقَةٌ فِي الْخَلِيجِ.",
    contentPlain: "سباق الهجن رياضة عريقة في الخليج.",
    vocabList: [
      { word: "هَجْن", meaning: "競走用ラクダ" },
      { word: "مِضْمَار", meaning: "トラック/コース" },
      { word: "جَائِزَة", meaning: "賞品/賞金" }
    ],
    questions: [
      { id: 2661, type: "reading", text: "「ヘジン」とは何ですか？", options: ["馬", "競走用ラクダ", "車", "バイク"], correctIndex: 1, explanation: "「سِبَاق الْهَجْن」はラクダレースのことです。" },
      { id: 2662, type: "reading", text: "どこで人気ですか？", options: ["ヨーロッパ", "湾岸諸国", "アジア", "アメリカ"], correctIndex: 1, explanation: "「فِي الْخَلِيجِ (湾岸で)」です。" },
      { id: 2663, type: "reading", text: "最近は何がラクダに乗りますか？", options: ["子供", "ロボット", "猿", "誰も乗らない"], correctIndex: 1, explanation: "「رُوبُوت آلي (ロボット)」が騎手として使われます。" },
      { id: 2664, type: "vocabulary", text: "「سَرِيع」の意味は？", options: ["遅い", "速い", "重い", "高い"], correctIndex: 1, explanation: "Fast（速い）です。" },
      { id: 2665, type: "grammar", text: "「競争します」", options: ["يَتَنَافَسُ", "يَلْعَبُ", "يَنَامُ", "يَجْلِسُ"], correctIndex: 0, explanation: "「Yatanāfasu」です。" }
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
    id: 267, title: "アル・ジャザリー", category: "歴史", level: "中級",
    contentVoweled: "الْجَزَرِيُّ مُخْتَرِعٌ عَبْقَرِيٌّ. صَنَعَ سَاعَاتٍ وَآلَاتٍ مُدْهِشَةً.",
    contentPlain: "الجزري مخترع عبقري. صنع ساعات وآلات مدهشة.",
    vocabList: [
      { word: "مُخْتَرِع", meaning: "発明家" },
      { word: "سَاعَة", meaning: "時計" },
      { word: "آلَة", meaning: "機械" }
    ],
    questions: [
      { id: 2671, type: "reading", text: "アル・ジャザリーの職業は？", options: ["医者", "発明家/エンジニア", "詩人", "王様"], correctIndex: 1, explanation: "「مُخْتَرِع (発明家)」です。" },
      { id: 2672, type: "reading", text: "彼は何を作りましたか？", options: ["飛行機", "象の時計や機械", "ピラミッド", "電話"], correctIndex: 1, explanation: "「سَاعَة الْفِيل (象の時計)」が有名です。" },
      { id: 2673, type: "reading", text: "彼は何の分野の父と呼ばれますか？", options: ["医学", "ロボット工学", "文学", "歴史"], correctIndex: 1, explanation: "ロボット工学の先駆者です。" },
      { id: 2674, type: "vocabulary", text: "「مُدْهِش」の意味は？", options: ["普通の", "驚くべき/すごい", "退屈な", "悪い"], correctIndex: 1, explanation: "Amazing（驚くべき）です。" },
      { id: 2675, type: "grammar", text: "「作りました」", options: ["صَنَعَ", "أَكَلَ", "شَرِبَ", "قَرَأَ"], correctIndex: 0, explanation: "「Ṣana'a」です。" }
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
    id: 268, title: "アラビアヒョウ", category: "ニュース", level: "中級",
    contentVoweled: "النَّمِرُ الْعَرَبِيُّ حَيَوَانٌ نَادِرٌ وَمُهَدَّدٌ بِالِانْقِرَاضِ.",
    contentPlain: "النمر العربي حيوان نادر ومهدد بالانقراض.",
    vocabList: [
      { word: "نَمِر", meaning: "ヒョウ/トラ" },
      { word: "نَادِر", meaning: "珍しい" },
      { word: "حِمَايَة", meaning: "保護" }
    ],
    questions: [
      { id: 2681, type: "reading", text: "アラビアヒョウの状況は？", options: ["たくさんいる", "絶滅の危機にある", "ペットになっている", "海にいる"], correctIndex: 1, explanation: "「مُهَدَّد بِالِانْقِرَاضِ」です。" },
      { id: 2682, type: "reading", text: "どこに住んでいますか？", options: ["街中", "山岳地帯", "砂漠の真ん中", "家"], correctIndex: 1, explanation: "「الْجِبَال (山)」に住んでいます。" },
      { id: 2683, type: "reading", text: "サウジは何をしていますか？", options: ["狩っている", "繁殖と保護プログラム", "無視している", "売っている"], correctIndex: 1, explanation: "「بَرْنَامَج لِحِمَايَتِهِ」です。" },
      { id: 2684, type: "vocabulary", text: "「صَغِير」の意味は？", options: ["大きい", "小さい", "長い", "速い"], correctIndex: 1, explanation: "Small（小さい）です。" },
      { id: 2685, type: "grammar", text: "「生まれました」", options: ["وُلِدَ", "مَاتَ", "عَاشَ", "أَكَلَ"], correctIndex: 0, explanation: "「Wulida」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "يَعِيشُ النَّمِرُ الْعَرَبِيُّ فِي جِبَالِ السَّرَوَاتِ.", japanese: "アラビアヒョウはサラワート山脈に住んでいます。" },
      { speaker: "ナレーター", arabic: "إِنَّهُ أَصْغَرُ أَنْوَاعِ النُّمُورِ.", japanese: "それはヒョウの中で最も小さい種類です。" },
      { speaker: "ナレーター", arabic: "أَطْلَقَتِ السُّعُودِيَّةُ بَرْنَامَجًا لِإِكْثَارِهِ.", japanese: "サウジアラビアは繁殖プログラムを開始しました。" },
      { speaker: "ナレーター", arabic: "وُلِدَتْ أَشْبَالٌ جَدِيدَةٌ فِي الْعُلَا.", japanese: "アル・ウラーで新しい子供たちが生まれました。" },
      { speaker: "ナレーター", arabic: "هَذَا خَبَرٌ سَعِيدٌ لِلْبِيئَةِ.", japanese: "これは環境にとって嬉しいニュースです。" }
    ]
  },
  {
    id: 269, title: "ケチな男", category: "物語", level: "中級",
    contentVoweled: "كَانَ رَجُلٌ بَخِيلٌ يَأْكُلُ الْخُبْزَ بِالْمَاءِ لِيُوَفِّرَ الْمَالَ.",
    contentPlain: "كان رجل بخيل يأكل الخبز بالماء ليوفر المال.",
    vocabList: [
      { word: "بَخِيل", meaning: "ケチ" },
      { word: "ذَهَب", meaning: "金貨/金" },
      { word: "حُفْرَة", meaning: "穴" }
    ],
    questions: [
      { id: 2691, type: "reading", text: "男の性格は？", options: ["寛大", "ケチ", "勇敢", "賢い"], correctIndex: 1, explanation: "「بَخِيل (ケチ)」です。" },
      { id: 2692, type: "reading", text: "彼はお金をどうしていましたか？", options: ["使った", "寄付した", "穴に埋めた", "燃やした"], correctIndex: 2, explanation: "「دَفَنَهُ فِي حُفْرَةٍ (穴に埋めた)」です。" },
      { id: 2693, type: "reading", text: "お金はどうなりましたか？", options: ["増えた", "盗まれた", "金になった", "消えた"], correctIndex: 1, explanation: "「سُرِقَ (盗まれた)」です。" },
      { id: 2694, type: "vocabulary", text: "「حَجَر」の意味は？", options: ["パン", "石", "金", "水"], correctIndex: 1, explanation: "Stone（石）です。" },
      { id: 2695, type: "grammar", text: "「泣きました」", options: ["بَكَى", "ضَحِكَ", "نَامَ", "مَشَى"], correctIndex: 0, explanation: "「Bakā」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "جَمَعَ الْبَخِيلُ كُلَّ ذَهَبِهِ وَدَفَنَهُ فِي الْحَدِيقَةِ.", japanese: "ケチな男は全ての金貨を集めて庭に埋めました。" },
      { speaker: "ナレーター", arabic: "كَانَ يَأْتِي كُلَّ يَوْمٍ لِيَنْظُرَ إِلَيْهِ.", japanese: "彼は毎日それを見に来ていました。" },
      { speaker: "ナレーター", arabic: "رَآهُ لِصٌّ، فَجَاءَ فِي اللَّيْلِ وَسَرَقَ الذَّهَبَ.", japanese: "泥棒が彼を見て、夜に来て金を盗みました。" },
      { speaker: "ナレーター", arabic: "بَكَى الْبَخِيلُ، فَقَالَ لَهُ جَارُهُ:", japanese: "ケチな男は泣きました。すると隣人が言いました。" },
      { speaker: "ナレーター", arabic: "ضَعْ حَجَرًا بَدَلًا مِنْهُ، فَلَنْ يَنْفَعَكَ الذَّهَبُ.", japanese: "「代わりに石を置いておけ。どうせ金は使わないんだから。」" }
    ]
  },

  // --- 24. 歴史・社会 (270-274) ---
  {
    id: 270, title: "スーク・オカーズ", category: "歴史", level: "中級",
    contentVoweled: "سُوقُ عُكَاظ كَانَ مَجْمَعًا أَدَبِيًّا وَتِجَارِيًّا لِلْعَرَبِ.",
    contentPlain: "سوق عكاظ كان مجمعا أدبيا وتجاريا للعرب.",
    vocabList: [
      { word: "سُوق", meaning: "市場" },
      { word: "شِعْر", meaning: "詩" },
      { word: "قَبِيلَة", meaning: "部族" }
    ],
    questions: [
      { id: 2701, type: "reading", text: "スーク・オカーズは何の場所でしたか？", options: ["ただの市場", "戦争の場所", "文学と商業の集まり", "学校"], correctIndex: 2, explanation: "「مَجْمَعًا أَدَبِيًّا وَتِجَارِيًّا」です。" },
      { id: 2702, type: "reading", text: "そこで何を競いましたか？", options: ["剣", "詩", "料理", "走り"], correctIndex: 1, explanation: "「الشِّعْر (詩)」のコンテストが有名です。" },
      { id: 2703, type: "reading", text: "最高の詩（ムアッラカート）はどうされましたか？", options: ["燃やされた", "カアバに懸けられた", "捨てられた", "隠された"], correctIndex: 1, explanation: "「عُلِّقَتْ عَلَى الْكَعْبَةِ (カアバに懸けられた)」と言われています。" },
      { id: 2704, type: "vocabulary", text: "「حَكَم」の意味は？", options: ["詩人", "商人", "審査員/審判", "王"], correctIndex: 2, explanation: "Judge（審査員）です。" },
      { id: 2705, type: "grammar", text: "「言いました」", options: ["قَالَ", "سَمِعَ", "كَتَبَ", "قَرَأَ"], correctIndex: 0, explanation: "「Qāla」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "يَقَعُ سُوقُ عُكَاظ بِالْقُرْبِ مِنَ الطَّائِفِ.", japanese: "スーク・オカーズはターイフの近くにあります。" },
      { speaker: "ナレーター", arabic: "كَانَ الشُّعَرَاءُ يَأْتُونَ لِإِلْقَاءِ قَصَائِدِهِمْ.", japanese: "詩人たちは詩を朗読するためにやって来ました。" },
      { speaker: "ナレーター", arabic: "كَانَ النَّابِغَةُ الذُّبْيَانِيُّ هُوَ الْحَكَمَ بَيْنَهُمْ.", japanese: "ナ ービガ・アッ＝ズブヤーニーが彼らの審査員でした。" },
      { speaker: "ナレーター", arabic: "أَجْمَلُ الْقَصَائِدِ سُمِّيَتْ 'الْمُعَلَّقَاتِ'.", japanese: "最も美しい詩は「ムアッラカート（懸詩）」と呼ばれました。" },
      { speaker: "ナレーター", arabic: "الْيَوْمَ، تَمَّ إِحْيَاءُ السُّوقِ كَمَهْرَجَانٍ.", japanese: "今日、その市場はフェスティバルとして復活しました。" }
    ]
  },
  {
    id: 271, title: "ザムザムの水", category: "文化", level: "中級",
    contentVoweled: "مَاءُ زَمْزَمَ مَاءٌ مُبَارَكٌ يَنْبُعُ فِي مَكَّةَ.",
    contentPlain: "ماء زمزم ماء مبارك ينبع في مكة.",
    vocabList: [
      { word: "بِئْر", meaning: "井戸" },
      { word: "عَطَش", meaning: "渇き" },
      { word: "حَاجّ", meaning: "巡礼者" }
    ],
    questions: [
      { id: 2711, type: "reading", text: "ザムザムの井戸はどこにありますか？", options: ["マディーナ", "メッカ（ハラムの中）", "リヤド", "砂漠"], correctIndex: 1, explanation: "「فِي مَكَّةَ」です。" },
      { id: 2712, type: "reading", text: "誰のために湧き出しましたか？", options: ["イブラーヒーム", "イスマーイール", "ムハンマド", "ヌーフ"], correctIndex: 1, explanation: "「إِسْمَاعِيل (イスマーイール)」が赤ん坊の時です。" },
      { id: 2713, type: "reading", text: "巡礼者はどうしますか？", options: ["見るだけ", "飲む", "捨てる", "売る"], correctIndex: 1, explanation: "「يَشْرَبُونَهُ (それを飲む)」です。" },
      { id: 2714, type: "vocabulary", text: "「طَعْم」の意味は？", options: ["色", "味", "匂い", "音"], correctIndex: 1, explanation: "Taste（味）です。" },
      { id: 2715, type: "grammar", text: "「飲みます」", options: ["يَشْرَبُ", "يَأْكُلُ", "يَنَامُ", "يَغْسِلُ"], correctIndex: 0, explanation: "「Yashrabu」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "انْفَجَرَ مَاءُ زَمْزَمَ تَحْتَ قَدَمَيِّ إِسْمَاعِيلَ.", japanese: "ザムザムの水はイスマーイールの足元から湧き出しました。" },
      { speaker: "ナレーター", arabic: "كَانَتْ أُمُّهُ هَاجَرُ تَبْحَثُ عَنِ الْمَاءِ.", japanese: "彼の母ハージャルは水を探していました。" },
      { speaker: "ナレーター", arabic: "قَالَ النَّبِيُّ: مَاءُ زَمْزَمَ لِمَا شُرِبَ لَهُ.", japanese: "預言者は言いました。「ザムザムの水は、それが飲まれた目的のためにある（願いが叶う）。」" },
      { speaker: "ナレーター", arabic: "يَشْرَبُهُ الْحُجَّاجُ وَيَأْخُذُونَهُ مَعَهُمْ.", japanese: "巡礼者はそれを飲み、持ち帰ります。" },
      { speaker: "ナレーター", arabic: "إِنَّهُ لَا يَجِفُّ أَبَدًا.", japanese: "それは決して枯れません。" }
    ]
  },
  {
    id: 272, title: "親への敬意", category: "文化", level: "中級",
    contentVoweled: "بِرُّ الْوَالِدَيْنِ وَاجِبٌ دِينِيٌّ وَأَخْلَاقِيٌّ.",
    contentPlain: "بر الوالدين واجب ديني وأخلاقي.",
    vocabList: [
      { word: "وَالِدَيْن", meaning: "両親" },
      { word: "اِحْتِرَام", meaning: "尊敬" },
      { word: "كِبَر", meaning: "老い/高齢" }
    ],
    questions: [
      { id: 2721, type: "reading", text: "両親への善行（ビッル）は？", options: ["趣味", "義務", "禁止", "遊び"], correctIndex: 1, explanation: "「وَاجِب (義務)」です。" },
      { id: 2722, type: "reading", text: "彼らが年を取ったらどうすべきですか？", options: ["無視する", "世話をする", "怒鳴る", "家を出る"], correctIndex: 1, explanation: "「الْعِنَايَة بِهِمَا (彼らの世話をする)」です。" },
      { id: 2723, type: "reading", text: "彼らに言ってはいけない言葉は？", options: ["はい", "ありがとう", "ウッフ（ちぇっ）", "どうぞ"], correctIndex: 2, explanation: "クルアーンで禁じられている「أُفٍّ (ウッフ＝不平の言葉)」です。" },
      { id: 2724, type: "vocabulary", text: "「يَد」の意味は？", options: ["足", "手", "目", "耳"], correctIndex: 1, explanation: "Hand（手）です。" },
      { id: 2725, type: "grammar", text: "「キスします」", options: ["يُقَبِّلُ", "يَضْرِبُ", "يُسَلِّمُ", "يَمْشِي"], correctIndex: 0, explanation: "「Yuqabbilu」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "أَمَرَ اللهُ بِالْإِحْسَانِ إِلَى الْوَالِدَيْنِ.", japanese: "神は両親への善行を命じました。" },
      { speaker: "ナレーター", arabic: "يُقَبِّلُ الْأَبْنَاءُ رَأْسَ وَيَدَ الْوَالِدَيْنِ.", japanese: "子供たちは両親の頭と手にキスをします（敬意の印）。" },
      { speaker: "ナレーター", arabic: "لَا تَقُلْ لَهُمَا 'أُفٍّ' وَلَا تَنْهَرْهُمَا.", japanese: "彼らに「ちぇっ」と言ってはいけないし、叱りつけてもいけない。" },
      { speaker: "ナレーター", arabic: "اخْفِضْ لَهُمَا جَنَاحَ الذُّلِّ مِنَ الرَّحْمَةِ.", japanese: "彼らに慈悲の翼を低くしなさい（謙虚に接しなさい）。" },
      { speaker: "ナレーター", arabic: "رِضَاهُمَا سَبَبٌ لِدُخُولِ الْجَنَّةِ.", japanese: "彼らの満足は天国に入る理由となります。" }
    ]
  },
  {
    id: 273, title: "太陽光エネルギー", category: "ニュース", level: "中級",
    contentVoweled: "تَسْتَثْمِرُ السُّعُودِيَّةُ فِي الطَّاقَةِ الشَّمْسِيَّةِ لِإِنْتَاجِ الْكَهْرُبَاءِ.",
    contentPlain: "تستثمر السعودية في الطاقة الشمسية لإنتاج الكهرباء.",
    vocabList: [
      { word: "شَمْس", meaning: "太陽" },
      { word: "طَاقَة", meaning: "エネルギー" },
      { word: "كَهْرُبَاء", meaning: "電気" }
    ],
    questions: [
      { id: 2731, type: "reading", text: "サウジは何に投資していますか？", options: ["石炭", "風", "太陽光エネルギー", "波"], correctIndex: 2, explanation: "「الطَّاقَة الشَّمْسِيَّة」です。" },
      { id: 2732, type: "reading", text: "サウジの気候はこのエネルギーにどうですか？", options: ["適していない", "非常に適している", "寒すぎる", "暗すぎる"], correctIndex: 1, explanation: "「مُنَاسِبَةٌ جِدًّا (非常に適している)」です。" },
      { id: 2733, type: "reading", text: "目的は？", options: ["石油への依存を減らす", "石油を増やす", "電気を消す", "空気を汚す"], correctIndex: 0, explanation: "「تَقْلِيل الِاعْتِمَادِ عَلَى النِّفْطِ」です。" },
      { id: 2734, type: "vocabulary", text: "「مَشْرُوع」の意味は？", options: ["会社", "プロジェクト", "家", "学校"], correctIndex: 1, explanation: "Projectです。" },
      { id: 2735, type: "grammar", text: "「作ります（発電します）」", options: ["يُوَلِّدُ", "يَأْكُلُ", "يَنَامُ", "يَلْعَبُ"], correctIndex: 0, explanation: "「Yuwallidu (Generate)」です。" }
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
    id: 274, title: "アラビアの詩（ムアッラカート）", category: "文学", level: "中級",
    contentVoweled: "الْمُعَلَّقَاتُ هِيَ أَشْهَرُ الْقَصَائِدِ فِي الْعَصْرِ الْجَاهِلِيِّ.",
    contentPlain: "المعلقات هي أشهر القصائد في العصر الجاهلي.",
    vocabList: [
      { word: "قَصِيدَة", meaning: "詩（一編）" },
      { word: "شَاعِر", meaning: "詩人" },
      { word: "ذَهَب", meaning: "金" }
    ],
    questions: [
      { id: 2741, type: "reading", text: "ムアッラカートとは何ですか？", options: ["古い家", "有名な詩", "王様の名前", "食べ物"], correctIndex: 1, explanation: "「أَشْهَر الْقَصَائِد (最も有名な詩)」です。" },
      { id: 2742, type: "reading", text: "いつの時代のものですか？", options: ["現代", "ジャーヒリーヤ（イスラム以前）", "アッバース朝", "オスマン帝国"], correctIndex: 1, explanation: "「الْعَصْر الْجَاهِلِيّ」です。" },
      { id: 2743, type: "reading", text: "なぜ「ムアッラカート（懸けられたもの）」と呼ばれますか？", options: ["首にかけたから", "カアバに懸けられたから", "木にかけたから", "壁に書いたから"], correctIndex: 1, explanation: "カアバ神殿の壁に懸けられたという説があります。" },
      { id: 2744, type: "vocabulary", text: "「بَحْر」の意味（詩の文脈）は？", options: ["海", "韻律/メーター", "船", "魚"], correctIndex: 1, explanation: "詩の韻律のことを「バハル（海）」と呼びます。" },
      { id: 2745, type: "grammar", text: "「書かれました」", options: ["كُتِبَتْ", "كَتَبَ", "يَكْتُبُ", "كَاتِب"], correctIndex: 0, explanation: "「Kutibat (Written)」受動態です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "كَانَ الْعَرَبُ يَقُولُونَ الشِّعْرَ بِفَصَاحَةٍ.", japanese: "アラブ人は流暢に詩を詠んでいました。" },
      { speaker: "ナレーター", arabic: "اخْتَارُوا أَجْوَدَ الْقَصَائِدِ وَكَتَبُوهَا بِمَاءِ الذَّهَبِ.", japanese: "彼らは最高の詩を選び、金水で書きました。" },
      { speaker: "ナレーター", arabic: "عَلَّقُوهَا عَلَى أَسْتَارِ الْكَعْبَةِ.", japanese: "彼らはそれをカアバの幕に懸けました。" },
      { speaker: "ナレーター", arabic: "مِنْ أَشْهَرِ الشُّعَرَاءِ: امْرُؤُ الْقَيْسِ وَعَنْتَرَةُ.", japanese: "有名な詩人には、イムルウ・アル・カイスやアンタラがいます。" },
      { speaker: "ナレーター", arabic: "هَذِهِ الْقَصَائِدُ تَصِفُ حَيَاةَ الصَّحْرَاءِ.", japanese: "これらの詩は砂漠の生活を描写しています。" }
    ]
  },

  // --- 25. 地理・自然・倫理 (275-279) ---
  {
    id: 275, title: "アブハの観光", category: "社会", level: "中級",
    contentVoweled: "أَبْهَا عَرُوسُ الْجَبَلِ، تَتَمَيَّزُ بِالْجَوِّ الْمُعْتَدِلِ.",
    contentPlain: "أبها عروس الجبل، تتميز بالجو المعتدل.",
    vocabList: [
      { word: "جَبَل", meaning: "山" },
      { word: "ضَبَاب", meaning: "霧" },
      { word: "سِيَاحَة", meaning: "観光" }
    ],
    questions: [
      { id: 2751, type: "reading", text: "アブハはどこにありますか？", options: ["砂漠", "海", "山の上（南部）", "地下"], correctIndex: 2, explanation: "「عَرُوس الْجَبَل (山の花嫁)」と呼ばれ、南部にあります。" },
      { id: 2752, type: "reading", text: "天気はどうですか？", options: ["とても暑い", "穏やか/涼しい", "雪が降る", "乾燥している"], correctIndex: 1, explanation: "「مُعْتَدِل (穏やか)」です。" },
      { id: 2753, type: "reading", text: "何が見られますか？", options: ["霧と緑", "砂嵐", "高層ビル", "海"], correctIndex: 0, explanation: "「الضَّبَاب وَالْخُضْرَة」です。" },
      { id: 2754, type: "vocabulary", text: "「تِلِفْرِيك」の意味は？", options: ["電車", "ロープウェイ", "車", "船"], correctIndex: 1, explanation: "Cable car（ロープウェイ）です。" },
      { id: 2755, type: "grammar", text: "「登ります」", options: ["يَصْعَدُ", "يَنْزِلُ", "يَمْشِي", "يَقِفُ"], correctIndex: 0, explanation: "「Yaṣ'adu」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "تَقَعُ أَبْهَا فِي جَنُوبِ السُّعُودِيَّةِ.", japanese: "アブハはサウジアラビアの南部にあります。" },
      { speaker: "ナレーター", arabic: "تَسْقُطُ فِيهَا الْأَمْطَارُ فِي الصَّيْفِ.", japanese: "夏に雨が降ります。" },
      { speaker: "ナレーター", arabic: "يُحِبُّ السُّيَّاحُ رُكُوبَ التِّلِفْرِيكِ هُنَاكَ.", japanese: "観光客はそこでロープウェイに乗るのが好きです。" },
      { speaker: "ナレーター", arabic: "الْجِبَالُ الْخَضْرَاءُ تُعَانِقُ الضَّبَابَ.", japanese: "緑の山々が霧を抱きしめます。" },
      { speaker: "ナレーター", arabic: "إِنَّهَا مَكَانٌ رَائِعٌ لِلْهَرَبِ مِنَ الْحَرِّ.", japanese: "それは暑さから逃れるのに素晴らしい場所です。" }
    ]
  },
  {
    id: 276, title: "春の砂漠", category: "自然", level: "中級",
    contentVoweled: "فِي الرَّبِيعِ، تَتَحَوَّلُ الصَّحْرَاءُ إِلَى بِسَاطٍ أَخْضَرَ.",
    contentPlain: "في الربيع، تتحول الصحراء إلى بساط أخضر.",
    vocabList: [
      { word: "رَبِيع", meaning: "春" },
      { word: "زَهْرَة", meaning: "花" },
      { word: "كَمْأَة", meaning: "トリュフ（キノコ）" }
    ],
    questions: [
      { id: 2761, type: "reading", text: "春になると砂漠はどうなりますか？", options: ["もっと暑くなる", "緑になる", "雪が降る", "変わらない"], correctIndex: 1, explanation: "「بِسَاط أَخْضَر (緑の絨毯)」になります。" },
      { id: 2762, type: "reading", text: "人々は何を探しに行きますか？", options: ["金", "水", "キノコ（トリュフ）", "石"], correctIndex: 2, explanation: "「الْكَمْأَة (トリュフ/キノコ)」です。" },
      { id: 2763, type: "reading", text: "空気（香り）はどうですか？", options: ["臭い", "花の香りがする", "煙たい", "埃っぽい"], correctIndex: 1, explanation: "「رَائِحَةُ الْأَزْهَارِ」です。" },
      { id: 2764, type: "vocabulary", text: "「مَطَر」の意味は？", options: ["風", "雨", "太陽", "雲"], correctIndex: 1, explanation: "Rain（雨）です。" },
      { id: 2765, type: "grammar", text: "「探します」", options: ["يَبْحَثُ عَنْ", "يَجِدُ", "يُضَيِّعُ", "يَخْتَبِئُ"], correctIndex: 0, explanation: "「Yabḥathu 'an」です。" }
    ],
    sentences: [
      { speaker: "ナレーター", arabic: "بَعْدَ سُقُوطِ الْمَطَرِ، يَنْمُو الْعُشْبُ.", japanese: "雨が降った後、草が生えます。" },
      { speaker: "ナレーター", arabic: "تَظْهَرُ زُهُورُ الْخُزَامَى الْبَنَفْسَجِيَّةُ.", japanese: "紫色のラベンダーの花が現れます。" },
      { speaker: "ナレーター", arabic: "يَخْرُجُ النَّاسُ لِلْبَحْثِ عَنِ الْكَمْأَةِ (الْفَقْعِ).", japanese: "人々はトリュフ（ファグア）を探しに出かけます。" },
      { speaker: "ナレーター", arabic: "الْهَوَاءُ عَلِيلٌ وَالْمَنْظَرُ خَلَّابٌ.", japanese: "空気は爽やかで、景色は魅力的です。" },
      { speaker: "ナレーター", arabic: "الرَّبِيعُ أَجْمَلُ فُصُولِ السَّنَةِ فِي الصَّحْرَاءِ.", japanese: "春は砂漠で最も美しい季節です。" }
    ]
  },
  {
    id: 277, title: "正直な商人", category: "物語", level: "中級",
    contentVoweled: "التَّاجِرُ الْأَمِينُ يَرْبَحُ ثِقَةَ النَّاسِ وَرِضَا اللهِ.",
    contentPlain: "التاجر الأمين يربح ثقة الناس ورضا الله.",
    vocabList: [
      { word: "أَمِين", meaning: "正直な/信頼できる" },
      { word: "عَيْب", meaning: "欠陥/欠点" },
      { word: "بَيْع", meaning: "販売" }
    ],
    questions: [
      { id: 2771, type: "reading", text: "商人は何を売っていましたか？", options: ["車", "服", "馬", "家"], correctIndex: 1, explanation: "「ثَوْب (服)」を売っていました。" },
      { id: 2772, type: "reading", text: "商品には何がありましたか？", options: ["お金", "欠陥（傷）", "サイン", "おまけ"], correctIndex: 1, explanation: "「عَيْب (欠陥)」がありました。" },
      { id: 2773, type: "reading", text: "商人はどうしましたか？", options: ["隠した", "客に伝えた", "嘘をついた", "安くした"], correctIndex: 1, explanation: "「أَخْبَرَ الْمُشْتَرِيَ (買い手に教えた)」です。" },
      { id: 2774, type: "vocabulary", text: "「ثِقَة」の意味は？", options: ["疑い", "信頼", "嘘", "金"], correctIndex: 1, explanation: "Trust（信頼）です。" },
      { id: 2775, type: "grammar", text: "「隠します」", options: ["يُخْفِي", "يُظْهِرُ", "يَقُولُ", "يَعْرِفُ"], correctIndex: 0, explanation: "「Yukhfī」です。" }
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
    id: 278, title: "テレビゲーム", category: "記事", level: "中級",
    contentVoweled: "الْأَلْعَابُ الْإِلِكْتُرُونِيَّةُ مُمْتِعَةٌ لَكِنْ لَهَا أَضْرَارٌ.",
    contentPlain: "الألعاب الإلكترونية ممتعة لكن لها أضرار.",
    vocabList: [
      { word: "لُعْبَة", meaning: "ゲーム" },
      { word: "شَاشَة", meaning: "画面" },
      { word: "عَيْن", meaning: "目" }
    ],
    questions: [
      { id: 2781, type: "reading", text: "子供たちは何が好きですか？", options: ["勉強", "テレビゲーム", "掃除", "寝ること"], correctIndex: 1, explanation: "「الْأَلْعَاب الْإِلِكْتُرُونِيَّة」です。" },
      { id: 2782, type: "reading", text: "ゲームの良い点は？", options: ["目が悪くなる", "楽しい/知能を育てる", "眠くなる", "太る"], correctIndex: 1, explanation: "「تُنَمِّي الذَّكَاءَ (知能を育てる)」こともあります。" },
      { id: 2783, type: "reading", text: "悪い点は？", options: ["友達が増える", "目を傷つける/運動不足", "頭が良くなる", "金持ちになる"], correctIndex: 1, explanation: "「تُؤْذِي الْعَيْنَ (目を傷つける)」です。" },
      { id: 2784, type: "vocabulary", text: "「إِدْمَان」の意味は？", options: ["趣味", "依存/中毒", "スポーツ", "仕事"], correctIndex: 1, explanation: "Addiction（依存）です。" },
      { id: 2785, type: "grammar", text: "「遊びます」", options: ["يَلْعَبُ", "يَدْرُسُ", "يَعْمَلُ", "يَأْكُلُ"], correctIndex: 0, explanation: "「Yal'abu」です。" }
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
    id: 279, title: "サウジの冬", category: "文化", level: "中級",
    contentVoweled: "الشِّتَاءُ فِي السُّعُودِيَّةِ قَصِيرٌ لَكِنَّهُ مَحْبُوبٌ.",
    contentPlain: "الشتاء في السعودية قصير لكنه محبوب.",
    vocabList: [
      { word: "شِتَاء", meaning: "冬" },
      { word: "نَار", meaning: "火" },
      { word: "فَرْوَة", meaning: "ファルワ（冬のコート）" }
    ],
    questions: [
      { id: 2791, type: "reading", text: "サウジの冬はどうですか？", options: ["とても長い", "短い", "暑い", "雪が多い"], correctIndex: 1, explanation: "「قَصِير (短い)」です。" },
      { id: 2792, type: "reading", text: "人々は何を着ますか？", options: ["水着", "ファルワ（毛皮のコート）", "薄い服", "帽子"], correctIndex: 1, explanation: "「الْفَرْوَة」を着ます。" },
      { id: 2793, type: "reading", text: "どこに集まりますか？", options: ["プールの周り", "火の周り", "冷蔵庫の前", "屋根の上"], correctIndex: 1, explanation: "「حَوْلَ النَّارِ (火の周り)」です。" },
      { id: 2794, type: "vocabulary", text: "「زَنْجَبِيل」の意味は？", options: ["コーヒー", "生姜（ジンジャー）", "お茶", "砂糖"], correctIndex: 1, explanation: "冬に人気の飲み物、生姜（Zanjabīl）です。" },
      { id: 2795, type: "grammar", text: "「着ます」", options: ["يَلْبَسُ", "يَخْلَعُ", "يَشْتَرِي", "يَغْسِلُ"], correctIndex: 0, explanation: "「Yalbasu」です。" }
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
    id: 1000, title: "サウジ・ビジョン2030（詳細）", category: "経済", level: "上級",
    contentVoweled: "رُؤْيَةُ الْمَمْلَكَةِ 2030 لَيْسَتْ مُجَرَّدَ خُطَّةٍ اقْتِصَادِيَّةٍ، بَلْ هِيَ خَارِطَةُ طَرِيقٍ لِتَحَوُّلٍ اجْتِمَاعِيٍّ وَثَقَافِيٍّ شَامِلٍ...",
    contentPlain: "رؤية المملكة 2030 ليست مجرد خطة اقتصادية، بل هي خارطة طريق لتحول اجتماعي وثقافي شامل. تهدف هذه الرؤية الطموحة إلى تقليل الاعتماد الكلي على النفط كمصدر وحيد للدخل، وذلك من خلال تنويع الاقتصاد وتطوير قطاعات حيوية جديدة. من أهم ركائز الرؤية تمكين المرأة السعودية وزيادة مشاركتها في سوق العمل، بالإضافة إلى فتح أبواب السياحة للعالم. كما تشمل الرؤية إطلاق مشاريع عملاقة مثل 'نيوم' و'القدية' لتحسين جودة الحياة وجذب الاستثمارات الأجنبية.",
    vocabList: [
      { word: "شَامِل", meaning: "包括的な" },
      { word: "تَمْكِين", meaning: "エンパワーメント" },
      { word: "اسْتِثْمَار", meaning: "投資" },
      { word: "عِمْلَاق", meaning: "巨大な" }
    ],
    questions: [
      { id: 10001, type: "reading", text: "ビジョン2030は単なる経済計画ですか？", options: ["はい、経済のみです", "いいえ、包括的な社会変革です", "単なる観光計画です", "石油計画です"], correctIndex: 1, explanation: "本文に「ليس مجرد خطة اقتصادية بل تحول اجتماعي（単なる経済計画ではなく社会変革）」とあります。" },
      { id: 10002, type: "reading", text: "経済に関しての主な目的は？", options: ["石油だけに頼る", "経済を多様化する", "輸入を禁止する", "税金をなくす"], correctIndex: 1, explanation: "「تنويع الاقتصاد（経済の多様化）」と明記されています。" },
      { id: 10003, type: "reading", text: "女性に関しては何を目指していますか？", options: ["労働参加を減らす", "家にいさせる", "エンパワーメントと労働参加の増加", "海外へ送る"], correctIndex: 2, explanation: "「تمكين المرأة وزيادة مشاركتها（女性のエンパワーメントと参加増加）」とあります。" },
      { id: 10004, type: "vocabulary", text: "「تَطْوِير」の意味は？", options: ["破壊", "開発/発展", "停止", "購入"], correctIndex: 1, explanation: "Development（開発）です。" },
      { id: 10005, type: "grammar", text: "「〜に加えて」", options: ["بِالْإِضَافَةِ إِلَى", "بِسَبَبِ", "رَغْمَ", "مِنْ أَجْلِ"], correctIndex: 0, explanation: "「Bi-al-iḍāfati ilā」は文中で「さらに〜」という意味で使われています。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "أَطْلَقَ وَلِيُّ الْعَهْدِ الْأَمِيرُ مُحَمَّدُ بْنُ سَلْمَانَ هَذِهِ الرُّؤْيَةَ لِبِنَاءِ مُسْتَقْبَلٍ مُشْرِقٍ.", japanese: "ムハンマド・ビン・サルマン皇太子は、輝かしい未来を築くためにこのビジョンを発表しました。" },
      { speaker: "記事", arabic: "تَهْدِفُ الرُّؤْيَةُ بِشَكْلٍ أَسَاسِيٍّ إِلَى تَنْوِيعِ مَصَادِرِ الدَّخْلِ وَعَدَمِ الِاعْتِمَادِ عَلَى النِّفْطِ فَقَطْ.", japanese: "ビジョンは基本的に、収入源を多様化し、石油のみに依存しないことを目指しています。" },
      { speaker: "記事", arabic: "تَمَّ فَتْحُ الْمَجَالِ لِلسِّيَاحَةِ وَالتَّرْفِيهِ لِتَكُونَ رَوَافِدَ جَدِيدَةً لِلِاقْتِصَادِ.", japanese: "観光とエンターテインメントの分野が、経済の新しい支流となるよう開放されました。" },
      { speaker: "記事", arabic: "تُرَكِّزُ الْخُطَّةُ أَيْضًا عَلَى تَمْكِينِ الْمَرْأَةِ وَرَفْعِ نِسْبَةِ مُشَارَكَتِهَا فِي سُوقِ الْعَمَلِ.", japanese: "計画はまた、女性のエンパワーメントと労働市場への参加率向上にも焦点を当てています。" },
      { speaker: "記事", arabic: "تَشْمَلُ الرُّؤْيَةُ مَشَارِيعَ ضَخْمَةً مِثْلَ مَدِينَةِ 'نِيُوم' الذَّكِيَّةِ.", japanese: "ビジョンには、スマートシティ「NEOM」のような巨大プロジェクトが含まれています。" },
      { speaker: "記事", arabic: "هَذِهِ الْخُطَوَاتُ سَتَجْعَلُ الْمَمْلَكَةَ قُوَّةً اسْتِثْمَارِيَّةً عَالَمِيَّةً.", japanese: "これらのステップは、王国を世界的な投資大国にするでしょう。" }
    ]
  },

  // --- 2. 歴史・文明 (History) ---
  {
    id: 1001, title: "イスラムの黄金時代（詳細）", category: "歴史", level: "上級",
    contentVoweled: "شَهِدَ الْعَصْرُ الذَّهَبِيُّ لِلْإِسْلَامِ تَقَدُّمًا حَضَارِيًّا لَا مَثِيلَ لَهُ...",
    contentPlain: "شهد العصر الذهبي للإسلام تقدما حضاريا لا مثيل له في مجالات العلوم والفنون والفلسفة. كانت بغداد في ذلك الوقت عاصمة للعلم والمعرفة، حيث أسس الخليفة المأمون 'بيت الحكمة' الشهير. توافد العلماء من جميع أنحاء العالم لترجمة الكتب اليونانية والفارسية والهندية إلى اللغة العربية، ولم يكتفوا بالترجمة بل أضافوا ابتكاراتهم الخاصة التي مهدت الطريق للنهضة العلمية الحديثة.",
    vocabList: [
      { word: "عَصْر", meaning: "時代" },
      { word: "تَقَدُّم", meaning: "進歩" },
      { word: "تَرْجَمَة", meaning: "翻訳" },
      { word: "نَهْضَة", meaning: "復興/ルネサンス" }
    ],
    questions: [
      { id: 10011, type: "reading", text: "黄金時代には何がありましたか？", options: ["後退", "科学と芸術の類まれな進歩", "飢餓", "戦争のみ"], correctIndex: 1, explanation: "「تقدما حضاريا لا مثيل له (類を見ない文明の進歩)」と記述されています。" },
      { id: 10012, type: "reading", text: "当時の「知の都」はどこでしたか？", options: ["パリ", "ロンドン", "バグダッド", "ローマ"], correctIndex: 2, explanation: "「كانت بغداد... عاصمة للعلم (バグダッドは知の都だった)」とあります。" },
      { id: 10013, type: "reading", text: "「知恵の館」で主に行われたことは？", options: ["料理", "翻訳と研究", "スポーツ", "睡眠"], correctIndex: 1, explanation: "「ترجمة الكتب... وأضافوا ابتكاراتهم (本の翻訳と発明の追加)」です。" },
      { id: 10014, type: "vocabulary", text: "「عُلَمَاء」の意味は？", options: ["学生", "学者たち", "王様", "兵士"], correctIndex: 1, explanation: "Scholars（学者・複数形）です。" },
      { id: 10015, type: "grammar", text: "「道を切り開いた」", options: ["مَهَّدَ الطَّرِيقَ", "أَغْلَقَ الطَّرِيقَ", "مَشَى فِي الطَّرِيقِ", "بَنَى الطَّرِيقَ"], correctIndex: 0, explanation: "「Mahhada al-ṭarīqa (Paved the way)」は重要な熟語です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "فِي الْعَصْرِ الْعَبَّاسِيِّ، أَصْبَحَتْ بَغْدَادُ مَرْكَزًا لِلْعِلْمِ وَالْعُلَمَاءِ.", japanese: "アッバース朝時代、バグダッドは学問と学者の中心地となりました。" },
      { speaker: "記事", arabic: "أَنْشَأَ الْخَلِيفَةُ الْمَأْمُونُ مَكْتَبَةً ضَخْمَةً سَمَّاهَا 'بَيْتَ الْحِكْمَةِ'.", japanese: "カリフ・マアムーンは「知恵の館」と名付けた巨大な図書館を設立しました。" },
      { speaker: "記事", arabic: "قَامَ الْمُتَرْجِمُونَ بِنَقْلِ عُلُومِ الْأُمَمِ السَّابِقَةِ إِلَى الْعَرَبِيَّةِ.", japanese: "翻訳者たちは過去の国々の学問をアラビア語に移しました。" },
      { speaker: "記事", arabic: "بَرَزَ عُلَمَاءُ مِثْلُ الْخُوَارِزْمِيِّ فِي الرِّيَاضِيَّاتِ وَابْنِ سِينَا فِي الطِّبِّ.", japanese: "数学のフワーリズミーや医学のイブン・シーナーのような学者が頭角を現しました。" },
      { speaker: "記事", arabic: "هَذِهِ الْإِنْجَازَاتُ مَهَّدَتِ الطَّرِيقَ لِلنَّهْضَةِ الْأُورُوبِيَّةِ لَاحِقًا.", japanese: "これらの成果は、後のヨーロッパのルネサンスへの道を切り開きました。" }
    ]
  },

  // --- 3. 文学・詩 (Literature) ---
  {
    id: 1002, title: "詩人アル・ムタナッビー（詳細）", category: "文学", level: "上級",
    contentVoweled: "أَبُو الطَّيِّبِ الْمُتَنَبِّي هُوَ شَاعِرُ الْعَرَبِ الْأَكْبَرُ، الَّذِي مَلَأَ الدُّنْيَا وَشَغَلَ النَّاسَ...",
    contentPlain: "أبو الطيب المتنبي هو شاعر العرب الأكبر، الذي اشتهر بالحكمة والفخر. عاش حياة مليئة بالمغامرات والتنقل بين الملوك، وكان أشهرها فترته في بلاط سيف الدولة الحمداني في حلب. تميز شعره بقوة اللغة والاعتداد بالنفس. قيل إنه قتل بسبب بيت شعر هجا فيه رجلا فاتك به، وعندما حاول الهرب قال له غلامه: 'ألست القائل: الخيل والليل والبيداء تعرفني؟'، فرجع وقاتل حتى مات.",
    vocabList: [
      { word: "بَلِيغ", meaning: "雄弁な" },
      { word: "فَخْر", meaning: "誇り" },
      { word: "هَجَا", meaning: "風刺した/けなした" },
      { word: "أُسْطُورَة", meaning: "伝説" }
    ],
    questions: [
      { id: 10021, type: "reading", text: "ムタナッビーはどんな詩人として知られていますか？", options: ["謙虚な詩人", "知恵と誇りの詩人", "静かな詩人", "商人の詩人"], correctIndex: 1, explanation: "「اشتهر بالحكمة والفخر (知恵と誇りで有名)」です。" },
      { id: 10022, type: "reading", text: "彼は誰の宮廷で最も有名でしたか？", options: ["ハールーン・ラシード", "サイフ・アッダウラ（アレッポ）", "サラディン", "ムアーウィヤ"], correctIndex: 1, explanation: "「بلاط سيف الدولة الحمداني」です。" },
      { id: 10023, type: "reading", text: "彼が殺された理由は何ですか？", options: ["病気", "戦争", "彼が詠んだ風刺詩", "お金"], correctIndex: 2, explanation: "「بسبب بيت شعر هجا فيه رجلا (彼がある男を風刺した詩のせいで)」です。" },
      { id: 10024, type: "reading", text: "逃げようとした彼を誰が止めましたか？", options: ["敵", "彼の召使い（少年）", "王様", "馬"], correctIndex: 1, explanation: "「قال له غلامه (彼の召使いが言った)」です。" },
      { id: 10025, type: "grammar", text: "「〜ではないですか？（否定疑問）」", options: ["أَلَسْتَ", "هَلْ أَنْتَ", "مَنْ أَنْتَ", "كَيْفَ أَنْتَ"], correctIndex: 0, explanation: "「A-lasta... (Are you not...?)」という有名な問いかけです。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "يُعَدُّ الْمُتَنَبِّي مِنْ أَعْظَمِ شُعَرَاءِ الْعَرَبِ عَلَى الْإِطْلَاقِ.", japanese: "ムタナッビーは史上最も偉大なアラブの詩人の一人とみなされています。" },
      { speaker: "記事", arabic: "كَانَ طَمُوحًا جِدًّا وَيَبْحَثُ عَنِ الْمَجْدِ وَالسُّلْطَةِ.", japanese: "彼は非常に野心的で、栄光と権力を求めていました。" },
      { speaker: "記事", arabic: "ارْتَبَطَ اسْمُهُ بِالْأَمِيرِ سَيْفِ الدَّوْلَةِ فِي حَلَبَ.", japanese: "彼の名前はアレッポのサイフ・アッダウラ公と結びついています。" },
      { speaker: "記事", arabic: "قُتِلَ بسَبَبِ قَصِيدَةٍ هَجَا فِيهَا أَحَدَ خُصُومِهِ.", japanese: "彼は敵の一人を風刺した詩が原因で殺されました。" },
      { speaker: "記事", arabic: "عِنْدَمَا ذَكَّرَهُ الْغُلَامُ بِبَيْتِ الشِّعْرِ، عَادَ لِلْقِتَالِ وَمَاتَ شُجَاعًا.", japanese: "召使いにその詩句を思い出させられた時、彼は戦いに戻り、勇敢に死にました。" }
    ]
  },

  // --- 4. 科学・環境 (Science) ---
  {
    id: 1003, title: "再生可能エネルギー（詳細）", category: "科学", level: "上級",
    contentVoweled: "يُوَاجِهُ الْعَالَمُ تَحَدِّيَاتٍ بِيئِيَّةً خَطِيرَةً بِسَبَبِ الِاحْتِبَاسِ الْحَرَارِيِّ...",
    contentPlain: "يواجه العالم تحديات بيئية خطيرة بسبب الاحتباس الحراري وتغير المناخ. استجابة لذلك، أطلقت المملكة 'مبادرة السعودية الخضراء' التي تهدف إلى زراعة 10 مليارات شجرة في جميع أنحاء البلاد. بالإضافة إلى ذلك، تخطط المملكة لرفع نسبة استخدام الطاقة المتجددة لتصل إلى 50% من إنتاج الكهرباء بحلول عام 2030، مما سيساهم بشكل كبير في خفض الانبعاثات الكربونية وحماية كوكب الأرض.",
    vocabList: [
      { word: "اِحْتِبَاس", meaning: "温暖化/保持" },
      { word: "تَحَدِّيَات", meaning: "課題/チャレンジ" },
      { word: "انْبِعَاثَات", meaning: "排出" },
      { word: "تَوْلِيد", meaning: "発電/生成" }
    ],
    questions: [
      { id: 10031, type: "reading", text: "世界が直面している問題の原因は？", options: ["植林", "地球温暖化と気候変動", "人口減少", "平和"], correctIndex: 1, explanation: "「بسبب الاحتباس الحراري وتغير المناخ」です。" },
      { id: 10032, type: "reading", text: "「サウジ・グリーン」イニシアチブの植樹目標は？", options: ["100万本", "1000本", "100億本", "50億本"], correctIndex: 2, explanation: "「زراعة 10 مليارات شجرة (10 billion trees)」と書かれています。" },
      { id: 10033, type: "reading", text: "2030年までの再生可能エネルギーの目標比率は？", options: ["10%", "50%", "80%", "100%"], correctIndex: 1, explanation: "「تصل إلى 50% (50%に達する)」です。" },
      { id: 10034, type: "vocabulary", text: "「حِقْبَة」の意味は？", options: ["場所", "時代/Era", "カバン", "権利"], correctIndex: 1, explanation: "Era/Period（時代）です。" },
      { id: 10035, type: "grammar", text: "「貢献します」", options: ["يُسْهِمُ فِي", "يَأْخُذُ مِنْ", "يَقْطَعُ", "يَنْسَى"], correctIndex: 0, explanation: "「Yushimu fī (Contribute to)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "التَّغَيُّرُ الْمُنَاخِيُّ يُهَدِّدُ كَوْكَبَنَا.", japanese: "気候変動は私たちの惑星を脅かしています。" },
      { speaker: "記事", arabic: "أَطْلَقَتِ السُّعُودِيَّةُ مُبَادَرَةً طَمُوحَةً لِحِمَايَةِ الْبِيئَةِ.", japanese: "サウジアラビアは環境保護のための野心的なイニシアチブを開始しました。" },
      { speaker: "記事", arabic: "تَسْتَهْدِفُ الْخُطَّةُ زِرَاعَةَ عَشَرَةِ مِلْيَارَاتِ شَجَرَةٍ.", japanese: "計画は100億本の植樹を目標としています。" },
      { speaker: "記事", arabic: "سَيَتِمُّ الِاعْتِمَادُ عَلَى الطَّاقَةِ الشَّمْسِيَّةِ وَطَاقَةِ الرِّيَاحِ.", japanese: "太陽光エネルギーと風力エネルギーに依存することになります。" },
      { speaker: "記事", arabic: "هَذَا سَيُسَاعِدُ فِي تَقْلِيلِ الِانْبِعَاثَاتِ الضَّارَّةِ.", japanese: "これは有害な排出を減らすのに役立ちます。" }
    ]
  },

  // --- 5. 観光・プロジェクト (Tourism) ---
  {
    id: 1004, title: "紅海プロジェクト（詳細）", category: "ニュース", level: "上級",
    contentVoweled: "مَشْرُوعُ الْبَحْرِ الْأَحْمَرِ يُمَثِّلُ وَجْهًا جَدِيدًا لِلسِّيَاحَةِ الْفَاخِرَةِ الْمُسْتَدَامَةِ...",
    contentPlain: "مشروع البحر الأحمر يمثل وجها جديدا للسياحة الفاخرة المستدامة. يمتد المشروع على مساحة شاسعة ويضم أرخبيلا يحتوي على أكثر من 90 جزيرة بكر ومناظر طبيعية خلابة مثل البراكين الخامدة والشعب المرجانية. ما يميز هذا المشروع هو التزامه البيئي الصارم، حيث سيعتمد بنسبة 100% على الطاقة المتجددة، وسيتم حظر استخدام البلاستيك غير القابل لإعادة التدوير للحفاظ على الكائنات البحرية النادرة.",
    vocabList: [
      { word: "مُسْتَدَام", meaning: "持続可能な" },
      { word: "أَرْخَبِيل", meaning: "群島" },
      { word: "خَامِد", meaning: "休止した/休火山の" },
      { word: "حَظْر", meaning: "禁止" }
    ],
    questions: [
      { id: 10041, type: "reading", text: "このプロジェクトの観光タイプは？", options: ["格安旅行", "持続可能な豪華観光", "工業開発", "農業"], correctIndex: 1, explanation: "「للسياحة الفاخرة المستدامة (持続可能なラグジュアリー観光)」です。" },
      { id: 10042, type: "reading", text: "プロジェクトに含まれる島の数は？", options: ["10", "50", "90以上", "1000"], correctIndex: 2, explanation: "「أكثر من 90 جزيرة (90以上の島)」です。" },
      { id: 10043, type: "reading", text: "環境への取り組みで正しいのは？", options: ["石炭を使う", "プラスチックを禁止し再エネ100%", "木を切る", "海を埋める"], correctIndex: 1, explanation: "「يعتمد بنسبة 100% على الطاقة المتجددة」と「حظر البلاستيك」です。" },
      { id: 10044, type: "vocabulary", text: "「نَادِر」の意味は？", options: ["多い", "珍しい/希少な", "赤い", "安い"], correctIndex: 1, explanation: "Rare（希少な）です。" },
      { id: 10045, type: "grammar", text: "「表します/代表します」", options: ["يُمَثِّلُ", "يَلْعَبُ", "يَكْتُبُ", "يَجْلِسُ"], correctIndex: 0, explanation: "「Yumaththilu (Represent)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "يَقَعُ الْمَشْرُوعُ عَلَى السَّاحِلِ الْغَرْبِيِّ لِلْمَمْلَكَةِ.", japanese: "プロジェクトは王国の西海岸に位置しています。" },
      { speaker: "記事", arabic: "يَضُمُّ أَكْثَرَ مِنْ 90 جَزِيرَةً طَبِيعِيَّةً لَمْ تُمَسَّ.", japanese: "手つかずの90以上の自然の島々を含んでいます。" },
      { speaker: "記事", arabic: "يَهْدِفُ الْمَشْرُوعُ إِلَى تَقْدِيمِ تَجْرِبَةٍ سِيَاحِيَّةٍ فَاخِرَةٍ.", japanese: "プロジェクトは豪華な観光体験を提供することを目指しています。" },
      { speaker: "記事", arabic: "يَلْتَزِمُ بِحِمَايَةِ الْبِيئَةِ وَالشُّعَبِ الْمَرْجَانِيَّةِ.", japanese: "環境とサンゴ礁の保護にコミットしています。" },
      { speaker: "記事", arabic: "سَيَعْتَمِدُ الْمَشْرُوعُ بِالْكَامِلِ عَلَى الطَّاقَةِ الْمُتَجَدِّدَةِ.", japanese: "プロジェクトは完全に再生可能エネルギーに依存します。" }
    ]
  },
  // --- 6. テクノロジー・未来 (Technology) ---
  {
    id: 1005, title: "AIの倫理", category: "科学", level: "上級",
    contentVoweled: "يُثِيرُ التَّطَوُّرُ السَّرِيعُ لِلذَّكَاءِ الِاصْطِنَاعِيِّ مَخَاوِفَ أَخْلَاقِيَّةً كَبِيرَةً. بَيْنَمَا يُسْهِمُ فِي تَحْسِينِ الرِّعَايَةِ الصِّحِّيَّةِ وَزِيَادَةِ الْإِنْتَاجِيَّةِ، هُنَاكَ قَلَقٌ مِنْ تَأْثِيرِهِ عَلَى الْخُصُوصِيَّةِ وَفُرَصِ الْعَمَلِ. يَتَطَلَّبُ الْأَمْرُ وَضْعَ قَوَانِينَ صَارِمَةٍ لِضَمَانِ اسْتِخْدَامِ هَذِهِ التِّكْنُولُوجِيَا بِمَا يَخْدِمُ الْبَشَرِيَّةَ دُونَ إِحْدَاثِ ضَرَرٍ.",
    contentPlain: "يثير التطور السريع للذكاء الاصطناعي مخاوف أخلاقية كبيرة. بينما يسهم في تحسين الرعاية الصحية وزيادة الإنتاجية، هناك قلق من تأثيره على الخصوصية وفرص العمل. يتطلب الأمر وضع قوانين صارمة لضمان استخدام هذه التكنولوجيا بما يخدم البشرية دون إحداث ضرر، خاصة فيما يتعلق بالتحيز الخوارزمي والأسلحة المستقلة.",
    vocabList: [
      { word: "أَخْلَاقِيّ", meaning: "倫理的な" },
      { word: "خُصُوصِيَّة", meaning: "プライバシー" },
      { word: "قَانُون", meaning: "法律" },
      { word: "تَحَيُّز", meaning: "バイアス/偏見" }
    ],
    questions: [
      { id: 10051, type: "reading", text: "AIの急速な発展は何を引き起こしていますか？", options: ["喜び", "倫理的な懸念", "経済の崩壊", "平和"], correctIndex: 1, explanation: "「مخاوف أخلاقية (倫理的な懸念)」を引き起こしています。" },
      { id: 10052, type: "reading", text: "懸念されている影響の一つは？", options: ["健康の向上", "生産性の低下", "プライバシーと雇用への影響", "教育"], correctIndex: 2, explanation: "「تأثيره على الخصوصية وفرص العمل (プライバシーと雇用への影響)」です。" },
      { id: 10053, type: "reading", text: "この問題に対処するために何が必要ですか？", options: ["開発の停止", "厳格な法律の制定", "無視する", "ロボットを壊す"], correctIndex: 1, explanation: "「وضع قوانين صارمة (厳格な法律の制定)」が必要です。" },
      { id: 10054, type: "vocabulary", text: "「ضَرَر」の意味は？", options: ["益", "害/損害", "金", "時間"], correctIndex: 1, explanation: "Harm/Damage（害）です。" },
      { id: 10055, type: "grammar", text: "「保証するために」", options: ["لِضَمَانِ", "لِمَنْعِ", "لِأَخْذِ", "لِقَتْلِ"], correctIndex: 0, explanation: "「Li-ḍamāni (To guarantee)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "أَصْبَحَ الذَّكَاءُ الِاصْطِنَاعِيُّ جُزْءًا لَا يَتَجَزَّأُ مِنْ حَيَاتِنَا الْيَوْمِيَّةِ.", japanese: "人工知能は私たちの日常生活の不可欠な一部となりました。" },
      { speaker: "記事", arabic: "وَلَكِنَّ السُّؤَالَ الْمُهِمَّ هُوَ: كَيْفَ نَحْمِي حُقُوقَ الْإِنْسَانِ؟", japanese: "しかし重要な問いは、いかにして人権を守るかです。" },
      { speaker: "記事", arabic: "يَجِبُ أَنْ تَكُونَ الْأَنْظِمَةُ الذَّكِيَّةُ شَفَّافَةً وَعَادِلَةً.", japanese: "スマートシステムは透明で公正でなければなりません。" },
      { speaker: "記事", arabic: "الْمَسْؤُولِيَّةُ تَقَعُ عَلَى عَاتِقِ الْمُطَوِّرِينَ وَالْحُكُومَاتِ.", japanese: "責任は開発者と政府の肩にかかっています。" }
    ]
  },
  {
    id: 1006, title: "ザ・ライン (The Line)", category: "ニュース", level: "上級",
    contentVoweled: "ذَا لَايْن هِيَ مَدِينَةٌ ثَوْرِيَّةٌ يَتِمُّ بِنَاؤُهَا فِي نِيُوم. تَمْتَدُّ لِمَسَافَةِ 170 كِيلُومِتْرًا دُونَ شَوَارِعَ أَوْ سَيَّارَاتٍ.",
    contentPlain: "ذا لاين هي مدينة ثورية يتم بناؤها في نيوم. تمتد لمسافة 170 كيلومترا دون شوارع أو سيارات، وتعتمد بالكامل على الطاقة النظيفة. تهدف المدينة إلى تقديم نموذج جديد للحياة الحضرية يحافظ على الطبيعة، حيث يمكن للسكان الوصول إلى جميع احتياجاتهم اليومية مشيا على الأقدام في غضون 5 دقائق.",
    vocabList: [
      { word: "ثَوْرِيّ", meaning: "革命的な" },
      { word: "حَضَرِيّ", meaning: "都市の" },
      { word: "طَبِيعَة", meaning: "自然" },
      { word: "وُصُول", meaning: "アクセス/到着" }
    ],
    questions: [
      { id: 10061, type: "reading", text: "「ザ・ライン」の特徴は何ですか？", options: ["車が多い", "道路と車がない", "円形の都市", "地下都市"], correctIndex: 1, explanation: "「دون شوارع أو سيارات (通りも車もない)」です。" },
      { id: 10062, type: "reading", text: "都市の長さは？", options: ["50km", "100km", "170km", "500km"], correctIndex: 2, explanation: "「170 كيلومترا」です。" },
      { id: 10063, type: "reading", text: "生活に必要な施設へのアクセス時間は？", options: ["車で1時間", "徒歩5分以内", "電車で20分", "バスで30分"], correctIndex: 1, explanation: "「مشيا على الأقدام في غضون 5 دقائق」です。" },
      { id: 10064, type: "vocabulary", text: "「نَمُوذَج」の意味は？", options: ["建物", "モデル/模範", "問題", "解決"], correctIndex: 1, explanation: "Model（モデル）です。" },
      { id: 10065, type: "grammar", text: "「依存します」", options: ["تَعْتَمِدُ", "تَمْشِي", "تَبْنِي", "تَهْدِمُ"], correctIndex: 0, explanation: "「Ta'tamidu」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "تُعِيدُ 'ذَا لَايْن' تَعْرِيفَ مَفْهُومِ التَّنْمِيَةِ الْحَضَرِيَّةِ.", japanese: "「ザ・ライン」は都市開発の概念を再定義します。" },
      { speaker: "記事", arabic: "سَتَكُونُ خَالِيَةً مِنَ الِانْبِعَاثَاتِ الْكَرْبُونِيَّةِ تَمَامًا.", japanese: "炭素排出量が完全にゼロになります。" },
      { speaker: "記事", arabic: "التَّنَقُّلُ سَيَكُونُ عَبْرَ قِطَارٍ فَائِقِ السُّرْعَةِ تَحْتَ الْأَرْضِ.", japanese: "移動は地下の超高速鉄道によって行われます。" },
      { speaker: "記事", arabic: "الْهَدَفُ هُوَ وَضْعُ الْإِنْسَانِ أَوْلًا، لَا التِّكْنُولُوجِيَا.", japanese: "目標は、技術ではなく人間を第一に置くことです。" }
    ]
  },

  // --- 7. 文学・歴史 (Literature/History) ---
  {
    id: 1007, title: "アル・ジャーヒズ", category: "文学", level: "上級",
    contentVoweled: "الْجَاحِظُ أَدِيبٌ عَبَّاسِيٌّ كَبِيرٌ، اشْتُهِرَ بِكِتَابِهِ 'الْبُخَلَاءُ'.",
    contentPlain: "الجاحظ أديب عباسي كبير، اشتهر بكتابه 'البخلاء'. تميز أسلوبه بالسخرية والفكاهة والوصف الدقيق للمجتمع في عصره. في كتابه، وصف قصص البخلاء ونوادرهم بأسلوب ممتع، مما جعله من أهم المراجع في الأدب العربي والنقد الاجتماعي.",
    vocabList: [
      { word: "أَدِيب", meaning: "作家/文学者" },
      { word: "سُخْرِيَة", meaning: "皮肉/風刺" },
      { word: "وَصْف", meaning: "描写" },
      { word: "بَخِيل", meaning: "ケチ（複：ブハラー）" }
    ],
    questions: [
      { id: 10071, type: "reading", text: "ジャーヒズの有名な著書は？", options: ["千夜一夜物語", "カノン", "けちんぼ物語（アル・ブハラー）", "ルバイヤート"], correctIndex: 2, explanation: "「كتاب البخلاء (けちんぼ物語)」です。" },
      { id: 10072, type: "reading", text: "彼の文体の特徴は？", options: ["真面目で堅苦しい", "風刺とユーモア", "悲しい", "宗教的のみ"], correctIndex: 1, explanation: "「بالسخرية والفكاهة (風刺とユーモア)」です。" },
      { id: 10073, type: "reading", text: "彼は何を描写しましたか？", options: ["王の生活", "戦争", "社会とケチな人々の逸話", "自然"], correctIndex: 2, explanation: "「قصص البخلاء ونوادرهم」および当時の社会です。" },
      { id: 10074, type: "vocabulary", text: "「مُجْتَمَع」の意味は？", options: ["個人", "社会", "家族", "学校"], correctIndex: 1, explanation: "Society（社会）です。" },
      { id: 10075, type: "grammar", text: "「有名になりました」", options: ["اشْتُهِرَ", "كَتَبَ", "قَرَأَ", "ذَهَبَ"], correctIndex: 0, explanation: "「Ushtuhira (Became famous)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "كَانَ الْجَاحِظُ مُحِبًّا لِلْكُتُبِ وَالْقِرَاءَةِ.", japanese: "ジャーヒズは本と読書を愛していました。" },
      { speaker: "記事", arabic: "أَلَّفَ أَيْضًا كِتَابَ 'الْحَيَوَانِ' الَّذِي جَمَعَ فِيهِ بَيْنَ الْأَدَبِ وَالْعِلْمِ.", japanese: "彼は文学と科学を融合させた『動物の書』も著しました。" },
      { speaker: "記事", arabic: "مَاتَ تَحْتَ رُكَامِ كُتُبِهِ الَّتِي سَقَطَتْ عَلَيْهِ.", japanese: "彼は崩れ落ちてきた本の山の下敷きになって死にました（という伝説があります）。" },
      { speaker: "記事", arabic: "أُسْلُوبُهُ فِي الْكِتَابَةِ لَا يَزَالُ يُدَرَّسُ حَتَّى الْيَوْمِ.", japanese: "彼の文体は今日に至るまで研究されています。" }
    ]
  },
  {
    id: 1008, title: "アンダルスの科学", category: "歴史", level: "上級",
    contentVoweled: "كَانَتِ الْأَنْدَلُسُ جِسْرًا لِنَقْلِ الْعُلُومِ مِنَ الشَّرْقِ إِلَى الْغَرْبِ.",
    contentPlain: "كانت الأندلس جسرا لنقل العلوم من الشرق إلى الغرب. في مدن مثل قرطبة وإشبيلية، ازدهرت الزراعة والطب والفلك. قام الأوروبيون بترجمة الكتب العربية في طليطلة، مما ساعد في بزوغ فجر النهضة الأوروبية وإنهاء العصور المظلمة.",
    vocabList: [
      { word: "جِسْر", meaning: "橋" },
      { word: "غَرْب", meaning: "西/西洋" },
      { word: "نَقْل", meaning: "移動/伝達" },
      { word: "ظَلَام", meaning: "闇" }
    ],
    questions: [
      { id: 10081, type: "reading", text: "アンダルスはどのような役割を果たしましたか？", options: ["壁", "科学を伝える橋", "戦場", "障害"], correctIndex: 1, explanation: "「جسرا لنقل العلوم (科学を伝える橋)」です。" },
      { id: 10082, type: "reading", text: "繁栄した都市の例は？", options: ["パリとロンドン", "コルドバとセビリア", "ローマとアテネ", "ニューヨーク"], correctIndex: 1, explanation: "「قرطبة وإشبيلية (コルドバとセビリア)」です。" },
      { id: 10083, type: "reading", text: "ヨーロッパ人はトレドで何をしましたか？", options: ["本を燃やした", "アラビア語の本を翻訳した", "戦争をした", "寝ていた"], correctIndex: 1, explanation: "「ترجمة الكتب العربية (アラビア語の書の翻訳)」です。" },
      { id: 10084, type: "vocabulary", text: "「زِرَاعَة」の意味は？", options: ["工業", "農業", "商業", "漁業"], correctIndex: 1, explanation: "Agriculture（農業）です。" },
      { id: 10085, type: "grammar", text: "「助けました」", options: ["سَاعَدَ", "مَنَعَ", "أَخَذَ", "قَتَلَ"], correctIndex: 0, explanation: "「Sā'ada」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "أَدْخَلَ الْمُسْلِمُونَ نُظُمَ الرِّيِّ الْمُتَطَوِّرَةَ إِلَى إِسْبَانِيَا.", japanese: "ムスリムはスペインに高度な灌漑システムを導入しました。" },
      { speaker: "記事", arabic: "كَانَ الطِّبُّ فِي الْأَنْدَلُسِ مُتَقَدِّمًا جِدًّا.", japanese: "アンダルスの医学は非常に進んでいました。" },
      { speaker: "記事", arabic: "اخْتَرَعَ الزَّهْرَاوِيُّ أَدَوَاتِ الْجِرَاحَةِ.", japanese: "ザフラ−ウィーは外科手術の道具を発明しました。" },
      { speaker: "記事", arabic: "الْحَضَارَةُ الْإِنْسَانِيَّةُ تَبْنِي بَعْضُهَا عَلَى بَعْضٍ.", japanese: "人類の文明は互いの上に築かれます（継承されます）。" }
    ]
  },

  // --- 8. 社会・経済 (Society/Economy) ---
  {
    id: 1009, title: "女性のエンパワーメント", category: "社会", level: "上級",
    contentVoweled: "شَهِدَتِ الْمَمْلَكَةُ فِي السَّنَوَاتِ الْأَخِيرَةِ إِصْلَاحَاتٍ كَبِيرَةً لِتَمْكِينِ الْمَرْأَةِ.",
    contentPlain: "شهدت المملكة في السنوات الأخيرة إصلاحات كبيرة لتمكين المرأة. سُمح لها بقيادة السيارة، وتولي مناصب قيادية في الحكومة والقطاع الخاص. تهدف هذه الخطوات إلى تعزيز دور المرأة في التنمية الاقتصادية والاجتماعية، وتحقيق المساواة في الفرص وفقا لرؤية 2030.",
    vocabList: [
      { word: "إِصْلَاح", meaning: "改革" },
      { word: "قِيَادَة", meaning: "運転/リーダーシップ" },
      { word: "مَنْصِب", meaning: "地位/役職" },
      { word: "مُسَاوَاة", meaning: "平等" }
    ],
    questions: [
      { id: 10091, type: "reading", text: "近年、王国で何が起きましたか？", options: ["戦争", "女性のエンパワーメントのための改革", "経済の停滞", "人口減少"], correctIndex: 1, explanation: "「إصلاحات كبيرة لتمكين المرأة (女性活躍のための大改革)」です。" },
      { id: 10092, type: "reading", text: "許可されたことの具体例は？", options: ["海外旅行の禁止", "車の運転", "学校に行くことの禁止", "家にいること"], correctIndex: 1, explanation: "「قيادة السيارة (車の運転)」です。" },
      { id: 10093, type: "reading", text: "これらのステップの目的は？", options: ["女性の役割を弱める", "開発における女性の役割強化", "男性の仕事を奪う", "海外移住"], correctIndex: 1, explanation: "「تعزيز دور المرأة (女性の役割強化)」です。" },
      { id: 10094, type: "vocabulary", text: "「فُرْصَة」の意味は？", options: ["時間", "チャンス/機会", "お金", "場所"], correctIndex: 1, explanation: "Opportunity（機会）です。" },
      { id: 10095, type: "grammar", text: "「許可されました（受動態）」", options: ["سُمِحَ", "سَمَحَ", "يَسْمَحُ", "مَمْنُوع"], correctIndex: 0, explanation: "「Sumiḥa」は「Samaḥa (Allow)」の受動態です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "أَصْبَحَتِ الْمَرْأَةُ السُّعُودِيَّةُ سَفِيرَةً وَنَائِبَةَ وَزِيرٍ.", japanese: "サウジ女性は大使や副大臣になりました。" },
      { speaker: "記事", arabic: "ارْتَفَعَتْ نِسْبَةُ مُشَارَكَةِ الْمَرْأَةِ فِي سُوقِ الْعَمَلِ.", japanese: "労働市場への女性の参加率が上昇しました。" },
      { speaker: "記事", arabic: "هَذَا التَّغْيِيرُ يُعَزِّزُ الِاقْتِصَادَ الْوَطَنِيَّ.", japanese: "この変化は国民経済を強化します。" },
      { speaker: "記事", arabic: "الْمَرْأَةُ شَرِيكٌ أَسَاسِيٌّ فِي بِنَاءِ الْمُسْتَقْبَلِ.", japanese: "女性は未来を築くための基本的なパートナーです。" }
    ]
  },
  {
    id: 1010, title: "サウジ・コーヒー（詳細）", category: "文化", level: "上級",
    contentVoweled: "الْقَهْوَةُ السُّعُودِيَّةُ لَيْسَتْ مُجَرَّدَ مَشْرُوبٍ، بَلْ هِيَ رَمْزٌ ثَقَافِيٌّ.",
    contentPlain: "القهوة السعودية ليست مجرد مشروب، بل هي رمز ثقافي للكرم والضيافة. تختلف طريقة تحضيرها من منطقة لأخرى، لكنها غالبا ما تحتوي على الهيل والزعفران. تقدم القهوة للضيوف باليد اليمنى، ويجب أن يكون الفنجان مملوءا إلى الثلث فقط كدليل على الرغبة في خدمة الضيف وتكرار الصب.",
    vocabList: [
      { word: "ضِيَافَة", meaning: "おもてなし" },
      { word: "تَحْضِير", meaning: "準備/作り方" },
      { word: "زَعْفَرَان", meaning: "サフラン" },
      { word: "يَد يُمْنَى", meaning: "右手" }
    ],
    questions: [
      { id: 10101, type: "reading", text: "サウジコーヒーは何の象徴ですか？", options: ["眠気", "寛大さとおもてなし", "戦争", "貧困"], correctIndex: 1, explanation: "「رمز ثقافي للكرم والضيافة」です。" },
      { id: 10102, type: "reading", text: "主な材料は？", options: ["砂糖とミルク", "カルダモンとサフラン", "塩と胡椒", "茶葉"], correctIndex: 1, explanation: "「الهيل والزعفران」です。" },
      { id: 10103, type: "reading", text: "カップにはどれくらい注ぎますか？", options: ["満タン", "半分", "3分の1", "一滴だけ"], correctIndex: 2, explanation: "「مملوءا إلى الثلث (3分の1まで満たす)」です。" },
      { id: 10104, type: "vocabulary", text: "「دَلِيل」の意味は？", options: ["道", "証拠/印", "本", "人"], correctIndex: 1, explanation: "Proof/Sign（証拠、印）です。" },
      { id: 10105, type: "grammar", text: "「提供されます（受動態）」", options: ["تُقَدَّمُ", "تُقَدِّمُ", "قَدَّمَ", "قَادِم"], correctIndex: 0, explanation: "「Tuqaddamu」は受動態です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "أَطْلَقَتْ وِزَارَةُ الثَّقَافَةِ عَامَ الْقَهْوَةِ السُّعُودِيَّةِ.", japanese: "文化省は「サウジコーヒーの年」を開始しました。" },
      { speaker: "記事", arabic: "تُرَافِقُ الْقَهْوَةَ دَائِمًا حَبَّاتُ التَّمْرِ.", japanese: "コーヒーにはいつもデーツが添えられます。" },
      { speaker: "記事", arabic: "إِذَا هَزَّ الضَّيْفُ الْفِنْجَانَ، فَهَذَا يَعْنِي أَنَّهُ اكْتَفَى.", japanese: "客がカップを振れば、それは「もう十分」という意味です。" },
      { speaker: "記事", arabic: "إِنَّهَا جُزْءٌ لَا يَتَجَزَّأُ مِنَ الْمَجَالِسِ الْعَرَبِيَّةِ.", japanese: "それはアラブの集まりに不可欠な部分です。" }
    ]
  },

  // --- 9. 環境・地理 (Environment/Geography) ---
  {
    id: 1011, title: "砂漠化対策", category: "科学", level: "上級",
    contentVoweled: "التَّصَحُّرُ هُوَ تَحَوُّلُ الْأَرَاضِي الْخِصْبَةِ إِلَى صَحْرَاءَ.",
    contentPlain: "التصحر هو تحول الأراضي الخصبة إلى صحراء، وهو مشكلة بيئية عالمية. في السعودية، يتم محاربة التصحر من خلال مشاريع التشجير الضخمة واستخدام تقنيات الاستمطار الصناعي. يساعد الغطاء النباتي في تثبيت التربة وتقليل العواصف الرملية وخفض درجات الحرارة.",
    vocabList: [
      { word: "تَصَحُّر", meaning: "砂漠化" },
      { word: "خِصْب", meaning: "肥沃な" },
      { word: "تَشْجِير", meaning: "植林" },
      { word: "تُرْبَة", meaning: "土壌" }
    ],
    questions: [
      { id: 10111, type: "reading", text: "砂漠化とは何ですか？", options: ["雨が降ること", "肥沃な土地が砂漠になること", "砂漠が緑になること", "海が乾くこと"], correctIndex: 1, explanation: "「تحول الأراضي الخصبة إلى صحراء」です。" },
      { id: 10112, type: "reading", text: "サウジはどうやって戦っていますか？", options: ["放置している", "植林と人工降雨", "砂を輸入する", "壁を作る"], correctIndex: 1, explanation: "「مشاريع التشجير... والاستمطار الصناعي」です。" },
      { id: 10113, type: "reading", text: "植生（植物）の利点は？", options: ["気温を上げる", "土壌を固定し砂嵐を減らす", "水を汚す", "砂を増やす"], correctIndex: 1, explanation: "「تثبيت التربة وتقليل العواصف」です。" },
      { id: 10114, type: "vocabulary", text: "「عَاصِفَة」の意味は？", options: ["静けさ", "嵐", "雨", "光"], correctIndex: 1, explanation: "Storm（嵐）です。" },
      { id: 10115, type: "grammar", text: "「戦う/防止する」", options: ["مُحَارَبَة", "حَرْب", "ضَرْب", "هُرُوب"], correctIndex: 0, explanation: "「Muḥārabah (Combating/Fighting)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "قَطْعُ الْأَشْجَارِ يُسَاهِمُ فِي زِيَادَةِ التَّصَحُّرِ.", japanese: "木の伐採は砂漠化の増加に寄与します。" },
      { speaker: "記事", arabic: "تَسْعَى الدَّوْلَةُ إِلَى زِيَادَةِ الْمَسَاحَاتِ الْخَضْرَاءِ.", japanese: "国は緑地の増加を目指しています。" },
      { speaker: "記事", arabic: "الْمُحَافَظَةُ عَلَى الْبِيئَةِ وَاجِبُ كُلِّ فَرْدٍ.", japanese: "環境保全は個人の義務です。" },
      { speaker: "記事", arabic: "لِنَزْرَعِ الْأَشْجَارَ لِمُسْتَقْبَلٍ أَفْضَلَ.", japanese: "より良い未来のために木を植えましょう。" }
    ]
  },
  
  // --- 10. 経済・産業 (Economy) ---
  {
    id: 1012, title: "デーツ産業", category: "経済", level: "上級",
    contentVoweled: "تُعْتَبَرُ الْمَمْلَكَةُ مِنْ أَكْبَرِ مُنْتِجِي التُّمُورِ فِي الْعَالَمِ.",
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
      { id: 10125, type: "grammar", text: "「所有する」", options: ["تَمْتَلِكُ", "تَبِيعُ", "تَشْتَرِي", "تَفْقِدُ"], correctIndex: 0, explanation: "「Tamtaliku (Possess)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "مَهْرَجَانُ بُرَيْدَةَ لِلتُّمُورِ هُوَ الْأَكْبَرُ عَالَمِيًّا.", japanese: "ブライダのデーツ祭りは世界最大です。" },
      { speaker: "記事", arabic: "التَّمْرُ غِذَاءٌ مُتَكَامِلٌ وَصِحِّيٌّ.", japanese: "デーツは完全で健康的な食品です。" },
      { speaker: "記事", arabic: "تَدْعَمُ الْحُكُومَةُ الْمُزَارِعِينَ لِتَحْسِينِ الْجَوْدَةِ.", japanese: "政府は品質向上のために農家を支援しています。" },
      { speaker: "記事", arabic: "رُؤْيَةُ 2030 تَهْدِفُ لِجَعْلِ السُّعُودِيَّةِ الْمُصَدِّرَ الْأَوَّلَ لِلتُّمُورِ.", japanese: "ビジョン2030はサウジをデーツの第一輸出国にすることを目指しています。" }
    ]
  },
  // --- 11. 科学・技術 (Science/Tech) ---
  {
    id: 1013, title: "サウジの宇宙開発", category: "科学", level: "上級",
    contentVoweled: "دَخَلَتِ الْمَمْلَكَةُ عَصْرَ الْفَضَاءِ مِنْ أَوْسَعِ أَبْوَابِهِ...",
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
      { id: 10135, type: "grammar", text: "「〜の一部（Part of）」", options: ["جُزْءٌ مِنْ", "كُلٌّ مِنْ", "بَعِيدٌ عَنْ", "قَرِيبٌ مِنْ"], correctIndex: 0, explanation: "「Juz'un min」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "شَارَكَتْ رَيَّانَةُ بَرْنَاوِي كَأَوَّلِ رَائِدَةِ فَضَاءٍ عَرَبِيَّةٍ مُسْلِمَةٍ.", japanese: "ラッヤーナ・バルナウィが初のアラブ系ムスリム女性宇宙飛行士として参加しました。" },
      { speaker: "記事", arabic: "أَجْرَى الرُّوَّادُ 14 تَجْرِبَةً عِلْمِيَّةً فِي بِيئَةِ انْعِدَامِ الْجَاذِبِيَّةِ.", japanese: "飛行士たちは無重力環境で14の科学実験を行いました。" },
      { speaker: "記事", arabic: "تَهْدِفُ الْمَمْلَكَةُ إِلَى بِنَاءِ اقْتِصَادٍ مَبْنِيٍّ عَلَى الْمَعْرِفَةِ.", japanese: "王国は知識に基づく経済の構築を目指しています。" },
      { speaker: "記事", arabic: "هَذَا الْإِنْجَازُ يُلْهِمُ الْأَجْيَالَ الْقَادِمَةَ.", japanese: "この成果は次世代にインスピレーションを与えます。" }
    ]
  },

  // --- 12. 歴史・遺産 (History) ---
  {
    id: 1014, title: "マダーイン・サーレハ", category: "歴史", level: "上級",
    contentVoweled: "مَدَائِنُ صَالِحَ، أَوِ الْحِجْرُ، هِيَ أُولَى الْمَوَاقِعِ السُّعُودِيَّةِ...",
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
      { id: 10145, type: "grammar", text: "「登録されました（受動態）」", options: ["أُدْرِجَتْ", "كَتَبَتْ", "ذَهَبَتْ", "قَالَتْ"], correctIndex: 0, explanation: "「Udrijat (Was listed/included)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "تُعَدُّ مَدَائِنُ صَالِحَ شَقِيقَةَ الْبَتْرَاءِ فِي الْأُرْدُنِّ.", japanese: "マダーイン・サーレハはヨルダンのペトラの姉妹（都市）とみなされています。" },
      { speaker: "記事", arabic: "عَاشَ الْأَنْبَاطُ هُنَا قَبْلَ آلافِ السِّنِينَ.", japanese: "ナバテア人は数千年前にここに住んでいました。" },
      { speaker: "記事", arabic: "النُّقُوشُ عَلَى الْمَقَابِرِ تَحْكِي قِصَصًا عَنْ حَيَاتِهِمْ.", japanese: "墓の碑文は彼らの生活についての物語を語っています。" },
      { speaker: "記事", arabic: "الْمِنْطَقَةُ الْآنَ مَفْتُوحَةٌ لِلسُّيَّاحِ مِنَ الْعَالَمِ.", japanese: "この地域は今、世界の観光客に開放されています。" }
    ]
  },

  // --- 13. 経済 (Economy) ---
  {
    id: 1015, title: "イスラム金融", category: "経済", level: "上級",
    contentVoweled: "تَتَمَيَّزُ الْمَالِيَّةُ الْإِسْلَامِيَّةُ بِعَدَمِ التَّعَامُلِ بِالرِّبَا...",
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
      { id: 10155, type: "grammar", text: "「成長（名詞）」", options: ["نُمُوّ", "نَامَ", "يَنْمُو", "نَائِم"], correctIndex: 0, explanation: "「Numūw (Growth)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "تَحْرُمُ الشَّرِيعَةُ الْإِسْلَامِيَّةُ كَسْبَ الْمَالِ مِنَ الْمَالِ دُونَ عَمَلٍ.", japanese: "イスラム法は、労働なしに金から金を稼ぐことを禁じています。" },
      { speaker: "記事", arabic: "يَجِبُ أَنْ يَكُونَ الِاسْتِثْمَارُ فِي أَصُولٍ مَلْمُوسَةٍ.", japanese: "投資は有形資産に対して行われなければなりません。" },
      { speaker: "記事", arabic: "الْبُنُوكُ الْإِسْلَامِيَّةُ مَوْجُودَةٌ فِي كُلِّ أَنْحَاءِ الْعَالَمِ.", japanese: "イスラム銀行は世界中に存在します。" },
      { speaker: "記事", arabic: "إِنَّهُ نِظَامٌ يُعَزِّزُ الْعَدَالَةَ الِاجْتِمَاعِيَّةَ.", japanese: "それは社会正義を強化するシステムです。" }
    ]
  },

  // --- 14. 科学・環境 (Science/Environment) ---
  {
    id: 1016, title: "海水淡水化", category: "科学", level: "上級",
    contentVoweled: "تُعْتَبَرُ السُّعُودِيَّةُ أَكْبَرَ مُنْتِجٍ لِلْمِيَاهِ الْمُحَلَّاةِ فِي الْعَالَمِ...",
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
      { id: 10165, type: "grammar", text: "「〜のため（理由）」", options: ["نَظَرًا لِـ", "بَعْدَ أَنْ", "قَبْلَ أَنْ", "مَعَ أَنَّ"], correctIndex: 0, explanation: "「Naẓaran li- (Due to / In view of)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "الْمَاءُ أَغْلَى مِنَ النِّفْطِ فِي الصَّحْرَاءِ.", japanese: "砂漠では水は石油よりも高価です。" },
      { speaker: "記事", arabic: "تَنْقُلُ الْأَنَابِيبُ الْمِيَاهَ مِنْ الْبَحْرِ إِلَى الْمُدُنِ الدَّاخِلِيَّةِ.", japanese: "パイプが海から内陸の都市へ水を運びます。" },
      { speaker: "記事", arabic: "نَسْعَى لِتَقْلِيلِ تَكْلِفَةِ إِنْتَاجِ الْمِتْرِ الْمُكَعَّبِ.", japanese: "私たちは立方メートルあたりの生産コスト削減に努めています。" },
      { speaker: "記事", arabic: "الْأَمْنُ الْمَائِيُّ جُزْءٌ مِنَ الْأَمْنِ الْوَطَنِيِّ.", japanese: "水の安全保障は国家安全保障の一部です。" }
    ]
  },

  // --- 15. 文化・宗教 (Culture) ---
  {
    id: 1017, title: "ハッジ（大巡礼）の管理", category: "文化", level: "上級",
    contentVoweled: "يُعَدُّ تَنْظِيمُ مَوْسِمِ الْحَجِّ مِنْ أَكْبَرِ التَّحَدِّيَاتِ اللُّوجِسْتِيَّةِ...",
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
      { id: 10175, type: "grammar", text: "「集まります」", options: ["يَجْتَمِعُ", "يَفْتَرِقُ", "يَذْهَبُ", "يَأْتِي"], correctIndex: 0, explanation: "「Yajtami'u」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "خِدْمَةُ الْحَرَمَيْنِ الشَّرِيفَيْنِ شَرَفٌ لِلْمَمْلَكَةِ.", japanese: "二聖モスクへの奉仕は王国の名誉です。" },
      { speaker: "記事", arabic: "قِطَارُ الْمَشَاعِرِ يُسَهِّلُ تَنَقُّلَ الْحُجَّاجِ.", japanese: "聖地列車（マシャーイル・トレイン）は巡礼者の移動を容易にします。" },
      { speaker: "記事", arabic: "بِطَاقَةُ الْحَجِّ الذَّكِيَّةُ تَحْتَوِي عَلَى بَيَانَاتِ الْحَاجِّ.", japanese: "スマートハッジカードには巡礼者のデータが含まれています。" },
      { speaker: "記事", arabic: "الْهَدَفُ هُوَ حَجٌّ آمِنٌ وَمُيَسَّرٌ لِلْجَمِيعِ.", japanese: "目標は、すべての人にとって安全で円滑なハッジです。" }
    ]
  },

  // --- 16. 社会 (Society) ---
  {
    id: 1018, title: "サウジのeスポーツ", category: "社会", level: "上級",
    contentVoweled: "أَصْبَحَتِ الرِّيَاضَاتُ الْإِلِكْتُرُونِيَّةُ قِطَاعًا وَاعِدًا فِي السُّعُودِيَّةِ...",
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
      { id: 10185, type: "grammar", text: "「提供します」", options: ["يُوَفِّرُ", "يَأْخُذُ", "يَمْنَعُ", "يُخْفِي"], correctIndex: 0, explanation: "「Yuwaffiru (Provide)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "تَمَّ إِنْشَاءُ الِاتِّحَادِ السُّعُودِيِّ لِلرِّيَاضَاتِ الْإِلِكْتُرُونِيَّةِ.", japanese: "サウジeスポーツ連盟が設立されました。" },
      { speaker: "記事", arabic: "الْأَلْعَابُ لَمْ تَعُدْ مُجَرَّدَ تَسْلِيَةٍ، بَلْ صِنَاعَةٌ.", japanese: "ゲームはもはや単なる娯楽ではなく、産業です。" },
      { speaker: "記事", arabic: "نَدْعَمُ الْمَوَاهِبَ الْمَحَلِّيَّةَ لِلْمُنَافَسَةِ عَالَمِيًّا.", japanese: "私たちは世界で競争するために地元の才能を支援しています。" },
      { speaker: "記事", arabic: "كَأْسُ الْعَالَمِ لِلرِّيَاضَاتِ الْإِلِكْتُرُونِيَّةِ حَدَثٌ ضَخْمٌ.", japanese: "eスポーツワールドカップは巨大なイベントです。" }
    ]
  },

  // --- 17. 記事・コラム (Article) ---
  {
    id: 1019, title: "アラビア語の未来", category: "記事", level: "上級",
    contentVoweled: "تُوَاجِهُ اللُّغَةُ الْعَرَبِيَّةُ تَحَدِّيَاتٍ فِي الْعَصْرِ الرَّقْمِيِّ...",
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
      { id: 10195, type: "grammar", text: "「支配する」", options: ["تُهَيْمِنُ", "تَسْقُطُ", "تَهْرُبُ", "تَنَامُ"], correctIndex: 0, explanation: "「tuhayminu (Dominate)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "لُغَتُنَا الْجَمِيلَةُ تَسْتَحِقُّ أَنْ نَهْتَمَّ بِهَا.", japanese: "私たちの美しい言語は、私たちが大切にするに値します。" },
      { speaker: "記事", arabic: "يَجِبُ تَعْرِيبُ الْمُصْطَلَحَاتِ الْعِلْمِيَّةِ الْحَدِيثَةِ.", japanese: "現代の科学用語をアラビア語化する必要があります。" },
      { speaker: "記事", arabic: "الْبَرْمَجَةُ بِاللُّغَةِ الْعَرَبِيَّةِ خُطْوَةٌ مُهِمَّةٌ.", japanese: "アラビア語でのプログラミングは重要なステップです。" },
      { speaker: "記事", arabic: "اعْتَزُّوا بِلُغَتِكُمْ، فَهِيَ لِسَانُ الْقُرْآنِ.", japanese: "あなた方の言語を誇りに思いなさい、それはクルアーンの言葉だからです。" }
    ]
  },
  // --- 18. 経済・産業 (Economy/Industry) ---
  {
    id: 1020, title: "鉱業：第三の柱", category: "経済", level: "上級",
    // 読み上げ用（母音あり）
    contentVoweled: "تَسْعَى الْمَمْلَكَةُ إِلَى جَعْلِ قِطَاعِ التَّعْدِينِ الرَّكِيزَةَ الثَّالِثَةَ لِلصِّنَاعَةِ السُّعُودِيَّةِ إِلَى جَانِبِ النِّفْطِ وَالْغَازِ وَالْبِتْرُوكِيمَاوِيَّاتِ. يَزْخَرُ 'الدِّرْعُ الْعَرَبِيُّ' بِثَرَوَاتٍ مَعْدِنِيَّةٍ هَائِلَةٍ تُقَدَّرُ قِيمَتُهَا بِتِرِيلْيُونَاتِ الرِّيَالَاتِ، تَشْمَلُ الذَّهَبَ وَالْفُوسْفَاتَ وَالنُّحَاسَ. تَمَّ إِصْدَارُ نِظَامِ الِاسْتِثْمَارِ التَّعْدِينِيِّ الْجَدِيدِ لِجَذْبِ الشَّرِكَاتِ الْعَالَمِيَّةِ وَتَسْهِيلِ الْإِجْرَاءَاتِ، مِمَّا سَيَخْلُقُ آلَافَ الْوَظَائِفِ لِلشَّبَابِ وَيُعَزِّزُ التَّنْمِيَةَ فِي الْمَنَاطِقِ النَّائِيَةِ.",
    // 表示用（母音なし・超長文）
    contentPlain: "تسعى المملكة إلى جعل قطاع التعدين الركيزة الثالثة للصناعة السعودية إلى جانب النفط والغاز والبتروكيماويات. يزخر 'الدرع العربي' بثروات معدنية هائلة تقدر قيمتها بتريليونات الريالات، تشمل الذهب والفوسفات والنحاس والمعادن النادرة المستخدمة في التكنولوجيا الحديثة. تم إصدار نظام الاستثمار التعديني الجديد لجذب الشركات العالمية وتسهيل الإجراءات، مما سيخلق آلاف الوظائف للشباب ويعزز التنمية الاقتصادية في المناطق النائية بعيدا عن المدن الرئيسية.",
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
      { id: 10205, type: "grammar", text: "「含まれます」", options: ["تَشْمَلُ", "تَحْذِفُ", "تَقُولُ", "تَذْهَبُ"], correctIndex: 0, explanation: "「Tashmalu (Includes)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "الْمَعَادِنُ هِيَ نِفْطُ الْمُسْتَقْبَلِ.", japanese: "鉱物は未来の石油です。" },
      { speaker: "記事", arabic: "تَمْتَلِكُ السُّعُودِيَّةُ احْتِيَاطِيَّاتٍ ضَخْمَةً مِنَ الذَّهَبِ.", japanese: "サウジアラビアは巨大な金の埋蔵量を保有しています。" },
      { speaker: "記事", arabic: "الصِّنَاعَاتُ التَّحْوِيلِيَّةُ سَتَسْتَفِيدُ مِنْ هَذِهِ الْمَوَادِّ الْخَامِ.", japanese: "製造業（加工産業）はこれらの原材料から利益を得るでしょう。" },
      { speaker: "記事", arabic: "الْهَدَفُ هُوَ تَوْطِينُ سَلَاسِلِ الْإِمْدَادِ.", japanese: "目標はサプライチェーンの現地化（国産化）です。" }
    ]
  },

  // --- 19. デジタル・行政 (Digital/Gov) ---
  {
    id: 1021, title: "デジタル・トランスフォーメーション", category: "社会", level: "上級",
    contentVoweled: "حَقَّقَتِ الْمَمْلَكَةُ قَفْزَاتٍ نَوْعِيَّةً فِي مَجَالِ التَّحَوُّلِ الرَّقْمِيِّ الْحُكُومِيِّ...",
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
      { id: 10215, type: "grammar", text: "「〜だけでなく」", options: ["لَمْ ... فَحَسْبُ، بَلْ ...", "فَقَطْ", "أَيْضًا", "لَكِنْ"], correctIndex: 0, explanation: "「Lam ... fa-ḥasb, bal ... (Not only ..., but also ...)」という構文です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "الْهَدَفُ هُوَ الْوُصُولُ إِلَى 'حُكُومَةٍ بِلَا وَرَقٍ' بِحُلُولِ 2030.", japanese: "目標は、2030年までに「紙のない政府」に到達することです。" },
      { speaker: "記事", arabic: "تُسَهِّلُ التِّقْنِيَةُ حَيَاةَ الْمَلَايِينِ يَوْمِيًّا.", japanese: "テクノロジーは毎日何百万人もの生活を容易にしています。" },
      { speaker: "記事", arabic: "الذَّكَاءُ الِاصْطِنَاعِيُّ يُحَلِّلُ الْبَيَانَاتِ لِتَحْسِينِ الْقَرَارَاتِ.", japanese: "人工知能は意思決定を改善するためにデータを分析します。" },
      { speaker: "記事", arabic: "الْمَمْلَكَةُ تَحْتَلُّ مَرَاتِبَ مُتَقَدِّمَةً فِي الْمُؤَشِّرَاتِ الدَّوْلِيَّةِ.", japanese: "王国は国際的な指標で先進的な順位を占めています。" }
    ]
  },

  // --- 20. 文化・芸術 (Culture/Art) ---
  {
    id: 1022, title: "アラビア書道の美学", category: "文化", level: "上級",
    contentVoweled: "الْخَطُّ الْعَرَبِيُّ لَيْسَ مُجَرَّدَ وَسِيلَةٍ لِلْكِتَابَةِ، بَلْ هُوَ فَنٌّ بَصَرِيٌّ رَاقٍ...",
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
      { id: 10225, type: "grammar", text: "「反映する」", options: ["يَعْكِسُ", "يَرْمِي", "يَكْسِرُ", "يَمْحُو"], correctIndex: 0, explanation: "「Ya'kisu (Reflect)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "يَقُولُ الْمَثَلُ: الْخَطُّ الْحَسَنُ يَزِيدُ الْحَقَّ وُضُوحًا.", japanese: "格言にいわく、「良い書（文字）は真理をより明らかにする。」" },
      { speaker: "記事", arabic: "يَتَطَلَّبُ إِتْقَانُ الْخَطِّ سَنَوَاتٍ مِنَ التَّدْرِيبِ وَالصَّبْرِ.", japanese: "書の習得には何年もの訓練と忍耐が必要です。" },
      { speaker: "記事", arabic: "كُلُّ خَطَّاطٍ لَهُ أُسْلُوبُهُ الْخَاصُّ وَبَصْمَتُهُ.", japanese: "すべての書家には独自のスタイルと痕跡（個性）があります。" },
      { speaker: "記事", arabic: "الْخَطُّ الْعَرَبِيُّ يُلْهِمُ الْفَنَّانِينَ الْمُعَاصِرِينَ.", japanese: "アラビア書道は現代のアーティストにインスピレーションを与えます。" }
    ]
  },

  // --- 21. 歴史・科学 (History/Science) ---
  {
    id: 1023, title: "アラブの天文学", category: "歴史", level: "上級",
    contentVoweled: "لَعِبَ الْعَرَبُ دَوْرًا حَاسِمًا فِي تَطْوِيرِ عِلْمِ الْفَلَكِ...",
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
      { id: 10235, type: "grammar", text: "「今なお〜である（継続）」", options: ["لَا تَزَالُ", "لَمْ تَكُنْ", "كَانَتْ", "أَصْبَحَتْ"], correctIndex: 0, explanation: "「Lā tazālu (Still is / Continues to be)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "الْعَرَبُ هُمْ أَوَّلُ مَنْ حَوَّلَ الْفَلَكَ إِلَى عِلْمٍ رِيَاضِيٍّ دَقِيقٍ.", japanese: "アラブ人は天文学を精密な数学的科学に変えた最初の人々です。" },
      { speaker: "記事", arabic: "كِتَابُ 'الصُّوَرِ الْكَوَاكِبِ' لِلصُّوفِيِّ مَرْجِعٌ مُهِمٌّ.", japanese: "スーフィーの『星座の書』は重要な参考文献です。" },
      { speaker: "記事", arabic: "سَاعَدَتْ هَذِهِ الْمَعْرِفَةُ التُّجَّارَ فِي السَّفَرِ عَبْرَ الصَّحْرَاءِ وَالْبَحْرِ.", japanese: "この知識は商人たちが砂漠や海を旅するのを助けました。" },
      { speaker: "記事", arabic: "تَأَثَّرَ كُوبَرْنِيكُوس بِنَظَرِيَّاتِ الْعُلَمَاءِ الْمُسْلِمِينَ.", japanese: "コペルニクスはイスラム学者の理論に影響を受けました。" }
    ]
  },

  // --- 22. 自然・地理 (Nature) ---
  {
    id: 1024, title: "ルブアルハリ砂漠", category: "自然", level: "上級",
    contentVoweled: "الرُّبْعُ الْخَالِي هُوَ أَكْبَرُ صَحْرَاءَ رَمْلِيَّةٍ مُتَّصِلَةٍ فِي الْعَالَمِ...",
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
      { id: 10245, type: "grammar", text: "「〜にもかかわらず」", options: ["رَغْمَ", "لِأَنَّ", "بَعْدَ", "قَبْلَ"], correctIndex: 0, explanation: "「Raghma (Despite)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "تَصِلُ دَرَجَاتُ الْحَرَارَةِ هُنَاكَ إِلَى مُسْتَوَيَاتٍ قِيَاسِيَّةٍ.", japanese: "そこの気温は記録的なレベルに達します。" },
      { speaker: "記事", arabic: "كَانَتْ هَذِهِ الْمِنْطَقَةُ مَرُوجًا وَأَنْهَارًا فِي الْعُصُورِ الْقَدِيمَةِ.", japanese: "この地域は古代には草原と川でした。" },
      { speaker: "記事", arabic: "أَصْبَحَ الرُّبْعُ الْخَالِي وِجْهَةً لِمُحِبِّي الْمُغَامَرَاتِ الصَّحْرَاوِيَّةِ.", japanese: "ルブアルハリは砂漠の冒険愛好家の目的地となりました。" },
      { speaker: "記事", arabic: "سُبْحَانَ مَنْ خَلَقَ هَذَا الْجَمَالَ الْمُوحِشَ.", japanese: "この荒涼とした美しさを創った方に栄光あれ。" }
    ]
  },
  // --- 23. テクノロジー・エネルギー (Tech/Energy) ---
  {
    id: 1025, title: "グリーン水素", category: "科学", level: "上級",
    contentVoweled: "يُعَدُّ الْهِيدْرُوجِينُ الْأَخْضَرُ وَقُودَ الْمُسْتَقْبَلِ النَّظِيفَ. تَقُومُ الْمَمْلَكَةُ بِبِنَاءِ أَكْبَرِ مَصْنَعٍ لِلْهِيدْرُوجِينِ الْأَخْضَرِ فِي الْعَالَمِ فِي مَدِينَةِ 'نِيُوم'. يَتِمُّ إِنْتَاجُ هَذَا الْوَقُودِ عَنْ طَرِيقِ فَصْلِ الْمَاءِ بِاسْتِخْدَامِ الطَّاقَةِ الْمُتَجَدِّدَةِ مِثْلَ الشَّمْسِ وَالرِّيَاحِ، دُونَ إِصْدَارِ أَيِّ انْبِعَاثَاتٍ كَرْبُونِيَّةٍ. سَيُسَاهِمُ هَذَا الْمَشْرُوعُ فِي تَغْيِيرِ خَارِطَةِ الطَّاقَةِ الْعَالَمِيَّةِ وَحِمَايَةِ الْبِيئَةِ.",
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
      { id: 10255, type: "grammar", text: "「建設しています（進行）」", options: ["تَقُومُ بِبِنَاءِ", "هَدَمَتْ", "نَسِيَتْ", "تَوَقَّفَتْ"], correctIndex: 0, explanation: "「Taqūmu bi-binā'i (Is undertaking the building of)」という表現です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "الْهَيْدْرُوجِينُ الْأَخْضَرُ بَدِيلٌ مِثَالِيٌّ لِلْوَقُودِ الْأُحْفُورِيِّ.", japanese: "グリーン水素は化石燃料の理想的な代替品です。" },
      { speaker: "記事", arabic: "يُمْكِنُ اسْتِخْدَامُهُ فِي السَّيَّارَاتِ وَالشَّاحِنَاتِ وَالطَّائِرَاتِ.", japanese: "それは車、トラック、飛行機で使用できます。" },
      { speaker: "記事", arabic: "تَتَمَتَّعُ السُّعُودِيَّةُ بِمَوْقِعٍ جُغْرَافِيٍّ مُمَيَّزٍ لِإِنْتَاجِهِ.", japanese: "サウジアラビアはその生産に適した地理的位置に恵まれています。" },
      { speaker: "記事", arabic: "الِاسْتِثْمَارُ فِي هَذَا الْمَجَالِ يَعْنِي الِاسْتِثْمَارَ فِي الْكَوْكَبِ.", japanese: "この分野への投資は、地球への投資を意味します。" }
    ]
  },

  // --- 24. 歴史・科学 (History/Science) ---
  {
    id: 1026, title: "アル・イドリーシーと地図", category: "歴史", level: "上級",
    contentVoweled: "الشَّرِيفُ الْإِدْرِيسِيُّ هُوَ أَحَدُ كِبَارِ الْجُغْرَافِيِّينَ فِي التَّارِيخِ...",
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
      { id: 10265, type: "grammar", text: "「証明しました」", options: ["أَثْبَتَتْ", "نَفَتْ", "كَذَبَتْ", "ضَاعَتْ"], correctIndex: 0, explanation: "「Athbatat (Proved)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "اسْتَغْرَقَ الْعَمَلُ عَلَى الْخَرِيطَةِ 15 عَامًا.", japanese: "地図の制作には15年かかりました。" },
      { speaker: "記事", arabic: "جَمَعَ الْمَعْلُومَاتِ مِنَ الْمُسَافِرِينَ وَالتُّجَّارِ.", japanese: "彼は旅行者や商人から情報を集めました。" },
      { speaker: "記事", arabic: "قَسَّمَ الْأَرْضَ إِلَى سَبْعَةِ أَقَالِيمَ مُنَاخِيَّةٍ.", japanese: "彼は地球を7つの気候帯に分けました。" },
      { speaker: "記事", arabic: "اعْتَرَفَ الْغَرْبُ بِفَضْلِهِ الْعَلْمِيِّ.", japanese: "西洋は彼の科学的功績を認めました。" }
    ]
  },

  // --- 25. 文化・伝統 (Culture) ---
  {
    id: 1027, title: "ラクダの美人コンテスト", category: "文化", level: "上級",
    contentVoweled: "مَهْرَجَانُ الْمَلِكِ عَبْدِ الْعَزِيزِ لِلْإِبِلِ هُوَ أَكْبَرُ مَهْرَجَانٍ مِنْ نَوْعِهِ...",
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
      { id: 10275, type: "grammar", text: "「開催されます（受動態）」", options: ["يُقَامُ", "يَقُومُ", "قَامَ", "قَائِم"], correctIndex: 0, explanation: "「Yuqāmu (Is held)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "الإِبِلُ عَطَايَا اللهِ لِأَهْلِ الصَّحْرَاءِ.", japanese: "ラクダは砂漠の民への神の贈り物です。" },
      { speaker: "記事", arabic: "يُطْلَقُ عَلَى الْإِبِلِ الْجَمِيلَةِ اسْمُ 'الْمَزَايِين'.", japanese: "美しいラクダは「マザーイン」と呼ばれます。" },
      { speaker: "記事", arabic: "يَهْتَمُّ الْمُلَّاكُ بِتَغْذِيَةِ إِبِلِهِمْ وَنَظَافَتِهَا.", japanese: "所有者はラクダの栄養と清潔さに気を配ります。" },
      { speaker: "記事", arabic: "الْمَهْرَجَانُ يَجْذِبُ الزُّوَّارَ وَالْإِعْلَامَ الْعَالَمِيَّ.", japanese: "フェスティバルは観光客と世界のメディアを惹きつけます。" }
    ]
  },

  // --- 26. 自然・季節 (Nature/Seasons) ---
  {
    id: 1028, title: "砂漠のトリュフ（ファグア）", category: "自然", level: "上級",
    contentVoweled: "الْفَقْعُ، أَوْ الْكَمْأَةُ، هُوَ فِطْرٌ بَرِّيٌّ يَنْمُو تَحْتَ الْأَرْضِ...",
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
      { id: 10285, type: "grammar", text: "「見つけること（名詞）」", options: ["إِيجَاد", "وَجَدَ", "يَجِدُ", "مَوْجُود"], correctIndex: 0, explanation: "「Ījād (Finding)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "يَرْتَبِطُ ظُهُورُ الْفَقْعِ بِالْبَرْقِ وَالرَّعْدِ.", japanese: "ファグアの出現は雷光と雷鳴に関連しています。" },
      { speaker: "記事", arabic: "هُنَاكَ أَنْوَاعٌ مُخْتَلِفَةٌ مِثْلُ الزُّبَيْدِيِّ وَالْخَلَاسِيِّ.", japanese: "ズバイディーやハラーシーなど、様々な種類があります。" },
      { speaker: "記事", arabic: "يُطْبَخُ مَعَ الْأُرْزِ وَاللَّحْمِ.", japanese: "米や肉と一緒に調理されます。" },
      { speaker: "記事", arabic: "جَمْعُ الْفَقْعِ هِوَايَةٌ مُمْتِعَةٌ وَمُرْبِحَةٌ.", japanese: "ファグア採集は楽しくて儲かる趣味です。" }
    ]
  },

  // --- 27. 歴史・交通 (History/Transport) ---
  {
    id: 1029, title: "ヒジャーズ鉄道", category: "歴史", level: "上級",
    contentVoweled: "خَطُّ حَدِيدِ الْحِجَازِ كَانَ مَشْرُوعًا ضَخْمًا لِرَبْطِ دِمَشْقَ بِالْمَدِينَةِ الْمُنَوَّرَةِ...",
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
      { id: 10295, type: "grammar", text: "「短縮した」", options: ["اخْتَصَرَ", "طَوَّلَ", "ذَهَبَ", "أَكَلَ"], correctIndex: 0, explanation: "「Ikhtaṣara (Shortened)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "بُنِيَ الْخَطُّ بِتَبَرُّعَاتٍ مِنَ الْمُسْلِمِينَ حَوْلَ الْعَالَمِ.", japanese: "その路線は世界中のムスリムからの寄付で建設されました。" },
      { speaker: "記事", arabic: "مُتْحَفُ سِكَّةِ حَدِيدِ الْحِجَازِ فِي الْمَدِينَةِ يَسْتَحِقُّ الزِّيَارَةَ.", japanese: "マディーナにあるヒジャーズ鉄道博物館は訪れる価値があります。" },
      { speaker: "記事", arabic: "كَانَ الْمَشْرُوعُ إِنْجَازًا هَنْدَسِيًّا فِي وَقْتِهِ.", japanese: "そのプロジェクトは当時、工学的な偉業でした。" },
      { speaker: "記事", arabic: "نَتَمَنَّى أَنْ يَعُودَ الْقِطَارُ لِلْعَمَلِ يَوْمًا مَا.", japanese: "いつか列車が再び運行することを願っています。" }
    ]
  },

  // --- 28. 環境・自然 (Environment) ---
  {
    id: 1030, title: "マングローブの森", category: "自然", level: "上級",
    contentVoweled: "أَشْجَارُ الشُّورَى (الْمَانْجِرُوف) هِيَ غَابَاتٌ بَحْرِيَّةٌ تَنْمُو عَلَى سَوَاحِلِ الْبَحْرِ الْأَحْمَرِ...",
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
      { id: 10305, type: "grammar", text: "「吸収します」", options: ["تَمْتَصُّ", "تُعْطِي", "تَرْمِي", "تَأْكُلُ"], correctIndex: 0, explanation: "「Tamtaṣṣu (Absorb)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "جُذُورُ الْمَانْجِرُوفِ تَتَنَفَّسُ خَارِجَ الْمَاءِ.", japanese: "マングローブの根は水の外で呼吸します。" },
      { speaker: "記事", arabic: "تُعْتَبَرُ مَأْوًى لِلطُّيُورِ الْمُهَاجِرَةِ.", japanese: "渡り鳥の避難所と考えられています。" },
      { speaker: "記事", arabic: "إِعَادَةُ اسْتِزْرَاعِهَا تُسَاعِدُ فِي مُكَافَحَةِ التَّغَيُّرِ الْمُنَاخِيِّ.", japanese: "その再植林は気候変動との戦いに役立ちます。" },
      { speaker: "記事", arabic: "إِنَّهَا كَنْزٌ طَبِيعِيٌّ يَجِبُ الْحِفَاظُ عَلَيْهِ.", japanese: "それは守るべき自然の宝です。" }
    ]
  },

  // --- 29. 社会・女性 (Society) ---
  {
    id: 1031, title: "スポーツと女性", category: "社会", level: "上級",
    contentVoweled: "شَهِدَتِ الرِّيَاضَةُ النِّسَائِيَّةُ فِي السُّعُودِيَّةِ نَقْلَةً نَوْعِيَّةً...",
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
      { id: 10315, type: "grammar", text: "「励まします」", options: ["يُشَجِّعُ", "يَمْنَعُ", "يَكْرَهُ", "يَضْرِبُ"], correctIndex: 0, explanation: "「Yushajji'u (Encourage)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "تَمَّ تَعْيِينُ حَكَمَاتٍ سُعُودِيَّاتٍ فِي الْمُبَارَيَاتِ.", japanese: "試合にサウジ女性審判員が任命されました。" },
      { speaker: "記事", arabic: "الْمُنْتَخَبُ النِّسَائِيُّ حَقَّقَ أَوَّلَ فَوْزٍ دَوْلِيٍّ لَهُ.", japanese: "女子代表チームは初の国際勝利を収めました。" },
      { speaker: "記事", arabic: "الرِّيَاضَةُ تُعَزِّزُ الثِّقَةَ بِالنَّفْسِ.", japanese: "スポーツは自信を高めます。" },
      { speaker: "記事", arabic: "الْمُجْتَمَعُ أَصْبَحَ أَكْثَرَ تَقَبُّلًا وَدَعْمًا.", japanese: "社会はより受容的で協力的になりました。" }
    ]
  },

  // --- 30. 歴史・貿易 (History) ---
  {
    id: 1032, title: "乳香の道（香の道）", category: "歴史", level: "上級",
    contentVoweled: "طَرِيقُ الْبَخُورِ كَانَ شَبَكَةً مِنَ الطُّرُقِ التِّجَارِيَّةِ الْقَدِيمَةِ...",
    contentPlain: "طريق البخور كان شبكة من الطرق التجارية القديمة التي ربطت جنوب الجزيرة العربية ببلاد الشام ومصر وأوروبا. كانت القوافل تنقل اللبان (البخور) والتوابل الثمينة عبر الصحراء، مما أدى إلى ازدهار مدن وممالك قديمة مثل الأنباط وكندة. كانت هذه الرحلات شاقة وتستغرق أشهرا، لكنها كانت شريان الحياة للاقتصاد العالمي القديم.",
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
      { id: 10325, type: "grammar", text: "「つながりました/導きました」", options: ["أَدَّى إِلَى", "أَخَذَ مِنْ", "ذَهَبَ إِلَى", "رَجَعَ"], correctIndex: 0, explanation: "「Addā ilā (Led to)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "كَانَ اللُّبَانُ يُسْتَخْدَمُ فِي الْمَعَابِدِ وَالطِّبِّ.", japanese: "乳香は神殿や医学で使用されていました。" },
      { speaker: "記事", arabic: "قَرْيَةُ الْفَاو هِيَ إِحْدَى الْمَحَطَّاتِ الْمُهِمَّةِ عَلَى الطَّرِيقِ.", japanese: "アル・ファウ村はこのルート上の重要な停泊地の一つです。" },
      { speaker: "記事", arabic: "الْأَمْنُ كَانَ ضَرُورِيًّا لِحِمَايَةِ الْقَوَافِلِ مِنْ قُطَّاعِ الطُّرُقِ.", japanese: "盗賊からキャラバンを守るために安全が必要でした。" },
      { speaker: "記事", arabic: "هَذَا الطَّرِيقُ سَاهَمَ فِي التَّبَادُلِ الثَّقَافِيِّ.", japanese: "この道は文化交流に貢献しました。" }
    ]
  },
  // --- 25. 歴史・科学 (History/Science) ---
  {
    id: 1033, title: "アブドゥッラフマーン・アッ＝スーフィー", category: "歴史", level: "上級",
    contentVoweled: "عَبْدُ الرَّحْمَنِ الصُّوفِيُّ هُوَ فَلَكِيٌّ مُسْلِمٌ كَبِيرٌ عَاشَ فِي الْقَرْنِ الْعَاشِرِ الْمِيلَادِيِّ...",
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
      { id: 10335, type: "grammar", text: "「証明します」", options: ["يُثْبِتُ", "يَنْفِي", "يَأْكُلُ", "يَنَامُ"], correctIndex: 0, explanation: "「Yuthbitu (Proves)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "سَمَّى الصُّوفِيُّ النُّجُومَ بِأَسْمَاءٍ عَرَبِيَّةٍ لَا تَزَالُ تُسْتَخْدَمُ.", japanese: "スーフィーは星にアラビア語の名前を付け、それらは今も使われています。" },
      { speaker: "記事", arabic: "رَسَمَ خَرَائِطَ دَقِيقَةً لِلسَّمَاءِ.", japanese: "彼は空の正確な地図を描きました。" },
      { speaker: "記事", arabic: "اعْتَمَدَ عَلَيْهِ الْعُلَمَاءُ الْأُورُوبِيُّونَ لِقُرُونٍ.", japanese: "ヨーロッパの学者たちは何世紀にもわたって彼に頼りました。" },
      { speaker: "記事", arabic: "إِنَّهُ رَمْزٌ لِلدِّقَّةِ الْعِلْمِيَّةِ.", japanese: "彼は科学的精密さの象徴です。" }
    ]
  },

  // --- 26. 社会・エンタメ (Society/Entertainment) ---
  {
    id: 1034, title: "リヤド・シーズン", category: "社会", level: "上級",
    contentVoweled: "مَوْسِمُ الرِّيَاضِ هُوَ أَضْخَمُ مَهْرَجَانٍ تَرْفِيهِيٍّ فِي الشَّرْقِ الْأَوْسَطِ...",
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
      { id: 10345, type: "grammar", text: "「開催されます（受動態）」", options: ["يُقَامُ", "يَذْهَبُ", "يُسَافِرُ", "يَنْتَهِي"], correctIndex: 0, explanation: "「Yuqāmu」は「Is held」という意味です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "يَجْذِبُ الْمَوْسِمُ مَلَايِينَ الزُّوَّارِ.", japanese: "シーズンは何百万人もの訪問者を惹きつけます。" },
      { speaker: "記事", arabic: "تَتَنَوَّعُ الْفَعَّالِيَّاتُ بَيْنَ الْفَنِّ وَالرِّيَاضَةِ وَالتَّسَوُّقِ.", japanese: "イベントは芸術、スポーツ、買い物の間で多岐にわたります。" },
      { speaker: "記事", arabic: "أَصْبَحَتِ الرِّيَاضُ مَسْرَحًا لِلْأَحْدَاثِ الْعَالَمِيَّةِ.", japanese: "リヤドは世界的イベントの舞台となりました。" },
      { speaker: "記事", arabic: "هَذَا يُعَزِّزُ جَوْدَةَ الْحَيَاةِ لِلسُّكَّانِ.", japanese: "これは住民の生活の質（QOL）を高めます。" }
    ]
  },

  // --- 27. 文化・伝統 (Culture) ---
  {
    id: 1035, title: "マジュリス（集会場）", category: "文化", level: "上級",
    contentVoweled: "الْمَجْلِسُ الْعَرَبِيُّ هُوَ أَكْثَرُ مِنْ مُجَرَّدِ غُرْفَةٍ لِلْجُلُوسِ...",
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
      { id: 10355, type: "grammar", text: "「議論するために」", options: ["لِمُنَاقَشَةِ", "لِأَكْلِ", "لِلنَّوْمِ", "لِلذَّهَابِ"], correctIndex: 0, explanation: "「Li-munāqashati」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "يَتَعَلَّمُ الشَّبَابُ فِي الْمَجْلِسِ آدَابَ الْحَدِيثِ.", japanese: "若者はマジュリスで会話のマナーを学びます。" },
      { speaker: "記事", arabic: "كِبَارُ السِّنِّ يَحْظَوْنَ بِاحْتِرَامٍ كَبِيرٍ هُنَاكَ.", japanese: "そこでは年長者が大きな尊敬を集めます。" },
      { speaker: "記事", arabic: "الْكَرَمُ وَحُسْنُ الضِّيَافَةِ مِنْ أَسَاسِيَّاتِ الْمَجْلِسِ.", japanese: "寛大さと良いおもてなしはマジュリスの基本です。" },
      { speaker: "記事", arabic: "الْمَجَالِسُ مَدَارِسُ.", japanese: "「マジュリスは学校である」（という格言があります）。" }
    ]
  },

  // --- 28. 文学・物語 (Literature) ---
  {
    id: 1036, title: "千夜一夜物語（アラビアンナイト）", category: "文学", level: "上級",
    contentVoweled: "أَلْفُ لَيْلَةٍ وَلَيْلَةٍ هِيَ مَجْمُوعَةُ قِصَصٍ شَعْبِيَّةٍ سَاحِرَةٍ...",
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
      { id: 10365, type: "grammar", text: "「強制します/させます」", options: ["يُجْبِرُ", "يُعْطِي", "يَسْمَحُ", "يُحِبُّ"], correctIndex: 0, explanation: "「Yujbiru (Compel/Force)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "تُرْجِمَ الْكِتَابُ إِلَى مُعْظَمِ لُغَاتِ الْعَالَمِ.", japanese: "その本は世界のほとんどの言語に翻訳されました。" },
      { speaker: "記事", arabic: "الْخَيَالُ فِي هَذِهِ الْقِصَصِ لَا حُدُودَ لَهُ.", japanese: "これらの物語の想像力には限界がありません。" },
      { speaker: "記事", arabic: "شَخْصِيَّةُ شَهْرَزَادَ رَمْزٌ لِلذَّكَاءِ وَالْحِكْمَةِ.", japanese: "シェヘラザードというキャラクターは知性と知恵の象徴です。" },
      { speaker: "記事", arabic: "الْأَدَبُ يُمْكِنُ أَنْ يُغَيِّرَ النُّفُوسَ.", japanese: "文学は魂（人の心）を変えることができます。" }
    ]
  },

  // --- 29. 環境・地理 (Geography) ---
  {
    id: 1037, title: "アスィール地方", category: "自然", level: "上級",
    contentVoweled: "تَتَمَيَّزُ مِنْطَقَةُ عَسِيرَ بِطَبِيعَةٍ جُغْرَافِيَّةٍ وَمُنَاخِيَّةٍ فَرِيدَةٍ...",
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
      { id: 10375, type: "grammar", text: "「覆います」", options: ["تَكْسُو", "تَكْشِفُ", "تَقْطَعُ", "تَحْرِقُ"], correctIndex: 0, explanation: "「Taksū (Cover/Clothe)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "رِجَالُ أَلْمَعَ قَرْيَةٌ تُرَاثِيَّةٌ مَشْهُورَةٌ فِي عَسِيرَ.", japanese: "リジャール・アルマアはアスィールで有名な遺産の村です。" },
      { speaker: "記事", arabic: "يَرْتَدِي بَعْضُ السُّكَّانِ أَطْوَاقًا مِنَ الزُّهُورِ.", japanese: "一部の住民は花の冠（花輪）を身につけます（フラワーメン）。" },
      { speaker: "記事", arabic: "السَّوْدَةُ هِيَ أَعْلَى قِمَّةٍ فِي السُّعُودِيَّةِ.", japanese: "サウダ山はサウジアラビアの最高峰です。" },
      { speaker: "記事", arabic: "الضَّبَابُ يُعَانِقُ الْجِبَالَ فِي مَنْظَرٍ بَدِيعٍ.", japanese: "霧が山々を抱きしめる素晴らしい景色です。" }
    ]
  },

  // --- 30. 経済 (Economy) ---
  {
    id: 1038, title: "サウジ証券取引所 (Tadawul)", category: "経済", level: "上級",
    contentVoweled: "السُّوقُ الْمَالِيَّةُ السُّعُودِيَّةُ 'تَدَاوُل' هِيَ أَكْبَرُ سُوقٍ مَالِيَّةٍ فِي الشَّرْقِ الْأَوْسَطِ...",
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
      { id: 10385, type: "grammar", text: "「可能にします/提供します」", options: ["تُتِيحُ", "تَمْنَعُ", "تَأْخُذُ", "تَطْلُبُ"], correctIndex: 0, explanation: "「Tutīḥu (Allows/Provides opportunity)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "الِاسْتِثْمَارُ فِي الْأَسْهُمِ يَتَطَلَّبُ مَعْرِفَةً وَتَحْلِيلًا.", japanese: "株式投資には知識と分析が必要です。" },
      { speaker: "記事", arabic: "انْضَمَّتْ تَدَاوُل إِلَى الْمُؤَشِّرَاتِ الْعَالَمِيَّةِ لِلْأَسْوَاقِ النَّاشِئَةِ.", japanese: "タダウルは新興市場の世界的なインデックスに加わりました。" },
      { speaker: "記事", arabic: "التِّقْنِيَةُ سَهَّلَتْ عَمَلِيَّةَ التَّدَاوُلِ مِنَ الْهَاتِفِ.", japanese: "テクノロジーは電話からの取引プロセスを容易にしました。" },
      { speaker: "記事", arabic: "الشَّفَافِيَّةُ مُهِمَّةٌ لِجَذْبِ رُؤُوسِ الْأَمْوَالِ.", japanese: "透明性は資本を惹きつけるために重要です。" }
    ]
  },
  {
    id: 1039, title: "サウジのアルダ（剣の舞）", category: "文化", level: "上級",
    contentVoweled: "الْعَرْضَةُ السُّعُودِيَّةُ هِيَ رَقْصَةٌ حَرْبِيَّةٌ تَقْلِيدِيَّةٌ تَحَوَّلَتْ إِلَى رَمْزٍ وَطَنِيٍّ...",
    contentPlain: "العرضة السعودية هي رقصة حربية تقليدية تحولت إلى رمز وطني للاحتفال والوحدة. يؤديها الرجال وهم يرتدون الزي التقليدي ويحملون السيوف، ويقفون في صفوف متقابلة يرددون أبيات الشعر الحماسية على إيقاع الطبول. كانت العرضة تؤدى قديما قبل المعارك لإثارة الحماس، أما اليوم فهي تقام في المناسبات الوطنية واستقبال الملوك والضيوف الكبار.",
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
      { id: 10395, type: "grammar", text: "「繰り返します（唱和します）」", options: ["يُرَدِّدُونَ", "يَسْكُتُونَ", "يَأْكُلُونَ", "يَجْرُونَ"], correctIndex: 0, explanation: "「Yuraddidūna (Repeat/Chant)」です。" }
    ],
    sentences: [
      // ▼▼▼ 修正: 答えとなる「戦争の踊り」という記述をここに追加しました ▼▼▼
      { speaker: "記事", arabic: "الْعَرْضَةُ السُّعُودِيَّةُ هِيَ رَقْصَةٌ حَرْبِيَّةٌ تَقْلِيدِيَّةٌ تَحَوَّلَتْ إِلَى رَمْزٍ وَطَنِيٍّ.", japanese: "サウジのアルダは、国家的象徴へと変化した伝統的な戦争の踊りです。" },
      { speaker: "記事", arabic: "يُؤَدِّيهَا الرِّجَالُ وَهُمْ يَحْمِلُونَ السُّيُوفَ فِي صُفُوفٍ مُتَقَابِلَةٍ.", japanese: "男性たちが剣を持ち、向かい合った列でそれを演じます。" },
      { speaker: "記事", arabic: "كَانَتِ الْعَرْضَةُ تُؤَدَّى قَدِيمًا قَبْلَ الْمَعَارِكِ لِإِثَارَةِ الْحَمَاسِ.", japanese: "アルダは昔、熱狂を呼び起こすために戦いの前に演じられていました。" },
      { speaker: "記事", arabic: "الْيَوْمَ، تُقَامُ فِي الْمُنَاسَبَاتِ الْوَطَنِيَّةِ وَاسْتِقْبَالِ الْمُلُوكِ.", japanese: "今日では、国家的行事や王を迎える際に催されます。" },
      { speaker: "記事", arabic: "الشِّعْرُ فِيهَا يَتَغَنَّى بِحُبِّ الْوَطَنِ وَالشَّجَاعَةِ.", japanese: "その中の詩は祖国愛と勇気を歌います。" }
    ]
  },
// --- 32. 地理・自然 (Geography/Nature) ---
{
    id: 1040, title: "アル・アハサー・オアシス", category: "自然", level: "上級",
    contentVoweled: "وَاحَةُ الْأَحْسَاءِ هِيَ أَكْبَرُ وَاحَةِ نَخِيلٍ فِي الْعَالَمِ...",
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
      { id: 10405, type: "grammar", text: "「〜のおかげで」", options: ["بِفَضْلِ", "بِسَبَبِ", "لَوْلَا", "مِنْ أَجْلِ"], correctIndex: 0, explanation: "「Bi-faḍli (Thanks to / Due to good cause)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "تُعْتَبَرُ الْأَحْسَاءُ مَوْطِنًا لِحَضَارَاتٍ قَدِيمَةٍ جِدًّا.", japanese: "アル・アハサーは非常に古い文明の故郷と考えられています。" },
      { speaker: "記事", arabic: "تَمْرُ 'الْخَلَاصِ' الْمَشْهُورُ يُعْتَبَرُ مِنَ الذَّهَبِ الْأَصْفَرِ لِلْمِنْطَقَةِ.", japanese: "有名なデーツ「ハラース」はこの地域の黄色い金と考えられています。" },
      { speaker: "記事", arabic: "يَعْتَمِدُ الْمُزَارِعُونَ عَلَى قَنَوَاتِ الرِّيِّ لِتَوْزِيعِ الْمِيَاهِ.", japanese: "農家は水を分配するために灌漑用水路に依存しています。" },
      { speaker: "記事", arabic: "الْأَحْسَاءُ مَوْقِعٌ سِيَاحِيٌّ يَجْمَعُ بَيْنَ التَّارِيخِ وَالطَّبِيعَةِ.", japanese: "アル・アハサーは歴史と自然を融合させた観光地です。" }
    ]
  },

  // --- 33. 歴史・科学 (History/Science) ---
  {
    id: 1041, title: "博学者アル・ビールーニー", category: "歴史", level: "上級",
    contentVoweled: "الْبِيرُونِيُّ كَانَ عَالِمًا مَوْسُوعِيًّا بَرَعَ فِي الْفِيزِيَاءِ وَالرِّيَاضِيَّاتِ وَالتَّارِيخِ...",
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
      { id: 10415, type: "grammar", text: "「優れていました/秀でていました」", options: ["بَرَعَ", "فَشِلَ", "نَامَ", "أَكَلَ"], correctIndex: 0, explanation: "「Bara'a (Excelled)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "كَتَبَ الْبِيرُونِيُّ كِتَابَ 'تَحْقِيقِ مَا لِلْهِنْدِ'.", japanese: "ビールーニーは『インドの書（インド誌）』を書きました。" },
      { speaker: "記事", arabic: "دَرَسَ حَرَكَةَ الْكَوَاكِبِ وَدَوَرَانَ الْأَرْضِ.", japanese: "彼は惑星の動きと地球の自転を研究しました。" },
      { speaker: "記事", arabic: "تَرْجَمَ الْعَدِيدَ مِنَ الْكُتُبِ مِنَ السَّنْسِكْرِيتِيَّةِ إِلَى الْعَرَبِيَّةِ.", japanese: "彼は多くの本をサンスクリット語からアラビア語に翻訳しました。" },
      { speaker: "記事", arabic: "وَصَفَهُ الْمُؤَرِّخُونَ بِأَنَّهُ مِنْ أَعْظَمِ الْعُقُولِ فِي التَّارِيخِ.", japanese: "歴史家たちは彼を歴史上最も偉大な頭脳の一人と評しました。" }
    ]
  },

  // --- 34. 社会・プロジェクト (Society/Projects) ---
  {
    id: 1042, title: "キッディーヤ（Qiddiya）", category: "社会", level: "上級",
    contentVoweled: "الْقِدِّيَّةُ هِيَ عَاصِمَةُ التَّرْفِيهِ وَالرِّيَاضَةِ وَالْفُنُونِ فِي الْمَمْلَكَةِ...",
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
      { id: 10425, type: "grammar", text: "「含む/収容する」", options: ["يَضُمُّ", "يَرْمِي", "يَبِيعُ", "يَنْسَى"], correctIndex: 0, explanation: "「Yaḍummu (Includes/Comprises)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "سَتَكُونُ الْقِدِّيَّةُ مَقَرًّا لِلْأَلْعَابِ الْإِلِكْتُرُونِيَّةِ أَيْضًا.", japanese: "キッディーヤはeスポーツの本拠地にもなります。" },
      { speaker: "記事", arabic: "الْمَشْرُوعُ سَيُوَفِّرُ آلَافَ الْفُرَصِ الْوَظِيفِيَّةِ.", japanese: "プロジェクトは何千もの雇用の機会を提供します。" },
      { speaker: "記事", arabic: "يَقَعُ الْمَشْرُوعُ بَيْنَ الْجِبَالِ الصَّخْرِيَّةِ الْخَلَّابَةِ.", japanese: "プロジェクトは美しい岩山の中に位置しています。" },
      { speaker: "記事", arabic: "إِنَّهُ جُزْءٌ مِنْ خُطَّةِ تَنْوِيعِ مَصَادِرِ الدَّخْلِ.", japanese: "それは収入源多様化計画の一部です。" }
    ]
  },

  // --- 35. 食文化 (Food Culture) ---
  {
    id: 1043, title: "サウジのカブサ", category: "文化", level: "上級",
    contentVoweled: "الْكَبْسَةُ هِيَ الْأَكْلَةُ الشَّعْبِيَّةُ الْأُولَى فِي السُّعُودِيَّةِ...",
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
      { id: 10435, type: "grammar", text: "「調理されます（受動態）」", options: ["يَتِمُّ طَهْيُ", "طَبَخَ", "يَأْكُلُ", "يَشْرَبُ"], correctIndex: 0, explanation: "「Yatimmu ṭahyu (Cooking is done/Is cooked)」という受動表現です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "تَخْتَلِفُ طُرُقُ طَهْيِ الْكَبْسَةِ مِنْ مِنْطَقَةٍ لِأُخْرَى.", japanese: "カブサの調理法は地域によって異なります。" },
      { speaker: "記事", arabic: "يُزَيَّنُ الطَّبَقُ بِالْمُكَسَّرَاتِ وَالزَّبِيبِ.", japanese: "料理はナッツとレーズンで飾られます。" },
      { speaker: "記事", arabic: "تَنَاوُلُ الطَّعَامِ بِالْيَدِ سُنَّةٌ وَتَقْلِيدٌ عَرَبِيٌّ.", japanese: "手で食事をすることはスンナでありアラブの伝統です。" },
      { speaker: "記事", arabic: "الْكَبْسَةُ رَمْزٌ لِلْكَرَمِ وَحُسْنِ الضِّيَافَةِ.", japanese: "カブサは寛大さとおもてなしの象徴です。" }
    ]
  },

  // --- 36. 交通・インフラ (Infrastructure) ---
  {
    id: 1044, title: "リヤド・メトロ", category: "社会", level: "上級",
    contentVoweled: "مِتْرُو الرِّيَاضِ هُوَ أَحَدُ أَكْبَرِ مَشَارِيعِ النَّقْلِ الْعَامِّ فِي الْعَالَمِ...",
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
      { id: 10445, type: "grammar", text: "「構成されています」", options: ["يَتَكَوَّنُ مِنْ", "يَذْهَبُ إِلَى", "يَأْكُلُ مِنْ", "يَنَامُ فِي"], correctIndex: 0, explanation: "「Yatakawwanu min (Consists of)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "يَرْبِطُ الْمِتْرُو الْمَطَارَ بِالْمَرْكَزِ الْمَالِيِّ وَالْجَامِعَاتِ.", japanese: "メトロは空港を金融センターや大学と結びます。" },
      { speaker: "記事", arabic: "سَيُسَاهِمُ فِي تَقْلِيلِ التَّلَوُّثِ النَّاتِجِ عَنِ السَّيَّارَاتِ.", japanese: "それは車による汚染を減らすのに貢献します。" },
      { speaker: "記事", arabic: "الْمَحَطَّاتُ مُزَوَّدَةٌ بِأَحْدَثِ التِّقْنِيَّاتِ.", japanese: "駅は最新技術を備えています。" },
      { speaker: "記事", arabic: "إِنَّهُ نَقْلَةٌ حَضَارِيَّةٌ لِلْعَاصِمَةِ.", japanese: "それは首都にとっての文明的な飛躍です。" }
    ]
  },

  // --- 37. 芸術・建築 (Art/Architecture) ---
  {
    id: 1045, title: "イスラム建築", category: "文化", level: "上級",
    contentVoweled: "تَتَمَيَّزُ الْعِمَارَةُ الْإِسْلَامِيَّةُ بِطَابِعِهَا الْفَرِيدِ الَّذِي يَجْمَعُ بَيْنَ الْجَمَالِ وَالْوَظِيفَةِ...",
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
      { id: 10455, type: "grammar", text: "「集める/結合する」", options: ["يَجْمَعُ", "يُفَرِّقُ", "يَكْسِرُ", "يَنْسَى"], correctIndex: 0, explanation: "「Yajma'u (Combine/Gather)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "الْأَقْوَاسُ الْمُحَدَّبَةُ مِنْ مُمَيِّزَاتِ الْمَسَاجِدِ الْقَدِيمَةِ.", japanese: "馬蹄形アーチは古いモスクの特徴の一つです。" },
      { speaker: "記事", arabic: "تُسْتَخْدَمُ الْخَطُّ الْعَرَبِيُّ لِتَزْيِينِ الْجُدْرَانِ.", japanese: "アラビア書道が壁を飾るために使われます。" },
      { speaker: "記事", arabic: "الْمَشْرَبِيَّةُ تُسَاعِدُ فِي تَبْرِيدِ الْهَوَاءِ وَتَوْفِيرِ الْخُصُوصِيَّةِ.", japanese: "マシュラビーヤ（木製格子窓）は空気の冷却とプライバシー確保に役立ちます。" },
      { speaker: "記事", arabic: "هَذَا الْفَنُّ يَعْكِسُ الرُّوحَانِيَّةَ وَالنِّظَامَ.", japanese: "この芸術は精神性と秩序を反映しています。" }
    ]
  },

  // --- 38. 歴史・動物 (History/Animals) ---
  {
    id: 1046, title: "サルーキ犬（アラビアの狩猟犬）", category: "文化", level: "上級",
    contentVoweled: "كَلْبُ السَّلُوقِيِّ هُوَ أَحَدُ أَقْدَمِ سُلَالَاتِ الْكِلَابِ فِي الْعَالَمِ...",
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
      { id: 10465, type: "grammar", text: "「同伴した/連れ添った」", options: ["رَافَقَ", "تَرَكَ", "ذَهَبَ", "أَكَلَ"], correctIndex: 0, explanation: "「Rāfaqa (Accompanied)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "لَا يَنْبَحُ السَّلُوقِيُّ كَثِيرًا، بَلْ هُوَ هَادِئٌ.", japanese: "サルーキはあまり吠えず、静かです。" },
      { speaker: "記事", arabic: "يَصِيدُ بِاسْتِخْدَامِ بَصَرِهِ الْحَادِّ.", japanese: "視覚（サイトハウンド）を使って狩りをします。" },
      { speaker: "記事", arabic: "يُوجَدُ نَوْعَانِ: الْأَمْلَسُ وَالْمُشْعَرُ.", japanese: "スムース（短毛）とフェザード（長毛）の2種類があります。" },
      { speaker: "記事", arabic: "تُقَامُ مُسَابَقَاتٌ لِجَمَالِ وَسُرْعَةِ السَّلُوقِيِّ.", japanese: "サルーキの美しさと速さを競うコンテストが開催されます。" }
    ]
  },
// --- 39. 文化・芸術 (Culture/Art) ---
{
    id: 1047, title: "サドゥ織り（伝統工芸）", category: "文化", level: "上級",
    contentVoweled: "حِرْفَةُ السَّدْوِ هِيَ فَنُّ النَّسِيجِ التَّقْلِيدِيِّ الَّذِي أَتْقَنَتْهُ نِسَاءُ الْبَادِيَةِ...",
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
      { id: 10475, type: "grammar", text: "「習得しました」", options: ["أَتْقَنَتْ", "نَسِيَتْ", "تَعَلَّمَتْ", "كَرِهَتْ"], correctIndex: 0, explanation: "「Atqanat (Mastered/Perfected)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "أَلْوَانُ السَّدْوِ التَّقْلِيدِيَّةُ هِيَ الْأَحْمَرُ وَالْأَسْوَدُ وَالْأَبْيَضُ.", japanese: "サドゥの伝統的な色は赤、黒、白です。" },
      { speaker: "記事", arabic: "تُرْمَزُ النُّقُوشُ إِلَى عَنَاصِرَ مِنَ الطَّبِيعَةِ وَالْحَيَاةِ الْيَوْمِيَّةِ.", japanese: "模様は自然や日常生活の要素を象徴しています。" },
      { speaker: "記事", arabic: "تُسْتَخْدَمُ هَذِهِ الزَّخَارِفُ الْآنَ فِي تَصَامِيمِ الْأَزْيَاءِ وَالْحَقَائِبِ.", japanese: "これらの装飾は今、ファッションやバッグのデザインに使われています。" },
      { speaker: "記事", arabic: "الْحِفَاظُ عَلَى هَذِهِ الْحِرْفَةِ وَاجِبٌ وَطَنِيٌّ.", japanese: "この工芸を守ることは国民の義務です。" }
    ]
  },

  // --- 40. 歴史・科学 (History/Science) ---
  {
    id: 1048, title: "医学の天才アル・ラーズィー", category: "歴史", level: "上級",
    contentVoweled: "أَبُو بَكْرٍ الرَّازِيُّ هُوَ أَحَدُ أَعْظَمِ الْأَطِبَّاءِ فِي تَارِيخِ الْبَشَرِيَّةِ...",
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
      { id: 10485, type: "grammar", text: "「区別しました」", options: ["فَرَّقَ", "جَمَعَ", "نَسِيَ", "خَلَطَ"], correctIndex: 0, explanation: "「Farraqa (Differentiated)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "اخْتَارَ الرَّازِيُّ مَوْقِعَ الْمُسْتَشْفَى عَنْ طَرِيقِ تَعْلِيقِ قِطَعِ اللَّحْمِ.", japanese: "ラーズィーは肉片を吊るすことで病院の場所を選びました（腐敗が遅い場所を選んだ）。" },
      { speaker: "記事", arabic: "كَانَ كِيمْيَائِيًّا بَارِعًا قَبْلَ أَنْ يُصْبِحَ طَبِيبًا.", japanese: "彼は医者になる前は優れた化学者でした。" },
      { speaker: "記事", arabic: "آتَى بِأَخْلَاقِيَّاتِ الطِّبِّ وَمُعَامَلَةِ الْفُقَرَاءِ.", japanese: "彼は医療倫理と貧者の扱いを重視しました。" },
      { speaker: "記事", arabic: "تُرْجِمَ كِتَابُهُ 'الْحَاوِي' إِلَى لُغَاتٍ عِدَّةٍ.", japanese: "彼の著書『包含の書（アル・ハーウィー）』は数ヶ国語に翻訳されました。" }
    ]
  },

  // --- 41. 自然・地理 (Nature) ---
  {
    id: 1049, title: "ファラサン諸島", category: "自然", level: "上級",
    contentVoweled: "جُزُرُ فَرَسَانَ هِيَ أَرْخَبِيلٌ سَاحِرٌ يَقَعُ فِي جَنُوبِ الْبَحْرِ الْأَحْمَرِ...",
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
      { id: 10495, type: "grammar", text: "「属しています」", options: ["تَابِعٌ لِـ", "بَعِيدٌ عَنْ", "قَرِيبٌ مِنْ", "خَائِفٌ مِنْ"], correctIndex: 0, explanation: "「Tābi'un li- (Belonging to/Affiliated with)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "تَمَّ تَسْجِيلُ الْجُزُرِ كَمَحْمِيَّةٍ طَبِيعِيَّةٍ.", japanese: "諸島は自然保護区として登録されました。" },
      { speaker: "記事", arabic: "تُوجَدُ فِي الْجَزِيرَةِ آثَارٌ عُثْمَانِيَّةٌ وَمَبَانٍ قَدِيمَةٌ.", japanese: "島にはオスマン帝国の遺跡や古い建物があります。" },
      { speaker: "記事", arabic: "مِيَاهُهَا الصَّافِيَةُ تَجْذِبُ الْغَوَّاصِينَ.", japanese: "その澄んだ水はダイバーを惹きつけます。" },
      { speaker: "記事", arabic: "ظَاهِرَةُ انْتِحَارِ سَمَكِ الْحَرِيدِ لَا تَزَالُ لُغْزًا.", japanese: "ハリード魚の（岸への）大量押し寄せ現象は今も謎です。" }
    ]
  },

  // --- 42. 科学・環境 (Science) ---
  {
    id: 1050, title: "人工降雨（クラウドシーディング）", category: "科学", level: "上級",
    contentVoweled: "بَرْنَامَجُ الِاسْتِمْطَارِ الصِّنَاعِيِّ يَهْدِفُ إِلَى زِيَادَةِ مُعَدَّلَاتِ هُطُولِ الْأَمْطَارِ...",
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
      { id: 10505, type: "grammar", text: "「刺激する/促す」", options: ["يُحَفِّزُ", "يَمْنَعُ", "يُوقِفُ", "يَنَامُ"], correctIndex: 0, explanation: "「Yuḥaffizu (Stimulates)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "الْمَادَّةُ الْمُسْتَخْدَمَةُ لَا تَضُرُّ بِالْبِيئَةِ.", japanese: "使用される物質は環境に害を与えません。" },
      { speaker: "記事", arabic: "الْعَمَلِيَّةُ تَتَطَلَّبُ دِرَاسَةً دَقِيقَةً لِحَالَةِ الطَّقْسِ.", japanese: "このプロセスには気象条件の精密な研究が必要です。" },
      { speaker: "記事", arabic: "زِيَادَةُ الْمَطَرِ تَدْعَمُ الزِّرَاعَةَ وَالْغِطَاءَ النَّبَاتِيَّ.", japanese: "雨の増加は農業と植生を支えます。" },
      { speaker: "記事", arabic: "التِّقْنِيَةُ مُسْتَخْدَمَةٌ فِي دُوَلٍ كَثِيرَةٍ حَوْلَ الْعَالَمِ.", japanese: "この技術は世界中の多くの国で使用されています。" }
    ]
  },

  // --- 43. 文化・宗教 (Culture) ---
  {
    id: 1051, title: "キスワ（カアバの幕）", category: "文化", level: "上級",
    contentVoweled: "كِسْوَةُ الْكَعْبَةِ هِيَ الْغِطَاءُ الْأَسْوَدُ الَّذِي يُزَيِّنُ بَيْتَ اللهِ الْحَرَامَ...",
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
      { id: 10515, type: "grammar", text: "「装飾する」", options: ["يُزَيِّنُ", "يُخَرِّبُ", "يَبْنِي", "يَهْدِمُ"], correctIndex: 0, explanation: "「Yuzayyinu (Decorates)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "يَعْمَلُ فِي مَصْنَعِ الْكِسْوَةِ أَمْهَرُ الْحِرَفِيِّينَ السُّعُودِيِّينَ.", japanese: "キスワ工場では最も熟練したサウジの職人たちが働いています。" },
      { speaker: "記事", arabic: "تَزِنُ الْكِسْوَةُ مِئَاتِ الْكِيلُوجْرَامَاتِ.", japanese: "キスワの重さは数百キログラムになります。" },
      { speaker: "記事", arabic: "الْحِزَامُ الْمُطَرَّزُ يُحِيطُ بِأَعْلَى الْكَعْبَةِ.", japanese: "刺繍された帯がカアバの上部を囲んでいます。" },
      { speaker: "記事", arabic: "الْكِسْوَةُ الْقَدِيمَةُ تُقَطَّعُ وَتُهْدَى لِكِبَارِ الشَّخْصِيَّاتِ.", japanese: "古いキスワは裁断され、要人たちに贈られます。" }
    ]
  },

  // --- 44. 社会・芸術 (Society/Art) ---
  {
    id: 1052, title: "サウジ映画の躍進", category: "社会", level: "上級",
    contentVoweled: "يَشْهَدُ قِطَاعُ السِّينِمَا فِي السُّعُودِيَّةِ نُمُوًّا مُتَسَارِعًا...",
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
      { id: 10525, type: "grammar", text: "「獲得しました」", options: ["نَالَتْ", "خَسِرَتْ", "أَعْطَتْ", "بَاعَتْ"], correctIndex: 0, explanation: "「Nālat (Won/Obtained)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "فِيلْمُ 'حَدُّ الطَّارِ' كَانَ مِنْ الْأَفْلَامِ النَّاجِحَةِ.", japanese: "映画『The Tambour of Retribution』は成功した作品の一つでした。" },
      { speaker: "記事", arabic: "تَمَّ تَصْوِيرُ أَفْلَامٍ عَالَمِيَّةٍ فِي الْعُلَا.", japanese: "アル・ウラーで国際的な映画が撮影されました。" },
      { speaker: "記事", arabic: "السِّينِمَا هِيَ مِرْآةُ الْمُجْتَمَعِ.", japanese: "映画は社会の鏡です。" },
      { speaker: "記事", arabic: "نَطْمَحُ لِلْوُصُولِ إِلَى الْأُوسْكَارِ.", japanese: "私たちはオスカーへの到達を熱望しています。" }
    ]
  },

  // --- 45. 社会・環境 (Society/Green) ---
  {
    id: 1053, title: "キング・サルマン・パーク", category: "社会", level: "上級",
    contentVoweled: "حَدِيقَةُ الْمَلِكِ سَلْمَانَ فِي الرِّيَاضِ سَتَكُونُ أَكْبَرَ حَدِيقَةِ مُدُنٍ فِي الْعَالَمِ...",
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
      { id: 10535, type: "grammar", text: "「なります（未来）」", options: ["سَتَكُونُ", "كَانَتْ", "لَيْسَتْ", "أَصْبَحَتْ"], correctIndex: 0, explanation: "「Sa-takūnu (Will be)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "تَقَعُ الْحَدِيقَةُ فِي مَوْقِعِ الْمَطَارِ الْقَدِيمِ.", japanese: "公園は旧空港の跡地に位置しています。" },
      { speaker: "記事", arabic: "سَتَحْتَوِي عَلَى مَسَارَاتٍ لِلْمَشْيِ وَرُكُوبِ الدَّرَّاجَاتِ.", japanese: "ウォーキングやサイクリングのためのコースが含まれます。" },
      { speaker: "記事", arabic: "الْمَشْرُوعُ يُعَزِّزُ الصِّحَّةَ الْعَامَّةَ.", japanese: "プロジェクトは公衆衛生を増進します。" },
      { speaker: "記事", arabic: "إِنَّهَا هَدِيَّةُ الْمَلِكِ لِسُكَّانِ الرِّيَاضِ.", japanese: "それはリヤド住民への王からの贈り物です。" }
    ]
  },

  // --- 46. 文学・物語 (Literature) ---
  {
    id: 1054, title: "騎士詩人アンタラ", category: "文学", level: "上級",
    contentVoweled: "عَنْتَرَةُ بْنُ شَدَّادٍ هُوَ أَشْهَرُ فُرْسَانِ الْعَرَبِ وَشُعَرَائِهِمْ...",
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
      { id: 10545, type: "grammar", text: "「勝ち取りました/奪い取りました」", options: ["انْتَزَعَ", "أَعْطَى", "فَقَدَ", "نَسِيَ"], correctIndex: 0, explanation: "「Intaza'a (Snatched/Wrested)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "عَانَى عَنْتَرَةُ مِنَ التَّمْيِيزِ بِسَبَبِ لَوْنِهِ.", japanese: "アンタラは色のせいで差別に苦しみました。" },
      { speaker: "記事", arabic: "أَثْبَتَ أَنَّ الْقِيمَةَ بِالْأَفْعَالِ لَا بِالْأَنْسَابِ.", japanese: "彼は価値が行いによるものであり、血統ではないことを証明しました。" },
      { speaker: "記事", arabic: "قَالَ: وَلَقَدْ ذَكَرْتُكِ وَالرِّمَاحُ نَوَاهِلٌ مِنِّي.", japanese: "彼は言いました。「槍が私に突き刺さろうとする時も、私はあなた（アブラ）を想った。」" },
      { speaker: "記事", arabic: "قِصَّتُهُ رَمْزٌ لِلْبُطُولَةِ وَالْحُبِّ.", japanese: "彼の物語は英雄的行為と愛の象徴です。" }
    ]
  },

  // --- 47. 経済・地理 (Economy) ---
  {
    id: 1055, title: "物流ハブとしてのサウジ", category: "経済", level: "上級",
    contentVoweled: "تَتَمَتَّعُ الْمَمْلَكَةُ بِمَوْقِعٍ جُغْرَافِيٍّ اسْتِرَاتِيجِيٍّ يَرْبِطُ بَيْنَ ثَلَاثِ قَارَّاتٍ...",
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
      { id: 10555, type: "grammar", text: "「変換する」", options: ["تَحْوِيل", "بَقَاء", "ذَهَاب", "نِسْيَان"], correctIndex: 0, explanation: "「Taḥwīl (Transforming/Converting)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "مِينَاءُ جِدَّةَ الْإِسْلَامِيُّ هُوَ الْأَكْبَرُ فِي الْبَحْرِ الْأَحْمَرِ.", japanese: "ジェッダ・イスラム港は紅海で最大です。" },
      { speaker: "記事", arabic: "تَمُرُّ نِسْبَةٌ كَبِيرَةٌ مِنَ التِّجَارَةِ الْعَالَمِيَّةِ عَبْرَ الْبَحْرِ الْأَحْمَرِ.", japanese: "世界貿易の大きな割合が紅海を通過します。" },
      { speaker: "記事", arabic: "تَطْوِيرُ الْمَنَاطِقِ اللُّوجِسْتِيَّةِ يَجْذِبُ الشَّرِكَاتِ الْعَالَمِيَّةَ.", japanese: "物流ゾーンの開発は世界的な企業を惹きつけます。" },
      { speaker: "記事", arabic: "الْهَدَفُ هُوَ رَفْعُ كَفَاءَةِ الِاسْتِيرَادِ وَالتَّصْدِيرِ.", japanese: "目標は輸出入の効率を高めることです。" }
    ]
  },

  // --- 48. 自然・地理 (Nature/Geography) ---
  {
    id: 1056, title: "サウジの火山（ハッラート）", category: "自然", level: "上級",
    contentVoweled: "قَدْ يَسْتَغْرِبُ الْبَعْضُ وُجُودَ بَرَاكِينَ فِي السُّعُودِيَّةِ...",
    contentPlain: "قد يستغرب البعض وجود براكين في السعودية، لكن المملكة تضم العديد من الحقول البركانية الخامدة المعروفة باسم 'الحرات'. أشهرها 'حرة رهاط' و'حرة خيبر' التي تحتوي على فوهات بركانية وكهوف (دحول) تكونت من الحمم القديمة. هذه المناطق تشكل معالم جيولوجية فريدة تجذب الباحثين والسياح لمشاهدة التباين بين الصخور السوداء والرمال الصحراوية.",
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
      { id: 10565, type: "grammar", text: "「驚くかもしれません」", options: ["قَدْ يَسْتَغْرِبُ", "يَعْرِفُ", "يَتَأَكَّدُ", "يَنْسَى"], correctIndex: 0, explanation: "「Qad yastaghribu (Might be surprised)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "كَهْفُ 'أُمِّ جِرْسَانَ' هُوَ أَطْوَلُ كَهْفٍ بُرْكَانِيٍّ فِي الْعَالَمِ الْعَرَبِيِّ.", japanese: "「ウンム・ジルサーン」洞窟はアラブ世界で最も長い火山洞窟です。" },
      { speaker: "記事", arabic: "اللَّابَةُ السَّوْدَاءُ تُغَطِّي مِسَاحَاتٍ شَاسِعَةً.", japanese: "黒い溶岩が広大な面積を覆っています。" },
      { speaker: "記事", arabic: "الْقِدْرُ (جَبَلُ الْأَبْيَضِ) هُوَ بُرْكَانٌ نَادِرٌ لَوْنُهُ فَاتِحٌ.", japanese: "アル・キドル（白い山）は珍しい明るい色の火山です。" },
      { speaker: "記事", arabic: "هَذِهِ الْمَنَاطِقُ شَاهِدَةٌ عَلَى تَارِيخِ الْأَرْضِ الْجِيُولُوجِيِّ.", japanese: "これらの地域は地球の地質学的歴史の証人です。" }
    ]
  },
  // --- 49. 歴史・政治 (History/Politics) ---
  {
    id: 1057, title: "マスマク城塞", category: "歴史", level: "上級",
    contentVoweled: "يَحْتَلُّ قَصْرُ الْمَصْمَكِ مَكَانَةً بَارِزَةً فِي تَارِيخِ الْمَمْلَكَةِ الْعَرَبِيَّةِ السُّعُودِيَّةِ...",
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
      { id: 10575, type: "grammar", text: "「率いました」", options: ["قَادَ", "تَبِعَ", "مَشَى", "نَامَ"], correctIndex: 0, explanation: "「Qāda (Led)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "بُنِيَ الْمَصْمَكُ مِنَ الطِّينِ وَاللَّبِنِ.", japanese: "マスマクは泥と日干し煉瓦で建てられました。" },
      { speaker: "記事", arabic: "تَحَوَّلَ الْقَصْرُ الْآنَ إِلَى مُتْحَفٍ يَحْكِي قِصَّةَ التَّوْحِيدِ.", japanese: "城は現在、統一の物語を語る博物館に変わりました。" },
      { speaker: "記事", arabic: "يَقَعُ فِي قَلْبِ الْعَاصِمَةِ الرِّيَاضِ.", japanese: "それは首都リヤドの中心に位置しています。" },
      { speaker: "記事", arabic: "كَلِمَةُ 'مَصْمَك' تَعْنِي الْبِنَاءَ الْمُرْتَفِعَ الْقَوِيَّ.", japanese: "「マスマク」という言葉は、高く強い建物を意味します。" }
    ]
  },

  // --- 50. 歴史・科学 (Science History) ---
  {
    id: 1058, title: "外科医アル・ザフラ−ウィー", category: "歴史", level: "上級",
    contentVoweled: "يُلَقَّبُ أَبُو الْقَاسِمِ الزَّهْرَاوِيُّ بِأَبِي الْجِرَاحَةِ الْحَدِيثَةِ...",
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
      { id: 10585, type: "grammar", text: "「あだ名で呼ばれる」", options: ["يُلَقَّبُ بِـ", "يُنَادَى", "يُسَمَّى", "يَقُولُ"], correctIndex: 0, explanation: "「Yulaqqabu bi- (Is nicknamed/titled)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "وُلِدَ الزَّهْرَاوِيُّ وَعَاشَ فِي قُرْطُبَةَ بِالْأَنْدَلُسِ.", japanese: "ザフラ−ウィーはアンダルスのコルドバで生まれ、暮らしました。" },
      { speaker: "記事", arabic: "كِتَابُهُ كَانَ الْمَرْجِعَ الْأَسَاسِيَّ لِلْجِرَاحَةِ فِي أُورُوبَّا لِخَمْسَةِ قُرُونٍ.", japanese: "彼の本は5世紀にわたりヨーロッパで外科の主要な参考文献でした。" },
      { speaker: "記事", arabic: "رَسَمَ صُوَرًا دَقِيقَةً لِلْأَدَوَاتِ الَّتِي ابْتَكَرَهَا.", japanese: "彼は発明した道具の正確な図を描きました。" },
      { speaker: "記事", arabic: "أَكَّدَ عَلَى أَهَمِّيَّةِ التَّشْرِيحِ لِفَهْمِ جِسْمِ الْإِنْسَانِ.", japanese: "彼は人体を理解するための解剖の重要性を強調しました。" }
    ]
  },

  // --- 51. 未来・プロジェクト (Future/Projects) ---
  {
    id: 1059, title: "トロヘナ（山岳観光）", category: "社会", level: "上級",
    contentVoweled: "تُرُوجِينَا هِيَ وِجْهَةُ السِّيَاحَةِ الْجَبَلِيَّةِ الْعَالَمِيَّةِ فِي نِيُوم...",
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
      { id: 10595, type: "grammar", text: "「可能にする（Enable/Allow）」", options: ["يُتِيحُ", "يَمْنَعُ", "يَأْخُذُ", "يَقُولُ"], correctIndex: 0, explanation: "「Yutīḥu (Allows/Enables)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "يَتَمَيَّزُ الْمَشْرُوعُ بِتَصْمِيمٍ هَنْدَسِيٍّ مُبْتَكَرٍ.", japanese: "プロジェクトは革新的な建築デザインが特徴です。" },
      { speaker: "記事", arabic: "سَتَحْتَوِي عَلَى بُحَيْرَةٍ اصْطِنَاعِيَّةٍ ضَخْمَةٍ فِي قِمَّةِ الْجَبَلِ.", japanese: "山頂には巨大な人工湖が含まれる予定です。" },
      { speaker: "記事", arabic: "تُرُوجِينَا تُقَدِّمُ تَجْرِبَةً سِيَاحِيَّةً عَلَى مَدَارِ السَّنَةِ.", japanese: "トロヘナは一年中観光体験を提供します。" },
      { speaker: "記事", arabic: "دَمْجُ الطَّبِيعَةِ مَعَ التِّكْنُولُوجِيَا هُوَ جَوْهَرُ الْمَشْرُوعِ.", japanese: "自然と技術の融合がプロジェクトの核心です。" }
    ]
  },

  // --- 52. 文化・祭り (Culture/Festivals) ---
  {
    id: 1060, title: "ジャナドリヤ祭", category: "文化", level: "上級",
    contentVoweled: "مَهْرَجَانُ الْجَنَادِرِيَّةِ هُوَ الْمَهْرَجَانُ الْوَطَنِيُّ لِلتُّرَاثِ وَالثَّقَافَةِ...",
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
      { id: 10605, type: "grammar", text: "「展示する」", options: ["يَعْرِضُ", "يَخْفِي", "يَأْكُلُ", "يَنَامُ"], correctIndex: 0, explanation: "「Ya'riḍu (Display/Show)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "يَبْدَأُ الْمَهْرَجَانُ عَسَبَاقِ الْهَجْنِ السَّنَوِيِّ.", japanese: "祭りは毎年のラクダレースで始まります。" },
      { speaker: "記事", arabic: "الْأُوبِرِيتُ الْغِنَائِيُّ هُوَ حَدَثٌ رَئِيسِيٌّ فِي الِافْتِتَاحِ.", japanese: "歌劇（オペレッタ）は開会式の主要イベントです。" },
      { speaker: "記事", arabic: "تُوجَدُ أَجْنِحَةٌ لِكُلِّ مِنْطَقَةٍ تَعْرِضُ تُرَاثَهَا الْخَاصَّ.", japanese: "各地域には独自の遺産を展示するパビリオンがあります。" },
      { speaker: "記事", arabic: "إِنَّهُ فُرْصَةٌ لِلْأَجْيَالِ الْجَدِيدَةِ لِلتَّعَرُّفِ عَلَى تَارِيخِ أَجْدَادِهِمْ.", japanese: "それは新しい世代が祖先の歴史を知る機会です。" }
    ]
  },

  // --- 53. 文学・詩 (Literature) ---
  {
    id: 1061, title: "イムルウ・アル・カイス（放浪の王）", category: "文学", level: "上級",
    contentVoweled: "امْرُؤُ الْقَيْسِ هُوَ أَشْهَرُ شُعَرَاءِ الْمُعَلَّقَاتِ، وَيُلَقَّبُ بِالْمَلِكِ الضِّلِّيلِ...",
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
      { id: 10615, type: "grammar", text: "「試みる」", options: ["يُحَاوِلُ", "يَنْجَحُ", "يَنَامُ", "يَأْكُلُ"], correctIndex: 0, explanation: "「Yuḥāwilu (Try/Attempt)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "قَالَ: قِفَا نَبْكِ مِنْ ذِكْرَى حَبِيبٍ وَمَنْزِلِ.", japanese: "彼は言いました。「止まれ、愛しい人と家の記憶に（思いを馳せて）泣こう。」" },
      { speaker: "記事", arabic: "وَصَفَ اللَّيْلَ بِأَنَّهُ طَوِيلٌ وَثَقِيلٌ كَالْمَوْجِ.", japanese: "彼は夜を、波のように長く重いと描写しました。" },
      { speaker: "記事", arabic: "شِعْرُهُ مَلِيءٌ بِالصُّوَرِ الْفَنِّيَّةِ الرَّائِعَةِ.", japanese: "彼の詩は素晴らしい芸術的イメージに満ちています。" },
      { speaker: "記事", arabic: "تُوُفِّيَ وَهُوَ عَائِدٌ مِنْ رِحْلَةٍ إِلَى الْقُسْطَنْطِينِيَّةِ.", japanese: "彼はコンスタンティノープルへの旅からの帰途に亡くなりました。" }
    ]
  },

  // --- 54. 経済・建築 (Economy/Architecture) ---
  {
    id: 1062, title: "KAFD（キング・アブドゥッラー金融地区）", category: "経済", level: "上級",
    contentVoweled: "مَرْكَزُ الْمَلِكِ عَبْدِ اللهِ الْمَالِيُّ هُوَ تُحْفَةٌ مِعْمَارِيَّةٌ فِي قَلْبِ الرِّيَاضِ...",
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
      { id: 10625, type: "grammar", text: "「惹きつける」", options: ["يَجْذِبُ", "يَطْرُدُ", "يَكْرَهُ", "يَنَامُ"], correctIndex: 0, explanation: "「Yajdhibu (Attracts)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "يَتَمَيَّزُ الْمَرْكَزُ بِوُجُودِ مَسَارَاتٍ لِلْمُشَاةِ مَكِيَّفَةٍ.", japanese: "センターは空調付きの歩行者用通路があるのが特徴です。" },
      { speaker: "記事", arabic: "يَحْتَوِي عَلَى فَنَادِقَ فَخْمَةٍ وَمَتَاحِفَ.", japanese: "豪華なホテルや博物館が含まれています。" },
      { speaker: "記事", arabic: "تَمَّ تَصْمِيمُ الْمَبَانِي لِتَقْلِيلِ اسْتِهْلَاكِ الطَّاقَةِ.", japanese: "建物はエネルギー消費を減らすように設計されました。" },
      { speaker: "記事", arabic: "إِنَّهُ رَمْزٌ لِلْحَدَاثَةِ وَالْقُوَّةِ الِاقْتِصَادِيَّةِ.", japanese: "それは現代性と経済力の象徴です。" }
    ]
  },

  // --- 55. 科学・歴史 (History/Science) ---
  {
    id: 1063, title: "アストロラーベ（天体観測儀）", category: "歴史", level: "上級",
    contentVoweled: "الْأَسْطُرْلَابُ هُوَ آلَةٌ فَلَكِيَّةٌ قَدِيمَةٌ طَوَّرَهَا الْعُلَمَاءُ الْمُسْلِمُونَ...",
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
      { id: 10635, type: "grammar", text: "「発展させた」", options: ["طَوَّرَ", "هَدَمَ", "نَسِيَ", "أَكَلَ"], correctIndex: 0, explanation: "「Ṭawwara (Developed)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "يَتَكَوَّنُ الْأَسْطُرْلَابُ مِنْ عِدَّةِ أَقْرَاصٍ مَعْدِنِيَّةٍ مُتَدَاخِلَةٍ.", japanese: "アストロラーベは複数の重なり合った金属円盤で構成されています。" },
      { speaker: "記事", arabic: "يُعْتَبَرُ جَدَّ الْحَوَاسِيبِ الْحَدِيثَةِ.", japanese: "現代のコンピュータの祖先と考えられています。" },
      { speaker: "記事", arabic: "كَانَ ضَرُورِيًّا لِتَحْدِيدِ الْقِبْلَةِ (اتِّجَاهِ مَكَّةَ).", japanese: "キブラ（メッカの方向）を特定するために不可欠でした。" },
      { speaker: "記事", arabic: "تَطَوُّرُهُ سَاهَمَ فِي عَصْرِ الِاسْتِكْشَافِ الْعَالَمِيِّ.", japanese: "その発展は大航海時代（探検の時代）に貢献しました。" }
    ]
  },

  // --- 56. 芸術・建築 (Art/Architecture) ---
  {
    id: 1064, title: "マラーヤー・コンサートホール", category: "文化", level: "上級",
    contentVoweled: "مَسْرَحُ مَرَايَا فِي الْعُلَا هُوَ تُحْفَةٌ فَنِّيَّةٌ مُعَاصِرَةٌ...",
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
      { id: 10645, type: "grammar", text: "「入りました（記録などに）」", options: ["دَخَلَ", "خَرَجَ", "نَامَ", "أَكَلَ"], correctIndex: 0, explanation: "「Dakhala (Entered)」です。" }
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
    id: 1065, title: "ビシュト（伝統的なマント）", category: "文化", level: "上級",
    contentVoweled: "الْبِشْتُ هُوَ رِدَاءٌ رَجَالِيٌّ تَقْلِيدِيٌّ يَرْتَدِيهِ الْعَرَبُ فِي الْمُنَاسَبَاتِ الْهَامَّةِ...",
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
      { id: 10655, type: "grammar", text: "「着ます」", options: ["يَرْتَدِي", "يَخْلَعُ", "يَبِيعُ", "يَشْتَرِي"], correctIndex: 0, explanation: "「Yartadī (Wears)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "يَلْبَسُ الْعَرِيسُ الْبِشْتَ فِي لَيْلَةِ زَفَافِهِ.", japanese: "新郎は結婚式の夜にビシュトを着ます。" },
      { speaker: "記事", arabic: "تَطْرِيزُ الْبِشْتِ يَتَطَلَّبُ مَهَارَةً وَدِقَّةً عَالِيَةً.", japanese: "ビシュトの刺繍には高い技術と正確さが求められます。" },
      { speaker: "記事", arabic: "الْبِشْتُ الْأَسْوَدُ وَالْبُنِّيُّ هُمَا الْأَكْثَرُ شُيُوعًا.", japanese: "黒と茶色のビシュトが最も一般的です。" },
      { speaker: "記事", arabic: "إِنَّهُ جُزْءٌ مِنْ الْهُوِيَّةِ الْوَطَنِيَّةِ السُّعُودِيَّةِ.", japanese: "それはサウジの国民的アイデンティティの一部です。" }
    ]
  },

  // --- 58. 歴史・哲学 (Philosophy) ---
  {
    id: 1066, title: "哲学者イブン・ルシュド（アヴェロエス）", category: "歴史", level: "上級",
    contentVoweled: "ابْنُ رُشْدٍ هُوَ فَيْلَسُوفٌ وَطَبِيبٌ وَفَقِيهٌ أَنْدَلُسِيٌّ...",
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
      { id: 10665, type: "grammar", text: "「貢献しました」", options: ["سَاهَمَ", "مَنَعَ", "أَخَذَ", "نَسِيَ"], correctIndex: 0, explanation: "「Sāhama (Contributed)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "كَانَ ابْنُ رُشْدٍ يُؤْمِنُ بِأَهَمِّيَّةِ الْعَقْلِ وَالْبُرْهَانِ.", japanese: "イブン・ルシュドは理性と証明の重要性を信じていました。" },
      { speaker: "記事", arabic: "كِتَابُهُ 'الْكُلِّيَّاتُ فِي الطِّبِّ' مَرْجِعٌ مُهِمٌّ.", japanese: "彼の本『医学大全』は重要な参考文献です。" },
      { speaker: "記事", arabic: "رَدَّ عَلَى الْغَزَالِيِّ فِي كِتَابِ 'تَهَافُتِ التَّهَافُتِ'.", japanese: "彼は『矛盾の矛盾』という本でガザーリーに反論しました。" },
      { speaker: "記事", arabic: "الْحَقِيقَةُ لَا تُضَادُّ الْحَقِيقَةَ.", japanese: "「真理は真理と対立しない」（彼の有名な言葉です）。" }
    ]
  },
  // --- 59. 文化・現代 (Culture/Modern) ---
  {
    id: 1067, title: "キング・アブドゥルアズィーズ世界文化センター (Ithra)", category: "文化", level: "上級",
    contentVoweled: "مَرْكَزُ الْمَلِكِ عَبْدِ الْعَزِيزِ الثَّقَافِيُّ الْعَالَمِيُّ (إِثْرَاء) هُوَ مَعْلَمٌ مِعْمَارِيٌّ مُبْهِرٌ...",
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
      { id: 10675, type: "grammar", text: "「似ている」", options: ["يُشْبِهُ", "يَخْتَلِفُ", "يَنْظُرُ", "يَأْكُلُ"], correctIndex: 0, explanation: "「Yushbihu (Resembles)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "تُغَطِّي الْمَبْنَى أَنَابِيبُ مِنْ الْفُولَاذِ لِعَكْسِ ضَوْءِ الشَّمْسِ.", japanese: "建物は日光を反射するために鋼鉄のパイプで覆われています。" },
      { speaker: "記事", arabic: "تَحْتَوِي الْمَكْتَبَةُ عَلَى مِئَاتِ الْآلَافِ مِنَ الْكُتُبِ.", japanese: "図書館には数十万冊の本があります。" },
      { speaker: "記事", arabic: "يُقَدِّمُ الْمَرْكَزُ بَرَامِجَ تَعْلِيمِيَّةً لِلشَّبَابِ.", japanese: "センターは若者向けに教育プログラムを提供しています。" },
      { speaker: "記事", arabic: "إِنَّهُ جِسْرٌ بَيْنَ الثَّقَافَاتِ.", japanese: "それは文化間の架け橋です。" }
    ]
  },

  // --- 60. 食文化 (Food) ---
  {
    id: 1068, title: "ジャリーシュ（伝統料理）", category: "文化", level: "上級",
    contentVoweled: "الْجَرِيشُ هُوَ سَيِّدُ الْمَائِدَةِ السُّعُودِيَّةِ، خَاصَّةً فِي مِنْطَقَةِ نَجْد...",
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
      { id: 10685, type: "grammar", text: "「〜とみなされる（受動態）」", options: ["يُعْتَبَرُ", "يَعْرِفُ", "يَظُنُّ", "يَأْكُلُ"], correctIndex: 0, explanation: "「Yu'tabaru (Is considered)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "يَحْتَاجُ الْجَرِيشُ إِلَى وَقْتٍ طَوِيلٍ وَتَحْرِيكٍ مُسْتَمِرٍّ.", japanese: "ジャリーシュは長い時間と絶え間ない攪拌（かき混ぜ）を必要とします。" },
      { speaker: "記事", arabic: "كَانَتِ النِّسَاءُ يَطْحَنَّ الْقَمْحَ يَدَوِيًّا بِالرَّحَى.", japanese: "女性たちはかつて石臼で小麦を手で挽いていました。" },
      { speaker: "記事", arabic: "يُعْتَبَرُ طَبَقًا صِحِّيًّا وَمُغَذِّيًا.", japanese: "健康的で栄養価の高い料理と考えられています。" },
      { speaker: "記事", arabic: "تَمَّ اعْتِمَادُهُ كَطَبَقٍ وَطَنِيٍّ لِلسُّعُودِيَّةِ.", japanese: "それはサウジアラビアの国民食として認定されました。" }
    ]
  },

  // --- 61. 自然・農業 (Agriculture) ---
  {
    id: 1069, title: "ターイフのバラ祭り", category: "文化", level: "上級",
    contentVoweled: "تُعْرَفُ مَدِينَةُ الطَّائِفِ بِاسْمِ 'مَدِينَةِ الْوُرُودِ'...",
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
      { id: 10695, type: "grammar", text: "「抽出する」", options: ["اسْتِخْرَاج", "رَمْي", "بَيْع", "شِرَاء"], correctIndex: 0, explanation: "「Istikhrāj (Extraction)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "تَتِمُّ عَمَلِيَّةُ الْقَطْفِ فِي الصَّبَاحِ الْبَاكِرِ قَبْلَ طُلُوعِ الشَّمْسِ.", japanese: "摘み取り作業は日の出前の早朝に行われます。" },
      { speaker: "記事", arabic: "يَحْتَاجُ إِنْتَاجُ تَوَلَّةٍ وَاحِدَةٍ إِلَى آلَافِ الْوَرْدَاتِ.", japanese: "1ト－ラ（小瓶）の生産には数千のバラが必要です。" },
      { speaker: "記事", arabic: "مَاءُ الْوَرْدِ يُضَافُ إِلَى الشَّايِ وَالْحَلَوِيَّاتِ.", japanese: "バラ水はお茶やお菓子に加えられます。" },
      { speaker: "記事", arabic: "الْمَهْرَجَانُ يَدْعَمُ السِّيَاحَةَ الزِّرَاعِيَّةَ.", japanese: "フェスティバルは農業観光（アグリツーリズム）を支援します。" }
    ]
  },

  // --- 62. 歴史・科学 (Science History) ---
  {
    id: 1070, title: "化学の父 ジャービル・ブン・ハイヤーン", category: "歴史", level: "上級",
    contentVoweled: "يُعْتَبَرُ جَابِرُ بْنُ حَيَّانَ الْمُؤَسِّسَ الْحَقِيقِيَّ لِعِلْمِ الْكِيمْيَاءِ...",
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
      { id: 10705, type: "grammar", text: "「変えました/転換しました」", options: ["حَوَّلَ", "بَقِيَ", "ذَهَبَ", "نَامَ"], correctIndex: 0, explanation: "「Ḥawwala (Transformed/Converted)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "لُقِّبَ جَابِرٌ بِـ 'أَبُو الْكِيمْيَاءِ'.", japanese: "ジャービルは「化学の父」と呼ばれました。" },
      { speaker: "記事", arabic: "ادْخَلَ الْمِيزَانَ فِي التَّجَارِبِ لِضَمَانِ الدِّقَّةِ.", japanese: "彼は正確さを保証するために実験に天秤を導入しました。" },
      { speaker: "記事", arabic: "صَنَعَ وَرَقًا غَيْرَ قَابِلٍ لِلِاحْتِرَاقِ.", japanese: "彼は燃えない紙を作りました。" },
      { speaker: "記事", arabic: "كَلِمَةُ 'الكالي' (الْقَلَوِي) فِي اللُّغَاتِ الْأُورُوبِيَّةِ أَصْلُهَا عَرَبِيٌّ.", japanese: "ヨーロッパ言語の「Alkali（アルカリ）」はアラビア語起源です。" }
    ]
  },

  // --- 63. 社会・インフラ (Infrastructure) ---
  {
    id: 1071, title: "ハラマイン高速鉄道", category: "社会", level: "上級",
    contentVoweled: "قِطَارُ الْحَرَمَيْنِ السَّرِيعُ هُوَ مَشْرُوعٌ عِمْلَاقٌ يَرْبِطُ بَيْنَ مَكَّةَ وَالْمَدِينَةِ...",
    contentPlain: "قطار الحرمين السريع هو مشروع عملاق يربط بين مكة المكرمة والمدينة المنورة مرورا بجدة ومدينة الملك عبد الله الاقتصادية. يعد هذا القطار الكهربائي من أسرع القطارات في الشرق الأوسط، حيث تصل سرعته إلى 300 كم/ساعة. يهدف المشروع إلى تيسير تنقل الحجاج والمعتمرين وتقليص زمن الرحلة بشكل كبير، مما يخدم ملايين الزوار سنويا.",
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
      { id: 10715, type: "grammar", text: "「奉仕する/役立つ」", options: ["يَخْدِمُ", "يَضُرُّ", "يَأْكُلُ", "يَنْسَى"], correctIndex: 0, explanation: "「Yakhdimu (Serve)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "يَقْطَعُ الْقِطَارُ الْمَسَافَةَ فِي أَقَلَّ مِنْ سَاعَتَيْنِ وَنِصْفٍ.", japanese: "列車はその距離を2時間半未満で走破します。" },
      { speaker: "記事", arabic: "الْمَحَطَّاتُ مُصَمَّمَةٌ بِطِرَازٍ إِسْلَامِيٍّ حَدِيثٍ.", japanese: "駅は現代的なイスラム様式で設計されています。" },
      { speaker: "記事", arabic: "يُعَدُّ مِنَ الْمَشَارِيعِ الصَّدِيقَةِ لِلْبِيئَةِ لِأَنَّهُ كَهْرُبَائِيٌّ.", japanese: "電気式であるため、環境に優しいプロジェクトの一つです。" },
      { speaker: "記事", arabic: "يُقَدِّمُ خِدْمَاتٍ مُتَمَيِّزَةً لِرَاحَةِ الْمُسَافِرِينَ.", japanese: "旅行者の快適さのために優れたサービスを提供します。" }
    ]
  },

  // --- 64. 歴史・文化 (History/Culture) ---
  {
    id: 1072, title: "ムラッバ宮殿", category: "歴史", level: "上級",
    contentVoweled: "قَصْرُ الْمُرَبَّعِ هُوَ مَقَرُّ إِقَامَةِ الْمَلِكِ عَبْدِ الْعَزِيزِ وَمَرْكَزُ حُكْمِهِ سَابِقًا...",
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
      { id: 10725, type: "grammar", text: "「目撃した/経験した」", options: ["شَهِدَ", "رَأَى", "نَظَرَ", "نَسِيَ"], correctIndex: 0, explanation: "「Shahida (Witnessed)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "سُمِّيَ بِالْمُرَبَّعِ نِسْبَةً إِلَى شَكْلِهِ الْمُرَبَّعِ.", japanese: "正方形の形（または広場の名前）にちなんでムラッバと名付けられました。" },
      { speaker: "記事", arabic: "كَانَ الْمَلِكُ يُدِيرُ شُؤُونَ الدَّوْلَةِ مِنْ هَذَا الْقَصْرِ.", japanese: "王はこの宮殿から国務を運営していました。" },
      { speaker: "記事", arabic: "التَّصْمِيمُ يُسَاعِدُ عَلَى تَلْطِيفِ الْجَوِّ فِي الصَّيْفِ.", japanese: "その設計は夏の空気を和らげる（涼しくする）のに役立ちます。" },
      { speaker: "記事", arabic: "إِنَّهُ شَاهِدٌ عَلَى مَرْحَلَةِ تَأْسِيسِ الْمَمْلَكَةِ.", japanese: "それは王国設立段階の証人です。" }
    ]
  },

  // --- 65. 自然・動物 (Nature/Animals) ---
  {
    id: 1073, title: "アラビアオオカミ", category: "自然", level: "上級",
    contentVoweled: "الذِّئْبُ الْعَرَبِيُّ هُوَ سُلَالَةٌ صَغِيرَةُ الْحَجْمِ مِنَ الذِّئَابِ الرَّمَادِيَّةِ...",
    contentPlain: "الذئب العربي هو سلالة صغيرة الحجم من الذئاب الرمادية، تكيفت للعيش في بيئة الصحراء القاسية. يتميز بأذنين كبيرتين لتبديد الحرارة وفروا خفيف في الصيف. يعيش في مجموعات صغيرة أو منفردا، ويتغذى على القوارض والأرانب والمواشي أحيانا. رغم أنه كان يعتبر عدوا للبدو، إلا أنه يلعب دورا مهما في التوازن البيئي، وهو الآن محمي في بعض المناطق.",
    vocabList: [
      { word: "ذِئْب", meaning: "オオカミ" },
      { word: "رَمَادِيّ", meaning: "灰色の" },
      { word: "تَوَازُن", meaning: "バランス/均衡" },
      { word: "عَدُوّ", meaning: "敵" }
    ],
    questions: [
      { id: 10731, type: "reading", text: "アラビアオオカミの特徴は？", options: ["巨大", "小型で砂漠に適応している", "黒い", "水に住む"], correctIndex: 1, explanation: "「سلالة صغيرة الحجم... تكيفت للعيش في... الصحراء」です。" },
      { id: 10732, type: "reading", text: "大きな耳の役割は？", options: ["よく聞くためだけ", "熱を逃がすため", "飛ぶため", "飾り"], correctIndex: 1, explanation: "「لتبديد الحرارة (熱を散らすため)」です。" },
      { id: 10733, type: "reading", text: "生態系での役割は？", options: ["不要", "重要（バランスを保つ）", "害しかない", "家畜を守る"], correctIndex: 1, explanation: "「يلعب دورا مهما في التوازن البيئي」です。" },
      { id: 10734, type: "vocabulary", text: "「مَاشِيَة」の意味は？", options: ["車", "家畜（家畜の群れ）", "人", "植物"], correctIndex: 1, explanation: "Livestock/Cattle（家畜）です。" },
      { id: 10735, type: "grammar", text: "「適応した」", options: ["تَكَيَّفَ", "مَاتَ", "رَكَضَ", "نَامَ"], correctIndex: 0, explanation: "「Takayyafa (Adapted)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "لَا يَعْوِي الذِّئْبُ الْعَرَبِيُّ كَثِيرًا مِثْلَ بَاقِي الذِّئَابِ.", japanese: "アラビアオオカミは他のオオカミほど頻繁には遠吠えしません。" },
      { speaker: "記事", arabic: "عَيْنَاهُ صَفْرَاوَانِ وَتَلْمَعَانِ فِي الظَّلَامِ.", japanese: "その目は黄色く、暗闇で光ります。" },
      { speaker: "記事", arabic: "يُوَاجِهُ خَطَرَ الصَّيْدِ الْجَائِرِ.", japanese: "それは密猟の危険に直面しています。" },
      { speaker: "記事", arabic: "يُوجَدُ فِي الْمَنَاطِقِ الْجَبَلِيَّةِ وَالصَّحْرَاوِيَّةِ.", japanese: "山岳地帯や砂漠地帯に存在します。" }
    ]
  },

  // --- 66. 文化・文学 (Literature) ---
  {
    id: 1074, title: "女性詩人アル・ハンサー", category: "文学", level: "上級",
    contentVoweled: "الْخَنْسَاءُ هِيَ أَشْهَرُ شَوَاعِرِ الْعَرَبِ، وَعَاشَتْ فِي عَصْرَيِ الْجَاهِلِيَّةِ وَالْإِسْلَامِ...",
    contentPlain: "الخنساء هي أشهر شواعر العرب، وعاشت في عصري الجاهلية والإسلام (مخضرمة). اشتهرت بقصائد الرثاء الحزينة التي كتبتها تبكي فيها أخويها 'صخر' و'معاوية' اللذين قتلا في المعارك. يتميز شعرها بالعاطفة الصادقة واللغة القوية، وقد أبكت النابغة الذبياني بقصائدها. بعد إسلامها، استشهد أبناؤها الأربعة في معركة القادسية، فصبرت واحتسبت.",
    vocabList: [
      { word: "رِثَاء", meaning: "哀悼/挽歌" },
      { word: "حَزِين", meaning: "悲しい" },
      { word: "عَاطِفَة", meaning: "感情" },
      { word: "اسْتَشْهَدَ", meaning: "殉教した" }
    ],
    questions: [
      { id: 10741, type: "reading", text: "アル・ハンサーは何で有名ですか？", options: ["料理", "最も有名な女性詩人", "女王", "医者"], correctIndex: 1, explanation: "「أشهر شواعر العرب」です。" },
      { id: 10742, type: "reading", text: "彼女の詩の主なテーマは？", options: ["愛", "リサー（死者を悼む詩/挽歌）", "政治", "自然"], correctIndex: 1, explanation: "「قصائد الرثاء الحزينة」です。" },
      { id: 10743, type: "reading", text: "彼女は誰のために泣きましたか？", options: ["夫", "二人の兄弟（サフルとムアーウィヤ）", "子供だけ", "自分"], correctIndex: 1, explanation: "「تبكي فيها أخويها صخر ومعاوية」です。" },
      { id: 10744, type: "vocabulary", text: "「مُخَضْرَم」の意味は？", options: ["若い", "二つの時代を生きた人", "戦士", "農民"], correctIndex: 1, explanation: "Veteran/Lived in two eras（ジャーヒリーヤとイスラムの両方を生きた人）です。" },
      { id: 10745, type: "grammar", text: "「殺された（受動態）」", options: ["قُتِلَ", "قَتَلَ", "مَاتَ", "عَاشَ"], correctIndex: 0, explanation: "「Qutila」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "قَالَتْ: وَإِنَّ صَخْرًا لَتَأْتَمُّ الْهُدَاةُ بِهِ كَأَنَّهُ عَلَمٌ فِي رَأْسِهِ نَارُ.", japanese: "彼女は言いました。「サフルは導き手が従う存在、まるで頂に火を灯した山のようだ。」" },
      { speaker: "記事", arabic: "شِعْرُهَا يُدَرَّسُ كَنَمُوذَجٍ لِلْبَلَاغَةِ.", japanese: "彼女の詩は雄弁さのモデルとして教えられています。" },
      { speaker: "記事", arabic: "كَانَتْ قَوِيَّةَ الشَّخْصِيَّةِ وَحَكِيمَةً.", japanese: "彼女は強い性格と知恵を持っていました。" },
      { speaker: "記事", arabic: "تُعْتَبَرُ رَمْزًا لِلْوَفَاءِ وَالصَّبْرِ.", japanese: "彼女は誠実さと忍耐の象徴とみなされています。" }
    ]
  },

  // --- 67. 社会・スポーツ (Sports) ---
  {
    id: 1075, title: "ディルイーヤ E-Prix (Formula E)", category: "社会", level: "上級",
    contentVoweled: "سِبَاقُ الْفُورْمُولَا إِي فِي الدِّرْعِيَّةِ هُوَ حَدَثٌ رِيَاضِيٌّ عَالَمِيٌّ...",
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
      { id: 10755, type: "grammar", text: "「伴う/付随する」", options: ["يُصَاحِبُ", "يَتْرُكُ", "يَأْتِي", "يَذْهَبُ"], correctIndex: 0, explanation: "「Yuṣāḥibu (Accompanies)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "يَهْدِفُ السِّبَاقُ لِلتَّرْوِيجِ لِلطَّاقَةِ النَّظِيفَةِ.", japanese: "レースはクリーンエネルギーの促進を目指しています。" },
      { speaker: "記事", arabic: "الْمَسَارُ يَمُرُّ بِجَانِبِ الْأَسْوَارِ الطِّينِيَّةِ الْقَدِيمَةِ.", japanese: "コースは古い泥壁のそばを通ります。" },
      { speaker: "記事", arabic: "يُعَدُّ هَذَا الْحَدَثُ بِدَايَةَ مَوْسِمِ الرِّيَاضَةِ.", japanese: "このイベントはスポーツシーズンの始まりとみなされます。" },
      { speaker: "記事", arabic: "السُّعُودِيَّةُ أَصْبَحَتْ وِجْهَةً لِرِيَاضَةِ الْمُحَرِّكَاتِ.", japanese: "サウジアラビアはモータースポーツの目的地となりました。" }
    ]
  },

  // --- 68. 自然・気象 (Nature/Weather) ---
  {
    id: 1076, title: "タブークの雪", category: "自然", level: "上級",
    contentVoweled: "عِنْدَمَا نُفَكِّرُ فِي السُّعُودِيَّةِ، نَتَخَيَّلُ الصَّحْرَاءَ الْحَارَّةَ، وَلَكِنْ...",
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
      { id: 10765, type: "grammar", text: "「想像します」", options: ["نَتَخَيَّلُ", "نَعْرِفُ", "نَرَى", "نَسْمَعُ"], correctIndex: 0, explanation: "「Natakhayyalu (Imagine)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "تَنْخَفِضُ دَرَجَةُ الْحَرَارَةِ إِلَى مَا دُونَ الصِّفْرِ.", japanese: "気温は氷点下に下がります。" },
      { speaker: "記事", arabic: "يَصْنَعُ النَّاسُ رَجُلَ الثَّلْجِ وَيَلْعَبُونَ.", japanese: "人々は雪だるまを作って遊びます。" },
      { speaker: "記事", arabic: "الْجِمَالُ (الْإِبِلُ) تَسِيرُ فَوْقَ الثُّلُوجِ فِي مَنْظَرٍ غَرِيبٍ.", japanese: "ラクダが雪の上を歩く奇妙な光景です。" },
      { speaker: "記事", arabic: "تَبُوكُ هِيَ بَوَّابَةُ الشَّمَالِ ذَاتُ الطَّبِيعَةِ الْمُتَنَوِّعَةِ.", japanese: "タブークは多様な自然を持つ北の玄関口です。" }
    ]
  },

  // --- 69. 経済・エネルギー (Economy) ---
  {
    id: 1077, title: "タップライン（TAPLINE）", category: "歴史", level: "上級",
    contentVoweled: "خَطُّ الْأَنَابِيبِ عَبْرَ الْبِلَادِ الْعَرَبِيَّةِ (التَّابْلَايْن) كَانَ شِرْيَانَ النِّفْطِ...",
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
      { id: 10775, type: "grammar", text: "「接続しました」", options: ["رَبَطَ", "قَطَعَ", "أَكَلَ", "فَتَحَ"], correctIndex: 0, explanation: "「Rabaṭa (Connected)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "اخْتَصَرَ الْخَطُّ مَسَافَةَ نَقْلِ النِّفْتِ إِلَى أُورُوبَّا.", japanese: "そのラインはヨーロッパへの石油輸送距離を短縮しました。" },
      { speaker: "記事", arabic: "عَمِلَ فِيهِ آلَافُ الْمُوَظَّفِينَ السُّعُودِيِّينَ.", japanese: "何千人ものサウジ人従業員がそこで働きました。" },
      { speaker: "記事", arabic: "تَمَّ تَسْجِيلُهُ كَأَوَّلِ مَوْقِعِ تُرَاثٍ صِنَاعِيٍّ فِي الْمَمْلَكَةِ.", japanese: "それは王国初の産業遺産サイトとして登録されました。" },
      { speaker: "記事", arabic: "إِنَّهُ ذِكْرَى لِعَصْرِ الطَّفْرَةِ الِاقْتِصَادِيَّةِ.", japanese: "それは経済ブーム時代の記憶です。" }
    ]
  },

  // --- 70. 伝統・社会 (Tradition) ---
  {
    id: 1078, title: "フラワーメン（リジャール・アルマア）", category: "文化", level: "上級",
    contentVoweled: "رِجَالُ الطِّيبِ، أَوْ رِجَالُ الزُّهُورِ، هُمْ سُكَّانُ جِبَالِ عَسِيرَ...",
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
      { id: 10785, type: "grammar", text: "「飾る」", options: ["تَزْيِين", "تَخْرِيب", "بِنَاء", "أَكْل"], correctIndex: 0, explanation: "「Tazyīn (Decorating)」です。" }
    ],
    sentences: [
      { speaker: "記事", arabic: "يُسَمَّى الطَّوْقُ بِـ 'الْعِصَابَةِ' أَوْ 'الْخَطُورِ'.", japanese: "その冠は「イサーバ」や「ハトール」と呼ばれます。" },
      { speaker: "記事", arabic: "يَخْتَارُونَ الرَّيْحَانَ وَالْبَعَيْثَرَانَ لِرَائِحَتِهِمَا الْقَوِيَّةِ.", japanese: "彼らは強い香りのためにバジルやヨモギを選びます。" },
      { speaker: "記事", arabic: "هَذَا الْمَنْظَرُ يَجْذِبُ الْمُصَوِّرِينَ الْعَالَمِيِّينَ.", japanese: "この光景は世界の写真家を惹きつけます。" },
      { speaker: "記事", arabic: "إِنَّهُمْ يُحَافِظُونَ عَلَى جَمَالِ التُّرَاثِ الْجَبَلِيِّ.", japanese: "彼らは山の遺産の美しさを守っています。" }
    ]
  },

  // --- 71. 健康・文化 (Health) ---
   {
        id: 1079, title: "ラクダミルクの効能", category: "健康", level: "上級",
        contentVoweled: "حَلِيبُ الْإِبِلِ كَانَ الْغِذَاءَ الرَّئِيسِيَّ لِلْبَدْوِ لِقُرُونٍ...",
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
          { id: 10795, type: "grammar", text: "「証明しました」", options: ["أَثْبَتَتْ", "نَفَتْ", "نَسِيَتْ", "أَكَلَتْ"], correctIndex: 0, explanation: "「Athbatat (Proved)」です。" }
        ],
        sentences: [
          { speaker: "記事", arabic: "يُطْلَقُ عَلَى حَلِيبِ الْإِبِلِ لَقَبُ 'صَيْدَلِيَّةِ الصَّحْرَاءِ'.", japanese: "ラクダミルクは「砂漠の薬局」というニックネームで呼ばれます。" },
          { speaker: "記事", arabic: "لَا يُسَبِّبُ حَسَاسِيَّةً مِثْلَ حَلِيبِ الْأَبْقَارِ.", japanese: "牛乳のようなアレルギーを引き起こしません。" },
          { speaker: "記事", arabic: "طَعْمُهُ يَمِيلُ إِلَى الْمُلُوحَةِ قَلِيلًا.", japanese: "味は少し塩気があります。" },
          { speaker: "記事", arabic: "أَصْبَحَ مُنْتَجًا فَاخِرًا فِي الْأَسْوَاقِ الْعَالَمِيَّةِ.", japanese: "それは世界市場で高級品となりました。" }
        ]
      },
    
      // --- 72. 経済・未来 (Economy/Future) ---
      {
        id: 1080, title: "鉱業の未来", category: "経済", level: "上級",
        contentVoweled: "تَمْتَلِكُ السُّعُودِيَّةُ ثَرَوَاتٍ مَعْدِنِيَّةً غَيْرَ مُسْتَغَلَّةٍ...",
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
          { id: 10805, type: "grammar", text: "「サポートする/支援する」", options: ["يَدْعَمُ", "يَمْنَعُ", "يَكْسِرُ", "يَنْسَى"], correctIndex: 0, explanation: "「Yad'amu (Supports)」です。" }
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
        contentPlain: "أعلنت وزارة الداخلية السعودية...",
        contentVoweled: "أَعْلَنَتْ وِزَارَةُ الدَّاخِلِيَّةِ...",
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
            arabic: "وَقَالَتْ وِزَارَةُ الدَّاخِلِيَّةِ السُّعُودِيَّةُ فِي بَيَانِهَا: \"أَقْدَمَ (عَبْدُ الْعَزِيزِ بْنُ نَجْرِ بْنِ زَايِدٍ الْغَبِيوِيُّ الْعُتَيْبِيُّ)، سُعُودِيُّ الْجِنْسِيَّةِ، عَلَى قَتْلِ (فَالِحِ بْنِ مُحْسِنِ بْنِ ثَوَابٍ الْغَبِيوِيِّ الْعُتَيْبِيِّ)، سُعُودِيِّ الْجِنْسِيَّةِ.\"",
            japanese: "内務省は声明で次のように述べた。「サウジアラビア国籍のアブドゥルアズィーズ・ビン・ナジャル・ビン・ザーイド・アル・ガビーウィ・アル・オタイビは、同じくサウジアラビア国籍のファーリフ・ビン・ムフシン・ビン・サワーブ・アル・ガビーウィ・アル・オタイビを殺害した。」",
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
          // --- 読解問題 ---
          {
            id: 10811, // ✅ IDを追加しました
            text: "このニュースで発表された刑罰の種類は何ですか？",
            options: ["السِّجْن (拘禁刑)", "الْقِصَاص (報復刑)", "الْغَرَامَة (罰金刑)", "التَّرْحِيل (国外追放)"],
            correctIndex: 1,
            explanation: "本文に「تَنْفِيذَ حُكْمِ الْقَتْلِ قِصَاصًا（キサースとしての死刑執行）」と明記されています。",
            type: "reading"
          },
          {
            id: 10812, // ✅ IDを追加しました
            text: "この事件が起きた地域はどこですか？",
            options: ["الرِّيَاض (リヤド)", "مَكَّة (マッカ)", "الْقَصِيم (カズィーム)", "الشَّرْقِيَّة (東部州)"],
            correctIndex: 2,
            explanation: "本文に「فِي مِنْطَقَةِ الْقَصِيمِ（カズィーム地方において）」とあります。",
            type: "reading"
          },
          {
            id: 10813, // ✅ IDを追加しました
            text: "殺害の手段として言及されているのは何ですか？",
            options: ["السُّمّ (毒殺)", "الطَّعْن (刺殺)", "إِطْلَاقُ النَّارِ (発砲)", "حَادِثُ مُرُورٍ (交通事故)"],
            correctIndex: 2,
            explanation: "「بِإِطْلَاقِ النَّارِ عَلَيْهِ（彼に対する発砲によって）」と述べられています。",
            type: "reading"
          },
          // --- 文法（イアラーブ）問題 ---
          {
            id: 10814, // ✅ IDを追加しました
            text: "【文法】下線部の単語「وِزَارَةُ」の役割として正しいものは？\n（文脈：أَعْلَنَتْ وِزَارَةُ الدَّاخِلِيَّةِ...）",
            options: [
              "فَاعِل (主語：Fa'il)",
              "مَفْعُول بِهِ (目的語：Maf'ul Bihi)",
              "مُبْتَدَأ (主辞：Mubtada)",
              "مُضَاف إِلَيْهِ (属格：Mudaaf Ilayhi)"
            ],
            correctIndex: 0,
            explanation: "動詞「أَعْلَنَتْ（発表した）」の動作主であるため、「主語（ファーイル）」となり、主格（ダンマ）を取ります。",
            type: "grammar"
          },
          {
            id: 10815, // ✅ IDを追加しました
            text: "【文法】下線部の単語「تَنْفِيذَ」の役割として正しいものは？\n（文脈：أَعْلَنَتْ... تَنْفِيذَ حُكْمِ الْقَتْلِ）",
            options: [
              "فَاعِل (主語：Fa'il)",
              "مَفْعُول بِهِ (目的語：Maf'ul Bihi)",
              "صِفَة (形容詞：Sifa)",
              "حَال (状況格：Hal)"
            ],
            correctIndex: 1,
            explanation: "「～の執行を（発表した）」という意味で、動詞の対象となっているため「目的語（マフウール・ビヒ）」となり、対格（ファトハ）を取ります。",
            type: "grammar"
          },
          {
            id: 10816, // ✅ IDを追加しました
            text: "【文法】下線部の単語「إِدَانَتِهِ」の役割として正しいものは？\n（文脈：... بَعْدَ ثُبُوتِ إِدَانَتِهِ ...）",
            options: [
              "فَاعِل (主語：Fa'il)",
              "مَفْعُول بِهِ (目的語：Maf'ul Bihi)",
              "مُضَاف إِلَيْهِ (属格/所有格：Mudaaf Ilayhi)",
              "خَبَر (述辞：Khabar)"
            ],
            correctIndex: 2,
            explanation: "前の単語「ثُبُوت (確定)」がイダーファ（所有構文）の第一要素であり、「有罪の確定」という関係を作るため、第二要素のこの単語は「属格（ムダーフ・イライヒ）」になります。",
            type: "grammar"
          },
          {
            id: 10817, // ✅ IDを追加しました
            text: "【文法】下線部の単語「سُعُودِيٍّ」の役割として正しいものは？\n（文脈：... بِقَتْلِ مُوَاطِنٍ سُعُودِيٍّ ...）",
            options: [
              "صِفَة (形容詞：Sifa)",
              "مُضَاف إِلَيْهِ (属格：Mudaaf Ilayhi)",
              "فَاعِل (主語：Fa'il)",
              "مَفْعُول بِهِ (目的語：Maf'ul Bihi)"
            ],
            correctIndex: 0,
            explanation: "直前の名詞「مُوَاطِنٍ（市民/国民）」を修飾しており、性・数・格（属格で一致）が一致しているため、「形容詞（スィファ）」です。",
            type: "grammar"
          }
        ]
      },
    ];