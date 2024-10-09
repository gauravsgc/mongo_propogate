import express from 'express';
const router=express.Router();
import userController from '../Controllers/userController.js'
// router.get('/',userController.home);
// router.get('/about',userController.about);
router.post('/',userController.SaveData);
router.get('/',userController.getData);
// router.get('/:username',userController.getsingleData);
router.delete('/:username',userController.deleteData);
router.put('/',userController.updateData);
//relationship:--
router.post('/Post',userController.SavePostData);
router.get('/Post',userController.getPostData);
// router.get('/',(req,res)=>{
//     res.send("hello my server starts good morning changes done");
//     // console.log(process.env.PORT);
// })
export default router;
