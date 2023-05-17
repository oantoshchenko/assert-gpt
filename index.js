import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function callOpenAI(prompt) {
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{
            role: "user",
            content: prompt,
        }],
        temperature: 0,
        max_tokens: 150,
    });

    return response.data.choices[0].message.content;
}

async function compareText(expected, actual) {
    const prompt = `Given two pieces of text wrapped in <>, where text a has to describe the same thing as text b.
If it does, return json with a key of "result" and a value of "true".
If it does not, return json with a key of "result" and a value of "false" and a key of "reason" and a value of the reason why it does not match.
a: <${actual}>
b: <${expected}> 
Only return JSON, nothing else.`;
    const responseContent = await callOpenAI(prompt);
    const result = JSON.parse(responseContent);
    return result;
}

// Pass
let expected = "This plan allows you to post 100 posts per month.";
let actual = "Our new amazing plan lets you post hundred posts every month.";
let result = await compareText(expected, actual);
console.log("Should pass:", result);

// Fail
expected = "This plan allows you to post 100 posts per month.";
actual = "Our new amazing plan lets you post hundred and fifty posts every month.";
result = await compareText(expected, actual);
console.log("Should fail:", result);




