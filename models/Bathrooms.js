const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bathroomSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Bathroom name is Required"
    },
    notes: {
        type: String,
        trim: true,
    },
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    }
});

const Bathrooms = mongoose.model("Bathrooms", bathroomSchema);
module.exports = Bathrooms;