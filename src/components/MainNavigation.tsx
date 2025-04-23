
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Activity, Brain, BookOpen, MessageCircle, User, Heart, Menu, X, BookA, Globe } from "lucide-react";

export function MainNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-rose-500" />
          <Link to="/" className="text-xl font-bold text-primary">
            МедЛабиринт
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Лабиринт знаний</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                    <Link to="/systems/cardiovascular" className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded-md">
                      <Heart className="h-5 w-5 text-rose-500" />
                      <div>
                        <div className="font-medium">Сердечно-сосудистая</div>
                        <div className="text-sm text-muted-foreground">Строение и работа сердца</div>
                      </div>
                    </Link>
                    <Link to="/systems/nervous" className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded-md">
                      <Brain className="h-5 w-5 text-purple-500" />
                      <div>
                        <div className="font-medium">Нервная система</div>
                        <div className="text-sm text-muted-foreground">Мозг и нервы</div>
                      </div>
                    </Link>
                    <Link to="/systems/digestive" className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded-md">
                      <Activity className="h-5 w-5 text-orange-500" />
                      <div>
                        <div className="font-medium">Пищеварительная</div>
                        <div className="text-sm text-muted-foreground">Органы пищеварения</div>
                      </div>
                    </Link>
                    <Link to="/systems/respiratory" className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded-md">
                      <Activity className="h-5 w-5 text-blue-500" />
                      <div>
                        <div className="font-medium">Дыхательная</div>
                        <div className="text-sm text-muted-foreground">Лёгкие и дыхание</div>
                      </div>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/atlas" className={navigationMenuTriggerStyle()}>
                  3D-Атлас
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/cases" className={navigationMenuTriggerStyle()}>
                  Медицинские кейсы
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Информация</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:grid-cols-2">
                    <Link to="/blog" className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded-md">
                      <Globe className="h-5 w-5 text-green-500" />
                      <div>
                        <div className="font-medium">Блог</div>
                        <div className="text-sm text-muted-foreground">Статьи о медицине</div>
                      </div>
                    </Link>
                    <Link to="/dictionary" className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded-md">
                      <BookA className="h-5 w-5 text-indigo-500" />
                      <div>
                        <div className="font-medium">Словарь</div>
                        <div className="text-sm text-muted-foreground">Медицинские термины</div>
                      </div>
                    </Link>
                    <Link to="/forum" className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded-md">
                      <MessageCircle className="h-5 w-5 text-amber-500" />
                      <div>
                        <div className="font-medium">Форум</div>
                        <div className="text-sm text-muted-foreground">Общение с сообществом</div>
                      </div>
                    </Link>
                    <Link to="/consultations" className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded-md">
                      <User className="h-5 w-5 text-blue-500" />
                      <div>
                        <div className="font-medium">Консультации</div>
                        <div className="text-sm text-muted-foreground">Помощь врачей</div>
                      </div>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2">
          <Link to="/login">
            <Button variant="ghost" size="sm" className="hidden md:flex gap-1">
              <User className="h-4 w-4" />
              Войти
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="default" size="sm" className="hidden md:flex">
              Регистрация
            </Button>
          </Link>

          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="flex flex-col p-4 space-y-3">
            <Link to="/systems" className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded-md">
              <Activity className="h-5 w-5 text-blue-500" />
              <span className="font-medium">Лабиринт знаний</span>
            </Link>
            <Link to="/atlas" className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded-md">
              <Brain className="h-5 w-5 text-purple-500" />
              <span className="font-medium">3D-Атлас</span>
            </Link>
            <Link to="/cases" className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded-md">
              <BookOpen className="h-5 w-5 text-green-500" />
              <span className="font-medium">Медицинские кейсы</span>
            </Link>
            <Link to="/blog" className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded-md">
              <Globe className="h-5 w-5 text-green-500" />
              <span className="font-medium">Блог</span>
            </Link>
            <Link to="/dictionary" className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded-md">
              <BookA className="h-5 w-5 text-indigo-500" />
              <span className="font-medium">Словарь</span>
            </Link>
            <Link to="/forum" className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded-md">
              <MessageCircle className="h-5 w-5 text-amber-500" />
              <span className="font-medium">Форум</span>
            </Link>
            <Link to="/consultations" className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded-md">
              <User className="h-5 w-5 text-blue-500" />
              <span className="font-medium">Консультации</span>
            </Link>
            <div className="pt-2 flex gap-2">
              <Link to="/login" className="flex-1">
                <Button variant="outline" className="w-full">Войти</Button>
              </Link>
              <Link to="/register" className="flex-1">
                <Button variant="default" className="w-full">Регистрация</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
