import React from 'react'
import './PricingPlan.css'

export default function PricingPlan() {
	return (
		<section id="plans">
			<div className="container">
				<div className="row">
					<div className="col-md-4 col-sm-4 text-center">
						<div className="panel panel-secondary panel-pricing">
							<div className="panel-heading">
								<i className="fa fa-spinner fa-spin"></i>
								<h3 className="free" >Day Pass</h3>
							</div>
							<div className="panel-body text-center">
								<p><strong>$0</strong></p>
							</div>
							<ul className="list-group text-center">
								<li className="list-group-item"><i className="fa fa-check"></i> Personal use</li>
								<li className="list-group-item"><i className="fa fa-check"></i> Unlimited Game Play</li>
								<li className="list-group-item"><i className="fa fa-check"></i> No Support</li>
							</ul>
							<div className="panel-footer">
								<a className="btn btn-lg btn-block btn-secondary" href="#">BUY NOW!</a>
							</div>
						</div>
					</div>
					<div className="col-md-4 col-sm-4 text-center">
						<div className="panel panel-warning panel-pricing">
							<div className="panel-heading">
								<i className="fa fa-cog fa-spin"></i>
								<h3 className="monthly" >Monthly</h3>
							</div>
							<div className="panel-body text-center">
								<p><strong>$4.99 / Month</strong></p>
							</div>
							<ul className="list-group text-center">
								<li className="list-group-item"><i className="fa fa-check"></i> Personal use</li>
								<li className="list-group-item"><i className="fa fa-check"></i> Unlimited Game Play</li>
								<li className="list-group-item"><i className="fa fa-check"></i> 27/7 support</li>
							</ul>
							<div className="panel-footer">
								<a className="btn btn-lg btn-block btn-warning" href="#">BUY NOW!</a>
							</div>
						</div>
					</div>
					<div className="col-md-4 col-sm-4 text-center">
						<div className="panel panel-success panel-pricing">
							<div className="panel-heading">
								<i className="fa fa-refresh fa-spin"></i>
								<h2 className="yearly" >Yearly</h2>
							</div>
							<div className="panel-body text-center">
								<p><strong>$49.99 / Year</strong></p>
							</div>
							<ul className="list-group text-center">
								<li className="list-group-item"><i className="fa fa-check"></i> Personal use</li>
								<li className="list-group-item"><i className="fa fa-check"></i> Unlimited Game Play</li>
								<li className="list-group-item"><i className="fa fa-check"></i> 27/7 support</li>
							</ul>
							<div className="panel-footer">
								<a className="btn btn-lg btn-block btn-success" href="#">BUY NOW!</a>
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>
	)
}
