// (PART A) QUESTIONS & ANSWERS - THE FIRST ANSWER IS THE CORRECT ONE
const qa = [
  {
    q : "Qual dos seguintes órgãos não pertence ao sistema de suspensão?",
    a : ["Prato de pressão.", "Amortecedores.", "Barra de torção.", "Molas.",]
  },
  {
    q : "Um aquecimento exagerado no motor pode ser provocado por:",
    a : ["Correia da ventoinha partida.", "Correia da ventoinha muito esticada.", "Excesso de água no radiador.", "Termostato sempre aberto.",]
  },
  {
    q : "Um pneu com excesso de pressão apresenta maior desgaste:",
    a : ["No centro.", "No lado esquerdo", "Nos bordos laterais.", "No lado direito.",]
  },
  {
    q : "Como deve ser distribuída a mercadoria na caixa de carga do veículo?",
    a : ["Por forma a não afetar a visibilidade do condutor nem o equilíbrio do veículo.", "Deve ser colocada o mais possível à frente da caixa de carga.", "As mais leves devem ser colocadas por baixo.",]
  },
  {
    q : "O que acontece quando a embraiagem está a patinar?",
    a : ["O veio primário recebe com deficiência o movimento do volante do motor.", "O diferencial recebe com deficiência o movimento do veio de transmissão.", "As mudanças não entram.",]
  },
  {
    q : "Quais os cuidados que se deve ter com a lubrificação do motor?",
    a : ["Mudar o óleo periodicamente de acordo com as indicações do fabricante.", "Mudar o óleo a cada 20.000 km.", "Substituir o filtro de óleo mensalmente.", "Verificar durante a marcha se o termómetro acusa sempre a devida pressão.",]
  },
  {
    q : "Em qual dos seguintes casos se torna mais fácil movimentar o volante da direção:",
    a : ["Se existir uma bomba hidráulica na direção.", "Quando se roda o volante com o veículo parado.", "Se o veículo estiver equipado com servo-freio.", "Se existir uma bomba hidráulica na direção.",]
  },
  {
    q : "Fazem parte da embraiagem:",
    a : ["Rolamento de encosto ou carvão, disco de ferodo e prato de pressão.", "Pneus, molas, amortecedores, estabilizadores.", "Parafuso sem-fim e o sector, cavilhões, manga de eixo.", "Veio primário, veio secundário, veio intermediário.",]
  },
  {
    q : "O nível do eletrólito da bateria deverá permanecer sempre:",
    a : ["Acima das placas.", "A meio das placas.", "Abaixo das placas.",]
  } ,
  {
    q : "Num sistema de travagem do tipo pneumático, os travões de serviço falham de uma forma súbita. Qual poderá ser a causa?",
    a : ["Fuga de ar no circuito pneumático.", "Fuga de ar no amortecedor oleopneumático.", "Desgaste das pastilhas de travão.",]
  },
  {
    q : "Qual dos seguintes órgãos pertence ao sistema de suspensão?",
    a : ["Barra de torção.", "Pinhão e cremalheira.", "Manga de eixo",]
  },
  {
    q : "O termóstato serve para:",
    a : ["Interromper a circulação da água pelo radiador enquanto o motor está frio.", "Interromper a circulação da água pelo radiador enquanto o motor está quente.", "Refrigerar a água quando o motor atingir a temperatura de 80º à 90º.", "Permitir a circulação da água pelo radiador enquanto o motor está frio.",]
  },
  {
    q : "Qual dos seguintes motivos pode dar origem a uma derrapagem?",
    a : ["Velocidade não adequada às condições da via.", "Conduzir de noite em locais sem iluminação.", "Não reduzir a velocidade no cruzamento com outros veículos.", "Ultrapassar numa via estreita com dois sentidos.",]
  } ,
  {
    q : "A condução de um veículo autotanque pode ser difícil e perigosa quando a respetiva cisterna:",
    a : ["Não está completamente cheia.", "Está completamente vazia.", "Está completamente cheia",]
  },
  {
    q : "De noite estando o motor a trabalhar e falharem as luzes qual poderá ser a causa?",
    a : ["Fusíveis queimados ou fundidos.", "Motor de arranque avariado.", "Correia da ventoinha pouco apertado.", "Bateria com pouca carga.",]
  },
  {
    q : "Nos motores de explosão, a mistura gasosa que entra nos cilindros durante o tempo de admissão é composta de:",
    a : ["Gasolina e ar.", "Gasolina e dióxido de carbono", "Gasóleo e ar.", "Gasóleo e oxigénio.",]
  },
  {
    q : "A falha súbita de travões num sistema de travagem tipo hidráulico, pode dever-se a:",
    a : ["Fuga na tubagem do sistema hidráulico.", "Calços de travões gastos.", "Molas das maxilas pasmadas.", "Pouca pressão de ar.",]
  } ,
  {
    q : "O orgão que gera corrente elétrica de baixa tensão e serve para fornecer corrente aos componentes do sistema elétrico de um automóvel é:",
    a : ["O alternador.", "O motor de arranque.", "A bobine",]
  },
  {
    q : "Para se obter um correto funcionamento da direção assistida é necessário que:",
    a : ["O motor esteja em funcionamento.", "O sistema de suspenção pneumática esteja à pressão adequada.", "O veículo esteja em movimento.",]
  },
  {
    q : "Quando se verifica excessiva dificuldade em engrenar uma mudança, a causa pode ser:",
    a : ["Sincronizador avariado.", "Caixa de velocidades com excesso de valvulina.", "Disco de embraiagrem com pouco tempo de uso.",]
  },
  {
    q : "Se os amortecedores hidráulicos de um automóvel estiverem descarregados, o condutor nota:",
    a : ["Oscililação demasiada das molas.", "Aumento do consumo de combustível.", "Aumento de desagaste dos pneus.",]
  } ,
  {
    q : "Em caso de avaria da bomba de água:",
    a : ["O termómetro acusa valores elevados de temperatura.", "O motor não trabalha.", "O termóstato não abre.", "O manómetro acusa valores elevados de pressão da água.",]
  },
  {
    q : "Se os pneus da roda da frente apresentarem desgaste excessivo num dos bordos laterias, qual poderá ser a causa?",
    a : ["Direção desalinhada.", "Circulam com presão excessivamente baixa.", "Circulam com presão excessivamente baixa.",]
  },
  {
    q : "Como se deve distribuir a mercadoria na caixa de carga do veículo:",
    a : ["Por forma a não afetar a visibilidade do condutor nem o equilíbrio do veículo.", "Não deve exceder em mais de 10 cm a largura do veículo.", "Deve ser colocada o mais possível à frente da caixa de carga.",]
  },
  {
    q : "As avarias mais frequentes na bateria, são:",
    a : ["Elementos avariados.", "Escovas e elementos avariados", "Fusíveis e elementos avariados.",]
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



