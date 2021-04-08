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
								<div class="col h4 strong mb-0 py-2">Partners</div>
								<div class="col-auto py-3 pe-0"> <button class="btn-pay btn btn-normal btn-outline-primary px-3">PAY</button></div>
								<div class="col-auto py-3"> <button class="btn btn-normal btn-outline-primary px-3">+ Add <span class="  d-none d-md-inline">partner</span></button></div>
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
									<th class="text-center">{{th2}}</th>
									<th>{{th3}}</th>
									<th class="text-center">{{th4}}</th>
									<th class="text-center">{{th5}}</th>
									<th>{{th6}}</th>
									<th>{{th7}}</th>
									<th>{{th8}}</th>
									<th   class="text-end">{{th9}}</th> 
									<th></th>
								</tr>
							</thead>
							<tbody>
								<tr
									v-for="item in items"
									:key="item.id"
								>
									<td :data-title="th1">
										{{item.td1}}
										<div class="strong"><a :href="item.td1Link" target="_blank">{{item.td1Link}}</a></div>
									</td>
									<td :data-title="th2"  class="text-center">{{item.td2}}</td>
									<td :data-title="th3" v-html="item.td3"></td>
									<td :data-title="th4"  class="text-center">{{item.td4}}</td>
									<td :data-title="th5"  class="text-center">{{item.td5}}</td>
									<td :data-title="th6">
										{{item.td6}}
										<br>
										{{item.td6Tel}}
									</td>
									<td :data-title="th7">{{item.td7}}</td>
									<td :data-title="th8">{{item.td8}}</td>
									<td class="text-danger text-end">{{item.td9}}</td>
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
				th1:"Business Name / website",
				th2:"Application date",
				th3:"Address",
				th4:"ZIP code",
				th5:"ID Partner", 
				th6:"Contact ", 
				th7:"Manager", 
				th8:"Fee", 
				th9:"Need to pay", 
				items: [
					{
						td1:"Appelayka corp.",
						td1Link:"sample.com",
						td2:"10.12.2020",
						td3:`1556 Broadway, suite 416 <br>New York, NY`,
						td4:"14589",
						td5:"1419",
						td6:"Steven Bernson", 
						td6Tel:"(646) 592-9988", 
						td7:"Mary Anderson", 
						td8:"$20.00", 
						td9:"$120.00", 
					},
					
					{
						td1:"Appelayka corp.",
						td1Link:"sample.com",
						td2:"10.12.2020",
						td3:`1556 Broadway, suite 416 <br>New York, NY`,
						td4:"14589",
						td5:"1419",
						td6:"Steven Bernson", 
						td6Tel:"(646) 592-9988", 
						td7:"Mary Anderson", 
						td8:"$20.00", 
						td9:"$120.00", 
					},
					{
						td1:"Appelayka corp.",
						td1Link:"sample.com",
						td2:"10.12.2020",
						td3:`1556 Broadway, suite 416 <br>New York, NY`,
						td4:"14589",
						td5:"1419",
						td6:"Steven Bernson", 
						td6Tel:"(646) 592-9988", 
						td7:"Mary Anderson", 
						td8:"$20.00", 
						td9:"$120.00", 
					},

				]
		}
	}
}
</script>
