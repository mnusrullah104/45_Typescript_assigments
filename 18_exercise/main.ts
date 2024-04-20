const travelWishList: string[] = [
    "Pakistan",  // Not alphabetical order
    "Plaestine",
    "Saudi Arabia",
    "Iceland",
    "Peru"
  ];
  
  // Print original order
  console.log("Original Wish List:");
  travelWishList.forEach((place) => console.log(place));
  
  // Print alphabetically sorted (without modifying original list)
  console.log("\nWish List (Alphabetical - Copy):");
  const sortedWishList = [...travelWishList].sort(); // Create a copy and sort
  sortedWishList.forEach((place) => console.log(place));
  
  // Print original order again (to show it's unchanged)
  console.log("\nOriginal Wish List (Unmodified):");
  travelWishList.forEach((place) => console.log(place));
  
  // Print reverse alphabetical sorted (without modifying original list)
  console.log("\nWish List (Reverse Alphabetical - Copy):");
  sortedWishList.sort().reverse(); // Sort the copy and reverse
  sortedWishList.forEach((place) => console.log(place));
  
  // Print original order again (to show it's unchanged)
  console.log("\nOriginal Wish List (Unmodified):");
  travelWishList.forEach((place) => console.log(place));
  
  // Reverse the original list
  travelWishList.reverse();
  console.log("\nWish List (Reversed):");
  travelWishList.forEach((place) => console.log(place));
  
  // Reverse the original list again (back to original order)
  travelWishList.reverse();
  console.log("\nWish List (Original Order Restored):");
  travelWishList.forEach((place) => console.log(place));
  
  // Sort the original list alphabetically
  travelWishList.sort();
  console.log("\nWish List (Sorted Alphabetically):");
  travelWishList.forEach((place) => console.log(place));
  
  // Sort the original list in reverse alphabetical order
  travelWishList.sort().reverse();
  console.log("\nWish List (Sorted Reverse Alphabetically):");
  travelWishList.forEach((place) => console.log(place));
  