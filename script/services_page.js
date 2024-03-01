import { services as catalog } from './list_services.js';

let divServ = document.querySelector(".catalog__conteiner");

for (let i = 0; i < catalog.length; i++) {
    if (i % 2 == 0) {
        divServ.insertAdjacentHTML(
            'beforeend',
            `<div id ="box${i}" class="catalog__box">
            <article id ="desc${i}" class="catalog__desc"></article></div>`)
    }
    else {
        divServ.insertAdjacentHTML(
            "beforeend",
            `<div  id ="box${i}" class="catalog__box catalog__box_position-reverse">
            <article id ="desc${i}" class="catalog__desc"></article></div>`)
    }//вставка внутрь элемента, в конец.

    const desc = document.getElementById(`desc${i}`);

    desc.insertAdjacentHTML('afterBegin',
        `<img class="catalog__photo" src="${catalog[i].photo}" alt="interior design project photography">
        <div class="catalog__box-info">
        <h3 class="catalog__info">Дизайн-проект <br> интерьера ${catalog[i].Name}</h3>
        <p class="catalog__info catalog__info_price">От ${catalog[i].price} ₽
        </p></div>`
    ) //вставка во внутрь элемента, в начало

    desc.insertAdjacentHTML('afterEnd', `<div class="catalog__features"><ul id ="ul${i}" class="catalog__ul"></ul></div>`) //после элемента

    const ul = document.getElementById(`ul${i}`);
    for (let p of catalog[i].info) {
        let item = document.createElement('li');
        item.className = "catalog__text"
        item.innerHTML = p;
        ul.append(item);
    }
}

