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
							<sign-up-form />
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
import SignUpForm from '../../components/SignUp/SignUpForm.vue'
 
import TopNav from '@/components/TopNav.vue'
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
		// SRegisterPage,
		// HeaderBlock,
		// SRegister,
		// SAbout,
		// SWhatWillLearn,
		// SPromocode,
		// SPersonalCabinet,
		// FormAside,
		Footer, SignUpForm
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
