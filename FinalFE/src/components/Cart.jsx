import React, { useEffect, useState } from 'react'

export default function Cart() {
    const [data,setData] = useState([])

    useEffect(() => {
        const isi = [];
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          const r = JSON.parse(localStorage.getItem(key));
          isi.push(r);
        }
        console.log(isi)
        setData(isi);
      }, []);
    
      console.log(data)
  return (
  <div>
    {data.map((p,index) => {
        <div key={index}>
            <h1>{p.title}</h1>
        </div>
    })}
  </div>
  )
}
