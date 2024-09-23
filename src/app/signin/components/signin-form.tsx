"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { useMutation } from "@apollo/client";
import { graphql } from "gql.tada";
import { ErrorLabel } from "@/components/ui/error-label";
import { setCookie } from "@/app/actions";
import { useSignInMutation } from "@/services/generated";

// const SIGNIN = graphql(`
//   mutation SignIn($email: String!, $password: String!) {
//     signIn(email: $email, password: $password) {
//       token
//       user {
//         id
//         email
//         role {
//           name
//         }
//       }
//     }
//   }
// `);
export default function SignInForm() {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [signIn, { data, loading, error }] = useSignInMutation();
  // const [signIn, { data, loading, error }] = useMutation(SIGNIN);

  async function handleSignIn(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    try {
      event.preventDefault();
      // await signIn({ email, password });
      await signIn({ variables: { email, password } });
      //   router.push("/dashboard");
    } catch (e) {
      console.error(e);
    }
  }

  React.useEffect(() => {
    if (data) {
      const token = data.signIn.token;
      setCookie("session", token)
        .then(() => {
          router.push("/dashboard");
        })
        .catch(console.error);
    }
  }, [data, router]);

  return (
    <CardContent className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="m@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between">
        <Link
          href="#"
          className="text-sm underline underline-offset-4"
          prefetch={false}
        >
          Forgot password?
        </Link>
        {/* <Button disabled>
          <Spinner loading></Spinner>
          Bookmark
        </Button> */}
        <Button onClick={handleSignIn} className="ml-auto" loading={loading}>
          Sign In
        </Button>
      </div>
      <ErrorLabel error={error} />
    </CardContent>
  );
}
