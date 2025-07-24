import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { Droplets, Car, Truck, Wrench, Factory, Ship, ArrowRight, Search, MapPin, Award, Clock, Shield } from "lucide-react";

export default function Produits() {
  const productCategories = [
    {
      title: "Additifs",
      path: "/produits/additifs",
      icon: Droplets,
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
      description: "Additifs haute performance pour moteurs",
      color: "from-[#BE941B]/20 to-[#02173C]/10",

    },
    {
      title: "Automobile",
      path: "/produits/automobile", 
      icon: Car,
      image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=400&q=80",
      description: "Lubrifiants automobiles professionnels",
      color: "from-[#02173C]/20 to-[#BE941B]/10",

    },
    {
      title: "Entretien",
      path: "/produits/entretien",
      icon: Wrench,
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&q=80",
      description: "Produits d'entretien et maintenance",
      color: "from-[#BE941B]/20 to-[#02173C]/10",

    },
    {
      title: "Moto",
      path: "/produits/moto",
      icon: Car,
      image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=400&q=80",
      description: "Huiles et lubrifiants moto",
      color: "from-[#02173C]/20 to-[#BE941B]/10",

    },
    {
      title: "Industrie",
      path: "/produits/industrie",
      icon: Factory,
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400&q=80",
      description: "Solutions industrielles avancées",
      color: "from-[#BE941B]/20 to-[#02173C]/10",

    },
    {
      title: "Marine",
      path: "/produits/marine",
      icon: Ship,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80",
      description: "Lubrifiants marins spécialisés",
      color: "from-[#02173C]/20 to-[#BE941B]/10",

    }
  ];

  const features = [
    {
      icon: Award,
      title: "Qualité Certifiée",
      description: "Conformité aux standards internationaux"
    },
    {
      icon: Clock,
      title: "Livraison Rapide",
      description: "Service 24/48h dans toute la Tunisie"
    },
    {
      icon: Shield,
      title: "Garantie Étendue",
      description: "Protection complète sur tous nos produits"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#02173C] to-[#02173C]/90 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80" 
            alt="PROMOKAR Products"
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

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-8 py-3 mb-8">
            <Droplets className="w-5 h-5 text-[#BE941B] mr-2" />
            <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Notre Gamme</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="block">Catalogue</span>
            <span className="block bg-gradient-to-r from-[#BE941B] to-white bg-clip-text text-transparent">PROMOKAR</span>
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-[#BE941B] via-white to-[#BE941B] mx-auto mb-8 rounded-full"></div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Découvrez notre gamme complète de lubrifiants et additifs haute performance. 
            <br />
            <span className="text-[#BE941B] font-medium">Plus de 260 produits disponibles en Tunisie.</span>
          </p>
        </div>
      </section>

      {/* Features Strip */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-center justify-center text-center group">
                  <div className="w-12 h-12 bg-[#BE941B]/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-[#BE941B]/20 transition-colors duration-300">
                    <IconComponent size={24} className="text-[#BE941B]" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-[#02173C] text-sm uppercase tracking-wide">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#02173C] mb-6">
              Nos <span className="bg-gradient-to-r from-[#BE941B] to-[#02173C] bg-clip-text text-transparent">Catégories</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#BE941B] to-[#02173C] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explorez notre large gamme de produits spécialisés pour chaque domaine d'application
            </p>
          </div>

          {/* Product Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {productCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Link key={index} to={category.path} className="group cursor-pointer">
                  <div className={`bg-gradient-to-br ${category.color} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-white/20`}>
                    
                    {/* Image Section */}
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#02173C]/60 to-transparent"></div>
                      
                      {/* Icon Overlay */}
                      <div className="absolute top-4 right-4">
                        <div className="w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center shadow-lg">
                          <IconComponent size={24} className="text-[#BE941B]" />
                        </div>
                      </div>
                      

                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6 bg-white/80 backdrop-blur-sm">
                      <h3 className="text-2xl font-black text-[#02173C] mb-3 group-hover:text-[#BE941B] transition-colors duration-300 uppercase tracking-wide">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {category.description}
                      </p>
                      
                      {/* CTA */}
                      <div className="flex items-center text-[#BE941B] font-bold group-hover:text-[#02173C] transition-colors duration-300">
                        <span className="mr-2">Découvrir</span>
                        <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Oil Selector Section */}
      <section className="py-20 bg-gradient-to-r from-[#02173C] to-[#02173C]/95">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            
            {/* Left - Information */}
            <div className="text-white">
              <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-6 py-2 mb-8">
                <Search className="w-4 h-4 text-[#BE941B] mr-2" />
                <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Outil Intelligent</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Sélecteur <span className="text-[#BE941B]">d'Huile</span>
              </h2>
              
              <div className="w-24 h-1 bg-[#BE941B] mb-8 rounded-full"></div>
              
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Comment trouver le bon produit PROMOKAR pour votre véhicule ? 
                C'est simple avec notre sélecteur intelligent !
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#BE941B] rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">1</div>
                  <span className="text-gray-300">Sélectionnez votre type de véhicule</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#BE941B] rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">2</div>
                  <span className="text-gray-300">Indiquez la marque et le modèle</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#BE941B] rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">3</div>
                  <span className="text-gray-300">Obtenez la recommandation parfaite</span>
                </div>
              </div>
              
              <button className="group bg-[#BE941B] hover:bg-white px-8 py-4 text-white hover:text-[#02173C] transition-all duration-300 font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span className="flex items-center">
                  Utiliser le Sélecteur
                  <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>

            {/* Right - Visual Content */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#BE941B]/10 to-[#02173C]/5 rounded-3xl p-8 relative overflow-hidden border border-[#BE941B]/20 backdrop-blur-sm">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#BE941B]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#02173C]/10 rounded-full blur-2xl"></div>

                {/* Main image/video placeholder */}
                <div className="relative z-10 mb-6">
                  <div className="aspect-video bg-gradient-to-br from-white/90 to-white/70 rounded-2xl overflow-hidden shadow-2xl border border-white/30">
                    <img
                      src="https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=600&q=80"
                      alt="PROMOKAR Oil Selector Tutorial"
                      className="w-full h-full object-cover"
                    />
                    {/* Video overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02173C]/60 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-[#BE941B]/90 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    {/* Tutorial badge */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-[#BE941B]/90 text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm">
                        🎥 Tutoriel
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature highlights */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/80 rounded-xl p-4 text-center backdrop-blur-sm border border-white/50">
                    <div className="text-2xl font-black text-[#BE941B] mb-1">3 min</div>
                    <div className="text-sm text-gray-600 font-medium">Durée moyenne</div>
                  </div>
                  <div className="bg-white/80 rounded-xl p-4 text-center backdrop-blur-sm border border-white/50">
                    <div className="text-2xl font-black text-[#02173C] mb-1">100%</div>
                    <div className="text-sm text-gray-600 font-medium">Précision</div>
                  </div>
                </div>

                {/* Quick features */}
                <div className="space-y-3">
                  <div className="flex items-center text-white">
                    <div className="w-6 h-6 bg-[#BE941B] rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Interface intuitive et rapide</span>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="w-6 h-6 bg-[#BE941B] rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Base de données complète</span>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="w-6 h-6 bg-[#BE941B] rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Recommandations personnalisées</span>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#BE941B] rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#02173C] rounded-full opacity-40 animate-pulse"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Find Dealer Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#02173C] mb-6">
              Réseau de <span className="bg-gradient-to-r from-[#BE941B] to-[#02173C] bg-clip-text text-transparent">Distribution</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#BE941B] to-[#02173C] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plus de 115 points de vente dans toute la Tunisie
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            
            {/* Left - Map */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#02173C] to-[#02173C]/90 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#BE941B]/10 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-6 py-2 mb-4">
                      <MapPin className="w-4 h-4 text-[#BE941B] mr-2" />
                      <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">21 Gouvernorats</span>
                    </div>
                    <h3 className="text-2xl font-black mb-2">
                      Réseau PROMOKAR
                    </h3>
                    <p className="text-gray-300">
                      Présent dans toute la Tunisie
                    </p>
                  </div>
                  
                  {/* Tunisia Map Placeholder */}
                  <div className="aspect-square bg-[#BE941B]/10 rounded-2xl flex items-center justify-center border border-[#BE941B]/20 backdrop-blur-sm">
                    <div className="text-center">
                      <MapPin className="w-20 h-20 text-[#BE941B] mx-auto mb-4" />
                      <p className="text-white font-medium">Carte Interactive</p>
                      <p className="text-gray-300 text-sm">115+ Points de Vente</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-black text-[#02173C] mb-4">
                  Trouvez Votre Revendeur
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Notre réseau de distribution couvre l'ensemble du territoire tunisien avec 
                  des revendeurs qualifiés dans 21 gouvernorats.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-600">
                {[
                  "Ariana", "Ben Arous", "Béja", "Bizerte", "Gabès", "Gafsa",
                  "Kairouan", "Kasserine", "Le Kef", "La Manouba", "Mahdia", "Médenine",
                  "Monastir", "Nabeul", "Sidi Bouzid", "Siliana", "Sfax", "Sousse",
                  "Tataouine", "Tunis", "Zaghouan"
                ].map((city, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-[#BE941B] rounded-full mr-2"></div>
                    <span>{city}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-br from-[#BE941B]/5 to-[#02173C]/5 rounded-2xl p-6 border border-[#BE941B]/20">
                <h4 className="font-bold text-[#02173C] mb-2">Services Disponibles</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <ArrowRight size={16} className="text-[#BE941B] mr-2" />
                    Conseil et orientation technique
                  </li>
                  <li className="flex items-center">
                    <ArrowRight size={16} className="text-[#BE941B] mr-2" />
                    Gamme complète PROMOKAR
                  </li>
                  <li className="flex items-center">
                    <ArrowRight size={16} className="text-[#BE941B] mr-2" />
                    Support après-vente
                  </li>
                </ul>
              </div>
              
              <button className="group bg-[#BE941B] hover:bg-[#02173C] px-8 py-4 text-white transition-all duration-300 font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span className="flex items-center">
                  Localiser un Revendeur
                  <MapPin size={20} className="ml-2 transform group-hover:scale-110 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
