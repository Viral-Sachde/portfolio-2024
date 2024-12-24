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
            "Ext JS"
        ],
        link: "https://room-meeting-app.vercel.app/"
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
        link: "#"
    },
    {
        title: "E-commerce Webapp + AI-Integration",
        description: "Designed and developed an Angular-based e-commerce platform with AI integration for personalized product recommendations and a seamless shopping experience. Focused on scalable architecture, payment gateway integration, and intuitive user interface.",
        
        technologies: [
            "Angular",
            "TypeScript",
            "Python",
            "TensorFlow",
            "Stripe",
            "Bootstrap"
        ],
        link: "#"
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
        link: "#"
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
        link: "#"
    },

];

// You can add more projects here


export default function ProjectsPage() {
    return (
        <div className=''>


            <div className="px-4 sm:px-8 lg:px-16 py-12 space-y-10">
                <div className="max-w-5xl mx-auto space-y-8">
                    <div className="space-y-4">

                        <h1 className="text-4xl font-bold tracking-tight">What I&apos;ve been working on</h1>
                    </div>

                    <div className="grid gap-8">
                        {projects.map((project, index) => (
                            <Link
                                key={index}
                                href={project.link}
                                className="group relative overflow-hidden rounded-xl border bg-card/50 backdrop-blur-xl transition-all hover:bg-card/80"
                            >
                                <div className="p-4">
                                   
                                    <div className="space-y-4">
                                        <div>
                                            <h2 className="text-2xl font-bold">{project.title}</h2>
                                            <p className="text-muted-foreground">{project.description}</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2 ">
                                            {project.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="rounded-lg bg-primary/10 px-2.5 py-0.5 text-sm font-medium text-black transition-colors group-hover:bg-primary/20"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

