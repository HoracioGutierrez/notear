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
        <main className={cn("container",className)}>
            {!noTitle && <PageTitle>{title}</PageTitle>}
            {children}
        </main>
    )
}