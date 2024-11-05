import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <input
      type="number"
      id="x"
      class="bg-neutral-700 border border-neutral-500 rounded p-2 w-24"
    />
    <select
      id="operator"
      class="bg-neutral-700 border border-neutral-500 rounded p-2"
    >
      <option value="+">&#43;</option>
      <option value="-">&#8722;</option>
      <option value="*">&#215;</option>
      <option value="/">&#247;</option>
    </select>
    <input
      type="number"
      id="x"
      class="bg-neutral-700 border border-neutral-500 rounded p-2 w-24"
    />
    <span>&#61;</span>
    <span id="result" class="bg-neutral-700 border border-neutral-500 rounded p-2"></span>
  </div>
`;
