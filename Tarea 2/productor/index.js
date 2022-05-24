const express = require("express");
const cors = require("cors");
const { Kafka } = require('kafkajs')
const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

const kafka = new Kafka({
  brokers: [process.env.kafkaHost]
})

const producer = kafka.producer()
const run = async () => {
  await producer.connect()
}
run().catch(console.error)


app.post('/login', async(req, res) => {
  console.log(req.body)
  console.log(Date.now())
  req.body.hora=Date.now()
  let msg=JSON.stringify(req.body)
  await producer.send({
    topic: 'usuarios-bloqueados',
    messages: [
      { value: msg },
    ],
  })
  res.send('hello world');
})

app.listen(port, () => {
  console.log(`API RUN AT http://localhost:${port}`);
});