
import { ArrowRight, Leaf, LineChart, Cpu, Droplet, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Leaf,
    title: "Real-time Soil Monitoring",
    description: "Track soil health metrics in real-time with advanced IoT sensors.",
  },
  {
    icon: LineChart,
    title: "Data Analytics",
    description: "Get insights and predictions based on historical soil data.",
  },
  {
    icon: Cpu,
    title: "AI Recommendations",
    description: "Receive AI-driven suggestions for optimal crop yield.",
  },
  {
    icon: Droplet,
    title: "Moisture Management",
    description: "Monitor and manage soil moisture levels for optimal plant growth.",
  },
  {
    icon: MapPin,
    title: "Field Mapping",
    description: "Map your fields and track soil health across different areas.",
  },
];

const Index = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-10">
        <div className="inline-block p-2 px-4 bg-soil-50 rounded-full text-soil-600 text-sm font-medium mb-4">
          Innovative Farming Technology
        </div>
        <h1 className="text-4xl md:text-6xl font-bold gradient-text">
          Smart Soil Monitoring
        </h1>
        <p className="text-xl text-soil-600 max-w-2xl mx-auto">
          Enhance your crop yield with real-time soil monitoring and AI-driven insights.
        </p>
        <div className="flex items-center justify-center gap-4 pt-4">
          <Link to="/dashboard">
            <Button size="lg" className="bg-soil-600 hover:bg-soil-700">
              View Dashboard <ArrowRight className="ml-2" />
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="outline" size="lg" className="border-soil-200 text-soil-700">
              Login
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-10 text-soil-800">
          Key Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 card-hover border-soil-100">
              <div className="w-14 h-14 rounded-full bg-soil-50 flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-soil-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-soil-800">{feature.title}</h3>
              <p className="text-soil-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-soil-50 to-leaf-50 rounded-2xl p-8 text-center space-y-6">
        <h2 className="text-3xl font-bold text-soil-800">
          Ready to Improve Your Crop Yield?
        </h2>
        <p className="text-soil-600 max-w-xl mx-auto">
          Join thousands of farmers who are already using our platform to optimize their farming practices.
        </p>
        <Link to="/register">
          <Button size="lg" className="bg-soil-600 hover:bg-soil-700">
            Get Started <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default Index;
