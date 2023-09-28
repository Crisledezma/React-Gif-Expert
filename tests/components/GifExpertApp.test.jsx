import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../../src/GifExpertApp"

describe('Pruebas en el componente', () => {

  test('should first', () => {

    render(<GifExpertApp />);
    screen.debug();

  })



})