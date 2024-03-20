import express from "express";
import { Books } from "../models Books/books.js";
// import { CheckProductValidate } from "../middleware/book.js";
const router = express.Router();
router.post("/books", async (req, res) => {
  //thêm mới
  const product = await new Books(req.body).save();
  res.send({ status: true, data: product });
});
router.get("/books", async (req, res) => {
  // xem
  const response = await Books.find();
  res.send(response);
});
router.put("/books/:id", async (req, res) => {
  // sửa
  const id = req.params.id;
  const body = req.body;
  const response = await Books.findOneAndUpdate({ _id: id }, body, {
    new: true,
  });
  res.send(response);
});
router.delete("/books/:id", async (req, res) => {
  // xóa
  const id = req.params.id;
  const response = await Books.findOneAndDelete({ _id: id });
  res.send(response);
});
export default router;
