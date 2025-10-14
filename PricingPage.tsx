import { Check, Star } from 'lucide-react';
import { useEffect } from 'react';
import Layout from '@/react-app/components/Layout';

export default function PricingPage() {
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

  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Perfect for individuals getting started',
      features: [
        'Up to 10 tasks',
        '1 user',
        'Basic features',
        'Email support',
        'Mobile app access',
        'Basic templates'
      ],
      cta: 'Start Free',
      popular: false,
      ctaClass: 'bg-gray-800 hover:bg-gray-900 text-white',
      delay: '0ms'
    },
    {
      name: 'Pro',
      price: '$19',
      period: '/month',
      description: 'For growing teams and professionals',
      features: [
        'Unlimited tasks',
        'Up to 5 users',
        'All advanced features',
        'Priority support',
        'AI automation',
        'Advanced analytics',
        'Custom integrations',
        'Team collaboration tools'
      ],
      cta: 'Choose Pro',
      popular: true,
      ctaClass: 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white',
      delay: '200ms'
    },
    {
      
      ],
      cta: 'Contact Sales',
      popular: false,
      ctaClass: 'bg-gray-800 hover:bg-gray-900 text-white',
      delay: '400ms'
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 relative overflow-hidden">
        {/* Background Animation Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-48 h-48 bg-blue-200 rounded-full opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-200 rounded-full opacity-15 animate-float-reverse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-200 rounded-full opacity-10 animate-rotate3d"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="scroll-animate">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-glow animate-float">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-float-reverse">
              Choose the perfect plan for your team. Upgrade or downgrade at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 animate-gradient"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 transform-3d">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`pricing-card-3d relative bg-white rounded-2xl shadow-lg border-2 p-8 scroll-animate ${
                  plan.popular ? 'border-blue-500 scale-105 animate-pulse3d' : 'border-gray-200'
                }`}
                style={{ animationDelay: plan.delay }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center animate-float">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 animate-float">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gray-900 text-glow">
                      {plan.price}
                    </span>
                    <span className="text-xl text-gray-600 ml-1">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center group">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`button-3d w-full py-4 rounded-lg font-semibold text-lg shadow-lg ${plan.ctaClass}`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Money-back Guarantee */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-200 rounded-full opacity-30 animate-float-reverse"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="glass-effect rounded-xl p-8 shadow-sm border border-gray-100 scroll-animate card-3d">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-glow">
              Risk-Free Guarantee
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              All plans include a 14-day money-back guarantee. Try TaskFlow AI risk-free and see the difference it makes for your team's productivity.
            </p>
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <Check className="h-6 w-6 animate-pulse3d" />
              <span className="font-semibold">100% Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-purple-200 rounded-full opacity-10 animate-rotate3d"></div>
          <div className="absolute bottom-40 right-40 w-56 h-56 bg-blue-200 rounded-full opacity-15 animate-float"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 scroll-animate text-glow">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-6 scroll-animate card-3d glass-effect p-6 rounded-lg" style={{ animationDelay: '0ms' }}>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Can I change plans at any time?
              </h3>
              <p className="text-gray-700">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6 scroll-animate card-3d glass-effect p-6 rounded-lg" style={{ animationDelay: '100ms' }}>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Is there a setup fee?
              </h3>
              <p className="text-gray-700">
                No setup fees ever. You only pay for your monthly or annual subscription, and you can cancel at any time.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6 scroll-animate card-3d glass-effect p-6 rounded-lg" style={{ animationDelay: '200ms' }}>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you offer annual billing discounts?
              </h3>
              <p className="text-gray-700">
                Yes! Save 20% when you choose annual billing on Pro and Enterprise plans. Contact our sales team for custom enterprise pricing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
