"use client";
import Image from "next/image";
import {
    useOrganization,
    useOrganizationList,
} from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Hint } from "@/components/hint";


interface Props{
    id:string;
    name:string;
    imageUrl:string;
}

export const Item = ({
    id,name,imageUrl
}:Props)=>{
    
    const {organization} = useOrganization();
    const {setActive}= useOrganizationList();
    const isActive = organization?.id ==id;
    
    const onClick=()=>{
        if(!setActive)return;
        setActive({organization:id});
    }

    return (
        <div className="aspect-square relative">
            <Hint label={name}
            side="right"
                    align="start"
                    sideOffset={18}>
                <Image
            fill
            className={cn( " rounded-md cursor-pointer opacity-75 hover:opacity-100 transition", isActive && "opactity-100")}
                src={imageUrl}
                onClick={onClick}
                alt={name}
            />
            </Hint>
            
        </div>
    );

};