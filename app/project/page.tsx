import SpotlightCard from "@/components/Components/SpotlightCard/SpotlightCard";
import Link from "next/link"

const projects = [
    {
        title: "Room",
        description: "Developed a fully functional Zoom clone with features for custom meetings, recordings, and various meeting structures. Leveraged modern web technologies to create a scalable, user-friendly, and interactive video conferencing platform.",
        
        technologies: [
            "Stream",
            "React",
            "Shadcn",
            "Clerk",
            "Tailwind CSS",
            "Next JS"
        ],
        link: "https://github.com/Viral-Sachde/Room-meeting-app"
    },
    {
        title: "Unified Backend for YouTube and Twitter",
        description: "Built a comprehensive backend system integrating features of YouTube and Twitter into a single application. Enabled functionalities like video uploads, user timelines, likes, retweets, and comments with efficient database handling and scalable architecture.",
        
        technologies: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "Firebase",
            "Redis",
            "GraphQL"
        ],
        link: "https://github.com/Viral-Sachde/youtube-twitter-backend"
    },
    {
        title: "TurfEase: Turf Booking System",
        description: "Developed a full-stack web application for booking sports turfs, enabling users to browse, book, and manage turf reservations seamlessly. Implemented features like real-time availability, user authentication, payment integration, and a responsive dashboard for turf owners to manage bookings and schedules. Focused on a clean and intuitive user interface with robust backend APIs to ensure smooth operations.",
        
        technologies: [
            "MongoDB",
            "Express.js",
            "React.js",
            "Node.js",
            "Stripe",
            "Socket.IO",
            "Tailwind CSS"
        ],
        link: "https://github.com/Viral-Sachde/TurfEase"
    }, {
        title: "Personal Portfolio",
        description: "Created a personal portfolio website using Next.js, HTML, and CSS, showcasing projects, skills, and experiences. Implemented modern UI/UX design principles using Framer Motion for animations and Tailwind CSS for responsive design. Deployed the website on Vercel, ensuring fast load times and a seamless user experience.",
        
        technologies: [
            "Next.js",
            "HTML",
            "Tailwind CSS",
            "React",
            "Figma",
            "Vercel"
        ],
        link: "https://github.com/Viral-Sachde/portfolio-2024"
    },

];



export default function ProjectsPage() {
    return (
        <div className=''>


            <div className="px-4 sm:px-8 lg:px-16 py-12 space-y-10">
                <div className="max-w-5xl mx-auto space-y-8">
                    <div className="space-y-4">

                        <h1 className="text-4xl font-bold tracking-tight">What I&apos;ve been working on</h1>
                    </div>

                    <div className="grid gap-8">
                        {projects.map((project, index) => (                        <><SpotlightCard className="custom-spotlight-card flex flex-col items-center   bg-opacity-10 justify-center rounded-2xl  backdrop-blur-lg p-6 shadow-md" spotlightColor="rgba(211, 211, 211, 0.67)">
                            <Link
                            key={index}
                            href={project.link}
                            className="group relative overflow-hidden "
                        >
                                <div className="p-4">

                                    <div className="space-y-4">
                                        <div>
                                            <h2 className="text-2xl font-bold">{project.title}</h2>
                                            <p className="">{project.description}</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2 ">
                                            {project.technologies.map((tech, techIndex) => (

                                                <span
                                                    key={techIndex}
                                                    className="rounded-lg bg-primary/10 px-2.5 py-0.5 text-sm font-medium text-black dark:text-white "
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </SpotlightCard>
                        
                       </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

