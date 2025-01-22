import React from 'react'
import { GoldDonutChart } from './donut'
import { ChartConfig } from '@/components/ui/chart'
import { Gold } from "@/types/types"
import clsx from 'clsx'

const chartConfig = {

	gold_from_income: {
		label: "Income",
		color: "hsl(var(--chart-1))",
	},

	gold_from_hero_kills: {
		label: "Hero Kills",
		color: "hsl(var(--chart-4))",
	},
	gold_from_creep_kills: {
		label: "Creep Kills",
		color: "hsl(var(--chart-5))",

	},
} satisfies ChartConfig
const TotalGoldChart = ({ data }: { data: Gold }) => {

	const keys = Object.keys(data) as (keyof Gold)[]
	const goldData = keys.map(key => {
		if (key === "gold") return null
		if (key === 'gold_unreliable') return null
		if (key === 'gold_reliable') return null
		return ({ space: key, gold: data[key], fill: `var(--color-${key})` })
	}).filter(item => item !== null);

	const totalGold = data.gold_from_creep_kills + data.gold_from_hero_kills + data.gold_from_income
	return (
		<GoldDonutChart title="Current Gold" description="Current gold" config={chartConfig} data={goldData} totalValue={totalGold} totalValueDescription="Total Gold">
			<div className='flex flex-col w-full'>
				<ul className='w-full text-xl flex flex-col gap-2'>
					<li className={clsx(
						"relative before:w-4 before:rounded-sm before:h-4  before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 pl-6",
						{ [`before:bg-[var(--before-color)]`]: chartConfig.gold_from_hero_kills.color }
					)}
						style={{ "--before-color": chartConfig.gold_from_hero_kills.color } as React.CSSProperties}
					>
						Gold from hero kills: <span>{data.gold_from_hero_kills}</span>
					</li>
					<li className={clsx(
						"relative before:w-4 before:rounded-sm before:h-4  before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 pl-6",
						{ [`before:bg-[var(--before-color)]`]: chartConfig.gold_from_creep_kills.color }
					)}
						style={{ "--before-color": chartConfig.gold_from_creep_kills.color } as React.CSSProperties}
					>
						Gold from creep kills: <span>{data.gold_from_creep_kills}</span> </li>
					<li className={clsx(
						"relative before:w-4 before:rounded-sm before:h-4  before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 pl-6",
						{ [`before:bg-[var(--before-color)]`]: chartConfig.gold_from_income.color }
					)}
						style={{ "--before-color": chartConfig.gold_from_income.color } as React.CSSProperties}>
						Income: <span>{data.gold_from_income}</span></li>
				</ul>
			</div>
		</GoldDonutChart>
	)
}

export default TotalGoldChart