# Контрольные вопросы

<!-- prettier-ignore-start -->

::quiz
1.Какой способ подключения CSS используется для быстрой настройки стилей конкретного элемента?
-Внешние стили (external)
+Встроенные стили (inline)
-Внутренние стили (internal)
-Системные стили браузера
Встроенные стили (inline) используют атрибут style для задания стилей конкретного элемента.
2.Где размещаются внутренние (internal) стили в HTML-документе?
-Внутри тега &lt;style&gt; в &lt;body&gt;
-Внутри атрибута style
+Внутри тега &lt;style&gt; в &lt;head&gt;
-В отдельном CSS-файле
Внутренние стили размещаются внутри тега &lt;style&gt;, который располагается в &lt;head&gt; HTML-документа.
3.Каким образом подключаются внешние CSS-стили?
-С помощью тега &lt;style&gt;
-С помощью атрибута style
+С помощью тега &lt;link&gt;
-С помощью атрибута src
Внешние CSS-стили подключаются через тег &lt;link&gt; в секции &lt;head&gt;.
4.Что произойдет, если два внешних CSS-файла содержат одинаковые селекторы с разными стилями?
-Применятся стили из первого файла
+Применятся стили из последнего файла
-Стили из обоих файлов объединятся
-Стили не будут применены
При конфликте одинаковых селекторов стили из последнего подключенного файла имеют приоритет.
5.Какое свойство можно использовать для предотвращения конфликтов стилей в крупных проектах?
-Использование !important
+Методология нейминга, например, BEM
-Удаление всех конфликтующих файлов
-Разделение CSS-файлов на разные папки
Методология нейминга, например BEM, помогает избежать конфликтов стилей за счет уникальных имен классов.
6.Какой способ подключения стилей более эффективен для масштабируемых проектов?
-Встроенные стили (inline)
-Внутренние стили (internal)
+Внешние стили (external)
-Медиа-запросы
Внешние стили (external) позволяют держать CSS-код отдельно от структуры HTML, что упрощает поддержку и масштабируемость.
7.Каким образом можно изменить порядок применения внешних файлов стилей?
+Изменив порядок их подключения в HTML-документе
-Переименовав файлы стилей
-Добавив их внутрь &lt;style&gt;
-Удалив все конфликтующие стили
Приоритет внешних файлов определяется порядком их подключения: последний файл имеет наибольший приоритет.
8.Какой тег и атрибут используются для подключения внешнего CSS-файла? 
-&lt;script&gt; с атрибутом src 
-&lt;style&gt; с атрибутом href 
+&lt;link&gt; с атрибутом href 
-&lt;meta&gt; с атрибутом name
Внешний CSS-файл подключается с помощью тега &lt;link&gt; и атрибута href.
9.Какой метод подключения CSS сложнее всего поддерживать в больших проектах?
+Встроенные стили (inline)
-Внешние стили (external)
-Внутренние стили (internal)
-Использование медиа-запросов
Встроенные стили (inline) сложно поддерживать из-за их прямого размещения в HTML-коде.
10.Какое преимущество дают внутренние стили (internal)?
-Стиль хранятся отдельно от структуры
+Они подходят для небольших страниц
-Они перекрывают встроенные стили
-Стиль автоматически оптимизируется
Внутренние стили (internal) удобны для небольших страниц, так как они задаются непосредственно в HTML-документе.
::

<!-- prettier-ignore-end -->
