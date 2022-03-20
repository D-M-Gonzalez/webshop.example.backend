import User from "../../models/user";
import UserMessage from "../../messages/userMessages";

//Controller used to create a new user
export const createUser = async (req, res) => {
  const response = new UserMessage("create");
  if (!req.body.user_name) {
    response.setStatusMessage(406);
  }
  try {
    const checkRepeated = await User.exists({ user_name: req.body.user_name });
    if (!checkRepeated) { //doesn't allow repeated usernames
      const newUser = new User({
        user_name: req.body.user_name,
        password: req.body.password,
      });
      const userSaved = await newUser.save();
      response.setStatusMessage(200);
      response.setData(userSaved);
    } else {
      response.setStatusMessage(409);
    }
  } catch (error) {
    response.setStatusMessage(500);
  }
  res.json(response); //returns the entire object with the stored status and data
};
