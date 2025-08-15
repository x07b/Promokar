import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight, Trophy, Car, Shield, Star, Zap, Award, Check, Anchor, Bike } from "lucide-react";

export default function MotoSeaEngines() {
  const motoSeaProducts = [
    // 2T Products
    {
      id: "dinoil-2t-competition-full-synth",
      name: "DINOIL PREMIUM 2T MOTO COMPETITION FULL SYNTH",
      image: "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2F2bfc03518f6145e0b7e2eebdb56aedf9?format=webp&width=800",
      category: "2T",
      type: "Premium",
      description: "Huile entièrement synthétique pour motos de course à deux temps. Il doit être mélangé à l'essence dans une proportion inférieure à 3%. Il garantit d'excellents résultats, tant sur les moteurs lubrifiés avec un mélange prêt à l'emploi que sur ceux équipés d'un système séparé où l'huile est injectée directement dans le collecteur d'admission ou dans le carburateur lui-même. Réduit la fumée d'échappement."
    },
    {
      id: "dinoil-2t-semi-synth",
      name: "DINOIL PREMIUM 2T MOTO SEMI SYNTH",
      image: "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2Ffdb945b4ea484baa964640a84c2222f8?format=webp&width=800",
      category: "2T",
      type: "Premium",
      description: "Nouveau lubrifiant semi-synthétique qui permet une faible émission de gaz d'échappement tout en respectant les normes Jaso. Idéal pour les moteurs à deux temps, il possède la particularité de réduire la consommation en améliorant la lubrification, tout en protégeant les pièces."
    },
    {
      id: "dinoil-2t-mineral",
      name: "DINOIL MULTIGRADE 2T MINERAL",
      image: "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2F71dd56287f2943ce9a11e080e13f200d?format=webp&width=800",
      category: "2T",
      type: "Multigrade",
      description: "Huile de mélange à base minérale, de bonne qualité, spécialement conçue pour la lubrification des moteurs à deux temps refroidis par air. Grâce à sa technologie appropriée correctement équilibré, il garantit un bon pouvoir lubrifiant et anti-usure, très peu de dépôts dans la chambre de combustion, propreté maximale de la bougie d'allumage et excellente transmission de la puissance du moteur."
    },
    {
      id: "dinoil-2t-outboard",
      name: "DINOIL MULTIGRADE 2T OUTBOARD",
      image: "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2Fa8c7be674a9c482ab7a8315cb3b9572c?format=webp&width=800",
      category: "2T",
      type: "Multigrade",
      description: "Lubrifiant spécial nouvellement formulé pour les moteurs hors-bord à 2 temps. Grâce à sa formule spéciale respectueuse de l'environnement, il ne pollue pas l'eau et le sol en cas de fuite. Et convient pour une utilisation dans les bateaux, les traîneaux et les motos équipés de moteurs refroidis par eau avec système d'injection avec et sans mélangeur. Misce jusqu'à 100:1. Répond à la spécification NMMA TC-W3."
    },
    // 4T Products
    {
      id: "dinoil-4t-5w40-competition",
      name: "DINOIL PREMIUM 4T MOTO 5W/40 COMPETITION",
      image: "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2Fd74c64a6787e4a5db310f86d3483718f?format=webp&width=800",
      category: "4T",
      type: "Premium",
      description: "Lubrifiant synthétique pour moteurs à essence à 4 temps, spécialement conçu pour répondre aux exigences des moteurs de motos modernes à 4 temps à haute performance, avec refroidissement par air ou par eau. Il offre une excellente protection pour le moteur, la boîte de vitesses et les embrayages humides utilisés dans les moteurs à 4 temps. Il garantit une fiabilité maximale, même dans des conditions de fonctionnement sévères et à des températures élevées."
    },
    {
      id: "dinoil-4t-10w40-synthetic",
      name: "DINOIL PREMIUM 4T MOTO 10W/40 SYNTHETIC",
      image: "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2F9d975f4f9051465d90f4b6cc532f5557?format=webp&width=800",
      category: "4T",
      type: "Premium",
      description: "Lubrifiant semi-synthétique formulé pour les moteurs à essence à 4 temps. Développée spécifiquement pour répondre aux exigences des moteurs de motos modernes et performants à 4 temps, avec refroidissement par air ou par eau. Offre une excellente protection pour le moteur, la boîte de vitesses et les embrayages humides utilisés dans les moteurs de motos à 4 temps. Garantit une fiabilité maximale, même dans des conditions de fonctionnement difficiles et à des températures élevées."
    },
    {
      id: "dinoil-4t-20w50-multigrade",
      name: "DINOIL MULTIGRADE 4T MOTO 20W/50",
      image: "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2F92d0ddc310df4694a0819b87f815552d?format=webp&width=800",
      category: "4T",
      type: "Multigrade",
      description: "Lubrifiant multigrade haute performance pour moteurs à essence à quatre temps. Le seuil de viscosité SAE 20W-50 et l'additif ciblé en font le produit idéal pour les applications où les vitesses et les températures élevées sont fréquentes et mettent le lubrifiant à l'épreuve. Excellente propreté du moteur grâce �� l'additif détergent-dispersant. Fortes caractéristiques anti-usure, particulièrement requises dans les utilisations professionnelles sévères."
    }
  ];

  const features = [
    {
      icon: Bike,
      title: "Moto 2T & 4T",
      description: "Gamme complète pour moteurs 2 temps et 4 temps"
    },
    {
      icon: Anchor,
      title: "Moteurs Marins",
      description: "Spécialement formulés pour les moteurs hors-bord"
    },
    {
      icon: Trophy,
      title: "Performance Racing",
      description: "Formules compétition pour performances extrêmes"
    },
    {
      icon: Shield,
      title: "Protection Environnementale",
      description: "Formules respectueuses de l'environnement marin"
    }
  ];

  const benefits = [
    "Formules synthétiques et semi-synthétiques premium",
    "Réduction significative des émissions et fumées",
    "Protection moteur, boîte et embrayage intégrée",
    "Résistance aux températures extrêmes",
    "Compatibilité environnementale marine",
    "Normes API, JASO et NMMA"
  ];

  // Group products by category
  const productsByCategory = {
    "2T": motoSeaProducts.filter(p => p.category === "2T"),
    "4T": motoSeaProducts.filter(p => p.category === "4T")
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#02173C] to-[#02173C]/90 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=80" 
            alt="Moto and Sea Engines"
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
            <span className="text-[#BE941B] font-medium">Moto and Sea Engines</span>
          </nav>

          <div className="text-center">
            <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-8 py-3 mb-8">
              <Bike className="w-5 h-5 text-[#BE941B] mr-2" />
              <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Moto & Marine</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="block">Moto and</span>
              <span className="block bg-gradient-to-r from-[#BE941B] to-white bg-clip-text text-transparent">Sea Engines</span>
            </h1>
            
            <div className="w-32 h-1 bg-gradient-to-r from-[#BE941B] via-white to-[#BE941B] mx-auto mb-8 rounded-full"></div>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Lubrifiants spécialisés pour moteurs 2 temps et 4 temps moto et marine.
              <br />
              <span className="text-[#BE941B] font-medium">Performance et protection pour tous terrains et environnements.</span>
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
          {/* Dinoil Logo */}
          <div className="text-center mb-12">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets%2Ff858c707aa6f488f835bf447c4e2be30%2Fb9814eb9a4974e549d1dc7fbe2c4d514?format=webp&width=800"
              alt="Dinoil Logo"
              className="mx-auto max-w-48 w-full h-auto mb-8"
            />
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#02173C] mb-6">
              Gamme <span className="bg-gradient-to-r from-[#BE941B] to-[#02173C] bg-clip-text text-transparent">Moto & Marine</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#BE941B] to-[#02173C] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Lubrifiants spécialisés pour moteurs 2T et 4T moto, scooter et moteurs marins
            </p>
          </div>

          {/* Products by Category */}
          <div className="space-y-16 max-w-7xl mx-auto">
            {Object.entries(productsByCategory).map(([category, products]) => (
              <div key={category}>
                <div className="text-center mb-12">
                  <h3 className="text-3xl md:text-4xl font-black text-[#02173C] mb-4">
                    Moteurs <span className="text-[#BE941B]">{category}</span>
                  </h3>
                  <div className="w-16 h-1 bg-[#BE941B] mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {products.map((product, index) => (
                    <Link key={product.id} to={`/produits/moto-sea-engines/${product.id}`} className="group cursor-pointer">
                      <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-100 relative">
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 z-10">
                          <div className="bg-gradient-to-r from-[#BE941B] to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                            {product.category} {product.type}
                          </div>
                        </div>
                        
                        {/* Product Image */}
                        <div className="aspect-square relative bg-white p-4">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#02173C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        
                        {/* Product Info */}
                        <div className="p-6 text-center">
                          <h1 className="text-lg font-black text-[#02173C] group-hover:text-[#BE941B] transition-colors duration-300 uppercase tracking-wide mb-3 leading-tight">
                            {product.name}
                          </h1>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {product.description.substring(0, 100)}...
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
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
            
            {/* Left - Benefits List */}
            <div className="text-white">
              <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-6 py-2 mb-8">
                <Bike className="w-4 h-4 text-[#BE941B] mr-2" />
                <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Avantages Moto & Marine</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Performance <span className="text-[#BE941B]">Spécialisée</span>
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

            {/* Right - Image */}
            <div className="relative">
              <div className="aspect-square relative overflow-hidden rounded-3xl">
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80"
                  alt="Moto and Sea Engines" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#BE941B]/20 to-transparent"></div>
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#BE941B]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Anchor className="w-6 h-6 text-[#BE941B]" />
                  </div>
                  <p className="text-[#02173C] font-bold text-sm">Performance</p>
                  <p className="text-gray-600 text-xs">Moto & Marine</p>
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
