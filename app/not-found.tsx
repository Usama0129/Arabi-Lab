import React from 'react'; // ★この1行を追加してください
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FDFCF8] flex flex-col items-center justify-center p-4 text-center font-sans">
      <div className="text-9xl mb-4 animate-bounce">🐫</div>
      <h1 className="text-4xl font-serif font-bold text-emerald-950 mb-4">404 Not Found</h1>
      <p className="text-gray-500 mb-8 max-w-md">
        お探しのページは見つかりませんでした。<br/>
        砂漠の中で迷子になってしまったようです。
      </p>
      <Link 
        href="/" 
        className="px-8 py-3 bg-emerald-800 text-white font-bold rounded-full shadow-lg hover:bg-emerald-900 transition hover:scale-105"
      >
        オアシス（ホーム）に戻る
      </Link>
    </div>
  );
}