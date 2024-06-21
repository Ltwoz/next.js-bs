import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function service() {
  return (
    <>
      <h1>
        <center>Home Page</center>
      </h1>
      <br></br>
      <center>
        <Link href="/">Home</Link> |<Link href="/about">About</Link> |
        <Link href="/service">Service</Link> |
        <Link href="/contact">Contact</Link> |
      </center>
    </>
  );
}
