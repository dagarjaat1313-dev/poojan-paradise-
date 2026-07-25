import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-100 via-yellow-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-orange-700">
            🛕 Poojan Paradise
          </h1>

          <p className="mt-6 text-lg text-gray-700">
            Premium Pooja Samagri for Every Ritual
          </p>

          <div className="mt-8">
            <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Kapoor",
            "Dhoop",
            "Pooja Oil",
            "Rudraksh",
            "Hawan Samagri",
            "Kalava",
            "Sindoor",
            "Ghee"
          ].map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
            >
              <h3 className="font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}