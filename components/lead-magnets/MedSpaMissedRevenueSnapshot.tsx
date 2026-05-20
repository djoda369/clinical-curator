"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { LandingIcon } from "@/components/home/LandingIcon";
import {
  medSpaSnapshotAnswerOptions,
  medSpaSnapshotCategories,
  medSpaSnapshotCta,
  medSpaSnapshotIntro,
  medSpaSnapshotRiskLevels,
  type SnapshotAnswerValue,
  type SnapshotCategory,
} from "@/content/leadMagnets/medSpaMissedRevenueSnapshot";

type SnapshotAnswers = Partial<Record<string, SnapshotAnswerValue>>;

function getQuestionKey(categoryId: SnapshotCategory["id"], questionIndex: number) {
  return `${categoryId}-${questionIndex}`;
}

function getAnswerPoints(answer: SnapshotAnswerValue | undefined) {
  return (
    medSpaSnapshotAnswerOptions.find((option) => option.value === answer)
      ?.points ?? 0
  );
}

function getRiskLevel(totalScore: number) {
  return (
    medSpaSnapshotRiskLevels.find(
      (level) =>
        totalScore >= level.min &&
        (level.max === null || totalScore <= level.max),
    ) ?? medSpaSnapshotRiskLevels[0]
  );
}

function getAnsweredCount(
  category: SnapshotCategory,
  answers: SnapshotAnswers,
) {
  return category.questions.filter(
    (_, questionIndex) =>
      answers[getQuestionKey(category.id, questionIndex)] !== undefined,
  ).length;
}

function ProgressRail({
  activeIndex,
  scores,
}: {
  activeIndex: number;
  scores: { category: SnapshotCategory; score: number; maxScore: number }[];
}) {
  return (
    <div className="space-y-3">
      {scores.map(({ category, score, maxScore }, index) => {
        const isActive = activeIndex === index + 1;
        const scorePercent = (score / maxScore) * 100;

        return (
          <div
            key={category.id}
            className={`rounded-lg border px-3 py-3 transition-colors ${
              isActive
                ? "border-primary/25 bg-primary/5"
                : "border-outline-variant/10 bg-surface-container-lowest"
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-2">
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "bg-surface-container text-foreground-muted"
                  }`}
                >
                  <LandingIcon name={category.icon} className="h-4 w-4" />
                </span>
                <span className="truncate text-sm font-semibold text-foreground">
                  {category.shortTitle}
                </span>
              </div>
              <span className="shrink-0 text-xs font-bold text-foreground-muted">
                {score}/{maxScore}
              </span>
            </div>

            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-surface-container">
              <div
                className={`h-full rounded-full ${
                  scorePercent >= 67
                    ? "bg-primary"
                    : scorePercent >= 34
                      ? "bg-tertiary"
                      : "bg-outline-variant/40"
                }`}
                style={{ width: `${scorePercent}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function IntroScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="grid min-h-[520px] gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
      <div className="space-y-8">
        <div className="space-y-6">
          <span className="inline-block rounded-full bg-surface-container px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-on-secondary-container">
            {medSpaSnapshotIntro.eyebrow}
          </span>
          <h1 className="max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {medSpaSnapshotIntro.headline}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-foreground-muted sm:text-xl">
            {medSpaSnapshotIntro.subheadline}
          </p>
        </div>

        <button
          type="button"
          onClick={onStart}
          className="bg-primary-gradient shadow-ambient inline-flex w-full items-center justify-center rounded-full px-8 py-4 text-lg font-bold text-primary-foreground transition-transform active:scale-95 sm:w-auto"
        >
          {medSpaSnapshotIntro.primaryCta}
        </button>
      </div>

      <div className="rounded-2xl bg-surface-container-low p-5">
        <div className="rounded-xl bg-surface-container-lowest p-5">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground-muted">
            Diagnostic focus
          </p>
          <div className="mt-5 space-y-3">
            {medSpaSnapshotCategories.map((category) => (
              <div
                key={category.id}
                className="flex items-center gap-3 rounded-lg bg-surface-container-low px-3 py-3"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <LandingIcon name={category.icon} className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {category.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryScreen({
  category,
  answers,
  onAnswer,
}: {
  category: SnapshotCategory;
  answers: SnapshotAnswers;
  onAnswer: (
    categoryId: SnapshotCategory["id"],
    questionIndex: number,
    answer: SnapshotAnswerValue,
  ) => void;
}) {
  const answeredCount = getAnsweredCount(category, answers);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-5 border-b border-outline-variant/10 pb-8 md:flex-row md:items-start md:justify-between">
        <div className="space-y-3">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-primary">
            <LandingIcon name={category.icon} className="h-4 w-4" />
            Diagnostic section
          </span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            {category.title}
          </h2>
        </div>
        <div className="w-fit rounded-lg bg-surface-container-low px-4 py-3 text-sm font-semibold text-foreground-muted">
          {answeredCount}/{category.questions.length} answered
        </div>
      </div>

      <div className="space-y-4">
        {category.questions.map((question, questionIndex) => {
          const questionKey = getQuestionKey(category.id, questionIndex);
          const selectedAnswer = answers[questionKey];

          return (
            <article
              key={question}
              className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-5 shadow-[0_12px_30px_rgba(25,28,30,0.04)] sm:p-6"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <p className="max-w-2xl text-base font-semibold leading-relaxed text-foreground">
                  {question}
                </p>

                <div className="grid w-full grid-cols-3 gap-2 sm:w-auto sm:min-w-[360px]">
                  {medSpaSnapshotAnswerOptions.map((option) => {
                    const isSelected = selectedAnswer === option.value;

                    return (
                      <button
                        key={option.value}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() =>
                          onAnswer(category.id, questionIndex, option.value)
                        }
                        className={`min-h-11 rounded-full border px-3 py-2 text-sm font-bold transition-all ${
                          isSelected
                            ? "border-primary bg-primary text-primary-foreground shadow-[0_10px_24px_rgba(0,88,190,0.22)]"
                            : "border-outline-variant/15 bg-surface-container-low text-foreground hover:border-primary/30 hover:bg-primary/5"
                        }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function ResultMetric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-surface-container-low p-5">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-foreground-muted">
        {label}
      </p>
      <p className="mt-3 text-lg font-bold leading-snug text-foreground">
        {value}
      </p>
    </div>
  );
}

function ResultsScreen({
  totalScore,
  maxScore,
  riskLevel,
  biggestCategory,
  categoryScores,
  onCopy,
  copyStatus,
  onRestart,
}: {
  totalScore: number;
  maxScore: number;
  riskLevel: ReturnType<typeof getRiskLevel>;
  biggestCategory: SnapshotCategory;
  categoryScores: {
    category: SnapshotCategory;
    score: number;
    maxScore: number;
  }[];
  onCopy: () => void;
  copyStatus: string;
  onRestart: () => void;
}) {
  const result = biggestCategory.result;

  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-5">
          <span className="inline-block rounded-full bg-tertiary-fixed px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-on-tertiary-fixed">
            Missed Revenue Snapshot results
          </span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            {riskLevel.label}
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-foreground-muted">
            {riskLevel.description}
          </p>
        </div>

        <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-100">
            Total score
          </p>
          <p className="mt-4 font-display text-5xl font-extrabold">
            {totalScore}
            <span className="text-2xl text-blue-100">/{maxScore}</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-blue-100">
            Higher score means a larger missed revenue leak.
          </p>
        </div>
      </div>

      <section className="grid gap-4 md:grid-cols-2">
        <ResultMetric
          label="Biggest missed revenue leak"
          value={result.leakLabel}
        />
        <ResultMetric
          label="Fastest recovery opportunity"
          value={result.fastestOpportunity}
        />
        <ResultMetric
          label="Recommended first workflow"
          value={result.recommendedWorkflow}
        />
        <ResultMetric label="KPI to track first" value={result.kpi} />
      </section>

      <section className="rounded-2xl border border-outline-variant/10 bg-surface-container-low p-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground-muted">
          What it likely means
        </p>
        <p className="mt-4 text-lg leading-relaxed text-foreground">
          {result.likelyMeans}
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Category scores
            </h2>
            <p className="mt-2 text-sm text-foreground-muted">
              Scores show where your existing client list and provider slots
              may deserve the first recovery workflow.
            </p>
          </div>
          <button
            type="button"
            onClick={onCopy}
            className="inline-flex w-full items-center justify-center rounded-full border border-outline-variant/15 bg-surface-container-lowest px-5 py-3 text-sm font-bold text-foreground transition-colors hover:border-primary/30 hover:text-primary md:w-auto"
          >
            {copyStatus || "Copy summary"}
          </button>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {categoryScores.map(({ category, score, maxScore }) => (
            <div
              key={category.id}
              className="rounded-xl bg-surface-container-lowest p-5 shadow-[0_12px_30px_rgba(25,28,30,0.04)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <LandingIcon name={category.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-bold text-foreground">
                      {category.title}
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-foreground-muted">
                      {score}/{maxScore} leakage score
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-surface-container">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${(score / maxScore) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary-gradient overflow-hidden rounded-[2rem] p-8 text-primary-foreground shadow-[0_24px_70px_rgba(0,88,190,0.22)] md:p-10">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight">
              {medSpaSnapshotCta.heading}
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-blue-100">
              {medSpaSnapshotCta.body}
            </p>
          </div>
          <Link
            href={medSpaSnapshotCta.href}
            className="inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-4 text-base font-bold text-primary shadow-xl transition-transform active:scale-95 md:w-auto"
          >
            {medSpaSnapshotCta.button}
          </Link>
        </div>
      </section>

      <div className="flex justify-center">
        <button
          type="button"
          onClick={onRestart}
          className="text-sm font-bold text-foreground-muted transition-colors hover:text-primary"
        >
          Retake Missed Revenue Snapshot
        </button>
      </div>
    </div>
  );
}

export function MedSpaMissedRevenueSnapshot() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<SnapshotAnswers>({});
  const [copyStatus, setCopyStatus] = useState("");

  const totalQuestions = medSpaSnapshotCategories.reduce(
    (sum, category) => sum + category.questions.length,
    0,
  );
  const maxScore = totalQuestions * 2;
  const totalSteps = medSpaSnapshotCategories.length + 2;
  const resultsStep = totalSteps - 1;
  const currentCategory = medSpaSnapshotCategories[currentStep - 1];
  const isCategoryStep =
    currentStep > 0 && currentStep <= medSpaSnapshotCategories.length;
  const isResultsStep = currentStep === resultsStep;

  const categoryScores = useMemo(
    () =>
      medSpaSnapshotCategories.map((category) => {
        const score = category.questions.reduce((sum, _, questionIndex) => {
          const answer = answers[getQuestionKey(category.id, questionIndex)];
          return sum + getAnswerPoints(answer);
        }, 0);

        return {
          category,
          score,
          maxScore: category.questions.length * 2,
        };
      }),
    [answers],
  );

  const totalScore = categoryScores.reduce(
    (sum, categoryScore) => sum + categoryScore.score,
    0,
  );
  const riskLevel = getRiskLevel(totalScore);
  const biggestCategoryScore = categoryScores.reduce((highest, current) =>
    current.score > highest.score ? current : highest,
  );
  const progressPercent = ((currentStep + 1) / totalSteps) * 100;
  const answeredQuestions = Object.keys(answers).length;
  const sectionComplete = currentCategory
    ? getAnsweredCount(currentCategory, answers) ===
      currentCategory.questions.length
    : true;
  const canGoNext = !isCategoryStep || sectionComplete;
  const nextLabel =
    currentStep === 0
      ? medSpaSnapshotIntro.primaryCta
      : currentStep === medSpaSnapshotCategories.length
        ? "View Results"
        : "Next";

  function handleAnswer(
    categoryId: SnapshotCategory["id"],
    questionIndex: number,
    answer: SnapshotAnswerValue,
  ) {
    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [getQuestionKey(categoryId, questionIndex)]: answer,
    }));
  }

  function handleNext() {
    if (!canGoNext) return;
    setCopyStatus("");
    setCurrentStep((step) => Math.min(step + 1, resultsStep));
  }

  function handleBack() {
    setCopyStatus("");
    setCurrentStep((step) => Math.max(step - 1, 0));
  }

  function buildSummary() {
    const categoryLines = categoryScores
      .map(
        ({ category, score, maxScore: categoryMax }) =>
          `- ${category.title}: ${score}/${categoryMax}`,
      )
      .join("\n");

    return [
      "Missed Revenue Snapshot",
      `Risk level: ${riskLevel.label}`,
      `Total score: ${totalScore}/${maxScore}`,
      `Biggest missed revenue leak: ${biggestCategoryScore.category.result.leakLabel}`,
      `Fastest recovery opportunity: ${biggestCategoryScore.category.result.fastestOpportunity}`,
      `Recommended first workflow: ${biggestCategoryScore.category.result.recommendedWorkflow}`,
      `KPI to track first: ${biggestCategoryScore.category.result.kpi}`,
      "",
      "Category scores:",
      categoryLines,
    ].join("\n");
  }

  async function handleCopySummary() {
    if (!navigator.clipboard) {
      setCopyStatus("Copy unavailable");
      return;
    }

    try {
      await navigator.clipboard.writeText(buildSummary());
      setCopyStatus("Copied");
    } catch {
      setCopyStatus("Copy unavailable");
    }
  }

  function handleRestart() {
    setAnswers({});
    setCopyStatus("");
    setCurrentStep(0);
  }

  return (
    <section className="mx-auto w-full max-w-7xl">
      <div className="overflow-hidden rounded-[2rem] bg-surface-container-lowest shadow-[0_30px_80px_rgba(25,28,30,0.08)] ring-1 ring-outline-variant/10">
        <div className="border-b border-outline-variant/10 bg-surface-container-low px-5 py-5 sm:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground-muted">
                Step {currentStep + 1} of {totalSteps}
              </p>
              <p className="mt-1 font-display text-xl font-bold text-foreground">
                {currentStep === 0
                  ? "Missed Revenue Snapshot intro"
                  : isResultsStep
                    ? "Missed Revenue Snapshot results"
                    : currentCategory.title}
              </p>
            </div>
            <div className="w-full md:max-w-xs">
              <div className="h-2 overflow-hidden rounded-full bg-surface-container">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <p className="mt-2 text-right text-xs font-semibold text-foreground-muted">
                {answeredQuestions}/{totalQuestions} questions answered
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-0 lg:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="border-b border-outline-variant/10 bg-surface-container-low p-5 sm:p-6 lg:border-b-0 lg:border-r">
            <div className="sticky top-28 space-y-6">
              <div className="rounded-xl bg-surface-container-lowest p-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground-muted">
                  Current score
                </p>
                <p className="mt-4 font-display text-4xl font-extrabold text-foreground">
                  {totalScore}
                  <span className="text-xl text-foreground-muted">
                    /{maxScore}
                  </span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                  {riskLevel.label}
                </p>
              </div>

              <ProgressRail activeIndex={currentStep} scores={categoryScores} />
            </div>
          </aside>

          <div className="min-w-0 p-5 sm:p-8 lg:p-10">
            {currentStep === 0 ? (
              <IntroScreen onStart={handleNext} />
            ) : isResultsStep ? (
              <ResultsScreen
                totalScore={totalScore}
                maxScore={maxScore}
                riskLevel={riskLevel}
                biggestCategory={biggestCategoryScore.category}
                categoryScores={categoryScores}
                onCopy={handleCopySummary}
                copyStatus={copyStatus}
                onRestart={handleRestart}
              />
            ) : (
              <CategoryScreen
                category={currentCategory}
                answers={answers}
                onAnswer={handleAnswer}
              />
            )}

            {!isResultsStep ? (
              <div className="mt-10 flex flex-col-reverse gap-3 border-t border-outline-variant/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className="inline-flex items-center justify-center rounded-full border border-outline-variant/15 px-6 py-3 text-sm font-bold text-foreground transition-colors hover:border-primary/30 hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Back
                </button>

                <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                  {isCategoryStep && !sectionComplete ? (
                    <p className="text-center text-sm font-semibold text-foreground-muted sm:text-right">
                      Section incomplete
                    </p>
                  ) : null}
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!canGoNext}
                    className="bg-primary-gradient inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-bold text-primary-foreground transition-all active:scale-95 disabled:cursor-not-allowed disabled:bg-none disabled:bg-surface-container disabled:text-foreground-muted"
                  >
                    {nextLabel}
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
