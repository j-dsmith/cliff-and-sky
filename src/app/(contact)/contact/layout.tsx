import "@/app/globals.css";
import Footer from "@/components/footer";
import Head from "@/components/head";
import Header from "@/components/header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <Head />
      <body className="font-montserrat">
        <Header theme="dark" />
        {children}
        <Footer theme="light" />
      </body>
    </html>
  );
}
