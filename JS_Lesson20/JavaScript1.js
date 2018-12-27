//1. Практика
//Сделать форму с полями Имя, Фамилия, Возраст, Пол.Пол - select.Кнопку submit.
//По нажатию на submit, форма не должна отправляться, должен вызываться метод, который
//все данные кладет в textarea в виде одной строки "Фамилия, Имя, Пол".
//По каждому нажатию в textarea добавляется новая строка, а введенные данные в input полях обнуляются.

//2. Сделать три дива друг на друге.Во внутреннем диве вывести сообщение о том, на какой див последний кликнули.При клике на внутренний должна вывестись только информация о внутреннем диве.

//3. Сделать поле ввода, кнопку и див.В диве изначально вывести "0".В поле ввода можно ввести число.По нажатию на кнопку введенное число в поле ввода добавляется к значению в диве и выводится в нем.Поле ввода очищается после добавления.
//    + Сделать 3 кнопки, которые прибавляют заранее заданные значения - 5, 15, 50.

//1)
var app = new Vue({
    el: '#app123',
    data: {
        wordtotal: '',
        word1: '',
        word2: '',
        word3: '',
        selected1: ' '
    },
    methods: {
        showonTA: function(){
            this.wordtotal += this.word1 + ' ' + this.word2 + ' ' + this.word3 + ' ' + this.selected1 + ', ';
            this.word1 = null;
            this.word2 = null; 
            this.word3 = null;
            this.selected1 = null;
        }
    }
})

//2)
var app = new Vue({
    el: '#app345',
    data: {
        message: 'Кликнули: '
    },
    methods: {
        divParentParentClick: function () {
            this.message = 'Block3'
        },
        divParentClick: function () {
            this.message = 'Block2'
        },
        divClick: function () {
            this.message = 'Block1'
        },
    }
})

//3)
var app = new Vue({
    el: '#app567',
    data: {
        counter: 0,
        number: 0,
    },
    methods: {
        increment: function (value) {
            // Увеличиваем counter на столько, сколько передали в параметре при вызове
            this.counter += parseInt(value)
        }
    }
})