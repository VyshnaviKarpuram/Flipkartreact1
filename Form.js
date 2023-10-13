import React from 'react'
import '../App';
import axios from 'axios';
import { useState, useEffect } from 'react'
export default function Form() {
    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [brand, setBrand] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [productList, setProductList] = useState([{}])
    const [pid,setPid]=useState('')
    useEffect(() => {
        axios.get('  http://localhost:3002/products').then((res) => setProductList(res.data))
    }, 0)
    console.log(productList)
    const productData = {
        productId: id,
        title: title,
        brand: brand,
        price: price,
        description: description,
        thumbnail: image
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(pid==""){
            axios.post(' http://localhost:3001/products', productData).then((res) => {
            alert("success");
            fetchData();
            setId('');
            setTitle('');
            setBrand('');
            setPrice('');
            setDescription('');
            setImage('');
            })
        }
        else{
            axios.put(`http://localhost:3002/products/${pid}`, productData).then((res) => {
            alert("success");
            fetchData();
            setId('');
            setTitle('');
            setBrand('');
            setPrice('');
            setDescription('');
            setImage('');
            })
        }
        
    }
    const fetchData=()=>{
        axios.get('http://localhost:3002/products').then((res)=>setProductList(res.data))
        console.log(productList);
    }
    const handleDelete = (id) => {
        axios.delete(`http://localhost:3002/products/${id}`).then((res) => { alert('product Deleted') })
        fetchData()
    }
    const handleEdit=(editData)=>{
        setId(editData.productId)
        setTitle(editData.title)
        setBrand(editData.brand)
        setPrice(editData.price)
        setDescription(editData.description)
        setImage(editData.thumbnail)
        setPid(editData.id)
   }
    let sno = 1;
    useEffect(()=>{
        fetchData()
    },0)
    return (
        <>
            <div className="container-fluid">
                <div class="row justify-content-center bg-info">
                    <div className="col-md-6 img-thumbnail">
                        <h3>Details of Products</h3>
                        <form method='post' onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <label>Product Id</label>
                                <input type="text" className="form-control" value={id} placeholder='Enter ProductId' onChange={e => { setId(e.target.value) }} />
                            </div>
                            <div className='mb-3'>
                                <label>Product title</label>
                                <input type="text" className="form-control" value={title} placeholder='Enter Product Title' onChange={e => { setTitle(e.target.value) }} />
                            </div>
                            <div className='mb-3'>
                                <label>Brand</label>
                                <input type="text" className="form-control" value={brand}placeholder='Enter Brand' onChange={e => { setBrand(e.target.value) }} />
                            </div>
                            <div className='mb-3'>
                                <label>Price</label>
                                <input type="text" className="form-control" value={price} placeholder='Enter Price' onChange={e => { setPrice(e.target.value) }} />
                            </div>
                            <div className='mb-3'>
                                <label>Description</label>
                                <input type="text" value={description}className="form-control" onChange={e => { setDescription(e.target.value) }} />
                            </div>
                            <div className='mb-3'>
                                <label>Product Id</label>
                                <input type="url" className="form-control" value={image}placeholder='Enter Image url' onChange={e => { setImage(e.target.value) }} />
                            </div>
                            <button className="btn btn-info">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <table class="table table-bordered" >
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Product Id</th>
                        <th>Title</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Thumbnail</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productList.map((e, i) => {
                            return (
                                <>
                                    <tr>
                                        <td>{sno++}</td>
                                        <td>{e.productId}</td>
                                        <td>{e.title}</td>
                                        <td>{e.brand}</td>
                                        <td>{e.price}</td>
                                        <td>{e.description}</td>
                                        <td><img src={e.thumbnail} height="100" /></td>
                                        <td>
                                            <button className="btn btn-info"><i class="fa-solid fa-pen-to-square" onClick={()=>handleEdit(e)}></i></button>
                                            &nbsp;&nbsp;
                                            <button className="btn btn-warning" onClick={() => handleDelete(e.id)}><i class="fa-solid fa-trash"></i></button>
                                        </td>

                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>


        </>
    )
}