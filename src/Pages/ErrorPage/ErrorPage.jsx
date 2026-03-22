import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <>
      <p>Ann error Occurred</p>
      <Link to={"/"}>Go back HOME</Link>
    </>
  );
}
