import Product from '../models/product.model'

function create (req, callback) {
  let product = new Product(
    {
      name: req.body.name,
      price: req.body.price
    }
  );

  return product.save(callback)
}

function update (req, callback) {
  Product.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body
    },
    callback
  );
}

function get (req, res) {
  return Product.findById(req.params.id, function (err, product) {
    if (!product)
      return res.status(404).json({ message: 'Product not found' });
    res.send(product);
  })
}
export {
  create,
  update,
  get
}