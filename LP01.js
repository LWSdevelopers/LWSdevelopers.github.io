// (PART A) QUESTIONS & ANSWERS - THE FIRST ANSWER IS THE CORRECT ONE
const qa = [
  {
    q : "Para os condutores de transporte de serviço publico ou de carga perigosa, quando em exercício, a taxa de álcool deve ser de:",
    a : ["0.0 mg/l", "0.3 mg/l", "0.8mg/l",]
  },
  {
    q : "Qual é o comportamento correcto para ajudar em caso de acidente?",
    a : ["Parar o veículo sem criar perigo e proteger a zona para evitar novos acidentes.", "Não fazer nada ate chegarem os agentes da autoridade.", "Transportar imediatamente os feridos mais graves para o hospital mais próximo.", "Tirar os feridos do veículo para verificar seu estado.",]
  },
  {
    q : "A condução defensiva é",
    a : ["a forma ponderada como o individuo conduz um veiculo automovel, de modo a evitar acidentes.", "a movimentação e imobilização de veiculos, pessoas e animais nas vias de comunicação rodoviária.", "a circulação de veiculos e animais na via pública.",]
  },
  {
    q : "Para combater a fadiga e o sono, o melhor remedio é:",
    a : ["Parar de conduzir, descansar e, se necessário, dormir um pouco.", "Conduzir com o banco inclinado para trás.", "Tomar uma bebida com álcool.",]
  },
  {
    q : "Quais os procedimentos que o condutor deve adoptar antes de iniciar uma ultrapassagem?",
    a : ["Deve certificar-se de que a pode fazer sem perigo e sinalizar a manobra aos outros condutores.", "Apenas deve sinalizar a sua intenção, já que as luzes indicadoras de direcção Ihe dão prioridade para realizar a manobra.", "Deve apenas observar o retrovisor",]
  },
  {
    q : "Conduzir um automóvel com uma parte do corpo fora do veículo, constitui:",
    a : ["Contravenção média", "Contravenção leve", "Contravenção grave",]
  },
  {
    q : "Como deve pisar o pedal de travão, em caso de necessidade de travagem de emergência, com um veículo que tenha ABS?",
    a : ["Até ao fundo, sem soltar até que o veículo pare", "Sem muita força, porque pode bloquear as rodas", "Ao mesmo tempo, com o pedal do acelerador",]
  },
  {
    q : "Onde é proibido fazer inversão de sentido marcha?",
    a : ["Nos cruzamentos ou entroncamentos de visibilidade reduzida.", "Fora das localidades", "Nas rotundas",]
  },
  {
    q : "Pode favorecer o aparecimento da fadiga, ao volante:",
    a : ["Conduzir por muito tempo, sem descanso.", "Usar o AC", "Descansar frequentemente",]
  } ,
  {
    q : "Como deve actuar o condutor, caso queira fazer uma curva?",
    a : ["Adaptar a velocidade, antes de entrar na curva.", "Aumentar a velocidade antes da curva", "Reduzir a velocidade dentro da curva",]
  },
  {
    q : "Numa via de dois sentidos, posso ultrapassar o veiculo que assinala a sua intenção de ultrapassar o veiculo que o precede?",
    a : ["Não", "Sim, pela direita", "Sim, pela esquerda",]
  },
  {
    q : "O que deve fazer o condutor quando a intensidade do tráfego é grande?",
    a : ["Praticar a condução defensiva", "Utilizar sinais sonoros", "Aumentar a velocidade",]
  },
  {
    q : "É permitido que uma criança de 6 anos viaje no banco da frente de um automóvel?",
    a : ["Sim, se não tiver bancos ou cintos de segurança na retaguarda.", "Sim, sempre que utilize um cinto de segurança", "Em nenhum caso",]
  } ,
  {
    q : "Os condutores de motociclos simples, fora das localidades, não devem exceder a velocidade instantânea de:",
    a : ["90 km/h", "80 km/h", "60 km/h",]
  },
  {
    q : "Para ter mais segurança, os peões devem:",
    a : ["transitar pelo lado direito, em relação ao seu sentido de marcha, a não ser que tal comprometa a sua segurança.", "transitar sempre do lado esquerdo da faixa de rodagem, em relação ao seu sentido de marcha.", "fazer o atravessamento da faixa de rodagem o mais lentamente possível.",]
  },
  {
    q : "Os automóveis ligeiros de passageiros e mistos com reboque, fora das localidades, não devem exceder a velocidade instantânea de:",
    a : ["100 km/h", "120 km/h", "80 km/h",]
  },
  {
    q : "Existe algum truque para conseguir eliminar o álcool do corpo do condutor, de uma forma mais rápida?",
    a : ["Não", "Sim, tomar doces", "Consumir alguma substância psicotrópica",]
  } ,
  {
    q : "Nas passagem de nivel, os condutores estão obrigados a:",
    a : ["certificar-se que a intensidade do tráfego não o obriga a imobilizar o veiculo sobre ela.", "Aumentar a velocidade para atravessar rapidamente", "Engrenar uma velocidade mais baixa durante o atravessamento",]
  },
  {
    q : "Numa situação, impossível de efectuar o cruzamento com segurança, como deve proceder o condutor?",
    a : ["Reduzir a velocidade ou parar, de modo a dar a passagem ao outro veiculo.", "Nada, porque eu tenho a prioridade.", "Utilizar sinais sonoros, para que o outro condutor pare",]
  },
  {
    q : "Perante um obstáculo imprevisto que o obriga a reduzir subitamente a velocidade, o condutor deve:",
    a : ["Ligar as luzes de perigo para avisar os outros utentes da via.", "Sinalizar a situação utilizando os máximos e os médios alternadamente.", "Ligar as luzes de presença para avisar os outros utentes da via.",]
  },
  {
    q : "A marca rodoviária de cor amarela (Área facilmente congestionavel), indica ou:",
    a : ["Reforça a regra que impede a imobilização de veículos no centro da intersecção.", "Obriga todos os veículos a parar no cruzamento", "Proíbe todos os veículos a parar no cruzamento",]
  } ,
  {
    q : "Conduzindo-se com chuva:",
    a : ["deve aumentar a distância de segurança para o veículo da frente.", "Aumenta a distância de reação", "A distância de travagem é menor",]
  },
  {
    q : "Ao circular com velocidade excessiva:",
    a : ["Aumenta a probabilidade de ter um acidente", "O condutor tem um tempo de reação mais reduzido", "O consumo de combustível é menor",]
  },
  {
    q : "O que indica a marca rodoviária branca (sinal de pavimento triangular) ?",
    a : ["Cedência de prioridade", "Faixa de sentido reversível", "Aproximação de passagem de nível",]
  },
  {
    q : "O consumo do cannabis afecta o comportamento do condutor?",
    a : ["Sim, aumenta o tempo de reação", "Não", "Sim, diminui a sonolência",]
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



