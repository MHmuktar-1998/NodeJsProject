const express = require('express');
const router = require('./routers/router.user');

const app = express();
const PORT =4200;



app.use(express.urlencoded({extended : true}));

app.use(router)




app.use((req,res,next)=>{
    res.status(404).json({
        message : 'resorce not found'
    })
})

app.listen(PORT,()=>{
    console.log(`your server is running successfully at http://localhost:${PORT}`);
})