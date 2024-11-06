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
  hu: {
    title: "Komplex feladat példa: Többnyelvű videoprojekt",
    subtitle: "Nézze meg, hogyan kezeli az AIPajti Menedzser Modellje a kifinomult multimédiás projekteket",
    examplePrompt: `Hozzon létre többnyelvű futurisztikus városi videoprojektet:

1. Nyerjen ki 30 városnevet a feltöltött 'cities.xlsx' dokumentumból.
2. Minden városhoz generáljon egyedi futurisztikus képet, amely egy nevezetes látványosságot vagy közteret mutat 2050-ből.
3. Készítsen filmszerű, realisztikus 5 másodperces videót mind a 30 városhoz a generált képeket használva kezdőképként.
4. Komponáljon háttérzenét a videóhoz funky stílusban, beépítve a "the future will be bright" dalszöveget, hogy illeszkedjen a vizuális elemekhez.
5. A feltöltött 'Elon Musk Robot Theory.pdf' dokumentumból foglalja össze a kulcspontokat és készítsen 1 perces történetet Shakespeare stílusában, a legfontosabb gondolatokra fókuszálva.
6. Fordítsa le a történetet magyarra és narráljon meleg hangú férfihangon.
7. Egyesítse az összes 5 másodperces videót egy folyamatos videóvá.
8. Adja hozzá a narrált hangot mint narrációs sávot az egyesített videókhoz a háttérzenével együtt.
9. Szinkronizálja a videót franciára és kínaira.
10. Készítsen angol feliratokat a videó minden verziójához és mentse külön .srt fájlként időkódokkal.
11. Exportálja a végső videókat .mp4 formátumban.`,
    selectBrainPower: "Válassza ki az AI Agyi Erő Szintjét",
    startProcessing: "Feldolgozás indítása",
    analyzingTask: "Feladatkövetelmények elemzése...",
    taskCategories: "Feladatkategóriák és becslések",
    howToProceed: "Hogyan szeretne továbblépni?",
    trustAI: "Teljes bizalom az AI-ban",
    reviewSteps: "Minden lépés áttekintése",
    trustAIDescription: "Hagyja, hogy az AIPajti mindent automatikusan kezeljen. Az AI optimális döntéseket hoz minden lépésnél, biztosítva a lehető leggyorsabb befejezést magas minőség mellett. Tapasztalt felhasználóknak ajánlott, akik gyors eredményeket szeretnének.",
    reviewStepsDescription: "Tartsa meg az irányítást a folyamat felett. Az AIPajti előnézeteket mutat és megerősítést kér minden főbb lépés előtt. Tökéletes azoknak a felhasználóknak, akik finomhangolni szeretnék az eredményeket vagy meg szeretnék tanulni, hogyan működik az AI.",
    brainLevels: {
      basic: {
        name: "Alap",
        description: "Egyszerű feladatok és alapműveletek"
      },
      advanced: {
        name: "Haladó",
        description: "Összetettebb feladatok jobb pontossággal"
      },
      expert: {
        name: "Szakértő",
        description: "Kifinomult műveletek nagy precizitással"
      },
      master: {
        name: "Mester",
        description: "Komplex többlépéses feladatok kiváló eredményekkel"
      },
      elite: {
        name: "Elit",
        description: "Fejlett AI képességek kiemelkedő eredményekkel"
      },
      supreme: {
        name: "Legfelsőbb",
        description: "Kivételes teljesítmény tökéletes pontossággal"
      },
      genius: {
        name: "Zseni",
        description: "Végső AI erő a legigényesebb feladatokhoz"
      }
    },
    taskTypes: {
      documentProcessing: {
        name: "Dokumentumfeldolgozás",
        timeEstimate: "1-2 perc"
      },
      imageGeneration: {
        name: "Képgenerálás",
        timeEstimate: "3-4 perc"
      },
      videoCreation: {
        name: "Videókészítés",
        timeEstimate: "8-10 perc"
      },
      audioProcessing: {
        name: "Hangfeldolgozás",
        timeEstimate: "2-3 perc"
      }
    }
  }
};