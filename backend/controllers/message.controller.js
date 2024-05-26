import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req,res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;    // const id = req.params.id;  (Destructuring)
        const senderId = req.user._id;

        let converstion = await Conversation.findOne({
            participants:{ $all: [senderId, receiverId] },
        });

        if(!converstion){
            converstion = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        const newMessage = new Message({
            senderId,    // senderId:senderId,
            receiverId,  // receiverId:receiverId,
            message      // message:message
        });

        if(newMessage){
            converstion.messages.push(newMessage._id)
        }

        // SOCKET.IO Functionality will go here
        

        // await converstion.save();
        // await newMessage.save();

        // This will Run in Parallel
        await Promise.all([converstion.save(), newMessage.save()]);

        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in message controller: ", error.message);
        res.status(500).json({ error:"Internal Server Error" });
    }
};