import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import SignInForm from "./components/signin-form";

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
