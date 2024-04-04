const getAllBroadcastMsg = (req, res) =>{
    res.status(200).json({Success: true, msg: 'hämta alla meddelanden som skickats till broadcast kanalen'});
};

const createBroadcastMsg = (req, res) =>{
    res.status(200).json({Success: true, msg: 'skapa ett nytt meddelande i broadcast kanalen'});
};

const getChannelList = (req, res) =>{
    res.status(200).json({Success: true, msg: 'hämtar en lista över kanaler'});
};

const getChannelById = (req, res) =>{
    res.status(200).json({Success: true, msg: 'Show all broadcast'});
};

const CreateNewChannel = (req, res) =>{
    res.send("skapar en ny kanal. Kanalens namn ska skickas med.");
};

const CreateMsgByChannelId = (req, res) =>{
    res.send("skapa ett nytt meddelande i en specifik kanal som tidigare har skapats.");
};

const deleteChannelById = (req, res) =>{
    res.send("tar bort en identiferad kanal som tidigare annonserats ut.");
};


export default { getAllBroadcastMsg, createBroadcastMsg, 
                 getChannelList, getChannelById,
                 CreateNewChannel, CreateMsgByChannelId,
                 deleteChannelById   
                }