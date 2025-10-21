export function useScrollTo<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
) {
  return () =>
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
}
