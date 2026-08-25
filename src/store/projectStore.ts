import { useEffect } from "react";
import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

export type Repo = {
  id: number;
  full_name: string;
  description: string;
  html_url: string;
  private: boolean;
  language?: string;
  stargazers_count?: number;
  topics?: string[];
  pushed_at?: string;
};

type ProjectsStore = {
  projects: Repo[];
  loading: boolean;
  error: string | null;
  hasFetched: boolean;
  fetchProjects: () => Promise<void>;
};

const byStars = (a: Repo, b: Repo) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0);

const useProjectsStore = create<ProjectsStore>((set, get) => ({
  projects: [],
  loading: false,
  error: null,
  hasFetched: false,
  fetchProjects: async () => {
    const { hasFetched, loading } = get();
    if (hasFetched || loading) return;

    set({ loading: true, error: null });
    try {
      const response = await fetch(import.meta.env.VITE_GITHUB_API_URL);
      if (!response.ok) throw new Error("Failed to fetch projects");

      const repos: Repo[] = await response.json();
      const projects = repos.filter((repo) => !repo.private && repo.description).sort(byStars);
      set({ projects, loading: false, hasFetched: true });
    } catch (error) {
      set({
        loading: false,
        error: error instanceof Error ? error.message : "Failed to fetch projects",
      });
    }
  },
}));

/** Fetches once per session and returns the projects with their load state. */
export const useProjects = () => {
  const fetchProjects = useProjectsStore((state) => state.fetchProjects);

  useEffect(() => {
    void fetchProjects();
  }, [fetchProjects]);

  return useProjectsStore(
    useShallow(({ projects, loading, error }) => ({ projects, loading, error }))
  );
};
