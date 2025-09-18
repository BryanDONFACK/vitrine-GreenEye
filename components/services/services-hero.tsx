'use client';

import React from 'react';
import { Zap, Eye, Brain, Smartphone } from 'lucide-react';
import { useLanguage } from '@/components/providers/language-provider';
import { AnimatedSection } from '@/components/ui/animated-section';

export function ServicesHero() {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Eye,
      title: 'Cartographie',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: Brain,
      title: 'Analyse IA',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      icon: Smartphone,
      title: 'Gestion',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30">
        {/* Floating tech elements */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <AnimatedSection>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 backdrop-blur-sm mb-8">
              <Zap className="w-4 h-4 mr-2" />
              {t('services.title')}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="block text-foreground">
                {t('services.subtitle')}
              </span>
              <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Green Eye
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance mb-12">
              {t('services.description')}
            </p>
          </AnimatedSection>

          {/* Service highlights */}
          <AnimatedSection delay={0.3}>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {highlights.map((highlight, index) => (
                <div
                  key={highlight.title}
                  className="group relative overflow-hidden rounded-2xl border border-border/20 bg-card/50 backdrop-blur-sm p-8 hover:scale-105 transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className={`${highlight.bgColor} ${highlight.color} p-4 rounded-2xl mx-auto mb-4 w-fit group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <highlight.icon className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {highlight.title}
                    </h3>
                  </div>

                  {/* Animated border */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Scroll indicator */}
          <AnimatedSection delay={0.6}>
            <div className="flex flex-col items-center space-y-2 animate-bounce mt-16">
              <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center relative overflow-hidden">
                <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
              </div>
              <p className="text-xs text-muted-foreground">Découvrir nos services</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}