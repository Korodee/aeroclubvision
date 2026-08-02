import type { Feature, HeroStat, Prerequisite } from "@/types";

export const HERO_STATS: HeroStat[] = [
  { val: "11", label: "Appareils", sub: "dont IFR, multi, acrobatique" },
  { val: "4", label: "Bases", sub: "CYJN · CYRQ · CSE4 · CSC3" },
  { val: "100 $", label: "Dès /heure", sub: "dry, sans frais cachés" },
];

export const FEATURES: Feature[] = [
  {
    num: "01",
    title: "Prix sans compromis",
    desc: "Modèle 100% non lucratif. Avions entretenus commercialement, mis à disposition à une fraction du prix du marché. Aucun frais d'inscription. Aucune cotisation annuelle.",
    aside: "dès 100 $/h",
  },
  {
    num: "02",
    title: "Volez quand vous voulez",
    desc: "Overnights permis. Partez en week-end en famille ou en amoureux. Vos blocs d'heures n'ont aucune date d'expiration.",
    aside: "sans expiry",
  },
  {
    num: "03",
    title: "Disponibilité maximale",
    desc: "11 appareils répartis sur 4 bases au Québec. Un avion est toujours disponible, peu importe votre région.",
    aside: "4 aéroports",
  },
  {
    num: "04",
    title: "Réservation moderne",
    desc: "Plateforme web dédiée. Réservez en quelques clics, gérez vos blocs d'heures et accédez à votre historique 24/7.",
    aside: "24/7 en ligne",
  },
];

export const PREREQUISITES: Prerequisite[] = [
  {
    title: "Monomoteurs",
    items: [
      "Licence de pilote valide",
      "Bloc de 20 h minimum par appareil",
      "50 h d'expérience totale requises",
    ],
  },
  {
    title: "C-FVBQ · Cessna 172H sur flotte",
    items: [
      "Bloc 10 h minimum",
      "20 h sur type avant solo",
      "100 h total requises",
      "Formation possible avec votre propre instructeur",
    ],
  },
  {
    title: "C-FTNF · Cessna 310 (Multimoteur)",
    items: [
      "Qualification multi requise",
      "Checkout double commande (~20 h, selon profil)",
      "Bloc 10 h minimum",
    ],
  },
];

export const MEMBER_APP_URL = "https://aeroclubvision.flychronos.com/";
export const CONTACT_EMAIL = "mathieu@aeroclubduquebec.com";
export const CONTACT_PHONE = "4383427706";
export const CONTACT_PHONE_DISPLAY = "438-342-7706";

export const TICKER_TEXT =
  "Saint-Jean · CYJN  ·  Trois-Rivières · CYRQ  ·  Lachute · CSE4  ·  Drummondville · CSC3  ·  11 appareils  ·  100% non lucratif";

export const NAV_LINKS = [
  { href: "#mission", label: "Mission" },
  { href: "#flotte", label: "Flotte" },
  { href: "#prereqs", label: "Prérequis" },
] as const;

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1555970968-d47aef5a8dce";
export const CINEMATIC_IMAGE =
  "https://images.unsplash.com/photo-1755771874736-ae8e1eb14e4a";
export const CTA_IMAGE =
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05";
