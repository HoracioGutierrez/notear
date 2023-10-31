"use server"

import clientPromise from "@/lib/dbClient"

export async function updateNote(note: Note) {
    try {
        const client = await clientPromise
        const db = client.db()

    } catch (error) {
        
    }
}