"use client";

import React, { useRef, useState } from "react";
import { DrawerPreview as Drawer } from "@base-ui/react/drawer";
import SignupForm from "./SignupForm";
import { frivilligDrawer } from "../lib/handles";

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
        <Drawer.Viewport className="fixed inset-0 flex items-center justify-end p-(--viewport-padding) [--viewport-padding:0px] supports-[-webkit-touch-callout:none]:[--viewport-padding:3.215rem]">
          <Drawer.Popup className="text-dark top-[2.5%] right-[2.5%] bottom-[2.5%] h-[95%] w-full max-w-7xl transform-[translateX(var(--drawer-swipe-movement-x))] touch-auto overflow-y-auto overscroll-contain rounded-3xl bg-white p-12 pr-18 text-gray-900 outline outline-gray-200 transition-transform duration-450 ease-[cubic-bezier(0.32,0.72,0,1)] [--bleed:3rem] data-ending-style:transform-[translateX(calc(100%-var(--bleed)+var(--viewport-padding)))] data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-starting-style:transform-[translateX(calc(100%-var(--bleed)+var(--viewport-padding)))] data-swiping:select-none supports-[-webkit-touch-callout:none]:mr-0 supports-[-webkit-touch-callout:none]:w-[20rem] supports-[-webkit-touch-callout:none]:max-w-[calc(100vw-20px)] supports-[-webkit-touch-callout:none]:rounded-[10px] supports-[-webkit-touch-callout:none]:pr-6 supports-[-webkit-touch-callout:none]:[--bleed:0px] dark:outline-gray-300">
            <Drawer.Content className="mx-auto h-full w-full">
              <div className="flex justify-between">
                <Drawer.Title className="-mt-1.5 mb-8 text-lg font-medium">
                  Skriv dig på som frivillig
                </Drawer.Title>
                <Drawer.Close className="text-dark border-dark hover:bg-light active:bg-light flex h-10 cursor-pointer items-center justify-center rounded-md border px-3.5 text-base font-medium select-none focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800">
                  X
                </Drawer.Close>
              </div>

              <Drawer.Description className="mb-6 text-base text-gray-600"></Drawer.Description>
              <div className="flex justify-end gap-4"></div>
              <SignupForm onSuccess={handleSuccess} />
            </Drawer.Content>
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default CTAfrivillig;
