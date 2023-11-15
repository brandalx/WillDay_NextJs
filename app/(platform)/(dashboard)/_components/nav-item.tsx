"use-client";
import React from "react";
interface NavItemProps {
  isActive: boolean;
  isExpanded: boolean;
  organization: any;
  onExpand: (id: string) => void;
}
const NavItem = () => {
  return <div>NavItem</div>;
};

export default NavItem;
