let employees = [
    {
        Name: "Марк",
        photo: "img/team/team_mark.png",
    },
    {
        Name: "Катя",
        photo: "img/team/team_kat.png",
    },
    {
        Name: "Таня",
        photo: "img/team/team_tati.png",
    },
    {
        Name: "Максим",
        photo: "img/team/team_max.png",
    },
    {
        Name: "Настя",
        photo: "img/team/team_nastya.png",
    },
];

let divContacts = document.querySelector(".team__flex");

for (let employee of employees) {
    divContacts.insertAdjacentHTML(
        "beforeend",
        `<figure class="team__box"><img class="team__img" src="${employee.photo}" alt="Photo">
      <figcaption class="team__name">${employee.Name}</figcaption></figure>`
    );
}