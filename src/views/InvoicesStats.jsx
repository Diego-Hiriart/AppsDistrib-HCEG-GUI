import React, { useEffect, useState } from "react";
import { Stats } from "../components/invoice/Stats";
import { STATS_API_URL } from "../utils/api";
import { fetchApi } from "../utils/fetchApi";

export const InvoicesStats = () => {
  const [stats, setStats] = useState();

  useEffect(() => {
    async function getStats() {
      const response = await fetchApi(STATS_API_URL);

      return response.ok ? setStats(response.data) : setStats(undefined);
    }
    getStats();
  }, []);

  return stats ? (
    <section className="flex flex-col flex-wrap">
      <p className="text-lg text-center">Sales Statistics</p>
      <Stats props={stats} />
    </section>
  ) : (
    <section>Loading statistics...</section>
  );
};
