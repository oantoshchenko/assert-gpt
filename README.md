This is a demonstration of how you can use LLMs to do assertions on raw text to compare the intent instead of string equality.
This example uses OpenAIs API, but you can use any LLM that you want.

## How to run
1. Set up [OpenAI API key](https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety)
2. Install the dependencies
```bash
npm install
```
3. Run `index.js`
```bash
node index.js
```

## What it does
The script will output the following:

For input 
```js
let expected = "This plan allows you to post 100 posts per month.";
let actual = "Our new amazing plan lets you post hundred posts every month.";
let result = await compareText(expected, actual);
```
Will output:
```
{ equal: true }
```

For input 
```js
expected = "This plan allows you to post 100 posts per month.";
actual = "Our new amazing plan lets you post hundred and fifty posts every month.";
result = await compareText(expected, actual);
```
Will output:
```
{
  equal: false,
  reason: 'The number of posts allowed per month is different.'
}
```

With the return value being an object, you can easily use it in your test framework of choice. 
You also can create a custom assert and make this approach a first-class citizen in your tests. 