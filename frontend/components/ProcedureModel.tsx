"use client";

import { PlusIcon } from "@heroicons/react/20/solid";
import TextField from "@mui/material/TextField";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

function ProcedureModel() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button
        onPress={onOpen}
        className="text-emerald-500 lg:hidden flex gap-2 w-fit my-3 bg-white hover:bg-emerald-100"
      >
        <PlusIcon className="h-5 w-5" />
        <span>Add New</span>
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create New Procedure
              </ModalHeader>
              <form action="#" className="grid gap-3">
                <ModalBody>
                  <TextField
                    id="name"
                    label="Procedure Name"
                    variant="outlined"
                  />
                  <TextField
                    id="price"
                    label="Price"
                    type="number"
                    variant="outlined"
                  />
                  <Button className="bg-slate-900 text-slate-50 my-3">
                    Submit
                  </Button>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default ProcedureModel;
