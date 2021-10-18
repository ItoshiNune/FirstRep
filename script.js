'use strict';

const appData = {
    title: '',
    sreens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    fullPrice: 0,
    servicePercentPrice: 0,
    allServicePrices: 0,
    service1: '',
    service2: '',
    asking: function () {
        appData.title = prompt('Как называется ваш проект?', " Калькулятор верстки");
        appData.screens = prompt('Какие типы экранов нужно разрабатывать?', "Простые , Сложные");
        do {
            appData.screenPrice = prompt('Сколько будет стоить данная работа?');
        }
        while (!appData.isNumber(appData.screenPrice));

        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },
    getAllServicePrices: function () {
        let sum = 0;

        for (let i = 0; i < 2; i++) {
            let price = 0;
            if (i === 0) {
                appData.service1 = prompt("Какой дополнительный тип услуги нужен?");

            } else if (i === 1) {
                appData.service2 = prompt("Какой дополнительный тип услуги нужен?");
            }
            do {
                price = prompt("Сколько это будет стоить?");
            }
            while (!appData.isNumber(price))

            sum += +price;


        }
        return sum;
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },
    getFullPrice: function () {
        return +appData.screenPrice + appData.allServicePrices;


    },
    getTitle: function (title) {
        title = title.trim();
        title = title.toLowerCase();
        title = title[0].toUpperCase() + title.slice(1);
        return appData.title;
    },
    getServicePercentPrices: function () {
        return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },
    getRollbackMessage: function (price) {

        if (price > 30000) {
            return "Даем скидку в 10%";
        } else if (price > 15000 && fullPrice < 30000) {
            return "Даем скидку в 5%";
        } else if (price < 15000 && fullPrice > 0) {
            return "Скидка не предусмотрена";
        } else if (price < 0) {
            return "Что то пошло не так";
        } else if (price == 0 || price == 15000 || price == 30000) {
            return "Даем скидку в 5%";
        }
    },
    start: function () {
        appData.asking();
        appData.logger();
    },

    logger: function () {
        console.log(appData.title);
        console.log(appData.screens);
        console.log(appData.screenPrice);
        console.log(appData.adaptive);

        for (let key in appData) {
            console.log("Ключ: " + key + " " + "Значение " + appData[key]);
        }
    }



}

// appData.asking();
// appData.allServicePrices = appData.getAllServicePrices();
// appData.fullPrice = appData.getFullPrice();
// appData.servicePercentPrice = appData.getServicePercentPrices();
// appData.title = appData.getTitle("fsdfs");



appData.start();