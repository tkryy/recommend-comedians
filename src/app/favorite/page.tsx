import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar' 
import Fotter from '../components/Fotter' 

export default function Favorite() {
  return (
    <html data-theme="light">
    <>
    <Header></Header>
    <h1>お気に入り</h1>
    <Sidebar></Sidebar>
    
 
    
  

    <Fotter></Fotter>
    </>
    </html>
  )
} 