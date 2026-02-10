import { cn } from "@/lib/utils"
import PageTitle from "./PageTitle"

interface PageProps {
    children: React.ReactNode,
    noTitle?: boolean,
    title?: string,
    className?: string
}

export default function Page({ children, noTitle = false, title = "New Page" , className }: PageProps) {
    return (
        <main className={cn("max-w-5xl mx-auto px-4",className)}>
            {!noTitle && <PageTitle>{title}</PageTitle>}
            {children}
        </main>
    )
}