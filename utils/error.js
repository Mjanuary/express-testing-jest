const errorHandler = (res, error) => {
  return res.status(400).send({ message: error?.message });
};

module.exports = errorHandler;
