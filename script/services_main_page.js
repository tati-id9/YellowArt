import {services} from './list_services.js';

let divServ = document.querySelector(".services__flex-box");

for (let i=0; i<3; i++) {
    divServ.insertAdjacentHTML(
        "beforeend",
        `<article class="services__box">
        <img class="services__photo" src="${services[i].photo}"
            alt="interior design project photography">
        <div class="services__box-info">
            <h3 class="services__info">Дизайн-проект <br>
                интерьера ${services[i].Name}</h3>
            <p class="services__info services__info_price">От ${services[i].price} ₽</p>
        </div>`
    );
}