const getPage = (currentPage, currentLimit) => {
  const page = currentPage || 1;
  const limit = currentLimit || 20;
  return Math.max(page * limit - limit, 0);
};

module.exports = {
  getPage,
};
