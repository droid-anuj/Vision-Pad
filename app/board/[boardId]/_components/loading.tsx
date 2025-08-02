
import {  Loader2 } from "lucide-react";
import { InfoSkeleton } from "./info";
import { ParticipantsSkeleton } from "./participants";
import { ToolbarSkeleton } from "./toolbar";
const CanvasLoading = () => {
    return (
        <main 
        className="h-full w-full relative bg-neutral-50 touch-none flex items-center justify-center"
        >
            <Loader2 className="h-6 w-6 text-muted-foreground animate-spin"/>
            <InfoSkeleton/>
            <ParticipantsSkeleton/>
            <ToolbarSkeleton/>
        </main>
    );
}

export default CanvasLoading;