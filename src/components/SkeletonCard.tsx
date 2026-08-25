type SkeletonCardProps = {
  className?: string;
};

export const SkeletonCard = ({ className = "" }: SkeletonCardProps) => (
  <div className={`neo-card neo-shadow flex animate-pulse flex-col justify-between p-6 ${className}`}>
    <div>
      <div className="flex items-start justify-between">
        <div className="h-4 w-24 bg-surface-container-highest" />
        <div className="h-8 w-16 border-2 border-primary" />
      </div>
      <div className="mt-6 h-7 w-3/4 bg-surface-container-highest" />
      <div className="mt-4 h-4 w-full bg-surface-container-high" />
      <div className="mt-2 h-4 w-11/12 bg-surface-container-high" />
    </div>
    <div className="mt-8 flex items-center justify-between border-t-2 border-primary pt-4">
      <div className="h-4 w-12 bg-surface-container-high" />
      <div className="h-4 w-24 bg-surface-container-high" />
    </div>
  </div>
);

export default SkeletonCard;
