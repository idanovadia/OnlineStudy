import * as amqp from 'amqplib/callback_api.js';

const url = 'amqp://rabbitmq:5672';
const RABBITMQ_QUEUE = 'user_service_Q';

export class RABBITMQ {
    
    constructor () {
        this.connection = null
        this.channel = null
        this.connect()
    }

    connect = async() => {

        amqp.connect(url,async(error0,connection) => {
            console.log("connection");
            if(error0) {
                console.log("error0");
                throw error0
            }
            this.connection = connection;
            this.connection.createChannel(async(error1,channel) => {
                console.log(channel);
                if(error1) throw error1;
                process.on("beforeExit", () => {
                    console.log("closing");
                    if(this.connection) this.connection.close();
                })
                this.channel = channel;
                // this.channel.assertQueue(RABBITMQ_QUEUE,{durable: false});
            });
        });
    }
    
    sendToQueue = async(data) => {
        console.log("sendToQueue");
        return await this.channel.sendToQueue(RABBITMQ_QUEUE,Buffer.from(JSON.stringify(data)));
    }
}