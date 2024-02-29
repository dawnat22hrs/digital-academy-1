import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BlogPosts } from '../organism/BlogPosts'
import { Provider } from 'react-redux'
import { store } from '../stores/store'

test('Проверка на отключение кнопки "Next" на последенй странице', async () => {
  render(
    <Provider store={store}>
      <BlogPosts />
    </Provider>
  )

  fireEvent.click(await screen.findByTestId('next-btn'))
  expect(screen.getByTestId('next-btn')).toBeDisabled()
})