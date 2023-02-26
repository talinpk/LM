let matriculas = [1,3,5,7,8,9,10,15];

matriculas.unshift(2,4,6);

matriculas.forEach(matricula => console.log(matricula));


let usuarios = [
    {
"login": "u1",
        "nome": "Carlos"
    },
    {
"login": "u2",
        "nome": "Joaquim"
    },
    {
"login": "u3",
        "nome": "Maria"
    }
];

console.log(usuarios[0]);

let alunos = [
    {
      "matricula": "345",
      "nome": "Carlos",
      "idade": 20,
    },
    {
      "matricula": "246",
      "nome": "João",
      "idade": 33,
    },
    {
      "matricula": "156",
      "nome": "Maria",
      "idade": 18,
    },
    {
      "matricula": "543",
      "nome": "José",
      "idade": 40,
    },
    {
      "matricula": "765",
      "nome": "Sebastião",
      "idade": 25,
    },  
  ];

for (let i = 0; i < alunos.length; i++){
    if(alunos [i].idade>30 ){
        console.log(alunos[i].nome);
        
    }
}