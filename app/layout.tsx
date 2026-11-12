import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NIKITA.DEV — Сайты и цифровые решения",
  description: "Разработка современных сайтов, Telegram-ботов и ботов ВКонтакте. Никита — разработчик цифровых решений.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}