const proModel=require('../model/product');

function SaveProduct(req,res){
    const bodyData=req.body;
    let ins=new proModel(bodyData);
     console.log(bodyData)
    ins.save((err)=>{
         if(err) res.send("Something went wrong or Already exists")
         else {
             res.write(`<script>alert("Product Add Successfully")</script>;<script>location.assign("/home")</script>`)
         }
    })
}
async function getProductById(req,res){
    let proId=req.params.id;
    let product=await proModel.findById(proId);
    if(!product){
       res.status(404).send("Product with id not found");
    }

    else{
        res.render("editproduct",{
            prodata:product
        });
        
    }
   

    
}
function getAllProduct(req,res){
    proModel.find({},(err,data)=>{
        if(err) { res.send("Something went wrong")}
        else {
            res.render('home',{data:data.map(data=>data.toJSON())})
        }
    })
}
function deleteProduct(req,res){
     let pid=req.params.id;
     proModel.deleteOne({_id:pid},(err)=>{
        if(err){ res.send("Something wrong")}
        else {
            res.write(`<script>alert("Product deleted successfully")</script>;<script>location.assign("/home")</script>`)
        }
     })
}
function updateProduct(req,res){
    let pid=req.params.id;
    let formData=req.body;
    console.log(pid)
    console.log(formData)
    proModel.updateOne({_id:pid},{$set:formData},(err)=>{
        if(err){ console.log("Error")}
        else {
            res.write(`<script>alert("Product updated successfully")</script>;<script>location.assign("/home")</script>`)
        }
    })
}

function alert1(res,res){

    res.write("<script>alert(1)</script>")
}



module.exports={SaveProduct,getProductById,getAllProduct,deleteProduct,updateProduct,alert1};