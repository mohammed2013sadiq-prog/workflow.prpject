import React from 'react';
import { Header } from './components/header';
import StreakTracker from './components/streakTracker';
import ChallengeCard from './components/challengeCard';
import CategoryFilter from './components/categoryFilter';
import HistoryItem from './components/Historyitem';
import CompletionMessage from './components/CompletionMessage';
import { Footprints, BookOpen, Droplets, Wind, Gift } from 'lucide-react';

const App: React.FC = () => {
  const challenges = [
    { title: 'Faire 10 000 pas', subtitle: 'Marche aujourd’hui', progress: 7500, goal: 10000, points: 20, icon: Footprints  },
    { title: 'Lire 20 pages', subtitle: 'Développe ton esprit', progress: 12, goal: 20, points: 15, icon: BookOpen  },
    { title: 'Boire 2L d’eau', subtitle: 'Reste hydraté', progress: 8, goal: 20, points: 20, icon: Droplets  },
    { title: 'Méditer 10 minutes', subtitle: 'Calme ton esprit', progress: 10, goal: 10, points: 15, icon: Wind  },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Header />
      <main className="flex-1 p-6">
        <StreakTracker days={7} points={1250} />
        <CategoryFilter />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {challenges.map((c, i) => <ChallengeCard key={i} {...c} />)}
          <ChallengeCard title="Défi bonus" subtitle="Relève un défi surprise" progress={0} goal={1} points={0} icon={<Gift />} />
        </div>
        <CompletionMessage message="Félicitations ! Tu as terminé tes défis du jour !" />
        <div>
          <HistoryItem title="Lire 20 pages" date="27/04/2026" completed={true} />
          <HistoryItem title="Boire 2L d’eau" date="27/04/2026" completed={false} />
        </div>
      </main>
    </div>
  );
};

export default App;