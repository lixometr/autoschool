<template>
	<div class="main-wrapper main-wrapper--cabinet main-wrapper--footer-without-border">
		<!-- <img alt="Vue logo" src="../assets/logo.png"> -->
		<TopNav :cabinet="true"/>
		<div class=" container pt-0">
			<div class="cabinet-block p-0 bg-white"> 
				<div class="row mx-0">
					<AsideQ/>
					
					<div class="col py-4 px-lg-5 px-3">
						<div class="row pb-3">
							<div class="col h3 strong ">Result</div>
							<div class="col-auto">
								<button class="btn btn-md  btn-outline-primary">Support?</button>
							</div>
						</div>
						
						<p class="mb-3">The Pre-Licensing Course Completion Certificate (MV-278) is given to you at the completion of the
course. This certificate is needed to schedule a road test. A valid MV-278 and Learner’s Permit
must be given to the Motor Vehicle License Examiner when you appear for the road test</p>
					
						<div class="pb-3">
							<div class="h6 strong">One line question title?</div>
							<div class="smallest pb-3">Your evaluation</div>
							<div class="star-block">
								<div class="star-block__item">
									<Star></Star>
								</div>
								<div class="star-block__item ">
									<Star></Star>
								</div>
								<div class="star-block__item ">
									<Star></Star>
								</div>
								<div class="star-block__item ">
									<Star></Star>
								</div>
								<div class="star-block__item ">
									<Star></Star>
								</div>
							</div>
						</div>
						
						<div class="pb-3">
							<div class="h6 strong">One line question title?</div>
							<div class="smallest pb-3">Your evaluation</div>
							<div class="star-block">
								<div class="star-block__item">
									<Star></Star>
								</div>
								<div class="star-block__item ">
									<Star></Star>
								</div>
								<div class="star-block__item ">
									<Star></Star>
								</div>
								<div class="star-block__item ">
									<Star></Star>
								</div>
								<div class="star-block__item ">
									<Star></Star>
								</div>
							</div>
						</div>
						<div class="pb-3">
							<div class="h6 strong">One line question title?</div>
							<div class="smallest pb-3">Your evaluation</div>
							<div class="star-block">
								<div class="star-block__item">
									<Star></Star>
								</div>
								<div class="star-block__item ">
									<Star></Star>
								</div>
								<div class="star-block__item ">
									<Star></Star>
								</div>
								<div class="star-block__item ">
									<Star></Star>
								</div>
								<div class="star-block__item ">
									<Star></Star>
								</div>
							</div>
						</div>
						<div class="py-5  col-xxl-11">
							<div class="row pb-3">
								<div class="col-xxl-5 col-auto">
									<img src="../../assets/img/congratulation.svg" alt="" class="res-i">
								</div>
								<div class="col">
									<div class="h6 strong">Congratulations on completing the course</div>
									<p>The Pre-Licensing Course Completion Certificate (MV-278) is given to you at the completion of the course. This certificate is needed to schedule a road test. A valid MV-278 and Learner’s Permit must be given to the Motor Vehicle License Examiner when you appear for the road test</p>
								</div>
							</div>
							<button class="btn btn-md btn-primary px-3">Download notification</button>
						</div>

						<div class="pb-3">
							<div class="h6 strong">Rate the course and leave your comments on the course</div>
							<div class="smallest pb-3">Your evaluation</div>
							<div class="pb-4"> 
								<div class="star-block">
									<div class="star-block__item">
										<Star></Star>
									</div>
									<div class="star-block__item ">
										<Star></Star>
									</div>
									<div class="star-block__item ">
										<Star></Star>
									</div>
									<div class="star-block__item ">
										<Star></Star>
									</div>
									<div class="star-block__item ">
										<Star></Star>
									</div>
								</div>
							</div>
							<label for="" class="input-wrap">
								<span class="input-wrap__title">Your comments, requests or suggestions </span> 
								<textarea name="" rows="10" class="form-control"></textarea>
							</label>
							<button class="btn btn-md btn-primary px-5">Send</button>
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
import Star from '@/components/icons/Star.vue'
// import Print from '@/components/icons/Print.vue'

export default {
	name: 'Faq',
	components: { 
		TopNav,
		// ChevronLeft,
		// Close,
		AsideQ,
		Star,
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
