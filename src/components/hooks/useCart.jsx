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
            const res = await axiosSecure.get(`/carts/${user.email}`)
            return res.data;
        }
    })
    return [cart, refetch]
}
export default useCart

////////////////////////////////////

function useCartItems() {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: cartItems = [], isLoading, refetch } = useQuery({
        queryKey: ['cartItems', user?.email], // error aschilo because ekhane may be instance user ke dorkar?
        queryFn: async () => {
            const res = await axiosSecure.get(`/cart-items/${user.email}`)
            return res.data
        }
    })
    return [cartItems, isLoading, refetch]
}

export { useCartItems }