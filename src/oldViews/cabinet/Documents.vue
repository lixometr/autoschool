<template>
	<div class="main-wrapper main-wrapper--cabinet main-wrapper--footer-without-border">
		<!-- <img alt="Vue logo" src="../assets/logo.png"> -->
		<TopNav :cabinet="true"/>
		<div class=" container pt-0">
			<div class="cabinet-block p-0 bg-white">
				<div class="cabinet-block__head p-0 border-bottom border-light">
					<div class="row mx-0">
						<div class="col-auto border-right d-flex align-items-center  border-end">
							<a href="#" class="link-back">
								<ChevronLeft/>
								<span class="ms-3 d-none d-md-inline fw-600">Back to  Partner</span>
							</a>
						</div>
						<div class="col">
							<div class="row  align-items-center">
								<div class="col h4 strong mb-0 py-2">Documents</div>
								<div class="col-auto py-3"> <button class="btn btn-normal btn-outline-primary px-3">+ Add <span class="  d-none d-md-inline">вocuments</span></button></div>
							</div>
						</div>
					</div>
				</div>
				<div class="cabinet-block__body p-3">
					<div class="doc-item"
						v-for="item in items"
						:key="item.id"  
					>
						<div class="doc-item__icon-wrap">
							{{item.type}}
						</div>
						<div>
							<div class="h6 strong mb-0">{{item.title}}</div>
							<div >
								<a :href="item.link"> {{item.size}}</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
 

		<Footer/>

	</div>
</template>

<style  ></style>

<script>
 
import TopNav from '@/components/TopNav.vue' 
import Footer from '@/components/Footer.vue'
import ChevronLeft from '@/components/icons/ChevronLeft.vue'  

export default {
	name: 'Faq',
	components: { 
		TopNav,
		ChevronLeft,  
		// SRegisterPage,
		// HeaderBlock,
		// SRegister,
		// SAbout,
		// SWhatWillLearn,
		// SPromocode,
		// SPartnerCabinet,
		// FormAside,
		Footer,
	},
	data() {
		return{ 
				items: [
						{
							type:"pdf",
							title:"All participant questionnaires",
							size:"Download pdf (1.5 mb)",
							link:"#",
						},
						{
							type:"pdf",
							title:"Contract with the Public Chamber of New York",
							size:"Download pdf (1.5 mb)",
							link:"#",
						},
						{
							type:"pdf",
							title:"All participant questionnaires",
							size:"Download pdf (1.5 mb)",
							link:"#",
						},
						{
							type:"pdf",
							title:"Contract with the Public Chamber of New York",
							size:"Download pdf (1.5 mb)",
							link:"#",
						},
				]
		}
	}
}
</script>
