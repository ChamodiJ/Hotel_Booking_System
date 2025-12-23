import { Message } from "svix/dist/api/message";

//Api to create a new room for a hotel
export const createRoom =async (req,res)=>{
 try{
   const { roomType,pricePerNight, amenities } = req.body;
   const hotel =await Hotel.findOne({owner : req.auth.userId})
   if(!hotel) return res.json({success : false, Message:"No Hotel found"})
 }catch(error){

 }
}

//Api to get all  rooms
export const getRooms =async (req,res)=>{
    
}

//Api to get all rooms for a specific  hotel
export const getOwnerRooms =async (req,res)=>{
    
}

//Api to toggle availability of a room
export const toggleRoomAvailability =async (req,res)=>{
    
}