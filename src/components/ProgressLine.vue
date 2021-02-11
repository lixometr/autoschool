<template>
	<div class="ProgressLine">
		<div class="ProgressLine__bar" :style="{ background: activeColor, width: width + '%' }"><Bomb/></div>
	</div>
</template>

<script>

import Bomb from '@/components/icons/Bomb.vue'

export default {
	name: 'ProgressLine',
	components: { 
		Bomb
	},
	data() {
		return{ 
			activeColor: 'var(--bs-primary)',
			width: 80
		}
	}
}
</script>

<style lang="scss">
  
</style>