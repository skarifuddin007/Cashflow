import { Clock, Mail, Shield, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';
import Layout from '@/react-app/components/Layout';

export default function RefundPage() {
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
          <div className="absolute top-10 left-20 w-48 h-48 bg-green-200 rounded-full opacity-15 animate-float"></div>
          <div className="absolute bottom-32 right-10 w-64 h-64 bg-blue-200 rounded-full opacity-10 animate-float-reverse"></div>
          <div className="absolute top-1/2 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-rotate3d"></div>
        </div>

        <header className="text-center mb-12 scroll-animate">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-glow animate-float">
            Refund Policy
          </h1>
          <p className="text-gray-600 text-lg animate-float-reverse">
            <strong>Last Updated:</strong> October 2, 2025
          </p>
          <p className="text-xl text-gray-700 mt-4">
            We stand behind our service with a hassle-free refund policy
          </p>
        </header>

        {/* Quick Overview */}
        <section className="glass-effect rounded-xl p-8 mb-12 scroll-animate card-3d animate-pulse3d" style={{ animationDelay: '0ms' }}>
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-12 w-12 text-blue-600 feature-icon-3d" />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-4 text-glow">
            30-Day Money-Back Guarantee
          </h2>
          <p className="text-lg text-gray-700 text-center">
            Try TaskFlow AI risk-free! If you're not completely satisfied with our service, 
            request a full refund within 30 days of your subscription.
          </p>
        </section>

        {/* Policy Details */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-8 scroll-animate card-3d glass-effect p-6 rounded-xl" style={{ animationDelay: '100ms' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-glow">Refund Eligibility</h2>
            <p className="text-gray-700 mb-4">
              We offer a comprehensive 30-day money-back guarantee for all paid subscriptions to TaskFlow AI. 
              This guarantee applies to both monthly and annual subscription plans, giving you ample time to 
              evaluate our service and determine if it meets your needs.
            </p>
            <p className="text-gray-700">
              To be eligible for a refund, your request must be submitted within 30 calendar days of your 
              initial subscription purchase or subscription renewal date. This policy ensures that you have 
              sufficient time to thoroughly test all features and capabilities of TaskFlow AI.
            </p>
          </section>

          <section className="mb-8 scroll-animate card-3d glass-effect p-6 rounded-xl" style={{ animationDelay: '200ms' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-glow">How to Request a Refund</h2>
            <p className="text-gray-700 mb-4">
              Requesting a refund is simple and straightforward. Follow these steps to initiate your refund request:
            </p>
            
            <div className="glass-effect rounded-lg p-6 mb-6 card-3d">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0 feature-icon-3d" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-700 mb-2">
                    Send a refund request to: <strong>sksaminuddin88@gmail.com</strong>
                  </p>
                  <p className="text-gray-700">
                    Use the subject line: "Refund Request - TaskFlow AI"
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-4">
              In your email, please include the following information to help us process your request quickly:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Your account email address</li>
              <li>Subscription plan type (Pro or Enterprise)</li>
              <li>Date of subscription purchase</li>
              <li>Reason for the refund request (optional but helpful for service improvement)</li>
              <li>Any feedback about your experience with TaskFlow AI</li>
            </ul>
          </section>

          <section className="mb-8 scroll-animate card-3d glass-effect p-6 rounded-xl" style={{ animationDelay: '300ms' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-glow">Processing Time and Method</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 card-3d">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-blue-600 mr-3 feature-icon-3d" />
                  <h3 className="font-semibold text-gray-900">Processing Time</h3>
                </div>
                <p className="text-gray-700">
                  Refunds are processed within 5-7 business days after approval. 
                  We'll send you a confirmation email once the refund has been initiated.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 card-3d">
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 feature-icon-3d" />
                  <h3 className="font-semibold text-gray-900">Refund Method</h3>
                </div>
                <p className="text-gray-700">
                  Refunds are credited to the original payment method used for the subscription. 
                  Bank processing times may vary by financial institution.
                </p>
              </div>
            </div>
            
            <p className="text-gray-700">
              Once we receive your refund request, our customer service team will review it and respond 
              within 24 hours during business days. We may ask for additional verification to ensure 
              account security before processing the refund.
            </p>
          </section>

          <section className="mb-8 scroll-animate card-3d glass-effect p-6 rounded-xl" style={{ animationDelay: '400ms' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-glow">Refund Conditions and Limitations</h2>
            <p className="text-gray-700 mb-4">
              To maintain fairness and prevent abuse of our refund policy, the following conditions apply:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Refunds are only available within 30 days of subscription purchase or renewal</li>
              <li>Each customer is eligible for one refund per subscription period</li>
              <li>Partial refunds for unused portions of subscription periods are not available after the 30-day window</li>
              <li>Refunds for gift subscriptions must be requested by the original purchaser</li>
              <li>Add-on services or one-time purchases may have different refund terms</li>
            </ul>
            <p className="text-gray-700">
              We reserve the right to deny refund requests that appear to be fraudulent, abusive, or 
              violate our Terms of Service. However, we are committed to working with customers to 
              resolve any legitimate concerns about our service.
            </p>
          </section>

          <section className="mb-8 scroll-animate card-3d glass-effect p-6 rounded-xl" style={{ animationDelay: '500ms' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-glow">What Happens After a Refund</h2>
            <p className="text-gray-700 mb-4">
              Once your refund is approved and processed:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Your paid subscription will be cancelled immediately</li>
              <li>You'll retain access to premium features until the end of your current billing period</li>
              <li>Your account will automatically revert to the free plan after the billing period ends</li>
              <li>All data and projects will remain accessible, but some advanced features will be restricted</li>
              <li>You can resubscribe to a paid plan at any time in the future</li>
            </ul>
            <p className="text-gray-700">
              We encourage you to export any important data before your subscription expires if you 
              plan to discontinue using TaskFlow AI entirely.
            </p>
          </section>

          <section className="mb-8 scroll-animate card-3d glass-effect p-6 rounded-xl" style={{ animationDelay: '600ms' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-glow">Alternative Solutions</h2>
            <p className="text-gray-700 mb-4">
              Before requesting a refund, consider these alternatives that might address your concerns:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 card-3d">
                <h4 className="font-semibold text-blue-900 mb-2">Downgrade</h4>
                <p className="text-blue-800 text-sm">Switch to a lower-tier plan that better fits your needs</p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg border border-green-200 card-3d">
                <h4 className="font-semibold text-green-900 mb-2">Pause Subscription</h4>
                <p className="text-green-800 text-sm">Temporarily suspend your subscription for up to 3 months</p>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 card-3d">
                <h4 className="font-semibold text-purple-900 mb-2">Customer Support</h4>
                <p className="text-purple-800 text-sm">Contact our support team for help with features or troubleshooting</p>
              </div>
              
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200 card-3d">
                <h4 className="font-semibold text-yellow-900 mb-2">Training Resources</h4>
                <p className="text-yellow-800 text-sm">Access our comprehensive help documentation and video tutorials</p>
              </div>
            </div>
            <p className="text-gray-700">
              Our customer success team is always happy to help you get the most value from TaskFlow AI. 
              Many issues can be resolved with proper guidance and support.
            </p>
          </section>

          <section className="mb-8 scroll-animate card-3d glass-effect p-6 rounded-xl animate-morph" style={{ animationDelay: '700ms' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-glow">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For all refund requests and related inquiries, please contact:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> sksaminuddin88@gmail.com
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Subject:</strong> Refund Request - TaskFlow AI
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Response Time:</strong> Within 24 hours on business days
              </p>
              <p className="text-gray-700">
                <strong>Business Days:</strong> Monday through Friday, excluding holidays
              </p>
            </div>
            
            <div className="mt-6 p-4 glass-effect border border-blue-200 rounded-lg">
              <p className="text-blue-800 text-sm">
                <strong>Note:</strong> For urgent matters requiring immediate attention, please mention 
                "URGENT" in your email subject line. We prioritize urgent requests and will respond 
                as quickly as possible.
              </p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
