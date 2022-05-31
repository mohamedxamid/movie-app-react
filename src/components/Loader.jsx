import React from "react";

const Loader = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 my-10">
      <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse">
          <div className="rounded bg-slate-700 h-96 w-full"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              <div className="h-2 bg-white rounded col-span-1"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse">
          <div className="rounded bg-slate-700 h-96 w-full"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              <div className="h-2 bg-white rounded col-span-1"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse">
          <div className="rounded bg-slate-700 h-96 w-full"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              <div className="h-2 bg-white dark:bg-transparent rounded col-span-1"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
