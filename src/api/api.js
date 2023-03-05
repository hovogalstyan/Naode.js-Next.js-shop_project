
export const getProducts = async () => {
    const response = await fetch('http://localhost:5000/products')
    const res = await response.json()
    return res.products
}
export const getCart = async () => {
    const response = await fetch('http://localhost:5000/cart')
    const res = await response.json()
    return res.cart
}