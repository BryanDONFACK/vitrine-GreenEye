'use client';

import React from 'react';
import { Smartphone, Package, Calendar, DollarSign, FileText, Bell } from 'lucide-react';
import { useLanguage } from '@/components/providers/language-provider';
import { AnimatedSection } from '@/components/ui/animated-section';

export function ManagementService() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Package,
      title: t('services.management.features.inventory.title'),
      description: t('services.management.features.inventory.description'),
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: Calendar,
      title: t('services.management.features.planning.title'),
      description: t('services.management.features.planning.description'),
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      icon: DollarSign,
      title: t('services.management.features.costs.title'),
      description: t('services.management.features.costs.description'),
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
    },
    {
      icon: FileText,
      title: t('services.management.features.traceability.title'),
      description: t('services.management.features.traceability.description'),
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      icon: Bell,
      title: t('services.management.features.alerts.title'),
      description: t('services.management.features.alerts.description'),
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
    },
    {
      icon: FileText,
      title: t('services.management.features.reports.title'),
      description: t('services.management.features.reports.description'),
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-500/10',
    },
  ];

  const advantages = t('services.management.advantages.items') as string[];

  return (
    <section id="management" className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <AnimatedSection className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-green-500/10 text-green-600 rounded-full text-sm font-medium border border-green-500/20">
                <Smartphone className="w-4 h-4 mr-2" />
                Service #3
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                {t('services.management.title')}
              </h2>
              
              <h3 className="text-xl sm:text-2xl text-green-600 font-semibold">
                {t('services.management.subtitle')}
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('services.management.description')}
              </p>
            </div>

            {/* Problem/Solution */}
            <div className="space-y-4">
              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl">
                <h4 className="font-semibold text-orange-700 dark:text-orange-400 mb-2">📝 Problème Actuel</h4>
                <p className="text-sm text-orange-600 dark:text-orange-300">
                  {t('services.management.problem')}
                </p>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">📱 Notre Plateforme</h4>
                <p className="text-sm text-green-600 dark:text-green-300">
                  {t('services.management.solution')}
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Visual */}
          <AnimatedSection delay={0.2} className="relative">
            <div className="relative w-full h-80 lg:h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br from-green-500/20 via-background to-blue-500/20 shadow-2xl border border-border/20 group">
              {/* Mobile interface mockup */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-32 h-56 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl flex flex-col items-center justify-center backdrop-blur-sm border border-green-500/30 group-hover:scale-110 transition-all duration-500">
                    <Smartphone className="w-16 h-16 text-green-500 group-hover:text-blue-500 transition-colors duration-500 mb-4" />
                    
                    {/* Mock interface elements */}
                    <div className="space-y-2 w-full px-4">
                      <div className="h-2 bg-green-500/30 rounded-full"></div>
                      <div className="h-2 bg-blue-500/30 rounded-full w-3/4"></div>
                      <div className="h-2 bg-purple-500/30 rounded-full w-1/2"></div>
                    </div>
                  </div>
                  
                  {/* Floating notifications */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
                    <Bell className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Feature indicators */}
              <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-border/20 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Package className="w-4 h-4 text-green-500" />
                  <p className="text-xs font-medium text-green-600">Stock: OK</p>
                </div>
              </div>
              
              <div className="absolute bottom-6 right-6 bg-background/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-border/20 shadow-lg">
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-4 h-4 text-blue-500" />
                  <p className="text-xs font-medium text-blue-600">Coûts: -25%</p>
                </div>
              </div>

              <div className="absolute top-1/2 right-6 bg-background/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-border/20 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-purple-500" />
                  <p className="text-xs font-medium text-purple-600">Planning: Auto</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Features Grid */}
        <AnimatedSection delay={0.4} className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Fonctionnalités de Gestion Complètes
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="card group hover:scale-105 transition-all duration-500"
              >
                <div className={`${feature.bgColor} ${feature.color} p-3 rounded-xl mb-4 w-fit group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
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

        {/* Advantages */}
        <AnimatedSection delay={0.6}>
          <div className="bg-gradient-to-r from-green-500/5 via-transparent to-blue-500/5 border border-green-500/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              {t('services.management.advantages.title')}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-background/50 rounded-lg border border-border/20">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex-shrink-0 mt-2"></div>
                  <p className="text-sm text-muted-foreground">{advantage}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}