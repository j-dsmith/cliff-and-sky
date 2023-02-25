import "@/app/globals.css";
import Footer from "./components/footer";
import Head from "./head";
import Header from "./header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <Head />
      <body className="fixed">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
