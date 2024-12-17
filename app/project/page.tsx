import Image from "next/image"
import Link from "next/link"

const projects = [
    {
        title: "Quick Score",
        description: "A full fledged chrome plugin for live score updates",
        image: "/placeholder.svg",
        technologies: [
            "React.js",
            "Tailwindcss",
            "aws - lambda, api gateway, event bridge, dynamodb",
            "serverless.yml"
        ],
        link: "#"
    },
    {
        title: "Marked",
        description: "Attendance management system for MSIT' IPU",
        image: "/placeholder.svg",
        technologies: [
            "MongoDB",
            "Node.js",
            "Express.js",
            "React.js",
            "Render",
            "Python"
        ],
        link: "#"
    },
    // You can add more projects here
]

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
                            <div className="grid gap-4 p-4 md:grid-cols-[300px_1fr] md:p-6">
                                <div className="overflow-hidden rounded-lg">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={300}
                                        height={200}
                                        className="aspect-[3/2] h-full w-full object-cover transition-transform group-hover:scale-105"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <h2 className="text-2xl font-bold">{project.title}</h2>
                                        <p className="text-muted-foreground">{project.description}</p>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="rounded-lg bg-primary/10 px-2.5 py-0.5 text-sm font-medium text-primary-foreground transition-colors group-hover:bg-primary/20"
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

