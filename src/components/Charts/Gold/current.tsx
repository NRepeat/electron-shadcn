import React from 'react'
import { GoldDonutChart } from './donut'
import { ChartConfig } from '@/components/ui/chart'
import { Gold } from "@/types/types"
import clsx from 'clsx'

const chartConfig = {

	gold_reliable: {
		label: "Reliable",
		color: "hsl(var(--chart-2))",
	},
	gold_unreliable: {
		label: "Unreliable",
		color: "hsl(var(--chart-3))",
	},

} satisfies ChartConfig
const CurrentGoldChart = ({ data }: { data: Gold }) => {

	const keys = Object.keys(data) as (keyof Gold)[]
	const goldData = keys.map(key => {
		if (key === "gold") return null
		if (key === 'gold_from_creep_kills') return null
		if (key === 'gold_from_income') return null
		if (key === 'gold_from_hero_kills') return null
		return ({ space: key, gold: data[key], fill: `var(--color-${key})` })
	}).filter(item => item !== null);

	const totalGold = data.gold_reliable + data.gold_unreliable
	return (
		<GoldDonutChart title="Current Gold" description="Current gold" config={chartConfig} data={goldData} totalValue={totalGold} totalValueDescription="Total Gold">
			<div className='flex flex-col w-full'>
				<ul className='w-full text-xl flex flex-col gap-2'>
					<li className={clsx(
						"relative before:w-4 before:rounded-sm before:h-4  before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 pl-6",
						{ [`before:bg-[var(--before-color)]`]: chartConfig.gold_reliable.color }
					)}
						style={{ "--before-color": chartConfig.gold_reliable.color } as React.CSSProperties}
					>
						Reliable gold: <span>{data.gold_reliable}</span>
					</li>
					<li className={clsx(
						"relative before:w-4 before:rounded-sm before:h-4  before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 pl-6",
						{ [`before:bg-[var(--before-color)]`]: chartConfig.gold_reliable.color }
					)} style={{ "--before-color": chartConfig.gold_unreliable.color } as React.CSSProperties}>
						Unreliable gold:<span>{data.gold_unreliable}</span> </li>
				</ul>
			</div>
		</GoldDonutChart>
	)
}

export default CurrentGoldChart