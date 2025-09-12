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
  Zap
} from 'lucide-react';

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
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <Badge variant="outline" className="border-accent text-accent mb-6">
                Who We Are
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Elite Advisory
                <span className="block heading-gradient mt-2">Leadership & Excellence</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Premier management consultancy firm headquartered in Nairobi, Kenya. 
                Established in May 2019 & incorporated under the Companies Act, 2019.
              </p>
            </div>
          </div>
        </section>

        {/* Establishment Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <Badge variant="outline" className="border-accent text-accent mb-4">
                  Establishment
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Founded on Excellence
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Elite Advisory Limited is a premier management consultancy firm headquartered in Nairobi, Kenya. 
                  We were established in May 2019 and incorporated under the Companies Act, 2019, marking the 
                  beginning of our journey to transform businesses across industries.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  What sets us apart is our ability to understand each client's unique needs and respond with 
                  innovative, cost-effective, and timely solutions. We combine technical expertise, professional 
                  consultancy, and strong supply chain capabilities to ensure quality delivery.
                </p>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <Card className="card-hover">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-lg primary-gradient flex items-center justify-center mb-6">
                      <Building className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Our Foundation</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent" />
                        <span>Established May 2019</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent" />
                        <span>Companies Act 2019 Incorporated</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent" />
                        <span>Nairobi, Kenya Headquarters</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent" />
                        <span>Government & Private Sector Focus</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Key Areas of Specialization */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <div className="text-center mb-16 animate-fade-in-up">
              <Badge variant="outline" className="border-accent text-accent mb-4">
                Our Expertise
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Key Areas of Specialization
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Deep expertise across critical business functions, delivering comprehensive solutions 
                that drive organizational success and sustainable growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
              {specializations.map((specialization, index) => (
                <Card key={index} className="card-hover text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full accent-gradient flex items-center justify-center mx-auto mb-6">
                      <specialization.icon className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-4">{specialization.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{specialization.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16 animate-fade-in-up">
              <Badge variant="outline" className="border-accent text-accent mb-4">
                Our Clients
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Who We Serve
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We partner with diverse organizations across sectors, delivering tailored solutions 
                that meet specific industry needs and drive exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-animation">
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
              <div className="animate-fade-in-up mb-12">
                <Badge variant="outline" className="border-accent text-accent mb-4">
                  Why Choose Us
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Your Strategic Partners for Success
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  At Elite Advisory, we are your strategic partners, delivering impactful solutions through 
                  innovation, expertise, and excellence. Our client-first approach guarantees results across diverse industries.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 stagger-animation">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-center space-x-3 text-left">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                    <span className="text-lg">{reason}</span>
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
      </div>
    </Layout>
  );
};

export default WhoWeAre;