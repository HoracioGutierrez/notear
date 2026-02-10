"use client"

import { createNote } from "@/actions/createNote"
import { useRef } from "react"
import { toast } from "sonner"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"

type Props = {
    toggleOpen: () => void
}
export default function NewNote({ toggleOpen }: Props) {

    const titleRef = useRef<HTMLHeadingElement>(null)
    const noteRef = useRef<HTMLParagraphElement>(null)
    const { user , isAuthenticated } = useKindeBrowserClient()

    const handleSubmit = async () => {
        const titleContent = titleRef.current?.innerHTML.toString() as string
        const noteContent = noteRef.current?.innerHTML.toString() as string

        const note: Note = {
            title: titleContent,
            content: noteContent,
            userId : user?.email as string
        }

        toast.loading("Creando nota...")
        const result = await createNote(note)
        if (result.error) {
            toast.dismiss()
            toast.error("Error al crear nota, intente de nuevo.")
        } else {
            toast.success("Nota creada!")
            toggleOpen()
        }
    }

    return (
        <div className="fixed inset-0 z-50 grid place-items-center">
            <div className="bg-black/50 backdrop-blur-sm absolute inset-0" onClick={toggleOpen}></div>
            <Card className="absolute inset-6 sm:inset-12 md:inset-20 flex flex-col">
                <CardHeader>
                    <CardTitle
                        className="text-base font-semibold text-primary outline-none"
                        contentEditable
                        ref={titleRef}
                        suppressContentEditableWarning
                    >
                        Titulo de nota
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                    <p contentEditable ref={noteRef} className="outline-none" suppressContentEditableWarning>Deje su nota aqui...</p>
                </CardContent>
                <CardFooter className="justify-end gap-2">
                    <Button onClick={toggleOpen} variant="outline" size="sm">Cerrar</Button>
                    <Button onClick={handleSubmit} variant="default" size="sm">Crear</Button>
                </CardFooter>
            </Card>
        </div>
    )

}
