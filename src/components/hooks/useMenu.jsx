import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = (category = '', limit = 0) => {
    const axiosPublic = useAxiosPublic()
    const { data: menu = [] } = useQuery({
        queryKey: ['menu-items', category],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`${import.meta.env.VITE_URL}/menu?category=${category}&limit=${limit}`)
            return data
        }
    })
    return [menu]
};

export default useMenu;

/**
 * const [menu, setMenu] = useState([])
    // console.log(limit);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_URL}/menu?category=${category}&limit=${limit}`)
            .then(res => {
                setMenu(res.data)
                // console.log(res.data);
            })
    }, [])
 */