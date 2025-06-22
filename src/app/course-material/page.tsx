import CourseMaterial from '@/components/CourseMaterial';
import { courseMaterial } from '@/lib/data';
import React from 'react';

export default function CourseMaterialPage() {
  // Show the first material as default, or a message if none exist
  const material = courseMaterial[0];
  if (!material) {
    return <div className="p-10">No course material found.</div>;
  }
  return (
    <div>
      <CourseMaterial material={material} />
    </div>
  );
}
