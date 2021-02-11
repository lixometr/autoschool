<template>
	<div class="aside order-lg-0 order-last col-lg-3 p-0 border-end border-primary">
		<a class="w-100 ps-4   d-flex align-items-center btn-back btn btn-primary  border-end"> 
				<ChevronLeft/>
				<span class="ms-3   fw-600">Back to dashboard</span> 
		</a>
		<div class="py-4 px-4">
			<div class="row g-3 align-items-center">
				<div class="col-auto">
					<div class="cicle-progess">
						<svg
							class="progress-ring"
							:height="radius * 2"
							:width="radius * 2"
							>
							<circle
								class=" "
								stroke="#C4C4C4"
								:stroke-width="stroke"
								fill="transparent"
								:r="normalizedRadius"
								:cx="radius"
								:cy="radius"
								/>
							<circle
								class="progress-ring__circle"
								stroke="var(--bs-primary)"
								fill="transparent"
								:stroke-dasharray="circumference + ' ' + circumference"
								:style="{ strokeDashoffset: strokeDashoffset }"
								:stroke-width="stroke"
								:r="normalizedRadius"
								:cx="radius"
								:cy="radius"
								/>
						</svg>
					</div>
				</div>
				<div class="col">
					There's time left
					<div class="h6 mb-0 strong">45 min</div>
				</div>
			</div>
		</div>
		<div class="pb-4 px-4"> 
			<div class=" menu-q pb-3">
				<div class="h5 strong">Unit 1  </div>
				<ul class="ms-3">
					<li ><span class="text-primary">Rules for Persons with a Learner Permit</span></li>
					<li  ><span>Video - how to ride to left side</span></li>
					<li  ><span>Probationary Period for New Licensed Drivers</span></li>
					<li  ><span>Probationary Period for New Licensed Drivers</span></li>
					<li  ><span>Quiestions about unit</span></li>
				</ul>
			
			</div>
			<div class=" menu-q pb-3 disabled">
				<div class="h5 strong">Unit 2  </div> 
			</div>
			<div class=" menu-q pb-3 disabled">
				<div class="h5 strong">Unit 3  </div> 
			</div>
			<div class=" menu-q pb-3 disabled">
				<div class="h5 strong">Unit 4  </div> 
			</div>
			<div class=" menu-q pb-3 disabled">
				<div class="h5 strong">Unit 5  </div> 
			</div>

		</div>

	</div>
</template>

<script>
import ChevronLeft from '@/components/icons/ChevronLeft.vue'

export default {
	name: 'AsideQ',
	components: { 
		ChevronLeft, 
	},
	data() {
		
		return {
			radius: 24,
			progress: 40,
			stroke: 6, 
		};
	},
	computed: {
		normalizedRadius() {

			return +(this.radius - this.stroke)
		},
		circumference() { 
			return this.normalizedRadius * 2 * Math.PI
		},
		strokeDashoffset() { 
			return this.circumference - this.progress / 100 * this.circumference
		}

	}

}
</script>

<style lang="scss">
	
</style>