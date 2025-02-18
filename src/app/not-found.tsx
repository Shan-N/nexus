import React from "react";
import Image from "next/image";
import cat404 from "@/assets/cat404.png"; // Replace with your cat image path
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-orange-500/20 flex flex-col justify-center items-center text-white text-center p-6">
      {/* Cat Image */}
      <div className="w-64 h-64 md:w-96 md:h-96 mb-8">
        <Image
          src={cat404}
          alt="Confused Cat"
          className="w-full h-full object-contain"
          priority
        />
      </div>

      {/* 404 Message */}
      <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
      <h2 className="text-2xl md:text-4xl font-semibold mb-4">
        Oops! Brainrot detected...
      </h2>
      <p className="text-lg md:text-xl mb-8">
        The page you&apos;re looking for has been abducted by cats.
      </p>

      {/* Back to Home Button */}
      <Link
        href="/"
        className="bg-white text-purple-900 px-6 py-3 rounded-full font-semibold text-lg hover:bg-purple-100 transition-colors"
      >
        Take Me Back to Safety
      </Link>

      {/* Fun Footer */}
      <footer className="mt-12 text-sm text-purple-300">
        <p>
          In the meantime, here&apos;s a cat to keep you company. 🐾
        </p>
      </footer>
    </div>
  );
};

export default NotFoundPage;