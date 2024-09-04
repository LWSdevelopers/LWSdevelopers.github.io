// (PART A) QUESTIONS & ANSWERS - THE FIRST ANSWER IS THE CORRECT ONE
const qa = [
  {
    q : "As bombas de óleo de engrenagem são constituídas por:",
    a : ["Duas rodas dentadas, com o mesmo diâmetro.", "Dois lóbulos", "Três rodas dentadas",]
  },
  {
    q : "Durante o funcionamento de um motor de ciclo a quatro tempos, o êmbolo desloca-se do PMS para o PMI nos tempos de:",
    a : ["Admissão e combustão/explosão.", "Admissão e escape", "Compressão e escape",]
  },
  {
    q : "O que é ABS?",
    a : ["Sistema antibloqueio de rodas", "Travão mecânico", "Travão pneumático",]
  },
  {
    q : "As válvulas têm folgas, para:",
    a : ["Para compensar a sua dilatação", "Não prenderem", "Abrirem facilmente",]
  },
  {
    q : "Como fazer a manutenção de um filtro de ar?",
    a : ["Substituir periodicamente.", "Limpar com ar", "Limpar com óleo",]
  },
  {
    q : "No caso de uma bomba de óleo accionada pela árvore de cames, por cada volta completa desta, o eixo da bomba roda:",
    a : ["1 volta.", "6 voltas.", "2 voltas.", "3 voltas",]
  },
  {
    q : "Quantos carretos tem o veio primário de um veículo com uma caixa de 4 velocidades?",
    a : ["1 carreto.", "3 carretos", "2 carretos",]
  },
  {
    q : "Indique o elemento que não faz parte do conjunto de componentes de uma válvula:",
    a : ["Camisa.", "Mola", "Meia lua",]
  },
  {
    q : "Onde engrena o carreto do motor de arranque?",
    a : ["Coroa dentada do volante do motor.", "Coroa dentada do veio primário", "No eixo secundário da caixa de velocidades",]
  } ,
  {
    q : "As bombas de água dispõem um furo, para:",
    a : ["Drenar o sistema, quando está cheio.", "Lubrificar a bomba de agua", "Ventilar o corpo ou bomba",]
  },
  {
    q : "Carburador tem como função:",
    a : ["Pulverizar a gasolina e misturar com ar.", "Filtrar a gasolina", "Separar o ar da gasolina",]
  },
  {
    q : "O deflector do radiador não deverá ser retirado porque:",
    a : ["Anula o funcionamento da ventoinha", "É perigo", "Aumenta o ruído da ventoinha",]
  },
  {
    q : "Um turbo compressor é acionado:",
    a : ["Pelos gases de escape do motor", "Por uma correia ligada á cambota", "Pelos gases de admissão do motor",]
  } ,
  {
    q : "Os órgãos que compõem a suspensão, por exemplo molas, amortecedores, braços oscilantes, são classificados como:",
    a : ["Massa não suspensa.", "Massa suspensa", "Nenhuma opção é correta",]
  },
  {
    q : "No tempo de admissão o êmbolo:",
    a : ["Desce com a válvula de admissão aberta.", "Sobe com a válvula de admissão fechada.", "Desce com a válvula de admissão fechada.",]
  },
  {
    q : "Com o veículo parado e o motor a funcionar, o veio de transmissão:",
    a : ["Não roda.", "Roda para esquerda", "Roda para direita",]
  },
  {
    q : "Onde se encontra situada a turbina que, devido a um eixo comum, movimenta o turbo compressor?",
    a : ["No coletor de escape.", "Na cabeça do motor", "No coletor de admissão",]
  } ,
  {
    q : "Para se medir a folga da válvula deve-se rodar o motor até que fique a válvula na posição de:",
    a : ["Completamente fechada", "Desmontada", "Completamente aberta",]
  },
  {
    q : "Num dos veios excêntricos, a parte de encaixo/dentado localizado na ponta do veio:",
    a : ["Nos motores a gasolina, serve para accionar o distribuidor.", "Nos motores a gasóleo, serve para accionar a bomba injectora.", "Nenhuma opção",]
  },
  {
    q : "Qual é a válvula, no tampão do radiador, que controla a pressão do sistema de arrefecimento e deixa sair o excesso de água ou vapor, quando necessário?",
    a : ["Válvula de pressão.", "Válvula de vácuo", "Válvula de escape",]
  },
  {
    q : "A mola de lâminas fecha-se ao quadro por:",
    a : ["Um brinco e uma cavilha.", "Rebites", "Encaixe",]
  } ,
  {
    q : "Durante o funcionamento de um motor á 4 tempos",
    a : ["A árvore de cames efectua metade das rotações da cambota.", "A árvore de cames efectua o triplo das rotações da cambota.", "A árvore de cames efectua o dobro das rotações da cambota.",]
  },
  {
    q : "Os amortecedores a gás funcionam de forma idêntica aos hidráulicos. Qual ou quais dos fluídos operam nos amortecedores a gás?",
    a : ["Óleo e azoto sob pressão.", "Óleo", "Hidrogênio",]
  },
  {
    q : "Com que peça se une o pé da biela ao êmbolo?",
    a : ["Cavilha.", "Bronze", "Cardan",]
  },
  {
    q : "Na verificação da estanquicidade de um sistema de arrefecimento, se o manómetro de verificação indicar uma queda de pressão, isso significa que:",
    a : ["Existem fugas no circuito.", "A ventoinha não está funcionando", "Termostato avariado",]
  }
];

var quiz = {
  // (PART B) PROPERTIES
  hNow : null, // html current question number
  hQns : null, // html questions
  hAns : null, // html answers
  qorder : [], // questions order
  aorder : [], // answers order
  qnow : 0,    // current question
  score : 0,   // correctly answered

  // (PART C) SHUFFLE ARRAY
  // CREDIT : https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/
  shuffle : a => {
    for (let i=a.length-1; i>0; i--) { 
      let j = Math.floor(Math.random() * (i + 1)); 
      [a[i], a[j]] = [a[j], a[i]]; 
    } 
    return a; 
  },

  // (PART D) INIT QUIZ
  init : () => {
    // (D1) GET HTML ELEMENTS
    quiz.hNow = document.getElementById("qcurrent");
    quiz.hQns = document.getElementById("qquestion");
    quiz.hAns = document.getElementById("qanswer");

    // (D2) SHUFFLE QUESTIONS ORDER
    quiz.qorder = [];
    for (let i=0; i<qa.length; i++) { quiz.qorder.push(i); }
    quiz.shuffle(quiz.qorder);

    // (D3) SHOW QUESTION
    quiz.qnow = -1;
    quiz.next();
  },

  // (PART E) NEXT QUESTION
  next : () => {
    // (E1) NEXT QUESTION - SHOW SCORE IF END
    quiz.qnow++;
    if (quiz.qnow == qa.length) {
      quiz.hNow.innerHTML = "RESULTADO";
      quiz.hQns.innerHTML = `Sua nota foi de ${quiz.score} acertos, de ${qa.length} questões.         Faça os testes mais vezes, se estabilize e passe no exame teórico, de primeira.                                               Oi 🤓, o aplicativo é gratuito, nos ajude a partilhar. Não se esqueça de convidar os seus amigos!`;
      quiz.hAns.innerHTML = "";
      // quiz.hAns.innerHTML = "<div onclick='quiz.init()'>Restart</div>";
      return;
    }

    // (E2) GET CURRENT QUESTION
    let qn = qa[quiz.qorder[quiz.qnow]];

    // (E3) SHUFFLE ANSWERS
    quiz.aorder = [];
    for (let i=0; i<qn.a.length; i++) { quiz.aorder.push(i); }
    quiz.shuffle(quiz.aorder);

    // (E4) SHOW QUESTION & ANSWER OPTIONS
    quiz.hNow.innerHTML = `PERGUNTA ${quiz.qnow+1} / ${qa.length}`;
    quiz.hQns.innerHTML = qn.q;
    quiz.hAns.innerHTML = "";
    quiz.aorder.forEach(i => {
      let opt = document.createElement("div");
      opt.className = "option";
      opt.innerHTML = qn.a[i];
      opt.order = i;
      opt.onclick = () => quiz.pick(i);
      quiz.hAns.appendChild(opt);
    });
  },
  
  // (PART F) ON PICKING AN ANSWER OPTION
  pick : i => {
    // (F1) CORRECTLY ANSWERED
    if (i==0) { quiz.score++; }

    // (F2) UPDATE ANSWER HTML
    document.querySelectorAll("#qanswer div.option").forEach(opt => {
      opt.onclick = "";
      if (opt.order==0) { opt.classList.add("correct"); }
      else if (opt.order==i) { opt.classList.add("wrong"); }
    });

    // (F3) WAIT FOR 1 SECOND BEFORE NEXT QUESTION
    setTimeout(quiz.next, 3050);
  }
};
window.addEventListener("load", quiz.init);



