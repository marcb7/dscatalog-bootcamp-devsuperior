import './styles.scss';
import ProductPrice from 'core/components/ProductPrice';
import { Product } from 'core/types/Product';

type Props = {
    product: Product;   // Esse tipo 'Product' é o Product.ts que já foi criado lá na pasta types, e é importado acima pelo VSCode.
}

const ProductCard = ({ product }: Props) => (
    <div className="card-base border-radius-10 product-card">
        <img src={product.imgUrl} alt={product.name} className="product-card-image" />
        <div className="product-info">
            <h6 className="product-name">
                {product.name}
            </h6>
            <ProductPrice price={product.price} />
        </div>
    </div>
);

export default ProductCard;