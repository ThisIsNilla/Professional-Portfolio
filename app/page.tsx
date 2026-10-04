import CopyButton from "@/components/CopyButton";
import GithubGrid from "@/components/GithubGrid";
import { getFeaturedRepos } from "@/lib/github";

export default async function Page() {
  const repos = await getFeaturedRepos();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-surface-container-lowest/80 backdrop-blur-xl border-b border-surface-container-highest/40">
        <div className="h-16 w-full max-w-[1600px] mx-auto px-gutter md:px-margin-desktop flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md shrink-0">
            <div className="relative flex items-center justify-center shrink-0 w-9 h-9 rounded bg-[#0d0d12] border border-[#FCEE09]/30 shadow-[0_0_12px_rgba(252,238,9,0.18)]">
              <img
                alt="BH 2077 Cyber Mark"
                className="h-8 w-8 object-contain drop-shadow-[0_0_6px_rgba(0,240,255,0.4)]"
                src="/logo.png"
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-[#FCEE09]"></div>
              <div className="absolute -top-0.5 -left-0.5 w-1.5 h-1.5 bg-[#00F0FF]"></div>
            </div>
            <div className="flex items-baseline gap-space-xs">
              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight">
                BH
              </span>
              <span className="font-code-md text-code-md text-outline">//</span>
              <span className="font-headline-sm text-headline-sm text-on-surface-variant font-medium">
                AI Builder
              </span>
            </div>
            <span className="font-telemetry-badge text-telemetry-badge uppercase px-1.5 py-0.5 rounded bg-[#101014] text-[#FCEE09] border border-[#FCEE09]/40 tracking-wider flex items-center gap-1 shadow-[0_0_8px_rgba(252,238,9,0.15)]">
              <span className="w-1 h-1 bg-[#00F0FF] rounded-full animate-ping"></span>
              [MOD//2.4-PR]
            </span>
          </div>
          <nav
            className="hidden lg:flex items-center gap-space-xs p-1 rounded-xl bg-surface-container-low border border-surface-container-highest/60"
            data-active-classes="bg-surface-container-high text-primary font-medium border-b-2 border-primary"
          >
            <a
              aria-current="page"
              className="px-space-md py-1.5 rounded transition-colors bg-surface-container-high text-primary font-medium border-b-2 border-primary"
              data-path="overview"
              href="#top"
            >
              Overview
            </a>
            <a
              className="px-space-md py-1.5 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors font-body-sm text-body-sm"
              data-path="active-repos"
              href="#repos-section"
            >
              Active Repos
            </a>
            <a
              className="px-space-md py-1.5 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors font-body-sm text-body-sm"
              data-path="architecture-deep-dives"
              href="#case-studies-section"
            >
              Architecture Deep-Dives
            </a>
            <a
              className="px-space-md py-1.5 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors font-body-sm text-body-sm"
              data-path="core-stack"
              href="#core-stack-section"
            >
              Core Stack
            </a>
          </nav>
          <div className="flex items-center gap-space-md shrink-0">
            <a
              className="hidden sm:flex items-center gap-2 px-space-md py-1 rounded bg-surface-container border border-surface-container-highest/80 hover:border-primary/40 transition-colors"
              href="https://github.com/thisisnilla"
              rel="noreferrer"
              target="_blank"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="font-code-md text-code-md text-on-surface-variant">
                Live on GitHub
              </span>
              <span className="font-telemetry-badge text-telemetry-badge text-primary bg-surface-container-highest px-1 rounded">
                2,841
              </span>
            </a>
            <a
              className="flex items-center gap-space-xs px-space-md py-2 rounded bg-primary-container text-on-primary-container hover:bg-primary transition-colors font-headline-sm text-headline-sm font-medium"
              data-path="connect"
              href="#contact-section"
            >
              <span className="material-symbols-outlined text-[16px]">
                terminal
              </span>
              <span className="">Connect</span>
            </a>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </div>
          </div>
        </div>
      </header>
      <main id="top" className="w-full pt-16 bg-surface min-h-[calc(100vh-80px)]">
        <div className="flex flex-col w-full">
          {/*  Top Ambient Glow Line  */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00F0FF]/50 to-transparent relative">
            <div className="absolute left-1/2 -translate-x-1/2 -top-[1px] w-48 h-[2px] bg-gradient-to-r from-transparent via-[#FCEE09] to-transparent shadow-[0_0_8px_#FCEE09]"></div>
          </div>
          {/*  Main Container  */}
          <div className="w-full max-w-[1600px] mx-auto px-gutter md:px-margin-desktop py-space-xl flex flex-col gap-space-2xl">
            {/*  1. Executive Hero & Strategic Impact  */}
            <section className="flex flex-col gap-space-xl relative">
              {/*  Background Ambient Radial Glow  */}
              <div className="absolute -top-24 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
              <div className="absolute -top-12 right-1/4 w-80 h-80 bg-secondary-container/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
              {/*  Eyebrow & Status Flag  */}
              <div className="flex flex-wrap items-center justify-between gap-space-md">
                <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-sm bg-[#121217] border border-[#00F0FF]/30 shadow-[0_0_12px_rgba(0,240,255,0.08)] relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#00F0FF]"></div>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]"></span>
                  </span>
                  <span className="font-telemetry-badge text-telemetry-badge uppercase text-[#00F0FF] tracking-wider font-semibold">
                    [NET//SPEC] APPLIED AI • TALENT SYSTEMS ARCHITECTURE •
                    AUTONOMOUS RUNTIMES
                  </span>
                </div>
                <div className="flex items-center gap-2 font-code-md text-code-md text-on-surface-variant bg-[#121217] border border-[#FCEE09]/30 px-3 py-1 rounded-sm shadow-[0_0_10px_rgba(252,238,9,0.08)]">
                  <span className="inline-block w-2 h-2 bg-[#FCEE09] shadow-[0_0_6px_#FCEE09]"></span>
                  <span className="font-telemetry-badge tracking-wider text-[#FCEE09]">
                    SYS//OVERRIDE:
                  </span>
                  <span className="text-on-surface font-semibold">
                    ONLINE • PROD_SYNC_V2.077
                  </span>
                </div>
              </div>
              {/*  Main Headline + Value Narrative Split  */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
                <div className="lg:col-span-8 flex flex-col gap-space-md">
                  <h1 className="font-display text-display text-on-surface tracking-tight max-w-4xl text-balance">
                    Architecting Enterprise AI Systems{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-fixed">
                      &amp; Validated Prototypes
                    </span>
                    .
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
                    13+ years bridging enterprise talent infrastructure with
                    zero-to-one AI prototyping. Specializing in production-grade
                    RAG workflows, high-throughput SCORM/xAPI catalog parsers,
                    and custom contextual data stores that unlock legacy
                    corporate systems.
                  </p>
                </div>
                {/*  Terminal Quick Action Card  */}
              </div>
              {/*  Action Buttons Row  */}
              <div className="flex flex-wrap items-center gap-space-md pt-2">
                <a
                  className="group relative flex items-center gap-2 px-space-lg py-3 rounded-sm bg-[#FCEE09] text-[#161310] font-headline-sm text-headline-sm font-semibold transition-all hover:bg-[#ffe600] shadow-[0_0_16px_rgba(252,238,9,0.3)] border-b-2 border-[#b0002a]"
                  href="#repos-section"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#161310]">
                    folder_code
                  </span>
                  <span className="tracking-tight font-bold">
                    EXPLORE REPOSITORIES
                  </span>
                  <span className="font-telemetry-badge text-[9px] bg-[#161310] text-[#FCEE09] px-1 py-0.2 rounded-xs ml-1">
                    [EXEC]
                  </span>
                </a>
                <a
                  className="flex items-center gap-2 px-space-lg py-3 rounded-sm bg-surface-container text-on-surface hover:text-[#00F0FF] hover:border-[#00F0FF]/60 border border-surface-container-highest transition-all font-headline-sm text-headline-sm font-medium shadow-sm"
                  href="#case-studies-section"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#00F0FF]">
                    account_tree
                  </span>
                  <span className="">View Architecture Specs</span>
                </a>
                <a
                  className="flex items-center gap-2 px-space-md py-3 rounded text-on-surface-variant hover:text-[#FCEE09] font-headline-sm text-headline-sm transition-colors border border-transparent hover:border-[#FCEE09]/30"
                  href="#contact-section"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#FCEE09]">
                    terminal
                  </span>
                  <span className="">Connect Direct</span>
                  <span className="font-code-md text-code-md text-[#00F0FF]">
                    [SYS_LINK →]
                  </span>
                </a>
              </div>
              {/*  4-Column Quick Stat Metrics Grid  */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-sm pt-space-md">
                {/*  Stat 1  */}
                <div className="relative bg-[#121217] p-space-lg rounded-sm border border-surface-container-highest/60 flex flex-col justify-between shadow-sm overflow-hidden">
                  <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#00F0FF]/40"></div>
                  <div className="flex items-center justify-between pb-space-sm">
                    <span className="font-telemetry-badge text-telemetry-badge uppercase text-[#00F0FF] tracking-wider">
                      // TENOR_CYCLE
                    </span>
                    <span className="material-symbols-outlined text-outline text-[18px]">
                      domain_verification
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span
                      className="font-telemetry-metric text-telemetry-metric text-on-surface font-semibold tracking-tight"
                      style={{
                        fontFamily: "'Geist', 'Inter', sans-serif !important",
                      }}
                    >
                      13+ Years
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Talent Systems &amp; Core Infrastructure
                    </span>
                  </div>
                </div>
                {/*  Stat 2 (Canary Cyber Highlight)  */}
                <div className="relative bg-[#14141c] p-space-lg rounded-sm border border-[#FF0055]/40 flex flex-col justify-between shadow-[0_0_15px_rgba(255,0,85,0.12)] overflow-hidden">
                  <div className="absolute top-0 right-0 w-3 h-3 bg-[#F43F5E]/20 border-t border-r border-[#FB7185]"></div>
                  <div className="absolute -left-0.5 top-2 bottom-2 w-0.5 bg-[#FB7185]"></div>
                  <div className="flex items-center justify-between pb-space-sm">
                    <span className="font-telemetry-badge text-telemetry-badge uppercase text-[#FB7185] font-semibold tracking-wider">
                      // EFFICIENCY_YIELD
                    </span>
                    <span className="material-symbols-outlined text-[#FB7185] text-[18px]">
                      speed
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-2">
                      <span
                        className="font-telemetry-metric text-telemetry-metric text-[#FB7185] font-bold tracking-tight"
                        style={{
                          fontFamily: "'Geist', 'Inter', sans-serif !important",
                        }}
                      >
                        1,040+
                      </span>
                      <span className="font-code-md text-code-md text-[#FDA4AF]">
                        Hrs/Yr
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Manual Audit Hours Reclaimed
                    </span>
                  </div>
                </div>
                {/*  Stat 3  */}
                <div className="relative bg-[#121217] p-space-lg rounded-sm border border-surface-container-highest/60 flex flex-col justify-between shadow-sm overflow-hidden">
                  <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#00F0FF]/40"></div>
                  <div className="flex items-center justify-between pb-space-sm">
                    <span className="font-telemetry-badge text-telemetry-badge uppercase text-outline tracking-wider">
                      // SCALE_METRICS
                    </span>
                    <span className="material-symbols-outlined text-outline text-[18px]">
                      database
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span
                      className="font-telemetry-metric text-telemetry-metric text-on-surface font-semibold tracking-tight"
                      style={{
                        fontFamily: "'Geist', 'Inter', sans-serif !important",
                      }}
                    >
                      Millions
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      xAPI, SCORM &amp; HRIS Payloads Ingested
                    </span>
                  </div>
                </div>
                {/*  Stat 4 (High Voltage Cyan Highlight)  */}
                <div className="relative bg-[#121518] p-space-lg rounded-sm border border-[#00F0FF]/40 flex flex-col justify-between shadow-[0_0_15px_rgba(0,240,255,0.08)] overflow-hidden">
                  <div className="absolute -left-0.5 top-2 bottom-2 w-0.5 bg-[#00F0FF]"></div>
                  <div className="flex items-center justify-between pb-space-sm">
                    <span className="font-telemetry-badge text-telemetry-badge uppercase text-[#00F0FF] font-medium tracking-wider">
                      // RUNTIME_STATUS
                    </span>
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00F0FF]"></span>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span
                        className="font-telemetry-metric text-telemetry-metric text-[#00F0FF] font-semibold tracking-tight"
                        style={{
                          fontFamily: "'Geist', 'Inter', sans-serif !important",
                        }}
                      >
                        100%
                      </span>
                      <span className="font-telemetry-badge text-telemetry-badge bg-[#10191c] border border-[#00F0FF]/30 px-1.5 py-0.5 rounded text-[#00F0FF]">
                        PROD READY
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Validated Working Code Repos
                    </span>
                  </div>
                </div>
              </div>
            </section>
            {/*  2. Live GitHub Workstreams (Dynamic Repo Grid)  */}
            <section className="flex flex-col gap-space-lg" id="repos-section">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-md">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 font-code-md text-code-md text-primary">
                    <span className="material-symbols-outlined text-[16px] text-primary animate-spin">
                      sync
                    </span>
                    <span className="font-medium tracking-wide">
                      Pushed from GitHub API • Auto-syncing
                    </span>
                    <span className="font-telemetry-badge text-telemetry-badge bg-surface-container-high px-1.5 py-0.5 rounded text-on-surface-variant">
                      live stream
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                    Active Workstreams &amp; Engineering Labs
                  </h2>
                </div>
                {/*  Category Filters  */}
                <div className="flex items-center gap-1 bg-surface-container-low p-1 rounded-xl">
                  <button className="px-space-md py-1 rounded bg-surface-container text-primary font-body-sm text-body-sm font-medium">
                    All (4)
                  </button>
                  <button className="px-space-md py-1 rounded text-on-surface-variant hover:text-on-surface font-body-sm text-body-sm transition-colors">
                    Agentic &amp; RAG
                  </button>
                  <button className="px-space-md py-1 rounded text-on-surface-variant hover:text-on-surface font-body-sm text-body-sm transition-colors">
                    Enterprise Pipelines
                  </button>
                  <button className="px-space-md py-1 rounded text-on-surface-variant hover:text-on-surface font-body-sm text-body-sm transition-colors">
                    Developer Tooling
                  </button>
                </div>
              </div>
              {/*  Repo Cards Matrix (2x2)  */}
              <GithubGrid repos={repos} />
            </section>
            {/*  3. System Architecture & Case Studies  */}
            <section
              className="flex flex-col gap-space-xl"
              id="case-studies-section"
            >
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 font-code-md text-code-md text-tertiary">
                  <span className="material-symbols-outlined text-[16px]">
                    architecture
                  </span>
                  <span className="font-medium tracking-wide uppercase">
                    Operational Blueprint • Production Scale
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                  System Architecture &amp; Quantified Case Studies
                </h2>
              </div>
              {/*  Case Study 1: Enterprise Course Audit Platform  */}
              <div className="bg-surface-container-low rounded-xl p-space-lg md:p-space-xl flex flex-col gap-space-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md pb-space-md">
                  <div className="flex items-center gap-space-md">
                    <span className="p-2.5 rounded bg-surface-container-high text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[24px]">
                        verified
                      </span>
                    </span>
                    <div>
                      <span className="font-telemetry-badge text-telemetry-badge uppercase text-primary">
                        Case Study 01 // Talent Ops Ingestion
                      </span>
                      <h3 className="font-headline-md text-headline-md font-semibold text-on-surface">
                        Enterprise Course Audit &amp; Metadata Extraction
                        Platform
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 font-code-md text-code-md bg-[#121217] border border-[#FCEE09]/30 px-3 py-1 rounded-sm shadow-[0_0_10px_rgba(252,238,9,0.08)]">
                    <span className="font-telemetry-badge text-[#FCEE09]">
                      STATUS:
                    </span>
                    <span className="text-on-surface font-medium">
                      ENTERPRISE_PROD_DEPLOYED
                    </span>
                    <div className="flex items-center gap-0.5 ml-1">
                      <span className="w-1.5 h-3 bg-[#FCEE09] transform -skew-x-12"></span>
                      <span className="w-1.5 h-3 bg-[#101014] transform -skew-x-12"></span>
                      <span className="w-1.5 h-3 bg-[#FCEE09] transform -skew-x-12"></span>
                    </div>
                  </div>
                </div>
                {/*  Tactile Data-Flow Diagram (Inline SVG + CSS Nodes)  */}
                <div className="bg-surface-container-lowest p-space-md md:p-space-lg rounded-lg flex flex-col gap-2">
                  <div className="flex items-center justify-between text-outline font-code-md text-code-md pb-2">
                    <span className="">
                      DATA-FLOW MANIFEST: INGEST_PIPELINE_V4
                    </span>
                    <span className="text-primary font-telemetry-badge text-telemetry-badge">
                      FLOW: SYNCHRONOUS
                    </span>
                  </div>
                  {/*  Pipeline Visualization  */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-2 pt-2">
                    {/*  Node 1  */}
                    <div className="p-space-sm bg-surface-container rounded flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="font-telemetry-badge text-telemetry-badge text-outline">
                          STAGE 01
                        </span>
                        <span className="material-symbols-outlined text-outline text-[16px]">
                          inventory_2
                        </span>
                      </div>
                      <div className="font-code-md text-code-md text-on-surface font-medium pt-2">
                        Raw SCORM / xAPI Zip
                      </div>
                      <div className="text-[11px] font-code-md text-on-surface-variant">
                        Manifest &amp; Media Payload
                      </div>
                    </div>
                    {/*  Node 2  */}
                    <div className="p-space-sm bg-surface-container rounded flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="font-telemetry-badge text-telemetry-badge text-tertiary">
                          STAGE 02
                        </span>
                        <span className="material-symbols-outlined text-tertiary text-[16px]">
                          transform
                        </span>
                      </div>
                      <div className="font-code-md text-code-md text-on-surface font-medium pt-2">
                        AST Unpack &amp; Tokenizer
                      </div>
                      <div className="text-[11px] font-code-md text-on-surface-variant">
                        Text &amp; Quiz Extraction
                      </div>
                    </div>
                    {/*  Node 3  */}
                    <div className="p-space-sm bg-surface-container rounded flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="font-telemetry-badge text-telemetry-badge text-primary">
                          STAGE 03
                        </span>
                        <span className="material-symbols-outlined text-primary text-[16px]">
                          psychology
                        </span>
                      </div>
                      <div className="font-code-md text-code-md text-primary font-medium pt-2">
                        LLM Schema Validation
                      </div>
                      <div className="text-[11px] font-code-md text-on-surface-variant">
                        Claude 3.5 Sonnet / JSON
                      </div>
                    </div>
                    {/*  Node 4  */}
                    <div className="p-space-sm bg-surface-container rounded flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span
                          className="font-telemetry-badge text-telemetry-badge text-[#FB7185]"
                          style={{ color: "#FB7185" }}
                        >
                          STAGE 04
                        </span>
                        <span
                          className="material-symbols-outlined text-[16px] text-[#FB7185]"
                          style={{ color: "#FB7185" }}
                        >
                          dashboard_customize
                        </span>
                      </div>
                      <div
                        className="font-code-md text-code-md font-medium pt-2 text-[#FB7185]"
                        style={{ color: "rgb(251, 113, 133)" }}
                      >
                        Audit Scorecard
                      </div>
                      <div className="text-[11px] font-code-md text-on-surface-variant">
                        Docebo Webhook Sync
                      </div>
                    </div>
                  </div>
                </div>
                {/*  3 Executive Data Callouts  */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-2">
                  <div className="p-space-md rounded bg-surface-container flex flex-col gap-1">
                    <span className="font-telemetry-badge text-telemetry-badge uppercase text-error">
                      Operational Friction
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
                      Manual compliance reviews consumed{" "}
                      <strong>35+ minutes per course package</strong> with an
                      unacceptably high 18% variance in subjective QA audit
                      flags across global learning partners.
                    </p>
                  </div>
                  <div className="p-space-md rounded bg-surface-container flex flex-col gap-1">
                    <span className="font-telemetry-badge text-telemetry-badge uppercase text-tertiary">
                      Technical Solution &amp; APIs
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
                      Built automated ingestion engine using headless AST XML
                      parsing, chunking heuristics, and GPT-4o / Claude 3.5
                      structured function calling with programmatic sync
                      directly into the Docebo LMS API.
                    </p>
                  </div>
                  <div className="p-space-md rounded bg-surface-container flex flex-col gap-1">
                    <span
                      className="font-telemetry-badge text-telemetry-badge uppercase text-[#FB7185] font-semibold"
                      style={{ color: "rgb(251, 113, 133)" }}
                    >
                      Quantified Business Impact
                    </span>
                    <p
                      className="font-body-sm text-body-sm leading-relaxed font-medium text-[#FDA4AF]"
                      style={{ color: "rgb(253, 164, 175)" }}
                    >
                      Achieved{" "}
                      <strong className="text-white font-semibold">
                        94% reduction
                      </strong>{" "}
                      in audit latency (reduced down to 1.8 mins/package) with
                      99.4% precision and 1,040+ hours in annualized engineer
                      efficiency reclaimed.
                    </p>
                  </div>
                </div>
              </div>
              {/*  Case Study 2: Unified Enterprise Learning Record Store (PostgreSQL)  */}
              <div className="bg-surface-container-low rounded-xl p-space-lg md:p-space-xl flex flex-col gap-space-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md pb-space-md">
                  <div className="flex items-center gap-space-md">
                    <span
                      className="p-2.5 rounded bg-surface-container-high text-secondary flex items-center justify-center"
                      style={{ color: "rgb(251, 113, 133)" }}
                    >
                      <span className="material-symbols-outlined text-[24px]">
                        terminal
                      </span>
                    </span>
                    <div>
                      <span
                        className="font-telemetry-badge text-telemetry-badge uppercase text-secondary"
                        style={{ color: "rgb(251, 113, 133)" }}
                      >
                        Case Study 02 // Enterprise Telemetry
                      </span>
                      <h3 className="font-headline-md text-headline-md font-semibold text-on-surface">
                        Unified LRS Pipeline &amp; Compliance Lakehouse
                      </h3>
                    </div>
                  </div>
                  <span className="font-code-md text-code-md text-primary bg-surface-container px-3 py-1 rounded">
                    Throughput: 12k evt/sec
                  </span>
                </div>
                {/*  Tactile Data-Flow Diagram (Case Study 2)  */}
                <div className="bg-surface-container-lowest p-space-md md:p-space-lg rounded-lg flex flex-col gap-2">
                  <div className="flex items-center justify-between text-outline font-code-md text-code-md pb-2">
                    <span className="">
                      DATA-FLOW MANIFEST: TELEMETRY_STREAM_V2
                    </span>
                    <span
                      className="text-secondary font-telemetry-badge text-telemetry-badge"
                      style={{ color: "rgb(251, 113, 133)" }}
                    >
                      PIPELINE: DISTRIBUTED
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-2 pt-2">
                    <div className="p-space-sm bg-surface-container rounded flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="font-telemetry-badge text-telemetry-badge text-outline">
                          SRC 01
                        </span>
                        <span className="material-symbols-outlined text-outline text-[16px]">
                          stream
                        </span>
                      </div>
                      <div className="font-code-md text-code-md text-on-surface font-medium pt-2">
                        xAPI Statement Firehose
                      </div>
                      <div className="text-[11px] font-code-md text-on-surface-variant">
                        LMS &amp; Native Apps
                      </div>
                    </div>
                    <div className="p-space-sm bg-surface-container rounded flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span
                          className="font-telemetry-badge text-telemetry-badge text-[#FB7185]"
                          style={{ color: "#FB7185" }}
                        >
                          INGEST 02
                        </span>
                        <span
                          className="material-symbols-outlined text-[16px] text-[#FB7185]"
                          style={{ color: "#FB7185" }}
                        >
                          reorder
                        </span>
                      </div>
                      <div
                        className="font-code-md text-code-md font-medium pt-2 text-[#FB7185]"
                        style={{ color: "rgb(251, 113, 133)" }}
                      >
                        Kafka Event Stream
                      </div>
                      <div className="text-[11px] font-code-md text-on-surface-variant">
                        Zero-loss Ingestion
                      </div>
                    </div>
                    <div className="p-space-sm bg-surface-container rounded flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="font-telemetry-badge text-telemetry-badge text-primary">
                          CORE 03
                        </span>
                        <span className="material-symbols-outlined text-primary text-[16px]">
                          table_rows
                        </span>
                      </div>
                      <div className="font-code-md text-code-md text-primary font-medium pt-2">
                        PostgreSQL Partition
                      </div>
                      <div className="text-[11px] font-code-md text-on-surface-variant">
                        Normalized JSONB Schema
                      </div>
                    </div>
                    <div className="p-space-sm bg-surface-container rounded flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="font-telemetry-badge text-telemetry-badge text-tertiary">
                          DEST 04
                        </span>
                        <span className="material-symbols-outlined text-tertiary text-[16px]">
                          monitoring
                        </span>
                      </div>
                      <div className="font-code-md text-code-md text-tertiary font-medium pt-2">
                        Executive Analytics
                      </div>
                      <div className="text-[11px] font-code-md text-on-surface-variant">
                        Workday Sync &amp; Audit
                      </div>
                    </div>
                  </div>
                </div>
                {/*  3 Executive Data Callouts  */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-2">
                  <div className="p-space-md rounded bg-surface-container flex flex-col gap-1">
                    <span className="font-telemetry-badge text-telemetry-badge uppercase text-error">
                      Operational Friction
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
                      Disjointed employee learning records spread across 4
                      disconnected SaaS silos, preventing accurate compliance
                      audit verification and enterprise-wide skill graph
                      visibility.
                    </p>
                  </div>
                  <div className="p-space-md rounded bg-surface-container flex flex-col gap-1">
                    <span className="font-telemetry-badge text-telemetry-badge uppercase text-tertiary">
                      Technical Solution &amp; APIs
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
                      Architected a unified LRS backend engine on PostgreSQL
                      with Timescale partitioning, handling over 10,000
                      events/second with automated schema normalization and
                      Workday RaaS sync routines.
                    </p>
                  </div>
                  <div className="p-space-md rounded bg-surface-container flex flex-col gap-1">
                    <span
                      className="font-telemetry-badge text-telemetry-badge uppercase text-[#FB7185] font-semibold"
                      style={{ color: "rgb(251, 113, 133)" }}
                    >
                      Quantified Business Impact
                    </span>
                    <p
                      className="font-body-sm text-body-sm leading-relaxed font-medium text-[#FDA4AF]"
                      style={{ color: "rgb(253, 164, 175)" }}
                    >
                      Eliminated{" "}
                      <strong className="text-white font-semibold">
                        $420,000 annually
                      </strong>{" "}
                      in redundant 3rd-party reporting subscriptions while
                      generating an immutable, 100% compliant data trail for
                      global regulatory bodies.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/*  4. Technical Engine & Capabilities Matrix  */}
            <section className="flex flex-col gap-space-lg" id="core-stack-section">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 font-code-md text-code-md text-primary">
                  <span className="material-symbols-outlined text-[16px]">
                    developer_board
                  </span>
                  <span className="font-medium tracking-wide uppercase">
                    Core Capabilities • Technical DNA
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                  Enterprise Architecture Matrix
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
                {/*  Column 1: AI & Agentic Orchestration  */}
                <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col gap-space-md shadow-sm">
                  <div className="flex items-center gap-2 pb-space-sm">
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      smart_toy
                    </span>
                    <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                      AI &amp; Agentic Orchestration
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2 font-code-md text-code-md">
                    <div className="p-2.5 rounded bg-surface-container flex items-center justify-between">
                      <span className="text-on-surface">
                        RAG Architectures &amp; HyDE
                      </span>
                      <span className="font-telemetry-badge text-telemetry-badge text-primary">
                        ACTIVE
                      </span>
                    </div>
                    <div className="p-2.5 rounded bg-surface-container flex items-center justify-between">
                      <span className="text-on-surface">
                        Vector Stores (pgvector, Pinecone)
                      </span>
                      <span className="font-telemetry-badge text-telemetry-badge text-primary">
                        ACTIVE
                      </span>
                    </div>
                    <div className="p-2.5 rounded bg-surface-container flex items-center justify-between">
                      <span className="text-on-surface">
                        Model Context Protocol (MCP)
                      </span>
                      <span className="font-telemetry-badge text-telemetry-badge text-primary">
                        ACTIVE
                      </span>
                    </div>
                    <div className="p-2.5 rounded bg-surface-container flex items-center justify-between">
                      <span className="text-on-surface">
                        Dynamic Token Budget Trimming
                      </span>
                      <span className="font-telemetry-badge text-telemetry-badge text-primary">
                        ACTIVE
                      </span>
                    </div>
                    <div className="p-2.5 rounded bg-surface-container flex items-center justify-between">
                      <span className="text-on-surface">
                        Continuous Eval Frameworks
                      </span>
                      <span className="font-telemetry-badge text-telemetry-badge text-primary">
                        ACTIVE
                      </span>
                    </div>
                    <div className="p-2.5 rounded bg-surface-container flex items-center justify-between">
                      <span className="text-on-surface">
                        Few-shot Prompt Engineering
                      </span>
                      <span className="font-telemetry-badge text-telemetry-badge text-primary">
                        ACTIVE
                      </span>
                    </div>
                  </div>
                </div>
                {/*  Column 2: Enterprise Systems & APIs  */}
                <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col gap-space-md shadow-sm">
                  <div className="flex items-center gap-2 pb-space-sm">
                    <span
                      className="material-symbols-outlined text-[20px] text-[#FB7185]"
                      style={{ color: "#FB7185" }}
                    >
                      lan
                    </span>
                    <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                      Enterprise Systems &amp; APIs
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2 font-code-md text-code-md">
                    <div className="p-2.5 rounded bg-surface-container flex items-center justify-between">
                      <span className="text-on-surface">
                        Docebo Core APIs &amp; Webhooks
                      </span>
                      <span
                        className="font-telemetry-badge text-telemetry-badge text-[#FB7185] font-medium"
                        style={{ color: "#FB7185" }}
                      >
                        EXPERT
                      </span>
                    </div>
                    <div className="p-2.5 rounded bg-surface-container flex items-center justify-between">
                      <span className="text-on-surface">
                        Workday Integration (RAAS/EIB)
                      </span>
                      <span
                        className="font-telemetry-badge text-telemetry-badge text-[#FB7185] font-medium"
                        style={{ color: "#FB7185" }}
                      >
                        EXPERT
                      </span>
                    </div>
                    <div className="p-2.5 rounded bg-surface-container flex items-center justify-between">
                      <span className="text-on-surface">
                        xAPI &amp; SCORM Package Parsing
                      </span>
                      <span
                        className="font-telemetry-badge text-telemetry-badge text-[#FB7185] font-medium"
                        style={{ color: "#FB7185" }}
                      >
                        EXPERT
                      </span>
                    </div>
                    <div className="p-2.5 rounded bg-surface-container flex items-center justify-between">
                      <span className="text-on-surface">
                        PII Redaction &amp; Data Scrims
                      </span>
                      <span
                        className="font-telemetry-badge text-telemetry-badge text-[#FB7185] font-medium"
                        style={{ color: "#FB7185" }}
                      >
                        EXPERT
                      </span>
                    </div>
                    <div className="p-2.5 rounded bg-surface-container flex items-center justify-between">
                      <span className="text-on-surface">
                        SOC2 Type II Control Mapping
                      </span>
                      <span
                        className="font-telemetry-badge text-telemetry-badge text-[#FB7185] font-medium"
                        style={{ color: "#FB7185" }}
                      >
                        EXPERT
                      </span>
                    </div>
                    <div className="p-2.5 rounded bg-surface-container flex items-center justify-between">
                      <span className="text-on-surface">
                        SSO / SAML 2.0 / OAuth2 Token Flows
                      </span>
                      <span
                        className="font-telemetry-badge text-telemetry-badge text-[#FB7185] font-medium"
                        style={{ color: "#FB7185" }}
                      >
                        EXPERT
                      </span>
                    </div>
                  </div>
                </div>
                {/*  Column 3: Full-Stack Prototyping  */}
                <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col gap-space-md shadow-sm">
                  <div className="flex items-center gap-2 pb-space-sm">
                    <span className="material-symbols-outlined text-tertiary text-[20px]">
                      construction
                    </span>
                    <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                      Full-Stack Prototyping
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2 font-code-md text-code-md">
                    <div className="p-2.5 rounded bg-surface-container flex items-center justify-between">
                      <span className="text-on-surface">
                        Python (FastAPI, LangChain)
                      </span>
                      <span className="font-telemetry-badge text-telemetry-badge text-tertiary">
                        DEPLOYED
                      </span>
                    </div>
                    <div className="p-2.5 rounded bg-surface-container flex items-center justify-between">
                      <span className="text-on-surface">
                        TypeScript / Next.js / Tailwind
                      </span>
                      <span className="font-telemetry-badge text-telemetry-badge text-tertiary">
                        DEPLOYED
                      </span>
                    </div>
                    <div className="p-2.5 rounded bg-surface-container flex items-center justify-between">
                      <span className="text-on-surface">
                        PostgreSQL Schema Optimization
                      </span>
                      <span className="font-telemetry-badge text-telemetry-badge text-tertiary">
                        DEPLOYED
                      </span>
                    </div>
                    <div className="p-2.5 rounded bg-surface-container flex items-center justify-between">
                      <span className="text-on-surface">
                        REST &amp; GraphQL Schema Design
                      </span>
                      <span className="font-telemetry-badge text-telemetry-badge text-tertiary">
                        DEPLOYED
                      </span>
                    </div>
                    <div className="p-2.5 rounded bg-surface-container flex items-center justify-between">
                      <span className="text-on-surface">
                        Cloud Sandboxes &amp; Docker Stacks
                      </span>
                      <span className="font-telemetry-badge text-telemetry-badge text-tertiary">
                        DEPLOYED
                      </span>
                    </div>
                    <div className="p-2.5 rounded bg-surface-container flex items-center justify-between">
                      <span className="text-on-surface">
                        GitHub Actions Automated CI/CD
                      </span>
                      <span className="font-telemetry-badge text-telemetry-badge text-tertiary">
                        DEPLOYED
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*  5. Executive Contact & PGP Verification Bar  */}
            <section
              className="bg-surface-container-low rounded-xl p-space-lg md:p-space-xl flex flex-col lg:flex-row items-center justify-between gap-space-xl shadow-md"
              id="contact-section"
            >
              <div className="flex flex-col gap-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="font-telemetry-badge text-telemetry-badge uppercase px-2 py-0.5 rounded bg-surface-container text-primary">
                    Direct Channel
                  </span>
                  <span className="font-code-md text-code-md text-on-surface-variant">
                    PGP Fingerprint Verified
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md font-semibold text-on-surface">
                  Initiate Strategic Dialogue
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Available for enterprise AI consulting, talent infrastructure
                  system modernization, or executive technical advisory roles.
                </p>
                {/*  Monospace Fingerprint Block  */}
                <div className="mt-2 bg-surface-container-lowest p-space-sm rounded font-code-md text-[11px] text-outline flex items-center justify-between gap-2 overflow-x-auto">
                  <span className="truncate">
                    FINGERPRINT: 4E9A B781 990C FE42 8107 DA11 3902 4BC1 AF88
                    205B
                  </span>
                  <CopyButton text="4E9AB781990CFE428107DA1139024BC1AF88205B" />
                </div>
              </div>
              {/*  Action Buttons  */}
              <div className="flex flex-wrap items-center gap-space-md shrink-0">
                <a
                  className="relative flex items-center gap-2 px-space-lg py-3 rounded-sm bg-[#FCEE09] text-[#161310] hover:bg-[#ffe600] font-headline-sm text-headline-sm font-bold transition-all shadow-[0_0_18px_rgba(252,238,9,0.35)] border-l-4 border-[#00F0FF]"
                  href="mailto:brandonhorishny@gmail.com"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#161310]">
                    cell_tower
                  </span>
                  <span className="">SEND TRANSMISSION</span>
                  <span className="font-telemetry-badge text-[9px] bg-[#161310] text-[#FCEE09] px-1 py-0.5 rounded-xs">
                    [NET_SEND]
                  </span>
                </a>
                <a
                  className="flex items-center gap-2 px-space-md py-3 rounded bg-surface-container text-on-surface hover:text-primary transition-colors font-headline-sm text-headline-sm"
                  href="https://www.linkedin.com/in/brandon-horishny"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    share
                  </span>
                  <span className="">LinkedIn</span>
                </a>
                <a
                  className="flex items-center gap-2 px-space-md py-3 rounded bg-surface-container text-on-surface hover:text-primary transition-colors font-headline-sm text-headline-sm"
                  href="https://github.com/thisisnilla"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    code
                  </span>
                  <span className="">GitHub</span>
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
      <footer className="w-full bg-surface-container-lowest border-t border-surface-container-highest/40 py-space-xl">
        <div className="w-full max-w-[1600px] mx-auto px-gutter md:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-space-lg">
          <div className="flex flex-col sm:flex-row items-center gap-space-md">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-surface-container-low border border-surface-container-highest/60">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="font-code-md text-code-md text-primary font-medium">
                System operational • Deployed via Google Stitch
              </span>
            </div>
            <span className="font-code-md text-code-md text-outline hidden sm:inline">
              |
            </span>
            <p className="font-code-md text-code-md text-on-surface-variant text-center sm:text-left">
              © 2025 Brandon Horishny • Systems Architecture &amp; Applied AI
            </p>
          </div>
          <div className="flex items-center gap-space-lg">
            <a
              className="font-code-md text-code-md text-on-surface-variant hover:text-primary transition-colors"
              href="https://github.com/thisisnilla"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="font-code-md text-code-md text-on-surface-variant hover:text-primary transition-colors"
              href="https://www.linkedin.com/in/brandon-horishny"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              className="font-code-md text-code-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1"
              data-path="pgp-key"
              href="#contact-section"
            >
              <span className="material-symbols-outlined text-[14px]">key</span>
              PGP Key
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
