## Медиа-запросы

Медиа-запросы — это мощный инструмент CSS, который позволяет изменять стили в зависимости от характеристик устройства, таких как ширина экрана, высота, ориентация и разрешение. Они являются основой адаптивного дизайна, помогая создавать интерфейсы, которые выглядят хорошо на любых устройствах.

### Основы медиа-запросов

Медиа-запросы применяются с использованием правила `@media`. Внутри него указываются условия, при которых должны действовать определенные стили.

Пример:

```css
@media (max-width: 768px) {
  body {
    background-color: lightgray; /* Цвет фона для экранов шириной 768px и меньше */
  }
}
```

В этом примере стиль применяется только на устройствах с шириной экрана 768px или меньше.

### Часто используемые параметры

1. **`max-width` и `min-width`**  
   Устанавливают стили для экранов с определенной шириной.

   Пример:

   ```css
   @media (min-width: 1024px) {
     .container {
       padding: 20px;
     }
   }
   ```

2. **`max-height` и `min-height`**  
   Аналогично `width`, но используется для высоты экрана.

   Пример:

   ```css
   @media (max-height: 500px) {
     header {
       display: none; /* Скрыть хедер для низких экранов */
     }
   }
   ```

3. **`orientation`**  
   Учитывает ориентацию устройства: `landscape` (альбомная) или `portrait` (портретная).

   Пример:

   ```css
   @media (orientation: landscape) {
     .menu {
       display: flex;
     }
   }
   ```

4. **`resolution`**  
   Учитывает разрешение экрана в dpi (точках на дюйм).

   Пример:

   ```css
   @media (min-resolution: 300dpi) {
     img {
       border: 2px solid red;
     }
   }
   ```

### Объединение условий

Медиа-запросы могут содержать несколько условий с использованием операторов:

- **`and`** — для комбинирования условий.
- **`,`** (запятая) — для указания альтернативных условий.

Пример:

```css
@media (min-width: 600px) and (max-width: 1200px) {
  .content {
    font-size: 18px;
  }
}

@media (orientation: portrait), (max-width: 480px) {
  .menu {
    display: none;
  }
}
```

::tip
Используйте `min-width` для реализации подхода Mobile-first, где стили для маленьких экранов задаются по умолчанию, а для больших — с помощью медиа-запросов.
::

Медиа-запросы делают ваши стили гибкими и позволяют адаптировать дизайн для устройств с разными характеристиками.