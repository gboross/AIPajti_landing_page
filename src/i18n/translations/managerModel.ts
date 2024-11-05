import { ManagerModelTranslations } from '../types/managerModel';

export const managerModelTranslations: ManagerModelTranslations = {
  en: {
    title: "Complex Task Example: Multi-Language Video Project",
    subtitle: "Watch how AIPajti's Manager Model handles a sophisticated multimedia project",
    examplePrompt: `Create a Multi-Language Futuristic City Video Project:

1. Extract 30 city names from the uploaded document 'cities.xlsx'.
2. For each city, generate a custom futuristic image showcasing a notable landmark or public square as if in 2050.
3. Create a cinematic, realistic 5-second video for each of the 30 cities using the generated images as the starting frame.
4. Compose background music for the video in a funky style, incorporating the lyrics "the future will be bright" to align with the visuals.
5. From the uploaded document 'Elon Musk Robot Theory.pdf', summarize the key points and create a 1-minute story in the style of Shakespeare, focusing on the most impactful ideas.
6. Translate the story to Hungarian and narrate it using a warm-sounding male voice.
7. Merge all 5-second videos into a single, continuous video.
8. Add the narrated voice as a narration track to merged videos along with the background music.
9. Dub the video to French and Chinese.
10. Create English subtitles for all the versions of the video and save them separately as an .srt file with timecodes.
11. Export the final videos in .mp4 format.`,
    selectBrainPower: "Select AI Brain Power Level",
    startProcessing: "Start Processing",
    analyzingTask: "Analyzing Task Requirements...",
    taskCategories: "Task Categories and Estimates",
    howToProceed: "How would you like to proceed?",
    trustAI: "Trust AI Completely",
    reviewSteps: "Review Each Step",
    trustAIDescription: "Let AIPajti handle everything automatically. The AI will make optimal decisions at each step, ensuring the fastest possible completion while maintaining high quality. Best for experienced users who want quick results.",
    reviewStepsDescription: "Stay in control of the process. AIPajti will show you previews and ask for confirmation before each major step. Perfect for users who want to fine-tune the results or learn how the AI works.",
    brainLevels: {
      basic: {
        name: "Basic",
        description: "Simple tasks and basic operations"
      },
      advanced: {
        name: "Advanced",
        description: "More complex tasks with better accuracy"
      },
      expert: {
        name: "Expert",
        description: "Sophisticated operations with high precision"
      },
      master: {
        name: "Master",
        description: "Complex multi-step tasks with excellent results"
      },
      elite: {
        name: "Elite",
        description: "Advanced AI capabilities with superior output"
      },
      supreme: {
        name: "Supreme",
        description: "Exceptional performance with perfect precision"
      },
      genius: {
        name: "Genius",
        description: "Ultimate AI power for the most demanding tasks"
      }
    },
    taskTypes: {
      documentProcessing: {
        name: "Document Processing",
        timeEstimate: "1-2 minutes"
      },
      imageGeneration: {
        name: "Image Generation",
        timeEstimate: "3-4 minutes"
      },
      videoCreation: {
        name: "Video Creation",
        timeEstimate: "8-10 minutes"
      },
      audioProcessing: {
        name: "Audio Processing",
        timeEstimate: "2-3 minutes"
      }
    }
  },
  // Add other languages here following the same structure
};