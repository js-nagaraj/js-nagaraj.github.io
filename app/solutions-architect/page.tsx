export const metadata = {
  title: "Multi‑Cloud Solutions Architect | Nagaraj Jayaraman",
  description: "Designing scalable, secure, and cost‑effective architectures across AWS, Azure, and GCP.",
};

export default function ArchitectPage() {
  const expertise = [
    "Reference architectures for web, data, and event-driven systems",
    "Hybrid networking, private connectivity, and multi-region topology planning",
    "Managed databases, caching, streaming analytics, backup, and disaster recovery",
    "Security architecture with IAM, zero trust controls, KMS, and governance policies",
    "Cost architecture with right-sizing, savings plans, and egress optimization",
  ];

  const designs = [
    "Multi-region active-active AWS setup with global routing and failover",
    "Azure landing zone with Hub-Spoke model, PIM, and BCDR automation",
    "GCP data platform with Pub/Sub, Dataflow, BigQuery, and Looker",
  ];

  return (
    <main className="subpage">
      <section className="subpageHero">
        <p className="subpageKicker">Solutions Architecture</p>
        <h1>Scalable multi-cloud architecture with security and cost in balance</h1>
        <p>
          I design cloud blueprints that align reliability, performance, security, and
          cost objectives for both new systems and modernization programs.
        </p>
      </section>

      <section className="subpageGrid">
        <article className="subpageCard">
          <h2>Core Expertise</h2>
          <ul>
            {expertise.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="subpageCard">
          <h2>Selected Designs</h2>
          <ul>
            {designs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}


