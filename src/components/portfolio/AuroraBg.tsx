export function AuroraBg() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="aurora-blob absolute -top-40 -left-40 h-[60vmax] w-[60vmax] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(125,211,252,0.35), transparent 60%)" }}
      />
      <div
        className="aurora-blob absolute top-1/3 -right-40 h-[55vmax] w-[55vmax] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(199,125,255,0.32), transparent 60%)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="aurora-blob absolute -bottom-40 left-1/4 h-[50vmax] w-[50vmax] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(255,107,129,0.22), transparent 60%)",
          animationDelay: "-12s",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 600px at 50% -10%, rgba(82,255,168,0.08), transparent 60%)",
        }}
      />
      <div className="absolute inset-0 bg-[#080B14]/40" />
    </div>
  );
}