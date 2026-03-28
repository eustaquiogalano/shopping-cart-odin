import { describe, it, expect, vi } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";

import addToCart from "./addToCart";
import useDataFetcher from "../../hooks/useDataFetcher";

describe("Add to Cart functionality", () => {
  it("fetches laptops successfully", async () => {
    // ✅ mock fetch
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            products: [
              { id: 1, title: "Test New Laptop" },
              { id: 2, title: "Test Refurbished Laptop" },
              { id: 3, title: "Test Old Laptop" },
            ],
          }),
      })
    );

    const { result } = renderHook(() => useDataFetcher());

    // ✅ wait for async update
    await waitFor(() => {
      expect(result.current.laptops).toBeDefined();
    });

    const newList = addToCart(2, result.current.laptops);
    const newList2 = addToCart(1, newList);
    const newList3 = addToCart(3, newList2);
    console.log(newList3);
  });
});
