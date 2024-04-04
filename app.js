import express from "express";
import router from "./src/router/router.js";

const app = express();

app.use(express.json());

//mount router
app.use(router);

/**Initialization */
app.listen(5000, async  () =>{
    console.log('Server is live')
});

