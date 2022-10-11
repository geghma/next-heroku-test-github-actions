import Head from "next/head";
import { db } from "../api/hello";
import Link from "next/link";

export default function Products(props) {
  console.log(props);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <br />
      <Link href="/">
        <a>Home </a>
      </Link>
      <Link href="/products/addNewProduct">
        <a
          style={{
            marginLeft: "40px",
            background: "blue",
            color: "white",
            padding: "5px 10px",
            borderRadius: "15px",
          }}
        >
          Add New Product
        </a>
      </Link>
      <br />
      <hr />
      {props.products.map((product) => {
        return (
          <div
            key={product.id}
            style={{
              background: "#d3d3d347",
              maxWidth: "300px",
              borderRadius: "10px",
              textAlign: "center",
              padding: "10px",
              margin: "10px",
              display: "inline-block",
            }}
          >
            <h2>{product.name}</h2>
            <b>{product.price}</b>
            <br />
            <Link href={"/products/" + product.id}>
              <a style={{ fontSize: "40px" }}>↦</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const data = db.get("products");
  console.log(data);
  return {
    props: {
      products: data,
    },
  };
}
