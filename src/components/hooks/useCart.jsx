import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
    // TanStack Query
    const axiosSecure = useAxiosSecure();
    const { data: cart = [] } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axiosSecure.get('/carts')
            console.log(res.data);
            return res.data
        }
    })
    return [cart]
};

export default useCart;