$(document).ready(function () {
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [57.193759866608545, 65.61285500441014],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 17
        });

        BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
            "<div class=\"address_wrap\">\n" +
            "  <b class=\"address_title\">Вызов замерщика бесплатно</b>\n" +
            "  <div class=\"address_address\">\n" +
            "    <span class=\"address_street\">&ZeroWidthSpace;Тимофея Чаркова, 12 ст1</span><span class=\"address_metro metro_colored\"></span>\n" +
            "  </div>\n" +
            "  <div class=\"address_time clear_fix\">\n" +
            "    <span class=\"address_time_status\">\n" +
            "</span>\n"+
            "  </div>\n" +
            "  <div class=\"address_more\" style=\"display: block;\">\n" +
            "    <div class=\"address_timetable\">\n" +
            "  <div class=\"address_timetable_one_day\">\n" +
            "  <span class=\"address_timetable_day\">Пн</span>\n" +
            "  <span class=\"address_timetable_time\">9:00 - 18:00</span>\n" +
            "</div><div class=\"address_timetable_one_day\">\n" +
            "  <span class=\"address_timetable_day\">Вт</span>\n" +
            "  <span class=\"address_timetable_time\">9:00 - 18:00</span>\n" +
            "</div><div class=\"address_timetable_one_day on\">\n" +
            "  <span class=\"address_timetable_day\">Ср</span>\n" +
            "  <span class=\"address_timetable_time\">9:00 - 18:00</span>\n" +
            "</div><div class=\"address_timetable_one_day\">\n" +
            "  <span class=\"address_timetable_day\">Чт</span>\n" +
            "  <span class=\"address_timetable_time\">9:00 - 18:00</span>\n" +
            "</div><div class=\"address_timetable_one_day\">\n" +
            "  <span class=\"address_timetable_day\">Пт</span>\n" +
            "  <span class=\"address_timetable_time\">9:00 - 18:00</span>\n" +
            "</div><div class=\"address_timetable_one_day\">\n" +
            "  <span class=\"address_timetable_day\">Сб</span>\n" +
            "  <span class=\"address_timetable_time\">9:00 - 15:00</span>\n" +
            "</div><div class=\"address_timetable_one_day\">\n" +
            "  <span class=\"address_timetable_day\">Вс</span>\n" +
            "  <span class=\"address_timetable_time\">Закрыто</span>\n" +
            "</div>\n" +
            "</div>\n" +
            "    <div class=\"address_additional unshown\">\n" +
            "      \n" +
            "    </div>\n" +
            "    <div class=\"address_phone\">\n" + "<a href='tel:+79222662934'>+7 (922) 266-29-34</a>" +
            "    </div>\n" +
            "  </div>\n" +
            "</div>", {

                // Переопределяем функцию build, чтобы при создании макета начинать
                // слушать событие click на кнопке-счетчике.
                build: function () {
                    // Сначала вызываем метод build родительского класса.
                    BalloonContentLayout.superclass.build.call(this);
                },

                // Аналогично переопределяем функцию clear, чтобы снять
                // прослушивание клика при удалении макета с карты.
                clear: function () {
                    BalloonContentLayout.superclass.clear.call(this);
                }
            });

        var myPlacemark1 = new ymaps.Placemark([57.193759866608545, 65.61285500441014], {
            name: 'Lime'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'assets/img/logo1.png',
            iconImageSize: [30, 30],
            iconImageOffset: [-15, -27],
            balloonContentLayout: BalloonContentLayout,
            // Запретим замену обычного балуна на балун-панель.
            // Если не указывать эту опцию, на картах маленького размера откроется балун-панель.
            balloonPanelMaxMapArea: 0
        });
        myMap.geoObjects.add(myPlacemark1)
    }
})