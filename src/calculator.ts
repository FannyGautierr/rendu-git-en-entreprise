export const setupCalculator = () => {
  const x = document.querySelector<HTMLInputElement>('#x')!;
  const y = document.querySelector<HTMLInputElement>('#y')!;

  const operator = document.querySelector<HTMLSelectElement>('#operator')!;
  const resultElement = document.querySelector<HTMLSpanElement>('#result')!;

  x.addEventListener('input', updateResult);
  y.addEventListener('input', updateResult);
  operator.addEventListener('change', updateResult);

  function updateResult() {
    resultElement.textContent = calculate(
      Number(x.value),
      Number(y.value),
      operator.value
    )?.toString() ?? 'Invalid input';
  };
};

export function calculate(x: number, y: number, operator: string) {
  switch (operator) {
  case '+':
    return x + y;
  case '-':
    return x - y;
  case '*':
    return x * y;
  case '/':
    return x / y;
  }
};
