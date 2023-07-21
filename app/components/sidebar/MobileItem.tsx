"use client";

import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface MobileItemProps {
  label: string;
  href: string;
  icon: IconType;
  active?: boolean;
  onClick?: () => void;
}

const MobileItem: React.FC<MobileItemProps> = ({
  label,
  href,
  icon: Icon,
  active,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };
  return (
    <Link
      className={clsx(
        `group flex gap-x-3 text-sm leading-6 font-semibold w-full justify-center p-4 text-gray-500 hover:text-black hover:bg-gray-100`,
        active && "text-black bg-gray-100"
      )}
      onClick={handleClick}
      href={href}
    >
      <Icon className="h-6 w-6" />
    </Link>
  );
};

export default MobileItem;
