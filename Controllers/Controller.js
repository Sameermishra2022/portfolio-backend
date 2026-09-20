const Contact = require("../Models/Model.js"); // Path exact bilkul sahi hai

// Contact Form Submit Handler
exports.submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    console.log("Received Form Data:", req.body);

    // 1. Validation check
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: "Sabhi fields (name, email, message) fill karein!" 
      });
    }

    // 2. Naya document instance create karein
    const newContact = new Contact({
      name,
      email,
      message
    });

    // 3. Database me actual save operation (await ZARURI hai)
    await newContact.save();

    console.log("Data successfully saved to MongoDB Atlas!");

    return res.status(201).json({
      success: true,
      message: "Aapka message successfully submit ho gaya hai!"
    });

  } catch (error) {
    console.error("Database Save Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error! Data save nahi ho paya.",
      error: error.message
    });
  }
};