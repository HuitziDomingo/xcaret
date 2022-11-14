import { useEffect, useState } from "react"
import { XcaretData } from "../../services/xcaret-data"
import { useSelector, useDispatch } from "react-redux"
import { config } from '../../config'
import { language } from '../../context/languageSlice'

const NavBar = () => {

    // const { dictionary } = useSelector(state => state.languageState)
    const dispatch = useDispatch()

    const [xcaretData2, setXcaretData2] = useState([])
    const [xcaretData3, setXcaretData3] = useState([])
    const [xcaretData4, setXcaretData4] = useState([])
    const [xcaretData5, setXcaretData5] = useState([])

    const loadData2 = async () => {
        let loading = await XcaretData()
        setXcaretData2([loading.es.navbar.logo])
        setXcaretData3([loading.es.navbar.menu.lang])
        setXcaretData4([loading.es.navbar.menu.contact])
        setXcaretData5([loading.es.navbar.menu.currency])
    }


    useEffect(() => {
        loadData2()
    }, [])


    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-200">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="/" className="flex items-center">
                    {
                        xcaretData2.map((data2) => (
                            <div key={data2}>
                                <img src={data2} />
                            </div>
                        ))

                    }
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-100 md:dark:bg-gray-200 dark:border-gray-700">
                        {
                            xcaretData3.map((data3) => (
                                <div key={data3}>
                                    <li>{data3.title}</li>
                                </div>
                            ))

                        }
                        {
                            xcaretData4.map((data4) => (
                                <div key={data4}>
                                    <li>{data4}</li>
                                </div>
                            ))

                        }
                        {
                            xcaretData5.map((data5) => (
                                <div key={data5}>
                                    <li>{data5}</li>
                                </div>
                            ))

                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar

