const Contact = require("../Models/Model.js");

// Contact Form Submit Handler
exports.submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    console.log("Received Form Data:", req.body);

    // 1. Validation check
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: "All fields (name, email, message) are required!" 
      });
    }

    // 2. Create new document instance
    const newContact = new Contact({
      name,
      email,
      message
    });

    // 3. Save to database
    await newContact.save();

    console.log("Data successfully saved to MongoDB Atlas!");

    return res.status(201).json({
      success: true,
      message: "Your message has been submitted successfully!"
    });

  } catch (error) {
    console.error("Database Save Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error! Unable to send your message.",
      error: error.message
    });
  }
};