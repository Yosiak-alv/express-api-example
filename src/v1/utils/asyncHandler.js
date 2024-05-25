// Desc: Async handler for express routes
const asyncHandler = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};
  
module.exports = asyncHandler;