<script>
    import { cartOpen } from "$lib/stores/cartOpen";
    import { cartItems } from "$lib/stores/cartItems";
    import { fly } from "svelte/transition";
	import CartItem from "./CartItem.svelte";
    $: total = Object.values($cartItems).reduce((accumulator, currentItem) => accumulator + currentItem.price, 0).toFixed(2);
</script>
{#if $cartOpen}
    <div transition:fly={{ x: "100%" }} class="fixed border-l top-0 right-0 h-full w-[350px] bg-white">
        <div class="bg-black text-white flex p-3 justify-between">
            Cart
            <button on:click={() => $cartOpen = false}><iconify-icon class="text-30" icon="ic:round-close"></iconify-icon></button>
        </div>
       <div class="p-3 grid gap-3">
        {#each Object.values($cartItems) as item}
            <CartItem {...item}/>
        {/each}
       </div>
       <div class="font-bold uppercase p-6 gap-6 pt-20">
          Total Price : {total}
       </div>
    </div>
{/if}