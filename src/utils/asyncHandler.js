const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        try {
            requestHandler(req, res, next);
        }
        catch (error) {
            // res.status(error.code || 500).json({
            //     success: false,
            //     message: error.message || "Something went wrong"
            // });

            next(error);
        }
    }
}