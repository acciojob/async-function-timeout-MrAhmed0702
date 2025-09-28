const button = document.getElementById("btn");
const text = document.getElementById("text");
const delay = document.getElementById("delay");
const content = document.getElementById("output");

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function display(message, delayTime) {
  await wait(delayTime);
  content.textContent = message;
}

button.addEventListener('click', () => {
  const message = text.value;
  const delayTime = Number(delay.value);
  content.textContent = "";
  display(message, delayTime);
});
