const asyncHandler = (requestHandler) => {
    return async (req, res, next) => {
        try {
            await requestHandler(req, res, next);
        }
        catch (error) {
            return res.status(error.code || 500).json({
                success: false,
                message: error.message || "Something went wrong"
            });

            // next(error);
        }
    }
}

export default asyncHandler;