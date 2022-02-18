const animalList = getAnimalList();
const guessList = document.querySelectorAll('.guess');
const scoreList = document.querySelectorAll('.score');
const keyboardKeys = document.querySelectorAll('.keyboard-key');
const scoreShade = ['score', 'score10', 'score30', 'score50', 'score70', 'score90', 'score100'];

const target = getTarget();
const matchScore = getScore(target);
const modalAnimals = document.querySelector('.modal__animals');


let guessNumber = 0;
let guessAnimal = {};
let guess = [];
let currentGuess = '';
let animalShortList = [];


// console.log(target.name, matchScore);



function checkGuess(g) {
	return animalList.includes(g)? true: false;
}

function getGuess(e) {
	if (e.target.dataset.number == 'enter') {
		if (checkGuess(currentGuess)) {
			scoreGuess(currentGuess)
			guess[guessNumber] = currentGuess;
			currentGuess = '';
			guessNumber++
		} else {
			console.log('no such animal')
			return;
		}
	} else {
		if (e.target.dataset.number == 'bspace') {
			currentGuess = currentGuess.slice(0, currentGuess.length - 1);
			guessList[guessNumber].textContent = currentGuess;
		} else {
			currentGuess += e.target.dataset.number;
			guessList[guessNumber].textContent = currentGuess;
		}
	}
	if (currentGuess.length >= 2) {
		showShortList();
	}
}


function scoreGuess(g) {
	score = 0;
	animal.forEach(a => {
		if(a.name == g) {
			guessAnimal = a;
		}
	})
	guessScore = getScore(guessAnimal);
	guessList[guessNumber].classList.add('played');
	shade = Math.floor(score * scoreShade.length / matchScore) - 1;
	scoreList[guessNumber].classList.add(`${scoreShade[shade]}`);
}

function getScore(guessAnimal) {
	score = (guessAnimal.taxonomy.kingdom == target.taxonomy.kingdom)? 1: 0;
	score += (guessAnimal.taxonomy.phylum == target.taxonomy.phylum)? 2: 0;
	score += (guessAnimal.taxonomy.class == target.taxonomy.class)? 5: 0;
	score += (guessAnimal.taxonomy.order == target.taxonomy.order)? 7: 0;
	score += (guessAnimal.taxonomy.family == target.taxonomy.family)? 7: 0;
	score += (guessAnimal.diet == target.diet)? 2: 0;
	guessAnimal.location.forEach(l => score+= (target.location.includes(l))? 1: 0);
	guessAnimal.habitat.forEach(h => score+= (target.habitat.includes(h))? 2: 0);
	score += (guessAnimal.size.weight[0] >= target.size.weight[0]/2 && guessAnimal.size.weight[1] <= target.size.weight[1]*2)? 2: 0;
	score += (guessAnimal.size.length[0] >= target.size.length[0]/2 && guessAnimal.size.length[1] <= target.size.length[1]*2)? 2: 0;
	score += (guessAnimal.lifespan[0] >= target.lifespan[0]/2 && guessAnimal.lifespan[1] <= target.lifespan[1]*2)? 2: 0;
	return score;
}

function selectFromShortList(e) {
	if (e.target.className =='modal__animal') {
		currentGuess = e.target.textContent;
		guessList[guessNumber].textContent = currentGuess;
		modalAnimals.classList.remove('modal__show');
	}
}

function getShortList() {
	shortList = animalList.filter(a => a.includes(currentGuess)).slice(0, 7);
	return shortList;
}

function showShortList() {
	animalShortList = getShortList();
	animalShortListElement = '';
	animalShortList.forEach(a => {
		animalShortListElement += `<li class='modal__animal'>${a}</li>`
	});
	modalAnimals.classList.add('modal__show')
	modalAnimals.innerHTML = animalShortListElement;
	modalAnimal = document.querySelectorAll('.modal__animal');
	modalAnimal.forEach(m => addEventListener('click', selectFromShortList));
}

function getTarget() {
	const targetNumber = Math.floor(Math.random()*animal.length);
	const target = animal[targetNumber];
	return target;
}

function getAnimalList() {
	let animals = [];
	animal.forEach(a => {
		temp = a.name;
		animals.push(temp);
	})
	return animals;
}

keyboardKeys.forEach(key => key.addEventListener('click', getGuess));
