import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link, useParams, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight, Shield, Star, Zap, Award, Check, MapPin, Download, Phone } from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  categoryPath: string;
  image: string;
  description: string;
  detailedDescription: string;
  features: string[];
  benefits: string[];
  technicalSpecs?: Record<string, string>;
  applications: string[];
}

interface SimilarProduct {
  id: string;
  name: string;
  image: string;
  category: string;
}

export default function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const currentCategory = pathParts[2]; // Gets category from /produits/[category]/productId

  // Product data for all categories
  const productData: Record<string, Product> = {
    // Additifs
    "all-in-one-ultra-diesel": {
      id: "all-in-one-ultra-diesel",
      name: "ALL IN ONE ULTRA DIESEL",
      category: "Additifs",
      categoryPath: "additifs",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
      description: "Additif multifonction haute performance pour moteurs diesel",
      detailedDescription: "DINOIL® ALL IN ONE ULTRA DIESEL est un nettoyant curatif concentré multi-action complet du système d'injection Diesel qui s'utilise dans tous types de moteurs Diesel : injection indirecte ou directe, atmosphérique ou turbo, avec ou sans FAP (Filtre À Particules), avec ou sans SCR (Selective Catalyst Reduction), et utilisant du Gasoil Diesel ou Biodiesel.\n\nDINOIL® ALL IN ONE ULTRA DIESEL est un additif Diesel tout-en-un concentré compatible avec les Biodiesels B7 (Biodiesel 7%) et B10 (Biodiesel 10%).\n\nCet additif nettoie efficacement les dépôts et encrassements inhérents au fonctionnement dans les systèmes d'alimentation en gasoil du moteur grâce à ses propriétés curatives permettant d'éliminer tous types de dépôts.",
      features: [
        "Nettoie efficacement les injecteurs",
        "Élimine les dépôts dans les chambres de combustion", 
        "Facilite la régénération du FAP",
        "Compatible avec les biodiesels B7 et B10",
        "Améliore les performances du moteur",
        "Réduit les émissions polluantes"
      ],
      benefits: [
        "Restaure la puissance originale du moteur",
        "Améliore le rendement énergétique",
        "Réduit la consommation de carburant",
        "Prolonge la durée de vie du moteur"
      ],
      applications: [
        "Véhicules particuliers diesel",
        "Véhicules utilitaires légers", 
        "Poids lourds et autobus",
        "Machines agricoles",
        "Groupes électrogènes diesel"
      ]
    },
    "all-in-one-ultra-essence": {
      id: "all-in-one-ultra-essence",
      name: "ALL IN ONE ULTRA ESSENCE",
      category: "Additifs",
      categoryPath: "additifs",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
      description: "Additif multifonction premium pour moteurs essence",
      detailedDescription: "DINOIL® ALL IN ONE ULTRA ESSENCE est un additif essence multifonction haute performance spécialement développé pour les moteurs essence modernes. Sa formulation avancée nettoie, protège et optimise les performances de votre moteur.\n\nCompatible avec tous les types d'essence, y compris l'essence sans plomb et les biocarburants E10. Cet additif préventif et curatif maintient la propreté du système d'injection et des chambres de combustion.",
      features: [
        "Nettoie le système d'injection essence",
        "Élimine les dépôts carbonés",
        "Améliore l'indice d'octane",
        "Compatible essence sans plomb et E10",
        "Protection anti-corrosion",
        "Optimise la combustion"
      ],
      benefits: [
        "Améliore les performances du moteur",
        "Réduit la consommation d'essence",
        "Diminue les émissions polluantes",
        "Facilite les démarrages à froid"
      ],
      applications: [
        "Véhicules particuliers essence",
        "Motocyclettes 4 temps",
        "Véhicules utilitaires essence",
        "Tondeuses et petits moteurs",
        "Groupes électrogènes essence"
      ]
    },
    "cat-converter-cleaner": {
      id: "cat-converter-cleaner", 
      name: "CAT CONVERTER CLEANER",
      category: "Additifs",
      categoryPath: "additifs",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
      description: "Nettoyant catalyseur pour performance optimale",
      detailedDescription: "DINOIL® CAT CONVERTER CLEANER est un additif spécialement conçu pour nettoyer et décrasser le catalyseur de votre véhicule. Il élimine efficacement les dépôts qui peuvent réduire l'efficacité du catalyseur et améliore les performances du système d'échappement.\n\nCe produit utilise une technologie avancée pour dissoudre les dépôts de carbone et autres contaminants qui s'accumulent dans le catalyseur au fil du temps.",
      features: [
        "Nettoie le catalyseur en profondeur",
        "Élimine les dépôts carbonés et métalliques",
        "Améliore les performances d'échappement",
        "Réduit les émissions polluantes",
        "Compatible tous véhicules essence",
        "Formule non-corrosive"
      ],
      benefits: [
        "Restaure l'efficacité du catalyseur",
        "Améliore le passage au contrôle technique",
        "Optimise les performances moteur",
        "Prolonge la durée de vie du catalyseur"
      ],
      applications: [
        "Véhicules essence avec catalyseur",
        "Véhicules hybrides",
        "Motocyclettes catalysées",
        "Véhicules de collection",
        "Véhicules à fort kilométrage"
      ]
    },
    "intake-clean": {
      id: "intake-clean",
      name: "INTAKE CLEAN", 
      category: "Additifs",
      categoryPath: "additifs",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
      description: "Nettoyant collecteur d'admission professionnel",
      detailedDescription: "DINOIL® INTAKE CLEAN est un nettoyant professionnel spécialement formulé pour nettoyer le collecteur d'admission et les soupapes d'admission. Il élimine efficacement les dépôts de gomme, vernis et carbone qui s'accumulent dans le système d'admission.\n\nCe produit est particulièrement efficace sur les moteurs à injection directe où les dépôts sur les soupapes d'admission peuvent affecter significativement les performances.",
      features: [
        "Nettoie le collecteur d'admission",
        "Élimine les dépôts sur les soupapes",
        "Dissout gommes et vernis",
        "Compatible injection directe et indirecte",
        "Action rapide et efficace",
        "Formule professionnelle"
      ],
      benefits: [
        "Restaure le débit d'air optimal",
        "Améliore le rendement volumétrique",
        "Stabilise le ralenti",
        "Optimise la réponse à l'accélération"
      ],
      applications: [
        "Moteurs essence injection directe",
        "Moteurs turbocompressés",
        "Véhicules à fort kilométrage",
        "Moteurs de sport et performance",
        "Maintenance préventive professionnelle"
      ]
    },
    "octane-booster-gasoline": {
      id: "octane-booster-gasoline",
      name: "OCTANE BOOSTER GASOLINE",
      category: "Additifs", 
      categoryPath: "additifs",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
      description: "Amplificateur d'octane pour essence premium",
      detailedDescription: "DINOIL® OCTANE BOOSTER GASOLINE est un amplificateur d'indice d'octane haute performance qui améliore la résistance au cliquetis et optimise les performances des moteurs essence haute compression.\n\nCe produit augmente efficacement l'indice d'octane de l'essence standard, permettant une combustion plus efficace et des performances optimales, particulièrement sur les moteurs sportifs et haute performance.",
      features: [
        "Augmente l'indice d'octane jusqu'à 3 points",
        "Améliore la résistance au cliquetis",
        "Optimise la combustion",
        "Compatible essence sans plomb",
        "Formule concentrée haute performance",
        "Ne contient pas de plomb"
      ],
      benefits: [
        "Libère la puissance maximale du moteur",
        "Améliore les performances d'accélération",
        "Réduit les risques de cliquetis",
        "Optimise l'avance à l'allumage"
      ],
      applications: [
        "Moteurs sportifs haute performance",
        "Véhicules de compétition",
        "Moteurs turbocompressés",
        "Véhicules de collection",
        "Moteurs haute compression"
      ]
    },
    "system-keep-clean-diesel": {
      id: "system-keep-clean-diesel",
      name: "SYSTEM KEEP CLEAN DIESEL",
      category: "Additifs",
      categoryPath: "additifs", 
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
      description: "Système de nettoyage complet diesel",
      detailedDescription: "DINOIL® SYSTEM KEEP CLEAN DIESEL est un additif préventif qui maintient la propreté du système d'injection diesel et prévient la formation de nouveaux dépôts. Utilisé régulièrement, il assure un fonctionnement optimal du moteur diesel.\n\nSa formulation préventive empêche l'accumulation de dépôts dans les injecteurs, pompe à injection et circuit d'alimentation, garantissant des performances constantes et une durée de vie prolongée du système d'injection.",
      features: [
        "Prévient la formation de dépôts",
        "Maintient la propreté des injecteurs",
        "Protège le système d'injection",
        "Compatible tous moteurs diesel",
        "Formule préventive longue durée",
        "Améliore la pulvérisation du gasoil"
      ],
      benefits: [
        "Maintient les performances optimales",
        "Prévient les problèmes d'injection",
        "Réduit les coûts de maintenance",
        "Prolonge la durée de vie du moteur"
      ],
      applications: [
        "Maintenance préventive régulière",
        "Véhicules diesel modernes",
        "Systèmes common rail",
        "Véhicules utilitaires",
        "Usage professionnel intensif"
      ]
    },
    "system-keep-clean-gasoline": {
      id: "system-keep-clean-gasoline",
      name: "SYSTEM KEEP CLEAN GASOLINE", 
      category: "Additifs",
      categoryPath: "additifs",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
      description: "Système de nettoyage avancé pour essence",
      detailedDescription: "DINOIL® SYSTEM KEEP CLEAN GASOLINE est un additif préventif avancé qui maintient la propreté du système d'injection essence et optimise les performances du moteur. Sa formulation préventive empêche l'accumulation de dépôts.\n\nUtilisé régulièrement, cet additif maintient l'efficacité du système d'injection, assure une pulvérisation optimale de l'essence et prévient les problèmes liés à l'encrassement.",
      features: [
        "Maintient la propreté du système d'injection",
        "Prévient les dépôts sur les injecteurs",
        "Optimise la pulvérisation de l'essence",
        "Compatible essence et biocarburants",
        "Action préventive continue",
        "Stabilise l'essence stockée"
      ],
      benefits: [
        "Maintient les performances du moteur",
        "Assure un ralenti stable",
        "Prévient les problèmes de démarrage",
        "Optimise la consommation"
      ],
      applications: [
        "Usage préventif régulier",
        "Véhicules essence modernes",
        "Injection directe et indirecte",
        "Véhicules peu utilisés",
        "Stockage longue durée"
      ]
    },
    "transmission-clean": {
      id: "transmission-clean",
      name: "TRANSMISSION CLEAN",
      category: "Additifs",
      categoryPath: "additifs",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
      description: "Nettoyant transmission automatique et manuelle", 
      detailedDescription: "DINOIL® TRANSMISSION CLEAN est un nettoyant spécialement développé pour les transmissions automatiques et manuelles. Il élimine efficacement les dépôts, gommes et vernis qui s'accumulent dans le système de transmission.\n\nCe produit revitalise les joints et améliore les performances de changement de vitesse, tout en prolongeant la durée de vie de l'huile de transmission.",
      features: [
        "Nettoie transmissions automatiques et manuelles",
        "Élimine dépôts et vernis",
        "Revitalise les joints d'étanchéité",
        "Améliore la fluidité des changements",
        "Compatible tous types de transmissions",
        "Restaure les performances d'origine"
      ],
      benefits: [
        "Améliore la qualité des changements de vitesse",
        "Réduit les vibrations et à-coups",
        "Prolonge la durée de vie de la transmission",
        "Restaure l'étanchéité du système"
      ],
      applications: [
        "Transmissions automatiques",
        "Boîtes de vitesses manuelles",
        "Convertisseurs de couple",
        "Différentiels",
        "Maintenance préventive"
      ]
    },
    "valve-lifter-stop-noise": {
      id: "valve-lifter-stop-noise",
      name: "VALVE LIFTER STOP NOISE",
      category: "Additifs",
      categoryPath: "additifs",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
      description: "Solution anti-bruit des poussoirs hydrauliques",
      detailedDescription: "DINOIL® VALVE LIFTER STOP NOISE est une solution spécialement formulée pour éliminer les bruits de poussoirs hydrauliques et restaurer leur fonctionnement silencieux. Ce produit agit rapidement pour résoudre les problèmes de claquements moteur.\n\nSa formulation avancée nettoie les poussoirs hydrauliques encrassés, restaure leur fonctionnement optimal et élimine les bruits parasites au démarrage et à chaud.",
      features: [
        "Élimine les bruits de poussoirs",
        "Nettoie les poussoirs hydrauliques", 
        "Restaure le fonctionnement silencieux",
        "Action rapide et efficace",
        "Compatible tous moteurs",
        "Formule non-abrasive"
      ],
      benefits: [
        "Supprime les claquements moteur",
        "Améliore le confort acoustique",
        "Restaure les performances d'origine",
        "Évite les réparations coûteuses"
      ],
      applications: [
        "Moteurs avec poussoirs hydrauliques",
        "Véhicules à fort kilométrage",
        "Problèmes de bruits moteur",
        "Maintenance corrective",
        "Restauration de véhicules"
      ]
    }
  };

  // Get similar products based on category
  const getSimilarProducts = (currentCategory: string, currentProductId: string): SimilarProduct[] => {
    const categoryProducts = Object.values(productData).filter(p => p.categoryPath === currentCategory && p.id !== currentProductId);
    return categoryProducts.slice(0, 4).map(p => ({
      id: p.id,
      name: p.name,
      image: p.image,
      category: p.categoryPath
    }));
  };

  const product = productData[productId || ""];
  const similarProducts = product ? getSimilarProducts(currentCategory, productId || "") : [];

  // Get category display name
  const getCategoryDisplayName = (categoryPath: string): string => {
    const categoryNames: Record<string, string> = {
      'additifs': 'Additifs',
      'entretien': 'Entretien',
      'automobile': 'Automobile',
      'moto': 'Moto',
      'industrie': 'Industrie',
      'marine': 'Marine'
    };
    return categoryNames[categoryPath] || categoryPath;
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="py-20 text-center">
          <h1 className="text-4xl font-bold text-[#02173C] mb-4">Produit non trouvé</h1>
          <Link to={`/produits/${currentCategory}`} className="text-[#BE941B] hover:underline">
            Retour aux {getCategoryDisplayName(currentCategory)}
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#02173C] to-[#02173C]/90 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80" 
            alt="Dinoil Products"
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
            <Link to={`/produits/${currentCategory}`} className="text-gray-300 hover:text-white transition-colors">
              {getCategoryDisplayName(currentCategory)}
            </Link>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-[#BE941B] font-medium">{product.name}</span>
          </nav>

          <div className="text-center">
            <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-8 py-3 mb-8">
              <Award className="w-5 h-5 text-[#BE941B] mr-2" />
              <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Dinoil {product.category}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              {product.name}
            </h1>
            
            <div className="w-32 h-1 bg-gradient-to-r from-[#BE941B] via-white to-[#BE941B] mx-auto mb-8 rounded-full"></div>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </section>

      {/* Product Information Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
            
            {/* Product Image */}
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-[#02173C] to-[#02173C]/90 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#BE941B]/10 rounded-full blur-2xl"></div>
                
                <div className="relative z-10 text-center mb-8">
                  <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-6 py-2 mb-4">
                    <Star className="w-4 h-4 text-[#BE941B] mr-2" />
                    <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Dinoil Premium</span>
                  </div>
                  <h3 className="text-xl font-black mb-2">
                    {product.name}
                  </h3>
                </div>
                
                <div className="aspect-square bg-white/10 rounded-2xl flex items-center justify-center border border-[#BE941B]/20 backdrop-blur-sm">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-[#02173C] mb-6">
                  Description Produit
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#BE941B] to-[#02173C] mb-6 rounded-full"></div>
              </div>

              {/* Detailed Description */}
              <div className="space-y-4">
                {product.detailedDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Features */}
              {product.features && (
                <div className="bg-gradient-to-br from-[#BE941B]/5 to-[#02173C]/5 rounded-2xl p-6 border border-[#BE941B]/20">
                  <h3 className="text-xl font-black text-[#02173C] mb-4 flex items-center">
                    <Shield className="w-5 h-5 text-[#BE941B] mr-2" />
                    Caractéristiques Techniques
                  </h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-5 h-5 bg-[#BE941B] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <Check size={12} className="text-white" />
                        </div>
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="group bg-[#BE941B] hover:bg-[#02173C] px-8 py-4 text-white transition-all duration-300 font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                >
                  <span className="flex items-center justify-center">
                    <Phone size={18} className="mr-2" />
                    Nous Contacter
                  </span>
                </Link>
                <button className="group border-2 border-[#02173C] text-[#02173C] hover:bg-[#02173C] hover:text-white px-8 py-4 transition-all duration-300 font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <span className="flex items-center justify-center">
                    <Download size={18} className="mr-2" />
                    Fiche Technique
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Applications Section */}
      <section className="py-20 bg-gradient-to-r from-[#02173C] to-[#02173C]/95">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            
            {/* Benefits */}
            {product.benefits && (
              <div className="text-white">
                <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-6 py-2 mb-8">
                  <Zap className="w-4 h-4 text-[#BE941B] mr-2" />
                  <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Avantages</span>
                </div>
                
                <h3 className="text-3xl font-black mb-6 leading-tight">
                  Bénéfices <span className="text-[#BE941B]">Produit</span>
                </h3>
                
                <div className="w-24 h-1 bg-[#BE941B] mb-8 rounded-full"></div>
                
                <div className="space-y-4">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-[#BE941B] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="text-gray-300 leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Applications */}
            {product.applications && (
              <div className="text-white">
                <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-6 py-2 mb-8">
                  <Star className="w-4 h-4 text-[#BE941B] mr-2" />
                  <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Applications</span>
                </div>
                
                <h3 className="text-3xl font-black mb-6 leading-tight">
                  Domaines <span className="text-[#BE941B]">d'Usage</span>
                </h3>
                
                <div className="w-24 h-1 bg-[#BE941B] mb-8 rounded-full"></div>
                
                <div className="space-y-4">
                  {product.applications.map((application, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-[#BE941B] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <ArrowRight size={14} className="text-white" />
                      </div>
                      <span className="text-gray-300 leading-relaxed">{application}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Similar Products Section */}
      {similarProducts.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-white to-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-[#02173C] mb-6">
                Produits <span className="bg-gradient-to-r from-[#BE941B] to-[#02173C] bg-clip-text text-transparent">Similaires</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#BE941B] to-[#02173C] mx-auto mb-6 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Découvrez d'autres produits de la gamme {getCategoryDisplayName(currentCategory)}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {similarProducts.map((similarProduct) => (
                <Link
                  key={similarProduct.id}
                  to={`/produits/${currentCategory}/${similarProduct.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-100">
                    <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                      <img 
                        src={similarProduct.image}
                        alt={similarProduct.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#02173C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-black text-[#02173C] group-hover:text-[#BE941B] transition-colors duration-300 uppercase tracking-wide text-center leading-tight">
                        {similarProduct.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Find Dealer Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#02173C] mb-6">
              Réseau de <span className="bg-gradient-to-r from-[#BE941B] to-[#02173C] bg-clip-text text-transparent">Distribution</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#BE941B] to-[#02173C] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trouvez un revendeur PROMOKAR près de chez vous pour vous procurer {product.name}
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
                      Plus de 115 points de vente
                    </p>
                  </div>
                  
                  {/* Tunisia Map Placeholder */}
                  <div className="aspect-square bg-[#BE941B]/10 rounded-2xl flex items-center justify-center border border-[#BE941B]/20 backdrop-blur-sm">
                    <div className="text-center">
                      <MapPin className="w-20 h-20 text-[#BE941B] mx-auto mb-4" />
                      <p className="text-white font-medium">Carte Interactive</p>
                      <p className="text-gray-300 text-sm">Tunisie entière</p>
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
                  Notre réseau de distribution couvre l'ensemble du territoire tunisien. 
                  Nos revendeurs qualifiés sont à votre disposition pour vous conseiller 
                  et vous fournir {product.name}.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-[#BE941B]/5 to-[#02173C]/5 rounded-2xl p-6 border border-[#BE941B]/20">
                <h4 className="font-bold text-[#02173C] mb-4">Services Disponibles</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <Check size={16} className="text-[#BE941B] mr-3" />
                    Conseil technique personnalisé
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="text-[#BE941B] mr-3" />
                    Stock permanent disponible
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="text-[#BE941B] mr-3" />
                    Formation et support technique
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="text-[#BE941B] mr-3" />
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

      {/* Back Navigation */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <Link
            to={`/produits/${currentCategory}`}
            className="group inline-flex items-center bg-white hover:bg-[#02173C] border-2 border-[#02173C] text-[#02173C] hover:text-white px-8 py-4 rounded-2xl transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <ChevronLeft size={20} className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Retour aux {getCategoryDisplayName(currentCategory)}</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
