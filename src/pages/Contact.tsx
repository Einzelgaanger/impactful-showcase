import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  Linkedin,
  Twitter,
  Facebook,
  MessageCircle,
  ArrowRight,
  ChevronRight,
  Globe,
  Building
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'eliteadvisory@outlook.com',
      subtitle: 'Professional Consultation',
      action: 'mailto:eliteadvisory@outlook.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+254 100 169 211',
      subtitle: 'Available Mon-Fri, 8:00 AM - 5:00 PM EAT',
      action: 'tel:+254100169211'
    },
    {
      icon: MapPin,
      title: 'Nairobi Office',
      details: 'Nairobi, Kenya',
      subtitle: 'Headquarters Established May 2019',
      action: 'https://maps.google.com/?q=Nairobi,Kenya'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday',
      subtitle: '8:00 AM - 5:00 PM EAT',
      action: ''
    }
  ];

  const offices = [
    {
      city: 'Nairobi',
      address: 'Nairobi, Kenya',
      phone: '+254 100 169 211',
      email: 'eliteadvisory@outlook.com',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden text-white">
          <div className="absolute inset-0 -z-10">
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80" 
              alt="Professional office environment"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/70 to-slate-900/80"></div>
          </div>
          <div className="container-custom relative z-10 px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Badge className="bg-amber-500/20 border-amber-400/30 text-amber-100 backdrop-blur-sm mb-4 hover:bg-amber-500/30 transition-colors text-xs sm:text-sm">
                Get In Touch
              </Badge>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">
                Let's Start a <span className="text-amber-400">Conversation</span>
              </h1>
              <p className="text-sm sm:text-base text-white/90 mb-6 leading-relaxed max-w-3xl mx-auto">
                Ready to partner with us? Our expert team is here to discuss your needs and design 
                customized solutions that create lasting value for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="default" className="bg-amber-500 text-white hover:bg-amber-600 text-sm sm:text-base transition-colors" asChild>
                  <Link to="#contact-form">
                    Send a Message
                    <MessageCircle className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="default" className="text-white border-white/30 hover:bg-white/10 text-sm sm:text-base transition-colors" asChild>
                  <Link to="#offices">
                    Our Location
                    <MapPin className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section id="contact-form" className="py-16 md:py-24 bg-slate-50">
          <div className="container-custom px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-8">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="p-8 md:p-12">
                    <div className="mb-10">
                      <Badge className="bg-amber-500/10 text-amber-600 border-amber-500/20 mb-4 hover:bg-amber-500/20 transition-colors">
                        Get In Touch
                      </Badge>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Send Us a Message</h2>
                      <p className="text-slate-600 text-lg">
                        Fill out the form below and we'll get back to you within 24 hours.
                      </p>
                    </div>
                    
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-base font-medium text-slate-700">First Name</Label>
                          <Input 
                            id="firstName" 
                            placeholder="Your first name" 
                            className="h-12 px-4 text-base border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-colors"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-base font-medium text-slate-700">Last Name</Label>
                          <Input 
                            id="lastName" 
                            placeholder="Your last name" 
                            className="h-12 px-4 text-base border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-colors"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-base font-medium text-slate-700">Email</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="your@email.com" 
                            className="h-12 px-4 text-base border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-colors"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-base font-medium text-slate-700">Phone</Label>
                          <Input 
                            id="phone" 
                            type="tel" 
                            placeholder="+254 100 169 211" 
                            className="h-12 px-4 text-base border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-colors"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-base font-medium text-slate-700">Company</Label>
                        <Input 
                          id="company" 
                          placeholder="Your Company Name" 
                          className="h-12 px-4 text-base border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-colors"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="service" className="text-base font-medium text-slate-700">Service Interest</Label>
                        <select 
                          id="service" 
                          name="service"
                          aria-label="Select a service"
                          className="w-full h-12 px-4 text-base border border-slate-200 rounded-lg bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-colors"
                        >
                          <option value="">Select a service</option>
                          <option value="construction-works">Construction Works</option>
                          <option value="maintenance-services">General Maintenance & Works Services</option>
                          <option value="materials-supply">Construction Materials Supply</option>
                          <option value="management-consultancy">Management Consultancy</option>
                          <option value="ict-solutions">ICT Solutions</option>
                          <option value="office-solutions">Office Solutions</option>
                          <option value="automotive-supplies">Automotive Supplies</option>
                          <option value="corporate-branding">Corporate Branding</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-base font-medium text-slate-700">Message</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us about your project and how we can help..."
                          className="min-h-[150px] p-4 text-base border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-colors"
                        />
                      </div>
                      
                      <div className="pt-2">
                        <Button 
                          type="submit" 
                          size="default" 
                          className="bg-amber-500 hover:bg-amber-600 text-white px-8 h-12 text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="lg:col-span-4 space-y-6">
                {/* Contact Info Card */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-8 text-slate-900">Contact Information</h3>
                    <div className="space-y-6">
                      {contactInfo.map((info, index) => (
                        <div key={index} className="flex items-start group">
                          <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                            <info.icon className="h-5 w-5" />
                          </div>
                          <div className="ml-4">
                            <h4 className="font-semibold text-lg mb-1 group-hover:text-amber-600 transition-colors text-slate-800">
                              {info.title}
                            </h4>
                            <a 
                              href={info.action} 
                              className="block text-slate-600 hover:text-amber-600 transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {info.details}
                            </a>
                            <p className="text-sm text-slate-500">{info.subtitle}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>

                {/* Why Choose Us Card */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-lg overflow-hidden text-white">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/20 backdrop-blur-sm flex items-center justify-center mb-6">
                      <CheckCircle className="h-6 w-6 text-amber-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                    <div className="space-y-4">
                      {[
                        'Customer Focus',
                        'Integrity & Professionalism',
                        'Proven Track Record',
                        'Global Experience'
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-amber-400 flex-shrink-0" />
                          <span className="text-white/90">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Location */}
        <section id="offices" className="py-16 md:py-24">
          <div className="container-custom px-4">
            <div className="text-center mb-16">
              <Badge className="bg-amber-500/10 text-amber-600 border-amber-500/20 mb-4 hover:bg-amber-500/20 transition-colors">
                Our Office
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                Nairobi Headquarters
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Elite Advisory Limited is headquartered in Nairobi, Kenya. 
                Established in May 2019, we serve clients across Kenya and beyond.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={offices[0].image}
                    alt={`${offices[0].city} Office`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                </div>
                <div className="p-8 bg-white">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 mr-6">
                      <Building className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{offices[0].city} Office</h3>
                      <p className="text-slate-600">Headquarters</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-amber-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-slate-800">Address</p>
                          <p className="text-slate-600">{offices[0].address}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-slate-800">Phone</p>
                          <a href={`tel:${offices[0].phone.replace(/\D/g, '')}`} className="text-slate-600 hover:text-amber-600 transition-colors">
                            {offices[0].phone}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-slate-800">Email</p>
                          <a href={`mailto:${offices[0].email}`} className="text-slate-600 hover:text-amber-600 transition-colors">
                            {offices[0].email}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-slate-800">Business Hours</p>
                          <p className="text-slate-600">Mon-Fri: 8:00 AM - 5:00 PM EAT</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="default" 
                    className="mt-6 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 transition-all duration-300"
                    asChild
                  >
                    <Link to="https://maps.google.com/?q=Nairobi,Kenya" target="_blank">
                      Get Directions
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container-custom px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="bg-amber-500/10 text-amber-600 border-amber-500/20 mb-4 hover:bg-amber-500/20 transition-colors">
                  Frequently Asked Questions
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                  Quick Answers to Common Questions
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Find answers to some of the most common questions about our services and processes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    question: 'How long does a typical project take?',
                    answer: 'Project timelines vary based on scope and complexity, typically ranging from 2-12 months. We provide detailed timelines during our initial consultation.'
                  },
                  {
                    question: 'Do you work with small businesses?',
                    answer: 'Yes, we work with organizations of all sizes, from startups to large corporations. Our solutions are scalable and customized to your needs.'
                  },
                  {
                    question: 'What industries do you serve?',
                    answer: 'We serve diverse industries including construction, manufacturing, healthcare, technology, finance, and professional services across Kenya and beyond.'
                  },
                  {
                    question: 'Is the initial consultation free?',
                    answer: 'Yes, we offer a complimentary initial consultation to understand your needs and discuss how our services can benefit your organization.'
                  },
                  {
                    question: 'What makes your approach unique?',
                    answer: 'Our client-first approach combines deep industry expertise with innovative solutions tailored to your specific challenges and goals.'
                  },
                  {
                    question: 'How do you ensure quality?',
                    answer: 'We maintain rigorous quality standards through continuous improvement processes, certified professionals, and a commitment to excellence in every project.'
                  }
                ].map((faq, index) => (
                  <div 
                    key={index} 
                    className="group bg-white rounded-xl p-6 border border-slate-100 hover:border-amber-500/30 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 mr-4 mt-0.5 flex-shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                        <MessageCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-amber-600 transition-colors text-slate-800">
                          {faq.question}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                        <div className="mt-3 flex items-center text-sm font-medium text-amber-600 group-hover:translate-x-1 transition-transform">
                          <span>Learn more</span>
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <h3 className="text-xl font-semibold mb-4 text-slate-900">Still have questions?</h3>
                <p className="text-slate-600 mb-6">
                  Our team is here to help. Contact us for more information.
                </p>
                <Button size="default" className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                  <Link to="#contact-form">
                    Contact Us Now
                    <MessageCircle className="ml-2 h-5 w-5" />
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

export default Contact;