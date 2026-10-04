import { Repo, getTimeAgo } from "@/lib/github";

export default function GithubGrid({ repos }: { repos: Repo[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
      {repos.map((repo) => (
        <div key={repo.id} className="p-space-md bg-surface-container border border-outline-variant rounded-xl hover:border-outline transition-colors group">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-tertiary">
                code
              </span>
              <a
                className="font-code-md text-code-md font-semibold text-on-surface group-hover:text-primary transition-colors flex items-center gap-1.5"
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
              >
                {repo.name}
                <span className="material-symbols-outlined text-[14px] text-outline opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
              </a>
            </div>
            <span className="font-telemetry-badge text-telemetry-badge uppercase px-2 py-0.5 rounded bg-surface border border-outline-variant text-tertiary">
              Public
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 mb-4 leading-relaxed line-clamp-2">
            {repo.description}
          </p>
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-space-sm">
              <span className="font-telemetry-badge text-telemetry-badge px-1.5 py-0.5 rounded bg-surface text-primary">
                {repo.language}
              </span>
              <div className="flex items-center gap-1 font-code-md text-code-md text-on-surface-variant ml-2">
                <span className="material-symbols-outlined text-[14px]">star</span>
                {repo.stargazers_count}
              </div>
              <div className="flex items-center gap-1 font-code-md text-code-md text-on-surface-variant ml-1">
                <span className="material-symbols-outlined text-[14px]">call_split</span>
                {repo.forks_count}
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="font-telemetry-badge text-telemetry-badge text-primary">
                Active {getTimeAgo(repo.pushed_at)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
