"use client"
import CourseMaterial from '@/components/CourseMaterial'
import { courseMaterial} from '@/lib/data'
import { useParams } from 'next/navigation';
import React from 'react'

export default function Material() {
  const params = useParams();
  const materialId = params?.materialId;
  const material = courseMaterial.find(m=>m.id === materialId) || courseMaterial[0];
  return (
    <div>
      <CourseMaterial material={material}/>
    </div>

  )
}
