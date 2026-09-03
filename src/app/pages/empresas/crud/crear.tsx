import { Page } from "@/components/shared/Page";
import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { ArrowUpIcon, PresentationChartBarIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import axios from "@/utils/axios";
import { API_BASE_URL } from "@/constants/app";
import { useAuthContext } from "@/app/contexts/auth/context";

export default function Index() {
  const {user} = useAuthContext();
  const [empresas, setEmpresas] = useState([]);
  useEffect(() => {
    const getEmpresas = async () => {
      try {
        const response = await axios.get(API_BASE_URL + `/organizaciones/${user?.organizacion_id}/empresas`, { withCredentials: true });
        setEmpresas(response.data.data);
      } catch (err) {
        console.error(err);
        
      }
    }
    getEmpresas();
  }, []);
  return (
    <Page title="Empresas">
      <div className="transition-content w-full px-(--margin-x) pt-5 lg:pt-6">
        <div className="min-w-0">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
            asdsadsad
          </div>
        </div>
      </div>
    </Page>
  );
}
