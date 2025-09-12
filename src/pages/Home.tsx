import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
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
  Star
} from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Home = () => {
  const services = [
    {
      icon: Shield,
      title: 'Management Consultancy',
      description: 'Strategic guidance and expertise to optimize your business operations and drive sustainable growth.',
      link: '/services/management-consultancy'
    },
    {
      icon: Award,
      title: 'ISO Standards Implementation',
      description: 'Comprehensive ISO certification services to enhance quality, safety, and operational excellence.',
      link: '/services/iso-standards'
    },
    {
      icon: BarChart3,
      title: 'Quality Auditing',
      description: 'Data-driven auditing solutions to ensure compliance and identify improvement opportunities.',
      link: '/services/quality-auditing'
    },
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Future-focused planning strategies to position your business for long-term success.',
      link: '/services/strategic-planning'
    },
    {
      icon: TrendingUp,
      title: 'Regulatory Compliance',
      description: 'Expert guidance to navigate complex regulatory requirements and maintain full compliance.',
      link: '/services/regulatory-compliance'
    },
    {
      icon: Users,
      title: 'Capacity Building',
      description: 'Comprehensive training and development programs to enhance your team capabilities.',
      link: '/services/capacity-building'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Accelerated Growth',
      description: 'Streamlined processes and strategic insights that drive rapid business expansion.'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Comprehensive risk assessment and management strategies to protect your investments.'
    },
    {
      icon: Star,
      title: 'Excellence Standards',
      description: 'Implementation of world-class quality standards that exceed industry benchmarks.'
    },
    {
      icon: Globe,
      title: 'Global Compliance',
      description: 'International standards compliance that opens doors to global markets.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Successful Projects' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Expert Consultants' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Professional office building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient opacity-90"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-custom text-center text-white">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <Badge variant="outline" className="border-accent text-accent mb-6 text-sm px-4 py-2">
              Excellence in Business Solutions
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transform Your Business with
              <span className="block heading-gradient mt-2">Expert Consultancy</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Empowering organizations through strategic consulting, quality management, and innovative solutions 
              that drive sustainable growth and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="xl" asChild className="animate-pulse-glow">
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
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
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge variant="outline" className="border-accent text-accent mb-4">
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Business Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From strategic planning to quality management, we provide end-to-end consulting services 
              that transform businesses and drive exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
            {services.map((service, index) => (
              <Card key={index} className="card-hover border-border/50 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-lg primary-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Button variant="ghost" className="p-0 h-auto text-accent hover:text-accent-light" asChild>
                    <Link to={service.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge variant="outline" className="border-accent text-accent mb-4">
              Why Choose Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Drive Your Success Forward
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven methodologies and expert insights deliver measurable results that 
              position your business for sustained growth and competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 rounded-full primary-gradient flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-accent transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding primary-gradient text-primary-foreground">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
              Partner with us to unlock your organization's full potential. Our expert consultants 
              are ready to design a customized solution that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">
                  Start Your Transformation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;