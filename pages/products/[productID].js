import Head from "next/head";
import { db } from "../api/hello";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Product(props) {
  const product = props.product;

  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  console.log("props", props);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <a href={"/products"}>Go to Products Page</a> */}
      <div>
        <Link href="/products">
          <a>Go to Products Page</a>
        </Link>
      </div>

      <div>
        <h2>Name: {product.name}</h2>
        <b>Price: {product.price}</b>
        <br />
        <b>ID: {product.id}</b>
      </div>
    </div>
  );
}
export async function getStaticPaths() {
  const products = db.get("products");
  console.log("products", products);
  const paths = products.map((product) => ({
    params: { productID: product.id + "" },
  }));
  console.log("paths", paths);
  return {
    paths: paths,
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const productID = context.params.productID;
  const data = db.get("products").find((product) => product.id === productID);
  console.log(context);
  console.log("data", data);
  return {
    props: {
      product: data,
    },
  };
}
