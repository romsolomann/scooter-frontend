import createCache, { type EmotionCache } from "@emotion/cache";

export const isBrowser: boolean = typeof document !== "undefined";

export function createEmotionCache(): EmotionCache {
	let insertionPoint: undefined | HTMLElement;

	if (isBrowser) {
		const emotionInsertionPoint = document.querySelector(
			'meta[name="emotion-insertion-point"]'
		) as HTMLElement;
		insertionPoint = emotionInsertionPoint ?? undefined;
	}

	return createCache({
		key: "muirtl",
		insertionPoint,
	});
}

export const clientSideEmotionCache: EmotionCache = createEmotionCache();
