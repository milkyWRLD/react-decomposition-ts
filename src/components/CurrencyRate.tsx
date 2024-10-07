import React from 'react'

/**
 * Отображение курса вылют
 */

interface CurrencyRateProps {
	currencyName: string
	rate: number
	yesterdayRate: number
}

const CurrencyRate: React.FC<CurrencyRateProps> = ({
	currencyName,
	rate,
	yesterdayRate,
}) => {
	const rateChange = rate - yesterdayRate
	const rateChangePercentage = ((rate - yesterdayRate) / yesterdayRate) * 100

	return (
		<div className='currency-rate-item'>
			<strong>{currencyName}:</strong> {rate} ({rateChange.toFixed(2)}{' '}
			{rateChange > 0 ? '▲' : rateChange < 0 ? '▼' : ''}{' '}
			{Math.abs(rateChangePercentage).toFixed(2)}%)
		</div>
	)
}

export default CurrencyRate
