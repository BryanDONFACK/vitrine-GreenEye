export type Language = 'fr' | 'en';

export const translations = {
  fr: {
    navigation: {
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      contact: 'Contact',
      team: 'Équipe',
      impact: 'Impact',
    },
    services: {
      title: 'Nos Services',
      subtitle: 'Des fonctionnalités révolutionnaires pour transformer votre agriculture',
      description: 'Découvrez comment Green Eye révolutionne l\'agriculture africaine avec des technologies de pointe accessibles à tous.',
      
      mapping: {
        title: 'Cartographie Automatique',
        subtitle: 'Votre terrain comme vous ne l\'avez jamais vu',
        description: 'Notre drone autonome cartographie vos parcelles avec une précision centimétrique, révélant chaque détail de votre exploitation.',
        problem: 'Vous cultivez à l\'aveugle ? 70% des agriculteurs ne connaissent pas la topographie exacte de leurs terres.',
        solution: 'Green Eye cartographie automatiquement vos parcelles en moins de 30 minutes par hectare.',
        features: {
          precision: {
            title: 'Précision Centimétrique',
            description: 'Cartographie avec une précision de 2-5cm grâce à nos capteurs GPS RTK'
          },
          speed: {
            title: 'Rapidité Inégalée',
            description: 'Cartographie complète en 30 minutes par hectare, 10x plus rapide qu\'à pied'
          },
          automation: {
            title: 'Totalement Automatique',
            description: 'Planification de vol automatique, aucune expertise pilotage requise'
          },
          weather: {
            title: 'Résistant aux Intempéries',
            description: 'Fonctionne par temps nuageux, adapté au climat tropical africain'
          }
        },
        benefits: {
          title: 'Avantages Concrets',
          items: [
            'Optimisation de l\'irrigation selon la topographie',
            'Calcul précis des superficies pour les assurances',
            'Détection des zones d\'érosion avant qu\'elles s\'aggravent',
            'Planification optimale des cultures selon le relief'
          ]
        }
      },
      
      analysis: {
        title: 'Analyse Spatiale Intelligente',
        subtitle: 'L\'IA qui comprend vos cultures mieux que vous',
        description: 'Notre intelligence artificielle analyse chaque pixel de vos cultures pour détecter problèmes et opportunités invisibles à l\'œil nu.',
        problem: 'Les maladies détectées trop tard coûtent 40% de rendement en moyenne. Et si vous pouviez les voir 2 semaines à l\'avance ?',
        solution: 'Notre IA analyse 15 paramètres différents pour un diagnostic précoce et précis.',
        
        capabilities: {
          health: {
            title: 'État de Santé des Cultures',
            items: [
              'Indice de végétation NDVI en temps réel',
              'Détection précoce des maladies (2-3 semaines avant symptômes visibles)',
              'Identification des carences nutritionnelles par zone',
              'Cartographie du stress hydrique'
            ]
          },
          growth: {
            title: 'Analyse de Croissance',
            items: [
              'Suivi de la biomasse et densité végétale',
              'Prédiction des rendements par parcelle',
              'Identification des zones de sous-performance',
              'Comparaison avec les standards régionaux'
            ]
          },
          environment: {
            title: 'Conditions Environnementales',
            items: [
              'Cartographie de l\'humidité du sol',
              'Analyse de la température de surface',
              'Détection des zones d\'accumulation d\'eau',
              'Évaluation de l\'exposition solaire par zone'
            ]
          },
          pests: {
            title: 'Détection des Nuisibles',
            items: [
              'Identification automatique des foyers d\'infestation',
              'Cartographie de la propagation des maladies',
              'Détection des dégâts d\'insectes par analyse spectrale',
              'Alerte précoce pour intervention ciblée'
            ]
          }
        },
        
        outputs: {
          title: 'Rapports Générés',
          items: [
            'Cartes de prescription pour fertilisation variable',
            'Zones prioritaires d\'intervention',
            'Prévisions de rendement par secteur',
            'Recommandations d\'actions correctives',
            'Historique d\'évolution des cultures',
            'Comparaisons inter-saisonnières'
          ]
        }
      },
      
      management: {
        title: 'Gestion Intelligente des Cultures',
        subtitle: 'Votre exploitation pilotée comme une entreprise moderne',
        description: 'Transformez la gestion de vos cultures avec notre plateforme intuitive qui centralise toutes vos données agricoles.',
        problem: 'Vous perdez du temps et de l\'argent avec des carnets papier et des estimations approximatives ?',
        solution: 'Green Eye digitalise et optimise toute votre gestion agricole en temps réel.',
        
        features: {
          inventory: {
            title: 'Inventaire Intelligent',
            description: 'Suivi automatique des stocks d\'intrants, semences, et récoltes avec alertes de réapprovisionnement'
          },
          planning: {
            title: 'Planification Optimisée',
            description: 'Calendrier cultural intelligent basé sur les données météo et l\'historique de vos parcelles'
          },
          costs: {
            title: 'Contrôle des Coûts',
            description: 'Suivi précis des coûts par hectare et par culture avec analyse de rentabilité'
          },
          traceability: {
            title: 'Traçabilité Complète',
            description: 'Historique détaillé de toutes les interventions pour certification et qualité'
          },
          alerts: {
            title: 'Alertes Intelligentes',
            description: 'Notifications automatiques pour irrigation, traitements, et interventions urgentes'
          },
          reports: {
            title: 'Rapports Automatisés',
            description: 'Génération automatique de rapports pour banques, assurances, et coopératives'
          }
        },
        
        advantages: {
          title: 'Pourquoi Choisir Green Eye ?',
          items: [
            'Interface simple utilisable même sans formation technique',
            'Fonctionne offline - pas besoin d\'internet permanent',
            'Données sécurisées et sauvegardées automatiquement',
            'Support technique en français et langues locales',
            'Prix adapté aux budgets des agriculteurs africains',
            'Formation et accompagnement inclus'
          ]
        }
      },
      
      cta: {
        title: 'Prêt à Révolutionner Votre Agriculture ?',
        subtitle: 'Rejoignez les agriculteurs qui ont déjà fait le choix de l\'innovation',
        description: 'Demandez une démonstration gratuite et découvrez comment Green Eye peut transformer votre exploitation.',
        demo: 'Demander une démo',
        contact: 'Nous contacter'
      }
    },
    hero: {
      title: 'Voir mieux pour',
      subtitle: 'cultiver durablement',
      description: 'Green Eye offre aux agriculteurs africains des solutions technologiques simples, abordables et adaptées pour mieux voir, comprendre et anticiper l\'état de leurs cultures.',
      cta: 'Découvrir Green Eye',
      watchDemo: 'Voir la démo',
      badge: 'AgriTech - Agriculture de précision',
    },
    features: {
      title: 'La Solution Green Eye',
      subtitle: 'Une solution low-cost, modulaire et automatisée',
      drone: {
        title: 'Drone Équipé de Capteurs',
        description: 'Cartographie aérienne automatisée de vos parcelles avec analyse en temps réel des cultures.',
      },
      sensors: {
        title: 'Capteurs Environnementaux',
        description: 'GPS, météo, baromètre pour une surveillance complète de l\'environnement agricole.',
      },
      ai: {
        title: 'IA Agricole Avancée',
        description: 'Détection précoce des maladies, stress hydrique et anomalies pour une intervention rapide.',
      },
      interface: {
        title: 'Interface Intuitive',
        description: 'Application web et mobile simple, utilisable même sans connexion Internet.',
      },
    },
    problem: {
      title: 'Le Constat',
      subtitle: 'L\'agriculture camerounaise face aux défis',
      description: 'L\'agriculture représente 20% du PIB et emploie 60% de la population active au Cameroun. Pourtant, les rendements restent faibles face aux défis climatiques et au manque de technologies adaptées.',
      challenges: {
        yields: 'Rendements faibles',
        losses: 'Pertes post-récolte',
        technology: 'Manque de technologies',
        climate: 'Impacts climatiques',
      },
    },
    about: {
      title: 'À Propos de Green Eye',
      subtitle: 'Notre Mission',
      description: 'Nous transformons la donnée agricole en outil de décision simple et fiable pour les agriculteurs africains.',
      mission: 'Offrir aux agriculteurs africains des solutions technologiques simples, abordables et adaptées pour mieux voir, comprendre et anticiper l\'état de leurs cultures.',
      values: {
        local: 'Adaptation locale',
        localDesc: 'Solutions robustes, réparables avec pièces locales, utilisables offline',
        unified: 'Unification',
        unifiedDesc: 'Acquisition, analyse et restitution intégrées dans un seul écosystème',
        scalable: 'Évolutivité',
        scalableDesc: 'De la capture & cartographie vers l\'IA prédictive et l\'écosystème continental',
      },
      stats: {
        gdp: '20% du PIB camerounais',
        workforce: '60% de la population active',
        cost: 'Réduction des coûts',
        yield: 'Amélioration des rendements',
      },
    },
    impact: {
      title: 'Impact Attendu',
      subtitle: 'Des résultats mesurables pour l\'agriculture africaine',
      description: 'Green Eye vise à transformer l\'agriculture africaine avec des impacts concrets et mesurables.',
      metrics: {
        cost: {
          value: '25-30%',
          label: 'Réduction des coûts d\'intrants',
        },
        yield: {
          value: '15-20%',
          label: 'Amélioration des rendements',
        },
        labor: {
          value: '30%',
          label: 'Réduction main-d\'œuvre',
        },
        sustainability: {
          value: '100%',
          label: 'Agriculture durable',
        },
      },
    },
    roadmap: {
      title: 'Nos Perspectives',
      subtitle: 'Une vision à long terme pour l\'agriculture africaine',
      phases: {
        short: {
          title: 'Court terme (0-2 ans)',
          description: 'Finaliser prototype, fiabiliser matériel, interface fluide',
        },
        medium: {
          title: 'Moyen terme (2-10 ans)',
          description: 'IA prédictive, interopérabilité IoT, automatisation',
        },
        long: {
          title: 'Long terme (+10 ans)',
          description: 'Plateforme panafricaine, réseau de drones coopératifs, cloud continental',
        },
      },
    },
    team: {
      title: 'Notre Équipe',
      subtitle: 'Une équipe pluridisciplinaire',
      description: 'Ingénierie, sciences, data, stratégie, avec une vision commune : mettre la technologie au service des agriculteurs africains.',
    },
    contact: {
      title: 'Rejoignez-nous',
      subtitle: 'Ensemble, faisons de Green Eye un levier d\'innovation agricole',
      description: 'Nous recherchons des partenaires stratégiques, investisseurs, agriculteurs pilotes et institutions pour révolutionner l\'agriculture africaine.',
      form: {
        name: 'Nom complet',
        email: 'Adresse email',
        company: 'Organisation',
        phone: 'Téléphone',
        message: 'Votre message',
        type: 'Vous êtes',
        types: {
          investor: 'Investisseur',
          partner: 'Partenaire stratégique',
          farmer: 'Agriculteur',
          institution: 'Institution/ONG',
          other: 'Autre',
        },
        consent: 'J\'accepte d\'être contacté par Green Eye',
        submit: 'Envoyer le message',
        sending: 'Envoi en cours...',
        success: 'Message envoyé avec succès !',
        error: 'Erreur lors de l\'envoi. Réessayez.',
      },
      info: {
        address: 'Douala, Cameroun',
        email: 'atlas020925@gmail.com',
        phone: '+237 693 972 173',
        phone2: '+237 657 988 804',
      },
      needs: {
        title: 'Nos Besoins Actuels',
        financial: 'Financiers',
        financialDesc: 'Industrialisation du prototype, version commercialisable',
        technical: 'Techniques',
        technicalDesc: 'Expertise IA, électronique embarquée, SIG',
        human: 'Humains & institutionnels',
        humanDesc: 'Partenariats universités, coopératives, ONG',
      },
    },
    footer: {
      description: 'L\'avenir de l\'agriculture africaine commence aujourd\'hui avec Green Eye.',
      links: {
        company: 'Entreprise',
        privacy: 'Confidentialité',
        terms: 'Conditions',
        support: 'Support',
      },
      social: 'Suivez-nous',
      copyright: '© 2024 Green Eye. Tous droits réservés.',
    },
    common: {
      loading: 'Chargement...',
      error: 'Une erreur est survenue',
      retry: 'Réessayer',
      close: 'Fermer',
      back: 'Retour',
      learnMore: 'En savoir plus',
    },
  },
  en: {
    navigation: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      team: 'Team',
      impact: 'Impact',
    },
    services: {
      title: 'Our Services',
      subtitle: 'Revolutionary features to transform your agriculture',
      description: 'Discover how Green Eye revolutionizes African agriculture with cutting-edge technologies accessible to all.',
      
      mapping: {
        title: 'Automatic Mapping',
        subtitle: 'Your land like you\'ve never seen it',
        description: 'Our autonomous drone maps your plots with centimeter precision, revealing every detail of your farm.',
        problem: 'Are you farming blind? 70% of farmers don\'t know the exact topography of their land.',
        solution: 'Green Eye automatically maps your plots in less than 30 minutes per hectare.',
        features: {
          precision: {
            title: 'Centimeter Precision',
            description: 'Mapping with 2-5cm precision thanks to our RTK GPS sensors'
          },
          speed: {
            title: 'Unmatched Speed',
            description: 'Complete mapping in 30 minutes per hectare, 10x faster than on foot'
          },
          automation: {
            title: 'Fully Automatic',
            description: 'Automatic flight planning, no piloting expertise required'
          },
          weather: {
            title: 'Weather Resistant',
            description: 'Works in cloudy weather, adapted to African tropical climate'
          }
        },
        benefits: {
          title: 'Concrete Benefits',
          items: [
            'Irrigation optimization according to topography',
            'Precise area calculation for insurance',
            'Erosion zone detection before they worsen',
            'Optimal crop planning according to relief'
          ]
        }
      },
      
      analysis: {
        title: 'Intelligent Spatial Analysis',
        subtitle: 'AI that understands your crops better than you',
        description: 'Our artificial intelligence analyzes every pixel of your crops to detect problems and opportunities invisible to the naked eye.',
        problem: 'Diseases detected too late cost 40% yield on average. What if you could see them 2 weeks in advance?',
        solution: 'Our AI analyzes 15 different parameters for early and accurate diagnosis.',
        
        capabilities: {
          health: {
            title: 'Crop Health Status',
            items: [
              'Real-time NDVI vegetation index',
              'Early disease detection (2-3 weeks before visible symptoms)',
              'Nutritional deficiency identification by zone',
              'Water stress mapping'
            ]
          },
          growth: {
            title: 'Growth Analysis',
            items: [
              'Biomass and vegetation density monitoring',
              'Yield prediction by plot',
              'Under-performance zone identification',
              'Comparison with regional standards'
            ]
          },
          environment: {
            title: 'Environmental Conditions',
            items: [
              'Soil moisture mapping',
              'Surface temperature analysis',
              'Water accumulation zone detection',
              'Sun exposure assessment by zone'
            ]
          },
          pests: {
            title: 'Pest Detection',
            items: [
              'Automatic infestation hotspot identification',
              'Disease spread mapping',
              'Insect damage detection by spectral analysis',
              'Early warning for targeted intervention'
            ]
          }
        },
        
        outputs: {
          title: 'Generated Reports',
          items: [
            'Prescription maps for variable fertilization',
            'Priority intervention zones',
            'Yield forecasts by sector',
            'Corrective action recommendations',
            'Crop evolution history',
            'Inter-seasonal comparisons'
          ]
        }
      },
      
      management: {
        title: 'Intelligent Crop Management',
        subtitle: 'Your farm managed like a modern business',
        description: 'Transform your crop management with our intuitive platform that centralizes all your agricultural data.',
        problem: 'Are you losing time and money with paper notebooks and rough estimates?',
        solution: 'Green Eye digitalizes and optimizes all your agricultural management in real time.',
        
        features: {
          inventory: {
            title: 'Smart Inventory',
            description: 'Automatic tracking of input, seed, and harvest stocks with restocking alerts'
          },
          planning: {
            title: 'Optimized Planning',
            description: 'Intelligent crop calendar based on weather data and your plot history'
          },
          costs: {
            title: 'Cost Control',
            description: 'Precise cost tracking per hectare and per crop with profitability analysis'
          },
          traceability: {
            title: 'Complete Traceability',
            description: 'Detailed history of all interventions for certification and quality'
          },
          alerts: {
            title: 'Smart Alerts',
            description: 'Automatic notifications for irrigation, treatments, and urgent interventions'
          },
          reports: {
            title: 'Automated Reports',
            description: 'Automatic report generation for banks, insurance, and cooperatives'
          }
        },
        
        advantages: {
          title: 'Why Choose Green Eye?',
          items: [
            'Simple interface usable even without technical training',
            'Works offline - no need for permanent internet',
            'Data secured and automatically backed up',
            'Technical support in French and local languages',
            'Prices adapted to African farmers\' budgets',
            'Training and support included'
          ]
        }
      },
      
      cta: {
        title: 'Ready to Revolutionize Your Agriculture?',
        subtitle: 'Join farmers who have already chosen innovation',
        description: 'Request a free demonstration and discover how Green Eye can transform your farm.',
        demo: 'Request a demo',
        contact: 'Contact us'
      }
    },
    hero: {
      title: 'See better to',
      subtitle: 'cultivate sustainably',
      description: 'Green Eye offers African farmers simple, affordable and adapted technological solutions to better see, understand and anticipate the state of their crops.',
      cta: 'Discover Green Eye',
      watchDemo: 'Watch demo',
      badge: 'AgriTech - Precision Agriculture',
    },
    features: {
      title: 'The Green Eye Solution',
      subtitle: 'A low-cost, modular and automated solution',
      drone: {
        title: 'Sensor-Equipped Drone',
        description: 'Automated aerial mapping of your plots with real-time crop analysis.',
      },
      sensors: {
        title: 'Environmental Sensors',
        description: 'GPS, weather, barometer for complete agricultural environment monitoring.',
      },
      ai: {
        title: 'Advanced Agricultural AI',
        description: 'Early detection of diseases, water stress and anomalies for rapid intervention.',
      },
      interface: {
        title: 'Intuitive Interface',
        description: 'Simple web and mobile application, usable even without Internet connection.',
      },
    },
    problem: {
      title: 'The Challenge',
      subtitle: 'Cameroonian agriculture facing challenges',
      description: 'Agriculture represents 20% of GDP and employs 60% of the active population in Cameroon. Yet yields remain low in the face of climate challenges and lack of adapted technologies.',
      challenges: {
        yields: 'Low yields',
        losses: 'Post-harvest losses',
        technology: 'Lack of technology',
        climate: 'Climate impacts',
      },
    },
    about: {
      title: 'About Green Eye',
      subtitle: 'Our Mission',
      description: 'We transform agricultural data into simple and reliable decision-making tools for African farmers.',
      mission: 'Offer African farmers simple, affordable and adapted technological solutions to better see, understand and anticipate the state of their crops.',
      values: {
        local: 'Local Adaptation',
        localDesc: 'Robust solutions, repairable with local parts, usable offline',
        unified: 'Unification',
        unifiedDesc: 'Acquisition, analysis and restitution integrated in a single ecosystem',
        scalable: 'Scalability',
        scalableDesc: 'From capture & mapping to predictive AI and continental ecosystem',
      },
      stats: {
        gdp: '20% of Cameroonian GDP',
        workforce: '60% of active population',
        cost: 'Cost reduction',
        yield: 'Yield improvement',
      },
    },
    impact: {
      title: 'Expected Impact',
      subtitle: 'Measurable results for African agriculture',
      description: 'Green Eye aims to transform African agriculture with concrete and measurable impacts.',
      metrics: {
        cost: {
          value: '25-30%',
          label: 'Input cost reduction',
        },
        yield: {
          value: '15-20%',
          label: 'Yield improvement',
        },
        labor: {
          value: '30%',
          label: 'Labor reduction',
        },
        sustainability: {
          value: '100%',
          label: 'Sustainable agriculture',
        },
      },
    },
    roadmap: {
      title: 'Our Perspectives',
      subtitle: 'A long-term vision for African agriculture',
      phases: {
        short: {
          title: 'Short term (0-2 years)',
          description: 'Finalize prototype, make hardware reliable, fluid interface',
        },
        medium: {
          title: 'Medium term (2-10 years)',
          description: 'Predictive AI, IoT interoperability, automation',
        },
        long: {
          title: 'Long term (+10 years)',
          description: 'Pan-African platform, cooperative drone network, continental cloud',
        },
      },
    },
    team: {
      title: 'Our Team',
      subtitle: 'A multidisciplinary team',
      description: 'Engineering, science, data, strategy, with a common vision: putting technology at the service of African farmers.',
    },
    contact: {
      title: 'Join Us',
      subtitle: 'Together, let\'s make Green Eye a lever for agricultural innovation',
      description: 'We are looking for strategic partners, investors, pilot farmers and institutions to revolutionize African agriculture.',
      form: {
        name: 'Full name',
        email: 'Email address',
        company: 'Organization',
        phone: 'Phone',
        message: 'Your message',
        type: 'You are',
        types: {
          investor: 'Investor',
          partner: 'Strategic partner',
          farmer: 'Farmer',
          institution: 'Institution/NGO',
          other: 'Other',
        },
        consent: 'I agree to be contacted by Green Eye',
        submit: 'Send message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Error sending message. Please try again.',
      },
      info: {
        address: 'Douala, Cameroon',
        email: 'atlas020925@gmail.com',
        phone: '+237 693 972 173',
        phone2: '+237 657 988 804',
      },
      needs: {
        title: 'Our Current Needs',
        financial: 'Financial',
        financialDesc: 'Prototype industrialization, commercializable version',
        technical: 'Technical',
        technicalDesc: 'AI expertise, embedded electronics, GIS',
        human: 'Human & institutional',
        humanDesc: 'University, cooperative, NGO partnerships',
      },
    },
    footer: {
      description: 'The future of African agriculture starts today with Green Eye.',
      links: {
        company: 'Company',
        privacy: 'Privacy',
        terms: 'Terms',
        support: 'Support',
      },
      social: 'Follow us',
      copyright: '© 2024 Green Eye. All rights reserved.',
    },
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      retry: 'Try again',
      close: 'Close',
      back: 'Back',
      learnMore: 'Learn more',
    },
  },
} as const;

export type TranslationKey = keyof typeof translations.fr | `${keyof typeof translations.fr}.${string}`;