var animal = ["images/bat.jpg", "images/bear.jpg", "images/beaver.jpg", "images/bee.jpg", "images/bucking bronco.jpg", "images/bull.jpg", "images/butterfly.jpg", "images/camel.jpg", "images/cat.jpg", "images/cow.jpg", "images/crab.jpg", "images/crocodile.jpg", "images/deer.jpg", "images/dog.jpg", "images/donkey.jpg", "images/dragon.jpg", "images/duck.jpg", "images/elephant.jpg", "images/fish.jpg", "images/frog.jpg", "images/giraffe.jpg", "images/goat.jpg", "images/grasshopper.jpg", "images/horse.jpg", "images/kangaroo.jpg", "images/lion.jpg", "images/lizard.jpg", "images/monkey.jpg", "images/mosquito.jpg", "images/peacock.jpg", "images/penguin.jpg", "images/pig.jpg", "images/porcupine.jpg", "images/rabbit.jpg", "images/shark.jpg", "images/skunk.jpg", "images/snail.jpg", "images/snake.jpg", "images/spider.jpg", "images/squirrel.jpg", "images/t-rex.jpg", "images/turtle.jpg", "images/walrus.jpg", "images/whale.jpg", "images/worm.jpg"];

var person = ['Spiderman', 'pirate', 'Batman', 'cowboy', 'ballerina', 'skier', 'magician', 'figure skater', 'Cinderella', 'queen', 'police', 'firefighter', 'mailman', 'chef', 'doctor', 'teacher', 'gymnast', 'basketball player', 'boxer', 'baseball player', 'pilot', 'dentist', 'gardener', 'swimmer', 'rock climber', 'runner', 'fisherman', 'babysitter', 'truck driver', "choir director", 'baby'];

var famousPeople = ['Frankenstein', 'Chuck Norris', 'Bill Clinton', 'Nancy Kerrigan', 'Jane Austen', "Donald Trump", 'Neil Armstrong', 'Martha Stewart', 'Amelia Earhart', 'Zac Effron', 'Princess Diana', 'Abraham Lincoln', 'Hans Solo', 'Will Ferrell', 'Mary Poppins', 'Charlie Chaplin', 'Vanna White', 'Richard Simmons', 'Big Bird', 'Paul Bunyan', 'John Travolta', 'Michael Jackson', 'Mr. Rogers', 'Scrooge', 'Michael Phelps', 'Billy Joel'];

var phrases = ['Kill two Birds with one Stone.', "Keep your Eyes Peeled.", "Steal Someone's Thunder", 'Beating a Dead Horse.', 'Head over Heels', 'Go Fly a Kite!', 'Barking up the Wrong Tree', 'Burn the Midnight Oil.', 'Cry over spilt milk.', 'Cut Corners', 'Last Straw', 'Miss the Boat', 'Off ones Rocker', 'At the Drop of a Hat', 'A Penny for your Thoughts.', 'Whole Nine Yards', 'Sit on the Fence', 'Once in a Blue Moon.', 'Jump on the Bandwagon', 'Curiosity killed the Cat', 'A Picture Paints a 1000 Words.', 'Cut the Mustard', "Money doesn't grow on trees", 'Birds of a Feather, Flock Together.', 'Float like a Butterfly, Sting like a Bee.', 'Winner Winner, Chicken Dinner!', "Chick Flick", "Happy as a Clam", "Back-seat Driver", 'Close, but no Cigar!', "Cold Turkey", "Fly off the Handle", "Hold your Horses!", 'Lame Duck', 'Smoke and Mirrors', 'Seven Year Itch', 'Pipe Dream', "Knock your Socks off.", 'Son of a Gun', 'Hit the Sack', 'Make a long Story Short.', "Speak of the Devil!", "Actions Speak Louder than Words.", "Show me the Money!", "Under the Weather", "Over the Moon", "Bun in the Oven", "Cat got your Tongue?"];


function flip() {
	var x = Math.floor(Math.random() * 2);
	if (x < 1) {
		document.getElementById('coin').innerHTML = "Heads win!";
	} else {
		document.getElementById('coin').innerHTML = "Tails win!";
	}
}



function randomAnimal() {
	var random = Math.floor(Math.random() * animal.length);
	document.getElementById('pic').src = animal[random];

}

function randomPerson() {
	var random = Math.floor(Math.random() * person.length);
	document.getElementById('psn').innerHTML = person[random];
}


function randomFamousPeople() {
	var random = Math.floor(Math.random() * famousPeople.length);
	document.getElementById('fp').innerHTML = famousPeople[random];
}

function randomPhrases() {
	var random = Math.floor(Math.random() * phrases.length);
	document.getElementById('ph').innerHTML = phrases[random];
}


var count = 0;

function minusOneL() {
	if (count > 0) {
		document.getElementById("changeL").innerHTML = --count;
	}
}

function plusOneL() {
	document.getElementById("changeL").innerHTML = ++count;
}


var count2 = 0;

function minusOneR() {
	if (count2 > 0) {
		document.getElementById("changeR").innerHTML = --count2;
	}
}

function plusOneR() {

	document.getElementById("changeR").innerHTML = ++count2;
}