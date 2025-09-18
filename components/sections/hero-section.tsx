'use client';

import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Play, Zap, TrendingUp, Eye, Leaf, Sparkles } from 'lucide-react';
import { useLanguage } from '@/components/providers/language-provider';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/animated-section';

export function HeroSection() {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30"
    >
      {/* Background avec parallax et profondeur */}
      <div className="absolute inset-0">
        {/* Couche 1 - Background gradient */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        
        {/* Couche 2 - Particules flottantes avec profondeur */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                transform: `translateY(${scrollY * (0.1 + i * 0.01)}px)`,
              }}
            />
          ))}
        </div>
        
        {/* Couche 3 - Effet magnetic eye */}
        <div 
          className="absolute w-64 h-64 opacity-10 pointer-events-none transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
            background: 'radial-gradient(circle, rgba(76,175,80,0.4) 0%, rgba(139,195,74,0.2) 50%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content avec animations échelonnées */}
          <AnimatedSection className="space-y-8">
            {/* Badge avec effet shimmer */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 backdrop-blur-sm hover:scale-105 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
              <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></div>
              <Leaf className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">{t('hero.badge')}</span>
            </div>

            {/* Headlines avec effet de morphing */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <div className="overflow-hidden">
                  <span className="block text-foreground">
                    {t('hero.title')}
                  </span>
                </div>
                <div className="overflow-hidden">
                  <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent relative">
                    {t('hero.subtitle')}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl opacity-50 animate-pulse"></div>
                  </span>
                </div>
              </h1>
              
              <div className="overflow-hidden">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  {t('hero.description')}
                </p>
              </div>
            </div>

            {/* Stats avec effet 3D */}
            <div className="grid grid-cols-2 gap-6 py-6">
              <AnimatedSection delay={0.8} className="group">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-background/80 to-muted/20 backdrop-blur-xl border border-border/20 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 group-hover:scale-105">
                  <div className="flex items-center text-2xl font-bold text-primary">
                    <div className="p-2 bg-primary/10 rounded-lg mr-3 group-hover:rotate-12 transition-transform duration-300">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    +15-20%
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Amélioration des rendements</p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={1.0} className="group">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-background/80 to-muted/20 backdrop-blur-xl border border-border/20 hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-500 group-hover:scale-105">
                  <div className="flex items-center text-2xl font-bold text-secondary">
                    <div className="p-2 bg-secondary/10 rounded-lg mr-3 group-hover:rotate-12 transition-transform duration-300">
                      <Zap className="w-6 h-6" />
                    </div>
                    -25-30%
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Réduction des coûts</p>
                </div>
              </AnimatedSection>
            </div>

            {/* CTAs avec effets magnetic */}
            <AnimatedSection delay={1.2} className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-500"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10 flex items-center text-lg font-semibold">
                  {t('hero.cta')}
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <Button 
                variant="outline"
                className="group relative px-8 py-4 rounded-2xl border-2 border-primary/20 hover:border-primary/40 bg-background/60 backdrop-blur-xl hover:bg-primary/5 transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-lg font-semibold">{t('hero.watchDemo')}</span>
              </Button>
            </AnimatedSection>
          </AnimatedSection>

          {/* Hero Visual avec effets 3D avancés */}
          <AnimatedSection delay={0.4} className="relative">
            <div className="relative w-full h-64 sm:h-80 lg:h-[500px] group">
              {/* Container principal avec glassmorphism */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-background/80 to-muted/20 backdrop-blur-xl shadow-2xl border border-border/20 group-hover:shadow-4xl transition-all duration-700">
                
                {/* Background animé avec profondeur */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20">
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='rgb(76,175,80)' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                  }}></div>
                </div>

                {/* Drone path avec effet de profondeur */}
                <div className="absolute inset-0">
                  {[
                    { x: '20%', y: '30%', delay: '0s', size: 'w-4 h-4' },
                    { x: '60%', y: '50%', delay: '1s', size: 'w-3 h-3' },
                    { x: '80%', y: '20%', delay: '2s', size: 'w-2 h-2' },
                  ].map((point, i) => (
                    <div
                      key={i}
                      className={`absolute ${point.size} bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg animate-bounce`}
                      style={{
                        left: point.x,
                        top: point.y,
                        animationDelay: point.delay,
                        animationDuration: '3s'
                      }}
                    >
                      <div className="absolute -inset-2 bg-primary/30 rounded-full animate-ping"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
                    </div>
                  ))}
                </div>

                {/* Central eye avec effet holographique */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative group-hover:scale-110 transition-all duration-700">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30 shadow-2xl relative overflow-hidden">
                      <Eye className="w-16 h-16 text-primary group-hover:text-secondary transition-colors duration-500 relative z-10" />
                      
                      {/* Effet holographique */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
                    </div>
                    
                    {/* Anneaux pulsants avec profondeur */}
                    <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping"></div>
                    <div className="absolute inset-4 rounded-full border border-secondary/40 animate-pulse"></div>
                    <div className="absolute -inset-4 rounded-full border border-primary/20 animate-ping" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
                
                {/* Status cards flottantes avec glassmorphism */}
                {[
                  { icon: Sparkles, text: 'IA Activée', color: 'text-green-500', pos: 'top-6 left-6' },
                  { icon: TrendingUp, text: 'Cartographie Active', color: 'text-blue-500', pos: 'bottom-6 right-6' },
                  { icon: Zap, text: 'Analyse en cours', color: 'text-orange-500', pos: 'top-1/2 right-6' },
                ].map((card, i) => (
                  <div 
                    key={i}
                    className={`absolute ${card.pos} bg-background/60 backdrop-blur-xl px-4 py-2 rounded-xl border border-border/20 shadow-lg hover:scale-105 transition-all duration-300 group/card`}
                  >
                    <div className="flex items-center space-x-2">
                      <card.icon className={`w-4 h-4 ${card.color} group-hover/card:animate-spin`} />
                      <p className="text-xs font-medium text-foreground">{card.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll Indicator avec animation unique */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-bounce group cursor-pointer" onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}>
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center relative overflow-hidden group-hover:border-primary/50 transition-colors duration-300">
            <div className="w-1 h-3 bg-gradient-to-b from-primary to-secondary rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-300">Découvrir</p>
        </div>
      </div>
    </section>
  );
}