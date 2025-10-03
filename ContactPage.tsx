import { Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { useEffect } from 'react';
import Layout from '@/react-app/components/Layout';

export default function ContactPage() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all scroll-animate elements
    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden">
        {/* Background Animation Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200 rounded-full opacity-10 animate-float"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-200 rounded-full opacity-15 animate-float-reverse"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-indigo-200 rounded-full opacity-20 animate-rotate3d"></div>
        </div>

        <header className="text-center mb-12 scroll-animate">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-glow animate-float">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 animate-float-reverse">
            Have questions? We're here to help!
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="scroll-animate" style={{ animationDelay: '0ms' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-glow">
              Contact Information
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 card-3d glass-effect p-4 rounded-lg">
                <div className="bg-blue-100 p-3 rounded-lg animate-pulse3d">
                  <Mail className="h-6 w-6 text-blue-600 feature-icon-3d" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                  <p className="text-gray-700 mb-1">
                    <a 
                      href="mailto:sksaminuddin88@gmail.com" 
                      className="text-blue-600 hover:text-blue-800 font-medium button-3d inline-block"
                    >
                      sksaminuddin88@gmail.com
                    </a>
                  </p>
                  <p className="text-sm text-gray-600">
                    For all inquiries, support requests, and feedback
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 card-3d glass-effect p-4 rounded-lg">
                <div className="bg-green-100 p-3 rounded-lg animate-pulse3d" style={{ animationDelay: '0.5s' }}>
                  <Clock className="h-6 w-6 text-green-600 feature-icon-3d" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
                  <p className="text-gray-700 mb-1">Within 24 hours</p>
                  <p className="text-sm text-gray-600">
                    On business days (Monday - Friday)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 card-3d glass-effect p-4 rounded-lg">
                <div className="bg-purple-100 p-3 rounded-lg animate-pulse3d" style={{ animationDelay: '1s' }}>
                  <MessageCircle className="h-6 w-6 text-purple-600 feature-icon-3d" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Support Types</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Technical support and troubleshooting</li>
                    <li>• Account and billing inquiries</li>
                    <li>• Feature requests and feedback</li>
                    <li>• Refund and cancellation requests</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 glass-effect rounded-lg border border-blue-200 card-3d animate-morph">
              <h3 className="font-semibold text-blue-900 mb-2">Need Urgent Help?</h3>
              <p className="text-blue-800 text-sm">
                For urgent matters that require immediate attention, please email us directly 
                at <strong>sksaminuddin88@gmail.com</strong> with "URGENT" in the subject line. 
                We prioritize urgent requests and will respond as quickly as possible.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="scroll-animate" style={{ animationDelay: '200ms' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-glow">
              Send us a Message
            </h2>
            
            <form className="space-y-6 card-3d glass-effect p-6 rounded-xl">
              <div className="animate-float" style={{ animationDelay: '0ms' }}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:shadow-lg"
                  placeholder="Your full name"
                />
              </div>

              <div className="animate-float" style={{ animationDelay: '100ms' }}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:shadow-lg"
                  placeholder="your@email.com"
                />
              </div>

              <div className="animate-float" style={{ animationDelay: '200ms' }}>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:shadow-lg"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="feature">Feature Request</option>
                  <option value="refund">Refund Request</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div className="animate-float" style={{ animationDelay: '300ms' }}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-vertical hover:shadow-lg"
                  placeholder="Please describe your question or concern in detail..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="button-3d w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold shadow-lg flex items-center justify-center group animate-morph"
              >
                <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Send Message
              </button>
            </form>

            <div className="mt-6 p-4 glass-effect border border-yellow-200 rounded-lg card-3d">
              <p className="text-yellow-800 text-sm">
                <strong>Note:</strong> This is a decorative contact form for display purposes. 
                For actual support, please email us directly at{' '}
                <strong>sksaminuddin88@gmail.com</strong>
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16 scroll-animate" style={{ animationDelay: '400ms' }}>
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8 text-glow">
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-3d glass-effect border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">
                How quickly do you respond to emails?
              </h3>
              <p className="text-gray-700 text-sm">
                We typically respond within 24 hours during business days. Urgent matters 
                are prioritized and may receive faster responses.
              </p>
            </div>
            
            <div className="card-3d glass-effect border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">
                What information should I include in my support request?
              </h3>
              <p className="text-gray-700 text-sm">
                Please include your account email, a detailed description of the issue, 
                any error messages, and steps to reproduce the problem if applicable.
              </p>
            </div>
            
            <div className="card-3d glass-effect border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">
                Do you offer phone or chat support?
              </h3>
              <p className="text-gray-700 text-sm">
                Currently, we provide support exclusively via email to ensure detailed, 
                documented responses and maintain high quality assistance.
              </p>
            </div>
            
            <div className="card-3d glass-effect border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">
                Can I request new features or suggest improvements?
              </h3>
              <p className="text-gray-700 text-sm">
                Absolutely! We value user feedback and regularly implement feature requests. 
                Please email us with your suggestions and use cases.
              </p>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <div className="mt-12 text-center p-6 glass-effect rounded-lg scroll-animate card-3d animate-morph" style={{ animationDelay: '600ms' }}>
          <p className="text-gray-700">
            For urgent matters, please email us directly at{' '}
            <a 
              href="mailto:sksaminuddin88@gmail.com" 
              className="font-semibold text-blue-600 hover:text-blue-800 button-3d inline-block"
            >
              sksaminuddin88@gmail.com
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
