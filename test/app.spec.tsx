import { App } from '../src/App'
import { render } from '@testing-library/react'

test('app', () => {
  const { getByText } = render(<App />)

  expect(getByText('Vite + React')).toBeTruthy()
})