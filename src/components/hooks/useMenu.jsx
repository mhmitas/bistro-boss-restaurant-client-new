import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = (category = '', limit = 0) => {
    const axiosPublic = useAxiosPublic()
    const { data: menu = [], isPending, refetch } = useQuery({
        queryKey: ['menu-items', category],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`${import.meta.env.VITE_URL}/menu?category=${category}&limit=${limit}`)
            return data
        }
    })
    return [menu, refetch]
};

export default useMenu;