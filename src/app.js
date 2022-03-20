import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import ProductsRoutes from './routes/productsRoutes';
import BrandsRoutes from './routes/brandsRoutes';
import UserRoutes from './routes/userRoutes';

const app = express();

//Port settings
app.set('port',process.env.PORT || 8000);

//Middlewares used
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Basic routes
app.get('/', (req,res)=>{
    res.json({message: 'welcome to webshop.example.backend'})
})

app.use('/api/brands',BrandsRoutes); //Goes to brands
app.use('/api/products',ProductsRoutes); //Goes to products
app.use('/api/users',UserRoutes); //Goes to users

export default app;