import React, { useState } from "react";
import nykaa from '../assets/nykaa.png';
import paytm from '../assets/paytm.PNG';
import rakuten from '../assets/rakuten.png';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    if (!email || !password) {
      setFormError("Please enter both email and password.");
      return;
    }

    if (email === "test@example.com" && password === "password") {
      setFormError("");
      navigate("/");
    } else {
      setFormError("Invalid email or password (debug).");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50 flex flex-col items-center justify-center px-2 py-8">
      <div className="w-full max-w-lg flex flex-col items-center">
        {/* Login card */}
        <Card className="w-full max-w-sm shadow-xl border border-gray-200 bg-white mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email" className="font-medium">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="username"
                  required
                  className="focus:ring-2 focus:ring-primary focus:outline-none transition"
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password" className="font-medium">Password</Label>
                  <a
                    href="#"
                    className="ml-auto text-sm text-blue-700 underline-offset-4 hover:underline transition"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="focus:ring-2 focus:ring-primary focus:outline-none transition"
                />
              </div>
              {formError && (
                <div className="text-red-500 text-sm px-1" data-testid="form-error">
                  {formError}
                </div>
              )}
              <Button
                onClick={handleSubmit}
                type="submit"
                className="w-full mt-2"
                data-testid="login-button"
              >
                Login
              </Button>
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2"
                type="button"
                onClick={() => {
                  setFormError('Google login is not implemented (debug)');
                }}
              >
                Login with Google
              </Button>
            </form>
          </CardContent>
        </Card>
        <div className="flex flex-row gap-6 items-center justify-center w-full mb-2">
          <img
            src={nykaa}
            alt="nykaa logo"
            className="h-8 xs:h-10 sm:h-12 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-150"
          />
          <img
            src={rakuten}
            alt="rakuten logo"
            className="h-8 xs:h-10 sm:h-12 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-150"
          />
          <img
            src={paytm}
            alt="paytm logo"
            className="h-8 xs:h-10 sm:h-12 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-150"
          />
        </div>
        <div className="mt-3 text-gray-600 text-xs text-center w-full">
          Trusted by leading companies
        </div>
      </div>
    </div>
  );
}
