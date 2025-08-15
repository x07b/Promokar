import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight, Truck, Shield, Star, Zap, Award, Clock, MapPin, Check } from "lucide-react";

export default function PoidsLourds() {
  const poidsLourdsProducts = [
    {
      id: "heavy-duty-15w40",
      name: "HEAVY DUTY ENGINE OIL 15W-40",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&q=80",
      description: "Huile moteur longue durée pour poids lourds"
    },
    {
      id: "heavy-duty-10w40",
      name: "HEAVY DUTY ENGINE OIL 10W-40",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&q=80",
      description: "Huile moteur haute performance poids lourds"
    },
    {
      id: "truck-transmission-oil",
      name: "TRUCK TRANSMISSION OIL",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&q=80",
      description: "Huile de transmission pour véhicules lourds"
    },
    {
      id: "heavy-duty-gear-oil",
      name: "HEAVY DUTY GEAR OIL",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&q=80",
      description: "Huile de boîte haute résistance"
    },
    {
      id: "truck-coolant",
      name: "TRUCK COOLANT PREMIUM",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&q=80",
      description: "Liquide de refroidissement longue durée"
    },
    {
      id: "hydraulic-oil-truck",
      name: "HYDRAULIC OIL TRUCK",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&q=80",
      description: "Huile hydraulique pour systèmes lourds"
    }
  ];

  const features = [
    {
      icon: Truck,
      title: "Haute Résistance",
      description: "Conçu pour les charges lourdes et usage intensif"
    },
    {
      icon: Shield,
      title: "Protection Longue Durée",
      description: "Protection étendue pour réduire la maintenance"
    },
    {
      icon: Zap,
      title: "Performance Optimale",
      description: "Maintient la performance même sous forte charge"
    },
    {
      icon: Award,
      title: "Certifié Professionnel",
      description: "Conforme aux normes de l'industrie du transport"
    }
  ];

  const benefits = [
    "Intervalles de vidange étendus",
    "Réduction de la consommation de carburant",
    "Protection contre l'usure des composants",
    "Résistance aux conditions extrêmes",
    "Stabilité thermique exceptionnelle",
    "Compatible avec tous systèmes de post-traitement"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#02173C] to-[#02173C]/90 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80" 
            alt="Poids Lourds"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#02173C]/80 to-[#02173C]/60"></div>
        </div>
        
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
            <span className="text-[#BE941B] font-medium">Poids Lourds</span>
          </nav>

          <div className="text-center">
            <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-8 py-3 mb-8">
              <Truck className="w-5 h-5 text-[#BE941B] mr-2" />
              <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Poids Lourds</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="block">Lubrifiants</span>
              <span className="block bg-gradient-to-r from-[#BE941B] to-white bg-clip-text text-transparent">Poids Lourds</span>
            </h1>
            
            <div className="w-32 h-1 bg-gradient-to-r from-[#BE941B] via-white to-[#BE941B] mx-auto mb-8 rounded-full"></div>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Solutions spécialisées pour véhicules lourds et transport professionnel.
              <br />
              <span className="text-[#BE941B] font-medium">Performance et durabilité pour usage intensif.</span>
            </p>
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
      <section className="pt-1 pb-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets%2Ff858c707aa6f488f835bf447c4e2be30%2Fb9814eb9a4974e549d1dc7fbe2c4d514?format=webp&width=800"
              alt="Dinoil Logo"
              className="mx-auto max-w-48 w-full h-auto mb-8"
            />
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#02173C] mb-6">
              Gamme <span className="bg-gradient-to-r from-[#BE941B] to-[#02173C] bg-clip-text text-transparent">Poids Lourds</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#BE941B] to-[#02173C] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Lubrifiants spécialisés pour véhicules lourds et transport professionnel
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {poidsLourdsProducts.map((product, index) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-100">
                  
                  {/* Product Image */}
                  <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02173C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Heavy Duty Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-[#BE941B] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                        Heavy Duty
                      </div>
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-black text-[#02173C] group-hover:text-[#BE941B] transition-colors duration-300 uppercase tracking-wide text-center mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm text-center leading-relaxed">
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
              className="group inline-flex items-center bg-white hover:bg-[#02173C] border-2 border-[#02173C] text-[#02173C] hover:text-white px-8 py-4 rounded-2xl transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <ChevronLeft size={20} className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Retour aux Catégories</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-[#02173C] to-[#02173C]/95">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            
            <div className="text-white">
              <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-6 py-2 mb-8">
                <Truck className="w-4 h-4 text-[#BE941B] mr-2" />
                <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Avantages Poids Lourds</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Fiabilité <span className="text-[#BE941B]">Maximale</span>
              </h2>
              
              <div className="w-24 h-1 bg-[#BE941B] mb-8 rounded-full"></div>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-[#BE941B] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <Check size={14} className="text-white" />
                    </div>
                    <span className="text-gray-300 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <button className="group bg-[#BE941B] hover:bg-white px-8 py-4 text-white hover:text-[#02173C] transition-all duration-300 font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span className="flex items-center">
                  Découvrir la Gamme
                  <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>

            <div className="relative">
              <div className="aspect-square relative overflow-hidden rounded-3xl">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"
                  alt="Poids Lourds" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#BE941B]/20 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#BE941B]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-[#BE941B]" />
                  </div>
                  <p className="text-[#02173C] font-bold text-sm">Durabilité</p>
                  <p className="text-gray-600 text-xs">Longue durée</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
