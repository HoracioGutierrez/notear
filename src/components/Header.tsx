import { StickyNote } from "lucide-react";
import AuthMenu from "./AuthMenu";
import DarkModeTogglerButton from "./DarkModeToggler";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-14 border-b bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 flex h-full items-center justify-between">
        <div className="flex items-center gap-2">
          <StickyNote className="h-5 w-5 text-primary" />
          <h1 className="text-lg font-semibold tracking-tight text-primary">Notear</h1>
        </div>
        <nav className="flex items-center gap-2">
          <AuthMenu />
          <DarkModeTogglerButton />
        </nav>
      </div>
    </header>
  );
}
