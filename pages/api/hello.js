// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import JSONdb from "simple-json-db";
import path from "path";
console.log(path.resolve("../public", "_myDataBase.json"));
export const db = new JSONdb(path.resolve("./public", "_myDataBase.json"));

function InitDb() {
  const products = db.get("products");
  if (!products) {
    db.set("products", [
      {
        id: "1",
        name: "product 1",
        price: 10,
      },
      {
        id: "2",
        name: "product 2",
        price: 20,
      },
      {
        id: "3",
        name: "product 3",
        price: 30,
      },
    ]);
  }
}
InitDb();
export default function hello(req, res) {
  res.status(200).json({ name: "John Doe" });
}
