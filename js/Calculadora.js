console.log("Hola Mundo");

const getNumbers = () => {
  return {
    Num1: Number(document.getElementById("Num1").value),
    Num2: Number(document.getElementById("Num2").value),
  };
};

const setResult = (n) => {
  document.getElementById("Result").value = n;
};

const Sumar = () => {
  const { Num1, Num2 } = getNumbers();

  setResult(Num1 + Num2);
};

const Restar = () => {
  const { Num1, Num2 } = getNumbers();

  setResult(Num1 - Num2);
};

const Multiplicar = () => {
  const { Num1, Num2 } = getNumbers();

  setResult(Num1 * Num2);
};

const Dividir = () => {
  const { Num1, Num2 } = getNumbers();

  if (isNaN(Num1 / Num2)) {
    alert("Error de sintaxis");
  } else {
    setResult(Num1 / Num2);
  }
};
