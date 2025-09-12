import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { 
  Target, 
  Eye, 
  Heart, 
  Shield, 
  Users, 
  Lightbulb,
  Award,
  Globe,
  TrendingUp,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const About = () => {
  const coreValues = [
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Our clients are at the center of everything we do. We understand their unique needs and deliver solutions that create real value.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We operate with the highest ethical standards, building trust through transparency, honesty, and consistent performance.'
    },
    {
      icon: Award,
      title: 'Professionalism',
      description: 'We maintain the highest professional standards in all our interactions, delivering excellence in every engagement.'
    },
    {
      icon: Users,
      title: 'Team Work',
      description: 'We believe in the power of collaboration, working together to achieve exceptional results for our clients.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Improvement',
      description: 'We are committed to continuous learning, innovation, and improvement in all aspects of our business.'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction Rate' },
    { number: '15+', label: 'Years of Excellence' },
    { number: '50+', label: 'Expert Consultants' },
    { number: '25+', label: 'Countries Served' },
    { number: '100+', label: 'ISO Certifications' }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <Badge variant="outline" className="border-accent text-accent mb-6">
                About Our Company
              </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About
              <span className="block heading-gradient mt-2">Elite Advisory Limited</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Dynamic and diversified company committed to delivering practical solutions that create real impact. 
              Established in May 2019 and incorporated under the Companies Act, 2019.
            </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Mission */}
              <Card className="card-hover border-primary/20 animate-fade-in-left">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-lg primary-gradient flex items-center justify-center mr-4">
                      <Target className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h2 className="text-3xl font-bold">Our Mission</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    To provide practical solutions that help organizations improve, grow, and create lasting value. 
                    We combine technical expertise, professional consultancy, and strong supply chain capabilities 
                    to ensure quality delivery that consistently meets — and often exceeds — expectations.
                  </p>
                  <div className="flex items-center space-x-2 text-accent">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">Committed to your success</span>
                  </div>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card className="card-hover border-accent/20 animate-fade-in-right">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-lg accent-gradient flex items-center justify-center mr-4">
                      <Eye className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <h2 className="text-3xl font-bold">Our Vision</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    To be a trusted partner in driving sustainable growth, excellence, and transformative value 
                    across industries worldwide. We envision being the partner of choice for lasting success, 
                    delivering quality and exceeding expectations in every engagement.
                  </p>
                  <div className="flex items-center space-x-2 text-accent">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">Leading the future of business</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <div className="text-center mb-16 animate-fade-in-up">
              <Badge variant="outline" className="border-accent text-accent mb-4">
                Our Core Values
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Principles That Guide Us
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These fundamental values shape our culture, guide our decisions, and define 
                how we interact with clients, partners, and communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
              {coreValues.map((value, index) => (
                <Card key={index} className="card-hover border-border/50 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 rounded-full accent-gradient flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="h-10 w-10 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-accent transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-in-up">
                <Badge variant="outline" className="border-accent text-accent mb-4">
                  Our Story
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  A Legacy of Excellence
                </h2>
              </div>

              <div className="space-y-8 animate-fade-in-up">
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="text-xl leading-relaxed mb-6">
                    Elite is a dynamic and diversified company committed to delivering practical solutions that create real impact. 
                    Established in May 2019 and incorporated under the Companies Act, 2019, we have grown into a trusted partner 
                    for both government and private sector clients.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    What sets us apart is our ability to understand each client's unique needs and respond with innovative, 
                    cost-effective, and timely solutions. We combine technical expertise, professional consultancy, and strong 
                    supply chain capabilities to ensure quality delivery that consistently meets — and often exceeds — expectations.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    At Elite, we believe success is built on trust, integrity, and consistent performance. We go beyond simply 
                    providing products or services — we create long-term value that empowers our clients to achieve their goals 
                    with confidence.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Our focus is simple yet powerful: deliver quality, exceed expectations, and remain the partner of choice for 
                    lasting success. From construction works to management consultancy, we provide comprehensive solutions that 
                    transform businesses and drive exceptional results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="section-padding primary-gradient text-primary-foreground">
          <div className="container-custom">
            <div className="text-center mb-16 animate-fade-in-up">
              <Badge variant="outline" className="border-primary-foreground text-primary-foreground mb-4">
                Our Achievements
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Proven Track Record
              </h2>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                Numbers that speak to our commitment to excellence and the trust our clients place in us.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 stagger-animation">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-accent">
                    {achievement.number}
                  </div>
                  <div className="text-primary-foreground/80 font-medium">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-custom text-center">
            <div className="max-w-4xl mx-auto animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Partner with Us?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Join hundreds of organizations that have transformed their operations and achieved 
                sustainable growth through our expert consulting services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button variant="accent" size="xl" asChild>
                  <Link to="/contact">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;