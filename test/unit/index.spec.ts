import slashconfig from '../../src'

describe('index', () => {
  test('does something', async (done) => {
    const result: string = slashconfig()
    expect(result).not.toBeUndefined()
    done()
  })
})
