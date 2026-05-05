// Ждём полной загрузки DOM перед привязкой обработчиков
document.addEventListener('DOMContentLoaded', function() {

    // Получаем элементы
    const generateBtn = document.getElementById('generateBtn');
    const randomBtn = document.getElementById('randomBtn');
    const copyBtn = document.getElementById('copyBtn');
    const claudeBtn = document.getElementById('claudeBtn');
    const resultCard = document.getElementById('resultCard');
    const promptOutput = document.getElementById('promptOutput');
    const copyStatus = document.getElementById('copyStatus');
    const copyImageBtn = document.getElementById('copyImageBtn');
    const imagePromptOutput = document.getElementById('imagePromptOutput');
    const copyImageStatus = document.getElementById('copyImageStatus');

    const selects = {
        heroine: document.getElementById('heroine'),
        antagonist: document.getElementById('antagonist'),
        betrayal: document.getElementById('betrayal'),
        revelation: document.getElementById('revelation'),
        sacrifice: document.getElementById('sacrifice'),
        ending: document.getElementById('ending'),
        setting: document.getElementById('setting'),
        narrative: document.getElementById('narrative'),
        tone: document.getElementById('tone'),
        twist: document.getElementById('twist'),
        heroine_char: document.getElementById('heroine_char'),
        antagonist_mask: document.getElementById('antagonist_mask'),
        ally: document.getElementById('ally'),
        title_style: document.getElementById('title_style'),
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

💎 ХАРАКТЕР ГЕРОИНИ:
${values.heroine_char}

😈 АНТАГОНИСТ:
${values.antagonist}

🎭 МАСКА АНТАГОНИСТА (как именно притворяется хорошим):
${values.antagonist_mask}

💔 СУТЬ КОНФЛИКТА (предательство):
${values.betrayal}

🔍 СПОСОБ ОТКРЫТИЯ ПРАВДЫ:
${values.revelation}

💸 ЧТО ГЕРОИНЯ ОТДАЛА/ПОТЕРЯЛА:
${values.sacrifice}

🤝 СОЮЗНИК ГЕРОИНИ:
${values.ally}

🏆 ФИНАЛ:
${values.ending}

🌍 СЕТТИНГ:
${values.setting}

⏳ ТОЧКА ВХОДА В ИСТОРИЮ:
${values.narrative}

🎙 ТОН ПОВЕСТВОВАНИЯ:
${values.tone}

🔄 ПОВОРОТ СЮЖЕТА:
${values.twist}

📰 СТИЛЬ ЗАГОЛОВКА:
${values.title_style}

📏 ОБЪЁМ:
${values.length}

═══════════════════════════════════════════
🚨 КРИТИЧЕСКОЕ ТРЕБОВАНИЕ К ОБЪЁМУ ТЕКСТА
═══════════════════════════════════════════

Указанный выше диапазон слов — это ЖЁСТКОЕ ТРЕБОВАНИЕ, а не рекомендация.

ОБЯЗАТЕЛЬНО:
• Рассказ должен укладываться РОВНО в указанный диапазон слов (не меньше нижней границы и не больше верхней)
• Если выбрана "Короткая" — итоговый текст ДОЛЖЕН содержать от 1800 до 2200 слов
• Если выбрана "Средняя" — итоговый текст ДОЛЖЕН содержать от 2200 до 2600 слов
• Если выбрана "Длинная" — итоговый текст ДОЛЖЕН содержать от 2600 до 3000 слов
• Заголовок в подсчёт слов НЕ ВХОДИТ — считаются только слова основного текста рассказа

КАК ДОСТИЧЬ НУЖНОГО ОБЪЁМА:
• Не сокращай сцены — каждая часть истории должна быть раскрыта полноценно
• Добавляй детали быта, описания обстановки, внутренние монологи героини
• Расширяй диалоги — давай персонажам говорить достаточно, чтобы раскрыть характеры
• Включай побочные сцены: разговор с подругой, эпизод с детьми, воспоминание из прошлого
• Подробно описывай эмоции, ощущения, мысли героини в ключевые моменты
• Не "пересказывай" события — ПРОЖИВАЙ их вместе с читателем

ПРОВЕРКА ПЕРЕД ОТПРАВКОЙ ОТВЕТА:
1. Мысленно пересчитай примерный объём написанного текста
2. Если получилось меньше нижней границы — РАСШИРЬ сцены, добавь глубины описаниям, диалогам и внутренним монологам, и продолжи писать, пока не достигнешь требуемого объёма
3. Если получилось больше верхней границы — сократи второстепенные детали
4. ТОЛЬКО ПОСЛЕ этого выводи финальный текст

ЗАПРЕЩЕНО выдавать рассказ короче нижней границы выбранного диапазона. Это критично для публикации на канале.

═══════════════════════════════════════════
🚨 КРИТИЧЕСКОЕ ТРЕБОВАНИЕ К ФОРМАТУ ВЫВОДА
═══════════════════════════════════════════

Рассказ должен быть выведен как ЕДИНЫЙ СПЛОШНОЙ ХУДОЖЕСТВЕННЫЙ ТЕКСТ.

СТРОГО ЗАПРЕЩЕНО в финальном тексте:
❌ Любые подзаголовки внутри рассказа ("Завязка", "Кульминация", "Эпилог", "Часть 1", "Глава 1" и т.п.)
❌ Названия композиционных частей и римские/арабские цифры разделов
❌ Markdown-разметка: # ## ### **жирный** *курсив* — никаких символов форматирования
❌ Звёздочки, решётки, разделители (---, ***, ═══)
❌ Списки с маркерами (•, -, 1., 2.)
❌ Метки времени или сцен в скобках типа "[Спустя месяц]", "(Сцена в суде)"
❌ Любые служебные пометки автора

РАЗРЕШЕНО:
✅ Только заголовок рассказа в самом начале (одной строкой, без значка #)
✅ Обычные абзацы, разделённые пустой строкой
✅ Прямая речь через тире, как принято в русской литературе
✅ Естественные переходы между сценами через художественные связки ("Прошёл месяц.", "В тот вечер...", "Через неделю Анна...")

Структура ниже — это твой ВНУТРЕННИЙ ПЛАН. Следуй ей при построении сюжета, но НЕ озаглавливай эти части в самом тексте. Читатель должен видеть цельную живую историю, а не разбитый по разделам конспект.

═══════════════════════════════════════════
КАК ИСПОЛЬЗОВАТЬ НОВЫЕ ПАРАМЕТРЫ
═══════════════════════════════════════════

🌍 СЕТТИНГ — пронизывает весь рассказ:
• Провинциальный город: слухи, соседи-свидетели, невозможность скрыться, местные связи
• Мегаполис: анонимность, дорогая недвижимость, деловая среда, юристы и банки
• Дача/деревня: земля и наследство, соседи, природа как фон, родственные узы
• Закрытое сообщество: коллеги знают всё, репутация — главная ставка

⏳ ТОЧКА ВХОДА — определяет структуру подачи:
• Хронология: начни с обычной жизни, веди к кульминации
• С разоблачения: первая сцена — шок, потом флэшбэки
• Из будущего: «Сейчас я счастлива. Но год назад...»
• С финала: «Когда я подписывала документы на новую квартиру, я вспоминала...»
• In medias res: первая сцена — уже конфликт в разгаре

🎙 ТОН — голос героини звучит именно так на протяжении всего рассказа:
• Холодный/расчётливый: короткие чёткие фразы, анализ, план
• Горький/ироничный: «как я могла не замечать», внутренние усмешки
• Гневный/прямой: сильные эмоциональные образы, открытая боль
• Сдержанный/достойный: факты, минимум эмоций, действия говорят сами
• Усталый/мудрый: философские наблюдения, принятие, твёрдость без злости

🔄 ПОВОРОТ — встраивается органично, не как трюк, а как часть логики истории:
• Если поворота нет — сила в деталях и характерах
• Антагонист-жертва: не оправдывает его, но добавляет глубину
• Союзник-предатель: вводи его как надёжного — удар должен быть неожиданным
• Героиня знала подсознательно: вплети знаки в завязку — читатель потом скажет «я же видел»
• Публичный триумф: те же люди, что видели унижение, видят и победу
• Неожиданный помощник: может быть кто угодно — бывший коллега, случайный сосед
• Антагонист разоблачает себя: жадность, хвастовство, случайная оговорка
• Не первая жертва: героиня находит других пострадавших — это укрепляет её позицию

💎 ХАРАКТЕР ГЕРОИНИ — определяет её внутренний голос и реакции:
• Терпеливая мученица: долгое молчание, копящаяся боль, взрыв в финале
• Сильная но наивная: покажи её уверенность в профессии — и слепоту в любви
• Циничная снаружи: пусть читатель видит, как трудно ей признать, что она тоже поверила
• Тихая с стержнем: минимум слов, максимум действий — решения принимаются молча
• Усталая: покажи через детали быта — как она перестала следить за собой, за домом
• Гордая: гордость мешает попросить помощь — и именно это делает победу слаще
• Добрая: каждая её помощь антагонисту должна отзываться болью у читателя
• Реалистка: она замечала несостыковки — но рациональный ум придумывал объяснения

🎭 МАСКА АНТАГОНИСТА — показывай её постепенно, слой за слоем:
• Сначала маска кажется убедительной — читатель тоже должен «попасться»
• Постепенно появляются трещины — маленькие детали, которые что-то не то
• В кульминации маска слетает полностью — и это должно быть страшно и облегчительно одновременно
• Каждый тип маски имеет свою «фирменную» фразу — придумай её для антагониста

🤝 СОЮЗНИК — встраивается органично:
• Появляется тогда, когда героиня уже почти сдалась или совсем одна
• Его роль — не решить за неё, а дать ей инструмент или информацию
• Союзник сам может быть несовершенным, со своей историей
• Если героиня одна — её внутренний монолог в момент принятия решения и есть союзник

📰 ЗАГОЛОВОК — строго по выбранному стилю, используй конкретные детали из рассказа:
• Число+факт: реальные цифры из истории (лет брака, сумма в рублях, месяцев обмана)
• Парадокс: первое действие героини — её доброта, второе — как оно обернулось
• Вопрос: задай его так, чтобы читатель не мог не кликнуть
• От первого лица: конкретная деталь, которая есть в рассказе — вещь, место, момент
• Контраст: «тогда» — максимально унизительно, «сейчас» — максимально победно

🎯 ЯКОРНЫЕ ДЕТАЛИ — обязательные элементы живой истории:
В каждой сцене должна быть минимум одна конкретная деталь:
• Вещи: конкретная марка чашки, цвет шторы, запах духов антагониста
• Цифры: точная сумма в рублях, дата, количество лет
• Звуки: скрип двери, тон голоса, звук уведомления на телефоне
• Физические ощущения: как похолодели руки, как остановилось дыхание
Эти детали делают историю настоящей — читатель чувствует, что это случилось

⚡ МОМЕНТ ВЫБОРА героини — обязательная сцена:
Должна быть чёткая сцена, где героиня принимает решение действовать. Не «она решила» — а показано как: что она делала в этот момент, где была, что почувствовала. Это поворотная точка всей истории.═══════════════════════════════════════════

ЧАСТЬ 1 — ЗАГОЛОВОК (вывести в тексте)
Строго следуй выбранному стилю заголовка. Примеры разных стилей:
• Число+факт: "25 лет я экономила на себе, веря, что мы копим на спокойную старость. А муж уже 5 лет платил ипотеку своей секретарше."
• Парадокс: "Приютила 'бедную' троюродную сестру из деревни. А она за месяц настроила против меня детей и попыталась поменять замки в моей же квартире."
• От первого лица: "Родная сестра со слезами выманила деньги на операцию. Я продала машину, а потом увидела её новые фото с Мальдив... в обнимку с моим мужем."

ЧАСТЬ 2 — ЗАВЯЗКА (10-15% текста, без подзаголовка)
• Подробное описание обычной жизни героини
• Детальный быт: что носит, как выглядит дом, чем пахнет на кухне
• Намёк на жертвенность героини и её "правильность"
• Ключевая деталь, которая позже сыграет роль

ЧАСТЬ 3 — ПОЯВЛЕНИЕ ПРОБЛЕМЫ (15-20% текста, без подзаголовка)
• Описание антагониста с маской добродетели
• Просьба о помощи / акт жертвы со стороны героини
• Внутренние сомнения героини, которые она подавляет
• Героиня поступает "правильно" и помогает

ЧАСТЬ 4 — ЭСКАЛАЦИЯ (20-25% текста, без подзаголовка)
• Антагонист постепенно наглеет / захватывает территорию
• Героиня терпит, оправдывает, винит себя
• Близкие (муж, дети) встают на сторону антагониста
• Атмосфера становится невыносимой

ЧАСТЬ 5 — МОМЕНТ ИСТИНЫ (10% текста, без подзаголовка)
• Случайное открытие правды (по выбранному способу)
• Шок, оцепенение, внутренний слом
• НЕ истерика, а ледяное спокойствие
• Решение действовать

ЧАСТЬ 6 — ХОЛОДНАЯ ПОДГОТОВКА К РАЗВЯЗКЕ (10-15% текста, без подзаголовка)
• Героиня собирает доказательства
• Консультируется с адвокатом / собирает документы / делает скриншоты
• Внешне продолжает играть прежнюю роль
• Внутренне уже трансформировалась

ЧАСТЬ 7 — КУЛЬМИНАЦИЯ И РАЗОБЛАЧЕНИЕ (15-20% текста, без подзаголовка)
• Драматическая сцена конфронтации
• Маска антагониста СЛЕТАЕТ — он показывает истинное лицо
• Героиня говорит спокойно, но каждое слово как удар
• Свидетели (муж, родственники, гости) шокированы
• Документы / доказательства на столе

ЧАСТЬ 8 — РАЗВЯЗКА (10% текста, без подзаголовка)
• Финал по выбранному варианту
• Антагонист наказан (по закону / общественно / морально)
• Героиня уходит свободной

ЧАСТЬ 9 — ЭПИЛОГ (5-10% текста, без подзаголовка)
• Перейти к нему естественной фразой ("Прошёл год.", "Полгода спустя...")
• Новая жизнь героини: она расцвела
• Антагонист разрушен (спился / разорился / одинок)
• Финальная символическая сцена (новая машина / дом / любовь)
• Главная мысль рассказа в одной-двух фразах

═══════════════════════════════════════════
🚨 КРИТИЧЕСКОЕ ТРЕБОВАНИЕ: ДИАЛОГИ
═══════════════════════════════════════════

Диалоги — это ГЛАВНЫЙ инструмент драмы. Именно через реплики раскрываются характеры, нарастает напряжение и наносятся самые сильные удары. Не пересказывай — показывай через прямую речь.

ЖЁСТКИЕ ПРАВИЛА:
• Не менее 35% текста должна составлять прямая речь — реплики через тире
• ЗАПРЕЩЕНО заменять диалог пересказом. Нельзя писать «она сказала, что больше так не может» — нужно писать «— Я больше так не могу», — сказала она тихо, не глядя на него»
• Нельзя идти без диалога дольше 6 предложений подряд — вставляй реплику
• Диалог меняется в зависимости от этапа истории:

ДО ПРЕДАТЕЛЬСТВА — тёплые, бытовые, живые:
— Ты опять забыла выключить утюг, — сказал он из коридора.
— Я никогда не забываю утюг. Это ты забываешь закрыть тюбик зубной пасты.
— Это художественный беспорядок.
— Это свинство, Андрей.

МОМЕНТ РАЗОБЛАЧЕНИЯ — холодные, чёткие, без лишних слов:
— Объясни мне вот это, — она положила распечатку на стол.
— Это не то, что ты думаешь.
— Я думаю, это выписка со счёта на имя Светланы Ковалёвой. Я правильно думаю?
Он молчал.
— Значит, правильно.

КУЛЬМИНАЦИЯ — героиня говорит спокойно, каждое слово как удар:
— Ты хочешь что-то сказать? — спросила она.
— Таня, послушай...
— Нет. — Она подняла папку. — Теперь говорю я.

• Антагонист в диалогах должен ОБНАЖАТЬ своё истинное лицо — сначала маска добродетели, потом срыв
• Героиня в кульминации говорит МЕНЬШЕ, чем антагонист — но каждая её фраза весомее

ПРИМЕРЫ ЗАПРЕЩЁННОГО ПЕРЕСКАЗА vs ПРАВИЛЬНОГО ДИАЛОГА:

Плохо: «Свекровь снова унизила её перед гостями, намекнув на её происхождение.»
Хорошо:
— Ниночка, ну что ты опять подала эти... котлеты, — свекровь улыбнулась гостям. — У нас в семье всегда готовили иначе. Но что поделать.
— Мне нравятся её котлеты, — сказал муж, не отрываясь от телефона.
— Конечно, тебе нравится всё, — вздохнула свекровь.

Плохо: «Адвокат сказал, что у неё сильная позиция.»
Хорошо:
— Какие у меня шансы? — спросила она прямо.
— Хорошие, — сказал адвокат, листая документы. — Очень хорошие. Они наделали ошибок.
— Сколько?
— Достаточно, чтобы вы уехали отсюда с тем, что вам принадлежит.

═══════════════════════════════════════════
СТИЛИСТИЧЕСКИЕ ТРЕБОВАНИЯ
═══════════════════════════════════════════

✅ ОБЯЗАТЕЛЬНО:
• Повествование от первого или третьего лица — строго в выбранном тоне на протяжении всего рассказа
• Якорные детали в каждой сцене: конкретная вещь, запах, звук, сумма в рублях, дата
• Диалоги составляют не менее 35% текста — реплики через тире, каждый персонаж говорит по-своему
• Внутренние монологи героини — короткие, точные, в выбранном тоне
• Маска антагониста раскрывается постепенно — сначала убедительная, потом трещины, потом слом
• Обязательная сцена МОМЕНТА ВЫБОРА: показано как именно героиня принимает решение действовать
• Союзник появляется в нужный момент — его роль конкретна и органична
• Контраст: тёплые бытовые детали ДО предательства vs холодная решимость ПОСЛЕ
• Конкретные суммы денег (рубли), названия документов (ЕГРН, выписки, договоры)
• Реалистичные детали: суды, адвокаты, банки, полиция — не «пошла к юристу», а конкретный разговор
• Сеттинг работает на сюжет: провинция даёт слухи, мегаполис — анонимность, деревня — землю

❌ ИЗБЕГАЙ:
• Пересказа вместо диалога — это главная ошибка, убивающая драму
• Истерик и слезливости героини — сила молчания страшнее крика
• Сказочных совпадений (всё должно быть правдоподобно)
• Общих фраз без деталей: не «она была расстроена», а «руки не слушались, чашка выскользнула»
• Морализаторства автора (мораль доносится через действия, не через авторский комментарий)
• Затянутых описаний без диалога (более 6 предложений подряд без реплики)
• ЛЮБЫХ подзаголовков, нумерации частей, markdown-разметки в финальном тексте

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

Напиши законченный рассказ согласно всем параметрам и внутреннему плану выше. Рассказ должен:
• Цеплять с первой строки
• Держать читателя в напряжении до конца
• Вызывать эмоциональный отклик (гнев на антагониста, восхищение героиней)
• Заканчиваться катарсисом и торжеством справедливости
• СТРОГО соответствовать выбранному диапазону слов (см. блок про объём выше)

ФОРМАТ ОТВЕТА: одна строка с заголовком, пустая строка, далее — сплошной художественный текст рассказа, разбитый только на абзацы. Никаких подзаголовков, никаких разделителей, никакой markdown-разметки. Ответ начни сразу с заголовка рассказа, без вступительных фраз вроде "Конечно, вот ваш рассказ:" или "Заголовок:".

🚨 ФИНАЛЬНОЕ НАПОМИНАНИЕ ПЕРЕД НАЧАЛОМ ГЕНЕРАЦИИ:
Прежде чем закончить рассказ — убедись, что объём текста попадает в требуемый диапазон слов. Если текст оказался короче нижней границы, продолжай писать: расширяй сцены, добавляй внутренние монологи, диалоги, бытовые детали, побочные эпизоды. Не останавливайся, пока не достигнешь нижней границы диапазона. Это обязательное требование.`;

            promptOutput.textContent = prompt;

            // Генерируем промпт для изображения
            const imagePrompt = generateImagePrompt(values);
            imagePromptOutput.textContent = imagePrompt;

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

    // Открытие в Claude
    function openClaude() {
        const text = promptOutput.textContent;

        // claude.ai поддерживает Universal Links на iOS и App Links на Android —
        // если приложение установлено, ОС сама предложит/откроет его.
        // На Windows десктопное приложение Claude не регистрирует свою URI-схему,
        // поэтому всегда открывается браузер (пользователь может сам переключиться в приложение).
        const claudeUrl = 'https://claude.ai/new';

        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text).then(() => {
                showCopyStatus('✅ Промпт скопирован! Открываю Claude...');
                setTimeout(() => {
                    window.open(claudeUrl, '_blank');
                }, 500);
            }).catch(() => {
                fallbackCopy(text);
                window.open(claudeUrl, '_blank');
            });
        } else {
            fallbackCopy(text);
            window.open(claudeUrl, '_blank');
        }
    }
    if (generateBtn) generateBtn.addEventListener('click', generatePrompt);
    if (randomBtn) randomBtn.addEventListener('click', randomSelect);
    if (copyBtn) copyBtn.addEventListener('click', copyToClipboard);
    if (geminiBtn) geminiBtn.addEventListener('click', openGemini);
    if (claudeBtn) claudeBtn.addEventListener('click', openClaude);
    if (copyImageBtn) copyImageBtn.addEventListener('click', () => {
        const text = imagePromptOutput.textContent;
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text).then(() => {
                copyImageStatus.textContent = '✅ Промпт для обложки скопирован!';
                copyImageStatus.style.opacity = '1';
                setTimeout(() => { copyImageStatus.style.opacity = '0'; }, 3000);
            }).catch(() => fallbackCopyImage(text));
        } else { fallbackCopyImage(text); }
    });

    function fallbackCopyImage(text) {
        const ta = document.createElement('textarea');
        ta.value = text; ta.style.position = 'fixed'; ta.style.left = '-999999px';
        document.body.appendChild(ta); ta.focus(); ta.select();
        try {
            const ok = document.execCommand('copy');
            copyImageStatus.textContent = ok ? '✅ Скопировано!' : '❌ Не удалось скопировать.';
        } catch { copyImageStatus.textContent = '❌ Скопируйте вручную.'; }
        copyImageStatus.style.opacity = '1';
        setTimeout(() => { copyImageStatus.style.opacity = '0'; }, 3000);
        document.body.removeChild(ta);
    }

    // Генерация промпта для обложки (драматический стиль)
    // Фото строится из деталей конфликта — без split-композиции
    function generateImagePrompt(values) {

        // Внешность героини по профессии
        const heroineMap = {
            'Вдова': 'Russian woman, late 40s, tired dignified face, simple neat clothing',
            'Финансовый': 'Russian woman, late 30s, professional look, elegant business attire',
            'Жена бизнесмена': 'Russian woman, early 40s, well-dressed, composed expression',
            'Мать взрослого': 'Russian woman, early 50s, warm face, modest clothing',
            'Работающая мать': 'Russian woman, mid-30s, strong but exhausted, casual clothes',
            'Главбух': 'Russian woman, mid-40s, strict posture, glasses, office attire',
            'Редактор': 'Russian woman, late 30s, creative style, casual elegant',
            'Логист': 'Russian woman, early 40s, confident, business casual',
            'Учительница': 'Russian woman, mid-40s, kind but firm face, modest dress',
            'Медсестра': 'Russian woman, late 30s, compassionate tired face',
            'Предпринимательница': 'Russian woman, late 30s, confident powerful, stylish outfit',
            'Дизайнер': 'Russian woman, early 40s, artistic appearance, creative clothing',
            'Юрист': 'Russian woman, late 30s, sharp intelligent eyes, strict suit',
            'Психолог': 'Russian woman, early 40s, thoughtful calm face, professional look',
            'Журналист': 'Russian woman, late 30s, determined look, smart casual',
            'Рестораторша': 'Russian woman, early 40s, energetic, business casual',
            'Программист': 'Russian woman, mid-30s, smart casual, glasses',
            'Фрилансер': 'Russian woman, early 30s, home casual, tired look',
        };

        let heroine = 'Russian woman in her 40s, strong and dignified';
        for (const [key, val] of Object.entries(heroineMap)) {
            if (values.heroine && values.heroine.includes(key)) { heroine = val; break; }
        }

        // Атмосфера и локация из сеттинга
        const settingMap = {
            'провинциальный': 'small Russian town, old apartment building, neighbours watching from windows',
            'Мегаполис': 'modern Moscow or Saint Petersburg apartment interior, city lights in background',
            'Дача': 'Russian dacha or countryside house, garden, wooden fence, birch trees',
            'региональный': 'mid-size Russian city street, Soviet-era architecture',
            'профессиональное': 'office corridor, conference room, professional environment',
            'Новостройка': 'modern apartment complex, sterile hallway, elevator door',
            'Курортный': 'southern Russian city, warm light, palm trees or sea in background',
            'Зарубежье': 'foreign city street, unfamiliar architecture, isolated feeling',
        };
        let location = 'Russian apartment interior, dramatic lighting';
        for (const [key, val] of Object.entries(settingMap)) {
            if (values.setting && values.setting.includes(key)) { location = val; break; }
        }

        // Ключевой предмет из предательства
        const betrayalProps = {
            'Финансовое': 'bank statements spread on a table, numbers highlighted in red',
            'Захват жилья': 'changed door lock, keys on the floor',
            'Фальшивая': 'medical documents with stamps, prescription papers',
            'унижение': 'crowded room, frozen faces of witnesses',
            'детьми': 'child standing between two adults, looking confused',
            'ипотека': 'mortgage documents, second set of keys',
            'кредиты': 'stack of debt notices, credit cards',
            'Шантаж': 'phone screen with threatening messages',
            'наследство': 'will documents, notary seal',
            'Клевета': 'smartphone with social media posts, shocked face',
            'дарственная': 'property transfer documents with signature',
            'Тайный ребёнок': 'birth certificate, child photo hidden in wallet',
            'Двойная жизнь': 'two phones, two sets of keys, hotel receipt',
            'завещания': 'official document with forged signature',
            'Газлайтинг': 'woman looking at herself in mirror, uncertain expression',
        };
        let prop = 'important documents on a table, dramatic shadows';
        for (const [key, val] of Object.entries(betrayalProps)) {
            if (values.betrayal && values.betrayal.includes(key)) { prop = val; break; }
        }

        // Эмоция героини из тона
        const toneEmotion = {
            'Холодный': 'ice-cold determined expression, composed, calculating gaze',
            'Горький': 'bitter half-smile, knowing eyes, quiet sorrow',
            'Гневный': 'barely contained fury, jaw set, intense eyes',
            'Сдержанный': 'dignified silence, straight posture, quiet strength',
            'Усталый': 'tired wisdom in eyes, deep calm after a storm',
        };
        let emotion = 'strong composed expression, quiet dignity';
        for (const [key, val] of Object.entries(toneEmotion)) {
            if (values.tone && values.tone.includes(key)) { emotion = val; break; }
        }

        // Световая атмосфера из финала
        const endingLight = values.ending && (
            values.ending.includes('карьера') || values.ending.includes('любовь') ||
            values.ending.includes('переезд') || values.ending.includes('книга') ||
            values.ending.includes('свобода') || values.ending.includes('уход')
        )
            ? 'warm golden light entering from the side, hopeful atmosphere'
            : 'dramatic cinematic lighting, strong contrast, shadows and light fighting';

        return `Cinematic photorealistic cover image for a Russian drama story, horizontal 16:9 format, high quality, no text, no watermarks.

Main subject: ${heroine}, ${emotion}.

Setting: ${location}.

Key story element in frame: ${prop}.

Lighting: ${endingLight}.

Composition: the woman is the emotional center of the frame, story details surround her naturally — not staged, but as if caught in a real moment. Close-up or medium shot, shallow depth of field, sharp focus on her face and the key prop.

Style: cinematic photorealism, Russian TV drama quality, emotionally charged, authentic Russian domestic or urban environment. Natural skin textures, real fabric details, believable props. No artificial studio look — this feels like a real moment captured.

Technical: 16:9 aspect ratio, 1280x720px minimum, film grain texture, rich color grading with desaturated midtones and warm or cold accent depending on the lighting.`;
    }

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
