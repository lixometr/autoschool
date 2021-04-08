<template>
	<div class="main-wrapper main-wrapper--cabinet main-wrapper--footer-without-border">
		<!-- <img alt="Vue logo" src="../assets/logo.png"> -->
		<TopNav :cabinet="true"/>
		<div class=" container pt-0">
			<div class="cabinet-block p-0 bg-white"> 
				<div class="row mx-0">
					<AsideQ/>
					
					<div class="col py-4 px-lg-5 px-3  ">
						<div class="row pb-3">
							<div class="col h3 strong ">Units</div>
							<div class="col-auto">
								<button class="btn btn-md  btn-outline-primary">Support?</button>
							</div>
						</div>
						<div class="h4 strong text-primary">UNIT I: INTRODUCTION TO THE PRE-LICENSING COURSE</div>
						<div class="row pb-3">
							<div class="col-auto">
								<a href="#" class="strong">
									<Download/>
									<span class="ms-2">Download material</span>
								</a>
							</div>
							
							<div class="col-auto">
								<a href="#" class="strong">
									<Print/>
									<span class="ms-2">Print</span>
								</a>
							</div> 
						</div>
						<div class="pb-3">

							<div class="h5">The purpose of the Pre-Licensing Course is to help the new driver,</div>
							
							<p>- know their responsibilities,</p>
							<p>- understand the “rules-of-the-road”,</p>
							<p>- drive safely and use techniques to avoid crashes,</p>
							<p>- understand why occupant protection devices are needed to protect you and your passengers from possible injury, and</p>
							<p>- recognize the risk of driving when tired or after the consumption of alcohol or other drugs. </p>
						</div>
						<div class="pb-3">
							<div class="h5 strong">Pre-Licensing Course Completion Certificate (MV-278)</div>
							<p>The Pre-Licensing Course Completion Certificate (MV-278) is given to you at the completion of the
course. This certificate is needed to schedule a road test. A valid MV-278 and Learner’s Permit
must be given to the Motor Vehicle License Examiner when you appear for the road test. The MV-278
certificate is valid for one year from the date of issuance. </p>

						</div>
						<div class="pb-3">
							<audio src="" controls class="w-100"></audio>
						</div>

						<div class="row pt-5 align-items-center">
							<div class="col mb-3 order-first">
								<ProgressLine/>
							</div>
							<div class="col-auto">
								<button class="btn btn-md btn-primary">Next Page</button>
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
import AsideQ from '@/components/AsideQ.vue'
import ProgressLine from '@/components/ProgressLine.vue'

// import Close from '@/components/icons/Close.vue'
import Download from '@/components/icons/Download.vue'
import Print from '@/components/icons/Print.vue'

export default {
	name: 'Faq',
	components: { 
		TopNav,
		// ChevronLeft,
		// Close,
		AsideQ,
		Download,
		Print,
		ProgressLine,
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
				th1:"Name/Email",
				th2:"DOB",
				th3:"ID/Num. doc.",
				th4:"Class",
				th5:"Enrollment Date/Time", 
				th6:"Where?", 
				th7:"Partner name ID", 
				th8:"Manager name", 
				th9:"Payment",
				th10:"Promocode", 
				th11:"Total time", 
				th12:"Sesions", 
				th13:"End Date/Time", 
				items: [
						{
							td1:"John Smith",
							td1Link:"sample@sample.com",
							td2:"10.10.1996",
							td3:"ID 755 444 556",
							td3a:"# 458 998 556 ",
							td4:"D",
							td5:"15.10.16   15:20", 
							td6:"Unit 3",
							td7:"1558",
							td8:"Maria A.",
							td9:"$4",
							td10:"CZ-BASE",
							td11:"70 min.",
							td12:"3",
							td13:"15.10.16   15:20", 
						}, 
						{

							danger: true,
							td1:"John Smith",
							td1Link:"sample@sample.com",
							td2:"10.10.1996",
							td3:"ID 755 444 556",
							td3a:"# 458 998 556 ",
							td4:"D",
							td5:"15.10.16   15:20", 
							td6:"Unit 3",
							td7:"1558",
							td8:"Maria A.",
							td9:"$4",
							td10:"CZ-BASE",
							td11:"70 min.",
							td12:"3",
							td13:"15.10.16   15:20", 
						}, 
						{
							td1:"John Smith",
							td1Link:"sample@sample.com",
							td2:"10.10.1996",
							td3:"ID 755 444 556",
							td3a:"# 458 998 556 ",
							td4:"D",
							td5:"15.10.16   15:20", 
							td6:"Unit 3",
							td7:"1558",
							td8:"Maria A.",
							td9:"$4",
							td10:"CZ-BASE",
							td11:"70 min.",
							td12:"3",
							td13:"15.10.16   15:20", 
						}, 
						
					
				]
		}
	}
}
</script>
