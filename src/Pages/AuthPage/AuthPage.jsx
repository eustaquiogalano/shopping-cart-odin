import React from "react";
import lapsLogo from "/favicon.ico";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Card } from "@/components/ui/card";
import LoginCard from "@/components/LoginCard/LoginCard";
import SignupCard from "@/components/SignupCard/SignupCard";
import { useState } from "react";
import { Outlet } from "react-router";

function AuthPage() {
  const [userLoggingIn, setUserLoggingIn] = useState(true);

  return (
    <section className="w-full h-full flex flex-col items-center justify-center p-5 mx-auto md:h-screen lg:py-0">
      {/* Logo */}
      <div className="flex mb-6 text-2xl font-semibold">
        <img
          className="w-8 h-8 mr-2 border-4 border-accent rounded-[50%]"
          src={lapsLogo}
          alt="logo"
        />
        Laps.
      </div>

      {/* Card */}
      <Outlet context={{ userLoggingIn, setUserLoggingIn }} />
    </section>
  );
}

export default AuthPage;
