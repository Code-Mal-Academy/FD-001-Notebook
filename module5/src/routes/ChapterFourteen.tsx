import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

type FormData = {
    task: string;
    finished: boolean
};

const ChapterFourteen = () => {
    const param = useParams<{ id: string }>()
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        const req = await axios.put("/api/todo/update", { task: data.task, id: Number(param.id), finished: data.finished })

        if (req.status === 200) {
            navigate('/chapter-11')
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-md shadow-md text-white">
            <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="firstName" className="block text-gray-300">Task</label>
                    <input
                        type="text"
                        id="firstName"
                        {...register('task', { required: true })}
                        className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:border-blue-500"
                    />
                    {errors.task && <span className="text-red-500">Task is required</span>}
                </div>

                <div className="mb-4">
                    <label htmlFor="finished" className="block text-gray-300">Finished</label>
                    <input
                        type="checkbox"
                        id="finished"
                        {...register('finished')}
                        className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:border-blue-500"
                    />
                </div>

                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ChapterFourteen;
