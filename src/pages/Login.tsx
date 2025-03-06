
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Sprout } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { t } = useTranslation();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Authenticate user (to be implemented)
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] animate-fade-in">
      <Card className="w-full max-w-md border-soil-200">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-2">
            <Sprout className="h-12 w-12 text-soil-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-soil-800">{t("auth.signIn")}</CardTitle>
          <CardDescription className="text-soil-600">
            {t("auth.enterInfo")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-soil-700">{t("auth.email")}</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="you@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-soil-200 focus:border-soil-500"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-soil-700">{t("auth.password")}</Label>
                <Link to="/forgot-password" className="text-sm text-soil-600 hover:text-soil-800">
                  {t("auth.forgotPassword")}
                </Link>
              </div>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-soil-200 focus:border-soil-500"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-sm text-soil-600">{t("auth.rememberMe")}</Label>
            </div>
            <Button type="submit" className="w-full bg-soil-600 hover:bg-soil-700">
              {t("auth.signIn")}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-sm text-soil-600 text-center">
            {t("auth.alreadyHaveAccount")}{" "}
            <Link to="/register" className="text-soil-700 hover:text-soil-800 font-medium">
              {t("auth.createAccount")}
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
