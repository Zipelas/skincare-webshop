"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import AllProducts from "./allProducts";
import CategoryList from "./categoriesList";
import DescriptionText from "./fillerText";
import FillerImage from "./fillerImage";
import Hero from "./hero";

export default function ClientHomeContent({
  products,
  categories,
}: {
  products: any[];
  categories: any[];
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hero />
      <DescriptionText text="Upptäck vår ekologiska kombucha – en fermenterad tedryck bryggd med naturliga ingredienser
            och levande bakteriekultur (SCOBY). Ett smakrikt och hälsosamt alternativ till läsk,
            tillverkat i liten skala med omtanke och kvalitet."/>
      <CategoryList categories={categories} /> 
      <FillerImage
  leftSrc="/lifestyle/ls1.jpg"
  rightSrc="/lifestyle/ls2.jpg"
/>

      <DescriptionText text="Varje produkt är omsorgsfullt utvald för dess unika smakprofil och förmåga att förgylla vardagen" />
      <AllProducts products={products} />
      <DescriptionText text="｡𖦹°｡˚○･ﾟ･｡･ﾟﾟ･｡˚○∘˚•" />
      <FillerImage
  leftSrc="/lifestyle/ls3.jpg"
  rightSrc="/lifestyle/ls4.jpg"
/>
    </QueryClientProvider>
  );
}
