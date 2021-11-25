// Handle not found errors
const notFound = (req, res, next) => {

  console.log("Request Not Found: ",req);

    res.status(404).json({
      success: false,
      message: 'Requested Resource Not Found (404)'
    }).end();
  };
  
  // Handle internal server errors
  const internalServerError = (err, req, res, next) => {
    console.log("internal server error: ",err);
    res.status(err.status || 500).json({
      message: err.message,
      errors: err
    }).end();
  };
  
  module.exports = {
    notFound,
    internalServerError
  }
  