const express = require("express");
const cors = require("cors");
const { Kafka } = require('kafkajs')
//const fs = require("fs");
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

const kafka = new Kafka({
  brokers: [process.env.kafkaHost]
})
let bloqueados={"users-blocked":["hidalgo"]};
app.get("/blocked", async (req, res) => {
  console.log(bloqueados);
  res.send(bloqueados);  
});


const consumer = kafka.consumer({ groupId: 'ke'})
let registro=[];
const consumerStart = async () => {
  await consumer.connect({groupId:'ke'})
  await consumer.subscribe({ topic: 'usuarios-bloqueados', fromBeginning: true })
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(
        JSON.parse(`${message.value}`)
        )
      let msg=JSON.parse(`${message.value}`)
      
      registro.push(msg)

      console.log(registro[0].user)
      filtro=registro.filter(element => element.user==msg["user"])
      console.log(filtro)
      if(bloqueados["users-blocked"].includes(msg["user"])==false){
        if(filtro.length>=5)
        {
          if(((filtro[filtro.length-1].hora)-(filtro[filtro.length-5].hora))<60000)
          {
            bloqueados["users-blocked"].push(msg["user"])
            /*
            fs.writeFile("./usuarios-bloqueados.json", msg["user"], err => {
              if (err) console.log("Error writing file:", err);
            });
            */
          }
        }
      } 
    },
  })
}
consumerStart().catch(console.error)

app.listen(port, () => {
  console.log(`API RUN AT http://localhost:${port}`);
});
