<template>
	<div class="FormAside">
		<div class="FormAside__title">If you have any  questions - <span>write to us!</span></div>
		<form >
			<label  class="input-wrap">
				<span class="input-wrap__title">Name </span>
				<input type="text" class="form-control">
			</label>
			
			<label  class="input-wrap">
				<span class="input-wrap__title">E-mail</span>
				<input type="text" class="form-control">
			</label>
			<label  class="input-wrap">
				<span class="input-wrap__title">Your question </span> 
				<textarea name=""  class="form-control"></textarea>
			</label>
			<button class="btn btn-primary w-100">Send</button>
		</form>
	</div>
</template>

<script>
export default {
	name: 'FormAside',
}
</script>

<style lang="scss">
  
</style>