"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    profilePicture: "/placeholder-user.jpg",
  });
  return (
    <div className="flex min-h-screen flex-col bg-muted/40">
      {
        <div className="mx-auto flex max-w-md flex-1 flex-col justify-center px-4">
          <Card className="w-full">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Sign Up</CardTitle>
              <CardDescription>
                Enter your details to create an account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  By signing up, you agree to our{" "}
                  <Link
                    href="#"
                    className="underline underline-offset-4"
                    prefetch={false}
                  >
                    Terms of Service
                  </Link>
                  and{" "}
                  <Link
                    href="#"
                    className="underline underline-offset-4"
                    prefetch={false}
                  >
                    Privacy Policy
                  </Link>
                </div>
                <Button
                  onClick={() => router.push("/profile")}
                  className="ml-auto"
                >
                  Sign Up
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <div className="text-center text-sm text-muted-foreground">
                {`Already have an account?`}{" "}
                <Link
                  href="/signin"
                  className="underline underline-offset-4"
                  prefetch={false}
                >
                  Sign In
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      }
    </div>
  );
}
