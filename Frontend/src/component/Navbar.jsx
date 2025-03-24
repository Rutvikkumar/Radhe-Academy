import React from "react";
import { Button } from "@/components/ui/button";
function Navbar() {
  return (
    <>
      <header className="bg-primary text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-3xl md:text-2xl font-bold">
                Radhe Academy
              </h1>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="bg-white text-primary hover:bg-gray-100">
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
