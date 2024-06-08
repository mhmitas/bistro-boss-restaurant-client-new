import React, { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from '../../components/hooks/useAxiosPublic';
import SectionTitle from '../../components/common/section-title/SectionTitle';
import FoodCard from '../../components/common/food-card/FoodCard';
import { useLoaderData } from 'react-router-dom';

const AllMenuItems = () => {
    const axiosPublic = useAxiosPublic()
    const { data: totalCount } = useLoaderData();
    const [itemsPerPage, setItemsPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(0)
    const numberOfPage = Math.ceil(totalCount?.count / itemsPerPage)
    // console.log({ itemsPerPage, currentPage });
    const skip = itemsPerPage * currentPage
    const limit = itemsPerPage
    // console.log({ skip, limit });
    // console.log({ currentPage });
    const pages = [...Array(numberOfPage).keys()]
    // console.log(pages);

    const { data: menuItems = [], isLoading } = useQuery({
        queryKey: ['all-menu-items', currentPage, itemsPerPage],
        queryFn: async () => {
            const { data } = await axiosPublic(`/new-menu?skip=${skip}&limit=${limit}`)
            // console.log(data);
            return data
        }
    })

    return (
        <div>
            <SectionTitle heading='All Menu Items' />
            {isLoading ?
                <span>Loading...</span> :
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-6 gap-4'>
                    {
                        menuItems.map(item => <FoodCard item={item} key={item._id} />)
                    }
                </div>
            }
            {/* pagination button */}
            <div className='flex justify-center items-center my-10 gap-1'>
                <button
                    onClick={() => currentPage > 0 && setCurrentPage(currentPage - 1)}
                    className='btn btn-success'>Previous</button>
                <button
                    onClick={() => currentPage < pages.length - 1 && setCurrentPage(currentPage + 1)}
                    className='btn btn-success'>Next</button>
                {/* creating page buttons by mapping the number of pages */}
                {pages.slice(currentPage - 2 < 0 ? 0 : currentPage - 2, currentPage + 2).map((page) => <button
                    className={`btn ${currentPage === page ? 'btn-warning' : 'btn-primary'}`}
                    key={page}
                    onClick={() => setCurrentPage(page)}
                >{page + 1}</button>)}

                {/* jump to page */}
                <select value={currentPage} onChange={(e) => setCurrentPage(parseInt(e.target.value))} className='select'>
                    {pages.map(page => <option value={page} key={page}>{page + 1}</option>)}
                </select>
                {/* simple select options */}
                <select onChange={(e) => { setItemsPerPage(parseInt(e.target.value)); setCurrentPage(0) }} defaultValue='10' className='select select-bordered'>
                    <option value={5}>Items per page 5</option>
                    <option value={10}>Items per page 10</option>
                    <option value={20}>Items per page 20</option>
                    <option value={50}>Items per page 50</option>
                </select>
            </div>
        </div>
    );
};

export default AllMenuItems;