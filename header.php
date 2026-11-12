<?php
// header.php - Шапка сайта и SEO-метатеги
?>
<!DOCTYPE html>
<html lang="ru" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Никита — Профессиональный программист в Воронеже | Разработка сайтов и ботов</title>
    <meta name="description" content="Услуги программиста в Воронеже: создание современных сайтов, разработка Telegram и VK ботов, автоматизация бизнеса. Дизайн уровня ЮMoney. Связь: @blatsphera">
    
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- FontAwesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Fonts: Inter -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: { sans: ['Inter', 'sans-serif'] },
                    colors: {
                        yoo: {
                            purple: '#8B5CF6',
                            dark: '#0B0F19',
                            card: '#131B2E',
                            border: '#1E293B',
                            accent: '#7C3AED'
                        }
                    },
                    animation: {
                        'float-slow': 'float 6s ease-in-out infinite',
                        'pulse-glow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-10px)' },
                        }
                    }
                }
            }
        }
    </script>
    <style>
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #0B0F19; }
        ::-webkit-scrollbar-thumb { background: #1E293B; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #334155; }
        
        /* Сетка в стиле fintech/IT */
        .bg-fintech-grid {
            background-image: radial-gradient(rgba(139, 92, 246, 0.12) 1px, transparent 1px);
            background-size: 40px 40px;
        }
        
        /* Эффект стекломорфизма ЮMoney */
        .glass-card {
            background: rgba(19, 27, 46, 0.7);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .glass-card:hover {
            border-color: rgba(139, 92, 246, 0.4);
            box-shadow: 0 10px 30px -10px rgba(139, 92, 246, 0.2);
        }
    </style>
</head>
<body class="bg-yoo-dark text-slate-100 selection:bg-purple-600 selection:text-white overflow-x-hidden font-sans relative bg-fintech-grid">
