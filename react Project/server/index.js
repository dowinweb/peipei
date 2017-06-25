/**
 * Created by dongwei on 2017/6/25.
 */
import express from 'express';

let app = express();

app.get('/*',(req,res) => {
    res.send('hello world');
});


app.listen(3000,()=> console.log('Running on localhost:3000'));