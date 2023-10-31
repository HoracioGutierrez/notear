import { cn } from "@/lib/utils"

interface PageTitleProps {
    children: React.ReactNode
}

export default function PageTitle({ children }: PageTitleProps) {
  return (
    <h2 className={cn("font-semibold text-xl md:text-2xl lg:text-3xl")}>{children}</h2>
  )
}