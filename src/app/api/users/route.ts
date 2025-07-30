import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import User from "@/lib/models/users";

export async function GET(request: Request) {
  await connectToDatabase();
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");
  let query = {};
  if (name) {
    query = { name: { $regex: name, $options: "i" } };
  }
  const users = await User.find(query).select("-password");
  return NextResponse.json(users);
}
