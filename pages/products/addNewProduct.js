import { useState } from "react";
import Link from "next/link";
export default function AddNewProduct() {
  const [inp1, setInp1] = useState("");
  const [inp2, setInp2] = useState("");
  const onChange1 = (e) => {
    setInp1(e.target.value);
  };
  const onChange2 = (e) => {
    setInp2(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetch("/api/addDb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: inp1,
          price: inp2,
        }),
      }).then((r) => r.json());
      console.log(data);
    } catch (error) {
      console.log("error >> ", error);
    }
  };
  return (
    <div>
      <br />
      <Link href="/products">
        <a>Products </a>
      </Link>
      <br />
      <br />
      <hr />
      <form onSubmit={onSubmit}>
        name : <input type="text" onChange={onChange1} />
        <br></br>
        <br></br>
        price : <input type="text" onChange={onChange2} />
        <br></br>
        <br></br>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
