import { useEffect, useRef } from "react";

export interface FilteredResizeObserverEntry<T> {
  borderBoxSize: ResizeObserverEntry["borderBoxSize"];
  contentBoxSize: ResizeObserverEntry["contentBoxSize"];
  contentRect: ResizeObserverEntry["contentRect"];
  devicePixelContentBoxSize: ResizeObserverEntry["devicePixelContentBoxSize"];
  target: T;
}

export default function useSize<T extends Element>(
  callback: (
    entries: FilteredResizeObserverEntry<T>[],
    observer: ResizeObserver
  ) => void
) {
  const target = useRef<T>(null);

  useEffect(() => {
    if (!target.current) return;
    const observer = new ResizeObserver((entries, observer) =>
      callback(entries as Array<FilteredResizeObserverEntry<T>>, observer)
    );
    observer.observe(target.current);
    return () => observer.disconnect();
  }, [target, callback]);

  return target;
}
