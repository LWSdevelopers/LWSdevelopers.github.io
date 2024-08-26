// (PART A) QUESTIONS & ANSWERS - THE FIRST ANSWER IS THE CORRECT ONE
const qa = [
  {
    q : "Os elementos que constituem a suspensão são:",
    a : ["Os pneumáticos, as molas e os amortecedores.", "Os pneumáticos, os amortecedores e as barras de direção.", "Os pneumáticos, as barras de torção e os planetários.",]
  },
  {
    q : "No sistema elétrico de um automóvel, qual o orgão que fornece corrente elétrica de alta tensão?",
    a : ["A bobine.", "O alternador.", "A bateria.", "O motor de arranque.",]
  },
  {
    q : "Quando em piso molhado e sem travar o veículo entra em derrapagem, a causa pode ser:",
    a : ["Pneus gastos.", "Ar no sistema de travagem hidráulico.", "Molas e amortecedores rijos.",]
  },
  {
    q : "Uma carga muito pesada e pouco volumosa colocada muito à frente da caixa de carga:",
    a : ["Aumenta excessivamente o peso incidente sobre as rodas diretrizes, tornando difícil o manejo da direção.", "Aumenta excessivamente o peso incidente sobre as rodas traseiras, sobrecarregando o diferencial.", "Pode provocar o arrebentamento das rodas de trás.",]
  },
  {
    q : "Nos motores diesel , o que provoca a combustão quando o gasóleo é injetado nos cilindros?",
    a : ["A alta temperatura do ar na câmara de combustão.", "A faísca que salta das velas.", "A bobine.",]
  },
  {
    q : "O filtro de combustível tem como função:",
    a : ["Reter as partículas de pó e sujidade existentes no combustível.", "Facilitar a circulação do combustível.", "Filtrar o ar que passa para os cilindros.", "Proteger o sistema de lubrificação do motor.",]
  },
  {
    q : "Periodicamente o nível do óleo no cárter do motor é verificado:",
    a : ["Por meio de uma vareta com dois traços, existente num dos flancos (lados) do motor.", "Por meio de um manómetro, existente na cabeça do motor.", "Por meio de uma vareta com dois traços, existente no depósito de expansão.", "Por meio de um termómetro, existente no radiador.",]
  },
  {
    q : "O dispositivo catalisador intercalado no tubo de escape tem por finalidade:",
    a : ["Reduzir ao mínimo as emissões poluentes que o motor expulsa.", "Garantir o arrefecimento do sistema de escape.", "Reduzir ao mínimo a poluição sonora.", "Aumentar a velocidade de saída dos gases de escape.",]
  },
  {
    q : "O condutor não deve iniciar a marcha do veículo:",
    a : ["Se a pressão do ar dos travões for insuficiente.", "Sem accionar repetidas vezes o pedal de travão.", "Se a temperatura do motor não for suficiente.", "Sem accionar repetidas vezes o pedal do acelerador.",]
  } ,
  {
    q : "Quando existe dificuldade em pôr o motor a trabalhar, pode-se insistir com o motor de arranque?",
    a : ["A insistência excessiva causa danos na bateria.", "Sim, desde que a bateria tenha líquido suficiente.", "Sempre até que o motor comece a trabalhar.", "Sim, desde que o motor esteja quente.",]
  },
  {
    q : "Que efeito produzem os amortecedores descarregados?",
    a : ["As molas oscilam demasiadamente.", "Torna-se difícil movimentar a direcção.", "O veículo ganha maior estabilidade.", "A suspensão torna-se muito dura.",]
  },
  {
    q : "Para que serve o alternador?",
    a : ["Para evitar que a bateria se descarregue.", "Para fornecer corrente à bobine.", "Para carregar o dínamo.", "Para alimentar o motor de arranque.",]
  },
  {
    q : "O sistema hidráulico da direcção assistida permite virar:",
    a : ["Com menos esforço do condutor.", "Com menos volta do volante.", "Com um ângulo maior.", "Com menos velocidade.",]
  } ,
  {
    q : "Onde estão montados o manómetro do óleo, o indicador do nível de combustível e o termómetro?",
    a : ["No painel de instrumentos do veículo.", "No compartimento do motor.", "Na carroçaria do veículo.", "Debaixo do pára-brisas.",]
  },
  {
    q : "No transporte de animais vivos é muito perigoso:",
    a : ["Variar bruscamente a velocidade e a direção.", "Alterar a velocidade sem o auxílio da caixa de velocidades.", "Transitar com velocidade moderada.", "Fazer uso do travão com frequência",]
  },
  {
    q : "Qual o orgão do motor que transmite o movimento da cambota ao veio de excêntricos?",
    a : ["Correia de distribuição..", "Correia da ventoinha.", "Impulsores.", "Biela.",]
  },
  {
    q : "Qual a característica mais importante duma direção assistida?",
    a : ["A direção pode ser manejada com pouco esforço do condutor.", "Só é possível manejar a direção com o veículo em andamento.", "A direção pode ser manejada com pouco esforço do condutor.", "Nunca é necessário proceder à sua lubrificação.",]
  } ,
  {
    q : "Qual o inconveniente de conduzir com o pé apoiado no pedal da embraiagem?",
    a : ["Pode causar danos no rolamento de encosto.", "Desgaste dos rolamentos da caixa de velocidades.", "Desgaste excessivo dos carretos da caixa de velocidades.", "O motor aquece excessivamente.",]
  },
  {
    q : "Nos motores de explosão, qual o tipo de corrente que percorre as velas de ignição?",
    a : ["Alta tensão.", "Contínua intermitente.", "Baixa tensão.", "Alternada trifásica.",]
  },
  {
    q : "Nos travões hidráulicos, as pastilhas são empurradas e pressionadas contra o disco:",
    a : ["Pelos êmbolos dos cilindros.", "Pelo servo-freio.", "Pelos pratos de pressão.", "Pela pressão do ar.",]
  },
  {
    q : "Os amortecedores do sistema de suspensão servem para:",
    a : ["Reduzir a amplitude das oscilações das molas.", "Contrariar a inclinação do veículo nas curvas.", "Reduzir o peso que incide sobre as rodas.", "Evitar o atrito dos pneus com o solo.",]
  } ,
  {
    q : "A presença de água misturada com óleo do motor de um automóvel significa:",
    a : ["Junta de cabeça do motor com fugas.", "Bomba de água avariada.", "Radiador com fugas.", "Bomba de óleo avariada.",]
  },
  {
    q : "Com a direção desalinhada, o que poderá acontecer?",
    a : ["Desgaste anormal dos pneus.", "O veículo fica sem direção.", "Aquecimento excessivo dos pneus.",]
  },
  {
    q : "A condução de um veículo autotanque pode ser difícil e perigosa quando a respetiva cisterna:",
    a : ["Não está completamente cheia.", "Está completamente cheia.", "Não está completamente cheia",]
  },
  {
    q : "O que pode acontecer quando os cabos ligados à bateria estão oxidados ou pouco apertados?",
    a : ["O motor de arranque não funciona.", "A bateria descarrega-se totalmente.", "O alternador não funciona.", "Um incêndio provocado por curto circuito.",]
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



