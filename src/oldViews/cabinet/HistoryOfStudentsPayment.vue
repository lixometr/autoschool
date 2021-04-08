<template>
	<div class="main-wrapper main-wrapper--cabinet main-wrapper--footer-without-border">
		<!-- <img alt="Vue logo" src="../assets/logo.png"> -->
		<TopNav :cabinet="true"/>
		<div class=" container  ">
			<div class="cabinet-block p-0 bg-white">
				<div class="cabinet-block__head p-0 border-bottom border-light">
					<div class="row mx-0">
						<div class="col-auto border-right d-flex align-items-center  border-end">
							<a href="#" class="link-back">
								<ChevronLeft/>
								<span class="ms-3 d-none d-md-inline fw-600">Back to dashboard</span>
							</a>
						</div>
						<div class="col">
							<div class="row  align-items-center">
								<div class="col h4 strong mb-0 py-2">History of students payment </div> 
							</div>
						</div>
					</div>
				</div>
				<div class="cabinet-block__body p-3">
						<div class="row g-3">
							<div class="col">
								<div class="search-block">
									<form action="">
										<button class="search-block__btn"><Search/></button>
										<input type="text" class="form-control" placeholder="Search">
									</form>
								</div>

							</div>
							<div class="col-auto">
								<button class="  btn btn-normal btn-outline-primary px-lg-5">Sort</button>
							</div>
						</div>

						<table class="table table--managers smallest">
							<thead>
								<tr>
									<th>{{th1}}</th>
									<th  >{{th2}}</th>
									<th  >{{th3}}</th>
									<th  >{{th4}}</th>
									<th  class="text-center">{{th5}}</th>  
									<th class="text-center" >{{th6}}</th>  
									<th class="text-center" >{{th7}}</th> 
								</tr>
							</thead>
							<tbody>
								<tr
									v-for="item in items"
									:key="item.id"  
								>
									<td :data-title="th1">{{item.td1}}</td>
									<td :data-title="th2">
										<a :href="'mailto:' + item.td2" class="strong">{{item.td2}}</a>
									</td>
									<td   :data-title="th3">{{item.td3}}</td>
									<td   :data-title="th4">{{item.td4}}</td>
									<td class="text-center" :data-title="th5">{{item.td5}}</td>
									<td class="text-center"  :data-title="th6">{{item.td6}}</td> 
									<td class="text-center"  :data-title="th7">{{item.td7}}</td> 
								
								</tr>
							</tbody>
						</table>
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
// import Close from '@/components/icons/Close.vue'
import Search from '@/components/icons/Search.vue'

export default {
	name: 'Faq',
	components: { 
		TopNav,
		ChevronLeft,
		// Close,
		Search,
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
				th1:"Name",
				th2:"E-mail",
				th3:"Date payment",
				th4:"Partner",
				th5:"Refund", 
				th6:"Discount", 
				th7:"Payment", 
				items: [
						{
							td1:"John Smith",
							td2:"sample@sample.com",
							td3:"17.05.20",
							td4:"Victro Vanero",
							td5:"-", 
							td6:"-15$", 
							td7:"24$", 
						},
 
						{
							td1:"John Smith",
							td2:"sample@sample.com",
							td3:"17.05.20",
							td4:"Victro Vanero",
							td5:"-", 
							td6:"-15$", 
							td7:"24$", 
						},
 
						{
							td1:"John Smith",
							td2:"sample@sample.com",
							td3:"17.05.20",
							td4:"Victro Vanero",
							td5:"-", 
							td6:"-15$", 
							td7:"24$", 
						},
 
 
				]
		}
	}
}
</script>
