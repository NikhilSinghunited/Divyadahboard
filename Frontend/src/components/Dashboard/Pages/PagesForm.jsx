import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import JoditEditor from "jodit-react";

function PagesForm() {
    const [categories, setCategories] = useState([]);
    const [visible, setVisible] = useState(false);
    const initialPageData = {
        category: "",
        name: "",
        url: "",
        title: "",
        metaData: "",
        imgTag: "",
        headHtml: "",
        mapCode: "",
        textSection01: "",
        textSection02: "",
        status: 1
    };
    const [pageData, setPageData] = useState(initialPageData);
    const [prevPage, setPrevPage] = useState(null);
    const [data, setData] = useState([]);
    const editor = useRef(null);

    useEffect(() => {
        fetchCategoriesAndPageData();
    }, []);

    const fetchCategoriesAndPageData = async () => {
        try {
            const categoryResponse = await axios.get("http://localhost:5000/categories");
            const pagesResponse = await axios.get("http://localhost:5000/pages");
            setCategories(categoryResponse.data);
            setData(pagesResponse.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    const onEdit = (page) => {
        if (page) {
            setVisible(true);
            setPrevPage(page);
            const { _id, __v, ...pageWithoutIds } = page; 
            setPageData(pageWithoutIds);
            console.log(pageWithoutIds);
        }
    };

    const handleEdit = async (id, page) => {
        if (page) {
            try {
                const response = await axios.put(`http://localhost:5000/pages/${id}`, page);
                // console.log("Page updated successfully:", response.data);
                alert("Page Updated Successfully!");
                setPrevPage(null);
                const updatedPages = data.map((item) =>
                    item._id === page._id ? response.data : item
                );
                setData(updatedPages);
                setVisible(false);
            } catch (error) {
                console.error("Error updating page:", error);
                alert("Error Updating Page");
            }
        }
    };

    const onDelete = async (page) => {
        try {
            const response = await axios.delete(`http://localhost:5000/pages/${page._id}`);
            alert("Page Deleted Successfully!");
            setData(data.filter((item) => item._id !== page._id));
        } catch (error) {
            console.error("Error deleting page:", error);
            alert("Error Deleting Page");
        }
    };

    const handleSavePage = async () => {
        if (!pageData.name || !pageData.category) {
            return alert("Please fill in all required fields!");
        }
        try {
            const response = await axios.post("http://localhost:5000/pages", pageData);
            console.log("Page saved successfully:", response.data);
            alert("Page Created Successfully!");
            setPageData(initialPageData);
            setVisible(false);
        } catch (error) {
            console.error("Error saving page:", error);
            alert("Error saving page...!")
        }
    };

    const handleChangePage = (key, value) => {
        setPageData(prevState => ({
            ...prevState,
            [key]: value
        }));
    };

    return (
        <>
            <div style={{ width: "50vw" }} className="container bg-dark m-8">

                <div className="create p-4">
                    <button className='btn btn-success' onClick={() => { setPrevPage(null); setPageData(initialPageData); setVisible(!visible); }}>Create Page</button>
                </div>
                <table className="table table-bordered table-dark border-primary">
                    <thead className="fs-5">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">URL</th>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={item._id}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    <h1>{item.url}</h1>
                                </td>
                                <td>
                                    <h1>{item.name}</h1>
                                </td>
                                <td>
                                    <div className="form-check form-switch">
                                        <input
                                            className="form-check-input cursor-pointer"
                                            type="checkbox"
                                            role="switch"
                                            id={`switch${index}`}
                                            defaultChecked={item.status}
                                        />
                                    </div>
                                </td>
                                <td>
                                    <i role="button" className="fa-solid fa-pen-to-square text-warning" onClick={() => onEdit(item)} />
                                    <i role="button" className="fa-solid fa-trash-can text-error pl-5" onClick={() => onDelete(item)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={`overflow-y-scroll absolute z-30 h-[42rem] w-auto  mx-auto left-60 top-20 p-6 border rounded-xl bg-dark text-left ${visible ? 'visible' : 'invisible'}`}>
                <div className="flex justify-between">
                    <h1 className='text-light fs-2 ml-4 pl-10'>{prevPage ? `Update Your Page` : `Create Your Page`}</h1>
                    <button onClick={() => { setVisible(false); }} className='btn btn-close' />
                </div>
                <div style={{ width: "70vw" }} className="container bg-dark m-3 p-3">
                    <form className='p-3'>
                        <div className="d-flex gap-5">
                            <div className="mb-3">
                                <label htmlFor="categories">Select Category</label>
                                <select value={pageData.category} onChange={(e) => handleChangePage('category', e.target.value)} style={{ maxWidth: "12vw" }} id="categories" className="form-select" aria-label="Default select example" required>
                                    <option value="">Select Category</option>
                                    {categories.map((item) => (
                                        <option key={item._id} value={item.categoryName}>
                                            {item.categoryName}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="name" className="form-label m-0">Name</label>
                                <input value={pageData.name} onChange={(e) => handleChangePage('name', e.target.value)} type="text" className="form-control" placeholder='Enter Name' id="name" required />
                            </div>
                            <div >
                                <label htmlFor="url" className="form-label m-0">URL</label>
                                <input value={pageData.url} onChange={(e) => handleChangePage('url', e.target.value)} type="text" className="form-control" placeholder='Enter Name' id="url" required />
                            </div>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="title">Title</label>
                            <input value={pageData.title} onChange={(e) => handleChangePage('title', e.target.value)} type="text" className='form-control' placeholder='Enter Title' id='title' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="metaData">Meta Description</label>
                            <textarea value={pageData.metaData} onChange={(e) => handleChangePage('metaData', e.target.value)} className="form-control" placeholder="Write Meta Description here" id="metaData" style={{ height: "60px" }} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="imgTag">Image Tag</label>
                            <textarea value={pageData.imgTag} onChange={(e) => handleChangePage('imgTag', e.target.value)} className="form-control" placeholder="Write Image Tags here" id="imgTag" style={{ height: "60px" }} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="headHtml">Head Html</label>
                            <textarea value={pageData.headHtml} onChange={(e) => handleChangePage('headHtml', e.target.value)} className="form-control" placeholder="Write Head html here" id="headHtml" style={{ height: "100px" }} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mapCode">Map Code</label>
                            <textarea value={pageData.mapCode} onChange={(e) => handleChangePage('mapCode', e.target.value)} className="form-control" placeholder="Write Map code here" id="mapCode" style={{ height: "100px" }} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="text01">Text section 1</label>
                            <JoditEditor id="text01"
                                ref={editor}
                                value={pageData.textSection01}
                                onChange={(newContent) => handleChangePage('textSection01', newContent)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="text02">Text section 2</label>
                            <JoditEditor id="text02"
                                ref={editor}
                                value={pageData.textSection02}
                                onChange={(newContent) => handleChangePage('textSection02', newContent)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="status" className='form-label'>Status*</label>
                            <select value={pageData.status} onChange={(e) => handleChangePage('status', e.target.value)} id='status' className="form-select" aria-label="Multiple select example">
                                <option value="1" defaultChecked>Enabled</option>
                                <option value="0">Disabled</option>
                            </select>
                        </div>
                        <button className='btn btn-success' onClick={() => { prevPage ? handleEdit(prevPage._id, pageData) : handleSavePage(); }}>Save</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default PagesForm