let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

let count = "*"; // سنستخدم هذا المتغير لزيادة الأرقام ديناميكيًا

for (let e of friends) {
  if (e.toLowerCase().startsWith(letter)) {
    continue;
  } else {
    console.log(`${count.length}--${e}`);
  }
  count += "*";
}
// Output
// ("1 => Sayed");
// ("2 => Eman");
// ("3 => Mahmoud");
// ("4 => Osama");
// ("5 => Sameh");
