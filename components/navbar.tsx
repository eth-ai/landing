import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-semibold">Eth.AI</span>
        </Link>
        <nav className="flex items-center space-x-6">
          <Button variant="outline" className="border-neutral-800 hover:bg-neutral-900">
            Login
          </Button>
        </nav>
      </div>
    </header>
  )
}

