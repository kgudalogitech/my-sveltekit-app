<script>
    import { cartOpen } from "$lib/stores/cartOpen";
    import { cartItems } from "$lib/stores/cartItems";
    import { fly } from "svelte/transition";
	import CartItem from "./CartItem.svelte";
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
    </div>
{/if}