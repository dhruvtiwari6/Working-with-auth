const { user } = require('../model/user.model.js');
const { ApiError } = require('../utils/ApiError.js');
const { ApiResponse } = require('../utils/ApiResponse.js');

const userLogin = async (req, res, next) => {
    try {
        const {firstname, lastname} = req.body;
        console.log("req.body" , req.body);
        
        if (!firstname || !lastname) {
            throw new ApiError(400, 'All fields are required');
        }

        const newUser = await user.create({ firstname, lastname });

        return res.status(200).json(new ApiResponse(200, newUser, 'User logged in successfully'));
    } catch (error) {
        next(new ApiError(400, 'Unable to log in. Please try again later.'));
    }
}

module.exports = { userLogin };
