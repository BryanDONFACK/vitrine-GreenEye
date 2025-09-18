'use client';

import React from 'react';
import { Map, Zap, Clock, Target, CheckCircle, AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/components/providers/language-provider';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';

export function MappingService() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Target,
      title: t('services.mapping.features.precision.title'),
      description: t('services.mapping.features.precision.description'),
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: Zap,
      title: t('services.mapping.features.speed.title'),
      description: t('services.mapping.features.speed.description'),
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      icon: Clock,
      title: t('services.mapping.features.automation.title'),
      description: t('services.mapping.features.automation.description'),
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      icon: CheckCircle,
      title: t('services.mapping.features.weather.title'),
      description: t('services.mapping.features.weather.description'),
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
    },
  ];

  const benefits = t('services.mapping.benefits.items') as string[];

  return (
    <section id="mapping" className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <AnimatedSection className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-600 rounded-full text-sm font-medium border border-blue-500/20">
                <Map className="w-4 h-4 mr-2" />
                Service #1
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                {t('services.mapping.title')}
              </h2>
              
              <h3 className="text-xl sm:text-2xl text-blue-600 font-semibold">
                {t('services.mapping.subtitle')}
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('services.mapping.description')}
              </p>
            </div>

            {/* Problem/Solution */}
            <div className="space-y-4">
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-700 dark:text-red-400 mb-1">Le Problème</h4>
                    <p className="text-sm text-red-600 dark:text-red-300">
                      {t('services.mapping.problem')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-green-700 dark:text-green-400 mb-1">Notre Solution</h4>
                    <p className="text-sm text-green-600 dark:text-green-300">
                      {t('services.mapping.solution')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Visual */}
          <AnimatedSection delay={0.2} className="relative">
            <div className="relative w-full h-80 lg:h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500/20 via-background to-green-500/20 shadow-2xl border border-border/20 group">
              {/* Animated mapping visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-40 h-40 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-blue-500/30 group-hover:scale-110 transition-all duration-500">
                    <Map className="w-20 h-20 text-blue-500 group-hover:text-green-500 transition-colors duration-500" />
                  </div>
                  
                  {/* Scanning lines */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-blue-500/50 animate-ping"></div>
                  <div className="absolute inset-4 rounded-2xl border border-green-500/40 animate-pulse"></div>
                </div>
              </div>
              
              {/* Floating data points */}
              <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-border/20 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <p className="text-xs font-medium text-blue-600">Précision: 2cm</p>
                </div>
              </div>
              
              <div className="absolute bottom-6 right-6 bg-background/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-border/20 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-xs font-medium text-green-600">30min/hectare</p>
                </div>
              </div>

              <div className="absolute top-1/2 right-6 bg-background/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-border/20 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <p className="text-xs font-medium text-purple-600">Auto-pilote</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Features Grid */}
        <AnimatedSection delay={0.4} className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Fonctionnalités Avancées
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="card group hover:scale-105 transition-all duration-500 text-center"
              >
                <div className={`${feature.bgColor} ${feature.color} p-4 rounded-2xl mx-auto mb-4 w-fit group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h4>
                
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Benefits */}
        <AnimatedSection delay={0.6}>
          <div className="bg-gradient-to-r from-blue-500/5 via-transparent to-green-500/5 border border-blue-500/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              {t('services.mapping.benefits.title')}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}