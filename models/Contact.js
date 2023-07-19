import mongoose from "mongoose";

let Contact;
try {
  Contact = mongoose.model("Contact");
} catch (error) {
  const contactSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: false,
    },
    subject: {
      type: String,
      required: true,
      unique: false,
    },
    message: {
      type: String,
      required: true,
      unique: false,
    },
  });

  Contact = mongoose.model("Contact", contactSchema);
}

export default Contact;
