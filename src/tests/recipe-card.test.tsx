import { render, screen } from '@testing-library/react'
import { RecipesCard } from '../organism/RecipesCard'
import '@testing-library/jest-dom'

describe('RecipesCard', () => {
  const recipe = {
    image: 'test-image-url',
    categoryChip: 'test-category',
    rating: 4,
    cookTimeMinutes: 30,
    name: 'Test Recipe',
  }

  test('Проверка на образование карты рецепта с правильными данными', () => {
    render(<RecipesCard {...recipe} />)

    expect(screen.getByText(recipe.name)).toBeInTheDocument()
    expect(screen.getByText(`${recipe.cookTimeMinutes}min`)).toBeInTheDocument()
    expect(screen.getByAltText('bookmark')).toBeInTheDocument()
    expect(screen.getByAltText('recipe-image')).toBeInTheDocument()
    expect(screen.getByAltText('rating-star')).toBeInTheDocument()
  })
})