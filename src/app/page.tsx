import { getUserNotes } from "@/actions/getUserNotes";
import LandingContent from "@/components/LandingContent";
import TipTapEditor from "@/components/TipTapEditor";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();
  const auth = await isAuthenticated();
  const notes = await getUserNotes(user?.email as string);
  const mappedNotest: Note[] = notes.result.map((note: any) => {
    return {
      _id: note._id,
      title: note.title,
      content: note.content,
      userId: note.userId,
    };
  });

  if (auth) {
    return <TipTapEditor notes={mappedNotest} />;
  } else {
    return <LandingContent />;
  }
}
