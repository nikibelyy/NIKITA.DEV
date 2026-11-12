 "use client";

import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, Code2, Bot, Workflow, Sparkles, Menu, X, Check, Send, Globe2, Layers3, Zap, MessageCircle } from "lucide-react";

const MAX_URL = "https://max.ru/u/f9LHodD0cOIPBndvVADhb7K0XR1aWS8qZx5xyYmNc6wVYSeq6bGPmq0BC5E";

const services = [
  { n: "01", icon: Code2, title: "Разработка сайтов", desc: "Современные сайты, которые выделяют ваш бренд и помогают превращать посетителей в клиентов.", tags: ["Landing page", "Многостраничные", "Адаптивный дизайн"] },
  { n: "02", icon: Bot, title: "Telegram-боты", desc: "Боты для общения с клиентами, автоматизации задач, приёма заявок и развития бизнеса.", tags: ["Автоматизация", "Интеграции", "Удобные сценарии"] },
  { n: "03", icon: MessageCircle, title: "Боты ВКонтакте", desc: "Умные сообщества и чат-боты, которые отвечают, помогают и работают на ваш проект.", tags: ["Сообщества", "Рассылки", "Заявки"] },
  { n: "04", icon: Workflow, title: "Автоматизация", desc: "Связываю инструменты и убираю рутину, чтобы процессы работали быстрее и понятнее.", tags: ["Связки сервисов", "Логика", "Оптимизация"] },
];

const projects = [
  { type: "WEB DESIGN / DEVELOPMENT", title: "Цифровое присутствие", desc: "Сайт, который формирует первое впечатление о бренде.", cls: "project-a", label: "01 / WEB" },
  { type: "TELEGRAM / AUTOMATION", title: "Умный помощник", desc: "Автоматизация общения и обработки обращений.", cls: "project-b", label: "02 / BOT" },
  { type: "VK / COMMUNITY", title: "Сообщество нового уровня", desc: "Инструменты для взаимодействия с аудиторией.", cls: "project-c", label: "03 / VK" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", contact: "", task: "" });

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const msg = `Привет, Никита! Меня зовут ${form.name}. Контакт для ответа: ${form.contact}. Задача: ${form.task}`;
    window.open(`${MAX_URL}?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="noise" aria-hidden="true" />
      <header className="header">
        <a className="brand" href="#top" aria-label="Nikita Dev home"><span className="brand-mark">N<span>.</span></span><span>NIKITA<span className="muted">.DEV</span></span></a>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#services" onClick={closeMenu}>Услуги</a><a href="#work" onClick={closeMenu}>Проекты</a><a href="#about" onClick={closeMenu}>Обо мне</a><a href="#contact" onClick={closeMenu}>Контакты</a>
        </nav>
        <a className="header-cta" href={MAX_URL} target="_blank" rel="noreferrer">Обсудить проект <ArrowUpRight size={15}/></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Открыть меню">{menuOpen ? <X/> : <Menu/>}</button>
      </header>

      <section className="hero section-wrap" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse"/> НЕЗАВИСИМЫЙ РАЗРАБОТЧИК <span className="eyebrow-line"/></div>
          <h1>Создаю цифровые<br/><span className="gradient-text">решения</span><br/>для нового времени<span className="dot">.</span></h1>
          <p className="hero-sub">Сайты и боты, которые не просто выглядят современно — они решают задачи, упрощают процессы и помогают расти.</p>
          <div className="hero-actions"><a className="button button-primary" href="#contact">Обсудить ваш проект <ArrowUpRight size={17}/></a><a className="text-link" href="#work">Смотреть работы <ArrowDownRight size={16}/></a></div>
          <div className="hero-foot"><span>WEB DEVELOPMENT</span><i/><span>BOT AUTOMATION</span><i/><span>DIGITAL EXPERIENCE</span></div>
        </div>
        <div className="hero-art" aria-label="Абстрактная 3D графика">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orb-core"><div className="orb-inner"/></div>
          <div className="float-card code-card"><div className="card-top"><span/><span/><span/><b>build.js</b></div><div className="code-lines"><p><em>const</em> future = <strong>"yours"</strong>;</p><p><em>function</em> <b>create()</b> {"{"}</p><p className="indent">design<span>()</span>;</p><p className="indent">develop<span>()</span>;</p><p className="indent">launch<span>()</span>;</p><p>{"}"}</p></div></div>
          <div className="float-card status-card"><span className="status-icon"><Sparkles size={15}/></span><span><b>Идея → результат</b><small>Каждая деталь имеет смысл</small></span><span className="status-check"><Check size={14}/></span></div>
          <div className="art-caption"><span>FIG. 001</span><span>DIGITAL CRAFT / 2026</span></div>
        </div>
        <a href="#services" className="scroll-hint"><span className="scroll-line"/> ЛИСТАЙТЕ НИЖЕ</a>
      </section>

      <section className="ticker" aria-label="Направления"><div className="ticker-track">{Array.from({length:2}).map((_,i)=><span key={i}>WEB DESIGN <b>✳</b> DEVELOPMENT <b>✳</b> TELEGRAM BOTS <b>✳</b> VK AUTOMATION <b>✳</b> DIGITAL IDEAS <b>✳</b></span>)}</div></section>

      <section className="section-wrap section" id="services">
        <div className="section-heading"><div><div className="eyebrow">ЧТО Я ДЕЛАЮ <span className="eyebrow-line"/></div><h2>Инструменты для<br/><span className="muted">ваших амбиций.</span></h2></div><p className="section-note">От первой идеи до готового цифрового продукта. Продумываю не только внешний вид, но и то, как всё работает.</p></div>
        <div className="service-grid">{services.map((s)=><article className="service-card" key={s.n}><div className="service-top"><span>{s.n} / 04</span><s.icon size={22}/></div><h3>{s.title}</h3><p>{s.desc}</p><div className="tags">{s.tags.map(t=><span key={t}>{t}</span>)}</div><div className="card-arrow"><ArrowUpRight size={18}/></div></article>)}</div>
      </section>

      <section className="section-wrap section work-section" id="work">
        <div className="section-heading"><div><div className="eyebrow">ИЗБРАННЫЕ НАПРАВЛЕНИЯ <span className="eyebrow-line"/></div><h2>Идеи обретают<br/><span className="gradient-text">форму.</span></h2></div><p className="section-note">Каждый проект начинается с задачи. Здесь — примеры форматов решений, которые можно создать для вашего бизнеса.</p></div>
        <div className="project-grid">{projects.map((p)=><article className={`project-card ${p.cls}`} key={p.title}><div className="project-visual"><span className="project-label">{p.label}</span>{p.cls==="project-a" ? <div className="mini-browser"><div className="browser-bar"><i/><i/><i/></div><div className="browser-content"><span>YOUR BRAND</span><b>Make it<br/>remarkable.</b><i/></div></div> : p.cls==="project-b" ? <div className="bot-visual"><div className="bot-orbit"/><div className="bot-cube"><Bot size={54}/></div><span className="bot-chip">AUTOMATED</span></div> : <div className="vk-visual"><div className="vk-circle">vk</div><div className="vk-lines"><i/><i/><i/></div><div className="vk-pill">COMMUNITY</div></div>}</div><div className="project-info"><div><span>{p.type}</span><h3>{p.title}</h3><p>{p.desc}</p></div><ArrowUpRight size={20}/></div></article>)}</div>
        <p className="portfolio-disclaimer">Визуальные концепции направлений — реальные кейсы и результаты можно добавить после получения ваших проектов.</p>
      </section>

      <section className="section-wrap about-section" id="about"><div className="about-visual"><div className="about-ring ring-a"/><div className="about-ring ring-b"/><div className="about-monogram">N<span>.</span></div><span className="about-stamp">INDEPENDENT<br/>DEVELOPER</span><span className="about-index">EST. 2026 / DIGITAL</span></div><div className="about-copy"><div className="eyebrow">НЕМНОГО ОБО МНЕ <span className="eyebrow-line"/></div><h2>Привет, я <span className="gradient-text">Никита.</span></h2><p className="about-lead">Разрабатываю сайты и ботов, превращая идеи в удобные цифровые инструменты.</p><p className="about-text">Мне важно, чтобы проект был не только визуально сильным, но и понятным людям. Поэтому внимание уделяю деталям, логике взаимодействия, скорости и адаптации под разные устройства.</p><div className="principles"><div><span>01</span><b>Вдумчивый подход</b></div><div><span>02</span><b>Внимание к деталям</b></div><div><span>03</span><b>Результат в приоритете</b></div></div><a className="text-link" href="#contact">Давайте знакомиться <ArrowUpRight size={16}/></a></div></section>

      <section className="section-wrap contact-section" id="contact"><div className="contact-panel"><div className="contact-glow"/><div className="contact-copy"><div className="eyebrow">ЕСТЬ ИДЕЯ? <span className="eyebrow-line"/></div><h2>Давайте создадим<br/><span className="gradient-text">что-то сильное.</span></h2><p>Расскажите о задаче — обсудим детали и найдём лучшее решение для вашего проекта.</p><a className="button button-primary" href={MAX_URL} target="_blank" rel="noreferrer">Написать в MAX <ArrowUpRight size={17}/></a><div className="contact-meta"><span><span className="pulse"/> ОТКРЫТ К НОВЫМ ПРОЕКТАМ</span><span>ОТВЕЧАЮ ЛИЧНО</span></div></div><form className="contact-form" onSubmit={submit}><div className="form-title">Коротко о вашем проекте <span>01 — 03</span></div><label>Как к вам обращаться?<input required placeholder="Ваше имя" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></label><label>Как с вами связаться?<input required placeholder="Телефон / ник / ссылка" value={form.contact} onChange={e=>setForm({...form,contact:e.target.value})}/></label><label>Что нужно сделать?<textarea required placeholder="Например: сайт для бизнеса или Telegram-бот..." rows={3} value={form.task} onChange={e=>setForm({...form,task:e.target.value})}/></label><button className="button button-light" type="submit">Отправить заявку <ArrowUpRight size={17}/></button><small>{sent ? "MAX открылся — отправьте подготовленное сообщение в чате." : "Нажимая кнопку, вы перейдёте в MAX с подготовленным сообщением."}</small></form></div></section>

      <footer className="footer section-wrap"><a className="brand" href="#top"><span className="brand-mark">N<span>.</span></span><span>NIKITA<span className="muted">.DEV</span></span></a><span className="footer-copy">© 2026 NIKITA.DEV — СОЗДАЮ ЦИФРОВОЕ</span><a className="footer-up" href="#top">НАВЕРХ ↑</a></footer>
    </main>
  );
}