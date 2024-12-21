# Контрольные вопросы

<!-- prettier-ignore-start -->

::quiz
1.Что из перечисленного не является частью модели коробки (Box Model) в CSS?
-Content (содержимое)
-Padding (внутренние отступы)
+Gap (промежуток)
-Border (граница)
Gap не входит в модель Box Model; он используется в Flexbox и Grid для задания промежутков между элементами.
2.Какое свойство позволяет включить границы и отступы внутрь общего размера элемента?
-padding-box
-box-sizing: content-box
+box-sizing: border-box
-size-box
Свойство box-sizing: border-box включает padding и границы в расчет ширины и высоты элемента.
3.Какое свойство задает направление элементов в Flexbox-контейнере?
-align-items
+flex-direction
-justify-content
-flex-flow
Свойство flex-direction определяет направление расположения элементов: строка (row), колонка (column) и их обратные варианты.
4.Какое значение justify-content равномерно распределяет пространство между элементами?
-center
+space-between
-space-around
-flex-start
Значение space-between равномерно распределяет элементы, оставляя равные промежутки между ними.
5.Какое свойство CSS Grid задает количество и размер колонок сетки?
-grid-template-rows
+grid-template-columns
-grid-auto-flow
-grid-gap
Свойство grid-template-columns определяет количество колонок и их размеры в сетке.
6.Какое значение свойства align-items растягивает элементы по высоте контейнера Flexbox?
-center
+stretch
-flex-end
-flex-start
Значение stretch растягивает элементы на всю высоту контейнера по поперечной оси.
7.Какое свойство в CSS Grid задает промежутки между рядами и колонками?
-margin
-padding
+gap
-spacing
Свойство gap используется для задания промежутков между строками и колонками в Grid-контейнере.
8.Какое значение свойства flex заставляет элементы занимать равное пространство в контейнере?
-flex: auto
+flex: 1
-flex: none
-flex: default
Значение flex: 1 заставляет элементы занимать равное доступное пространство в Flexbox-контейнере.
9.Какое свойство позволяет указать, в каких строках и колонках должен располагаться элемент Grid?
-grid-gap
-grid-area
+grid-column и grid-row
-grid-auto-flow
Свойства grid-column и grid-row определяют, в каких строках и колонках должен располагаться элемент Grid.
10.Какое значение по умолчанию имеет свойство box-sizing?
+content-box
-border-box
-padding-box
-inherit
По умолчанию свойство box-sizing имеет значение content-box, при котором padding и границы не включаются в общий размер элемента.
::

<!-- prettier-ignore-end -->
