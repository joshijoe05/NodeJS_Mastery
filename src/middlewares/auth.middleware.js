import asyncHandler from "../utils/asyncHandler.js";
import User from "../models/user.model.js";
import ApiError from "../utils/apiError.js";


export const verifyJWT = asyncHandler(async (req, res, next) => {
    const token = req.cookies?.accessToken || req.header("Authorization").split(" ")[1];

    if (!token) {
        throw new ApiError(401, "Not authorized");
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (!decodedToken) {
        throw new ApiError(401, "Invalid Access Token");
    }

    const user = await User.findById(decodedToken._id).select("-password -refreshToken");
    if (!user) {
        // Next_Video : discuss about frontend
        throw new ApiError(401, "Invalid Access Token");
    }

    req.user = user;
    next();
})