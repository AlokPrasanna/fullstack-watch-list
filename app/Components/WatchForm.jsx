import { addWatch } from "../server-actions/addWatch";

export default function WatchForm(){
    return (
        <form action={addWatch} className="mb-6">
            <div className="mb-4">
                <label htmlFor="brand" className="block mb-2 text-white">Brand</label>
                <input 
                    type="text"
                    id="brand"
                    name="brand"
                    className="w-full px-3 py-2 text-white bg-gray-700 border border-gray-600 rounded shadow appearance-none"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="model" className="block mb-2 text-white">Model</label>
                <input 
                    type="text"
                    id="model"
                    name="model"
                    className="w-full px-3 py-2 text-white bg-gray-700 border border-gray-600 rounded shadow appearance-none"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="referenceNumber" className="block mb-2 text-white">Reference Number</label>
                <input 
                    type="text"
                    id="referenceNumber"
                    name="referenceNumber"
                    className="w-full px-3 py-2 text-white bg-gray-700 border border-gray-600 rounded shadow appearance-none"
                />
            </div>
            <button type="submit" className="px-4 py-2 font-bold text-white bg-gray-600 rounded hover:bg-gray-300 hover:text-black">
                Add Watch
            </button>
        </form>     
    )
}