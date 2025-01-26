function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    console.log(`Years => ${theAge}`);
    console.log(`Months => ${(theAge * 12).toFixed()}`);
    console.log(`Weeks => ${((theAge * 12 * 30) / 7).toFixed()}`);
    console.log(`Days => ${(theAge * 12 * 30).toFixed()}`);
    console.log(`Hours => ${(theAge * 12 * 30).toFixed()}`);
    console.log(`min => ${((theAge / 12) * 30 * 24 * 60).toFixed()}`);
    console.log(`sec => ${((theAge / 12) * 30 * 24 * 60 * 60).toFixed()}`);
  } else {
    console.log(`Age Out Of Range`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
