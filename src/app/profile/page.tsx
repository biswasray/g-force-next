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

export default function Profile() {
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
              <CardTitle className="text-2xl">Edit Profile</CardTitle>
              <CardDescription>Update your profile information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  defaultValue={user.name}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  defaultValue={user.email}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="profilePicture">Profile Picture</Label>
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>
                      {user.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <Input id="profilePicture" type="file" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => router.back()}>
                Cancel
              </Button>
              <Button onClick={() => console.log("Saved")}>Save</Button>
            </CardFooter>
          </Card>
        </div>
      }
    </div>
  );
}
