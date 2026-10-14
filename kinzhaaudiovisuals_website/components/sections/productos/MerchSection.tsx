"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CategoryTabs from "@/components/sections/productos/CategoryTabs";
import ProductCard from "@/components/sections/productos/ProductCard";
import { CATEGORIES, getProductsByCategory, type CategoryId } from "@/lib/data/products";

export default function MerchSection() {
  const [active, setActive] = useState<CategoryId>(
    CATEGORIES[0]?.id ?? ("" as CategoryId)
  );
  
  const products = getProductsByCategory(active);

  return (
    <section id="productos">
      <Container className="pb-32">
        <SectionHeading className="text-center">
          MERCANCÍA & COLECCIONABLES
        </SectionHeading>

        <CategoryTabs 
          categories={CATEGORIES} 
          active={active} 
          onChange={setActive} 
        />

        {products.length > 0 ? (
          <ul className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
            <ProductCard key={product.id} product={product} />
            ))}
          </ul>
        ) : (
          <p className="mt-14 text-center text-sm text-zinc-400">
            Pronto tendremos productos en esta categoría.
          </p>
        )}
      </Container>
    </section>
  );
}