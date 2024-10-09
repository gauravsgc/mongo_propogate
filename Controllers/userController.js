//all the controller we will define
import userModel from "../Models/User.js";
import Post from "../Models/Post.js";
export default class userController{

    static getsingleData=async(req,res)=>{
// console.log('getting single data');
const username=req.params.username;
// console.log(username);
try{
        
    const data=await userModel.find({username:username});
    res.status(200).send({status:'success',message:'data fetched succesfully',data:data});
}
catch(error){
    res.status(400).send({err:error});
}

    }



    static deleteData=async(req,res)=>{
        // console.log('getting single data');
        const username=req.params.username;
        // console.log(username);
        try{
                
            const data=await userModel.deleteOne({username:username});
            res.status(200).send({status:'success',message:'data deleted succesfully',data:data});
        }
        catch(error){
            res.status(400).send({err:error});
        }
        
            }

    static SaveData=async(req,res)=>{
        // console.log('save data method is running');
        
        // console.log(req.body);
        try{
        const {username,email}=req.body;
        const data=new userModel({
            username:username,
           email:email
        })
        await data.save();
        res.status(201).send({status:'success',message:'data inserted succesfully'});
    }
    catch(error){
        res.status(400).send({err:error});
    }



    }


    static getData=async(req,res)=>{
        // console.log('save data method is running');
        
        // console.log(req.body);
        try{
        
        const data=await userModel.find();
        res.status(200).send({status:'success',message:'data fetched succesfully',data:data});
    }
    catch(error){
        res.status(400).send({err:error});
    }



    }



    static updateData=async(req,res)=>{
        // console.log('save data method is running');
        
        console.log(req.body);
        try{
        const {username,userpass}=req.body;
        // const data=new userModel({
        //     username:username,
        //     userpass:userpass
        // })
        // await data.save();

        const data=await userModel.find({username:username});
// console.log(data);
if(data.length!=0){
        await userModel.updateOne({username:username},{$set:{userpass:userpass}})
        res.status(201).send({status:'success',message:'data updated succesfully'});
}
else{
    res.status(400).send({status:'false',message:'data not found'});
}
    }
    catch(error){
        res.status(400).send({err:error});
    }



    }



// static home=async(req,res)=>{
// try{
//     console.log("working");
    
//     res.send("hello now we are learning node js");
// }
// catch(error){
//     console.log(error);
    
// }
// }

// static about=async(req,res)=>{
//     try{
//         console.log("working");
        
//         res.send("hello now we are learning react js");
//     }
//     catch(error){
//         console.log(error);
        
//     }
//     }


//relationship:----

static SavePostData=async(req,res)=>{
    // console.log('save data method is running');
    
    // console.log(req.body);
    try{
    const {title,postedBy}=req.body;
    console.log(title,postedBy);
    
    const data=new Post({
        title:title,
        postedBy:postedBy,
       
    })
    await data.save();
    res.status(201).send({status:'success',message:'post data inserted succesfully'});
}
catch(error){
    res.status(400).send({err:error});
}
}

static getPostData=async(req,res)=>{
    console.log('fetching');
   
   // console.log(req.body);
   try{
   console.log("hi");
   
   const data=await Post.find().populate('postedBy');
   
   console.log(data,"hello");
   
   res.status(200).send({status:'success',message:'data fetched succesfully',data:data});
}
catch(error){
   res.status(400).send({err:error});
}



}
}

//mvc:
//pagination//upload data:multer//authentication:jwt token
//useffect:-react query[]