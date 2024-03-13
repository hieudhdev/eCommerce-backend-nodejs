const amqp = require('amqplib');

const message = 'Hello rabbitmq'
const channelName = 'test_rabbitmq'

const runProducer = async () => {
    try {
        const connect = await amqp.connect('amqp://guest:guest@localhost')
        const channel = await connect.createChannel()

        await channel.assertQueue(channelName, {
            durable: true,
        })

        //send messages to Comsumer channel
        channel.sendToQueue(channelName, Buffer.from(message))
        console.log(`message send::`, message)

    } catch (err) {
        console.error(err)
    }
}

runProducer().catch(err => {console.error(err)});