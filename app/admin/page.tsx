"use client";
import React, { useState } from "react";
// ↓ パスが違う場合は修正してください (../../lib/supabaseClient など)
import { supabase } from "../lib/supabaseClient";

export default function AdminPage() {
  const [loading, setLoading] = useState(false);
  
  // 基本情報
  const [title, setTitle] = useState("");
  const [level, setLevel] = useState("初級");
  const [category, setCategory] = useState("");
  const [contentPlain, setContentPlain] = useState("");
  const [contentVoweled, setContentVoweled] = useState("");

  // 追加データ（リスト）
  const [sentences, setSentences] = useState<{arabic:string, japanese:string, speaker:string}[]>([]);
  const [vocabList, setVocabList] = useState<{word:string, meaning:string}[]>([]);
  const [quizList, setQuizList] = useState<{question:string, options:string[], correct:number, explanation:string}[]>([]);

  // --- ヘルパー関数 ---
  const addSentence = () => setSentences([...sentences, { arabic: "", japanese: "", speaker: "Narrator" }]);
  const updateSentence = (index: number, field: string, value: string) => {
    const newSentences: any = [...sentences];
    newSentences[index][field] = value;
    setSentences(newSentences);
  };

  const addVocab = () => setVocabList([...vocabList, { word: "", meaning: "" }]);
  const updateVocab = (index: number, field: string, value: string) => {
    const newVocab: any = [...vocabList];
    newVocab[index][field] = value;
    setVocabList(newVocab);
  };

  const addQuiz = () => setQuizList([...quizList, { question: "", options: ["", "", "", ""], correct: 0, explanation: "" }]);
  const updateQuiz = (index: number, field: string, value: any) => {
    const newQuiz: any = [...quizList];
    newQuiz[index][field] = value;
    setQuizList(newQuiz);
  };
  const updateQuizOption = (qIndex: number, oIndex: number, value: string) => {
    const newQuiz = [...quizList];
    newQuiz[qIndex].options[oIndex] = value;
    setQuizList(newQuiz);
  };

  // --- 保存処理 ---
  const handleCreateArticle = async () => {
    if (!title || !category) return alert("タイトルとカテゴリーは必須です");
    setLoading(true);

    try {
      // 1. 親記事を保存
      const { data: articleData, error: articleError } = await supabase
        .from("articles")
        .insert([{ title, level, category, content_plain: contentPlain, content_voweled: contentVoweled }])
        .select()
        .single();

      if (articleError) throw articleError;
      const articleId = articleData.id;

      // 2. センテンス保存
      if (sentences.length > 0) {
        const sentencesToInsert = sentences.map((s, i) => ({
          article_id: articleId,
          arabic: s.arabic,
          japanese: s.japanese,
          speaker: s.speaker,
          order_index: i
        }));
        await supabase.from("article_sentences").insert(sentencesToInsert);
      }

      // 3. 単語保存
      if (vocabList.length > 0) {
        const vocabToInsert = vocabList.map(v => ({
          article_id: articleId,
          word: v.word,
          meaning: v.meaning
        }));
        await supabase.from("article_vocab").insert(vocabToInsert);
      }

      // 4. クイズ保存
      if (quizList.length > 0) {
        const quizToInsert = quizList.map(q => ({
          article_id: articleId,
          type: "reading", // とりあえず読解問題として保存
          text: q.question,
          options: q.options,
          correct_index: q.correct,
          explanation: q.explanation
        }));
        await supabase.from("article_questions").insert(quizToInsert);
      }

      alert(`記事「${title}」と関連データを全て保存しました！`);
      
      // フォームをリセット
      setTitle(""); setCategory(""); setContentPlain(""); setContentVoweled("");
      setSentences([]); setVocabList([]); setQuizList([]);

    } catch (e: any) {
      console.error(e);
      alert("エラー: " + e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans pb-32">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-8 text-emerald-900 border-b pb-4">🛠️ コンテンツ管理システム (CMS)</h1>
        
        <div className="space-y-6">
          {/* 基本情報 */}
          <section className="space-y-4">
            <h2 className="font-bold text-gray-700 bg-gray-100 p-2 rounded">1. 基本情報</h2>
            <div>
              <label className="block text-sm font-bold mb-1">タイトル</label>
              <input className="w-full p-2 border rounded" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="例: 週末の予定" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-1">レベル</label>
                <select className="w-full p-2 border rounded" value={level} onChange={(e) => setLevel(e.target.value)}>
                  <option value="初級">初級</option>
                  <option value="会話">会話</option>
                  <option value="中級">中級</option>
                  <option value="上級">上級</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">カテゴリー</label>
                <input className="w-full p-2 border rounded" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="例: 日常" />
              </div>
            </div>
            {level !== "会話" && (
              <>
                <div>
                  <label className="block text-sm font-bold mb-1">本文 (母音なし / Plain)</label>
                  <textarea className="w-full p-2 border rounded h-24 font-arabic" value={contentPlain} onChange={(e) => setContentPlain(e.target.value)} dir="rtl" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">本文 (母音あり / Voweled)</label>
                  <textarea className="w-full p-2 border rounded h-24 font-arabic" value={contentVoweled} onChange={(e) => setContentVoweled(e.target.value)} dir="rtl" />
                </div>
              </>
            )}
          </section>

          {/* 会話・センテンス */}
          <section className="space-y-4">
            <div className="flex justify-between items-center bg-blue-50 p-2 rounded">
               <h2 className="font-bold text-blue-900">2. 文・会話データ ({sentences.length})</h2>
               <button onClick={addSentence} className="text-xs bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">＋ 行を追加</button>
            </div>
            {sentences.map((s, i) => (
              <div key={i} className="p-4 border rounded bg-gray-50 flex gap-2 items-start">
                 <div className="w-10 pt-2 text-center font-bold text-gray-400">{i+1}</div>
                 <div className="flex-1 space-y-2">
                    <input className="w-full p-2 border rounded font-arabic" placeholder="アラビア語" dir="rtl" value={s.arabic} onChange={(e) => updateSentence(i, 'arabic', e.target.value)} />
                    <div className="flex gap-2">
                       <input className="w-1/3 p-2 border rounded text-xs" placeholder="話者 (例: Aさん)" value={s.speaker} onChange={(e) => updateSentence(i, 'speaker', e.target.value)} />
                       <input className="w-2/3 p-2 border rounded text-sm" placeholder="日本語訳" value={s.japanese} onChange={(e) => updateSentence(i, 'japanese', e.target.value)} />
                    </div>
                 </div>
                 <button onClick={() => {const n=[...sentences]; n.splice(i,1); setSentences(n);}} className="text-red-400 hover:text-red-600">×</button>
              </div>
            ))}
          </section>

          {/* 単語リスト */}
          <section className="space-y-4">
            <div className="flex justify-between items-center bg-amber-50 p-2 rounded">
               <h2 className="font-bold text-amber-900">3. 重要単語 ({vocabList.length})</h2>
               <button onClick={addVocab} className="text-xs bg-amber-500 text-white px-3 py-1 rounded hover:bg-amber-600">＋ 単語を追加</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {vocabList.map((v, i) => (
                <div key={i} className="p-2 border rounded bg-white flex gap-2 items-center">
                   <input className="w-1/2 p-1 border rounded font-arabic" placeholder="単語" dir="rtl" value={v.word} onChange={(e) => updateVocab(i, 'word', e.target.value)} />
                   <input className="w-1/2 p-1 border rounded text-sm" placeholder="意味" value={v.meaning} onChange={(e) => updateVocab(i, 'meaning', e.target.value)} />
                   <button onClick={() => {const n=[...vocabList]; n.splice(i,1); setVocabList(n);}} className="text-red-300 hover:text-red-500">×</button>
                </div>
              ))}
            </div>
          </section>

          {/* クイズ */}
          <section className="space-y-4">
            <div className="flex justify-between items-center bg-purple-50 p-2 rounded">
               <h2 className="font-bold text-purple-900">4. クイズ ({quizList.length})</h2>
               <button onClick={addQuiz} className="text-xs bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700">＋ クイズを追加</button>
            </div>
            {quizList.map((q, i) => (
              <div key={i} className="p-4 border rounded bg-white space-y-3 relative">
                 <button onClick={() => {const n=[...quizList]; n.splice(i,1); setQuizList(n);}} className="absolute top-2 right-2 text-red-300 hover:text-red-500 text-xl font-bold">×</button>
                 <div>
                    <label className="text-xs font-bold text-gray-500">問題文</label>
                    <input className="w-full p-2 border rounded" value={q.question} onChange={(e) => updateQuiz(i, 'question', e.target.value)} placeholder="例: この文章の主題は？" />
                 </div>
                 <div className="grid grid-cols-2 gap-2">
                    {q.options.map((opt, optIdx) => (
                        <input key={optIdx} className={`p-2 border rounded text-sm ${q.correct === optIdx ? "border-emerald-500 bg-emerald-50" : ""}`} value={opt} onChange={(e) => updateQuizOption(i, optIdx, e.target.value)} placeholder={`選択肢 ${optIdx+1}`} />
                    ))}
                 </div>
                 <div className="flex gap-4 items-center">
                    <label className="text-xs font-bold text-gray-500">正解番号 (0~3):</label>
                    <input type="number" min="0" max="3" className="w-16 p-1 border rounded" value={q.correct} onChange={(e) => updateQuiz(i, 'correct', parseInt(e.target.value))} />
                    <input className="flex-1 p-1 border rounded text-sm" placeholder="解説 (正解！〇〇という意味です)" value={q.explanation} onChange={(e) => updateQuiz(i, 'explanation', e.target.value)} />
                 </div>
              </div>
            ))}
          </section>

          <button 
            onClick={handleCreateArticle} 
            disabled={loading}
            className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-emerald-700 transition text-lg"
          >
            {loading ? "保存中..." : "✨ 全データを保存して公開"}
          </button>
        </div>
      </div>
    </div>
  );
}