
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function AtlasPreview() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative">
                {/* 3D Atlas Preview - In real app, this would be a WebGL canvas or video */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600">
                  <div className="relative w-full h-full">
                    {/* Simulated 3D model visualization */}
                    <div className="absolute w-2/3 h-2/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-full h-full rounded-full bg-blue-300/30 animate-pulse"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 rounded-full bg-purple-400/40 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 rounded-full bg-white/50 animate-pulse" style={{ animationDelay: "1s" }}></div>
                      
                      {/* Annotations */}
                      <div className="absolute top-[20%] right-[10%] flex items-center">
                        <div className="h-[2px] w-16 bg-white/70"></div>
                        <div className="bg-white/20 backdrop-blur-sm text-white text-xs p-2 rounded-md">
                          Верхняя полая вена
                        </div>
                      </div>
                      
                      <div className="absolute bottom-[30%] left-[15%] flex items-center">
                        <div className="h-[2px] w-16 bg-white/70"></div>
                        <div className="bg-white/20 backdrop-blur-sm text-white text-xs p-2 rounded-md">
                          Левый желудочек
                        </div>
                      </div>
                      
                      <div className="absolute top-[40%] left-[20%] flex items-center">
                        <div className="h-[2px] w-16 bg-white/70"></div>
                        <div className="bg-white/20 backdrop-blur-sm text-white text-xs p-2 rounded-md">
                          Аорта
                        </div>
                      </div>
                    </div>
                    
                    {/* Controls overlay */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white cursor-pointer hover:bg-white/30">
                        ⟲
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white cursor-pointer hover:bg-white/30">
                        ⟳
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white cursor-pointer hover:bg-white/30">
                        +
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white cursor-pointer hover:bg-white/30">
                        −
                      </div>
                    </div>
                    
                    {/* System selector */}
                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm p-2 rounded-lg">
                      <div className="text-white text-xs mb-2">Выбор системы:</div>
                      <div className="flex flex-col gap-1.5">
                        <div className="px-3 py-1 bg-white/30 text-white text-sm rounded-md cursor-pointer">Сердечно-сосудистая</div>
                        <div className="px-3 py-1 bg-white/10 text-white text-sm rounded-md cursor-pointer hover:bg-white/20">Нервная</div>
                        <div className="px-3 py-1 bg-white/10 text-white text-sm rounded-md cursor-pointer hover:bg-white/20">Дыхательная</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Сердечно-сосудистая система</h4>
                  <div className="text-sm text-gray-500">43 структуры</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
              Интерактивная анатомия
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl">3D-атлас человеческого тела</h2>
            <p className="text-lg text-gray-600">
              Изучайте строение организма человека на детальных трехмерных моделях. Вращайте, масштабируйте и исследуйте каждый орган и систему с возможностью просмотра подробных описаний.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
                <span>Детализированные 3D-модели всех систем организма</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
                <span>Интерактивные метки с подробными описаниями</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
                <span>Возможность скрывать и отображать отдельные структуры</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
                <span>Режим рентгеновского просмотра тканей и органов</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/atlas">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Исследовать атлас
                </Button>
              </Link>
              <Link to="/atlas/demo">
                <Button size="lg" variant="outline">
                  Посмотреть демо
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
