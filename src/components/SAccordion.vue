<template>
	<div class="SAccordion section">
			<SAccordionItem
					v-for="item in items"
					:key="item.id" 
					:title="item.title"
					:content="item.content"
				/>
	</div>
</template>

<script>
import SAccordionItem from '@/components/common/SAccordionItem.vue'

export default {
	name: 'SAccordion',
	components: {
		SAccordionItem
	},
	data() {
		return{
			items: [
						{
							title:"Pre-Licensing Course Completion Certificate (MV-278)", 
							content: `The Pre-Licensing Course Completion Certificate (MV-278) is given to you at the completion of the course. This certificate is needed to schedule a road test. A valid MV-278 and Learner’s Permit must be given to the Motor Vehicle License Examiner when you appear for the road test. The MV-278 certificate is valid for one yThere are different service plans with rich features for users of all experience levels. If you outgrow your current plan, you can upgrade to a more sophisticated plan and get more website templates and more storage for your content.`
						},
						
						{
							title:"What are the costs?", 
							content: `The Pre-Licensing Course Completion Certificate (MV-278) is given to you at the completion of the course. This certificate is needed to schedule a road test. A valid MV-278 and Learner’s Permit must be given to the Motor Vehicle License Examiner when you appear for the road test. The MV-278 certificate is valid for one yThere are different service plans with rich features for users of all experience levels. If you outgrow your current plan, you can upgrade to a more sophisticated plan and get more website templates and more storage for your content.`
						},
						{
							title:"Do I need web programming knowledge in order to use ", 
							content: `The Pre-Licensing Course Completion Certificate (MV-278) is given to you at the completion of the course. This certificate is needed to schedule a road test. A valid MV-278 and Learner’s Permit must be given to the Motor Vehicle License Examiner when you appear for the road test. The MV-278 certificate is valid for one yThere are different service plans with rich features for users of all experience levels. If you outgrow your current plan, you can upgrade to a more sophisticated plan and get more website templates and more storage for your content.`
						},
						{
							title:"How long does it take to build my website?", 
							content: `The Pre-Licensing Course Completion Certificate (MV-278) is given to you at the completion of the course. This certificate is needed to schedule a road test. A valid MV-278 and Learner’s Permit must be given to the Motor Vehicle License Examiner when you appear for the road test. The MV-278 certificate is valid for one yThere are different service plans with rich features for users of all experience levels. If you outgrow your current plan, you can upgrade to a more sophisticated plan and get more website templates and more storage for your content.`
						},
						{
							title:"I can't login! Help!", 
							content: `The Pre-Licensing Course Completion Certificate (MV-278) is given to you at the completion of the course. This certificate is needed to schedule a road test. A valid MV-278 and Learner’s Permit must be given to the Motor Vehicle License Examiner when you appear for the road test. The MV-278 certificate is valid for one yThere are different service plans with rich features for users of all experience levels. If you outgrow your current plan, you can upgrade to a more sophisticated plan and get more website templates and more storage for your content.`
						},
						{
							title:"How does your 30-day money back guarantee work?", 
							content: `The Pre-Licensing Course Completion Certificate (MV-278) is given to you at the completion of the course. This certificate is needed to schedule a road test. A valid MV-278 and Learner’s Permit must be given to the Motor Vehicle License Examiner when you appear for the road test. The MV-278 certificate is valid for one yThere are different service plans with rich features for users of all experience levels. If you outgrow your current plan, you can upgrade to a more sophisticated plan and get more website templates and more storage for your content.`
						},

 
				]
		}
	}
}
</script>

<style lang="scss">
  
</style>