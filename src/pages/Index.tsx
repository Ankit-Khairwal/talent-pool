
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { Play, Settings, Users, Clock, Check } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Simplify Your HR <br className="hidden sm:block" />
              <span className="text-primary">Management Today</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Streamline your HR processes, manage employee data, and boost productivity with our all-in-one HR management solution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="text-lg px-8">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Play className="mr-2 h-5 w-5" /> Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary px-4 sm:px-6 lg:px-8" id="features">
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
    </div>
  );
};

export default Index;
