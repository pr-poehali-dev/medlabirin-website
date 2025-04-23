
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Brain, Heart, Stethoscope, BookOpen } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-purple-50 to-blue-50 py-16 sm:py-24">
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute right-0 top-20 h-64 w-64 rounded-full bg-purple-200 blur-3xl" />
        <div className="absolute left-0 bottom-20 h-64 w-64 rounded-full bg-blue-200 blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
              Интерактивное обучение медицине
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block text-blue-600">МедЛабиринт</span>
              <span className="block">Знания, которые спасают жизни</span>
            </h1>
            <p className="text-lg text-gray-600 md:text-xl">
              Погрузитесь в увлекательный мир медицины через интерактивный лабиринт знаний, 3D-атлас анатомии и медицинские кейсы. Учиться может быть интересно!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/systems">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Начать обучение
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline">
                  О проекте
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-rose-500" />
                <span>Интересно</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-500" />
                <span>Познавательно</span>
              </div>
              <div className="flex items-center gap-2">
                <Stethoscope className="h-5 w-5 text-blue-500" />
                <span>Профессионально</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-green-500" />
                <span>Увлекательно</span>
              </div>
            </div>
          </div>
          
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-90"></div>
              <div className="relative h-full w-full p-8">
                <div className="h-full bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 text-white">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold">Лабиринт знаний</h3>
                    <div className="bg-white/20 px-3 py-1 rounded-full text-sm">Уровень 3</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="bg-white/20 rounded-lg p-3 text-center hover:bg-white/30 transition cursor-pointer">
                      <Heart className="h-8 w-8 mx-auto mb-2 text-rose-300" />
                      <div className="text-sm">Сердечно-сосудистая</div>
                      <div className="mt-1 text-xs bg-white/20 rounded-full">75%</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3 text-center hover:bg-white/30 transition cursor-pointer">
                      <Brain className="h-8 w-8 mx-auto mb-2 text-purple-300" />
                      <div className="text-sm">Нервная</div>
                      <div className="mt-1 text-xs bg-white/20 rounded-full">40%</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3 text-center hover:bg-white/30 transition cursor-pointer">
                      <div className="h-8 w-8 mx-auto mb-2 text-blue-300 flex items-center justify-center">🫁</div>
                      <div className="text-sm">Дыхательная</div>
                      <div className="mt-1 text-xs bg-white/20 rounded-full">20%</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between mb-2 text-sm">
                      <span>Прогресс по курсу</span>
                      <span>45%</span>
                    </div>
                    <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full w-[45%] bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm">🏆</div>
                      <div>
                        <div className="text-xs text-white/70">Очков опыта</div>
                        <div className="font-semibold">1,250 XP</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm">🎯</div>
                      <div>
                        <div className="text-xs text-white/70">Викторин пройдено</div>
                        <div className="font-semibold">12/30</div>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="mt-2 bg-white/20 hover:bg-white/30 border-white/40 text-white w-full">
                    Продолжить обучение
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
