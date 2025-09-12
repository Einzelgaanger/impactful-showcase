import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { 
  Building, 
  Wrench, 
  Truck, 
  Users, 
  Monitor, 
  Briefcase, 
  Car, 
  Shirt,
  Award,
  CheckCircle,
  ArrowRight,
  Target,
  Shield,
  Lightbulb,
  TrendingUp,
  Globe,
  BarChart3,
  Zap,
  Star,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

// Service images
const serviceImages = {
  construction: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  maintenance: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  materials: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  consultancy: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  ict: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  office: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  automotive: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  branding: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
};

const Services = () => {
  const mainServices = [
    {
      id: 'construction',
      title: 'Construction Works',
      description: 'Building works, electrical & mechanical engineering, roads, water, and civil projects.',
      image: serviceImages.construction,
      icon: Building,
      features: [
        'Building Works',
        'Electrical/Mechanical Engineering Services',
        'Roads, Water and other Civil Works',
        'Project Management',
        'Quality Assurance'
      ]
    },
    {
      id: 'maintenance',
      title: 'General Maintenance & Works Services',
      description: 'Repairs, maintenance, and related support solutions.',
      image: serviceImages.maintenance,
      icon: Wrench,
      features: [
        'Preventive Maintenance',
        'Emergency Repairs',
        'Facility Management',
        'Equipment Servicing',
        '24/7 Support'
      ]
    },
    {
      id: 'materials',
      title: 'Construction Materials Supply',
      description: 'Building and construction inputs delivered with reliability.',
      image: serviceImages.materials,
      icon: Truck,
      features: [
        'Quality Materials',
        'Timely Delivery',
        'Competitive Pricing',
        'Wide Range of Products',
        'Technical Support'
      ]
    },
    {
      id: 'consultancy',
      title: 'Management Consultancy',
      description: 'ISO systems, strategy, risk, and governance, Capacity Building.',
      image: serviceImages.consultancy,
      icon: Users,
      features: [
        'ISO Systems Development',
        'Operations/Quality Auditing',
        'Risk Management & Compliance',
        'Strategic Planning',
        'Capacity Building/Training'
      ]
    },
    {
      id: 'ict',
      title: 'ICT Solutions',
      description: 'Supply of ICT equipment, accessories, and related services.',
      image: serviceImages.ict,
      icon: Monitor,
      features: [
        'Hardware Supply',
        'Software Solutions',
        'Network Infrastructure',
        'Technical Support',
        'Digital Transformation'
      ]
    },
    {
      id: 'office',
      title: 'Office Solutions',
      description: 'Furniture, stationery, printing supplies, equipment, printers, toners, and papers.',
      image: serviceImages.office,
      icon: Briefcase,
      features: [
        'Office Furniture',
        'Stationery Supplies',
        'Printing Equipment',
        'Office Equipment',
        'Supplies Management'
      ]
    },
    {
      id: 'automotive',
      title: 'Automotive Supplies',
      description: 'Spare parts, accessories, and comprehensive automotive support solutions.',
      image: serviceImages.automotive,
      icon: Car,
      features: [
        'Spare Parts Supply',
        'Automotive Accessories',
        'Maintenance Services',
        'Parts Sourcing',
        'Technical Support'
      ]
    },
    {
      id: 'branding',
      title: 'Corporate Branding',
      description: 'Branded merchandise, t-shirts, and company staff uniforms.',
      image: serviceImages.branding,
      icon: Shirt,
      features: [
        'Custom Merchandise',
        'Staff Uniforms',
        'Branded Materials',
        'Design Services',
        'Bulk Orders'
      ]
    }
  ];

  const isoSystems = [
    {
      title: 'ISO 9001:2015 - Quality Management System',
      description: 'Aims to consistently deliver high-quality products and services that meet or exceed customer expectations.',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      benefits: [
        'Enhanced customer satisfaction',
        'Improved process efficiency',
        'Better risk management',
        'Increased profitability'
      ]
    },
    {
      title: 'ISO 14001:2015 - Environmental Management',
      description: 'Focuses on minimizing environmental impact and ensuring sustainability.',
      icon: Globe,
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      benefits: [
        'Environmental compliance',
        'Reduced environmental impact',
        'Cost savings',
        'Improved reputation'
      ]
    },
    {
      title: 'ISO 27001:2013 - Information Security',
      description: 'Protects sensitive data by ensuring confidentiality, integrity, and availability.',
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      benefits: [
        'Data protection',
        'Risk mitigation',
        'Regulatory compliance',
        'Enhanced security'
      ]
    },
    {
      title: 'ISO 22000:2018 - Food Safety Management',
      description: 'Essential for organizations in the food and beverage sector.',
      icon: CheckCircle,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      benefits: [
        'Food safety assurance',
        'Supply chain control',
        'Consumer trust',
        'Regulatory compliance'
      ]
    }
  ];

  const coreValues = [
    { 
      icon: Users, 
      title: 'Customer Focus', 
      description: 'Our clients are at the center of everything we do.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    { 
      icon: Shield, 
      title: 'Integrity', 
      description: 'We operate with the highest ethical standards.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    { 
      icon: Award, 
      title: 'Professionalism', 
      description: 'We maintain the highest professional standards.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    { 
      icon: Users, 
      title: 'Team Work', 
      description: 'We believe in the power of collaboration.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    { 
      icon: TrendingUp, 
      title: 'Continuous Improvement', 
      description: 'We are committed to continuous learning and innovation.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const clientTypes = [
    { 
      icon: Building, 
      title: 'Private Enterprises', 
      description: 'Supporting business growth and operational excellence',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    { 
      icon: Globe, 
      title: 'Government Bodies', 
      description: 'Enhancing public sector efficiency and compliance',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    { 
      icon: Users, 
      title: 'International Organizations', 
      description: 'Global standards implementation and support',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    { 
      icon: Target, 
      title: 'NGOs', 
      description: 'Mission-driven organizational development',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    { 
      icon: Zap, 
      title: 'Multinational Corporations', 
      description: 'Enterprise-level solutions and strategies',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    { 
      icon: Lightbulb, 
      title: 'Start-ups and MSMEs', 
      description: 'Growth-focused solutions for emerging businesses',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80" 
            alt="Professional consulting services"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/70 to-slate-900/80"></div>
        </div>
        
        <div className="container-custom px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-amber-500/20 border-amber-400/30 text-amber-100 backdrop-blur-sm mb-4 hover:bg-amber-500/30 transition-colors text-xs sm:text-sm">
              Our Services
            </Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">
              Comprehensive Solutions for <span className="text-amber-400">Your Success</span>
            </h1>
            <p className="text-sm sm:text-base text-white/90 mb-6 leading-relaxed max-w-3xl mx-auto">
              Elite Advisory Limited delivers practical solutions that help organizations improve, grow, and create lasting value. 
              We combine technical expertise, professional consultancy, and strong supply chain capabilities to ensure quality delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="default" className="bg-amber-500 text-white hover:bg-amber-600 text-sm sm:text-base transition-colors" asChild>
                <Link to="/contact">Get Consultation</Link>
              </Button>
              <Button variant="outline" size="default" className="text-white border-white/30 hover:bg-white/10 text-sm sm:text-base transition-colors" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="bg-amber-500/10 text-amber-600 border-amber-500/20 mb-4 hover:bg-amber-500/20 transition-colors">
              Our Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Guiding Principles That Define Us
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our core values are the foundation of everything we do, shaping our culture and guiding our decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 hover:border-amber-400/30 hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={value.image} 
                    alt={value.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-amber-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                      <value.icon className="h-6 w-6 text-amber-400 group-hover:text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-amber-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="bg-amber-500/10 text-amber-600 border-amber-500/20 mb-4 hover:bg-amber-500/20 transition-colors">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Wide Range of Products and Services
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We offer comprehensive solutions across multiple industries to meet your diverse business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {mainServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-slate-200 bg-white overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-amber-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-amber-400" />
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-amber-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ISO Systems Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="bg-amber-500/10 text-amber-600 border-amber-500/20 mb-4 hover:bg-amber-500/20 transition-colors">
              ISO Systems
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              ISO Systems We Offer
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The International Organization for Standardization (ISO) develops global standards to ensure quality, safety, and efficiency. 
              We help organizations implement these standards for enhanced performance and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {isoSystems.map((system, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-slate-200 bg-white overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={system.image} 
                    alt={system.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-amber-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                      <system.icon className="h-6 w-6 text-amber-400 group-hover:text-white" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-slate-800 group-hover:text-amber-600 transition-colors">
                    {system.title}
                  </CardTitle>
                  <p className="text-slate-600 leading-relaxed">
                    {system.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {system.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-amber-500 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 md:py-24">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="bg-amber-500/10 text-amber-600 border-amber-500/20 mb-4 hover:bg-amber-500/20 transition-colors">
              Our Clients
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Who We Serve
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We partner with diverse organizations across sectors, delivering tailored solutions that meet specific industry needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {clientTypes.map((client, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-slate-200 bg-white overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={client.image} 
                    alt={client.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-amber-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <client.icon className="h-6 w-6 text-amber-400" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-amber-600 transition-colors">
                    {client.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {client.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-amber-500/20 border-amber-400/30 text-amber-100 backdrop-blur-sm mb-4 hover:bg-amber-500/30 transition-colors">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Your Strategic Partners for Success
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              At Elite Advisory, we are your strategic partners, delivering impactful solutions through innovation, 
              expertise, and excellence. Our client-first approach guarantees results across diverse industries.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                'Strategic partners delivering impactful solutions',
                'Innovation, expertise, and excellence in every project',
                'Client-first approach guaranteeing results',
                'Diverse industry experience and proven track record',
                'Customized solutions for unique organizational needs',
                'Long-term partnerships built on trust and integrity'
              ].map((reason, index) => (
                <div key={index} className="flex items-center space-x-3 text-left">
                  <CheckCircle className="h-6 w-6 text-amber-400 flex-shrink-0" />
                  <span className="text-base">{reason}</span>
                </div>
              ))}
            </div>

            <Button 
              className="bg-amber-500 text-white hover:bg-amber-600 px-8 h-12 text-base font-medium transition-colors" 
              asChild
            >
              <Link to="/contact" className="flex items-center">
                Partner With Us Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-amber-500/10 text-amber-600 border-amber-500/20 mb-4 hover:bg-amber-500/20 transition-colors">
              Get In Touch
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our comprehensive solutions can help your organization achieve its goals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <Mail className="h-6 w-6 text-amber-600" />
                <div className="text-left">
                  <p className="font-medium text-slate-800">Email</p>
                  <p className="text-sm text-slate-600">eliteadvisory@outlook.com</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <Phone className="h-6 w-6 text-amber-600" />
                <div className="text-left">
                  <p className="font-medium text-slate-800">Phone</p>
                  <p className="text-sm text-slate-600">+254 100 169 211</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <MapPin className="h-6 w-6 text-amber-600" />
                <div className="text-left">
                  <p className="font-medium text-slate-800">Location</p>
                  <p className="text-sm text-slate-600">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
