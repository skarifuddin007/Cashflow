import { useEffect } from 'react';
import Layout from '@/react-app/components/Layout';

export default function PrivacyPage() {
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
          <div className="absolute top-20 left-10 w-40 h-40 bg-green-200 rounded-full opacity-15 animate-float"></div>
          <div className="absolute bottom-40 right-20 w-56 h-56 bg-blue-200 rounded-full opacity-10 animate-float-reverse"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-rotate3d"></div>
        </div>

        <div className="prose prose-lg max-w-none">
          <header className="mb-12 text-center scroll-animate">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 text-glow animate-float">
              Privacy Policy for TaskFlow AI
            </h1>
            <p className="text-gray-600 text-lg animate-float-reverse">
              <strong>Last Updated:</strong> October 2, 2025
            </p>
          </header>

          <section className="mb-8 scroll-animate card-3d glass-effect p-6 rounded-xl" style={{ animationDelay: '0ms' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-glow">Introduction</h2>
            <p className="text-gray-700 mb-4">
              At TaskFlow AI, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our intelligent task management platform and related services.
            </p>
            <p className="text-gray-700">
              By using TaskFlow AI, you consent to the data practices described in this policy. We encourage you to read this Privacy Policy carefully and contact us if you have any questions about our practices or your personal information.
            </p>
          </section>

          <section className="mb-8 scroll-animate card-3d glass-effect p-6 rounded-xl" style={{ animationDelay: '100ms' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-glow">Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect several types of information to provide and improve our services:
            </p>
            
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-2">Personal Data</h3>
                <p className="text-gray-700 text-sm">
                  Information that identifies you personally, including your name, email address, company information, and billing details when you create an account or subscribe to our services.
                </p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h3 className="font-semibold text-gray-900 mb-2">Usage Data</h3>
                <p className="text-gray-700 text-sm">
                  Information about how you interact with our platform, including task creation patterns, feature usage, login frequency, and performance metrics to improve our AI algorithms.
                </p>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-gray-900 mb-2">Technical Information</h3>
                <p className="text-gray-700 text-sm">
                  Device information, IP addresses, browser type and version, operating system, and other technical identifiers necessary for service functionality and security.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8 scroll-animate card-3d glass-effect p-6 rounded-xl" style={{ animationDelay: '200ms' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-glow">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the collected information for various purposes including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Providing and maintaining our task management services</li>
              <li>Processing payments and managing subscriptions through secure payment gateways</li>
              <li>Personalizing your experience and improving our AI recommendation algorithms</li>
              <li>Sending important service notifications, updates, and security alerts</li>
              <li>Providing customer support and responding to your inquiries</li>
              <li>Analyzing usage patterns to enhance platform performance and user experience</li>
              <li>Ensuring platform security and preventing fraudulent activities</li>
            </ul>
            <p className="text-gray-700">
              We do not sell your personal information to third parties or use it for purposes other than those described in this policy without your explicit consent.
            </p>
          </section>

          <section className="mb-8 scroll-animate card-3d glass-effect p-6 rounded-xl" style={{ animationDelay: '300ms' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-glow">Data Storage and Security</h2>
            <p className="text-gray-700 mb-4">
              We implement industry-standard security measures to protect your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>End-to-end encryption for data transmission and storage</li>
              <li>Regular security audits and penetration testing</li>
              <li>Multi-factor authentication options for enhanced account security</li>
              <li>Secure cloud infrastructure with automated backups and disaster recovery</li>
              <li>Limited access controls ensuring only authorized personnel can access your data</li>
            </ul>
            <p className="text-gray-700">
              While we strive to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. We continuously update our security practices to maintain the highest level of data protection.
            </p>
          </section>

          <section className="mb-8 scroll-animate card-3d glass-effect p-6 rounded-xl" style={{ animationDelay: '400ms' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-glow">Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              TaskFlow AI integrates with various third-party services to enhance functionality:
            </p>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-4">
              <h3 className="font-semibold text-yellow-900 mb-2">Payment Processing</h3>
              <p className="text-yellow-800 text-sm">
                We use Paddle as our payment processor. Paddle handles all payment transactions and stores your billing information securely. We never store complete credit card information on our servers.
              </p>
            </div>
            
            <p className="text-gray-700 mb-4">
              Other third-party integrations may include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Analytics services for usage tracking and service improvement</li>
              <li>Email service providers for transactional and notification emails</li>
              <li>Cloud storage providers for data backup and redundancy</li>
              <li>Integration platforms for connecting with external productivity tools</li>
            </ul>
            <p className="text-gray-700">
              All third-party services we use are carefully vetted for privacy compliance and data security standards.
            </p>
          </section>

          <section className="mb-8 scroll-animate card-3d glass-effect p-6 rounded-xl" style={{ animationDelay: '500ms' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-glow">Your Rights (GDPR Compliance)</h2>
            <p className="text-gray-700 mb-4">
              Under the General Data Protection Regulation (GDPR) and other applicable privacy laws, you have the following rights:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2">Right to Access</h3>
                <p className="text-blue-800 text-sm">
                  Request a copy of all personal data we hold about you, including how it's being processed.
                </p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-900 mb-2">Right to Rectification</h3>
                <p className="text-green-800 text-sm">
                  Correct any inaccurate or incomplete personal information in your account.
                </p>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-purple-900 mb-2">Right to Erasure</h3>
                <p className="text-purple-800 text-sm">
                  Request deletion of your personal data when it's no longer necessary for our services.
                </p>
              </div>
              
              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <h3 className="font-semibold text-red-900 mb-2">Right to Portability</h3>
                <p className="text-red-800 text-sm">
                  Export your data in a structured, machine-readable format for transfer to another service.
                </p>
              </div>
            </div>
            
            <p className="text-gray-700">
              To exercise any of these rights, please contact us at <strong>sksaminuddin88@gmail.com</strong>. We will respond to your request within 30 days as required by law.
            </p>
          </section>

          <section className="mb-8 scroll-animate card-3d glass-effect p-6 rounded-xl" style={{ animationDelay: '600ms' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-glow">Cookies Policy</h2>
            <p className="text-gray-700 mb-4">
              TaskFlow AI uses cookies and similar technologies to enhance your browsing experience and provide personalized services:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li><strong>Essential Cookies:</strong> Required for basic platform functionality, security, and user authentication</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how you use our platform to improve performance and user experience</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and customizations for a personalized experience</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant content and measure the effectiveness of our communications</li>
            </ul>
            <p className="text-gray-700">
              You can manage your cookie preferences through your browser settings or our cookie consent manager available on our platform.
            </p>
          </section>

          <section className="mb-8 scroll-animate card-3d glass-effect p-6 rounded-xl" style={{ animationDelay: '700ms' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-glow">Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              TaskFlow AI is designed for use by individuals and organizations in professional and educational contexts. Our services are not intended for children under the age of 16, and we do not knowingly collect personal information from children under 16.
            </p>
            <p className="text-gray-700">
              If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately at <strong>sksaminuddin88@gmail.com</strong>. We will take steps to remove such information from our systems promptly.
            </p>
          </section>

          <section className="mb-8 scroll-animate card-3d glass-effect p-6 rounded-xl" style={{ animationDelay: '800ms' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-glow">International Data Transfers</h2>
            <p className="text-gray-700 mb-4">
              TaskFlow AI operates globally and may transfer your personal information to countries outside your residence. We ensure that all international data transfers comply with applicable privacy laws and implement appropriate safeguards:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Standard Contractual Clauses approved by the European Commission</li>
              <li>Adequacy decisions for countries with equivalent privacy protections</li>
              <li>Additional security measures for transfers to countries without adequacy decisions</li>
            </ul>
            <p className="text-gray-700">
              We work only with service providers and partners who demonstrate strong commitments to data protection and privacy.
            </p>
          </section>

          <section className="mb-8 scroll-animate card-3d glass-effect p-6 rounded-xl" style={{ animationDelay: '900ms' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-glow">Changes to Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes through:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Email notifications to your registered email address</li>
              <li>Prominent notices on our platform and website</li>
              <li>In-app notifications when you log in to your account</li>
            </ul>
            <p className="text-gray-700">
              We encourage you to review this Privacy Policy regularly to stay informed about how we protect your information. Your continued use of our services after any changes indicates your acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8 scroll-animate card-3d glass-effect p-6 rounded-xl animate-morph" style={{ animationDelay: '1000ms' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-glow">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please don't hesitate to contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> sksaminuddin88@gmail.com
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Subject Line:</strong> Privacy Policy Inquiry - TaskFlow AI
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Business Name:</strong> TaskFlow AI
              </p>
              <p className="text-gray-700">
                <strong>Response Time:</strong> We aim to respond to all privacy-related inquiries within 48 hours
              </p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
