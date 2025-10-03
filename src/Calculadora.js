import { useState } from "react";

const Contador = () => {
  const [signo, setExpresion] = useState("");

  const agregarCaracter = (char) => {
    if (signo === "" && ["+", "*", "/", "-"].includes(char) && char !== "-")
      return;
    const ultimoChar = signo.slice(-1);
    if (
      ["+", "-", "*", "/"].includes(char) &&
      ["+", "-", "*", "/"].includes(ultimoChar)
    ) {
      setExpresion(signo.slice(0, -1) + char);
      return;
    }
    setExpresion(signo + char);
  };

  const calcularResultado = () => {
    try {
      const resultado = eval(signo);
      setExpresion(String(resultado));
    } catch {
      setExpresion("Error");
    }
  };

  const limpiar = () => setExpresion("");

  return (
    <div>
      <label>Contador: {signo || "0"}</label>
      <br />
      <br />
      <br />
      <button onClick={() => agregarCaracter("1")}>1</button>
      <button onClick={() => agregarCaracter("2")}>2</button>
      <button onClick={() => agregarCaracter("3")}>3</button>

      <br />

      <button onClick={() => agregarCaracter("4")}>4</button>
      <button onClick={() => agregarCaracter("5")}>5</button>
      <button onClick={() => agregarCaracter("6")}>6</button>

      <br />

      <button onClick={() => agregarCaracter("7")}>7</button>
      <button onClick={() => agregarCaracter("8")}>8</button>
      <button onClick={() => agregarCaracter("9")}>9</button>
      <button onClick={() => agregarCaracter("0")}>0</button>

      <br />
      <button onClick={() => agregarCaracter("+")}>+</button>
      <button onClick={() => agregarCaracter("-")}>-</button>
      <button onClick={() => agregarCaracter("*")}>*</button>
      <button onClick={() => agregarCaracter("/")}>/</button>
      <br />
      <button onClick={limpiar}>AC</button>
      <button onClick={calcularResultado}>=</button>
    </div>
  );
};

export default Contador;
