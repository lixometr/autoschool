<template>
	<div class="SPersonalCabinet section pt-0">
		<div class="container">
			<div class="row my-0">
				<div class="cabinet-block col bg-white border-bottom border-light">
					<div class="cabinet-block__head row ">
						<h1 class="col-lg">Personal cabinet</h1>
						<!-- <div class="col-auto small"><a href="#">Edit information</a></div>
						<div class="col-auto small"><a href="#">Documents</a></div> -->
					</div>
					<div class="row">
						<div class="col-sm-auto mb-2">
							<div class="avatar-block avatar-block--lg">
								<img src="../assets/img/avatar.png" alt="">
							</div>
						</div>
						<div class="col">
							<div class="h6 strong">
								Alexander
								<br>
								Ilua
							</div>
							<div class="row pb-1">
								<div class="col-auto mb-2"><a href="#">Edit profile</a></div>
								<div class="col-auto mb-2"><a href="#">Download reciept</a></div>
							</div>
							<div class="small mb-3">Expiration Date: 1/19/2021 9:50:36 PM</div>
						
						</div>
						<div class="col-lg-auto">
							<button class="btn-alert btn-danger-light  ">
								<Warning/>
								<span>Shipping Address</span>
							</button>
							<br>
							<button class="btn-alert btn-danger-light  ">
								<Warning/>
								<span>Setup Security Questions</span>
							</button>
							<br>
							<button class="btn-alert btn-danger">
								<Warning/>
								<span>Your Personal Data</span>
							</button>
						</div>
					</div>
				</div>
				<div class="cabinet-block col-md-auto bg-primary text-white ">
					<button class="btn btn-md btn-success w-100 mb-3">Ask a question</button>
					<div class="small mb-1">Email: Thomas.F@opland.com</div>
					<div class="small mb-3">Phone: <a href="tel:+13568896699" class="text-white strong">+1 356 889 66 99</a> </div>
					<button class="btn btn-md btn-success w-100">Download notification</button>
				</div>
				<div class="cabinet-block col-12 bg-white">
					<div class="alert alert-warning small" role="alert">
						<Warning/> You have 27&nbsp;Day(s) to&nbsp;complete this course. If&nbsp;you do&nbsp;not complete the course by&nbsp;then you will not be&nbsp;able to&nbsp;graduate the course and will have to&nbsp;take the entire course again
					</div>
					<div class="cabinet-block__head ">
						<div class="h6">Сurrent course: 
							<strong class="text-primary">ONLINE PRE-LICENSING COURSE</strong>
						</div>
					</div>
					<div class="cabinet-block__body">
						<div class="cource-steps">
							<div class="cource-steps__item active">Unit 1</div>
							<div class="cource-steps__item current">Unit 2</div>
							<div class="cource-steps__item">Unit 3</div>
							<div class="cource-steps__item">Unit 4</div>
							<div class="cource-steps__item">Unit 5</div>
							<div class="cource-steps__item">Unit 6</div>
						</div>
						<p>Until the end of the course another - <strong>3 month</strong></p>
					</div>

				</div>
				<div class="cabinet-block  bg-white col-12">
					<div class="cabinet-block cabinet-block--footer cabinet-block--light col-12">
					<div class="h6 strong">Ready to go back to training</div>
					<p class="mb-4 col-xxl-4 col-lg-6">Use the below PayPal to&nbsp;pre-pay class fee. Write the student&rsquo;s name in&nbsp;the &laquo;Ship&nbsp;To&raquo; part of&nbsp;PayPal</p>
					<div class="row gx-4">
						<div class="col-auto"><button class="btn btn-md btn-outline-primary">Continue implementation</button></div> 
					</div>
				</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
import Warning from './icons/Warning.vue'

export default {
	name: 'SPersonalCabinet',
	components:{
		Warning
	}
}
</script>

<style lang="scss">
  
</style>