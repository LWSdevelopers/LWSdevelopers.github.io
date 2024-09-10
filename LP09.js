// (PART A) QUESTIONS & ANSWERS - THE FIRST ANSWER IS THE CORRECT ONE
const qa = [
  {
    q : "Das seguintes, qual ou quais não fazem parte das virtudes profissionais necessárias para a boa condução de veículos automóveis",
    a : ["Egoismo.", "Cortesia e boas maneiras.", "Responsabilidade.", "Honestidade.",]
  },
  {
    q : "Ao travar, o que é que pode acontecer se os travões actuarem de forma desigual sobre as rodas do mesmo eixo?",
    a : ["O veículo altera a sua trajetória.", "As rodas bloqueiam.", "Melhora a estabilidade do veículo.", "A distância de paragem diminui.",]
  },
  {
    q : "Todos os condutores de veículos ou animais são obrigados a:",
    a : ["obedecer ao sinal de paragem feito pelas autoridades com competência para fiscalização do trânsito.", "reduzir ou suspender intencionalmente a circulação, formando filas de trânsito desnecessárias.", "abandonar os veículos nos locais de estacionamento sem motivo justificado.",]
  },
  {
    q : "Nas vias públicas, os peões devem transitar:",
    a : ["pelos passeios, pistas ou passagens a eles destinados ou, se não existirem, pelas bermas.", "pela faixa de rodagem, mesmo que existam bermas.", "sempre pelas bermas, mesmo que existam pistas especiais destinadas a eles.", "pelos passeios, se empurram um veiculo de tracção manual.",]
  },
  {
    q : "O que indica a marca rodoviária amarela que ficam nos lados da estrada?",
    a : ["Proibição de estacionamento.", "Estacionamento condicionado.", "Proibição de paragem.",]
  },
  {
    q : "Nos veículos destinados ao transporte de passageiros ou mistos:",
    a : ["a carga deve estar arrumada por forma a que seja devidamente assegurado o equilíbrio do veículo.", "a carga pode ocultar a matricula e os dispositivos de sinalização e iluminação.", "carga pode ultrapassar os contornos do veículo.", "a carga deve colocar-se na parte reservada aos passageiros, mesmo que reduza a visibilidade do condutor.",]
  },
  {
    q : "Em caso de avaria, os sinais de pré-sinalização de perigo devem colocar-se por forma a ficar bem visíveis a uma distância de:",
    a : ["pelo menos 100 metros.", "pelo menos 50 metros.", "10 metros", "pelo menos 25 metros.",]
  },
  {
    q : "Quando os amortecedores estão desgastados:",
    a : ["A distância de travagem aumenta perigosamente.", "Reduz-se o risco de aquaplanagem.", "Reduz-se a distância de paragem.", "Aumenta a aderencia dos pneus.",]
  },
  {
    q : "Deve utilizar-se as luzes de perigo:",
    a : ["em caso de imobilização por acidente ou avaria, se origina perigo para os demais utentes da via.", "para avisar os outros utentes que o veículo vai fazer marcha atras.", "apenas quando o veículo esteja a ser rebocado.", "ao estacionar em segunda fila.",]
  } ,
  {
    q : "Para conduzir com segurança, deve moderar especialmente a velocidade:",
    a : ["nas curvas, lombas e outros locais de visibilidade reduzida.", "nos locais assinalados com sinais de obrigação.", "nos cruzamentos e entroncamentos nos que tenha prioridade de passagem.", "só nas pontes, tuneis e passagens de nível.",]
  },
  {
    q : "Se pretender inverter o sentido de marcha numa via cuja largura não permite fazê-lo sem prejudicar o trânsito, deve:",
    a : ["Continuar até encontrar um local adequado onde não prejudique o trânsito.", "Parar o veículo perto do eixo da via e esperar até que não haja tráfego.", "Fazer a manobra, mesmo que prejudique o trânsito.", "Inverter o sentido de marcha com o menor número de manobras possíveis.",]
  },
  {
    q : "Que entende-se por consciência moral?",
    a : ["A faculdade de a pessoa distinguir entre o bem e o mal, de julgar os seus actos e de adoptar uma determinada forma de conduta.", "A faculdade de permitir a passagem dos peões na mudança de direção para a esquerda.", "A capacidade de o individuo interpretar os sinais de trânsito.",]
  },
  {
    q : "O que se entende por inconsciência?",
    a : ["O estado no qual o cérebro não esta a funcionar bem.", "O aumento da frequencia das pulsações por minuto.", "O estado em que o peito da vítima de acidente de viação, desce e sobe regularmente.", "A perda de sangue, resultante da abertura dos vasos sanguíneos.",]
  } ,
  {
    q : "Considera-se sob influencia de álcool, o condutor que apresente uma taxa de álcool igual ou superior a:",
    a : ["0.3 mg/l no teste de ar expirado, ou de 0.6 mg/l em teste sanguíneo.", "0.6 mg/l no teste de ar expirado, ou de 0.9 mg/l em teste sanguíneo.", "1 mg/l no teste de ar expirado, ou de 0.3 mg/l em teste sanguíneo.",]
  },
  {
    q : "Pode uma criança com idade inferior a 3 anos viajar no banco da frente do automóvel?",
    a : ["Sim, utilizando um sistema de retenção virado para a retaguarda e com a almofada de ar frontal (airbag) do lado do passageiro desactivado.", "Sim, quando o automóvel não tenha nenhum cinto de segurança.", "Sim, sempre que utilize o cinto de segurança.", "Não, em nenhum caso.",]
  },
  {
    q : "Dentro das localidades, os tractores agrícolas não devem exceder a velocidade instantânea de:",
    a : ["30 km/h.", "20 km/h.", "40 km/h.", "50 km/h.",]
  },
  {
    q : "É necessário verificar o nível do líquido de travão com frequência?",
    a : ["Sim e deve ser substituído dentro do período indicado pelo fabricante.", "Sim, para juntar óleo do motor em caso de necessidade.", "Não, porque não se desgasta com o uso.", "Sim, mas não precisa de ser substituído.",]
  } ,
  {
    q : "O condutor, quando mude de direcção, tem que ceder passagem aos peões que estejam a atravessar a faixa de rodagem?",
    a : ["Sim", "Sim, mas só aos que o façam pela passagem para peões.", "Não",]
  },
  {
    q : "Os automóveis pesados de passageiros, fora das localidades, não devem exceder a velocidade instantânea de:",
    a : ["100km/h.", "120km/h.", "80km/h.", "140km/h.",]
  },
  {
    q : "Os automóveis classificam-se em:",
    a : ["Ligeiros e Pesados.", "Motociclos, Ciclomotores, Triciclos, Quadriciclos, ligeiros e Pesados.", "Ligeiros, Pesados e Mistos.", "Ligeiros, Pesados e Motociclos.",]
  },
  {
    q : "Considera-se ultrapassagem quando:",
    a : ["Dois veículos, circulando na mesma fila, o que se encontra atrás passa para diante do outro.", "Os condutores iniciam a marcha, certificando-se de que podem fazê-lo, sem perigo de colidir com um veículo animal que transite no mesmo sentido.", "Os condutores que saiam de qualquer parque de estacionamento cedem passagem aos outros utentes da via.",]
  } ,
  {
    q : "Os condutores de velocípedes devem transitar:",
    a : ["O mais próximo possível das bermas ou passeios do lado esquerdo.", "Só pelas pistas especiais, tendo proibido transitar pela faixa de rodagem.", "Pelos passeios.", "Pela via de trânsito mais a esquerda.",]
  },
  {
    q : "Que deve fazer perante um ferido que tenha uma forte hemorragia na perna?",
    a : ["Cobrir a ferida e levantar-lhe a perna para reduzir a hemorragia.", "Deve sempre fazer um torniquete na perna lesionada.", "Por pomada na ferida.",]
  },
  {
    q : "Podem deixar de respeitar as regras e os sinais de trânsito os condutores de veículos prioritários?",
    a : ["Sim, quando a sua missão o exigir, mas devem respeitar as ordens dos agentes reguladores do trânsito.", "Sim, incluindo as ordens dos agentes reguladores do trânsito.", "Sim, excepto a prioridade de passagem nas intersecções.", "Não",]
  },
  {
    q : "De que modo, o consumo de álcool altera o comportamento do condutor?",
    a : ["Aumenta a autoconfiança, e por isso aumentam os riscos.", "Diminui os seus erros na condução.", "Reduz a sua agressividade na condução.", "Diminui o seu tempo de reacção.",]
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



