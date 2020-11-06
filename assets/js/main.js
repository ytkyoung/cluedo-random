console.log('test');

const suspectOutput = document.getElementById('verdaechtiger');
const waffeOutput = document.getElementById('waffe');
const raumOutput = document.getElementById('raum');
const bildOutput = document.getElementById('bild');

// Verdächtige
const mrGreen = {
  verdaechtiger: 'mrGreen',
  firstName: 'Jacob',
  lastName: 'Green',
  occupation: 'Entrepreneur',
  age: 45,
  description: 'He has a lot of connections',
  image: 'https://www.ultraboardgames.com/clue/gfx/mr-green.jpg',
  color: 'green',
};
const drOrchid = {
  verdaechtiger: 'drOrchid',
  firstName: 'Doctor',
  lastName: 'Orchid',
  occupation: 'Scientist',
  age: 26,
  description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
  image: 'https://www.ultraboardgames.com/clue/gfx/mrs-white.jpg',
  color: 'white',
};
const profPlum = {
  verdaechtiger: 'profPlum',
  firstName: 'Victor',
  lastName: 'Plum',
  occupation: 'Designer',
  age: 22,
  description: 'Billionaire video game designer',
  image: 'https://www.ultraboardgames.com/clue/gfx/professor-plum.jpg',
  color: 'purple',
};
const missScarlet = {
  verdaechtiger: 'missScarlet',
  firstName: 'Kasandra',
  lastName: 'Scarlet',
  occupation: 'Actress',
  age: 31,
  description: 'She is an A-list movie star with a dark past',
  image: 'https://www.ultraboardgames.com/clue/gfx/miss-scarlet.jpg',
  color: 'red',
};
const mrsPeacock = {
  verdaechtiger: 'mrsPeacock',
  firstName: 'Eleanor',
  lastName: 'Peacock',
  occupation: 'Socialité',
  age: 36,
  description: 'She is from a wealthy family and uses her status and money to earn popularity',
  image: 'https://www.ultraboardgames.com/clue/gfx/mrs-peacock.jpg',
  color: 'blue',
};
const mrMustard = {
  verdaechtiger: 'mrMustard',
  firstName: 'Mustard',
  lastName: 'Peacock',
  occupation: 'Retired Football player',
  age: 62,
  description: 'He is a former football player who tries to get by on his former glory',
  image: 'https://www.ultraboardgames.com/clue/gfx/colonel-mustard.jpg',
  color: 'yellow',
};

const suspectsArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Waffen
const weaponsArray = [
  { name: 'rope', weight: 10 },
  { name: 'knife', weight: 8 },
  { name: 'candlestick', weight: 2 },
  { name: 'dumbbell', weight: 30 },
  { name: 'poison', weight: 2 },
  { name: 'axe', weight: 15 },
  { name: 'bat', weight: 13 },
  { name: 'trophy', weight: 25 },
  { name: 'pistol', weight: 20 },
];

// Räume
const roomsArray = [
  { name: 'Dinning Room' },
  { name: 'Conservatory' },
  { name: 'Kitchen' },
  { name: 'Study' },
  { name: 'Library' },
  { name: 'Billiard Room' },
  { name: 'Lounge' },
  { name: 'Ballroom' },
  { name: 'Hall' },
  { name: 'spa' },
  { name: 'Living Room' },
  { name: 'Observatory' },
  { name: 'Theater' },
  { name: 'Guest House' },
  { name: 'Patio' },
];

const randomNum = (x) => Math.floor(Math.random() * x.length);

console.log(randomNum(roomsArray));

const zufallsRaum = roomsArray[randomNum(roomsArray)].name;
const zufallsWaffe = weaponsArray[randomNum(weaponsArray)].name;
const zufallsVerdaechtiger = `${suspectsArray[randomNum(suspectsArray)].firstName} ${
  suspectsArray[randomNum(suspectsArray)].lastName
}`;

const verdaechtigerBild = suspectsArray[randomNum(suspectsArray)].image;

raumOutput.innerHTML = zufallsRaum;
waffeOutput.innerHTML = zufallsWaffe;
suspectOutput.innerHTML = zufallsVerdaechtiger;
bildOutput.innerHTML = `<img src="${verdaechtigerBild}" class="bild" alt="der Mörder"></img>`;

// console.log(suspectsArray);
// console.log(weaponsArray);
// console.log(roomsArray);
// console.log(roomsArrayTest);
