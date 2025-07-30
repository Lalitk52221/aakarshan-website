"use client";
import "./CourseMaterialScrollbar.css";
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
    <main>
      <section className="w-full">
        <h2 className="text-3xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg text-center">
          {material.title}
        </h2>
        <ul className="overflow-y-scroll h-[70vh] scroll scroll-smooth flex flex-col gap-4 slim-scrollbar px-4">
          {material.topic.map((topic, i) => (
            <li key={i} className="w-full">
              <Link
                href={material.detailedPageLink[i]}
                className="flex items-center gap-3 px-5 py-4 rounded-xl bg-gradient-to-r from-blue-100 via-purple-100 to-gray-100 shadow hover:from-blue-200 hover:via-purple-200 hover:to-gray-200 hover:scale-[1.03] transition-all duration-200 text-xl font-semibold text-blue-900 hover:text-purple-900"
              >
                <span className="w-8 h-8 bg-gradient-to-br from-blue-400 via-purple-400 to-gray-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-2">
                  {topic.title.charAt(0)}
                </span>
                <span>{topic.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
