import { Catergories } from "@/components/categories";
import { SearchInput } from "@/components/search-input";
import prismadb from "@/lib/prismadb";

const RootPage = async () => {
  const categories = await prismadb.category.findMany();

  return (
    <div className="h-full pt-8 p-4 space-y-4">
      <SearchInput />
      <Catergories data={categories}/>
    </div>
  );
};

export default RootPage;
