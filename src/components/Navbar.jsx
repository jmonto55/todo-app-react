import { useState, useRef, useEffect } from "react";
import useOnClickOutside from "../useOnClickOutside.js";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const ref = useRef();
  useOnClickOutside(ref, dropdown, () => setDropdown(false));
  
  return (
    <nav>
        <li>Home</li>
        <li>About</li>
        <li ref={ref}>
            <button onClick={() => setDropdown((prev) => !prev)}>
              Services <span>&#8595;</span>
            </button>
            {dropdown && (
            <ul>
                <li>Design</li>
                <li>Development</li>
            </ul>
            )}
        </li>
    </nav>
  );
};
export default Navbar;