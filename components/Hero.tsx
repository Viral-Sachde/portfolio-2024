import React from 'react';
import Image from 'next/image';
import SpotlightCard from './Components/SpotlightCard/SpotlightCard';

const Hero = () => {

    const techStack = [
        { name: 'React', icon: '/react.svg' },
        { name: 'Next.js', icon: '/next.svg' },
        { name: 'Node.js', icon: '/node.svg' },
        { name: 'Express.js', icon: '/express.svg' },
        { name: 'MonogoDB', icon: '/mongo.svg' },
        { name: 'TypeScript', icon: '/ts.svg' },
        { name: 'AWS', icon: '/aws.svg' },
        { name: 'Vercel', icon: '/vercel.svg' },
        { name: 'Github', icon: '/git.svg' },
        { name: 'Figma', icon: '/fig.svg' },
    ];

    return (<>

        <main className="px-4 sm:px-8 lg:px-16 py-12 space-y-10 min-h-screen mb-0">
            {/* Hero Section */}

  

            <div className="space-y-4 text-center sm:text-left">
                <h1 className="text-3xl sm:text-[40px] font-bold dark:text-white">
                    Hola! I&apos;m Viral Sachde
                </h1>
                <p className="text-lg sm:text-2xl dark:text-white ">
                    I&apos;m a Full-stack dev that loves{' '}
                    <span className="rounded-3xl backdrop-blur-lg bg-white/10 px-2 py-0.5 inline-block">
                        building products
                    </span>{' '}
                    and web apps that can impact millions of lives.
                </p>
                <p className="">
                    Yo, I&apos;m a Software Engineer with{' '}
                    <span className="font-medium text-foreground">1+ YOE</span>, and I&apos;ve dropped 10+
                    killer web apps that are not just fast and scalable but also look dope.
                </p>
            </div>
            <div className="space-y-4">
                <h2 className="text-2xl font-bold dark:text-white ">Tech Stack</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {techStack.map((tech) => ( <>
                        <SpotlightCard className="custom-spotlight-card flex flex-col items-center bg-zinc-800  bg-opacity-10 justify-center rounded-lg  backdrop-blur-lg p-6 shadow-md" spotlightColor="rgba(211, 211, 211, 0.67)">

                        <Image
                                src={tech.icon}
                                alt={tech.name}
                                width={40}
                                height={40}
                                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14" // Adjusted responsive icon sizes
                            />
                      
                      </SpotlightCard>
                        </>
                    ))
                    }
                </div>
            </div>
        </main></>
    );
};

export default Hero;
