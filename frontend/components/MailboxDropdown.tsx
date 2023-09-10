"use client";

import { EnvelopeIcon } from "@heroicons/react/20/solid";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { Badge } from "@nextui-org/badge";
import { Avatar } from "@nextui-org/avatar";

function MailboxDropdown() {
  const iconClasses =
    "h-4 w-4 text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          isIconOnly
          className="rounded-full bg-slate-50 overflow-visible p-2 hover:bg-gray-200"
        >
          <Badge color="danger" content={5} shape="circle">
            <EnvelopeIcon className="h-7 w-6 fill-gray-400" />
          </Badge>
        </Button>
      </DropdownTrigger>

      <DropdownMenu variant="faded" aria-label="Notification dropdown">
        <DropdownSection title="Notifications" showDivider>
          <DropdownItem
            key="new"
            shortcut="⌘N"
            description="Create a new file"
            startContent={
              <Avatar
                isBordered
                as="button"
                className="transition-transform w-6 h-6 text-tiny"
                name="Jason Hughes"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            }
          >
            New file
          </DropdownItem>
          <DropdownItem
            key="copy"
            title="Maria Jensen"
            shortcut="⌘C"
            description="Copy the file link"
            startContent={
              <Avatar
                isBordered
                as="button"
                className="transition-transform w-6 h-6 text-tiny"
                name="Jason Hughes"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            }
          >
            Copy link
          </DropdownItem>
          <DropdownItem
            key="edit"
            title="John Moe"
            shortcut="⌘⇧E"
            description="Allowed you to edit the file"
            startContent={
              <Avatar
                isBordered
                className="transition-transform w-6 h-6 text-tiny"
                name="Jason Hughes"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            }
          >
            Edit file
          </DropdownItem>
        </DropdownSection>
        <DropdownSection title="Danger zone">
          <DropdownItem
            key="delete"
            className="text-danger"
            color="danger"
            shortcut="⌘⇧D"
            description="Permanently delete the file"
            startContent={
              <Avatar
                isBordered
                as="button"
                className="transition-transform w-6 h-6 text-tiny"
                name="Jason Hughes"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            }
          >
            Delete file
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}

export default MailboxDropdown;
