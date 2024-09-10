// (PART A) QUESTIONS & ANSWERS - THE FIRST ANSWER IS THE CORRECT ONE
const qa = [
  {
    q : "Sempre que saia de um caminho particular, o condutor deve:",
    a : ["Ceder a passagem a todos e quaisquer veículos.", "Ceder a passagem apenas aos veículos a motor.", "Avançar porque tem prioridade.",]
  },
  {
    q : "Pode afectar a segurança rodoviária o facto de estacionar fora dos locais apropriados?",
    a : ["Sim, quando obriga os peões a usarem a faixa de rodagem.", "Não, desde que se mantenham vias descongestionadas.", "Não, porque os outros veículos estão imobilizados.", "Sim, e por isso que deve estacionar em cima dos passeios.",]
  },
  {
    q : "Nos túneis, que luzes devem utilizar os veículos?",
    a : ["De cruzamento, se existe a possibilidade de encandear os condutores que circulem em sentido contrario.", "De presenca.", "De estrada, se existe a possibilidade de encandear os condutores que circulem em sentido contrario.",]
  },
  {
    q : "Como deve ser feita a carga e descarga de um veículo na via publica?",
    a : ["Pela retaguarda ou pelo lado da faixa de rodagem junto da qual o veículo esteja parado ou estacionado.", "Sempre pela retaguarda.", "Sempre pela direita.",]
  },
  {
    q : "Os efeitos do álcool, quando alcançam o seu nivel mais alto?",
    a : ["Entre 30 a 90 minutes depois do consumo de álcool.", "Duas horas depois de ter tomado o último copo.", "Imediatamente depois de ter tomado o último copo.", "Quatro horas depois de ter tomado o último copo.",]
  },
  {
    q : "É permitido levar um bebe nos braços quando o veículo esta em circulação?",
    a : ["Não, deve sempre usar um dispositivo adequado ao tamanho e ao peso do bebé.", "Sim, se a viagem é curta.", "Sim, sempre que a velocidade seja muito reduzida.", "Sim, mas apenas nos assentos traseiros.",]
  },
  {
    q : "Para praticar uma condução defensiva, o condutor deve:",
    a : ["Estar especialmente atento a ocorrência de situações inesperadas.", "Utilizar sinais sonoros durante a noite, dentro das localidades .", "Seguir a velocidade elevada.",]
  },
  {
    q : "Como proceder, se observar pelo espelho retrovisor a aproximação de um veículo prioritário, assinalando  adequadamente a sua marcha de urgência?",
    a : ["Chegar-se o mais possível para a esquerda podendo, se necessário, utilizar a berma.", "Acelerar para não prejudicar a sua marcha.", "Chegar-se o mais possível para o lado direito da faixa de rodagem.", "Deixar livre uma passagem do lado esquerdo da faixa de rodagem.",]
  },
  {
    q : "Depois de ingerir álcool, o condutor fica:",
    a : ["com menos capacidade de conduzir de forma responsável.", "com mais atenção na tarefa da condução.", "com melhor apreciação das distancias e das velocidades.", "com capacidade de condução mais apurada.",]
  } ,
  {
    q : "Os condutores de motociclos, dentro das localidades, não devem exceder a velocidade ​ instantânea de:",
    a : ["50 km/h.", "30 km/h.", "40 km/h.", "60 km/h.",]
  },
  {
    q : "Como o álcool afecta tarefa de conduzir?",
    a : ["Reduz o campo de visão do condutor.", "Melhora a apreciação das velocidades.", "Melhora a apreciação das distâncias.", "Aumenta a atenção do condutor, assim que as distrações são reduzidas.",]
  },
  {
    q : "Um círculo amarelo cortado, no pavimento, com desenho de um motociclista ao centro, significa:",
    a : ["Trânsito proibido a motociclos.", "Trânsito proibido a ciclomotores.", "Trânsito proibido a velocipedes.",]
  },
  {
    q : "Ao ligar as luzes, se no painel aparecer o símbolo do farol, com a cor azul, indica que:",
    a : ["Estão ligadas as luzes de estrada (máximos).", "Estão ligadas as luzes de cruzamento (médios).", "Estão ligadas as luzes de presença.",]
  } ,
  {
    q : "É sempre proibido inverter o sentido de marcha nos túneis?",
    a : ["Sim, em todos os túneis.", "Sim, quando a visibilidade for reduzida.", "Sim, se o túnel for de um só sentido.",]
  },
  {
    q : "Pode ter consequências num acidente o facto de não levar o cinto de segurança bem colocado?",
    a : ["Sim, porque pode provocar ferimentos graves.", "Não, se o veiculo estiver equipado com airbag.", "Não, o cinto e sempre eficaz.", "Sim, por isso o seu uso não e obrigatório.",]
  },
  {
    q : "O que deve fazer se perceber que o seu veículo vai ser ultrapassado nesta situação?",
    a : ["Afastar-se o mais possível para a esquerda e não aumentar a velocidade, enquanto não for ultrapassado.", "Facilitar a ultrapassagem desviando-se para a direita e não aumentando a velocidade.", "Impedir que seja realizada a manobra, aumentando a velocidade.", "Não mudar a sua posição na faixa de rodagem.",]
  },
  {
    q : "Quando a aderência do veículo ao piso é menor, a distância de travagem aumenta logo, deve-se:",
    a : ["Diminuir a velocidade.", "Aumentar a velocidade.", "Reduzir a distância de segurança.", "Manter a velocidade.",]
  } ,
  {
    q : "O tempo que passa desde que o condutor observa um perigo até que actue sobre os comandos do veículo:",
    a : ["pode aumentar, dependendo do seu estado físico e psicológico.", "não varia na mesma pessoa.", "é chamado tempo de paragem.", "é igual em todas as pessoas.",]
  },
  {
    q : "Pode influenciar na eficácia do cinto de segurança a posição do assento?",
    a : ["Sim, não é recomendado inclinar o assento muito para trás.", "Não.", "Não, se o veículo estiver equipado com outros sistemas de segurança passiva.", "Sim, perde a eficácia quando o encosto do banco esta quase vertical.",]
  },
  {
    q : "A regulamentação do trânsito no interior das localidades compete:",
    a : ["aos Corpos Administrativos ou aos Conselhos Municipais.", "às Delegações Provinciais do instituto de transportes terrestres.", "à Policia de Trânsito .",]
  },
  {
    q : "Como deve colocar os sinais de pré-sinalização de perigo, se o veiculo avariado fica imobilizado num local onde não é visível a 100 metros de distância?",
    a : ["À frente e a retaguarda do veiculo, a uma distância não inferior a 30 metros.", "À frente e a retaguarda do veículo, a uma distância de 10 metros.", "Não é necessário coloca-los nesta situação.", "Só um pela retaguarda do veículo a uma distância de 50 metros.",]
  } ,
  {
    q : "Os peões podem transitar pela faixa de rodagem nesta estrada?",
    a : ["Sim, com prudência e por forma a não prejudicar o trânsito de veículos.", "Sim e devem fazê-lo pela esquerda da faixa de rodagem, em relação ao seu sentido de marcha.", "Não, nesta estrada não podem transitar, já que não tem bermas.", "Sim, mais só quando necessitem atravessar.",]
  },
  {
    q : "Transita corretamente um peão, o colo visível, que caminha do lado esquerdo da faixa de rodagem?",
    a : ["Não, porque deve transitar pelo lado direito, em relação ao seu sentido de marcha.", "Não, já que e proibido transitar pela berma.", "Sim",]
  },
  {
    q : "As setas luminosos, são sinais importantes?",
    a : ["Sim", "Sim, só nas portagens", "Não, são raras",]
  },
  {
    q : "Durante as viagens, é aconselhavel parar e descansar?",
    a : ["Sim, 20 ou 30 minutos a cada 2 horas.", "Sim, 20 ou 30 minutos a cada 8 horas.", "Não, porque alonga o tempo da viagem e aumenta a fadiga.", "Não, se a viagem for durante a noite.",]
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



