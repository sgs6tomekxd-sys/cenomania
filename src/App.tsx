import { useState, useEffect } from 'react';
import { GameItem, gameItems } from './data/items';
import { GameCard } from './components/GameCard';
import { ResultModal } from './components/ResultModal';
import { calculateScore } from './utils/gameLogic';
import { DarkModeToggle } from './components/DarkModeToggle';

function App() {
  const [gameState, setGameState] = useState<'start' | 'playing' | 'result' | 'summary'>('start');
  const [items, setItems] = useState<GameItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [lastGuess, setLastGuess] = useState(0);
  const [streak, setStreak] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [coins, setCoins] = useState(5); // System Ekonomii: Start z 5 monetami

  // Load high score
  useEffect(() => {
    const saved = localStorage.getItem('cenomania_highscore');
    if (saved) setHighScore(parseInt(saved));
  }, []);

  // Simulate fetching data from backend
  useEffect(() => {
    // Fisher-Yates Shuffle
    const shuffled = [...gameItems];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setItems(shuffled);
  }, []);

  const startGame = () => {
    // Reshuffle or just restart
    const shuffled = [...gameItems];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setItems(shuffled);
    setCurrentIndex(0);
    setTotalScore(0);
    setStreak(0);
    setCoins(5); // Reset coins on new game
    setGameState('playing');
  };

  const handleSpendCoins = (amount: number) => {
    if (coins >= amount) {
      setCoins(prev => prev - amount);
      return true;
    }
    return false;
  };

  const handleGuess = (guess: number) => {
    const item = items[currentIndex];
    let points = calculateScore(item.price, guess);
    
    // Streak Bonus logic
    if (points > 500) {
      const currentStreak = streak + 1;
      setStreak(currentStreak);
      // Bonus for streak: +10% for each streak step
      if (currentStreak > 1) {
        points = Math.round(points * (1 + (currentStreak * 0.05)));
      }
    } else {
      setStreak(0);
    }

    // Economy Reward
    if (points >= 900) setCoins(prev => prev + 2); // Perfect guess
    else if (points >= 500) setCoins(prev => prev + 1); // Good guess

    setLastGuess(guess);
    setCurrentScore(points);
    setTotalScore(prev => prev + points);
    setGameState('result');
  };

  const nextRound = () => {
    if (currentIndex + 1 < items.length) {
      setCurrentIndex(prev => prev + 1);
      setGameState('playing');
    } else {
      // Game Over
      if (totalScore > highScore) {
        setHighScore(totalScore);
        localStorage.setItem('cenomania_highscore', totalScore.toString());
      }
      setGameState('summary');
    }
  };

  if (gameState === 'start') {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden flex flex-col">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[100px]"></div>
        </div>

        {/* Top Bar */}
        <div className="absolute top-4 right-4 z-50">
          <DarkModeToggle />
        </div>

        <div className="flex-grow flex items-center justify-center p-4 relative z-10">
          <div className="max-w-2xl w-full text-center space-y-10 animate-fade-in">
            <div>
              <h1 className="text-5xl md:text-8xl font-black tracking-tight drop-shadow-xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                Ceno<span className="text-orange-400">Mania</span>
              </h1>
              <p className="text-gray-500 dark:text-gray-400 font-medium tracking-wide uppercase text-sm">
                Edycja Polska: 1990 - 2024
              </p>
            </div>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-lg mx-auto leading-relaxed font-light">
              Czy wiesz ile kosztowała <strong className="text-gray-900 dark:text-white">Coca-Cola w 1990</strong>? 
              <br/>Albo <strong className="text-gray-900 dark:text-white">litr paliwa w 2005</strong>?
            </p>
            
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
               <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-gray-200 dark:border-gray-700">
                  <p className="text-xs text-gray-400 uppercase font-bold">Liczba rund</p>
                  <p className="text-3xl font-black text-gray-800 dark:text-gray-200">{items.length}</p>
               </div>
               <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-gray-200 dark:border-gray-700">
                  <p className="text-xs text-gray-400 uppercase font-bold">Twój Rekord</p>
                  <p className="text-3xl font-black text-yellow-500">{highScore}</p>
               </div>
            </div>

            <div className="max-w-xl mx-auto bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 border border-gray-200 dark:border-gray-700 text-left">
              <h3 className="text-lg font-black text-gray-800 dark:text-white mb-3 uppercase tracking-wider flex items-center gap-2">
                <span className="text-xl">📜</span> Zasady Gry
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 text-sm font-medium">
                <li className="flex items-start gap-3">
                  <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full w-6 h-6 flex items-center justify-center shrink-0 text-xs font-bold">1</span>
                  <span>Twoim celem jest odgadnięcie ceny produktu z podanego roku.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300 rounded-full w-6 h-6 flex items-center justify-center shrink-0 text-xs font-bold">2</span>
                  <span>Im bliżej będziesz, tym więcej punktów zdobędziesz (max 1000 pkt).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-300 rounded-full w-6 h-6 flex items-center justify-center shrink-0 text-xs font-bold">3</span>
                  <span>Za dobre wyniki otrzymujesz <span className="text-yellow-600 dark:text-yellow-400 font-bold">CenoCoins</span>, które możesz wymieniać na podpowiedzi.</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-center">
                 <p className="text-indigo-600 dark:text-indigo-400 font-bold italic">Miłej zabawy i powodzenia!</p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={startGame}
                className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-black text-white transition-all duration-200 bg-gray-900 dark:bg-white dark:text-gray-900 rounded-full focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-gray-900 hover:scale-105 shadow-2xl"
              >
                Rozpocznij Wyzwanie
                <span className="ml-3 group-hover:translate-x-1 transition-transform">🚀</span>
              </button>
            </div>
          </div>
        </div>
        
        <footer className="p-6 text-center text-gray-400 text-sm relative z-10">
          <p>© 2025 dev FroZo</p>
        </footer>
      </div>
    );
  }

  if (gameState === 'summary') {
    const isNewRecord = totalScore >= highScore && totalScore > 0;
    
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4 transition-colors duration-300">
        <div className="bg-white dark:bg-gray-800 p-10 rounded-[2rem] shadow-2xl text-center max-w-md w-full border border-gray-100 dark:border-gray-700 animate-fade-in-up">
          
          {isNewRecord && (
            <div className="mb-6 inline-block bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-black animate-bounce">
              🏆 NOWY REKORD!
            </div>
          )}

          <h2 className="text-4xl font-black text-gray-800 dark:text-white mb-2">Koniec Gry!</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">Oto Twój wynik końcowy</p>
          
          <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8 drop-shadow-sm">
            {totalScore}
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-2xl">
              <p className="text-xs text-gray-400 uppercase font-bold">Średnia na rundę</p>
              <p className="text-xl font-bold text-gray-800 dark:text-gray-200">{Math.round(totalScore / items.length)}</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-2xl">
              <p className="text-xs text-gray-400 uppercase font-bold">Rund</p>
              <p className="text-xl font-bold text-gray-800 dark:text-gray-200">{items.length}</p>
            </div>
          </div>

          <button
            onClick={startGame}
            className="w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-black text-lg hover:opacity-90 transition-transform transform hover:scale-[1.02] shadow-xl"
          >
            Zagraj Ponownie ↺
          </button>
        </div>
      </div>
    );
  }

  const currentItem = items[currentIndex];
  const progressPercent = ((currentIndex) / items.length) * 100;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col py-6 px-4 transition-colors duration-300 overflow-hidden">
      {/* Background blobs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px]"></div>
      </div>

      <header className="max-w-2xl w-full mx-auto flex justify-between items-center mb-6 relative z-10">
        <div>
          <h1 className="font-black text-2xl text-gray-800 dark:text-white tracking-tight">Ceno<span className="text-blue-500">Mania</span></h1>
        </div>
        <div className="flex items-center gap-4">
           <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex items-center gap-2">
             <span className="text-xs text-gray-400 uppercase font-bold">Wynik</span>
             <span className="text-xl font-black text-blue-600 dark:text-blue-400 tabular-nums">{totalScore}</span>
           </div>
           <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-xl shadow-sm border border-yellow-200 dark:border-yellow-700 flex items-center gap-2">
             <span className="text-xl flex items-center justify-center w-6 h-6 bg-yellow-400 text-yellow-900 rounded-full text-xs font-bold border-2 border-yellow-500 shadow-sm">$</span>
             <span className="text-xl font-black text-yellow-600 dark:text-yellow-400 tabular-nums">{coins}</span>
           </div>
           <DarkModeToggle />
        </div>
      </header>

      {/* Progress Bar */}
      <div className="max-w-2xl w-full mx-auto mb-8 relative z-10">
        <div className="flex justify-between text-xs font-bold text-gray-400 uppercase mb-2 px-1">
          <span>Postęp</span>
          <span>{currentIndex + 1} / {items.length}</span>
        </div>
        <div className="h-2 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500 ease-out rounded-full"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      <main className="flex-grow flex flex-col items-center justify-start relative z-10 w-full">
        {currentItem && (
          <GameCard 
            item={currentItem} 
            onGuess={handleGuess}
            streak={streak}
            coins={coins}
            onSpendCoins={handleSpendCoins}
          />
        )}
      </main>

      {gameState === 'result' && currentItem && (
        <ResultModal
          item={currentItem}
          userGuess={lastGuess}
          score={currentScore}
          onNext={nextRound}
        />
      )}
    </div>
  );
}

export default App;
