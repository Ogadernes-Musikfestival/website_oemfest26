"use client";

import { Dialog } from "@base-ui/react";
import { frivilligDialog } from "../lib/handles";

const TriggerButtonMobile = () => {
  return (
    <Dialog.Trigger
      handle={frivilligDialog}
      className="bg-neonGreen border-neonGreen text-dark border-2 px-8 py-2"
    >
      Bliv frivillig
    </Dialog.Trigger>
  );
};

export default TriggerButtonMobile;
