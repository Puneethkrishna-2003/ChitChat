import React from "react";
import NavBar from "../../components/LandingPage/NavBar";
import { Button } from "@/components/ui/button";
import { MdArrowForward } from "react-icons/md";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { BsChat, BsLock } from "react-icons/bs";
import {
    HiOutlineChatBubbleOvalLeft,
    HiOutlineLockClosed,
} from "react-icons/hi2";

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <div className="flex flex-col ">
            <NavBar />
            <section className="flex flex-col text-center px-8 py-14 justify-center items-center">
                <h1 className="text-4xl md:text-6xl my-6 font-bold">
                    Connect with friends{" "}
                    <span className="text-purple-600">instantly</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-xl mb-10 ">
                    ChitChat brings people together with a simple, fast, and
                    secure messaging experience.
                </p>
                <Link to={"/signup"}>
                    <Button
                        className={
                            "bg-purple-600 hover:bg-purple-700 cursor-pointer text-md"
                        }
                        size={"lg"}
                    >
                        Get Started <MdArrowForward />
                    </Button>
                </Link>
            </section>

            <section className="flex flex-col text-center px-8 py-22 justify-center items-center bg-gray-50">
                <h1 className="text-3xl  font-bold mb-10">
                    Why Choose ChitChat?
                </h1>
                <div className=" flex flex-col md:flex-row gap-4 justify-center items-center">
                    <Card className=" shadow-none border-none p-6 w-100">
                        <CardHeader className={"font-bold text-xl"}>
                            <CardTitle
                                className={
                                    "text-center justify-center flex items-center"
                                }
                            >
                                <HiOutlineLightningBolt
                                    className="bg-purple-200 rounded-full p-2 text-purple-700"
                                    size={"3rem"}
                                />
                            </CardTitle>
                            Lightning Fast
                        </CardHeader>
                        <CardDescription className={""}>
                            Experience real-time messaging with no delays or
                            lag.
                        </CardDescription>
                    </Card>
                    <Card className=" shadow-none border-none p-6 w-100">
                        <CardHeader className={"font-bold text-xl"}>
                            <CardTitle
                                className={
                                    "text-center justify-center flex items-center"
                                }
                            >
                                <HiOutlineLockClosed
                                    className="bg-purple-200 rounded-full p-2 text-purple-700"
                                    size={"3rem"}
                                />
                            </CardTitle>
                            Secure Chats
                        </CardHeader>
                        <CardDescription className={""}>
                            End-to-end encryption keeps your conversations
                            private.
                        </CardDescription>
                    </Card>
                    <Card className=" shadow-none border-none p-6 w-100">
                        <CardHeader className={"font-bold text-xl"}>
                            <CardTitle
                                className={
                                    "text-center justify-center flex items-center"
                                }
                            >
                                <HiOutlineChatBubbleOvalLeft
                                    className="bg-purple-200 rounded-full p-2 text-purple-700"
                                    size={"3rem"}
                                />
                            </CardTitle>
                            Group Chats
                        </CardHeader>
                        <CardDescription className={""}>
                            Create groups for friends, family, or work
                            colleagues.
                        </CardDescription>
                    </Card>
                </div>
            </section>

            <footer className=" bottom-0 w-full flex flex-col text-center px-8 py-10 justify-center items-center gap-4">
                <div className="flex gap-2">
                    <BsChat className="h-6 w-6 text-purple-600" />
                    <span>ChitChat</span>
                </div>
                <div className="text-center ">
                    © {new Date().getFullYear()} ChitChat. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
