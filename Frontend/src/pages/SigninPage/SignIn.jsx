import React from "react";
import { Input } from "@/components/ui/input";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function SignIn() {
    return (
        <div className="justify-center items-center flex h-dvh bg-neutral-50">
            <div className="p-5 border-gray-200 border-1 rounded-md w-sm bg-white gap-1 mb-3  flex flex-col">
                <h3 className="flex gap-2 text-center items-center justify-center text-xl mb-3 font-bold">
                    <HiOutlineChatBubbleOvalLeft
                        className=" text-purple-700"
                        size={"2rem"}
                    />
                    ChitChat
                </h3>
                <h1 className="text-3xl text-center font-semibold">
                    Sign in to your account
                </h1>
                <p className="text-center text-neutral-500">
                    Enter your email and password to sign in
                </p>
                <form action="" className="gap-2 flex flex-col">
                    <label htmlFor="">Email</label>
                    <Input type={"email"} required placeholder={"example@gmail.com"}/>
                    <label htmlFor="">Password</label>
                    <Input type={"Password"} required />
                    <Input
                        type={"submit"}
                        className={
                            "bg-purple-700 text-white cursor-pointer hover:bg-purple-800 transition-all"
                        }
                        value={"Sign In"}
                    />
                    <p className="text-center">
                        Dont't have an account?{" "}
                        <Link Link to={"/signup"} className="text-purple-700">
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
