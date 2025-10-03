import { useEffect } from 'react';
import Layout from '@/react-app/components/Layout';

export default function TermsPage() {
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
          <div className="absolute top-16 right-16 w-56 h-56 bg-blue-200 rounded-full opacity-10 animate-float"></div>
          <div className="absolute bottom-24 left-12 w-40 h-40 bg-purple-200 rounded-full opacity-15 animate-float-reverse"></div>
          <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-rotate3d"></div>
        </div>

        <div className="prose prose-lg max-w-none">
          <header className="mb-12 text-center scroll-animate">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 text-glow animate-float">
              Terms and Conditions for TaskFlow AI
            </h1>
            <p className="text-gray-600 text-lg animate-float-reverse">
              <strong>Last Updated:</strong> October 2, 2025
            </p>
          </header>

          <section className="mb-8 scroll-animate card-3d glass-effect p-6 rounded-xl" style={{ animationDelay: '0ms' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-glow">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using TaskFlow AI ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service. TaskFlow AI is operated by an individual proprietor and these terms constitute a legally binding agreement between you and the service provider.
            </p>
            <p className="text-gray-700">
              Your continued use of the Service following any changes to these Terms constitutes acceptance of those changes. We reserve the right to update these Terms at any time, and we will notify users of material changes via email or through the Service interface.
            </p>
          </section>

          <section className="mb-8 scroll-animate card-3d glass-effect p-6 rounded-xl" style={{ animationDelay: '100ms' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-glow">2. Description of Service</h2>
            <p className="text-gray-700 mb-4">
              TaskFlow AI is an intelligent task management platform that provides AI-powered productivity tools, team collaboration features, and workflow automation capabilities. The Service includes web-based applications, mobile applications, and associated services designed to help individuals and teams organize, prioritize, and complete tasks efficiently.
            </p>
            <p className="text-gray-700">
              We strive to maintain the Service with maximum uptime and reliability, but we do not guarantee uninterrupted access. The Service may be temporarily unavailable due to maintenance, updates, or circumstances beyond our control. We will make reasonable efforts to provide advance notice of planned maintenance whenever possible.
            </p>
          </section>

          <section className="mb-8 scroll-animate card-3d glass-effect p-6 rounded-xl" style={{ animationDelay: '200ms' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-glow">3. User Accounts and Registration</h2>
            <p className="text-gray-700 mb-4">
              To access certain features of the Service, you must register for an account and provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to immediately notify us of any unauthorized use of your account.
            </p>
            <p className="text-gray-700">
              You must be at least 16 years old to create an account. If you are under 18, you represent that you have obtained parental or guardian consent to use the Service. We reserve the right to suspend or terminate accounts that violate these Terms or engage in prohibited activities.
            </p>
          </section>

          <section className="mb-8 scroll-animate card-3d glass-effect p-6 rounded-xl" style={{ animationDelay: '300ms' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-glow">4. Subscription and Billing</h2>
            <p className="text-gray-700 mb-4">
              TaskFlow AI offers both free and paid subscription plans. Paid subscriptions are available on monthly and annual billing cycles. By subscribing to a paid plan, you authorize us to charge your chosen payment method for the subscription fees. All fees are non-refundable except as specified in our Refund Policy.
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4 card-3d">
              <h3 className="font-semibold text-blue-900 mb-2">Subscription Details</h3>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• Subscriptions automatically renew at the end of each billing period</li>
                <li>• You may cancel your subscription at any time through account settings</li>
                <li>• Cancellation takes effect at the end of the current billing period</li>
                <li>• You continue to have access to paid features until the billing period ends</li>
              </ul>
            </div>
            
            <p className="text-gray-700">
              We reserve the right to change subscription pricing with 30 days advance notice to existing subscribers. Price changes will not affect your current billing period but will apply to subsequent renewals.
            </p>
          </section>

          <section className="mb-8 scroll-animate card-3d glass-effect p-6 rounded-xl" style={{ animationDelay: '400ms' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-glow">5. User Responsibilities</h2>
            <p className="text-gray-700 mb-4">
              You agree to use the Service only for lawful purposes and in accordance with these Terms. You are prohibited from using the Service to transmit, distribute, or store material that is unlawful, harmful, threatening, defamatory, obscene, or otherwise objectionable. You may not attempt to gain unauthorized access to any portion of the Service or its related systems.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-red-50 rounded-lg border border-red-200 card-3d">
                <h3 className="font-semibold text-red-900 mb-2">Prohibited Activities</h3>
                <ul className="text-red-800 text-sm space-y-1">
                  <li>• Reverse engineering or copying our software</li>
                  <li>• Attempting to breach security measures</li>
                  <li>• Using the service for illegal activities</li>
                  <li>• Sharing account credentials with unauthorized users</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg border border-green-200 card-3d">
                <h3 className="font-semibold text-green-900 mb-2">Your Responsibilities</h3>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• Maintain secure account credentials</li>
                  <li>• Ensure you have rights to uploaded content</li>
                  <li>• Use the service in compliance with all applicable laws</li>
                  <li>• Report security issues promptly</li>
                </ul>
              </div>
            </div>
            
            <p className="text-gray-700">
              You are responsible for all data you input into the Service and must ensure you have the right to use such data. You agree not to upload or share any content that infringes on the intellectual property rights of others or violates applicable laws.
            </p>
          </section>

          <section className="mb-8 scroll-animate card-3d glass-effect p-6 rounded-xl" style={{ animationDelay: '500ms' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-glow">6. Intellectual Property Rights</h2>
            <p className="text-gray-700 mb-4">
              The Service and its original content, features, and functionality are owned by TaskFlow AI and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You retain ownership of any content you create or upload to the Service, but you grant us a limited license to use, store, and display such content as necessary to provide the Service.
            </p>
            
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mb-4 card-3d">
              <h3 className="font-semibold text-purple-900 mb-2">Trademark Notice</h3>
              <p className="text-purple-800 text-sm">
                The TaskFlow AI name, logo, and all related names, logos, product and service names are trademarks of TaskFlow AI. 
                You may not use these trademarks without our explicit written permission.
              </p>
            </div>
            
            <p className="text-gray-700">
              You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of our proprietary content without explicit written permission.
            </p>
          </section>

          <section className="mb-8 scroll-animate card-3d glass-effect p-6 rounded-xl" style={{ animationDelay: '600ms' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-glow">7. Privacy and Data Protection</h2>
            <p className="text-gray-700 mb-4">
              Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use the Service. By using the Service, you consent to the collection and use of information in accordance with our Privacy Policy. We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-4 card-3d">
              <h3 className="font-semibold text-yellow-900 mb-2">GDPR Compliance</h3>
              <p className="text-yellow-800 text-sm">
                We comply with applicable data protection laws, including GDPR for European users. You have the right to access, 
                correct, or delete your personal information. For data protection inquiries, please contact us at sksaminuddin88@gmail.com.
              </p>
            </div>
            
            <p className="text-gray-700">
              We use industry-standard encryption and security practices to protect your data. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8 scroll-animate card-3d glass-effect p-6 rounded-xl" style={{ animationDelay: '700ms' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-glow">8. Service Limitations and Downtime</h2>
            <p className="text-gray-700 mb-4">
              While we strive to provide reliable service, we do not guarantee that the Service will be available 100% of the time. The Service may be subject to limitations, delays, and other problems inherent in the use of the internet and electronic communications. We are not responsible for any delays, delivery failures, or other damage resulting from such problems.
            </p>
            <p className="text-gray-700">
              We reserve the right to modify, suspend, or discontinue the Service or any part thereof at any time with reasonable notice. We may also impose usage limits or restrictions on certain features to ensure fair use and optimal performance for all users.
            </p>
          </section>

          <section className="mb-8 scroll-animate card-3d glass-effect p-6 rounded-xl" style={{ animationDelay: '800ms' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-glow">9. Refund Policy</h2>
            <p className="text-gray-700 mb-4">
              We offer a 30-day money-back guarantee for all paid plans. If you are not satisfied with the Service, you may request a full refund within 30 days of your initial subscription or renewal. Refund requests must be submitted to sksaminuddin88@gmail.com with your account details and reason for the refund request.
            </p>
            <p className="text-gray-700">
              Refunds are processed within 5-7 business days and will be credited to the original payment method. We reserve the right to deny refund requests that appear to be fraudulent or abusive. Partial refunds for unused portions of subscription periods are not available except as required by law.
            </p>
          </section>

          <section className="mb-8 scroll-animate card-3d glass-effect p-6 rounded-xl" style={{ animationDelay: '900ms' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-glow">10. Termination of Service</h2>
            <p className="text-gray-700 mb-4">
              Either party may terminate the service relationship at any time. You may terminate your account by cancelling your subscription and ceasing use of the Service. We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
            </p>
            <p className="text-gray-700">
              Upon termination, your right to use the Service ceases immediately. We may retain certain information as required by law or for legitimate business purposes. You remain liable for all charges incurred prior to termination.
            </p>
          </section>

          <section className="mb-8 scroll-animate card-3d glass-effect p-6 rounded-xl" style={{ animationDelay: '1000ms' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-glow">11. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              To the fullest extent permitted by applicable law, TaskFlow AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the Service.
            </p>
            <p className="text-gray-700">
              Our total liability to you for any damages shall not exceed the amount paid by you to TaskFlow AI during the 12 months preceding the claim. Some jurisdictions do not allow the exclusion of certain warranties or limitation of liability, so these limitations may not apply to you.
            </p>
          </section>

          <section className="mb-8 scroll-animate card-3d glass-effect p-6 rounded-xl" style={{ animationDelay: '1100ms' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-glow">12. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these Terms at any time. Material changes will be communicated to users via email or through prominent notices within the Service. Your continued use of the Service after any modifications indicates your acceptance of the new Terms.
            </p>
            <p className="text-gray-700">
              If you do not agree to the modified Terms, you must discontinue use of the Service. We encourage you to review these Terms periodically to stay informed of any updates.
            </p>
          </section>

          <section className="mb-8 scroll-animate card-3d glass-effect p-6 rounded-xl" style={{ animationDelay: '1200ms' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-glow">13. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where TaskFlow AI operates, without regard to conflict of law principles. Any disputes arising from these Terms or the Service will be resolved through binding arbitration in accordance with the rules of the applicable arbitration association.
            </p>
            <p className="text-gray-700">
              You agree to submit to the personal jurisdiction of the courts located within our primary business jurisdiction for the purpose of litigating all such claims or disputes that cannot be resolved through arbitration.
            </p>
          </section>

          <section className="mb-8 scroll-animate card-3d glass-effect p-6 rounded-xl animate-morph" style={{ animationDelay: '1300ms' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-glow">14. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> sksaminuddin88@gmail.com
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Business Name:</strong> TaskFlow AI
              </p>
              <p className="text-gray-700">
                <strong>Business Type:</strong> Individual Proprietorship
              </p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
