const products = [
    {
        id: '1',
        name:'Explorer EDP',
        marca:'MONTBLANC',
        price: 131700,
        category: 'perfumes-masculinos',
        img: 'exploreredp.png',
        stock: 10,
        description: 'Perfume Explorer EDP Hombre 100Ml'
    },
    {
        id: '2',
        name:'The One For Men Intense EDP',
        marca:'DOLCE & GABBANA',
        price: 93900,
        category: 'perfumes-masculinos',
        img: 'theone.png',
        stock: 12,
        description: 'Perfume The One For Men Intense EDP 100Ml'
    },
    {
        id: '3',
        name:'Wanted EDT',
        marca:'AZZARO',
        price: 131000,
        category: 'perfumes-masculinos',
        img: 'wanted.png',
        stock: 9,
        description: 'Perfume Wanted EDT Hombre 100Ml'
    },
    {
        id: '4',
        name:'Bad Boy Le Parfum EDP',
        marca:'CAROLINA HERRERA',
        price: 138850,
        category: 'perfumes-masculinos',
        img: 'badboy.png',
        stock: 11,
        description: 'Perfume Bad Boy Le Parfum EDP Hombre 150Ml'
    },
    {
        id: '5',
        name:'GIVENCHY',
        marca:"L'Interdit EDP",
        price: 138000,
        category: 'perfumes-femeninos',
        img: 'linterditedp.png',
        stock: 8,
        description: "Perfume L'Interdit EDP Mujer 80Ml"
    },
    {
        id: '6',
        name:'The One Gold EDP',
        marca:'DOLCE & GABBANA',
        price: 168000,
        category: 'perfumes-femeninos',
        img: 'theonegold.png',
        stock: 15,
        description: 'Perfume The One Gold EDP Mujer 75Ml'
    },
    {
        id: '7',
        name:'Wanted Girl By Night EDP',
        marca:'AZZARO',
        price: 156000,
        category: 'perfumes-femeninos',
        img: 'wantedgirl.png',
        stock: 7,
        description: 'Perfume Wanted Girl By Night EDP Mujer 80Ml'
    },
    {
        id: '8',
        name:'Good Girl Supreme EDP',
        marca:'CAROLINA HERRERA',
        price: 111500,
        category: 'perfumes-femeninos',
        img: 'goodgirl.png',
        stock: 5,
        description: 'Perfume Good Girl Supreme EDP Mujer 80Ml'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod=> prod.id === productId))
        },500)
    })
}

export const getProductsByCategory = (categoryId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.filter(prod=> prod.category === categoryId))
        },500)
    })
}