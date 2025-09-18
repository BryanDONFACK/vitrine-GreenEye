'use client';

import React from 'react';
import { Brain, Activity, TrendingUp, Droplets, Bug, Thermometer, Eye, BarChart3 } from 'lucide-react';
import { useLanguage } from '@/components/providers/language-provider';
import { AnimatedSection } from '@/components/ui/animated-section';

export function AnalysisService() {
  const { t } = useLanguage();

  const capabilities = [
    {
      icon: Activity,
      title: t('services.analysis.capabilities.health.title'),
      items: t('services.analysis.capabilities.health.items') as string[],
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      icon: TrendingUp,
      title: t('services.analysis.capabilities.growth.title'),
      items: t('services.analysis.capabilities.growth.items') as string[],
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: Thermometer,
      title: t('services.analysis.capabilities.environment.title'),
      items: t('services.analysis.capabilities.environment.items') as string[],
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
    },
    {
      icon: Bug,
      title: t('services.analysis.capabilities.pests.title'),
      items: t('services.analysis.capabilities.pests.items') as string[],
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
    },
  ];

  const outputs = t('services.analysis.outputs.items') as string[];

  return (
    <section id="analysis" className="section-padding bg-muted/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Visual */}
          <AnimatedSection className="relative order-2 lg:order-1">
            <div className="relative w-full h-80 lg:h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br from-purple-500/20 via-background to-blue-500/20 shadow-2xl border border-border/20 group">
              {/* AI Brain visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-40 h-40 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-500/30 group-hover:scale-110 transition-all duration-500">
                    <Brain className="w-20 h-20 text-purple-500 group-hover:text-blue-500 transition-colors duration-500" />
                  </div>
                  
                  {/* Neural network lines */}
                  <div className="absolute inset-0 rounded-full border-2 border-purple-500/50 animate-spin" style={{ animationDuration: '20s' }}></div>
                  <div className="absolute inset-8 rounded-full border border-blue-500/40 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                </div>
              </div>
              
              {/* Analysis indicators */}
              <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-border/20 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4 text-purple-500" />
                  <p className="text-xs font-medium text-purple-600">NDVI: 0.85</p>
                </div>
              </div>
              
              <div className="absolute bottom-6 right-6 bg-background/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-border/20 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Droplets className="w-4 h-4 text-blue-500" />
                  <p className="text-xs font-medium text-blue-600">Stress: Faible</p>
                </div>
              </div>

              <div className="absolute top-1/2 left-6 bg-background/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-border/20 shadow-lg">
                <div className="flex items-center space-x-2">
                  <BarChart3 className="w-4 h-4 text-green-500" />
                  <p className="text-xs font-medium text-green-600">Santé: 92%</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 text-purple-600 rounded-full text-sm font-medium border border-purple-500/20">
                <Brain className="w-4 h-4 mr-2" />
                Service #2
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                {t('services.analysis.title')}
              </h2>
              
              <h3 className="text-xl sm:text-2xl text-purple-600 font-semibold">
                {t('services.analysis.subtitle')}
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('services.analysis.description')}
              </p>
            </div>

            {/* Problem/Solution */}
            <div className="space-y-4">
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">⚠️ Le Défi</h4>
                <p className="text-sm text-red-600 dark:text-red-300">
                  {t('services.analysis.problem')}
                </p>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl">
                <h4 className="font-semibold text-purple-700 dark:text-purple-400 mb-2">🧠 Notre IA</h4>
                <p className="text-sm text-purple-600 dark:text-purple-300">
                  {t('services.analysis.solution')}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Capabilities Grid */}
        <AnimatedSection delay={0.4} className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Capacités d'Analyse Avancées
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={capability.title}
                className="card group hover:scale-105 transition-all duration-500"
              >
                <div className="flex items-start space-x-4">
                  <div className={`${capability.bgColor} ${capability.color} p-3 rounded-xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <capability.icon className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {capability.title}
                    </h4>
                    
                    <ul className="space-y-2">
                      {capability.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <p className="text-sm text-muted-foreground">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Outputs */}
        <AnimatedSection delay={0.6}>
          <div className="bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5 border border-purple-500/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              {t('services.analysis.outputs.title')}
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {outputs.map((output, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-background/50 rounded-lg border border-border/20">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">{output}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}