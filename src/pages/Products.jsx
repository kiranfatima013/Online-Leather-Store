import { useEffect, useState } from 'react'
import { supabase } from '../services/supabaseClient'

export default function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    supabase.from('products').select('*').then(({ data }) => setProducts(data))
  }, [])

  return (
    <div>
      {products.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>PKR {p.price}</p>
        </div>
      ))}
    </div>
  )
}