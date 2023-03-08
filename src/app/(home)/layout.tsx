import "@/app/globals.css";
import Footer from "@/components/footer";
import Head from "@/components/head";
import Header from "@/components/header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <Head />
      <body className="fixed font-montserrat">
        <Header theme="light" />
        {children}
        <Footer theme="dark" />
      </body>
    </html>
  );
}
