import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {

  const category = 'One Punch'

  test('debe mostrar el loading inicialmente', () => {

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    })

    render(<GifGrid category={category} />);

    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));

  })

  test('debe mostrar items cuando se cargan las imagenes con el useFetchGifs', () => {

    const gifs = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'http://algo.com'
      },
      {
        id: '123',
        title: 'Goku',
        url: 'http://otroalgo.com'
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    })

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(2);

  })

})