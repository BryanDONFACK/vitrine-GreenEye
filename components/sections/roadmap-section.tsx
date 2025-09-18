'use client';

import React from 'react';
import { Calendar, Target, Rocket } from 'lucide-react';
import { useLanguage } from '@/components/providers/language-provider';
import { AnimatedSection } from '@/components/ui/animated-section';

export function RoadmapSection() {
  const { t } = useLanguage();

  const phases = [
    {
      icon: Target,
      title: t('roadmap.phases.short.title'),
      description: t('roadmap.phases.short.description'),
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
    },
    {
      icon: Rocket,
      title: t('roadmap.phases.medium.title'),
      description: t('roadmap.phases.medium.description'),
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
    },
    {
      icon: Calendar,
      title: t('roadmap.phases.long.title'),
      description: t('roadmap.phases.long.description'),
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20',
    },
  ];

  return (
    <section id="roadmap" className="section-padding bg-muted/30">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 mb-6">
            <Rocket className="w-4 h-4 mr-2" />
            Vision d'avenir
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('roadmap.title')}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            {t('roadmap.subtitle')}
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-primary opacity-20 hidden lg:block"></div>

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <AnimatedSection key={phase.title} delay={index * 0.2}>
                <div className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className="flex-1 lg:max-w-md">
                    <div className={`card group hover:scale-105 transition-all duration-500 border-2 ${phase.borderColor}`}>
                      <div className="flex items-start space-x-4">
                        <div className={`${phase.bgColor} ${phase.color} p-3 rounded-xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                          <phase.icon className="w-6 h-6" />
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                            {phase.title}
                          </h3>
                          
                          <p className="text-muted-foreground leading-relaxed">
                            {phase.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden lg:block relative">
                    <div className={`w-4 h-4 ${phase.bgColor} ${phase.color} rounded-full border-4 border-background shadow-lg`}></div>
                    <div className={`absolute inset-0 w-4 h-4 ${phase.bgColor} rounded-full animate-ping opacity-30`}></div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 lg:max-w-md hidden lg:block"></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}