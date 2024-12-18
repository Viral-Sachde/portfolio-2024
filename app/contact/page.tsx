import { Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const email = "vsachde74@gmail.com"
  const subject = "Hello from your portfolio!"
  const body = "I'd like to get in touch with you."

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  return (
    <div className=" flex items-center justify-center p-4">
      <div className="w-full mt-8 space-y-8 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-primary/10 p-2">
            <Mail className="h-6 w-6" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Contact Me</h1>
          <p className="text-muted-foreground">
            Reach out to me over email. I will get back to you ASAP - I promise.
          </p>
        </div>

        <Button
          asChild
          size="lg"
          className="w-full max-w-xs mx-auto"
        >
          <a href={mailtoLink}>
            Send Email
          </a>
        </Button>
      </div>
    </div>
  )
}

