"use client";

import { Badge, Button } from "@nextui-org/react";
import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  content?: number;
}
function NotificationBadge({ children, content }: Props) {
  const [isInvisible, setIsInvisible] = useState(false);

  return (
    <Button
      isIconOnly
      className="rounded-full bg-slate-50 overflow-visible p-2 hover:bg-gray-200"
    >
      <Badge color="danger" content={content} shape="circle">
        {children}
      </Badge>
    </Button>
  );
}

export default NotificationBadge;
