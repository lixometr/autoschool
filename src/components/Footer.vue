<template>
	<div class="container">
		<div class="Footer section">
			<div class="row">
				<div class="col">
					<div class="mb-4">Copyright © 2021</div>
					<div class="Footer__links">
						<a href="#" class="text-body tdu me-2">Terms & Conditions </a>
						|     
						<a href="#" class="text-body tdu ms-2"> Privacy Policy</a>
					</div>
				</div>
				<div class="col-sm-auto text-sm-end pb-5">
					<div class="h4 mb-3"><a class="text-body" href="tel:+1(212)752-0100">+1 (212) 752-0100</a></div>
					<a href="mailto:Sample@sample.com">Sample@sample.com</a>
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
			<p><strong>*Successful completion of 320-minute Internet course by principal operator of insured vehicle provides 3-year, 10% reduction in base rate of motorist's current car liability, no-fault & collision premiums.**Point reduction benefits can be applied once within 18 months and reduce as many as 4 points from record. Reduced points remain on the driving record but are not counted by NYS DMV against the license. Point reduction does not remove, delete, subtract or erase violations, convictions or points, or prevent or cancel a mandatory revocation or suspension for violations such as DWI, DWAI or three speeding violations within 18 months.</strong></p>

			<ul class=" Footer-menu">
				<li class="Footer-menu__item">
					<router-link to="about" class="Footer-menu__link">	Home</router-link>
				</li>
				<li class="Footer-menu__item">
					<router-link to="about" class="Footer-menu__link">Course Details</router-link>
				</li>
				<li class="Footer-menu__item">
					<router-link to="about" class="Footer-menu__link">New York Defensive Driving</router-link>
				</li>
				<li class="Footer-menu__item">
					<router-link to="about" class="Footer-menu__link">5-Hour Pre-Licensing</router-link>
				</li>
				<li class="Footer-menu__item">
					<router-link to="about" class="Footer-menu__link">New York Traffic Tickets</router-link>
				</li>
				<li class="Footer-menu__item">
					<router-link to="about" class="Footer-menu__link">Insurance Discount</router-link>
				</li>
				<li class="Footer-menu__item">
					<router-link to="about" class="Footer-menu__link">Point Reductions</router-link>
				</li>
			</ul>
		</div>

	</div>
</template>

<script>
export default {
	name: 'Footer',
}
</script>

<style lang="scss">
  
</style>