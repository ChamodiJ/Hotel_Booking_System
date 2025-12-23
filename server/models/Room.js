import mongoose from "mongoose";

const roomSchema = new mongoose.Schema( {
  hotel:{ type : String, ref : "Hotel", required :true },
   roomType:{ type : String, required :true },
      contact:{ type : String, required :true },
     pricePerNight:{ type : Number, required :true, ref: "User"},
   aminities:{ type : Array, required :true},
  images:[{ type :String}],
  isAvailable : { type : Boolean, default :true },
}, {timestamps : true}
);

const Room = mongoose.model("Room", roomSchema);

export default Room;