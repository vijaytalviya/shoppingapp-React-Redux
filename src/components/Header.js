import { useState } from "react";
import Navbar from "./Navbar";
import Menu from "./Menu";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
};

export default Header;
