<script>
	let rtl = false;
	function toggleRTL() {
		rtl = !rtl;
	}
</script>
<button on:click={toggleRTL}>Toggle RTL</button>
<div class="grid gap-6" dir={rtl ? 'rtl' : 'ltr'}>
	<header class="border p-4 flex gap-6 justify-between items-center">
		<div class="font-bold uppercase text-24 text-blue">Logitech</div>
		<div class=""><iconify-icon class="text-30" icon="mdi:cart-outline"></iconify-icon></div>
	</header>
	<main class="grid gap-6 md:[grid-template-columns:250px_auto]">
		<div class="border p-6"><h1>Filters</h1></div>
		<div class="border p-6">
			<h1>Main Content</h1>
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magni ullam debitis suscipit, 
				quibusdam illo, odit consequuntur minima consectetur vitae 
				eligendi voluptate maxime iusto ex! Officia quo sint cumque aliquam.</p>
		</div>
	</main>
	<footer class="border p-6 flex flex-wrap gap-6 justify-between bg-gray-200 text-white">
		<div>&copy;2023 Logitech</div>
		<div class="text-blue flex flex-wrap gap-6">
			<a href="#" class="hover:underline">About</a>
			<a href="#" class="hover:underline">Contact</a>
			<a href="#" class="hover:underline">Support</a>
			<a href="#" class="hover:underline">Privacy</a>
		</div>

	</footer>
</div>

