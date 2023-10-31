import { getUserNotes } from "@/actions/getUserNotes";
import LandingContent from "@/components/LandingContent";
import TipTapEditor from "@/components/TipTapEditor";
import { getServerSession } from "next-auth/next";

export default async function Home() {

  const session = await getServerSession()
  const notes = await getUserNotes(session?.user?.email as string)
  const mappedNotest:Note[] = notes.result.map((note:any) => {
    return {
      _id: note._id,
      title: note.title,
      content: note.content,
      userId: note.userId
    }
  })

  return (
    <>
      {session ? <TipTapEditor notes={mappedNotest} /> : <LandingContent/> }
    </>
  )
}
