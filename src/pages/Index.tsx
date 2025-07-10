
import { ArrowRight, Shield, Zap, Award, Phone, Mail, MapPin, Home, Building, Lock, Wrench, Sparkles, Play, ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.5;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-black/20 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4 z-50">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-white">Alu</span>
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Space</span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            {['home', 'services', 'gallery', 'about', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`text-sm font-medium transition-all duration-300 hover:text-green-400 ${
                  activeSection === item ? 'text-green-400' : 'text-gray-300'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-slate-900/95 backdrop-blur-xl border-slate-700">
              <div className="flex flex-col space-y-6 mt-8">
                {['home', 'services', 'gallery', 'about', 'contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="text-lg font-medium text-gray-300 hover:text-green-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          <Button className="hidden lg:flex bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 border-0">
            Get Quote
          </Button>
        </div>
      </nav>

      {/* Hero Section with Geometric Shapes */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${parallaxOffset}px)` }}
          ></div>
          <div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${-parallaxOffset}px)` }}
          ></div>
          
          {/* Geometric Shapes */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-green-400 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-6 h-6 border-2 border-blue-400 rotate-12 animate-bounce"></div>
          <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-white rounded-full animate-pulse"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            {/* Main Headline with Staggered Animation */}
            <div className="space-y-4 mb-8">
              <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                <div className="overflow-hidden">
                  <span className="inline-block text-white animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    Redefining
                  </span>
                </div>
                <div className="overflow-hidden">
                  <span className="inline-block bg-gradient-to-r from-green-400 via-blue-400 to-green-400 bg-clip-text text-transparent animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    Aluminum
                  </span>
                </div>
                <div className="overflow-hidden">
                  <span className="inline-block text-gray-300 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                    Architecture
                  </span>
                </div>
              </h1>
            </div>

            <p className="text-xl lg:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.8s' }}>
              Where innovation meets craftsmanship. We create stunning aluminum doors and windows 
              that transform spaces into works of art.
            </p>

            {/* CTA Buttons with Hover Effects */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '1s' }}>
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-lg px-12 py-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-green-500/25">
                <Play className="mr-2 h-5 w-5" />
                Watch Our Story
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white/20 text-white hover:bg-white/10 text-lg px-12 py-6 rounded-full backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                Explore Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="w-8 h-8 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Card Hover Effects */}
      <section id="services" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">Our Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Specialized solutions crafted with precision and designed for the future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Home,
                title: "Residential Luxury",
                description: "Bespoke aluminum solutions that elevate your home's aesthetic and security",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: Building,
                title: "Commercial Excellence",
                description: "Professional installations for modern businesses and architectural marvels",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Shield,
                title: "Advanced Security",
                description: "State-of-the-art locking systems integrated with elegant aluminum design",
                gradient: "from-purple-500 to-indigo-500"
              },
              {
                icon: Wrench,
                title: "Lifetime Support",
                description: "Comprehensive maintenance and upgrade services for lasting performance",
                gradient: "from-orange-500 to-red-500"
              }
            ].map((service, index) => (
              <div key={index} className="group">
                <Card className="bg-slate-900/30 backdrop-blur-sm border-slate-700/50 hover:border-green-400/50 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 h-full">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 flex-grow">{service.description}</p>
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="w-5 h-5 text-green-400 mx-auto" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section with Masonry Layout */}
      <section id="gallery" className="py-32 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">Design Gallery</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { height: 'h-64', emoji: '🚪', title: 'Modern Entry' },
              { height: 'h-48', emoji: '🪟', title: 'Floor-to-Ceiling Windows' },
              { height: 'h-56', emoji: '🏢', title: 'Commercial Facade' },
              { height: 'h-72', emoji: '🏠', title: 'Residential Beauty' },
              { height: 'h-40', emoji: '🔒', title: 'Security First' },
              { height: 'h-60', emoji: '🌟', title: 'Premium Finish' },
              { height: 'h-52', emoji: '⚡', title: 'Smart Integration' },
              { height: 'h-44', emoji: '🎨', title: 'Custom Design' },
            ].map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <Card className={`${item.height} bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden hover:border-green-400 transition-all duration-300 transform hover:scale-105`}>
                  <CardContent className="h-full flex flex-col items-center justify-center p-6 relative">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {item.emoji}
                    </div>
                    <h4 className="text-white font-semibold text-center group-hover:text-green-400 transition-colors">
                      {item.title}
                    </h4>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Animated Numbers */}
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 to-blue-900/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <h2 className="text-5xl font-bold text-white">
                Crafting Excellence
                <span className="block text-green-400">Since Day One</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                We don't just install aluminum fixtures – we craft architectural statements. 
                Every project is a testament to our commitment to innovation, quality, and 
                customer satisfaction.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                {[
                  { number: '1000+', label: 'Dreams Realized', icon: '✨' },
                  { number: '15+', label: 'Years Mastering', icon: '🏆' },
                  { number: '100%', label: 'Satisfaction Rate', icon: '❤️' },
                  { number: '24/7', label: 'Support Promise', icon: '🛡️' }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-green-400 mb-1 group-hover:scale-110 transition-transform">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-3xl blur-3xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-12 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4 animate-bounce">🏗️</div>
                  <p className="text-gray-400">Building Tomorrow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Interactive Elements */}
      <section id="contact" className="py-32 bg-gradient-to-br from-slate-900 to-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">Let's Create Together</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to transform your vision into reality? Let's start the conversation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Phone,
                title: "Call Us",
                info: "+1 (555) 123-4567",
                action: "Available 24/7",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: Mail,
                title: "Email Us",
                info: "hello@aluspace.com",
                action: "Quick Response",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: MapPin,
                title: "Visit Us",
                info: "123 Innovation Drive",
                action: "Schedule Tour",
                gradient: "from-purple-500 to-indigo-500"
              }
            ].map((contact, index) => (
              <Card key={index} className="bg-slate-900/50 backdrop-blur-sm border-slate-700/50 hover:border-green-400/50 transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${contact.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{contact.title}</h3>
                  <p className="text-gray-300 mb-2">{contact.info}</p>
                  <p className="text-sm text-green-400">{contact.action}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-lg px-16 py-8 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-green-500/25">
              Start Your Project
              <Sparkles className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-400 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="text-2xl font-bold">
                  <span className="text-white">Alu</span>
                  <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Space</span>
                </div>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Transforming spaces with innovative aluminum solutions. 
                Where craftsmanship meets cutting-edge design.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Services</h4>
              <ul className="space-y-3">
                {['Door Installation', 'Window Systems', 'Custom Solutions', 'Maintenance'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Company</h4>
              <ul className="space-y-3">
                {['About Us', 'Portfolio', 'Careers', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Alu Space. Crafted with passion for excellence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
