
import { Card } from "@/components/ui/card";
import { Droplet, Thermometer, Plant, Wind } from "lucide-react";

const metrics = [
  {
    icon: Droplet,
    label: "Soil Moisture",
    value: "65%",
    status: "Optimal",
    color: "text-blue-500",
  },
  {
    icon: Thermometer,
    label: "Temperature",
    value: "24°C",
    status: "Normal",
    color: "text-orange-500",
  },
  {
    icon: Plant,
    label: "NPK Levels",
    value: "Good",
    status: "Balanced",
    color: "text-green-500",
  },
  {
    icon: Wind,
    label: "pH Level",
    value: "6.5",
    status: "Ideal",
    color: "text-purple-500",
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-3xl font-bold text-soil-800">Soil Monitoring Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="p-6 card-hover">
            <div className="flex items-start justify-between">
              <div>
                <metric.icon className={cn("w-8 h-8 mb-4", metric.color)} />
                <h3 className="text-lg font-medium text-soil-700">{metric.label}</h3>
                <p className="text-2xl font-bold text-soil-800">{metric.value}</p>
                <p className={cn("text-sm", metric.color)}>{metric.status}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Placeholder for charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 h-[300px] flex items-center justify-center text-soil-600">
          Soil Health Trends Chart
        </Card>
        <Card className="p-6 h-[300px] flex items-center justify-center text-soil-600">
          Weather Forecast
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
