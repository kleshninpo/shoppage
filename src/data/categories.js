const categories = [
    {id: 1, href: '/clothesAndAccessories', text: 'Одежда и аксессуары', submenu: [
            {id: 1, href:'/manClothes', text: 'Мужская Одежда'},
            {id: 2, href:'/womanClothes', text: 'Женская Одежда'},
            {id: 3, href:'/accessories', text: 'Аксессуары'},
            ]},
    {id: 2, href: '/shoes', text: 'Обувь', submenu: [
            {id: 1, href:'/manClothes', text: 'Сапоги'},
            {id: 2, href:'/womanClothes', text: 'Городские сапоги'},
            {id: 3, href:'/accessories', text: 'Сапоги для дома'},
        ]},
    {id: 3, href: '/jewelry', text: 'Украшения', submenu: [
            {id: 1, href:'/manClothes', text: 'Жемчуга'},
            {id: 2, href:'/womanClothes', text: 'Бриллианты'},
            {id: 3, href:'/accessories', text: 'Алмазные ожерелья'},
        ]},
    {id: 4, href: '/fitnessAndHealth', text: 'Красота и Здоровье', submenu: [
            {id: 1, href:'/manClothes', text: 'Крема для рук'},
            {id: 2, href:'/womanClothes', text: 'Крема для ног'},
            {id: 3, href:'/accessories', text: 'Бальзамы для души'},
        ]},
    {id: 5, href: '/homeGoods', text: 'Товары для дома', submenu: [
            {id: 1, href:'/manClothes', text: 'Телевизоры'},
            {id: 2, href:'/womanClothes', text: 'Подставки для домашних сапог'},
            {id: 3, href:'/accessories', text: 'Телевизоры поменьше'},
        ]},
    {id: 6, href: '/kitchenGoods', text: 'Товары для кухни', submenu: [
            {id: 1, href:'/manClothes', text: 'Ножи'},
            {id: 2, href:'/womanClothes', text: 'Топоры'},
            {id: 3, href:'/accessories', text: 'Пилы'},
        ]},
];
export default categories;