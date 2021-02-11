<template>
	<div class="main-wrapper main-wrapper--cabinet main-wrapper--footer-without-border">
		<!-- <img alt="Vue logo" src="../assets/logo.png"> -->
		<TopNav :cabinet="true"/>
		<div class=" container pt-0">
			<div class="cabinet-block p-0 bg-white">
				<div class="cabinet-block__head p-0 border-bottom border-light">
					<div class="row mx-0">
						<div class="col-auto border-right d-flex align-items-center  border-end">
							<a href="#" class="link-back">
								<ChevronLeft/>
								<span class="ms-3 d-none d-md-inline fw-600">Back to users</span>
							</a>
						</div>
						<div class="col">
							<div class="row  align-items-center">
								<div class="col h4 strong mb-0 py-2">John Smith</div>
								<div class="col-auto"><a href="#" class="strong">History of payment</a></div>
								<div class="col-auto"><a href="#" class="strong">Edit user</a></div>
							</div>
						</div>
					</div>
				</div>
				<div class="cabinet-block__body border-bottom border-ligh py-4 px-3">
					<div class="row">
						<div class="col-3">
							<div class="pb-4">
								<div class="smallest text-dark">E-mail</div>
								<div class="strong"><a href="mailto:sample@sample.com">sample@sample.com</a></div>
							</div>
							<div class="pb-4">
								<div class="smallest text-dark">Phone </div>
								<div class="strong">+1 556 889 88 99</div>
							</div>
							<div class="pb-4">
								<div class="smallest text-dark"> Dob</div>
								<div class="strong">15.10.1996 </div>
							</div>
							<div class="pb-4">
								<div class="smallest text-dark">ID </div>
								<div class="strong">755 444 556 </div>
							</div>
							<div class="pb-4">
								<div class="smallest text-dark">Num. doc. </div>
								<div class="strong">458 998 556  </div>
							</div>

						</div>
						<div class="col-3">
							<div class="pb-4">
								<div class="smallest text-dark">Enrollment Date/Time </div>
								<div class="strong">15.10.16   15:20 </div>
							</div>
							<div class="pb-4">
								<div class="smallest text-dark">Where? </div>
								<div class="strong">UNIT 3 </div>
							</div>
							<div class="pb-4">
								<div class="smallest text-dark">Total time </div>
								<div class="strong">70 min. </div>
							</div>
							<div class="pb-4">
								<div class="smallest text-dark">Sesions </div>
								<div class="strong"> 3</div>
							</div>
							<div class="pb-4">
								<div class="smallest text-dark">End Date/Time </div>
								<div class="strong">15.10.16   15:20</div>
							</div>


						</div>
						<div class="col-xxl-5 col">
							<div class="pb-4">
								<div class="smallest text-dark"> Parner name ID</div>
								<div class="strong">1586 </div>
							</div>
							<div class="pb-4">
								<div class="smallest text-dark">Manager name </div>
								<div class="strong">Maria Anderson </div>
							</div>
							<div class="pb-4">
								<div class="smallest text-dark">Paymen </div>
								<div class="strong">4 </div>
							</div>
							<div class="pb-4">
								<div class="smallest text-dark"> Promocode</div>
								<div class="strong">CZ-BASE</div>
							</div>
							<div class="pb-4">
								<div class="smallest text-dark">Notes </div>
								<div class="smallest strong">onths and reduce as many as 4 points from record. Reduced points remain on the driving 
record but are not counted by NYS DMV against the license. Point reduction does 
not remove, delete, subtract or erase violations, convict </div>
							</div>

						</div>
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
// import Pen from '@/components/icons/Pen.vue'

export default {
	name: 'Faq',
	components: { 
		TopNav,
		ChevronLeft,
		// Lock,
		// Pen,
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
