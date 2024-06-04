import { FormGroup } from "@mui/material";
import RadioButtonsGroup from "./mui-radio-group";
import CheckboxLabels from "./mui-checkbox";

export default function CustomizeOrderForm() {
  return (
    <form action="">
      <FormGroup>
        <RadioButtonsGroup
          label="Sizes"
          options={["10 inches", "12 inches", "14 inches", "16 inches"]}
        />
      </FormGroup>
      <FormGroup>
        <RadioButtonsGroup
          label="Crusts"
          options={["Thin", "Regular", "Deep Dish"]}
        />
      </FormGroup>
      <FormGroup>
        <CheckboxLabels
          label="Toppings"
          options={[
            "Pepperoni",
            "Sausage",
            "Mushroom",
            "Green Pepper",
            "Black Olive",
          ]}
        />
      </FormGroup>
      <FormGroup>
        <CheckboxLabels
          label="Extras"
          options={["Extra Cheese", "Extra Sauce"]}
        />
      </FormGroup>

      <button type="submit" className="bg-[#ed4734] p-2 rounded-lg mx-auto">
        Checkout
      </button>
    </form>
  );
}
