import React, { useState, useEffect, useRef } from 'react';
import { GameItem } from '../data/items';

interface GameCardProps {
  item: GameItem;
  onGuess: (guess: number) => void;
  streak: number;
  coins: number;
  onSpendCoins: (amount: number) => boolean;
}

export const GameCard: React.FC<GameCardProps> = ({ item, onGuess, streak, coins, onSpendCoins }) => {
  const [guess, setGuess] = useState<string>('');
  const [imgSrc, setImgSrc] = useState(item.imageUrl);
  const [hasError, setHasError] = useState(false);
  const [activeHint, setActiveHint] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  // Reset input and image when item changes
  useEffect(() => {
    setGuess('');
    setImgSrc(item.imageUrl);
    setHasError(false);
    setActiveHint(null);
    // Auto-focus input when item changes
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [item.id, item.imageUrl]);

  const useHint = (type: 'range' | 'digit') => {
    if (activeHint) return; // Only one hint per round

    const cost = type === 'range' ? 2 : 3;
    if (onSpendCoins(cost)) {
      if (type === 'range') {
        const min = Math.floor(item.price * 0.7);
        const max = Math.ceil(item.price * 1.3);
        setActiveHint(`Cena jest pomiędzy ${min.toLocaleString('pl-PL')} a ${max.toLocaleString('pl-PL')} ${item.currency.split(' ')[0]}`);
      } else {
        const firstDigit = item.price.toString()[0];
        const length = Math.floor(item.price).toString().length;
        setActiveHint(`Cena zaczyna się od ${firstDigit} i ma ${length} cyfr (przed przecinkiem)`);
      }
    }
  };

  const formatNumber = (value: string) => {
    // Remove all non-digit and non-comma characters
    let v = value.replace(/[^\d,]/g, '');
    const parts = v.split(',');
    
    // Ensure only one comma
    if (parts.length > 2) {
        v = parts[0] + ',' + parts.slice(1).join('');
    }
    
    // Add dots as thousand separators to the integer part
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    
    return parts.length > 1 ? integerPart + ',' + parts[1] : integerPart;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    // Remove existing dots to get raw value for re-formatting
    const raw = val.replace(/\./g, '');
    setGuess(formatNumber(raw));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Remove spaces and dots, replace comma with dot for parsing
    const cleanGuess = guess.replace(/\s/g, '').replace(/\./g, '').replace(',', '.');
    const numGuess = parseFloat(cleanGuess);
    if (!isNaN(numGuess)) {
      onGuess(numGuess);
    }
  };

  const handleImageError = () => {
    if (!hasError) {
      setHasError(true);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto transform transition-all hover:scale-[1.01]">
      {/* Streak Badge */}
      {streak > 1 && (
        <div className="absolute -top-4 -right-4 z-20 animate-bounce-subtle">
          <div className="bg-orange-500 text-white font-black text-sm px-3 py-1 rounded-full shadow-lg border-2 border-white dark:border-gray-800 flex items-center gap-1">
            🔥 {streak} STREAK
          </div>
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700 transition-colors duration-300">
        <div className="relative h-72 w-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center overflow-hidden group">
          {!hasError ? (
            <>
               {/* Tło rozmyte (wypełniacz) */}
               <div 
                 className="absolute inset-0 bg-cover bg-center blur-xl opacity-60 dark:opacity-40 scale-110 transition-transform duration-700 group-hover:scale-125"
                 style={{ backgroundImage: `url("${imgSrc}")` }}
               />
               {/* Właściwe zdjęcie (nieucięte) */}
               <img 
                 src={imgSrc} 
                 alt={item.name} 
                 onError={handleImageError}
                 referrerPolicy="no-referrer"
                 className="relative z-10 w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105 drop-shadow-xl"
               />
            </>
          ) : (
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-800 text-gray-400 dark:text-gray-500 p-4 text-center">
              <span className="text-4xl mb-2">📷</span>
              <span className="text-sm font-bold">Brak zdjęcia</span>
              <span className="text-xs mt-1 opacity-70">{item.name}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none z-20"></div>
          
          <div className="absolute top-4 right-4 z-20">
             <div className="bg-white/20 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/30 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
               <span className="block text-xs text-white/80 uppercase font-bold tracking-widest text-center mb-1">Rok</span>
               <span className="block text-5xl font-black text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
                 {item.year}
               </span>
             </div>
          </div>

          <div className="absolute top-4 left-4 z-20">
             <span className="bg-blue-600/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg text-white">
                {item.category}
             </span>
          </div>
        </div>
        
        <div className="p-8">
          <h2 className="text-3xl font-black text-gray-800 dark:text-white mb-3 leading-tight">
            {item.name}
          </h2>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-blue-500 mb-8">
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed italic">
              "{item.description}"
            </p>
          </div>

          {/* Hints Section */}
          <div className="mb-6">
             {!activeHint ? (
               <div className="flex gap-2">
                 <button 
                  onClick={() => useHint('range')}
                  disabled={coins < 2}
                  className="flex-1 py-2 px-3 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-xl text-xs font-bold uppercase tracking-wide hover:bg-yellow-200 dark:hover:bg-yellow-900/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed border border-yellow-200 dark:border-yellow-700 flex items-center justify-center gap-2"
                >
                  <span>💡 Zakres</span>
                  <span className="flex items-center justify-center w-5 h-5 bg-yellow-400 text-yellow-900 rounded-full text-[10px] font-bold border border-yellow-500 shadow-sm">2$</span>
                </button>
                <button 
                  onClick={() => useHint('digit')}
                  disabled={coins < 3}
                  className="flex-1 py-2 px-3 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-xl text-xs font-bold uppercase tracking-wide hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed border border-purple-200 dark:border-purple-700 flex items-center justify-center gap-2"
                >
                  <span>🔢 Pierwsza cyfra</span>
                  <span className="flex items-center justify-center w-5 h-5 bg-yellow-400 text-yellow-900 rounded-full text-[10px] font-bold border border-yellow-500 shadow-sm">3$</span>
                </button>
               </div>
             ) : (
               <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl border border-green-200 dark:border-green-700 animate-fade-in">
                 <p className="text-green-800 dark:text-green-200 text-sm font-bold text-center">
                   👀 {activeHint}
                 </p>
               </div>
             )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="price-guess" className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
                Twoja propozycja ceny
              </label>
              <div className="relative rounded-2xl shadow-sm transition-all focus-within:ring-4 focus-within:ring-blue-500/20">
                <input
                  ref={inputRef}
                  type="text"
                  name="price-guess"
                  id="price-guess"
                  className="block w-full rounded-2xl border-2 border-gray-200 dark:border-gray-600 pl-6 pr-16 py-4 text-3xl font-bold bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="0"
                  value={guess}
                  onChange={handleInputChange}
                  autoFocus
                  autoComplete="off"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-6">
                  <span className="text-gray-400 dark:text-gray-500 text-xl font-bold">
                    {item.currency.split(' ')[0]}
                  </span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={!guess}
              className="w-full py-4 px-6 rounded-2xl shadow-lg text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform active:scale-[0.98]"
            >
              Zatwierdź Cenę
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
