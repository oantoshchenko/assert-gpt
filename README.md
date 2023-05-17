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

The script will output the following:
```
Should pass: { result: true }
Should fail: {
  result: false,
  reason: 'The number of posts allowed per month is different.'
}
```
