const messages = document.getElementById("messages");
const textbox = document.getElementById("textbox");
const sendBtn = document.getElementById("button");

sendBtn.addEventListener("click", (e) => {
  const newMessage = `<li>${textbox.value}</li>`;
  messages.innerHTML += newMessage;
  textbox.value = "";
});
