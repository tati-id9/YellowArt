import { services } from './list_services.js';

const divServ = document.querySelector(".services__grid-box");

for (let i = 0; i < 4; i++) {
    divServ.insertAdjacentHTML(
        "beforeend",
        `<article class="services__box">
        <a href="services.html#box${i}" class="services__link"><img class="services__photo" src="${services[i].photo}"
            alt="interior design project photography"></a>
        <div class="services__box-info">
            <h3 class="services__info">Дизайн-проект <br>
                интерьера ${services[i].Name}</h3>
            <p class="services__info services__info_price">От ${services[i].price} ₽</p>
        </div>`
    );
}