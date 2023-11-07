"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

const NotFound = () => {
    const router = useRouter();
    const [countdown, setCountdown] = useState(10); // <---- Cantidad de segundos

    useEffect(() => {
    const timeout = setTimeout(() => {
        router.push('https://petrilab.vercel.app');
    }, 10000);

    const interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
        clearTimeout(timeout);
        clearInterval(interval);
    };
    }, [router]);

    return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <img
                src="/petrilab.png"
                alt="PL"
                width={75}
                height={75}
            />
        <h1 className="text-4xl font-bold mb-4 text-gray-800">404 - Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">
        Oops! Looks like the page you were looking for does not exist.
        </p>
        <p className="text-lg text-gray-600">
        You will be redirected to the <Link href="/" className="text-blue-400 hover:text-blue-600">homepage</Link> in {countdown} seconds.
        </p>
    </div>
    );
};

export default NotFound;
