import { Input } from "@/components/ui/input";
import { useState } from "react";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function SignUpPage() {
    const [formInputs, setFormInputs] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errorFormInputs, setErrorFormInputs] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const submitForm = (e) => {
        e.preventDefault();
        validateForm(formInputs);
        if (validateForm) {
            setFormInputs({
                userName: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
        }
    };

    const handleFormDataChange = (e) => {
        const { name, value } = e.target;
        setFormInputs((prev) => ({
            ...prev,
            [name]: value,
        }));
        setErrorFormInputs((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    const validateForm = (formData) => {
        const { userName, email, password, confirmPassword } = formData;

        if (!userName || !email || !password || !confirmPassword) {
            setErrorFormInputs({
                userName: "required",
                email: "required",
                password: "required",
                confirmPassword: "required",
            });
            return false;
        }

        if (password !== confirmPassword) {
            setErrorFormInputs({ confirmPassword: "Passwords do not match!" });
            return false;
        }

        return true;
    };

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
                    <div>
                        <Input
                            type="text"
                            required
                            placeholder="Enter your name"
                            name="userName"
                            value={formInputs.userName}
                            onChange={handleFormDataChange}
                        />
                        {errorFormInputs.userName && (
                            <span className="text-red-500 text-sm">
                                {errorFormInputs.userName}
                            </span>
                        )}
                    </div>
                    <label htmlFor="">Email</label>
                    <div>
                        <Input
                            type="email"
                            required
                            placeholder="example@gmail.com"
                            name="email"
                            value={formInputs.email}
                            onChange={handleFormDataChange}
                        />
                        {errorFormInputs.email && (
                            <span className="text-red-500 text-sm">
                                {errorFormInputs.email}
                            </span>
                        )}
                    </div>

                    <label htmlFor="">Password</label>
                    <div>
                        <Input
                            type="password"
                            required
                            placeholder="Enter your password"
                            name="password"
                            value={formInputs.password}
                            onChange={handleFormDataChange}
                        />
                        {errorFormInputs.password && (
                            <span className="text-red-500 text-sm">
                                {errorFormInputs.password}
                            </span>
                        )}
                    </div>

                    <label htmlFor="">Confirm Password</label>
                    <div>
                        <Input
                            type="password"
                            required
                            placeholder="Confirm password"
                            name="confirmPassword"
                            value={formInputs.confirmPassword}
                            onChange={handleFormDataChange}
                        />
                        {errorFormInputs.confirmPassword && (
                            <span className="text-red-500 text-sm">
                                {errorFormInputs.confirmPassword}
                            </span>
                        )}
                    </div>

                    <Input
                        type="submit"
                        value="Sign Up"
                        onClick={submitForm}
                        className="bg-purple-700 text-white cursor-pointer hover:bg-purple-800 transition-all"
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
