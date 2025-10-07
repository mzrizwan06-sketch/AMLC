function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const userMsg = input.value.trim();
  if (!userMsg) return;

  appendMessage("You", userMsg, "user");
  input.value = "";

  const reply = getBotReply(userMsg);
  setTimeout(() => appendMessage("Bot", reply, "bot"), 500);
}

function appendMessage(sender, message, className) {
  const chatBox = document.getElementById("chat-box");
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", className);
  msgDiv.innerText = `${sender}: ${message}`;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(input) {
  const text = input.toLowerCase();

  if (text.includes("hello") || text.includes("hi")) {
    return "Hello there! 😊";
  }
  if (text.includes("how are you")) {
    return "I’m doing great! How about you?";
  }
  if (text.includes("your name")) {
    return "I'm your friendly chatbot 🤖";
  }
  if (text.includes("bye")) {
    return "Goodbye! Have a nice day!";
  }
  if (text.includes("time")) {
    return "Current time is " + new Date().toLocaleTimeString();
  }
  if (text.includes("date")) {
    return "Today's date is " + new Date().toLocaleDateString();
  }

  return "I'm not sure I understand that. Try asking something else!";
}
