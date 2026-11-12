<?php 
// index.php - Главная страница портфолио
include 'header.php'; 
?>

    <!-- Неоновые фоновые сферы (финтех-стиль) -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-r from-purple-600/15 via-indigo-600/10 to-blue-600/15 blur-[160px] pointer-events-none"></div>

    <!-- Шапка навигации -->
    <header class="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex justify-between items-center relative z-10">
        <div class="flex items-center gap-3">
            <div class="w-11 h-11 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center font-black text-xl shadow-lg shadow-purple-600/30 text-white">
                N
            </div>
            <div>
                <span class="text-base sm:text-lg font-black tracking-tight block">НИКИТА</span>
                <span class="text-xs text-purple-400 font-semibold block -mt-1">Fullstack • Воронеж</span>
            </div>
        </div>

        <div class="flex items-center gap-2 sm:gap-3">
            <a href="https://t.me/blatsphera" target="_blank" rel="noopener noreferrer" 
               class="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-purple-600/15 hover:bg-purple-600/25 border border-purple-500/30 text-purple-300 transition text-xs sm:text-sm font-semibold">
                <i class="fa-brands fa-telegram text-base"></i> <span class="hidden sm:inline">Telegram</span>
            </a>
            <a href="https://max.ru/u/f9LHodD0cOIPBndvVADhb7K0XR1aWS8qZx5xyYmNc6wVYSeq6bGPmq0BC5E" target="_blank" rel="noopener noreferrer" 
               class="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-indigo-600/15 hover:bg-indigo-600/25 border border-indigo-500/30 text-indigo-300 transition text-xs sm:text-sm font-semibold">
                <i class="fa-solid fa-bolt text-base text-purple-400"></i> <span>MAX</span>
            </a>
        </div>
    </header>

    <!-- Главный экран (Hero) -->
    <section class="max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-24 text-center relative z-10">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs sm:text-sm font-medium mb-6 animate-float-slow">
            <i class="fa-solid fa-shield-halved text-purple-400"></i> Премиальная разработка цифровых систем
        </div>
        
        <h1 class="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
            Технологии будущего для вашего бизнеса в <span class="bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400 bg-clip-text text-transparent">Воронеже</span>
        </h1>
        
        <p class="text-slate-400 text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Привет! Меня зовут Никита. Создаю отказоустойчивые веб-сайты, умные чат-боты (Telegram, VK) и настраиваю глубокую автоматизацию процессов.
        </p>

        <div class="flex flex-col sm:flex-row justify-center gap-4 max-w-md sm:max-w-none mx-auto">
            <a href="https://t.me/blatsphera" target="_blank" rel="noopener noreferrer"
               class="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold shadow-xl shadow-purple-600/25 transition transform hover:-translate-y-0.5 duration-200 text-center flex items-center justify-center gap-2">
                <i class="fa-brands fa-telegram text-lg"></i> Написать в Telegram
            </a>
            <a href="https://max.ru/u/f9LHodD0cOIPBndvVADhb7K0XR1aWS8qZx5xyYmNc6wVYSeq6bGPmq0BC5E" target="_blank" rel="noopener noreferrer"
               class="px-8 py-4 rounded-2xl bg-yoo-card hover:bg-slate-800 border border-yoo-border text-slate-200 font-bold transition transform hover:-translate-y-0.5 duration-200 text-center flex items-center justify-center gap-2">
                <i class="fa-solid fa-bolt text-lg text-purple-400"></i> Открыть в MAX
            </a>
        </div>
    </section>

    <!-- Услуги в финтех-стиле ЮMoney (Карточки с детальной прорисовкой) -->
    <section class="max-w-6xl mx-auto px-4 sm:px-6 py-12 relative z-10">
        <div class="text-center mb-14">
            <h2 class="text-2xl sm:text-4xl font-extrabold mb-3">Архитектура решений</h2>
            <p class="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">Каждый продукт прорабатывается до мелочей: от конверсионного UX до серверной безопасности.</p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Карточка 1 -->
            <div class="glass-card p-6 sm:p-8 rounded-3xl transition duration-300 group">
                <div class="w-14 h-14 rounded-2xl bg-purple-600/20 flex items-center justify-center text-purple-400 mb-6 text-2xl group-hover:scale-110 transition shadow-inner border border-purple-500/20">
                    <i class="fa-solid fa-code"></i>
                </div>
                <h3 class="text-lg font-bold mb-2 text-slate-100">Создание сайтов</h3>
                <p class="text-slate-400 text-sm leading-relaxed">Современные интерфейсы, высокая скорость отклика, интеграция платежей и CRM.</p>
            </div>

            <!-- Карточка 2 -->
            <div class="glass-card p-6 sm:p-8 rounded-3xl transition duration-300 group">
                <div class="w-14 h-14 rounded-2xl bg-indigo-600/20 flex items-center justify-center text-indigo-400 mb-6 text-2xl group-hover:scale-110 transition shadow-inner border border-indigo-500/20">
                    <i class="fa-brands fa-telegram"></i>
                </div>
                <h3 class="text-lg font-bold mb-2 text-slate-100">Telegram & ВК боты</h3>
                <p class="text-slate-400 text-sm leading-relaxed">Интеллектуальные боты для автоматизации воронок продаж, каталогов и техподдержки.</p>
            </div>

            <!-- Карточка 3 -->
            <div class="glass-card p-6 sm:p-8 rounded-3xl transition duration-300 group">
                <div class="w-14 h-14 rounded-2xl bg-pink-600/20 flex items-center justify-center text-pink-400 mb-6 text-2xl group-hover:scale-110 transition shadow-inner border border-pink-500/20">
                    <i class="fa-solid fa-mobile-screen-button"></i>
                </div>
                <h3 class="text-lg font-bold mb-2 text-slate-100">Адаптивный дизайн</h3>
                <p class="text-slate-400 text-sm leading-relaxed">Идеальная верстка под любые мобильные устройства, планшеты и десктопные дисплеи.</p>
            </div>

            <!-- Карточка 4 -->
            <div class="glass-card p-6 sm:p-8 rounded-3xl transition duration-300 group">
                <div class="w-14 h-14 rounded-2xl bg-emerald-600/20 flex items-center justify-center text-emerald-400 mb-6 text-2xl group-hover:scale-110 transition shadow-inner border border-emerald-500/20">
                    <i class="fa-solid fa-server"></i>
                </div>
                <h3 class="text-lg font-bold mb-2 text-slate-100">Автоматизация</h3>
                <p class="text-slate-400 text-sm leading-relaxed">Настройка веб-серверов, подключение API, парсинг данных и комплексная поддержка.</p>
            </div>
        </div>
    </section>

    <!-- SEO-Блок для продвижения в Воронеже -->
    <section class="max-w-5xl mx-auto px-4 sm:px-6 py-16 relative z-10">
        <div class="glass-card p-8 sm:p-12 rounded-3xl border border-yoo-border">
            <h2 class="text-2xl sm:text-3xl font-extrabold mb-6 text-center bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">
                Программист в Воронеже: разработка цифровых продуктов под ключ
            </h2>
            <div class="space-y-4 text-slate-400 text-sm sm:text-base leading-relaxed">
                <p>
                    Если вам требуется надежный разработчик в Воронеже для создания высоконагруженного сайта, написания телеграм-бота или внедрения автоматизации бизнеса, вы по адресу. Меня зовут Никита, и я проектирую надежные IT-решения с чистой архитектурой и первоклассным дизайном в стиле передовых финтех-платформ.
                </p>
                <p>
                    Каждый проект пишется с учетом стандартов безопасности, SEO-оптимизации и мгновенной загрузки. Адаптивность верстки исключает любые выходы за края экрана на смартфонах.
                </p>
                <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-yoo-border/60">
                    <li class="flex items-center gap-2"><i class="fa-solid fa-check text-purple-400"></i> <span>Прозрачные сроки и ТЗ</span></li>
                    <li class="flex items-center gap-2"><i class="fa-solid fa-check text-purple-400"></i> <span>Современный стек (PHP, JS, Tailwind)</span></li>
                    <li class="flex items-center gap-2"><i class="fa-solid fa-check text-purple-400"></i> <span>Прямая связь без посредников</span></li>
                    <li class="flex items-center gap-2"><i class="fa-solid fa-check text-purple-400"></i> <span>Техподдержка после релиза</span></li>
                </ul>
            </div>
        </div>
    </section>

    <!-- Блок связи -->
    <section class="max-w-4xl mx-auto px-4 sm:px-6 py-12 relative z-10">
        <div class="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-purple-950/40 via-yoo-card to-yoo-dark border border-purple-500/20 text-center relative overflow-hidden shadow-2xl">
            <div class="absolute -right-10 -bottom-10 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
            
            <h2 class="text-2xl sm:text-4xl font-extrabold mb-4">Обсудим вашу задачу?</h2>
            <p class="text-slate-400 mb-8 max-w-xl mx-auto text-sm sm:text-base">
                Напишите мне в Telegram или MAX — проконсультирую по срокам и стоимости реализации.
            </p>
            
            <div class="flex flex-col sm:flex-row justify-center gap-4">
                <a href="https://t.me/blatsphera" target="_blank" rel="noopener noreferrer"
                   class="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold transition shadow-lg shadow-purple-600/30">
                    <i class="fa-brands fa-telegram text-lg"></i> @blatsphera
                </a>
                <a href="https://max.ru/u/f9LHodD0cOIPBndvVADhb7K0XR1aWS8qZx5xyYmNc6wVYSeq6bGPmq0BC5E" target="_blank" rel="noopener noreferrer"
                   class="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition shadow-lg shadow-indigo-600/30">
                    <i class="fa-solid fa-bolt text-lg"></i> Открыть в MAX
                </a>
            </div>
        </div>
    </section>

<?php 
include 'footer.php'; 
?>
