import { Link } from "react-router-dom";
import { Search } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white shadow-lg relative z-50 border-b-2 border-promokar-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F764e9f5cc4cb4c5fae9e810852d9697a%2F8aeb8b88b3be4b0cab7ee2b72f943358?format=webp&width=800"
                alt="PROMOKAR Logo"
                className="h-12 w-auto group-hover:scale-105 transition-transform duration-200"
              />
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link
              to="/"
              className="text-promokar-navy hover:text-promokar-gold transition-colors duration-300 font-medium text-lg relative group"
            >
              Présentation
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-promokar-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/produits"
              className="text-promokar-navy hover:text-promokar-gold transition-colors duration-300 font-medium text-lg relative group"
            >
              Produits
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-promokar-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <div className="relative group">
              <button className="text-promokar-navy hover:text-promokar-gold transition-colors duration-300 flex items-center font-medium text-lg">
                Revendeurs
                <svg className="ml-2 w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <Link
              to="/contact"
              className="bg-promokar-gold text-white px-6 py-3 rounded-full hover:bg-promokar-primary transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contact
            </Link>
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button className="p-3 text-promokar-navy hover:text-promokar-gold transition-colors duration-300 hover:bg-promokar-gold/10 rounded-full">
              <Search size={22} />
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-3 text-promokar-navy hover:text-promokar-gold transition-colors duration-300 hover:bg-promokar-gold/10 rounded-full">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
