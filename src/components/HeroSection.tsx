
import { Button } from "@/components/ui/button";
import { Brain, Heart, Stethoscope } from "lucide-react";

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
              Погрузитесь в увлекательный мир медицины через интерактивный лабиринт знаний, 3D-атлас анатомии и медицинские кейсы. Учиться может быть весело!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Начать обучение
              </Button>
              <Button size="lg" variant="outline">
                Изучить возможности
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4 text-sm">
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
            </div>
          </div>
          
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-90"></div>
              <div className="relative h-full w-full flex items-center justify-center p-8">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 text-white">
                  <div className="flex justify-between mb-8">
                    <Heart className="h-12 w-12 text-rose-300" />
                    <Brain className="h-12 w-12 text-purple-300" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Сердечно-сосудистая система</h3>
                  <div className="space-y-3">
                    <div className="h-3 w-full bg-white/30 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-white rounded-full"></div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Прогресс: 75%</span>
                      <span>Уровень 3 из 4</span>
                    </div>
                  </div>
                  <Button className="mt-6 bg-white/20 hover:bg-white/30 border-white/40 text-white w-full">
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
