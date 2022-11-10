const cardArray = [
    {
        name: 'alex',
        image: 'images/alex.jpg',
    },
    {
        name: 'derek',
        image: 'images/derek.jpg',
    },
    {
        name: 'ben',
        image: 'images/ben.jpg',
    },
    {
        name: 'kellin',
        image: 'images/kellin.jpeg',
    },
    {
        name: 'luke',
        image: 'images/luke.jpg',
    },
    {
        name: 'parker',
        image: 'images/parker.jpg',
    },
    {
        name: 'alex',
        image: 'images/alex.jpg',
    },
    {
        name: 'derek',
        image: 'images/derek.jpg',
    },
    {
        name: 'ben',
        image: 'images/ben.jpg',
    },
    {
        name: 'kellin',
        image: 'images/kellin.jpeg',
    },
    {
        name: 'luke',
        image: 'images/luke.jpg',
    },
    {
        name: 'parker',
        image: 'images/parker.jpg',
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result')
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = []


function createBoard(){
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }
}

createBoard();

function checkMatch(){
   const cards = document.querySelectorAll('img')
   const optionOneId =cardsChosenIds[0];
   const optionTwoId = cardsChosenIds[1];

   if(optionOneId == optionTwoId){
    cards[optionOneId].setAttribute('src', '/images/blank.png');
    cards[optionTwoId].setAttribute('src', '/images/blank.png');
    alert('You have clikced the same image!')
   }else if(cardsChosen[0] === cardsChosen[1]){
        alert('You found a match!');
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry, try again')
    }
    
    cardsChosen = [];
    cardsChosenIds  = [];
    resultDisplay.textContent = cardsWon.length;
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Congratulations you found them all'
    }
}

function flipCard(){
    const cardId =this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].image);
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}