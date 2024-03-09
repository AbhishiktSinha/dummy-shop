export default function debouncer(fn, delay=400) {
    let timerId = null;

    return (...restArgs)=> {
        
        if (timerId) {
            clearTimeout(timerId);

        }
        timerId = setTimeout(() => {
            fn(...restArgs);
            timerId = null;
        }, delay);
    }
}