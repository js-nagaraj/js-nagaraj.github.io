export const metadata = {
  title: "DevOps Portfolio | Nagaraj Jayaraman",
  description: "CI/CD pipelines, IaC, observability, cost governance, and platform engineering.",
};

export default function DevOpsPage() {
  const highlights = [
    "GitHub Actions, GitLab CI, and Argo CD based delivery flows",
    "Terraform modules and Crossplane for multi-cloud provisioning",
    "Kubernetes (EKS/AKS/GKE), Helm, Kustomize, and OPA policy controls",
    "Observability with Prometheus, Grafana, OpenTelemetry, Loki, ELK, and CloudWatch",
    "Security controls: SAST/DAST, SCA, SBOMs, secrets governance, and workload identity",
    "FinOps guardrails with right-sizing and cloud cost visibility",
  ];

  const sampleWork = [
    "Reusable GitHub Actions templates for monorepos and service repositories",
    "Terraform + Helm stack for EKS with blue/green and canary releases",
    "Multi-account AWS landing zone with organization guardrails and OIDC federation",
  ];

  return (
    <main className="subpage">
      <section className="subpageHero">
        <p className="subpageKicker">DevOps</p>
        <h1>Delivery platforms built for speed, reliability, and control</h1>
        <p>
          I design and operate resilient engineering systems with CI/CD, GitOps, IaC,
          security automation, and practical SRE operations across AWS, Azure, and GCP.
        </p>
      </section>

      <section className="subpageGrid">
        <article className="subpageCard">
          <h2>Core Highlights</h2>
          <ul>
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="subpageCard">
          <h2>Sample Work</h2>
          <ul>
            {sampleWork.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}


