// function checkStatus(a, b, c) {
//   const allParms = [a, b, c];
//   let name, age, apv;
//   for (let i = 0; i < allParms.length; i++) {
//     typeof allParms[i] === "string"
//       ? (name = allParms[i])
//       : typeof allParms[i] === "number"
//       ? (age = allParms[i])
//       : typeof allParms[i] === "boolean"
//       ? (apv = allParms[i])
//       : null;
//   }
//   if ((apv === true)) {
//     apv = ", You Are Available For Hire";
//   } else {
//     apv = ", You Are  Not Available For Hire";
//   }

//   console.log(`Hello ${name}, Your Age Is ${age} ${apv}`);
// }

function checkStatus(a, b, c) {
  let parms = [a, b, c];
  const name = parms.find((e) => typeof e === "string");
  const age = parms.find((e) => typeof e === "number");
  const apv = parms.find((e) => typeof e === "boolean");
  if (name || age || typeof apv === "boolean") {
    let h = "";
    if (apv === true) {
      h = ", You Are Available For Hire";
    } else if (apv === false) {
      h = ", You Are  Not Available For Hire";
    }
    console.log(`Hello ${name}, Your Age Is ${age} ${h}`);
  }
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
checkStatus("Ahmed", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
