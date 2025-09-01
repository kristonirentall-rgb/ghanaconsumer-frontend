
import { useState, useEffect } from "react";
import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import { signoutSuccess } from "../redux/user/userSlice";
import logo from "../images/logo.png"; // Import the Image component

/**
 * A responsive header component for the GhanaConsumer MERN application with a logo, search, theme toggle, and user menu.
 * @returns {JSX.Element} The rendered Header component.
 */
export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState("");

  // Sync search term with URL query parameter
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  // Handle sign-out
  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.error(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  // Handle search form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <Navbar className="border-b-2 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      {/* Brand / Logo */}
      <Link
        to="/"
        className="flex items-center gap-2 text-lg sm:text-xl font-bold dark:text-white"
        aria-label="GhanaConsumer Home"
      >
        <img
          src={logo} 
          alt="GhanaConsumer Logo"
        
         className="w-12 h-12 object-contain"
        />
        <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 via-red-500 to-green-500 rounded-lg text-white">
          Ghana Consumer.com
        </span>{" "}
        
      </Link>

      {/* Search */}
      <form onSubmit={handleSubmit} className="hidden lg:flex ml-4">
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-48 lg:w-64"
          aria-label="Search posts"
        />
      </form>
      <Button
        className="w-12 h-10 lg:hidden"
        color="gray"
        pill
        aria-label="Toggle search"
      >
        <AiOutlineSearch />
      </Button>

      {/* Right Side */}
      <div className="flex items-center gap-2 md:order-2">
        {/* Theme Toggle */}
        <Button
          className="w-12 h-10 hidden sm:inline"
          color="gray"
          pill
          onClick={() => dispatch(toggleTheme())}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </Button>

        {/* User Menu */}
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt={`Profile of ${currentUser.username}`}
                img={currentUser.profilePicture}
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">@{currentUser.username}</span>
              <span className="block text-sm font-medium truncate">
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to="/dashboard?tab=profile">
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/sign-in">
            <Button gradientDuoTone="purpleToBlue" outline>
              Sign In
            </Button>
          </Link>
        )}
        <Navbar.Toggle aria-label="Toggle navigation menu" />
      </div>

      {/* Navbar Links */}
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/" aria-label="Home page">
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about" aria-label="About page">
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/affiliates"} as={"div"}>
          <Link to="/affiliates" aria-label="Affiliates page">
            Affiliates
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/sitemap"} as={"div"}>
          <Link to="/sitemap" aria-label="Sitemap page">
            Sitemap
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/diy"} as={"div"}>
          <Link to="/diy" aria-label="DIY page">
            DIY
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/faq"} as={"div"}>
          <Link to="/faq" aria-label="FAQ page">
            FAQ
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/contact"} as={"div"}>
          <Link to="/contact" aria-label="Contact page">
            Contact
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
