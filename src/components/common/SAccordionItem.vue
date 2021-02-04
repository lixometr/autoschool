<template> 
	<div class="SAccordion-item">
		<div class="SAccordion-item__toggle" @click="show = !show"  :class="{active: show}">
			<span v-html="title"></span>
			<div class="SAccordion-item__label"></div>
		</div>
		<transition name="slideToggle">
			<div class="SAccordion-item__block" v-html="content" v-if="show"></div>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'SAccordionItem',
	props: ['title', 'content'],
	data() {
		return{
			show: false
		}
	}
}
</script>

<style lang="scss">
  
</style>