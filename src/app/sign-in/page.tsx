"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setNavbarVariant } from "@/store/store";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "Student",
    course: "Basic Computer",
  });
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const roleOptions = ["Admin", "Teacher", "Student"];
  const courseOptions = ["Basic Computer", "Tally", "Spoken English", "Beauty Wellness"];
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setNavbarVariant("auth"))
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    setError(null);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: form.email,
        password: form.password,
        role: form.role,
        course: form.course,
      });
      if(res?.ok){
        router.push('/');
        toast.success("Login Successfull");
      }else if(res?.status === 401){
        setError("Invalid credentials. Please try again.");
        setPending(false);
      }else{
        setError("Something went wrong");
        setPending(false);
      }
    } catch {
      setPending(false);
      setError("Network error. Please try again.");
      toast.error("Network error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900">
      <div className="w-full max-w-md bg-white/90 shadow-2xl rounded-2xl p-8 flex flex-col items-center">
        <h2 className="text-3xl font-extrabold text-blue-900 mb-2 tracking-tight">
          Sign In
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Sign in to your account
        </p>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-5"
        >
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Role
            </label>
            <select
              className="w-full border border-gray-300 rounded-md p-2 bg-gradient-to-r from-blue-100 to-purple-100 font-semibold shadow-inner focus:ring-2 focus:ring-blue-500 transition text-gray-900"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              disabled={pending}
              required
            >
              {roleOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          {form.role === "Student" && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Course
              </label>
              <select
                className="w-full border border-gray-300 rounded-md p-2 bg-gradient-to-r from-blue-100 to-purple-100 font-semibold shadow-inner focus:ring-2 focus:ring-blue-500 transition text-gray-900"
                value={form.course}
                onChange={(e) => setForm({ ...form, course: e.target.value })}
                disabled={pending}
                required
              >
                {courseOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          )}
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
              autoComplete="current-password"
              required
            />
          </div>
          <button
            disabled={pending}
            className="w-full py-2 mt-2 rounded-md bg-gradient-to-r from-blue-700 to-purple-700 text-white font-bold text-lg shadow-lg hover:from-blue-800 hover:to-purple-800 transition disabled:opacity-60"
          >
            {pending ? "Signing In..." : "Sign In"}
          </button>
          {error && (
            <div className="text-red-600 text-center text-sm mt-2">
              {error}
            </div>
          )}
        </form>
        <div className="mt-6 text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <button
            className="text-blue-700 font-semibold hover:underline"
            onClick={() => router.push("/sign-up")}
            type="button"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
