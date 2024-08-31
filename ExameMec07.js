// (PART A) QUESTIONS & ANSWERS - THE FIRST ANSWER IS THE CORRECT ONE
const qa = [
  {
    q : "O que provoca o arrefecimento do motor?",
    a : ["É a água que circula pelas camisas de água do motor.", "É o ar que circula pelas camisas de ar do motor.", "É o ar que circula pelo cárter de óleo do motor.",]
  },
  {
    q : "A direcção assistida permite:",
    a : ["Diminuir o esforço do condutor no volante.", "Alinhar a direcção com as rodas.", "Aumentar o ângulo de viragem.",]
  },
  {
    q : "Os principais componentes do sistema de transmissão são:",
    a : ["Embraiagem, caixa de velocidades e diferencial.", "Veio de transmissão, volante do motor e pneus.", "Molas, amortecedores e estabilizadores.",]
  },
  {
    q : "Os fusíveis  servem para:",
    a : ["Proteger a instalação eléctrica.", "Intensifcar a corrente elétrica", "Evitar que a bateria se descarregue.", "Evitar curto-circuito.",]
  },
  {
    q : "Nos travões hidráulicos, as pastilhas são acionadas e pressionadas contra o disco:",
    a : ["Pelos êmbolos dos cilindros.", "Pelo servo-freio.", "Pelos pratos de pressão.", "Pela pressão do ar.",]
  },
  {
    q : "Que cuidados deve ter com as molas de suspensão?",
    a : ["Não pôr carga excessiva, trazer devidamente lubrificadas as cavilhas e evitar covas.", "Colocar a carga na caixa de carga sempre à retaguarda.", "Substitui-las de 5.000 em 5.000 km.", "Não se requer cuidados especiais, se partirem devem ser substituídas.",]
  },
  {
    q : "No motor a falta do filtro de ar facilita a entrada das impurezas nos cilindros, e tem como consequências:",
    a : ["Desgaste dos cilindros..", "Paragem do motor", "Gripagem do motor", "Sobreaquecimento do motor",]
  },
  {
    q : "Um pneu com pressão muito inferior à recomendada, apresenta maior desgaste:",
    a : ["Nos bordos laterais.", "No lado esquerdo", "No lado direito.",]
  },
  {
    q : "Qual a função da placa de díodos (retificador de tensão) do alternador?",
    a : ["Transformar a corrente alternada em contínua e proteger a bateria de uma possível descarga..", "Regular a intensidade de corrente das velas.", "Transformar a corrente de baixa em alta tensão",]
  } ,
  {
    q : "Se o motor roda normalmente mas não pega, a causa pode ser:",
    a : ["Avaria no sistema de alimentação..", "Correia da ventoinha partida ou frouxa.", "Falta de óleo no motor.",]
  },
  {
    q : "De que modo é lubrificada a caixa de direção com cremalheira?",
    a : ["É lubrificada com massa consistente..", "É lubrificada com o mesmo óleo utilizado nos motores de combustão interna.", "É lubrificada com óleo SAE15W40",]
  },
  {
    q : "Como se chama o órgão que permite que, nas curvas, a roda motriz de fora dê maior número de voltas?",
    a : ["Diferencial.", "Semieixo", "Satélite",]
  },
  {
    q : "Clique na alternativa incorreta:",
    a : ["Bateria é o órgão que fornece corrente elétrica ao alternador.", "Conforme a disposição das lonas (telas) os pneus podem ser radiais ou diagonais", "O “servo-freio” é um órgão que está montado no sistema de travagem",]
  } ,
  {
    q : "Num automóvel pesado com travão de ar comprimido, se o motor para (se for abaixo) o veículo continua a travar?",
    a : ["Trava enquanto houver suficiente pressão de ar no reservatório.", "Trava com menos intensidade.", "Só trava com o travão de mão.",]
  },
  {
    q : "Se os amortecedores hidráulicos de um automóvel estiverem descarregados, o condutor nota:",
    a : ["Oscilação demasiada das molas.", "Aumento do consumo de combustível.", "Aumento de desagaste dos pneus.",]
  },
  {
    q : "O filtro de ar serve para:",
    a : ["Limpar o ar das impurezas antes de entrar nos cilindros.", "Filtrar as impurezas da gasolina", "Pulverizar o ar e misturá-lo com gasolina.",]
  },
  {
    q : "Sempre que se substitui um fusível este funde. Qual poderá ser a causa?",
    a : ["Curto-circuito.", "Bateria com excesso de carga.", "Uma lâmpada fundida",]
  } ,
  {
    q : "Se o motor roda normalmente mas não pega, a causa pode ser:",
    a : ["Avaria no sistema de alimentação.", "Correia da ventoinha partida ou frouxa.", "Falta de óleo no motor.",]
  },
  {
    q : "Qual a característica mais importante duma direção assistida?",
    a : ["A direção pode ser manejada com pouco esforço do condutor.", "Nunca é necessário proceder à sua lubrificação.", "Não é possível manejar a direção com o veículo em andamento.",]
  },
  {
    q : "A embraiagem serve para:",
    a : ["Ligar e desligar o motor dos restantes órgãos da transmissão e permitir arranques suaves.", "Ligar a caixa de velocidade ao diferencial.", "Ligar o motor ao diferencial.",]
  },
  {
    q : "Satélites e planetários são engrenagens que pertencem:",
    a : ["Ao diferencial.", "Ao sistema de distribuição.", "À caixa de velocidades.",]
  } ,
  {
    q : "Os elementos que constituem a suspensão são:",
    a : ["Os pneumáticos, as molas e os amortecedores.", "Os pneumáticos, os amortecedores e as barras de direção.", "Os pneumáticos, as barras de torção e os planetários.",]
  },
  {
    q : "Para que servem os pequenos orifícios existentes nas tampas dos elementos das baterias?",
    a : ["Dão saída aos gases que se formam no interior dos elementos.", "Facilitam a evaporação do ácido sulfúrico que esteja em excesso.", "Permitem verificar o nível de líquido contido no seu interior.",]
  },
  {
    q : "Qual o inconveniente de conduzir com o pé apoiado no pedal da embraiagem?",
    a : ["Pode causar danos no rolamento de encosto.", "Desgaste dos rolamentos da caixa de velocidades.", "Desgaste excessivo dos carretos da caixa de velocidades.",]
  },
  {
    q : "Num motor sem termostato a água do sistema de refrigeração:",
    a : ["Demora mais tempo a aquecer.", "Aquece rapidamente.", "Não circula.",]
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



