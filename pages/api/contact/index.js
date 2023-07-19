import { saveNewContact } from "@/helpers/mongo-utils";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, subject, message } = req.body;
    const contact = {
      email: email,
      subject: subject,
      message: message,
    };
    await saveNewContact(contact);
  }
}
export default handler;
