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
							<div class="col h3 strong ">Units</div>
							<div class="col-auto">
								<button class="btn btn-md  btn-outline-primary">Support?</button>
							</div>
						</div>
						
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
						<div class="h4 strong text-primary">Video - how to ride to left side</div>
						<div class="video-block">
							<iframe width="560" height="315" src="https://www.youtube.com/embed/51LqwuOV4RI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						</div>
						<div class="smallest pb-3">Sources: Video by Toa Heftiba on Unsplash, CC0</div>

						<div class="pb-3">

							<div class="h6 strong">Pre-Licensing Course Completion Certificate (MV-278)</div>
							
							<p class="col-xxl-10">The Pre-Licensing Course Completion Certificate (MV-278) is given to you at the completion of the
course. This certificate is needed to schedule a road test. A valid MV-278 and Learner’s Permit
must be given to the Motor Vehicle License Examiner when you appear for the road test</p>
						</div>
						<div class="pb-3">
							<div class="h6">Know their responsibilities, 
								<div  class="input-wrap d-lg-inline-block"> 
										<select  class="form-select form-select--q border-success  ">
											<option value="">True</option>
											<option value="">False</option>
											<option value="">Select</option>
										</select>
						
									</div>
							</div>
							<div class="h6">Understand the “rules-of-the-road”,
								<div  class="input-wrap d-lg-inline-block"> 
										<select  class="form-select form-select--q border-danger  ">
											<option value="">False</option>
											<option value="">True</option>
											<option value="">Select</option>
										</select>
						
									</div>
							</div>
							<div class="h6">Drive safely and use techniques to avoid crashes,
								<div  class="input-wrap d-lg-inline-block"> 
									<select  class="form-select form-select--q  ">
										<option value="">Select</option>
										<option value="">False</option>
										<option value="">True</option>
									</select>
								</div>
							</div>
							<div class="h6">Understand why occupant protection devices are 
								<div  class="input-wrap d-lg-inline-block"> 
									<select  class="form-select form-select--q  ">
										<option value="">Select</option>
										<option value="">False</option>
										<option value="">True</option>
									</select>
								</div>
							</div>
							<div class="h6">Recognize the risk of driving when tired or after the consumption
								<div  class="input-wrap d-lg-inline-block"> 
									<select  class="form-select form-select--q  ">
										<option value="">Select</option>
										<option value="">False</option>
										<option value="">True</option>
									</select>
								</div>
							</div>

						</div> 
						<div class="pb-3 block-gradient">
								<div class="block-gradient__title">Should you need to&nbsp;ride with seat belt on&nbsp;in&nbsp;car or&nbsp;throw it&nbsp;over my&nbsp;leg?</div>
								<div class="block-gradient__btns">
									<button class="btn btn-white">NO</button>
									<button class="btn btn-white">YES</button>
								</div>
						</div>

						<div class="py-5">
							<div class="row row-lines">

							<div class=" col-auto">
								<div class="left-btn border-success" >The Pre-Licensing
									<div class="left-btn-line" style="transform: rotate(28deg); width: 86px;"></div>
								</div>
								<div class="left-btn border-danger" >The Pre-Licensing</div>
								<div class="left-btn border-success" >The Pre-Licensing</div>
								<div class="left-btn">The Pre-Licensing</div>
							</div>
							<div class="col">
								<div class="right-text-block  border-success"  >
									The Pre-Licensing Course Completion Certificate (MV-278) is given to you at the completion of the course. This certificate is needed to schedule a road test. A valid  MV-278 and Learner’s Permit must be given to the Motor Vehicle License Examiner  when you appear for the road test
								</div>
								<div class="right-text-block  border-danger-success"  >
									The Pre-Licensing Course Completion Certificate (MV-278) is given to you at the completion of the course. This certificate is needed to schedule a road test. A valid  MV-278 and Learner’s Permit must be given to the Motor Vehicle License Examiner  when you appear for the road test
								</div>
								<div class="right-text-block  border-danger"  >
									The Pre-Licensing Course Completion Certificate (MV-278) is given to you at the completion of the course. This certificate is needed to schedule a road test. A valid  MV-278 and Learner’s Permit must be given to the Motor Vehicle License Examiner  when you appear for the road test
								</div>
								<div class="right-text-block" >
									The Pre-Licensing Course Completion Certificate (MV-278) is given to you at the completion of the course. This certificate is needed to schedule a road test. A valid  MV-278 and Learner’s Permit must be given to the Motor Vehicle License Examiner  when you appear for the road test
								</div>
							</div>
							</div>
						</div>
						

						<div class="row pt-5 align-items-center">
							<div class="col mb-3 order-first">
								<ProgressLine/>
							</div>
							<div class="col-auto mb-3">
								<button class="btn btn-md btn-primary disabled">Next Page</button>
							</div>
							<div class="col-lg-auto order-xl-first  mb-3 text-end">The button will be available through 190 seconds</div>
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
