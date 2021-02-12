<template>
	<div class="main-wrapper main-wrapper--cabinet main-wrapper--footer-without-border">
		<!-- <img alt="Vue logo" src="../assets/logo.png"> -->
		<TopNav :cabinet="true"/>
		<div class=" container pt-0"> 
			<!-- showModalPartner -->
			<vue-final-modal 
				v-model="showModalPartner"
				classes="modal-container"
				content-class="modal-content"
				>
				<button class="modal__close" @click="showModalPartner = false">
					<Close/>
				</button>
				<form action="">
					<div class="h6 strong mb-2">Edit partner</div>
					<label  class="input-wrap">
						<span class="input-wrap__title">Business Name</span>
						<input type="text" class="form-control ">
					</label>
					
					<label  class="input-wrap">
						<span class="input-wrap__title">website</span>
						<input type="text" class="form-control ">
					</label>
					<label  class="input-wrap">
						<span class="input-wrap__title">FEIN</span>
						<input type="text" class="form-control ">
					</label>
					<label  class="input-wrap">
						<span class="input-wrap__title">Our manager</span>
						<input type="text" class="form-control ">
					</label>
					<label  class="input-wrap">
						<span class="input-wrap__title">E-mail</span>
						<input type="email" class="form-control ">
					</label>
					<label  class="input-wrap col-4">
						<span class="input-wrap__title">Fee</span>
						<input type="text" class="form-control ">
						<div class="persent">%</div>
					</label>

					<div class="h6 strong mb-2">Edit partner</div>
					<div class="row">
						<label  class="input-wrap col-4">
							<span class="input-wrap__title">ZIP CODE</span>
							<input type="text" class="form-control " placeholder="ZIP CODE"> 
						</label>
						<label  class="input-wrap col-8">
							<span class="input-wrap__title">City</span>
							<input type="text" class="form-control " placeholder="Day"> 
						</label>

					</div>
					<label  class="input-wrap">
						<span class="input-wrap__title">State / Province</span>
						<input type="text" class="form-control ">
					</label>
					<label  class="input-wrap">
						<span class="input-wrap__title">Street Adress</span>
						<input type="text" class="form-control ">
					</label>

					<div class="h6 strong mb-2">Contact</div>
					<label  class="input-wrap">
						<span class="input-wrap__title">Name/Last name</span>
						<input type="text" class="form-control ">
					</label>
					<label  class="input-wrap">
						<span class="input-wrap__title">Position</span>
						<input type="text" class="form-control ">
					</label>
					<label  class="input-wrap">
						<span class="input-wrap__title">Phone number</span>
						<input type="text" class="form-control ">
					</label>
					<label  class="input-wrap">
						<span class="input-wrap__title">e-mail</span>
						<input type="e-mail" class="form-control ">
					</label>
					<label  class="input-wrap">
						<span class="input-wrap__title">Notes</span>
						<input type="e-mail" class="form-control ">
					</label>
					<div class="row">
						<div class="col-6"><button @click="showModalPartner = false" class="btn btn-md  btn-outline-primary btn-bg w-100">Cancel</button></div>
						<div class="col-6"><button class="btn btn-md  btn-primary w-100">Add</button></div>
					</div>
				</form>
			</vue-final-modal>

			<button @click="showModalPartner = true">showModalPartner</button>
				<!-- /showModalPartner -->
			<!-- showModalNewUser -->
			<vue-final-modal 
				v-model="showModalNewUser"
				classes="modal-container"
				content-class="modal-content"
				>
				<button class="modal__close" @click="showModalNewUser = false">
					<Close/>
				</button>
				<form action="">
					<div class="h6 strong mb-2">Add new user</div>
					<label  class="input-wrap">
						<span class="input-wrap__title">Name </span>
						<input type="text" class="form-control ">
					</label>
					
					<label  class="input-wrap">
						<span class="input-wrap__title">Last Name</span>
						<input type="text" class="form-control ">
					</label>
					<div class="row g-3">
						<span class="input-wrap__title">Birth day</span>
						<label  class="input-wrap col-6"> 
							<input type="text" class="form-control ">
						</label>
						<label  class="input-wrap col"> 
							<input type="text" class="form-control " placeholder="Day">
						</label>
						<label  class="input-wrap col"> 
							<input type="text" class="form-control " placeholder="Year">
						</label>
					</div>
					<label  class="input-wrap">
						<span class="input-wrap__title">Promocode</span>
						<input type="text" class="form-control ">
					</label>
					<label  class="input-wrap">
						<span class="input-wrap__title">E-mail</span>
						<input type="email" class="form-control ">
					</label>
					<label  class="input-wrap">
						<span class="input-wrap__title">ID permit</span>
						<input type="text" class="form-control ">
					</label>
					<label  class="input-wrap col">
						<span class="input-wrap__title">Number of document</span>
						<input type="text" class="form-control "> 
					</label>

					<div class="row">
						<div class="col-6"><button @click="showModalNewUser = false" class="btn btn-md btn-outline-primary btn-bg w-100">Cancel</button></div>
						<div class="col-6"><button class="btn btn-md btn-primary w-100">Add</button></div>
					</div>
				</form>
			</vue-final-modal>

			<button @click="showModalNewUser = true">showModalNewUser</button>
				<!-- /showModalNewUser -->
				
			<!-- showModalQuestion -->
			<vue-final-modal 
				v-model="showModalQuestion"
				classes="modal-container"
				content-class="modal-content"
				>
				<button class="modal__close" @click="showModalQuestion = false">
					<Close/>
				</button>
				<form action="">
					<div class="h6 strong mb-2">ASK a question</div>
					<label  class="input-wrap">
						<span class="input-wrap__title">text field </span>
						<textarea name=""  class="form-control"></textarea>
					</label>
					

					<div class="row">
						<div class="col-6"><button @click="showModalQuestion = false" class="btn btn-md btn-outline-primary btn-bg w-100">Cancel</button></div>
						<div class="col-6"><button class="btn btn-md btn-primary w-100">SEND</button></div>
					</div>
				</form>
			</vue-final-modal>

			<button @click="showModalQuestion = true">showModalQuestion</button>
				<!-- /showModalQuestion -->

			<!-- showModalAlertNY -->
			<vue-final-modal 
				v-model="showModalAlertNY"
				classes="modal-container"
				content-class="modal-content text-center py-5"
				>
				<button class="modal__close" @click="showModalAlertNY = false">
					<Close/>
				</button>
						<div class="modal-icon-wrap">
							<Warning/>

						</div>
					<div class="h6 strong mb-4">only New York State Lerner permit holders 18&nbsp;years old and older can register for course</div>
					<div class="row justify-content-center">

						<div class="col-6"><button @click="showModalAlertNY = false" class="btn btn-md btn-primary  w-100">Cancel</button></div>
					</div>
			</vue-final-modal>

			<button @click="showModalAlertNY = true">showModalAlertNY</button>
				<!-- /showModalAlertNY -->


				<!-- showModalAgree -->
			<vue-final-modal 
				v-model="showModalAgree"
				classes="modal-container"
				content-class="modal-content py-5"
				>
				<button class="modal__close" @click="showModalAgree = false">
					<Close/>
				</button>
				<form action="">
					<div class="h6 strong mb-3">Type “I Agree” for conditionals</div>
					<label  class="input-wrap"> 
						<input type="text"  class="form-control"> 
					</label>
					

					<div class="row justify-content-center pt-2">
						<div class="col-6"><button class="btn btn-md btn-primary w-100">Continue</button></div>
					</div>
				</form>
			</vue-final-modal>

			<button @click="showModalAgree = true">showModalAgree</button>
				<!-- /showModalAgree -->

				<!-- showModalLogin -->
			<vue-final-modal 
				v-model="showModalLogin"
				classes="modal-container"
				content-class="modal-content py-5"
				>
				<button class="modal__close" @click="showModalLogin = false">
					<Close/>
				</button>
				<form action="">
					<div class="h6 strong mb-3">Login</div>
					<label  class="input-wrap"> 
						<span class="input-wrap__title">E-mail </span>
						<input type="email"  class="form-control"> 
					</label>
					
					<label  class="input-wrap"> 
						<span class="input-wrap__title">Password </span>
						<input type="password"  class="form-control"> 
					</label>
					

					<div class="row justify-content-center pt-2">
						<div class="col-12"><button class="btn btn-md btn-primary w-100">Login</button></div>
					</div>
				</form>
			</vue-final-modal>

			<button @click="showModalLogin = true">showModalLogin</button>
				<!-- /showModalLogin -->
				<!-- showModalNewUser2 -->
			<vue-final-modal 
				v-model="showModalNewUser2"
				classes="modal-container"
				content-class="modal-content py-5"
				>
				<button class="modal__close" @click="showModalNewUser2 = false">
					<Close/>
				</button>
				<form action="">
					<div class="h6 strong mb-3">Add new user</div>
					
					<label  class="input-wrap"> 
						<span class="input-wrap__title">Name  </span>
						<input type="text"  class="form-control"> 
					</label>
					
					<label  class="input-wrap"> 
						<span class="input-wrap__title">Last Name  </span>
						<input type="text"  class="form-control"> 
					</label>
					
					
					<label  class="input-wrap"> 
						<span class="input-wrap__title">Promocode</span>
						<input type="text"  class="form-control"> 
					</label>
					

					<div class="row justify-content-center pt-2">
						<div class="col-6"><button class="btn btn-md btn-outline-primary btn-bg w-100">Cancel</button></div>
						<div class="col-6"><button class="btn btn-md btn-primary w-100">Add</button></div>
					</div>
				</form>
			</vue-final-modal>

			<button @click="showModalNewUser2 = true">showModalNewUser2</button>
			<!-- /showModalNewUser2 -->
			<!-- showModalAddPromocode -->
			<vue-final-modal 
				v-model="showModalAddPromocode"
				classes="modal-container"
				content-class="modal-content py-5"
				>
				<button class="modal__close" @click="showModalAddPromocode = false">
					<Close/>
				</button>
				<form action="">
					<div class="h6 strong mb-3">Add promocode</div>
					
					<label  class="input-wrap"> 
						<span class="input-wrap__title">Name  </span>
						<input type="text"  class="form-control"> 
					</label>
					
					<label  class="input-wrap"> 
						<span class="input-wrap__title">Last Name  </span>
						<input type="text"  class="form-control"> 
					</label>
					
					
					<label  class="input-wrap"> 
						<span class="input-wrap__title">Promocode</span>
						<input type="text"  class="form-control" value="CZ-BASE"> 
					</label>
					<div class="row">
						<div class="col-6"> 
							<label  class="input-wrap "> 
								<span class="input-wrap__title">Discount</span>
								<input type="text"  class="form-control" value="5"> 
								<strong class="persent text-primary">$</strong>
							</label>
						</div>
						<label  class="input-wrap col-6"> 
							<span class="input-wrap__title">Date from</span>
							<input type="text"  class="form-control" placeholder="MM.DD.YYYY">  
						</label>

					</div>

					<div class="row justify-content-center pt-2">
						<div class="col-6"><button class="btn btn-md btn-outline-primary btn-bg w-100">Cancel</button></div>
						<div class="col-6"><button class="btn btn-md btn-primary w-100">Add</button></div>
					</div>
				</form>
			</vue-final-modal>

			<button @click="showModalAddPromocode = true">showModalAddPromocode</button>
			<!-- /showModalAddPromocode -->
			

		</div>
 

		<Footer/>

	</div>
</template>

<style  ></style>

<script>

import TopNav from '@/components/TopNav.vue' 
import Footer from '@/components/Footer.vue' 
import Close from '@/components/icons/Close.vue'
import Warning from '@/components/icons/Warning.vue'
export default {
	name: 'Faq',
	components: { 
		TopNav,
		Footer,
		Close,
		Warning,
	},
	data() {
		return{
				showModalPartner: false,
				showModalNewUser: false,
				showModalAlertNY: false,
				showModalQuestion: false,
				showModalAgree: false,
				showModalLogin: false,
				showModalNewUser2: false,
				showModalAddPromocode: false,
		}
	}
}
</script>
