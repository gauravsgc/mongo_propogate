import mongoose from "mongoose";
const connectDB=async(url)=>{
    const DB_Options={
        dbName:process.env.DATABASE_NAME
    }
try{
await mongoose.connect(url,DB_Options);
console.log('connection done');

}
catch(error){
    console.log(error);
    
}

}
export default connectDB;