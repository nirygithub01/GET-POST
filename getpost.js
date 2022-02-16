const express = require("express");
const api = require("./apidata");

const app = express();

app.use(express.json())

app.listen(3000, () => {
    console.log("server open on this port");
});

/**app.get('/', (req, res) => {
    res.json(api)
});*/

app.get('/', (req, res) => {
    res.send({message: "Api is working"});
});

app.get('/apidata', (req, res) => {
    res.send(api);
});
app.post('/apidata', (req, res) => {

if(req.body.updated){
    res.status(400);
    return res.json({error: "updated is required"});
}

    const attributes= {
        title: req.body.title,
        body_attri: req.body.body_attri,
        created: req.body.created,
        updated: req.body.updated
      }

       api.post(attributes);
       res.json(attributes);

    //console.log(req.body);
    //res.send("api post request");
})