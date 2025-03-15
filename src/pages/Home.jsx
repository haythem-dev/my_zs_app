// src/pages/Home.jsx
import { motion } from 'framer-motion';
import SpaceBackground from '../components/SpaceBackground';

function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="relative flex flex-col">
      <SpaceBackground />
      
      {/* Hero Section */}
      <motion.section 
        initial="initial"
        animate="animate"
        variants={staggerChildren}
        className="relative text-white pt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center"
            variants={fadeIn}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
              variants={fadeIn}
            >
              Innovative IT Solutions for Your Business
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-300"
              variants={fadeIn}
            >
              Transform your business with cutting-edge technology solutions
            </motion.p>
            <motion.button 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="py-16 bg-black/50 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            variants={fadeIn}
            className="text-3xl font-bold text-center mb-12 text-white"
          >
            Why Choose Us?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "Cutting-edge Technology",
                description: "We leverage the latest technologies to deliver innovative solutions"
              },
              {
                icon: "👥",
                title: "Expert Team",
                description: "Our experienced professionals deliver excellence in every project"
              },
              {
                icon: "🎯",
                title: "Custom Solutions",
                description: "Tailored solutions to meet your specific business needs"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="py-16 bg-black/50 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            variants={fadeIn}
            className="text-3xl font-bold mb-6 text-white"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-xl text-gray-300 mb-8"
          >
            Let's discuss how we can help you achieve your technology goals
          </motion.p>
          <motion.button 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us Today
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}

export default Home;
