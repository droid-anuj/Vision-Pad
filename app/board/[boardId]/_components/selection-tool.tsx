"use client";

import { useSelectionBounds } from "@/hooks/use-selection-bounds";
import { Camera, Color } from "@/types/canvas";
import { useMutation, useSelf } from "@liveblocks/react";
import { memo } from "react";
import {ColorPicker} from "./color-picker";
import { useDeleteLayer } from "@/hooks/use-delete-layers";
import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { BringToFront, SendToBack, Trash2 } from "lucide-react";

interface SelectionToolsProps {
    camera:Camera;
    setLastUsedColor:(color:Color)=>void;
}

const SelectionTools = memo(({camera,setLastUsedColor}:SelectionToolsProps) => {
    const selection = useSelf((me)=>me.presence.selection);

    const MoveToBack  = useMutation(
                ({ storage }) => {
                const layerIds = storage.get("layerIds");
                const indices :number[]=[]

                const arr = layerIds.toImmutable();
                for (let i= 0; i<arr.length;i++){
                    if( selection?.includes(arr[i])){
                        indices.push(i);
                    }
                }

                for (let i = 0; i<indices.length; i++ ){
                    layerIds.move(indices[i],i);
                }
                },
                [selection]
    );
    const bringToFront = useMutation(
    ({ storage }) => {
        const layerIds = storage.get("layerIds");
        const indices: number[] = [];

        const arr = layerIds.toImmutable();

        for (let i = 0; i < arr.length; i++) {
        if (selection?.includes(arr[i])) {
            indices.push(i);
        }
        }

        for (let i = indices.length - 1; i >= 0; i--) {
        const fromIndex = indices[i];
        const toIndex = layerIds.length - 1;
        layerIds.move(fromIndex, toIndex);
        }
    },
    [selection]
    );


    const setFill = useMutation(
    ({ storage }, fill: Color) => {
        const liveLayers = storage.get("layers");

        setLastUsedColor(fill);

        selection?.forEach((id) => {
        liveLayers.get(id)?.set("fill", fill);
        });
    },
    [selection, setLastUsedColor]
    );

    const deleteLayers = useDeleteLayer();

    const selectionbound = useSelectionBounds();
    if(!selectionbound){
        return null;
    }

    const x = selectionbound.width/2 + selectionbound.x + camera.x ;
    const y = selectionbound.y +camera.y ;

    return (
        <div
            className="absolute p-3 rounded-xl bg-white shadow-sm border flex select-none"
            style={{
                left: `${x}px`,
                top: `${y - 16}px`,
                position: "absolute",
                transform: "translate(-50%, -100%)"
            }}      
            >
            <ColorPicker
                onChange={setFill}
            />
            <div className="flex flex-col gap-y-0.5">
                <Hint label="Bring to front">
                    <Button
                     variant="board"
                     size="icon"
                     onClick={bringToFront}
                    >
                        <BringToFront/>
                    </Button>
                </Hint>
                <Hint label="Send to back">
                    <Button
                    variant="board"
                     size="icon"
                     onClick={MoveToBack}
                    >
                        <SendToBack/>
                    </Button>
                </Hint>
            </div>

            <div className="flex items-center pl-2 ml-2 border-l border-neutral-200">
                <Hint label="Delete">
                    <Button
                      variant="board"
                      size="icon"
                      onClick={deleteLayers}
                    >
                        <Trash2/>
                    </Button>

                </Hint>
            </div>
        </div>

    );
});
SelectionTools.displayName="SelectionTools"

export default SelectionTools;