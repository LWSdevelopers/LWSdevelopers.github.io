// (PART A) QUESTIONS & ANSWERS - THE FIRST ANSWER IS THE CORRECT ONE
const qa = [
  {
    q : "O braço direito esticado para a direita, e depois dobrado até á cabeça, o agente regulador de trânsito, manda:",
    a : ["Avançar o tráfego que venha da direita", "Parar o tráfego que da direita", "Avançar o tráfego que venha da esquerda",]
  },
  {
    q : "Entende-se por moral:",
    a : ["Conjunto de regras de conduta e de valores no seio de uma sociedade ou de um grupo.", "A sensação de frustração depois da violação das regras de trânsito.", "A condução defensiva praticada com o intuito de evitar acidentes de viação.",]
  },
  {
    q : "Antebraço levantado, o cotovelo virado para a frente, o agente regulador manda:",
    a : ["Avançar o tráfego que venha da frente", "Parar o tráfego que venha da frente", "Avançar o tráfego que venha da retaguarda",]
  },
  {
    q : "Se a viagem é curta, é obrigatório utilizar o cinto de segurança?",
    a : ["Sim, para o condutor e para os passageiros transportados.", "Sim, mas so para o condutor", "Não",]
  },
  {
    q : "O que deve fazer o condutor se a fila da esquerda estiver a circular mais rapidamente?",
    a : ["Manter-se na fila de trânsito em que se encontra.", "Mudar de fila", "Sinalizar e mudar de fila",]
  },
  {
    q : "É proibido estacionar:",
    a : ["Em cima do passeio", "no lado da faixa de rodagem em que esteja uma linha continua de cor branca.", "de noite, nas faixas de rodagem das localidades.",]
  },
  {
    q : "Os jovens, tem mais possibilidades de ter acidentes rodoviários?",
    a : ["Sim, normalmente fazem uma avaliação incorreta dos riscos.", "Sim, a sua visão e mais reduzida.", "Não",]
  },
  {
    q : "A idade mínima para poder obter a carta de condução da categoria B, é:",
    a : ["18", "16", "21", "25",]
  },
  {
    q : "Deixar de dar prioridade de passagem nos cruzamentos ou entroncamentos não sinalizados ao veículo que vier da direita, constitui contravenção:",
    a : ["Grave", "Média", "Leve",]
  } ,
  {
    q : "De dia e com boa visibilidade, que veículos estão obrigados a transitar com as luzes de cruzamento acesas?",
    a : ["Os motociclos e ciclomotores", "Os motociclos, mas só quando circulem fora das localidades.", "Todos os veículo",]
  },
  {
    q : "Nas estradas com dois sentidos de circulação, que devem fazer os condutores que pretendam mudar de direção para a direita?",
    a : ["Aproximar-se com a devida antecedência do eixo da via.", "Chegar-se o mais possível para a esquerda.", "Aproximar-se com a necessária antecedência do limite direito da faixa de rodagem.",]
  },
  {
    q : "A que altura deve ficar a parte central do encosto de cabeça, para garantir uma proteção eficaz em caso de acidente rodoviário?",
    a : ["A altura dos olhos", "Por cima da cabeça", "O mais baixo possível",]
  },
  {
    q : "As pessoas que são encontradas a conduzir sem possuir carta de condução:",
    a : ["São punidas com pena de prisão de três dias a seis meses e multa de 5000 MT.", "São punidas com pena de prisão de um a três dias e multa de 5000 MT.", "Não podem ser punidas",]
  } ,
  {
    q : "É comum que um operador de obras/com sinal, sinalize:",
    a : ["Uma paragem obrigatória", "Aproximação de uma estrada com prioridade", "Paragem obrigatória em quatro vias",]
  },
  {
    q : "Pode provocar distração no condutor:",
    a : ["Manipulação de GPS, durante a condução", "Mudar de velocidade", "Olha no espelho retrovisor",]
  },
  {
    q : "Transitar em sentido oposto ao estabelecido, constitui contravenção:",
    a : ["Grave", "Leve", "Média",]
  },
  {
    q : "Pode o condutor evitar um acidente devido ao mau estado do seu veículo?",
    a : ["Sim, porque o estado do seu veículo depende dele.", "Não, porque todos os acidentes são inevitáveis.", "Não, as falhas mecânicas são sempre imprevisíveis e inevitáveis.",]
  } ,
  {
    q : "O condutor que pretende iniciar a sua marcha, deve:",
    a : ["certificar-se que pode fazê-lo sem perigo e sinalizar a sua intenção com antecedência.", "só sinalizar a sua intenção, já que os demais condutores devem ceder-lhe a passagem.", "ligar a luz intermitente do lado direito e avançar.",]
  },
  {
    q : "O sistema de iluminação dos veículos automóveis:",
    a : ["ajuda a ver bem a estrada e a que o veículos seja visto.", "só se utiliza para sinalizar as manobras.", "não tem manutenção.",]
  },
  {
    q : "O que fazer ao chegar numa intersecção de vias?",
    a : ["Demonstrar prudência especial, moderando a velocidade e ceder a passagem aos veículos que tenham prioridade.", "Ceder a passagem aos veículos que se apresentem pela esquerda.", "Apenas ceder a passagem aos peões que tenham prioridade.",]
  },
  {
    q : "O condutor dum ciclomotor, Pode levar o capacete ajustado e apertado?",
    a : ["Não, porque não garante uma protecção eficaz em caso de acidente.", "Sim, sempre que seja um modelo aprovado oficialmente.", "Sim, já que não é obrigatório para os condutores de ciclomotores.",]
  } ,
  {
    q : "Se conduzir por muito tempo sem descansar:",
    a : ["A condução torna-se perigosa", "aumenta a atenção do condutor.", "Aumenta a segurança",]
  },
  {
    q : "O cruzamento de veículos, numa intercessão de vias e sem sinalização, quem deve passar em primeiro?",
    a : ["Os condutores que se apresentam pela direita", "Todos os condutores que circulem pela via transversal.", "Os condutores que se apresentem pela esquerda.",]
  },
  {
    q : "Se a viagem é curta, é obrigatório utilizar o cinto de segurança?",
    a : ["Sim, para o condutor e para os passageiros transportados.", "Não", "Não, se não sai da localidade",]
  },
  {
    q : "Os condutores de motociclos, ciclomotores ou velocípedes, podem circular a par na faixa de rodagem?",
    a : ["Não", "Sim", "Sim, se não causarem perigo ou embaraço ao trânsito.",]
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



