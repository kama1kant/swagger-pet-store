"use client";
import Button from "@/component-library/Button";
import { PAGE_URL } from "@/utils/constants";
import Link from "next/link";
import React from "react";

export default function App(): React.ReactNode {
  return (
    <div className="h-screen container mx-auto px-4 sm:px-16">
      <div className="flex relative md:top-40">
        <div className="w-full max-w-lg mx-auto p-6">
          <div className="bg-white p-4 sm:p-7 text-center">
            <div className="flex flex-col gap-4 text-start">
              <p className="text-xl sm:text-5xl font-bold py-8">Pet Store</p>
              <Link href={PAGE_URL.auth}>
                <Button variant="black" className="w-full">
                  Get started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
