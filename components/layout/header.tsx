'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Home, Settings, Info, TrendingUp, Mail, ArrowRight } from 'lucide-react';
import { useTheme } from '@/components/providers/theme-provider';
import { useLanguage } from '@/components/providers/language-provider';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Accueil', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'À propos', href: '#about', icon: Info },
    { name: 'Impact', href: '#impact', icon: TrendingUp },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <>
      {/* Header mobile/desktop simplifié */}
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/60 backdrop-blur-xl border-b border-border/20'
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 group">
              <a href="/" className="flex items-center space-x-3 transition-transform duration-300 group-hover:scale-105">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                    <img src="/assets/logo.png" alt="Green Eye Logo" className="h-full w-full object-contain" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  Green Eye
                </span>
              </a>
            </div>

            {/* Controls desktop */}
            <div className="hidden md:flex items-center space-x-3">
              {/* Language Switcher */}
              <div className="flex items-center bg-background/40 backdrop-blur-xl border border-border/30 rounded-full p-1 shadow-lg">
                <button
                  onClick={() => setLanguage('fr')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                    language === 'fr'
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                      : 'text-muted-foreground hover:text-foreground hover:bg-primary/10'
                  }`}
                >
                  FR
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                    language === 'en'
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                      : 'text-muted-foreground hover:text-foreground hover:bg-primary/10'
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="w-10 h-10 p-0 bg-background/40 backdrop-blur-xl border border-border/30 hover:bg-primary/10 hover:scale-110 transition-all duration-300 shadow-lg rounded-full"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>

              {/* CTA Button */}
              <Button className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105">
                <span className="relative z-10 flex items-center">
                  Contact
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="w-9 h-9 p-0 bg-background/40 backdrop-blur-xl border border-border/30 rounded-full"
              >
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-9 h-9 p-0 bg-background/40 backdrop-blur-xl border border-border/30 rounded-full"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-2xl">
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navigation.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-xl transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </a>
                ))}
                
                <div className="px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center bg-muted rounded-lg p-1">
                      <button
                        onClick={() => setLanguage('fr')}
                        className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                          language === 'fr'
                            ? 'bg-primary text-white'
                            : 'text-muted-foreground'
                        }`}
                      >
                        FR
                      </button>
                      <button
                        onClick={() => setLanguage('en')}
                        className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                          language === 'en'
                            ? 'bg-primary text-white'
                            : 'text-muted-foreground'
                        }`}
                      >
                        EN
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="px-4 py-2">
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white rounded-full">
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Dock Navigation - En bas de page */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
        <div className="flex items-center space-x-2 bg-background/20 backdrop-blur-2xl border border-border/20 rounded-full p-3 shadow-2xl shadow-black/10">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative p-3 text-muted-foreground hover:text-foreground rounded-full transition-all duration-300 hover:bg-primary/10 hover:scale-110 group"
              aria-label={item.name}
            >
              <item.icon className="w-5 h-5" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-background/90 backdrop-blur-sm text-xs text-foreground rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-border/50">
                {item.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}