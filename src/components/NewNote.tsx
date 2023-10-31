"use client"

import { createNote } from "@/actions/createNote"
import { useSession } from "next-auth/react"
import { useRef } from "react"
import { toast } from "sonner"
import { Button } from "./ui/button"

type Props = {
    toggleOpen: () => void
}
export default function NewNote({ toggleOpen }: Props) {

    const titleRef = useRef<HTMLHeadingElement>(null)
    const noteRef = useRef<HTMLParagraphElement>(null)
    const { data } = useSession()

    const handleSubmit = async () => {
        const titleContent = titleRef.current?.innerHTML.toString() as string
        const noteContent = noteRef.current?.innerHTML.toString() as string

        const note: Note = {
            title: titleContent,
            content: noteContent,
            userId : data?.user?.email as string
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
        <div className="fixed grid place-items-center inset-0">
            <div className="bg-[rgba(0,0,0,0.5)] absolute inset-0" onClick={toggleOpen}></div>
            <div className="p-4 bg-primary rounded-lg inset-20 absolute flex flex-col">
                <h1 className="text-2xl text-muted" contentEditable ref={titleRef}>Titulo de nota</h1>
                <hr className="mb-4 " />
                <div className="grow">
                    <p contentEditable ref={noteRef}>Deje su nota aqui...</p>
                </div>
                <div className="flex justify-end">
                    <Button onClick={toggleOpen} variant={"secondary"}>cerrar </Button>
                    <Button onClick={handleSubmit} variant={"secondary"}>crear</Button>
                </div>
            </div>
        </div>
    )

}