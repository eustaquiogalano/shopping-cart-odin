import React from "react";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "./ui/combobox";
import { Funnel } from "lucide-react";

const brands = ["Apple", "Asus", "HP", "Lenovo", "Acer"];
const ramCapacity = ["8GB", "16GB", "32GB", "64GB"];
const storageCapacity = ["512GB", "1TB", "2TB"];
const processors = ["Apple", "Intel", "Snapdragon", "AMD"];
const priceRanges = ["$300-$500", "$500-$1000", "$1000-$1800", "$1800+"];

function FilterBar() {
  return (
    <section className="flex flex-col gap-3 bg-secondary rounded-xl px-4 py-6">
      <h3 className="flex gap-2">
        <Funnel /> Filter
      </h3>
      <div className="flex flex-col gap-3 ">
        {/* Brands */}
        <Combobox items={brands}>
          <div className="flex flex-col">
            <p>Brand </p>
            <ComboboxInput placeholder="Select a brand" />
          </div>
          <ComboboxContent>
            <ComboboxEmpty>No items found.</ComboboxEmpty>
            <ComboboxList>
              {(item) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>

        {/* Ram and Storage Capacity */}
        <div className="flex gap-2 w-full">
          <Combobox items={ramCapacity}>
            <div className="justify-center flex flex-col w-full">
              <p>RAM Capacity</p>
              <ComboboxInput className="" placeholder="Select ram" />
            </div>
            <ComboboxContent>
              <ComboboxEmpty>No items found.</ComboboxEmpty>
              <ComboboxList>
                {(item) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
          <Combobox items={storageCapacity}>
            <div className="flex flex-col w-full">
              <p>Storage Capacity</p>
              <ComboboxInput placeholder="Select storage" />
            </div>
            <ComboboxContent>
              <ComboboxEmpty>No items found.</ComboboxEmpty>
              <ComboboxList>
                {(item) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>

        {/* Processor */}
        <Combobox items={processors}>
          <div className="flex flex-col">
            <p>Processor</p>
            <ComboboxInput placeholder="Select processor" />
          </div>
          <ComboboxContent>
            <ComboboxEmpty>No items found.</ComboboxEmpty>
            <ComboboxList>
              {(item) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>

        {/* Price Range */}
        <Combobox items={priceRanges}>
          <div className="flex flex-col">
            <p>Price Range</p>
            <ComboboxInput placeholder="Select price range" />
          </div>
          <ComboboxContent>
            <ComboboxEmpty>No items found.</ComboboxEmpty>
            <ComboboxList>
              {(item) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
    </section>
  );
}

export default FilterBar;
