"use client";

import useConversation from "@/app/hooks/useConversation";
import useRoute from "@/app/hooks/useRoutes";
import React from "react";
import MobileItem from "./MobileItem";

const MobileFooter = () => {
  const routes = useRoute();
  const { isOpen } = useConversation();

  if (isOpen) {
    return null;
  }

  return (
    <div className="lg:hidden fixed justify-between w-full bottom-0 z-40 flex items-center bg-white border-t-[1px]">
      {routes.map((item) => (
        <MobileItem
          key={item.label}
          label={item.label}
          href={item.href}
          icon={item.icon}
          active={item.active}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
};

export default MobileFooter;
