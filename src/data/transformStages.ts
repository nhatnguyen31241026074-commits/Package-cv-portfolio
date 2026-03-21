/**
 * Ensures transform "stages" always have 4 steps so checklist indices 0–3 map to
 * visible progression. Templates often had summary=2 or projects=1 stage, which
 * made clamped stageIndex always show the same text.
 */

export type TransformSeg = {
  id: string;
  text: string;
  flash?: "blue" | "green";
};

export type TransformStage = TransformSeg[];

function flattenStage(stage: TransformStage): string {
  return stage.map((s) => s.text).join("");
}

export function padTransformStagesToFour(
  stages: TransformStage[] | undefined,
  section: "summary" | "experience" | "projects" | "header"
): [TransformStage, TransformStage, TransformStage, TransformStage] {
  const empty: TransformStage = [{ id: "empty", text: "…" }];
  if (!stages?.length) {
    return [empty, empty, empty, empty];
  }

  if (stages.length >= 4) {
    return [stages[0], stages[1], stages[2], stages[3]];
  }

  if (stages.length === 3) {
    const [a, b, c] = stages;
    return [
      a,
      b,
      c,
      c.map((s) => ({ ...s, id: s.id + "_done", flash: "green" as const })),
    ];
  }

  if (stages.length === 2) {
    const [bad, good] = stages;
    return [
      bad,
      good.map((s) => ({ ...s, id: s.id + "_r1", flash: "blue" as const })),
      good.map((s) => ({ ...s, id: s.id + "_r2", flash: "blue" as const })),
      good.map((s) => ({ ...s, id: s.id + "_ok", flash: "green" as const })),
    ];
  }

  // length === 1
  const only = stages[0];
  const baseText = flattenStage(only);

  if (section === "projects") {
    return [
      only,
      [{ id: "p1", text: `Define problem + your role → ${baseText}`, flash: "blue" }],
      [{ id: "p2", text: `Add stack, scope, collaborators → ${baseText}`, flash: "blue" }],
      [{ id: "p3", text: `Add measurable outcome (users, %, $) → ${baseText}`, flash: "green" }],
    ];
  }

  if (section === "summary") {
    return [
      only,
      [{ id: "s1", text: `Add degree / years / domain → ${baseText}`, flash: "blue" }],
      [{ id: "s2", text: `Add strongest metric or proof → ${baseText}`, flash: "blue" }],
      [{ id: "s3", text: `Tight, metric-led summary → ${baseText}`, flash: "green" }],
    ];
  }

  if (section === "header") {
    return [only, only, only, only];
  }

  // experience: single stage — vary ids + flash for checklist steps
  return [
    only,
    only.map((s) => ({ ...s, id: s.id + "_a", flash: "blue" as const })),
    only.map((s) => ({ ...s, id: s.id + "_b", flash: "blue" as const })),
    only.map((s) => ({ ...s, id: s.id + "_c", flash: "green" as const })),
  ];
}
