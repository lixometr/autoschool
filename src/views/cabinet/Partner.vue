<template>
	<div class="main-wrapper main-wrapper--cabinet main-wrapper--footer-without-border">
		<!-- <img alt="Vue logo" src="../assets/logo.png"> -->
		<TopNav :cabinet="true"/>
		<div class="  container pt-0">
			<div class="cabinet-block p-0 bg-white">
				<div class="cabinet-block__head p-0 border-bottom border-light">
					<div class="row mx-0">
						<div class="col-auto border-right d-flex align-items-center  border-end">
							<a href="#" class="link-back">
								<ChevronLeft/>
								<span class="ms-3 d-none d-md-inline fw-600">Back to partners</span>
							</a>
						</div>
						<div class="col">
							<div class="row  align-items-center">
								<div class="col h4 strong mb-0 py-2">Appelayka corp.</div>
								<div class="col-auto"><a href="#" class="strong">Documents</a></div>
								<div class="col-auto"><a href="#" class="strong">Edit partner</a></div>
							</div>
						</div>
					</div>
				</div>
				<div class="cabinet-block__body border-bottom border-ligh p-3">
					<div class="row">
						<div class="col">
							<div class="row">
								<div class="col">
									<div class="pb-4">
										<div class="smallest text-dark">Website</div>
										<div class="strong"><a href="appelayka.com">appelayka.com</a></div>
									</div>
									<div class="pb-4">
										<div class="smallest text-dark"> Owner</div>
										<div class="strong"> John Smith</div>
									</div>
									<div class="pb-4">
										<div class="smallest text-dark">FEIN </div>
										<div class="strong">6465489 </div>
									</div>
								</div>
								<div class="col">
									<div class="pb-4">
										<div class="smallest text-dark">Mailing Address </div>
										<div class="strong">1556 Broadway, suite 416 New York, NY, 10120 </div>
									</div>
									<div class="pb-4">
										<div class="smallest text-dark">Phone </div>
										<div class="strong">+1 556 889 88 99</div>
									</div>
									<div class="pb-4">
										<div class="smallest text-dark">E-mail </div>
										<div class="strong">sample@sample.com </div>
									</div>

								</div>
								<div class="col">
									<div class="pb-4">
										<div class="smallest text-dark">Contact </div>
										<div class="strong">
											John Smith
											<br> 
											manager
											<br> 
											+7 985 998 775 66
											<br>
											test@test.com
										</div>
									</div>

								</div>
								<div class="col">
									<div class="pb-4">
										<div class="smallest text-dark">Total students </div>
										<div class="strong">150 </div>
									</div>

								</div>
							</div>
						</div>
						<div class="col-auto">
							<div class="manager-block text-white">
								<div class="pb-4">
									<div class="smallest  ">Our manager</div>
									<div class="strong">Jesica Abrams</div>
								</div>
								<div class="pb-4">
									<div class="smallest  ">Fee</div>
									<div class="strong">$20.00 </div>
								</div>

							</div>
						</div>
					</div>
				</div>
				<div class="cabinet-block__body p-3">
					<div class="alert alert-success small" role="alert">
						<strong>Notes:</strong> You have 27 Day(s) to complete this course. If you do not complete the course by then you will not be able to graduate the course and will have to take the entire course again
						<Pen/>
					</div>
					<div class="col-xl-8">
						<table class="table">
							<thead>
								<tr>
									<th colspan="2" class="border-none text-body h5 strong"> Payment history</th>
									<th class="border-none text-body h5 text-end"><div class=" fw-400">Total: <strong>$1400.00</strong></div></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>10.12.2020</td>
									<td>Payments for <strong>20</strong> students</td>
									<td class=" text-end"><strong>$700</strong></td>
								</tr>
								<tr>
									<td>10.12.2020</td>
									<td>Payments for <strong>20</strong> students</td>
									<td class=" text-end"><strong>$700</strong></td>
								</tr>
								<tr>
									<td>10.12.2020</td>
									<td>Payments for <strong>20</strong> students</td>
									<td class=" text-end"><strong>$700</strong></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
 

		<Footer/>

	</div>
</template>

<style  ></style>

<script>
 
import TopNav from '@/components/TopNav.vue' 
import Footer from '@/components/Footer.vue'
import ChevronLeft from '@/components/icons/ChevronLeft.vue'
// import Lock from '@/components/icons/Lock.vue'
import Pen from '@/components/icons/Pen.vue'

export default {
	name: 'Faq',
	components: { 
		TopNav,
		ChevronLeft,
		// Lock,
		Pen,
		// SRegisterPage,
		// HeaderBlock,
		// SRegister,
		// SAbout,
		// SWhatWillLearn,
		// SPromocode,
		// SPartnerCabinet,
		// FormAside,
		Footer,
	},
	data() {
		return{
				th1:"Business Name / website",
				th2:"Application date",
				th3:"Address",
				th4:"ZIP code",
				th5:"ID Partner", 
				th6:"Contact ", 
				th7:"Manager", 
				th8:"Fee", 
				th9:"Need to pay", 
				items: [
					{
						td1:"Appelayka corp.",
						td1Link:"sample.com",
						td2:"10.12.2020",
						td3:`1556 Broadway, suite 416 <br>New York, NY`,
						td4:"14589",
						td5:"1419",
						td6:"Steven Bernson", 
						td6Tel:"(646) 592-9988", 
						td7:"Mary Anderson", 
						td8:"$20.00", 
						td9:"$120.00", 
					},
					
					{
						td1:"Appelayka corp.",
						td1Link:"sample.com",
						td2:"10.12.2020",
						td3:`1556 Broadway, suite 416 <br>New York, NY`,
						td4:"14589",
						td5:"1419",
						td6:"Steven Bernson", 
						td6Tel:"(646) 592-9988", 
						td7:"Mary Anderson", 
						td8:"$20.00", 
						td9:"$120.00", 
					},
					{
						td1:"Appelayka corp.",
						td1Link:"sample.com",
						td2:"10.12.2020",
						td3:`1556 Broadway, suite 416 <br>New York, NY`,
						td4:"14589",
						td5:"1419",
						td6:"Steven Bernson", 
						td6Tel:"(646) 592-9988", 
						td7:"Mary Anderson", 
						td8:"$20.00", 
						td9:"$120.00", 
					},

				]
		}
	}
}
</script>
