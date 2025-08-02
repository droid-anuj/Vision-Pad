import { useMutation, useSelf } from "@liveblocks/react";
import { LiveMap, LiveList, LiveObject } from "@liveblocks/client";
import { Layer } from "@/types/canvas";

export const useDeleteLayer = () => {
  const selection = useSelf((me) => me.presence.selection);

  return useMutation(
    ({ storage, setMyPresence }) => {

      if (!selection || selection.length === 0) return;

      const liveLayers = storage.get("layers") ;
      const layerIds = storage.get("layerIds") ;

      selection.forEach((id) => {
        liveLayers.delete(id);

        const index = layerIds.findIndex((layerId) => layerId === id);
        if (index !== -1) {
          layerIds.delete(index);
        }
      });

      setMyPresence({selection:[]},{addToHistory:true});
    },
    [selection]
  );
};
