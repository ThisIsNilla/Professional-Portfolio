export interface Repo {
  id: number;
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
  html_url: string;
  homepage: string | null;
}

const MOCK_REPOS: Repo[] = [
  {
    id: 1,
    name: "scorm-ai-extractor",
    description: "Zero-shot SCORM & xAPI manifest parsing engine using Claude 3.5 Sonnet & structured JSON schemas. Ingests raw packages, unpacks zip hierarchies, and flags compliance variances autonomously.",
    language: "TypeScript",
    stargazers_count: 142,
    forks_count: 28,
    pushed_at: new Date(Date.now() - 42 * 60000).toISOString(),
    html_url: "https://github.com/brandonhorishny/scorm-ai-extractor",
    homepage: null,
  },
  {
    id: 2,
    name: "enterprise-lrs-pg",
    description: "High-throughput Learning Record Store engine built on PostgreSQL with real-time audit compliance scoring. Capable of receiving, validating, and partition-indexing 12,000+ statements per second.",
    language: "Python",
    stargazers_count: 98,
    forks_count: 19,
    pushed_at: new Date(Date.now() - 3 * 3600000).toISOString(),
    html_url: "https://github.com/brandonhorishny/enterprise-lrs-pg",
    homepage: null,
  },
  {
    id: 3,
    name: "mcp-talent-orchestrator",
    description: "Model Context Protocol (MCP) server establishing programmatic zero-latency bridge between Docebo LMS, Workday HRIS schemas, and local desktop AI agents.",
    language: "TypeScript",
    stargazers_count: 210,
    forks_count: 44,
    pushed_at: new Date(Date.now() - 24 * 3600000).toISOString(),
    html_url: "https://github.com/brandonhorishny/mcp-talent-orchestrator",
    homepage: null,
  },
  {
    id: 4,
    name: "context-window-optimizer",
    description: "Dynamic token budget trimmer and semantic compressor for multi-turn enterprise agent reasoning. Drastically reduces inference overhead while safeguarding critical audit parameters.",
    language: "Rust",
    stargazers_count: 87,
    forks_count: 12,
    pushed_at: new Date(Date.now() - 48 * 3600000).toISOString(),
    html_url: "https://github.com/brandonhorishny/context-window-optimizer",
    homepage: null,
  }
];

export async function getFeaturedRepos(): Promise<Repo[]> {
  const username = "thisisnilla";
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    console.warn("GITHUB_TOKEN not found. Falling back to mock data.");
    return MOCK_REPOS;
  }

  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!res.ok) {
      throw new Error(`GitHub API error: ${res.statusText}`);
    }

    const repos: any[] = await res.json();

    // Filter by topics
    const featured = repos.filter(repo => 
      repo.topics && (repo.topics.includes("portfolio-featured") || repo.topics.includes("ai-project"))
    );

    // If no repos match the topic, just return the most recently updated 4
    const selected = featured.length > 0 ? featured.slice(0, 4) : repos.slice(0, 4);

    return selected.map(repo => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || "No description provided.",
      language: repo.language || "Markdown",
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
      pushed_at: repo.pushed_at,
      html_url: repo.html_url,
      homepage: repo.homepage,
    }));
  } catch (error) {
    console.error("Failed to fetch from GitHub API:", error);
    return MOCK_REPOS;
  }
}

export function getTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return 'Just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  return `${Math.floor(diffInSeconds / 86400)}d ago`;
}
