/*
 * js functions available to all pages
 */

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function redirect(path) {
  if (window.location.pathname === path) window.location.reload();
  else window.location.pathname = path;
}

export function isNumeric(str) {
  if (typeof str == 'number') return true;
  if (typeof str != "string") return false;
  // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this) and ensure strings of whitespace fail
  return !isNaN(str) && !isNaN(parseFloat(str))
}

export function isDate(str) {
  if (isNumeric(str)) return false;
  const date = Date.parse(str);
  return !isNaN(date);
}

export function round(num, decimals = 0) {
  const k = Math.pow(10, decimals);
  return Math.round(num * k) / k;
}

export function roundup(num, decimals = 0) {
  const k = Math.pow(10, decimals);
  return Math.ceil(num * k) / k;
}

export function rounddown(num, decimals = 0) {
  const k = Math.pow(10, decimals);
  return Math.floor(num * k) / k;
}

export function getQueryVariable(key) {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
  let value = params[key]; // "some_value"
  return (value || "").trim();
}

export function alnumLower(str) {
  return str.replace(/[^a-z0-9]/gi, '').toLowerCase();
}

/** Callback used to in Array.filter to create unique array */
export function uniqueArray(element, index, array) {
  return array.indexOf(element) === index;
}

export function sum(array) {
  return array.reduce((acc, curr) => acc + curr, 0)
}

export function mean(array) {
  return sum(array) / array.length;
}

export function stDev(array) {
  const avg = mean(array);
  return Math.sqrt(array.map(x => Math.pow(x - avg, 2)).reduce((a, b) => a + b, 0) / array.length);
}

export function median(array) {
  array.sort();
  const n = array.length;
  if (n % 2 === 0)
    return mean([array[n / 2 - 1], array[n / 2]]);

  return array[(n - 1) / 2];
}

export function toFilterQuery(input) {
  // validate whether it's a CAS or Name
  const regex = /[0-9]+-[0-9]+-[0-9]+/g;
  const found = input.match(regex);
  if (found == null) { //title
    return `title eq '~~%${input}%' or title_cn eq '~~%${input}%'`;
  }
  return `cas eq '${input}'`;
}

export function getFormValues(formElement) {
  const formValues = {};

  const inputElements = formElement.querySelectorAll('input[name]');
  inputElements.forEach((input) => {
      if (input.type !== 'submit' && input.type !== 'reset') {
          formValues[input.name] = input.value;
      }
  });

  const selectElements = formElement.querySelectorAll('select[name]');
  selectElements.forEach((select) => {
      formValues[select.name] = select.value;
  });

  const textareaElements = formElement.querySelectorAll('textarea[name]');
  textareaElements.forEach((textarea) => {
      formValues[textarea.name] = textarea.value;
  });

  return formValues;
}