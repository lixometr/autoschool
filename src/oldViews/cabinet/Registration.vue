<template>
	<div class="main-wrapper main-wrapper--cabinet main-wrapper--footer-without-border">
		<TopNav :cabinet="false"/>
		<div class="container section pt-0">
			<div class="row">
				<div class="cabinet-block bg-white col-12">
					<div class="row">
						<div class="col">
							<div class="cabinet-block__head row ">
									<h1 class="col-lg">Registration</h1>
									<!-- <div class="col-auto small"><a href="#">Edit information</a></div>
									<div class="col-auto small"><a href="#">Documents</a></div> -->
							</div>
							<form>

								<div class="row"> 
									<div class="col-12 opacity-50 text-secondary h6 strong">Personal information</div>
									<div class="col-lg-6">
										<label  class="input-wrap">
											<span class="input-wrap__title">Last name <span class="text-danger">*</span></span>
											<input type="text" class="form-control is-valid">
										</label>
										<div class="valid-feedback"> Looks good! </div>
									</div>
									<div class="col-lg-6">
										<label  class="input-wrap">
											<span class="input-wrap__title">First name  <span class="text-danger">*</span></span>
											<input type="text" class="form-control is-invalid">
										</label>
										<div class="invalid-feedback"> Please provide a valid city.</div>
									</div>
								
								
									<div class="col-lg-6">
										<label  class="input-wrap">
											<span class="input-wrap__title">Middle name </span>
											<input type="text" class="form-control  ">
										</label> 
									</div>
									<div class="col-lg-6">
										<label  class="input-wrap">
											<span class="input-wrap__title">Country <span class="text-danger">*</span></span>
											<select  class="form-select is-invalid">
												<option value="">United States</option>
												<option value="">United States</option>
												<option value="">United States</option>
												<option value="">United States</option>
											</select>
								
										</label>
										<div class="invalid-feedback"> Please provide a valid city.</div>
									</div>

									<div class="col-lg-6">
										<label  class="input-wrap">
											<span class="input-wrap__title">E-mail Address <span class="text-danger">*</span></span>
											<input type="email" class="form-control  ">
										</label> 
									</div>
									<div class="col-lg-6">
										<label  class="input-wrap">
											<span class="input-wrap__title">Validate E-mail Address  <span class="text-danger">*</span></span>
											<input type="email" class="form-control  ">
										</label> 
									</div>

									<div class="col-12 opacity-50 text-secondary h6 strong pt-1">Data for logging in to a personal account</div>

									<div class="col-lg-6">
										<label  class="input-wrap">
											<span class="input-wrap__title">Username  <span class="text-danger">*</span></span>
											<input type="text" class="form-control  ">
										</label> 
									</div>
									<div class="col-lg-6">
										<label  class="input-wrap">
											<span class="input-wrap__title">Password <span class="text-danger">*</span></span>
											<input v-bind:type="isPassword ? 'password' : 'text'" class="form-control form-control--sp-right">
											<div class="btn-toggle-type" :class="{show: !isPassword}" @click="toggleType">
												<Eye/>
											</div>
										</label> 
									</div>
								</div>
								<button class="btn-reg  btn-primary mt-4">Next</button>

							</form>
						</div>
						<div class="col-xl-4 pt-2">
							<p>Sponsors must have a minimum of seven points, using two or more of these techniques, provided, however, that one point must be for content questions. The content questions may be asked at random points throughout the course or at the end of each chapter or unit. </p>

							<p>Student private information, as defined in the personal identification section shall be encrypted. All authentication information shall be protected; for example, it should not be stored or transmitted in clear text.</p>
							<div class="pt-2">
								<a href="#" class="tdu strong">Read Requirements</a>
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
import Eye from '@/components/icons/Eye.vue'
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
		Eye,
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
