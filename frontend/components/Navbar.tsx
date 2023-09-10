import { Fragment } from "react";
import ProfileDropdown from "./ProfileDropdown";
import { Code } from "@nextui-org/code";
import { Cog6ToothIcon } from "@heroicons/react/20/solid";
import NotificationBadge from "./NotificationBadge";
import NotificationDropdown from "./NotificationDropdown";
import MailboxDropdown from "./MailboxDropdown";
import SearchModel from "./SeachModel";
import Menu from "./Menu";

function Navbar() {
  return (
    <Fragment>
      <nav className="flex justify-between items-center py-3">
        <section className="flex items-center gap-1">
          <Menu />
          <SearchModel />
          <Code>⌘K</Code>
        </section>

        <section className="flex items-center gap-4">
          <MailboxDropdown />
          <NotificationDropdown />
          <NotificationBadge>
            <Cog6ToothIcon
              title="User interface settings"
              className="h-7 w-6 fill-gray-400 animate-spin hover:animate-none"
            />
          </NotificationBadge>
          <ProfileDropdown />
        </section>
      </nav>
    </Fragment>
  );
}

export default Navbar;
