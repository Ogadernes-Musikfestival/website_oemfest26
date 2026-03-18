"use client";
import React from "react";
import { DrawerPreview as Drawer } from "@base-ui/react/drawer";
import { frivilligDrawer } from "../lib/handles";

const TriggerButton = () => {
  return (
    <Drawer.Trigger
      handle={frivilligDrawer}
      className="bg-neonGreen border-neonGreen text:dark text-dark cursor-pointer border-2 px-8 py-2 hover:border-white hover:bg-white"
    >
      Bliv frivillig
    </Drawer.Trigger>
  );
};

export default TriggerButton;
