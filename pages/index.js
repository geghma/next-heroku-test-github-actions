import Head from "next/head";
import Link from "next/link";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/products">
        <a>Products sssssssss</a>
      </Link>
    </div>
  );
}
