/**
 * Live transform stages for Summary + Projects: built from the same sample CV / role
 * the user sees below ("Good Examples"), so checklist ticks show real text progression
 * instead of generic placeholders or flash-only repeats.
 */

import type { TransformStage } from "./transformStages";

function splitSentences(text: string): string[] {
  const t = text.replace(/\s+/g, " ").trim();
  if (!t) return [];
  return t.split(/(?<=[.!?])\s+/).filter((s) => s.length > 2);
}

function weakSummaryLine(cvTitle?: string): string {
  const role = (cvTitle || "this field").trim();
  return `Early-career candidate interested in ${role}. Describes self as motivated and a fast learner, without concrete outcomes or tools yet.`;
}

export function buildLiveSummaryStages(
  cvSummary: string,
  cvTitle?: string
): [TransformStage, TransformStage, TransformStage, TransformStage] {
  const full = (cvSummary || "").trim() || weakSummaryLine(cvTitle);
  const parts = splitSentences(full);
  const weak = weakSummaryLine(cvTitle);

  const s0: TransformStage = [{ id: "sum0", text: weak }];

  if (parts.length >= 3) {
    return [
      s0,
      [{ id: "sum1", text: parts[0], flash: "blue" }],
      [{ id: "sum2", text: `${parts[0]} ${parts[1]}`.trim(), flash: "blue" }],
      [{ id: "sum3", text: full, flash: "green" }],
    ];
  }

  if (parts.length === 2) {
    return [
      s0,
      [{ id: "sum1", text: parts[0], flash: "blue" }],
      [{ id: "sum2", text: parts[1], flash: "blue" }],
      [{ id: "sum3", text: full, flash: "green" }],
    ];
  }

  const n = full.length;
  const cut1 = Math.max(48, Math.min(Math.floor(n * 0.38), 110));
  const cut2 = Math.max(cut1 + 24, Math.min(Math.floor(n * 0.78), n));

  return [
    s0,
    [{ id: "sum1", text: full.slice(0, cut1).trim() + (cut1 < n ? "…" : ""), flash: "blue" }],
    [
      {
        id: "sum2",
        text: full.slice(0, cut2).trim() + (cut2 < n ? "…" : ""),
        flash: "blue",
      },
    ],
    [{ id: "sum3", text: full, flash: "green" }],
  ];
}

export type ProjectLike = { name: string; type: string; bullets: string[] };

const FALLBACK_PROJECT: [TransformStage, TransformStage, TransformStage, TransformStage] = [
  [{ id: "pf0", text: "Built a small portfolio project. Helped with features but impact is unclear." }],
  [
    {
      id: "pf1",
      text: "Scoped and shipped a demo MVP; documented assumptions and next validation steps.",
      flash: "blue",
    },
  ],
  [
    {
      id: "pf2",
      text: "Chose stack deliberately, shipped on time, and measured basic usage signals.",
      flash: "blue",
    },
  ],
  [
    {
      id: "pf3",
      text: "End-to-end ownership: problem → build → measurable outcome recruiters can scan in 5 seconds.",
      flash: "green",
    },
  ],
];

export function buildLiveProjectStages(
  project: ProjectLike | null | undefined
): [TransformStage, TransformStage, TransformStage, TransformStage] {
  if (!project?.name?.trim()) return FALLBACK_PROJECT;

  const title = project.name.split("—")[0].split("–")[0].trim() || project.name.trim();
  const stackPart = project.type.split("·")[0]?.trim() || project.type.trim() || "modern stack";
  const bullets = (project.bullets || []).map((b) => b.trim()).filter(Boolean);
  const b1 = bullets[0] || "";
  const b2 = bullets[1] || "";
  const best =
    bullets.reduce((bestSoFar, b) => (b.length > bestSoFar.length ? b : bestSoFar), b1) || b1;

  if (!b1) {
    return [
      [{ id: "p0", text: `Worked on something related to ${title}. Details and outcomes are vague.` }],
      [
        {
          id: "p1",
          text: `${title}: shipped a working slice using ${stackPart}, with a clear problem statement.`,
          flash: "blue",
        },
      ],
      [
        {
          id: "p2",
          text: `${title} — documented scope, stack (${stackPart}), and what “done” meant.`,
          flash: "blue",
        },
      ],
      [
        {
          id: "p3",
          text: `${title}: measurable delivery story recruiters can verify (users, %, latency, or revenue signal).`,
          flash: "green",
        },
      ],
    ];
  }

  const mid =
    b2.length >= 28
      ? b2
      : b1.length > 90
        ? b1.slice(0, 88).trim() + "…"
        : `${b1} Added tests, monitoring, or stakeholder reviews where relevant.`;

  return [
    [
      {
        id: "p0",
        text: `Contributed to ${title} but bullets read like tasks (“helped”, “assisted”) without numbers.`,
      },
    ],
    [
      {
        id: "p1",
        text: `${title}: owned a concrete slice (${stackPart}) and shipped it end-to-end.`,
        flash: "blue",
      },
    ],
    [{ id: "p2", text: mid, flash: "blue" }],
    [{ id: "p3", text: best, flash: "green" }],
  ];
}
