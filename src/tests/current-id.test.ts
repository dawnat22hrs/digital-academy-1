import { getCurrentId } from "../utils/utils"

describe('getCurrentId', () => {
  it('Проверка на возвращение последней части пути в качестве текущего идентификатора', () => {
    const originalPathname = window.location.pathname

    Object.defineProperty(window, 'location', {
      writable: true,
      value: { pathname: '/example/path/123' }
    })

    const result = getCurrentId()
    expect(result).toEqual(123)

    Object.defineProperty(window, 'location', {
      writable: true,
      value: { pathname: originalPathname }
    })
  })
})
