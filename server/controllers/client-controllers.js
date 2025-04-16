const client = require("../models/client-model");
const multer = require("multer");

const clientApi = async (req, res) => {
  try {
    const {
      villaName,
      location,
      pricePerNight,
      description,
      checkInTime,
      availableTo,
      amenities,
      checkOutTime,
      status,
      numberOfRooms,
    } = req.body;

    const photoPath = req.file
      ? `/uploads/${req.file.filename.replace(/\\/g, "/")}`
      : null;

    const clientData = await client.create({
      villaName,
      location,
      pricePerNight,
      description,
      availableTo,
      amenities,
      checkInTime,
      numberOfRooms,
      checkOutTime,
      status,
      photo: photoPath,
    });

    console.log("Client data saved:", clientData);
    return res
      .status(201)
      .json({ msg: "New data added successfully", data: clientData });
  } catch (error) {
    console.error("Controller error:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const clientdata = async (req, res) => {
  try {
    const response = await client.find();
    if (!response) {
      return res.status(404).json({ msg: "No data found" });
    }
    res.status(200).json({ msg: response });
  } catch (error) {
    console.log(`Service error: ${error}`);
    res.status(500).json({ msg: "Server Error" });
  }
};

// Multer config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

module.exports = { clientApi, clientdata, upload };
