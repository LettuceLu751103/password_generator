
const express = require('express')

const app = express()

const port = 3000

const exphbs = require('express-handlebars')

app.use(express.static('public'))


// 配置靜態文件目錄
app.use(express.static('public'))

// 配置網頁模板區域
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')



app.get('/', (req, res) => {

  // console.log('get request at /')
  res.render('index')
})


app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`)
})