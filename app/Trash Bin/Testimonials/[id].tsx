// import React from 'react';
// import { GetStaticPaths, GetStaticProps } from 'next';
// // import Testimonials from '@/app/LandingPage/Testimonials';
// import fs from 'fs';
// import path from 'path';

// interface Product {
//   id: string;
//   name: string;
//   description: string;
//   price: string;
//   image: string;
// }

// interface ProductPageProps {
//   product: Product;
// }

// const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
//   return (
//     <div className="container mx-auto py-8">
//       <div className="flex flex-col items-center">
//         <img src={product.image} alt={product.name} className="w-64 h-64 object-cover" />
//         <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
//         <p className="text-xl mt-2">{product.price}</p>
//         <p className="text-lg mt-4">{product.description}</p>
//       </div>
//       <Testimonials product={product.id} />
//     </div>
//   );
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const filePath = path.join(process.cwd(), 'products.json');
//   const jsonData = fs.readFileSync(filePath, 'utf-8');
//   const products: Product[] = JSON.parse(jsonData);

//   const paths = products.map((product) => ({
//     params: { id: product.id },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const filePath = path.join(process.cwd(), 'products.json');
//   const jsonData = fs.readFileSync(filePath, 'utf-8');
//   const products: Product[] = JSON.parse(jsonData);

//   const product = products.find((product) => product.id === params?.id);

//   return {
//     props: { product },
//   };
// };

// export default ProductPage;
