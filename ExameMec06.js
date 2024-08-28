// (PART A) QUESTIONS & ANSWERS - THE FIRST ANSWER IS THE CORRECT ONE
const qa = [
  {
    q : "Se os amortecedores das rodas da frente estiverem descarregados:",
    a : ["O número de oscilações das molas aumenta.", "Torna-se difícil movimentar a direcção", "A amplitude das oscilações das molas diminui.",]
  },
  {
    q : "Para lubrificar a caixa de velocidades e o diferencial utiliza-se:",
    a : ["Valvulina.", "Massa consistente.", "Uma mistura de valvulina e massa consistente", "Óleo hidráulico.",]
  },
  {
    q : "Quando o veículo está parado torna-se mais fácil rodar o volante da direcção:",
    a : ["Quando se trata de uma direcção assistida.", "Quando se trata de uma direcção pneumática.", "Quando o seu movimento é pouco desmultiplicado.",]
  },
  {
    q : "Que efeito produz um catalisador?",
    a : ["Converte os gases do escape de nocivos em inofensivos.", "Aumenta a potência do motor e reduz o seu consumo.", "Reduz a potência do motor e aumenta o seu consumo.",]
  },
  {
    q : "No transporte de mercadoria a granel:",
    a : ["Não pode ser excedida a altura dos taipais.", "Não se deve atingir 4 metros de altura.", "Não se podem utilizar veículos de caixa aberta.",]
  },
  {
    q : "O nível do óleo do motor é verificado:",
    a : ["Pela vareta graduada.", "Pelo bocal existente na cabeça do motor.", "Através do respectivo termómetro",]
  },
  {
    q : "Qual destas sequências é correcta?",
    a : ["Bomba de alimentação – filtro – bomba injectora.", "Bomba injectora – filtro – bomba de alimentação.", "Bomba de alimentação – bomba injectora - filtro.",]
  },
  {
    q : "Quando a bomba de água da refrigeração do motor se avaria:",
    a : ["O termómetro dá aviso.", "O motor não funciona.", "O termóstato dá aviso.", "O manómetro dá aviso.",]
  },
  {
    q : "Quando existe dificuldade em pôr o motor a trabalhar, pode-se insistir com o motor de arranque?",
    a : ["A insistência excessiva causa danos na bateria.", "Sim, desde que a bateria tenha líquido suficiente.", "Sempre até o motor de arranque carregar a bateria.",]
  },
  {
    q : "Para substituir um pneu furado deve-se começar por:",
    a : ["Aliviar as porcas antes de levantar o veículo.", "Calçar o veículo e levantá-lo com o macaco.", "Verificar a pressão do ar contido no pneu.",]
  },
  {
    q : "O diferencial serve para permitir:",
    a : ["Que uma das rodas motoras gire mais do que a outra sempre que necessário.", "Ligar ou desligar a transmissão do movimento entre o motor e restantes órgãos de transmissão.", "Fazer várias combinações de desmultiplicação por meio dos carretos.",]
  },
  {
    q : "Os órgãos da direcção devem estar em bom estado de conservação, para evitar as anomalias que produzem:",
    a : ["Falta de segurança no veículo.", "Avarias no diferencial.", "Oscilações no volante do motor.",]
  },
  {
    q : "Em caso de travagem sobre pavimento escorregadio, a que pode dever-se o resvalamento do veículo?",
    a : ["Os pneus gastos.", "Os pneus pouco rodados.", "Ar na tubagem dos travões.",]
  },
  {
    q : "Como devem ser transportados animais vivos de pequeno porte?",
    a : ["Em grades adequadas ao seu tamanho.", "Em veículos caixa de carga tipo cisterna.", "Em veículos de caixa isotérmica",]
  },
  {
    q : "Os travões de ar comprimido actuam quando o motor estiver parado?",
    a : ["Sim, desde que haja pressão suficiente..", "Sim, somente o travão de estacionamento.", "Sim, mas com menos intensidade",]
  },
  {
    q : "O que provoca o arrefecimento do motor?",
    a : ["É a água que circula pelas camisas de água do motor.", "É o ar que circula pelo cárter de óleo do motor", "É o ar que circula pelas camisas de ar do motor.", "É a água que circula pelo cárter do motor.",]
  },
  {
    q : "A direcção assistida permite:
",
    a : ["Diminuir o esforço do condutor no volante.", "Aumentar o ângulo de viragem.", "Diminuir a desmultiplicação no volante.", "Alinhar a direcção com as rodas.",]
  },
  {
    q : "Os principais componentes do sistema de transmissão são:",
    a : ["Embraiagem, caixa de velocidades e diferencial.", "Veio de transmissão, volante do motor e pneus.", "Pendural, barra lateral, parafuso sem-fim e sector.",]
  },
  {
    q : "Os fusíveis  servem para:",
    a : ["Proteger a instalação eléctrica.", "Evitar que a bateria se descarregue.", "Evitar curto-circuito",]
  },
  {
    q : "Nos travões hidráulicos, as pastilhas são acionadas e pressionadas contra o disco:",
    a : ["Pelos êmbolos dos cilindros.", "Pela pressão do ar.", "Pelo servo-freio",]
  },
  {
    q : "Que cuidados deve ter com as molas de suspensão?",
    a : ["Não pôr carga excessiva, trazer devidamente lubrificadas as cavilhas e evitar covas.", "Colocar a carga na caixa de carga sempre à retaguarda.", "Substitui-las de 5.000 em 5.000 km.",]
  },
  {
    q : "No motor a falta do filtro de ar facilita a entrada das impurezas nos cilindros, e tem como consequências:",
    a : ["Desgaste dos cilindros.", "Paragem do motor.", "Sobreaquecimento do motor",]
  },
  {
    q : "Um pneu com pressão muito inferior à recomendada, apresenta maior desgaste:",
    a : ["Nos bordos laterais.", "Na zona central.", "No lado esquerdo",]
  },
  {
    q : "Como deve ser transportada uma carga pouco volumosa cujo peso seja igual à capacidade de carga máxima do veículo?",
    a : ["No centro da caixa de carga.", "Toda puxada para a retaguarda", "O mais próximo possível da cabina.",]
  },
  {
    q : "Qual a função da placa de díodos ou retificador de tensão do alternador?",
    a : ["Transformar a corrente alternada em contínua e proteger a bateria de uma possível descarga.", "Regular a intensidade de corrente das velas.", "Transformar a corrente de baixa em alta tensão.",]
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



