"use client"
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
    <Page title='Bienvenido!'>
      <Button onClick={handleClick}>{newNote ? "cancelar" : "nueva nota"}</Button>
      {newNote && <NewNote toggleOpen={handleClick} />}
      <section className='mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 xl:gap-8'>
        {notes.length === 0 && <p>No hay notas guardadas aun!</p>}
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