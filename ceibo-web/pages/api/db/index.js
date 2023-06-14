import { dbConnect } from "../../../config";
import User from "../../../models/User";

dbConnect();

const serviceGetAllUsers = async () => {
  try {
    const allUsers = await User.find({});
    return allUsers;
  } catch (err) {
    console.error(err);
  }
};

const serviceResgisterUser = async (body) => {
  const { mail } = body;
  try {
    let user = await User.findOne({ mail });
    if (user) {
      return { message: "alredy registered" };
    } else {
      const newUser = await User.create(body);
      return newUser;
    }
  } catch (err) {
    console.error(err);
  }
};

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      const users = await serviceGetAllUsers();
      res.status(200).json(users);
      break;
    case "POST":
      const user = await serviceResgisterUser(req.body);
      res.status(201).json(user);
      break;
    default:
      res.status(400).json({msg: "method not suported"});
      break;
  }
}
