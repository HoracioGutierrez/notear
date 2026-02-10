import { StickyNote } from "lucide-react";
import Page from "./Page";

export default function LandingContent() {
    return (
        <Page noTitle className="flex flex-1 items-center justify-center">
            <div className="text-center space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                    <StickyNote className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-light">Bienvenido a <span className="font-bold text-primary">Notear</span> !</h2>
                <p className="text-muted-foreground">Inicia sesión para comenzar a escribir tus notas.</p>
            </div>
        </Page>
    )
}
