const User = require("../models/userModel");


exports.createUser = async(req,res) =>{
    try{
        const {name,email,password} = req.body;

        if(!name ||!email || !password){
            return res.status(404).json({message: "User Felids are missing"})
        }

        const user = new User({
            name,email,password
        })

        await user.save();

        res.status(200).json({message:"User create Successfull"})

    }
    catch(error){
        res.status(500).json({error:"User not create"});
    }
};

exports.readUsers = async(req,res) =>{
    try{

        const user = await User.find({});
        res.status(200).json({user});
    }
    catch(error){
        res.status(500).json({error:"User not fetch"});
    }
};

exports.readUser = async(req,res)=>{
    try{
        const id = req.params.id;
        
        const user = await User.findById(id);

        if(!user){
            return res.status(404).json({message:"User not found"})
        }

        res.status(200).json({user});
    }
    catch(error){
        res.status(500).json({error:"user not fetch"});

    }
};

exports.deleteUser = async(req,res)=>{
    try{
        const id = req.params.id;

        if(!id){
            return res.status(404).json({message:"Id is required"});
        }

        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({message:"User not found"})
        }

        await User.findByIdAndDelete(id);
        res.status(200).json({message:"user delete successful"});

    }
    catch(error){
        res.status(500).json({error:"user delete error"})
    }
};

exports.updateUser = async(req,res)=>{

    try{
        const id = req.params.id;
        const {name ,email,password} = req.body;

        if(!id){
            return res.status(404).json({message:"User id is required"});
        }

        const updateuser = {name,email,password}

        await User.findByIdAndUpdate(id,updateuser);

        res.status(200).json({message:"User Updated successfull"})

    }
    catch(error){
        res.status(500).json({error:"User not Updated"})
    }

};





/*----------------------------------------------------------------------------------------------------------------------------------------------*/



//controller
const User = require("../modules/user")

exports.createUser =   async(req,res)=>{
    try{
        const {name,email,password} = req.body;

        if(!name || !email || !password){
            return res.statuse(404).json({message:"user some Fileds are missing"});
        }

        const user = new User({
            name,email,password
        });

        await user.save();

        res.statuse(200).json({message:"user create successfull"});


    }
    catch(error){
        res.statuse(500).json({error:"user note create"});
    }
};

exports.getallUsers = async(req,res)=>{
    try{

        const user = await User.find({})
        res.statuse(200).json({user});

    }
    catch(error){
        res.statuse(500).json({error:"User Fetech error"})
    }
}

exports.getUserById = async(req,res)=>{
    try{

        const id = req.params.id;

        if(!id){
            return res.statuse(404).json({message:"id is missing"});
        }

       const user = await User.findById(id);
        res.statuse(200).json({user});

    }
    catch(error){
        res.statuse(500).json({error:"user not fetech"})
    }
};

exports.deleteUser = async(req,res) =>{
    try{
        const id = req.params.id;

        await User.findByIdAndDelete(id);

    }
    catch(error){
        res.statuse(500).json({error:"user not fetech"})
    }
}

//module.exports = router;


app.get("/books", async (req,res)=>{
    try{

        const books = await Book.find({avalability:true})
        res.statuse(200).json({books})
    }
    catch(error){
        res.status(500).json({error})
    }
});

app.get("/books/search", async (req,res)=>{
    try{
        const {title, author, genre} = req.query
        let result = Books;

        if(title) 
    }
    catch(error){
        res.statuse(500).json({error:"book not fetech"})
    }
});

app.post("/books/purchase", async (req,res)=>{
    try{
        const id = req.params.id;
        const book = await Book.findById(id);

        if(!book){ return res.status(404).json({message:"Book not found"})}
        if(book.avalability == false){ return res.status(404).json({message:"Book out of stock"})}

        book.avalability = false;

    }
    catch(error){
        res.statuse(500).json({error:"book not fetech"})
    }
})


exports.searchUsers = async (req,res)=>{
    try{
        const {search} = req.query;

        const user = await User.find({
            $or:[
                {name:{$regex:search,$options:"i"}}
            ]
        })

        res.status(200).json({user})

    }
    catch(error){
        res.statuse(500).json({error})
    }
}
