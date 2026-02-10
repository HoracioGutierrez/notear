interface PageTitleProps {
    children: React.ReactNode
}

export default function PageTitle({ children }: PageTitleProps) {
  return (
    <h2 className="text-2xl font-bold tracking-tight">{children}</h2>
  )
}
