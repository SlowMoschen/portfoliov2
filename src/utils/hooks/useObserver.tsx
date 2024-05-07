export function useObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const animations = entry.target.getAttribute("data-animation")?.split(" ");
        if (animations) {
          for (const animation of animations) {
            entry.target.classList.add(animation);
          }
        }
      }
    });
  });

  const observe = (ref: React.RefObject<HTMLElement> | React.RefObject<HTMLElement>[]) => {
    if (Array.isArray(ref)) {
      ref.forEach((r) => {
        if (r.current) {
          observer.observe(r.current);
        }
      });
    } else if (ref.current) {
      observer.observe(ref.current);
    }
  };

  return { observe };
}
