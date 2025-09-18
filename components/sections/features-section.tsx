'use client';

import React from 'react';
import { Bone as Drone, Gauge, Brain, Smartphone, Zap, Shield, Wifi, WifiOff } from 'lucide-react';
import { useLanguage } from '@/components/providers/language-provider';
import { AnimatedSection } from '@/components/ui/animated-section';

export function FeaturesSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Drone,
      title: t('features.drone.title'),
      description: t('features.drone.description'),
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      delay: 0,
    },
    {
      icon: Gauge,
      title: t('features.sensors.title'),
      description: t('features.sensors.description'),
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      delay: 0.1,
    },
    {
      icon: Brain,
      title: t('features.ai.title'),
      description: t('features.ai.description'),
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      delay: 0.2,
    },
    {
      icon: Smartphone,
      title: t('features.interface.title'),
      description: t('features.interface.description'),
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      delay: 0.3,
    },
  ];

  return (
    <section id="services" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Solution innovante
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('features.title')}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            {t('features.subtitle')}
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={feature.delay}>
              <div className="card group hover:scale-105 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-6">
                    <div className={`${feature.bgColor} ${feature.color} p-4 rounded-2xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <feature.icon className="w-8 h-8" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Animated border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Key advantages */}
        <AnimatedSection delay={0.4} className="text-center">
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4 group">
              <div className="flex items-center justify-center text-primary mb-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8" />
                </div>
              </div>
              <h4 className="font-semibold text-foreground">Robuste & Local</h4>
              <p className="text-sm text-muted-foreground">
                Réparable avec pièces locales, adapté au contexte africain
              </p>
            </div>
            
            <div className="space-y-4 group">
              <div className="flex items-center justify-center text-primary mb-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <WifiOff className="w-8 h-8" />
                </div>
              </div>
              <h4 className="font-semibold text-foreground">Fonctionne Offline</h4>
              <p className="text-sm text-muted-foreground">
                Utilisable même sans connexion Internet
              </p>
            </div>
            
            <div className="space-y-4 group">
              <div className="flex items-center justify-center text-primary mb-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8" />
                </div>
              </div>
              <h4 className="font-semibold text-foreground">Installation Rapide</h4>
              <p className="text-sm text-muted-foreground">
                Opérationnel en moins de 24h
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}