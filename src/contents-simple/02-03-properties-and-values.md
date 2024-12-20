## Свойства и значения

Свойства и значения — это основа работы с CSS. Свойства описывают, что нужно изменить в элементе, а значения задают конкретные параметры для этих изменений.

Пример базового CSS-правила:

```css
p {
  color: blue; /* Свойство: значение */
}
```

### Типы значений

В CSS используется множество типов значений, среди которых:

- **Числовые значения**  
  Используются для задания размеров, ширины, высоты, отступов и т.д.

  ```css
  width: 100px; /* 100 пикселей */
  margin: 10%; /* 10% от родительского элемента */
  ```

- **Цветовые значения**  
  Определяют цвет текста, фона, рамок и других элементов.  
  Поддерживаемые форматы:

  - HEX: `#ffffff` (белый цвет).
  - RGB: `rgb(255, 255, 255)`.
  - RGBA: `rgba(255, 255, 255, 0.5)` (с прозрачностью).
  - HSL: `hsl(0, 100%, 50%)`.

  Пример:

  ```css
  background-color: #ff0000; /* Красный цвет фона */
  color: rgba(0, 0, 0, 0.7); /* Черный с прозрачностью */
  ```

- **Ключевые слова**  
  Используются для задания предопределенных значений, таких как `auto`, `inherit`, `none`.
  ```css
  display: none; /* Скрытие элемента */
  border: inherit; /* Наследование рамки от родителя */
  ```

### Единицы измерения

Единицы измерения определяют, как интерпретируются числовые значения:

- **Абсолютные единицы**: `px`, `cm`, `mm`. Они фиксированы и не зависят от размеров окна или устройства.
- **Относительные единицы**: `%`, `em`, `rem`, `vw`, `vh`. Зависимость от родительского элемента или окна браузера делает их идеальными для адаптивного дизайна.

Пример:

```css
font-size: 1.5em; /* 1.5 раза больше шрифта родителя */
width: 50vw; /* 50% от ширины окна */
```

::tip
Используйте относительные единицы для создания адаптивного интерфейса.
::

### Наследование свойств

Некоторые свойства, такие как `color` и `font-family`, наследуются дочерними элементами автоматически. Другие свойства можно сделать наследуемыми с помощью ключевого слова `inherit`.

Пример:

```css
body {
  color: black; /* Наследуемое свойство */
}

p {
  color: inherit; /* Явное наследование */
}
```

::note
Если требуется сбросить значение свойства к его умолчанию, используйте ключевое слово `initial`.
::

### Управление стилями

CSS позволяет объединять несколько свойств в одном правиле для удобства:

```css
h1 {
  color: blue;
  font-size: 24px;
  text-align: center;
}
```

::note
Понимание свойств и значений является основой для написания эффективного CSS-кода.
::