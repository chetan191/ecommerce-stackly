const simulatedDelay = (ms) => new Promise((res) => setTimeout(res, ms));

const makeProduct = (id, title, brand, price, discount = 0) => ({
  id,
  title,
  brand,
  price,
  discount,
  thumbnail: null,
});

export const fetchProductsByCategory = async (category = "Mobile & Accessories") => {
  await simulatedDelay(500);

  const mobiles = [
    makeProduct(1, "Samsung Galaxy M32", "Samsung", 12000, 10),
    makeProduct(2, "OnePlus Nord CE", "OnePlus", 18000, 15),
    makeProduct(3, "Xiaomi Redmi Note 11", "Xiaomi", 14000, 5),
    makeProduct(4, "Oppo A55", "Oppo", 11000, 20),
    makeProduct(5, "Vivo Y21", "Vivo", 9000, 10),
    makeProduct(6, "iPhone SE", "Apple", 35000, 0),
    makeProduct(7, "Samsung Galaxy S21", "Samsung", 45000, 30),
    makeProduct(8, "OnePlus 9R", "OnePlus", 32000, 25),
  ];

  const laptops = [
    makeProduct(100, "Dell Inspiron 15", "Dell", 45000, 10),
    makeProduct(101, "HP Pavilion", "HP", 52000, 5),
    makeProduct(102, "Lenovo ThinkPad", "Lenovo", 75000, 15),
    makeProduct(103, "Asus Vivobook", "Asus", 40000, 8),
  ];

  const tvs = [
    makeProduct(200, "Samsung 43\" Smart", "Samsung", 30000, 10),
    makeProduct(201, "LG 50\" OLED", "LG", 90000, 20),
    makeProduct(202, "Sony Bravia 55\"", "Sony", 110000, 15),
  ];

  if (category.includes("Laptop")) return laptops;
  if (category.includes("TV")) return tvs;
  return mobiles;
};