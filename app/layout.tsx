import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.dataset.theme=t;}var f=localStorage.getItem('font');if(f==='inter'||f==='google-sans'){document.documentElement.dataset.font=f;}}catch(e){}",
          }}
        />
        <link rel="preconnect" href="https://fonts.cdnfonts.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;450;500;600;700&family=Noto+Sans:wght@400;450;500;600;700&family=Noto+Sans+Thai:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.cdnfonts.com/css/google-sans" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
