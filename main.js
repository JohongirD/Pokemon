let pokemons = [
    {
    name: 'Pikachu',
    info: 'Electric',
    age: 31,
    weight: 13.2,
    image: 'images/Pikachu.jpg'
    },
    {
    name: 'Arbok',
    info: 'Poison',
    age: 18,
    weight: 143.3,
    image: 'images/Arbok.jpg'
    },
    {
    name: 'Spearow',
    info: 'Normal, Flying',
    age: 29,
    weight: 4.4,
    image: 'images/Spearow.png'
    },
    {
        name: 'Nidoran',
        info: 'Poison, Psychic',
        age: 13,
        weight: 15.4,
        image: 'images/Nidoran.png'
    },
    {
        name: 'Ninetales',
        info: 'Fire',
        age: 23,
        weight: 43.9 ,
        image: 'images/Ninetales.png'
    },
    {
        name: 'Wigglytuff',
        info: 'Fairy, Normal',
        age: 12,
        weight: 26.5 ,
        image: 'images/Wigglytuff.png'
    },
    {
        name: 'Persian',
        info: 'Normal',
        age: 24,
        weight: 70.5,
        image: 'images/Persian.jpg'
    },
    {
        name: 'Golduck',
        info: 'Water',
        age: 15,
        weight: 168.9,
        image: 'images/Golduck.png'
    },
]

const main = document.querySelector('.main');
const cards = document.createElement('div');
cards.classList.add('cards');
main.appendChild(cards);
renderPokemons(pokemons);


function renderPokemons(arr){
    cards.innerHTML = '';
    for (const card of arr) {
        const item = document.createElement('div');
        item.classList.add('cards__item');
        cards.appendChild(item);

        const itemImg = document.createElement('img');
        itemImg.src = card.image;
        itemImg.alt = card.name;
        itemImg.classList.add('cards__item__img');
        item.appendChild(itemImg);

        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cards__item__info-pokemon');
        item.appendChild(itemDiv);

        const itemBox = document.createElement('div');
        itemBox.classList.add('cards__item__box');
        itemDiv.appendChild(itemBox);

        const boxItem = document.createElement('div');
        itemBox.appendChild(boxItem);

        const itemName = document.createElement('h3');
        itemName.classList.add('cards__item__name');
        itemName.textContent = card.name;
        boxItem.appendChild(itemName);

        const itemInfo = document.createElement('p');
        itemInfo.classList.add('cards__item__info');
        itemInfo.textContent = card.info;
        boxItem.appendChild(itemInfo);

        const boxIcon = document.createElement('img');
        boxIcon.src = 'images/Mask.svg';
        boxIcon.alt = 'heart';
        boxIcon.classList.add('cards__item__icon')
        itemBox.appendChild(boxIcon);

        const itemCharacters = document.createElement('div');
        itemCharacters.classList.add('cards__item__characters');
        itemDiv.appendChild(itemCharacters);

        const itemWeight = document.createElement('span');
        itemWeight.classList.add('cards__item__weight');
        itemWeight.textContent = `${card.weight} kg`;
        itemCharacters.appendChild(itemWeight);

        const itemAge = document.createElement('span');
        itemAge.classList.add('cards__item__age');
        itemAge.textContent = `${card.age} age`;
        itemCharacters.appendChild(itemAge);
    }
}

function AtoZSort(){
    pokemons.sort((a,b) => a.name.localeCompare(b.name));
    renderPokemons(pokemons);
}
function ZtoASort(){
    pokemons.sort((a,b) => b.name.localeCompare(a.name));
    renderPokemons(pokemons);
}
function weightSort(){
    pokemons.sort((a,b) =>a.weight - b.weight);
    renderPokemons(pokemons);
}
function weightReverse(){
    pokemons.sort((a,b) => b.weight - a.weight);
    renderPokemons(pokemons);
}
function ageSort(){
    pokemons.sort((a,b) => a.age - b.age);
    renderPokemons(pokemons);
}
function ageReverse(){
    pokemons.sort((a,b) => b.age - a.age);
    renderPokemons(pokemons);
}


const AtoZ = document.querySelector('.AtoZ');
const ZtoA = document.querySelector('.ZtoA');
const weight = document.querySelector('.kgSort');
const reverseWeight = document.querySelector('.kgSort-reverse');
const ageBtn = document.querySelector('.age');
const ageReverseBtn = document.querySelector('.age-reverse');

AtoZ.addEventListener('click', AtoZSort);
ZtoA.addEventListener('click', ZtoASort);
weight.addEventListener('click',weightSort);
reverseWeight.addEventListener('click',weightReverse);
ageBtn.addEventListener('click',ageSort);
ageReverseBtn.addEventListener('click',ageReverse);