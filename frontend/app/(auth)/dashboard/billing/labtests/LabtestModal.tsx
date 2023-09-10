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
import LabtestSelect from "./LabtestSelect";

function LabtestModel() {
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
                Create New Category
              </ModalHeader>
              <form action="#">
                <ModalBody>
                  <h3 className="text-xl font-semibold text-slate-700 my-3">
                    Create New Labtest
                  </h3>
                  <LabtestSelect />
                  <TextField
                    required
                    id="category"
                    label="Surgical Name"
                    variant="outlined"
                  />
                  <TextField
                    required
                    id="category"
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

export default LabtestModel;
