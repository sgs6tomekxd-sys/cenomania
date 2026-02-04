import { useState, useEffect } from 'react';
import { GameItem, gameItems } from './data/items';
import { GameCard } from './components/GameCard';
import { ResultModal } from './components/ResultModal';
import { calculateScore } from './utils/gameLogic';
import { DarkModeToggle } from './components/DarkModeToggle';

function App() {
  const [gameState, setGameState] = useState<'start' | 'playing' | 'pass_device' | 'result' | 'summary'>('start');
  const [gameMode, setGameMode] = useState<'single' | 'multi'>('single');
  const [playerNames, setPlayerNames] = useState({ p1: 'Gracz 1', p2: 'Gracz 2' });
  const [currentPlayer, setCurrentPlayer] = useState<'p1' | 'p2'>('p1');
  const [guesses, setGuesses] = useState<{ p1: number, p2: number }>({ p1: 0, p2: 0 });
  const [scores, setScores] = useState<{ p1: number, p2: number }>({ p1: 0, p2: 0 });
  
  const [items, setItems] = useState<GameItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentScore, setCurrentScore] = useState(0); // For single player
  const [totalScore, setTotalScore] = useState(0); // For single player
  const [streak, setStreak] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [coins, setCoins] = useState(5);

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
    // Reshuffle
    const shuffled = [...gameItems];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setItems(shuffled);
    setCurrentIndex(0);
    
    // Reset state based on mode
    if (gameMode === 'single') {
      setTotalScore(0);
      setStreak(0);
      setCoins(5);
      setGameState('playing');
    } else {
      setScores({ p1: 0, p2: 0 });
      setCoins(5); // Shared coins pool or separate? Keeping simple: shared/irrelevant for now
      setCurrentPlayer('p1');
      setGameState('playing');
    }
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
    
    if (gameMode === 'single') {
      let points = calculateScore(item.price, guess);
      
      // Streak Bonus logic
      if (points > 500) {
        const currentStreak = streak + 1;
        setStreak(currentStreak);
        if (currentStreak > 1) {
          points = Math.round(points * (1 + (currentStreak * 0.05)));
        }
      } else {
        setStreak(0);
      }

      // Economy Reward
      if (points >= 900) setCoins(prev => prev + 2);
      else if (points >= 500) setCoins(prev => prev + 1);

      setGuesses({ ...guesses, p1: guess }); // Reusing state structure
      setCurrentScore(points);
      setTotalScore(prev => prev + points);
      setGameState('result');
    } else {
      // Multiplayer logic
      if (currentPlayer === 'p1') {
        setGuesses(prev => ({ ...prev, p1: guess }));
        setGameState('pass_device');
      } else {
        setGuesses(prev => ({ ...prev, p2: guess }));
        
        // Calculate scores for both
        const p1Points = calculateScore(item.price, guesses.p1);
        const p2Points = calculateScore(item.price, guess);
        
        setScores(prev => ({
          p1: prev.p1 + p1Points,
          p2: prev.p2 + p2Points
        }));
        
        setGameState('result');
      }
    }
  };

  const handlePassDevice = () => {
    setCurrentPlayer('p2');
    setGameState('playing');
  };

  const nextRound = () => {
    if (currentIndex + 1 < items.length) {
      setCurrentIndex(prev => prev + 1);
      setCurrentPlayer('p1'); // Reset to P1 for next round
      setGameState('playing');
    } else {
      // Game Over
      if (gameMode === 'single' && totalScore > highScore) {
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
              <h3 className="text-lg font-black text-gray-800 dark:text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                <span className="text-xl">🎮</span> Wybierz Tryb Gry
              </h3>
              
              <div className="flex gap-4 mb-6">
                <button 
                  onClick={() => setGameMode('single')}
                  className={`flex-1 p-4 rounded-xl border-2 transition-all ${gameMode === 'single' ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30' : 'border-transparent bg-white dark:bg-gray-700'}`}
                >
                  <div className="text-2xl mb-1">👤</div>
                  <div className="font-bold text-gray-800 dark:text-white">1 Gracz</div>
                  <div className="text-xs text-gray-500">Klasyczna rozgrywka</div>
                </button>
                
                <button 
                  onClick={() => setGameMode('multi')}
                  className={`flex-1 p-4 rounded-xl border-2 transition-all ${gameMode === 'multi' ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/30' : 'border-transparent bg-white dark:bg-gray-700'}`}
                >
                  <div className="text-2xl mb-1">👥</div>
                  <div className="font-bold text-gray-800 dark:text-white">2 Graczy</div>
                  <div className="text-xs text-gray-500">Rywalizacja na zmianę</div>
                </button>
              </div>

              {gameMode === 'multi' && (
                <div className="grid grid-cols-2 gap-4 mb-4 animate-fade-in">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Gracz 1</label>
                    <input 
                      type="text" 
                      value={playerNames.p1}
                      onChange={(e) => setPlayerNames(prev => ({...prev, p1: e.target.value}))}
                      className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Gracz 2</label>
                    <input 
                      type="text" 
                      value={playerNames.p2}
                      onChange={(e) => setPlayerNames(prev => ({...prev, p2: e.target.value}))}
                      className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm font-bold"
                    />
                  </div>
                </div>
              )}

              <h3 className="text-sm font-black text-gray-800 dark:text-white mb-2 uppercase tracking-wider flex items-center gap-2 mt-6">
                <span className="text-xl">📜</span> Zasady
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm font-medium">
                {gameMode === 'single' ? (
                  <>
                    <li className="flex items-start gap-2"><span>•</span><span>Odgadnij cenę produktu z podanego roku.</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span>Zbieraj punkty i monety na podpowiedzi.</span></li>
                  </>
                ) : (
                  <>
                    <li className="flex items-start gap-2"><span>•</span><span>Gracze zgadują cenę na zmianę (bez podglądania!).</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span>Najpierw typuje {playerNames.p1}, potem następuje przekazanie urządzenia.</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span>Na koniec rundy widzicie oba wyniki.</span></li>
                  </>
                )}
              </ul>
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

  if (gameState === 'pass_device') {
    return (
      <div className="min-h-screen bg-indigo-900 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 p-10 rounded-[2rem] shadow-2xl text-center max-w-md w-full animate-bounce-subtle">
          <div className="text-6xl mb-6">🤫</div>
          <h2 className="text-3xl font-black text-gray-800 dark:text-white mb-4">Przekaż urządzenie</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Teraz kolej gracza: <br/>
            <strong className="text-purple-500 text-2xl block mt-2">{playerNames.p2}</strong>
          </p>
          <p className="text-sm text-gray-400 mb-8">Nie podglądaj odpowiedzi poprzednika!</p>
          
          <button
            onClick={handlePassDevice}
            className="w-full py-4 bg-purple-600 text-white rounded-2xl font-black text-lg hover:bg-purple-700 transition-colors shadow-xl"
          >
            Jestem gotowy! 🚀
          </button>
        </div>
      </div>
    );
  }

  if (gameState === 'summary') {
    const isNewRecord = gameMode === 'single' && totalScore >= highScore && totalScore > 0;
    const winner = scores.p1 > scores.p2 ? playerNames.p1 : scores.p2 > scores.p1 ? playerNames.p2 : 'Remis';
    
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4 transition-colors duration-300">
        <div className="bg-white dark:bg-gray-800 p-10 rounded-[2rem] shadow-2xl text-center max-w-md w-full border border-gray-100 dark:border-gray-700 animate-fade-in-up">
          
          {isNewRecord && (
            <div className="mb-6 inline-block bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-black animate-bounce">
              🏆 NOWY REKORD!
            </div>
          )}

          <h2 className="text-4xl font-black text-gray-800 dark:text-white mb-2">Koniec Gry!</h2>
          
          {gameMode === 'single' ? (
            <>
              <p className="text-gray-500 dark:text-gray-400 mb-8">Oto Twój wynik końcowy</p>
              <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8 drop-shadow-sm">
                {totalScore}
              </div>
            </>
          ) : (
            <div className="mb-8 mt-6">
              <p className="text-gray-500 dark:text-gray-400 mb-2">Zwycięzca</p>
              <div className="text-5xl font-black text-yellow-500 mb-6 drop-shadow-sm">
                🏆 {winner}
              </div>
              <div className="grid grid-cols-2 gap-4 bg-gray-50 dark:bg-gray-700/30 p-4 rounded-2xl">
                <div>
                  <p className="text-xs font-bold uppercase text-gray-400">{playerNames.p1}</p>
                  <p className="text-2xl font-black text-gray-800 dark:text-white">{scores.p1}</p>
                </div>
                <div className="border-l border-gray-200 dark:border-gray-600">
                  <p className="text-xs font-bold uppercase text-gray-400">{playerNames.p2}</p>
                  <p className="text-2xl font-black text-gray-800 dark:text-white">{scores.p2}</p>
                </div>
              </div>
            </div>
          )}

          {gameMode === 'single' && (
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
          )}

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

  const handleBackToMenu = () => {
    setGameState('start');
  };

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
          <button 
            onClick={handleBackToMenu}
            className="text-xs font-bold text-gray-500 hover:text-gray-800 dark:hover:text-white uppercase tracking-wider mb-1 flex items-center gap-1 transition-colors"
          >
            ← Menu
          </button>
          <h1 className="font-black text-2xl text-gray-800 dark:text-white tracking-tight">Ceno<span className="text-blue-500">Mania</span></h1>
        </div>
        <div className="flex items-center gap-4">
           {gameMode === 'single' && (
             <>
              <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex items-center gap-2">
                <span className="text-xs text-gray-400 uppercase font-bold">Wynik</span>
                <span className="text-xl font-black text-blue-600 dark:text-blue-400 tabular-nums">{totalScore}</span>
              </div>
              <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-xl shadow-sm border border-yellow-200 dark:border-yellow-700 flex items-center gap-2">
                <span className="text-xl flex items-center justify-center w-6 h-6 bg-yellow-400 text-yellow-900 rounded-full text-xs font-bold border-2 border-yellow-500 shadow-sm">$</span>
                <span className="text-xl font-black text-yellow-600 dark:text-yellow-400 tabular-nums">{coins}</span>
              </div>
             </>
           )}
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
            gameMode={gameMode}
            currentPlayerName={gameMode === 'multi' ? (currentPlayer === 'p1' ? playerNames.p1 : playerNames.p2) : undefined}
          />
        )}
      </main>

      {gameState === 'result' && currentItem && (
        <ResultModal
          item={currentItem}
          userGuess={gameMode === 'single' ? guesses.p1 : guesses.p2}
          score={gameMode === 'single' ? currentScore : 0}
          onNext={nextRound}
          isMulti={gameMode === 'multi'}
          guesses={guesses}
          playerNames={playerNames}
        />
      )}
    </div>
  );
}

export default App;
