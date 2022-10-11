import { db } from "./hello";

export default function addDb(req, res) {
  if (req.method !== "POST") {
    res.status(500).json({ error: "unhandled method" });
    return;
  }
  const newData = { ...req.body };
  const products = db.get("products");
  const lastProduct = products[products.length - 1];
  newData.id = +lastProduct.id + 1 + "";
  products.push(newData);
  db.set("products", products);
  res.status(200).json(newData);
}
