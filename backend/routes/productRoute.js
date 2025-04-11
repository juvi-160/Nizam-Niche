import express from 'express';
import {
    addProduct,
    allProducts,
    deleteProduct,
    updateProduct,
    getProductById,
} from '../controllers/productController.js';
import upload from '../middleware/multer.js';
import isAdmin from '../middleware/adminAuth.js';

const productRouter = express.Router();

productRouter.post('/add',isAdmin, upload.fields([{name:'img1', maxCount:1}, {name:'img2', maxCount:1},{name:'img3', maxCount:1}, {name:'img4', maxCount:1}]) ,addProduct);
productRouter.get('/all', allProducts);
productRouter.delete('/delete/:id',isAdmin, deleteProduct);
productRouter.put('/update/:id', isAdmin, updateProduct);
productRouter.get('/:id', getProductById);

export default productRouter;