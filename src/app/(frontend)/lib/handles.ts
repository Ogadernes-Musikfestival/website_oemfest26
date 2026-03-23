"use client";

import { Dialog } from "@base-ui/react/dialog";
import { DrawerPreview as Drawer } from "@base-ui/react/drawer";

export const frivilligDrawer = Drawer.createHandle<{ title: string }>();

export const frivilligDialog = Dialog.createHandle<{ title: string }>();
