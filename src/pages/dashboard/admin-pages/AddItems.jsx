import React from 'react';
import SectionTitle from '../../../components/common/section-title/SectionTitle';
import Container from '../../../components/common/container/Container';
import { useForm } from "react-hook-form"
import axios from 'axios'
import useAxiosSecure from '../../../components/hooks/useAxiosSecure';
import toast, { } from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {
    const axiosSecure = useAxiosSecure()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    async function onSubmit(data) {
        // console.log(data);
        // upload image to imgbb and get an url
        const image = { image: data.image[0] }
        try {
            const res = await axios.post(image_hosting_api, image, {
                headers: { "Content-Type": "multipart/form-data" }
            })
            console.log(res.data.data.display_url);
            if (res.data.success) {
                const menuItem = { ...data, image: res.data.data.display_url }
                console.table(menuItem);
                return
                const menuRes = await axiosSecure.post('/menu', menuItem)
                console.log(menuRes.data);
                if (menuRes.data.insertedId) {
                    toast.success('Item added succesfylly')
                    reset()
                }
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <Container>
            <SectionTitle heading="ADD AN ITEM" subHeading="What's new" />

            <div className='p-6 bg-base-100 '>
                <form onSubmit={handleSubmit(onSubmit)} className='*:mb-2'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input type="text" {...register('name')} className="input input-bordered" required />
                    </div>
                    <div className="sm:flex gap-8 *:mb-2 ">
                        <div className="form-control sm:w-1/2">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select {...register('category')} defaultValue="default" className="select select-bordered w-full max-w-xs">
                                <option disabled value="default">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                            </select>
                        </div>
                        <div className="form-control sm:w-1/2">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input type="number" {...register('price')} className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Select image*</span>
                        </label>
                        <input {...register('image')} type="file" required className="file-input file-input-bordered file-input-primary w-full" />
                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details*</span>
                        </div>
                        <textarea {...register('recipe')} className="textarea textarea-bordered h-24" required></textarea>
                    </label>
                    <div className=' text-center mt-6'>
                        <button className='btn'>Add Item</button>
                    </div>
                </form>
            </div>
        </Container>
    );
};

export default AddItems;