<template>
	<div class="sRegister section">
		<div class="container">
			<div class="section-title">
				<h2><span>Register</span> for dmv&rsquo;s approved online&nbsp;five-hour pre-licensing course</h2>
			</div>
			<div class="row">
				<div class="col-lg-6"
					v-for="(item, index) in items"
					v-bind:key="index"
					
				>
					<div class="SRegister-item">
						<div class="SRegister-item__counter">Step {{index + 1}}</div>
						<div class="SRegister-item__title" v-html="item.title"></div>
						<div class="SRegister-item__text" v-html="item.text"></div>
						<a href="#" class="SRegister-item__btn">{{item.btn}}</a>
						<img :src= "require('../assets/img/reg-'+ (index + 1) +'.svg')" loading="lazy" alt="">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SRegister',
	data() {
		return{
				items: [
						{
							title:"Registration",
							btn:"Buy now",
							text: `Only New York State Learner Permit holders can register for course`},
						{
							title:"Take course",
							btn:"Get started",
							text: `After completing the PayPal transaction, return to&nbsp;this page and complete the application form`},
						{
							title:"Only 270 minute",
							btn:"Buy now",
							text: `take the automated interactive course using your internet-capable device (such as&nbsp;a&nbsp;computer, tablet, or&nbsp;smartphone). You have 30&nbsp;days (starting on&nbsp;the date you register) to&nbsp;complete the course`},
						{
							title:"Download certificate  NO",
							btn:"Get started",
							text: `DMV will record the completion on&nbsp;your record and permit to&nbsp;schedule a&nbsp;road test using DMV&rsquo;s scheduling system. You don&rsquo;t need to&nbsp;bring certificate for road test site`},
 
				]
		}
	}
}
</script>

<style lang="scss">
  
</style>