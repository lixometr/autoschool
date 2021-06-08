z<template>
	<div class="main-wrapper main-wrapper--cabinet main-wrapper--footer-without-border">
		<!-- <img alt="Vue logo" src="../assets/logo.png"> -->
		<TopNav :cabinet="true"/>
		<div class=" container pt-0">
			<div class="cabinet-block p-0 bg-white"> 
				<div class="row mx-0">
					<AsideQ/>
					
					<div class="col py-4 px-lg-5 px-3">
						<div class="row pb-3">
							<div class="col h3 strong ">Units</div>
							<div class="col-auto">
								<button class="btn btn-md  btn-outline-primary">Support?</button>
							</div>
						</div>

						<div class="h4 strong text-primary mb-4">Control question</div>

						<div class="pb-3  "> 
							<div class="h6 strong  ">Question 1</div> 
							<p class="pt-2">The Pre-Licensing Course Completion Certificate (MV-278) is given to you at the completion of the course. This certificate is needed to schedule a road test. A valid MV-278 and Learner’s Permit must be given to the Motor Vehicle License Examiner when you appear for the road test</p> 
							<p class="strong text-danger">You answered incorrectly</p>
							<button class="btn btn-answer">speeding</button>
							<button class="btn btn-answer btn-answer--invalid">reckless driving <span>Incorrect</span></button>
							<button class="btn btn-answer btn-answer--valid">following too closely <span>Correct</span></button>
							<button class="btn btn-answer">getting into a speed contest</button>
							<button class="btn btn-answer">use of a mobile telephone (like a cell phone)</button>
						</div>
						<div class="pb-3  "> 
							<div class="h6 strong  ">Question 2</div> 
							<p class="pt-2">The Pre-Licensing Course Completion Certificate (MV-278) is given to you at the completion of the course. This certificate is needed to schedule a road test. A valid MV-278 and Learner’s Permit must be given to the Motor Vehicle License Examiner when you appear for the road test</p> 
							<p class="strong text-success">You answered correctly</p>
							<button class="btn btn-answer">speeding</button>
							<button class="btn btn-answer  ">reckless driving  </button>
							<button class="btn btn-answer btn-answer--valid">following too closely <span>Correct</span></button>
							<button class="btn btn-answer">getting into a speed contest</button>
							<button class="btn btn-answer">use of a mobile telephone (like a cell phone)</button>
						</div>
						<div class="pb-3  "> 
							<div class="h6 strong  ">Question 3</div> 
							<p class="pt-2">The Pre-Licensing Course Completion Certificate (MV-278) is given to you at the completion of the course. This certificate is needed to schedule a road test. A valid MV-278 and Learner’s Permit must be given to the Motor Vehicle License Examiner when you appear for the road test</p> 
							<p class="strong  ">Select an answer option</p>
							<button class="btn btn-answer">speeding</button>
							<button class="btn btn-answer  ">reckless driving  </button>
							<button class="btn btn-answer  ">following too closely </button>
							<button class="btn btn-answer">getting into a speed contest</button>
							<button class="btn btn-answer">use of a mobile telephone (like a cell phone)</button>
						</div>
						<div class="pb-3">
							<div class="h4 strong">You answered: <span class="text-danger">66% correctly</span></div>
							<div class="h4 strong">Passing Score: 70%</div>
						</div>
						<div class="pb-3 row align-items-center">
							<div class="col-auto">
								<button class="btn btn-md  btn-primary px-4">Go again</button>
							</div>
							<div class="col-auto">
								Attempts left to try: <strong class="text-danger">3</strong>
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
// import ProgressLine from '@/components/ProgressLine.vue'

// import Close from '@/components/icons/Close.vue'
// import Download from '@/components/icons/Download.vue'
// import Print from '@/components/icons/Print.vue'

export default {
	name: 'Faq',
	components: { 
		TopNav,
		// ChevronLeft,
		// Close,
		AsideQ,
		// Download,
		// Print,
		// ProgressLine,
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
