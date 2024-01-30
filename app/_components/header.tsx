import Image from "next/image";
import { Card, CardContent } from "../_components/ui/card";
import { Button } from "../_components/ui/button";
import { MenuIcon } from "lucide-react";


export default function Header() {
    return (
          <Card>
            <CardContent className="px-4 py-2 flex justify-between items-center flex-row">
             <Image src="/logo-barber.png" alt="Barbershop" height={12} width={40}/>
             <Button variant="outline" size="icon" className="h-8 w-8">
               <MenuIcon size={18} />
             </Button>
            </CardContent>
          </Card>
    );
  }
  