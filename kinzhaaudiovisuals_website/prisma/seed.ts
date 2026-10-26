import { config } from "dotenv";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";
import { PRODUCTS, getProductSizes } from "../lib/data/products";

config({ path: ".env.local" });

const INITIAL_STOCK = 10;

async function main() {
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
  const prisma = new PrismaClient({ adapter });

  const rows = PRODUCTS.flatMap((product) => {
    const sizes = getProductSizes(product);
    return (sizes.length ? sizes : [""]).map((size) => ({
      productId: product.id,
      size,
      quantity: INITIAL_STOCK,
    }));
  });

  const result = await prisma.stockItem.createMany({ data: rows, skipDuplicates: true });
  console.log(`Stock: ${result.count} filas nuevas de ${rows.length}.`);

  await prisma.$disconnect();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});