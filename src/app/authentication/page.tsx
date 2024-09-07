/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/OmWfYdVUlXa
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Authentication() {
  const [activeTab, setActiveTab] = useState("signin")
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    profilePicture: "/placeholder-user.jpg",
  })
  return (
    <div className="flex min-h-screen flex-col bg-muted/40">
      {activeTab === "signin" && (
        <div className="mx-auto flex max-w-md flex-1 flex-col justify-center px-4">
          <Card className="w-full">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Sign In</CardTitle>
              <CardDescription>Enter your email and password to sign in</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <div className="flex items-center justify-between">
                <Link href="#" className="text-sm underline underline-offset-4" prefetch={false}>
                  Forgot password?
                </Link>
                <Button onClick={() => setActiveTab("dashboard")} className="ml-auto">
                  Sign In
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <div className="text-center text-sm text-muted-foreground">
                {`Don't have an account?`}{" "}
                <Link
                  href="#"
                  onClick={() => setActiveTab("signup")}
                  className="underline underline-offset-4"
                  prefetch={false}
                >
                  Sign Up
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      )}
      {activeTab === "signup" && (
        <div className="mx-auto flex max-w-md flex-1 flex-col justify-center px-4">
          <Card className="w-full">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Sign Up</CardTitle>
              <CardDescription>Enter your details to create an account</CardDescription>
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
                  <Link href="#" className="underline underline-offset-4" prefetch={false}>
                    Terms of Service
                  </Link>
                  and{" "}
                  <Link href="#" className="underline underline-offset-4" prefetch={false}>
                    Privacy Policy
                  </Link>
                </div>
                <Button onClick={() => setActiveTab("dashboard")} className="ml-auto">
                  Sign Up
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      {activeTab === "dashboard" && (
        <div className="flex flex-col">
          <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
            <div className="ml-auto flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <div className="flex items-center gap-2 p-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-0.5 leading-none">
                      <div className="font-semibold">{user.name}</div>
                      <div className="text-sm text-muted-foreground">{user.email}</div>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link
                      href="#"
                      onClick={() => setActiveTab("editProfile")}
                      className="flex items-center gap-2"
                      prefetch={false}
                    >
                      <div className="h-4 w-4" />
                      <span>Edit Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href="#"
                      onClick={() => setActiveTab("signin")}
                      className="flex items-center gap-2"
                      prefetch={false}
                    >
                      <div className="h-4 w-4" />
                      <span>Logout</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          <main className="flex-1" />
        </div>
      )}
      {activeTab === "editProfile" && (
        <div className="mx-auto flex max-w-md flex-1 flex-col justify-center px-4">
          <Card className="w-full">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Edit Profile</CardTitle>
              <CardDescription>Update your profile information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="John Doe" defaultValue={user.name} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" defaultValue={user.email} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="profilePicture">Profile Picture</Label>
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <Input id="profilePicture" type="file" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setActiveTab("dashboard")}>
                Cancel
              </Button>
              <Button onClick={() => setActiveTab("dashboard")}>Save</Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  )
}
