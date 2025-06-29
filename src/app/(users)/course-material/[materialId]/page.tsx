"use client"
// import CourseMaterial from '@/components/CourseMaterial';
import { courseMaterial } from '@/lib/data';
import { useParams } from 'next/navigation';
import React from 'react'

export default function Page() {
    const params = useParams();
    const materialId = params.materialId
    const material = courseMaterial.find(m=> m.id === materialId)|| courseMaterial[0];
  return (
    <div className='h-screen text-2xl font-bold'>
        {/* Your Course {material.title} is here */}
        {/* <CourseMaterial material={material}/> */}
        {material.title}
    </div>
  )
}
