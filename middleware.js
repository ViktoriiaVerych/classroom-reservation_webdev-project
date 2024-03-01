// Error handler middleware
import app from "express/lib/router";

app.use((err, req, res, next) => {
    // Log the error internally
    console.error(err);

    // Set the response status code
    const statusCode = err.statusCode || 500; // Defaults to 500 if statusCode not set

    // Send a generic message or a specific message if defined
    res.status(statusCode).json({
        message: err.message || 'An unexpected error occurred on the server.',
    });
});
