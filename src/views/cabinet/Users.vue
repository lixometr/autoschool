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
								<span class="ms-3 d-none d-md-inline fw-600">Back to dashboard</span>
							</a>
						</div>
						<div class="col">
							<div class="row  align-items-center">
								<div class="col h4 strong mb-0 py-2">Users</div>
								<div class="col-auto py-3"> <button class="btn btn-normal btn-outline-primary px-3">+ Add <span class="  d-none d-md-inline">user</span></button></div>
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

						<table class="table table--users smallest">
							<thead>
								<tr>
									<th>{{th1}}</th>
									<th class="text-center">{{th2}}</th>
									<th>{{th3}}</th>
									<th class="text-center">{{th4}}</th>
									<th class="text-center">{{th5}}</th> 
									<th class="text-center">{{th6}}</th> 
									<th class="text-center">{{th7}}</th>
									<th class="text-center">{{th8}}</th>
									<th class="text-center">{{th9}}</th>
									<th class="text-center">{{th10}}</th>
									<th class="text-center" >{{th11}}</th> 
									<th class="text-center" >{{th12}}</th>  
									<th colspan="2">{{th13}}</th> 
								</tr>
							</thead>
							<tbody>
								<tr
									v-for="item in items"
									:key="item.id"  
								>
									<td :data-title="th1">
										{{item.td1}}
										<div class="dropdown d-inline-block ml-2">
											<div class="dropdown__icon-wrap">
												<img v-if="item.danger" src="../../assets/svg/close.svg"  alt="">
												<img v-else src="../../assets/svg/check.svg"  alt="">
											</div>
											<div class="dropdown__block smallest">
												<div class=" strong mb-1">Date report to the departament</div>
												<div class="row g-1">
													<div class="col">08/18/2020 </div> 
													<div class="col-auto  smallest text-secondary">
														<img v-if="item.danger" src="../../assets/svg/close.svg"  alt="">
														<img v-else src="../../assets/svg/check.svg"  alt="">
														Course complete
													</div>
												</div>
											</div>
										</div>
										<div class="strong"><a :href="'mailto:' + item.td1Link">{{item.td1Link}}</a></div>
									</td>
									<td class="text-center" :data-title="th2">{{item.td2}}</td>
									<td :data-title="th3">{{item.td3}} <br> {{item.td3a}}</td>
									<td class="text-center" :data-title="th4">{{item.td4}}</td>
									<td class="text-center" :data-title="th5">{{item.td5}}</td>
									<td class="text-center" :data-title="th6">{{item.td6}}</td>
									<td class="text-center" :data-title="th7">{{item.td7}}</td>
									<td class="text-center" :data-title="th8">{{item.td8}}</td>
									<td class="text-center" :data-title="th9">{{item.td9}}</td>
									<td class="text-center strong" :data-title="th10">{{item.td10}}</td>
									<td class="text-center" :data-title="th11">{{item.td11}}</td>
									<td class="text-center" :data-title="th12">{{item.td12}}</td>
									<td :data-title="th13">{{item.td13}}</td> 
									<td  ><Lock/></td> 
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
				th1:"Name/Email",
				th2:"DOB",
				th3:"ID/Num. doc.",
				th4:"Class",
				th5:"Enrollment Date/Time", 
				th6:"Where?", 
				th7:"Partner name ID", 
				th8:"Manager name", 
				th9:"Payment",
				th10:"Promocode", 
				th11:"Total time", 
				th12:"Sesions", 
				th13:"End Date/Time", 
				items: [
						{
							td1:"John Smith",
							td1Link:"sample@sample.com",
							td2:"10.10.1996",
							td3:"ID 755 444 556",
							td3a:"# 458 998 556 ",
							td4:"D",
							td5:"15.10.16   15:20", 
							td6:"Unit 3",
							td7:"1558",
							td8:"Maria A.",
							td9:"$4",
							td10:"CZ-BASE",
							td11:"70 min.",
							td12:"3",
							td13:"15.10.16   15:20", 
						}, 
						{

							danger: true,
							td1:"John Smith",
							td1Link:"sample@sample.com",
							td2:"10.10.1996",
							td3:"ID 755 444 556",
							td3a:"# 458 998 556 ",
							td4:"D",
							td5:"15.10.16   15:20", 
							td6:"Unit 3",
							td7:"1558",
							td8:"Maria A.",
							td9:"$4",
							td10:"CZ-BASE",
							td11:"70 min.",
							td12:"3",
							td13:"15.10.16   15:20", 
						}, 
						{
							td1:"John Smith",
							td1Link:"sample@sample.com",
							td2:"10.10.1996",
							td3:"ID 755 444 556",
							td3a:"# 458 998 556 ",
							td4:"D",
							td5:"15.10.16   15:20", 
							td6:"Unit 3",
							td7:"1558",
							td8:"Maria A.",
							td9:"$4",
							td10:"CZ-BASE",
							td11:"70 min.",
							td12:"3",
							td13:"15.10.16   15:20", 
						}, 
						
					
				]
		}
	}
}
</script>
