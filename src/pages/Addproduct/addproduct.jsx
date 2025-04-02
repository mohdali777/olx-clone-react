import React, { useState } from 'react';
import './addproduct.css'

export default function AddProduct() {
  // State for form values
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    brand: '',
    condition: 'used',
    price: '',
    negotiable: false,
    state: '',
    city: '',
    neighborhood: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send data to your backend
  };

  return (
    <div className="containerr">
      <div className="form-container">
        <h1 className="form-title">Post Your Ad</h1>
        
        <div className="progress-bar">
          <div className="progress-step completed">1</div>
          <div className="progress-step active">2</div>
          <div className="progress-step">3</div>
          <div className="progress-line"></div>
          <div className="progress-line-filled"></div>
        </div>
        
        <form id="post-ad-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h2 className="section-title">Select Category</h2>
            <div className="category-selector">
              <div className="category-list">
                <div className="category-item active">Electronics & Appliances</div>
                <div className="category-item">Cars</div>
                <div className="category-item">Motorcycles</div>
                <div className="category-item">Mobile Phones</div>
                <div className="category-item">For Sale: Houses & Apartments</div>
                <div className="category-item">Scooters</div>
                <div className="category-item">Commercial & Other Vehicles</div>
                <div className="category-item">For Rent: Houses & Apartments</div>
              </div>
              <div className="subcategory-list">
                <div className="category-item active">Computer & Laptops</div>
                <div className="category-item">TV, Video - Audio</div>
                <div className="category-item">Kitchen & Other Appliances</div>
                <div className="category-item">Computer Accessories</div>
                <div className="category-item">Hard Disks, Printers & Monitors</div>
                <div className="category-item">ACs</div>
                <div className="category-item">Washing Machines</div>
                <div className="category-item">Refrigerators</div>
              </div>
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
            
            <div className="form-group">
              <label htmlFor="brand">Brand *</label>
              <select 
                id="brand" 
                required
                value={formData.brand}
                onChange={handleChange}
              >
                <option value="">Select Brand</option>
                <option value="hp">HP</option>
                <option value="dell">Dell</option>
                <option value="lenovo">Lenovo</option>
                <option value="apple">Apple</option>
                <option value="asus">Asus</option>
                <option value="acer">Acer</option>
                <option value="samsung">Samsung</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Condition *</label>
              <div className="checkbox-group">
                <input 
                  type="radio" 
                  id="condition-new" 
                  name="condition" 
                  value="new"
                  checked={formData.condition === "new"}
                  onChange={() => setFormData({...formData, condition: "new"})}
                />
                <label htmlFor="condition-new">New</label>
              </div>
              <div className="checkbox-group">
                <input 
                  type="radio" 
                  id="condition-used" 
                  name="condition" 
                  value="used" 
                  checked={formData.condition === "used"}
                  onChange={() => setFormData({...formData, condition: "used"})}
                />
                <label htmlFor="condition-used">Used</label>
              </div>
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
                  value={formData.price}
                  onChange={handleChange}
                  className='price-input'
                />
              </div>
            </div>
            
            <div className="checkbox-group">
              <input 
                type="checkbox" 
                id="negotiable"
                checked={formData.negotiable}
                onChange={handleChange}
              />
              <label htmlFor="negotiable">Negotiable</label>
            </div>
          </div>
          
          <div className="form-section">
            <h2 className="section-title">Upload Photos</h2>
            
            <div className="image-upload">
              {[1, 2, 3, 4, 5].map((num) => (
                <div className="upload-box" key={num}>
                  <div className="upload-icon">+</div>
                  <span className="upload-text">Add Photo</span>
                  <input type="file" className="upload-btn" />
                </div>
              ))}
            </div>
            <div className="hint-text">First photo will be the cover image. Clear photos get more responses!</div>
          </div>
          
          <div className="form-section">
            <h2 className="section-title">Your Location</h2>
            
            <div className="form-group">
              <label htmlFor="state">State *</label>
              <select 
                id="state" 
                required
                value={formData.state}
                onChange={handleChange}
              >
                <option value="">Select State</option>
                <option value="ca">California</option>
                <option value="ny">New York</option>
                <option value="tx">Texas</option>
                <option value="fl">Florida</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="city">City *</label>
              <select 
                id="city" 
                required
                value={formData.city}
                onChange={handleChange}
              >
                <option value="">Select City</option>
                <option value="sf">San Francisco</option>
                <option value="la">Los Angeles</option>
                <option value="sd">San Diego</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="neighborhood">Neighborhood *</label>
              <select 
                id="neighborhood" 
                required
                value={formData.neighborhood}
                onChange={handleChange}
              >
                <option value="">Select Neighborhood</option>
                <option value="downtown">Downtown</option>
                <option value="uptown">Uptown</option>
                <option value="midtown">Midtown</option>
              </select>
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