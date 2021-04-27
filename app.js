
const bodyParser = require('body-parser')
const express = require('express')

const app = express()

const port = 3000

const exphbs = require('express-handlebars')
const generate_password = require('./generate_password')



app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

// 配置靜態文件目錄
app.use(express.static('public'))

// 配置網頁模板區域
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')



app.get('/', (req, res) => {

  res.render('index')
})

app.post('/', (req, res) => {
  console.log('req.body : ', req.body)
  let pwd = generate_password(req.body)
  console.log(' generate pwd : ', pwd)
  res.render('index', { password: pwd })
})

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`)
})