"use-client";
import React from "react";

export type Organization = {
  id: string;
  slug: string;
  imageUrl: string;
  name: string;
};

interface NavItemProps {
  isActive: boolean;
  isExpanded: boolean;
  organization: any;
  onExpand: (id: string) => void;
}
const NavItem = ({
  isExpanded,
  isActive,
  organization,
  onExpand,
}: NavItemProps) => {
  return <div>NavItem</div>;
};

export default NavItem;
