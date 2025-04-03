import React, { useContext, useEffect, useState } from 'react';
import './addproduct.css'
import { db,addDoc,collection } from '../../firebase';
import axios from 'axios';
import { MyContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function AddProduct() {
 const {user} = useContext(MyContext)
 const navigate = useNavigate()
  useEffect(()=>{
  function checkLogin(){
    if(!user){
      navigate('/')
    }else{
      navigate('/add-product')
    }
  }
  checkLogin()
  },[])
  // State for form values
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    description: '',
    price: '',
    state: '',
    District: '',
    images:[]
  });

  const [selectedImages, setSelectedImages] = useState([]);
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages([...selectedImages, ...files]);
    console.log(files);
    console.log(selectedImages);
    
  };



  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!formData.title){
      toast.error("title Needed")
    }
    try {
      const uploadedImages = [];
      for (let file of selectedImages) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'Olx-products'); // Replace with Cloudinary preset
        formData.append('cloud_name', 'dy5xp5ai5'); // Replace with your Cloudinary cloud name

        const res = await axios.post(
          `https://api.cloudinary.com/v1_1/dy5xp5ai5/image/upload`,
          formData
        );

        uploadedImages.push(res.data.secure_url);
      }

      const productData = {
        ...formData,
        images: uploadedImages,
      };
      await addDoc(collection(db, "products"), productData);
      alert("Product added successfully!");
      setSelectedImages([])
      setFormData({  
        category: '',
        title: '',
        description: '',
        price: '',
        state: '',
        District: '',
      });
    } catch (error) {
      console.error("Error adding product: ", error);
      alert("Failed to add product. Please try again.");
    }
  };
  

  return (
    <div className="containerr">
      <div className="form-container">
        <h1 className="form-title">Post Your Ad</h1>
        <form id="post-ad-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h2 className="section-title">Select Category</h2>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <input 
                type="text" 
                id="category" 
                placeholder="Add Your Category" 
                required
                value={formData.category}
                onChange={handleChange}
                className='title-input'
              />
            </div>
          </div>
          
          <div className="form-section">
            <h2 className="section-title">Include Details</h2>
            
            <div className="form-group">
              <label htmlFor="title">Ad Title *</label>
              <input 
                type="text" 
                id="title" 
                placeholder="Mention key features (e.g. brand, model, age, type)" 
                required
                value={formData.title}
                onChange={handleChange}
                className='title-input'
              />
              <div className="hint-text">Minimum 10 characters</div>
            </div>

            
            
            <div className="form-group">
              <label htmlFor="description">Description *</label>
              <textarea 
                id="description" 
                rows="5" 
                placeholder="Include condition, features and reason for selling" 
                required
                value={formData.description}
                onChange={handleChange}
              ></textarea>
              <div className="hint-text">Minimum 20 characters</div>
            </div>

            
          </div>
          
          <div className="form-section">
            <h2 className="section-title">Set A Price</h2>
            
            <div className="form-group">
              <label htmlFor="price">Price *</label>
              <div className="price-input">
                <span className="price-symbol">$</span>
                <input 
                  type="number" 
                  id="price" 
                  placeholder="Price" 
                  required
                  min={1}
                  value={formData.price}
                  onChange={handleChange}
                  className='price-input'
                />
              </div>
            </div>
          </div>


          
          <div className="form-section">
            <h2 className="section-title">Upload Photos</h2>
            
            <div className="image-upload">
                <div className="upload-box" >
                  <div className="upload-icon">+</div>
                  <span className="upload-text">Add Photo</span>
                  <input type="file" 
                accept="image/*" 
                multiple 
                required
                onChange={handleImageChange}
                className="upload-btn" />
                </div>
            </div>
            <div className="hint-text">First photo will be the cover image. Clear photos get more responses!</div>
          </div>
          




          <div className="form-section">
            <h2 className="section-title">Your Location</h2>
            
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input 
                type="text" 
                id="state" 
                placeholder="Mention your State" 
                required
                value={formData.state}
                onChange={handleChange}
                className='title-input'
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="District">District</label>
              <input 
                type="text" 
                id="District" 
                placeholder="Enter Your District" 
                required
                value={formData.District}
                onChange={handleChange}
                className='title-input'
              />
            </div>
          </div>
          
          <div className="form-actions">
            <button type="button" className="btn btn-outline">Back</button>
            <button type="submit" className="btn">Post Now</button>
          </div>
        </form>
      </div>
    </div>
  );
}
