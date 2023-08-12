document.getElementById("sendbtn").addEventListener("click", () => {
  addqs();
});

document.getElementById("userprompt").onkeydown = function (event) {
  if (event.key === "Enter") {
    addqs();
  }
};

function addqs() {
  var userprompt = document.getElementById("userprompt").value;

  if (userprompt === "") {
    console.log("Input is empty.");
  } else if (/^\s*$/.test(userprompt)) {
    console.log("Input contains only whitespace characters.");
  } else {
    console.log("Input has a value:", userprompt);
    console.log("yes");
    document
      .getElementById("msgarea")
      .appendChild(
        Object.assign(document.createElement("div"), {
          className: "usermsg",
          textContent: userprompt,
        })
      );

    document.getElementById("userprompt").value = "";

    // Call the chatbot function with the user's prompt
    chatWithBot(userprompt);
    document.getElementById("msgarea").scrollTop = document.getElementById("msgarea").scrollHeight;
  }
}

const apiKey = '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'; // Replace with your OpenAI API key
const model = "gpt-3.5-turbo"; // Change this to your desired model, if needed

async function chatWithBot(userInput) {
  try {
    // Prepare the input messages for the chatbot
    const messages = [
      { role: "system", content: "you are agni, a chatbot to assist solely on questions related to fire ecology. provide very short responses. 2-3 lines. very short lines. you are to say NOTHING except fire ecology. NOTHING. if asked something else, say you cant assist on that. use a little emojis." },
      { role: "user", content: userInput },
    ];

    const temperature = 0;

    // Make the API call to OpenAI
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages,
        temperature,
      }),
    });

    if (!response.ok) {
      console.error("Failed to get chatbot response.");
      return;
    }

    const data = await response.json();
    const botReply = data.choices[0].message.content;

    console.log("Bot's reply:", botReply);

    // Append the bot's reply to the message area
    document.getElementById("msgarea").appendChild(Object.assign(document.createElement("div"), 
    {
          className: "botmsg",
          textContent: botReply,
        })

      );
  } catch (error) {
    console.error("Error while interacting with the chatbot:", error);
  }
  document.getElementById("msgarea").scrollTop = document.getElementById("msgarea").scrollHeight;
}