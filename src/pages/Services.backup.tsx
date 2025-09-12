import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { 
  Shield, 
  Award, 
  BarChart3, 
  Target, 
  CheckCircle,
  ArrowRight,
  ChevronDown,
  Settings,
  Building,
  Wrench,
  Send
} from 'lucide-react';

// Service images
const serviceImages = {
  construction: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  maintenance: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  materials: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  consultancy: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  ict: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
};

const Services = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const mainServices = [
    {
      icon: Building,
      title: 'Construction Works',
      description: 'Comprehensive building works, electrical & mechanical engineering, roads, water, and civil projects.',
      image: serviceImages.construction,
      features: [
        'Building Works & Construction',
        'Electrical Engineering Services',
        'Mechanical Engineering Services',
        'Roads, Water & Civil Works',
        'Project Management & Supervision'
      ],
      link: '#construction'
    },
    {
      icon: Wrench,
      title: 'General Maintenance & Works',
      description: 'Professional repairs, maintenance, and comprehensive support solutions for all your infrastructure needs.',
      image: serviceImages.maintenance,
      features: [
        'Facility Maintenance',
        'Equipment Repairs',
        'Preventive Maintenance',
        'Emergency Response',
        'Maintenance Planning'
      ],
      link: '#maintenance'
    },
    {
      icon: Settings,
      title: 'Construction Materials Supply',
      description: 'Reliable supply of building and construction materials with quality assurance and timely delivery.',
      image: serviceImages.materials,
      features: [
        'Quality Construction Materials',
        'Timely Delivery',
        'Competitive Pricing',
        'Wide Range of Products',
        'Technical Support'
      ],
      link: '#materials'
    },
    {
      icon: Shield,
      title: 'Management Consultancy',
      description: 'Expert ISO systems development, strategic planning, risk management, and capacity building solutions.',
      image: serviceImages.consultancy,
      features: [
        'ISO Systems Development',
        'Strategic Planning',
        'Risk Management',
        'Capacity Building',
        'Business Process Optimization'
      ],
      link: '#consultancy'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-r from-navy-900 to-navy-800 text-white">
        <div className="container-custom px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 mb-6 hover:bg-amber-500/30 transition-colors text-sm font-medium py-1.5 px-4">
              Our Services
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Comprehensive Solutions for Your <span className="text-amber-400">Business Growth</span>
            </h1>
            <p className="text-lg text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              We deliver exceptional services designed to drive your success. From construction to consultancy, 
              our expert team provides tailored solutions to meet your unique business challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-base font-medium transition-colors"
                asChild
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Get a Free Consultation
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="our-services" className="py-16 md:py-24 bg-white">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Services</h2>
            <p className="text-lg text-gray-600">
              We offer a wide range of professional services to help your business grow and succeed in today's competitive landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="p-6">
                  <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center mb-6 text-amber-500 group-hover:bg-amber-100 transition-colors">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-amber-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-auto" asChild>
                    <Link to={service.link} className="flex items-center justify-center gap-2">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-navy-800 to-navy-700 text-white">
        <div className="container-custom px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-base md:text-lg text-white/90 mb-6">
                  Let's discuss how our comprehensive solutions can help your organization 
                  achieve sustainable growth and excellence.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                    Get Started
                  </Button>
                  <Button variant="outline" className="text-white border-white/30 hover:bg-white/10">
                    Contact Us
                  </Button>
                </div>
              </div>
              <div className="bg-white/10 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Request a Callback</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white/90">Name</Label>
                      <Input 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-white/5 border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white/90">Email</Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-white/5 border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-white/90">Service of Interest</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-white/5 border-white/20 text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      required
                    >
                      <option value="">Select a service</option>
                      {mainServices.map((service, index) => (
                        <option key={index} value={service.title} className="text-gray-900">
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white/90">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="min-h-[120px] bg-white/5 border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white h-12 text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
