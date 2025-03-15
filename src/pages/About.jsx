// src/pages/About.jsx
function About() {
  const team = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Michael Brown",
      role: "Technical Director",
      image: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Introduction */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">About TechCore Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a leading IT solutions provider committed to delivering innovative
            technology services that drive business success.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To empower businesses through innovative technology solutions and exceptional service,
              helping them achieve their full potential in the digital age.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the most trusted technology partner for businesses worldwide,
              known for our expertise, innovation, and commitment to client success.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We conduct business with utmost integrity and transparency
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously innovate to deliver the best solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;