
import { ArrowRight, Shield, Zap, Award, Phone, Mail, MapPin, Home, Building, Lock, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              <span className="text-white">Alu</span>
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> Space</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#products" className="text-gray-300 hover:text-white transition-colors">Products</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
            <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
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
                <span className="bg-gradient-to-r from-green-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
                  Aluminum
                </span>
                <br />
                <span className="text-gray-300">Installations</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                Professional installation of aluminum doors, windows, and architectural solutions. 
                Quality craftsmanship with modern design for residential and commercial projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg px-8 py-6">
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 text-lg px-8 py-6">
                  Free Consultation
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700 p-8 h-96 flex items-center justify-center">
                <div className="text-6xl text-gray-600">🚪</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Complete aluminum solutions for your home and business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Home,
                title: "Residential",
                description: "Custom aluminum doors and windows for homes with modern design"
              },
              {
                icon: Building,
                title: "Commercial",
                description: "Professional installations for offices, shops, and commercial buildings"
              },
              {
                icon: Lock,
                title: "Security",
                description: "High-security aluminum doors with advanced locking systems"
              },
              {
                icon: Wrench,
                title: "Maintenance",
                description: "Professional maintenance and repair services for existing installations"
              }
            ].map((service, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <service.icon className="h-12 w-12 text-green-400 mx-auto mb-4" />
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
            <h2 className="text-4xl font-bold text-white mb-4">Our Products</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              High-quality aluminum doors and windows designed for durability and style
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Aluminum Doors",
                description: "Modern, secure, and energy-efficient aluminum doors for all applications",
                image: "🚪"
              },
              {
                title: "Windows & Frames",
                description: "Custom aluminum window frames with excellent thermal performance",
                image: "🪟"
              },
              {
                title: "Sliding Systems",
                description: "Smooth-operating sliding doors and windows with premium hardware",
                image: "🔄"
              }
            ].map((product, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden hover:border-green-500 transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-6xl">
                  {product.image}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{product.title}</h3>
                  <p className="text-gray-400 mb-4">{product.description}</p>
                  <Button variant="outline" className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white">
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
              <h2 className="text-4xl font-bold text-white">Why Choose Alu Space?</h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                With years of experience in aluminum installations, we deliver exceptional quality 
                and professional service. Our team specializes in custom solutions that meet your 
                specific needs while ensuring durability and aesthetic appeal.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">500+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">10+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">100%</div>
                  <div className="text-gray-400">Quality Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">24/7</div>
                  <div className="text-gray-400">Support Available</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700 p-8 h-80 flex items-center justify-center">
                <div className="text-8xl text-gray-600">🏠</div>
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
              Ready to transform your space? Contact us for a free consultation and quote
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-slate-900/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <Phone className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-900/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <Mail className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-400">info@aluspace.com</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-900/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <MapPin className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                <p className="text-gray-400">123 Industrial Ave<br />Your City, State</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg px-12 py-6">
              Request Free Quote
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
              <div className="text-2xl font-bold mb-4">
                <span className="text-white">Alu</span>
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> Space</span>
              </div>
              <p className="text-gray-400">
                Professional aluminum door and window installations
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Door Installation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Window Installation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Custom Solutions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Aluminum Doors</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Windows & Frames</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sliding Systems</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 Alu Space. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
