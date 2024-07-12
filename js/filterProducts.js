
function filterProducts() 
{
    const priceRange = document.getElementById('priceRange').value;
    const productName = document.getElementById('productName').value.toLowerCase();
    const productType = document.getElementById('productType').value;
  
    const products = document.querySelectorAll('.product-card');
  
    
    let activeFilter = null;
    
    if (productType && productType !== "Seleccione el tipo") {
      activeFilter = 'type';
    } else if (productName) {
      activeFilter = 'name';
    } else if (priceRange  && priceRange !== "Seleccione un rango") {
      activeFilter = 'price';
    } else {
      activeFilter = 'type';
    return;
    }
   
   
  
    //callback fn, valida si coincide values de prod y desplega la card correspondiente.
    products.forEach(product => {
      const productPrice = parseInt(product.getAttribute('data-price'));
      const productNameData = product.getAttribute('data-name').toLowerCase();
      const productTypeData = product.getAttribute('data-type');
  
      let match = false;
  
     
      if (activeFilter === 'type') 
      {
        match = productType === productTypeData;
        document.getElementById('priceRange').selectedIndex = 0;
        document.getElementById('productName').value = '';
      } 
      else if (activeFilter === 'price') 
      {
        if (priceRange === "500-10000") 
        {
         match = productPrice > 500;
        }
        else
        {
          let [minPrice, maxPrice] = priceRange.split('-');
          console.log(`min price: ${minPrice}, max price: ${maxPrice}`);
       
          if( parseInt(productPrice) >= parseInt(minPrice) && parseInt(productPrice) <= parseInt(maxPrice))
          {
            match = true;
          }
        }

      }
      else if (activeFilter === 'name') 
      {
        if(productNameData.includes(productName))
        {
          match = true;
        }
        document.getElementById('priceRange').selectedIndex = 0;
        document.getElementById('productType').selectedIndex = 0;
      }
      

      if(match == true)
      {
        product.style.display = '';
      }
      else
      {
        product.style.display = 'none';
      }
  
    
    });
  }
  






  function resetFilters() {
    
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
      product.style.display = '';
    });

    document.getElementById('priceRange').selectedIndex = 0;
    document.getElementById('productName').value = "";
    document.getElementById('productType').selectedIndex = 0;
  }
  

  document.getElementById('filterForm').addEventListener('submit', function (e) {
    e.preventDefault();
    filterProducts();
  });
  
  document.getElementById('filterForm').addEventListener('reset', function (e) {
    e.preventDefault();
    resetFilters();
  });