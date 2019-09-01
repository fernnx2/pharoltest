import Image from '../models/image'

exports.index =(req,res)=>{
   Image.find({},(err,image)=>{
        if(err) throw err;
        res.json(image);
    })
}