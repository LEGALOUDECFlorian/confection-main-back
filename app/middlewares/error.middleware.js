export default (err, __, res, ____) => {
  console.log(err);
  return res.status(err.httpStatus).json({ error: err.message });
};
