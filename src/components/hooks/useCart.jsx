//api ; axios[axiosSecure] ; tan stack

import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"
import useAuth from "../../hooks/useAuth"

const useCart = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: cart = [], refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?uid=${user.uid}`)
            return res.data;
        }
    })
    return [cart, refetch]
}

export default useCart