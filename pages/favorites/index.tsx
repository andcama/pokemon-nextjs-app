import { NoFavorites } from '../../components/ui';
import Image from 'next/image';
import { Layout } from '../../components/layouts/Layout';
import { useState, useEffect } from 'react';
import { localFavorites } from '@/utils';
import { Card, Grid } from '@nextui-org/react';
import { FavoritePokemons } from '@/components/pokemon/FavoritePokemons';

export const FavoritesPage = () => {

  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setfavoritePokemons(localFavorites.pokemons());
  }, [])

  return (
    <Layout title='Pokemons - Favoritos'>

      {
        favoritePokemons.length === 0
          ? (<NoFavorites />)
          : (
           <FavoritePokemons pokemons={favoritePokemons}/>
          )
      }
    </Layout>
  )
}
export default FavoritesPage;