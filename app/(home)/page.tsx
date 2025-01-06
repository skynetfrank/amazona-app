import data from "@/lib/data";
import { HomeCard } from "@/components/shared/home/home-card";
import { HomeCarousel } from "@/components/shared/home/home-carousel";
//import { Card, CardContent } from "@/components/ui/card";
import { getAllCategories, getProductsByTag, getProductsForCard } from "@/lib/actions/product.actions";
import { toSlug } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import ProductSlider from "@/components/shared/product/product-slider";
import BrowsingHistoryList from "@/components/shared/browsing-history-list";

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
      title: "Lo Mas Reciente",
      items: newArrivals,
      link: {
        text: "Ver Todos",
        href: "/search?tag=new-arrival",
      },
    },
    {
      title: "Los Mas Vendidos",
      items: bestSellers,
      link: {
        text: "Ver Todo",
        href: "/search?tag=new-arrival",
      },
    },
    {
      title: "Mas Productos",
      items: featureds,
      link: {
        text: "Comprar Ahora",
        href: "/search?tag=new-arrival",
      },
    },
  ];
  const todaysDeals = await getProductsByTag({ tag: "todays-deal" });
  const bestSellingProducts = await getProductsByTag({ tag: "best-seller" });

  return (
    <>
      <HomeCarousel items={data.carousels} />
      <div className="md:p-4 md:space-y-4 bg-border">
        <HomeCard cards={cards} />
        <Card className="w-full rounded-none">
          <CardContent className="p-4 items-center gap-3">
            <ProductSlider title={"Promociones de Hoy"} products={todaysDeals} />
          </CardContent>
        </Card>
        <Card className="w-full rounded-none">
          <CardContent className="p-4 items-center gap-3">
            <ProductSlider title="Productos Mas Vendidos" products={bestSellingProducts} hideDetails />
          </CardContent>
        </Card>
      </div>
      <div className="p-4 bg-background">
        <BrowsingHistoryList />
      </div>
    </>
  );
}
