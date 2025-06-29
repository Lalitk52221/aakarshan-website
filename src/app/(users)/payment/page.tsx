"use client";
import { useState } from "react";

export default function PaymentPage() {
  const [method, setMethod] = useState("credit");

  return (
    <div id="payment" className="min-h-screen bg-gray-900 text-white flex items-center justify-center py-12 px-4">
      <div className="bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">Payment Details</h2>
        <form className="space-y-6">
          {/* Payment Method Selection */}
          <div>
            <label className="block font-semibold mb-2">Select Payment Method</label>
            <div className="flex flex-wrap gap-4">
              <button type="button" onClick={() => setMethod("credit")} className={`px-4 py-2 rounded-lg font-medium border ${method === "credit" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"}`}>Credit Card</button>
              <button type="button" onClick={() => setMethod("debit")} className={`px-4 py-2 rounded-lg font-medium border ${method === "debit" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"}`}>Debit Card</button>
              <button type="button" onClick={() => setMethod("upi")} className={`px-4 py-2 rounded-lg font-medium border ${method === "upi" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"}`}>UPI</button>
              <button type="button" onClick={() => setMethod("netbanking")} className={`px-4 py-2 rounded-lg font-medium border ${method === "netbanking" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"}`}>Net Banking</button>
              <button type="button" onClick={() => setMethod("wallet")} className={`px-4 py-2 rounded-lg font-medium border ${method === "wallet" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"}`}>Wallet</button>
            </div>
          </div>

          {/* Payment Details */}
          {method === "credit" || method === "debit" ? (
            <div className="space-y-4">
              <div>
                <label className="block mb-1">Cardholder Name</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none" placeholder="Name on Card" required />
              </div>
              <div>
                <label className="block mb-1">Card Number</label>
                <input type="text" maxLength={16} className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none" placeholder="1234 5678 9012 3456" required />
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block mb-1">Expiry</label>
                  <input type="text" maxLength={5} className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none" placeholder="MM/YY" required />
                </div>
                <div className="flex-1">
                  <label className="block mb-1">CVV</label>
                  <input type="password" maxLength={4} className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none" placeholder="123" required />
                </div>
              </div>
            </div>
          ) : null}

          {method === "upi" ? (
            <div>
              <label className="block mb-1">UPI ID</label>
              <input type="text" className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none" placeholder="yourname@upi" required />
            </div>
          ) : null}

          {method === "netbanking" ? (
            <div>
              <label className="block mb-1">Select Bank</label>
              <select className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none">
                <option value="">-- Select Bank --</option>
                <option value="sbi">State Bank of India</option>
                <option value="hdfc">HDFC Bank</option>
                <option value="icici">ICICI Bank</option>
                <option value="axis">Axis Bank</option>
                <option value="kotak">Kotak Mahindra Bank</option>
                <option value="other">Other</option>
              </select>
            </div>
          ) : null}

          {method === "wallet" ? (
            <div>
              <label className="block mb-1">Wallet Provider</label>
              <select className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none">
                <option value="">-- Select Wallet --</option>
                <option value="paytm">Paytm</option>
                <option value="phonepe">PhonePe</option>
                <option value="gpay">Google Pay</option>
                <option value="amazonpay">Amazon Pay</option>
                <option value="other">Other</option>
              </select>
            </div>
          ) : null}

          {/* Amount */}
          <div>
            <label className="block mb-1">Amount</label>
            <input type="number" className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none" placeholder="Enter Amount" required min={1} />
          </div>

          {/* Name & Email */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block mb-1">Full Name</label>
              <input type="text" className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none" placeholder="Your Name" required />
            </div>
            <div className="flex-1">
              <label className="block mb-1">Email</label>
              <input type="email" className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none" placeholder="you@email.com" required />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 rounded-lg transition-all duration-300 mt-4">Pay Now</button>
        </form>
      </div>
    </div>
  );
}
