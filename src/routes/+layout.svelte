<script>
	import { setContext } from 'svelte';
	import '../app.scss';
	import 'iconify-icon';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Cart from '$lib/components/Cart.svelte';
	setContext('site.title', 'Logitech');
	let rtl = false;
	function toggleRTL() {
		rtl = !rtl;
	}
	$: dir = rtl ? 'rtl' : 'ltr';
</script>

<div>
	<div class="mx-auto max-w-screen-lg px-6 py-12">
		<div class="col-start-2">
			<!-- Here you can place your Navigation -->
		</div>
		<div>
			<button on:click={toggleRTL}>Toggle RTL</button>
			<div class="grid gap-6" {dir}>	
				<Header/>
				<slot />
				<Footer/>
			</div>
			<Cart />	
		</div>
	</div>
</div>
