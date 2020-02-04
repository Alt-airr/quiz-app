const data = [
    {   id: 0,
        text: 'У какого моря нет берегов?',
        answers: ['Саргассово море', 'Море Лаптевых', 'Карское море', 'Мёртвое море'],
        correct: 'Саргассово море',
        type: 'radio'
    },

    {   id: 1,
        text: 'Как назывался флагманский корабль, на котором Христофор Колумб прибыл в Америку?',
        answers: ['Христофор', 'Санта-Мария', 'Виктория', 'Золотая лань'],
        correct: 'Санта-Мария',
        type: 'radio'
    },    
    {   id: 2,
        text: 'Широта Северного полюса (в градусах) составляет...',
        correct: '90',
        type: 'input'
    },    
    {   id: 3,
        text: 'Самую большую по площади дельту в мире имеет река...',
        answers: ['Ганг', 'Амазонка', 'Обь', 'Ефрат'],
        correct: 'Ганг',
        type: 'radio'
    },
    {   id: 4,
        text: 'Раньше на картах существовало место под названием Эфиопский океан. Где оно находилось?',
        answers: ['Тихий океан у берегов Австралии', 'Средиземное море', 'Юг Атлантического океана', 'Каспийское море'],
        correct: 'Юг Атлантического океана',
        type: 'select'
    },
    {   id: 5,
        text: 'Выберите страны, являющиеся сухопутными соседями Монако',
        answers: ['Италия', 'Франция', 'Германия', 'Австрия','Лихтенштейн', ],
        correct: ['Франция'],
        type: 'checkbox'
    },
    {   id: 6,
        text: 'Выберите страны имеющие выход к индийскому океану',
        answers: ['Мьянма', 'Мозамбик', 'Сенегал', 'Никарагуа','Бангладеш', ],
        correct: ['Мьянма', 'Мозамбик', 'Бангладеш'],
        type: 'checkbox'
    }
]

export default  data;