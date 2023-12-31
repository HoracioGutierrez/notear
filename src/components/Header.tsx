import AuthMenu from "./AuthMenu";
import DarkModeTogglerButton from "./DarkModeToggler";

export default function Header() {
  return (
    <header className="container flex items-center justify-between py-2  md:py-4 lg:py-6">
        <h1 className="font-extrabold text-primary">Notear</h1>
        <nav className="flex items-center gap-4">
            <AuthMenu/>
            <DarkModeTogglerButton/>
        </nav>
    </header>
  )
}