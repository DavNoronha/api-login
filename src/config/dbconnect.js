import mongoose from "mongoose";

mongoose.connect('mongodb+srv://login:login123@users.pqvry.mongodb.net/api-login')

const db = mongoose.connection;

export default db