import UserModel from '../model/user-schema.js';

export const  getUsers = async (request, response) => {
    try{
       const userData = await UserModel.find();
        response.status(200).json(userData);
    }
    catch(error){
        response.json({message:console.error.message})
    }
}

export const ragsiterUser = async (request, response) => { 
    const userObj =  request.body;
    const userData = await UserModel.find({email:userObj.email});
    //response.status(201).json(userData);
    if(userData.length>0){
        response.status(200).json({message:"user already exist Plz Login"});
    }
    else{
        let newUser = new UserModel(userObj);
        try {
            await newUser.save();
            response.status(201).json(newUser);
        } catch (error) {
            response.json({message:error.message});
        }
    }
}
export const loginUser = async (request,response) => {
    const userObj = request.body;
    // response.json(userObj);
    const userData = await UserModel.findOne({email:userObj.email});
    if (userData) {
        if(userData.password == userObj.password) {

            response.json({message:"Login Sucessfully", user:userData})
        }
        else {
            response.json({message:"password did not match"})
        }
    } else { 
        response.json({message:"User not ragisterd !! plz Ragister"})
    }
}

