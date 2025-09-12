import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Logo from '@/components/Logo';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Who We Are', path: '/who-we-are' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#f5f5dc]/95 backdrop-blur-md border-b border-navy-800/50 shadow-sm">
      <div className="container-custom py-0.5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
            <Logo size="lg" />
            <div className="ml-2">
              <h1 className="text-2xl font-bold text-navy-800">Elite Advisory Limited</h1>
              <p className="text-sm text-navy-600">Partnerships Based on Trust</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-2">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link
                    to={item.path}
                    className={`px-2 py-1 text-sm rounded-lg transition-colors duration-300 font-medium ${
                      location.pathname === item.path
                        ? 'text-[#ffb300] bg-[#ffb300]/10'
                        : 'text-navy-700 hover:text-[#ffb300] hover:bg-[#ffb300]/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>


          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-navy-700 hover:text-[#ffb300]">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#f5f5dc]">
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.path}
                      className={`block py-2 text-lg transition-colors font-medium ${
                        location.pathname === item.path
                          ? 'text-[#ffb300] font-semibold'
                          : 'text-navy-700 hover:text-[#ffb300]'
                      }`}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block py-1 text-sm text-navy-600 hover:text-[#ffb300]"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;