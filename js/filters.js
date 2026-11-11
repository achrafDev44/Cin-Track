import { chargerDonnees} from "./api.js";
import { renderCards} from "./render.js";

export async function handleFilter(){
    const searchInput = document.getElementById("search");
    const filterSelect = document.getElementById("filter");

    const searchString = searchInput.value.toLocaleLowerCase().trim();
    const status = filterSelect.value;

    const shows = await chargerDonnees();
    const filtreShows = shows.filter((film) => {
        const matchInput = film.title.toLocaleLowerCase().includes(searchString);

        let matchFilter = false;
        if (status === "all") {
            matchFilter = true;
        } else if (status === "film") {
            matchFilter = film.type === "movie";
        } else if (status === "series") {
            matchFilter = film.type === "series";
        }

        return matchInput && matchFilter;
    });

    renderCards(filtreShows);
}