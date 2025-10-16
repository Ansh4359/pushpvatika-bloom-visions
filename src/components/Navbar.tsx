import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;
  const isHomePage = location.pathname === "/";

  // Handle scroll effect only on home page
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);

  // Determine if navbar should be transparent
  const isTransparent = isHomePage && !scrolled;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent 
          ? 'bg-transparent' 
          : 'bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-md'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div 
              className={`h-10 w-10 rounded-full flex items-center justify-center transition-all group-hover:scale-110 ${
                isTransparent ? 'bg-white/20 backdrop-blur-sm' : 'bg-green-600'
              }`}
            >
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span 
              className={`text-xl font-bold transition-colors ${
                isTransparent ? 'text-white' : 'text-green-600'
              }`}
            >
              PushpLandscaping
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md transition-colors ${
                  isActive(link.path)
                    ? isTransparent 
                      ? "text-white font-semibold" 
                      : "text-green-600 font-semibold"
                    : isTransparent
                      ? "text-white/90 hover:text-white"
                      : "text-gray-600 hover:text-green-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              className={`ml-4 px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105 ${
                isTransparent
                  ? 'bg-white hover:bg-gray-100 text-green-800 shadow-lg'
                  : 'bg-green-600 hover:bg-green-700 text-white shadow-md'
              }`}
            >
              <Link to="/contact">Get Quote</Link>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${isTransparent ? 'text-white' : 'text-gray-900'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isTransparent ? 'text-white' : 'text-gray-900'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`md:hidden py-4 animate-fade-in ${isTransparent ? 'bg-black/20 backdrop-blur-md' : 'bg-white'}`}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-md transition-colors ${
                  isActive(link.path)
                    ? isTransparent
                      ? "text-white font-semibold bg-white/10"
                      : "text-green-600 font-semibold bg-green-50"
                    : isTransparent
                      ? "text-white/90 hover:text-white hover:bg-white/10"
                      : "text-gray-600 hover:text-green-600 hover:bg-gray-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 pt-4">
              <button
                className={`w-full px-6 py-3 rounded-full font-semibold transition-all ${
                  isTransparent
                    ? 'bg-white hover:bg-gray-100 text-green-800'
                    : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Get Quote
                </Link>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
