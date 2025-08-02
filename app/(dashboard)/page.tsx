"use client";

import { useSearchParams } from "next/navigation";
import { useOrganization } from "@clerk/nextjs";
import EmptyOrg from "./_components/empty-org";
import { BoardList } from "./_components/board-list";

const Dashboard = () => {
  const { organization } = useOrganization();
  const searchParams = useSearchParams();

  const search = searchParams.get("search") || "";
  const favourites = searchParams.get("favourites") || "";

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList
          orgId={organization.id}
          query={{ search, favourites }}
        />
      )}
    </div>
  );
};

export default Dashboard;
