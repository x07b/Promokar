import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Marine() {
  const marineProducts = [
    {
      id: "outboard-tech-4t-10w30",
      name: "OUTBOARD TECH 4T 10W30",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&q=80",
      description: "Huile moteur hors-bord 4 temps"
    },
    {
      id: "grease-marine-tech",
      name: "GREASE MARINE TECH",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&q=80",
      description: "Graisse marine résistante à l'eau"
    },
    {
      id: "outboard-2t-synthetic",
      name: "OUTBOARD 2T SYNTHETIC",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&q=80",
      description: "Huile moteur hors-bord 2 temps"
    },
    {
      id: "inboard-tech-4t-15w40",
      name: "INBOARD TECH 4T 15W40",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&q=80",
      description: "Huile moteur in-bord diesel"
    },
    {
      id: "gear-oil-80w90-marine",
      name: "GEAR OIL 80W90 MARINE",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&q=80",
      description: "Huile transmission marine"
    },
    {
      id: "hydraulic-fluid-marine",
      name: "HYDRAULIC FLUID MARINE",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&q=80",
      description: "Fluide hydraulique marine"
    },
    {
      id: "fuel-stabilizer-marine",
      name: "FUEL STABILIZER MARINE",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&q=80",
      description: "Stabilisant carburant marine"
    },
    {
      id: "anti-corrosion-marine",
      name: "ANTI CORROSION MARINE",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&q=80",
      description: "Protection anticorrosion marine"
    },
    {
      id: "engine-fogging-oil",
      name: "ENGINE FOGGING OIL",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&q=80",
      description: "Huile protection hivernage"
    }
  ];

  const categories = [
    { name: "Additifs", path: "/produits/additifs", active: false },
    { name: "Entretien", path: "/produits/entretien", active: false },
    { name: "Automobile", path: "/produits/automobile", active: false },
    { name: "Moto", path: "/produits/moto", active: false },
    { name: "Industrie", path: "/produits/industrie", active: false },
    { name: "Marine", path: "/produits/marine", active: true }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80" 
            alt="MOTUL Workshop"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm mb-8" aria-label="Breadcrumb">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Accueil
            </Link>
            <ChevronRight size={16} className="text-gray-400" />
            <Link to="/produits" className="text-gray-300 hover:text-white transition-colors">
              Produits
            </Link>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-white">Marine</span>
          </nav>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Marine MOTUL
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            Lubrifiants marins haute performance. Huiles hors-bord, in-bord, 
            graisses résistantes à l'eau et produits de protection marine.
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="bg-black text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.path}
                className={`px-6 py-2 border-2 transition-all duration-300 font-medium uppercase tracking-wide ${
                  category.active
                    ? "bg-cmca-red border-cmca-red text-white"
                    : "border-white text-white hover:bg-white hover:text-black"
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="bg-cmca-red text-white px-6 py-2 inline-block mb-8">
              <span className="font-bold text-lg">MOTUL</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Marine
            </h2>
            <div className="w-16 h-1 bg-cmca-red mx-auto"></div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {marineProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="bg-black text-center">
                  {/* Product Image - Clickable */}
                  <Link 
                    to={`/produits/marine/${product.id}`}
                    className="block aspect-square mb-6 flex items-center justify-center cursor-pointer"
                  >
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  
                  {/* Product Info */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-white uppercase tracking-wide">
                      {product.name}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Back to Categories */}
          <div className="text-center mt-16">
            <Link 
              to="/produits"
              className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 font-medium uppercase tracking-wide"
            >
              <ChevronLeft size={20} />
              <span>Retour aux catégories</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Find a Dealer Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Trouver un revendeur
            </h2>
            <div className="w-16 h-1 bg-cmca-red mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left - Tunisia Map */}
            <div className="border-2 border-cmca-red p-8 bg-gray-900">
              <div className="text-center mb-6">
                <div className="bg-cmca-red text-white px-6 py-2 inline-block mb-4">
                  <span className="font-bold text-lg">MOTUL</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  انضم إلى شبكة موزعين
                </h3>
                <h4 className="text-lg text-white">
                  MOTUL في تونس
                </h4>
              </div>
              
              {/* Tunisia Map Placeholder */}
              <div className="aspect-square bg-gray-800 rounded flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-32 h-32 text-cmca-red mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <p className="text-white">Carte de la Tunisie</p>
                </div>
              </div>
            </div>

            {/* Right - Dealer Information */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Les revendeurs MOTUL en Tunisie sont disponibles aussi pour vous conseiller, 
                orienter et offrir le produit idéal pour votre véhicule.
              </p>
              
              <div className="space-y-4">
                <button className="bg-cmca-red text-white px-8 py-3 font-medium uppercase tracking-wide hover:bg-opacity-90 transition-colors w-full md:w-auto">
                  Revendeurs MOTUL
                </button>
                <button className="bg-cmca-red text-white px-8 py-3 font-medium uppercase tracking-wide hover:bg-opacity-90 transition-colors w-full md:w-auto">
                  Devenir un revendeur
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
