import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-background/80">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Creado por Horacio Gutierrez</p>
        <a
          href="https://github.com/HoracioGutierrez/notear"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 transition-colors hover:text-foreground"
        >
          <Github className="h-4 w-4" />
          GitHub
        </a>
      </div>
    </footer>
  );
}
