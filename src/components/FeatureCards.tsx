
import { Link } from "react-router-dom";
import { Brain, BookOpen, MessageCircle, Award, Globe, Bookmark, Stethoscope, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function FeatureCards() {
  const features = [
    {
      icon: <Award className="h-12 w-12 text-amber-500" />,
      title: "Лабиринт знаний",
      description: "Проходите увлекательные уровни по системам органов, решайте головоломки и получайте награды за свои достижения.",
      action: "Начать прохождение",
      link: "/systems"
    },
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
      icon: <Globe className="h-12 w-12 text-green-500" />,
      title: "Научно-популярный блог",
      description: "Читайте актуальные статьи о медицине, здоровье и последних научных открытиях от профессиональных авторов.",
      action: "Читать статьи",
      link: "/blog"
    },
    {
      icon: <Users className="h-12 w-12 text-rose-500" />,
      title: "Форум сообщества",
      description: "Общайтесь с единомышленниками, задавайте вопросы, делитесь опытом и находите новых друзей.",
      action: "Присоединиться",
      link: "/forum"
    },
    {
      icon: <Stethoscope className="h-12 w-12 text-indigo-500" />,
      title: "Консультации врачей",
      description: "Получайте квалифицированные ответы на ваши вопросы от практикующих специалистов разных направлений.",
      action: "Получить консультацию",
      link: "/consultations"
    },
    {
      icon: <Bookmark className="h-12 w-12 text-cyan-500" />,
      title: "Медицинский словарь",
      description: "Обширная база терминов с понятными объяснениями для лучшего понимания медицинской информации.",
      action: "Открыть словарь",
      link: "/dictionary"
    },
    {
      icon: <MessageCircle className="h-12 w-12 text-yellow-500" />,
      title: "Личный кабинет",
      description: "Отслеживайте свой прогресс обучения, сохраняйте интересные материалы и управляйте подписками.",
      action: "Войти в кабинет",
      link: "/profile"
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                  <Link to={feature.link}>{feature.action}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
