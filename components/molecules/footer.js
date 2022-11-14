import { useEffect, useState } from "react"
import { XcaretData } from "../../services/xcaret-data"

const Footer = () => {
  const [xcaretData4, setXcaretData4] = useState([])

  const loadData2 = async () => {
    let loading = await XcaretData()
    console.log([loading.es.prefooter.contactCenter])
    setXcaretData4([loading.es.prefooter.contactCenter])
  }


  useEffect(() => {
    loadData2()
  }, [])
  return (
    <>
      <div className='dark:bg-gray-300 w-screen flex pt-10 pb-10 pl-20'>
        <div className="text-xs">
          <p>
            10 % de descuento en tarifas vigentes de Hotel Xcaret Arte.
            <br />
            Los descuentos de compra anticipada pueden variar dependiendo de la fecha de reserva y la fecha de estadía.
            <br />
            Periodo para reservar: Del 02 al 16 de mayo de 2022. Periodo para viajar: del 12 de julio al 16 de agosto del 2022.
            <br />
            Sujeto a disponibilidad.
          </p>
          <p className="mt-6">
            Políticas de cancelación:<br />
            Cambios y cancelaciones de acuerdo a políticas establecidas antes de las 15:00 hrs hora local del día de llegada.
            <br />
            Penalidad: 100% de la estancia
          </p>
          <p className="mt-6">
            Restricciones:<br />
            No aplica con otras promociones.<br />
            Tarifa sujeta a cambios sin previo aviso.
          </p>
        </div>
      </div>
      <div className='bg-slate-900 w-screen flex pt-1 pb-1 pl-20'>
        <div className='text-center w-1/2'>
          {
            xcaretData4.map(data => (
              <p className="text-white">{data.title}</p>
            ))
          }
          {
            xcaretData4.map(data => (
              <p className="text-slate-400 text-xs">{data.email}</p>
            ))
          }
        </div>
        <div className='pr-4 w-1/2 text-2xl'>
          redes
        </div>
      </div>
    </>
  )
}

export default Footer
