// const mongoose = require("mongoose");

// const connectToDatabase = () => {
//   // Connects to the MongoDB database
//   mongoose.connect("mongodb://localhost:27017", () => {
//     console.log("Connected to the database");
//   });
// };

// module.exports = connectToDatabase;

//---------------------------

// const mongoose = require("mongoose");

// const connectToDatabase = async () => {
//   try {
//     // Connects to the MongoDB database
//     await mongoose.connect("mongodb://localhost:27017", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });
//     console.log("Connected to the database");
//   } catch (error) {
//     console.error("Error connecting to the database", error);
//   }
// };

// module.exports = connectToDatabase;

//-------------------------
const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    // Connects to the MongoDB database
    await mongoose.connect("mongodb://localhost:27017/NoteApp");
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database", error);
  }
};

module.exports = connectToDatabase;
