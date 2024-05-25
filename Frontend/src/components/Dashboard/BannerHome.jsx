import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FormData from 'form-data';

function BannerHome() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [visible, setVisible] = useState(false);
    const [prevFile, setPrevFile] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await axios.get("http://localhost:5000/banners");
        setData(response.data);
        // console.log(response.data);
    };

    const onEdit = (banner) => {
        if (banner) {
            setVisible(true);
            setPrevFile(banner);
        }
    };
    const handleEdit = async (banner) => {
        if (banner) {
            try {
                const formData = new FormData();
                formData.append("image", selectedFile);
                const response = await axios.put("http://localhost:5000/banners/" + banner._id, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                // console.log("Banner saved successfully:", response.data);
                alert("Banner Updated Successfully!");
                setPrevFile(null);
                const updatedBanner = data.map(data =>
                    data._id === banner._id ? response.data : data
                );
                setData(updatedBanner);
            } catch (error) {
                console.error("Error updating banner:", error);
                alert("Error Updating Banner");
            }
        }
    };

    const onDelete = async (banner) => {
        try {
            const response = await axios.delete("http://localhost:5000/banners/" + banner._id);

            // console.log("Banner deleted successfully:", response.data);
            alert("Banner Deleted Successfully!");
            setData(data.filter(data => data._id !== banner._id));
        } catch (error) {
            console.error("Error deleting banner:", error);
            // Handle error (e.g., show error message)
            alert("Error Deleting Banner");
        }
    };

    const handleSave = async () => {
        if (!selectedFile) {
            return alert("Please Select File First!");
        }
        try {
            const formData = new FormData();
            formData.append("image", selectedFile); // Add the selected file to FormData
            // console.log(formData);
            // Send POST request to backend endpoint
            const response = await axios.post("http://localhost:5000/banners", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            // console.log("Banner saved successfully:", response.data);
            alert("Banner Created Successfully!");
            setData([...data, response.data]);
        } catch (error) {
            console.error("Error saving banner:", error);
            // Handle error (e.g., show error message)
            alert("Error creating Banner");
        }
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    return (
        <>
            <div style={{ width: "50vw" }} className="container bg-dark m-8">

                <div className="create p-4">
                    <button className='btn btn-success' onClick={() => { setLoading(true); setPrevFile(null); setVisible(!visible); }}>Create Banner</button>
                </div>
                <table className="table table-bordered table-dark border-primary">
                    <thead className="fs-5">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Images</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={item._id}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    <img style={{ width: "60px" }} src={item.image} alt="defaultImg" />
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
                                    <i role="button" className="fa-solid fa-pen-to-square text-warning" onClick={() => onEdit(item)} />
                                    <i role="button" className="fa-solid fa-trash-can text-error pl-5" onClick={() => onDelete(item)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className={`overflow-auto \ z-30 \ h-3/2 \ w-10/12 \ mx-auto \ left-60 \ top-20 \ p-6 \ border \ rounded-xl \ bg-dark \ text-left \ fixed \ ${visible ? 'visible' : 'invisible'}`}>
                <div className="flex justify-between">
                    <h1 className='text-light fs-2 ml-4 pl-10'>{prevFile ? `Update Your banner` : `Create Your Banner`}</h1>
                    <button onClick={() => { setVisible(false); }} className='btn btn-close' />
                </div>
                <div style={{ width: "70vw" }} className="banner-form m-10 bg-dark">
                    <div className="container p-4">
                        <div className="mb-3">
                            <label htmlFor="imgFile" className="form-label">Image*</label>
                            <input className="form-control" name="image" type="file" id="imgFile" onChange={handleFileChange} required />
                            {prevFile && <div className='d-flex pt-2'><label htmlFor="oldPic">PrevBanner:</label><img className='ml-5' style={{ width: "100px" }} src={prevFile.image} alt="defaultImg" id='oldPic' /></div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formSelect" className="form-label">Status*</label>
                            <select defaultValue="enabled" id='formSelect' className="form-select" aria-label="Default select example">
                                <option value="enabled" >Enabled</option>
                                <option value="disabled">Disabled</option>
                            </select>
                        </div>
                        <div className="d-flex gap-4">
                            <button onClick={() => { prevFile ? handleEdit(prevFile) : handleSave(); setVisible(false); }} className='btn btn-success'>Save</button>
                            <button className='btn btn-primary'>Save & Stay here</button>
                            <button className='btn btn-error'>Save & New</button>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default BannerHome