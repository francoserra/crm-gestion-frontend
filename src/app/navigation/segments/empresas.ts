import { baseNavigationObj } from "../baseNavigation";
import { NavigationTree } from "@/@types/navigation";

const ROOT_EMPRESAS = "/empresas";

const path = (root: string, item: string) => `${root}${item}`;

export const empresas: NavigationTree = {
  ...baseNavigationObj["empresas"],
  type: "root",
  childs: [
    {
      id: "empresas.home",
      path: path(ROOT_EMPRESAS, ""),
      type: "item",
      title: "Empresas",
      transKey: "nav.empresas.home",
      icon: "empresas.home",
    },
    {
      id: "empresas.crear",
      path: path(ROOT_EMPRESAS, "/crear"),
      type: "item",
      title: "Nueva Empresa",
      transKey: "nav.empresas.crear",
      icon: "empresas.crear",
    },
  ],
};
