'use client';

import React from 'react';
import { ArrowRight, Play, Users, Zap } from 'lucide-react';
import { useLanguage } from '@/components/providers/language-provider';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';

export function ServicesCTA() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container">
        <AnimatedSection className="text-center space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 backdrop-blur-sm">
              <Zap className="w-4 h-4 mr-2" />
              Prêt à transformer votre agriculture ?
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              {t('services.cta.title')}
            </h2>
            
            <h3 className="text-xl sm:text-2xl text-primary font-semibold">
              {t('services.cta.subtitle')}
            </h3>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
              {t('services.cta.description')}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="btn-primary group relative overflow-hidden"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 flex items-center">
                {t('services.cta.demo')}
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            
            <Button 
              variant="outline"
              className="btn-secondary group relative"
            >
              <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
              {t('services.cta.contact')}
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid sm:grid-cols-3 gap-8 max-w-2xl mx-auto pt-8">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">100%</div>
              <p className="text-sm text-muted-foreground">Solutions testées</p>
            </div>
            
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">24h</div>
              <p className="text-sm text-muted-foreground">Installation rapide</p>
            </div>
            
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">0€</div>
              <p className="text-sm text-muted-foreground">Démonstration gratuite</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}