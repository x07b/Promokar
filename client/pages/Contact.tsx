import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert("Message envoyé avec succès!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80" 
            alt="CMCA Contact"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold">
            CONTACT
          </h1>
        </div>
        {/* Red diagonal overlay */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-cmca-red transform -skew-x-12 -translate-x-1/4"></div>
      </section>

      {/* Main Contact Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-12">
              {/* CMCA TUNIS */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">CMCA TUNIS</h2>
                <div className="w-16 h-1 bg-cmca-red mb-6"></div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-cmca-red mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Adresse :</p>
                      <p className="text-gray-600">Angle 8bis & Rue Nebsul Z.I Mghira 2082 Fouchana</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="text-cmca-red" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Téléphone :</p>
                      <a href="tel:+21631342200" className="text-cmca-red font-bold text-lg hover:underline">
                        (+216) 31 342 200
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* CMCA SOUSSE */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">CMCA SOUSSE</h2>
                <div className="w-16 h-1 bg-cmca-red mb-6"></div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-cmca-red mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Adresse :</p>
                      <p className="text-gray-600">Route de ceinture, lot 8452, Hammam-Sousse 4011</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Phone className="text-cmca-red" size={20} />
                      <div>
                        <p className="font-semibold text-gray-800">Téléphone :</p>
                        <a href="tel:+21658383663" className="text-cmca-red font-bold text-lg hover:underline">
                          (+216) 58 383 663
                        </a>
                      </div>
                    </div>
                    
                    <div className="ml-8">
                      <a href="tel:+21631342200" className="text-cmca-red font-bold text-lg hover:underline">
                        (+216) 31 342 200
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-cmca-red text-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-8">ENVOYER UN MESSAGE</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and First Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nom & Prénom *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                      placeholder="Votre nom complet"
                    />
                  </div>
                </div>

                {/* Email and Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Adresse e-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Numéro de téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                      placeholder="+216 XX XXX XXX"
                    />
                  </div>
                </div>

                {/* Service Required */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service requis
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                  >
                    <option value="" className="text-gray-800">Sélectionner un service</option>
                    <option value="additifs" className="text-gray-800">Additifs</option>
                    <option value="entretien" className="text-gray-800">Entretien</option>
                    <option value="automobile" className="text-gray-800">Automobile</option>
                    <option value="moto" className="text-gray-800">Moto</option>
                    <option value="industrie" className="text-gray-800">Industrie</option>
                    <option value="marine" className="text-gray-800">Marine</option>
                    <option value="revendeur" className="text-gray-800">Devenir revendeur</option>
                    <option value="autre" className="text-gray-800">Autre</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent resize-vertical"
                    placeholder="Votre message..."
                  />
                </div>

                {/* Math Captcha */}
                <div className="flex items-center space-x-4">
                  <span className="text-sm">2 + 12 =</span>
                  <input
                    type="number"
                    className="w-20 px-3 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                    placeholder="14"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-cmca-red px-8 py-3 font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "ENVOI EN COURS..." : "ENVOI"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Nos Emplacements</h2>
          
          {/* Map Placeholder */}
          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center relative">
              <img 
                src="https://images.unsplash.com/photo-1519302959554-a75be0afc82a?w=800&q=80"
                alt="Map of Tunisia showing CMCA locations"
                className="w-full h-full object-cover"
              />
              
              {/* Location markers overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg shadow-lg max-w-md text-center">
                  <h3 className="font-bold text-gray-800 mb-2">Nos bureaux en Tunisie</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-3 h-3 bg-cmca-red rounded-full"></div>
                      <span>CMCA Tunis - Mghira, Fouchana</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-3 h-3 bg-cmca-red rounded-full"></div>
                      <span>CMCA Sousse - Hammam-Sousse</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-cmca-red">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Bureau Principal - Tunis</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-cmca-red" size={18} />
                  <span>Angle 8bis & Rue Nebsul Z.I Mghira 2082 Fouchana</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-cmca-red" size={18} />
                  <a href="tel:+21631342200" className="text-cmca-red hover:underline">
                    (+216) 31 342 200
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-cmca-red" size={18} />
                  <a href="mailto:contact@cmca.com" className="text-cmca-red hover:underline">
                    contact@cmca.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-cmca-red">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Bureau Sousse</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-cmca-red" size={18} />
                  <span>Route de ceinture, lot 8452, Hammam-Sousse 4011</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-cmca-red" size={18} />
                  <a href="tel:+21658383663" className="text-cmca-red hover:underline">
                    (+216) 58 383 663
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-cmca-red" size={18} />
                  <a href="mailto:sousse@cmca.com" className="text-cmca-red hover:underline">
                    sousse@cmca.com
                  </a>
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
