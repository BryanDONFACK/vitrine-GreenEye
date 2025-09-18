'use client';

import React from 'react';
import { Users, MapPin, TrendingUp, Award } from 'lucide-react';
import { useLanguage } from '@/components/providers/language-provider';
import { AnimatedSection } from '@/components/ui/animated-section';
import { formatNumber } from '@/lib/utils';

export function AboutSection() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Users,
      number: 1250,
      label: t('about.stats.farmers'),
      suffix: '+',
    },
    {
      icon: MapPin,
      number: 15000,
      label: t('about.stats.hectares'),
      suffix: '',
    },
    {
      icon: TrendingUp,
      number: 15,
      label: t('about.stats.yield'),
      suffix: '%',
    },
    {
      icon: Award,
      number: 25,
      label: t('about.stats.cost'),
      suffix: '%',
    },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <AnimatedSection className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                Notre Impact
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                {t('about.title')}
              </h2>
              
              <h3 className="text-xl sm:text-2xl text-primary font-semibold">
                {t('about.subtitle')}
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.description')}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Nos Valeurs</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Innovation technologique accessible
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Durabilité environnementale
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Autonomisation des agriculteurs
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Excellence opérationnelle
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="card text-center hover:scale-105 transition-transform duration-300 group"
                >
                  <div className="flex flex-col items-center space-y-4">
                    <div className="p-4 bg-primary/10 text-primary rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-8 h-8" />
                    </div>
                    
                    <div className="space-y-1">
                      <div className="text-2xl sm:text-3xl font-bold text-foreground">
                        {formatNumber(stat.number)}{stat.suffix}
                      </div>
                      <p className="text-sm text-muted-foreground font-medium">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mission Statement */}
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 border border-primary/10 rounded-xl">
              <blockquote className="text-center">
                <p className="text-lg text-muted-foreground italic mb-4">
                  "L'avenir de l'agriculture africaine se construit aujourd'hui avec la technologie de demain."
                </p>
                <footer className="text-sm font-medium text-foreground">
                  — Équipe GreenEye
                </footer>
              </blockquote>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}