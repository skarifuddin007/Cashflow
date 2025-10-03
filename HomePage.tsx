import { ArrowRight, Brain, Bell, Users, BarChart3, TrendingUp, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import Layout from '@/react-app/components/Layout';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

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

  const features = [
    {
      icon: <Brain className="h-8 w-8 feature-icon-3d" />,
      title: 'AI-Powered Task Prioritization',
      description: 'Smart algorithms automatically prioritize your tasks based on deadlines, importance, and team capacity.',
      delay: '0ms'
    },
    {
      icon: <Bell className="h-8 w-8 feature-icon-3d" />,
      title: 'Smart Deadline Reminders',
      description: 'Never miss another deadline with intelligent notifications that adapt to your work patterns.',
      delay: '100ms'
    },
    {
      icon: <Users className="h-8 w-8 feature-icon-3d" />,
      title: 'Team Collaboration Tools',
      description: 'Seamlessly collaborate with your team through real-time updates, comments, and file sharing.',
      delay: '200ms'
    },
    {
      icon: <BarChart3 className="h-8 w-8 feature-icon-3d" />,
      title: 'Real-Time Progress Tracking',
      description: 'Monitor project progress with visual dashboards and automated status updates.',
      delay: '300ms'
    },
    {
      icon: <TrendingUp className="h-8 w-8 feature-icon-3d" />,
      title: 'Advanced Analytics Dashboard',
      description: 'Gain insights into team productivity and identify bottlenecks with comprehensive analytics.',
      delay: '400ms'
    },
    {
      icon: <Zap className="h-8 w-8 feature-icon-3d" />,
      title: 'Multi-Platform Integration',
      description: 'Connect with your favorite tools including Slack, Google Workspace, Microsoft 365, and more.',
      delay: '500ms'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 transform-3d">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-1/2 -left-20 w-96 h-96 bg-purple-200 rounded-full opacity-15 animate-float-reverse"></div>
          <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-indigo-200 rounded-full opacity-25 animate-rotate3d"></div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-blue-800/5 animate-gradient"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className={`text-center hero-3d transition-all duration-1000 ${isVisible ? 'animate-slideUp3d' : 'opacity-0'}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-gradient text-glow animate-pulse3d">
                TaskFlow AI
              </span>
              <br />
              <span className="text-gray-800 animate-float">
                Intelligent Task Management for Modern Teams
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed animate-float-reverse">
              Automate your workflows, boost productivity, and collaborate seamlessly with AI-powered task management
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="button-3d bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg flex items-center group animate-morph">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-4 h-4 bg-blue-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float-reverse">
          <div className="w-6 h-6 bg-purple-400 rounded-full opacity-40"></div>
        </div>
        <div className="absolute bottom-20 left-1/4 animate-rotate3d">
          <div className="w-8 h-8 bg-indigo-400 rounded-full opacity-50"></div>
        </div>
      </section>

      {/* Product Description Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 animate-gradient"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-glow">
              Transform How Your Team Works
            </h2>
          </div>
          
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p className="scroll-animate glass-effect p-6 rounded-xl">
              TaskFlow AI revolutionizes team productivity by leveraging cutting-edge artificial intelligence to help teams organize, prioritize, and complete tasks with unprecedented efficiency. Our intelligent system learns from your team's work patterns, automatically categorizing tasks, suggesting optimal workflows, and ensuring that critical deadlines are never missed. By combining machine learning algorithms with intuitive design, TaskFlow AI eliminates the chaos of traditional task management and creates a streamlined, intelligent workspace where productivity thrives.
            </p>
            
            <p className="scroll-animate glass-effect p-6 rounded-xl" style={{ animationDelay: '0.2s' }}>
              Experience the power of automation with features that work behind the scenes to optimize your team's performance. Smart deadline reminders adapt to individual work styles and project complexities, while our advanced collaboration tools enable seamless communication through integrated chat, file sharing, and real-time status updates. Team members can effortlessly coordinate across different time zones and work schedules, with automated notifications ensuring everyone stays aligned on project goals and milestones.
            </p>
            
            <p className="scroll-animate glass-effect p-6 rounded-xl" style={{ animationDelay: '0.4s' }}>
              Whether you're a freelancer managing multiple client projects, a startup scaling rapidly, or a small business optimizing operations, TaskFlow AI delivers measurable time-saving benefits that directly impact your bottom line. Our users report a 40% increase in task completion rates, 60% reduction in missed deadlines, and 35% improvement in team collaboration efficiency. The intuitive interface requires minimal learning curve, allowing teams to see immediate productivity gains while our AI continuously learns and adapts to deliver even better results over time.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-10 animate-float"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full opacity-15 animate-float-reverse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-glow">
              Powerful Features That Drive Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to supercharge your team's productivity and collaboration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="card-3d bg-white p-8 rounded-xl shadow-sm border border-gray-100 scroll-animate"
                style={{ animationDelay: feature.delay }}
              >
                <div className="text-blue-600 mb-4 transform transition-all duration-300 hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden transform-3d">
        {/* 3D Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-5 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white opacity-10 rounded-full animate-float-reverse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-500 to-indigo-500 opacity-10 rounded-full animate-pulse3d"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="scroll-animate">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 text-glow animate-float">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-float-reverse">
              Join thousands of teams who have already revolutionized their productivity with TaskFlow AI
            </p>
            <button className="button-3d bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
