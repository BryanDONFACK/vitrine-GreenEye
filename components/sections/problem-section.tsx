'use client';

import React from 'react';
import { AlertTriangle, TrendingDown, Cloud, Wrench } from 'lucide-react';
import { useLanguage } from '@/components/providers/language-provider';
import { AnimatedSection } from '@/components/ui/animated-section';

export function ProblemSection() {
  const { t } = useLanguage();

  const challenges = [
    {
      icon: TrendingDown,
      title: t('problem.challenges.yields'),
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
    },
    {
      icon: AlertTriangle,
      title: t('problem.challenges.losses'),
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
    },
    {
      icon: Wrench,
      title: t('problem.challenges.technology'),
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: Cloud,
      title: t('problem.challenges.climate'),
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
  ];

  return (
    <section id="problem" className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-600 rounded-full text-sm font-medium border border-orange-500/20 mb-6">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Défis actuels
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('problem.title')}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance mb-8">
            {t('problem.subtitle')}
          </p>

          <div className="bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 border border-primary/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('problem.description')}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge, index) => (
            <AnimatedSection key={challenge.title} delay={index * 0.1}>
              <div className="card group hover:scale-105 transition-all duration-300 text-center">
                <div className={`${challenge.bgColor} ${challenge.color} p-4 rounded-xl mx-auto mb-4 w-fit group-hover:scale-110 transition-transform duration-300`}>
                  <challenge.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground">
                  {challenge.title}
                </h3>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}