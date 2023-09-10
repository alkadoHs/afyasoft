"use client";

import {
  DropdownItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
} from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";

function ProfileDropdown() {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          name="Jason Hughes"
          size="sm"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">zoey@example.com</p>
        </DropdownItem>
        <DropdownItem key="settings" textValue="Your setting">
          My Settings
        </DropdownItem>
        <DropdownItem key="analytics" textValue="dashboard">
          Dashboard
        </DropdownItem>
        <DropdownItem key="configurations" textValue="configuration">
          Configurations
        </DropdownItem>
        <DropdownItem key="help_and_feedback" textValue="help">
          Help & Feedback
        </DropdownItem>
        <DropdownItem key="logout" color="danger" textValue="logout">
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default ProfileDropdown;
