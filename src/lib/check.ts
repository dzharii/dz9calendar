export function isUndefinedOrNull<T>(obj: T): boolean {
    return typeof obj === 'undefined' || obj === null
}

export function isDefined<T>(obj: T): boolean {
    return !isUndefinedOrNull(obj)
}
