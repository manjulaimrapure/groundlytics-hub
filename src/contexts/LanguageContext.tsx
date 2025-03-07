
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'mr' | 'hi';

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
    "ui.dateRange": "Date Range",
    "ui.exportData": "Export Data",
    "ui.refresh": "Refresh Data",
    "ui.viewDetails": "View Details",
    "ui.viewMap": "View Map",
    "ui.edit": "Edit",
    "ui.delete": "Delete",
    "ui.addNew": "Add New",
    "ui.status": "Status",
    "ui.actions": "Actions",
    "ui.online": "Online",
    "ui.offline": "Offline",
    "ui.active": "Active",
    "ui.inactive": "Inactive",
    "ui.settings": "Settings",
    "ui.calibrate": "Calibrate",
    "ui.viewData": "View Data",
    "ui.lastUpdated": "Last updated",
    "ui.tryAgain": "Try again",
    "ui.comingSoon": "Coming Soon",
    "ui.featureComingSoon": "Feature Coming Soon",
    "ui.getStarted": "Get Started",

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
    "auth.resetPassword": "Reset your password",
    "auth.resetPasswordDesc": "Enter your email address and we'll send you a link to reset your password",
    "auth.sendResetLink": "Send Reset Link",
    "auth.checkEmail": "Check your email for a reset link. It will expire in 1 hour.",
    "auth.tryAnotherEmail": "Try another email",
    "auth.backToLogin": "Back to login",
    
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

    // Dashboard page
    "dashboard.title": "Soil Monitoring Dashboard",
    "dashboard.soilMoisture": "Soil Moisture",
    "dashboard.temperature": "Temperature",
    "dashboard.npkLevels": "NPK Levels",
    "dashboard.phLevel": "pH Level",
    "dashboard.currentMoisture": "Current moisture level in top soil layer",
    "dashboard.ambientTemp": "Ambient temperature at soil level",
    "dashboard.nutrientBalance": "Nitrogen, Phosphorus, Potassium balance",
    "dashboard.soilAcidity": "Soil acidity measurement",
    "dashboard.optimal": "Optimal",
    "dashboard.normal": "Normal",
    "dashboard.balanced": "Balanced",
    "dashboard.ideal": "Ideal",
    "dashboard.nutrientTrends": "Soil Nutrient Trends",
    "dashboard.soilComposition": "Soil Composition",
    "dashboard.moistureTrends": "Soil Moisture Trends",
    "dashboard.recommendationsTitle": "AI Recommendations",
    "dashboard.weatherForecast": "Weather Forecast",
    "dashboard.today": "Today",
    "dashboard.tomorrow": "Tomorrow",
    "dashboard.sunny": "Sunny",
    "dashboard.lightRain": "Light Rain",
    "dashboard.increaseWatering": "Increase Watering",
    "dashboard.wateringDesc": "Southern field moisture levels dropping below optimal",
    "dashboard.applyNitrogen": "Apply Nitrogen",
    "dashboard.nitrogenDesc": "Western plots showing signs of nitrogen deficiency",
    "dashboard.monitorPh": "Monitor pH Levels",
    "dashboard.phDesc": "pH trending upward in northeastern section",
    "dashboard.highPriority": "High",
    "dashboard.mediumPriority": "Medium",
    "dashboard.lowPriority": "Low",

    // Sensors page
    "sensors.title": "Sensor Management",
    "sensors.addSensor": "Add Sensor",
    "sensors.listView": "List View",
    "sensors.mapView": "Map View",
    "sensors.id": "ID",
    "sensors.sensorName": "Sensor Name",
    "sensors.type": "Type",
    "sensors.battery": "Battery",
    "sensors.location": "Location",
    "sensors.status": "Status",
    "sensors.mapComingSoon": "Interactive Map Coming Soon",
    "sensors.mapComingSoonDesc": "Our interactive map feature will let you visualize all your sensors on your fields and get real-time data with just a click.",
    "sensors.moistureType": "Moisture & pH",
    "sensors.temperatureType": "Temperature & NPK",
    "sensors.completeType": "Complete (All Metrics)",
    "sensors.moistureTempType": "Moisture & Temperature",
    "sensors.sensorAddDesc": "Adding new sensors will be available in the next update",

    // Analysis page
    "analysis.title": "Data Analysis & Recommendations",
    "analysis.nutrientTrends": "Soil Nutrient Trends",
    "analysis.soilComposition": "Soil Composition",
    "analysis.moistureTrend": "Soil Moisture Trend",
    "analysis.aiRecommendations": "AI Recommendations",
    "analysis.nitrogen": "Nitrogen",
    "analysis.phosphorus": "Phosphorus",
    "analysis.potassium": "Potassium",
    "analysis.clay": "Clay",
    "analysis.silt": "Silt",
    "analysis.sand": "Sand",
    "analysis.moisturePercent": "Moisture %",
    "analysis.increaseNitrogen": "Increase Nitrogen Application",
    "analysis.nitrogenLevels": "Soil analysis shows nitrogen levels below optimal range for corn growth stage",
    "analysis.adjustIrrigation": "Adjust Irrigation Schedule",
    "analysis.moistureTrends": "Recent moisture trends indicate potential for water stress during midday hours",
    "analysis.monitorPh": "Monitor pH in North Fields",
    "analysis.phLevels": "pH levels trending towards acidity which may impact nutrient availability",
    "analysis.impact": "Impact",
    "analysis.trend": "Trend",
    "analysis.increasing": "Increasing",
    "analysis.decreasing": "Decreasing",
    "analysis.stable": "Stable",

    // Alerts page
    "alerts.title": "Alerts & Notifications",
    "alerts.currentAlerts": "Current Alerts",
    "alerts.notificationSettings": "Notification Settings",
    "alerts.noAlerts": "No Active Alerts",
    "alerts.noAlertsDesc": "You're all caught up! There are no active alerts for your fields right now.",
    "alerts.new": "New",
    "alerts.markRead": "Mark as read",
    "alerts.alertRead": "Alert marked as read",
    "alerts.alertReadDesc": "This alert will be moved to your archive after 30 days",
    "alerts.notificationPreferences": "Notification Preferences",
    "alerts.notificationSettingUpdated": "Notification setting updated",
    "alerts.notificationSettingDesc": "Your notification preferences have been saved",
    "alerts.moistureAlerts": "Soil Moisture Alerts",
    "alerts.moistureAlertsDesc": "Get notified when moisture levels go outside optimal range",
    "alerts.nutrientAlerts": "Nutrient Level Alerts",
    "alerts.nutrientAlertsDesc": "Receive alerts for NPK deficiencies or excesses",
    "alerts.temperatureWarnings": "Temperature Warnings",
    "alerts.temperatureWarningsDesc": "Alerts for extreme soil temperature conditions",
    "alerts.phNotifications": "pH Level Notifications",
    "alerts.phNotificationsDesc": "Get notified when pH levels become too acidic or alkaline",
    "alerts.sensorAlerts": "Sensor Status Alerts",
    "alerts.sensorAlertsDesc": "Notifications when sensors go offline or have low battery",
    "alerts.notificationMethods": "Notification Methods",
    "alerts.inAppNotifications": "In-App Notifications",
    "alerts.smsNotifications": "SMS Notifications",
    "alerts.lowMoisture": "Low Soil Moisture",
    "alerts.lowMoistureDesc": "North field section A3 is below 30% moisture level",
    "alerts.phAlert": "pH Level Alert",
    "alerts.phAlertDesc": "East field pH levels rising above 7.2 (optimal range 6.0-7.0)",
    "alerts.tempWarning": "Temperature Warning",
    "alerts.tempWarningDesc": "Soil temperature dropping below 10°C in south field",
    "alerts.nitrogenDeficiency": "Nitrogen Deficiency",
    "alerts.nitrogenDeficiencyDesc": "West field showing signs of nitrogen deficiency",
    "alerts.sensorOffline": "Sensor Offline",
    "alerts.sensorOfflineDesc": "Sensor SN003 in south field is offline for over 6 hours",

    // Farm Management page
    "farm.title": "Farm Management",
    "farm.addFarm": "Add New Farm",
    "farm.addField": "Add New Field",
    "farm.fields": "Fields",
    "farm.farmAddDesc": "Adding new farms will be available in the next update",
    "farm.fieldAddDesc": "Adding new fields will be available in the next update",
    "farm.crop": "Crop",
    "farm.soil": "Soil",
    "farm.area": "Area",
    "farm.health": "Health",
    "farm.moisture": "Moisture",
    "farm.excellent": "Excellent",
    "farm.good": "Good",
    "farm.fair": "Fair",
    "farm.poor": "Poor",

    // User Management page
    "users.title": "User Management",
    "users.addUser": "Add User",
    "users.searchUsers": "Search users...",
    "users.name": "Name",
    "users.contact": "Contact",
    "users.role": "Role",
    "users.farms": "Farms",
    "users.status": "Status",
    "users.actions": "Actions",
    "users.lastLogin": "Last login",
    "users.noUsers": "No users found matching your search",
    "users.admin": "Admin",
    "users.farmer": "Farmer",
    "users.agronomist": "Agronomist",
    "users.viewer": "Viewer",
    "users.userAddDesc": "Adding new users will be available in the next update",

    // Contact page
    "contact.title": "Contact Us",
    "contact.subtitle": "Get in touch with our support team",
    "contact.name": "Your Name",
    "contact.email": "Email Address",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.officeLocations": "Office Locations",
    "contact.headquarters": "Headquarters",
    "contact.supportHours": "Support Hours",
    "contact.weekdays": "Monday - Friday",
    "contact.weekends": "Saturday",
    "contact.closed": "Sunday: Closed",
    "contact.callUs": "Call Us",
    "contact.emailUs": "Email Us",
    "contact.followUs": "Follow Us",
    "contact.messageSuccess": "Your message has been sent!",
    "contact.messageSuccessDesc": "We'll get back to you as soon as possible.",
    "contact.messageSending": "Sending your message...",
    "contact.generalInquiry": "General Inquiry",
    "contact.technicalSupport": "Technical Support",
    "contact.salesInquiry": "Sales Inquiry",
    "contact.partnership": "Partnership Opportunity",
  },
  mr: {
    // Navigation
    "nav.home": "मुख्यपृष्ठ",
    "nav.dashboard": "डॅशबोर्ड",
    "nav.sensors": "मातीचे सेन्सर",
    "nav.analysis": "डेटा विश्लेषण",
    "nav.alerts": "सूचना",
    "nav.farm": "शेत व्यवस्थापन",
    "nav.users": "वापरकर्ता प्रवेश",
    "nav.knowledge": "माती ज्ञान",
    "nav.contact": "संपर्क",
    "nav.login": "प्रवेश करा",
    
    // Common UI elements
    "ui.loading": "लोड होत आहे...",
    "ui.error": "एक त्रुटी आली",
    "ui.save": "जतन करा",
    "ui.cancel": "रद्द करा",
    "ui.search": "शोध",
    "ui.filter": "फिल्टर",
    "ui.dateRange": "तारीख श्रेणी",
    "ui.exportData": "डेटा निर्यात करा",
    "ui.refresh": "डेटा रिफ्रेश करा",
    "ui.viewDetails": "तपशील पहा",
    "ui.viewMap": "नकाशा पहा",
    "ui.edit": "संपादित करा",
    "ui.delete": "हटवा",
    "ui.addNew": "नवीन जोडा",
    "ui.status": "स्थिती",
    "ui.actions": "क्रिया",
    "ui.online": "ऑनलाईन",
    "ui.offline": "ऑफलाईन",
    "ui.active": "सक्रिय",
    "ui.inactive": "निष्क्रिय",
    "ui.settings": "सेटिंग्ज",
    "ui.calibrate": "कॅलिब्रेट करा",
    "ui.viewData": "डेटा पहा",
    "ui.lastUpdated": "शेवटचे अपडेट",
    "ui.tryAgain": "पुन्हा प्रयत्न करा",
    "ui.comingSoon": "लवकरच येत आहे",
    "ui.featureComingSoon": "वैशिष्ट्य लवकरच येत आहे",
    "ui.getStarted": "सुरू करा",

    // Auth
    "auth.email": "ईमेल",
    "auth.password": "पासवर्ड",
    "auth.forgotPassword": "पासवर्ड विसरलात?",
    "auth.rememberMe": "मला लक्षात ठेवा",
    "auth.signIn": "साइन इन करा",
    "auth.createAccount": "खाते तयार करा",
    "auth.alreadyHaveAccount": "आधीपासून खाते आहे?",
    "auth.fullName": "पूर्ण नाव",
    "auth.enterInfo": "आपली SoilSense खाते तयार करण्यासाठी आपली माहिती प्रविष्ट करा",
    "auth.createStrongPassword": "एक मजबूत पासवर्ड तयार करा",
    "auth.passwordRequirement": "पासवर्ड किमान 8 अक्षरे लांब असावा",
    "auth.agreeToTerms": "मी स्वीकारतो",
    "auth.termsOfService": "सेवा अटी",
    "auth.and": "आणि",
    "auth.privacyPolicy": "गोपनीयता धोरण",
    "auth.resetPassword": "आपला पासवर्ड रीसेट करा",
    "auth.resetPasswordDesc": "आपला ईमेल पत्ता प्रविष्ट करा आणि आम्ही आपल्याला पासवर्ड रीसेट करण्यासाठी एक लिंक पाठवू",
    "auth.sendResetLink": "रीसेट लिंक पाठवा",
    "auth.checkEmail": "रीसेट लिंकसाठी आपले ईमेल तपासा. ते 1 तासानंतर समाप्त होईल.",
    "auth.tryAnotherEmail": "दुसरा ईमेल प्रयत्न करा",
    "auth.backToLogin": "लॉगिन वर परत जा",
    
    // Home page
    "home.hero.tagline": "अभिनव शेती तंत्रज्ञान",
    "home.hero.title": "स्मार्ट माती निरीक्षण",
    "home.hero.description": "रियल-टाइम माती निरीक्षण आणि AI-चालित अंतर्दृष्टीसह आपल्या पिकांची उत्पादकता वाढवा.",
    "home.cta.viewDashboard": "डॅशबोर्ड पहा",
    "home.cta.login": "प्रवेश करा",
    "home.features.title": "मुख्य वैशिष्ट्ये",
    "home.features.soilMonitoring": "रियल-टाइम माती निरीक्षण",
    "home.features.soilMonitoringDesc": "प्रगत IoT सेन्सरसह रियल-टाइम मातीच्या आरोग्याचे मापदंड ट्रॅक करा.",
    "home.features.dataAnalytics": "डेटा विश्लेषण",
    "home.features.dataAnalyticsDesc": "ऐतिहासिक माती डेटावर आधारित अंतर्दृष्टी आणि भविष्यवाणी मिळवा.",
    "home.features.aiRecommendations": "AI शिफारसी",
    "home.features.aiRecommendationsDesc": "इष्टतम पीक उत्पादनासाठी AI-चालित सूचना प्राप्त करा.",
    "home.features.moistureManagement": "ओलावा व्यवस्थापन",
    "home.features.moistureManagementDesc": "इष्टतम वनस्पती वाढीसाठी मातीच्या ओलाव्याची पातळी निरीक्षण आणि व्यवस्थापित करा.",
    "home.features.fieldMapping": "शेत मॅपिंग",
    "home.features.fieldMappingDesc": "आपल्या शेतांचे मॅपिंग करा आणि वेगवेगळ्या क्षेत्रांमध्ये मातीचे आरोग्य ट्रॅक करा.",
    "home.bottomCta.title": "आपली पीक उत्पादन सुधारण्यास तयार आहात?",
    "home.bottomCta.description": "हजारो शेतकरी आधीपासूनच आपल्या शेती पद्धती अनुकूलित करण्यासाठी आमचे प्लॅटफॉर्म वापरत आहेत त्यांच्यात सामील व्हा.",
    "home.bottomCta.getStarted": "सुरू करा",

    // Dashboard page
    "dashboard.title": "माती मॉनिटरिंग डॅशबोर्ड",
    "dashboard.soilMoisture": "माती ओलावा",
    "dashboard.temperature": "तापमान",
    "dashboard.npkLevels": "NPK स्तर",
    "dashboard.phLevel": "pH स्तर",
    "dashboard.currentMoisture": "वरच्या माती स्तरात सध्याची ओलावा पातळी",
    "dashboard.ambientTemp": "माती स्तरावर परिवेश तापमान",
    "dashboard.nutrientBalance": "नायट्रोजन, फॉस्फरस, पोटॅशियम संतुलन",
    "dashboard.soilAcidity": "माती आम्लता मापन",
    "dashboard.optimal": "इष्टतम",
    "dashboard.normal": "सामान्य",
    "dashboard.balanced": "संतुलित",
    "dashboard.ideal": "आदर्श",
    "dashboard.nutrientTrends": "माती पोषक तत्त्व ट्रेंड्स",
    "dashboard.soilComposition": "माती रचना",
    "dashboard.moistureTrends": "माती ओलावा ट्रेंड्स",
    "dashboard.recommendationsTitle": "AI शिफारसी",
    "dashboard.weatherForecast": "हवामान अंदाज",
    "dashboard.today": "आज",
    "dashboard.tomorrow": "उद्या",
    "dashboard.sunny": "सूर्यप्रकाशित",
    "dashboard.lightRain": "हलका पाऊस",
    "dashboard.increaseWatering": "पाणी देणे वाढवा",
    "dashboard.wateringDesc": "दक्षिण शेतातील ओलावा पातळी इष्टतम पेक्षा कमी होत आहे",
    "dashboard.applyNitrogen": "नायट्रोजन लावा",
    "dashboard.nitrogenDesc": "पश्चिम प्लॉट्समध्ये नायट्रोजन कमी असल्याचे लक्षणे दिसत आहेत",
    "dashboard.monitorPh": "pH स्तर निरीक्षण करा",
    "dashboard.phDesc": "ईशान्य भागातील pH वाढत आहे",
    "dashboard.highPriority": "उच्च",
    "dashboard.mediumPriority": "मध्यम",
    "dashboard.lowPriority": "कमी",

    // Sensors page
    "sensors.title": "सेन्सर व्यवस्थापन",
    "sensors.addSensor": "सेन्सर जोडा",
    "sensors.listView": "यादी दृश्य",
    "sensors.mapView": "नकाशा दृश्य",
    "sensors.id": "आयडी",
    "sensors.sensorName": "सेन्सर नाव",
    "sensors.type": "प्रकार",
    "sensors.battery": "बॅटरी",
    "sensors.location": "स्थान",
    "sensors.status": "स्थिती",
    "sensors.mapComingSoon": "इंटरॅक्टिव्ह नकाशा लवकरच येत आहे",
    "sensors.mapComingSoonDesc": "आमचे इंटरॅक्टिव्ह नकाशा वैशिष्ट्य आपल्याला आपल्या शेतांवर सर्व सेन्सर दृश्यमान करण्यास आणि फक्त एका क्लिकसह रियल-टाइम डेटा मिळवण्यास अनुमती देईल.",
    "sensors.moistureType": "ओलावा आणि pH",
    "sensors.temperatureType": "तापमान आणि NPK",
    "sensors.completeType": "पूर्ण (सर्व मेट्रिक्स)",
    "sensors.moistureTempType": "ओलावा आणि तापमान",
    "sensors.sensorAddDesc": "नवीन सेन्सर जोडणे पुढील अपडेटमध्ये उपलब्ध असेल",

    // Analysis page
    "analysis.title": "डेटा विश्लेषण आणि शिफारसी",
    "analysis.nutrientTrends": "माती पोषक तत्त्व ट्रेंड्स",
    "analysis.soilComposition": "माती रचना",
    "analysis.moistureTrend": "माती ओलावा ट्रेंड",
    "analysis.aiRecommendations": "AI शिफारसी",
    "analysis.nitrogen": "नायट्रोजन",
    "analysis.phosphorus": "फॉस्फरस",
    "analysis.potassium": "पोटॅशियम",
    "analysis.clay": "चिकणमाती",
    "analysis.silt": "गाळ",
    "analysis.sand": "वाळू",
    "analysis.moisturePercent": "ओलावा %",
    "analysis.increaseNitrogen": "नायट्रोजन अर्ज वाढवा",
    "analysis.nitrogenLevels": "माती विश्लेषण दर्शवते की मक्याच्या वाढीच्या टप्प्यासाठी नायट्रोजन पातळी इष्टतम श्रेणीच्या खाली आहे",
    "analysis.adjustIrrigation": "सिंचन वेळापत्रक समायोजित करा",
    "analysis.moistureTrends": "अलीकडील ओलावा ट्रेंड दुपारच्या तासांमध्ये पाण्याच्या ताणासाठी क्षमता दर्शवतात",
    "analysis.monitorPh": "उत्तर शेतात pH निरीक्षण करा",
    "analysis.phLevels": "pH पातळी आम्लतेकडे वाढत आहे जे पोषक तत्त्वांच्या उपलब्धतेवर परिणाम करू शकते",
    "analysis.impact": "प्रभाव",
    "analysis.trend": "ट्रेंड",
    "analysis.increasing": "वाढत आहे",
    "analysis.decreasing": "कमी होत आहे",
    "analysis.stable": "स्थिर",

    // Alerts page
    "alerts.title": "सूचना आणि अधिसूचना",
    "alerts.currentAlerts": "सध्याच्या सूचना",
    "alerts.notificationSettings": "अधिसूचना सेटिंग्ज",
    "alerts.noAlerts": "कोणत्याही सक्रिय सूचना नाहीत",
    "alerts.noAlertsDesc": "आपण अद्ययावत आहात! सध्या आपल्या शेतांसाठी कोणत्याही सक्रिय सूचना नाहीत.",
    "alerts.new": "नवीन",
    "alerts.markRead": "वाचलेले म्हणून चिन्हांकित करा",
    "alerts.alertRead": "सूचना वाचलेली म्हणून चिन्हांकित केली",
    "alerts.alertReadDesc": "ही सूचना 30 दिवसांनंतर आपल्या संग्रहालयात हलवली जाईल",
    "alerts.notificationPreferences": "अधिसूचना प्राधान्ये",
    "alerts.notificationSettingUpdated": "अधिसूचना सेटिंग अपडेट केली",
    "alerts.notificationSettingDesc": "आपली अधिसूचना प्राधान्ये साठवली गेली आहेत",
    "alerts.moistureAlerts": "माती ओलावा सूचना",
    "alerts.moistureAlertsDesc": "ओलावा पातळी इष्टतम श्रेणीच्या बाहेर गेल्यावर सूचित करा",
    "alerts.nutrientAlerts": "पोषक तत्त्व पातळी सूचना",
    "alerts.nutrientAlertsDesc": "NPK कमतरता किंवा अतिरेकांसाठी सूचना प्राप्त करा",
    "alerts.temperatureWarnings": "तापमान चेतावण्या",
    "alerts.temperatureWarningsDesc": "अतिशय माती तापमान परिस्थितीसाठी सूचना",
    "alerts.phNotifications": "pH पातळी अधिसूचना",
    "alerts.phNotificationsDesc": "pH पातळी खूप आम्लीय किंवा अल्कलाइन झाल्यावर सूचित करा",
    "alerts.sensorAlerts": "सेन्सर स्थिती सूचना",
    "alerts.sensorAlertsDesc": "सेन्सर ऑफलाइन असल्यावर किंवा कमी बॅटरी असल्यावर अधिसूचना",
    "alerts.notificationMethods": "अधिसूचना पद्धती",
    "alerts.inAppNotifications": "अॅप-मध्ये अधिसूचना",
    "alerts.smsNotifications": "SMS अधिसूचना",
    "alerts.lowMoisture": "कमी माती ओलावा",
    "alerts.lowMoistureDesc": "उत्तर शेत विभाग A3 30% ओलावा पातळीखाली आहे",
    "alerts.phAlert": "pH स्तर सूचना",
    "alerts.phAlertDesc": "पूर्व शेतातील pH पातळी 7.2 पेक्षा वर वाढत आहे (इष्टतम श्रेणी 6.0-7.0)",
    "alerts.tempWarning": "तापमान चेतावणी",
    "alerts.tempWarningDesc": "दक्षिण शेतात माती तापमान 10°C पेक्षा कमी होत आहे",
    "alerts.nitrogenDeficiency": "नायट्रोजन कमतरता",
    "alerts.nitrogenDeficiencyDesc": "पश्चिम शेतात नायट्रोजन कमतरतेची लक्षणे दिसत आहेत",
    "alerts.sensorOffline": "सेन्सर ऑफलाइन",
    "alerts.sensorOfflineDesc": "दक्षिण शेतातील सेन्सर SN003 6 तासांपेक्षा जास्त काळ ऑफलाइन आहे",

    // Farm Management page
    "farm.title": "शेत व्यवस्थापन",
    "farm.addFarm": "नवीन शेत जोडा",
    "farm.addField": "नवीन शेतखंड जोडा",
    "farm.fields": "शेतखंड",
    "farm.farmAddDesc": "नवीन शेते जोडणे पुढील अपडेटमध्ये उपलब्ध असेल",
    "farm.fieldAddDesc": "नवीन शेतखंड जोडणे पुढील अपडेटमध्ये उपलब्ध असेल",
    "farm.crop": "पीक",
    "farm.soil": "माती",
    "farm.area": "क्षेत्र",
    "farm.health": "आरोग्य",
    "farm.moisture": "ओलावा",
    "farm.excellent": "उत्कृष्ट",
    "farm.good": "चांगले",
    "farm.fair": "मध्यम",
    "farm.poor": "कमकुवत",

    // User Management page
    "users.title": "वापरकर्ता व्यवस्थापन",
    "users.addUser": "वापरकर्ता जोडा",
    "users.searchUsers": "वापरकर्ते शोधा...",
    "users.name": "नाव",
    "users.contact": "संपर्क",
    "users.role": "भूमिका",
    "users.farms": "शेते",
    "users.status": "स्थिती",
    "users.actions": "क्रिया",
    "users.lastLogin": "शेवटचे लॉगिन",
    "users.noUsers": "आपल्या शोधाशी जुळणारे कोणतेही वापरकर्ते सापडले नाहीत",
    "users.admin": "प्रशासक",
    "users.farmer": "शेतकरी",
    "users.agronomist": "कृषीतज्ञ",
    "users.viewer": "दर्शक",
    "users.userAddDesc": "नवीन वापरकर्ते जोडणे पुढील अपडेटमध्ये उपलब्ध असेल",

    // Contact page
    "contact.title": "संपर्क करा",
    "contact.subtitle": "आमच्या सहाय्य टीमशी संपर्क साधा",
    "contact.name": "आपले नाव",
    "contact.email": "ईमेल पत्ता",
    "contact.subject": "विषय",
    "contact.message": "संदेश",
    "contact.send": "संदेश पाठवा",
    "contact.officeLocations": "कार्यालय स्थाने",
    "contact.headquarters": "मुख्यालय",
    "contact.supportHours": "सहाय्य वेळ",
    "contact.weekdays": "सोमवार - शुक्रवार",
    "contact.weekends": "शनिवार",
    "contact.closed": "रविवार: बंद",
    "contact.callUs": "आम्हाला कॉल करा",
    "contact.emailUs": "आम्हाला ईमेल करा",
    "contact.followUs": "आमचे अनुसरण करा",
    "contact.messageSuccess": "आपला संदेश पाठवला गेला आहे!",
    "contact.messageSuccessDesc": "आम्ही आपल्याला शक्य तितक्या लवकर प्रतिसाद देऊ.",
    "contact.messageSending": "आपला संदेश पाठवत आहे...",
    "contact.generalInquiry": "सामान्य चौकशी",
    "contact.technicalSupport": "तांत्रिक सहाय्य",
    "contact.salesInquiry": "विक्री चौकशी",
    "contact.partnership": "भागीदारी संधी",
  },
  hi: {
    // Navigation
    "nav.home": "होम",
    "nav.dashboard": "डैशबोर्ड",
    "nav.sensors": "मिट्टी के सेंसर",
    "nav.analysis": "डेटा विश्लेषण",
    "nav.alerts": "अलर्ट",
    "nav.farm": "खेत प्रबंधन",
    "nav.users": "उपयोगकर्ता पहुंच",
    "nav.knowledge": "मिट्टी का ज्ञान",
    "nav.contact": "संपर्क",
    "nav.login": "लॉगिन",
    
    // Common UI elements
    "ui.loading": "लोड हो रहा है...",
    "ui.error": "एक त्रुटि हुई",
    "ui.save": "सहेजें",
    "ui.cancel": "रद्द करें",
    "ui.search": "खोज",
    "ui.filter": "फ़िल्टर",
    "ui.dateRange": "तारीख सीमा",
    "ui.exportData": "डेटा निर्यात करें",
    "ui.refresh": "डेटा रिफ्रेश करें",
    "ui.viewDetails": "विवरण देखें",
    "ui.viewMap": "नक्शा देखें",
    "ui.edit": "संपादित करें",
    "ui.delete": "हटाएं",
    "ui.addNew": "नया जोड़ें",
    "ui.status": "स्थिति",
    "ui.actions": "कार्रवाई",
    "ui.online": "ऑनलाइन",
    "ui.offline": "ऑफलाइन",
    "ui.active": "सक्रिय",
    "ui.inactive": "निष्क्रिय",
    "ui.settings": "सेटिंग्स",
    "ui.calibrate": "कैलिब्रेट करें",
    "ui.viewData": "डेटा देखें",
    "ui.lastUpdated": "अंतिम अपडेट",
    "ui.tryAgain": "पुनः प्रयास करें",
    "ui.comingSoon": "जल्द आ रहा है",
    "ui.featureComingSoon": "फीचर जल्द आ रहा है",
    "ui.getStarted": "शुरू करें",

    // Auth
    "auth.email": "ईमेल",
    "auth.password": "पासवर्ड",
    "auth.forgotPassword": "पासवर्ड भूल गए?",
    "auth.rememberMe": "मुझे याद रखें",
    "auth.signIn": "साइन इन करें",
    "auth.createAccount": "एक खाता बनाएं",
    "auth.alreadyHaveAccount": "पहले से ही खाता है?",
    "auth.fullName": "पूरा नाम",
    "auth.enterInfo": "अपना SoilSense खाता बनाने के लिए अपनी जानकारी दर्ज करें",
    "auth.createStrongPassword": "एक मजबूत पासवर्ड बनाएं",
    "auth.passwordRequirement": "पासवर्ड कम से कम 8 अक्षर लंबा होना चाहिए",
    "auth.agreeToTerms": "मैं सहमत हूं",
    "auth.termsOfService": "सेवा की शर्तें",
    "auth.and": "और",
    "auth.privacyPolicy": "गोपनीयता नीति",
    "auth.resetPassword": "अपना पासवर्ड रीसेट करें",
    "auth.resetPasswordDesc": "अपना ईमेल पता दर्ज करें और हम आपको पासवर्ड रीसेट करने के लिए एक लिंक भेजेंगे",
    "auth.sendResetLink": "रीसेट लिंक भेजें",
    "auth.checkEmail": "रीसेट लिंक के लिए अपना ईमेल देखें। यह 1 घंटे में समाप्त हो जाएगा।",
    "auth.tryAnotherEmail": "दूसरा ईमेल आज़माएं",
    "auth.backToLogin": "लॉगिन पर वापस जाएं",
    
    // Home page
    "home.hero.tagline": "नवीन कृषि प्रौद्योगिकी",
    "home.hero.title": "स्मार्ट मिट्टी निगरानी",
    "home.hero.description": "रीयल-टाइम मिट्टी की निगरानी और एआई-संचालित अंतर्दृष्टि के साथ अपनी फसल की पैदावार बढ़ाएं।",
    "home.cta.viewDashboard": "डैशबोर्ड देखें",
    "home.cta.login": "लॉगिन करें",
    "home.features.title": "मुख्य विशेषताएं",
    "home.features.soilMonitoring": "रीयल-टाइम मिट्टी निगरानी",
    "home.features.soilMonitoringDesc": "उन्नत IoT सेंसर के साथ रीयल-टाइम में मिट्टी के स्वास्थ्य मेट्रिक्स को ट्रैक करें।",
    "home.features.dataAnalytics": "डेटा एनालिटिक्स",
    "home.features.dataAnalyticsDesc": "ऐतिहासिक मिट्टी डेटा के आधार पर अंतर्दृष्टि और भविष्यवाणियां प्राप्त करें।",
    "home.features.aiRecommendations": "एआई सिफारिशें",
    "home.features.aiRecommendationsDesc": "इष्टतम फसल उपज के लिए एआई-संचालित सुझाव प्राप्त करें।",
    "home.features.moistureManagement": "नमी प्रबंधन",
    "home.features.moistureManagementDesc": "इष्टतम पौधे की वृद्धि के लिए मिट्टी की नमी के स्तर की निगरानी और प्रबंधन करें।",
    "home.features.fieldMapping": "फील्ड मैपिंग",
    "home.features.fieldMappingDesc": "अपने खेतों को मैप करें और विभिन्न क्षेत्रों में मिट्टी के स्वास्थ्य को ट्रैक करें।",
    "home.bottomCta.title": "अपनी फसल की पैदावार में सुधार करने के लिए तैयार हैं?",
    "home.bottomCta.description": "हजारों किसानों से जुड़ें जो पहले से ही अपनी कृषि प्रथाओं को अनुकूलित करने के लिए हमारे प्लेटफॉर्म का उपयोग कर रहे हैं।",
    "home.bottomCta.getStarted": "शुरू करें",

    // Dashboard page
    "dashboard.title": "मिट्टी निगरानी डैशबोर्ड",
    "dashboard.soilMoisture": "मिट्टी की नमी",
    "dashboard.temperature": "तापमान",
    "dashboard.npkLevels": "NPK स्तर",
    "dashboard.phLevel": "pH स्तर",
    "dashboard.currentMoisture": "ऊपरी मिट्टी परत में वर्तमान नमी स्तर",
    "dashboard.ambientTemp": "मिट्टी के स्तर पर परिवेश तापमान",
    "dashboard.nutrientBalance": "नाइट्रोजन, फॉस्फोरस, पोटैशियम संतुलन",
    "dashboard.soilAcidity": "मिट्टी की अम्लता माप",
    "dashboard.optimal": "इष्टतम",
    "dashboard.normal": "सामान्य",
    "dashboard.balanced": "संतुलित",
    "dashboard.ideal": "आदर्श",
    "dashboard.nutrientTrends": "मिट्टी पोषक तत्व रुझान",
    "dashboard.soilComposition": "मिट्टी की संरचना",
    "dashboard.moistureTrends": "मिट्टी की नमी रुझान",
    "dashboard.recommendationsTitle": "एआई सिफारिशें",
    "dashboard.weatherForecast": "मौसम का पूर्वानुमान",
    "dashboard.today": "आज",
    "dashboard.tomorrow": "कल",
    "dashboard.sunny": "धूप",
    "dashboard.lightRain": "हल्की बारिश",
    "dashboard.increaseWatering": "सिंचाई बढ़ाएं",
    "dashboard.wateringDesc": "दक्षिणी क्षेत्र की नमी का स्तर इष्टतम स्तर से नीचे जा रहा है",
    "dashboard.applyNitrogen": "नाइट्रोजन लगाएं",
    "dashboard.nitrogenDesc": "पश्चिमी प्लॉट नाइट्रोजन की कमी के संकेत दिखा रहे हैं",
    "dashboard.monitorPh": "pH स्तर की निगरानी करें",
    "dashboard.phDesc": "उत्तरपूर्वी भाग में pH बढ़ रहा है",
    "dashboard.highPriority": "उच्च",
    "dashboard.mediumPriority": "मध्यम",
    "dashboard.lowPriority": "निम्न",

    // Sensors page
    "sensors.title": "सेंसर प्रबंधन",
    "sensors.addSensor": "सेंसर जोड़ें",
    "sensors.listView": "सूची दृश्य",
    "sensors.mapView": "नक्शा दृश्य",
    "sensors.id": "आईडी",
    "sensors.sensorName": "सेंसर का नाम",
    "sensors.type": "प्रकार",
    "sensors.battery": "बैटरी",
    "sensors.location": "स्थान",
    "sensors.status": "स्थिति",
    "sensors.mapComingSoon": "इंटरैक्टिव नक्शा जल्द आ रहा है",
    "sensors.mapComingSoonDesc": "हमारी इंटरैक्टिव नक्शा सुविधा आपको अपने खेतों पर सभी सेंसर देखने और सिर्फ एक क्लिक से रीयल-टाइम डेटा प्राप्त करने की अनुमति देगी।",
    "sensors.moistureType": "नमी और pH",
    "sensors.temperatureType": "तापमान और NPK",
    "sensors.completeType": "पूर्ण (सभी मैट्रिक्स)",
    "sensors.moistureTempType": "नमी और तापमान",
    "sensors.sensorAddDesc": "नए सेंसर जोड़ना अगले अपडेट में उपलब्ध होगा",

    // Analysis page
    "analysis.title": "डेटा विश्लेषण और सिफारिशें",
    "analysis.nutrientTrends": "मिट्टी पोषक तत्व रुझान",
    "analysis.soilComposition": "मिट्टी की संरचना",
    "analysis.moistureTrend": "मिट्टी की नमी रुझान",
    "analysis.aiRecommendations": "एआई सिफारिशें",
    "analysis.nitrogen": "नाइट्रोजन",
    "analysis.phosphorus": "फॉस्फोरस",
    "analysis.potassium": "पोटैशियम",
    "analysis.clay": "मिट्टी",
    "analysis.silt": "गाद",
    "analysis.sand": "रेत",
    "analysis.moisturePercent": "नमी %",
    "analysis.increaseNitrogen": "नाइट्रोजन अनुप्रयोग बढ़ाएं",
    "analysis.nitrogenLevels": "मिट्टी विश्लेषण मकई के विकास चरण के लिए इष्टतम सीमा से नीचे नाइट्रोजन स्तर दिखाता है",
    "analysis.adjustIrrigation": "सिंचाई शेड्यूल समायोजित करें",
    "analysis.moistureTrends": "हाल के नमी रुझान दोपहर के समय पानी के तनाव की संभावना का संकेत देते हैं",
    "analysis.monitorPh": "उत्तरी क्षेत्रों में pH की निगरानी करें",
    "analysis.phLevels": "pH स्तर अम्लता की ओर बढ़ रहे हैं जो पोषक तत्वों की उपलब्धता को प्रभावित कर सकते हैं",
    "analysis.impact": "प्रभाव",
    "analysis.trend": "रुझान",
    "analysis.increasing": "बढ़ रहा है",
    "analysis.decreasing": "घट रहा है",
    "analysis.stable": "स्थिर",

    // Alerts page
    "alerts.title": "अलर्ट और सूचनाएं",
    "alerts.currentAlerts": "वर्तमान अलर्ट",
    "alerts.notificationSettings": "सूचना सेटिंग्स",
    "alerts.noAlerts": "कोई सक्रिय अलर्ट नहीं",
    "alerts.noAlertsDesc": "आप अप-टू-डेट हैं! इस समय आपके खेतों के लिए कोई सक्रिय अलर्ट नहीं हैं।",
    "alerts.new": "नया",
    "alerts.markRead": "पढ़ा हुआ चिह्नित करें",
    "alerts.alertRead": "अलर्ट पढ़ा हुआ चिह्नित किया गया",
    "alerts.alertReadDesc": "यह अलर्ट 30 दिनों के बाद आपके संग्रह में ले जाया जाएगा",
    "alerts.notificationPreferences": "सूचना प्राथमिकताएं",
    "alerts.notificationSettingUpdated": "सूचना सेटिंग अपडेट की गई",
    "alerts.notificationSettingDesc": "आपकी सूचना प्राथमिकताएं सहेजी गई हैं",
    "alerts.moistureAlerts": "मिट्टी की नमी अलर्ट",
    "alerts.moistureAlertsDesc": "नमी के स्तर इष्टतम सीमा से बाहर होने पर सूचित करें",
    "alerts.nutrientAlerts": "पोषक तत्व स्तर अलर्ट",
    "alerts.nutrientAlertsDesc": "NPK की कमी या अधिकता के लिए अलर्ट प्राप्त करें",
    "alerts.temperatureWarnings": "तापमान चेतावनियां",
    "alerts.temperatureWarningsDesc": "अत्यधिक मिट्टी के तापमान की स्थिति के लिए अलर्ट",
    "alerts.phNotifications": "pH स्तर सूचनाएं",
    "alerts.phNotificationsDesc": "pH स्तर बहुत अम्लीय या क्षारीय होने पर सूचित करें",
    "alerts.sensorAlerts": "सेंसर स्थिति अलर्ट",
    "alerts.sensorAlertsDesc": "सेंसर ऑफलाइन होने या बैटरी कम होने पर सूचनाएं",
    "alerts.notificationMethods": "सूचना विधियां",
    "alerts.inAppNotifications": "ऐप-में सूचनाएं",
    "alerts.smsNotifications": "SMS सूचनाएं",
    "alerts.lowMoisture": "कम मिट्टी की नमी",
    "alerts.lowMoistureDesc": "उत्तरी क्षेत्र अनुभाग A3 30% नमी स्तर से नीचे है",
    "alerts.phAlert": "pH स्तर अलर्ट",
    "alerts.phAlertDesc": "पूर्वी क्षेत्र pH स्तर 7.2 से ऊपर बढ़ रहे हैं (इष्टतम सीमा 6.0-7.0)",
    "alerts.tempWarning": "तापमान चेतावनी",
    "alerts.tempWarningDesc": "दक्षिणी क्षेत्र में मिट्टी का तापमान 10°C से नीचे गिर रहा है",
    "alerts.nitrogenDeficiency": "नाइट्रोजन की कमी",
    "alerts.nitrogenDeficiencyDesc": "पश्चिमी क्षेत्र नाइट्रोजन की कमी के संकेत दिखा रहा है",
    "alerts.sensorOffline": "सेंसर ऑफलाइन",
    "alerts.sensorOfflineDesc": "दक्षिणी क्षेत्र में सेंसर SN003 6 घंटे से अधिक समय से ऑफलाइन है",

    // Farm Management page
    "farm.title": "खेत प्रबंधन",
    "farm.addFarm": "नया खेत जोड़ें",
    "farm.addField": "नया क्षेत्र जोड़ें",
    "farm.fields": "क्षेत्र",
    "farm.farmAddDesc": "नए खेत जोड़ना अगले अपडेट में उपलब्ध होगा",
    "farm.fieldAddDesc": "नए क्षेत्र जोड़ना अगले अपडेट में उपलब्ध होगा",
    "farm.crop": "फसल",
    "farm.soil": "मिट्टी",
    "farm.area": "क्षेत्रफल",
    "farm.health": "स्वास्थ्य",
    "farm.moisture": "नमी",
    "farm.excellent": "उत्कृष्ट",
    "farm.good": "अच्छा",
    "farm.fair": "संतोषजनक",
    "farm.poor": "खराब",

    // User Management page
    "users.title": "उपयोगकर्ता प्रबंधन",
    "users.addUser": "उपयोगकर्ता जोड़ें",
    "users.searchUsers": "उपयोगकर्ता खोजें...",
    "users.name": "नाम",
    "users.contact": "संपर्क",
    "users.role": "भूमिका",
    "users.farms": "खेत",
    "users.status": "स्थिति",
    "users.actions": "कार्रवाई",
    "users.lastLogin": "अंतिम लॉगिन",
    "users.noUsers": "आपकी खोज से मेल खाने वाले कोई उपयोगकर्ता नहीं मिले",
    "users.admin": "प्रशासक",
    "users.farmer": "किसान",
    "users.agronomist": "कृषि वैज्ञानिक",
    "users.viewer": "दर्शक",
    "users.userAddDesc": "नए उपयोगकर्ता जोड़ना अगले अपडेट में उपलब्ध होगा",

    // Contact page
    "contact.title": "संपर्क करें",
    "contact.subtitle": "हमारी सहायता टीम से संपर्क करें",
    "contact.name": "आपका नाम",
    "contact.email": "ईमेल पता",
    "contact.subject": "विषय",
    "contact.message": "संदेश",
    "contact.send": "संदेश भेजें",
    "contact.officeLocations": "कार्यालय स्थान",
    "contact.headquarters": "मुख्यालय",
    "contact.supportHours": "सहायता के घंटे",
    "contact.weekdays": "सोमवार - शुक्रवार",
    "contact.weekends": "शनिवार",
    "contact.closed": "रविवार: बंद",
    "contact.callUs": "हमें कॉल करें",
    "contact.emailUs": "हमें ईमेल करें",
    "contact.followUs": "हमें फॉलो करें",
    "contact.messageSuccess": "आपका संदेश भेज दिया गया है!",
    "contact.messageSuccessDesc": "हम जल्द से जल्द आपसे संपर्क करेंगे।",
    "contact.messageSending": "आपका संदेश भेजा जा रहा है...",
    "contact.generalInquiry": "सामान्य पूछताछ",
    "contact.technicalSupport": "तकनीकी सहायता",
    "contact.salesInquiry": "बिक्री पूछताछ",
    "contact.partnership": "साझेदारी अवसर",
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
