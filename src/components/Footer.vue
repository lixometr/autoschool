<template>
	<div class="container">
		<div class="Footer section">
			<div class="row">
				<div class="col">
					<div class="mb-4">{{$t('footer.copyright')}}</div>
					<div class="Footer__links">
						<a href="#" class="text-body tdu me-2">{{$t('footer.terms')}} </a>
						|     
						<a href="#" class="text-body tdu ms-2"> {{$t('footer.privacy')}}</a>
					</div>
				</div>
				<div class="col-sm-auto text-sm-end pb-5">
					<div class="h4 mb-3"><a class="text-body" href="tel:+1(212)752-0100">{{$t('footer.phone')}}</a></div>
					<a href="mailto:Sample@sample.com">{{$t('footer.email')}}</a>
				</div>
			</div>
			<div class="row pb-5">
				<div class="col-auto">
					<img src="../assets/img/foot-1.png" loading="lazy" alt="">
				</div>
				<div class="col-auto">
					<img src="../assets/img/foot-2.png" loading="lazy" alt="">
				</div>
			</div>
			<p><strong>{{$t('footer.privacyText')}}</strong></p>

			<ul class=" Footer-menu">
				<li class="Footer-menu__item" v-for="(item, idx) in menuItems" :key="idx">
					<router-link to="about" class="Footer-menu__link">{{$t(`footer.menu[${idx}]`)}}</router-link>
				</li>
			</ul>
		</div>

	</div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
	setup() {
		const menuItems =[
			{
				route: "About",
			},
			{
				route: "About",
			},
			{
				route: "About",
			},
			{
				route: "About",
			},
			{
				route: "About",
			},
			{
				route: "About",
			},
			{
				route: "About",
			},
		]
		return {
			menuItems
		}
	}
})
</script>

<style lang="scss">
  
</style>