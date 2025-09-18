'use client';

import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle, Users, Building, Tractor, University } from 'lucide-react';
import { useLanguage } from '@/components/providers/language-provider';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/animated-section';
import { validateEmail } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  type: string;
  consent: boolean;
}

interface FormErrors {
  [key: string]: string;
}

export function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    type: '',
    consent: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    }

    if (!formData.consent) {
      newErrors.consent = 'Vous devez accepter d\'être contacté';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        type: '',
        consent: false,
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: t('contact.info.address'),
      value: 'Douala, Cameroun',
    },
    {
      icon: Mail,
      label: t('contact.info.email'),
      value: 'atlas020925@gmail.com',
    },
    {
      icon: Phone,
      label: t('contact.info.phone'),
      value: '+237 693 972 173',
    },
  ];

  const needs = [
    {
      icon: Building,
      title: t('contact.needs.financial'),
      description: t('contact.needs.financialDesc'),
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      icon: Users,
      title: t('contact.needs.technical'),
      description: t('contact.needs.technicalDesc'),
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: University,
      title: t('contact.needs.human'),
      description: t('contact.needs.humanDesc'),
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
  ];

  const userTypes = [
    { value: 'investor', label: t('contact.form.types.investor'), icon: Building },
    { value: 'partner', label: t('contact.form.types.partner'), icon: Users },
    { value: 'farmer', label: t('contact.form.types.farmer'), icon: Tractor },
    { value: 'institution', label: t('contact.form.types.institution'), icon: University },
    { value: 'other', label: t('contact.form.types.other'), icon: Users },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-muted/30 to-background">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 mb-6">
            <Users className="w-4 h-4 mr-2" />
            Rejoignez l'aventure
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('contact.title')}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance mb-8">
            {t('contact.subtitle')}
          </p>

          <div className="bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 border border-primary/10 rounded-2xl p-6 max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground">
              {t('contact.description')}
            </p>
          </div>
        </AnimatedSection>

        {/* Needs Section */}
        <AnimatedSection className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            {t('contact.needs.title')}
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {needs.map((need, index) => (
              <div key={need.title} className="card group hover:scale-105 transition-all duration-300">
                <div className={`${need.bgColor} ${need.color} p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <need.icon className="w-6 h-6" />
                </div>
                
                <h4 className="font-semibold text-foreground mb-2">{need.title}</h4>
                <p className="text-sm text-muted-foreground">{need.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <AnimatedSection>
            <div className="card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.form.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                        errors.name ? 'border-error' : 'border-border'
                      }`}
                      placeholder="Votre nom complet"
                    />
                    {errors.name && (
                      <p className="text-error text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                        errors.email ? 'border-error' : 'border-border'
                      }`}
                      placeholder="votre@email.com"
                    />
                    {errors.email && (
                      <p className="text-error text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.form.company')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Nom de votre organisation"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.form.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="+237 6XX XX XX XX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.type')}
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    <option value="">Sélectionnez votre profil</option>
                    {userTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none ${
                      errors.message ? 'border-error' : 'border-border'
                    }`}
                    placeholder="Décrivez votre intérêt pour Green Eye, vos besoins ou comment vous souhaitez contribuer..."
                  />
                  {errors.message && (
                    <p className="text-error text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="w-4 h-4 text-primary border-border rounded focus:ring-primary mt-1"
                  />
                  <label htmlFor="consent" className="text-sm text-muted-foreground flex-1">
                    {t('contact.form.consent')}
                  </label>
                </div>
                {errors.consent && (
                  <p className="text-error text-sm flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.consent}
                  </p>
                )}

                {/* Submit Status */}
                {submitStatus === 'success' && (
                  <div className="flex items-center space-x-2 text-success">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">{t('contact.form.success')}</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center space-x-2 text-error">
                    <AlertCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">{t('contact.form.error')}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" />
                      {t('contact.form.sending')}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {t('contact.form.submit')}
                    </>
                  )}
                </Button>
              </form>
            </div>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection delay={0.2} className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start space-x-4 group">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{info.label}</h4>
                    <p className="text-muted-foreground">{info.value}</p>
                    {info.label === t('contact.info.phone') && (
                      <p className="text-muted-foreground text-sm mt-1">
                        {t('contact.info.phone2')}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Response Time */}
            <div className="card">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-success/10 text-success rounded-lg">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-medium text-foreground">Réponse rapide</h5>
                  <p className="text-sm text-muted-foreground">
                    Nous répondons en moins de 24h
                  </p>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="card bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 border-primary/10">
              <h4 className="font-semibold text-foreground mb-4">
                Ensemble, révolutionnons l'agriculture africaine
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Rejoignez Green Eye dans sa mission de démocratisation de l'agriculture de précision en Afrique.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs border border-primary/20">
                  Innovation
                </span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs border border-secondary/20">
                  Impact social
                </span>
                <span className="px-3 py-1 bg-success/10 text-success rounded-full text-xs border border-success/20">
                  Durabilité
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}