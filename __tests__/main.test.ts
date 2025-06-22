import {expect, test} from '@jest/globals'

test('it works', async () => {
  await expect(1000 - 7).toEqual(993)
})
