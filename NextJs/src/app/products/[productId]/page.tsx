const ProductDetails = ({ params }: {
    params: { productId: string}
}) => {
    return(
        <h1>detalhes produto lista {params.productId}</h1>
    );
}

export default ProductDetails;
