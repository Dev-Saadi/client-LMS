import CommonForm from "@/components/common_form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signUpFormControl } from "@/config";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("logIn");

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex lg:px-6 h-14 items-center border-b">
        <Link to={"/"} className="flex items-center justify-center">
          <img className="h-11 w-11 mr-4" src="src/Images/Degree.svg" />
          <span className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300 ">
            PORA SUNA
          </span>
        </Link>
      </header>

      <div className=" flex items-center justify-center min-h-screen bg-background">
        <Tabs
          value={activeTab}
          defaultValue="logIn"
          onValueChange={handleTabChange}
          className="w-full max-w-md"
        >
          <TabsList className="grid w-full grid-cols-2 text-red-700">
            <TabsTrigger value="logIn">Sign In</TabsTrigger>
            <TabsTrigger value="signUp">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="logIn">Sign In</TabsContent>
          <TabsContent value="signUp">
            <CommonForm formControls={signUpFormControl} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AuthPage;
