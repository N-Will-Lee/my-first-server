const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const queries = require('./queries');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) =>  {
    queries.listAllStudents().then((data)   =>  {
        res.json({data});
    });
});
app.get('/:id', (req, res) =>    {
    // console.log(req.params)
    queries.getStudentById(req.params.id).then((data) => {
        res.json({data});
    });
});
app.post('/', (req, res) => {
    queries.createStudent(req.body)
    .then((data) => {
        res.json({data});
    });
});
app.put('/', (req,res) =>   {
    res.send('PUT request to homepage');
})
app.delete('/:id', (req, res) => {
    queries.deleteStudentById(req.params.id).then((data) =>    {
        res.json({data});
    });
});

app.listen(port, () =>  {
    console.log(`listening on ${port}`);
});