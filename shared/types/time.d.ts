export type TimeEntryCreateState = {
  project: string | undefined;
  employee: string | undefined;
  entries: {
    task: string | undefined;
    date: string;
    time: number | undefined;
  }[];
};
