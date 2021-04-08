<template>
	<div class="main-wrapper main-wrapper--cabinet main-wrapper--footer-without-border">
		<!-- <img alt="Vue logo" src="../assets/logo.png"> -->
		<TopNav :cabinet="true"/>
		<div class="  container pt-0">
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
								<div class="col h4 strong mb-0 py-2">Managers</div>
								<div class="col-auto py-3"> <button class="btn btn-normal btn-outline-primary px-3">+ Add <span class="  d-none d-md-inline">Manager</span></button></div>
							</div>
						</div>
					</div>
				</div>
				<div class="cabinet-block__body p-3">
						<div class="search-block">
							<form action="">
								<button class="search-block__btn"><Search/></button>
								<input type="text" class="form-control" placeholder="Search">
							</form>
						</div>
						<table class="table table--managers smallest">
							<thead>
								<tr>
									<th>{{th1}}</th>
									<th>{{th2}}</th>
									<th>{{th3}}</th>
									<th>{{th4}}</th>
									<th colspan="3">{{th5}}</th> 
								</tr>
							</thead>
							<tbody>
								<tr
									v-for="item in items"
									:key="item.id"  
								>
									<td :data-title="th1">{{item.td1}}</td>
									<td :data-title="th2">{{item.td2}}</td>
									<td :data-title="th3">{{item.td3}}</td>
									<td :data-title="th4">{{item.td4}}</td>
									<td :data-title="th5">{{item.td5}}</td>
									<td class="text-danger">{{item.td6}}</td>
									<td class="text-end"><Lock/></td>
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
import Lock from '@/components/icons/Lock.vue'
import Search from '@/components/icons/Search.vue'

export default {
	name: 'Faq',
	components: { 
		TopNav,
		ChevronLeft,
		Lock,
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
				th1:"ID",
				th2:"Name",
				th3:"E-mail",
				th4:"Phone",
				th5:"Reg. date", 
				items: [
						{
							td1:"458896",
							td2:"Mary Anderson",
							td3:"sample@sample.com",
							td4:"(646) 592-9988",
							td5:"10.12.2020", 
							td6:"$120.00", 
						},
						
						{
							td1:"458896",
							td2:"Mary Anderson",
							td3:"sample@sample.com",
							td4:"(646) 592-9988",
							td5:"10.12.2020", 
							td6:"$120.00", 
						},
						{
							td1:"458896",
							td2:"Mary Anderson",
							td3:"sample@sample.com",
							td4:"(646) 592-9988",
							td5:"10.12.2020", 
							td6:"$120.00", 
						},

				]
		}
	}
}
</script>
