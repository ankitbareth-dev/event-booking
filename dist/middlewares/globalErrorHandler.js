export const globalErrorHandler = (error, _req, res, _next) => {
    res.status(500).json({
        success: false,
        message: error.message || "Internal Server Error",
    });
};
//# sourceMappingURL=globalErrorHandler.js.map