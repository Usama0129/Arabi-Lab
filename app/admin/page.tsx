"use client";
import React, { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function AdminPage() {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [level, setLevel] = useState("初級");
  const [category, setCategory] = useState("");
  const [contentPlain, setContentPlain] = useState("");
  const [contentVoweled, setContentVoweled] = useState("");

  const handleCreateArticle = async () => {
    if (!title || !category) return alert("タイトルとカテゴリーは必須です");
    setLoading(true);

    try {
      // 1. 記事本体を保存
      const { data, error } = await supabase
        .from("articles")
        .insert([{ title, level, category, content_plain: contentPlain, content_voweled: contentVoweled }])
        .select()
        .single();

      if (error) throw error;
      alert(`記事「${data.title}」を作成しました！ID: ${data.id}`);
      
      // クリア
      setTitle(""); setCategory(""); setContentPlain(""); setContentVoweled("");
    } catch (e: any) {
      alert("エラー: " + e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-emerald-900">🛠️ 管理画面：記事追加</h1>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-1">タイトル</label>
            <input className="w-full p-2 border rounded" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="例: 自己紹介" />
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
              <input className="w-full p-2 border rounded" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="例: 挨拶" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold mb-1">本文 (母音なし / Plain)</label>
            <textarea className="w-full p-2 border rounded h-24 font-arabic" value={contentPlain} onChange={(e) => setContentPlain(e.target.value)} dir="rtl" />
          </div>

          <div>
            <label className="block text-sm font-bold mb-1">本文 (母音あり / Voweled)</label>
            <textarea className="w-full p-2 border rounded h-24 font-arabic" value={contentVoweled} onChange={(e) => setContentVoweled(e.target.value)} dir="rtl" />
          </div>

          <button 
            onClick={handleCreateArticle} 
            disabled={loading}
            className="w-full bg-emerald-600 text-white font-bold py-3 rounded hover:bg-emerald-700 transition"
          >
            {loading ? "保存中..." : "記事を保存する"}
          </button>
        </div>
      </div>
    </div>
  );
}