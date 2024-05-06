const express = require('express')
const bodyParser = require('body-parser')
const { getData, insertOne, deleteOne, deleteMany, insertMany, updateOne, updateMany } = require('./src/lib/mongodb')

const app = express()
const port = 8000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/mongodb/getData', (req, res) => {
  const {col,db,ds,key,url} = req.body
  getData({
    col:col,
    db:db,
    ds:ds,
    key:key,
    url:url,
  }).then((response) => {
    res.send(response)
  })
})

app.post('/mongodb/insertOne', (req, res) => {
  const {col,db,ds,key,url,val} = req.body
  insertOne({
    col:col,
    db:db,
    ds:ds,
    key:key,
    url:url,
  },val).then((response) => {
    res.send(response)
  })
})

app.post('/mongodb/insertMany', (req, res) => {
  const { col, db, ds, key, url, val } = req.body
  insertMany({
    col: col,
    db: db,
    ds: ds,
    key: key,
    url: url,
  }, val).then((response) => {
    res.send(response)
  })
})

app.post('/mongodb/deleteOne', (req, res) => {
  const { col, db, ds, key, url, val } = req.body
  deleteOne({
    col: col,
    db: db,
    ds: ds,
    key: key,
    url: url,
  }, val).then((response) => {
    res.send(response)
  })
})

app.post('/mongodb/deleteMany', (req, res) => {
  const { col, db, ds, key, url, val } = req.body
  deleteMany({
    col: col,
    db: db,
    ds: ds,
    key: key,
    url: url,
  }, val).then((response) => {
    res.send(response)
  })
})

app.post('/mongodb/updateMany', (req, res) => {
  const { col, db, ds, key, url, val,fil } = req.body
  updateMany({
    col: col,
    db: db,
    ds: ds,
    key: key,
    url: url,
  }, val,fil).then((response) => {
    res.send(response)
  })
})

app.post('/mongodb/updateOne', (req, res) => {
  const { col, db, ds, key, url, val, fil } = req.body
  updateOne({
    col: col,
    db: db,
    ds: ds,
    key: key,
    url: url,
  }, val, fil).then((response) => {
    res.send(response)
  })
})

app.get('/',(req,res) => {
  res.send("Welcome")
})

app.listen(port, (req, res) => {
    console.log('Server is running on port '+ port)
  console.log(new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes() + ':' + new Date(Date.now()).getSeconds())
})