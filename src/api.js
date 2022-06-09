const base_url = "https://api.battlemetrics.com/";
const server_filter = "servers?filter[game]=rust";
const page_size100 = "&page[size]=100";
const status_filter = "&filter[status]=online";
const minpop_filter = (min_pop) => `&filter[players][min]=${min_pop}`;
const maxpop_filter = (max_pop) => `&filter[players][max]=${max_pop}`;
const search_filter = (server_name) => `&filter[search]=${server_name}`;
const location_filter = (coordinates) => `&location=${coordinates}`;

export const server_stats = (min_pop, max_pop) =>
  `${base_url}${server_filter}${status_filter}${page_size100}${minpop_filter(
    min_pop
  )}${maxpop_filter(max_pop)}`;

export const server_search = (search, min_pop, max_pop) =>
  `${base_url}${server_filter}${status_filter}${page_size100}${search_filter(
    search
  )}${minpop_filter(min_pop)}${maxpop_filter(max_pop)}`;

// console.log(server_stats());
