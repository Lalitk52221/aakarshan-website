"use client";
import { setNavbarVariant } from "@/store/store";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

interface Topic {
  title: string;
  definition: string;
}

interface Material {
  id: string;
  title: string;
  topic: Topic[];
  detailedPageLink: string[];
}
interface CourseMaterialProps {
  material: Material;
}
export default function CourseMaterial({ material }: CourseMaterialProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNavbarVariant("course"));
  });
  return (
    <main className=" ">
      {/* LEFT  */}
      <section className="">
        <h2 className="text-3xl border-b-2 pb-2 font-bold mb-5">
         {material.title}
        </h2>
        <ul className="overflow-y-scroll h-[70vh] scroll scroll-smooth">
          {/* Example course materials list */}
          {
            <li className="py-2 text-xl w-full rounded-md ">
              {material.topic.map((topic,i)=>(
                <Link
                  key={i}
                  href={material.detailedPageLink[i]}
                  className="px-4 py-2 hover:bg-gray-500/20 rounded-md block"
                >
                  {topic.title}
                </Link>
              ))}
            </li>
          }
          <li></li>
        </ul>
      </section>
      {/* RIGHT */}
      {/* <section className="mt-12 lg:w-3/4 lg:pl-10"> */}
        {/* <h2 className="text-3xl border-b-2 pb-2 font-bold mb-5">
          {material.title}
        </h2>
        <div className="prose max-w-none">
          <p>
            This is a placeholder for the detailed content of the course
            material. You can add rich text, images, and other elements here.
          </p>
        </div> */}
        {/* <Introduction/> */}
      {/* </section> */}
    </main>
  );
}
