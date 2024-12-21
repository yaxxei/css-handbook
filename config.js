import { join, dirname } from "path";
import { fileURLToPath } from "url";

const rootDir = dirname(fileURLToPath(import.meta.url));

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
      quiz: "01-quiz",
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
      quiz: "02-quiz",
    },
    "03-00-text-and-fonts": {
      name: "Работа с текстом и шрифтами",
      children: {
        "03-01-text-formatting": "Форматирование текста",
        "03-02-linking-fonts": "Подключение шрифтов",
      },
      quiz: "03-quiz",
    },
    "04-00-block-styling": {
      name: "Оформление блоков",
      children: {
        "04-01-box-model": "Box Model",
        "04-02-basic-flexbox": "Основы Flexbox",
        "04-03-basic-grid": "Основы Grid",
      },
      quiz: "04-quiz",
    },
    "05-00-responsive-design": {
      name: "Адаптивный дизайн",
      children: {
        "05-01-media-queries": "медиа-запросы",
        "05-02-dynamic-units": "Динамические единицы",
      },
      quiz: "05-quiz",
    },
  },
};
