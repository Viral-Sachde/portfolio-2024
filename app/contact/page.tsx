"use client"
 /* eslint-disable */ 
import { useState } from "react"
import { Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    // const data = {
    //   name: formData.get("name"),
    //   email: formData.get("email"),
    //   message: formData.get("message"),
    // }

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    })

    setIsLoading(false)
    event.currentTarget.reset()
  }

  return (
    <div > 
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-primary/10 p-2">
            <Mail className="h-6 w-6" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Contact Me</h1>
          <p className="text-muted-foreground">
            Reach out to me over email or fill up this contact form. I will get back to you ASAP - I
            promise.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              name="name"
              placeholder="Your Name"
              required
              className="bg-card/50 backdrop-blur-xl"
            />
          </div>
          <div className="space-y-2">
            <Input
              name="email"
              type="email"
              placeholder="Your email address"
              required
              className="bg-card/50 backdrop-blur-xl"
            />
          </div>
          <div className="space-y-2">
            <Textarea
              name="message"
              placeholder="Your Message"
              required
              className="min-h-[150px] bg-card/50 backdrop-blur-xl"
            />
          </div>
          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Submit"}
          </Button>
        </form>
      </div>
      <Toaster />
    </div></div>
  )
}

