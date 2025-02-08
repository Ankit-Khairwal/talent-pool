import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Play, Settings, Users, Clock, Check, Building, BookOpen, Briefcase, FileText, ArrowRight } from "lucide-react";

const Index = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                HR Software That <br />
                <span className="text-primary">Works For You</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Streamline your HR processes, manage employee data, and boost productivity with our all-in-one HR management solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8" onClick={scrollToProjects}>
                  Get Started <ArrowRight className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Play className="mr-2 h-5 w-5" /> Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                alt="HR Management"
                className="rounded-lg shadow-xl animate-fade-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8" id="features">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to manage HR
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features to help you manage all aspects of your HR operations efficiently.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Settings className="h-8 w-8 text-primary" />,
                title: "Easy Setup",
                description: "Get started quickly with our intuitive setup process and user-friendly interface.",
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "Team Management",
                description: "Manage your entire workforce from a single, centralized dashboard.",
              },
              {
                icon: <Clock className="h-8 w-8 text-primary" />,
                title: "Time Tracking",
                description: "Track employee time, attendance, and leave management effortlessly.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section className="py-20 bg-[#F9FAFB] px-4 sm:px-6 lg:px-8" id="company">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
                alt="Team Collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Built for modern teams
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <Building className="h-6 w-6 text-primary" />,
                    title: "Enterprise Ready",
                    description: "Scalable solutions that grow with your business",
                  },
                  {
                    icon: <Users className="h-6 w-6 text-primary" />,
                    title: "Team Collaboration",
                    description: "Work together seamlessly across departments",
                  },
                  {
                    icon: <Briefcase className="h-6 w-6 text-primary" />,
                    title: "Professional Tools",
                    description: "Advanced features for HR professionals",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8" id="resources">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Resources & Support
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <BookOpen className="h-6 w-6 text-primary" />,
                    title: "Documentation",
                    description: "Comprehensive guides and tutorials",
                  },
                  {
                    icon: <FileText className="h-6 w-6 text-primary" />,
                    title: "API Reference",
                    description: "Detailed technical documentation",
                  },
                  {
                    icon: <Users className="h-6 w-6 text-primary" />,
                    title: "Community",
                    description: "Join our growing community",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
                alt="Resources"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our collection of successful HR management implementations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Enterprise HR Suite",
                description: "Complete HR management solution for large enterprises",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "SMB HR Platform",
                description: "Tailored HR solutions for small and medium businesses",
                image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Startup HR Tools",
                description: "Essential HR tools for growing startups",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                  <Button className="mt-4 w-full">Learn More</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="pricing">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "29",
                features: ["Up to 10 employees", "Basic HR tools", "Email support"],
              },
              {
                name: "Professional",
                price: "79",
                features: ["Up to 50 employees", "Advanced HR tools", "Priority support"],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "199",
                features: ["Unlimited employees", "Custom solutions", "24/7 support"],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl ${
                  plan.popular
                    ? "ring-2 ring-primary shadow-lg scale-105"
                    : "border border-gray-200"
                }`}
              >
                <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <Check className="h-5 w-5 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.popular ? "" : "bg-secondary text-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
