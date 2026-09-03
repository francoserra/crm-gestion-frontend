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
            <Card className="flex justify-between p-5">
              <div>
                <p>Empresas</p>
                <p className="this:info text-this dark:text-this-lighter mt-0.5 text-2xl font-medium">
                  {empresas.length}
                </p>
                <p className="this:success text-this dark:text-this-lighter mt-3 flex items-center gap-1">
                  <ArrowUpIcon className="size-4" />
                  <span>4.3%</span>
                </p>
              </div>
              <Avatar
                size={12}
                classNames={{
                  display: "mask is-squircle rounded-none",
                }}
                initialVariant="soft"
                initialColor="info"
              >
                <PresentationChartBarIcon className="size-6" />
              </Avatar>
            </Card>
          </div>
        </div>
      </div>
    </Page>
  );
}
