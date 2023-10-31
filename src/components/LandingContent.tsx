import Page from "./Page";

export default function LandingContent() {
    return (
        <Page noTitle className="grid place-items-center">
            <div className="text-center space-y-4">
                <h2 className="text-2xl font-light">Bienvenido a <span className="font-bold text-primary">Notear</span> !</h2>
                <p className="text-gray-500">Inicia sesión para comenzar a escribir tus notas.</p>
            </div>
        </Page>
    )
}