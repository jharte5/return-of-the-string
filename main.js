function capitalize(str) {
  return str.toUpperCase();
}

function exclaim(str) {
  return str + '!';
}

function firstCharacter(Colin) {
  return Colin[0];
}

function lastCharacter(Colin) {
  return Colin[Colin.length - 1]
}

function oneCharacter(hello, bye) {
  return hello[bye];
}

function twoCharacters(brkfst, lnch, dnr) {
  
  return brkfst[lnch] + brkfst[dnr];

}

function initials(str) {
  const spaceIndex = firstCharacter(str);
  const spaceIndex = str.indexOf(' ');
  const secondInitial = str[spaceIndex + 1]
  return firstInitial + '.' + secondInitial + '.';

  // let index = str.indexOf
  // return firstCharacter(str) +
}

function yeller(str) {
  return capitalize(exclaim(exclaim(exclaim(str))));
}


module.exports = {
  capitalize,
  exclaim,
  firstCharacter,
  lastCharacter,
  oneCharacter,
  twoCharacters,
  initials,
  yeller,
};