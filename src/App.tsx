import { useState } from 'react';
import { 
  CheckCircle, 
  BookOpen, 
  Triangle, 
  Square, 
  Ruler,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { questions } from '@/data/questions';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Category = 'segitiga' | 'segiempat' | 'sudut';

function App() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');

  const getCategoryName = (category: Category) => {
    switch (category) {
      case 'segitiga':
        return 'Kongruen Segitiga';
      case 'segiempat':
        return 'Kongruen Segiempat';
      case 'sudut':
        return 'Sudut-Sudut';
    }
  };

  const getCategoryIcon = (category: Category) => {
    switch (category) {
      case 'segitiga':
        return <Triangle className="w-5 h-5" />;
      case 'segiempat':
        return <Square className="w-5 h-5" />;
      case 'sudut':
        return <Ruler className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: Category) => {
    switch (category) {
      case 'segitiga':
        return 'from-violet-500 to-purple-600';
      case 'segiempat':
        return 'from-emerald-500 to-teal-600';
      case 'sudut':
        return 'from-amber-500 to-orange-600';
    }
  };

  const getCategoryBg = (category: Category) => {
    switch (category) {
      case 'segitiga':
        return 'bg-violet-50 border-violet-200';
      case 'segiempat':
        return 'bg-emerald-50 border-emerald-200';
      case 'sudut':
        return 'bg-amber-50 border-amber-200';
    }
  };

  const getCategoryText = (category: Category) => {
    switch (category) {
      case 'segitiga':
        return 'text-violet-700';
      case 'segiempat':
        return 'text-emerald-700';
      case 'sudut':
        return 'text-amber-700';
    }
  };

  const filteredQuestions = activeCategory === 'all' 
    ? questions 
    : questions.filter(q => q.category === activeCategory);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">Kunci Jawaban</h1>
                <p className="text-sm text-slate-500">MathQuest - Game Matematika</p>
              </div>
            </div>
            <a 
              href="https://mathquest-gules.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm" className="gap-2">
                Ke Game
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              activeCategory === 'all'
                ? "bg-slate-800 text-white"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            )}
          >
            Semua Soal (30)
          </button>
          {(['segitiga', 'segiempat', 'sudut'] as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2",
                activeCategory === cat
                  ? cn("bg-gradient-to-r text-white", getCategoryColor(cat))
                  : cn("bg-white hover:bg-opacity-80 border", getCategoryText(cat), "border-current")
              )}
            >
              {getCategoryIcon(cat)}
              {getCategoryName(cat)}
            </button>
          ))}
        </div>

        {/* Questions List */}
        <div className="space-y-4">
          {filteredQuestions.map((question) => {
            const isExpanded = expandedId === question.id;
            const correctOption = question.options[question.correctAnswer];
            const correctLabel = String.fromCharCode(65 + question.correctAnswer);

            return (
              <Card 
                key={question.id} 
                className={cn(
                  "border-0 shadow-md overflow-hidden transition-all duration-300",
                  isExpanded && "shadow-xl"
                )}
              >
                <div className={cn("h-1", getCategoryColor(question.category))} />
                <CardContent className="p-0">
                  {/* Question Header */}
                  <button
                    onClick={() => toggleExpand(question.id)}
                    className="w-full p-5 text-left flex items-start gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span className={cn(
                      "flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white",
                      getCategoryColor(question.category)
                    )}>
                      {question.id}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={cn(
                          "text-xs font-medium px-2 py-0.5 rounded-full",
                          getCategoryBg(question.category),
                          getCategoryText(question.category)
                        )}>
                          {getCategoryName(question.category)}
                        </span>
                      </div>
                      <p className="text-slate-800 font-medium">{question.question}</p>
                    </div>
                    <div className="flex-shrink-0">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="px-5 pb-5 border-t border-slate-100">
                      {/* All Options */}
                      <div className="mt-4 space-y-2">
                        <p className="text-sm font-medium text-slate-500 mb-2">Pilihan Jawaban:</p>
                        {question.options.map((option, optIndex) => {
                          const isCorrect = optIndex === question.correctAnswer;
                          const label = String.fromCharCode(65 + optIndex);
                          
                          return (
                            <div
                              key={optIndex}
                              className={cn(
                                "flex items-center gap-3 p-3 rounded-lg",
                                isCorrect 
                                  ? "bg-emerald-50 border border-emerald-200" 
                                  : "bg-slate-50 border border-slate-200"
                              )}
                            >
                              <span className={cn(
                                "w-6 h-6 rounded flex items-center justify-center text-xs font-bold",
                                isCorrect 
                                  ? "bg-emerald-500 text-white" 
                                  : "bg-slate-200 text-slate-600"
                              )}>
                                {label}
                              </span>
                              <span className={cn(
                                "flex-1 text-sm",
                                isCorrect ? "text-emerald-800 font-medium" : "text-slate-600"
                              )}>
                                {option}
                              </span>
                              {isCorrect && (
                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Correct Answer Highlight */}
                      <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className="w-5 h-5 text-emerald-600" />
                          <span className="font-bold text-emerald-800">
                            Jawaban Benar: {correctLabel}
                          </span>
                        </div>
                        <p className="text-emerald-700 text-sm">{correctOption}</p>
                      </div>

                      {/* Explanation */}
                      <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                        <p className="text-sm font-medium text-blue-800 mb-1">Penjelasan:</p>
                        <p className="text-blue-700 text-sm leading-relaxed">
                          {question.explanation}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm">
            MathQuest - Belajar Geometri dengan Seru!
          </p>
          <a 
            href="https://mathquest-gules.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-2 text-violet-600 hover:text-violet-700 font-medium"
          >
            Main Game MathQuest
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
