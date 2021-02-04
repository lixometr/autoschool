<template>
	<div class="SRegister SRegisterPage section">
		<div class="container">
			<div class="row">
				<div class="col-lg-6"
					v-for="(item, index) in items"
					v-bind:key="index"
					
				>
					<div class="SRegister-item ">
						<div class="SRegister-item__counter">Step {{index + 1}}</div>
						<div class="SRegister-item__title" v-html="item.title"></div>
						<div class="SRegister-item__text" v-html="item.text"></div> 
						<img :src= "require('../assets/img/partnership-'+ (index + 1) +'.svg')" loading="lazy" alt="">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SRegisterPage',
	data() {
		return{
				items: [
						{
							title:"Registration", 
							text: `Use the below PayPal to&nbsp;pre-pay class fee. Write the student&rsquo;s name in&nbsp;the &laquo;Ship&nbsp;To&raquo; part of&nbsp;PayPal`},
						{
							title:"Make promocode", 
							text: `After completing the PayPal transaction, return to&nbsp;this page and complete the application form`},
						{
							title:"Only 270 minute", 
							text: `Use the below PayPal to&nbsp;pre-pay class fee. Write the student&rsquo;s name in&nbsp;the &laquo;Ship&nbsp;To&raquo; part of&nbsp;PayPal`},
						{
							title:"Download certificate  NO", 
							text: `DMV will record the completion on&nbsp;your record and permit to&nbsp;schedule a&nbsp;road test using DMV&rsquo;s scheduling system. You don&rsquo;t need to&nbsp;bring certificate for road test site`},
 
				]
		}
	}
}
</script>

<style lang="scss">
  
</style>