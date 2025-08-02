"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { Layer } from "@/types/canvas";
import { LiveMap, LiveObject, LiveList } from "@liveblocks/client";
interface RoomProps{
    children: ReactNode, 
     roomId:string;
     fallBack:NonNullable<ReactNode> | null | undefined;

}

export function Room({
     children, roomId, fallBack}: RoomProps) {
  return (
    <LiveblocksProvider authEndpoint="/api/liveblocks-auth" throttle={16}>
      <RoomProvider id={roomId } initialPresence={{cursor:null, selection:[]}} initialStorage={{layers : new LiveMap<string, LiveObject<Layer>>(),layerIds: new LiveList([]), }}>
        <ClientSideSuspense fallback={fallBack}>
          {()=>children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}