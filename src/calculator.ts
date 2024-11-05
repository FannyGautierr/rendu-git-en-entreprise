export const setupCalculator = () => {
  let result: number;

  const x = document.querySelector<HTMLInputElement>('#x')!;
  const y = document.querySelector<HTMLInputElement>('#y')!;

  const operator = document.querySelector<HTMLSelectElement>('#operator')!;
  const resultElement = document.querySelector<HTMLSpanElement>('#result')!;

  x.addEventListener('input', calculate);
  y.addEventListener('input', calculate);
  operator.addEventListener('change', calculate);

  function calculate() {
    const xValue = parseFloat(x.value);
    const yValue = parseFloat(y.value);

    switch (operator.value) {
    case '+':
      result = xValue + yValue;
      break;
    case '-':
      result = xValue - yValue;
      break;
    case '*':
      result = xValue * yValue;
      break;
    case '/':
      result = xValue / yValue;
      break;
    }

    resultElement.textContent = result.toString();
  }
};
