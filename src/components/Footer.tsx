
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-rose-400" />
              <span className="text-xl font-bold">МедЛабиринт</span>
            </div>
            <p className="text-gray-400">
              Интерактивная платформа для изучения медицины и анатомии человека в увлекательной форме
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" className="hover:text-blue-400">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="https://twitter.com" className="hover:text-blue-400">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://instagram.com" className="hover:text-rose-400">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="https://youtube.com" className="hover:text-red-500">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Обучение</h3>
            <ul className="space-y-2">
              <li><Link to="/systems" className="text-gray-400 hover:text-white">Лабиринт знаний</Link></li>
              <li><Link to="/atlas" className="text-gray-400 hover:text-white">3D-атлас анатомии</Link></li>
              <li><Link to="/cases" className="text-gray-400 hover:text-white">Медицинские кейсы</Link></li>
              <li><Link to="/dictionary" className="text-gray-400 hover:text-white">Медицинский словарь</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white">Блог</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Сообщество</h3>
            <ul className="space-y-2">
              <li><Link to="/forum" className="text-gray-400 hover:text-white">Форум</Link></li>
              <li><Link to="/consultations" className="text-gray-400 hover:text-white">Консультации</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-white">Мероприятия</Link></li>
              <li><Link to="/webinars" className="text-gray-400 hover:text-white">Вебинары</Link></li>
              <li><Link to="/partners" className="text-gray-400 hover:text-white">Партнеры</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">О проекте</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-white">Наша команда</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white">Часто задаваемые вопросы</Link></li>
              <li><Link to="/contacts" className="text-gray-400 hover:text-white">Контакты</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-white">Поддержка</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2023 МедЛабиринт. Все права защищены.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">Политика конфиденциальности</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm">Условия использования</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm">Политика cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
