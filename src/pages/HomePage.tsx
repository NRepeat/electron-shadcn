import { websocketClient } from "@/api";
import CurrentGoldChart from "@/components/Charts/Gold/current";
import { GoldDonutChart } from "@/components/Charts/Gold/donut";
import { Component } from "@/components/Charts/Gold/test";
import TotalGoldChart from "@/components/Charts/Gold/total";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { GameStateRune } from "@/types/types";
import React, { useEffect, useState } from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

export default function HomePage() {
  const [renderData, setRenderData] = useState<GameStateRune[]>([]);

  const chartConfig: ChartConfig = {
    xpm: { label: "XPM", color: "#2563eb" },
    gpm: { label: "GPM", color: "#60a5fa" },
    last_hits: { label: "Last Hits", color: "#34d399" },
  };

  useEffect(() => {
    const handleUpdate = (message: { data: GameStateRune[] }) => {
      setRenderData(message.data);
    };

    websocketClient.on("update", handleUpdate);

    return () => {
      websocketClient.off("update", handleUpdate);
    };
  }, []);

  return (
    <div className="flex h-screen  items-center justify-start gap-2 p-4">
      {renderData && renderData.length > 0 &&
        <>
          <div className="flex   items-center justify-start gap-2 p-4">
            <CurrentGoldChart data={renderData[renderData.length - 1].player.goldStats} />
            <TotalGoldChart data={renderData[renderData.length - 1].player.goldStats} />
          </div>

          <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <AreaChart
              data={renderData.map(d => ({ xpm: d.player.xpm, gpm: d.player.gpm, last_hits: d.player.last_hits, timestamp: d.match.clock_time }))}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="timestamp"
                tickLine={false}
                axisLine={false}
                tickMargin={8}

              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
              <Area
                dataKey="xpm"
                type="natural"
                fill={chartConfig.xpm.color}
                fillOpacity={0.4}
                stroke={chartConfig.xpm.color}
              />
              <Area
                dataKey="gpm"
                type="natural"
                fill={chartConfig.gpm.color}
                fillOpacity={0.4}
                stroke={chartConfig.gpm.color}
              />
              <Area
                dataKey="last_hits"
                type="natural"
                fill={chartConfig.last_hits.color}
                fillOpacity={0.4}
                stroke={chartConfig.last_hits.color}
              />
            </AreaChart>
          </ChartContainer>
        </>
      }

    </div>
  );
}
