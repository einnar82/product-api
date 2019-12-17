import Product from '../models/product.model'
import {
  create,
  update,
  get as getSpecificProduct
} from "../repositories/product.repository"
import { get } from 'mongoose';

function createProduct (req, res) {
  return create(req, function (err) {
    if (err) {
      return res.json({ message: err });
    }
    res.send('Product Created successfully')
  });
}


function getAProduct (req, res) {
  return getSpecificProduct(req, res)
}

function getAllProducts (req, res) {
  Product.find({}, function (err, product) {
    res.send(product);
  });
}

function updateAProduct (req, res, next) {
  return update(req, function (err, product, next) {
    if (err) return res.json({ message: err });
    res.send('Product updated.');
  });
}


function deleteAProduct (req, res, next) {
  Product.findByIdAndRemove(req.params.id, function (err) {
    if (err) return res.json({ message: err });
    res.send('Deleted successfully!');
  })
}


export {
  createProduct,
  getAProduct,
  getAllProducts,
  updateAProduct,
  deleteAProduct
}