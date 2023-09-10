"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import SearchInput from "./SearchInput";

export default function SearchModel() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        isIconOnly
        onPress={onOpen}
        className="bg-slate-50 stroke-2 rounded-full hover:bg-gray-300"
        size="sm"
      >
        <SearchIcon size={18} />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Search any page
              </ModalHeader>
              <ModalBody className="divide-y">
                <SearchInput />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. titor
                  quam.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
