
function filterProducts() {
    const priceRange = document.getElementById('priceRange').value;
    const productName = document.getElementById('productName').value.toLowerCase();
    const productType = document.getElementById('productType').value;
  
    const products = document.querySelectorAll('.product-card');
  
    //callback fn, valida si coincide values de prod y desplega la card correspondiente.
    products.forEach(product => {
      const productPrice = parseInt(product.getAttribute('data-price'));
      const productNameData = product.getAttribute('data-name').toLowerCase();
      const productTypeData = product.getAttribute('data-type');
  
      let priceMatch = false;
      let nameMatch = false;
      let typeMatch = false;
  
      if (priceRange) {
        const [minPrice, maxPrice] = priceRange.split('-');
        priceMatch = productPrice >= parseInt(minPrice) && (maxPrice ? productPrice <= parseInt(maxPrice) : true);
      } else {
        priceMatch = true;
      }
  
      if (productName) {
        nameMatch = productNameData.includes(productName);
      } else {
        nameMatch = true;
      }
  
      if (productType) {
        typeMatch = productType === productTypeData;
      } else {
        typeMatch = true;
      }

      // debuggear
      console.log(`productName: ${productNameData}, ProductPrice: ${productPrice}, productTypeData: ${productTypeData}, Price Match: ${priceMatch}, Name Match: ${nameMatch}, Type Match: ${typeMatch}`);

      if (/*priceMatch || nameMatch ||*/ typeMatch) {
        product.style.display = '';
      } else {
        product.style.display = 'none';
      }
    });
  }
  
  function resetFilters() {
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
      product.style.display = '';
    });
  }
  

  document.getElementById('filterForm').addEventListener('submit', function (e) {
    e.preventDefault();
    filterProducts();
  });
  
  document.getElementById('filterForm').addEventListener('reset', function (e) {
    e.preventDefault();
    resetFilters();
  });