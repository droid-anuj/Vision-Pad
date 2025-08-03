import { Globe, Palette, Shield, Star, Users, Zap } from "lucide-react";

const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Real-time Collaboration",
      description: "Work together seamlessly with your team in real-time. See changes instantly as they happen."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Lightning Fast",
      description: "Ultra-responsive interface with minimal latency. Your ideas flow as fast as you think."
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-500" />,
      title: "Rich Drawing Tools",
      description: "Complete set of drawing tools, shapes, and text options for unlimited creativity."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Secure & Private",
      description: "Enterprise-grade security ensures your ideas and collaborations stay protected."
    },
    {
      icon: <Globe className="w-8 h-8 text-indigo-500" />,
      title: "Access Anywhere",
      description: "Work from any device, anywhere in the world. Your boards sync across all platforms."
    },
    {
      icon: <Star className="w-8 h-8 text-orange-500" />,
      title: "Version History",
      description: "Never lose your work. Track changes and revert to any previous version instantly."
    }
  ];

const Feature = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Everything you need to bring ideas to life
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed for modern teams who value creativity and collaboration.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}

export default Feature;