import { cn } from "@/lib/utils"

export interface TestimonialAuthor {
  name: string
  handle: string
  location: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  href,
  className
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'
  
  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "flex flex-col rounded-lg border-t border-[#87A96B]/30",
        "bg-gradient-to-b from-[#1e3a5f]/40 to-[#182418]/80",
        "p-4 text-start sm:p-5",
        "hover:from-[#1e3a5f]/50 hover:to-[#1e3a5f]/40",
        "min-w-[380px] max-w-[380px] sm:min-w-[380px] sm:max-w-[380px]",
        "min-h-[280px]",
        "transition-colors duration-300",
        "shadow-sm",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-semibold leading-none text-white">
            {author.name}
          </h3>
          <p className="text-lg text-gray-400">
            {author.location}
          </p>
        </div>
      </div>
      <p className="mt-4 text-lg text-gray-300 leading-relaxed">
        {text}
      </p>
    </Card>
  )
}

