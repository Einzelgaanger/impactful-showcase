import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { 
  Shield, 
  Award, 
  BarChart3, 
  Target, 
  TrendingUp, 
  Users,
  CheckCircle,
  ArrowRight,
  Zap,
  Globe,
  Lightbulb,
  Settings
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: Shield,
      title: 'Management Consultancy Services',
      description: 'Comprehensive strategic guidance to optimize operations, enhance efficiency, and drive sustainable business growth.',
      features: ['Strategic Planning', 'Process Optimization', 'Change Management', 'Performance Enhancement'],
      link: '/services/management-consultancy',
      gradient: 'primary-gradient'
    },
    {
      icon: Award,
      title: 'ISO Standards Implementation',
      description: 'Expert certification services for ISO 9001, ISO 14001, ISO 45001, and other international quality standards.',
      features: ['ISO 9001 Quality Management', 'ISO 14001 Environmental', 'ISO 45001 Safety', 'Certification Support'],
      link: '/services/iso-standards',
      gradient: 'accent-gradient'
    },
    {
      icon: BarChart3,
      title: 'Operations & Quality Auditing',
      description: 'Data-driven auditing solutions for compliance verification, risk assessment, and continuous improvement.',
      features: ['Internal Audits', 'Compliance Assessment', 'Risk Management', 'Performance Analytics'],
      link: '/services/quality-auditing',
      gradient: 'primary-gradient'
    },
    {
      icon: TrendingUp,
      title: 'Regulatory Compliance',
      description: 'Navigate complex regulatory requirements across industries with expert guidance and implementation support.',
      features: ['Regulatory Assessment', 'Compliance Framework', 'Documentation', 'Training Programs'],
      link: '/services/regulatory-compliance',
      gradient: 'accent-gradient'
    },
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Future-focused planning methodologies to position your organization for long-term success and growth.',
      features: ['Vision Development', 'Market Analysis', 'Goal Setting', 'Implementation Roadmap'],
      link: '/services/strategic-planning',
      gradient: 'primary-gradient'
    },
    {
      icon: Users,
      title: 'Capacity Building',
      description: 'Comprehensive training and development programs to enhance organizational capabilities and performance.',
      features: ['Skills Development', 'Leadership Training', 'Team Building', 'Knowledge Transfer'],
      link: '/services/capacity-building',
      gradient: 'accent-gradient'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Accelerated Results',
      description: 'Proven methodologies that deliver measurable improvements in weeks, not months.'
    },
    {
      icon: Globe,
      title: 'Global Expertise',
      description: 'International standards compliance and best practices from around the world.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'Cutting-edge solutions that keep your organization ahead of the competition.'
    },
    {
      icon: Settings,
      title: 'Customized Approach',
      description: 'Tailored solutions designed specifically for your industry and business needs.'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <Badge variant="outline" className="border-accent text-accent mb-6">
                Our Services
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Comprehensive Business
                <span className="block heading-gradient mt-2">Solutions & Services</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From strategic planning to quality management, we offer a complete suite of consulting services 
                designed to transform your business and drive exceptional results.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 stagger-animation">
              {mainServices.map((service, index) => (
                <Card key={index} className="card-hover border-border/50 group overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`p-8 ${service.gradient} text-white`}>
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-16 h-16 rounded-lg bg-white/20 flex items-center justify-center">
                          <service.icon className="h-8 w-8 text-white" />
                        </div>
                        <ArrowRight className="h-6 w-6 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                      <p className="text-white/90 leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>
                    <div className="p-8">
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button variant="ghost" className="w-full justify-between text-accent hover:text-accent-light" asChild>
                        <Link to={service.link}>
                          Learn More
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <div className="text-center mb-16 animate-fade-in-up">
              <Badge variant="outline" className="border-accent text-accent mb-4">
                Why Choose Our Services
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                The Advantage of Excellence
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our comprehensive approach combines deep industry expertise with innovative methodologies 
                to deliver solutions that create lasting value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 rounded-full accent-gradient flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-10 w-10 text-accent-foreground" />
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

        {/* Process Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16 animate-fade-in-up">
              <Badge variant="outline" className="border-accent text-accent mb-4">
                Our Process
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                How We Work With You
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our proven methodology ensures successful project delivery and sustainable results 
                through structured phases and continuous collaboration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 stagger-animation">
              {[
                { step: '01', title: 'Discovery & Assessment', description: 'Comprehensive analysis of your current state and objectives' },
                { step: '02', title: 'Strategy Development', description: 'Custom solution design aligned with your business goals' },
                { step: '03', title: 'Implementation', description: 'Structured execution with continuous monitoring and support' },
                { step: '04', title: 'Optimization', description: 'Ongoing refinement and performance enhancement' }
              ].map((process, index) => (
                <Card key={index} className="card-hover text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-accent mb-4">{process.step}</div>
                    <h3 className="text-lg font-semibold mb-3">{process.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{process.description}</p>
                  </CardContent>
                </Card>
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
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Contact our expert consultants today to discuss how our services can drive 
                measurable improvements in your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button variant="accent" size="xl" asChild>
                  <Link to="/contact">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link to="/who-we-are">Learn About Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services;