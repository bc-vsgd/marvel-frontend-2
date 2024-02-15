import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/marvel/characters">Characters</Link>
        <Link to="/marvel/comics">Comics</Link>
        <Link to="/marvel/favorites">Favorites</Link>
      </nav>
    </header>
  );
};

export default Header;
