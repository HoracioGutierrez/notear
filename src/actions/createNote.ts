"use server"

import clientPromise from "@/lib/dbClient";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

export async function createNote(note:Note){
    try {
        const client = await clientPromise
        const db = client.db()

        const noteWithObjectId = {
            ...note,
            _id : new ObjectId()
        }

        const noteCollection = await db.collection("notes").insertOne(noteWithObjectId)

        revalidatePath("/","layout")
        return { error : false , result : noteCollection.insertedId , message : "Nota creada exitosamente!" }

    } catch (error) {
        console.log(error)
        return { error : true , result : {} , message : "Error al crear la nota!" }
    }
}