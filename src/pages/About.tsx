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
      icon: Shield,
      title: 'Integrity',
      description: 'We conduct business with the highest ethical standards, ensuring transparency and honesty in all our interactions.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for exceptional quality in every project, delivering solutions that exceed client expectations.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace cutting-edge methodologies and creative problem-solving to drive continuous improvement.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork, fostering partnerships that create lasting value for all stakeholders.'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'We are committed to responsible business practices that benefit society and the environment.'
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'We empower organizations and individuals to achieve their full potential through strategic development.'
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
                Excellence Through
                <span className="block heading-gradient mt-2">Strategic Partnership</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                For over 15 years, we've been helping organizations achieve operational excellence, 
                regulatory compliance, and sustainable growth through expert consulting and innovative solutions.
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
                    To empower businesses worldwide by providing exceptional consulting services, strategic guidance, 
                    and innovative solutions that drive sustainable growth, operational excellence, and competitive advantage 
                    in an ever-evolving global marketplace.
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
                    To be the globally recognized leader in business consulting and quality management, 
                    setting the standard for excellence and innovation while creating lasting value for our clients, 
                    communities, and stakeholders worldwide.
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
                    Founded in 2008 with a vision to transform how businesses approach quality management and 
                    strategic planning, our company has grown from a small consultancy into a globally recognized 
                    leader in business excellence.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    Our journey began when our founders recognized the critical gap between traditional consulting 
                    approaches and the dynamic needs of modern organizations. We pioneered innovative methodologies 
                    that combine strategic thinking with practical implementation, ensuring our clients achieve 
                    sustainable results.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    Today, we serve organizations across 25 countries, from emerging startups to Fortune 500 companies, 
                    helping them navigate complex regulatory environments, implement world-class quality systems, 
                    and achieve operational excellence that drives competitive advantage.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Our commitment to innovation, integrity, and client success continues to drive everything we do. 
                    As we look to the future, we remain dedicated to empowering businesses worldwide to achieve 
                    their highest potential.
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