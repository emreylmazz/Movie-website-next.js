import React from 'react'
import Movies from '../../components/Movies'

const Page =async({params}) => {
 const keyword = params.keyword;
 const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=0e2524100ad0783401d220c7900bedb8&query=${keyword}&language=en-US&include_adult=false`)
 const data = await res.json();
 
 return (

    <div>
{

!data?.results ?  
<div> Aranilan Şey Bulunamadi !!!</div> :
        <div className='flex items-center flex-wrap gap-3'>
            {
                data?.results?.map((dt,i) =>(
                    <Movies key={i} dt={dt}/>
                  ))
            }
        </div>
}
    </div>
    
  )
}

export default Page 