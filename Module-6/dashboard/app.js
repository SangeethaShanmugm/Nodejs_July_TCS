import express from 'express';
const MongoClient = require('mongodb').MongoClient;
import bodyParser from 'body-parser';
const port = 8900;
const app = express();
let db;
const mongourl = 'mongodb://127.0.0.1:27017/'
const col_name = 'userlist';

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// Get Data from datbase and display on index
app.get('/', (req, res) => {
    db.collection(col_name).find().toArray((err, result) => {
        if (err) throw err;
        res.render('index.ejs', { data: result })
    })
})

// Post data from ui
app.post('/addData', (req, res) => {
    db.collection(col_name)
        // In Req.body we will recive the data
        // from form.
        .insert(req.body, (err, result) => {
            if (err) throw err;
            console.log('data.inserted');
        })
    res.redirect('/');
})

// Delete Selected User
app.delete('/delete_user', (req, res) => {
    db.collection(col_name).findOneAndDelete({
        "name": req.body.name
    }, (err, result) => {
        if (err) return res.send(500, err)
        res.send({ message: 'success' })
    })
})

// Find user by name
app.post('/find_by_name', (req, res) => {
    let name = req.body.name;
    db.collection(col_name)
        .find({ name: name })
        .toArray((err, result) => {
            if (err) throw err;
            res.send(result)
        })
});

// Update User
app.put('/update_user', (req, res) => {
    db.collection(col_name)
        .findOneAndUpdate({ "name": req.body.name }, {
            $set: {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone
            }
        }, {
            upsert: true
        }, (err, result) => {
            if (err) return res.send(err);
            res.send(result)
        })
})

// Opening Add User page
app.get('/addUser', (req, res) => {
    res.render('admin')
})

MongoClient.connect(mongourl, (err, client) => {
    if (err) throw err;
    db = client.db('nodejs_tcs1')
    app.listen(port, () => {
        console.log(`Server running on port ${port}`)
    })
})