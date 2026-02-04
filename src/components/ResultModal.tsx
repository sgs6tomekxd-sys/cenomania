import React from 'react';
import { GameItem } from '../data/items';
import { formatPrice } from '../utils/gameLogic';

interface ResultModalProps {
  item: GameItem;
  userGuess: number;
  score: number;
  onNext: () => void;
}

export const ResultModal: React.FC<ResultModalProps> = ({ item, userGuess, score, onNext }) => {
  const diff = userGuess - item.price;
  const diffPercent = ((diff / item.price) * 100).toFixed(1);
  const isClose = Math.abs(diff) / item.price < 0.1; // 10%
  const isPerfect = score >= 900;

  let scoreColor = 'text-gray-500';
  if (score > 0) scoreColor = 'text-orange-500';
  if (score > 500) scoreColor = 'text-green-500';
  if (score > 900) scoreColor = 'text-blue-600';

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-fade-in-up border border-gray-100 dark:border-gray-700">
        
        {/* Header with Score */}
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

        <div className="px-8 pb-8 space-y-6">
          {/* Comparison Cards */}
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

          {/* Difference Indicator */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700/50">
              <span className={`font-bold ${Number(diffPercent) > 0 ? 'text-red-500' : 'text-green-500'}`}>
                {diff > 0 ? '▲' : '▼'} {Math.abs(Number(diffPercent))}%
              </span>
              <span className="text-gray-400 text-sm">od ceny</span>
            </div>
            {isClose && <p className="text-green-500 font-bold mt-2 text-sm">Niesamowita precyzja!</p>}
          </div>

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
