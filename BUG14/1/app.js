function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let i = zName.trim().indexOf(" ");
    if (i > 0) {
      return ` ${zName.slice(0, i)} ${zName.slice(i + 1, i + 2).toUpperCase()}`;
    } else {
      return `${zName}`;
    }
  }
  function ageWithMessage(zAge) {
    return ` Your Age Is ${zAge.slice(0, 2)}`;
  }
  function countryTwoLetters(zCountry) {
    return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;

    // Write Your Code Here
    // Egypt =>
    // Syria => You Live In SY
  }
  function fullDetails() {
    return `${namePattern(zName)}${ageWithMessage(zAge)}${countryTwoLetters(
      zCountry
    )}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
