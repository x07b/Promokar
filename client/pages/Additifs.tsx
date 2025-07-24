import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { ChevronLeft, ChevronRight, ArrowRight, Droplets, Shield, Star, Zap, Award, Clock, MapPin, Check } from "lucide-react";
=======
import { ChevronLeft, ChevronRight, Droplets, CheckCircle, Award, Shield } from "lucide-react";
>>>>>>> origin/main

export default function Additifs() {
  const additifProducts = [
    {
      id: "all-in-one-ultra-diesel",
      name: "ALL IN ONE ULTRA DIESEL",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&q=80",
      description: "Additif multifonction haute performance pour moteurs diesel",
      price: "A partir de 25 DT"
    },
    {
      id: "all-in-one-ultra-essence",
      name: "ALL IN ONE ULTRA ESSENCE",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&q=80",
      description: "Additif multifonction premium pour moteurs essence",
      price: "A partir de 22 DT"
    },
    {
      id: "cat-converter-cleaner",
      name: "CAT CONVERTER CLEANER",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&q=80",
      description: "Nettoyant catalyseur pour performance optimale",
      price: "A partir de 35 DT"
    },
    {
      id: "intake-clean",
      name: "INTAKE CLEAN",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&q=80",
      description: "Nettoyant collecteur d'admission professionnel",
      price: "A partir de 28 DT"
    },
    {
      id: "octane-booster-gasoline",
      name: "OCTANE BOOSTER GASOLINE",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&q=80",
      description: "Amplificateur d'octane pour essence premium",
      price: "A partir de 30 DT"
    },
    {
      id: "system-keep-clean-diesel",
      name: "SYSTEM KEEP CLEAN DIESEL",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&q=80",
      description: "Système de nettoyage complet diesel",
      price: "A partir de 32 DT"
    },
    {
      id: "system-keep-clean-gasoline",
      name: "SYSTEM KEEP CLEAN GASOLINE",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&q=80",
      description: "Système de nettoyage avancé pour essence",
      price: "A partir de 29 DT"
    },
    {
      id: "transmission-clean",
      name: "TRANSMISSION CLEAN",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&q=80",
      description: "Nettoyant transmission automatique et manuelle",
      price: "A partir de 38 DT"
    },
    {
      id: "valve-lifter-stop-noise",
      name: "VALVE LIFTER STOP NOISE",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&q=80",
      description: "Solution anti-bruit des poussoirs hydrauliques",
      price: "A partir de 26 DT"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Protection Moteur",
      description: "Protection avancée contre l'usure et les dépôts"
    },
    {
      icon: Zap,
      title: "Performance Optimisée",
      description: "Amélioration des performances et de la consommation"
    },
    {
      icon: Star,
      title: "Qualité Premium",
      description: "Formules développées selon les standards européens"
    },
    {
      icon: Award,
      title: "Certifié Dinoil",
      description: "Gamme certifiée et testée en laboratoire"
    }
  ];

  const benefits = [
    "Réduit la consommation de carburant jusqu'à 15%",
    "Améliore la puissance du moteur",
    "Protège contre la corrosion et l'usure",
    "Nettoie le système d'injection",
    "Compatible avec tous types de véhicules",
    "Formulation respectueuse de l'environnement"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#02173C] to-[#02173C]/90 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
<<<<<<< HEAD
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80" 
            alt="Additifs Dinoil"
=======
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
            alt="PROMOKAR Additifs"
>>>>>>> origin/main
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#02173C]/80 to-[#02173C]/60"></div>
        </div>
<<<<<<< HEAD
        
=======

>>>>>>> origin/main
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

<<<<<<< HEAD
          <div className="text-center">
            <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-8 py-3 mb-8">
              <Droplets className="w-5 h-5 text-[#BE941B] mr-2" />
              <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Gamme Additifs</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="block">Additifs</span>
              <span className="block bg-gradient-to-r from-[#BE941B] to-white bg-clip-text text-transparent">Dinoil en Tunisie</span>
            </h1>
            
            <div className="w-32 h-1 bg-gradient-to-r from-[#BE941B] via-white to-[#BE941B] mx-auto mb-8 rounded-full"></div>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Découvrez notre gamme complète d'additifs Dinoil haute performance.
              <br />
              <span className="text-[#BE941B] font-medium">Solutions professionnelles pour l'entretien de votre véhicule.</span>
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
=======
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
      <section className="bg-gradient-to-r from-gray-50 to-white py-8 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.path}
                className={`px-8 py-3 rounded-2xl border-2 transition-all duration-300 font-bold uppercase tracking-wide text-sm transform hover:-translate-y-1 ${
                  category.active
                    ? "bg-[#BE941B] border-[#BE941B] text-white shadow-lg hover:shadow-xl"
                    : "border-[#02173C] text-[#02173C] hover:bg-[#02173C] hover:text-white shadow-md hover:shadow-lg"
                }`}
              >
                {category.name}
              </Link>
            ))}
>>>>>>> origin/main
          </div>
        </div>
      </section>

      {/* Products Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#02173C] mb-6">
              Nos <span className="bg-gradient-to-r from-[#BE941B] to-[#02173C] bg-clip-text text-transparent">Additifs</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#BE941B] to-[#02173C] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Une gamme complète d'additifs professionnels pour optimiser les performances de votre véhicule
=======
      <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-[#BE941B]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-[#02173C]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/6 w-24 h-24 bg-[#BE941B]/3 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#BE941B]/10 border border-[#BE941B]/20 rounded-full px-8 py-3 mb-8">
              <Droplets className="w-5 h-5 text-[#BE941B] mr-2" />
              <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Gamme PROMOKAR</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#02173C] mb-6 leading-tight">
              Additifs <span className="bg-gradient-to-r from-[#BE941B] to-[#02173C] bg-clip-text text-transparent">Haute Performance</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#BE941B] via-[#02173C] to-[#BE941B] mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Découvrez notre gamme complète d'additifs professionnels pour l'entretien et l'optimisation de vos moteurs.
>>>>>>> origin/main
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
<<<<<<< HEAD
            {additifProducts.map((product, index) => (
              <Link key={product.id} to={`/produits/additifs/${product.id}`} className="group cursor-pointer">
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
                    <h3 className="text-xl font-black text-[#02173C] mb-3 group-hover:text-[#BE941B] transition-colors duration-300 uppercase tracking-wide">
                      {product.name}
                    </h3>

=======
            {additifProducts.map((product) => (
              <div key={product.id} className="group relative">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-[#BE941B]/30 transform hover:-translate-y-3 hover:scale-105">

                  {/* Product Image - Clickable */}
                  <Link
                    to={`/produits/additifs/${product.id}`}
                    className="block aspect-square mb-6 flex items-center justify-center cursor-pointer relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#BE941B]/5 to-[#02173C]/5"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02173C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>

                  {/* Product Info */}
                  <div className="text-center space-y-3">
                    <h3 className="text-xl font-black text-[#02173C] uppercase tracking-wide group-hover:text-[#BE941B] transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {product.description}
                    </p>

                    {/* Benefits */}
                    <div className="flex items-center justify-center text-sm text-gray-700 pt-2">
                      <CheckCircle className="w-4 h-4 text-[#BE941B] mr-2 flex-shrink-0" />
                      <span>Qualité professionnelle</span>
                    </div>
>>>>>>> origin/main
                  </div>

                  {/* Hover accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#BE941B] to-[#02173C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl"></div>
                </div>
              </Link>
            ))}
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-[#BE941B]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#BE941B]/20 transition-colors duration-300">
                <Award size={28} className="text-[#BE941B]" />
              </div>
              <h3 className="text-lg font-bold text-[#02173C] mb-2 uppercase tracking-wide">Qualité Certifiée</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Conformité aux standards internationaux</p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-[#BE941B]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#BE941B]/20 transition-colors duration-300">
                <Shield size={28} className="text-[#BE941B]" />
              </div>
              <h3 className="text-lg font-bold text-[#02173C] mb-2 uppercase tracking-wide">Protection Avancée</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Protection maximale de vos équipements</p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-[#BE941B]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#BE941B]/20 transition-colors duration-300">
                <Droplets size={28} className="text-[#BE941B]" />
              </div>
              <h3 className="text-lg font-bold text-[#02173C] mb-2 uppercase tracking-wide">Efficacité Prouvée</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Résultats mesurables et durables</p>
            </div>
          </div>

          {/* Back to Categories */}
          <div className="text-center mt-16">
            <Link
              to="/produits"
<<<<<<< HEAD
              className="group inline-flex items-center bg-white hover:bg-[#02173C] border-2 border-[#02173C] text-[#02173C] hover:text-white px-8 py-4 rounded-2xl transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <ChevronLeft size={20} className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Retour aux Catégories</span>
=======
              className="group inline-flex items-center space-x-2 bg-[#02173C] hover:bg-[#BE941B] text-white px-8 py-4 rounded-2xl transition-all duration-300 font-bold uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <ChevronLeft size={20} className="transform group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Retour aux catégories</span>
>>>>>>> origin/main
            </Link>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-[#02173C] to-[#02173C]/95">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            
            {/* Left - Benefits List */}
            <div className="text-white">
              <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-6 py-2 mb-8">
                <Award className="w-4 h-4 text-[#BE941B] mr-2" />
                <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Avantages Dinoil</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Pourquoi Choisir <span className="text-[#BE941B]">Dinoil ?</span>
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
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"
                  alt="Additifs Dinoil" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#BE941B]/20 to-transparent"></div>
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#BE941B]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-[#BE941B]" />
                  </div>
                  <p className="text-[#02173C] font-bold text-sm">Efficacité</p>
                  <p className="text-gray-600 text-xs">Résultats immédiats</p>
                </div>
              </div>
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
              Trouvez un revendeur Dinoil près de chez vous
=======
      {/* Find a Dealer Section */}
      <section className="py-20 bg-gradient-to-r from-[#02173C] to-[#02173C]/95">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-8 py-3 mb-8">
              <svg className="w-5 h-5 text-[#BE941B] mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Réseau National</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Réseau de <span className="text-[#BE941B]">Distribution</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#BE941B] via-white to-[#BE941B] mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Plus de 115 points de vente PROMOKAR dans toute la Tunisie
>>>>>>> origin/main
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
<<<<<<< HEAD
            
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
                      Additifs Dinoil disponibles partout
                    </p>
                  </div>
                  
                  {/* Tunisia Map Placeholder */}
                  <div className="aspect-square bg-[#BE941B]/10 rounded-2xl flex items-center justify-center border border-[#BE941B]/20 backdrop-blur-sm">
                    <div className="text-center">
                      <MapPin className="w-20 h-20 text-[#BE941B] mx-auto mb-4" />
=======
            {/* Left - Tunisia Map */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#BE941B]/10 to-[#02173C]/5 rounded-3xl p-8 border border-[#BE941B]/20 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#BE941B]/10 rounded-full blur-2xl"></div>

                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-6 py-2 mb-4">
                      <svg className="w-4 h-4 text-[#BE941B] mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">21 Gouvernorats</span>
                    </div>
                    <h3 className="text-2xl font-black mb-2 text-white">
                      Réseau PROMOKAR
                    </h3>
                    <p className="text-gray-300">
                      Présent dans toute la Tunisie
                    </p>
                  </div>

                  {/* Tunisia Map Placeholder */}
                  <div className="aspect-square bg-[#BE941B]/10 rounded-2xl flex items-center justify-center border border-[#BE941B]/20 backdrop-blur-sm">
                    <div className="text-center">
                      <svg className="w-20 h-20 text-[#BE941B] mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
>>>>>>> origin/main
                      <p className="text-white font-medium">Carte Interactive</p>
                      <p className="text-gray-300 text-sm">115+ Points de Vente</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

<<<<<<< HEAD
            {/* Right - Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-black text-[#02173C] mb-4">
                  Trouvez Votre Revendeur
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Notre réseau de distribution couvre l'ensemble du territoire tunisien avec 
                  des revendeurs qualifiés proposant la gamme complète d'additifs Dinoil.
                </p>
=======
            {/* Right - Dealer Information */}
            <div className="space-y-8 text-white">
              <div>
                <h3 className="text-2xl font-black mb-4">
                  Trouvez Votre Revendeur
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Les revendeurs PROMOKAR en Tunisie sont disponibles pour vous conseiller,
                  orienter et offrir les produits idéaux pour votre véhicule.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#BE941B]/5 to-[#02173C]/5 rounded-2xl p-6 border border-[#BE941B]/20">
                <h4 className="font-bold text-white mb-2">Services Disponibles</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-[#BE941B] mr-2" />
                    Conseil et orientation technique
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-[#BE941B] mr-2" />
                    Gamme complète PROMOKAR
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-[#BE941B] mr-2" />
                    Support après-vente
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-[#BE941B] hover:bg-white text-white hover:text-[#02173C] px-8 py-4 font-bold uppercase tracking-wide transition-all duration-300 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <span className="flex items-center justify-center">
                    Revendeurs PROMOKAR
                    <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </span>
                </button>
                <button className="group border-2 border-[#BE941B] hover:border-white text-[#BE941B] hover:text-white px-8 py-4 font-bold uppercase tracking-wide transition-all duration-300 rounded-2xl hover:bg-[#BE941B]/10 transform hover:-translate-y-1">
                  <span className="flex items-center justify-center">
                    Devenir Revendeur
                    <ChevronRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
>>>>>>> origin/main
              </div>
              
              <div className="bg-gradient-to-br from-[#BE941B]/5 to-[#02173C]/5 rounded-2xl p-6 border border-[#BE941B]/20">
                <h4 className="font-bold text-[#02173C] mb-4">Services Disponibles</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <ArrowRight size={16} className="text-[#BE941B] mr-3" />
                    Conseil technique personnalisé
                  </li>
                  <li className="flex items-center">
                    <ArrowRight size={16} className="text-[#BE941B] mr-3" />
                    Gamme complète d'additifs Dinoil
                  </li>
                  <li className="flex items-center">
                    <ArrowRight size={16} className="text-[#BE941B] mr-3" />
                    Installation et support technique
                  </li>
                  <li className="flex items-center">
                    <ArrowRight size={16} className="text-[#BE941B] mr-3" />
                    Garantie et service après-vente
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
