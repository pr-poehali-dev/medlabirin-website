
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Brain, Lungs, Kidney } from "lucide-react";

export function AtlasPreview() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
              Интерактивный 3D-атлас
            </div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Исследуйте человеческое тело в деталях
            </h2>
            <p className="text-lg text-gray-600">
              Наш интерактивный 3D-атлас позволяет изучать анатомию человека во всех подробностях. 
              Вращайте модели, увеличивайте отдельные органы и системы, изучайте их строение и функции.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <Heart className="h-5 w-5 text-rose-500 mt-1" />
                <div>
                  <h4 className="font-medium">Сердечно-сосудистая</h4>
                  <p className="text-sm text-gray-600">Изучите строение сердца и сосудов</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Brain className="h-5 w-5 text-purple-500 mt-1" />
                <div>
                  <h4 className="font-medium">Нервная система</h4>
                  <p className="text-sm text-gray-600">Исследуйте мозг и нервную систему</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Lungs className="h-5 w-5 text-blue-500 mt-1" />
                <div>
                  <h4 className="font-medium">Дыхательная система</h4>
                  <p className="text-sm text-gray-600">Изучите лёгкие и органы дыхания</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Kidney className="h-5 w-5 text-amber-500 mt-1" />
                <div>
                  <h4 className="font-medium">Выделительная система</h4>
                  <p className="text-sm text-gray-600">Исследуйте почки и мочевыводящие пути</p>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="mt-2">
              Открыть 3D-атлас
            </Button>
          </div>
          
          <div className="relative mx-auto aspect-square max-w-lg">
            <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900"></div>
              <div className="relative h-full w-full p-6 flex items-center justify-center">
                {/* Main body silhouette */}
                <div className="relative w-3/4 h-4/5 bg-blue-400/20 rounded-full backdrop-blur-sm border border-white/10">
                  {/* Heart */}
                  <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/4">
                    <div className="relative">
                      <Heart className="h-16 w-16 text-rose-500/80" fill="rgba(225,29,72,0.3)" />
                      <div className="absolute -right-20 top-0 bg-white/10 backdrop-blur-sm p-2 rounded-lg border border-white/20">
                        <div className="text-white text-xs font-medium">Сердце</div>
                        <div className="flex items-center mt-1">
                          <div className="h-1.5 w-full bg-white/30 rounded-full overflow-hidden">
                            <div className="h-full w-2/3 bg-rose-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Brain */}
                  <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2">
                    <div className="relative">
                      <Brain className="h-12 w-12 text-purple-500/80" />
                      <div className="absolute -left-20 top-0 bg-white/10 backdrop-blur-sm p-2 rounded-lg border border-white/20">
                        <div className="text-white text-xs font-medium">Мозг</div>
                        <div className="flex items-center mt-1">
                          <div className="h-1.5 w-full bg-white/30 rounded-full overflow-hidden">
                            <div className="h-full w-1/2 bg-purple-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Lungs */}
                  <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
                    <Lungs className="h-12 w-12 text-blue-400/80" />
                  </div>
                </div>
                
                {/* Interface elements */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  <Button size="sm" variant="ghost" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                    Вращать
                  </Button>
                  <Button size="sm" variant="ghost" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                    Увеличить
                  </Button>
                  <Button size="sm" variant="ghost" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                    Системы
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Floating cards */}
            <Card className="absolute -top-4 -right-4 w-24 h-24 bg-white/80 backdrop-blur-sm border-none shadow-lg">
              <CardContent className="p-2 flex flex-col items-center justify-center h-full">
                <Heart className="h-8 w-8 text-rose-500" />
                <div className="text-xs font-medium text-center mt-1">Сердечно-сосудистая</div>
              </CardContent>
            </Card>
            
            <Card className="absolute -bottom-4 -left-4 w-24 h-24 bg-white/80 backdrop-blur-sm border-none shadow-lg">
              <CardContent className="p-2 flex flex-col items-center justify-center h-full">
                <Brain className="h-8 w-8 text-purple-500" />
                <div className="text-xs font-medium text-center mt-1">Нервная система</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
