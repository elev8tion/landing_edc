export default function BlogCardSkeleton() {
  return (
    <div className="glass-card p-8 animate-pulse">
      <div className="mb-4">
        <div className="h-6 w-24 bg-white/10 rounded-full"></div>
      </div>

      <div className="h-8 bg-white/10 rounded-lg mb-3 w-4/5"></div>
      <div className="h-8 bg-white/10 rounded-lg mb-6 w-3/5"></div>

      <div className="space-y-2 mb-6">
        <div className="h-4 bg-white/10 rounded w-full"></div>
        <div className="h-4 bg-white/10 rounded w-5/6"></div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="h-4 w-24 bg-white/10 rounded"></div>
        <div className="h-4 w-20 bg-white/10 rounded"></div>
      </div>

      <div className="h-6 w-28 bg-white/10 rounded"></div>
    </div>
  );
}
