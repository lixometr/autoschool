<template>
	<div class="sWhatWillLearn section">
		<div class="container">
			<div class="section-title">
				<h2>What will you learn in&nbsp;an  <span>Online 5-Hour Pre-Licensing  Course</span></h2>
			</div>
			<div class="row">
				<div class="col-lg col-sm-4 col-6"
					v-for="(item, index) in items"
					v-bind:key="index"
					
				>
					<div class="sWhatWillLearn__item"> 
						<img :src= "require('../assets/img/sWhatWillLearn-'+ (index + 1) +'.svg')" loading="lazy" alt=""> 
						<p  v-html="item.title"></p>
					</div>
				</div>
			</div>
			<p><strong>All new drivers must complete the 5-hour pre-licensing course before scheduling the road test for their first driver license. The course is&nbsp;designed for drivers ages 18&nbsp;and up&nbsp;who currently have a&nbsp;photo learner permit.</strong></p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SWhatWillLearn',
	data() {
		return{
				items: [
						{
							title:`New York vehicle and traffic laws`, 
						},
						{
							title:`Safe driving behaviors`, 
						},
						{
							title:`Defensive driving skills`, 
						},
						{
							title:`Dangers of&nbsp;driving under the influence`,
						},
						{
							title:`Common risks  for new drivers`,
						},

 
				]
		}
	}
}
</script>

<style lang="scss">
  
</style>