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
							<a href="#" class="add-lang ">Chinese</a>
							<a href="#" class="add-lang add-lang--link">+ Add language</a>
						</div>
					</div>
				</div>
				<div class="cabinet-block__body">
					<div class="row mx-0">
						<div class="aside col-3 py-4 px-4 border-end border-primary">
							<button class="btn btn-outline-primary w-100 btn-md mb-3">+ Add unit</button>
							<div class="pb-3">
								<div class="row gx-2 align-items-center">
									<div class="col">
										<div class="h5 strong">Unit 1 <Close/></div>

									</div>
									<div class="col-auto mb-2">
											<small>14 min</small>
									</div>
									<div class="col-auto mb-2">
										<Clock/>
									</div>
								</div>
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
							<div class="pt-4 pb-2 px-lg-5 px-3   border-bottom border-light">
								<label  class="input-wrap">
									<span class="input-wrap__title">Name part of unit </span> 
									<input type="text" class="form-control" value="Rules for Persons with a Learner Permit">
								</label>

							</div>
							<div class="pt-2 pb-4   border-bottom border-primary">
								<div class="add-var px-lg-5 px-3  border-bottom border-light">
									<div class="add-var__btn">Info</div>
									<div class="add-var__btn">Question</div>
									<div class="add-var__btn">Checklist</div>
									<div class="add-var__btn">Croscheck</div>
									<div class="add-var__btn">Checkbox</div>
								</div>
								<div class="control-line px-lg-5 px-3 ">
									<div class="row">
										<div class="col h5 mb-0 strong">Info</div>
										<div class="col-auto">
											<div class="control-line__btn">
												<ArrowUp/>
												Up
											</div>
										</div>
										<div class="col-auto">
											<div class="control-line__btn">
												<ArrowDown/>
												Down
											</div>
										</div>
										<div class="col-auto">
											<div class="control-line__btn">
												<Close/>
												Delete
											</div>
										</div>
									</div>
								</div> 
								<label  class="input-wrap"> 
									<textarea name=""  class="form-control">developer add plugin</textarea>
								</label> 
							</div>
							<!-- // -->
							
							<div class=" pb-4   border-bottom border-primary">
 
								<div class="control-line px-lg-5 px-3 ">
									<div class="row">
										<div class="col h5 mb-0 strong">Question #1</div>
										<div class="col-auto">
											<div class="control-line__btn">
												<ArrowUp/>
												Up
											</div>
										</div>
										<div class="col-auto">
											<div class="control-line__btn">
												<ArrowDown/>
												Down
											</div>
										</div>
										<div class="col-auto">
											<div class="control-line__btn">
												<Close/>
												Delete
											</div>
										</div>
									</div>
								</div> 
								<div class="pt-4 px-lg-5 px-3"> 
									<label  class="input-wrap">
										<span class="input-wrap__title strong">Question </span> 
										<textarea name=""  class="form-control">Rules for Persons with a Learner Permit</textarea>
									</label>
									<div class="input-wrap__title strong">Answer options </div> 
									<div class="row row--btns">
										<div class="col-auto">
											<div class="row">
												<div class="col-auto">
													<button class="btn btn-primary">Yes</button>
												</div>
												<div class="col-auto">
													<label class="form-check form-check--success">
														<input class="form-check-input" type="radio" name="flexRadioDefault2"  >
														<span class="form-check-label strong" >True</span>
													</label>
												</div>
											</div>
										</div>
										
										<div class="col-auto">
											<div class="row">
												<div class="col-auto">
													<button class="btn btn-danger">No</button>
												</div>
												<div class="col-auto">
													<label class="form-check form-check--success">
														<input class="form-check-input" type="radio" name="flexRadioDefault2"  >
														<span class="form-check-label strong" >True</span>
													</label>
												</div>
											</div>
										</div>

									</div>
								</div>
							</div>
							<!-- // -->

							<div class=" pb-4   border-bottom border-primary">
 
								<div class="control-line px-lg-5 px-3 ">
									<div class="row">
										<div class="col h5 mb-0 strong">Checklist #1</div>
										<div class="col-auto">
											<div class="control-line__btn">
												<ArrowUp/>
												Up
											</div>
										</div>
										<div class="col-auto">
											<div class="control-line__btn">
												<ArrowDown/>
												Down
											</div>
										</div>
										<div class="col-auto">
											<div class="control-line__btn">
												<Close/>
												Delete
											</div>
										</div>
									</div>
								</div> 
								<div class="pt-4 px-lg-5 px-3"> 
									<label  class="input-wrap">
										<span class="input-wrap__title strong">Headline </span> 
										<input type="text" class="form-control" value="Rules for Persons with a Learner Permit">
									</label>
									<label  class="input-wrap">
										<span class="input-wrap__title strong">Overview </span> 
										<textarea name=""  class="form-control">Rules for Persons with a Learner Permit</textarea>
									</label>
									<span class="input-wrap__title strong">Answer options </span> 
									<div class="row">
										<div class="col">
											<div class="input-group input-group--q mb-4">
												<span class="input-group-text"> 1</span>
												<div class="delete-q">
													<Close/>
												</div>
												<input type="text"  placeholder="Write an answer choice" class="form-control">
											</div>
										</div>
										<div class="col-auto pt-3">
											<label class="form-check form-check--danger">
														<input class="form-check-input" type="radio" name="flexRadioDefault3"  >
														<span class="form-check-label strong" >Falce</span>
													</label>
										</div>
										<div class="col-auto pt-3">
											<label class="form-check form-check--success">
														<input class="form-check-input" type="radio" name="flexRadioDefault3"  >
														<span class="form-check-label strong" >True</span>
													</label>
										</div>
									</div>
									<div class="row">
										<div class="col">
											<div class="input-group input-group--q mb-4">
												<span class="input-group-text"> 2</span>
												<div class="delete-q">
													<Close/>
												</div>
												<input type="text"  placeholder="Write an answer choice" class="form-control">
											</div>
										</div>
										<div class="col-auto pt-3">
											<label class="form-check form-check--danger">
														<input class="form-check-input" type="radio" name="flexRadioDefault4"  >
														<span class="form-check-label strong" >Falce</span>
													</label>
										</div>
										<div class="col-auto pt-3">
											<label class="form-check form-check--success">
														<input class="form-check-input" type="radio" name="flexRadioDefault4"  >
														<span class="form-check-label strong" >True</span>
													</label>
										</div>
									</div>
									<a href="#" class="strong">+ Add answer</a>


								</div>
							</div>
							<!-- // -->
							
							<div class="   border-bottom border-primary">
								<div class="control-line px-lg-5 px-3 ">
									<div class="row">
										<div class="col h5 mb-0 strong">Test #1</div>
										<div class="col-auto">
											<div class="control-line__btn">
												<ArrowUp/>
												Up
											</div>
										</div>
										<div class="col-auto">
											<div class="control-line__btn">
												<ArrowDown/>
												Down
											</div>
										</div>
										<div class="col-auto">
											<div class="control-line__btn">
												<Close/>
												Delete
											</div>
										</div>
									</div>
								</div> 
								<div class="pt-4 px-lg-5 px-3 pb-4  bg-light-bll border-bottom border-white"> 
									<div class="row">
										<div class="col">
											<span class="input-wrap__title strong">Question #1 </span> 
										</div>
										<div class="col-auto">
											<div class="input-group btn-group">
												<button class="btn btn-light-bl btn-move"><ArrowUp/></button>
												<button class="btn btn-light-bl btn-move"><ArrowDown/></button>
												<button class="btn btn-light-bl btn-move"><Close/></button>
											</div>
										</div>
									</div>
									<label  class="input-wrap">
										<textarea name=""  class="form-control">Rules for Persons with a Learner Permit</textarea>
									</label>
							
									<span class="input-wrap__title strong">Answer options </span> 
									<div class="row">
										<div class="col">
											<div class="input-group input-group--q mb-4">
												<span class="input-group-text"> 1</span>
												<div class="delete-q">
													<Close/>
												</div>
												<input type="text"  placeholder="Write an answer choice" class="form-control">
											</div>
										</div>
									
										<div class="col-auto pt-3">
											<label class="form-check form-check--success">
														<input class="form-check-input" type="radio" name="flexRadioDefault3"  >
														<span class="form-check-label strong" >True</span>
													</label>
										</div>
									</div>
									<div class="row">
										<div class="col">
											<div class="input-group input-group--q mb-4">
												<span class="input-group-text"> 2</span>
												<div class="delete-q">
													<Close/>
												</div>
												<input type="text"  placeholder="Write an answer choice" class="form-control">
											</div>
										</div>
										<div class="col-auto pt-3">
											<label class="form-check form-check--success">
														<input class="form-check-input" type="radio" name="flexRadioDefault4"  >
														<span class="form-check-label strong" >True</span>
													</label>
										</div>
									</div>
									<div >
										<a href="#" class="strong">+ Add answer</a>
									</div>


								</div>
								
								<div class="pt-4 px-lg-5 px-3 pb-4  bg-light-bll border-bottom border-white"> 
									<div class="row">
										<div class="col">
											<span class="input-wrap__title strong">Question #1 </span> 
										</div>
										<div class="col-auto">
											<div class="input-group btn-group">
												<button class="btn btn-light-bl btn-move"><ArrowUp/></button>
												<button class="btn btn-light-bl btn-move"><ArrowDown/></button>
												<button class="btn btn-light-bl btn-move"><Close/></button>
											</div>
										</div>
									</div>
									<label  class="input-wrap">
										<textarea name=""  class="form-control">Rules for Persons with a Learner Permit</textarea>
									</label>
							
									<span class="input-wrap__title strong">Answer options </span> 
									<div class="row">
										<div class="col">
											<div class="input-group input-group--q mb-4">
												<span class="input-group-text"> 1</span>
												<div class="delete-q">
													<Close/>
												</div>
												<input type="text"  placeholder="Write an answer choice" class="form-control">
											</div>
										</div>
									
										<div class="col-auto pt-3">
											<label class="form-check form-check--success">
														<input class="form-check-input" type="radio" name="flexRadioDefault3"  >
														<span class="form-check-label strong" >True</span>
													</label>
										</div>
									</div>
									<div class="row">
										<div class="col">
											<div class="input-group input-group--q mb-4">
												<span class="input-group-text"> 2</span>
												<div class="delete-q">
													<Close/>
												</div>
												<input type="text"  placeholder="Write an answer choice" class="form-control">
											</div>
										</div>
										<div class="col-auto pt-3">
											<label class="form-check form-check--success">
														<input class="form-check-input" type="radio" name="flexRadioDefault4"  >
														<span class="form-check-label strong" >True</span>
													</label>
										</div>
									</div>
									<div >
										<a href="#" class="strong">+ Add answer</a>
									</div>


								</div>
								<button class="btn btn-white w-100">+ Add answer</button>

							</div>
							<!-- // -->


							<div class=" pb-4   border-bottom border-primary">
 
								<div class="control-line px-lg-5 px-3 ">
									<div class="row">
										<div class="col h5 mb-0 strong">Croschek #1</div>
										<div class="col-auto">
											<div class="control-line__btn">
												<ArrowUp/>
												Up
											</div>
										</div>
										<div class="col-auto">
											<div class="control-line__btn">
												<ArrowDown/>
												Down
											</div>
										</div>
										<div class="col-auto">
											<div class="control-line__btn">
												<Close/>
												Delete
											</div>
										</div>
									</div>
								</div> 
								<div class="pt-4 px-lg-5 px-3"> 
										<span class="input-wrap__title strong pb-2">All questions and answers in the unit will be placed in random order </span> 
									<div class="row">

										<label  class="input-wrap col-6">
											<span class="input-wrap__title strong">Question 1 </span> 
											<input type="text"  placeholder="Write an answer choice" class="form-control">
										</label>
										<label  class="input-wrap col-6">
											<span class="input-wrap__title strong">Question2 </span> 
											<input type="text"  placeholder="Write an answer choice" class="form-control">
										</label>
										<label  class="input-wrap col-6">
											<span class="input-wrap__title strong">Question 3</span> 
											<input type="text"  placeholder="Write an answer choice" class="form-control">
										</label>
										<label  class="input-wrap col-6">
											<span class="input-wrap__title strong">Question 4</span> 
											<input type="text"  placeholder="Write an answer choice" class="form-control">
										</label>
									</div>

								</div>
							</div>
							<!-- // -->
							
							<div class="   border-bottom border-primary">
								<div class="control-line px-lg-5 px-3 ">
									<div class="row">
										<div class="col h5 mb-0 strong">Checkbox #1</div>
										<div class="col-auto">
											<div class="control-line__btn">
												<ArrowUp/>
												Up
											</div>
										</div>
										<div class="col-auto">
											<div class="control-line__btn">
												<ArrowDown/>
												Down
											</div>
										</div>
										<div class="col-auto">
											<div class="control-line__btn">
												<Close/>
												Delete
											</div>
										</div>
									</div>
								</div> 
								<div class="pt-4 px-lg-5 px-3 pb-4   "> 

									<label  class="input-wrap">
									<span class="input-wrap__title strong">Headline </span> 
										<input type="text"  placeholder="Write an answer choice" class="form-control">
									</label>
									<label  class="input-wrap">
									<span class="input-wrap__title strong">Overview </span> 
										<textarea name=""  class="form-control">Rules for Persons with a Learner Permit</textarea>
									</label>
							
									<span class="input-wrap__title strong">Answer options </span> 
									<div class="row">
										<div class="col">
											<div class="input-group input-group--q mb-4">
												<span class="input-group-text"> 1</span>
												<div class="delete-q">
													<Close/>
												</div>
												<input type="text"  placeholder="Write an answer choice" class="form-control">
											</div>
										</div>
									
										<div class="col-auto pt-3">
											<label class="form-check form-check--success">
														<input class="form-check-input" type="checkbox" name="flexRadioDefault3"  >
														<span class="form-check-label strong" >True</span>
													</label>
										</div>
									</div>
									<div class="row">
										<div class="col">
											<div class="input-group input-group--q mb-4">
												<span class="input-group-text"> 2</span>
												<div class="delete-q">
													<Close/>
												</div>
												<input type="text"  placeholder="Write an answer choice" class="form-control">
											</div>
										</div>
										<div class="col-auto pt-3">
											<label class="form-check form-check--success">
														<input class="form-check-input" type="checkbox" name="flexRadioDefault4"  >
														<span class="form-check-label strong" >True</span>
													</label>
										</div>
									</div>
									<div class="row">
										<div class="col">
											<div class="input-group input-group--q mb-4">
												<span class="input-group-text"> 3</span>
												<div class="delete-q">
													<Close/>
												</div>
												<input type="text"  placeholder="Write an answer choice" class="form-control">
											</div>
										</div>
										<div class="col-auto pt-3">
											<label class="form-check form-check--success">
														<input class="form-check-input" type="checkbox" name="flexRadioDefault4"  >
														<span class="form-check-label strong" >True</span>
													</label>
										</div>
									</div>
									<div >
										<a href="#" class="strong">+ Add answer</a>
									</div>


								</div>
								

							</div>
							<!-- // -->


							<div class="py-4 px-lg-5 px-3   ">
								
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
import ArrowUp from '@/components/icons/ArrowUp.vue'
import ArrowDown from '@/components/icons/ArrowDown.vue'
import Clock from '@/components/icons/Clock.vue'
// import Search from '@/components/icons/Search.vue'

export default {
	name: 'Faq',
	components: { 
		TopNav,
		ChevronLeft,
		Close,
		ArrowUp,
		ArrowDown,
		Clock,
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
