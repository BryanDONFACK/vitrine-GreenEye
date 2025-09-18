'use client';

import React from 'react';
import { TrendingUp, DollarSign, Users, Leaf } from 'lucide-react';
import { useLanguage } from '@/components/providers/language-provider';
import { AnimatedSection } from '@/components/ui/animated-section';

export function ImpactSection() {
  const { t } = useLanguage();

  const metrics = [
    {
      icon: DollarSign,
      value: t('impact.metrics.cost.value'),
      label: t('impact.metrics.cost.label'),
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      icon: TrendingUp,
      value: t('impact.metrics.yield.value'),
      label: t('impact.metrics.yield.label'),
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: Users,
      value: t('impact.metrics.labor.value'),
      label: t('impact.metrics.labor.label'),
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      icon: Leaf,
      value: t('impact.metrics.sustainability.value'),
      label: t('impact.metrics.sustainability.label'),
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
    },
  ];

  return (
    <section id="impact" className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-success/10 text-success rounded-full text-sm font-medium border border-success/20 mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Résultats mesurables
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('impact.title')}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            {t('impact.subtitle')}
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <AnimatedSection key={metric.label} delay={index * 0.1}>
              <div className="card text-center group hover:scale-105 transition-all duration-500 relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className={`${metric.bgColor} ${metric.color} p-4 rounded-2xl mx-auto mb-4 w-fit group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <metric.icon className="w-8 h-8" />
                  </div>
                  
                  <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {metric.value}
                  </div>
                  
                  <p className="text-sm text-muted-foreground font-medium">
                    {metric.label}
                  </p>
                </div>

                {/* Pulse effect on hover */}
                <div className="absolute inset-0 border-2 border-primary/20 rounded-xl opacity-0 group-hover:opacity-100 animate-pulse"></div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Impact description */}
        <AnimatedSection delay={0.4}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary/5 via-background to-secondary/5 border border-primary/10 rounded-2xl p-8 text-center">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t('impact.description')}
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20">
                  Sécurité alimentaire
                </span>
                <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full border border-secondary/20">
                  Agriculture durable
                </span>
                <span className="px-4 py-2 bg-success/10 text-success rounded-full border border-success/20">
                  Innovation technologique
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}