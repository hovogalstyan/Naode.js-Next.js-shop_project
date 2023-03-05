const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(express.static(__dirname + '/photos'))

const products = [
    {
        id: 1001,
        name: 'iphone 14 Pro Max',
        price: 1200,
        photo: 'i1.webp',
        images: ['i1.webp', 'i2.webp', 'i3.webp', 'i4.webp'],
        color: ['black', 'red', 'wheat', 'royalblue', 'gray'],
        description: 'В феврале этого года я выпустил обзор iPhone 13 Pro и в нем пообещал, что буду продолжать делать обзоры новых айфонов. Apple - компания инновационная, многое из того, что они придумывают и реализуют для своих смартфонов, копируют другие производители (однако и в Apple также могут заимствовать различные находки других производителей), в любом случае айфоны - это интересные устройства, достойные изучения, так что я буду продолжать данную традицию'

    },
    {
        id: 1002,
        name: 'iphone 12 pro',
        price: 1000,
        photo: 'ip1.webp',
        images: ['ip1.webp', 'ip2.webp', 'ip3.webp', 'ip4.webp'],
        color: ['red', 'wheat', 'royalblue', 'gray'],
        description: 'Ну что, в этом году без революций? Предыдущий iPhone 11 Pro отличался от своего предка довольно радикально, впервые появились большие круглые камеры-«конфорки», и их впервые стало три. Нынешнее, 12-е, поколение можно было бы назвать 11s. Много приятных, но не настолько заметных новшеств. Ну почти. Но обо всем по порядку (если спешите, то сразу к выводам).'

    },
    {
        id: 1003,
        name: 'iPhone 11',
        price: 750,
        photo: 'ipn1.webp',
        images: ['ipn1.webp', 'ipn2.png', 'ipn3.webp'],
        color: ['black', 'wheat', 'royalblue', 'gray'],
        description: 'Дисплей Liquid Retina HD ЖК‑дисплей Multi-Touch с технологией IPS, на всю переднюю панель, диагональ 6,1 дюйма 1792×828 пикселей, 326 пикселей на дюйм Контрастность 1400:1 (стандартная) Олеофобное покрытие, устойчивое к появлению следов от пальцев Поддержка одновременного отображения нескольких языков и наборов символов.'
    }, {
        id: 1004,
        name: 'Xiaomi Redmi Note 10 ',
        price: 450,
        photo: 'r1.webp',
        images: ['r1.webp', 'r3.webp', 'r4.webp'],
        color: ['black', 'red', 'wheat', 'royalblue'],
        description: 'мартфоны серии Redmi Note у компании Xiaomi обычно бывают достаточно интересными: Redmi Note 9 Pro и получился удачным, и пользуется большой популярностью у пользователей, ну и я, конечно же, ждал, какой получится новая модель этой серии.'
    }, {
        id: 1005,
        name: 'Samsung Galaxy S23',
        price: 1450,
        photo: 's1.webp',
        images: ['s1.webp', 's2.webp', 's3.jpg', 's4.webp'],
        color: ['black', 'red', 'wheat', 'gray'],
        description: 'Samsung провела презентацию своих флагманских смартфонов S-линейки 2023 года. Обычно кроме смартфонов компания представляет также новые наушники, умные часы или планшеты. В этом году Samsung решила сфокусироваться исключительно на смартфонах. Никаких неожиданностей не произошло: линейка состоит из трех моделей. Samsung Galaxy S23, Galaxy S23+ и Galaxy S23 Ultra. Нам уже удалось их немного покрутить в руках и составить первое впечатление. Хотя, конечно, подробно поговорим уже в полноценных обзорах. В общем, отличий от'
    },
    {
        id: 1006,
        name: 'iphone 14 Pro Max',
        price: 1200,
        photo: 'i2.webp',
        images: ['i2.webp', 'i1.webp', 'i3.webp', 'i4.webp'],
        color: ['black', 'red', 'wheat', 'royalblue', 'gray'],
        description: 'В феврале этого года я выпустил обзор iPhone 13 Pro и в нем пообещал, что буду продолжать делать обзоры новых айфонов. Apple - компания инновационная, многое из того, что они придумывают и реализуют для своих смартфонов, копируют другие производители (однако и в Apple также могут заимствовать различные находки других производителей), в любом случае айфоны - это интересные устройства, достойные изучения, так что я буду продолжать данную традицию'

    },
    {
        id: 1007,
        name: 'iphone 12 pro',
        price: 1000,
        photo: 'ip2.webp',
        images: ['ip2.webp', 'ip1.webp', 'ip3.webp', 'ip4.webp'],
        color: ['red', 'wheat', 'royalblue', 'gray'],
        description: 'Ну что, в этом году без революций? Предыдущий iPhone 11 Pro отличался от своего предка довольно радикально, впервые появились большие круглые камеры-«конфорки», и их впервые стало три. Нынешнее, 12-е, поколение можно было бы назвать 11s. Много приятных, но не настолько заметных новшеств. Ну почти. Но обо всем по порядку (если спешите, то сразу к выводам).'

    },
    {
        id: 1008,
        name: 'iPhone 11',
        price: 750,
        photo: 'ipn2.png',
        images: ['ipn2.png', 'ipn1.webp', 'ipn3.webp'],
        color: ['black', 'wheat', 'royalblue', 'gray'],
        description: 'Дисплей Liquid Retina HD ЖК‑дисплей Multi-Touch с технологией IPS, на всю переднюю панель, диагональ 6,1 дюйма 1792×828 пикселей, 326 пикселей на дюйм Контрастность 1400:1 (стандартная) Олеофобное покрытие, устойчивое к появлению следов от пальцев Поддержка одновременного отображения нескольких языков и наборов символов.'
    }, {
        id: 1009,
        name: 'Xiaomi Redmi Note 10 ',
        price: 450,
        photo: 'r3.webp',
        images: ['r3.webp', 'r1.webp', 'r4.webp'],
        color: ['black', 'red', 'wheat', 'royalblue'],
        description: 'мартфоны серии Redmi Note у компании Xiaomi обычно бывают достаточно интересными: Redmi Note 9 Pro и получился удачным, и пользуется большой популярностью у пользователей, ну и я, конечно же, ждал, какой получится новая модель этой серии.'
    }, {
        id: 1010,
        name: 'Samsung Galaxy S23',
        price: 1450,
        photo: 's3.jpg',
        images: ['s3.jpg','s2.webp', 's1.webp', 's4.webp'],
        color: ['black', 'red', 'wheat', 'gray'],
        description: 'Samsung провела презентацию своих флагманских смартфонов S-линейки 2023 года. Обычно кроме смартфонов компания представляет также новые наушники, умные часы или планшеты. В этом году Samsung решила сфокусироваться исключительно на смартфонах. Никаких неожиданностей не произошло: линейка состоит из трех моделей. Samsung Galaxy S23, Galaxy S23+ и Galaxy S23 Ultra. Нам уже удалось их немного покрутить в руках и составить первое впечатление. Хотя, конечно, подробно поговорим уже в полноценных обзорах. В общем, отличий от'
    },

    {
        id: 1012,
        name: 'iphone 12 pro',
        price: 1000,
        photo: 'ip3.webp',
        images: ['ip3.webp', 'ip2.webp', 'ip1.webp', 'ip4.webp'],
        color: ['black'],
        description: 'Ну что, в этом году без революций? Предыдущий iPhone 11 Pro отличался от своего предка довольно радикально, впервые появились большие круглые камеры-«конфорки», и их впервые стало три. Нынешнее, 12-е, поколение можно было бы назвать 11s. Много приятных, но не настолько заметных новшеств. Ну почти. Но обо всем по порядку (если спешите, то сразу к выводам).'

    },
    {
        id: 1013,
        name: 'iPhone 11',
        price: 750,
        photo: 'ipn3.webp',
        images: ['ipn1.webp', 'ipn2.png', 'ipn3.webp'],
        color: ['royalblue', 'gray'],
        description: 'Дисплей Liquid Retina HD ЖК‑дисплей Multi-Touch с технологией IPS, на всю переднюю панель, диагональ 6,1 дюйма 1792×828 пикселей, 326 пикселей на дюйм Контрастность 1400:1 (стандартная) Олеофобное покрытие, устойчивое к появлению следов от пальцев Поддержка одновременного отображения нескольких языков и наборов символов.'
    }, {
        id: 1014,
        name: 'Xiaomi Redmi Note 10 ',
        price: 450,
        photo: 'r4.webp',
        images: ['r4webp', 'r3.webp', 'r1.webp'],
        color: ['gray'],
        description: 'мартфоны серии Redmi Note у компании Xiaomi обычно бывают достаточно интересными: Redmi Note 9 Pro и получился удачным, и пользуется большой популярностью у пользователей, ну и я, конечно же, ждал, какой получится новая модель этой серии.'
    }, {
        id: 1015,
        name: 'Samsung Galaxy S23',
        price: 1450,
        photo: 's4.webp',
        images: ['s4.webp', 's2.webp', 's3.jpg', 's1.webp'],
        color: ['gray'],
        description: 'Samsung провела презентацию своих флагманских смартфонов S-линейки 2023 года. Обычно кроме смартфонов компания представляет также новые наушники, умные часы или планшеты. В этом году Samsung решила сфокусироваться исключительно на смартфонах. Никаких неожиданностей не произошло: линейка состоит из трех моделей. Samsung Galaxy S23, Galaxy S23+ и Galaxy S23 Ultra. Нам уже удалось их немного покрутить в руках и составить первое впечатление. Хотя, конечно, подробно поговорим уже в полноценных обзорах. В общем, отличий от'
    },
    {
        id: 1016,
        name: 'iphone 14 Pro Max',
        price: 1200,
        photo: 'i4.webp',
        images: ['i4.webp', 'i2.webp', 'i3.webp', 'i1.webp'],
        color: ['wheat', 'royalblue', 'gray'],
        description: 'В феврале этого года я выпустил обзор iPhone 13 Pro и в нем пообещал, что буду продолжать делать обзоры новых айфонов. Apple - компания инновационная, многое из того, что они придумывают и реализуют для своих смартфонов, копируют другие производители (однако и в Apple также могут заимствовать различные находки других производителей), в любом случае айфоны - это интересные устройства, достойные изучения, так что я буду продолжать данную традицию'

    },
    {
        id: 1017,
        name: 'iphone 12 pro',
        price: 1000,
        photo: 'ip4.webp',
        images: ['ip4.webp', 'ip2.webp', 'ip3.webp', 'ip1.webp'],
        color: ['black', 'red'],
        description: 'Ну что, в этом году без революций? Предыдущий iPhone 11 Pro отличался от своего предка довольно радикально, впервые появились большие круглые камеры-«конфорки», и их впервые стало три. Нынешнее, 12-е, поколение можно было бы назвать 11s. Много приятных, но не настолько заметных новшеств. Ну почти. Но обо всем по порядку (если спешите, то сразу к выводам).'

    },
    {
        id: 1018,
        name: 'iPhone 11',
        price: 750,
        photo: 'ipn2.png',
        images: ['ipn2.webp', 'ipn1.webp', 'ipn3.webp'],
        color: [],
        description: 'Дисплей Liquid Retina HD ЖК‑дисплей Multi-Touch с технологией IPS, на всю переднюю панель, диагональ 6,1 дюйма 1792×828 пикселей, 326 пикселей на дюйм Контрастность 1400:1 (стандартная) Олеофобное покрытие, устойчивое к появлению следов от пальцев Поддержка одновременного отображения нескольких языков и наборов символов.'
    }, {
        id: 1019,
        name: 'Xiaomi Redmi Note 10 ',
        price: 450,
        photo: 'r1.webp',
        images: ['r1.webp', 'r3.webp', 'r4.webp'],
        color: ['black', 'red', 'wheat', 'royalblue', 'gray'],
        description: 'мартфоны серии Redmi Note у компании Xiaomi обычно бывают достаточно интересными: Redmi Note 9 Pro и получился удачным, и пользуется большой популярностью у пользователей, ну и я, конечно же, ждал, какой получится новая модель этой серии.'
    },  {
        id: 1020,
        name: 'Samsung Galaxy S23',
        price: 1450,
        photo: 's2.webp',
        images: ['s2.webp', 's2.webp', 's3.jpg', 's1.webp'],
        color: ['gray'],
        description: 'Samsung провела презентацию своих флагманских смартфонов S-линейки 2023 года. Обычно кроме смартфонов компания представляет также новые наушники, умные часы или планшеты. В этом году Samsung решила сфокусироваться исключительно на смартфонах. Никаких неожиданностей не произошло: линейка состоит из трех моделей. Samsung Galaxy S23, Galaxy S23+ и Galaxy S23 Ultra. Нам уже удалось их немного покрутить в руках и составить первое впечатление. Хотя, конечно, подробно поговорим уже в полноценных обзорах. В общем, отличий от'
    },

]

const cart = []

app.get('/products', (req, res) => {
    res.send({products})
})

app.get('/cart', (req, res) => {
    res.send({cart})
})

app.post('/moveToCart', (req, res) => {
    let {id} = req.body
    let inCart = cart.find(elm => elm.id == id)
    if (inCart) {
        inCart.quantity++
    } else {
        let product = products.find(elm => elm.id == id)
        product.quantity = 1
        cart.push(product)
    }
    res.send({cart})
})

app.put('/quantityUp', (req, res) => {
    let {id} = req.body
    let inCart = cart.find(elm => elm.id == id)
    if (inCart) {
        inCart.quantity++
    }
    res.send({cart})
})

app.put('/quantityDown', (req, res) => {
    let {id} = req.body
    let index = cart.findIndex(elm => elm.id == id)
    if (index != -1) {
        if (cart[index].quantity > 1) {
            cart[index].quantity--
        } else {
            cart.splice(index, 1)
        }
    }
    res.send({cart})
})

app.listen(5000, () => {
    console.log('server started on the port 127.0.0.1:5000')
})