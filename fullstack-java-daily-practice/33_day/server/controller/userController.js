import User from "../model/user.js"


export const create = async (req, res) => {
    try {
        // create newuser
        const newUser = new User(req.body);
        // take email from newuser
        const { email } = newUser;

        // check that the email already exist

        const userExitst = await User.findOne({ email })
        if (userExitst) {
            res.status(400).json({ message: "user already exist" })
        }

        const saveData = await newUser.save()
        // res.status(201).json(saveData)
        res.status(201).json({message:"User created Successfully"})

    } catch (error) {
        res.status(500).json({
            errorMessage: error.message
        })
    }
}


export const getAllUsers = async (req, res) => {
    try {

        const userData = await User.find()
        if (!userData || userData.length === 0) {
            return res.status(404).json({
                message: "User data is not found."
            })
        }
        res.status(200).json(userData)

    } catch (error) {
        res.status(500).json({
            errorMessage: error.message
        })
    }
}


export const getUserById = async (req, res) => {

    try {
        const id = req.params.id;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({
                message: "user not found",
            });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            errorMessage: error.message,
        });
    }

}

export const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({
                message: "user not found"
            })
        }
        const updatedUser = await User.findByIdAndUpdate(id, req.body, {
            new: true
        })
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({
            errorMessage: error.message,
        });
    }
}


export const deletUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({
                message: "user not found",
            });
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({ message: "User deleted successfully" })
    } catch (error) {
        res.status(500).json({
            errorMessage: error.message,
        });
    }
}