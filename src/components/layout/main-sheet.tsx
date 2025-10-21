"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type SheetProps = {
  scrollToProjects: () => void;
  scrollToSkill: () => void;
};

export default function MainSheet({
  scrollToProjects,
  scrollToSkill,
}: SheetProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" onClick={() => setOpen(true)}>
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>
            Retrouve ici toutes les pages sur lesquelles tu peux naviguer.
          </SheetDescription>
        </SheetHeader>

        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label className="font-semibold">Principale</Label>
            <Button
              variant="outline"
              onClick={() => {
                scrollToProjects?.();
                setOpen(false);
              }}
            >
              Projets
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                scrollToSkill?.();
                setOpen(false);
              }}
            >
              Compétences
            </Button>
          </div>
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button variant="destructive">Fermer</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
