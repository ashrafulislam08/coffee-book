import { toast } from "react-toastify";

// get all coffees from local storage
const getAllFavorites = () => {
  const all = localStorage.getItem("favorites");

  if (all) {
    const favorites = JSON.parse(all);
    return favorites;
  } else {
    return [];
  }
};

// Add a coffee to localStorage
const addFavorite = (coffee) => {
  //   get all previously added coffee data
  const favorites = getAllFavorites();
  const isExist = favorites.find((item) => item.id == coffee.id);

  if (isExist) return toast.error("Coffee already exist");

  favorites.push(coffee);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  toast.success("Successfully added");
};

// remove a coffee from localStorage
const removeFavorite = (id) => {
  // get all previously saved coffee data
  const favorites = getAllFavorites();

  const remaining = favorites.filter((coffee) => coffee.id !== id);
  localStorage.setItem("favorites", JSON.stringify(remaining));
  toast.success("Successfully removed!");
};

export { addFavorite, getAllFavorites, removeFavorite };
