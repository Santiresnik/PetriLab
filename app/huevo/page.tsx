"use client";
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const EggPage = () => {
    const backgroundImageUrl = "/huevos.jpg";
    const [points, setPoints] = useState(0);
    const [eggImage, setEggImage] = useState("/huevo_dorado.png");
    const [eggCount, setEggCount] = useState(0);
    const [isShaking, setIsShaking] = useState(false);

    const divStyle = {
        height: "100vh",
        margin: 0,
        padding: 0,
    };

    const overlayStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        filter: "blur(3px) brightness(0.7)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        margin: 0,
        padding: 0,
        zIndex: -1,
        transform: "scale(1.1)",
    };

    const footerBackgroundStyle = {
        width: "100%",
        height: "15vh",
        background: "rgba(0, 0, 0, 0.3)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
    };

    const handleImageClick = () => {
        setPoints(points + 1);
        if (points >= 50) {
            setEggImage("/huevo_roto.png");
        } else if (points >= 15) {
            setEggImage("/huevo_2.png");
        }

        if (points % 5 === 0 && eggCount < 15) {
            if (points < 15){
                return
            }else if (points >= 50){
                setEggCount(15);
            }else{
                setEggCount(eggCount + 1);
            }
        }
        setIsShaking(true);
        setTimeout(() => {
        setIsShaking(false);
        }, 100);
    };

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'visible';
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2" style={divStyle}>
            <main className="flex flex-col items-center justify-center flex-1 px-20 text-center text-white">
                <h1 className="text-6xl font-bold">
                    Welcome to the petri🥚Egg🥚 Page!
                </h1>
                <p className="mt-3 text-2xl">
                    You can see 🥚eggs🥚 here.
                </p>
                <div className="mt-8">
                    <button onClick={handleImageClick}>
                        <Image
                            src={eggImage}
                            width={100}
                            height={100}
                            alt="Egg"
                            className="rounded-full text-white"
                            style={{
                                position: 'relative',
                                top: isShaking ? '-5px' : '0px',
                                right: isShaking ? '-2px' : '0px',
                                transition: 'top 0.1s',
                                width: '100%', 
                                height: 'auto'
                                }}
                        />
                    </button>
                </div>
                <div className="absolute top-0 left-0 w-full h-full" style={overlayStyle}></div>
            </main>

            <footer className="flex flex-col items-center justify-center w-full h-24 border-t text-white mb-0" style={footerBackgroundStyle}>
    <div className="flex flex-col items-center justify-center">
        <div className="flex">
            {[...Array(eggCount)].map((_, index) => (
                <span key={index}>🥚</span>
            ))}
        </div>
        <a
            className="flex items-center justify-center"
            href="https://petrilab.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
        >
            Powered by{': 🥚🥚🥚PetriHuevo🥚🥚🥚 '}
        </a>
        <div className="flex">
            {[...Array(eggCount)].map((_, index) => (
                <span key={index}>🥚</span>
            ))}
        </div>
    </div>
</footer>

        </div>
    );
};

export default EggPage;
