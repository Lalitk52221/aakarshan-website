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
    <div className="min-h-screen flex flex-col md:flex-row pt-24 px-5 gap-8 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900">
      <div className="w-full md:w-1/3 flex flex-col items-center">
        <CourseMaterial material={material} />
      </div>
      <div className="w-full md:w-2/3 flex flex-col gap-6">
        <div className="p-8 flex flex-col items-center h-full mb-4">
          <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg underline">Notes</h1>
          <div className="w-full prose max-w-none text-lg text-gray-200">
            {children}  
          </div>
        </div>
      </div>
    </div>
  );
}
