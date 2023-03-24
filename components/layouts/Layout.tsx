import Head from "next/head"
import React, { PropsWithChildren } from 'react'
import { NavBar } from '../ui';

interface Props extends PropsWithChildren{
    title?:string;
}
export const Layout: React.FC<PropsWithChildren<Props>> = ({children,title}) => {

  return (
   <>
   <Head>
    <title>{title || 'PokemonApp'}</title>
    <meta name="author" content="Andres Camacho"/>
    <meta  name="description" content={ `Informacion sobre el pokemon ${title} `}/>
    <meta name="keywords" content={ `${title},pokemon,pokedex`}  />
   </Head>
   <NavBar/>
   <main style={{
    padding:'0px 20px'
   }}>
    {children}
   </main>
   </>
  )
}
