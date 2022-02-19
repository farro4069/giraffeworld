const giraffeLogo = document.querySelector('.logo');
const animalList = getAnimalList();
const guessList = document.querySelectorAll('.guess');
const scoreList = document.querySelectorAll('.score');
const keyboardKeys = document.querySelectorAll('.keyboard-key');
const scoreShade = ['score', 'score10', 'score30', 'score50', 'score70', 'score90', 'score100'];

let score = {taxonomy: 0, environment: 0, other: 0};
const target = getTarget();
const matchScore = getScore(target);
const modalAnimals = document.querySelector('.modal__animals');
const modalAlert = document.querySelector('.modal__alert');

let message = '';
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
	score = {taxonomy: 0, environment: 0, other: 0};
	animal.forEach(a => {
		if(a.name == g) {
			guessAnimal = a;
		}
	})
	guessScore = getScore(guessAnimal);
	guessList[guessNumber].classList.add('played');
	if(guessAnimal == target) {guessList[guessNumber].classList.add('correct')};
	shade = Math.floor(score.taxonomy * scoreShade.length / matchScore.taxonomy) - 1;
	scoreList[guessNumber].children[0].classList.add(`${scoreShade[shade]}`);
	shade = Math.floor(score.environment * scoreShade.length / matchScore.environment) - 1;
	scoreList[guessNumber].children[1].classList.add(`${scoreShade[shade]}`);
	shade = Math.floor(score.other * scoreShade.length / matchScore.other) - 1;
	scoreList[guessNumber].children[2].classList.add(`${scoreShade[shade]}`);
}

function getScore(guessAnimal) {
	score.taxonomy += (guessAnimal.taxonomy.kingdom == target.taxonomy.kingdom)? 1: 0;
	score.taxonomy += (guessAnimal.taxonomy.phylum == target.taxonomy.phylum)? 2: 0;
	score.taxonomy += (guessAnimal.taxonomy.class == target.taxonomy.class)? 5: 0;
	score.taxonomy += (guessAnimal.taxonomy.order == target.taxonomy.order)? 7: 0;
	score.taxonomy += (guessAnimal.taxonomy.family == target.taxonomy.family)? 7: 0;
	score.other += (guessAnimal.diet == target.diet)? 2: 0;
	guessAnimal.location.forEach(l => score.environment += (target.location.includes(l))? 1: 0);
	guessAnimal.habitat.forEach(h => score.environment += (target.habitat.includes(h))? 2: 0);
	score.other += (guessAnimal.size.weight[0] >= target.size.weight[0]/5 && guessAnimal.size.weight[1] <= target.size.weight[1]*5)? 2: 0;
	score.other += (guessAnimal.size.weight[0] >= target.size.weight[0]/2 && guessAnimal.size.weight[1] <= target.size.weight[1]*2)? 2: 0;
	score.other += (guessAnimal.size.weight[0] >= target.size.weight[0]/1 && guessAnimal.size.weight[1] <= target.size.weight[1]*1)? 2: 0;
	score.other += (guessAnimal.size.length[0] >= target.size.length[0]/5 && guessAnimal.size.length[1] <= target.size.length[1]*5)? 2: 0;
	score.other += (guessAnimal.size.length[0] >= target.size.length[0]/2 && guessAnimal.size.length[1] <= target.size.length[1]*2)? 2: 0;
	score.other += (guessAnimal.lifespan[0] >= target.lifespan[0]/2 && guessAnimal.lifespan[1] <= target.lifespan[1]*2)? 2: 0;
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
	shortList = animalList.filter(a => a.includes(currentGuess)).slice(0, 9);
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
	modalAnimals.addEventListener('click', () => {}, false);
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

function displayTarget() {
	message = target.name;
	modalAlert.textContent = message;
	modalAlert.classList.add('modal__notice');
	setTimeout(() => modalAlert.classList.remove('modal__notice'), 4000);
}

keyboardKeys.forEach(key => key.addEventListener('click', getGuess));
giraffeLogo.addEventListener('click', displayTarget);