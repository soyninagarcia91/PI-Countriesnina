import { useEffect, useState } from "react"
import { setAllCountries } from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux"
import Cards from "../cards/Cards"
import Pagination from "./Pagination"

const CountryList = () => {

    const countries = useSelector(state => state.allCountries)
    const dispatch = useDispatch()

    // const [countries, setCountries] = useState([])
    const totalCountries = countries.length
    const [countriesPerPage, setCountriesPerPage] = useState(12)
    const [currentPage, setCurrentPage] = useState(1)

    // const countryList = async() => {
    //     const data = await fetch('http://localhost:3002/countries')
    //     const countries = await data.json()
    //     setCountries(countries)
    // }

    useEffect(() => {
        const fetchCountries = async () => {
            try {
              const response = await fetch('http://localhost:3002/countries');
              const data = await response.json();
              dispatch(setAllCountries(data));
            } catch (error) {
              console.error('Error al cargar países');
            }
          };
      
          fetchCountries();
    }, [dispatch])

    const lastIndex = currentPage * countriesPerPage
    const firstIndex = lastIndex - countriesPerPage
    const currentCountries = countries.slice(firstIndex, lastIndex)

    return(
        <div>
            <Cards countries={currentCountries} ></Cards>
            <Pagination
            countriesPerPage={countriesPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalCountries={totalCountries}
            ></Pagination>
        </div>
    )
}

export default CountryList