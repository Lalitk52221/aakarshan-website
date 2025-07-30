"use client";
import { useSession } from "next-auth/react";
import AdminUserTable from "@/components/AdminUserTable";

export default function AdminPage() {
  const { data: session } = useSession();
  if (!session || session.user.role !== "Admin") {
    return <div className=" text-center py-20 text-red-600 font-bold">Access Denied</div>;
  }
  return <AdminUserTable />;
}
