import { sanityClient } from 'sanity:client';
import imageUrlBuilder from "@sanity/image-url";
import type { SanityAsset } from '@sanity/image-url/lib/types/types';

export const imageBuilder = imageUrlBuilder(sanityClient);

export const urlForImage = (source: SanityAsset) => {
    return imageBuilder.image(source);
}

export const urlForImage100x100 = (source: SanityAsset) => {
    return imageBuilder.image(source).width(100).height(100);
}