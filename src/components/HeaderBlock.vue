<template>
	<div class="HeaderBlock section bg-wrap">
		<img src="../assets/img/head-bg.jpg" alt="" class="img-bg">
		<div class="container">
			<div class="gerb">
				<img src="../assets/img/gerb.png" alt="" class="gerb__img">
				<div class="gerb__text">
					NYS DMV <br>
					Sponsoring Agency <br>
					#0000
				</div>
			</div>
			<h1>New York 5-Hour Pre-Licensing Course</h1>
			<a href="#" class="HeaderBlock__btn">Get started</a>
			<div class="HeaderBlock__row row">
				<div 
					class="HeaderBlock__col col-lg-2 col-sm-4 col-6"
					v-for="(item, index) in items"
					v-bind:key="index"
					v-html="item.text"
				></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HeaderBlock',
	data() {
		return{
				items: [
						{text: `24/7 U.S-based customer support. 100% online`},
						{text: `Age <br> restriction 18+ `},
						{text: `Approved by <br> New York <br> State DMV`},
						{text: `No hidden <br> fees. 100% Money <br> Back guarantee`},
						{text: `Course completion notification within <br> 24-48 hours`},
						{text: `Mandatory to&nbsp;schedule <br> road test `},
				]
		}
	}
}
</script>

<style lang="scss">
	
</style>