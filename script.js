document.getElementById('logo-upload').addEventListener('change', function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById('company-logo').src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

document.getElementById('product-upload').addEventListener('change', function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const newProduct = document.createElement('div');
      newProduct.classList.add('product');
      newProduct.innerHTML = `
        <img src="${e.target.result}" alt="New Product">
        <h3>New Product</h3>
      `;
      document.getElementById('product-gallery').appendChild(newProduct);
    };
    reader.readAsDataURL(file);
  }
});