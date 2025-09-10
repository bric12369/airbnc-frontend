import { describe, test, expect } from "vitest";
import { getDateRange, convertDateISOtoString } from "./formatDateRange";

describe('convertDateISOToString', () => {
    test('converts an ISO formatted date to string format', () => {
        const date = "2025-10-20T00:00:00.000Z"
        expect(convertDateISOtoString(date)).toBe('Mon Oct 20 2025')
    })
})

describe('getDateRange', () => {
    test('returns an array of both input dates when passed consecutive dates, in date string format', () => {
        const start = "2025-10-20T00:00:00.000Z"
        const end = "2025-10-21T00:00:00.000Z"
        const startStr = 'Mon Oct 20 2025'
        const endStr = 'Tue Oct 21 2025'
        expect(getDateRange(start, end)).toEqual([startStr, endStr])
    })
    test('returns an array of start, end and middle dates when passed dates split by one day', () => {
        const start = "2025-10-20T00:00:00.000Z"
        const end = "2025-10-22T00:00:00.000Z"
        const startStr = 'Mon Oct 20 2025'
        const middleStr = 'Tue Oct 21 2025'
        const endStr = 'Wed Oct 22 2025'
        expect(getDateRange(start, end)).toEqual([startStr, middleStr, endStr])
    })
    test('returns the full range of dates inc start and end', () => {
        const start = "2025-10-20T00:00:00.000Z"
        const end = "2025-10-24T00:00:00.000Z"
        const startStr = 'Mon Oct 20 2025'
        const mid1Str = 'Tue Oct 21 2025'
        const mid2Str = 'Wed Oct 22 2025'
        const mid3Str = 'Thu Oct 23 2025'
        const endStr = 'Fri Oct 24 2025'
        expect(getDateRange(start, end)).toEqual([startStr, mid1Str, mid2Str, mid3Str, endStr])
    })
})