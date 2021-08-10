export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const catQuery = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(catQuery);
  const data = await response.json();
  return data;
}

export async function getProductsFromQuery(query) {
  const productQuery = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const response = await fetch(productQuery);
  const data = await response.json();
  return data;
}

export async function getProductsFromId(id) {
  const productId = `https://api.mercadolibre.com/sites/MLB/search?category=${id}`;
  const response = await fetch(productId);
  const data = await response.json();
  return data;
}
