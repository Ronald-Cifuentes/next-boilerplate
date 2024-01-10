export type InUseTemplateName = Partial<{
  dataTestId: string;
}>;

export type OutUseTemplateName = Partial<{
  dataTestId: string;
  increment: () => void;
  count: number;
}>;

export type UseTemplateName = (
  params?: InUseTemplateName
) => OutUseTemplateName;
