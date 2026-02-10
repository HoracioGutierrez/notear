"use client"

import { deleteNote } from '@/actions/deleteNote'
import { Trash2 } from 'lucide-react'
import { useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'

type Props = {
    note: Note
}

export default function UserNote({ note }: Props) {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    const handleDelete = (e: any) => {
        e.stopPropagation()
        deleteNote(note._id as string)
    }

    if (open) {
        return (
            <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={handleClick}>
                <div className="absolute inset-6 sm:inset-12 md:inset-20" onClick={(e) => e.stopPropagation()}>
                    <Card className="h-full flex flex-col">
                        <CardHeader>
                            <CardTitle className="text-base font-semibold text-primary">{note.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 overflow-auto">
                            <p>{note.content}</p>
                        </CardContent>
                        <CardFooter className="justify-end">
                            <Button variant="ghost" size="icon" className="hover:text-destructive" onClick={handleDelete}>
                                <Trash2 className='h-4 w-4' />
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        )
    }

    return (
        <Card className="group cursor-pointer transition-colors hover:border-primary/30" onClick={handleClick}>
            <CardHeader>
                <CardTitle className="text-base font-semibold text-primary">{note.title}</CardTitle>
                <CardDescription className="line-clamp-3 text-sm leading-relaxed">{note.content}</CardDescription>
            </CardHeader>
            <CardFooter className="justify-end">
                <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 hover:text-destructive" onClick={handleDelete}>
                    <Trash2 className='h-4 w-4' />
                </Button>
            </CardFooter>
        </Card>
    )
}
