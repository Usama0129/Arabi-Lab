import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// 1文字アルファベットの正式名称マッピング
const ARABIC_LETTER_NAMES: Record<string, string> = {
  "ا": "أَلِف",
  "أ": "أَلِف",
  "إ": "أَلِف",
  "آ": "أَلِف مَدَّة",
  "ب": "بَاء",
  "ت": "تَاء",
  "ث": "ثَاء",
  "ج": "جِيم",
  "ح": "حَاء",
  "خ": "خَاء",
  "د": "دَال",
  "ذ": "ذَال",
  "ر": "رَاء",
  "ز": "زَاي",
  "س": "سِين",
  "ش": "شِين",
  "ص": "صَاد",
  "ض": "ضَاد",
  "ط": "طَاء",
  "ظ": "ظَاء",
  "ع": "عَيْن",
  "غ": "غَيْن",
  "ف": "فَاء",
  "ق": "قَاف",
  "ك": "كَاف",
  "ل": "لَام",
  "م": "مِيم",
  "ن": "نُون",
  "ه": "هَاء",
  "و": "وَاو",
  "ي": "يَاء",
  "ى": "أَلِف مَقْصُورَة",
  "ء": "هَمْزَة",
  "ة": "تَاء مَرْبُوطَة"
};

function zenkakuToHankaku(str: string) {
  return str.replace(/[０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0xFEE0));
}

function toArabicNumerals(str: string) {
  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return str.replace(/[0-9]/g, (d) => arabicDigits[parseInt(d, 10)]);
}

export async function POST(req: Request) {
  try {
    const apiKey = (process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY || '').trim();

    if (!apiKey) {
      return NextResponse.json({ error: 'OpenAI API Key is missing' }, { status: 500 });
    }

    const { text, speed = 1.0 } = await req.json();
    if (!text) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 });
    }

    // 1. 制御文字を除去
    let cleanText = (text || '').replace(/[\u200F\u200E]/g, '').trim();

    // 2. アルファベット1文字の場合は正式な文字名に自動変換（例: "خ" -> "خَاء"）
    if (ARABIC_LETTER_NAMES[cleanText]) {
      cleanText = ARABIC_LETTER_NAMES[cleanText];
    }

    // 3. 数字の正規化
    cleanText = zenkakuToHankaku(cleanText);
    cleanText = toArabicNumerals(cleanText);

    // OpenAI TTS API を直接 fetch で呼び出し
    const response = await fetch('https://api.openai.com/v1/audio/speech', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'tts-1',
        voice: 'alloy',
        input: cleanText,
        speed: Math.max(0.5, Math.min(2.0, speed)),
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      return NextResponse.json({ error: errText }, { status: response.status });
    }

    const arrayBuffer = await response.arrayBuffer();

    return new NextResponse(arrayBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error: any) {
    console.error('OpenAI TTS Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to generate audio' },
      { status: 500 }
    );
  }
}