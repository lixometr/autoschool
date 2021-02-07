<template>
	<div class="main-wrapper main-wrapper--cabinet main-wrapper--footer-without-border">
		<!-- <img alt="Vue logo" src="../assets/logo.png"> -->
		<TopNav :cabinet="true"/>
		<div class="container section pt-0">
			<div class="row">
				<div class="cabinet-block bg-white col-12">
					<div class="row">
						<div class="col">
							<div class="cabinet-block__head row ">
									<h1 class="col-lg">Personal data </h1>
									<div class="col-lg-auto pt-1 h6 strong text-danger">PROVIDE ALL INFORMATION STRICTLY AS appear on the learners permit </div>
									<!-- <div class="col-auto small"><a href="#">Edit information</a></div>
									<div class="col-auto small"><a href="#">Documents</a></div> -->
							</div>
							<form>

								<div class="row">
									<div class="col-xl-4 col-lg-6">
										<label for="" class="input-wrap">
											<span class="input-wrap__title">Last Name</span>
											<input type="text" class="form-control ">
										</label>
									</div>
									
									<div class="col-xl-4 col-lg-6">
										<label for="" class="input-wrap">
											<span class="input-wrap__title">First Name</span>
											<input type="text" class="form-control is-valid">
										</label>
										<div class="valid-feedback"> Looks good! </div>
									</div>
									<div class="col-xl-4 col-lg-6">
										<label for="" class="input-wrap">
											<span class="input-wrap__title">Middle Name</span>
											<input type="text" class="form-control ">
										</label>
									</div>

									<div class="col-xxl-2 col-xl-3 col-lg-6">
										<label for="" class="input-wrap">
											<span class="input-wrap__title">Class of permit </span>
											<select  class="form-select  ">
												<option value="">United States</option>
												<option value="">United States</option>
												<option value="">United States</option>
												<option value="">United States</option>
											</select>
								
										</label> 
									</div>
									<div class="col-xxl-2 col-xl-3 col-lg-6">
										<label for="" class="input-wrap">
											<span class="input-wrap__title">Expiration date</span>
											<input type="date" class="form-control is-valid">
										</label> 
									</div>
									
									<div class="col-xxl-4  col-lg-6 ">
										<div class="row">

											<div class="col-lg-6">
												<label for="" class="input-wrap">
													<span class="input-wrap__title">Expiration date</span>
													<input type="date" class="form-control is-valid">
												</label> 
											</div>
											<div class="col-lg-6 align-self-center pt-lg-2 pb-2 pb-lg-0 smallest"> Provide their date of&nbsp;birth as&nbsp;it&nbsp;appears on&nbsp;the individual&rsquo;s permit 
											</div>
										</div>
									</div>
									<div class="col-12"></div>

									<div class="col-xl-4 col-lg-6">
										<label for="" class="input-wrap">
											<span class="input-wrap__title">ID Number</span>
											<input type="text" class="form-control ">
										</label> 
									</div>
									<div class="col-xl-4 col-lg-6">
										<label for="" class="input-wrap">
											<span class="input-wrap__title">Document Number</span>
											<input type="text" class="form-control ">
										</label> 
									</div>
 
								</div>
							
								<button class="btn-reg  btn-primary mt-4">Next</button> 

							</form>
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
// import Eye from '@/components/icons/Eye.vue'
// import SRegisterPage from '@/components/SRegisterPage.vue'
// import HeaderBlock from '@/components/HeaderBlock.vue'
// import SRegister from '@/components/SRegister.vue'
// import SAbout from '@/components/SAbout.vue'
// import SWhatWillLearn from '@/components/SWhatWillLearn.vue'
// import SPromocode from '@/components/SPromocode.vue'
// import SPersonalCabinet from '@/components/SPersonalCabinet.vue'
// import FormAside from '@/components/FormAside.vue'
import Footer from '@/components/Footer.vue'

export default {
	name: 'Faq',
	components: { 
		TopNav,
		// Eye,
		// SRegisterPage,
		// HeaderBlock,
		// SRegister,
		// SAbout,
		// SWhatWillLearn,
		// SPromocode,
		// SPersonalCabinet,
		// FormAside,
		Footer,
	},
		data() {
		return {

			isPassword: true
		}
	},

	methods: {
		toggleType: function() {
			this.isPassword = !this.isPassword;
			// some code to filter users
		}
	}
}
</script>
