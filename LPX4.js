// (PART A) QUESTIONS & ANSWERS - THE FIRST ANSWER IS THE CORRECT ONE
const qa = [
  {
    q : "O agente regulador de trânsito, parado, com o braço esquerdo esticado horizontalmente, e a palma visível, manda:",
    a : ["Parar o tráfego que venha da retaguarda.", "Avançar o tráfego que venha da esquerda", "Parar o tráfego que venha da esquerda",]
  },
  {
    q : "Desde o anoitecer até ao amanhecer, pode deixar as luzes de cruzamento acesas quando o veículo estiver estacionado?",
    a : ["Não é obrigatório", "Sim, é obrigatório", "Não é proibido deixar qualquer luz acessa, em qualquer situação",]
  },
  {
    q : "Nos dias quentes, é recomendável:",
    a : ["efectuar mais descansos durante uma viagem, porque a fadiga e o sono aparecem mais facilmente.", "fazer menos descansos durante a viagem, para chegar ao destino o mais rapidamente possível.", "evitar conduzir com o ar condicionado ligado.",]
  },
  {
    q : "Utilizar o veículo para em via pública, demonstrar ou exibir manobra de arranque brusco, derrapagem ou travagem com deslizamento de pneus, constitui contravenção:",
    a : ["Grave", "Leve", "Média",]
  },
  {
    q : "Em acidente de viação com vítima, deixar de prestar ou providenciar socorro, constitui contravenção:",
    a : ["Grave", "Média", "Leve",]
  },
  {
    q : "Salvo no caso de perigo iminente, que deve fazer o condutor se tem que diminuir subitamente a velocidade do veículo?",
    a : ["Certificar-se que não resulta perigo, nomeadamente para os condutores dos veículos que o sigam.", "Apenas utilizar as luzes de perigo", "Advertir utilizando sinais sonoros",]
  },
  {
    q : "Perante uma passagem de nível que não dispuser de protecção ou sinalização, o condutor:",
    a : ["só pode iniciar a travessia depois de se certificar de que não se aproxima um veículo ferroviário.", "Está obrigado a utilizar sinais sonoros", "Tem que inverter o sentido de marcha e seguir outra via",]
  },
  {
    q : "A utilização de sinais sonoros é permitida:",
    a : ["Em casos de perigo eminente", "Dentro das localidades, para prevenir ultrapassagens", "Como meio de manifestação, ou protesto",]
  },
  {
    q : "Dentro das localidades, pode utilizar sinais sonoros:",
    a : ["so em caso de manifestar uma necessidade, como no caso de um perigo eminente", "Durante a noite", "Na aproximação de uma curva",]
  } ,
  {
    q : "O facto de conduzir de noite, deve ter influência na velocidade a que segue?",
    a : ["Sim", "Sim, mas apenas dentro da localidade", "Não, se conheço bem a estrada",]
  },
  {
    q : "Como se comportar quando a linha faz separação de vias de trânsito?",
    a : ["Circular a sua esquerda, quando a linha fizer a separação de sentidos de trânsito.", "Pisar ou transpor a linha", "Abrandar",]
  },
  {
    q : "Quando na faixa de rodagem existam placas, postes, ilhéus direcionais ou dispositivos semelhantes, como deve transitar?",
    a : ["Dando-lhes a direita, se estão numa via de dois sentidos.", "Pela direita ou pela esquerda, se estão numa via de dois sentidos.", "Obrigatoriamente pela direita, se estão numa via de sentido único.",]
  },
  {
    q : "Entende-se por prioridade de passagem:",
    a : ["O direito que o condutor tem de passar em primeiro lugar.", "A obrigação que o condutor tem de imobilizar o veiculo num cruzamento com sinal de paragem obrigatória.", "A movimentação de veículos e animais nas vias de comunicação rodoviária.",]
  } ,
  {
    q : "Num cruzamento de veículos, qual deve passar em primeiro?",
    a : ["O veículo que tiver a sua direita livre", "O mais apressado", "Qualquer veículo pode passar",]
  },
  {
    q : "Numa estrada de duplo sentido de circulação, como deve circular:",
    a : ["Pela esquerda e mantendo uma distância lateral suficiente para evitar acidentes.", "Pela direita", "Pelo centro, já que não existe linha que delimite os sentidos da circulação.",]
  },
  {
    q : "O estado emocional do condutor, é um factor de ordem interna, que influencia:",
    a : ["O tempo de reacção e a distância de travagem.", "Apenas a distância de segurança", "Apenas a distância de travagem",]
  },
  {
    q : "A que grupo pertence a marca rodoviária branca(linha contínua e descontínua)?",
    a : ["Marcas longitudinais", "Marcas transversais", "Marcas orientadoras de sentido de trânsito",]
  } ,
  {
    q : "Se os ocupantes do veículo não utilizarem o cinto de segurança, o airbag é eficaz?",
    a : ["Não, pode causar lesões graves", "Sim, sempre que os passageiros estejam sentados corretamente.", "Sim o airbag é sempre eficaz",]
  },
  {
    q : "Qual é a validade que tem a carta de condução da categoria B?",
    a : ["Cinco anos", "Dez anos", "Quatro anos", "Três anos",]
  },
  {
    q : "Os direitos humanos:",
    a : ["São universais, individuais, inatos e de reivindicação.", "São universais, intransmissíveis e de reivindicação perante o Estado.", "São universais, naturais e de reivindicação.",]
  },
  {
    q : "Dentro das localidades, é proibido parar ou estacionar:",
    a : ["A menos de 5 metros antes das passagens assinaladas para a travessia de peões e velocípedes.", "A menos de 25 metros para um e outro lado dos cruzamentos ou entroncamentos.", "Na faixa de rodagem, ou qualquer caso",]
  } ,
  {
    q : "Quando se considera velocidade excessiva?",
    a : ["Sempre que o condutor não possa fazer parar o veículo no espaço livre visível a sua frente, ou exceda os limites de velocidade fixados nos termos legais.", "B", "Apenas quando o condutor exceda os limites de velocidade fixados nos termos legais.",]
  },
  {
    q : "Num acidente grave com feridos, o que fazer se não saber como ajudar?",
    a : ["Não lhes tocar, e ligar ao 112", "Abandonar o local e não fazer nada", "Retirar rapidamente, e levá-los ao hospital",]
  },
  {
    q : "Posso ultrapassar veículos que estejam a ultrapassar os outros?",
    a : ["Não, a menos que não seja necessário utilizar a parte da faixa de rodagem reservada ao trânsito em sentido contrário.", "Sim, sempre que o sinalize com a necessária antecedência.", "Não, mesmo que sejam possíveis três ou mais filas de trânsito no mesmo sentido.",]
  },
  {
    q : "Para auxiliar uma vítima de um acidente rodoviário, deve dar-lhe alimentos ou bebidas?",
    a : ["Não", "Sim, só se pedir", "Não, só se pode dar medicamentos, tranquilizante",]
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



