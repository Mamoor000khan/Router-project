import { useParams } from 'react-router-dom'


const ProductDetail = () => {
    const params = useParams();

    console.log(params.productId);

    return <section style={{ display: 'grid', justifyContent: 'center'}}>
        <h1 style={{color:'#044599'}}>product detail</h1>
        <p style={{color:'#044599'}}>{params.productId}</p>
    </section>
};



export default ProductDetail;