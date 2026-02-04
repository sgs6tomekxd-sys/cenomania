import React from 'react';
import { GameItem } from '../data/items';
import { formatPrice, calculateScore } from '../utils/gameLogic';

interface ResultModalProps {
  item: GameItem;
  userGuess: number;
  score: number;
  onNext: () => void;
  isMulti?: boolean;
  guesses?: { p1: number, p2: number };
  playerNames?: { p1: string, p2: string };
}

export const ResultModal: React.FC<ResultModalProps> = ({ 
  item, 
  userGuess, 
  score, 
  onNext,
  isMulti = false,
  guesses,
  playerNames
}) => {
  // Single player logic (default)
  const diff = userGuess - item.price;
  const diffPercent = ((diff / item.price) * 100).toFixed(1);
  const isClose = Math.abs(diff) / item.price < 0.1;
  const isPerfect = score >= 900;

  // Multi player calculations
  const p1Score = isMulti && guesses ? calculateScore(item.price, guesses.p1) : 0;
  const p2Score = isMulti && guesses ? calculateScore(item.price, guesses.p2) : 0;
  
  let winner = 'Remis';
  if (p1Score > p2Score && playerNames?.p1) {
    winner = playerNames.p1;
  } else if (p2Score > p1Score && playerNames?.p2) {
    winner = playerNames.p2;
  }

  let scoreColor = 'text-gray-500';
  if (score > 0) scoreColor = 'text-orange-500';
  if (score > 500) scoreColor = 'text-green-500';
  if (score > 900) scoreColor = 'text-blue-600';

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-fade-in-up border border-gray-100 dark:border-gray-700 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        {!isMulti ? (
          <div className={`p-8 text-center relative overflow-hidden`}>
             <div className={`absolute inset-0 opacity-10 ${score > 500 ? 'bg-green-500' : 'bg-red-500'}`}></div>
             <h3 className="relative z-10 text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">Wynik Rundy</h3>
             <div className={`relative z-10 text-6xl font-black ${scoreColor} drop-shadow-sm`}>
               +{score}
             </div>
             {isPerfect && (
               <div className="absolute top-4 right-4 text-3xl animate-bounce">
                 🎯
               </div>
             )}
          </div>
        ) : (
          <div className="p-6 bg-purple-50 dark:bg-purple-900/20 text-center border-b border-purple-100 dark:border-purple-800/30">
             <h3 className="text-sm font-bold uppercase tracking-widest text-purple-600 dark:text-purple-300 mb-2">Zwycięzca Rundy</h3>
             <div className="text-3xl font-black text-gray-800 dark:text-white">
               🏆 {winner}
             </div>
          </div>
        )}

        <div className="px-8 pb-8 pt-6 space-y-6">
          {/* Comparison Cards */}
          {!isMulti ? (
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 text-center">
                <p className="text-xs text-gray-500 uppercase font-bold mb-1">Twój strzał</p>
                <p className="text-xl font-bold text-gray-800 dark:text-gray-200">{formatPrice(userGuess, item.currency)}</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-2xl border border-blue-100 dark:border-blue-800/50 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-1">
                   <span className="text-blue-500">✔</span>
                </div>
                <p className="text-xs text-blue-500 dark:text-blue-400 uppercase font-bold mb-1">Cena faktyczna</p>
                <p className="text-xl font-bold text-blue-700 dark:text-blue-300">{formatPrice(item.price, item.currency)}</p>
              </div>
            </div>
          ) : (
            // Multi Player Comparison
            <div className="space-y-3">
               <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl border border-blue-100 dark:border-blue-800/50 text-center mb-4">
                  <p className="text-xs text-blue-500 dark:text-blue-400 uppercase font-bold mb-1">Cena faktyczna</p>
                  <p className="text-2xl font-black text-blue-700 dark:text-blue-300">{formatPrice(item.price, item.currency)}</p>
               </div>
               
               <div className={`p-4 rounded-2xl border flex justify-between items-center ${p1Score > p2Score ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800' : 'bg-gray-50 border-gray-100 dark:bg-gray-800 dark:border-gray-700'}`}>
                  <div className="text-left">
                    <p className="text-xs font-bold uppercase text-gray-500">{playerNames?.p1}</p>
                    <p className="text-lg font-bold text-gray-800 dark:text-gray-200">{formatPrice(guesses!.p1, item.currency)}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-black text-green-600">+{p1Score}</span>
                  </div>
               </div>

               <div className={`p-4 rounded-2xl border flex justify-between items-center ${p2Score > p1Score ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800' : 'bg-gray-50 border-gray-100 dark:bg-gray-800 dark:border-gray-700'}`}>
                  <div className="text-left">
                    <p className="text-xs font-bold uppercase text-gray-500">{playerNames?.p2}</p>
                    <p className="text-lg font-bold text-gray-800 dark:text-gray-200">{formatPrice(guesses!.p2, item.currency)}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-black text-green-600">+{p2Score}</span>
                  </div>
               </div>
            </div>
          )}

          {/* Difference Indicator (Single only) */}
          {!isMulti && (
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700/50">
                <span className={`font-bold ${Number(diffPercent) > 0 ? 'text-red-500' : 'text-green-500'}`}>
                  {diff > 0 ? '▲' : '▼'} {Math.abs(Number(diffPercent))}%
                </span>
                <span className="text-gray-400 text-sm">od ceny</span>
              </div>
              {isClose && <p className="text-green-500 font-bold mt-2 text-sm">Niesamowita precyzja!</p>}
            </div>
          )}

          {/* Fun Fact */}
          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-2xl border border-indigo-100 dark:border-indigo-800/30">
            <div className="flex items-start gap-4">
              <span className="text-2xl shrink-0">💡</span>
              <div>
                <h4 className="font-bold text-indigo-900 dark:text-indigo-300 text-xs uppercase mb-1">Czy wiesz, że?</h4>
                <p className="text-indigo-800 dark:text-indigo-200 text-sm leading-relaxed">
                  {item.funFact}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={onNext}
            className="w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-black text-lg hover:opacity-90 transition-transform transform hover:scale-[1.02] active:scale-95 shadow-xl"
          >
            Następny Produkt &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
