import { BookOpen } from 'lucide-react'

export default function ArticlesPage() {
    return (
        <div className="min-h-screen items-center  py-14">
            <div className="text-center space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 p-2">
                    <BookOpen className="h-6 w-6" />
                </div>
                <h1 className="text-4xl font-bold tracking-tight">Articles</h1>
                <p className="text-xl text-muted-foreground">Coming Soon</p>
            </div>
        </div>
    )
}

