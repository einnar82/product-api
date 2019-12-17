import express from 'express';
import {
  createProduct,
  getAProduct,
  getAllProducts,
  updateAProduct,
  deleteAProduct
} from '../controllers/product.controller'
const router = express.Router();

router.post('/', createProduct);
router.get('/:id', getAProduct);
router.get('/', getAllProducts);
router.put('/:id', updateAProduct);
router.delete('/:id', deleteAProduct);

module.exports = router;