const messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const {text, time} = req.body

        messages.push({
            id,
            text,
            time,
        });
        id++;
        res.status(200).send(messages)
    },

    read: (req, res) => {
        res.status(200).send(messages)
    },

    update: (req, res) => {
        const {id} = req.params
        const {text} = req.body
        let messageIndex = null

        messages.forEach((elem, index) => {
            if (elem.id === id){
                messageIndex = index
            }
        })
        const updatedMessage = {
            id: +id,
            text,
        }

        // const { text } = req.body;
        // const updateID = req.params.id;
        // const messageIndex = messages.findIndex(message => message.id == updateID);
        // let message = messages[messageIndex];
      
        // messages[messageIndex] = {
        //   id: message.id,
        //   text: text || message.text,
        //   time: message.time
        // };

        messages.splice(messageIndex, 1, updatedMessage )
        res.status(200).send(messages)
    },
    delete: (req, res) => {
        let messageIndex2 = null
        messages.forEach((elem, i) => {
            if (elem.id === +req.params.id){
                messageIndex2 = i
            }
        })
        messages.splice(messageIndex2, 1)
        res.status(200).send(messages)

        // const deleteID = req.params.id;    
        // const messageIndex = messages.findIndex(message => message.id == deleteID);
        // messages.splice(messageIndex, 1);
        // res.status(200).send(messages);
    },

}