"use client";
import { setNavbarVariant } from "@/store/store";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

export default function SignupPage() {
  const [form, setForm] = useState({
    role: "Student",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const dispatch = useDispatch()
    useEffect(()=>{
    dispatch(setNavbarVariant("auth"));
  })
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    setError(null);
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";
    const response = await fetch(`${API_BASE_URL}/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const data = await response.json();
    setPending(false);
    if (response.ok) {
      toast.success(data.message);
      router.push("/sign-in");
    } else {
      setError(data.message);
      toast.error(data.message);
    }
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900">
      <div className="w-full max-w-md bg-white/90 shadow-2xl rounded-2xl p-8 flex flex-col items-center">
        <h2 className="text-3xl font-extrabold text-blue-900 mb-2 tracking-tight">
          Create Account
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Sign up to access all features and start your learning journey!
        </p>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
          <div className="relative">
            <label
              htmlFor="role"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Role
            </label>
            <select
              id="role"
              disabled={pending}
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="appearance-none border border-gray-300 text-gray-900 p-2 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-gradient-to-r from-blue-100 to-purple-100 font-semibold shadow-inner pr-10"
            >
              <option value="Admin">Admin</option>
              <option value="Teacher">Teacher</option>
              <option value="Student">Student</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-9 text-blue-700 text-lg">
              ▼
            </span>
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              disabled={pending}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your Name"
              className="border border-gray-300 text-gray-900 w-full px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              autoComplete="name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              disabled={pending}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Email"
              className="border border-gray-300 text-gray-900 w-full px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              autoComplete="email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              disabled={pending}
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="Password"
              className="border border-gray-300 text-gray-900 w-full px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              autoComplete="new-password"
              required
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              disabled={pending}
              value={form.confirmPassword}
              onChange={(e) =>
                setForm({ ...form, confirmPassword: e.target.value })
              }
              placeholder="Confirm password"
              className="border border-gray-300 text-gray-900 w-full px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              autoComplete="new-password"
              required
            />
          </div>
          <button
            disabled={pending}
            className="w-full py-2 mt-2 rounded-md bg-gradient-to-r from-blue-700 to-purple-700 text-white font-bold text-lg shadow-lg hover:from-blue-800 hover:to-purple-800 transition disabled:opacity-60"
          >
            {pending ? "Signing Up..." : "Sign Up"}
          </button>
          {error && (
            <div className="text-red-600 text-center text-sm mt-2">{error}</div>
          )}
        </form>
        <div className="mt-6 text-sm text-gray-600">
          Already have an account?{" "}
          <button
            className="text-blue-700 font-semibold hover:underline"
            onClick={() => router.push("/sign-in")}
            type="button"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
