"use client"

import { deleteNote } from '@/actions/deleteNote'
import { cn } from '@/lib/utils'
import { TrashIcon } from 'lucide-react'
import { useState } from 'react'
import { Button } from './ui/button'

type Props = {
    note: Note
}

export default function UserNote({ note }: Props) {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    const handleDelete = (e:any) => {
        e.stopPropagation()
        deleteNote(note._id as string)
    }

    return (
        <article className={cn(
            open ? "fixed inset-0" : "bg-primary p-2 max-h-48 rounded-lg"
        )} onClick={!open ? handleClick : () => { }}>
            <div onClick={open ? handleClick : () => { }} className={cn(open ? "absolute inset-0 bg-[rgba(0,0,0,0.5)]" : "")}></div>
            <div className={cn(open ? "bg-primary p-2 inset-20 absolute rounded" : "", "flex flex-col gap-4")}>
                <div className='space-y-4 grow'>
                    <h2 className="text-2xl">{note.title}</h2>
                    <p>{note.content}</p>
                </div>
                <div className='flex justify-end'>
                    <Button size={"icon"} className='bg-red-500 hover:bg-accent-foreground' onClick={handleDelete}>
                        <TrashIcon className='w-6 h-6'/>
                    </Button>
                </div>
            </div>
        </article>
    )
}