"use client";
import { Dialog } from "@base-ui/react/dialog";
import { useRef } from "react";
import SignupForm from "./SignupForm";
import { frivilligDialog } from "../lib/handles";

const CTAfrivilligMobile = () => {
  const dialogRef = useRef<any>(null);

  const handleSuccess = () => {
    dialogRef.current?.close?.();
  };

  return (
    <Dialog.Root handle={frivilligDialog}>
      {/* Trigger */}

      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 backdrop-blur-sm" />

        {/* Fullscreen dialog */}
        <Dialog.Popup className="h-100dvh text-dark fixed inset-0 m-2 max-w-full overflow-y-auto bg-white p-6 [-webkit-overflow-scrolling:touch]">
          <div className="relative">
            <Dialog.Close className="absolute top-0 right-0 h-10 rounded-md border px-3.5">
              X
            </Dialog.Close>

            <Dialog.Title className="mb-6 pr-12 text-lg font-medium">
              Skriv dig på som frivillig
            </Dialog.Title>
          </div>

          <div className="pb-32">
            <SignupForm onSuccess={handleSuccess} />
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CTAfrivilligMobile;
