import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Layout from '@/components/layout/Layout';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  Linkedin,
  Twitter,
  Facebook
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@company.com',
      subtitle: 'sales@company.com',
      action: 'mailto:info@company.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (234) 567-8900',
      subtitle: '+1 (234) 567-8901',
      action: 'tel:+1234567890'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Business Avenue',
      subtitle: 'Suite 100, Business City, BC 12345',
      action: '#'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM',
      subtitle: 'Sat: 10:00 AM - 2:00 PM',
      action: '#'
    }
  ];

  const offices = [
    {
      city: 'New York',
      address: '123 Business Avenue, Suite 100',
      phone: '+1 (234) 567-8900',
      email: 'ny@company.com'
    },
    {
      city: 'London',
      address: '45 Corporate Street, Floor 5',
      phone: '+44 20 1234 5678',
      email: 'london@company.com'
    },
    {
      city: 'Singapore',
      address: '88 Business District, Tower A',
      phone: '+65 6123 4567',
      email: 'sg@company.com'
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
                Contact Us
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Let's Start Your
                <span className="block heading-gradient mt-2">Transformation Journey</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ready to elevate your business? Our expert consultants are here to discuss your needs 
                and design a customized solution that drives real results.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="card-hover">
                  <CardContent className="p-8">
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
                      <p className="text-muted-foreground">
                        Fill out the form below and we'll get back to you within 24 hours.
                      </p>
                    </div>
                    
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="John" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Doe" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="john.doe@company.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" type="tel" placeholder="+1 (234) 567-8900" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input id="company" placeholder="Your Company Name" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interest</Label>
                        <select 
                          id="service" 
                          className="w-full h-11 px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Select a service</option>
                          <option value="management-consultancy">Management Consultancy</option>
                          <option value="iso-standards">ISO Standards</option>
                          <option value="quality-auditing">Quality Auditing</option>
                          <option value="regulatory-compliance">Regulatory Compliance</option>
                          <option value="strategic-planning">Strategic Planning</option>
                          <option value="capacity-building">Capacity Building</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us about your project and how we can help..."
                          className="min-h-[120px]"
                        />
                      </div>
                      
                      <Button variant="accent" size="lg" className="w-full md:w-auto">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="card-hover">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
                    <div className="space-y-6">
                      {contactInfo.map((info, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-12 h-12 rounded-lg primary-gradient flex items-center justify-center flex-shrink-0">
                            <info.icon className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">{info.title}</h4>
                            <p className="text-sm text-muted-foreground">{info.details}</p>
                            <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
                    <div className="flex space-x-4">
                      <Button variant="ghost" size="icon" className="hover:text-accent">
                        <Linkedin className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="hover:text-accent">
                        <Twitter className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="hover:text-accent">
                        <Facebook className="h-5 w-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover primary-gradient text-primary-foreground">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
                    <div className="space-y-3">
                      {[
                        '24/7 Expert Support',
                        'Free Initial Consultation',
                        'Proven Track Record',
                        'Global Experience'
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <div className="text-center mb-16 animate-fade-in-up">
              <Badge variant="outline" className="border-accent text-accent mb-4">
                Our Offices
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Global Presence, Local Expertise
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                With offices across three continents, we're always close to you. 
                Our global network ensures comprehensive support wherever you are.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-animation">
              {offices.map((office, index) => (
                <Card key={index} className="card-hover text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full accent-gradient flex items-center justify-center mx-auto mb-6">
                      <MapPin className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{office.city}</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p className="text-sm">{office.address}</p>
                      <p className="text-sm">{office.phone}</p>
                      <p className="text-sm">{office.email}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-in-up">
                <Badge variant="outline" className="border-accent text-accent mb-4">
                  Frequently Asked Questions
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Quick Answers
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-animation">
                {[
                  {
                    question: 'How long does a typical project take?',
                    answer: 'Project timelines vary based on scope and complexity, typically ranging from 2-12 months. We provide detailed timelines during our initial consultation.'
                  },
                  {
                    question: 'Do you work with small businesses?',
                    answer: 'Yes, we work with organizations of all sizes, from startups to Fortune 500 companies. Our solutions are scalable and customized to your needs.'
                  },
                  {
                    question: 'What industries do you serve?',
                    answer: 'We serve diverse industries including manufacturing, healthcare, technology, finance, and professional services across global markets.'
                  },
                  {
                    question: 'Is the initial consultation free?',
                    answer: 'Yes, we offer a complimentary initial consultation to understand your needs and discuss how our services can benefit your organization.'
                  }
                ].map((faq, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-3">{faq.question}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;