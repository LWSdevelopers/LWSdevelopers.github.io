// (PART A) QUESTIONS & ANSWERS - THE FIRST ANSWER IS THE CORRECT ONE
const qa = [
  {
    q : "O que indica o sinal?",
    a : ["Paragem obrigatória a 60 metros.", "Trânsito proibido a veiculos com comprimento superior a 60 metros.", "Paragem obrigatória.",]
  },
  {
    q : "O que indica o sinal?",
    a : ["Passagem desnivelada para peões com rampas.", "Passagem de peões.", "Pista obrigatória para peões.",]
  },
  {
    q : "A que grupo pertence o sinal triangular?",
    a : ["Sinais temporários de perigo.", "Sinais temporários de proibição.", "Sinais temporários de obrigação.",]
  },
  {
    q : "Qual o significado do sinal de perigo?",
    a : ["Passagem estreita à direita.", "Supressão da via da direita.", "Curva perigosa à direita.",]
  },
  {
    q : "Como devo proceder face à informação que me é dada pelo sinal vertical?",
    a : ["Moderar especialmente a velocidade.", "Engrenar a primeira velocidade na depressão.", "Manter a velocidade e parar antes das lombas.",]
  },
  {
    q : "O sinal de cedência de passagem indica:",
    a : ["Aproximação de uma rotunda com trânsito giratório.", "Proibição de contornar a rotunda.", "Obrigação de contornar a rotunda.",]
  },
  {
    q : "Este sinal vertical dá indicação aos condutores de:",
    a : ["Troço de via em que podem ser encontrados animais sem condutor.", "Proximidade de pista obrigatória para gado em manada.", "Trânsito proibido a veículos de tracção animal.",]
  },
  {
    q : "Qual o perigo indicado por este sinal?",
    a : ["Queda de pedras.", "Projecção de gravilhas.", "Bermas baixas.",]
  },
  {
    q : "O que indica o sinal?",
    a : ["Trânsito proibido a tractores agrícolas.", "Trânsito proibido a veículos de construção.", "Fim da proibição de circulação de tractores agrícolas.",]
  } ,
  {
    q : "Este sinal de perigo deve estar colocado, na aproximação de:",
    a : ["Um túnel.", "Uma passagem estreita.", "Um local de visibilidade insuficiente.",]
  },
  {
    q : "O que indica o sinal?",
    a : ["Prioridade de passagem para peões.", "Proibição de circulacão de peões.", "Proibição de circulacão de peões.",]
  },
  {
    q : "A sinalização temporária indica o perigo de:",
    a : ["Projecção de gravilhas.", "Trabalhos na via.", "Queda de pedras.",]
  },
  {
    q : "O sinal indica:",
    a : ["Pista de aviação.", "Vento lateral.", "Museu de aviação.",]
  } ,
  {
    q : "Perante o sinal vertical que se encontra na via, fico a saber:",
    a : ["Que me aproximo de um local onde existe uma ponte móvel.", "Que a ponte móvel se encontra levantada e que circulação se encontra temporariamente interrompida.", "Que a via onde circulo vai terminar num cais ou precipício",]
  },
  {
    q : "O que indica o sinal?",
    a : ["Trânsito proibido a veículos que transportam substâncias perigosas.", "Proibição de ultrapassagem aos automóveis pesados", "Trânsito proibido a veículos com reboque..",]
  },
  {
    q : "O sinal vertical que se encontra nesta via indica:",
    a : ["Proximidade de um troço de via com elevado volume de trânsito.", "Local onde é autorizado o estacionamento na berma.", "Circulação numa via reservada a veículos automóveis.",]
  },
  {
    q : "Este sinal obriga a:",
    a : ["Cedência de passagem a todos os veículos que circulem na via de que me aproximo.", "Paragem no próximo cruzamento ou entroncamento.", "Cedência de passagem nos sucessivos entroncamentos e cruzamentos",]
  } ,
  {
    q : "O que indica o sinal?",
    a : ["Trânsito proibido a veículos de peso por eixo múltiplo superior a 10t.", "Trânsito proibido a veículos de peso por eixo superior a 10t.", "Trânsito proibido ao conjunto de veículos de mercadorias, de peso total superior a 10t.",]
  },
  {
    q : "O sinal indica:",
    a : ["Controlo policial por pirilampos.", "Congestionamento do tráfego.", "Existência de controlo de tráfego adiante.",]
  },
  {
    q : "O que indica o sinal?",
    a : ["Ponte estreita.", "Passagem estreita.", "Entrocamentos sucessivos.",]
  },
  {
    q : "O que indica o sinal?",
    a : ["Sinalização luminosa em manutenção.", "Passagens de nível.", "Sinalização luminosa.",]
  } ,
  {
    q : "O sinal indica:",
    a : ["Aproximação de passagem de peões.", "Local frequentado por idosos", "Local frequentado por crianças",]
  },
  {
    q : "O que indica o sinal?",
    a : ["Trânsito proibido a veículos de tracção animal.", "Trânsito proibido a veículos de tracção manual.", "Trânsito proibido a peões, animais e veículos.",]
  },
  {
    q : "Que significado tem o sinal vertical?",
    a : ["Trabalhos na via.", "Proximidade de via sem saída devido a obras no local.", "Indicação de um local frequentado por trabalhadores agrícolas.",]
  },
  {
    q : "O que indica o sinal luminoso?",
    a : ["Acesso ou passagem interdito.", "Acesso ou passagem autorizado.", "Acesso ou passagem condicionado.",]
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
    for (let i=0; i<qa.length; i++) { quiz.qorder.push(0); }
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



