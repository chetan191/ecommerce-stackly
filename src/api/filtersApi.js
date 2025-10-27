
const simulatedDelay = (ms) => new Promise((res) => setTimeout(res, ms));

export const fetchFilters = async (category = "Mobile & Accessories") => {
  await simulatedDelay(400);

  const base = [
    { name: "Brands", options: ["Samsung", "Apple", "Oppo", "Vivo", "OnePlus"] },
    { name: "Prices", options: ["Under ₹10,000", "₹10,000 - ₹20,000", "Above ₹20,000"] },
    { name: "Discounts", options: ["10% Off", "20% Off", "30% Off"] },
  ];

  if (category.includes("Laptop")) {
    return [
      { name: "Brands", options: ["Dell", "HP", "Lenovo", "Asus", "Acer"] },
      { name: "RAM", options: ["4GB", "8GB", "16GB", "32GB"] },
      { name: "Processor", options: ["i3", "i5", "i7", "Ryzen 5", "Ryzen 7"] },
    ];
  }

  if (category.includes("TV")) {
    return [
      { name: "Brands", options: ["Samsung", "LG", "Sony", "Mi"] },
      { name: "Screen Size", options: ["32\"", "43\"", "50\"", "55\"", "65\"+"] },
      { name: "Smart TV", options: ["Yes", "No"] },
    ];
  }
  return base;
};