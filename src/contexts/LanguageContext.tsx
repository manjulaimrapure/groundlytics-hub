
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'es' | 'fr';

// Define translations interface
export interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

// Create the initial translations
export const translations: Translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.dashboard": "Dashboard",
    "nav.sensors": "Soil Sensors",
    "nav.analysis": "Data Analysis",
    "nav.alerts": "Alerts",
    "nav.farm": "Farm Management",
    "nav.users": "User Access",
    "nav.knowledge": "Soil Knowledge",
    "nav.contact": "Contact",
    "nav.login": "Login",
    
    // Common UI elements
    "ui.loading": "Loading...",
    "ui.error": "An error occurred",
    "ui.save": "Save",
    "ui.cancel": "Cancel",
    "ui.search": "Search",
    "ui.filter": "Filter",
    
    // Auth
    "auth.email": "Email",
    "auth.password": "Password",
    "auth.forgotPassword": "Forgot password?",
    "auth.rememberMe": "Remember me",
    "auth.signIn": "Sign in",
    "auth.createAccount": "Create an account",
    "auth.alreadyHaveAccount": "Already have an account?",
    "auth.fullName": "Full Name",
    "auth.enterInfo": "Enter your information to create your SoilSense account",
    "auth.createStrongPassword": "Create a strong password",
    "auth.passwordRequirement": "Password must be at least 8 characters long",
    "auth.agreeToTerms": "I agree to the",
    "auth.termsOfService": "Terms of Service",
    "auth.and": "and",
    "auth.privacyPolicy": "Privacy Policy",
    
    // Home page
    "home.hero.tagline": "Innovative Farming Technology",
    "home.hero.title": "Smart Soil Monitoring",
    "home.hero.description": "Enhance your crop yield with real-time soil monitoring and AI-driven insights.",
    "home.cta.viewDashboard": "View Dashboard",
    "home.cta.login": "Login",
    "home.features.title": "Key Features",
    "home.features.soilMonitoring": "Real-time Soil Monitoring",
    "home.features.soilMonitoringDesc": "Track soil health metrics in real-time with advanced IoT sensors.",
    "home.features.dataAnalytics": "Data Analytics",
    "home.features.dataAnalyticsDesc": "Get insights and predictions based on historical soil data.",
    "home.features.aiRecommendations": "AI Recommendations",
    "home.features.aiRecommendationsDesc": "Receive AI-driven suggestions for optimal crop yield.",
    "home.features.moistureManagement": "Moisture Management",
    "home.features.moistureManagementDesc": "Monitor and manage soil moisture levels for optimal plant growth.",
    "home.features.fieldMapping": "Field Mapping",
    "home.features.fieldMappingDesc": "Map your fields and track soil health across different areas.",
    "home.bottomCta.title": "Ready to Improve Your Crop Yield?",
    "home.bottomCta.description": "Join thousands of farmers who are already using our platform to optimize their farming practices.",
    "home.bottomCta.getStarted": "Get Started",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.dashboard": "Panel",
    "nav.sensors": "Sensores de Suelo",
    "nav.analysis": "Análisis de Datos",
    "nav.alerts": "Alertas",
    "nav.farm": "Gestión Agrícola",
    "nav.users": "Acceso de Usuarios",
    "nav.knowledge": "Conocimiento del Suelo",
    "nav.contact": "Contacto",
    "nav.login": "Iniciar Sesión",
    
    // Common UI elements
    "ui.loading": "Cargando...",
    "ui.error": "Ocurrió un error",
    "ui.save": "Guardar",
    "ui.cancel": "Cancelar",
    "ui.search": "Buscar",
    "ui.filter": "Filtrar",
    
    // Auth
    "auth.email": "Correo electrónico",
    "auth.password": "Contraseña",
    "auth.forgotPassword": "¿Olvidó su contraseña?",
    "auth.rememberMe": "Recordarme",
    "auth.signIn": "Iniciar sesión",
    "auth.createAccount": "Crear una cuenta",
    "auth.alreadyHaveAccount": "¿Ya tiene una cuenta?",
    "auth.fullName": "Nombre completo",
    "auth.enterInfo": "Ingrese su información para crear su cuenta SoilSense",
    "auth.createStrongPassword": "Cree una contraseña segura",
    "auth.passwordRequirement": "La contraseña debe tener al menos 8 caracteres",
    "auth.agreeToTerms": "Estoy de acuerdo con los",
    "auth.termsOfService": "Términos de Servicio",
    "auth.and": "y",
    "auth.privacyPolicy": "Política de Privacidad",
    
    // Home page
    "home.hero.tagline": "Tecnología Agrícola Innovadora",
    "home.hero.title": "Monitoreo Inteligente del Suelo",
    "home.hero.description": "Mejore el rendimiento de sus cultivos con monitoreo del suelo en tiempo real y análisis impulsados por IA.",
    "home.cta.viewDashboard": "Ver Panel",
    "home.cta.login": "Iniciar Sesión",
    "home.features.title": "Características Principales",
    "home.features.soilMonitoring": "Monitoreo de Suelo en Tiempo Real",
    "home.features.soilMonitoringDesc": "Monitoree métricas de salud del suelo en tiempo real con sensores IoT avanzados.",
    "home.features.dataAnalytics": "Análisis de Datos",
    "home.features.dataAnalyticsDesc": "Obtenga información y predicciones basadas en datos históricos del suelo.",
    "home.features.aiRecommendations": "Recomendaciones de IA",
    "home.features.aiRecommendationsDesc": "Reciba sugerencias basadas en IA para un rendimiento óptimo de los cultivos.",
    "home.features.moistureManagement": "Gestión de Humedad",
    "home.features.moistureManagementDesc": "Monitoree y gestione los niveles de humedad del suelo para un crecimiento óptimo de las plantas.",
    "home.features.fieldMapping": "Mapeo de Campo",
    "home.features.fieldMappingDesc": "Mapee sus campos y monitoree la salud del suelo en diferentes áreas.",
    "home.bottomCta.title": "¿Listo para Mejorar el Rendimiento de sus Cultivos?",
    "home.bottomCta.description": "Únase a miles de agricultores que ya están utilizando nuestra plataforma para optimizar sus prácticas agrícolas.",
    "home.bottomCta.getStarted": "Comenzar",
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.dashboard": "Tableau de Bord",
    "nav.sensors": "Capteurs de Sol",
    "nav.analysis": "Analyse de Données",
    "nav.alerts": "Alertes",
    "nav.farm": "Gestion Agricole",
    "nav.users": "Accès Utilisateurs",
    "nav.knowledge": "Connaissance du Sol",
    "nav.contact": "Contact",
    "nav.login": "Connexion",
    
    // Common UI elements
    "ui.loading": "Chargement...",
    "ui.error": "Une erreur est survenue",
    "ui.save": "Enregistrer",
    "ui.cancel": "Annuler",
    "ui.search": "Rechercher",
    "ui.filter": "Filtrer",
    
    // Auth
    "auth.email": "Email",
    "auth.password": "Mot de passe",
    "auth.forgotPassword": "Mot de passe oublié ?",
    "auth.rememberMe": "Se souvenir de moi",
    "auth.signIn": "Se connecter",
    "auth.createAccount": "Créer un compte",
    "auth.alreadyHaveAccount": "Vous avez déjà un compte ?",
    "auth.fullName": "Nom complet",
    "auth.enterInfo": "Entrez vos informations pour créer votre compte SoilSense",
    "auth.createStrongPassword": "Créez un mot de passe fort",
    "auth.passwordRequirement": "Le mot de passe doit comporter au moins 8 caractères",
    "auth.agreeToTerms": "J'accepte les",
    "auth.termsOfService": "Conditions d'utilisation",
    "auth.and": "et",
    "auth.privacyPolicy": "Politique de confidentialité",
    
    // Home page
    "home.hero.tagline": "Technologie Agricole Innovante",
    "home.hero.title": "Surveillance Intelligente du Sol",
    "home.hero.description": "Améliorez votre rendement agricole avec une surveillance du sol en temps réel et des analyses basées sur l'IA.",
    "home.cta.viewDashboard": "Voir le Tableau de Bord",
    "home.cta.login": "Connexion",
    "home.features.title": "Fonctionnalités Clés",
    "home.features.soilMonitoring": "Surveillance du Sol en Temps Réel",
    "home.features.soilMonitoringDesc": "Suivez les indicateurs de santé du sol en temps réel avec des capteurs IoT avancés.",
    "home.features.dataAnalytics": "Analyse de Données",
    "home.features.dataAnalyticsDesc": "Obtenez des informations et des prédictions basées sur les données historiques du sol.",
    "home.features.aiRecommendations": "Recommandations IA",
    "home.features.aiRecommendationsDesc": "Recevez des suggestions basées sur l'IA pour un rendement optimal des cultures.",
    "home.features.moistureManagement": "Gestion de l'Humidité",
    "home.features.moistureManagementDesc": "Surveillez et gérez les niveaux d'humidité du sol pour une croissance optimale des plantes.",
    "home.features.fieldMapping": "Cartographie des Champs",
    "home.features.fieldMappingDesc": "Cartographiez vos champs et suivez la santé du sol dans différentes zones.",
    "home.bottomCta.title": "Prêt à Améliorer votre Rendement Agricole ?",
    "home.bottomCta.description": "Rejoignez des milliers d'agriculteurs qui utilisent déjà notre plateforme pour optimiser leurs pratiques agricoles.",
    "home.bottomCta.getStarted": "Commencer",
  }
};

// Create the language context
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const defaultLanguageContext: LanguageContextType = {
  language: 'en',
  setLanguage: () => {},
  t: () => '',
};

export const LanguageContext = createContext<LanguageContextType>(defaultLanguageContext);

// Create language provider component
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Translation function
  const t = (key: string): string => {
    if (translations[language] && translations[language][key]) {
      return translations[language][key];
    }
    
    // Fallback to English if translation doesn't exist
    if (translations['en'] && translations['en'][key]) {
      return translations['en'][key];
    }
    
    // Return the key if no translation found
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using translations
export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
