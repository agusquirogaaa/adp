"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import { CardStackDemo } from "./CardStackDemo";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-5xl lg:text-7xl font-bold text-white">
             Reflexiones <br />
              <span className="text-5xl lg:text-7xl font-bold mt-2 leading-none">
               para inspirarte
              </span>
            </h1>
          </>
        }
      >
        <div className="mx-auto rounded-2xl object-cover h-full object-left-top ">
         <CardStackDemo />
        </div>
        
      </ContainerScroll>
    </div>
  );
}
