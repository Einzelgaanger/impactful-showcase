import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  ArrowRight, 
  Shield,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  Target,
  Lightbulb,
  Globe,
  BarChart3,
  Zap,
  Star,
  Menu,
  X
} from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';
import Logo from '@/components/Logo';
import Footer from '@/components/layout/Footer';

// Service images
const serviceImages = {
  construction: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  consultancy: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  ict: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  office: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80',
  automotive: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1480&q=80',
  branding: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
};

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    {
      image: serviceImages.construction,
      title: 'Construction Works',
      description: 'Building works, electrical & mechanical engineering, roads, water, and civil projects.',
      link: '/services'
    },
    {
      image: serviceImages.consultancy,
      title: 'Management Consultancy',
      description: 'ISO systems, strategy, risk, governance, and capacity building solutions.',
      link: '/services'
    },
    {
      image: serviceImages.ict,
      title: 'ICT Solutions',
      description: 'Supply of ICT equipment, accessories, and related technology services.',
      link: '/services'
    },
    {
      image: serviceImages.office,
      title: 'Office Solutions',
      description: 'Furniture, stationery, printing supplies, equipment, printers, toners, and papers.',
      link: '/services'
    },
    {
      image: serviceImages.automotive,
      title: 'Automotive Supplies',
      description: 'Spare parts, accessories, and comprehensive automotive support solutions.',
      link: '/services'
    },
    {
      image: serviceImages.branding,
      title: 'Corporate Branding',
      description: 'Branded merchandise, t-shirts, and company staff uniforms.',
      link: '/services'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Customer Focus',
      description: 'We prioritize understanding and exceeding customer expectations in every project.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards and transparency in all our business dealings.'
    },
    {
      icon: Star,
      title: 'Professionalism',
      description: 'We deliver expert solutions with the highest level of professional competence.'
    },
    {
      icon: Globe,
      title: 'Continuous Improvement',
      description: 'We constantly enhance our processes and services to deliver better results.'
    }
  ];

  const stats = [
    { number: '2019', label: 'Established & Incorporated' },
    { number: '160+', label: 'ISO Countries Supported' },
    { number: '100%', label: 'Client-First Approach' },
    { number: '10+', label: 'Service Categories' }
  ];

  return (
    <div className="min-h-screen">
      {/* Floating Header */}
      <header className="fixed top-0 w-full z-50 bg-[#f5f5dc] border-b border-gray-200 shadow-sm">
        <div className="container-custom py-2 px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-1 sm:space-x-2 hover:scale-105 transition-transform duration-300">
              <Logo size="sm" className="sm:hidden" />
              <Logo size="md" className="hidden sm:block" />
              <div className="ml-1">
                <h1 className="text-sm sm:text-lg font-bold text-gray-800 leading-tight">Elite Advisory Limited</h1>
                <p className="text-xs text-gray-600 hidden sm:block">Partnerships Based on Trust</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <Link to="/" className="text-sm text-gray-700 hover:text-accent transition-colors font-medium">Home</Link>
              <Link to="/about" className="text-sm text-gray-700 hover:text-accent transition-colors font-medium">About</Link>
              <Link to="/services" className="text-sm text-gray-700 hover:text-accent transition-colors font-medium">Services</Link>
              <Link to="/who-we-are" className="text-sm text-gray-700 hover:text-accent transition-colors font-medium">Who We Are</Link>
              <Link to="/contact" className="text-sm text-gray-700 hover:text-accent transition-colors font-medium">Contact</Link>
            </nav>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="lg:hidden text-gray-700 hover:bg-gray-100 h-8 w-8 p-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 shadow-lg">
          <div className="container-custom px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/about" 
                className="text-base text-gray-700 hover:text-amber-600 transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className="text-base text-gray-700 hover:text-amber-600 transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/who-we-are" 
                className="text-base text-gray-700 hover:text-amber-600 transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Who We Are
              </Link>
              <Link 
                to="/contact" 
                className="text-base text-gray-700 hover:text-amber-600 transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Professional office building"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-custom text-white pt-16 px-4">
          <div className="max-w-7xl mx-auto animate-fade-in-up">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center min-h-[70vh] lg:min-h-[80vh]">
              <div className="lg:col-span-7 text-center lg:text-left">
                <Badge variant="outline" className="border-accent text-accent mb-4 lg:mb-6 text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm">
                  Elite Advisory Limited
                </Badge>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 leading-tight text-white drop-shadow-2xl">
                  Introducing
                  <span className="block heading-gradient mt-1 lg:mt-2 drop-shadow-2xl">Elite Advisory</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 lg:mb-8 text-white drop-shadow-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  To provide practical solutions that help organizations improve, grow, and create lasting value. 
                  To be a trusted partner in driving sustainable growth, excellence, and transformative value across industries worldwide.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Button variant="hero" size="sm" asChild className="hover:shadow-lg transition-all duration-300 rounded-full px-4 sm:px-6 text-xs sm:text-sm">
                    <Link to="/services">
                      Explore Our Services
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300 rounded-full px-4 sm:px-6 text-xs sm:text-sm">
                    <Link to="/contact">Get Consultation</Link>
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-center lg:justify-end mt-8 lg:mt-0">
                <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white">Why Choose Elite Advisory?</h3>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-white/90 text-xs sm:text-sm">Proven track record with 160+ ISO countries</p>
                      </div>
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-white/90 text-xs sm:text-sm">Comprehensive business solutions</p>
                      </div>
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-white/90 text-xs sm:text-sm">Client-first approach guaranteed</p>
                      </div>
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-white/90 text-xs sm:text-sm">Expert consultancy since 2019</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium text-xs sm:text-sm lg:text-base leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom px-4">
          <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
            <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20 mb-4 text-xs sm:text-sm">
              Our Services
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 lg:mb-6">
              Comprehensive Business Solutions
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base">
              From strategic planning to quality management, we provide end-to-end consulting services 
              that transform businesses and drive exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-accent/50 group h-full flex flex-col"
              >
                <div className="h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-4 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 flex-1 leading-relaxed">
                    {service.description}
                  </p>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-accent hover:text-accent/80 transition-colors group-hover:underline self-start mt-auto text-xs sm:text-sm" 
                    asChild
                  >
                    <Link to={service.link}>
                      Learn more <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4 inline-block transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container-custom px-4">
          <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
            <Badge variant="outline" className="border-accent text-accent mb-4 text-xs sm:text-sm">
              Why Choose Us
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
              Drive Your Success Forward
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven methodologies and expert insights deliver measurable results that 
              position your business for sustained growth and competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 stagger-animation">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full primary-gradient flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary-foreground" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 group-hover:text-accent transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding primary-gradient text-primary-foreground">
        <div className="container-custom text-center px-4">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 lg:mb-8 text-primary-foreground/90 leading-relaxed">
              Partner with us to unlock your organization's full potential. Our expert consultants 
              are ready to design a customized solution that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Button variant="accent" size="lg" className="sm:size-xl" asChild>
                <Link to="/contact">
                  Start Your Transformation
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="sm:size-xl border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;