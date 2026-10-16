export interface Flavor {
  id: string;
  name: string;
  tagline: string;
  regionInspiration: string;
  image: string;
  heatLevel: number; // 1 to 5
  umamiLevel: number; // 1 to 5
  tangLevel: number; // 1 to 5
  keyNotes: string[];
  description: string;
  idealFryCut: string;
  dipPairing: string;
  ingredients: string;
  accentColor: string;
}

export interface WaitlistEntry {
  email: string;
  queueNumber: number;
  referralCode: string;
  favoriteFlavor?: string;
  signedAt: string;
}
