import { join, dirname } from "path";
import { fileURLToPath } from "url";

const rootDir = dirname(fileURLToPath(import.meta.url));

const quizData = {
  "01-00-getting-started": [
    {
      id: 1,
      question:
        "Какой способ подключения CSS используется для быстрой настройки стилей конкретного элемента?",
      answers: [
        { id: "a", answer: "Внешние стили (external)", correct: false },
        { id: "b", answer: "Встроенные стили (inline)", correct: true },
        { id: "c", answer: "Внутренние стили (internal)", correct: false },
        { id: "d", answer: "Системные стили браузера", correct: false },
      ],
      explanation:
        "Встроенные стили (inline) используют атрибут `style` для задания стилей конкретного элемента.",
    },
    {
      id: 2,
      question: "Где размещаются внутренние (internal) стили в HTML-документе?",
      answers: [
        {
          id: "a",
          answer: "Внутри тега `<style>` в `<body>`",
          correct: false,
        },
        { id: "b", answer: "Внутри атрибута `style`", correct: false },
        {
          id: "c",
          answer: "Внутри тега `<style>` в `<head>`",
          correct: true,
        },
        { id: "d", answer: "В отдельном CSS-файле", correct: false },
      ],
      explanation:
        "Внутренние стили размещаются внутри тега `<style>`, который располагается в `<head>` HTML-документа.",
    },
    {
      id: 3,
      question: "Каким образом подключаются внешние CSS-стили?",
      answers: [
        { id: "a", answer: "С помощью тега `<style>`", correct: false },
        { id: "b", answer: "С помощью атрибута `style`", correct: false },
        { id: "c", answer: "С помощью тега `<link>`", correct: true },
        { id: "d", answer: "С помощью атрибута `src`", correct: false },
      ],
      explanation:
        "Внешние CSS-стили подключаются через тег `<link>` в секции `<head>`.",
    },
    {
      id: 4,
      question:
        "Что произойдет, если два внешних CSS-файла содержат одинаковые селекторы с разными стилями?",
      answers: [
        {
          id: "a",
          answer: "Применятся стили из первого файла",
          correct: false,
        },
        {
          id: "b",
          answer: "Применятся стили из последнего файла",
          correct: true,
        },
        {
          id: "c",
          answer: "Стили из обоих файлов объединятся",
          correct: false,
        },
        { id: "d", answer: "Стили не будут применены", correct: false },
      ],
      explanation:
        "При конфликте одинаковых селекторов стили из последнего подключенного файла имеют приоритет.",
    },
    {
      id: 5,
      question:
        "Какое свойство можно использовать для предотвращения конфликтов стилей в крупных проектах?",
      answers: [
        { id: "a", answer: "Использование `!important`", correct: false },
        {
          id: "b",
          answer: "Методология нейминга, например, BEM",
          correct: true,
        },
        {
          id: "c",
          answer: "Удаление всех конфликтующих файлов",
          correct: false,
        },
        {
          id: "d",
          answer: "Разделение CSS-файлов на разные папки",
          correct: false,
        },
      ],
      explanation:
        "Методология нейминга, например BEM, помогает избежать конфликтов стилей за счет уникальных имен классов.",
    },
    {
      id: 6,
      question:
        "Какой способ подключения стилей более эффективен для масштабируемых проектов?",
      answers: [
        { id: "a", answer: "Встроенные стили (inline)", correct: false },
        { id: "b", answer: "Внутренние стили (internal)", correct: false },
        { id: "c", answer: "Внешние стили (external)", correct: true },
        { id: "d", answer: "Медиа-запросы", correct: false },
      ],
      explanation:
        "Внешние стили (external) позволяют держать CSS-код отдельно от структуры HTML, что упрощает поддержку и масштабируемость.",
    },
    {
      id: 7,
      question:
        "Каким образом можно изменить порядок применения внешних файлов стилей?",
      answers: [
        {
          id: "a",
          answer: "Изменив порядок их подключения в HTML-документе",
          correct: true,
        },
        { id: "b", answer: "Переименовав файлы стилей", correct: false },
        { id: "c", answer: "Добавив их внутрь `<style>`", correct: false },
        {
          id: "d",
          answer: "Удалив все конфликтующие стили",
          correct: false,
        },
      ],
      explanation:
        "Приоритет внешних файлов определяется порядком их подключения: последний файл имеет наибольший приоритет.",
    },
    {
      id: 8,
      question:
        "Какой тег и атрибут используются для подключения внешнего CSS-файла?",
      answers: [
        { id: "a", answer: "`<script>` с атрибутом `src`", correct: false },
        { id: "b", answer: "`<style>` с атрибутом `href`", correct: false },
        { id: "c", answer: "`<link>` с атрибутом `href`", correct: true },
        { id: "d", answer: "`<meta>` с атрибутом `name`", correct: false },
      ],
      explanation:
        "Внешний CSS-файл подключается с помощью тега `<link>` и атрибута `href`.",
    },
    {
      id: 9,
      question:
        "Какой метод подключения CSS сложнее всего поддерживать в больших проектах?",
      answers: [
        { id: "a", answer: "Встроенные стили (inline)", correct: true },
        { id: "b", answer: "Внешние стили (external)", correct: false },
        { id: "c", answer: "Внутренние стили (internal)", correct: false },
        { id: "d", answer: "Использование медиа-запросов", correct: false },
      ],
      explanation:
        "Встроенные стили (inline) сложно поддерживать из-за их прямого размещения в HTML-коде.",
    },
    {
      id: 10,
      question: "Какое преимущество дают внутренние стили (internal)?",
      answers: [
        {
          id: "a",
          answer: "Стили хранятся отдельно от структуры",
          correct: false,
        },
        {
          id: "b",
          answer: "Они подходят для небольших страниц",
          correct: true,
        },
        {
          id: "c",
          answer: "Они перекрывают встроенные стили",
          correct: false,
        },
        {
          id: "d",
          answer: "Стили автоматически оптимизируются",
          correct: false,
        },
      ],
      explanation:
        "Внутренние стили (internal) удобны для небольших страниц, так как они задаются непосредственно в HTML-документе.",
    },
  ],
  "02-00-css-basics": [
    {
      id: 1,
      question:
        "Как называется часть CSS-правила, которая указывает, к каким элементам применяются стили?",
      answers: [
        { id: "a", answer: "Свойство", correct: false },
        { id: "b", answer: "Селектор", correct: true },
        { id: "c", answer: "Декларация", correct: false },
        { id: "d", answer: "Значение", correct: false },
      ],
      explanation:
        "Селектор определяет, к каким элементам HTML применяются стили.",
    },
    {
      id: 2,
      question: "Каким символом начинаются комментарии в CSS?",
      answers: [
        { id: "a", answer: "//", correct: false },
        { id: "b", answer: "<!--", correct: false },
        { id: "c", answer: "/*", correct: true },
        { id: "d", answer: "#", correct: false },
      ],
      explanation:
        "Комментарии в CSS начинаются символами `/*` и заканчиваются `*/`.",
    },
    {
      id: 3,
      question:
        "Что будет результатом следующего CSS-кода?\n\n```css\np {\n  color: red;\n  font-size: 20px;\n}\n```",
      answers: [
        {
          id: "a",
          answer: "Параграфы будут красными и иметь размер шрифта 20px.",
          correct: true,
        },
        {
          id: "b",
          answer: "Текст всех элементов станет красным.",
          correct: false,
        },
        {
          id: "c",
          answer: "Текст будет черным с размером шрифта по умолчанию.",
          correct: false,
        },
        {
          id: "d",
          answer: "Параграфы будут только красными.",
          correct: false,
        },
      ],
      explanation:
        "CSS-правило нацелено на теги `<p>`, делая их текст красным с размером шрифта 20px.",
    },
    {
      id: 4,
      question: "Какой селектор выберет все элементы с классом `example`?",
      answers: [
        { id: "a", answer: "#example", correct: false },
        { id: "b", answer: ".example", correct: true },
        { id: "c", answer: "example", correct: false },
        { id: "d", answer: "*", correct: false },
      ],
      explanation:
        "Селектор `.example` используется для выбора всех элементов с классом `example`.",
    },
    {
      id: 5,
      question: "Что делает псевдокласс `:hover`?",
      answers: [
        {
          id: "a",
          answer: "Применяет стили при наведении мыши на элемент",
          correct: true,
        },
        {
          id: "b",
          answer: "Выбирает первый элемент в группе",
          correct: false,
        },
        { id: "c", answer: "Скрывает элемент", correct: false },
        {
          id: "d",
          answer: "Выбирает элемент по его атрибуту",
          correct: false,
        },
      ],
      explanation:
        "Псевдокласс `:hover` применяется, когда пользователь наводит мышь на элемент.",
    },
    {
      id: 6,
      question: "Какое свойство CSS используется для задания цвета текста?",
      answers: [
        { id: "a", answer: "background-color", correct: false },
        { id: "b", answer: "color", correct: true },
        { id: "c", answer: "font-size", correct: false },
        { id: "d", answer: "text-color", correct: false },
      ],
      explanation: "Свойство `color` задает цвет текста элемента.",
    },
    {
      id: 7,
      question: "Что означает значение `1.5em` в свойстве `font-size`?",
      answers: [
        {
          id: "a",
          answer: "Шрифт в 1.5 раза больше базового размера родителя",
          correct: true,
        },
        {
          id: "b",
          answer: "Фиксированный размер шрифта 1.5 пикселей",
          correct: false,
        },
        {
          id: "c",
          answer: "Абсолютный размер шрифта 15px",
          correct: false,
        },
        { id: "d", answer: "Минимальный размер шрифта", correct: false },
      ],
      explanation:
        "`1.5em` означает размер шрифта, равный 1.5 раза базового размера шрифта родительского элемента.",
    },
    {
      id: 8,
      question: "Какой из селекторов имеет наивысшую специфичность?",
      answers: [
        { id: "a", answer: "Селектор по тегу", correct: false },
        { id: "b", answer: "Селектор по классу", correct: false },
        { id: "c", answer: "Селектор по идентификатору", correct: true },
        { id: "d", answer: "Псевдоэлементы", correct: false },
      ],
      explanation:
        "Селекторы по идентификатору (`#id`) имеют более высокую специфичность по сравнению с селекторами по классу или тегу.",
    },
    {
      id: 9,
      question:
        "Какое ключевое слово позволяет наследовать значение свойства от родительского элемента?",
      answers: [
        { id: "a", answer: "initial", correct: false },
        { id: "b", answer: "default", correct: false },
        { id: "c", answer: "inherit", correct: true },
        { id: "d", answer: "auto", correct: false },
      ],
      explanation:
        "Ключевое слово `inherit` заставляет дочерний элемент наследовать значение свойства от родителя.",
    },
    {
      id: 10,
      question:
        "Какое значение имеет наивысший приоритет при каскадировании стилей?",
      answers: [
        { id: "a", answer: "Внешние стили", correct: false },
        { id: "b", answer: "Внутренние стили", correct: false },
        { id: "c", answer: "Inline-стили", correct: true },
        { id: "d", answer: "`!important`", correct: false },
      ],
      explanation:
        "Inline-стили имеют более высокий приоритет по сравнению с внешними и внутренними стилями, если не используется `!important`.",
    },
  ],
  "03-00-text-and-fonts": [
    {
      id: 1,
      question: "Какое свойство используется для изменения цвета текста в CSS?",
      answers: [
        { id: "a", answer: "font-color", correct: false },
        { id: "b", answer: "text-color", correct: false },
        { id: "c", answer: "color", correct: true },
        { id: "d", answer: "background-color", correct: false },
      ],
      explanation:
        "Свойство `color` используется для задания цвета текста в CSS.",
    },
    {
      id: 2,
      question: "Какой формат цвета представляет запись `rgb(255, 0, 0)`?",
      answers: [
        { id: "a", answer: "HEX", correct: false },
        { id: "b", answer: "RGB", correct: true },
        { id: "c", answer: "HSL", correct: false },
        { id: "d", answer: "RGBA", correct: false },
      ],
      explanation:
        "Запись `rgb(255, 0, 0)` — это формат RGB, где указаны значения для красного, зеленого и синего цветов.",
    },
    {
      id: 3,
      question:
        "Какое значение задает размер шрифта в 1.5 раза больше базового размера родителя?",
      answers: [
        { id: "a", answer: "150px", correct: false },
        { id: "b", answer: "1.5em", correct: true },
        { id: "c", answer: "1.5rem", correct: false },
        { id: "d", answer: "150%", correct: false },
      ],
      explanation:
        "Значение `1.5em` увеличивает размер шрифта в 1.5 раза по отношению к родительскому элементу.",
    },
    {
      id: 4,
      question:
        "Какое значение свойства `font-style` используется для задания наклонного текста?",
      answers: [
        { id: "a", answer: "bold", correct: false },
        { id: "b", answer: "italic", correct: true },
        { id: "c", answer: "normal", correct: false },
        { id: "d", answer: "underline", correct: false },
      ],
      explanation: "Значение `italic` делает текст наклонным.",
    },
    {
      id: 5,
      question: "Что делает свойство `font-weight`?",
      answers: [
        { id: "a", answer: "Определяет цвет текста", correct: false },
        { id: "b", answer: "Задает толщину шрифта", correct: true },
        {
          id: "c",
          answer: "Добавляет подчеркивание к тексту",
          correct: false,
        },
        { id: "d", answer: "Изменяет размер шрифта", correct: false },
      ],
      explanation:
        "Свойство `font-weight` управляет толщиной шрифта, используя ключевые слова (`bold`, `normal`) или числовые значения (например, 300, 400, 700).",
    },
    {
      id: 6,
      question:
        "Какое свойство используется для добавления подчеркивания текста?",
      answers: [
        { id: "a", answer: "text-underline", correct: false },
        { id: "b", answer: "font-style", correct: false },
        { id: "c", answer: "text-decoration", correct: true },
        { id: "d", answer: "line-style", correct: false },
      ],
      explanation:
        "Свойство `text-decoration` позволяет добавлять подчеркивание, зачеркнутый текст и другие декоративные линии.",
    },
    {
      id: 7,
      question:
        "Какое из значений `font-family` указывает запасной (fallback) шрифт в случае недоступности основного?",
      answers: [
        { id: "a", answer: "Helvetica", correct: false },
        { id: "b", answer: "Arial, sans-serif", correct: true },
        { id: "c", answer: "Verdana", correct: false },
        { id: "d", answer: "Roboto", correct: false },
      ],
      explanation:
        "Указание нескольких шрифтов, например `Arial, sans-serif`, позволяет использовать запасной шрифт, если основной недоступен.",
    },
    {
      id: 8,
      question:
        "Как подключить внешний шрифт с использованием директивы `@font-face`?",
      answers: [
        { id: "a", answer: "С помощью `<link>` в HTML", correct: false },
        {
          id: "b",
          answer: "С помощью свойства `font-family`",
          correct: false,
        },
        {
          id: "c",
          answer: "С использованием `@font-face` в CSS",
          correct: true,
        },
        {
          id: "d",
          answer: "Через атрибут `src` в теге `<style>`",
          correct: false,
        },
      ],
      explanation:
        "Директива `@font-face` в CSS позволяет подключать внешние или локальные шрифты с указанием пути к файлам.",
    },
    {
      id: 9,
      question:
        "Какой формат шрифта является наиболее современным и оптимизированным для веба?",
      answers: [
        { id: "a", answer: "TTF", correct: false },
        { id: "b", answer: "EOT", correct: false },
        { id: "c", answer: "WOFF2", correct: true },
        { id: "d", answer: "OTF", correct: false },
      ],
      explanation:
        "Формат `WOFF2` является современным и оптимизированным для быстрой загрузки шрифтов в вебе.",
    },
    {
      id: 10,
      question:
        "Какой тег используется для подключения шрифтов Google Fonts в HTML?",
      answers: [
        { id: "a", answer: "<style>", correct: false },
        { id: "b", answer: "<font>", correct: false },
        { id: "c", answer: "<link>", correct: true },
        { id: "d", answer: "<script>", correct: false },
      ],
      explanation:
        "Шрифты из Google Fonts подключаются с использованием тега `<link>` в секции `<head>` HTML-документа.",
    },
  ],
  "04-00-block-styling": [
    {
      id: 1,
      question:
        "Что из перечисленного не является частью модели коробки (Box Model) в CSS?",
      answers: [
        { id: "a", answer: "Content (содержимое)", correct: false },
        { id: "b", answer: "Padding (внутренние отступы)", correct: false },
        { id: "c", answer: "Gap (промежуток)", correct: true },
        { id: "d", answer: "Border (граница)", correct: false },
      ],
      explanation:
        "Gap не входит в модель Box Model; он используется в Flexbox и Grid для задания промежутков между элементами.",
    },
    {
      id: 2,
      question:
        "Какое свойство позволяет включить границы и отступы внутрь общего размера элемента?",
      answers: [
        { id: "a", answer: "padding-box", correct: false },
        { id: "b", answer: "box-sizing: content-box", correct: false },
        { id: "c", answer: "box-sizing: border-box", correct: true },
        { id: "d", answer: "size-box", correct: false },
      ],
      explanation:
        "Свойство `box-sizing: border-box` включает padding и границы в расчет ширины и высоты элемента.",
    },
    {
      id: 3,
      question:
        "Какое свойство задает направление элементов в Flexbox-контейнере?",
      answers: [
        { id: "a", answer: "align-items", correct: false },
        { id: "b", answer: "flex-direction", correct: true },
        { id: "c", answer: "justify-content", correct: false },
        { id: "d", answer: "flex-flow", correct: false },
      ],
      explanation:
        "Свойство `flex-direction` определяет направление расположения элементов: строка (`row`), колонка (`column`) и их обратные варианты.",
    },
    {
      id: 4,
      question:
        "Какое значение `justify-content` равномерно распределяет пространство между элементами?",
      answers: [
        { id: "a", answer: "center", correct: false },
        { id: "b", answer: "space-between", correct: true },
        { id: "c", answer: "space-around", correct: false },
        { id: "d", answer: "flex-start", correct: false },
      ],
      explanation:
        "Значение `space-between` равномерно распределяет элементы, оставляя равные промежутки между ними.",
    },
    {
      id: 5,
      question:
        "Какое свойство CSS Grid задает количество и размер колонок сетки?",
      answers: [
        { id: "a", answer: "grid-template-rows", correct: false },
        { id: "b", answer: "grid-template-columns", correct: true },
        { id: "c", answer: "grid-auto-flow", correct: false },
        { id: "d", answer: "grid-gap", correct: false },
      ],
      explanation:
        "Свойство `grid-template-columns` определяет количество колонок и их размеры в сетке.",
    },
    {
      id: 6,
      question:
        "Какое значение свойства `align-items` растягивает элементы по высоте контейнера Flexbox?",
      answers: [
        { id: "a", answer: "center", correct: false },
        { id: "b", answer: "stretch", correct: true },
        { id: "c", answer: "flex-end", correct: false },
        { id: "d", answer: "flex-start", correct: false },
      ],
      explanation:
        "Значение `stretch` растягивает элементы на всю высоту контейнера по поперечной оси.",
    },
    {
      id: 7,
      question:
        "Какое свойство в CSS Grid задает промежутки между рядами и колонками?",
      answers: [
        { id: "a", answer: "margin", correct: false },
        { id: "b", answer: "padding", correct: false },
        { id: "c", answer: "gap", correct: true },
        { id: "d", answer: "spacing", correct: false },
      ],
      explanation:
        "Свойство `gap` используется для задания промежутков между строками и колонками в Grid-контейнере.",
    },
    {
      id: 8,
      question:
        "Какое значение свойства `flex` заставляет элементы занимать равное пространство в контейнере?",
      answers: [
        { id: "a", answer: "flex: auto", correct: false },
        { id: "b", answer: "flex: 1", correct: true },
        { id: "c", answer: "flex: none", correct: false },
        { id: "d", answer: "flex: default", correct: false },
      ],
      explanation:
        "Значение `flex: 1` заставляет элементы занимать равное доступное пространство в Flexbox-контейнере.",
    },
    {
      id: 9,
      question:
        "Какое свойство позволяет указать, в каких строках и колонках должен располагаться элемент Grid?",
      answers: [
        { id: "a", answer: "grid-gap", correct: false },
        { id: "b", answer: "grid-area", correct: false },
        { id: "c", answer: "grid-column и grid-row", correct: true },
        { id: "d", answer: "grid-auto-flow", correct: false },
      ],
      explanation:
        "Свойства `grid-column` и `grid-row` определяют, в каких строках и колонках должен располагаться элемент Grid.",
    },
    {
      id: 10,
      question: "Какое значение по умолчанию имеет свойство `box-sizing`?",
      answers: [
        { id: "a", answer: "content-box", correct: true },
        { id: "b", answer: "border-box", correct: false },
        { id: "c", answer: "padding-box", correct: false },
        { id: "d", answer: "inherit", correct: false },
      ],
      explanation:
        "По умолчанию свойство `box-sizing` имеет значение `content-box`, при котором padding и границы не включаются в общий размер элемента.",
    },
  ],
  "05-00-responsive-design": [
    {
      id: 1,
      question:
        "Какое правило используется для создания стилей, зависящих от характеристик устройства?",
      answers: [
        { id: "a", answer: "@viewport", correct: false },
        { id: "b", answer: "@media", correct: true },
        { id: "c", answer: "@device", correct: false },
        { id: "d", answer: "@responsive", correct: false },
      ],
      explanation:
        "Правило `@media` позволяет применять стили в зависимости от характеристик устройства, таких как ширина или ориентация экрана.",
    },
    {
      id: 2,
      question:
        "Какой оператор используется для объединения нескольких условий в медиа-запросе?",
      answers: [
        { id: "a", answer: "&&", correct: false },
        { id: "b", answer: "or", correct: false },
        { id: "c", answer: "and", correct: true },
        { id: "d", answer: "||", correct: false },
      ],
      explanation:
        "Оператор `and` позволяет объединить несколько условий в одном медиа-запросе.",
    },
    {
      id: 3,
      question:
        "Какое значение параметра медиа-запроса используется для проверки ширины экрана меньше заданного значения?",
      answers: [
        { id: "a", answer: "min-width", correct: false },
        { id: "b", answer: "max-width", correct: true },
        { id: "c", answer: "width", correct: false },
        { id: "d", answer: "viewport", correct: false },
      ],
      explanation:
        "Значение `max-width` определяет стили для экранов с шириной меньше или равной указанному значению.",
    },
    {
      id: 4,
      question:
        "Какой параметр медиа-запроса позволяет учитывать ориентацию устройства?",
      answers: [
        { id: "a", answer: "resolution", correct: false },
        { id: "b", answer: "orientation", correct: true },
        { id: "c", answer: "aspect-ratio", correct: false },
        { id: "d", answer: "device-mode", correct: false },
      ],
      explanation:
        "Параметр `orientation` позволяет определять альбомную (`landscape`) или портретную (`portrait`) ориентацию устройства.",
    },
    {
      id: 5,
      question: "Что означает единица измерения `1vw` в CSS?",
      answers: [
        { id: "a", answer: "1% от высоты экрана", correct: false },
        { id: "b", answer: "1 пиксель ширины экрана", correct: false },
        { id: "c", answer: "1% от ширины окна браузера", correct: true },
        {
          id: "d",
          answer: "1% от минимального размера окна",
          correct: false,
        },
      ],
      explanation:
        "Единица `1vw` равна 1% от ширины окна браузера (viewport width).",
    },
    {
      id: 6,
      question:
        "Какой параметр медиа-запроса используется для проверки разрешения экрана?",
      answers: [
        { id: "a", answer: "screen-resolution", correct: false },
        { id: "b", answer: "dpi", correct: false },
        { id: "c", answer: "resolution", correct: true },
        { id: "d", answer: "pixel-density", correct: false },
      ],
      explanation:
        "Параметр `resolution` проверяет разрешение экрана, например, `min-resolution: 300dpi`.",
    },
    {
      id: 7,
      question:
        "Какое значение единицы измерения зависит от меньшей стороны окна браузера?",
      answers: [
        { id: "a", answer: "vw", correct: false },
        { id: "b", answer: "vh", correct: false },
        { id: "c", answer: "vmin", correct: true },
        { id: "d", answer: "vmax", correct: false },
      ],
      explanation:
        "Единица `vmin` зависит от меньшей стороны окна (ширины или высоты).",
    },
    {
      id: 8,
      question: "Как правильно объединить два условия в медиа-запросе?",
      answers: [
        {
          id: "a",
          answer: "@media (min-width: 600px) or (max-width: 1200px)",
          correct: false,
        },
        {
          id: "b",
          answer: "@media (min-width: 600px), (max-width: 1200px)",
          correct: true,
        },
        {
          id: "c",
          answer: "@media (min-width: 600px) && (max-width: 1200px)",
          correct: false,
        },
        {
          id: "d",
          answer: "@media (width: 600px to 1200px)",
          correct: false,
        },
      ],
      explanation:
        "В медиа-запросах условия можно объединять с помощью запятой `,` для указания альтернативных условий.",
    },
    {
      id: 9,
      question:
        "Какое преимущество дает использование динамических единиц измерения `vh` и `vw`?",
      answers: [
        {
          id: "a",
          answer: "Уменьшение размера файлов CSS",
          correct: false,
        },
        {
          id: "b",
          answer:
            "Создание адаптивных элементов, зависящих от размеров окна браузера",
          correct: true,
        },
        {
          id: "c",
          answer: "Автоматическое кэширование стилей",
          correct: false,
        },
        {
          id: "d",
          answer: "Сокращение времени загрузки страницы",
          correct: false,
        },
      ],
      explanation:
        "Динамические единицы `vh` и `vw` позволяют элементам автоматически подстраиваться под размеры окна браузера.",
    },
    {
      id: 10,
      question:
        "Какое значение имеет наибольший приоритет при использовании медиа-запросов?",
      answers: [
        {
          id: "a",
          answer: "Стили, указанные в `max-width`",
          correct: false,
        },
        {
          id: "b",
          answer: "Последний подключенный медиа-запрос",
          correct: true,
        },
        { id: "c", answer: "Стили с `!important`", correct: false },
        { id: "d", answer: "Стили, заданные по умолчанию", correct: false },
      ],
      explanation:
        "При каскадировании стилей последний медиа-запрос имеет наибольший приоритет, если условия выполнены.",
    },
  ],
};

export const config = {
  paths: {
    srcDir: join(rootDir, "src"),
    templatePath: join(rootDir, "src/templates/layout.html"),
    stylesSrcDir: join(rootDir, "src/assets/styles"),
    contentDir: join(rootDir, "src/contents-simple"),
    buildDir: join(rootDir, "build"),
    stylesBuildDir: join(rootDir, "build/assets/styles"),
    quizzesBuildDir: join(rootDir, "build/quizzes"),
  },
  title: "The CSS Handbook",
  chapters: {
    "00-00-about-the-handbook": "О справочнике",
    "00-01-introduction": "Введение",
    "01-00-getting-started": {
      name: "Начало",
      children: {
        "01-01-ways-to-add-css": "Способы подключения CSS",
        "01-02-linking-multiple-stylesheets":
          "Подключение нескольких файлов стилей",
      },
    },
    "02-00-css-basics": {
      name: "Основы CSS",
      children: {
        "02-01-css-syntax": "Синтаксис CSS",
        "02-02-selectors": "Селекторы",
        "02-03-properties-and-values": "Свойства и значения",
        "02-04-priority-and-overrides":
          "Приоритетность и переопределение стилей",
      },
    },
    "03-00-text-and-fonts": {
      name: "Работа с текстом и шрифтами",
      children: {
        "03-01-text-formatting": "Форматирование текста",
        "03-02-linking-fonts": "Подключение шрифтов",
      },
    },
    "04-00-block-styling": {
      name: "Оформление блоков",
      children: {
        "04-01-box-model": "Box Model",
        "04-02-basic-flexbox": "Основы Flexbox",
        "04-03-basic-grid": "Основы Grid",
      },
    },
    "05-00-responsive-design": {
      name: "Адаптивный дизайн",
      children: {
        "05-01-media-queries": "медиа-запросы",
        "05-02-dynamic-units": "Динамические единицы",
      },
    },
  },
  quizzes: quizData,
};
