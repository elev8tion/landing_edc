export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-400/30 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
