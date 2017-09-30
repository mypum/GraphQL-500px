export default (req, res) => {
  return res.status(404).send({ error: 'resource not found.' })
}
