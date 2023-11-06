<script>
	import ColorSwatch from "./ColorSwatch.svelte";
	import ProductImage from "./ProductImage.svelte";
    import { addToCart } from "$lib/stores/cartItems";

    export let title;
    export let variants;
    let selectedVariantIndex = 0;
    function swatchClicked(index) {
        selectedVariantIndex = index;
    }
    function addToCartSelected() {
        addToCart(title, selectedVariant);
    }
    $: selectedVariant =  variants[selectedVariantIndex];
</script>
<div class="border grid p-3 gap-2">
    <ProductImage hex={selectedVariant.hex}/>
    <div class="font-bold uppercase">{title}</div>
    <div class="flex gap-2">
        {#each variants as variant, index}
         <ColorSwatch on:click={() => swatchClicked(index)} selected={selectedVariantIndex === index} hex={variant.hex} />
        {/each}
    </div>
    <div class="">${selectedVariant.price}</div>
    <div class="">
        <button on:click={addToCartSelected} class="bg-black text-white p-2">Add to Cart</button>
    </div>

</div>