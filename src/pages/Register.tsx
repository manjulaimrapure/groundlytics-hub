
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Sprout } from "lucide-react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Register user (to be implemented)
    console.log("Registration attempt:", { name, email, password });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] animate-fade-in">
      <Card className="w-full max-w-md border-soil-200">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-2">
            <Sprout className="h-12 w-12 text-soil-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-soil-800">Create an account</CardTitle>
          <CardDescription className="text-soil-600">
            Enter your information to create your SoilSense account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-soil-700">Full Name</Label>
              <Input 
                id="name" 
                type="text" 
                placeholder="John Doe" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border-soil-200 focus:border-soil-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-soil-700">Email</Label>
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
              <Label htmlFor="password" className="text-soil-700">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="Create a strong password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-soil-200 focus:border-soil-500"
              />
              <p className="text-xs text-soil-500">Password must be at least 8 characters long</p>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <Label htmlFor="terms" className="text-sm text-soil-600">
                I agree to the{" "}
                <Link to="#" className="text-soil-700 hover:text-soil-800 font-medium">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="#" className="text-soil-700 hover:text-soil-800 font-medium">
                  Privacy Policy
                </Link>
              </Label>
            </div>
            <Button type="submit" className="w-full bg-soil-600 hover:bg-soil-700">
              Create Account
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-sm text-soil-600 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-soil-700 hover:text-soil-800 font-medium">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
