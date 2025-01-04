"use client";
import { ChevronUp } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-black  text-white underline-link">
      <div className="w-full">
        <Button
          variant="ghost"
          className="bg-gray-800 w-full  rounded-none "
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ChevronUp className="mr-2 h-4 w-4" />
          Volver Arriba
        </Button>
      </div>
      <div className="p-4">
        <div className="flex justify-center  gap-3 text-sm">
          <Link href="/page/conditions-of-use">Terminos y Condiciones</Link>
          <Link href="/page/privacy-policy">Privacidad</Link>
          <Link href="/page/help">Ayuda</Link>
        </div>
        <div className="flex justify-center text-sm">
          <p> © 2024-2025, {APP_NAME}, C.A.</p>
        </div>
        <div className="mt-4 flex justify-center text-sm text-gray-400">
          Urb. Chuao, Calle La Guairita, Edif. Los Frailes, P-5, Of. 504. Caracas. Venezuela (058) 0412-2729853
        </div>
      </div>
    </footer>
  );
}
