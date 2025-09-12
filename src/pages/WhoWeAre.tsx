import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { 
  Building, 
  Target, 
  Users, 
  CheckCircle,
  ArrowRight,
  Globe,
  Award,
  Briefcase,
  GraduationCap,
  Heart,
  Zap,
  Shield,
  BarChart2,
  Lightbulb,
  TrendingUp
} from 'lucide-react';

// Page images
const pageImages = {
  hero: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  team: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80',
  values: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1484&q=80',
  mission: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  vision: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80',
  about: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
};

const WhoWeAre = () => {
  const specializations = [
    {
      icon: Award,
      title: 'ISO Systems Development & Implementation',
      description: 'Comprehensive ISO certification and implementation services across multiple standards.'
    },
    {
      icon: Target,
      title: 'Operations/Quality Auditing',
      description: 'Data-driven auditing solutions for compliance verification and continuous improvement.'
    },
    {
      icon: Globe,
      title: 'Risk Management & Compliance',
      description: 'Expert guidance in navigating complex regulatory requirements and risk mitigation.'
    },
    {
      icon: Briefcase,
      title: 'Strategic Planning',
      description: 'Future-focused planning methodologies for long-term organizational success.'
    },
    {
      icon: GraduationCap,
      title: 'Capacity Building/Training',
      description: 'Comprehensive training and development programs to enhance capabilities.'
    }
  ];

  const clientTypes = [
    { icon: Briefcase, title: 'Private Enterprises', description: 'Supporting business growth and operational excellence' },
    { icon: Building, title: 'Government Bodies', description: 'Enhancing public sector efficiency and compliance' },
    { icon: Globe, title: 'International Organizations', description: 'Global standards implementation and support' },
    { icon: Heart, title: 'Non-Governmental Organizations (NGOs)', description: 'Mission-driven organizational development' },
    { icon: Zap, title: 'Multinational Corporations', description: 'Enterprise-level solutions and strategies' },
    { icon: Users, title: 'Start-ups and MSMEs', description: 'Growth-focused solutions for emerging businesses' },
    { icon: GraduationCap, title: 'Educational Institutions', description: 'Academic excellence and institutional development' },
    { icon: Target, title: 'Development Agencies', description: 'Impact-driven organizational effectiveness' }
  ];

  const whyChooseUs = [
    'Strategic partners delivering impactful solutions',
    'Innovation, expertise, and excellence in every project',
    'Client-first approach guaranteeing results',
    'Diverse industry experience and proven track record',
    'Customized solutions for unique organizational needs',
    'Long-term partnerships built on trust and integrity'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80"
            alt="Professional team meeting"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/70 to-slate-900/80"></div>
        </div>
        
        <div className="container-custom px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-white">
              <Badge className="bg-amber-500/20 border-amber-400/30 text-amber-100 backdrop-blur-sm mb-6 hover:bg-amber-500/30 transition-colors text-xs sm:text-sm">
                Who We Are
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
                Building a Legacy of <span className="text-amber-400">Excellence</span>
              </h1>
              <p className="text-base sm:text-lg text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                Elite Advisory Limited is a dynamic and diversified company committed to delivering practical solutions 
                that create real impact. Established in May 2019 and incorporated under the Companies Act, 2019, 
                we have grown into a trusted partner for both government and private sector clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-amber-500 text-white hover:bg-amber-600 text-sm sm:text-base transition-colors" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
                <Button variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10 text-sm sm:text-base transition-colors" asChild>
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Building a Legacy of <span className="text-primary">Excellence</span>
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-6">
                <p className="text-lg">
                  Established in 2019, Elite Advisory Limited has rapidly grown into a trusted partner for businesses 
                  seeking comprehensive consulting and business solutions. Our journey began with a simple yet powerful 
                  vision: to help organizations achieve operational excellence and sustainable growth.
                </p>
                <p className="text-lg">
                  Today, we stand as a testament to the power of innovation, integrity, and client-focused service. 
                  Our team of seasoned professionals brings together diverse expertise and industry knowledge to 
                  deliver exceptional results for our clients.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {[
                    { text: '160+ ISO Countries Served', icon: Globe },
                    { text: 'Proven Track Record', icon: Award },
                    { text: 'Expert Consultants', icon: Users },
                    { text: 'Client-First Approach', icon: Heart }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="bg-accent/10 p-2 rounded-lg text-accent">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <span className="font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={pageImages.about}
                  alt="Our team in action"
                  className="w-full h-auto aspect-[4/5] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Our Commitment</h3>
                  <p className="text-white/90">
                    Delivering excellence through innovation, integrity, and client-focused solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="relative section-padding overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBvcGFjaXR5PSIwLjEiPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkLWdyaWQtaW1hZ2UiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0yMCAxMGExMCAxMCAwIDExLTEwIDEwIDEwLjAxMSAxMC4wMTEgMCAwIDEgMTAtMTB6bTAgM2EzIDMgMCAxMDAtNiAzIDMgMCAwIDAgMCA2eiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZC1ncmlkKSIvPjwvc3ZnPg==')] [mask-image:linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)] [mask-size:40px_40px] [mask-repeat:repeat]]"></div>
        </div>
        
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20 mb-4">
              Our Expertise
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Specialized Business Solutions
            </h2>
            <p className="text-muted-foreground">
              We bring deep expertise across multiple domains to deliver comprehensive solutions that drive business success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((specialization, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-xl p-8 bg-white shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-accent/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <specialization.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                    {specialization.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {specialization.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in-up">
            <Badge variant="outline" className="border-accent text-accent mb-4">
              Our Clients
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Who We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We partner with diverse organizations across sectors, delivering tailored solutions 
              that meet specific industry needs and drive exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientTypes.map((client, index) => (
              <Card key={index} className="card-hover group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-lg primary-gradient flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <client.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-sm font-semibold mb-2 group-hover:text-accent transition-colors">
                    {client.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {client.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up mb-8">
              <Badge variant="outline" className="border-accent text-accent mb-4">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Strategic Partners for Success
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                At Elite Advisory, we are your strategic partners, delivering impactful solutions through 
                innovation, expertise, and excellence. Our client-first approach guarantees results across diverse industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 stagger-animation">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-center space-x-3 text-left">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="text-base">{reason}</span>
                </div>
              ))}
            </div>

            <div className="animate-fade-in-up">
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">
                  Partner With Us Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBvcGFjaXR5PSIwLjEiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuLXNxdWFyZXMiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMCAxMGExMCAxMCAwIDExLTEwIDEwIDEwLjAxMSAxMC4wMTEgMCAwIDEgMTAtMTB6bTAgM2EzIDMgMCAxMDAtNiAzIDMgMCAwIDAgMCA2eiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4tc3F1YXJlcykiLz48L3N2Zz4=) repeat"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-accent/95"></div>
        </div>
        
        <div className="section-padding">
          <div className="container-custom text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Partner with Elite Advisory Limited and experience the difference that expert 
                consulting can make for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="xl" 
                  className="bg-white text-primary hover:bg-white/90 px-8 h-12" 
                  asChild
                >
                  <Link to="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="xl" 
                  className="text-white border-white hover:bg-white/10 px-8 h-12" 
                  asChild
                >
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhoWeAre;