export const APP_NAME = "CRM Gestión";
export const APP_KEY = "crm_gestion";

// Redirect Paths
export const REDIRECT_URL_KEY = "redirect";
export const HOME_PATH = "/";
export const GHOST_ENTRY_PATH = "/login";

// Navigation Types
export type NavigationType = "root" | "group" | "collapse" | "item" | "divider";

export const API_BASE_URL = 
  import.meta.env.VITE_API_BASE_URL + "/" + import.meta.env.VITE_API_VERSION || "http://localhost:8000/api/v1"; 

export const COLORS = [
  "white",
  "neutral",
  "primary",
  "secondary",
  "info",
  "success",
  "warning",
  "error",
] as const;

export type ColorType = (typeof COLORS)[number];
