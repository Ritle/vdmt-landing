# История разработки — prompt / response

Ниже сохранена история текущей разработки лендинга МедиаШОУ+ в формате «промт → ответ».

---

## 1. Считать Figma и сделать лендинг

### Prompt

> мне нужно считать макет фигмы и сделать лендинг используя css/js/html

Figma:
`https://www.figma.com/design/xUerflKJsw1O1eE0nqX7iD/...?...node-id=10-2...`

### Response

Макет был считан из Figma. Определены:

- структура страницы;
- размеры секций;
- типографика;
- цвета;
- основные блоки;
- изображения и SVG-ассеты;
- header;
- hero;
- статистика;
- блок «Всё уже внутри редактора»;
- тематические подборки;
- «Видео по шаблону»;
- «Что меняется с МедиаШОУ+»;
- «Для кого создан МедиаШОУ+»;
- тариф;
- FAQ;
- footer.

Стек реализации: чистые HTML / CSS / JavaScript.

---

## 2. Реализовать лендинг в GitHub-репозитории

### Prompt

> https://github.com/Ritle/vdmt-landing.git сделай реализацию лендинга

### Response

Репозиторий был проверен: изначально в нём находился только `README.md`.

Создана ветка:

```text
feat/figma-landing
```

Добавлены:

```text
index.html
styles.css
script.js
README.md
```

Реализованы:

- header;
- hero;
- статистика 1000+ / 3000+ / 2000+;
- блок «Всё уже внутри редактора»;
- тематические подборки;
- «Видео по шаблону»;
- преимущества;
- «Было / Стало»;
- «Для кого»;
- тариф 990 ₽;
- FAQ;
- footer;
- мобильное меню;
- плавная навигация;
- FAQ-аккордеон;
- переключение табов;
- адаптивная верстка.

Создан Pull Request:

`https://github.com/Ritle/vdmt-landing/pull/1`

---

## 3. Как проверить результат

### Prompt

> как можно проверить результат?

### Response

Для локального запуска:

```bash
git clone https://github.com/Ritle/vdmt-landing.git
cd vdmt-landing
git checkout feat/figma-landing
python -m http.server 8080
```

После этого открыть:

```text
http://localhost:8080
```

---

## 4. Порт 8080 уже занят

### Prompt

> http://localhost:8080 другой сервис открыт

### Response

Предложено использовать другой порт, например:

```bash
python -m http.server 8081
```

И открыть:

```text
http://localhost:8081
```

Для проверки занятого порта в Windows:

```bash
netstat -ano | findstr :8080
```

---

## 5. Исправить hero-блок с карточками

### Prompt

> поправь этот блок

Пользователь приложил референс с тремя карточками:

- Новый год;
- Свадьба;
- День рождения.

### Response

Hero-композиция была скорректирована.

На первом этапе использовался единый визуал с карточками, чтобы приблизить внешний вид к референсу.

Изменения были добавлены в ветку:

```text
feat/figma-landing
```

---

## 6. Разбить hero-композицию на отдельные карточки

### Prompt

> разбей это на отдельные блоки чтобы я мог подставить свои изображения

### Response

Монолитный hero-визуал был заменён на три независимые HTML-карточки.

Теперь каждая карточка имеет:

- собственное изображение;
- отдельную подпись;
- отдельный бейдж `NEW`;
- собственный наклон;
- независимую позицию.

Используемые изображения:

```text
assets/hero-newyear.jpg
assets/hero-wedding.jpg
assets/hero-birthday.jpg
```

Пример карточки:

```html
<article
  class="event-card event-newyear"
  style="--card-image: url('assets/hero-newyear.jpg');"
>
  <div class="event-card__media"></div>

  <footer class="event-card__footer">
    <span>🎆 Новый год</span>
    <em>NEW</em>
  </footer>
</article>
```

Изображение автоматически заполняет область карточки через:

```css
background-size: cover;
background-position: center;
```

Старый общий файл `assets/hero-cards.svg` был удалён.

Также создана инструкция:

```text
assets/README.md
```

---

# Текущее состояние

Основная рабочая ветка:

```text
feat/figma-landing
```

Pull Request:

`https://github.com/Ritle/vdmt-landing/pull/1`

Для получения последних изменений:

```bash
git checkout feat/figma-landing
git pull
```

Для запуска:

```bash
python -m http.server 8081
```

Открыть:

```text
http://localhost:8081
```
