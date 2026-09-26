# Места под графику

Графику из Figma пользователь выгрузит отдельно. Сейчас страница не загружает ни SVG, ни PNG: до передачи файлов в разметке оставлены пустые элементы с атрибутом `data-asset-slot`.

Слоты по секциям:

- Шапка и подвал: `header-logo` и `footer-logo` — пустые места 186 × 39 px под логотип «ВидеоМОНТАЖ».
- Кнопки и интерфейс: `buy-icon`, `subscription-icon`, `faq-chevron`.
- Первый экран: `hero-newyear`, `hero-wedding`, `hero-birthday` — по 260 × 190 px в карточках.
- Статистика: `stat-templates`, `stat-effects`, `stat-footage`, `stat-music` — по 36 × 36 px.
- Категории: `category-stickers`, `category-frames`, `category-templates`, `category-footage` — блоки высотой 130 px на десктопе.
- Подборки: `collection-birthday`, `collection-wedding`, `collection-newyear`. При выборе остальных тем появляется пустой слот `collection-<код темы>`.
- Шаблоны: `template-<код темы>` (560 × 412 px на десктопе). Код меняется при выборе тематической метки.
- Сценарии: `occasion-family`, `occasion-travel`, `occasion-kids`, `occasion-work`.
- Скриншот редактора в блоке «Для кого»: `audience-editor` (высота блока 540 px).
- Остальные значки: `benefit-time`, `benefit-result`, `benefit-no-install`, `benefit-new`, `benefit-inspiration`, `benefit-quality`, `comparison-before`, `comparison-after`, `audience-check`, `pricing-check`.

Размеры самих экспортируемых файлов и итоговое кадрирование уточним после получения графики. Имеющиеся в каталоге `hero-*.png` сейчас не подключены к странице и сохранены без изменений.
