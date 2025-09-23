export const metadata = {
  title: "Multi‑Cloud Solutions Architect | Nagaraj Jayaraman",
  description: "Designing scalable, secure, and cost‑effective architectures across AWS, Azure, and GCP.",
};

export default function ArchitectPage() {
  return (
    <section>
      <h1>Multi‑Cloud Solutions Architect</h1>
      <p>
        I build cloud architectures that balance reliability, security, performance, and cost.
        Experience spans greenfield builds, migrations, and modernization at scale.
      </p>

      <h2>Core Expertise</h2>
      <ul>
        <li>Reference architectures for web, data, and event‑driven workloads</li>
        <li>Networking: hybrid, private connectivity, service mesh, multi‑region</li>
        <li>Data: managed DBs, caching, streaming, analytics, backup and DR</li>
        <li>Security: IAM, zero trust, KMS, secrets, threat detection, governance</li>
        <li>Cost: right‑sizing, savings plans/reserved instances, egress reduction</li>
      </ul>

      <h2>Selected Designs</h2>
      <ul>
        <li>Multi‑region active‑active on AWS with global routing and failover</li>
        <li>Azure landing zone with Hub‑Spoke, PIM, and BCDR automation</li>
        <li>GCP data platform with Pub/Sub, Dataflow, BigQuery, and Looker</li>
      </ul>
    </section>
  );
}


