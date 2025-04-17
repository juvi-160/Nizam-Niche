import React from 'react';
const useState = React.useState;
import Upload from '../assets/upload.jpg';
import Headers from '../components/Header';
import Nav from '../components/Nav';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const ProductForm = ({ token }) => {
  const [img1, setImg1] = useState(false);
  const [img2, setImg2] = useState(false);
  const [img3, setImg3] = useState(false);
  const [img4, setImg4] = useState(false);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Women');
  const [subCategory, setSubCategory] = useState('Womens Clothing');
  const [price, setPrice] = useState('');
  const [genre, setGenre] = useState('History');
  const [stock, setStock] = useState('');
  const [rating, setRating] = useState('');
  const [author, setAuthor] = useState('');
  const [designer, setDesigner] = useState('');
  const [material, setMaterial] = useState('');
  const [artifactCategory, setArtifactCategory] = useState('Suclpted Figures');
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("price", price);
      formData.append("genre", genre);
      formData.append("stock", stock);
      formData.append("rating", rating);
      formData.append("author", author);
      formData.append("designer", designer);
      formData.append("material", material);
      formData.append("artifactCategory", artifactCategory);
      formData.append("sizes", JSON.stringify(sizes));

      img1 && formData.append("img1", img1);
      img2 && formData.append("img2", img2);
      img3 && formData.append("img3", img3);
      img4 && formData.append("img4", img4);

      const response = await axios.post(
        `${backendUrl}/api/product/add`,
        formData,
        {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      );
      console.log("Token:", token);

      if (response.data.success) {
        toast.success(response.data.message)
        setTitle('');
        setDescription('');
        setPrice('');
        setGenre('');
        setStock('');
        setRating('');
        setAuthor('');
        setDesigner('');
        setImg1(false);
        setImg2(false);
        setImg3(false);
        setImg4(false);
        setSizes([]);
        setMaterial('');
      } else{
        toast.error(response.data.message)
      }

    } catch (error) {
      console.error("Error uploading product:", error);
      toast.error("Error uploading product")
    }
  };

  return (
    <>
      <Headers />
      <div className='flex'>
        <div className="w-1/4 bg-[#24160f] min-h-screen shadow-lg">
          <Nav />
        </div>
        <form onSubmit={onSubmitHandler} className='flex flex-col w-full gap-4 pr-40 pl-40 pt-10 '>
          <div>
            <p className='mb-2 font-bold text-xl'>Upload Images</p>
            <div className='flex gap-4'>
              {[img1, img2, img3, img4].map((img, index) => (
                <label htmlFor={`img${index + 1}`} key={index}>
                  <img
                    src={!img ? Upload : URL.createObjectURL(img)}
                    alt=""
                    className='h-20 w-20 border-2'
                  />
                  <input
                    onChange={(e) => {
                      const setImg = [setImg1, setImg2, setImg3, setImg4][index];
                      setImg(e.target.files[0]);
                    }}
                    type="file"
                    id={`img${index + 1}`}
                    hidden
                  />
                </label>
              ))}
            </div>
          </div>

          <div>
            <p className='mb-2 font-bold text-xl'>Product title</p>
            <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" className='w-full border-2 p-2 rounded-2xl' placeholder='Product Title..' required />
          </div>

          <div>
            <p className='mb-2 font-bold text-xl'>Product description</p>
            <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full border-2 p-4 rounded-2xl' placeholder='Product Description..' required />
          </div>

          <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
            <div>
              <p className='mb-2 font-bold text-xl'>Category</p>
              <select onChange={(e) => setCategory(e.target.value)} value={category} className='w-full border-2 p-2 rounded-2xl'>
                <option value="">Select Category</option>
                <option value="Women">Women</option>
                <option value="Men">Men</option>
                <option value="Artifacts">Artifacts</option>
                <option value="Books">Book</option>
              </select>
            </div>

            <div>
              <p className='mb-2 font-bold text-xl'>Sub-category</p>
              <select onChange={(e) => setSubCategory(e.target.value)} value={subCategory} className='w-full border-2 p-2 rounded-2xl'>
                <option value="">Select Sub-Category</option>
                <option value="Womens Clothing">Womens Clothing</option>
                <option value="Womens Jewellery">Womens Jewellery</option>
                <option value="Womens Shoes">Womens Shoes</option>
                <option value="Mens Clothing">Mens Clothing</option>
                <option value="Mens Accessories">Mens Accessories</option>
                <option value="Mens Shoes">Mens Shoes</option>
                <option value="Artifacts">Artifacts</option>
                <option value="Books">Book</option>
              </select>
            </div>

            <div>
              <p className='mb-2 font-bold text-xl'>Price</p>
              <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" placeholder="Enter price" className='w-full border-2 p-2 rounded-2xl sm:w-[120px]' />
            </div>
          </div>

          <div>
            <p className='mb-2 font-bold text-xl'>Product Sizes</p>
            <div className='flex gap-3'>
              {["S", "M", "L", "XL"].map(size => (
                <div key={size} onClick={() =>
                  setSizes(prev =>
                    prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
                  )
                }>
                  <p className={`${sizes.includes(size) ? "bg-[#f3e5dc]" : "bg-slate-300"} p-4 cursor-pointer rounded-xl`}>
                    {size}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className='mb-2 font-bold text-xl'>Stock</p>
            <input onChange={(e) => setStock(e.target.value)} value={stock} className='w-full border-2 p-2 rounded-2xl' placeholder='Stock..' required />
          </div>

          <div>
            <p className='mb-2 font-bold text-xl'>Genre</p>
            <select onChange={(e) => setGenre(e.target.value)} value={genre} className='w-full border-2 p-2 rounded-2xl'>
              <option value="">Select Genre</option>
              <option value="History">History</option>
              <option value="Fiction & Poetry">Fiction & Poetry</option>
              <option value="Culture & Heritage">Culture & Heritage</option>
              <option value="Cook Books">Cook Books</option>
            </select>
          </div>

          <div>
            <p className='mb-2 font-bold text-xl'>Artifacts Category</p>
            <select onChange={(e) => setArtifactCategory(e.target.value)} value={artifactCategory} className='w-full border-2 p-2 rounded-2xl'>
              <option value="">Select Artifact Category</option>
              <option value="Suclpted Figures">Sculpted Figures</option>
              <option value="Islamic Art">Islamic Art</option>
              <option value="Paintings">Paintings</option>
            </select>
          </div>

          <div>
            <p className='mb-2 font-bold text-xl'>Rating</p>
            <input type="number" onChange={(e) => setRating(e.target.value)} value={rating} className='w-full border-2 p-2 rounded-2xl' placeholder='Ratings...' required />
          </div>

          <div>
            <p className='mb-2 font-bold text-xl'>Product Material</p>
            <input type="text" onChange={(e) => setMaterial(e.target.value)} value={material} className='w-full border-2 p-2 rounded-2xl' placeholder='Material...' />
          </div>

          <div>
            <p className='mb-2 font-bold text-xl'>Author</p>
            <input type="text" onChange={(e) => setAuthor(e.target.value)} value={author} className='w-full border-2 p-2 rounded-2xl' placeholder='Author...' />
          </div>

          <div>
            <p className='mb-2 font-bold text-xl'>Designer</p>
            <input type="text" onChange={(e) => setDesigner(e.target.value)} value={designer} className='w-full border-2 p-2 rounded-2xl' placeholder='Designer...' />
          </div>

          <button type='submit' className='bg-[#d7b99a] p-3 rounded-2xl font-semibold w-fit px-6'>Submit</button>
        </form>
      </div>
    </>
  );
};

export default ProductForm;
