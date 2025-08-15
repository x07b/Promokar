import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link, useParams, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight, Trophy, Shield, Star, Award } from "lucide-react";

export default function ProductDetail() {
  const { productId } = useParams();
  const location = useLocation();

  // Determine if this is a moto or vehicules product based on URL
  const isMotoProduct = location.pathname.includes('/moto/');
  const categoryPath = isMotoProduct ? '/produits/competition-line/moto' : '/produits/competition-line/vehicules';
  const categoryName = isMotoProduct ? 'Competition Line - Moto' : 'Competition Line - Véhicules';

  // Product data - this could be moved to a context or external data source later
  const productData: { [key: string]: any } = {
    "dinoil-daytona-5w50": {
      name: "DINOIL DAYTONA 5W/50",
      image: "https://cdn.builder.io/api/v1/image/assets%2F1ca0949e89764f508ab3c74fe08ee0a0%2F1e27fc02201c4e54a6f85d1d9b954d5b?format=webp&width=800",
      description: "DINOIL DAYTONA 5W/50 est conçu avec une formulation unique pour fournir une protection maximale du moteur. Elle est entièrement compatible avec toutes les autres huiles synthétiques conventionnelles. DINOIL DAYTONA 5W/50 a été testée dans les conditions de charge les plus sévères, dans les moteurs de compétition et pour répondre aux demandes des pilotes les plus exigeants. Il répond aux exigences OEM les plus strictes.",
      category: "Competition Line - Véhicules",
      features: [
        "Protection maximale du moteur",
        "Compatible avec toutes les huiles synthétiques",
        "Testée dans des conditions de charge sévères",
        "Conçue pour les moteurs de compétition",
        "Répond aux exigences OEM les plus strictes"
      ]
    },
    "dinoil-daytona-10w60": {
      name: "DINOIL DAYTONA 10W/60",
      image: "https://cdn.builder.io/api/v1/image/assets%2F1ca0949e89764f508ab3c74fe08ee0a0%2Fe9cc2c3fa4f04081b10cac03dba87a1b?format=webp&width=800",
      description: "DINOIL DAYTONA 10W/60 est une huile moteur entièrement synthétique, à faible frottement, développée avec un mélange de base PAO/ESTERE. Conçu spécifiquement pour la course et la compétition hors route. DINOIL 10W/60 DAYTONA est un lubrifiant adapté à une large gamme de moteurs modernes aux performances sportives. Ce produit a été testé dans des moteurs de course, dans les conditions les plus sévères, pour répondre aux demandes des pilotes les plus exigeants. Il répond aux exigences OEM les plus strictes.",
      category: "Competition Line - Véhicules",
      features: [
        "Huile moteur entièrement synthétique",
        "Formulation à faible frottement PAO/ESTERE",
        "Conçu pour la course et compétition hors route",
        "Adapté aux moteurs modernes sportifs",
        "Testé dans des conditions de course sévères",
        "Répond aux exigences OEM les plus strictes"
      ]
    },
    "dinoil-daytona-15w50": {
      name: "DINOIL DAYTONA 15W/50",
      image: "https://cdn.builder.io/api/v1/image/assets%2F1ca0949e89764f508ab3c74fe08ee0a0%2F76fadbd49e8648dea32fdbc1c961a04d?format=webp&width=800",
      description: "DINOIL DAYTONA 15W/50 est tout simplement l'une des meilleures huiles de haute qualité. C'est un lubrifiant développé à partir d'un mélange de bases PAO/ESTER entièrement synthétiques et créé pour répondre aux besoins des conducteurs les plus exigeants. Il peut être utilisé dans de nombreuses voitures modernes et convient particulièrement aux moteurs de course à haute performance. Il s'agit d'un lubrifiant extrêmement résistant à l'oxydation pour les pièces mobiles du moteur travaillant dans les conditions les plus extrêmes. Il répond aux exigences les plus strictes des OEM.",
      category: "Competition Line - Véhicules",
      features: [
        "L'une des meilleures huiles de haute qualité",
        "Développé à partir de bases PAO/ESTER entièrement synthétiques",
        "Créé pour les conducteurs les plus exigeants",
        "Convient aux moteurs de course à haute performance",
        "Extrêmement résistant à l'oxydation",
        "Adapté aux conditions les plus extrêmes",
        "Répond aux exigences strictes des OEM"
      ]
    },
    "dinoil-daytona-20w60": {
      name: "DINOIL DAYTONA 20W/60",
      image: "https://cdn.builder.io/api/v1/image/assets%2F1ca0949e89764f508ab3c74fe08ee0a0%2F1fbe9cbad46b487a91095e40abe8a977?format=webp&width=800",
      description: "DINOIL DAYTONA 20W/60 est un lubrifiant entièrement synthétique, développé à partir de bases PAO et mélangé à des additifs de haute technologie de pointe. Créé pour satisfaire les conducteurs les plus exigeants. Il peut être utilisé dans de nombreuses voitures modernes, et est particulièrement adapté aux moteurs de haute performance et de course. Ce lubrifiant assure une protection même dans les conditions les plus extrêmes. Il répond aux exigences OEM les plus strictes.",
      category: "Competition Line - Véhicules",
      features: [
        "Lubrifiant entièrement synthétique",
        "Développé à partir de bases PAO de haute qualité",
        "Mélangé à des additifs de haute technologie",
        "Créé pour les conducteurs les plus exigeants",
        "Adapté aux moteurs de haute performance et de course",
        "Assure une protection dans les conditions les plus extrêmes",
        "Répond aux exigences OEM les plus strictes"
      ]
    },
    "dinoil-gp-competition-5w40": {
      name: "DINOIL GP COMPETITION 5W/40",
      image: "https://cdn.builder.io/api/v1/image/assets%2F1ca0949e89764f508ab3c74fe08ee0a0%2Fc958531a9c3a40eba552479b5bbdfdaf?format=webp&width=800",
      description: "DINOIL GP COMPETITION 4T -5W/40, lubrifiant de course haute performance 100% synthétique. Formulé avec des bases PAO et mélangé avec des additifs de pointe. Convient à tous les moteurs 4T qui supportent des charges et des vitesses variables dans des conditions de course. Convient à toutes les motos et quads. Recommandé pour les moteurs de course ou les moteurs soumis à une utilisation intensive. Assure une excellente lubrification, tant à très basse qu'à très haute température. Cette huile convient également pour la lubrification des moteurs à embrayage humide. Réduit la friction des pièces mobiles. Répond aux exigences les plus strictes des OEM.",
      category: "Competition Line - Moto",
      features: [
        "Lubrifiant de course 100% synthétique",
        "Formulé avec des bases PAO et additifs de pointe",
        "Convient à tous les moteurs 4T",
        "Adapté aux charges et vitesses variables de course",
        "Convient à toutes les motos et quads",
        "Recommandé pour moteurs de course et utilisation intensive",
        "Excellente lubrification à basse et haute température",
        "Compatible avec moteurs à embrayage humide",
        "Réduit la friction des pièces mobiles",
        "Répond aux exigences strictes des OEM"
      ]
    },
    "dinoil-gp-competition-10w60": {
      name: "DINOIL GP COMPETITION 10W/60",
      image: "https://cdn.builder.io/api/v1/image/assets%2F1ca0949e89764f508ab3c74fe08ee0a0%2F8429a284dcb541d798effcbb2ad6208f?format=webp&width=800",
      description: "DINOIL GP COMPETITION 4T -10W/60, lubrifiant de compétition moto haute performance 100% synthétique. Formulé à partir de bases synthétiques Tri-ester et renforcé par des additifs de pointe, qui assurent une lubrification parfaite dans les conditions de course de moto les plus sévères et les plus exigeantes. Cette huile convient également pour la lubrification des moteurs à embrayage humide. Il assure une excellente lubrification, tant à très basse qu'à très haute température. Il réduit la friction des pièces mobiles. Des additifs détergents et dispersants rigoureux assurent la propreté du moteur et le maintiennent exempt de dépôts. Faible consommation d'huile, même à des charges/régimes élevés. Prolonge la durée de vie du moteur et du convertisseur catalytique. Répond aux exigences OEM les plus strictes.",
      category: "Competition Line - Moto",
      features: [
        "Lubrifiant de compétition moto 100% synthétique",
        "Formulé à partir de bases synthétiques Tri-ester",
        "Renforcé par des additifs de pointe",
        "Lubrification parfaite dans conditions de course sévères",
        "Compatible avec moteurs à embrayage humide",
        "Excellente lubrification à basse et haute température",
        "Réduit la friction des pièces mobiles",
        "Additifs détergents et dispersants rigoureux",
        "Maintient le moteur exempt de dépôts",
        "Faible consommation d'huile à charges/régimes élevés",
        "Prolonge la durée de vie du moteur et convertisseur catalytique",
        "Répond aux exigences OEM les plus strictes"
      ]
    }
  };

  const product = productData[productId || ""];

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-bold text-[#02173C] mb-4">Produit non trouvé</h1>
          <Link to="/produits" className="text-[#BE941B] hover:underline">
            Retour aux produits
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
            alt="Product Background"
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
            <Link to={categoryPath} className="text-gray-300 hover:text-white transition-colors">
              {categoryName}
            </Link>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-[#BE941B] font-medium">{product.name}</span>
          </nav>

          <div className="text-center">
            <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-8 py-3 mb-8">
              <Trophy className="w-5 h-5 text-[#BE941B] mr-2" />
              <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Competition Line</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-[#BE941B] to-white bg-clip-text text-transparent">
                {product.name}
              </span>
            </h1>
            
            <div className="w-32 h-1 bg-gradient-to-r from-[#BE941B] via-white to-[#BE941B] mx-auto mb-8 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">

            {/* Product Image - Sticky */}
            <div className="relative">
              <div className="sticky top-24 z-10">
                <div className="aspect-square relative rounded-3xl bg-white shadow-2xl p-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02173C]/5 to-transparent rounded-3xl"></div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-6 -right-6 bg-[#BE941B] text-white rounded-2xl p-4 shadow-2xl">
                  <div className="text-center">
                    <Trophy className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-bold text-sm">Premium</p>
                    <p className="text-xs opacity-90">Quality</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Information */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center bg-[#BE941B]/10 border border-[#BE941B]/20 rounded-full px-6 py-2 mb-6">
                  <Shield className="w-4 h-4 text-[#BE941B] mr-2" />
                  <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Haute Performance</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-black text-[#02173C] mb-6 leading-tight">
                  Description du Produit
                </h2>
                
                <div className="w-24 h-1 bg-[#BE941B] mb-6 rounded-full"></div>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>
              </div>

              {/* Features List */}
              <div>
                <h3 className="text-xl font-bold text-[#02173C] mb-4">Caractéristiques Principales</h3>
                <div className="space-y-3">
                  {product.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-[#BE941B] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <Star size={14} className="text-white" />
                      </div>
                      <span className="text-gray-600 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="pt-8">
                <div className="bg-gradient-to-br from-[#BE941B]/5 to-[#02173C]/5 rounded-2xl p-6 border border-[#BE941B]/20">
                  <h4 className="font-bold text-[#02173C] mb-2">Besoin de ce produit ?</h4>
                  <p className="text-gray-600 mb-4">Contactez notre équipe pour plus d'informations ou pour passer commande.</p>
                  <button className="group bg-[#BE941B] hover:bg-[#02173C] px-8 py-4 text-white transition-all duration-300 font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    <span className="flex items-center">
                      Nous Contacter
                      <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="pt-8">
                <h3 className="text-xl font-bold text-[#02173C] mb-4">Spécifications Techniques</h3>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Type:</span>
                        <span className="font-medium text-[#02173C]">100% Synthétique</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Application:</span>
                        <span className="font-medium text-[#02173C]">Competition</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Température:</span>
                        <span className="font-medium text-[#02173C]">-40°C à +150°C</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Norme:</span>
                        <span className="font-medium text-[#02173C]">API SN/CF</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Viscosité:</span>
                        <span className="font-medium text-[#02173C]">Haute performance</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Certification:</span>
                        <span className="font-medium text-[#02173C]">OEM Approuvé</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Usage Instructions */}
              <div className="pt-8">
                <h3 className="text-xl font-bold text-[#02173C] mb-4">Mode d'Emploi</h3>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="space-y-4 text-gray-600">
                    <p><strong className="text-[#02173C]">1. Préparation:</strong> S'assurer que le moteur est à température ambiante avant la vidange.</p>
                    <p><strong className="text-[#02173C]">2. Vidange:</strong> Effectuer la vidange complète de l'ancienne huile.</p>
                    <p><strong className="text-[#02173C]">3. Application:</strong> Verser le produit selon les recommandations du constructeur.</p>
                    <p><strong className="text-[#02173C]">4. Vérification:</strong> Contrôler le niveau d'huile après quelques minutes de fonctionnement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-black text-[#02173C] mb-4">
                Produits <span className="bg-gradient-to-r from-[#BE941B] to-[#02173C] bg-clip-text text-transparent">Similaires</span>
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-[#BE941B] to-[#02173C] mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Découvrez d'autres produits de la même gamme {isMotoProduct ? 'Competition Line - Moto' : 'Competition Line - Véhicules'}
              </p>
            </div>

            <div className="text-center">
              <Link
                to={categoryPath}
                className="group inline-flex items-center bg-[#BE941B] hover:bg-[#02173C] text-white px-8 py-4 rounded-2xl transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>Voir Tous les Produits</span>
                <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Back to Products */}
          <div className="text-center mt-20">
            <Link
              to={categoryPath}
              className="group inline-flex items-center bg-white hover:bg-[#02173C] border-2 border-[#02173C] text-[#02173C] hover:text-white px-8 py-4 rounded-2xl transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <ChevronLeft size={20} className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Retour aux Produits</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
