import clientPromise from "@/lib/dbClient";

export async function getUserNotes(userId:string) {
    try {
        const client = await clientPromise
        const db = client.db()

        const notesCollection = await db.collection("notes").find({ userId }).toArray()

        return { error : false , result : notesCollection , message : "Notas obtenidas exitosamente!" }

    } catch (error) {
        return { error : true , result : [] , message : "Error al obtener las notas!" }
    }
}