import { callbacksMap } from './mixinMap';

function modifyRawPage() {
    const pathname = location.pathname;
    if (!callbacksMap.has(pathname)) {
        return;
    }
    const callbacks = callbacksMap.get(pathname);
    callbacks.forEach(fn => fn());
}

export {
    modifyRawPage
}