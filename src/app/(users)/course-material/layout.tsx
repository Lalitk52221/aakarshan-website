"use client";
import CourseMaterial from "@/components/CourseMaterial";
import { courseMaterial } from "@/lib/data";
import { useParams } from "next/navigation";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const materialId = params.materialId;
  const material = materialId
    ? courseMaterial.find((m) => m.id === materialId)
    : courseMaterial[0];
  if (!material) {
    return (
      <div className="h-screen flex items-center justify-center text-2xl font-bold">
        Material not found
      </div>
    );
  }
  return (
    <div className="h-screen flex pt-24 px-5 gap-4 ">
      <div className="text-2xl font-bold w-1/4">
        {/* Your Course {material.title} is here */}
        <CourseMaterial material={material} />
      </div>
      <div className="w-3/4 flex flex-col gap-4">
        <h1 className="text-3xl font-semibold">Note</h1>
        <div>{children}</div>
        {/* This is where the note content will be rendered */}
      </div>
    </div>
  );
}
