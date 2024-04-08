import SearchInput from "../components/mui-auto-complete";
import PizzaCard from "../components/mui-card";
import MenuTabs from "../components/mui-tabs";
import { pizzaSample } from "@/placeholder-data/data";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CustomizeOrder from "@/components/customize-order";


export default function Home() {
  return (
    <div className="mb-16 ">
      <div className="fixed top-0 z-50 bg-whdsite w-screen card">
        <div className="absolute top-4 right-4 z-50">
          <ShoppingCartOutlinedIcon />
        </div>

        <div>
          <h1 className="text-2xl font-semibold text-center p-4">
            Acto's Pizza
          </h1>
        </div>

        <div className="mb-8">
          <SearchInput />
        </div>
      </div>

      <div className="grid grid-flow-col auto-cols-[68%] gap-2 overflow-x-auto mb-8 mt-[8.8em] px-2">
        {pizzaSample.map((pizza, index) => {
          return (
            <PizzaCard
              key={index}
              img={pizza.img}
              name={pizza.name}
              price={pizza.price}
              flexDirection="flex-col"
              imgHeight="h-[14em]"
            />
          );
        })}
      </div>

      <div className="p-2">
        <MenuTabs />
      </div>

      <div>
        <CustomizeOrder />
      </div>
    </div>
  );
}
