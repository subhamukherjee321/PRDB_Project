const errorHandler = (req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.stats(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
  
  next();
};

module.export = errorHandler;