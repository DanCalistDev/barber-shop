"use client";

import Image from "next/image";
import { Card, CardContent } from "../_components/ui/card";
import { Button } from "../_components/ui/button";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { SideMenu } from "./side-menu";

export default function Header() {
  return (
    <Card>
      <CardContent className="px-4 py-2 flex justify-between items-center flex-row">
        <Image src="/logo-barber.png" alt="Barbershop" height={12} width={40} />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size={"icon"}>
              <MenuIcon size={16} />
            </Button>
          </SheetTrigger>
          <SheetContent className="p-0">
            <SideMenu />
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
}
