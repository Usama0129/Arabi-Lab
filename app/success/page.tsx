import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: '#f3f0e9', // Arabi Lab 正統のベージュ
      color: '#4a3728',
      padding: '20px'
    }}>
      <div style={{ 
        maxWidth: '420px', 
        width: '100%', 
        backgroundColor: '#ffffff', 
        borderRadius: '40px', // より大きく柔らかい角丸
        padding: '50px 30px',
        textAlign: 'center',
        boxShadow: '0 20px 60px rgba(74, 55, 40, 0.05)', // 極めて繊細な影
        border: '1px solid rgba(74, 55, 40, 0.03)'
      }}>
        
        {/* 上品なサイズの王冠アイコン */}
        <div style={{ 
          marginBottom: '32px',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <div style={{
            paddingBottom: '8px',
            borderBottom: '1.5px solid #D4AF37' // 下のラインをゴールドに
          }}>
            <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 17L3 7L8 10L12 4L16 10L21 7L19 17H5Z" 
                    stroke="#4a3728" 
                    strokeWidth="1" // より細いラインで繊細さを
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* プレミアムバッジ */}
        <div style={{
          display: 'inline-block',
          backgroundColor: '#fdf9f0',
          color: '#D4AF37',
          fontSize: '11px',
          fontWeight: '700',
          padding: '4px 12px',
          borderRadius: '20px',
          letterSpacing: '0.1em',
          marginBottom: '24px',
          border: '1px solid rgba(212, 175, 55, 0.2)'
        }}>
          PREMIUM PLAN
        </div>

        <h1 style={{ 
          fontSize: '28px', 
          fontWeight: '600', 
          marginBottom: '12px',
          fontFamily: 'serif' // 見出しには気品のあるセリフ体
        }}>
          {"\u200F"}مبروك!{"\u200F"}
        </h1>
        
        <p style={{ 
          fontSize: '15px', 
          color: '#8c7e71', 
          marginBottom: '40px',
          letterSpacing: '0.02em'
        }}>
          {"\u200F"}تم تفعيل اشتراكك بنجاح{"\u200F"}
        </p>

        <div style={{ 
          margin: '0 auto 40px',
          width: '40px',
          height: '1px',
          backgroundColor: '#f3f0e9'
        }} />

        <h2 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '12px' }}>
          ご登録ありがとうございます！
        </h2>
        
        <p style={{ 
          fontSize: '14px', 
          color: '#8c7e71', 
          lineHeight: '2', 
          marginBottom: '48px',
          textAlign: 'center'
        }}>
          お支払いが正常に完了しました。<br />
          アラビア語の深く豊かな世界を、<br />
          心ゆくまでお楽しみください。
        </p>

        <Link href="/" style={{ 
          display: 'block',
          backgroundColor: '#4a3728', // Arabi Lab メインブラウン
          color: '#ffffff',
          padding: '18px',
          borderRadius: '16px',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '15px',
          boxShadow: '0 10px 20px rgba(74, 55, 40, 0.15)',
          transition: 'transform 0.2s ease'
        }}>
          学習を開始する
        </Link>
        
        <p style={{ 
          marginTop: '32px', 
          fontSize: '12px', 
          color: '#c4bdb6', 
          fontStyle: 'italic' 
        }}>
          {"\u200F"}Arabi Lab - Premium Member{"\u200F"}
        </p>
      </div>
    </div>
  );
}