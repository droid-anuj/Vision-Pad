"use client"

import { UserAvatar } from "./user-avatar";
import { useOthers, useSelf } from "@liveblocks/react/suspense";

import { Skeleton } from "@/components/ui/skeleton";
import { connectionIdColor } from "@/lib/utils";

const  MAX_SHOW_USERS= 2;

const Participants = () => {

    const users =  useOthers();
    const currentUser = useSelf();
    const hasMoreUsers = users.length> MAX_SHOW_USERS;
    return (
        <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
            <div className="flex gap-x-2">
                {users.slice(0,MAX_SHOW_USERS)
                .map(({connectionId,info})=>{
                    return (
                        <UserAvatar
                        borderColor={connectionIdColor(connectionId)}
                        key={connectionId}
                        src={info?.picture}
                        name={info?.name}
                        fallback={info?.name?.[0] || "T"}
                        />
                    );
                })}

                {currentUser&&(
                    <UserAvatar
                    borderColor={connectionIdColor(currentUser.connectionId)}
                        src={currentUser.info?.picture}
                        name={`${currentUser.info?.name} (You)`}
                        fallback={currentUser.info?.name?.[0] || "T"}
                        />
                )}
                {hasMoreUsers&&(
                    <UserAvatar
                        src={currentUser.info?.picture}
                        name={`${users.length -MAX_SHOW_USERS} more`}
                        fallback={`+${users.length -MAX_SHOW_USERS}`}
                        />
                )}
            </div>
        </div>
    );
}


export const ParticipantsSkeleton = function InfoSkeleton(){
    return (
        <div className="absolute h-12 top-2 right-2 w-[200px] bg-white rounded-md p-3 flex items-center shadow-md">
            <Skeleton className="h-full w-full bg-muted-400"/>

        </div>
    );
}
export default Participants;