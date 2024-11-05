interface BrainLevel {
  name: string;
  description: string;
}

interface TaskType {
  name: string;
  timeEstimate: string;
}

interface BrainLevels {
  basic: BrainLevel;
  advanced: BrainLevel;
  expert: BrainLevel;
  master: BrainLevel;
  elite: BrainLevel;
  supreme: BrainLevel;
  genius: BrainLevel;
}

interface TaskTypes {
  documentProcessing: TaskType;
  imageGeneration: TaskType;
  videoCreation: TaskType;
  audioProcessing: TaskType;
}

export interface ManagerModelStrings {
  title: string;
  subtitle: string;
  examplePrompt: string;
  selectBrainPower: string;
  startProcessing: string;
  analyzingTask: string;
  taskCategories: string;
  howToProceed: string;
  trustAI: string;
  reviewSteps: string;
  trustAIDescription: string;
  reviewStepsDescription: string;
  brainLevels: BrainLevels;
  taskTypes: TaskTypes;
}

export type ManagerModelTranslations = {
  [key: string]: ManagerModelStrings;
};