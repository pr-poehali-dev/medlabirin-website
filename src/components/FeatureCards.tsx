
import { Brain, BookOpen, MessageCircle, Award, Globe, Bookmark } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function FeatureCards() {
  const features = [
    {
      icon: <Brain className="h-12 w-12 text-purple-500" />,
      title: "3D-атлас анатомии",
      description: "Интерактивные трехмерные модели человеческого тела с подробными описаниями органов и систем.",
      action: "Исследовать атлас",
      link: "/atlas"
    },
    {
      icon: <BookOpen className="h-12 w-12 text-blue-500" />,
      title: "Медицинские кейсы",
      description: "Примерьте роль врача и решайте реальные медицинские задачи, ставьте диагнозы и назначайте лечение.",
      action: "Решать кейсы",
      link: "/cases"
    },
    {
      icon: <MessageCircle className="h-12 w-12 text-green-500" />,
      title: "Консультации врачей",
      description: "Задавайте вопросы квалифицированным специалистам и получайте профессиональные ответы.",
      action: "Получить консультацию",
      link: "/consultations"
    },
    {
      icon: <Award className="h-12 w-12 text-amber-500" />,
      title: "Лабиринт знаний",
      description: "Проходите увлекательные уровни, решайте головоломки и получайте награды за свои достижения.",
      action: "Начать прохождение",
      link: "/systems"
    },
    {
      icon: <Globe className="h-12 w-12 text-rose-500" />,
      title: "Научно-популярный блог",
      description: "Читайте актуальные статьи о медицине, здоровье и последних научных открытиях.",
      action: "Читать статьи",
      link: "/blog"
    },
    {
      icon: <Bookmark className="h-12 w-12 text-indigo-500" />,
      title: "Медицинский словарь",
      description: "Обширная база терминов с понятными объяснениями для лучшего понимания медицинской информации.",
      action: "Открыть словарь",
      link: "/dictionary"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Возможности МедЛабиринта</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Исследуйте все интерактивные функции нашей платформы для увлекательного и эффективного обучения медицине
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-2">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <a href={feature.link}>{feature.action}</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
