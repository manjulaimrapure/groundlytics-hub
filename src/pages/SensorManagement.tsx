
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wifi, WifiOff, Plus, MapPin, Battery, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/contexts/LanguageContext";

const SensorManagement = () => {
  const { toast } = useToast();
  const [view, setView] = useState<"list" | "map">("list");
  const { t } = useTranslation();
  
  const sensors = [
    {
      id: "SN001",
      name: "North Field Sensor 1",
      type: t("sensors.moistureType"),
      status: "active",
      battery: 85,
      location: "North Field (43.812°N, 79.123°W)",
      lastUpdate: "10 minutes ago",
    },
    {
      id: "SN002",
      name: "East Field Sensor 1",
      type: t("sensors.temperatureType"),
      status: "active",
      battery: 72,
      location: "East Field (43.814°N, 79.121°W)",
      lastUpdate: "25 minutes ago",
    },
    {
      id: "SN003",
      name: "South Field Sensor 1",
      type: t("sensors.completeType"),
      status: "inactive",
      battery: 12,
      location: "South Field (43.810°N, 79.125°W)",
      lastUpdate: "3 hours ago",
    },
    {
      id: "SN004",
      name: "West Field Sensor 1",
      type: t("sensors.moistureTempType"),
      status: "active",
      battery: 67,
      location: "West Field (43.811°N, 79.128°W)",
      lastUpdate: "42 minutes ago",
    },
  ];
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold text-soil-800">{t("sensors.title")}</h1>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            className={cn("text-soil-600", view === "list" && "bg-soil-100")}
            onClick={() => setView("list")}
          >
            {t("sensors.listView")}
          </Button>
          <Button 
            variant="outline" 
            className={cn("text-soil-600", view === "map" && "bg-soil-100")}
            onClick={() => setView("map")}
          >
            {t("sensors.mapView")}
          </Button>
          <Button 
            onClick={() => {
              toast({
                title: t("ui.featureComingSoon"),
                description: t("sensors.sensorAddDesc"),
              });
            }}
            className="bg-soil-600 hover:bg-soil-700"
          >
            <Plus className="mr-2 h-4 w-4" /> {t("sensors.addSensor")}
          </Button>
        </div>
      </div>
      
      {view === "list" ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {sensors.map((sensor) => (
            <Card key={sensor.id} className="border-l-4 border-l-soil-500 overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        {sensor.status === "active" ? (
                          <Wifi className="h-4 w-4 text-green-500" />
                        ) : (
                          <WifiOff className="h-4 w-4 text-red-500" />
                        )}
                        <span className={cn(
                          "text-xs px-2 py-0.5 rounded-full",
                          sensor.status === "active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                        )}>
                          {sensor.status === "active" ? t("ui.online") : t("ui.offline")}
                        </span>
                        <span className="text-xs text-soil-500">{t("sensors.id")}: {sensor.id}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-soil-800">{sensor.name}</h3>
                      <p className="text-soil-600 text-sm">{sensor.type}</p>
                      
                      <div className="flex items-center mt-3 text-sm">
                        <MapPin className="h-4 w-4 text-soil-500 mr-1" />
                        <span className="text-soil-600">{sensor.location}</span>
                      </div>
                      
                      <div className="flex items-center mt-2 text-sm">
                        <Battery className="h-4 w-4 text-soil-500 mr-1" />
                        <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className={cn(
                              "h-full rounded-full",
                              sensor.battery > 60 ? "bg-green-500" : sensor.battery > 30 ? "bg-yellow-500" : "bg-red-500"
                            )} 
                            style={{ width: `${sensor.battery}%` }} 
                          />
                        </div>
                        <span className="ml-2 text-soil-600">{sensor.battery}%</span>
                      </div>
                      
                      <p className="text-xs text-soil-500 mt-2">{t("ui.lastUpdated")}: {sensor.lastUpdate}</p>
                    </div>
                    
                    <Button variant="ghost" size="icon" className="text-soil-600">
                      <Settings className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <div className="bg-soil-50 p-2 flex justify-between">
                  <Button variant="ghost" size="sm" className="text-soil-600">{t("ui.calibrate")}</Button>
                  <Button variant="ghost" size="sm" className="text-soil-600">{t("ui.viewData")}</Button>
                  <Button variant="ghost" size="sm" className="text-soil-600">{t("ui.settings")}</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="h-[500px] flex items-center justify-center">
          <CardContent className="text-center">
            <MapPin className="h-12 w-12 text-soil-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-soil-700">{t("sensors.mapComingSoon")}</h3>
            <p className="text-soil-600 max-w-md">
              {t("sensors.mapComingSoonDesc")}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SensorManagement;
