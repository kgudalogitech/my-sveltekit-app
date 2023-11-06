import { mockProducts } from '$lib/mockProducts.js';
export function load({ params }) {
	return {
		products : mockProducts
	};
}

