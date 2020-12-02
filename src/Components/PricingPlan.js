import React from "react";

function PricingPlan() {
  return (
    <div className="container mx-auto">
      <div className="text-center">
        <div className="font-bold text-4xl p-6">Pricing Plans</div>
        <div className=" text-gray-500 font-normal text-base md:text-lg ">
          Start building for free, then add a site plan to go live. Account
          plans unlock additional features.
        </div>

        <div class="inline-flex p-6">
          <button class="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-l">
            Monthly billing
          </button>
          <button class="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-r">
            Yearly billing
          </button>
        </div>
      </div>
    </div>
  );
}

export default PricingPlan;
