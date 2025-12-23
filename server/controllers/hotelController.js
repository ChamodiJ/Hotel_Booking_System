import Hotel from "../models/Hotel.js";
import hotel from "../models/Hotel.js";
import User from "../models/User.js";

export const registerHotel = async(req,res) => {
    try{
     const {name, address,contat, city} = req.body;
     const owner = req.user._id

     // check if user Already registered
     const hotel = await Hotel.findOne({owner})
     if (hotel){
        return res.json({success : false, message :"Hotel Already Registerd"})
     }

    await Hotel.create({name, address,contat, city, owner});
    await User.findByAndUpdate(owner, {role : "hotelOwner"});
    res.json({success :true ,message :"Hotel Registered Successfullty"})
    }catch (error){
      res.json({success :flase ,message :error.message});
    }
}
