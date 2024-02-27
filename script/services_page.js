import {services as catalog} from './list_services.js';

let divServ = document.querySelector(".catalog__conteiner");

for (let i=0; i<catalog.length; i++) {
    if (i%2 == 0) {
    divServ.insertAdjacentHTML(
        "beforeend",
        `<div class="catalog__box">
        <article class="catalog__desc desc${i}">
        <img class="catalog__photo" src="${catalog[i].photo}" alt="interior design project photography">
        <div class="catalog__box-info">
        <h3 class="catalog__info">Дизайн-проект <br> интерьера ${catalog[i].Name}</h3>
        <p class="catalog__info catalog__info_price">От ${catalog[i].price} ₽ </p>
        </div></article></div>`)
    }
    else {
    divServ.insertAdjacentHTML(
        "beforeend",
        `<div class="catalog__box catalog__box_position-reverse">
        <article class="catalog__desc desc${i}">
        <img class="catalog__photo" src="${catalog[i].photo}" alt="interior design project photography">
        <div class="catalog__box-info">
        <h3 class="catalog__info">Дизайн-проект <br> интерьера ${catalog[i].Name}</h3>
        <p class="catalog__info catalog__info_price">От ${catalog[i].price} ₽
        </p></div></article></div>`)
    }

    const features = document.querySelector(`.desc${i}`);
    features.insertAdjacentHTML('afterEnd', `<div class="catalog__features"><ul class="ul${i}"></ul></div>`)
    let ul = document.querySelector(`.ul${i}`);
    for(let p of catalog[i].info) {
        let item = document.createElement('li');
        item.className ="catalog__text"
        item.innerHTML = p;
        ul.append(item);
    }
}

