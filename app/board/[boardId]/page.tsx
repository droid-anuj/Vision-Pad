import Canvas from "./_components/canvas";
import { Room } from "@/components/room";
import CanvasLoading from "./_components/loading";

interface BoardIdPageProps {
  params: Promise<{
    boardId: string;
  }>;
}

const BoardIdPage = async ({ params }: BoardIdPageProps) => {
  const { boardId } = await params;
  
  return (
    <Room roomId={boardId} fallBack={<CanvasLoading />}>
      <Canvas boardId={boardId} />
    </Room>
  );
};

export default BoardIdPage;