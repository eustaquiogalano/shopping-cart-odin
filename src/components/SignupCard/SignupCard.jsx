import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Field, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router";

function SignupCard() {
  const navigate = useNavigate();

  function handleSignup() {
    // signup logic here
    // then navigate
    navigate("/");
  }

  return (
    <Card
      className="w-full 
         text-secondary-foreground rounded-lg shadow md:mt-0 sm:max-w-md p-6 space-y-4 md:space-y-6 sm:p-8"
    >
      <CardHeader className="p-0">
        <CardTitle className="text-xl text-center font-bold leading-tight tracking-tight md:text-2xl">
          Create your account
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0">
        <form onSubmit={handleSignup} className=" space-y-4 md:space-y-6">
          <Field>
            <FieldLabel
              htmlFor="fullName"
              className="block mb-2 text-sm font-medium "
            >
              Full Name:
            </FieldLabel>
            <Input
              type="text"
              name="fullName"
              id="fullName"
              className="rounded-lg block w-full p-2.5"
              placeholder="Juan Dela Cruz"
              required
            />
          </Field>

          <Field>
            <FieldLabel
              htmlFor="contactNumber"
              className="block mb-2 text-sm font-medium "
            >
              Contact Number:
            </FieldLabel>
            <Input
              type="number"
              name="contactNumber"
              id="contactNumber"
              className="rounded-lg block w-full p-2.5"
              placeholder="09123123123"
              required
            />
          </Field>

          <Field>
            <FieldLabel
              htmlFor="Address"
              className="block mb-2 text-sm font-medium "
            >
              Shipping Address:
            </FieldLabel>
            <Input
              type="text"
              name="Address"
              id="Address"
              className="rounded-lg block w-full p-2.5"
              placeholder="18 Mabulaklak St. D.C."
              required
            />
          </Field>

          <Field>
            <FieldLabel
              htmlFor="email"
              className="block mb-2 text-sm font-medium "
            >
              Email:
            </FieldLabel>
            <Input
              type="email"
              name="email"
              id="email"
              className="rounded-lg block w-full p-2.5"
              placeholder="juandelacruz@gmail.com"
              required
            />
          </Field>

          <Field>
            <FieldLabel
              htmlFor="password"
              className="block mb-2 text-sm font-medium"
            >
              Password
            </FieldLabel>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="rounded-lg block w-full p-2.5"
              required
            />
          </Field>

          <Button
            type="submit"
            className="w-full font-medium rounded-lg text-sm text-center"
          >
            Create Account
          </Button>
        </form>
      </CardContent>

      <CardFooter className="px-0 bg-transparent flex">
        <p className="text-sm text-center w-full font-light text-muted-foreground">
          Already have an account?{" "}
          <Link to="/" className="font-medium">
            Login
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}

export default SignupCard;
