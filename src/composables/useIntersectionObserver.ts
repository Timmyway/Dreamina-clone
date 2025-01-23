import { onMounted, ref } from "vue";

interface IntersectionObserverOptions {
    threshold?: number | number[];
    root?: Element | null;
    rootMargin?: string;
}

type InterserctionObserverCallback = (entry: IntersectionObserverEntry) => void;

export function useIntersectionObserver(
    callback: InterserctionObserverCallback,
    options: IntersectionObserverOptions = { threshold: 0.1 }
) {
    const observer = ref<IntersectionObserver | null>(null);

    const startObserving = (elements: NodeListOf<HTMLElement>) => {
        if (observer.value) {
            elements.forEach((el) => observer.value?.observe(el))
        }
    };

    const stopObserving = (elements: NodeListOf<HTMLElement>) => {
        if (observer.value) {
            elements.forEach((el) => observer.value?.unobserve(el));
        }
    }

    onMounted(() => {
        // Create the IO with the provided callback and options
        observer.value = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                callback(entry); // Run the callback for each entry
            });
        }, options);
    });

    return { startObserving, stopObserving }
}