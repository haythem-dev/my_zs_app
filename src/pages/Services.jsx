// src/pages/Services.jsx
function Services() {
  const services = [
    {
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs, from web applications to mobile apps.",
      icon: "💻"
    },
    {
      title: "Cloud Solutions",
      description: "Comprehensive cloud services including migration, optimization, and management.",
      icon: "☁️"
    },
    {
      title: "IT Consulting",
      description: "Strategic technology consulting to help your business grow and succeed.",
      icon: "📊"
    },
    {
      title: "Cybersecurity",
      description: "Protect your business with our comprehensive security solutions and services.",
      icon: "🔒"
    },
    {
      title: "Data Analytics",
      description: "Turn your data into actionable insights with our advanced analytics solutions.",
      icon: "📈"
    },
    {
      title: "IT Infrastructure",
      description: "Build and maintain robust IT infrastructure for your organization.",
      icon: "🏗️"
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive IT solutions to help your business thrive in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-600 mb-6">
            We'll work with you to develop the perfect solution for your business needs.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;