export const trackVisitor = async (page: string) => {
  try {
    await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/visitors/track`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ page }),
    });
  } catch (error) {
    console.error("Visitor tracking failed", error);
  }
};
