export const transitions = {
  calm: { duration: 0.7, ease: "easeOut" },
  quick: { duration: 0.45, ease: "easeOut" }
} as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 }
} as const;
