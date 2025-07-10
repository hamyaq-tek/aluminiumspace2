
import { ArrowRight, Shield, Zap, Recycle, Award, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              AlumTech
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#products" className="text-gray-300 hover:text-white transition-colors">Products</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
              Get Quote
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Premium</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  Aluminum
                </span>
                <br />
                <span className="text-gray-300">Solutions</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                Leading manufacturer of high-quality aluminum products for construction, 
                automotive, and industrial applications. Excellence in every detail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-lg px-8 py-6">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 text-lg px-8 py-6">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700 p-8 h-96 flex items-center justify-center">
                <div className="text-6xl text-gray-600">🏭</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Capabilities</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive aluminum solutions with cutting-edge technology and unmatched expertise
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Durability",
                description: "Corrosion-resistant aluminum products built to last decades"
              },
              {
                icon: Zap,
                title: "Precision",
                description: "Advanced manufacturing with tight tolerances and quality control"
              },
              {
                icon: Recycle,
                title: "Sustainable",
                description: "100% recyclable materials supporting environmental responsibility"
              },
              {
                icon: Award,
                title: "Certified",
                description: "ISO certified quality management and industry compliance"
              }
            ].map((service, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <service.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Product Range</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From structural components to decorative elements, we deliver aluminum solutions for every need
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Structural Aluminum",
                description: "Beams, profiles, and frameworks for construction and architecture",
                image: "🏗️"
              },
              {
                title: "Automotive Parts",
                description: "Lightweight components for automotive and transportation industries",
                image: "🚗"
              },
              {
                title: "Custom Fabrication",
                description: "Bespoke aluminum solutions tailored to your specific requirements",
                image: "⚙️"
              }
            ].map((product, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden hover:border-blue-500 transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-6xl">
                  {product.image}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{product.title}</h3>
                  <p className="text-gray-400 mb-4">{product.description}</p>
                  <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">Why Choose AlumTech?</h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                With over 25 years of experience in aluminum manufacturing, we've built our reputation 
                on quality, innovation, and customer satisfaction. Our state-of-the-art facilities 
                and expert team ensure every product meets the highest standards.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">25+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">10K+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">500+</div>
                  <div className="text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">99%</div>
                  <div className="text-gray-400">Quality Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700 p-8 h-80 flex items-center justify-center">
                <div className="text-8xl text-gray-600">⚡</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to discuss your aluminum needs? Contact our expert team for a consultation
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-slate-900/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <Phone className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-900/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <Mail className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-400">info@alumtech.com</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-900/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <MapPin className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                <p className="text-gray-400">123 Industrial Ave<br />Manufacturing District</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-lg px-12 py-6">
              Request Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">
                AlumTech
              </div>
              <p className="text-gray-400">
                Premium aluminum solutions for modern industry
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Structural Aluminum</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Automotive Parts</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Custom Fabrication</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Manufacturing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Design Consultation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Quality Testing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 AlumTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
