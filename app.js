const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars')

const app = express()
const port = process.env.PORT || 3000

app.engine('.hbs', exphbs({
    defaultLayout: 'default',
    extname: '.hbs'
}))
app.set('view engine', '.hbs')

app.use(morgan('dev'))
app.use(express.static('public/'))

app.get('/', (req, res) => {
    res.render('home', {title: 'Home Page'})
})

app.use('*', (req, res) => {
    res.render('error', {error: 'Page Not Found!'})
})

app.listen(port, () => {
    console.log('server is running on port ', port)
})
