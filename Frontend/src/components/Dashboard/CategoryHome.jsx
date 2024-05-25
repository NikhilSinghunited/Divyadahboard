import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CategoryHome() {
    const [visible, setVisible] = useState(false);
    const [categories, setCategories] = useState([]);
    const [newCategoryName, setNewCategoryName] = useState("");
    const [prevCategory, setPrevCategory] = useState(null);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await axios.get("http://localhost:5000/categories");
            setCategories(response.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    const handleCreateCategory = async () => {
        if (newCategoryName.length <= 0) {
            return alert("Category Name should be more than 0 characters.");
        }
        try {
            const response = await axios.post("http://localhost:5000/categories", { categoryName: newCategoryName });
            setCategories([...categories, response.data]);
            setNewCategoryName("");
        } catch (error) {
            console.error("Error creating category:", error);
        }
    };

    const onEdit = (categoryId) => {
        if (categoryId) {
            setVisible(true);
            setPrevCategory(categoryId);
        }
    };

    const handleDeleteCategory = async (categoryId) => {
        try {
            await axios.delete(`http://localhost:5000/categories/${categoryId}`);
            setCategories(categories.filter(category => category._id !== categoryId));
        } catch (error) {
            console.error("Error deleting category:", error);
        }
    };

    const handleUpdateCategory = async (categoryId, updatedCategoryName) => {
        try {
            const response = await axios.put(`http://localhost:5000/categories/${categoryId}`, { categoryName: updatedCategoryName });
            const updatedCategories = categories.map(category =>
                category._id === categoryId ? response.data : category
            );
            setCategories(updatedCategories);
        } catch (error) {
            console.error("Error updating category:", error);
        }
    };


    return (
        <>
            <div style={{ width: "50vw" }} className="container bg-dark m-8">
                <div className="create p-4">
                    <button className='btn btn-success' onClick={() => { setPrevCategory(null); setNewCategoryName(""); setVisible(!visible); }}>Create Category</button>
                </div>
                <table className="table table-bordered table-dark border-primary">
                    <thead className="fs-5">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((item, index) => (
                            <tr key={item._id}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    <h1>{item.categoryName}</h1>
                                </td>
                                <td>
                                    <div className="form-check form-switch">
                                        <input
                                            className="form-check-input cursor-pointer"
                                            type="checkbox"
                                            role="switch"
                                            id={`switch${index}`}
                                            defaultChecked
                                        />
                                    </div>
                                </td>
                                <td>
                                    <i role="button" className="fa-solid fa-pen-to-square text-warning" onClick={() => { onEdit(item._id); setNewCategoryName(item.categoryName); }} />
                                    <i role="button" className="fa-solid fa-trash-can text-error pl-5" onClick={() => handleDeleteCategory(item._id)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className={`overflow-auto \ z-30 \ h-3/2 \ w-10/12 \ mx-auto \ left-60 \ top-20 \ p-6 \ border \ rounded-xl \ bg-dark \ text-left \ fixed \ ${visible ? 'visible' : 'invisible'}`}>
                <div className="flex justify-between">
                    <h1 className='text-light fs-2 ml-4 pl-10'>{prevCategory ? `Update Your Category` : `Create Your Category`}</h1>
                    <button onClick={() => { setVisible(false); }} className='btn btn-close' />
                </div>
                <div style={{ width: "70vw" }} className="banner-form m-10 bg-dark">
                    <div className="container p-4">
                        <label htmlFor="categoryName" className='form-label'>Text*</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Category Name</span>
                            <input onChange={(e) => { setNewCategoryName(e.target.value); }} value={newCategoryName} type="text" id='categoryName' className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formSelect" className="form-label">Status*</label>
                            <select defaultValue="enabled" id='formSelect' className="form-select" aria-label="Default select example">
                                <option value="enabled" >Enabled</option>
                                <option value="disabled">Disabled</option>
                            </select>
                        </div>
                        <div className="d-flex gap-4">
                            <button onClick={() => { prevCategory ? handleUpdateCategory(prevCategory, newCategoryName) : handleCreateCategory(); setVisible(false); }} className='btn btn-error'>Save</button>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default CategoryHome