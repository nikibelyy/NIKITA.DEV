'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTelegram, FaCode, FaRobot, FaMobileAlt, FaServer, FaCheckCircle, FaRocket, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white overflow-x-hidden font-sans">
      {/* Фоновые градиентные свечения */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* Навигация */}
      <nav className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        <div className="text-xl font-black tracking-wider bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          НИКИТА
        </div>
        <div className="flex gap-4">
          <a
            href="https://t.me/blatsphera"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 transition text-sm font-medium"
          >
            <FaTelegram /> Telegram
          </a>
          <a
            href="https://max.ru/u/f9LHodD0cOIPBndvVADhb7K0XR1aWS8qZx5xyYmNc6wVYSeq6bGPmq0BC5E"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 text-purple-300 transition text-sm font-medium"
          >
            <FaExternalLinkAlt /> MAX
          </a>
        </div>
      </nav>

      {/* Главный блок (Hero) */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-24 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold mb-6">
            ✨ Web Developer & Automation Engineer
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
            Привет, я <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Никита</span>. Создаю цифровые решения.
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Разрабатываю современные сайты, умные боты для Telegram и VK, а также автоматизирую бизнес-процессы любой сложности.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://t.me/blatsphera"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold shadow-lg shadow-indigo-500/25 transition transform hover:-translate-y-0.5"
            >
              Связаться в Telegram
            </a>
            <a
              href="https://max.ru/u/f9LHodD0cOIPBndvVADhb7K0XR1aWS8qZx5xyYmNc6wVYSeq6bGPmq0BC5E"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-bold transition transform hover:-translate-y-0.5"
            >
              Написать в MAX
            </a>
          </div>
        </motion.div>
      </section>

      {/* Услуги */}
      <section className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Чем я занимаюсь</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 transition">
            <div className="w-12 h-12 rounded-xl bg-indigo-600/20 flex items-center justify-center text-indigo-400 mb-4 text-xl">
              <FaCode />
            </div>
            <h3 className="text-lg font-bold mb-2">Создание сайтов</h3>
            <p className="text-slate-400 text-sm">Современные, адаптивные и быстрые веб-приложения, лендинги и интернет-магазины.</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/50 transition">
            <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center text-purple-400 mb-4 text-xl">
              <FaRobot />
            </div>
            <h3 className="text-lg font-bold mb-2">Telegram & VK боты</h3>
            <p className="text-slate-400 text-sm">Автоматизация продаж, поддержка клиентов, интеграция с платежами и CRM системами.</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-pink-500/50 transition">
            <div className="w-12 h-12 rounded-xl bg-pink-600/20 flex items-center justify-center text-pink-400 mb-4 text-xl">
              <FaMobileAlt />
            </div>
            <h3 className="text-lg font-bold mb-2">Адаптивный дизайн</h3>
            <p className="text-slate-400 text-sm">Идеальное отображение интерфейсов на любых устройствах — от смартфонов до 4K мониторов.</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 transition">
            <div className="w-12 h-12 rounded-xl bg-emerald-600/20 flex items-center justify-center text-emerald-400 mb-4 text-xl">
              <FaServer />
            </div>
            <h3 className="text-lg font-bold mb-2">И многое другое</h3>
            <p className="text-slate-400 text-sm">Интеграция API, настройка серверов, доработка и оптимизация готовых проектов.</p>
          </div>
        </div>
      </section>

      {/* Блок связи */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-4">Готовы обсудить проект?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Напишите мне в удобный мессенджер, и мы оперативно обсудим ваши задачи и сроки реализации.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://t.me/blatsphera"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition"
            >
              <FaTelegram /> @blatsphera
            </a>
            <a
              href="https://max.ru/u/f9LHodD0cOIPBndvVADhb7K0XR1aWS8qZx5xyYmNc6wVYSeq6bGPmq0BC5E"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold transition"
            >
              <FaExternalLinkAlt /> Открыть MAX
            </a>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="max-w-6xl mx-auto px-6 py-8 border-t border-slate-900 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Никита. Все права защищены.
      </footer>
    </div>
  );
}
