import React from 'react'
import '../../styles/scss/PricingPlan.scss'

export default function PricingPlan() {
	return (
		<div class='pricing-plan-list'>
			<div class='pricing-plan'>
				<h2 class='pricing-plan__name'>CheapSkate</h2>
				<h1 class='pricing-plan__price'>$1</h1>
				<small class='pricing-plan__disclosure'>
					charged on a monthly basis
				</small>
				<ul class='pricing-plan__feature-list'>
					<li class='pricing-plan__feature'>Something Good</li>
					<li class='pricing-plan__feature'>Something Good</li>
					<li class='pricing-plan__feature'>Something Good</li>
					<li class='pricing-plan__feature'>What Do You Want For A Dollar?</li>
				</ul>
			</div>
			<div class='pricing-plan pricing-plan--featured'>
				<h2 class='pricing-plan__name'>Standard</h2>
				<h1 class='pricing-plan__price'>$2999</h1>
				<small class='pricing-plan__disclosure'>
					charged on a monthly basis
				</small>
				<ul class='pricing-plan__feature-list'>
					<li class='pricing-plan__feature'>Something Good</li>
					<li class='pricing-plan__feature'>Something Good</li>
					<li class='pricing-plan__feature'>Something Good</li>
					<li class='pricing-plan__feature'>Limited Something Good</li>
				</ul>
			</div>
			<div class='pricing-plan'>
				<h2 class='pricing-plan__name'>Premium</h2>
				<h1 class='pricing-plan__price'>$4499</h1>
				<small class='pricing-plan__disclosure'>
					charged on a yearly basis
				</small>
				<ul class='pricing-plan__feature-list'>
					<li class='pricing-plan__feature'>Something Good</li>
					<li class='pricing-plan__feature'>Something Good</li>
					<li class='pricing-plan__feature'>Something Good</li>
					<li class='pricing-plan__feature'>Unlimited Something Good</li>
				</ul>
			</div>
		</div>
	)
}
