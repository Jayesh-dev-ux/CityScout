async function placeSearch() {
  try {
    const searchParams = new URLSearchParams({
      query: "Restaurant",
      ll: "41.8781,-87.6298",
      open_now: "true",
      sort: "DISTANCE",
    });
    const results = await fetch(
      ` https://api.foursquare.com/v3/places/search?${searchParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: "fsq3LcmpOFu6dnNhdGE5C88QvsWe/OzpkQ0EjnSTrTMwAb4=",
        },
      }
    );
    const data = await results.json();
    // console.log(data);
    data.results.forEach((restaurant) => {
      console.log(
        ` name   : ${restaurant.name}\naddress: ${restaurant.location.formatted_address}\n${restaurant.closed_bucket}\nDistance:${restaurant.distance}`
      );
    });

    return data;
  } catch (err) {
    console.error(err);
  }
}
placeSearch();
