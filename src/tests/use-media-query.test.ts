import { renderHook, act } from '@testing-library/react-hooks'
import { useMedia } from '../utils/media-queries'

describe('useMedia', () => {
  beforeAll(() => {
    (window.matchMedia as jest.Mock) = jest.fn().mockImplementation((query: string) => {
      return {
        matches: query === '(min-width: 768px)',
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        addListener: jest.fn(),
        removeListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }
    })
  })

  afterAll(() => {
    (window.matchMedia as jest.Mock).mockClear()
  });

  it('Проверка на возвращения состояния по умолчанию', () => {
    const { result } = renderHook(() => useMedia())
    expect(result.current).toEqual({
      isMobile: false,
      isTablet: false,
      isTabletAndUp: false,
      isTabletAndDown: false,
      isLaptop: false,
      isLaptopAndUp: false,
      isLaptopAndDown: false,
      isDesktop: false,
      isDesktopAndDown: false,
      isDesktopAndUp: false,
      isDesktopMax: false,
    });
  });

  it('Проверка обновления состояния окна', () => {
    const { result } = renderHook(() => useMedia());
    expect(result.current).toEqual({
      isMobile: false,
      isTablet: false,
      isTabletAndUp: false,
      isTabletAndDown: false,
      isLaptop: false,
      isLaptopAndUp: false,
      isLaptopAndDown: false,
      isDesktop: false,
      isDesktopAndDown: false,
      isDesktopAndUp: false,
      isDesktopMax: false,
    })

    act(() => {
      window.innerWidth = 768
      window.dispatchEvent(new Event('resize'))
    })

    setTimeout(() => {
        expect(result.current.isTabletAndUp).toBe(true)
      }, 100)
  })
})
