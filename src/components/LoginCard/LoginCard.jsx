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
import { Link } from "react-router";

function LoginCard() {
  return (
    <Card
      className="w-full 
         text-secondary-foreground rounded-lg shadow md:mt-0 sm:max-w-md p-6 space-y-4 md:space-y-6 sm:p-8"
    >
      <CardHeader className="p-0">
        <CardTitle className="text-xl text-center font-bold leading-tight tracking-tight md:text-2xl">
          Sign in to your account
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0">
        <form className=" space-y-4 md:space-y-6" action="#">
          <Field>
            <FieldLabel
              htmlFor="email"
              className="block mb-2 text-sm font-medium "
            >
              Your email
            </FieldLabel>
            <Input
              type="email"
              name="email"
              id="email"
              className="rounded-lg block w-full p-2.5"
              placeholder="name@company.com"
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

          <div className="flex flex-col min-[425px]:flex-row gap-2 items-center justify-between ">
            <Field
              orientation="horizontal"
              className=" flex items-center w-full"
            >
              <Input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 border rounded"
                required
              />
              <FieldLabel htmlFor="remember" className="text-sm">
                Remember me
              </FieldLabel>
            </Field>
            <a
              href="#"
              className="w-full text-center min-[425px]:text-right text-sm font-medium"
            >
              Forgot password?
            </a>
          </div>

          <Button
            type="submit"
            className="w-full font-medium rounded-lg text-sm text-center"
          >
            Sign in
          </Button>
        </form>
      </CardContent>

      <CardFooter className="px-0 bg-transparent">
        <p className="text-sm text-center w-full font-light text-muted-foreground">
          Don’t have an account yet?{" "}
          <Link to="/signup" className="font-medium">
            Sign up
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}

export default LoginCard;
