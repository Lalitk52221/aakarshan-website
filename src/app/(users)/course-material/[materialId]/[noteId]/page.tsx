"use client";
import { courseMaterial } from "@/lib/data";
import { useParams } from "next/navigation";
import React from "react";

export default function Page() {
  const params = useParams();
  const noteId = params.noteId;
  // Find the material and the topic index
  const material = courseMaterial.find(m => m.detailedPageLink.some(link => {
    const lastSegment = link.split("/").filter(Boolean).pop();
    return lastSegment === noteId;
  }));

  // Find the topic index
  let topic = null;
  if (material) {
    const topicIndex = material.detailedPageLink.findIndex(link => {
      const lastSegment = link.split("/").filter(Boolean).pop();
      return lastSegment === noteId;
    });
    if (topicIndex !== -1) {
      topic = material.topic[topicIndex];
    }
  }

  if (!material || !topic) {
    return <div>Note not found</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">{topic.title}</h1>
      <p className="text-lg">{topic.definition}</p>
    </div>
  );
}
