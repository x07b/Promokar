import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Factory, Shield, Star, Zap, Award } from "lucide-react";

export default function Industrie() {
  const industrieProducts = [
    {
      id: "tekma-mega-x-15w40",
      name: "TEKMA MEGA X 15W40",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=300&q=80"
    },
    {
      id: "hydraulic-hm-46",
      name: "HYDRAULIC HM 46",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=300&q=80"
    },
    {
      id: "tekma-diesel-10w40",
      name: "TEKMA DIESEL 10W40",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=300&q=80"
    },
    {
      id: "transmission-gear-8-75w80",
      name: "TRANSMISSION GEAR 8 75W80",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=300&q=80"
    },
    {
      id: "hydraulic-hm-68",
      name: "HYDRAULIC HM 68",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=300&q=80"
    },
    {
      id: "compressor-oil-100",
      name: "COMPRESSOR OIL 100",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=300&q=80"
    },
    {
      id: "cutting-oil-bio",
      name: "CUTTING OIL BIO",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=300&q=80"
    },
    {
      id: "marine-grease-ep2",
      name: "MARINE GREASE EP2",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=300&q=80"
    },
    {
      id: "thermal-oil-32",
      name: "THERMAL OIL 32",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=300&q=80"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Solutions Industrielles",
      description: "Lubrifiants haute performance pour l'industrie"
    },
    {
      icon: Zap,
      title: "Efficacité Maximale",
      description: "Optimisation des performances industrielles"
    },
    {
      icon: Star,
      title: "Technologies Avancées",
      description: "Formulations pour applications exigeantes"
    },
    {
      icon: Award,
      title: "Expertise Dinoil",
      description: "Solutions certifiées pour l'industrie"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#02173C] to-[#02173C]/90 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=1200&q=80" 
            alt="Industrie Dinoil"
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
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Accueil
            </Link>
            <ChevronRight size={16} className="text-gray-400" />
            <Link to="/produits" className="text-gray-300 hover:text-white transition-colors">
              Produits
            </Link>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-[#BE941B] font-medium">Industrie</span>
          </nav>

          <div className="text-center">
            <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-8 py-3 mb-8">
              <Factory className="w-5 h-5 text-[#BE941B] mr-2" />
              <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Gamme Industrie</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-[#BE941B] to-white bg-clip-text text-transparent">Industrie</span>
            </h1>
            
            <div className="w-32 h-1 bg-gradient-to-r from-[#BE941B] via-white to-[#BE941B] mx-auto mb-8 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-[#BE941B]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#BE941B]/20 transition-colors duration-300">
                    <IconComponent size={28} className="text-[#BE941B]" />
                  </div>
                  <h3 className="font-bold text-[#02173C] text-sm uppercase tracking-wide mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#02173C] mb-6">
              Produits <span className="bg-gradient-to-r from-[#BE941B] to-[#02173C] bg-clip-text text-transparent">Industrie</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#BE941B] to-[#02173C] mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {industrieProducts.map((product, index) => (
              <Link key={product.id} to={`/produits/industrie/${product.id}`} className="group cursor-pointer">
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-100">
                  
                  {/* Product Image */}
                  <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02173C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-black text-[#02173C] group-hover:text-[#BE941B] transition-colors duration-300 uppercase tracking-wide text-center">
                      {product.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Back to Categories */}
          <div className="text-center mt-16">
            <Link 
              to="/produits"
              className="group inline-flex items-center bg-white hover:bg-[#02173C] border-2 border-[#02173C] text-[#02173C] hover:text-white px-8 py-4 rounded-2xl transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <ChevronLeft size={20} className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Retour aux Catégories</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
