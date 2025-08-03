import { Skeleton } from "@/components/ui/skeleton";
import { Circle,  MousePointer2,  Pencil,  Redo2, Square, StickyNote, Type, Undo2 } from "lucide-react";
import { ToolButton } from "./tool-button";
import { CanvasMode, CanvasState, LayerType } from "@/types/canvas";

interface ToolbarProps{
    canvasState:CanvasState;
    setCanvasState :(newState: CanvasState) =>void;
    undo:()=>void;
    redo:()=>void;
    canUndo:boolean;
    canRedo: boolean;
}

const Toolbar = (
    {
        canvasState,
        setCanvasState,
        undo,
        redo,
        canUndo,
        canRedo
    } :ToolbarProps
) => {
    return (
        <div className=" absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
            <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
                <ToolButton label="Select" icon={MousePointer2} onClick={()=>setCanvasState({mode:CanvasMode.None,})} isActive={
                    canvasState.mode===CanvasMode.None || canvasState.mode===CanvasMode.Translating ||canvasState.mode===CanvasMode.SelectionNet ||
                    canvasState.mode===CanvasMode.Pressing || canvasState.mode===CanvasMode.Resizing}/>
                <ToolButton label="Text" icon={Type} onClick={()=>setCanvasState({
                    mode:CanvasMode.Inserting,
                    LayerType:LayerType.Text
                    })} isActive={canvasState.mode===CanvasMode.Inserting &&  canvasState.LayerType === LayerType.Text} />
                <ToolButton label="Sticky note" icon={StickyNote} onClick={()=>setCanvasState({
                    mode:CanvasMode.Inserting,
                    LayerType:LayerType.Note,
                    })} isActive={canvasState.mode===CanvasMode.Inserting && canvasState.LayerType === LayerType.Note}/>
                <ToolButton label="Rectangle" icon={Square} onClick={()=>setCanvasState({
                    mode:CanvasMode.Inserting,
                    LayerType:LayerType.Rectangle,
                    })} isActive={canvasState.mode===CanvasMode.Inserting && canvasState.LayerType === LayerType.Rectangle}/>
                <ToolButton label="Ellipse" icon={Circle} onClick={()=>setCanvasState({
                    mode:CanvasMode.Inserting,
                    LayerType:LayerType.Ellipse,
                    })} isActive={canvasState.mode===CanvasMode.Inserting && canvasState.LayerType === LayerType.Ellipse}/>
                <ToolButton label="Pen" icon={Pencil} onClick={()=>setCanvasState({
                    mode:CanvasMode.Pencil,
                    })} isActive={canvasState.mode===CanvasMode.Pencil} />
                
            </div>
            <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
                <ToolButton label="Undo" icon={Undo2} onClick={undo} isActive={false} isDisabled={!canUndo}/>
                <ToolButton label="Redo" icon={Redo2} onClick={redo} isActive={false} isDisabled={!canRedo}/>
            </div>
        </div>
    );
}


export const ToolbarSkeleton = function InfoSkeleton(){
    return (
        <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
            <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md h-[100px] w-[40px]">
                <Skeleton className="h-full w-full bg-muted-400"/>
            </div>
            <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md h-[80px] w-[40px]">
                <Skeleton className="h-full w-full bg-muted-400"/>
            </div>

        </div>
    );
}
export default Toolbar;