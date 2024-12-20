## Свойства и значения

Свойства и значения — это основа работы с CSS. Свойства определяют, какой аспект элемента будет стилизоваться (например, цвет текста или отступы), а значения задают конкретные параметры этого свойства.

### Типы значений

CSS поддерживает несколько типов значений:

- **Числовые** — используются для размеров, отступов, рамок и т.д.
  ```css
  width: 100px;
  ```
- **Цветовые** — задают цвет текста, фона или рамки.
  ```css
  color: #ff0000;
  ```
- **Ключевые слова** — предопределенные значения, такие как `auto`, `inherit` или `none`.
  ```css
  display: none;
  ```
- **Процентные** — задают размеры относительно родительских элементов.
  ```css
  width: 50%;
  ```

### Единицы измерения

CSS поддерживает абсолютные и относительные единицы измерения:

- **Абсолютные**: `px`, `cm`, `mm`. Они фиксированы и не зависят от контекста.
- **Относительные**: `%`, `em`, `rem`. Их значения зависят от размеров родительских элементов.

Пример:

```css
font-size: 1.5em; /* 1.5 раза больше размера шрифта родителя */
```

### Цвета и их форматы

Для задания цвета в CSS используются следующие форматы:

- **HEX** — шестнадцатеричный формат.
  ```css
  color: #ff5733;
  ```
- **RGB и RGBA** — значения красного, зеленого и синего цветов, а также прозрачности.
  ```css
  background-color: rgba(255, 0, 0, 0.5); /* Полупрозрачный красный */
  ```
- **HSL и HSLA** — оттенок, насыщенность и яркость, с опцией прозрачности.
  ```css
  color: hsl(120, 100%, 50%);
  ```

::tip
Используйте RGBA или HSLA, если требуется прозрачность.
::

### Наследование свойств

Некоторые свойства CSS наследуются автоматически, например, `color` и `font-family`.  
Для принудительного наследования можно использовать ключевое слово `inherit`:

```css
border-color: inherit; /* Наследует цвет рамки от родителя */
```

::note
Не все свойства наследуются, поэтому важно учитывать это при стилизации.  
Если требуется сброс значений, можно использовать `initial` или `unset`.
::