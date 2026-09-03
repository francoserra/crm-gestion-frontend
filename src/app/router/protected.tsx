import { Navigate, RouteObject } from "react-router";

import AuthGuard from "@/middleware/AuthGuard";
import { DynamicLayout } from "../layouts/DynamicLayout";
import { AppLayout } from "../layouts/AppLayout";

/**
 * Protected routes configuration
 * These routes require authentication to access
 * Uses AuthGuard middleware to verify user authentication
 */
const protectedRoutes: RouteObject = {
  id: "protected",
  Component: AuthGuard,
  children: [
    // 1. Un solo bloque para todas las rutas que usan DynamicLayout
    {
      Component: DynamicLayout,
      children: [
        {
          index: true,
          element: <Navigate to="/dashboards/home" replace />,
        },
        {
          path: "dashboards",
          children: [
            {
              index: true,
              element: <Navigate to="/dashboards/home" replace />,
            },
            {
              path: "home",
              lazy: async () => ({
                Component: (await import("@/app/pages/dashboards/home")).default,
              }),
            },
          ],
        },
        {
          path: "empresas",
          children: [
            {
              index: true,
              lazy: async () => ({
                Component: (await import("@/app/pages/empresas/home")).default,
              }),
            },
            {
              index: true,
              path: "crear",
              lazy: async () => ({
                Component: (await import("@/app/pages/empresas/crud/crear")).default,
              }),
            },
          ],
        },
      ],
    },

    // 2. Bloque para páginas que usan AppLayout
    {
      Component: AppLayout,
      children: [
        {
          path: "settings",
          lazy: async () => ({
            Component: (await import("@/app/pages/settings/Layout")).default,
          }),
          children: [
            {
              index: true,
              element: <Navigate to="/settings/general" replace />,
            },
            {
              path: "general",
              lazy: async () => ({
                Component: (
                  await import("@/app/pages/settings/sections/General")
                ).default,
              }),
            },
            {
              path: "appearance",
              lazy: async () => ({
                Component: (
                  await import("@/app/pages/settings/sections/Appearance")
                ).default,
              }),
            },
          ],
        },
      ],
    },
  ],
};

export { protectedRoutes };
