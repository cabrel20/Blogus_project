import React from "react";

import { BG_PRIMARY_100, ROUNDED } from "../../config/settings";
import {
  BigText,
  Button,
  Input,
  Logo,
  MediumText,
} from "../../components/atoms/";

const img =
  "https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const AuthPage = () => {
  return (
    <React.Fragment>
      <div className="w-full h-screen flex  gap-8">
        <img
          className={BG_PRIMARY_100 + "h-full w-1/3 object-cover"}
          src={img}
          alt="auth_img"
        />
        <div className="flex flex-col justify-center items-center w-2/3 py-8">
          <span className="flex flex-col items-center gap-2">
            <Logo size="text-5xl" />
            <BigText>Welcome back</BigText>
          </span>
          <div className=" flex flex-col gap-4 py-6 w-96">
            <Input
              placeholder="Email"
              rounded={ROUNDED}
              width="w-full"
              padding="px-3"
              type="text"
            />
            <Input
              placeholder="Password"
              rounded={ROUNDED}
              width="w-full"
              padding="px-3"
              type="password"
            />
            <Button
              nameButton="Login"
              custom={true}
              width="w-full"
              paddingY="py-3"
            />
          </div>
          <MediumText>
            You do not have an account ?{" "}
            <span className="font-bold underline cursor-pointer">
              create an account
            </span>
          </MediumText>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AuthPage;
