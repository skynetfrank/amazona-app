import data from "@/lib/data";
import { HomeCard } from "@/components/shared/home/home-card";
import { HomeCarousel } from "@/components/shared/home/home-carousel";
//import { Card, CardContent } from "@/components/ui/card";
import { getAllCategories, getProductsForCard } from "@/lib/actions/product.actions";
import { toSlug } from "@/lib/utils";

export default async function HomePage() {
  const categories = (await getAllCategories()).slice(0, 4);
  const newArrivals = await getProductsForCard({
    tag: "new-arrival",
    limit: 4,
  });
  const featureds = await getProductsForCard({
    tag: "featured",
    limit: 4,
  });
  const bestSellers = await getProductsForCard({
    tag: "best-seller",
    limit: 4,
  });
  const cards = [
    {
      title: "Categorias",
      link: {
        text: "Ver Mas",
        href: "/search",
      },
      items: categories.map((category: string) => ({
        name: category,
        image: `/images/${toSlug(category)}.jpg`,
        href: `/search?category=${category}`,
      })),
    },
    {
      title: "Explorar Lo Mas Nuevo",
      items: newArrivals,
      link: {
        text: "Ver Todos",
        href: "/search?tag=new-arrival",
      },
    },
    {
      title: "Descubre Los Mas Vendidos",
      items: bestSellers,
      link: {
        text: "Ver Todo",
        href: "/search?tag=new-arrival",
      },
    },
    {
      title: "Nuestro Productos",
      items: featureds,
      link: {
        text: "Comprar Ahora",
        href: "/search?tag=new-arrival",
      },
    },
  ];

  return (
    <>
      <HomeCarousel items={data.carousels} />
      <div className="md:p-4 md:space-y-4 bg-border">
        <HomeCard cards={cards} />
      </div>
    </>
  );
}
