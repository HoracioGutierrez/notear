"use client"
import { FileText, Plus } from 'lucide-react'
import { useState } from 'react'
import NewNote from './NewNote'
import Page from './Page'
import UserNote from './UserNote'
import { Button } from './ui/button'

interface TipTapEditorProps {
  notes: Note[]
}

const TipTapEditor = ({ notes }: TipTapEditorProps) => {

  const [newNote, setNewNote] = useState(false)

  const handleClick = () => {
    setNewNote(!newNote)
  }

  return (
    <Page noTitle>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold tracking-tight">Bienvenido!</h2>
        <Button size="sm" onClick={handleClick}>
          <Plus className="h-4 w-4 mr-2" />
          {newNote ? "Cancelar" : "Nueva nota"}
        </Button>
      </div>
      {newNote && <NewNote toggleOpen={handleClick} />}
      <section className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {notes.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center py-16 text-muted-foreground">
            <FileText className="h-12 w-12 mb-4" />
            <p>No hay notas guardadas aun!</p>
          </div>
        )}
        {notes.map((note: Note) => {
          return (
            <UserNote key={note.id} note={note} />
          )
        })}
      </section>
    </Page>
  )
}

export default TipTapEditor
