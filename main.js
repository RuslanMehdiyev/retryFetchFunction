const BASE_URL = "https://northwind.vercel.app/api/supppliers";

async function retryFetch(url, n) {
  try {
    return await axios.get(url).then((res) => console.log(res.data));
  } catch (err) {
    if (n === 1) {
      throw err;
    }
    return await retryFetch(url, n - 1);
  }
}

console.log(retryFetch(BASE_URL, 4));
