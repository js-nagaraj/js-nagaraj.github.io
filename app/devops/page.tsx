export const metadata = {
  title: "DevOps Portfolio | Nagaraj Jayaraman",
  description: "CI/CD pipelines, IaC, observability, cost governance, and platform engineering.",
};

export default function DevOpsPage() {
  return (
    <section>
      <h1>DevOps Portfolio</h1>
      <p>
        I design and operate resilient delivery platforms with CI/CD, GitOps, IaC, and
        strong SRE practices across AWS, Azure, and GCP.
      </p>

      <h2>Highlights</h2>
      <ul>
        <li>GitHub Actions, GitLab CI, and Argo CD based delivery flows</li>
        <li>Terraform modules and Crossplane for multi-cloud provisioning</li>
        <li>Kubernetes (EKS/AKS/GKE), Helm, Kustomize, and policy as code (OPA)</li>
        <li>Observability: Prometheus/Grafana, OpenTelemetry, Loki, ELK, CloudWatch</li>
        <li>Security: SAST/DAST, SCA, SBOMs, secrets management, workload identity</li>
        <li>Cost optimization and FinOps guardrails</li>
      </ul>

      <h2>Sample Work</h2>
      <ul>
        <li>Reusable GitHub Actions workflow templates for monorepos and services</li>
        <li>Terraform + Helm stacks for EKS with blue/green and canary strategies</li>
        <li>Multi-account AWS landing zone with org guardrails and OIDC federation</li>
      </ul>
    </section>
  );
}


