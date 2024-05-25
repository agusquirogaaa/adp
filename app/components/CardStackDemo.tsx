"use client";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/app/utils/cn";
export function CardStackDemo() {
  return (
    <div className="h-[25rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-violeta text-white px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Joe Dispenza",
   
    content: (
      <p>
        Cuando tus pensamientos, y acciones son congruentes, vas a tener poder interior para romper los patrones mentales y construir nuevos.
      </p>
    ),
  },
  {
    id: 1,
    name: "",
   
    content: (
      <p>
        Los milagros sí existen y no son más que un cambio de percepción
      </p>
    ),
  },
  {
    id: 2,
    name: " Enric Crobera",
    
    content: (
      <p>
        Cada instante de tu vida es una posibilidad de eleccion.
      </p>
    ),
  },
  {
    id: 3,
    name: "",
    
    content: (
      <p>
        No vemos la vida como es, la vemos como somos
      </p>
    ),
  },
  {
    id: 4,
    name: " Edward Bach",
    
    content: (
      <p>
        Trate la causa, no el efecto.
      </p>
    ),
  },
];
