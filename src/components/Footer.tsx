
import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-rose-500" />
              <span className="text-xl font-bold text-white">МедЛабиринт</span>
            </div>
            <p className="text-gray-400 mb-4">
              Интерактивная платформа для изучения медицины в доступной и увлекательной форме.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="rounded-full text-gray-400 hover:text-white hover:bg-gray-800">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full text-gray-400 hover:text-white hover:bg-gray-800">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full text-gray-400 hover:text-white hover:bg-gray-800">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full text-gray-400 hover:text-white hover:bg-gray-800">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/systems" className="text-gray-400 hover:text-white transition-colors">
                  Лабиринт знаний
                </Link>
              </li>
              <li>
                <Link to="/atlas" className="text-gray-400 hover:text-white transition-colors">
                  3D-атлас анатомии
                </Link>
              </li>
              <li>
                <Link to="/cases" className="text-gray-400 hover:text-white transition-colors">
                  Медицинские кейсы
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Блог
                </Link>
              </li>
              <li>
                <Link to="/dictionary" className="text-gray-400 hover:text-white transition-colors">
                  Медицинский словарь
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
                <span className="text-gray-400">Москва, ул. Медицинская, д. 42</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-400 shrink-0" />
                <span className="text-gray-400">+7 (800) 123-45-67</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-400 shrink-0" />
                <span className="text-gray-400">info@medlabirint.ru</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Подписка на новости</h3>
            <p className="text-gray-400 mb-4">
              Будьте в курсе последних обновлений, новых статей и функций.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Ваш email" className="bg-gray-800 border-gray-700 text-white" />
              <Button>Подписаться</Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          <p>© 2023 МедЛабиринт. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
