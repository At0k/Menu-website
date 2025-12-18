import { memo, useEffect, useMemo, useState } from "react";

type LoadingProps = {
  label?: string;
  fullscreen?: boolean;
  type?: "spinner" | "slices";
  slicesCount?: number;
  onComplete?: () => void;
  visibleForMs?: number;
  autoExit?: boolean;
};

function Loading({
  label = "Loading…",
  fullscreen = true,
  type = "slices",
  slicesCount = 5,
  onComplete,
  visibleForMs = 600,
  autoExit = true,
}: LoadingProps) {
  const [exit, setExit] = useState(false);
  const [vw, setVw] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1920);

  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const effectiveCount = useMemo(() => {
    const desired = vw <= 1277 ? 3 : slicesCount;
    return Math.min(Math.max(desired, 2), 5);
  }, [vw, slicesCount]);

  const slices = useMemo(
    () => Array.from({ length: effectiveCount }),
    [effectiveCount]
  );

  useEffect(() => {
    if (type !== "slices" || !autoExit) return;
    const enterTimer = setTimeout(() => setExit(true), visibleForMs);
    const totalExitMs = 680 + (slices.length - 1) * 70;
    const doneTimer = setTimeout(
      () => onComplete && onComplete(),
      visibleForMs + totalExitMs + 20
    );
    return () => {
      clearTimeout(enterTimer);
      clearTimeout(doneTimer);
    };
  }, [type, autoExit, visibleForMs, slices.length, onComplete]);

  if (type == "slices") {
    const countClass = `loading-slices--count-${slices.length}`
return (
  <>
  <div
    className={`loading-slices loading-slices--enter${exit ? ' loading-slices--exit' : ''} ${countClass}${fullscreen ? ' loading-slices--fullscreen' : ''}`}
    aria-label={label}
  >
    {slices.map((_, i) => (
      <div className="loading-slices__slice" key={i} />
    ))}
  </div>

  
    {/* Centered brand + slider */}
    <div className="loading-slices__center">
      <div className="loading-slices__center-inner">
        <h1 className="loading-slices__brand">ALG Suites</h1>
        <div className="loading-slices__rule">
          <span className="loading-slices__rule-progress" />
        </div>
      </div>
    </div>
  </>
);
  }

  return (
    <div className={`loading${fullscreen ? " loading--fullscreen" : ""}`}>
      <div className="loading__spinner-modern" aria-hidden="true" />
      <div className="loading__label" role="status" aria-live="polite">
        {label}
      </div>
    </div>
  );
}

export default memo(Loading);
