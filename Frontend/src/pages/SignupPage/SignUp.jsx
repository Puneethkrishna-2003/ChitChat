import { Input } from "@/components/ui/input";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
export default function SignUp() {
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
                    Create an account
                </h1>
                <p className="text-center text-neutral-500">
                    Enter your details to create a ChitChat account
                </p>
                <form action="" className="gap-2 flex flex-col">
                    <label htmlFor="">User Name</label>
                    <Input className={""} type={"text"} required placeholder={"Enter your name"}/>
                    <label htmlFor="">Email</label>
                    <Input type={"email"} required placeholder={"example@gmail.com"}/>
                    <label htmlFor="">Password</label>
                    <Input type={"Password"} required />
                    <label htmlFor="">Confirm Password</label>
                    <Input type={"Password"} required />
                    <Input
                        type={"submit"}
                        className={
                            "bg-purple-700 text-white cursor-pointer hover:bg-purple-800 transition-all"
                        }
                    />
                    <p className="text-center">
                        Already have an account?{" "}
                        <Link Link to={"/signin"} className="text-purple-700">
                            Sign in
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
