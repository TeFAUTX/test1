let mySkills = [
  "HTML",
  "CSS",
  "JavaScript",
  ["PHP", "Python", ["Django", "Laravel"]],
];

let [a, b, c, d, e, f, g] = mySkills.flat(Infinity);
console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);
let [z, x, h, [v, p, [n, m]]] = mySkills;

console.log(`My Skills: ${z}, ${x}, ${h}, ${v}, ${p}, ${n}, ${m}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel
