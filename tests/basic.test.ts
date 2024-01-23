import { describe, it, expect, test } from 'vitest'
import UnitTest from '../components/UnitTest.vue'

describe('UnitTest', () => {
    it('is a Vue instance', () => {
        expect(UnitTest).toBeTruthy()
    })
})

test('my test', () => {
    console.log('testing unit');
    // ... test with Nuxt environment!
})