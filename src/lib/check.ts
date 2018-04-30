export function isUndefinedOrNull<T>(obj: T): boolean {
    return typeof obj === 'undefined' || obj === null
}
