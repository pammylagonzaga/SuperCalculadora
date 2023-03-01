function start() {
  var buttoncalculate = document.querySelector('#calc-button');
  buttoncalculate.addEventListener('click', resultTotalEvent);

  var inputA = document.querySelector('#number-a');
  var inputB = document.querySelector('#number-b');

  inputA.addEventListener('input', resultTotalEvent);
  inputB.addEventListener('input', resultTotalEvent);

  resultTotalEvent();
}

function somaAB(a, b) {
  return a + b;
}

function subAB(a, b) {
  return a - b;
}

function subBA(a, b) {
  return b - a;
}

function multiAB(a, b) {
  return a * b;
}

function diviAB(a, b) {
  return a / b;
}

function diviBA(a, b) {
  return b / a;
}

function potentAB(a, b) {
  return Math.pow(a, b);
}

function potentBA(a, b) {
  return Math.pow(b, a);
}

function raizA(a) {
  return Math.sqrt(a);
}

function raizB(b) {
  return Math.sqrt(b);
}

function factorA(a) {
  var result = a;
  if (a === 0 || a === 1) return 1;
  while (a > 1) {
    a--;
    result *= a;
  }
  return result;
}

function factorB(b) {
  var result = b;
  if (b === 0 || b === 1) return 1;
  while (b > 1) {
    b--;
    result *= b;
  }
  return result;
}

function porcentAB(a, b) {
  return b * 100 / a;
}

function porcentBA(a, b) {
  return a * 100 / b;
}

function mediaAB(a, b) {
  return (a + b) / 2;
}

function resultTotalEvent() {
  var inputA = document.querySelector('#number-a');
  var inputB = document.querySelector('#number-b');

  //substituição de valores
  //1
  var somaT = document.querySelector('#somaT');
  var subTAB = document.querySelector('#subAB');
  var subTBA = document.querySelector('#subBA');

  //2
  var multiTAB = document.querySelector('#multiAB');
  var diviTAB = document.querySelector('#diviAB');
  var diviTBA = document.querySelector('#diviBA');

  //3
  var potentTAB = document.querySelector('#potentAB');
  var potentTBA = document.querySelector('#potentBA');
  var raizTA = document.querySelector('#raizA');

  //4
  var raizTB = document.querySelector('#raizB');
  var factorTA = document.querySelector('#factorA');
  var factorTB = document.querySelector('#factorB');

  //5
  var porcentTAB = document.querySelector('#porcentAB');
  var porcentTBA = document.querySelector('#porcentBA');
  var mediaTAB = document.querySelector('#mediaAB');

  var a = Number(inputA.value);
  var b = Number(inputB.value);

  //substituição de função
  //1
  var soma = somaAB(a, b);
  var sub_AB = subAB(a, b);
  var sub_BA = subBA(a, b);

  //2
  var multi_AB = multiAB(a, b);
  var divi_AB = diviAB(a, b);
  var divi_BA = diviBA(a, b);

  //3
  var potent_AB = potentAB(a, b);
  var potent_BA = potentBA(a, b);
  var raiz_A = raizA(a);

  //4
  var raiz_B = raizB(b);
  var factor_A = factorA(a);
  var factor_B = factorB(b);

  //5
  var porcent_AB = porcentAB(a, b);
  var porcent_BA = porcentBA(a, b);
  var media_AB = mediaAB(a, b);

  //substituição por texto
  //1
  somaT.textContent = soma;
  subTAB.textContent = sub_AB;
  subTBA.textContent = sub_BA;

  //2
  multiTAB.textContent = multi_AB;
  diviTAB.textContent = divi_AB.toFixed(2);
  diviTBA.textContent = divi_BA.toFixed(2);

  //3
  potentTAB.textContent = potent_AB;
  potentTBA.textContent = potent_BA;
  raizTA.textContent = raiz_A.toFixed(2);

  //4
  raizTB.textContent = raiz_B.toFixed(2);
  factorTA.textContent = factor_A;
  factorTB.textContent = factor_B;

  //5
  porcentTAB.textContent = porcent_AB.toFixed(0) + "%";
  porcentTBA.textContent = porcent_BA.toFixed(0) + "%";
  mediaTAB.textContent = media_AB;
}
start();
