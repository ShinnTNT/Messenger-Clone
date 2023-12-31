import { User } from "@prisma/client";
import Image from "next/image";
import React from "react";

interface AvatarProps {
  user?: User;
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {
  return (
    <div className="relative">
      <div className="relative inline-block rounded-full overflow-hidden h-9 w-9 md:h-11 md:w-11">
        <Image
          alt="Avatar"
          src={user?.image || "/images/placeholder.jpg"}
          fill
        />
      </div>
      <span className="absolute block w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500 ring-2 ring-white top-0 right-0" />
    </div>
  );
};

export default Avatar;
