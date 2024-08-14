const OpenAI = require('openai');

const openai = new OpenAI({
    dangerouslyAllowBrowser: true,
    apiKey: "replace your api key"
});

export async function sendMessageToOpenAI(msg) {
    const chatCompletion = await openai.chat.completions.create({
        model: "davinci-002",
        messages: [{
            "role": "user",
            "content": msg
        }],
        max_tokens: 30,
    });
    console.log(chatCompletion.choices[0].text);
}