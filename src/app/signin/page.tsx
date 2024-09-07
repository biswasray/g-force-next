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
import SignInForm from "./components/SignInForm";

export default function Signin() {
  return (
    <div className="flex min-h-screen flex-col bg-muted/40">
      {
        <div className="mx-auto flex max-w-md flex-1 flex-col justify-center px-4">
          <Card className="w-full">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Sign In</CardTitle>
              <CardDescription>
                Enter your email and password to sign in
              </CardDescription>
            </CardHeader>
            <SignInForm />
            <CardFooter>
              <div className="text-center text-sm text-muted-foreground">
                {`Don't have an account?`}{" "}
                <Link
                  href="/signup"
                  className="underline underline-offset-4"
                  prefetch={false}
                >
                  Sign Up
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      }
    </div>
  );
}
