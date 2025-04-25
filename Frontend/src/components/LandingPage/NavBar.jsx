import React from "react";
import { BsChat } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button";

export default function NavBar() {
    return (
        <header className="border-b ">
            <div className="flex justify-between px-8 py-4">
                <div className="flex justify-center items-center gap-4">
                    <BsChat className="h-6 w-6 text-purple-600" />
                    <span className="text-xl font-bold">ChaitChat</span>
                </div>

                <div className="flex gap-4">
                    <NavLink to={"/signin"}>
                        <Button variant="ghost " className={"cursor-pointer"}>
                            Sign In
                        </Button>
                    </NavLink>

                    <NavLink to={"/signup"}>
                        <Button
                            className={
                                "cursor-pointer bg-purple-600 hover:bg-purple-700"
                            }
                        >
                            Sign Up
                        </Button>
                    </NavLink>
                </div>
            </div>
        </header>
    );
}
