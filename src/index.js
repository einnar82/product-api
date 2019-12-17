import express from 'express'
import users from './routes/users.route';
import products from './routes/products.route';
import bodyParser from 'body-parser';
import connectToDB from './utils/database'
const app = express()
const port = 3000

//connect to database
connectToDB()
//body parse middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//routes
app.get('/', (req, res) => res.json({
  message: 'This is a test message'
}))
app.use('/users', users);
app.use('/products', products);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))