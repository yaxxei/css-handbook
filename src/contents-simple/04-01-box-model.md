## Модель коробки (Box Model)

Модель коробки (Box Model) — это основа понимания того, как CSS рассчитывает размеры и пространство вокруг каждого HTML-элемента. Каждый элемент в CSS представлен в виде прямоугольной коробки, которая состоит из четырех слоев: содержимого (content), отступов (padding), границ (border) и полей (margin).

### Состав модели коробки

1. **Content (содержимое)**  
   Это внутренняя часть элемента, где размещается текст, изображения или другие вложенные элементы. Размеры содержимого задаются с помощью свойств `width` и `height`.

2. **Padding (внутренние отступы)**  
   Расстояние между содержимым и границей элемента. Используется для создания внутреннего пространства.

   Пример:

   ```css
   div {
     padding: 20px; /* Внутренний отступ 20px */
   }
   ```

3. **Border (границы)**  
   Рамка вокруг элемента, которая обрамляет padding и содержимое. Границы можно стилизовать с помощью свойств `border-width`, `border-style` и `border-color`.

   Пример:

   ```css
   div {
     border: 2px solid black; /* Чёрная граница толщиной 2px */
   }
   ```

4. **Margin (внешние отступы)**  
   Расстояние между элементом и другими элементами на странице.

   Пример:

   ```css
   div {
     margin: 10px; /* Внешний отступ 10px */
   }
   ```

### Пример модели коробки

Коробка с заданными размерами и отступами:

```css
div {
  width: 200px; /* Ширина содержимого */
  height: 100px; /* Высота содержимого */
  padding: 10px; /* Внутренние отступы */
  border: 5px solid black; /* Граница */
  margin: 15px; /* Внешние отступы */
}
```

Визуальное представление:

- Ширина содержимого: 200px
- Высота содержимого: 100px
- Общая ширина: 200px + (2 _ 10px) + (2 _ 5px) = 230px
- Общая высота: 100px + (2 _ 10px) + (2 _ 5px) = 130px

::tip
Используйте свойство `box-sizing: border-box`, чтобы размеры элемента включали padding и границы. Это упрощает расчет размеров.  
::

### Свойство `box-sizing`

Свойство `box-sizing` управляет тем, как браузер рассчитывает размеры элемента.

- **`content-box`** (по умолчанию) — размеры задаются только для содержимого, padding и границы не включаются.
- **`border-box`** — размеры включают содержимое, padding и границы.

Пример:

```css
div {
  width: 300px;
  box-sizing: border-box; /* Общая ширина включает padding и границы */
}
```

::note
Использование `border-box` рекомендуется для большинства современных проектов, так как оно упрощает управление размерами блоков.  
::

Понимание модели коробки позволяет точно рассчитывать размеры элементов и управлять их пространственным расположением.
