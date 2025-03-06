
import { ArrowRight, Leaf, LineChart, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Leaf,
    title: "Real-time Monitoring",
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
];

const Index = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold gradient-text">
          Smart Soil Monitoring
        </h1>
        <p className="text-xl text-soil-600 max-w-2xl mx-auto">
          Enhance your crop yield with real-time soil monitoring and AI-driven insights.
        </p>
        <Button size="lg" className="bg-soil-600 hover:bg-soil-700">
          Get Started <ArrowRight className="ml-2" />
        </Button>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="p-6 card-hover">
            <feature.icon className="w-12 h-12 text-soil-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-soil-600">{feature.description}</p>
          </Card>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-soil-50 rounded-2xl p-8 text-center space-y-6">
        <h2 className="text-3xl font-bold text-soil-800">
          Ready to Improve Your Crop Yield?
        </h2>
        <p className="text-soil-600 max-w-xl mx-auto">
          Join thousands of farmers who are already using our platform to optimize their farming practices.
        </p>
        <Button variant="outline" className="border-soil-600 text-soil-600 hover:bg-soil-600 hover:text-white">
          Learn More
        </Button>
      </section>
    </div>
  );
};

export default Index;
