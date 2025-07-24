import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Automobile() {
  const automobileProducts = [
    {
      id: "8100-x-cess",
      name: "8100 X-CESS",
      image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=300&q=80",
      description: "Huile moteur 100% synthétique 5W40"
    },
    {
      id: "gear-300",
      name: "GEAR 300",
      image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=300&q=80",
      description: "Huile transmission manuelle 75W90"
    },
    {
      id: "6100-save-lite",
      name: "6100 SAVE LITE",
      image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=300&q=80",
      description: "Huile moteur semi-synthétique 5W30"
    },
    {
      id: "8100-eco-nergy",
      name: "8100 ECO-NERGY",
      image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=300&q=80",
      description: "Huile moteur économie carburant 5W30"
    },
    {
      id: "motylgear-75w80",
      name: "MOTYLGEAR 75W80",
      image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=300&q=80",
      description: "Huile boîte de vitesses synthétique"
    },
    {
      id: "brake-fluid-dot4",
      name: "BRAKE FLUID DOT 4",
      image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=300&q=80",
      description: "Liquide de frein DOT 4"
    },
    {
      id: "coolant-inugel-optimal",
      name: "INUGEL OPTIMAL",
      image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=300&q=80",
      description: "Liquide de refroidissement universel"
    },
    {
      id: "power-steering-fluid",
      name: "DEXRON III",
      image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=300&q=80",
      description: "Fluide direction assistée"
    },
    {
      id: "classic-oil-20w50",
      name: "CLASSIC OIL 20W50",
      image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=300&q=80",
      description: "Huile moteur véhicules anciens"
    }
  ];

  const categories = [
    { name: "Additifs", path: "/produits/additifs", active: false },
    { name: "Entretien", path: "/produits/entretien", active: false },
    { name: "Automobile", path: "/produits/automobile", active: true },
    { name: "Moto", path: "/produits/moto", active: false },
    { name: "Industrie", path: "/produits/industrie", active: false },
    { name: "Marine", path: "/produits/marine", active: false }
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
            <span className="text-white">Automobile</span>
          </nav>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Automobile MOTUL
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            Lubrifiants automobiles haute performance pour tous types de véhicules. 
            Huiles moteur, transmission et fluides spécialisés.
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
              Automobile
            </h2>
            <div className="w-16 h-1 bg-cmca-red mx-auto"></div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {automobileProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="bg-black text-center">
                  {/* Product Image - Clickable */}
                  <Link 
                    to={`/produits/automobile/${product.id}`}
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
