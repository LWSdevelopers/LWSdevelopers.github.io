// (PART A) QUESTIONS & ANSWERS - THE FIRST ANSWER IS THE CORRECT ONE
const qa = [
  {
    q : "Os fusíveis têm como principal função:",
    a : ["Proteger a instalação eléctrica em caso de curto-circuito.", "Aumentar a intensidade do circuito eléctrico.", "Evitar curto-circuito.",]
  },
  {
    q : "Antes de por o motor a funcionar o condutor deve:",
    a : ["Verificar se o radiador tem água suficiente e se o cárter tem óleo ao nível.", "Encher o carburador com gasolina.", "Engrenar a primeira velocidade.",]
  },
  {
    q : "Num incêndio provocado por curto-circuito, a primeira coisa a fazer é:",
    a : ["Deligar a bateria ou o motor", "Lançar espuma do extintor no local onde se deu o curto-circuito.", "Lançar areia ou terra no local onde se deu o curto-circuito.",]
  },
  {
    q : "O motor apresenta um consumo excessivo de óleo e liberta gases de escape de cor azulada. Qual poderá ser a causa?",
    a : ["Os segmentos ou as paredes dos cilindros estão bastantes desgastados.", "O óleo utilizado é muito viscoso.", "A junta do cárter está a vedar mal.",]
  },
  {
    q : "Nos travões pneumáticos o ar comprimido é obtido:",
    a : ["Por meio de um compressor.", "Através do filtro de ar.", "Através do intercooler.",]
  },
  {
    q : "O perigo de resvalamento é menos provável quando:",
    a : ["O condutor inicia as travagens com suficiente antecedência..", "Se coloca a alavanca de velocidade em ponto morto nas descidas.", "Os pneus têm pressão superior à recomendada.",]
  },
  {
    q : "No transporte de mercadoria a granel:",
    a : ["Não pode ser excedida a altura dos taipais..", "Deve-se utilizar veículos de caixa isotérmica.", "Não se podem utilizar veículos de caixa aberta.",]
  },
  {
    q : "Num motor a 4 tempos, por cada tempo de funcionamento do motor, a cambota dá:",
    a : ["Meia volta", "Uma volta", "Dez voltas",]
  },
  {
    q : "As bielas servem para:",
    a : ["Transmitir movimento a cambota.", "Ligar o motor", "Acelerar automaticamente",]
  } ,
  {
    q : "O curso do êmbolo é definido por:",
    a : ["A distância percorrida pelo êmbolo entre o P.M.S. e o P.M.I.", "O diâmetro dos cilindros", "Distância percorrida pelo cilindro",]
  },
  {
    q : "As molas das maxilas, servem para;",
    a : ["Afastar as maxilas do tambor.", "Travar o veículo", "Diminuir o esforço do condutor",]
  },
  {
    q : "Num motor de 6 cilindros e 4 tempos, quantas voltas dá a cambota, num ciclo completo:",
    a : ["2", "1", "4",]
  },
  {
    q : "Quando um veículo descreve uma curva e a luz de aviso da lubrificação do motor acende, a causa pode ser:",
    a : ["Nivel de óleo no motor, muito baixo", "Nivel de óleo no motor, muito alto", "Avaria no filtro de ar",]
  } ,
  {
    q : "Clique na ordem correcta dos tempos de um ciclo de motor a 4 tempos:",
    a : ["Admissão, compressão, combustão/explosão, escape.", "Compressão, admissão, combustão/explosão, escape.", "Compressão, combustão/explosão, escape, admissão.",]
  },
  {
    q : "Accionando a ventoinha por embraiagem hidráulica sem válvula de comando, para produzir a rotação do cubo:",
    a : ["É retirado o óleo de dentro de disco para fazer rodar o cubo.", "É introduzido dentro deste, óleo para que quando o disco rodar o cubo seja arrastado juntamente com o disco.", "É introduzido o óleo dentro do disco",]
  },
  {
    q : "Qual é a sede de uma válvula?",
    a : ["A zona da cabeça do motor", "A zona superior da válvula", "Todo o revestimento da válvula",]
  },
  {
    q : "O retardador ou travão elétrico, funciona:",
    a : ["Gerando um campo magnético, com produção de corrente induzida que se opõe ao movimento de dois discos ligados à transmissão.", "Através da força de atrito entre duas superfícies em contacto que o condutor controla por meio de manípulo próprio.", "Funciona através de correntes parasitas",]
  } ,
  {
    q : "Uma vez acionado o pedal de acelerador, actua:",
    a : ["Na borboleta de aceleração.", "Na borboleta de ar", "No regulador das velocidades",]
  },
  {
    q : "Qual é o nome do reservatório de óleo, que fica na parte inferior do motor?",
    a : ["Carter inferior", "Engrenagem", "Tanque",]
  },
  {
    q : "A manutenção periódica é necessária na distribuição por:",
    a : ["Correia.", "Carreto", "Corrente",]
  },
  {
    q : "Num motor de explosão arrefecido pelo sistema de bomba de água, a circulação faz-se da seguinte forma:",
    a : ["A água desce do radiador, entra na bomba, sobe às camisas de água no motor e volta ao radiador.", "A água desce do radiador, sobe na bomba, entra nas camisas de água do motor e volta à bomba.", "A água desce da bomba, entra no radiador sobe às camisas de água do motor e volta à bomba.",]
  } ,
  {
    q : "Na situação de caldeamento ou gripagem, devido ao efeito do calor originado pelo atrito de deslizamento:",
    a : ["Os cristais das superfícies deslizantes têm tendência para se interpenetrarem.", "Os cristais das peças próximas das superfícies deslizantes têm tendência para se interpenetrarem.", "Nada acontece",]
  },
  {
    q : "Qual é a ordem correcta do ciclo de funcionamento do motor a 4 tempos:",
    a : ["1, 3, 4, 2.", "1, 2, 3, 4.", "1, 2, 4, 3.",]
  },
  {
    q : "As molas das maxilas, quando perde a sua elasticidade ao retirar o pé:",
    a : ["Do pedal após uma travagem as rodas continuam presas.", "O carro, não trava", "A roda não trava",]
  },
  {
    q : "Num motor de 4 tempos, em cada tempo do ciclo, a combota roda:",
    a : ["180º", "90º", "720º",]
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



