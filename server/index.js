const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI;
const dotenv = require('dotenv');
dotenv.config()

const express = require('express')
const cors = require('cors');

const app = express()
const port = 8000


const configuration = new Configuration({
    apiKey: process.env.API_KEY
});
const openai = new OpenAIApi(configuration);

// Add the CORS headers to allow requests from https://www.wlliu.com
app.use((req, res, next) => {
    const allowedOrigins = ['https://www.wlliu.com', 'https://riverai.wlliu.com'];
    const origin = req.headers.origin;

    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.get('/', async (req, res) => {
    res.json({
        message: 'Hello from William, Server is running!'
    })
})


app.post('/', async (req, res) => {
    try {
        const prompt = req.body.prompt;
        // console.log("Here is the prompt", prompt)
        // console.log("Here is the ai", openai)
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${prompt}`,
            max_tokens: 3500,
            temperature: 0.9,
        });
        // console.log(response.data.choices[0].text)
        res.status(200).send({
            ai: response.data.choices[0].text
        })
    } catch (err) {
        // console.log('Error to provide response', err)
        res.status(500).send({ err })
    }
})

app.listen(port, () => console.log(`>>>>listening on port ${port}<<<<`))