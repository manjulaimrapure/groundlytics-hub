
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplet, Thermometer, Sprout, Wind, CloudRain, Sun, Leaf, BarChart2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { useTranslation } from "@/contexts/LanguageContext";

// Mock data for soil moisture over time
const soilMoistureData = [
  { time: "Day 1", value: 65 },
  { time: "Day 2", value: 60 },
  { time: "Day 3", value: 68 },
  { time: "Day 4", value: 70 },
  { time: "Day 5", value: 63 },
  { time: "Day 6", value: 59 },
  { time: "Day 7", value: 64 },
];

// Mock data for temperature over time
const temperatureData = [
  { time: "Day 1", value: 24 },
  { time: "Day 2", value: 25 },
  { time: "Day 3", value: 23 },
  { time: "Day 4", value: 26 },
  { time: "Day 5", value: 27 },
  { time: "Day 6", value: 25 },
  { time: "Day 7", value: 24 },
];

const Dashboard = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  const metrics = [
    {
      icon: Droplet,
      labelKey: "dashboard.soilMoisture",
      value: "65%",
      statusKey: "dashboard.optimal",
      color: "text-blue-500",
      bg: "bg-blue-50",
      descriptionKey: "dashboard.currentMoisture",
    },
    {
      icon: Thermometer,
      labelKey: "dashboard.temperature",
      value: "24°C",
      statusKey: "dashboard.normal",
      color: "text-orange-500",
      bg: "bg-orange-50",
      descriptionKey: "dashboard.ambientTemp",
    },
    {
      icon: Sprout,
      labelKey: "dashboard.npkLevels",
      value: "Good",
      statusKey: "dashboard.balanced",
      color: "text-green-500",
      bg: "bg-green-50",
      descriptionKey: "dashboard.nutrientBalance",
    },
    {
      icon: Wind,
      labelKey: "dashboard.phLevel",
      value: "6.5",
      statusKey: "dashboard.ideal",
      color: "text-purple-500",
      bg: "bg-purple-50",
      descriptionKey: "dashboard.soilAcidity",
    },
  ];

  const weatherForecast = [
    { dayKey: "dashboard.today", icon: Sun, temp: "28°C", conditionKey: "dashboard.sunny" },
    { dayKey: "dashboard.tomorrow", icon: CloudRain, temp: "24°C", conditionKey: "dashboard.lightRain" },
    { dayKey: "dashboard.today", icon: Sun, temp: "27°C", conditionKey: "dashboard.sunny" },
  ];

  const recommendations = [
    {
      titleKey: "dashboard.increaseWatering",
      descriptionKey: "dashboard.wateringDesc",
      icon: Droplet,
      priorityKey: "dashboard.mediumPriority",
    },
    {
      titleKey: "dashboard.applyNitrogen",
      descriptionKey: "dashboard.nitrogenDesc",
      icon: Leaf,
      priorityKey: "dashboard.highPriority",
    },
    {
      titleKey: "dashboard.monitorPh",
      descriptionKey: "dashboard.phDesc",
      icon: BarChart2,
      priorityKey: "dashboard.lowPriority",
    },
  ];

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
      toast({
        title: "Dashboard Updated",
        description: "Latest soil data has been loaded",
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-soil-800">{t("dashboard.title")}</h1>
        <Button 
          variant="outline" 
          onClick={() => {
            toast({
              title: "Data Refreshed",
              description: "Latest sensor data has been loaded",
            });
          }}
          className="text-soil-600 border-soil-300 hover:bg-soil-50"
        >
          {t("ui.refresh")}
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index} className={cn("border-l-4", `border-l-${metric.color.split('-')[1]}-500`, "card-hover")}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className={cn("w-12 h-12 rounded-full flex items-center justify-center", metric.bg)}>
                    <metric.icon className={cn("w-6 h-6", metric.color)} />
                  </div>
                  <h3 className="text-lg font-medium text-soil-700">{t(metric.labelKey)}</h3>
                  <p className="text-2xl font-bold text-soil-800">{metric.value}</p>
                  <p className={cn("text-sm", metric.color)}>{t(metric.statusKey)}</p>
                  <p className="text-xs text-soil-500">{t(metric.descriptionKey)}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-soil-800">{t("dashboard.moistureTrends")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={soilMoistureData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#3b82f6" 
                    name={t("analysis.moisturePercent")} 
                    strokeWidth={2}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-soil-800">{t("dashboard.temperature")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={temperatureData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#f97316" 
                    name={t("dashboard.temperature") + " °C"} 
                    strokeWidth={2}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 shadow-sm">
          <CardHeader>
            <CardTitle className="text-soil-800">{t("dashboard.recommendationsTitle")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recommendations.map((rec, i) => (
                <div key={i} className="flex items-start space-x-4 p-4 rounded-lg bg-soil-50">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center",
                    rec.priorityKey === "dashboard.highPriority" ? "bg-red-100" : rec.priorityKey === "dashboard.mediumPriority" ? "bg-yellow-100" : "bg-green-100"
                  )}>
                    <rec.icon className={cn(
                      "w-5 h-5",
                      rec.priorityKey === "dashboard.highPriority" ? "text-red-500" : rec.priorityKey === "dashboard.mediumPriority" ? "text-yellow-500" : "text-green-500"
                    )} />
                  </div>
                  <div>
                    <h4 className="font-medium text-soil-800 flex items-center">
                      {t(rec.titleKey)}
                      <span className={cn(
                        "ml-2 text-xs px-2 py-0.5 rounded-full",
                        rec.priorityKey === "dashboard.highPriority" ? "bg-red-100 text-red-700" : 
                        rec.priorityKey === "dashboard.mediumPriority" ? "bg-yellow-100 text-yellow-700" : 
                        "bg-green-100 text-green-700"
                      )}>
                        {t(rec.priorityKey)}
                      </span>
                    </h4>
                    <p className="text-soil-600 text-sm">{t(rec.descriptionKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-soil-800">{t("dashboard.weatherForecast")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {weatherForecast.map((day, i) => (
                <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-soil-50">
                  <div className="font-medium text-soil-700">{t(day.dayKey)}</div>
                  <div className="flex items-center space-x-3">
                    <day.icon className="w-8 h-8 text-soil-600" />
                    <div>
                      <div className="font-bold text-soil-800">{day.temp}</div>
                      <div className="text-xs text-soil-500">{t(day.conditionKey)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
