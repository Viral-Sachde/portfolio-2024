import Image from "next/image";

const images = [
    "/photo3.jpg",
    "/photo4.jpg",
];

export default function AboutPage() {
    return (
        <>
            <div className="min-h-screen overflow-hidden">
                <div className="flex flex-col">
                    {/* Main Content */}
                    <main className="px-4 sm:px-8 lg:px-24">
                        <div className="container py-10 space-y-8">
                            {/* Header */}
                            <div className="space-y-4">
                                <h1 className="text-3xl md:text-4xl dark:text-white font-bold">
                                    About Me
                                </h1>
                            </div>
                            {/* Introduction */}
                            <div className="space-y-4">
                                <p className="text-base md:text-lg dark:text-white">
                                    Holaaa! I&apos;m Viral Sachde, I&apos;m a Full Stack Web Developer from Ahmedabad, India. With 1+ YOE in creating seamless full stack web applications, trying to make the internet a bit cooler one website at a time.
                                </p>
                            </div>
                            {/* Image Grid */}
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                                {images.map((src, index) => (
                                    <div key={index} className="overflow-hidden rounded-xl bg-muted">
                                        <Image
                                            src={src}
                                            alt={`Personal photo ${index + 1}`}
                                            width={200}
                                            height={200}
                                            className="h-full w-full object-cover transition-transform hover:scale-105"
                                        />
                                    </div>
                                ))}
                            </div>
                            {/* Professional Journey */}
                            <div className="space-y-4">
                                <h2 className="text-xl md:text-2xl font-bold dark:text-white">
                                    Professional Journey
                                </h2>
                                <div className="space-y-2">
                                    <p className="font-medium dark:text-white">Current:</p>
                                    <p className="text-muted-foreground">
                                        Associate Software Engineer @IDX India
                                    </p>
                                    <p className="font-medium mt-4 dark:text-white">Previous Roles:</p>
                                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                        <li>Angular/Node JS Intern @PMC Retail</li>
                                        <li>MERN Fullstack Dev at @Arkay Apps</li>
                                        <li>MERN Fullstack Dev at @Pavans Group</li>
                                        <li>Django Fullstack Dev at @Anant Soft Computing</li>
                                        <li>Freelance Full Stack Developer @Upwork</li>
                                        <li>Freelance Full Stack Developer UI/UX Designer @Fiverr</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Tech Stack */}
                            <div className="space-y-4">
                                <h2 className="text-xl md:text-2xl font-bold dark:text-white">
                                    Tech Stack & Skills
                                </h2>
                                <ul className="text-sm md:text-base text-muted-foreground space-y-2">
                                    <li>
                                        <span className="text-black dark:text-white">Programming Languages:</span> JavaScript, TypeScript, Python, HTML, CSS
                                    </li>
                                    <li>
                                        <span className="text-black dark:text-white">Frontend Development:</span> React.js, Angular.js, Next.js, Remix, T3 Stack, TailwindCSS
                                    </li>
                                    <li>
                                        <span className="text-black dark:text-white">Backend Development:</span> Node.js, Express.js, Nest.js, Django
                                    </li>
                                    <li>
                                        <span className="text-black dark:text-white">Databases:</span> MongoDB, MySQL, PostgreSQL
                                    </li>
                                    <li>
                                        <span className="text-black dark:text-white">Version Control & Cloud:</span> Git, GitHub, AWS, Docker
                                    </li>
                                    <li>
                                        <span className="text-black dark:text-white">Languages:</span> Fluent in English, Hindi, Gujarati (native)
                                    </li>
                                    <li>
                                        <span className="text-black dark:text-white">Professional Skills:</span> Team Player, Communication, Problem-Solving, Adaptability, Time Management
                                    </li>
                                </ul>
                            </div>
                            {/* Expertise */}
                            <div className="space-y-4">
                                <h2 className="text-xl md:text-2xl font-bold dark:text-white">
                                    Expertise
                                </h2>
                                <div className="space-y-4 text-sm md:text-base text-muted-foreground">
                                    <p>
                                        I&apos;ve always been about bringing ideas to life—taking concepts from &quot;what if&quot; to &quot;it works.&quot; As a freelancer, I turned client visions into fully functional, full-stack apps that didn&apos;t just work but made an impact. It&apos;s more than just code; it&apos;s crafting solutions that feel effortless and hit differently.
                                    </p>
                                    <p>
                                        My vibe? Full-Stack Dev, clean code, and a bit of storytelling on the side. I love building tools that actually help, breaking down big ideas, and adding a little flair to everything I do.
                                    </p>
                                    <p>
                                        Right now, I&apos;m building @bvyte-tech
                                    </p>
                                </div>
                            </div>
                            {/* Let's Connect */}
                            <div className="space-y-4">
                                <h2 className="text-xl md:text-2xl font-bold">Let&apos;s Connect!</h2>
                                <p className="text-sm md:text-base text-muted-foreground">
                                    I&apos;m always open to collaboration and excited about working with other developers on meaningful projects.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <a href="https://in.linkedin.com/in/viral-sachde-18664b24b" className="text-primary hover:underline">
                                        LinkedIn: @linkedIn/ViralSachde
                                    </a>
                                    <a href="https://twitter.com/viralpullls" className="text-primary hover:underline">
                                        Twitter: @twitter/viralpullls
                                    </a>
                                    <a href="https://github.com/Viral-Sachde" className="text-primary hover:underline">
                                        GitHub: @github/ViralSachde
                                    </a>
                                    <a href="mailto:vsachde74@gmail.com" className="text-primary hover:underline">
                                        Mail: @mail/ViralSachde
                                    </a>
                                </div>
                                <p className="text-sm md:text-base text-muted-foreground mt-6">
                                    Let&apos;s vibe in the space where code slaps, ideas spark, and pixels tell stories. We&apos;re talking late-night breakthroughs, aesthetic builds, and making tech look effortless. Let&apos;s make some noise. You down?
                                </p>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
