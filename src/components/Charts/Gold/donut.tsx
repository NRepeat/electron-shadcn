"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, LabelList, Pie, PieChart } from "recharts"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Gold } from "@/types/types"


const chartConfig = {
	gold: {
		label: "Gold",
	},
	gold_from_income: {
		label: "Income",
		color: "hsl(var(--chart-1))",
	},
	gold_reliable: {
		label: "Reliable",
		color: "hsl(var(--chart-2))",
	},
	gold_unreliable: {
		label: "Unreliable gold",
		color: "hsl(var(--chart-3))",
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
type DonutDataType = {
	space: string
	gold: number;
	fill: string;
} | null
type GoldDonutChartProps = {
	data: DonutDataType[]
	config: ChartConfig
	title: string
	totalValue?: number
	totalValueDescription?: string
	description?: string
	children?: React.ReactNode
}

export function GoldDonutChart({ data, config, title, children, description, totalValue, totalValueDescription }: GoldDonutChartProps) {
	return (
		<Card className="flex flex-col min-w-[300px] min-h-[500px]">
			<CardHeader className="items-center pb-0">
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent className="flex-1 pb-0">
				<ChartContainer config={config} className="mx-auto aspect-square max-h-[250px]">
					<PieChart>
						<ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
						<Pie data={data} dataKey="gold" nameKey="space" innerRadius={60} strokeWidth={5}>

							<Label
								content={({ viewBox }) => {
									if (viewBox && "cx" in viewBox && "cy" in viewBox) {
										return (
											<text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
												<tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-bold">
													{totalValue}
												</tspan>
												<tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground">
													{totalValueDescription}
												</tspan>
											</text>
										)
									}
								}}
							/>
						</Pie>
					</PieChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex-col gap-2 text-sm">
				{children}
			</CardFooter>
		</Card>
	)
}

