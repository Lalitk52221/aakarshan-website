import User from "@/lib/models/users";
import connectToDatabase from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, password, confirmPassword, role } = await request.json();

  const isvalidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  if (!name || !email || !password || !confirmPassword || !role) {
    return NextResponse.json({
      message: "Please fill all the fields",
      success: 400,
    });
  }
  if (!isvalidEmail(email)) {
    return NextResponse.json(
      {
        message: "Please enter a valid email address",
      },
      {
        status: 400,
      }
    );
  }
  if (password! == confirmPassword) {
    return NextResponse.json(
      {
        message: "Password do not match",
      },
      {
        status: 400,
      }
    );
  }
  if (password.length < 4) {
    return NextResponse.json(
      { message: "Password must be at least 4 characters long" },
      {
        status: 400,
      }
    );
  }

  try {
    console.log("Connecting to database...");
    await connectToDatabase();
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User already exists");
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }
    console.log("Hashing Password...");
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Creating user...");
    const newUser = await new User({
      name,
      email,
      password: hashedPassword,
      role,
    });
    await newUser.save();
    console.log("User created Successfully");
    return NextResponse.json(
      { message: "User created successfully", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "Something Went Wrong" },
      {
        status: 500,
      }
    );
  }
}
