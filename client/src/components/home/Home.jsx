import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'
import Cards from '../cards/Cards'
import '../pagination/Pagination.css'
import { SearchBar } from '../searchBar/SearchBar'


const Home = () => {
    const [countries, setCountries] = useState([])
    const [pageCount, setPageCount] = useState(0)

    const pages = async () => {
        const api = await fetch('http://localhost:5000/countries')
        const data = await api.json()
        const total = data.length
        setPageCount(Math.ceil(total/10))
    }

    useEffect(() => {
        const getCountries = () => {
            fetch('http://localhost:5000/countries?_limit=10')
            .then(res => res.json())
            .then(data => setCountries(data))
        }
        pages()
        getCountries()

    }, [])

    console.log(countries)

    const fetchCountries = async (currentPage) => {
        const res = await fetch(`http://localhost:5000/countries?_page=${currentPage}_limit=10`)
        const data = await res.json()
        return data
    }

    const handlePageClick = async (data) => {
        let currentPage = data.selected + 1
        
        const countriesFromApi = await fetchCountries(currentPage)
        setCountries(countriesFromApi)
    }
    return(
        <section className="home">
            <SearchBar />
            <Cards countries={countries} />
            <ReactPaginate
                previousLabel ={'<<'}
                nextLabel={'>>'}
                breakLabel={'...'}
                breakClassName='dots'
                pageCount={pageCount}
                marginPagesDisplayed={3}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName='pag'
                pageClassName='pag_item'
                pageLinkClassName='pag_link'
                previousClassName=  'prev' 
                nextClassName= 'next'
                activeClassName='active'
            />
        </section>
    )
}

export default Home