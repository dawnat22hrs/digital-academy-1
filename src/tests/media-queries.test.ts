import { getMediaQueries } from "../utils/media-queries/media-queries"

describe('getMediaQueries', () => {
  test('проверка на генерирование набора медиа-запросов на основе предоставленных точек', () => {
    const expectedMediaQueries = {
      isMobile: 'screen and (max-width: 640px)',
      isTablet: 'screen and (min-width: 640px) and (max-width: 1080px)',
      isTabletAndUp: 'screen and (min-width: 640px)',
      isTabletAndDown: 'screen and (max-width: 1080px)',
      isLaptop: 'screen and (min-width: 1080px) and (max-width: 1280px)',
      isLaptopAndUp: 'screen and (min-width: 1080px)',
      isLaptopAndDown: 'screen and (max-width: 1280px)',
      isDesktop: 'screen and (min-width: 1280px) and (max-width: 1920px)',
      isDesktopAndUp: 'screen and (min-width: 1280px)',
      isDesktopAndDown: "screen and (max-width: 1920px)",
      isDesktopMax: 'screen and (min-width: 1920px)',
    }

    expect(getMediaQueries()).toEqual(expectedMediaQueries)
  })
})