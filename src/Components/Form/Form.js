import React,{useState} from 'react'

function Form() {

    const [name,SetName] = useState("");
    const [price,SetPrice] = useState("");
    const [id,SetId] = useState("");
    const [products, setProducts] = useState([]);
    const [totalValue, setTotalValue] = useState(0);



   

    // const [name,SetName] = useState("");

    // const [name,SetName] = useState("");



    function nameHandler(event){
SetName(event.target.value);
    }

    function idHandler(event){
      SetId(event.target.value);
          }

          function priceHandler(event){
            SetPrice(event.target.value);
                }

 

      const formSubmitHandler = event => {
        event.preventDefault();

        const newProduct = { name, price, id };


    setProducts([...products, newProduct]);
    const newTotalValue = totalValue + Number(price);
    setTotalValue(newTotalValue);
   
    SetName("");
    SetPrice("");
    SetId("");
      
        // props.onAddProduct();
      };


      function deleteProduct(index) {

        const deletedProductPrice = products[index].price;

        const newTotalValue = totalValue - Number(deletedProductPrice);
        setTotalValue(newTotalValue);
  
        const updatedProducts = products.filter((_, i) => i !== index);
    
     
        setProducts(updatedProducts);
      }
  return (
    <div>
        <form onSubmit={formSubmitHandler}> 
            <label>Product Id: </label>
            <input type='number' 
            value={id}
             onChange={idHandler}></input>

<label>Selling Price</label>
            <input type='number' 
            value={price}
             onChange={priceHandler}></input>

<label>Product Name</label>
            <input type='text' 
            value={name}
             onChange={nameHandler}></input>



<button type='submit'>Add Product</button>
        </form>


        <div>

          <h1>Product</h1>
          <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product.name} - {product.price} - {product.id}
              <button onClick={() => deleteProduct(index)}>Delete</button>
            </li>
          ))}
          </ul>

          <p>Total Value: {totalValue}</p>

        </div>
    </div>
  )
}

export default Form