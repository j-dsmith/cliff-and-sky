import "@/app/globals.css";
import Head from "./head";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <Head />
      <body>{children}</body>
    </html>
  );
}
