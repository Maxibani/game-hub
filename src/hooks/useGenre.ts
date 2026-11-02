import genres from "../Datas/genres";

export interface Genre {
  id: number;
  name: string;
  background_image: string | null;
}

const useGenres = (): { data: Genre[]; isLoading: boolean; error: null } => ({
  data: genres as Genre[],
  isLoading: false,
  error: null,
});

export default useGenres;