'use client'
import Link from "next/link";
import LoginFormClient from "./Login";
import Image from "next/image"; 
import React, { useState, useEffect } from 'react';

export const UserLogIn = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        const timer = setTimeout(() => {
            setLoading(false); 
        }, 2000); 

        return () => clearTimeout(timer); 
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-black">
                <div className="flex items-center">
                    <Image
                        src='/gorrocheff.png'
                        alt="Loading"
                        width={150}
                        height={150}
                        className="animate-spin"
                    />
                </div>
                <p className="mt-4 text-xl font-semibold text-white">Loading...</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col">
            <div className="h-3/4 w-9/12 mx-auto flex flex-col items-center justify-center flex-grow">
                <div className="text-white text-center">
                    <div className="flex flex-col">
                        <h2 className="text-3xl sm:mt-10 sm:mb-4">Log In</h2>
                        <div className="flex items-center justify-center space-x-2">
                            <p className="">Not a member?</p>
                            <Link href={"/User"} className="text-blue-500 underline-offset-4 underline">
                                Register
                            </Link>
                        </div>
                        <LoginFormClient />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserLogIn;
