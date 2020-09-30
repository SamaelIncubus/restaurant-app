import express, { json } from 'express';
import morgan from 'morgan';

//Importing routes
import cartRoute from './routes/cart.route';
import clientRoute from './routes/client.route';
import deliverRoute from './routes/deliver.route';
import offerRoute from './routes/offer.route';
import productRoute from './routes/product.route';
import storeRoute from './routes/store.route';
import reportRoute from './routes/report.route';

//Initialization
const app = express();

//middleware
app.use(morgan('dev'));
app.use(json());
var cors = require('cors'); //CORS POLICY
app.use(cors());

//routes
app.use('/api/Carts', cartRoute);
app.use('/api/Clients', clientRoute);
app.use('/api/Delivers', deliverRoute);
app.use('/api/Offers', offerRoute);
app.use('/api/Products', productRoute);
app.use('/api/Stores', storeRoute);
app.use('/api/Report', reportRoute);

export default app;