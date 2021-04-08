<template>
	<div class="main-wrapper main-wrapper--cabinet main-wrapper--footer-without-border">
		<!-- <img alt="Vue logo" src="../assets/logo.png"> -->
		<TopNav :cabinet="true"/>
		<div class=" container pt-0">
			<div class="cabinet-block p-0 bg-white">
				<div class="cabinet-block__head p-0 ">
					<div class="row mx-0">
						<a class="col-3 ps-4   d-flex align-items-center btn-back btn btn-primary  border-end"> 
								<ChevronLeft/>
								<span class="ms-3 d-none d-md-inline fw-600">Back to dashboard</span> 
						</a>
						<div class="col d-flex border-bottom border-light">
							<a href="#" class="add-lang active">English</a>
							<a href="#" class="add-lang">+ Add language</a>
						</div>
					</div>
				</div>
				<div class="cabinet-block__body">
					<div class="row mx-0">
						<div class="aside col-3 py-4 px-4 border-end border-primary">
							<button class="btn btn-outline-primary w-100 btn-md mb-3">+ Add unit</button>
							<div class="pb-3">
								<div class="h5 strong">Unit 1 <Close/></div>
								<ul class="ms-3">
									<li class="drag" ><span class="text-primary">Rules for Persons with a Learner Permit</span></li>
									<li class="drag"  >Rules for Persons with a Learner Permit</li>
								</ul>
								<button class="btn btn-outline-primary btn-md ms-3 mb-3">+ Add part of unit 1</button>
							</div>
							<div class="pb-3">
								<div class="h5 strong">Unit 2 <Close/></div>
								<ul class="ms-3"> 
								</ul>
								<button class="btn btn-outline-primary btn-md ms-3 mb-3">+ Add part of unit 2</button>
							</div>

						</div>
						<div class="col p-0">
							<div class="py-4 px-lg-5 px-3   border-bottom border-light">
								<label  class="input-wrap">
									<span class="input-wrap__title">Name part of unit </span> 
									<input type="text" class="form-control" value="Rules for Persons with a Learner Permit">
								</label>
								
								<label  class="input-wrap">
									<span class="input-wrap__title">Your question </span> 
									<textarea name=""  class="form-control">developer add plugin</textarea>
								</label>
							</div>
							<div class="py-4 px-lg-5 px-3   border-bottom border-light">
								<div class="row">
									<div class="col">
										<label  class="input-wrap">
											<span class="input-wrap__title">Question </span> 
											<textarea name=""  class="form-control">Rules for Persons with a Learner Permit</textarea>
										</label>
										<span class="input-wrap__title">Answer options</span> 
										<div class="row">
											<div class="col">
												<div class="row">
													<div class="col">
														<div class="input-group input-group--q mb-4">
															<span class="input-group-text"> 1</span>
															<div class="delete-q">
																<Close/>
															</div>
															<input type="text"  placeholder="Write an answer choice" class="form-control">
														</div>
														<label class="form-check">
															<input class="form-check-input" type="radio" name="flexRadioDefault"  >
															<span class="form-check-label" >True</span>
														</label>
														
													</div>
													<div class="col">
														<div class="input-group input-group--q mb-4">
															<span class="input-group-text"> 1</span>
															<div class="delete-q">
																<Close/>
															</div>
															<input type="text"  placeholder="Write an answer choice" class="form-control">
														</div>
														<label class="form-check">
															<input class="form-check-input" type="radio" name="flexRadioDefault"  >
															<span class="form-check-label" >True</span>
														</label>
														
													</div> 
												</div>
											</div>
											<div class="col-auto pt-3">
												<a href="#" class="strong">+ Add answer</a>
											</div>
										</div>
									</div>
									<div class="col-2 pt-4 text-end">
										<a href="#" class="strong text-body"> <Close/> delete </a>
									</div>
								</div>
							</div>
							
							<div class="py-4 px-lg-5 px-3   border-bottom border-primary">
								<div class="row">
									<div class="col">
										<label  class="input-wrap">
											<span class="input-wrap__title">Headline of cheklist </span> 
											<input type="text" class="form-control" value="Rules for Persons with a Learner Permit">
										</label>
										<label  class="input-wrap">
											<span class="input-wrap__title">Overview of cheklist </span> 
											<textarea name=""  class="form-control">Rules for Persons with a Learner Permit</textarea>
										</label>
										<span class="input-wrap__title">Answer options</span> 
										<div class="row">
											<div class="col">
												<div class="row">
													<div class="col">
														<label  class="input-wrap">
															<span class="input-wrap__title">Headline of cheklist </span> 
															<input type="text" class="form-control" value="Rules for Persons with a Learner Permit">
														</label>
													</div>
													<div class="col-4">
														<label  class="input-wrap">
															<span class="input-wrap__title">Class of permit </span>
															<select  class="form-select  ">
																<option value="">United States</option>
																<option value="">United States</option>
																<option value="">United States</option>
																<option value="">United States</option>
															</select>
											
														</label>
													</div>
													<div class="col-auto pt-4 px-0">
														<a href="#" class=""> <Close/></a>
													</div>

												</div>
											</div>
											<div class="col-12 pt-2">
												<a href="#" class="strong">+ Add answer</a>
											</div>
										</div>
									</div>
									<div class="col-2 pt-4 text-end">
										<a href="#" class="strong text-body"> <Close/> delete </a>
									</div>
								</div>
							</div>
							<div class="py-4 px-lg-5 px-3   ">
									<div class="row">
										<div class="col-4 mb-5">
											<button class="btn w-100 btn-md btn-outline-primary">Add Question</button>
										</div>
										<div class="col-4 mb-5">
											<button class="btn w-100 btn-md btn-outline-primary">Add Cheklist</button>
										</div>
									</div>
									<div class="row">
										<div class="col-4 mb-2">
											<button class="btn w-100 btn-md btn-outline-primary btn-bg">Delete part of unit</button>
										</div>
										<div class="col"></div>
										<div class="col-4 mb-2">
											<button class="btn w-100 btn-md btn-primary">Save part of unit</button>
										</div>
									</div>
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
import Close from '@/components/icons/Close.vue'
// import Search from '@/components/icons/Search.vue'

export default {
	name: 'Faq',
	components: { 
		TopNav,
		ChevronLeft,
		Close,
		// Search,
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
