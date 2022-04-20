import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/topics/coding">Coding</Link>
      <Link to="/topics/football">Football</Link>
      <Link to="/topics/cooking">Cooking</Link>
    </nav>
  );
};

export default Nav;
