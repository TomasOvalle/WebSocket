import { Router } from "express";
import productsManager from "../../data/fs/ProductsManager.fs.js";

const productsRouter = Router();

productsRouter.get("/", async(req, res, next) => {
    try {
        const products = await productsManager.read()
        return res.render("products", { products : products})
    } catch (error) {
        return next(error)
    }
})

productsRouter.get("/:pid", async (req, res, next) => {
    try {
        const { pid } = req.params;
        const one = await productsManager.readOne(pid);
        return res.render("products", { products: one })
    } catch (error) {
        return next(error)
    }
})

export default productsRouter;