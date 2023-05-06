const grid = document.querySelector(".grid");
const spanPlayer = document.querySelector(".player");
const tiMer = document.querySelector(".timer");
const restart = document.querySelector("#restart");

const characters = [
    "001",
    "002",
    "003",
    "004",
    "005",
    "006",
    "007",
    "008",
    "009",
    "010",
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
};

let firstCard = "";
let secondCard = "";

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll(".desabled-card");
    if (disabledCards.length === 20) {
        clearInterval(this.loop);
        alert(
            `Parabéns, ${spanPlayer.innerHTML}! seu tempo foi: ${tiMer.innerHTML} `
        );
    }
};
const checkCards = () => {
    const firstCharacter = firstCard.getAttribute("data-characters");
    const secondCharacter = secondCard.getAttribute("data-characters");

    if (firstCharacter === secondCharacter) {
        firstCard.firstChild.classList.add("desabled-card");
        secondCard.firstChild.classList.add("desabled-card");
        firstCard = "";
        secondCard = "";
        revealCard;
    } else {
        setTimeout(() => {
            firstCard.classList.remove("reveal-card");
            secondCard.classList.remove("reveal-card");
            firstCard = "";
            secondCard = "";
        }, 500);
    }
};
const revealCard = ({ target }) => {
    if (target.parentNode.className.includes("reveal-card")) {
        return;
    }
    if (firstCard === "") {
        target.parentNode.classList.add("reveal-card");
        firstCard = target.parentNode;
    } else if (secondCard === "") {
        target.parentNode.classList.add("reveal-card");
        secondCard = target.parentNode;
        checkCards();
    }
};
const createCard = (characters) => {
    const card = createElement("div", "card");
    const front = createElement("div", "face front");
    const back = createElement("div", "face back");

    front.style.backgroundImage = `url('../img/${characters}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener("click", revealCard);
    card.setAttribute("data-characters", characters);

    return card;
};

const loadGame = () => {
    const duplicateCharacters = [...characters, ...characters];
    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

    shuffledArray.forEach((characters) => {
        const card = createCard(characters);
        grid.appendChild(card);
    });
};

const starTimer = () => {
    this.loop = setInterval(() => {
        const currentTime = +tiMer.innerHTML;
        tiMer.innerHTML = currentTime + 1;
    }, 1000);
};

window.onload = () => {
    spanPlayer.innerHTML = localStorage.getItem("player");

    starTimer();
    loadGame();
};

const reloAd = () => {
    window.location.reload();
};
restart.addEventListener("click", reloAd);
