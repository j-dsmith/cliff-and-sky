import "@/app/globals.css";
import Head from "./head";
import Header from "./header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <Head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
