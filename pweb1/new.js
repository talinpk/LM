let matriculas = [1,3,5,7,8,9,10,15];

matriculas[0]; // 1o elemento - valor 1
matriculas[matriculas.length - 1]; // Último elemento - valor 15
matriculas[5]; // 6o elemento - valor 9

console.log(matriculas)

for (let matricula of matriculas) {
    console.log(matricula);
    }