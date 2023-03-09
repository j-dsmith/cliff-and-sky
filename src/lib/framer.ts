export const loadFeatures = async () => {
  const res = await import("@/lib/domAnimation");
  return res.default;
};
