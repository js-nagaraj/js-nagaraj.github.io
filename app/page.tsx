export default function Home() {
  return (
    <section style={{ display: "grid", gap: 16 }}>
      <h1>Hi, I&apos;m Nagaraj — DevOps & Multi‑Cloud Solutions Architect</h1>
      <p>
        I help teams ship faster and safer through platform engineering, cloud architecture,
        and operational excellence across AWS, Azure, and GCP.
      </p>
      <div style={{ display: "grid", gap: 12 }}>
        <a href="/devops" style={{ textDecoration: "underline" }}>Explore DevOps work →</a>
        <a href="/solutions-architect" style={{ textDecoration: "underline" }}>Explore Multi‑Cloud architectures →</a>
      </div>
    </section>
  );
}
