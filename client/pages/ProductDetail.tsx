import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link, useParams, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  categoryPath: string;
  image: string;
  description: string;
  detailedDescription: string;
  features: string[];
  technicalSpecs?: Record<string, string>;
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
      description: "Nettoyant curatif concentré multi-action complet",
      detailedDescription: "MOTUL® ALL IN ONE ULTRA DIESEL est un nettoyant curatif concentré multi-action complet du système d'injection Diesel qui s'utilise dans tous types de moteurs Diesel : injection indirecte ou directe, atmosphérique ou turbo, avec ou sans FAP (Filtre À Particules), avec ou sans SCR (Selective Catalyst Reduction), et utilisant du Gasoil Diesel ou Biodiesel.\n\nMOTUL® ALL IN ONE ULTRA DIESEL est un additif Diesel tout-en-un concentré compatible avec les Biodiesels B7 (Biodiesel 7%) et B10 (Biodiesel 10%).\n\nMOTUL® ALL IN ONE ULTRA DIESEL nettoie efficacement les dépôts et encrassements inhérents au fonctionnement dans les systèmes d'alimentation en gasoil du moteur grâce à ses propriétés curatives permettant d'éliminer tous types de dépôts curatifs.",
      features: [
        "Nettoie efficacement les injecteurs",
        "Élimine les dépôts dans les chambres de combustion",
        "Facilite la régénération du FAP",
        "Compatible avec les biodiesels B7 et B10",
        "Améliore les performances du moteur",
        "Réduit les émissions polluantes"
      ]
    },
    "cat-converter-cleaner": {
      id: "cat-converter-cleaner",
      name: "CAT CONVERTER CLEANER",
      category: "Additifs",
      categoryPath: "additifs",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
      description: "Nettoyant pour catalyseur",
      detailedDescription: "MOTUL® CAT CONVERTER CLEANER est un additif conçu pour nettoyer et décrasser le catalyseur de votre véhicule. Il élimine efficacement les dépôts qui peuvent réduire l'efficacité du catalyseur et améliore les performances du système d'échappement.",
      features: [
        "Nettoie le catalyseur en profondeur",
        "Élimine les dépôts carbonés",
        "Améliore les performances d'échappement",
        "Réduit les émissions polluantes",
        "Compatible tous véhicules essence",
        "Facile d'utilisation"
      ]
    },
    // Entretien
    "engine-clean": {
      id: "engine-clean",
      name: "ENGINE CLEAN",
      category: "Entretien",
      categoryPath: "entretien",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
      description: "Nettoyant moteur haute performance",
      detailedDescription: "MOTUL® ENGINE CLEAN est un nettoyant moteur interne haute performance qui élimine efficacement tous les dépôts formés dans le moteur. Il se mélange à l'huile moteur usagée avant la vidange pour dissoudre les gommes et vernis.",
      features: [
        "Nettoie l'intérieur du moteur",
        "Élimine les dépôts et gommes",
        "Améliore la circulation de l'huile",
        "Prolonge la durée de vie du moteur",
        "Compatible tous types de moteurs",
        "Utilisation simple avant vidange"
      ]
    },
    "brake-clean": {
      id: "brake-clean",
      name: "BRAKE CLEAN",
      category: "Entretien",
      categoryPath: "entretien",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
      description: "Nettoyant freins et embrayage",
      detailedDescription: "MOTUL® BRAKE CLEAN est un dégraissant puissant spécialement formulé pour nettoyer les systèmes de freinage et d'embrayage. Il élimine efficacement l'huile, la graisse et les poussières de frein.",
      features: [
        "Dégraisse les systèmes de freinage",
        "Élimine les poussières de frein",
        "Séchage rapide sans résidu",
        "Compatible tous types de freins",
        "Améliore l'efficacité de freinage",
        "Utilisation professionnelle"
      ]
    },
    // Automobile
    "8100-x-cess": {
      id: "8100-x-cess",
      name: "8100 X-CESS",
      category: "Automobile",
      categoryPath: "automobile",
      image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=400&q=80",
      description: "Huile moteur 100% synthétique 5W40",
      detailedDescription: "MOTUL® 8100 X-CESS 5W-40 est une huile moteur 100% synthétique haute performance développée pour répondre aux exigences des moteurs essence et diesel les plus récents. Sa formulation avancée offre une protection exceptionnelle contre l'usure.",
      features: [
        "100% synthétique haute performance",
        "Protection exceptionnelle contre l'usure",
        "Excellent comportement à froid",
        "Stabilité thermique remarquable",
        "Compatible essence et diesel",
        "Intervalles de vidange prolongés"
      ]
    },
    "gear-300": {
      id: "gear-300",
      name: "GEAR 300",
      category: "Automobile",
      categoryPath: "automobile",
      image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=400&q=80",
      description: "Huile transmission manuelle 75W90",
      detailedDescription: "MOTUL® GEAR 300 75W-90 est une huile de transmission 100% synthétique pour boîtes de vitesses manuelles et ponts autobloquants. Elle offre une protection optimale des engrenages même dans les conditions les plus sévères.",
      features: [
        "100% synthétique pour transmissions",
        "Protection optimale des engrenages",
        "Résistance aux conditions extrêmes",
        "Fluidité excellente à froid",
        "Compatible différentiels autobloquants",
        "Durabilité exceptionnelle"
      ]
    },
    // Moto
    "7100-4t-10w40": {
      id: "7100-4t-10w40",
      name: "7100 4T 10W40",
      category: "Moto",
      categoryPath: "moto",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
      description: "Huile moteur 4T 100% synthétique",
      detailedDescription: "MOTUL® 7100 4T 10W-40 est une huile moteur 100% synthétique spécialement développée pour les moteurs moto 4 temps haute performance. Elle offre une protection maximale et des performances optimales.",
      features: [
        "100% synthétique pour motos 4T",
        "Protection maximale du moteur",
        "Performances optimales haute vitesse",
        "R��sistance aux hautes températures",
        "Compatible embrayage bain d'huile",
        "Homologations constructeurs"
      ]
    },
    "chain-lube-road": {
      id: "chain-lube-road",
      name: "CHAIN LUBE ROAD",
      category: "Moto",
      categoryPath: "moto",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
      description: "Lubrifiant chaîne route",
      detailedDescription: "MOTUL® CHAIN LUBE ROAD est un lubrifiant spécialement conçu pour les chaînes de transmission des motos utilisées sur route. Sa formule adhérente résiste à la projection et assure une lubrification durable.",
      features: [
        "Formule adhérente longue durée",
        "Résistance à la projection",
        "Protection anti-usure optimale",
        "Compatible joints X-Ring/O-Ring",
        "Application facile en spray",
        "Idéal usage route"
      ]
    },
    // Industrie
    "tekma-mega-x-15w40": {
      id: "tekma-mega-x-15w40",
      name: "TEKMA MEGA X 15W40",
      category: "Industrie",
      categoryPath: "industrie",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400&q=80",
      description: "Huile moteur poids lourds",
      detailedDescription: "MOTUL® TEKMA MEGA X 15W-40 est une huile moteur haute performance pour véhicules industriels et poids lourds. Elle offre une protection exceptionnelle et des intervalles de vidange prolongés.",
      features: [
        "Haute performance poids lourds",
        "Protection moteur exceptionnelle",
        "Intervalles de vidange étendus",
        "Résistance aux conditions sévères",
        "Compatible moteurs Euro 6",
        "Économies d'exploitation"
      ]
    },
    "hydraulic-hm-46": {
      id: "hydraulic-hm-46",
      name: "HYDRAULIC HM 46",
      category: "Industrie",
      categoryPath: "industrie",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400&q=80",
      description: "Huile hydraulique industrielle",
      detailedDescription: "MOTUL® HYDRAULIC HM 46 est une huile hydraulique industrielle haute qualité formulée pour les systèmes hydrauliques industriels fonctionnant dans des conditions normales à sévères.",
      features: [
        "Haute qualité industrielle",
        "Protection anti-usure optimale",
        "Stabilité thermique excellente",
        "Résistance à l'oxydation",
        "Compatible tous systèmes hydrauliques",
        "Longue durée de service"
      ]
    },
    // Marine
    "outboard-tech-4t-10w30": {
      id: "outboard-tech-4t-10w30",
      name: "OUTBOARD TECH 4T 10W30",
      category: "Marine",
      categoryPath: "marine",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80",
      description: "Huile moteur hors-bord 4 temps",
      detailedDescription: "MOTUL® OUTBOARD TECH 4T 10W-30 est une huile moteur spécialement formulée pour les moteurs hors-bord 4 temps. Elle résiste à la corrosion marine et offre une protection optimale en environnement marin.",
      features: [
        "Spécial moteurs hors-bord 4T",
        "Résistance corrosion marine",
        "Protection optimale eau salée",
        "Stabilité thermique marine",
        "Compatible tous constructeurs",
        "Durabilité environnement marin"
      ]
    },
    "grease-marine-tech": {
      id: "grease-marine-tech",
      name: "GREASE MARINE TECH",
      category: "Marine",
      categoryPath: "marine",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80",
      description: "Graisse marine résistante à l'eau",
      detailedDescription: "MOTUL® GREASE MARINE TECH est une graisse marine haute performance spécialement conçue pour résister à l'eau de mer et protéger les mécanismes marins contre la corrosion.",
      features: [
        "Haute résistance eau de mer",
        "Protection anticorrosion marine",
        "Adhérence exceptionnelle",
        "Résistance au délavage",
        "Compatible tous mécanismes marins",
        "Longue durée de service"
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Produit non trouvé</h1>
          <Link to={`/produits/${currentCategory}`} className="text-cmca-red hover:underline">
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
            <Link to={`/produits/${currentCategory}`} className="text-gray-300 hover:text-white transition-colors">
              {getCategoryDisplayName(currentCategory)}
            </Link>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-white">{product.name}</span>
          </nav>

          <h1 className="text-5xl md:text-6xl font-bold">
            {product.name}
          </h1>
        </div>
      </section>

      {/* Product Information Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="bg-cmca-red text-white px-6 py-2 inline-block mb-8">
              <span className="font-bold text-lg">MOTUL</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Informations
            </h2>
            <div className="w-16 h-1 bg-cmca-red mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Product Image */}
            <div className="order-2 lg:order-1">
              <div className="border-2 border-cmca-red p-8 bg-black">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full max-w-md mx-auto"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {product.name}
                </h3>
                <p className="text-lg text-gray-300 mb-6">
                  {product.description}
                </p>
              </div>

              {/* Detailed Description */}
              <div className="space-y-4">
                {product.detailedDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-300 leading-relaxed text-sm">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Features */}
              {product.features && (
                <div className="mt-8">
                  <h4 className="text-xl font-bold text-white mb-4">
                    Caractéristiques principales :
                  </h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3 text-gray-300">
                        <div className="w-2 h-2 bg-cmca-red rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link 
                  to="/contact"
                  className="bg-cmca-red text-white px-8 py-3 font-medium uppercase tracking-wide hover:bg-opacity-90 transition-colors text-center"
                >
                  Contact
                </Link>
                <button className="border-2 border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 font-medium uppercase tracking-wide">
                  Télécharger la fiche
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Products Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Produits similaires
            </h2>
            <div className="w-16 h-1 bg-cmca-red"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {similarProducts.map((similarProduct) => (
              <Link
                key={similarProduct.id}
                to={`/produits/${currentCategory}/${similarProduct.id}`}
                className="group"
              >
                <div className="border-2 border-cmca-red p-4 bg-black hover:border-white transition-colors duration-300">
                  <div className="aspect-square mb-4 flex items-center justify-center">
                    <img 
                      src={similarProduct.image}
                      alt={similarProduct.name}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-white font-bold text-sm text-center leading-tight">
                    {similarProduct.name}
                  </h3>
                </div>
              </Link>
            ))}
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
                  Revendeurs Flex
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <section className="py-8 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <Link
            to={`/produits/${currentCategory}`}
            className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 font-medium uppercase tracking-wide"
          >
            <ChevronLeft size={20} />
            <span>Retour aux {getCategoryDisplayName(currentCategory)}</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
