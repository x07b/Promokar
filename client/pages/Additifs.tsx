import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Droplets, CheckCircle, Award, Shield } from "lucide-react";

export default function Additifs() {
  const additifProducts = [
    {
      id: "all-in-one-ultra-diesel",
      name: "ALL IN ONE ULTRA DIESEL",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&q=80",
      description: "Additif multifonction pour moteurs diesel"
    },
    {
      id: "all-in-one-ultra-essence",
      name: "ALL IN ONE ULTRA ESSENCE",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&q=80",
      description: "Additif multifonction pour moteurs essence"
    },
    {
      id: "cat-converter-cleaner",
      name: "CAT CONVERTER CLEANER",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&q=80",
      description: "Nettoyant pour catalyseur"
    },
    {
      id: "intake-clean",
      name: "INTAKE CLEAN",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&q=80",
      description: "Nettoyant pour collecteur d'admission"
    },
    {
      id: "octane-booster-gasoline",
      name: "OCTANE BOOSTER GASOLINE",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&q=80",
      description: "Amplificateur d'octane pour essence"
    },
    {
      id: "system-keep-clean-diesel",
      name: "SYSTEM KEEP CLEAN DIESEL",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&q=80",
      description: "Système de nettoyage pour diesel"
    },
    {
      id: "system-keep-clean-gasoline",
      name: "SYSTEM KEEP CLEAN GASOLINE",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&q=80",
      description: "Système de nettoyage pour essence"
    },
    {
      id: "transmission-clean",
      name: "TRANSMISSION CLEAN",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&q=80",
      description: "Nettoyant pour transmission"
    },
    {
      id: "valve-lifter-stop-noise",
      name: "VALVE LIFTER STOP NOISE",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&q=80",
      description: "Arrêt du bruit des poussoirs"
    }
  ];

  const categories = [
    { name: "Additifs", path: "/produits/additifs", active: true },
    { name: "Entretien", path: "/produits/entretien", active: false },
    { name: "Automobile", path: "/produits/automobile", active: false },
    { name: "Moto", path: "/produits/moto", active: false },
    { name: "Industrie", path: "/produits/industrie", active: false },
    { name: "Marine", path: "/produits/marine", active: false }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#02173C] to-[#02173C]/90 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
            alt="PROMOKAR Additifs"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#02173C]/80 to-[#02173C]/60"></div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/6 w-3 h-3 bg-[#BE941B] rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#BE941B] rounded-full opacity-40 animate-bounce delay-300"></div>
          <div className="absolute bottom-1/3 right-1/2 w-1 h-1 bg-[#BE941B] rounded-full opacity-80 animate-ping delay-700"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm mb-8" aria-label="Breadcrumb">
            <Link to="/" className="text-gray-300 hover:text-[#BE941B] transition-colors">
              Accueil
            </Link>
            <ChevronRight size={16} className="text-gray-400" />
            <Link to="/produits" className="text-gray-300 hover:text-[#BE941B] transition-colors">
              Produits
            </Link>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-[#BE941B] font-medium">Additifs</span>
          </nav>

          <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-8 py-3 mb-8">
            <Droplets className="w-5 h-5 text-[#BE941B] mr-2" />
            <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Additifs PROMOKAR</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="block">Additifs</span>
            <span className="block bg-gradient-to-r from-[#BE941B] to-white bg-clip-text text-transparent">PROMOKAR</span>
          </h1>

          <div className="w-32 h-1 bg-gradient-to-r from-[#BE941B] via-white to-[#BE941B] mb-8 rounded-full"></div>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed">
            PROMOKAR en Tunisie vous propose des additifs haute performance pour garantir la propreté
            et le bon fonctionnement de votre véhicule.
            <br />
            <span className="text-[#BE941B] font-medium">Solutions professionnelles pour tous types de moteurs.</span>
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
              Additifs
            </h2>
            <div className="w-16 h-1 bg-cmca-red mx-auto"></div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {additifProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="bg-black text-center">
                  {/* Product Image - Clickable */}
                  <Link
                    to={`/produits/additifs/${product.id}`}
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
