import {config} from 'dotenv';
config();

//Enviroment variable to get into the DB, not used now
export default {
    mongodbURL: process.env.MONGODB_URI || 'mongodb+srv://D-M-Gonzalez:KA82lk-27202@webshopexampledb.dibqv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
}