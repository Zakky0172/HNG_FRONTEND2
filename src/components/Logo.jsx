import { Link } from "react-router-dom";
import logo from "../assets/tv.svg";

const Logo = ({ color = "800", display }) => {
  return (
    <Link to="/" className="flex gap-6 items-center">
      <img src={logo} alt="Logo" />
      <h2
        className={`text-zinc-${color} text-2xl font-bold leading-normal ${display} sm:inline-block`}
      >
        MovieBox
      </h2>
    </Link>
  );
};

export default Logo;
