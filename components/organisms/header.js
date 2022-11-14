import { useEffect, useState } from "react"
import { XcaretData } from "../../services/xcaret-data"

const Header = () => {
  const [xcaretData4, setXcaretData4] = useState([])

  const loadData2 = async () => {
    let loading = await XcaretData()

    setXcaretData4(loading.es.promotions.map(x => {
      return x
    }))
  }


  useEffect(() => {
    loadData2()
  }, [])

  return (
    <div className='dark:bg-gray-300 w-screen flex pt-20 pb-20'>
      <div className='text-center w-1/2'>
        <div className="title">
          {
            // xcaretData4.map((data, key) => (
            //   <div key={key}>
            //     <img src={data.imagePromo} alt="" srcset=""/>  
            //   </div>
            // ))
          }
        </div>
        <p className="text-3xl">00%</p>
      </div>
      <div className='pr-4 w-1/2 text-2xl'>
        {
          xcaretData4.map((data, key) => (
            <h3 key={key}>{data['paragraphs']}</h3>
          ))
        }
      </div>
    </div>
  )
}

export default Header
