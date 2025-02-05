import { Request, Response } from "express";
import { ProductService } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const result = await ProductService.createProductIntoDB(productData);
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the product",
      error: error.message,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProductFromDB();
    res.status(200).json({
      success: true,
      message: "All product retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "An error occurred while retrieving the products",
      error: error.message,
    });
  }
};

const getSingleProductById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await ProductService.getSingleProductById(productId);
    res.status(200).json({
      success: true,
      message: "Single product retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const productId = req.params.productId;
    const result = await ProductService.updateProductById(productId, product);
    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProductById,
  updateProduct,
};
