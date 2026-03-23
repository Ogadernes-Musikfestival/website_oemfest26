"use client";

import React, { useRef, useState } from "react";
import { DrawerPreview as Drawer } from "@base-ui/react/drawer";
import SignupForm from "./SignupForm";
import { frivilligDrawer } from "../lib/handles";
import { ScrollArea } from "@base-ui/react/scroll-area";

const CTAfrivillig = () => {
  const drawerRef = useRef<any>(null);

  const handleSuccess = () => {
    // Close the drawer
    drawerRef.current?.close?.();
  };
  return (
    <Drawer.Root handle={frivilligDrawer} swipeDirection="right">
      <Drawer.Portal>
        <Drawer.Backdrop className="bg-dark fixed inset-0 min-h-dvh opacity-[calc(var(--backdrop-opacity)*(1-var(--drawer-swipe-progress)))] backdrop-blur-md transition-opacity duration-450 ease-[cubic-bezier(0.32,0.72,0,1)] [--backdrop-opacity:0.6] [--bleed:3rem] data-ending-style:opacity-0 data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-starting-style:opacity-0 data-swiping:duration-0 supports-[-webkit-touch-callout:none]:absolute dark:[--backdrop-opacity:0.7]" />
        <Drawer.Viewport className="fixed inset-0 flex justify-end">
          <Drawer.Popup className="text-dark top-[2.5%] right-[2.5%] bottom-[2.5%] h-11/12 w-full touch-pan-y overflow-hidden rounded-none bg-white p-6 sm:max-w-2xl sm:rounded-3xl sm:p-8 md:h-[95dvh] md:max-w-4xl md:p-12 lg:max-w-6xl">
            <Drawer.Content className="h-full w-full">
              <ScrollArea.Root className="h-full w-full">
                <ScrollArea.Viewport className="h-full w-full touch-pan-y [-webkit-overflow-scrolling:touch]">
                  <ScrollArea.Content className="pb-32 sm:pb-0">
                    <div className="flex justify-between gap-x-6">
                      <Drawer.Title className="mb-8 text-base font-medium md:text-lg">
                        Skriv dig på som frivillig
                      </Drawer.Title>
                      <Drawer.Close className="h-10 rounded-md border px-3.5">
                        X
                      </Drawer.Close>
                    </div>

                    <SignupForm onSuccess={handleSuccess} />
                  </ScrollArea.Content>
                </ScrollArea.Viewport>
              </ScrollArea.Root>
            </Drawer.Content>
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default CTAfrivillig;
