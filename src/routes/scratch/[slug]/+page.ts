import { scratch } from '$lib/data.json';
import { error } from '@sveltejs/kit';

export const prerender = true;

export const load = ({ params }) => {
    const item = scratch.find((item) => item.title === params.slug);
    if (item) {
        return { item }
    }
    throw error(404, 'Not found');

}