import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"

export default function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <Badge variant="secondary" className="mb-4">
        ✨ Introducing Eth.AI
      </Badge>
      <div className="space-y-4 max-w-[64rem]">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          The First{" "}
          <span className="bg-gradient-to-r from-neutral-600 to-neutral-400 bg-clip-text text-transparent">
            Intelligent Copilot
          </span>{" "}
          for Ethereum
        </h1>
        <p className="mx-auto max-w-[42rem] text-muted-foreground text-lg sm:text-xl">
          Elevate your Ethereum experience with AI-powered insights and delegated actions
        </p>
      </div>
      <div className="flex gap-4">
        <Button
          size="lg"
          className="h-[11.5] px-6 bg-[#627EEA] hover:bg-[#4A6FC1] text-white font-bold border border-transparent"
        >
          Getting Started
        </Button>
        <Button size="lg" variant="outline" className="h-12 px-6 font-medium border-neutral-800 hover:bg-neutral-900">
          <Github className="mr-2 h-5 w-5" />
          GitHub
        </Button>
      </div>
    </section>
  )
}

