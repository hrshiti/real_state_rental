const filter = require('../models/filter-model');

const filterApi = async (req, res) => {
    try {
        const { locations, classes, guests, prizes } = req.body;
        const filterData = await filter.create({
            locations,
            classes,
            guests,
            prizes
        });
        
        await filterData.save();
        console.log("Filter data saved:", filterData);
        return res.status(201).json({msg: "new data added successfully" , data: filterData});
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" });
        
    }
}
const filterGetApi = async (req, res) => {
    try {
        const response = await filter.find()
        if(!response){
            res.status(404).json({msg:"no data found"})
            return
        }
        res.status(200).json({msg:response})
    } catch (error) {
        console.log(`filter : ${error}`)
    }
}
module.exports = {filterApi, filterGetApi};