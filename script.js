// Ждём полной загрузки DOM перед привязкой обработчиков
document.addEventListener('DOMContentLoaded', function() {

    // Получаем элементы
    const generateBtn = document.getElementById('generateBtn');
    const randomBtn = document.getElementById('randomBtn');
    const copyBtn = document.getElementById('copyBtn');
    const geminiBtn = document.getElementById('geminiBtn');
    const resultCard = document.getElementById('resultCard');
    const promptOutput = document.getElementById('promptOutput');
    const copyStatus = document.getElementById('copyStatus');

    const selects = {
        heroine: document.getElementById('heroine'),
        antagonist: document.getElementById('antagonist'),
        betrayal: document.getElementById('betrayal'),
        revelation: document.getElementById('revelation'),
        sacrifice: document.getElementById('sacrifice'),
        ending: document.getElementById('ending'),
        length: document.getElementById('length')
    };

    console.log('Generator initialized');

    // Функция генерации промпта
    function generatePrompt() {
        try {
            const values = {};
            let allFilled = true;

            for (const key in selects) {
                const value = selects[key].value;
                if (!value) {
                    allFilled = false;
                    selects[key].style.borderColor = '#e94560';
                } else {
                    selects[key].style.borderColor = '';
                    values[key] = value;
                }
            }

            if (!allFilled) {
                alert('⚠️ Пожалуйста, заполните все параметры истории!');
                return;
            }

            const prompt = `Ты — талантливый писатель драматических историй о женских судьбах, предательстве и торжестве справедливости. Твоя задача — написать захватывающий рассказ для русскоязычного канала на Дзене (целевая аудитория — женщины 35-65 лет).

═══════════════════════════════════════════
ПАРАМЕТРЫ ИСТОРИИ
═══════════════════════════════════════════

🎭 ГЛАВНАЯ ГЕРОИНЯ:
${values.heroine}

😈 АНТАГОНИСТ:
${values.antagonist}

💔 СУТЬ КОНФЛИКТА (предательство):
${values.betrayal}

🔍 СПОСОБ ОТКРЫТИЯ ПРАВДЫ:
${values.revelation}

💸 ЧТО ГЕРОИНЯ ОТДАЛА/ПОТЕРЯЛА:
${values.sacrifice}

🏆 ФИНАЛ:
${values.ending}

📏 ОБЪЁМ:
${values.length}

═══════════════════════════════════════════
ОБЯЗАТЕЛЬНАЯ СТРУКТУРА РАССКАЗА
═══════════════════════════════════════════

1. ЗАГОЛОВОК (цепляющий, от первого лица, с интригой)
   Примеры стиля заголовков:
   • "25 лет я экономила на себе, веря, что мы копим на спокойную старость. А муж уже 5 лет платил ипотеку своей секретарше."
   • "Приютила 'бедную' троюродную сестру из деревни. А она за месяц настроила против меня детей и попыталась поменять замки в моей же квартире."
   • "Родная сестра со слезами выманила деньги на операцию. Я продала машину, а потом увидела её новые фото с Мальдив... в обнимку с моим мужем."

2. ЗАВЯЗКА (10-15% текста)
   • Подробное описание обычной жизни героини
   • Детальный быт: что носит, как выглядит дом, чем пахнет на кухне
   • Намёк на жертвенность героини и её "правильность"
   • Ключевая деталь, которая позже сыграет роль

3. ПОЯВЛЕНИЕ ПРОБЛЕМЫ (15-20% текста)
   • Описание антагониста с маской добродетели
   • Просьба о помощи / акт жертвы со стороны героини
   • Внутренние сомнения героини, которые она подавляет
   • Героиня поступает "правильно" и помогает

4. ЭСКАЛАЦИЯ (20-25% текста)
   • Антагонист постепенно наглеет / захватывает территорию
   • Героиня терпит, оправдывает, винит себя
   • Близкие (муж, дети) встают на сторону антагониста
   • Атмосфера становится невыносимой

5. МОМЕНТ ИСТИНЫ (10% текста)
   • Случайное открытие правды (по выбранному способу)
   • Шок, оцепенение, внутренний слом
   • НЕ истерика, а ледяное спокойствие
   • Решение действовать

6. ХОЛОДНАЯ ПОДГОТОВКА К РАЗВЯЗКЕ (10-15% текста)
   • Героиня собирает доказательства
   • Консультируется с адвокатом / собирает документы / делает скриншоты
   • Внешне продолжает играть прежнюю роль
   • Внутренне уже трансформировалась

7. КУЛЬМИНАЦИЯ — РАЗОБЛАЧЕНИЕ (15-20% текста)
   • Драматическая сцена конфронтации
   • Маска антагониста СЛЕТАЕТ — он показывает истинное лицо
   • Героиня говорит спокойно, но каждое слово как удар
   • Свидетели (муж, родственники, гости) шокированы
   • Документы / доказательства на столе

8. РАЗВЯЗКА (10% текста)
   • Финал по выбранному варианту
   • Антагонист наказан (по закону / общественно / морально)
   • Героиня уходит свободной

9. ЭПИЛОГ (5-10% текста, "прошёл год / полгода")
   • Новая жизнь героини: она расцвела
   • Антагонист разрушен (спился / разорился / одинок)
   • Финальная символическая сцена (новая машина / дом / любовь)
   • Главная мысль рассказа в одной-двух фразах

═══════════════════════════════════════════
СТИЛИСТИЧЕСКИЕ ТРЕБОВАНИЯ
═══════════════════════════════════════════

✅ ОБЯЗАТЕЛЬНО:
• Повествование от первого или третьего лица (выбери уместное)
• Живые диалоги с яркими репликами
• Детальный быт: марки машин, цены в рублях, бренды одежды, запахи, звуки
• Внутренние монологи героини
• Метафоры и образные описания ("сердце ухнуло куда-то в желудок", "ледяная ярость")
• Контраст: тёплые бытовые детали ДО предательства vs холодная решимость ПОСЛЕ
• Конкретные суммы денег (рубли), названия документов (ЕГРН, выписки, договоры)
• Реалистичные детали: суды, адвокаты, банки, полиция

❌ ИЗБЕГАЙ:
• Истерик и слезливости героини
• Сказочных совпадений (всё должно быть правдоподобно)
• Морализаторства автора (мораль доносится через действия)
• Излишней жестокости или нецензурной лексики
• Скучных описаний — каждая деталь должна работать на сюжет

═══════════════════════════════════════════
ЭМОЦИОНАЛЬНАЯ ДУГА ГЕРОИНИ
═══════════════════════════════════════════

ДО → терпение, жертвенность, наивная вера в близких
МОМЕНТ ИСТИНЫ → шок → ледяная ясность
ПОСЛЕ → холодный расчёт, сила, достоинство
ФИНАЛ → свобода, обретение себя, новая жизнь

═══════════════════════════════════════════
ИТОГ
═══════════════════════════════════════════

Напиши законченный рассказ согласно всем параметрам и структуре выше. Рассказ должен:
• Цеплять с первой строки
• Держать читателя в напряжении до конца
• Вызывать эмоциональный отклик (гнев на антагониста, восхищение героиней)
• Заканчиваться катарсисом и торжеством справедливости

Начни с цепляющего заголовка, затем — рассказ.`;

            promptOutput.textContent = prompt;
            resultCard.style.display = 'block';

            setTimeout(() => {
                resultCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);

            console.log('Prompt generated successfully');
        } catch (error) {
            console.error('Error in generatePrompt:', error);
            alert('Ошибка при генерации промпта: ' + error.message);
        }
    }

    // Случайный выбор всех параметров
    function randomSelect() {
        try {
            console.log('Random select clicked');

            for (const key in selects) {
                const select = selects[key];
                if (!select) {
                    console.error('Select not found:', key);
                    continue;
                }
                const options = select.options;
                if (options.length <= 1) continue;
                const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1;
                select.selectedIndex = randomIndex;
                select.style.borderColor = '';
            }

            generatePrompt();
        } catch (error) {
            console.error('Error in randomSelect:', error);
            alert('Ошибка при случайном выборе: ' + error.message);
        }
    }

    // Копирование в буфер
    function copyToClipboard() {
        const text = promptOutput.textContent;

        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text).then(() => {
                showCopyStatus('✅ Промпт скопирован в буфер обмена!');
            }).catch(err => {
                console.error('Clipboard API failed:', err);
                fallbackCopy(text);
            });
        } else {
            fallbackCopy(text);
        }
    }

    function fallbackCopy(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            const successful = document.execCommand('copy');
            showCopyStatus(successful ? '✅ Промпт скопирован!' : '❌ Не удалось скопировать.');
        } catch (err) {
            showCopyStatus('❌ Не удалось скопировать. Скопируйте вручную.');
        }
        document.body.removeChild(textArea);
    }

    function showCopyStatus(message) {
        copyStatus.textContent = message;
        copyStatus.style.opacity = '1';
        setTimeout(() => {
            copyStatus.style.opacity = '0';
        }, 3000);
    }

    // Открытие в Gemini
    function openGemini() {
        const text = promptOutput.textContent;

        const geminiUrl = 'https://gemini.google.com/u/1/app?pageId=none';

        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text).then(() => {
                showCopyStatus('✅ Промпт скопирован! Открываю Gemini...');
                setTimeout(() => {
                    window.open(geminiUrl, '_blank');
                }, 500);
            }).catch(() => {
                fallbackCopy(text);
                window.open(geminiUrl, '_blank');
            });
        } else {
            fallbackCopy(text);
            window.open(geminiUrl, '_blank');
        }
    }

    // Привязываем события
    if (generateBtn) generateBtn.addEventListener('click', generatePrompt);
    if (randomBtn) randomBtn.addEventListener('click', randomSelect);
    if (copyBtn) copyBtn.addEventListener('click', copyToClipboard);
    if (geminiBtn) geminiBtn.addEventListener('click', openGemini);

    // Сброс красной рамки при выборе
    for (const key in selects) {
        if (selects[key]) {
            selects[key].addEventListener('change', () => {
                selects[key].style.borderColor = '';
            });
        }
    }

    console.log('All event listeners attached');
});
