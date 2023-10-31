"use server"
import clientPromise from "@/lib/dbClient";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

export async function deleteNote (noteId: string) {
    try {
        const client = await clientPromise
        const db = client.db()

        const noteCollection = await db.collection("notes").deleteOne({ _id : new ObjectId(noteId) })



        if (noteCollection.deletedCount === 0) {
            return { error : true , result : {} , message : "No se encontró la nota!" }
        }

        revalidatePath("/","layout")

        return { error : false , result : noteCollection.deletedCount , message : "Nota eliminada exitosamente!" }

    } catch (error) {
        console.log(error)
        return { error : true , result : {} , message : "Error al eliminar la nota!" }
    }
}