import Item from './Item';

const ItemList = ({products, categoryId}) => {
    return(
        <div className="container mt-2">
            {categoryId ? (
                <h1 className="title has-text-centered p-5">{
                        categoryId === 'perfumes-femeninos'
                    ? 'Fragancias Femeninas'
                    : categoryId === 'perfumes-masculinos'
                    ? 'Fragancias Masculinas'
                    : categoryId}
                </h1>
            ) : (
                <>
                    <h1 className="title has-text-centered p-5">Bienvenido a ED Perfumerie</h1>
                    <h2 className="subtitle has-text-centered pb-5">Conozca nuestras fragancias</h2>
                </>
            )}
            <div className="columns is-multiline">
                {products.map(prod => (
                    <div key={prod.id} className="column is-3">
                        <Item {...prod} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ItemList