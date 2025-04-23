const userBookedVilla = require('../models/userBookedVilla-model');


const userBookedVillaApi = async (req, res) => {
    const {
        name,
        email,
        phone,
        checkIn,
        checkOut,
        guests,
        villaType,
        guestsNumb
    } = req.body;
    try {
        const userBookedVillaData = await userBookedVilla.create({
            name,
            email,
            phone,
            checkIn,
            checkOut,
            guests,
            villaType,
            guestsNumb
        });
        await userBookedVillaData.save();
        console.log("User booked villa data saved:", userBookedVillaData);
        return res.status(201).json({ msg: "Booking successful", data: userBookedVillaData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

const userBookedVillaGetApi = async (req, res) => {
    try {
        const response = await userBookedVilla.find()
        if (!response) {
            res.status(404).json({ msg: "No data found" })
            return
        }
        res.status(200).json({ msg: response })
    } catch (error) {
        console.log(`userBookedVilla : ${error}`)
    }
}
const userBookedVillaDeleteApi = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await userBookedVilla.findByIdAndDelete(id)
        if (!response) {
            res.status(404).json({ msg: "No data found" })
            return
        }
        res.status(200).json({ msg: "Deleted successfully" })
    } catch (error) {
        console.log(`userBookedVilla : ${error}`)
    }
}
const getBookingsPerMonth = async (req, res) => {
    try {
      const result = await userBookedVilla.aggregate([
        {
          $group: {
            _id: { month: { $month: "$createdAt" }, year: { $year: "$createdAt" } },
            count: { $sum: 1 }
          }
        },
        { $sort: { "_id.year": 1, "_id.month": 1 } }
      ]);
  
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Internal server error" });
    }
  };
  
const userBookedVillaUpdateApi = async (req, res) => {
    const { id } = req.params;
    const { name, email, phone, checkIn, checkOut, guests, villaType,guestsNumb } = req.body;
    try {
        const response = await userBookedVilla.findByIdAndUpdate(id, {
            name,
            email,
            phone,
            checkIn,
            checkOut,
            guests,
            villaType,
            guestsNumb
        }, { new: true })
        if (!response) {
            res.status(404).json({ msg: "No data found" })
            return
        }
        res.status(200).json({ msg: "Updated successfully", data: response })
    } catch (error) {
        console.log(`userBookedVilla : ${error}`)
    }
}
module.exports = { userBookedVillaApi, userBookedVillaGetApi, userBookedVillaDeleteApi, userBookedVillaUpdateApi,getBookingsPerMonth };
