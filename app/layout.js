import "./globals.css";


export const metadata = {
  title: "Magnetik TSP",
  description: "Win Shop on Tiktok in 2026 with Magnetik",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
