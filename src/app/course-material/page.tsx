import { msWordNotesTitle } from "@/lib/data";
import Link from "next/link";
import React from "react";

export default function CourseMaterial() {
  return (
    <main className="h-screen pt-14 px-5 ">
      
      <section className="mt-12 lg:w-1/4  ">
      <h2 className="text-3xl border-b-2 pb-2 font-bold mb-5">Basic Computer</h2>
        <ul className="overflow-y-scroll h-[70vh] scroll scroll-smooth">
            {/* Example course materials list */}
            {msWordNotesTitle.map((material,i)=>(
                <li key={i} className="py-2 px-5 text-xl w-full hover:bg-gray-500/20 rounded-md "><Link href={material.href}>{material.title}</Link></li>
            ))}
            <li></li>
        </ul>
      </section>
    </main>
  );
}
