import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImages from '@/assets/heroImages';
import Layout from '@/components/layout/Layout';
import Logo from '@/components/Logo';
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

// About page images (keeping other images specific to the about page)
const aboutImages = {
  team: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80',
  values: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1484&q=80',
  mission: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  vision: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80',
  achievement: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
};

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
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80" 
            alt="Professional business meeting"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/70 to-slate-900/80"></div>
        </div>
        
        <div className="container-custom px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-white">
              <Badge className="bg-amber-500/20 border-amber-400/30 text-amber-100 backdrop-blur-sm mb-4 hover:bg-amber-500/30 transition-colors text-xs sm:text-sm">
                About Us
              </Badge>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">
                Building a Legacy of <span className="text-amber-400">Excellence</span>
              </h1>
              <p className="text-sm sm:text-base text-white/90 mb-6 leading-relaxed max-w-3xl mx-auto">
                Elite Advisory Limited is a dynamic and diversified company committed to delivering practical solutions 
                that create real impact. Established in May 2019 and incorporated under the Companies Act, 2019, 
                we have grown into a trusted partner for both government and private sector clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="default" className="bg-amber-500 text-white hover:bg-amber-600 text-sm sm:text-base transition-colors" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
                <Button variant="outline" size="default" className="text-white border-white/30 hover:bg-white/10 text-sm sm:text-base transition-colors" asChild>
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Badge className="bg-amber-500/10 text-amber-600 border-amber-500/20 mb-4 hover:bg-amber-500/20 transition-colors">
              Our Purpose
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Guiding Principles That Define Us
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Our mission and vision are the foundation of everything we do, driving us to deliver exceptional value to our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mission Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <img 
                src={aboutImages.mission} 
                alt="Our Mission"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80"></div>
              <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
                <div className="w-16 h-16 bg-amber-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 drop-shadow-lg">Our Mission</h3>
                <p className="text-slate-200 leading-relaxed drop-shadow-md">
                  To provide practical solutions that help organizations improve, grow, and create lasting value through 
                  innovative consulting and advisory services. We are committed to delivering measurable results that 
                  drive sustainable success for our clients.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img 
                src={aboutImages.vision} 
                alt="Visionary perspective"
                className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent"></div>
              <div className="relative p-8 h-full flex flex-col justify-end min-h-[400px]">
                <Badge className="bg-white text-primary border-none mb-4 self-start">
                  Our Vision
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Shaping the Future of Business
                </h2>
                <p className="text-white/90 mb-6">
                  We envision becoming a leading provider of integrated business solutions, 
                  recognized for our innovation, integrity, and commitment to excellence in Africa and beyond.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { text: 'Innovation', icon: Lightbulb },
                    { text: 'Integrity', icon: Shield },
                    { text: 'Excellence', icon: Award },
                    { text: 'Impact', icon: TrendingUp }
                  ].map((item, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                      <item.icon className="h-6 w-6 text-white mb-2" />
                      <div className="font-medium text-white">{item.text}</div>
                    </div>
                  ))}
                </div>
              </div>
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
                  className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 hover:border-amber-400/30 hover:-translate-y-1"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="w-14 h-14 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-amber-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Team Image */}
            <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <div className="relative aspect-video w-full">
                <img 
                  src={aboutImages.team}
                  alt="Our team working together"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Our Dedicated Team</h3>
                  <p className="text-slate-100 max-w-2xl">
                    Meet the passionate professionals behind Elite Advisory Limited, committed to delivering excellence in every project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-amber-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-amber-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          
          <div className="container-custom px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 mb-4 hover:bg-amber-500/20 transition-colors">
                Get Started
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join hundreds of organizations that have transformed their operations and achieved 
                sustainable growth through our expert consulting services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  className="bg-amber-500 text-white hover:bg-amber-600 px-8 h-12 text-base font-medium transition-colors" 
                  asChild
                >
                  <Link to="/contact" className="flex items-center">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="text-white border-white/30 hover:bg-white/10 px-8 h-12 text-base font-medium transition-colors" 
                  asChild
                >
                  <Link to="/services" className="flex items-center">
                    Explore Our Services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
  );
};

export default About;