export const HeaderSkeleton = () => {
  return (
    <div className="border shadow rounded-md p-4  min-w-full">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
        <div className="h-8 bg-slate-700 rounded"></div>
      </div>
    </div>
  );
};
