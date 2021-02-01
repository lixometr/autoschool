<template>
	<div class="sModules section">
		<div class="container">
			<div class="section-title">
				<h2><span>The New York 5-hour Pre-Licensing Course</span> includes nine modules:</h2>
			</div>
			<ol>
				<li  
					v-for="(item, index) in items"
					v-bind:key="index"
					v-html="item.title"
				></li>
			</ol>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SModules',
	data() {
		return{
				items: [
						{ title:`Introduction  <br> to&nbsp;Safe <br> Driving`},
						{ title:`Driving Within <br> the Highway Transportation System`},
						{ title:`Rules <br> of <br> the Road`},
						{ title:`Safe <br> Driving  <br> Habits`},
						{ title:`Safe <br> Driving <br> Skills`},
						{ title:`Risks <br> of&nbsp;Alcohol <br> and Other Drugs`},
						{ title:`New York State <br>  Laws`},
						{ title:`Feelings, Attitudes and Taking Risks. Aggressive Driving and Road Rage`},
						{ title:`Feelings, Attitudes and Taking Risks. Aggressive Driving and Road Rage`},
						
				]
		}
	}
}
</script>

<style lang="scss">
  
</style>